export default function DotnetFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">.NET Frameworks</h2>
      <p className="text-gray-600">
        .NET frameworks provide a powerful platform for building modern desktop applications on Windows and cross-platform environments.  
        Mastering these frameworks enables you to create robust, responsive, and maintainable software.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why .NET Frameworks?</h3>
        <p className="text-blue-700">
          .NET frameworks offer rich UI libraries, strong typing, and seamless integration with Windows features, making them ideal for enterprise and productivity apps.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. WPF (Windows Presentation Foundation)</h3>
      <ul>
        <li>Modern UI framework for Windows desktop apps</li>
        <li>Supports XAML for declarative UI design</li>
        <li>Advanced data binding, styling, and animation</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. WinUI</h3>
      <ul>
        <li>Latest native UI framework for Windows 10/11</li>
        <li>Modern controls, Fluent Design, and high-DPI support</li>
        <li>Works with WinAppSDK for cross-platform potential</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. MVVM Architecture</h3>
      <ul>
        <li>Model-View-ViewModel pattern for separation of concerns</li>
        <li>Improves testability and maintainability</li>
        <li>Enables clean data binding and UI logic separation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple WPF XAML Window
<Window x:Class="HelloWpf.MainWindow"
        xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
        Title="Hello WPF" Height="200" Width="300">
  <Grid>
    <TextBlock Text="Welcome to WPF!" VerticalAlignment="Center" HorizontalAlignment="Center"/>
  </Grid>
</Window>
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of .NET Frameworks</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Enterprise desktop applications</li>
          <li>Productivity and business tools</li>
          <li>Modern Windows UI/UX development</li>
          <li>Cross-platform apps with WinAppSDK</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        .NET frameworks are essential for professional desktop development on Windows.  
        Master these tools to build powerful, maintainable, and modern applications.
      </p>
    </div>
  );
}