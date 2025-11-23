export default function SecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Security</h2>
      <p className="text-gray-600">
        Security is a fundamental aspect of software engineering, ensuring that systems and data are protected from unauthorized access, misuse, and attacks.  
        Mastering security concepts is essential for building trustworthy and resilient applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Security?</h3>
        <p className="text-blue-700">
          Security protects users, organizations, and infrastructure from threats, data breaches, and financial loss.  
          It is a critical requirement for compliance and user trust.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Authentication & Authorization</h3>
      <ul>
        <li>Authentication: verifying user identity (passwords, OAuth, biometrics)</li>
        <li>Authorization: controlling access to resources based on roles and permissions</li>
        <li>Principle of least privilege</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Encryption</h3>
      <ul>
        <li>Protect data in transit (TLS/SSL) and at rest (AES, RSA)</li>
        <li>Hashing passwords with bcrypt, Argon2, or PBKDF2</li>
        <li>Key management best practices</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Secure Coding Practices</h3>
      <ul>
        <li>Input validation and sanitization</li>
        <li>Preventing SQL injection, XSS, and CSRF attacks</li>
        <li>Regularly update dependencies and patch vulnerabilities</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Security Testing</h3>
      <ul>
        <li>Static and dynamic code analysis</li>
        <li>Penetration testing and vulnerability scanning</li>
        <li>Automated security checks in CI/CD pipelines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Hashing a password in Node.js
const bcrypt = require('bcrypt');
const password = 'mySecret123';
bcrypt.hash(password, 10, (err, hash) => {
  if (!err) console.log('Hashed password:', hash);
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting user data and privacy</li>
          <li>Securing APIs, web, and mobile applications</li>
          <li>Compliance with regulations (GDPR, HIPAA, PCI DSS)</li>
          <li>Preventing cyber attacks and data breaches</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Security is a non-negotiable requirement for all software systems.  
        Master these concepts to build safe, reliable, and trustworthy applications.
      </p>
    </div>
  );
}