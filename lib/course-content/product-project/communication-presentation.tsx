export default function CommunicationPresentationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Communication & Presentation</h2>
      <p className="text-gray-600">
        Communication and presentation skills are essential for product managers, technical program managers, and business analysts.  
        Mastering these skills enables you to influence stakeholders, drive alignment, and deliver impactful messages at all levels.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Communication & Presentation?</h3>
        <p className="text-blue-700">
          Effective communication and presentation help you share ideas clearly, gain buy-in, and lead teams to successful outcomes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Executive Communication</h3>
      <ul>
        <li>Tailor your message for senior leaders and decision-makers</li>
        <li>Focus on business impact, risks, and recommendations</li>
        <li>Be concise and data-driven</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Stakeholder Presentations</h3>
      <ul>
        <li>Understand your audience’s needs and expectations</li>
        <li>Use visuals and storytelling to engage and inform</li>
        <li>Anticipate questions and objections</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Creating Pitch Decks</h3>
      <ul>
        <li>Structure your deck: problem, solution, value, next steps</li>
        <li>Keep slides simple and focused</li>
        <li>Use charts, diagrams, and examples to support your message</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Documentation Best Practices</h3>
      <ul>
        <li>Write clear, actionable documents (specs, reports, proposals)</li>
        <li>Organize content for easy navigation and updates</li>
        <li>Use templates and checklists to ensure completeness</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Pitch deck outline
1. Title & Introduction
2. Problem Statement
3. Proposed Solution
4. Market Opportunity
5. Roadmap & Next Steps
6. Q&A
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Communication & Presentation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Presenting to executives and stakeholders</li>
          <li>Leading team meetings and workshops</li>
          <li>Creating pitch decks and proposals</li>
          <li>Documenting requirements and project plans</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Communication and presentation mastery is vital for leadership and project success.  
        Develop these skills to influence, align, and inspire teams and stakeholders.
      </p>
    </div>
  );
}