export default function SoftSkillsPmTpmBaContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Soft Skills for PM/TPM/BA</h2>
      <p className="text-gray-600">
        Soft skills are critical for product managers, technical program managers, and business analysts.  
        These skills enable you to lead teams, resolve conflicts, negotiate effectively, and build strong stakeholder relationships.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Soft Skills Matter?</h3>
        <p className="text-blue-700">
          Technical expertise alone is not enough—leadership, communication, and emotional intelligence drive project and product success.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Leadership Styles</h3>
      <ul>
        <li>Adapt your leadership style to team needs and situations</li>
        <li>Empower, motivate, and inspire others</li>
        <li>Lead by example and foster a culture of trust</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Negotiation</h3>
      <ul>
        <li>Find win-win solutions for stakeholders</li>
        <li>Balance competing priorities and constraints</li>
        <li>Use active listening and empathy to reach agreements</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Conflict Resolution</h3>
      <ul>
        <li>Identify sources of conflict early</li>
        <li>Facilitate open, respectful discussions</li>
        <li>Mediate disagreements and drive consensus</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Stakeholder Handling</h3>
      <ul>
        <li>Build trust and credibility with stakeholders</li>
        <li>Manage expectations and communicate clearly</li>
        <li>Engage stakeholders in decision-making and feedback</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Conflict resolution steps
1. Identify the issue and parties involved
2. Listen to all perspectives
3. Facilitate open discussion
4. Find common ground and agree on next steps
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Soft Skills</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Leading cross-functional teams</li>
          <li>Managing stakeholder relationships</li>
          <li>Resolving project and team conflicts</li>
          <li>Negotiating requirements, timelines, and resources</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Soft skills are essential for effective leadership and collaboration.  
        Master these skills to drive team success and deliver outstanding results in any PM, TPM, or BA role.
      </p>
    </div>
  );
}