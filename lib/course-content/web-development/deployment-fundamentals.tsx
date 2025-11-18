export default function DeploymentFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">9.1 Deployment Fundamentals</h1>
      
      <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
        <h3 className="text-green-800 font-semibold mb-3">Modern Deployment Strategies</h3>
        <ul className="text-green-700 space-y-2">
          <li>• Deploy frontend applications with Netlify and Vercel</li>
          <li>• Backend deployment on Render, Railway, and AWS</li>
          <li>• Containerization with Docker fundamentals</li>
          <li>• Environment management and configuration</li>
          <li>• Production deployment best practices</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Frontend Deployment</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">🚀 Netlify Deployment</h3>
            <ul className="text-blue-700 space-y-2 text-sm mb-4">
              <li>• Git-based continuous deployment</li>
              <li>• Automatic HTTPS and CDN</li>
              <li>• Form handling and serverless functions</li>
              <li>• Branch previews and rollbacks</li>
              <li>• Built-in performance optimization</li>
            </ul>
            
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-blue-700 text-sm mb-2">Perfect for:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• Static sites (React, Vue, Angular)</li>
                <li>• JAMstack applications</li>
                <li>• Portfolio websites</li>
                <li>• Documentation sites</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">⚡ Vercel Deployment</h3>
            <ul className="text-purple-700 space-y-2 text-sm mb-4">
              <li>• Optimized for Next.js and React</li>
              <li>• Edge functions and API routes</li>
              <li>• Automatic performance monitoring</li>
              <li>• Preview deployments for PRs</li>
              <li>• Global edge network</li>
            </ul>
            
            <div className="bg-white p-3 rounded">
              <h5 className="font-semibold text-purple-700 text-sm mb-2">Best for:</h5>
              <ul className="text-purple-600 text-xs space-y-1">
                <li>• Next.js applications</li>
                <li>• React applications</li>
                <li>• Full-stack serverless apps</li>
                <li>• E-commerce sites</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Frontend Deployment Setup</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Netlify Deployment Configuration</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# netlify.toml - Configuration file
[build]
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--production=false"

# Redirect rules for SPA
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Headers for security
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'"

# Functions configuration
[functions]
  directory = "netlify/functions"

# Forms configuration
[forms]
  external_url = "https://example.com/form-handler"

# Build plugins
[[plugins]]
  package = "@netlify/plugin-lighthouse"

  [plugins.inputs.thresholds]
    performance = 0.9
    accessibility = 0.9
    best-practices = 0.9
    seo = 0.9

# Environment-specific builds
[context.production]
  command = "npm run build:prod"

[context.deploy-preview]
  command = "npm run build:preview"

[context.branch-deploy]
  command = "npm run build:dev"`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Vercel Deployment Configuration</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// vercel.json - Configuration file
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/next"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/$1"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ],
  "env": {
    "DATABASE_URL": "@database-url",
    "API_SECRET": "@api-secret"
  },
  "build": {
    "env": {
      "NODE_ENV": "production"
    }
  },
  "functions": {
    "app/api/**.js": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "https://api.example.com/:path*"
    }
  ]
}

// next.config.js - Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Environment variables
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  
  // Public runtime config
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  
  // Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Redirects
  async redirects() {
    return [
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ];
  },
  
  // Image optimization
  images: {
    domains: ['images.example.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Bundle analyzer
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (process.env.ANALYZE) {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          openAnalyzer: true,
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6">
          <h4 className="font-semibold text-cyan-800 mb-3">Deployment Commands & Scripts</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-cyan-700 mb-3">Package.json Scripts:</h5>
              <pre className="text-sm bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>{`{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:analyze": "ANALYZE=true npm run build",
    "start": "next start",
    "export": "next export",
    "deploy:netlify": "npm run build && netlify deploy --prod",
    "deploy:vercel": "vercel --prod",
    "test:e2e": "playwright test",
    "lighthouse": "lhci autorun"
  }
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-cyan-700 mb-3">CLI Deployment:</h5>
              <pre className="text-sm bg-gray-800 text-white p-3 rounded overflow-x-auto">
                <code>{`# Netlify CLI
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod

# Vercel CLI
npm install -g vercel
vercel login
vercel
vercel --prod

# Manual deployment
npm run build
netlify deploy --dir=dist --prod
vercel --prod`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Backend Deployment</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">🎯 Render</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Git-based deployments</li>
              <li>• Automatic SSL certificates</li>
              <li>• Built-in PostgreSQL</li>
              <li>• Health checks and monitoring</li>
              <li>• Environment variables</li>
              <li>• Custom domains</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-green-700 text-xs mb-2">Pricing:</h5>
              <ul className="text-green-600 text-xs space-y-1">
                <li>• Free tier available</li>
                <li>• Pay-as-you-grow</li>
                <li>• No vendor lock-in</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">🚂 Railway</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Deploy from GitHub repos</li>
              <li>• Built-in databases (PostgreSQL, MySQL, Redis)</li>
              <li>• Environment variables management</li>
              <li>• Custom domains and SSL</li>
              <li>• Automatic deployments</li>
              <li>• Monitoring and logs</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-purple-700 text-xs mb-2">Features:</h5>
              <ul className="text-purple-600 text-xs space-y-1">
                <li>• One-click deploys</li>
                <li>• Team collaboration</li>
                <li>• Usage-based pricing</li>
              </ul>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">☁️ AWS</h3>
            <ul className="text-orange-700 space-y-2 text-sm">
              <li>• Elastic Beanstalk for easy deployment</li>
              <li>• EC2 for full control</li>
              <li>• RDS for managed databases</li>
              <li>• Load balancing and auto-scaling</li>
              <li>• Global infrastructure</li>
              <li>• Comprehensive monitoring</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-orange-700 text-xs mb-2">Use Cases:</h5>
              <ul className="text-orange-600 text-xs space-y-1">
                <li>• Enterprise applications</li>
                <li>• High-traffic sites</li>
                <li>• Complex architectures</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Backend Deployment Configuration</h4>
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Render Deployment Setup</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# render.yaml - Infrastructure as Code
services:
  - type: web
    name: my-api
    env: node
    plan: starter
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        fromDatabase:
          name: my-database
          property: connectionString
      - key: JWT_SECRET
        generateValue: true
      - key: API_PORT
        value: 10000
    healthCheckPath: /health
    
  - type: worker
    name: my-worker
    env: node
    buildCommand: npm install
    startCommand: npm run worker
    envVars:
      - key: NODE_ENV
        value: production
      - key: REDIS_URL
        fromService:
          type: redis
          name: my-redis
          property: connectionString

databases:
  - name: my-database
    databaseName: myapp
    user: myapp_user
    plan: starter

services:
  - type: redis
    name: my-redis
    plan: starter

# Express.js app configuration for Render
const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

// Health check endpoint (required for Render)
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(\`Server running on port \${PORT}\`);
});`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Railway & AWS Deployment</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# Railway deployment (railway.json)
{
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/health",
    "healthcheckTimeout": 100,
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}

# Procfile for Railway
web: npm start
worker: npm run worker

# AWS Elastic Beanstalk configuration (.ebextensions/nodecommand.config)
option_settings:
  aws:elasticbeanstalk:container:nodejs:
    NodeCommand: "npm start"
    NodeVersion: 18.17.0
  aws:elasticbeanstalk:application:environment:
    NODE_ENV: production
    NPM_USE_PRODUCTION: true

# Docker deployment for AWS ECS
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

FROM node:18-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder /app/node_modules ./node_modules
COPY . .

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["npm", "start"]

# docker-compose.yml for local development
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:pass@db:5432/myapp
    depends_on:
      - db
      - redis
    
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: pass
    volumes:
      - postgres_data:/var/lib/postgresql/data
    
  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Docker Basics</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Docker Fundamentals</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Why Docker?</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Consistent environments across dev/staging/prod</li>
                <li>• Eliminate &quot;works on my machine&quot; issues</li>
                <li>• Easy scaling and deployment</li>
                <li>• Isolated application dependencies</li>
                <li>• Version control for entire environments</li>
                <li>• Simplified CI/CD pipelines</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Core Concepts:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• <strong>Image:</strong> Blueprint for containers</li>
                <li>• <strong>Container:</strong> Running instance of an image</li>
                <li>• <strong>Dockerfile:</strong> Instructions to build an image</li>
                <li>• <strong>Registry:</strong> Storage for Docker images</li>
                <li>• <strong>Volume:</strong> Persistent data storage</li>
                <li>• <strong>Network:</strong> Container communication</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Docker Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Optimized Dockerfile Examples</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# Multi-stage build for Node.js app
FROM node:18-alpine AS base
WORKDIR /app
COPY package*.json ./

# Dependencies stage
FROM base AS deps
RUN npm ci --only=production && npm cache clean --force

# Build stage
FROM base AS builder
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS runner
WORKDIR /app

# Security: Create non-root user
RUN addgroup --system --gid 1001 nodejs && \\
    adduser --system --uid 1001 nextjs

# Copy only necessary files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/public ./public
COPY package*.json ./

# Set ownership
RUN chown -R nextjs:nodejs /app
USER nextjs

# Expose port
EXPOSE 3000
ENV PORT 3000
ENV NODE_ENV production

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \\
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/health || exit 1

# Start application
CMD ["node", "dist/server.js"]

# .dockerignore
node_modules
npm-debug.log
.git
.gitignore
README.md
.env
.nyc_output
coverage
.cache
.next
.vscode
*.log`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Docker Compose for Full Stack</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`# docker-compose.yml - Full stack setup
version: '3.8'

services:
  # Frontend (Next.js)
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile
    ports:
      - "3000:3000"
    environment:
      - NEXT_PUBLIC_API_URL=http://backend:4000
    depends_on:
      - backend
    volumes:
      - ./frontend:/app
      - /app/node_modules
    networks:
      - app-network

  # Backend (Express.js)
  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile
    ports:
      - "4000:4000"
    environment:
      - NODE_ENV=development
      - DATABASE_URL=postgresql://postgres:password@db:5432/myapp
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./backend:/app
      - /app/node_modules
    networks:
      - app-network
    command: npm run dev

  # Database
  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./backend/db/init.sql:/docker-entrypoint-initdb.d/init.sql
    networks:
      - app-network

  # Redis Cache
  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    networks:
      - app-network
    command: redis-server --appendonly yes

  # Nginx Reverse Proxy
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - frontend
      - backend
    networks:
      - app-network

volumes:
  postgres_data:
  redis_data:

networks:
  app-network:
    driver: bridge

# Production override file: docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    environment:
      - NODE_ENV=production
    volumes: []
    command: npm start

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    environment:
      - NODE_ENV=production
    volumes: []
    command: npm start

# Essential Docker commands
# Build: docker-compose build
# Start: docker-compose up -d
# Logs: docker-compose logs -f
# Stop: docker-compose down
# Production: docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🚀 Deployment Best Practices Checklist</h3>
        <p className="text-green-700 mb-3">
          Essential practices for reliable, secure, and performant deployments across different platforms.
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <strong className="text-green-700">Frontend:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Build optimization</li>
              <li>• Environment variables</li>
              <li>• Security headers</li>
              <li>• Performance monitoring</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">Backend:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Health check endpoints</li>
              <li>• Graceful shutdowns</li>
              <li>• Database migrations</li>
              <li>• Error monitoring</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">Docker:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Multi-stage builds</li>
              <li>• Non-root users</li>
              <li>• Layer optimization</li>
              <li>• Health checks</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">Production:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• SSL certificates</li>
              <li>• Environment separation</li>
              <li>• Backup strategies</li>
              <li>• Rollback procedures</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}