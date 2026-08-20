import type { KnowledgeDefinition } from './knowledge'

export const cloudKnowledge: KnowledgeDefinition = {
  technologyId: 'cloud',
  slug: 'cloud',
  title: 'Cloud',
  summary:
    'Cloud computing provides on-demand access to computing, storage, networking, databases, and other infrastructure capabilities through shared or dedicated infrastructure managed through software.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Cloud Computing?',
      content:
        'Cloud computing is a way of consuming computing resources as services instead of owning and operating every physical server yourself. Organizations can provision compute, storage, networking, databases, and other capabilities when needed and scale them according to workload.',
      highlights: [
        {
          title: 'Cloud computing',
          description:
            'On-demand delivery of computing resources through network-accessible services.',
        },
        {
          title: 'Resource',
          description:
            'A computing capability such as CPU, memory, storage, networking, or database capacity.',
        },
        {
          title: 'On-demand',
          description:
            'Resources can be provisioned when they are required rather than being permanently allocated.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of cloud computing like electricity from the power grid. You do not build your own power plant before switching on a light. You consume electricity when needed and pay according to usage or your contract. Cloud computing applies a similar model to computing infrastructure.',
      highlights: [
        {
          title: 'Power grid',
          description:
            'Comparable to shared cloud infrastructure.',
        },
        {
          title: 'Electricity',
          description:
            'Comparable to computing resources consumed by applications.',
        },
        {
          title: 'Usage',
          description:
            'Comparable to consuming infrastructure according to workload.',
        },
      ],
    },

    {
      title: 'Why Cloud Matters',
      content:
        'Cloud platforms can reduce the need for organizations to purchase and maintain large amounts of physical infrastructure. They provide flexible provisioning, global infrastructure, managed services, automation, elasticity, and access to specialized capabilities.',
      highlights: [
        {
          title: 'Elasticity',
          description:
            'The ability to increase or decrease resources as workload changes.',
        },
        {
          title: 'Managed service',
          description:
            'A service where the cloud provider operates significant portions of the underlying infrastructure.',
        },
        {
          title: 'Global infrastructure',
          description:
            'Cloud resources distributed across multiple geographic locations.',
        },
      ],
    },

    {
      title: 'Cloud Service Models',
      content:
        'Cloud services are commonly discussed using Infrastructure as a Service, Platform as a Service, and Software as a Service. These models describe how much of the underlying infrastructure and application stack is managed by the provider.',
      highlights: [
        {
          title: 'IaaS',
          description:
            'Infrastructure as a Service provides foundational resources such as virtual machines, networking, and storage.',
        },
        {
          title: 'PaaS',
          description:
            'Platform as a Service provides managed application runtime capabilities so teams manage less infrastructure.',
        },
        {
          title: 'SaaS',
          description:
            'Software as a Service provides a complete application consumed by users.',
        },
      ],
    },

    {
      title: 'Cloud Deployment Models',
      content:
        'Organizations can use public cloud, private cloud, hybrid cloud, or multi-cloud approaches depending on security, compliance, cost, architecture, and business requirements.',
      highlights: [
        {
          title: 'Public cloud',
          description:
            'Cloud infrastructure operated by a provider and consumed by multiple customers.',
        },
        {
          title: 'Private cloud',
          description:
            'Cloud infrastructure dedicated to a particular organization or environment.',
        },
        {
          title: 'Hybrid cloud',
          description:
            'An architecture combining private or on-premises infrastructure with public cloud resources.',
        },
        {
          title: 'Multi-cloud',
          description:
            'Using services from multiple cloud providers.',
        },
      ],
    },

    {
      title: 'Regions and Availability Zones',
      content:
        'Cloud providers organize infrastructure geographically. A region represents a geographic area containing cloud infrastructure, while availability zones provide isolated infrastructure locations within a region. Distributing workloads across zones can improve resilience.',
      highlights: [
        {
          title: 'Region',
          description:
            'A geographic area containing cloud infrastructure.',
        },
        {
          title: 'Availability Zone',
          description:
            'An isolated infrastructure location within a cloud region.',
        },
        {
          title: 'Fault isolation',
          description:
            'Designing infrastructure so a failure in one location does not automatically bring down the entire service.',
        },
      ],
    },

    {
      title: 'Compute',
      content:
        'Cloud compute provides processing capacity for applications. Compute can be delivered through virtual machines, containers, managed container platforms, serverless functions, and specialized hardware.',
      highlights: [
        {
          title: 'Virtual machine',
          description:
            'A software-defined computer running on shared physical infrastructure.',
        },
        {
          title: 'Container',
          description:
            'A packaged application environment containing application code and its required runtime components.',
        },
        {
          title: 'Serverless function',
          description:
            'A managed execution unit where the provider handles much of the underlying server infrastructure.',
        },
      ],
    },

    {
      title: 'Cloud Storage',
      content:
        'Cloud storage provides persistent storage for applications and data. Common storage patterns include object storage, block storage, and file storage.',
      highlights: [
        {
          title: 'Object storage',
          description:
            'Storage designed for objects such as files, media, backups, and large unstructured datasets.',
        },
        {
          title: 'Block storage',
          description:
            'Storage presented as blocks that can be attached to compute systems.',
        },
        {
          title: 'File storage',
          description:
            'Shared filesystem-style storage accessible by multiple systems.',
        },
      ],
    },

    {
      title: 'Cloud Networking',
      content:
        'Cloud networking connects workloads and controls how traffic enters, leaves, and moves between services. Important concepts include virtual networks, subnets, routing, firewalls, load balancers, DNS, and private connectivity.',
      highlights: [
        {
          title: 'Virtual network',
          description:
            'A logically isolated network environment for cloud resources.',
        },
        {
          title: 'Subnet',
          description:
            'A logical subdivision of a network address space.',
        },
        {
          title: 'Load balancer',
          description:
            'A service that distributes incoming traffic across multiple application instances.',
        },
        {
          title: 'DNS',
          description:
            'A system that maps domain names to network destinations.',
        },
      ],
    },

    {
      title: 'Identity and Access Management',
      content:
        'Cloud security depends heavily on identity and access management. Permissions should follow least privilege so users, applications, and services receive only the access required for their responsibilities.',
      highlights: [
        {
          title: 'IAM',
          description:
            'Identity and Access Management controls who or what can access cloud resources.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the minimum permissions necessary.',
        },
        {
          title: 'Role',
          description:
            'A collection of permissions that can be assigned to an identity or workload.',
        },
      ],
    },

    {
      title: 'Cloud Security',
      content:
        'Cloud security is a shared responsibility between the cloud provider and customer. Providers secure portions of the underlying infrastructure, while customers remain responsible for appropriate configuration, identities, applications, data, and workloads.',
      highlights: [
        {
          title: 'Shared responsibility',
          description:
            'Security responsibilities are divided between the cloud provider and customer.',
        },
        {
          title: 'Configuration security',
          description:
            'Ensuring cloud resources are configured according to security requirements.',
        },
        {
          title: 'Data protection',
          description:
            'Protecting stored and transmitted information using appropriate controls.',
        },
      ],
    },

    {
      title: 'High Availability',
      content:
        'Cloud architectures can improve availability by distributing workloads across multiple instances, availability zones, or regions. High availability requires redundancy and appropriate failure-handling mechanisms.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Designing systems to remain operational despite expected component failures.',
        },
        {
          title: 'Redundancy',
          description:
            'Maintaining multiple components or paths so one failure does not stop the service.',
        },
        {
          title: 'Failover',
          description:
            'Moving workload to another healthy resource when the primary resource fails.',
        },
      ],
    },

    {
      title: 'Scalability and Elasticity',
      content:
        'Scalability describes the ability of a system to handle increasing workload. Elasticity adds the ability to dynamically add or remove resources according to demand.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing the capacity of an existing compute resource.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adding more instances to distribute workload.',
        },
        {
          title: 'Auto scaling',
          description:
            'Automatically adjusting resources according to defined workload conditions.',
        },
      ],
    },

    {
      title: 'Cloud Cost Management',
      content:
        'Cloud infrastructure is flexible but can become expensive when resources are poorly governed. Cost management includes rightsizing, usage monitoring, budgets, lifecycle policies, reserved capacity where appropriate, and removing unused resources.',
      highlights: [
        {
          title: 'Rightsizing',
          description:
            'Selecting resource capacity that appropriately matches workload requirements.',
        },
        {
          title: 'Cost optimization',
          description:
            'Reducing unnecessary infrastructure spending while maintaining required performance and reliability.',
        },
        {
          title: 'Budget',
          description:
            'A defined spending target used to monitor cloud consumption.',
        },
      ],
    },

    {
      title: 'Infrastructure as Code',
      content:
        'Infrastructure as Code allows cloud infrastructure to be defined through version-controlled configuration instead of being created manually through a web console. This improves repeatability, reviewability, and automation.',
      highlights: [
        {
          title: 'IaC',
          description:
            'Managing infrastructure through machine-readable configuration and code.',
        },
        {
          title: 'Declarative configuration',
          description:
            'Describing the desired infrastructure state rather than manually specifying every operational step.',
        },
        {
          title: 'Infrastructure drift',
          description:
            'A difference between the infrastructure defined in code and the infrastructure actually running.',
        },
      ],
    },

    {
      title: 'Cloud Observability',
      content:
        'Cloud workloads should be observable through metrics, logs, traces, health checks, and alerts. Observability helps teams understand system behavior, troubleshoot failures, and make capacity and reliability decisions.',
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
          title: 'Trace',
          description:
            'A record showing how a request moves through distributed services.',
        },
      ],
    },

    {
      title: 'Cloud Reliability',
      content:
        'Reliable cloud systems are designed around failure rather than assuming infrastructure will always work. Teams use redundancy, health checks, automated recovery, backups, disaster recovery plans, and tested operational procedures.',
      highlights: [
        {
          title: 'Failure domain',
          description:
            'A set of infrastructure components that can fail together.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Processes and infrastructure used to restore systems after major failures.',
        },
        {
          title: 'Backup',
          description:
            'A separate copy of data or configuration used for recovery.',
        },
      ],
    },

    {
      title: 'Cloud and Containers',
      content:
        'Cloud platforms provide infrastructure where containerized applications can run. Containers improve application packaging and portability, while cloud platforms provide compute, networking, storage, security, and orchestration capabilities.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application environment designed to run consistently across supported infrastructure.',
        },
        {
          title: 'Container orchestration',
          description:
            'Automated management of container deployment, scaling, networking, and recovery.',
        },
      ],
    },

    {
      title: 'Cloud and Serverless',
      content:
        'Serverless computing allows teams to run application logic without managing traditional servers directly. The provider manages much of the underlying infrastructure while applications are executed according to requests or events.',
      highlights: [
        {
          title: 'Serverless',
          description:
            'A cloud execution model where infrastructure management is largely abstracted from the application team.',
        },
        {
          title: 'Event-driven',
          description:
            'A model where application execution is triggered by events.',
        },
      ],
    },

    {
      title: 'Cloud for AI Applications',
      content:
        'Cloud infrastructure is commonly used to run AI applications because AI workloads may require scalable compute, GPU infrastructure, object storage, vector databases, networking, managed model services, observability, and secure data access.',
      highlights: [
        {
          title: 'GPU',
          description:
            'A processor architecture commonly used for parallel AI and machine-learning computation.',
        },
        {
          title: 'Inference',
          description:
            'Running a trained AI model to generate predictions or responses.',
        },
        {
          title: 'Model serving',
          description:
            'Making an AI model available through an application or service interface.',
        },
        {
          title: 'AI infrastructure',
          description:
            'The compute, storage, networking, and platform components required to operate AI workloads.',
        },
      ],
    },

    {
      title: 'AI Cloud Architecture',
      content:
        'A typical cloud AI application may contain a frontend, API layer, authentication, application services, model-serving or model-provider integration, object storage, database or vector database, queues, observability, and security controls. The architecture should be designed around latency, cost, availability, data protection, and scalability.',
      highlights: [
        {
          title: 'API layer',
          description:
            'The interface through which clients communicate with backend services.',
        },
        {
          title: 'Vector database',
          description:
            'A database optimized for storing and searching vector representations used by AI retrieval systems.',
        },
        {
          title: 'Queue',
          description:
            'A mechanism for asynchronously passing work between components.',
        },
      ],
    },

    {
      title: 'Cloud Governance',
      content:
        'Cloud governance establishes organizational controls around security, cost, architecture, access, compliance, resource ownership, and operational standards. Governance should enable teams to move quickly without creating uncontrolled risk.',
      highlights: [
        {
          title: 'Governance',
          description:
            'Policies, controls, and decision frameworks used to manage cloud usage.',
        },
        {
          title: 'Resource ownership',
          description:
            'Clear accountability for cloud resources and their associated cost and risk.',
        },
        {
          title: 'Policy',
          description:
            'A defined rule governing how cloud resources may be created or used.',
        },
      ],
    },

    {
      title: 'Cloud for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, cloud is not simply a hosting decision. It is a trade-off between cost, reliability, scalability, security, speed, operational complexity, vendor capabilities, and business requirements. The leader should ensure architecture decisions are connected to measurable business and technical outcomes.',
      highlights: [
        {
          title: 'Architecture trade-off',
          description:
            'Choosing between competing technical and business requirements.',
        },
        {
          title: 'Total cost of ownership',
          description:
            'The broader cost of operating a solution, including infrastructure, operations, licensing, and engineering effort.',
        },
        {
          title: 'Vendor dependency',
          description:
            'The degree to which a system depends on capabilities or interfaces specific to a cloud provider.',
        },
        {
          title: 'Operational maturity',
          description:
            'The organization’s ability to operate, monitor, secure, and recover cloud systems reliably.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating cloud as unlimited infrastructure, ignoring cost controls, granting excessive permissions, deploying without observability, depending on a single failure domain, creating infrastructure manually without governance, and selecting cloud services without considering long-term operational complexity.',
      highlights: [
        {
          title: 'Cloud overspending',
          description:
            'Uncontrolled infrastructure usage resulting in unnecessary cost.',
        },
        {
          title: 'Over-permissioning',
          description:
            'Giving identities more access than they require.',
        },
        {
          title: 'Single failure domain',
          description:
            'Concentrating critical workload in infrastructure that can fail together.',
        },
        {
          title: 'Manual infrastructure',
          description:
            'Creating important infrastructure manually without repeatable definitions or controls.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'docker',
    'kubernetes',
    'aws',
    'azure',
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
  ],
}

export default cloudKnowledge
