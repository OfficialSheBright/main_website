export default function FrontendOptimizationContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">7.2 Frontend Optimization</h1>
      
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-8">
        <h3 className="text-emerald-800 font-semibold mb-3">Advanced Frontend Performance Techniques</h3>
        <ul className="text-emerald-700 space-y-2">
          <li>• Implement smart code splitting and lazy loading strategies</li>
          <li>• Optimize images with modern formats (WebP, AVIF)</li>
          <li>• Master minification, caching, and CDN optimization</li>
          <li>• Eliminate performance bottlenecks and rendering issues</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Reducing Reflows & Repaints</h2>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
          <h4 className="font-semibold text-red-800 mb-3">Layout Optimization Techniques</h4>
          <div className="bg-gray-900 text-white p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              <code>{`// DOM manipulation optimization
class DOMOptimizer {
  constructor() {
    this.mutationQueue = [];
    this.rafId = null;
    this.isProcessing = false;
  }

  // Batch DOM operations
  batchOperation(operation) {
    this.mutationQueue.push(operation);
    
    if (!this.rafId) {
      this.rafId = requestAnimationFrame(() => {
        this.processBatch();
      });
    }
  }

  processBatch() {
    if (this.isProcessing) return;
    
    this.isProcessing = true;
    
    // Group operations by type
    const reads = this.mutationQueue.filter(op => op.type === 'read');
    const writes = this.mutationQueue.filter(op => op.type === 'write');
    
    // Execute all reads first (avoid layout thrashing)
    reads.forEach(op => op.execute());
    
    // Then execute all writes
    writes.forEach(op => op.execute());
    
    // Clear queue
    this.mutationQueue = [];
    this.rafId = null;
    this.isProcessing = false;
  }

  // Optimize element measurements
  measureElement(element, properties) {
    return this.batchOperation({
      type: 'read',
      execute: () => {
        const rect = element.getBoundingClientRect();
        const computed = getComputedStyle(element);
        
        const measurements = {};
        
        properties.forEach(prop => {
          switch (prop) {
            case 'width':
              measurements.width = rect.width;
              break;
            case 'height':
              measurements.height = rect.height;
              break;
            case 'margin':
              measurements.margin = {
                top: parseFloat(computed.marginTop),
                right: parseFloat(computed.marginRight),
                bottom: parseFloat(computed.marginBottom),
                left: parseFloat(computed.marginLeft)
              };
              break;
            default:
              measurements[prop] = computed[prop];
          }
        });
        
        return measurements;
      }
    });
  }

  // Optimize style changes
  updateStyles(element, styles) {
    this.batchOperation({
      type: 'write',
      execute: () => {
        // Use CSS custom properties for better performance
        Object.entries(styles).forEach(([property, value]) => {
          if (property.startsWith('--')) {
            element.style.setProperty(property, value);
          } else {
            element.style[property] = value;
          }
        });
      }
    });
  }

  // Optimize class manipulations
  updateClasses(element, { add = [], remove = [], toggle = [] }) {
    this.batchOperation({
      type: 'write',
      execute: () => {
        if (remove.length) element.classList.remove(...remove);
        if (add.length) element.classList.add(...add);
        toggle.forEach(className => element.classList.toggle(className));
      }
    });
  }
}

// CSS-in-JS optimization for React
const useOptimizedStyles = (baseStyles, dynamicStyles) => {
  const [cssText, setCssText] = useState('');
  const styleRef = useRef(null);

  useEffect(() => {
    // Create CSS custom properties for dynamic values
    const customProperties = Object.entries(dynamicStyles)
      .map(([key, value]) => \`--\${key}: \${value};\`)
      .join(' ');

    // Use CSS custom properties in styles
    const optimizedCSS = \`
      \${baseStyles}
      :root {
        \${customProperties}
      }
    \`;

    setCssText(optimizedCSS);

    // Inject styles using a single <style> element
    if (!styleRef.current) {
      styleRef.current = document.createElement('style');
      document.head.appendChild(styleRef.current);
    }
    
    styleRef.current.textContent = optimizedCSS;
  }, [baseStyles, dynamicStyles]);

  return cssText;
};

// Virtual scrolling to reduce DOM nodes
const VirtualScrollList = ({ items, itemHeight = 50, containerHeight = 400 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const [containerRef, setContainerRef] = useState(null);

  const visibleStart = Math.floor(scrollTop / itemHeight);
  const visibleEnd = Math.min(
    visibleStart + Math.ceil(containerHeight / itemHeight) + 1,
    items.length
  );

  const visibleItems = items.slice(visibleStart, visibleEnd);
  const totalHeight = items.length * itemHeight;
  const offsetY = visibleStart * itemHeight;

  const handleScroll = useCallback((e) => {
    setScrollTop(e.target.scrollTop);
  }, []);

  return (
    <div
      ref={setContainerRef}
      style={{ height: containerHeight, overflow: 'auto' }}
      onScroll={handleScroll}
    >
      <div style={{ height: totalHeight, position: 'relative' }}>
        <div style={{ transform: \`translateY(\${offsetY}px)\` }}>
          {visibleItems.map((item, index) => (
            <div
              key={visibleStart + index}
              style={{ height: itemHeight }}
              className="virtual-item"
            >
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Transform and animation optimization
class AnimationOptimizer {
  constructor() {
    this.animations = new Map();
    this.running = false;
  }

  // Use transform and opacity for smooth animations
  animateElement(element, keyframes, options = {}) {
    const {
      duration = 300,
      easing = 'ease-out',
      fill = 'forwards'
    } = options;

    // Prefer transform and opacity properties
    const optimizedKeyframes = keyframes.map(frame => {
      const optimized = {};
      
      Object.entries(frame).forEach(([property, value]) => {
        if (['left', 'top', 'right', 'bottom'].includes(property)) {
          // Convert position changes to transforms
          if (property === 'left') {
            optimized.transform = \`translateX(\${value}px)\`;
          } else if (property === 'top') {
            optimized.transform = \`translateY(\${value}px)\`;
          }
        } else {
          optimized[property] = value;
        }
      });
      
      return optimized;
    });

    // Use Web Animations API
    const animation = element.animate(optimizedKeyframes, {
      duration,
      easing,
      fill
    });

    // Track animation for cleanup
    const animationId = Symbol('animation');
    this.animations.set(animationId, animation);

    animation.addEventListener('finish', () => {
      this.animations.delete(animationId);
    });

    return animation;
  }

  // Optimize scroll animations
  createScrollAnimation(element, callback) {
    let ticking = false;

    const updateAnimation = () => {
      callback(element.scrollTop);
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimation);
        ticking = true;
      }
    };

    element.addEventListener('scroll', requestTick, { passive: true });
    
    return () => element.removeEventListener('scroll', requestTick);
  }

  // Intersection Observer for scroll-triggered animations
  observeScrollTriggers(elements, options = {}) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;
          const animationType = element.dataset.animation;
          
          this.triggerAnimation(element, animationType);
          observer.unobserve(element);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    elements.forEach(element => observer.observe(element));
    
    return observer;
  }

  triggerAnimation(element, type) {
    const animations = {
      fadeIn: [
        { opacity: 0, transform: 'translateY(20px)' },
        { opacity: 1, transform: 'translateY(0px)' }
      ],
      slideIn: [
        { transform: 'translateX(-100%)' },
        { transform: 'translateX(0%)' }
      ],
      scaleIn: [
        { transform: 'scale(0.8)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 }
      ]
    };

    if (animations[type]) {
      this.animateElement(element, animations[type], {
        duration: 600,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
    }
  }
}

// React performance optimization hooks
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

const useThrottle = (value, limit) => {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      if (Date.now() - lastRan.current >= limit) {
        setThrottledValue(value);
        lastRan.current = Date.now();
      }
    }, limit - (Date.now() - lastRan.current));

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
};

// Layout shift prevention
const useLayoutShiftPrevention = () => {
  const measureRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!measureRef.current) return;

    const observer = new ResizeObserver(entries => {
      const entry = entries[0];
      const { width, height } = entry.contentRect;
      
      setDimensions({ width, height });
    });

    observer.observe(measureRef.current);
    
    return () => observer.disconnect();
  }, []);

  return { measureRef, dimensions };
};

// Component for preventing layout shift
const StableContainer = ({ children, minHeight = 100, className = '' }) => {
  const { measureRef, dimensions } = useLayoutShiftPrevention();

  return (
    <div 
      ref={measureRef}
      className={className}
      style={{ 
        minHeight: dimensions.height || minHeight,
        transition: 'min-height 0.2s ease-out'
      }}
    >
      {children}
    </div>
  );
};`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="font-semibold text-blue-800 mb-3">Performance Monitoring</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`// Performance monitoring for reflows/repaints
class RenderPerformanceMonitor {
  constructor() {
    this.metrics = {
      reflows: 0,
      repaints: 0,
      longTasks: [],
      memoryUsage: []
    };
    
    this.setupMonitoring();
  }

  setupMonitoring() {
    // Monitor long tasks (>50ms)
    if ('PerformanceLongTaskTiming' in window) {
      new PerformanceObserver((list) => {
        list.getEntries().forEach(entry => {
          this.metrics.longTasks.push({
            duration: entry.duration,
            startTime: entry.startTime,
            name: entry.name
          });
          
          console.warn('Long task detected:', entry.duration + 'ms');
        });
      }).observe({ entryTypes: ['longtask'] });
    }

    // Monitor layout shifts
    new PerformanceObserver((list) => {
      list.getEntries().forEach(entry => {
        console.warn('Layout shift:', {
          value: entry.value,
          sources: entry.sources?.map(source => ({
            element: source.node,
            previousRect: source.previousRect,
            currentRect: source.currentRect
          }))
        });
      });
    }).observe({ entryTypes: ['layout-shift'] });

    // Monitor memory usage
    this.monitorMemory();
  }

  monitorMemory() {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = performance.memory;
        this.metrics.memoryUsage.push({
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
          timestamp: Date.now()
        });
        
        // Keep only recent data
        if (this.metrics.memoryUsage.length > 100) {
          this.metrics.memoryUsage.shift();
        }
      }, 5000);
    }
  }

  // Detect potential performance issues
  detectPerformanceIssues() {
    const issues = [];

    // Check for frequent long tasks
    const recentLongTasks = this.metrics.longTasks.filter(
      task => Date.now() - task.startTime < 60000 // Last minute
    );
    
    if (recentLongTasks.length > 5) {
      issues.push({
        type: 'frequent-long-tasks',
        severity: 'high',
        count: recentLongTasks.length,
        suggestion: 'Consider breaking up long-running operations'
      });
    }

    // Check memory growth
    if (this.metrics.memoryUsage.length > 10) {
      const recent = this.metrics.memoryUsage.slice(-10);
      const growth = recent[recent.length - 1].used - recent[0].used;
      
      if (growth > 10 * 1024 * 1024) { // 10MB growth
        issues.push({
          type: 'memory-growth',
          severity: 'medium',
          growth: \`\${Math.round(growth / 1024 / 1024)}MB\`,
          suggestion: 'Check for memory leaks'
        });
      }
    }

    return issues;
  }

  generateReport() {
    return {
      metrics: this.metrics,
      issues: this.detectPerformanceIssues(),
      recommendations: this.getRecommendations()
    };
  }

  getRecommendations() {
    return [
      'Use transform and opacity for animations',
      'Batch DOM read/write operations',
      'Implement virtual scrolling for large lists',
      'Use CSS containment for isolated components',
      'Optimize images and use modern formats',
      'Implement proper caching strategies'
    ];
  }
}

// Initialize monitoring
const perfMonitor = new RenderPerformanceMonitor();

// Usage in React components
const PerformanceAwareComponent = () => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const checkPerformance = () => {
      const report = perfMonitor.generateReport();
      
      if (report.issues.length > 0) {
        console.warn('Performance issues detected:', report.issues);
        setIsOptimized(false);
      } else {
        setIsOptimized(true);
      }
    };

    const interval = setInterval(checkPerformance, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={\`performance-indicator \${isOptimized ? 'optimized' : 'needs-optimization'}\`}>
      Performance Status: {isOptimized ? '✅ Good' : '⚠️ Needs Attention'}
    </div>
  );
};`}</code>
              </pre>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="font-semibold text-green-800 mb-3">CSS Optimization Best Practices</h4>
            <div className="bg-gray-900 text-white p-4 rounded">
              <pre className="text-xs overflow-x-auto">
                <code>{`/* CSS optimization for performance */

/* Use CSS containment */
.isolated-component {
  contain: layout style paint;
}

.list-container {
  contain: layout;
}

/* Optimize animations */
@keyframes slideIn {
  from {
    transform: translateX(-100%);
    /* Avoid animating width, height, top, left */
  }
  to {
    transform: translateX(0%);
  }
}

/* Use will-change sparingly */
.animated-element {
  will-change: transform, opacity;
}

.animated-element.animation-complete {
  will-change: auto; /* Remove after animation */
}

/* Optimize selectors */
/* Good - specific and efficient */
.header-nav .menu-item {}

/* Bad - expensive universal selector */
* .menu-item {}

/* Bad - complex descendant selector */
.header .nav ul li a span {}

/* Use efficient layout properties */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
  /* More performant than float-based layouts */
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  /* Better than margin-based spacing */
}

/* Optimize images in CSS */
.hero-background {
  background-image: 
    image-set(
      url('hero.avif') type('image/avif'),
      url('hero.webp') type('image/webp'),
      url('hero.jpg') type('image/jpeg')
    );
  background-size: cover;
  background-position: center;
}

/* Use logical properties for better performance */
.content-block {
  margin-inline: auto;
  padding-block: 2rem;
  inline-size: 100%;
  /* Better than margin-left/right, padding-top/bottom, width */
}

/* Optimize CSS custom properties */
:root {
  --primary-color: hsl(220 90% 50%);
  --spacing-unit: 0.5rem;
  --border-radius: calc(var(--spacing-unit) * 0.5);
}

.component {
  color: var(--primary-color);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}

/* Use CSS layers for better organization */
@layer reset, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer components {
  .button { /* component styles */ }
}

@layer utilities {
  .sr-only { /* utility styles */ }
}

/* Optimize font loading */
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2'),
       url('font.woff') format('woff');
  font-display: swap; /* Improve perceived performance */
  font-weight: 100 900; /* Variable font range */
}

/* Use container queries for responsive components */
.card-container {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}

/* Optimize critical CSS */
/* Above-the-fold styles should be inlined */
.header,
.hero,
.navigation {
  /* Critical styles here */
}

/* Non-critical styles can be loaded asynchronously */
.footer,
.sidebar,
.modal {
  /* Non-critical styles */
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-lg p-6">
        <h3 className="text-emerald-800 font-semibold mb-4">🚀 Frontend Optimization Checklist</h3>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <strong className="text-emerald-700">Code Optimization:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Implement code splitting</li>
              <li>□ Use lazy loading</li>
              <li>□ Minify and compress assets</li>
              <li>□ Tree shake unused code</li>
              <li>□ Optimize bundle size</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Assets & Media:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Use modern image formats</li>
              <li>□ Implement responsive images</li>
              <li>□ Optimize image compression</li>
              <li>□ Set up progressive loading</li>
              <li>□ Configure CDN</li>
            </ul>
          </div>
          <div>
            <strong className="text-emerald-700">Rendering:</strong>
            <ul className="text-emerald-600 mt-1 space-y-1">
              <li>□ Batch DOM operations</li>
              <li>□ Use transform/opacity for animations</li>
              <li>□ Implement virtual scrolling</li>
              <li>□ Optimize CSS selectors</li>
              <li>□ Monitor performance metrics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}