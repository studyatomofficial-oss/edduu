import type { KnowledgeDefinition } from './knowledge'

export const ansibleKnowledge: KnowledgeDefinition = {
  technologyId: 'ansible',
  slug: 'ansible',
  title: 'Ansible',
  summary:
    'Ansible is an open-source automation and configuration-management platform used to provision infrastructure, configure systems, deploy applications, and orchestrate operational workflows.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Ansible?',
      content:
        'Ansible is an automation platform used to perform repeatable operational tasks across servers, cloud resources, applications, and infrastructure. It is commonly used for configuration management, application deployment, provisioning, orchestration, and operational automation.',
      highlights: [
        {
          title: 'Automation',
          description:
            'Using software to execute repeatable tasks with limited manual intervention.',
        },
        {
          title: 'Configuration management',
          description:
            'Keeping systems configured according to a defined and repeatable standard.',
        },
        {
          title: 'Orchestration',
          description:
            'Coordinating multiple operations or systems in a defined sequence.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Ansible like a manager giving the same checklist to 100 employees. Instead of manually telling every employee what to install, configure, start, or stop, the manager defines the instructions once and Ansible executes them consistently across the required machines.',
      highlights: [
        {
          title: 'Checklist',
          description:
            'Comparable to an Ansible playbook.',
        },
        {
          title: 'Employees',
          description:
            'Comparable to the managed servers or systems.',
        },
        {
          title: 'Manager',
          description:
            'Comparable to the Ansible control node coordinating automation.',
        },
      ],
    },

    {
      title: 'Why Ansible Matters',
      content:
        'Manual server configuration is slow, inconsistent, difficult to audit, and prone to human error. Ansible allows teams to encode operational procedures into reusable automation that can be reviewed, versioned, tested, and executed repeatedly.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Applying the same configuration approach across multiple systems.',
        },
        {
          title: 'Repeatability',
          description:
            'Executing the same operational process multiple times with predictable behavior.',
        },
        {
          title: 'Reduced manual work',
          description:
            'Automating routine infrastructure and operational tasks.',
        },
      ],
    },

    {
      title: 'Ansible Architecture',
      content:
        'Ansible commonly uses a control node to execute automation against managed nodes. The automation logic is described using playbooks, while an inventory defines the systems that Ansible can manage.',
      highlights: [
        {
          title: 'Control node',
          description:
            'The system from which Ansible automation is executed.',
        },
        {
          title: 'Managed node',
          description:
            'A system that Ansible configures or operates.',
        },
        {
          title: 'Inventory',
          description:
            'A definition of managed hosts and their grouping or connection information.',
        },
      ],
    },

    {
      title: 'Ansible Inventory',
      content:
        'The inventory identifies the hosts Ansible manages. Hosts can be organized into groups so that common automation can be applied to environments, application tiers, geographic locations, or infrastructure roles.',
      highlights: [
        {
          title: 'Host',
          description:
            'A managed machine or endpoint in an Ansible inventory.',
        },
        {
          title: 'Group',
          description:
            'A collection of hosts that can share configuration or automation.',
        },
        {
          title: 'Host variable',
          description:
            'A value associated with a specific managed host.',
        },
        {
          title: 'Group variable',
          description:
            'A configuration value shared by hosts in a group.',
        },
      ],
    },

    {
      title: 'Ansible Playbook',
      content:
        'A playbook is a YAML-based file that describes automation workflows. It defines which hosts should be targeted and what tasks should be performed against them.',
      highlights: [
        {
          title: 'Playbook',
          description:
            'A YAML definition describing one or more automation workflows.',
        },
        {
          title: 'Play',
          description:
            'A section of a playbook that maps tasks to a group of hosts.',
        },
        {
          title: 'Task',
          description:
            'A specific automation operation executed against a managed host.',
        },
      ],
    },

    {
      title: 'Ansible Tasks',
      content:
        'Tasks are individual operations inside a playbook. Examples include installing packages, creating files, modifying configuration, starting services, creating users, or deploying application artifacts.',
      highlights: [
        {
          title: 'Task',
          description:
            'A single unit of automation.',
        },
        {
          title: 'Module',
          description:
            'A reusable unit of Ansible functionality used by a task to perform an operation.',
        },
        {
          title: 'Idempotency',
          description:
            'The property that repeatedly applying the same automation produces the intended state without unnecessary changes.',
        },
      ],
    },

    {
      title: 'Ansible Modules',
      content:
        'Ansible modules provide the actual capabilities used by tasks. Modules exist for package management, files, services, users, cloud resources, databases, networking, containers, and many other operations.',
      highlights: [
        {
          title: 'Module',
          description:
            'A reusable component that performs a specific automation operation.',
        },
        {
          title: 'Package module',
          description:
            'Module functionality used to install or manage software packages.',
        },
        {
          title: 'Service module',
          description:
            'Module functionality used to manage operating-system services.',
        },
      ],
    },

    {
      title: 'Ansible Idempotency',
      content:
        'Idempotency is one of the most important concepts in configuration management. A well-designed Ansible task should move a system toward the desired state and avoid repeatedly performing unnecessary changes when the system is already correct.',
      highlights: [
        {
          title: 'Desired state',
          description:
            'The configuration a system is expected to have.',
        },
        {
          title: 'Idempotent operation',
          description:
            'An operation that can be repeated without causing unintended additional changes.',
        },
        {
          title: 'Configuration drift',
          description:
            'A difference between the expected system configuration and its actual configuration.',
        },
      ],
    },

    {
      title: 'Ansible Variables',
      content:
        'Variables make playbooks reusable by allowing values such as application versions, ports, environment names, paths, and resource settings to change without rewriting the automation logic.',
      highlights: [
        {
          title: 'Variable',
          description:
            'A configurable value used by Ansible automation.',
        },
        {
          title: 'Default',
          description:
            'A fallback value used when a variable is not explicitly supplied.',
        },
        {
          title: 'Environment-specific value',
          description:
            'A configuration value that differs between development, staging, and production.',
        },
      ],
    },

    {
      title: 'Ansible Roles',
      content:
        'Roles provide a structured way to organize reusable Ansible automation. A role can package tasks, variables, handlers, templates, files, and defaults for a particular operational responsibility.',
      highlights: [
        {
          title: 'Role',
          description:
            'A reusable and structured collection of Ansible automation components.',
        },
        {
          title: 'Reusable automation',
          description:
            'Automation that can be applied across multiple projects or environments.',
        },
        {
          title: 'Separation of concerns',
          description:
            'Organizing automation so each component has a clear responsibility.',
        },
      ],
    },

    {
      title: 'Ansible Handlers',
      content:
        'Handlers are special tasks that run when notified by another task. They are commonly used for operations such as restarting or reloading a service after its configuration changes.',
      highlights: [
        {
          title: 'Handler',
          description:
            'A task triggered by a notification from another task.',
        },
        {
          title: 'Notify',
          description:
            'The mechanism used by a task to trigger a handler.',
        },
        {
          title: 'Service restart',
          description:
            'A common handler operation after configuration changes.',
        },
      ],
    },

    {
      title: 'Ansible Templates',
      content:
        'Ansible templates use variables to generate configuration files dynamically. This allows one configuration template to support different environments or hosts.',
      highlights: [
        {
          title: 'Template',
          description:
            'A reusable configuration file containing dynamic values.',
        },
        {
          title: 'Jinja2',
          description:
            'The templating language commonly used by Ansible.',
        },
        {
          title: 'Rendered configuration',
          description:
            'The final configuration file generated from a template and its variables.',
        },
      ],
    },

    {
      title: 'Ansible Facts',
      content:
        'Ansible can gather information about managed systems, such as operating-system details, network interfaces, memory, processors, and other system characteristics. These facts can be used to make automation adaptive.',
      highlights: [
        {
          title: 'Fact',
          description:
            'Information collected about a managed system.',
        },
        {
          title: 'Fact gathering',
          description:
            'Collecting system information before or during automation.',
        },
        {
          title: 'Dynamic configuration',
          description:
            'Automation that changes behavior according to detected system characteristics.',
        },
      ],
    },

    {
      title: 'Ansible Vault',
      content:
        'Ansible Vault provides encryption capabilities for sensitive values stored with Ansible automation. It can be used to protect credentials, keys, passwords, and other secrets that automation requires.',
      highlights: [
        {
          title: 'Ansible Vault',
          description:
            'Ansible capability for encrypting sensitive data.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as a password, API key, or credential.',
        },
        {
          title: 'Encryption',
          description:
            'Transforming information so unauthorized users cannot easily read it.',
        },
      ],
    },

    {
      title: 'Ansible and SSH',
      content:
        'For many traditional Linux and Unix environments, Ansible communicates with managed hosts using SSH. The managed nodes generally do not require a continuously running Ansible agent, which simplifies deployment compared with agent-based configuration systems.',
      highlights: [
        {
          title: 'SSH',
          description:
            'Secure network protocol commonly used for remote administration of Unix-like systems.',
        },
        {
          title: 'Agentless',
          description:
            'An architecture where managed systems do not require a continuously running automation agent.',
        },
        {
          title: 'Connection',
          description:
            'The mechanism Ansible uses to communicate with a managed system.',
        },
      ],
    },

    {
      title: 'Ansible and Windows',
      content:
        'Ansible can also automate Windows systems using supported connection mechanisms and modules. This allows organizations to use a common automation platform across heterogeneous infrastructure.',
      highlights: [
        {
          title: 'Heterogeneous infrastructure',
          description:
            'An environment containing different operating systems, platforms, or technologies.',
        },
        {
          title: 'Windows automation',
          description:
            'Automating configuration and operational tasks on Windows systems.',
        },
      ],
    },

    {
      title: 'Ansible Cloud Automation',
      content:
        'Ansible can automate cloud resources and infrastructure operations across platforms such as AWS, Azure, and Google Cloud. It can also configure operating systems and applications after infrastructure has been provisioned.',
      highlights: [
        {
          title: 'Cloud automation',
          description:
            'Automating operations involving cloud infrastructure and services.',
        },
        {
          title: 'Provisioning',
          description:
            'Creating or preparing infrastructure resources for use.',
        },
        {
          title: 'Configuration',
          description:
            'Applying required software and system settings after infrastructure exists.',
        },
      ],
    },

    {
      title: 'Ansible and Terraform',
      content:
        'Terraform and Ansible can complement each other. Terraform is commonly used to provision infrastructure, while Ansible can configure operating systems, install software, deploy applications, and perform operational tasks after infrastructure is available.',
      highlights: [
        {
          title: 'Terraform',
          description:
            'Infrastructure as Code tool commonly used for infrastructure provisioning.',
        },
        {
          title: 'Ansible',
          description:
            'Automation and configuration-management platform commonly used for system and application operations.',
        },
        {
          title: 'Provision versus configure',
          description:
            'A useful distinction between creating infrastructure and configuring what runs on it.',
        },
      ],
    },

    {
      title: 'Ansible and Docker',
      content:
        'Ansible can automate Docker installation, configuration, image management, container lifecycle operations, and supporting infrastructure. Container orchestration at larger scale may instead use Kubernetes or another orchestration platform.',
      highlights: [
        {
          title: 'Docker',
          description:
            'A platform for packaging and running applications in containers.',
        },
        {
          title: 'Container lifecycle',
          description:
            'Operations involved in creating, starting, stopping, updating, and removing containers.',
        },
      ],
    },

    {
      title: 'Ansible and Kubernetes',
      content:
        'Ansible can automate Kubernetes-related tasks and platform operations. Kubernetes itself provides workload orchestration, while Ansible can be used around the platform for provisioning, configuration, and operational workflows.',
      highlights: [
        {
          title: 'Kubernetes',
          description:
            'A container orchestration platform.',
        },
        {
          title: 'Cluster automation',
          description:
            'Automating operations involved in creating or configuring Kubernetes environments.',
        },
        {
          title: 'Operational workflow',
          description:
            'A repeatable sequence used to manage infrastructure or application operations.',
        },
      ],
    },

    {
      title: 'Ansible Application Deployment',
      content:
        'Ansible can automate application deployment steps such as preparing servers, installing dependencies, copying artifacts, updating configuration, restarting services, and validating deployment health.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'Introducing a new application version into a target environment.',
        },
        {
          title: 'Artifact',
          description:
            'A versioned output produced by a build process.',
        },
        {
          title: 'Deployment validation',
          description:
            'Checking that the newly deployed application behaves as expected.',
        },
      ],
    },

    {
      title: 'Ansible Rolling Deployment',
      content:
        'Ansible can support rolling deployments by updating a controlled subset of servers at a time instead of changing every server simultaneously. This can reduce deployment risk and preserve service availability.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Updating application instances in controlled groups rather than all at once.',
        },
        {
          title: 'Batch',
          description:
            'A subset of hosts processed during one stage of an automation workflow.',
        },
        {
          title: 'Deployment risk',
          description:
            'The potential impact of introducing a change into a production environment.',
        },
      ],
    },

    {
      title: 'Ansible and CI/CD',
      content:
        'Ansible can be integrated into CI/CD pipelines to automate environment preparation, deployment, configuration, validation, and operational tasks. A typical pipeline may build an artifact first and then use Ansible to deploy it to controlled environments.',
      highlights: [
        {
          title: 'CI/CD pipeline',
          description:
            'An automated workflow for building, testing, and delivering software.',
        },
        {
          title: 'Deployment automation',
          description:
            'Using automation to introduce software changes into environments.',
        },
        {
          title: 'Approval gate',
          description:
            'A controlled checkpoint requiring approval before a sensitive deployment action.',
        },
      ],
    },

    {
      title: 'Ansible Security',
      content:
        'Ansible security includes protecting credentials, limiting automation permissions, securing inventories and configuration, encrypting sensitive variables, controlling who can execute production playbooks, and auditing automation changes.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving automation only the permissions required for its intended operations.',
        },
        {
          title: 'Credential protection',
          description:
            'Keeping passwords, keys, and tokens protected from unauthorized access.',
        },
        {
          title: 'Automation access',
          description:
            'Controlling which people and systems are allowed to execute infrastructure automation.',
        },
      ],
    },

    {
      title: 'Ansible Automation Controller',
      content:
        'Enterprise environments may use automation platforms such as Ansible Automation Platform to provide centralized execution, credentials management, scheduling, role-based access, auditing, and operational visibility around Ansible automation.',
      highlights: [
        {
          title: 'Automation Platform',
          description:
            'Enterprise capabilities for centrally operating and governing Ansible automation.',
        },
        {
          title: 'Scheduling',
          description:
            'Running automation at predefined times or intervals.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of automation executions and related operational activity.',
        },
      ],
    },

    {
      title: 'Ansible at Scale',
      content:
        'At enterprise scale, Ansible requires disciplined inventory management, reusable roles, standardized conventions, controlled credentials, testing, execution governance, observability, and clear ownership. Automation that works on ten servers may need additional architecture and governance to safely operate across thousands.',
      highlights: [
        {
          title: 'Scale',
          description:
            'The ability to operate automation reliably across increasing numbers of systems.',
        },
        {
          title: 'Standardization',
          description:
            'Using common patterns and conventions across automation.',
        },
        {
          title: 'Execution governance',
          description:
            'Controls around who can run automation, where it can run, and what it can change.',
        },
      ],
    },

    {
      title: 'Ansible Reliability',
      content:
        'Reliable Ansible automation should be idempotent, tested, observable, version-controlled, and designed with safe failure handling. Production automation should avoid leaving systems in partially configured states.',
      highlights: [
        {
          title: 'Safe failure',
          description:
            'Designing automation so failures are detected and handled without causing uncontrolled system states.',
        },
        {
          title: 'Validation',
          description:
            'Checking configuration and application health after automation.',
        },
        {
          title: 'Recovery',
          description:
            'Actions used to restore a system after an unsuccessful change.',
        },
      ],
    },

    {
      title: 'Ansible and Infrastructure as Code',
      content:
        'Ansible is often grouped with Infrastructure as Code and automation tooling, but its strongest traditional use cases are configuration management, deployment, and orchestration. Terraform is more commonly focused on declaratively provisioning infrastructure resources.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure through code and version-controlled definitions.',
        },
        {
          title: 'Configuration management',
          description:
            'Maintaining system configuration in a defined desired state.',
        },
        {
          title: 'Orchestration',
          description:
            'Coordinating multiple operational steps across systems.',
        },
      ],
    },

    {
      title: 'Ansible for AI Infrastructure',
      content:
        'Ansible can automate the operational layer surrounding AI infrastructure, including server configuration, GPU software dependencies, monitoring agents, model-serving environments, container runtimes, security settings, and supporting services.',
      highlights: [
        {
          title: 'GPU environment',
          description:
            'A compute environment configured for accelerated AI workloads.',
        },
        {
          title: 'Model serving',
          description:
            'Making an AI model available for inference through an application interface.',
        },
        {
          title: 'Runtime configuration',
          description:
            'Operating-system and application settings required for an AI workload to run correctly.',
        },
      ],
    },

    {
      title: 'Ansible AI Platform Example',
      content:
        'An AI platform could use Terraform to provision cloud infrastructure, Ansible to configure the operating systems and runtime dependencies, Kubernetes to orchestrate workloads, and CI/CD tooling to deliver application and model changes.',
      highlights: [
        {
          title: 'Provisioning layer',
          description:
            'The infrastructure creation layer, often handled by Infrastructure as Code tools.',
        },
        {
          title: 'Configuration layer',
          description:
            'The system and runtime configuration layer where Ansible can be useful.',
        },
        {
          title: 'Orchestration layer',
          description:
            'The platform layer responsible for managing containerized workloads.',
        },
      ],
    },

    {
      title: 'Ansible Cost Management',
      content:
        'Ansible can reduce operational cost by automating repetitive work, reducing configuration errors, and making large-scale operations more efficient. However, automation itself needs maintenance, testing, governance, and ownership.',
      highlights: [
        {
          title: 'Operational efficiency',
          description:
            'Reducing the manual effort required to operate infrastructure and applications.',
        },
        {
          title: 'Automation maintenance',
          description:
            'The ongoing work required to keep automation correct and compatible with changing environments.',
        },
        {
          title: 'Automation ROI',
          description:
            'Comparing the cost of building and maintaining automation with the operational value it provides.',
        },
      ],
    },

    {
      title: 'Ansible for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Ansible should be viewed as an operational automation capability. Leadership decisions should consider standardization, deployment velocity, reliability, security, auditability, team ownership, automation ROI, and the boundary between infrastructure provisioning and configuration management.',
      highlights: [
        {
          title: 'Operational maturity',
          description:
            'The organization’s ability to operate systems consistently and safely.',
        },
        {
          title: 'Automation ROI',
          description:
            'The value gained from automating repetitive operational work relative to its maintenance cost.',
        },
        {
          title: 'Ownership',
          description:
            'Clear responsibility for maintaining automation and responding when it fails.',
        },
        {
          title: 'Change management',
          description:
            'Controlling operational changes through review, testing, approvals, and automation.',
        },
      ],
    },

    {
      title: 'When Not to Use Ansible',
      content:
        'Ansible is not automatically the right tool for every infrastructure problem. For large-scale infrastructure provisioning, Terraform or a cloud-native Infrastructure as Code system may be a better fit. For container orchestration, Kubernetes may be the primary platform. Tool selection should follow the operational problem rather than forcing every task into one tool.',
      highlights: [
        {
          title: 'Tool fit',
          description:
            'Selecting technology based on the actual problem and operational requirements.',
        },
        {
          title: 'Provisioning',
          description:
            'Creating infrastructure resources such as networks, virtual machines, and managed services.',
        },
        {
          title: 'Orchestration',
          description:
            'Managing the lifecycle and scheduling of containerized workloads.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include writing non-idempotent tasks, storing credentials insecurely, creating enormous playbooks without reusable roles, allowing uncontrolled production execution, skipping testing, ignoring failure handling, and using Ansible where another tool provides a better abstraction.',
      highlights: [
        {
          title: 'Non-idempotent automation',
          description:
            'Automation that causes unintended changes when executed repeatedly.',
        },
        {
          title: 'Hardcoded secrets',
          description:
            'Embedding passwords, tokens, or credentials directly in automation files.',
        },
        {
          title: 'Untested playbooks',
          description:
            'Production automation that has not been validated in a controlled environment.',
        },
        {
          title: 'Wrong tool selection',
          description:
            'Using Ansible for a problem better solved by Infrastructure as Code, container orchestration, or another specialized platform.',
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
    'terraform',
    'helm',
    'serverless',
    'ci-cd',
    'github-actions',
    'git',
    'gitlab',
    'jenkins',
    'deployment',
    'rolling-deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
  ],
}

export default ansibleKnowledge
