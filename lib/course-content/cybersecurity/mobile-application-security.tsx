export default function MobileApplicationSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Mobile Application Security</h2>
      <p className="text-gray-600">
        Mobile application security focuses on protecting apps running on Android and iOS devices.  
        Securing mobile apps is critical due to their widespread use and the sensitive data they handle.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Mobile Security?</h3>
        <p className="text-blue-700">
          Mobile apps are frequent targets for attackers. Strong security prevents data leaks, unauthorized access, and fraud.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Android Application Security</h3>
      <ul>
        <li>Secure coding practices for Android apps</li>
        <li>Protecting sensitive data and permissions</li>
        <li>Common vulnerabilities: insecure storage, improper authentication, exposed components</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. iOS Security Model</h3>
      <ul>
        <li>Sandboxing and app isolation</li>
        <li>Keychain for secure credential storage</li>
        <li>App transport security (ATS) for safe network communication</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Reverse Engineering (APKTool, Frida, Objection)</h3>
      <ul>
        <li>Analyzing app binaries to uncover vulnerabilities</li>
        <li>Tools for dynamic and static analysis of mobile apps</li>
        <li>Testing app defenses against tampering and code injection</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Decompiling an Android APK with APKTool (terminal)
apktool d my_app.apk
# Inspect the output for insecure code or secrets
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Mobile Security</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Protecting user privacy</li>
          <li>Securing financial and healthcare apps</li>
          <li>Preventing mobile fraud and abuse</li>
          <li>Compliance with app store and regulatory standards</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Mobile application security is essential for safeguarding user data and trust.  
        Master these techniques to build and audit secure mobile apps for Android and iOS.
      </p>
    </div>
  );
}