export default function AdvancedGraphicToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced Graphic Tools</h2>
      <p className="text-gray-600">
        Advanced graphic tools empower designers to create professional-grade visuals, illustrations, and digital art.  
        Mastering these tools is essential for high-quality creative work in branding, media, and product design.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Advanced Graphic Tools?</h3>
        <p className="text-blue-700">
          These tools offer powerful features for vector illustration, photo editing, and digital painting, enabling creative freedom and precision.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Adobe Illustrator</h3>
      <ul>
        <li>Industry-standard for vector graphics and illustration</li>
        <li>Create logos, icons, typography, and complex artwork</li>
        <li>Supports scalable designs for print and digital media</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Photoshop</h3>
      <ul>
        <li>Powerful photo editing and raster graphics tool</li>
        <li>Retouch images, create composites, and design layouts</li>
        <li>Advanced features: layers, masks, filters, and effects</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Procreate</h3>
      <ul>
        <li>Popular digital painting app for iPad</li>
        <li>Intuitive interface for illustration, sketching, and concept art</li>
        <li>Custom brushes, layers, and export options for animation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting artwork from Illustrator
# 1. File > Export > Export As...
# 2. Choose format (SVG, PNG, PDF)
# 3. Set resolution and options, then save
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced Graphic Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Branding and logo design</li>
          <li>Digital illustration and concept art</li>
          <li>Photo editing and compositing</li>
          <li>Print and digital media production</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced graphic tools are essential for professional creative work.  
        Master these platforms to produce high-impact visuals for any design project.
      </p>
    </div>
  );
}