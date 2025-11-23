export default function ToolsOfTradeContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools of the Trade</h2>
      <p className="text-gray-600">
        Modern design relies on a variety of digital tools for UI/UX, graphic design, prototyping, and 3D modeling.  
        Mastering these platforms empowers you to create, collaborate, and deliver professional results.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Design Tools?</h3>
        <p className="text-blue-700">
          The right tools streamline your workflow, enhance creativity, and enable effective collaboration with teams and clients.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Figma</h3>
      <ul>
        <li>Collaborative UI/UX design and prototyping</li>
        <li>Real-time editing and feedback</li>
        <li>Design systems and developer handoff</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Adobe XD</h3>
      <ul>
        <li>UI/UX design and interactive prototyping</li>
        <li>Integrates with Adobe Creative Cloud</li>
        <li>Supports voice and auto-animate features</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Adobe Creative Cloud (Illustrator, Photoshop, After Effects)</h3>
      <ul>
        <li>Illustrator: Vector graphics and illustration</li>
        <li>Photoshop: Photo editing and raster graphics</li>
        <li>After Effects: Motion graphics and animation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Blender (for 3D)</h3>
      <ul>
        <li>Open-source 3D modeling, animation, and rendering</li>
        <li>Create assets for games, motion graphics, and AR/VR</li>
        <li>Export models and animations for various platforms</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Prototyping Tools (ProtoPie, Framer)</h3>
      <ul>
        <li>ProtoPie: Advanced interaction and logic prototyping</li>
        <li>Framer: Code-based and visual prototyping for complex UI</li>
        <li>Test and share interactive prototypes with stakeholders</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting assets from Figma
# 1. Select layers or frames
# 2. Click "Export" in the right sidebar
# 3. Choose format (PNG, SVG, PDF) and download
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Design Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX design and prototyping</li>
          <li>Graphic and motion design</li>
          <li>3D modeling and animation</li>
          <li>Collaboration and developer handoff</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mastering design tools is essential for creative professionals.  
        Learn these platforms to boost your workflow and deliver high-quality projects.
      </p>
    </div>
  );
}