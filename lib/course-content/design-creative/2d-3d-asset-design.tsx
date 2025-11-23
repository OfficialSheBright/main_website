export default function TwoDThreeDAssetDesignContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">2D/3D Asset Design (Intro)</h2>
      <p className="text-gray-600">
        2D and 3D asset design are essential for creating engaging visuals in games, apps, and interactive experiences.  
        This topic introduces the fundamentals of designing sprites, textures, and basic 3D models.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn 2D/3D Asset Design?</h3>
        <p className="text-blue-700">
          Well-crafted assets enhance user experience, storytelling, and gameplay.  
          They are the building blocks of visual identity in digital products.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Sprites</h3>
      <ul>
        <li>2D images or animations used for characters, objects, and UI elements</li>
        <li>Created in tools like Photoshop, Illustrator, or Procreate</li>
        <li>Exported in PNG or SVG formats for use in engines</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Textures</h3>
      <ul>
        <li>Images applied to 3D models to add detail and realism</li>
        <li>Types: diffuse, normal, specular, bump maps</li>
        <li>Created in Photoshop, Substance Painter, or GIMP</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. 3D Modeling Basics</h3>
      <ul>
        <li>Building objects in 3D space using vertices, edges, and faces</li>
        <li>Tools: Blender, Cinema4D, Maya</li>
        <li>Export models in formats like OBJ, FBX, or GLTF</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting a simple 3D model in Blender
# 1. Create your model
# 2. File > Export > Wavefront (.obj)
# 3. Choose export settings and save
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of 2D/3D Asset Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game development (characters, environments, UI)</li>
          <li>App interfaces and icons</li>
          <li>Animation and motion graphics</li>
          <li>AR/VR experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        2D/3D asset design is foundational for creative digital work.  
        Master these basics to bring your ideas to life in games, apps, and interactive media.
      </p>
    </div>
  );
}