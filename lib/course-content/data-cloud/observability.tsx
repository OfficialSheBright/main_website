export default function ObservabilityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Observability</h2>
      <p className="text-gray-600">
        Observability is the practice of monitoring, measuring, and understanding the internal state of systems through logs, metrics, and traces.  
        It enables proactive detection, troubleshooting, and optimization of cloud and data platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Observability?</h3>
        <p className="text-blue-700">
          Observability helps teams ensure reliability, performance, and security by providing actionable insights into system behavior.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Metrics</h3>
      <ul>
        <li>Quantitative measurements (CPU, memory, latency, error rates)</li>
        <li>Collected via monitoring tools (Prometheus, CloudWatch, Azure Monitor)</li>
        <li>Visualized in dashboards for trend analysis</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Logs</h3>
      <ul>
        <li>Text records of events, errors, and transactions</li>
        <li>Centralized logging with ELK Stack, Fluentd, or cloud-native solutions</li>
        <li>Used for troubleshooting and auditing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Traces</h3>
      <ul>
        <li>Track requests as they flow through distributed systems</li>
        <li>Tools: Jaeger, Zipkin, OpenTelemetry</li>
        <li>Identify bottlenecks and latency sources</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Alerting & Visualization</h3>
      <ul>
        <li>Set up alerts for anomalies and failures</li>
        <li>Visualize data in Grafana, Kibana, or cloud dashboards</li>
        <li>Automate notifications via email, Slack, or PagerDuty</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Simple Prometheus metric endpoint in Python
from prometheus_client import start_http_server, Gauge
import random, time

g = Gauge('app_cpu_usage', 'CPU usage')
start_http_server(8000)
while True:
    g.set(random.random() * 100)
    time.sleep(5)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Observability</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>System reliability and uptime</li>
          <li>Performance optimization</li>
          <li>Security monitoring and compliance</li>
          <li>Root cause analysis and troubleshooting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Observability is essential for managing complex cloud and data systems.  
        Master these practices to monitor, troubleshoot, and optimize your platforms effectively.
      </p>
    </div>
  );
}