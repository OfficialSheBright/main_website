export default function SecureCodingPracticesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Secure Coding Practices</h2>
      <p className="text-gray-600">
        Secure coding practices are essential for building resilient applications that resist attacks and protect sensitive data.  
        Adopting these practices helps prevent common vulnerabilities and ensures software integrity.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Secure Coding?</h3>
        <p className="text-blue-700">
          Writing secure code reduces the risk of exploitation, data breaches, and compliance failures.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Input Validation & Sanitization</h3>
      <ul>
        <li>Validate all user inputs for type, length, format, and range</li>
        <li>Sanitize inputs to remove or escape dangerous characters</li>
        <li>Prevents injection attacks (SQLi, XSS, etc.)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Secure Authentication Flows</h3>
      <ul>
        <li>Implement strong password policies and multi-factor authentication (MFA)</li>
        <li>Use secure session management and token-based authentication</li>
        <li>Never store plaintext passwords</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Secrets Management</h3>
      <ul>
        <li>Store secrets (API keys, credentials) in secure vaults or environment variables</li>
        <li>Rotate secrets regularly and restrict access</li>
        <li>Never hardcode secrets in source code</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Safe Error Handling</h3>
      <ul>
        <li>Avoid exposing sensitive information in error messages</li>
        <li>Log errors securely for auditing and troubleshooting</li>
        <li>Gracefully handle unexpected conditions</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Dependency Scanning</h3>
      <ul>
        <li>Regularly scan third-party libraries for vulnerabilities</li>
        <li>Keep dependencies up to date</li>
        <li>Use tools like npm audit, Snyk, or OWASP Dependency-Check</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Input validation in JavaScript
function isValidEmail(email) {
  const re = /^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
  return re.test(email);
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Secure Coding</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Web and mobile application development</li>
          <li>API and backend services</li>
          <li>DevOps and CI/CD pipelines</li>
          <li>Compliance with security standards</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Secure coding practices are the foundation of robust software security.  
        Master these techniques to build applications that withstand attacks and protect user data.
      </p>
    </div>
  );
}