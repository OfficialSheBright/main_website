"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
  userProgress 
}: ContentComponentProps) {
  
  const handleSubmissionComplete = () => {
    // Notify parent component about submission completion
    onInteraction?.("project_submitted", { 
      courseId: "web-development",
      module: "project-submission",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📚 Module 11: Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of web development by building and submitting a complete project that showcases everything you've learned
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You'll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply all concepts learned throughout the course
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a complete, production-ready application
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in full-stack development
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  Code quality and organization (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🎨</span>
                  User interface and experience (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Deployment and presentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Technical Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Frontend Requirements</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• React/Next.js application</li>
                <li>• Responsive design (mobile-first)</li>
                <li>• Modern CSS (Tailwind/styled-components)</li>
                <li>• State management (Context/Redux)</li>
                <li>• Component-based architecture</li>
                <li>• SEO optimization</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Backend Requirements</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• RESTful API or GraphQL</li>
                <li>• Database integration</li>
                <li>• User authentication & authorization</li>
                <li>• Input validation & error handling</li>
                <li>• Security best practices</li>
                <li>• API documentation</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">DevOps & Quality</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Live deployment (Vercel/Netlify)</li>
                <li>• Environment configuration</li>
                <li>• Version control (Git)</li>
                <li>• Code documentation</li>
                <li>• Performance optimization</li>
                <li>• Error monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            💡 Project Ideas & Inspiration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-featured online store with payments, inventory, and admin panel",
                difficulty: "Advanced",
                color: "blue"
              },
              {
                title: "Social Media App",
                description: "Real-time social platform with posts, comments, messaging, and feeds",
                difficulty: "Advanced", 
                color: "purple"
              },
              {
                title: "Project Management Tool",
                description: "Team collaboration app with tasks, boards, time tracking, and reporting",
                difficulty: "Intermediate",
                color: "green"
              },
              {
                title: "Learning Management System",
                description: "Educational platform with courses, quizzes, progress tracking, and certificates",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Real-Time Chat Application",
                description: "Multi-room chat with file sharing, video calls, and message history",
                difficulty: "Intermediate",
                color: "red"
              },
              {
                title: "Analytics Dashboard", 
                description: "Data visualization tool with charts, reports, and real-time metrics",
                difficulty: "Intermediate",
                color: "indigo"
              }
            ].map((idea, index) => (
              <div key={index} className={`bg-${idea.color}-50 border border-${idea.color}-200 rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold text-${idea.color}-900 mb-2`}>{idea.title}</h3>
                <p className={`text-${idea.color}-700 text-sm mb-3`}>{idea.description}</p>
                <span className={`inline-block bg-${idea.color}-100 text-${idea.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>💡 Pro Tip:</strong> Choose a project that genuinely interests you and solves a real problem. 
              This will keep you motivated and create something you're proud to showcase to employers!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="web-development"
          courseName="Complete Web Development"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Resources:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://github.com" className="text-blue-600 hover:underline">GitHub</a> - Version control and project hosting</li>
                <li>• <a href="https://vercel.com" className="text-blue-600 hover:underline">Vercel</a> - Frontend deployment platform</li>
                <li>• <a href="https://railway.app" className="text-blue-600 hover:underline">Railway</a> - Backend deployment platform</li>
                <li>• <a href="https://planetscale.com" className="text-blue-600 hover:underline">PlanetScale</a> - Serverless MySQL database</li>
                <li>• <a href="https://supabase.com" className="text-blue-600 hover:underline">Supabase</a> - Open source Firebase alternative</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design & Assets:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://tailwindui.com" className="text-blue-600 hover:underline">Tailwind UI</a> - Professional UI components</li>
                <li>• <a href="https://unsplash.com" className="text-blue-600 hover:underline">Unsplash</a> - High-quality free images</li>
                <li>• <a href="https://heroicons.com" className="text-blue-600 hover:underline">Heroicons</a> - Beautiful SVG icons</li>
                <li>• <a href="https://fonts.google.com" className="text-blue-600 hover:underline">Google Fonts</a> - Web typography</li>
                <li>• <a href="https://coolors.co" className="text-blue-600 hover:underline">Coolors</a> - Color palette generator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}