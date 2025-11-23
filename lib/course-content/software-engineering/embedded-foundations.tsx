export default function EmbeddedFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Embedded Foundations</h2>
      <p className="text-gray-600">
        Embedded systems are specialized computing systems that perform dedicated functions within larger systems.  
        Understanding embedded foundations is essential for developing reliable, efficient, and real-time applications for hardware devices.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Learn Embedded Foundations?</h3>
        <p className="text-blue-700">
          Embedded systems power everything from consumer electronics to industrial automation.  
          Mastering these basics is crucial for building software that interacts directly with hardware.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Microcontrollers vs Microprocessors</h3>
      <ul>
        <li><strong>Microcontrollers:</strong> Single-chip computers with CPU, memory, and peripherals (e.g., Arduino, STM32)</li>
        <li><strong>Microprocessors:</strong> More powerful CPUs, require external memory and peripherals (e.g., Raspberry Pi, x86 CPUs)</li>
        <li>Choose based on application requirements, cost, and power consumption</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Memory-Mapped I/O</h3>
      <ul>
        <li>Access hardware peripherals by reading/writing specific memory addresses</li>
        <li>Common in microcontroller programming for GPIO, timers, and communication interfaces</li>
        <li>Requires understanding of device datasheets and memory maps</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Sensors & Actuators</h3>
      <ul>
        <li>Sensors: devices that measure physical properties (temperature, light, motion, etc.)</li>
        <li>Actuators: devices that perform actions (motors, LEDs, relays, etc.)</li>
        <li>Integrate sensors and actuators for interactive embedded applications</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Digital/Analog Interfaces</h3>
      <ul>
        <li>Digital interfaces: GPIO, I2C, SPI, UART for communication and control</li>
        <li>Analog interfaces: ADC (Analog-to-Digital Converter), DAC (Digital-to-Analog Converter)</li>
        <li>Choose the right interface for your hardware and application needs</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Toggle an LED using GPIO (Arduino C++)
const int ledPin = 13;
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  digitalWrite(ledPin, HIGH);
  delay(500);
  digitalWrite(ledPin, LOW);
  delay(500);
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Embedded Foundations</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Consumer electronics (smartphones, wearables, appliances)</li>
          <li>Industrial automation and robotics</li>
          <li>Automotive systems and IoT devices</li>
          <li>Medical devices and instrumentation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Embedded foundations are the basis for all hardware-software integration.  
        Master these concepts to build efficient, reliable, and innovative embedded systems.
      </p>
    </div>
  );
}