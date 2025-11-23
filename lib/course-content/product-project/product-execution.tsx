export default function ProductExecutionContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Execution</h2>
      <p className="text-gray-600">
        Product execution is about turning strategy and plans into real, working products.  
        It involves close collaboration with engineering, managing agile processes, and tracking progress with clear metrics.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Execution?</h3>
        <p className="text-blue-700">
          Effective execution bridges the gap between vision and delivery, ensuring teams build the right product, on time and at quality.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Working with Engineering</h3>
      <ul>
        <li>Align on goals, priorities, and technical constraints</li>
        <li>Facilitate clear communication between product and engineering</li>
        <li>Support engineers by clarifying requirements and removing blockers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Agile Ceremonies</h3>
      <ul>
        <li>Participate in sprint planning, standups, reviews, and retrospectives</li>
        <li>Ensure backlog is prioritized and ready for each sprint</li>
        <li>Foster a culture of continuous improvement</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Sprint Planning & Grooming</h3>
      <ul>
        <li>Break down features into actionable user stories and tasks</li>
        <li>Estimate effort and set realistic sprint goals</li>
        <li>Refine backlog items based on feedback and changing priorities</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Tracking KPIs</h3>
      <ul>
        <li>Define and monitor key performance indicators (KPIs)</li>
        <li>Track progress, quality, and delivery against goals</li>
        <li>Use data to inform decisions and adjust plans as needed</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Common product KPIs
- Sprint velocity
- Feature completion rate
- Bug count and resolution time
- User adoption and engagement
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Execution</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Delivering new features and improvements</li>
          <li>Managing agile product teams</li>
          <li>Tracking progress and quality in real time</li>
          <li>Aligning delivery with business goals</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product execution is where plans become reality.  
        Master these practices to lead teams, deliver value, and achieve product success.
      </p>
    </div>
  );
}