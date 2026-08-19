import type { KnowledgeDefinition } from './knowledge'

export const dataKnowledge: KnowledgeDefinition = {
  technologyId: 'data',
  slug: 'data',
  title: 'What is Data?',
  summary:
    'Data is the structured or unstructured information that applications, databases, analytics systems, and AI systems collect, store, process, retrieve, and use to make decisions.',
  difficulty: 'beginner',

  sections: [
    {
      title: 'What is Data?',
      content:
        'Data is information represented in a form that a computer system can store, process, transmit, or analyze. Examples include customer names, orders, sensor readings, application events, documents, images, financial transactions, and AI model outputs.',
    },
    {
      title: 'Why is Data Important?',
      content:
        'Modern software systems depend on data. Applications use data to maintain business state, understand users, operate workflows, generate reports, measure performance, and support decision-making.',
      highlights: [
        {
          title: 'Business state',
          description:
            'Data represents the current state of customers, orders, products, accounts, workflows, and other business entities.',
        },
        {
          title: 'Analytics',
          description:
            'Data can be analyzed to identify patterns, trends, risks, and opportunities.',
        },
        {
          title: 'AI',
          description:
            'AI systems depend on data for training, retrieval, evaluation, monitoring, and application context.',
        },
      ],
    },
    {
      title: 'Structured Data',
      content:
        'Structured data follows a predictable schema. Relational database tables are a common example because rows and columns define the shape of the information.',
      highlights: [
        {
          title: 'Rows',
          description:
            'Individual records within a structured dataset.',
        },
        {
          title: 'Columns',
          description:
            'Defined attributes describing each record.',
        },
        {
          title: 'Schema',
          description:
            'The defined structure and rules governing how data is organized.',
        },
      ],
    },
    {
      title: 'Semi-Structured Data',
      content:
        'Semi-structured data does not necessarily follow a rigid table structure but still contains organizational information such as keys, nested objects, or metadata. JSON and XML are common examples.',
      highlights: [
        {
          title: 'JSON',
          description:
            'A commonly used format for representing structured and semi-structured information.',
        },
        {
          title: 'Nested data',
          description:
            'Information organized inside other objects or collections.',
        },
        {
          title: 'Flexible schema',
          description:
            'A structure that can accommodate variations in the shape of individual records.',
        },
      ],
    },
    {
      title: 'Unstructured Data',
      content:
        'Unstructured data does not naturally fit into a fixed tabular schema. Examples include documents, emails, images, audio, and video.',
      highlights: [
        {
          title: 'Documents',
          description:
            'Textual information stored in files or document systems.',
        },
        {
          title: 'Images',
          description:
            'Visual information represented as digital data.',
        },
        {
          title: 'Audio and video',
          description:
            'Multimedia information requiring specialized processing and storage.',
        },
      ],
    },
    {
      title: 'Data Lifecycle',
      content:
        'Data typically moves through a lifecycle: collection, validation, storage, processing, usage, sharing, retention, archival, and eventual deletion according to business and regulatory requirements.',
      highlights: [
        {
          title: 'Collection',
          description:
            'Capturing information from users, systems, devices, or external sources.',
        },
        {
          title: 'Processing',
          description:
            'Transforming raw information into a useful form.',
        },
        {
          title: 'Retention',
          description:
            'Keeping information for a defined period based on business or compliance requirements.',
        },
        {
          title: 'Deletion',
          description:
            'Removing information when it is no longer required or permitted to be retained.',
        },
      ],
    },
    {
      title: 'Data Storage',
      content:
        'Different types of data require different storage technologies. Relational databases, NoSQL databases, object storage, caches, search engines, data warehouses, and specialized systems each solve different problems.',
      highlights: [
        {
          title: 'Database',
          description:
            'A system designed to store and retrieve application data.',
        },
        {
          title: 'Object storage',
          description:
            'Storage commonly used for files, images, videos, backups, and large unstructured objects.',
        },
        {
          title: 'Cache',
          description:
            'A fast storage layer used to reduce repeated expensive reads.',
        },
      ],
    },
    {
      title: 'Data Modeling',
      content:
        'Data modeling defines how information and relationships are represented. A good model reflects business concepts, access patterns, integrity requirements, and expected growth.',
      highlights: [
        {
          title: 'Entity',
          description:
            'A meaningful business object such as a customer, product, order, or employee.',
        },
        {
          title: 'Relationship',
          description:
            'A connection between related entities.',
        },
        {
          title: 'Attribute',
          description:
            'A property describing an entity.',
        },
      ],
    },
    {
      title: 'Data Quality',
      content:
        'Data quality determines whether information is accurate, complete, consistent, timely, valid, and fit for its intended purpose.',
      highlights: [
        {
          title: 'Accuracy',
          description:
            'Data correctly represents the real-world or system state it is intended to describe.',
        },
        {
          title: 'Completeness',
          description:
            'Required information is present.',
        },
        {
          title: 'Consistency',
          description:
            'Related systems and records do not contain conflicting representations of the same information.',
        },
        {
          title: 'Timeliness',
          description:
            'Information is available with an acceptable level of freshness.',
        },
      ],
    },
    {
      title: 'Data Processing',
      content:
        'Data processing transforms information so that it can support application workflows, reporting, analytics, search, or AI workloads.',
      highlights: [
        {
          title: 'Batch processing',
          description:
            'Processes accumulated data in groups, often on a scheduled basis.',
        },
        {
          title: 'Stream processing',
          description:
            'Processes events or data continuously as they arrive.',
        },
        {
          title: 'Transformation',
          description:
            'Changes data into a form required by downstream systems.',
        },
      ],
    },
    {
      title: 'Data Pipelines',
      content:
        'A data pipeline moves information between systems and often includes extraction, validation, transformation, enrichment, loading, monitoring, and error handling.',
      highlights: [
        {
          title: 'Source',
          description:
            'The system from which data originates.',
        },
        {
          title: 'Transformation',
          description:
            'Processing applied to data before it reaches the destination.',
        },
        {
          title: 'Destination',
          description:
            'The system where processed data is stored or consumed.',
        },
      ],
    },
    {
      title: 'Databases',
      content:
        'Databases provide controlled mechanisms for storing and retrieving data. Relational and non-relational databases are selected according to workload, consistency, query patterns, scalability, and operational requirements.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'Stores structured data using tables, relationships, SQL, and transactional mechanisms.',
        },
        {
          title: 'NoSQL database',
          description:
            'A broad category of databases designed around models other than traditional relational tables.',
        },
        {
          title: 'Database selection',
          description:
            'Choosing a database according to workload and system requirements rather than popularity alone.',
        },
      ],
    },
    {
      title: 'Data Retrieval',
      content:
        'Data retrieval means finding and returning information required by an application, user, analytics process, or AI system. Retrieval mechanisms depend on the data type and access pattern.',
      highlights: [
        {
          title: 'Query',
          description:
            'A request for specific information from a data system.',
        },
        {
          title: 'Index',
          description:
            'A data structure that can make selected retrieval patterns faster.',
        },
        {
          title: 'Search',
          description:
            'Finding relevant information using structured conditions, text matching, or similarity.',
        },
      ],
    },
    {
      title: 'Caching',
      content:
        'Caching stores frequently accessed or expensive-to-compute information in a faster layer. Caching can reduce latency and database load but introduces freshness and invalidation challenges.',
      highlights: [
        {
          title: 'Cache hit',
          description:
            'A requested item is available in the cache.',
        },
        {
          title: 'Cache miss',
          description:
            'The requested item is not available in the cache and must be retrieved or computed elsewhere.',
        },
        {
          title: 'Cache invalidation',
          description:
            'The process of determining when cached information is no longer valid.',
        },
      ],
    },
    {
      title: 'Data Warehouses',
      content:
        'A data warehouse is designed primarily for analytical workloads. It commonly integrates information from multiple operational systems and supports reporting, business intelligence, and large-scale analytical queries.',
      highlights: [
        {
          title: 'OLTP',
          description:
            'Online Transaction Processing focuses on operational transactions and frequent data changes.',
        },
        {
          title: 'OLAP',
          description:
            'Online Analytical Processing focuses on analysis, aggregation, and reporting.',
        },
        {
          title: 'Analytical workload',
          description:
            'A workload focused on understanding data rather than primarily maintaining operational state.',
        },
      ],
    },
    {
      title: 'Data Lakes',
      content:
        'A data lake stores large amounts of raw or transformed data, often including structured, semi-structured, and unstructured information. It can support analytics, machine learning, and exploratory workloads.',
      highlights: [
        {
          title: 'Raw data',
          description:
            'Information stored close to its original form.',
        },
        {
          title: 'Data lake',
          description:
            'A storage architecture designed to retain large and varied datasets for downstream use.',
        },
      ],
    },
    {
      title: 'Data Governance',
      content:
        'Data governance establishes ownership, policies, standards, quality expectations, access controls, retention rules, and accountability for important datasets.',
      highlights: [
        {
          title: 'Data owner',
          description:
            'A person or organizational function responsible for a dataset or business domain.',
        },
        {
          title: 'Data policy',
          description:
            'A rule governing how information should be collected, stored, accessed, used, retained, or deleted.',
        },
        {
          title: 'Data lineage',
          description:
            'The history of where data originated and how it changed as it moved through systems.',
        },
      ],
    },
    {
      title: 'Data Security',
      content:
        'Data security protects information against unauthorized access, modification, disclosure, destruction, and loss. Security controls should cover data at rest, data in transit, identity, authorization, secrets, monitoring, and recovery.',
      highlights: [
        {
          title: 'Data at rest',
          description:
            'Information stored on databases, disks, object stores, or other persistent systems.',
        },
        {
          title: 'Data in transit',
          description:
            'Information moving between systems or network endpoints.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the access required to perform a legitimate responsibility.',
        },
      ],
    },
    {
      title: 'Data and APIs',
      content:
        'APIs provide controlled interfaces through which applications create, read, update, and delete data. API design should consider validation, authorization, pagination, consistency, rate limits, errors, and data exposure.',
      highlights: [
        {
          title: 'CRUD',
          description:
            'Create, Read, Update, and Delete operations commonly exposed by data-driven applications.',
        },
        {
          title: 'Pagination',
          description:
            'Returning large result sets in manageable portions.',
        },
        {
          title: 'Data exposure',
          description:
            'The information an API makes available to a caller and the risk of exposing more than necessary.',
        },
      ],
    },
    {
      title: 'Data in AI Systems',
      content:
        'AI systems depend on data throughout their lifecycle. Data may be used for model training, evaluation, retrieval, prompt context, monitoring, feedback, and application state.',
      highlights: [
        {
          title: 'Training data',
          description:
            'Information used to train or adapt a machine-learning model.',
        },
        {
          title: 'Evaluation data',
          description:
            'Information used to measure model quality and system behavior.',
        },
        {
          title: 'Retrieval data',
          description:
            'Information retrieved at runtime to provide context to an AI model.',
        },
      ],
    },
    {
      title: 'Data in RAG',
      content:
        'Retrieval-Augmented Generation systems use data sources such as documents, databases, and knowledge bases to retrieve relevant context before generating an answer. The quality of the underlying data directly affects retrieval quality and answer quality.',
      highlights: [
        {
          title: 'Chunk',
          description:
            'A smaller segment of source content prepared for retrieval.',
        },
        {
          title: 'Embedding',
          description:
            'A numerical representation used to support semantic similarity retrieval.',
        },
        {
          title: 'Metadata',
          description:
            'Information such as source, owner, timestamp, or permissions associated with retrieved content.',
        },
      ],
    },
    {
      title: 'Data in AI Agents',
      content:
        'AI agents use multiple forms of data, including user information, conversation state, tool results, workflow state, permissions, knowledge sources, and audit records. Durable and temporary data should be separated according to business and operational requirements.',
      highlights: [
        {
          title: 'Agent state',
          description:
            'Information describing the current state of an agent workflow.',
        },
        {
          title: 'Tool result',
          description:
            'Information returned by a tool invoked by an agent.',
        },
        {
          title: 'Audit record',
          description:
            'A durable record of important agent or system actions.',
        },
      ],
    },
    {
      title: 'Data Architecture for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, data architecture is about deciding what data exists, who owns it, where it should live, how it moves, how quickly it must be available, who can access it, how long it should be retained, and how the system recovers when something fails.',
    },
    {
      title: 'Common Data Mistakes',
      content:
        'Common mistakes include unclear ownership, poor data quality, storing everything in one system, choosing technologies before understanding workloads, uncontrolled data duplication, weak access controls, missing backups, poor observability, and ignoring retention or deletion requirements.',
      highlights: [
        {
          title: 'Unclear ownership',
          description:
            'No clear person or team is responsible for the correctness and lifecycle of important data.',
        },
        {
          title: 'Poor quality',
          description:
            'Inaccurate, incomplete, inconsistent, or stale information reduces system reliability.',
        },
        {
          title: 'Technology-first design',
          description:
            'Selecting a database or storage system before understanding the actual workload and business requirements.',
        },
      ],
    },
    {
      title: 'Explore Data in EDDUU',
      content:
        'EDDUU connects Data with PostgreSQL, Redis, MySQL, MongoDB, SQLite, MariaDB, Oracle Database, Microsoft SQL Server, Elasticsearch, Cassandra, DynamoDB, Neo4j, ClickHouse, Snowflake, APIs, AI, RAG, agents, security, cloud infrastructure, and distributed systems.',
    },
  ],

  relatedTechnologyIds: [
    'postgresql',
    'redis',
    'mysql',
    'mongodb',
    'sqlite',
    'mariadb',
    'oracle-database',
    'sql-server',
    'elasticsearch',
    'cassandra',
    'dynamodb',
    'neo4j',
    'clickhouse',
    'snowflake',
    'rest-apis',
    'rag',
    'agents',
  ],
}

export default dataKnowledge
