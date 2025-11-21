export default function SecurityDefiContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Security in DeFi
      </h1>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Oracle manipulation</li>
          <li>• Flash loan attacks</li>
          <li>• Reentrancy in AMMs</li>
          <li>• Invariant checks</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Oracle Manipulation</h2>
        <p>
          Oracles provide external data to smart contracts. Manipulating oracle prices can lead to exploits in lending, trading, and liquidation mechanisms.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Flash Loan Attacks</h2>
        <p>
          Flash loans allow borrowing large sums with no collateral, provided repayment occurs in one transaction. Attackers use flash loans to manipulate markets or exploit vulnerabilities.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reentrancy in AMMs</h2>
        <p>
          Reentrancy occurs when a contract calls an external contract before updating its state, allowing attackers to repeatedly enter and drain funds. Use checks-effects-interactions pattern to prevent this.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Invariant Checks</h2>
        <p>
          Invariant checks ensure protocol rules are always enforced, preventing unexpected state changes and exploits. Regularly audit and test invariants in DeFi contracts.
        </p>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-red-700 space-y-1 text-sm">
          <li>• Use robust oracles and monitor for manipulation</li>
          <li>• Audit contracts for flash loan and reentrancy risks</li>
          <li>• Implement invariant checks in all critical logic</li>
          <li>• Stay updated on new DeFi attack vectors and defenses</li>
        </ul>
      </div>
    </div>
  );
}