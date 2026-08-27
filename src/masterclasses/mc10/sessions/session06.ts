import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session06: SessionDefinition = {
  id: 'mc10-session-06',
  number: 6,
  stage: 'discover',
  title: 'Messaging & Event-Driven Architecture - Decoupling Distributed Work',
  objective:
    'Understand producers, consumers, brokers, queues, events, delivery semantics, ordering, retries, dead-letter queues and event-driven workflows in distributed systems.',
  experiences: [
    {
      id: 'mc10-s06-messaging-lesson',
      type: 'lesson',
      title: 'How Messaging Changes Distributed Architecture',
      description:
        'Learn how queues and events allow services to communicate without requiring every producer and consumer to be directly connected at request time.',
      lesson: {
        opening:
          'Imagine an EDDUU service that receives thousands of student activity events. Instead of calling every downstream system directly, it can publish messages and allow independent consumers to process that work at their own pace.',
        sections: [
          {
            heading: '1. Producer and consumer',
            explanation:
              'A producer creates a message or event. A consumer receives and processes that message. The producer does not necessarily need to know how the consumer performs its work.',
            example:
              'The EDDUU Learning Service produces a CourseCompleted event while Analytics and Notifications consume that event for their own purposes.',
          },
          {
            heading: '2. Message broker',
            explanation:
              'A broker or messaging platform accepts messages from producers and delivers them according to the configured messaging model.',
            example:
              'An EDDUU messaging layer can receive learning events and make them available to the appropriate consumers.',
          },
          {
            heading: '3. Queue',
            explanation:
              'A queue stores messages until a consumer processes them. This creates temporal decoupling between producers and consumers.',
            example:
              'EDDUU can place report-generation jobs into a queue so workers can process them independently from the web request.',
          },
          {
            heading: '4. Event',
            explanation:
              'An event describes something that already happened. Consumers can react to the event without the producer directly controlling every reaction.',
            example:
              'CourseCompleted can trigger analytics processing, notifications and recommendation updates.',
          },
          {
            heading: '5. Command versus event',
            explanation:
              'A command asks a specific component to perform an action. An event communicates that an action or business fact has already occurred.',
            example:
              'GenerateStudentReport is a command, while CourseCompleted is an event describing a completed business activity.',
          },
          {
            heading: '6. Consumer groups',
            explanation:
              'A consumer group allows multiple workers to share processing responsibility for a stream or queue so workload can be distributed.',
            example:
              'Multiple EDDUU analytics workers can process learning events as a shared consumer group.',
          },
          {
            heading: '7. Delivery semantics',
            explanation:
              'Messaging systems can provide different delivery guarantees. Common models include at-most-once, at-least-once and effectively-once processing through application design.',
            example:
              'If EDDUU uses at-least-once delivery, consumers must be prepared to receive a message more than once.',
          },
          {
            heading: '8. Duplicate messages',
            explanation:
              'Duplicate delivery can happen because a consumer may process a message but fail before acknowledging it. The broker may then deliver the message again.',
            example:
              'An EDDUU Notification consumer can store a processed event identifier before completing duplicate-sensitive work.',
          },
          {
            heading: '9. Acknowledgement',
            explanation:
              'An acknowledgement tells the messaging system that the consumer has successfully completed the required processing according to the chosen delivery model.',
            example:
              'An analytics worker acknowledges a learning event after its local processing succeeds.',
          },
          {
            heading: '10. Consumer retry',
            explanation:
              'A consumer may retry a message when processing fails temporarily. Retry policy should distinguish transient failures from permanent data or validation failures.',
            example:
              'A temporary analytics database outage may justify retrying an event, while malformed event data may require investigation instead.',
          },
          {
            heading: '11. Dead-letter queue',
            explanation:
              'A dead-letter queue stores messages that cannot be successfully processed after the configured retry policy. It prevents one permanently failing message from blocking normal processing.',
            example:
              'An invalid EDDUU event can move to a dead-letter queue after repeated processing attempts.',
          },
          {
            heading: '12. Ordering',
            explanation:
              'Some workflows require messages to be processed in a particular order. Distributed systems must explicitly determine where ordering matters and how it will be maintained.',
            example:
              'Student enrollment should not be processed as completed before the corresponding enrollment creation event when ordering is a business requirement.',
          },
          {
            heading: '13. Backpressure',
            explanation:
              'Backpressure occurs when producers create work faster than consumers can process it. Queues provide a place to absorb some of that difference, but sustained overload still requires capacity management.',
            example:
              'During exam results, EDDUU may produce analytics events faster than workers can process them.',
          },
          {
            heading: '14. Event-driven workflow',
            explanation:
              'A business workflow can be coordinated through a sequence of events where each service performs its local responsibility and publishes the next meaningful state change.',
            example:
              'Course completion can lead to analytics updates, notification processing and recommendation recalculation without one service directly calling all three components.',
          },
          {
            heading: '15. Event schema evolution',
            explanation:
              'Messages are contracts too. Event producers and consumers need compatible schema evolution so older consumers do not unexpectedly fail when event structures change.',
            example:
              'EDDUU can add an optional field to CourseCompleted while preserving the fields required by existing consumers.',
          },
          {
            heading: '16. Observability for messaging',
            explanation:
              'Distributed messaging requires visibility into message identifiers, processing status, retry counts, queue depth and consumer latency.',
            example:
              'EDDUU operations can detect a growing analytics queue before users experience delayed reporting.',
          },
        ],
        realWorldConnection:
          'Event-driven systems are powerful because they reduce direct runtime coupling, but they require careful handling of duplicates, ordering, retries, schema evolution and operational visibility.',
        keyIdea:
          'Messaging decouples producers and consumers in time, while reliable event-driven architecture requires deliberate handling of delivery, failure and message contracts.',
        recap: [
          'Producers create messages or events.',
          'Consumers process messages independently.',
          'Queues provide temporal decoupling.',
          'Events describe facts that already happened.',
          'Commands request specific actions.',
          'At-least-once delivery requires duplicate-safe consumers.',
          'Retries should distinguish temporary and permanent failures.',
          'Dead-letter queues isolate repeatedly failing messages.',
          'Ordering must be treated as an explicit requirement.',
          'Message schemas need controlled evolution.',
        ],
      },
    },

    {
      id: 'mc10-s06-messaging-animation',
      type: 'animation',
      title: 'Watch an EDDUU Event Move Through the Platform',
      description:
        'Follow one CourseCompleted event from producer through the messaging layer to multiple independent consumers.',
      animation: {
        visual: 'architecture',
        opening:
          'One business event can create multiple downstream reactions without the producer directly coordinating every consumer.',
        parts: [
          {
            id: 'event-producer',
            label: 'EVENT PRODUCER',
            explanation:
              'The owning service records the business change and publishes an event.',
            example:
              'The Learning Service publishes CourseCompleted.',
          },
          {
            id: 'broker',
            label: 'MESSAGE BROKER',
            explanation:
              'The messaging layer accepts the event and makes it available for processing.',
            example:
              'The EDDUU messaging platform stores and routes the event.',
          },
          {
            id: 'analytics-consumer',
            label: 'ANALYTICS CONSUMER',
            explanation:
              'One consumer processes the event for analytics.',
            example:
              'Analytics updates course completion statistics.',
          },
          {
            id: 'notification-consumer',
            label: 'NOTIFICATION CONSUMER',
            explanation:
              'Another consumer reacts independently to the same business event.',
            example:
              'Notifications can send a completion message to the student.',
          },
          {
            id: 'retry',
            label: 'CONSUMER RETRY',
            explanation:
              'A temporary processing failure can cause the consumer to retry according to its policy.',
            example:
              'Analytics retries while its database is temporarily unavailable.',
          },
          {
            id: 'dead-letter',
            label: 'DEAD-LETTER QUEUE',
            explanation:
              'A message that repeatedly fails processing can be isolated for investigation.',
            example:
              'An invalid event moves to the dead-letter queue instead of blocking healthy messages.',
          },
          {
            id: 'observability',
            label: 'MESSAGE OBSERVABILITY',
            explanation:
              'Operators track queue depth, processing latency, retries and failures.',
            example:
              'EDDUU operations detects that analytics processing is falling behind.',
          },
        ],
        closing:
          'Messaging separates producers from consumers, but reliability still depends on deliberate delivery, retry, ordering and observability decisions.',
      },
    },

    {
      id: 'mc10-s06-messaging-simulation',
      type: 'simulation',
      title: 'Design the EDDUU Message Flow',
      description:
        'Match each messaging situation with the appropriate architecture pattern.',
      simulation: {
        instruction:
          'Choose the messaging mechanism or reliability control that best fits each situation.',
        items: [
          {
            id: 'background-job',
            label:
              'A report-generation task can run after the user receives an acknowledgement.',
            description:
              'The work does not need to finish during the HTTP request.',
            correctTargetId: 'queue',
          },
          {
            id: 'duplicate-delivery',
            label:
              'A consumer may receive the same event more than once.',
            description:
              'Repeated processing must not create an unintended duplicate effect.',
            correctTargetId: 'idempotent-consumer',
          },
          {
            id: 'permanent-failure',
            label:
              'A malformed message continues to fail after the allowed retries.',
            description:
              'The message should be isolated without blocking healthy processing.',
            correctTargetId: 'dead-letter',
          },
          {
            id: 'multiple-reactions',
            label:
              'Analytics and Notifications both need to react to the same CourseCompleted business fact.',
            description:
              'The producer should not directly coordinate every downstream reaction.',
            correctTargetId: 'event',
          },
          {
            id: 'traffic-spike',
            label:
              'Producers temporarily generate work faster than consumers can process it.',
            description:
              'The architecture needs to absorb a temporary difference in processing speed.',
            correctTargetId: 'backpressure',
          },
        ],
        targets: [
          {
            id: 'queue',
            label: 'QUEUE',
            description:
              'Buffer work so producers and consumers do not need to operate at exactly the same speed.',
          },
          {
            id: 'idempotent-consumer',
            label: 'IDEMPOTENT CONSUMER',
            description:
              'Make duplicate delivery safe for supported business operations.',
          },
          {
            id: 'dead-letter',
            label: 'DEAD-LETTER QUEUE',
            description:
              'Isolate messages that repeatedly fail processing.',
          },
          {
            id: 'event',
            label: 'EVENT',
            description:
              'Publish a business fact that multiple independent consumers can react to.',
          },
          {
            id: 'backpressure',
            label: 'BACKPRESSURE CONTROL',
            description:
              'Manage situations where producers temporarily outpace consumers.',
          },
        ],
        successMessage:
          'Excellent. You selected messaging patterns according to the workflow and failure behavior.',
        failureMessage:
          'Ask whether the problem is buffering work, duplicate delivery, permanent failure, multiple reactions or producer overload.',
      },
    },

    {
      id: 'mc10-s06-messaging-question',
      type: 'question',
      title: 'Event-Driven Architecture Check',
      description:
        'Check whether you understand why consumers must be designed for duplicate delivery.',
      question: {
        id: 'mc10-s06-messaging',
        type: 'single-choice',
        question:
          'Why should a consumer be designed to handle duplicate messages safely in an at-least-once delivery system?',
        options: [
          {
            id: 'safe-repeat',
            text:
              'A message may be delivered again after processing succeeds but acknowledgement is not completed.',
            correct: true,
          },
          {
            id: 'faster-network',
            text:
              'Duplicate messages always make the network faster.',
            correct: false,
          },
          {
            id: 'remove-broker',
            text:
              'Duplicate-safe processing removes the need for a messaging broker.',
            correct: false,
          },
          {
            id: 'guaranteed-order',
            text:
              'Duplicate delivery guarantees that all messages arrive in perfect order.',
            correct: false,
          },
        ],
        explanation:
          'At-least-once delivery favors reliable delivery over a guarantee of single delivery. A consumer may see the same message again, so duplicate-sensitive business operations need idempotent processing.',
        hints: [
          'Think about what happens if processing succeeds but acknowledgement does not.',
          'Reliable delivery does not automatically mean exactly one delivery.',
        ],
      },
    },
  ],
}