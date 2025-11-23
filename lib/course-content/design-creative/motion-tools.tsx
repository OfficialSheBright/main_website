export default function MotionToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Motion Tools</h2>
      <p className="text-gray-600">
        Motion design tools empower creators to animate, prototype, and render dynamic visuals for digital products and media.  
        Mastering these platforms is essential for producing professional motion graphics, UI animations, and 3D sequences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Motion Tools?</h3>
        <p className="text-blue-700">
          These tools offer advanced features for animation, compositing, and rendering, enabling creative expression and technical precision.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Adobe After Effects</h3>
      <ul>
        <li>Industry-standard for motion graphics and visual effects</li>
        <li>Animate UI elements, explainer videos, and cinematic sequences</li>
        <li>Integrate with Illustrator, Photoshop, and Lottie for workflow</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Lottie Animations</h3>
      <ul>
        <li>Export lightweight, scalable animations for web and mobile</li>
        <li>Convert After Effects animations to JSON format</li>
        <li>Integrate animated icons, loaders, and microinteractions in apps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Blender (3D Motion)</h3>
      <ul>
        <li>Open-source tool for 3D modeling, animation, and rendering</li>
        <li>Create complex scenes, character rigs, and camera movements</li>
        <li>Export animations for games, videos, and AR/VR</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cinema4D (Optional)</h3>
      <ul>
        <li>Professional 3D motion graphics and rendering software</li>
        <li>Used for broadcast, advertising, and advanced visual effects</li>
        <li>Integrates with After Effects for compositing</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting a Lottie animation from After Effects
# 1. Install Bodymovin plugin
# 2. Export animation as JSON file
# 3. Integrate with web or mobile app using Lottie libraries
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Motion Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX animation and microinteractions</li>
          <li>Explainer videos and social media graphics</li>
          <li>3D motion graphics and visual effects</li>
          <li>Game and AR/VR animation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Motion tools are essential for dynamic, engaging digital experiences.  
        Master these platforms to create professional animations and motion graphics for any medium.
      </p>
    </div>
  );
}