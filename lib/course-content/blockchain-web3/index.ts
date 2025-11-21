import BlockchainWeb3FoundationsContent from "./blockchain-web3-foundations";
import Web3EssentialsContent from "./web3-essentials";
import CryptographyBlockchainContent from "./cryptography-blockchain";
import SolidityBasicsContent from "./solidity-basics";
import SolidityInteractionsSecurityContent from "./solidity-interactions-security";
import AdvancedSolidityContent from "./advanced-solidity";
import SolidityToolsFrameworksContent from "./solidity-tools-frameworks";
import RustBasicsContent from "./rust-basics";
import SolanaDevelopmentContent from "./solana-development";
import NearSmartContractsContent from "./near-smart-contracts";
import SubstratePolkadotContent from "./substrate-polkadot";
import Web3FrontendContent from "./web3-frontend";
import WalletIntegrationContent from "./wallet-integration";
import BackendWeb3Content from "./backend-web3";
import DappArchitectureContent from "./dapp-architecture";
import DefiBasicsContent from "./defi-basics";
import BuildingDefiProtocolsContent from "./building-defi-protocols";
import AdvancedDefiContent from "./advanced-defi";
import SecurityDefiContent from "./security-defi";
import NftFundamentalsContent from "./nft-fundamentals";
import NftSmartContractsContent from "./nft-smart-contracts";
import NftInfrastructureContent from "./nft-infrastructure";
import EndToEndNftDappContent from "./end-to-end-nft-dapp";
import L2FundamentalsContent from "./l2-fundamentals";
import ZkCryptographyContent from "./zk-cryptography";
import ZkProgrammingContent from "./zk-programming";
import L2DevelopmentFrameworksContent from "./l2-development-frameworks";
import BuildingZkEnabledDappsContent from "./building-zk-enabled-dapps";
import NodeOperationContent from "./node-operation";
import IndexingDataInfrastructureContent from "./indexing-data-infrastructure";
import WalletInfrastructureContent from "./wallet-infrastructure";
import BlockchainDevopsContent from "./blockchain-devops";
import ProtocolInternalsContent from "./protocol-internals";
import BuildingCustomBlockchainContent from "./building-custom-blockchain";
import AdvancedProtocolTopicsContent from "./advanced-protocol-topics";
import SecurityFormalVerificationContent from "./security-formal-verification";
import SmartContractSecurityContent from "./smart-contract-security";
import ProtocolSecurityContent from "./protocol-security";
import WalletKeySecurityContent from "./wallet-key-security";
import CapstoneProjectDevelopmentContent from "./capstone-project-development";
import ProjectSubmissionModule from "./project-submission";

// Enhanced type definition with props interface
export interface ContentComponentProps {
  onInteraction?: (type: string, data: Record<string, unknown>) => void;
  userProgress?: unknown;
}

// Store the component functions, not JSX elements - exactly matching your course config
export const blockchainWeb3Content: Record<string, React.ComponentType<ContentComponentProps>> = {
  // Module 1: Blockchain & Web3 Foundations
  "blockchain-web3-foundations": BlockchainWeb3FoundationsContent,
  "web3-essentials": Web3EssentialsContent,
  "cryptography-blockchain": CryptographyBlockchainContent,

  // Module 2: Smart Contract Development (Solidity & Rust)
  "solidity-basics": SolidityBasicsContent,
  "solidity-interactions-security": SolidityInteractionsSecurityContent,
  "advanced-solidity": AdvancedSolidityContent,
  "solidity-tools-frameworks": SolidityToolsFrameworksContent,
  "rust-basics": RustBasicsContent,
  "solana-development": SolanaDevelopmentContent,
  "near-smart-contracts": NearSmartContractsContent,
  "substrate-polkadot": SubstratePolkadotContent,

  // Module 3: Full-Stack Web3 Development
  "web3-frontend": Web3FrontendContent,
  "wallet-integration": WalletIntegrationContent,
  "backend-web3": BackendWeb3Content,
  "dapp-architecture": DappArchitectureContent,

  // Module 4: DeFi Development
  "defi-basics": DefiBasicsContent,
  "building-defi-protocols": BuildingDefiProtocolsContent,
  "advanced-defi": AdvancedDefiContent,
  "security-defi": SecurityDefiContent,

  // Module 5: NFT & dApp Development
  "nft-fundamentals": NftFundamentalsContent,
  "nft-smart-contracts": NftSmartContractsContent,
  "nft-infrastructure": NftInfrastructureContent,
  "end-to-end-nft-dapp": EndToEndNftDappContent,

  // Module 6: Layer-2 & Zero-Knowledge Development
  "l2-fundamentals": L2FundamentalsContent,
  "zk-cryptography": ZkCryptographyContent,
  "zk-programming": ZkProgrammingContent,
  "l2-development-frameworks": L2DevelopmentFrameworksContent,
  "building-zk-enabled-dapps": BuildingZkEnabledDappsContent,

  // Module 7: Crypto Infrastructure Engineering
  "node-operation": NodeOperationContent,
  "indexing-data-infrastructure": IndexingDataInfrastructureContent,
  "wallet-infrastructure": WalletInfrastructureContent,
  "blockchain-devops": BlockchainDevopsContent,

  // Module 8: Blockchain Protocol Development
  "protocol-internals": ProtocolInternalsContent,
  "building-custom-blockchain": BuildingCustomBlockchainContent,
  "advanced-protocol-topics": AdvancedProtocolTopicsContent,
  "security-formal-verification": SecurityFormalVerificationContent,

  // Module 9: Security in Web3
  "smart-contract-security": SmartContractSecurityContent,
  "protocol-security": ProtocolSecurityContent,
  "wallet-key-security": WalletKeySecurityContent,

  // Module 10: Capstone Web3 Projects
  "capstone-project-development": CapstoneProjectDevelopmentContent,

  // Module 11: Final Assessment - Project Submission
  "project-submission": ProjectSubmissionModule,
};

// Utility function to get content component by topic ID
export const getTopicContent = (topicId: string): React.ComponentType<ContentComponentProps> | null => {
  return blockchainWeb3Content[topicId] || null;
};

// Utility function to check if topic content exists
export const hasTopicContent = (topicId: string): boolean => {
  return topicId in blockchainWeb3Content;
};

// Export topic IDs for validation
export const availableTopicIds = Object.keys(blockchainWeb3Content);

// Module groupings for easier content management (matching your course config)
export const moduleGroups = {
  "blockchain-web3-foundations": [
    "blockchain-web3-foundations",
    "web3-essentials",
    "cryptography-blockchain"
  ],
  "smart-contract-development": [
    "solidity-basics",
    "solidity-interactions-security",
    "advanced-solidity",
    "solidity-tools-frameworks",
    "rust-basics",
    "solana-development",
    "near-smart-contracts",
    "substrate-polkadot"
  ],
  "fullstack-web3-development": [
    "web3-frontend",
    "wallet-integration",
    "backend-web3",
    "dapp-architecture"
  ],
  "defi-development": [
    "defi-basics",
    "building-defi-protocols",
    "advanced-defi",
    "security-defi"
  ],
  "nft-dapp-development": [
    "nft-fundamentals",
    "nft-smart-contracts",
    "nft-infrastructure",
    "end-to-end-nft-dapp"
  ],
  "layer2-zk-development": [
    "l2-fundamentals",
    "zk-cryptography",
    "zk-programming",
    "l2-development-frameworks",
    "building-zk-enabled-dapps"
  ],
  "crypto-infrastructure-engineering": [
    "node-operation",
    "indexing-data-infrastructure",
    "wallet-infrastructure",
    "blockchain-devops"
  ],
  "blockchain-protocol-development": [
    "protocol-internals",
    "building-custom-blockchain",
    "advanced-protocol-topics",
    "security-formal-verification"
  ],
  "security-web3": [
    "smart-contract-security",
    "protocol-security",
    "wallet-key-security"
  ],
  "capstone-web3-projects": [
    "capstone-project-development"
  ],
  "project-submission": [
    "project-submission"
  ]
} as const;

// Get topics by module helper
export const getTopicsByModule = (moduleId: keyof typeof moduleGroups): string[] => {
  return moduleGroups[moduleId] || [];
};

// Course statistics
export const getCourseStats = () => {
  const totalTopics = Object.keys(blockchainWeb3Content).length;
  const moduleCount = Object.keys(moduleGroups).length;
  
  return {
    totalTopics,
    moduleCount,
    averageTopicsPerModule: Math.round(totalTopics / moduleCount),
    estimatedHours: 320,
    mainModules: 11,
    skillLevel: "Intermediate to Advanced",
    blockchains: ["Ethereum", "Solana", "NEAR", "Polkadot", "StarkNet", "zkSync", "Polygon"],
    specializations: ["DeFi", "NFTs", "Layer-2", "ZK-Proofs", "Protocol Development"]
  };
};