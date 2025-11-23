export default function BrandingIdentityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Branding & Identity</h2>
      <p className="text-gray-600">
        Branding and identity design create the visual and emotional foundation for organizations, products, and services.  
        Strong branding builds recognition, trust, and loyalty among audiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Branding & Identity?</h3>
        <p className="text-blue-700">
          Effective branding communicates values, differentiates from competitors, and shapes user perception.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Logo Design</h3>
      <ul>
        <li>Craft memorable and versatile logos</li>
        <li>Explore marks, wordmarks, and combination logos</li>
        <li>Iterate concepts and refine for clarity and impact</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Brand Guidelines</h3>
      <ul>
        <li>Define color palettes, typography, and imagery</li>
        <li>Set rules for logo usage, spacing, and backgrounds</li>
        <li>Ensure consistency across digital and print media</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Visual Identity Systems</h3>
      <ul>
        <li>Develop cohesive visual elements: icons, patterns, layouts</li>
        <li>Apply identity across products, packaging, and marketing</li>
        <li>Document assets for team and stakeholder use</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Brand Storytelling</h3>
      <ul>
        <li>Craft narratives that connect emotionally with audiences</li>
        <li>Use visuals and messaging to reinforce brand values</li>
        <li>Integrate storytelling in campaigns and presentations</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Logo export workflow in Illustrator
# 1. Design logo in vector format
# 2. File > Export > Export As... (SVG, PNG, PDF)
# 3. Create logo variants for different backgrounds
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Branding & Identity</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Corporate and product branding</li>
          <li>Marketing campaigns and advertising</li>
          <li>Packaging and digital assets</li>
          <li>Brand guidelines and documentation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Branding and identity design are essential for building memorable, trusted organizations and products.  
        Master these skills to create impactful brands and visual systems.
      </p>
    </div>
  );
}