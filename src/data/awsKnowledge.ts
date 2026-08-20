import type { KnowledgeDefinition } from './knowledge'

export const awsKnowledge: KnowledgeDefinition = {
  technologyId: 'aws',
  slug: 'aws',
  title: 'Amazon Web Services',
  summary:
    'Amazon Web Services (AWS) is a broad cloud platform providing compute, storage, networking, databases, security, analytics, AI, and managed infrastructure services.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is AWS?',
      content:
        'AWS is a cloud platform that provides infrastructure and managed services over the internet. Organizations can use AWS to build, deploy, operate, and scale applications without owning all of the underlying physical infrastructure.',
      highlights: [
        {
          title: 'AWS',
          description:
            'Amazon Web Services, a large public cloud platform.',
        },
        {
          title: 'Cloud service',
          description:
            'A computing capability delivered through a provider-managed platform.',
        },
        {
          title: 'Managed service',
          description:
            'A service where AWS operates significant portions of the underlying infrastructure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of AWS like a huge technology city. Instead of constructing your own power plant, warehouse, office building, security system, and delivery network, you can rent exactly the facilities you need from the city and connect them together.',
      highlights: [
        {
          title: 'City',
          description:
            'Comparable to the AWS cloud platform.',
        },
        {
          title: 'Buildings',
          description:
            'Comparable to AWS services such as compute, storage, and databases.',
        },
        {
          title: 'Infrastructure services',
          description:
            'Reusable capabilities provided by the cloud platform.',
        },
      ],
    },

    {
      title: 'AWS Global Infrastructure',
      content:
        'AWS operates infrastructure across geographic regions and availability zones. Applications can be designed to distribute workloads across isolated infrastructure locations for availability and resilience.',
      highlights: [
        {
          title: 'Region',
          description:
            'A geographic AWS infrastructure area containing multiple availability zones.',
        },
        {
          title: 'Availability Zone',
          description:
            'An isolated AWS infrastructure location within a region.',
        },
        {
          title: 'Edge location',
          description:
            'Infrastructure used by AWS services such as content delivery to serve users closer to their geographic location.',
        },
      ],
    },

    {
      title: 'Core AWS Service Categories',
      content:
        'AWS provides services across compute, storage, databases, networking, security, monitoring, analytics, integration, and artificial intelligence. Architects combine these services according to workload requirements.',
      highlights: [
        {
          title: 'Compute',
          description:
            'Services that provide processing capacity for applications.',
        },
        {
          title: 'Storage',
          description:
            'Services for storing application and business data.',
        },
        {
          title: 'Database',
          description:
            'Managed services for structured and unstructured data workloads.',
        },
        {
          title: 'Networking',
          description:
            'Services used to connect, isolate, route, and secure workloads.',
        },
      ],
    },

    {
      title: 'AWS Compute',
      content:
        'AWS provides multiple compute models including virtual machines, containers, serverless functions, and managed application platforms. The appropriate model depends on control requirements, workload behavior, operational maturity, and cost.',
      highlights: [
        {
          title: 'EC2',
          description:
            'AWS virtual machines providing configurable compute capacity.',
        },
        {
          title: 'ECS',
          description:
            'AWS container orchestration service for running containerized workloads.',
        },
        {
          title: 'EKS',
          description:
            'AWS managed Kubernetes service.',
        },
        {
          title: 'Lambda',
          description:
            'AWS serverless compute service for event-driven functions.',
        },
      ],
    },

    {
      title: 'Amazon EC2',
      content:
        'Amazon EC2 provides virtual servers with configurable CPU, memory, networking, storage, and operating-system options. Teams have significant control but also take on more operational responsibility than with highly managed services.',
      highlights: [
        {
          title: 'Instance',
          description:
            'A virtual machine running in AWS.',
        },
        {
          title: 'Instance type',
          description:
            'A defined combination of compute, memory, networking, and other capabilities.',
        },
        {
          title: 'AMI',
          description:
            'Amazon Machine Image used as a template for launching EC2 instances.',
        },
      ],
    },

    {
      title: 'Amazon S3',
      content:
        'Amazon S3 is an object storage service used to store files, backups, media, logs, datasets, application artifacts, and other objects at large scale.',
      highlights: [
        {
          title: 'Bucket',
          description:
            'A logical container for objects stored in S3.',
        },
        {
          title: 'Object',
          description:
            'A stored piece of data together with associated metadata.',
        },
        {
          title: 'Object storage',
          description:
            'A storage model where data is managed as objects rather than traditional filesystem blocks.',
        },
      ],
    },

    {
      title: 'Amazon Lambda',
      content:
        'AWS Lambda executes application code in response to events without requiring teams to manage traditional servers directly. It is useful for event-driven APIs, automation, processing pipelines, scheduled tasks, and lightweight backend workloads.',
      highlights: [
        {
          title: 'Function',
          description:
            'A unit of code executed by Lambda.',
        },
        {
          title: 'Event',
          description:
            'A trigger that causes a Lambda function to execute.',
        },
        {
          title: 'Serverless',
          description:
            'An execution model where infrastructure management is largely abstracted from the application team.',
        },
      ],
    },

    {
      title: 'Amazon RDS',
      content:
        'Amazon RDS provides managed relational database capabilities. AWS handles significant operational tasks such as infrastructure provisioning, backups, patching options, and availability features while the team remains responsible for database configuration and application-level data concerns.',
      highlights: [
        {
          title: 'Managed relational database',
          description:
            'A relational database operated with significant infrastructure management handled by AWS.',
        },
        {
          title: 'Backup',
          description:
            'A stored copy of database information used for recovery.',
        },
        {
          title: 'Multi-AZ',
          description:
            'An AWS availability configuration designed to improve database resilience.',
        },
      ],
    },

    {
      title: 'Amazon DynamoDB',
      content:
        'Amazon DynamoDB is a managed NoSQL database designed for high-scale workloads with predictable low-latency access patterns. It uses tables, items, attributes, and keys rather than traditional relational tables and joins.',
      highlights: [
        {
          title: 'NoSQL',
          description:
            'A family of database approaches that do not rely exclusively on traditional relational models.',
        },
        {
          title: 'Partition key',
          description:
            'A key used to distribute and locate data in DynamoDB.',
        },
        {
          title: 'Item',
          description:
            'A single record stored in a DynamoDB table.',
        },
      ],
    },

    {
      title: 'Amazon VPC',
      content:
        'Amazon VPC provides a logically isolated network environment for AWS resources. It includes subnets, route tables, security controls, gateways, and other networking components.',
      highlights: [
        {
          title: 'VPC',
          description:
            'Virtual Private Cloud, an isolated logical network environment in AWS.',
        },
        {
          title: 'Subnet',
          description:
            'A subdivision of a VPC address space.',
        },
        {
          title: 'Route table',
          description:
            'Rules controlling where network traffic is sent.',
        },
      ],
    },

    {
      title: 'Security Groups and Network ACLs',
      content:
        'AWS provides multiple network security controls. Security groups act as stateful virtual firewalls associated with resources, while network ACLs provide subnet-level stateless traffic controls.',
      highlights: [
        {
          title: 'Security group',
          description:
            'A stateful network access control associated with supported AWS resources.',
        },
        {
          title: 'Network ACL',
          description:
            'A stateless network access control applied at the subnet level.',
        },
        {
          title: 'Inbound rule',
          description:
            'A rule controlling incoming network traffic.',
        },
      ],
    },

    {
      title: 'AWS IAM',
      content:
        'AWS Identity and Access Management controls access to AWS resources. IAM uses identities, roles, policies, and permissions to implement controlled access.',
      highlights: [
        {
          title: 'IAM user',
          description:
            'An identity representing a person or specific long-lived access scenario.',
        },
        {
          title: 'IAM role',
          description:
            'An identity that can be assumed by trusted users, services, or workloads.',
        },
        {
          title: 'IAM policy',
          description:
            'A document defining permissions for AWS actions and resources.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the permissions required to perform a task.',
        },
      ],
    },

    {
      title: 'AWS Load Balancing',
      content:
        'AWS load-balancing services distribute traffic across application targets and can improve availability, scalability, and fault tolerance.',
      highlights: [
        {
          title: 'Application Load Balancer',
          description:
            'A load balancer designed for HTTP and HTTPS application traffic.',
        },
        {
          title: 'Network Load Balancer',
          description:
            'A load balancer designed for high-performance network-level traffic.',
        },
        {
          title: 'Target',
          description:
            'A backend resource that can receive traffic from a load balancer.',
        },
      ],
    },

    {
      title: 'AWS Auto Scaling',
      content:
        'AWS Auto Scaling can adjust application capacity according to workload conditions. Scaling policies should be based on meaningful workload and performance signals.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adding or removing application instances.',
        },
        {
          title: 'Scaling policy',
          description:
            'Rules determining when capacity should change.',
        },
        {
          title: 'Target tracking',
          description:
            'A scaling approach that attempts to maintain a selected metric around a target value.',
        },
      ],
    },

    {
      title: 'AWS CloudWatch',
      content:
        'Amazon CloudWatch provides monitoring and observability capabilities for AWS resources and applications. It can collect metrics, logs, alarms, and other operational signals.',
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
          title: 'Alarm',
          description:
            'A monitoring rule that can transition state when a metric crosses defined conditions.',
        },
      ],
    },

    {
      title: 'AWS CloudFormation',
      content:
        'AWS CloudFormation is an Infrastructure as Code service that allows AWS infrastructure to be defined through templates and managed as stacks.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure through version-controlled machine-readable definitions.',
        },
        {
          title: 'Stack',
          description:
            'A collection of AWS resources managed together by CloudFormation.',
        },
        {
          title: 'Template',
          description:
            'A definition describing AWS infrastructure resources and their configuration.',
        },
      ],
    },

    {
      title: 'AWS and Terraform',
      content:
        'Terraform can provision and manage AWS resources using declarative configuration. This provides an alternative or complementary Infrastructure as Code approach to CloudFormation.',
      highlights: [
        {
          title: 'Terraform provider',
          description:
            'The Terraform integration that allows configuration to manage resources in AWS.',
        },
        {
          title: 'Declarative infrastructure',
          description:
            'Defining the desired infrastructure state rather than manually performing every infrastructure operation.',
        },
      ],
    },

    {
      title: 'AWS Containers',
      content:
        'AWS provides multiple options for running containers, including ECS, EKS, and managed serverless container execution. The choice depends on orchestration requirements and operational ownership.',
      highlights: [
        {
          title: 'ECS',
          description:
            'AWS-native container orchestration service.',
        },
        {
          title: 'EKS',
          description:
            'Managed Kubernetes service on AWS.',
        },
        {
          title: 'Fargate',
          description:
            'AWS compute technology for running containers without managing the underlying servers directly.',
        },
      ],
    },

    {
      title: 'AWS CI/CD',
      content:
        'AWS supports software delivery through services and integrations for source control, build, testing, artifact management, deployment, and monitoring. AWS environments can also integrate with external CI/CD platforms such as GitHub Actions and Jenkins.',
      highlights: [
        {
          title: 'Build',
          description:
            'The process of compiling, packaging, and validating application changes.',
        },
        {
          title: 'Artifact',
          description:
            'A versioned output produced by a software delivery process.',
        },
        {
          title: 'Deployment',
          description:
            'Introducing a validated application version into an environment.',
        },
      ],
    },

    {
      title: 'AWS Reliability',
      content:
        'AWS reliability depends on architectural choices such as multi-AZ deployment, redundancy, health checks, backups, automated recovery, appropriate scaling, and tested disaster recovery procedures.',
      highlights: [
        {
          title: 'Multi-AZ',
          description:
            'Distributing workloads across multiple availability zones.',
        },
        {
          title: 'Failover',
          description:
            'Moving workload to a healthy resource after failure.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Processes and infrastructure used to restore systems after major failures.',
        },
      ],
    },

    {
      title: 'AWS Cost Management',
      content:
        'AWS follows a usage-based cloud model across many services. Cost management requires visibility into resource consumption, rightsizing, budgets, lifecycle policies, architecture choices, and unused resources.',
      highlights: [
        {
          title: 'Rightsizing',
          description:
            'Selecting resource capacity that appropriately matches workload requirements.',
        },
        {
          title: 'Cost allocation',
          description:
            'Attributing cloud spending to teams, products, environments, or business units.',
        },
        {
          title: 'Budget',
          description:
            'A defined spending target used to monitor cloud consumption.',
        },
      ],
    },

    {
      title: 'AWS AI and Machine Learning',
      content:
        'AWS provides infrastructure and managed services for machine learning and generative AI workloads. Teams can combine compute, storage, networking, databases, model services, and specialized AI capabilities.',
      highlights: [
        {
          title: 'GPU compute',
          description:
            'Accelerated computing infrastructure used for AI training and inference workloads.',
        },
        {
          title: 'Model inference',
          description:
            'Running an AI model to generate predictions or responses.',
        },
        {
          title: 'Managed AI service',
          description:
            'An AWS service that abstracts some infrastructure and operational complexity for AI workloads.',
        },
      ],
    },

    {
      title: 'AWS AI Application Architecture',
      content:
        'A typical AWS AI application may include a frontend, API layer, authentication, compute services, object storage, databases, queues, model inference services, observability, and security controls. Architecture should be driven by latency, cost, availability, data protection, and scale.',
      highlights: [
        {
          title: 'API layer',
          description:
            'The interface through which clients communicate with backend services.',
        },
        {
          title: 'Object storage',
          description:
            'Storage used for documents, media, datasets, backups, and artifacts.',
        },
        {
          title: 'Inference service',
          description:
            'A service responsible for executing AI models.',
        },
      ],
    },

    {
      title: 'AWS Governance',
      content:
        'AWS governance establishes organizational controls around accounts, identities, networking, security, cost, compliance, resource ownership, and architecture standards. Larger organizations often use multiple accounts and centralized governance mechanisms.',
      highlights: [
        {
          title: 'Account',
          description:
            'An AWS environment used to isolate resources, access, billing, and governance boundaries.',
        },
        {
          title: 'Organization',
          description:
            'A structure used to centrally manage multiple AWS accounts.',
        },
        {
          title: 'Guardrail',
          description:
            'A control designed to prevent or limit risky cloud behavior.',
        },
      ],
    },

    {
      title: 'AWS Shared Responsibility Model',
      content:
        'AWS secures the underlying cloud infrastructure, while customers remain responsible for the security of their workloads and configurations according to the service used. The exact division varies by service.',
      highlights: [
        {
          title: 'Provider responsibility',
          description:
            'Security responsibilities AWS handles for the underlying cloud infrastructure.',
        },
        {
          title: 'Customer responsibility',
          description:
            'Security responsibilities associated with workload configuration, identities, data, and applications.',
        },
      ],
    },

    {
      title: 'AWS for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, AWS decisions should be evaluated through business outcomes rather than individual services alone. Key considerations include reliability, scalability, cost, security, compliance, delivery speed, team expertise, vendor dependency, and operational ownership.',
      highlights: [
        {
          title: 'Architecture trade-off',
          description:
            'Choosing between competing technical, operational, and business requirements.',
        },
        {
          title: 'Total cost of ownership',
          description:
            'The broader cost of operating a solution, including infrastructure and engineering effort.',
        },
        {
          title: 'Vendor dependency',
          description:
            'The degree to which a solution depends on provider-specific capabilities.',
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
        'Common mistakes include granting excessive IAM permissions, exposing resources publicly without justification, deploying critical workloads into a single availability zone, ignoring cloud cost growth, manually creating infrastructure without governance, storing secrets insecurely, and selecting AWS services without understanding operational trade-offs.',
      highlights: [
        {
          title: 'Over-permissioning',
          description:
            'Granting identities more permissions than necessary.',
        },
        {
          title: 'Public exposure',
          description:
            'Making resources reachable from the public internet without appropriate business or security justification.',
        },
        {
          title: 'Single-AZ dependency',
          description:
            'Making critical workloads dependent on a single availability zone.',
        },
        {
          title: 'Cost blindness',
          description:
            'Operating cloud resources without meaningful cost visibility and controls.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
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
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
  ],
}

export default awsKnowledge
