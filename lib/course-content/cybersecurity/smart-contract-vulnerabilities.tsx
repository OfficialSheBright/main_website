export default function SmartContractVulnerabilitiesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Smart Contract Vulnerabilities</h2>
      <p className="text-gray-600">
        Smart contract vulnerabilities are flaws in code or logic that attackers can exploit to steal funds, disrupt operations, or manipulate blockchain applications.  
        Understanding these vulnerabilities is essential for secure development and auditing.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Study Smart Contract Vulnerabilities?</h3>
        <p className="text-blue-700">
          Identifying and mitigating vulnerabilities prevents costly exploits and builds trust in decentralized applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Reentrancy</h3>
      <ul>
        <li>Occurs when a contract calls an external contract before updating its state</li>
        <li>Can lead to repeated withdrawals and drained funds</li>
        <li>Mitigation: checks-effects-interactions pattern</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Integer Overflows & Underflows</h3>
      <ul>
        <li>Arithmetic operations exceed variable limits, causing unexpected results</li>
        <li>Can be exploited to manipulate balances or bypass checks</li>
        <li>Mitigation: use SafeMath libraries or built-in overflow checks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Access Control Issues</h3>
      <ul>
        <li>Poorly implemented permissions allow unauthorized actions</li>
        <li>Examples: missing owner checks, public functions that should be restricted</li>
        <li>Mitigation: use modifiers and proper role management</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Denial of Service (DoS)</h3>
      <ul>
        <li>Attackers prevent contract functions from executing (e.g., block gas limit, revert loops)</li>
        <li>Can freeze assets or disrupt operations</li>
        <li>Mitigation: optimize gas usage, avoid untrusted external calls</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Unchecked External Calls</h3>
      <ul>
        <li>Calling external contracts without verifying success or handling errors</li>
        <li>Can lead to unexpected behavior or loss of funds</li>
        <li>Mitigation: always check return values and handle failures</li>
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
        <h3 className="font-semibold text-green-800">Applications of Vulnerability Knowledge</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Smart contract auditing</li>
          <li>Secure DApp development</li>
          <li>Incident response and forensics</li>
          <li>Security research and education</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Understanding smart contract vulnerabilities is crucial for building secure blockchain applications.  
        Master these concepts to prevent exploits and protect user assets.
      </p>
    </div>
  );
}