import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session03: SessionDefinition = {
  id: 'mc08-session-03',
  number: 3,
  stage: 'discover',
  title: 'Storage & Database Architecture - Choosing the Right Data Foundation',
  objective:
    'Learn how to select storage and database architectures based on data characteristics, access patterns, consistency, availability, recovery, scaling and cost.',
  experiences: [
    {
      id: 'mc08-s03-storage-lesson',
      type: 'lesson',
      title: 'Designing the Data Layer in the Cloud',
      description:
        'Move from memorizing storage products to making architecture decisions based on the behaviour and value of the data.',
      lesson: {
        opening:
          'The EDDUU learning platform stores many different kinds of information. Student profiles, course metadata, assessment results, recorded lectures, generated reports, logs and temporary cache data do not have the same requirements. Treating every piece of data as if it belongs in the same database creates unnecessary cost, poor performance and operational problems. Cloud storage architecture begins by understanding the data itself.',
        sections: [
          {
            heading: '1. Start with the data, not the storage product',
            explanation:
              'The first question is what kind of data the system produces and how that data is used. Data characteristics include structure, size, access frequency, durability requirements, update patterns and relationships.',
            example:
              'Student marks require transactional updates and reliable queries, while a recorded lecture video is a large object that may be read many times but does not need relational joins.',
          },
          {
            heading: '2. Object storage is designed for objects',
            explanation:
              'Object storage stores files or objects together with metadata and identifiers. It is well suited for large unstructured content such as videos, images, documents, exports and backups.',
            example:
              'EDUUU can store recorded lectures in object storage and keep only the metadata and object location in its transactional database.',
          },
          {
            heading: '3. Block storage behaves like attached disk',
            explanation:
              'Block storage provides storage volumes that can be attached to compute resources and used by operating systems and applications like disks. It is useful when applications require low-level filesystem-style access.',
            example:
              'A cloud virtual machine running a stateful application may require an attached block volume for its application data or operating-system filesystem.',
          },
          {
            heading: '4. File storage supports shared filesystem access',
            explanation:
              'File storage exposes shared filesystem semantics that can be useful when multiple compute resources need access to the same directory structure and files.',
            example:
              'Multiple application servers may need access to shared generated files when the application is designed around filesystem-based workflows.',
          },
          {
            heading: '5. Relational databases solve structured transactional problems',
            explanation:
              'Relational databases organize data into structured tables and support relationships, transactions and powerful query capabilities. They are often appropriate when correctness and transactional integrity are important.',
            example:
              'EDUUU can use a relational database for students, courses, enrollments, assessments and results because these entities have relationships and transactional requirements.',
          },
          {
            heading: '6. NoSQL is a workload decision, not a replacement for SQL',
            explanation:
              'NoSQL databases can provide different data models and scaling characteristics. They are useful for workloads where flexible schemas, very high scale or access-pattern-specific data models are important. They should not be selected simply because they are considered modern.',
            example:
              'A high-volume event or activity workload with predictable key-based access may be better suited to a NoSQL model than a highly relational transactional schema.',
          },
          {
            heading: '7. Identify the source of truth',
            explanation:
              'A system should clearly identify which data store is authoritative for each business fact. Caches, search indexes, replicas and derived stores should not accidentally become competing sources of truth.',
            example:
              'the EDDUUU transactional database may remain the source of truth for assessment results while a cache stores frequently accessed summaries for faster reads.',
          },
          {
            heading: '8. Consistency is a business requirement',
            explanation:
              'Different data requires different consistency guarantees. Some operations require immediately visible changes, while others can tolerate eventual propagation. The correct consistency model depends on business impact.',
            example:
              'An assessment score update should be strongly controlled because showing an incorrect result can affect a student outcome, while a course recommendation counter may tolerate delayed updates.',
          },
          {
            heading: '9. Read-heavy and write-heavy workloads behave differently',
            explanation:
              'Database architecture should consider whether the workload is dominated by reads, writes or a balanced mixture. Read replicas, caching, partitioning and specialized data models can address different workload patterns.',
            example:
              'During examinations, many students may repeatedly read course and assessment information while only a smaller number of operations update authoritative results.',
          },
          {
            heading: '10. Database scaling has limits and trade-offs',
            explanation:
              'Scaling a database can involve larger instances, read replicas, partitioning, sharding or changes to the data model. Each approach introduces operational and consistency trade-offs.',
            example:
              'Adding more API instances may increase application throughput, but if all instances depend on one database connection pool, the database layer can still become the bottleneck.',
          },
          {
            heading: '11. Caching reduces repeated work',
            explanation:
              'Caching keeps frequently accessed data closer to the application so repeated requests do not always reach the primary data store. A cache improves performance but introduces invalidation and freshness concerns.',
            example:
              'Frequently requested course catalogue information can be cached so thousands of students do not repeatedly execute the same database query.',
          },
          {
            heading: '12. Backup and replication are different',
            explanation:
              'Replication can improve availability and read capacity, while backups provide recovery from data loss or corruption. Replication alone is not a substitute for historical recovery because corrupted data can propagate to replicas.',
            example:
              'If an administrator accidentally deletes records, a backup may be required to recover data even when the database has healthy replicas.',
          },
          {
            heading: '13. Recovery requirements should be measurable',
            explanation:
              'Recovery architecture should define RPO and RTO. RPO describes how much data loss the organization can tolerate, while RTO describes how quickly service should be restored.',
            example:
              'EDUUU may decide that assessment results can tolerate only a few minutes of potential data loss and that the examination platform must recover within a defined operational target.',
          },
          {
            heading: '14. Data lifecycle affects cost',
            explanation:
              'Not all data needs the same storage performance forever. Frequently accessed data may need fast storage while old recordings, reports or backups may be moved to lower-cost storage tiers.',
            example:
              'Older examination reports that are rarely accessed can move to a lower-cost storage tier while recent reports remain immediately accessible.',
          },
          {
            heading: '15. Security must follow the data',
            explanation:
              'Data architecture must consider encryption, access control, retention, backup protection and auditability. The sensitivity of the data should influence who can access it and where it can be stored.',
            example:
              'Student personal information and assessment results should have stricter access controls than publicly available course marketing images.',
          },
        ],
        realWorldConnection:
          'Real cloud programs frequently fail when teams select databases or storage products before understanding data behaviour. Strong technical leaders start with business facts, access patterns, consistency needs, recovery objectives and security requirements, then choose the storage technology that fits those constraints.',
        keyIdea:
          'Cloud data architecture is about matching each workload to an appropriate storage or database model while preserving correctness, availability, recoverability, security and economic efficiency.',
        recap: [
          'Start with data characteristics and access patterns.',
          'Object, block and file storage solve different problems.',
          'Relational databases are strong for structured transactional workloads.',
          'NoSQL should be selected because the workload needs its characteristics.',
          'Identify the source of truth for each business fact.',
          'Consistency requirements come from business impact.',
          'Caching improves performance but introduces freshness concerns.',
          'Replication and backup solve different problems.',
          'RPO and RTO make recovery requirements measurable.',
          'Storage lifecycle and security affect long-term architecture and cost.',
        ],
      },
    },
    {
      id: 'mc08-s03-storage-animation',
      type: 'animation',
      title: 'Follow EDDUU Data Through the Cloud',
      description:
        'See how different types of EDDUU data move into different storage systems.',
      animation: {
        visual: 'database',
        opening:
          'One application can require multiple storage technologies because different data has different behaviour.',
        parts: [
          {
            id: 'transactional-data',
            label: 'Transactional Data',
            explanation:
              'Structured business records require transactional database behaviour.',
            example:
              'Students, enrollments, assessments and results live in the primary relational data store.',
          },
          {
            id: 'object-data',
            label: 'Large Objects',
            explanation:
              'Large media and documents are stored as objects rather than database rows.',
            example:
              'Recorded lectures and downloadable course documents are stored in object storage.',
          },
          {
            id: 'cache-data',
            label: 'Cache',
            explanation:
              'Frequently accessed derived data can be held temporarily for faster reads.',
            example:
              'Popular course catalogue responses are cached to reduce repeated database queries.',
          },
          {
            id: 'backup-data',
            label: 'Backup',
            explanation:
              'Historical recovery copies protect against accidental deletion or corruption.',
            example:
              'Database backups allow EDDUU to recover records after a destructive administrative mistake.',
          },
          {
            id: 'recovery',
            label: 'Recovery',
            explanation:
              'Recovery architecture connects technical mechanisms to measurable RPO and RTO requirements.',
            example:
              'The team defines how much assessment data loss is acceptable and how quickly the service must recover.',
          },
        ],
        closing:
          'The correct data architecture comes from workload behaviour, business criticality and recovery requirements rather than from choosing the most popular database.',
      },
    },
    {
      id: 'mc08-s03-storage-simulation',
      type: 'simulation',
      title: 'Choose the Data Architecture',
      description:
        'Match EDDUU workloads with the storage or data capability that best fits their requirements.',
      simulation: {
        instruction:
          'Match each data requirement with the architecture capability that best addresses it.',
        items: [
          {
            id: 'video-storage',
            label: 'Store large recorded lecture videos.',
            description:
              'The data consists of large unstructured objects.',
            correctTargetId: 'object-target',
          },
          {
            id: 'student-results',
            label: 'Store student assessment results with transactional integrity.',
            description:
              'The data is structured and business critical.',
            correctTargetId: 'relational-target',
          },
          {
            id: 'fast-course-reads',
            label: 'Reduce repeated database reads for popular course information.',
            description:
              'The workload is read-heavy and frequently repeated.',
            correctTargetId: 'cache-target',
          },
          {
            id: 'accidental-delete',
            label: 'Recover records after accidental destructive deletion.',
            description:
              'Historical recovery is required.',
            correctTargetId: 'backup-target',
          },
          {
            id: 'shared-files',
            label: 'Allow multiple compute resources to access shared filesystem-style files.',
            description:
              'The workload needs shared filesystem semantics.',
            correctTargetId: 'file-target',
          },
        ],
        targets: [
          {
            id: 'object-target',
            label: 'OBJECT STORAGE',
            description:
              'Stores large unstructured objects such as media and documents.',
          },
          {
            id: 'relational-target',
            label: 'RELATIONAL DATABASE',
            description:
              'Supports structured data, relationships and transactions.',
          },
          {
            id: 'cache-target',
            label: 'CACHE',
            description:
              'Keeps frequently accessed data closer to the application.',
          },
          {
            id: 'backup-target',
            label: 'BACKUP',
            description:
              'Provides historical recovery capability.',
          },
          {
            id: 'file-target',
            label: 'FILE STORAGE',
            description:
              'Provides shared filesystem-style access.',
          },
        ],
        successMessage:
          'Correct. The storage decision follows the workload instead of forcing every type of data into one technology.',
        failureMessage:
          'Look at the data behaviour first: large objects, transactional records, repeated reads, historical recovery or shared filesystem access.',
      },
    },
    {
      id: 'mc08-s03-storage-question',
      type: 'question',
      title: 'Storage Architecture Check',
      description:
        'Test whether you can reason about a database bottleneck and choose an appropriate next architectural step.',
      question: {
        id: 'mc08-s03-storage-architecture',
        type: 'single-choice',
        question:
          'EDUUU has increased API instances from five to twenty. The application is healthy, but database CPU and connection usage are now saturated. Which conclusion is the most accurate?',
        options: [
          {
            id: 'database-bottleneck',
            text:
              'The database layer has become a bottleneck and needs its own capacity or workload strategy.',
            correct: true,
          },
          {
            id: 'more-api',
            text:
              'The team should keep adding API instances because application compute always removes database bottlenecks.',
            correct: false,
          },
          {
            id: 'remove-db',
            text:
              'The database should be removed because cloud applications should not use databases.',
            correct: false,
          },
          {
            id: 'larger-cache-only',
            text:
              'A cache should always replace the authoritative database.',
            correct: false,
          },
        ],
        explanation:
          'Scaling the application layer can increase pressure on downstream dependencies. Database capacity, connection management, query efficiency, caching and read-scaling strategies must be evaluated independently.',
      },
    },
  ],
}