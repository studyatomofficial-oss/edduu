import type { KnowledgeDefinition } from './knowledge'

export const blueGreenDeploymentKnowledge: KnowledgeDefinition = {
  technologyId: 'blue-green-deployment',
  slug: 'blue-green-deployment',
  title: 'Blue-Green Deployment',
  summary:
    'Blue-Green Deployment is a release strategy that maintains two production-capable environments and switches user traffic between them to reduce deployment risk and simplify rollback.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Blue-Green Deployment?',
      content:
        'Blue-Green Deployment uses two environments that are capable of serving production traffic. One environment serves the current version while the other receives the new version. After the new version is validated, traffic is switched to it.',
      highlights: [
        {
          title: 'Blue',
          description:
            'The environment currently serving production traffic.',
        },
        {
          title: 'Green',
          description:
            'The alternate environment containing the new release.',
        },
        {
          title: 'Traffic switch',
          description:
            'The routing operation that moves users from one environment to the other.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a restaurant with two fully equipped kitchens. Kitchen Blue is serving customers. You prepare and test the new menu in Kitchen Green. Once everything is ready, you redirect customers to Green. If something goes wrong, you can redirect them back to Blue.',
      highlights: [
        {
          title: 'Current kitchen',
          description:
            'The environment currently serving users.',
        },
        {
          title: 'New kitchen',
          description:
            'The environment containing the new software version.',
        },
        {
          title: 'Switch',
          description:
            'Moving traffic from the old environment to the new environment.',
        },
      ],
    },

    {
      title: 'How It Works',
      content:
        'The typical flow is: keep the current environment serving users, provision or prepare the alternate environment, deploy the new version there, run validation checks, switch traffic, monitor the new environment, and retain the previous environment temporarily for rollback.',
      highlights: [
        {
          title: 'Deploy',
          description:
            'Install the new software version into the inactive environment.',
        },
        {
          title: 'Validate',
          description:
            'Confirm that the new environment behaves correctly before exposing users to it.',
        },
        {
          title: 'Switch',
          description:
            'Route production traffic to the newly validated environment.',
        },
      ],
    },

    {
      title: 'Pre-Deployment',
      content:
        'Before deploying the new version, the team should confirm that the existing production environment is healthy and that the new release has passed required development and CI/CD validation.',
      highlights: [
        {
          title: 'Release candidate',
          description:
            'The software version selected for deployment.',
        },
        {
          title: 'Pre-deployment validation',
          description:
            'Checks performed before changing the production environment.',
        },
      ],
    },

    {
      title: 'Deploy to Green',
      content:
        'The new application version is deployed to the inactive Green environment without immediately exposing production users to it. This allows the release to be validated independently.',
      highlights: [
        {
          title: 'Green environment',
          description:
            'The production-capable environment prepared with the new release.',
        },
        {
          title: 'Isolated validation',
          description:
            'Testing the new version before directing normal production traffic to it.',
        },
      ],
    },

    {
      title: 'Validation',
      content:
        'Validation should cover application health, critical user flows, API behavior, dependencies, configuration, database compatibility, security controls, and other production-readiness requirements.',
      highlights: [
        {
          title: 'Smoke test',
          description:
            'A small set of critical checks confirming that the deployment is fundamentally working.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism used to determine whether the deployed service is healthy.',
        },
        {
          title: 'Production readiness',
          description:
            'The state in which the release satisfies defined operational and business requirements.',
        },
      ],
    },

    {
      title: 'Traffic Switching',
      content:
        'Once Green is validated, traffic can be redirected from Blue to Green. The switching mechanism may use a load balancer, reverse proxy, service mesh, DNS, ingress controller, or another traffic-management layer.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming requests across available service instances.',
        },
        {
          title: 'Routing',
          description:
            'The rules determining where requests are sent.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing so users reach the new environment.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'One of the major benefits of Blue-Green Deployment is fast rollback. If Green behaves incorrectly after the traffic switch, traffic can be redirected back to Blue, assuming Blue remains healthy and available.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning traffic to the previously known-good environment.',
        },
        {
          title: 'Known-good environment',
          description:
            'An environment containing a version that has previously been validated.',
        },
        {
          title: 'Rollback speed',
          description:
            'The time required to restore traffic to the previous environment.',
        },
      ],
    },

    {
      title: 'Database Challenges',
      content:
        'Database changes can make Blue-Green Deployment more complicated because both application versions may temporarily exist. Schema changes should normally be designed for backward compatibility so both versions can operate safely during transition.',
      highlights: [
        {
          title: 'Backward compatibility',
          description:
            'Allowing old and new application versions to work with the database during deployment.',
        },
        {
          title: 'Expand and contract',
          description:
            'Introducing compatible database changes first and removing old structures later.',
        },
        {
          title: 'Database migration',
          description:
            'A controlled change to database schema or data.',
        },
      ],
    },

    {
      title: 'Configuration Management',
      content:
        'Blue and Green environments need consistent configuration while still allowing environment-specific values. Sensitive credentials should be managed separately using secure secret-management mechanisms.',
      highlights: [
        {
          title: 'Configuration drift',
          description:
            'Unintended differences between environments that can cause inconsistent behavior.',
        },
        {
          title: 'Environment configuration',
          description:
            'Configuration values specific to a deployment environment.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as credentials, tokens, or private keys.',
        },
      ],
    },

    {
      title: 'Infrastructure Requirements',
      content:
        'Blue-Green Deployment generally requires the ability to maintain two production-capable environments. This may increase infrastructure requirements compared with strategies that update the same infrastructure progressively.',
      highlights: [
        {
          title: 'Duplicate capacity',
          description:
            'Additional infrastructure required to maintain the alternate production-capable environment.',
        },
        {
          title: 'Infrastructure cost',
          description:
            'The additional operational expense associated with maintaining deployment capacity.',
        },
      ],
    },

    {
      title: 'Advantages',
      content:
        'Blue-Green Deployment can provide fast rollback, reduced deployment downtime, isolated validation, and a clear separation between the current and new application versions.',
      highlights: [
        {
          title: 'Fast rollback',
          description:
            'Traffic can often be returned to the previous environment quickly.',
        },
        {
          title: 'Reduced downtime',
          description:
            'The new version can be prepared before the traffic switch.',
        },
        {
          title: 'Isolated release',
          description:
            'The new version can be validated separately before receiving normal production traffic.',
        },
      ],
    },

    {
      title: 'Disadvantages',
      content:
        'Blue-Green Deployment can require additional infrastructure capacity, careful database compatibility, reliable traffic switching, and operational discipline around environment consistency.',
      highlights: [
        {
          title: 'Infrastructure cost',
          description:
            'Maintaining two production-capable environments can increase infrastructure cost.',
        },
        {
          title: 'Database complexity',
          description:
            'Database compatibility becomes important when old and new application versions coexist.',
        },
        {
          title: 'Environment consistency',
          description:
            'Differences between Blue and Green can cause unexpected behavior.',
        },
      ],
    },

    {
      title: 'Blue-Green vs Rolling',
      content:
        'Blue-Green maintains separate environments and switches traffic between them. Rolling deployment progressively replaces instances within the existing environment. Blue-Green can simplify rollback, while rolling deployments can use infrastructure more efficiently.',
      highlights: [
        {
          title: 'Blue-Green',
          description:
            'Two production-capable environments with a traffic switch.',
        },
        {
          title: 'Rolling',
          description:
            'Gradual replacement of application instances.',
        },
      ],
    },

    {
      title: 'Blue-Green vs Canary',
      content:
        'Blue-Green generally switches traffic between complete environments, while Canary gradually exposes the new version to a subset of users or requests. Canary provides progressive production exposure, whereas Blue-Green provides stronger environment-level isolation.',
      highlights: [
        {
          title: 'Blue-Green',
          description:
            'Switching traffic between two production-capable environments.',
        },
        {
          title: 'Canary',
          description:
            'Gradually increasing traffic to a new version.',
        },
        {
          title: 'Progressive delivery',
          description:
            'Increasing release exposure gradually while monitoring outcomes.',
        },
      ],
    },

    {
      title: 'Monitoring After Switch',
      content:
        'The traffic switch should not be treated as the end of the deployment. Teams should monitor error rates, latency, availability, resource usage, logs, traces, and important business metrics before deciding that the release is stable.',
      highlights: [
        {
          title: 'Error rate',
          description:
            'The proportion of requests or operations resulting in errors.',
        },
        {
          title: 'Latency',
          description:
            'The time required for the system to respond to requests.',
        },
        {
          title: 'Business metric',
          description:
            'A measurable signal showing whether the release is achieving expected business outcomes.',
        },
      ],
    },

    {
      title: 'AI Application Considerations',
      content:
        'Blue-Green Deployment can be useful for AI applications where a new model, prompt configuration, agent workflow, or inference service needs to be validated before broad exposure. The release should also consider AI-specific quality, safety, latency, and cost signals.',
      highlights: [
        {
          title: 'Model version',
          description:
            'The specific model configuration used by the new AI release.',
        },
        {
          title: 'Prompt version',
          description:
            'The controlled version of prompts used by the AI application.',
        },
        {
          title: 'AI evaluation',
          description:
            'Testing AI behavior against defined quality, safety, or business expectations.',
        },
        {
          title: 'Inference cost',
          description:
            'The cost associated with processing AI requests.',
        },
      ],
    },

    {
      title: 'Blue-Green for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Blue-Green Deployment is primarily a risk-management pattern. The important questions are whether two environments are affordable, how traffic will be switched, how health will be measured, how database compatibility will be maintained, and how quickly the organization can recover.',
      highlights: [
        {
          title: 'Release risk',
          description:
            'The probability and impact of a new deployment causing unacceptable problems.',
        },
        {
          title: 'Recovery objective',
          description:
            'The expected speed at which the service should recover after a deployment failure.',
        },
        {
          title: 'Operational readiness',
          description:
            'The preparedness of infrastructure, monitoring, support, and rollback mechanisms.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include allowing Blue and Green environments to drift apart, changing the database incompatibly, switching traffic without validation, deleting Blue immediately after switching, failing to monitor the new environment, and assuming rollback is possible without testing it.',
      highlights: [
        {
          title: 'Environment drift',
          description:
            'Unintended differences between Blue and Green environments.',
        },
        {
          title: 'Untested rollback',
          description:
            'Assuming rollback will work without validating the recovery process.',
        },
        {
          title: 'Premature cleanup',
          description:
            'Removing the previous environment before the new release has demonstrated stability.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'ci-cd',
    'canary-deployment',
    'rolling-deployment',
    'rollback-strategy',
    'deployment-strategy',
    'release-management',
    'feature-flags',
    'github-actions',
    'jenkins',
  ],
}

export default blueGreenDeploymentKnowledge
