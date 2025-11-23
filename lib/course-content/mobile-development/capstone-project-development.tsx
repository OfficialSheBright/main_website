export default function CapstoneProjectDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Capstone Project Development</h2>
      <p className="text-gray-600">
        The capstone project is your opportunity to apply all the skills learned in mobile development to build a complete, production-ready app.  
        This experience demonstrates your ability to design, develop, test, and deploy a real-world solution.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why a Capstone Project?</h3>
        <p className="text-blue-700">
          A capstone project showcases your technical and creative abilities, helping you stand out to employers and clients.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Ideation & Planning</h3>
      <ul>
        <li>Choose a project idea that solves a real problem or meets a user need</li>
        <li>Define features, target audience, and platform(s)</li>
        <li>Create wireframes, user stories, and a development roadmap</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Development & Implementation</h3>
      <ul>
        <li>Set up project structure and version control</li>
        <li>Build UI, integrate APIs, and implement core features</li>
        <li>Apply best practices for architecture, performance, and security</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Testing & Optimization</h3>
      <ul>
        <li>Write unit and integration tests</li>
        <li>Profile and optimize for speed, battery, and reliability</li>
        <li>Fix bugs and polish user experience</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Deployment & Presentation</h3>
      <ul>
        <li>Prepare app for release on Google Play, App Store, or web</li>
        <li>Document features, architecture, and usage</li>
        <li>Present your project with a demo and summary</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Capstone project workflow
1. Define app idea and requirements
2. Design UI/UX wireframes
3. Develop features and integrate APIs
4. Test, optimize, and fix bugs
5. Deploy and present your app
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Capstone Project Development</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Portfolio and job applications</li>
          <li>Startup and freelance projects</li>
          <li>Real-world app launches</li>
          <li>Demonstrating full-stack mobile skills</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        The capstone project is the culmination of your mobile development journey.  
        Master this process to showcase your skills and deliver impactful, production-ready apps.
      </p>
    </div>
  );
}