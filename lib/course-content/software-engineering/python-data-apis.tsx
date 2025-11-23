export default function PythonDataApisContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Data & APIs (Python)</h2>
      <p className="text-gray-600">
        Integrating data sources and APIs is a core skill for desktop and backend Python applications.  
        Mastering these techniques enables you to build data-driven apps, automate workflows, and connect to external services.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data & APIs?</h3>
        <p className="text-blue-700">
          Accessing databases and APIs allows your applications to store, retrieve, and process information from various sources, making them dynamic and interactive.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. SQLite, MySQL Integration</h3>
      <ul>
        <li>Use <code>sqlite3</code> for lightweight, file-based databases</li>
        <li>Connect to MySQL with <code>mysql-connector-python</code> or <code>SQLAlchemy</code></li>
        <li>Perform CRUD operations and manage data efficiently</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. File Handling</h3>
      <ul>
        <li>Read and write files using Python&apos;s built-in <code>open()</code> function</li>
        <li>Work with CSV, JSON, and binary files</li>
        <li>Automate data import/export and processing tasks</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Consuming REST APIs</h3>
      <ul>
        <li>Use <code>requests</code> library to make HTTP requests</li>
        <li>Parse JSON/XML responses and handle errors</li>
        <li>Integrate with third-party services and public APIs</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`# Example: Fetch data from a REST API with requests
import requests
response = requests.get('https://api.example.com/data')
if response.ok:
    data = response.json()
    print(data)
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Data & APIs (Python)</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Building data-driven desktop and web apps</li>
          <li>Automating data collection and reporting</li>
          <li>Integrating with cloud and third-party services</li>
          <li>Processing and visualizing large datasets</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Data and API integration is essential for modern Python development.  
        Master these skills to build powerful, connected, and automated applications.
      </p>
    </div>
  );
}