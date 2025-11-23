export default function AdvancedAzureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced Azure</h2>
      <p className="text-gray-600">
        Advanced Azure covers scalable cloud architectures, orchestration, and analytics using Microsoft Azure.  
        Mastering these services enables robust, automated, and observable cloud solutions for enterprise workloads.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced Azure?</h3>
        <p className="text-blue-700">
          Advanced Azure skills help you build resilient, scalable, and cost-effective cloud applications for real-world business needs.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. AKS (Kubernetes)</h3>
      <ul>
        <li>Azure Kubernetes Service for container orchestration</li>
        <li>Automate deployment, scaling, and management of containers</li>
        <li>Integrate with Azure DevOps and monitoring tools</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Event Hub</h3>
      <ul>
        <li>Managed event streaming platform for big data pipelines</li>
        <li>Ingest millions of events per second from apps and devices</li>
        <li>Integrate with Stream Analytics and Azure Functions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Synapse Analytics</h3>
      <ul>
        <li>Unified analytics platform for big data and data warehousing</li>
        <li>Run Spark, SQL, and data integration pipelines</li>
        <li>Analyze data at scale with integrated security and monitoring</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Logic Apps</h3>
      <ul>
        <li>Automate workflows and business processes with low-code tools</li>
        <li>Connect cloud services, on-premises systems, and APIs</li>
        <li>Monitor, manage, and scale workflows easily</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating an AKS cluster with Azure CLI
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 3 --enable-addons monitoring --generate-ssh-keys
# Monitor cluster health and deploy containers using kubectl
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced Azure</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise cloud architecture</li>
          <li>Automated infrastructure provisioning</li>
          <li>Big data analytics and streaming</li>
          <li>Workflow automation and integration</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced Azure services empower you to build, automate, and monitor scalable cloud solutions.  
        Master these tools to deliver production-grade cloud applications and analytics.
      </p>
    </div>
  );
}