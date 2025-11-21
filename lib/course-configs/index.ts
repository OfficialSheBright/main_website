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
export { softwareEngineeringConfig } from "./software-engineering";
export { aiMLConfig } from "./ai-ml";
export { webDevelopmentConfig } from "./web-development";
export { mobileDevelopmentConfig } from "./mobile-development";
export { dataCloudConfig } from "./data-cloud";
export { cybersecurityConfig } from "./cybersecurity";
export { blockchainWeb3Config } from "./blockchain-web3";
export { designCreativeConfig } from "./design-creative";
export { gameDevelopmentConfig } from "./game-development";
export { productProjectConfig } from "./product-project";

// Course registry for easy access
// export const courseConfigs = {
//   "ai-ml": aiMLConfig,
//   "web-development": webDevelopmentConfig,
//   "mobile-development": mobileDevelopmentConfig,
//   "data-cloud": dataCloudConfig,
//   "cybersecurity": cybersecurityConfig,
//   "blockchain-web3": blockchainWeb3Config,
//   "design-creative": designCreativeConfig,
//   "game-development": gameDevelopmentConfig,
//   "product-project": productProjectConfig,
// } as const;

// // Course categories for better organization
// export const courseCategories = {
//   "Development": [
//     "web-development",
//     "mobile-development",
//     "game-development",
//     "blockchain-web3"
//   ],
//   "Data & AI": [
//     "ai-ml",
//     "data-cloud"
//   ],
//   "Security": [
//     "cybersecurity"
//   ],
//   "Design": [
//     "design-creative"
//   ],
//   "Business": [
//     "product-project"
//   ]
// } as const;

// // Helper function to get all course IDs
// export const getAllCourseIds = (): string[] => {
//   return Object.keys(courseConfigs);
// };

// // Helper function to get courses by category
// export const getCoursesByCategory = (category: keyof typeof courseCategories): string[] => {
//   return courseCategories[category] || [];
// };

// // Helper function to get course config by ID
// export const getCourseConfig = (courseId: string): CourseConfig | undefined => {
//   return courseConfigs[courseId as keyof typeof courseConfigs];
// };

// // Course statistics helper
// export const getCourseStats = () => {
//   const configs = Object.values(courseConfigs);
//   return {
//     totalCourses: configs.length,
//     totalHours: configs.reduce((sum, config) => sum + config.totalHours, 0),
//     averageHours: Math.round(configs.reduce((sum, config) => sum + config.totalHours, 0) / configs.length),
//     totalModules: configs.reduce((sum, config) => sum + config.modules.length, 0),
//     totalTopics: configs.reduce((sum, config) => 
//       sum + config.modules.reduce((moduleSum, module) => moduleSum + module.topics.length, 0), 0
//     ),
//     difficultyDistribution: {
//       beginner: configs.filter(c => c.skillLevel === "Beginner").length,
//       intermediate: configs.filter(c => c.skillLevel === "Intermediate").length,
//       advanced: configs.filter(c => c.skillLevel === "Advanced").length,
//     }
//   };
// };