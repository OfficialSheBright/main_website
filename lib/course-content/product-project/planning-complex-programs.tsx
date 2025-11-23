export default function PlanningComplexProgramsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Planning Complex Programs</h2>
      <p className="text-gray-600">
        Planning complex programs involves breaking down large initiatives into manageable components, mapping dependencies, and aligning teams to deliver business value.  
        Effective planning ensures clarity, reduces risk, and drives successful execution across multiple projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Plan Complex Programs?</h3>
        <p className="text-blue-700">
          Proper planning helps manage uncertainty, coordinate cross-functional teams, and deliver outcomes on time and within scope.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Requirement Breakdown</h3>
      <ul>
        <li>Decompose high-level goals into actionable requirements</li>
        <li>Identify functional and non-functional needs</li>
        <li>Engage stakeholders for clarity and alignment</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Technical Specs</h3>
      <ul>
        <li>Document architecture, interfaces, and data flows</li>
        <li>Define technical constraints and assumptions</li>
        <li>Ensure specs are clear, testable, and traceable</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Dependency Mapping</h3>
      <ul>
        <li>Identify internal and external dependencies</li>
        <li>Map critical paths and potential bottlenecks</li>
        <li>Plan for resource allocation and risk mitigation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Program Roadmaps</h3>
      <ul>
        <li>Visualize timelines, milestones, and deliverables</li>
        <li>Align teams on sequencing and priorities</li>
        <li>Update roadmaps as scope or priorities change</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Creating Technical PRDs</h3>
      <ul>
        <li>Write clear, detailed Product Requirement Documents (PRDs)</li>
        <li>Include objectives, scope, acceptance criteria, and metrics</li>
        <li>Review and iterate with stakeholders and engineering</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Program roadmap outline
Q1: Requirement breakdown & technical specs
Q2: Architecture design & dependency mapping
Q3: Development & integration
Q4: Testing, launch, and retrospective
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Planning Complex Programs</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Coordinating large-scale product launches</li>
          <li>Managing cross-team engineering initiatives</li>
          <li>Delivering multi-phase transformation projects</li>
          <li>Reducing risk in high-impact programs</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Planning complex programs is essential for delivering strategic business outcomes.  
        Master these practices to lead successful, large-scale initiatives with confidence.
      </p>
    </div>
  );
}