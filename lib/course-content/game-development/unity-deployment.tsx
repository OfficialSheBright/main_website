export default function UnityDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unity Deployment</h2>
      <p className="text-gray-600">
        Unity deployment covers building, packaging, and publishing games for PC, mobile, web, and consoles.  
        Mastering these workflows ensures your game reaches players on any platform with optimal performance.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Unity Deployment?</h3>
        <p className="text-blue-700">
          Efficient deployment lets you share your game with the world, test on real devices, and publish to stores and platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Build Settings</h3>
      <ul>
        <li>Configure target platform (Windows, Android, iOS, WebGL, etc.)</li>
        <li>Set resolution, graphics, and compression options</li>
        <li>Manage scenes and build order</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Platform-Specific Setup</h3>
      <ul>
        <li>Install platform modules (Android/iOS support, etc.)</li>
        <li>Set up signing keys and certificates for mobile</li>
        <li>Adjust input and graphics settings for each platform</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Testing & Optimization</h3>
      <ul>
        <li>Test builds on target devices and emulators</li>
        <li>Profile performance and fix platform-specific issues</li>
        <li>Optimize assets and code for smooth gameplay</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Publishing & Distribution</h3>
      <ul>
        <li>Prepare builds for Steam, Play Store, App Store, and WebGL</li>
        <li>Follow platform guidelines for submission</li>
        <li>Update and patch games post-release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to switch build target
using UnityEditor;
public class BuildSwitcher {
    [MenuItem("Build/SwitchToAndroid")]
    static void SwitchToAndroid() {
        EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Android, BuildTarget.Android);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unity Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cross-platform game publishing</li>
          <li>Mobile, desktop, and web releases</li>
          <li>Rapid prototyping and testing</li>
          <li>Live updates and patches</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unity deployment is essential for sharing your game with players everywhere.  
        Master these workflows to publish, update, and optimize games for any platform.
      </p>
    </div>
  );
}