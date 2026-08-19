import type { KnowledgeDefinition } from './knowledge'

export const sqliteKnowledge: KnowledgeDefinition = {
  technologyId: 'sqlite',
  slug: 'sqlite',
  title: 'What is SQLite?',
  summary:
    'SQLite is a lightweight embedded relational database engine that stores an entire database in a file and is designed for simplicity, portability, and local transactional workloads.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is SQLite?',
      content:
        'SQLite is an embedded relational database engine. Unlike a typical client-server database, SQLite runs inside the application process and stores the database in a file. This makes it extremely portable and useful for local applications, mobile apps, desktop software, testing, prototypes, edge workloads, and other environments where a separate database server is unnecessary.',
    },
    {
      title: 'Why SQLite?',
      content:
        'SQLite is valuable when an application needs reliable relational storage without the operational complexity of running a separate database server.',
      highlights: [
        {
          title: 'Embedded',
          description:
            'SQLite runs as part of the application rather than as a separate database server.',
        },
        {
          title: 'File-based',
          description:
            'The database is normally stored in a single portable database file.',
        },
        {
          title: 'Zero configuration',
          description:
            'There is no separate database server installation or service required for basic use.',
        },
        {
          title: 'Transactional',
          description:
            'SQLite provides transactional database operations and ACID properties.',
        },
      ],
    },
    {
      title: 'SQLite Architecture',
      content:
        'SQLite is a library embedded into an application. The application calls SQLite APIs, and SQLite manages SQL parsing, query execution, transactions, indexes, and the database file. There is no separate database server process required for normal embedded usage.',
      highlights: [
        {
          title: 'Application process',
          description:
            'The application directly loads and uses the SQLite database engine.',
        },
        {
          title: 'SQLite engine',
          description:
            'The embedded library responsible for database operations.',
        },
        {
          title: 'Database file',
          description:
            'The persistent file containing the SQLite database.',
        },
      ],
    },
    {
      title: 'Relational Database',
      content:
        'SQLite is a relational database. It supports tables, rows, columns, relationships, SQL queries, indexes, constraints, and transactions.',
      highlights: [
        {
          title: 'Table',
          description:
            'A structured collection of related records.',
        },
        {
          title: 'Row',
          description:
            'A single record stored in a table.',
        },
        {
          title: 'Column',
          description:
            'An attribute describing data stored in a record.',
        },
      ],
    },
    {
      title: 'SQL',
      content:
        'SQLite uses SQL to create schemas, insert data, query records, update information, delete records, create indexes, and manage transactions.',
      highlights: [
        {
          title: 'SELECT',
          description:
            'Retrieves data from tables.',
        },
        {
          title: 'INSERT',
          description:
            'Adds records to a table.',
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
        'SQLite supports primary keys and other constraints that help maintain data integrity. Common constraints include PRIMARY KEY, NOT NULL, UNIQUE, CHECK, and FOREIGN KEY.',
      highlights: [
        {
          title: 'PRIMARY KEY',
          description:
            'Identifies records according to the table key definition.',
        },
        {
          title: 'UNIQUE',
          description:
            'Prevents duplicate values according to the defined constraint.',
        },
        {
          title: 'CHECK',
          description:
            'Requires values to satisfy a specified condition.',
        },
        {
          title: 'FOREIGN KEY',
          description:
            'Represents a relationship between records in different tables.',
        },
      ],
    },
    {
      title: 'Transactions and ACID',
      content:
        'SQLite provides transactional operations and ACID guarantees. A transaction allows multiple related changes to be treated as one logical unit.',
      highlights: [
        {
          title: 'Atomicity',
          description:
            'A transaction is treated as an all-or-nothing operation.',
        },
        {
          title: 'Consistency',
          description:
            'Successful transactions preserve database integrity rules.',
        },
        {
          title: 'Isolation',
          description:
            'Concurrent database operations are controlled according to SQLite locking and transaction behavior.',
        },
        {
          title: 'Durability',
          description:
            'Committed changes are persisted according to SQLite durability mechanisms.',
        },
      ],
    },
    {
      title: 'SQLite Journal Modes',
      content:
        'SQLite supports different journaling modes that influence how changes are recorded and how readers and writers interact. WAL mode is especially important for many modern application workloads.',
      highlights: [
        {
          title: 'Rollback journal',
          description:
            'A traditional mechanism for protecting database consistency during changes.',
        },
        {
          title: 'WAL',
          description:
            'Write-Ahead Logging mode that can improve read/write concurrency for suitable workloads.',
        },
        {
          title: 'Checkpoint',
          description:
            'The process of moving committed WAL content back into the main database representation.',
        },
      ],
    },
    {
      title: 'Concurrency',
      content:
        'SQLite supports concurrent readers and controlled writer behavior. Because SQLite is embedded and file-based, write concurrency is fundamentally different from a multi-process client-server database.',
      highlights: [
        {
          title: 'Reader',
          description:
            'A connection or process reading database information.',
        },
        {
          title: 'Writer',
          description:
            'A connection performing database modifications.',
        },
        {
          title: 'Write contention',
          description:
            'Competition between operations attempting to modify the database at the same time.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'SQLite supports indexes that can accelerate query patterns. Indexes consume storage and add maintenance work to writes, so they should be created based on actual access patterns.',
      highlights: [
        {
          title: 'Index',
          description:
            'A data structure that can make selected queries faster.',
        },
        {
          title: 'Composite index',
          description:
            'An index containing multiple columns.',
        },
        {
          title: 'Query plan',
          description:
            'The strategy SQLite uses to execute a query.',
        },
      ],
    },
    {
      title: 'Query Planning',
      content:
        'SQLite uses a query planner to determine how SQL statements should be executed. Query plans can be inspected when diagnosing slow queries and unexpected database behavior.',
      highlights: [
        {
          title: 'Query planner',
          description:
            'The component that selects an execution strategy.',
        },
        {
          title: 'EXPLAIN QUERY PLAN',
          description:
            'A SQLite facility used to inspect how a query is expected to execute.',
        },
      ],
    },
    {
      title: 'Database File',
      content:
        'The SQLite database is normally stored in a file. This makes the database easy to copy, move, package, back up, and use in local environments, but file-based storage also creates operational and concurrency considerations for shared server workloads.',
      highlights: [
        {
          title: 'Portability',
          description:
            'The database file can be moved between compatible environments.',
        },
        {
          title: 'Backup',
          description:
            'The database file or a suitable SQLite backup mechanism can be used as part of a recovery strategy.',
        },
        {
          title: 'File locking',
          description:
            'SQLite uses locking mechanisms to coordinate access to the database file.',
        },
      ],
    },
    {
      title: 'SQLite and Mobile Applications',
      content:
        'SQLite is widely suited to mobile applications because local application data can be stored without requiring a remote database connection. Mobile applications can use it for offline storage, local state, caching, and structured application data.',
      highlights: [
        {
          title: 'Offline-first',
          description:
            'An application can continue useful operations even when network connectivity is unavailable.',
        },
        {
          title: 'Local persistence',
          description:
            'Application data can remain available across application sessions.',
        },
      ],
    },
    {
      title: 'SQLite and Desktop Applications',
      content:
        'Desktop applications can use SQLite for local configuration, user data, application state, indexes, caches, and other structured information without requiring a database server installation.',
      highlights: [
        {
          title: 'Local application state',
          description:
            'Persistent information maintained by the desktop application.',
        },
        {
          title: 'Portable database',
          description:
            'A database that can travel with the application or user environment.',
        },
      ],
    },
    {
      title: 'SQLite for Testing',
      content:
        'SQLite is often useful in automated tests because it is lightweight and easy to create and destroy. However, using SQLite as a test substitute for a production database can hide behavior differences when the production system uses another database engine.',
      highlights: [
        {
          title: 'Test database',
          description:
            'A database environment used to execute automated or manual tests.',
        },
        {
          title: 'Behavioral difference',
          description:
            'A difference between SQLite and the production database that can make a test misleading.',
        },
      ],
    },
    {
      title: 'SQLite and FastAPI',
      content:
        'FastAPI applications can use SQLite for development, prototypes, local tools, small internal applications, and selected low-concurrency workloads. Production systems should evaluate concurrency, availability, scaling, and operational requirements before choosing SQLite.',
      highlights: [
        {
          title: 'Development',
          description:
            'SQLite can simplify local development because it requires minimal infrastructure.',
        },
        {
          title: 'Production assessment',
          description:
            'Production selection should consider traffic, concurrency, durability, availability, and scaling requirements.',
        },
      ],
    },
    {
      title: 'SQLite and AI Applications',
      content:
        'AI applications can use SQLite to store local configuration, application state, cached results, evaluation records, metadata, or lightweight local knowledge. It can be particularly useful for prototypes, desktop AI tools, and local-first applications.',
      highlights: [
        {
          title: 'Local AI',
          description:
            'An AI application operating primarily on the user device or local environment.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing files, records, experiments, evaluations, or other AI assets.',
        },
      ],
    },
    {
      title: 'SQLite and AI Agents',
      content:
        'Local AI agents can use SQLite to persist conversation state, task state, tool results, configuration, local memory, and audit information. For multi-user distributed agents, a more scalable database architecture may be required.',
      highlights: [
        {
          title: 'Agent state',
          description:
            'Persistent information representing the current state of an agent workflow.',
        },
        {
          title: 'Local memory',
          description:
            'Information stored locally for use by an AI application or agent.',
        },
        {
          title: 'Distributed workload',
          description:
            'A workload spread across multiple machines or application instances.',
        },
      ],
    },
    {
      title: 'SQLite and RAG',
      content:
        'SQLite can store document metadata, chunks, local retrieval state, evaluation records, and other lightweight RAG application data. For large-scale distributed retrieval, specialized databases or search systems may be more appropriate.',
      highlights: [
        {
          title: 'Chunk',
          description:
            'A smaller section of source content prepared for retrieval.',
        },
        {
          title: 'Metadata',
          description:
            'Information associated with retrieved content such as source, timestamp, or permissions.',
        },
        {
          title: 'Local retrieval',
          description:
            'Retrieving information from data stored on the local application environment.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'SQLite security is strongly influenced by operating-system file permissions and application architecture because the database is a local file. Applications must protect the file, control access to the host environment, and protect sensitive information appropriately.',
      highlights: [
        {
          title: 'File permissions',
          description:
            'Operating-system controls determining who can read or modify the database file.',
        },
        {
          title: 'Application access',
          description:
            'The application should control which users or processes can access stored information.',
        },
        {
          title: 'Encryption',
          description:
            'Sensitive local database files may require an appropriate encryption strategy depending on the application and threat model.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'SQLite databases should still have backup and recovery strategies when their data matters. The approach should account for active writes, file consistency, retention, restoration testing, and application downtime requirements.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A recoverable representation of the database.',
        },
        {
          title: 'Restore',
          description:
            'The process of bringing the database back from a backup.',
        },
        {
          title: 'Recovery testing',
          description:
            'Verifying that backups can actually be restored and used successfully.',
        },
      ],
    },
    {
      title: 'SQLite vs PostgreSQL',
      content:
        'SQLite and PostgreSQL are both relational database technologies but target different operational models. SQLite is embedded and file-based, while PostgreSQL is a client-server database designed for larger multi-user and distributed application workloads.',
      highlights: [
        {
          title: 'SQLite',
          description:
            'Strong fit for embedded, local, portable, lightweight, and low-operational-overhead workloads.',
        },
        {
          title: 'PostgreSQL',
          description:
            'Strong fit for server-side transactional systems requiring richer concurrency, operational capabilities, and scalable multi-user workloads.',
        },
        {
          title: 'Decision factor',
          description:
            'The choice should follow workload, concurrency, availability, scaling, and operational requirements.',
        },
      ],
    },
    {
      title: 'SQLite vs MySQL',
      content:
        'SQLite is embedded inside the application and stores data in a local file, while MySQL is normally operated as a database server. SQLite is attractive for local and lightweight workloads, whereas MySQL is commonly used for multi-user server-side applications.',
      highlights: [
        {
          title: 'Embedded',
          description:
            'SQLite does not require a separate database server for normal operation.',
        },
        {
          title: 'Client-server',
          description:
            'MySQL normally runs as a separate database service accessed by applications over a connection.',
        },
      ],
    },
    {
      title: 'When Not to Use SQLite',
      content:
        'SQLite is usually a poor fit when many independent application instances need high concurrent write throughput against one shared database, when advanced server-side operational features are required, or when the system needs large-scale distributed database architecture.',
      highlights: [
        {
          title: 'High write concurrency',
          description:
            'Workloads with many simultaneous writers can be constrained by SQLite’s file-based architecture.',
        },
        {
          title: 'Large distributed system',
          description:
            'Systems requiring distributed database nodes, sophisticated replication, or horizontal database scaling may need another technology.',
        },
        {
          title: 'Central shared database',
          description:
            'A heavily shared multi-service database may be better served by a client-server database.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'SQLite can scale surprisingly well for many local and read-heavy workloads, but its scaling model is different from server databases. The main architectural constraint is shared write concurrency and the need for multiple application instances to coordinate through a single file.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Using more capable hardware for the application hosting SQLite.',
        },
        {
          title: 'Read scaling',
          description:
            'Read-heavy workloads can often perform well with appropriate design.',
        },
        {
          title: 'Write contention',
          description:
            'Concurrent writes can become the limiting factor in shared workloads.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'SQLite is embedded, so database observability is often integrated into application monitoring. Important signals include query latency, transaction duration, database file size, locking behavior, errors, failed writes, and backup health.',
      highlights: [
        {
          title: 'Query latency',
          description:
            'The time required for database queries to complete.',
        },
        {
          title: 'Lock contention',
          description:
            'Competition between database operations for access to the database file.',
        },
        {
          title: 'File size',
          description:
            'The storage consumed by the SQLite database.',
        },
      ],
    },
    {
      title: 'SQLite for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, SQLite knowledge is mainly about recognizing when embedded relational storage is the right architectural choice. The key decisions involve concurrency, deployment model, data durability, local versus shared state, backup requirements, security, and future scaling.',
    },
    {
      title: 'Common SQLite Mistakes',
      content:
        'Common mistakes include using SQLite as a shared high-write production database without understanding concurrency, storing sensitive data without adequate file protection, assuming SQLite behaves exactly like PostgreSQL or MySQL, skipping backups, and choosing it for a distributed workload simply because it is easy to deploy.',
      highlights: [
        {
          title: 'Shared-file misconception',
          description:
            'Assuming that a single SQLite file is automatically suitable for any distributed multi-instance application.',
        },
        {
          title: 'Production mismatch',
          description:
            'Using SQLite in a workload whose concurrency or availability requirements exceed its architectural fit.',
        },
        {
          title: 'Unprotected database file',
          description:
            'Failing to protect local database files containing sensitive information.',
        },
      ],
    },
    {
      title: 'Explore SQLite in EDDUU',
      content:
        'EDDUU connects SQLite with Data, PostgreSQL, MySQL, Redis, backend engineering, FastAPI, APIs, AI applications, AI agents, RAG, security, testing, mobile development, and local-first architecture.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'mysql',
    'redis',
    'rest-apis',
    'fastapi',
    'rag',
    'agents',
    'authentication',
    'authorization',
  ],
}

export default sqliteKnowledge
