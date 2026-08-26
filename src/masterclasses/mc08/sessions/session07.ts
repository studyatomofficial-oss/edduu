import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session07: SessionDefinition = {
  id: 'mc08-session-07',
  number: 7,
  stage: 'production',
  title: 'Cloud Production Operations & Cost Management',
  objective:
    'Learn how to operate cloud systems in production using observability, reliability objectives, safe deployments, incident response, infrastructure automation and disciplined cost management.',
  experiences: [
    {
      id: 'mc08-s07-production-lesson',
      type: 'lesson',
      title: 'Running the Cloud System After Launch',
      description:
        'Move from designing infrastructure to operating a live production platform safely, measurably and economically.',
      lesson: {
        opening:
          'A cloud architecture is not finished when deployment succeeds. Production creates continuous operational questions: Is the service healthy? Are users experiencing latency? Did the latest release introduce errors? Is the system approaching capacity? Are cloud costs increasing without business value? Production engineering connects technical signals with business outcomes.',
        sections: [
          {
            heading: '1. Production needs observable signals',
            explanation:
              'A production team needs enough evidence to understand system behaviour without manually inspecting every component. Metrics, logs and traces provide different views of the same system.',
            example:
              'EDUUU should be able to determine whether an increase in student request latency comes from the API, database, cache or an external dependency.',
          },
          {
            heading: '2. Metrics show measurable behaviour',
            explanation:
              'Metrics are numerical measurements collected over time. Useful production metrics can describe request volume, latency, error rate, resource utilization and business activity.',
            example:
              'EDUUU can track API request rate, error percentage and P95 latency during a major examination.',
          },
          {
            heading: '3. Logs explain individual events',
            explanation:
              'Logs provide event-level information that can help explain what happened during a request or operation. Good logs contain useful context without exposing sensitive information.',
            example:
              'An EDDUUU application log can record a request identifier, operation name and failure category when an assessment request fails.',
          },
          {
            heading: '4. Traces connect distributed work',
            explanation:
              'Distributed requests often cross multiple services. Traces help connect those operations so engineers can identify which dependency consumed time or failed.',
            example:
              'An EDDUUU request can travel through the API, cache, database and notification service. A trace helps identify where latency was introduced.',
          },
          {
            heading: '5. Health checks support traffic decisions',
            explanation:
              'Health checks allow load balancers and orchestration systems to distinguish healthy instances from unavailable ones. A useful health check should reflect whether the service can actually perform its required responsibility.',
            example:
              'If an EDDUUU application instance cannot reach a required dependency, the architecture may need a readiness signal that prevents new traffic from being sent there.',
          },
          {
            heading: '6. SLI measures service behaviour',
            explanation:
              'A Service Level Indicator is a measured representation of service performance or reliability. The indicator should represent something meaningful to users or the business.',
            example:
              'EDUUU may measure the percentage of assessment requests completed successfully within an agreed latency threshold.',
          },
          {
            heading: '7. SLO defines the target',
            explanation:
              'A Service Level Objective defines the desired level of service performance or reliability. It turns vague statements such as fast or reliable into measurable expectations.',
            example:
              'EDUUU could define an objective for successful assessment submissions and a latency target for student-facing requests.',
          },
          {
            heading: '8. Alerts should drive action',
            explanation:
              'An alert should indicate a condition that requires human or automated action. Too many low-value alerts create fatigue and cause important signals to be ignored.',
            example:
              'An EDDUUU alert for sustained assessment submission failures is more actionable than an alert for every individual warning log.',
          },
          {
            heading: '9. Incident response needs a process',
            explanation:
              'Incidents require coordinated detection, containment, diagnosis, communication, mitigation and recovery. Teams should define responsibilities before a serious incident occurs.',
            example:
              'During an examination outage, EDDUUU needs an incident owner, technical responders, communication ownership and a clear escalation path.',
          },
          {
            heading: '10. Safe deployment reduces release risk',
            explanation:
              'Production deployments should reduce the amount of change exposed at one time. Strategies such as rolling, blue-green and canary deployment provide different ways to control release risk.',
            example:
              'EDUUU can expose a new assessment API version to a small percentage of traffic before expanding the release.',
          },
          {
            heading: '11. Rollback must be realistic',
            explanation:
              'A rollback plan is useful only if the previous version and its dependencies can actually be restored safely. Database schema changes and irreversible data migrations require special planning.',
            example:
              'If a new EDDUUU application release increases error rates, the team should have a tested path to restore the previous application version without creating incompatible database state.',
          },
          {
            heading: '12. Infrastructure should be reproducible',
            explanation:
              'Infrastructure as code allows infrastructure configuration to be reviewed, versioned and recreated consistently. This reduces dependence on undocumented manual changes.',
            example:
              'EDUUU can define network, compute and database configuration in version-controlled infrastructure definitions rather than relying on one engineer clicking through a cloud console.',
          },
          {
            heading: '13. Environments should have clear boundaries',
            explanation:
              'Development, staging and production environments have different risk profiles. Production data and credentials should not be casually reused in lower-risk environments.',
            example:
              'EDUUU can validate a release in staging before exposing it to production student traffic.',
          },
          {
            heading: '14. Cloud cost has architecture causes',
            explanation:
              'Cloud cost is influenced by compute capacity, storage, data transfer, database resources, managed services and workload patterns. Cost analysis should therefore happen at the architecture level.',
            example:
              'Running large application instances continuously may be wasteful if EDDUUU traffic is low outside examination periods.',
          },
          {
            heading: '15. Autoscaling affects both reliability and cost',
            explanation:
              'Autoscaling can provide additional capacity during demand spikes and remove unnecessary capacity afterward. Poor scaling policies can still create excessive cost or unstable behaviour.',
            example:
              'EDUUU can maintain a smaller baseline outside examination periods and add application capacity when traffic increases.',
          },
          {
            heading: '16. Rightsizing is evidence-based',
            explanation:
              'Rightsizing means matching infrastructure capacity to actual workload requirements. It should use production measurements rather than guesses.',
            example:
              'If an EDDUUU database consistently uses a small fraction of its provisioned capacity, the team can evaluate a smaller configuration after checking performance and growth requirements.',
          },
          {
            heading: '17. Cost allocation creates accountability',
            explanation:
              'Teams need visibility into which products, environments or workloads generate cloud spending. Without allocation, cost increases can remain invisible until the monthly bill arrives.',
            example:
              'EDUUU can separate production, staging and experimentation costs so leadership can understand where infrastructure investment is going.',
          },
          {
            heading: '18. Reliability and cost require trade-offs',
            explanation:
              'Every additional replica, region, backup frequency or always-on resource can improve a reliability characteristic while increasing cost. Architecture decisions should explicitly state why the additional cost is justified.',
            example:
              'A multi-region examination platform may be justified if regional downtime has significant student and business impact, while the same design may be unnecessary for a low-criticality internal dashboard.',
          },
        ],
        realWorldConnection:
          'Production operations connect architecture to real business outcomes. A technical leader must know how to measure health, respond to incidents, deploy safely and control cloud spending without weakening important reliability and security requirements.',
        keyIdea:
          'A production cloud system must be observable, recoverable, safely deployable and economically sustainable. Operations is part of architecture, not an activity that begins after architecture ends.',
        recap: [
          'Metrics, logs and traces provide complementary operational evidence.',
          'Health checks support safe traffic routing.',
          'SLIs measure service behaviour and SLOs define targets.',
          'Alerts should be actionable.',
          'Incident response requires predefined ownership and procedures.',
          'Canary and blue-green deployment can reduce release risk.',
          'Rollback must account for application and data compatibility.',
          'Infrastructure as code improves reproducibility.',
          'Cloud cost is influenced by architecture decisions.',
          'Autoscaling and rightsizing can improve cost efficiency.',
          'Reliability and cost must be balanced against business impact.',
        ],
      },
    },
    {
      id: 'mc08-s07-production-animation',
      type: 'animation',
      title: 'Observe a Production Release',
      description:
        'Visualize a controlled deployment from staging through canary traffic, monitoring and rollback.',
      animation: {
        visual: 'cloud',
        opening:
          'A production release should be treated as a controlled experiment with measurable signals and a recovery path.',
        parts: [
          {
            id: 'staging',
            label: 'STAGING',
            explanation:
              'The candidate release is validated before production exposure.',
            example:
              'The new EDDUUU assessment API is tested against representative workloads.',
          },
          {
            id: 'canary',
            label: 'CANARY',
            explanation:
              'A small percentage of production traffic is exposed to the new version.',
            example:
              'A limited percentage of student requests reaches the new release.',
          },
          {
            id: 'observe',
            label: 'OBSERVE',
            explanation:
              'Error rate, latency and business signals are compared with the expected baseline.',
            example:
              'EDUUU checks P95 latency and assessment submission success before increasing traffic.',
          },
          {
            id: 'expand',
            label: 'EXPAND',
            explanation:
              'If the release remains healthy, traffic is gradually increased.',
            example:
              'Traffic moves from a small canary percentage toward the full production fleet.',
          },
          {
            id: 'rollback',
            label: 'ROLLBACK',
            explanation:
              'If important signals degrade, traffic returns to the known-good release.',
            example:
              'A significant error increase causes the team to stop rollout and restore the previous application version.',
          },
        ],
        closing:
          'Safe deployment combines controlled exposure, observable signals and a tested recovery mechanism.',
      },
    },
    {
      id: 'mc08-s07-production-simulation',
      type: 'simulation',
      title: 'Run the Production Decision',
      description:
        'Match operational symptoms with the production response that should happen first.',
      simulation: {
        instruction:
          'Match each production situation with the most appropriate first operational response.',
        items: [
          {
            id: 'latency-spike',
            label: 'P95 latency suddenly increases after a release.',
            description:
              'A new version may have introduced a performance regression.',
            correctTargetId: 'observe-target',
          },
          {
            id: 'canary-error',
            label: 'The canary version shows a large increase in errors.',
            description:
              'The release is showing evidence of regression.',
            correctTargetId: 'rollback-target',
          },
          {
            id: 'capacity-growth',
            label: 'Request volume consistently exceeds available application capacity.',
            description:
              'The workload needs additional capacity.',
            correctTargetId: 'scale-target',
          },
          {
            id: 'cost-growth',
            label: 'Monthly cloud cost increases without corresponding workload growth.',
            description:
              'The architecture needs evidence-based cost investigation.',
            correctTargetId: 'cost-target',
          },
          {
            id: 'manual-infra',
            label: 'Production infrastructure differs between environments because of manual changes.',
            description:
              'The organization needs reproducible infrastructure management.',
            correctTargetId: 'iac-target',
          },
        ],
        targets: [
          {
            id: 'observe-target',
            label: 'OBSERVE',
            description:
              'Use metrics, logs and traces to understand the regression.',
          },
          {
            id: 'rollback-target',
            label: 'ROLLBACK',
            description:
              'Stop exposure and return to a known-good release when appropriate.',
          },
          {
            id: 'scale-target',
            label: 'SCALE',
            description:
              'Increase capacity according to workload requirements.',
          },
          {
            id: 'cost-target',
            label: 'COST ANALYSIS',
            description:
              'Identify which resources and workload changes caused spending growth.',
          },
          {
            id: 'iac-target',
            label: 'INFRASTRUCTURE AS CODE',
            description:
              'Manage infrastructure through version-controlled definitions.',
          },
        ],
        successMessage:
          'Correct. Production operations starts by identifying the symptom, measuring the system and selecting an action that reduces business risk.',
        failureMessage:
          'First identify whether the problem is release regression, capacity, cost visibility or infrastructure consistency.',
      },
    },
    {
      id: 'mc08-s07-production-question',
      type: 'question',
      title: 'Production Operations Check',
      description:
        'Test whether you can select a safe release strategy for a high-impact service.',
      question: {
        id: 'mc08-s07-production-operations',
        type: 'single-choice',
        question:
          'A new EDDUUU assessment release is ready, but the team is uncertain about its production behaviour. Which deployment approach gives the team the strongest opportunity to detect problems before full exposure?',
        options: [
          {
            id: 'canary',
            text:
              'Release to a small percentage of production traffic, observe important signals and expand only if the release remains healthy.',
            correct: true,
          },
          {
            id: 'full',
            text:
              'Deploy immediately to every production instance because testing is already complete.',
            correct: false,
          },
          {
            id: 'manual',
            text:
              'Change production servers manually one at a time without recording the changes.',
            correct: false,
          },
          {
            id: 'disable',
            text:
              'Disable monitoring during deployment to avoid noisy alerts.',
            correct: false,
          },
        ],
        explanation:
          'A canary release limits initial exposure and creates an opportunity to compare production signals before increasing the blast radius.',
      },
    },
  ],
}