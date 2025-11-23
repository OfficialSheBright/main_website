export default function AppHardeningContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">App Hardening</h2>
      <p className="text-gray-600">
        App hardening covers techniques to secure mobile apps against threats, including code obfuscation, secure storage, and runtime protection.  
        Mastering these practices helps protect user data and prevent tampering or reverse engineering.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why App Hardening?</h3>
        <p className="text-blue-700">
          Hardening your app reduces the risk of data breaches, piracy, and unauthorized access, ensuring user trust and compliance.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Code Obfuscation</h3>
      <ul>
        <li>Use tools like ProGuard (Android) or R8 to obfuscate code</li>
        <li>Rename classes, methods, and variables to prevent reverse engineering</li>
        <li>Minimize exposed APIs and debug info in release builds</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Secure Storage</h3>
      <ul>
        <li>Store sensitive data in encrypted storage (Keystore, Keychain)</li>
        <li>Avoid storing secrets in plain text or shared preferences</li>
        <li>Use platform APIs for secure credential management</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Runtime Protection</h3>
      <ul>
        <li>Detect root/jailbreak and block risky environments</li>
        <li>Implement anti-tampering and anti-debugging checks</li>
        <li>Monitor app integrity at runtime</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Network Security</h3>
      <ul>
        <li>Use HTTPS for all network communication</li>
        <li>Validate SSL certificates and use certificate pinning</li>
        <li>Sanitize and validate all incoming data</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Enable ProGuard in Android build.gradle
buildTypes {
  release {
    minifyEnabled true
    proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of App Hardening</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Banking and financial apps</li>
          <li>Healthcare and sensitive data apps</li>
          <li>Enterprise and business applications</li>
          <li>Any app requiring strong security</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        App hardening is essential for secure, trustworthy mobile applications.  
        Master these techniques to protect your app and its users from threats.
      </p>
    </div>
  );
}