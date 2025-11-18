export default function AdvancedPWAConceptsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">6.3 Advanced PWA Concepts</h1>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Advanced PWA Architecture & Tools</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• Implement App Shell Model for instant loading</li>
          <li>• Master Workbox for production-ready service workers</li>
          <li>• Build offline-first apps with IndexedDB storage</li>
          <li>• Optimize PWA performance and user experience</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">App Shell Model</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">App Shell Architecture</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">What is App Shell?</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Minimal HTML, CSS, and JS for UI framework</li>
                <li>• Cached immediately on first visit</li>
                <li>• Loads instantly on repeat visits</li>
                <li>• Dynamic content loaded separately</li>
                <li>• Navigation and layout structure</li>
                <li>• Critical rendering path optimization</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">Benefits:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• Fast initial load</li>
                <li>• Reliable performance</li>
                <li>• Native-like interactions</li>
                <li>• Efficient caching strategy</li>
                <li>• Smooth user experience</li>
                <li>• Works offline immediately</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">App Shell Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">HTML App Shell Structure</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>My PWA</title>
  
  <!-- Critical CSS inlined -->
  <style>
    /* App Shell Critical CSS */
    .app-shell {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    
    .header {
      background: #2563eb;
      color: white;
      padding: 1rem;
      position: sticky;
      top: 0;
      z-index: 100;
    }
    
    .nav {
      background: #f3f4f6;
      border-right: 1px solid #d1d5db;
      width: 250px;
      transition: transform 0.3s ease;
    }
    
    .main-content {
      flex: 1;
      padding: 1rem;
      background: white;
    }
    
    .loading-skeleton {
      background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
      background-size: 200% 100%;
      animation: loading 1.5s infinite;
    }
    
    @keyframes loading {
      0% { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    
    .content-placeholder {
      height: 200px;
      margin: 1rem 0;
      border-radius: 4px;
    }
  </style>
  
  <link rel="manifest" href="/manifest.json">
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <div id="app" class="app-shell">
    <!-- App Shell Structure -->
    <header class="header">
      <h1>My PWA</h1>
      <button id="menu-toggle">☰</button>
    </header>
    
    <div class="app-body">
      <nav id="nav" class="nav">
        <!-- Navigation items -->
        <ul>
          <li><a href="/" data-route="home">Home</a></li>
          <li><a href="/about" data-route="about">About</a></li>
          <li><a href="/contact" data-route="contact">Contact</a></li>
        </ul>
      </nav>
      
      <main id="main-content" class="main-content">
        <!-- Loading placeholders -->
        <div class="loading-skeleton content-placeholder"></div>
        <div class="loading-skeleton content-placeholder"></div>
        <div class="loading-skeleton content-placeholder"></div>
      </main>
    </div>
  </div>
  
  <!-- Non-critical JS loaded after shell -->
  <script>
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
      });
    }
  </script>
  <script src="/js/app.js" defer></script>
</body>
</html>`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">App Shell Router</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// App Shell Router (app.js)
class AppShell {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    this.contentArea = document.getElementById('main-content');
    
    this.setupRoutes();
    this.setupNavigation();
    this.handleInitialRoute();
  }
  
  setupRoutes() {
    this.routes.set('home', {
      template: '/templates/home.html',
      data: '/api/home'
    });
    
    this.routes.set('about', {
      template: '/templates/about.html',
      data: '/api/about'
    });
    
    this.routes.set('contact', {
      template: '/templates/contact.html',
      data: '/api/contact'
    });
  }
  
  setupNavigation() {
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[data-route]')) {
        e.preventDefault();
        const route = e.target.dataset.route;
        this.navigateTo(route);
        history.pushState({ route }, '', e.target.href);
      }
    });
    
    // Handle back/forward buttons
    window.addEventListener('popstate', (e) => {
      const route = e.state?.route || this.getRouteFromPath();
      this.navigateTo(route);
    });
  }
  
  async navigateTo(route) {
    if (!this.routes.has(route)) {
      route = 'home'; // Default fallback
    }
    
    this.currentRoute = route;
    this.showLoadingSkeleton();
    
    try {
      const routeConfig = this.routes.get(route);
      
      // Load template and data in parallel
      const [template, data] = await Promise.all([
        this.loadTemplate(routeConfig.template),
        this.loadData(routeConfig.data)
      ]);
      
      // Render content
      this.renderContent(template, data);
      this.updateActiveNavigation(route);
      
    } catch (error) {
      console.error('Navigation failed:', error);
      this.renderError();
    }
  }
  
  showLoadingSkeleton() {
    this.contentArea.innerHTML = \`
      <div class="loading-skeleton content-placeholder"></div>
      <div class="loading-skeleton content-placeholder"></div>
      <div class="loading-skeleton content-placeholder"></div>
    \`;
  }
  
  async loadTemplate(templateUrl) {
    const response = await fetch(templateUrl);
    if (!response.ok) throw new Error('Template load failed');
    return response.text();
  }
  
  async loadData(dataUrl) {
    try {
      const response = await fetch(dataUrl);
      if (!response.ok) throw new Error('Data load failed');
      return response.json();
    } catch (error) {
      // Return cached data if available
      const cached = await this.getCachedData(dataUrl);
      return cached || {};
    }
  }
  
  renderContent(template, data) {
    // Simple template rendering
    let content = template;
    
    // Replace data placeholders
    Object.keys(data).forEach(key => {
      const regex = new RegExp(\`{{\\s*\${key}\\s*}}\`, 'g');
      content = content.replace(regex, data[key]);
    });
    
    this.contentArea.innerHTML = content;
    
    // Trigger content loaded event
    document.dispatchEvent(new CustomEvent('contentLoaded', {
      detail: { route: this.currentRoute, data }
    }));
  }
}

// Initialize App Shell
const app = new AppShell();`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">React App Shell Pattern</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// React App Shell Component
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

// Loading skeleton component
const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    ))}
  </div>
);

// App Shell Layout
const AppShell = ({ children }) => (
  <div className="min-h-screen flex flex-col">
    <header className="bg-blue-600 text-white p-4 sticky top-0 z-50">
      <h1 className="text-xl font-bold">My PWA</h1>
      <nav className="mt-2">
        <Link to="/" className="mr-4 hover:underline">Home</Link>
        <Link to="/about" className="mr-4 hover:underline">About</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
      </nav>
    </header>
    
    <main className="flex-1 p-4 bg-gray-50">
      {children}
    </main>
    
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2024 My PWA</p>
    </footer>
  </div>
);

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Suspense fallback={<LoadingSkeleton />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Workbox</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">Workbox Overview</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">What is Workbox?</h5>
              <ul className="text-orange-600 space-y-2 text-sm">
                <li>• Google&apos;s PWA library suite</li>
                <li>• Production-ready service worker tools</li>
                <li>• Pre-built caching strategies</li>
                <li>• Runtime caching configuration</li>
                <li>• Background sync utilities</li>
                <li>• Precaching and routing</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-orange-700 mb-3">Key Features:</h5>
              <ul className="text-orange-600 space-y-2 text-sm">
                <li>• Automatic precaching</li>
                <li>• Flexible routing system</li>
                <li>• Cache expiration policies</li>
                <li>• Background sync queue</li>
                <li>• Google Analytics offline</li>
                <li>• TypeScript support</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">Workbox Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Workbox Setup & Configuration</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Install Workbox
npm install workbox-cli --global
npm install workbox-webpack-plugin --save-dev

// workbox-config.js
module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg,woff2}'
  ],
  swDest: 'dist/sw.js',
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/api\.example\.com\//,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'api-cache',
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 24 * 60 * 60 // 24 hours
        },
        cacheKeyWillBeUsed: async ({ request }) => {
          return \`\${request.url}?version=1\`;
        }
      }
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'images',
        expiration: {
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
        }
      }
    },
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com\//,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'google-fonts-stylesheets'
      }
    }
  ],
  skipWaiting: true,
  clientsClaim: true
};

// Generate service worker
// workbox generateSW workbox-config.js`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">Custom Workbox Service Worker</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// Custom service worker with Workbox
import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { BackgroundSyncPlugin } from 'workbox-background-sync';
import { Queue } from 'workbox-background-sync';

// Precache files
precacheAndRoute(self.__WB_MANIFEST);
cleanupOutdatedCaches();

// Background sync for form submissions
const bgSyncPlugin = new BackgroundSyncPlugin('form-submissions', {
  maxRetentionTime: 24 * 60 // 24 hours
});

// API calls - Network first with background sync
registerRoute(
  /^https:\/\/api\.example\.com\/submit/,
  new NetworkFirst({
    cacheName: 'api-submissions',
    plugins: [bgSyncPlugin]
  }),
  'POST'
);

// API data - Network first with fallback
registerRoute(
  /^https:\/\/api\.example\.com\//,
  new NetworkFirst({
    cacheName: 'api-data',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 60 // 1 hour
      })
    ]
  })
);

// Images - Cache first
registerRoute(
  /\.(?:png|jpg|jpeg|svg|gif|webp)$/,
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60 // 30 days
      })
    ]
  })
);

// Static assets - Stale while revalidate
registerRoute(
  /\.(?:js|css)$/,
  new StaleWhileRevalidate({
    cacheName: 'static-resources'
  })
);

// Google Fonts
registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets'
  })
);

registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: 'google-fonts-webfonts',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 30,
        maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
      })
    ]
  })
);

// Custom background sync queue
const queue = new Queue('api-queue', {
  onSync: async ({ queue }) => {
    let entry;
    while ((entry = await queue.shiftRequest())) {
      try {
        await fetch(entry.request);
        console.log('Background sync successful');
      } catch (error) {
        console.error('Background sync failed:', error);
        await queue.unshiftRequest(entry);
        throw error;
      }
    }
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">IndexedDB Storage</h2>
        
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-pink-800 mb-3">IndexedDB for Offline Storage</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// IndexedDB wrapper class
class OfflineDB {
  constructor(dbName = 'OfflineDB', version = 1) {
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }
  
  async init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        this.db = request.result;
        resolve(this.db);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        
        // Create object stores
        if (!db.objectStoreNames.contains('posts')) {
          const postsStore = db.createObjectStore('posts', { 
            keyPath: 'id', 
            autoIncrement: true 
          });
          postsStore.createIndex('timestamp', 'timestamp', { unique: false });
          postsStore.createIndex('status', 'status', { unique: false });
        }
        
        if (!db.objectStoreNames.contains('users')) {
          const usersStore = db.createObjectStore('users', { keyPath: 'id' });
          usersStore.createIndex('email', 'email', { unique: true });
        }
        
        if (!db.objectStoreNames.contains('queue')) {
          db.createObjectStore('queue', { 
            keyPath: 'id', 
            autoIncrement: true 
          });
        }
      };
    });
  }
  
  async add(storeName, data) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    
    return new Promise((resolve, reject) => {
      const request = store.add({
        ...data,
        timestamp: Date.now(),
        synced: false
      });
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  async get(storeName, key) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    
    return new Promise((resolve, reject) => {
      const request = store.get(key);
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  async getAll(storeName, indexName = null, query = null) {
    const transaction = this.db.transaction([storeName], 'readonly');
    const store = transaction.objectStore(storeName);
    const source = indexName ? store.index(indexName) : store;
    
    return new Promise((resolve, reject) => {
      const request = query ? source.getAll(query) : source.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  async update(storeName, data) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    
    return new Promise((resolve, reject) => {
      const request = store.put({
        ...data,
        lastModified: Date.now()
      });
      
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  }
  
  async delete(storeName, key) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    
    return new Promise((resolve, reject) => {
      const request = store.delete(key);
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
  
  async clear(storeName) {
    const transaction = this.db.transaction([storeName], 'readwrite');
    const store = transaction.objectStore(storeName);
    
    return new Promise((resolve, reject) => {
      const request = store.clear();
      request.onsuccess = () => resolve();
      request.onerror = () => reject(request.error);
    });
  }
}

// Usage example
const db = new OfflineDB('MyPWADB', 1);

// Initialize database
await db.init();

// Add offline data
await db.add('posts', {
  title: 'My Offline Post',
  content: 'This was created offline',
  author: 'user123',
  status: 'draft'
});

// Get unsynced posts
const unsyncedPosts = await db.getAll('posts', 'synced', false);

// Sync with server when online
if (navigator.onLine) {
  for (const post of unsyncedPosts) {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (response.ok) {
        await db.update('posts', { ...post, synced: true });
      }
    } catch (error) {
      console.log('Sync failed, will retry later');
    }
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
          <h4 className="font-semibold text-teal-800 mb-3">Offline-First Data Management</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Offline-first data manager
class OfflineDataManager {
  constructor() {
    this.db = new OfflineDB();
    this.syncQueue = [];
    this.isOnline = navigator.onLine;
    
    this.setupEventListeners();
  }
  
  async init() {
    await this.db.init();
    await this.processSyncQueue();
  }
  
  setupEventListeners() {
    window.addEventListener('online', () => {
      this.isOnline = true;
      this.processSyncQueue();
    });
    
    window.addEventListener('offline', () => {
      this.isOnline = false;
    });
  }
  
  async createPost(postData) {
    // Always save locally first
    const localId = await this.db.add('posts', postData);
    
    if (this.isOnline) {
      try {
        // Try to sync immediately
        const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify(postData),
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
          const serverData = await response.json();
          await this.db.update('posts', {
            ...postData,
            id: localId,
            serverId: serverData.id,
            synced: true
          });
          
          return { success: true, id: serverData.id };
        }
      } catch (error) {
        console.log('Online sync failed, queued for later');
      }
    }
    
    // Queue for sync when online
    this.syncQueue.push({
      type: 'CREATE',
      store: 'posts',
      localId,
      data: postData
    });
    
    return { success: true, id: localId, offline: true };
  }
  
  async getPosts() {
    // Get from local database
    const localPosts = await this.db.getAll('posts');
    
    if (this.isOnline) {
      try {
        // Try to get fresh data
        const response = await fetch('/api/posts');
        if (response.ok) {
          const serverPosts = await response.json();
          
          // Merge with local data
          return this.mergePostData(localPosts, serverPosts);
        }
      } catch (error) {
        console.log('Online fetch failed, using local data');
      }
    }
    
    return localPosts;
  }
  
  mergePostData(localPosts, serverPosts) {
    const merged = [...serverPosts];
    
    // Add local-only posts (not yet synced)
    const localOnly = localPosts.filter(post => !post.synced);
    merged.push(...localOnly);
    
    return merged.sort((a, b) => b.timestamp - a.timestamp);
  }
  
  async processSyncQueue() {
    if (!this.isOnline || this.syncQueue.length === 0) return;
    
    const queue = [...this.syncQueue];
    this.syncQueue = [];
    
    for (const item of queue) {
      try {
        switch (item.type) {
          case 'CREATE':
            await this.syncCreate(item);
            break;
          case 'UPDATE':
            await this.syncUpdate(item);
            break;
          case 'DELETE':
            await this.syncDelete(item);
            break;
        }
      } catch (error) {
        console.error('Sync failed for item:', item, error);
        // Re-queue failed items
        this.syncQueue.push(item);
      }
    }
  }
  
  async syncCreate(item) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify(item.data),
      headers: { 'Content-Type': 'application/json' }
    });
    
    if (response.ok) {
      const serverData = await response.json();
      await this.db.update('posts', {
        ...item.data,
        id: item.localId,
        serverId: serverData.id,
        synced: true
      });
    }
  }
}

// Initialize offline data manager
const dataManager = new OfflineDataManager();
await dataManager.init();

// Use throughout app
const posts = await dataManager.getPosts();
const newPost = await dataManager.createPost({
  title: 'New Post',
  content: 'Content here'
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6">
        <h3 className="text-purple-800 font-semibold mb-2">🚀 Next: Publishing Your PWA</h3>
        <p className="text-purple-700 mb-3">
          Learn to optimize, audit, and deploy your PWA for production with install banners and Lighthouse audits.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-purple-700">Performance:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Bundle optimization</li>
              <li>• Critical CSS inlining</li>
              <li>• Resource preloading</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">User Experience:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• Install prompts</li>
              <li>• Update notifications</li>
              <li>• Offline indicators</li>
            </ul>
          </div>
          <div>
            <strong className="text-purple-700">Deployment:</strong>
            <ul className="text-purple-600 mt-1 space-y-1">
              <li>• HTTPS configuration</li>
              <li>• CDN optimization</li>
              <li>• Lighthouse audits</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}