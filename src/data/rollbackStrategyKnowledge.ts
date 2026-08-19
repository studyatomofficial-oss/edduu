import type { KnowledgeDefinition } from './knowledge'

export const rollbackStrategyKnowledge: KnowledgeDefinition = {
  technologyId: 'rollback-strategy',
  slug: 'rollback-strategy',
  title: 'Rollback Strategy',
  summary:
    'Rollback Strategy is the planned approach for returning a software system to a previously known-good state when a deployment, release, configuration, or infrastructure change causes unacceptable problems.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Rollback?',
      content:
        'Rollback means reversing or mitigating a change so that the system returns to an acceptable previously validated state. A rollback can involve deploying an older application version, switching traffic to an older environment, disabling a feature flag, restoring configuration, or reversing a compatible infrastructure change.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a system toward a previously known-good state after a problematic change.',
        },
        {
          title: 'Known-good version',
          description:
            'A previously validated software version that is considered safe to operate.',
        },
        {
          title: 'Recovery',
          description:
            'The broader process of restoring acceptable service after a failure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine replacing the engine of a car. If the new engine causes problems, you want a clear way to put the previous working engine back. Rollback is the software equivalent: keep a reliable previous version available so the team can recover instead of trying to repair everything during an incident.',
      highlights: [
        {
          title: 'Old engine',
          description:
            'The previous known-good software version.',
        },
        {
          title: 'New engine',
          description:
            'The newly deployed release.',
        },
        {
          title: 'Recovery path',
          description:
            'The tested process for returning to the previous working state.',
        },
      ],
    },

    {
      title: 'Why Rollback Matters',
      content:
        'Production changes can fail because of application defects, configuration errors, dependency incompatibilities, infrastructure problems, database changes, or unexpected user behavior. A rollback strategy reduces the time and impact associated with these failures.',
      highlights: [
        {
          title: 'Risk reduction',
          description:
            'Reducing the impact of unsuccessful production changes.',
        },
        {
          title: 'Recovery speed',
          description:
            'How quickly acceptable service can be restored.',
        },
        {
          title: 'Blast radius',
          description:
            'The amount of users, systems, or business functionality affected by a failure.',
        },
      ],
    },

    {
      title: 'Rollback vs Fix Forward',
      content:
        'Rollback restores an earlier state. Fix forward means correcting the problem and deploying a new version. Teams choose between them based on severity, rollback safety, data changes, recovery speed, and confidence in the fix.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Return toward a previous known-good version or state.',
        },
        {
          title: 'Fix forward',
          description:
            'Correct the problem and deploy a new version instead of reverting.',
        },
        {
          title: 'Decision criteria',
          description:
            'The technical and business evidence used to choose recovery direction.',
        },
      ],
    },

    {
      title: 'When to Roll Back',
      content:
        'Rollback should normally be triggered when predefined failure conditions are reached. Examples include severe error-rate increases, major latency degradation, security issues, data corruption risk, broken critical workflows, or unacceptable business impact.',
      highlights: [
        {
          title: 'Failure threshold',
          description:
            'A predefined limit indicating that the release should not continue.',
        },
        {
          title: 'Critical incident',
          description:
            'A high-impact production event requiring urgent response.',
        },
        {
          title: 'Business impact',
          description:
            'The measurable effect of the failure on customers or business operations.',
        },
      ],
    },

    {
      title: 'Rollback Triggers',
      content:
        'Rollback triggers should be measurable wherever possible. A team might define thresholds for error rate, latency, availability, transaction failures, security alerts, or important business metrics.',
      highlights: [
        {
          title: 'Error threshold',
          description:
            'A defined level of application failures that can trigger rollback.',
        },
        {
          title: 'Latency threshold',
          description:
            'A defined response-time limit that can trigger recovery action.',
        },
        {
          title: 'Business threshold',
          description:
            'A defined business-impact condition that requires the release to stop or reverse.',
        },
      ],
    },

    {
      title: 'Rollback Mechanisms',
      content:
        'The actual rollback mechanism depends on the deployment architecture. Common approaches include redeploying an older artifact, switching traffic between environments, reducing canary exposure, disabling a feature flag, or restoring a previous configuration.',
      highlights: [
        {
          title: 'Artifact rollback',
          description:
            'Redeploying a previously validated software artifact.',
        },
        {
          title: 'Traffic rollback',
          description:
            'Redirecting users back to a previous application environment or version.',
        },
        {
          title: 'Feature rollback',
          description:
            'Disabling a problematic capability through a feature flag.',
        },
      ],
    },

    {
      title: 'Rollback and Blue-Green Deployment',
      content:
        'Blue-Green Deployment can make rollback relatively simple because the previous environment can remain available after traffic moves to the new environment. If the new environment fails, traffic can be redirected to the previous one.',
      highlights: [
        {
          title: 'Previous environment',
          description:
            'The environment containing the previously active version.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing back to the previous environment.',
        },
      ],
    },

    {
      title: 'Rollback and Canary Deployment',
      content:
        'Canary Deployment supports rollback by reducing or removing traffic from the new version when predefined thresholds are exceeded. Because exposure is limited initially, the potential impact can be smaller.',
      highlights: [
        {
          title: 'Canary rollback',
          description:
            'Removing production exposure from the canary version.',
        },
        {
          title: 'Abort',
          description:
            'Stopping the rollout before the new version reaches broader traffic.',
        },
      ],
    },

    {
      title: 'Rollback and Rolling Deployment',
      content:
        'Rolling deployments can roll back by replacing updated instances with the previous version. However, rollback becomes harder when database, configuration, or dependency changes are not backward compatible.',
      highlights: [
        {
          title: 'Instance rollback',
          description:
            'Returning updated instances to the previous version.',
        },
        {
          title: 'Version coexistence',
          description:
            'The period during which old and new versions operate simultaneously.',
        },
      ],
    },

    {
      title: 'Database Rollback',
      content:
        'Database rollback is often more difficult than application rollback because data changes can be irreversible or may have already been consumed by the new application. Safe migration patterns should therefore favor backward-compatible changes and recovery plans over blindly reversing schema changes.',
      highlights: [
        {
          title: 'Backward-compatible migration',
          description:
            'A database change designed to support both old and new application versions during transition.',
        },
        {
          title: 'Data recovery',
          description:
            'Restoring or correcting data when a release has caused unacceptable data impact.',
        },
        {
          title: 'Expand and contract',
          description:
            'Introducing compatible database changes first and removing old structures only after transition.',
        },
      ],
    },

    {
      title: 'Rollback Is Not Always Reversible',
      content:
        'Some changes cannot be safely reversed. Data mutations, external side effects, irreversible migrations, and third-party actions may continue even after application code is rolled back. A rollback strategy must therefore consider the entire system rather than application code alone.',
      highlights: [
        {
          title: 'Irreversible change',
          description:
            'A change that cannot safely be returned to its previous state.',
        },
        {
          title: 'External side effect',
          description:
            'An action performed outside the application that may continue after rollback.',
        },
      ],
    },

    {
      title: 'Rollback Testing',
      content:
        'A rollback strategy is only useful if it works under pressure. Teams should periodically test recovery procedures in controlled environments and verify that previous artifacts, configurations, infrastructure definitions, and operational runbooks are actually available.',
      highlights: [
        {
          title: 'Rollback drill',
          description:
            'A controlled exercise used to validate the recovery process.',
        },
        {
          title: 'Runbook',
          description:
            'A documented sequence of operational steps for handling a known scenario.',
        },
        {
          title: 'Recovery validation',
          description:
            'Evidence that the rollback process can restore acceptable service.',
        },
      ],
    },

    {
      title: 'Rollback Time',
      content:
        'Rollback planning should consider how quickly service must be restored. The recovery mechanism should be aligned with the system’s availability requirements and business impact.',
      highlights: [
        {
          title: 'Recovery time',
          description:
            'The time required to restore acceptable service after failure.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target maximum time within which service should be restored.',
        },
      ],
    },

    {
      title: 'Rollback vs Disaster Recovery',
      content:
        'Rollback handles problematic software or configuration changes by returning toward a previous state. Disaster Recovery addresses larger failures such as infrastructure loss, regional outages, or major data incidents. They are related but solve different problems.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Recovery from a problematic change.',
        },
        {
          title: 'Disaster Recovery',
          description:
            'Recovery from major infrastructure, availability, or data disasters.',
        },
      ],
    },

    {
      title: 'Rollback and Observability',
      content:
        'Reliable rollback decisions depend on observability. Teams need accurate metrics, logs, traces, alerts, and business signals to determine whether the new release is actually causing unacceptable impact.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements of system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Recorded events that help explain system behavior.',
        },
        {
          title: 'Traces',
          description:
            'Records showing how requests move through distributed systems.',
        },
        {
          title: 'Alert',
          description:
            'A notification generated when defined conditions indicate a possible problem.',
        },
      ],
    },

    {
      title: 'Automated Rollback',
      content:
        'Modern delivery platforms can automate rollback when predefined conditions are violated. Automation should be conservative and based on reliable signals because an incorrect rollback can itself create disruption.',
      highlights: [
        {
          title: 'Automatic rollback',
          description:
            'Programmatically returning to a previous version when defined conditions are met.',
        },
        {
          title: 'Rollback policy',
          description:
            'Rules defining when and how automated recovery can occur.',
        },
      ],
    },

    {
      title: 'Rollback for AI Applications',
      content:
        'AI systems may need rollback for model versions, prompts, RAG pipelines, agent workflows, provider integrations, safety configurations, or inference infrastructure. Because AI behavior can change without traditional software errors, rollback criteria should include quality and safety signals as well as infrastructure metrics.',
      highlights: [
        {
          title: 'Model rollback',
          description:
            'Returning an AI application to a previously validated model version.',
        },
        {
          title: 'Prompt rollback',
          description:
            'Returning to a previously validated prompt configuration.',
        },
        {
          title: 'RAG rollback',
          description:
            'Returning to a previous retrieval or knowledge pipeline configuration.',
        },
        {
          title: 'Agent rollback',
          description:
            'Returning to a previously validated agent workflow or tool configuration.',
        },
      ],
    },

    {
      title: 'AI Rollback Criteria',
      content:
        'AI rollback criteria can include hallucination increases, quality degradation, safety violations, retrieval failures, latency increases, unexpected token consumption, inference-cost increases, or poor user feedback.',
      highlights: [
        {
          title: 'Quality degradation',
          description:
            'A measurable reduction in AI response quality after a change.',
        },
        {
          title: 'Safety violation',
          description:
            'Behavior that violates defined safety requirements.',
        },
        {
          title: 'Cost regression',
          description:
            'An unacceptable increase in AI inference or infrastructure cost.',
        },
      ],
    },

    {
      title: 'Rollback for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, rollback is a risk-management capability rather than just a technical command. The leader should ensure that rollback ownership, triggers, recovery objectives, artifacts, runbooks, communication paths, and decision authority are defined before production release.',
      highlights: [
        {
          title: 'Rollback owner',
          description:
            'The person accountable for coordinating the recovery decision and execution.',
        },
        {
          title: 'Decision authority',
          description:
            'The person or group authorized to initiate rollback under defined conditions.',
        },
        {
          title: 'Recovery objective',
          description:
            'The expected recovery target that guides rollback planning.',
        },
        {
          title: 'Communication plan',
          description:
            'The predefined approach for informing stakeholders during a rollback.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include having no rollback plan, keeping no previous artifact, deleting the old environment immediately, assuming database changes can always be reversed, relying on untested manual steps, using unclear rollback triggers, and failing to communicate during recovery.',
      highlights: [
        {
          title: 'No recovery path',
          description:
            'Deploying a change without a practical method for returning to an acceptable state.',
        },
        {
          title: 'Missing artifact',
          description:
            'No longer having access to the previous production version required for recovery.',
        },
        {
          title: 'Untested rollback',
          description:
            'Assuming the recovery process works without validating it.',
        },
        {
          title: 'Unclear trigger',
          description:
            'Not defining the measurable conditions that require rollback.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'release-management',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'feature-flags',
    'artifact-management',
    'deployment-strategy',
    'ci-cd',
    'github-actions',
  ],
}

export default rollbackStrategyKnowledge
