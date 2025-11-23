export default function ProfessionalBrandingContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Professional Branding</h2>
      <p className="text-gray-600">
        Professional branding helps designers stand out, attract opportunities, and build credibility in the creative industry.  
        It includes crafting your resume, optimizing online profiles, and showcasing your work on portfolio platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Professional Branding?</h3>
        <p className="text-blue-700">
          Strong branding communicates your skills, values, and personality, making you memorable to employers and clients.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Resume for Designers</h3>
      <ul>
        <li>Highlight relevant skills, experience, and achievements</li>
        <li>Use clear layout, typography, and visual hierarchy</li>
        <li>Tailor your resume for each role or client</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. LinkedIn Optimization</h3>
      <ul>
        <li>Craft a compelling headline and summary</li>
        <li>Showcase projects, skills, and endorsements</li>
        <li>Engage with industry groups and share insights</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Behance/Dribbble Strategy</h3>
      <ul>
        <li>Curate your best work with high-quality visuals</li>
        <li>Write clear project descriptions and process notes</li>
        <li>Network with other creatives and potential clients</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: LinkedIn headline for designers
UI/UX Designer | Creating intuitive digital experiences | Portfolio: yourwebsite.com
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Professional Branding</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Job applications and interviews</li>
          <li>Freelance and client acquisition</li>
          <li>Networking and industry recognition</li>
          <li>Personal brand growth and visibility</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Professional branding is essential for career growth in design.  
        Master these practices to showcase your skills and connect with new opportunities.
      </p>
    </div>
  );
}