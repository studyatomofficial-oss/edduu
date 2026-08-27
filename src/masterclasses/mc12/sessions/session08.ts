import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session08: SessionDefinition = {
  id: 'mc12-session-08',
  number: 8,
  stage: 'production',
  title: 'Production Scale Architecture - Putting It All Together',
  objective:
    'Design a production-oriented EDDUU platform that combines horizontal scaling, caching, database optimization, asynchronous processing, observability and capacity management.',
  experiences: [
    {
      id: 'mc12-s08-production-lesson',
      type: 'lesson',
      title: 'Designing EDDUU for Production Scale',
      lesson: {
        opening:
          'Scaling is not one technology. A production architecture combines multiple techniques according to workload, bottlenecks, correctness requirements and operational constraints.',
        sections: [
          {
            heading: '1. Start with the request path',
            explanation:
              'Map how a user request travels through the system before deciding where to scale.',
            example:
              'An EDDUU dashboard request may pass through a load balancer, API service, Redis and PostgreSQL.',
          },
          {
            heading: '2. Scale stateless application services',
            explanation:
              'Stateless services can generally run multiple replicas behind traffic distribution.',
            example:
              'EDDUU can scale its learning API horizontally during examination traffic.',
          },
          {
            heading: '3. Protect the database',
            explanation:
              'Caching, indexes, pagination and controlled connection pools reduce unnecessary database pressure.',
            example:
              'Redis handles repeated course reads while PostgreSQL remains the durable source.',
          },
          {
            heading: '4. Separate background work',
            explanation:
              'Queues and workers prevent long-running or bursty tasks from consuming synchronous request capacity.',
            example:
              'Large report generation can run asynchronously.',
          },
          {
            heading: '5. Design for failure',
            explanation:
              'Timeouts, bounded retries, fallbacks and health checks limit the blast radius of failures.',
            example:
              'A non-critical recommendation service can fail without taking down the complete dashboard.',
          },
          {
            heading: '6. Observe the system',
            explanation:
              'Metrics, logs and traces reveal where capacity and reliability problems occur.',
            example:
              'A trace can show that database latency, rather than API CPU, is causing slow dashboard requests.',
          },
          {
            heading: '7. Define SLOs',
            explanation:
              'Service objectives turn vague expectations such as fast or reliable into measurable targets.',
            example:
              'EDDUU can define a target for successful requests and p95 latency.',
          },
          {
            heading: '8. Capacity is continuous',
            explanation:
              'Capacity changes as users, features and datasets grow. Production systems require ongoing measurement.',
            example:
              'A new AI feature can change request volume and database workload enough to require new capacity planning.',
          },
          {
            heading: '9. Cost matters',
            explanation:
              'A technically scalable architecture can still be economically inefficient.',
            example:
              'Autoscaling and right-sizing can reduce idle infrastructure while retaining peak capacity.',
          },
          {
            heading: '10. Production readiness',
            explanation:
              'A scalable system needs tested failure behavior, observability, recovery procedures and operational ownership.',
            example:
              'EDDUU should test what happens when Redis, PostgreSQL or a worker dependency becomes unavailable.',
          },
        ],
        realWorldConnection:
          'Production scalability is a continuous engineering discipline involving architecture, measurement, reliability and cost management.',
        keyIdea:
          'A scalable architecture is a system of coordinated decisions rather than a single scaling mechanism.',
        recap: [
          'Scale stateless services horizontally.',
          'Protect databases with efficient access patterns and caching.',
          'Move suitable work to asynchronous processing.',
          'Design explicit failure boundaries.',
          'Measure latency, throughput and saturation.',
          'Use SLOs and capacity headroom.',
          'Continuously review cost and operational readiness.',
        ],
      },
    },
    {
      id: 'mc12-s08-production-animation',
      type: 'animation',
      title: 'Follow a Production-Scale EDDUU Request',
      animation: {
        visual: 'architecture',
        opening:
          'Follow a production EDDUU request through traffic distribution, caching, databases, asynchronous work and observability.',
        parts: [
          {
            id: 'client',
            label: 'STUDENT',
            explanation:
              'The student initiates the operation.',
          },
          {
            id: 'gateway',
            label: 'LOAD BALANCER',
            explanation:
              'Traffic is distributed across healthy application instances.',
          },
          {
            id: 'api',
            label: 'API REPLICAS',
            explanation:
              'Stateless application instances provide horizontal capacity.',
          },
          {
            id: 'cache',
            label: 'REDIS',
            explanation:
              'Frequently reused data can be served from cache.',
          },
          {
            id: 'database',
            label: 'POSTGRESQL',
            explanation:
              'Durable authoritative data remains in the database.',
          },
          {
            id: 'queue',
            label: 'ASYNC QUEUE',
            explanation:
              'Background tasks are separated from synchronous request processing.',
          },
          {
            id: 'workers',
            label: 'WORKERS',
            explanation:
              'Independent workers process queued workloads.',
          },
          {
            id: 'observability',
            label: 'OBSERVABILITY',
            explanation:
              'Metrics, logs and traces reveal system behavior.',
          },
        ],
        closing:
          'Production scale emerges from coordinated capacity, performance, data, asynchronous processing and operational decisions.',
      },
    },
    {
      id: 'mc12-s08-production-simulation',
      type: 'simulation',
      title: 'Build the Scalable EDDUU Architecture',
      simulation: {
        instruction:
          'Match each production requirement with the architecture capability that addresses it.',
        items: [
          {
            id: 'traffic',
            label: 'A sudden increase in API traffic requires additional application capacity.',
            correctTargetId: 'replicas',
          },
          {
            id: 'repeated',
            label: 'The same course metadata is requested thousands of times.',
            correctTargetId: 'redis',
          },
          {
            id: 'background',
            label: 'A report takes several minutes to generate.',
            correctTargetId: 'queue',
          },
          {
            id: 'diagnosis',
            label: 'The team needs to identify which downstream operation causes high latency.',
            correctTargetId: 'tracing',
          },
          {
            id: 'database',
            label: 'A frequently filtered table has grown to millions of rows.',
            correctTargetId: 'index',
          },
        ],
        targets: [
          { id: 'replicas', label: 'HORIZONTAL API REPLICAS' },
          { id: 'redis', label: 'REDIS CACHE' },
          { id: 'queue', label: 'ASYNC QUEUE + WORKER' },
          { id: 'tracing', label: 'DISTRIBUTED TRACING' },
          { id: 'index', label: 'DATABASE INDEX' },
        ],
        successMessage:
          'Excellent. You assembled the major scalability building blocks into a coherent architecture.',
        failureMessage:
          'Match the solution to the actual workload: traffic, repeated reads, long jobs, diagnosis or database access.',
      },
    },
    {
      id: 'mc12-s08-production-question',
      type: 'question',
      title: 'Production Scale Check',
      question: {
        id: 'mc12-s08-production-question',
        type: 'single-choice',
        question:
          'Which statement best describes production scalability?',
        options: [
          {
            id: 'system',
            text: 'It is a coordinated combination of capacity, performance, data, reliability and operational decisions.',
            correct: true,
          },
          {
            id: 'servers',
            text: 'It simply means adding more servers.',
            correct: false,
          },
          {
            id: 'database',
            text: 'It is solved entirely by buying a larger database.',
            correct: false,
          },
          {
            id: 'cache',
            text: 'It is solved entirely by adding a cache.',
            correct: false,
          },
        ],
        explanation:
          'Production scalability is a system-level property. Multiple techniques must work together according to workload and business requirements.',
      },
    },
  ],
}