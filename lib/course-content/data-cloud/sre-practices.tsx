export default function SrePracticesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">SRE Practices</h2>
      <p className="text-gray-600">
        Site Reliability Engineering (SRE) applies software engineering principles to operations, ensuring scalable, reliable, and efficient systems.  
        SRE practices help teams automate operations, manage incidents, and maintain service quality.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why SRE?</h3>
        <p className="text-blue-700">
          SRE bridges the gap between development and operations, enabling teams to deliver reliable services at scale.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. SLIs, SLOs, and Error Budgets</h3>
      <ul>
        <li><strong>SLI:</strong> Service Level Indicator (measurable metrics like latency, availability)</li>
        <li><strong>SLO:</strong> Service Level Objective (target value for SLIs)</li>
        <li><strong>Error Budget:</strong> Allowed threshold for unreliability before action is required</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Incident Management</h3>
      <ul>
        <li>Automate detection, response, and resolution of incidents</li>
        <li>Runbooks, on-call rotations, and postmortems</li>
        <li>Continuous improvement through blameless retrospectives</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Automation & Reliability</h3>
      <ul>
        <li>Automate deployments, monitoring, and recovery</li>
        <li>Use Infrastructure as Code (IaC) and CI/CD pipelines</li>
        <li>Reduce toil and manual interventions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Observability & Monitoring</h3>
      <ul>
        <li>Implement metrics, logs, and traces for visibility</li>
        <li>Set up alerting and dashboards for proactive response</li>
        <li>Use tools: Prometheus, Grafana, ELK Stack, OpenTelemetry</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Defining an SLO in Prometheus
slo: 99.9% uptime
prometheus query: sum(rate(http_requests_total{status="200"}[5m])) / sum(rate(http_requests_total[5m]))
# Alert if SLO is breached
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of SRE Practices</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Reliable cloud and data platforms</li>
          <li>Automated incident response</li>
          <li>Continuous improvement and learning</li>
          <li>Scalable operations and reduced downtime</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        SRE practices are essential for building and operating reliable, scalable systems.  
        Master these principles to automate operations, manage incidents, and deliver high-quality services.
      </p>
    </div>
  );
}