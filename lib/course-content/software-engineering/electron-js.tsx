export default function ElectronJsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Electron.js</h2>
      <p className="text-gray-600">
        Electron.js enables you to build cross-platform desktop applications using web technologies (JavaScript, HTML, CSS).  
        It combines the power of Node.js and Chromium, allowing you to create native-like apps with a single codebase.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Electron.js?</h3>
        <p className="text-blue-700">
          Electron.js is ideal for rapid development, rich UIs, and leveraging web skills for desktop software.  
          Popular apps like VS Code, Slack, and Discord are built with Electron.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Node + Chromium Architecture</h3>
      <ul>
        <li>Combines Node.js backend with Chromium frontend</li>
        <li>Main process manages windows and system events</li>
        <li>Renderer process runs the web UI</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. IPC Communication</h3>
      <ul>
        <li>Inter-process communication (IPC) between main and renderer</li>
        <li>Use <code>ipcMain</code> and <code>ipcRenderer</code> modules</li>
        <li>Securely exchange data and trigger actions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Security Hardening</h3>
      <ul>
        <li>Disable Node integration in renderer when possible</li>
        <li>Use context isolation and content security policies</li>
        <li>Keep dependencies up to date and audit for vulnerabilities</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Packaging & Auto-Updates</h3>
      <ul>
        <li>Package apps for Windows, macOS, and Linux using tools like <code>electron-builder</code></li>
        <li>Implement auto-update mechanisms for seamless upgrades</li>
        <li>Code signing for trusted distribution</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Minimal Electron main process (main.js)
const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({ width: 800, height: 600 });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Electron.js</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cross-platform productivity tools (VS Code, Slack)</li>
          <li>Custom desktop dashboards and utilities</li>
          <li>Apps requiring web and native integration</li>
          <li>Rapid prototyping of desktop software</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Electron.js is a powerful framework for building modern desktop apps with web technologies.  
        Master these concepts to deliver robust, cross-platform software efficiently.
      </p>
    </div>
  );
}