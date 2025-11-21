export default function ProtocolSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Protocol Security
      </h1>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Economic attacks</li>
          <li>• Validator attacks</li>
          <li>• DOS on L2 sequencers</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Economic Attacks</h2>
        <p>
          Economic attacks exploit protocol incentives, such as manipulating prices, draining liquidity, or exploiting reward mechanisms. Defense includes robust incentive design and monitoring.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Validator Attacks</h2>
        <p>
          Validators may collude, censor transactions, or act maliciously in consensus. Protocols use slashing, reputation, and decentralization to mitigate these risks.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Denial of Service (DOS) on L2 Sequencers</h2>
        <p>
          L2 sequencers can be targeted by DOS attacks to disrupt transaction ordering and block production. Redundancy, failover, and rate limiting help protect sequencer availability.
        </p>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-red-700 space-y-1 text-sm">
          <li>• Analyze protocol incentive structures for vulnerabilities</li>
          <li>• Monitor validator behavior and implement slashing</li>
          <li>• Design L2 sequencer infrastructure for resilience</li>
          <li>• Stay updated on new attack vectors and security research</li>
        </ul>
      </div>
    </div>
  );
}