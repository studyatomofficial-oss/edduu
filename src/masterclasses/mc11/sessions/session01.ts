import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session01: SessionDefinition = {
  id: 'mc11-session-01',
  number: 1,
  stage: 'discover',
  title: 'Scalability Foundations - When EDDUU Has to Handle More',
  objective:
    'Understand scalability and performance foundations, including capacity, latency, throughput, bottlenecks, vertical scaling, horizontal scaling and the relationship between workload growth and system capacity.',
  experiences: [
    {
      id: 'mc11-s01-scalability-foundations-lesson',
      type: 'lesson',
      title: 'What Does It Mean for a System to Scale?',
      description:
        'Build a practical mental model of scalability and performance before learning load balancing, caching, databases and distributed scaling strategies.',
      lesson: {
        opening:
          'Imagine EDDUU is working perfectly with 100 students online. Then an examination begins and 10,000 students open the platform at nearly the same time. The system may still be correct, but it now has a different problem: can it handle the workload within an acceptable time? That is the beginning of scalability and performance engineering.',
        sections: [
          {
            heading: '1. Start with capacity',
            explanation:
              'Capacity is the amount of workload a system can handle while continuing to meet its expected performance and reliability targets.',
            example:
              'If one EDDUU API instance can safely handle 200 requests per second at the target latency, its practical capacity is constrained by that workload and target.',
          },
          {
            heading: '2. Understand workload',
            explanation:
              'Workload describes what the system is being asked to do. Request rate, concurrent users, data volume, message volume and computational complexity can all affect workload.',
            example:
              'An EDDUU examination can increase API requests, database reads, authentication traffic and AI evaluation requests at the same time.',
          },
          {
            heading: '3. Throughput',
            explanation:
              'Throughput measures how much work a system completes over a period of time.',
            example:
              'An API processing 500 requests per second has higher request throughput than one processing 100 requests per second, assuming the measurements represent comparable work.',
          },
          {
            heading: '4. Latency',
            explanation:
              'Latency is the time required to complete an individual operation. A system can have high throughput while still producing unacceptable latency for users.',
            example:
              'If EDDUU can process many dashboard requests per second but each student waits 8 seconds, the platform may still provide a poor user experience.',
          },
          {
            heading: '5. Capacity is not the same as performance',
            explanation:
              'Performance describes how efficiently and quickly the system performs work, while scalability describes how effectively capacity can increase as workload grows.',
            example:
              'Reducing a database query from 500 ms to 50 ms improves performance. Adding more API instances to handle increasing traffic improves horizontal scalability.',
          },
          {
            heading: '6. Find the bottleneck',
            explanation:
              'A bottleneck is the component that limits the overall system. CPU, memory, database connections, disk I/O, network bandwidth, external APIs and locks can all become bottlenecks.',
            example:
              'Adding ten API servers will not solve an EDDUU database that is already saturated by expensive queries.',
          },
          {
            heading: '7. Vertical scaling',
            explanation:
              'Vertical scaling means giving an existing machine or instance more resources, such as CPU or memory.',
            example:
              'Moving an EDDUU service from a 2-vCPU machine to an 8-vCPU machine is vertical scaling.',
          },
          {
            heading: '8. Horizontal scaling',
            explanation:
              'Horizontal scaling means adding more instances and distributing workload across them.',
            example:
              'Instead of one EDDUU API instance, the platform can run five instances behind a load balancer.',
          },
          {
            heading: '9. Why stateless services scale more easily',
            explanation:
              'A stateless application instance does not depend on important user state being stored only inside that instance. This makes instances easier to add, remove and replace.',
            example:
              'If EDDUU session state is stored in an appropriate shared system, any healthy API instance can serve the next request.',
          },
          {
            heading: '10. Load balancing',
            explanation:
              'A load balancer distributes incoming traffic across available service instances. It can also stop sending traffic to unhealthy instances when health information is available.',
            example:
              'During an examination surge, the EDDUU load balancer can distribute requests across multiple API replicas.',
          },
          {
            heading: '11. Scaling has limits',
            explanation:
              'Adding instances does not guarantee linear performance improvement. Shared databases, network limits, synchronization, locks and external dependencies can become new bottlenecks.',
            example:
              'Increasing EDDUU API replicas from 4 to 20 may produce little benefit if every request waits on one overloaded database.',
          },
          {
            heading: '12. Measure before optimizing',
            explanation:
              'Performance decisions should be based on measurements rather than assumptions. Metrics such as latency percentiles, throughput, CPU utilization, memory utilization and error rate help identify the real constraint.',
            example:
              'Instead of automatically adding servers, the EDDUU team first checks whether the slowdown comes from CPU, database latency or an external AI API.',
          },
        ],
        realWorldConnection:
          'Large SaaS and AI platforms must continuously balance workload, capacity, latency, throughput and cost. Scaling decisions are most effective when teams understand the actual bottleneck rather than simply adding infrastructure.',
        keyIdea:
          'Scalability is the ability of a system to handle increasing workload by increasing capacity while maintaining acceptable performance and reliability.',
        recap: [
          'Capacity describes how much workload a system can handle.',
          'Throughput measures completed work over time.',
          'Latency measures how long an individual operation takes.',
          'Performance and scalability are related but different concepts.',
          'Bottlenecks limit overall system capacity.',
          'Vertical scaling adds resources to an existing instance.',
          'Horizontal scaling adds more instances.',
          'Stateless services are generally easier to scale horizontally.',
          'Load balancing distributes traffic across instances.',
          'More instances do not guarantee linear scaling.',
          'Measurement should guide optimization decisions.',
        ],
      },
    },

    {
      id: 'mc11-s01-scalability-foundations-animation',
      type: 'animation',
      title: 'Watch EDDUU Scale from One Instance to Many',
      description:
        'Visualize how increasing traffic creates pressure on an application and how horizontal scaling increases available processing capacity.',
      animation: {
        visual: 'architecture',
        opening:
          'Follow the EDDUU Learning Service as traffic grows from a normal day to an examination-day surge.',
        parts: [
          {
            id: 'single-instance',
            label: 'ONE EDDUU INSTANCE',
            explanation:
              'Initially, one application instance receives all incoming requests.',
            example:
              'The Learning Service handles normal daily traffic from students.',
          },
          {
            id: 'traffic-growth',
            label: 'TRAFFIC INCREASES',
            explanation:
              'More students generate more concurrent requests and the instance approaches its capacity limit.',
            example:
              'An examination starts and thousands of students open dashboards simultaneously.',
          },
          {
            id: 'bottleneck',
            label: 'BOTTLENECK APPEARS',
            explanation:
              'CPU, memory, database connections or another dependency can become saturated.',
            example:
              'API CPU reaches its limit and dashboard latency increases.',
          },
          {
            id: 'horizontal-scale',
            label: 'ADD REPLICAS',
            explanation:
              'Additional application instances increase available processing capacity when the workload can be distributed.',
            example:
              'EDDUU starts three additional Learning Service replicas.',
          },
          {
            id: 'load-balancer',
            label: 'LOAD BALANCER',
            explanation:
              'Incoming requests are distributed across healthy application instances.',
            example:
              'Students are served by whichever healthy replica is available.',
          },
          {
            id: 'shared-state',
            label: 'SHARED DATA SYSTEM',
            explanation:
              'Persistent state must remain available independently of any one application instance.',
            example:
              'EDDUU keeps durable learning data in PostgreSQL rather than inside one API process.',
          },
          {
            id: 'new-limit',
            label: 'NEXT BOTTLENECK',
            explanation:
              'After scaling the application tier, another component may become the limiting factor.',
            example:
              'The database becomes the next bottleneck as more API replicas generate database traffic.',
          },
        ],
        closing:
          'Scaling is not simply adding servers. The goal is to identify the current constraint, increase useful capacity and then measure where the next constraint appears.',
      },
    },

    {
      id: 'mc11-s01-scalability-foundations-simulation',
      type: 'simulation',
      title: 'Choose the Right Scaling Response',
      description:
        'Practice identifying the most appropriate first response to common scalability situations.',
      simulation: {
        instruction:
          'Match each EDDUU scalability situation with the engineering response that best addresses the immediate problem.',
        items: [
          {
            id: 'more-api-traffic',
            label: 'API traffic increases and application instances are the bottleneck.',
            description:
              'The application workload can be distributed across independent instances.',
            correctTargetId: 'horizontal-scale',
          },
          {
            id: 'larger-machine',
            label: 'One service instance needs more CPU and memory.',
            description:
              'The workload still fits the architecture but the current instance is undersized.',
            correctTargetId: 'vertical-scale',
          },
          {
            id: 'unhealthy-instance',
            label: 'One replica is unhealthy and should stop receiving traffic.',
            description:
              'Traffic should be directed toward healthy capacity.',
            correctTargetId: 'load-balancer',
          },
          {
            id: 'database-bottleneck',
            label: 'More API replicas are running but database latency is now the limiting factor.',
            description:
              'Adding more application instances will not directly remove the shared database constraint.',
            correctTargetId: 'find-bottleneck',
          },
        ],
        targets: [
          {
            id: 'horizontal-scale',
            label: 'HORIZONTAL SCALING',
            description:
              'Add more application instances.',
          },
          {
            id: 'vertical-scale',
            label: 'VERTICAL SCALING',
            description:
              'Increase resources available to an existing instance.',
          },
          {
            id: 'load-balancer',
            label: 'LOAD BALANCER',
            description:
              'Route traffic toward healthy instances.',
          },
          {
            id: 'find-bottleneck',
            label: 'IDENTIFY THE BOTTLENECK',
            description:
              'Investigate the component limiting overall capacity.',
          },
        ],
        successMessage:
          'Excellent. You connected workload growth, capacity limits and scaling strategies correctly.',
        failureMessage:
          'First identify what is limiting the system: instance resources, number of instances, unhealthy capacity or a shared dependency.',
      },
    },

    {
      id: 'mc11-s01-scalability-foundations-question',
      type: 'question',
      title: 'Scalability Foundations Check',
      description:
        'Check whether you can distinguish horizontal scaling from simply making one machine bigger.',
      question: {
        id: 'mc11-s01-scalability-foundations',
        type: 'single-choice',
        question:
          'EDDUU is receiving much more traffic and the application tier is the bottleneck. The application instances are designed to be stateless. What is the most direct horizontal-scaling response?',
        options: [
          {
            id: 'horizontal',
            text:
              'Add more application instances behind a load balancer.',
            correct: true,
          },
          {
            id: 'single-process',
            text:
              'Put every request into one global process.',
            correct: false,
          },
          {
            id: 'payload',
            text:
              'Increase response payload size.',
            correct: false,
          },
          {
            id: 'health-checks',
            text:
              'Remove health checks.',
            correct: false,
          },
        ],
        explanation:
          'Horizontal scaling increases capacity by adding application instances. A load balancer can distribute requests across those instances when the application is designed to operate safely across replicas.',
        hints: [
          'Horizontal means adding more instances rather than making one instance bigger.',
          'Stateless instances are easier to add and replace.',
        ],
      },
    },
  ],
}
