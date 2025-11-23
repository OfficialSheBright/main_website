export default function CrossDeviceExperiencesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Cross-Device Experiences</h2>
      <p className="text-gray-600">
        Cross-device experiences focus on building apps that work seamlessly across phones, tablets, wearables, and desktops.  
        Mastering these techniques ensures your app delivers a consistent, engaging experience on any device.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Cross-Device?</h3>
        <p className="text-blue-700">
          Supporting multiple devices increases your app’s reach, accessibility, and user satisfaction.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Responsive UI Design</h3>
      <ul>
        <li>Use adaptive layouts for different screen sizes and orientations</li>
        <li>Leverage platform-specific UI guidelines</li>
        <li>Test interfaces on emulators and real devices</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Data Sync & Continuity</h3>
      <ul>
        <li>Sync user data across devices using cloud services</li>
        <li>Enable handoff and continuity features (e.g., resume on another device)</li>
        <li>Handle offline and online states gracefully</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Platform Integration</h3>
      <ul>
        <li>Integrate with device features (camera, sensors, notifications)</li>
        <li>Support wearables, desktops, and smart TVs</li>
        <li>Use APIs for cross-device communication</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Testing & Optimization</h3>
      <ul>
        <li>Test performance and usability on all target devices</li>
        <li>Optimize assets and code for each platform</li>
        <li>Monitor analytics to improve cross-device experience</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Flutter responsive layout
Widget build(BuildContext context) {
  if (MediaQuery.of(context).size.width > 600) {
    return TabletLayout();
  } else {
    return MobileLayout();
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Cross-Device Experiences</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Apps for phones, tablets, wearables, and desktops</li>
          <li>Seamless data sync and handoff</li>
          <li>Multi-platform productivity and health apps</li>
          <li>Smart home and IoT solutions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Cross-device experiences are essential for modern, accessible apps.  
        Master these techniques to deliver seamless, engaging solutions for any device.
      </p>
    </div>
  );
}