import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session07: SessionDefinition = {
  id: 'mc12-session-07',
  number: 7,
  stage: 'challenge',
  title: 'Load Testing and Capacity Planning',
  objective:
    'Learn how to design realistic load tests, interpret performance results, identify saturation and translate measurements into capacity decisions.',
  experiences: [
    {
      id: 'mc12-s07-load-lesson',
      type: 'lesson',
      title: 'How Do We Know How Much Capacity We Need?',
      lesson: {
        opening:
          'Capacity should be demonstrated through controlled testing and production measurements rather than guessed from the number of servers.',
        sections: [
          {
            heading: '1. Define the workload',
            explanation:
              'A useful load test represents realistic request patterns, concurrency and payload sizes.',
            example:
              'EDDUU can model dashboard reads, course searches and progress updates instead of sending only one endpoint repeatedly.',
          },
          {
            heading: '2. Baseline first',
            explanation:
              'A baseline establishes current latency, throughput and resource usage before optimization.',
            example:
              'Record p50, p95, p99 and CPU usage before changing the API.',
          },
          {
            heading: '3. Load testing',
            explanation:
              'Load testing applies controlled workload to observe system behavior under expected demand.',
            example:
              'k6 can generate a defined number of virtual users against the EDDUU API.',
          },
          {
            heading: '4. Stress testing',
            explanation:
              'Stress testing pushes the system beyond expected operating conditions to discover limits and failure behavior.',
            example:
              'Gradually increase traffic until latency or error rates violate the target.',
          },
          {
            heading: '5. Saturation',
            explanation:
              'Saturation occurs when an important resource approaches or reaches its useful capacity.',
            example:
              'CPU, database connections or queue workers can become saturated.',
          },
          {
            heading: '6. Capacity model',
            explanation:
              'Capacity planning translates workload demand into required resources while maintaining safety margins.',
            example:
              'If one API instance safely handles 200 requests per second and expected demand is 800, more than four instances may be required after accounting for headroom.',
          },
          {
            heading: '7. Headroom',
            explanation:
              'Production systems should not normally operate permanently at their absolute maximum capacity.',
            example:
              'EDDUU may target 60–70% normal resource utilization to preserve room for bursts.',
          },
          {
            heading: '8. Performance regression',
            explanation:
              'Load tests can be repeated to detect whether new changes degrade performance.',
            example:
              'A new analytics feature may increase database latency and trigger a performance regression test failure.',
          },
        ],
        realWorldConnection:
          'Performance testing provides evidence for infrastructure sizing, autoscaling thresholds and architectural investment.',
        keyIdea:
          'Capacity planning converts measured workload behavior into resource and scaling decisions.',
        recap: [
          'Use realistic workloads.',
          'Measure baselines.',
          'Observe p95 and p99 latency.',
          'Find saturation points.',
          'Plan capacity with headroom.',
          'Repeat tests to catch regressions.',
        ],
      },
    },
    {
      id: 'mc12-s07-load-animation',
      type: 'animation',
      title: 'Watch Load Increase Until Saturation',
      animation: {
        visual: 'computer',
        opening:
          'Observe system behavior as workload increases from normal traffic toward saturation.',
        parts: [
          {
            id: 'baseline',
            label: 'BASELINE',
            explanation:
              'The system handles normal traffic comfortably.',
          },
          {
            id: 'growth',
            label: 'LOAD INCREASE',
            explanation:
              'Request volume and concurrency rise.',
          },
          {
            id: 'latency',
            label: 'LATENCY RISE',
            explanation:
              'Queueing and resource contention begin affecting response time.',
          },
          {
            id: 'saturation',
            label: 'SATURATION',
            explanation:
              'A resource approaches its practical limit.',
          },
          {
            id: 'capacity',
            label: 'CAPACITY DECISION',
            explanation:
              'Measurements inform scaling or architectural changes.',
          },
        ],
        closing:
          'The goal of load testing is not simply to produce a large number of requests. It is to discover how the system behaves as workload changes.',
      },
    },
    {
      id: 'mc12-s07-load-simulation',
      type: 'simulation',
      title: 'Interpret the Load-Test Result',
      simulation: {
        instruction:
          'Match each load-test observation with the correct engineering conclusion.',
        items: [
          {
            id: 'tail',
            label: 'p99 latency increases sharply while average latency changes only slightly.',
            correctTargetId: 'tail',
          },
          {
            id: 'cpu',
            label: 'CPU reaches sustained saturation as throughput rises.',
            correctTargetId: 'cpu',
          },
          {
            id: 'database',
            label: 'API CPU remains low but database latency increases sharply.',
            correctTargetId: 'database',
          },
          {
            id: 'headroom',
            label: 'Production traffic is consistently near tested maximum capacity.',
            correctTargetId: 'headroom',
          },
        ],
        targets: [
          { id: 'tail', label: 'TAIL-LATENCY PROBLEM' },
          { id: 'cpu', label: 'CPU SATURATION' },
          { id: 'database', label: 'DATABASE BOTTLENECK' },
          { id: 'headroom', label: 'INSUFFICIENT CAPACITY HEADROOM' },
        ],
        successMessage:
          'Excellent. You are reading load-test evidence rather than looking only at average latency.',
        failureMessage:
          'Look for the resource or metric that changes first as load increases.',
      },
    },
    {
      id: 'mc12-s07-load-question',
      type: 'question',
      title: 'Capacity Planning Check',
      question: {
        id: 'mc12-s07-load-question',
        type: 'single-choice',
        question:
          'Why should production capacity normally include headroom?',
        options: [
          {
            id: 'burst',
            text: 'Headroom provides room for traffic bursts, failures and workload variation.',
            correct: true,
          },
          {
            id: 'cost',
            text: 'Headroom guarantees infrastructure will always cost less.',
            correct: false,
          },
          {
            id: 'latency',
            text: 'Headroom means latency measurements are unnecessary.',
            correct: false,
          },
          {
            id: 'zero-failure',
            text: 'Headroom guarantees that components cannot fail.',
            correct: false,
          },
        ],
        explanation:
          'Operating too close to maximum capacity leaves little room for unexpected demand and can make failures harder to absorb.',
      },
    },
  ],
}