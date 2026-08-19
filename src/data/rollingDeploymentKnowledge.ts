import type { KnowledgeDefinition } from './knowledge'

export const rollingDeploymentKnowledge: KnowledgeDefinition = {
  technologyId: 'rolling-deployment',
  slug: 'rolling-deployment',
  title: 'Rolling Deployment',
  summary:
    'Rolling Deployment is a release strategy that gradually replaces instances running an old software version with instances running a new version while the service continues operating.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Rolling Deployment?',
      content:
        'Rolling Deployment updates an application gradually instead of replacing every running instance at once. A deployment system takes a portion of the old instances offline or marks them unavailable, starts new instances with the new version, validates them, and continues until the rollout is complete.',
      highlights: [
        {
          title: 'Rolling update',
          description:
            'Gradually replacing old application instances with new ones.',
        },
        {
          title: 'Old version',
          description:
            'The software version currently serving part of the workload.',
        },
        {
          title: 'New version',
          description:
            'The software version being introduced.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school replacing classroom computers. Instead of removing every computer at once, the school replaces five computers, checks that they work, then replaces the next five. Students can continue using the remaining computers while the upgrade happens.',
      highlights: [
        {
          title: 'Small batch',
          description:
            'A limited number of instances updated during each rollout step.',
        },
        {
          title: 'Validation',
          description:
            'Checking the newly updated instances before continuing.',
        },
        {
          title: 'Progressive replacement',
          description:
            'Completing the upgrade over multiple controlled steps.',
        },
      ],
    },

    {
      title: 'How Rolling Deployment Works',
      content:
        'The deployment controller selects a group of instances, updates or replaces them with the new version, waits for them to become healthy, and then moves to the next group. This continues until all required instances are running the new version.',
      highlights: [
        {
          title: 'Batch',
          description:
            'The group of instances updated during one rollout step.',
        },
        {
          title: 'Health check',
          description:
            'A check confirming that an updated instance is functioning correctly.',
        },
        {
          title: 'Rollout',
          description:
            'The complete process of moving the application from the old version to the new version.',
        },
      ],
    },

    {
      title: 'Batch Size',
      content:
        'Batch size determines how many instances are replaced at each step. A smaller batch reduces deployment risk but can make the rollout slower. A larger batch speeds up deployment but increases the amount of traffic affected if something goes wrong.',
      highlights: [
        {
          title: 'Small batch',
          description:
            'Lower exposure per rollout step but potentially longer deployment time.',
        },
        {
          title: 'Large batch',
          description:
            'Faster rollout but greater potential impact from a bad release.',
        },
      ],
    },

    {
      title: 'Minimum Available Capacity',
      content:
        'A rolling deployment must maintain enough healthy capacity to continue serving users. Deployment policies can define how many instances must remain available while replacements are performed.',
      highlights: [
        {
          title: 'Available capacity',
          description:
            'The amount of healthy service capacity available to handle workload.',
        },
        {
          title: 'Capacity protection',
          description:
            'Rules preventing the rollout from removing too much serving capacity at once.',
        },
      ],
    },

    {
      title: 'Health Checks',
      content:
        'Health checks are critical because the deployment system needs evidence that new instances are ready before continuing. Common checks include process health, readiness, dependency connectivity, and application-level smoke tests.',
      highlights: [
        {
          title: 'Readiness',
          description:
            'Whether an instance is ready to receive normal traffic.',
        },
        {
          title: 'Liveness',
          description:
            'Whether an instance is still functioning and should remain running.',
        },
        {
          title: 'Smoke test',
          description:
            'A small set of critical checks confirming basic application functionality.',
        },
      ],
    },

    {
      title: 'Zero-Downtime Rolling Deployment',
      content:
        'A rolling deployment can achieve minimal or zero downtime when sufficient capacity remains available, new instances become healthy before receiving traffic, and the application supports coexistence between old and new versions.',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Having multiple service instances so individual instances can be updated without stopping the entire service.',
        },
        {
          title: 'Readiness gate',
          description:
            'Waiting until a new instance is ready before relying on it for production traffic.',
        },
      ],
    },

    {
      title: 'Backward Compatibility',
      content:
        'During a rolling deployment, old and new application versions can run at the same time. APIs, message formats, configuration, and database schemas therefore need to remain compatible during the transition.',
      highlights: [
        {
          title: 'Backward compatibility',
          description:
            'Allowing older components to continue working with newer components during deployment.',
        },
        {
          title: 'Version coexistence',
          description:
            'Operating multiple application versions simultaneously during a rollout.',
        },
      ],
    },

    {
      title: 'Database Migrations',
      content:
        'Database changes require particular care because multiple application versions may use the database simultaneously. Expand-and-contract migration patterns can reduce compatibility risk.',
      highlights: [
        {
          title: 'Expand',
          description:
            'Introduce a new compatible database structure while keeping the old structure available.',
        },
        {
          title: 'Migrate',
          description:
            'Move application behavior or data toward the new structure.',
        },
        {
          title: 'Contract',
          description:
            'Remove the old structure only after no active version depends on it.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'Rollback during a rolling deployment means stopping the rollout and returning instances to the previous known-good version. Rollback can become more complicated if incompatible database or configuration changes have already been introduced.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning the service to a previously validated software version.',
        },
        {
          title: 'Known-good version',
          description:
            'A version that has previously demonstrated acceptable behavior.',
        },
        {
          title: 'Rollback complexity',
          description:
            'The difficulty of safely reversing changes after part of a rollout has completed.',
        },
      ],
    },

    {
      title: 'Rolling Deployment vs Blue-Green',
      content:
        'Rolling Deployment progressively replaces instances within the same service capacity. Blue-Green Deployment maintains two production-capable environments and switches traffic between them. Rolling deployments generally require less duplicate infrastructure, while Blue-Green can provide simpler environment-level rollback.',
      highlights: [
        {
          title: 'Rolling',
          description:
            'Gradually replacing instances.',
        },
        {
          title: 'Blue-Green',
          description:
            'Switching traffic between two production-capable environments.',
        },
      ],
    },

    {
      title: 'Rolling Deployment vs Canary',
      content:
        'Rolling Deployment controls how application instances are replaced. Canary Deployment controls how much production traffic or which users are exposed to the new version. The two approaches can be combined.',
      highlights: [
        {
          title: 'Rolling',
          description:
            'Controls progressive instance replacement.',
        },
        {
          title: 'Canary',
          description:
            'Controls progressive user or traffic exposure.',
        },
        {
          title: 'Combined approach',
          description:
            'Using rolling infrastructure updates together with controlled traffic exposure.',
        },
      ],
    },

    {
      title: 'Deployment Monitoring',
      content:
        'A rolling deployment should be continuously monitored during the rollout. Teams should watch error rate, latency, availability, resource utilization, application logs, and business indicators.',
      highlights: [
        {
          title: 'Error rate',
          description:
            'The proportion of requests or operations that fail.',
        },
        {
          title: 'Latency',
          description:
            'The time required for the application to respond.',
        },
        {
          title: 'Availability',
          description:
            'The degree to which the service remains accessible.',
        },
        {
          title: 'Business metric',
          description:
            'A measurable indicator showing the effect of the release on business outcomes.',
        },
      ],
    },

    {
      title: 'Pause and Abort',
      content:
        'A mature rolling deployment can pause when health signals become uncertain and abort when predefined failure conditions are exceeded. This prevents a problematic release from continuing automatically.',
      highlights: [
        {
          title: 'Pause',
          description:
            'Temporarily stopping the rollout while the situation is evaluated.',
        },
        {
          title: 'Abort',
          description:
            'Stopping the rollout because defined failure conditions have been reached.',
        },
        {
          title: 'Failure threshold',
          description:
            'A predefined limit beyond which the deployment should not continue.',
        },
      ],
    },

    {
      title: 'Infrastructure Requirements',
      content:
        'Rolling deployments generally use existing service infrastructure more efficiently than Blue-Green because they do not require a complete duplicate environment. However, temporary additional capacity may still be required to maintain availability during replacement.',
      highlights: [
        {
          title: 'Capacity',
          description:
            'The available infrastructure required to serve workload safely during deployment.',
        },
        {
          title: 'Temporary capacity',
          description:
            'Additional resources used to maintain service availability during rollout.',
        },
      ],
    },

    {
      title: 'Container and Kubernetes Deployments',
      content:
        'Rolling updates are commonly used for containerized workloads. Kubernetes, for example, can progressively replace pods according to deployment configuration while maintaining the desired application state.',
      highlights: [
        {
          title: 'Pod',
          description:
            'A Kubernetes execution unit containing one or more containers.',
        },
        {
          title: 'Replica',
          description:
            'An instance of a workload maintained as part of the desired deployment.',
        },
        {
          title: 'Desired state',
          description:
            'The target state the orchestration system attempts to maintain.',
        },
      ],
    },

    {
      title: 'AI Application Considerations',
      content:
        'Rolling deployment can be used for AI APIs, RAG services, agent applications, and model-serving infrastructure. Because old and new versions may run simultaneously, model configuration, prompts, API contracts, vector indexes, and observability should remain compatible during the rollout.',
      highlights: [
        {
          title: 'Model version',
          description:
            'The specific model configuration used by the application.',
        },
        {
          title: 'Prompt version',
          description:
            'The controlled version of instructions sent to an AI model.',
        },
        {
          title: 'AI evaluation',
          description:
            'Testing AI behavior against predefined quality, safety, and business expectations.',
        },
        {
          title: 'Inference latency',
          description:
            'The time required for the AI system to produce a response.',
        },
      ],
    },

    {
      title: 'Rolling Deployment for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Rolling Deployment is primarily a capacity, compatibility, and risk-management problem. The important decisions are batch size, minimum available capacity, health criteria, rollout speed, rollback strategy, database compatibility, and ownership of the go/no-go decision.',
      highlights: [
        {
          title: 'Rollout risk',
          description:
            'The probability and impact of problems during progressive replacement.',
        },
        {
          title: 'Capacity planning',
          description:
            'Ensuring sufficient infrastructure exists to maintain service while updates occur.',
        },
        {
          title: 'Success criteria',
          description:
            'Predefined measurable conditions showing that the rollout can safely continue.',
        },
        {
          title: 'Rollback criteria',
          description:
            'Predefined conditions requiring the rollout to stop or return to the previous version.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include replacing too many instances at once, ignoring readiness checks, breaking backward compatibility, performing unsafe database migrations, monitoring only infrastructure metrics, rolling out without a tested rollback path, and allowing configuration differences between instances.',
      highlights: [
        {
          title: 'Oversized batch',
          description:
            'Updating too many instances simultaneously and increasing release impact.',
        },
        {
          title: 'Unsafe migration',
          description:
            'Changing database structures in a way that breaks older application instances.',
        },
        {
          title: 'Weak health checks',
          description:
            'Continuing rollout based on insufficient evidence that new instances are healthy.',
        },
        {
          title: 'Untested rollback',
          description:
            'Assuming the previous version can be restored without validating the process.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'ci-cd',
    'deployment-strategy',
    'rollback-strategy',
    'release-management',
    'feature-flags',
    'github-actions',
    'jenkins',
  ],
}

export default rollingDeploymentKnowledge
