export default function AdvancedAndroidContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Advanced Android</h2>
      <p className="text-gray-600">
        Advanced Android development covers topics like Jetpack, MVVM architecture, performance optimization, and publishing apps.  
        Mastering these skills helps you build scalable, maintainable, and high-performance Android applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Advanced Android?</h3>
        <p className="text-blue-700">
          Advanced techniques enable you to create robust apps, leverage modern libraries, and deliver great user experiences.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Jetpack Libraries</h3>
      <ul>
        <li>Use Navigation, LiveData, Room, and WorkManager for modern app features</li>
        <li>Improve code quality and reduce boilerplate</li>
        <li>Integrate lifecycle-aware components</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. MVVM Architecture</h3>
      <ul>
        <li>Separate UI, business logic, and data layers</li>
        <li>Use ViewModel and Repository patterns</li>
        <li>Enable easier testing and maintenance</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Performance Optimization</h3>
      <ul>
        <li>Profile and optimize memory, CPU, and battery usage</li>
        <li>Use background threads and coroutines for smooth UI</li>
        <li>Minimize app size and startup time</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Publishing & Distribution</h3>
      <ul>
        <li>Prepare your app for Google Play release</li>
        <li>Sign APKs and manage versioning</li>
        <li>Monitor crashes and user feedback post-launch</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple ViewModel in Kotlin
class MainViewModel : ViewModel() {
    val counter = MutableLiveData<Int>()
    fun increment() {
        counter.value = (counter.value ?: 0) + 1
    }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Advanced Android</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Scalable business apps</li>
          <li>Real-time and offline-first applications</li>
          <li>Apps with complex navigation and data flows</li>
          <li>Production-ready releases for Google Play</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Advanced Android development is essential for building robust, modern apps.  
        Master these tools and patterns to deliver high-quality experiences for users.
      </p>
    </div>
  );
}