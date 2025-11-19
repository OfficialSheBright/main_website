export default function NodejsExpressContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">3.2 Node.js + Express</h1>
      
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">What You&apos;ll Build</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Express server with routing</li>
          <li>• Middleware for authentication & logging</li>
          <li>• CRUD operations with database</li>
          <li>• File upload and session management</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Express Setup & Routing</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Basic Express Server</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to our API!' });
});

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // Create user logic here
  res.status(201).json({ 
    id: Date.now(), 
    name, 
    email,
    created_at: new Date()
  });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Middleware & Controllers</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Authentication Middleware</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// middleware/auth.js
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">User Controller</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// controllers/userController.js
const User = require('../models/User');

const userController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select('-password');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Create user
  createUser: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json({ 
        id: user._id, 
        name: user.name, 
        email: user.email 
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = userController;`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">File Upload & Sessions</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">File Upload</h4>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <pre>
                <code>{`const multer = require('multer');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Sessions & Cookies</h4>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <pre>
                <code>{`const session = require('express-session');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // true in production
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

app.post('/login', (req, res) => {
  req.session.userId = user.id;
  res.json({ message: 'Logged in successfully' });
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🎯 Project: Build a Complete API</h3>
        <p className="text-green-700">
          Create a full REST API with authentication, file uploads, and CRUD operations for a blog or e-commerce platform.
        </p>
      </div>
    </div>
  );
}