export default function ReportingDocumentationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Reporting & Documentation</h2>
      <p className="text-gray-600">
        Effective reporting and documentation are critical in cybersecurity assessments.  
        Clear, professional reports communicate findings, risks, and recommendations to stakeholders and support remediation efforts.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Reporting Matters?</h3>
        <p className="text-blue-700">
          Well-structured documentation builds trust, enables informed decisions, and ensures compliance with industry standards.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Vulnerability Analysis</h3>
      <ul>
        <li>Describe each vulnerability with context and impact</li>
        <li>Include evidence such as screenshots, logs, or exploit details</li>
        <li>Prioritize findings based on risk and business relevance</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Risk Rating Models (CVSS)</h3>
      <ul>
        <li>Use standardized models like CVSS to assess severity</li>
        <li>Provide clear risk scores and justification</li>
        <li>Help stakeholders understand urgency and impact</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Professional Pentesting Reports</h3>
      <ul>
        <li>Executive summary for non-technical readers</li>
        <li>Technical details for remediation teams</li>
        <li>Actionable recommendations and remediation steps</li>
        <li>Appendices with supporting evidence and references</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Pentest report structure
# Executive Summary
## Scope & Methodology
## Findings & Risk Ratings
## Recommendations
## Technical Details
## Evidence & References
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Reporting & Documentation</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Compliance audits</li>
          <li>Stakeholder communication</li>
          <li>Incident response and remediation</li>
          <li>Continuous security improvement</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        High-quality reporting and documentation are essential for successful cybersecurity engagements.  
        Master these skills to deliver value, drive remediation, and support organizational security goals.
      </p>
    </div>
  );
}