export default function UnrealDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unreal Deployment</h2>
      <p className="text-gray-600">
        Unreal deployment covers packaging, building, and publishing games for PC, console, mobile, and VR platforms.  
        Mastering these workflows ensures your game runs smoothly and reaches players everywhere.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Unreal Deployment?</h3>
        <p className="text-blue-700">
          Efficient deployment lets you test, optimize, and release your game on multiple platforms, meeting industry standards and player expectations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Packaging Projects</h3>
      <ul>
        <li>Configure project settings for target platforms (Windows, Android, iOS, consoles)</li>
        <li>Set up maps, assets, and build configurations</li>
        <li>Use Unreal’s packaging tools to create distributable builds</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Platform-Specific Setup</h3>
      <ul>
        <li>Install SDKs and platform tools (Android Studio, Xcode, console dev kits)</li>
        <li>Configure input, graphics, and performance settings for each platform</li>
        <li>Set up signing and certificates for mobile and console deployment</li>
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
        <li>Prepare builds for Steam, PlayStation, Xbox, App Store, and more</li>
        <li>Follow platform guidelines for submission and compliance</li>
        <li>Update and patch games post-release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unreal Engine command to package a project for Windows
RunUAT.bat BuildCookRun -project="MyProject.uproject" -platform=Win64 -clientconfig=Shipping -cook -allmaps -build -stage -package
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unreal Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cross-platform game publishing</li>
          <li>Console, mobile, and VR releases</li>
          <li>Rapid prototyping and testing</li>
          <li>Live updates and patches</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unreal deployment is essential for sharing your game with players everywhere.  
        Master these workflows to publish, update, and optimize games for any platform.
      </p>
    </div>
  );
}