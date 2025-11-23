export default function IotSystemDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">IoT System Development</h2>
      <p className="text-gray-600">
        IoT (Internet of Things) system development involves connecting devices, sensors, and software to collect, process, and act on data.  
        Mastering these skills enables you to build smart, connected solutions for homes, industry, and beyond.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why IoT System Development?</h3>
        <p className="text-blue-700">
          IoT systems power smart homes, industrial automation, healthcare, and more.  
          They enable real-time monitoring, automation, and data-driven decision making.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. MQTT</h3>
      <ul>
        <li>Lightweight publish/subscribe protocol for IoT messaging</li>
        <li>Efficient for low-bandwidth, high-latency networks</li>
        <li>Used for device-to-cloud and device-to-device communication</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. TCP/UDP Communication</h3>
      <ul>
        <li>TCP: reliable, connection-oriented protocol for data transfer</li>
        <li>UDP: fast, connectionless protocol for real-time or lossy data</li>
        <li>Choose based on reliability and latency requirements</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Cloud Integration (AWS IoT, Firebase)</h3>
      <ul>
        <li>Connect devices to cloud platforms for data storage, analytics, and control</li>
        <li>AWS IoT: scalable, secure device management and messaging</li>
        <li>Firebase: real-time database, authentication, and serverless functions</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Publish sensor data with MQTT (Node.js)
const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://broker.hivemq.com');
client.on('connect', () => {
  setInterval(() => {
    client.publish('iot/sensor', JSON.stringify({ temp: 22.5 }));
  }, 1000);
});
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of IoT System Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Smart home automation and monitoring</li>
          <li>Industrial IoT (IIoT) and predictive maintenance</li>
          <li>Healthcare and wearable devices</li>
          <li>Environmental monitoring and smart cities</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        IoT system development is at the heart of the connected world.  
        Master these concepts to build scalable, secure, and innovative IoT solutions.
      </p>
    </div>
  );
}