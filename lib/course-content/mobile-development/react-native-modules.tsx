export default function ReactNativeModulesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">React Native Modules</h2>
      <p className="text-gray-600">
        React Native modules allow you to extend your app with native functionality, integrate third-party libraries, and access device features not available in JavaScript alone.
        Mastering modules helps you build powerful, flexible cross-platform apps.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use Modules?</h3>
        <p className="text-blue-700">
          Modules let you bridge native code (Java, Kotlin, Objective-C, Swift) with JavaScript, unlocking advanced features and performance.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Native Modules</h3>
      <ul>
        <li>Write custom modules in Java/Kotlin (Android) or Objective-C/Swift (iOS)</li>
        <li>Expose native APIs to JavaScript via the React Native bridge</li>
        <li>Use for device features like sensors, Bluetooth, or background tasks</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Community Modules</h3>
      <ul>
        <li>Install popular modules from npm (e.g., <code>react-native-device-info</code>, <code>react-native-fs</code>)</li>
        <li>Link native code automatically with autolinking (React Native 0.60+)</li>
        <li>Follow documentation for setup and permissions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Linking & Permissions</h3>
      <ul>
        <li>Autolinking handles most modules; use <code>react-native link</code> for older projects</li>
        <li>Update AndroidManifest.xml or Info.plist for required permissions</li>
        <li>Test modules on both Android and iOS devices</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Debugging & Maintenance</h3>
      <ul>
        <li>Check native logs for errors (<code>adb logcat</code>, Xcode console)</li>
        <li>Keep modules up to date for compatibility</li>
        <li>Write wrapper components for reusable logic</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Using a community module (react-native-device-info)
import DeviceInfo from 'react-native-device-info';

const deviceId = DeviceInfo.getDeviceId();
console.log('Device ID:', deviceId);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of React Native Modules</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Accessing device hardware and sensors</li>
          <li>Integrating third-party SDKs</li>
          <li>Custom native features for Android/iOS</li>
          <li>Performance-critical operations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        React Native modules are essential for building feature-rich, high-performance apps.  
        Master these techniques to unlock the full power of native and cross-platform development.
      </p>
    </div>
  );
}