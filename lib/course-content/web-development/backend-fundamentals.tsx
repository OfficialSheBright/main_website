export default function BackendFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">3.1 Backend Fundamentals</h1>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">What You'll Master</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Server architecture and microservices</li>
          <li>• REST API design principles</li>
          <li>• MVC (Model-View-Controller) pattern</li>
          <li>• Authentication vs Authorization concepts</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Server Architecture</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Monolithic Architecture</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Single deployable unit</li>
              <li>• Shared database</li>
              <li>• Simple to develop initially</li>
              <li>• Scaling challenges</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Microservices</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Independent services</li>
              <li>• Service-specific databases</li>
              <li>• Better scalability</li>
              <li>• Complex deployment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">REST API Principles</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">RESTful Endpoints</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// RESTful API design
GET    /api/users           // Get all users
GET    /api/users/123       // Get user by ID
POST   /api/users           // Create new user
PUT    /api/users/123       // Update user
DELETE /api/users/123       // Delete user

// Response example
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2023-01-15T10:30:00Z"
}`}</code>
          </pre>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2">HTTP Status Codes</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-yellow-700">Success:</strong>
              <ul className="text-yellow-600 mt-1">
                <li>200 - OK</li>
                <li>201 - Created</li>
                <li>204 - No Content</li>
              </ul>
            </div>
            <div>
              <strong className="text-yellow-700">Error:</strong>
              <ul className="text-yellow-600 mt-1">
                <li>400 - Bad Request</li>
                <li>401 - Unauthorized</li>
                <li>404 - Not Found</li>
                <li>500 - Server Error</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Authentication vs Authorization</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Authentication</h3>
            <p className="text-red-700 mb-3">Who are you?</p>
            <ul className="text-red-600 space-y-1 text-sm">
              <li>• Login credentials</li>
              <li>• JWT tokens</li>
              <li>• OAuth</li>
              <li>• Biometric verification</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Authorization</h3>
            <p className="text-green-700 mb-3">What can you access?</p>
            <ul className="text-green-600 space-y-1 text-sm">
              <li>• User roles</li>
              <li>• Permissions</li>
              <li>• Access control</li>
              <li>• Resource restrictions</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-2">🚀 Next: Node.js & Express</h3>
        <p className="text-purple-700">
          Now let's build actual backend applications with Node.js and Express framework.
        </p>
      </div>
    </div>
  );
}