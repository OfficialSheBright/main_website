export default function AuthenticationSystemsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">3.4 Authentication Systems</h1>
      
      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
        <h3 className="text-red-800 font-semibold mb-3">Security Fundamentals</h3>
        <ul className="text-red-700 space-y-2">
          <li>• JWT token-based authentication</li>
          <li>• OAuth integration with social providers</li>
          <li>• Secure password hashing with bcrypt</li>
          <li>• Role-Based Access Control (RBAC)</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">JWT Authentication</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">JWT Implementation</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Find user in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Verify password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    
    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: user._id, 
        email: user.email,
        role: user.role 
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Send token and user info
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});`}</code>
          </pre>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">Password Hashing with bcrypt</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`const bcrypt = require('bcrypt');
const saltRounds = 12;

// Registration endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: 'user' // default role
    });
    
    await user.save();
    
    res.status(201).json({
      message: 'User created successfully',
      user: { id: user._id, name: user.name, email: user.email }
    });
    
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'Email already exists' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">OAuth Integration</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Google OAuth</h4>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <pre>
                <code>{`const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ googleId: profile.id });
    
    if (user) {
      return done(null, user);
    }
    
    user = new User({
      googleId: profile.id,
      name: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    });
    
    await user.save();
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-800 mb-2">GitHub OAuth</h4>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <pre>
                <code>{`// GitHub OAuth routes
app.get('/auth/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/login' }),
  (req, res) => {
    // Generate JWT for authenticated user
    const token = jwt.sign(
      { userId: req.user._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    
    // Redirect with token
    res.redirect(\`\${process.env.CLIENT_URL}/dashboard?token=\${token}\`);
  }
);`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-800 mb-2">Discord OAuth</h4>
            <div className="bg-gray-900 text-white p-3 rounded text-xs">
              <pre>
                <code>{`const DiscordStrategy = require('passport-discord');

passport.use(new DiscordStrategy({
  clientID: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  callbackURL: '/auth/discord/callback',
  scope: ['identify', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ discordId: profile.id });
    
    if (!user) {
      user = new User({
        discordId: profile.id,
        username: profile.username,
        email: profile.email,
        avatar: \`https://cdn.discordapp.com/avatars/\${profile.id}/\${profile.avatar}.png\`
      });
      await user.save();
    }
    
    done(null, user);
  } catch (error) {
    done(error, null);
  }
}));`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Role-Based Access Control (RBAC)</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">RBAC Middleware</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Role-based middleware
const authorize = (roles = []) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
    
    if (roles.length && !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
    }
    
    next();
  };
};

// Usage examples
app.get('/api/admin/users', 
  authenticateToken, 
  authorize(['admin']), 
  (req, res) => {
    // Only admins can access
  }
);

app.post('/api/posts', 
  authenticateToken, 
  authorize(['admin', 'editor', 'user']), 
  (req, res) => {
    // Authenticated users can create posts
  }
);

app.delete('/api/posts/:id', 
  authenticateToken, 
  authorize(['admin', 'editor']), 
  (req, res) => {
    // Only admins and editors can delete
  }
);`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
        <h3 className="text-red-800 font-semibold mb-2">🔐 Security Best Practices</h3>
        <ul className="text-red-700 space-y-1 text-sm">
          <li>• Always use HTTPS in production</li>
          <li>• Store JWT secrets securely</li>
          <li>• Implement rate limiting</li>
          <li>• Use secure session configuration</li>
          <li>• Validate and sanitize all inputs</li>
        </ul>
      </div>
    </div>
  );
}