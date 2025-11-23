export default function ThreeDGameDevelopmentUnityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">3D Game Development (Unity)</h2>
      <p className="text-gray-600">
        3D game development in Unity covers the creation of immersive worlds, characters, and gameplay using advanced graphics and physics.  
        Mastering these skills enables you to build action, adventure, and simulation games for any platform.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why 3D Game Development?</h3>
        <p className="text-blue-700">
          3D games offer rich environments, dynamic interactions, and realistic experiences, expanding creative possibilities for developers.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. 3D Models & Materials</h3>
      <ul>
        <li>Import and use 3D models from Blender, Maya, or asset stores</li>
        <li>Apply materials and textures for realistic surfaces</li>
        <li>Optimize assets for performance and quality</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Rigidbodies & Colliders</h3>
      <ul>
        <li>Enable physics-based movement and interactions</li>
        <li>Configure colliders for accurate collision detection</li>
        <li>Balance realism and gameplay responsiveness</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Navigation Mesh & AI</h3>
      <ul>
        <li>Set up navigation meshes for pathfinding</li>
        <li>Implement AI agents that move and interact in 3D space</li>
        <li>Design enemy, NPC, and companion behaviors</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Character Controllers</h3>
      <ul>
        <li>Build player and NPC controllers for movement and actions</li>
        <li>Handle input, jumping, and camera control</li>
        <li>Integrate animations for smooth transitions</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Cinemachine Camera Systems</h3>
      <ul>
        <li>Use Cinemachine for dynamic camera movement and tracking</li>
        <li>Create cutscenes, follow cams, and custom perspectives</li>
        <li>Blend camera shots for cinematic effects</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script for basic 3D character movement
using UnityEngine;
public class CharacterMovement : MonoBehaviour {
    public float speed = 6f;
    void Update() {
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        Vector3 move = new Vector3(h, 0, v);
        transform.Translate(move * speed * Time.deltaTime, Space.World);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of 3D Game Development (Unity)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Action and adventure games</li>
          <li>Simulation and exploration projects</li>
          <li>VR/AR experiences</li>
          <li>Educational and training simulations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        3D game development in Unity unlocks advanced gameplay and visual experiences.  
        Master these techniques to create immersive, interactive worlds for any audience.
      </p>
    </div>
  );
}