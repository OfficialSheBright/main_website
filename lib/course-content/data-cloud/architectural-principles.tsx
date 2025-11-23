export default function ArchitecturalPrinciplesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Architectural Principles</h2>
      <p className="text-gray-600">
        Architectural principles guide the design of scalable, resilient, and cost-effective cloud systems.  
        Applying these principles ensures robust solutions that meet business and technical requirements.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Architectural Principles?</h3>
        <p className="text-blue-700">
          Following proven principles helps avoid common pitfalls, optimize resources, and deliver reliable cloud applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Scalability</h3>
      <ul>
        <li>Design systems to handle growth in users, data, and traffic</li>
        <li>Use auto-scaling, load balancing, and distributed architectures</li>
        <li>Horizontal vs vertical scaling strategies</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Resilience</h3>
      <ul>
        <li>Ensure systems recover gracefully from failures</li>
        <li>Implement redundancy, failover, and backup mechanisms</li>
        <li>Design for disaster recovery and business continuity</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. High Availability</h3>
      <ul>
        <li>Minimize downtime and maximize uptime</li>
        <li>Use multi-region deployments and health checks</li>
        <li>Automate recovery and scaling processes</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cost Optimization</h3>
      <ul>
        <li>Monitor and manage cloud spending</li>
        <li>Choose appropriate resource types and sizes</li>
        <li>Leverage reserved instances, spot pricing, and serverless options</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Serverless Architectures</h3>
      <ul>
        <li>Build applications using managed services (e.g., AWS Lambda, Azure Functions)</li>
        <li>Reduce operational overhead and scale automatically</li>
        <li>Pay only for actual usage</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Enabling auto-scaling for a cloud service (AWS CLI)
aws autoscaling create-auto-scaling-group --auto-scaling-group-name my-group --min-size 2 --max-size 10 --desired-capacity 4
# Monitor scaling activity in the cloud console
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Architectural Principles</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing cloud-native applications</li>
          <li>Building resilient and scalable infrastructure</li>
          <li>Optimizing costs for enterprise workloads</li>
          <li>Supporting business continuity and growth</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Architectural principles are the foundation of robust cloud solutions.  
        Master these concepts to design systems that scale, recover, and optimize resources effectively.
      </p>
    </div>
  );
}