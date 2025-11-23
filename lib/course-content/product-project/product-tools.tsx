export default function ProductToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Tools</h2>
      <p className="text-gray-600">
        Product tools help teams collaborate, manage requirements, analyze data, and deliver better products faster.  
        Mastering these tools is essential for modern product managers, analysts, and cross-functional teams.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Tools?</h3>
        <p className="text-blue-700">
          The right tools streamline workflows, improve visibility, and enable data-driven decisions throughout the product lifecycle.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Figma</h3>
      <ul>
        <li>Collaborative design and prototyping platform</li>
        <li>Create wireframes, mockups, and interactive prototypes</li>
        <li>Facilitate real-time feedback and design handoff</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mixpanel / Amplitude</h3>
      <ul>
        <li>Product analytics platforms for tracking user behavior</li>
        <li>Analyze funnels, retention, and engagement metrics</li>
        <li>Run experiments and measure feature impact</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Notion</h3>
      <ul>
        <li>All-in-one workspace for docs, wikis, and project management</li>
        <li>Organize product specs, roadmaps, and meeting notes</li>
        <li>Collaborate asynchronously with distributed teams</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Productboard</h3>
      <ul>
        <li>Product management platform for prioritizing features</li>
        <li>Collect user feedback and align on product strategy</li>
        <li>Visualize roadmaps and communicate plans to stakeholders</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Product tool workflow
1. Design prototype in Figma
2. Collect feedback and iterate
3. Document requirements in Notion
4. Prioritize features in Productboard
5. Track user analytics in Mixpanel/Amplitude
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing and prototyping new features</li>
          <li>Managing product documentation and roadmaps</li>
          <li>Analyzing user data and product performance</li>
          <li>Aligning teams and stakeholders on priorities</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product tools are essential for efficient, collaborative, and data-driven product management.  
        Master these platforms to accelerate delivery and build products users love.
      </p>
    </div>
  );
}