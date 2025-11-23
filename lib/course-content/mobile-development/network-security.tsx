export default function NetworkSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Network Security</h2>
      <p className="text-gray-600">
        Network security focuses on protecting data in transit, preventing unauthorized access, and ensuring safe communication between mobile apps and servers.
        Mastering these techniques is essential for building secure, trustworthy applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Network Security?</h3>
        <p className="text-blue-700">
          Secure networking protects user data, prevents attacks, and helps you comply with privacy regulations and app store requirements.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Use HTTPS Everywhere</h3>
      <ul>
        <li>Always use HTTPS for API and web requests</li>
        <li>Redirect HTTP traffic to HTTPS endpoints</li>
        <li>Update legacy endpoints to support TLS</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Certificate Validation & Pinning</h3>
      <ul>
        <li>Validate SSL/TLS certificates for all connections</li>
        <li>Implement certificate pinning to prevent man-in-the-middle attacks</li>
        <li>Handle certificate errors securely</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Secure API Authentication</h3>
      <ul>
        <li>Use OAuth, JWT, or API keys for authentication</li>
        <li>Never hard-code secrets in the app</li>
        <li>Rotate and revoke credentials as needed</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Data Validation & Encryption</h3>
      <ul>
        <li>Validate and sanitize all incoming and outgoing data</li>
        <li>Encrypt sensitive data before sending over the network</li>
        <li>Use platform APIs for secure storage and transmission</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Enforce HTTPS in AndroidManifest.xml
<application>
  <uses-library android:name="org.apache.http.legacy" android:required="false"/>
  <network-security-config android:resource="@xml/network_security_config" />
</application>

// Example: Simple certificate pinning with OkHttp (Kotlin)
val client = OkHttpClient.Builder()
  .certificatePinner(
    CertificatePinner.Builder()
      .add("api.example.com", "sha256/AAAAAAAAAAAAAAAAAAAAA...")
      .build()
  )
  .build()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Banking and financial apps</li>
          <li>Healthcare and sensitive data apps</li>
          <li>Enterprise and business applications</li>
          <li>Any app transmitting user data</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Network security is essential for protecting users and your app.  
        Master these techniques to deliver secure, compliant, and reliable mobile applications.
      </p>
    </div>
  );
}