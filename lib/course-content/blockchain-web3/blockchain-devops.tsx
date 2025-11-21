export default function BlockchainDevopsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Blockchain DevOps
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Key Concepts</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Dockerized blockchain setups</li>
          <li>• CI/CD for smart contracts</li>
          <li>• Monitoring nodes</li>
          <li>• Failover strategies</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dockerized Blockchain Setups</h2>
        <p>
          Use Docker to containerize blockchain nodes and development environments for reproducibility and scalability.
        </p>
        <div className="bg-gray-900 text-white p-4 rounded mb-6">
          <pre className="text-sm overflow-x-auto">
            <code>{`# Example: Ethereum node Dockerfile
FROM ethereum/client-go:v1.13.8
CMD ["--dev", "--http", "--http.addr=0.0.0.0"]`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CI/CD for Smart Contracts</h2>
        <p>
          Automate testing, deployment, and auditing of smart contracts using CI/CD pipelines (GitHub Actions, GitLab CI).
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Sample CI Workflow</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`# .github/workflows/ci.yml
name: Smart Contract CI

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Monitoring Nodes</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Track node health and performance</li>
          <li>Use tools like Prometheus and Grafana for metrics and alerts</li>
          <li>Monitor logs for errors and unusual activity</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Failover Strategies</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Set up redundant nodes for high availability</li>
          <li>Automate failover and recovery processes</li>
          <li>Regularly backup node data</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Use Docker Compose for multi-node setups</li>
          <li>• Automate contract deployment and testing</li>
          <li>• Monitor nodes continuously for reliability</li>
          <li>• Document your DevOps workflows and recovery plans</li>
        </ul>
      </div>
    </div>
  );
}