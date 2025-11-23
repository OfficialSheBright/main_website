export default function ReconnaissanceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Reconnaissance</h2>
      <p className="text-gray-600">
        Reconnaissance is the initial phase of penetration testing and ethical hacking.  
        It involves gathering information about the target to identify potential vulnerabilities and plan further attacks.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Reconnaissance?</h3>
        <p className="text-blue-700">
          Effective reconnaissance helps attackers and defenders understand the target environment, increasing the chances of successful exploitation or defense.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Passive & Active Recon</h3>
      <ul>
        <li>Passive recon: Collecting information without interacting directly with the target (e.g., public records, social media)</li>
        <li>Active recon: Directly probing the target (e.g., ping sweeps, port scans)</li>
        <li>Balance stealth and thoroughness based on objectives</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. OSINT Collection</h3>
      <ul>
        <li>Open Source Intelligence (OSINT) uses publicly available data</li>
        <li>Sources: WHOIS, DNS records, social networks, company websites</li>
        <li>Tools: theHarvester, Maltego, Recon-ng</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Subdomain Enumeration</h3>
      <ul>
        <li>Identifying subdomains to expand the attack surface</li>
        <li>Techniques: brute-forcing, certificate transparency logs, search engines</li>
        <li>Tools: Sublist3r, Amass, DNSenum</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Shodan & Censys</h3>
      <ul>
        <li>Search engines for internet-connected devices and services</li>
        <li>Discover exposed systems, open ports, and vulnerabilities</li>
        <li>Useful for both attackers and defenders</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Enumerating subdomains with Sublist3r (terminal)
sublist3r -d example.com
# Review the output for additional attack vectors
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Reconnaissance</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Penetration testing and red teaming</li>
          <li>Threat intelligence gathering</li>
          <li>Incident response and defense planning</li>
          <li>Security awareness and risk assessment</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Reconnaissance is a critical step in understanding the target environment.  
        Master these techniques to improve both offensive and defensive cybersecurity operations.
      </p>
    </div>
  );
}