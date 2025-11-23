export default function UxResearchContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">UX Research</h2>
      <p className="text-gray-600">
        UX research uncovers user needs, behaviors, and motivations to inform design decisions.  
        It is essential for creating products that are usable, useful, and delightful.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why UX Research?</h3>
        <p className="text-blue-700">
          Research reduces guesswork, validates ideas, and ensures solutions solve real problems for users.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Research Methods</h3>
      <ul>
        <li>Interviews: Gather deep insights from users</li>
        <li>Surveys: Collect quantitative data at scale</li>
        <li>Usability testing: Observe users interacting with prototypes</li>
        <li>Field studies: Understand context and environment</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. User Personas</h3>
      <ul>
        <li>Create profiles representing key user types</li>
        <li>Summarize goals, needs, and pain points</li>
        <li>Guide design decisions and prioritization</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Journey Mapping</h3>
      <ul>
        <li>Visualize user steps, emotions, and touchpoints</li>
        <li>Identify opportunities and friction in the experience</li>
        <li>Align teams around user-centric improvements</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Synthesizing Insights</h3>
      <ul>
        <li>Analyze data for patterns and actionable findings</li>
        <li>Share insights with stakeholders and teams</li>
        <li>Inform design, strategy, and product decisions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: User persona template
Name: Priya, Age: 28
Goals: Find reliable health info quickly
Pain Points: Overwhelmed by medical jargon
Motivations: Trust, simplicity, speed
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of UX Research</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Product and feature design</li>
          <li>Usability and accessibility improvements</li>
          <li>Strategy and roadmap planning</li>
          <li>Continuous user feedback and iteration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        UX research is essential for user-centered design.  
        Master these methods to create products that truly meet user needs and expectations.
      </p>
    </div>
  );
}