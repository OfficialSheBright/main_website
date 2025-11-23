export default function ZeroDayResearchIntroContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Zero-Day Research (Intro)</h2>
      <p className="text-gray-600">
        Zero-day research focuses on discovering and analyzing vulnerabilities that are unknown to vendors and the public.  
        These flaws can be exploited before a patch is available, making them highly valuable and dangerous.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Zero-Day Research?</h3>
        <p className="text-blue-700">
          Zero-day vulnerabilities pose significant risks to organizations and users.  
          Research helps identify and responsibly disclose these flaws to prevent exploitation.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. What is a Zero-Day?</h3>
      <ul>
        <li>Vulnerability unknown to the software vendor</li>
        <li>No official patch or fix available</li>
        <li>Actively exploited by attackers or discovered by researchers</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Discovery Techniques</h3>
      <ul>
        <li>Fuzzing, code review, reverse engineering</li>
        <li>Analyzing crash dumps and exploit samples</li>
        <li>Monitoring threat intelligence feeds</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Responsible Disclosure</h3>
      <ul>
        <li>Reporting vulnerabilities to vendors or security teams</li>
        <li>Coordinating public disclosure after a fix is released</li>
        <li>Following ethical guidelines and legal requirements</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Fuzzing a binary with AFL (Linux)
afl-fuzz -i input_dir -o output_dir -- ./target_binary @@
# Monitor for crashes and analyze findings
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Zero-Day Research</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Vulnerability discovery and reporting</li>
          <li>Security product development</li>
          <li>Incident response and threat hunting</li>
          <li>Security research and education</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Zero-day research is vital for proactive cybersecurity.  
        Master these techniques to discover, analyze, and responsibly disclose critical vulnerabilities.
      </p>
    </div>
  );
}