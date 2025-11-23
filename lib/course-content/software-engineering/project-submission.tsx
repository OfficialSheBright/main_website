"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "software-engineering",
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
            Demonstrate your mastery of software engineering by building and submitting a complete project that showcases your skills across the software development lifecycle.
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
                  Apply software engineering principles and best practices
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a robust, maintainable, and scalable application
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in design, implementation, and testing
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
                  Software design and architecture (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🧪</span>
                  Code quality and testing (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Documentation and presentation (25%)
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
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Core Requirements</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Clear software architecture (modular, layered, or microservices)</li>
                <li>• Version control (Git)</li>
                <li>• Requirements documentation (UML/use cases)</li>
                <li>• Automated testing (unit/integration)</li>
                <li>• Issue tracking and project management</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Implementation</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Use of OOP or functional programming principles</li>
                <li>• Error handling and input validation</li>
                <li>• Security best practices</li>
                <li>• Performance considerations</li>
                <li>• Documentation (README, code comments)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">DevOps & Quality</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• CI/CD pipeline (optional but recommended)</li>
                <li>• Deployment instructions or live demo (if applicable)</li>
                <li>• Code review evidence (PRs/issues)</li>
                <li>• Monitoring/logging (optional)</li>
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
                title: "Bug Tracker System",
                description: "A full-featured issue tracking tool for teams, with user roles, notifications, and reporting.",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Inventory Management App",
                description: "Manage products, suppliers, and stock levels with reporting and analytics.",
                difficulty: "Intermediate", 
                color: "green"
              },
              {
                title: "Automated Testing Framework",
                description: "A tool for running, reporting, and visualizing automated tests for codebases.",
                difficulty: "Advanced",
                color: "purple"
              },
              {
                title: "DevOps Dashboard",
                description: "Monitor CI/CD pipelines, deployments, and system health in real time.",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Document Collaboration Platform",
                description: "Real-time collaborative editing, versioning, and commenting for documents.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "Code Quality Analyzer", 
                description: "Analyze codebases for style, complexity, and security issues with actionable feedback.",
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
              <strong>💡 Pro Tip:</strong> Choose a project that aligns with your interests or career goals.  
              Real-world relevance will keep you motivated and help you build a standout portfolio!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="software-engineering"
          courseName="Software Engineering"
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
                <li>• <a href="https://draw.io" className="text-blue-600 hover:underline">draw.io</a> - Free UML and diagramming tool</li>
                <li>• <a href="https://lucidchart.com" className="text-blue-600 hover:underline">Lucidchart</a> - Collaborative diagramming</li>
                <li>• <a href="https://github.com/features/actions" className="text-blue-600 hover:underline">GitHub Actions</a> - CI/CD automation</li>
                <li>• <a href="https://www.sonarqube.org/" className="text-blue-600 hover:underline">SonarQube</a> - Code quality analysis</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design & Documentation:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://plantuml.com/" className="text-blue-600 hover:underline">PlantUML</a> - Text-based UML diagrams</li>
                <li>• <a href="https://www.markdownguide.org/" className="text-blue-600 hover:underline">Markdown Guide</a> - Write great README files</li>
                <li>• <a href="https://swagger.io/tools/swagger-ui/" className="text-blue-600 hover:underline">Swagger UI</a> - API documentation</li>
                <li>• <a href="https://www.atlassian.com/software/jira" className="text-blue-600 hover:underline">Jira</a> - Project management</li>
                <li>• <a href="https://mermaid-js.github.io/" className="text-blue-600 hover:underline">Mermaid</a> - Diagrams in Markdown</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}