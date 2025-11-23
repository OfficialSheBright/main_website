export default function AgileProjectManagementContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Agile Project Management</h2>
      <p className="text-gray-600">
        Agile project management is a flexible, iterative approach to delivering projects that emphasizes collaboration, customer feedback, and rapid adaptation to change.  
        Mastering Agile helps teams deliver value faster and respond effectively to evolving requirements.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Agile?</h3>
        <p className="text-blue-700">
          Agile empowers teams to deliver high-quality products, improve transparency, and continuously improve processes through regular feedback and adaptation.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Agile Principles</h3>
      <ul>
        <li>Individuals and interactions over processes and tools</li>
        <li>Working software over comprehensive documentation</li>
        <li>Customer collaboration over contract negotiation</li>
        <li>Responding to change over following a plan</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Scrum Roles</h3>
      <ul>
        <li>Product Owner (PO): Defines vision, manages backlog, prioritizes work</li>
        <li>Scrum Master (SM): Facilitates process, removes blockers, coaches team</li>
        <li>Development Team: Delivers increments of value each sprint</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scrum Ceremonies</h3>
      <ul>
        <li>Standups: Daily sync on progress and blockers</li>
        <li>Sprint Planning: Define sprint goals and select backlog items</li>
        <li>Retrospectives: Reflect and improve team processes</li>
        <li>Reviews: Demonstrate completed work to stakeholders</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Backlog & Velocity</h3>
      <ul>
        <li>Backlog management: Prioritize and refine user stories</li>
        <li>Track velocity to estimate team capacity and plan sprints</li>
        <li>Continuous improvement through regular feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple user story format
As a [user type], I want to [do something] so that [I get a benefit].
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Agile Project Management</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Software and product development</li>
          <li>Cross-functional team collaboration</li>
          <li>Continuous delivery and improvement</li>
          <li>Managing changing requirements</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Agile project management is essential for modern teams seeking flexibility, speed, and high-quality outcomes.  
        Master these practices to lead successful projects in dynamic environments.
      </p>
    </div>
  );
}