export default function DatabaseSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Database Security</h2>
      <p className="text-gray-600">
        Database security protects sensitive data from unauthorized access, breaches, and misuse.  
        Implementing robust security controls is essential for compliance and business continuity.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Database Security?</h3>
        <p className="text-blue-700">
          Secure databases prevent data leaks, fraud, and regulatory violations, ensuring trust and reliability.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Authentication & Authorization</h3>
      <ul>
        <li>Verify user identities before granting access</li>
        <li>Role-based access control (RBAC) for permissions</li>
        <li>Enforce least privilege principle</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Encryption</h3>
      <ul>
        <li>Encrypt data at rest and in transit</li>
        <li>Use strong algorithms (AES, TLS)</li>
        <li>Manage keys securely (KMS, HSM)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Auditing</h3>
      <ul>
        <li>Track access and changes to sensitive data</li>
        <li>Enable logging for compliance and forensics</li>
        <li>Monitor for suspicious activity and anomalies</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`-- Example: Creating a user with limited privileges in MySQL
CREATE USER 'analyst'@'%' IDENTIFIED BY 'StrongPassword!';
GRANT SELECT ON database.* TO 'analyst'@'%';
-- Enable audit logging and configure encryption as needed
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Database Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting customer and business data</li>
          <li>Compliance with GDPR, HIPAA, PCI-DSS</li>
          <li>Preventing insider threats and external attacks</li>
          <li>Supporting incident response and forensics</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Database security is critical for safeguarding data and meeting regulatory requirements.  
        Master these controls to build resilient, trustworthy data platforms.
      </p>
    </div>
  );
}