export default function ReactNativeCoreContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">React Native Core</h2>
      <p className="text-gray-600">
        React Native core covers the essential concepts and tools for building cross-platform mobile apps using JavaScript and React.  
        Mastering these basics prepares you to create interactive, native-feeling applications for Android and iOS.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why React Native?</h3>
        <p className="text-blue-700">
          React Native enables fast development, code sharing, and native performance across platforms with a single codebase.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Components & JSX</h3>
      <ul>
        <li>Build UIs with components like <code>View</code>, <code>Text</code>, <code>Image</code>, <code>Button</code></li>
        <li>Use JSX syntax to describe UI structure</li>
        <li>Compose components for reusable layouts</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Navigation</h3>
      <ul>
        <li>Navigate between screens using libraries like <code>react-navigation</code></li>
        <li>Pass data between screens with params</li>
        <li>Support stack, tab, and drawer navigation patterns</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. State & Props</h3>
      <ul>
        <li>Manage UI state with <code>useState</code> and <code>useEffect</code></li>
        <li>Pass data to components via props</li>
        <li>Use context or state management libraries for complex apps</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Platform APIs & Native Modules</h3>
      <ul>
        <li>Access device features (camera, sensors, storage) via community packages</li>
        <li>Write custom native modules for advanced integrations</li>
        <li>Handle permissions and platform-specific code</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple React Native component
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function MyComponent() {
  const [count, setCount] = React.useState(0);
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of React Native Core</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cross-platform mobile app development</li>
          <li>Rapid prototyping and MVPs</li>
          <li>UI/UX design for Android and iOS</li>
          <li>Apps with shared business logic</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        React Native core is the foundation for building modern, cross-platform mobile apps.  
        Master these concepts to create, test, and publish applications for any audience.
      </p>
    </div>
  );
}