export default function SmartContractSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Smart Contract Security
      </h1>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Reentrancy</li>
          <li>• Flash loan attacks</li>
          <li>• Delegatecall misuse</li>
          <li>• Front-running / MEV attacks</li>
          <li>• Integer overflows</li>
          <li>• Denial of service</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reentrancy</h2>
        <p>
          Reentrancy occurs when a contract calls an external contract before updating its state, allowing attackers to repeatedly enter and drain funds. Use the checks-effects-interactions pattern to prevent this.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Flash Loan Attacks</h2>
        <p>
          Flash loans allow borrowing large sums with no collateral, provided repayment occurs in one transaction. Attackers use flash loans to manipulate markets or exploit vulnerabilities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Delegatecall Misuse</h2>
        <p>
          Improper use of <code>delegatecall</code> can lead to code execution vulnerabilities and loss of control over contract logic. Always validate input and restrict access.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Front-running / MEV Attacks</h2>
        <p>
          Front-running and Miner Extractable Value (MEV) attacks exploit transaction ordering for profit. Use commit-reveal schemes and randomized ordering to mitigate risks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Integer Overflows</h2>
        <p>
          Integer overflows and underflows can cause unexpected behavior. Use SafeMath libraries and Solidity 0.8+ built-in checks to prevent these issues.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Denial of Service</h2>
        <p>
          Denial of service attacks target contract functions to block execution or exhaust resources. Limit loop sizes, validate input, and monitor gas usage.
        </p>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-red-700 space-y-1 text-sm">
          <li>• Audit contracts for common vulnerabilities</li>
          <li>• Use OpenZeppelin libraries for secure patterns</li>
          <li>• Test edge cases and attack scenarios</li>
          <li>• Stay updated on new security threats and best practices</li>
        </ul>
      </div>
    </div>
  );
}