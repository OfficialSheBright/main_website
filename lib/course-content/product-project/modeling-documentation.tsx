export default function ModelingDocumentationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Modeling & Documentation</h2>
      <p className="text-gray-600">
        Modeling and documentation are essential for visualizing processes, clarifying requirements, and ensuring alignment among stakeholders.  
        Effective models and clear documentation help teams understand, design, and deliver successful solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Modeling & Documentation?</h3>
        <p className="text-blue-700">
          Good models and documentation reduce misunderstandings, speed up onboarding, and provide a reference for future improvements.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Process Modeling (BPMN)</h3>
      <ul>
        <li>Use Business Process Model and Notation (BPMN) to visualize workflows</li>
        <li>Identify actors, activities, decisions, and handoffs</li>
        <li>Clarify complex business processes for all stakeholders</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Flowcharts & System Diagrams</h3>
      <ul>
        <li>Map out system components, data flows, and interactions</li>
        <li>Use tools like Lucidchart, Miro, or Visio for diagramming</li>
        <li>Support technical discussions and solution design</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Wireframes & Prototypes</h3>
      <ul>
        <li>Create low-fidelity wireframes to outline UI/UX</li>
        <li>Develop interactive prototypes for user feedback</li>
        <li>Use Figma, Balsamiq, or InVision for rapid prototyping</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Requirement Traceability Matrix</h3>
      <ul>
        <li>Track requirements from definition to delivery</li>
        <li>Ensure all requirements are addressed and tested</li>
        <li>Facilitate change management and impact analysis</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Requirement Traceability Matrix (RTM)
| Req ID | Requirement         | Design Ref | Test Case | Status   |
|--------|---------------------|------------|-----------|----------|
| R-101  | User login feature  | D-01       | TC-01     | Complete |
| R-102  | Password reset      | D-02       | TC-02     | Pending  |
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Modeling & Documentation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Clarifying business and technical requirements</li>
          <li>Designing and communicating solutions</li>
          <li>Supporting development, QA, and stakeholder reviews</li>
          <li>Managing scope and tracking changes</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Modeling and documentation are critical for project success and team alignment.  
        Master these practices to deliver clear, actionable, and maintainable solutions.
      </p>
    </div>
  );
}