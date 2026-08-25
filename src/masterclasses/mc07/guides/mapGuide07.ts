import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide07: GuideDefinition = {
  type: 'map',
  label: 'Implementation Map',
  title: 'Design and Operate a Production-Ready Software Architecture',
  objective:
    'Follow a practical architecture path from requirements and system boundaries through components, APIs, data, security, scalability, reliability and production operations.',

  steps: [
    {
      id: 'requirements',
      step: 1,
      title: 'Define the business requirements',
      action:
        'Start with the outcome the system must provide instead of starting with technologies.',
      details: [
        'Identify the primary business problem.',
        'Identify what users must be able to accomplish.',
        'Separate functional requirements from quality and operational requirements.',
        'Record important assumptions and constraints.',
      ],
    },

    {
      id: 'actors',
      step: 2,
      title: 'Identify actors and external systems',
      action:
        'List the people, applications and external services that interact with the system.',
      details: [
        'Identify primary user types.',
        'Identify administrators and operational users.',
        'Identify external providers and dependencies.',
        'Record what each actor needs from the system.',
      ],
    },

    {
      id: 'boundaries',
      step: 3,
      title: 'Define system boundaries',
      action:
        'Decide what the platform owns and what remains the responsibility of external systems.',
      details: [
        'Define the responsibilities inside the system.',
        'Identify external services such as payment, identity or communication providers.',
        'Avoid unclear ownership between components.',
        'Document important trust boundaries.',
      ],
    },

    {
      id: 'capabilities',
      step: 4,
      title: 'Identify major system capabilities',
      action:
        'Group requirements into meaningful business capabilities before selecting implementation technologies.',
      details: [
        'Identify major capabilities such as identity, course delivery and assessment.',
        'Separate capabilities that have different responsibilities.',
        'Avoid creating components only because a technology makes them possible.',
        'Use business responsibilities as the primary decomposition signal.',
      ],
    },

    {
      id: 'responsibilities',
      step: 5,
      title: 'Assign component responsibilities',
      action:
        'Define what each major component owns and what it should not own.',
      details: [
        'Give each component a clear responsibility.',
        'Identify data and business rules owned by each component.',
        'Avoid unnecessary coupling between components.',
        'Make ownership clear enough that teams can work independently.',
      ],
    },

    {
      id: 'communication',
      step: 6,
      title: 'Design communication between components',
      action:
        'Choose how components exchange information based on the interaction requirement.',
      details: [
        'Use synchronous APIs when the caller needs an immediate response.',
        'Use asynchronous messaging when work can happen independently.',
        'Define request and response responsibilities.',
        'Consider timeout, retry and failure behaviour for important dependencies.',
      ],
    },

    {
      id: 'data',
      step: 7,
      title: 'Design data ownership and storage',
      action:
        'Decide where important data belongs and how it should be accessed and updated.',
      details: [
        'Identify the owner of each important data set.',
        'Define transaction and consistency requirements.',
        'Consider access patterns and expected data growth.',
        'Use caching only where the access pattern justifies it.',
      ],
    },

    {
      id: 'consistency',
      step: 8,
      title: 'Define consistency requirements',
      action:
        'Determine where the system requires strong consistency and where eventual consistency is acceptable.',
      details: [
        'Identify operations that must be immediately correct.',
        'Identify information that can tolerate delayed propagation.',
        'Consider the business impact of stale data.',
        'Do not introduce distributed consistency mechanisms without a real requirement.',
      ],
    },

    {
      id: 'security',
      step: 9,
      title: 'Apply security boundaries',
      action:
        'Design authentication, authorization and least-privilege controls around trust boundaries.',
      details: [
        'Identify who is allowed to access each capability.',
        'Separate authentication from authorization.',
        'Apply least privilege to users and services.',
        'Protect sensitive information during storage and transmission.',
      ],
    },

    {
      id: 'scalability',
      step: 10,
      title: 'Plan for scalability',
      action:
        'Identify expected traffic, concurrency and growth before deciding where scaling is required.',
      details: [
        'Estimate normal and peak traffic.',
        'Identify likely bottlenecks.',
        'Prefer horizontal scaling for stateless workloads where appropriate.',
        'Scale the actual bottleneck rather than scaling every component equally.',
      ],
    },

    {
      id: 'performance',
      step: 11,
      title: 'Define performance expectations',
      action:
        'Translate user expectations into measurable latency and throughput requirements.',
      details: [
        'Define acceptable response-time targets.',
        'Consider percentile latency rather than only average latency.',
        'Identify expensive operations and dependencies.',
        'Use caching, asynchronous processing or batching only when justified.',
      ],
    },

    {
      id: 'reliability',
      step: 12,
      title: 'Design for failure and reliability',
      action:
        'Assume dependencies and infrastructure can fail and decide how the system should respond.',
      details: [
        'Identify critical dependencies.',
        'Define timeout and retry behaviour.',
        'Decide where graceful degradation is acceptable.',
        'Define recovery expectations for important failures.',
      ],
    },

    {
      id: 'observability',
      step: 13,
      title: 'Make the system observable',
      action:
        'Provide the signals required to understand production behaviour.',
      details: [
        'Collect useful metrics for traffic, latency and errors.',
        'Create structured logs with meaningful context.',
        'Use traces when requests cross multiple components.',
        'Create actionable alerts rather than noisy alerts.',
      ],
    },

    {
      id: 'deployment',
      step: 14,
      title: 'Design safe deployment and delivery',
      action:
        'Choose a release approach that controls deployment risk and provides a recovery path.',
      details: [
        'Use rolling or canary deployment strategies where appropriate.',
        'Define health checks and readiness conditions.',
        'Make rollback possible.',
        'Monitor the new version before expanding a risky rollout.',
      ],
    },

    {
      id: 'tradeoffs',
      step: 15,
      title: 'Document architecture trade-offs',
      action:
        'Explain why important architecture decisions were made and when they should be reconsidered.',
      details: [
        'Record the requirement behind the decision.',
        'Document benefits and costs.',
        'Identify risks introduced by the decision.',
        'Define future signals that would justify changing the architecture.',
      ],
    },

    {
      id: 'architecture-review',
      step: 16,
      title: 'Review the complete architecture',
      action:
        'Walk through the system from user request to production operation and verify that every major responsibility has an explicit owner.',
      details: [
        'Trace important user journeys end to end.',
        'Check component boundaries and communication paths.',
        'Review data ownership and consistency.',
        'Review security, scale, reliability and observability.',
        'Confirm the architecture can be operated by the engineering team.',
      ],
    },
  ],

  finalResult:
    'You can now move from business requirements to a coherent production architecture with explicit boundaries, responsibilities, communication paths, data ownership, security controls, scalability decisions, reliability mechanisms, observability and documented trade-offs.',
}