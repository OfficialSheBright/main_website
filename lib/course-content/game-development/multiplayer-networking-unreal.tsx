export default function MultiplayerNetworkingUnrealContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Multiplayer & Networking (Unreal)</h2>
      <p className="text-gray-600">
        Multiplayer and networking in Unreal Engine enable real-time, scalable online experiences.  
        Mastering these systems is essential for building competitive, cooperative, and persistent games.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Multiplayer Networking?</h3>
        <p className="text-blue-700">
          Networking connects players, synchronizes game state, and powers social and competitive gameplay across platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Replication</h3>
      <ul>
        <li>Sync variables, actors, and events across server and clients</li>
        <li>Use Unreal’s replication system for reliable state management</li>
        <li>Optimize bandwidth and update frequency</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. RPC Calls</h3>
      <ul>
        <li>Use Remote Procedure Calls for client-server communication</li>
        <li>Trigger gameplay events and actions remotely</li>
        <li>Secure and validate RPCs to prevent cheating</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Session Management</h3>
      <ul>
        <li>Create, join, and manage multiplayer sessions</li>
        <li>Support matchmaking, lobbies, and persistent worlds</li>
        <li>Handle player connections and disconnections gracefully</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Server-Client Setup</h3>
      <ul>
        <li>Configure dedicated and listen servers for scalability</li>
        <li>Balance authority between server and clients</li>
        <li>Test and debug networked gameplay</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unreal C++ RPC function
UFUNCTION(Server, Reliable)
void ServerMovePlayer(FVector NewLocation);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Multiplayer Networking (Unreal)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Online competitive and co-op games</li>
          <li>Persistent worlds and metaverse projects</li>
          <li>Social and community-driven experiences</li>
          <li>Cross-platform multiplayer</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Multiplayer networking in Unreal Engine is essential for connected, scalable games.  
        Master these systems to deliver engaging online experiences for any audience.
      </p>
    </div>
  );
}