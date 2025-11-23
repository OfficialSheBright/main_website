export default function ProductStrategyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Product Strategy</h2>
      <p className="text-gray-600">
        Product strategy defines the vision, goals, and roadmap for successful products.  
        It aligns design, business, and user needs to deliver value and achieve market fit.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Product Strategy?</h3>
        <p className="text-blue-700">
          A clear strategy guides decision-making, prioritizes features, and ensures resources are focused on impactful outcomes.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Market Research</h3>
      <ul>
        <li>Analyze competitors, trends, and user needs</li>
        <li>Identify opportunities and gaps in the market</li>
        <li>Gather insights to inform product direction</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Product-Market Fit</h3>
      <ul>
        <li>Define the unique value your product offers</li>
        <li>Validate solutions with real users</li>
        <li>Iterate based on feedback and metrics</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Defining MVP</h3>
      <ul>
        <li>Prioritize core features for launch</li>
        <li>Focus on solving key user problems</li>
        <li>Test, learn, and improve before scaling</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Business Model Basics</h3>
      <ul>
        <li>Outline revenue streams and cost structure</li>
        <li>Identify target customers and channels</li>
        <li>Align design decisions with business goals</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple MVP feature list
- User registration and login
- Core product functionality
- Basic analytics dashboard
- Feedback form
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Product Strategy</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Launching new products and features</li>
          <li>Improving existing products</li>
          <li>Aligning teams around shared goals</li>
          <li>Driving business growth and innovation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Product strategy is essential for building successful, user-centered products.  
        Master these concepts to deliver value and achieve lasting impact in the market.
      </p>
    </div>
  );
}