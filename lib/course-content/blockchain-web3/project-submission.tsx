export default function ProjectSubmissionModule() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Final Project Submission
      </h1>

      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Submission Guidelines</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Submit your blockchain & Web3 projects for review</li>
          <li>• Ensure all smart contract security requirements are met</li>
          <li>• Receive comprehensive feedback and certification</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Checklist Before Submission</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Project code and documentation are complete</li>
          <li>Smart contracts are audited and tested</li>
          <li>Frontend and backend are integrated and functional</li>
          <li>Deployment instructions are provided</li>
          <li>Security analysis is included</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Review Process</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Projects are evaluated for functionality, security, and documentation</li>
          <li>Feedback is provided for improvements</li>
          <li>Certification is awarded upon successful completion</li>
        </ul>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🌟 Tips for Success</h3>
        <ul className="text-green-700 space-y-1 text-sm">
          <li>• Double-check all requirements before submitting</li>
          <li>• Prepare a demo or walkthrough video</li>
          <li>• Address feedback promptly for certification</li>
          <li>• Showcase your project in your portfolio</li>
        </ul>
      </div>
    </div>
  );
}