export default function AdvancedReactNativeContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced React Native</h2>
      <p className="text-gray-600">
        Advanced React Native development covers state management, native modules, performance optimization, and publishing apps.  
        Mastering these skills helps you build scalable, maintainable, and high-performance cross-platform mobile applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced React Native?</h3>
        <p className="text-blue-700">
          Advanced techniques enable you to create robust apps, leverage native features, and deliver great user experiences on Android and iOS.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. State Management</h3>
      <ul>
        <li>Use Redux, MobX, or Context API for scalable state management</li>
        <li>Separate UI and business logic for maintainability</li>
        <li>Enable easier testing and code reuse</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Native Modules & Integration</h3>
      <ul>
        <li>Integrate native code with React Native using bridges</li>
        <li>Access device features (camera, sensors, notifications)</li>
        <li>Use third-party native libraries for advanced functionality</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Performance Optimization</h3>
      <ul>
        <li>Profile and optimize memory, CPU, and rendering</li>
        <li>Use FlatList, memoization, and code splitting for efficiency</li>
        <li>Minimize app size and startup time</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Publishing & Distribution</h3>
      <ul>
        <li>Prepare your app for Google Play and App Store release</li>
        <li>Sign APKs/IPAs and manage versioning</li>
        <li>Monitor crashes and user feedback post-launch</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Redux slice for counter state
import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: state => { state.value += 1; }
  }
});
export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced React Native</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Scalable business apps</li>
          <li>Real-time and offline-first applications</li>
          <li>Apps with complex navigation and data flows</li>
          <li>Production-ready releases for Android and iOS</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced React Native development is essential for building robust, modern apps.  
        Master these tools and patterns to deliver high-quality experiences for users.
      </p>
    </div>
  );
}