export default function BusinessTechnologyFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Business & Technology Fundamentals</h2>
      <p className="text-gray-600">
        Business and technology fundamentals provide the essential knowledge needed to understand how organizations operate, generate revenue, and leverage technology for growth.  
        Mastering these basics is crucial for effective product, project, and program management.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Business & Technology Fundamentals?</h3>
        <p className="text-blue-700">
          Understanding business models and technology basics helps you make informed decisions, communicate with stakeholders, and align solutions with organizational goals.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Business Models</h3>
      <ul>
        <li>Understand how companies create, deliver, and capture value</li>
        <li>Common models: B2B, B2C, SaaS, marketplace, subscription</li>
        <li>Key components: value proposition, channels, customer segments</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Revenue Streams</h3>
      <ul>
        <li>Identify sources of income: sales, subscriptions, ads, licensing</li>
        <li>Understand pricing strategies and monetization models</li>
        <li>Track and analyze revenue performance</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Market Structure</h3>
      <ul>
        <li>Analyze market size, competition, and customer needs</li>
        <li>Understand market segmentation and positioning</li>
        <li>Monitor trends and adapt to changes in the market</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Technical Literacy</h3>
      <ul>
        <li>APIs: Enable integration between systems and services</li>
        <li>Cloud: Scalable, on-demand computing resources (AWS, Azure, GCP)</li>
        <li>Databases: Store and manage structured data (SQL, NoSQL)</li>
        <li>Architecture basics: Frontend, backend, client-server, microservices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple API request (JavaScript)
fetch('https://api.example.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Business & Technology Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Evaluating new product opportunities</li>
          <li>Communicating with technical and business stakeholders</li>
          <li>Aligning product features with business goals</li>
          <li>Understanding the impact of technology choices</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Business and technology fundamentals are the foundation for effective management and decision-making.  
        Master these concepts to drive value and innovation in any organization.
      </p>
    </div>
  );
}