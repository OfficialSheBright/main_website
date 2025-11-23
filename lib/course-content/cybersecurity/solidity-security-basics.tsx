export default function SoliditySecurityBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Solidity Security Basics</h2>
      <p className="text-gray-600">
        Solidity security basics cover the foundational principles for writing safe smart contracts on Ethereum and other EVM-compatible blockchains.  
        Secure coding in Solidity helps prevent exploits, loss of funds, and contract failures.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Solidity Security?</h3>
        <p className="text-blue-700">
          Smart contracts are immutable and handle valuable assets. Security flaws can lead to irreversible damage and financial loss.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. EVM & Solidity Basics</h3>
      <ul>
        <li>Ethereum Virtual Machine (EVM) executes smart contracts</li>
        <li>Solidity is the most popular language for EVM contracts</li>
        <li>Understand data types, functions, and contract structure</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Storage & State Variables</h3>
      <ul>
        <li>State variables store contract data on-chain</li>
        <li>Visibility: public, private, internal, external</li>
        <li>Protect sensitive data and avoid unnecessary exposure</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Gas Optimization</h3>
      <ul>
        <li>Efficient code reduces transaction costs and attack surface</li>
        <li>Minimize storage writes and loops</li>
        <li>Use events for logging instead of state changes</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Common Security Patterns</h3>
      <ul>
        <li>Checks-Effects-Interactions pattern to prevent reentrancy</li>
        <li>Use require/assert for input validation and error handling</li>
        <li>Limit external calls and handle failures gracefully</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Checks-Effects-Interactions pattern in Solidity
function withdraw(uint amount) public {
  require(balances[msg.sender] >= amount, "Insufficient balance");
  balances[msg.sender] -= amount; // Effects
  (bool success, ) = msg.sender.call{value: amount}(""); // Interaction
  require(success, "Transfer failed");
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Solidity Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>DeFi and NFT smart contracts</li>
          <li>Token and DAO development</li>
          <li>Blockchain protocol upgrades</li>
          <li>Security audits and bug bounty programs</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Solidity security basics are essential for safe smart contract development.  
        Master these principles to protect assets and build trustworthy blockchain applications.
      </p>
    </div>
  );
}