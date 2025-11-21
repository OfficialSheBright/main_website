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

export const softwareEngineeringConfig: CourseConfig = {
  id: "software-engineering",
  title: "Complete Software Engineering Course",
  description: "Master software engineering from foundations to advanced systems programming with industry-level projects and best practices",
  totalHours: 200,
  difficulty: "Beginner to Advanced",
  skillLevel: "Beginner",
  targetAudience: [
    "Computer science students",
    "Software developers seeking system-level skills",
    "Engineers transitioning to software development",
    "Professionals seeking full-stack engineering expertise"
  ],
  certification: {
    available: true,
    requirements: {
      minProgressPercentage: 90,
      capstoneProjectRequired: true,
      minProjectScore: 75
    }
  },
  modules: [
    {
      id: "core-software-engineering-foundations",
      title: "MODULE 1 — Core Software Engineering Foundations",
      topics: [
        {
          id: "fundamentals-software-engineering",
          title: "1.1 Fundamentals of Software Engineering",
          duration: "120 min",
          completed: false,
          subtopics: [
            "What is Software Engineering?",
            "SDLC models (Agile, Waterfall, Spiral, DevOps)",
            "Requirements gathering & analysis",
            "UML diagrams: Use case, class, sequence, activity",
            "Version control (Git, GitHub, GitLab, Bitbucket)"
          ]
        },
        {
          id: "software-architecture",
          title: "1.2 Software Architecture",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Monolithic vs microservices",
            "Layered architecture",
            "Clean Architecture",
            "Dependency Injection principles",
            "Design principles (SOLID, DRY, KISS, YAGNI)"
          ]
        },
        {
          id: "design-patterns",
          title: "1.3 Design Patterns",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Creational, structural, behavioral patterns",
            "Factory, Singleton, Prototype",
            "Adapter, Facade, Composite",
            "Observer, Strategy, Command"
          ]
        },
        {
          id: "testing-quality-assurance",
          title: "1.4 Testing & Quality Assurance",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Unit testing (JUnit, PyTest, Google Test)",
            "Integration testing",
            "Test-driven development (TDD)",
            "Static code analysis",
            "CI/CD concepts"
          ]
        }
      ]
    },
    {
      id: "desktop-app-development",
      title: "MODULE 2 — Desktop App Development",
      topics: [
        {
          id: "desktop-development-overview",
          title: "2.1 Desktop Development Overview",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Native vs Cross-platform",
            "GUI frameworks",
            "Threading, OS-level integrations",
            "Dependency management & packaging"
          ]
        },
        {
          id: "python-gui-frameworks",
          title: "2.2 Python GUI Frameworks",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Tkinter basics",
            "PyQt / PySide",
            "Kivy for mobile + desktop",
            "Event loops & asynchronous UI"
          ]
        },
        {
          id: "python-data-apis",
          title: "2.3 Data & APIs",
          duration: "100 min",
          completed: false,
          subtopics: [
            "SQLite, MySQL integration",
            "File handling",
            "Consuming REST APIs"
          ]
        },
        {
          id: "python-packaging-deployment",
          title: "2.4 Packaging & Deployment",
          duration: "85 min",
          completed: false,
          subtopics: [
            "PyInstaller",
            "Building installers (MSI, EXE, DMG)"
          ]
        },
        {
          id: "dotnet-frameworks",
          title: "2.5 .NET Frameworks",
          duration: "130 min",
          completed: false,
          subtopics: [
            "WPF (Windows Presentation Foundation)",
            "WinUI",
            "MVVM architecture"
          ]
        },
        {
          id: "dotnet-advanced-topics",
          title: "2.6 Advanced Topics",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Threading",
            "DirectX/graphics basics",
            "Deployment & signing"
          ]
        },
        {
          id: "electron-js",
          title: "2.7 Electron.js",
          duration: "125 min",
          completed: false,
          subtopics: [
            "Node + Chromium architecture",
            "IPC communication",
            "Security hardening",
            "Packaging & auto-updates"
          ]
        },
        {
          id: "tauri-rust",
          title: "2.8 Tauri (Rust)",
          duration: "115 min",
          completed: false,
          subtopics: [
            "Rust backend bindings",
            "Webview-based UI",
            "Optimizations"
          ]
        }
      ]
    },
    {
      id: "system-programming",
      title: "MODULE 3 — System Programming (C / C++ / Rust)",
      topics: [
        {
          id: "system-programming-foundations",
          title: "3.1 System Programming Foundations",
          duration: "105 min",
          completed: false,
          subtopics: [
            "Low-level vs high-level languages",
            "Compilation, linking, loaders",
            "Memory architecture (stack, heap, segments)",
            "System calls & kernels",
            "Networking basics (sockets)"
          ]
        },
        {
          id: "c-foundations",
          title: "3.2 C Foundations",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Pointers & pointer arithmetic",
            "Memory management (malloc, free)",
            "Files & I/O",
            "Structures & unions",
            "Preprocessor & macros"
          ]
        },
        {
          id: "os-level-programming-c",
          title: "3.3 OS-Level Programming in C",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Processes & threads",
            "POSIX threading",
            "Inter-process communication",
            "Signals & system calls",
            "Socket programming"
          ]
        },
        {
          id: "oop-cpp",
          title: "3.4 OOP in C++",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Classes, inheritance, polymorphism",
            "Templates",
            "STL: vectors, maps, queues"
          ]
        },
        {
          id: "modern-cpp",
          title: "3.5 Modern C++ (C++11–C++20)",
          duration: "145 min",
          completed: false,
          subtopics: [
            "Smart pointers",
            "Lambdas",
            "Move semantics",
            "Multithreading"
          ]
        },
        {
          id: "cpp-systems-work",
          title: "3.6 Systems Work",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Low-level file operations",
            "Embedded C++ patterns",
            "Performance optimization"
          ]
        },
        {
          id: "rust-fundamentals",
          title: "3.7 Rust Fundamentals",
          duration: "135 min",
          completed: false,
          subtopics: [
            "Ownership & borrowing",
            "Lifetimes",
            "Traits",
            "Pattern matching"
          ]
        },
        {
          id: "rust-systems",
          title: "3.8 Rust for Systems",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Concurrency & async",
            "Unsafe Rust",
            "Memory-safe design",
            "WebAssembly intro",
            "Rust for embedded devices"
          ]
        }
      ]
    },
    {
      id: "embedded-systems-development",
      title: "MODULE 4 — Embedded Systems Development",
      topics: [
        {
          id: "embedded-foundations",
          title: "4.1 Embedded Foundations",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Microcontrollers vs Microprocessors",
            "Memory-mapped I/O",
            "Sensors & actuators",
            "Digital/analog interfaces"
          ]
        },
        {
          id: "microcontroller-programming",
          title: "4.2 Microcontroller Programming",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Arduino (C/C++)",
            "ESP32 / NodeMCU",
            "GPIO, PWM, ADC, I2C, SPI",
            "Interrupt routines"
          ]
        },
        {
          id: "real-time-systems-rtos",
          title: "4.3 Real-Time Systems (RTOS)",
          duration: "120 min",
          completed: false,
          subtopics: [
            "FreeRTOS basics",
            "Tasks, queues, semaphores",
            "Scheduling policies",
            "Real-time constraints"
          ]
        },
        {
          id: "arm-cortex-bare-metal",
          title: "4.4 ARM Cortex & Bare-Metal Programming",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Startup code",
            "Linker scripts",
            "Bootloaders",
            "Embedded debugging (SWD, JTAG)"
          ]
        },
        {
          id: "iot-system-development",
          title: "4.5 IoT System Development",
          duration: "110 min",
          completed: false,
          subtopics: [
            "MQTT",
            "TCP/UDP communication",
            "Cloud integration (AWS IoT, Firebase)"
          ]
        }
      ]
    },
    {
      id: "api-development",
      title: "MODULE 5 — API Development",
      topics: [
        {
          id: "api-fundamentals",
          title: "5.1 API Fundamentals",
          duration: "95 min",
          completed: false,
          subtopics: [
            "REST architecture",
            "HTTP verbs & status codes",
            "JSON, XML, Protobuf",
            "API design guidelines",
            "Versioning"
          ]
        },
        {
          id: "backend-frameworks",
          title: "5.2 Backend Frameworks",
          duration: "180 min",
          completed: false,
          subtopics: [
            "Node.js (Express / Fastify)",
            "Routing & controllers",
            "Middlewares",
            "Auth + JWT",
            "Error handling",
            "Python (Flask / Django)",
            "Request/response cycle",
            "ORM (Django ORM / SQLAlchemy)",
            "Background tasks (Celery)",
            "Go Lang APIs (Optional)",
            "Fast API creation",
            "Strong typing",
            "goroutines",
            "Fiber/Gin frameworks"
          ]
        },
        {
          id: "database-integrations",
          title: "5.3 Database Integrations",
          duration: "120 min",
          completed: false,
          subtopics: [
            "SQL (MySQL/Postgres)",
            "NoSQL (MongoDB, Redis)",
            "Indexing & queries",
            "Caching layers"
          ]
        },
        {
          id: "api-security",
          title: "5.4 API Security",
          duration: "110 min",
          completed: false,
          subtopics: [
            "OAuth 2.0",
            "API keys",
            "Rate limiting",
            "SSL/TLS",
            "OWASP API Top 10"
          ]
        },
        {
          id: "advanced-api-concepts",
          title: "5.5 Advanced API Concepts",
          duration: "130 min",
          completed: false,
          subtopics: [
            "GraphQL APIs",
            "WebSockets (real-time APIs)",
            "gRPC for high-performance services",
            "Microservices fundamentals"
          ]
        }
      ]
    },
    {
      id: "automation-scripting",
      title: "MODULE 6 — Automation & Scripting",
      topics: [
        {
          id: "scripting-languages",
          title: "6.1 Scripting Languages",
          duration: "90 min",
          completed: false,
          subtopics: [
            "Bash",
            "Python",
            "PowerShell"
          ]
        },
        {
          id: "file-system-automation",
          title: "6.2 File & System Automation",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Automating file operations",
            "Backup scripts",
            "Cron jobs / scheduled tasks",
            "Monitoring system resources"
          ]
        },
        {
          id: "network-automation",
          title: "6.3 Network Automation",
          duration: "95 min",
          completed: false,
          subtopics: [
            "SSH automation",
            "Server provisioning",
            "Using APIs in scripts",
            "Network scanning scripts"
          ]
        },
        {
          id: "devops-cicd-automation",
          title: "6.4 DevOps & CI/CD Automation",
          duration: "115 min",
          completed: false,
          subtopics: [
            "GitHub Actions",
            "Docker automation",
            "Build pipelines",
            "Deployment scripts"
          ]
        },
        {
          id: "web-automation",
          title: "6.5 Web Automation",
          duration: "105 min",
          completed: false,
          subtopics: [
            "Selenium",
            "Playwright",
            "Automating browser tasks",
            "Scraping with BeautifulSoup / Puppeteer"
          ]
        }
      ]
    },
    {
      id: "performance-testing-security",
      title: "MODULE 7 — Performance, Testing & Security",
      topics: [
        {
          id: "performance-optimization",
          title: "7.1 Performance Optimization",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Algorithmic optimization",
            "Memory profiling",
            "CPU profiling",
            "Network optimization"
          ]
        },
        {
          id: "testing",
          title: "7.2 Testing",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Unit tests",
            "Integration tests",
            "Stress tests",
            "Fuzz testing (C/C++)"
          ]
        },
        {
          id: "security",
          title: "7.3 Security",
          duration: "105 min",
          completed: false,
          subtopics: [
            "Secure coding practices",
            "Memory safety",
            "Static & dynamic analysis tools",
            "Dependency vulnerability scanning"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 8 — Capstone Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "8.1 Capstone Project Development",
          duration: "400 min",
          completed: false,
          subtopics: [
            "Desktop password manager",
            "File synchronization tool",
            "IoT home automation system",
            "High-performance C++ networking server",
            "Rust CLI tools",
            "Microservice-based API system",
            "Automation scripts suite",
            "Requirement analysis",
            "Design documentation",
            "Architecture planning",
            "Implementation",
            "Testing",
            "Deployment & documentation"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 9 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your software engineering projects for review",
            "Ensure all technical requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 20, // 20% weight
    practicalExercises: 50, // 50% weight
    capstoneProjects: 30 // 30% weight
  },
  
  careerOutcomes: [
    "Software Engineer",
    "Systems Programmer",
    "Desktop Application Developer",
    "Embedded Systems Engineer",
    "API Developer",
    "DevOps Engineer",
    "Automation Engineer",
    "Full-Stack Systems Developer"
  ],
  
  technologiesCovered: [
    "C", "C++", "Rust", "Python", "C# .NET", "Node.js", "Go",
    "Git", "Docker", "Linux", "Windows", "Embedded Systems",
    "Arduino", "ESP32", "FreeRTOS", "PyQt", "Electron", "Tauri",
    "REST APIs", "GraphQL", "WebSockets", "gRPC", "MySQL", "PostgreSQL",
    "MongoDB", "Redis", "GitHub Actions", "AWS", "System Programming"
  ]
};