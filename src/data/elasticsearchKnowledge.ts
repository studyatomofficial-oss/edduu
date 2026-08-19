import type { KnowledgeDefinition } from './knowledge'

export const elasticsearchKnowledge: KnowledgeDefinition = {
  technologyId: 'elasticsearch',
  slug: 'elasticsearch',
  title: 'What is Elasticsearch?',
  summary:
    'Elasticsearch is a distributed search and analytics engine designed for fast full-text search, structured filtering, log analytics, observability, and large-scale information retrieval.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Elasticsearch?',
      content:
        'Elasticsearch is a distributed search and analytics engine built around indexed data. Unlike a traditional relational database whose primary purpose is transactional storage, Elasticsearch is optimized for quickly searching, filtering, aggregating, and analyzing large volumes of information.',
    },
    {
      title: 'Why Elasticsearch?',
      content:
        'Elasticsearch is commonly used when applications need fast full-text search, flexible filtering, relevance-based results, log analytics, observability, or near-real-time exploration of large datasets.',
      highlights: [
        {
          title: 'Full-text search',
          description:
            'Finds relevant documents based on words, phrases, and text analysis rather than requiring exact database equality matches.',
        },
        {
          title: 'Distributed',
          description:
            'Data and search workloads can be distributed across multiple nodes.',
        },
        {
          title: 'Analytics',
          description:
            'Supports aggregations that help applications analyze large datasets.',
        },
        {
          title: 'Near-real-time search',
          description:
            'Indexed information becomes searchable shortly after ingestion.',
        },
      ],
    },
    {
      title: 'Document Model',
      content:
        'Elasticsearch stores information as JSON-like documents. Documents contain fields and are organized into indices. This model is different from the rows and tables used by relational databases.',
      highlights: [
        {
          title: 'Document',
          description:
            'A JSON-like record containing fields that can be indexed and searched.',
        },
        {
          title: 'Field',
          description:
            'An individual piece of information inside a document.',
        },
        {
          title: 'Index',
          description:
            'A logical collection of documents designed for search and retrieval.',
        },
      ],
    },
    {
      title: 'Inverted Index',
      content:
        'Elasticsearch relies heavily on inverted-index structures to make text search efficient. Instead of scanning every document for a word, the index maps terms to documents containing those terms.',
      highlights: [
        {
          title: 'Term',
          description:
            'A searchable token extracted from indexed content.',
        },
        {
          title: 'Inverted index',
          description:
            'A data structure mapping searchable terms to the documents containing them.',
        },
        {
          title: 'Search efficiency',
          description:
            'Indexed lookup avoids scanning the complete dataset for many search operations.',
        },
      ],
    },
    {
      title: 'Text Analysis',
      content:
        'Elasticsearch analyzes text during indexing and searching. Analysis can include tokenization, normalization, stemming, stop-word handling, and other processing depending on the configured analyzer.',
      highlights: [
        {
          title: 'Analyzer',
          description:
            'A pipeline that transforms text into searchable terms.',
        },
        {
          title: 'Tokenizer',
          description:
            'Splits input text into individual tokens.',
        },
        {
          title: 'Token',
          description:
            'A searchable unit produced during text analysis.',
        },
      ],
    },
    {
      title: 'Keyword vs Text',
      content:
        'Elasticsearch commonly distinguishes between analyzed text fields and exact-value keyword fields. Text fields are useful for full-text search, while keyword fields are useful for exact filtering, sorting, and aggregations.',
      highlights: [
        {
          title: 'text',
          description:
            'Used for analyzed full-text search.',
        },
        {
          title: 'keyword',
          description:
            'Used for exact values, filtering, sorting, and aggregations.',
        },
        {
          title: 'Multi-field',
          description:
            'A field can be indexed in multiple ways so the same logical value supports different query patterns.',
        },
      ],
    },
    {
      title: 'Mapping',
      content:
        'Mappings describe how fields should be interpreted and indexed. A good mapping strategy helps Elasticsearch understand whether a field represents text, an exact value, a number, a date, or another supported data type.',
      highlights: [
        {
          title: 'Mapping',
          description:
            'Defines how fields are represented and indexed.',
        },
        {
          title: 'Field type',
          description:
            'Determines how Elasticsearch interprets and indexes a field.',
        },
        {
          title: 'Dynamic mapping',
          description:
            'Allows Elasticsearch to infer mappings for newly encountered fields according to its rules.',
        },
      ],
    },
    {
      title: 'Search Queries',
      content:
        'Elasticsearch provides a query DSL for searching indexed documents. Queries can perform full-text search, exact filtering, boolean combinations, range conditions, phrase matching, and many other retrieval patterns.',
      highlights: [
        {
          title: 'Match query',
          description:
            'Performs analyzed full-text matching against suitable text fields.',
        },
        {
          title: 'Term query',
          description:
            'Performs exact matching against an indexed term, commonly a keyword field.',
        },
        {
          title: 'Boolean query',
          description:
            'Combines multiple query conditions using logical relationships.',
        },
        {
          title: 'Range query',
          description:
            'Filters values according to ranges such as greater than, less than, or between conditions.',
        },
      ],
    },
    {
      title: 'Relevance',
      content:
        'Search engines often need to rank results rather than simply return matching records. Elasticsearch calculates relevance scores for many full-text queries so more useful results can appear first.',
      highlights: [
        {
          title: 'Relevance score',
          description:
            'A value used to help rank search results according to query relevance.',
        },
        {
          title: 'Ranking',
          description:
            'Ordering search results so potentially more useful matches appear earlier.',
        },
        {
          title: 'Exact filtering',
          description:
            'Filtering results without necessarily calculating text relevance.',
        },
      ],
    },
    {
      title: 'Aggregations',
      content:
        'Aggregations allow applications to summarize and analyze indexed data. They are commonly used for dashboards, metrics, faceted search, reporting, and exploratory analytics.',
      highlights: [
        {
          title: 'Aggregation',
          description:
            'A computation that summarizes information across matching documents.',
        },
        {
          title: 'Bucket aggregation',
          description:
            'Groups documents into categories or buckets.',
        },
        {
          title: 'Metric aggregation',
          description:
            'Calculates values such as counts, averages, minimums, maximums, or other metrics.',
        },
      ],
    },
    {
      title: 'Shards',
      content:
        'Elasticsearch distributes index data across shards. Shards allow an index to be distributed across nodes and enable search and indexing workloads to operate across multiple pieces of the dataset.',
      highlights: [
        {
          title: 'Shard',
          description:
            'A partition of an Elasticsearch index.',
        },
        {
          title: 'Primary shard',
          description:
            'A shard that holds the primary copy of a portion of an index.',
        },
        {
          title: 'Distributed search',
          description:
            'A search can be executed across multiple shards and the results combined.',
        },
      ],
    },
    {
      title: 'Replicas',
      content:
        'Elasticsearch can maintain replica shards to provide redundancy and improve availability. Replicas can also support additional search capacity.',
      highlights: [
        {
          title: 'Replica shard',
          description:
            'A copy of a primary shard.',
        },
        {
          title: 'Fault tolerance',
          description:
            'Replica copies can help keep data available when a node fails.',
        },
        {
          title: 'Read scaling',
          description:
            'Replica shards can provide additional resources for suitable search workloads.',
        },
      ],
    },
    {
      title: 'Cluster and Nodes',
      content:
        'An Elasticsearch cluster consists of nodes that participate in storing, indexing, searching, and managing data. Cluster architecture should be designed around workload, availability, data volume, and operational requirements.',
      highlights: [
        {
          title: 'Cluster',
          description:
            'A group of Elasticsearch nodes operating together.',
        },
        {
          title: 'Node',
          description:
            'An Elasticsearch server participating in a cluster.',
        },
        {
          title: 'Cluster state',
          description:
            'Information describing important cluster configuration and shard allocation state.',
        },
      ],
    },
    {
      title: 'Near-Real-Time Search',
      content:
        'Elasticsearch is designed for near-real-time search. Newly indexed documents are generally not expected to become searchable at exactly the same instant they are accepted by the system.',
      highlights: [
        {
          title: 'Refresh',
          description:
            'The process that makes recently indexed information available to search.',
        },
        {
          title: 'Search latency',
          description:
            'The time required to return search results.',
        },
      ],
    },
    {
      title: 'Bulk Ingestion',
      content:
        'For large ingestion workloads, Elasticsearch provides bulk operations that allow many indexing actions to be submitted together. Bulk ingestion can reduce request overhead and improve throughput when used correctly.',
      highlights: [
        {
          title: 'Bulk API',
          description:
            'Allows multiple indexing or related operations to be submitted in a single request.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of data or number of operations processed during a period.',
        },
        {
          title: 'Backpressure',
          description:
            'Controlling incoming workload when downstream systems cannot safely process it at the same rate.',
        },
      ],
    },
    {
      title: 'Elasticsearch and Application Search',
      content:
        'Applications commonly use Elasticsearch to provide product search, document search, autocomplete, filtering, faceted navigation, relevance ranking, and discovery experiences that would be difficult or expensive to implement using only a transactional database.',
      highlights: [
        {
          title: 'Autocomplete',
          description:
            'Providing likely search suggestions while a user is entering a query.',
        },
        {
          title: 'Faceted search',
          description:
            'Allowing users to filter results using categories or attributes.',
        },
        {
          title: 'Relevance ranking',
          description:
            'Ordering results based on how well they satisfy the search intent.',
        },
      ],
    },
    {
      title: 'Elasticsearch and APIs',
      content:
        'Backend APIs commonly expose search functionality through a service layer rather than allowing clients to directly access Elasticsearch. The service layer can validate queries, enforce authorization, apply business rules, and protect the search cluster.',
      highlights: [
        {
          title: 'Search API',
          description:
            'An application endpoint that provides controlled access to search functionality.',
        },
        {
          title: 'Query validation',
          description:
            'Checking incoming search parameters before passing them to the search system.',
        },
        {
          title: 'Access control',
          description:
            'Ensuring users can only search information they are authorized to access.',
        },
      ],
    },
    {
      title: 'Elasticsearch and FastAPI',
      content:
        'FastAPI services can integrate Elasticsearch through an Elasticsearch client library. Production architecture should address connection management, timeouts, retries, query validation, observability, authorization, and failure handling.',
      highlights: [
        {
          title: 'Client library',
          description:
            'Application software used to communicate with an Elasticsearch cluster.',
        },
        {
          title: 'Timeout',
          description:
            'A limit preventing a slow search operation from consuming resources indefinitely.',
        },
        {
          title: 'Retry',
          description:
            'A controlled attempt to repeat a failed operation when failure conditions are appropriate for retry.',
        },
      ],
    },
    {
      title: 'Elasticsearch for Logs',
      content:
        'Elasticsearch has historically been widely used as part of log-management and observability architectures. Application and infrastructure logs can be indexed and searched for troubleshooting, dashboards, alerting, and operational analysis.',
      highlights: [
        {
          title: 'Log event',
          description:
            'A structured record describing an application or infrastructure event.',
        },
        {
          title: 'Log search',
          description:
            'Finding relevant operational events using indexed fields and text.',
        },
        {
          title: 'Observability',
          description:
            'Understanding system behavior through logs, metrics, traces, and related signals.',
        },
      ],
    },
    {
      title: 'Elasticsearch for Observability',
      content:
        'Elasticsearch can support observability workflows where large volumes of logs, events, and other operational information need to be searched and analyzed quickly.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Detailed records of application and infrastructure activity.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements describing system behavior.',
        },
        {
          title: 'Traces',
          description:
            'Records showing how a request travels through distributed services.',
        },
      ],
    },
    {
      title: 'Elasticsearch and RAG',
      content:
        'Elasticsearch can participate in RAG architectures by indexing documents and supporting lexical, semantic, or hybrid retrieval depending on the configured capabilities. Retrieved content can then be passed to an LLM as context.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Finding relevant information from an indexed knowledge source.',
        },
        {
          title: 'Semantic search',
          description:
            'Searching based on meaning or similarity rather than only exact words.',
        },
        {
          title: 'Hybrid search',
          description:
            'Combining lexical and semantic retrieval signals to improve search quality.',
        },
        {
          title: 'Grounding',
          description:
            'Providing retrieved source information to an AI system so its response can be based on available evidence.',
        },
      ],
    },
    {
      title: 'Elasticsearch and AI Applications',
      content:
        'AI applications can use Elasticsearch for document retrieval, knowledge search, enterprise search, recommendation-related retrieval, observability data, and other workloads where fast information discovery is important.',
      highlights: [
        {
          title: 'Enterprise search',
          description:
            'Searching information across organizational documents and systems.',
        },
        {
          title: 'Knowledge retrieval',
          description:
            'Finding relevant information for an AI or user-facing workflow.',
        },
        {
          title: 'Semantic retrieval',
          description:
            'Finding information based on conceptual similarity.',
        },
      ],
    },
    {
      title: 'Elasticsearch and AI Agents',
      content:
        'AI agents can use Elasticsearch through controlled search tools to retrieve documents, product information, operational events, or enterprise knowledge. Tool-level authorization should ensure the agent cannot search data beyond its permitted scope.',
      highlights: [
        {
          title: 'Search tool',
          description:
            'A controlled agent capability that performs a search operation.',
        },
        {
          title: 'Authorization boundary',
          description:
            'A control ensuring an agent can only retrieve information it is allowed to access.',
        },
        {
          title: 'Auditability',
          description:
            'Recording important agent search actions for later review.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'Production Elasticsearch deployments require authentication, authorization, encryption, network controls, secret management, secure configuration, monitoring, and appropriate tenant or index-level access restrictions.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a client or service.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which indices, documents, or operations an identity can access.',
        },
        {
          title: 'TLS',
          description:
            'Protects network communication between clients and Elasticsearch components.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the access required for a specific role or workload.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'Elasticsearch scales by distributing data and workloads across nodes and shards. Scaling decisions must consider indexing throughput, search throughput, data volume, shard sizing, memory, storage, replication, and query complexity.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adding nodes to distribute data and workload.',
        },
        {
          title: 'Shard sizing',
          description:
            'Designing shard count and size so the cluster can operate efficiently.',
        },
        {
          title: 'Search throughput',
          description:
            'The number of search operations the system can process within a given period.',
        },
      ],
    },
    {
      title: 'Performance',
      content:
        'Elasticsearch performance depends on mapping design, shard strategy, query complexity, indexing rate, data volume, hardware, memory, storage, refresh behavior, and cluster health. Performance tuning should start with measurement.',
      highlights: [
        {
          title: 'Query latency',
          description:
            'The time required to execute a search request.',
        },
        {
          title: 'Indexing throughput',
          description:
            'The rate at which documents can be indexed.',
        },
        {
          title: 'Query complexity',
          description:
            'The amount of computation required to evaluate a search request.',
        },
      ],
    },
    {
      title: 'Availability and Recovery',
      content:
        'Elasticsearch availability depends on appropriate replication, node distribution, cluster design, monitoring, snapshots, and recovery procedures. Replica shards improve redundancy, while snapshots provide a mechanism for data recovery.',
      highlights: [
        {
          title: 'Replica',
          description:
            'A copy of a primary shard used for redundancy and potentially additional search capacity.',
        },
        {
          title: 'Snapshot',
          description:
            'A stored representation of cluster or index data used for backup and recovery purposes.',
        },
        {
          title: 'Recovery',
          description:
            'The process of restoring data or service after failure.',
        },
      ],
    },
    {
      title: 'Elasticsearch vs Relational Databases',
      content:
        'Elasticsearch and relational databases solve different primary problems. A relational database is typically the system of record for transactional business data, while Elasticsearch is commonly used as a search and analytics layer. In many architectures they work together rather than replacing one another.',
      highlights: [
        {
          title: 'System of record',
          description:
            'The authoritative source responsible for maintaining official business state.',
        },
        {
          title: 'Search layer',
          description:
            'A specialized system optimized for finding and analyzing information.',
        },
        {
          title: 'Synchronization',
          description:
            'Keeping search indexes sufficiently aligned with the authoritative source.',
        },
      ],
    },
    {
      title: 'Elasticsearch vs Redis',
      content:
        'Redis is primarily an in-memory data platform commonly used for caching, fast state access, queues, and other low-latency workloads. Elasticsearch is primarily optimized for search and analytics. They can complement each other in the same architecture.',
      highlights: [
        {
          title: 'Cache',
          description:
            'A temporary fast-access layer used to reduce repeated work against slower systems.',
        },
        {
          title: 'Search',
          description:
            'Finding relevant information across indexed datasets.',
        },
        {
          title: 'Complementary systems',
          description:
            'Different infrastructure components can serve different workload requirements.',
        },
      ],
    },
    {
      title: 'When to Use Elasticsearch',
      content:
        'Elasticsearch is a strong candidate when an application needs fast full-text search, relevance ranking, flexible filtering, faceted navigation, large-scale log analysis, observability search, or search-oriented retrieval for AI systems.',
      highlights: [
        {
          title: 'Full-text search',
          description:
            'Applications where users search natural language or textual content.',
        },
        {
          title: 'Log analytics',
          description:
            'Large operational datasets that need rapid filtering and exploration.',
        },
        {
          title: 'RAG retrieval',
          description:
            'AI systems that need scalable lexical, semantic, or hybrid information retrieval.',
        },
      ],
    },
    {
      title: 'When Not to Use Elasticsearch',
      content:
        'Elasticsearch should not automatically replace a transactional relational database. It may be a poor fit when the primary requirement is strict transactional integrity, complex relational transactions, or simple persistent storage that does not need specialized search capabilities.',
      highlights: [
        {
          title: 'Transactional system of record',
          description:
            'A workload where strong relational transactions and authoritative business state are the primary requirement.',
        },
        {
          title: 'Simple storage',
          description:
            'Applications may not need the operational complexity of a distributed search platform.',
        },
        {
          title: 'Complex relational queries',
          description:
            'Highly relational workloads may be better served by a relational database.',
        },
      ],
    },
    {
      title: 'Elasticsearch for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Elasticsearch knowledge should focus on search architecture, indexing strategy, relevance, scalability, cluster design, observability, security, cost, data synchronization, failure modes, and deciding when Elasticsearch should complement rather than replace the system of record.',
    },
    {
      title: 'Common Elasticsearch Mistakes',
      content:
        'Common mistakes include poor mappings, excessive shard counts, uncontrolled query complexity, treating Elasticsearch as the primary transactional database, ignoring index growth, weak access controls, insufficient monitoring, and failing to test recovery procedures.',
      highlights: [
        {
          title: 'Shard explosion',
          description:
            'Creating too many shards and increasing cluster-management overhead.',
        },
        {
          title: 'Poor mapping',
          description:
            'Choosing inappropriate field types or indexing strategies for the actual query workload.',
        },
        {
          title: 'System-of-record mistake',
          description:
            'Treating a search index as the authoritative transactional source when another system should own business state.',
        },
      ],
    },
    {
      title: 'Explore Elasticsearch in EDDUU',
      content:
        'EDDUU connects Elasticsearch with Data, PostgreSQL, MySQL, MongoDB, Redis, APIs, FastAPI, observability, security, RAG, semantic search, AI applications, and AI agents.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'redis',
    'mongodb',
    'rest-apis',
    'fastapi',
    'rag',
    'agents',
    'security',
    'authentication',
    'authorization',
  ],
}

export default elasticsearchKnowledge
