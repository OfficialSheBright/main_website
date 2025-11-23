export default function AnalyticsDashboardsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Analytics Dashboards</h2>
      <p className="text-gray-600">
        Analytics dashboards provide interactive visualizations and insights from data, enabling informed decision-making.  
        Building effective dashboards requires understanding data sources, visualization tools, and user needs.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Analytics Dashboards?</h3>
        <p className="text-blue-700">
          Dashboards transform raw data into actionable insights, supporting business intelligence, monitoring, and reporting.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Dashboard Design Principles</h3>
      <ul>
        <li>Clarity and simplicity in layout</li>
        <li>Use of appropriate chart types (bar, line, pie, etc.)</li>
        <li>Highlight key metrics and trends</li>
        <li>Responsive and interactive elements</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Sources & Integration</h3>
      <ul>
        <li>Connect to databases, data warehouses, and APIs</li>
        <li>ETL/ELT processes for preparing dashboard data</li>
        <li>Real-time vs batch data updates</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Visualization Tools</h3>
      <ul>
        <li>Popular tools: Power BI, Tableau, Grafana, Google Data Studio</li>
        <li>Custom dashboards with React, D3.js, Plotly</li>
        <li>Embed dashboards in web apps or portals</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Monitoring & Alerts</h3>
      <ul>
        <li>Set up alerts for key metrics and thresholds</li>
        <li>Automate reporting and notifications</li>
        <li>Integrate with email, Slack, or other channels</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Plotly dashboard in Python
import plotly.express as px
df = px.data.gapminder()
fig = px.line(df, x="year", y="lifeExp", color="country")
fig.show()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Analytics Dashboards</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Business intelligence and reporting</li>
          <li>Operational monitoring</li>
          <li>Data-driven decision making</li>
          <li>Performance tracking and optimization</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Analytics dashboards are essential for visualizing and understanding data.  
        Master dashboard design and integration to deliver impactful insights for users and organizations.
      </p>
    </div>
  );
}