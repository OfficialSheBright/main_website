export default function PWAEssentialsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">6.1 PWA Essentials</h1>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Progressive Web App Fundamentals</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Understand PWA core concepts and benefits</li>
          <li>• Implement the three pillars: Fast, Reliable, Installable</li>
          <li>• Create and configure Web App Manifest</li>
          <li>• Transform web apps into app-like experiences</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What is a Progressive Web App?</h2>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-blue-800 mb-3">PWA Definition & Benefits</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">What PWAs Offer:</h5>
              <ul className="text-blue-600 space-y-2 text-sm">
                <li>• App-like experience in the browser</li>
                <li>• Works offline and on slow networks</li>
                <li>• Installable on home screen</li>
                <li>• Push notifications</li>
                <li>• Automatic updates</li>
                <li>• Secure (HTTPS required)</li>
                <li>• Responsive design</li>
                <li>• Cross-platform compatibility</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-700 mb-3">PWA vs Native Apps:</h5>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-green-700 text-sm">PWA Advantages:</h6>
                  <ul className="text-green-600 text-xs space-y-1">
                    <li>• No app store approval needed</li>
                    <li>• Smaller download size</li>
                    <li>• Instant updates</li>
                    <li>• Cross-platform codebase</li>
                    <li>• SEO benefits</li>
                  </ul>
                </div>
                
                <div className="bg-white p-3 rounded">
                  <h6 className="font-semibold text-orange-700 text-sm">Native Advantages:</h6>
                  <ul className="text-orange-600 text-xs space-y-1">
                    <li>• Full device API access</li>
                    <li>• Better performance</li>
                    <li>• App store discoverability</li>
                    <li>• Platform-specific features</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-4">PWA Checklist Implementation</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-green-400 mb-3">Basic PWA Requirements</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// 1. HTTPS (required for PWA)
// 2. Web App Manifest
// 3. Service Worker
// 4. Responsive Design

// PWA Detection Script
function isPWACapable() {
  return 'serviceWorker' in navigator && 
         'PushManager' in window &&
         'Notification' in window;
}

// Check PWA installation status
function isPWAInstalled() {
  return window.matchMedia('(display-mode: standalone)').matches ||
         window.navigator.standalone === true;
}

// PWA Install Prompt
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  
  // Show custom install button
  document.getElementById('pwa-install-btn').style.display = 'block';
});

// Trigger PWA Installation
async function installPWA() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    console.log(\`User response: \${outcome}\`);
    
    deferredPrompt = null;
    document.getElementById('pwa-install-btn').style.display = 'none';
  }
}`}</code>
              </pre>
            </div>
            
            <div>
              <h5 className="font-semibold text-blue-400 mb-3">React PWA Setup</h5>
              <pre className="text-sm overflow-x-auto">
                <code>{`// PWA Hook for React
import { useState, useEffect } from 'react';

export function usePWA() {
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    // Check if already installed
    setIsInstalled(
      window.matchMedia('(display-mode: standalone)').matches
    );

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Listen for app installed
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const installApp = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      console.log('PWA installed');
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return { isInstallable, isInstalled, installApp };
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Core Pillars of PWAs</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-800 mb-4">⚡ Fast</h3>
            <ul className="text-green-700 space-y-2 text-sm">
              <li>• Quick loading times</li>
              <li>• Smooth animations</li>
              <li>• Instant responses</li>
              <li>• Optimized assets</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-green-700 text-xs mb-2">Performance Techniques:</h5>
              <ul className="text-green-600 text-xs space-y-1">
                <li>• Code splitting & lazy loading</li>
                <li>• Resource preloading</li>
                <li>• Image optimization</li>
                <li>• Bundle size optimization</li>
                <li>• Critical CSS inlining</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">🔄 Reliable</h3>
            <ul className="text-blue-700 space-y-2 text-sm">
              <li>• Works offline</li>
              <li>• Handles slow networks</li>
              <li>• Graceful degradation</li>
              <li>• Error handling</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-blue-700 text-xs mb-2">Reliability Features:</h5>
              <ul className="text-blue-600 text-xs space-y-1">
                <li>• Service worker caching</li>
                <li>• Background sync</li>
                <li>• Offline fallbacks</li>
                <li>• Network error handling</li>
                <li>• Cache-first strategies</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">📱 Installable</h3>
            <ul className="text-purple-700 space-y-2 text-sm">
              <li>• Add to home screen</li>
              <li>• App-like icon</li>
              <li>• Standalone window</li>
              <li>• OS integration</li>
            </ul>
            
            <div className="bg-white p-3 rounded mt-4">
              <h5 className="font-semibold text-purple-700 text-xs mb-2">Installation Requirements:</h5>
              <ul className="text-purple-600 text-xs space-y-1">
                <li>• Valid web app manifest</li>
                <li>• Service worker registered</li>
                <li>• HTTPS served</li>
                <li>• User engagement signals</li>
                <li>• Multiple icon sizes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Web App Manifest</h2>
        
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-yellow-800 mb-3">Complete Web App Manifest</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`{
  "name": "My Progressive Web App",
  "short_name": "MyPWA",
  "description": "A full-featured Progressive Web Application",
  "start_url": "/",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#2563eb",
  "background_color": "#ffffff",
  "lang": "en-US",
  "scope": "/",
  
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-96x96.png",
      "sizes": "96x96",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-128x128.png",
      "sizes": "128x128",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-144x144.png",
      "sizes": "144x144",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-152x152.png",
      "sizes": "152x152",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-384x384.png",
      "sizes": "384x384",
      "type": "image/png",
      "purpose": "maskable any"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable any"
    }
  ],
  
  "shortcuts": [
    {
      "name": "New Post",
      "url": "/new-post",
      "description": "Create a new post",
      "icons": [
        {
          "src": "/icons/new-post.png",
          "sizes": "192x192"
        }
      ]
    },
    {
      "name": "Messages",
      "url": "/messages",
      "description": "View messages",
      "icons": [
        {
          "src": "/icons/messages.png",
          "sizes": "192x192"
        }
      ]
    }
  ],
  
  "categories": ["social", "productivity"],
  "prefer_related_applications": false,
  "edge_side_panel": {
    "preferred_width": 400
  },
  
  "protocol_handlers": [
    {
      "protocol": "web+myapp",
      "url": "/handle?type=%s"
    }
  ],
  
  "file_handlers": [
    {
      "action": "/handle-file",
      "accept": {
        "image/*": [".jpg", ".jpeg", ".png", ".gif"],
        "text/plain": [".txt"]
      }
    }
  ]
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h4 className="font-semibold text-red-800 mb-3">HTML Meta Tags</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`<!-- PWA Meta Tags in HTML Head -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Web App Manifest -->
<link rel="manifest" href="/manifest.json">

<!-- Theme Colors -->
<meta name="theme-color" content="#2563eb">
<meta name="msapplication-TileColor" content="#2563eb">

<!-- Apple PWA Support -->
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="MyPWA">

<!-- Apple Touch Icons -->
<link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152.png">
<link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120.png">

<!-- Microsoft Tiles -->
<meta name="msapplication-TileImage" content="/icons/icon-144x144.png">
<meta name="msapplication-config" content="/browserconfig.xml">

<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<!-- PWA Splash Screens (iOS) -->
<link rel="apple-touch-startup-image" 
      href="/splash/iphone5_splash.png" 
      media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)">
      
<link rel="apple-touch-startup-image" 
      href="/splash/iphone6_splash.png" 
      media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)">`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
            <h4 className="font-semibold text-teal-800 mb-3">Icon Generator & Tools</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-teal-700 mb-2 text-sm">PWA Icon Requirements:</h5>
                <ul className="text-teal-600 text-xs space-y-1">
                  <li>• Minimum 192x192px and 512x512px</li>
                  <li>• Maskable icons for better integration</li>
                  <li>• Multiple sizes for different devices</li>
                  <li>• High contrast for accessibility</li>
                  <li>• Consistent branding</li>
                </ul>
              </div>
              
              <div>
                <h5 className="font-semibold text-teal-700 mb-2 text-sm">Generation Tools:</h5>
                <ul className="text-teal-600 text-xs space-y-1">
                  <li>• PWA Builder (Microsoft)</li>
                  <li>• RealFaviconGenerator</li>
                  <li>• PWA Asset Generator</li>
                  <li>• Maskable.app</li>
                </ul>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h5 className="font-semibold text-teal-700 text-xs mb-1">Quick Icon Script:</h5>
                <pre className="text-xs overflow-x-auto">
                  <code>{`# Generate PWA icons from source
npm install -g pwa-asset-generator

pwa-asset-generator source-icon.png icons/ \\
  --manifest manifest.json \\
  --index index.html \\
  --favicon \\
  --type png \\
  --maskable`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">🚀 Next: Service Workers</h3>
        <p className="text-indigo-700 mb-3">
          Learn to implement service workers for offline functionality, caching strategies, and push notifications.
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-indigo-700">Coming Up:</strong>
            <ul className="text-indigo-600 mt-1 space-y-1">
              <li>• Service Worker lifecycle</li>
              <li>• Caching strategies</li>
              <li>• Offline-first approach</li>
            </ul>
          </div>
          <div>
            <strong className="text-indigo-700">Advanced Features:</strong>
            <ul className="text-indigo-600 mt-1 space-y-1">
              <li>• Background sync</li>
              <li>• Push notifications</li>
              <li>• Update strategies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}