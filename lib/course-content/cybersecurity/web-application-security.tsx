export default function WebApplicationSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Web Application Security</h2>
      <p className="text-gray-600">
        Web application security focuses on protecting websites and APIs from attacks that target vulnerabilities in code, configuration, and logic.  
        Secure web apps are essential for safeguarding user data and business operations.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Web Security?</h3>
        <p className="text-blue-700">
          Web applications are frequent targets for attackers. Strong security prevents data breaches, fraud, and service disruption.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. OWASP Top 10</h3>
      <ul>
        <li>Most critical web vulnerabilities: SQLi, XSS, CSRF, SSRF, RCE, etc.</li>
        <li>Regularly updated by the Open Web Application Security Project</li>
        <li>Guides secure coding and testing practices</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Secure Authentication & Session Management</h3>
      <ul>
        <li>Implement strong password policies and multi-factor authentication (MFA)</li>
        <li>Use secure cookies and session tokens</li>
        <li>Prevent session fixation and hijacking</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Input Validation & Output Encoding</h3>
      <ul>
        <li>Validate and sanitize all user inputs</li>
        <li>Encode outputs to prevent injection attacks (SQLi, XSS)</li>
        <li>Use frameworks and libraries for safe handling</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Security Headers & HTTPS</h3>
      <ul>
        <li>Set HTTP security headers (Content-Security-Policy, X-Frame-Options, etc.)</li>
        <li>Enforce HTTPS for encrypted communication</li>
        <li>Prevent clickjacking and man-in-the-middle attacks</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Automated Security Testing</h3>
      <ul>
        <li>Use tools like Burp Suite, OWASP ZAP, and Nikto</li>
        <li>Integrate security testing into CI/CD pipelines</li>
        <li>Regularly scan for vulnerabilities and misconfigurations</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Setting HTTP security headers in Express.js
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  next();
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Web Application Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting user accounts and sensitive data</li>
          <li>Securing e-commerce and financial platforms</li>
          <li>Preventing fraud and abuse</li>
          <li>Compliance with privacy and security standards</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Web application security is essential for safe online experiences.  
        Master these techniques to build, test, and audit secure web platforms.
      </p>
    </div>
  );
}