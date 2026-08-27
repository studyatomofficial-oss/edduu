import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session04: SessionDefinition = {
  id: 'mc10-session-04',
  number: 4,
  stage: 'discover',
  title: 'Distributed Data & Consistency - Keeping Multiple Services Correct',
  objective:
    'Understand data ownership, replication, consistency models, distributed transactions and practical strategies for maintaining correct behavior across independent services.',
  experiences: [
    {
      id: 'mc10-s04-data-consistency-lesson',
      type: 'lesson',
      title: 'Why Distributed Data Is Hard',
      description:
        'Understand why data becomes more complicated when multiple services, databases and replicas participate in one business workflow.',
      lesson: {
        opening:
          'In a single application, one database transaction can often keep related changes together. In a distributed architecture, different services may own different data stores. Keeping everything perfectly synchronized now becomes a system-design problem.',
        sections: [
          {
            heading: '1. Start with data ownership',
            explanation:
              'A service should have clear responsibility for the data it owns. Other services should normally interact through an explicit contract rather than directly changing another service internal tables.',
            example:
              'The EDDUU Profile Service can own student profile information while the Learning Service owns learning progress.',
          },
          {
            heading: '2. Database-per-service thinking',
            explanation:
              'Independent services often own their own persistence boundary. This reduces direct database coupling and allows each service to evolve its storage independently.',
            example:
              'The Learning Service may use its own database while the Notification Service maintains its own delivery records.',
          },
          {
            heading: '3. Replication',
            explanation:
              'Replication creates additional copies of data or service state. Replicas can improve availability and read capacity, but copies may temporarily contain different versions of the data.',
            example:
              'A read replica may briefly lag behind the primary data store after a student updates information.',
          },
          {
            heading: '4. Strong consistency',
            explanation:
              'Strong consistency aims to make a read observe the latest successful write according to the system guarantees.',
            example:
              'A critical operation may require the next read to immediately reflect a completed state change.',
          },
          {
            heading: '5. Eventual consistency',
            explanation:
              'Eventual consistency allows different copies or services to temporarily disagree while providing an expectation that they converge when updates propagate successfully.',
            example:
              'A student analytics dashboard may update shortly after the learning activity has already been recorded by the Learning Service.',
          },
          {
            heading: '6. Stale reads',
            explanation:
              'A replicated or asynchronously updated system can return older information. The architecture must determine whether that temporary staleness is acceptable for the business operation.',
            example:
              'A recommendation screen can tolerate slightly stale learning statistics, while a payment confirmation generally requires stronger correctness guarantees.',
          },
          {
            heading: '7. Read and write trade-offs',
            explanation:
              'Distributed data design often requires balancing write durability, read freshness, latency, availability and operational complexity.',
            example:
              'EDDUU may accept slightly stale analytics reads to keep dashboard response times low.',
          },
          {
            heading: '8. Distributed transactions',
            explanation:
              'A transaction spanning multiple independent services is harder to coordinate than a transaction inside one database. Long-running cross-service transactions can create availability and operational problems.',
            example:
              'A workflow involving enrollment, payment and notification may cross multiple service boundaries.',
          },
          {
            heading: '9. Business workflows instead of one giant transaction',
            explanation:
              'Distributed systems often model a business workflow as a sequence of local changes with explicit recovery or compensation when a later step fails.',
            example:
              'If enrollment succeeds but a later notification step fails, EDDUU can retry notification rather than rolling back the entire enrollment database change.',
          },
          {
            heading: '10. Idempotency protects repeated operations',
            explanation:
              'When messages or requests may be delivered more than once, operations should be designed so safe repetition does not create duplicate business effects.',
            example:
              'A notification consumer can record a message identifier so processing the same event again does not send the same critical notification repeatedly.',
          },
          {
            heading: '11. Caching changes freshness',
            explanation:
              'Caches improve latency and reduce load but introduce another copy of data that can become stale.',
            example:
              'A cached course summary may remain unchanged for several minutes while the source data has already been updated.',
          },
          {
            heading: '12. Choose consistency by business importance',
            explanation:
              'Not every piece of data needs the same consistency guarantee. Architects should identify where stale information is acceptable and where correctness must be immediate.',
            example:
              'Learning recommendations can tolerate eventual updates, while payment status should use stronger correctness controls.',
          },
          {
            heading: '13. Observability becomes essential',
            explanation:
              'When data propagates across services, engineers need visibility into message flow, timestamps, versions and processing failures to understand why two components may temporarily disagree.',
            example:
              'A correlation identifier can help trace when a learning event was produced, consumed and reflected in analytics.',
          },
          {
            heading: '14. Correctness before technology',
            explanation:
              'The correct data architecture begins with the business invariant. Technology choices should follow what must always remain true rather than starting with a preferred database or consistency model.',
            example:
              'EDDUU should first define what must be true after an enrollment workflow before choosing how each service stores and propagates its state.',
          },
        ],
        realWorldConnection:
          'Distributed applications frequently trade perfect immediacy for scalability, availability and lower coupling. The right choice depends on what the business can safely tolerate.',
        keyIdea:
          'Distributed data design starts with ownership and business correctness, then chooses the appropriate consistency, replication and workflow strategy.',
        recap: [
          'Services should have clear data ownership.',
          'Independent persistence reduces direct database coupling.',
          'Replication can improve availability and read capacity.',
          'Strong consistency prioritizes fresh reads under defined guarantees.',
          'Eventual consistency permits temporary differences while systems converge.',
          'Stale reads are acceptable only when the business allows them.',
          'Cross-service transactions require deliberate workflow design.',
          'Idempotency protects against repeated processing.',
          'Caching introduces another potential source of stale data.',
          'Consistency requirements should follow business importance.',
        ],
      },
    },

    {
      id: 'mc10-s04-data-consistency-animation',
      type: 'animation',
      title: 'Watch EDDUU Data Propagate Across Services',
      description:
        'Follow one student update as it moves from the owning service to another service and observe the difference between immediate and eventual visibility.',
      animation: {
        visual: 'architecture',
        opening:
          'One business action can create data changes in one service while other services learn about the change later.',
        parts: [
          {
            id: 'data-owner',
            label: 'DATA OWNER',
            explanation:
              'The service responsible for a piece of data records the authoritative business change.',
            example:
              'The Learning Service records that a student completed a course.',
          },
          {
            id: 'event',
            label: 'DOMAIN EVENT',
            explanation:
              'The owning service publishes information that a meaningful business event occurred.',
            example:
              'EDDUU publishes CourseCompleted after the completion is recorded.',
          },
          {
            id: 'analytics-consumer',
            label: 'ANALYTICS CONSUMER',
            explanation:
              'Another service consumes the event and updates its own representation of the information.',
            example:
              'The Analytics Service receives CourseCompleted and updates learning statistics.',
          },
          {
            id: 'temporary-lag',
            label: 'PROPAGATION DELAY',
            explanation:
              'The consumer may process the event later, creating a temporary difference between the source and derived view.',
            example:
              'The student analytics dashboard may briefly show the previous completion count.',
          },
          {
            id: 'converged-state',
            label: 'CONVERGED STATE',
            explanation:
              'After successful event processing, the downstream representation catches up with the authoritative change.',
            example:
              'The Analytics Service now reflects the completed course.',
          },
          {
            id: 'strong-read',
            label: 'STRONG-CONSISTENCY NEED',
            explanation:
              'Some business operations cannot tolerate observing an older state after a critical write.',
            example:
              'A payment confirmation requires stronger correctness guarantees than a recommendation feed.',
          },
        ],
        closing:
          'Distributed data is not simply about choosing a database. It is about deciding who owns the truth, how changes propagate and what temporary inconsistency the business can tolerate.',
      },
    },

    {
      id: 'mc10-s04-data-consistency-simulation',
      type: 'simulation',
      title: 'Choose the Right Consistency Strategy',
      description:
        'Match each EDDUU data requirement with the most appropriate consistency strategy.',
      simulation: {
        instruction:
          'Choose the strategy that best matches the business importance and freshness requirement.',
        items: [
          {
            id: 'payment-status',
            label:
              'A student has completed a payment and the confirmation must reflect the correct transaction state.',
            description:
              'Incorrect or stale information could create a serious business problem.',
            correctTargetId: 'strong-consistency',
          },
          {
            id: 'recommendations',
            label:
              'The recommendation engine can use learning information that is a few minutes old.',
            description:
              'Perfect freshness is not required for the user experience.',
            correctTargetId: 'eventual-consistency',
          },
          {
            id: 'duplicate-event',
            label:
              'A consumer may receive the same CourseCompleted event twice.',
            description:
              'Repeated processing must not create duplicate business effects.',
            correctTargetId: 'idempotent-processing',
          },
          {
            id: 'analytics-delay',
            label:
              'Analytics updates arrive shortly after the source learning event.',
            description:
              'The system can tolerate a temporary propagation delay.',
            correctTargetId: 'eventual-consistency',
          },
        ],
        targets: [
          {
            id: 'strong-consistency',
            label: 'STRONG CONSISTENCY',
            description:
              'Use stronger freshness guarantees where stale information can violate an important business requirement.',
          },
          {
            id: 'eventual-consistency',
            label: 'EVENTUAL CONSISTENCY',
            description:
              'Allow temporary differences when the business can safely tolerate delayed propagation.',
          },
          {
            id: 'idempotent-processing',
            label: 'IDEMPOTENT PROCESSING',
            description:
              'Make repeated delivery safe for the business operation.',
          },
        ],
        successMessage:
          'Excellent. Consistency should be selected based on business correctness and freshness requirements.',
        failureMessage:
          'Ask how harmful stale data would be and whether the operation can safely tolerate delayed propagation or repeated delivery.',
      },
    },

    {
      id: 'mc10-s04-data-consistency-question',
      type: 'question',
      title: 'Distributed Data Check',
      description:
        'Check whether you can choose an appropriate consistency model for a business requirement.',
      question: {
        id: 'mc10-s04-data-consistency',
        type: 'single-choice',
        question:
          'Which situation is most appropriate for eventual consistency?',
        options: [
          {
            id: 'analytics',
            text:
              'An analytics dashboard can tolerate a short delay before reflecting new learning activity.',
            correct: true,
          },
          {
            id: 'payment',
            text:
              'A payment confirmation must immediately reflect the authoritative transaction state.',
            correct: false,
          },
          {
            id: 'authorization',
            text:
              'A security decision depends on the latest authorization state.',
            correct: false,
          },
          {
            id: 'critical-balance',
            text:
              'A financial balance must not show an unsafe stale value.',
            correct: false,
          },
        ],
        explanation:
          'Eventual consistency is appropriate when the business can tolerate temporary differences while data propagates. Analytics and recommendation scenarios are common examples.',
        hints: [
          'Look for a case where temporary staleness is acceptable.',
          'Critical financial or security decisions generally require stronger guarantees.',
        ],
      },
    },
  ],
}