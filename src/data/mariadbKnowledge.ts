import type { KnowledgeDefinition } from './knowledge'

export const mariadbKnowledge: KnowledgeDefinition = {
  technologyId: 'mariadb',
  slug: 'mariadb',
  title: 'What is MariaDB?',
  summary:
    'MariaDB is an open-source relational database management system derived from MySQL, designed for transactional applications, SQL workloads, high availability, replication, and scalable database deployments.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is MariaDB?',
      content:
        'MariaDB is an open-source relational database management system. It uses SQL and provides tables, indexes, transactions, constraints, replication, and other capabilities required by production applications. MariaDB originated as a community-driven fork of MySQL and has developed its own features and ecosystem over time.',
    },
    {
      title: 'Why MariaDB?',
      content:
        'MariaDB is commonly used for web applications, transactional systems, enterprise workloads, and environments that want an open-source relational database with strong SQL capabilities and familiar MySQL-style concepts.',
      highlights: [
        {
          title: 'Open source',
          description:
            'MariaDB is developed as an open-source database project with a broad ecosystem.',
        },
        {
          title: 'Relational',
          description:
            'Data is organized using tables, relationships, keys, and SQL.',
        },
        {
          title: 'Transactional',
          description:
            'MariaDB supports transactional workloads through appropriate storage engines and configuration.',
        },
        {
          title: 'MySQL heritage',
          description:
            'MariaDB originated as a fork of MySQL and shares many concepts and compatibility characteristics.',
        },
      ],
    },
    {
      title: 'Relational Database Model',
      content:
        'MariaDB follows the relational database model. Applications store information in tables containing rows and columns and use SQL to query and modify that information.',
      highlights: [
        {
          title: 'Table',
          description:
            'A structured collection of related records.',
        },
        {
          title: 'Row',
          description:
            'An individual record stored in a table.',
        },
        {
          title: 'Column',
          description:
            'An attribute defining one part of a record.',
        },
        {
          title: 'Relationship',
          description:
            'A logical connection between records or tables.',
        },
      ],
    },
    {
      title: 'SQL',
      content:
        'MariaDB uses SQL for data definition, data manipulation, querying, permissions, transactions, and database administration.',
      highlights: [
        {
          title: 'SELECT',
          description:
            'Retrieves records from one or more tables.',
        },
        {
          title: 'INSERT',
          description:
            'Adds new records.',
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
      title: 'Primary Keys and Constraints',
      content:
        'MariaDB supports constraints that help maintain data integrity. Primary keys identify records, while unique, foreign-key, check, and not-null constraints enforce business and structural rules.',
      highlights: [
        {
          title: 'PRIMARY KEY',
          description:
            'Provides a key used to identify records in a table.',
        },
        {
          title: 'FOREIGN KEY',
          description:
            'Defines a relationship between related tables and can enforce referential integrity.',
        },
        {
          title: 'UNIQUE',
          description:
            'Prevents duplicate values according to the defined constraint.',
        },
        {
          title: 'NOT NULL',
          description:
            'Requires a column to contain a value.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'Transactional MariaDB workloads can use ACID properties to preserve correctness when multiple related changes must succeed or fail together.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'A transaction is treated as an all-or-nothing unit.',
        },
        {
          title: 'Consistency',
          description:
            'Transactions preserve defined database integrity rules.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent transactions are controlled according to the database isolation model.',
        },
        {
          title: 'Durability',
          description:
            'Committed data is persisted according to the configured storage and recovery mechanisms.',
        },
      ],
    },
    {
      title: 'Storage Engines',
      content:
        'MariaDB supports storage-engine concepts that determine how table data is stored and managed. InnoDB is an important transactional storage engine, while MariaDB also provides other engines for specialized requirements.',
      highlights: [
        {
          title: 'Storage engine',
          description:
            'The database component responsible for storing and managing table data according to a particular implementation.',
        },
        {
          title: 'InnoDB',
          description:
            'A transactional storage engine commonly used for production relational workloads.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'Indexes allow MariaDB to locate records more efficiently for supported query patterns. Indexes improve reads but consume storage and add work to writes, so they should be designed from actual workload requirements.',
      highlights: [
        {
          title: 'Primary index',
          description:
            'An index associated with the primary key according to the table structure.',
        },
        {
          title: 'Secondary index',
          description:
            'An additional index designed to accelerate other access patterns.',
        },
        {
          title: 'Composite index',
          description:
            'An index containing multiple columns in a defined order.',
        },
      ],
    },
    {
      title: 'Query Optimization',
      content:
        'MariaDB query performance depends on query design, indexes, cardinality, joins, filtering, sorting, data volume, memory, storage, and execution plans. Slow queries should be investigated using measurement rather than assumptions.',
      highlights: [
        {
          title: 'Execution plan',
          description:
            'Information describing how the database expects to execute a query.',
        },
        {
          title: 'Cardinality',
          description:
            'The number or distribution of distinct values within a dataset or indexed column.',
        },
        {
          title: 'Slow query',
          description:
            'A query whose execution time or resource consumption is unacceptable for the workload.',
        },
      ],
    },
    {
      title: 'Joins',
      content:
        'MariaDB supports SQL joins for retrieving related information across tables. Join performance depends on data volume, indexes, predicates, and the execution strategy selected by the database.',
      highlights: [
        {
          title: 'INNER JOIN',
          description:
            'Returns matching records from the joined datasets.',
        },
        {
          title: 'LEFT JOIN',
          description:
            'Keeps records from the left side while including matching records from the right side when available.',
        },
        {
          title: 'Join condition',
          description:
            'The rule used to determine how records from different tables are related.',
        },
      ],
    },
    {
      title: 'Replication',
      content:
        'MariaDB supports replication architectures in which changes from one database server are replicated to other servers. Replication can support read scaling, high availability designs, reporting workloads, and disaster-recovery strategies depending on architecture.',
      highlights: [
        {
          title: 'Primary',
          description:
            'A database instance that produces changes that can be replicated.',
        },
        {
          title: 'Replica',
          description:
            'A database instance that receives replicated changes.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between a change occurring on the source and becoming available on the replica.',
        },
      ],
    },
    {
      title: 'High Availability',
      content:
        'High availability architectures for MariaDB can use replication, clustering, failover automation, load balancing, monitoring, and tested recovery procedures. The architecture should be selected according to the required RTO and RPO.',
      highlights: [
        {
          title: 'Failover',
          description:
            'Switching application traffic to another database instance after a failure.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target time for restoring service.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the acceptable amount of data loss measured in time.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'Production MariaDB systems require a deliberate backup and recovery strategy. Backups should include appropriate retention, secure storage, restoration testing, monitoring, and recovery procedures.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A recoverable copy or representation of database information.',
        },
        {
          title: 'Restore',
          description:
            'The process of recovering database state from backup information.',
        },
        {
          title: 'Recovery testing',
          description:
            'Regularly verifying that backups can actually be restored successfully.',
        },
      ],
    },
    {
      title: 'Connection Pooling',
      content:
        'Applications should manage database connections efficiently. Connection pools allow application instances to reuse connections instead of creating a new database connection for every request.',
      highlights: [
        {
          title: 'Connection pool',
          description:
            'A managed group of reusable database connections.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A condition where applications cannot obtain available database connections.',
        },
      ],
    },
    {
      title: 'MariaDB and APIs',
      content:
        'Backend services commonly use MariaDB as a persistent transactional data store. API architecture should keep database access behind service boundaries and enforce authentication, authorization, validation, transactions, pagination, and controlled data exposure.',
      highlights: [
        {
          title: 'Repository layer',
          description:
            'An application layer responsible for database access and persistence operations.',
        },
        {
          title: 'Transaction boundary',
          description:
            'The part of an application operation that defines which database changes must succeed or fail together.',
        },
        {
          title: 'Pagination',
          description:
            'Returning large query results in manageable portions.',
        },
      ],
    },
    {
      title: 'MariaDB and FastAPI',
      content:
        'FastAPI applications can use MariaDB through Python database drivers and ORM or query-building libraries. Production design should address connection pooling, migrations, transaction handling, retries, timeouts, observability, and security.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'Software that allows an application to communicate with the database.',
        },
        {
          title: 'ORM',
          description:
            'Object-Relational Mapping layer that represents database structures and operations through application-level objects and abstractions.',
        },
        {
          title: 'Migration',
          description:
            'A controlled change to the database schema over time.',
        },
      ],
    },
    {
      title: 'MariaDB and AI Applications',
      content:
        'AI applications can use MariaDB for transactional application data such as users, subscriptions, billing records, workflows, permissions, conversations, and metadata. The database can complement specialized AI infrastructure rather than replacing every specialized data system.',
      highlights: [
        {
          title: 'Transactional data',
          description:
            'Data representing operational business state that must remain correct and consistent.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing AI assets, documents, users, experiments, or application records.',
        },
      ],
    },
    {
      title: 'MariaDB and AI Agents',
      content:
        'AI-agent applications can use MariaDB for durable business state, users, permissions, workflow records, tool execution records, and audit information. Temporary reasoning context can remain in application memory or another appropriate state-management layer.',
      highlights: [
        {
          title: 'Durable state',
          description:
            'State that must survive application restarts and remain available across sessions.',
        },
        {
          title: 'Tool execution record',
          description:
            'A persistent record describing an important tool invocation by an agent.',
        },
        {
          title: 'Audit record',
          description:
            'A record of important actions performed by users, services, or agents.',
        },
      ],
    },
    {
      title: 'MariaDB and RAG',
      content:
        'MariaDB can store document metadata, source information, permissions, application records, ingestion status, and other relational information surrounding a RAG system. Specialized retrieval infrastructure may be used alongside it when semantic or vector retrieval requirements become important.',
      highlights: [
        {
          title: 'Source metadata',
          description:
            'Information describing where retrieved content originated.',
        },
        {
          title: 'Permissions',
          description:
            'Rules determining which users or services are allowed to access specific information.',
        },
        {
          title: 'Ingestion status',
          description:
            'Information describing whether source content has been processed and made available for retrieval.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'MariaDB security includes authentication, authorization, least privilege, encrypted connections, secret management, network controls, auditing where required, patching, backup protection, and secure operational practices.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a user or application connecting to MariaDB.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which database resources and operations an authenticated identity can access.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required for legitimate work.',
        },
        {
          title: 'TLS',
          description:
            'Can protect database traffic while it travels between clients and servers.',
        },
      ],
    },
    {
      title: 'Transactions in Application Design',
      content:
        'Transactions should align with business operations. For example, creating an order and updating related inventory may need a transaction boundary if both changes must remain consistent.',
      highlights: [
        {
          title: 'Business transaction',
          description:
            'A logical business operation that may involve multiple database changes.',
        },
        {
          title: 'Rollback',
          description:
            'Reversing uncommitted database changes when a transaction cannot complete successfully.',
        },
        {
          title: 'Commit',
          description:
            'Making a successful transaction’s changes durable according to the database configuration.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'MariaDB can scale vertically by increasing database resources and horizontally through replication, read distribution, clustering, partitioning, or other architecture patterns. Scaling decisions should be based on measured workload bottlenecks.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing CPU, memory, storage, or other resources available to a database server.',
        },
        {
          title: 'Read scaling',
          description:
            'Distributing suitable read workloads across replicas or other database resources.',
        },
        {
          title: 'Bottleneck',
          description:
            'A resource or operation limiting overall system performance.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production MariaDB systems should monitor query latency, throughput, connection usage, locks, replication lag, errors, storage capacity, CPU, memory, cache behavior, slow queries, and backup health.',
      highlights: [
        {
          title: 'Query latency',
          description:
            'The time required for a database query to complete.',
        },
        {
          title: 'Lock contention',
          description:
            'Competition between transactions for database resources.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between source changes and replica availability.',
        },
      ],
    },
    {
      title: 'MariaDB vs MySQL',
      content:
        'MariaDB and MySQL share significant historical and conceptual similarities, but they are separate database products with different development directions, features, release strategies, and ecosystem considerations. A migration or technology decision should therefore be validated against the exact application features and operational requirements rather than assuming complete equivalence.',
      highlights: [
        {
          title: 'Shared heritage',
          description:
            'MariaDB originated as a fork of MySQL and retains many familiar concepts.',
        },
        {
          title: 'Compatibility',
          description:
            'Many workloads can be compatible, but applications should validate behavior and supported features before migration.',
        },
        {
          title: 'Product choice',
          description:
            'The decision should consider required features, ecosystem, support model, operational tooling, and long-term strategy.',
        },
      ],
    },
    {
      title: 'MariaDB vs PostgreSQL',
      content:
        'MariaDB and PostgreSQL are both mature relational databases, but they differ in architecture, SQL features, ecosystem, operational tooling, and workload characteristics. PostgreSQL is often selected for advanced relational capabilities, while MariaDB can be attractive for workloads aligned with its MySQL heritage and ecosystem.',
      highlights: [
        {
          title: 'Relational',
          description:
            'Both systems provide relational data models and SQL-based access.',
        },
        {
          title: 'Workload fit',
          description:
            'Database selection should follow application requirements, access patterns, consistency needs, and operational constraints.',
        },
      ],
    },
    {
      title: 'When to Use MariaDB',
      content:
        'MariaDB is a strong candidate for transactional web applications, content platforms, business applications, backend services, and other workloads that benefit from a mature relational database and SQL ecosystem.',
      highlights: [
        {
          title: 'Web applications',
          description:
            'Server-side applications requiring structured transactional data.',
        },
        {
          title: 'Business systems',
          description:
            'Applications managing customers, orders, products, workflows, and operational records.',
        },
        {
          title: 'SQL workloads',
          description:
            'Applications where relational querying and transactional consistency are important.',
        },
      ],
    },
    {
      title: 'When Not to Use MariaDB',
      content:
        'MariaDB may not be the best fit when the workload is fundamentally document-oriented, requires specialized graph capabilities, requires search-first architecture, or has highly specialized analytical or distributed data requirements better served by another technology.',
      highlights: [
        {
          title: 'Document-first workload',
          description:
            'A workload where flexible hierarchical documents are the dominant data model.',
        },
        {
          title: 'Graph workload',
          description:
            'A workload centered around deep relationships and graph traversal.',
        },
        {
          title: 'Specialized analytics',
          description:
            'Large analytical workloads that may be better served by dedicated analytical platforms.',
        },
      ],
    },
    {
      title: 'MariaDB for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, MariaDB knowledge should focus on workload fit, schema design, transactions, indexing, replication, availability, security, performance, backup strategy, operational cost, and migration risk. The important leadership decision is not simply knowing SQL, but understanding why and when the organization should choose MariaDB.',
    },
    {
      title: 'Common MariaDB Mistakes',
      content:
        'Common mistakes include missing indexes, poorly designed schemas, oversized transactions, uncontrolled connections, ignoring slow queries, treating replicas as automatically consistent, skipping backup restoration tests, granting excessive database privileges, and assuming MariaDB and MySQL are completely interchangeable.',
      highlights: [
        {
          title: 'Missing index',
          description:
            'A required query path lacks an appropriate index and therefore performs poorly as data grows.',
        },
        {
          title: 'Oversized transaction',
          description:
            'A transaction remains open for too long and increases contention or resource usage.',
        },
        {
          title: 'Replica assumption',
          description:
            'Assuming replicated data is immediately identical without considering replication behavior and lag.',
        },
      ],
    },
    {
      title: 'Explore MariaDB in EDDUU',
      content:
        'EDDUU connects MariaDB with Data, PostgreSQL, MySQL, SQLite, Redis, APIs, FastAPI, security, replication, event-driven systems, AI applications, RAG, and AI agents.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'mysql',
    'sqlite',
    'redis',
    'rest-apis',
    'fastapi',
    'rag',
    'agents',
    'authentication',
    'authorization',
  ],
}

export default mariadbKnowledge
