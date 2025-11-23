export default function GameDesignFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Design Fundamentals</h2>
      <p className="text-gray-600">
        Game design fundamentals cover the principles and psychology behind engaging, interactive experiences.  
        Mastering these concepts helps you create games that are fun, challenging, and memorable.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Game Design?</h3>
        <p className="text-blue-700">
          Understanding game design principles enables you to craft experiences that captivate players and encourage replayability.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Game Design Principles</h3>
      <ul>
        <li>Balance challenge and skill for flow</li>
        <li>Design clear goals and feedback systems</li>
        <li>Encourage exploration and mastery</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Player Psychology</h3>
      <ul>
        <li>Understand motivation, reward, and engagement</li>
        <li>Design for different player types (achievers, explorers, socializers, killers)</li>
        <li>Use feedback loops to reinforce positive behaviors</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Game Loops</h3>
      <ul>
        <li>Core loop: the main cycle of player actions and rewards</li>
        <li>Meta loop: progression, upgrades, and long-term goals</li>
        <li>Design loops for retention and replayability</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Difficulty Curves</h3>
      <ul>
        <li>Gradually increase challenge to match player skill</li>
        <li>Use pacing, tutorials, and checkpoints</li>
        <li>Balance frustration and satisfaction</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Feedback Mechanics</h3>
      <ul>
        <li>Provide immediate, clear feedback for actions</li>
        <li>Use visuals, audio, and haptics</li>
        <li>Reward progress and signal failure constructively</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple feedback loop in a game (pseudo-code)
if player_completes_level:
    show_reward_animation()
    unlock_next_level()
else:
    show_try_again_message()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Design Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Video game development</li>
          <li>Gamified apps and experiences</li>
          <li>Educational games and simulations</li>
          <li>Interactive storytelling</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game design fundamentals are essential for creating engaging, rewarding experiences.  
        Master these principles to design games that captivate and inspire players.
      </p>
    </div>
  );
}