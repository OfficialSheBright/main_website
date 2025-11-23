export default function AudioFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Audio Fundamentals</h2>
      <p className="text-gray-600">
        Audio fundamentals cover the basics of sound design, music selection, and audio mixing for games.  
        Mastering these concepts helps create immersive, engaging experiences for players.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Audio Matters?</h3>
        <p className="text-blue-700">
          Good audio enhances gameplay, sets mood, and provides feedback, making games more memorable and enjoyable.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Sound Design</h3>
      <ul>
        <li>Create and edit sound effects for actions, environments, and UI</li>
        <li>Use layering and variation for realism</li>
        <li>Balance clarity and subtlety for immersion</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Music Selection</h3>
      <ul>
        <li>Choose music that fits the game’s genre and mood</li>
        <li>Use adaptive music for dynamic gameplay</li>
        <li>Integrate licensed or original tracks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Audio Mixing</h3>
      <ul>
        <li>Balance levels between music, effects, and dialogue</li>
        <li>Use EQ, compression, and reverb for polish</li>
        <li>Test audio on different devices and environments</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity C# script to play a sound effect
using UnityEngine;
public class PlaySound : MonoBehaviour {
    public AudioClip clip;
    public AudioSource source;
    public void PlaySFX() {
        source.PlayOneShot(clip);
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Audio Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game sound effects and ambience</li>
          <li>Background music and adaptive scores</li>
          <li>Voice acting and dialogue mixing</li>
          <li>UI feedback and accessibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Audio fundamentals are essential for immersive game experiences.  
        Master these skills to create memorable, high-quality sound for any project.
      </p>
    </div>
  );
}