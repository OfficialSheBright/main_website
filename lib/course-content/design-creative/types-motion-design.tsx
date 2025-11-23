export default function TypesMotionDesignContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Types of Motion Design</h2>
      <p className="text-gray-600">
        Motion design spans a variety of styles and applications, from subtle UI animations to cinematic visual effects.  
        Understanding the types of motion design helps you choose the right approach for your project.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Explore Motion Design Types?</h3>
        <p className="text-blue-700">
          Each type of motion design serves different goals—guiding users, telling stories, or adding delight to digital experiences.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. UI/UX Animation</h3>
      <ul>
        <li>Microinteractions, transitions, and feedback in apps and websites</li>
        <li>Enhances usability and guides user attention</li>
        <li>Tools: Figma, Framer, Lottie</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Motion Graphics</h3>
      <ul>
        <li>Animated text, shapes, and illustrations for videos and presentations</li>
        <li>Used in explainer videos, ads, and social media</li>
        <li>Tools: After Effects, Blender, Cinema4D</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Character Animation</h3>
      <ul>
        <li>Animating characters for games, films, and interactive media</li>
        <li>Focus on movement, expression, and storytelling</li>
        <li>Tools: Blender, Spine, After Effects</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. 3D Animation</h3>
      <ul>
        <li>Animating objects and environments in three dimensions</li>
        <li>Used in games, AR/VR, and cinematic effects</li>
        <li>Tools: Blender, Cinema4D, Maya</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Data Visualization Animation</h3>
      <ul>
        <li>Animating charts, graphs, and infographics</li>
        <li>Helps communicate complex data clearly</li>
        <li>Tools: After Effects, D3.js, Flourish</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Lottie animation for UI feedback (React)
import Lottie from 'lottie-react';
import animationData from './success.json';
<Lottie animationData={animationData} loop={false} />
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Motion Design Types</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX design and microinteractions</li>
          <li>Explainer videos and marketing</li>
          <li>Games and interactive media</li>
          <li>Data storytelling and visualization</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Motion design includes a range of styles and techniques.  
        Master these types to create engaging, effective animations for any project.
      </p>
    </div>
  );
}