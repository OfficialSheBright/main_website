export default function BlenderBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Blender Basics</h2>
      <p className="text-gray-600">
        Blender basics cover the essential skills for navigating the interface, editing meshes, using modifiers, and starting sculpting.  
        Mastering these fundamentals is the first step to creating 3D models and assets for games and animation.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Blender?</h3>
        <p className="text-blue-700">
          Blender is a free, open-source tool for 3D modeling, animation, and rendering, widely used in game development and digital art.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. UI & Navigation</h3>
      <ul>
        <li>Understand Blender’s workspace, panels, and shortcuts</li>
        <li>Navigate 3D viewports with mouse and keyboard</li>
        <li>Customize layouts for efficient workflow</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mesh Editing</h3>
      <ul>
        <li>Create and modify basic shapes (cube, sphere, cylinder)</li>
        <li>Edit vertices, edges, and faces for custom geometry</li>
        <li>Use extrude, loop cut, and transform tools</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Modifiers</h3>
      <ul>
        <li>Apply modifiers like Subdivision Surface, Mirror, and Array</li>
        <li>Non-destructive editing for flexible modeling</li>
        <li>Stack and configure modifiers for complex shapes</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Sculpting Basics</h3>
      <ul>
        <li>Switch to sculpt mode for organic modeling</li>
        <li>Use brushes to add detail and shape</li>
        <li>Adjust mesh resolution with dynamic topology</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Blender workflow for basic mesh editing
1. Add a cube (Shift + A > Mesh > Cube)
2. Enter Edit Mode (Tab)
3. Select faces and use Extrude (E) to create new geometry
4. Apply Subdivision Surface modifier for smoothness
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Blender Basics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game asset creation</li>
          <li>Animation and visual effects</li>
          <li>3D printing and prototyping</li>
          <li>Digital art and concept modeling</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Blender basics are the foundation for 3D modeling and animation.  
        Master these skills to start creating your own digital worlds and assets.
      </p>
    </div>
  );
}