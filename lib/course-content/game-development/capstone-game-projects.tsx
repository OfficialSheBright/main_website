export default function CapstoneGameProjectsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Game Projects</h2>
      <p className="text-gray-600">
        Capstone game projects challenge you to apply everything you&apos;ve learned by building complete, professional-quality games.  
        These projects demonstrate your skills in design, programming, art, audio, and publishing.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Capstone Projects?</h3>
        <p className="text-blue-700">
          Capstone projects are the ultimate proof of your abilities, preparing you for real-world game development and industry roles.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Project Types</h3>
      <ul>
        <li>2D platformer</li>
        <li>3D action RPG</li>
        <li>Open-world exploration game</li>
        <li>Multiplayer FPS</li>
        <li>Unreal cinematic experience</li>
        <li>Full metaverse environment</li>
        <li>VR/AR immersive experience</li>
        <li>Game with custom character animations</li>
        <li>3D modeling + playable demo project</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Game Design Document (GDD)</h3>
      <ul>
        <li>Outline your game’s concept, mechanics, story, and art style</li>
        <li>Plan features, levels, and user experience</li>
        <li>Use the GDD to guide development and communicate with collaborators</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Mechanics Implementation</h3>
      <ul>
        <li>Develop core gameplay systems and controls</li>
        <li>Integrate physics, AI, and user interfaces</li>
        <li>Test and refine mechanics for fun and balance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Art & Animation</h3>
      <ul>
        <li>Create or source 2D/3D assets, environments, and characters</li>
        <li>Animate characters, objects, and effects</li>
        <li>Optimize visuals for performance and style</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Sound Design</h3>
      <ul>
        <li>Design and implement music, sound effects, and voice</li>
        <li>Mix audio for clarity and immersion</li>
        <li>Test audio across devices and platforms</li>
      </ul>

      {/* SECTION 6 */}
      <h3 className="text-2xl font-bold text-gray-800">6. Testing & Optimization</h3>
      <ul>
        <li>Playtest for bugs, usability, and fun</li>
        <li>Profile and optimize performance</li>
        <li>Iterate based on feedback and analytics</li>
      </ul>

      {/* SECTION 7 */}
      <h3 className="text-2xl font-bold text-gray-800">7. Publishing</h3>
      <ul>
        <li>Prepare builds for PC, mobile, web, or console</li>
        <li>Package assets and documentation</li>
        <li>Submit to stores, platforms, or showcase events</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Capstone project folder structure
/Capstone-Project
  /Assets
  /Source
  /Builds
  /GDD.pdf
  /Playtest-Reports
  /Release-Notes.txt
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Benefits of Capstone Projects</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Showcase your skills to employers and clients</li>
          <li>Build a portfolio-ready game project</li>
          <li>Gain experience in full-cycle game development</li>
          <li>Prepare for certification and industry roles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Capstone game projects are your gateway to professional game development.  
        Master these steps to deliver complete, polished games and launch your career.
      </p>
    </div>
  );
}