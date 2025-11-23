export default function SecurityConceptsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Security Concepts</h2>
      <p className="text-gray-600">
        Security concepts are the foundational principles and practices that guide the protection of information systems.  
        Understanding these concepts is essential for building secure architectures and defending against threats.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Security Concepts?</h3>
        <p className="text-blue-700">
          Mastering security concepts helps you design, implement, and maintain effective security controls across systems and networks.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Risk Assessment</h3>
      <ul>
        <li>Identifying, evaluating, and prioritizing risks to assets</li>
        <li>Helps allocate resources for maximum protection</li>
        <li>Methods: qualitative, quantitative, and hybrid approaches</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Security Controls</h3>
      <ul>
        <li>Measures to reduce risk and protect assets</li>
        <li>Types: preventive, detective, corrective</li>
        <li>Examples: firewalls, encryption, access controls, monitoring</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Cryptography</h3>
      <ul>
        <li>Secures data through encryption, hashing, and digital signatures</li>
        <li>Protects confidentiality, integrity, and authenticity</li>
        <li>Common algorithms: AES, RSA, SHA-256</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Access Control</h3>
      <ul>
        <li>Restricts access to resources based on identity and permissions</li>
        <li>Models: discretionary, mandatory, role-based (RBAC)</li>
        <li>Principle of least privilege: users get only the access they need</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Encrypting data with OpenSSL (Linux)
echo "secret data" | openssl enc -aes-256-cbc -a -salt -pass pass:mykey
# Output is encrypted and safe for storage or transmission
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Security Concepts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Designing secure systems and networks</li>
          <li>Implementing compliance frameworks</li>
          <li>Protecting sensitive data and assets</li>
          <li>Incident response and risk management</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Security concepts are the backbone of effective cybersecurity.  
        Master these principles to build resilient systems and defend against evolving threats.
      </p>
    </div>
  );
}