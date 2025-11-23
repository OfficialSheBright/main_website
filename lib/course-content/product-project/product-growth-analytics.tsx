export default function ProductGrowthAnalyticsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Growth & Analytics</h2>
      <p className="text-gray-600">
        Product growth and analytics focus on measuring, analyzing, and optimizing how users discover, adopt, and engage with your product.  
        Mastering these concepts helps teams drive user acquisition, retention, and long-term business success.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Growth & Analytics?</h3>
        <p className="text-blue-700">
          Data-driven decisions enable teams to identify opportunities, test hypotheses, and scale products effectively in competitive markets.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Key Metrics</h3>
      <ul>
        <li>DAU/MAU: Daily/Monthly Active Users</li>
        <li>Churn: Percentage of users who stop using the product</li>
        <li>Activation: Users reaching a key milestone or value moment</li>
        <li>Retention: Users returning over time</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Funnel Analysis</h3>
      <ul>
        <li>Track user journey from acquisition to conversion</li>
        <li>Identify drop-off points and optimize steps</li>
        <li>Visualize funnels to improve onboarding and engagement</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. A/B Testing</h3>
      <ul>
        <li>Run experiments to compare features or designs</li>
        <li>Measure impact on key metrics</li>
        <li>Use statistical significance to guide decisions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cohort Analysis</h3>
      <ul>
        <li>Group users by signup date or behavior</li>
        <li>Analyze retention and engagement over time</li>
        <li>Identify trends and opportunities for improvement</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Experimentation Frameworks</h3>
      <ul>
        <li>Set clear hypotheses and success criteria</li>
        <li>Design, run, and analyze experiments systematically</li>
        <li>Document learnings and iterate quickly</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple funnel analysis steps
1. Visit landing page
2. Sign up for account
3. Complete onboarding
4. Perform key action (e.g., first purchase)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Growth & Analytics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Improving user onboarding and retention</li>
          <li>Optimizing product features and UX</li>
          <li>Scaling acquisition channels and campaigns</li>
          <li>Driving data-informed product decisions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product growth and analytics are essential for building successful, scalable products.  
        Master these practices to unlock insights, drive engagement, and achieve sustainable growth.
      </p>
    </div>
  );
}