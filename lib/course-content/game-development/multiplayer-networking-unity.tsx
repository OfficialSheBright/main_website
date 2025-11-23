export default function MultiplayerNetworkingUnityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Multiplayer & Networking (Unity)</h2>
      <p className="text-gray-600">
        Multiplayer and networking in Unity enable real-time interaction between players, supporting competitive, cooperative, and social gameplay.  
        Mastering these systems is essential for building scalable, engaging online games.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Multiplayer Networking?</h3>
        <p className="text-blue-700">
          Networking connects players, synchronizes game state, and enables new gameplay experiences across devices and platforms.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Unity Netcode</h3>
      <ul>
        <li>Use Unity Netcode for GameObjects to synchronize player actions</li>
        <li>Manage networked objects, authority, and state replication</li>
        <li>Support host, client, and server architectures</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mirror / Photon</h3>
      <ul>
        <li>Integrate third-party networking solutions for scalability</li>
        <li>Handle matchmaking, room management, and player connections</li>
        <li>Optimize for latency and reliability</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Matchmaking</h3>
      <ul>
        <li>Automatically pair players for games and sessions</li>
        <li>Balance teams and skill levels</li>
        <li>Support public and private matches</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Real-Time Synchronization</h3>
      <ul>
        <li>Sync player positions, actions, and game events across clients</li>
        <li>Minimize lag and desync with interpolation and prediction</li>
        <li>Test and debug networked gameplay</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Server-Authoritative Architecture</h3>
      <ul>
        <li>Use servers to validate actions and prevent cheating</li>
        <li>Manage game logic and state centrally</li>
        <li>Scale for large player counts and persistent worlds</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Unity Netcode for GameObjects - Sync player position
using Unity.Netcode;
using UnityEngine;
public class PlayerNetwork : NetworkBehaviour {
    public override void OnNetworkSpawn() {
        if (IsOwner) {
            // Allow local control
        }
    }
    void Update() {
        if (IsOwner) {
            // Send position updates to server
        }
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Multiplayer Networking (Unity)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Online multiplayer games</li>
          <li>Co-op and competitive experiences</li>
          <li>Social and persistent worlds</li>
          <li>Cross-platform play</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Multiplayer networking in Unity is essential for connected, interactive games.  
        Master these systems to build scalable, engaging online experiences.
      </p>
    </div>
  );
}