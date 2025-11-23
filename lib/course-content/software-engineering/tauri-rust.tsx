export default function TauriRustContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tauri (Rust)</h2>
      <p className="text-gray-600">
        Tauri is a framework for building secure, lightweight, and cross-platform desktop applications using web technologies and Rust.  
        It enables you to create native apps with a small footprint and strong security guarantees.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Tauri?</h3>
        <p className="text-blue-700">
          Tauri apps are fast, memory-efficient, and secure.  
          They leverage Rust for the backend and any frontend framework (React, Vue, Svelte, etc.) for the UI.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Architecture</h3>
      <ul>
        <li>Rust-powered backend for native APIs and logic</li>
        <li>Webview frontend for UI (HTML, CSS, JS)</li>
        <li>IPC (invoke/emit) for communication between frontend and backend</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Security Model</h3>
      <ul>
        <li>Strong isolation between frontend and backend</li>
        <li>Minimal permissions by default</li>
        <li>Custom protocol and CSP for secure resource loading</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Building & Packaging</h3>
      <ul>
        <li>Use <code>tauri dev</code> for development and hot reload</li>
        <li>Build installers for Windows (MSI), macOS (DMG), and Linux (AppImage, DEB, etc.)</li>
        <li>Code signing and auto-update support</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Native APIs & Plugins</h3>
      <ul>
        <li>Access file system, notifications, clipboard, and more via Rust</li>
        <li>Extend functionality with Tauri plugins or custom Rust code</li>
        <li>Expose safe APIs to the frontend</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Expose a Rust command to the frontend (src-tauri/src/main.rs)
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

// In frontend JS:
// window.__TAURI__.invoke('greet', { name: 'World' }).then(console.log);
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Tauri</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Cross-platform desktop productivity tools</li>
          <li>Secure apps with native performance</li>
          <li>Lightweight alternatives to Electron</li>
          <li>Integrating Rust logic with modern web UIs</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Tauri combines the power of Rust and web technologies for secure, efficient desktop apps.  
        Master these concepts to build modern, cross-platform software with a small footprint.
      </p>
    </div>
  );
}