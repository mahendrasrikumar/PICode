interface CompilerResult {
  stdout: string | null;
  stderr: string | null;
  compile_output: string | null;
  status: {
    id: number;
    description: string;
  };
  time: string;
  memory: number;
}

interface SubmissionResponse {
  token: string;
}

export class CompilerService {
  private static readonly API_URL = import.meta.env.VITE_JUDGE0_API_URL || 'https://judge0-ce.p.rapidapi.com';
  private static readonly API_KEY = import.meta.env.VITE_JUDGE0_API_KEY;

  private static readonly LANGUAGE_IDS = {
    python: 71,
    java: 62,
    javascript: 63,
    cpp: 54,
    c: 50,
    csharp: 51,
    go: 60,
    rust: 73,
    php: 68,
    ruby: 72,
    kotlin: 78,
    swift: 83
  };

  static async executeCode(
    code: string, 
    language: string, 
    input?: string
  ): Promise<{ output: string; error: string | null; executionTime: number }> {
    if (!this.API_KEY) {
      // Fallback to mock execution for development
      return this.mockExecution(code, language);
    }

    try {
      const languageId = this.LANGUAGE_IDS[language as keyof typeof this.LANGUAGE_IDS];
      if (!languageId) {
        throw new Error(`Unsupported language: ${language}`);
      }

      // Submit code for execution
      const submissionResponse = await fetch(`${this.API_URL}/submissions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': this.API_KEY,
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
        },
        body: JSON.stringify({
          language_id: languageId,
          source_code: btoa(code), // Base64 encode
          stdin: input ? btoa(input) : undefined,
          wait: false
        })
      });

      if (!submissionResponse.ok) {
        throw new Error('Failed to submit code');
      }

      const submission: SubmissionResponse = await submissionResponse.json();

      // Poll for results
      let attempts = 0;
      const maxAttempts = 30; // 30 seconds timeout

      while (attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second

        const resultResponse = await fetch(`${this.API_URL}/submissions/${submission.token}`, {
          headers: {
            'X-RapidAPI-Key': this.API_KEY,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
          }
        });

        if (!resultResponse.ok) {
          throw new Error('Failed to get execution result');
        }

        const result: CompilerResult = await resultResponse.json();

        // Check if execution is complete
        if (result.status.id <= 2) { // In Queue or Processing
          attempts++;
          continue;
        }

        // Execution completed
        const output = result.stdout ? atob(result.stdout) : '';
        const error = result.stderr ? atob(result.stderr) : 
                     result.compile_output ? atob(result.compile_output) : null;
        const executionTime = parseFloat(result.time) || 0;

        return {
          output: output || (error ? '' : 'No output'),
          error: error,
          executionTime: executionTime
        };
      }

      throw new Error('Execution timeout');
    } catch (error: any) {
      console.error('Compiler service error:', error);
      return {
        output: '',
        error: error.message || 'An error occurred during code execution',
        executionTime: 0
      };
    }
  }

  private static mockExecution(code: string, language: string) {
    // Mock execution for development/fallback
    const mockResults: Record<string, string> = {
      python: 'Hello, World!\nMock Python execution successful',
      java: 'Hello, World!\nMock Java execution successful',
      javascript: 'Hello, World!\nMock JavaScript execution successful',
      cpp: 'Hello, World!\nMock C++ execution successful'
    };

    return Promise.resolve({
      output: mockResults[language] || 'Mock execution successful',
      error: null,
      executionTime: Math.random() * 0.5 + 0.1
    });
  }

  static getSupportedLanguages() {
    return Object.keys(this.LANGUAGE_IDS);
  }
}