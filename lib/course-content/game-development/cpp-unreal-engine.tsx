export default function CppUnrealEngineContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-800">C++ for Unreal Engine</h2>
      <p className="text-gray-600">
        C++ is the core programming language for Unreal Engine, enabling high-performance gameplay, custom systems, and deep engine integration.  
        Mastering C++ in Unreal unlocks advanced features and professional game development workflows.
      </p>

      {/* INFO BOX */}
      <div className="p-4 border-l-4 border-blue-500 bg-blue-100 rounded">
        <h3 className="font-semibold text-blue-800">Why C++ in Unreal?</h3>
        <p className="text-blue-700">
          C++ provides full control over game logic, memory, and engine features, allowing you to build complex, optimized games.
        </p>
      </div>

      {/* SECTION 1 */}
      <h3 className="text-2xl font-bold text-gray-800">1. UE Class Structure</h3>
      <ul>
        <li>Understand Actors, Pawns, Components, and Controllers</li>
        <li>Extend base classes for custom gameplay objects</li>
        <li>Organize code for scalability and maintainability</li>
      </ul>

      {/* SECTION 2 */}
      <h3 className="text-2xl font-bold text-gray-800">2. UObject System</h3>
      <ul>
        <li>Use UObject as the base for most Unreal classes</li>
        <li>Leverage reflection, serialization, and garbage collection</li>
        <li>Register properties and functions with UPROPERTY and UFUNCTION macros</li>
      </ul>

      {/* SECTION 3 */}
      <h3 className="text-2xl font-bold text-gray-800">3. Memory Management</h3>
      <ul>
        <li>Understand Unreal’s garbage collection and smart pointers</li>
        <li>Manage object lifetimes and references safely</li>
        <li>Optimize memory usage for performance</li>
      </ul>

      {/* SECTION 4 */}
      <h3 className="text-2xl font-bold text-gray-800">4. Gameplay Framework</h3>
      <ul>
        <li>Implement game rules, states, and player logic</li>
        <li>Use GameMode, GameState, and PlayerController classes</li>
        <li>Integrate C++ with Blueprints for flexible workflows</li>
      </ul>

      {/* CODE EXAMPLE */}
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
        <code>
{`// Example: Simple Unreal Actor class in C++
#include "GameFramework/Actor.h"
#include "MyActor.generated.h"

UCLASS()
class AMyActor : public AActor {
    GENERATED_BODY()
public:
    AMyActor();
    virtual void Tick(float DeltaTime) override;
};
`}
        </code>
      </pre>

      {/* APPLICATIONS BOX */}
      <div className="p-4 border-l-4 border-green-500 bg-green-100 rounded">
        <h3 className="font-semibold text-green-800">Applications of C++ in Unreal Engine</h3>
        <ul className="text-green-700 list-disc ml-6">
          <li>Custom gameplay systems and mechanics</li>
          <li>Performance-critical features</li>
          <li>Engine extensions and plugins</li>
          <li>Integration with Blueprints and editor tools</li>
        </ul>
      </div>

      {/* SUMMARY */}
      <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
      <p>
        C++ is essential for advanced Unreal Engine development.  
        Master these concepts to build powerful, professional games and interactive experiences.
      </p>
    </div>
  );
}