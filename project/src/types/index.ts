export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'student' | 'admin' | 'instructor';
  createdAt: Date;
  lastLogin?: Date;
  isActive: boolean;
  progress: CourseProgress[];
  savedCode: SavedCode[];
  achievements: Achievement[];
  certificates: Certificate[];
  subscription?: Subscription;
  profile: UserProfile;
}

export interface UserProfile {
  bio?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  skills: string[];
  experience: 'beginner' | 'intermediate' | 'advanced';
  learningGoals: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  language: 'python' | 'java';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  thumbnail: string;
  syllabus: CourseSyllabus;
  lessons: Lesson[];
  prerequisites: string[];
  learningOutcomes: string[];
  instructor: string;
  rating: number;
  enrollmentCount: number;
  isPublished: boolean;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface CourseSyllabus {
  modules: SyllabusModule[];
  totalHours: number;
  projectsCount: number;
  assessmentsCount: number;
}

export interface SyllabusModule {
  id: string;
  title: string;
  description: string;
  duration: number;
  topics: string[];
  learningObjectives: string[];
  order: number;
}

export interface Lesson {
  id: string;
  courseId: string;
  moduleId: string;
  title: string;
  content: string;
  videoUrl?: string;
  code: string;
  language: string;
  order: number;
  duration: number;
  exercises: Exercise[];
  quiz?: Quiz;
  resources: LessonResource[];
  isPreview: boolean;
}

export interface LessonResource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'code' | 'video';
  url: string;
  description?: string;
}

export interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  starterCode: string;
  solution: string;
  testCases: TestCase[];
  hints: string[];
  points: number;
  timeLimit?: number;
}

export interface TestCase {
  input: string;
  expectedOutput: string;
  description?: string;
  isHidden?: boolean;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit: number;
  passingScore: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'code-completion' | 'short-answer';
  question: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  points: number;
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  completedLessons: string[];
  completedExercises: string[];
  completedQuizzes: string[];
  currentLesson: string;
  completedAt?: Date;
  score: number;
  timeSpent: number;
  lastAccessedAt: Date;
  certificateIssued: boolean;
}

export interface SavedCode {
  id: string;
  userId: string;
  title: string;
  code: string;
  language: string;
  description?: string;
  isPublic: boolean;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'course' | 'exercise' | 'streak' | 'special';
  condition: string;
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
}

export interface Certificate {
  id: string;
  userId: string;
  courseId: string;
  certificateNumber: string;
  issuedAt: Date;
  verificationCode: string;
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C';
  finalScore: number;
  validUntil?: Date;
  downloadUrl?: string;
}

export interface Subscription {
  id: string;
  userId: string;
  plan: 'free' | 'premium' | 'pro';
  status: 'active' | 'cancelled' | 'expired';
  startDate: Date;
  endDate: Date;
  features: string[];
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  language: 'python' | 'java';
  category: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  author: string;
  likes: number;
  views: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar?: string;
  thumbnail: string;
  tags: string[];
  category: string;
  publishedAt: Date;
  updatedAt: Date;
  readTime: number;
  views: number;
  likes: number;
  isPublished: boolean;
  seoTitle?: string;
  seoDescription?: string;
}

export interface CompilerLanguage {
  id: number;
  name: string;
  displayName: string;
  version: string;
  extension: string;
  defaultCode: string;
  isActive: boolean;
}

export interface AdminStats {
  totalUsers: number;
  activeUsers: number;
  totalCourses: number;
  totalEnrollments: number;
  certificatesIssued: number;
  revenue: number;
  userGrowth: number;
  courseCompletionRate: number;
}

export interface SystemSettings {
  siteName: string;
  siteDescription: string;
  contactEmail: string;
  supportEmail: string;
  maintenanceMode: boolean;
  registrationEnabled: boolean;
  emailVerificationRequired: boolean;
  maxFileUploadSize: number;
  allowedFileTypes: string[];
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    youtube?: string;
  };
}