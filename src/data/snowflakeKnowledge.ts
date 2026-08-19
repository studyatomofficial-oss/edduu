import type { KnowledgeDefinition } from './knowledge'

export const snowflakeKnowledge: KnowledgeDefinition = {
  technologyId: 'snowflake',
  slug: 'snowflake',
  title: 'What is Snowflake?',
  summary:
    'Snowflake is a cloud-native data platform designed for data warehousing, analytics, data engineering, data sharing, and large-scale analytical workloads with separate storage and compute.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Snowflake?',
      content:
        'Snowflake is a cloud-native data platform designed primarily for analytical workloads. It provides managed storage, compute, data processing, analytics, data sharing, and data engineering capabilities without requiring teams to manage traditional database infrastructure.',
    },
    {
      title: 'Why Snowflake?',
      content:
        'Snowflake is designed for organizations that need scalable analytical processing across large datasets while separating storage from compute. This allows different workloads to use compute resources independently against shared data.',
      highlights: [
        {
          title: 'Cloud-native',
          description:
            'Designed specifically for cloud infrastructure and managed operations.',
        },
        {
          title: 'Separation of storage and compute',
          description:
            'Storage and compute resources can scale independently according to workload requirements.',
        },
        {
          title: 'Managed platform',
          description:
            'Snowflake handles much of the underlying infrastructure and operational complexity.',
        },
        {
          title: 'Analytical workloads',
          description:
            'Optimized for data warehousing, analytics, reporting, and large-scale data processing.',
        },
      ],
    },
    {
      title: 'OLAP and Data Warehousing',
      content:
        'Snowflake is primarily used for OLAP workloads and modern cloud data warehousing. It allows organizations to consolidate analytical data and provide scalable access to business intelligence, reporting, and data science workloads.',
      highlights: [
        {
          title: 'OLAP',
          description:
            'Online Analytical Processing focuses on analytical queries over large datasets.',
        },
        {
          title: 'Data warehouse',
          description:
            'A centralized analytical data platform used for reporting and business analysis.',
        },
        {
          title: 'Analytical workload',
          description:
            'A workload involving aggregation, filtering, joins, reporting, and large-scale data analysis.',
        },
      ],
    },
    {
      title: 'Separation of Storage and Compute',
      content:
        'One of Snowflake’s important architectural characteristics is the separation of data storage from compute resources. Organizations can store data centrally while running different workloads using independent compute resources.',
      highlights: [
        {
          title: 'Storage',
          description:
            'The persistent layer where analytical data is stored.',
        },
        {
          title: 'Compute',
          description:
            'The processing resources used to execute queries and data workloads.',
        },
        {
          title: 'Independent scaling',
          description:
            'Compute resources can be adjusted without requiring the same scaling decision for storage.',
        },
      ],
    },
    {
      title: 'Virtual Warehouses',
      content:
        'Snowflake uses virtual warehouses as compute resources for executing queries and other workloads. Different warehouses can be configured for different teams, applications, or workload types.',
      highlights: [
        {
          title: 'Virtual warehouse',
          description:
            'A Snowflake compute cluster used to execute data processing and query workloads.',
        },
        {
          title: 'Workload isolation',
          description:
            'Separate compute resources can prevent one workload from directly consuming another workload’s compute capacity.',
        },
        {
          title: 'Compute scaling',
          description:
            'Compute capacity can be adjusted according to workload requirements.',
        },
      ],
    },
    {
      title: 'Concurrency',
      content:
        'Multiple users and workloads may need to access analytical data at the same time. Snowflake provides architectural mechanisms for handling concurrent workloads and separating compute resources where appropriate.',
      highlights: [
        {
          title: 'Concurrency',
          description:
            'The ability to handle multiple workloads or requests during overlapping periods.',
        },
        {
          title: 'Workload isolation',
          description:
            'Separating workloads so that one workload has less impact on another.',
        },
      ],
    },
    {
      title: 'Snowflake SQL',
      content:
        'Snowflake provides SQL-based data querying and transformation capabilities. Teams can use SQL for analytics, transformations, reporting, data exploration, and data engineering workflows.',
      highlights: [
        {
          title: 'SQL',
          description:
            'A language used to query and transform structured data.',
        },
        {
          title: 'Transformation',
          description:
            'Changing, cleaning, joining, or restructuring data for analytical use.',
        },
        {
          title: 'Analytical query',
          description:
            'A query designed to understand, summarize, or analyze large amounts of data.',
        },
      ],
    },
    {
      title: 'Databases, Schemas, and Tables',
      content:
        'Snowflake organizes data through databases, schemas, tables, views, and other objects. This hierarchy helps teams structure analytical datasets and manage access.',
      highlights: [
        {
          title: 'Database',
          description:
            'A logical container for schemas and related analytical objects.',
        },
        {
          title: 'Schema',
          description:
            'A logical namespace containing tables, views, and other database objects.',
        },
        {
          title: 'Table',
          description:
            'A structured collection of analytical records.',
        },
      ],
    },
    {
      title: 'Structured and Semi-Structured Data',
      content:
        'Snowflake can work with structured relational data as well as semi-structured formats such as JSON. This allows organizations to bring application and event data into analytical workflows without requiring every source to have an identical relational structure.',
      highlights: [
        {
          title: 'Structured data',
          description:
            'Data organized into predictable fields and relational structures.',
        },
        {
          title: 'Semi-structured data',
          description:
            'Data with some organization but more flexible structure than traditional relational tables.',
        },
        {
          title: 'JSON',
          description:
            'A common format for representing structured and semi-structured application data.',
        },
      ],
    },
    {
      title: 'Data Loading',
      content:
        'Snowflake supports multiple approaches for bringing data into analytical storage. Production architectures should choose ingestion patterns based on source systems, freshness requirements, volume, reliability, and transformation needs.',
      highlights: [
        {
          title: 'Batch ingestion',
          description:
            'Loading data periodically in groups rather than continuously.',
        },
        {
          title: 'Streaming ingestion',
          description:
            'Continuously or near-continuously bringing data into an analytical platform.',
        },
        {
          title: 'Data pipeline',
          description:
            'A sequence of processes that extracts, transforms, transports, and loads data.',
        },
      ],
    },
    {
      title: 'ETL and ELT',
      content:
        'Snowflake is commonly used in ELT architectures where raw data is loaded into the cloud data platform first and transformations are performed inside the analytical environment. ETL and ELT are both valid patterns depending on requirements.',
      highlights: [
        {
          title: 'ETL',
          description:
            'Extract, Transform, Load: data is transformed before being loaded into the target platform.',
        },
        {
          title: 'ELT',
          description:
            'Extract, Load, Transform: raw data is loaded first and transformed inside the analytical platform.',
        },
        {
          title: 'Transformation layer',
          description:
            'The part of the data architecture responsible for preparing data for analytical consumption.',
        },
      ],
    },
    {
      title: 'Data Sharing',
      content:
        'Snowflake supports secure data sharing between organizations and teams without requiring traditional file-based data movement. This can simplify collaboration between data providers and consumers.',
      highlights: [
        {
          title: 'Data sharing',
          description:
            'Providing controlled access to data for another consumer or organization.',
        },
        {
          title: 'Data consumer',
          description:
            'A team or organization that accesses analytical data provided by another party.',
        },
        {
          title: 'Data provider',
          description:
            'A team or organization that owns or publishes data for controlled consumption.',
        },
      ],
    },
    {
      title: 'Data Marketplace',
      content:
        'Snowflake can support data marketplace scenarios where organizations discover and consume datasets from external providers. This creates opportunities for sharing commercial, public, partner, and industry data.',
      highlights: [
        {
          title: 'Dataset',
          description:
            'A logical collection of related data made available for analysis.',
        },
        {
          title: 'Data marketplace',
          description:
            'A platform model where data providers publish datasets for potential consumers.',
        },
      ],
    },
    {
      title: 'Time Travel',
      content:
        'Snowflake provides Time Travel capabilities that allow authorized users to access historical states of data within configured retention periods. This can support recovery, investigation, and accidental-change analysis.',
      highlights: [
        {
          title: 'Time Travel',
          description:
            'A capability for accessing historical data states within supported retention windows.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring or examining data after an accidental change or deletion.',
        },
        {
          title: 'Historical state',
          description:
            'The state of data at an earlier point in time.',
        },
      ],
    },
    {
      title: 'Zero-Copy Cloning',
      content:
        'Snowflake supports cloning of supported database objects without immediately duplicating all underlying storage. This can be useful for development, testing, experimentation, and controlled analytical workflows.',
      highlights: [
        {
          title: 'Clone',
          description:
            'A new logical copy of a supported Snowflake object.',
        },
        {
          title: 'Development environment',
          description:
            'An isolated environment used to build and test data workloads.',
        },
        {
          title: 'Storage efficiency',
          description:
            'Avoiding unnecessary physical duplication can reduce storage overhead for appropriate use cases.',
        },
      ],
    },
    {
      title: 'Views',
      content:
        'Snowflake supports views that expose logical representations of underlying data. Views can simplify access, encapsulate business logic, and provide controlled interfaces for analytical consumers.',
      highlights: [
        {
          title: 'View',
          description:
            'A logical query-based representation of underlying data.',
        },
        {
          title: 'Business logic',
          description:
            'Rules that define how raw information becomes meaningful business data.',
        },
        {
          title: 'Abstraction',
          description:
            'Hiding implementation details behind a simpler data interface.',
        },
      ],
    },
    {
      title: 'Materialized Views',
      content:
        'Snowflake supports materialized views for specific workloads where precomputed results can improve performance. They should be introduced when the performance benefit justifies additional storage and maintenance considerations.',
      highlights: [
        {
          title: 'Materialized view',
          description:
            'A maintained representation of query results intended to accelerate repeated access patterns.',
        },
        {
          title: 'Precomputation',
          description:
            'Calculating results ahead of query time to reduce repeated processing.',
        },
      ],
    },
    {
      title: 'Snowflake and Business Intelligence',
      content:
        'Snowflake is commonly used as the analytical backend for business intelligence platforms. Dashboards can query curated datasets to provide metrics, reports, trends, and decision-support information.',
      highlights: [
        {
          title: 'Business intelligence',
          description:
            'Using data and analytics to support business decisions.',
        },
        {
          title: 'Dashboard',
          description:
            'A visual interface showing analytical metrics and trends.',
        },
        {
          title: 'Semantic layer',
          description:
            'A business-oriented layer that defines consistent meanings for metrics and dimensions.',
        },
      ],
    },
    {
      title: 'Snowflake and Data Lakes',
      content:
        'Snowflake can participate in modern lakehouse and data-lake architectures where organizations combine cloud object storage with analytical processing. The correct architecture depends on governance, performance, cost, data formats, and workload requirements.',
      highlights: [
        {
          title: 'Data lake',
          description:
            'A scalable storage environment for large volumes of raw and processed data.',
        },
        {
          title: 'Lakehouse',
          description:
            'An architectural approach combining characteristics of data lakes and analytical data warehouses.',
        },
        {
          title: 'Object storage',
          description:
            'Cloud storage designed for large collections of files and objects.',
        },
      ],
    },
    {
      title: 'Snowflake and Data Engineering',
      content:
        'Data engineering teams can use Snowflake for ingestion, transformation, orchestration, data quality, analytical modeling, and serving curated datasets to downstream consumers.',
      highlights: [
        {
          title: 'Data engineering',
          description:
            'Building reliable systems that collect, transform, store, and serve data.',
        },
        {
          title: 'Data quality',
          description:
            'Ensuring data is accurate, complete, consistent, timely, and usable.',
        },
        {
          title: 'Data model',
          description:
            'The logical organization of data entities and their relationships for analytical use.',
        },
      ],
    },
    {
      title: 'Snowflake and Kafka',
      content:
        'Snowflake can be integrated into event and streaming architectures where Kafka or another streaming platform transports application events and Snowflake provides analytical storage and processing.',
      highlights: [
        {
          title: 'Kafka',
          description:
            'A distributed event-streaming platform used to transport high-volume event data.',
        },
        {
          title: 'Streaming pipeline',
          description:
            'A pipeline that continuously processes and transports data as it arrives.',
        },
        {
          title: 'Analytical sink',
          description:
            'A destination where streaming data is persisted for analytical workloads.',
        },
      ],
    },
    {
      title: 'Snowflake and APIs',
      content:
        'Application APIs can use Snowflake as an analytical data source for reporting, analytics, business metrics, and data products. Production APIs should control query scope, authorization, caching, and timeout behavior.',
      highlights: [
        {
          title: 'Analytics API',
          description:
            'An API exposing analytical metrics and reporting capabilities.',
        },
        {
          title: 'Query governance',
          description:
            'Controls that manage which analytical queries applications and users are allowed to execute.',
        },
        {
          title: 'Caching',
          description:
            'Keeping frequently requested analytical results in a faster layer to reduce repeated database work.',
        },
      ],
    },
    {
      title: 'Snowflake and FastAPI',
      content:
        'FastAPI can expose Snowflake-backed analytics through REST APIs. A production service should manage authentication, authorization, connection behavior, parameterized queries, timeouts, error handling, and observability.',
      highlights: [
        {
          title: 'REST API',
          description:
            'An HTTP-based application interface used to expose backend capabilities.',
        },
        {
          title: 'Parameterized query',
          description:
            'A query that separates input values from query structure.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which users or services can access specific analytical data.',
        },
      ],
    },
    {
      title: 'Snowflake and AI Applications',
      content:
        'AI platforms can use Snowflake for model analytics, evaluation datasets, user behavior analysis, feature data, experiment tracking, cost analysis, and enterprise data access.',
      highlights: [
        {
          title: 'AI analytics',
          description:
            'Analyzing model usage, performance, quality, latency, and cost.',
        },
        {
          title: 'Evaluation dataset',
          description:
            'A dataset used to measure model or application behavior against defined criteria.',
        },
        {
          title: 'Enterprise data',
          description:
            'Organizational information used to support business applications and analytical workloads.',
        },
      ],
    },
    {
      title: 'Snowflake and AI Agents',
      content:
        'AI-agent platforms can use Snowflake to analyze agent execution history, tool usage, model costs, latency, user outcomes, and enterprise datasets. Agent access should be mediated through controlled application tools and strong authorization.',
      highlights: [
        {
          title: 'Agent telemetry',
          description:
            'Operational information generated during agent execution.',
        },
        {
          title: 'Tool analytics',
          description:
            'Analysis of tool invocation frequency, latency, errors, and outcomes.',
        },
        {
          title: 'Enterprise agent',
          description:
            'An AI agent operating against organizational data and business workflows.',
        },
      ],
    },
    {
      title: 'Snowflake and RAG',
      content:
        'Snowflake can participate in RAG architectures by storing document metadata, enterprise source data, ingestion records, evaluation results, permissions, retrieval analytics, and other structured information. Specialized vector retrieval components may be used where required by the architecture.',
      highlights: [
        {
          title: 'Document metadata',
          description:
            'Structured information describing documents, ownership, processing state, and other attributes.',
        },
        {
          title: 'Retrieval analytics',
          description:
            'Metrics describing retrieval behavior, latency, relevance, and outcomes.',
        },
        {
          title: 'Enterprise RAG',
          description:
            'RAG architecture designed around organizational knowledge and access controls.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'Snowflake provides extensive security and governance capabilities. Production implementations should use strong authentication, role-based access control, least privilege, encryption, network controls, auditing, data classification, and appropriate policies for sensitive information.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control assigns permissions through roles.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required by a user, service, or workload.',
        },
        {
          title: 'Data governance',
          description:
            'Policies and controls that manage how organizational data is accessed, protected, classified, and used.',
        },
        {
          title: 'Auditing',
          description:
            'Recording and reviewing access and operational activity for security and compliance purposes.',
        },
      ],
    },
    {
      title: 'Data Governance',
      content:
        'Enterprise Snowflake environments require governance across ownership, classification, access, lineage, quality, retention, and compliance. Governance should be designed as part of the platform rather than added after large-scale adoption.',
      highlights: [
        {
          title: 'Data lineage',
          description:
            'Tracking where data originates, how it is transformed, and where it is consumed.',
        },
        {
          title: 'Data classification',
          description:
            'Categorizing information according to sensitivity, business importance, or regulatory requirements.',
        },
        {
          title: 'Data ownership',
          description:
            'Defining the team or organization responsible for a dataset.',
        },
      ],
    },
    {
      title: 'Performance',
      content:
        'Snowflake performance depends on warehouse sizing, workload concurrency, query design, data organization, caching behavior, clustering strategy where applicable, and the amount of data processed. Performance optimization should be driven by measured workload behavior.',
      highlights: [
        {
          title: 'Warehouse sizing',
          description:
            'Selecting appropriate compute capacity for the workload.',
        },
        {
          title: 'Query optimization',
          description:
            'Improving query structure and data access to reduce unnecessary processing.',
        },
        {
          title: 'Workload isolation',
          description:
            'Separating workloads to reduce contention and improve predictability.',
        },
      ],
    },
    {
      title: 'Cost Optimization',
      content:
        'Snowflake cost is strongly influenced by compute consumption, storage, data transfer, workload frequency, warehouse sizing, concurrency, and retention. Technical leaders should connect cost metrics to actual business workloads.',
      highlights: [
        {
          title: 'Compute cost',
          description:
            'The cost associated with running Snowflake compute resources.',
        },
        {
          title: 'Storage cost',
          description:
            'The cost associated with retaining data in the platform.',
        },
        {
          title: 'Warehouse auto-suspend',
          description:
            'Automatically stopping idle compute resources to reduce unnecessary compute usage.',
        },
        {
          title: 'Cost attribution',
          description:
            'Connecting data-platform consumption to teams, products, workloads, or business units.',
        },
      ],
    },
    {
      title: 'Availability and Recovery',
      content:
        'Production Snowflake architectures should define recovery, availability, retention, and business-continuity requirements. Managed cloud architecture reduces infrastructure-management burden, but organizations still need clear recovery objectives and governance.',
      highlights: [
        {
          title: 'Recovery Point Objective',
          description:
            'The acceptable amount of recent data loss measured in time.',
        },
        {
          title: 'Recovery Time Objective',
          description:
            'The target time for restoring service after a disruption.',
        },
        {
          title: 'Business continuity',
          description:
            'The ability to continue critical operations during and after disruptions.',
        },
      ],
    },
    {
      title: 'Snowflake vs PostgreSQL',
      content:
        'Snowflake and PostgreSQL serve different primary purposes. PostgreSQL is a general-purpose relational database commonly used for operational applications and transactional workloads. Snowflake is primarily an analytical cloud data platform designed for large-scale reporting, analytics, and data engineering.',
      highlights: [
        {
          title: 'Operational database',
          description:
            'PostgreSQL is commonly used as a primary transactional data store for applications.',
        },
        {
          title: 'Analytical platform',
          description:
            'Snowflake is optimized for large-scale analytical workloads.',
        },
        {
          title: 'Architecture',
          description:
            'Organizations may use PostgreSQL for operational data and Snowflake for downstream analytics.',
        },
      ],
    },
    {
      title: 'Snowflake vs ClickHouse',
      content:
        'Snowflake and ClickHouse both support large-scale analytical workloads. Snowflake emphasizes a managed cloud data platform with strong separation of storage and compute, governance, sharing, and broad enterprise data capabilities. ClickHouse is highly optimized for fast analytical query execution and can support different deployment models.',
      highlights: [
        {
          title: 'Managed platform',
          description:
            'Snowflake provides a highly managed cloud-native analytical platform.',
        },
        {
          title: 'Analytical engine',
          description:
            'ClickHouse is particularly known for high-performance analytical query execution.',
        },
        {
          title: 'Enterprise data platform',
          description:
            'Snowflake provides a broad set of capabilities around governance, sharing, analytics, and data engineering.',
        },
      ],
    },
    {
      title: 'Snowflake vs Elasticsearch',
      content:
        'Snowflake and Elasticsearch can both store and analyze large datasets, but their dominant workloads differ. Snowflake is primarily an analytical data platform, while Elasticsearch is strongly oriented toward search, text retrieval, and log exploration.',
      highlights: [
        {
          title: 'Data warehouse',
          description:
            'Snowflake is commonly used as a centralized analytical data warehouse.',
        },
        {
          title: 'Search engine',
          description:
            'Elasticsearch is optimized for search-oriented workloads.',
        },
        {
          title: 'Analytical aggregation',
          description:
            'Snowflake is well suited to large-scale analytical transformations and reporting.',
        },
      ],
    },
    {
      title: 'When to Use Snowflake',
      content:
        'Snowflake is a strong candidate for enterprise data warehousing, business intelligence, data engineering, large-scale analytics, governed data sharing, AI analytics, and organizations that want a managed cloud analytical platform.',
      highlights: [
        {
          title: 'Enterprise analytics',
          description:
            'Large-scale analytical workloads across organizational datasets.',
        },
        {
          title: 'Business intelligence',
          description:
            'Centralized analytical data powering dashboards and reporting.',
        },
        {
          title: 'Data sharing',
          description:
            'Controlled sharing of data between teams, partners, and organizations.',
        },
      ],
    },
    {
      title: 'When Not to Use Snowflake',
      content:
        'Snowflake may not be the best primary database for applications requiring extremely frequent transactional row-level updates, simple low-latency key-value access, or workloads better served by an operational database or specialized search system.',
      highlights: [
        {
          title: 'OLTP',
          description:
            'Transactional application workloads are generally better served by operational databases.',
        },
        {
          title: 'Key-value workload',
          description:
            'Simple low-latency key-value access may fit a specialized operational store better.',
        },
        {
          title: 'Search workload',
          description:
            'Search-heavy applications may require a search-oriented technology.',
        },
      ],
    },
    {
      title: 'Snowflake for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Snowflake knowledge should focus on cloud data architecture, separation of storage and compute, workload isolation, governance, security, cost management, data engineering, analytics, AI integration, and deciding when Snowflake should complement rather than replace operational databases.',
    },
    {
      title: 'Common Snowflake Mistakes',
      content:
        'Common mistakes include treating Snowflake as an OLTP database, leaving warehouses running unnecessarily, poor workload isolation, weak governance, uncontrolled data growth, inefficient queries, unclear cost ownership, and building analytical architecture without defining business data requirements.',
      highlights: [
        {
          title: 'OLTP misuse',
          description:
            'Using an analytical platform as the primary transactional database without a suitable workload fit.',
        },
        {
          title: 'Idle compute',
          description:
            'Leaving compute resources active when they are not required.',
        },
        {
          title: 'Governance gaps',
          description:
            'Failing to define ownership, access, classification, lineage, and retention policies.',
        },
        {
          title: 'Cost blindness',
          description:
            'Operating analytical workloads without connecting consumption to business value and ownership.',
        },
      ],
    },
    {
      title: 'Explore Snowflake in EDDUU',
      content:
        'EDDUU connects Snowflake with Data, PostgreSQL, ClickHouse, Elasticsearch, Kafka, APIs, FastAPI, data engineering, AI applications, AI agents, RAG, security, and enterprise analytics.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'clickhouse',
    'elasticsearch',
    'kafka',
    'rest-apis',
    'fastapi',
    'rag',
    'agents',
    'security',
    'rbac',
  ],
}

export default snowflakeKnowledge
