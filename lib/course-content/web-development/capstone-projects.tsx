export default function CapstoneProjectsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">MODULE 10 — Capstone Projects</h1>
      
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">🚀 Industry-Level Project Portfolio</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Build 5 comprehensive full-stack applications</li>
          <li>• Apply all learned technologies in real-world scenarios</li>
          <li>• Follow complete development lifecycle: Planning → Design → Development → Deployment</li>
          <li>• Create production-ready applications with proper documentation</li>
          <li>• Demonstrate mastery of modern web development practices</li>
        </ul>
      </div>

      <section className="mb-12">
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Complete Project Deployment Template (Continued)</h4>
          <pre className="text-sm overflow-x-auto">
            <code>{`# GitHub Actions Workflow (Continued)
name: Deploy to Production

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'
  REGISTRY: ghcr.io
  IMAGE_NAME: 'your-image-name'

jobs:
  # Test job
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: testdb
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
      
      redis:
        image: redis:7
        options: >-
          --health-cmd "redis-cli ping"
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 6379:6379

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: NODE_VERSION
          cache: 'npm'

      - name: Install dependencies
        run: |
          cd client && npm ci
          cd ../server && npm ci

      - name: Run linting
        run: |
          cd client && npm run lint
          cd ../server && npm run lint

      - name: Run type checking
        run: |
          cd client && npm run type-check
          cd ../server && npm run type-check

      - name: Run unit tests
        run: |
          cd client && npm run test:ci
          cd ../server && npm run test:ci
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb
          REDIS_URL: redis://localhost:6379
          JWT_SECRET: test-secret

      - name: Run integration tests
        run: |
          cd server && npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb
          REDIS_URL: redis://localhost:6379

      - name: Build applications
        run: |
          cd client && npm run build
          cd ../server && npm run build

      - name: Run E2E tests
        run: |
          cd client && npm run test:e2e:ci
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/testdb

  # Security scanning
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Run Snyk security scan
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: SNYK_TOKEN
        with:
          args: --all-projects --severity-threshold=high

      - name: Run CodeQL analysis
        uses: github/codeql-action/init@v3
        with:
          languages: javascript,typescript

      - name: Perform CodeQL analysis
        uses: github/codeql-action/analyze@v3

  # Build and push Docker images
  build:
    runs-on: ubuntu-latest
    needs: [test, security]
    if: github.ref == 'refs/heads/main'
    
    outputs:
      client-image: client-meta.outputs.tags
      server-image: server-meta.outputs.tags

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to Container Registry
        uses: docker/login-action@v3
        with:
          registry: REGISTRY
          username: actor
          password: GITHUB_TOKEN

      # Build client image
      - name: Extract client metadata
        id: client-meta
        uses: docker/metadata-action@v5
        with:
          images: REGISTRY /IMAGE_NAME-client
          tags: |
            type=ref,event=branch
            type=sha,prefix={{branch}}-

      - name: Build and push client image
        uses: docker/build-push-action@v5
        with:
          context: ./client
          platforms: linux/amd64,linux/arm64
          push: true
          tags: client-meta.outputs.tags
          labels: client-meta.outputs.labels
          cache-from: type=gha
          cache-to: type=gha,mode=max

      # Build server image
      - name: Extract server metadata
        id: server-meta
        uses: docker/metadata-action@v5
        with:
          images: REGISTRY /IMAGE_NAME-server
          tags: |
            type=ref,event=branch
            type=sha,prefix={{branch}}-

      - name: Build and push server image
        uses: docker/build-push-action@v5
        with:
          context: ./server
          platforms: linux/amd64,linux/arm64
          push: true
          tags: server-meta.outputs.tags
          labels: server-meta.outputs.labels
          cache-from: type=gha
          cache-to: type=gha,mode=max

  # Deploy to staging
  deploy-staging:
    runs-on: ubuntu-latest
    needs: build
    if: github.ref == 'refs/heads/main'
    environment:
      name: staging
      url: https://staging.yourapp.com

    steps:
      - name: Deploy to staging
        run: |
          echo "Deploying to staging environment"
          # Add your staging deployment commands here
          # Example: kubectl, helm, or cloud provider CLI commands

  # Deploy to production
  deploy-production:
    runs-on: ubuntu-latest
    needs: [build, deploy-staging]
    if: github.ref == 'refs/heads/main'
    environment:
      name: production
      url: https://yourapp.com

    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production environment"
          # Add your production deployment commands here

# Dockerfile examples for each service
# client/Dockerfile
FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
COPY --from=build /app/public ./public

USER nextjs
EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

# server/Dockerfile
FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && npm cache clean --force

# Development stage
FROM base AS development
RUN npm ci
COPY . .
EXPOSE 5000
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

USER nodejs
EXPOSE 5000
ENV NODE_ENV production

CMD ["node", "dist/index.js"]

# Kubernetes deployment example
# k8s/deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: client-deployment
  labels:
    app: client
spec:
  replicas: 3
  selector:
    matchLabels:
      app: client
  template:
    metadata:
      labels:
        app: client
    spec:
      containers:
      - name: client
        image: ghcr.io/yourusername/yourproject-client:latest
        ports:
        - containerPort: 3000
        env:
        - name: NEXT_PUBLIC_API_URL
          value: "https://api.yourapp.com"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5

---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: server-deployment
  labels:
    app: server
spec:
  replicas: 3
  selector:
    matchLabels:
      app: server
  template:
    metadata:
      labels:
        app: server
    spec:
      containers:
      - name: server
        image: ghcr.io/yourusername/yourproject-server:latest
        ports:
        - containerPort: 5000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: redis-url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: jwt-secret
        resources:
          requests:
            memory: "512Mi"
            cpu: "500m"
          limits:
            memory: "1Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /api/health
            port: 5000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /api/health
            port: 5000
          initialDelaySeconds: 5
          periodSeconds: 5

---
# Service definitions
apiVersion: v1
kind: Service
metadata:
  name: client-service
spec:
  selector:
    app: client
  ports:
  - protocol: TCP
    port: 80
    targetPort: 3000
  type: ClusterIP

---
apiVersion: v1
kind: Service
metadata:
  name: server-service
spec:
  selector:
    app: server
  ports:
  - protocol: TCP
    port: 80
    targetPort: 5000
  type: ClusterIP

# Ingress configuration
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: app-ingress
  annotations:
    kubernetes.io/ingress.class: "nginx"
    cert-manager.io/cluster-issuer: "letsencrypt-prod"
    nginx.ingress.kubernetes.io/rate-limit: "100"
spec:
  tls:
  - hosts:
    - yourapp.com
    - api.yourapp.com
    secretName: app-tls
  rules:
  - host: yourapp.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: client-service
            port:
              number: 80
  - host: api.yourapp.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: server-service
            port:
              number: 80`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Project Portfolio Presentation</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
            <h4 className="font-semibold text-indigo-800 mb-3">📋 Portfolio Requirements</h4>
            <ul className="text-indigo-700 space-y-2 text-sm">
              <li>• Live deployed applications with custom domains</li>
              <li>• Comprehensive GitHub repositories with documentation</li>
              <li>• Video demonstrations of key features</li>
              <li>• Technical blog posts explaining implementation</li>
              <li>• Performance benchmarks and metrics</li>
              <li>• Code quality reports and test coverage</li>
              <li>• User feedback and testimonials</li>
              <li>• Lessons learned and technical challenges</li>
            </ul>
          </div>

          <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
            <h4 className="font-semibold text-rose-800 mb-3">🎯 Evaluation Criteria</h4>
            <ul className="text-rose-700 space-y-2 text-sm">
              <li>• Code quality and architecture (25%)</li>
              <li>• Feature completeness and functionality (20%)</li>
              <li>• User experience and design (15%)</li>
              <li>• Performance and optimization (15%)</li>
              <li>• Security implementation (10%)</li>
              <li>• Testing coverage and quality (10%)</li>
              <li>• Documentation quality (5%)</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Portfolio Website Template</h4>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Portfolio website structure
portfolio-website/
├── components/
│   ├── ProjectCard.tsx
│   ├── TechStack.tsx
│   ├── PerformanceMetrics.tsx
│   └── DemoVideo.tsx
├── pages/
│   ├── index.tsx              # Landing page
│   ├── projects/
│   │   ├── index.tsx          # Projects overview
│   │   ├── connecthub.tsx     # Social networking project
│   │   ├── shopflow.tsx       # E-commerce project
│   │   ├── dataviz-pro.tsx    # Analytics dashboard
│   │   ├── chatflow.tsx       # Chat application
│   │   └── taskmaster.tsx     # Project management
│   ├── blog/
│   │   └── [slug].tsx         # Technical blog posts
│   └── contact.tsx
└── data/
    └── projects.ts

// components/ProjectCard.tsx
interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  blogPost?: string;
  metrics: {
    performance: number;
    accessibility: number;
    seo: number;
    testCoverage: number;
  };
  screenshots: string[];
  challenges: string[];
  learnings: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-64">
        <img 
          src={project.screenshots[0]} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
            Live Demo
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Performance Metrics:</h4>
          <div className="grid grid-cols-2 gap-4">
            <MetricBar label="Performance" value={project.metrics.performance} />
            <MetricBar label="Accessibility" value={project.metrics.accessibility} />
            <MetricBar label="SEO" value={project.metrics.seo} />
            <MetricBar label="Test Coverage" value={project.metrics.testCoverage} />
          </div>
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-center font-semibold hover:bg-blue-700"
          >
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-800 text-white py-2 px-4 rounded text-center font-semibold hover:bg-gray-900"
          >
            View Code
          </a>
        </div>
        
        {project.blogPost && (
          <a
            href={project.blogPost}
            className="block mt-3 text-blue-600 hover:text-blue-800 text-center"
          >
            Read Technical Blog Post →
          </a>
        )}
      </div>
    </div>
  );
};

// data/projects.ts
export const projects: Project[] = [
  {
    id: 'connecthub',
    title: 'ConnectHub - Social Networking Platform',
    description: 'A comprehensive social networking platform with real-time messaging, PWA support, and modern UI/UX design.',
    techStack: ['Next.js', 'TypeScript', 'Socket.io', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'AWS S3'],
    features: [
      'Real-time messaging and notifications',
      'Progressive Web App (PWA) with offline support',
      'User profiles and social connections',
      'Post creation with media upload',
      'Advanced search and discovery',
      'Mobile-responsive design'
    ],
    demoUrl: 'https://connecthub.yourdomain.com',
    githubUrl: 'https://github.com/yourusername/connecthub',
    blogPost: '/blog/building-real-time-social-platform',
    metrics: {
      performance: 95,
      accessibility: 98,
      seo: 92,
      testCoverage: 87
    },
    screenshots: [
      '/screenshots/connecthub-dashboard.png',
      '/screenshots/connecthub-mobile.png',
      '/screenshots/connecthub-chat.png'
    ],
    challenges: [
      'Implementing real-time features with Socket.io',
      'Optimizing database queries for social feeds',
      'Building offline-first PWA functionality',
      'Handling file uploads and image processing'
    ],
    learnings: [
      'Advanced Socket.io patterns for scalable real-time apps',
      'Database optimization techniques for social platforms',
      'PWA development and service worker implementation',
      'Modern React patterns and performance optimization'
    ]
  },
  // ... other projects
];`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Career Preparation</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-6">
            <h4 className="font-semibold text-emerald-800 mb-3">💼 Job Application Preparation</h4>
            <ul className="text-emerald-700 space-y-2 text-sm">
              <li>• Technical resume optimization with project highlights</li>
              <li>• Cover letter templates for different roles</li>
              <li>• LinkedIn profile optimization</li>
              <li>• GitHub profile enhancement</li>
              <li>• Portfolio website creation</li>
              <li>• Technical interview preparation</li>
              <li>• Salary negotiation strategies</li>
              <li>• Networking and community involvement</li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
            <h4 className="font-semibold text-amber-800 mb-3">🎯 Interview Preparation</h4>
            <ul className="text-amber-700 space-y-2 text-sm">
              <li>• Technical coding challenges practice</li>
              <li>• System design interview preparation</li>
              <li>• Behavioral interview scenarios</li>
              <li>• Project presentation skills</li>
              <li>• Code review and pair programming</li>
              <li>• Architecture discussion preparation</li>
              <li>• Problem-solving approach demonstration</li>
              <li>• Questions to ask interviewers</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
          <h4 className="font-semibold text-purple-800 mb-3">🏆 Capstone Project Completion Checklist</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Technical Excellence:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>✅ Clean, well-documented code</li>
                <li>✅ Comprehensive test coverage (&gt;80%)</li>
                <li>✅ Performance optimization</li>
                <li>✅ Security best practices</li>
                <li>✅ Responsive design</li>
                <li>✅ Accessibility compliance</li>
                <li>✅ SEO optimization</li>
                <li>✅ Error handling and logging</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Deployment & Operations:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>✅ Production deployment</li>
                <li>✅ CI/CD pipeline setup</li>
                <li>✅ Environment configuration</li>
                <li>✅ Database migrations</li>
                <li>✅ SSL certificates</li>
                <li>✅ Monitoring and alerting</li>
                <li>✅ Backup strategies</li>
                <li>✅ Load testing</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-purple-700 mb-3">Documentation & Presentation:</h5>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>✅ Comprehensive README</li>
                <li>✅ API documentation</li>
                <li>✅ Setup instructions</li>
                <li>✅ Architecture diagrams</li>
                <li>✅ Demo video</li>
                <li>✅ Technical blog post</li>
                <li>✅ Performance metrics</li>
                <li>✅ User feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-green-800 font-semibold mb-2">🎓 Capstone Project Journey Complete!</h3>
        <p className="text-green-700 mb-3">
          Congratulations on completing your comprehensive web development capstone projects! You&apos;ve built a portfolio that demonstrates industry-level skills and real-world application development expertise.
        </p>
        <div className="grid md:grid-cols-4 gap-4 text-sm">
          <div>
            <strong className="text-green-700">Projects Built:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Social Networking Platform</li>
              <li>• E-commerce Application</li>
              <li>• Analytics Dashboard</li>
              <li>• Real-time Chat App</li>
              <li>• Project Management Tool</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">Technical Skills:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Full-stack development</li>
              <li>• Database design</li>
              <li>• Real-time applications</li>
              <li>• Payment integration</li>
              <li>• Data visualization</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">DevOps & Deployment:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• CI/CD pipelines</li>
              <li>• Containerization</li>
              <li>• Cloud deployment</li>
              <li>• Performance monitoring</li>
              <li>• Security implementation</li>
            </ul>
          </div>
          <div>
            <strong className="text-green-700">Career Ready:</strong>
            <ul className="text-green-600 mt-1 space-y-1">
              <li>• Professional portfolio</li>
              <li>• Industry best practices</li>
              <li>• Interview preparation</li>
              <li>• Technical documentation</li>
              <li>• Real-world experience</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}