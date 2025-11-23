export default function TwoDGameDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">2D Game Development</h2>
      <p className="text-gray-600">
        2D game development covers the creation of games using sprites, tilemaps, and simple physics.  
        Mastering these fundamentals enables you to build platformers, puzzles, and arcade-style games for any platform.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why 2D Game Development?</h3>
        <p className="text-blue-700">
          2D games are accessible, fast to prototype, and ideal for learning core game design and programming concepts.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Sprite Animation</h3>
      <ul>
        <li>Create and animate 2D characters and objects</li>
        <li>Use sprite sheets and frame-based animation</li>
        <li>Trigger animations based on player input and events</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Tilemaps</h3>
      <ul>
        <li>Design levels using reusable tiles</li>
        <li>Implement collision and interaction with tilemaps</li>
        <li>Optimize performance for large maps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. 2D Physics</h3>
      <ul>
        <li>Apply gravity, friction, and collision detection</li>
        <li>Use physics engines for realistic movement</li>
        <li>Balance gameplay with physics parameters</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Parallax Scrolling</h3>
      <ul>
        <li>Create depth by moving background layers at different speeds</li>
        <li>Enhance visual appeal and immersion</li>
        <li>Implement parallax in Unity or other engines</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. UI Overlays for 2D Games</h3>
      <ul>
        <li>Design score, health, and inventory displays</li>
        <li>Use canvas systems for responsive UI</li>
        <li>Animate UI elements for feedback and polish</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script for simple 2D player movement
using UnityEngine;
public class PlayerController : MonoBehaviour {
    public float speed = 5f;
    void Update() {
        float move = Input.GetAxis("Horizontal");
        transform.Translate(Vector2.right * move * speed * Time.deltaTime);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of 2D Game Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Platformers and puzzle games</li>
          <li>Mobile and web games</li>
          <li>Arcade and retro-style projects</li>
          <li>Rapid prototyping and learning</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        2D game development is the foundation of interactive entertainment.  
        Master these techniques to create fun, engaging games for any audience.
      </p>
    </div>
  );
}