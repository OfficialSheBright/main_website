export default function UnrealEngineOptionalContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Unreal Engine (Optional)</h2>
      <p className="text-gray-600">
        Unreal Engine is a powerful game engine for building high-quality 3D and 2D games on mobile and other platforms.  
        Learning Unreal Engine gives you access to advanced graphics, physics, and cross-platform deployment tools.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Unreal Engine?</h3>
        <p className="text-blue-700">
          Unreal Engine offers industry-leading rendering, a visual scripting system (Blueprints), and robust support for mobile game development.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unreal Engine Basics</h3>
      <ul>
        <li>Use the Unreal Editor for scene design and asset management</li>
        <li>Write game logic with Blueprints or C++</li>
        <li>Organize projects with levels, actors, and components</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mobile Optimization</h3>
      <ul>
        <li>Optimize assets and shaders for mobile performance</li>
        <li>Profile and reduce draw calls, overdraw, and battery usage</li>
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
        <li>Use Unreal’s deployment tools for testing and release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Blueprint logic (pseudocode)
// On Touch Event
-> Move Character to Touch Location
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Unreal Engine (Mobile)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>3D and 2D mobile games</li>
          <li>Augmented reality (AR) and virtual reality (VR) apps</li>
          <li>Interactive simulations and visualizations</li>
          <li>Cross-platform entertainment experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Unreal Engine is a top choice for advanced mobile game development.  
        Master these concepts to deliver visually stunning, high-performance games for any audience.
      </p>
    </div>
  );
}