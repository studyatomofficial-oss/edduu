import type { KnowledgeDefinition } from './knowledge'

export const mongodbKnowledge: KnowledgeDefinition = {
  technologyId: 'mongodb',
  slug: 'mongodb',
  title: 'What is MongoDB?',
  summary:
    'MongoDB is a document-oriented NoSQL database designed for flexible data models, application scalability, and workloads where JSON-like documents are a natural representation of application data.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is MongoDB?',
      content:
        'MongoDB is a document-oriented NoSQL database. Instead of organizing application data primarily into relational tables and rows, MongoDB stores records as BSON documents inside collections. This model is useful when application data is naturally hierarchical, semi-structured, or expected to evolve over time.',
    },
    {
      title: 'Why MongoDB?',
      content:
        'MongoDB is commonly selected when flexible document structures, horizontal scaling, developer productivity, and JSON-like application data are important requirements.',
      highlights: [
        {
          title: 'Document model',
          description:
            'Application records are represented as documents containing fields and nested structures.',
        },
        {
          title: 'Flexible schema',
          description:
            'Documents in a collection do not have to share exactly the same structure.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'MongoDB supports distributed architectures including sharding.',
        },
        {
          title: 'Developer friendly',
          description:
            'The document model maps naturally to many application objects and JSON-based APIs.',
        },
      ],
    },
    {
      title: 'Documents and Collections',
      content:
        'MongoDB stores documents inside collections. A document is similar to a JSON object from an application perspective, while MongoDB internally stores it using BSON. A collection is broadly comparable to a table in a relational database, but the data model is different.',
      highlights: [
        {
          title: 'Document',
          description:
            'A MongoDB record represented internally using BSON.',
        },
        {
          title: 'Collection',
          description:
            'A group of related MongoDB documents.',
        },
        {
          title: 'BSON',
          description:
            'Binary JSON format used by MongoDB to represent documents and support additional data types.',
        },
      ],
    },
    {
      title: 'MongoDB vs Relational Tables',
      content:
        'A relational database commonly models information using normalized tables and relationships. MongoDB can model related information by embedding documents or referencing other documents. The right choice depends on access patterns and consistency requirements.',
      highlights: [
        {
          title: 'Embedding',
          description:
            'Storing related information inside the same document.',
        },
        {
          title: 'Referencing',
          description:
            'Storing identifiers that point to related documents.',
        },
        {
          title: 'Access pattern',
          description:
            'The way an application actually reads and writes information should strongly influence the data model.',
        },
      ],
    },
    {
      title: 'Schema Design',
      content:
        'MongoDB has a flexible schema, but flexible does not mean schema-free. Production systems still require deliberate data modeling, validation, naming conventions, indexes, ownership rules, and migration strategies.',
      highlights: [
        {
          title: 'Flexible schema',
          description:
            'Documents can evolve without requiring every record to have an identical structure.',
        },
        {
          title: 'Schema validation',
          description:
            'Rules can be used to enforce expected document structures and data quality.',
        },
        {
          title: 'Schema evolution',
          description:
            'The application must safely handle changes to document structures over time.',
        },
      ],
    },
    {
      title: 'CRUD Operations',
      content:
        'MongoDB supports Create, Read, Update, and Delete operations for documents. These operations are exposed through MongoDB drivers, shell tooling, and application frameworks.',
      highlights: [
        {
          title: 'Create',
          description:
            'Insert new documents into a collection.',
        },
        {
          title: 'Read',
          description:
            'Query documents that match defined conditions.',
        },
        {
          title: 'Update',
          description:
            'Modify existing document fields or structures.',
        },
        {
          title: 'Delete',
          description:
            'Remove documents from a collection.',
        },
      ],
    },
    {
      title: 'Querying Documents',
      content:
        'MongoDB queries can filter documents using field values and operators. Queries can also work with nested fields, arrays, ranges, and other document structures.',
      highlights: [
        {
          title: 'Filter',
          description:
            'Defines which documents should be returned or modified.',
        },
        {
          title: 'Nested field',
          description:
            'A field located inside a nested document structure.',
        },
        {
          title: 'Array query',
          description:
            'A query that evaluates values stored inside document arrays.',
        },
      ],
    },
    {
      title: 'Indexes',
      content:
        'MongoDB indexes improve query performance for supported access patterns. They also consume storage and add write overhead, so indexes should be designed from real query patterns.',
      highlights: [
        {
          title: 'Single-field index',
          description:
            'An index based on one document field.',
        },
        {
          title: 'Compound index',
          description:
            'An index containing multiple fields in a defined order.',
        },
        {
          title: 'Multikey index',
          description:
            'An index that can support queries against array fields.',
        },
      ],
    },
    {
      title: 'Query Performance',
      content:
        'MongoDB performance analysis involves understanding query patterns, indexes, document size, cardinality, working-set behavior, network costs, and execution plans. The goal is to measure the real workload rather than optimize based on assumptions.',
      highlights: [
        {
          title: 'Explain',
          description:
            'MongoDB provides explain functionality to inspect how queries are executed.',
        },
        {
          title: 'Query shape',
          description:
            'The structural pattern of a query that influences index and execution behavior.',
        },
        {
          title: 'Working set',
          description:
            'The data and indexes that are actively used by an application workload.',
        },
      ],
    },
    {
      title: 'Aggregation Pipeline',
      content:
        'MongoDB provides an aggregation pipeline for transforming and analyzing documents. A pipeline processes documents through stages such as filtering, grouping, sorting, projecting, and joining related data.',
      highlights: [
        {
          title: '$match',
          description:
            'Filters documents according to specified conditions.',
        },
        {
          title: '$group',
          description:
            'Groups documents and calculates aggregate results.',
        },
        {
          title: '$project',
          description:
            'Controls or transforms the fields returned by a pipeline stage.',
        },
        {
          title: '$lookup',
          description:
            'Allows aggregation workflows to combine information from another collection.',
        },
      ],
    },
    {
      title: 'Transactions',
      content:
        'MongoDB supports transactions for operations that require atomic changes across multiple documents or collections. Transactions should be used when required by business consistency rather than automatically for every operation.',
      highlights: [
        {
          title: 'Atomic operation',
          description:
            'An operation that completes as a single indivisible unit.',
        },
        {
          title: 'Multi-document transaction',
          description:
            'A transaction spanning multiple MongoDB documents or collections.',
        },
        {
          title: 'Consistency',
          description:
            'The application requirement that related state remains valid across operations.',
        },
      ],
    },
    {
      title: 'Replication',
      content:
        'MongoDB uses replica sets to maintain multiple copies of data and provide redundancy. A replica set normally has a primary member and secondary members that replicate data changes.',
      highlights: [
        {
          title: 'Replica set',
          description:
            'A group of MongoDB instances maintaining replicated copies of data.',
        },
        {
          title: 'Primary',
          description:
            'The replica-set member that normally accepts writes.',
        },
        {
          title: 'Secondary',
          description:
            'A member that replicates data from the primary and can support selected read workloads depending on configuration.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between a change occurring on the primary and becoming available on a secondary.',
        },
      ],
    },
    {
      title: 'High Availability',
      content:
        'Replica sets allow MongoDB deployments to tolerate failures by selecting another suitable member when the current primary becomes unavailable. High availability still requires monitoring, tested recovery procedures, capacity planning, and operational automation.',
      highlights: [
        {
          title: 'Failover',
          description:
            'The process of selecting another replica-set member to become primary after a failure.',
        },
        {
          title: 'Automatic election',
          description:
            'The replica set can elect a new primary according to its election rules.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring normal service after infrastructure or database failures.',
        },
      ],
    },
    {
      title: 'Sharding',
      content:
        'Sharding distributes data across multiple MongoDB shards. It is a horizontal scaling mechanism for workloads that exceed the practical capacity of a single database deployment.',
      highlights: [
        {
          title: 'Shard',
          description:
            'A component that stores part of a distributed MongoDB dataset.',
        },
        {
          title: 'Shard key',
          description:
            'The key used to distribute documents across shards.',
        },
        {
          title: 'Distribution',
          description:
            'How documents and workload are spread across the cluster.',
        },
      ],
    },
    {
      title: 'Shard Key Design',
      content:
        'Choosing a shard key is one of the most important MongoDB architecture decisions. A poor shard key can create uneven distribution, hotspots, and poor query performance.',
      highlights: [
        {
          title: 'Cardinality',
          description:
            'The number of distinct values available for a field.',
        },
        {
          title: 'Hotspot',
          description:
            'A condition where disproportionate workload is directed toward a subset of database resources.',
        },
        {
          title: 'Distribution',
          description:
            'The degree to which data and traffic are balanced across shards.',
        },
      ],
    },
    {
      title: 'Embedding vs Referencing',
      content:
        'MongoDB data modeling often requires deciding whether related information should be embedded into one document or stored separately and referenced. Embedding can simplify reads, while referencing can help when related data has an independent lifecycle or grows significantly.',
      highlights: [
        {
          title: 'Embed when',
          description:
            'Related information is usually accessed together and has a suitable size and lifecycle.',
        },
        {
          title: 'Reference when',
          description:
            'Related information is shared, independently managed, or too large to embed safely.',
        },
      ],
    },
    {
      title: 'Document Size',
      content:
        'MongoDB documents have a maximum BSON document size. Data models should therefore avoid uncontrolled document growth, especially when arrays or nested structures can grow continuously.',
      highlights: [
        {
          title: 'Document growth',
          description:
            'Increasing document size over time due to accumulating embedded information.',
        },
        {
          title: 'Bounded data',
          description:
            'Related information with a predictable and manageable size.',
        },
      ],
    },
    {
      title: 'Change Streams',
      content:
        'MongoDB change streams allow applications to observe database changes and react to inserts, updates, replacements, and deletes. They can support event-driven application workflows.',
      highlights: [
        {
          title: 'Change event',
          description:
            'Information describing a change made to MongoDB data.',
        },
        {
          title: 'Event-driven workflow',
          description:
            'A workflow triggered by changes occurring in a system.',
        },
      ],
    },
    {
      title: 'MongoDB and Event-Driven Architecture',
      content:
        'MongoDB change streams can connect database changes to downstream workflows, but the architecture should still define delivery semantics, retries, idempotency, failure handling, and ownership boundaries.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'Designing an operation so repeated processing does not produce an unintended duplicate effect.',
        },
        {
          title: 'Retry',
          description:
            'Attempting an operation again after a transient failure.',
        },
        {
          title: 'Event consumer',
          description:
            'A component that receives and processes events.',
        },
      ],
    },
    {
      title: 'MongoDB and APIs',
      content:
        'Backend APIs commonly use MongoDB to persist application documents. The API layer should still handle authentication, authorization, validation, business rules, error handling, pagination, and controlled data exposure.',
      highlights: [
        {
          title: 'Pagination',
          description:
            'Returning large result sets in manageable portions.',
        },
        {
          title: 'Validation',
          description:
            'Checking incoming information before it is stored or processed.',
        },
        {
          title: 'Authorization',
          description:
            'Determining whether a caller is allowed to access or modify specific data.',
        },
      ],
    },
    {
      title: 'MongoDB and AI Applications',
      content:
        'AI applications can use MongoDB to store users, application state, conversations, metadata, documents, workflow records, evaluation information, and other flexible application data. MongoDB can also participate in vector-search architectures where appropriate.',
      highlights: [
        {
          title: 'Metadata',
          description:
            'Information describing documents, users, sources, timestamps, permissions, or other objects.',
        },
        {
          title: 'Application state',
          description:
            'Persistent information representing the current state of an application workflow.',
        },
        {
          title: 'Vector search',
          description:
            'Searching for information using similarity between numerical representations.',
        },
      ],
    },
    {
      title: 'MongoDB and RAG',
      content:
        'MongoDB can support RAG applications by storing documents, metadata, chunks, permissions, and retrieval-related information. Vector search can be incorporated when the architecture requires semantic retrieval.',
      highlights: [
        {
          title: 'Chunk',
          description:
            'A smaller section of source content prepared for retrieval.',
        },
        {
          title: 'Embedding',
          description:
            'A numerical representation used to compare semantic similarity.',
        },
        {
          title: 'Metadata filter',
          description:
            'Filtering retrieved information using attributes such as source, owner, tenant, or permissions.',
        },
      ],
    },
    {
      title: 'MongoDB and AI Agents',
      content:
        'Agentic applications can use MongoDB for conversation state, tool execution records, workflow state, user preferences, permissions, and flexible application data. Durable state should be designed separately from temporary execution context.',
      highlights: [
        {
          title: 'Agent state',
          description:
            'Information required to resume or understand an agent workflow.',
        },
        {
          title: 'Tool execution',
          description:
            'A record of a tool call performed as part of an agent workflow.',
        },
        {
          title: 'Conversation state',
          description:
            'Persistent information required to maintain application-level conversation context.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'MongoDB security includes authentication, authorization, encryption in transit, encryption at rest where configured, network controls, auditing capabilities, credential management, and least-privilege access.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a user, application, or service.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which database operations an authenticated identity can perform.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required for legitimate responsibilities.',
        },
      ],
    },
    {
      title: 'Backup and Recovery',
      content:
        'Production MongoDB systems require tested backup, restore, retention, and disaster-recovery procedures. Recovery objectives should be defined through RTO and RPO requirements.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A recoverable representation of database information.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target time for restoring service.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the target acceptable amount of data loss measured in time.',
        },
      ],
    },
    {
      title: 'Connection Pooling',
      content:
        'Applications should reuse MongoDB connections rather than creating uncontrolled connections for every request. Drivers commonly manage connection pools, and pool sizing should reflect application concurrency and database capacity.',
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
      title: 'Observability',
      content:
        'Production MongoDB deployments should monitor query performance, operations per second, latency, connection usage, storage, memory, CPU, replication lag, elections, locks, errors, and cluster health.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required for a database operation to complete.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between changes on the primary and their availability on replicas.',
        },
        {
          title: 'Cluster health',
          description:
            'The operational condition of MongoDB instances and distributed components.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'MongoDB can scale vertically by increasing resources and horizontally through replication and sharding. Scaling strategy should be based on workload characteristics, access patterns, document sizes, and actual bottlenecks.',
      highlights: [
        {
          title: 'Vertical scaling',
          description:
            'Increasing resources available to a database instance.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Distributing data or workload across multiple database resources.',
        },
        {
          title: 'Hotspot',
          description:
            'A workload concentration that overloads a particular resource or partition.',
        },
      ],
    },
    {
      title: 'MongoDB vs PostgreSQL',
      content:
        'MongoDB and PostgreSQL solve different data-modeling and workload problems, although both can support sophisticated production systems. MongoDB can be attractive when document-oriented modeling and flexible structures are central requirements. PostgreSQL is often attractive when relational integrity, SQL capabilities, and complex relational workloads are central.',
      highlights: [
        {
          title: 'Document model',
          description:
            'MongoDB naturally represents hierarchical application data as documents.',
        },
        {
          title: 'Relational model',
          description:
            'PostgreSQL organizes data around relational tables, relationships, and SQL.',
        },
        {
          title: 'Workload fit',
          description:
            'Technology selection should follow actual application requirements and access patterns.',
        },
      ],
    },
    {
      title: 'MongoDB for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, MongoDB knowledge should focus on data modeling, access patterns, consistency requirements, replication, sharding, availability, security, performance, operational cost, and team ownership. The key leadership skill is selecting the appropriate data architecture for the business workload.',
    },
    {
      title: 'Common MongoDB Mistakes',
      content:
        'Common mistakes include treating MongoDB as schema-free, embedding unbounded arrays, choosing poor indexes, selecting an unsuitable shard key, ignoring replication lag, creating uncontrolled connections, storing everything in one giant document, skipping backup testing, and choosing MongoDB without understanding the access pattern.',
      highlights: [
        {
          title: 'Unbounded array',
          description:
            'An embedded array that can grow indefinitely and make document size and update behavior problematic.',
        },
        {
          title: 'Poor shard key',
          description:
            'A shard key that causes uneven data or workload distribution.',
        },
        {
          title: 'Schema-free misconception',
          description:
            'Assuming flexible documents mean that application data modeling and validation are unnecessary.',
        },
      ],
    },
    {
      title: 'Explore MongoDB in EDDUU',
      content:
        'EDDUU connects MongoDB with Data, PostgreSQL, Redis, MySQL, APIs, event-driven architecture, RAG, AI agents, security, cloud infrastructure, and distributed systems.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'redis',
    'mysql',
    'rest-apis',
    'event-driven-architecture',
    'rag',
    'agents',
    'authentication',
    'authorization',
  ],
}

export default mongodbKnowledge
