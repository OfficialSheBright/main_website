export default function ReverseEngineeringContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Reverse Engineering</h2>
      <p className="text-gray-600">
        Reverse engineering is the process of analyzing software or hardware to understand its design, functionality, and vulnerabilities.  
        It is a critical skill for malware analysis, vulnerability research, and security auditing.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Reverse Engineering?</h3>
        <p className="text-blue-700">
          Reverse engineering helps uncover hidden functionality, detect malicious code, and identify security flaws in binaries and applications.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Assembly Basics</h3>
      <ul>
        <li>Understanding low-level instructions executed by CPUs</li>
        <li>Common architectures: x86, x64, ARM</li>
        <li>Tools: NASM, Radare2, Ghidra</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Binary Analysis</h3>
      <ul>
        <li>Examining compiled executables for vulnerabilities and hidden features</li>
        <li>Static analysis: inspecting code without running it</li>
        <li>Dynamic analysis: observing behavior during execution</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Decompilers (Ghidra, IDA Free)</h3>
      <ul>
        <li>Tools that convert binaries back to readable code</li>
        <li>Ghidra: open-source, supports many architectures</li>
        <li>IDA Free: popular for interactive disassembly and analysis</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Opening a binary in Ghidra (terminal)
ghidraRun
# Import the binary and start analyzing functions and code flow
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Reverse Engineering</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Malware analysis and detection</li>
          <li>Vulnerability research</li>
          <li>Software auditing and patching</li>
          <li>Intellectual property protection</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Reverse engineering is essential for understanding and securing software systems.  
        Master these techniques to analyze binaries, uncover vulnerabilities, and improve security.
      </p>
    </div>
  );
}