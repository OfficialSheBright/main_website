export default function MicrocontrollerProgrammingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Microcontroller Programming</h2>
      <p className="text-gray-600">
        Microcontroller programming is at the heart of embedded systems, enabling you to control hardware, interact with sensors, and build smart devices.  
        Mastering these skills is essential for IoT, robotics, and real-time applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Microcontroller Programming?</h3>
        <p className="text-blue-700">
          Microcontrollers power everything from home appliances to industrial automation.  
          Programming them lets you create efficient, responsive, and reliable embedded solutions.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Arduino (C/C++)</h3>
      <ul>
        <li>Popular platform for prototyping and learning embedded systems</li>
        <li>Programmed using simplified C/C++</li>
        <li>Large ecosystem of libraries and shields for rapid development</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. ESP32 / NodeMCU</h3>
      <ul>
        <li>Wi-Fi and Bluetooth-enabled microcontrollers for IoT</li>
        <li>Support for Arduino IDE, MicroPython, and native SDKs</li>
        <li>Ideal for connected devices and wireless projects</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. GPIO, PWM, ADC, I2C, SPI</h3>
      <ul>
        <li>GPIO: General Purpose Input/Output for digital signals</li>
        <li>PWM: Pulse Width Modulation for motor and LED control</li>
        <li>ADC: Analog-to-Digital Converter for reading sensors</li>
        <li>I2C/SPI: Communication protocols for connecting peripherals</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Interrupt Routines</h3>
      <ul>
        <li>Respond to hardware events asynchronously</li>
        <li>Essential for real-time and low-latency applications</li>
        <li>Use ISRs (Interrupt Service Routines) for efficient event handling</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Blink an LED with Arduino
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
        <h3 className="font-semibold text-green-800">Applications of Microcontroller Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>IoT devices and smart home automation</li>
          <li>Robotics and sensor integration</li>
          <li>Wearables and health monitoring</li>
          <li>Industrial control and automation</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Microcontroller programming is foundational for embedded and IoT development.  
        Master these concepts to build innovative, connected, and intelligent devices.
      </p>
    </div>
  );
}