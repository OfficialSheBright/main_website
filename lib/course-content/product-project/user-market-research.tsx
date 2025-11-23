export default function UserMarketResearchContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">User & Market Research</h2>
      <p className="text-gray-600">
        User and market research are foundational for building products that solve real problems and succeed in the market.  
        These practices help teams understand customer needs, market trends, and competitive landscapes.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why User & Market Research?</h3>
        <p className="text-blue-700">
          Research reduces risk, uncovers opportunities, and ensures your product delivers value to the right audience.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. User Research Methods</h3>
      <ul>
        <li>Interviews and surveys to gather qualitative and quantitative insights</li>
        <li>User observation and usability testing</li>
        <li>Persona development and journey mapping</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Market Analysis</h3>
      <ul>
        <li>Assess market size, growth, and trends</li>
        <li>Identify target segments and customer needs</li>
        <li>Analyze competitors and positioning</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Voice of Customer (VoC)</h3>
      <ul>
        <li>Collect feedback through reviews, support tickets, and social media</li>
        <li>Run focus groups and advisory boards</li>
        <li>Integrate VoC insights into product planning</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Competitive Analysis</h3>
      <ul>
        <li>Benchmark features, pricing, and user experience</li>
        <li>Identify strengths, weaknesses, opportunities, and threats (SWOT)</li>
        <li>Track competitor launches and market moves</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple persona template
Name: Priya, Age: 29, Role: Marketing Manager
Goals: Improve campaign ROI, automate reporting
Pain Points: Manual data entry, lack of insights
Preferred Tools: Google Analytics, Excel
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of User & Market Research</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Validating product ideas and features</li>
          <li>Prioritizing roadmap based on real needs</li>
          <li>Positioning and messaging for target segments</li>
          <li>Reducing risk of product failure</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        User and market research are essential for building products that win.  
        Master these practices to deeply understand your users and market, and to drive product success.
      </p>
    </div>
  );
}