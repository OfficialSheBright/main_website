export default function GameFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Foundations (Mobile)</h2>
      <p className="text-gray-600">
        Game foundations cover the essential concepts and tools for building mobile games, including game loops, input handling, physics, and UI.  
        Mastering these basics prepares you to create interactive, engaging games for Android and iOS.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Game Foundations?</h3>
        <p className="text-blue-700">
          Understanding game foundations helps you design responsive gameplay, smooth controls, and fun user experiences on mobile devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Game Loop</h3>
      <ul>
        <li>Manage updates, rendering, and timing for smooth gameplay</li>
        <li>Handle frame rate and performance optimization</li>
        <li>Integrate with engine or framework game loop (Unity, Flutter, etc.)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Input Handling</h3>
      <ul>
        <li>Detect touch, swipe, and gesture input</li>
        <li>Map input to game actions and controls</li>
        <li>Support multi-touch and device sensors</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Physics & Collision</h3>
      <ul>
        <li>Use physics engines for movement and interaction</li>
        <li>Detect collisions and trigger game events</li>
        <li>Balance realism and arcade-style gameplay</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. UI & HUD</h3>
      <ul>
        <li>Design intuitive interfaces for scores, health, and controls</li>
        <li>Use overlays, popups, and menus for navigation</li>
        <li>Optimize UI for different screen sizes and orientations</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple game loop in Flutter
void gameLoop(Timer timer) {
  updateGameState();
  renderGame();
}
Timer.periodic(Duration(milliseconds: 16), gameLoop);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Foundations (Mobile)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Casual and arcade games</li>
          <li>Puzzle and strategy games</li>
          <li>Interactive learning apps</li>
          <li>Cross-platform mobile game development</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game foundations are the building blocks for mobile games.  
        Master these concepts to create fun, interactive experiences for any audience.
      </p>
    </div>
  );
}