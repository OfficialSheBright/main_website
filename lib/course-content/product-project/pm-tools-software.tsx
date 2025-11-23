export default function PmToolsSoftwareContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">PM Tools & Software</h2>
      <p className="text-gray-600">
        Project management tools and software streamline planning, tracking, and collaboration for teams of all sizes.  
        Mastering these tools helps you manage projects efficiently, improve visibility, and deliver results.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why PM Tools Matter?</h3>
        <p className="text-blue-700">
          The right tools automate workflows, centralize information, and enable real-time collaboration—key for modern project delivery.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Jira Advanced Workflows</h3>
      <ul>
        <li>Customize boards, issue types, and workflows</li>
        <li>Automate tasks with rules and triggers</li>
        <li>Track progress with dashboards and reports</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. MS Project</h3>
      <ul>
        <li>Build Gantt charts for scheduling and dependencies</li>
        <li>Allocate resources and manage workloads</li>
        <li>Track milestones, critical paths, and project health</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Smartsheet</h3>
      <ul>
        <li>Collaborative spreadsheets for project tracking</li>
        <li>Automate reminders, approvals, and updates</li>
        <li>Integrate with other tools for seamless workflows</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. ClickUp</h3>
      <ul>
        <li>All-in-one platform for tasks, docs, and goals</li>
        <li>Custom views: lists, boards, timelines, calendars</li>
        <li>Track OKRs, sprints, and team performance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Jira workflow steps
1. To Do
2. In Progress
3. In Review
4. Done
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of PM Tools & Software</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Managing agile and waterfall projects</li>
          <li>Tracking deliverables, risks, and dependencies</li>
          <li>Collaborating across distributed teams</li>
          <li>Reporting progress to stakeholders</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        PM tools and software are essential for effective project management.  
        Master these platforms to boost productivity, transparency, and project success.
      </p>
    </div>
  );
}