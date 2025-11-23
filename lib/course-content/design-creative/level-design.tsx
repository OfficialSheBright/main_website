export default function LevelDesignContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Level Design</h2>
      <p className="text-gray-600">
        Level design is the art of crafting environments, challenges, and experiences within a game.  
        It balances pacing, storytelling, and player interaction to create memorable gameplay moments.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Level Design?</h3>
        <p className="text-blue-700">
          Good level design guides players, encourages exploration, and supports the game’s narrative and mechanics.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Environment Layout</h3>
      <ul>
        <li>Plan spaces for movement, interaction, and discovery</li>
        <li>Use landmarks, paths, and zones for navigation</li>
        <li>Balance open areas with confined spaces for variety</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Pacing</h3>
      <ul>
        <li>Control the flow of action, rest, and challenge</li>
        <li>Use obstacles, rewards, and checkpoints to guide progress</li>
        <li>Adjust difficulty and intensity for engagement</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Interaction Zones</h3>
      <ul>
        <li>Design areas for combat, puzzles, and story events</li>
        <li>Encourage player choices and experimentation</li>
        <li>Integrate interactive objects and triggers</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Visual Storytelling</h3>
      <ul>
        <li>Use environment details to convey narrative and mood</li>
        <li>Guide players with lighting, color, and composition</li>
        <li>Reveal story elements through exploration</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Placing a checkpoint in Unity (C#)
using UnityEngine;
public class Checkpoint : MonoBehaviour {
    void OnTriggerEnter(Collider other) {
        if (other.CompareTag("Player")) {
            // Save player progress
        }
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Level Design</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Video games and interactive experiences</li>
          <li>Educational and simulation environments</li>
          <li>Story-driven and puzzle games</li>
          <li>Virtual and augmented reality spaces</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Level design is essential for engaging, memorable gameplay.  
        Master these principles to create environments that challenge, guide, and inspire players.
      </p>
    </div>
  );
}