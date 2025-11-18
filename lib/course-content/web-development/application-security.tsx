export default function ApplicationSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">8.2 Application-Level Security</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Critical Application Security Vulnerabilities</h3>
        <ul className="text-red-700 space-y-2">
          <li>• Understand and prevent SQL Injection attacks</li>
          <li>• Implement XSS (Cross-site Scripting) protection</li>
          <li>• Secure against CSRF (Cross-Site Request Forgery)</li>
          <li>• Prevent Session Hijacking vulnerabilities</li>
          <li>• Address IDOR (Insecure Direct Object Reference) issues</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">SQL Injection Prevention</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-red-800 mb-3">SQL Injection Overview & Impact</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-700 mb-3">What is SQL Injection:</h5>
              <ul className="text-red-600 space-y-2 text-sm">
                <li>• Malicious SQL code inserted into queries</li>
                <li>• Exploits unsanitized user input</li>
                <li>• Can bypass authentication</li>
                <li>• Allows unauthorized data access</li>
                <li>• Can modify or delete database records</li>
                <li>• May lead to complete system compromise</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-red-700 mb-3">Attack Examples:</h5>
              <div className="bg-white p-3 rounded">
                <h6 className="font-semibold text-red-700 text-sm mb-2">Common Injection Points:</h6>
                <ul className="text-red-600 text-xs space-y-1">
                  <li>• Login forms (username/password)</li>
                  <li>• Search boxes</li>
                  <li>• URL parameters</li>
                  <li>• Contact forms</li>
                  <li>• Cookie values</li>
                  <li>• HTTP headers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">SQL Injection Prevention Techniques</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-400 mb-3">❌ Vulnerable Code Example</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// DANGEROUS - Never do this!
const userId = req.params.id;
const query = \`SELECT * FROM users WHERE id = \${userId}\`;
const user = await db.query(query);

// Login vulnerability
const username = req.body.username;
const password = req.body.password;
const loginQuery = \`
  SELECT * FROM users 
  WHERE username = '\${username}' 
  AND password = '\${password}'
\`;

// Malicious input: ' OR '1'='1' --
// Results in: SELECT * FROM users WHERE username = '' OR '1'='1' --' AND password = ''`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-400 mb-3">✅ Secure Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// 1. Parameterized Queries (Prepared Statements)
const getUserById = async (userId) => {
  const query = 'SELECT * FROM users WHERE id = ?';
  return await db.query(query, [userId]);
};

// 2. ORM/Query Builder (Sequelize)
const user = await User.findOne({
  where: {
    id: userId,
    status: 'active'
  }
});

// 3. Input Validation & Sanitization
const { body, validationResult } = require('express-validator');

app.post('/login', [
  body('username').isAlphanumeric().trim().escape(),
  body('password').isLength({ min: 8 }).trim()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  // Safe to proceed with validated input
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
});

// 4. Stored Procedures (when applicable)
const result = await db.query(
  'CALL GetUserProfile(?)', 
  [userId]
);`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">SQL Injection Testing Tools</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-blue-700 text-sm mb-2">Automated Tools:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• SQLMap</li>
                <li>• Havij</li>
                <li>• jSQL Injection</li>
                <li>• Burp Suite</li>
                <li>• OWASP ZAP</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-blue-700 text-sm mb-2">Manual Testing:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• Single quote (') injection</li>
                <li>• Union-based attacks</li>
                <li>• Boolean-based blind SQL</li>
                <li>• Time-based blind SQL</li>
                <li>• Error-based injection</li>
              </ul>
            </div>
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-blue-700 text-sm mb-2">Prevention Checks:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• Input validation audits</li>
                <li>• Code review processes</li>
                <li>• Static analysis tools</li>
                <li>• Penetration testing</li>
                <li>• Database monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Cross-Site Scripting (XSS) Protection</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">🔍 Reflected XSS</h3>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Malicious script in URL/form</li>
              <li>• Immediately reflected back</li>
              <li>• Often via search results</li>
              <li>• Requires user interaction</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-orange-700 text-xs mb-2">Example Attack:</h5>
              <pre className="text-orange-600 text-xs">
                <code>{`/search?q=<script>
  alert('XSS')
</script>`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">💾 Stored XSS</h3>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Script stored in database</li>
              <li>• Executed on page load</li>
              <li>• Affects all users</li>
              <li>• Most dangerous type</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-red-700 text-xs mb-2">Common Sources:</h5>
              <ul className="text-red-600 text-xs space-y-1">
                <li>• User comments</li>
                <li>• Profile information</li>
                <li>• Forum posts</li>
                <li>• File uploads</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">📱 DOM XSS</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Client-side manipulation</li>
              <li>• JavaScript DOM changes</li>
              <li>• No server involvement</li>
              <li>• Harder to detect</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-purple-700 text-xs mb-2">Vulnerable Sinks:</h5>
              <ul className="text-purple-600 text-xs space-y-1">
                <li>• innerHTML</li>
                <li>• document.write()</li>
                <li>• eval()</li>
                <li>• setTimeout()</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">XSS Prevention Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Input Sanitization & Validation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// 1. HTML Entity Encoding
const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

// 2. Using DOMPurify (Client & Server)
import DOMPurify from 'dompurify';

const sanitizeInput = (dirty) => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    ALLOWED_ATTR: []
  });
};

// 3. Express.js with Helmet & CSP
const helmet = require('helmet');

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"]
    }
  }
}));

// 4. Template Engine Auto-Escaping (EJS)
app.set('view engine', 'ejs');
// Variables are auto-escaped by default
// Use <%- %> only for trusted content`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">React XSS Protection</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// React automatically escapes JSX content
function UserComment({ comment }) {
  return (
    <div>
      {/* Safe - React escapes by default */}
      <p>{comment.text}</p>
      
      {/* DANGEROUS - Never use dangerouslySetInnerHTML with user input */}
      <div dangerouslySetInnerHTML={{__html: comment.html}} />
    </div>
  );
}

// Safe HTML rendering with sanitization
import DOMPurify from 'isomorphic-dompurify';

function SafeHtmlComponent({ htmlContent }) {
  const cleanHtml = DOMPurify.sanitize(htmlContent);
  
  return (
    <div dangerouslySetInnerHTML={{__html: cleanHtml}} />
  );
}

// Input validation hook
import { useState, useCallback } from 'react';

export function useValidatedInput(validator) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = useCallback((input) => {
    const sanitized = DOMPurify.sanitize(input);
    const validation = validator(sanitized);
    
    if (validation.isValid) {
      setValue(sanitized);
      setError('');
    } else {
      setError(validation.error);
    }
  }, [validator]);

  return { value, error, handleChange };
}

// Content Security Policy in Next.js
// next.config.js
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: \`
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline';
      style-src 'self' 'unsafe-inline';
      img-src 'self' blob: data:;
    \`.replace(/\\s{2,}/g, ' ').trim()
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CSRF Protection</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-3">CSRF Attack Mechanism</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">How CSRF Works:</h5>
              <ol className="text-yellow-600 space-y-2 text-sm">
                <li>1. User logs into legitimate site A</li>
                <li>2. User visits malicious site B (same browser)</li>
                <li>3. Site B sends request to site A</li>
                <li>4. Browser includes site A cookies</li>
                <li>5. Site A processes request as legitimate</li>
              </ol>
            </div>
            
            <div>
              <h5 className="font-semibold text-yellow-700 mb-3">Attack Examples:</h5>
              <div className="bg-white p-3 rounded">
                <pre className="text-yellow-600 text-xs">
                  <code>{`<!-- Malicious form on attacker site -->
<form action="https://bank.com/transfer" method="POST">
  <input type="hidden" name="amount" value="1000">
  <input type="hidden" name="to" value="attacker-account">
</form>
<script>document.forms[0].submit();</script>

<!-- Image-based CSRF -->
<img src="https://bank.com/transfer?amount=1000&to=attacker" 
     style="display:none;">

<!-- AJAX CSRF -->
<script>
fetch('https://bank.com/api/transfer', {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify({
    amount: 1000,
    to: 'attacker-account'
  })
});
</script>`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">CSRF Protection Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">CSRF Token Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Express.js with CSRF middleware
const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

// Provide token to templates
app.use((req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
});

// HTML form with CSRF token
app.get('/form', (req, res) => {
  res.render('form', { 
    csrfToken: req.csrfToken() 
  });
});

// Form template (EJS)
\`<form method="POST" action="/submit">
  <input type="hidden" name="_csrf" value="<%= csrfToken %>">
  <input type="text" name="data">
  <button type="submit">Submit</button>
</form>\`

// API endpoint protection
app.post('/api/data', (req, res) => {
  // CSRF middleware automatically validates token
  res.json({ success: true });
});

// Custom CSRF validation
const validateCSRF = (req, res, next) => {
  const token = req.body._csrf || req.headers['x-csrf-token'];
  if (!token || !csrf.verify(req.session.csrfSecret, token)) {
    return res.status(403).json({ error: 'Invalid CSRF token' });
  }
  next();
};`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Modern CSRF Protection</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// SameSite Cookie Protection
app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    sameSite: 'strict', // or 'lax'
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Double Submit Cookie Pattern
const generateCSRFToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

app.use((req, res, next) => {
  if (!req.session.csrfToken) {
    req.session.csrfToken = generateCSRFToken();
  }
  
  // Set cookie for client-side access
  res.cookie('XSRF-TOKEN', req.session.csrfToken, {
    httpOnly: false, // Allow JS access
    sameSite: 'strict'
  });
  
  next();
});

// Verify double submit cookie
const verifyDoubleSubmit = (req, res, next) => {
  const sessionToken = req.session.csrfToken;
  const cookieToken = req.cookies['XSRF-TOKEN'];
  const headerToken = req.headers['x-xsrf-token'];
  
  if (!sessionToken || sessionToken !== cookieToken || 
      sessionToken !== headerToken) {
    return res.status(403).json({ error: 'CSRF validation failed' });
  }
  
  next();
};

// React implementation
const CSRFToken = () => {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    // Get token from cookie or API
    const csrfToken = document.cookie
      .split('; ')
      .find(row => row.startsWith('XSRF-TOKEN='))
      ?.split('=')[1];
    setToken(csrfToken);
  }, []);
  
  return <input type="hidden" name="_csrf" value={token} />;
};

// Axios CSRF setup
axios.defaults.xsrfCookieName = 'XSRF-TOKEN';
axios.defaults.xsrfHeaderName = 'X-XSRF-TOKEN';`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Session Hijacking Prevention</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">Session Hijacking Methods</h4>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Session fixation attacks</li>
              <li>• Cookie theft via XSS</li>
              <li>• Network sniffing (HTTP)</li>
              <li>• Brute force session IDs</li>
              <li>• Session prediction</li>
              <li>• Man-in-the-middle attacks</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-red-700 text-xs mb-2">Attack Impact:</h5>
              <ul className="text-red-600 text-xs space-y-1">
                <li>• Complete account takeover</li>
                <li>• Unauthorized actions</li>
                <li>• Data theft</li>
                <li>• Identity impersonation</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">Protection Strategies</h4>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Secure session configuration</li>
              <li>• Session regeneration</li>
              <li>• IP address validation</li>
              <li>• User agent verification</li>
              <li>• Session timeout</li>
              <li>• Multi-factor authentication</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-green-700 text-xs mb-2">Best Practices:</h5>
              <ul className="text-green-600 text-xs space-y-1">
                <li>• Always use HTTPS</li>
                <li>• HttpOnly cookies</li>
                <li>• Secure cookie flag</li>
                <li>• Strong session IDs</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Secure Session Implementation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Express Session Security</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  name: 'sessionId', // Don't use default name
  secret: process.env.SESSION_SECRET, // Strong, random secret
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.MONGODB_URI,
    touchAfter: 24 * 3600 // Lazy session update
  }),
  cookie: {
    secure: process.env.NODE_ENV === 'production', // HTTPS only
    httpOnly: true, // Prevent XSS access
    maxAge: 30 * 60 * 1000, // 30 minutes
    sameSite: 'strict' // CSRF protection
  }
}));

// Session regeneration on login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  
  const user = await authenticateUser(username, password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  
  // Regenerate session ID to prevent fixation
  req.session.regenerate((err) => {
    if (err) {
      return res.status(500).json({ error: 'Session error' });
    }
    
    req.session.userId = user.id;
    req.session.loginTime = Date.now();
    req.session.userAgent = req.headers['user-agent'];
    req.session.ipAddress = req.ip;
    
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ error: 'Session save error' });
      }
      res.json({ success: true, user: { id: user.id, username: user.username } });
    });
  });
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Session Validation Middleware</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Enhanced session validation
const validateSession = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ error: 'Not authenticated' });
  }
  
  // Check session age
  const sessionAge = Date.now() - req.session.loginTime;
  const maxAge = 2 * 60 * 60 * 1000; // 2 hours
  if (sessionAge > maxAge) {
    req.session.destroy();
    return res.status(401).json({ error: 'Session expired' });
  }
  
  // Validate IP address (optional, can break mobile users)
  if (req.session.ipAddress && req.session.ipAddress !== req.ip) {
    console.warn(\`IP mismatch: \${req.session.ipAddress} vs \${req.ip}\`);
    // Could force re-authentication or just log
  }
  
  // Validate user agent
  if (req.session.userAgent !== req.headers['user-agent']) {
    console.warn('User agent mismatch detected');
    // Could force re-authentication
  }
  
  // Check if user still exists and is active
  const user = await User.findOne({ 
    _id: req.session.userId, 
    isActive: true 
  });
  
  if (!user) {
    req.session.destroy();
    return res.status(401).json({ error: 'User not found or inactive' });
  }
  
  req.user = user;
  next();
};

// Logout with session cleanup
app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    
    res.clearCookie('sessionId');
    res.json({ success: true });
  });
});

// Session monitoring and cleanup
const cleanupSessions = async () => {
  const expiredSessions = await SessionStore.find({
    lastAccess: { $lt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  });
  
  await SessionStore.deleteMany({
    _id: { $in: expiredSessions.map(s => s._id) }
  });
  
  console.log(\`Cleaned up \${expiredSessions.length} expired sessions\`);
};

// Run cleanup every hour
setInterval(cleanupSessions, 60 * 60 * 1000);`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">IDOR (Insecure Direct Object Reference) Prevention</h2>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-purple-800 mb-3">IDOR Vulnerability Overview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">What is IDOR:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• Direct access to objects via identifiers</li>
                <li>• Missing authorization checks</li>
                <li>• Predictable object references</li>
                <li>• Horizontal privilege escalation</li>
                <li>• Vertical privilege escalation</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Common Examples:</h5>
              <div className="bg-white p-3 rounded">
                <pre className="text-purple-600 text-xs">
                  <code>{`// Vulnerable URLs
GET /user/profile/123
GET /document/456
GET /admin/users/789

// Attacker changes IDs
GET /user/profile/124  // Other user's profile
GET /document/457      // Unauthorized document
GET /admin/users/790   // Admin access attempt

// API endpoints
GET /api/orders/12345
POST /api/user/98765/delete
PUT /api/files/55555/share`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">IDOR Protection Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-red-400 mb-3">❌ Vulnerable Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// BAD - No authorization check
app.get('/api/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// BAD - Only authentication, no authorization
app.get('/api/document/:id', authenticateUser, async (req, res) => {
  const document = await Document.findById(req.params.id);
  res.json(document);
});

// BAD - Predictable IDs
app.get('/api/order/:orderId', async (req, res) => {
  // orderId is sequential: 1, 2, 3, 4...
  const order = await Order.findOne({ 
    id: req.params.orderId 
  });
  res.json(order);
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-400 mb-3">✅ Secure Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// GOOD - Proper authorization
app.get('/api/user/:id', authenticateUser, async (req, res) => {
  // Users can only access their own profile
  if (req.params.id !== req.user.id && !req.user.isAdmin) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  
  const user = await User.findById(req.params.id);
  res.json(user);
});

// GOOD - Resource ownership validation
app.get('/api/document/:id', authenticateUser, async (req, res) => {
  const document = await Document.findOne({
    _id: req.params.id,
    $or: [
      { owner: req.user.id },
      { sharedWith: req.user.id },
      { isPublic: true }
    ]
  });
  
  if (!document) {
    return res.status(404).json({ error: 'Document not found' });
  }
  
  res.json(document);
});

// GOOD - UUIDs instead of sequential IDs
const { v4: uuidv4 } = require('uuid');

const orderSchema = new mongoose.Schema({
  _id: { 
    type: String, 
    default: uuidv4 
  },
  userId: { type: String, required: true },
  // ... other fields
});

app.get('/api/order/:orderId', authenticateUser, async (req, res) => {
  const order = await Order.findOne({
    _id: req.params.orderId,
    userId: req.user.id
  });
  
  if (!order) {
    return res.status(404).json({ error: 'Order not found' });
  }
  
  res.json(order);
});`}</code>
              </pre>
            </div>
          </div>
          
          <div className="mt-6">
            <h5 className="font-semibold text-yellow-400 mb-3">Authorization Middleware Pattern</h5>
            <pre className="text-sm overflow-x-auto">
              <code>{`// Reusable authorization middleware
const authorizeResource = (model, ownerField = 'userId') => {
  return async (req, res, next) => {
    try {
      const resourceId = req.params.id;
      const query = { _id: resourceId };
      
      // Add ownership constraint unless user is admin
      if (!req.user.isAdmin) {
        query[ownerField] = req.user.id;
      }
      
      const resource = await model.findOne(query);
      
      if (!resource) {
        return res.status(404).json({ error: 'Resource not found' });
      }
      
      req.resource = resource;
      next();
    } catch (error) {
      res.status(500).json({ error: 'Authorization check failed' });
    }
  };
};

// Usage examples
app.get('/api/profile/:id', 
  authenticateUser,
  authorizeResource(User),
  (req, res) => {
    res.json(req.resource);
  }
);

app.put('/api/document/:id',
  authenticateUser,
  authorizeResource(Document, 'ownerId'),
  (req, res) => {
    // Update the authorized document
    Object.assign(req.resource, req.body);
    req.resource.save();
    res.json(req.resource);
  }
);

// Role-based authorization
const requireRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};

app.delete('/api/user/:id',
  authenticateUser,
  requireRole(['admin', 'moderator']),
  authorizeResource(User),
  async (req, res) => {
    await req.resource.deleteOne();
    res.json({ success: true });
  }
);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🛡️ Security Testing & Monitoring</h3>
        <p className="text-red-700 mb-3">
          Implement comprehensive security testing and monitoring to detect and prevent application-level attacks.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-red-700">Testing Tools:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• OWASP ZAP</li>
              <li>• Burp Suite</li>
              <li>• SQLMap</li>
              <li>• Nikto</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">Monitoring:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• WAF logs analysis</li>
              <li>• Failed authentication tracking</li>
              <li>• Suspicious request patterns</li>
              <li>• Real-time alerts</li>
            </ul>
          </div>
          <div>
            <strong className="text-red-700">Best Practices:</strong>
            <ul className="text-red-600 mt-1 space-y-1">
              <li>• Regular security audits</li>
              <li>• Penetration testing</li>
              <li>• Code review processes</li>
              <li>• Security training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}