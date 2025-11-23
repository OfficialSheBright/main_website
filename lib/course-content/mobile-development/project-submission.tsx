"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "mobile-development",
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
            📚 Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of mobile development by building and submitting a complete app that showcases your skills in design, implementation, and deployment.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You&apos;ll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply mobile development concepts and best practices
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a fully functional, user-friendly mobile app
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in UI/UX, state management, and APIs
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
                  <span className="text-blue-500 mr-2">📱</span>
                  App design and user experience (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔗</span>
                  API integration and data handling (25%)
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
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Frontend (App) Requirements</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Built with React Native, Flutter, or native SDKs</li>
                <li>• Responsive and accessible UI</li>
                <li>• State management (Redux, Provider, Bloc, etc.)</li>
                <li>• Navigation and routing</li>
                <li>• App icons and splash screens</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Backend & APIs</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• RESTful API or GraphQL integration</li>
                <li>• User authentication (optional)</li>
                <li>• Data persistence (local storage or remote DB)</li>
                <li>• Error handling and validation</li>
                <li>• Security best practices</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">DevOps & Quality</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Version control (Git)</li>
                <li>• App deployment (TestFlight, Play Store, Expo, etc.)</li>
                <li>• Code documentation</li>
                <li>• Performance optimization</li>
                <li>• Automated or manual testing</li>
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
                title: "Fitness Tracker App",
                description: "Track workouts, set goals, and visualize progress with charts.",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Recipe Sharing Platform",
                description: "Browse, upload, and share recipes with a social feed.",
                difficulty: "Intermediate", 
                color: "green"
              },
              {
                title: "Personal Finance Manager",
                description: "Manage expenses, budgets, and savings with analytics.",
                difficulty: "Advanced",
                color: "purple"
              },
              {
                title: "Event Planner",
                description: "Create and manage events, send invites, and track RSVPs.",
                difficulty: "Intermediate",
                color: "orange"
              },
              {
                title: "Language Learning App",
                description: "Interactive lessons, quizzes, and progress tracking.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "Real-Time Chat App", 
                description: "Instant messaging with notifications and media sharing.",
                difficulty: "Advanced",
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
              <strong>💡 Pro Tip:</strong> Choose a project that excites you and solves a real-world problem.  
              This will help you stay motivated and create a standout portfolio app!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="mobile-development"
          courseName="Mobile Development"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Development Tools:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://reactnative.dev/" className="text-blue-600 hover:underline">React Native</a> - Cross-platform mobile apps</li>
                <li>• <a href="https://flutter.dev/" className="text-blue-600 hover:underline">Flutter</a> - Beautiful native apps</li>
                <li>• <a href="https://expo.dev/" className="text-blue-600 hover:underline">Expo</a> - Fast React Native development</li>
                <li>• <a href="https://firebase.google.com/" className="text-blue-600 hover:underline">Firebase</a> - Backend for mobile apps</li>
                <li>• <a href="https://github.com/" className="text-blue-600 hover:underline">GitHub</a> - Version control</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design & Assets:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://figma.com/" className="text-blue-600 hover:underline">Figma</a> - UI/UX design</li>
                <li>• <a href="https://unsplash.com/" className="text-blue-600 hover:underline">Unsplash</a> - Free images</li>
                <li>• <a href="https://fonts.google.com/" className="text-blue-600 hover:underline">Google Fonts</a> - Typography</li>
                <li>• <a href="https://heroicons.com/" className="text-blue-600 hover:underline">Heroicons</a> - SVG icons</li>
                <li>• <a href="https://coolors.co/" className="text-blue-600 hover:underline">Coolors</a> - Color palettes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}