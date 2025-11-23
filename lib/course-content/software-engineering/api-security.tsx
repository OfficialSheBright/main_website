export default function ApiSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">API Security</h2>
      <p className="text-gray-600">
        API security is critical for protecting data, users, and systems from unauthorized access and attacks.  
        Understanding security best practices is essential for every backend and full-stack engineer.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why API Security?</h3>
        <p className="text-blue-700">
          APIs are common attack targets. Secure APIs prevent data breaches, protect user privacy, and ensure compliance with regulations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. OAuth 2.0</h3>
      <ul>
        <li>Industry-standard protocol for authorization</li>
        <li>Delegates access without sharing credentials</li>
        <li>Commonly used for third-party integrations</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. API Keys</h3>
      <ul>
        <li>Simple method for identifying and authenticating clients</li>
        <li>Should be kept secret and rotated regularly</li>
        <li>Limit access and monitor usage</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Rate Limiting</h3>
      <ul>
        <li>Protects APIs from abuse and denial-of-service attacks</li>
        <li>Limits the number of requests per client or IP</li>
        <li>Returns appropriate status codes (e.g., 429 Too Many Requests)</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. SSL/TLS</h3>
      <ul>
        <li>Encrypts data in transit between client and server</li>
        <li>Prevents eavesdropping and man-in-the-middle attacks</li>
        <li>Always use HTTPS for public APIs</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. OWASP API Top 10</h3>
      <ul>
        <li>Awareness of the most critical API security risks</li>
        <li>Includes issues like broken authentication, excessive data exposure, and injection attacks</li>
        <li>Follow OWASP guidelines to mitigate common vulnerabilities</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Express.js middleware for API key check
app.use('/api', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of API Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting sensitive data and user accounts</li>
          <li>Securing public and private APIs</li>
          <li>Complying with data protection regulations</li>
          <li>Preventing abuse and service disruptions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        API security is essential for safe, reliable software systems.  
        Master these practices to defend your APIs against threats and vulnerabilities.
      </p>
    </div>
  );
}