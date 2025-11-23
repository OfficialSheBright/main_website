export default function CapstoneProjectsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Projects</h2>
      <p className="text-gray-600">
        Capstone projects are comprehensive, real-world assignments that integrate all the skills and knowledge gained throughout the course.  
        Completing these projects demonstrates your ability to manage products, projects, and programs from concept to execution.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Capstone Projects?</h3>
        <p className="text-blue-700">
          Capstone projects provide hands-on experience, showcase your expertise, and prepare you for real industry challenges in product and project management.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Components</h3>
      <ul>
        <li>Full Product Case Study (Research → PRD → Design → Metrics)</li>
        <li>Complete Agile Project Plan (Jira setup, roadmap, sprints)</li>
        <li>Technical Program Execution Plan</li>
        <li>Business Requirements Document (BRD)</li>
        <li>Solution Architecture Proposal</li>
        <li>Strategy & Consulting Presentation Deck</li>
        <li>Product analytics dashboard with experiments</li>
        <li>Go-To-Market (GTM) launch strategy</li>
        <li>Discovery, documentation, planning, execution, presentation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Best Practices</h3>
      <ul>
        <li>Apply frameworks and tools learned in the course</li>
        <li>Align deliverables with stakeholder needs and business goals</li>
        <li>Document assumptions, risks, and decisions clearly</li>
        <li>Use data and metrics to support your recommendations</li>
        <li>Communicate findings effectively through presentations and reports</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Evaluation Criteria</h3>
      <ul>
        <li>Completeness and quality of deliverables</li>
        <li>Demonstration of critical thinking and problem-solving</li>
        <li>Effective use of tools and methodologies</li>
        <li>Clarity of communication and presentation</li>
        <li>Alignment with course objectives and real-world scenarios</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Capstone project structure (outline)
1. Executive Summary
2. Problem Statement & Research
3. Product/Project Requirements (PRD/BRD)
4. Solution Design & Architecture
5. Implementation Plan (Agile/Scrum)
6. Metrics & Analytics
7. Go-To-Market Strategy
8. Presentation Deck
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Capstone Projects</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Portfolio for job applications</li>
          <li>Demonstrating end-to-end product/project management</li>
          <li>Showcasing technical and business analysis skills</li>
          <li>Preparing for real-world leadership roles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Capstone projects are the culmination of your learning journey.  
        Master these comprehensive assignments to prove your readiness for advanced roles in product, project, and program management.
      </p>
    </div>
  );
}