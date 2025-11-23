export default function ToolsEnvironmentSetupContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Tools & Environment Setup</h2>
      <p className="text-gray-600">
        Setting up the right tools and environment is essential for effective cybersecurity work.  
        A well-configured lab enables safe testing, analysis, and learning without risking production systems.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Environment Setup?</h3>
        <p className="text-blue-700">
          Isolated labs and proper tooling allow you to experiment, analyze threats, and develop skills in a controlled setting.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Virtual Machines & Sandboxes</h3>
      <ul>
        <li>Use VMs (VirtualBox, VMware) for safe malware analysis and pentesting</li>
        <li>Isolate lab networks from production</li>
        <li>Snapshot and revert environments as needed</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Linux & Windows Lab Setup</h3>
      <ul>
        <li>Install Kali Linux, Parrot OS, or Ubuntu for security tools</li>
        <li>Set up Windows VM for privilege escalation and malware testing</li>
        <li>Keep labs updated and patched</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Essential Security Tools</h3>
      <ul>
        <li>Nmap, Wireshark, Burp Suite, Metasploit, John the Ripper</li>
        <li>Install tools via package managers (apt, brew, choco)</li>
        <li>Configure proxies and VPNs for safe internet access</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Python & Scripting Environments</h3>
      <ul>
        <li>Set up Python, pip, and virtual environments for automation</li>
        <li>Install libraries: requests, scapy, pwntools</li>
        <li>Use scripts for scanning, exploitation, and analysis</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Installing Nmap and Wireshark on Linux
sudo apt update
sudo apt install nmap wireshark
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Environment Setup</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Malware analysis and reverse engineering</li>
          <li>Penetration testing and vulnerability assessment</li>
          <li>Network monitoring and forensics</li>
          <li>Security automation and scripting</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Proper tools and environment setup are the foundation of hands-on cybersecurity work.  
        Master these steps to safely learn, test, and analyze security scenarios.
      </p>
    </div>
  );
}