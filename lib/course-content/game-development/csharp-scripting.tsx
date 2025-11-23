export default function CsharpScriptingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">C# Scripting (Unity)</h2>
      <p className="text-gray-600">
        C# scripting in Unity enables you to control game logic, interactions, and behaviors.  
        Mastering these concepts is essential for building dynamic, interactive games and prototypes.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why C# in Unity?</h3>
        <p className="text-blue-700">
          C# is Unity’s primary scripting language, offering flexibility, performance, and access to Unity’s powerful API.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. MonoBehaviour Lifecycle</h3>
      <ul>
        <li>Understand Start, Update, FixedUpdate, and other Unity events</li>
        <li>Control object initialization, frame updates, and physics</li>
        <li>Manage game state and interactions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Input Handling</h3>
      <ul>
        <li>Capture keyboard, mouse, and touch input</li>
        <li>Map input to player actions and UI controls</li>
        <li>Support custom input schemes and devices</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Physics & Collisions</h3>
      <ul>
        <li>Use Rigidbody and Collider components for movement and interaction</li>
        <li>Detect collisions and trigger events</li>
        <li>Balance physics realism and gameplay</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. ScriptableObjects</h3>
      <ul>
        <li>Create reusable data containers for game settings and assets</li>
        <li>Organize game logic and configuration</li>
        <li>Improve workflow and scalability</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Animation Scripting</h3>
      <ul>
        <li>Control animations via code and Animator parameters</li>
        <li>Trigger transitions and blend states</li>
        <li>Integrate animation events with gameplay</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script for player movement and animation
using UnityEngine;
public class PlayerController : MonoBehaviour {
    public float speed = 5f;
    public Animator animator;
    void Update() {
        float move = Input.GetAxis("Horizontal");
        transform.Translate(Vector2.right * move * speed * Time.deltaTime);
        animator.SetFloat("Speed", Mathf.Abs(move));
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of C# Scripting (Unity)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Player and enemy behaviors</li>
          <li>UI and input systems</li>
          <li>Physics and animation control</li>
          <li>Game logic and state management</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        C# scripting is the backbone of Unity game development.  
        Master these techniques to create interactive, polished games for any platform.
      </p>
    </div>
  );
}