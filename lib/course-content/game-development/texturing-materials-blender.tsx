export default function TexturingMaterialsBlenderContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Texturing & Materials (Blender)</h2>
      <p className="text-gray-600">
        Texturing and materials in Blender cover creating realistic surfaces, painting textures, and using node-based materials for game assets.  
        Mastering these techniques is essential for visually rich models and environments.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Texturing & Materials?</h3>
        <p className="text-blue-700">
          Good texturing and material setup bring 3D models to life, adding realism, style, and detail for games and media.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Texture Painting</h3>
      <ul>
        <li>Paint directly on 3D models for custom details</li>
        <li>Use layers and brushes for complex effects</li>
        <li>Export textures for use in game engines</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Node-Based Materials</h3>
      <ul>
        <li>Create materials using Blender’s node editor</li>
        <li>Combine diffuse, normal, and specular maps</li>
        <li>Use procedural textures for flexibility</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. PBR Workflow</h3>
      <ul>
        <li>Set up physically-based rendering materials for realism</li>
        <li>Use albedo, roughness, metallic, and normal maps</li>
        <li>Preview and adjust materials in real-time</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Exporting Textures & Materials</h3>
      <ul>
        <li>Export texture maps in standard formats (PNG, JPG, etc.)</li>
        <li>Prepare materials for Unity, Unreal, and other engines</li>
        <li>Test assets for correct appearance in-game</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Blender node setup for PBR material
- Image Texture (Albedo) → Base Color
- Image Texture (Normal) → Normal Map
- Image Texture (Roughness) → Roughness
- Image Texture (Metallic) → Metallic
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Texturing & Materials (Blender)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game asset creation</li>
          <li>Environment and prop detailing</li>
          <li>Stylized and realistic visual effects</li>
          <li>Portfolio and cinematic renders</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Texturing and materials in Blender are essential for high-quality 3D assets.  
        Master these workflows to create visually stunning models for games and media.
      </p>
    </div>
  );
}