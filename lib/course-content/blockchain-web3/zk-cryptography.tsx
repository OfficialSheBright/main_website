export default function ZkCryptographyContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        ZK Cryptography
      </h1>

      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Zero-knowledge proofs (ZKPs)</li>
          <li>• zk-SNARKs & zk-STARKs</li>
          <li>• Circuits & witness generation</li>
          <li>• Trusted setup vs transparent setup</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Zero-Knowledge Proofs (ZKPs)</h2>
        <p>
          ZKPs allow one party to prove knowledge of a value or computation without revealing the value itself. Used for privacy, scalability, and trustless verification in blockchains.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">zk-SNARKs & zk-STARKs</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>zk-SNARKs: Require trusted setup, efficient and widely used (e.g., Zcash)</li>
          <li>zk-STARKs: No trusted setup, scalable and transparent, post-quantum secure</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Circuits & Witness Generation</h2>
        <p>
          ZK circuits define the computation to be proven. The witness is the secret input that satisfies the circuit, used to generate the proof.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Trusted Setup vs Transparent Setup</h2>
        <p>
          Trusted setup involves initial secret generation for zk-SNARKs, while transparent setup (zk-STARKs) avoids this, reducing trust assumptions.
        </p>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-indigo-700 space-y-1 text-sm">
          <li>• Explore Circom and Noir for building ZK circuits</li>
          <li>• Understand the difference between SNARKs and STARKs</li>
          <li>• Test proof generation and verification on testnets</li>
          <li>• Document your ZK setup and security assumptions</li>
        </ul>
      </div>
    </div>
  );
}