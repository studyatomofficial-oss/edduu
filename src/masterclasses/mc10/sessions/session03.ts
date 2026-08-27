import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session03: SessionDefinition = {
  id: 'mc10-session-03',
  number: 3,
  stage: 'discover',
  title: 'Communication & APIs - How Distributed Services Talk',
  objective:
    'Understand synchronous and asynchronous service communication, API contracts, timeouts, retries, idempotency, queues and versioning in distributed systems.',
  experiences: [
    {
      id: 'mc10-s03-communication-lesson',
      type: 'lesson',
      title: 'How Services Communicate',
      description:
        'Learn how distributed services exchange information and why communication design directly affects latency, reliability and coupling.',
      lesson: {
        opening:
          'Two services cannot simply call each other like two functions inside the same process. They need a communication mechanism, a contract and a strategy for dealing with delay or failure.',
        sections: [
          {
            heading: '1. Synchronous communication',
            explanation:
              'In synchronous communication, the caller sends a request and waits for a response before continuing.',
            example:
              'The EDDUU Dashboard API calls the Profile Service and waits for the profile response before completing the dashboard request.',
          },
          {
            heading: '2. Request and response',
            explanation:
              'A typical API interaction contains a request, processing by the receiving service and a response. The contract defines what the caller sends and what it can expect back.',
            example:
              'EDDUU can expose a profile endpoint that accepts a student identifier and returns the profile information required by the dashboard.',
          },
          {
            heading: '3. API contracts',
            explanation:
              'An API contract is an agreement between a service and its consumers. It defines inputs, outputs, errors and behavioral expectations.',
            example:
              'If the Profile Service changes a response field that the Dashboard depends on, the change can break the consumer unless compatibility is preserved.',
          },
          {
            heading: '4. Latency accumulates',
            explanation:
              'Every synchronous network call adds potential latency. A request that waits for several downstream services can accumulate those delays.',
            example:
              'If an EDDUU request makes three sequential service calls, each dependency contributes to the overall response time.',
          },
          {
            heading: '5. Timeouts',
            explanation:
              'A timeout places a limit on how long a caller waits for a remote dependency. Without a bounded timeout, stuck dependencies can consume resources for too long.',
            example:
              'The EDDUU Dashboard may stop waiting for a non-critical Profile Service after a defined timeout and use a controlled fallback.',
          },
          {
            heading: '6. Retries',
            explanation:
              'Retries can recover from temporary failures, but uncontrolled retries can amplify an outage by creating even more traffic against an already struggling service.',
            example:
              'A payment-related API should use carefully bounded retries rather than repeatedly sending requests whenever a response is delayed.',
          },
          {
            heading: '7. Idempotency',
            explanation:
              'An idempotent operation can safely be repeated without unintentionally performing the business action multiple times.',
            example:
              'An EDDUU payment request can use an idempotency key so a client retry does not accidentally create two charges.',
          },
          {
            heading: '8. Synchronous versus asynchronous communication',
            explanation:
              'Synchronous communication is useful when the caller needs an immediate result. Asynchronous communication allows work to be accepted and processed later, reducing direct runtime dependency between producer and consumer.',
            example:
              'Generating a student report immediately may use a synchronous API, while sending a completion notification can be handled asynchronously.',
          },
          {
            heading: '9. Queues',
            explanation:
              'A queue temporarily holds messages between producers and consumers. This can absorb traffic bursts and allow consumers to process work at their own pace.',
            example:
              'EDDUU can place notification jobs onto a queue when many students finish an examination simultaneously.',
          },
          {
            heading: '10. Events',
            explanation:
              'An event describes something that has happened. Other services can react to the event without the producer directly calling every consumer.',
            example:
              'EDDUU can publish a CourseCompleted event that allows notification, analytics and recommendation components to react independently.',
          },
          {
            heading: '11. API versioning',
            explanation:
              'APIs evolve over time. Versioning or backward-compatible changes help existing consumers continue operating while new consumers adopt newer capabilities.',
            example:
              'EDDUU can introduce a new version of a profile API while existing dashboard clients continue using the compatible older contract.',
          },
          {
            heading: '12. Communication creates coupling',
            explanation:
              'Every direct dependency creates some runtime coupling. Architects should understand whether the dependency is required immediately or can be decoupled through asynchronous processing.',
            example:
              'A dashboard should not necessarily wait for an analytics pipeline that can process the request after the user receives the main response.',
          },
          {
            heading: '13. Communication failure is normal',
            explanation:
              'Remote calls can fail because of timeouts, network problems, overloaded services or deployment events. Production communication patterns must assume these conditions can occur.',
            example:
              'If the EDDUU Analytics Service is temporarily unavailable, the core learning experience should continue when analytics is not required to complete the user request.',
          },
          {
            heading: '14. Choose communication based on business need',
            explanation:
              'There is no universally best communication method. The correct choice depends on whether the caller needs an immediate answer, how much coupling is acceptable and how much work can be processed later.',
            example:
              'Use synchronous communication for an immediate profile lookup, but asynchronous messaging for a background report-generation workflow.',
          },
        ],
        realWorldConnection:
          'Communication architecture is one of the most important decisions in distributed systems because every API call, message or event affects latency, reliability, coupling and operational behavior.',
        keyIdea:
          'Choose synchronous communication when an immediate response is required and asynchronous communication when work can be decoupled from the caller.',
        recap: [
          'Synchronous calls wait for a response.',
          'API contracts define how services interact.',
          'Network calls introduce latency.',
          'Timeouts prevent indefinite waiting.',
          'Retries must be bounded to avoid traffic amplification.',
          'Idempotency makes safe repetition possible for appropriate operations.',
          'Queues decouple producers from consumers.',
          'Events communicate that something happened.',
          'API versioning helps contracts evolve safely.',
          'Communication strategy should follow the business requirement.',
        ],
      },
    },

    {
      id: 'mc10-s03-communication-animation',
      type: 'animation',
      title: 'Follow EDDUU Through Two Communication Paths',
      description:
        'Compare a synchronous request with an asynchronous event flow and see where coupling and waiting occur.',
      animation: {
        visual: 'architecture',
        opening:
          'The same business action can be handled through a direct request or through an asynchronous message. The choice changes when services wait for one another.',
        parts: [
          {
            id: 'sync-client',
            label: 'STUDENT REQUEST',
            explanation:
              'The student requests an action that requires an immediate result.',
            example:
              'The dashboard requests current profile information.',
          },
          {
            id: 'sync-api',
            label: 'API CALL',
            explanation:
              'The API sends a synchronous request to another service and waits for its response.',
            example:
              'The Dashboard API calls the Profile Service.',
          },
          {
            id: 'sync-service',
            label: 'REMOTE SERVICE',
            explanation:
              'The remote service processes the request and returns a result.',
            example:
              'The Profile Service returns profile data.',
          },
          {
            id: 'timeout',
            label: 'TIMEOUT BOUNDARY',
            explanation:
              'The caller must stop waiting after a bounded period if the remote service does not respond.',
            example:
              'A slow dependency should not hold the dashboard request forever.',
          },
          {
            id: 'event-producer',
            label: 'EVENT PRODUCER',
            explanation:
              'A producer can publish an event when something important has happened.',
            example:
              'EDDUU publishes CourseCompleted after a student completes a course.',
          },
          {
            id: 'queue',
            label: 'MESSAGE QUEUE',
            explanation:
              'The message can wait in a queue until a consumer is ready to process it.',
            example:
              'Notification jobs can accumulate during a traffic spike.',
          },
          {
            id: 'event-consumer',
            label: 'EVENT CONSUMER',
            explanation:
              'A consumer processes the event independently from the original request.',
            example:
              'The Notification Service consumes CourseCompleted and sends the appropriate message.',
          },
        ],
        closing:
          'Synchronous communication is useful for immediate answers. Asynchronous communication is useful when work can continue independently after the original request.',
      },
    },

    {
      id: 'mc10-s03-communication-simulation',
      type: 'simulation',
      title: 'Choose the Communication Pattern',
      description:
        'Match each EDDUU requirement with the communication pattern that best fits the business need.',
      simulation: {
        instruction:
          'Choose whether the situation should use an immediate synchronous call, bounded reliability controls or asynchronous messaging.',
        items: [
          {
            id: 'profile-lookup',
            label:
              'The dashboard needs the current student profile before it can render the page.',
            description:
              'The caller needs an immediate response.',
            correctTargetId: 'sync-api',
          },
          {
            id: 'report-generation',
            label:
              'A large report can take several minutes to generate after the user submits a request.',
            description:
              'The user does not need the report contents in the same request.',
            correctTargetId: 'async-message',
          },
          {
            id: 'slow-service',
            label:
              'A synchronous dependency is not responding within the expected time.',
            description:
              'The caller must avoid waiting indefinitely.',
            correctTargetId: 'timeout',
          },
          {
            id: 'payment-retry',
            label:
              'A payment request may be retried because the client did not receive a response.',
            description:
              'The business operation must not accidentally happen twice.',
            correctTargetId: 'idempotency',
          },
        ],
        targets: [
          {
            id: 'sync-api',
            label: 'SYNCHRONOUS API',
            description:
              'Use when the caller requires an immediate result.',
          },
          {
            id: 'async-message',
            label: 'ASYNC MESSAGE',
            description:
              'Use when work can continue independently after the request.',
          },
          {
            id: 'timeout',
            label: 'BOUNDED TIMEOUT',
            description:
              'Stop waiting after a defined period.',
          },
          {
            id: 'idempotency',
            label: 'IDEMPOTENCY KEY',
            description:
              'Allow safe retries for an operation designed to be idempotent.',
          },
        ],
        successMessage:
          'Excellent. You selected communication patterns based on business behavior rather than technology preference.',
        failureMessage:
          'Ask whether the caller needs an immediate answer, whether work can happen later, and whether repeating the request could repeat the business action.',
      },
    },

    {
      id: 'mc10-s03-communication-question',
      type: 'question',
      title: 'Communication Architecture Check',
      description:
        'Check whether you can choose between synchronous and asynchronous communication.',
      question: {
        id: 'mc10-s03-communication',
        type: 'single-choice',
        question:
          'Which situation is the strongest candidate for asynchronous communication?',
        options: [
          {
            id: 'background-work',
            text:
              'A report can be generated in the background after the user submits the request.',
            correct: true,
          },
          {
            id: 'immediate-profile',
            text:
              'The dashboard must display the current profile before the response can complete.',
            correct: false,
          },
          {
            id: 'required-auth',
            text:
              'The request cannot continue until authentication succeeds.',
            correct: false,
          },
          {
            id: 'immediate-price',
            text:
              'The user needs the current price before confirming a purchase.',
            correct: false,
          },
        ],
        explanation:
          'Asynchronous communication is a strong fit when the work can continue independently after the original request. The user can receive an acknowledgement while background processing continues.',
        hints: [
          'Look for work that does not need to finish before the current request can complete.',
          'Immediate dependencies generally require synchronous communication.',
        ],
      },
    },
  ],
}