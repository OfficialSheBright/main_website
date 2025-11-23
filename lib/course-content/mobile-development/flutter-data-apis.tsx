export default function FlutterDataApisContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">Flutter Data & APIs</h2>
      <p className="text-gray-600">
        Flutter data and API integration covers connecting your app to RESTful APIs, handling network requests, and managing local and remote data.  
        Mastering these skills enables your app to deliver dynamic, real-time content across platforms.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why Data & APIs?</h3>
        <p className="text-blue-700">
          API integration allows your app to fetch, update, and sync data with remote servers, enabling features like authentication, live updates, and cloud sync.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. HTTP Networking</h3>
      <ul>
        <li>Use packages like <code>http</code> or <code>Dio</code> for network requests</li>
        <li>Handle GET, POST, PUT, DELETE operations</li>
        <li>Manage timeouts, retries, and error handling</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. JSON Parsing</h3>
      <ul>
        <li>Parse JSON responses using <code>jsonDecode</code> or code generation tools</li>
        <li>Map API data to Dart models</li>
        <li>Handle nested and complex JSON structures</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Asynchronous Operations</h3>
      <ul>
        <li>Use <code>Future</code> and <code>async/await</code> for async network calls</li>
        <li>Update UI based on API responses</li>
        <li>Handle loading states and errors gracefully</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Local & Remote Data</h3>
      <ul>
        <li>Store data locally with <code>shared_preferences</code> or <code>sqflite</code></li>
        <li>Sync data with cloud services (Firebase, REST APIs)</li>
        <li>Manage offline and online states</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple GET request with http package
import 'package:http/http.dart' as http;
import 'dart:convert';

Future<User> fetchUser(int id) async {
  final response = await http.get(Uri.parse('https://api.example.com/users/$id'));
  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body));
  } else {
    throw Exception('Failed to load user');
  }
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of Flutter Data & APIs</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Social media and messaging apps</li>
          <li>Cloud-based storage and sync</li>
          <li>Live data feeds and dashboards</li>
          <li>User authentication and profiles</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        Flutter data and API integration is essential for modern, connected apps.  
        Master these techniques to deliver dynamic, data-driven experiences for users.
      </p>
    </div>
  );
}