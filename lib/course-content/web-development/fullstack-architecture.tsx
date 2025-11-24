export default function FullStackArchitectureContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">4.1 Full-Stack Architecture</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Full-Stack Integration</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Connect React frontend with Node.js backend</li>
          <li>• API design and consumption patterns</li>
          <li>• Deployment strategies for full-stack apps</li>
          <li>• Architecture decisions: Monolithic vs Microservices</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frontend + Backend Integration</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Frontend (React)</h3>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// API service layer
const API_BASE = process.env.REACT_APP_API_URL;

class ApiService {
  async request(endpoint, options = {}) {
    const url = \`\${API_BASE}\${endpoint}\`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = \`Bearer \${token}\`;
    }

    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    return response.json();
  }

  // User methods
  login(credentials) {
    return this.request('/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  }

  getUsers() {
    return this.request('/api/users');
  }

  createPost(postData) {
    return this.request('/api/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }
}

export default new ApiService();`}</code>
              </pre>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Backend (Express)</h3>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Express server with CORS
const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// API routes
app.use('/auth', authRoutes);
app.use('/api', authenticateToken, apiRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(\`Server running on port \${process.env.PORT || 5000}\`);
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">React Hook for API Integration</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Custom hook for API calls
import { useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

export function useApi(endpoint, dependencies = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await ApiService.request(endpoint);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, dependencies);

  return { data, loading, error, refetch: () => fetchData() };
}

// Usage in component
function UsersList() {
  const { data: users, loading, error } = useApi('/api/users');

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Deployment Strategies</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-800 mb-3">Same Server</h4>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Serve React build from Express</li>
              <li>• Single deployment</li>
              <li>• Shared resources</li>
              <li>• Simple for small apps</li>
            </ul>
            <div className="bg-gray-900 text-white p-3 rounded mt-3">
              <pre className="text-xs">
                <code>{`// Serve React build
app.use(express.static('build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Separate Servers</h4>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Frontend on Netlify/Vercel</li>
              <li>• Backend on Heroku/Railway</li>
              <li>• Independent scaling</li>
              <li>• CORS configuration needed</li>
            </ul>
            <div className="bg-gray-900 text-white p-3 rounded mt-3">
              <pre className="text-xs">
                <code>{`// Environment variables
REACT_APP_API_URL=https://api.myapp.com
DATABASE_URL=mongodb://...
JWT_SECRET=your-secret-key`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Docker Containers</h4>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Containerized deployment</li>
              <li>• Kubernetes orchestration</li>
              <li>• Consistent environments</li>
              <li>• Easy scaling</li>
            </ul>
            <div className="bg-gray-900 text-white p-3 rounded mt-3">
              <pre className="text-xs">
                <code>{`# docker-compose.yml
version: '3'
services:
  frontend:
    build: ./client
    ports: ["3000:3000"]
  backend:
    build: ./server
    ports: ["5000:5000"]`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Architecture Patterns</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Monolithic Architecture</h3>
            <div className="mb-4">
              <h5 className="font-semibold text-red-700 mb-2">Pros:</h5>
              <ul className="text-red-600 space-y-1 text-sm">
                <li>• Simple to develop and test</li>
                <li>• Easy deployment</li>
                <li>• Performance (no network calls)</li>
                <li>• Easier debugging</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-red-700 mb-2">Cons:</h5>
              <ul className="text-red-600 space-y-1 text-sm">
                <li>• Scaling limitations</li>
                <li>• Technology lock-in</li>
                <li>• Large codebase complexity</li>
                <li>• Single point of failure</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">Microservices Architecture</h3>
            <div className="mb-4">
              <h5 className="font-semibold text-green-700 mb-2">Pros:</h5>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• Independent scaling</li>
                <li>• Technology diversity</li>
                <li>• Fault isolation</li>
                <li>• Team autonomy</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-700 mb-2">Cons:</h5>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• Complex deployment</li>
                <li>• Network latency</li>
                <li>• Data consistency challenges</li>
                <li>• Monitoring complexity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-2">🚀 Next: MERN/PERN Stack Implementation</h3>
        <p className="text-emerald-700">
          Let&apos;s build complete full-stack applications using popular technology stacks.
        </p>
      </div>
    </div>
  );
}