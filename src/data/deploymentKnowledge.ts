import type { KnowledgeDefinition } from './knowledge'

export const deploymentKnowledge: KnowledgeDefinition = {
  technologyId: 'deployment',
  slug: 'deployment',
  title: 'Deployment',
  summary:
    'Deployment is the process of releasing a software version, service, configuration, or infrastructure change into a target environment where it can run and serve users or other systems.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Deployment?',
      content:
        'Deployment means taking a validated software change and making it available in a target environment. A deployment can involve application code, APIs, containers, configuration, databases, infrastructure, or AI services.',
      highlights: [
        {
          title: 'Release',
          description:
            'Making a particular software version available for use.',
        },
        {
          title: 'Target environment',
          description:
            'The environment into which software is deployed, such as development, staging, or production.',
        },
        {
          title: 'Deployment artifact',
          description:
            'The packaged output that is deployed, such as a container image, binary, or application bundle.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of deployment like opening a newly built restaurant kitchen for customers. Building the kitchen is development, checking everything is working is testing, moving the equipment into the restaurant is deployment, and opening the doors to customers is release.',
      highlights: [
        {
          title: 'Build',
          description:
            'Creating the software that will eventually be deployed.',
        },
        {
          title: 'Validation',
          description:
            'Checking that the software is ready and safe to deploy.',
        },
        {
          title: 'Release',
          description:
            'Making the deployed capability available to its intended users.',
        },
      ],
    },

    {
      title: 'Deployment Environments',
      content:
        'Software is commonly deployed through multiple environments. Each environment serves a different purpose and provides increasing levels of production realism and risk.',
      highlights: [
        {
          title: 'Development',
          description:
            'An environment used for active development and early validation.',
        },
        {
          title: 'Staging',
          description:
            'A production-like environment used for final validation.',
        },
        {
          title: 'Production',
          description:
            'The environment serving real users or business workloads.',
        },
      ],
    },

    {
      title: 'Deployment vs Release',
      content:
        'Deployment and release are related but not identical. Deployment places software into an environment. Release makes the capability available to users. Feature flags can allow teams to deploy code while keeping a feature disabled until a later release decision.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'Putting software into a target environment.',
        },
        {
          title: 'Release',
          description:
            'Making the capability available to users or customers.',
        },
        {
          title: 'Feature flag',
          description:
            'A control that determines whether a deployed capability is active.',
        },
      ],
    },

    {
      title: 'Deployment Artifact',
      content:
        'A deployment artifact is the concrete output that is moved into an environment. Mature delivery systems build an artifact once, validate it, and promote the same artifact across environments.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A versioned output produced by a build process.',
        },
        {
          title: 'Immutable artifact',
          description:
            'An artifact that is not changed after it is created.',
        },
        {
          title: 'Artifact promotion',
          description:
            'Moving the same validated artifact through different environments.',
        },
      ],
    },

    {
      title: 'Deployment Strategies',
      content:
        'A deployment strategy defines how the new version is introduced and how risk is managed during the transition from the old version to the new version.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing old instances with new instances progressively.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Using two production-capable environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Releasing the new version to a small portion of traffic before expanding it.',
        },
      ],
    },

    {
      title: 'Rolling Deployment',
      content:
        'A rolling deployment gradually replaces instances running the old version with instances running the new version. It can reduce downtime but requires compatibility between old and new versions during the transition.',
      highlights: [
        {
          title: 'Progressive replacement',
          description:
            'Replacing application instances gradually rather than simultaneously.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Allowing old and new application versions to work together during transition.',
        },
      ],
    },

    {
      title: 'Blue-Green Deployment',
      content:
        'Blue-green deployment maintains two production-capable environments. The new version is deployed to the inactive environment, validated, and then traffic is switched to it.',
      highlights: [
        {
          title: 'Blue',
          description:
            'One production-capable environment.',
        },
        {
          title: 'Green',
          description:
            'The alternate environment containing the new version.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing from one deployment environment to another.',
        },
      ],
    },

    {
      title: 'Canary Deployment',
      content:
        'A canary deployment exposes a new version to a small percentage of users or traffic. The rollout expands only when monitoring shows that the new version behaves acceptably.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A limited production rollout used to validate a new version.',
        },
        {
          title: 'Progressive delivery',
          description:
            'Increasing exposure to a new release gradually while observing results.',
        },
        {
          title: 'Traffic percentage',
          description:
            'The proportion of users or requests routed to the new version.',
        },
      ],
    },

    {
      title: 'Zero-Downtime Deployment',
      content:
        'Zero-downtime deployment aims to update software without making the service unavailable to users. This generally requires appropriate redundancy, traffic management, health checks, and compatibility between application versions.',
      highlights: [
        {
          title: 'High availability',
          description:
            'The ability of a service to remain available despite individual component changes or failures.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism used to determine whether a deployed instance is functioning correctly.',
        },
      ],
    },

    {
      title: 'Database Deployment',
      content:
        'Database changes require special care because application versions may temporarily coexist during deployment. Safe database migration strategies should preserve compatibility and provide recovery options.',
      highlights: [
        {
          title: 'Migration',
          description:
            'A controlled change to database schema or data.',
        },
        {
          title: 'Expand and contract',
          description:
            'A migration pattern that introduces compatible changes first and removes old structures later.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Allowing old and new application versions to operate safely against the database during transition.',
        },
      ],
    },

    {
      title: 'Configuration Deployment',
      content:
        'Applications depend on configuration such as API endpoints, feature settings, environment values, and service connections. Configuration should be managed separately from sensitive credentials and deployed in a controlled way.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Non-code values controlling application behavior.',
        },
        {
          title: 'Environment variable',
          description:
            'A runtime configuration value provided through the environment.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive configuration such as passwords, tokens, and private keys.',
        },
      ],
    },

    {
      title: 'Deployment Gates',
      content:
        'Deployment gates are conditions that must be satisfied before software moves into a higher-risk environment. Gates can include automated tests, security checks, performance thresholds, approvals, or business requirements.',
      highlights: [
        {
          title: 'Quality gate',
          description:
            'An automated condition that must pass before deployment continues.',
        },
        {
          title: 'Approval gate',
          description:
            'A human authorization required before a sensitive deployment proceeds.',
        },
        {
          title: 'Security gate',
          description:
            'A security condition that must be satisfied before deployment.',
        },
      ],
    },

    {
      title: 'Deployment Verification',
      content:
        'After deployment, teams should verify that the new version is healthy. Verification may include health checks, smoke tests, functional tests, metrics, logs, traces, and user-impact monitoring.',
      highlights: [
        {
          title: 'Smoke test',
          description:
            'A small set of critical checks used to determine whether the deployment is fundamentally working.',
        },
        {
          title: 'Post-deployment verification',
          description:
            'Validating application health after a release has been deployed.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'A deployment process is incomplete without a recovery strategy. Rollback returns the system to a previously known-good version when the new release creates unacceptable problems.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a system to a previously validated state.',
        },
        {
          title: 'Known-good version',
          description:
            'A version that has previously demonstrated acceptable behavior.',
        },
        {
          title: 'Recovery',
          description:
            'The process of restoring acceptable service after a deployment problem.',
        },
      ],
    },

    {
      title: 'Deployment Failure',
      content:
        'Deployment failures can result from application defects, configuration problems, infrastructure issues, dependency incompatibilities, database migrations, security policies, or external service failures. A mature organization treats deployment failure as an expected operational scenario and prepares recovery mechanisms.',
      highlights: [
        {
          title: 'Failure detection',
          description:
            'Identifying that a deployment is not behaving as expected.',
        },
        {
          title: 'Incident',
          description:
            'An event that causes or threatens unacceptable service impact.',
        },
      ],
    },

    {
      title: 'Deployment Automation',
      content:
        'Automated deployment reduces manual effort and makes releases more repeatable. CI/CD systems can build artifacts, validate them, deploy them, verify health, and initiate rollback when required conditions fail.',
      highlights: [
        {
          title: 'Automation',
          description:
            'Executing repeatable deployment activities without manual repetition.',
        },
        {
          title: 'Repeatability',
          description:
            'The ability to perform deployments consistently using the same defined process.',
        },
      ],
    },

    {
      title: 'Infrastructure Deployment',
      content:
        'Modern deployments may include infrastructure changes such as compute, networking, databases, storage, permissions, and cloud resources. Infrastructure-as-code helps teams version, review, and automate these changes.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure through version-controlled configuration.',
        },
        {
          title: 'Infrastructure change',
          description:
            'A modification to the resources required to run software.',
        },
      ],
    },

    {
      title: 'Container Deployment',
      content:
        'Containerized applications are commonly deployed by building a container image, storing it in a registry, and deploying a specific image version into the target environment.',
      highlights: [
        {
          title: 'Container image',
          description:
            'A packaged application environment containing application code and dependencies.',
        },
        {
          title: 'Container registry',
          description:
            'A repository used to store and distribute container images.',
        },
        {
          title: 'Image version',
          description:
            'An identifier representing a specific container image build.',
        },
      ],
    },

    {
      title: 'Kubernetes Deployment',
      content:
        'Kubernetes provides declarative mechanisms for managing application deployments. Desired state describes how many instances should run and which container version should be used, while Kubernetes works to maintain that state.',
      highlights: [
        {
          title: 'Desired state',
          description:
            'The target configuration that the orchestration system should maintain.',
        },
        {
          title: 'Replica',
          description:
            'An instance of an application workload managed as part of the desired deployment.',
        },
      ],
    },

    {
      title: 'Cloud Deployment',
      content:
        'Cloud deployments release applications and supporting resources into cloud infrastructure. Deployment architecture should account for networking, identity, storage, observability, cost, security, and regional availability.',
      highlights: [
        {
          title: 'Cloud environment',
          description:
            'A deployment environment provided through cloud infrastructure.',
        },
        {
          title: 'Identity and access',
          description:
            'Controls determining which services and users can access cloud resources.',
        },
      ],
    },

    {
      title: 'AI Application Deployment',
      content:
        'AI applications introduce additional deployment concerns such as model versions, prompts, evaluation datasets, vector indexes, inference latency, token costs, safety policies, and external AI providers. A mature AI deployment process validates these components before production exposure.',
      highlights: [
        {
          title: 'Model version',
          description:
            'A specific version of an AI model used by an application.',
        },
        {
          title: 'Prompt version',
          description:
            'A controlled version of the instructions provided to an AI model.',
        },
        {
          title: 'AI evaluation',
          description:
            'Testing AI behavior against predefined quality, safety, or business expectations.',
        },
        {
          title: 'Inference latency',
          description:
            'The time required for an AI system to produce a response.',
        },
      ],
    },

    {
      title: 'Deployment Observability',
      content:
        'Deployment observability connects software changes with operational behavior. Teams should monitor logs, metrics, traces, error rates, latency, resource utilization, and business signals after a release.',
      highlights: [
        {
          title: 'Deployment health',
          description:
            'The operational condition of a service after deployment.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion of requests or operations resulting in errors.',
        },
        {
          title: 'Latency',
          description:
            'The time required for a system to respond to a request.',
        },
      ],
    },

    {
      title: 'Deployment for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, deployment knowledge means understanding release risk, environment strategy, deployment patterns, rollback, governance, operational readiness, stakeholder impact, and delivery metrics rather than memorizing deployment commands.',
      highlights: [
        {
          title: 'Release risk',
          description:
            'The probability and impact of a deployment causing unacceptable problems.',
        },
        {
          title: 'Operational readiness',
          description:
            'The degree to which the system, team, monitoring, support, and recovery processes are prepared for production.',
        },
        {
          title: 'Release governance',
          description:
            'Policies controlling when and how software can move into production.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common deployment mistakes include deploying without health checks, rebuilding artifacts for each environment, changing databases incompatibly, storing secrets in deployment files, skipping post-deployment verification, lacking rollback, and treating deployment as complete immediately after the software is uploaded.',
      highlights: [
        {
          title: 'No rollback',
          description:
            'Deploying without a practical recovery mechanism.',
        },
        {
          title: 'Configuration drift',
          description:
            'Unintended differences between environments that make deployments unpredictable.',
        },
        {
          title: 'Insufficient verification',
          description:
            'Failing to confirm that the new release behaves correctly after deployment.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'github-actions',
    'git',
    'github',
    'gitlab',
    'jenkins',
    'ci-cd',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default deploymentKnowledge
