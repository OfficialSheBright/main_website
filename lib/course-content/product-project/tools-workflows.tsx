export default function ToolsWorkflowsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools & Workflows</h2>
      <p className="text-gray-600">
        Modern product and project management relies on a suite of tools and well-defined workflows to drive collaboration, transparency, and efficiency.  
        Mastering these tools and workflows helps teams deliver value faster and with higher quality.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Tools & Workflows?</h3>
        <p className="text-blue-700">
          The right combination of tools and workflows streamlines communication, automates repetitive tasks, and ensures everyone is aligned on goals and progress.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Core Tools</h3>
      <ul>
        <li><strong>Jira:</strong> Agile project tracking, backlog management, sprint planning</li>
        <li><strong>Trello/Asana/ClickUp:</strong> Visual task boards for team collaboration</li>
        <li><strong>Notion/Confluence:</strong> Documentation, wikis, and knowledge sharing</li>
        <li><strong>Slack:</strong> Real-time team communication and integrations</li>
        <li><strong>Figma/Miro:</strong> Design, prototyping, and collaborative whiteboarding</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Typical Workflows</h3>
      <ul>
        <li>Backlog grooming and prioritization</li>
        <li>Sprint planning and daily standups</li>
        <li>Design and requirements documentation</li>
        <li>Development, code review, and QA cycles</li>
        <li>Retrospectives and continuous improvement</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Integrations & Automation</h3>
      <ul>
        <li>Connect tools (e.g., Jira + Slack, Figma + Notion) for seamless updates</li>
        <li>Automate notifications, status changes, and reporting</li>
        <li>Use APIs and webhooks to build custom workflows</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Automated workflow
1. Designer updates Figma file
2. Notion page auto-updates with new designs
3. Jira ticket status changes to "Ready for Dev"
4. Slack channel notifies the team
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Tools & Workflows</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Coordinating cross-functional teams</li>
          <li>Tracking progress and blockers in real time</li>
          <li>Centralizing documentation and knowledge</li>
          <li>Automating repetitive project management tasks</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Tools and workflows are the backbone of effective product and project management.  
        Master these to boost team productivity, transparency, and delivery speed.
      </p>
    </div>
  );
}