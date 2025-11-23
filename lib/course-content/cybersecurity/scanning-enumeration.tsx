export default function ScanningEnumerationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Scanning & Enumeration</h2>
      <p className="text-gray-600">
        Scanning and enumeration are critical phases in penetration testing and ethical hacking.  
        These techniques help identify open ports, running services, and network shares, expanding the attack surface for further exploitation.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Scanning & Enumeration?</h3>
        <p className="text-blue-700">
          Discovering network assets and services is essential for mapping targets and finding vulnerabilities.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Port Scanning</h3>
      <ul>
        <li>Identifies open and closed ports on target systems</li>
        <li>Tools: Nmap, Masscan</li>
        <li>Helps detect running services and potential entry points</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Service Enumeration</h3>
      <ul>
        <li>Determines details about services running on open ports</li>
        <li>Version detection, banner grabbing, and protocol analysis</li>
        <li>Tools: Nmap, Netcat, Telnet</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. SMB/NFS Enumerations</h3>
      <ul>
        <li>Identifies shared resources and permissions on Windows (SMB) and Unix (NFS) systems</li>
        <li>Tools: enum4linux, smbclient, showmount</li>
        <li>Can reveal sensitive files, user accounts, and misconfigurations</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Scanning ports with Nmap (terminal)
nmap -sS -p 1-65535 target_ip
# Review the output for open ports and services
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Scanning & Enumeration</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Penetration testing and vulnerability assessment</li>
          <li>Network mapping and asset discovery</li>
          <li>Incident response and threat hunting</li>
          <li>Compliance and security audits</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Scanning and enumeration are foundational for identifying and assessing network targets.  
        Master these techniques to uncover vulnerabilities and strengthen network defenses.
      </p>
    </div>
  );
}