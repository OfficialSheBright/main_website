export default function UsabilityTestingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Usability Testing</h2>
      <p className="text-gray-600">
        Usability testing evaluates how easily users can interact with your design.  
        It helps identify pain points, improve user experience, and validate design decisions before launch.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Usability Testing?</h3>
        <p className="text-blue-700">
          Testing with real users uncovers issues that designers and developers may overlook, leading to more effective and user-friendly products.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Types of Usability Testing</h3>
      <ul>
        <li><strong>Moderated:</strong> Facilitator guides users through tasks</li>
        <li><strong>Unmoderated:</strong> Users complete tasks independently</li>
        <li><strong>Remote:</strong> Testing conducted online or via video call</li>
        <li><strong>In-person:</strong> Testing in a physical location</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Test Planning</h3>
      <ul>
        <li>Define goals, scenarios, and success criteria</li>
        <li>Recruit representative users</li>
        <li>Prepare prototypes or live products for testing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Conducting Tests</h3>
      <ul>
        <li>Observe users as they complete tasks</li>
        <li>Record actions, feedback, and issues</li>
        <li>Ask follow-up questions for deeper insights</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Analyzing Results</h3>
      <ul>
        <li>Identify patterns and common pain points</li>
        <li>Prioritize issues by impact and frequency</li>
        <li>Recommend design improvements</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Usability test scenario
Task: Find and purchase a product on the website.
Success criteria: User completes purchase without assistance.
Metrics: Time taken, errors, user satisfaction.
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Usability Testing</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Improving website and app usability</li>
          <li>Validating design concepts and prototypes</li>
          <li>Reducing development and support costs</li>
          <li>Enhancing user satisfaction and retention</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Usability testing is essential for creating user-centered products.  
        Master these methods to deliver designs that are intuitive, efficient, and enjoyable.
      </p>
    </div>
  );
}