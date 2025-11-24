export default function ServerInfrastructureSecurityContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">8.4 Server & Infrastructure Security</h1>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Infrastructure Security Essentials</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Design secure APIs with proper authentication and authorization</li>
          <li>• Implement CORS policies for cross-origin security</li>
          <li>• Deploy rate limiting to prevent abuse and attacks</li>
          <li>• Establish comprehensive logging and monitoring systems</li>
          <li>• Secure server configurations and deployments</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Secure API Design</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">API Security Principles</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-700 mb-3">Core Security Practices:</h5>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• Always use HTTPS/TLS encryption</li>
                <li>• Implement proper authentication</li>
                <li>• Use API versioning strategies</li>
                <li>• Validate all input data</li>
                <li>• Sanitize output data</li>
                <li>• Apply principle of least privilege</li>
                <li>• Use secure HTTP headers</li>
                <li>• Implement proper error handling</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-green-700 mb-3">API Security Standards:</h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-green-700 text-sm">REST API Security:</h6>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Use HTTP methods correctly</li>
                    <li>• Implement resource-based URLs</li>
                    <li>• Use proper status codes</li>
                    <li>• Stateless design</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-green-700 text-sm">GraphQL Security:</h6>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• Query depth limiting</li>
                    <li>• Query complexity analysis</li>
                    <li>• Disable introspection in production</li>
                    <li>• Field-level authorization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Secure API Implementation</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Express.js Security Middleware Stack</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const express = require('express');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const compression = require('compression');
const morgan = require('morgan');
const validator = require('express-validator');

const app = express();

// Security Headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'none'"],
    },
  },
  crossOriginEmbedderPolicy: false,
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://yourdomain.com',
      'https://app.yourdomain.com',
      'http://localhost:3000' // Dev only
    ];
    
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
};

app.use(cors(corsOptions));

// Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      error: 'Rate limit exceeded',
      retryAfter: Math.round(req.rateLimit.resetTime / 1000)
    });
  }
});

const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5, // Strict limit for sensitive endpoints
  skipSuccessfulRequests: true
});

// Apply rate limiting
app.use('/api/', apiLimiter);
app.use('/api/login', strictLimiter);
app.use('/api/auth/register', strictLimiter);

// Request parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(compression());

// Logging
app.use(morgan('combined', {
  skip: (req, res) => res.statusCode < 400
}));

// Request ID for tracing
app.use((req, res, next) => {
  req.id = require('crypto').randomUUID();
  res.setHeader('X-Request-ID', req.id);
  next();
});

// Input validation middleware
const validateInput = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        error: 'Validation failed',
        details: errors.array()
      });
    }
    
    next();
  };
};

// API Routes with validation
app.post('/api/users', [
  validateInput([
    validator.body('email').isEmail().normalizeEmail(),
    validator.body('name').trim().isLength({ min: 2, max: 50 }).escape(),
    validator.body('age').optional().isInt({ min: 0, max: 150 })
  ])
], async (req, res) => {
  try {
    const { email, name, age } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }
    
    const user = new User({ email, name, age });
    await user.save();
    
    // Don't return sensitive data
    res.status(201).json({
      id: user._id,
      email: user.email,
      name: user.name,
      createdAt: user.createdAt
    });
  } catch (error) {
    console.error('User creation failed:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">API Versioning & Documentation Security</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// API Versioning Strategy
const apiV1 = express.Router();
const apiV2 = express.Router();

// Version-specific middleware
apiV1.use((req, res, next) => {
  res.setHeader('API-Version', 'v1');
  next();
});

apiV2.use((req, res, next) => {
  res.setHeader('API-Version', 'v2');
  next();
});

// Deprecation warnings
apiV1.use((req, res, next) => {
  res.setHeader('Sunset', 'Fri, 30 Jun 2024 23:59:59 GMT');
  res.setHeader('Deprecation', 'true');
  next();
});

app.use('/api/v1', apiV1);
app.use('/api/v2', apiV2);
app.use('/api', apiV2); // Default to latest

// Secure API Documentation (Swagger/OpenAPI)
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Secure API',
      version: '2.0.0',
      description: 'A secure REST API with comprehensive documentation'
    },
    servers: [
      {
        url: 'https://api.yourdomain.com',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [{ BearerAuth: [] }]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJsdoc(swaggerOptions);

// Protect documentation in production
if (process.env.NODE_ENV === 'production') {
  app.use('/api-docs', (req, res, next) => {
    // Only allow access to documentation for authenticated admin users
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Access denied' });
    }
    next();
  });
}

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "API Documentation",
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true
  }
}));

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION || '1.0.0'
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error(\`[\${req.id}] Error:\`, error);
  
  // Don't leak error details in production
  if (process.env.NODE_ENV === 'production') {
    res.status(500).json({
      error: 'Internal server error',
      requestId: req.id
    });
  } else {
    res.status(500).json({
      error: error.message,
      stack: error.stack,
      requestId: req.id
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Endpoint not found',
    path: req.originalUrl,
    method: req.method
  });
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">CORS Best Practices</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">CORS Security Overview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">CORS Fundamentals:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Controls cross-origin requests</li>
                <li>• Browser security mechanism</li>
                <li>• Prevents unauthorized data access</li>
                <li>• Configurable per endpoint</li>
                <li>• Supports credentialed requests</li>
                <li>• Handles preflight requests</li>
                <li>• Validates origin headers</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Security Risks:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Wildcard (*) origin allows all domains</li>
                <li>• Credentials with wildcard is dangerous</li>
                <li>• Missing preflight validation</li>
                <li>• Overly permissive policies</li>
                <li>• Dynamic origin validation flaws</li>
                <li>• Header injection attacks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Advanced CORS Configuration</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Secure CORS Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const cors = require('cors');

// Environment-based origin configuration
const getAllowedOrigins = () => {
  const baseOrigins = [
    'https://yourdomain.com',
    'https://www.yourdomain.com',
    'https://app.yourdomain.com'
  ];
  
  if (process.env.NODE_ENV === 'development') {
    return [
      ...baseOrigins,
      'http://localhost:3000',
      'http://localhost:3001',
      'http://127.0.0.1:3000'
    ];
  }
  
  return baseOrigins;
};

// Dynamic origin validation
const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = getAllowedOrigins();
    
    // Allow requests with no origin (mobile apps, etc.)
    if (!origin) return callback(null, true);
    
    // Check exact match
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    
    // Pattern-based validation for subdomains
    const domainPattern = /^https:\/\/[a-zA-Z0-9-]+\.yourdomain\.com$/;
    if (domainPattern.test(origin)) {
      return callback(null, true);
    }
    
    // Log suspicious requests
    console.warn(\`CORS blocked request from: \${origin}\`);
    callback(new Error('Not allowed by CORS'));
  },
  
  // Credentials support
  credentials: true,
  
  // Allowed methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  
  // Allowed headers
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'X-API-Key',
    'X-Request-ID'
  ],
  
  // Exposed headers (client can access)
  exposedHeaders: [
    'X-Request-ID',
    'X-RateLimit-Limit',
    'X-RateLimit-Remaining',
    'X-RateLimit-Reset'
  ],
  
  // Preflight cache duration
  maxAge: 86400, // 24 hours
  
  // Success status for legacy browsers
  optionsSuccessStatus: 200,
  
  // Custom preflight handler
  preflightContinue: false
};

// Apply CORS globally
app.use(cors(corsOptions));

// Route-specific CORS
const restrictedCorsOptions = {
  origin: ['https://admin.yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'DELETE']
};

app.use('/api/admin', cors(restrictedCorsOptions));

// Public API with limited CORS
const publicCorsOptions = {
  origin: true, // Allow all origins
  credentials: false, // No credentials
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
};

app.use('/api/public', cors(publicCorsOptions));

// Custom CORS middleware for complex scenarios
const customCorsMiddleware = (req, res, next) => {
  const origin = req.get('Origin');
  const userAgent = req.get('User-Agent');
  
  // Block requests from suspicious user agents
  if (userAgent && /bot|crawler|spider/i.test(userAgent)) {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  // Dynamic origin validation based on request
  if (req.path.startsWith('/api/internal')) {
    // Only allow internal origins
    const internalOrigins = ['https://internal.yourdomain.com'];
    if (!internalOrigins.includes(origin)) {
      return res.status(403).json({ error: 'Access denied' });
    }
  }
  
  // Set CORS headers manually
  res.header('Access-Control-Allow-Origin', origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin,Content-Type,Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
};

// CORS security headers
app.use((req, res, next) => {
  // Prevent CORS bypassing
  res.header('X-Content-Type-Options', 'nosniff');
  res.header('X-Frame-Options', 'DENY');
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  next();
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">CORS Testing & Monitoring</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// CORS testing utilities
const testCorsConfiguration = () => {
  const testOrigins = [
    'https://yourdomain.com',
    'https://malicious.com',
    'http://localhost:3000',
    null // No origin (mobile app)
  ];
  
  testOrigins.forEach(origin => {
    console.log(\`Testing origin: \${origin || 'no-origin'}\`);
    
    // Simulate preflight request
    const mockReq = {
      method: 'OPTIONS',
      headers: {
        'origin': origin,
        'access-control-request-method': 'POST',
        'access-control-request-headers': 'Content-Type,Authorization'
      }
    };
    
    const mockRes = {
      header: (name, value) => console.log(\`  \${name}: \${value}\`),
      sendStatus: (status) => console.log(\`  Status: \${status}\`)
    };
    
    // Test with CORS middleware
    corsOptions.origin(origin, (err, allowed) => {
      console.log(\`  Allowed: \${allowed}, Error: \${err?.message || 'none'}\`);
    });
  });
};

// CORS monitoring middleware
const corsMonitoringMiddleware = (req, res, next) => {
  const origin = req.get('Origin');
  const referer = req.get('Referer');
  
  // Log CORS requests
  if (origin || referer) {
    console.log(\`CORS Request - Origin: \${origin}, Referer: \${referer}, Path: \${req.path}\`);
  }
  
  // Monitor suspicious patterns
  if (origin && !getAllowedOrigins().includes(origin)) {
    console.warn(\`Blocked CORS request from: \${origin} to \${req.path}\`);
    
    // Optional: Log to security monitoring system
    logSecurityEvent({
      type: 'cors_violation',
      origin: origin,
      path: req.path,
      userAgent: req.get('User-Agent'),
      ip: req.ip,
      timestamp: new Date()
    });
  }
  
  next();
};

app.use(corsMonitoringMiddleware);

// CORS configuration validation
const validateCorsConfig = () => {
  const issues = [];
  
  // Check for wildcard with credentials
  if (corsOptions.origin === '*' && corsOptions.credentials) {
    issues.push('Wildcard origin with credentials is not allowed');
  }
  
  // Check for overly permissive methods
  const dangerousMethods = ['TRACE', 'CONNECT'];
  const allowedMethods = corsOptions.methods || [];
  dangerousMethods.forEach(method => {
    if (allowedMethods.includes(method)) {
      issues.push(\`Dangerous HTTP method allowed: \${method}\`);
    }
  });
  
  if (issues.length > 0) {
    console.error('CORS Configuration Issues:', issues);
    process.exit(1);
  }
  
  console.log('CORS configuration validated successfully');
};

// Security headers for CORS
const corsSecurityHeaders = (req, res, next) => {
  // Prevent clickjacking
  res.header('X-Frame-Options', 'SAMEORIGIN');
  
  // Content type sniffing protection
  res.header('X-Content-Type-Options', 'nosniff');
  
  // XSS protection
  res.header('X-XSS-Protection', '1; mode=block');
  
  // Referrer policy
  res.header('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Clear site data on logout
  if (req.path === '/api/auth/logout') {
    res.header('Clear-Site-Data', '"cache", "cookies", "storage"');
  }
  
  next();
};

app.use(corsSecurityHeaders);

// Validate configuration on startup
validateCorsConfig();

// Run CORS tests in development
if (process.env.NODE_ENV === 'development') {
  testCorsConfiguration();
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Rate Limiting</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">⏱️ Fixed Window</h3>
            <ul className="text-yellow-700 space-y-2 text-sm">
              <li>• Simple implementation</li>
              <li>• Fixed time windows</li>
              <li>• Memory efficient</li>
              <li>• Burst traffic issues</li>
              <li>• Reset at window boundary</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-yellow-700 text-xs mb-2">Use Cases:</h5>
              <ul className="text-yellow-600 text-xs space-y-1">
                <li>• Basic API protection</li>
                <li>• Simple implementation</li>
                <li>• Low resource usage</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">🪣 Token Bucket</h3>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Burst capacity allowed</li>
              <li>• Smooth rate limiting</li>
              <li>• Flexible implementation</li>
              <li>• Handles traffic spikes</li>
              <li>• Configurable refill rate</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-orange-700 text-xs mb-2">Benefits:</h5>
              <ul className="text-orange-600 text-xs space-y-1">
                <li>• Natural burst handling</li>
                <li>• User-friendly</li>
                <li>• Traffic shaping</li>
              </ul>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-red-800 mb-4">🪟 Sliding Window</h3>
            <ul className="text-red-700 space-y-2 text-sm">
              <li>• Precise rate limiting</li>
              <li>• No burst issues</li>
              <li>• Complex implementation</li>
              <li>• Higher memory usage</li>
              <li>• Accurate request tracking</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-red-700 text-xs mb-2">Enterprise Features:</h5>
              <ul className="text-red-600 text-xs space-y-1">
                <li>• Most accurate</li>
                <li>• Consistent protection</li>
                <li>• Resource intensive</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Advanced Rate Limiting Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Multi-Layer Rate Limiting</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const Redis = require('redis');

// Redis client for distributed rate limiting
const redisClient = Redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD
});

// Global rate limiting
const globalLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'global:'
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000, // Global limit per IP
  message: {
    error: 'Too many requests from this IP',
    type: 'global_rate_limit'
  },
  standardHeaders: true,
  legacyHeaders: false
});

// API-specific limiting
const apiLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'api:'
  }),
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    error: 'API rate limit exceeded',
    type: 'api_rate_limit'
  }
});

// Strict limiting for sensitive endpoints
const authLimiter = rateLimit({
  store: new RedisStore({
    client: redisClient,
    prefix: 'auth:'
  }),
  windowMs: 15 * 60 * 1000,
  max: 5, // Very strict for auth endpoints
  skipSuccessfulRequests: true, // Don't count successful auth
  skipFailedRequests: false, // Count failed attempts
  message: {
    error: 'Too many authentication attempts',
    type: 'auth_rate_limit'
  }
});

// User-specific rate limiting
const createUserLimiter = (maxRequests = 60, windowMs = 60 * 1000) => {
  return async (req, res, next) => {
    if (!req.user) {
      return next();
    }
    
    const key = \`user:\${req.user.id}\`;
    const current = await redisClient.incr(key);
    
    if (current === 1) {
      await redisClient.expire(key, windowMs / 1000);
    }
    
    if (current > maxRequests) {
      return res.status(429).json({
        error: 'User rate limit exceeded',
        type: 'user_rate_limit',
        resetTime: await redisClient.ttl(key)
      });
    }
    
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - current));
    
    next();
  };
};

// Endpoint-specific rate limiting
const endpointLimiter = (endpoint, max = 10, windowMs = 60 * 1000) => {
  return rateLimit({
    store: new RedisStore({
      client: redisClient,
      prefix: \`endpoint:\${endpoint}:\`
    }),
    windowMs,
    max,
    keyGenerator: (req) => {
      return req.user ? \`user:\${req.user.id}\` : req.ip;
    },
    message: {
      error: \`Rate limit exceeded for \${endpoint}\`,
      type: 'endpoint_rate_limit'
    }
  });
};

// Dynamic rate limiting based on user tier
const tieredRateLimiter = async (req, res, next) => {
  const user = req.user;
  if (!user) {
    return next();
  }
  
  const limits = {
    free: { requests: 100, window: 60 * 60 * 1000 }, // 100/hour
    premium: { requests: 1000, window: 60 * 60 * 1000 }, // 1000/hour
    enterprise: { requests: 10000, window: 60 * 60 * 1000 } // 10000/hour
  };
  
  const userLimit = limits[user.tier] || limits.free;
  const key = \`tier:\${user.tier}:\${user.id}\`;
  
  const current = await redisClient.incr(key);
  if (current === 1) {
    await redisClient.expire(key, userLimit.window / 1000);
  }
  
  if (current > userLimit.requests) {
    return res.status(429).json({
      error: \`\${user.tier} tier rate limit exceeded\`,
      type: 'tier_rate_limit',
      tier: user.tier,
      upgradeUrl: '/upgrade'
    });
  }
  
  res.setHeader('X-RateLimit-Tier', user.tier);
  res.setHeader('X-RateLimit-Limit', userLimit.requests);
  res.setHeader('X-RateLimit-Remaining', userLimit.requests - current);
  
  next();
};

// Apply rate limiting layers
app.use(globalLimiter);
app.use('/api', apiLimiter);
app.use('/api/auth', authLimiter);
app.use('/api/upload', endpointLimiter('upload', 5, 60 * 1000));
app.use('/api/search', endpointLimiter('search', 20, 60 * 1000));

// Apply user-specific limiting to protected routes
app.use('/api/user', authenticateUser, createUserLimiter(120, 60 * 1000));
app.use('/api/premium', authenticateUser, tieredRateLimiter);`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Custom Rate Limiting Logic</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Token bucket implementation
class TokenBucket {
  constructor(capacity, refillRate, refillPeriod = 1000) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate;
    this.refillPeriod = refillPeriod;
    this.lastRefill = Date.now();
  }
  
  consume(tokens = 1) {
    this.refill();
    
    if (this.tokens >= tokens) {
      this.tokens -= tokens;
      return true;
    }
    
    return false;
  }
  
  refill() {
    const now = Date.now();
    const timePassed = now - this.lastRefill;
    const tokensToAdd = Math.floor(timePassed / this.refillPeriod) * this.refillRate;
    
    this.tokens = Math.min(this.capacity, this.tokens + tokensToAdd);
    this.lastRefill = now;
  }
}

// Distributed token bucket with Redis
class DistributedTokenBucket {
  constructor(redisClient, key, capacity, refillRate, refillPeriod = 1000) {
    this.redis = redisClient;
    this.key = key;
    this.capacity = capacity;
    this.refillRate = refillRate;
    this.refillPeriod = refillPeriod;
  }
  
  async consume(tokens = 1) {
    const luaScript = \`
      local key = KEYS[1]
      local capacity = tonumber(ARGV[1])
      local tokens_requested = tonumber(ARGV[2])
      local refill_rate = tonumber(ARGV[3])
      local refill_period = tonumber(ARGV[4])
      local now = tonumber(ARGV[5])
      
      local bucket = redis.call('HMGET', key, 'tokens', 'last_refill')
      local tokens = tonumber(bucket[1]) or capacity
      local last_refill = tonumber(bucket[2]) or now
      
      -- Calculate refill
      local time_passed = now - last_refill
      local tokens_to_add = math.floor(time_passed / refill_period) * refill_rate
      tokens = math.min(capacity, tokens + tokens_to_add)
      
      -- Try to consume
      if tokens >= tokens_requested then
        tokens = tokens - tokens_requested
        redis.call('HMSET', key, 'tokens', tokens, 'last_refill', now)
        redis.call('EXPIRE', key, 3600) -- 1 hour TTL
        return {1, tokens}
      else
        redis.call('HMSET', key, 'tokens', tokens, 'last_refill', now)
        redis.call('EXPIRE', key, 3600)
        return {0, tokens}
      end
    \`;
    
    const result = await this.redis.eval(
      luaScript,
      1,
      this.key,
      this.capacity,
      tokens,
      this.refillRate,
      this.refillPeriod,
      Date.now()
    );
    
    return {
      allowed: result[0] === 1,
      remainingTokens: result[1]
    };
  }
}

// Advanced rate limiting middleware
const advancedRateLimit = (options) => {
  const buckets = new Map();
  
  return async (req, res, next) => {
    const key = options.keyGenerator ? options.keyGenerator(req) : req.ip;
    const bucketKey = \`bucket:\${key}\`;
    
    let bucket = buckets.get(bucketKey);
    if (!bucket) {
      bucket = new DistributedTokenBucket(
        redisClient,
        bucketKey,
        options.capacity || 10,
        options.refillRate || 1,
        options.refillPeriod || 1000
      );
      buckets.set(bucketKey, bucket);
    }
    
    const result = await bucket.consume(options.cost || 1);
    
    // Set rate limit headers
    res.setHeader('X-RateLimit-Limit', options.capacity);
    res.setHeader('X-RateLimit-Remaining', result.remainingTokens);
    res.setHeader('X-RateLimit-Reset', Date.now() + options.refillPeriod);
    
    if (!result.allowed) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        retryAfter: Math.ceil(options.refillPeriod / 1000)
      });
    }
    
    next();
  };
};

// Usage examples
app.use('/api/expensive', advancedRateLimit({
  capacity: 5,
  refillRate: 1,
  refillPeriod: 60000, // 1 minute
  cost: 2, // This endpoint costs 2 tokens
  keyGenerator: (req) => req.user ? \`user:\${req.user.id}\` : req.ip
}));

// Sliding window rate limiter
class SlidingWindowRateLimit {
  constructor(redisClient, windowSize, maxRequests) {
    this.redis = redisClient;
    this.windowSize = windowSize;
    this.maxRequests = maxRequests;
  }
  
  async isAllowed(key) {
    const now = Date.now();
    const windowStart = now - this.windowSize;
    
    const luaScript = \`
      local key = KEYS[1]
      local window_start = ARGV[1]
      local now = ARGV[2]
      local max_requests = ARGV[3]
      
      -- Remove old entries
      redis.call('ZREMRANGEBYSCORE', key, '-inf', window_start)
      
      -- Count current requests
      local current_requests = redis.call('ZCARD', key)
      
      if current_requests < tonumber(max_requests) then
        redis.call('ZADD', key, now, now)
        redis.call('EXPIRE', key, math.ceil(tonumber(ARGV[4]) / 1000))
        return {1, current_requests + 1}
      else
        return {0, current_requests}
      end
    \`;
    
    const result = await this.redis.eval(
      luaScript,
      1,
      key,
      windowStart,
      now,
      this.maxRequests,
      this.windowSize
    );
    
    return {
      allowed: result[0] === 1,
      currentRequests: result[1]
    };
  }
}

// Sliding window middleware
const slidingWindowLimit = (maxRequests, windowMs) => {
  const limiter = new SlidingWindowRateLimit(redisClient, windowMs, maxRequests);
  
  return async (req, res, next) => {
    const key = \`sliding:\${req.ip}\`;
    const result = await limiter.isAllowed(key);
    
    res.setHeader('X-RateLimit-Limit', maxRequests);
    res.setHeader('X-RateLimit-Remaining', maxRequests - result.currentRequests);
    res.setHeader('X-RateLimit-Window', windowMs);
    
    if (!result.allowed) {
      return res.status(429).json({
        error: 'Rate limit exceeded',
        window: windowMs
      });
    }
    
    next();
  };
};

// Apply sliding window to critical endpoints
app.use('/api/critical', slidingWindowLimit(10, 60000));`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Logging & Monitoring</h2>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-indigo-800 mb-3">Security Monitoring Strategy</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">What to Monitor:</h5>
              <ul className="text-indigo-600 space-y-2 text-sm">
                <li>• Authentication attempts (failed/successful)</li>
                <li>• Authorization failures</li>
                <li>• Rate limit violations</li>
                <li>• Suspicious request patterns</li>
                <li>• Error rates and types</li>
                <li>• Performance metrics</li>
                <li>• Security header violations</li>
                <li>• CORS policy violations</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-indigo-700 mb-3">Monitoring Tools:</h5>
              <ul className="text-indigo-600 space-y-2 text-sm">
                <li>• Application logs (Winston, Pino)</li>
                <li>• Metrics collection (Prometheus)</li>
                <li>• APM tools (New Relic, DataDog)</li>
                <li>• SIEM systems (Splunk, ELK)</li>
                <li>• Alerting (PagerDuty, Slack)</li>
                <li>• Uptime monitoring</li>
                <li>• Security scanners</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Comprehensive Logging & Monitoring</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Structured Logging Implementation</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const winston = require('winston');
const crypto = require('crypto');

// Create structured logger
const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      return JSON.stringify({
        timestamp,
        level,
        message,
        service: 'api-server',
        version: process.env.APP_VERSION || '1.0.0',
        environment: process.env.NODE_ENV,
        ...meta
      });
    })
  ),
  defaultMeta: {
    service: 'api-server',
    hostname: require('os').hostname(),
    pid: process.pid
  },
  transports: [
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      maxsize: 5242880, // 5MB
      maxFiles: 5
    }),
    new winston.transports.File({
      filename: 'logs/combined.log',
      maxsize: 5242880,
      maxFiles: 10
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    })
  ]
});

// Security-specific logger
const securityLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({
      filename: 'logs/security.log',
      maxsize: 10485760, // 10MB
      maxFiles: 20
    })
  ]
});

// Request logging middleware
const requestLogger = (req, res, next) => {
  const requestId = crypto.randomUUID();
  req.id = requestId;
  res.setHeader('X-Request-ID', requestId);
  
  const startTime = Date.now();
  
  // Log request
  logger.info('Request started', {
    requestId,
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    userId: req.user?.id
  });
  
  // Override res.json to log response
  const originalJson = res.json;
  res.json = function(body) {
    const duration = Date.now() - startTime;
    
    logger.info('Request completed', {
      requestId,
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      duration,
      responseSize: JSON.stringify(body).length,
      userId: req.user?.id
    });
    
    return originalJson.call(this, body);
  };
  
  next();
};

// Security event logger
const logSecurityEvent = (event) => {
  securityLogger.warn('Security event', {
    type: event.type,
    severity: event.severity || 'medium',
    source: event.source || 'api',
    details: event.details,
    timestamp: new Date().toISOString(),
    requestId: event.requestId,
    userId: event.userId,
    ip: event.ip,
    userAgent: event.userAgent
  });
  
  // Send to security monitoring system
  if (event.severity === 'high') {
    sendSecurityAlert(event);
  }
};

// Authentication logging middleware
const authLogger = (req, res, next) => {
  const originalSend = res.send;
  
  res.send = function(body) {
    if (req.path.includes('/auth/')) {
      const isSuccess = res.statusCode >= 200 && res.statusCode < 300;
      
      logSecurityEvent({
        type: isSuccess ? 'auth_success' : 'auth_failure',
        severity: isSuccess ? 'low' : 'medium',
        details: {
          endpoint: req.path,
          method: req.method,
          statusCode: res.statusCode,
          username: req.body?.email || req.body?.username
        },
        requestId: req.id,
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
    }
    
    return originalSend.call(this, body);
  };
  
  next();
};

// Rate limit violation logger
const rateLimitLogger = (req, res, next) => {
  const originalStatus = res.status;
  
  res.status = function(code) {
    if (code === 429) {
      logSecurityEvent({
        type: 'rate_limit_exceeded',
        severity: 'medium',
        details: {
          endpoint: req.path,
          method: req.method,
          ip: req.ip,
          userAgent: req.get('User-Agent')
        },
        requestId: req.id,
        userId: req.user?.id,
        ip: req.ip,
        userAgent: req.get('User-Agent')
      });
    }
    
    return originalStatus.call(this, code);
  };
  
  next();
};

// Error logging middleware
const errorLogger = (error, req, res, next) => {
  logger.error('Unhandled error', {
    error: error.message,
    stack: error.stack,
    requestId: req.id,
    method: req.method,
    url: req.url,
    userId: req.user?.id,
    ip: req.ip
  });
  
  // Log security-relevant errors
  if (error.name === 'ValidationError' || 
      error.name === 'AuthenticationError' ||
      error.name === 'AuthorizationError') {
    logSecurityEvent({
      type: 'security_error',
      severity: 'high',
      details: {
        errorType: error.name,
        message: error.message,
        endpoint: req.path
      },
      requestId: req.id,
      userId: req.user?.id,
      ip: req.ip,
      userAgent: req.get('User-Agent')
    });
  }
  
  next(error);
};

// Apply logging middleware
app.use(requestLogger);
app.use(authLogger);
app.use(rateLimitLogger);
app.use(errorLogger);`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Metrics & Alerting System</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`const client = require('prom-client');

// Create metrics registry
const register = new client.Registry();

// Default metrics
client.collectDefaultMetrics({ register });

// Custom metrics
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 0.5, 0.7, 1, 3, 5, 7, 10]
});

const httpRequestTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status_code']
});

const authenticationAttempts = new client.Counter({
  name: 'authentication_attempts_total',
  help: 'Total authentication attempts',
  labelNames: ['type', 'status']
});

const rateLimitHits = new client.Counter({
  name: 'rate_limit_hits_total',
  help: 'Total rate limit violations',
  labelNames: ['endpoint', 'type']
});

const securityEvents = new client.Counter({
  name: 'security_events_total',
  help: 'Total security events',
  labelNames: ['type', 'severity']
});

// Register metrics
register.registerMetric(httpRequestDuration);
register.registerMetric(httpRequestTotal);
register.registerMetric(authenticationAttempts);
register.registerMetric(rateLimitHits);
register.registerMetric(securityEvents);

// Metrics middleware
const metricsMiddleware = (req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    const route = req.route?.path || req.path;
    
    httpRequestDuration
      .labels(req.method, route, res.statusCode)
      .observe(duration);
      
    httpRequestTotal
      .labels(req.method, route, res.statusCode)
      .inc();
    
    // Track rate limit hits
    if (res.statusCode === 429) {
      rateLimitHits
        .labels(route, 'exceeded')
        .inc();
    }
  });
  
  next();
};

// Security metrics tracking
const trackSecurityEvent = (type, severity = 'medium') => {
  securityEvents
    .labels(type, severity)
    .inc();
};

const trackAuthAttempt = (type, success) => {
  authenticationAttempts
    .labels(type, success ? 'success' : 'failure')
    .inc();
};

// Metrics endpoint
app.get('/metrics', async (req, res) => {
  // Protect metrics endpoint
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied' });
  }
  
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});

// Health check with detailed status
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION || '1.0.0',
    environment: process.env.NODE_ENV,
    checks: {}
  };
  
  // Database check
  try {
    await mongoose.connection.db.admin().ping();
    health.checks.database = { status: 'healthy' };
  } catch (error) {
    health.checks.database = { status: 'unhealthy', error: error.message };
    health.status = 'unhealthy';
  }
  
  // Redis check
  try {
    await redisClient.ping();
    health.checks.redis = { status: 'healthy' };
  } catch (error) {
    health.checks.redis = { status: 'unhealthy', error: error.message };
    health.status = 'unhealthy';
  }
  
  // Memory check
  const memUsage = process.memoryUsage();
  health.checks.memory = {
    status: memUsage.heapUsed < 500 * 1024 * 1024 ? 'healthy' : 'warning',
    heapUsed: memUsage.heapUsed,
    heapTotal: memUsage.heapTotal
  };
  
  res.status(health.status === 'healthy' ? 200 : 503).json(health);
});

// Alerting system
const sendAlert = async (alert) => {
  const alertData = {
    title: alert.title,
    message: alert.message,
    severity: alert.severity,
    timestamp: new Date().toISOString(),
    service: 'api-server',
    environment: process.env.NODE_ENV,
    metadata: alert.metadata || {}
  };
  
  // Send to multiple channels
  await Promise.allSettled([
    sendSlackAlert(alertData),
    sendEmailAlert(alertData),
    sendPagerDutyAlert(alertData)
  ]);
};

// Security alert sender
const sendSecurityAlert = async (event) => {
  if (event.severity === 'high') {
    await sendAlert({
      title: 'Security Event Detected',
      message: \`High severity security event: \${event.type}\`,
      severity: 'critical',
      metadata: event
    });
  }
};

// Monitor key metrics
setInterval(async () => {
  const metrics = await register.getMetricsAsJSON();
  
  // Check error rate
  const errorRate = calculateErrorRate(metrics);
  if (errorRate > 0.05) { // 5% error rate
    await sendAlert({
      title: 'High Error Rate Detected',
      message: \`Error rate is \${(errorRate * 100).toFixed(2)}%\`,
      severity: 'warning',
      metadata: { errorRate }
    });
  }
  
  // Check response time
  const avgResponseTime = calculateAvgResponseTime(metrics);
  if (avgResponseTime > 2000) { // 2 seconds
    await sendAlert({
      title: 'High Response Time',
      message: \`Average response time is \${avgResponseTime}ms\`,
      severity: 'warning',
      metadata: { avgResponseTime }
    });
  }
}, 60000); // Check every minute

// Apply metrics middleware
app.use(metricsMiddleware);

// Export tracking functions
module.exports = {
  logger,
  securityLogger,
  logSecurityEvent,
  trackSecurityEvent,
  trackAuthAttempt,
  sendAlert
};`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-2">🛡️ Infrastructure Security Checklist</h3>
        <p className="text-purple-700 mb-3">
          Implement these server and infrastructure security measures to protect against attacks and ensure reliable operations.
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <strong className="text-purple-700">API Security:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• HTTPS enforcement</li>
              <li>• Input validation</li>
              <li>• Authentication required</li>
              <li>• Error handling</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">CORS Policy:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Whitelist origins</li>
              <li>• No wildcards with credentials</li>
              <li>• Method restrictions</li>
              <li>• Header validation</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Rate Limiting:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Multi-layer protection</li>
              <li>• User-based limits</li>
              <li>• Endpoint-specific rules</li>
              <li>• Distributed enforcement</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Monitoring:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Structured logging</li>
              <li>• Security events</li>
              <li>• Performance metrics</li>
              <li>• Automated alerts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}