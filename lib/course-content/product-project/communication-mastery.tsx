export default function CommunicationMasteryContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Communication Mastery</h2>
      <p className="text-gray-600">
        Communication mastery is essential for product managers, technical program managers, and business analysts.  
        Effective communication ensures alignment, clarity, and successful collaboration across teams and stakeholders.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Communication Mastery?</h3>
        <p className="text-blue-700">
          Mastering communication helps you write clear specs, tell compelling stories, report to executives, and run productive meetings—key skills for leadership and project success.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Writing Clear Specs</h3>
      <ul>
        <li>Use concise, unambiguous language</li>
        <li>Define requirements, acceptance criteria, and user stories</li>
        <li>Structure documents for easy reference and updates</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Storytelling for Technical Audiences</h3>
      <ul>
        <li>Frame problems and solutions with context</li>
        <li>Use data and visuals to support your narrative</li>
        <li>Adapt your message for different audiences (engineers, execs, users)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Executive Reporting</h3>
      <ul>
        <li>Summarize key points and recommendations</li>
        <li>Highlight risks, blockers, and decisions needed</li>
        <li>Use dashboards and status reports for visibility</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Running Meetings Effectively</h3>
      <ul>
        <li>Set clear agendas and objectives</li>
        <li>Facilitate participation and decision-making</li>
        <li>Document action items and follow-ups</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Meeting agenda template
1. Objective
2. Key topics
3. Discussion points
4. Decisions needed
5. Action items & owners
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Communication Mastery</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Writing specs and documentation</li>
          <li>Presenting to executives and stakeholders</li>
          <li>Facilitating team meetings and workshops</li>
          <li>Reporting project status and outcomes</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Communication mastery is a core leadership skill.  
        Master these techniques to drive alignment, clarity, and results in any product or project environment.
      </p>
    </div>
  );
}