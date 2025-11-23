export default function CreativeProcessContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Creative Process</h2>
      <p className="text-gray-600">
        The creative process is a structured approach to solving design problems and generating innovative ideas.  
        It combines empathy, research, ideation, and iteration to deliver impactful solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why the Creative Process?</h3>
        <p className="text-blue-700">
          Following a creative process helps teams understand user needs, explore possibilities, and refine concepts for maximum impact.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Design Thinking</h3>
      <ul>
        <li>Empathize: Understand users and their challenges</li>
        <li>Define: Frame the problem clearly</li>
        <li>Ideate: Generate a wide range of ideas</li>
        <li>Prototype: Build quick models to test concepts</li>
        <li>Test: Gather feedback and iterate</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Double Diamond Process</h3>
      <ul>
        <li>Discover: Research and explore the problem space</li>
        <li>Define: Synthesize findings and focus on key issues</li>
        <li>Develop: Ideate and prototype solutions</li>
        <li>Deliver: Refine and implement the final solution</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Empathy Mapping</h3>
      <ul>
        <li>Visualize what users say, think, do, and feel</li>
        <li>Identify pain points and motivations</li>
        <li>Guide design decisions with user insights</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Creative Brainstorming Methods</h3>
      <ul>
        <li>Mind mapping, sketching, and rapid ideation</li>
        <li>SCAMPER, &quot;How Might We&quot; questions</li>
        <li>Collaborative workshops and feedback sessions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: "How Might We" brainstorming prompt
How might we make onboarding easier for new users?
How might we reduce friction in checkout flow?
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of the Creative Process</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Product and service design</li>
          <li>Branding and visual identity</li>
          <li>UX/UI and interaction design</li>
          <li>Innovation workshops and team projects</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The creative process is essential for effective design and innovation.  
        Master these steps to deliver user-centered, impactful solutions.
      </p>
    </div>
  );
}