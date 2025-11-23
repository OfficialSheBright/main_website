export default function ProductDesignUxCollaborationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Design & UX Collaboration</h2>
      <p className="text-gray-600">
        Product design and UX collaboration ensure that products are not only functional but also intuitive and delightful for users.  
        Effective collaboration between product managers, designers, and engineers leads to better user experiences and successful products.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Design & UX Collaboration?</h3>
        <p className="text-blue-700">
          Early and ongoing collaboration helps teams align on user needs, reduce rework, and deliver products that users love.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Wireflows</h3>
      <ul>
        <li>Visualize user journeys and screen flows</li>
        <li>Combine wireframes with flow diagrams for clarity</li>
        <li>Identify key interactions and decision points</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Design Systems</h3>
      <ul>
        <li>Use reusable components, patterns, and guidelines</li>
        <li>Ensure consistency across products and platforms</li>
        <li>Accelerate design and development with shared libraries</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. User Stories</h3>
      <ul>
        <li>Describe features from the user&apos;s perspective</li>
        <li>Focus on user goals, needs, and pain points</li>
        <li>Guide design and development priorities</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Acceptance Criteria (AC)</h3>
      <ul>
        <li>Define clear, testable conditions for feature completion</li>
        <li>Align expectations between product, design, and engineering</li>
        <li>Reduce ambiguity and speed up QA</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: User story with acceptance criteria
As a user, I want to filter search results by category so that I can find relevant products faster.

Acceptance Criteria:
- User can select one or more categories
- Results update instantly when a category is selected
- Selected categories are highlighted
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Design & UX Collaboration</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing user-centric features and interfaces</li>
          <li>Reducing handoff friction between design and engineering</li>
          <li>Improving usability and accessibility</li>
          <li>Delivering products that delight users</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product design and UX collaboration are vital for building successful products.  
        Master these practices to create experiences that meet user needs and drive business results.
      </p>
    </div>
  );
}