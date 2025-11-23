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

export const dataCloudConfig: CourseConfig = {
  id: "data-cloud",
  title: "Complete Data & Cloud Engineering Course",
  description: "Master data science, engineering, and cloud platforms from foundations to advanced distributed systems with industry-level projects",
  totalHours: 250,
  difficulty: "Intermediate",
  skillLevel: "Intermediate",
  targetAudience: [
    "Data analysts transitioning to engineering",
    "Software engineers moving to data/cloud roles",
    "System administrators seeking cloud expertise",
    "Students pursuing data engineering careers"
  ],
  certification: {
    available: true,
    requirements: {
      minProgressPercentage: 85,
      capstoneProjectRequired: true,
      minProjectScore: 80
    }
  },
  modules: [
    {
      id: "foundations-data-cloud",
      title: "MODULE 1 — Foundations of Data & Cloud",
      topics: [
        {
          id: "introduction-data-ecosystem",
          title: "1.1 Introduction to Data Ecosystem",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Data types (structured, unstructured, semi-structured)",
            "OLTP vs OLAP",
            "Data analytics vs data engineering vs data science",
            "ETL vs ELT"
          ]
        },
        {
          id: "tools-programming",
          title: "1.2 Tools & Programming",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Python for data",
            "SQL mastery",
            "Bash scripting",
            "Git & GitHub"
          ]
        },
        {
          id: "math-statistics",
          title: "1.3 Math & Statistics",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Probability",
            "Hypothesis testing",
            "Linear algebra basics",
            "Statistical modeling"
          ]
        }
      ]
    },
    {
      id: "data-science",
      title: "MODULE 2 — Data Science",
      topics: [
        {
          id: "data-analysis",
          title: "2.1 Data Analysis",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Pandas",
            "Data cleaning",
            "Exploratory data analysis (EDA)",
            "Visualization (Matplotlib, Seaborn, Plotly)"
          ]
        },
        {
          id: "ml-foundations",
          title: "2.2 Machine Learning Foundations",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Regression models",
            "Classification",
            "Clustering",
            "Time-series forecasting"
          ]
        },
        {
          id: "ml-in-production",
          title: "2.3 ML in Production",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Feature engineering",
            "Model evaluation",
            "Handling imbalanced data",
            "Hyperparameter tuning"
          ]
        },
        {
          id: "python-ml-tools",
          title: "2.4 Python Machine Learning Tools",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Scikit-learn",
            "XGBoost / LightGBM",
            "Statsmodels"
          ]
        },
        {
          id: "end-to-end-ml-pipelines",
          title: "2.5 End-to-End ML Pipelines",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Dataset creation",
            "Model deployment (Flask/FastAPI)",
            "Monitoring"
          ]
        }
      ]
    },
    {
      id: "data-engineering",
      title: "MODULE 3 — Data Engineering",
      topics: [
        {
          id: "data-engineering-fundamentals",
          title: "3.1 Data Engineering Fundamentals",
          duration: "110 min",
          completed: false,
          subtopics: [
            "Data lakes vs data warehouses",
            "Batch vs streaming pipelines",
            "Data ingestion patterns",
            "Orchestration basics"
          ]
        },
        {
          id: "data-pipelines",
          title: "3.2 Data Pipelines",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Apache Airflow",
            "Apache NiFi",
            "Prefect"
          ]
        },
        {
          id: "etl-elt-tools",
          title: "3.3 ETL / ELT Tools",
          duration: "140 min",
          completed: false,
          subtopics: [
            "dbt",
            "SSIS / Talend",
            "AWS Glue"
          ]
        },
        {
          id: "workflow-automation",
          title: "3.4 Workflow Automation",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Scheduling",
            "CI/CD for data",
            "Pipeline observability"
          ]
        },
        {
          id: "data-storage-systems",
          title: "3.5 Data Storage Systems",
          duration: "130 min",
          completed: false,
          subtopics: [
            "SQL databases",
            "NoSQL stores",
            "Object storage (S3, GCS, Azure Blob)"
          ]
        }
      ]
    },
    {
      id: "big-data-development",
      title: "MODULE 4 — Big Data Development",
      topics: [
        {
          id: "big-data-concepts",
          title: "4.1 Big Data Concepts",
          duration: "100 min",
          completed: false,
          subtopics: [
            "Distributed computing",
            "CAP theorem",
            "MapReduce paradigm"
          ]
        },
        {
          id: "hadoop-ecosystem",
          title: "4.2 Hadoop Ecosystem",
          duration: "160 min",
          completed: false,
          subtopics: [
            "HDFS",
            "YARN",
            "Hive",
            "HBase",
            "Sqoop"
          ]
        },
        {
          id: "apache-spark",
          title: "4.3 Apache Spark",
          duration: "180 min",
          completed: false,
          subtopics: [
            "RDDs",
            "DataFrames",
            "Spark SQL",
            "Spark Streaming",
            "Writing distributed pipelines"
          ]
        },
        {
          id: "kafka-streaming-systems",
          title: "4.4 Kafka & Streaming Systems",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Kafka fundamentals",
            "Topics, partitions, offsets",
            "Consumer groups",
            "Kafka Streams / ksqlDB",
            "Flink / Storm overview"
          ]
        },
        {
          id: "scalable-data-systems",
          title: "4.5 Scalable Data Systems",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Delta Lake",
            "Iceberg",
            "Hudi"
          ]
        }
      ]
    },
    {
      id: "database-administration",
      title: "MODULE 5 — Database Administration (DBA)",
      topics: [
        {
          id: "relational-databases",
          title: "5.1 Relational Databases",
          duration: "140 min",
          completed: false,
          subtopics: [
            "MySQL",
            "PostgreSQL",
            "SQL Server",
            "Oracle Database"
          ]
        },
        {
          id: "database-internals",
          title: "5.2 Database Internals",
          duration: "150 min",
          completed: false,
          subtopics: [
            "ACID properties",
            "Indexes",
            "Query planning & optimization",
            "Transactions"
          ]
        },
        {
          id: "database-security",
          title: "5.3 Database Security",
          duration: "120 min",
          completed: false,
          subtopics: [
            "Authentication & authorization",
            "Encryption",
            "Auditing"
          ]
        },
        {
          id: "backup-recovery",
          title: "5.4 Backup & Recovery",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Backup strategies",
            "Replication",
            "High availability configurations"
          ]
        },
        {
          id: "nosql-databases",
          title: "5.5 NoSQL Databases",
          duration: "140 min",
          completed: false,
          subtopics: [
            "MongoDB",
            "Cassandra",
            "Redis",
            "DynamoDB"
          ]
        }
      ]
    },
    {
      id: "cloud-engineering",
      title: "MODULE 6 — Cloud Engineering (AWS / GCP / Azure)",
      topics: [
        {
          id: "aws-core-services",
          title: "6.1 AWS Core Services",
          duration: "160 min",
          completed: false,
          subtopics: [
            "EC2",
            "S3",
            "Lambda",
            "IAM",
            "RDS / DynamoDB"
          ]
        },
        {
          id: "aws-networking",
          title: "6.2 AWS Networking",
          duration: "140 min",
          completed: false,
          subtopics: [
            "VPC",
            "Subnets",
            "Route tables",
            "Load balancers"
          ]
        },
        {
          id: "advanced-aws",
          title: "6.3 Advanced AWS",
          duration: "150 min",
          completed: false,
          subtopics: [
            "ECS / EKS",
            "CloudFormation",
            "API Gateway",
            "CloudWatch & monitoring"
          ]
        },
        {
          id: "gcp-core-services",
          title: "6.4 GCP Core Services",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Compute Engine",
            "Cloud Storage",
            "BigQuery",
            "Cloud Functions",
            "Pub/Sub"
          ]
        },
        {
          id: "advanced-gcp",
          title: "6.5 Advanced GCP",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Dataflow",
            "Dataproc",
            "Vertex AI",
            "Spanner"
          ]
        },
        {
          id: "azure-core-services",
          title: "6.6 Azure Core Services",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Virtual Machines",
            "Azure Storage",
            "Azure SQL",
            "Functions",
            "Azure AD"
          ]
        },
        {
          id: "advanced-azure",
          title: "6.7 Advanced Azure",
          duration: "150 min",
          completed: false,
          subtopics: [
            "AKS (Kubernetes)",
            "Event Hub",
            "Synapse Analytics",
            "Logic Apps"
          ]
        }
      ]
    },
    {
      id: "devops-sre",
      title: "MODULE 7 — DevOps & Site Reliability Engineering (SRE)",
      topics: [
        {
          id: "devops-foundations",
          title: "7.1 DevOps Foundations",
          duration: "110 min",
          completed: false,
          subtopics: [
            "CI/CD principles",
            "Infrastructure as Code",
            "DevOps culture"
          ]
        },
        {
          id: "devops-tools",
          title: "7.2 DevOps Tools",
          duration: "170 min",
          completed: false,
          subtopics: [
            "Docker",
            "Kubernetes",
            "Jenkins / GitHub Actions",
            "Terraform",
            "Ansible"
          ]
        },
        {
          id: "observability",
          title: "7.3 Observability",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Monitoring (Prometheus, Grafana)",
            "Logging (ELK stack)",
            "Alerting & incident handling"
          ]
        },
        {
          id: "sre-practices",
          title: "7.4 SRE Practices",
          duration: "130 min",
          completed: false,
          subtopics: [
            "SLIs, SLOs, SLAs",
            "Error budgets",
            "Reliability engineering",
            "Chaos engineering"
          ]
        }
      ]
    },
    {
      id: "cloud-architecture",
      title: "MODULE 8 — Cloud Architecture",
      topics: [
        {
          id: "architectural-principles",
          title: "8.1 Architectural Principles",
          duration: "130 min",
          completed: false,
          subtopics: [
            "Scalability",
            "Resilience",
            "High availability",
            "Cost optimization",
            "Serverless architectures"
          ]
        },
        {
          id: "architectural-patterns",
          title: "8.2 Architectural Patterns",
          duration: "150 min",
          completed: false,
          subtopics: [
            "Microservices",
            "Event-driven architecture",
            "Data mesh",
            "Multi-cloud & hybrid cloud"
          ]
        },
        {
          id: "security-governance",
          title: "8.3 Security & Governance",
          duration: "140 min",
          completed: false,
          subtopics: [
            "Cloud security best practices",
            "Zero trust architecture",
            "Identity management",
            "Compliance frameworks"
          ]
        },
        {
          id: "designing-systems",
          title: "8.4 Designing Systems",
          duration: "160 min",
          completed: false,
          subtopics: [
            "Load balancing designs",
            "Distributed systems",
            "Caching layers",
            "Global distribution"
          ]
        }
      ]
    },
    {
      id: "capstone-projects",
      title: "MODULE 9 — Capstone Projects",
      topics: [
        {
          id: "capstone-project-development",
          title: "9.1 Capstone Project Development",
          duration: "480 min",
          completed: false,
          subtopics: [
            "Real-time data streaming pipeline using Kafka + Spark",
            "AWS big data pipeline with S3 + Glue + EMR",
            "End-to-end data warehouse using Snowflake/BigQuery",
            "DevOps CI/CD pipeline with Kubernetes",
            "Cloud architecture design for scalable app",
            "Distributed ETL with Airflow",
            "High availability database setup",
            "Build a lakehouse with Delta Lake",
            "Deploy ML model using Vertex AI / SageMaker",
            "Architecture design",
            "Documentation",
            "Deployment",
            "Monitoring"
          ]
        }
      ]
    },
    {
      id: "project-submission",
      title: "MODULE 10 — Final Assessment: Project Submission",
      topics: [
        {
          id: "project-submission",
          title: "Final Project Submission",
          duration: "N/A",
          completed: false,
          subtopics: [
            "Submit your data & cloud engineering projects for review",
            "Ensure all architecture and scalability requirements are met",
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
    "Data Engineer",
    "Cloud Engineer",
    "Data Scientist",
    "Big Data Engineer",
    "Database Administrator",
    "DevOps Engineer",
    "Site Reliability Engineer",
    "Cloud Architect",
    "MLOps Engineer"
  ],
  
  technologiesCovered: [
    "Python", "SQL", "Bash", "Apache Spark", "Kafka", "Hadoop",
    "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins",
    "AWS", "GCP", "Azure", "Airflow", "dbt", "Snowflake", "BigQuery",
    "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "Prometheus",
    "Grafana", "Git", "Linux", "Pandas", "Scikit-learn", "Delta Lake"
  ]
};