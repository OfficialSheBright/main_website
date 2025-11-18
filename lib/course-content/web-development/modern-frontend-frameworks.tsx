export default function ModernFrontendFrameworksContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.4 Modern Frontend Frameworks</h1>
      
      {/* Learning Objectives */}
      <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
        <h3 className="text-blue-800 font-semibold mb-3">What You'll Master</h3>
        <ul className="text-blue-700 space-y-2">
          <li>• React.js fundamentals: components, JSX, and virtual DOM</li>
          <li>• Modern React with hooks (useState, useEffect, useContext)</li>
          <li>• Component patterns and best practices</li>
          <li>• State management and props drilling solutions</li>
          <li>• React Router for client-side routing</li>
          <li>• Performance optimization techniques</li>
        </ul>
      </div>

      {/* React Fundamentals */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">React.js Fundamentals</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Component Basics & JSX</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Functional Component with JSX
import React from 'react';

function Welcome({ name, age }) {
  return (
    <div className="welcome-card">
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <button onClick={() => alert(\`Welcome \${name}!\`)}>
        Click me
      </button>
    </div>
  );
}

// Component with conditional rendering
function UserProfile({ user, isLoggedIn }) {
  if (!isLoggedIn) {
    return <div>Please log in to see your profile</div>;
  }

  return (
    <div className="profile">
      <img src={user.avatar} alt={\`\${user.name}'s avatar\`} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      
      {/* Conditional rendering with ternary */}
      {user.isPremium ? (
        <span className="badge premium">Premium User</span>
      ) : (
        <button>Upgrade to Premium</button>
      )}
      
      {/* List rendering */}
      <ul>
        {user.hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}

// Export components
export default Welcome;
export { UserProfile };`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">JSX Rules</h4>
            <ul className="text-sm text-green-600 space-y-2">
              <li>• Must return a single parent element</li>
              <li>• Use className instead of class</li>
              <li>• Close all tags (including self-closing)</li>
              <li>• Use camelCase for event handlers</li>
              <li>• Embed JavaScript with curly braces {}</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Component Best Practices</h4>
            <ul className="text-sm text-purple-600 space-y-2">
              <li>• Keep components small and focused</li>
              <li>• Use descriptive component names</li>
              <li>• Extract reusable logic into custom hooks</li>
              <li>• Prefer composition over inheritance</li>
              <li>• Use PropTypes or TypeScript for type checking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* React Hooks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">React Hooks Deep Dive</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Essential Hooks</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`import React, { useState, useEffect, useContext, useReducer, useMemo, useCallback } from 'react';

// useState - Managing component state
function Counter() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({ name: '', email: '' });

  const incrementCount = () => setCount(prev => prev + 1);
  
  const updateUser = (field, value) => {
    setUser(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      
      <input 
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
    </div>
  );
}

// useEffect - Side effects and lifecycle
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(\`/api/users/\${userId}\`);
        const userData = await response.json();
        
        if (isMounted) {
          setUser(userData);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    // Cleanup function
    return () => {
      isMounted = false;
    };
  }, [userId]); // Dependency array

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return <div>Welcome, {user.name}!</div>;
}

// Custom Hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
}

// Using custom hook
function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">useState</h4>
            <p className="text-sm text-blue-600 mb-2">Manage component state</p>
            <code className="text-xs bg-white p-1 rounded">const [state, setState] = useState(initial)</code>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">useEffect</h4>
            <p className="text-sm text-green-600 mb-2">Handle side effects</p>
            <code className="text-xs bg-white p-1 rounded">{'useEffect(() => {}, [deps])'}</code>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">useContext</h4>
            <p className="text-sm text-purple-600 mb-2">Access React Context</p>
            <code className="text-xs bg-white p-1 rounded">const value = useContext(Context)</code>
          </div>
        </div>
      </section>

      {/* React Router */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">React Router & Navigation</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Client-Side Routing</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`import { BrowserRouter, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';

// App with routing
function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />}>
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

// Component with URL parameters
function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product by ID
    fetchProduct(productId).then(setProduct);
  }, [productId]);

  const handleBackClick = () => {
    navigate('/products');
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={handleBackClick}>← Back to Products</button>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: \${product.price}</p>
    </div>
  );
}

// Protected Route component
function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  return user ? children : null;
}

// Usage of protected route
function Dashboard() {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <p>This is a protected page!</p>
      </div>
    </ProtectedRoute>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Performance Optimization */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Performance Optimization</h2>
        
        <div className="bg-white border rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Optimization Techniques</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`import React, { memo, useMemo, useCallback, lazy, Suspense } from 'react';

// React.memo - Prevent unnecessary re-renders
const ExpensiveComponent = memo(function ExpensiveComponent({ data, onUpdate }) {
  console.log('ExpensiveComponent rendered');
  
  return (
    <div>
      {data.map(item => (
        <div key={item.id} onClick={() => onUpdate(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
});

// Parent component with optimizations
function ParentComponent() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('');

  // useMemo - Memoize expensive calculations
  const filteredItems = useMemo(() => {
    console.log('Filtering items...');
    return items.filter(item => 
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  // useCallback - Memoize functions
  const handleUpdate = useCallback((id) => {
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, updated: true } : item
    ));
  }, []);

  return (
    <div>
      <input 
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter items..."
      />
      <ExpensiveComponent 
        data={filteredItems} 
        onUpdate={handleUpdate} 
      />
    </div>
  );
}

// Lazy loading components
const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Practical Project */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">⚛️ Build Project: React Todo App with Routing</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Features to implement:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Create, edit, delete, and toggle todos</li>
            <li>• Multiple pages: All, Active, Completed todos</li>
            <li>• React Router for navigation</li>
            <li>• Custom hooks for local storage and API calls</li>
            <li>• Performance optimization with memo and useMemo</li>
            <li>• Error boundaries and loading states</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 p-4 rounded">
          <p className="text-blue-800 text-sm">
            <strong>🎯 Advanced:</strong> Add drag-and-drop reordering, bulk operations, 
            keyboard shortcuts, and real-time collaboration features.
          </p>
        </div>
      </div>
    </div>
  );
}