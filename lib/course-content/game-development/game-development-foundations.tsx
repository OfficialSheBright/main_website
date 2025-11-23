export default function GameDevelopmentFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Development Foundations</h2>
      <p className="text-gray-600">
        Game development foundations cover the essential concepts and tools needed to build games, including engines, assets, physics, and rendering.  
        Mastering these basics prepares you for creating both 2D and 3D games across platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Game Development Foundations?</h3>
        <p className="text-blue-700">
          Understanding the core building blocks of games helps you design, prototype, and develop projects efficiently and creatively.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Game Engines Overview (Unity, Unreal, Godot)</h3>
      <ul>
        <li>Compare popular engines for features, workflow, and platform support</li>
        <li>Set up projects and explore editor interfaces</li>
        <li>Import assets and manage scenes</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. 2D vs 3D</h3>
      <ul>
        <li>Understand differences in graphics, physics, and design</li>
        <li>Choose the right approach for your game concept</li>
        <li>Mix 2D and 3D elements for hybrid experiences</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scenes, Assets, Prefabs</h3>
      <ul>
        <li>Organize game content using scenes and asset folders</li>
        <li>Create reusable prefabs for objects and characters</li>
        <li>Manage asset pipelines for efficient development</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Physics Basics</h3>
      <ul>
        <li>Apply physics engines for movement, collisions, and interactions</li>
        <li>Configure rigidbodies, colliders, and forces</li>
        <li>Balance realism and gameplay needs</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Rendering Basics</h3>
      <ul>
        <li>Understand rendering pipelines and graphics settings</li>
        <li>Set up lighting, cameras, and post-processing effects</li>
        <li>Optimize visuals for performance and quality</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to add a Rigidbody for physics
using UnityEngine;
public class AddPhysics : MonoBehaviour {
    void Start() {
        gameObject.AddComponent<Rigidbody>();
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Development Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building 2D and 3D games</li>
          <li>Rapid prototyping and iteration</li>
          <li>Asset management and optimization</li>
          <li>Cross-platform game deployment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game development foundations are the starting point for every successful project.  
        Master these concepts to create, optimize, and launch games for any audience.
      </p>
    </div>
  );
}