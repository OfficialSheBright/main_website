export default function BaInAgileContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Business Analysis (BA) in Agile</h2>
      <p className="text-gray-600">
        Business analysis in Agile focuses on continuous collaboration, adaptive planning, and delivering value through iterative development.  
        BAs play a key role in refining requirements, supporting the team, and ensuring stakeholder needs are met throughout the Agile lifecycle.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why BA in Agile?</h3>
        <p className="text-blue-700">
          Agile BAs help teams adapt quickly to change, clarify requirements, and maintain a clear product vision—enabling faster, more effective delivery.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Agile Requirement Cycles</h3>
      <ul>
        <li>Continuous requirements elicitation and refinement</li>
        <li>Just-in-time documentation for user stories and acceptance criteria</li>
        <li>Close collaboration with Product Owner and development team</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Story Mapping</h3>
      <ul>
        <li>Visualize user journeys and workflows</li>
        <li>Break down features into user stories and tasks</li>
        <li>Prioritize backlog items based on value and dependencies</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Backlog Refinement</h3>
      <ul>
        <li>Clarify requirements and acceptance criteria</li>
        <li>Split large stories (epics) into smaller, actionable items</li>
        <li>Ensure backlog is ready for upcoming sprints</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: User story with acceptance criteria
As a registered user,
I want to reset my password,
So that I can regain access if I forget it.

Acceptance Criteria:
- User receives a password reset email
- Link expires after 24 hours
- User can set a new password
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of BA in Agile</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Continuous backlog refinement and prioritization</li>
          <li>Supporting sprint planning and reviews</li>
          <li>Facilitating communication between stakeholders and the team</li>
          <li>Ensuring requirements are clear, testable, and deliver value</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Business analysts in Agile environments drive clarity, adaptability, and value delivery.  
        Master these practices to help your team succeed in fast-paced, iterative projects.
      </p>
    </div>
  );
}