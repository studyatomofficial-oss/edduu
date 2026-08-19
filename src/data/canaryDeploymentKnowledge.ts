import type { KnowledgeDefinition } from './knowledge'

export const canaryDeploymentKnowledge: KnowledgeDefinition = {
  technologyId: 'canary-deployment',
  slug: 'canary-deployment',
  title: 'Canary Deployment',
  summary:
    'Canary Deployment is a progressive release strategy that exposes a new software version to a small portion of production traffic first, validates its behavior, and gradually increases exposure when the release is healthy.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Canary Deployment?',
      content:
        'Canary Deployment introduces a new software version to a limited percentage of production users or traffic before making it available to everyone. The team observes technical and business signals, and expands or stops the rollout based on predefined conditions.',
      highlights: [
        {
          title: 'Canary',
          description:
            'The new version receiving limited production exposure.',
        },
        {
          title: 'Progressive rollout',
          description:
            'Increasing exposure to the new version in controlled steps.',
        },
        {
          title: 'Traffic percentage',
          description:
            'The proportion of production traffic routed to the new version.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a restaurant introducing a new dish. Instead of putting it on every table immediately, the restaurant first serves it to a small group of customers. If customers like it and there are no problems, the restaurant serves it to more customers. If something goes wrong, the dish is stopped before everyone receives it.',
      highlights: [
        {
          title: 'Small group',
          description:
            'A limited set of users who receive the new version first.',
        },
        {
          title: 'Feedback',
          description:
            'Signals used to determine whether the new version is behaving correctly.',
        },
        {
          title: 'Gradual expansion',
          description:
            'Increasing exposure only after the release passes defined checks.',
        },
      ],
    },

    {
      title: 'How Canary Deployment Works',
      content:
        'The typical process is to deploy the new version alongside the existing version, route a small percentage of traffic to it, monitor the canary, compare it with the existing version, and progressively increase traffic when the results are acceptable.',
      highlights: [
        {
          title: 'Deploy',
          description:
            'Make the new version available in the production environment.',
        },
        {
          title: 'Route',
          description:
            'Send a controlled portion of traffic to the new version.',
        },
        {
          title: 'Monitor',
          description:
            'Observe technical, business, and user-impact signals.',
        },
      ],
    },

    {
      title: 'Canary Stages',
      content:
        'A rollout can use several traffic stages, such as 1%, 5%, 10%, 25%, 50%, and finally 100%. The exact percentages depend on system scale, risk, traffic volume, and business requirements.',
      highlights: [
        {
          title: 'Initial exposure',
          description:
            'The first small percentage of traffic sent to the new version.',
        },
        {
          title: 'Progressive exposure',
          description:
            'Increasing traffic after successful validation.',
        },
        {
          title: 'Full rollout',
          description:
            'The new version receives the intended production traffic.',
        },
      ],
    },

    {
      title: 'Canary Analysis',
      content:
        'Canary analysis compares the behavior of the new version with the existing version. The comparison should focus on predefined signals rather than subjective judgment.',
      highlights: [
        {
          title: 'Baseline',
          description:
            'The existing version used as a comparison point.',
        },
        {
          title: 'Canary metrics',
          description:
            'Metrics used to evaluate the new version.',
        },
        {
          title: 'Comparison',
          description:
            'Evaluating whether the canary behaves better, similarly, or worse than the baseline.',
        },
      ],
    },

    {
      title: 'Technical Metrics',
      content:
        'Technical metrics can include error rate, latency, availability, resource utilization, throughput, saturation, and infrastructure health.',
      highlights: [
        {
          title: 'Error rate',
          description:
            'The proportion of requests or operations that fail.',
        },
        {
          title: 'Latency',
          description:
            'The time required for the system to respond.',
        },
        {
          title: 'Availability',
          description:
            'The degree to which the service remains accessible and operational.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work or traffic the system processes over time.',
        },
      ],
    },

    {
      title: 'Business Metrics',
      content:
        'A technically healthy deployment can still be bad for the business. Canary analysis should therefore include important business indicators such as conversion, transaction completion, engagement, or customer-impact metrics where appropriate.',
      highlights: [
        {
          title: 'Business metric',
          description:
            'A measurable indicator showing whether the software supports the intended business outcome.',
        },
        {
          title: 'Customer impact',
          description:
            'The effect of the new release on users or customers.',
        },
      ],
    },

    {
      title: 'Automated Canary Analysis',
      content:
        'Canary rollouts can be automated using predefined thresholds. The delivery system can promote the release when metrics remain healthy, pause when results are uncertain, or stop and roll back when failure thresholds are exceeded.',
      highlights: [
        {
          title: 'Promotion',
          description:
            'Increasing traffic to the new version after successful validation.',
        },
        {
          title: 'Pause',
          description:
            'Temporarily stopping rollout while additional analysis is performed.',
        },
        {
          title: 'Abort',
          description:
            'Stopping the rollout because the release is not meeting required conditions.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'If the canary shows unacceptable behavior, traffic can be reduced to zero or returned to the existing version. A well-designed canary process should make rollback fast and predictable.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning traffic to the previously known-good version.',
        },
        {
          title: 'Known-good version',
          description:
            'A previously validated version that can safely serve production traffic.',
        },
        {
          title: 'Abort threshold',
          description:
            'A predefined condition that causes the rollout to stop.',
        },
      ],
    },

    {
      title: 'Canary vs Blue-Green',
      content:
        'Blue-Green Deployment typically maintains two production-capable environments and switches traffic between them. Canary Deployment progressively exposes the new version to a subset of production traffic. Canary therefore provides gradual exposure rather than an immediate full traffic switch.',
      highlights: [
        {
          title: 'Blue-Green',
          description:
            'Switching production traffic between two environments.',
        },
        {
          title: 'Canary',
          description:
            'Gradually increasing production exposure to a new version.',
        },
      ],
    },

    {
      title: 'Canary vs Rolling',
      content:
        'Rolling Deployment progressively replaces application instances with new instances. Canary Deployment focuses on controlling the percentage of users or traffic exposed to the new version. These strategies can also be combined.',
      highlights: [
        {
          title: 'Rolling',
          description:
            'Gradually replacing application instances.',
        },
        {
          title: 'Canary',
          description:
            'Gradually increasing user or traffic exposure.',
        },
        {
          title: 'Combined strategy',
          description:
            'Using rolling infrastructure changes together with controlled traffic exposure.',
        },
      ],
    },

    {
      title: 'Traffic Management',
      content:
        'Canary deployments require a mechanism to control which requests reach the new version. Traffic management can be implemented through load balancers, ingress controllers, service meshes, API gateways, DNS mechanisms, or application-level routing.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming requests across available instances.',
        },
        {
          title: 'Service mesh',
          description:
            'An infrastructure layer that can control service-to-service traffic and provide observability.',
        },
        {
          title: 'API gateway',
          description:
            'A gateway that can route and manage API traffic.',
        },
      ],
    },

    {
      title: 'User Segmentation',
      content:
        'Some canary strategies target specific users rather than a random percentage of traffic. Teams may select internal employees, geographic regions, customer cohorts, or other controlled groups.',
      highlights: [
        {
          title: 'Cohort',
          description:
            'A defined group of users selected for a particular rollout or analysis.',
        },
        {
          title: 'Targeted rollout',
          description:
            'Exposing the new version to a selected user group.',
        },
      ],
    },

    {
      title: 'Feature Flags and Canary',
      content:
        'Feature flags can complement canary deployment by controlling functionality independently from infrastructure traffic. A team can deploy the software, expose it to a limited audience, and enable a specific capability only for selected users.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A control determining whether a capability is active.',
        },
        {
          title: 'Feature exposure',
          description:
            'The percentage or group of users allowed to access a feature.',
        },
      ],
    },

    {
      title: 'Database Compatibility',
      content:
        'Canary deployments may temporarily run old and new application versions at the same time. Database changes therefore need backward compatibility so both versions can operate safely during the rollout.',
      highlights: [
        {
          title: 'Backward compatibility',
          description:
            'Allowing multiple application versions to work safely with shared data structures.',
        },
        {
          title: 'Expand and contract',
          description:
            'Introducing compatible database changes first and removing old structures later.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'Canary deployment depends heavily on observability. Without reliable metrics, logs, traces, and alerts, the team cannot confidently determine whether the new version is safe to promote.',
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
            'Records showing how a request travels through distributed services.',
        },
        {
          title: 'Alert',
          description:
            'A notification generated when defined conditions indicate potential problems.',
        },
      ],
    },

    {
      title: 'Canary for AI Applications',
      content:
        'Canary deployment is especially useful for AI systems because changes to models, prompts, retrieval logic, agent workflows, or provider configurations can alter behavior in unexpected ways. A small production exposure allows teams to validate quality, safety, latency, and cost before broad rollout.',
      highlights: [
        {
          title: 'Model canary',
          description:
            'Exposing a new model version to a limited portion of production traffic.',
        },
        {
          title: 'Prompt canary',
          description:
            'Testing a new prompt configuration with a limited user population.',
        },
        {
          title: 'AI quality',
          description:
            'The degree to which AI responses meet defined correctness and usefulness expectations.',
        },
        {
          title: 'AI safety',
          description:
            'The degree to which the AI system behaves within defined safety requirements.',
        },
      ],
    },

    {
      title: 'AI Canary Metrics',
      content:
        'AI canary deployments should monitor more than infrastructure metrics. Teams may compare response quality, hallucination rates, retrieval quality, refusal behavior, latency, token usage, inference cost, and user feedback between the canary and baseline versions.',
      highlights: [
        {
          title: 'Hallucination rate',
          description:
            'The observed frequency with which an AI system produces unsupported or incorrect information.',
        },
        {
          title: 'Retrieval quality',
          description:
            'The degree to which retrieved information is relevant and useful to the AI response.',
        },
        {
          title: 'Token usage',
          description:
            'The amount of model input and output text processed during inference.',
        },
        {
          title: 'Inference cost',
          description:
            'The cost associated with processing AI requests.',
        },
      ],
    },

    {
      title: 'Canary for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Canary Deployment is primarily a risk-management and decision-making pattern. The key questions are: what traffic should be exposed first, what metrics define success, what thresholds trigger rollback, how long should the observation window be, and who owns the go/no-go decision?',
      highlights: [
        {
          title: 'Success criteria',
          description:
            'Predefined measurable conditions that indicate the new release is performing acceptably.',
        },
        {
          title: 'Abort criteria',
          description:
            'Predefined conditions that require the rollout to stop or roll back.',
        },
        {
          title: 'Observation window',
          description:
            'The period during which the canary is monitored before increasing exposure.',
        },
        {
          title: 'Go/no-go decision',
          description:
            'The decision to continue or stop the rollout based on defined evidence.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include choosing a canary percentage without considering traffic volume, monitoring only infrastructure metrics, having no baseline for comparison, using unclear success criteria, expanding traffic too quickly, ignoring business impact, and failing to test rollback.',
      highlights: [
        {
          title: 'Poor baseline',
          description:
            'Lacking a reliable comparison point for evaluating the new version.',
        },
        {
          title: 'Weak success criteria',
          description:
            'Using vague judgments instead of measurable release conditions.',
        },
        {
          title: 'Fast rollout',
          description:
            'Increasing exposure before sufficient evidence has been collected.',
        },
        {
          title: 'Untested rollback',
          description:
            'Assuming recovery will work without validating the rollback process.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'blue-green-deployment',
    'rolling-deployment',
    'ci-cd',
    'deployment-strategy',
    'rollback-strategy',
    'feature-flags',
    'release-management',
    'github-actions',
    'jenkins',
  ],
}

export default canaryDeploymentKnowledge
