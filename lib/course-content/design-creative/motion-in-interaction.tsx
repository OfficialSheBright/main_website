export default function MotionInInteractionContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Motion in Interaction</h2>
      <p className="text-gray-600">
        Motion in interaction design brings interfaces to life, guiding users, providing feedback, and enhancing usability.  
        Thoughtful motion creates engaging, intuitive, and delightful experiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Motion Matters?</h3>
        <p className="text-blue-700">
          Motion helps users understand changes, transitions, and actions, making digital products feel responsive and natural.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Easing & Timing</h3>
      <ul>
        <li>Use easing curves for natural movement (ease-in, ease-out, cubic-bezier)</li>
        <li>Control timing to match user expectations and context</li>
        <li>Balance speed for clarity and delight</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Transitions</h3>
      <ul>
        <li>Animate changes between states (e.g., opening menus, switching tabs)</li>
        <li>Guide attention and reduce cognitive load</li>
        <li>Use subtle transitions for smooth navigation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Loading States</h3>
      <ul>
        <li>Use motion to indicate progress and keep users engaged</li>
        <li>Design spinners, skeleton screens, and animated loaders</li>
        <li>Provide feedback during wait times</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Gesture-Based Interaction</h3>
      <ul>
        <li>Animate responses to swipes, taps, and drags</li>
        <li>Use motion to reinforce direct manipulation</li>
        <li>Design for mobile and touch interfaces</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: CSS transition for button hover
.button {
  transition: background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.button:hover {
  background: #2563eb;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Motion in Interaction</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX animations and microinteractions</li>
          <li>Mobile app gestures and transitions</li>
          <li>Loading indicators and feedback</li>
          <li>Interactive prototypes and demos</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Motion in interaction design enhances usability and delight.  
        Master these principles to create engaging, intuitive digital experiences.
      </p>
    </div>
  );
}