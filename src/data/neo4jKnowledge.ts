import type { KnowledgeDefinition } from './knowledge'

export const neo4jKnowledge: KnowledgeDefinition = {
  technologyId: 'neo4j',
  slug: 'neo4j',
  title: 'What is Neo4j?',
  summary:
    'Neo4j is a graph database designed to store and query highly connected data using nodes, relationships, properties, and graph-oriented query languages.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Neo4j?',
      content:
        'Neo4j is a native graph database designed for applications where relationships between entities are as important as the entities themselves. Instead of primarily representing information as rows and tables, Neo4j models data as nodes connected by relationships, with properties attached to both.',
    },
    {
      title: 'Why Neo4j?',
      content:
        'Neo4j is useful when applications need to traverse complex relationships efficiently. Typical examples include recommendation systems, fraud detection, identity relationships, knowledge graphs, network analysis, dependency mapping, and enterprise knowledge discovery.',
      highlights: [
        {
          title: 'Graph-native',
          description:
            'Data is represented directly as entities and relationships rather than reconstructing relationships through many joins.',
        },
        {
          title: 'Relationship-focused',
          description:
            'The database is optimized for workloads where connections between entities are central to the application.',
        },
        {
          title: 'Traversal',
          description:
            'Applications can efficiently explore paths and connected entities within the graph.',
        },
        {
          title: 'Knowledge graphs',
          description:
            'Neo4j is commonly used to represent connected knowledge and relationships between concepts and entities.',
        },
      ],
    },
    {
      title: 'Graph Data Model',
      content:
        'Neo4j uses a property graph model. Nodes represent entities, relationships connect nodes, and both nodes and relationships can contain properties.',
      highlights: [
        {
          title: 'Node',
          description:
            'Represents an entity such as a person, company, product, document, or account.',
        },
        {
          title: 'Relationship',
          description:
            'Represents a directed connection between nodes.',
        },
        {
          title: 'Property',
          description:
            'A key-value attribute stored on a node or relationship.',
        },
      ],
    },
    {
      title: 'Labels',
      content:
        'Labels classify nodes into logical categories. Applications can use labels to identify entity types such as User, Product, Company, Document, or Customer.',
      highlights: [
        {
          title: 'Label',
          description:
            'A category assigned to a node.',
        },
        {
          title: 'Entity type',
          description:
            'A logical classification describing what a node represents.',
        },
        {
          title: 'Multiple labels',
          description:
            'A node can participate in multiple logical classifications when the model requires it.',
        },
      ],
    },
    {
      title: 'Relationships',
      content:
        'Relationships are first-class elements in Neo4j. They connect nodes and normally have a relationship type that describes the meaning of the connection.',
      highlights: [
        {
          title: 'Relationship type',
          description:
            'Defines the semantic meaning of a connection, such as PURCHASED, WORKS_FOR, or KNOWS.',
        },
        {
          title: 'Direction',
          description:
            'Relationships can have a direction that represents how one entity is connected to another.',
        },
        {
          title: 'Relationship property',
          description:
            'Additional information can be stored directly on a relationship.',
        },
      ],
    },
    {
      title: 'Property Graph',
      content:
        'The property graph model allows applications to attach structured attributes directly to nodes and relationships. This is particularly useful when the meaning of a connection itself contains business information.',
      highlights: [
        {
          title: 'Node properties',
          description:
            'Attributes describing an entity.',
        },
        {
          title: 'Relationship properties',
          description:
            'Attributes describing the connection between two entities.',
        },
      ],
    },
    {
      title: 'Cypher',
      content:
        'Cypher is Neo4j’s declarative graph query language. It represents graph patterns visually through syntax that describes nodes, relationships, filtering conditions, and returned results.',
      highlights: [
        {
          title: 'Declarative query',
          description:
            'Describes what information should be retrieved rather than specifying every low-level execution step.',
        },
        {
          title: 'Pattern matching',
          description:
            'Queries can describe the graph pattern that should exist between entities.',
        },
        {
          title: 'Traversal',
          description:
            'Queries can explore relationships across multiple hops.',
        },
      ],
    },
    {
      title: 'Graph Traversal',
      content:
        'Graph traversal means following relationships from one node to another. Traversals are fundamental to use cases such as finding mutual connections, recommendation paths, dependency chains, and fraud networks.',
      highlights: [
        {
          title: 'Hop',
          description:
            'A movement across one relationship from one node to another.',
        },
        {
          title: 'Path',
          description:
            'A sequence of connected nodes and relationships.',
        },
        {
          title: 'Traversal depth',
          description:
            'The number of relationship levels explored during a graph operation.',
        },
      ],
    },
    {
      title: 'Graph Queries vs Relational Joins',
      content:
        'Relational databases commonly connect data through joins. Graph databases represent connections directly, which can make multi-hop relationship traversal more natural for highly connected workloads.',
      highlights: [
        {
          title: 'Join',
          description:
            'A relational operation combining rows from multiple tables according to matching conditions.',
        },
        {
          title: 'Traversal',
          description:
            'A graph operation that follows relationships between connected nodes.',
        },
        {
          title: 'Connected data',
          description:
            'Information where relationships are a central part of the business problem.',
        },
      ],
    },
    {
      title: 'Indexes and Constraints',
      content:
        'Neo4j supports indexes and constraints that improve lookup performance and protect data integrity. Appropriate indexing should reflect the identifiers and lookup patterns used by the application.',
      highlights: [
        {
          title: 'Index',
          description:
            'A structure that helps Neo4j locate nodes or other indexed values efficiently.',
        },
        {
          title: 'Constraint',
          description:
            'A rule that protects important data-model invariants.',
        },
        {
          title: 'Uniqueness',
          description:
            'A constraint can ensure that an identifying property remains unique where required.',
        },
      ],
    },
    {
      title: 'Transactions',
      content:
        'Neo4j supports transactions so related graph changes can be treated as a logical unit. Transaction boundaries should reflect the business operation and should be kept appropriately scoped.',
      highlights: [
        {
          title: 'Transaction',
          description:
            'A logical group of database operations that is committed or rolled back according to the transaction outcome.',
        },
        {
          title: 'Atomicity',
          description:
            'Related changes succeed together or are rolled back together.',
        },
      ],
    },
    {
      title: 'Knowledge Graphs',
      content:
        'Neo4j is widely suited to knowledge-graph architectures where entities, concepts, documents, organizations, people, and their relationships need to be represented explicitly and queried through connected paths.',
      highlights: [
        {
          title: 'Knowledge graph',
          description:
            'A graph representation of entities and the meaningful relationships between them.',
        },
        {
          title: 'Entity',
          description:
            'A real-world or conceptual object represented as a graph node.',
        },
        {
          title: 'Semantic relationship',
          description:
            'A relationship whose type expresses the meaning of the connection.',
        },
      ],
    },
    {
      title: 'Neo4j and AI Applications',
      content:
        'AI applications can use Neo4j to represent connected business knowledge, customer relationships, organizational structures, product relationships, dependencies, and other information where relationship context improves reasoning and retrieval.',
      highlights: [
        {
          title: 'Connected knowledge',
          description:
            'Information where understanding relationships between entities adds important context.',
        },
        {
          title: 'Entity resolution',
          description:
            'Connecting records that represent the same or related real-world entity.',
        },
        {
          title: 'Context',
          description:
            'Relationship information that helps an AI system understand how retrieved entities are connected.',
        },
      ],
    },
    {
      title: 'Neo4j and RAG',
      content:
        'Neo4j can participate in GraphRAG architectures by retrieving entities and relationships from a knowledge graph and providing that structured context to an LLM. Graph retrieval can complement traditional vector or lexical retrieval.',
      highlights: [
        {
          title: 'GraphRAG',
          description:
            'A RAG approach that uses graph structure and relationships as part of retrieval and context construction.',
        },
        {
          title: 'Entity retrieval',
          description:
            'Finding relevant graph entities based on a query or known identifier.',
        },
        {
          title: 'Relationship retrieval',
          description:
            'Finding connections between relevant entities to provide richer context.',
        },
        {
          title: 'Hybrid retrieval',
          description:
            'Combining graph, lexical, and semantic retrieval techniques.',
        },
      ],
    },
    {
      title: 'Neo4j and AI Agents',
      content:
        'AI agents can use Neo4j through controlled graph-query tools to discover relationships, retrieve connected knowledge, analyze dependencies, or answer questions involving multi-hop context. Agent access should be constrained by authorization and query boundaries.',
      highlights: [
        {
          title: 'Graph tool',
          description:
            'A controlled agent capability that performs a defined graph retrieval or analysis operation.',
        },
        {
          title: 'Multi-hop reasoning',
          description:
            'Reasoning that requires information connected through multiple relationships.',
        },
        {
          title: 'Authorization boundary',
          description:
            'A control ensuring an agent can only access permitted graph data.',
        },
      ],
    },
    {
      title: 'Recommendation Systems',
      content:
        'Neo4j can model relationships between users, products, content, categories, and behaviors to support recommendation use cases. Graph traversals can identify related entities and paths that may be useful for recommendation logic.',
      highlights: [
        {
          title: 'Recommendation',
          description:
            'Suggesting relevant products, content, people, or actions based on available information.',
        },
        {
          title: 'Similarity',
          description:
            'A measure or relationship indicating that entities share meaningful characteristics or connections.',
        },
        {
          title: 'User-item graph',
          description:
            'A graph connecting users with products, content, or other items they interact with.',
        },
      ],
    },
    {
      title: 'Fraud Detection',
      content:
        'Graph databases are useful for fraud detection when suspicious behavior emerges from relationships between accounts, devices, identities, transactions, locations, or organizations.',
      highlights: [
        {
          title: 'Fraud network',
          description:
            'A connected set of entities and transactions that may indicate coordinated suspicious behavior.',
        },
        {
          title: 'Shared identifier',
          description:
            'A common device, account detail, address, or other attribute connecting seemingly separate entities.',
        },
        {
          title: 'Relationship analysis',
          description:
            'Examining connections to identify patterns that may be difficult to detect from isolated records.',
        },
      ],
    },
    {
      title: 'Identity and Access Relationships',
      content:
        'Neo4j can model relationships between users, roles, groups, permissions, applications, organizations, and resources. This can help analyze complex access relationships and authorization paths.',
      highlights: [
        {
          title: 'User-resource relationship',
          description:
            'A graph connection representing a user’s relationship to a resource.',
        },
        {
          title: 'Role hierarchy',
          description:
            'A graph representation of relationships between roles and inherited responsibilities.',
        },
        {
          title: 'Access path',
          description:
            'A sequence of relationships showing how an identity obtains access to a resource.',
        },
      ],
    },
    {
      title: 'Dependency Mapping',
      content:
        'Neo4j can represent dependencies between applications, services, infrastructure components, libraries, teams, and business capabilities. This can help organizations understand impact and change propagation.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A relationship where one component relies on another.',
        },
        {
          title: 'Impact analysis',
          description:
            'Determining which systems or capabilities may be affected by a change or failure.',
        },
        {
          title: 'Service graph',
          description:
            'A graph representing relationships between distributed services.',
        },
      ],
    },
    {
      title: 'Neo4j and APIs',
      content:
        'Backend APIs can expose graph-powered capabilities such as recommendations, relationship discovery, knowledge retrieval, and network analysis. The API layer should protect the graph from arbitrary or expensive queries.',
      highlights: [
        {
          title: 'Graph API',
          description:
            'An application interface that exposes graph-based operations to clients.',
        },
        {
          title: 'Query validation',
          description:
            'Checking graph queries or parameters before execution.',
        },
        {
          title: 'Query limits',
          description:
            'Controls that prevent clients from requesting excessively expensive traversals.',
        },
      ],
    },
    {
      title: 'Neo4j and FastAPI',
      content:
        'FastAPI services can integrate Neo4j using an appropriate Python driver. Production services should manage sessions, transactions, connection behavior, query parameters, timeouts, authorization, and observability.',
      highlights: [
        {
          title: 'Neo4j driver',
          description:
            'Application software used to communicate with a Neo4j database.',
        },
        {
          title: 'Parameterized query',
          description:
            'A query that passes values separately from the query structure to improve safety and reuse.',
        },
        {
          title: 'Session',
          description:
            'A managed application interaction context used for database operations.',
        },
      ],
    },
    {
      title: 'Graph Algorithms',
      content:
        'Neo4j can support graph analytics and algorithms for understanding network structure. Examples include centrality, community detection, similarity, pathfinding, and connectivity analysis.',
      highlights: [
        {
          title: 'Centrality',
          description:
            'Measures that help identify important or influential nodes in a graph.',
        },
        {
          title: 'Community detection',
          description:
            'Identifying groups of nodes that are more strongly connected to each other.',
        },
        {
          title: 'Pathfinding',
          description:
            'Finding paths between nodes according to defined criteria.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'Production Neo4j deployments require authentication, authorization, encryption, network protection, secure credentials, auditing where required, and controls against unauthorized or excessively expensive graph queries.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a user, application, or service.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which graph data and operations an identity can access.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the access required for a specific role or workload.',
        },
        {
          title: 'Query protection',
          description:
            'Prevents untrusted clients from executing uncontrolled expensive graph traversals.',
        },
      ],
    },
    {
      title: 'Performance',
      content:
        'Neo4j performance depends on graph modeling, indexes, relationship density, traversal depth, query structure, memory, storage, and workload characteristics. Efficient graph design is especially important for high-depth or highly connected traversals.',
      highlights: [
        {
          title: 'Traversal depth',
          description:
            'The number of relationships explored during a graph query.',
        },
        {
          title: 'Dense node',
          description:
            'A node connected to a very large number of relationships.',
        },
        {
          title: 'Query plan',
          description:
            'The execution strategy selected for a graph query.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'Neo4j supports architectures for scaling graph workloads, but scaling strategy should be based on graph size, transaction workload, query patterns, availability requirements, and the specific Neo4j deployment model.',
      highlights: [
        {
          title: 'Graph size',
          description:
            'The number of nodes, relationships, and properties represented in the graph.',
        },
        {
          title: 'Read workload',
          description:
            'The volume and pattern of graph retrieval operations.',
        },
        {
          title: 'Write workload',
          description:
            'The volume and pattern of graph mutations.',
        },
      ],
    },
    {
      title: 'Availability and Recovery',
      content:
        'Production Neo4j architectures should define availability, backup, recovery, and disaster-recovery requirements. The selected deployment architecture should provide appropriate redundancy and recovery mechanisms for the business workload.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Designing the graph platform so infrastructure failures do not unnecessarily interrupt service.',
        },
        {
          title: 'Backup',
          description:
            'Creating recoverable copies of graph data.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Restoring graph service and data after a major infrastructure or regional failure.',
        },
      ],
    },
    {
      title: 'Neo4j vs PostgreSQL',
      content:
        'Neo4j and PostgreSQL are both database technologies but optimize different workloads. PostgreSQL is a general-purpose relational database with strong SQL and transaction capabilities. Neo4j is designed around connected data and graph traversal. A system can use both when each solves a different part of the architecture.',
      highlights: [
        {
          title: 'Relational model',
          description:
            'PostgreSQL represents data primarily through tables and relationships.',
        },
        {
          title: 'Graph model',
          description:
            'Neo4j represents data directly as nodes and relationships.',
        },
        {
          title: 'Workload fit',
          description:
            'Database selection should be driven by the application’s dominant access patterns.',
        },
      ],
    },
    {
      title: 'Neo4j vs MongoDB',
      content:
        'MongoDB is primarily document-oriented, while Neo4j is graph-oriented. MongoDB is a natural fit for flexible document structures, whereas Neo4j is particularly useful when traversing relationships is central to the workload.',
      highlights: [
        {
          title: 'Document model',
          description:
            'MongoDB organizes information primarily as documents.',
        },
        {
          title: 'Graph model',
          description:
            'Neo4j organizes information as nodes and relationships.',
        },
        {
          title: 'Relationship traversal',
          description:
            'Neo4j is designed specifically for workloads where connected paths are important.',
        },
      ],
    },
    {
      title: 'When to Use Neo4j',
      content:
        'Neo4j is a strong candidate for knowledge graphs, recommendation systems, fraud detection, network analysis, dependency mapping, identity relationships, social graphs, and other workloads where relationships are central to the business problem.',
      highlights: [
        {
          title: 'Knowledge graph',
          description:
            'Connected representations of entities, concepts, and relationships.',
        },
        {
          title: 'Fraud detection',
          description:
            'Identifying suspicious patterns through connected entities and transactions.',
        },
        {
          title: 'Recommendations',
          description:
            'Using graph relationships to discover relevant products, content, or users.',
        },
      ],
    },
    {
      title: 'When Not to Use Neo4j',
      content:
        'Neo4j may not be the best choice when the application primarily requires simple key-value storage, document storage, traditional relational transactions, or workloads where relationships are not important enough to justify a graph database.',
      highlights: [
        {
          title: 'Simple key-value workload',
          description:
            'A simpler key-value database may be more appropriate when graph relationships are unnecessary.',
        },
        {
          title: 'Relational reporting',
          description:
            'Traditional relational analytics may be better suited to a relational or analytical database.',
        },
        {
          title: 'Unnecessary complexity',
          description:
            'A graph platform should be justified by the actual relationship-driven workload.',
        },
      ],
    },
    {
      title: 'Neo4j for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Neo4j knowledge should focus on graph modeling, relationship-driven architecture, query patterns, traversal performance, knowledge graphs, GraphRAG, security, availability, operational complexity, and deciding when a graph database adds measurable business value.',
    },
    {
      title: 'Common Neo4j Mistakes',
      content:
        'Common mistakes include modeling everything as nodes without meaningful relationship semantics, creating uncontrolled traversal depth, ignoring dense nodes, executing unbounded queries, skipping indexes for important lookups, and selecting Neo4j when the workload does not actually depend on connected data.',
      highlights: [
        {
          title: 'Unbounded traversal',
          description:
            'A query explores an uncontrolled number of relationships and consumes excessive resources.',
        },
        {
          title: 'Dense node',
          description:
            'A node has an extremely large number of relationships and becomes expensive to traverse.',
        },
        {
          title: 'Graph without purpose',
          description:
            'Using a graph database without a meaningful relationship-driven workload.',
        },
      ],
    },
    {
      title: 'Explore Neo4j in EDDUU',
      content:
        'EDDUU connects Neo4j with Data, PostgreSQL, MongoDB, Elasticsearch, RAG, GraphRAG, AI applications, AI agents, APIs, FastAPI, security, and knowledge graphs.',
    },
  ],

  relatedTechnologyIds: [
    'data',
    'postgresql',
    'mongodb',
    'elasticsearch',
    'rest-apis',
    'fastapi',
    'rag',
    'agents',
    'authentication',
    'authorization',
  ],
}

export default neo4jKnowledge
