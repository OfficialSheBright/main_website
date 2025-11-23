export default function TechnicalDiscoveryContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Technical Discovery</h2>
      <p className="text-gray-600">
        Technical discovery is the process of gathering information about existing systems, requirements, and constraints before designing or implementing a solution.  
        It lays the foundation for successful projects by ensuring all technical and business factors are understood.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Technical Discovery?</h3>
        <p className="text-blue-700">
          A thorough discovery phase reduces risk, uncovers hidden challenges, and aligns stakeholders on goals and expectations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Discovery Workshops</h3>
      <ul>
        <li>Facilitate sessions with stakeholders to gather requirements</li>
        <li>Map out current processes, pain points, and desired outcomes</li>
        <li>Document assumptions, constraints, and success criteria</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Stakeholder Interviews</h3>
      <ul>
        <li>Conduct interviews with business, technical, and end-user stakeholders</li>
        <li>Identify needs, expectations, and potential risks</li>
        <li>Capture diverse perspectives for a holistic view</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. System Audits & Assessments</h3>
      <ul>
        <li>Review existing architecture, code, and infrastructure</li>
        <li>Identify technical debt, integration points, and dependencies</li>
        <li>Assess scalability, security, and performance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Documentation Review</h3>
      <ul>
        <li>Analyze current documentation, specs, and process flows</li>
        <li>Identify gaps, outdated information, and improvement areas</li>
        <li>Ensure alignment between documentation and reality</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Technical discovery checklist
- Stakeholder list and interview notes
- Current system architecture diagrams
- List of integrations and dependencies
- Documented pain points and requirements
- Risk and constraint log
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Technical Discovery</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Kickstarting new projects or major enhancements</li>
          <li>Reducing risk in complex system integrations</li>
          <li>Aligning business and technical teams</li>
          <li>Informing solution design and planning</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Technical discovery is a critical first step for any successful project.  
        Master these practices to uncover requirements, reduce risk, and set your team up for delivery success.
      </p>
    </div>
  );
}