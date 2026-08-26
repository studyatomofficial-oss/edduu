import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session07: SessionDefinition = {
  id: 'mc09-session-07',
  number: 7,
  stage: 'discover',
  title: 'Production Infrastructure & Operations - Reliability, Observability, Security and Cost',
  objective:
    'Understand how production infrastructure is operated through networking, DNS, TLS, observability, backups, security controls, cost management and incident response.',
  experiences: [
    {
      id: 'mc09-s07-production-lesson',
      type: 'lesson',
      title: 'Operate EDDUU Like a Production Platform',
      description:
        'Bring infrastructure, Kubernetes and operational practices together into a production system that can be monitored, secured, recovered and continuously improved.',
      lesson: {
        opening:
          'A production platform is not finished when the application is deployed. Production means the system can be reached securely, observed continuously, recovered after failure, operated by a team and managed within acceptable cost and risk boundaries.',
        sections: [
          {
            heading: '1. Production begins with clear environment boundaries',
            explanation:
              'Production should be deliberately separated from development and testing so experiments cannot accidentally affect real users or data.',
            example:
              'EDDUU can maintain separate development, staging and production environments with different credentials, access policies and infrastructure capacity.',
          },
          {
            heading: '2. DNS gives users a stable name',
            explanation:
              'Domain Name System translates human-readable domain names into the network destinations used by clients. A stable domain lets infrastructure change without requiring users to know underlying addresses.',
            example:
              'Students can access EDDUU through a stable domain while the underlying load balancer or application infrastructure changes over time.',
          },
          {
            heading: '3. TLS protects communication',
            explanation:
              'Transport Layer Security encrypts communication between clients and services and helps authenticate the intended endpoint through certificates.',
            example:
              'An EDDUU production API should use HTTPS so student credentials and application data are not transmitted as plain network traffic.',
          },
          {
            heading: '4. Certificates have a lifecycle',
            explanation:
              'TLS certificates expire and must be renewed. Certificate management should therefore be automated or operationally controlled rather than treated as a one-time setup.',
            example:
              'EDDUU should have a controlled certificate renewal process so an expired production certificate does not unexpectedly make the application inaccessible.',
          },
          {
            heading: '5. Load balancing distributes traffic',
            explanation:
              'A load balancer can provide a stable traffic entry point and distribute requests across healthy backend targets.',
            example:
              'Incoming EDDUU API traffic can enter through a load-balancing layer before reaching the Kubernetes workload path.',
          },
          {
            heading: '6. Health-aware traffic routing improves reliability',
            explanation:
              'Traffic should preferentially reach healthy backend instances. Health checks help routing infrastructure avoid sending normal traffic to unavailable targets.',
            example:
              'If one EDDUU API instance becomes unhealthy, the traffic layer should avoid routing normal requests toward that unavailable target when its health information is available.',
          },
          {
            heading: '7. Observability is broader than monitoring',
            explanation:
              'Observability combines multiple signals that help engineers understand what a system is doing and why. Logs, metrics and traces provide complementary views of application behavior.',
            example:
              'When EDDUU latency increases, engineers can use metrics to detect the problem, logs to inspect errors and traces to follow a slow request through multiple services.',
          },
          {
            heading: '8. Metrics measure system behavior',
            explanation:
              'Metrics are numerical measurements collected over time. They are useful for capacity planning, alerting, dashboards and understanding system trends.',
            example:
              'EDDUU can track API request rate, latency, error rate, CPU utilization, memory utilization and database connection pressure.',
          },
          {
            heading: '9. Logs explain individual events',
            explanation:
              'Logs record application or infrastructure events and provide detailed context that aggregate metrics cannot always show.',
            example:
              'When an EDDUU API request fails, structured logs can provide request identifiers, error details and relevant application context.',
          },
          {
            heading: '10. Traces follow requests across services',
            explanation:
              'Distributed tracing can connect operations performed across multiple services into a request path, helping engineers locate latency or failure points.',
            example:
              'An EDDUU request can be traced from the API through an internal service and then toward a database operation to identify where time was spent.',
          },
          {
            heading: '11. Alerts should represent actionable conditions',
            explanation:
              'An alert should indicate a condition that requires attention rather than simply reporting every unusual metric value. Poor alerts create noise and reduce response effectiveness.',
            example:
              'An EDDUU alert for sustained high API error rate is more actionable than an alert for every brief CPU fluctuation.',
          },
          {
            heading: '12. Service-level objectives connect infrastructure to users',
            explanation:
              'Reliability targets should describe outcomes users care about, such as availability, latency and error rate, rather than only infrastructure measurements.',
            example:
              'EDDUU can define an API latency objective and use infrastructure and application telemetry to determine whether the service is meeting it.',
          },
          {
            heading: '13. Backups protect recoverability',
            explanation:
              'A backup is a recoverable copy of data or configuration that can be used after accidental deletion, corruption or other failure.',
            example:
              'EDDUU should maintain protected database backups so critical student and application data can be recovered after a serious incident.',
          },
          {
            heading: '14. Backup success is not the same as recovery readiness',
            explanation:
              'A system may produce backups successfully while still having an untested recovery process. Recovery procedures should therefore be validated through controlled restoration exercises.',
            example:
              'EDDUU should periodically restore a database backup in a controlled environment to verify that the backup is actually usable.',
          },
          {
            heading: '15. Recovery objectives define acceptable loss and downtime',
            explanation:
              'Recovery Point Objective describes how much recent data loss may be acceptable, while Recovery Time Objective describes how quickly a service should be restored after a disruption.',
            example:
              'EDDUU leadership may define different RPO and RTO targets for critical student data and less critical analytics systems.',
          },
          {
            heading: '16. Security follows least privilege',
            explanation:
              'Users, services and automation should receive only the permissions required for their responsibilities. Excessive permissions increase the impact of compromised credentials.',
            example:
              'An EDDUU reporting job should not automatically receive administrative permissions over the entire production cluster.',
          },
          {
            heading: '17. Production access should be controlled',
            explanation:
              'Administrative production access should be limited, authenticated, auditable and granted according to role and operational need.',
            example:
              'EDDUU can restrict production cluster administration to authorized engineers while application teams receive narrower permissions appropriate to their responsibilities.',
          },
          {
            heading: '18. Network boundaries reduce blast radius',
            explanation:
              'Network segmentation and access controls can limit which systems can communicate with each other. This reduces unnecessary exposure and limits the impact of a compromised component.',
            example:
              'EDDUU can keep database services on private network paths while exposing only the intended web or API entry points.',
          },
          {
            heading: '19. Cost is an operational constraint',
            explanation:
              'Production infrastructure must meet reliability and performance requirements without creating uncontrolled spending. Cost should be visible and connected to architecture decisions.',
            example:
              'EDDUU can monitor compute, database, storage, network and observability costs and identify resources that are consistently underutilized.',
          },
          {
            heading: '20. Autoscaling can affect cost as well as performance',
            explanation:
              'Autoscaling provides additional capacity when demand increases but can also increase infrastructure cost. Scaling policies should therefore balance user experience, reliability and spend.',
            example:
              'If EDDUU HPA scales API replicas aggressively because of a poorly chosen metric, infrastructure cost can increase without producing meaningful user benefit.',
          },
          {
            heading: '21. Incident response needs a defined process',
            explanation:
              'When production fails, teams need clear ownership, communication, investigation and recovery steps. Improvised response increases confusion during high-pressure events.',
            example:
              'If EDDUU API error rates suddenly rise, the team should identify the incident owner, assess impact, inspect telemetry, mitigate the problem and communicate status.',
          },
          {
            heading: '22. Incident response should prioritize user impact',
            explanation:
              'During an incident, teams should first understand what users are experiencing and protect critical functionality before attempting extensive root-cause analysis.',
            example:
              'If EDDUU authentication fails for all students, restoring access may be more urgent than immediately completing a detailed post-incident explanation.',
          },
          {
            heading: '23. Post-incident learning prevents repeated failures',
            explanation:
              'After an incident, teams should identify contributing factors, gaps in detection and recovery, and concrete improvements rather than simply assigning blame.',
            example:
              'If an EDDUU deployment caused a major outage, the team can improve rollout checks, automated rollback and alerting based on what the incident revealed.',
          },
          {
            heading: '24. Production ownership should be explicit',
            explanation:
              'Reliable operations require clear responsibility for services, infrastructure, alerts, backups, security controls and incident decisions.',
            example:
              'EDDUU can maintain service ownership information so an engineer knows which team is responsible for an API alert at 2 AM.',
          },
          {
            heading: '25. Production readiness is a system capability',
            explanation:
              'A production platform is ready when it can operate safely under expected load, detect problems, respond to incidents and recover from realistic failures.',
            example:
              'Before declaring an EDDUU service production-ready, the team should verify security, monitoring, alerting, backup, recovery, capacity and operational ownership.',
          },
        ],
        realWorldConnection:
          'Production engineering combines infrastructure technology with operational discipline. A reliable EDDUU platform needs secure connectivity, observable services, tested recovery, controlled access, predictable costs and an incident-response model.',
        keyIdea:
          'Production infrastructure is successful when the system is not only deployed, but also secure, observable, recoverable, cost-aware and operable by a responsible team.',
        recap: [
          'Production environments should be separated from development and testing.',
          'DNS provides stable human-readable service names.',
          'TLS protects communication and requires certificate lifecycle management.',
          'Load balancing provides stable traffic entry and distributes requests.',
          'Metrics, logs and traces provide complementary observability signals.',
          'Alerts should identify actionable conditions.',
          'Backups must be paired with tested recovery procedures.',
          'RPO describes acceptable data-loss tolerance.',
          'RTO describes acceptable recovery-time tolerance.',
          'Least privilege reduces the impact of compromised access.',
          'Network boundaries reduce unnecessary exposure and blast radius.',
          'Cost management is part of production architecture.',
          'Incident response requires ownership, communication, mitigation and recovery.',
          'Post-incident reviews should produce concrete reliability improvements.',
        ],
      },
    },
    {
      id: 'mc09-s07-production-animation',
      type: 'animation',
      title: 'Observe an EDDUU Production Incident',
      description:
        'Follow a production error from detection through investigation, mitigation and recovery.',
      animation: {
        visual: 'architecture',
        opening:
          'Production operations become visible when something goes wrong. Follow the EDDUU request path as telemetry detects a problem and the operations team responds.',
        parts: [
          {
            id: 'users',
            label: 'EDDUU USERS',
            explanation:
              'Students begin experiencing slower API responses and failed requests.',
            example:
              'The student dashboard takes longer to load and some requests return errors.',
          },
          {
            id: 'metrics',
            label: 'METRICS DETECT ANOMALY',
            explanation:
              'System metrics show a sustained change in error rate and latency.',
            example:
              'The EDDUU API error rate rises above the configured operational threshold.',
          },
          {
            id: 'alert',
            label: 'ACTIONABLE ALERT',
            explanation:
              'The alerting system notifies the responsible team.',
            example:
              'The EDDUU service owner receives an alert indicating elevated production errors.',
          },
          {
            id: 'logs',
            label: 'STRUCTURED LOGS',
            explanation:
              'Engineers inspect detailed application events to understand the failing request pattern.',
            example:
              'Logs reveal repeated failures associated with a specific API operation.',
          },
          {
            id: 'trace',
            label: 'REQUEST TRACE',
            explanation:
              'Tracing helps identify where the request spends time or fails across service boundaries.',
            example:
              'The trace shows that the API is waiting unusually long for a downstream dependency.',
          },
          {
            id: 'mitigation',
            label: 'MITIGATION',
            explanation:
              'The team reduces user impact using the safest available operational action.',
            example:
              'The team rolls back a problematic deployment or reduces traffic to an unhealthy component.',
          },
          {
            id: 'recovery',
            label: 'SERVICE RECOVERS',
            explanation:
              'Error rate and latency return toward acceptable levels.',
            example:
              'Healthy EDDUU API replicas resume normal traffic and the incident is stabilized.',
          },
          {
            id: 'review',
            label: 'POST-INCIDENT REVIEW',
            explanation:
              'The team identifies improvements to prevent or detect similar failures.',
            example:
              'EDDUU improves deployment validation, alerting or automated rollback based on the incident findings.',
          },
        ],
        closing:
          'Good production operations turn telemetry into action: detect, understand, mitigate, recover and learn.',
      },
    },
    {
      id: 'mc09-s07-production-simulation',
      type: 'simulation',
      title: 'Operate the EDDUU Production Platform',
      description:
        'Match production situations with the operational control that should be used.',
      simulation: {
        instruction:
          'Match each production situation with the most relevant infrastructure or operations control.',
        items: [
          {
            id: 'dns-item',
            label:
              'Users need a stable domain name even when the underlying infrastructure changes.',
            description:
              'The user-facing name should not depend on a fixed infrastructure address.',
            correctTargetId: 'dns-target',
          },
          {
            id: 'tls-item',
            label:
              'EDDUU must protect credentials and application traffic between browsers and the API.',
            description:
              'Communication requires encryption and endpoint authentication.',
            correctTargetId: 'tls-target',
          },
          {
            id: 'metrics-item',
            label:
              'The team wants to track API latency and error rate over time.',
            description:
              'The data is numerical and time-series oriented.',
            correctTargetId: 'metrics-target',
          },
          {
            id: 'logs-item',
            label:
              'The team needs detailed context about a specific failed request.',
            description:
              'Individual application events need investigation.',
            correctTargetId: 'logs-target',
          },
          {
            id: 'backup-item',
            label:
              'The database must be recoverable after accidental deletion or corruption.',
            description:
              'A recoverable copy of critical data is required.',
            correctTargetId: 'backup-target',
          },
          {
            id: 'rto-item',
            label:
              'Leadership defines how quickly a critical EDDUU service should be restored after a major outage.',
            description:
              'The requirement concerns recovery time.',
            correctTargetId: 'rto-target',
          },
          {
            id: 'rpo-item',
            label:
              'Leadership defines how much recent data EDDUU can afford to lose after a disaster.',
            description:
              'The requirement concerns recoverable data age.',
            correctTargetId: 'rpo-target',
          },
          {
            id: 'least-item',
            label:
              'A reporting service should not receive full production administrator permissions.',
            description:
              'The service needs only the permissions required for its task.',
            correctTargetId: 'least-target',
          },
          {
            id: 'incident-item',
            label:
              'Production error rates suddenly rise and users are affected.',
            description:
              'The team needs a structured response.',
            correctTargetId: 'incident-target',
          },
        ],
        targets: [
          {
            id: 'dns-target',
            label: 'DNS',
            description:
              'Provides stable human-readable names for network destinations.',
          },
          {
            id: 'tls-target',
            label: 'TLS',
            description:
              'Protects network communication and authenticates endpoints.',
          },
          {
            id: 'metrics-target',
            label: 'METRICS',
            description:
              'Provide numerical measurements over time.',
          },
          {
            id: 'logs-target',
            label: 'LOGS',
            description:
              'Record detailed application and infrastructure events.',
          },
          {
            id: 'backup-target',
            label: 'BACKUPS',
            description:
              'Provide recoverable copies of important data or configuration.',
          },
          {
            id: 'rto-target',
            label: 'RTO',
            description:
              'Defines acceptable recovery time.',
          },
          {
            id: 'rpo-target',
            label: 'RPO',
            description:
              'Defines acceptable data-loss tolerance.',
          },
          {
            id: 'least-target',
            label: 'LEAST PRIVILEGE',
            description:
              'Limits access to only what is required.',
          },
          {
            id: 'incident-target',
            label: 'INCIDENT RESPONSE',
            description:
              'Provides a structured process for managing production incidents.',
          },
        ],
        successMessage:
          'Correct. Production operations require distinct controls for connectivity, encryption, observability, recovery, security and incident management.',
        failureMessage:
          'First classify the problem as connectivity, encryption, observability, backup, recovery time, data-loss tolerance, access control or incident response.',
      },
    },
    {
      id: 'mc09-s07-production-question',
      type: 'question',
      title: 'Production Operations Check',
      description:
        'Check whether you understand the difference between RPO and RTO.',
      question: {
        id: 'mc09-s07-production',
        type: 'single-choice',
        question:
          'EDDUU leadership says that after a disaster, the critical platform must be restored within two hours and the business can tolerate losing no more than fifteen minutes of recent data. Which interpretation is correct?',
        options: [
          {
            id: 'rto-rpo',
            text:
              'The two-hour restoration requirement is the RTO, while the fifteen-minute acceptable data-loss window is the RPO.',
            correct: true,
          },
          {
            id: 'reverse',
            text:
              'The two-hour requirement is the RPO because it describes how long recovery should take.',
            correct: false,
          },
          {
            id: 'latency',
            text:
              'Both values are API latency targets because disaster recovery is unrelated to service availability.',
            correct: false,
          },
          {
            id: 'backup',
            text:
              'RPO and RTO are interchangeable terms for the frequency of application logs.',
            correct: false,
          },
        ],
        explanation:
          'RTO describes how quickly the service should be restored. RPO describes how much recent data loss can be tolerated.',
      },
    },
  ],
}