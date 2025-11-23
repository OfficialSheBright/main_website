export default function AnimationBlenderContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Animation (Blender)</h2>
      <p className="text-gray-600">
        Animation in Blender covers keyframing, rigging, weight painting, and camera animation for game-ready assets.  
        These skills are essential for bringing characters, objects, and scenes to life in interactive projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Animate in Blender?</h3>
        <p className="text-blue-700">
          Blender offers powerful tools for creating smooth, expressive animations and exporting them for use in game engines.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Keyframing</h3>
      <ul>
        <li>Animate objects and characters by setting keyframes for position, rotation, and scale</li>
        <li>Use the timeline and graph editor for precise control</li>
        <li>Create looping and complex motion sequences</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Rigging</h3>
      <ul>
        <li>Build skeletons (armatures) for character animation</li>
        <li>Set up bones and constraints for realistic movement</li>
        <li>Prepare rigs for export to Unity, Unreal, or other engines</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Weight Painting</h3>
      <ul>
        <li>Assign mesh deformation to bones for smooth animation</li>
        <li>Refine weights for natural bending and stretching</li>
        <li>Fix common issues like unwanted mesh distortion</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Inverse Kinematics</h3>
      <ul>
        <li>Use IK solvers for realistic limb movement</li>
        <li>Animate walking, running, and complex poses easily</li>
        <li>Combine FK and IK for flexible animation control</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Camera Animation</h3>
      <ul>
        <li>Animate camera movement for cutscenes and gameplay</li>
        <li>Use paths and constraints for smooth transitions</li>
        <li>Export camera animations for cinematic effects</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Blender animation workflow
1. Rig character with armature
2. Set keyframes for poses and movement
3. Refine animation in graph editor
4. Export as FBX for game engine use
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Animation (Blender)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game character and object animation</li>
          <li>Cinematic cutscenes and trailers</li>
          <li>Interactive storytelling</li>
          <li>VR/AR and simulation projects</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Animation in Blender is essential for dynamic, engaging game assets.  
        Master these techniques to bring your characters and worlds to life.
      </p>
    </div>
  );
}