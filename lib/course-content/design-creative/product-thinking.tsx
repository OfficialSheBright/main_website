export default function ProductThinkingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Thinking</h2>
      <p className="text-gray-600">
        Product thinking is the mindset of solving real user problems and delivering value through design.  
        It combines empathy, strategy, and prioritization to create impactful products.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Thinking?</h3>
        <p className="text-blue-700">
          Product thinking helps designers focus on outcomes, not just outputs, ensuring solutions are meaningful and effective.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Problem Framing</h3>
      <ul>
        <li>Define the real problem to solve, not just symptoms</li>
        <li>Use user research and data to clarify needs</li>
        <li>Align problem statements with business goals</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Value Proposition</h3>
      <ul>
        <li>Identify what makes your product unique and valuable</li>
        <li>Communicate benefits clearly to users and stakeholders</li>
        <li>Test and refine value through feedback and iteration</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Feature Prioritization</h3>
      <ul>
        <li>Rank features by impact, feasibility, and user value</li>
        <li>Use frameworks like MoSCoW or RICE for decision-making</li>
        <li>Focus on delivering core value before expanding scope</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Roadmapping</h3>
      <ul>
        <li>Plan releases and milestones for product growth</li>
        <li>Balance short-term wins with long-term vision</li>
        <li>Adapt roadmap based on feedback and changing needs</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: MoSCoW prioritization for a new app
Must have: User login, core feature
Should have: Profile editing
Could have: Social sharing
Won't have (now): Advanced analytics
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Thinking</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing user-centered products</li>
          <li>Feature planning and prioritization</li>
          <li>Aligning teams around shared goals</li>
          <li>Continuous improvement and iteration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product thinking is essential for impactful design and innovation.  
        Master these concepts to deliver solutions that truly matter to users and businesses.
      </p>
    </div>
  );
}