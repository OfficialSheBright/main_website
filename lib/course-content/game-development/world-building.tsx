export default function WorldBuildingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">World Building</h2>
      <p className="text-gray-600">
        World building covers the creation of immersive environments, level layouts, and interactive spaces for games and virtual worlds.  
        Mastering these techniques helps you design memorable, engaging worlds for any genre or platform.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why World Building?</h3>
        <p className="text-blue-700">
          Well-designed worlds captivate players, support gameplay, and enhance storytelling through atmosphere and detail.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Level Design Principles</h3>
      <ul>
        <li>Plan layouts for flow, challenge, and exploration</li>
        <li>Use landmarks, paths, and visual cues for navigation</li>
        <li>Balance open spaces and confined areas for pacing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Environment Art</h3>
      <ul>
        <li>Create terrain, foliage, buildings, and props</li>
        <li>Use modular assets for efficient world creation</li>
        <li>Blend art style with gameplay needs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Interactive Elements</h3>
      <ul>
        <li>Add doors, switches, puzzles, and dynamic objects</li>
        <li>Integrate triggers and events for player interaction</li>
        <li>Test and iterate for fun and accessibility</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Lighting & Atmosphere</h3>
      <ul>
        <li>Set mood with lighting, color, and effects</li>
        <li>Use fog, weather, and sound for immersion</li>
        <li>Optimize for performance and clarity</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: World building workflow
1. Block out level layout with simple shapes
2. Add environment art and props
3. Place interactive elements and triggers
4. Set up lighting and atmosphere
5. Playtest and refine for flow and fun
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of World Building</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game levels and open worlds</li>
          <li>Virtual reality and metaverse spaces</li>
          <li>Interactive storytelling environments</li>
          <li>Simulation and training scenarios</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        World building is essential for immersive, memorable games and experiences.  
        Master these techniques to create engaging environments for any project.
      </p>
    </div>
  );
}