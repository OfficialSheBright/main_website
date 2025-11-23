export default function VrArDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">VR/AR Development</h2>
      <p className="text-gray-600">
        VR/AR development covers the tools, workflows, and design principles for creating immersive virtual and augmented reality experiences.  
        Mastering these skills enables you to build interactive worlds for games, education, and enterprise.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why VR/AR?</h3>
        <p className="text-blue-700">
          VR and AR technologies offer new ways to engage users, blending digital content with real-world interaction for deeper immersion.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. VR/AR Platforms & SDKs</h3>
      <ul>
        <li>Develop for Oculus, SteamVR, ARKit, ARCore, and more</li>
        <li>Integrate platform-specific SDKs for device support</li>
        <li>Test and deploy to headsets and mobile devices</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Interaction Design</h3>
      <ul>
        <li>Design intuitive controls for hand tracking, controllers, and gestures</li>
        <li>Implement gaze, touch, and spatial input</li>
        <li>Focus on comfort, accessibility, and user experience</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Spatial Audio & Feedback</h3>
      <ul>
        <li>Use spatial audio for realistic sound positioning</li>
        <li>Provide haptic and visual feedback for interactions</li>
        <li>Enhance immersion with environmental effects</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Performance Optimization</h3>
      <ul>
        <li>Optimize assets and code for low-latency, high frame rates</li>
        <li>Use occlusion, culling, and LOD for efficient rendering</li>
        <li>Test on target devices for smooth experience</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script for VR controller input
using UnityEngine;
using UnityEngine.XR;
public class VRGrab : MonoBehaviour {
    void Update() {
        if (Input.GetButtonDown("Fire1")) {
            // Grab or interact with object
        }
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of VR/AR Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Immersive games and simulations</li>
          <li>Education and training experiences</li>
          <li>Enterprise and industrial applications</li>
          <li>Virtual events and social platforms</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        VR/AR development is essential for the future of interactive media.  
        Master these tools and workflows to create engaging, immersive experiences for any audience.
      </p>
    </div>
  );
}