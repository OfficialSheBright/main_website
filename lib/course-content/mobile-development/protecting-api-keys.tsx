export default function ProtectingApiKeysContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Protecting API Keys</h2>
      <p className="text-gray-600">
        Protecting API keys is crucial for securing your mobile app and backend services.  
        Exposed keys can lead to abuse, data breaches, and loss of user trust.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Protect API Keys?</h3>
        <p className="text-blue-700">
          API keys grant access to sensitive services and data.  
          If leaked, attackers can impersonate your app, rack up costs, or steal user information.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Never Hard-Code Keys</h3>
      <ul>
        <li>Do not store API keys directly in your source code or version control</li>
        <li>Use environment variables or secure storage solutions</li>
        <li>Remove keys from public repositories immediately if leaked</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Use Secure Storage</h3>
      <ul>
        <li>Store secrets in Android Keystore, iOS Keychain, or encrypted storage</li>
        <li>Restrict access to keys at runtime</li>
        <li>Never log or display keys in the UI</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Proxy Sensitive Requests</h3>
      <ul>
        <li>Route sensitive API calls through your backend server</li>
        <li>Keep keys and credentials on the server side only</li>
        <li>Validate and sanitize all requests on the backend</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Restrict API Key Usage</h3>
      <ul>
        <li>Limit API key permissions to only what is necessary</li>
        <li>Use IP, referrer, or app signature restrictions if supported</li>
        <li>Rotate and revoke keys regularly</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Load API key from environment variable (Node.js backend)
const apiKey = process.env.MY_API_KEY;
if (!apiKey) throw new Error("API key not set");
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of API Key Protection</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile apps using third-party APIs</li>
          <li>Backend services and cloud integrations</li>
          <li>Any app handling sensitive credentials</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Protecting API keys is essential for app security and compliance.  
        Master these practices to keep your users and services safe from abuse.
      </p>
    </div>
  );
}