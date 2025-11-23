export default function MultiCloudSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Multi-Cloud Security: AWS, GCP & Azure</h2>
      <p className="text-gray-600">
        Multi-cloud security focuses on protecting resources across different cloud providers.  
        Each platform has unique risks, configurations, and best practices for securing data, applications, and infrastructure.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Multi-Cloud Security?</h3>
        <p className="text-blue-700">
          Managing security across AWS, GCP, and Azure reduces risk, prevents misconfigurations, and ensures compliance in hybrid environments.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. IAM Misconfigurations</h3>
      <ul>
        <li>Overly permissive roles and policies</li>
        <li>Unused or orphaned accounts</li>
        <li>Failure to enforce MFA and least privilege</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. S3 Bucket Exposures</h3>
      <ul>
        <li>Publicly accessible storage buckets in AWS, GCP, or Azure</li>
        <li>Data leaks due to misconfigured permissions</li>
        <li>Mitigate by auditing access controls and enabling encryption</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Secure Kubernetes Clusters</h3>
      <ul>
        <li>Restrict access to Kubernetes API and dashboard</li>
        <li>Use network policies and RBAC for pod security</li>
        <li>Regularly patch and update cluster components</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Cloud-Native Firewalls</h3>
      <ul>
        <li>Configure security groups, firewall rules, and network ACLs</li>
        <li>Segment networks to isolate sensitive workloads</li>
        <li>Monitor traffic for suspicious activity</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Auditing AWS S3 bucket permissions (AWS CLI)
aws s3api get-bucket-acl --bucket my-bucket
# Review the output for public access or misconfigurations
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Multi-Cloud Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Hybrid cloud deployments</li>
          <li>Compliance with regulatory standards</li>
          <li>Protection of sensitive data across platforms</li>
          <li>Incident response and monitoring</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Multi-cloud security is essential for organizations leveraging multiple providers.  
        Master these practices to prevent breaches and maintain robust cloud defenses.
      </p>
    </div>
  );
}