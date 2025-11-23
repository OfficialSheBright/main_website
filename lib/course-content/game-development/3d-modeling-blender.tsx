export default function ThreeDModelingBlenderContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">3D Modeling (Blender)</h2>
      <p className="text-gray-600">
        3D modeling in Blender covers the creation of hard-surface and organic models, mastering topology, and preparing assets for games.  
        These skills are essential for building characters, environments, and props for interactive projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Blender for 3D Modeling?</h3>
        <p className="text-blue-700">
          Blender is a powerful, open-source tool for modeling, sculpting, and exporting game-ready assets for any engine.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Hard-Surface Modeling</h3>
      <ul>
        <li>Create mechanical objects, vehicles, and architecture</li>
        <li>Use modifiers for precision and efficiency</li>
        <li>Apply edge loops and bevels for clean geometry</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Organic Modeling</h3>
      <ul>
        <li>Model characters, creatures, and natural forms</li>
        <li>Use sculpting tools for smooth, detailed shapes</li>
        <li>Refine anatomy and proportions for realism</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Topology & Retopology</h3>
      <ul>
        <li>Maintain clean edge flow for animation and deformation</li>
        <li>Retopologize high-poly sculpts for game performance</li>
        <li>Use Blender’s retopology tools for efficient workflow</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. UV Unwrapping</h3>
      <ul>
        <li>Unwrap models for texturing and painting</li>
        <li>Organize UV islands for minimal distortion</li>
        <li>Export UV layouts for use in Substance Painter or Photoshop</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Blender workflow for game asset modeling
1. Block out the shape with basic meshes
2. Refine details using modifiers and sculpting
3. Retopologize for clean, low-poly geometry
4. UV unwrap and export for texturing
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of 3D Modeling (Blender)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game characters and props</li>
          <li>Environment and level assets</li>
          <li>Animation and cinematic projects</li>
          <li>VR/AR and interactive experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        3D modeling in Blender is essential for creating high-quality assets for games and media.  
        Master these techniques to build detailed, optimized models for any project.
      </p>
    </div>
  );
}