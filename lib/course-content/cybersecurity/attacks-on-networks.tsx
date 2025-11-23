export default function AttacksOnNetworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Attacks on Networks</h2>
      <p className="text-gray-600">
        Network attacks target the infrastructure and protocols that enable communication between devices.  
        Understanding these attacks is crucial for defending against data breaches, service disruption, and unauthorized access.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Study Network Attacks?</h3>
        <p className="text-blue-700">
          Recognizing attack techniques helps security professionals detect, prevent, and respond to threats in real time.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. MITM (Man-in-the-Middle) Attacks</h3>
      <ul>
        <li>Intercepting and altering communications between two parties</li>
        <li>Common methods: ARP spoofing, DNS spoofing, SSL stripping</li>
        <li>Used to steal credentials, inject malicious data, or eavesdrop</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. ARP Spoofing</h3>
      <ul>
        <li>Manipulating ARP tables to redirect network traffic</li>
        <li>Allows attackers to impersonate devices on a local network</li>
        <li>Can lead to data interception and session hijacking</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. DNS Poisoning</h3>
      <ul>
        <li>Corrupting DNS records to redirect users to malicious sites</li>
        <li>Used for phishing, malware distribution, and credential theft</li>
        <li>Can affect entire networks if not mitigated</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Packet Sniffing</h3>
      <ul>
        <li>Capturing and analyzing network traffic using tools like Wireshark</li>
        <li>Can reveal sensitive information such as passwords and session tokens</li>
        <li>Often used in reconnaissance and data exfiltration</li>
      </ul>

      {/* SECTION 5 */}
      <h3 className="text-2xl font-bold text-gray-800">5. Wi-Fi Hacking (WPA2/WPA3)</h3>
      <ul>
        <li>Exploiting vulnerabilities in wireless security protocols</li>
        <li>Attacks include handshake capture, brute force, and Evil Twin APs</li>
        <li>Can lead to unauthorized network access and data theft</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Capturing packets with Wireshark (Linux terminal)
sudo wireshark
# Select the network interface and start capturing traffic
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Network Attack Knowledge</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Penetration testing</li>
          <li>Incident response</li>
          <li>Network defense and monitoring</li>
          <li>Security awareness training</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Understanding network attacks is essential for building resilient defenses.  
        Master these concepts to identify, mitigate, and prevent threats in modern IT environments.
      </p>
    </div>
  );
}