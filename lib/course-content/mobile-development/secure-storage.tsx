export default function SecureStorageContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Secure Storage</h2>
      <p className="text-gray-600">
        Secure storage focuses on protecting sensitive data—such as tokens, credentials, and personal information—on mobile devices.  
        Mastering secure storage is essential for building trustworthy, compliant mobile apps.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Secure Storage?</h3>
        <p className="text-blue-700">
          Storing sensitive data securely prevents unauthorized access, data breaches, and helps meet privacy regulations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Platform Secure Storage APIs</h3>
      <ul>
        <li>Use Android Keystore for encryption and key management</li>
        <li>Use iOS Keychain for secure data storage</li>
        <li>Avoid storing secrets in plain text or shared preferences</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Cross-Platform Solutions</h3>
      <ul>
        <li>Use libraries like <code>react-native-keychain</code>, <code>flutter_secure_storage</code>, or <code>SecureStore</code></li>
        <li>Abstract secure storage for consistent use across platforms</li>
        <li>Regularly update libraries for security patches</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Encryption Best Practices</h3>
      <ul>
        <li>Encrypt sensitive data before storing</li>
        <li>Use strong, platform-provided encryption algorithms</li>
        <li>Never hard-code encryption keys in your app</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Access Control & Lifecycle</h3>
      <ul>
        <li>Restrict access to secure storage APIs</li>
        <li>Clear sensitive data on logout or app uninstall</li>
        <li>Test for leaks and unauthorized access</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Store a value securely in Flutter
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

final storage = FlutterSecureStorage();
await storage.write(key: 'token', value: 'my_secret_token');
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Secure Storage</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Authentication tokens and credentials</li>
          <li>Personal and financial information</li>
          <li>App configuration and secrets</li>
          <li>Any sensitive user data</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Secure storage is essential for protecting user data and app integrity.  
        Master these techniques to deliver safe, compliant mobile applications.
      </p>
    </div>
  );
}