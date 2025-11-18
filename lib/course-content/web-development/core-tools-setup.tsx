
export default function CoreToolsSetupContent() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Core Tools & Environment Setup</h1>
      
      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8">
        <h3 className="text-purple-800 font-semibold mb-3">Essential Developer Tools</h3>
        <ul className="text-purple-700 space-y-2">
          <li>• VS Code with essential extensions</li>
          <li>• Git version control and GitHub</li>
          <li>• Terminal/Command line basics</li>
          <li>• Node.js and npm package manager</li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">VS Code Setup</h2>
        <p className="text-gray-700 mb-4">
          Visual Studio Code is the most popular code editor for web development.
        </p>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h4 className="font-semibold text-blue-800 mb-3">Recommended Extensions:</h4>
          <ul className="text-blue-700 space-y-1 text-sm">
            <li>• Auto Rename Tag</li>
            <li>• Bracket Pair Colorizer</li>
            <li>• ES7+ React/Redux/React-Native snippets</li>
            <li>• GitLens</li>
            <li>• Live Server</li>
            <li>• Prettier - Code formatter</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Git & GitHub</h2>
        <div className="bg-gray-900 text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Basic Git Commands</h3>
          <pre className="text-sm overflow-x-auto">
            <code>{`# Initialize a new repository
git init

# Add files to staging
git add .

# Commit changes
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/username/repo.git
git push -u origin main`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}