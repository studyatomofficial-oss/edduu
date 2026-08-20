import type { KnowledgeDefinition } from './knowledge'

export const microservicesKnowledge: KnowledgeDefinition = {
  technologyId: 'microservices',
  slug: 'microservices',
  title: 'Microservices',
  summary:
    'Microservices architecture structures an application as a collection of independently deployable services, each responsible for a focused business capability.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What are Microservices?',
      content:
        'Microservices is an architectural style where an application is divided into multiple independently deployable services. Each service owns a clearly defined business capability and communicates with other services through explicit interfaces such as APIs or events.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'An independently deployable service responsible for a focused business capability.',
        },
        {
          title: 'Business capability',
          description:
            'A meaningful business responsibility such as payments, orders, identity, or notifications.',
        },
        {
          title: 'Independent deployment',
          description:
            'The ability to release one service without deploying the entire application.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of a large shopping mall. Instead of one person running every department, there are separate teams for groceries, electronics, clothing, food, security, and customer service. Each team owns its own responsibility but they work together to provide the complete shopping experience. Microservices work in a similar way.',
      highlights: [
        {
          title: 'Mall',
          description:
            'Comparable to the complete application.',
        },
        {
          title: 'Department',
          description:
            'Comparable to an individual microservice.',
        },
        {
          title: 'Department manager',
          description:
            'Comparable to the team owning a service.',
        },
        {
          title: 'Communication',
          description:
            'Comparable to APIs or events connecting departments.',
        },
      ],
    },

    {
      title: 'Why Use Microservices?',
      content:
        'Microservices can help organizations scale teams and services independently, isolate failures, release features independently, and allow different capabilities to evolve at different speeds. These benefits come with additional operational and distributed-system complexity.',
      highlights: [
        {
          title: 'Independent scaling',
          description:
            'Scaling only the services that require additional capacity.',
        },
        {
          title: 'Independent deployment',
          description:
            'Releasing one service without rebuilding the entire application.',
        },
        {
          title: 'Fault isolation',
          description:
            'Limiting the impact of certain failures to individual services.',
        },
        {
          title: 'Team autonomy',
          description:
            'Allowing teams to own and deliver specific business capabilities.',
        },
      ],
    },

    {
      title: 'Microservices Are Not Just Small APIs',
      content:
        'A microservice is not simply a small piece of code or a small API. A meaningful service has a clear business responsibility, an ownership boundary, an operational lifecycle, and an interface through which other components interact with it.',
      highlights: [
        {
          title: 'Ownership',
          description:
            'A team should clearly own the service and its operational responsibilities.',
        },
        {
          title: 'Boundary',
          description:
            'The service should have a meaningful and understandable responsibility.',
        },
        {
          title: 'Lifecycle',
          description:
            'The service has its own development, testing, deployment, monitoring, and recovery lifecycle.',
        },
      ],
    },

    {
      title: 'Service Boundaries',
      content:
        'Good service boundaries are usually aligned with business capabilities and domain responsibilities. Poor boundaries create excessive communication, shared data, and tightly coupled deployments.',
      highlights: [
        {
          title: 'Service boundary',
          description:
            'The defined responsibility and ownership boundary of a service.',
        },
        {
          title: 'Domain',
          description:
            'A business area with its own concepts, rules, and responsibilities.',
        },
        {
          title: 'Coupling',
          description:
            'The degree to which one service depends on another service.',
        },
      ],
    },

    {
      title: 'Bounded Context',
      content:
        'A bounded context is a domain boundary within which a particular model and terminology have a defined meaning. Microservice boundaries often benefit from bounded-context thinking because different business areas may use similar words with different meanings.',
      highlights: [
        {
          title: 'Bounded context',
          description:
            'A defined domain boundary within which a business model and terminology are consistent.',
        },
        {
          title: 'Domain model',
          description:
            'The concepts and rules representing a particular business area.',
        },
        {
          title: 'Context boundary',
          description:
            'The point at which one business model or responsibility ends and another begins.',
        },
      ],
    },

    {
      title: 'Database per Service',
      content:
        'A common microservices principle is that each service owns its data. Other services should generally access that data through the owning service rather than directly querying its database.',
      highlights: [
        {
          title: 'Database per service',
          description:
            'A pattern where each service controls its own persistent data.',
        },
        {
          title: 'Data ownership',
          description:
            'Responsibility for defining, maintaining, and governing a service data domain.',
        },
        {
          title: 'Shared database',
          description:
            'A database directly accessed by multiple services, which can create strong coupling.',
        },
      ],
    },

    {
      title: 'Why Shared Databases Create Coupling',
      content:
        'When multiple services directly depend on the same database schema, a schema change can affect several teams and deployments. It also becomes harder to define ownership and independently evolve services.',
      highlights: [
        {
          title: 'Schema coupling',
          description:
            'Dependence between services caused by shared database structures.',
        },
        {
          title: 'Independent evolution',
          description:
            'The ability of a service to change without requiring simultaneous changes elsewhere.',
        },
        {
          title: 'Ownership conflict',
          description:
            'A situation where multiple services or teams have unclear responsibility for the same data.',
        },
      ],
    },

    {
      title: 'Service-to-Service Communication',
      content:
        'Microservices communicate through synchronous APIs or asynchronous messaging. Communication style should be selected according to latency, consistency, coupling, reliability, and workflow requirements.',
      highlights: [
        {
          title: 'Synchronous API',
          description:
            'A service sends a request and waits for the other service to respond.',
        },
        {
          title: 'Asynchronous message',
          description:
            'A service publishes work or an event without requiring immediate downstream completion.',
        },
        {
          title: 'Event',
          description:
            'A record that a meaningful business or system event occurred.',
        },
      ],
    },

    {
      title: 'Synchronous Communication',
      content:
        'Synchronous service calls are useful when the caller needs an immediate response. However, every synchronous dependency can add latency and create an availability dependency.',
      highlights: [
        {
          title: 'Direct dependency',
          description:
            'The calling service depends on another service responding successfully.',
        },
        {
          title: 'Latency chain',
          description:
            'Accumulated response time across multiple synchronous service calls.',
        },
        {
          title: 'Timeout',
          description:
            'A maximum period allowed for a remote operation to complete.',
        },
      ],
    },

    {
      title: 'Asynchronous Communication',
      content:
        'Asynchronous communication uses queues or events to decouple services. It is useful for background processing, notifications, analytics, and workflows that do not require an immediate response.',
      highlights: [
        {
          title: 'Queue',
          description:
            'A mechanism that stores work until a consumer processes it.',
        },
        {
          title: 'Producer',
          description:
            'A service that publishes messages or events.',
        },
        {
          title: 'Consumer',
          description:
            'A service that receives and processes messages or events.',
        },
      ],
    },

    {
      title: 'API Gateway',
      content:
        'An API gateway provides a controlled entry point for external clients. It can handle routing, authentication, rate limiting, request transformation, observability, and other cross-cutting concerns.',
      highlights: [
        {
          title: 'API gateway',
          description:
            'A gateway that receives client requests and routes them to appropriate backend services.',
        },
        {
          title: 'Routing',
          description:
            'Determining which backend service should receive a request.',
        },
        {
          title: 'Cross-cutting concern',
          description:
            'A capability shared across multiple services, such as authentication or rate limiting.',
        },
      ],
    },

    {
      title: 'Service Discovery',
      content:
        'Microservice instances may be created and removed dynamically. Service discovery allows services to find currently available instances instead of relying on fixed machine addresses.',
      highlights: [
        {
          title: 'Service discovery',
          description:
            'A mechanism for locating available instances of a service.',
        },
        {
          title: 'Service registry',
          description:
            'A system containing information about available service instances.',
        },
        {
          title: 'Dynamic instance',
          description:
            'A service instance that can be created, removed, or replaced as workload changes.',
        },
      ],
    },

    {
      title: 'Load Balancing',
      content:
        'Load balancing distributes requests across multiple instances of a service. It improves resource utilization and supports horizontal scaling and availability.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes traffic among service instances.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adding additional service instances to increase capacity.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism for determining whether an instance should receive traffic.',
        },
      ],
    },

    {
      title: 'Stateless Services',
      content:
        'Stateless services do not depend on local memory for information that must survive between requests. This makes it easier to run multiple instances and distribute traffic across them.',
      highlights: [
        {
          title: 'Stateless',
          description:
            'A service does not require request-specific persistent state to remain on one instance.',
        },
        {
          title: 'Stateful',
          description:
            'A service maintains state that influences future operations.',
        },
        {
          title: 'Shared state',
          description:
            'State stored in a shared system such as a database, cache, or distributed store.',
        },
      ],
    },

    {
      title: 'Session Management',
      content:
        'If user session state is required, microservices can store it in a shared state store or use signed tokens. The design should avoid unnecessary dependence on a specific service instance.',
      highlights: [
        {
          title: 'Session',
          description:
            'State associated with an ongoing interaction between a user and system.',
        },
        {
          title: 'Token',
          description:
            'A credential or signed representation of information used to authenticate or carry state.',
        },
        {
          title: 'Sticky session',
          description:
            'Routing a user repeatedly to the same service instance.',
        },
      ],
    },

    {
      title: 'Resilience',
      content:
        'Microservices require explicit resilience mechanisms because every network call can fail. Timeouts, retries, circuit breakers, bulkheads, rate limits, fallbacks, and graceful degradation are common patterns.',
      highlights: [
        {
          title: 'Resilience',
          description:
            'The ability of a system to continue acceptable operation during failures.',
        },
        {
          title: 'Circuit breaker',
          description:
            'A mechanism that temporarily stops calls to an unhealthy dependency.',
        },
        {
          title: 'Bulkhead',
          description:
            'A mechanism that isolates resources so one dependency cannot consume everything.',
        },
      ],
    },

    {
      title: 'Retries',
      content:
        'Retries can recover from temporary failures but can also amplify an outage. Microservices should use bounded retries, exponential backoff, jitter, appropriate timeout budgets, and idempotent operations where necessary.',
      highlights: [
        {
          title: 'Bounded retry',
          description:
            'A retry policy with a maximum number or duration of attempts.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Increasing the delay between retry attempts.',
        },
        {
          title: 'Retry storm',
          description:
            'A sudden increase in repeated requests caused by many clients retrying simultaneously.',
        },
      ],
    },

    {
      title: 'Circuit Breaker',
      content:
        'A circuit breaker protects a service from repeatedly calling a failing dependency. It typically moves between closed, open, and half-open states.',
      highlights: [
        {
          title: 'Closed',
          description:
            'Normal state where calls are allowed.',
        },
        {
          title: 'Open',
          description:
            'Calls are blocked or fail fast because the dependency is considered unhealthy.',
        },
        {
          title: 'Half-open',
          description:
            'Limited requests are allowed to test whether the dependency has recovered.',
        },
      ],
    },

    {
      title: 'Distributed Transactions',
      content:
        'A business workflow can span multiple services, making a single ACID transaction difficult. Microservices commonly use patterns such as sagas and compensating actions to coordinate multi-step workflows.',
      highlights: [
        {
          title: 'Distributed transaction',
          description:
            'A business operation involving multiple independent services or data stores.',
        },
        {
          title: 'Saga',
          description:
            'A sequence of local transactions coordinated into a larger business workflow.',
        },
        {
          title: 'Compensating action',
          description:
            'An operation that logically offsets an earlier action when a later workflow step fails.',
        },
      ],
    },

    {
      title: 'Saga Pattern',
      content:
        'A saga breaks a business transaction into local transactions. Each successful step advances the workflow, while failures trigger compensating actions for previously completed steps.',
      highlights: [
        {
          title: 'Local transaction',
          description:
            'A transaction completed within one service and its data store.',
        },
        {
          title: 'Compensation',
          description:
            'A business operation used to offset a previous successful operation.',
        },
        {
          title: 'Workflow state',
          description:
            'Information describing which steps have completed and what should happen next.',
        },
      ],
    },

    {
      title: 'Choreography vs Orchestration',
      content:
        'Saga workflows can be coordinated through choreography, where services react to events, or orchestration, where a central workflow component directs each step. The right approach depends on workflow complexity and ownership.',
      highlights: [
        {
          title: 'Choreography',
          description:
            'Services coordinate through events without one central workflow controller.',
        },
        {
          title: 'Orchestration',
          description:
            'A coordinator explicitly directs workflow steps across services.',
        },
        {
          title: 'Workflow coordinator',
          description:
            'A component responsible for controlling the sequence of distributed operations.',
        },
      ],
    },

    {
      title: 'Event-Driven Microservices',
      content:
        'Event-driven microservices publish events when business state changes. Other services subscribe and react independently. This reduces direct coupling but introduces eventual consistency, duplicate delivery, ordering, and event-versioning concerns.',
      highlights: [
        {
          title: 'Publisher',
          description:
            'A service that publishes an event.',
        },
        {
          title: 'Subscriber',
          description:
            'A service that consumes and reacts to an event.',
        },
        {
          title: 'Eventual consistency',
          description:
            'A condition where distributed views of data may temporarily differ before converging.',
        },
      ],
    },

    {
      title: 'Event Contracts',
      content:
        'Events are interfaces between services. Their schemas should be versioned and designed carefully so producers and consumers can evolve independently.',
      highlights: [
        {
          title: 'Event schema',
          description:
            'The structure and meaning of data contained in an event.',
        },
        {
          title: 'Schema evolution',
          description:
            'Changing an event structure while preserving compatibility with existing consumers.',
        },
        {
          title: 'Backward compatibility',
          description:
            'The ability of existing consumers to continue processing newer event versions.',
        },
      ],
    },

    {
      title: 'Idempotency',
      content:
        'Because distributed systems often retry requests or deliver messages more than once, service operations should be designed so repeated execution does not create unintended effects.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'A property where repeating the same logical operation does not create unintended additional effects.',
        },
        {
          title: 'Idempotency key',
          description:
            'A unique identifier used to recognize repeated attempts of the same operation.',
        },
        {
          title: 'Duplicate message',
          description:
            'The same logical event or message delivered more than once.',
        },
      ],
    },

    {
      title: 'Message Delivery Semantics',
      content:
        'Microservices using messaging commonly operate with at-least-once delivery. Consumers therefore need duplicate handling. Exactly-once behavior is difficult and depends on the complete processing model rather than simply a message broker setting.',
      highlights: [
        {
          title: 'At-most-once',
          description:
            'A message may be delivered zero or one time.',
        },
        {
          title: 'At-least-once',
          description:
            'A message may be delivered one or more times.',
        },
        {
          title: 'Exactly-once',
          description:
            'A stronger guarantee where the intended effect occurs once under defined semantics.',
        },
      ],
    },

    {
      title: 'Dead-Letter Queues',
      content:
        'A dead-letter queue stores messages that repeatedly fail processing. This prevents poison messages from continuously blocking normal processing and provides a place for operational investigation and replay.',
      highlights: [
        {
          title: 'Dead-letter queue',
          description:
            'A destination for messages that repeatedly fail processing.',
        },
        {
          title: 'Poison message',
          description:
            'A message that repeatedly causes processing failures.',
        },
        {
          title: 'Replay',
          description:
            'Reprocessing a failed message after the underlying issue has been addressed.',
        },
      ],
    },

    {
      title: 'Data Consistency',
      content:
        'Because each service may own its own data, microservices frequently operate with eventual consistency between domains. The architecture should identify where strong consistency is required and where temporary differences are acceptable.',
      highlights: [
        {
          title: 'Strong consistency',
          description:
            'Reads observe the latest committed state according to the system guarantee.',
        },
        {
          title: 'Eventual consistency',
          description:
            'Replicas or services may temporarily disagree but converge over time.',
        },
        {
          title: 'Consistency boundary',
          description:
            'The scope within which a particular consistency guarantee applies.',
        },
      ],
    },

    {
      title: 'Distributed Caching',
      content:
        'A shared distributed cache can reduce latency and database load, but cache invalidation becomes a cross-service concern. Services should define ownership and freshness expectations clearly.',
      highlights: [
        {
          title: 'Distributed cache',
          description:
            'A cache shared across multiple service instances or services.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or refreshing cached data when the source changes.',
        },
        {
          title: 'Cache-aside',
          description:
            'A pattern where the application reads from cache first and loads missing data from the source.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'Observability is critical because a user request may cross many services. Metrics, logs, distributed traces, correlation IDs, dependency dashboards, and service-level indicators help teams diagnose failures.',
      highlights: [
        {
          title: 'Distributed tracing',
          description:
            'Tracking a logical request across multiple services.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to associate related operations across service boundaries.',
        },
        {
          title: 'Service-level indicator',
          description:
            'A measurable signal such as latency, availability, or error rate.',
        },
      ],
    },

    {
      title: 'Security Between Services',
      content:
        'Microservices introduce many service-to-service network boundaries. Services should authenticate one another, authorize operations, encrypt communication, manage secrets securely, and follow least-privilege principles.',
      highlights: [
        {
          title: 'Service authentication',
          description:
            'Verifying the identity of one service communicating with another.',
        },
        {
          title: 'Mutual TLS',
          description:
            'TLS where both communicating parties authenticate using certificates.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving each service only the permissions it needs.',
        },
      ],
    },

    {
      title: 'Service Mesh',
      content:
        'A service mesh provides infrastructure-level capabilities for service-to-service communication such as traffic management, mutual TLS, retries, observability, and policy enforcement. It can simplify application code but adds operational complexity.',
      highlights: [
        {
          title: 'Service mesh',
          description:
            'An infrastructure layer managing communication between services.',
        },
        {
          title: 'Sidecar',
          description:
            'A supporting process or container deployed alongside a service to provide infrastructure capabilities.',
        },
        {
          title: 'Traffic policy',
          description:
            'Rules controlling how service traffic is routed, secured, or limited.',
        },
      ],
    },

    {
      title: 'API Versioning',
      content:
        'Independent service deployment requires APIs to evolve without unexpectedly breaking consumers. Teams should define compatibility rules and version APIs when breaking changes cannot be avoided.',
      highlights: [
        {
          title: 'API version',
          description:
            'A defined version of an interface contract.',
        },
        {
          title: 'Breaking change',
          description:
            'A change that prevents an existing consumer from functioning correctly.',
        },
        {
          title: 'Compatibility',
          description:
            'The ability of different versions of producers and consumers to work together.',
        },
      ],
    },

    {
      title: 'Deployment Independence',
      content:
        'One of the main benefits of microservices is independent deployment. However, true independence requires compatible contracts, automated testing, CI/CD, observability, rollback mechanisms, and clear ownership.',
      highlights: [
        {
          title: 'Independent release',
          description:
            'Releasing a service without requiring simultaneous release of unrelated services.',
        },
        {
          title: 'Contract testing',
          description:
            'Testing whether service interfaces remain compatible between consumers and providers.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a service to a previously known-good version.',
        },
      ],
    },

    {
      title: 'Contract Testing',
      content:
        'Contract tests validate that a service provider continues to satisfy the expectations of its consumers. They are especially useful when services are developed and deployed independently.',
      highlights: [
        {
          title: 'Consumer contract',
          description:
            'The expectations a consuming service has about a provider interface.',
        },
        {
          title: 'Provider contract',
          description:
            'The interface behavior guaranteed by the service provider.',
        },
        {
          title: 'Contract test',
          description:
            'An automated test verifying compatibility between service consumers and providers.',
        },
      ],
    },

    {
      title: 'Testing Microservices',
      content:
        'Testing should include unit tests, integration tests, contract tests, end-to-end tests, failure tests, and resilience tests. The goal is to validate both individual service behavior and system interactions.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'A test focused on a small unit of application logic.',
        },
        {
          title: 'Integration test',
          description:
            'A test validating interaction between components.',
        },
        {
          title: 'End-to-end test',
          description:
            'A test validating a complete business workflow across system boundaries.',
        },
      ],
    },

    {
      title: 'Microservices Failure Modes',
      content:
        'Typical failure modes include network timeouts, dependency outages, message duplication, message loss, schema incompatibility, database failures, service overload, configuration errors, and cascading failures.',
      highlights: [
        {
          title: 'Dependency outage',
          description:
            'A required downstream service becomes unavailable.',
        },
        {
          title: 'Cascading failure',
          description:
            'One service failure causes dependent services to become unhealthy.',
        },
        {
          title: 'Schema incompatibility',
          description:
            'A service changes an API or event contract in a way that breaks consumers.',
        },
      ],
    },

    {
      title: 'Cascading Failures',
      content:
        'Microservice dependency chains can amplify failures. A slow downstream service can cause request queues to grow, connection pools to exhaust, and upstream services to fail. Timeouts, circuit breakers, bulkheads, load shedding, and asynchronous processing can limit this effect.',
      highlights: [
        {
          title: 'Cascading failure',
          description:
            'A chain reaction where one failure causes failures in dependent components.',
        },
        {
          title: 'Load shedding',
          description:
            'Rejecting lower-priority work to protect critical workloads.',
        },
        {
          title: 'Bulkhead',
          description:
            'Isolating resources to prevent one dependency from consuming all capacity.',
        },
      ],
    },

    {
      title: 'Scaling Microservices',
      content:
        'Microservices allow individual services to scale independently. Scaling decisions should be based on workload characteristics, bottlenecks, resource usage, and business priorities rather than simply increasing every service equally.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adding additional instances of a service.',
        },
        {
          title: 'Vertical scaling',
          description:
            'Increasing resources available to an existing instance.',
        },
        {
          title: 'Bottleneck',
          description:
            'A component limiting overall system performance or capacity.',
        },
      ],
    },

    {
      title: 'Microservices and Kubernetes',
      content:
        'Kubernetes is commonly used to deploy and operate microservices because it provides scheduling, service discovery, health management, scaling, networking, and rollout capabilities. Kubernetes does not automatically solve service-boundary or distributed-data problems.',
      highlights: [
        {
          title: 'Kubernetes',
          description:
            'A platform for orchestrating containerized workloads.',
        },
        {
          title: 'Deployment',
          description:
            'A Kubernetes resource used to manage replicated application workloads.',
        },
        {
          title: 'Service',
          description:
            'A Kubernetes networking abstraction that provides stable access to workloads.',
        },
      ],
    },

    {
      title: 'Microservices and Docker',
      content:
        'Docker packages an application and its runtime dependencies into containers. Containers provide a consistent unit for building, testing, deploying, and operating individual microservices.',
      highlights: [
        {
          title: 'Container',
          description:
            'An isolated runtime environment containing an application and its required dependencies.',
        },
        {
          title: 'Container image',
          description:
            'A packaged filesystem and metadata used to create containers.',
        },
        {
          title: 'Container orchestration',
          description:
            'Managing deployment, scaling, networking, and lifecycle of containers across infrastructure.',
        },
      ],
    },

    {
      title: 'Microservices and CI/CD',
      content:
        'Independent services benefit from automated pipelines that build, test, scan, package, deploy, verify, and roll back services. CI/CD reduces the coordination cost of frequent independent releases.',
      highlights: [
        {
          title: 'Continuous integration',
          description:
            'Frequently integrating code changes with automated validation.',
        },
        {
          title: 'Continuous delivery',
          description:
            'Keeping software in a releasable state through automation.',
        },
        {
          title: 'Deployment pipeline',
          description:
            'An automated sequence that validates and delivers a software version.',
        },
      ],
    },

    {
      title: 'Microservices and Feature Flags',
      content:
        'Feature flags allow teams to deploy code without immediately exposing new behavior to every user. This can reduce release risk and support gradual rollouts across services.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A runtime-controlled switch that determines whether a feature is enabled.',
        },
        {
          title: 'Gradual rollout',
          description:
            'Enabling a new capability progressively for selected users or traffic.',
        },
        {
          title: 'Kill switch',
          description:
            'A flag that allows a problematic feature to be disabled quickly.',
        },
      ],
    },

    {
      title: 'Microservices and Release Strategies',
      content:
        'Blue-green, canary, and rolling deployments can reduce release risk. The correct strategy depends on traffic patterns, compatibility, rollback requirements, infrastructure cost, and operational maturity.',
      highlights: [
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining two environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Releasing a new version to a small percentage of traffic before expanding rollout.',
        },
        {
          title: 'Rolling deployment',
          description:
            'Gradually replacing old service instances with new ones.',
        },
      ],
    },

    {
      title: 'Distributed Configuration',
      content:
        'Microservices require configuration for endpoints, feature settings, credentials, limits, and environment-specific behavior. Configuration should be centrally governed where appropriate and secrets should never be embedded directly into application code.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Runtime settings controlling application behavior.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information such as credentials, tokens, or private keys.',
        },
        {
          title: 'Configuration management',
          description:
            'The process of safely storing, distributing, versioning, and controlling runtime configuration.',
        },
      ],
    },

    {
      title: 'Microservices Governance',
      content:
        'As service count grows, organizations need standards for APIs, events, security, observability, ownership, deployment, documentation, and incident response. Governance should enable consistency without preventing teams from making appropriate local decisions.',
      highlights: [
        {
          title: 'Governance',
          description:
            'Rules and practices used to maintain architectural and operational consistency.',
        },
        {
          title: 'Service ownership',
          description:
            'Clear responsibility for development, operation, reliability, and lifecycle.',
        },
        {
          title: 'Architecture standard',
          description:
            'A reusable rule or guideline for building and operating services.',
        },
      ],
    },

    {
      title: 'When Not to Use Microservices',
      content:
        'Microservices are not automatically the best architecture. A small product, small engineering team, unclear domain, or low operational maturity may benefit more from a modular monolith. Microservices should be introduced when their benefits justify the added complexity.',
      highlights: [
        {
          title: 'Modular monolith',
          description:
            'A single deployable application with clear internal module boundaries.',
        },
        {
          title: 'Operational overhead',
          description:
            'The additional infrastructure, monitoring, deployment, networking, and incident-management work introduced by distributed services.',
        },
        {
          title: 'Premature decomposition',
          description:
            'Splitting an application before business boundaries and requirements are sufficiently understood.',
        },
      ],
    },

    {
      title: 'Microservices vs Monolith',
      content:
        'A monolith provides simpler communication, deployment, testing, and operations. Microservices provide greater independence and selective scaling but introduce network calls, distributed state, service discovery, observability, and deployment coordination challenges.',
      highlights: [
        {
          title: 'Monolith strength',
          description:
            'Lower operational and distributed-system complexity.',
        },
        {
          title: 'Microservices strength',
          description:
            'Independent ownership, scaling, and deployment of business capabilities.',
        },
        {
          title: 'Trade-off',
          description:
            'Microservices exchange local simplicity for distributed independence.',
        },
      ],
    },

    {
      title: 'Migration from Monolith to Microservices',
      content:
        'Migration should normally be incremental rather than a complete rewrite. Teams can identify a bounded capability, extract it behind an interface, route traffic gradually, monitor behavior, and then reduce the old implementation.',
      highlights: [
        {
          title: 'Strangler pattern',
          description:
            'Incrementally replacing parts of an existing system with new services while the old system continues operating.',
        },
        {
          title: 'Incremental migration',
          description:
            'Moving capabilities step by step instead of replacing the entire system at once.',
        },
        {
          title: 'Seam',
          description:
            'A controlled boundary where a capability can be separated from an existing system.',
        },
      ],
    },

    {
      title: 'Microservices for AI Platforms',
      content:
        'AI platforms can use microservices to isolate capabilities such as authentication, model routing, prompt management, retrieval, vector search, inference, billing, analytics, and evaluation. The architecture should avoid splitting services purely by technology and instead align boundaries with meaningful business capabilities.',
      highlights: [
        {
          title: 'Model routing service',
          description:
            'A service responsible for selecting an appropriate AI model or provider for a request.',
        },
        {
          title: 'Retrieval service',
          description:
            'A service responsible for retrieving relevant context for AI workflows.',
        },
        {
          title: 'Evaluation service',
          description:
            'A service responsible for evaluating model or system quality.',
        },
        {
          title: 'Billing service',
          description:
            'A service responsible for usage measurement, pricing rules, and billing workflows.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'An enterprise AI voice platform could separate telephony integration, call orchestration, speech recognition, LLM routing, speech synthesis, CRM integration, analytics, and billing into services where the business boundaries justify separation. The design must protect the real-time call path from slow non-critical operations.',
      highlights: [
        {
          title: 'Real-time path',
          description:
            'The sequence of operations required to maintain a responsive live voice interaction.',
        },
        {
          title: 'Non-critical processing',
          description:
            'Work such as analytics or reporting that can happen asynchronously without delaying the live interaction.',
        },
        {
          title: 'Provider abstraction',
          description:
            'A service boundary that prevents the rest of the platform from depending directly on one external provider.',
        },
      ],
    },

    {
      title: 'Interview Framework',
      content:
        'When discussing microservices in an interview, start with the business requirements and explain why independent services are justified. Then discuss service boundaries, data ownership, communication, consistency, resilience, observability, deployment, security, and migration strategy.',
      highlights: [
        {
          title: 'Requirement first',
          description:
            'Start with business and technical requirements before selecting architecture.',
        },
        {
          title: 'Boundary first',
          description:
            'Explain how services are separated around meaningful business responsibilities.',
        },
        {
          title: 'Trade-offs',
          description:
            'Explain both the benefits and the operational cost of microservices.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: Why microservices? When would you choose a monolith? How do services communicate? How do you handle distributed transactions? How do you prevent cascading failures? How do you manage service discovery? How do you handle data consistency? How do you version APIs? How do you migrate a monolith?',
      highlights: [
        {
          title: 'Why microservices?',
          description:
            'Explain the business and organizational reasons for introducing service independence.',
        },
        {
          title: 'Distributed transactions',
          description:
            'Explain sagas, compensating actions, and why one global transaction may not be appropriate.',
        },
        {
          title: 'Failure handling',
          description:
            'Explain timeouts, retries, circuit breakers, bulkheads, and graceful degradation.',
        },
        {
          title: 'Migration',
          description:
            'Explain incremental extraction rather than a risky full rewrite.',
        },
      ],
    },

    {
      title: 'How to Answer',
      content:
        'A strong leadership-level answer sounds like: “I would not start by splitting the system into services. I would first understand the business domains, team ownership, scaling characteristics, and deployment needs. If independent deployment and scaling provide meaningful value, I would define bounded service boundaries, establish API and data ownership contracts, and introduce resilience and observability before increasing service count.”',
      highlights: [
        {
          title: 'Business-driven architecture',
          description:
            'Architecture decisions should follow actual business and engineering requirements.',
        },
        {
          title: 'Operational readiness',
          description:
            'Microservices require CI/CD, observability, security, and incident-management maturity.',
        },
        {
          title: 'Controlled evolution',
          description:
            'Introduce services incrementally and validate each boundary before expanding decomposition.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include creating too many services, splitting by technical layer instead of business capability, sharing databases, using synchronous calls everywhere, ignoring failure modes, assuming distributed transactions behave like local transactions, and adopting microservices without operational maturity.',
      highlights: [
        {
          title: 'Too many services',
          description:
            'Creating unnecessary service boundaries that increase operational complexity.',
        },
        {
          title: 'Technical decomposition',
          description:
            'Splitting services around layers such as controllers, databases, or frameworks rather than business capabilities.',
        },
        {
          title: 'Shared database',
          description:
            'Allowing many services to directly depend on the same database schema.',
        },
        {
          title: 'Synchronous everywhere',
          description:
            'Creating long chains of synchronous dependencies that increase latency and failure propagation.',
        },
      ],
    },

    {
      title: 'Microservices for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, microservices knowledge is about architecture trade-offs, service ownership, dependency management, delivery risk, reliability, team boundaries, and business outcomes. The leader should know when microservices create value and when they create unnecessary complexity.',
      highlights: [
        {
          title: 'Team topology',
          description:
            'How organizational teams align with service ownership and delivery responsibilities.',
        },
        {
          title: 'Dependency management',
          description:
            'Understanding how service dependencies affect delivery, reliability, and roadmap execution.',
        },
        {
          title: 'Operational maturity',
          description:
            'The ability of an organization to deploy, observe, secure, and operate distributed services reliably.',
        },
        {
          title: 'Architecture governance',
          description:
            'Maintaining useful standards while allowing teams appropriate autonomy.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'distributed-systems',
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
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'helm',
    'github-actions',
    'ci-cd',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'deployment-strategy',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default microservicesKnowledge
