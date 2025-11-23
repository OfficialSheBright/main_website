export default function UiDesignContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">UI Design</h2>
      <p className="text-gray-600">
        User Interface (UI) design focuses on crafting visually appealing, intuitive, and accessible interfaces for digital products.  
        Good UI design improves usability, guides user actions, and reinforces brand identity.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why UI Design?</h3>
        <p className="text-blue-700">
          Effective UI design helps users accomplish tasks easily, enjoyably, and efficiently, while supporting business goals.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Layout & Composition</h3>
      <ul>
        <li>Arrange elements for clarity, hierarchy, and balance</li>
        <li>Use grids, spacing, and alignment for structure</li>
        <li>Guide user attention with visual flow</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Color & Typography</h3>
      <ul>
        <li>Choose color palettes for mood, accessibility, and branding</li>
        <li>Apply typography for readability and emphasis</li>
        <li>Maintain consistency across screens and components</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. UI Components</h3>
      <ul>
        <li>Design buttons, forms, cards, and navigation elements</li>
        <li>Use states (default, hover, active, disabled) for feedback</li>
        <li>Build reusable components for scalable design systems</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Accessibility</h3>
      <ul>
        <li>Design for users with diverse abilities</li>
        <li>Ensure color contrast, keyboard navigation, and screen reader support</li>
        <li>Follow WCAG guidelines for inclusive design</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Accessible button in HTML
<button aria-label="Submit" style={{ background: '#2563eb', color: '#fff' }}>
  Submit
</button>
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of UI Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile apps</li>
          <li>Software interfaces and dashboards</li>
          <li>Digital products and games</li>
          <li>Branding and marketing assets</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        UI design is essential for creating attractive, usable, and inclusive digital experiences.  
        Master these principles to deliver interfaces that delight and empower users.
      </p>
    </div>
  );
}