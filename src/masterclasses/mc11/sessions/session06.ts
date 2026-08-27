import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc11Session06: SessionDefinition = {
  id: 'mc11-session-06',
  number: 6,
  stage: 'discover',
  title: 'Partitioning & Replication - Scaling Data Access and Availability',
  objective:
    'Understand how partitioning and replication distribute data and workload across database resources, and learn the trade-offs involving partition keys, read scaling, replication lag, consistency and failover.',
  experiences: [
    {
      id: 'mc11-s06-partitioning-lesson',
      type: 'lesson',
      title: 'How Do We Scale the Database Itself?',
      description:
        'Understand how large datasets and growing read workloads can be distributed using partitioning and replication.',
      lesson: {
        opening:
          'Imagine EDDUU has billions of learning-activity records and thousands of application instances. Even after query optimization, one database may eventually become difficult to operate. At that point, the architecture can distribute data and workload rather than asking one database instance to do everything.',
        sections: [
          {
            heading: '1. Partitioning and replication solve different problems',
            explanation:
              'Partitioning divides a dataset into smaller logical pieces, while replication creates additional copies of data. Partitioning is mainly about organizing and distributing data; replication is mainly about availability and serving additional read workloads.',
            example:
              'EDDUU may partition learning activity by month while maintaining replicas of the database for suitable read traffic.',
          },
          {
            heading: '2. What is partitioning?',
            explanation:
              'Partitioning divides a large logical table into smaller physical partitions according to a partitioning rule.',
            example:
              'EDDUU can partition learning activity by month so January records and February records belong to different partitions.',
          },
          {
            heading: '3. Why partition large tables?',
            explanation:
              'Partitioning can make very large datasets easier to manage and can allow queries to avoid scanning partitions that cannot contain the requested data.',
            example:
              'A query asking for activity from August may not need to examine partitions containing data from previous years.',
          },
          {
            heading: '4. Partition pruning',
            explanation:
              'Partition pruning allows the database to skip partitions that cannot contain rows relevant to a query.',
            example:
              'If EDDUU requests learning activity for July 2026 and the table is partitioned by month, unrelated monthly partitions can potentially be excluded from the query.',
          },
          {
            heading: '5. Choosing a partition key',
            explanation:
              'The partition key determines how records are distributed among partitions. It should align with important access patterns and produce manageable partition sizes.',
            example:
              'Timestamp is often a useful partition key for EDDUU event data because learning activity naturally grows over time.',
          },
          {
            heading: '6. Poor partition keys create problems',
            explanation:
              'A poor partitioning strategy can create uneven data distribution, too many partitions or queries that frequently need to inspect many partitions.',
            example:
              'Choosing a value with extremely uneven distribution could cause one EDDUU partition to grow much larger than the others.',
          },
          {
            heading: '7. Range partitioning',
            explanation:
              'Range partitioning places records into ranges of values such as dates or numeric intervals.',
            example:
              'EDDUU can use monthly date ranges for learning activity partitions.',
          },
          {
            heading: '8. Hash partitioning',
            explanation:
              'Hash partitioning distributes records according to a hash of a chosen key and can help spread records more evenly when range-based access is not the primary requirement.',
            example:
              'An EDDUU dataset could distribute records across partitions using a hash of student_id when balanced distribution is more important than time-range queries.',
          },
          {
            heading: '9. Partitioning is not automatically sharding',
            explanation:
              'Partitioning can exist within one database system, while sharding generally distributes partitions across separate database nodes or clusters.',
            example:
              'EDDUU may first partition a large PostgreSQL table inside one cluster before eventually considering distributing data across multiple database nodes.',
          },
          {
            heading: '10. What is replication?',
            explanation:
              'Replication maintains additional copies of data on other database instances so the system can support availability, disaster recovery or additional read capacity.',
            example:
              'An EDDUU primary database can replicate data to one or more read replicas.',
          },
          {
            heading: '11. Primary and replica',
            explanation:
              'A common architecture has a primary handling writes and replicas receiving replicated changes and serving suitable reads.',
            example:
              'EDDUU enrollment updates are written to the primary while compatible reporting queries are served by replicas.',
          },
          {
            heading: '12. Read scaling',
            explanation:
              'Additional replicas can increase the capacity available for suitable read workloads because multiple database instances can serve requests.',
            example:
              'A high-volume EDDUU reporting workload can be distributed across several read replicas rather than sending every read to the primary.',
          },
          {
            heading: '13. Replication does not automatically scale writes',
            explanation:
              'If writes still have to be accepted by one primary, adding read replicas does not automatically increase write throughput.',
            example:
              'Adding five EDDUU read replicas may improve dashboard reads while the primary remains the write bottleneck.',
          },
          {
            heading: '14. Synchronous replication',
            explanation:
              'With synchronous replication, the primary waits for configured replicas to acknowledge a change before considering the operation complete according to the replication policy.',
            example:
              'EDDUU could use synchronous replication where stronger durability is worth additional write latency.',
          },
          {
            heading: '15. Asynchronous replication',
            explanation:
              'With asynchronous replication, the primary can acknowledge work before replicas have necessarily received the change.',
            example:
              'EDDUU can achieve lower write latency with asynchronous replication, but replicas may temporarily lag behind the primary.',
          },
          {
            heading: '16. Replication lag',
            explanation:
              'Replication lag is the delay between a change being committed on the primary and becoming available on a replica.',
            example:
              'A student changes profile information and immediately reads from a lagging replica, temporarily seeing the previous value.',
          },
          {
            heading: '17. Read-after-write consistency',
            explanation:
              'Applications sometimes require a user to immediately see their own successful write. Routing that read to a lagging replica can violate that expectation.',
            example:
              'After an EDDUU student changes an enrollment preference, the next request may need to read from the primary or use another consistency strategy.',
          },
          {
            heading: '18. Replica routing requires application awareness',
            explanation:
              'Not every read can safely go to a replica. The application or data-access layer needs rules for selecting primary versus replica reads.',
            example:
              'EDDUU can route strongly consistent transactional reads to the primary while routing suitable historical reports to replicas.',
          },
          {
            heading: '19. Replicas improve availability',
            explanation:
              'Additional database instances can provide alternative infrastructure if a primary fails, depending on the failover architecture.',
            example:
              'If the EDDUU primary becomes unavailable, an eligible replica can potentially be promoted according to the recovery design.',
          },
          {
            heading: '20. Failover is not magic',
            explanation:
              'Failover requires detection, promotion, connection redirection, application recovery and validation. A replica existing somewhere in the architecture does not by itself create automatic recovery.',
            example:
              'EDDUU needs a defined process for detecting primary failure and directing application traffic to the promoted database instance.',
          },
          {
            heading: '21. Split brain is dangerous',
            explanation:
              'A distributed database system must prevent multiple nodes from independently believing they are the authoritative primary at the same time.',
            example:
              'An incorrect EDDUU failover process could allow conflicting writes to two database nodes.',
          },
          {
            heading: '22. Replicas are not backups',
            explanation:
              'A replica copies changes, so accidental deletion or corruption can also be replicated. Backups provide a separate recovery mechanism.',
            example:
              'If incorrect EDDUU data is deleted on the primary and the deletion replicates, a replica alone may not restore the original records.',
          },
          {
            heading: '23. Partitioning and replication can work together',
            explanation:
              'A large data architecture can use partitioning to organize data and replication to distribute copies and workloads.',
            example:
              'EDDUU can partition activity by time while replicating the database for suitable read workloads and availability.',
          },
          {
            heading: '24. Scale only when the workload requires it',
            explanation:
              'Partitioning and replication add operational complexity. They should be introduced because measured workload characteristics justify them, not simply because they are advanced technologies.',
            example:
              'A small EDDUU deployment may not need complex partitioning or multiple replicas if one well-optimized database already meets its performance and reliability objectives.',
          },
        ],
        realWorldConnection:
          'Large-scale data systems often combine partitioning, replication and workload-aware routing. The architecture must balance performance, availability, consistency, operational complexity and cost rather than maximizing one dimension alone.',
        keyIdea:
          'Partitioning distributes the organization of large datasets; replication creates additional copies for availability and suitable read scaling. They solve related but fundamentally different problems.',
        recap: [
          'Partitioning divides a logical dataset into smaller pieces.',
          'Partition pruning can avoid unnecessary partition scans.',
          'Partition keys should match important access patterns.',
          'Range partitioning is useful for naturally ordered data such as time.',
          'Hash partitioning can provide balanced distribution.',
          'Sharding distributes data across separate database nodes.',
          'Replication creates additional copies of data.',
          'Read replicas can increase suitable read capacity.',
          'Read replicas do not automatically increase primary write capacity.',
          'Synchronous replication trades additional write latency for stronger replication guarantees.',
          'Asynchronous replication can provide lower write latency with possible lag.',
          'Replication lag can affect read-after-write behavior.',
          'Failover requires a complete operational design.',
          'Replicas are not substitutes for independent backups.',
          'Partitioning and replication can be combined.',
        ],
      },
    },

    {
      id: 'mc11-s06-partition-replication-animation',
      type: 'animation',
      title: 'Watch EDDUU Distribute Its Data',
      description:
        'Visualize partitioned activity data and replicated database instances handling different workloads.',
      animation: {
        visual: 'distributed',
        opening:
          'Follow EDDUU learning activity as the platform grows from one large database into a partitioned and replicated architecture.',
        parts: [
          {
            id: 'large-table',
            label: 'LARGE ACTIVITY TABLE',
            explanation:
              'The operational database contains a rapidly growing learning-activity dataset.',
            example:
              'Billions of EDDUU learning events are stored in one logical dataset.',
          },
          {
            id: 'time-partitions',
            label: 'TIME PARTITIONS',
            explanation:
              'The dataset is divided according to time ranges so queries can work with relevant partitions.',
            example:
              'Monthly partitions separate current activity from older periods.',
          },
          {
            id: 'primary',
            label: 'PRIMARY DATABASE',
            explanation:
              'The primary accepts writes and acts as the authoritative database node.',
            example:
              'New EDDUU learning events are committed to the primary.',
          },
          {
            id: 'replica-one',
            label: 'READ REPLICA 1',
            explanation:
              'A replica receives changes and serves suitable read traffic.',
            example:
              'Dashboard reads that tolerate replication lag can use Replica 1.',
          },
          {
            id: 'replica-two',
            label: 'READ REPLICA 2',
            explanation:
              'Additional replicas provide more read capacity and another recovery candidate.',
            example:
              'Reporting traffic can be distributed across Replica 2.',
          },
          {
            id: 'replication-lag',
            label: 'REPLICATION LAG',
            explanation:
              'Asynchronous replication can temporarily leave replicas behind the primary.',
            example:
              'A newly changed student preference may not immediately appear on every replica.',
          },
          {
            id: 'failover',
            label: 'FAILOVER',
            explanation:
              'If the primary fails, the recovery system can promote an appropriate replica according to the failover design.',
            example:
              'EDDUU redirects database traffic after a successful primary-failure recovery sequence.',
          },
        ],
        closing:
          'Partitioning organizes large datasets while replication provides additional copies for suitable read workloads and availability. Production architecture must also account for lag, consistency and failover.',
      },
    },

    {
      id: 'mc11-s06-partition-replication-simulation',
      type: 'simulation',
      title: 'Choose the Data Scaling Strategy',
      description:
        'Practice distinguishing partitioning, replication, failover and consistency problems.',
      simulation: {
        instruction:
          'Match each EDDUU architecture situation with the strategy that best addresses the described problem.',
        items: [
          {
            id: 'time-data',
            label:
              'A learning-activity table has billions of timestamped records and most queries target recent months.',
            description:
              'The dataset has a natural time dimension and queries commonly target recent ranges.',
            correctTargetId: 'range-partitioning',
          },
          {
            id: 'read-heavy',
            label:
              'Thousands of reporting queries are competing with transactional reads on the primary database.',
            description:
              'The workload is heavily read-oriented and suitable reads can be separated.',
            correctTargetId: 'read-replica',
          },
          {
            id: 'read-after-write',
            label:
              'A student updates information and immediately expects the next request to show the new value.',
            description:
              'A lagging replica could return stale information.',
            correctTargetId: 'primary-read',
          },
          {
            id: 'replica-lag',
            label:
              'A read replica is several seconds behind the primary.',
            description:
              'The replica has not yet applied all primary changes.',
            correctTargetId: 'replication-lag',
          },
          {
            id: 'primary-failure',
            label:
              'The primary database becomes unavailable and another database node must take over.',
            description:
              'The platform needs an explicit recovery and promotion mechanism.',
            correctTargetId: 'failover',
          },
        ],
        targets: [
          {
            id: 'range-partitioning',
            label: 'RANGE PARTITIONING',
            description:
              'Organize data into value ranges such as time periods.',
          },
          {
            id: 'read-replica',
            label: 'READ REPLICAS',
            description:
              'Serve suitable read workloads from replicated database instances.',
          },
          {
            id: 'primary-read',
            label: 'READ FROM PRIMARY',
            description:
              'Use the authoritative node when immediate read-after-write behavior is required.',
          },
          {
            id: 'replication-lag',
            label: 'REPLICATION LAG',
            description:
              'Recognize that the replica has not yet caught up with the primary.',
          },
          {
            id: 'failover',
            label: 'FAILOVER',
            description:
              'Promote and route traffic to an appropriate recovery database node.',
          },
        ],
        successMessage:
          'Excellent. You correctly separated data organization, read scaling, consistency and recovery concerns.',
        failureMessage:
          'Ask what problem is actually being described: data organization, read capacity, stale reads, lag or primary failure.',
      },
    },

    {
      id: 'mc11-s06-partition-replication-question',
      type: 'question',
      title: 'Partitioning & Replication Check',
      description:
        'Check whether you understand the difference between partitioning and replication.',
      question: {
        id: 'mc11-s06-partition-replication',
        type: 'single-choice',
        question:
          'EDDUU has a very large learning-activity table where most queries request records from recent months. What is the most appropriate first architectural investigation?',
        options: [
          {
            id: 'time-partition',
            text:
              'Investigate time-based range partitioning so queries can potentially avoid unrelated historical partitions.',
            correct: true,
          },
          {
            id: 'replica-only',
            text:
              'Add read replicas and assume the large table itself no longer needs to be organized.',
            correct: false,
          },
          {
            id: 'remove-history',
            text:
              'Delete all historical records regardless of retention requirements.',
            correct: false,
          },
          {
            id: 'more-api',
            text:
              'Add application replicas without investigating the database access pattern.',
            correct: false,
          },
        ],
        explanation:
          'A large timestamped dataset with queries concentrated on recent time ranges is a natural candidate for investigating time-based range partitioning and partition pruning. Replication solves a different problem: creating additional copies for availability and suitable read workloads.',
        hints: [
          'Look at the shape of the data and the query pattern.',
          'Partitioning and replication are different tools for different scaling problems.',
        ],
      },
    },
  ],
}
