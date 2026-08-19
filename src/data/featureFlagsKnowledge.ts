import type { KnowledgeDefinition } from './knowledge'

export const featureFlagsKnowledge: KnowledgeDefinition = {
  technologyId: 'feature-flags',
  slug: 'feature-flags',
  title: 'Feature Flags',
  summary:
    'Feature Flags are configuration controls that allow teams to turn software capabilities on or off without necessarily deploying new code.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What are Feature Flags?',
      content:
        'A Feature Flag is a control that determines whether a particular capability is enabled. Instead of permanently deciding feature behavior in code, teams can control the behavior through configuration.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A control that determines whether a software capability is active.',
        },
        {
          title: 'Enabled',
          description:
            'The state in which the controlled capability is available.',
        },
        {
          title: 'Disabled',
          description:
            'The state in which the controlled capability is unavailable.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of a Feature Flag like a light switch. The electrical wiring and bulb may already be installed, but the switch decides whether the light is currently on. Similarly, software can contain a feature while a flag decides whether users can access it.',
      highlights: [
        {
          title: 'Switch',
          description:
            'The feature flag controlling behavior.',
        },
        {
          title: 'Feature',
          description:
            'The capability controlled by the switch.',
        },
        {
          title: 'User exposure',
          description:
            'Which users are allowed to experience the capability.',
        },
      ],
    },

    {
      title: 'Why Feature Flags Matter',
      content:
        'Feature flags separate software deployment from feature release. Teams can deploy code first and activate functionality later, reducing release risk and enabling controlled experimentation.',
      highlights: [
        {
          title: 'Decoupled deployment',
          description:
            'Deploying software without immediately exposing every capability.',
        },
        {
          title: 'Controlled release',
          description:
            'Choosing when and to whom a feature becomes available.',
        },
        {
          title: 'Risk reduction',
          description:
            'Limiting the impact of a new capability while it is being validated.',
        },
      ],
    },

    {
      title: 'Feature Flag Lifecycle',
      content:
        'A healthy Feature Flag has a lifecycle: create the flag, deploy the supporting code, enable it for a controlled audience, monitor behavior, expand exposure, make the feature permanent when appropriate, and remove the flag and old code.',
      highlights: [
        {
          title: 'Create',
          description:
            'Define the feature flag and its intended behavior.',
        },
        {
          title: 'Rollout',
          description:
            'Gradually increase feature exposure.',
        },
        {
          title: 'Retirement',
          description:
            'Remove the flag and obsolete code after the feature becomes permanent.',
        },
      ],
    },

    {
      title: 'Release vs Deployment',
      content:
        'Feature flags make it possible to deploy a capability without releasing it to every user. This distinction allows teams to separate technical deployment decisions from product release decisions.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'Putting software into an environment.',
        },
        {
          title: 'Release',
          description:
            'Making functionality available to intended users.',
        },
        {
          title: 'Feature flag',
          description:
            'A mechanism that controls availability after deployment.',
        },
      ],
    },

    {
      title: 'Boolean Feature Flags',
      content:
        'The simplest feature flag has two states: enabled or disabled. Boolean flags are useful for straightforward operational controls but may not provide enough flexibility for complex rollout requirements.',
      highlights: [
        {
          title: 'True',
          description:
            'The feature is enabled.',
        },
        {
          title: 'False',
          description:
            'The feature is disabled.',
        },
      ],
    },

    {
      title: 'Percentage Rollout',
      content:
        'A percentage rollout exposes a feature to a controlled portion of users. For example, a team may start with 5% of users and progressively increase exposure after monitoring results.',
      highlights: [
        {
          title: 'Percentage rollout',
          description:
            'Enabling a feature for a defined percentage of users.',
        },
        {
          title: 'Progressive exposure',
          description:
            'Increasing the percentage of users receiving the feature over time.',
        },
      ],
    },

    {
      title: 'User Targeting',
      content:
        'Feature flags can target specific users or groups. This can support internal testing, beta programs, geographic rollout, customer cohorts, or controlled enterprise releases.',
      highlights: [
        {
          title: 'Target audience',
          description:
            'The users selected to receive a feature.',
        },
        {
          title: 'Cohort',
          description:
            'A defined group of users sharing a rollout condition.',
        },
        {
          title: 'Beta release',
          description:
            'A controlled release to selected users before broader availability.',
        },
      ],
    },

    {
      title: 'Kill Switch',
      content:
        'A kill switch is an operational feature flag designed to quickly disable a problematic capability without requiring a new deployment. It can reduce incident impact when a feature causes unexpected behavior.',
      highlights: [
        {
          title: 'Kill switch',
          description:
            'A control that can rapidly disable a problematic capability.',
        },
        {
          title: 'Incident mitigation',
          description:
            'Reducing production impact by disabling problematic functionality.',
        },
      ],
    },

    {
      title: 'Canary Releases and Feature Flags',
      content:
        'Feature flags can complement Canary Deployment. Traffic routing can determine which application version receives requests, while a feature flag can determine which capability is active for a particular user group.',
      highlights: [
        {
          title: 'Canary',
          description:
            'Controls exposure to a new software version.',
        },
        {
          title: 'Feature flag',
          description:
            'Controls exposure to a specific capability.',
        },
        {
          title: 'Combined rollout',
          description:
            'Using deployment and feature controls together for finer release management.',
        },
      ],
    },

    {
      title: 'A/B Testing',
      content:
        'Feature flags can support controlled experiments by assigning users to different experiences. The flag determines which version a user sees while product teams compare predefined outcomes.',
      highlights: [
        {
          title: 'Experiment',
          description:
            'A controlled comparison between different product experiences.',
        },
        {
          title: 'Variant',
          description:
            'One version of the experience being tested.',
        },
        {
          title: 'Experiment metric',
          description:
            'A measurable outcome used to compare variants.',
        },
      ],
    },

    {
      title: 'Feature Flag Configuration',
      content:
        'Feature flag configuration should be centrally managed, versioned where appropriate, access-controlled, and observable. Teams should know who changed a flag, when it changed, and what effect it is expected to have.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'The current settings controlling feature behavior.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of changes made to feature configuration.',
        },
        {
          title: 'Access control',
          description:
            'Restrictions determining who can change feature flags.',
        },
      ],
    },

    {
      title: 'Feature Flag Evaluation',
      content:
        'The application evaluates a flag before deciding which behavior to execute. Evaluation can depend on user identity, account attributes, environment, percentage allocation, geography, or other defined rules.',
      highlights: [
        {
          title: 'Evaluation',
          description:
            'Determining whether a feature should be enabled for a particular request or user.',
        },
        {
          title: 'Rule',
          description:
            'A condition that determines feature exposure.',
        },
        {
          title: 'Context',
          description:
            'Information about the user, request, or environment used during evaluation.',
        },
      ],
    },

    {
      title: 'Server-Side Feature Flags',
      content:
        'Server-side flags are evaluated by backend services before returning behavior to the client. They are useful when feature decisions involve sensitive business logic, security, backend capabilities, or server-controlled behavior.',
      highlights: [
        {
          title: 'Backend evaluation',
          description:
            'The server determines whether a feature is enabled.',
        },
        {
          title: 'Central control',
          description:
            'Feature behavior is controlled from backend infrastructure.',
        },
      ],
    },

    {
      title: 'Client-Side Feature Flags',
      content:
        'Client-side flags are evaluated within frontend applications. They can be useful for user-interface changes but should not be treated as a security boundary because client-side controls can potentially be inspected or modified.',
      highlights: [
        {
          title: 'Frontend evaluation',
          description:
            'The client application determines whether to show a capability.',
        },
        {
          title: 'Not a security boundary',
          description:
            'A client-side flag should not be relied upon to protect sensitive backend operations.',
        },
      ],
    },

    {
      title: 'Feature Flag Security',
      content:
        'Feature flag systems should protect sensitive configuration, restrict administrative access, maintain audit logs, and prevent unauthorized users from changing production behavior.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving users and systems only the permissions required to perform their responsibilities.',
        },
        {
          title: 'Audit logging',
          description:
            'Recording important feature configuration changes.',
        },
        {
          title: 'Administrative access',
          description:
            'Controlled access to production feature configuration.',
        },
      ],
    },

    {
      title: 'Feature Flag Technical Debt',
      content:
        'Temporary feature flags can become technical debt when they remain in the system after the rollout is complete. Old flags add conditional logic, increase testing complexity, and make the code harder to understand.',
      highlights: [
        {
          title: 'Flag debt',
          description:
            'Complexity created by old or unnecessary feature flags.',
        },
        {
          title: 'Flag cleanup',
          description:
            'Removing obsolete flags and their associated conditional code.',
        },
      ],
    },

    {
      title: 'Feature Flag Naming',
      content:
        'Flags should have clear, meaningful names that describe the capability or controlled behavior. Teams should avoid ambiguous names and document ownership, purpose, expected lifetime, and default behavior.',
      highlights: [
        {
          title: 'Flag name',
          description:
            'A unique identifier describing the controlled capability.',
        },
        {
          title: 'Owner',
          description:
            'The person or team responsible for the flag.',
        },
        {
          title: 'Default state',
          description:
            'The behavior used when a flag is unavailable or has no explicit configuration.',
        },
      ],
    },

    {
      title: 'Feature Flags for AI Applications',
      content:
        'Feature flags are particularly useful in AI systems because teams may need to control model versions, prompt versions, retrieval strategies, agent workflows, providers, safety policies, or experimental capabilities without redeploying the entire application.',
      highlights: [
        {
          title: 'Model flag',
          description:
            'Controls which model configuration an AI application uses.',
        },
        {
          title: 'Prompt flag',
          description:
            'Controls which prompt version is active.',
        },
        {
          title: 'Provider flag',
          description:
            'Controls which external AI provider or inference path is used.',
        },
        {
          title: 'Agent workflow flag',
          description:
            'Controls whether a particular agent workflow is active.',
        },
      ],
    },

    {
      title: 'AI Feature Rollout',
      content:
        'An AI feature can be released gradually to reduce risk. For example, a new RAG pipeline can first be enabled for internal users, then 5% of customers, then 25%, and eventually the full user population after quality, safety, latency, and cost metrics remain within acceptable thresholds.',
      highlights: [
        {
          title: 'Quality threshold',
          description:
            'The minimum acceptable AI quality level for rollout.',
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
      ],
    },

    {
      title: 'Observability',
      content:
        'Feature flag systems should expose enough information to understand feature exposure and its impact. Teams should be able to correlate flag changes with application metrics, errors, latency, and business outcomes.',
      highlights: [
        {
          title: 'Exposure metric',
          description:
            'A measurement showing how many users or requests received a feature.',
        },
        {
          title: 'Impact analysis',
          description:
            'Evaluating how feature activation affects technical or business outcomes.',
        },
      ],
    },

    {
      title: 'Feature Flags for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Feature Flags are primarily a release-risk and product-control mechanism. The leader should define ownership, rollout criteria, success metrics, rollback conditions, security controls, and flag retirement expectations.',
      highlights: [
        {
          title: 'Rollout policy',
          description:
            'Rules defining how a feature moves from limited exposure to broad availability.',
        },
        {
          title: 'Success criteria',
          description:
            'Measurable conditions that indicate the feature is ready for wider rollout.',
        },
        {
          title: 'Rollback condition',
          description:
            'A defined condition requiring the feature to be disabled or exposure reduced.',
        },
        {
          title: 'Flag ownership',
          description:
            'Clear accountability for operating and eventually retiring the flag.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include leaving temporary flags permanently, using flags as a security mechanism, creating too many overlapping flags, giving unrestricted production access, failing to monitor flag changes, having no default behavior, and not defining an owner or retirement date.',
      highlights: [
        {
          title: 'Permanent temporary flag',
          description:
            'A temporary rollout flag that remains indefinitely and creates unnecessary complexity.',
        },
        {
          title: 'Security misuse',
          description:
            'Relying on a client-side feature flag to protect sensitive functionality.',
        },
        {
          title: 'Flag sprawl',
          description:
            'Accumulating too many flags without clear ownership or lifecycle management.',
        },
        {
          title: 'No rollback criteria',
          description:
            'Enabling a feature without defining when it should be disabled.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'release-management',
    'canary-deployment',
    'blue-green-deployment',
    'rolling-deployment',
    'rollback-strategy',
    'deployment-strategy',
    'ci-cd',
    'github-actions',
  ],
}

export default featureFlagsKnowledge
