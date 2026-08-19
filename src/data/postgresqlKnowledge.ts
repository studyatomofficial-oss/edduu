import type { KnowledgeDefinition } from './knowledge'

export const postgresqlKnowledge: KnowledgeDefinition = {
  technologyId: 'postgresql',
  slug: 'postgresql',
  title: 'What is PostgreSQL?',
  summary:
    'PostgreSQL is an open-source relational database platform designed for reliable transactional workloads, complex queries, extensibility, and modern application systems.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is PostgreSQL?',
      content:
        'PostgreSQL is an open-source relational database management system. It stores structured data in tables and provides SQL, transactions, constraints, indexing, concurrency control, replication capabilities, extensibility, and advanced data types.',
    },
    {
      title: 'Why do we use PostgreSQL?',
      content:
        'PostgreSQL is widely used for production applications because it combines strong transactional guarantees with powerful SQL capabilities, sophisticated indexing, extensibility, and support for both traditional relational data and semi-structured data such as JSON.',
      highlights: [
        {
          title: 'Reliable transactions',
          description:
            'PostgreSQL provides strong transactional guarantees for operational workloads.',
        },
        {
          title: 'Powerful SQL',
          description:
            'It supports complex queries, joins, aggregations, window functions, and advanced SQL features.',
        },
        {
          title: 'Extensible',
          description:
            'PostgreSQL supports extensions, custom data types, functions, operators, and other extensibility mechanisms.',
        },
        {
          title: 'Production ready',
          description:
            'It provides capabilities required for backup, replication, security, monitoring, and high-availability architectures.',
        },
      ],
    },
    {
      title: 'Relational Database',
      content:
        'PostgreSQL is a relational database. Data is organized into tables containing rows and columns, while relationships between entities can be represented using keys and constraints.',
      highlights: [
        {
          title: 'Table',
          description:
            'A structured collection of related records.',
        },
        {
          title: 'Row',
          description:
            'A single record within a table.',
        },
        {
          title: 'Column',
          description:
            'A defined attribute of records stored in a table.',
        },
      ],
    },
    {
      title: 'SQL',
      content:
        'SQL is the primary language used to interact with PostgreSQL. Applications use SQL to create schemas, insert data, query information, update records, delete data, manage transactions, and control database objects.',
      highlights: [
        {
          title: 'SELECT',
          description:
            'Retrieves data from one or more tables or other query sources.',
        },
        {
          title: 'INSERT',
          description:
            'Adds new records to a table.',
        },
        {
          title: 'UPDATE',
          description:
            'Modifies existing records.',
        },
        {
          title: 'DELETE',
          description:
            'Removes records from a table.',
        },
      ],
    },
    {
      title: 'Primary Keys',
      content:
        'A primary key uniquely identifies each row in a table. PostgreSQL can enforce uniqueness and non-null requirements for primary-key columns.',
      highlights: [
        {
          title: 'Primary key',
          description:
            'A column or combination of columns that uniquely identifies a record.',
        },
        {
          title: 'Identity',
          description:
            'A generated identifier commonly used as a primary key.',
        },
      ],
    },
    {
      title: 'Foreign Keys',
      content:
        'A foreign key establishes a relationship between tables by requiring values to reference valid records in another table. This helps preserve referential integrity.',
      highlights: [
        {
          title: 'Foreign key',
          description:
            'A field referencing a key in another table.',
        },
        {
          title: 'Referential integrity',
          description:
            'The guarantee that relationships between related records remain valid.',
        },
      ],
    },
    {
      title: 'Relationships and Joins',
      content:
        'PostgreSQL supports relational joins that combine data from multiple tables. Common joins include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN.',
      highlights: [
        {
          title: 'INNER JOIN',
          description:
            'Returns records having matching values on both sides of the join.',
        },
        {
          title: 'LEFT JOIN',
          description:
            'Returns all records from the left side and matching records from the right side.',
        },
        {
          title: 'Many-to-many',
          description:
            'A relationship commonly represented using an intermediate junction table.',
        },
      ],
    },
    {
      title: 'Constraints',
      content:
        'Constraints allow PostgreSQL to enforce data rules at the database layer. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, and CHECK.',
      highlights: [
        {
          title: 'NOT NULL',
          description:
            'Prevents a column from containing null values.',
        },
        {
          title: 'UNIQUE',
          description:
            'Prevents duplicate values according to the defined uniqueness rule.',
        },
        {
          title: 'CHECK',
          description:
            'Requires values to satisfy a defined condition.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'PostgreSQL supports transactions that group multiple operations into a logical unit. Its transactional behavior is commonly described through the ACID properties: Atomicity, Consistency, Isolation, and Durability.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'A transaction succeeds completely or its changes are rolled back.',
        },
        {
          title: 'Consistency',
          description:
            'A successful transaction preserves defined data integrity rules.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent transactions are controlled according to the selected isolation level.',
        },
        {
          title: 'Durability',
          description:
            'Committed changes are persisted according to PostgreSQL durability guarantees.',
        },
      ],
    },
    {
      title: 'MVCC',
      content:
        'PostgreSQL uses Multi-Version Concurrency Control, or MVCC, to allow transactions to work with appropriate row versions without requiring every read to block concurrent writes. This is a key part of PostgreSQL concurrency behavior.',
      highlights: [
        {
          title: 'MVCC',
          description:
            'Multi-Version Concurrency Control, a mechanism for managing concurrent transactions using row versions.',
        },
        {
          title: 'Row version',
          description:
            'A version of a row associated with transaction visibility.',
        },
        {
          title: 'Visibility',
          description:
            'The rules determining which row versions a transaction can observe.',
        },
      ],
    },
    {
      title: 'Isolation Levels',
      content:
        'Transaction isolation determines how concurrent transactions can observe each other’s changes. PostgreSQL provides isolation behavior that can be selected according to application consistency requirements.',
      highlights: [
        {
          title: 'Read Committed',
          description:
            'The commonly used default isolation level in PostgreSQL.',
        },
        {
          title: 'Repeatable Read',
          description:
            'Provides a stronger consistent view for a transaction.',
        },
        {
          title: 'Serializable',
          description:
            'Provides the strongest isolation semantics and may require transaction retries when serialization conflicts occur.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'Indexes allow PostgreSQL to find matching records more efficiently for supported query patterns. Indexes can improve read performance but add storage and write-maintenance costs.',
      highlights: [
        {
          title: 'B-tree',
          description:
            'The general-purpose index type commonly used for equality and range queries.',
        },
        {
          title: 'GIN',
          description:
            'An index type useful for certain multi-valued and document-oriented search patterns, including some JSONB and full-text workloads.',
        },
        {
          title: 'GiST',
          description:
            'An extensible index framework useful for specialized search and data types.',
        },
        {
          title: 'Index trade-off',
          description:
            'Indexes can accelerate reads but consume storage and add work to writes.',
        },
      ],
    },
    {
      title: 'Query Planning',
      content:
        'PostgreSQL uses a query planner to determine how a SQL statement should be executed. It evaluates possible execution strategies and estimates their costs based on statistics and query structure.',
      highlights: [
        {
          title: 'Query planner',
          description:
            'The component that selects an execution strategy for a query.',
        },
        {
          title: 'Execution plan',
          description:
            'The operations PostgreSQL intends to perform to execute a query.',
        },
        {
          title: 'EXPLAIN',
          description:
            'A PostgreSQL command used to inspect a query execution plan.',
        },
      ],
    },
    {
      title: 'EXPLAIN ANALYZE',
      content:
        'EXPLAIN shows the planned execution strategy, while EXPLAIN ANALYZE actually executes the query and reports runtime statistics. It is an important tool for diagnosing database performance.',
      highlights: [
        {
          title: 'Execution plan',
          description:
            'The planned sequence of database operations.',
        },
        {
          title: 'Actual rows',
          description:
            'The number of rows actually produced by an execution step.',
        },
        {
          title: 'Execution time',
          description:
            'The measured time required to execute the query.',
        },
      ],
    },
    {
      title: 'Normalization',
      content:
        'Normalization is a relational data-modeling technique used to reduce unnecessary duplication and update anomalies. It generally involves organizing data into related tables according to defined dependencies.',
      highlights: [
        {
          title: 'Normalization',
          description:
            'Structuring relational data to reduce inappropriate duplication and improve integrity.',
        },
        {
          title: 'Denormalization',
          description:
            'Intentionally duplicating or restructuring data to improve selected read workloads.',
        },
      ],
    },
    {
      title: 'JSON and JSONB',
      content:
        'PostgreSQL supports JSON and JSONB data types. JSONB stores parsed binary JSON representation and supports indexing and efficient operations for many document-oriented use cases.',
      highlights: [
        {
          title: 'JSON',
          description:
            'A textual JSON representation stored by PostgreSQL.',
        },
        {
          title: 'JSONB',
          description:
            'A binary representation of JSON designed for efficient processing and indexing.',
        },
        {
          title: 'Document data',
          description:
            'Semi-structured information represented inside a relational database.',
        },
      ],
    },
    {
      title: 'Full-Text Search',
      content:
        'PostgreSQL includes full-text search capabilities for searching textual content. This can be useful when application requirements do not justify introducing a separate search platform.',
      highlights: [
        {
          title: 'Full-text search',
          description:
            'Searching textual content using language-aware PostgreSQL capabilities.',
        },
        {
          title: 'tsvector',
          description:
            'A PostgreSQL data type representing processed text for full-text search.',
        },
        {
          title: 'tsquery',
          description:
            'A PostgreSQL representation of a full-text search query.',
        },
      ],
    },
    {
      title: 'Connection Pooling',
      content:
        'Opening a new database connection for every request can be expensive. Connection pooling maintains a controlled set of reusable database connections and allows application instances to share them efficiently.',
      highlights: [
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable database connections.',
        },
        {
          title: 'Pool size',
          description:
            'The number of connections available to application workloads.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A condition where applications cannot obtain an available database connection.',
        },
      ],
    },
    {
      title: 'Replication',
      content:
        'PostgreSQL supports replication architectures that maintain copies of database data on other instances. Replication can improve availability and support read scaling depending on the architecture.',
      highlights: [
        {
          title: 'Primary',
          description:
            'The database instance responsible for accepting the relevant write workload in a replication architecture.',
        },
        {
          title: 'Standby',
          description:
            'A replicated PostgreSQL instance that can support availability or read workloads depending on configuration.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between changes occurring on the primary and becoming available on a replica.',
        },
      ],
    },
    {
      title: 'High Availability',
      content:
        'High-availability PostgreSQL architectures use replication, health monitoring, automated or controlled failover, backups, and operational procedures to reduce downtime.',
      highlights: [
        {
          title: 'Failover',
          description:
            'Moving service responsibility from a failed database instance to another suitable instance.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target maximum time to restore service after a disruption.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the target maximum amount of data loss measured in time.',
        },
      ],
    },
    {
      title: 'Partitioning',
      content:
        'PostgreSQL supports table partitioning, where a logical table is divided into smaller partitions. Partitioning can help manage very large datasets and improve some queries when partition pruning matches access patterns.',
      highlights: [
        {
          title: 'Partition',
          description:
            'A subdivision of a larger logical dataset.',
        },
        {
          title: 'Partition key',
          description:
            'A value used to determine which partition contains a row.',
        },
        {
          title: 'Partition pruning',
          description:
            'Avoiding unnecessary partitions when executing a query.',
        },
      ],
    },
    {
      title: 'Vacuum and Maintenance',
      content:
        'Because PostgreSQL uses MVCC, old row versions can accumulate. VACUUM and related maintenance processes help reclaim or manage storage and maintain database health.',
      highlights: [
        {
          title: 'VACUUM',
          description:
            'A PostgreSQL maintenance operation that helps manage obsolete row versions.',
        },
        {
          title: 'Autovacuum',
          description:
            'PostgreSQL’s automated background maintenance mechanism.',
        },
        {
          title: 'Bloat',
          description:
            'Excess storage caused by accumulated obsolete or inefficiently organized data structures.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'Production PostgreSQL systems require tested backup and recovery procedures. Backups should be designed around business recovery objectives rather than simply being created and forgotten.',
      highlights: [
        {
          title: 'Logical backup',
          description:
            'A backup representing database objects and data in a logical form.',
        },
        {
          title: 'Physical backup',
          description:
            'A backup of the database storage representation.',
        },
        {
          title: 'Point-in-time recovery',
          description:
            'Restoring a database to a selected point in its history using appropriate backup and write-ahead log information.',
        },
      ],
    },
    {
      title: 'Write-Ahead Logging',
      content:
        'PostgreSQL uses Write-Ahead Logging, or WAL, to record changes before corresponding data pages are persisted. WAL is fundamental to durability, crash recovery, and several replication mechanisms.',
      highlights: [
        {
          title: 'WAL',
          description:
            'Write-Ahead Logging, a sequential record of database changes used for durability and recovery.',
        },
        {
          title: 'Crash recovery',
          description:
            'Restoring database consistency after an unexpected failure.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'PostgreSQL security includes authentication, authorization, roles, privileges, network controls, TLS, encryption strategies, auditing, and careful management of credentials.',
      highlights: [
        {
          title: 'Role',
          description:
            'A PostgreSQL identity that can own objects and receive privileges.',
        },
        {
          title: 'Privilege',
          description:
            'Permission to perform an operation on a database object.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required by a user or service.',
        },
      ],
    },
    {
      title: 'PostgreSQL and Application APIs',
      content:
        'Backend applications commonly place an API layer between clients and PostgreSQL. The API handles authentication, authorization, validation, business logic, transaction boundaries, and controlled data access.',
      highlights: [
        {
          title: 'Repository',
          description:
            'An application component responsible for persistence operations.',
        },
        {
          title: 'Service layer',
          description:
            'The application layer containing business rules and workflows.',
        },
        {
          title: 'Transaction boundary',
          description:
            'The point at which a group of related database operations is treated as one transaction.',
        },
      ],
    },
    {
      title: 'PostgreSQL with FastAPI',
      content:
        'FastAPI applications can use PostgreSQL as their primary transactional database. A production architecture typically includes connection pooling, schema migrations, data validation, transaction management, query monitoring, and appropriate repository or data-access patterns.',
      highlights: [
        {
          title: 'FastAPI',
          description:
            'A Python framework for building APIs.',
        },
        {
          title: 'Migration',
          description:
            'A controlled change to database schema.',
        },
        {
          title: 'ORM',
          description:
            'A software layer that maps application objects to relational database structures.',
        },
      ],
    },
    {
      title: 'PostgreSQL and Microservices',
      content:
        'In a microservices architecture, each service may own its data boundary. Sharing one database directly across unrelated services can create tight coupling, so ownership and integration boundaries should be explicit.',
      highlights: [
        {
          title: 'Database ownership',
          description:
            'The responsibility of a service or domain for the data it controls.',
        },
        {
          title: 'Service coupling',
          description:
            'The degree to which one service depends on another service’s internal implementation or data.',
        },
      ],
    },
    {
      title: 'PostgreSQL and Redis',
      content:
        'PostgreSQL is commonly the source of truth for durable application data, while Redis can serve as a cache or low-latency data layer. The architecture must define what happens when cached data becomes stale or Redis is unavailable.',
      highlights: [
        {
          title: 'Source of truth',
          description:
            'The authoritative system containing the durable business state.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Determining when cached information must be refreshed or removed.',
        },
        {
          title: 'Stale data',
          description:
            'Cached information that no longer represents the current source-of-truth state.',
        },
      ],
    },
    {
      title: 'PostgreSQL and RAG',
      content:
        'PostgreSQL can store application metadata, documents, permissions, ingestion state, evaluation records, and other operational data around a RAG system. With appropriate extensions, PostgreSQL can also participate directly in vector-based retrieval architectures.',
      highlights: [
        {
          title: 'RAG',
          description:
            'Retrieval-Augmented Generation combines retrieval with language-model generation.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing another data object, such as source, owner, timestamp, or permissions.',
        },
        {
          title: 'Vector retrieval',
          description:
            'Finding information based on similarity between numerical vector representations.',
        },
      ],
    },
    {
      title: 'PostgreSQL and AI Agents',
      content:
        'AI agent systems can use PostgreSQL to store users, permissions, workflows, tasks, tool execution records, conversation state, audit trails, and other durable application data.',
      highlights: [
        {
          title: 'Agent state',
          description:
            'Persistent information representing the state of an agent workflow.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of important actions performed by a system or workflow.',
        },
        {
          title: 'Workflow state',
          description:
            'Information describing the current progress and status of a multi-step process.',
        },
      ],
    },
    {
      title: 'Performance Optimization',
      content:
        'PostgreSQL performance tuning starts with workload understanding and measurement. Important areas include query plans, indexes, statistics, connection pools, memory configuration, storage performance, transaction patterns, and application behavior.',
      highlights: [
        {
          title: 'Slow query',
          description:
            'A query whose execution latency is materially higher than the application requirement.',
        },
        {
          title: 'Index strategy',
          description:
            'Choosing indexes based on actual query patterns rather than adding indexes indiscriminately.',
        },
        {
          title: 'Measurement',
          description:
            'Using observed metrics and query plans to guide optimization decisions.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'PostgreSQL can scale vertically through larger compute and storage resources and horizontally through architectural patterns such as read replicas, partitioning, caching, and workload separation. Scaling strategy should follow actual bottlenecks.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing the resources available to a database instance.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Distributing workloads across multiple database instances or components.',
        },
        {
          title: 'Bottleneck',
          description:
            'The limiting component that constrains overall system performance or capacity.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production PostgreSQL systems should be monitored for query latency, connection usage, transaction behavior, replication lag, storage, CPU, memory, locks, errors, and other operational signals.',
      highlights: [
        {
          title: 'Database latency',
          description:
            'The time required for database operations to complete.',
        },
        {
          title: 'Connection usage',
          description:
            'The number and utilization of active database connections.',
        },
        {
          title: 'Lock',
          description:
            'A concurrency-control mechanism used to coordinate access to database resources.',
        },
      ],
    },
    {
      title: 'PostgreSQL for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, PostgreSQL knowledge should focus on data modeling, workload selection, transaction requirements, consistency, performance, scalability, availability, security, backup and recovery, operational ownership, and cost. The goal is knowing which architectural decision solves which business problem.',
    },
    {
      title: 'Common PostgreSQL Mistakes',
      content:
        'Common production mistakes include missing indexes, excessive indexes, inefficient queries, unbounded connection pools, long-running transactions, poor schema design, insufficient backups, untested recovery procedures, weak database permissions, and treating the database as infinitely scalable.',
      highlights: [
        {
          title: 'Connection exhaustion',
          description:
            'A condition where the application cannot obtain an available database connection.',
        },
        {
          title: 'Long transaction',
          description:
            'A transaction that remains open for an extended period and can create resource or concurrency problems.',
        },
        {
          title: 'Untested recovery',
          description:
            'Having backups without verifying that they can actually restore the required service.',
        },
      ],
    },
    {
      title: 'Explore PostgreSQL in EDDUU',
      content:
        'EDDUU connects PostgreSQL with SQL, relational modeling, Redis, APIs, FastAPI, authentication, authorization, microservices, Kafka, RAG, AI agents, observability, cloud infrastructure, backup and recovery, and distributed systems.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'redis',
    'rest-apis',
    'fastapi',
    'authentication',
    'authorization',
    'kafka',
    'rag',
    'agents',
  ],
}

export default postgresqlKnowledge
