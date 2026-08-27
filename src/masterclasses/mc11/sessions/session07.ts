import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session07: SessionDefinition = {
  id: 'mc11-session-07',
  number: 7,
  stage: 'discover',
  title: 'Capacity Planning & Performance Testing - Proving the System Can Scale',
  objective:
    'Learn how to estimate capacity, model traffic, design realistic performance tests, identify bottlenecks, define safe headroom and make scaling decisions using measurable SLO and cost information.',
  experiences: [
    {
      id: 'mc11-s07-capacity-lesson',
      type: 'lesson',
      title: 'How Do We Know How Much Capacity We Need?',
      description:
        'Learn how engineering teams turn expected traffic into measurable infrastructure capacity and validate those assumptions through controlled testing.',
      lesson: {
        opening:
          'Imagine EDDUU is preparing for a national examination event. On a normal day, the platform handles 500 requests per second, but during the examination thousands of students may access dashboards, submit answers and retrieve results simultaneously. The team cannot safely say "the system should be fine." It needs to estimate demand, measure current capacity, test realistic workloads and maintain enough headroom for unexpected traffic.',
        sections: [
          {
            heading: '1. Capacity means ability to handle workload',
            explanation:
              'Capacity is the amount of workload a system can handle while remaining within its required performance and reliability boundaries.',
            example:
              'If an EDDUU API can safely handle 2,000 requests per second while maintaining its latency SLO, that becomes a useful capacity measurement.',
          },
          {
            heading: '2. Start with workload estimation',
            explanation:
              'Capacity planning begins by understanding expected users, requests, data volume, concurrency and traffic patterns.',
            example:
              'EDDUU estimates active students, average requests per student and expected examination-day traffic before selecting infrastructure capacity.',
          },
          {
            heading: '3. Peak traffic matters',
            explanation:
              'Average traffic can hide short periods of extreme demand. Capacity must account for meaningful peaks rather than only daily averages.',
            example:
              'EDDUU may average 300 requests per second but experience 2,000 requests per second during an examination result release.',
          },
          {
            heading: '4. Requests per second is not enough',
            explanation:
              'Different requests consume different amounts of CPU, memory, database work and network resources. Capacity must consider workload composition.',
            example:
              'A simple course metadata request may consume far fewer resources than an EDDUU analytics request involving multiple database queries.',
          },
          {
            heading: '5. Concurrency is important',
            explanation:
              'Concurrent users and requests represent work that is simultaneously in progress and can create pressure on application workers, connections and downstream dependencies.',
            example:
              'Thousands of students can have requests in flight at the same time during an EDDUU examination.',
          },
          {
            heading: '6. Estimate service capacity',
            explanation:
              'A practical first approximation is to measure how much workload one healthy service instance can handle under the required latency and error-rate targets.',
            example:
              'If one EDDUU API instance safely handles 200 requests per second, a 1,000 requests-per-second target requires at least five equivalent instances before adding safety headroom.',
          },
          {
            heading: '7. Headroom prevents operating at the limit',
            explanation:
              'Running continuously at maximum measured capacity leaves little room for traffic bursts, failures, workload variation or resource degradation.',
            example:
              'EDDUU may intentionally provision capacity above expected peak demand so a sudden traffic increase does not immediately push services into saturation.',
          },
          {
            heading: '8. Capacity is constrained by the weakest dependency',
            explanation:
              'An application may scale horizontally while a database, cache or downstream API remains the limiting resource.',
            example:
              'Adding more EDDUU API replicas does not help if PostgreSQL connections are already exhausted.',
          },
          {
            heading: '9. Benchmarking establishes a baseline',
            explanation:
              'Before optimization or scaling changes, teams need baseline measurements for latency, throughput, errors and resource utilization.',
            example:
              'EDDUU records p50, p95, p99 latency and error rate before introducing a new caching strategy.',
          },
          {
            heading: '10. Load testing',
            explanation:
              'Load testing applies an expected or planned workload to determine how the system behaves under normal target conditions.',
            example:
              'EDDUU generates a realistic examination-day workload at the expected peak traffic level.',
          },
          {
            heading: '11. Stress testing',
            explanation:
              'Stress testing deliberately pushes a system beyond its expected operating level to understand its limits and failure behavior.',
            example:
              'EDDUU gradually increases traffic beyond the expected examination peak until latency, errors or resource saturation reveal the system boundary.',
          },
          {
            heading: '12. Spike testing',
            explanation:
              'Spike testing evaluates how a system responds to a sudden and significant increase or decrease in workload.',
            example:
              'EDDUU receives a sudden surge when examination results are published and thousands of students open the result page within seconds.',
          },
          {
            heading: '13. Soak testing',
            explanation:
              'Soak testing runs a sustained workload for an extended period to identify problems such as memory leaks, resource exhaustion or gradual degradation.',
            example:
              'EDDUU runs a representative workload for several hours to verify that memory usage and latency remain stable.',
          },
          {
            heading: '14. Test realistic user behavior',
            explanation:
              'A useful performance test models actual request patterns instead of generating identical artificial requests.',
            example:
              'An EDDUU examination workload can include login, dashboard access, question retrieval, answer submission and result requests with realistic proportions.',
          },
          {
            heading: '15. Ramp traffic gradually',
            explanation:
              'Increasing workload in controlled stages helps identify the point where latency or errors begin to deteriorate.',
            example:
              'EDDUU can test 500, 1,000, 1,500 and 2,000 requests per second instead of immediately jumping to an extreme load.',
          },
          {
            heading: '16. Find the saturation point',
            explanation:
              'The saturation point is where additional workload causes rapidly increasing queues, latency or errors because an important resource is reaching its limit.',
            example:
              'At 2,200 EDDUU requests per second, database connections become saturated and p99 latency rises sharply.',
          },
          {
            heading: '17. Autoscaling uses signals',
            explanation:
              'Autoscaling adjusts resource capacity based on measured signals such as CPU, memory, request rate or application-specific metrics.',
            example:
              'EDDUU can increase Learning Service replicas when request load and resource utilization exceed defined thresholds.',
          },
          {
            heading: '18. CPU-based autoscaling has limits',
            explanation:
              'CPU is useful but not always the best indicator of application pressure. A service can be bottlenecked by database connections, queues or external dependencies while CPU remains moderate.',
            example:
              'EDDUU API CPU is only 50%, but all database connections are occupied and requests are waiting.',
          },
          {
            heading: '19. Scaling too late causes instability',
            explanation:
              'If autoscaling starts only after severe saturation occurs, new instances may arrive after queues and latency have already become unacceptable.',
            example:
              'EDDUU should scale before the examination traffic pushes the service beyond its safe operating range.',
          },
          {
            heading: '20. Scaling too early costs money',
            explanation:
              'Excessive capacity increases infrastructure cost. Scaling policies therefore need to balance responsiveness with resource efficiency.',
            example:
              'Running ten large EDDUU instances all day to prepare for a short peak may be more expensive than controlled autoscaling.',
          },
          {
            heading: '21. SLOs define acceptable behavior',
            explanation:
              'Service Level Objectives specify measurable targets such as latency, availability or error rates that help determine whether capacity is sufficient.',
            example:
              'EDDUU may define a dashboard API SLO requiring p95 latency below a selected threshold during normal operating conditions.',
          },
          {
            heading: '22. Capacity should be tied to SLOs',
            explanation:
              'A system is not adequately sized simply because it can process a certain number of requests. It must process them while remaining within required reliability and performance targets.',
            example:
              'If EDDUU handles 3,000 requests per second but p99 latency violates the SLO, that throughput cannot be treated as safe production capacity.',
          },
          {
            heading: '23. Failure capacity matters',
            explanation:
              'Production capacity planning should consider the loss of infrastructure components, not only healthy-state traffic.',
            example:
              'EDDUU should understand whether the remaining API replicas can continue serving critical traffic if one availability zone becomes unavailable.',
          },
          {
            heading: '24. Capacity planning is continuous',
            explanation:
              'Traffic, data volume, software behavior and infrastructure characteristics change over time. Capacity assumptions therefore need periodic validation.',
            example:
              'EDDUU repeats capacity tests after major feature launches, architectural changes and significant traffic growth.',
          },
          {
            heading: '25. Cost is part of capacity planning',
            explanation:
              'The best capacity strategy balances performance, reliability and infrastructure cost rather than maximizing raw capacity.',
            example:
              'EDDUU may compare more application replicas, better database optimization and caching before choosing the most cost-effective solution.',
          },
        ],
        realWorldConnection:
          'Capacity planning turns uncertainty about future traffic into measurable engineering decisions. Mature teams establish workload assumptions, benchmark current capacity, test expected and extreme conditions, identify bottlenecks and continuously adjust infrastructure using SLO and cost information.',
        keyIdea:
          'Do not guess whether a system can handle future traffic. Estimate the workload, measure current capacity, test realistic conditions and maintain enough headroom for expected peaks and failures.',
        recap: [
          'Capacity is the workload a system can safely handle.',
          'Peak traffic is often more important than average traffic.',
          'Different requests have different resource costs.',
          'Concurrency represents work in progress.',
          'Capacity estimates should come from measured service behavior.',
          'Headroom protects against bursts and failures.',
          'The weakest dependency can become the system bottleneck.',
          'Load testing validates expected workload.',
          'Stress testing discovers behavior beyond expected limits.',
          'Spike testing evaluates sudden traffic changes.',
          'Soak testing reveals long-duration degradation.',
          'Realistic workload composition matters.',
          'Autoscaling should use meaningful signals.',
          'CPU alone may not reveal the real bottleneck.',
          'SLOs define acceptable performance and reliability.',
          'Failure scenarios should be included in capacity planning.',
          'Capacity planning is a continuous process.',
          'Cost must be considered alongside performance and reliability.',
        ],
      },
    },

    {
      id: 'mc11-s07-capacity-animation',
      type: 'animation',
      title: 'Watch EDDUU Handle an Examination-Day Spike',
      description:
        'Visualize traffic increasing from normal workload to peak demand and observe how capacity, autoscaling and bottlenecks interact.',
      animation: {
        visual: 'distributed',
        opening:
          'EDDUU is preparing for examination results. Follow traffic as thousands of students arrive and watch the platform respond.',
        parts: [
          {
            id: 'normal-load',
            label: 'NORMAL LOAD',
            explanation:
              'The platform operates within its normal daily workload.',
            example:
              'EDDUU processes approximately 500 requests per second.',
          },
          {
            id: 'traffic-ramp',
            label: 'TRAFFIC RAMP',
            explanation:
              'Request volume begins increasing as more students access the platform.',
            example:
              'Traffic rises from 500 to 1,000 and then 1,500 requests per second.',
          },
          {
            id: 'autoscale',
            label: 'AUTOSCALING',
            explanation:
              'Additional application capacity is created when scaling signals cross defined thresholds.',
            example:
              'EDDUU increases Learning Service replicas as request pressure grows.',
          },
          {
            id: 'headroom',
            label: 'HEADROOM',
            explanation:
              'Available spare capacity absorbs additional traffic without immediately causing saturation.',
            example:
              'EDDUU keeps capacity above the expected baseline before the peak arrives.',
          },
          {
            id: 'bottleneck',
            label: 'DATABASE BOTTLENECK',
            explanation:
              'Application scaling eventually stops helping when PostgreSQL becomes the limiting dependency.',
            example:
              'Database connections reach their safe limit while API CPU remains moderate.',
          },
          {
            id: 'slo-breach',
            label: 'SLO BREACH',
            explanation:
              'Latency and error metrics cross the defined acceptable boundaries.',
            example:
              'EDDUU p99 latency rises above the production target during extreme traffic.',
          },
          {
            id: 'recovery',
            label: 'CONTROLLED RECOVERY',
            explanation:
              'The platform protects critical workloads and returns toward stable operation as traffic falls or capacity is adjusted.',
            example:
              'Traffic drops after the initial results spike and EDDUU scales back excess application capacity.',
          },
        ],
        closing:
          'Capacity planning is not simply adding servers. The complete system must be tested so the team knows where the real limit exists and what happens when that limit is reached.',
      },
    },

    {
      id: 'mc11-s07-capacity-simulation',
      type: 'simulation',
      title: 'Choose the Right Performance Test',
      description:
        'Practice selecting the appropriate testing strategy for different EDDUU capacity questions.',
      simulation: {
        instruction:
          'Match each EDDUU testing scenario with the type of performance test that best answers the question.',
        items: [
          {
            id: 'expected-peak',
            label:
              'EDDUU wants to verify that the system handles its expected examination-day traffic.',
            description:
              'The team wants to validate normal planned peak workload.',
            correctTargetId: 'load-test',
          },
          {
            id: 'beyond-limit',
            label:
              'EDDUU wants to discover how the platform behaves when traffic exceeds the planned operating level.',
            description:
              'The team wants to understand system limits and failure behavior.',
            correctTargetId: 'stress-test',
          },
          {
            id: 'sudden-spike',
            label:
              'Thousands of students may arrive within seconds when results are published.',
            description:
              'The workload changes abruptly rather than increasing gradually.',
            correctTargetId: 'spike-test',
          },
          {
            id: 'long-duration',
            label:
              'EDDUU wants to identify memory leaks or gradual degradation during several hours of sustained workload.',
            description:
              'The test focuses on stability over an extended period.',
            correctTargetId: 'soak-test',
          },
          {
            id: 'capacity-limit',
            label:
              'The team wants to find the point where latency and errors begin to increase rapidly.',
            description:
              'The objective is to discover the saturation boundary.',
            correctTargetId: 'capacity-discovery',
          },
        ],
        targets: [
          {
            id: 'load-test',
            label: 'LOAD TEST',
            description:
              'Validate expected or planned workload behavior.',
          },
          {
            id: 'stress-test',
            label: 'STRESS TEST',
            description:
              'Push beyond expected workload to understand system limits.',
          },
          {
            id: 'spike-test',
            label: 'SPIKE TEST',
            description:
              'Evaluate sudden workload increases or decreases.',
          },
          {
            id: 'soak-test',
            label: 'SOAK TEST',
            description:
              'Evaluate stability during sustained workload.',
          },
          {
            id: 'capacity-discovery',
            label: 'CAPACITY DISCOVERY',
            description:
              'Find the workload boundary where performance begins to degrade.',
          },
        ],
        successMessage:
          'Excellent. You matched each performance question with the test designed to answer it.',
        failureMessage:
          'Focus on the testing objective: expected load, beyond-limit behavior, sudden spikes, long-duration stability or finding the saturation boundary.',
      },
    },

    {
      id: 'mc11-s07-capacity-question',
      type: 'question',
      title: 'Capacity Planning Check',
      description:
        'Check whether you understand why measured capacity and SLOs must be considered together.',
      question: {
        id: 'mc11-s07-capacity',
        type: 'single-choice',
        question:
          'An EDDUU API can technically process 3,000 requests per second, but at that traffic level its p99 latency violates the production SLO. How should the team treat 3,000 requests per second?',
        options: [
          {
            id: 'not-safe-capacity',
            text:
              'It should not be considered safe production capacity because the required SLO is already being violated.',
            correct: true,
          },
          {
            id: 'safe-capacity',
            text:
              'It is automatically safe capacity because the API is still returning responses.',
            correct: false,
          },
          {
            id: 'ignore-latency',
            text:
              'Ignore latency because throughput is the only metric that matters.',
            correct: false,
          },
          {
            id: 'more-traffic',
            text:
              'Increase traffic further until the service stops responding completely.',
            correct: false,
          },
        ],
        explanation:
          'Production capacity must be defined against acceptable performance and reliability objectives. If the SLO is violated, the measured throughput is beyond the safe operating boundary even if the service continues returning responses.',
        hints: [
          'Capacity is not simply maximum throughput.',
          'SLOs define the acceptable operating boundary.',
        ],
      },
    },
  ],
}
