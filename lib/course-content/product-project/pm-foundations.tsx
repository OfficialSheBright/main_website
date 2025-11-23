export default function PmFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">PM Foundations</h2>
      <p className="text-gray-600">
        Project Management (PM) foundations cover the essential principles, processes, and skills needed to lead projects from initiation to successful delivery.  
        Mastering these basics is crucial for managing scope, time, cost, and stakeholder expectations.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why PM Foundations?</h3>
        <p className="text-blue-700">
          Strong PM foundations help you deliver projects on time, within budget, and to the satisfaction of all stakeholders.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Lifecycle</h3>
      <ul>
        <li>Initiation: Define objectives, scope, and stakeholders</li>
        <li>Planning: Develop schedules, budgets, and risk plans</li>
        <li>Execution: Coordinate teams and resources to deliver work</li>
        <li>Monitoring: Track progress, manage changes, and report status</li>
        <li>Closure: Finalize deliverables and capture lessons learned</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Triple Constraint: Scope, Time, Cost</h3>
      <ul>
        <li>Scope: Define what is and isn’t included in the project</li>
        <li>Time: Estimate and manage schedules and deadlines</li>
        <li>Cost: Plan and control budgets and expenditures</li>
        <li>Balance these constraints to achieve project goals</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Risk & Issue Management</h3>
      <ul>
        <li>Identify, assess, and prioritize risks early</li>
        <li>Develop mitigation and contingency plans</li>
        <li>Track and resolve issues as they arise</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Stakeholder Management</h3>
      <ul>
        <li>Identify all stakeholders and their interests</li>
        <li>Communicate regularly and manage expectations</li>
        <li>Engage stakeholders in decision-making and feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple risk register
| Risk            | Likelihood | Impact | Mitigation Plan         |
|-----------------|------------|--------|------------------------|
| Scope creep     | High       | High   | Strict change control  |
| Resource delays | Medium     | High   | Backup resources       |
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of PM Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Launching new products or features</li>
          <li>Managing cross-functional initiatives</li>
          <li>Delivering client projects and consulting engagements</li>
          <li>Improving team collaboration and accountability</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        PM foundations are essential for successful project delivery and leadership.  
        Master these principles to manage projects with confidence and achieve outstanding results.
      </p>
    </div>
  );
}