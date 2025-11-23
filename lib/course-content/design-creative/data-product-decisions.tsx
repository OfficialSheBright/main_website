export default function DataProductDecisionsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data & Product Decisions</h2>
      <p className="text-gray-600">
        Data-driven product decisions help teams optimize features, improve user experience, and achieve business goals.  
        Understanding metrics, analytics tools, and experimentation frameworks is essential for modern product design.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data Matters?</h3>
        <p className="text-blue-700">
          Data enables objective decision-making, validates assumptions, and guides product strategy for better outcomes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Key Metrics</h3>
      <ul>
        <li>DAU (Daily Active Users), MAU (Monthly Active Users)</li>
        <li>Conversion rate, churn rate, retention</li>
        <li>Feature adoption and engagement</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Product Analytics Tools</h3>
      <ul>
        <li>Mixpanel: Track user actions and funnels</li>
        <li>Google Analytics 4 (GA4): Monitor traffic, events, and user journeys</li>
        <li>Amplitude: Analyze cohorts, retention, and product usage</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Experimentation Frameworks</h3>
      <ul>
        <li>A/B testing for feature validation</li>
        <li>Multivariate testing for UI/UX optimization</li>
        <li>Iterative cycles for continuous improvement</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Setting up an event in Mixpanel (JavaScript)
mixpanel.track('Button Clicked', {
  button_name: 'Sign Up',
  page: 'Landing'
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data & Product Decisions</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Feature prioritization and roadmap planning</li>
          <li>Improving user retention and engagement</li>
          <li>Optimizing conversion and onboarding flows</li>
          <li>Validating design and product hypotheses</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data-driven decisions are essential for successful product design.  
        Master these concepts to build impactful, user-centered products.
      </p>
    </div>
  );
}