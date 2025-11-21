export default function SolidityBasicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Solidity Basics
      </h1>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
        <h3 className="text-yellow-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-yellow-700 space-y-2">
          <li>• Smart contract structure</li>
          <li>• Data types & variables</li>
          <li>• Mappings, arrays, structs</li>
          <li>• Events & modifiers</li>
          <li>• Constructors</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Smart Contract Structure</h2>
        <p>
          Solidity contracts are similar to classes in other languages. They contain state variables, functions, events, and modifiers.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Example {
    uint public value;

    constructor(uint _value) {
        value = _value;
    }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Types & Variables</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>uint, int, address, bool, string</li>
          <li>State variables vs local variables</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mappings, Arrays, Structs</h2>
        <p>
          Use mappings for key-value storage, arrays for lists, and structs for custom data types.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Events & Modifiers</h2>
        <p>
          Events allow logging on the blockchain. Modifiers are used to change the behavior of functions (e.g., access control).
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Constructors</h2>
        <p>
          Constructors initialize contract state when deployed. They run only once during contract creation.
        </p>
      </section>

      <div className="bg-gradient-to-r from-yellow-50 to-blue-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-yellow-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-yellow-700 space-y-1 text-sm">
          <li>• Use explicit data types for clarity and safety</li>
          <li>• Document contract functions and events</li>
          <li>• Test contracts thoroughly before deployment</li>
          <li>• Explore OpenZeppelin for secure contract patterns</li>
        </ul>
      </div>
    </div>
  );
}