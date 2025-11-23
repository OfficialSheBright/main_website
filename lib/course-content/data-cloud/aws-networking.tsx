export default function AwsNetworkingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">AWS Networking</h2>
      <p className="text-gray-600">
        AWS Networking provides the foundation for secure, scalable, and highly available cloud architectures.  
        Understanding networking concepts is essential for designing robust AWS environments.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why AWS Networking?</h3>
        <p className="text-blue-700">
          Proper networking design enables secure communication, resource isolation, and efficient traffic management in the cloud.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. VPC (Virtual Private Cloud)</h3>
      <ul>
        <li>Isolated network environment for AWS resources</li>
        <li>Customizable IP ranges, subnets, and routing</li>
        <li>Supports security groups and network ACLs</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Subnets</h3>
      <ul>
        <li>Divide VPC into public and private segments</li>
        <li>Control resource exposure to the internet</li>
        <li>Enable multi-tier architectures and isolation</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Route Tables</h3>
      <ul>
        <li>Define traffic flow within VPC and to external networks</li>
        <li>Configure routes for internet gateways, NAT, and peering</li>
        <li>Support hybrid cloud and multi-region connectivity</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Load Balancers</h3>
      <ul>
        <li>Distribute incoming traffic across multiple resources</li>
        <li>Types: Application Load Balancer (ALB), Network Load Balancer (NLB), Classic Load Balancer</li>
        <li>Improve availability, scalability, and fault tolerance</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a VPC with AWS CLI
aws ec2 create-vpc --cidr-block 10.0.0.0/16
# Add subnets, route tables, and gateways as needed
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of AWS Networking</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Secure cloud infrastructure</li>
          <li>Multi-tier application deployment</li>
          <li>Hybrid and multi-cloud connectivity</li>
          <li>Scalable and resilient architectures</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        AWS Networking is essential for building secure, scalable, and flexible cloud solutions.  
        Master these concepts to design and manage robust AWS environments.
      </p>
    </div>
  );
}