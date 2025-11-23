export default function PrototypingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Prototyping</h2>
      <p className="text-gray-600">
        Prototyping is the process of creating interactive models of design concepts.  
        It helps teams visualize ideas, test usability, and gather feedback before development.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Prototype?</h3>
        <p className="text-blue-700">
          Prototypes reduce risk, accelerate iteration, and ensure solutions meet user needs and business goals.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Low-Fidelity Wireframes</h3>
      <ul>
        <li>Sketch basic layouts and flows quickly</li>
        <li>Focus on structure, navigation, and core interactions</li>
        <li>Use paper, whiteboards, or digital tools like Figma</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. High-Fidelity Mockups</h3>
      <ul>
        <li>Add visual design, branding, and detailed components</li>
        <li>Simulate final look and feel for stakeholders</li>
        <li>Use design tools for pixel-perfect screens</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Interactive Prototyping</h3>
      <ul>
        <li>Link screens and add transitions for realistic flows</li>
        <li>Test usability and gather feedback from users</li>
        <li>Tools: Figma, Framer, ProtoPie, Adobe XD</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a clickable prototype in Figma
# 1. Design screens and components
# 2. Use "Prototype" tab to link frames with interactions
# 3. Share and test with users for feedback
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Prototyping</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Usability testing and validation</li>
          <li>Stakeholder presentations and buy-in</li>
          <li>Developer handoff and design specs</li>
          <li>Iterative design and rapid feedback</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Prototyping is essential for effective, user-centered design.  
        Master these techniques to visualize, test, and refine your ideas before launch.
      </p>
    </div>
  );
}