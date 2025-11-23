export default function AuditMethodologyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Audit Methodology</h2>
      <p className="text-gray-600">
        Security audits are systematic processes for evaluating the safety and reliability of smart contracts and applications.  
        A robust audit methodology combines manual review, automated analysis, fuzzing, and thorough reporting.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Audit Methodology?</h3>
        <p className="text-blue-700">
          Following a structured audit process helps uncover vulnerabilities, ensures code quality, and builds trust in blockchain and software systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Manual Code Review</h3>
      <ul>
        <li>Line-by-line inspection of source code</li>
        <li>Identify logic errors, insecure patterns, and overlooked vulnerabilities</li>
        <li>Review business logic and access controls</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Static & Dynamic Analysis</h3>
      <ul>
        <li>Static analysis: Automated tools scan code for known issues and patterns</li>
        <li>Dynamic analysis: Run code in test environments to observe behavior</li>
        <li>Tools: Slither, Mythril, Echidna, Foundry</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Fuzzing</h3>
      <ul>
        <li>Automated testing with random or unexpected inputs</li>
        <li>Detects edge cases, crashes, and vulnerabilities</li>
        <li>Improves coverage and robustness</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Unit Testing</h3>
      <ul>
        <li>Write and run tests for individual functions and modules</li>
        <li>Verify expected behavior and catch regressions</li>
        <li>Essential for secure smart contract development</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Audit Report Writing</h3>
      <ul>
        <li>Document findings, risk ratings, and recommendations</li>
        <li>Provide clear, actionable guidance for remediation</li>
        <li>Professional reports build credibility and transparency</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Running Slither for static analysis (terminal)
slither MyContract.sol
# Review the output for vulnerabilities and recommendations
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Audit Methodology</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Smart contract security audits</li>
          <li>Blockchain protocol reviews</li>
          <li>Web and API security assessments</li>
          <li>Compliance and risk management</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        A rigorous audit methodology is vital for uncovering vulnerabilities and ensuring secure deployments.  
        Master these techniques to deliver trustworthy and resilient software systems.
      </p>
    </div>
  );
}