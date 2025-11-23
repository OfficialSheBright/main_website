export default function AndroidUiLayoutsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Android UI Layouts</h2>
      <p className="text-gray-600">
        Android UI layouts cover the essential components for designing app interfaces, including XML layouts, views, and responsive design.  
        Mastering these concepts helps you create attractive, user-friendly Android applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why UI Layouts?</h3>
        <p className="text-blue-700">
          Well-designed layouts improve usability, accessibility, and visual appeal, making apps more engaging for users.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. XML Layouts</h3>
      <ul>
        <li>Define UI structure using XML files</li>
        <li>Organize views hierarchically for clarity</li>
        <li>Separate design from logic for maintainability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Common Layout Types</h3>
      <ul>
        <li>LinearLayout: arrange views vertically or horizontally</li>
        <li>ConstraintLayout: flexible positioning with constraints</li>
        <li>FrameLayout, RelativeLayout, TableLayout for specialized needs</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Views & Widgets</h3>
      <ul>
        <li>Use TextView, ImageView, Button, EditText, RecyclerView, etc.</li>
        <li>Customize appearance with styles and themes</li>
        <li>Handle user input and events</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Responsive Design</h3>
      <ul>
        <li>Support multiple screen sizes and orientations</li>
        <li>Use dp/sp units and layout qualifiers</li>
        <li>Test layouts on emulators and devices</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`<!-- Example: Simple LinearLayout XML -->
<LinearLayout
  xmlns:android="http://schemas.android.com/apk/res/android"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:orientation="vertical">
  <TextView
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Hello, Android!" />
  <Button
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Click Me" />
</LinearLayout>
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Android UI Layouts</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Mobile app interfaces</li>
          <li>Responsive and adaptive designs</li>
          <li>Custom widgets and views</li>
          <li>UI/UX prototyping</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Android UI layouts are the foundation of app design.  
        Master these tools to create beautiful, functional interfaces for any device.
      </p>
    </div>
  );
}