import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session08: SessionDefinition = {
  id: 'mc10-session-08',
  number: 8,
  stage: 'discover',
  title: 'EDDUU Distributed Platform Capstone - Design the Production System',
  objective:
    'Combine distributed-system foundations, service boundaries, APIs, data consistency, reliability, messaging and observability into one production-oriented EDDUU platform architecture.',
  experiences: [
    {
      id: 'mc10-s08-capstone-lesson',
      type: 'lesson',
      title: 'Putting the Distributed Platform Together',
      description:
        'Review how the individual distributed-system decisions combine into one coherent EDDUU production architecture.',
      lesson: {
        opening:
          'You have now seen the individual pieces of a distributed platform. The capstone connects them into one system where every architectural choice has a reason and every new boundary introduces responsibility.',
        sections: [
          {
            heading: '1. Start from the user request',
            explanation:
              'Architecture should begin with the business request and the user experience rather than starting with a list of technologies.',
            example:
              'An EDDUU student opens the learning dashboard and expects a useful response within an acceptable latency target.',
          },
          {
            heading: '2. Enter through the platform boundary',
            explanation:
              'A controlled API entry point can provide authentication, routing, rate controls and common request policies before traffic reaches internal services.',
            example:
              'The EDDUU platform routes dashboard traffic through an API gateway before it reaches internal services.',
          },
          {
            heading: '3. Use meaningful service boundaries',
            explanation:
              'Internal services should represent capabilities with clear ownership rather than arbitrary technical layers.',
            example:
              'Profile, Learning, Notification and Analytics capabilities can have separate responsibilities when independent ownership provides value.',
          },
          {
            heading: '4. Use synchronous calls only where needed',
            explanation:
              'Immediate user-facing information can use synchronous APIs, while work that can happen later should be decoupled through messaging.',
            example:
              'The dashboard can synchronously retrieve current profile information while analytics processing happens asynchronously.',
          },
          {
            heading: '5. Establish data ownership',
            explanation:
              'Each service should have clear authority over the data needed for its capability. Cross-service access should happen through contracts rather than uncontrolled shared database access.',
            example:
              'The Learning Service owns learning progress while Analytics maintains its own derived reporting representation.',
          },
          {
            heading: '6. Select consistency intentionally',
            explanation:
              'Different business operations can require different freshness guarantees. Critical operations may require stronger consistency while derived views can often use eventual consistency.',
            example:
              'Payment state requires stronger correctness than a recommendation feed.',
          },
          {
            heading: '7. Add messaging for decoupled work',
            explanation:
              'Events and queues allow services to react independently and absorb differences in processing speed.',
            example:
              'CourseCompleted can be consumed independently by Analytics and Notifications.',
          },
          {
            heading: '8. Design for duplicate delivery',
            explanation:
              'Messaging systems can redeliver work. Consumers must use idempotent processing where duplicate business effects would be harmful.',
            example:
              'An EDDUU notification consumer can record processed event identifiers before completing duplicate-sensitive work.',
          },
          {
            heading: '9. Contain dependency failure',
            explanation:
              'Timeouts, bounded retries, backoff, circuit breakers, bulkheads and graceful fallbacks reduce the blast radius of unhealthy dependencies.',
            example:
              'If Recommendations fail, the learning dashboard can continue without recommendation content.',
          },
          {
            heading: '10. Observe every important path',
            explanation:
              'Metrics, structured logs and distributed traces provide evidence about performance, errors and request paths across service boundaries.',
            example:
              'A correlation ID allows an EDDUU request to be connected across Dashboard, Learning, Profile and Recommendation services.',
          },
          {
            heading: '11. Define reliability targets',
            explanation:
              'Production architecture needs measurable service objectives. SLOs turn reliability expectations into explicit targets that teams can monitor.',
            example:
              'EDDUU can define latency and availability objectives for important user-facing APIs.',
          },
          {
            heading: '12. Plan for incidents',
            explanation:
              'A production platform needs an operational response when components fail. Mitigation, communication, recovery and post-incident learning are part of the architecture.',
            example:
              'During a major Recommendation outage, EDDUU can disable that capability, preserve the core learning path and investigate the root cause separately.',
          },
          {
            heading: '13. Avoid distributed-system overengineering',
            explanation:
              'Not every component needs to become a separate service. Additional boundaries add network, operational and data-consistency complexity.',
            example:
              'A small internal EDDUU administration feature can remain inside a modular application if independent deployment provides no meaningful benefit.',
          },
          {
            heading: '14. Architecture is a set of trade-offs',
            explanation:
              'A production architecture is not judged by the number of technologies used. It is judged by whether the chosen trade-offs support business goals, reliability and operational reality.',
            example:
              'EDDUU may deliberately accept eventual consistency for analytics because lower coupling and scalable processing provide greater value.',
          },
        ],
        realWorldConnection:
          'Strong distributed architecture comes from connecting business requirements with explicit decisions about boundaries, communication, data, failure and operations.',
        keyIdea:
          'A production distributed platform is a coordinated system of boundaries, contracts, data ownership, messaging, reliability controls and observability.',
        recap: [
          'Start from business and user requirements.',
          'Use clear service boundaries.',
          'Use synchronous calls for immediate dependencies.',
          'Use asynchronous messaging for decoupled work.',
          'Give services clear data ownership.',
          'Choose consistency based on business correctness.',
          'Make duplicate message processing safe.',
          'Contain dependency failures.',
          'Connect metrics, logs and traces with correlation identifiers.',
          'Treat operations and incident response as part of architecture.',
        ],
      },
    },

    {
      id: 'mc10-s08-capstone-animation',
      type: 'animation',
      title: 'Watch the Complete EDDUU Distributed Platform',
      description:
        'Follow one student action through the complete production architecture from the user interface to services, data, messaging, reliability controls and observability.',
      animation: {
        visual: 'architecture',
        opening:
          'The final architecture combines every major MC10 concept into one production request path.',
        parts: [
          {
            id: 'client',
            label: 'EDDUU CLIENT',
            explanation:
              'The student initiates a user-facing operation from the platform.',
            example:
              'A student opens the learning dashboard.',
          },
          {
            id: 'gateway',
            label: 'API GATEWAY',
            explanation:
              'The platform boundary authenticates, routes and applies common request policies.',
            example:
              'The gateway forwards the dashboard request to the appropriate internal service.',
          },
          {
            id: 'services',
            label: 'DOMAIN SERVICES',
            explanation:
              'Meaningful service boundaries divide capabilities according to ownership and operational requirements.',
            example:
              'Learning, Profile, Analytics and Notification capabilities have explicit responsibilities.',
          },
          {
            id: 'sync-contract',
            label: 'SYNCHRONOUS API',
            explanation:
              'Immediate information is retrieved through explicit service contracts.',
            example:
              'The Dashboard requests current learning and profile information.',
          },
          {
            id: 'data-owner',
            label: 'SERVICE-OWNED DATA',
            explanation:
              'Each service controls its authoritative data and publishes appropriate information for other components.',
            example:
              'Learning owns progress while Analytics maintains derived reporting data.',
          },
          {
            id: 'event-bus',
            label: 'EVENT BUS',
            explanation:
              'Business events allow independent consumers to react without direct runtime coupling between every service.',
            example:
              'CourseCompleted is published for Analytics and Notifications.',
          },
          {
            id: 'reliability',
            label: 'RELIABILITY CONTROLS',
            explanation:
              'Timeouts, retries, backoff, circuit breakers and fallbacks contain dependency failures.',
            example:
              'The platform continues the core learning experience when a non-critical service fails.',
          },
          {
            id: 'observability',
            label: 'OBSERVABILITY',
            explanation:
              'Metrics, logs and traces provide evidence about request behavior across the distributed platform.',
            example:
              'One correlation ID connects the request across gateway and downstream services.',
          },
          {
            id: 'operations',
            label: 'PRODUCTION OPERATIONS',
            explanation:
              'SLOs, alerts, incident response and recovery keep the platform reliable after deployment.',
            example:
              'An alert detects elevated API latency and the operations team investigates the distributed trace.',
          },
        ],
        closing:
          'The final architecture is not a collection of isolated technologies. Every boundary, message, data decision and reliability control exists to support a production requirement.',
      },
    },

    {
      id: 'mc10-s08-capstone-simulation',
      type: 'simulation',
      title: 'Architect the EDDUU Production Platform',
      description:
        'Make architecture decisions for a realistic EDDUU production scenario.',
      simulation: {
        instruction:
          'Match each architecture requirement with the design decision that best satisfies the requirement.',
        items: [
          {
            id: 'dashboard-data',
            label:
              'The dashboard needs current student profile data before the response can complete.',
            description:
              'The caller needs an immediate result.',
            correctTargetId: 'sync-api',
          },
          {
            id: 'course-event',
            label:
              'Multiple independent services need to react after a course is completed.',
            description:
              'The producer should not directly coordinate every reaction.',
            correctTargetId: 'event',
          },
          {
            id: 'analytics-data',
            label:
              'Analytics can tolerate a short delay before new learning activity appears.',
            description:
              'Perfect read freshness is not required.',
            correctTargetId: 'eventual-consistency',
          },
          {
            id: 'dependency-outage',
            label:
              'A non-critical recommendation dependency repeatedly fails.',
            description:
              'The core learning experience should remain available.',
            correctTargetId: 'circuit-breaker-fallback',
          },
          {
            id: 'slow-request',
            label:
              'A dashboard request is slow and the team needs to identify which downstream service consumes most of the time.',
            description:
              'The investigation must follow one request across service boundaries.',
            correctTargetId: 'distributed-trace',
          },
          {
            id: 'duplicate-event',
            label:
              'A message consumer may receive the same event more than once.',
            description:
              'Repeated processing must not create an unintended duplicate business effect.',
            correctTargetId: 'idempotent-consumer',
          },
          {
            id: 'service-data',
            label:
              'The Learning Service needs authority over learning progress.',
            description:
              'The architecture needs a clear source of truth.',
            correctTargetId: 'data-ownership',
          },
        ],
        targets: [
          {
            id: 'sync-api',
            label: 'SYNCHRONOUS API',
            description:
              'Use when the current request requires an immediate response.',
          },
          {
            id: 'event',
            label: 'BUSINESS EVENT',
            description:
              'Publish a fact that multiple independent consumers can react to.',
          },
          {
            id: 'eventual-consistency',
            label: 'EVENTUAL CONSISTENCY',
            description:
              'Allow temporary propagation delay where the business can tolerate it.',
          },
          {
            id: 'circuit-breaker-fallback',
            label: 'CIRCUIT BREAKER + FALLBACK',
            description:
              'Stop repeated calls to an unhealthy dependency and preserve useful functionality.',
          },
          {
            id: 'distributed-trace',
            label: 'DISTRIBUTED TRACE',
            description:
              'Follow one request across service boundaries and inspect span timing.',
          },
          {
            id: 'idempotent-consumer',
            label: 'IDEMPOTENT CONSUMER',
            description:
              'Make duplicate message delivery safe for the business operation.',
          },
          {
            id: 'data-ownership',
            label: 'SERVICE DATA OWNERSHIP',
            description:
              'Define the authoritative service responsible for the data.',
          },
        ],
        successMessage:
          'Excellent. You have connected service boundaries, communication, data, reliability and observability into one coherent distributed architecture.',
        failureMessage:
          'Work from the business requirement first. Ask whether the request needs an immediate answer, whether work can be decoupled, who owns the data, what failure behavior is required and what evidence operations needs.',
      },
    },

    {
      id: 'mc10-s08-capstone-question',
      type: 'question',
      title: 'MC10 Architecture Decision Check',
      description:
        'Test whether you can reason about a distributed architecture as one production system.',
      question: {
        id: 'mc10-s08-capstone',
        type: 'single-choice',
        question:
          'Which architecture best represents a well-designed EDDUU distributed platform?',
        options: [
          {
            id: 'balanced-platform',
            text:
              'Clear service boundaries, explicit API contracts, owned data, appropriate messaging, failure isolation and end-to-end observability.',
            correct: true,
          },
          {
            id: 'maximum-services',
            text:
              'The highest possible number of tiny services regardless of business boundaries.',
            correct: false,
          },
          {
            id: 'shared-database',
            text:
              'Many independent services directly modifying the same database tables.',
            correct: false,
          },
          {
            id: 'synchronous-everything',
            text:
              'Every service calls every other service synchronously for every workflow.',
            correct: false,
          },
        ],
        explanation:
          'A strong distributed architecture balances meaningful boundaries, explicit contracts, data ownership, appropriate communication patterns, failure isolation and observability. The goal is not maximum distribution.',
        hints: [
          'Think about ownership, coupling, failure and operational visibility together.',
          'A distributed architecture should solve real business and reliability problems.',
        ],
      },
    },
  ],
}