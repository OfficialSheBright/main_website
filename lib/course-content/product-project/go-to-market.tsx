export default function GoToMarketContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Go-To-Market (GTM)</h2>
      <p className="text-gray-600">
        Go-To-Market (GTM) strategy is the plan for launching a product, reaching target customers, and achieving business goals.  
        A strong GTM ensures your product is positioned, priced, and promoted effectively for maximum impact.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why GTM Matters?</h3>
        <p className="text-blue-700">
          A well-executed GTM strategy drives adoption, accelerates growth, and helps you outpace competitors in the market.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Launch Planning</h3>
      <ul>
        <li>Define launch goals, KPIs, and success metrics</li>
        <li>Coordinate cross-functional teams (product, marketing, sales, support)</li>
        <li>Develop a detailed launch timeline and checklist</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Positioning & Messaging</h3>
      <ul>
        <li>Craft a compelling value proposition</li>
        <li>Identify target customer segments and personas</li>
        <li>Develop key messages and differentiators</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Pricing Frameworks</h3>
      <ul>
        <li>Analyze competitor pricing and market expectations</li>
        <li>Choose a pricing model (subscription, freemium, one-time, tiered)</li>
        <li>Test and iterate on pricing strategies</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Product Lifecycle & Sunset Strategies</h3>
      <ul>
        <li>Plan for product growth, maturity, and eventual sunset</li>
        <li>Monitor adoption and gather user feedback</li>
        <li>Communicate changes and end-of-life plans to customers</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: GTM launch checklist (outline)
1. Define launch goals and KPIs
2. Finalize messaging and positioning
3. Prepare marketing and sales collateral
4. Train internal teams
5. Execute launch plan
6. Monitor results and iterate
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of GTM Strategy</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Launching new products or features</li>
          <li>Entering new markets or customer segments</li>
          <li>Repositioning existing products</li>
          <li>Managing product end-of-life transitions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Go-To-Market strategy is critical for successful product launches and sustained growth.  
        Master these practices to maximize your product’s impact and business success.
      </p>
    </div>
  );
}