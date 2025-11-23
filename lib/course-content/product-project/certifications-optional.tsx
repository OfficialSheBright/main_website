export default function CertificationsOptionalContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Certifications (Optional)</h2>
      <p className="text-gray-600">
        Professional certifications validate your skills and knowledge in product management, project management, and business analysis.  
        Earning certifications can boost your career prospects, demonstrate expertise, and open doors to new opportunities.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Pursue Certifications?</h3>
        <p className="text-blue-700">
          Certifications are recognized by employers worldwide and can help you stand out in competitive job markets, meet industry standards, and advance your career.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Popular Certifications</h3>
      <ul>
        <li><strong>PMP</strong> (Project Management Professional)</li>
        <li><strong>CSM / PSM</strong> (Certified ScrumMaster / Professional Scrum Master)</li>
        <li><strong>SAFe</strong> (Scaled Agile Framework)</li>
        <li><strong>PMI-ACP</strong> (Agile Certified Practitioner)</li>
        <li><strong>CBAP</strong> (Certified Business Analysis Professional)</li>
        <li><strong>AIPMM</strong> (Association of International Product Marketing & Management)</li>
        <li>Strategy PM certifications</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Benefits of Certification</h3>
      <ul>
        <li>Demonstrates commitment to professional development</li>
        <li>Enhances credibility and marketability</li>
        <li>Provides access to professional networks and resources</li>
        <li>May be required for certain roles or promotions</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Preparation Tips</h3>
      <ul>
        <li>Review official exam guides and sample questions</li>
        <li>Join study groups or online forums</li>
        <li>Take practice exams to assess readiness</li>
        <li>Leverage course materials and real-world experience</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: PMP Exam Domains
1. People (42%)
2. Process (50%)
3. Business Environment (8%)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Certifications</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Qualifying for advanced roles in product or project management</li>
          <li>Meeting employer or client requirements</li>
          <li>Building a professional brand</li>
          <li>Expanding your knowledge and skills</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Certifications are a valuable addition to your professional toolkit.  
        Consider pursuing relevant credentials to validate your expertise and accelerate your career growth.
      </p>
    </div>
  );
}