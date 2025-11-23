export default function CloudSecurityFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Cloud Security Fundamentals</h2>
      <p className="text-gray-600">
        Cloud security fundamentals cover the principles and practices for protecting data, applications, and infrastructure in cloud environments.  
        Understanding these basics is essential for building secure and compliant cloud solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Cloud Security?</h3>
        <p className="text-blue-700">
          Cloud platforms introduce new risks and responsibilities. Mastering cloud security helps prevent breaches, data loss, and misconfigurations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Shared Responsibility Model</h3>
      <ul>
        <li>Defines security roles for cloud providers and customers</li>
        <li>Providers secure infrastructure; customers secure data and applications</li>
        <li>Critical for compliance and risk management</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. IAM Security</h3>
      <ul>
        <li>Identity and Access Management controls user permissions</li>
        <li>Principle of least privilege reduces attack surface</li>
        <li>Multi-factor authentication (MFA) enhances protection</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Secrets Management</h3>
      <ul>
        <li>Secure storage and rotation of credentials, keys, and tokens</li>
        <li>Use managed services (AWS Secrets Manager, Azure Key Vault)</li>
        <li>Prevent hardcoding secrets in code or config files</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Network Policies</h3>
      <ul>
        <li>Control traffic flow with firewalls, security groups, and network ACLs</li>
        <li>Segment networks to isolate sensitive resources</li>
        <li>Monitor and log network activity for threats</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Creating a security group in AWS CLI
aws ec2 create-security-group --group-name my-sec-group --description "My security group"
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Cloud Security Fundamentals</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Secure cloud migrations</li>
          <li>Compliance with industry standards</li>
          <li>Protection of sensitive data</li>
          <li>Incident response and monitoring</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Cloud security fundamentals are essential for safe and resilient cloud operations.  
        Master these principles to protect assets and maintain trust in cloud services.
      </p>
    </div>
  );
}