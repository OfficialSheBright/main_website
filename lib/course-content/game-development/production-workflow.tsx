export default function ProductionWorkflowContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Production Workflow</h2>
      <p className="text-gray-600">
        Production workflow covers the processes and tools for managing game development, including agile methods, documentation, and asset management.  
        Mastering these workflows ensures efficient collaboration and successful project delivery.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Production Workflow?</h3>
        <p className="text-blue-700">
          A solid workflow helps teams stay organized, meet deadlines, and deliver high-quality games through clear communication and structured processes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Agile for Game Teams</h3>
      <ul>
        <li>Use agile methodologies (Scrum, Kanban) for iterative development</li>
        <li>Break work into sprints and tasks for better tracking</li>
        <li>Hold regular stand-ups and reviews to align the team</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Level Design Documentation</h3>
      <ul>
        <li>Create detailed documents for level layouts, objectives, and flow</li>
        <li>Use diagrams, maps, and storyboards to communicate ideas</li>
        <li>Update documentation as levels evolve during development</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Asset Management</h3>
      <ul>
        <li>Organize art, audio, and code assets in version control systems</li>
        <li>Use naming conventions and folder structures for clarity</li>
        <li>Track asset changes and dependencies for smooth integration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Asset folder structure
/Assets
  /Art
  /Audio
  /Scripts
  /Levels
  /Docs
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Production Workflow</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Team collaboration and project management</li>
          <li>Efficient level and asset creation</li>
          <li>Consistent documentation and communication</li>
          <li>Successful game releases</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Production workflow is essential for organized, effective game development.  
        Master these practices to deliver polished projects and work efficiently in teams.
      </p>
    </div>
  );
}