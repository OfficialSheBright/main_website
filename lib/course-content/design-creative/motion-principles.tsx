export default function MotionPrinciplesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Motion Principles</h2>
      <p className="text-gray-600">
        Motion principles are the foundation of effective animation and interaction design.  
        They help create natural, engaging, and expressive movement in digital products and media.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Motion Principles?</h3>
        <p className="text-blue-700">
          Applying motion principles brings interfaces and graphics to life, improves usability, and adds emotional impact to experiences.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Timing & Spacing</h3>
      <ul>
        <li>Control the speed and rhythm of movement</li>
        <li>Use spacing to create smooth or dynamic transitions</li>
        <li>Balance anticipation and payoff for engaging motion</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Ease-In, Ease-Out</h3>
      <ul>
        <li>Start and end movements gradually for natural feel</li>
        <li>Apply easing curves to transitions and animations</li>
        <li>Reduce abrupt changes and improve flow</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Anticipation, Squash & Stretch</h3>
      <ul>
        <li>Use anticipation to prepare users for actions</li>
        <li>Apply squash and stretch for expressive, lively motion</li>
        <li>Enhance feedback and personality in interactions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Visual Rhythm</h3>
      <ul>
        <li>Repeat patterns and movement for consistency</li>
        <li>Guide attention and create harmony in animations</li>
        <li>Support storytelling and user flow</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: CSS keyframes for ease-in/ease-out animation
@keyframes bounce {
  0%   { transform: translateY(0); }
  20%  { transform: translateY(-30px); }
  50%  { transform: translateY(0); }
  100% { transform: translateY(0); }
}
.bounce {
  animation: bounce 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Motion Principles</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX animation and microinteractions</li>
          <li>Motion graphics and explainer videos</li>
          <li>Game and character animation</li>
          <li>Storytelling and branding</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Motion principles are essential for expressive, usable, and delightful digital experiences.  
        Master these fundamentals to elevate your animation and interaction design.
      </p>
    </div>
  );
}