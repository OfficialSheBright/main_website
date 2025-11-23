"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "design-creative",
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
            Demonstrate your mastery of design and creativity by submitting a complete project that showcases your skills in visual communication, user experience, and creative problem-solving.
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
                  Apply design principles and creative thinking
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Develop a visually compelling and user-centered project
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in design tools and processes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy creative work
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🎨</span>
                  Visual design and creativity (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🧑‍💻</span>
                  User experience and usability (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical execution and process (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Presentation and documentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Project Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Design Process</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Research and ideation</li>
                <li>• Mood boards or inspiration gathering</li>
                <li>• Sketches or wireframes</li>
                <li>• Iterative design and feedback</li>
                <li>• Final design assets</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Execution</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Use of professional design tools (Figma, Adobe, etc.)</li>
                <li>• Visual hierarchy and color theory</li>
                <li>• Typography and layout</li>
                <li>• Accessibility considerations</li>
                <li>• Exported assets or prototypes</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Presentation</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Project summary and goals</li>
                <li>• Design rationale and process explanation</li>
                <li>• Screenshots or video walkthrough</li>
                <li>• Source files or shareable prototype link</li>
                <li>• Reflection on challenges and learnings</li>
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
                title: "Brand Identity Design",
                description: "Create a logo, color palette, and brand guidelines for a new company or product.",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Mobile App UI Kit",
                description: "Design a complete set of screens and components for a mobile application.",
                difficulty: "Intermediate", 
                color: "green"
              },
              {
                title: "Website Redesign",
                description: "Redesign an existing website with a focus on usability and modern aesthetics.",
                difficulty: "Advanced",
                color: "purple"
              },
              {
                title: "Poster or Campaign",
                description: "Design a poster or digital campaign for a social cause or event.",
                difficulty: "Intermediate",
                color: "orange"
              },
              {
                title: "Interactive Prototype",
                description: "Build an interactive prototype for a new product or service.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "Infographic Series", 
                description: "Visualize complex data or concepts with a series of infographics.",
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
              <strong>💡 Pro Tip:</strong> Choose a project that excites you and allows you to express your unique creative vision!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="design-creative"
          courseName="Design & Creative"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Design Tools & Inspiration:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://figma.com/" className="text-blue-600 hover:underline">Figma</a> - Collaborative design tool</li>
                <li>• <a href="https://adobe.com/" className="text-blue-600 hover:underline">Adobe Creative Cloud</a> - Industry-standard design suite</li>
                <li>• <a href="https://dribbble.com/" className="text-blue-600 hover:underline">Dribbble</a> - Design inspiration</li>
                <li>• <a href="https://behance.net/" className="text-blue-600 hover:underline">Behance</a> - Creative portfolios</li>
                <li>• <a href="https://coolors.co/" className="text-blue-600 hover:underline">Coolors</a> - Color palette generator</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets & Learning:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://unsplash.com/" className="text-blue-600 hover:underline">Unsplash</a> - Free high-quality images</li>
                <li>• <a href="https://fonts.google.com/" className="text-blue-600 hover:underline">Google Fonts</a> - Web typography</li>
                <li>• <a href="https://thenounproject.com/" className="text-blue-600 hover:underline">Noun Project</a> - Icons and symbols</li>
                <li>• <a href="https://www.interaction-design.org/" className="text-blue-600 hover:underline">Interaction Design Foundation</a> - UX learning</li>
                <li>• <a href="https://www.smashingmagazine.com/" className="text-blue-600 hover:underline">Smashing Magazine</a> - Design articles & tutorials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}