"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "game-development",
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
            Demonstrate your mastery of game development by building and submitting a complete game that showcases your skills in design, programming, and user experience.
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
                  Apply game design and development principles
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a playable, engaging game
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in graphics, logic, and user interaction
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
                  <span className="text-blue-500 mr-2">🎮</span>
                  Game design and creativity (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🖼️</span>
                  Graphics, audio, and user experience (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Playability, polish, and presentation (25%)
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
                <li>• Built with a game engine (Unity, Unreal, Godot, etc.) or custom engine</li>
                <li>• Clear game mechanics and rules</li>
                <li>• Responsive controls and feedback</li>
                <li>• Basic UI (menus, score, etc.)</li>
                <li>• Version control (Git)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Features & Implementation</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Graphics and/or audio assets</li>
                <li>• Game logic and state management</li>
                <li>• Error handling and edge cases</li>
                <li>• Performance optimization</li>
                <li>• Documentation (README, code comments)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">Polish & Delivery</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Playable build or demo video</li>
                <li>• Instructions for running/playing</li>
                <li>• Screenshots or gameplay video</li>
                <li>• Optional: Deployment to itch.io or similar</li>
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
                title: "Platformer Game",
                description: "Classic side-scrolling platformer with levels, enemies, and collectibles.",
                difficulty: "Intermediate",
                color: "blue"
              },
              {
                title: "Puzzle Game",
                description: "Challenging logic puzzles with increasing difficulty and scoring.",
                difficulty: "Intermediate", 
                color: "green"
              },
              {
                title: "Top-Down Shooter",
                description: "Fast-paced action game with waves of enemies and power-ups.",
                difficulty: "Advanced",
                color: "purple"
              },
              {
                title: "Simulation Game",
                description: "Manage resources, build systems, or simulate real-world processes.",
                difficulty: "Advanced",
                color: "orange"
              },
              {
                title: "Multiplayer Party Game",
                description: "Fun, competitive mini-games for multiple players.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "Narrative Adventure", 
                description: "Story-driven game with branching dialogue and choices.",
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
              <strong>💡 Pro Tip:</strong> Choose a game idea that excites you and lets you showcase your creativity and technical skills!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="game-development"
          courseName="Game Development"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Game Engines & Tools:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://unity.com/" className="text-blue-600 hover:underline">Unity</a> - Popular 2D/3D engine</li>
                <li>• <a href="https://godotengine.org/" className="text-blue-600 hover:underline">Godot</a> - Open-source engine</li>
                <li>• <a href="https://www.unrealengine.com/" className="text-blue-600 hover:underline">Unreal Engine</a> - AAA-quality games</li>
                <li>• <a href="https://itch.io/" className="text-blue-600 hover:underline">itch.io</a> - Share and publish games</li>
                <li>• <a href="https://github.com/" className="text-blue-600 hover:underline">GitHub</a> - Version control</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assets & Learning:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://opengameart.org/" className="text-blue-600 hover:underline">OpenGameArt</a> - Free game assets</li>
                <li>• <a href="https://kenney.nl/assets" className="text-blue-600 hover:underline">Kenney Assets</a> - 2D/3D assets</li>
                <li>• <a href="https://www.mixamo.com/" className="text-blue-600 hover:underline">Mixamo</a> - 3D character animation</li>
                <li>• <a href="https://www.gamedev.net/" className="text-blue-600 hover:underline">GameDev.net</a> - Community & tutorials</li>
                <li>• <a href="https://www.youtube.com/c/Brackeys" className="text-blue-600 hover:underline">Brackeys</a> - Game dev tutorials</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}