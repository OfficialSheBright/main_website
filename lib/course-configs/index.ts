export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean; // For sequential unlocking
  subtopics: string[];
  prerequisites?: string[]; // Topic dependencies
  learningObjectives?: string[]; // What students will learn
  resources?: {
    videos?: string[];
    articles?: string[];
    exercises?: string[];
    quizzes?: string[];
  };
  estimatedReadingTime?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export interface Module {
  id: string;
  title: string;
  description?: string; // Module overview
  estimatedWeeks?: number; // Time to complete module
  topics: Topic[];
  prerequisites?: string[]; // Module dependencies
  learningGoals?: string[]; // Module-level objectives
}

export interface CourseConfig {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  totalHours: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Beginner to Advanced";
  skillLevel?: "Beginner" | "Intermediate" | "Advanced"; // Starting level
  targetAudience?: string[]; // Who this course is for
  
  // Certification system
  certification?: {
    available: boolean;
    requirements: {
      minProgressPercentage: number;
      capstoneProjectRequired: boolean;
      minProjectScore: number;
    };
  };
  
  // Assessment breakdown
  assessmentCriteria?: {
    moduleQuizzes: number; // Percentage weight
    practicalExercises: number; // Percentage weight
    capstoneProjects: number; // Percentage weight
  };
  
  // Career information
  careerOutcomes?: string[]; // Job roles after completion
  technologiesCovered?: string[]; // Technologies taught
  prerequisites?: string[]; // Course prerequisites
  
  // Course metadata
  instructor?: string;
  lastUpdated?: string;
  version?: string;
  language?: string;
  thumbnail?: string;
  
  // Pricing (if applicable)
  pricing?: {
    type: "free" | "paid" | "freemium";
    price?: number;
    currency?: string;
  };
}

// User progress tracking interfaces
export interface UserProgress {
  courseId: string;
  userId: string;
  completedTopics: string[];
  currentTopic: string;
  overallProgress: number;
  lastAccessed: Date;
  enrollmentDate: Date;
  projectSubmitted?: boolean;
  projectApproved?: boolean;
  projectScore?: number;
  certificateEarned?: boolean;
}

export interface TopicProgress {
  topicId: string;
  userId: string;
  courseId: string;
  timeSpent: number; // in seconds
  completed: boolean;
  lastAccessed: Date;
  interactions: Record<string, unknown>; // Quiz answers, exercise completions, etc.
}

// Project submission interface
export interface ProjectSubmission {
  id: string;
  userId: string;
  courseId: string;
  githubUrl: string;
  youtubeUrl: string;
  description: string;
  status: "pending" | "approved" | "rejected" | "needs_revision";
  score?: number;
  submittedAt: Date;
  reviewedAt?: Date;
  reviewComments?: string;
  reviewerId?: string;
}

// Export all course configurations
export { aiMLConfig } from "./ai-ml";
export { webDevelopmentConfig } from "./web-development";
export { mobileDevelopmentConfig } from "./mobile-development";