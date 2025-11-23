export default function CapstoneCreativeProjectsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Creative Projects</h2>
      <p className="text-gray-600">
        The capstone creative project is your opportunity to showcase your design skills across UI/UX, branding, motion graphics, and game design.  
        This module guides you through the process of ideation, execution, and documentation for a professional portfolio piece.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Capstone Projects?</h3>
        <p className="text-blue-700">
          Capstone projects demonstrate your ability to solve real-world design problems, integrate multiple skills, and present your work professionally.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Scope</h3>
      <ul>
        <li>Choose a project type: web/mobile app, branding package, motion graphics, game UI, or 3D animation</li>
        <li>Define objectives, target audience, and success criteria</li>
        <li>Research trends and gather inspiration</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Concept & Ideation</h3>
      <ul>
        <li>Brainstorm ideas and create moodboards</li>
        <li>Sketch wireframes, storyboards, or initial concepts</li>
        <li>Validate ideas with peers or mentors</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Visual Execution</h3>
      <ul>
        <li>Design UI screens, branding assets, or motion sequences</li>
        <li>Develop interactive prototypes or animations</li>
        <li>Iterate based on feedback and usability testing</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Usability Improvements</h3>
      <ul>
        <li>Conduct user testing and accessibility checks</li>
        <li>Refine interactions, layouts, and visual hierarchy</li>
        <li>Document changes and rationale</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Documentation & Presentation</h3>
      <ul>
        <li>Prepare case study with process, challenges, and solutions</li>
        <li>Showcase final designs, prototypes, and assets</li>
        <li>Present project for review and feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Capstone project documentation structure
## Project Overview
## Research & Inspiration
## Concept & Ideation
## Design Process
## Usability Improvements
## Final Presentation
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Benefits of Capstone Projects</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Showcase your skills to employers and clients</li>
          <li>Build a professional portfolio</li>
          <li>Gain experience solving real design challenges</li>
          <li>Receive feedback for continuous improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Capstone creative projects are the culmination of your learning journey.  
        Master the process to create impactful, portfolio-ready work that demonstrates your expertise.
      </p>
    </div>
  );
}