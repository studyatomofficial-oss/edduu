import type { KnowledgeDefinition } from './knowledge'

export const googleCloudKnowledge: KnowledgeDefinition = {
  technologyId: 'google-cloud',
  slug: 'google-cloud',
  title: 'Google Cloud',
  summary:
    'Google Cloud is a public cloud platform providing compute, storage, networking, databases, Kubernetes, data analytics, machine learning, AI, security, and managed infrastructure services.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Google Cloud?',
      content:
        'Google Cloud, commonly called GCP, is Google’s public cloud platform. It provides infrastructure and managed services that organizations can use to build, deploy, scale, secure, and operate applications without owning the underlying physical data-center infrastructure.',
      highlights: [
        {
          title: 'GCP',
          description:
            'Common abbreviation for Google Cloud Platform.',
        },
        {
          title: 'Cloud service',
          description:
            'A computing capability delivered through a provider-managed platform.',
        },
        {
          title: 'Managed service',
          description:
            'A service where Google operates significant portions of the underlying infrastructure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Google Cloud like renting an entire technology city. Instead of building your own data center, servers, storage facilities, networking systems, security infrastructure, and AI infrastructure, you select the facilities you need and connect them into your application.',
      highlights: [
        {
          title: 'Technology city',
          description:
            'Comparable to the Google Cloud platform.',
        },
        {
          title: 'Infrastructure',
          description:
            'Comparable to compute, storage, networking, and database services.',
        },
        {
          title: 'Managed capability',
          description:
            'A cloud service where Google handles significant infrastructure operations.',
        },
      ],
    },

    {
      title: 'Google Cloud Global Infrastructure',
      content:
        'Google Cloud organizes infrastructure geographically using regions and zones. Applications can distribute workloads across locations to improve availability, resilience, and user latency.',
      highlights: [
        {
          title: 'Region',
          description:
            'A geographic area containing Google Cloud infrastructure.',
        },
        {
          title: 'Zone',
          description:
            'An isolated deployment area within a Google Cloud region.',
        },
        {
          title: 'Global infrastructure',
          description:
            'Distributed cloud infrastructure designed to serve workloads across geographic locations.',
        },
      ],
    },

    {
      title: 'Core Google Cloud Service Categories',
      content:
        'Google Cloud provides services across compute, storage, networking, databases, containers, data analytics, security, observability, and artificial intelligence. These services can be combined into application platforms.',
      highlights: [
        {
          title: 'Compute',
          description:
            'Resources that provide processing capacity for applications.',
        },
        {
          title: 'Storage',
          description:
            'Services for persistent application and business data.',
        },
        {
          title: 'Data analytics',
          description:
            'Services for processing, querying, and analyzing large datasets.',
        },
        {
          title: 'AI and ML',
          description:
            'Cloud capabilities for developing, training, deploying, and operating AI systems.',
        },
      ],
    },

    {
      title: 'Google Compute Engine',
      content:
        'Google Compute Engine provides configurable virtual machines running on Google Cloud infrastructure. It gives teams control over compute resources, operating systems, networking, and storage while requiring more infrastructure management than highly managed services.',
      highlights: [
        {
          title: 'Compute Engine',
          description:
            'Google Cloud service for running virtual machines.',
        },
        {
          title: 'Virtual machine',
          description:
            'A software-defined computer running on cloud infrastructure.',
        },
        {
          title: 'Machine type',
          description:
            'A predefined or configurable combination of compute and memory resources.',
        },
      ],
    },

    {
      title: 'Google Cloud Storage',
      content:
        'Google Cloud Storage is an object storage service used for files, media, backups, logs, datasets, application artifacts, and other unstructured data.',
      highlights: [
        {
          title: 'Bucket',
          description:
            'A logical container for objects stored in Google Cloud Storage.',
        },
        {
          title: 'Object',
          description:
            'A stored piece of data together with associated metadata.',
        },
        {
          title: 'Object storage',
          description:
            'A storage model where data is stored and accessed as objects.',
        },
      ],
    },

    {
      title: 'Google Kubernetes Engine',
      content:
        'Google Kubernetes Engine, or GKE, is Google Cloud’s managed Kubernetes service. It provides Kubernetes orchestration while integrating with Google Cloud networking, identity, storage, monitoring, and security capabilities.',
      highlights: [
        {
          title: 'GKE',
          description:
            'Google Kubernetes Engine, Google Cloud’s managed Kubernetes platform.',
        },
        {
          title: 'Kubernetes',
          description:
            'A platform for orchestrating containerized workloads.',
        },
        {
          title: 'Managed control plane',
          description:
            'Kubernetes management infrastructure operated by the cloud provider.',
        },
      ],
    },

    {
      title: 'Cloud Run',
      content:
        'Cloud Run is a managed platform for running containerized applications without requiring teams to operate a complete Kubernetes cluster. It is useful for APIs, web applications, event-driven services, and workloads that benefit from automatic scaling.',
      highlights: [
        {
          title: 'Cloud Run',
          description:
            'A managed Google Cloud service for running containers.',
        },
        {
          title: 'Container',
          description:
            'A packaged application environment containing code and runtime dependencies.',
        },
        {
          title: 'Automatic scaling',
          description:
            'Automatically adjusting running application capacity according to demand.',
        },
      ],
    },

    {
      title: 'Cloud Functions',
      content:
        'Google Cloud Functions provides serverless execution for event-driven application logic. Functions can respond to HTTP requests and events generated by other cloud services.',
      highlights: [
        {
          title: 'Function',
          description:
            'A unit of application code executed by a serverless platform.',
        },
        {
          title: 'Trigger',
          description:
            'An event or request that causes a function to execute.',
        },
        {
          title: 'Serverless',
          description:
            'An execution model where infrastructure management is largely abstracted from the application team.',
        },
      ],
    },

    {
      title: 'Cloud SQL',
      content:
        'Cloud SQL is a managed relational database service supporting database engines such as PostgreSQL and MySQL. Google manages significant infrastructure operations while teams remain responsible for database and application design.',
      highlights: [
        {
          title: 'Managed relational database',
          description:
            'A relational database service where infrastructure operations are largely handled by Google.',
        },
        {
          title: 'PostgreSQL',
          description:
            'A relational database engine supported by Cloud SQL.',
        },
        {
          title: 'MySQL',
          description:
            'A relational database engine supported by Cloud SQL.',
        },
      ],
    },

    {
      title: 'Cloud Spanner',
      content:
        'Cloud Spanner is a distributed relational database designed for global-scale workloads requiring strong consistency, horizontal scalability, and high availability.',
      highlights: [
        {
          title: 'Distributed relational database',
          description:
            'A relational database designed to distribute data and processing across infrastructure.',
        },
        {
          title: 'Strong consistency',
          description:
            'A consistency model where reads observe appropriately ordered committed data.',
        },
        {
          title: 'Horizontal scalability',
          description:
            'Increasing capacity by distributing workload across additional infrastructure.',
        },
      ],
    },

    {
      title: 'BigQuery',
      content:
        'BigQuery is Google Cloud’s managed analytics data warehouse. It is designed for large-scale analytical queries and can process significant datasets without requiring teams to manage traditional warehouse infrastructure.',
      highlights: [
        {
          title: 'Data warehouse',
          description:
            'A system optimized for analytical workloads over large datasets.',
        },
        {
          title: 'Analytical query',
          description:
            'A query designed to examine, aggregate, and analyze data rather than perform individual transactional operations.',
        },
        {
          title: 'Serverless analytics',
          description:
            'Analytics infrastructure where much of the underlying infrastructure management is abstracted from users.',
        },
      ],
    },

    {
      title: 'Google Virtual Private Cloud',
      content:
        'Google Cloud VPC provides networking capabilities for cloud workloads, including subnets, routes, firewall rules, private connectivity, and integration with other cloud services.',
      highlights: [
        {
          title: 'VPC',
          description:
            'Virtual Private Cloud networking environment.',
        },
        {
          title: 'Subnet',
          description:
            'A logical subdivision of a network address space.',
        },
        {
          title: 'Firewall rule',
          description:
            'A rule controlling permitted network traffic.',
        },
      ],
    },

    {
      title: 'Google Cloud IAM',
      content:
        'Google Cloud Identity and Access Management controls access to resources through identities, roles, permissions, and policies. Effective IAM follows least-privilege principles.',
      highlights: [
        {
          title: 'IAM',
          description:
            'Identity and Access Management for controlling cloud resource permissions.',
        },
        {
          title: 'Role',
          description:
            'A collection of permissions that can be granted to an identity.',
        },
        {
          title: 'Service account',
          description:
            'An identity commonly used by applications and workloads to access Google Cloud services.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the permissions required for a task.',
        },
      ],
    },

    {
      title: 'Google Cloud Load Balancing',
      content:
        'Google Cloud Load Balancing distributes traffic across backend workloads and can support global or regional application architectures. It can improve availability, scalability, and latency.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A service that distributes incoming traffic across backend resources.',
        },
        {
          title: 'Backend',
          description:
            'A resource that receives traffic from the load-balancing layer.',
        },
        {
          title: 'Global load balancing',
          description:
            'Distributing traffic across geographically distributed application infrastructure.',
        },
      ],
    },

    {
      title: 'Google Cloud Autoscaling',
      content:
        'Google Cloud supports automatic scaling across several compute platforms. Scaling policies should use meaningful workload signals and should be designed around application performance and availability requirements.',
      highlights: [
        {
          title: 'Autoscaling',
          description:
            'Automatically adjusting infrastructure capacity according to workload conditions.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adding or removing application instances.',
        },
        {
          title: 'Capacity',
          description:
            'The amount of workload a system can handle under defined conditions.',
        },
      ],
    },

    {
      title: 'Cloud Monitoring and Logging',
      content:
        'Google Cloud provides observability services for collecting metrics, logs, traces, and alerts. Observability helps teams detect failures, troubleshoot issues, understand performance, and manage reliability.',
      highlights: [
        {
          title: 'Cloud Monitoring',
          description:
            'Google Cloud capability for monitoring infrastructure and application behavior.',
        },
        {
          title: 'Cloud Logging',
          description:
            'Google Cloud capability for collecting and analyzing logs.',
        },
        {
          title: 'Alert',
          description:
            'A notification or operational action triggered by defined monitoring conditions.',
        },
      ],
    },

    {
      title: 'Google Cloud Infrastructure as Code',
      content:
        'Google Cloud infrastructure can be automated using Terraform, Google Cloud deployment tooling, and other Infrastructure as Code approaches. IaC improves repeatability, reviewability, and consistency across environments.',
      highlights: [
        {
          title: 'Terraform',
          description:
            'A declarative Infrastructure as Code tool that can manage Google Cloud resources.',
        },
        {
          title: 'Declarative configuration',
          description:
            'Describing the desired infrastructure state rather than manually executing every infrastructure operation.',
        },
        {
          title: 'Infrastructure drift',
          description:
            'A difference between infrastructure defined in code and infrastructure actually deployed.',
        },
      ],
    },

    {
      title: 'Google Cloud CI/CD',
      content:
        'Google Cloud supports automated software delivery using services such as Cloud Build, Artifact Registry, and deployment platforms. It can also integrate with external systems such as GitHub Actions and GitLab.',
      highlights: [
        {
          title: 'Cloud Build',
          description:
            'A managed service for executing build and delivery workflows.',
        },
        {
          title: 'Artifact Registry',
          description:
            'A managed repository for storing software packages and container images.',
        },
        {
          title: 'Continuous Delivery',
          description:
            'Practices that keep validated software ready for reliable deployment.',
        },
      ],
    },

    {
      title: 'Google Cloud Security',
      content:
        'Google Cloud security combines identity, network controls, encryption, secrets management, monitoring, policy enforcement, and workload isolation. Security should be integrated into architecture and delivery processes.',
      highlights: [
        {
          title: 'Secret Manager',
          description:
            'A service for storing and managing sensitive values such as credentials and API keys.',
        },
        {
          title: 'Encryption',
          description:
            'Protecting data so unauthorized parties cannot easily read it.',
        },
        {
          title: 'Security policy',
          description:
            'Rules controlling how cloud resources and workloads should be configured.',
        },
      ],
    },

    {
      title: 'Google Cloud Reliability',
      content:
        'Reliable Google Cloud architectures use redundancy, appropriate regional or zonal distribution, health checks, backups, autoscaling, observability, and tested recovery procedures.',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Maintaining multiple resources or paths so one failure does not stop the service.',
        },
        {
          title: 'Failover',
          description:
            'Moving workload to another healthy resource when the primary resource fails.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Processes and infrastructure used to restore systems after major failures.',
        },
      ],
    },

    {
      title: 'Google Cloud Cost Management',
      content:
        'Google Cloud cost management requires visibility into resource usage, project ownership, budgets, quotas, rightsizing, idle resources, and architectural decisions. Cost should be treated as an engineering and product concern rather than only a finance concern.',
      highlights: [
        {
          title: 'Project',
          description:
            'A Google Cloud organizational boundary commonly used for resources, access, and billing relationships.',
        },
        {
          title: 'Budget',
          description:
            'A spending target used to monitor cloud consumption.',
        },
        {
          title: 'Rightsizing',
          description:
            'Adjusting resource capacity to match actual workload requirements.',
        },
      ],
    },

    {
      title: 'Google Cloud AI and Machine Learning',
      content:
        'Google Cloud has strong capabilities for machine learning, generative AI, data processing, model training, model inference, and AI application development. Teams can combine managed AI services with cloud compute, storage, networking, and data platforms.',
      highlights: [
        {
          title: 'Vertex AI',
          description:
            'Google Cloud platform capabilities for developing, deploying, and operating machine learning and AI applications.',
        },
        {
          title: 'GPU',
          description:
            'Accelerated compute hardware commonly used for AI training and inference.',
        },
        {
          title: 'Inference',
          description:
            'Running a trained AI model to generate predictions or responses.',
        },
        {
          title: 'Model serving',
          description:
            'Making an AI model available to applications through an inference interface.',
        },
      ],
    },

    {
      title: 'Google Cloud AI Application Architecture',
      content:
        'A typical AI application on Google Cloud may include a frontend, API layer, identity, compute or containers, object storage, databases, search or retrieval, model inference, queues, observability, and security controls. Architecture should be evaluated against latency, cost, data governance, availability, and scale.',
      highlights: [
        {
          title: 'Model endpoint',
          description:
            'A network-accessible interface through which an application invokes an AI model.',
        },
        {
          title: 'Retrieval',
          description:
            'Finding relevant information from a data source before generating an AI response.',
        },
        {
          title: 'AI pipeline',
          description:
            'A sequence of data, model, evaluation, and deployment steps used to operate AI systems.',
        },
      ],
    },

    {
      title: 'Google Cloud Data and AI',
      content:
        'One major strength of Google Cloud is the integration between data analytics and AI workloads. Data platforms such as BigQuery can support analytical workloads while AI services can use curated datasets for training, evaluation, retrieval, and application intelligence.',
      highlights: [
        {
          title: 'Data pipeline',
          description:
            'A sequence of processes that moves and transforms data.',
        },
        {
          title: 'Feature',
          description:
            'A data attribute used as an input to a machine-learning model.',
        },
        {
          title: 'Evaluation dataset',
          description:
            'A dataset used to measure AI system behavior and quality.',
        },
      ],
    },

    {
      title: 'Google Cloud Governance',
      content:
        'Google Cloud governance uses organizations, folders, projects, IAM policies, resource hierarchy, billing controls, security policies, and operational standards to manage cloud environments at scale.',
      highlights: [
        {
          title: 'Organization',
          description:
            'The top-level Google Cloud resource hierarchy for an enterprise.',
        },
        {
          title: 'Folder',
          description:
            'A grouping mechanism within the Google Cloud resource hierarchy.',
        },
        {
          title: 'Project',
          description:
            'A logical boundary used to organize resources, APIs, access, and billing relationships.',
        },
      ],
    },

    {
      title: 'Google Cloud Shared Responsibility',
      content:
        'Google secures the underlying cloud infrastructure while customers remain responsible for their applications, configurations, identities, data, and workload security according to the services they use.',
      highlights: [
        {
          title: 'Provider responsibility',
          description:
            'Security responsibilities Google handles for the underlying cloud platform.',
        },
        {
          title: 'Customer responsibility',
          description:
            'Security responsibilities associated with workload and resource configuration.',
        },
      ],
    },

    {
      title: 'Google Cloud for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Google Cloud should be evaluated based on business and technical outcomes rather than individual services alone. Key considerations include AI capabilities, data architecture, scalability, reliability, security, cost, team expertise, enterprise integration, delivery speed, and operational ownership.',
      highlights: [
        {
          title: 'Data advantage',
          description:
            'The value created by integrating cloud data platforms with analytics and AI workloads.',
        },
        {
          title: 'Architecture trade-off',
          description:
            'Choosing between competing requirements such as cost, speed, reliability, and flexibility.',
        },
        {
          title: 'Vendor dependency',
          description:
            'The degree to which a solution depends on provider-specific services or interfaces.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clear accountability for reliability, security, cost, and support.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include granting excessive permissions, exposing services unnecessarily, ignoring project-level cost growth, manually creating infrastructure without governance, storing secrets in application code, deploying without observability, and selecting managed services without understanding their long-term operational and vendor implications.',
      highlights: [
        {
          title: 'Over-permissioning',
          description:
            'Giving identities more permissions than required.',
        },
        {
          title: 'Secret exposure',
          description:
            'Allowing credentials or sensitive configuration to appear in source code or application artifacts.',
        },
        {
          title: 'Cost blindness',
          description:
            'Operating cloud resources without meaningful visibility into spending.',
        },
        {
          title: 'Vendor lock-in',
          description:
            'Becoming heavily dependent on provider-specific capabilities that are difficult to replace.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'terraform',
    'ansible',
    'helm',
    'serverless',
    'aws-ec2',
    'aws-s3',
    'aws-lambda',
    'cloudflare',
    'nginx',
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
  ],
}

export default googleCloudKnowledge
