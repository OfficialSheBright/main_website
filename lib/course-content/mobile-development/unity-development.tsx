export default function UnityDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unity Development (Mobile)</h2>
      <p className="text-gray-600">
        Unity development for mobile covers building games and interactive apps using the Unity engine, C#, and platform-specific optimizations.  
        Mastering Unity enables you to create cross-platform experiences for Android and iOS with a single codebase.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Unity for Mobile?</h3>
        <p className="text-blue-700">
          Unity offers a powerful editor, asset pipeline, and cross-platform deployment, making it ideal for mobile games and AR/VR apps.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unity Basics</h3>
      <ul>
        <li>Use the Unity Editor for scene design and asset management</li>
        <li>Write scripts in C# to control game logic and interactions</li>
        <li>Organize projects with prefabs, scenes, and components</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mobile Optimization</h3>
      <ul>
        <li>Optimize assets for performance and memory usage</li>
        <li>Profile and reduce draw calls, overdraw, and battery drain</li>
        <li>Test on real devices for smooth gameplay</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Input & Device Integration</h3>
      <ul>
        <li>Handle touch, accelerometer, and gyroscope input</li>
        <li>Integrate with device features (camera, GPS, notifications)</li>
        <li>Support multiple screen sizes and orientations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Building & Deployment</h3>
      <ul>
        <li>Configure build settings for Android and iOS</li>
        <li>Sign and package apps for app stores</li>
        <li>Use Unity Cloud Build for CI/CD</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Unity C# script for touch input
using UnityEngine;
public class TouchMove : MonoBehaviour {
  void Update() {
    if (Input.touchCount > 0) {
      Touch touch = Input.GetTouch(0);
      Vector3 pos = Camera.main.ScreenToWorldPoint(touch.position);
      transform.position = new Vector3(pos.x, pos.y, 0);
    }
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unity Development (Mobile)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>2D and 3D mobile games</li>
          <li>Augmented reality (AR) and virtual reality (VR) apps</li>
          <li>Interactive learning and simulation apps</li>
          <li>Cross-platform entertainment experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unity development is a powerful way to build mobile games and interactive apps.  
        Master these concepts to deliver engaging, cross-platform experiences for any audience.
      </p>
    </div>
  );
}