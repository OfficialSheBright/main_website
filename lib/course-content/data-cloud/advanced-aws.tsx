export default function AdvancedAwsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced AWS</h2>
      <p className="text-gray-600">
        Advanced AWS covers scalable cloud architectures, orchestration, and monitoring using Amazon Web Services.  
        Mastering these services enables robust, automated, and observable cloud solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced AWS?</h3>
        <p className="text-blue-700">
          Advanced AWS skills help you build resilient, scalable, and cost-effective cloud applications for real-world workloads.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. ECS / EKS</h3>
      <ul>
        <li>Amazon ECS: Container orchestration for Docker workloads</li>
        <li>Amazon EKS: Managed Kubernetes clusters</li>
        <li>Automate deployment, scaling, and management of containers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. CloudFormation</h3>
      <ul>
        <li>Infrastructure as Code (IaC) for AWS resources</li>
        <li>Automate provisioning, updates, and rollback</li>
        <li>Use templates for repeatable, version-controlled deployments</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. API Gateway</h3>
      <ul>
        <li>Managed service for creating, securing, and monitoring APIs</li>
        <li>Integrate with Lambda, ECS, and backend services</li>
        <li>Enable authentication, throttling, and logging</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. CloudWatch & Monitoring</h3>
      <ul>
        <li>Centralized logging, metrics, and alerting for AWS resources</li>
        <li>Monitor application health and performance</li>
        <li>Automate responses to incidents and anomalies</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Deploying infrastructure with CloudFormation (AWS CLI)
aws cloudformation deploy --template-file infra.yaml --stack-name my-stack
# Monitor stack events and resource creation in AWS Console
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced AWS</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise cloud architecture</li>
          <li>Automated infrastructure provisioning</li>
          <li>API management and integration</li>
          <li>Monitoring and incident response</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced AWS services empower you to build, automate, and monitor scalable cloud solutions.  
        Master these tools to deliver production-grade cloud applications.
      </p>
    </div>
  );
}