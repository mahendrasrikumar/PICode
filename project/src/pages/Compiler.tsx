import React, { useState, useEffect } from 'react';
import { Play, Save, Download, Share2, RefreshCw, Terminal, Code, FileText, Folder, ChevronLeft, ChevronRight, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import { CompilerService } from '../services/compilerService';
import LoadingSpinner from '../components/common/LoadingSpinner';

const compilerLanguages = [
  { 
    id: 71, 
    name: 'python', 
    displayName: 'Python', 
    version: '3.11.0', 
    extension: '.py', 
    defaultCode: '# Welcome to Python!\nprint("Hello, World!")\n\n# Try some basic operations\nnumbers = [1, 2, 3, 4, 5]\nprint(f"Sum: {sum(numbers)}")\nprint(f"Average: {sum(numbers) / len(numbers)}")',
    isActive: true 
  },
  { 
    id: 62, 
    name: 'java', 
    displayName: 'Java', 
    version: 'OpenJDK 17.0.1', 
    extension: '.java', 
    defaultCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, World!");\n        \n        // Try some basic operations\n        int[] numbers = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int num : numbers) {\n            sum += num;\n        }\n        System.out.println("Sum: " + sum);\n        System.out.println("Average: " + (double) sum / numbers.length);\n    }\n}',
    isActive: true 
  },
  { 
    id: 63, 
    name: 'javascript', 
    displayName: 'JavaScript', 
    version: 'Node.js 18.15.0', 
    extension: '.js', 
    defaultCode: '// Welcome to JavaScript!\nconsole.log("Hello, World!");\n\n// Try some basic operations\nconst numbers = [1, 2, 3, 4, 5];\nconst sum = numbers.reduce((a, b) => a + b, 0);\nconsole.log(`Sum: ${sum}`);\nconsole.log(`Average: ${sum / numbers.length}`);',
    isActive: true 
  },
  { 
    id: 54, 
    name: 'cpp', 
    displayName: 'C++', 
    version: 'GCC 9.4.0', 
    extension: '.cpp', 
    defaultCode: '#include <iostream>\n#include <vector>\n#include <numeric>\nusing namespace std;\n\nint main() {\n    cout << "Hello, World!" << endl;\n    \n    // Try some basic operations\n    vector<int> numbers = {1, 2, 3, 4, 5};\n    int sum = accumulate(numbers.begin(), numbers.end(), 0);\n    cout << "Sum: " << sum << endl;\n    cout << "Average: " << (double)sum / numbers.size() << endl;\n    \n    return 0;\n}',
    isActive: true 
  }
];

export default function Compiler() {
  const { isDark } = useTheme();
  const { user } = useAuth();
  const [selectedLanguage, setSelectedLanguage] = useState(compilerLanguages[0]);
  const [code, setCode] = useState(selectedLanguage.defaultCode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('main');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [executionTime, setExecutionTime] = useState<number | null>(null);

  useEffect(() => {
    setCode(selectedLanguage.defaultCode);
    setOutput('');
    setError('');
    setExecutionTime(null);
  }, [selectedLanguage]);

  const runCode = async () => {
    setIsRunning(true);
    setError('');
    setOutput('Running code...\n');
    setExecutionTime(null);

    try {
      const result = await CompilerService.executeCode(code, selectedLanguage.name, input);
      
      if (result.error) {
        setError(result.error);
        setOutput('');
      } else {
        setOutput(result.output || 'Code executed successfully (no output)');
        setExecutionTime(result.executionTime);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred during code execution');
      setOutput('');
    } finally {
      setIsRunning(false);
    }
  };

  const saveCode = () => {
    if (!user) {
      alert('Please sign in to save your code.');
      return;
    }
    
    const savedCode = {
      id: Date.now().toString(),
      title: `${selectedLanguage.displayName} Code`,
      code,
      language: selectedLanguage.name,
      createdAt: new Date()
    };
    
    // In a real app, this would save to the backend
    console.log('Saving code:', savedCode);
    alert('Code saved successfully!');
  };

  const shareCode = async () => {
    const shareData = {
      title: `${selectedLanguage.displayName} Code - PICODE`,
      text: 'Check out this code I wrote on PICODE!',
      url: window.location.href
    };
    
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(code);
      alert('Code copied to clipboard!');
    }
  };

  const downloadCode = () => {
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `main${selectedLanguage.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const tabs = [
    { id: 'main', name: `main${selectedLanguage.extension}`, icon: Code, modified: true },
    { id: 'input', name: 'input.txt', icon: FileText, modified: false }
  ];

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col overflow-hidden">
      {/* Top Menu Bar */}
      <div className="h-8 bg-gray-800 border-b border-gray-700 flex items-center px-4 text-xs">
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">PICODE</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-400">Online Compiler</span>
        </div>
        <div className="ml-auto flex items-center space-x-2">
          <button
            onClick={runCode}
            disabled={isRunning}
            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1"
          >
            {isRunning ? (
              <LoadingSpinner size="sm" className="text-white" />
            ) : (
              <Play className="h-3 w-3" />
            )}
            <span>{isRunning ? 'Running...' : 'Run'}</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <motion.div 
          className={`${sidebarCollapsed ? 'w-12' : 'w-64'} bg-gray-800 border-r border-gray-700 flex flex-col transition-all duration-300 ease-in-out`}
          initial={false}
          animate={{ width: sidebarCollapsed ? 48 : 256 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {/* Sidebar Header with Toggle */}
          <div className="h-10 border-b border-gray-700 flex items-center justify-between px-3">
            <div className="flex items-center space-x-2">
              <Folder className="h-4 w-4 text-gray-400" />
              {!sidebarCollapsed && (
                <motion.span 
                  className="text-xs font-medium text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: sidebarCollapsed ? 0 : 1 }}
                  transition={{ duration: 0.2, delay: sidebarCollapsed ? 0 : 0.1 }}
                >
                  EXPLORER
                </motion.span>
              )}
            </div>
            
            {/* Toggle Button */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
              title={sidebarCollapsed ? "Expand Explorer" : "Collapse Explorer"}
            >
              {sidebarCollapsed ? (
                <ChevronRight className="h-3 w-3" />
              ) : (
                <ChevronLeft className="h-3 w-3" />
              )}
            </button>
          </div>

          {/* Sidebar Content */}
          <motion.div 
            className="flex-1 overflow-hidden"
            initial={false}
            animate={{ opacity: sidebarCollapsed ? 0 : 1 }}
            transition={{ duration: 0.2, delay: sidebarCollapsed ? 0 : 0.1 }}
          >
            {!sidebarCollapsed && (
              <div className="p-2 h-full flex flex-col">
                {/* File Tree */}
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-2">FILES</div>
                  <div className="space-y-1">
                    <div 
                      className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                        activeTab === 'main' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
                      }`}
                      onClick={() => setActiveTab('main')}
                    >
                      <Code className="h-3 w-3" />
                      <span className="text-xs">main{selectedLanguage.extension}</span>
                      {tabs.find(t => t.id === 'main')?.modified && (
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div 
                      className={`flex items-center space-x-2 px-2 py-1 rounded cursor-pointer transition-colors ${
                        activeTab === 'input' ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700'
                      }`}
                      onClick={() => setActiveTab('input')}
                    >
                      <FileText className="h-3 w-3" />
                      <span className="text-xs">input.txt</span>
                    </div>
                  </div>
                </div>

                {/* Language Selector */}
                <div className="mt-6">
                  <div className="text-xs text-gray-400 mb-2">LANGUAGE</div>
                  <select
                    value={selectedLanguage.id}
                    onChange={(e) => {
                      const lang = compilerLanguages.find(l => l.id === parseInt(e.target.value));
                      if (lang) setSelectedLanguage(lang);
                    }}
                    className="w-full bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs text-white focus:outline-none focus:border-blue-500"
                  >
                    {compilerLanguages.map(lang => (
                      <option key={lang.id} value={lang.id}>
                        {lang.displayName}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quick Actions */}
                <div className="mt-6">
                  <div className="text-xs text-gray-400 mb-2">ACTIONS</div>
                  <div className="space-y-1">
                    <button
                      onClick={saveCode}
                      className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-gray-300 hover:bg-gray-700 rounded transition-colors"
                    >
                      <Save className="h-3 w-3" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={downloadCode}
                      className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-gray-300 hover:bg-gray-700 rounded transition-colors"
                    >
                      <Download className="h-3 w-3" />
                      <span>Download</span>
                    </button>
                    <button
                      onClick={shareCode}
                      className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-gray-300 hover:bg-gray-700 rounded transition-colors"
                    >
                      <Share2 className="h-3 w-3" />
                      <span>Share</span>
                    </button>
                    <button
                      onClick={() => setCode(selectedLanguage.defaultCode)}
                      className="w-full flex items-center space-x-2 px-2 py-1 text-xs text-gray-300 hover:bg-gray-700 rounded transition-colors"
                    >
                      <RefreshCw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* Collapsed State - Show Only Icons */}
          {sidebarCollapsed && (
            <motion.div 
              className="flex flex-col items-center py-2 space-y-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <button
                onClick={() => setActiveTab('main')}
                className={`p-2 rounded transition-colors ${
                  activeTab === 'main' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title={`main${selectedLanguage.extension}`}
              >
                <Code className="h-4 w-4" />
              </button>
              <button
                onClick={() => setActiveTab('input')}
                className={`p-2 rounded transition-colors ${
                  activeTab === 'input' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
                title="input.txt"
              >
                <FileText className="h-4 w-4" />
              </button>
              <div className="w-full h-px bg-gray-700 my-2"></div>
              <button
                onClick={saveCode}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                title="Save"
              >
                <Save className="h-4 w-4" />
              </button>
              <button
                onClick={downloadCode}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                title="Download"
              >
                <Download className="h-4 w-4" />
              </button>
              <button
                onClick={shareCode}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                title="Share"
              >
                <Share2 className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCode(selectedLanguage.defaultCode)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-colors"
                title="Reset"
              >
                <RefreshCw className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tab Bar */}
          <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <div
                  key={tab.id}
                  className={`flex items-center space-x-2 px-4 py-2 border-r border-gray-700 cursor-pointer transition-colors ${
                    activeTab === tab.id 
                      ? 'bg-gray-900 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="h-3 w-3" />
                  <span className="text-xs">{tab.name}</span>
                  {tab.modified && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Editor Content */}
          <div className="flex-1 flex overflow-hidden">
            {/* Code Editor */}
            <div className="flex-1 relative">
              {activeTab === 'main' ? (
                <Editor
                  height="100%"
                  language={selectedLanguage.name === 'cpp' ? 'cpp' : selectedLanguage.name}
                  value={code}
                  onChange={(value) => setCode(value || '')}
                  theme="vs-dark"
                  options={{
                    minimap: { enabled: true },
                    fontSize: 14,
                    lineNumbers: 'on',
                    roundedSelection: false,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 2,
                    wordWrap: 'on',
                    folding: true,
                    lineDecorationsWidth: 10,
                    lineNumbersMinChars: 3,
                    glyphMargin: false,
                    renderLineHighlight: 'line',
                    selectOnLineNumbers: true,
                    matchBrackets: 'always',
                    autoIndent: 'full',
                    formatOnPaste: true,
                    formatOnType: true,
                    suggestOnTriggerCharacters: true,
                    acceptSuggestionOnEnter: 'on',
                    quickSuggestions: true,
                    parameterHints: { enabled: true },
                    hover: { enabled: true },
                    contextmenu: true,
                    mouseWheelZoom: true,
                    cursorBlinking: 'blink',
                    cursorStyle: 'line',
                    fontFamily: 'Fira Code, Monaco, Cascadia Code, Ubuntu Mono, monospace',
                    fontLigatures: true
                  }}
                />
              ) : (
                <div className="h-full bg-gray-900 p-4">
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter input for your program here..."
                    className="w-full h-full bg-transparent text-white font-mono text-sm resize-none focus:outline-none placeholder-gray-500"
                    style={{ fontFamily: 'Fira Code, Monaco, Cascadia Code, Ubuntu Mono, monospace' }}
                  />
                </div>
              )}
            </div>

            {/* Terminal/Output Panel */}
            <div className="w-1/3 border-l border-gray-700 flex flex-col">
              {/* Terminal Header */}
              <div className="h-10 bg-gray-800 border-b border-gray-700 flex items-center px-4">
                <Terminal className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-xs font-medium text-gray-300">OUTPUT</span>
                <div className="ml-auto flex items-center space-x-2">
                  {executionTime !== null && (
                    <span className="text-xs text-gray-400">
                      {executionTime.toFixed(3)}s
                    </span>
                  )}
                  <button
                    onClick={() => {
                      setOutput('');
                      setError('');
                      setExecutionTime(null);
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                    title="Clear Output"
                  >
                    <RefreshCw className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="flex-1 bg-black p-4 overflow-auto">
                <div className="font-mono text-sm">
                  {error ? (
                    <div className="text-red-400 whitespace-pre-wrap">{error}</div>
                  ) : output ? (
                    <div className="text-green-400 whitespace-pre-wrap">{output}</div>
                  ) : (
                    <div className="text-gray-500">
                      Output will appear here when you run your code...
                      <br />
                      <br />
                      <span className="text-gray-600">
                        Press Ctrl+Enter to run code
                        <br />
                        Press F5 or click Run button
                        <br />
                        <br />
                        💡 Tip: Use the input tab to provide stdin input
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Terminal Input */}
              <div className="border-t border-gray-700 p-2">
                <div className="flex items-center space-x-2 text-xs text-gray-400">
                  <span>$</span>
                  <span className={isRunning ? "text-yellow-400" : "text-green-400"}>
                    {isRunning ? 'Running' : 'Ready'}
                  </span>
                  <span>•</span>
                  <span>{selectedLanguage.displayName} {selectedLanguage.version}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="h-6 bg-blue-600 flex items-center justify-between px-4 text-xs">
        <div className="flex items-center space-x-4">
          <span>Ln 1, Col 1</span>
          <span>UTF-8</span>
          <span>{selectedLanguage.displayName}</span>
        </div>
        <div className="flex items-center space-x-4">
          <span>Spaces: 2</span>
          <span>CRLF</span>
          {user && <span>Signed in as {user.name}</span>}
          <span>🚀 Free Online Compiler</span>
        </div>
      </div>
    </div>
  );
}