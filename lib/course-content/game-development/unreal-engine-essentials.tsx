export default function UnrealEngineEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unreal Engine Essentials</h2>
      <p className="text-gray-600">
        Unreal Engine essentials cover the core tools and workflows for building games in Unreal, including level design, Blueprints, physics, and rendering.  
        Mastering these basics prepares you to create interactive, high-fidelity games efficiently.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Unreal?</h3>
        <p className="text-blue-700">
          Unreal Engine is a leading platform for AAA games, VR/AR, and cinematic experiences, offering powerful visual scripting and rendering capabilities.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Level Design</h3>
      <ul>
        <li>Organize actors, lights, and cameras in levels</li>
        <li>Use the World Outliner and Details panel for efficient editing</li>
        <li>Save and load levels for different gameplay scenarios</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Blueprints</h3>
      <ul>
        <li>Create gameplay logic with visual scripting</li>
        <li>Design reusable components and event-driven systems</li>
        <li>Integrate Blueprints with C++ for advanced workflows</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Physics & Collisions</h3>
      <ul>
        <li>Add physics bodies and collision components for movement and interaction</li>
        <li>Configure physics settings for realism or arcade gameplay</li>
        <li>Detect overlaps and trigger events</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Rendering Basics</h3>
      <ul>
        <li>Set up lighting, cameras, and post-processing effects</li>
        <li>Use Unreal’s rendering pipeline for high-quality visuals</li>
        <li>Optimize graphics for performance and style</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unreal Blueprint pseudo-code for moving an actor
Event Tick
  Add Movement Input (Direction, Scale)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unreal Engine Essentials</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>3D and cinematic game development</li>
          <li>Rapid prototyping and iteration</li>
          <li>VR/AR and cross-platform projects</li>
          <li>Interactive media and simulations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unreal Engine essentials are the foundation for building games and interactive experiences.  
        Master these tools to create, test, and publish projects for any platform.
      </p>
    </div>
  );
}