export default function BackendPerformanceContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">7.3 Backend Performance</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Backend Optimization Strategies</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Implement load balancing and horizontal scaling techniques</li>
          <li>• Master rate limiting and API protection strategies</li>
          <li>• Optimize database queries and implement efficient indexing</li>
          <li>• Build scalable backend architectures for high performance</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Load Balancing</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Load Balancer Implementation</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Node.js Load Balancer with Express
const express = require('express');
const httpProxy = require('http-proxy-middleware');
const cluster = require('cluster');
const os = require('os');

class LoadBalancer {
  constructor(servers) {
    this.servers = servers;
    this.currentIndex = 0;
    this.healthyServers = new Set(servers);
    this.app = express();
    
    this.setupHealthChecks();
    this.setupProxy();
  }

  // Round Robin Algorithm
  getNextServer() {
    const availableServers = Array.from(this.healthyServers);
    
    if (availableServers.length === 0) {
      throw new Error('No healthy servers available');
    }
    
    const server = availableServers[this.currentIndex % availableServers.length];
    this.currentIndex++;
    
    return server;
  }

  // Weighted Round Robin
  getWeightedServer() {
    const weights = {
      'http://localhost:3001': 3,
      'http://localhost:3002': 2,
      'http://localhost:3003': 1
    };
    
    const weightedServers = [];
    this.healthyServers.forEach(server => {
      const weight = weights[server] || 1;
      for (let i = 0; i < weight; i++) {
        weightedServers.push(server);
      }
    });
    
    return weightedServers[this.currentIndex % weightedServers.length];
  }

  // Least Connections Algorithm
  async getLeastConnectionsServer() {
    const connectionCounts = await this.getConnectionCounts();
    
    let minConnections = Infinity;
    let selectedServer = null;
    
    this.healthyServers.forEach(server => {
      const connections = connectionCounts[server] || 0;
      if (connections < minConnections) {
        minConnections = connections;
        selectedServer = server;
      }
    });
    
    return selectedServer;
  }

  // Health Check Implementation
  setupHealthChecks() {
    setInterval(async () => {
      for (const server of this.servers) {
        try {
          const response = await fetch(\`\${server}/health\`, {
            method: 'GET',
            timeout: 5000
          });
          
          if (response.ok) {
            this.healthyServers.add(server);
          } else {
            this.healthyServers.delete(server);
          }
        } catch (error) {
          console.log(\`Server \${server} is down:, error.message\`);
          this.healthyServers.delete(server);
        }
      }
    }, 30000); // Check every 30 seconds
  }

  // Proxy Setup with Sticky Sessions
  setupProxy() {
    const sessionMap = new Map();
    
    this.app.use('/', (req, res, next) => {
      let targetServer;
      
      // Session affinity (sticky sessions)
      const sessionId = req.headers['x-session-id'];
      if (sessionId && sessionMap.has(sessionId)) {
        targetServer = sessionMap.get(sessionId);
        
        // Verify server is still healthy
        if (!this.healthyServers.has(targetServer)) {
          targetServer = this.getNextServer();
          sessionMap.set(sessionId, targetServer);
        }
      } else {
        targetServer = this.getNextServer();
        if (sessionId) {
          sessionMap.set(sessionId, targetServer);
        }
      }
      
      // Create proxy middleware
      const proxy = httpProxy({
        target: targetServer,
        changeOrigin: true,
        onError: (err, req, res) => {
          console.error(\`Proxy error for \${targetServer}:\`, err.message);
          
          // Remove unhealthy server and try another
          this.healthyServers.delete(targetServer);
          
          if (this.healthyServers.size > 0) {
            const fallbackServer = this.getNextServer();
            const fallbackProxy = httpProxy({
              target: fallbackServer,
              changeOrigin: true
            });
            
            fallbackProxy(req, res, next);
          } else {
            res.status(503).json({ error: 'All servers are down' });
          }
        },
        onProxyReq: (proxyReq, req, res) => {
          // Add load balancer headers
          proxyReq.setHeader('X-Forwarded-By', 'LoadBalancer');
          proxyReq.setHeader('X-Server-Instance', targetServer);
        }
      });
      
      proxy(req, res, next);
    });
  }

  // Circuit Breaker Pattern
  setupCircuitBreaker() {
    const circuitBreakers = new Map();
    
    this.servers.forEach(server => {
      circuitBreakers.set(server, {
        failureCount: 0,
        lastFailureTime: null,
        state: 'CLOSED', // CLOSED, OPEN, HALF_OPEN
        threshold: 5,
        timeout: 60000 // 1 minute
      });
    });
    
    return {
      canRequest: (server) => {
        const breaker = circuitBreakers.get(server);
        
        if (breaker.state === 'CLOSED') {
          return true;
        }
        
        if (breaker.state === 'OPEN') {
          if (Date.now() - breaker.lastFailureTime > breaker.timeout) {
            breaker.state = 'HALF_OPEN';
            return true;
          }
          return false;
        }
        
        return true; // HALF_OPEN
      },
      
      onSuccess: (server) => {
        const breaker = circuitBreakers.get(server);
        breaker.failureCount = 0;
        breaker.state = 'CLOSED';
      },
      
      onFailure: (server) => {
        const breaker = circuitBreakers.get(server);
        breaker.failureCount++;
        breaker.lastFailureTime = Date.now();
        
        if (breaker.failureCount >= breaker.threshold) {
          breaker.state = 'OPEN';
        }
      }
    };
  }

  start(port = 3000) {
    this.app.listen(port, () => {
      console.log(\`Load balancer running on port \${port}\`);
      console.log(\`Balancing between: \${this.servers.join(', ')}\`);
    });
  }
}

// Usage
const servers = [
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003'
];

const loadBalancer = new LoadBalancer(servers);
loadBalancer.start(3000);

// Clustering for CPU-intensive tasks
if (cluster.isMaster) {
  const numCPUs = os.cpus().length;
  
  console.log(\`Master \${process.pid} is running\`);
  console.log(\`Forking \${numCPUs} workers\`);
  
  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`);
    console.log('Starting a new worker');
    cluster.fork();
  });
} else {
  // Worker process
  const app = express();
  
  app.get('/health', (req, res) => {
    res.json({ status: 'healthy', pid: process.pid });
  });
  
  app.get('*', (req, res) => {
    res.json({ 
      message: 'Hello from worker', 
      pid: process.pid,
      timestamp: new Date().toISOString()
    });
  });
  
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(\`Worker \${process.pid} listening on port \${port}\`);
  });
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">NGINX Load Balancing</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-sm overflow-x-auto">
                <code>{`# nginx.conf - Advanced load balancing
upstream backend_servers {
    # Load balancing methods
    least_conn;  # or ip_hash, hash, random
    
    # Server definitions with weights
    server 127.0.0.1:3001 weight=3 max_fails=2 fail_timeout=30s;
    server 127.0.0.1:3002 weight=2 max_fails=2 fail_timeout=30s;
    server 127.0.0.1:3003 weight=1 max_fails=2 fail_timeout=30s backup;
    
    # Health checks (NGINX Plus)
    # health_check interval=5s fails=3 passes=2;
    
    # Keep alive connections
    keepalive 32;
}

# Rate limiting
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_conn_zone $binary_remote_addr zone=conn_limit_per_ip:10m;

server {
    listen 80;
    server_name myapp.com;

    # Rate limiting
    limit_req zone=api burst=20 nodelay;
    limit_conn conn_limit_per_ip 10;

    # Connection timeout settings
    proxy_connect_timeout 5s;
    proxy_send_timeout 10s;
    proxy_read_timeout 10s;
    
    # Buffer settings
    proxy_buffering on;
    proxy_buffer_size 4k;
    proxy_buffers 8 4k;
    
    location / {
        proxy_pass http://backend_servers;
        
        # Headers for backend
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        
        # Session persistence (sticky sessions)
        # proxy_cookie_path / "/; HTTPOnly; Secure";
        
        # Retry logic
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503;
        proxy_next_upstream_tries 2;
        proxy_next_upstream_timeout 5s;
    }
    
    # Health check endpoint
    location /nginx-health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
    
    # API endpoints with different rate limits
    location /api/ {
        limit_req zone=api burst=50 nodelay;
        proxy_pass http://backend_servers;
    }
    
    # Static files (bypass load balancer)
    location /static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri $uri/ =404;
    }
}

# SSL termination and HTTP/2
server {
    listen 443 ssl http2;
    server_name myapp.com;
    
    ssl_certificate /path/to/certificate.pem;
    ssl_certificate_key /path/to/private_key.pem;
    
    # SSL optimization
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE+AESGCM:ECDHE+AES256:ECDHE+AES128:!aNULL:!MD5:!DSS;
    ssl_prefer_server_ciphers on;
    
    # HSTS
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    
    location / {
        proxy_pass http://backend_servers;
        
        # HTTP/2 push (if supported)
        http2_push /css/main.css;
        http2_push /js/main.js;
    }
}

# Monitoring and logging
log_format detailed '$remote_addr - $remote_user [$time_local] "$request" '
                   '$status $body_bytes_sent "$http_referer" '
                   '"$http_user_agent" "$http_x_forwarded_for" '
                   'upstream_addr=$upstream_addr '
                   'upstream_status=$upstream_status '
                   'upstream_response_time=$upstream_response_time '
                   'request_time=$request_time';

access_log /var/log/nginx/detailed.log detailed;

# Gzip compression
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript 
           application/javascript application/xml+rss 
           application/json application/xml;`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Rate Limiting</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">Advanced Rate Limiting Strategies</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Express Rate Limiting Middleware
const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const Redis = require('redis');
const { RateLimiterRedis, RateLimiterMemory } = require('rate-limiter-flexible');

class AdvancedRateLimiter {
  constructor() {
    this.redis = Redis.createClient();
    this.setupLimiters();
  }

  setupLimiters() {
    // Basic rate limiter
    this.basicLimiter = new RateLimiterRedis({
      storeClient: this.redis,
      keyPrefix: 'basic_rl',
      points: 100, // Number of requests
      duration: 900, // Per 15 minutes
      blockDuration: 900 // Block for 15 minutes if exceeded
    });

    // API rate limiter with different tiers
    this.apiLimiters = {
      free: new RateLimiterRedis({
        storeClient: this.redis,
        keyPrefix: 'api_free',
        points: 1000,
        duration: 3600, // per hour
        blockDuration: 3600
      }),
      
      premium: new RateLimiterRedis({
        storeClient: this.redis,
        keyPrefix: 'api_premium',
        points: 10000,
        duration: 3600,
        blockDuration: 1800 // Shorter block time
      }),
      
      enterprise: new RateLimiterRedis({
        storeClient: this.redis,
        keyPrefix: 'api_enterprise',
        points: 100000,
        duration: 3600,
        blockDuration: 300
      })
    };

    // Progressive delay limiter
    this.progressiveLimiter = new RateLimiterRedis({
      storeClient: this.redis,
      keyPrefix: 'progressive_rl',
      points: 50,
      duration: 300, // 5 minutes
      execEvenly: true, // Spread requests evenly
    });

    // Burst protection
    this.burstLimiter = new RateLimiterRedis({
      storeClient: this.redis,
      keyPrefix: 'burst_rl',
      points: 10,
      duration: 1, // per second
      blockDuration: 10
    });
  }

  // Middleware factory
  createMiddleware(limiterType = 'basic', options = {}) {
    return async (req, res, next) => {
      const key = this.getKey(req, options);
      const limiter = this.getLimiter(limiterType, req);
      
      try {
        const result = await limiter.consume(key, options.points || 1);
        
        // Add rate limit headers
        res.set({
          'X-RateLimit-Limit': limiter.points,
          'X-RateLimit-Remaining': result.remainingPoints,
          'X-RateLimit-Reset': new Date(Date.now() + result.msBeforeNext).toISOString(),
          'Retry-After': Math.round(result.msBeforeNext / 1000) || 1,
        });
        
        next();
      } catch (rejRes) {
        // Rate limit exceeded
        res.status(429).json({
          error: 'Too Many Requests',
          message: 'Rate limit exceeded',
          retryAfter: Math.round(rejRes.msBeforeNext / 1000) || 1,
          limit: limiter.points,
          windowMs: limiter.duration * 1000
        });
      }
    };
  }

  // Dynamic key generation
  getKey(req, options) {
    const parts = [];
    
    // IP-based limiting
    if (options.useIP !== false) {
      parts.push(req.ip || req.connection.remoteAddress);
    }
    
    // User-based limiting
    if (req.user && req.user.id) {
      parts.push(\`user:\${req.user.id}\`);
    }
    
    // API key-based limiting
    if (req.headers['x-api-key']) {
      parts.push(\`api:\${req.headers['x-api-key']}\`);
    }
    
    // Endpoint-specific limiting
    if (options.perEndpoint) {
      parts.push(\`endpoint:\${req.route?.path || req.path}\`);
    }
    
    // Method-specific limiting
    if (options.perMethod) {
      parts.push(\`method:\${req.method}\`);
    }
    
    return parts.join(':') || req.ip;
  }

  // Get appropriate limiter based on user tier
  getLimiter(type, req) {
    if (type === 'api') {
      const userTier = req.user?.tier || 'free';
      return this.apiLimiters[userTier] || this.apiLimiters.free;
    }
    
    return this[type + 'Limiter'] || this.basicLimiter;
  }

  // Sliding window rate limiter
  async slidingWindowLimiter(key, limit, windowMs) {
    const now = Date.now();
    const pipeline = this.redis.pipeline();
    
    // Remove old entries
    pipeline.zremrangebyscore(key, 0, now - windowMs);
    
    // Count current requests
    pipeline.zcard(key);
    
    // Add current request
    pipeline.zadd(key, now, \`\${now}-\${Math.random()}\`);
    
    // Set expiry
    pipeline.expire(key, Math.ceil(windowMs / 1000));
    
    const results = await pipeline.exec();
    const currentCount = results[1][1];
    
    if (currentCount >= limit) {
      throw new Error('Rate limit exceeded');
    }
    
    return {
      remaining: limit - currentCount - 1,
      reset: now + windowMs
    };
  }

  // Adaptive rate limiting based on system load
  async adaptiveRateLimit(req, res, next) {
    const systemLoad = await this.getSystemLoad();
    let multiplier = 1;
    
    if (systemLoad > 0.8) {
      multiplier = 0.5; // Reduce rate limit by 50%
    } else if (systemLoad > 0.6) {
      multiplier = 0.7; // Reduce rate limit by 30%
    }
    
    const adjustedPoints = Math.floor(this.basicLimiter.points * multiplier);
    
    try {
      await this.basicLimiter.consume(req.ip, 1);
      next();
    } catch (rejRes) {
      res.status(429).json({
        error: 'System overloaded',
        message: 'Server is experiencing high load. Please try again later.',
        retryAfter: Math.round(rejRes.msBeforeNext / 1000)
      });
    }
  }

  async getSystemLoad() {
    // Implement system load detection
    // This could check CPU usage, memory, active connections, etc.
    const os = require('os');
    const loadAvg = os.loadavg()[0]; // 1-minute load average
    const cpuCount = os.cpus().length;
    
    return loadAvg / cpuCount;
  }

  // Distributed rate limiting across multiple servers
  async distributedRateLimit(key, limit, windowMs) {
    const lockKey = \`lock:\${key}\`;
    const countKey = \`count:\${key}\`;
    
    // Acquire distributed lock
    const lockAcquired = await this.redis.set(lockKey, '1', 'PX', 1000, 'NX');
    
    if (!lockAcquired) {
      // If we can't acquire lock, check current count
      const count = await this.redis.get(countKey) || 0;
      if (parseInt(count) >= limit) {
        throw new Error('Rate limit exceeded');
      }
      return { remaining: limit - count };
    }
    
    try {
      const current = await this.redis.incr(countKey);
      
      if (current === 1) {
        await this.redis.pexpire(countKey, windowMs);
      }
      
      if (current > limit) {
        throw new Error('Rate limit exceeded');
      }
      
      return { remaining: limit - current };
    } finally {
      await this.redis.del(lockKey);
    }
  }
}

// Usage examples
const rateLimiter = new AdvancedRateLimiter();

// Basic usage
app.use('/api/', rateLimiter.createMiddleware('basic'));

// API tier-based limiting
app.use('/api/premium', rateLimiter.createMiddleware('api'));

// Endpoint-specific limiting
app.use('/api/upload', rateLimiter.createMiddleware('basic', {
  perEndpoint: true,
  points: 5 // Only 5 uploads per window
}));

// Custom sliding window implementation
app.use('/api/search', async (req, res, next) => {
  try {
    await rateLimiter.slidingWindowLimiter(
      \`search:\${req.ip}\`,
      10, // 10 requests
      60000 // per minute
    );
    next();
  } catch (error) {
    res.status(429).json({ error: error.message });
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Scaling Basics</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Horizontal vs Vertical Scaling</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Auto-scaling implementation with PM2
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'api-server',
    script: './app.js',
    instances: 'max', // Use all CPU cores
    exec_mode: 'cluster',
    
    // Auto-scaling configuration
    min_uptime: '10s',
    max_restarts: 10,
    
    // Memory-based scaling
    max_memory_restart: '500M',
    
    // Environment variables
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    
    // Monitoring
    monitoring: true,
    
    // Load balancing
    instance_var: 'INSTANCE_ID'
  }]
};

// Docker-based horizontal scaling
// docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3001-3010:3000"
    deploy:
      replicas: 5
      update_config:
        parallelism: 1
        delay: 10s
      restart_policy:
        condition: on-failure
        delay: 5s
        max_attempts: 3
    environment:
      - NODE_ENV=production
    depends_on:
      - redis
      - postgres
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - app

// Kubernetes auto-scaling
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api-server
  template:
    metadata:
      labels:
        app: api-server
    spec:
      containers:
      - name: api
        image: myapp:latest
        ports:
        - containerPort: 3000
        resources:
          requests:
            memory: "128Mi"
            cpu: "100m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        
        # Health checks
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# Horizontal Pod Autoscaler
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: api-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: api-deployment
  minReplicas: 3
  maxReplicas: 10
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 70
  - type: Resource
    resource:
      name: memory
      target:
        type: Utilization
        averageUtilization: 80`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">Microservices Architecture</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Service discovery and communication
const express = require('express');
const consul = require('consul')();
const axios = require('axios');

class ServiceRegistry {
  constructor(serviceName, port, host = 'localhost') {
    this.serviceName = serviceName;
    this.serviceId = \`\${serviceName}-\${port}\`;
    this.port = port;
    this.host = host;
    this.consul = consul;
  }

  async register() {
    const service = {
      id: this.serviceId,
      name: this.serviceName,
      address: this.host,
      port: this.port,
      tags: ['api', 'microservice'],
      check: {
        http: \`http://\${this.host}:\${this.port}/health\`,
        interval: '10s'
      }
    };

    await this.consul.agent.service.register(service);
    console.log(\`Service \${this.serviceName} registered\`);
  }

  async deregister() {
    await this.consul.agent.service.deregister(this.serviceId);
    console.log(\`Service \${this.serviceName} deregistered\`);
  }

  async discoverService(serviceName) {
    const services = await this.consul.health.service(serviceName);
    const healthyServices = services.filter(s => 
      s.Checks.every(check => check.Status === 'passing')
    );
    
    if (healthyServices.length === 0) {
      throw new Error(\`No healthy instances of \${serviceName} found\`);
    }
    
    // Return random healthy service
    const randomIndex = Math.floor(Math.random() * healthyServices.length);
    const service = healthyServices[randomIndex].Service;
    
    return \`http://\${service.Address}:\${service.Port}\`;
  }
}

// API Gateway pattern
class APIGateway {
  constructor() {
    this.app = express();
    this.registry = new ServiceRegistry('api-gateway', 3000);
    this.routes = new Map();
    
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    // CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      
      if (req.method === 'OPTIONS') {
        res.sendStatus(200);
      } else {
        next();
      }
    });

    // Request logging
    this.app.use((req, res, next) => {
      console.log(\`\${new Date().toISOString()} \${req.method} \${req.path}\`);
      next();
    });

    // Authentication middleware
    this.app.use('/api', async (req, res, next) => {
      const token = req.headers.authorization;
      
      if (!token) {
        return res.status(401).json({ error: 'No token provided' });
      }
      
      try {
        // Verify token with auth service
        const authServiceUrl = await this.registry.discoverService('auth-service');
        const response = await axios.post(\`\${authServiceUrl}/verify\`, { token });
        
        req.user = response.data.user;
        next();
      } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
      }
    });
  }

  setupRoutes() {
    // Route registration
    this.registerRoute('/api/users', 'user-service');
    this.registerRoute('/api/orders', 'order-service');
    this.registerRoute('/api/products', 'product-service');
    this.registerRoute('/api/payments', 'payment-service');
  }

  registerRoute(path, serviceName) {
    this.app.use(path, async (req, res) => {
      try {
        const serviceUrl = await this.registry.discoverService(serviceName);
        
        // Forward request
        const response = await axios({
          method: req.method,
          url: \`\${serviceUrl}\${req.originalUrl}\`,
          data: req.body,
          headers: {
            ...req.headers,
            host: undefined // Remove original host header
          },
          timeout: 30000
        });
        
        res.status(response.status).json(response.data);
      } catch (error) {
        console.error(\`Error forwarding request to \${serviceName}:\`, error.message);
        
        if (error.response) {
          res.status(error.response.status).json(error.response.data);
        } else {
          res.status(503).json({ 
            error: 'Service Unavailable',
            message: \`\${serviceName} is not responding\`
          });
        }
      }
    });
  }

  async start() {
    await this.registry.register();
    
    this.app.listen(3000, () => {
      console.log('API Gateway running on port 3000');
    });

    // Graceful shutdown
    process.on('SIGTERM', async () => {
      await this.registry.deregister();
      process.exit(0);
    });
  }
}

// Circuit breaker for service calls
class CircuitBreaker {
  constructor(options = {}) {
    this.failureThreshold = options.failureThreshold || 5;
    this.resetTimeout = options.resetTimeout || 60000;
    this.monitoringPeriod = options.monitoringPeriod || 10000;
    
    this.state = 'CLOSED';
    this.failureCount = 0;
    this.lastFailureTime = null;
    this.successCount = 0;
  }

  async call(fn) {
    if (this.state === 'OPEN') {
      if (Date.now() - this.lastFailureTime < this.resetTimeout) {
        throw new Error('Circuit breaker is OPEN');
      } else {
        this.state = 'HALF_OPEN';
      }
    }

    try {
      const result = await fn();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  onSuccess() {
    this.failureCount = 0;
    this.successCount++;
    
    if (this.state === 'HALF_OPEN') {
      this.state = 'CLOSED';
    }
  }

  onFailure() {
    this.failureCount++;
    this.lastFailureTime = Date.now();
    
    if (this.failureCount >= this.failureThreshold) {
      this.state = 'OPEN';
    }
  }

  getState() {
    return {
      state: this.state,
      failureCount: this.failureCount,
      successCount: this.successCount
    };
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Efficient Queries & Database Indexing</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Query Optimization Strategies</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Advanced query optimization with Sequelize/TypeORM
const { Op, Sequelize } = require('sequelize');

class QueryOptimizer {
  constructor(db) {
    this.db = db;
    this.queryCache = new Map();
    this.setupQueryLogging();
  }

  setupQueryLogging() {
    // Log slow queries
    this.db.addHook('beforeQuery', (options) => {
      options.startTime = Date.now();
    });

    this.db.addHook('afterQuery', (options, query) => {
      const duration = Date.now() - options.startTime;
      
      if (duration > 1000) { // Log queries > 1 second
        console.warn('Slow query detected:', {
          sql: query.sql,
          duration: \`\${duration}ms\`,
          bindings: query.bind
        });
      }
    });
  }

  // Efficient pagination with cursor-based approach
  async paginateWithCursor(model, options = {}) {
    const {
      cursor,
      limit = 20,
      order = [['id', 'DESC']],
      where = {},
      include = []
    } = options;

    const queryOptions = {
      limit: limit + 1, // Fetch one extra to check if there are more
      order,
      include,
      where: cursor ? {
        ...where,
        [order[0][0]]: {
          [order[0][1] === 'DESC' ? Op.lt : Op.gt]: cursor
        }
      } : where
    };

    const results = await model.findAll(queryOptions);
    const hasMore = results.length > limit;
    
    if (hasMore) {
      results.pop(); // Remove the extra record
    }

    return {
      data: results,
      hasMore,
      nextCursor: hasMore ? results[results.length - 1][order[0][0]] : null
    };
  }

  // Batch loading to prevent N+1 queries
  async batchLoadUsers(userIds) {
    const cacheKey = \`users:\${userIds.sort().join(',')}\`;
    
    if (this.queryCache.has(cacheKey)) {
      return this.queryCache.get(cacheKey);
    }

    const users = await this.db.models.User.findAll({
      where: {
        id: {
          [Op.in]: userIds
        }
      }
    });

    // Create a map for O(1) lookup
    const userMap = new Map();
    users.forEach(user => userMap.set(user.id, user));

    // Return users in the same order as requested IDs
    const orderedUsers = userIds.map(id => userMap.get(id));

    // Cache for 5 minutes
    this.queryCache.set(cacheKey, orderedUsers);
    setTimeout(() => this.queryCache.delete(cacheKey), 5 * 60 * 1000);

    return orderedUsers;
  }

  // Aggregate queries with proper indexing
  async getAnalytics(filters = {}) {
    const { startDate, endDate, userId, category } = filters;
    
    const whereClause = {};
    
    if (startDate && endDate) {
      whereClause.createdAt = {
        [Op.between]: [startDate, endDate]
      };
    }
    
    if (userId) {
      whereClause.userId = userId;
    }
    
    if (category) {
      whereClause.category = category;
    }

    // Use raw query for complex aggregations
    const result = await this.db.query(\`
      SELECT 
        DATE_TRUNC('day', created_at) as date,
        category,
        COUNT(*) as count,
        SUM(amount) as total_amount,
        AVG(amount) as avg_amount,
        COUNT(DISTINCT user_id) as unique_users
      FROM orders 
      WHERE 
        (:startDate IS NULL OR created_at >= :startDate)
        AND (:endDate IS NULL OR created_at <= :endDate)
        AND (:userId IS NULL OR user_id = :userId)
        AND (:category IS NULL OR category = :category)
      GROUP BY DATE_TRUNC('day', created_at), category
      ORDER BY date DESC, category
    \`, {
      replacements: { startDate, endDate, userId, category },
      type: Sequelize.QueryTypes.SELECT
    });

    return result;
  }

  // Connection pooling optimization
  optimizeConnectionPool() {
    return new Sequelize(process.env.DATABASE_URL, {
      pool: {
        max: 20,        // Maximum connections
        min: 5,         // Minimum connections
        acquire: 30000, // Maximum time to get connection
        idle: 10000,    // Maximum idle time
        evict: 1000     // Check interval for idle connections
      },
      
      // Query optimization
      logging: process.env.NODE_ENV === 'development',
      benchmark: true,
      
      // Connection options
      dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? {
          require: true,
          rejectUnauthorized: false
        } : false,
        
        // Connection timeout
        connectTimeout: 60000,
        acquireTimeout: 60000,
        timeout: 60000
      }
    });
  }

  // Query result caching
  async cachedQuery(key, queryFn, ttl = 300000) { // 5 minutes default
    if (this.queryCache.has(key)) {
      return this.queryCache.get(key);
    }

    const result = await queryFn();
    
    this.queryCache.set(key, result);
    setTimeout(() => this.queryCache.delete(key), ttl);

    return result;
  }
}

// Database indexing examples (PostgreSQL)
const createIndexes = \`
-- B-tree indexes for exact matches and range queries
CREATE INDEX CONCURRENTLY idx_users_email ON users(email);
CREATE INDEX CONCURRENTLY idx_users_created_at ON users(created_at);
CREATE INDEX CONCURRENTLY idx_orders_user_id ON orders(user_id);

-- Composite indexes for multi-column queries
CREATE INDEX CONCURRENTLY idx_orders_user_status ON orders(user_id, status);
CREATE INDEX CONCURRENTLY idx_orders_date_status ON orders(created_at, status) WHERE status != 'cancelled';

-- Partial indexes for filtered queries
CREATE INDEX CONCURRENTLY idx_users_active ON users(id) WHERE active = true;
CREATE INDEX CONCURRENTLY idx_orders_pending ON orders(created_at) WHERE status = 'pending';

-- GIN indexes for full-text search
CREATE INDEX CONCURRENTLY idx_products_search ON products USING GIN(to_tsvector('english', name || ' ' || description));

-- Hash indexes for equality comparisons
CREATE INDEX CONCURRENTLY idx_sessions_token ON sessions USING HASH(token);

-- Expression indexes
CREATE INDEX CONCURRENTLY idx_users_lower_email ON users(LOWER(email));

-- Covering indexes (include additional columns)
CREATE INDEX CONCURRENTLY idx_orders_user_include ON orders(user_id) INCLUDE (total_amount, created_at);
\`;

// MongoDB indexing and optimization
const mongoOptimization = {
  // Compound indexes
  createCompoundIndex: \`
    db.orders.createIndex({ 
      "userId": 1, 
      "status": 1, 
      "createdAt": -1 
    });
  \`,
  
  // Text search indexes
  createTextIndex: \`
    db.products.createIndex({
      "name": "text",
      "description": "text",
      "tags": "text"
    });
  \`,
  
  // Geospatial indexes
  createGeoIndex: \`
    db.stores.createIndex({ "location": "2dsphere" });
  \`,
  
  // Sparse indexes for optional fields
  createSparseIndex: \`
    db.users.createIndex(
      { "phoneNumber": 1 }, 
      { sparse: true }
    );
  \`,
  
  // TTL indexes for automatic document expiration
  createTTLIndex: \`
    db.sessions.createIndex(
      { "expiresAt": 1 }, 
      { expireAfterSeconds: 0 }
    );
  \`
};

module.exports = { QueryOptimizer, createIndexes, mongoOptimization };`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-4">🚀 Backend Performance Checklist</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <strong className="text-emerald-700">Scaling & Load Balancing:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Implement load balancing</li>
              <li>□ Configure horizontal scaling</li>
              <li>□ Set up health checks</li>
              <li>□ Use clustering/PM2</li>
              <li>□ Implement circuit breakers</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Rate Limiting & Security:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Configure rate limiting</li>
              <li>□ Implement progressive delays</li>
              <li>□ Set up adaptive limiting</li>
              <li>□ Use distributed rate limiting</li>
              <li>□ Monitor API usage</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Database Performance:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Create proper indexes</li>
              <li>□ Optimize query patterns</li>
              <li>□ Implement query caching</li>
              <li>□ Use connection pooling</li>
              <li>□ Monitor slow queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}