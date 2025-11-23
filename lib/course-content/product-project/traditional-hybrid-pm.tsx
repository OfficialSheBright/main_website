export default function TraditionalHybridPmContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Traditional & Hybrid Project Management</h2>
      <p className="text-gray-600">
        Traditional (waterfall) and hybrid project management approaches provide structured methods for planning, executing, and delivering projects.  
        Understanding these models helps teams choose the right approach for their context and goals.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Traditional & Hybrid PM?</h3>
        <p className="text-blue-700">
          Not all projects fit agile methods—traditional and hybrid approaches offer predictability, control, and flexibility for complex or regulated environments.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Waterfall Model</h3>
      <ul>
        <li>Linear, sequential phases: requirements, design, implementation, testing, deployment</li>
        <li>Emphasizes upfront planning and documentation</li>
        <li>Best for projects with stable, well-defined requirements</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Hybrid Approaches</h3>
      <ul>
        <li>Combine elements of waterfall and agile methodologies</li>
        <li>Use structured planning with iterative delivery</li>
        <li>Adapt to changing requirements while maintaining control</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. When to Use Each Approach</h3>
      <ul>
        <li><strong>Traditional:</strong> Fixed scope, regulatory compliance, high predictability</li>
        <li><strong>Hybrid:</strong> Evolving requirements, need for both control and flexibility</li>
        <li>Assess project size, complexity, and stakeholder needs</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Key Artifacts</h3>
      <ul>
        <li>Project Charter, Work Breakdown Structure (WBS), Gantt charts</li>
        <li>Requirements documents, risk registers, status reports</li>
        <li>Hybrid: combine agile boards with traditional documentation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Waterfall project phases
1. Requirements
2. Design
3. Implementation
4. Testing
5. Deployment
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Traditional & Hybrid PM</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Large-scale infrastructure and construction projects</li>
          <li>Regulated industries (finance, healthcare, government)</li>
          <li>Projects with both fixed and evolving requirements</li>
          <li>Blending agile delivery with formal project controls</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Traditional and hybrid project management approaches offer valuable tools for delivering complex projects.  
        Master these models to choose the best fit for your team and project needs.
      </p>
    </div>
  );
}