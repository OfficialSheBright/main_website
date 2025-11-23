export default function CollaborationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Collaboration</h2>
      <p className="text-gray-600">
        Collaboration is essential in design and product teams, enabling creative solutions and efficient workflows.  
        Effective collaboration bridges the gap between designers, product managers, engineers, and other stakeholders.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Collaboration?</h3>
        <p className="text-blue-700">
          Collaboration fosters innovation, improves communication, and ensures that design solutions meet business and user needs.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Working with Product Managers</h3>
      <ul>
        <li>Align design goals with product strategy and business objectives</li>
        <li>Participate in planning, prioritization, and roadmap discussions</li>
        <li>Communicate design rationale and user insights</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Engineers & Cross-Functional Teams</h3>
      <ul>
        <li>Collaborate on technical feasibility and implementation</li>
        <li>Provide clear design specs and assets for development</li>
        <li>Engage in feedback cycles and iterative improvements</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Agile Design Workflows</h3>
      <ul>
        <li>Work in sprints with regular stand-ups and reviews</li>
        <li>Use tools like Figma, Jira, and Slack for communication and tracking</li>
        <li>Adapt quickly to changes and incorporate feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Figma developer handoff workflow
# 1. Organize design files and components
# 2. Add specs, measurements, and notes
# 3. Share Figma link with engineers for implementation
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Collaboration</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Efficient product development</li>
          <li>Improved design quality and usability</li>
          <li>Faster feedback and iteration cycles</li>
          <li>Stronger team relationships and communication</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Collaboration is key to successful design projects.  
        Master these practices to work effectively with diverse teams and deliver impactful solutions.
      </p>
    </div>
  );
}