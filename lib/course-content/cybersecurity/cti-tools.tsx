export default function CtiToolsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">CTI Tools</h2>
      <p className="text-gray-600">
        Cyber Threat Intelligence (CTI) tools help analysts collect, analyze, and share threat data.  
        These platforms automate detection, enable collaboration, and improve response to cyber threats.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Use CTI Tools?</h3>
        <p className="text-blue-700">
          CTI tools streamline threat intelligence workflows, enhance visibility, and support rapid decision-making in security operations.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. MISP</h3>
      <ul>
        <li>Open-source threat intelligence platform</li>
        <li>Facilitates sharing of Indicators of Compromise (IOCs)</li>
        <li>Supports collaboration between organizations</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. TheHive</h3>
      <ul>
        <li>Incident response and case management platform</li>
        <li>Integrates with other CTI tools for automated workflows</li>
        <li>Enables collaborative investigations</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. YARA Rules</h3>
      <ul>
        <li>Pattern-matching language for malware analysis</li>
        <li>Detects and classifies malicious files</li>
        <li>Widely used in threat hunting and forensic investigations</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. VirusTotal Automation</h3>
      <ul>
        <li>Online service for scanning files and URLs for malware</li>
        <li>Provides API for automated threat analysis</li>
        <li>Aggregates results from multiple antivirus engines</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Using YARA to scan a file for malware signatures
yara my_rules.yar suspicious_file.exe
# Review the output for matched rules
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of CTI Tools</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Threat intelligence sharing</li>
          <li>Incident response automation</li>
          <li>Malware detection and analysis</li>
          <li>Collaborative investigations</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        CTI tools are essential for modern security operations.  
        Mastering these platforms enables effective threat detection, analysis, and collaboration.
      </p>
    </div>
  );
}