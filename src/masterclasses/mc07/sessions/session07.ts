import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session07: SessionDefinition = {
  id: 'mc07-session-07',
  number: 7,
  stage: 'production',
  title: 'Observability, Deployment & Production Operations',
  objective:
    'Learn how architects and engineering leaders design systems that can be deployed safely, observed in production, diagnosed during incidents and operated reliably over time.',

  experiences: [
    {
      id: 'mc07-s07-operations-lesson',
      type: 'lesson',
      title: 'Architecture Does Not End at Deployment',
      description:
        'Understand how observability, deployment strategies, health checks, monitoring and incident response turn an architecture into an operable production system.',

      lesson: {
        opening:
          'A system is not finished when the code reaches production. A production architecture must help the team understand what is happening, detect problems, deploy changes safely and recover when something goes wrong.',

        sections: [
          {
            heading: '1. Observability answers what is happening',
            explanation:
              'Observability gives engineers enough information to understand the internal state of a system from its external outputs. The most common signals are metrics, logs and traces.',
            example:
              'When an API becomes slow, the team can use request metrics, application logs and distributed traces to determine where time is being spent.',
          },
          {
            heading: '2. Metrics show measurable behaviour',
            explanation:
              'Metrics are numerical measurements collected over time. They are useful for understanding traffic, latency, errors, resource usage and business or system health.',
            example:
              'An API dashboard can show request rate, error percentage, CPU usage and percentile response latency.',
          },
          {
            heading: '3. Logs provide event detail',
            explanation:
              'Logs record events that occur inside an application or infrastructure component. Useful logs provide enough context to investigate a problem without exposing unnecessary sensitive information.',
            example:
              'A service can log that a payment request failed, including a request identifier and error category without writing sensitive payment information into the log.',
          },
          {
            heading: '4. Traces connect distributed requests',
            explanation:
              'A distributed request may pass through several services. Tracing allows engineers to follow that request across those boundaries and identify where latency or failure occurs.',
            example:
              'A student request may travel from the frontend to an API, database and AI service. A trace can show which dependency added the most latency.',
          },
          {
            heading: '5. Health checks test service readiness',
            explanation:
              'Health checks help platforms determine whether an application instance is alive and whether it is ready to receive traffic. These concepts are useful when deploying or replacing instances.',
            example:
              'A new API instance can receive production traffic only after its required dependencies and application initialization are ready.',
          },
          {
            heading: '6. Deployment is a risk-management problem',
            explanation:
              'Every production deployment introduces the possibility of failure. Good deployment architecture reduces the size of that risk and makes recovery predictable.',
            example:
              'Instead of replacing every application instance simultaneously, a team can gradually introduce a new version and observe its behaviour.',
          },
          {
            heading: '7. Rolling deployments replace instances gradually',
            explanation:
              'A rolling deployment updates a portion of instances at a time. This can reduce deployment disruption while allowing the team to monitor the new version.',
            example:
              'A platform running ten API instances may update two at a time while keeping the remaining instances available.',
          },
          {
            heading: '8. Canary deployments reduce blast radius',
            explanation:
              'A canary deployment exposes a new version to a small portion of traffic first. If metrics remain healthy, the rollout can expand. If not, the team can stop the rollout before affecting everyone.',
            example:
              'One percent of students may initially use a new API version while the team watches error rate and latency.',
          },
          {
            heading: '9. Rollback must be possible',
            explanation:
              'A deployment strategy should define how the team returns to a known working version when the new release causes unacceptable behaviour.',
            example:
              'If a new release increases assessment submission failures, the deployment pipeline can restore the previous application version.',
          },
          {
            heading: '10. Alerts should represent actionable problems',
            explanation:
              'An alert should indicate a condition that requires human or automated action. Too many noisy alerts cause teams to ignore important signals.',
            example:
              'A sustained increase in failed assessment submissions is more actionable than an alert for every single transient request failure.',
          },
          {
            heading: '11. Incident response needs ownership',
            explanation:
              'During an incident, teams need clear roles, communication and decision-making. Architecture should provide the information needed to understand impact and recover quickly.',
            example:
              'An incident lead coordinates the response while engineers investigate the failing dependency and product leaders communicate customer impact.',
          },
          {
            heading: '12. Production architecture is a continuous system',
            explanation:
              'Real systems evolve. Traffic changes, dependencies change, software versions change and new failure modes appear. Architecture therefore requires continuous measurement and improvement.',
            example:
              'A platform may begin with a modular application and later introduce separate services when traffic, team ownership or reliability requirements create a clear need.',
          },
        ],

        realWorldConnection:
          'Engineering leaders are responsible not only for whether a system can be built, but whether teams can safely operate it after launch. Production readiness therefore includes monitoring, deployment safety, rollback and incident response.',

        keyIdea:
          'A production-ready architecture makes system behaviour visible, limits deployment risk and gives the team a predictable path to detect, diagnose and recover from failures.',

        recap: [
          'Observability combines useful metrics, logs and traces.',
          'Metrics show measurable system behaviour.',
          'Logs provide detailed event context.',
          'Traces connect requests across distributed components.',
          'Health checks support safe traffic management.',
          'Deployment strategies should reduce blast radius.',
          'Canary and rolling deployments can reduce release risk.',
          'Rollback must be planned before a risky release.',
          'Alerts should be actionable rather than noisy.',
          'Incident response requires ownership and communication.',
        ],
      },
    },

    {
      id: 'mc07-s07-operations-animation',
      type: 'animation',
      title: 'Inside a Production Incident',
      description:
        'Visualize how observability and deployment controls help a team detect and recover from a production problem.',

      animation: {
        visual: 'production-ai',
        opening:
          'Imagine a control room receiving signals from a large production system. The team needs enough information to detect the problem, locate it and decide what action to take.',

        parts: [
          {
            id: 'traffic',
            label: 'REQUESTS',
            explanation:
              'Users continue sending traffic to the production system.',
            example:
              'Students continue submitting assessment requests.',
          },
          {
            id: 'metrics',
            label: 'METRICS',
            explanation:
              'Metrics reveal changes in latency, traffic and error rates.',
            example:
              'The error rate suddenly rises after a deployment.',
          },
          {
            id: 'logs',
            label: 'LOGS',
            explanation:
              'Application events provide detailed information about failures.',
            example:
              'Logs identify a specific dependency timeout.',
          },
          {
            id: 'trace',
            label: 'TRACE',
            explanation:
              'A trace connects the request across multiple components.',
            example:
              'The trace shows that the database call is consuming most of the request time.',
          },
          {
            id: 'rollback',
            label: 'ROLLBACK',
            explanation:
              'If the new release is responsible, the team can return to a known working version.',
            example:
              'The previous application version is restored while engineers investigate the release.',
          },
        ],

        closing:
          'Production architecture is successful when the team can see what is happening, make a controlled decision and recover without turning one failure into a larger outage.',
      },
    },

    {
      id: 'mc07-s07-operations-simulation',
      type: 'simulation',
      title: 'Match Production Signals to Actions',
      description:
        'Connect production symptoms with the operational response that best addresses them.',

      simulation: {
        instruction:
          'Match each production situation with the most appropriate operational response.',

        items: [
          {
            id: 'latency',
            label: 'The team needs to understand where request time is being spent across services.',
            description:
              'The request crosses multiple distributed components.',
            correctTargetId: 'trace-target',
          },
          {
            id: 'release',
            label: 'A new release should initially affect only a small percentage of users.',
            description:
              'The team wants to limit deployment blast radius.',
            correctTargetId: 'canary-target',
          },
          {
            id: 'failure',
            label: 'The new version causes unacceptable production errors.',
            description:
              'A previous version is known to work.',
            correctTargetId: 'rollback-target',
          },
          {
            id: 'signal',
            label: 'The team needs numerical information about request rate and errors.',
            description:
              'The information should be tracked over time.',
            correctTargetId: 'metrics-target',
          },
        ],

        targets: [
          {
            id: 'trace-target',
            label: 'DISTRIBUTED TRACE',
            description:
              'Follow a request across multiple components to locate latency or failure.',
          },
          {
            id: 'canary-target',
            label: 'CANARY DEPLOYMENT',
            description:
              'Expose a new version to a small portion of traffic before expanding the rollout.',
          },
          {
            id: 'rollback-target',
            label: 'ROLLBACK',
            description:
              'Return production to a previously known working version.',
          },
          {
            id: 'metrics-target',
            label: 'METRICS',
            description:
              'Track numerical system behaviour such as traffic, errors and latency.',
          },
        ],

        successMessage:
          'Correct. Production operations work best when each signal and action has a clear purpose.',

        failureMessage:
          'First identify whether the problem is request tracing, deployment exposure, release recovery or numerical system measurement.',
      },
    },

    {
      id: 'mc07-s07-operations-question',
      type: 'question',
      title: 'Production Operations Check',
      description:
        'Check whether you can choose an appropriate deployment strategy.',

      question: {
        id: 'mc07-s07-operations',
        type: 'single-choice',
        question:
          'A team wants to release a new API version to a very small percentage of users first and expand the rollout only if production metrics remain healthy. Which strategy best matches this requirement?',
        options: [
          {
            id: 'canary',
            text:
              'Use a canary deployment and gradually increase traffic to the new version.',
            correct: true,
          },
          {
            id: 'big-bang',
            text:
              'Replace every production instance with the new version at the same time.',
            correct: false,
          },
          {
            id: 'retry',
            text:
              'Increase request retries and treat that as the deployment strategy.',
            correct: false,
          },
          {
            id: 'cache',
            text:
              'Add a cache and assume deployment risk has been removed.',
            correct: false,
          },
        ],

        explanation:
          'A canary deployment limits the initial blast radius by exposing the new version to a small portion of traffic. The team can monitor behaviour before expanding the rollout.',
      },
    },
  ],
}