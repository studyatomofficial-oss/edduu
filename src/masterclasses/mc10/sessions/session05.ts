import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc10Session05: SessionDefinition = {
  id: 'mc10-session-05',
  number: 5,
  stage: 'discover',
  title: 'Reliability & Failure Handling - Designing for What Goes Wrong',
  objective:
    'Understand how distributed systems detect, contain and recover from failures using timeouts, retries, backoff, idempotency, circuit breakers, bulkheads, health checks and graceful degradation.',
  experiences: [
    {
      id: 'mc10-s05-reliability-lesson',
      type: 'lesson',
      title: 'Failure Is Part of the Architecture',
      description:
        'Learn how reliable distributed systems limit the impact of slow, failed or overloaded dependencies.',
      lesson: {
        opening:
          'In a distributed system, failure is not an unusual event. A service can become slow, a network connection can fail, a dependency can become overloaded, or a deployment can introduce an unexpected problem. Reliable architecture assumes these events can happen.',
        sections: [
          {
            heading: '1. Start with failure boundaries',
            explanation:
              'A failure boundary is a point where one component can become unavailable without necessarily bringing down every other component. Good architecture limits the blast radius of a failure.',
            example:
              'If the EDDUU Recommendation Service fails, the core learning experience should continue when recommendations are not required for the current request.',
          },
          {
            heading: '2. Timeouts',
            explanation:
              'A timeout defines how long a caller will wait for a remote operation. Without timeouts, slow dependencies can consume threads, connections and other resources for too long.',
            example:
              'The EDDUU Dashboard can stop waiting for a non-critical Analytics Service after a defined period.',
          },
          {
            heading: '3. Retries',
            explanation:
              'A retry repeats an operation after a temporary failure. Retries can help with transient network problems, but excessive retries can increase load on an already unhealthy service.',
            example:
              'A temporary connection failure may justify a small number of retries before the EDDUU API returns a controlled failure.',
          },
          {
            heading: '4. Exponential backoff',
            explanation:
              'Backoff increases the delay between retry attempts. Exponential backoff reduces immediate pressure on a struggling dependency.',
            example:
              'Instead of retrying immediately three times, an EDDUU client can wait progressively longer between attempts.',
          },
          {
            heading: '5. Jitter',
            explanation:
              'Jitter adds controlled randomness to retry delays. This prevents many clients from retrying at exactly the same time and creating a synchronized traffic spike.',
            example:
              'Thousands of EDDUU workers can use slightly different retry delays rather than all retrying simultaneously.',
          },
          {
            heading: '6. Idempotency',
            explanation:
              'Idempotency allows an operation to be repeated without producing an unintended duplicate business effect. This is especially important when clients or messaging systems may retry work.',
            example:
              'An EDDUU payment operation can use an idempotency key so a repeated request does not create a second transaction.',
          },
          {
            heading: '7. Circuit breakers',
            explanation:
              'A circuit breaker temporarily stops calls to a dependency after repeated failures. This gives the failing dependency time to recover and protects the caller from repeated slow or failed requests.',
            example:
              'If the EDDUU Recommendation Service repeatedly fails, the API can temporarily stop calling it and use a fallback response.',
          },
          {
            heading: '8. Circuit states',
            explanation:
              'A circuit breaker commonly moves between closed, open and half-open states. Closed allows normal traffic, open blocks calls, and half-open permits controlled test requests to determine whether recovery has occurred.',
            example:
              'After an outage, the EDDUU API can allow a limited test request before fully restoring Recommendation Service traffic.',
          },
          {
            heading: '9. Bulkheads',
            explanation:
              'Bulkheads isolate resources so one overloaded dependency cannot consume everything required by unrelated workloads.',
            example:
              'EDDUU can maintain separate connection or worker limits for different downstream workloads.',
          },
          {
            heading: '10. Graceful degradation',
            explanation:
              'Graceful degradation means providing a reduced but useful experience when a non-critical capability is unavailable.',
            example:
              'If recommendations are unavailable, EDDUU can still display courses and learning progress without recommendation content.',
          },
          {
            heading: '11. Health checks',
            explanation:
              'Health checks provide signals about whether a service is alive and whether it is ready to receive traffic. Different checks can represent process health and dependency readiness.',
            example:
              'A new EDDUU service instance should not receive production traffic until it is ready to serve requests correctly.',
          },
          {
            heading: '12. Load shedding',
            explanation:
              'Load shedding intentionally rejects or delays lower-priority work when the system is overloaded so critical operations can remain available.',
            example:
              'During extreme traffic, EDDUU may preserve login and core learning operations while temporarily limiting expensive analytics requests.',
          },
          {
            heading: '13. Failure isolation',
            explanation:
              'Failure isolation prevents one component from spreading its failure to other components. Isolation can be achieved through resource limits, queues, timeouts and dependency boundaries.',
            example:
              'A slow reporting workload should not consume every API worker required for student learning requests.',
          },
          {
            heading: '14. Recovery is part of reliability',
            explanation:
              'Reliability is not only about preventing failures. The system also needs controlled recovery when a component becomes healthy again.',
            example:
              'After a dependency recovers, traffic can gradually return rather than immediately sending the full production load.',
          },
        ],
        realWorldConnection:
          'Production distributed systems combine multiple reliability controls because no single mechanism solves every failure mode.',
        keyIdea:
          'Reliable distributed architecture limits waiting, controls retries, isolates failures and provides useful behavior during dependency outages.',
        recap: [
          'Timeouts prevent indefinite waiting.',
          'Retries can recover transient failures.',
          'Backoff reduces retry pressure.',
          'Jitter prevents synchronized retry spikes.',
          'Idempotency protects repeated business operations.',
          'Circuit breakers contain repeated dependency failures.',
          'Bulkheads isolate resource consumption.',
          'Graceful degradation preserves useful functionality.',
          'Health checks control traffic to unhealthy instances.',
          'Load shedding protects critical operations during overload.',
        ],
      },
    },

    {
      id: 'mc10-s05-reliability-animation',
      type: 'animation',
      title: 'Watch a Dependency Failure Get Contained',
      description:
        'Follow an EDDUU request while a downstream service becomes unhealthy and observe how reliability controls protect the main platform.',
      animation: {
        visual: 'architecture',
        opening:
          'A dependency starts failing. The goal is not to pretend the failure does not exist. The goal is to prevent one failure from becoming a platform-wide outage.',
        parts: [
          {
            id: 'healthy-request',
            label: 'NORMAL REQUEST',
            explanation:
              'The EDDUU API normally calls a downstream service and receives a response.',
            example:
              'The Dashboard API requests recommendation data.',
          },
          {
            id: 'slow-dependency',
            label: 'DEPENDENCY SLOWS',
            explanation:
              'The downstream service becomes slow and starts consuming more caller resources.',
            example:
              'Recommendation responses begin exceeding the expected response time.',
          },
          {
            id: 'timeout-control',
            label: 'TIMEOUT',
            explanation:
              'The caller stops waiting after the configured limit.',
            example:
              'The Dashboard API stops waiting instead of holding the request indefinitely.',
          },
          {
            id: 'retry-backoff',
            label: 'CONTROLLED RETRY',
            explanation:
              'A limited retry with backoff can address a transient failure without creating uncontrolled traffic.',
            example:
              'The API retries only when the operation is safe and the failure appears transient.',
          },
          {
            id: 'circuit-open',
            label: 'CIRCUIT OPEN',
            explanation:
              'Repeated failures cause the circuit breaker to stop sending normal traffic to the unhealthy dependency.',
            example:
              'Recommendation calls are temporarily blocked.',
          },
          {
            id: 'fallback',
            label: 'GRACEFUL FALLBACK',
            explanation:
              'The platform continues with a reduced experience when the failed capability is non-critical.',
            example:
              'EDDUU displays the learning dashboard without recommendation content.',
          },
          {
            id: 'recovery-test',
            label: 'RECOVERY TEST',
            explanation:
              'A controlled request tests whether the dependency has recovered before normal traffic returns.',
            example:
              'The circuit moves toward recovery after a successful test request.',
          },
        ],
        closing:
          'Reliability controls work together: timeout the wait, control retries, isolate repeated failure and preserve the core user experience.',
      },
    },

    {
      id: 'mc10-s05-reliability-simulation',
      type: 'simulation',
      title: 'Contain the EDDUU Dependency Failure',
      description:
        'Match each failure condition with the reliability control that best limits its impact.',
      simulation: {
        instruction:
          'Choose the reliability mechanism that best addresses each situation.',
        items: [
          {
            id: 'indefinite-wait',
            label:
              'A downstream service does not respond and requests keep waiting.',
            description:
              'Caller resources are being held for too long.',
            correctTargetId: 'timeout',
          },
          {
            id: 'retry-storm',
            label:
              'Thousands of workers retry a failed dependency at the same moment.',
            description:
              'Synchronized retries are creating another traffic spike.',
            correctTargetId: 'backoff-jitter',
          },
          {
            id: 'repeated-failure',
            label:
              'A dependency has failed repeatedly and every request continues calling it.',
            description:
              'The caller needs to stop repeatedly hitting the unhealthy dependency.',
            correctTargetId: 'circuit-breaker',
          },
          {
            id: 'noncritical-outage',
            label:
              'A recommendation service is unavailable but the main learning experience can continue.',
            description:
              'The platform should preserve the core workflow.',
            correctTargetId: 'fallback',
          },
          {
            id: 'duplicate-operation',
            label:
              'A client may send the same business request more than once.',
            description:
              'Repeated processing must not create an unintended duplicate effect.',
            correctTargetId: 'idempotency',
          },
        ],
        targets: [
          {
            id: 'timeout',
            label: 'TIMEOUT',
            description:
              'Bound the maximum waiting time.',
          },
          {
            id: 'backoff-jitter',
            label: 'BACKOFF + JITTER',
            description:
              'Spread retry attempts over time.',
          },
          {
            id: 'circuit-breaker',
            label: 'CIRCUIT BREAKER',
            description:
              'Temporarily stop calls to a repeatedly failing dependency.',
          },
          {
            id: 'fallback',
            label: 'GRACEFUL FALLBACK',
            description:
              'Preserve useful functionality without the non-critical dependency.',
          },
          {
            id: 'idempotency',
            label: 'IDEMPOTENCY',
            description:
              'Make safe repetition possible for supported operations.',
          },
        ],
        successMessage:
          'Excellent. Reliable systems combine multiple controls because each one addresses a different failure mode.',
        failureMessage:
          'First identify the failure: waiting, retry pressure, repeated dependency failure, non-critical outage or duplicate processing.',
      },
    },

    {
      id: 'mc10-s05-reliability-question',
      type: 'question',
      title: 'Reliability Architecture Check',
      description:
        'Check whether you can choose a reliability mechanism based on the failure mode.',
      question: {
        id: 'mc10-s05-reliability',
        type: 'single-choice',
        question:
          'What is the primary purpose of a circuit breaker in a distributed system?',
        options: [
          {
            id: 'stop-repeated-calls',
            text:
              'Temporarily stop calls to a repeatedly failing dependency and protect the caller.',
            correct: true,
          },
          {
            id: 'increase-retries',
            text:
              'Continuously retry the dependency until it becomes healthy.',
            correct: false,
          },
          {
            id: 'store-data',
            text:
              'Persist all application data inside the circuit breaker.',
            correct: false,
          },
          {
            id: 'remove-timeouts',
            text:
              'Remove timeout controls so requests can wait longer.',
            correct: false,
          },
        ],
        explanation:
          'A circuit breaker limits repeated calls to an unhealthy dependency. It helps contain failure and gives the dependency an opportunity to recover.',
        hints: [
          'Think about what happens when a dependency keeps failing.',
          'The circuit should protect the caller rather than increase pressure.',
        ],
      },
    },
  ],
}