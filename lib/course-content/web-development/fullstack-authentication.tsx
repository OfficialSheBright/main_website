export default function FullStackAuthenticationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">4.3 Authentication in Full-Stack Apps</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Secure Full-Stack Authentication</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Protected routes and authorization</li>
          <li>• Secure token storage strategies</li>
          <li>• HTTPS enforcement and security headers</li>
          <li>• Multi-role authentication systems</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Protected Routes Implementation</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">React Protected Route Component</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// components/ProtectedRoute.jsx
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function ProtectedRoute({ children, requiredRole = null }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    // Redirect to login with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="text-center py-12">
        <h2 className="text-xl font-semibold text-red-600">Access Denied</h2>
        <p className="text-gray-600">You don't have permission to access this page.</p>
      </div>
    );
  }

  return children;
}

// Usage in App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        
        {/* Admin only routes */}
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminPanel />
          </ProtectedRoute>
        } />
        
        {/* Editor/Admin routes */}
        <Route path="/editor" element={
          <ProtectedRoute requiredRole={['editor', 'admin']}>
            <EditorPanel />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">Auth Context Provider</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import ApiService from '../services/ApiService';

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Verify token and get user data
          const userData = await ApiService.request('/auth/me');
          setUser(userData);
        } catch (error) {
          localStorage.removeItem('token');
        }
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  const login = async (credentials) => {
    try {
      const response = await ApiService.login(credentials);
      const { token, user } = response;
      
      localStorage.setItem('token', token);
      setUser(user);
      
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    hasRole: (role) => user?.role === role,
    hasAnyRole: (roles) => roles.includes(user?.role)
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Storage Strategy: Cookies vs localStorage</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">localStorage</h3>
            <div className="mb-4">
              <h5 className="font-semibold text-yellow-700 mb-2">Pros:</h5>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• Easy to implement</li>
                <li>• JavaScript access</li>
                <li>• Large storage capacity</li>
                <li>• No automatic server sending</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold text-yellow-700 mb-2">Cons:</h5>
              <ul className="text-yellow-600 space-y-1 text-sm">
                <li>• XSS vulnerable</li>
                <li>• No automatic expiry</li>
                <li>• JavaScript required</li>
              </ul>
            </div>
            <div className="bg-gray-900 text-white p-3 rounded">
              <pre className="text-xs">
                <code>{`// localStorage implementation
const login = async (credentials) => {
  const { token } = await api.login(credentials);
  localStorage.setItem('token', token);
};

const getToken = () => {
  return localStorage.getItem('token');
};`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">httpOnly Cookies</h3>
            <div className="mb-4">
              <h5 className="font-semibold text-green-700 mb-2">Pros:</h5>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• XSS protection</li>
                <li>• Automatic expiry</li>
                <li>• CSRF protection available</li>
                <li>• Sent automatically</li>
              </ul>
            </div>
            <div className="mb-4">
              <h5 className="font-semibold text-green-700 mb-2">Cons:</h5>
              <ul className="text-green-600 space-y-1 text-sm">
                <li>• CSRF vulnerable</li>
                <li>• Size limitations</li>
                <li>• Complex CORS setup</li>
              </ul>
            </div>
            <div className="bg-gray-900 text-white p-3 rounded">
              <pre className="text-xs">
                <code>{`// Cookie implementation (backend)
app.post('/login', async (req, res) => {
  const { token } = await authenticate(req.body);
  
  res.cookie('token', token, {
    httpOnly: true,
    secure: true,
    sameSite: 'strict',
    maxAge: 24 * 60 * 60 * 1000
  });
  
  res.json({ success: true });
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">HTTPS & Security Headers</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">Production Security Configuration</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Security middleware for Express
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');

// Security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"],
    },
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests, please try again later.'
  }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // 5 login attempts per 15 minutes
  skipSuccessfulRequests: true
});

app.use('/api/', limiter);
app.use('/auth/login', authLimiter);

// HTTPS redirect (if not using reverse proxy)
app.use((req, res, next) => {
  if (req.header('x-forwarded-proto') !== 'https') {
    res.redirect(\`https://\${req.header('host')}\${req.url}\`);
  } else {
    next();
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Multi-Role Authentication</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
          <h4 className="font-semibold text-indigo-800 mb-3">Role-Based UI Components</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// components/RoleBasedComponent.jsx
import { useAuth } from '../contexts/AuthContext';

export function RoleGate({ allowedRoles, children, fallback = null }) {
  const { user } = useAuth();
  
  if (!user || !allowedRoles.includes(user.role)) {
    return fallback;
  }
  
  return children;
}

// Usage in components
function BlogPost({ post }) {
  const { user, hasAnyRole } = useAuth();
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      
      {/* Only post author or editors can edit */}
      {(user?.id === post.authorId || hasAnyRole(['editor', 'admin'])) && (
        <button onClick={() => editPost(post.id)}>
          Edit Post
        </button>
      )}
      
      {/* Only admins can delete */}
      <RoleGate allowedRoles={['admin']}>
        <button 
          onClick={() => deletePost(post.id)}
          className="text-red-600"
        >
          Delete Post
        </button>
      </RoleGate>
      
      {/* Premium content for subscribers */}
      <RoleGate 
        allowedRoles={['subscriber', 'editor', 'admin']}
        fallback={<PremiumUpsell />}
      >
        <PremiumContent content={post.premiumContent} />
      </RoleGate>
    </article>
  );
}

// Conditional navigation
function Navigation() {
  const { hasAnyRole } = useAuth();
  
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      
      {hasAnyRole(['editor', 'admin']) && (
        <Link to="/editor">Content Editor</Link>
      )}
      
      {hasAnyRole(['admin']) && (
        <Link to="/admin">Admin Panel</Link>
      )}
    </nav>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🔐 Security Checklist</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-red-700">Authentication:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>✓ Strong password requirements</li>
              <li>✓ Rate limiting on auth endpoints</li>
              <li>✓ Secure token storage</li>
              <li>✓ Token expiration handling</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">Authorization:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>✓ Role-based access control</li>
              <li>✓ Protected API endpoints</li>
              <li>✓ UI permission gating</li>
              <li>✓ Input validation & sanitization</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}