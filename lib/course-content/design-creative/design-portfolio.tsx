export default function DesignPortfolioContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Design Portfolio</h2>
      <p className="text-gray-600">
        A design portfolio showcases your skills, process, and creative thinking.  
        It is essential for landing jobs, freelance work, and building your professional brand.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Build a Portfolio?</h3>
        <p className="text-blue-700">
          Portfolios demonstrate your expertise, approach to problem-solving, and ability to deliver real-world results.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Case Studies</h3>
      <ul>
        <li>Showcase end-to-end design projects</li>
        <li>Highlight challenges, solutions, and impact</li>
        <li>Include visuals, process, and outcomes</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Process Documentation</h3>
      <ul>
        <li>Explain your design thinking and workflow</li>
        <li>Share sketches, wireframes, prototypes, and iterations</li>
        <li>Discuss feedback, testing, and refinements</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Visual Presentation</h3>
      <ul>
        <li>Curate your best work with high-quality visuals</li>
        <li>Organize projects for clarity and impact</li>
        <li>Use consistent branding and layout</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Portfolio case study structure
## Project Overview
## Problem & Goals
## Process & Approach
## Design Solutions
## Results & Impact
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Design Portfolios</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Job applications and interviews</li>
          <li>Freelance and client work</li>
          <li>Personal branding and networking</li>
          <li>Continuous learning and reflection</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        A strong design portfolio is your gateway to opportunities.  
        Master portfolio building to showcase your skills and stand out in the creative industry.
      </p>
    </div>
  );
}