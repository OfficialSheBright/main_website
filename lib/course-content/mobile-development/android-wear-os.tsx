export default function AndroidWearOsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Android Wear OS</h2>
      <p className="text-gray-600">
        Android Wear OS development covers building apps for smartwatches, including UI design, sensors, notifications, and battery optimization.  
        Mastering these skills helps you create engaging, efficient wearable experiences.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Wear OS?</h3>
        <p className="text-blue-700">
          Wear OS enables hands-free, glanceable interactions and health tracking, expanding your app’s reach to wearable devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Wear OS UI Design</h3>
      <ul>
        <li>Design round and square layouts for small screens</li>
        <li>Use WearableRecyclerView, BoxInsetLayout, and Cards</li>
        <li>Optimize for touch, swipe, and voice input</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Sensors & Health APIs</h3>
      <ul>
        <li>Access heart rate, step count, and motion sensors</li>
        <li>Integrate with Google Fit for health data</li>
        <li>Respond to sensor events for real-time feedback</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Notifications & Complications</h3>
      <ul>
        <li>Send notifications and actions to the watch face</li>
        <li>Build custom complications for glanceable info</li>
        <li>Support voice replies and quick actions</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Battery Optimization</h3>
      <ul>
        <li>Minimize background processing and network usage</li>
        <li>Use alarms and jobs for scheduled tasks</li>
        <li>Profile and optimize for long battery life</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Access heart rate sensor in Wear OS (Kotlin)
val sensorManager = getSystemService(Context.SENSOR_SERVICE) as SensorManager
val heartRateSensor = sensorManager.getDefaultSensor(Sensor.TYPE_HEART_RATE)
sensorManager.registerListener(listener, heartRateSensor, SensorManager.SENSOR_DELAY_NORMAL)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Android Wear OS</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Fitness and health tracking apps</li>
          <li>Notifications and quick actions</li>
          <li>Watch faces and complications</li>
          <li>Voice-controlled and glanceable utilities</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Android Wear OS development is essential for wearable innovation.  
        Master these tools and workflows to deliver efficient, engaging smartwatch experiences.
      </p>
    </div>
  );
}