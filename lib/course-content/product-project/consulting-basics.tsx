export default function ConsultingBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Consulting Basics</h2>
      <p className="text-gray-600">
        Consulting basics introduce the core principles, delivery models, and client management skills needed to succeed in technology and business consulting.  
        Mastering these fundamentals prepares you to deliver value to clients and manage successful consulting engagements.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Consulting Basics?</h3>
        <p className="text-blue-700">
          Understanding how consulting firms operate and how to manage client relationships is essential for delivering impactful solutions and building a strong consulting career.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. How Consulting Firms Work</h3>
      <ul>
        <li>Project-based and retainer-based engagements</li>
        <li>Consultant roles: analyst, associate, manager, partner</li>
        <li>Delivering value through expertise and problem-solving</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Delivery Models</h3>
      <ul>
        <li>Onsite: Consultants work at the client location</li>
        <li>Offshore: Remote delivery from another country</li>
        <li>Hybrid: Combination of onsite and offshore teams</li>
        <li>Choosing the right model based on client needs and project scope</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Client Management Fundamentals</h3>
      <ul>
        <li>Building trust and credibility with clients</li>
        <li>Managing expectations and communication</li>
        <li>Handling feedback, objections, and escalations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Writing Proposals & SOWs</h3>
      <ul>
        <li>Define project objectives, scope, and deliverables</li>
        <li>Outline timelines, milestones, and responsibilities</li>
        <li>Set clear terms for pricing, payment, and change management</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: SOW (Statement of Work) outline
1. Project Overview
2. Objectives & Scope
3. Deliverables
4. Timeline & Milestones
5. Roles & Responsibilities
6. Pricing & Payment Terms
7. Change Management
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Consulting Basics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Managing client projects and relationships</li>
          <li>Drafting proposals and SOWs</li>
          <li>Delivering value as a consultant or advisor</li>
          <li>Working in or with consulting firms</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Consulting basics are essential for anyone working in or with consulting firms.  
        Master these skills to deliver successful projects and build lasting client relationships.
      </p>
    </div>
  );
}