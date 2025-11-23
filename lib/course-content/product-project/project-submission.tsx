"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "product-project",
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
            Demonstrate your mastery of product and project management by submitting a comprehensive project plan and execution report that showcases your skills across the product lifecycle.
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
                  Apply product and project management frameworks and best practices
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Develop a real-world product strategy and execution plan
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in planning, execution, and stakeholder management
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy project artifact
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📊</span>
                  Clarity and completeness of project plan (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🧭</span>
                  Strategic thinking and prioritization (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🤝</span>
                  Stakeholder and risk management (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Presentation and documentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Project Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Planning</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Product vision and goals</li>
                <li>• Stakeholder analysis</li>
                <li>• Requirements gathering and prioritization</li>
                <li>• Roadmap and timeline</li>
                <li>• Risk assessment</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Execution</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Project plan (Gantt chart, Kanban, or Scrum board)</li>
                <li>• Resource allocation</li>
                <li>• Communication plan</li>
                <li>• Progress tracking and reporting</li>
                <li>• Change management</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Delivery & Review</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Final product demo or prototype</li>
                <li>• Lessons learned and retrospective</li>
                <li>• Documentation (slides, report, or wiki)</li>
                <li>• Presentation to stakeholders</li>
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
                title: "New Product Launch Plan",
                description: "Develop a go-to-market strategy and execution plan for a new digital product.",
                difficulty: "Advanced",
                color: "blue"
              },
              {
                title: "Agile Transformation Roadmap",
                description: "Plan and manage the transition of a team or company to agile methodologies.",
                difficulty: "Advanced", 
                color: "purple"
              },
              {
                title: "Stakeholder Communication Portal",
                description: "Design a system for transparent project updates and stakeholder feedback.",
                difficulty: "Intermediate",
                color: "green"
              },
              {
                title: "Risk Management Dashboard",
                description: "Create a tool for tracking, assessing, and mitigating project risks.",
                difficulty: "Intermediate",
                color: "orange"
              },
              {
                title: "Resource Allocation Tool",
                description: "Build a platform for managing team assignments and workload balancing.",
                difficulty: "Intermediate",
                color: "red"
              },
              {
                title: "Retrospective & Lessons Learned App", 
                description: "Facilitate project retrospectives and capture actionable insights.",
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
              <strong>💡 Pro Tip:</strong> Choose a project that reflects real-world challenges and demonstrates your ability to manage complexity and deliver value!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="product-project"
          courseName="Product & Project Management"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Planning & Management Tools:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://trello.com" className="text-blue-600 hover:underline">Trello</a> - Kanban boards</li>
                <li>• <a href="https://asana.com" className="text-blue-600 hover:underline">Asana</a> - Project tracking</li>
                <li>• <a href="https://monday.com" className="text-blue-600 hover:underline">Monday.com</a> - Team management</li>
                <li>• <a href="https://miro.com" className="text-blue-600 hover:underline">Miro</a> - Collaborative whiteboarding</li>
                <li>• <a href="https://lucidchart.com" className="text-blue-600 hover:underline">Lucidchart</a> - Diagramming and flowcharts</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Templates & Documentation:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://www.atlassian.com/software/confluence/templates" className="text-blue-600 hover:underline">Confluence Templates</a> - Project docs</li>
                <li>• <a href="https://www.smartsheet.com/free-project-management-templates" className="text-blue-600 hover:underline">Smartsheet Templates</a> - Gantt, risk, and roadmap templates</li>
                <li>• <a href="https://www.productplan.com/" className="text-blue-600 hover:underline">ProductPlan</a> - Roadmapping</li>
                <li>• <a href="https://www.productcoalition.com/" className="text-blue-600 hover:underline">Product Coalition</a> - Product management articles</li>
                <li>• <a href="https://www.pmi.org/" className="text-blue-600 hover:underline">PMI</a> - Project Management Institute</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}