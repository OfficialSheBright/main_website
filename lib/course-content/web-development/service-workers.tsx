export default function ServiceWorkersContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">6.2 Service Workers</h1>
      
      <div className="bg-violet-50 border-l-4 border-violet-500 p-6 mb-8">
        <h3 className="text-violet-800 font-semibold mb-3">Advanced PWA Functionality</h3>
        <ul className="text-violet-700 space-y-2">
          <li>• Master service worker lifecycle and events</li>
          <li>• Implement intelligent caching strategies</li>
          <li>• Build robust offline functionality</li>
          <li>• Add background sync and push notifications</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Worker Fundamentals</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">Service Worker Registration</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Register Service Worker (main thread)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register('/sw.js', {
        scope: '/' // Service worker scope
      });

      console.log('SW registered successfully:', registration);

      // Handle updates
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New update available
              showUpdateAvailableNotification();
            } else {
              // Content is cached for offline use
              showOfflineReadyNotification();
            }
          }
        });
      });

      // Listen for messages from SW
      navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'CACHE_UPDATED') {
          showRefreshPrompt();
        }
      });

    } catch (error) {
      console.log('SW registration failed:', error);
    }
  });
}

// Handle SW updates
function showUpdateAvailableNotification() {
  const updateBanner = document.createElement('div');
  updateBanner.innerHTML = \`
    <div class="update-banner">
      <p>New version available!</p>
      <button onclick="updateApp()">Update</button>
      <button onclick="dismissUpdate()">Later</button>
    </div>
  \`;
  document.body.appendChild(updateBanner);
}

async function updateApp() {
  const registration = await navigator.serviceWorker.getRegistration();
  if (registration?.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h4 className="font-semibold text-green-800 mb-3">Service Worker Lifecycle</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Service Worker file (sw.js)
const CACHE_NAME = 'my-pwa-v1.2.0';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
  '/manifest.json',
  '/offline.html'
];

// Install Event - Cache resources
self.addEventListener('install', event => {
  console.log('SW Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching resources');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log('All resources cached');
        // Force activation of new SW
        return self.skipWaiting();
      })
  );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
  console.log('SW Activating...');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Old caches cleared');
      // Take control of all clients immediately
      return self.clients.claim();
    })
  );
});

// Message Event - Handle messages from main thread
self.addEventListener('message', event => {
  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: CACHE_NAME
    });
  }
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Caching Strategies</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h4 className="font-semibold text-orange-800 mb-3">Cache First Strategy</h4>
            <p className="text-orange-700 text-sm mb-3">Best for static assets (CSS, JS, images)</p>
            <div className="bg-gray-900 text-white p-3 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Cache First - Good for static assets
self.addEventListener('fetch', event => {
  if (event.request.destination === 'image' ||
      event.request.url.includes('/static/')) {
    
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          
          return fetch(event.request)
            .then(response => {
              const responseClone = response.clone();
              
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseClone);
                });
              
              return response;
            });
        })
    );
  }
});`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">Network First Strategy</h4>
            <p className="text-purple-700 text-sm mb-3">Best for dynamic content (API calls)</p>
            <div className="bg-gray-900 text-white p-3 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Network First - Good for API calls
self.addEventListener('fetch', event => {
  if (event.request.url.includes('/api/')) {
    
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const responseClone = response.clone();
          
          // Cache successful responses
          if (response.status === 200) {
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseClone);
              });
          }
          
          return response;
        })
        .catch(() => {
          // Fallback to cache if network fails
          return caches.match(event.request);
        })
    );
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Comprehensive Caching Strategy</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Advanced Fetch Handler with Multiple Strategies
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle different request types
  if (request.method !== 'GET') {
    return; // Don't cache non-GET requests
  }

  // Strategy 1: Cache First for static assets
  if (request.destination === 'image' ||
      request.destination === 'script' ||
      request.destination === 'style' ||
      url.pathname.startsWith('/static/')) {
    
    event.respondWith(cacheFirst(request));
  }
  
  // Strategy 2: Network First for API calls
  else if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
  }
  
  // Strategy 3: Stale While Revalidate for pages
  else if (request.destination === 'document') {
    event.respondWith(staleWhileRevalidate(request));
  }
  
  // Strategy 4: Cache Only for offline page
  else if (url.pathname === '/offline.html') {
    event.respondWith(caches.match(request));
  }
});

// Cache First Implementation
async function cacheFirst(request) {
  const cachedResponse = await caches.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
}

// Network First Implementation
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback for API calls
    return new Response(JSON.stringify({
      error: 'Offline',
      message: 'This feature requires an internet connection'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// Stale While Revalidate Implementation
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  // Start fetching fresh version in background
  const fetchPromise = fetch(request)
    .then(networkResponse => {
      if (networkResponse.status === 200) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => cachedResponse || caches.match('/offline.html'));
  
  // Return cached version immediately if available
  return cachedResponse || fetchPromise;
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Background Sync & Push Notifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Background Sync</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Register background sync (main thread)
async function scheduleBackgroundSync(data) {
  if ('serviceWorker' in navigator && 'sync' in window.ServiceWorkerRegistration.prototype) {
    
    // Store data in IndexedDB for sync
    await storeDataForSync(data);
    
    // Register sync
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('background-sync');
    
    console.log('Background sync registered');
  } else {
    // Fallback: try to send immediately
    await sendDataToServer(data);
  }
}

// Background sync handler (service worker)
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  try {
    const pendingData = await getPendingDataFromDB();
    
    for (const item of pendingData) {
      try {
        await fetch('/api/sync', {
          method: 'POST',
          body: JSON.stringify(item.data),
          headers: { 'Content-Type': 'application/json' }
        });
        
        // Remove from pending after successful sync
        await removeFromPendingDB(item.id);
        
      } catch (error) {
        console.log('Sync failed for item:', item.id);
        // Will retry on next sync event
      }
    }
  } catch (error) {
    console.error('Background sync failed:', error);
  }
}

// IndexedDB helpers
async function storeDataForSync(data) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('SyncDB', 1);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['pending'], 'readwrite');
      const store = transaction.objectStore('pending');
      
      store.add({
        id: Date.now(),
        data: data,
        timestamp: new Date()
      });
      
      transaction.oncomplete = () => resolve();
    };
  });
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
            <h4 className="font-semibold text-pink-800 mb-3">Push Notifications</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Request notification permission (main thread)
async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }
  
  if (Notification.permission === 'granted') {
    return true;
  }
  
  if (Notification.permission === 'denied') {
    return false;
  }
  
  const permission = await Notification.requestPermission();
  return permission === 'granted';
}

// Subscribe to push notifications
async function subscribeUserToPush() {
  const hasPermission = await requestNotificationPermission();
  if (!hasPermission) return;
  
  const registration = await navigator.serviceWorker.ready;
  
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(PUBLIC_VAPID_KEY)
  });
  
  // Send subscription to server
  await fetch('/api/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: { 'Content-Type': 'application/json' }
  });
  
  console.log('User subscribed to push notifications');
}

// Handle push events (service worker)
self.addEventListener('push', event => {
  console.log('Push received');
  
  let data = { title: 'New Notification', body: 'You have a new message' };
  
  if (event.data) {
    data = event.data.json();
  }
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge.png',
    vibrate: [200, 100, 200],
    data: {
      url: data.url || '/',
      id: data.id
    },
    actions: [
      {
        action: 'view',
        title: 'View',
        icon: '/icons/view.png'
      },
      {
        action: 'dismiss',
        title: 'Dismiss',
        icon: '/icons/dismiss.png'
      }
    ],
    requireInteraction: true
  };
  
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification clicks (service worker)
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  if (event.action === 'view') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url)
    );
  } else if (event.action === 'dismiss') {
    // Handle dismiss action
    console.log('Notification dismissed');
  } else {
    // Default click action
    event.waitUntil(
      clients.matchAll({ type: 'window' })
        .then(clientList => {
          if (clientList.length > 0) {
            return clientList[0].focus();
          }
          return clients.openWindow('/');
        })
    );
  }
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-lg p-6">
        <h3 className="text-violet-800 font-semibold mb-4">🛠️ PWA Development Tools & Testing</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <strong className="text-violet-700">Chrome DevTools:</strong>
            <ul className="text-violet-600 mt-1 space-y-1">
              <li>• Application tab for SW debugging</li>
              <li>• Cache storage inspector</li>
              <li>• Push notification simulator</li>
              <li>• Offline mode testing</li>
            </ul>
          </div>
          <div>
            <strong className="text-violet-700">Lighthouse PWA Audit:</strong>
            <ul className="text-violet-600 mt-1 space-y-1">
              <li>• PWA compliance checking</li>
              <li>• Performance metrics</li>
              <li>• Installability requirements</li>
              <li>• Best practice recommendations</li>
            </ul>
          </div>
          <div>
            <strong className="text-violet-700">Testing Checklist:</strong>
            <ul className="text-violet-600 mt-1 space-y-1">
              <li>• Works offline completely</li>
              <li>• Install prompt appears</li>
              <li>• Push notifications functional</li>
              <li>• Background sync works</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}