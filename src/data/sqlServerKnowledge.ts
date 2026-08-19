import type { KnowledgeDefinition } from './knowledge'

export const sqlServerKnowledge: KnowledgeDefinition = {
  technologyId: 'sql-server',
  slug: 'sql-server',
  title: 'What is Microsoft SQL Server?',
  summary:
    'Microsoft SQL Server is an enterprise relational database management system designed for transactional applications, analytics, reporting, security, high availability, and large-scale data workloads.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Microsoft SQL Server?',
      content:
        'Microsoft SQL Server is a relational database management system used to store, process, secure, and retrieve structured data. It is widely used for enterprise applications, transactional systems, reporting, analytics, and business-critical workloads.',
    },
    {
      title: 'Why SQL Server?',
      content:
        'SQL Server is commonly selected by organizations that need a mature relational database platform with strong SQL capabilities, enterprise security, administration tooling, integration with Microsoft technologies, and support for both transactional and analytical workloads.',
      highlights: [
        {
          title: 'Relational',
          description:
            'Stores structured information using tables, relationships, keys, and constraints.',
        },
        {
          title: 'Enterprise ready',
          description:
            'Provides capabilities for security, availability, monitoring, administration, and large production workloads.',
        },
        {
          title: 'Microsoft ecosystem',
          description:
            'Integrates naturally with many Microsoft application, identity, analytics, and cloud technologies.',
        },
        {
          title: 'Transactional and analytical',
          description:
            'Can support operational workloads as well as reporting and analytical use cases.',
        },
      ],
    },
    {
      title: 'Relational Database Model',
      content:
        'SQL Server follows the relational model. Data is organized into tables containing rows and columns, while relationships between entities are represented using keys and constraints.',
      highlights: [
        {
          title: 'Table',
          description:
            'A logical structure containing related records.',
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
            'A logical connection between related entities.',
        },
      ],
    },
    {
      title: 'T-SQL',
      content:
        'SQL Server uses Transact-SQL, commonly called T-SQL, as its primary SQL language. T-SQL extends standard SQL with procedural programming, variables, control flow, error handling, stored procedures, functions, and other database capabilities.',
      highlights: [
        {
          title: 'T-SQL',
          description:
            'Microsoft SQL Server’s programming language extension to SQL.',
        },
        {
          title: 'Stored procedure',
          description:
            'Reusable database-side program logic executed by SQL Server.',
        },
        {
          title: 'Function',
          description:
            'Reusable database logic that returns a value or table according to its definition.',
        },
      ],
    },
    {
      title: 'SQL Server Database Objects',
      content:
        'SQL Server provides tables, views, indexes, stored procedures, functions, triggers, schemas, sequences, and other database objects used to organize data and application logic.',
      highlights: [
        {
          title: 'View',
          description:
            'A virtual table-like representation based on a stored query.',
        },
        {
          title: 'Schema',
          description:
            'A logical namespace used to organize database objects.',
        },
        {
          title: 'Trigger',
          description:
            'Database logic that executes automatically in response to defined data events.',
        },
      ],
    },
    {
      title: 'Primary Keys and Constraints',
      content:
        'SQL Server supports constraints that protect data integrity and enforce business rules. Common constraints include primary keys, foreign keys, unique constraints, check constraints, and not-null requirements.',
      highlights: [
        {
          title: 'PRIMARY KEY',
          description:
            'Defines a key used to uniquely identify records in a table.',
        },
        {
          title: 'FOREIGN KEY',
          description:
            'Maintains relationships and referential integrity between tables.',
        },
        {
          title: 'UNIQUE',
          description:
            'Prevents duplicate values for the constrained column or column set.',
        },
        {
          title: 'CHECK',
          description:
            'Requires stored values to satisfy a defined condition.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'SQL Server supports transactions so multiple related changes can be treated as one logical unit. ACID properties are fundamental for reliable transactional applications.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'All changes in a transaction succeed together or are rolled back.',
        },
        {
          title: 'Consistency',
          description:
            'Transactions preserve defined data integrity rules.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent transactions are controlled according to the configured isolation behavior.',
        },
        {
          title: 'Durability',
          description:
            'Committed changes are persisted according to SQL Server recovery mechanisms.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'Indexes improve query performance by providing efficient access paths to data. SQL Server supports clustered and nonclustered indexes along with other index capabilities for specific workloads.',
      highlights: [
        {
          title: 'Clustered index',
          description:
            'Determines how table rows are organized around the indexed key in a clustered structure.',
        },
        {
          title: 'Nonclustered index',
          description:
            'Provides a separate index structure that points to table data.',
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
        'SQL Server query performance depends on SQL design, indexes, statistics, joins, filtering, sorting, cardinality, memory, CPU, storage, and execution plans. Production optimization should be based on observed workload behavior.',
      highlights: [
        {
          title: 'Execution plan',
          description:
            'The strategy SQL Server uses to execute a query.',
        },
        {
          title: 'Statistics',
          description:
            'Information about data distribution used by the optimizer when selecting execution plans.',
        },
        {
          title: 'Query optimizer',
          description:
            'The database component responsible for selecting an efficient execution strategy.',
        },
      ],
    },
    {
      title: 'Joins',
      content:
        'SQL Server supports relational joins that combine information across tables. Join performance depends on indexes, predicates, cardinality, data distribution, and the execution plan.',
      highlights: [
        {
          title: 'INNER JOIN',
          description:
            'Returns records that satisfy the join condition on both sides.',
        },
        {
          title: 'LEFT JOIN',
          description:
            'Returns records from the left side and matching records from the right side when available.',
        },
        {
          title: 'Join condition',
          description:
            'Defines how records from different tables are related.',
        },
      ],
    },
    {
      title: 'Concurrency and Locking',
      content:
        'SQL Server manages concurrent transactions using locking, row-versioning options, isolation levels, and other mechanisms. Understanding contention is important for diagnosing slow or blocked workloads.',
      highlights: [
        {
          title: 'Lock',
          description:
            'A mechanism used to coordinate concurrent access to database resources.',
        },
        {
          title: 'Blocking',
          description:
            'A situation where one database operation must wait because another operation holds a conflicting resource.',
        },
        {
          title: 'Deadlock',
          description:
            'A situation where transactions wait on each other in a cycle and SQL Server must resolve the conflict.',
        },
      ],
    },
    {
      title: 'Isolation Levels',
      content:
        'SQL Server supports different transaction isolation levels that control how concurrent transactions observe and interact with data. The choice affects consistency, blocking, and concurrency.',
      highlights: [
        {
          title: 'Read committed',
          description:
            'A commonly used isolation level that prevents reading uncommitted changes.',
        },
        {
          title: 'Snapshot',
          description:
            'Uses row versions to provide a transactionally consistent view without relying on the same blocking behavior as traditional locking reads.',
        },
        {
          title: 'Serializable',
          description:
            'Provides stricter isolation and can reduce concurrency when workloads require it.',
        },
      ],
    },
    {
      title: 'Partitioning',
      content:
        'SQL Server supports table and index partitioning for large datasets. Partitioning can improve manageability and may improve performance for suitable workloads when queries can benefit from partition elimination.',
      highlights: [
        {
          title: 'Partition',
          description:
            'A physical subdivision of a larger logical table or index.',
        },
        {
          title: 'Partition elimination',
          description:
            'Avoiding unnecessary partitions when query predicates allow SQL Server to identify relevant partitions.',
        },
      ],
    },
    {
      title: 'High Availability',
      content:
        'SQL Server supports multiple high-availability and disaster-recovery architectures. Depending on requirements, organizations can use Always On availability groups, failover clustering, replication, backups, and other recovery mechanisms.',
      highlights: [
        {
          title: 'Always On availability group',
          description:
            'A SQL Server architecture for maintaining databases across multiple replicas and supporting availability and read-scale scenarios.',
        },
        {
          title: 'Failover',
          description:
            'Switching application service to another suitable database resource after a failure.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring service and data after a database or infrastructure failure.',
        },
      ],
    },
    {
      title: 'Always On Availability Groups',
      content:
        'Always On availability groups provide a mechanism for replicating databases between SQL Server instances and supporting failover and selected read-scale architectures. The design should align with RTO, RPO, workload, and infrastructure requirements.',
      highlights: [
        {
          title: 'Primary replica',
          description:
            'The replica normally responsible for accepting application writes.',
        },
        {
          title: 'Secondary replica',
          description:
            'A replica receiving database changes and potentially supporting selected read or recovery workloads.',
        },
        {
          title: 'Automatic failover',
          description:
            'A configured architecture can move database availability to another replica when defined failure conditions occur.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'SQL Server provides full, differential, and transaction-log backup mechanisms. Production recovery design should define backup frequency, retention, secure storage, restoration procedures, and tested recovery objectives.',
      highlights: [
        {
          title: 'Full backup',
          description:
            'A backup containing the database state required for a full recovery starting point.',
        },
        {
          title: 'Differential backup',
          description:
            'Captures changes since the relevant full backup.',
        },
        {
          title: 'Transaction-log backup',
          description:
            'Captures transaction-log information needed for supported point-in-time recovery strategies.',
        },
      ],
    },
    {
      title: 'RTO and RPO',
      content:
        'SQL Server disaster-recovery architecture should be driven by business recovery requirements. RTO defines how quickly service must return, while RPO defines how much recent data loss is acceptable.',
      highlights: [
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
      title: 'Connection Pooling',
      content:
        'Application services should reuse SQL Server connections through connection pools instead of creating uncontrolled connections for every request. Pool sizing should reflect application concurrency and database capacity.',
      highlights: [
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable database connections.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A condition where applications cannot obtain available database connections.',
        },
      ],
    },
    {
      title: 'SQL Server and APIs',
      content:
        'Backend APIs frequently use SQL Server as the transactional persistence layer. The service boundary should handle authentication, authorization, validation, transactions, pagination, error handling, and controlled data exposure.',
      highlights: [
        {
          title: 'Service layer',
          description:
            'The application layer implementing business operations and coordinating database access.',
        },
        {
          title: 'Transaction boundary',
          description:
            'The point defining which database changes should succeed or fail together.',
        },
        {
          title: 'Pagination',
          description:
            'Returning large query results in manageable portions.',
        },
      ],
    },
    {
      title: 'SQL Server and .NET',
      content:
        'SQL Server has strong integration with the Microsoft .NET ecosystem. Applications can use database drivers, ADO.NET, Entity Framework, and other data-access technologies to communicate with SQL Server.',
      highlights: [
        {
          title: 'ADO.NET',
          description:
            'A .NET data-access technology used to communicate with databases.',
        },
        {
          title: 'Entity Framework',
          description:
            'A .NET Object-Relational Mapping framework that provides application-level abstractions over relational data.',
        },
        {
          title: 'ORM',
          description:
            'A layer mapping application objects and operations to relational database structures.',
        },
      ],
    },
    {
      title: 'SQL Server and FastAPI',
      content:
        'FastAPI services can use SQL Server through appropriate Python drivers and database-access libraries. Production systems should address connection pooling, transaction handling, migrations, retries, timeouts, credentials, and observability.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'Software that allows a Python application to communicate with SQL Server.',
        },
        {
          title: 'Migration',
          description:
            'A controlled database schema change applied as an application evolves.',
        },
      ],
    },
    {
      title: 'SQL Server and Analytics',
      content:
        'SQL Server can support analytical and reporting workloads in addition to operational transactions. Organizations may use SQL Server capabilities alongside dedicated data warehouses, lakehouses, or analytics platforms depending on scale and requirements.',
      highlights: [
        {
          title: 'Reporting',
          description:
            'Generating business information from stored data.',
        },
        {
          title: 'Analytical workload',
          description:
            'A workload focused on aggregation, analysis, and business insight rather than primarily operational transactions.',
        },
      ],
    },
    {
      title: 'SQL Server and AI Applications',
      content:
        'AI applications can use SQL Server for transactional business data, customer records, permissions, workflows, metadata, financial information, and other structured enterprise data. AI systems should access this information through governed service and authorization boundaries.',
      highlights: [
        {
          title: 'Enterprise data',
          description:
            'Structured business information maintained by operational systems.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing users, documents, workflows, AI assets, or other records.',
        },
        {
          title: 'Governed access',
          description:
            'Ensuring AI applications only access information permitted by business and security rules.',
        },
      ],
    },
    {
      title: 'SQL Server and AI Agents',
      content:
        'AI agents can use SQL Server-backed services for customer information, workflow state, permissions, order status, financial records, task state, and audit records. Agents should normally interact through controlled tools or APIs rather than unrestricted database access.',
      highlights: [
        {
          title: 'Tool boundary',
          description:
            'A controlled interface through which an AI agent performs a specific operation.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether an agent or user is allowed to perform an operation.',
        },
        {
          title: 'Auditability',
          description:
            'The ability to record important system and agent actions for later review.',
        },
      ],
    },
    {
      title: 'SQL Server and RAG',
      content:
        'SQL Server can store structured information surrounding a RAG system, including document metadata, source records, permissions, ingestion status, business entities, and retrieval-related application state. Specialized retrieval infrastructure can be added when semantic search requirements justify it.',
      highlights: [
        {
          title: 'Source metadata',
          description:
            'Information describing where retrieved content originated.',
        },
        {
          title: 'Permission metadata',
          description:
            'Information used to determine whether a user or system can access retrieved content.',
        },
        {
          title: 'Ingestion status',
          description:
            'Information describing whether source content has completed the processing pipeline.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'SQL Server security includes authentication, authorization, role-based access, encryption, network controls, auditing, secret management, patching, and least-privilege practices. Security architecture should protect both the database and the applications that access it.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a user, application, or service.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which database resources and operations an identity can access.',
        },
        {
          title: 'Encryption',
          description:
            'Protects sensitive information against unauthorized disclosure.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the permissions required for legitimate responsibilities.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production SQL Server deployments should monitor query latency, throughput, CPU, memory, storage, I/O, connections, blocking, deadlocks, wait statistics, replication or availability-group health, errors, and backup status.',
      highlights: [
        {
          title: 'Wait statistics',
          description:
            'Information describing where database workloads spend time waiting for resources.',
        },
        {
          title: 'Blocking',
          description:
            'A situation where one operation waits for another operation to release a conflicting resource.',
        },
        {
          title: 'Deadlock',
          description:
            'A circular dependency between transactions that prevents them from progressing normally.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'SQL Server can scale vertically and through architectures that distribute read workloads, provide multiple replicas, partition large datasets, or use appropriate cloud and infrastructure capabilities. Scaling should follow measured workload bottlenecks.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing CPU, memory, storage, or other resources available to the database environment.',
        },
        {
          title: 'Read scaling',
          description:
            'Distributing suitable read workloads across secondary resources or replicas.',
        },
        {
          title: 'Partitioning',
          description:
            'Dividing large logical datasets into manageable physical partitions.',
        },
      ],
    },
    {
      title: 'SQL Server vs PostgreSQL',
      content:
        'SQL Server and PostgreSQL are both mature relational database platforms. SQL Server has deep integration with the Microsoft ecosystem and enterprise tooling, while PostgreSQL is a widely adopted open-source relational platform. The correct choice depends on workload, ecosystem, licensing, operational model, skills, and long-term architecture.',
      highlights: [
        {
          title: 'Microsoft ecosystem',
          description:
            'SQL Server integrates strongly with .NET, Microsoft identity, Azure, and Microsoft analytics tooling.',
        },
        {
          title: 'Open source',
          description:
            'PostgreSQL is an open-source relational database with a broad community ecosystem.',
        },
        {
          title: 'Technology fit',
          description:
            'Database selection should follow actual business and technical requirements.',
        },
      ],
    },
    {
      title: 'SQL Server vs Oracle',
      content:
        'SQL Server and Oracle Database are both enterprise relational platforms with strong transactional, security, availability, and operational capabilities. The choice often depends on existing enterprise investments, application ecosystem, licensing, skills, workload characteristics, and strategic platform direction.',
      highlights: [
        {
          title: 'Enterprise platform',
          description:
            'Both technologies can support large and business-critical workloads.',
        },
        {
          title: 'Ecosystem',
          description:
            'The surrounding application, identity, cloud, analytics, and operational ecosystem can strongly influence technology choice.',
        },
        {
          title: 'Total cost',
          description:
            'Licensing, infrastructure, support, migration, operations, and engineering skills should all be considered.',
        },
      ],
    },
    {
      title: 'When to Use SQL Server',
      content:
        'SQL Server is a strong candidate for enterprise applications, transactional business systems, reporting workloads, organizations heavily invested in Microsoft technologies, and systems requiring mature relational database capabilities.',
      highlights: [
        {
          title: 'Enterprise applications',
          description:
            'Business systems requiring structured transactional data and operational governance.',
        },
        {
          title: 'Microsoft ecosystem',
          description:
            'Organizations using .NET, Azure, Microsoft identity, and related Microsoft services.',
        },
        {
          title: 'Business-critical workloads',
          description:
            'Systems where correctness, availability, security, and recoverability are important.',
        },
      ],
    },
    {
      title: 'When Not to Use SQL Server',
      content:
        'SQL Server may not be the best choice when the workload is fundamentally document-oriented, graph-oriented, search-first, embedded and local, or when the organization does not need its enterprise capabilities and a simpler database better satisfies the requirements.',
      highlights: [
        {
          title: 'Embedded workload',
          description:
            'Local applications may be better served by an embedded database such as SQLite.',
        },
        {
          title: 'Document-first workload',
          description:
            'Applications centered around flexible hierarchical documents may benefit from a document database.',
        },
        {
          title: 'Specialized workload',
          description:
            'Graph, search, or highly specialized analytical workloads may require dedicated technologies.',
        },
      ],
    },
    {
      title: 'SQL Server for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, SQL Server knowledge should focus on architecture and trade-offs: workload fit, transactions, indexing, concurrency, availability, disaster recovery, security, observability, licensing, integration with the Microsoft ecosystem, migration risk, and operational ownership.',
    },
    {
      title: 'Common SQL Server Mistakes',
      content:
        'Common mistakes include missing or poorly designed indexes, inefficient queries, long-running transactions, uncontrolled connections, ignoring blocking and deadlocks, inadequate backup testing, excessive privileges, weak monitoring, and selecting SQL Server without considering total cost and ecosystem fit.',
      highlights: [
        {
          title: 'Missing index',
          description:
            'A required query path lacks an appropriate index and becomes increasingly expensive as data grows.',
        },
        {
          title: 'Long transaction',
          description:
            'A transaction remains open too long and increases contention or resource usage.',
        },
        {
          title: 'Deadlock blindness',
          description:
            'Ignoring recurring deadlocks instead of identifying and correcting the underlying transaction or query patterns.',
        },
      ],
    },
    {
      title: 'Explore SQL Server in EDDUU',
      content:
        'EDDUU connects Microsoft SQL Server with Data, PostgreSQL, MySQL, MariaDB, Oracle Database, SQLite, Redis, APIs, FastAPI, .NET, security, high availability, AI applications, RAG, and AI agents.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'mysql',
    'mariadb',
    'oracle-database',
    'sqlite',
    'redis',
    'rest-apis',
    'fastapi',
    'dotnet',
    'authentication',
    'authorization',
    'rag',
    'agents',
  ],
}

export default sqlServerKnowledge
