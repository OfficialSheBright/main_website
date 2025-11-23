export default function IxdPrinciplesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">IxD Principles</h2>
      <p className="text-gray-600">
        Interaction Design (IxD) principles guide the creation of intuitive, engaging, and effective user experiences.  
        They focus on how users interact with digital products, emphasizing usability, feedback, and delight.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why IxD Principles?</h3>
        <p className="text-blue-700">
          Applying IxD principles ensures interfaces are easy to use, responsive, and enjoyable, improving user satisfaction and product success.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Affordances</h3>
      <ul>
        <li>Design elements that suggest their function (e.g., buttons look clickable)</li>
        <li>Use visual cues to guide user actions</li>
        <li>Reduce ambiguity and increase discoverability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Feedback & Response</h3>
      <ul>
        <li>Provide immediate feedback for user actions (e.g., animations, sounds)</li>
        <li>Confirm successful interactions or signal errors</li>
        <li>Keep users informed and engaged</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Mapping</h3>
      <ul>
        <li>Align controls and actions with user expectations</li>
        <li>Use logical layouts and intuitive navigation</li>
        <li>Help users predict outcomes of their actions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Mental Models</h3>
      <ul>
        <li>Design interfaces that match users&apos; existing knowledge</li>
        <li>Leverage familiar patterns and conventions</li>
        <li>Reduce learning curve and cognitive load</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Microinteractions</h3>
      <ul>
        <li>Small, focused interactions (e.g., toggles, notifications)</li>
        <li>Enhance usability and delight through subtle feedback</li>
        <li>Support core tasks and reinforce brand personality</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Button affordance and feedback in CSS
.button {
  cursor: pointer;
  transition: background 0.2s;
}
.button:active {
  background: #2563eb;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of IxD Principles</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX design for web and mobile apps</li>
          <li>Interactive prototypes and usability testing</li>
          <li>Motion and feedback design</li>
          <li>Accessible and inclusive interfaces</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        IxD principles are essential for creating intuitive, engaging digital experiences.  
        Master these concepts to design interfaces that users love to interact with.
      </p>
    </div>
  );
}