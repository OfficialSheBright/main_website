import { CourseConfig } from "./index";

export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  subtopics: string[];
}

export const webDevelopmentConfig: CourseConfig = {
  id: "web-development",
  title: "Complete Web Development Course",
  description: "Master full-stack web development from foundations to advanced deployment with industry-level projects",
  totalHours: 120,
  difficulty: "Beginner",
  modules: [
    {
      id: "foundations-web-development",
      title: "MODULE 1 — Foundations of Web Development",
      topics: [
        { 
          id: "intro-web-development", 
          title: "1.1 Introduction to Web Development", 
          duration: "90 min", 
          completed: false,
          subtopics: [
            "How the Web works (clients, servers, DNS, hosting, domains)",
            "HTTP & HTTPS protocols",
            "Frontend vs Backend vs Full-Stack",
            "Web browsers & rendering engines"
          ]
        },
        { 
          id: "core-tools-setup", 
          title: "1.2 Core Tools & Environment Setup", 
          duration: "75 min", 
          completed: false,
          subtopics: [
            "VS Code / JetBrains / Vim setup",
            "Git & GitHub basics",
            "Terminal basics and commands",
            "Node.js environment setup",
            "Package managers: npm, yarn, pnpm"
          ]
        },
        { 
          id: "programming-fundamentals", 
          title: "1.3 Programming Fundamentals", 
          duration: "105 min", 
          completed: false,
          subtopics: [
            "Variables and data types",
            "Control structures (if/else, loops)",
            "Functions and scope",
            "Arrays and objects",
            "Error handling and debugging",
            "ES6+ features (arrow functions, destructuring, modules)"
          ]
        }
      ]
    },
    // ... rest of your modules remain exactly the same
    {
      id: "frontend-development",
      title: "MODULE 2 — Frontend Development (Complete)",
      topics: [
        { 
          id: "html-semantic-markup", 
          title: "2.1 HTML & Semantic Markup", 
          duration: "80 min", 
          completed: false,
          subtopics: [
            "HTML document structure",
            "Semantic tags (header, nav, main, article, etc.)",
            "Forms & validation",
            "Media embedding (images, videos, audio)",
            "Accessibility (A11y) basics"
          ]
        },
        { 
          id: "css-styling", 
          title: "2.2 CSS & Styling", 
          duration: "120 min", 
          completed: false,
          subtopics: [
            "CSS selectors & specificity",
            "Layouts: Flexbox, Grid",
            "Colors, typography, and design principles",
            "CSS animations & transitions",
            "Responsive units (%, vh, vw, rem)",
            "Media queries and breakpoints"
          ]
        },
        { 
          id: "javascript-frontend", 
          title: "2.3 JavaScript for Frontend", 
          duration: "100 min", 
          completed: false,
          subtopics: [
            "DOM Manipulation techniques",
            "Events & event delegation",
            "Fetch API / Axios for HTTP requests",
            "Async JS (callbacks, promises, async/await)",
            "ES modules and imports"
          ]
        },
        { 
          id: "modern-frontend-frameworks", 
          title: "2.4 Modern Frontend Frameworks", 
          duration: "150 min", 
          completed: false,
          subtopics: [
            "React.js fundamentals",
            "Components and JSX",
            "State & props management",
            "React Hooks (useState, useEffect, etc.)",
            "Context API for global state",
            "React Router for navigation",
            "Forms & validation in React",
            "API integration patterns",
            "Performance optimization techniques"
          ]
        },
        { 
          id: "ui-ux-component-libraries", 
          title: "2.5 UI/UX & Component Libraries", 
          duration: "90 min", 
          completed: false,
          subtopics: [
            "Tailwind CSS utility-first approach",
            "Material UI components",
            "Bootstrap framework",
            "Shadcn/UI modern components",
            "Design systems & atomic design principles"
          ]
        },
        { 
          id: "state-management", 
          title: "2.6 State Management", 
          duration: "85 min", 
          completed: false,
          subtopics: [
            "Redux Toolkit for complex state",
            "Zustand lightweight state management",
            "Recoil experimental state library",
            "Jotai atomic state management"
          ]
        }
      ]
    },
    {
      id: "backend-development",
      title: "MODULE 3 — Backend Development (Complete)",
      topics: [
        { 
          id: "backend-fundamentals", 
          title: "3.1 Backend Fundamentals", 
          duration: "70 min", 
          completed: false,
          subtopics: [
            "Servers, APIs, and microservices architecture",
            "REST API design principles",
            "MVC (Model-View-Controller) pattern",
            "Authentication vs Authorization concepts"
          ]
        },
        { 
          id: "nodejs-express", 
          title: "3.2 Node.js + Express", 
          duration: "110 min", 
          completed: false,
          subtopics: [
            "Express.js routing system",
            "Middleware functions and chains",
            "Controllers and business logic",
            "Error handling strategies",
            "File uploading with Multer",
            "Sessions & cookies management",
            "CRUD operations implementation"
          ]
        },
        { 
          id: "databases", 
          title: "3.3 Databases", 
          duration: "130 min", 
          completed: false,
          subtopics: [
            "Relational databases (SQL)",
            "MySQL / PostgreSQL setup and queries",
            "Joins, indexes, and views",
            "Stored procedures and functions",
            "NoSQL databases with MongoDB",
            "Designing NoSQL schemas",
            "Aggregation pipelines and queries"
          ]
        },
        { 
          id: "authentication-systems", 
          title: "3.4 Authentication Systems", 
          duration: "95 min", 
          completed: false,
          subtopics: [
            "JWT (JSON Web Token) authentication",
            "OAuth integration (Google, GitHub, Discord)",
            "Password hashing with bcrypt",
            "RBAC (Role-Based Access Control) implementation"
          ]
        },
        { 
          id: "backend-tools", 
          title: "3.5 Backend Tools", 
          duration: "75 min", 
          completed: false,
          subtopics: [
            "ORMs (Prisma / Sequelize / TypeORM / Mongoose)",
            "Caching strategies with Redis",
            "Message queues: RabbitMQ / Kafka (introduction)"
          ]
        }
      ]
    },
    {
      id: "fullstack-development",
      title: "MODULE 4 — Full-Stack Development",
      topics: [
        { 
          id: "fullstack-architecture", 
          title: "4.1 Full-Stack Architecture", 
          duration: "80 min", 
          completed: false,
          subtopics: [
            "Connecting frontend and backend systems",
            "API consumption best practices",
            "Deployment strategies and considerations",
            "Monolithic vs microservices architecture"
          ]
        },
        { 
          id: "mern-pern-stack", 
          title: "4.2 MERN / PERN Stack", 
          duration: "120 min", 
          completed: false,
          subtopics: [
            "MERN: React + Node + Express + MongoDB",
            "PERN: React + Node + Express + PostgreSQL",
            "Stack integration patterns",
            "Data flow and state synchronization"
          ]
        },
        { 
          id: "fullstack-authentication", 
          title: "4.3 Authentication in Full-Stack Apps", 
          duration: "90 min", 
          completed: false,
          subtopics: [
            "Protected routes implementation",
            "Cookies vs localStorage security",
            "HTTPS enforcement",
            "Multi-role login systems"
          ]
        },
        { 
          id: "third-party-services", 
          title: "4.4 Integrating Third-Party Services", 
          duration: "100 min", 
          completed: false,
          subtopics: [
            "Payment integration (Stripe, Razorpay)",
            "Email services (SendGrid, Mailgun)",
            "Cloud storage (AWS S3, Cloudinary)",
            "API integration best practices"
          ]
        },
        { 
          id: "realworld-projects", 
          title: "4.5 Real-World Projects", 
          duration: "180 min", 
          completed: false,
          subtopics: [
            "Social media application development",
            "E-commerce platform creation",
            "Admin dashboard implementation",
            "Real-time chat app with WebSockets"
          ]
        }
      ]
    },
    {
      id: "responsive-mobile-first",
      title: "MODULE 5 — Responsive & Mobile-First Design",
      topics: [
        { 
          id: "responsive-foundations", 
          title: "5.1 Responsive Design Foundations", 
          duration: "60 min", 
          completed: false,
          subtopics: [
            "Mobile-first design philosophy",
            "Breakpoints and grid systems",
            "Handling images and aspect ratios"
          ]
        },
        { 
          id: "advanced-responsive", 
          title: "5.2 Advanced Responsive Techniques", 
          duration: "75 min", 
          completed: false,
          subtopics: [
            "Fluid typography scaling",
            "Container queries for component-based design",
            "CSS functions (clamp, min, max)"
          ]
        },
        { 
          id: "testing-responsiveness", 
          title: "5.3 Testing Responsiveness", 
          duration: "45 min", 
          completed: false,
          subtopics: [
            "Browser developer tools",
            "Device simulators and testing",
            "Cross-platform compatibility testing"
          ]
        }
      ]
    },
    {
      id: "pwa-training",
      title: "MODULE 6 — Progressive Web Apps (PWA) Training",
      topics: [
        { 
          id: "pwa-essentials", 
          title: "6.1 PWA Essentials", 
          duration: "70 min", 
          completed: false,
          subtopics: [
            "What is a Progressive Web App?",
            "Core pillars: fast, reliable, installable",
            "Web App Manifest configuration"
          ]
        },
        { 
          id: "service-workers", 
          title: "6.2 Service Workers", 
          duration: "90 min", 
          completed: false,
          subtopics: [
            "Service Worker lifecycle",
            "Caching strategies implementation",
            "Offline support and sync",
            "Background sync capabilities",
            "Push notifications setup"
          ]
        },
        { 
          id: "advanced-pwa", 
          title: "6.3 Advanced PWA Concepts", 
          duration: "65 min", 
          completed: false,
          subtopics: [
            "App Shell Model architecture",
            "Workbox for PWA tooling",
            "IndexedDB for local storage"
          ]
        },
        { 
          id: "publishing-pwa", 
          title: "6.4 Publishing Your PWA", 
          duration: "55 min", 
          completed: false,
          subtopics: [
            "Adding install banners",
            "Lighthouse PWA audits",
            "Deploying PWAs to app stores"
          ]
        }
      ]
    },
    {
      id: "performance-optimization",
      title: "MODULE 7 — Web Performance Optimization",
      topics: [
        { 
          id: "performance-basics", 
          title: "7.1 Performance Fundamentals", 
          duration: "60 min", 
          completed: false,
          subtopics: [
            "Core Web Vitals understanding",
            "PageSpeed Insights analysis",
            "Browser rendering lifecycle"
          ]
        },
        { 
          id: "frontend-optimization", 
          title: "7.2 Frontend Optimization", 
          duration: "85 min", 
          completed: false,
          subtopics: [
            "Code splitting strategies",
            "Lazy loading implementation",
            "Minification and bundling",
            "Image optimization: WebP, AVIF",
            "CDN and caching strategies",
            "Reducing reflows and repaints"
          ]
        },
        { 
          id: "backend-performance", 
          title: "7.3 Backend Performance", 
          duration: "75 min", 
          completed: false,
          subtopics: [
            "Load balancing techniques",
            "Rate limiting implementation",
            "Scaling strategies basics",
            "Database query optimization",
            "Database indexing strategies"
          ]
        },
        { 
          id: "monitoring-tools", 
          title: "7.4 Performance Monitoring Tools", 
          duration: "50 min", 
          completed: false,
          subtopics: [
            "Lighthouse performance audits",
            "WebPageTest analysis",
            "Google Analytics Performance panel"
          ]
        }
      ]
    },
    {
      id: "web-security",
      title: "MODULE 8 — Web Security Engineering",
      topics: [
        { 
          id: "security-fundamentals", 
          title: "8.1 Web Security Fundamentals", 
          duration: "70 min", 
          completed: false,
          subtopics: [
            "Threat modeling principles",
            "Security headers configuration",
            "HTTPS setup and configuration"
          ]
        },
        { 
          id: "application-security", 
          title: "8.2 Application-Level Security", 
          duration: "95 min", 
          completed: false,
          subtopics: [
            "SQL Injection prevention",
            "XSS (Cross-site scripting) protection",
            "CSRF attack mitigation",
            "Session hijacking prevention",
            "IDOR vulnerabilities handling"
          ]
        },
        { 
          id: "authentication-security", 
          title: "8.3 Authentication Security", 
          duration: "80 min", 
          completed: false,
          subtopics: [
            "Two-Factor Authentication (2FA)",
            "Secure password hashing",
            "Token security best practices",
            "OAuth security implementation"
          ]
        },
        { 
          id: "infrastructure-security", 
          title: "8.4 Server & Infrastructure Security", 
          duration: "75 min", 
          completed: false,
          subtopics: [
            "Secure API design patterns",
            "CORS configuration best practices",
            "Rate limiting implementation",
            "Security logging and monitoring"
          ]
        },
        { 
          id: "compliance-standards", 
          title: "8.5 Compliance & Standards", 
          duration: "60 min", 
          completed: false,
          subtopics: [
            "OWASP Top 10 vulnerabilities",
            "PCI DSS for payment processing",
            "GDPR compliance basics"
          ]
        }
      ]
    },
    {
      id: "deployment-devops",
      title: "MODULE 9 — Deployment & DevOps for Developers",
      topics: [
        { 
          id: "deployment-strategies", 
          title: "9.1 Deployment Strategies", 
          duration: "80 min", 
          completed: false,
          subtopics: [
            "Deploying with Netlify and Vercel",
            "Backend deployment on Render/Railway/AWS",
            "Docker containerization basics"
          ]
        },
        { 
          id: "ci-cd-pipelines", 
          title: "9.2 CI/CD Implementation", 
          duration: "70 min", 
          completed: false,
          subtopics: [
            "GitHub Actions workflow setup",
            "Automated testing pipelines",
            "Continuous deployment strategies"
          ]
        },
        { 
          id: "cloud-essentials", 
          title: "9.3 Cloud Platform Essentials", 
          duration: "90 min", 
          completed: false,
          subtopics: [
            "AWS basics and services overview",
            "S3 storage and Lambda functions",
            "IAM (Identity and Access Management)"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 10 — Capstone Projects",
      topics: [
        { 
          id: "social-networking-app", 
          title: "Project 1: Social Networking App with PWA", 
          duration: "240 min", 
          completed: false,
          subtopics: [
            "Project planning and architecture",
            "User authentication and profiles",
            "Real-time messaging system",
            "PWA implementation",
            "Deployment and documentation"
          ]
        },
        { 
          id: "ecommerce-platform", 
          title: "Project 2: Full E-commerce with Payments", 
          duration: "280 min", 
          completed: false,
          subtopics: [
            "Product catalog and inventory",
            "Shopping cart functionality",
            "Payment gateway integration",
            "Order management system",
            "Admin dashboard"
          ]
        },
        { 
          id: "analytics-dashboard", 
          title: "Project 3: Dashboard with Charts & Analytics", 
          duration: "200 min", 
          completed: false,
          subtopics: [
            "Data visualization with charts",
            "Real-time analytics",
            "User role management",
            "Export and reporting features"
          ]
        },
        { 
          id: "realtime-chat-app", 
          title: "Project 4: Real-time Chat Application", 
          duration: "220 min", 
          completed: false,
          subtopics: [
            "WebSocket implementation",
            "Real-time messaging",
            "File sharing capabilities",
            "Group chat functionality",
            "Message history and search"
          ]
        },
        { 
          id: "portfolio-showcase", 
          title: "Project 5: Professional Portfolio Showcase", 
          duration: "160 min", 
          completed: false,
          subtopics: [
            "Portfolio design and UX",
            "Project documentation",
            "Performance optimization",
            "SEO implementation",
            "Professional deployment"
          ]
        }
      ]
    }
  ]
};