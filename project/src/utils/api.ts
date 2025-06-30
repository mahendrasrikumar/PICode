// Mock API utilities for development
// In production, replace with actual API calls

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Mock API functions
export const api = {
  // User endpoints
  users: {
    async getProfile(): Promise<ApiResponse<any>> {
      await delay(500);
      const user = localStorage.getItem('picode_user');
      return {
        success: true,
        data: user ? JSON.parse(user) : null
      };
    },

    async updateProfile(data: any): Promise<ApiResponse<any>> {
      await delay(800);
      const user = localStorage.getItem('picode_user');
      if (user) {
        const updatedUser = { ...JSON.parse(user), ...data };
        localStorage.setItem('picode_user', JSON.stringify(updatedUser));
        return {
          success: true,
          data: updatedUser
        };
      }
      throw new Error('User not found');
    }
  },

  // Course endpoints
  courses: {
    async getAll(): Promise<ApiResponse<any[]>> {
      await delay(300);
      return {
        success: true,
        data: [] // Would return actual courses from API
      };
    },

    async getById(id: string): Promise<ApiResponse<any>> {
      await delay(400);
      return {
        success: true,
        data: null // Would return specific course
      };
    },

    async enroll(courseId: string): Promise<ApiResponse<any>> {
      await delay(600);
      return {
        success: true,
        data: { enrolled: true }
      };
    }
  },

  // Compiler endpoints
  compiler: {
    async execute(code: string, language: string, input?: string): Promise<ApiResponse<any>> {
      await delay(2000);
      
      // Mock execution results
      const mockResults = {
        python: {
          output: 'Hello, World!\nSum: 15\nAverage: 3.0\n',
          error: null,
          executionTime: 0.045
        },
        java: {
          output: 'Hello, World!\nSum: 15\nAverage: 3.0\n',
          error: null,
          executionTime: 0.123
        }
      };

      return {
        success: true,
        data: mockResults[language as keyof typeof mockResults] || {
          output: 'Code executed successfully\n',
          error: null,
          executionTime: 0.1
        }
      };
    }
  },

  // Progress tracking
  progress: {
    async updateProgress(courseId: string, lessonId: string): Promise<ApiResponse<any>> {
      await delay(300);
      return {
        success: true,
        data: { updated: true }
      };
    },

    async getProgress(courseId: string): Promise<ApiResponse<any>> {
      await delay(200);
      return {
        success: true,
        data: {
          completedLessons: [],
          currentLesson: null,
          score: 0
        }
      };
    }
  }
};

// Error handling utility
export function handleApiError(error: any): string {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  if (error.message) {
    return error.message;
  }
  return 'An unexpected error occurred';
}