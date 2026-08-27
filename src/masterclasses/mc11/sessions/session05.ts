import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session05: SessionDefinition = {
  id: 'mc11-session-05',
  number: 5,
  stage: 'discover',
  title: 'Data at Scale - Designing for Growing Volumes',
  objective:
    'Understand how data volume changes system architecture and learn practical strategies for data lifecycle, hot and cold data, retention, archival, aggregation and separation of operational and analytical workloads.',
  experiences: [
    {
      id: 'mc11-s05-data-scale-lesson',
      type: 'lesson',
      title: 'What Happens When Data Keeps Growing?',
      description:
        'Understand why a system that works with thousands of records can behave very differently when it contains millions or billions of records.',
      lesson: {
        opening:
          'Imagine EDDUU starts with 10,000 students. The platform stores courses, enrollments, learning activity, assessments, search history, notifications and audit information. After several years, the system may contain billions of activity records. The challenge is no longer only how fast one query runs. The architecture must decide what data should remain operational, what can be archived, what should be aggregated and which workloads should be separated.',
        sections: [
          {
            heading: '1. Data growth changes the problem',
            explanation:
              'As data volume increases, storage size, query cost, backup duration, indexing cost and operational complexity can all increase.',
            example:
              'An EDDUU learning_activity table that contains one million records behaves differently from one containing several billion records.',
          },
          {
            heading: '2. Not all data has the same value',
            explanation:
              'Some data is accessed frequently while other data is rarely accessed. Treating every record identically can increase cost and operational complexity.',
            example:
              'A student current course enrollment may be accessed frequently while activity from five years ago may rarely be requested.',
          },
          {
            heading: '3. Hot data',
            explanation:
              'Hot data is data that is accessed frequently or needs low-latency access.',
            example:
              'Current student progress and active course enrollment information are likely to be hot EDDUU data.',
          },
          {
            heading: '4. Cold data',
            explanation:
              'Cold data is accessed infrequently and can often be stored in a cheaper or less performance-sensitive system.',
            example:
              'Old learning activity from completed academic years may be suitable for archival storage when business requirements allow it.',
          },
          {
            heading: '5. Data lifecycle',
            explanation:
              'A data lifecycle defines how information moves from active use through retention, archival and eventual deletion when permitted.',
            example:
              'EDDUU may keep recent learning activity in the operational database, move older activity to archival storage and eventually delete records after the required retention period.',
          },
          {
            heading: '6. Retention policies',
            explanation:
              'A retention policy specifies how long a type of data should be retained and what happens after that period.',
            example:
              'EDDUU can define different retention rules for audit records, application logs, learning activity and temporary system data.',
          },
          {
            heading: '7. Archival reduces operational pressure',
            explanation:
              'Moving rarely accessed historical data away from the primary operational workload can reduce table size and operational pressure.',
            example:
              'Historical learning activity can be archived so current student queries do not operate over the entire multi-year dataset.',
          },
          {
            heading: '8. Partitioning can organize large tables',
            explanation:
              'Large datasets can sometimes be partitioned into smaller logical pieces according to a key such as date, tenant or category.',
            example:
              'An EDDUU activity table can potentially be partitioned by month so recent activity can be accessed without scanning every historical partition.',
          },
          {
            heading: '9. Time-based data is often naturally partitionable',
            explanation:
              'Events and activity records frequently have timestamps, making time a useful dimension for organizing historical data.',
            example:
              'EDDUU learning activity generated in January can be separated logically from activity generated several years later.',
          },
          {
            heading: '10. Aggregation reduces repeated computation',
            explanation:
              'Instead of repeatedly calculating large historical datasets, systems can precompute useful summaries.',
            example:
              'EDDUU can maintain daily course-completion counts instead of calculating several years of raw activity every time an administrator opens a report.',
          },
          {
            heading: '11. Raw data and derived data serve different purposes',
            explanation:
              'Raw records preserve detailed history while aggregated or derived data supports faster reporting and operational decisions.',
            example:
              'Individual learning events can remain available for audit or analysis while daily student-progress summaries serve dashboard queries.',
          },
          {
            heading: '12. Operational workloads and analytical workloads differ',
            explanation:
              'Operational systems are optimized for application transactions, while analytical systems are designed for large-scale reporting and exploration.',
            example:
              'The EDDUU student application should not necessarily execute a large multi-year analytics query against the same database handling live enrollment transactions.',
          },
          {
            heading: '13. Separate heavy analytics when necessary',
            explanation:
              'As analytical workloads grow, teams may move reporting and analytical processing to a separate system so operational workloads remain predictable.',
            example:
              'EDDUU can export historical activity into an analytical platform for large reports instead of running those reports directly against the transactional database.',
          },
          {
            heading: '14. Storage tiers are a trade-off',
            explanation:
              'Faster storage generally costs more, while slower archival storage can be cheaper. Data placement should match access frequency and business requirements.',
            example:
              'Current student data can remain in fast operational storage while old historical records can use lower-cost archival storage.',
          },
          {
            heading: '15. Backups grow with data',
            explanation:
              'Larger datasets increase backup size and can increase recovery time. Backup strategy therefore becomes part of data-at-scale architecture.',
            example:
              'An EDDUU database containing years of activity requires a carefully designed backup and recovery strategy rather than relying on one large manual backup.',
          },
          {
            heading: '16. Recovery time matters',
            explanation:
              'Large datasets can take longer to restore. Recovery objectives should therefore influence storage, replication and backup architecture.',
            example:
              'If EDDUU requires rapid recovery after a database failure, the team may need more than a cold full backup restore.',
          },
          {
            heading: '17. Large deletes can be expensive',
            explanation:
              'Deleting huge numbers of records in one transaction can create heavy database load, locking and storage-management work.',
            example:
              'Removing millions of expired EDDUU activity records in one transaction can create unnecessary operational pressure.',
          },
          {
            heading: '18. Lifecycle operations should be controlled',
            explanation:
              'Archival and deletion jobs should be designed so they do not compete aggressively with critical production workloads.',
            example:
              'EDDUU can process archival work in controlled batches during periods of lower operational load.',
          },
          {
            heading: '19. Data locality affects performance',
            explanation:
              'Where data is stored and how much data must be moved can affect latency and cost.',
            example:
              'A report that scans terabytes of historical EDDUU data can become expensive in both compute and data-transfer resources.',
          },
          {
            heading: '20. Data duplication can be deliberate',
            explanation:
              'At scale, systems sometimes maintain derived copies of data to support different access patterns. The trade-off is additional storage and consistency complexity.',
            example:
              'EDDUU may maintain an analytical representation of learning activity optimized for reporting rather than forcing every report to query transactional tables.',
          },
          {
            heading: '21. Schema evolution matters at scale',
            explanation:
              'Changing the structure of very large datasets can be operationally expensive. Schema changes therefore need careful rollout strategies.',
            example:
              'Adding a new field to a massive EDDUU activity dataset may require a migration strategy that avoids long production downtime.',
          },
          {
            heading: '22. Data quality becomes more important',
            explanation:
              'At large volumes, small data-quality problems can multiply into significant reporting and operational issues.',
            example:
              'If a learning event is duplicated thousands of times, aggregated completion metrics can become incorrect.',
          },
          {
            heading: '23. Idempotent ingestion protects large datasets',
            explanation:
              'When events or records can be delivered more than once, idempotent processing prevents duplicate data from accumulating incorrectly.',
            example:
              'An EDDUU CourseCompleted event received twice should not necessarily produce two completion records.',
          },
          {
            heading: '24. Large data requires observability',
            explanation:
              'Teams need visibility into storage growth, query patterns, partition sizes, ingestion rates, archival jobs and data-quality failures.',
            example:
              'EDDUU can monitor daily activity growth so capacity problems are visible before storage or query performance becomes critical.',
          },
        ],
        realWorldConnection:
          'Successful platforms treat data as a lifecycle rather than an ever-growing pile of records in one database. As EDDUU grows, hot operational data, historical data, analytical workloads, retention rules, backups and derived datasets need deliberate architectural boundaries.',
        keyIdea:
          'Data at scale requires more than larger storage. The architecture must decide where data lives, how long it remains operational, how it is accessed and when it should be archived or removed.',
        recap: [
          'Data volume increases storage and operational complexity.',
          'Hot data requires frequent or low-latency access.',
          'Cold data is accessed less frequently and may use cheaper storage.',
          'Retention policies define how long data remains available.',
          'Archival can reduce operational database pressure.',
          'Large tables can sometimes be partitioned.',
          'Time is a useful partitioning dimension for many event datasets.',
          'Aggregation can avoid repeatedly processing large raw datasets.',
          'Raw and derived data serve different purposes.',
          'Operational and analytical workloads may need separation.',
          'Large datasets increase backup and recovery considerations.',
          'Large lifecycle operations should be controlled.',
          'Data quality and idempotency become increasingly important at scale.',
          'Observability should include data growth and lifecycle behavior.',
        ],
      },
    },

    {
      id: 'mc11-s05-data-scale-animation',
      type: 'animation',
      title: 'Watch EDDUU Data Move Through Its Lifecycle',
      description:
        'Visualize how frequently accessed data remains operational while historical data is aggregated and archived.',
      animation: {
        visual: 'distributed',
        opening:
          'Follow EDDUU learning activity from the moment it is created until it becomes historical data.',
        parts: [
          {
            id: 'new-event',
            label: 'NEW LEARNING EVENT',
            explanation:
              'A student action creates a new learning activity record.',
            example:
              'A student completes a lesson and EDDUU records the activity.',
          },
          {
            id: 'hot-storage',
            label: 'HOT OPERATIONAL DATA',
            explanation:
              'Recent data remains in the operational system because it is frequently needed by live application features.',
            example:
              'Current student progress is read by dashboards and learning workflows.',
          },
          {
            id: 'aggregation',
            label: 'AGGREGATION',
            explanation:
              'Repeated raw events can be transformed into useful summaries for common reporting needs.',
            example:
              'Daily completion counts are generated from individual learning events.',
          },
          {
            id: 'historical',
            label: 'HISTORICAL DATA',
            explanation:
              'Older information becomes less frequently accessed and may no longer need the same operational storage characteristics.',
            example:
              'Activity from previous academic years is rarely requested by live student APIs.',
          },
          {
            id: 'archive',
            label: 'ARCHIVE',
            explanation:
              'Historical records can move to a suitable archival system according to retention and access requirements.',
            example:
              'Older EDDUU activity is stored in lower-cost archival storage.',
          },
          {
            id: 'analytics',
            label: 'ANALYTICAL WORKLOAD',
            explanation:
              'Large historical datasets can support reporting and analysis without placing the same workload on transactional systems.',
            example:
              'An administrator generates a multi-year learning-performance report from an analytical dataset.',
          },
          {
            id: 'retention',
            label: 'RETENTION / DELETION',
            explanation:
              'When permitted by policy and requirements, data eventually reaches the end of its retention lifecycle.',
            example:
              'Temporary records that are no longer required are deleted in controlled batches.',
          },
        ],
        closing:
          'At scale, data architecture is a lifecycle. New data is operational, older data becomes historical, and different storage and processing systems can be used according to access patterns and business requirements.',
      },
    },

    {
      id: 'mc11-s05-data-scale-simulation',
      type: 'simulation',
      title: 'Design the Data Lifecycle',
      description:
        'Practice selecting the appropriate strategy for different EDDUU data-at-scale situations.',
      simulation: {
        instruction:
          'Match each EDDUU data scenario with the strategy that best addresses the described scale problem.',
        items: [
          {
            id: 'current-progress',
            label:
              'Current student progress is read frequently by live application requests.',
            description:
              'This data needs fast operational access.',
            correctTargetId: 'hot-data',
          },
          {
            id: 'old-activity',
            label:
              'Five-year-old learning activity is rarely accessed but must be retained.',
            description:
              'The information remains valuable but does not require the same operational characteristics.',
            correctTargetId: 'archive',
          },
          {
            id: 'dashboard-summary',
            label:
              'Administrators repeatedly request daily completion totals calculated from millions of raw events.',
            description:
              'Repeatedly scanning raw history for the same summary is inefficient.',
            correctTargetId: 'aggregation',
          },
          {
            id: 'large-report',
            label:
              'A multi-year report scans a very large historical dataset and competes with live student transactions.',
            description:
              'A heavy analytical workload is affecting an operational workload.',
            correctTargetId: 'analytics-separation',
          },
          {
            id: 'expired-data',
            label:
              'Temporary records have reached the end of their defined retention period.',
            description:
              'The records no longer need to remain in the active dataset.',
            correctTargetId: 'controlled-deletion',
          },
        ],
        targets: [
          {
            id: 'hot-data',
            label: 'HOT OPERATIONAL DATA',
            description:
              'Keep frequently accessed data in the fast operational path.',
          },
          {
            id: 'archive',
            label: 'ARCHIVE HISTORICAL DATA',
            description:
              'Move infrequently accessed but retained data to appropriate archival storage.',
          },
          {
            id: 'aggregation',
            label: 'PRECOMPUTED AGGREGATION',
            description:
              'Maintain useful summaries instead of repeatedly scanning all raw records.',
          },
          {
            id: 'analytics-separation',
            label: 'SEPARATE ANALYTICS',
            description:
              'Move heavy analytical workloads away from critical transactional workloads.',
          },
          {
            id: 'controlled-deletion',
            label: 'CONTROLLED DELETION',
            description:
              'Remove expired data in a controlled manner according to retention requirements.',
          },
        ],
        successMessage:
          'Excellent. You treated data according to access patterns, lifecycle requirements and workload characteristics.',
        failureMessage:
          'First identify whether the data is active, historical, repeatedly aggregated, analytically processed or expired.',
      },
    },

    {
      id: 'mc11-s05-data-scale-question',
      type: 'question',
      title: 'Data at Scale Check',
      description:
        'Check whether you can distinguish operational data from historical and analytical data.',
      question: {
        id: 'mc11-s05-data-scale',
        type: 'single-choice',
        question:
          'EDDUU stores billions of historical learning events. A multi-year analytics report is causing slowdowns in the live student application. What is the most appropriate architectural direction?',
        options: [
          {
            id: 'separate-analytics',
            text:
              'Separate heavy analytical workloads from the transactional workload using an appropriate analytical data path.',
            correct: true,
          },
          {
            id: 'more-api',
            text:
              'Add more API replicas while continuing to run the same heavy report against the transactional database.',
            correct: false,
          },
          {
            id: 'delete-history',
            text:
              'Delete all historical learning events immediately.',
            correct: false,
          },
          {
            id: 'disable-report',
            text:
              'Disable all reporting permanently so the transactional database remains untouched.',
            correct: false,
          },
        ],
        explanation:
          'Large analytical workloads can interfere with transactional workloads when they share the same resources. Separating analytical processing allows each workload to use infrastructure and data structures appropriate to its access pattern.',
        hints: [
          'The problem is workload interference between analytics and live transactions.',
          'Historical data can have a different storage and processing path from current operational data.',
        ],
      },
    },
  ],
}
