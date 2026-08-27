import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session02: SessionDefinition = {
  id: 'mc12-session-02',
  number: 2,
  stage: 'discover',
  title: 'Performance Engineering - Latency, Throughput and Little’s Law',
  objective:
    'Understand latency, throughput, concurrency, percentiles, queueing effects and practical performance measurement.',
  experiences: [
    {
      id: 'mc12-s02-performance-lesson',
      type: 'lesson',
      title: 'How Do We Know a System Is Fast?',
      lesson: {
        opening:
          'A system that feels fast to one user may behave very differently under heavy load. Performance engineering starts by measuring the right things.',
        sections: [
          {
            heading: '1. Latency',
            explanation:
              'Latency is the time taken to complete an operation.',
            example:
              'An EDDUU dashboard request might have a 120 millisecond response time.',
          },
          {
            heading: '2. Throughput',
            explanation:
              'Throughput describes how much work the system completes over time.',
            example:
              'An API may process 1,000 requests per second.',
          },
          {
            heading: '3. Concurrency',
            explanation:
              'Concurrency is the amount of work being handled at the same time.',
            example:
              'During an exam, thousands of students may have requests in flight simultaneously.',
          },
          {
            heading: '4. Percentiles matter',
            explanation:
              'Average latency can hide slow requests. Percentiles such as p95 and p99 show tail behavior.',
            example:
              'An average of 100 ms is less useful if 1% of users experience 5 seconds.',
          },
          {
            heading: '5. Queueing increases latency',
            explanation:
              'When demand approaches capacity, work waits for resources and latency can rise sharply.',
            example:
              'A saturated database connection pool can cause requests to wait before database execution begins.',
          },
          {
            heading: '6. Little’s Law',
            explanation:
              'Little’s Law connects average work in a system, throughput and average time in the system: L = λW.',
            example:
              'If throughput is 100 requests per second and average time is 0.5 seconds, the average number of requests in the system is about 50.',
          },
          {
            heading: '7. Optimize the critical path',
            explanation:
              'Performance improvements should target the operations contributing most to user-visible latency.',
            example:
              'Removing one slow sequential database call may improve dashboard latency more than optimizing a tiny CPU operation.',
          },
          {
            heading: '8. Measure before optimizing',
            explanation:
              'Optimization without measurement can improve an irrelevant part of the system.',
            example:
              'A CPU optimization is unlikely to matter when most latency comes from network calls.',
          },
        ],
        realWorldConnection:
          'Production performance work combines measurements, workload models and controlled experiments rather than relying on intuition.',
        keyIdea:
          'Performance engineering is measurement-driven: understand latency, throughput and concurrency before changing architecture.',
        recap: [
          'Latency measures time per operation.',
          'Throughput measures completed work over time.',
          'Concurrency measures simultaneous work.',
          'Percentiles expose tail latency.',
          'Queueing can dramatically increase latency.',
          'Little’s Law connects work, throughput and time.',
        ],
      },
    },
    {
      id: 'mc12-s02-performance-animation',
      type: 'animation',
      title: 'Follow Requests Through a Queue',
      animation: {
        visual: 'process',
        opening:
          'Watch requests arrive faster than a downstream dependency can process them.',
        parts: [
          {
            id: 'arrival',
            label: 'REQUEST ARRIVAL',
            explanation:
              'Requests enter the system at a particular rate.',
          },
          {
            id: 'processing',
            label: 'PROCESSING',
            explanation:
              'Workers process requests at the available service rate.',
          },
          {
            id: 'queue',
            label: 'WAITING QUEUE',
            explanation:
              'When demand exceeds immediate processing capacity, requests wait.',
          },
          {
            id: 'tail',
            label: 'TAIL LATENCY',
            explanation:
              'Waiting creates increasingly slow requests.',
          },
        ],
        closing:
          'As utilization approaches capacity, queueing can cause tail latency to grow quickly.',
      },
    },
    {
      id: 'mc12-s02-performance-simulation',
      type: 'simulation',
      title: 'Diagnose the Performance Problem',
      simulation: {
        instruction:
          'Match each symptom with the most useful performance investigation.',
        items: [
          {
            id: 'high-p99',
            label: 'p99 latency is extremely high while average latency looks acceptable.',
            correctTargetId: 'percentiles',
          },
          {
            id: 'database-wait',
            label: 'Requests spend most of their time waiting for database connections.',
            correctTargetId: 'pool',
          },
          {
            id: 'cpu',
            label: 'CPU remains near saturation during load tests.',
            correctTargetId: 'cpu',
          },
          {
            id: 'slow-network',
            label: 'A remote dependency dominates end-to-end latency.',
            correctTargetId: 'dependency',
          },
        ],
        targets: [
          { id: 'percentiles', label: 'INSPECT TAIL PERCENTILES' },
          { id: 'pool', label: 'INSPECT CONNECTION POOL' },
          { id: 'cpu', label: 'PROFILE CPU CAPACITY' },
          { id: 'dependency', label: 'TRACE DOWNSTREAM DEPENDENCY' },
        ],
        successMessage:
          'Good. Performance diagnosis starts with evidence and the critical path.',
        failureMessage:
          'Use the symptom to decide which measurement can explain the delay.',
      },
    },
    {
      id: 'mc12-s02-performance-question',
      type: 'question',
      title: 'Performance Check',
      question: {
        id: 'mc12-s02-performance-question',
        type: 'single-choice',
        question:
          'Why are p95 and p99 latency measurements useful?',
        options: [
          {
            id: 'tail',
            text: 'They reveal slow tail requests that averages can hide.',
            correct: true,
          },
          {
            id: 'throughput',
            text: 'They directly measure database storage capacity.',
            correct: false,
          },
          {
            id: 'cpu',
            text: 'They replace the need for throughput measurements.',
            correct: false,
          },
          {
            id: 'errors',
            text: 'They guarantee that no request will fail.',
            correct: false,
          },
        ],
        explanation:
          'Tail percentiles expose the experience of slower requests and are important for understanding production performance.',
      },
    },
  ],
}