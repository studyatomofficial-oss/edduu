import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session01: SessionDefinition = {
  id: 'mc10-session-01',
  number: 1,
  stage: 'discover',
  title: 'Distributed Systems Foundations - When One Application Becomes Many',
  objective:
    'Understand what makes a system distributed, why network boundaries introduce latency and partial failure, and how nodes, services, replication and horizontal scaling change system design.',
  experiences: [
    {
      id: 'mc10-s01-distributed-foundations-lesson',
      type: 'lesson',
      title: 'What Makes a System Distributed?',
      description:
        'Build a practical mental model of distributed systems before learning microservices, messaging and reliability patterns.',
      lesson: {
        opening:
          'Imagine EDDUU starts as one application running on one machine. As the platform grows, different responsibilities may run as separate processes or services on different machines. The moment those parts communicate over a network, the system becomes distributed.',
        sections: [
          {
            heading: '1. Start with one application',
            explanation:
              'A simple application can run as one process on one machine. The application, its logic and its local runtime are relatively easy to reason about because there are fewer boundaries between components.',
            example:
              'An early EDDUU backend could run as one application process that serves requests and accesses its database.',
          },
          {
            heading: '2. Why systems become distributed',
            explanation:
              'Systems become distributed when responsibilities need to run across multiple processes, machines or locations. Common drivers include scale, reliability, independent deployment and separation of responsibilities.',
            example:
              'EDDUU may separate the API, background processing and data services so each workload can be operated and scaled independently.',
          },
          {
            heading: '3. A network becomes part of the system',
            explanation:
              'When two components communicate across a network, communication is no longer instantaneous or guaranteed. Requests can experience latency, connection failures and timeouts.',
            example:
              'If the EDDUU API requests student information from another service, the API must wait for a network response instead of calling a local function directly.',
          },
          {
            heading: '4. Understand nodes',
            explanation:
              'A node is a machine or execution environment that participates in the distributed system. Multiple nodes allow workloads to run independently and provide additional capacity or resilience.',
            example:
              'Several EDDUU application instances can run on different worker nodes behind a traffic-distribution layer.',
          },
          {
            heading: '5. Understand services',
            explanation:
              'A service is a logical capability that exposes functionality to other parts of the system. A service can have one or many running instances.',
            example:
              'EDDUU could have a student-profile service responsible for profile-related operations while another service handles learning analytics.',
          },
          {
            heading: '6. Understand partial failure',
            explanation:
              'One of the most important distributed-system ideas is partial failure. One component can fail or become slow while other components continue running.',
            example:
              'The EDDUU Profile Service may become unavailable while the main API and database remain healthy.',
          },
          {
            heading: '7. Latency changes architecture',
            explanation:
              'Remote calls take time. A system with several sequential network calls can accumulate latency, so architects must consider call count, timeouts, parallelism and caching.',
            example:
              'If an EDDUU dashboard waits for four remote services sequentially, the total response time can become much higher than a local operation.',
          },
          {
            heading: '8. Horizontal scaling',
            explanation:
              'Horizontal scaling increases capacity by running more instances of a service. Traffic can then be distributed across healthy instances.',
            example:
              'During an examination period, EDDUU can run additional API instances instead of relying on one increasingly powerful machine.',
          },
          {
            heading: '9. Replication and availability',
            explanation:
              'Multiple instances can provide redundancy. If one instance fails, traffic may continue to healthy instances when the architecture supports that behavior.',
            example:
              'Three EDDUU API instances can provide more resilience than a single API process.',
          },
          {
            heading: '10. Stateless and stateful components',
            explanation:
              'Stateless application instances can often be replaced or scaled more easily because important persistent state lives elsewhere. Stateful systems require deliberate handling of data, identity and persistence.',
            example:
              'EDDUU API containers can remain largely stateless while PostgreSQL owns durable student and course data.',
          },
          {
            heading: '11. Reliability requires boundaries',
            explanation:
              'Distributed systems need explicit handling for timeouts, retries, fallbacks and dependency failures. Without boundaries, one failing dependency can consume resources across the wider system.',
            example:
              'The EDDUU API can use a bounded timeout when calling a Profile Service rather than waiting indefinitely.',
          },
          {
            heading: '12. Distribution creates trade-offs',
            explanation:
              'Distributed architecture can improve scale and resilience, but it also introduces operational complexity, network failure, observability requirements and consistency challenges.',
            example:
              'Splitting EDDUU into many services may allow independent scaling but can also make debugging a single user request much harder.',
          },
        ],
        realWorldConnection:
          'Modern SaaS, cloud and AI platforms commonly distribute workloads across services and machines. The engineering challenge is coordinating those components while remaining reliable when individual dependencies become slow or unavailable.',
        keyIdea:
          'The defining characteristic of a distributed system is that independent components communicate across boundaries where latency and failure are possible.',
        recap: [
          'Distributed systems contain multiple cooperating processes, services or machines.',
          'Network communication introduces latency and failure possibilities.',
          'Nodes provide execution capacity and boundaries.',
          'Services expose logical capabilities.',
          'Partial failure means one component can fail while others remain healthy.',
          'Horizontal scaling adds more service instances.',
          'Stateless services are generally easier to replace and scale.',
          'Distributed architecture improves some capabilities while introducing new complexity.',
        ],
      },
    },

    {
      id: 'mc10-s01-distributed-foundations-animation',
      type: 'animation',
      title: 'Follow One EDDUU Request Across the System',
      description:
        'Follow a student request as it moves across distributed services and observe the effect of a partial failure.',
      animation: {
        visual: 'architecture',
        opening:
          'One dashboard request can cross several independent system boundaries. Follow the request and notice where latency and failure can appear.',
        parts: [
          {
            id: 'client',
            label: 'STUDENT CLIENT',
            explanation:
              'The student initiates a request for a learning dashboard.',
            example:
              'The browser requests the latest student dashboard.',
          },
          {
            id: 'api',
            label: 'EDDUU API',
            explanation:
              'The API receives the request and coordinates work across backend capabilities.',
            example:
              'The API determines which services are required to build the dashboard.',
          },
          {
            id: 'profile-service',
            label: 'PROFILE SERVICE',
            explanation:
              'A separate service provides profile information across a network boundary.',
            example:
              'The API requests the student profile from the Profile Service.',
          },
          {
            id: 'learning-service',
            label: 'LEARNING SERVICE',
            explanation:
              'Another service provides learning and performance information.',
            example:
              'The Learning Service retrieves recent student learning activity.',
          },
          {
            id: 'database',
            label: 'DATA STORE',
            explanation:
              'A persistent data system provides durable application information.',
            example:
              'The Learning Service reads persistent student activity data.',
          },
          {
            id: 'response',
            label: 'DASHBOARD RESPONSE',
            explanation:
              'The API combines the required results and returns the dashboard to the student.',
            example:
              'The browser receives the completed dashboard data.',
          },
          {
            id: 'partial-failure',
            label: 'PARTIAL FAILURE',
            explanation:
              'A dependency can become slow or unavailable while the rest of the distributed system continues operating.',
            example:
              'The Profile Service stops responding while the API and Learning Service remain healthy.',
          },
        ],
        closing:
          'Distributed-system design must account for the fact that remote components can be slow, unavailable or temporarily disconnected.',
      },
    },

    {
      id: 'mc10-s01-distributed-foundations-simulation',
      type: 'simulation',
      title: 'Match the Failure with the Right Response',
      description:
        'Practice recognizing the distributed-system response that limits the impact of a failing dependency.',
      simulation: {
        instruction:
          'Match each distributed-system situation with the engineering response that best addresses it.',
        items: [
          {
            id: 'slow-dependency',
            label: 'A remote service is taking too long to respond.',
            description:
              'The caller must avoid waiting indefinitely for the dependency.',
            correctTargetId: 'timeout',
          },
          {
            id: 'failed-instance',
            label: 'One service instance has stopped responding.',
            description:
              'Other healthy instances may still be able to serve traffic.',
            correctTargetId: 'healthy-instance',
          },
          {
            id: 'traffic-growth',
            label: 'Request volume increases significantly.',
            description:
              'The workload needs additional processing capacity.',
            correctTargetId: 'horizontal-scale',
          },
          {
            id: 'dependency-outage',
            label: 'A non-critical dependency is unavailable.',
            description:
              'The system should limit the impact of the dependency failure on users.',
            correctTargetId: 'fallback',
          },
        ],
        targets: [
          {
            id: 'timeout',
            label: 'BOUNDED TIMEOUT',
            description:
              'Stop waiting after a defined period.',
          },
          {
            id: 'healthy-instance',
            label: 'HEALTHY INSTANCE',
            description:
              'Continue using an available healthy service instance.',
          },
          {
            id: 'horizontal-scale',
            label: 'HORIZONTAL SCALING',
            description:
              'Add additional service instances.',
          },
          {
            id: 'fallback',
            label: 'CONTROLLED FALLBACK',
            description:
              'Return a degraded but controlled experience when appropriate.',
          },
        ],
        successMessage:
          'Excellent. You connected distributed-system failure modes with practical reliability responses.',
        failureMessage:
          'Think about the problem first: waiting too long, losing one instance, receiving more traffic or losing a dependency.',
      },
    },

    {
      id: 'mc10-s01-distributed-foundations-question',
      type: 'question',
      title: 'Distributed Systems Check',
      description:
        'Check whether you understand the architectural consequence of a network boundary.',
      question: {
        id: 'mc10-s01-distributed-foundations',
        type: 'single-choice',
        question:
          'What fundamentally changes when two application components communicate across a network?',
        options: [
          {
            id: 'network-concerns',
            text:
              'Latency, timeouts and partial failure become architectural concerns.',
            correct: true,
          },
          {
            id: 'automatic-reliability',
            text:
              'The components automatically become more reliable.',
            correct: false,
          },
          {
            id: 'no-failure',
            text:
              'One component can no longer fail independently.',
            correct: false,
          },
          {
            id: 'local-call',
            text:
              'The network call behaves exactly like a local function call.',
            correct: false,
          },
        ],
        explanation:
          'A network boundary introduces latency, connectivity problems and partial failure. Distributed systems therefore require explicit reliability and communication strategies.',
        hints: [
          'Think about what can happen between two machines.',
          'A remote call is not the same as a local function call.',
        ],
      },
    },
  ],
}