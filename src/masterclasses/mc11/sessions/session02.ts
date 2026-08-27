import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session02: SessionDefinition = {
  id: 'mc11-session-02',
  number: 2,
  stage: 'discover',
  title: 'Performance Engineering - Measure Before You Optimize',
  objective:
    'Understand latency, throughput, concurrency, percentiles, saturation and bottlenecks, then learn how to diagnose EDDUU performance problems using measurable evidence instead of assumptions.',
  experiences: [
    {
      id: 'mc11-s02-performance-lesson',
      type: 'lesson',
      title: 'What Actually Makes a System Slow?',
      description:
        'Build a practical mental model for diagnosing application performance using latency, throughput, concurrency and resource utilization.',
      lesson: {
        opening:
          'Imagine an EDDUU student clicks "Open Dashboard" and waits five seconds. The first reaction might be "the server is slow." But that statement is not enough to fix the problem. The API could be slow, the database could be slow, an external service could be slow, or the request could simply be waiting behind too much concurrent work. Performance engineering begins by measuring what is actually happening.',
        sections: [
          {
            heading: '1. Performance starts with user experience',
            explanation:
              'Performance is ultimately about how quickly and consistently a system completes useful work. Technical measurements help us understand what the user experiences.',
            example:
              'If an EDDUU dashboard normally loads in 300 milliseconds but suddenly takes 4 seconds, the team needs to determine what changed before choosing a solution.',
          },
          {
            heading: '2. Understand latency',
            explanation:
              'Latency is the elapsed time between an operation starting and completing. Lower latency generally means the operation completes faster.',
            example:
              'If an EDDUU API request starts at 10:00:00.000 and finishes at 10:00:00.250, its observed latency is approximately 250 milliseconds.',
          },
          {
            heading: '3. Average latency can hide problems',
            explanation:
              'An average combines fast and slow requests into one number. A small number of extremely slow requests can disappear inside the average.',
            example:
              'If 99 EDDUU requests take 100 ms and one request takes 10 seconds, the average does not tell the full story about the student who experienced the 10-second request.',
          },
          {
            heading: '4. Percentiles show the tail',
            explanation:
              'Latency percentiles describe how fast a certain percentage of requests complete. p50 represents the median, p95 represents a high-latency boundary for most requests, and p99 exposes even more of the slow tail.',
            example:
              'An EDDUU API might report p50 latency of 120 ms, p95 of 350 ms and p99 of 900 ms.',
          },
          {
            heading: '5. Throughput measures completed work',
            explanation:
              'Throughput describes how much work a system completes over a period of time. For HTTP services this is often represented as requests per second.',
            example:
              'An EDDUU service processing 1,000 requests per second has greater request throughput than the same service processing 200 requests per second, assuming comparable requests.',
          },
          {
            heading: '6. Concurrency is different from throughput',
            explanation:
              'Concurrency describes how much work is in progress at the same time. A system can have many concurrent requests without completing them quickly.',
            example:
              'If 5,000 students simultaneously request dashboards, EDDUU may have thousands of requests in flight even if only hundreds complete each second.',
          },
          {
            heading: "7. Little's Law gives a useful mental model",
            explanation:
              'A useful queueing relationship is L = λW, where L is average work in the system, λ is throughput and W is average time spent in the system.',
            example:
              'If EDDUU processes 100 requests per second and each request spends an average of 0.5 seconds in the system, the average number of in-flight requests is approximately 50.',
          },
          {
            heading: '8. Find the bottleneck',
            explanation:
              'The bottleneck is the component or resource limiting overall performance. CPU, memory, database queries, network calls, locks and external APIs can all become bottlenecks.',
            example:
              'If the EDDUU API has plenty of CPU available but every request waits 700 ms for PostgreSQL, adding API replicas may not solve the real problem.',
          },
          {
            heading: '9. Saturation is a warning signal',
            explanation:
              'Saturation occurs when a resource approaches or reaches the amount of work it can handle. As resources saturate, queues and latency can increase rapidly.',
            example:
              'When an EDDUU database connection pool is exhausted, new requests may wait for an available connection and user-visible latency increases.',
          },
          {
            heading: '10. CPU is not the only resource',
            explanation:
              'Performance diagnosis must examine the complete request path. CPU, memory, disk I/O, network bandwidth, database connections, thread pools and external dependencies can all limit performance.',
            example:
              'An EDDUU service using only 40% CPU can still be slow if its database calls or downstream AI API calls are taking several seconds.',
          },
          {
            heading: '11. Measure the request path',
            explanation:
              'A distributed request should be broken into measurable operations so the team can determine where time is spent.',
            example:
              'An EDDUU dashboard request might spend 40 ms in the API, 200 ms in PostgreSQL, 100 ms in Profile Service and 500 ms waiting for an external recommendation service.',
          },
          {
            heading: '12. Optimize the largest constraint first',
            explanation:
              'Optimization should focus on the component contributing meaningfully to the observed problem. Improving an already-fast component may have little impact on total latency.',
            example:
              'Reducing a 10 ms operation to 5 ms is not useful if another dependency consumes 2 seconds on every request.',
          },
          {
            heading: '13. Performance has trade-offs',
            explanation:
              'Improving latency can require more memory, more infrastructure, caching, precomputation or architectural changes. The best solution balances performance, reliability and cost.',
            example:
              'EDDUU could cache frequently requested course data to reduce database load, but the team must decide how fresh that cached information needs to be.',
          },
          {
            heading: '14. Benchmarking needs realistic workloads',
            explanation:
              'A performance test is useful only when the workload resembles the behavior the production system must handle.',
            example:
              'Testing EDDUU with ten identical requests may not reveal the behavior of an examination workload involving thousands of concurrent students and different API operations.',
          },
          {
            heading: '15. Performance regression must be detectable',
            explanation:
              'Teams should track important performance indicators over time so that changes in code, infrastructure or traffic patterns can be identified before they become major incidents.',
            example:
              'If a new EDDUU release increases p95 dashboard latency from 300 ms to 900 ms, the regression should be visible through monitoring and deployment comparisons.',
          },
        ],
        realWorldConnection:
          'Production performance problems rarely have a single obvious cause. Engineering teams use measurements, traces, resource metrics and realistic workloads to identify the limiting component and verify that an optimization actually improves the system.',
        keyIdea:
          'Do not optimize what you assume is slow. Measure the request path, identify the bottleneck and optimize the constraint that materially affects the user experience.',
        recap: [
          'Latency measures how long an operation takes.',
          'Throughput measures completed work over time.',
          'Concurrency measures work in progress.',
          'Averages can hide slow requests.',
          'Percentiles expose the latency distribution and tail.',
          'Bottlenecks limit overall performance.',
          'Saturation can cause queues and rapidly increasing latency.',
          'CPU is only one possible performance constraint.',
          'Distributed tracing helps locate time spent across services.',
          'Realistic workloads are important for meaningful performance testing.',
          'Performance optimization should be guided by evidence.',
        ],
      },
    },

    {
      id: 'mc11-s02-performance-animation',
      type: 'animation',
      title: 'Watch One EDDUU Request Become Slow',
      description:
        'Follow a dashboard request through the EDDUU request path and identify where latency accumulates.',
      animation: {
        visual: 'distributed',
        opening:
          'A student opens the EDDUU dashboard. Follow the request through each dependency and watch how small delays can combine into a large user-visible latency.',
        parts: [
          {
            id: 'request-start',
            label: 'REQUEST START',
            explanation:
              'The browser sends a dashboard request to the EDDUU API.',
            example:
              'The student clicks Open Dashboard and the browser sends GET /dashboard.',
          },
          {
            id: 'api-processing',
            label: 'API PROCESSING',
            explanation:
              'The API performs authentication, validation and request coordination.',
            example:
              'The API spends 40 ms validating the request and preparing downstream calls.',
          },
          {
            id: 'database',
            label: 'DATABASE QUERY',
            explanation:
              'The API requests persistent learning information from PostgreSQL.',
            example:
              'A poorly optimized query takes 300 ms instead of the expected 30 ms.',
          },
          {
            id: 'profile-service',
            label: 'PROFILE SERVICE',
            explanation:
              'The dashboard requests profile information from another service.',
            example:
              'The Profile Service responds in 100 ms.',
          },
          {
            id: 'recommendation-service',
            label: 'RECOMMENDATION SERVICE',
            explanation:
              'The dashboard calls a recommendation dependency that may introduce additional latency.',
            example:
              'The Recommendation Service takes 800 ms to respond.',
          },
          {
            id: 'trace',
            label: 'DISTRIBUTED TRACE',
            explanation:
              'Tracing connects the operations into one request view so the team can compare their durations.',
            example:
              'The trace shows that the Recommendation Service consumes most of the request time.',
          },
          {
            id: 'optimization',
            label: 'OPTIMIZE THE BOTTLENECK',
            explanation:
              'The team targets the largest meaningful contributor instead of changing unrelated components.',
            example:
              'The team investigates recommendation latency before increasing API server count.',
          },
        ],
        closing:
          'Performance engineering turns "the application is slow" into a measurable statement about where time is actually being spent.',
      },
    },

    {
      id: 'mc11-s02-performance-simulation',
      type: 'simulation',
      title: 'Find the Performance Bottleneck',
      description:
        'Practice identifying the component that is most likely limiting an EDDUU request.',
      simulation: {
        instruction:
          'Match each EDDUU performance observation with the most appropriate diagnosis.',
        items: [
          {
            id: 'cpu-saturated',
            label: 'API CPU remains near 100% while request latency increases with traffic.',
            description:
              'The application instances are spending most of their available processing capacity.',
            correctTargetId: 'cpu-bottleneck',
          },
          {
            id: 'database-slow',
            label: 'API CPU is low but nearly every request spends 700 ms waiting for PostgreSQL.',
            description:
              'The database operation is consuming most of the request time.',
            correctTargetId: 'database-bottleneck',
          },
          {
            id: 'downstream-slow',
            label: 'The distributed trace shows 1.5 seconds waiting for Recommendation Service.',
            description:
              'A downstream dependency dominates the request latency.',
            correctTargetId: 'dependency-bottleneck',
          },
          {
            id: 'connection-pool',
            label: 'Requests queue while all database connections are already in use.',
            description:
              'New requests are waiting for an available database connection.',
            correctTargetId: 'connection-saturation',
          },
        ],
        targets: [
          {
            id: 'cpu-bottleneck',
            label: 'CPU BOTTLENECK',
            description:
              'Application processing capacity is limiting throughput.',
          },
          {
            id: 'database-bottleneck',
            label: 'DATABASE BOTTLENECK',
            description:
              'Database processing or queries are limiting request performance.',
          },
          {
            id: 'dependency-bottleneck',
            label: 'DOWNSTREAM DEPENDENCY',
            description:
              'A remote dependency dominates request latency.',
          },
          {
            id: 'connection-saturation',
            label: 'RESOURCE SATURATION',
            description:
              'A shared resource is exhausted and requests are waiting.',
          },
        ],
        successMessage:
          'Excellent. You identified the measured constraint instead of guessing from the application layer alone.',
        failureMessage:
          'Look at the evidence in each scenario. Identify which resource or dependency is actually consuming time or capacity.',
      },
    },

    {
      id: 'mc11-s02-performance-question',
      type: 'question',
      title: 'Performance Engineering Check',
      description:
        'Check whether you understand why percentiles and bottleneck analysis matter.',
      question: {
        id: 'mc11-s02-performance',
        type: 'single-choice',
        question:
          'An EDDUU dashboard has an average latency of 200 ms, but its p99 latency is 4 seconds. What does this most strongly indicate?',
        options: [
          {
            id: 'tail-latency',
            text:
              'A significant slow tail exists even though the average looks acceptable.',
            correct: true,
          },
          {
            id: 'perfect-performance',
            text:
              'The system has no meaningful performance problem.',
            correct: false,
          },
          {
            id: 'throughput-only',
            text:
              'The system is processing exactly 4 requests per second.',
            correct: false,
          },
          {
            id: 'cpu-proof',
            text:
              'The application CPU must be the bottleneck.',
            correct: false,
          },
        ],
        explanation:
          'The p99 value describes the slow end of the latency distribution. A 4-second p99 means that a small but important portion of requests are much slower than the average, so the team should investigate the tail.',
        hints: [
          'Average latency does not describe the entire distribution.',
          'p99 is specifically useful for understanding slow-tail behavior.',
        ],
      },
    },
  ],
}

