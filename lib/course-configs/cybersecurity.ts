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

export const cybersecurityConfig: CourseConfig = {
  id: "cybersecurity",
  title: "Complete Cybersecurity Course",
  description: "Master cybersecurity from foundations to advanced threat hunting with penetration testing, blockchain security, and industry-level projects",
  totalHours: 280,
  difficulty: "Intermediate to Advanced",
  skillLevel: "Intermediate",
  targetAudience: [
    "IT professionals transitioning to cybersecurity",
    "Software developers seeking security expertise",
    "Network administrators pursuing security roles",
    "Students pursuing cybersecurity careers"
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
      id: "cybersecurity-foundations",
      title: "MODULE 1 — Cybersecurity Foundations",
      topics: [
        {
          id: "introduction-cybersecurity",
          title: "1.1 Introduction to Cybersecurity",
          duration: "120 min",
          completed: false,
          subtopics: [
            "CIA triad (Confidentiality, Integrity, Availability)",
            "Threats, vulnerabilities, exploits",
            "Attack lifecycle (Kill Chain)",
            "Cybersecurity roles & domains"
          ]
        },
        {
          id: "security-concepts",
          title: "1.2 Security Concepts",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Risk assessment",
            "Security controls (physical, technical, administrative)",
            "Cryptography basics",
            "Authentication & authorization",
            "Access control models (RBAC, ABAC, MAC, DAC)"
          ]
        },
        {
          id: "tools-environment-setup",
          title: "1.3 Tools & Environment Setup",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Kali Linux",
            "Parrot OS",
            "Burp Suite",
            "Nmap",
            "Wireshark",
            "Metasploit",
            "OWASP ZAP"
          ]
        }
      ]
    },
    {
      id: "application-security",
      title: "MODULE 2 — Application Security (AppSec)",
      topics: [
        {
          id: "web-application-security",
          title: "2.1 Web Application Security",
          duration: "180 min",
          completed: false,
          subtopics: [
            "HTTP fundamentals",
            "Web application architecture",
            "OWASP Top 10 vulnerabilities:",
            "SQL Injection",
            "XSS",
            "CSRF",
            "SSRF",
            "RCE",
            "Insecure deserialization",
            "Broken Access Control",
            "Security Misconfigurations"
          ]
        },
        {
          id: "secure-coding-practices",
          title: "2.2 Secure Coding Practices",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Input validation & sanitization",
            "Secure authentication flows",
            "Secrets management",
            "Safe error handling",
            "Dependency scanning"
          ]
        },
        {
          id: "api-security",
          title: "2.3 API Security",
          duration: "140 min",
          completed: false,
          subtopics: [
            "REST API vulnerabilities",
            "OAuth & JWT security",
            "API throttling & rate limiting",
            "OWASP API Top 10",
            "GraphQL security"
          ]
        },
        {
          id: "mobile-application-security",
          title: "2.4 Mobile Application Security",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Android application security",
            "iOS security model",
            "Reverse engineering (APKTool, Frida, Objection)"
          ]
        }
      ]
    },
    {
      id: "network-security",
      title: "MODULE 3 — Network Security",
      topics: [
        {
          id: "network-fundamentals",
          title: "3.1 Network Fundamentals",
          duration: "130 min",
          completed: false,
          subtopics: [
            "OSI & TCP/IP models",
            "Protocols (DNS, DHCP, ARP, HTTPS, SSH, VPN)",
            "Firewalls, IDS, IPS"
          ]
        },
        {
          id: "attacks-on-networks",
          title: "3.2 Attacks on Networks",
          duration: "160 min",
          completed: false,
          subtopics: [
            "MITM attacks",
            "ARP spoofing",
            "DNS poisoning",
            "Packet sniffing",
            "Wi-Fi hacking (WPA2/WPA3)"
          ]
        },
        {
          id: "network-defense",
          title: "3.3 Network Defense",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Network segmentation",
            "SIEM systems (Splunk, ELK, QRadar)",
            "Zero Trust Architecture",
            "Endpoint security (EDR/XDR)"
          ]
        },
        {
          id: "secure-network-design",
          title: "3.4 Secure Network Design",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Load balancers",
            "Reverse proxies",
            "VPN design",
            "Secure cloud networking"
          ]
        }
      ]
    },
    {
      id: "penetration-testing",
      title: "MODULE 4 — Penetration Testing / Ethical Hacking",
      topics: [
        {
          id: "reconnaissance",
          title: "4.1 Reconnaissance",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Passive & active recon",
            "OSINT collection",
            "Subdomain enumeration",
            "Shodan, Censys"
          ]
        },
        {
          id: "scanning-enumeration",
          title: "4.2 Scanning & Enumeration",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Port scanning",
            "Service enumeration",
            "SMB/NFS enumerations"
          ]
        },
        {
          id: "exploitation",
          title: "4.3 Exploitation",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Exploiting web vulnerabilities",
            "Privilege escalation (Linux/Windows)",
            "Exploit development basics",
            "Buffer overflows"
          ]
        },
        {
          id: "post-exploitation",
          title: "4.4 Post Exploitation",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Persistence mechanisms",
            "Credential attacks",
            "Lateral movement"
          ]
        },
        {
          id: "reporting-documentation",
          title: "4.5 Reporting & Documentation",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Vulnerability analysis",
            "Risk rating models (CVSS)",
            "Professional pentesting reports"
          ]
        }
      ]
    },
    {
      id: "cyber-threat-intelligence",
      title: "MODULE 5 — Cyber Threat Intelligence (CTI)",
      topics: [
        {
          id: "cti-foundations",
          title: "5.1 CTI Foundations",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Threat actors (state-sponsored, cybercriminals, hacktivists)",
            "MITRE ATT&CK framework",
            "TTPs (Tactics, Techniques & Procedures)"
          ]
        },
        {
          id: "threat-information-gathering",
          title: "5.2 Threat Information Gathering",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Threat feeds",
            "Malware analysis basics",
            "Sandbox environments",
            "IOC (Indicators of Compromise) collection"
          ]
        },
        {
          id: "threat-analysis",
          title: "5.3 Threat Analysis",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Behavioral analysis",
            "Reverse engineering (intro)",
            "Attack attribution",
            "Threat modeling (STRIDE, PASTA)"
          ]
        },
        {
          id: "cti-tools",
          title: "5.4 CTI Tools",
          duration: "130 min",
          completed: false,
          subtopics: [
            "MISP",
            "TheHive",
            "YARA rules",
            "VirusTotal automation"
          ]
        }
      ]
    },
    {
      id: "blockchain-security",
      title: "MODULE 6 — Blockchain Security",
      topics: [
        {
          id: "blockchain-fundamentals",
          title: "6.1 Blockchain Fundamentals",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Cryptographic hash functions",
            "Merkle trees",
            "Consensus mechanisms (PoW, PoS, DPoS)",
            "Wallets & key management"
          ]
        },
        {
          id: "blockchain-attacks",
          title: "6.2 Blockchain Attacks",
          duration: "130 min",
          completed: false,
          subtopics: [
            "51% attacks",
            "Sybil attacks",
            "Reentrancy",
            "Double-spend",
            "Eclipse attacks"
          ]
        },
        {
          id: "protocol-security",
          title: "6.3 Protocol Security",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Layer 1, Layer 2",
            "Validator & node security",
            "MEV & frontrunning"
          ]
        }
      ]
    },
    {
      id: "smart-contract-security",
      title: "MODULE 7 — Smart Contract Security (Audits)",
      topics: [
        {
          id: "solidity-security-basics",
          title: "7.1 Solidity Security Basics",
          duration: "130 min",
          completed: false,
          subtopics: [
            "EVM basics",
            "Storage layout",
            "Gas optimization",
            "Smart contract architecture"
          ]
        },
        {
          id: "smart-contract-vulnerabilities",
          title: "7.2 Common Smart Contract Vulnerabilities",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Reentrancy",
            "Integer overflows",
            "Access control issues",
            "Front-running",
            "Unchecked external calls",
            "Denial of service",
            "Timestamp dependencies"
          ]
        },
        {
          id: "auditing-tools",
          title: "7.3 Tools for Auditing",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Slither",
            "Mythril",
            "Echidna",
            "Foundry",
            "Tenderly",
            "Certora (advanced)"
          ]
        },
        {
          id: "audit-methodology",
          title: "7.4 Audit Methodology",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Manual code review",
            "Static & dynamic analysis",
            "Fuzzing",
            "Unit testing",
            "Audit report writing"
          ]
        }
      ]
    },
    {
      id: "cloud-security",
      title: "MODULE 8 — Cloud Security",
      topics: [
        {
          id: "cloud-security-fundamentals",
          title: "8.1 Cloud Security Fundamentals",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Shared responsibility model",
            "IAM security",
            "Secrets management",
            "Network policies"
          ]
        },
        {
          id: "multi-cloud-security",
          title: "8.2 AWS/GCP/Azure Security",
          duration: "160 min",
          completed: false,
          subtopics: [
            "IAM misconfigurations",
            "S3 bucket exposures",
            "Secure Kubernetes clusters",
            "Cloud-native firewalls"
          ]
        },
        {
          id: "cloud-attack-simulation",
          title: "8.3 Cloud Attack Simulation",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Cloud pentesting",
            "SSRF in cloud environments",
            "Metadata service exploitation"
          ]
        }
      ]
    },
    {
      id: "advanced-security-topics",
      title: "MODULE 9 — Advanced Security Topics",
      topics: [
        {
          id: "malware-analysis-basics",
          title: "9.1 Malware Analysis (Basics)",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Types of malware",
            "Static analysis",
            "Dynamic analysis",
            "Behavioral signatures"
          ]
        },
        {
          id: "reverse-engineering",
          title: "9.2 Reverse Engineering",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Assembly basics",
            "Binary analysis",
            "Decompilers (Ghidra, IDA Free)"
          ]
        },
        {
          id: "zero-day-research-intro",
          title: "9.3 Zero-Day Research (Intro)",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Vulnerability research methodologies",
            "Fuzzing techniques",
            "Exploit development lifecycle",
            "Responsible disclosure"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 10 — Capstone Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "10.1 Capstone Project Development",
          duration: "500 min",
          completed: false,
          subtopics: [
            "Full web app penetration test",
            "Bug bounty write-up",
            "Smart contract audit report",
            "Build a secure API with OAuth",
            "Real-time threat detection using SIEM",
            "Blockchain node attack simulation",
            "Malware behavior analysis lab",
            "Network intrusion detection system (IDS)",
            "Wi-Fi pentesting toolkit",
            "Cloud misconfiguration exploitation lab",
            "Recon",
            "Vulnerability discovery",
            "Exploitation",
            "Fix recommendations",
            "Professional reporting"
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
            "Submit your cybersecurity projects for review",
            "Ensure all security and ethical requirements are met",
            "Receive comprehensive feedback and certification"
          ]
        }
      ]
    }
  ],
  assessmentCriteria: {
    moduleQuizzes: 15, // 15% weight
    practicalExercises: 55, // 55% weight
    capstoneProjects: 30 // 30% weight
  },
  
  careerOutcomes: [
    "Cybersecurity Analyst",
    "Penetration Tester",
    "Security Engineer",
    "Application Security Engineer",
    "Blockchain Security Auditor",
    "Threat Intelligence Analyst",
    "Cloud Security Engineer",
    "Malware Analyst",
    "Security Consultant"
  ],
  
  technologiesCovered: [
    "Kali Linux", "Parrot OS", "Burp Suite", "Nmap", "Wireshark",
    "Metasploit", "OWASP ZAP", "Splunk", "ELK Stack", "QRadar",
    "Solidity", "Foundry", "Slither", "Mythril", "Ghidra", "IDA",
    "MISP", "TheHive", "YARA", "VirusTotal", "AWS Security",
    "GCP Security", "Azure Security", "Docker", "Kubernetes"
  ]
};