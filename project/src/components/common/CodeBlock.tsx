import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, Check, Play } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

interface CodeBlockProps {
  code: string;
  language: string;
  showLineNumbers?: boolean;
  showRunButton?: boolean;
  onRun?: () => void;
  className?: string;
}

export default function CodeBlock({ 
  code, 
  language, 
  showLineNumbers = true, 
  showRunButton = false,
  onRun,
  className = '' 
}: CodeBlockProps) {
  const { isDark } = useTheme();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        {showRunButton && onRun && (
          <button
            onClick={onRun}
            className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
            title="Run code"
          >
            <Play className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={handleCopy}
          className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          title="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
      
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        showLineNumbers={showLineNumbers}
        wrapLines={true}
        customStyle={{
          margin: 0,
          borderRadius: '0.5rem',
          fontSize: '14px',
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}