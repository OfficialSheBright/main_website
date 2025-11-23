export default function PythonPackagingDeploymentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Packaging & Deployment (Python)</h2>
      <p className="text-gray-600">
        Packaging and deployment are essential steps for distributing Python desktop applications to users.  
        Mastering these techniques ensures your apps are easy to install, update, and run on different platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Packaging & Deployment?</h3>
        <p className="text-blue-700">
          Proper packaging and deployment make your software accessible, professional, and user-friendly, reducing friction for end users.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. PyInstaller</h3>
      <ul>
        <li>Bundle Python scripts and dependencies into standalone executables</li>
        <li>Supports Windows, macOS, and Linux</li>
        <li>Ideal for distributing apps to users without requiring Python installation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Building Installers (MSI, EXE, DMG)</h3>
      <ul>
        <li>Create platform-specific installers for easy installation</li>
        <li>Use tools like Inno Setup (Windows), pkgbuild/productbuild (macOS), or native Linux packaging</li>
        <li>Sign installers for security and trust</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Create a standalone executable with PyInstaller
pyinstaller --onefile --windowed main.py
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Packaging & Deployment</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Distributing desktop apps to end users</li>
          <li>Automating software updates and installations</li>
          <li>Ensuring cross-platform compatibility</li>
          <li>Improving user experience and adoption</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Packaging and deployment are crucial for delivering professional Python applications.  
        Master these tools to make your software easy to share, install, and use.
      </p>
    </div>
  );
}