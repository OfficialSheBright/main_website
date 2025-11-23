export default function BlockchainAttacksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Blockchain Attacks</h2>
      <p className="text-gray-600">
        Blockchain attacks exploit vulnerabilities in distributed ledger technologies, consensus mechanisms, and smart contracts.  
        Understanding these attacks is crucial for building secure blockchain systems and defending against financial loss or manipulation.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Study Blockchain Attacks?</h3>
        <p className="text-blue-700">
          Awareness of attack vectors helps developers and auditors design resilient protocols and respond to emerging threats.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. 51% Attacks</h3>
      <ul>
        <li>Occurs when a single entity controls over half of the network’s mining power</li>
        <li>Enables double-spending and transaction censorship</li>
        <li>Threatens the integrity of proof-of-work blockchains</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Sybil Attacks</h3>
      <ul>
        <li>Attacker creates multiple fake identities to gain disproportionate influence</li>
        <li>Can disrupt consensus and voting mechanisms</li>
        <li>Mitigated by identity verification and stake-based protocols</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Reentrancy</h3>
      <ul>
        <li>Smart contract vulnerability allowing repeated calls before previous execution completes</li>
        <li>Can drain contract funds (e.g., DAO hack)</li>
        <li>Prevented by using checks-effects-interactions pattern</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Double-Spend Attacks</h3>
      <ul>
        <li>Attacker spends the same cryptocurrency more than once</li>
        <li>Exploits delays in transaction confirmation</li>
        <li>Mitigated by increasing block confirmation requirements</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Eclipse Attacks</h3>
      <ul>
        <li>Attacker isolates a node by controlling its peer connections</li>
        <li>Manipulates the victim’s view of the blockchain</li>
        <li>Can facilitate double-spending and selfish mining</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Checks-Effects-Interactions pattern in Solidity
function withdraw(uint amount) public {
    require(balances[msg.sender] >= amount);
    balances[msg.sender] -= amount; // Effects
    (bool success, ) = msg.sender.call{value: amount}(""); // Interaction
    require(success, "Transfer failed.");
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Blockchain Attack Knowledge</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Smart contract auditing</li>
          <li>Blockchain protocol design</li>
          <li>Incident response and forensics</li>
          <li>Security research and education</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Understanding blockchain attacks is essential for building secure decentralized systems.  
        Master these concepts to protect assets and maintain trust in blockchain technology.
      </p>
    </div>
  );
}