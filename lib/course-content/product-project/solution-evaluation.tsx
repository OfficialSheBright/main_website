export default function SolutionEvaluationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Solution Evaluation</h2>
      <p className="text-gray-600">
        Solution evaluation is the process of assessing proposed or implemented solutions to ensure they meet business needs, deliver value, and are feasible for implementation.  
        It helps teams make informed decisions and optimize outcomes.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Solution Evaluation?</h3>
        <p className="text-blue-700">
          Evaluating solutions ensures that resources are invested in the most effective options, risks are managed, and business objectives are achieved.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Gap Analysis</h3>
      <ul>
        <li>Identify differences between current and desired states</li>
        <li>Highlight missing features, capabilities, or processes</li>
        <li>Prioritize gaps based on business impact</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Impact Analysis</h3>
      <ul>
        <li>Assess the effects of proposed changes on people, processes, and systems</li>
        <li>Identify stakeholders affected and potential risks</li>
        <li>Plan mitigation strategies for negative impacts</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Cost-Benefit Analysis</h3>
      <ul>
        <li>Compare the costs of implementation with expected benefits</li>
        <li>Quantify tangible and intangible value</li>
        <li>Support decision-making with clear financial rationale</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Feasibility Studies</h3>
      <ul>
        <li>Evaluate technical, operational, and financial feasibility</li>
        <li>Assess resource availability and constraints</li>
        <li>Recommend go/no-go decisions based on findings</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple cost-benefit analysis table
| Option   | Cost   | Benefit | Net Value |
|----------|--------|---------|-----------|
| Solution A | $50K | $120K   | $70K      |
| Solution B | $30K | $60K    | $30K      |
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Solution Evaluation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Selecting the best solution among alternatives</li>
          <li>Justifying investments and project approvals</li>
          <li>Managing change and minimizing risk</li>
          <li>Ensuring solutions deliver intended value</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Solution evaluation is essential for making informed, value-driven decisions.  
        Master these techniques to ensure your projects deliver real business impact and success.
      </p>
    </div>
  );
}