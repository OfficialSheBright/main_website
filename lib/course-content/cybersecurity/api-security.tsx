export default function ApiSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">API Security</h2>
      <p className="text-gray-600">
        API security is essential for protecting data and services exposed through application programming interfaces.  
        Modern APIs are frequent targets for attackers due to their accessibility and critical role in application architecture.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why API Security?</h3>
        <p className="text-blue-700">
          APIs often handle sensitive data and business logic. Securing them prevents unauthorized access, data breaches, and abuse.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. REST API Vulnerabilities</h3>
      <ul>
        <li>Injection attacks (SQL, NoSQL, Command)</li>
        <li>Broken authentication</li>
        <li>Excessive data exposure</li>
        <li>Improper asset management</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. OAuth & JWT Security</h3>
      <ul>
        <li>OAuth for delegated authorization</li>
        <li>JWT for stateless authentication</li>
        <li>Token validation and expiration</li>
        <li>Preventing token leakage and replay attacks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. API Throttling & Rate Limiting</h3>
      <ul>
        <li>Preventing abuse and denial-of-service</li>
        <li>Setting limits per user/IP</li>
        <li>Graceful error handling for rate limits</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. OWASP API Top 10</h3>
      <ul>
        <li>Broken Object Level Authorization</li>
        <li>Broken User Authentication</li>
        <li>Excessive Data Exposure</li>
        <li>Lack of Resources & Rate Limiting</li>
        <li>Mass Assignment</li>
        <li>Security Misconfiguration</li>
        <li>Injection</li>
        <li>Improper Asset Management</li>
        <li>Insufficient Logging & Monitoring</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. GraphQL Security</h3>
      <ul>
        <li>Query complexity and depth limiting</li>
        <li>Authorization checks for resolvers</li>
        <li>Preventing introspection in production</li>
        <li>Input validation and error handling</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Rate limiting a REST API endpoint (Python, Flask)
from flask_limiter import Limiter
from flask import Flask

app = Flask(__name__)
limiter = Limiter(app, key_func=lambda: "user_id")

@app.route("/api/data")
@limiter.limit("100 per hour")
def get_data():
    return {"data": "secure"}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of API Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting web and mobile backends</li>
          <li>Securing microservices architectures</li>
          <li>Safeguarding third-party integrations</li>
          <li>Preventing data breaches and abuse</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        API security is a cornerstone of modern application defense.  
        Mastering these techniques helps prevent attacks and ensures safe, reliable service delivery.
      </p>
    </div>
  );
}