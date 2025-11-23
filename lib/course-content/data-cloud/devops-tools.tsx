export default function DevOpsToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">DevOps Tools</h2>
      <p className="text-gray-600">
        DevOps tools automate software delivery, infrastructure management, and monitoring.  
        Mastering these tools is essential for building scalable, reliable, and agile cloud solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why DevOps Tools?</h3>
        <p className="text-blue-700">
          DevOps tools streamline workflows, reduce manual errors, and enable rapid innovation through automation and collaboration.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Docker</h3>
      <ul>
        <li>Containerize applications for portability and consistency</li>
        <li>Build, run, and share containers across environments</li>
        <li>Integrate with CI/CD and orchestration platforms</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Kubernetes</h3>
      <ul>
        <li>Orchestrate containers for scaling and resilience</li>
        <li>Automate deployment, scaling, and management</li>
        <li>Supports rolling updates and self-healing</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Jenkins / GitHub Actions</h3>
      <ul>
        <li>Automate CI/CD pipelines for building, testing, and deploying code</li>
        <li>Integrate with version control and cloud platforms</li>
        <li>Monitor pipeline health and automate releases</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Terraform</h3>
      <ul>
        <li>Infrastructure as Code (IaC) for cloud resources</li>
        <li>Provision, update, and manage infrastructure declaratively</li>
        <li>Supports multi-cloud and hybrid deployments</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Ansible</h3>
      <ul>
        <li>Automate configuration management and application deployment</li>
        <li>Agentless, uses SSH for remote execution</li>
        <li>Repeatable, scalable, and easy to integrate</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Running a Docker container
docker run -d -p 80:80 nginx

# Example: Applying infrastructure with Terraform
terraform init
terraform apply
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of DevOps Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Automated software delivery pipelines</li>
          <li>Scalable infrastructure management</li>
          <li>Continuous monitoring and feedback</li>
          <li>Rapid innovation and deployment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        DevOps tools are essential for modern cloud engineering.  
        Master these platforms to automate, scale, and optimize your workflows.
      </p>
    </div>
  );
}