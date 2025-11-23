export default function DesigningForPlatformsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Designing for Platforms</h2>
      <p className="text-gray-600">
        Designing for platforms means adapting interactions and visuals for web, mobile, AR/VR, and voice interfaces.  
        Each platform has unique constraints, opportunities, and user expectations.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Platform-Specific Design?</h3>
        <p className="text-blue-700">
          Platform-specific design ensures usability, consistency, and optimal user experience across devices and contexts.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Web Interactions</h3>
      <ul>
        <li>Responsive layouts for different screen sizes</li>
        <li>Mouse, keyboard, and touch support</li>
        <li>Accessibility and performance considerations</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mobile Gestures</h3>
      <ul>
        <li>Tap, swipe, pinch, and long-press interactions</li>
        <li>Design for thumb zones and reachability</li>
        <li>Follow platform guidelines (iOS, Android)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. AR/VR Interactions</h3>
      <ul>
        <li>Spatial navigation and object manipulation</li>
        <li>Design for immersion and presence</li>
        <li>Consider hardware constraints (headsets, controllers)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Voice UI</h3>
      <ul>
        <li>Conversational flows and feedback</li>
        <li>Design for clarity, brevity, and error handling</li>
        <li>Integrate with visual cues and multimodal experiences</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: CSS media query for responsive web design
@media (max-width: 600px) {
  .container {
    flex-direction: column;
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Platform Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile app development</li>
          <li>AR/VR experiences and games</li>
          <li>Voice assistants and smart devices</li>
          <li>Cross-platform branding and UI systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Designing for platforms is essential for delivering seamless, engaging experiences.  
        Master these principles to create adaptable and user-friendly products across devices.
      </p>
    </div>
  );
}