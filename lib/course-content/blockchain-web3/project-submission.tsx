"use client";
import ProjectSubmission from "../../../components/ProjectSubmission";
import { ContentComponentProps } from "./index";

export default function ProjectSubmissionModule({ 
  onInteraction, 
}: ContentComponentProps) {

  const handleSubmissionComplete = () => {
    onInteraction?.("project_submitted", { 
      courseId: "blockchain-web3",
      module: "project-submission",
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-8">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            📚 Final Assessment
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Project Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Demonstrate your mastery of blockchain and Web3 by building and submitting a complete decentralized application (dApp) or blockchain solution that showcases your skills in smart contracts, distributed systems, and user experience.
          </p>
        </div>

        {/* Learning Outcomes */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🎯 What You&apos;ll Accomplish
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Goals:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Apply blockchain and Web3 concepts in a real-world project
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Build a secure, functional, and user-friendly dApp or blockchain solution
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Demonstrate proficiency in smart contract development and integration
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✅</span>
                  Create a portfolio-worthy project
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Assessment Criteria:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🔗</span>
                  Smart contract design and security (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⚙️</span>
                  Technical implementation and integration (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🖥️</span>
                  User experience and frontend (25%)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🚀</span>
                  Documentation and presentation (25%)
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            🔧 Technical Requirements
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Smart Contracts</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Written in Solidity, Rust, or other blockchain language</li>
                <li>• Deployed to a testnet or mainnet</li>
                <li>• Security best practices (auditing, testing)</li>
                <li>• Clear documentation and comments</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">dApp/Frontend</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Web3 integration (ethers.js, web3.js, etc.)</li>
                <li>• User authentication (wallet connect, MetaMask, etc.)</li>
                <li>• Responsive and accessible UI</li>
                <li>• Error handling and feedback</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">DevOps & Quality</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Version control (Git)</li>
                <li>• Automated testing (unit/integration)</li>
                <li>• Deployment instructions or live demo</li>
                <li>• Code and project documentation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Project Ideas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            💡 Project Ideas & Inspiration
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "NFT Marketplace",
                description: "A platform to mint, buy, and sell NFTs with wallet integration.",
                difficulty: "Advanced",
                color: "blue"
              },
              {
                title: "Decentralized Voting App",
                description: "A secure, transparent voting system using smart contracts.",
                difficulty: "Intermediate", 
                color: "green"
              },
              {
                title: "DeFi Lending Platform",
                description: "A decentralized finance app for lending and borrowing crypto assets.",
                difficulty: "Advanced",
                color: "purple"
              },
              {
                title: "Token-Based Membership System",
                description: "Manage access and privileges using blockchain tokens.",
                difficulty: "Intermediate",
                color: "orange"
              },
              {
                title: "Supply Chain Tracker",
                description: "Track products and verify authenticity on the blockchain.",
                difficulty: "Advanced",
                color: "red"
              },
              {
                title: "DAO Governance Portal", 
                description: "A dashboard for decentralized autonomous organization proposals and voting.",
                difficulty: "Intermediate",
                color: "indigo"
              }
            ].map((idea, index) => (
              <div key={index} className={`bg-${idea.color}-50 border border-${idea.color}-200 rounded-lg p-6`}>
                <h3 className={`text-lg font-semibold text-${idea.color}-900 mb-2`}>{idea.title}</h3>
                <p className={`text-${idea.color}-700 text-sm mb-3`}>{idea.description}</p>
                <span className={`inline-block bg-${idea.color}-100 text-${idea.color}-800 px-2 py-1 rounded-full text-xs font-semibold`}>
                  {idea.difficulty}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>💡 Pro Tip:</strong> Choose a project that excites you and demonstrates real-world blockchain value!
            </p>
          </div>
        </div>

        {/* Submission Component */}
        <ProjectSubmission 
          courseId="blockchain-web3"
          courseName="Blockchain & Web3"
          onSubmissionComplete={handleSubmissionComplete}
        />

        {/* Additional Resources */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            📚 Additional Resources
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Blockchain Tools & Platforms:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://ethereum.org/" className="text-blue-600 hover:underline">Ethereum</a> - Smart contract platform</li>
                <li>• <a href="https://soliditylang.org/" className="text-blue-600 hover:underline">Solidity</a> - Smart contract language</li>
                <li>• <a href="https://hardhat.org/" className="text-blue-600 hover:underline">Hardhat</a> - Ethereum development environment</li>
                <li>• <a href="https://trufflesuite.com/" className="text-blue-600 hover:underline">Truffle Suite</a> - dApp development tools</li>
                <li>• <a href="https://metamask.io/" className="text-blue-600 hover:underline">MetaMask</a> - Wallet for dApps</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learning & Documentation:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <a href="https://web3js.readthedocs.io/" className="text-blue-600 hover:underline">web3.js Docs</a> - Web3 JavaScript API</li>
                <li>• <a href="https://docs.ethers.io/" className="text-blue-600 hover:underline">ethers.js Docs</a> - Ethereum library</li>
                <li>• <a href="https://docs.chain.link/" className="text-blue-600 hover:underline">Chainlink Docs</a> - Decentralized oracles</li>
                <li>• <a href="https://cryptozombies.io/" className="text-blue-600 hover:underline">CryptoZombies</a> - Learn Solidity by building games</li>
                <li>• <a href="https://dune.com/" className="text-blue-600 hover:underline">Dune Analytics</a> - Blockchain analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}