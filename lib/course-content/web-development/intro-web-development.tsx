export default function IntroWebDevelopmentContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Introduction to Web Development</h1>
      
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">What You&apos;ll Learn</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• How the web works (clients, servers, DNS)</li>
          <li>• HTTP vs HTTPS protocols</li>
          <li>• Frontend vs Backend vs Full-Stack development</li>
          <li>• Web browsers and rendering engines</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">How the Web Works</h2>
        <p className="text-gray-700 mb-4">
          The web operates on a client-server model where your browser (client) 
          communicates with web servers to retrieve and display content.
        </p>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Example: HTTP Request</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Making an HTTP GET request
fetch('https://api.github.com/users/octocat')
  .then(response => response.json())
  .then(data => console.log(data));`}</code>
          </pre>
        </div>
      </section>

      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🎯 Next Steps</h3>
        <p className="text-green-700">
          Now let&apos;s set up your development environment with essential tools.
        </p>
      </div>
    </div>
  );
}