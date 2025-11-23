export default function UxStrategyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">UX Strategy</h2>
      <p className="text-gray-600">
        UX strategy aligns user experience goals with business objectives, ensuring products are both usable and valuable.  
        It combines research, vision, and planning to guide design decisions and deliver measurable impact.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why UX Strategy?</h3>
        <p className="text-blue-700">
          A strong UX strategy helps teams prioritize user needs, set clear goals, and create cohesive experiences across products and channels.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Vision & Goals</h3>
      <ul>
        <li>Define the desired user experience and business outcomes</li>
        <li>Set measurable objectives for usability, engagement, and satisfaction</li>
        <li>Align stakeholders around a shared vision</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Research & Insights</h3>
      <ul>
        <li>Gather user data through interviews, surveys, and analytics</li>
        <li>Identify pain points, opportunities, and market trends</li>
        <li>Translate insights into actionable design priorities</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Roadmapping & Planning</h3>
      <ul>
        <li>Develop a UX roadmap with key milestones and deliverables</li>
        <li>Prioritize features and improvements based on impact</li>
        <li>Plan for iterative testing and refinement</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Measurement & KPIs</h3>
      <ul>
        <li>Track usability metrics, conversion rates, and user satisfaction</li>
        <li>Use data to validate design decisions and guide future work</li>
        <li>Report progress to stakeholders regularly</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: UX strategy KPI list
- Task success rate
- Time on task
- Net Promoter Score (NPS)
- Conversion rate
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of UX Strategy</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Product and feature planning</li>
          <li>Cross-functional team alignment</li>
          <li>Continuous improvement and iteration</li>
          <li>Business growth and user retention</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        UX strategy is essential for delivering user-centered, successful products.  
        Master these practices to align design with business goals and drive lasting impact.
      </p>
    </div>
  );
}