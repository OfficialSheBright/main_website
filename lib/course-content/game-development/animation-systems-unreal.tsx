export default function AnimationSystemsUnrealContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Animation Systems (Unreal)</h2>
      <p className="text-gray-600">
        Animation systems in Unreal Engine cover advanced character animation, blending, and control rigs for realistic and dynamic movement.  
        These tools are essential for creating lifelike characters and cinematic experiences in games.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Unreal Animation Systems?</h3>
        <p className="text-blue-700">
          Unreal’s animation tools enable complex, responsive character motion and seamless transitions, elevating gameplay and storytelling.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Animation Blueprint</h3>
      <ul>
        <li>Visual scripting for character animation logic</li>
        <li>Manage states, transitions, and blend spaces</li>
        <li>Integrate input and gameplay events for dynamic animation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Blend Spaces</h3>
      <ul>
        <li>Blend multiple animations based on parameters (speed, direction)</li>
        <li>Create smooth transitions between movement states</li>
        <li>Visualize and edit blends in the Unreal Editor</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Control Rigs</h3>
      <ul>
        <li>Procedural animation and rigging inside Unreal</li>
        <li>Customize bone transformations and constraints</li>
        <li>Enable real-time animation editing and retargeting</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Skeletal Mesh Animation</h3>
      <ul>
        <li>Import and animate skeletal meshes from Blender, Maya, etc.</li>
        <li>Apply keyframe and procedural animations</li>
        <li>Optimize mesh and animation assets for performance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Setting animation state in Unreal (Blueprint pseudo-code)
If Speed > 0
    Set State to "Run"
Else
    Set State to "Idle"
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Animation Systems (Unreal)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Character movement and combat animation</li>
          <li>Cinematic cutscenes and storytelling</li>
          <li>Procedural and interactive animation</li>
          <li>VR/AR and simulation projects</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Animation systems in Unreal Engine are essential for dynamic, realistic character motion.  
        Master these tools to create engaging gameplay and cinematic experiences.
      </p>
    </div>
  );
}