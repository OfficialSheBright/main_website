export default function ProductStrategyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Strategy</h2>
      <p className="text-gray-600">
        Product strategy defines the vision, direction, and roadmap for a product.  
        It aligns teams on what to build, why it matters, and how to win in the market.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Strategy?</h3>
        <p className="text-blue-700">
          A clear product strategy helps teams focus on solving the right problems, prioritize effectively, and achieve product-market fit.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Identifying Problems vs Solutions</h3>
      <ul>
        <li>Start with understanding user pain points and unmet needs</li>
        <li>Validate problems before jumping to solutions</li>
        <li>Use research, interviews, and data to inform decisions</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Product Vision & Mission</h3>
      <ul>
        <li>Craft a compelling vision that inspires and guides the team</li>
        <li>Define a mission statement that clarifies purpose and impact</li>
        <li>Align vision and mission with company goals</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Market & Competitive Analysis</h3>
      <ul>
        <li>Analyze market size, trends, and customer segments</li>
        <li>Study competitors’ strengths, weaknesses, and positioning</li>
        <li>Identify opportunities for differentiation</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Product-Market Fit</h3>
      <ul>
        <li>Test solutions with real users and gather feedback</li>
        <li>Iterate quickly to refine value proposition</li>
        <li>Measure fit using retention, engagement, and growth metrics</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Product vision statement
"Empower small businesses to manage finances effortlessly and grow with confidence."
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Strategy</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Defining product direction and priorities</li>
          <li>Aligning teams and stakeholders</li>
          <li>Evaluating new opportunities and markets</li>
          <li>Achieving sustainable growth and differentiation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product strategy is the foundation for building successful products.  
        Master these concepts to set a clear direction, solve real problems, and win in the market.
      </p>
    </div>
  );
}