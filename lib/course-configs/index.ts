export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  subtopics: string[];
}

export interface Module {
  id: string;
  title: string;
  topics: Topic[];
}

export interface CourseConfig {
  id: string;
  title: string;
  description: string;
  modules: Module[];
  totalHours: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

export { aiMLConfig } from "./ai-ml";
export { webDevelopmentConfig } from "./web-development";
export { mobileDevelopmentConfig } from "./mobile-development";
