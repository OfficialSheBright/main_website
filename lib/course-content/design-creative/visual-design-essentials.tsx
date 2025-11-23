export default function VisualDesignEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Visual Design Essentials</h2>
      <p className="text-gray-600">
        Visual design essentials cover the core principles and techniques for creating attractive, effective digital and print layouts.  
        Mastering these fundamentals helps you communicate ideas clearly and engage your audience.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Visual Design?</h3>
        <p className="text-blue-700">
          Good visual design improves usability, builds trust, and reinforces brand identity across all media.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Layout & Composition</h3>
      <ul>
        <li>Use grids, alignment, and spacing for structure</li>
        <li>Balance elements for harmony and clarity</li>
        <li>Guide the viewer’s eye with visual hierarchy</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Color Theory</h3>
      <ul>
        <li>Choose palettes for mood, contrast, and accessibility</li>
        <li>Apply color psychology to influence perception</li>
        <li>Maintain consistency across designs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Typography</h3>
      <ul>
        <li>Select fonts for readability and style</li>
        <li>Use size, weight, and spacing for emphasis</li>
        <li>Pair typefaces for visual interest</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Imagery & Iconography</h3>
      <ul>
        <li>Choose images and icons that support your message</li>
        <li>Maintain quality and relevance</li>
        <li>Optimize assets for web and print</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Consistency & Branding</h3>
      <ul>
        <li>Apply brand guidelines to colors, fonts, and imagery</li>
        <li>Use design systems for scalable, cohesive visuals</li>
        <li>Ensure consistency across platforms and materials</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: CSS for consistent typography
body {
  font-family: 'Inter', Arial, sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: #222;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Visual Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile interfaces</li>
          <li>Branding and marketing materials</li>
          <li>Print layouts and editorial design</li>
          <li>Social media and advertising</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Visual design essentials are the foundation of creative communication.  
        Master these principles to create beautiful, effective designs for any medium.
      </p>
    </div>
  );
}