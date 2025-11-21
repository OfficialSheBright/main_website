import { CourseConfig } from "./index";

export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean;
  subtopics: string[];
  prerequisites?: string[];
  learningObjectives?: string[];
  resources?: {
    videos?: string[];
    articles?: string[];
    exercises?: string[];
    quizzes?: string[];
  };
}

export const mobileDevelopmentConfig: CourseConfig = {
  id: "mobile-development",
  title: "Complete Mobile App Development Course",
  description: "Master native and cross-platform mobile app development from foundations to advanced deployment with industry-level projects",
  totalHours: 180,
  difficulty: "Beginner to Advanced",
  skillLevel: "Beginner",
  targetAudience: [
    "Complete beginners to mobile development",
    "Web developers transitioning to mobile",
    "Students seeking full-stack mobile skills",
    "Game developers interested in mobile platforms"
  ],
  certification: {
    available: true,
    requirements: {
      minProgressPercentage: 90,
      capstoneProjectRequired: true,
      minProjectScore: 70
    }
  },
  modules: [
    {
      id: "foundations-mobile-development",
      title: "MODULE 1 — Foundations of Mobile App Development",
      topics: [
        {
          id: "mobile-ecosystem-intro",
          title: "1.1 Mobile Ecosystem Introduction",
          duration: "90 min",
          completed: false,
          subtopics: [
            "OS evolution (Android, iOS, HarmonyOS)",
            "Native vs Hybrid vs Cross-platform",
            "App lifecycle, architecture patterns",
            "Mobile hardware overview (sensors, storage, battery, network)"
          ]
        },
        {
          id: "tools-development-setup",
          title: "1.2 Tools & Development Setup",
          duration: "105 min",
          completed: false,
          subtopics: [
            "Android Studio setup",
            "Xcode setup (for macOS users)",
            "Flutter SDK & VS Code",
            "React Native CLI & Expo",
            "Emulators, simulators, device testing"
          ]
        },
        {
          id: "programming-essentials-mobile",
          title: "1.3 Programming Essentials for Mobile",
          duration: "85 min",
          completed: false,
          subtopics: [
            "OOP concepts",
            "APIs & JSON",
            "Networking basics",
            "Package management (Gradle, CocoaPods, npm, pub)"
          ]
        }
      ]
    },
    {
      id: "android-development",
      title: "MODULE 2 — Android Development (Kotlin + Java Track)",
      topics: [
        {
          id: "android-fundamentals",
          title: "2.1 Android Fundamentals",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Activity lifecycle",
            "Fragments & navigation",
            "Intents (explicit & implicit)",
            "ViewModel & LiveData",
            "RecyclerView, ViewBinding/DataBinding"
          ]
        },
        {
          id: "android-ui-layouts",
          title: "2.2 UI & Layouts",
          duration: "110 min",
          completed: false,
          subtopics: [
            "XML layouts",
            "Material Design guidelines",
            "ConstraintLayout, LinearLayout",
            "Themes, styles, color management",
            "Custom UI components"
          ]
        },
        {
          id: "kotlin-android",
          title: "2.3 Kotlin for Android",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Kotlin basics, OOP, higher-order functions",
            "Coroutines (async programming)",
            "Kotlin Flow",
            "Extensions, sealed classes"
          ]
        },
        {
          id: "java-android-optional",
          title: "2.4 Java for Android (Optional Track)",
          duration: "95 min",
          completed: false,
          subtopics: [
            "OOP, interfaces, inheritance",
            "Multithreading",
            "Collections",
            "Retrofit + Java"
          ]
        },
        {
          id: "android-api-integration",
          title: "2.5 API Integration",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Retrofit",
            "Room Database",
            "Jetpack components",
            "WorkManager, Broadcast Receivers",
            "Firebase integrations (Auth, Firestore, Storage, FCM)"
          ]
        },
        {
          id: "advanced-android",
          title: "2.6 Advanced Android",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Jetpack Compose",
            "MVVM/Clean Architecture",
            "Dependency injection (Hilt/Dagger)",
            "Navigation Component",
            "Performance optimization",
            "Security best practices"
          ]
        }
      ]
    },
    {
      id: "ios-development",
      title: "MODULE 3 — iOS Development (Swift + Objective-C Track)",
      topics: [
        {
          id: "ios-fundamentals",
          title: "3.1 iOS Fundamentals",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Xcode interface",
            "iOS app lifecycle",
            "SwiftUI vs UIKit",
            "Storyboards, AutoLayout",
            "Cocoa Touch & frameworks"
          ]
        },
        {
          id: "swift-programming",
          title: "3.2 Swift Programming",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Swift basics, structs, enums",
            "Protocols & extensions",
            "Error handling",
            "Concurrency with async/await",
            "Combine framework"
          ]
        },
        {
          id: "objective-c-basics",
          title: "3.3 Objective-C Basics (Optional)",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Syntax, OOP",
            "Header & implementation files",
            "Messaging & runtime",
            "ARC memory management"
          ]
        },
        {
          id: "ios-ui-layouts",
          title: "3.4 iOS UI & Layouts",
          duration: "115 min",
          completed: false,
          subtopics: [
            "SwiftUI components",
            "UIKit components",
            "AutoLayout constraints",
            "Animations & gestures",
            "Custom views"
          ]
        },
        {
          id: "ios-data-handling",
          title: "3.5 Data Handling",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Core Data",
            "UserDefaults",
            "File system",
            "Network calls (URLSession, Alamofire)"
          ]
        },
        {
          id: "ios-integrations-advanced",
          title: "3.6 Integrations & Advanced iOS",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Push notifications",
            "Background tasks",
            "Keychain & sensitive data storage",
            "App Extensions",
            "App Store submission process"
          ]
        }
      ]
    },
    {
      id: "cross-platform-development",
      title: "MODULE 4 — Cross-Platform Development",
      topics: [
        {
          id: "flutter-fundamentals",
          title: "4.1 Flutter Fundamentals",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Dart basics",
            "Widgets (Stateless & Stateful)",
            "Navigation & routing",
            "Layouts & UI components"
          ]
        },
        {
          id: "flutter-state-management",
          title: "4.2 State Management",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Provider",
            "Bloc / Cubit",
            "Riverpod",
            "GetX (optional)"
          ]
        },
        {
          id: "flutter-data-apis",
          title: "4.3 Data & APIs",
          duration: "120 min",
          completed: false,
          subtopics: [
            "REST API integration",
            "JSON serialization",
            "SQLite / Hive databases",
            "Firebase integration"
          ]
        },
        {
          id: "advanced-flutter",
          title: "4.4 Advanced Flutter",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Animations",
            "Custom widgets",
            "Platform channels",
            "Performance & debugging",
            "Publishing for Android/iOS"
          ]
        },
        {
          id: "react-native-core",
          title: "4.5 React Native Core Concepts",
          duration: "125 min",
          completed: false,
          subtopics: [
            "React basics for mobile",
            "JSX & components",
            "Navigation (React Navigation)",
            "Styling (Flexbox)"
          ]
        },
        {
          id: "react-native-data-apis",
          title: "4.6 Data & APIs",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Fetch & Axios",
            "AsyncStorage",
            "SQLite with RN",
            "Redux & Zustand"
          ]
        },
        {
          id: "react-native-modules",
          title: "4.7 Native Modules",
          duration: "105 min",
          completed: false,
          subtopics: [
            "Linking native code (Android/iOS)",
            "Permissions & sensors",
            "Push notifications"
          ]
        },
        {
          id: "advanced-react-native",
          title: "4.8 Advanced React Native",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Performance optimization",
            "Animations (Reanimated)",
            "Testing (Jest, Detox)",
            "App Store & Play Store release"
          ]
        }
      ]
    },
    {
      id: "mobile-game-development",
      title: "MODULE 5 — Mobile Game Development",
      topics: [
        {
          id: "game-foundations",
          title: "5.1 Foundations",
          duration: "85 min",
          completed: false,
          subtopics: [
            "Game loops",
            "2D vs 3D engines",
            "Game asset pipelines"
          ]
        },
        {
          id: "unity-development",
          title: "5.2 Unity Development",
          duration: "150 min",
          completed: false,
          subtopics: [
            "C# fundamentals",
            "Scenes & game objects",
            "Physics & animations",
            "UI development",
            "Scripting player controls"
          ]
        },
        {
          id: "unreal-engine-optional",
          title: "5.3 Unreal Engine (Optional)",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Blueprints visual scripting",
            "Actors, components",
            "Level design"
          ]
        },
        {
          id: "mobile-game-optimization",
          title: "5.4 Mobile Optimization",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Rendering performance",
            "Memory management",
            "Asset compression",
            "Cross-platform build pipeline"
          ]
        },
        {
          id: "game-monetization",
          title: "5.5 Monetization",
          duration: "80 min",
          completed: false,
          subtopics: [
            "Ads integration (Unity Ads, AdMob)",
            "In-app purchases",
            "Leaderboards, social sharing"
          ]
        }
      ]
    },
    {
      id: "wearable-app-development",
      title: "MODULE 6 — Wearable App Development",
      topics: [
        {
          id: "android-wear-os",
          title: "6.1 Android Wear OS",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Watchface creation",
            "Tiles & complications",
            "Wear-optimized UI",
            "Health & fitness sensors",
            "Syncing with mobile app"
          ]
        },
        {
          id: "apple-watchos",
          title: "6.2 Apple watchOS",
          duration: "115 min",
          completed: false,
          subtopics: [
            "WatchKit basics",
            "SwiftUI for watchOS",
            "Complications development",
            "Sensor access (heart rate, motion)",
            "Notifications & glance interfaces"
          ]
        },
        {
          id: "cross-device-experiences",
          title: "6.3 Cross-Device Experiences",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Phone ↔ Watch communication",
            "Data syncing",
            "Background tasks"
          ]
        }
      ]
    },
    {
      id: "mobile-performance-optimization",
      title: "MODULE 7 — Mobile Performance Optimization",
      topics: [
        {
          id: "app-startup-optimization",
          title: "7.1 App Startup Optimization",
          duration: "75 min",
          completed: false,
          subtopics: [
            "Launch time analysis",
            "Cold vs warm starts",
            "Splash screen optimization",
            "Preloading strategies"
          ]
        },
        {
          id: "memory-storage-optimization",
          title: "7.2 Memory & Storage Optimization",
          duration: "85 min",
          completed: false,
          subtopics: [
            "Memory profiling techniques",
            "Cache management",
            "Database optimization",
            "Asset compression strategies"
          ]
        },
        {
          id: "battery-efficiency",
          title: "7.3 Battery Efficiency Techniques",
          duration: "70 min",
          completed: false,
          subtopics: [
            "Background processing optimization",
            "Location services efficiency",
            "Network request batching",
            "CPU usage monitoring"
          ]
        },
        {
          id: "network-optimization",
          title: "7.4 Network Optimization",
          duration: "80 min",
          completed: false,
          subtopics: [
            "Request caching strategies",
            "Image optimization",
            "Offline-first approaches",
            "Network monitoring tools"
          ]
        },
        {
          id: "debugging-profiling-tools",
          title: "7.5 Debugging & Profiling Tools",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Android Profiler",
            "Xcode Instruments",
            "Flutter DevTools",
            "Metro Bundler Profiler"
          ]
        }
      ]
    },
    {
      id: "mobile-app-security",
      title: "MODULE 8 — Mobile App Security",
      topics: [
        {
          id: "secure-storage",
          title: "8.1 Secure Storage",
          duration: "85 min",
          completed: false,
          subtopics: [
            "Keychain (iOS)",
            "Keystore (Android)",
            "Encrypted databases",
            "Biometric authentication"
          ]
        },
        {
          id: "protecting-api-keys",
          title: "8.2 Protecting API Keys",
          duration: "75 min",
          completed: false,
          subtopics: [
            "Environment variables",
            "Code obfuscation",
            "Server-side proxy patterns",
            "Runtime key generation"
          ]
        },
        {
          id: "network-security",
          title: "8.3 Network Security",
          duration: "90 min",
          completed: false,
          subtopics: [
            "SSL pinning",
            "Certificate validation",
            "Man-in-the-middle prevention",
            "API security headers"
          ]
        },
        {
          id: "app-hardening",
          title: "8.4 App Hardening",
          duration: "95 min",
          completed: false,
          subtopics: [
            "Root/jailbreak detection",
            "Anti-debugging techniques",
            "Runtime application self-protection",
            "Code tampering prevention"
          ]
        },
        {
          id: "owasp-mobile-top-10",
          title: "8.5 OWASP Mobile Top 10",
          duration: "80 min",
          completed: false,
          subtopics: [
            "Injection attacks",
            "Insecure communication",
            "Insecure authentication",
            "Security testing methodologies"
          ]
        }
      ]
    },
    {
      id: "deployment-publishing",
      title: "MODULE 9 — Deployment & Publishing",
      topics: [
        {
          id: "android-deployment",
          title: "9.1 Android Deployment",
          duration: "100 min",
          completed: false,
          subtopics: [
            "App signing",
            "Release builds",
            "Play Store listing",
            "Play Console management"
          ]
        },
        {
          id: "ios-deployment",
          title: "9.2 iOS Deployment",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Certificates & provisioning profiles",
            "TestFlight beta testing",
            "App Store Connect",
            "App Review guidelines"
          ]
        },
        {
          id: "maintenance-updates",
          title: "9.3 Maintenance & Updates",
          duration: "85 min",
          completed: false,
          subtopics: [
            "Crash reporting",
            "Rollouts & staged releases",
            "App analytics",
            "A/B testing strategies"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 10 — Capstone Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "10.1 Capstone Project Development",
          duration: "360 min",
          completed: false,
          subtopics: [
            "Social media app (native or cross-platform)",
            "Fitness wearable app (Apple Watch/Wear OS)",
            "E-commerce mobile app",
            "Location-based delivery app",
            "Mobile 2D game",
            "Finance or wallet app",
            "UI/UX implementation",
            "Native APIs integration",
            "Backend integration",
            "Performance optimization",
            "Deployment & documentation"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 11 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your mobile app projects for review",
            "Ensure all platform requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 25, // 25% weight
    practicalExercises: 45, // 45% weight
    capstoneProjects: 30 // 30% weight
  },
  
  careerOutcomes: [
    "Mobile App Developer",
    "Android Developer",
    "iOS Developer",
    "Flutter Developer",
    "React Native Developer",
    "Mobile Game Developer",
    "Cross-Platform Developer",
    "Mobile UI/UX Developer"
  ],
  
  technologiesCovered: [
    "Android Studio", "Xcode", "Kotlin", "Swift", "Java", "Objective-C",
    "Flutter", "Dart", "React Native", "Unity", "C#", "Firebase",
    "SQLite", "Core Data", "Material Design", "Human Interface Guidelines",
    "Git", "App Store Connect", "Play Console", "Performance Profiling"
  ]
};