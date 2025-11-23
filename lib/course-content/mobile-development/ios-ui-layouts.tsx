export default function IosUiLayoutsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">iOS UI Layouts</h2>
      <p className="text-gray-600">
        iOS UI layouts cover the essential components for designing app interfaces, including Storyboards, SwiftUI, Auto Layout, and responsive design.  
        Mastering these concepts helps you create attractive, user-friendly iOS applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why UI Layouts?</h3>
        <p className="text-blue-700">
          Well-designed layouts improve usability, accessibility, and visual appeal, making apps more engaging for users.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Storyboards & SwiftUI</h3>
      <ul>
        <li>Design UI visually with Storyboards or declaratively with SwiftUI</li>
        <li>Organize views and navigation for clarity</li>
        <li>Separate design from logic for maintainability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Auto Layout & Constraints</h3>
      <ul>
        <li>Use Auto Layout for responsive design across devices</li>
        <li>Set constraints for positioning and sizing views</li>
        <li>Support multiple screen sizes and orientations</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Views & Controls</h3>
      <ul>
        <li>Use UILabel, UIImageView, UIButton, UITextField, List, etc.</li>
        <li>Customize appearance with styles and themes</li>
        <li>Handle user input and events</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Responsive Design</h3>
      <ul>
        <li>Support multiple devices and orientations</li>
        <li>Use size classes and adaptive layouts</li>
        <li>Test layouts on simulators and real devices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple SwiftUI layout
struct ContentView: View {
  var body: some View {
    VStack {
      Text("Hello, iOS!")
      Button("Click Me") {
        print("Button tapped")
      }
    }
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of iOS UI Layouts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app interfaces</li>
          <li>Responsive and adaptive designs</li>
          <li>Custom controls and views</li>
          <li>UI/UX prototyping</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        iOS UI layouts are the foundation of app design.  
        Master these tools to create beautiful, functional interfaces for any Apple device.
      </p>
    </div>
  );
}