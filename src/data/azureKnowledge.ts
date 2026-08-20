import type { KnowledgeDefinition } from './knowledge'

export const azureKnowledge: KnowledgeDefinition = {
  technologyId: 'azure',
  slug: 'azure',
  title: 'Microsoft Azure',
  summary:
    'Microsoft Azure is a public cloud platform providing compute, storage, networking, databases, security, analytics, AI, developer platforms, and managed infrastructure services.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Microsoft Azure?',
      content:
        'Microsoft Azure is a cloud computing platform that provides infrastructure and managed services for building, deploying, integrating, and operating applications. Organizations can provision resources without owning the underlying physical infrastructure.',
      highlights: [
        {
          title: 'Azure',
          description:
            'Microsoft cloud platform providing infrastructure and managed services.',
        },
        {
          title: 'Cloud service',
          description:
            'A computing capability delivered through a provider-managed platform.',
        },
        {
          title: 'Managed service',
          description:
            'A service where Microsoft operates significant portions of the underlying infrastructure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Azure like renting space and utilities in a large technology city. Instead of constructing your own data center, network, storage systems, security infrastructure, and computing equipment, you select the facilities you need and connect them into your application.',
      highlights: [
        {
          title: 'Technology city',
          description:
            'Comparable to the Azure cloud platform.',
        },
        {
          title: 'Infrastructure',
          description:
            'Comparable to Azure services such as virtual machines, storage, and networking.',
        },
        {
          title: 'Managed facility',
          description:
            'A capability operated partly or largely by Microsoft.',
        },
      ],
    },

    {
      title: 'Azure Global Infrastructure',
      content:
        'Azure organizes its cloud infrastructure into geographic regions and availability constructs. Applications can use geographically distributed resources to improve resilience, latency, and disaster recovery.',
      highlights: [
        {
          title: 'Azure region',
          description:
            'A geographic area containing Azure cloud infrastructure.',
        },
        {
          title: 'Availability zone',
          description:
            'An isolated location within a supported Azure region designed to improve resilience.',
        },
        {
          title: 'Geographic distribution',
          description:
            'Placing workloads across locations to address latency, availability, or recovery requirements.',
        },
      ],
    },

    {
      title: 'Core Azure Service Categories',
      content:
        'Azure provides services across compute, storage, databases, networking, identity, security, monitoring, integration, analytics, and artificial intelligence. These capabilities can be combined to build complete application platforms.',
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
          title: 'Networking',
          description:
            'Capabilities for connecting, routing, isolating, and securing workloads.',
        },
        {
          title: 'Identity',
          description:
            'Services controlling users, applications, roles, and access.',
        },
      ],
    },

    {
      title: 'Azure Virtual Machines',
      content:
        'Azure Virtual Machines provide configurable virtual servers. They offer significant operating-system and infrastructure control but require more operational responsibility than highly managed application services.',
      highlights: [
        {
          title: 'Virtual machine',
          description:
            'A software-defined computer running on Azure infrastructure.',
        },
        {
          title: 'VM size',
          description:
            'A predefined combination of compute, memory, storage, and networking capabilities.',
        },
        {
          title: 'Image',
          description:
            'A template used to create a virtual machine operating environment.',
        },
      ],
    },

    {
      title: 'Azure App Service',
      content:
        'Azure App Service is a managed platform for hosting web applications, APIs, and backend services. It abstracts much of the underlying server management from development teams.',
      highlights: [
        {
          title: 'App Service',
          description:
            'A managed Azure application hosting platform.',
        },
        {
          title: 'Web application',
          description:
            'An application exposed through web protocols such as HTTP or HTTPS.',
        },
        {
          title: 'Managed hosting',
          description:
            'Application hosting where Azure manages significant infrastructure operations.',
        },
      ],
    },

    {
      title: 'Azure Kubernetes Service',
      content:
        'Azure Kubernetes Service (AKS) provides managed Kubernetes capabilities for containerized workloads. Azure handles significant control-plane operations while teams remain responsible for workload and platform configuration.',
      highlights: [
        {
          title: 'AKS',
          description:
            'Azure Kubernetes Service, Microsoft’s managed Kubernetes offering.',
        },
        {
          title: 'Kubernetes',
          description:
            'A container orchestration platform for deploying and managing containerized workloads.',
        },
        {
          title: 'Managed control plane',
          description:
            'Kubernetes control-plane infrastructure operated by Azure.',
        },
      ],
    },

    {
      title: 'Azure Container Services',
      content:
        'Azure provides multiple ways to run containers, from managed container execution to Kubernetes-based platforms. The appropriate choice depends on workload complexity, orchestration needs, scaling requirements, and operational ownership.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application environment containing code and runtime dependencies.',
        },
        {
          title: 'Container Apps',
          description:
            'A managed Azure platform for running containerized applications without managing a complete Kubernetes platform.',
        },
        {
          title: 'Container Registry',
          description:
            'A managed repository for storing and distributing container images.',
        },
      ],
    },

    {
      title: 'Azure Storage',
      content:
        'Azure Storage provides several storage models for application and business workloads, including object storage, file shares, queues, and managed disks.',
      highlights: [
        {
          title: 'Blob Storage',
          description:
            'Azure object storage for files, media, datasets, backups, and other unstructured data.',
        },
        {
          title: 'Azure Files',
          description:
            'Managed file shares accessible through standard file-sharing protocols.',
        },
        {
          title: 'Managed Disk',
          description:
            'Persistent block storage used with Azure virtual machines.',
        },
      ],
    },

    {
      title: 'Azure SQL Database',
      content:
        'Azure SQL Database is a managed relational database service based on Microsoft SQL Server technology. Azure handles significant infrastructure operations while teams manage schemas, queries, application behavior, and database configuration.',
      highlights: [
        {
          title: 'Managed SQL database',
          description:
            'A relational database service where Azure handles significant infrastructure management.',
        },
        {
          title: 'Relational database',
          description:
            'A database model organizing data into related tables.',
        },
        {
          title: 'High availability',
          description:
            'Database capabilities designed to keep workloads available during expected infrastructure failures.',
        },
      ],
    },

    {
      title: 'Azure Cosmos DB',
      content:
        'Azure Cosmos DB is a globally distributed database platform designed for applications requiring flexible data models, scalable throughput, and low-latency access.',
      highlights: [
        {
          title: 'Distributed database',
          description:
            'A database whose data and processing can be distributed across geographic locations.',
        },
        {
          title: 'Partitioning',
          description:
            'Distributing data across partitions to support scale.',
        },
        {
          title: 'Low latency',
          description:
            'Designing access paths to provide consistently fast responses.',
        },
      ],
    },

    {
      title: 'Azure Virtual Network',
      content:
        'Azure Virtual Network provides a logically isolated network environment for Azure resources. It supports subnets, routing, private connectivity, security controls, and integration with other networks.',
      highlights: [
        {
          title: 'Virtual Network',
          description:
            'An isolated logical network environment in Azure.',
        },
        {
          title: 'Subnet',
          description:
            'A subdivision of a virtual network address space.',
        },
        {
          title: 'Private endpoint',
          description:
            'A networking mechanism that provides private access to supported Azure services.',
        },
      ],
    },

    {
      title: 'Azure Load Balancing',
      content:
        'Azure provides multiple load-balancing and traffic-management services. These services distribute requests, improve availability, and can route traffic based on application or network requirements.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A service that distributes traffic across backend resources.',
        },
        {
          title: 'Application Gateway',
          description:
            'An Azure application delivery service supporting HTTP and HTTPS traffic management.',
        },
        {
          title: 'Traffic routing',
          description:
            'Directing requests to appropriate backend resources.',
        },
      ],
    },

    {
      title: 'Microsoft Entra ID',
      content:
        'Microsoft Entra ID is Microsoft’s cloud identity and access management platform. It provides authentication, authorization, application identities, conditional access, and integration with enterprise identity systems.',
      highlights: [
        {
          title: 'Entra ID',
          description:
            'Microsoft cloud identity and access management platform.',
        },
        {
          title: 'Authentication',
          description:
            'The process of verifying an identity.',
        },
        {
          title: 'Authorization',
          description:
            'The process of determining what an authenticated identity is allowed to do.',
        },
        {
          title: 'Conditional Access',
          description:
            'Policies that evaluate contextual signals before granting access.',
        },
      ],
    },

    {
      title: 'Azure RBAC',
      content:
        'Azure Role-Based Access Control provides fine-grained authorization for Azure resources. Roles can be assigned at different scopes such as management groups, subscriptions, resource groups, or individual resources.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control used to manage permissions.',
        },
        {
          title: 'Role assignment',
          description:
            'Associating an identity with a role at a defined scope.',
        },
        {
          title: 'Scope',
          description:
            'The level at which a permission assignment applies.',
        },
      ],
    },

    {
      title: 'Azure Functions',
      content:
        'Azure Functions is a serverless compute service for executing application code in response to events, HTTP requests, schedules, queues, and other triggers.',
      highlights: [
        {
          title: 'Function',
          description:
            'A unit of application code executed by the serverless platform.',
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
      title: 'Azure Event-Driven Architecture',
      content:
        'Azure provides messaging and event services that allow applications to communicate asynchronously. Event-driven designs can improve decoupling, scalability, and resilience.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record that something happened in a system.',
        },
        {
          title: 'Message queue',
          description:
            'A mechanism for storing work until a consumer processes it.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Processing work without requiring the initiating request to wait for completion.',
        },
      ],
    },

    {
      title: 'Azure Monitor',
      content:
        'Azure Monitor provides monitoring and observability capabilities across Azure resources and applications. It can collect metrics, logs, traces, alerts, and diagnostic information.',
      highlights: [
        {
          title: 'Metric',
          description:
            'A numerical measurement of system behavior.',
        },
        {
          title: 'Log',
          description:
            'A recorded event generated by an application or infrastructure component.',
        },
        {
          title: 'Alert',
          description:
            'A notification or action triggered when defined monitoring conditions are met.',
        },
      ],
    },

    {
      title: 'Application Insights',
      content:
        'Application Insights provides application performance monitoring capabilities within Azure Monitor. It helps teams understand request behavior, dependencies, failures, availability, and performance.',
      highlights: [
        {
          title: 'Application performance monitoring',
          description:
            'Monitoring application behavior and performance in production.',
        },
        {
          title: 'Dependency',
          description:
            'An external service or component used by an application.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Tracking a request as it moves through multiple services.',
        },
      ],
    },

    {
      title: 'Azure Resource Manager',
      content:
        'Azure Resource Manager provides the management layer for creating, organizing, controlling, and deploying Azure resources. Resources can be grouped into resource groups and managed through templates and automation.',
      highlights: [
        {
          title: 'Resource group',
          description:
            'A logical container for related Azure resources.',
        },
        {
          title: 'Resource Manager',
          description:
            'The Azure management layer used to provision and manage resources.',
        },
        {
          title: 'Template',
          description:
            'A declarative definition describing infrastructure resources and configuration.',
        },
      ],
    },

    {
      title: 'Azure Infrastructure as Code',
      content:
        'Azure infrastructure can be automated using Azure Resource Manager templates, Bicep, Terraform, and other Infrastructure as Code tools. IaC improves repeatability, reviewability, and environment consistency.',
      highlights: [
        {
          title: 'Bicep',
          description:
            'A declarative Infrastructure as Code language designed for Azure resources.',
        },
        {
          title: 'Terraform',
          description:
            'A multi-cloud Infrastructure as Code tool capable of managing Azure resources.',
        },
        {
          title: 'Infrastructure drift',
          description:
            'A difference between infrastructure defined in code and infrastructure actually deployed.',
        },
      ],
    },

    {
      title: 'Azure DevOps and CI/CD',
      content:
        'Azure supports software delivery through Azure DevOps and integrations with external systems such as GitHub Actions and Jenkins. Delivery pipelines can build, test, scan, package, deploy, and monitor applications.',
      highlights: [
        {
          title: 'Azure Pipelines',
          description:
            'A CI/CD capability within Azure DevOps.',
        },
        {
          title: 'Continuous Integration',
          description:
            'Automatically building and validating changes as they are integrated.',
        },
        {
          title: 'Continuous Delivery',
          description:
            'Maintaining software in a deployable state through automated delivery processes.',
        },
      ],
    },

    {
      title: 'Azure and Kubernetes',
      content:
        'AKS allows teams to use Kubernetes while integrating with Azure identity, networking, storage, monitoring, and other platform capabilities. This can reduce control-plane management compared with operating Kubernetes entirely independently.',
      highlights: [
        {
          title: 'AKS',
          description:
            'Azure Kubernetes Service.',
        },
        {
          title: 'Managed Kubernetes',
          description:
            'Kubernetes where the provider operates significant portions of the control-plane infrastructure.',
        },
        {
          title: 'Platform integration',
          description:
            'Connecting Kubernetes workloads with cloud-native identity, networking, storage, and observability services.',
        },
      ],
    },

    {
      title: 'Azure AI',
      content:
        'Azure provides cloud infrastructure and managed services for machine learning, generative AI, model deployment, data processing, and AI application development.',
      highlights: [
        {
          title: 'Azure AI',
          description:
            'A collection of Azure capabilities supporting artificial intelligence workloads.',
        },
        {
          title: 'Model inference',
          description:
            'Running an AI model to generate predictions or responses.',
        },
        {
          title: 'AI application',
          description:
            'An application that incorporates machine learning or generative AI capabilities.',
        },
      ],
    },

    {
      title: 'Azure AI Application Architecture',
      content:
        'A typical enterprise AI application on Azure may combine a frontend, API layer, Microsoft Entra ID, compute, object storage, databases, search or retrieval services, model inference, queues, monitoring, and security controls. Architecture should be driven by data protection, latency, cost, availability, and scale.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Finding relevant information from a data source before generating an AI response.',
        },
        {
          title: 'Model endpoint',
          description:
            'A network-accessible interface through which an application invokes an AI model.',
        },
        {
          title: 'Enterprise identity',
          description:
            'Identity controls integrated with organizational users, applications, and access policies.',
        },
      ],
    },

    {
      title: 'Azure Security',
      content:
        'Azure security combines identity controls, network isolation, encryption, secrets management, monitoring, policy enforcement, and threat protection. Security should be designed into the architecture rather than added after deployment.',
      highlights: [
        {
          title: 'Key Vault',
          description:
            'Azure service used to securely manage secrets, keys, and certificates.',
        },
        {
          title: 'Encryption',
          description:
            'Protecting information so unauthorized parties cannot easily read it.',
        },
        {
          title: 'Policy',
          description:
            'Rules used to enforce organizational requirements across Azure resources.',
        },
      ],
    },

    {
      title: 'Azure Reliability',
      content:
        'Reliable Azure architectures use redundancy, availability zones where supported, health checks, autoscaling, backups, disaster recovery, monitoring, and tested recovery procedures.',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Maintaining multiple resources or paths so a single failure does not stop service.',
        },
        {
          title: 'Failover',
          description:
            'Moving workload to a healthy resource when the primary resource fails.',
        },
        {
          title: 'Recovery objective',
          description:
            'A defined expectation for how quickly service or data should be restored after failure.',
        },
      ],
    },

    {
      title: 'Azure Cost Management',
      content:
        'Azure provides cost-management capabilities for understanding and controlling cloud spending. Effective governance includes resource tagging, budgets, rightsizing, lifecycle policies, and identifying unused resources.',
      highlights: [
        {
          title: 'Cost management',
          description:
            'Processes and tools used to understand and optimize Azure spending.',
        },
        {
          title: 'Tag',
          description:
            'Metadata attached to resources for organization, ownership, and cost attribution.',
        },
        {
          title: 'Rightsizing',
          description:
            'Selecting resource capacity appropriate to actual workload requirements.',
        },
      ],
    },

    {
      title: 'Azure Governance',
      content:
        'Azure governance uses management groups, subscriptions, resource groups, policies, role-based access control, naming standards, tagging, and security controls to manage enterprise cloud environments at scale.',
      highlights: [
        {
          title: 'Management group',
          description:
            'A hierarchy used to organize and govern multiple Azure subscriptions.',
        },
        {
          title: 'Subscription',
          description:
            'An Azure boundary commonly used for billing, resource organization, access, and governance.',
        },
        {
          title: 'Azure Policy',
          description:
            'A governance service used to enforce or audit resource configuration requirements.',
        },
      ],
    },

    {
      title: 'Azure Shared Responsibility',
      content:
        'Microsoft secures the underlying Azure cloud infrastructure while customers remain responsible for workload configuration, identities, applications, data, and security controls according to the services they consume.',
      highlights: [
        {
          title: 'Provider responsibility',
          description:
            'Security responsibilities Microsoft handles for the underlying cloud platform.',
        },
        {
          title: 'Customer responsibility',
          description:
            'Security responsibilities associated with application and resource configuration.',
        },
      ],
    },

    {
      title: 'Azure for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Azure decisions should be evaluated against business outcomes rather than individual cloud services. Important considerations include security, compliance, reliability, scalability, cost, enterprise identity integration, team expertise, delivery velocity, and operational ownership.',
      highlights: [
        {
          title: 'Enterprise integration',
          description:
            'How well cloud services integrate with existing organizational identity, networking, security, and business systems.',
        },
        {
          title: 'Compliance',
          description:
            'Meeting organizational and regulatory requirements for data and systems.',
        },
        {
          title: 'Total cost of ownership',
          description:
            'The broader cost of operating a solution, including infrastructure and engineering effort.',
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
        'Common mistakes include granting excessive permissions, exposing services unnecessarily, ignoring resource costs, creating infrastructure manually without governance, storing secrets in application code, failing to monitor production workloads, and selecting services without considering operational complexity.',
      highlights: [
        {
          title: 'Over-permissioning',
          description:
            'Giving identities more permissions than they need.',
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
          title: 'Missing observability',
          description:
            'Operating production systems without sufficient metrics, logs, traces, and alerts.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'google-cloud',
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

export default azureKnowledge
