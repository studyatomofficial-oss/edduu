import type { KnowledgeDefinition } from './knowledge'

export const systemDesignKnowledge: KnowledgeDefinition = {
  technologyId: 'system-design',
  slug: 'system-design',
  title: 'System Design',
  summary:
    'System Design is the structured process of translating business requirements into a scalable, reliable, secure, maintainable, and cost-effective software architecture.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is System Design?',
      content:
        'System Design is the process of deciding how the major components of a software system should be structured, how they communicate, where data lives, how the system scales, and how it behaves when components fail.',
      highlights: [
        {
          title: 'System Design',
          description:
            'The process of defining the architecture, components, interactions, data flow, and operational behavior of a software system.',
        },
        {
          title: 'Architecture',
          description:
            'The high-level structure of a system and the relationships between its major components.',
        },
        {
          title: 'Requirement',
          description:
            'A capability or quality that the system must satisfy.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about designing a city. Before building houses, you decide where roads, hospitals, schools, electricity, water, public transport, and emergency services should go. Software system design works similarly: before building individual features, you decide how services, databases, APIs, queues, security, and infrastructure fit together.',
      highlights: [
        {
          title: 'City',
          description:
            'Comparable to the complete software system.',
        },
        {
          title: 'Roads',
          description:
            'Comparable to communication paths between software components.',
        },
        {
          title: 'Buildings',
          description:
            'Comparable to individual services or components.',
        },
        {
          title: 'Utilities',
          description:
            'Comparable to shared infrastructure such as databases, networking, identity, and observability.',
        },
      ],
    },

    {
      title: 'Why System Design Matters',
      content:
        'A system can work correctly at small scale and still fail when user traffic, data volume, reliability requirements, or business complexity increases. System design helps teams anticipate these conditions and make deliberate architectural decisions.',
      highlights: [
        {
          title: 'Scale',
          description:
            'The amount of workload a system must handle.',
        },
        {
          title: 'Reliability',
          description:
            'The ability of the system to consistently perform its intended function.',
        },
        {
          title: 'Maintainability',
          description:
            'How easily a system can be changed, operated, and understood over time.',
        },
      ],
    },

    {
      title: 'Start With Requirements',
      content:
        'Good system design starts with requirements rather than technologies. First understand what the system must do, who will use it, expected workload, performance expectations, reliability requirements, security needs, business constraints, and future growth.',
      highlights: [
        {
          title: 'Functional requirements',
          description:
            'What the system must do.',
        },
        {
          title: 'Non-functional requirements',
          description:
            'How the system should perform, scale, remain available, stay secure, and operate.',
        },
        {
          title: 'Constraints',
          description:
            'Limits such as budget, deadlines, existing infrastructure, compliance, or team capabilities.',
        },
      ],
    },

    {
      title: 'Functional Requirements',
      content:
        'Functional requirements describe system capabilities. For example, a food delivery platform may need user registration, restaurant discovery, order placement, payment, delivery tracking, and notifications.',
      highlights: [
        {
          title: 'Capability',
          description:
            'A behavior or function the system provides to users or other systems.',
        },
        {
          title: 'User action',
          description:
            'An operation initiated by a user or client.',
        },
        {
          title: 'Business workflow',
          description:
            'A sequence of activities required to complete a business operation.',
        },
      ],
    },

    {
      title: 'Non-Functional Requirements',
      content:
        'Non-functional requirements describe system qualities and constraints such as latency, throughput, availability, scalability, security, durability, recoverability, and cost.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required for a request or operation to produce a result.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work processed during a period.',
        },
        {
          title: 'Availability',
          description:
            'The proportion of time a service remains usable and accessible.',
        },
        {
          title: 'Durability',
          description:
            'The ability to preserve data despite failures.',
        },
      ],
    },

    {
      title: 'Clarify Scale',
      content:
        'Before choosing architecture, estimate users, requests, data volume, peak traffic, growth rate, and geographic distribution. Exact numbers are not always available, so reasonable assumptions should be stated explicitly.',
      highlights: [
        {
          title: 'Active users',
          description:
            'Users interacting with the system during a defined period.',
        },
        {
          title: 'Request rate',
          description:
            'The number of requests received during a period, often measured in requests per second.',
        },
        {
          title: 'Peak traffic',
          description:
            'The highest expected workload during a defined period.',
        },
        {
          title: 'Growth rate',
          description:
            'The expected increase in workload, users, or data over time.',
        },
      ],
    },

    {
      title: 'Back-of-the-Envelope Estimation',
      content:
        'System designers often perform simple capacity calculations before selecting infrastructure. The goal is not perfect precision but a reasonable understanding of scale so architectural decisions are grounded in workload.',
      highlights: [
        {
          title: 'Estimation',
          description:
            'A reasonable calculation used to understand approximate system requirements.',
        },
        {
          title: 'Peak factor',
          description:
            'A multiplier representing how much larger peak traffic is compared with average traffic.',
        },
        {
          title: 'Capacity',
          description:
            'The amount of workload a component can handle under defined conditions.',
        },
      ],
    },

    {
      title: 'High-Level Architecture',
      content:
        'High-level architecture identifies major components and how they interact without immediately focusing on implementation details. A typical web system may contain clients, DNS, load balancing, application services, databases, caches, queues, object storage, and external integrations.',
      highlights: [
        {
          title: 'Client',
          description:
            'A browser, mobile application, device, or external system using the service.',
        },
        {
          title: 'Application service',
          description:
            'A backend component implementing business logic.',
        },
        {
          title: 'Data layer',
          description:
            'The components responsible for storing and retrieving application data.',
        },
      ],
    },

    {
      title: 'Request Flow',
      content:
        'Request flow describes how a client request travels through the system. A common flow is client → DNS → edge or load balancer → application service → cache or database → response.',
      highlights: [
        {
          title: 'Request flow',
          description:
            'The path followed by a request across system components.',
        },
        {
          title: 'Entry point',
          description:
            'The component where external traffic enters the system.',
        },
        {
          title: 'Response path',
          description:
            'The route through which the resulting response returns to the client.',
        },
      ],
    },

    {
      title: 'Data Flow',
      content:
        'Data flow describes how information is created, transformed, stored, retrieved, and communicated between components. Data ownership and source-of-truth decisions are especially important in distributed systems.',
      highlights: [
        {
          title: 'Data flow',
          description:
            'The movement and transformation of information through the system.',
        },
        {
          title: 'Source of truth',
          description:
            'The authoritative location for a particular piece of information.',
        },
        {
          title: 'Data ownership',
          description:
            'Responsibility for creating, maintaining, and governing a data domain.',
        },
      ],
    },

    {
      title: 'API Design',
      content:
        'APIs define how components communicate. Good API design considers resource boundaries, request and response contracts, validation, authentication, authorization, errors, idempotency, versioning, and backward compatibility.',
      highlights: [
        {
          title: 'API contract',
          description:
            'The expected structure and behavior of an API interaction.',
        },
        {
          title: 'Versioning',
          description:
            'Managing API evolution while controlling compatibility impact on consumers.',
        },
        {
          title: 'Backward compatibility',
          description:
            'The ability of existing clients to continue working after a service changes.',
        },
      ],
    },

    {
      title: 'Database Selection',
      content:
        'Database choice should follow data requirements rather than technology preference. Consider data model, transaction requirements, consistency, query patterns, scale, availability, latency, operational complexity, and cost.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'A database that organizes structured data into related tables and commonly provides strong transactional capabilities.',
        },
        {
          title: 'NoSQL',
          description:
            'A broad family of non-relational databases designed for different access patterns and scaling requirements.',
        },
        {
          title: 'Query pattern',
          description:
            'The way application data is commonly read or searched.',
        },
      ],
    },

    {
      title: 'Caching',
      content:
        'Caching stores frequently accessed data closer to the consumer to reduce latency and backend workload. System design must define cache keys, expiration, invalidation, consistency expectations, and behavior during cache failures.',
      highlights: [
        {
          title: 'Cache',
          description:
            'A temporary copy of data used to accelerate repeated access.',
        },
        {
          title: 'Cache hit',
          description:
            'A request successfully served from cached data.',
        },
        {
          title: 'Cache miss',
          description:
            'A request requiring data retrieval from the underlying source.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or refreshing cached data when the source changes.',
        },
      ],
    },

    {
      title: 'Load Balancing',
      content:
        'A load balancer distributes incoming traffic across multiple application instances. This supports horizontal scaling and can improve availability by avoiding dependence on one application instance.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes traffic across multiple backend instances.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Increasing capacity by adding additional instances.',
        },
        {
          title: 'Health check',
          description:
            'A test used to determine whether a backend instance is capable of receiving traffic.',
        },
      ],
    },

    {
      title: 'Queues',
      content:
        'Queues allow work to be processed asynchronously. Instead of forcing a user request to wait for every downstream operation, the system can place work into a queue and process it using background workers.',
      highlights: [
        {
          title: 'Queue',
          description:
            'A mechanism for storing work until it can be processed.',
        },
        {
          title: 'Producer',
          description:
            'The component that publishes work into the queue.',
        },
        {
          title: 'Consumer',
          description:
            'The component that retrieves and processes queued work.',
        },
        {
          title: 'Backpressure',
          description:
            'A mechanism for preventing producers from overwhelming downstream processing capacity.',
        },
      ],
    },

    {
      title: 'Event-Driven Architecture',
      content:
        'In an event-driven architecture, components publish events describing things that happened and other components react to those events. This can reduce direct coupling and enable asynchronous workflows.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record that something meaningful happened in a system.',
        },
        {
          title: 'Publisher',
          description:
            'A component that produces an event.',
        },
        {
          title: 'Subscriber',
          description:
            'A component that consumes and reacts to an event.',
        },
      ],
    },

    {
      title: 'Synchronous vs Asynchronous Design',
      content:
        'Synchronous communication is often simpler and appropriate when the caller immediately needs a result. Asynchronous communication is useful when work can happen later, when operations are slow, or when components should be decoupled.',
      highlights: [
        {
          title: 'Synchronous',
          description:
            'The caller waits for the dependent operation to return a response.',
        },
        {
          title: 'Asynchronous',
          description:
            'The initiating operation can continue without waiting for downstream processing to complete.',
        },
        {
          title: 'Decoupling',
          description:
            'Reducing direct dependency between components.',
        },
      ],
    },

    {
      title: 'Monolith Architecture',
      content:
        'A monolith packages multiple application capabilities into one deployable application. It can be an excellent starting architecture because it is relatively simple to develop, test, deploy, and operate.',
      highlights: [
        {
          title: 'Monolith',
          description:
            'An application where multiple capabilities are packaged into a single deployable unit.',
        },
        {
          title: 'Modular monolith',
          description:
            'A monolith internally organized into clearly separated modules.',
        },
        {
          title: 'Deployment unit',
          description:
            'The unit that is released and deployed as a whole.',
        },
      ],
    },

    {
      title: 'Microservices Architecture',
      content:
        'Microservices split an application into independently deployable services aligned around business capabilities. This can improve team autonomy and selective scaling but increases operational and distributed-system complexity.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'An independently deployable service focused on a defined business capability.',
        },
        {
          title: 'Service boundary',
          description:
            'The architectural boundary defining a service responsibility and its interface.',
        },
        {
          title: 'Independent deployment',
          description:
            'The ability to release one service without deploying the entire application.',
        },
      ],
    },

    {
      title: 'Monolith vs Microservices',
      content:
        'The choice should be driven by business scale, team structure, deployment needs, domain boundaries, operational maturity, and scaling requirements. Microservices are not automatically more scalable or better than a well-designed modular monolith.',
      highlights: [
        {
          title: 'Monolith advantage',
          description:
            'Lower operational complexity and simpler communication between modules.',
        },
        {
          title: 'Microservices advantage',
          description:
            'Independent scaling and deployment of well-defined business capabilities.',
        },
        {
          title: 'Trade-off',
          description:
            'Gaining independence can introduce network calls, distributed transactions, observability requirements, and operational overhead.',
        },
      ],
    },

    {
      title: 'Distributed Systems',
      content:
        'A distributed system consists of components running across multiple processes, machines, or locations. Communication happens over networks, which introduces latency, partial failures, retries, consistency challenges, and coordination complexity.',
      highlights: [
        {
          title: 'Distributed system',
          description:
            'A system whose components operate across multiple computing resources and communicate over a network.',
        },
        {
          title: 'Partial failure',
          description:
            'A condition where some components fail while others continue operating.',
        },
        {
          title: 'Network boundary',
          description:
            'A communication boundary where network latency and failures become possible.',
        },
      ],
    },

    {
      title: 'Consistency',
      content:
        'Consistency describes how and when different readers observe data changes. System designers must decide what consistency level the business workflow requires rather than automatically choosing the strongest possible model.',
      highlights: [
        {
          title: 'Strong consistency',
          description:
            'Reads observe the latest committed value according to the system guarantee.',
        },
        {
          title: 'Eventual consistency',
          description:
            'Different replicas may temporarily disagree but converge toward the same value.',
        },
        {
          title: 'Consistency requirement',
          description:
            'The business rule defining how quickly and accurately data changes must become visible.',
        },
      ],
    },

    {
      title: 'Availability',
      content:
        'Availability describes whether a service is accessible and able to perform its intended function. System design improves availability through redundancy, failover, health checks, replication, graceful degradation, and recovery processes.',
      highlights: [
        {
          title: 'Availability',
          description:
            'The proportion of time a service remains usable.',
        },
        {
          title: 'Failover',
          description:
            'Switching workload to an alternative component when the primary component fails.',
        },
        {
          title: 'Graceful degradation',
          description:
            'Continuing to provide reduced functionality instead of completely failing.',
        },
      ],
    },

    {
      title: 'Fault Tolerance',
      content:
        'Fault tolerance is the ability of a system to continue operating when one or more components fail. It requires identifying failure modes and designing redundancy, isolation, retries, timeouts, fallback behavior, and recovery mechanisms.',
      highlights: [
        {
          title: 'Fault tolerance',
          description:
            'The ability to continue acceptable operation despite component failures.',
        },
        {
          title: 'Failure mode',
          description:
            'A specific way in which a component or system can fail.',
        },
        {
          title: 'Fallback',
          description:
            'An alternative behavior used when the preferred operation is unavailable.',
        },
      ],
    },

    {
      title: 'Timeouts and Retries',
      content:
        'Distributed systems should not wait indefinitely for dependencies. Timeouts limit waiting time, while carefully designed retries can recover from temporary failures. Retries must consider idempotency and backoff to avoid amplifying incidents.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A limit on how long a system waits for an operation to complete.',
        },
        {
          title: 'Retry',
          description:
            'Repeating an operation after a failure.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Increasing the delay between repeated attempts to reduce pressure on a failing dependency.',
        },
        {
          title: 'Idempotency',
          description:
            'A property where repeating the same operation does not create an unintended additional effect.',
        },
      ],
    },

    {
      title: 'Circuit Breaker',
      content:
        'A circuit breaker prevents repeated calls to a failing dependency. When failures cross a threshold, the circuit opens and requests fail fast or use fallback behavior. After a recovery period, limited traffic can be tested again.',
      highlights: [
        {
          title: 'Circuit breaker',
          description:
            'A resilience mechanism that temporarily stops calls to an unhealthy dependency.',
        },
        {
          title: 'Fail fast',
          description:
            'Returning an error quickly instead of waiting for a dependency that is known to be unhealthy.',
        },
        {
          title: 'Recovery probe',
          description:
            'A limited request used to determine whether a failed dependency has recovered.',
        },
      ],
    },

    {
      title: 'Rate Limiting',
      content:
        'Rate limiting controls how much traffic a user, client, or service can generate. It protects capacity and prevents one workload from overwhelming shared resources.',
      highlights: [
        {
          title: 'Rate limit',
          description:
            'A defined maximum request rate.',
        },
        {
          title: 'Quota',
          description:
            'A defined amount of usage allowed during a period.',
        },
        {
          title: 'Abuse protection',
          description:
            'Controls designed to prevent excessive or malicious use of system resources.',
        },
      ],
    },

    {
      title: 'Security by Design',
      content:
        'Security should be included during system design rather than added after implementation. Architecture should identify trust boundaries, authentication, authorization, encryption, secrets, data classification, attack surfaces, and audit requirements.',
      highlights: [
        {
          title: 'Trust boundary',
          description:
            'A boundary across which security assumptions or privileges change.',
        },
        {
          title: 'Attack surface',
          description:
            'The collection of points through which an attacker could potentially interact with or compromise a system.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving users and services only the permissions they actually require.',
        },
      ],
    },

    {
      title: 'Observability Design',
      content:
        'A system should be designed so teams can understand its behavior in production. Metrics, logs, and distributed traces should cover important user journeys, dependencies, failures, and performance indicators.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements of system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Recorded events generated by applications and infrastructure.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Tracking a request across multiple services and components.',
        },
      ],
    },

    {
      title: 'Capacity Planning',
      content:
        'Capacity planning estimates the infrastructure and service capacity required to support current and future workloads. It considers traffic growth, peak demand, resource utilization, scaling limits, and cost.',
      highlights: [
        {
          title: 'Capacity planning',
          description:
            'Estimating resources and architecture needed to handle expected workload.',
        },
        {
          title: 'Headroom',
          description:
            'Unused capacity intentionally maintained to absorb traffic growth or unexpected demand.',
        },
        {
          title: 'Scaling threshold',
          description:
            'A workload or resource level at which additional capacity should be introduced.',
        },
      ],
    },

    {
      title: 'Disaster Recovery',
      content:
        'System design should define how the organization recovers from severe failures such as regional outages, corrupted data, infrastructure loss, or major operational incidents.',
      highlights: [
        {
          title: 'Disaster recovery',
          description:
            'Processes and infrastructure used to restore systems after major failures.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target maximum time to restore service after a disruptive event.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the target maximum amount of data loss measured in time.',
        },
      ],
    },

    {
      title: 'Deployment Architecture',
      content:
        'Deployment design describes how software is packaged, released, placed onto infrastructure, and exposed to users. It should account for versioning, rollout strategy, health checks, rollback, and infrastructure dependencies.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'The process of placing a software version into a runtime environment.',
        },
        {
          title: 'Rollback',
          description:
            'Returning the system to a previously known-good release or configuration.',
        },
        {
          title: 'Rolling deployment',
          description:
            'Replacing or updating instances gradually rather than all at once.',
        },
      ],
    },

    {
      title: 'Architecture for AI Applications',
      content:
        'AI system design requires additional considerations such as model latency, inference cost, context size, retrieval latency, model availability, evaluation, prompt management, safety, observability, and provider dependencies.',
      highlights: [
        {
          title: 'Inference latency',
          description:
            'The time required for an AI model to generate or return a result.',
        },
        {
          title: 'Inference cost',
          description:
            'The computational or provider cost associated with generating AI outputs.',
        },
        {
          title: 'Model provider',
          description:
            'A service or infrastructure provider exposing AI model capabilities.',
        },
        {
          title: 'Model fallback',
          description:
            'Using an alternative model or provider when the preferred model is unavailable or unsuitable.',
        },
      ],
    },

    {
      title: 'AI RAG System Design Example',
      content:
        'A RAG system can be designed as a client application connected to an API layer, authentication service, retrieval service, embedding pipeline, vector database, metadata database, object storage, LLM provider, and observability system. Each component should have clear responsibilities and failure behavior.',
      highlights: [
        {
          title: 'Retrieval service',
          description:
            'A service responsible for finding relevant information for an AI request.',
        },
        {
          title: 'Vector database',
          description:
            'A database optimized for storing and searching vector representations.',
        },
        {
          title: 'LLM',
          description:
            'A large language model used to generate or transform natural-language output.',
        },
        {
          title: 'Embedding',
          description:
            'A numerical representation of content used for semantic similarity or retrieval.',
        },
      ],
    },

    {
      title: 'System Design Interview Framework',
      content:
        'A practical interview sequence is: clarify requirements, estimate scale, define APIs, draw the high-level architecture, choose data stores, explain scaling, address consistency and availability, identify failure modes, discuss security and observability, and finish with trade-offs and future improvements.',
      highlights: [
        {
          title: 'Clarify',
          description:
            'Ask questions to remove ambiguity from the problem.',
        },
        {
          title: 'Estimate',
          description:
            'Approximate workload, data, traffic, and capacity requirements.',
        },
        {
          title: 'Design',
          description:
            'Define major components and their interactions.',
        },
        {
          title: 'Trade-offs',
          description:
            'Explain why the selected architecture is appropriate and what it sacrifices.',
        },
      ],
    },

    {
      title: 'How to Present a System Design',
      content:
        'A strong system-design discussion should move from business requirements to architecture instead of immediately listing technologies. Explain the reason for each major component, show the request and data flow, identify bottlenecks, and explicitly discuss alternatives.',
      highlights: [
        {
          title: 'Requirement first',
          description:
            'Start with the problem and constraints before choosing components.',
        },
        {
          title: 'Explain decisions',
          description:
            'Connect each architectural choice to a requirement or constraint.',
        },
        {
          title: 'Discuss trade-offs',
          description:
            'Explain both benefits and costs of the chosen approach.',
        },
      ],
    },

    {
      title: 'Common System Design Mistakes',
      content:
        'Common mistakes include jumping directly to technologies, ignoring requirements, overengineering for hypothetical scale, failing to estimate traffic, ignoring failure modes, forgetting security, overlooking operational complexity, and presenting a diagram without explaining why components exist.',
      highlights: [
        {
          title: 'Technology-first design',
          description:
            'Choosing technologies before understanding the actual problem.',
        },
        {
          title: 'Overengineering',
          description:
            'Adding unnecessary complexity for requirements that do not exist.',
        },
        {
          title: 'Missing failure analysis',
          description:
            'Designing the happy path without explaining what happens when dependencies fail.',
        },
        {
          title: 'No trade-offs',
          description:
            'Presenting an architecture as universally correct without acknowledging its costs or limitations.',
        },
      ],
    },

    {
      title: 'System Design for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, system design is less about memorizing diagrams and more about making structured decisions. The leader should connect requirements, architecture, engineering capacity, delivery sequencing, operational ownership, risks, and business outcomes.',
      highlights: [
        {
          title: 'Architecture leadership',
          description:
            'Guiding teams toward architecture that supports business and technical requirements.',
        },
        {
          title: 'Decision ownership',
          description:
            'Making important architecture choices explicit and accountable.',
        },
        {
          title: 'Risk management',
          description:
            'Identifying architectural risks before they become production or delivery problems.',
        },
        {
          title: 'Cross-functional alignment',
          description:
            'Connecting engineering, product, security, operations, and business stakeholders around architectural decisions.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'distributed-systems',
    'microservices',
    'monolith',
    'event-driven-systems',
    'scalability',
    'load-balancing',
    'caching',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'serverless',
    'cloudflare',
    'nginx',
    'github-actions',
    'ci-cd',
    'deployment-strategy',
  ],
}

export default systemDesignKnowledge
