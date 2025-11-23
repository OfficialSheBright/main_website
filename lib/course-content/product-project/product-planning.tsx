export default function ProductPlanningContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Planning</h2>
      <p className="text-gray-600">
        Product planning is the process of defining what to build, when to build it, and why.  
        It involves setting a vision, prioritizing features, and aligning teams to deliver value to customers and the business.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Planning?</h3>
        <p className="text-blue-700">
          Effective planning ensures teams work on the right things, reduces wasted effort, and increases the chances of product success.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Roadmaps</h3>
      <ul>
        <li>Visual timelines showing planned features and releases</li>
        <li>Communicate priorities and progress to stakeholders</li>
        <li>Update regularly as priorities shift</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Prioritization Frameworks</h3>
      <ul>
        <li>Use structured methods to decide what to build next</li>
        <li>Common frameworks: RICE, MoSCoW, Kano model</li>
        <li>Balance customer needs, business goals, and technical constraints</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Feature Specs & PRDs</h3>
      <ul>
        <li>Write clear Product Requirement Documents (PRDs)</li>
        <li>Define objectives, scope, user stories, and acceptance criteria</li>
        <li>Align product, design, and engineering on what to deliver</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. OKRs for Product</h3>
      <ul>
        <li>Set Objectives and Key Results to guide product direction</li>
        <li>Align team efforts with measurable outcomes</li>
        <li>Review and update OKRs regularly</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: RICE scoring for prioritization
RICE Score = (Reach × Impact × Confidence) / Effort

// Example: Simple OKR
Objective: Improve user onboarding experience
Key Results:
- Increase activation rate from 40% to 60%
- Reduce onboarding time by 30%
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Planning</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building and communicating product roadmaps</li>
          <li>Prioritizing features and improvements</li>
          <li>Aligning teams on goals and deliverables</li>
          <li>Tracking progress with OKRs and metrics</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product planning is essential for delivering the right features at the right time.  
        Master these practices to drive alignment, focus, and product success.
      </p>
    </div>
  );
}