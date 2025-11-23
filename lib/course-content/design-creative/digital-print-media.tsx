export default function DigitalPrintMediaContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Digital & Print Media</h2>
      <p className="text-gray-600">
        Digital and print media design covers the creation of visual assets for online platforms and physical products.  
        Mastering these skills enables designers to communicate messages effectively across diverse channels.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Digital & Print Media?</h3>
        <p className="text-blue-700">
          Strong media design boosts brand visibility, engagement, and professionalism in both digital and physical spaces.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Posters & Banners</h3>
      <ul>
        <li>Design for events, advertising, and campaigns</li>
        <li>Use hierarchy, color, and imagery for impact</li>
        <li>Prepare files for print and digital formats</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Social Media Creatives</h3>
      <ul>
        <li>Create engaging graphics for platforms like Instagram, Facebook, and LinkedIn</li>
        <li>Adapt designs for various screen sizes and aspect ratios</li>
        <li>Maintain brand consistency across posts and ads</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Packaging Design</h3>
      <ul>
        <li>Design boxes, labels, and product wraps</li>
        <li>Balance aesthetics with functional requirements</li>
        <li>Prepare dielines and print-ready files</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Business Cards & Brochures</h3>
      <ul>
        <li>Design professional collateral for networking and marketing</li>
        <li>Focus on layout, typography, and brand elements</li>
        <li>Export files for high-quality printing</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting a print-ready PDF in Illustrator
# 1. File > Save As > PDF
# 2. Choose "High Quality Print" preset
# 3. Set bleed and crop marks as needed
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Digital & Print Media</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Marketing campaigns and event promotion</li>
          <li>Branding across digital and physical channels</li>
          <li>Product packaging and retail displays</li>
          <li>Professional networking and outreach</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Digital and print media design are vital for effective communication and brand building.  
        Master these skills to create impactful visuals for any platform or audience.
      </p>
    </div>
  );
}