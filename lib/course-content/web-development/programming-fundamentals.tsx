export default function ProgrammingFundamentalsContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">1.3 Programming Fundamentals</h1>
      
      {/* Learning objectives and content for Programming Fundamentals */}
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">What You&apos;ll Master</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• JavaScript variables and data types</li>
          <li>• Control structures (loops, conditionals)</li>
          <li>• Functions and scope concepts</li>
          <li>• ES6+ modern JavaScript features</li>
        </ul>
      </div>

      {/* Variables and Data Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Variables and Data Types</h2>
        
        <div className="bg-gray-900 text-white p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Variable Declarations</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`// var - function-scoped, can be redeclared (avoid in modern JS)
var name = "John";
var name = "Jane"; // No error, but not recommended

// let - block-scoped, cannot be redeclared
let age = 25;
// let age = 30; // Error!
age = 30; // OK - can be reassigned

// const - block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // Error!

// const with objects (contents can change)
const user = { name: "John" };
user.name = "Jane"; // OK - modifying property
user.age = 25;      // OK - adding property`}</code>
          </pre>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-blue-800 mb-4">Primitive Types</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-blue-700">String</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-blue-600">{`let name = "John";
let greeting = \`Hello, \${name}!\`;`}</code>
                </pre>
              </div>
              <div>
                <h5 className="font-semibold text-blue-700">Number</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-blue-600">{`let integer = 42;
let decimal = 3.14;`}</code>
                </pre>
              </div>
              <div>
                <h5 className="font-semibold text-blue-700">Boolean</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-blue-600">{`let isActive = true;
let isComplete = false;`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-green-800 mb-4">Complex Types</h4>
            <div className="space-y-3">
              <div>
                <h5 className="font-semibold text-green-700">Array</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-green-600">{`let fruits = ["apple", "banana"];
let numbers = [1, 2, 3, 4, 5];`}</code>
                </pre>
              </div>
              <div>
                <h5 className="font-semibold text-green-700">Object</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-green-600">{`let person = {
  name: "John",
  age: 30
};`}</code>
                </pre>
              </div>
              <div>
                <h5 className="font-semibold text-green-700">Null/Undefined</h5>
                <pre className="text-xs bg-white p-2 rounded border mt-1">
                  <code className="text-green-600">{`let empty = null;
let notSet; // undefined`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Exercise */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">💻 Interactive Challenge: Temperature Converter</h3>
        <p className="text-gray-700 mb-4">
          Let&apos;s build a temperature converter to practice variables, functions, and control structures!
        </p>
        
        <div className="bg-white p-4 rounded border mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Your Task:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Create functions to convert Celsius ↔ Fahrenheit</li>
            <li>• Add input validation and error handling</li>
            <li>• Use ES6+ features like arrow functions and template literals</li>
            <li>• Test with different temperature values</li>
          </ul>
        </div>

        <div className="bg-gray-900 text-white p-4 rounded-lg">
          <h5 className="text-sm font-semibold mb-2">Starter Code:</h5>
          <pre className="text-xs overflow-x-auto">
            <code>{`// Create your temperature converter functions here
function celsiusToFahrenheit(celsius) {
  // Your code here
}

const fahrenheitToCelsius = (fahrenheit) => {
  // Your code here using arrow function
};

// Test your functions
console.log(celsiusToFahrenheit(0));    // Should output 32
console.log(fahrenheitToCelsius(212));  // Should output 100`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}