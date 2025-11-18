import { CourseConfig } from "./index";

export const mobileDevelopmentConfig: CourseConfig = {
  id: "mobile-development",
  title: "Mobile App Development Course",
  description: "Build native and cross-platform mobile applications",
  totalHours: 35,
  difficulty: "Intermediate",
  modules: [
    {
      id: "android-fundamentals",
      title: "Android Development",
      topics: [
        // { id: "android-basics", title: "Android Basics", duration: "60 min", completed: false },
        // { id: "kotlin-intro", title: "Kotlin Programming", duration: "90 min", completed: false },
      ]
    },
    {
      id: "ios-fundamentals", 
      title: "iOS Development",
      topics: [
        // { id: "ios-basics", title: "iOS Basics", duration: "60 min", completed: false },
        // { id: "swift-intro", title: "Swift Programming", duration: "90 min", completed: false },
      ]
    }
  ]
};