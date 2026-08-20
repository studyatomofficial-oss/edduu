import type { KnowledgeDefinition } from './knowledge'

export const ec2Knowledge: KnowledgeDefinition = {
  technologyId: 'aws-ec2',
  slug: 'aws-ec2',
  title: 'Amazon EC2',
  summary:
    'Amazon EC2 is an AWS compute service that provides resizable virtual servers for running applications, APIs, databases, workers, and other workloads with control over operating systems, networking, storage, and compute capacity.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Amazon EC2?',
      content:
        'Amazon Elastic Compute Cloud, commonly called EC2, is an AWS service that provides virtual machines called instances. Teams can choose compute capacity, operating systems, networking configuration, storage, and security controls according to workload requirements.',
      highlights: [
        {
          title: 'EC2',
          description:
            'AWS service for running virtual servers in the cloud.',
        },
        {
          title: 'Instance',
          description:
            'A virtual server running within AWS.',
        },
        {
          title: 'Compute',
          description:
            'Processing capacity used to execute applications and workloads.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of EC2 like renting a computer from a large data center. You do not purchase the physical machine, but you choose the type of computer you need, install your operating system and software, configure its network and security, and use it for as long as required.',
      highlights: [
        {
          title: 'Rented computer',
          description:
            'Comparable to an EC2 instance.',
        },
        {
          title: 'Computer specification',
          description:
            'Comparable to an EC2 instance type.',
        },
        {
          title: 'Data center',
          description:
            'Comparable to AWS infrastructure where the physical hardware operates.',
        },
      ],
    },

    {
      title: 'Why EC2 Matters',
      content:
        'EC2 provides significantly more control over the operating environment than highly managed compute services. It is useful when applications require specific operating systems, runtimes, networking behavior, software packages, or long-running processes.',
      highlights: [
        {
          title: 'Runtime control',
          description:
            'Control over the operating system and software environment.',
        },
        {
          title: 'Flexible compute',
          description:
            'Ability to select compute capacity according to workload requirements.',
        },
        {
          title: 'Long-running workloads',
          description:
            'Applications or services that need continuously available compute capacity.',
        },
      ],
    },

    {
      title: 'EC2 Instance',
      content:
        'An EC2 instance is a virtual machine created from an Amazon Machine Image and configured with an instance type, networking, storage, security controls, and other settings.',
      highlights: [
        {
          title: 'Instance',
          description:
            'A running virtual machine in AWS.',
        },
        {
          title: 'AMI',
          description:
            'An Amazon Machine Image used as a template for launching instances.',
        },
        {
          title: 'Instance type',
          description:
            'Defines the compute, memory, networking, and other characteristics available to an instance.',
        },
      ],
    },

    {
      title: 'Amazon Machine Image',
      content:
        'An Amazon Machine Image, or AMI, is a template used to launch EC2 instances. It can contain an operating system and required software configuration.',
      highlights: [
        {
          title: 'AMI',
          description:
            'A template from which EC2 instances can be launched.',
        },
        {
          title: 'Operating system',
          description:
            'The base software environment running on an EC2 instance.',
        },
        {
          title: 'Custom AMI',
          description:
            'An organization-specific machine image containing predefined software and configuration.',
        },
      ],
    },

    {
      title: 'EC2 Instance Types',
      content:
        'EC2 offers multiple instance families optimized for different workload characteristics such as general-purpose computing, compute-intensive workloads, memory-intensive workloads, storage-intensive workloads, and accelerated computing.',
      highlights: [
        {
          title: 'General purpose',
          description:
            'Balanced compute, memory, and networking for a broad range of applications.',
        },
        {
          title: 'Compute optimized',
          description:
            'Instances designed for workloads requiring relatively high CPU performance.',
        },
        {
          title: 'Memory optimized',
          description:
            'Instances designed for applications requiring substantial memory capacity.',
        },
        {
          title: 'Accelerated computing',
          description:
            'Instances containing accelerators such as GPUs for specialized workloads.',
        },
      ],
    },

    {
      title: 'EC2 Regions and Availability Zones',
      content:
        'EC2 resources operate within AWS Regions and Availability Zones. Regions represent geographic areas, while Availability Zones are isolated locations within a Region. Designing across multiple Availability Zones can improve application resilience.',
      highlights: [
        {
          title: 'Region',
          description:
            'A geographic AWS infrastructure area containing multiple Availability Zones.',
        },
        {
          title: 'Availability Zone',
          description:
            'An isolated location within an AWS Region.',
        },
        {
          title: 'Multi-AZ',
          description:
            'Architecture distributing workloads across multiple Availability Zones.',
        },
      ],
    },

    {
      title: 'EC2 Networking',
      content:
        'EC2 instances operate within Amazon VPC networking. Network configuration determines how instances communicate with other resources, the internet, and external systems.',
      highlights: [
        {
          title: 'VPC',
          description:
            'A logically isolated virtual network in AWS.',
        },
        {
          title: 'Subnet',
          description:
            'A network segment inside a VPC.',
        },
        {
          title: 'Private subnet',
          description:
            'A subnet designed for resources that should not receive direct inbound internet traffic.',
        },
        {
          title: 'Public subnet',
          description:
            'A subnet with routing that can provide internet connectivity when combined with appropriate resource configuration.',
        },
      ],
    },

    {
      title: 'Security Groups',
      content:
        'Security groups act as virtual firewalls for EC2 instances. They control allowed inbound and outbound network traffic based on rules such as protocol, port, and source or destination.',
      highlights: [
        {
          title: 'Security group',
          description:
            'A virtual firewall controlling network traffic associated with an EC2 instance.',
        },
        {
          title: 'Inbound rule',
          description:
            'A rule defining traffic allowed to reach a resource.',
        },
        {
          title: 'Outbound rule',
          description:
            'A rule defining traffic allowed to leave a resource.',
        },
      ],
    },

    {
      title: 'EC2 Key Pairs',
      content:
        'Key pairs can be used to securely authenticate to supported EC2 operating systems. Access management should follow organizational security practices and avoid uncontrolled sharing of private keys.',
      highlights: [
        {
          title: 'Key pair',
          description:
            'A public-private cryptographic key combination used for secure authentication.',
        },
        {
          title: 'Private key',
          description:
            'The secret portion of a key pair that must be protected.',
        },
        {
          title: 'SSH',
          description:
            'A secure protocol commonly used to administer Linux-based EC2 instances remotely.',
        },
      ],
    },

    {
      title: 'EC2 Storage',
      content:
        'EC2 instances can use different storage options. Amazon EBS provides persistent block storage volumes, while instance store provides temporary local storage tied to the underlying host lifecycle.',
      highlights: [
        {
          title: 'EBS',
          description:
            'Elastic Block Store providing persistent block storage for EC2.',
        },
        {
          title: 'Instance store',
          description:
            'Temporary local storage associated with an EC2 host and instance lifecycle.',
        },
        {
          title: 'Block storage',
          description:
            'Storage presented as a block device to an operating system.',
        },
      ],
    },

    {
      title: 'Amazon EBS',
      content:
        'Amazon Elastic Block Store provides persistent block storage volumes that can be attached to EC2 instances. EBS volumes can be used for operating-system disks, application data, databases, and other workloads requiring persistent block storage.',
      highlights: [
        {
          title: 'EBS volume',
          description:
            'A persistent block-storage volume that can be attached to an EC2 instance.',
        },
        {
          title: 'Snapshot',
          description:
            'A point-in-time backup representation of an EBS volume.',
        },
        {
          title: 'Persistence',
          description:
            'The ability for data to remain available beyond an individual compute instance lifecycle.',
        },
      ],
    },

    {
      title: 'EC2 Elastic IP',
      content:
        'An Elastic IP is a static public IPv4 address that can be associated with AWS resources according to AWS networking rules. Static addressing can be useful in scenarios where an application needs a stable public address.',
      highlights: [
        {
          title: 'Elastic IP',
          description:
            'A persistent public IPv4 address allocated to an AWS account.',
        },
        {
          title: 'Static address',
          description:
            'A network address intended to remain stable rather than changing with instance lifecycle.',
        },
      ],
    },

    {
      title: 'EC2 User Data',
      content:
        'EC2 user data can provide initialization instructions when an instance starts. It is commonly used for bootstrapping software, installing dependencies, configuring services, or performing first-boot setup.',
      highlights: [
        {
          title: 'User data',
          description:
            'Initialization data supplied to an EC2 instance during launch.',
        },
        {
          title: 'Bootstrap',
          description:
            'The process of preparing a newly created machine for application use.',
        },
      ],
    },

    {
      title: 'EC2 Auto Scaling',
      content:
        'Amazon EC2 Auto Scaling can automatically add or remove EC2 instances according to configured policies and workload conditions. This allows application capacity to adapt to changing demand.',
      highlights: [
        {
          title: 'Auto Scaling Group',
          description:
            'A managed group of EC2 instances maintained according to desired capacity and scaling policies.',
        },
        {
          title: 'Scale out',
          description:
            'Increasing capacity by adding more instances.',
        },
        {
          title: 'Scale in',
          description:
            'Reducing capacity by removing instances.',
        },
      ],
    },

    {
      title: 'Load Balancing with EC2',
      content:
        'EC2 applications are commonly placed behind load balancers so traffic can be distributed across multiple instances. This improves availability and allows horizontal scaling.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A service that distributes network or application traffic across multiple targets.',
        },
        {
          title: 'Target',
          description:
            'A backend resource that receives traffic from a load balancer.',
        },
        {
          title: 'Health check',
          description:
            'A test used to determine whether a backend target is healthy enough to receive traffic.',
        },
      ],
    },

    {
      title: 'EC2 IAM',
      content:
        'AWS Identity and Access Management controls permissions for EC2-related operations. Applications running on EC2 can use IAM roles to access AWS services without embedding long-lived access keys in application code.',
      highlights: [
        {
          title: 'IAM role',
          description:
            'An AWS identity that can be assumed by trusted entities and provide temporary permissions.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving an application or identity only the permissions it actually requires.',
        },
        {
          title: 'Temporary credentials',
          description:
            'Short-lived credentials used to access AWS resources without embedding permanent keys in applications.',
        },
      ],
    },

    {
      title: 'EC2 Pricing Models',
      content:
        'EC2 provides multiple purchasing models for different workload patterns. On-Demand is flexible, Reserved Instances or Savings Plans can provide cost benefits for predictable usage, and Spot Instances can offer significant discounts for interruptible workloads.',
      highlights: [
        {
          title: 'On-Demand',
          description:
            'Pay for compute without a long-term capacity commitment.',
        },
        {
          title: 'Spot',
          description:
            'Discounted compute capacity that can be interrupted by AWS according to Spot capacity conditions.',
        },
        {
          title: 'Savings Plans',
          description:
            'A pricing commitment that can reduce compute costs for qualifying usage.',
        },
      ],
    },

    {
      title: 'EC2 Spot Instances',
      content:
        'Spot Instances can significantly reduce compute costs for workloads that can tolerate interruption. They are useful for batch processing, distributed workloads, development environments, and other fault-tolerant workloads.',
      highlights: [
        {
          title: 'Interruptible workload',
          description:
            'A workload designed to continue or recover when compute capacity is interrupted.',
        },
        {
          title: 'Spot capacity',
          description:
            'AWS compute capacity offered through the Spot pricing model.',
        },
        {
          title: 'Fault tolerance',
          description:
            'The ability of a system to continue operating or recover after failures or interruptions.',
        },
      ],
    },

    {
      title: 'EC2 Monitoring',
      content:
        'Amazon CloudWatch can monitor EC2 metrics, logs, alarms, and operational signals. Monitoring should cover infrastructure health as well as application-level indicators.',
      highlights: [
        {
          title: 'CloudWatch',
          description:
            'AWS observability service for metrics, logs, alarms, and monitoring.',
        },
        {
          title: 'Metric',
          description:
            'A numerical measurement representing system behavior.',
        },
        {
          title: 'Alarm',
          description:
            'A monitoring rule that reacts when a metric crosses a configured threshold or condition.',
        },
      ],
    },

    {
      title: 'EC2 High Availability',
      content:
        'A highly available EC2 architecture normally avoids relying on one instance. Multiple instances can be distributed across Availability Zones and placed behind a load balancer, with Auto Scaling maintaining capacity.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Designing a system to remain operational despite individual component failures.',
        },
        {
          title: 'Redundancy',
          description:
            'Maintaining multiple components so one failure does not necessarily cause service failure.',
        },
        {
          title: 'Multi-AZ architecture',
          description:
            'Distributing resources across multiple Availability Zones for improved resilience.',
        },
      ],
    },

    {
      title: 'EC2 Backup and Recovery',
      content:
        'EC2 workloads require backup and recovery planning. EBS snapshots, machine images, application-level backups, and infrastructure automation can support recovery objectives depending on the workload.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A copy of data or configuration maintained for recovery.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring application or infrastructure functionality after failure.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target time within which a service should be restored.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the acceptable amount of data loss measured in time.',
        },
      ],
    },

    {
      title: 'EC2 Security',
      content:
        'EC2 security includes hardened machine images, least-privilege IAM, secure network design, patch management, endpoint protection, encrypted storage, restricted administrative access, monitoring, and vulnerability management.',
      highlights: [
        {
          title: 'Hardening',
          description:
            'Reducing unnecessary attack surface by securely configuring a system.',
        },
        {
          title: 'Patch management',
          description:
            'Keeping operating systems and software updated with required security fixes.',
        },
        {
          title: 'Attack surface',
          description:
            'The set of exposed components and interfaces that could potentially be targeted by an attacker.',
        },
      ],
    },

    {
      title: 'EC2 and Terraform',
      content:
        'Terraform can provision EC2 instances, networking, security groups, IAM-related infrastructure, load balancers, Auto Scaling Groups, and supporting AWS resources through Infrastructure as Code.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure through version-controlled configuration.',
        },
        {
          title: 'Terraform',
          description:
            'Infrastructure as Code tool commonly used to provision and manage AWS infrastructure.',
        },
        {
          title: 'Repeatability',
          description:
            'The ability to recreate infrastructure consistently from configuration.',
        },
      ],
    },

    {
      title: 'EC2 and Ansible',
      content:
        'Ansible can configure software and operating-system settings on EC2 instances after they are provisioned. Terraform and Ansible can therefore complement each other, with Terraform commonly creating infrastructure and Ansible configuring the machines.',
      highlights: [
        {
          title: 'Provisioning',
          description:
            'Creating infrastructure resources.',
        },
        {
          title: 'Configuration management',
          description:
            'Applying and maintaining operating-system and application configuration.',
        },
        {
          title: 'Ansible',
          description:
            'Automation and configuration-management platform.',
        },
      ],
    },

    {
      title: 'EC2 and Docker',
      content:
        'Docker containers can run on EC2 instances when teams need direct control over the underlying compute environment while using containerized application packaging.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application environment containing application code and required dependencies.',
        },
        {
          title: 'Container runtime',
          description:
            'Software responsible for running containers on a host.',
        },
      ],
    },

    {
      title: 'EC2 and Kubernetes',
      content:
        'EC2 instances can provide compute nodes for Kubernetes clusters managed directly or through services such as Amazon EKS. Kubernetes handles workload orchestration while EC2 provides underlying compute capacity.',
      highlights: [
        {
          title: 'Kubernetes node',
          description:
            'A machine that provides compute capacity for Kubernetes workloads.',
        },
        {
          title: 'EKS',
          description:
            'AWS managed Kubernetes service.',
        },
        {
          title: 'Container orchestration',
          description:
            'Automated scheduling, scaling, networking, and lifecycle management of container workloads.',
        },
      ],
    },

    {
      title: 'EC2 for AI Workloads',
      content:
        'EC2 can run AI inference, model-serving, data processing, training, and experimentation workloads. GPU-capable EC2 instance families can provide accelerated computing for workloads that require specialized hardware.',
      highlights: [
        {
          title: 'GPU instance',
          description:
            'An EC2 instance equipped with GPU acceleration for specialized compute workloads.',
        },
        {
          title: 'Inference',
          description:
            'Running a trained AI model to generate predictions or responses.',
        },
        {
          title: 'Training',
          description:
            'Using data and compute resources to optimize model parameters.',
        },
      ],
    },

    {
      title: 'EC2 AI Architecture Example',
      content:
        'A production AI API could run application services on EC2 behind an Application Load Balancer, use Auto Scaling for capacity, store model artifacts in S3, use IAM roles for AWS access, and send metrics and logs to CloudWatch. GPU instances can be introduced when model inference requires acceleration.',
      highlights: [
        {
          title: 'Application Load Balancer',
          description:
            'A managed AWS load balancer designed for application-level HTTP and HTTPS traffic.',
        },
        {
          title: 'S3',
          description:
            'AWS object storage commonly used for model artifacts, datasets, and application files.',
        },
        {
          title: 'CloudWatch',
          description:
            'AWS monitoring and observability service.',
        },
      ],
    },

    {
      title: 'EC2 Deployment Strategy',
      content:
        'EC2 applications can use rolling, blue-green, or canary deployment strategies depending on architecture and delivery tooling. Auto Scaling Groups and load balancers can help support controlled instance replacement and traffic management.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Updating application instances gradually instead of replacing all instances simultaneously.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining separate old and new environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Releasing a new version to a limited portion of traffic before broader rollout.',
        },
      ],
    },

    {
      title: 'EC2 Cost Optimization',
      content:
        'EC2 cost optimization involves selecting appropriate instance sizes, shutting down unnecessary environments, using Auto Scaling, considering Savings Plans or Spot capacity where appropriate, and monitoring utilization.',
      highlights: [
        {
          title: 'Right-sizing',
          description:
            'Selecting compute capacity that matches actual workload requirements.',
        },
        {
          title: 'Utilization',
          description:
            'The degree to which provisioned compute capacity is actually being used.',
        },
        {
          title: 'Idle capacity',
          description:
            'Provisioned compute resources that consume cost without providing useful workload capacity.',
        },
      ],
    },

    {
      title: 'EC2 Reliability',
      content:
        'EC2 reliability depends on avoiding single-instance dependencies, distributing workloads across Availability Zones, using health checks and Auto Scaling, maintaining backups, monitoring infrastructure, and designing application recovery mechanisms.',
      highlights: [
        {
          title: 'Single point of failure',
          description:
            'A component whose failure can cause the entire service to fail.',
        },
        {
          title: 'Auto healing',
          description:
            'Automatically replacing unhealthy compute capacity.',
        },
        {
          title: 'Resilience',
          description:
            'The ability of a system to continue operating or recover from failures.',
        },
      ],
    },

    {
      title: 'EC2 for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, EC2 should be viewed as a compute building block rather than simply a virtual machine. Key decisions include workload fit, availability, scaling, security, cost, operational ownership, deployment strategy, observability, and whether a higher-level managed service would reduce operational complexity.',
      highlights: [
        {
          title: 'Workload fit',
          description:
            'Matching compute architecture to application requirements.',
        },
        {
          title: 'Operational ownership',
          description:
            'Understanding which infrastructure responsibilities remain with the engineering team.',
        },
        {
          title: 'Managed-service trade-off',
          description:
            'Balancing infrastructure control against the operational simplicity of higher-level services.',
        },
        {
          title: 'Total cost of ownership',
          description:
            'Considering infrastructure cost together with engineering and operational effort.',
        },
      ],
    },

    {
      title: 'When Not to Use EC2',
      content:
        'EC2 is not always the simplest compute option. If an application can run effectively on a managed serverless platform, managed container service, or another higher-level service, those options may reduce infrastructure management. EC2 is most valuable when the required control and flexibility justify the additional operational responsibility.',
      highlights: [
        {
          title: 'Managed compute',
          description:
            'A compute service where the cloud provider manages more of the underlying infrastructure.',
        },
        {
          title: 'Operational overhead',
          description:
            'The engineering effort required to maintain servers, operating systems, networking, security, and related infrastructure.',
        },
        {
          title: 'Control versus simplicity',
          description:
            'The architectural trade-off between direct infrastructure control and reduced operational complexity.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common EC2 mistakes include exposing administrative ports publicly, using overly broad IAM permissions, running production applications on a single instance, ignoring patching, over-provisioning compute, failing to monitor utilization, storing secrets in code, and manually changing infrastructure without a controlled process.',
      highlights: [
        {
          title: 'Public administrative access',
          description:
            'Exposing management interfaces to the internet without appropriate restrictions.',
        },
        {
          title: 'Over-permissioned IAM',
          description:
            'Granting more AWS permissions than an application or user requires.',
        },
        {
          title: 'Single-instance production',
          description:
            'Running a critical production service without redundancy.',
        },
        {
          title: 'Manual infrastructure drift',
          description:
            'Allowing infrastructure to diverge from its documented and automated configuration.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'aws',
    'aws-s3',
    'aws-lambda',
    'docker',
    'kubernetes',
    'terraform',
    'ansible',
    'helm',
    'serverless',
    'ci-cd',
    'github-actions',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
    'rollback-strategy',
  ],
}

export default ec2Knowledge
