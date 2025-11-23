export default function InteractionToolingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Interaction Tooling</h2>
      <p className="text-gray-600">
        Interaction tooling enables designers to create, test, and refine interactive experiences.  
        Mastering these tools helps bring motion, feedback, and microinteractions to life in digital products.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Interaction Tools?</h3>
        <p className="text-blue-700">
          These tools accelerate prototyping, improve communication with developers, and allow for rapid iteration of interactive concepts.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Framer Interactions</h3>
      <ul>
        <li>Design and prototype advanced interactions and animations</li>
        <li>Use code and visual tools for custom behaviors</li>
        <li>Test transitions, gestures, and feedback in real time</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. ProtoPie Interactions</h3>
      <ul>
        <li>Create high-fidelity prototypes with logic and variables</li>
        <li>Simulate device sensors and multi-screen flows</li>
        <li>Share interactive prototypes for user testing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Lottie Animations</h3>
      <ul>
        <li>Export lightweight, scalable animations for web and mobile</li>
        <li>Integrate After Effects animations using JSON files</li>
        <li>Enhance UI with animated icons, loaders, and microinteractions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Using Lottie animation in React
import Lottie from 'lottie-react';
import animationData from './animation.json';
<Lottie animationData={animationData} loop={true} />
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Interaction Tooling</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Prototyping interactive UI/UX concepts</li>
          <li>Motion design for apps and websites</li>
          <li>Developer handoff for complex interactions</li>
          <li>User testing and feedback collection</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Interaction tooling is essential for modern digital design.  
        Master these platforms to create, test, and deliver engaging interactive experiences.
      </p>
    </div>
  );
}