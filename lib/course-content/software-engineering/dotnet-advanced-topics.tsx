export default function DotnetAdvancedTopicsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">.NET Advanced Topics</h2>
      <p className="text-gray-600">
        Advanced .NET topics empower you to build high-performance, secure, and production-ready desktop applications.  
        Mastering these concepts is essential for professional Windows and cross-platform development.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Advanced .NET?</h3>
        <p className="text-blue-700">
          Advanced .NET skills enable you to optimize performance, leverage hardware acceleration, and ensure secure deployments for enterprise-grade applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Threading</h3>
      <ul>
        <li>Use <code>Thread</code>, <code>Task</code>, and async/await for concurrency</li>
        <li>Manage synchronization with locks, semaphores, and concurrent collections</li>
        <li>Build responsive UIs and background workers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. DirectX/Graphics Basics</h3>
      <ul>
        <li>Integrate DirectX for hardware-accelerated graphics</li>
        <li>Render 2D/3D graphics in WPF or WinUI</li>
        <li>Use libraries like SharpDX or Windows.Graphics for advanced visuals</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Deployment & Signing</h3>
      <ul>
        <li>Package applications with MSIX, ClickOnce, or custom installers</li>
        <li>Digitally sign executables for security and trust</li>
        <li>Automate deployment pipelines for continuous delivery</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple async method in C#
public async Task<string> DownloadAsync(string url) {
  using var client = new HttpClient();
  return await client.GetStringAsync(url);
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of .NET Advanced Topics</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building high-performance desktop and enterprise apps</li>
          <li>Integrating advanced graphics and multimedia</li>
          <li>Ensuring secure, trusted deployments</li>
          <li>Automating release and update workflows</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced .NET topics are essential for professional desktop development.  
        Master these skills to deliver robust, secure, and high-performance applications.
      </p>
    </div>
  );
}