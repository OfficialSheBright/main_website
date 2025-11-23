export default function RealTimeSystemsRtosContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Real-Time Systems (RTOS)</h2>
      <p className="text-gray-600">
        Real-Time Operating Systems (RTOS) are specialized OSes designed to run embedded applications with strict timing and reliability requirements.  
        Mastering RTOS concepts is essential for building responsive, predictable, and robust embedded systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn RTOS?</h3>
        <p className="text-blue-700">
          RTOS enables multitasking, real-time scheduling, and resource management for mission-critical and time-sensitive applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. FreeRTOS Basics</h3>
      <ul>
        <li>Popular open-source RTOS for microcontrollers</li>
        <li>Lightweight, portable, and widely supported</li>
        <li>Provides kernel services for multitasking and synchronization</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Tasks, Queues, Semaphores</h3>
      <ul>
        <li>Tasks: lightweight threads managed by the RTOS scheduler</li>
        <li>Queues: inter-task communication and data passing</li>
        <li>Semaphores: synchronization and resource protection</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Scheduling Policies</h3>
      <ul>
        <li>Preemptive and cooperative multitasking</li>
        <li>Priority-based scheduling for deterministic behavior</li>
        <li>Time slicing and round-robin scheduling</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Real-Time Constraints</h3>
      <ul>
        <li>Hard vs soft real-time requirements</li>
        <li>Meeting deadlines and minimizing latency</li>
        <li>Jitter, response time, and predictability</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Create a FreeRTOS task (C)
void vTaskCode(void *pvParameters) {
  for (;;) {
    // Task code here
  }
}
xTaskCreate(vTaskCode, "Task1", 1000, NULL, 1, NULL);
vTaskStartScheduler();
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of RTOS</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Industrial automation and robotics</li>
          <li>Automotive control systems</li>
          <li>Medical devices and instrumentation</li>
          <li>IoT devices with real-time requirements</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        RTOS is essential for building reliable, real-time embedded systems.  
        Master these concepts to deliver predictable and robust applications for critical domains.
      </p>
    </div>
  );
}