
export default function JavaScriptFrontendContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">2.3 JavaScript for Frontend</h1>
      
      {/* Learning Objectives */}
      <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
        <h3 className="text-orange-800 font-semibold mb-3">What You'll Master</h3>
        <ul className="text-orange-700 space-y-2">
          <li>• DOM manipulation and traversal techniques</li>
          <li>• Event handling and event delegation</li>
          <li>• Asynchronous JavaScript (Promises, async/await)</li>
          <li>• Fetch API for HTTP requests</li>
          <li>• ES6+ modules and modern JavaScript features</li>
          <li>• Error handling and debugging strategies</li>
        </ul>
      </div>

      {/* DOM Manipulation */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">DOM Manipulation Mastery</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">DOM Selection & Manipulation</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// Modern DOM selection methods
const element = document.querySelector('.my-class');
const elements = document.querySelectorAll('[data-type="card"]');
const byId = document.getElementById('header');

// Creating and modifying elements
const newDiv = document.createElement('div');
newDiv.className = 'card';
newDiv.setAttribute('data-id', '123');
newDiv.innerHTML = \`
  <h3>Product Title</h3>
  <p>Product description here</p>
  <button class="btn">Add to Cart</button>
\`;

// Inserting elements
const container = document.querySelector('.container');
container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);

// Modern insertion methods
container.prepend(newDiv);           // Insert at beginning
container.append(newDiv);            // Insert at end
newDiv.before(otherElement);         // Insert before element
newDiv.after(otherElement);          // Insert after element

// Removing elements
element.remove();                    // Modern way
parent.removeChild(element);         // Legacy way

// Modifying content and attributes
element.textContent = 'New text';    // Text only
element.innerHTML = '<strong>HTML</strong>'; // HTML content
element.style.backgroundColor = 'blue';
element.classList.add('active');
element.classList.toggle('hidden');
element.classList.remove('inactive');

// Dataset API for data attributes
element.dataset.userId = '123';      // Sets data-user-id="123"
const userId = element.dataset.userId; // Gets data-user-id value`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Performance Tips</h4>
            <ul className="text-sm text-blue-600 space-y-2">
              <li>• Use <code>querySelector</code> for single elements</li>
              <li>• Cache DOM references in variables</li>
              <li>• Use <code>DocumentFragment</code> for multiple insertions</li>
              <li>• Prefer <code>textContent</code> over <code>innerHTML</code> for text</li>
              <li>• Use <code>dataset</code> for custom data attributes</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">DOM Traversal</h4>
            <div className="bg-white p-3 rounded border text-xs">
              <pre><code>{`// Parent/child relationships
element.parentElement
element.children
element.firstElementChild
element.lastElementChild

// Sibling relationships
element.nextElementSibling
element.previousElementSibling

// Search within element
element.querySelector('.child')
element.querySelectorAll('.items')`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Event Handling */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Advanced Event Handling</h2>
        
        <div className="bg-white border rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Event Delegation & Modern Patterns</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Event delegation - handle events on parent
document.querySelector('.todo-list').addEventListener('click', (e) => {
  if (e.target.matches('.delete-btn')) {
    const todoItem = e.target.closest('.todo-item');
    todoItem.remove();
  }
  
  if (e.target.matches('.toggle-btn')) {
    const todoItem = e.target.closest('.todo-item');
    todoItem.classList.toggle('completed');
  }
});

// Custom events
function dispatchCustomEvent(element, eventName, data) {
  const customEvent = new CustomEvent(eventName, {
    detail: data,
    bubbles: true,
    cancelable: true
  });
  element.dispatchEvent(customEvent);
}

// Listen for custom events
document.addEventListener('userLoggedIn', (e) => {
  console.log('User data:', e.detail);
  updateUI(e.detail.user);
});

// Form handling with validation
const form = document.querySelector('#contact-form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  
  // Client-side validation
  if (!validateForm(data)) {
    showErrors(getValidationErrors(data));
    return;
  }
  
  try {
    const response = await submitForm(data);
    showSuccess('Form submitted successfully!');
    form.reset();
  } catch (error) {
    showError('Submission failed. Please try again.');
  }
});

// Debounced input handling
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const searchInput = document.querySelector('#search');
const debouncedSearch = debounce(performSearch, 300);
searchInput.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Async JavaScript */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Asynchronous JavaScript & API Integration</h2>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Modern Async Patterns</h3>
          <div className="bg-gray-900 text-white p-4 rounded-lg mb-4">
            <pre className="text-sm overflow-x-auto">
              <code>{`// Fetch API with async/await
class APIClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }
  
  async request(endpoint, options = {}) {
    const url = \`\${this.baseURL}\${endpoint}\`;
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    };
    
    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Request failed:', error);
      throw error;
    }
  }
  
  async get(endpoint) {
    return this.request(endpoint);
  }
  
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  }
  
  async delete(endpoint) {
    return this.request(endpoint, {
      method: 'DELETE'
    });
  }
}

// Usage example
const api = new APIClient('https://jsonplaceholder.typicode.com');

async function loadUserPosts(userId) {
  try {
    const [user, posts] = await Promise.all([
      api.get(\`/users/\${userId}\`),
      api.get(\`/users/\${userId}/posts\`)
    ]);
    
    displayUserProfile(user);
    displayPosts(posts);
  } catch (error) {
    showErrorMessage('Failed to load user data');
  }
}

// Error handling with retry logic
async function fetchWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;
      
      if (i === maxRetries - 1) throw new Error('Max retries reached');
      
      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    } catch (error) {
      if (i === maxRetries - 1) throw error;
    }
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-yellow-800 mb-4">Promise Patterns</h4>
            <div className="bg-white p-3 rounded border text-xs">
              <pre><code>{`// Promise.all - wait for all
const results = await Promise.all([
  fetch('/api/users'),
  fetch('/api/posts'),
  fetch('/api/comments')
]);

// Promise.allSettled - wait for all, don't fail fast
const results = await Promise.allSettled([
  fetch('/api/users'),
  fetch('/api/posts')
]);

// Promise.race - first to resolve
const result = await Promise.race([
  fetch('/api/data'),
  new Promise((_, reject) => 
    setTimeout(() => reject(new Error('Timeout')), 5000)
  )
]);`}</code></pre>
            </div>
          </div>
          
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Error Handling</h4>
            <div className="bg-white p-3 rounded border text-xs">
              <pre><code>{`// Try-catch with specific error handling
try {
  const data = await api.get('/users');
  processData(data);
} catch (error) {
  if (error.name === 'TypeError') {
    // Network error
    showOfflineMessage();
  } else if (error.message.includes('404')) {
    // Not found
    showNotFoundMessage();
  } else {
    // General error
    showGenericError();
  }
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Project */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">🚀 Build Project: Interactive Task Manager</h3>
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Features to implement:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Add, edit, delete tasks with DOM manipulation</li>
            <li>• Drag-and-drop reordering with event delegation</li>
            <li>• Local storage persistence with async operations</li>
            <li>• Search and filter functionality with debouncing</li>
            <li>• API integration for cloud sync (optional)</li>
            <li>• Custom events for inter-component communication</li>
          </ul>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 p-4 rounded">
          <p className="text-orange-800 text-sm">
            <strong>🎯 Advanced:</strong> Add keyboard shortcuts, offline detection, 
            service worker for caching, and progressive web app features.
          </p>
        </div>
      </div>
    </div>
  );
}