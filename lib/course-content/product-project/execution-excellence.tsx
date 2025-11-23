export default function ExecutionExcellenceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Execution Excellence</h2>
      <p className="text-gray-600">
        Execution excellence is about delivering projects and programs efficiently, on time, and with high quality.  
        It involves planning, tracking, and continuously improving engineering and project delivery processes.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Execution Excellence?</h3>
        <p className="text-blue-700">
          Achieving execution excellence ensures predictable outcomes, stakeholder satisfaction, and a culture of continuous improvement.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Sprint & Long-Cycle Planning</h3>
      <ul>
        <li>Define clear goals and deliverables for each sprint or cycle</li>
        <li>Break down work into actionable tasks and stories</li>
        <li>Balance short-term sprints with long-term milestones</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Engineering Productivity Tracking</h3>
      <ul>
        <li>Track velocity, throughput, and cycle time</li>
        <li>Use dashboards and reports to monitor progress</li>
        <li>Identify and address bottlenecks early</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Running Technical Reviews</h3>
      <ul>
        <li>Conduct regular code, design, and architecture reviews</li>
        <li>Encourage peer feedback and knowledge sharing</li>
        <li>Document decisions and action items</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Escalation Management</h3>
      <ul>
        <li>Identify risks and blockers early</li>
        <li>Escalate issues with clear context and impact</li>
        <li>Work with stakeholders to resolve challenges quickly</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Sprint review checklist
- Review completed stories and demos
- Gather feedback from stakeholders
- Discuss what went well and what can improve
- Update action items for next sprint
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Execution Excellence</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Delivering complex engineering programs</li>
          <li>Improving team productivity and morale</li>
          <li>Ensuring high-quality, on-time project delivery</li>
          <li>Building a culture of accountability and improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Execution excellence is key to successful project and program delivery.  
        Master these practices to lead high-performing teams and achieve outstanding results.
      </p>
    </div>
  );
}