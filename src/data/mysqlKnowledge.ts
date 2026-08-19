import type { KnowledgeDefinition } from './knowledge'

export const mysqlKnowledge: KnowledgeDefinition = {
  technologyId: 'mysql',
  slug: 'mysql',
  title: 'What is MySQL?',
  summary:
    'MySQL is a widely used relational database management system designed for transactional applications, structured data, SQL queries, and scalable web workloads.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is MySQL?',
      content:
        'MySQL is a relational database management system that stores structured information in tables and provides SQL for creating, reading, updating, and deleting data. It is widely used for web applications, enterprise systems, SaaS products, and transactional workloads.',
    },
    {
      title: 'Why is MySQL widely used?',
      content:
        'MySQL became popular because it is relatively easy to operate, widely supported by application frameworks and hosting platforms, and well suited to common transactional web workloads.',
      highlights: [
        {
          title: 'Relational model',
          description:
            'Data is organized into tables with defined relationships.',
        },
        {
          title: 'SQL',
          description:
            'Applications use SQL to query and modify data.',
        },
        {
          title: 'Transactional workloads',
          description:
            'MySQL supports applications that require consistent database updates.',
        },
        {
          title: 'Large ecosystem',
          description:
            'MySQL has broad tooling, framework, hosting, and operational support.',
        },
      ],
    },
    {
      title: 'MySQL Architecture',
      content:
        'A MySQL deployment typically consists of a server process that manages connections, SQL parsing, query execution, transactions, storage, and access to database objects. Storage-engine capabilities are an important part of MySQL architecture.',
      highlights: [
        {
          title: 'MySQL Server',
          description:
            'The database server responsible for processing client requests.',
        },
        {
          title: 'Storage engine',
          description:
            'The component responsible for how table data and indexes are stored and managed.',
        },
        {
          title: 'Client',
          description:
            'An application, command-line tool, or database driver that connects to MySQL.',
        },
      ],
    },
    {
      title: 'InnoDB',
      content:
        'InnoDB is the default general-purpose storage engine in modern MySQL and is commonly used for transactional applications. It provides transactions, row-level locking, foreign keys, crash recovery, and other important database capabilities.',
      highlights: [
        {
          title: 'Transactions',
          description:
            'Supports transactional changes that can be committed or rolled back.',
        },
        {
          title: 'Row-level locking',
          description:
            'Allows concurrent operations with more granular locking than table-wide locking.',
        },
        {
          title: 'Foreign keys',
          description:
            'Supports referential integrity between related tables.',
        },
      ],
    },
    {
      title: 'Tables, Rows, and Columns',
      content:
        'MySQL stores relational data in tables. Each table contains rows representing records and columns representing attributes of those records.',
      highlights: [
        {
          title: 'Table',
          description:
            'A structured collection of related records.',
        },
        {
          title: 'Row',
          description:
            'One record stored in a table.',
        },
        {
          title: 'Column',
          description:
            'A defined attribute of records in a table.',
        },
      ],
    },
    {
      title: 'SQL',
      content:
        'SQL is the primary language used to interact with MySQL. Common operations include SELECT, INSERT, UPDATE, DELETE, CREATE, ALTER, and DROP.',
      highlights: [
        {
          title: 'SELECT',
          description:
            'Reads information from the database.',
        },
        {
          title: 'INSERT',
          description:
            'Creates new records.',
        },
        {
          title: 'UPDATE',
          description:
            'Changes existing records.',
        },
        {
          title: 'DELETE',
          description:
            'Removes records.',
        },
      ],
    },
    {
      title: 'Primary Keys',
      content:
        'A primary key uniquely identifies records in a table. Primary keys are essential for reliable record identification and are commonly used by indexes and relationships.',
      highlights: [
        {
          title: 'Primary key',
          description:
            'A column or combination of columns that uniquely identifies a row.',
        },
        {
          title: 'AUTO_INCREMENT',
          description:
            'A commonly used MySQL mechanism for generating sequential numeric identifiers.',
        },
      ],
    },
    {
      title: 'Foreign Keys',
      content:
        'Foreign keys connect related tables and help enforce referential integrity. For example, an orders table can reference a customer table through a customer identifier.',
      highlights: [
        {
          title: 'Foreign key',
          description:
            'A column that references a key in another table.',
        },
        {
          title: 'Referential integrity',
          description:
            'Protection against invalid relationships between related records.',
        },
      ],
    },
    {
      title: 'Joins',
      content:
        'Joins allow MySQL to combine related information from multiple tables. Common join types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and CROSS JOIN.',
      highlights: [
        {
          title: 'INNER JOIN',
          description:
            'Returns records where matching rows exist on both sides.',
        },
        {
          title: 'LEFT JOIN',
          description:
            'Returns all rows from the left table and matching rows from the right table.',
        },
        {
          title: 'Many-to-many',
          description:
            'Usually represented using an intermediate junction table.',
        },
      ],
    },
    {
      title: 'Constraints',
      content:
        'Constraints enforce data-quality rules at the database level. Common constraints include NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, and CHECK.',
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
            'Defines a condition that permitted values must satisfy.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'Transactional MySQL workloads commonly use InnoDB. Transactions allow related operations to succeed together or be rolled back together and are commonly understood through Atomicity, Consistency, Isolation, and Durability.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'The transaction is treated as an all-or-nothing unit.',
        },
        {
          title: 'Consistency',
          description:
            'Valid database rules remain satisfied after a successful transaction.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent transactions are controlled according to the configured isolation behavior.',
        },
        {
          title: 'Durability',
          description:
            'Committed changes are persisted according to the database durability mechanisms.',
        },
      ],
    },
    {
      title: 'Isolation Levels',
      content:
        'MySQL with InnoDB supports transaction isolation levels that control how concurrent transactions interact. Choosing the appropriate level requires balancing consistency requirements and concurrency.',
      highlights: [
        {
          title: 'READ COMMITTED',
          description:
            'A transaction sees committed changes according to the isolation semantics.',
        },
        {
          title: 'REPEATABLE READ',
          description:
            'Provides a consistent read view for a transaction and is an important MySQL isolation mode.',
        },
        {
          title: 'SERIALIZABLE',
          description:
            'Provides stronger isolation and can reduce concurrency.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'Indexes improve the efficiency of queries that match their indexed access patterns. However, indexes consume storage and add overhead to insert, update, and delete operations.',
      highlights: [
        {
          title: 'B-tree index',
          description:
            'A common index structure used for equality and range-oriented access patterns.',
        },
        {
          title: 'Composite index',
          description:
            'An index containing multiple columns and useful when query patterns align with its column order.',
        },
        {
          title: 'Covering index',
          description:
            'An index containing enough information for a query to be satisfied without additional table access in suitable cases.',
        },
      ],
    },
    {
      title: 'Query Optimization',
      content:
        'MySQL query performance depends on schema design, indexes, SQL structure, data distribution, statistics, execution plans, connection behavior, and hardware resources. Optimization should begin with measurement rather than assumptions.',
      highlights: [
        {
          title: 'EXPLAIN',
          description:
            'Used to inspect how MySQL plans to execute a query.',
        },
        {
          title: 'Execution plan',
          description:
            'The operations MySQL expects to perform for a query.',
        },
        {
          title: 'Slow query',
          description:
            'A query whose latency is materially higher than the application requirement.',
        },
      ],
    },
    {
      title: 'Normalization',
      content:
        'Normalization organizes relational data to reduce inappropriate duplication and update anomalies. MySQL schemas should normally begin with a clear relational model and be denormalized only for deliberate workload reasons.',
      highlights: [
        {
          title: 'Normalization',
          description:
            'Structuring data to improve consistency and reduce unnecessary duplication.',
        },
        {
          title: 'Denormalization',
          description:
            'Intentionally duplicating or restructuring information to optimize selected workloads.',
        },
      ],
    },
    {
      title: 'JSON Data',
      content:
        'Modern MySQL versions support a native JSON data type and JSON functions. JSON can be useful for flexible attributes, but core relational business data should not automatically be moved into JSON simply because the format is convenient.',
      highlights: [
        {
          title: 'JSON',
          description:
            'A structured representation useful for semi-structured application data.',
        },
        {
          title: 'JSON functions',
          description:
            'Functions for extracting, modifying, and querying JSON content.',
        },
        {
          title: 'Schema trade-off',
          description:
            'JSON flexibility can reduce relational constraints and complicate some queries if used excessively.',
        },
      ],
    },
    {
      title: 'Replication',
      content:
        'MySQL replication maintains copies of database changes on other MySQL instances. Replication can support read scaling, disaster recovery, reporting workloads, and high-availability architectures depending on the design.',
      highlights: [
        {
          title: 'Source',
          description:
            'The MySQL instance that produces changes for replication.',
        },
        {
          title: 'Replica',
          description:
            'A MySQL instance that receives replicated changes.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between a change on the source and its availability on a replica.',
        },
      ],
    },
    {
      title: 'Read Replicas',
      content:
        'Read replicas can serve read-heavy workloads while writes continue through the primary database. Applications must account for replication lag when a read immediately follows a write.',
      highlights: [
        {
          title: 'Read scaling',
          description:
            'Distributing read traffic across additional database instances.',
        },
        {
          title: 'Read-after-write',
          description:
            'A requirement that a subsequent read observes a recently committed write.',
        },
      ],
    },
    {
      title: 'Partitioning',
      content:
        'MySQL supports partitioning that divides a table into smaller logical partitions. Partitioning can help with very large datasets when the partition strategy aligns with query and data-management patterns.',
      highlights: [
        {
          title: 'Partition key',
          description:
            'A value or expression used to determine where a row belongs.',
        },
        {
          title: 'Partition pruning',
          description:
            'Avoiding unnecessary partitions during query execution when conditions permit it.',
        },
      ],
    },
    {
      title: 'Connection Pooling',
      content:
        'Applications should avoid creating uncontrolled database connections for every request. Connection pools maintain reusable connections and help protect MySQL from connection exhaustion.',
      highlights: [
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable database connections.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A condition where applications cannot obtain an available connection.',
        },
        {
          title: 'Pool sizing',
          description:
            'Choosing connection limits based on application concurrency and database capacity.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'Production MySQL systems require reliable backup and recovery procedures. Backup design should reflect business recovery objectives, retention requirements, data volume, restore time, and acceptable data loss.',
      highlights: [
        {
          title: 'Logical backup',
          description:
            'A representation of database objects and data that can be restored logically.',
        },
        {
          title: 'Physical backup',
          description:
            'A backup of the database storage representation.',
        },
        {
          title: 'Point-in-time recovery',
          description:
            'Recovering a database to a selected point using suitable backups and change logs.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target time for restoring service.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the target amount of acceptable data loss measured in time.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'MySQL security includes authentication, roles and privileges, network restrictions, TLS, credential management, encryption strategies, auditing, and least-privilege access.',
      highlights: [
        {
          title: 'Privilege',
          description:
            'Permission to perform specific operations on database objects.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving an application or user only the permissions required for its responsibilities.',
        },
        {
          title: 'TLS',
          description:
            'Protects database traffic while it travels between clients and servers.',
        },
      ],
    },
    {
      title: 'MySQL with Backend APIs',
      content:
        'Backend services commonly use MySQL as their durable transactional data store. The application layer should handle authentication, authorization, validation, business rules, transaction boundaries, and controlled database access.',
      highlights: [
        {
          title: 'Repository',
          description:
            'A persistence layer responsible for database operations.',
        },
        {
          title: 'Service layer',
          description:
            'An application layer responsible for business workflows and rules.',
        },
        {
          title: 'Migration',
          description:
            'A controlled schema change applied across environments.',
        },
      ],
    },
    {
      title: 'MySQL in Microservices',
      content:
        'In a microservices architecture, database ownership should be deliberate. Allowing many independent services to directly modify the same tables can create tight coupling and make schema evolution difficult.',
      highlights: [
        {
          title: 'Data ownership',
          description:
            'A clearly defined service or domain responsible for a dataset.',
        },
        {
          title: 'Schema coupling',
          description:
            'Dependencies created when multiple services rely on the same internal database structure.',
        },
      ],
    },
    {
      title: 'MySQL and Redis',
      content:
        'MySQL can act as the durable source of truth while Redis provides low-latency caching or temporary state. A production architecture should explicitly define cache invalidation, stale-data behavior, and failure handling.',
      highlights: [
        {
          title: 'Source of truth',
          description:
            'The authoritative durable data store.',
        },
        {
          title: 'Cache',
          description:
            'A faster temporary or derived copy of data.',
        },
        {
          title: 'Cache invalidation',
          description:
            'The process of determining when cached information must be refreshed or removed.',
        },
      ],
    },
    {
      title: 'MySQL for AI Applications',
      content:
        'AI applications can use MySQL for users, accounts, permissions, workflows, metadata, evaluation records, billing information, audit records, and other structured operational data. The database is usually part of the AI application rather than the model itself.',
      highlights: [
        {
          title: 'Metadata',
          description:
            'Information describing another object or process.',
        },
        {
          title: 'Audit record',
          description:
            'A durable record of an important system action.',
        },
        {
          title: 'Operational data',
          description:
            'Data required to run and manage the application.',
        },
      ],
    },
    {
      title: 'MySQL for AI Agents',
      content:
        'Agentic applications can use MySQL to persist users, permissions, tasks, workflow state, tool execution records, and durable business state. Agent actions should still follow normal application authorization and audit controls.',
      highlights: [
        {
          title: 'Workflow state',
          description:
            'Persistent information describing the progress of an agent workflow.',
        },
        {
          title: 'Tool execution record',
          description:
            'Information about a tool invocation performed by an agent.',
        },
        {
          title: 'Authorization',
          description:
            'Controls determining what an agent or user is allowed to do.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production MySQL systems should be monitored for query latency, connection usage, CPU, memory, storage, locks, replication lag, errors, transaction behavior, and slow queries.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required for database operations to complete.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between source changes and replica application.',
        },
        {
          title: 'Slow query monitoring',
          description:
            'Tracking queries that exceed defined performance thresholds.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'MySQL systems can scale vertically by increasing instance resources and horizontally through replication, read scaling, partitioning, caching, sharding strategies, and workload separation. The correct approach depends on the bottleneck.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing CPU, memory, storage, or other resources on a database instance.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Distributing workload across multiple database instances or components.',
        },
        {
          title: 'Sharding',
          description:
            'Distributing different subsets of data across separate database nodes.',
        },
      ],
    },
    {
      title: 'MySQL vs PostgreSQL',
      content:
        'Both MySQL and PostgreSQL are mature relational databases and can support serious production systems. The choice should be driven by workload, SQL requirements, ecosystem, operational capabilities, team expertise, extensions, consistency requirements, and application constraints rather than popularity alone.',
      highlights: [
        {
          title: 'Workload fit',
          description:
            'Choose based on the actual reads, writes, queries, transactions, and scale requirements.',
        },
        {
          title: 'Operational fit',
          description:
            'Consider team expertise, managed-service options, monitoring, backup, recovery, and support.',
        },
        {
          title: 'Architectural fit',
          description:
            'Consider how the database integrates with the rest of the application architecture.',
        },
      ],
    },
    {
      title: 'MySQL for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, MySQL knowledge should focus on workload selection, schema design, transaction requirements, performance, scalability, availability, security, recovery, ownership, operational cost, and engineering trade-offs. Leadership-level database knowledge is about making informed architectural decisions rather than memorizing SQL syntax.',
    },
    {
      title: 'Common MySQL Mistakes',
      content:
        'Common production mistakes include missing indexes, excessive indexes, inefficient queries, uncontrolled connection pools, long-running transactions, poor schema design, ignoring replication lag, insufficient backups, untested recovery, excessive database coupling between services, and choosing a database without understanding the workload.',
      highlights: [
        {
          title: 'Missing index',
          description:
            'A query access pattern lacks an appropriate index and may require expensive data scanning.',
        },
        {
          title: 'Long-running transaction',
          description:
            'A transaction remains open for too long and can affect concurrency and resource usage.',
        },
        {
          title: 'Untested restore',
          description:
            'Backups exist but the team has not verified that the required recovery process actually works.',
        },
      ],
    },
    {
      title: 'Explore MySQL in EDDUU',
      content:
        'EDDUU connects MySQL with relational data modeling, PostgreSQL, Redis, APIs, backend engineering, authentication, authorization, microservices, event-driven systems, cloud infrastructure, observability, AI applications, and technical architecture.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'redis',
    'rest-apis',
    'authentication',
    'authorization',
    'event-driven-architecture',
    'agents',
  ],
}

export default mysqlKnowledge
