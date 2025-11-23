export default function ProfessionalPipelineMayaContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Professional Pipeline (Maya)</h2>
      <p className="text-gray-600">
        The professional pipeline in Maya covers advanced workflows for retargeting, motion capture, and exporting game-ready assets.  
        Mastering these techniques is essential for delivering high-quality models and animations to game engines.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use a Professional Pipeline?</h3>
        <p className="text-blue-700">
          A professional pipeline ensures consistency, efficiency, and compatibility when creating assets for games and interactive media.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Retargeting</h3>
      <ul>
        <li>Transfer animations between different character rigs</li>
        <li>Use HumanIK and retargeting tools in Maya</li>
        <li>Adapt motion data for various character proportions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Motion Capture</h3>
      <ul>
        <li>Import and clean up mocap data for realistic animation</li>
        <li>Apply mocap to character rigs and adjust for accuracy</li>
        <li>Blend mocap with keyframed animation for flexibility</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Game-Ready Asset Export</h3>
      <ul>
        <li>Prepare models and animations for export (FBX, OBJ)</li>
        <li>Optimize geometry, textures, and rigs for game engines</li>
        <li>Test exported assets in Unity, Unreal, or other platforms</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Maya pipeline for game asset export
1. Retarget animation to game character rig
2. Clean up and optimize mocap data
3. Export model and animation as FBX
4. Import into game engine and test
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Professional Pipeline (Maya)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game character and animation production</li>
          <li>Film and cinematic asset creation</li>
          <li>VR/AR and interactive experiences</li>
          <li>Cross-platform asset workflows</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        A professional pipeline in Maya is essential for efficient, high-quality asset creation.  
        Master these workflows to deliver polished models and animations for any game or media project.
      </p>
    </div>
  );
}