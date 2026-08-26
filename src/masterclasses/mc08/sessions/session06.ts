import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session06: SessionDefinition = {
  id: 'mc08-session-06',
  number: 6,
  stage: 'discover',
  title: 'Scalability, High Availability & Disaster Recovery',
  objective:
    'Learn how to design cloud systems that handle increasing demand, survive component failures and recover from major disruptions using measurable reliability and recovery objectives.',
  experiences: [
    {
      id: 'mc08-s06-reliability-lesson',
      type: 'lesson',
      title: 'Designing for Growth and Failure',
      description:
        'Treat scalability, availability and recovery as related but different architectural problems.',
      lesson: {
        opening:
          'EDUUU can have a perfectly functional application that still fails during a major examination because demand increases beyond capacity. It can also have enough capacity and still fail because one critical database, network component or availability zone becomes unavailable. Reliability architecture therefore asks three different questions: Can the system handle demand? Can it continue when components fail? Can it recover after a major disruption?',
        sections: [
          {
            heading: '1. Scalability and availability solve different problems',
            explanation:
              'Scalability is the ability to handle increasing or changing workload. Availability is the ability to remain usable when components or dependencies fail. A system can scale well and still have a single point of failure.',
            example:
              'EDUUU may scale its API from five to fifty instances during examinations but still have poor availability if every instance depends on one unavailable database.',
          },
          {
            heading: '2. Vertical scaling increases resource size',
            explanation:
              'Vertical scaling increases CPU, memory or other capacity of an existing resource. It can be simple but eventually reaches hardware or service limits and may involve downtime or migration complexity.',
            example:
              'Increasing an application VM from four CPU cores to sixteen may improve capacity, but it still leaves the workload dependent on one machine.',
          },
          {
            heading: '3. Horizontal scaling adds more instances',
            explanation:
              'Horizontal scaling distributes workload across multiple execution instances. It can improve capacity and resilience when the application is designed to operate correctly across multiple instances.',
            example:
              'EDUUU can run multiple API instances behind a load balancer during high student traffic.',
          },
          {
            heading: '4. Autoscaling turns capacity into a feedback system',
            explanation:
              'Autoscaling uses workload or health signals to add or remove capacity. The important architecture decision is not merely enabling autoscaling but choosing meaningful signals and safe limits.',
            example:
              'EDUUU may scale API capacity based on request rate, CPU utilisation or another workload-specific metric while maintaining minimum and maximum capacity boundaries.',
          },
          {
            heading: '5. Scaling has a dependency chain',
            explanation:
              'A system is limited by its bottleneck. Increasing application capacity can overwhelm databases, caches, queues or external dependencies. Scaling decisions must therefore consider the entire dependency graph.',
            example:
              'If twenty additional API instances create ten times more database connections, the database may become the limiting component instead of the API layer.',
          },
          {
            heading: '6. Remove single points of failure',
            explanation:
              'A single point of failure is a component whose failure can make the entire service unavailable. Critical production architectures should identify these components and determine whether redundancy is justified.',
            example:
              'If all EDDUUU application traffic depends on one instance, that instance is a single point of failure. Multiple instances behind a load balancer reduce that risk.',
          },
          {
            heading: '7. Availability zones provide failure isolation',
            explanation:
              'Deploying critical components across multiple availability zones can reduce the impact of a failure isolated to one zone. Redundancy must be designed across the layers that matter, not only at the application server layer.',
            example:
              'EDUUU can distribute application instances across multiple zones so one zone failure does not remove all application capacity.',
          },
          {
            heading: '8. Redundancy must include dependencies',
            explanation:
              'A redundant application layer does not create true high availability if the database, network path or authentication dependency remains single-homed.',
            example:
              'Two API zones do not provide full resilience if both depend on one unavailable database instance with no recovery strategy.',
          },
          {
            heading: '9. Replication improves availability but creates consistency decisions',
            explanation:
              'Replicating data can provide additional copies and support failover or read scaling. However, replicas introduce questions about synchronization delay, consistency and conflict handling.',
            example:
              'EDUUU may use a database replica for read workloads while keeping authoritative assessment updates controlled through the primary data path.',
          },
          {
            heading: '10. Backup is not the same as replication',
            explanation:
              'Replication keeps another copy available, while backup provides historical recovery. A corrupted or accidentally deleted record can be replicated successfully to another replica, making backup essential for certain recovery scenarios.',
            example:
              'If an administrator deletes a large set of student records, replicas may also reflect the deletion, while a protected backup can provide a recovery point.',
          },
          {
            heading: '11. RPO defines acceptable data loss',
            explanation:
              'Recovery Point Objective describes how much recent data the business can afford to lose after a disruptive event. Lower RPO generally requires more frequent replication, backup or persistence mechanisms.',
            example:
              'If EDDUUU requires assessment results to lose no more than a few minutes of data, its recovery architecture must preserve data at an appropriate frequency.',
          },
          {
            heading: '12. RTO defines acceptable recovery time',
            explanation:
              'Recovery Time Objective describes how quickly the service should be restored after a disruption. Lower RTO usually requires more prepared infrastructure and operational automation.',
            example:
              'If the examination platform must recover within fifteen minutes, restoring infrastructure manually from scratch may not satisfy the business requirement.',
          },
          {
            heading: '13. Disaster recovery is larger than backup',
            explanation:
              'Disaster recovery includes infrastructure, data, configuration, deployment procedures, dependencies, people and operational processes required to restore service after a major disruption.',
            example:
              'EDUUU’s DR plan should describe how application infrastructure, database data, DNS, secrets and deployment configuration are restored, not only where database backups are stored.',
          },
          {
            heading: '14. Multi-region architecture increases complexity',
            explanation:
              'Using multiple geographic regions can protect against regional failures, but it also introduces additional networking, data replication, consistency, operational and cost complexity.',
            example:
              'EDUUU should not deploy every service to two regions automatically. The additional resilience must be justified by business recovery requirements.',
          },
          {
            heading: '15. Reliability is a business trade-off',
            explanation:
              'Higher availability and lower recovery objectives generally require additional infrastructure, automation and operational investment. The correct target depends on business impact rather than a universal technical maximum.',
            example:
              'A student-facing examination platform may justify stronger recovery objectives than an internal analytics dashboard because downtime during an exam directly affects students.',
          },
        ],
        realWorldConnection:
          'Senior technical leaders must translate business impact into measurable reliability objectives. The architecture should then provide enough redundancy, scaling and recovery capability to meet those objectives without creating unjustified cost and complexity.',
        keyIdea:
          'Scalability handles changing demand, high availability handles component failure and disaster recovery handles major disruption. Strong architecture connects all three to measurable business requirements such as capacity, RTO and RPO.',
        recap: [
          'Scalability and availability solve different problems.',
          'Vertical scaling increases resource size while horizontal scaling adds instances.',
          'Autoscaling requires meaningful signals and safe limits.',
          'Scaling one layer can overload downstream dependencies.',
          'High availability requires removing critical single points of failure.',
          'Multi-zone deployment can reduce localized failure impact.',
          'Replication and backup provide different protection mechanisms.',
          'RPO measures acceptable data loss.',
          'RTO measures acceptable recovery time.',
          'Disaster recovery includes infrastructure, data, configuration and operations.',
          'Higher resilience introduces additional cost and complexity.',
        ],
      },
    },
    {
      id: 'mc08-s06-reliability-animation',
      type: 'animation',
      title: 'Watch the Platform Survive Failure',
      description:
        'Visualize how a multi-zone architecture continues serving students when one compute zone becomes unavailable.',
      animation: {
        visual: 'cloud',
        opening:
          'High availability is easier to understand when we watch one failure propagate through the system.',
        parts: [
          {
            id: 'normal',
            label: 'NORMAL OPERATION',
            explanation:
              'Multiple application instances serve traffic across independent availability zones.',
            example:
              'EDUUU serves student requests through application instances distributed across two zones.',
          },
          {
            id: 'zone-failure',
            label: 'ZONE FAILURE',
            explanation:
              'One availability zone becomes unavailable.',
            example:
              'A zone loses its application capacity during an infrastructure incident.',
          },
          {
            id: 'traffic-shift',
            label: 'TRAFFIC SHIFT',
            explanation:
              'Health checks and load balancing stop routing traffic toward unavailable instances.',
            example:
              'Healthy application instances in the remaining zone continue receiving requests.',
          },
          {
            id: 'data-protection',
            label: 'DATA PROTECTION',
            explanation:
              'Database redundancy and recovery mechanisms protect the data layer according to defined objectives.',
            example:
              'The data architecture maintains availability or recovery capability according to EDDUUU’s RTO and RPO targets.',
          },
          {
            id: 'recovery',
            label: 'RECOVERY',
            explanation:
              'Infrastructure and operations restore the failed capacity while the service continues or recovers within the required target.',
            example:
              'The operations team restores capacity without manually rebuilding the entire platform from memory.',
          },
        ],
        closing:
          'High availability is not a single feature. It is a coordinated architecture of redundancy, health detection, traffic management, data protection and operational recovery.',
      },
    },
    {
      id: 'mc08-s06-reliability-simulation',
      type: 'simulation',
      title: 'Design for Failure',
      description:
        'Match reliability requirements with the architecture mechanism that addresses the risk.',
      simulation: {
        instruction:
          'Match each reliability problem with the architecture mechanism that best addresses it.',
        items: [
          {
            id: 'traffic-spike',
            label: 'Student traffic increases sharply during examinations.',
            description:
              'The platform needs additional application capacity.',
            correctTargetId: 'autoscale-target',
          },
          {
            id: 'instance-failure',
            label: 'One application instance becomes unhealthy.',
            description:
              'The service should continue using healthy capacity.',
            correctTargetId: 'horizontal-target',
          },
          {
            id: 'zone-failure',
            label: 'One availability zone becomes unavailable.',
            description:
              'Critical capacity should remain available elsewhere.',
            correctTargetId: 'multi-zone-target',
          },
          {
            id: 'data-loss',
            label: 'The business must recover from accidental destructive data changes.',
            description:
              'Historical recovery is required.',
            correctTargetId: 'backup-target',
          },
          {
            id: 'recovery-time',
            label: 'The examination platform must return to service within a defined time.',
            description:
              'Recovery speed must be measurable.',
            correctTargetId: 'rto-target',
          },
        ],
        targets: [
          {
            id: 'autoscale-target',
            label: 'AUTOSCALING',
            description:
              'Adjusts capacity according to workload signals.',
          },
          {
            id: 'horizontal-target',
            label: 'HORIZONTAL REDUNDANCY',
            description:
              'Provides multiple application execution instances.',
          },
          {
            id: 'multi-zone-target',
            label: 'MULTI-ZONE DEPLOYMENT',
            description:
              'Spreads critical capacity across failure domains.',
          },
          {
            id: 'backup-target',
            label: 'BACKUP & RECOVERY',
            description:
              'Provides historical recovery from data loss or corruption.',
          },
          {
            id: 'rto-target',
            label: 'RTO',
            description:
              'Defines the required maximum recovery time.',
          },
        ],
        successMessage:
          'Correct. Reliability becomes practical when business failure scenarios are translated into measurable architecture mechanisms.',
        failureMessage:
          'Identify the failure first: traffic growth, instance failure, zone failure, historical data loss or recovery time.',
      },
    },
    {
      id: 'mc08-s06-reliability-question',
      type: 'question',
      title: 'Reliability Architecture Check',
      description:
        'Test whether you can distinguish backup, replication and recovery requirements.',
      question: {
        id: 'mc08-s06-reliability-architecture',
        type: 'single-choice',
        question:
          'EDUUU has a replicated database. An administrator accidentally deletes important assessment records and the deletion is quickly reflected on the replica. What additional protection is most directly required for historical recovery?',
        options: [
          {
            id: 'backup',
            text:
              'Protected backups or recovery points that can restore data from before the accidental deletion.',
            correct: true,
          },
          {
            id: 'more-api',
            text:
              'More application servers because replication problems are always caused by insufficient compute.',
            correct: false,
          },
          {
            id: 'public-db',
            text:
              'A public database endpoint so administrators can recover data faster.',
            correct: false,
          },
          {
            id: 'disable-replication',
            text:
              'Disable all replication because replicas cannot improve availability.',
            correct: false,
          },
        ],
        explanation:
          'Replication can reproduce an unwanted change. Historical backups or recovery points provide a way to return to an earlier trusted state, which is a different requirement from maintaining a live replica.',
      },
    },
  ],
}