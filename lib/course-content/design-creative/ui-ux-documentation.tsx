export default function UiUxDocumentationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">UI/UX Documentation</h2>
      <p className="text-gray-600">
        UI/UX documentation captures design decisions, user flows, and specifications for digital products.  
        It ensures clarity, consistency, and smooth collaboration between designers, developers, and stakeholders.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Document UI/UX?</h3>
        <p className="text-blue-700">
          Good documentation reduces ambiguity, speeds up development, and helps teams maintain quality as products evolve.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. User Flows</h3>
      <ul>
        <li>Visualize steps users take to complete tasks</li>
        <li>Identify screens, actions, and decision points</li>
        <li>Optimize for efficiency and clarity</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Wireframes & Mockups</h3>
      <ul>
        <li>Show layout, structure, and key components</li>
        <li>Document states (default, hover, error, etc.)</li>
        <li>Provide reference for development and testing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Design Specifications</h3>
      <ul>
        <li>Detail colors, typography, spacing, and assets</li>
        <li>Include interaction guidelines and accessibility notes</li>
        <li>Use tools like Figma, Zeplin, or Notion for sharing</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Component Documentation</h3>
      <ul>
        <li>Describe reusable UI elements and their variants</li>
        <li>List props, states, and usage examples</li>
        <li>Support design systems and scalability</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Button component documentation (Markdown)
## Button
- States: default, hover, active, disabled
- Props: label, onClick, type
- Usage: <Button label="Submit" onClick={handleSubmit} />
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of UI/UX Documentation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Developer handoff and implementation</li>
          <li>Quality assurance and testing</li>
          <li>Design system maintenance</li>
          <li>Stakeholder communication</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        UI/UX documentation is essential for successful product development.  
        Master these practices to ensure clarity, consistency, and collaboration in your design projects.
      </p>
    </div>
  );
}