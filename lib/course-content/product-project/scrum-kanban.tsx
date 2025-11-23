export default function ScrumKanbanContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Scrum & Kanban</h2>
      <p className="text-gray-600">
        Scrum and Kanban are two popular Agile frameworks for managing work and delivering value.  
        Understanding their principles and practices helps teams choose the right approach for their projects and workflows.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Scrum & Kanban?</h3>
        <p className="text-blue-700">
          Both frameworks promote transparency, continuous improvement, and efficient delivery, but differ in structure and flexibility.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Scrum Artifacts</h3>
      <ul>
        <li>Product Backlog: Ordered list of work for the product</li>
        <li>Sprint Backlog: Selected items for the current sprint</li>
        <li>Increment: The sum of completed work at the end of a sprint</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Kanban Boards</h3>
      <ul>
        <li>Visualize workflow using columns (To Do, In Progress, Done)</li>
        <li>Track work items as they move through stages</li>
        <li>Promote transparency and quick identification of bottlenecks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Limiting WIP (Work In Progress)</h3>
      <ul>
        <li>Set limits on the number of items in each workflow stage</li>
        <li>Encourage focus and reduce context switching</li>
        <li>Improve flow and predictability</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Continuous Improvement</h3>
      <ul>
        <li>Hold regular retrospectives to reflect and adapt</li>
        <li>Use metrics (cycle time, throughput) to guide improvements</li>
        <li>Empower teams to experiment and evolve their process</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Kanban board columns
[To Do] → [In Progress] → [Review] → [Done]
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Scrum & Kanban</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Managing software development and IT projects</li>
          <li>Visualizing and improving team workflows</li>
          <li>Delivering value continuously and predictably</li>
          <li>Adapting processes to team and project needs</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Scrum and Kanban are powerful frameworks for Agile delivery.  
        Master their principles to optimize your team&apos;s workflow and deliver better results.
      </p>
    </div>
  );
}