export default function PythonGuiFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Python GUI Frameworks</h2>
      <p className="text-gray-600">
        Python offers several frameworks for building graphical user interfaces (GUIs) for desktop and cross-platform applications.  
        Mastering these frameworks enables you to create interactive, user-friendly software with Python.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Python GUI Frameworks?</h3>
        <p className="text-blue-700">
          Python GUI frameworks allow rapid prototyping, cross-platform compatibility, and integration with Python&apos;s vast ecosystem for data, automation, and more.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Tkinter Basics</h3>
      <ul>
        <li>Standard GUI toolkit included with Python</li>
        <li>Simple API for windows, buttons, labels, and layouts</li>
        <li>Great for small tools and learning GUI concepts</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. PyQt / PySide</h3>
      <ul>
        <li>Bindings for the powerful Qt framework</li>
        <li>Rich set of widgets, advanced layouts, and event handling</li>
        <li>Supports cross-platform desktop apps with native look and feel</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Kivy for Mobile + Desktop</h3>
      <ul>
        <li>Open-source framework for multi-touch apps</li>
        <li>Runs on Windows, macOS, Linux, Android, and iOS</li>
        <li>Great for rapid prototyping and custom UIs</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Event Loops & Asynchronous UI</h3>
      <ul>
        <li>Event-driven programming for responsive interfaces</li>
        <li>Handle user input, timers, and background tasks</li>
        <li>Integrate with async Python code for non-blocking UIs</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Minimal Tkinter app
import tkinter as tk
root = tk.Tk()
root.title("Hello GUI")
tk.Label(root, text="Welcome!").pack()
root.mainloop()
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Python GUI Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Desktop productivity tools and utilities</li>
          <li>Data visualization and analysis apps</li>
          <li>Cross-platform and mobile user interfaces</li>
          <li>Rapid prototyping of interactive software</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Python GUI frameworks make it easy to build interactive, cross-platform applications.  
        Master these tools to create user-friendly software for any platform.
      </p>
    </div>
  );
}