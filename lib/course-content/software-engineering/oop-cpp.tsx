export default function OopCppContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">OOP in C++</h2>
      <p className="text-gray-600">
        Object-Oriented Programming (OOP) in C++ enables you to design modular, reusable, and maintainable software using classes and objects.  
        Mastering OOP is essential for building complex systems and leveraging C++&lsquo;s full power.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why OOP in C++?</h3>
        <p className="text-blue-700">
          OOP allows you to model real-world entities, encapsulate data, and implement polymorphic behavior for flexible and scalable code.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. Classes, Inheritance, Polymorphism</h3>
      <ul>
        <li>Define classes with data members and methods</li>
        <li>Use inheritance to create hierarchies and reuse code</li>
        <li>Polymorphism enables dynamic method binding and interfaces</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. Templates</h3>
      <ul>
        <li>Generic programming with class and function templates</li>
        <li>Write reusable code for any data type</li>
        <li>Foundation for the Standard Template Library (STL)</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. STL: Vectors, Maps, Queues</h3>
      <ul>
        <li>STL provides efficient, type-safe containers and algorithms</li>
        <li>Common containers: <code>std::vector</code>, <code>std::map</code>, <code>std::queue</code></li>
        <li>Iterators and algorithms for flexible data manipulation</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple class with inheritance and STL vector
#include <iostream>
#include <vector>
class Animal {
public:
  virtual void speak() { std::cout << "Animal sound\\n"; }
};
class Dog : public Animal {
public:
  void speak() override { std::cout << "Woof!\\n"; }
};
int main() {
  std::vector<Animal*> animals;
  animals.push_back(new Animal());
  animals.push_back(new Dog());
  for (auto a : animals) a->speak();
  for (auto a : animals) delete a;
  return 0;
}
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of OOP in C++</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Game engines and simulations</li>
          <li>GUI frameworks and desktop applications</li>
          <li>Large-scale systems and libraries</li>
          <li>Reusable and maintainable codebases</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        OOP in C++ is foundational for building robust, modular, and scalable software.  
        Master these concepts to unlock the full potential of C++ in your projects.
      </p>
    </div>
  );
}