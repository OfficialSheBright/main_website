import { CourseConfig } from "./index";

export interface Topic {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  locked?: boolean;
  subtopics: string[];
  prerequisites?: string[];
  learningObjectives?: string[];
  resources?: {
    videos?: string[];
    articles?: string[];
    exercises?: string[];
    quizzes?: string[];
  };
}

export const blockchainWeb3Config: CourseConfig = {
  id: "blockchain-web3",
  title: "Complete Blockchain & Web3 Development Course",
  description: "Master blockchain development from fundamentals to advanced protocol engineering with DeFi, NFTs, ZK-proofs, and industry-level projects",
  totalHours: 320,
  difficulty: "Intermediate",
  skillLevel: "Intermediate",
  targetAudience: [
    "Software developers entering Web3",
    "Backend engineers seeking blockchain expertise",
    "Entrepreneurs building decentralized applications",
    "Students pursuing blockchain development careers"
  ],
  certification: {
    available: true,
    requirements: {
      minProgressPercentage: 90,
      capstoneProjectRequired: true,
      minProjectScore: 85
    }
  },
  modules: [
    {
      id: "blockchain-web3-foundations",
      title: "MODULE 1 — Blockchain & Web3 Foundations",
      topics: [
        {
          id: "blockchain-web3-foundations",
          title: "1.1 Introduction to Blockchain",
          duration: "140 min",
          completed: false,
          subtopics: [
            "What is blockchain?",
            "Blockchain structure (blocks, hashes, Merkle trees)",
            "Consensus mechanisms (PoW, PoS, DPoS, PoA)",
            "Nodes, miners, validators",
            "Public vs private blockchains"
          ]
        },
        {
          id: "web3-essentials",
          title: "1.2 Web3 Essentials",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Web1 → Web2 → Web3 evolution",
            "Wallets & key management",
            "EVM fundamentals",
            "Gas, transactions, nonce, opcodes",
            "RPC nodes & providers"
          ]
        },
        {
          id: "cryptography-blockchain",
          title: "1.3 Cryptography for Blockchain",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Hashing",
            "Digital signatures",
            "ECDSA",
            "Zero-knowledge basics",
            "Merkle proofs"
          ]
        }
      ]
    },
    {
      id: "smart-contract-development",
      title: "MODULE 2 — Smart Contract Development (Solidity & Rust)",
      topics: [
        {
          id: "solidity-basics",
          title: "2.1 Solidity Basics",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Smart contract structure",
            "Data types & variables",
            "Mappings, arrays, structs",
            "Events & modifiers",
            "Constructors"
          ]
        },
        {
          id: "solidity-interactions-security",
          title: "2.2 Interactions & Security",
          duration: "140 min",
          completed: false,
          subtopics: [
            "msg.sender / msg.value",
            "Fallback & receive",
            "Safe math & integer handling",
            "Reentrancy protection",
            "Access control (Ownable, RBAC)"
          ]
        },
        {
          id: "advanced-solidity",
          title: "2.3 Advanced Solidity",
          duration: "180 min",
          completed: false,
          subtopics: [
            "Inheritance",
            "Libraries & interfaces",
            "Proxy patterns (UUPS, Transparent)",
            "Gas optimizations",
            "Assembly (Yul)",
            "ERC standards:",
            "ERC-20",
            "ERC-721",
            "ERC-1155"
          ]
        },
        {
          id: "solidity-tools-frameworks",
          title: "2.4 Tools & Frameworks",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Hardhat",
            "Foundry",
            "Truffle",
            "Tenderly",
            "Slither, Echidna (security)"
          ]
        },
        {
          id: "rust-basics",
          title: "2.5 Rust Basics",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Ownership & borrowing",
            "Traits",
            "Macros",
            "Memory safety"
          ]
        },
        {
          id: "solana-development",
          title: "2.6 Solana Development",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Program accounts",
            "PDA (Program Derived Addresses)",
            "CPI calls",
            "SPL tokens"
          ]
        },
        {
          id: "near-smart-contracts",
          title: "2.7 NEAR Smart Contracts",
          duration: "130 min",
          completed: false,
          subtopics: [
            "WASM-based",
            "Storage & state",
            "Gas metering",
            "Cross-contract calls"
          ]
        },
        {
          id: "substrate-polkadot",
          title: "2.8 Substrate / Polkadot",
          duration: "150 min",
          completed: false,
          subtopics: [
            "FRAME pallets",
            "Runtime modules",
            "Extrinsics",
            "On-chain logic"
          ]
        }
      ]
    },
    {
      id: "fullstack-web3-development",
      title: "MODULE 3 — Full-Stack Web3 Development",
      topics: [
        {
          id: "web3-frontend",
          title: "3.1 Web3 Frontend",
          duration: "140 min",
          completed: false,
          subtopics: [
            "React + TypeScript",
            "Next.js",
            "Vite/traditional setups",
            "Ethers.js / viem / web3.js"
          ]
        },
        {
          id: "wallet-integration",
          title: "3.2 Wallet Integration",
          duration: "120 min",
          completed: false,
          subtopics: [
            "MetaMask",
            "WalletConnect",
            "RainbowKit",
            "Account abstraction basics"
          ]
        },
        {
          id: "backend-web3",
          title: "3.3 Backend for Web3",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Node.js APIs",
            "Event listeners",
            "WebSockets",
            "Indexers (The Graph, SubQuery)"
          ]
        },
        {
          id: "dapp-architecture",
          title: "3.4 dApp Architecture",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Off-chain & on-chain components",
            "Gasless transactions",
            "Data storage: IPFS, Arweave, Filecoin",
            "Security for dApps"
          ]
        }
      ]
    },
    {
      id: "defi-development",
      title: "MODULE 4 — DeFi Development",
      topics: [
        {
          id: "defi-basics",
          title: "4.1 DeFi Basics",
          duration: "140 min",
          completed: false,
          subtopics: [
            "AMMs, LP tokens",
            "Stablecoins",
            "Lending/borrowing",
            "Liquidity mining",
            "Oracles (Chainlink, Pyth)"
          ]
        },
        {
          id: "building-defi-protocols",
          title: "4.2 Building DeFi Protocols",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Uniswap V2 architecture",
            "Constant product AMM",
            "Yield farming contracts",
            "Lending protocols (Aave model)",
            "Liquidation system design"
          ]
        },
        {
          id: "advanced-defi",
          title: "4.3 Advanced DeFi",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Uniswap V3 concentrated liquidity",
            "Flash loans",
            "On-chain arbitrage",
            "MEV & frontrunning",
            "Risk management mechanisms"
          ]
        },
        {
          id: "security-defi",
          title: "4.4 Security in DeFi",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Oracle manipulation",
            "Flash loan attacks",
            "Reentrancy in AMMs",
            "Invariant checks"
          ]
        }
      ]
    },
    {
      id: "nft-dapp-development",
      title: "MODULE 5 — NFT & dApp Development",
      topics: [
        {
          id: "nft-fundamentals",
          title: "5.1 NFT Fundamentals",
          duration: "120 min",
          completed: false,
          subtopics: [
            "ERC-721",
            "ERC-1155",
            "Metadata standards",
            "Royalties (EIP-2981)"
          ]
        },
        {
          id: "nft-smart-contracts",
          title: "5.2 NFT Smart Contracts",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Minting mechanisms",
            "Allowlists",
            "Reveal systems",
            "Randomness (Chainlink VRF)"
          ]
        },
        {
          id: "nft-infrastructure",
          title: "5.3 NFT Infrastructure",
          duration: "110 min",
          completed: false,
          subtopics: [
            "IPFS pinning",
            "NFT storage solutions",
            "Dynamic NFTs"
          ]
        },
        {
          id: "end-to-end-nft-dapp",
          title: "5.4 End-to-End NFT dApp",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Marketplace development",
            "Lazy minting",
            "Auction contracts",
            "NFT indexer setups"
          ]
        }
      ]
    },
    {
      id: "layer2-zk-development",
      title: "MODULE 6 — Layer-2 & Zero-Knowledge Development",
      topics: [
        {
          id: "l2-fundamentals",
          title: "6.1 L2 Fundamentals",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Rollup types:",
            "Optimistic rollups",
            "ZK rollups",
            "Sequencers & provers",
            "Settlement layers"
          ]
        },
        {
          id: "zk-cryptography",
          title: "6.2 ZK Cryptography",
          duration: "150 min",
          completed: false,
          subtopics: [
            "SNARKs vs STARKs",
            "Circuits",
            "Trusted setups",
            "Polynomial IOPs"
          ]
        },
        {
          id: "zk-programming",
          title: "6.3 ZK Programming",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Circom",
            "Noir",
            "Halo2",
            "Cairo (StarkNet)"
          ]
        },
        {
          id: "l2-development-frameworks",
          title: "6.4 L2 Development Frameworks",
          duration: "140 min",
          completed: false,
          subtopics: [
            "zkSync",
            "Polygon zkEVM",
            "StarkNet",
            "Arbitrum Nitro",
            "Optimism Bedrock"
          ]
        },
        {
          id: "building-zk-enabled-dapps",
          title: "6.5 Building ZK-Enabled dApps",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Proof generation",
            "Verifiers on-chain",
            "Privacy-preserving apps (mixers, anonymous voting systems)"
          ]
        }
      ]
    },
    {
      id: "crypto-infrastructure-engineering",
      title: "MODULE 7 — Crypto Infrastructure Engineering",
      topics: [
        {
          id: "node-operation",
          title: "7.1 Node Operation",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Ethereum full node",
            "Light nodes",
            "Validator nodes",
            "Running Solana/Polygon/BNB nodes"
          ]
        },
        {
          id: "indexing-data-infrastructure",
          title: "7.2 Indexing & Data Infrastructure",
          duration: "130 min",
          completed: false,
          subtopics: [
            "The Graph",
            "Custom indexers",
            "Substrate indexing",
            "Blockchain data extraction"
          ]
        },
        {
          id: "wallet-infrastructure",
          title: "7.3 Wallet Infrastructure",
          duration: "150 min",
          completed: false,
          subtopics: [
            "HD wallets",
            "MPC wallets",
            "Threshold signatures (TSS)",
            "Key management systems (KMS)"
          ]
        },
        {
          id: "blockchain-devops",
          title: "7.4 Blockchain DevOps",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Dockerized blockchain setups",
            "CI/CD for smart contracts",
            "Monitoring nodes",
            "Failover strategies"
          ]
        }
      ]
    },
    {
      id: "blockchain-protocol-development",
      title: "MODULE 8 — Blockchain Protocol Development",
      topics: [
        {
          id: "protocol-internals",
          title: "8.1 Protocol Internals",
          duration: "160 min",
          completed: false,
          subtopics: [
            "State transitions",
            "Consensus implementation",
            "Peer-to-peer networking",
            "Gas metering",
            "Virtual machines (EVM, SVM, WASM)"
          ]
        },
        {
          id: "building-custom-blockchain",
          title: "8.2 Building a Custom Blockchain",
          duration: "180 min",
          completed: false,
          subtopics: [
            "Using Substrate",
            "Custom pallets",
            "Chain specification",
            "Runtime upgrades"
          ]
        },
        {
          id: "advanced-protocol-topics",
          title: "8.3 Advanced Protocol Topics",
          duration: "170 min",
          completed: false,
          subtopics: [
            "MEV mitigation",
            "Data availability (DAS)",
            "Danksharding basics",
            "BFT consensus algorithms"
          ]
        },
        {
          id: "security-formal-verification",
          title: "8.4 Security & Formal Verification",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Auditing low-level blockchain code",
            "Formal proofs",
            "Model checking"
          ]
        }
      ]
    },
    {
      id: "security-web3",
      title: "MODULE 9 — Security in Web3",
      topics: [
        {
          id: "smart-contract-security",
          title: "9.1 Smart Contract Security",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Reentrancy",
            "Flash loan attacks",
            "Delegatecall misuse",
            "Front-running / MEV attacks",
            "Integer overflows",
            "Denial of service"
          ]
        },
        {
          id: "protocol-security",
          title: "9.2 Protocol Security",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Economic attacks",
            "Validator attacks",
            "DOS on L2 sequencers"
          ]
        },
        {
          id: "wallet-key-security",
          title: "9.3 Wallet & Key Security",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Seed phrase attacks",
            "Phishing",
            "MPC failures"
          ]
        }
      ]
    },
    {
      id: "capstone-web3-projects",
      title: "MODULE 10 — Capstone Web3 Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "10.1 Capstone Project Development",
          duration: "600 min",
          completed: false,
          subtopics: [
            "ERC-20 & ERC-721 token suite",
            "Full DeFi protocol (DEX + lending + staking)",
            "NFT marketplace with royalties",
            "ZK-proof based anonymous voting app",
            "Hybrid on-chain/off-chain dApp",
            "Wallet with account abstraction (ERC-4337)",
            "Custom blockchain using Substrate",
            "Custom rollup",
            "Smart contract security audit report",
            "MEV bot (educational)",
            "Architecture",
            "Smart contract implementation",
            "Frontend integration",
            "Deployment",
            "Documentation",
            "Security analysis"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 11 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your blockchain & Web3 projects for review",
            "Ensure all smart contract security requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 10, // 10% weight
    practicalExercises: 50, // 50% weight
    capstoneProjects: 40 // 40% weight
  },
  
  careerOutcomes: [
    "Blockchain Developer",
    "Smart Contract Engineer",
    "DeFi Protocol Developer",
    "Web3 Full-Stack Developer",
    "Blockchain Security Auditor",
    "Protocol Engineer",
    "NFT Platform Developer",
    "Layer-2 Developer",
    "Crypto Infrastructure Engineer"
  ],
  
  technologiesCovered: [
    "Solidity", "Rust", "JavaScript", "TypeScript", "React", "Next.js",
    "Hardhat", "Foundry", "Truffle", "Ethers.js", "Web3.js", "viem",
    "MetaMask", "WalletConnect", "IPFS", "Arweave", "The Graph",
    "Chainlink", "OpenZeppelin", "Slither", "Echidna", "Tenderly",
    "zkSync", "Polygon", "Arbitrum", "Optimism", "StarkNet",
    "Circom", "Noir", "Cairo", "Substrate", "Polkadot", "Solana"
  ]
};