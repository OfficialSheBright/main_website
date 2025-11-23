export default function DesktopDevelopmentOverviewContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Desktop Development Overview</h2>
      <p className="text-gray-600">
        Desktop application development enables you to build powerful, native, or cross-platform software for Windows, macOS, and Linux.  
        Understanding the fundamentals is essential for creating responsive, user-friendly, and maintainable desktop apps.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Desktop Development?</h3>
        <p className="text-blue-700">
          Desktop apps offer rich user experiences, direct hardware access, and offline capabilities—ideal for productivity, creative, and specialized tools.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Native vs Cross-Platform</h3>
      <ul>
        <li><strong>Native:</strong> Built for a specific OS (e.g., Windows, macOS, Linux) using platform SDKs</li>
        <li><strong>Cross-platform:</strong> Single codebase runs on multiple OSes (e.g., Electron, Qt, JavaFX)</li>
        <li>Trade-offs: performance, look & feel, development speed</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. GUI Frameworks</h3>
      <ul>
        <li>Toolkits for building graphical user interfaces (GUIs)</li>
        <li>Popular frameworks: Tkinter (Python), PyQt, WPF (.NET), Electron (JS), GTK, wxWidgets</li>
        <li>Support for widgets, layouts, events, and custom components</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Threading & OS-Level Integrations</h3>
      <ul>
        <li>Multithreading for responsive UIs and background tasks</li>
        <li>Access to OS features: file system, notifications, hardware</li>
        <li>Handling concurrency and synchronization</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Dependency Management & Packaging</h3>
      <ul>
        <li>Managing libraries and dependencies (pip, NuGet, npm, etc.)</li>
        <li>Packaging apps for distribution (installers, portable builds)</li>
        <li>Code signing and update mechanisms</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Minimal Tkinter app in Python
import tkinter as tk
root = tk.Tk()
root.title("Hello Desktop")
tk.Label(root, text="Welcome!").pack()
root.mainloop()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Desktop Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Productivity and creative tools</li>
          <li>Scientific and engineering software</li>
          <li>Offline-first and hardware-integrated apps</li>
          <li>Enterprise and specialized business solutions</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Desktop development remains vital for many domains.  
        Master these fundamentals to build robust, user-friendly desktop applications.
      </p>
    </div>
  );
}