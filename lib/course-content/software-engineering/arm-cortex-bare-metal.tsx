export default function ArmCortexBareMetalContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">ARM Cortex & Bare-Metal Programming</h2>
      <p className="text-gray-600">
        ARM Cortex & bare-metal programming focuses on low-level development for embedded systems, where you interact directly with hardware without an operating system.  
        Mastering these skills is essential for building efficient, reliable, and real-time embedded applications.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why ARM Cortex & Bare-Metal?</h3>
        <p className="text-blue-700">
          Bare-metal programming gives you full control over hardware, enabling high performance, minimal latency, and deep optimization for embedded devices.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Startup Code</h3>
      <ul>
        <li>Initializes hardware and memory before main application runs</li>
        <li>Sets up stack pointer, interrupt vectors, and system clocks</li>
        <li>Written in assembly or C, specific to the microcontroller</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Linker Scripts</h3>
      <ul>
        <li>Define memory layout for code, data, and peripherals</li>
        <li>Control placement of sections (text, data, bss, stack, heap)</li>
        <li>Essential for efficient use of limited embedded memory</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Bootloaders</h3>
      <ul>
        <li>Small program that loads and starts the main application</li>
        <li>Supports firmware updates and recovery modes</li>
        <li>Can enable secure boot and authentication</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Embedded Debugging (SWD, JTAG)</h3>
      <ul>
        <li>SWD (Serial Wire Debug) and JTAG are hardware debugging interfaces</li>
        <li>Enable breakpoints, memory inspection, and step-through debugging</li>
        <li>Essential for troubleshooting low-level embedded code</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Minimal ARM Cortex-M startup (C, pseudocode)
void Reset_Handler(void) {
  // Initialize data and bss sections
  // Set up system clock
  main();
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of ARM Cortex & Bare-Metal Programming</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Developing firmware for microcontrollers</li>
          <li>Building real-time control systems</li>
          <li>Optimizing performance for IoT and embedded devices</li>
          <li>Implementing secure boot and custom bootloaders</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        ARM Cortex & bare-metal programming is foundational for embedded systems engineering.  
        Master these concepts to build efficient, reliable, and secure embedded applications.
      </p>
    </div>
  );
}