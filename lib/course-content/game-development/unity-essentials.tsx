export default function UnityEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unity Essentials</h2>
      <p className="text-gray-600">
        Unity essentials cover the core tools and workflows for building games in Unity, including scene setup, prefabs, physics, and scripting.  
        Mastering these basics prepares you to create interactive, cross-platform games efficiently.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Unity?</h3>
        <p className="text-blue-700">
          Unity is a leading game engine for 2D, 3D, AR, and VR projects, offering a user-friendly editor and powerful scripting capabilities.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Scene Setup</h3>
      <ul>
        <li>Organize game objects, cameras, and lights in scenes</li>
        <li>Use the hierarchy and inspector for efficient editing</li>
        <li>Save and load scenes for different levels or menus</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Prefabs</h3>
      <ul>
        <li>Create reusable game object templates</li>
        <li>Instantiate prefabs for enemies, pickups, and UI elements</li>
        <li>Update prefab properties for rapid iteration</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Physics & Colliders</h3>
      <ul>
        <li>Add Rigidbody and Collider components for movement and interaction</li>
        <li>Configure physics settings for realistic or arcade gameplay</li>
        <li>Detect collisions and trigger events</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Scripting Basics</h3>
      <ul>
        <li>Write C# scripts to control game logic and behaviors</li>
        <li>Use MonoBehaviour lifecycle methods (Start, Update, etc.)</li>
        <li>Access Unity’s API for input, animation, and audio</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to move a GameObject
using UnityEngine;
public class Mover : MonoBehaviour {
    public float speed = 5f;
    void Update() {
        transform.Translate(Vector3.forward * speed * Time.deltaTime);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unity Essentials</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>2D and 3D game development</li>
          <li>Rapid prototyping and iteration</li>
          <li>AR/VR and cross-platform projects</li>
          <li>Interactive media and simulations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unity essentials are the foundation for building games and interactive experiences.  
        Master these tools to create, test, and publish projects for any platform.
      </p>
    </div>
  );
}