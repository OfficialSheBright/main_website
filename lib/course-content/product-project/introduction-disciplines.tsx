export default function IntroductionDisciplinesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Introduction to Product & Project Disciplines</h2>
      <p className="text-gray-600">
        This topic introduces the core disciplines of product management, project management, and program management.  
        Understanding these roles and their differences is essential for effective leadership and successful delivery in any organization.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Product & Project Disciplines?</h3>
        <p className="text-blue-700">
          Clear understanding of these disciplines helps align teams, set expectations, and drive business outcomes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Product vs Project vs Program</h3>
      <ul>
        <li><strong>Product Management:</strong> Focuses on product vision, strategy, and delivering customer value</li>
        <li><strong>Project Management:</strong> Plans and executes projects to achieve specific goals within constraints</li>
        <li><strong>Program Management:</strong> Oversees multiple projects to achieve broader business objectives</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. What Makes a Good PM/TPM/BA?</h3>
      <ul>
        <li>Strong communication and stakeholder management</li>
        <li>Analytical and problem-solving skills</li>
        <li>Ability to align teams and drive execution</li>
        <li>Understanding of both business and technology</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Stakeholder Alignment</h3>
      <ul>
        <li>Identify and engage key stakeholders early</li>
        <li>Facilitate alignment on goals, priorities, and success metrics</li>
        <li>Manage expectations and resolve conflicts</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Lifecycle Models: SDLC, PDLC, PLC</h3>
      <ul>
        <li><strong>SDLC:</strong> Software Development Lifecycle (requirements, design, development, testing, deployment)</li>
        <li><strong>PDLC:</strong> Product Development Lifecycle (ideation, validation, build, launch, growth, sunset)</li>
        <li><strong>PLC:</strong> Project Lifecycle (initiation, planning, execution, monitoring, closure)</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Stakeholder alignment matrix
| Stakeholder | Role         | Interest | Influence | Engagement Plan      |
|-------------|--------------|----------|-----------|---------------------|
| CEO         | Sponsor      | High     | High      | Monthly reviews     |
| Customer    | End user     | High     | Medium    | Surveys, interviews |
| Dev Lead    | Execution    | Medium   | High      | Sprint meetings     |
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product & Project Disciplines</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Defining roles and responsibilities in teams</li>
          <li>Aligning business and technical goals</li>
          <li>Managing complex initiatives and change</li>
          <li>Driving successful product and project outcomes</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mastering product, project, and program disciplines is foundational for leadership and delivery.  
        Use these concepts to align teams, manage stakeholders, and achieve business success.
      </p>
    </div>
  );
}