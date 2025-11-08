import { CourseConfig } from "./index";

export const webDevelopmentConfig: CourseConfig = {
  id: "web-development",
  title: "Complete Web Development Course",
  description: "Master frontend and backend development with hands-on projects",
  totalHours: 30,
  difficulty: "Beginner",
  modules: [
    {
      id: "html-fundamentals",
      title: "HTML Fundamentals",
      topics: [
        { id: "html-basics", title: "HTML Basics & Structure", duration: "45 min", completed: false },
        { id: "html-elements", title: "HTML Elements & Tags", duration: "60 min", completed: false },
        { id: "html-forms", title: "Forms & Input Elements", duration: "50 min", completed: false },
        { id: "html-semantic", title: "Semantic HTML5", duration: "40 min", completed: false },
      ]
    },
    {
      id: "css-styling",
      title: "CSS Styling",
      topics: [
        { id: "css-basics", title: "CSS Basics & Selectors", duration: "55 min", completed: false },
        { id: "css-layout", title: "CSS Layout & Flexbox", duration: "70 min", completed: false },
        { id: "css-grid", title: "CSS Grid System", duration: "60 min", completed: false },
        { id: "css-responsive", title: "Responsive Design", duration: "65 min", completed: false },
      ]
    },
    {
      id: "javascript-programming",
      title: "JavaScript Programming",
      topics: [
        { id: "js-basics", title: "JavaScript Fundamentals", duration: "80 min", completed: false },
        { id: "js-dom", title: "DOM Manipulation", duration: "70 min", completed: false },
        { id: "js-events", title: "Event Handling", duration: "60 min", completed: false },
        { id: "js-async", title: "Async Programming", duration: "90 min", completed: false },
      ]
    },
    {
      id: "frontend-frameworks",
      title: "Frontend Frameworks",
      topics: [
        { id: "react-intro", title: "Introduction to React", duration: "75 min", completed: false },
        { id: "react-components", title: "React Components & Props", duration: "80 min", completed: false },
        { id: "react-state", title: "State Management", duration: "85 min", completed: false },
        { id: "react-hooks", title: "React Hooks", duration: "70 min", completed: false },
      ]
    },
    {
      id: "backend-basics",
      title: "Backend Development",
      topics: [
        { id: "nodejs-intro", title: "Node.js Introduction", duration: "60 min", completed: false },
        { id: "express-server", title: "Express.js Server", duration: "75 min", completed: false },
        { id: "database-integration", title: "Database Integration", duration: "90 min", completed: false },
        { id: "api-development", title: "REST API Development", duration: "85 min", completed: false },
      ]
    },
    {
      id: "deployment-hosting",
      title: "Deployment & Hosting",
      topics: [
        { id: "git-version-control", title: "Git & Version Control", duration: "50 min", completed: false },
        { id: "cloud-deployment", title: "Cloud Deployment", duration: "70 min", completed: false },
        { id: "performance-optimization", title: "Performance Optimization", duration: "65 min", completed: false },
        { id: "final-project", title: "Final Project", duration: "120 min", completed: false },
      ]
    }
  ]
};