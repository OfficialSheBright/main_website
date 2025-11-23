export default function GameUiUxContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Game UI/UX</h2>
      <p className="text-gray-600">
        Game UI/UX design focuses on creating intuitive, engaging interfaces and experiences for players.  
        Good UI/UX enhances gameplay, accessibility, and player satisfaction.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Game UI/UX?</h3>
        <p className="text-blue-700">
          Effective UI/UX helps players navigate, understand feedback, and enjoy the game without frustration.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. HUD Design</h3>
      <ul>
        <li>Design heads-up displays for health, score, inventory, and status</li>
        <li>Balance visibility with minimal distraction</li>
        <li>Use icons, bars, and overlays for clarity</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Menus & Navigation</h3>
      <ul>
        <li>Create intuitive menus for settings, inventory, and progression</li>
        <li>Design navigation flows for quick access and usability</li>
        <li>Support controller, keyboard, and touch input</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Player Feedback</h3>
      <ul>
        <li>Provide clear feedback for actions, achievements, and errors</li>
        <li>Use animations, sounds, and visual cues</li>
        <li>Reinforce progress and encourage exploration</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Accessibility in Games</h3>
      <ul>
        <li>Design for colorblindness, hearing, and motor impairments</li>
        <li>Include adjustable settings and assistive features</li>
        <li>Follow accessibility guidelines for inclusive play</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple HUD element in Unity (C#)
using UnityEngine;
using UnityEngine.UI;
public class HealthBar : MonoBehaviour {
    public Slider healthSlider;
    public void SetHealth(float health) {
        healthSlider.value = health;
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game UI/UX</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Video games and mobile games</li>
          <li>Educational and simulation games</li>
          <li>Gamified apps and experiences</li>
          <li>Accessible and inclusive game design</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Game UI/UX is essential for enjoyable, accessible, and engaging player experiences.  
        Master these principles to design interfaces that enhance gameplay and user satisfaction.
      </p>
    </div>
  );
}