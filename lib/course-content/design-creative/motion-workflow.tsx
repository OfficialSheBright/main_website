export default function MotionWorkflowContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Motion Workflow</h2>
      <p className="text-gray-600">
        Motion workflow covers the end-to-end process of creating, refining, and delivering motion graphics and animations.  
        A structured workflow ensures efficiency, quality, and creative consistency in motion design projects.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why a Motion Workflow?</h3>
        <p className="text-blue-700">
          Following a workflow helps manage complexity, meet deadlines, and deliver polished results for clients or teams.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Storyboarding</h3>
      <ul>
        <li>Sketch key scenes and transitions</li>
        <li>Plan timing, pacing, and narrative flow</li>
        <li>Align vision with stakeholders before production</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Asset Preparation</h3>
      <ul>
        <li>Design and organize graphics, illustrations, and elements</li>
        <li>Export assets in appropriate formats (SVG, PNG, PSD, AI)</li>
        <li>Prepare layers for animation in After Effects, Blender, etc.</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scene Composition</h3>
      <ul>
        <li>Arrange assets in the timeline and workspace</li>
        <li>Set up cameras, lighting, and backgrounds for 3D scenes</li>
        <li>Animate transitions, movements, and effects</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Rendering & Optimization</h3>
      <ul>
        <li>Export final animation in required formats (MP4, GIF, JSON for Lottie)</li>
        <li>Optimize file size and quality for web, mobile, or broadcast</li>
        <li>Test playback and performance across platforms</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Rendering animation in After Effects
# 1. Add composition to Render Queue
# 2. Choose output format (H.264, GIF, etc.)
# 3. Set quality and resolution, then render
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Motion Workflow</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>UI/UX animation and microinteractions</li>
          <li>Explainer videos and social media graphics</li>
          <li>3D motion graphics and visual effects</li>
          <li>Game and AR/VR animation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        A clear motion workflow is essential for efficient, high-quality animation projects.  
        Master these steps to deliver creative, professional motion graphics for any medium.
      </p>
    </div>
  );
}