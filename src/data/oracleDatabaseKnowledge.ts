import type { KnowledgeDefinition } from './knowledge'

export const oracleDatabaseKnowledge: KnowledgeDefinition = {
  technologyId: 'oracle-database',
  slug: 'oracle-database',
  title: 'What is Oracle Database?',
  summary:
    'Oracle Database is an enterprise relational database management system designed for transactional processing, analytics, high availability, security, scalability, and mission-critical workloads.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Oracle Database?',
      content:
        'Oracle Database is an enterprise relational database management system used to store, process, protect, and retrieve structured business data. It is widely used for mission-critical applications where transactional integrity, availability, security, performance, and operational control are important.',
    },
    {
      title: 'Why Oracle Database?',
      content:
        'Oracle Database is typically selected for demanding enterprise workloads that require strong transactional capabilities, mature security controls, sophisticated availability options, large-scale data management, and extensive operational tooling.',
      highlights: [
        {
          title: 'Enterprise database',
          description:
            'Designed to support large and business-critical workloads.',
        },
        {
          title: 'Transactional',
          description:
            'Provides mechanisms for maintaining consistency across business transactions.',
        },
        {
          title: 'High availability',
          description:
            'Supports architectures designed to reduce downtime and improve service continuity.',
        },
        {
          title: 'Security',
          description:
            'Provides extensive database security and access-control capabilities.',
        },
      ],
    },
    {
      title: 'Relational Data Model',
      content:
        'Oracle Database uses the relational model. Information is organized into tables containing rows and columns, with relationships represented through keys and constraints.',
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
            'An attribute defining part of a record.',
        },
        {
          title: 'Relationship',
          description:
            'A logical connection between related data entities.',
        },
      ],
    },
    {
      title: 'SQL and PL/SQL',
      content:
        'Oracle Database uses SQL for querying and manipulating relational data. PL/SQL extends SQL with procedural programming capabilities that allow business logic and database operations to be implemented close to the data.',
      highlights: [
        {
          title: 'SQL',
          description:
            'Used to define, query, insert, update, and delete relational data.',
        },
        {
          title: 'PL/SQL',
          description:
            'Oracle procedural language used for stored procedures, functions, packages, and database-side logic.',
        },
        {
          title: 'Stored procedure',
          description:
            'Reusable database-side program logic that can perform defined operations.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'Oracle Database provides transactional mechanisms designed to preserve correctness when applications perform multiple related changes. ACID properties are central to reliable transactional workloads.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'A transaction completes as a logical unit rather than leaving an unintended partial state.',
        },
        {
          title: 'Consistency',
          description:
            'Transactions preserve defined integrity constraints and database correctness.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent transactions are controlled so that applications observe behavior according to the configured isolation semantics.',
        },
        {
          title: 'Durability',
          description:
            'Committed changes are preserved through Oracle persistence and recovery mechanisms.',
        },
      ],
    },
    {
      title: 'Schema and Database Objects',
      content:
        'Oracle databases contain logical objects such as tables, indexes, views, sequences, procedures, functions, packages, triggers, and other structures used to organize and operate application data.',
      highlights: [
        {
          title: 'Schema',
          description:
            'A logical collection of database objects associated with a database user.',
        },
        {
          title: 'View',
          description:
            'A stored query that presents data through a virtual table-like interface.',
        },
        {
          title: 'Sequence',
          description:
            'A database object that generates numeric values commonly used for identifiers.',
        },
        {
          title: 'Package',
          description:
            'A PL/SQL structure that groups related procedures, functions, and other declarations.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'Oracle Database uses indexes to accelerate supported access patterns. Indexes must be designed around actual queries because they consume storage and add work to data modifications.',
      highlights: [
        {
          title: 'B-tree index',
          description:
            'A commonly used index structure for many relational query patterns.',
        },
        {
          title: 'Composite index',
          description:
            'An index containing multiple columns in a defined order.',
        },
        {
          title: 'Index strategy',
          description:
            'The deliberate selection of indexes based on workload, query patterns, and data distribution.',
        },
      ],
    },
    {
      title: 'Query Optimization',
      content:
        'Oracle query performance depends on SQL design, indexes, statistics, joins, filtering, sorting, data distribution, memory, storage, and execution plans. Production optimization should be driven by measured workload behavior.',
      highlights: [
        {
          title: 'Execution plan',
          description:
            'The strategy Oracle uses to execute a SQL statement.',
        },
        {
          title: 'Optimizer',
          description:
            'The database component responsible for selecting an execution strategy for SQL statements.',
        },
        {
          title: 'Statistics',
          description:
            'Information about data distribution used by the optimizer when choosing execution plans.',
        },
      ],
    },
    {
      title: 'Partitioning',
      content:
        'Partitioning divides large logical tables or indexes into smaller physical pieces while allowing applications to work with the logical object. It can improve manageability and performance for suitable large-scale workloads.',
      highlights: [
        {
          title: 'Partition',
          description:
            'A physical subdivision of a larger logical database object.',
        },
        {
          title: 'Partition pruning',
          description:
            'Avoiding unnecessary partitions when a query contains suitable filtering conditions.',
        },
        {
          title: 'Large dataset',
          description:
            'A workload where data volume makes manageability and query efficiency important architectural concerns.',
        },
      ],
    },
    {
      title: 'High Availability',
      content:
        'Oracle supports enterprise high-availability architectures designed to reduce downtime and maintain application continuity. Depending on requirements, organizations can use replication, standby databases, clustering, failover, and other availability mechanisms.',
      highlights: [
        {
          title: 'Failover',
          description:
            'Switching service to another database resource when the current primary resource becomes unavailable.',
        },
        {
          title: 'Standby database',
          description:
            'A database maintained from another database to support availability or disaster-recovery objectives.',
        },
        {
          title: 'Clustering',
          description:
            'Using multiple database instances or nodes to support availability and scalability requirements.',
        },
      ],
    },
    {
      title: 'Oracle RAC',
      content:
        'Oracle Real Application Clusters, commonly known as RAC, allows multiple database instances to access a shared database. It is designed for selected enterprise workloads requiring high availability and scalability at the database layer.',
      highlights: [
        {
          title: 'RAC',
          description:
            'Real Application Clusters architecture for multiple database instances accessing a shared database.',
        },
        {
          title: 'Cluster node',
          description:
            'A participating system running a database instance within a clustered architecture.',
        },
        {
          title: 'Shared database',
          description:
            'A database accessible by multiple participating instances in the RAC architecture.',
        },
      ],
    },
    {
      title: 'Data Guard',
      content:
        'Oracle Data Guard is an Oracle architecture for maintaining standby databases and supporting high availability and disaster-recovery objectives. It can reduce recovery risk by maintaining synchronized or appropriately updated copies of database information.',
      highlights: [
        {
          title: 'Primary database',
          description:
            'The main production database generating application changes.',
        },
        {
          title: 'Standby database',
          description:
            'A database maintained from the primary for availability or recovery purposes.',
        },
        {
          title: 'Disaster recovery',
          description:
            'The ability to recover service and data after a major infrastructure or site failure.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'Mission-critical Oracle environments require a deliberate backup and recovery strategy. Recovery design should define backup frequency, retention, recovery objectives, secure storage, restoration procedures, and regular recovery testing.',
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
        {
          title: 'Recovery testing',
          description:
            'Verifying that backups and recovery procedures can actually restore the required service.',
        },
      ],
    },
    {
      title: 'Concurrency and Locking',
      content:
        'Oracle manages concurrent transactions using mechanisms that allow multiple users and applications to work with database data while preserving transactional consistency. Understanding locking and transaction duration is important when diagnosing contention.',
      highlights: [
        {
          title: 'Lock',
          description:
            'A mechanism used to coordinate access to data during concurrent operations.',
        },
        {
          title: 'Contention',
          description:
            'Competition between transactions for database resources.',
        },
        {
          title: 'Long transaction',
          description:
            'A transaction that remains active for an extended period and may increase resource usage or contention.',
        },
      ],
    },
    {
      title: 'Connection Pooling',
      content:
        'Application servers should generally reuse Oracle database connections through connection pools rather than creating an uncontrolled new connection for every request. Pool sizing should reflect application concurrency and database capacity.',
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
      title: 'Oracle and APIs',
      content:
        'Backend APIs commonly use Oracle Database as the transactional persistence layer. The service layer should control access to database operations and enforce authentication, authorization, validation, business rules, transactions, pagination, and error handling.',
      highlights: [
        {
          title: 'Service layer',
          description:
            'The application layer responsible for implementing business operations around database access.',
        },
        {
          title: 'Transaction boundary',
          description:
            'The point defining which related database operations should succeed or fail together.',
        },
        {
          title: 'Pagination',
          description:
            'Returning large result sets in manageable portions.',
        },
      ],
    },
    {
      title: 'Oracle and FastAPI',
      content:
        'FastAPI services can connect to Oracle Database using appropriate Python database drivers and data-access libraries. Production architecture should address connection pooling, transaction management, migrations, timeouts, retries, observability, credentials, and network security.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'Software that allows an application to communicate with Oracle Database.',
        },
        {
          title: 'ORM',
          description:
            'An Object-Relational Mapping layer that provides application-level abstractions over relational database structures.',
        },
        {
          title: 'Migration',
          description:
            'A controlled schema change applied as an application evolves.',
        },
      ],
    },
    {
      title: 'Oracle and Enterprise Applications',
      content:
        'Oracle Database is frequently associated with large enterprise systems where reliability, governance, security, integration, and long-term operational support are important. The database often sits underneath ERP, finance, supply-chain, customer, and other business-critical systems.',
      highlights: [
        {
          title: 'ERP',
          description:
            'Enterprise Resource Planning systems managing core business processes.',
        },
        {
          title: 'Mission-critical',
          description:
            'A system where prolonged downtime or incorrect data can have significant business consequences.',
        },
        {
          title: 'Governance',
          description:
            'Policies and controls governing ownership, access, compliance, and operational management.',
        },
      ],
    },
    {
      title: 'Oracle and AI Applications',
      content:
        'AI applications can use Oracle Database for transactional business data, customer information, permissions, workflow state, metadata, financial records, and other enterprise information. AI infrastructure can then access this data through controlled application and data-access layers.',
      highlights: [
        {
          title: 'Enterprise data',
          description:
            'Business information maintained by core operational systems.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing documents, users, workflows, models, or other assets.',
        },
        {
          title: 'Controlled access',
          description:
            'Restricting AI systems to only the information they are authorized to use.',
        },
      ],
    },
    {
      title: 'Oracle and AI Agents',
      content:
        'AI agents operating in enterprise environments can use Oracle-backed services for customer records, workflow state, permissions, financial information, task status, and audit data. Agents should access this information through governed tools and APIs rather than unrestricted database access.',
      highlights: [
        {
          title: 'Tool boundary',
          description:
            'A controlled interface through which an agent performs an operation.',
        },
        {
          title: 'Authorization',
          description:
            'Controls whether an agent or user is allowed to perform a specific operation.',
        },
        {
          title: 'Auditability',
          description:
            'The ability to record and later understand important actions performed by systems or agents.',
        },
      ],
    },
    {
      title: 'Oracle and RAG',
      content:
        'Oracle-backed enterprise systems can provide authoritative business data for RAG and AI applications. Retrieval architecture should respect data ownership, authorization, freshness, metadata, and audit requirements.',
      highlights: [
        {
          title: 'Authoritative source',
          description:
            'A trusted system containing the official version of important business information.',
        },
        {
          title: 'Freshness',
          description:
            'How current retrieved information is relative to the source system.',
        },
        {
          title: 'Authorization-aware retrieval',
          description:
            'Retrieval that ensures users and AI systems only receive information they are allowed to access.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'Oracle Database provides extensive security capabilities around identity, authentication, authorization, encryption, auditing, network controls, and access governance. Production security should follow least privilege and defense-in-depth principles.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Granting only the database permissions required for a specific responsibility.',
        },
        {
          title: 'Encryption',
          description:
            'Protecting sensitive database information against unauthorized disclosure.',
        },
        {
          title: 'Auditing',
          description:
            'Recording important database activity for security, governance, and investigation.',
        },
        {
          title: 'Defense in depth',
          description:
            'Using multiple independent security controls rather than relying on a single mechanism.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Enterprise Oracle deployments require monitoring of database availability, query latency, CPU, memory, I/O, storage, sessions, locks, wait events, replication or standby health, errors, backups, and capacity.',
      highlights: [
        {
          title: 'Wait event',
          description:
            'Information about database sessions waiting for a resource or operation.',
        },
        {
          title: 'Session',
          description:
            'An active database connection and its associated database activity.',
        },
        {
          title: 'Capacity',
          description:
            'The available resources required to sustain expected workload growth.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'Oracle environments can scale vertically and through architectures that distribute workload or provide multiple database resources. The correct strategy depends on transaction volume, data size, availability requirements, workload patterns, and operational constraints.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing compute, memory, storage, or other resources for the database environment.',
        },
        {
          title: 'Horizontal architecture',
          description:
            'Using multiple database resources or nodes to support availability or workload distribution.',
        },
        {
          title: 'Capacity planning',
          description:
            'Forecasting future resource requirements based on workload growth and business expectations.',
        },
      ],
    },
    {
      title: 'Oracle vs PostgreSQL',
      content:
        'Oracle Database and PostgreSQL are both powerful relational database platforms. Oracle is deeply established in enterprise environments with extensive commercial tooling and enterprise capabilities, while PostgreSQL is a widely adopted open-source relational database with a strong ecosystem and broad feature set. Technology selection should consider requirements, existing investments, licensing, skills, operational model, and long-term strategy.',
      highlights: [
        {
          title: 'Enterprise ecosystem',
          description:
            'Oracle has a mature enterprise ecosystem around database operations, applications, tooling, and support.',
        },
        {
          title: 'Open source',
          description:
            'PostgreSQL provides an open-source database model with a broad community ecosystem.',
        },
        {
          title: 'Migration',
          description:
            'Moving between database platforms requires careful assessment of SQL, application behavior, tooling, operational practices, and data compatibility.',
        },
      ],
    },
    {
      title: 'Oracle vs MySQL and MariaDB',
      content:
        'Oracle Database, MySQL, and MariaDB are all relational technologies, but they target different combinations of workload, scale, enterprise requirements, ecosystem, licensing, and operational needs. Choosing among them should be based on the actual workload rather than brand familiarity alone.',
      highlights: [
        {
          title: 'Workload fit',
          description:
            'The database should match transactional, analytical, availability, and scaling requirements.',
        },
        {
          title: 'Operational model',
          description:
            'Teams should evaluate administration, monitoring, support, automation, and recovery capabilities.',
        },
        {
          title: 'Total cost',
          description:
            'Technology decisions should account for licensing, infrastructure, operations, support, migration, and engineering skills.',
        },
      ],
    },
    {
      title: 'When to Use Oracle Database',
      content:
        'Oracle Database is a strong candidate when an organization requires mature enterprise database capabilities, mission-critical transaction processing, extensive security and governance, advanced availability architectures, or compatibility with an existing Oracle-centered enterprise ecosystem.',
      highlights: [
        {
          title: 'Mission-critical systems',
          description:
            'Applications where database availability and correctness are highly business-sensitive.',
        },
        {
          title: 'Enterprise governance',
          description:
            'Environments with strict security, compliance, operational, and audit requirements.',
        },
        {
          title: 'Existing Oracle ecosystem',
          description:
            'Organizations with substantial Oracle applications, expertise, tooling, and operational investment.',
        },
      ],
    },
    {
      title: 'When Not to Use Oracle Database',
      content:
        'Oracle may be unnecessarily complex or costly for small applications, lightweight prototypes, local applications, or workloads where simpler open-source database technologies meet the requirements. The decision should consider total cost and operational complexity, not only technical capability.',
      highlights: [
        {
          title: 'Small workload',
          description:
            'A simple application may not need the operational capabilities of a large enterprise database platform.',
        },
        {
          title: 'Prototype',
          description:
            'Early-stage applications often benefit from minimizing infrastructure and operational complexity.',
        },
        {
          title: 'Cost sensitivity',
          description:
            'Organizations should evaluate licensing and operational costs against the value of enterprise capabilities.',
        },
      ],
    },
    {
      title: 'Oracle for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Oracle knowledge is less about memorizing database commands and more about architecture decisions: workload fit, availability, disaster recovery, security, governance, performance, licensing, migration risk, operational ownership, and integration with enterprise systems.',
    },
    {
      title: 'Common Oracle Mistakes',
      content:
        'Common mistakes include ignoring execution plans, poor indexing, oversized transactions, uncontrolled connections, inadequate backup testing, excessive database privileges, weak monitoring, underestimating migration complexity, and selecting Oracle without understanding total cost and operational requirements.',
      highlights: [
        {
          title: 'Poor indexing',
          description:
            'Missing or inappropriate indexes can cause unnecessary database work as data volume grows.',
        },
        {
          title: 'Migration risk',
          description:
            'Database migrations can affect SQL behavior, application code, performance, operations, and data correctness.',
        },
        {
          title: 'Privilege sprawl',
          description:
            'Granting users or applications more database access than they actually require.',
        },
      ],
    },
    {
      title: 'Explore Oracle Database in EDDUU',
      content:
        'EDDUU connects Oracle Database with Data, PostgreSQL, MySQL, MariaDB, SQL Server, APIs, FastAPI, security, authentication, authorization, enterprise architecture, AI applications, RAG, and AI agents.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'mysql',
    'mariadb',
    'sql-server',
    'rest-apis',
    'fastapi',
    'authentication',
    'authorization',
    'rag',
    'agents',
  ],
}

export default oracleDatabaseKnowledge
