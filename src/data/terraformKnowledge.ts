import type { KnowledgeDefinition } from './knowledge'

export const terraformKnowledge: KnowledgeDefinition = {
  technologyId: 'terraform',
  slug: 'terraform',
  title: 'Terraform',
  summary:
    'Terraform is an Infrastructure as Code tool used to define, provision, change, and manage cloud and infrastructure resources through declarative configuration.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Terraform?',
      content:
        'Terraform is an Infrastructure as Code tool created by HashiCorp. It allows infrastructure to be described in configuration files and then creates or changes resources to match the desired configuration. Terraform can manage infrastructure across multiple cloud providers and other platforms.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure through version-controlled, machine-readable definitions.',
        },
        {
          title: 'Declarative',
          description:
            'Describing the desired end state rather than manually specifying every operational step.',
        },
        {
          title: 'Provider',
          description:
            'A Terraform integration that allows Terraform to communicate with an external platform or service.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Terraform like giving a construction manager a detailed blueprint. You say, "I want this building with these rooms, these electrical connections, and these facilities." The manager compares the blueprint with what already exists and creates or changes only what is necessary to reach the desired design.',
      highlights: [
        {
          title: 'Blueprint',
          description:
            'Comparable to Terraform configuration.',
        },
        {
          title: 'Construction manager',
          description:
            'Comparable to Terraform executing the infrastructure plan.',
        },
        {
          title: 'Actual building',
          description:
            'Comparable to the infrastructure currently running.',
        },
      ],
    },

    {
      title: 'Why Terraform Matters',
      content:
        'Manually creating infrastructure through cloud consoles becomes difficult to reproduce, review, audit, and scale. Terraform makes infrastructure changes explicit, versionable, reviewable, and automatable.',
      highlights: [
        {
          title: 'Repeatability',
          description:
            'The ability to recreate infrastructure consistently from configuration.',
        },
        {
          title: 'Version control',
          description:
            'Infrastructure definitions can be stored and reviewed in Git.',
        },
        {
          title: 'Automation',
          description:
            'Infrastructure changes can be executed through automated workflows.',
        },
      ],
    },

    {
      title: 'Terraform Configuration',
      content:
        'Terraform configurations are normally written using HashiCorp Configuration Language (HCL). Configuration describes providers, resources, variables, outputs, modules, and other infrastructure relationships.',
      highlights: [
        {
          title: 'HCL',
          description:
            'HashiCorp Configuration Language used by Terraform configuration files.',
        },
        {
          title: 'Resource',
          description:
            'A Terraform-managed infrastructure object such as a virtual machine, network, database, or storage bucket.',
        },
        {
          title: 'Variable',
          description:
            'An input value that makes Terraform configurations reusable and configurable.',
        },
        {
          title: 'Output',
          description:
            'A value Terraform exposes after infrastructure is created or updated.',
        },
      ],
    },

    {
      title: 'Terraform Provider',
      content:
        'Terraform uses providers to communicate with external APIs. Providers translate Terraform configuration into operations understood by platforms such as AWS, Azure, Google Cloud, Kubernetes, GitHub, and many other systems.',
      highlights: [
        {
          title: 'AWS provider',
          description:
            'Terraform provider used to manage AWS resources.',
        },
        {
          title: 'Azure provider',
          description:
            'Terraform provider used to manage Azure resources.',
        },
        {
          title: 'Google Cloud provider',
          description:
            'Terraform provider used to manage Google Cloud resources.',
        },
      ],
    },

    {
      title: 'Terraform Resource',
      content:
        'A resource represents infrastructure that Terraform manages. A resource definition describes the desired configuration of that object and its relationship with other resources.',
      highlights: [
        {
          title: 'Resource',
          description:
            'An infrastructure object managed by Terraform.',
        },
        {
          title: 'Resource attribute',
          description:
            'A configuration property describing part of a resource.',
        },
        {
          title: 'Dependency',
          description:
            'A relationship indicating that one resource requires another resource or value.',
        },
      ],
    },

    {
      title: 'Terraform Variables',
      content:
        'Variables allow infrastructure configurations to be reused across environments and workloads without hardcoding every value. For example, development and production can use different instance sizes while sharing the same infrastructure design.',
      highlights: [
        {
          title: 'Input variable',
          description:
            'A configurable input supplied to a Terraform configuration.',
        },
        {
          title: 'Default value',
          description:
            'A value used when an input variable is not explicitly provided.',
        },
        {
          title: 'Environment-specific configuration',
          description:
            'Configuration values that differ between development, staging, and production.',
        },
      ],
    },

    {
      title: 'Terraform Outputs',
      content:
        'Outputs expose useful information from Terraform-managed infrastructure, such as a load-balancer address, resource identifier, or network endpoint.',
      highlights: [
        {
          title: 'Output',
          description:
            'A value exposed from Terraform after infrastructure operations.',
        },
        {
          title: 'Resource identifier',
          description:
            'A unique identifier assigned to an infrastructure resource.',
        },
      ],
    },

    {
      title: 'Terraform Plan',
      content:
        'Terraform plan compares the desired configuration with the known infrastructure state and determines what changes would be required. The plan provides an important review step before changes are applied.',
      highlights: [
        {
          title: 'Plan',
          description:
            'A proposed set of infrastructure changes generated by Terraform.',
        },
        {
          title: 'Review',
          description:
            'Examining proposed infrastructure changes before execution.',
        },
        {
          title: 'Change set',
          description:
            'The collection of infrastructure additions, modifications, or removals represented by a plan.',
        },
      ],
    },

    {
      title: 'Terraform Apply',
      content:
        'Terraform apply executes the approved infrastructure changes. In a controlled production workflow, teams typically review the plan before allowing the apply operation.',
      highlights: [
        {
          title: 'Apply',
          description:
            'The operation that creates, updates, or removes infrastructure according to the Terraform plan.',
        },
        {
          title: 'Approval',
          description:
            'A governance checkpoint before executing significant infrastructure changes.',
        },
      ],
    },

    {
      title: 'Terraform State',
      content:
        'Terraform state records information about infrastructure resources Terraform manages. It allows Terraform to understand the relationship between configuration and real infrastructure and determine what changes are required.',
      highlights: [
        {
          title: 'State',
          description:
            'Terraform-managed information describing infrastructure resources and their relationships.',
        },
        {
          title: 'State comparison',
          description:
            'Using configuration and state information to determine infrastructure changes.',
        },
        {
          title: 'Sensitive state',
          description:
            'State can contain sensitive information and therefore requires appropriate protection.',
        },
      ],
    },

    {
      title: 'Remote State',
      content:
        'For team environments, Terraform state is commonly stored remotely so multiple engineers and automation systems can work with a shared authoritative state. Remote state should have access controls, encryption, backups, and appropriate locking or concurrency protection.',
      highlights: [
        {
          title: 'Remote backend',
          description:
            'A storage mechanism used to keep Terraform state outside an individual developer machine.',
        },
        {
          title: 'State locking',
          description:
            'A mechanism that prevents conflicting Terraform operations from modifying shared state simultaneously.',
        },
        {
          title: 'State security',
          description:
            'Protecting Terraform state from unauthorized access because it may contain sensitive infrastructure information.',
        },
      ],
    },

    {
      title: 'Terraform Modules',
      content:
        'Modules package reusable Terraform configuration. They help organizations standardize infrastructure patterns and reduce duplication across teams and environments.',
      highlights: [
        {
          title: 'Module',
          description:
            'A reusable collection of Terraform configuration.',
        },
        {
          title: 'Reusable infrastructure',
          description:
            'Infrastructure patterns that can be instantiated multiple times with different inputs.',
        },
        {
          title: 'Module interface',
          description:
            'The variables and outputs through which a module communicates with its callers.',
        },
      ],
    },

    {
      title: 'Terraform Workspaces',
      content:
        'Terraform workspaces provide separate state instances for the same configuration. They can be useful in some scenarios, although larger organizations often prefer explicit environment or account structures when stronger isolation and governance are required.',
      highlights: [
        {
          title: 'Workspace',
          description:
            'A separate Terraform state associated with a configuration.',
        },
        {
          title: 'Environment',
          description:
            'A deployment context such as development, staging, or production.',
        },
        {
          title: 'Isolation',
          description:
            'Separating infrastructure and operational boundaries between environments.',
        },
      ],
    },

    {
      title: 'Terraform Drift',
      content:
        'Infrastructure drift occurs when actual infrastructure changes outside Terraform and no longer matches the configuration or state assumptions. Drift can happen when engineers manually modify resources through cloud consoles or other tools.',
      highlights: [
        {
          title: 'Drift',
          description:
            'A difference between the infrastructure Terraform expects and the infrastructure actually running.',
        },
        {
          title: 'Manual change',
          description:
            'An infrastructure modification performed outside the Terraform workflow.',
        },
        {
          title: 'Drift detection',
          description:
            'Identifying infrastructure changes that were not represented in the Terraform configuration.',
        },
      ],
    },

    {
      title: 'Terraform Dependency Graph',
      content:
        'Terraform builds a dependency graph from resource relationships and uses it to determine an appropriate order for infrastructure operations. Independent resources may be processed in parallel where possible.',
      highlights: [
        {
          title: 'Dependency graph',
          description:
            'A representation of relationships between infrastructure resources.',
        },
        {
          title: 'Parallelism',
          description:
            'Executing independent infrastructure operations concurrently where safe.',
        },
        {
          title: 'Implicit dependency',
          description:
            'A dependency inferred from references between Terraform resources.',
        },
      ],
    },

    {
      title: 'Terraform Lifecycle',
      content:
        'Terraform provides lifecycle controls that influence how resources are created, updated, replaced, or protected. These controls can help manage important production resources safely.',
      highlights: [
        {
          title: 'Create before destroy',
          description:
            'A lifecycle strategy that attempts to create a replacement resource before removing the existing one where supported.',
        },
        {
          title: 'Prevent destroy',
          description:
            'A lifecycle control intended to prevent accidental destruction of important resources.',
        },
        {
          title: 'Replacement',
          description:
            'Creating a new resource because an existing resource cannot be updated in place.',
        },
      ],
    },

    {
      title: 'Terraform and Git',
      content:
        'Terraform configuration should normally be stored in version control. Infrastructure changes can then use pull requests, code review, automated validation, policy checks, and controlled deployment workflows.',
      highlights: [
        {
          title: 'Infrastructure repository',
          description:
            'A version-controlled repository containing infrastructure configuration.',
        },
        {
          title: 'Pull request',
          description:
            'A review mechanism for proposed infrastructure changes.',
        },
        {
          title: 'Code review',
          description:
            'Human review of infrastructure changes before they are merged or deployed.',
        },
      ],
    },

    {
      title: 'Terraform and CI/CD',
      content:
        'Terraform can be integrated into CI/CD pipelines. A common workflow validates configuration, generates a plan, reviews or approves the plan, and then applies the approved infrastructure changes through controlled automation.',
      highlights: [
        {
          title: 'Validation',
          description:
            'Checking Terraform configuration for syntax and configuration issues.',
        },
        {
          title: 'Plan artifact',
          description:
            'A representation of proposed infrastructure changes used as a review input.',
        },
        {
          title: 'Automated apply',
          description:
            'Executing approved infrastructure changes through a controlled delivery pipeline.',
        },
      ],
    },

    {
      title: 'Terraform Security',
      content:
        'Terraform security includes protecting state, controlling provider credentials, using least privilege, avoiding hardcoded secrets, reviewing infrastructure changes, scanning configuration, and enforcing organizational policies.',
      highlights: [
        {
          title: 'Provider credential',
          description:
            'Credentials Terraform uses to authenticate with an infrastructure platform.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing Terraform only the permissions required to manage intended resources.',
        },
        {
          title: 'Secret management',
          description:
            'Keeping credentials and sensitive configuration outside source code and infrastructure definitions where appropriate.',
        },
      ],
    },

    {
      title: 'Terraform Policy as Code',
      content:
        'Policy as Code allows organizations to automatically evaluate infrastructure configurations against security, compliance, cost, and architectural rules before deployment.',
      highlights: [
        {
          title: 'Policy as Code',
          description:
            'Expressing governance rules in machine-readable form so they can be automatically evaluated.',
        },
        {
          title: 'Compliance',
          description:
            'Ensuring infrastructure follows organizational or regulatory requirements.',
        },
        {
          title: 'Preventive control',
          description:
            'A control that can stop non-compliant infrastructure before it reaches production.',
        },
      ],
    },

    {
      title: 'Terraform Multi-Cloud',
      content:
        'Terraform can manage resources across multiple cloud providers through different providers and modules. This can standardize Infrastructure as Code practices but does not automatically eliminate provider-specific architecture or operational differences.',
      highlights: [
        {
          title: 'Multi-cloud',
          description:
            'Using infrastructure or services from multiple cloud providers.',
        },
        {
          title: 'Provider abstraction',
          description:
            'A common Terraform interface for managing different platforms, while provider-specific behavior still remains.',
        },
        {
          title: 'Portability',
          description:
            'The ability to move workloads or infrastructure patterns between environments with limited redesign.',
        },
      ],
    },

    {
      title: 'Terraform and AWS',
      content:
        'Terraform can manage AWS resources such as VPCs, EC2 instances, S3 buckets, load balancers, databases, IAM resources, and many other services through the AWS provider.',
      highlights: [
        {
          title: 'AWS provider',
          description:
            'Terraform integration for managing AWS infrastructure.',
        },
        {
          title: 'VPC',
          description:
            'A logically isolated AWS network environment.',
        },
        {
          title: 'EC2',
          description:
            'AWS virtual compute infrastructure.',
        },
      ],
    },

    {
      title: 'Terraform and Azure',
      content:
        'Terraform can manage Azure resources including virtual networks, virtual machines, storage, databases, Kubernetes environments, identity-related resources, and application infrastructure.',
      highlights: [
        {
          title: 'Azure provider',
          description:
            'Terraform integration for managing Azure resources.',
        },
        {
          title: 'Resource group',
          description:
            'A logical Azure container for related resources.',
        },
      ],
    },

    {
      title: 'Terraform and Google Cloud',
      content:
        'Terraform can manage Google Cloud infrastructure such as networks, compute instances, storage, Kubernetes clusters, databases, IAM configuration, and other cloud resources.',
      highlights: [
        {
          title: 'Google Cloud provider',
          description:
            'Terraform integration for managing Google Cloud resources.',
        },
        {
          title: 'Project',
          description:
            'A Google Cloud boundary commonly used for resources, access, and billing.',
        },
      ],
    },

    {
      title: 'Terraform for Kubernetes',
      content:
        'Terraform can manage Kubernetes resources and supporting cloud infrastructure. This can allow teams to provision infrastructure and application platform resources through a common Infrastructure as Code workflow.',
      highlights: [
        {
          title: 'Kubernetes provider',
          description:
            'Terraform integration for managing Kubernetes resources.',
        },
        {
          title: 'Cluster infrastructure',
          description:
            'The compute, networking, storage, and management resources supporting a Kubernetes cluster.',
        },
      ],
    },

    {
      title: 'Terraform and AI Infrastructure',
      content:
        'Terraform can provision infrastructure required by AI applications, including GPU-capable compute, networking, storage, databases, Kubernetes platforms, model-serving infrastructure, and supporting observability components.',
      highlights: [
        {
          title: 'GPU infrastructure',
          description:
            'Compute infrastructure containing accelerated hardware for AI workloads.',
        },
        {
          title: 'Model serving infrastructure',
          description:
            'Cloud and platform resources required to expose AI models for inference.',
        },
        {
          title: 'AI environment',
          description:
            'The collection of infrastructure and services required to operate an AI workload.',
        },
      ],
    },

    {
      title: 'Terraform AI Platform Example',
      content:
        'An AI platform might use Terraform to provision a virtual network, Kubernetes cluster, object storage, database, GPU node pool, monitoring, secrets integration, and supporting services. Application deployment can then occur through a separate application delivery pipeline.',
      highlights: [
        {
          title: 'Platform layer',
          description:
            'The infrastructure and shared services on which applications run.',
        },
        {
          title: 'Application layer',
          description:
            'The application workloads deployed onto the platform.',
        },
        {
          title: 'Separation of concerns',
          description:
            'Keeping infrastructure provisioning and application delivery as clearly defined responsibilities.',
        },
      ],
    },

    {
      title: 'Terraform Cost Management',
      content:
        'Terraform can help standardize cost-related infrastructure controls, but Infrastructure as Code does not automatically make infrastructure inexpensive. Teams still need rightsizing, lifecycle policies, resource ownership, budgets, and usage monitoring.',
      highlights: [
        {
          title: 'Cost-aware infrastructure',
          description:
            'Infrastructure designed with explicit consideration of operating cost.',
        },
        {
          title: 'Resource lifecycle',
          description:
            'Managing when resources are created, retained, scaled, and removed.',
        },
        {
          title: 'Idle resource',
          description:
            'Infrastructure that consumes cost without providing useful workload capacity.',
        },
      ],
    },

    {
      title: 'Terraform Reliability',
      content:
        'Terraform improves infrastructure consistency but does not itself make applications highly available. Reliability still depends on architecture, redundancy, backups, monitoring, recovery mechanisms, and correct cloud configuration.',
      highlights: [
        {
          title: 'Infrastructure consistency',
          description:
            'Maintaining standardized infrastructure configurations across environments.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring infrastructure and services after failure.',
        },
      ],
    },

    {
      title: 'Terraform for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Terraform should be viewed as a delivery and governance capability rather than simply an infrastructure tool. Leaders should understand how IaC affects engineering velocity, review processes, security, cost, reliability, compliance, environment consistency, and operational ownership.',
      highlights: [
        {
          title: 'Infrastructure governance',
          description:
            'Using standardized infrastructure definitions and controls to reduce unmanaged variation.',
        },
        {
          title: 'Change management',
          description:
            'Controlling infrastructure changes through review, automation, and approvals.',
        },
        {
          title: 'Engineering velocity',
          description:
            'The speed at which teams can safely create and modify infrastructure.',
        },
        {
          title: 'Operational maturity',
          description:
            'The organization’s ability to manage infrastructure changes safely and consistently.',
        },
      ],
    },

    {
      title: 'When Not to Use Terraform',
      content:
        'Terraform is powerful but not every environment requires it. Very small experiments or short-lived infrastructure may not justify a full Infrastructure as Code workflow. The decision should consider complexity, repeatability, team size, compliance, environment count, and expected infrastructure lifetime.',
      highlights: [
        {
          title: 'Over-engineering',
          description:
            'Introducing infrastructure tooling whose operational cost exceeds its benefits.',
        },
        {
          title: 'Infrastructure lifetime',
          description:
            'How long infrastructure is expected to exist and require maintenance.',
        },
        {
          title: 'Team maturity',
          description:
            'The team’s ability to operate and govern Infrastructure as Code safely.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include storing sensitive Terraform state insecurely, hardcoding credentials, applying production changes without review, allowing uncontrolled manual changes, creating excessively large modules, ignoring drift, and treating Terraform as a replacement for architecture and operational discipline.',
      highlights: [
        {
          title: 'Unprotected state',
          description:
            'Terraform state exposed without appropriate access control or encryption.',
        },
        {
          title: 'Hardcoded credentials',
          description:
            'Embedding cloud credentials or secrets directly in Terraform configuration.',
        },
        {
          title: 'Unreviewed production apply',
          description:
            'Executing significant infrastructure changes without an appropriate review or approval process.',
        },
        {
          title: 'Terraform as architecture',
          description:
            'Assuming Infrastructure as Code automatically solves architectural or operational problems.',
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
    'google-cloud',
    'ansible',
    'helm',
    'serverless',
    'aws-ec2',
    'aws-s3',
    'aws-lambda',
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
  ],
}

export default terraformKnowledge
