import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc12Session05: SessionDefinition = {
  id: 'mc12-session-05',
  number: 5,
  stage: 'practice',
  title: 'Data at Scale - Partitioning, Replication and Read Workloads',
  objective:
    'Understand how growing datasets and read-heavy workloads can be distributed using partitioning, replication and deliberate data-access strategies.',
  experiences: [
    {
      id: 'mc12-s05-data-lesson',
      type: 'lesson',
      title: 'When One Database Becomes Too Much',
      lesson: {
        opening:
          'Eventually the amount of data, read traffic or operational workload can exceed what one database instance can comfortably provide. Data architecture must then evolve deliberately.',
        sections: [
          {
            heading: '1. Data growth changes the problem',
            explanation:
              'Large datasets increase storage, indexing, query and maintenance costs.',
            example:
              'EDDUU learning events may grow from millions to billions of records over time.',
          },
          {
            heading: '2. Partitioning',
            explanation:
              'Partitioning divides a logical table into smaller physical partitions according to a chosen key.',
            example:
              'Learning events can be partitioned by event date.',
          },
          {
            heading: '3. Range partitioning',
            explanation:
              'Range partitioning groups records into ranges of a partition key.',
            example:
              'One partition can contain January events and another February events.',
          },
          {
            heading: '4. Read replicas',
            explanation:
              'A read replica can serve appropriate read workloads while the primary handles writes.',
            example:
              'EDDUU reporting queries can be directed toward a read replica when business consistency requirements allow it.',
          },
          {
            heading: '5. Replication lag',
            explanation:
              'A replica may temporarily be behind the primary.',
            example:
              'A newly completed course might appear on the primary immediately while a replica shows it slightly later.',
          },
          {
            heading: '6. Read-after-write decisions',
            explanation:
              'Applications must decide which reads require the freshest data.',
            example:
              'A course-completion confirmation may need to read from the primary immediately after the write.',
          },
          {
            heading: '7. Partition keys matter',
            explanation:
              'A poor partition key can create uneven distribution or inefficient queries.',
            example:
              'Partitioning by a value that all records share does not distribute useful workload.',
          },
          {
            heading: '8. Complexity must justify itself',
            explanation:
              'Partitioning and replicas introduce operational complexity and should solve a real scaling problem.',
            example:
              'A small application may not need replicas simply because larger companies use them.',
          },
        ],
        realWorldConnection:
          'Data systems scale through careful ownership, workload separation, partitioning and replication rather than a single universal technique.',
        keyIdea:
          'Data at scale requires understanding access patterns, data growth and consistency requirements before choosing distribution techniques.',
        recap: [
          'Partitioning divides large logical datasets.',
          'Read replicas can absorb suitable read traffic.',
          'Replication can introduce lag.',
          'Read-after-write requirements must be explicit.',
          'Partition keys should follow workload patterns.',
        ],
      },
    },
    {
      id: 'mc12-s05-data-animation',
      type: 'animation',
      title: 'Visualize Partitioned Learning Events',
      animation: {
        visual: 'database',
        opening:
          'Watch one growing event table become multiple date-based partitions.',
        parts: [
          {
            id: 'events',
            label: 'LEARNING EVENTS',
            explanation:
              'EDDUU continuously records learning activity.',
          },
          {
            id: 'partitioning',
            label: 'PARTITION KEY',
            explanation:
              'Event date is selected as a partitioning dimension.',
          },
          {
            id: 'partitions',
            label: 'DATE PARTITIONS',
            explanation:
              'Rows are organized into smaller physical partitions.',
          },
          {
            id: 'replica',
            label: 'READ REPLICA',
            explanation:
              'Appropriate read traffic can be served by a replica.',
          },
        ],
        closing:
          'Data distribution works only when the partitioning and replication strategy matches actual workload behavior.',
      },
    },
    {
      id: 'mc12-s05-data-simulation',
      type: 'simulation',
      title: 'Choose the Data Distribution Strategy',
      simulation: {
        instruction:
          'Match each workload requirement with the most appropriate data-scale strategy.',
        items: [
          {
            id: 'time-events',
            label: 'Billions of events are naturally queried by event date.',
            correctTargetId: 'partition',
          },
          {
            id: 'reporting',
            label: 'Heavy reporting reads should be separated from primary write traffic where possible.',
            correctTargetId: 'replica',
          },
          {
            id: 'freshness',
            label: 'A user must immediately see a just-created record.',
            correctTargetId: 'primary',
          },
          {
            id: 'replica-delay',
            label: 'A secondary database is behind the primary.',
            correctTargetId: 'lag',
          },
        ],
        targets: [
          { id: 'partition', label: 'PARTITIONING' },
          { id: 'replica', label: 'READ REPLICA' },
          { id: 'primary', label: 'READ FROM PRIMARY' },
          { id: 'lag', label: 'REPLICATION LAG' },
        ],
        successMessage:
          'Excellent. Data distribution decisions are now tied to workload and consistency requirements.',
        failureMessage:
          'Consider data volume, read workload and freshness requirements separately.',
      },
    },
    {
      id: 'mc12-s05-data-question',
      type: 'question',
      title: 'Data Scale Check',
      question: {
        id: 'mc12-s05-data-question',
        type: 'single-choice',
        question:
          'What is an important trade-off when using read replicas?',
        options: [
          {
            id: 'lag',
            text: 'Reads may experience replication lag and therefore may not always reflect the newest write.',
            correct: true,
          },
          {
            id: 'durability',
            text: 'Replication automatically removes the need for backups.',
            correct: false,
          },
          {
            id: 'latency',
            text: 'Replicas guarantee every query will be faster.',
            correct: false,
          },
          {
            id: 'writes',
            text: 'Replicas automatically increase primary write capacity without limits.',
            correct: false,
          },
        ],
        explanation:
          'Read replicas can absorb read traffic, but replication lag means applications must understand freshness requirements.',
      },
    },
  ],
}