export default function IllustrationIconographyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Illustration & Iconography</h2>
      <p className="text-gray-600">
        Illustration and iconography are vital for visual storytelling, branding, and user interface design.  
        Mastering these skills helps you create memorable, engaging, and functional graphics for digital and print media.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Illustration & Iconography?</h3>
        <p className="text-blue-700">
          Custom illustrations and icons enhance communication, guide users, and reinforce brand identity.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Vector Illustration</h3>
      <ul>
        <li>Create scalable graphics using tools like Illustrator or Figma</li>
        <li>Design characters, scenes, and decorative elements</li>
        <li>Export assets for web, apps, and print</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Icon Sets</h3>
      <ul>
        <li>Design consistent, recognizable icons for UI and branding</li>
        <li>Use grids, shapes, and visual metaphors</li>
        <li>Prepare icons in SVG, PNG, or font formats</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Character Design Basics</h3>
      <ul>
        <li>Sketch and refine characters for games, apps, or branding</li>
        <li>Focus on proportions, expressions, and personality</li>
        <li>Iterate with feedback and style exploration</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Composition & Storytelling</h3>
      <ul>
        <li>Arrange elements for clarity and impact</li>
        <li>Use color, lighting, and perspective to guide the viewer</li>
        <li>Tell stories visually through scenes and sequences</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Exporting an icon set in Figma
# 1. Design icons on a grid
# 2. Select all icons and export as SVG or PNG
# 3. Organize files for development handoff
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Illustration & Iconography</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX design and product interfaces</li>
          <li>Branding and marketing campaigns</li>
          <li>Games, apps, and animations</li>
          <li>Print media and editorial design</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Illustration and iconography are essential for creative communication and brand building.  
        Master these techniques to create impactful, memorable visuals for any project.
      </p>
    </div>
  );
}