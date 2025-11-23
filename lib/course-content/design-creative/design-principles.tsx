export default function DesignPrinciplesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Design Principles</h2>
      <p className="text-gray-600">
        Design principles are the foundation of effective visual communication.  
        They guide designers in creating balanced, accessible, and impactful work across media and platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Design Principles?</h3>
        <p className="text-blue-700">
          Applying design principles ensures clarity, usability, and aesthetic appeal, helping users understand and engage with your work.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Core Principles</h3>
      <ul>
        <li><strong>Balance:</strong> Distribute visual weight evenly for stability</li>
        <li><strong>Hierarchy:</strong> Guide attention using size, color, and placement</li>
        <li><strong>Contrast:</strong> Create distinction between elements for emphasis</li>
        <li><strong>Alignment:</strong> Arrange elements for order and readability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Visual Language & Semiotics</h3>
      <ul>
        <li>Use shapes, colors, and symbols to convey meaning</li>
        <li>Leverage cultural and contextual cues for interpretation</li>
        <li>Build consistent visual systems for branding and UI</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Gestalt Principles</h3>
      <ul>
        <li>Proximity, similarity, closure, figure-ground, continuity</li>
        <li>Explain how users perceive grouped and related elements</li>
        <li>Apply to layouts, icons, and interface design</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Design Ethics & Accessibility</h3>
      <ul>
        <li>Design for inclusivity and diverse audiences</li>
        <li>Follow accessibility standards (WCAG, color contrast)</li>
        <li>Consider ethical implications of design choices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Checking color contrast for accessibility (WCAG)
# Use online tools or plugins (e.g., Stark, WebAIM)
# Ensure text/background contrast ratio meets minimum standards
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Design Principles</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX and product design</li>
          <li>Branding and visual identity</li>
          <li>Print and digital media</li>
          <li>Inclusive and accessible experiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Design principles are essential for creating effective, inclusive, and visually appealing work.  
        Master these fundamentals to elevate your design practice.
      </p>
    </div>
  );
}