export default function ProgrammingForGamesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Programming for Games</h2>
      <p className="text-gray-600">
        Programming for games covers the essential coding skills and patterns needed to build interactive, efficient, and scalable gameplay systems.  
        Mastering these concepts enables you to create games in Unity (C#), Unreal (C++), and other engines.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Game Programming?</h3>
        <p className="text-blue-700">
          Game programming brings your ideas to life, enabling dynamic gameplay, responsive controls, and engaging player experiences.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. C# for Unity</h3>
      <ul>
        <li>Write scripts to control game objects, logic, and UI</li>
        <li>Use Unity’s API for physics, animation, and input</li>
        <li>Organize code for scalability and maintainability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. C++ for Unreal</h3>
      <ul>
        <li>Extend Unreal Engine with custom classes and components</li>
        <li>Leverage Unreal’s reflection and event systems</li>
        <li>Optimize performance-critical gameplay code</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. OOP Concepts in Game Dev</h3>
      <ul>
        <li>Use classes, inheritance, and polymorphism for game architecture</li>
        <li>Encapsulate data and behavior for modular systems</li>
        <li>Design reusable components and patterns</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Event Systems & Scripting Patterns</h3>
      <ul>
        <li>Implement event-driven programming for interactions</li>
        <li>Use observer, state, and command patterns for flexibility</li>
        <li>Decouple systems for easier maintenance and testing</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Coroutines, Async Tasks</h3>
      <ul>
        <li>Run background tasks without blocking gameplay</li>
        <li>Use coroutines in Unity for timed actions and sequences</li>
        <li>Implement async operations for loading and networking</li>
      </ul>

      {/* CODE EXAMPLES */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
        <code>
{`// Example: Unity C# coroutine for timed action
IEnumerator WaitAndAct() {
    yield return new WaitForSeconds(2f);
    Debug.Log("Action after 2 seconds!");
}
`}
        </code>
      </pre>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unreal C++ event binding
OnActorBeginOverlap.AddDynamic(this, &AMyActor::HandleOverlap);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Game Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Gameplay mechanics and controls</li>
          <li>AI and event systems</li>
          <li>UI and user interaction</li>
          <li>Multiplayer and networking logic</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Programming is the backbone of game development.  
        Master these skills to create interactive, polished games for any platform or genre.
      </p>
    </div>
  );
}