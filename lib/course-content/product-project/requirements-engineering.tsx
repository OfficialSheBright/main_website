export default function RequirementsEngineeringContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Requirements Engineering</h2>
      <p className="text-gray-600">
        Requirements engineering is the process of discovering, analyzing, documenting, and managing the needs and constraints for a system or project.  
        It ensures that solutions meet business goals and stakeholder expectations.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Requirements Engineering?</h3>
        <p className="text-blue-700">
          Clear, well-managed requirements reduce project risk, prevent scope creep, and ensure successful delivery of business value.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Requirements Elicitation Techniques</h3>
      <ul>
        <li>Interviews and workshops with stakeholders</li>
        <li>Surveys, questionnaires, and observation</li>
        <li>Document analysis and brainstorming sessions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. User Stories vs Use Cases</h3>
      <ul>
        <li><strong>User Stories:</strong> Short, simple descriptions of a feature from the user&apos;s perspective</li>
        <li><strong>Use Cases:</strong> Detailed scenarios describing interactions between users and the system</li>
        <li>Choose the right format based on project needs and audience</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Functional vs Non-functional Requirements</h3>
      <ul>
        <li><strong>Functional:</strong> What the system should do (features, behaviors, interactions)</li>
        <li><strong>Non-functional:</strong> How the system should perform (performance, security, usability, reliability)</li>
        <li>Document both types for a complete requirements set</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Acceptance Criteria</h3>
      <ul>
        <li>Define clear, testable conditions for requirement completion</li>
        <li>Align expectations between business, design, and engineering</li>
        <li>Reduce ambiguity and speed up validation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: User story with acceptance criteria
As a customer, I want to receive an email receipt after purchase so that I have a record of my transaction.

Acceptance Criteria:
- Email is sent automatically after successful payment
- Email contains order details and support contact
- Email is delivered within 5 minutes of purchase
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Requirements Engineering</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Defining project scope and deliverables</li>
          <li>Aligning stakeholders and development teams</li>
          <li>Supporting testing and quality assurance</li>
          <li>Managing changes and traceability</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Requirements engineering is critical for project success.  
        Master these techniques to ensure your solutions meet real business needs and deliver value.
      </p>
    </div>
  );
}