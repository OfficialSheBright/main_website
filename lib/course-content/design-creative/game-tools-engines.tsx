export default function GameToolsEnginesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Tools & Engines</h2>
      <p className="text-gray-600">
        Game tools and engines are essential for building interactive experiences, from simple prototypes to complex games.  
        Mastering these platforms enables rapid development, testing, and deployment across devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Game Engines?</h3>
        <p className="text-blue-700">
          Game engines provide powerful features for graphics, physics, UI, and asset management, streamlining the game development process.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unity</h3>
      <ul>
        <li>Popular engine for 2D and 3D games</li>
        <li>Supports C# scripting, asset store, and cross-platform deployment</li>
        <li>Ideal for mobile, desktop, and AR/VR projects</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Unreal Engine</h3>
      <ul>
        <li>High-fidelity graphics and advanced physics</li>
        <li>Blueprint visual scripting and C++ support</li>
        <li>Used for AAA games, simulations, and cinematic experiences</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Godot (Optional)</h3>
      <ul>
        <li>Open-source, lightweight engine for 2D/3D games</li>
        <li>GDScript (Python-like), C#, and visual scripting</li>
        <li>Flexible scene system and active community</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Figma for Game UI</h3>
      <ul>
        <li>Design and prototype game interfaces and HUDs</li>
        <li>Collaborate with developers for asset export</li>
        <li>Test layouts and interactions before engine integration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script for player movement
using UnityEngine;
public class PlayerController : MonoBehaviour {
    public float speed = 5f;
    void Update() {
        float move = Input.GetAxis("Horizontal");
        transform.Translate(Vector3.right * move * speed * Time.deltaTime);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Tools & Engines</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game development for mobile, desktop, and consoles</li>
          <li>Prototyping and testing gameplay mechanics</li>
          <li>UI/UX design for interactive experiences</li>
          <li>AR/VR and simulation projects</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game tools and engines are the backbone of interactive design.  
        Master these platforms to create, test, and deploy engaging games and experiences.
      </p>
    </div>
  );
}