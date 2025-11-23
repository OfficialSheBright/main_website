export default function AuditingToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Auditing Tools</h2>
      <p className="text-gray-600">
        Auditing tools automate the detection of vulnerabilities and weaknesses in smart contracts and blockchain applications.  
        They help security professionals perform thorough assessments and improve code quality.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Auditing Tools?</h3>
        <p className="text-blue-700">
          Automated tools speed up the audit process, uncover hidden issues, and provide actionable insights for remediation.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Slither</h3>
      <ul>
        <li>Static analysis tool for Solidity smart contracts</li>
        <li>Detects common vulnerabilities and code quality issues</li>
        <li>Provides detailed reports and recommendations</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Mythril</h3>
      <ul>
        <li>Security analysis tool for Ethereum smart contracts</li>
        <li>Uses symbolic execution to find vulnerabilities</li>
        <li>Identifies issues like reentrancy, integer overflows, and access control flaws</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Echidna</h3>
      <ul>
        <li>Fuzzing tool for smart contracts</li>
        <li>Generates random inputs to test contract robustness</li>
        <li>Helps discover edge cases and unexpected behaviors</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Foundry</h3>
      <ul>
        <li>Comprehensive toolkit for smart contract development and testing</li>
        <li>Supports fuzzing, unit testing, and deployment</li>
        <li>Integrates with other auditing tools for enhanced security</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Tenderly</h3>
      <ul>
        <li>Monitoring and debugging platform for smart contracts</li>
        <li>Provides real-time analytics and error tracking</li>
        <li>Facilitates incident response and post-deployment audits</li>
      </ul>

      {/* SECTION 6 */}
      <h3 className="text-2xl font-bold text-gray-800">6. Certora (Advanced)</h3>
      <ul>
        <li>Formal verification tool for smart contracts</li>
        <li>Checks code against mathematical specifications</li>
        <li>Ensures correctness and prevents critical vulnerabilities</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Running Mythril on a smart contract (terminal)
myth analyze MyContract.sol
# Review the output for detected vulnerabilities
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Auditing Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Smart contract security audits</li>
          <li>Continuous integration and automated testing</li>
          <li>Incident response and monitoring</li>
          <li>Formal verification for critical systems</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Auditing tools are essential for efficient, reliable, and thorough security assessments.  
        Mastering these tools helps ensure the safety and integrity of blockchain applications.
      </p>
    </div>
  );
}