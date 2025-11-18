export default function ResponsiveFoundationsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">5.1 Responsive Foundations</h1>
      
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8">
        <h3 className="text-indigo-800 font-semibold mb-3">Mobile-First Design Principles</h3>
        <ul className="text-indigo-700 space-y-2">
          <li>• Mobile-first philosophy and progressive enhancement</li>
          <li>• Understanding breakpoints and grid systems</li>
          <li>• Responsive images and aspect ratio handling</li>
          <li>• Modern CSS layout techniques</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Mobile-First Philosophy</h2>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-green-800 mb-3">Why Mobile-First?</h4>
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-green-700 mb-2">Performance</h5>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Faster loading on mobile</li>
                <li>• Smaller initial bundle</li>
                <li>• Progressive enhancement</li>
                <li>• Better Core Web Vitals</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-green-700 mb-2">User Experience</h5>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Touch-friendly interactions</li>
                <li>• Thumb navigation zones</li>
                <li>• Readable text sizes</li>
                <li>• Simplified navigation</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded">
              <h5 className="font-semibold text-green-700 mb-2">SEO Benefits</h5>
              <ul className="text-green-600 text-sm space-y-1">
                <li>• Google mobile-first indexing</li>
                <li>• Better search rankings</li>
                <li>• Improved accessibility</li>
                <li>• Faster page speed scores</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h4 className="text-lg font-semibold mb-4">Mobile-First CSS Structure</h4>
          <pre className="text-sm overflow-x-auto">
            <code>{`/* Mobile-First Approach */
/* Base styles (mobile) */
.container {
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
}

.navigation {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: -100%;
  width: 80%;
  height: 100vh;
  background: #fff;
  transition: left 0.3s ease;
}

.nav-toggle {
  display: block;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.hero-title {
  font-size: 2rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.card {
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Tablet styles (progressive enhancement) */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    padding: 2rem;
  }
  
  .navigation {
    position: static;
    flex-direction: row;
    width: auto;
    height: auto;
    left: 0;
  }
  
  .nav-toggle {
    display: none;
  }
  
  .hero-title {
    font-size: 3rem;
  }
  
  .card {
    width: calc(50% - 0.5rem);
    display: inline-block;
    margin-right: 1rem;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
  
  .hero-title {
    font-size: 4rem;
  }
  
  .card {
    width: calc(33.333% - 0.67rem);
  }
}

/* Large desktop */
@media (min-width: 1440px) {
  .container {
    max-width: 1440px;
  }
  
  .hero-title {
    font-size: 5rem;
  }
}`}</code>
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Breakpoints & Grid Systems</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Standard Breakpoints</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`/* Common Breakpoint System */
/* Extra Small (xs) - Default mobile */
/* 0px - 575px */

/* Small (sm) - Large mobile */
@media (min-width: 576px) { }

/* Medium (md) - Tablet */
@media (min-width: 768px) { }

/* Large (lg) - Desktop */
@media (min-width: 992px) { }

/* Extra Large (xl) - Large desktop */
@media (min-width: 1200px) { }

/* Extra Extra Large (xxl) - Ultra wide */
@media (min-width: 1400px) { }

/* CSS Custom Properties for Breakpoints */
:root {
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  --breakpoint-xxl: 1400px;
}

/* Container sizes */
.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 576px) {
  .container { max-width: 540px; }
}

@media (min-width: 768px) {
  .container { max-width: 720px; }
}

@media (min-width: 992px) {
  .container { max-width: 960px; }
}

@media (min-width: 1200px) {
  .container { max-width: 1140px; }
}`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="font-semibold text-purple-800 mb-3">CSS Grid System</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`/* Modern CSS Grid System */
.grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr; /* Mobile: single column */
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

/* Desktop: 3 columns */
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

/* Auto-fit responsive grid */
.auto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

/* Flexbox alternative */
.flex-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.flex-grid > * {
  flex: 1 1 100%; /* Mobile: full width */
}

@media (min-width: 768px) {
  .flex-grid > * {
    flex: 1 1 calc(50% - 0.5rem); /* Tablet: 2 columns */
  }
}

@media (min-width: 1024px) {
  .flex-grid > * {
    flex: 1 1 calc(33.333% - 0.67rem); /* Desktop: 3 columns */
  }
}

/* Utility classes for responsive columns */
.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }

@media (min-width: 768px) {
  .md\\:col-1 { grid-column: span 1; }
  .md\\:col-2 { grid-column: span 2; }
  .md\\:col-3 { grid-column: span 3; }
}

@media (min-width: 1024px) {
  .lg\\:col-1 { grid-column: span 1; }
  .lg\\:col-2 { grid-column: span 2; }
  .lg\\:col-3 { grid-column: span 3; }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Responsive Images & Aspect Ratios</h2>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-orange-800 mb-3">Responsive Image Techniques</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`/* 1. Basic responsive image */
.responsive-img {
  max-width: 100%;
  height: auto;
}

/* 2. Aspect ratio container (modern) */
.aspect-ratio {
  aspect-ratio: 16 / 9; /* or 1 / 1 for square */
}

.aspect-ratio img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 3. Legacy aspect ratio technique */
.aspect-ratio-legacy {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.aspect-ratio-legacy img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 4. Art direction with picture element */
/* HTML:
<picture>
  <source media="(min-width: 1024px)" 
          srcset="large-image.jpg">
  <source media="(min-width: 768px)" 
          srcset="medium-image.jpg">
  <img src="small-image.jpg" 
       alt="Responsive image"
       loading="lazy">
</picture>
*/

/* 5. Responsive background images */
.hero-bg {
  background-image: url('mobile-bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 50vh;
}

@media (min-width: 768px) {
  .hero-bg {
    background-image: url('tablet-bg.jpg');
    min-height: 60vh;
  }
}

@media (min-width: 1024px) {
  .hero-bg {
    background-image: url('desktop-bg.jpg');
    min-height: 80vh;
  }
}

/* 6. Image optimization classes */
.img-fluid {
  max-width: 100%;
  height: auto;
}

.img-cover {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.img-contain {
  width: 100%;
  height: 100%;
  object-fit: contain;
}`}</code>
            </pre>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h4 className="font-semibold text-yellow-800 mb-3">React Responsive Image Component</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Responsive Image Component
import { useState, useEffect } from 'react';

function ResponsiveImage({ 
  src, 
  alt, 
  aspectRatio = '16/9',
  sizes = {
    mobile: 480,
    tablet: 768,
    desktop: 1200
  },
  className = '',
  lazy = true 
}) {
  const [currentSrc, setCurrentSrc] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const updateSrc = () => {
      const width = window.innerWidth;
      
      if (width >= 1024) {
        setCurrentSrc(\`\${src}?w=\${sizes.desktop}\`);
      } else if (width >= 768) {
        setCurrentSrc(\`\${src}?w=\${sizes.tablet}\`);
      } else {
        setCurrentSrc(\`\${src}?w=\${sizes.mobile}\`);
      }
    };

    updateSrc();
    window.addEventListener('resize', updateSrc);
    
    return () => window.removeEventListener('resize', updateSrc);
  }, [src, sizes]);

  return (
    <div 
      className={\`relative overflow-hidden \${className}\`}
      style={{ aspectRatio }}
    >
      {loading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      <img
        src={currentSrc}
        alt={alt}
        className="w-full h-full object-cover"
        loading={lazy ? 'lazy' : 'eager'}
        onLoad={() => setLoading(false)}
        onError={() => setLoading(false)}
      />
    </div>
  );
}

// Usage
function ImageGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ResponsiveImage
        src="https://example.com/image1.jpg"
        alt="Gallery image 1"
        aspectRatio="1/1"
        className="rounded-lg shadow-md"
      />
      
      <ResponsiveImage
        src="https://example.com/image2.jpg"
        alt="Gallery image 2"
        aspectRatio="4/3"
        className="rounded-lg shadow-md"
      />
      
      <ResponsiveImage
        src="https://example.com/image3.jpg"
        alt="Gallery image 3"
        aspectRatio="16/9"
        className="rounded-lg shadow-md col-span-full lg:col-span-1"
      />
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-6">
        <h3 className="text-indigo-800 font-semibold mb-2">📱 Mobile-First Checklist</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <strong className="text-indigo-700">Design:</strong>
            <ul className="text-indigo-600 mt-1 space-y-1">
              <li>✓ Touch targets min 44px</li>
              <li>✓ Readable font sizes (16px+)</li>
              <li>✓ Thumb-friendly navigation</li>
              <li>✓ Simplified layouts</li>
            </ul>
          </div>
          <div>
            <strong className="text-indigo-700">Performance:</strong>
            <ul className="text-indigo-600 mt-1 space-y-1">
              <li>✓ Optimized images</li>
              <li>✓ Minimal initial load</li>
              <li>✓ Progressive enhancement</li>
              <li>✓ Fast loading animations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}