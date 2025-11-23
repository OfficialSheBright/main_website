export default function BaFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Business Analysis (BA) Foundations</h2>
      <p className="text-gray-600">
        Business analysis foundations introduce the core concepts, roles, and skills needed to identify business needs, engage stakeholders, and deliver value through effective solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Business Analysis?</h3>
        <p className="text-blue-700">
          Business analysts bridge the gap between business goals and technical solutions, ensuring projects deliver real value and meet stakeholder needs.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. What is Business Analysis?</h3>
      <ul>
        <li>Defining business problems and opportunities</li>
        <li>Identifying and documenting requirements</li>
        <li>Facilitating communication between stakeholders and teams</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Stakeholder Engagement</h3>
      <ul>
        <li>Identifying key stakeholders</li>
        <li>Managing expectations and communication</li>
        <li>Building consensus and resolving conflicts</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Business Case Creation</h3>
      <ul>
        <li>Analyzing business needs and objectives</li>
        <li>Evaluating solution options</li>
        <li>Building a compelling case for change</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple stakeholder matrix
| Stakeholder | Interest      | Influence | Engagement Strategy   |
|-------------|--------------|-----------|----------------------|
| CEO         | High         | High      | Regular updates      |
| End User    | High         | Medium    | Surveys, interviews  |
| IT Team     | Medium       | High      | Technical workshops  |
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of BA Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Requirements gathering for new projects</li>
          <li>Process improvement initiatives</li>
          <li>Stakeholder management and communication</li>
          <li>Business case development and evaluation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Business analysis foundations are essential for delivering successful projects and solutions.  
        Master these skills to drive value and align business and technical teams.
      </p>
    </div>
  );
}