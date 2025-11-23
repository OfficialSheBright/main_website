export default function OwaspMobileTop10Content() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">OWASP Mobile Top 10</h2>
      <p className="text-gray-600">
        The OWASP Mobile Top 10 is a list of the most critical security risks for mobile applications.  
        Understanding these risks helps you build secure, trustworthy apps and protect user data.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why OWASP Mobile Top 10?</h3>
        <p className="text-blue-700">
          Following OWASP guidelines helps you identify, prevent, and mitigate common vulnerabilities in mobile apps.
        </p>
      </div>

      {/* TOP 10 LIST */}
      <h3 className="text-2xl font-bold text-gray-800">OWASP Mobile Top 10 Risks</h3>
      <ol className="list-decimal ml-6">
        <li>Improper Platform Usage</li>
        <li>Insecure Data Storage</li>
        <li>Insecure Communication</li>
        <li>Insecure Authentication</li>
        <li>Insufficient Cryptography</li>
        <li>Insecure Authorization</li>
        <li>Poor Code Quality</li>
        <li>Code Tampering</li>
        <li>Reverse Engineering</li>
        <li>Extraneous Functionality</li>
      </ol>

      {/* SECTION: HOW TO MITIGATE */}
      <h3 className="text-2xl font-bold text-gray-800">How to Mitigate These Risks</h3>
      <ul>
        <li>Follow secure coding practices and platform guidelines</li>
        <li>Encrypt sensitive data at rest and in transit</li>
        <li>Use strong authentication and authorization mechanisms</li>
        <li>Regularly test and update your app for vulnerabilities</li>
        <li>Remove debug code and unnecessary features before release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Enforce HTTPS for secure communication (AndroidManifest.xml)
<application>
  <network-security-config android:resource="@xml/network_security_config" />
</application>
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of OWASP Mobile Top 10</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Banking and financial apps</li>
          <li>Healthcare and sensitive data apps</li>
          <li>Enterprise and business applications</li>
          <li>Any app handling user data or authentication</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The OWASP Mobile Top 10 is essential for secure mobile development.  
        Master these risks and mitigations to protect your app and its users from common threats.
      </p>
    </div>
  );
}