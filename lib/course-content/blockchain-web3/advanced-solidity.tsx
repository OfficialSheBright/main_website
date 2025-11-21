export default function AdvancedSolidityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Advanced Solidity
      </h1>

      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Inheritance</li>
          <li>• Libraries & interfaces</li>
          <li>• Proxy patterns (UUPS, Transparent)</li>
          <li>• Gas optimizations</li>
          <li>• Assembly (Yul)</li>
          <li>• ERC standards: ERC-20, ERC-721, ERC-1155</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Inheritance</h2>
        <p>
          Solidity supports contract inheritance, enabling code reuse and modular design. Use <code>is</code> keyword to inherit from base contracts.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Base {
    function foo() public pure returns (string memory) {
        return "Base";
    }
}

contract Derived is Base {
    function bar() public pure returns (string memory) {
        return "Derived";
    }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Libraries & Interfaces</h2>
        <p>
          Libraries provide reusable code, while interfaces define contract APIs for interoperability.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`library Math {
    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}

interface IERC20 {
    function transfer(address to, uint amount) external returns (bool);
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Proxy Patterns</h2>
        <p>
          Proxy patterns (UUPS, Transparent) enable contract upgrades by separating logic and storage. Use OpenZeppelin libraries for secure implementations.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Gas Optimizations</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Minimize storage writes</li>
          <li>Use <code>unchecked</code> blocks for arithmetic</li>
          <li>Pack variables efficiently</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Assembly (Yul)</h2>
        <p>
          Use inline assembly (Yul) for low-level operations and advanced optimizations. Use with caution to avoid security risks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">ERC Standards</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>ERC-20: Fungible tokens</li>
          <li>ERC-721: Non-fungible tokens (NFTs)</li>
          <li>ERC-1155: Multi-token standard</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-purple-700 space-y-1 text-sm">
          <li>• Use OpenZeppelin contracts for security</li>
          <li>• Test upgradeable contracts thoroughly</li>
          <li>• Optimize for gas and audit for vulnerabilities</li>
          <li>• Follow ERC standards for interoperability</li>
        </ul>
      </div>
    </div>
  );
}