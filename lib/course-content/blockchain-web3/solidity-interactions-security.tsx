export default function SolidityInteractionsSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Solidity Interactions & Security
      </h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="text-yellow-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• <code>msg.sender</code> / <code>msg.value</code></li>
          <li>• Fallback & receive functions</li>
          <li>• Safe math & integer handling</li>
          <li>• Reentrancy protection</li>
          <li>• Access control (Ownable, RBAC)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">msg.sender / msg.value</h2>
        <p>
          <code>msg.sender</code> identifies the caller of a function, while <code>msg.value</code> specifies the amount of Ether sent. Always validate sender and value for security.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Fallback & Receive Functions</h2>
        <p>
          Fallback and receive functions handle plain Ether transfers and calls to non-existent functions. Use them to manage unexpected interactions and Ether receipts.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Safe Math & Integer Handling</h2>
        <p>
          Use Solidity 0.8+ built-in overflow checks or SafeMath libraries to prevent integer overflows and underflows in arithmetic operations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reentrancy Protection</h2>
        <p>
          Prevent reentrancy attacks by using the checks-effects-interactions pattern and <code>ReentrancyGuard</code> from OpenZeppelin.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Access Control</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Ownable: Restricts functions to contract owner</li>
          <li>RBAC (Role-Based Access Control): Assigns roles for granular permissions</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-yellow-50 to-blue-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-yellow-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-yellow-700 space-y-1 text-sm">
          <li>• Always validate <code>msg.sender</code> and <code>msg.value</code></li>
          <li>• Use OpenZeppelin contracts for access control and security</li>
          <li>• Test fallback and receive logic thoroughly</li>
          <li>• Audit contracts for reentrancy and arithmetic vulnerabilities</li>
        </ul>
      </div>
    </div>
  );
}