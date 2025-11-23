export default function DesignForProductContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Design for Product</h2>
      <p className="text-gray-600">
        Designing for product means translating requirements and strategy into tangible features, flows, and interactive prototypes.  
        This topic covers the essentials of product documentation, specification, and prototyping for effective collaboration and delivery.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Design for Product?</h3>
        <p className="text-blue-700">
          Clear documentation and prototypes align teams, reduce ambiguity, and accelerate development from concept to launch.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Requirement Documents</h3>
      <ul>
        <li>Capture business goals, user needs, and technical constraints</li>
        <li>Define scope, features, and success criteria</li>
        <li>Share with stakeholders for alignment and feedback</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Feature Specs</h3>
      <ul>
        <li>Detail individual features with user stories and acceptance criteria</li>
        <li>Include wireframes, flows, and edge cases</li>
        <li>Facilitate handoff to engineering and QA teams</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Wireflows</h3>
      <ul>
        <li>Combine wireframes with flow diagrams to show user journeys</li>
        <li>Visualize navigation, decision points, and interactions</li>
        <li>Identify gaps and optimize user experience</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Interactive Prototypes</h3>
      <ul>
        <li>Build clickable prototypes in Figma, Framer, or ProtoPie</li>
        <li>Test usability and gather feedback before development</li>
        <li>Demonstrate animations, transitions, and microinteractions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: User story format for feature spec
As a new user,
I want to sign up with my email,
So that I can access personalized features.
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Design for Product</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Product documentation and handoff</li>
          <li>Feature planning and prioritization</li>
          <li>Interactive prototyping and usability testing</li>
          <li>Cross-functional collaboration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Design for product bridges strategy and execution.  
        Master these practices to deliver clear, usable, and impactful product experiences.
      </p>
    </div>
  );
}