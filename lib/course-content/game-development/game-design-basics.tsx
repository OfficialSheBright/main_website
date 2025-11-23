export default function GameDesignBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game Design Basics</h2>
      <p className="text-gray-600">
        Game design basics cover the core principles that make games fun, engaging, and memorable.  
        Mastering these concepts helps you create compelling gameplay experiences for any genre or platform.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Game Design Matters?</h3>
        <p className="text-blue-700">
          Good game design motivates players, balances challenge and reward, and creates lasting impact through interactive storytelling.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. What Makes Games Fun (Gameplay Loops)</h3>
      <ul>
        <li>Core gameplay loop: action, feedback, reward, repeat</li>
        <li>Design loops for engagement and replayability</li>
        <li>Balance challenge and satisfaction</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Player Psychology & Motivation</h3>
      <ul>
        <li>Understand player types: achievers, explorers, socializers, killers</li>
        <li>Use rewards, progression, and narrative to motivate play</li>
        <li>Design for emotional impact and flow</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Game Mechanics vs Dynamics vs Aesthetics</h3>
      <ul>
        <li>Mechanics: rules and systems (jumping, scoring, inventory)</li>
        <li>Dynamics: player interactions and emergent gameplay</li>
        <li>Aesthetics: emotional responses and experience (fun, suspense, wonder)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Interaction Patterns</h3>
      <ul>
        <li>Single-player, multiplayer, cooperative, competitive modes</li>
        <li>Design interactions for accessibility and inclusivity</li>
        <li>Balance player agency and game structure</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Narrative & Worldbuilding</h3>
      <ul>
        <li>Create immersive worlds with lore, characters, and story arcs</li>
        <li>Integrate narrative with gameplay for deeper engagement</li>
        <li>Use environmental storytelling and dialogue</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Core gameplay loop pseudo-code
while (playerIsPlaying) {
    playerAction();
    provideFeedback();
    giveReward();
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Design Basics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing engaging levels and mechanics</li>
          <li>Balancing challenge and reward systems</li>
          <li>Creating memorable stories and worlds</li>
          <li>Building games for diverse audiences</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game design basics are the foundation of successful games.  
        Master these principles to create fun, meaningful, and impactful experiences for players.
      </p>
    </div>
  );
}