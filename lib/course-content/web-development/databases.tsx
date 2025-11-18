export default function DatabasesContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">3.3 Databases</h1>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">What You'll Master</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• SQL databases (MySQL/PostgreSQL) with joins and indexes</li>
          <li>• NoSQL databases (MongoDB) with flexible schemas</li>
          <li>• Database design patterns and optimization</li>
          <li>• Advanced queries and aggregation pipelines</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Relational Databases (SQL)</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">MySQL</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Most popular open-source database</li>
              <li>• ACID compliance</li>
              <li>• Great for web applications</li>
              <li>• Excellent performance</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">PostgreSQL</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Advanced SQL features</li>
              <li>• JSON support</li>
              <li>• Full-text search</li>
              <li>• Extensible architecture</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">SQL Joins & Advanced Queries</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`-- Create tables
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE posts (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(200) NOT NULL,
  content TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- INNER JOIN - Get posts with user info
SELECT u.name, p.title, p.created_at
FROM users u
INNER JOIN posts p ON u.id = p.user_id;

-- LEFT JOIN - Get all users, even without posts
SELECT u.name, COUNT(p.id) as post_count
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name;

-- Create index for better performance
CREATE INDEX idx_user_email ON users(email);
CREATE INDEX idx_post_user_id ON posts(user_id);

-- View for frequently used query
CREATE VIEW user_post_summary AS
SELECT 
  u.id,
  u.name,
  u.email,
  COUNT(p.id) as total_posts,
  MAX(p.created_at) as last_post_date
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id, u.name, u.email;`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">NoSQL with MongoDB</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Document-Based Storage</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// User document in MongoDB
{
  "_id": ObjectId("..."),
  "name": "John Doe",
  "email": "john@example.com",
  "profile": {
    "bio": "Full-stack developer",
    "skills": ["JavaScript", "React", "Node.js"],
    "social": {
      "github": "johndoe",
      "linkedin": "john-doe"
    }
  },
  "posts": [
    {
      "title": "Getting Started with MongoDB",
      "content": "MongoDB is a NoSQL database...",
      "tags": ["mongodb", "database", "nosql"],
      "createdAt": ISODate("2023-01-15T10:30:00Z")
    }
  ],
  "createdAt": ISODate("2023-01-01T08:00:00Z")
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <h4 className="font-semibold text-orange-800 mb-3">Aggregation Pipeline</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Find users with most posts
db.users.aggregate([
  // Unwind posts array
  { $unwind: "$posts" },
  
  // Group by user and count posts
  {
    $group: {
      _id: "$_id",
      name: { $first: "$name" },
      email: { $first: "$email" },
      postCount: { $sum: 1 },
      latestPost: { $max: "$posts.createdAt" }
    }
  },
  
  // Sort by post count
  { $sort: { postCount: -1 } },
  
  // Limit to top 10
  { $limit: 10 }
]);

// Search posts by tags
db.users.aggregate([
  { $unwind: "$posts" },
  { $match: { "posts.tags": "mongodb" } },
  {
    $project: {
      name: 1,
      postTitle: "$posts.title",
      tags: "$posts.tags"
    }
  }
]);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🚀 Next: Authentication Systems</h3>
        <p className="text-indigo-700">
          Learn to secure your applications with JWT, OAuth, and role-based access control.
        </p>
      </div>
    </div>
  );
}