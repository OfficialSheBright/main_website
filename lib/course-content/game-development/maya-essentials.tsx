export default function MayaEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Maya Essentials</h2>
      <p className="text-gray-600">
        Maya essentials cover the core tools for modeling, animation, and FX in Autodesk Maya.  
        Mastering these skills prepares you to create professional assets for games, film, and interactive experiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Maya?</h3>
        <p className="text-blue-700">
          Maya is an industry-standard tool for 3D modeling, animation, and visual effects, widely used in AAA game and film production.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Modeling Tools</h3>
      <ul>
        <li>Create and edit polygon meshes for characters, props, and environments</li>
        <li>Use extrusion, bevel, and edge loop tools for detailed geometry</li>
        <li>Organize models with groups and layers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. NURBS Modeling</h3>
      <ul>
        <li>Model smooth surfaces using NURBS curves and surfaces</li>
        <li>Convert between NURBS and polygons for flexibility</li>
        <li>Use NURBS for automotive, product, and organic shapes</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Animation & Rigging</h3>
      <ul>
        <li>Animate objects and characters with keyframes and motion paths</li>
        <li>Build skeletons and rigs for character animation</li>
        <li>Apply constraints and controllers for advanced movement</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. FX & Dynamics (Fluids, Cloth, Particles)</h3>
      <ul>
        <li>Simulate realistic effects like fluids, cloth, and particles</li>
        <li>Use Maya’s dynamics systems for interactive and cinematic effects</li>
        <li>Export FX for use in game engines or film pipelines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Maya modeling workflow
1. Create a polygon primitive (cube, sphere, etc.)
2. Use extrusion and edge loops to add detail
3. Group objects and organize with layers
4. Export as FBX for game engine use
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Maya Essentials</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game asset creation</li>
          <li>Character animation and rigging</li>
          <li>Visual effects for games and film</li>
          <li>Product and concept modeling</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Maya essentials are the foundation for professional 3D modeling and animation.  
        Master these tools to create high-quality assets for games, film, and interactive media.
      </p>
    </div>
  );
}