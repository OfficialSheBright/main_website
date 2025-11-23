export default function NarrativeWorldbuildingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Narrative & Worldbuilding</h2>
      <p className="text-gray-600">
        Narrative and worldbuilding are essential for creating immersive, memorable game experiences.  
        They shape the story, characters, and environments that engage players and drive gameplay.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Narrative & Worldbuilding?</h3>
        <p className="text-blue-700">
          Strong narrative and worldbuilding foster emotional connections, motivate exploration, and support game mechanics.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Story Arcs</h3>
      <ul>
        <li>Develop compelling plots with clear beginnings, middles, and ends</li>
        <li>Use conflict, resolution, and character growth</li>
        <li>Integrate story with gameplay progression</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Character Development</h3>
      <ul>
        <li>Create memorable protagonists, antagonists, and supporting roles</li>
        <li>Define motivations, backstories, and relationships</li>
        <li>Use visual design and dialogue to express personality</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. World Design</h3>
      <ul>
        <li>Build rich environments with history, culture, and rules</li>
        <li>Design maps, locations, and lore for exploration</li>
        <li>Balance realism and fantasy for immersion</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Dialogue & Scripts</h3>
      <ul>
        <li>Write engaging dialogue for character interaction</li>
        <li>Use branching scripts for player choices and outcomes</li>
        <li>Support storytelling through voice, text, and cutscenes</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple branching dialogue (pseudo-code)
if player_choice == "help":
    show_dialogue("Thank you for your help!")
else:
    show_dialogue("Maybe next time.")
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Narrative & Worldbuilding</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Video games and interactive stories</li>
          <li>Tabletop RPGs and board games</li>
          <li>Animation and film projects</li>
          <li>Educational and simulation environments</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Narrative and worldbuilding are key to immersive, engaging games and experiences.  
        Master these skills to create stories and worlds that captivate players.
      </p>
    </div>
  );
}