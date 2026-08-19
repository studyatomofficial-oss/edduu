import type { KnowledgeDefinition } from './knowledge'

export const deploymentStrategyKnowledge: KnowledgeDefinition = {
  technologyId: 'deployment-strategy',
  slug: 'deployment-strategy',
  title: 'Deployment Strategy',
  summary:
    'Deployment Strategy defines how software changes are introduced into environments while controlling risk, availability, traffic exposure, validation, and rollback.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Deployment Strategy?',
      content:
        'A Deployment Strategy is the planned approach for moving a software version into an environment while controlling production risk, availability, traffic exposure, validation, and recovery.',
      highlights: [
        {
          title: 'Deployment strategy',
          description:
            'A defined method for introducing a new software version into an environment.',
        },
        {
          title: 'Risk control',
          description:
            'Techniques used to reduce the probability and impact of deployment failure.',
        },
        {
          title: 'Rollback',
          description:
            'A planned mechanism for recovering from an unsuccessful deployment.',
        },
      ],
    },
    {
      title: 'Simple Analogy',
      content:
        'Imagine replacing the electricity system in a large building. You would not disconnect every room at once. You might replace rooms gradually, prepare a second system and switch over, or test the new system with a small group first. Software deployment strategies work in the same way.',
      highlights: [
        {
          title: 'Gradual replacement',
          description:
            'Equivalent to a rolling deployment.',
        },
        {
          title: 'Complete switch',
          description:
            'Equivalent to a blue-green deployment.',
        },
        {
          title: 'Small test group',
          description:
            'Equivalent to a canary deployment.',
        },
      ],
    },
    {
      title: 'Why Deployment Strategy Matters',
      content:
        'A deployment strategy determines how much production risk is introduced at one time. The right strategy can reduce downtime, limit blast radius, improve rollback speed, and provide stronger evidence before a release reaches all users.',
      highlights: [
        {
          title: 'Blast radius',
          description:
            'The amount of users, systems, or functionality potentially affected by a failure.',
        },
        {
          title: 'Downtime',
          description:
            'The period during which a service is unavailable or significantly degraded.',
        },
        {
          title: 'Release risk',
          description:
            'The probability and impact of problems caused by a new release.',
        },
      ],
    },
    {
      title: 'Rolling Deployment',
      content:
        'Rolling Deployment gradually replaces instances running the old version with instances running the new version. It can reduce infrastructure overhead and avoid replacing the entire fleet simultaneously.',
      highlights: [
        {
          title: 'Progressive replacement',
          description:
            'Updating application instances in controlled batches.',
        },
        {
          title: 'Batch size',
          description:
            'The number of instances updated during each rollout step.',
        },
        {
          title: 'Health check',
          description:
            'A check confirming that newly updated instances are healthy.',
        },
      ],
    },
    {
      title: 'Blue-Green Deployment',
      content:
        'Blue-Green Deployment maintains two production-capable environments. The new version is deployed and validated in the inactive environment before production traffic is switched to it.',
      highlights: [
        {
          title: 'Blue',
          description:
            'The environment currently serving production traffic.',
        },
        {
          title: 'Green',
          description:
            'The alternate environment containing the new version.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing from one environment to the other.',
        },
      ],
    },
    {
      title: 'Canary Deployment',
      content:
        'Canary Deployment exposes the new version to a small percentage of production users or traffic first. Exposure increases only after the release demonstrates acceptable technical and business behavior.',
      highlights: [
        {
          title: 'Canary',
          description:
            'The new version receiving limited production exposure.',
        },
        {
          title: 'Progressive rollout',
          description:
            'Increasing production exposure in controlled stages.',
        },
        {
          title: 'Canary analysis',
          description:
            'Comparing the new version against a baseline using predefined signals.',
        },
      ],
    },
    {
      title: 'Recreate Deployment',
      content:
        'A Recreate strategy stops or removes the old application instances before starting the new version. It is simple but can cause downtime and is therefore more suitable when temporary unavailability is acceptable.',
      highlights: [
        {
          title: 'Recreate',
          description:
            'Replacing the existing deployment by stopping the old version before starting the new one.',
        },
        {
          title: 'Downtime',
          description:
            'A possible consequence when the old version is stopped before the new version becomes available.',
        },
      ],
    },
    {
      title: 'Feature Flags',
      content:
        'Feature flags can separate deployment from release. Code can be deployed while a feature remains disabled, then enabled gradually for selected users or environments.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A control determining whether a capability is active.',
        },
        {
          title: 'Progressive exposure',
          description:
            'Increasing feature availability gradually.',
        },
        {
          title: 'Kill switch',
          description:
            'A control that can quickly disable problematic functionality.',
        },
      ],
    },
    {
      title: 'Zero-Downtime Deployment',
      content:
        'A zero-downtime strategy aims to keep the service available while a new version is introduced. It normally requires redundancy, health checks, appropriate traffic management, and compatibility between old and new versions.',
      highlights: [
        {
          title: 'High availability',
          description:
            'The ability of a service to remain available despite changes or individual component failures.',
        },
        {
          title: 'Redundancy',
          description:
            'Maintaining multiple instances or paths so one can change without stopping the entire service.',
        },
      ],
    },
    {
      title: 'Database Compatibility',
      content:
        'Deployment strategies become more complex when application versions coexist. Database changes should normally follow backward-compatible patterns so old and new versions can operate safely during rollout.',
      highlights: [
        {
          title: 'Backward compatibility',
          description:
            'Allowing old and new application versions to work together during deployment.',
        },
        {
          title: 'Expand and contract',
          description:
            'Introducing compatible database changes first and removing old structures only after transition.',
        },
      ],
    },
    {
      title: 'Rollback',
      content:
        'Every deployment strategy should have a recovery mechanism. Rollback may mean redeploying a previous artifact, switching traffic to another environment, reducing canary exposure, or disabling a feature flag.',
      highlights: [
        {
          title: 'Known-good version',
          description:
            'A previously validated version that can be used for recovery.',
        },
        {
          title: 'Rollback trigger',
          description:
            'A predefined condition that requires deployment to stop or reverse.',
        },
        {
          title: 'Recovery time',
          description:
            'The time required to restore acceptable service after a failure.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Deployment strategy decisions depend on observability. Teams need reliable metrics, logs, traces, alerts, and business signals to determine whether a rollout is healthy.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements showing system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Recorded events that help explain system behavior.',
        },
        {
          title: 'Traces',
          description:
            'Records showing how requests move through distributed services.',
        },
      ],
    },
    {
      title: 'Deployment Gates',
      content:
        'Deployment gates prevent a release from progressing until defined conditions are satisfied. Gates can include automated tests, security checks, health thresholds, approval requirements, or business readiness checks.',
      highlights: [
        {
          title: 'Quality gate',
          description:
            'An automated condition that must pass before deployment continues.',
        },
        {
          title: 'Security gate',
          description:
            'A security condition that must be satisfied before release.',
        },
        {
          title: 'Approval gate',
          description:
            'A human authorization required before deployment proceeds.',
        },
      ],
    },
    {
      title: 'AI Deployment Strategies',
      content:
        'AI systems require deployment strategies that account for model behavior in addition to traditional software reliability. A new model, prompt, RAG pipeline, agent workflow, or provider can be introduced through canary, blue-green, rolling, or feature-flag-based approaches.',
      highlights: [
        {
          title: 'Model rollout',
          description:
            'Gradually introducing a new model version into production.',
        },
        {
          title: 'Prompt rollout',
          description:
            'Gradually introducing a new prompt configuration.',
        },
        {
          title: 'RAG rollout',
          description:
            'Introducing a new retrieval or knowledge pipeline in a controlled manner.',
        },
        {
          title: 'Agent rollout',
          description:
            'Gradually introducing a new agent workflow or tool configuration.',
        },
      ],
    },
    {
      title: 'AI Release Criteria',
      content:
        'AI deployment strategies should monitor quality, safety, latency, cost, retrieval performance, hallucination behavior, user feedback, and task completion alongside infrastructure metrics.',
      highlights: [
        {
          title: 'Quality threshold',
          description:
            'The minimum acceptable AI response quality required for continued rollout.',
        },
        {
          title: 'Safety threshold',
          description:
            'The maximum acceptable level of safety-related failures.',
        },
        {
          title: 'Cost threshold',
          description:
            'The maximum acceptable inference or infrastructure cost.',
        },
        {
          title: 'Task completion',
          description:
            'The percentage of intended tasks successfully completed by the AI system.',
        },
      ],
    },
    {
      title: 'Deployment Strategy for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, selecting a deployment strategy is a business and engineering risk decision. The leader should evaluate customer impact, system criticality, infrastructure cost, dependencies, database compatibility, observability, rollback capability, compliance, and operational readiness before selecting the approach.',
      highlights: [
        {
          title: 'Risk-based decision',
          description:
            'Selecting a deployment approach based on actual risk and impact.',
        },
        {
          title: 'Operational readiness',
          description:
            'Ensuring monitoring, support, recovery, and ownership are prepared.',
        },
        {
          title: 'Go/no-go',
          description:
            'The decision to proceed based on defined technical and business evidence.',
        },
      ],
    },
    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include choosing a strategy without considering system risk, ignoring database compatibility, using canary without meaningful monitoring, using rolling deployment with unsafe version coexistence, and deploying without a tested recovery plan.',
      highlights: [
        {
          title: 'Wrong strategy',
          description:
            'Choosing an approach that does not match system risk or business requirements.',
        },
        {
          title: 'Weak observability',
          description:
            'Attempting progressive rollout without reliable signals.',
        },
        {
          title: 'Compatibility failure',
          description:
            'Allowing old and new versions to interact without ensuring compatibility.',
        },
        {
          title: 'No recovery plan',
          description:
            'Deploying without a tested mechanism for restoring acceptable service.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'ci-cd',
    'github-actions',
    'jenkins',
  ],
}

export default deploymentStrategyKnowledge
