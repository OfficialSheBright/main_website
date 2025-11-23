export default function AiBehaviorTreesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">AI & Behavior Trees</h2>
      <p className="text-gray-600">
        AI and behavior trees are essential for creating intelligent, responsive characters in games.  
        Mastering these systems enables you to design complex NPC behaviors, enemy logic, and interactive worlds.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Behavior Trees?</h3>
        <p className="text-blue-700">
          Behavior trees provide a modular, scalable way to define AI decision-making, making it easier to create and maintain advanced character logic.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. NavMesh</h3>
      <ul>
        <li>Set up navigation meshes for pathfinding</li>
        <li>Enable AI agents to move intelligently in 3D environments</li>
        <li>Handle obstacles and dynamic changes in the world</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Behavior Tree Nodes</h3>
      <ul>
        <li>Design tasks, selectors, and sequences for AI logic</li>
        <li>Combine nodes to create complex decision flows</li>
        <li>Debug and visualize behavior trees in Unreal Engine</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. AI Perception System</h3>
      <ul>
        <li>Implement sight, hearing, and other senses for NPCs</li>
        <li>React to player actions and environmental changes</li>
        <li>Use perception events to trigger behavior changes</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple behavior tree pseudo-code
Selector
├─ Sequence: Patrol
│    ├─ Find Patrol Point
│    └─ Move To Point
└─ Sequence: Chase Player
     ├─ Detect Player
     └─ Move To Player
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of AI & Behavior Trees</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enemy and NPC logic in games</li>
          <li>Companion and ally behaviors</li>
          <li>Simulation and training environments</li>
          <li>Interactive storytelling and dynamic worlds</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        AI and behavior trees are key to creating believable, interactive game worlds.  
        Master these systems to design intelligent, engaging characters for any project.
      </p>
    </div>
  );
}