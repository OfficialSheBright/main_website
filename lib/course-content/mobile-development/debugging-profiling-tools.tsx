export default function DebuggingProfilingToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Debugging & Profiling Tools</h2>
      <p className="text-gray-600">
        Debugging and profiling tools help you find and fix bugs, optimize performance, and ensure reliability in mobile apps.  
        Mastering these tools is essential for delivering high-quality, efficient applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Debug & Profile?</h3>
        <p className="text-blue-700">
          Debugging and profiling improve code quality, user experience, and app stability by identifying issues before release.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Debugging Tools</h3>
      <ul>
        <li>Use Android Studio Debugger, Xcode Debugger, or Chrome DevTools</li>
        <li>Set breakpoints, inspect variables, and step through code</li>
        <li>Analyze logs and crash reports for troubleshooting</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Profiling Tools</h3>
      <ul>
        <li>Profile CPU, memory, and network usage with Android Profiler, Xcode Instruments, or Flutter DevTools</li>
        <li>Identify performance bottlenecks and leaks</li>
        <li>Optimize rendering, startup, and background tasks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Automated Testing & Monitoring</h3>
      <ul>
        <li>Run unit, integration, and UI tests to catch bugs early</li>
        <li>Use CI/CD pipelines for automated builds and tests</li>
        <li>Monitor crashes and analytics post-release</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Set a breakpoint in Android Studio
// 1. Click the gutter next to a line of code.
// 2. Run the app in debug mode.
// 3. Inspect variables and step through execution.
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Debugging & Profiling Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Bug fixing and troubleshooting</li>
          <li>Performance optimization</li>
          <li>Quality assurance and testing</li>
          <li>Continuous monitoring and improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Debugging and profiling are essential for building reliable, high-performance mobile apps.  
        Master these tools to deliver polished, efficient applications for any platform.
      </p>
    </div>
  );
}