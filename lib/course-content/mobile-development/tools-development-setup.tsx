export default function ToolsDevelopmentSetupContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools & Development Setup</h2>
      <p className="text-gray-600">
        Setting up the right tools and environment is the first step in mobile development.  
        A good setup streamlines your workflow, improves productivity, and helps you build, test, and deploy apps efficiently.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Focus on Tools & Setup?</h3>
        <p className="text-blue-700">
          The right tools help you code faster, catch bugs early, and deliver high-quality apps for Android and iOS.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. IDEs & Editors</h3>
      <ul>
        <li>Android Studio for Android (Kotlin/Java)</li>
        <li>Xcode for iOS (Swift/Objective-C)</li>
        <li>Visual Studio Code for cross-platform (Flutter, React Native)</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. SDKs & Emulators</h3>
      <ul>
        <li>Install Android SDK and device emulators</li>
        <li>Install Xcode Command Line Tools and iOS simulators</li>
        <li>Set up Flutter or React Native CLI for cross-platform apps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Version Control</h3>
      <ul>
        <li>Use Git for source control and collaboration</li>
        <li>Host code on GitHub, GitLab, or Bitbucket</li>
        <li>Follow branching and commit best practices</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Testing & Debugging Tools</h3>
      <ul>
        <li>Use built-in debuggers in Android Studio and Xcode</li>
        <li>Test on emulators, simulators, and real devices</li>
        <li>Leverage tools like Chrome DevTools, Flutter DevTools, and React Native Debugger</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Initialize a new Flutter project
flutter create my_app

# Example: Clone a GitHub repository
git clone https://github.com/username/repo.git
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Tools & Development Setup</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app prototyping and development</li>
          <li>Team collaboration and code reviews</li>
          <li>Automated testing and CI/CD</li>
          <li>Cross-platform and native app workflows</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        A solid development setup is the foundation for successful mobile projects.  
        Master these tools and workflows to build, test, and ship apps efficiently.
      </p>
    </div>
  );
}