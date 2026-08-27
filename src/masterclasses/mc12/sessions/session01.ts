import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session01: SessionDefinition = {
  id: 'mc12-session-01',
  number: 1,
  stage: 'discover',
  title: 'Scalability Foundations - Growing Without Breaking the System',
  objective:
    'Understand scalability, capacity, bottlenecks, vertical scaling, horizontal scaling and the architectural trade-offs involved when workload grows.',
  experiences: [
    {
      id: 'mc12-s01-foundations-lesson',
      type: 'lesson',
      title: 'What Does It Mean for a System to Scale?',
      description:
        'Build a practical mental model for handling increasing users, requests, data and workload.',
      lesson: {
        opening:
          'Imagine EDDUU has 100 students today and suddenly receives 100,000 concurrent users during an examination. Scaling means making the system capable of handling that larger workload while maintaining acceptable reliability and performance.',
        sections: [
          {
            heading: '1. Start with capacity',
            explanation:
              'Capacity is the amount of workload a system can handle while meeting its required performance and reliability targets.',
            example:
              'An EDDUU API may currently handle 500 requests per second while maintaining its latency target.',
          },
          {
            heading: '2. Understand demand',
            explanation:
              'Demand is the workload arriving at the system. Demand can vary by time, feature, customer behavior and business events.',
            example:
              'EDDUU traffic may increase sharply immediately before a major examination.',
          },
          {
            heading: '3. Find the bottleneck',
            explanation:
              'A bottleneck is the component that limits overall system throughput or performance.',
            example:
              'Adding API servers will not solve a database bottleneck if every API instance waits on the same overloaded database.',
          },
          {
            heading: '4. Vertical scaling',
            explanation:
              'Vertical scaling increases the resources available to one machine or instance.',
            example:
              'Moving a database from 4 CPU cores to 16 CPU cores is vertical scaling.',
          },
          {
            heading: '5. Horizontal scaling',
            explanation:
              'Horizontal scaling increases capacity by adding more instances of a workload.',
            example:
              'EDDUU can run ten API instances behind a load balancer instead of relying on one instance.',
          },
          {
            heading: '6. Stateless services scale more easily',
            explanation:
              'Stateless application instances can usually be added or removed without transferring important session state between instances.',
            example:
              'EDDUU authentication state can be represented using a token while application instances remain interchangeable.',
          },
          {
            heading: '7. Scaling is not only about servers',
            explanation:
              'A system can be constrained by CPU, memory, network bandwidth, database connections, storage, queues or external dependencies.',
            example:
              'Ten API instances can increase pressure on PostgreSQL if connection pooling is not designed correctly.',
          },
          {
            heading: '8. Scale the bottleneck first',
            explanation:
              'Scaling components that are not limiting the workload does not necessarily increase end-to-end capacity.',
            example:
              'Increasing frontend capacity does not help if the recommendation database is already saturated.',
          },
          {
            heading: '9. Capacity has a cost',
            explanation:
              'More capacity consumes more infrastructure resources. Scaling decisions therefore involve both technical and financial trade-offs.',
            example:
              'Running twenty replicas continuously may handle peak demand but waste resources during quiet periods.',
          },
          {
            heading: '10. Elasticity',
            explanation:
              'Elasticity means capacity can increase or decrease as demand changes.',
            example:
              'EDDUU can increase API replicas during an exam and reduce them after the traffic spike.',
          },
        ],
        realWorldConnection:
          'Large SaaS platforms scale by understanding demand, measuring capacity and identifying the true bottleneck rather than simply adding more servers.',
        keyIdea:
          'Scalability is the ability to handle increasing workload by increasing system capacity without unacceptable degradation.',
        recap: [
          'Demand is the workload arriving at the system.',
          'Capacity is the workload the system can handle.',
          'Bottlenecks limit overall performance.',
          'Vertical scaling adds resources to an instance.',
          'Horizontal scaling adds instances.',
          'Stateless services are easier to scale horizontally.',
          'Scaling must target the actual bottleneck.',
          'Elasticity allows capacity to follow demand.',
        ],
      },
    },
    {
      id: 'mc12-s01-foundations-animation',
      type: 'animation',
      title: 'Watch EDDUU Scale from One Instance to Many',
      description:
        'Visualize how increasing traffic creates pressure and how horizontal scaling distributes workload.',
      animation: {
        visual: 'architecture',
        opening:
          'Follow EDDUU as traffic increases and observe how additional application instances change the system.',
        parts: [
          {
            id: 'traffic',
            label: 'INCREASING TRAFFIC',
            explanation:
              'More students generate more concurrent requests.',
          },
          {
            id: 'single',
            label: 'ONE API INSTANCE',
            explanation:
              'A single instance eventually reaches its resource limits.',
          },
          {
            id: 'load-balancer',
            label: 'LOAD BALANCER',
            explanation:
              'Incoming requests can be distributed across healthy instances.',
          },
          {
            id: 'replicas',
            label: 'MULTIPLE API INSTANCES',
            explanation:
              'Additional instances provide more processing capacity.',
          },
          {
            id: 'database',
            label: 'DATABASE BOTTLENECK',
            explanation:
              'The database can become the new limiting component even after API scaling.',
          },
        ],
        closing:
          'Scaling one component can simply move the bottleneck elsewhere. Capacity planning must therefore consider the complete request path.',
      },
    },
    {
      id: 'mc12-s01-foundations-simulation',
      type: 'simulation',
      title: 'Choose the Right Scaling Response',
      description:
        'Match workload conditions with the most appropriate scaling response.',
      simulation: {
        instruction:
          'Match each situation with the engineering response that best addresses the limiting condition.',
        items: [
          {
            id: 'api-cpu',
            label: 'API CPU remains saturated while traffic increases.',
            correctTargetId: 'horizontal',
          },
          {
            id: 'single-large-machine',
            label: 'One machine needs more compute and the workload cannot yet be distributed.',
            correctTargetId: 'vertical',
          },
          {
            id: 'quiet-period',
            label: 'Traffic drops significantly after a peak.',
            correctTargetId: 'elastic',
          },
          {
            id: 'database-limit',
            label: 'API replicas increase but database latency remains the limiting factor.',
            correctTargetId: 'database',
          },
        ],
        targets: [
          {
            id: 'horizontal',
            label: 'HORIZONTAL SCALING',
          },
          {
            id: 'vertical',
            label: 'VERTICAL SCALING',
          },
          {
            id: 'elastic',
            label: 'ELASTIC CAPACITY',
          },
          {
            id: 'database',
            label: 'ADDRESS DATABASE BOTTLENECK',
          },
        ],
        successMessage:
          'Excellent. You identified the limiting resource before choosing the scaling strategy.',
        failureMessage:
          'First identify what is actually limiting the workload, then choose the scaling response.',
      },
    },
    {
      id: 'mc12-s01-foundations-question',
      type: 'question',
      title: 'Scalability Check',
      question: {
        id: 'mc12-s01-foundations-question',
        type: 'single-choice',
        question:
          'What is the best first step when a system cannot handle increasing traffic?',
        options: [
          {
            id: 'identify-bottleneck',
            text: 'Measure the system and identify the actual bottleneck.',
            correct: true,
          },
          {
            id: 'add-servers',
            text: 'Immediately add many application servers.',
            correct: false,
          },
          {
            id: 'increase-timeout',
            text: 'Increase all request timeouts.',
            correct: false,
          },
          {
            id: 'ignore',
            text: 'Ignore the issue until the traffic becomes larger.',
            correct: false,
          },
        ],
        explanation:
          'Scaling the wrong component may not improve end-to-end capacity. Measurement and bottleneck identification should come first.',
      },
    },
  ],
}