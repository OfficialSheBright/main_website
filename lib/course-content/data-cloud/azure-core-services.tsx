export default function AzureCoreServicesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Azure Core Services</h2>
      <p className="text-gray-600">
        Azure Core Services provide the foundation for building scalable, secure, and flexible cloud solutions on Microsoft Azure.  
        Mastering these services is essential for cloud engineers, architects, and developers.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Azure Core Services?</h3>
        <p className="text-blue-700">
          Core Azure services enable compute, storage, database, and identity management for a wide range of cloud applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Virtual Machines</h3>
      <ul>
        <li>Scalable virtual servers for running applications</li>
        <li>Flexible VM sizes and pricing models</li>
        <li>Supports auto-scaling and load balancing</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Azure Storage</h3>
      <ul>
        <li>Object, file, and disk storage for data, backups, and analytics</li>
        <li>Highly durable and available</li>
        <li>Supports lifecycle management and geo-redundancy</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Azure SQL</h3>
      <ul>
        <li>Managed relational database service</li>
        <li>Automated backups, scaling, and security features</li>
        <li>Supports high availability and disaster recovery</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Functions</h3>
      <ul>
        <li>Serverless compute for event-driven applications</li>
        <li>Automatic scaling and pay-per-use pricing</li>
        <li>Integrates with Event Grid, Logic Apps, and more</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Azure AD (Active Directory)</h3>
      <ul>
        <li>Identity and access management for users and resources</li>
        <li>Supports single sign-on (SSO) and multi-factor authentication (MFA)</li>
        <li>Enables secure access to cloud and on-premises apps</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a VM with Azure CLI
az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --admin-username azureuser --generate-ssh-keys
# Monitor VM status in Azure Portal
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Azure Core Services</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile application hosting</li>
          <li>Data storage and analytics</li>
          <li>Serverless and event-driven architectures</li>
          <li>Secure user and resource management</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Azure Core Services are the building blocks of cloud infrastructure.  
        Master these services to design, deploy, and manage scalable cloud solutions.
      </p>
    </div>
  );
}