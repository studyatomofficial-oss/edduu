import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session05: SessionDefinition = {
  id: 'mc07-session-05',
  number: 5,
  stage: 'practice',
  title: 'Scalability, Performance & Reliability',
  objective:
    'Learn how architects reason about workload, capacity, bottlenecks, scaling, latency, caching, asynchronous processing and failure recovery when a system must operate reliably as demand grows.',

  experiences: [
    {
      id: 'mc07-s05-scalability-lesson',
      type: 'lesson',
      title: 'Designing for Growth and Failure',
      description:
        'Understand how workload, bottlenecks, scaling strategies and failure behaviour influence real architecture decisions.',

      lesson: {
        opening:
          'A system that works for one hundred users may behave very differently when ten thousand users arrive at the same time. Architecture is the discipline of understanding that growth before the system is placed under pressure.',

        sections: [
          {
            heading: '1. Start with workload, not infrastructure',
            explanation:
              'Before choosing servers or databases, understand the workload the system must handle. Request volume, concurrent users, read and write patterns, payload sizes and traffic spikes all influence architecture.',
            example:
              'An education platform may have normal traffic during the day but experience a large spike when thousands of students begin an examination simultaneously.',
          },
          {
            heading: '2. Performance and capacity are different',
            explanation:
              'Performance describes how quickly the system responds under a particular workload. Capacity describes how much workload the system can support before response time, errors or resource usage become unacceptable.',
            example:
              'An API may respond in 100 milliseconds under normal traffic but become slow when request volume increases ten times.',
          },
          {
            heading: '3. Find the bottleneck',
            explanation:
              'A bottleneck is the component limiting the overall system. Scaling another component does not necessarily improve the system if the actual bottleneck remains unchanged.',
            example:
              'Adding more API servers will not solve a database bottleneck if every API instance still waits for the same constrained database.',
          },
          {
            heading: '4. Vertical scaling',
            explanation:
              'Vertical scaling means giving an existing machine more CPU, memory, storage or other resources. It can be simple, but the machine still represents a physical or logical capacity boundary.',
            example:
              'Increasing the memory and CPU of a database server may temporarily provide additional capacity without changing the application architecture.',
          },
          {
            heading: '5. Horizontal scaling',
            explanation:
              'Horizontal scaling means adding more instances and distributing workload between them. It is especially useful when application instances can operate independently.',
            example:
              'A stateless API can run across several instances behind a load balancer so requests are distributed instead of relying on one server.',
          },
          {
            heading: '6. Caching reduces repeated work',
            explanation:
              'Caching stores frequently requested information in a faster-access layer so the system does not repeatedly perform the same expensive operation. The architecture must still consider freshness and invalidation.',
            example:
              'Frequently viewed course metadata can be cached instead of querying the primary database for every student request.',
          },
          {
            heading: '7. Queues absorb bursts',
            explanation:
              'A queue allows one component to place work into a durable waiting area while another component processes it later. This separates producers from consumers and can prevent temporary traffic spikes from overwhelming downstream services.',
            example:
              'When a student completes an assessment, notification work can be placed on a queue instead of delaying the response while email or messaging services are contacted.',
          },
          {
            heading: '8. Timeouts prevent indefinite waiting',
            explanation:
              'A dependency may become slow or stop responding. A timeout gives the calling service a defined limit instead of allowing one dependency to hold resources indefinitely.',
            example:
              'An AI assistance request might stop waiting after a defined period and return a controlled fallback response.',
          },
          {
            heading: '9. Retries need control',
            explanation:
              'Retries can recover from temporary failures, but uncontrolled retries can multiply traffic and make an incident worse. Retry policies should consider which failures are temporary and use appropriate backoff.',
            example:
              'A service may retry a temporary network failure after increasing delays rather than immediately sending the same request repeatedly.',
          },
          {
            heading: '10. Rate limiting protects capacity',
            explanation:
              'Rate limiting controls how frequently a client can make requests. It protects shared resources from accidental overload, abusive behaviour and sudden traffic concentration.',
            example:
              'An AI doubt endpoint may limit requests from one student so a single client cannot consume the majority of available model capacity.',
          },
          {
            heading: '11. Reliability means handling failure',
            explanation:
              'Reliable architecture assumes that components, networks and external services can fail. The design should define what happens when dependencies become unavailable instead of assuming every call succeeds.',
            example:
              'If the notification service fails, assessment submission should still succeed because notifications are not the critical transaction.',
          },
          {
            heading: '12. Graceful degradation protects critical journeys',
            explanation:
              'A system does not need every feature to remain fully functional during every incident. Critical user journeys should continue wherever possible while optional capabilities degrade temporarily.',
            example:
              'Students should still be able to access course content and submit assessments even if AI-powered explanations are temporarily unavailable.',
          },
        ],

        realWorldConnection:
          'In a production architecture review, leaders ask questions such as what happens when traffic increases, which component fails first, how the team detects the problem and which user journeys must continue during an incident.',

        keyIdea:
          'Scalability and reliability come from understanding workload, identifying bottlenecks, distributing work appropriately and designing predictable behaviour when dependencies fail.',

        recap: [
          'Understand workload before selecting infrastructure.',
          'Separate performance from capacity.',
          'Find the actual bottleneck before scaling.',
          'Use vertical or horizontal scaling based on the problem.',
          'Use caching to reduce repeated expensive reads.',
          'Use queues when work can happen asynchronously.',
          'Use timeouts and controlled retries for unreliable dependencies.',
          'Use rate limiting to protect shared capacity.',
          'Design critical journeys to survive non-critical dependency failures.',
        ],
      },
    },

    {
      id: 'mc07-s05-scalability-animation',
      type: 'animation',
      title: 'How a System Handles Growing Traffic',
      description:
        'Visualize how traffic moves through distributed application instances, caches and asynchronous processing.',

      animation: {
        visual: 'distributed',
        opening:
          'Think about a busy restaurant. When one counter becomes overloaded, the restaurant can open more counters, reuse prepared information and move non-urgent work into a separate process.',

        parts: [
          {
            id: 'traffic',
            label: 'Traffic',
            explanation:
              'Users generate requests that enter the system. Traffic can be steady or arrive in sudden bursts.',
            example:
              'Thousands of students begin an exam at nearly the same time.',
          },
          {
            id: 'distribution',
            label: 'Load Distribution',
            explanation:
              'A load-balancing layer distributes requests across available application instances.',
            example:
              'Multiple API instances share student requests instead of one instance handling everything.',
          },
          {
            id: 'cache',
            label: 'Cache',
            explanation:
              'Frequently requested information can be served from a faster layer without repeatedly querying the primary data store.',
            example:
              'Popular course information is served from cache.',
          },
          {
            id: 'queue',
            label: 'Queue',
            explanation:
              'Work that does not need to finish during the current request can be processed asynchronously.',
            example:
              'Notifications are queued after an assessment is submitted.',
          },
          {
            id: 'failure',
            label: 'Failure Handling',
            explanation:
              'Timeouts, controlled retries and fallbacks prevent slow or unavailable dependencies from blocking every user.',
            example:
              'AI assistance can temporarily degrade while core assessment functionality remains available.',
          },
        ],

        closing:
          'Scalability is not simply adding servers. It is understanding workload, distributing pressure and ensuring failures do not unnecessarily destroy critical user journeys.',
      },
    },

    {
      id: 'mc07-s05-scalability-simulation',
      type: 'simulation',
      title: 'Match the Architecture Response',
      description:
        'Connect common scalability problems with the architecture mechanism that addresses them.',

      simulation: {
        instruction:
          'Match each system problem with the most appropriate architecture response.',

        items: [
          {
            id: 'api-capacity',
            label: 'One API instance cannot handle peak traffic.',
            description:
              'The application is stateless and can run multiple instances.',
            correctTargetId: 'horizontal-target',
          },
          {
            id: 'repeated-read',
            label: 'The same course information is requested repeatedly.',
            description:
              'The information can tolerate controlled freshness.',
            correctTargetId: 'cache-target',
          },
          {
            id: 'background-work',
            label: 'Notification processing should not block the main request.',
            description:
              'The work can happen after the primary operation completes.',
            correctTargetId: 'queue-target',
          },
          {
            id: 'client-overload',
            label: 'One client is sending excessive requests.',
            description:
              'The service needs protection from uncontrolled request volume.',
            correctTargetId: 'rate-target',
          },
        ],

        targets: [
          {
            id: 'horizontal-target',
            label: 'HORIZONTAL SCALING',
            description:
              'Run multiple application instances and distribute requests across them.',
          },
          {
            id: 'cache-target',
            label: 'CACHING',
            description:
              'Reuse frequently requested data instead of repeatedly performing the same expensive operation.',
          },
          {
            id: 'queue-target',
            label: 'ASYNC QUEUE',
            description:
              'Move non-immediate work into background processing.',
          },
          {
            id: 'rate-target',
            label: 'RATE LIMITING',
            description:
              'Control request frequency so one client cannot consume disproportionate capacity.',
          },
        ],

        successMessage:
          'Correct. Different system pressures require different architecture mechanisms. The important skill is connecting the problem to the appropriate response.',

        failureMessage:
          'First identify whether the problem is instance capacity, repeated reads, asynchronous work or uncontrolled request volume.',
      },
    },

    {
      id: 'mc07-s05-scalability-question',
      type: 'question',
      title: 'Scalability Decision Check',
      description:
        'Check whether you can select an appropriate scaling strategy.',

      question: {
        id: 'mc07-s05-scalability',
        type: 'single-choice',
        question:
          'An API is stateless and one instance cannot handle the expected peak request volume. Which architecture decision is the most direct response?',
        options: [
          {
            id: 'horizontal',
            text:
              'Run multiple API instances and distribute incoming traffic between them.',
            correct: true,
          },
          {
            id: 'retry',
            text:
              'Increase retries on every request so the same instance receives more work.',
            correct: false,
          },
          {
            id: 'database',
            text:
              'Replace every database table without first identifying the bottleneck.',
            correct: false,
          },
          {
            id: 'logging',
            text:
              'Increase application logging and assume that capacity will automatically improve.',
            correct: false,
          },
        ],

        explanation:
          'A stateless API is well suited to horizontal scaling because multiple instances can process requests independently. The final architecture should still verify other bottlenecks such as database capacity and downstream dependencies.',
      },
    },
  ],
}