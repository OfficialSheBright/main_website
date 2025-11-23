export default function RenderingBlenderContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Rendering (Blender)</h2>
      <p className="text-gray-600">
        Rendering in Blender covers lighting, camera setup, and exporting images or animations for games and media.  
        Mastering these techniques helps you create polished visuals and showcase your 3D assets effectively.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Render in Blender?</h3>
        <p className="text-blue-700">
          Blender’s rendering tools allow you to visualize models, test lighting, and produce high-quality images for portfolios and game assets.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Lighting Setup</h3>
      <ul>
        <li>Use point, sun, and area lights for realistic illumination</li>
        <li>Adjust intensity, color, and shadows for mood and clarity</li>
        <li>Experiment with HDRI environments for natural lighting</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Camera Placement</h3>
      <ul>
        <li>Position cameras for optimal framing and composition</li>
        <li>Animate camera movement for cinematic shots</li>
        <li>Set focal length and depth of field for dramatic effects</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Render Settings</h3>
      <ul>
        <li>Choose between Eevee (real-time) and Cycles (ray-traced) engines</li>
        <li>Configure resolution, samples, and output formats</li>
        <li>Optimize settings for speed or quality as needed</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Exporting Renders</h3>
      <ul>
        <li>Export still images for portfolios and documentation</li>
        <li>Render animations for cutscenes and trailers</li>
        <li>Prepare assets for use in game engines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Blender rendering workflow
1. Set up lights and camera in the scene
2. Choose render engine (Eevee or Cycles)
3. Adjust render settings for quality and speed
4. Export image or animation from the Render menu
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Rendering (Blender)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Portfolio and showcase images</li>
          <li>Game asset previews</li>
          <li>Cinematic cutscenes and trailers</li>
          <li>Documentation and marketing materials</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Rendering in Blender is essential for presenting your 3D work.  
        Master these techniques to create stunning visuals for games and media.
      </p>
    </div>
  );
}