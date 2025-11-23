export default function FreelanceEmploymentSkillsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Freelance & Employment Skills</h2>
      <p className="text-gray-600">
        Freelance and employment skills are essential for building a successful career in design.  
        Mastering project scoping, contracts, and client communication helps you thrive in both freelance and full-time roles.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why These Skills Matter?</h3>
        <p className="text-blue-700">
          Professional skills ensure smooth client relationships, clear expectations, and sustainable business growth.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Scoping Projects</h3>
      <ul>
        <li>Define project goals, deliverables, and timelines</li>
        <li>Estimate effort, resources, and budget</li>
        <li>Set clear expectations with clients or employers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Design Contracts</h3>
      <ul>
        <li>Draft agreements covering scope, payment, and IP rights</li>
        <li>Include revision policies and deadlines</li>
        <li>Protect yourself and your client legally</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Communication & Client Management</h3>
      <ul>
        <li>Maintain regular updates and feedback cycles</li>
        <li>Handle negotiations, feedback, and conflict professionally</li>
        <li>Build long-term relationships and referrals</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Basic contract clause for design work
Scope: Designer will deliver 3 logo concepts and 2 rounds of revisions.
Payment: 50% upfront, 50% on completion.
IP: Client owns final deliverables after full payment.
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Freelance & Employment Skills</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Freelance project management</li>
          <li>Full-time design roles</li>
          <li>Client acquisition and retention</li>
          <li>Professional networking and growth</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Freelance and employment skills are vital for a sustainable design career.  
        Master these practices to deliver value, build trust, and grow professionally.
      </p>
    </div>
  );
}