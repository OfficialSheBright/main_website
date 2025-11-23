export default function SecurityGovernanceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Security & Governance</h2>
      <p className="text-gray-600">
        Security and governance are critical for protecting data, ensuring compliance, and managing risk in cloud and data platforms.  
        Implementing robust controls and policies is essential for enterprise-grade solutions.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Security & Governance?</h3>
        <p className="text-blue-700">
          Security and governance safeguard sensitive data, prevent breaches, and ensure regulatory compliance across systems.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Access Control</h3>
      <ul>
        <li>Role-based access control (RBAC) for users and resources</li>
        <li>Principle of least privilege</li>
        <li>Multi-factor authentication (MFA) for enhanced security</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Encryption</h3>
      <ul>
        <li>Encrypt data at rest and in transit</li>
        <li>Use strong encryption algorithms and key management systems</li>
        <li>Regularly rotate and audit encryption keys</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Compliance & Auditing</h3>
      <ul>
        <li>Adhere to standards (GDPR, HIPAA, PCI-DSS)</li>
        <li>Enable logging and monitoring for audit trails</li>
        <li>Conduct regular security assessments and reviews</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Data Governance Policies</h3>
      <ul>
        <li>Define data ownership, stewardship, and lifecycle management</li>
        <li>Implement data quality and integrity controls</li>
        <li>Document policies for data access, sharing, and retention</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Enabling audit logging in PostgreSQL
ALTER SYSTEM SET log_statement = 'all';
SELECT * FROM pg_stat_activity;
# Review logs for compliance and security monitoring
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Security & Governance</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting sensitive and regulated data</li>
          <li>Ensuring business continuity and trust</li>
          <li>Supporting audits and regulatory reviews</li>
          <li>Managing data lifecycle and quality</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Security and governance are essential for robust cloud and data platforms.  
        Master these practices to protect assets, ensure compliance, and manage risk effectively.
      </p>
    </div>
  );
}