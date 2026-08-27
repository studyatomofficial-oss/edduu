import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session02: SessionDefinition = {
  id: 'mc10-session-02',
  number: 2,
  stage: 'discover',
  title: 'Service Boundaries & Microservices - Splitting the System Intentionally',
  objective:
    'Understand how to identify service boundaries, compare monoliths with microservices, separate responsibilities, and avoid creating unnecessary distributed-system complexity.',
  experiences: [
    {
      id: 'mc10-s02-service-boundaries-lesson',
      type: 'lesson',
      title: 'How to Find a Good Service Boundary',
      description:
        'Learn why microservices are primarily about ownership and boundaries rather than simply creating many small applications.',
      lesson: {
        opening:
          'Imagine EDDUU has one large backend containing authentication, student profiles, courses, payments, notifications and analytics. The application works, but every change touches the same deployment. The question is not simply whether to split it. The real question is where a meaningful boundary exists.',
        sections: [
          {
            heading: '1. Start with the business capability',
            explanation:
              'A useful service usually represents a meaningful business or technical capability rather than an arbitrary collection of functions.',
            example:
              'EDDUU may have a Student Profile capability responsible for profile information while a separate Learning Progress capability owns learning activity.',
          },
          {
            heading: '2. A monolith is not automatically bad',
            explanation:
              'A monolithic application can be easier to develop, test, deploy and debug when the system is small or the boundaries are not yet understood.',
            example:
              'An early EDDUU platform may keep student, course and reporting logic in one application because the team is still learning how those domains interact.',
          },
          {
            heading: '3. Modular monolith before microservices',
            explanation:
              'A modular monolith can keep one deployable application while enforcing clear internal boundaries. This can provide many organizational benefits without immediately introducing network communication.',
            example:
              'EDDUU can separate Profile, Learning and Reporting modules inside one backend before deciding whether independent deployment is actually necessary.',
          },
          {
            heading: '4. Microservices introduce deployment boundaries',
            explanation:
              'A microservice architecture turns selected capabilities into independently deployable services. That independence can help teams scale and release components separately, but it also creates network and operational complexity.',
            example:
              'EDDUU could deploy its Notification Service independently when notification traffic and release requirements differ from the core learning API.',
          },
          {
            heading: '5. Avoid splitting by technical layer',
            explanation:
              'Creating one service for controllers, another for business logic and another for database access often creates distributed technical layers rather than meaningful business boundaries.',
            example:
              'Splitting EDDUU into separate API, business-logic and database services merely because those layers exist can create unnecessary network calls without creating useful ownership.',
          },
          {
            heading: '6. Look for data ownership',
            explanation:
              'A strong boundary often has clear ownership of the data required by that capability. Other services should interact through an explicit contract rather than directly manipulating another service internal data.',
            example:
              'The Profile Service can own profile data while the Learning Service requests the information it needs through an API.',
          },
          {
            heading: '7. Independent deployment matters',
            explanation:
              'One benefit of microservices is that a service can be changed and deployed without rebuilding every other service, provided its contract remains compatible.',
            example:
              'EDDUU can release an improved Notification Service without forcing an unrelated Course Service release.',
          },
          {
            heading: '8. Independent scaling matters',
            explanation:
              'Different capabilities can have very different workloads. Independent services can allow capacity to be allocated where demand actually exists.',
            example:
              'During exam results, EDDUU Analytics may require significantly more processing capacity than the Profile Service.',
          },
          {
            heading: '9. Service boundaries create contracts',
            explanation:
              'Once functionality moves across a network boundary, the interface becomes a contract. The contract should define what callers can depend on while allowing the service internals to evolve.',
            example:
              'The Profile Service may expose a stable endpoint for retrieving profile information without exposing its database schema.',
          },
          {
            heading: '10. Distributed calls create coupling too',
            explanation:
              'Microservices reduce some forms of code and deployment coupling but can introduce runtime coupling. If Service A cannot complete without Service B, A may become unavailable when B fails.',
            example:
              'If the EDDUU Dashboard waits synchronously for five services, one slow dependency can increase dashboard latency.',
          },
          {
            heading: '11. Avoid the distributed monolith',
            explanation:
              'A distributed monolith is a collection of separately deployed services that still have tight runtime dependencies and must always be released together. It combines the complexity of microservices with many disadvantages of a monolith.',
            example:
              'If every EDDUU service must be deployed simultaneously because each depends on an exact version of every other service, the architecture has not achieved meaningful independence.',
          },
          {
            heading: '12. Team ownership is an architectural signal',
            explanation:
              'Service boundaries often work best when teams can own a capability end to end, including its code, data, reliability and operational responsibilities.',
            example:
              'An EDDUU Learning Platform team can own the Learning Service from API design through production operations.',
          },
          {
            heading: '13. Start with the smallest useful boundary',
            explanation:
              'The goal is not to maximize the number of services. The goal is to create boundaries that provide measurable architectural or organizational value.',
            example:
              'EDDUU may initially extract only Notifications because its workload, ownership and release cadence clearly differ from the core application.',
          },
          {
            heading: '14. Know when not to use microservices',
            explanation:
              'If the system is small, the team is small and independent scaling or deployment is not required, microservices can add more complexity than value.',
            example:
              'A small internal EDDUU administration tool may be better served by a modular monolith.',
          },
        ],
        realWorldConnection:
          'Successful microservice programs are usually driven by clear boundaries, ownership and operational needs. Splitting an application without understanding those boundaries can create a distributed monolith that is harder to operate than the original system.',
        keyIdea:
          'A microservice boundary should create meaningful ownership, data and deployment independence while accepting that network communication introduces new failure and operational complexity.',
        recap: [
          'Monoliths are not automatically bad.',
          'A modular monolith can establish boundaries before distribution.',
          'Good service boundaries usually represent meaningful capabilities.',
          'Data ownership is an important boundary signal.',
          'Microservices provide independent deployment and scaling when designed correctly.',
          'Network calls create runtime coupling and failure modes.',
          'A distributed monolith is not a successful microservice architecture.',
          'The number of services should be driven by real architectural value.',
        ],
      },
    },

    {
      id: 'mc10-s02-service-boundaries-animation',
      type: 'animation',
      title: 'Watch EDDUU Evolve from Monolith to Services',
      description:
        'Compare a single EDDUU application with a deliberately separated service architecture and see where network boundaries appear.',
      animation: {
        visual: 'architecture',
        opening:
          'Start with one application. Then extract only the capabilities where an independent boundary creates real value.',
        parts: [
          {
            id: 'monolith',
            label: 'EDDUU MONOLITH',
            explanation:
              'One deployable application contains multiple business capabilities.',
            example:
              'Profiles, Learning, Notifications and Reporting initially run inside one backend.',
          },
          {
            id: 'boundary-profile',
            label: 'PROFILE BOUNDARY',
            explanation:
              'Profile responsibilities become a clearly owned capability.',
            example:
              'Profile data and profile operations are owned by the Profile capability.',
          },
          {
            id: 'boundary-learning',
            label: 'LEARNING BOUNDARY',
            explanation:
              'Learning responsibilities remain grouped around one meaningful capability.',
            example:
              'Course progress and learning activity belong to the Learning capability.',
          },
          {
            id: 'boundary-notification',
            label: 'NOTIFICATION BOUNDARY',
            explanation:
              'Notification processing is separated when its workload and release needs justify it.',
            example:
              'Notification delivery can scale independently during high-volume events.',
          },
          {
            id: 'service-contract',
            label: 'SERVICE CONTRACTS',
            explanation:
              'Services communicate through explicit interfaces rather than directly accessing each other internal implementation.',
            example:
              'The Learning Service requests profile information through the Profile Service contract.',
          },
          {
            id: 'runtime-coupling',
            label: 'RUNTIME COUPLING',
            explanation:
              'Every new network dependency creates another possible latency and failure boundary.',
            example:
              'A dashboard request can become slower if it waits synchronously on multiple services.',
          },
        ],
        closing:
          'Good microservice architecture is not about creating the most services. It is about creating the right boundaries.',
      },
    },

    {
      id: 'mc10-s02-service-boundaries-simulation',
      type: 'simulation',
      title: 'Choose the Better Service Boundary',
      description:
        'Practice deciding whether a proposed split creates a meaningful service boundary.',
      simulation: {
        instruction:
          'Match each EDDUU architecture situation with the most appropriate boundary decision.',
        items: [
          {
            id: 'notifications-capability',
            label:
              'Notification traffic is growing rapidly and requires an independent release cadence.',
            description:
              'The capability has a distinct workload and operational requirement.',
            correctTargetId: 'extract-service',
          },
          {
            id: 'tiny-team',
            label:
              'A three-person team owns a small internal administration application.',
            description:
              'There is little evidence that independent services would provide value.',
            correctTargetId: 'keep-modular',
          },
          {
            id: 'shared-database-split',
            label:
              'A team wants to create three services but all three directly modify the same tables.',
            description:
              'The proposed split has weak data ownership boundaries.',
            correctTargetId: 'review-boundary',
          },
          {
            id: 'layer-splitting',
            label:
              'A team proposes separate services for controllers, business logic and repositories.',
            description:
              'The proposed boundaries are technical layers rather than meaningful capabilities.',
            correctTargetId: 'avoid-layer-split',
          },
        ],
        targets: [
          {
            id: 'extract-service',
            label: 'EXTRACT A SERVICE',
            description:
              'Create an independent service when the capability has a meaningful ownership, scaling or deployment reason.',
          },
          {
            id: 'keep-modular',
            label: 'KEEP A MODULAR MONOLITH',
            description:
              'Maintain clear internal boundaries without adding unnecessary network boundaries.',
          },
          {
            id: 'review-boundary',
            label: 'REVIEW DATA OWNERSHIP',
            description:
              'Clarify which service owns the data before creating independent services.',
          },
          {
            id: 'avoid-layer-split',
            label: 'AVOID TECHNICAL-LAYER SPLITTING',
            description:
              'Prefer business or capability boundaries over distributed technical layers.',
          },
        ],
        successMessage:
          'Excellent. The strongest boundaries are driven by capability, ownership and operational value.',
        failureMessage:
          'Ask three questions: What capability does the boundary represent? Who owns it? What independent value does the split create?',
      },
    },

    {
      id: 'mc10-s02-service-boundaries-question',
      type: 'question',
      title: 'Microservices Architecture Check',
      description:
        'Check whether you can distinguish meaningful service boundaries from arbitrary application splits.',
      question: {
        id: 'mc10-s02-service-boundaries',
        type: 'single-choice',
        question:
          'Which is the strongest reason to extract a capability into an independent microservice?',
        options: [
          {
            id: 'meaningful-boundary',
            text:
              'The capability has clear ownership and benefits from independent deployment or scaling.',
            correct: true,
          },
          {
            id: 'more-services',
            text:
              'The architecture should have as many services as possible.',
            correct: false,
          },
          {
            id: 'technical-layers',
            text:
              'Every technical layer should become its own service.',
            correct: false,
          },
          {
            id: 'fashion',
            text:
              'Microservices are always better than a monolith.',
            correct: false,
          },
        ],
        explanation:
          'A microservice should exist because a meaningful boundary provides architectural or organizational value. Splitting systems without that reason can create unnecessary distributed-system complexity.',
        hints: [
          'Think about ownership and independent deployment.',
          'The goal is not to maximize the service count.',
        ],
      },
    },
  ],
}