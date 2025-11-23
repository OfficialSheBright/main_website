export default function AvatarSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Avatar Systems</h2>
      <p className="text-gray-600">
        Avatar systems enable players to create, customize, and control their digital identities in games and virtual worlds.  
        These systems are essential for personalization, immersion, and social interaction in metaverse experiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Avatar Systems?</h3>
        <p className="text-blue-700">
          Avatars foster player expression, identity, and engagement, making games and virtual spaces more interactive and meaningful.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Customization Systems</h3>
      <ul>
        <li>Allow players to modify appearance, outfits, and accessories</li>
        <li>Support sliders, color pickers, and asset libraries</li>
        <li>Save and load avatar presets for reuse</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Motion Capture Basics</h3>
      <ul>
        <li>Capture real-world movement for realistic avatar animation</li>
        <li>Integrate mocap data from hardware or software solutions</li>
        <li>Apply motion data to skeletons and rigs in game engines</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Expression & Gesture Tracking</h3>
      <ul>
        <li>Track facial expressions and hand gestures for lifelike avatars</li>
        <li>Use webcam, sensors, or VR hardware for input</li>
        <li>Map tracked data to avatar animations and blend shapes</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to change avatar color
using UnityEngine;
public class AvatarCustomizer : MonoBehaviour {
    public Renderer avatarRenderer;
    public void SetColor(Color newColor) {
        avatarRenderer.material.color = newColor;
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Avatar Systems</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Metaverse and social platforms</li>
          <li>Multiplayer games and VR/AR experiences</li>
          <li>Virtual events and meetings</li>
          <li>Personalized storytelling and roleplay</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Avatar systems are key to immersive, personalized digital experiences.  
        Master these techniques to empower players and enrich virtual worlds.
      </p>
    </div>
  );
}