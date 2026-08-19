import type { KnowledgeDefinition } from './knowledge'

export const dotnetKnowledge: KnowledgeDefinition = {
  technologyId: 'dotnet',
  slug: 'dotnet',
  title: 'What is .NET?',
  summary:
    '.NET is Microsoft’s cross-platform development platform for building modern web applications, APIs, services, desktop applications, cloud workloads, and enterprise systems.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is .NET?',
      content:
        '.NET is a cross-platform software development platform from Microsoft. It provides runtimes, libraries, languages, tooling, and frameworks for building applications across web, cloud, desktop, services, data, and other workloads.',
    },
    {
      title: 'Why do we use .NET?',
      content:
        '.NET is widely used for enterprise and cloud applications because it provides strong performance, mature tooling, extensive libraries, security capabilities, and a large ecosystem. It supports applications running on Windows, Linux, and macOS.',
      highlights: [
        {
          title: 'Cross-platform',
          description:
            'Modern .NET applications can run across multiple operating systems.',
        },
        {
          title: 'Enterprise',
          description:
            'Widely used for large business applications and backend services.',
        },
        {
          title: 'Cloud-ready',
          description:
            'Provides strong support for APIs, containers, microservices, and cloud deployments.',
        },
        {
          title: 'High performance',
          description:
            'Designed to support efficient execution for modern application workloads.',
        },
      ],
    },
    {
      title: '.NET vs .NET Framework',
      content:
        'Modern .NET is the cross-platform successor to the original .NET Framework. .NET Framework remains important for legacy Windows applications, while modern .NET is the preferred platform for new cross-platform applications.',
      highlights: [
        {
          title: 'Modern .NET',
          description:
            'Cross-platform platform for modern application development.',
        },
        {
          title: '.NET Framework',
          description:
            'The older Windows-focused .NET platform used by many legacy applications.',
        },
        {
          title: 'Migration',
          description:
            'The process of moving an application from an older platform toward modern .NET.',
        },
      ],
    },
    {
      title: 'C# and .NET',
      content:
        'C# is the primary language associated with .NET, although .NET supports multiple languages. The .NET runtime executes compiled application code and provides common services such as memory management and type safety.',
      highlights: [
        {
          title: 'C#',
          description:
            'A modern, strongly typed programming language widely used for .NET development.',
        },
        {
          title: 'Runtime',
          description:
            'The execution environment responsible for running compiled .NET applications.',
        },
        {
          title: 'Type safety',
          description:
            'Language and runtime mechanisms that help prevent invalid operations on incompatible data types.',
        },
      ],
    },
    {
      title: 'CLR and Runtime',
      content:
        'The Common Language Runtime, or CLR, is the execution environment associated with .NET. It manages important runtime responsibilities such as memory management, garbage collection, exception handling, and execution of managed code.',
      highlights: [
        {
          title: 'CLR',
          description:
            'The Common Language Runtime that executes managed .NET code.',
        },
        {
          title: 'Garbage collection',
          description:
            'Automatic management of memory that is no longer needed by application objects.',
        },
        {
          title: 'Managed code',
          description:
            'Application code executed under the control of the .NET runtime.',
        },
      ],
    },
    {
      title: 'ASP.NET Core',
      content:
        'ASP.NET Core is the web framework within the modern .NET ecosystem. It is used to build web applications, REST APIs, backend services, real-time applications, and other HTTP-based workloads.',
      highlights: [
        {
          title: 'ASP.NET Core',
          description:
            'The modern cross-platform web framework for .NET.',
        },
        {
          title: 'Web API',
          description:
            'A backend interface exposed through HTTP.',
        },
        {
          title: 'Middleware',
          description:
            'Reusable components that participate in HTTP request and response processing.',
        },
      ],
    },
    {
      title: 'Middleware Pipeline',
      content:
        'ASP.NET Core processes HTTP requests through a middleware pipeline. Each middleware component can inspect or modify the request and response, perform cross-cutting logic, or pass control to the next component.',
      highlights: [
        {
          title: 'Middleware',
          description:
            'A component participating in HTTP request and response processing.',
        },
        {
          title: 'Pipeline',
          description:
            'The ordered sequence of middleware components through which a request passes.',
        },
        {
          title: 'Cross-cutting concern',
          description:
            'A responsibility affecting many parts of an application, such as logging or authentication.',
        },
      ],
    },
    {
      title: 'Dependency Injection',
      content:
        'Dependency Injection is a core architectural pattern in modern .NET applications. Services can be registered with the dependency-injection container and provided automatically to components that need them.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A component required by another component to perform its work.',
        },
        {
          title: 'Dependency Injection',
          description:
            'Providing dependencies to a component rather than requiring it to construct them directly.',
        },
        {
          title: 'Service container',
          description:
            'The runtime-managed collection responsible for creating and resolving registered services.',
        },
      ],
    },
    {
      title: 'REST APIs',
      content:
        'ASP.NET Core is widely used to build REST APIs. Controllers or minimal API endpoints can expose resources while application services implement business logic and data-access components communicate with databases.',
      highlights: [
        {
          title: 'Endpoint',
          description:
            'A network-accessible API operation.',
        },
        {
          title: 'Controller',
          description:
            'A component that handles HTTP requests and maps them to application operations.',
        },
        {
          title: 'Minimal API',
          description:
            'A lightweight approach for defining HTTP endpoints with less framework ceremony.',
        },
      ],
    },
    {
      title: 'Request and Response',
      content:
        'A .NET web application receives HTTP requests containing methods, URLs, headers, parameters, and potentially a body. It returns responses containing status codes, headers, and application data.',
      highlights: [
        {
          title: 'HTTP method',
          description:
            'The operation semantics associated with an HTTP request.',
        },
        {
          title: 'Status code',
          description:
            'A numeric result describing the outcome of the request.',
        },
        {
          title: 'JSON',
          description:
            'A common structured data representation for API requests and responses.',
        },
      ],
    },
    {
      title: 'Model Binding',
      content:
        'ASP.NET Core can map incoming HTTP data into strongly typed C# objects. This simplifies request handling while allowing validation rules to be applied to incoming data.',
      highlights: [
        {
          title: 'Model binding',
          description:
            'Mapping incoming request data into application objects.',
        },
        {
          title: 'DTO',
          description:
            'A Data Transfer Object used to define data crossing an application boundary.',
        },
        {
          title: 'Validation',
          description:
            'Checking whether incoming data satisfies required constraints.',
        },
      ],
    },
    {
      title: 'Entity Framework Core',
      content:
        'Entity Framework Core, commonly called EF Core, is Microsoft’s modern object-relational mapper for .NET. It allows developers to work with relational databases using C# objects and LINQ queries.',
      highlights: [
        {
          title: 'EF Core',
          description:
            'An object-relational mapper for modern .NET applications.',
        },
        {
          title: 'ORM',
          description:
            'A layer that maps application objects to relational database structures.',
        },
        {
          title: 'LINQ',
          description:
            'A language-integrated query capability used to query collections and data sources.',
        },
      ],
    },
    {
      title: 'Database and PostgreSQL',
      content:
        '.NET applications can work with many relational databases, including SQL Server and PostgreSQL. Production systems should consider schema design, indexes, transactions, connection management, migrations, backups, and monitoring.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'A database organized around tables, relationships, and structured schemas.',
        },
        {
          title: 'PostgreSQL',
          description:
            'An open-source relational database commonly used with modern .NET systems.',
        },
        {
          title: 'Index',
          description:
            'A database structure that can accelerate selected queries.',
        },
      ],
    },
    {
      title: 'Transactions',
      content:
        '.NET data-access frameworks support database transactions so related operations can be treated as a single logical unit. Transactions are important when partial updates could create inconsistent business state.',
      highlights: [
        {
          title: 'Transaction',
          description:
            'A group of database operations treated as one logical unit.',
        },
        {
          title: 'Atomicity',
          description:
            'Related operations succeed together or are rolled back together.',
        },
        {
          title: 'Rollback',
          description:
            'Reversing changes when a transaction cannot complete successfully.',
        },
      ],
    },
    {
      title: 'Authentication',
      content:
        '.NET applications can implement authentication using cookies, tokens, OAuth 2.0, OpenID Connect, external identity providers, and enterprise identity systems.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Establishing the identity of a caller.',
        },
        {
          title: 'OAuth 2.0',
          description:
            'A framework for delegated authorization and token-based access.',
        },
        {
          title: 'OpenID Connect',
          description:
            'An identity layer built on OAuth 2.0 for authentication.',
        },
      ],
    },
    {
      title: 'Authorization',
      content:
        'Authorization determines whether an authenticated caller can perform a particular action. ASP.NET Core supports policy-based authorization, role-based authorization, claims, and custom authorization requirements.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control assigns permissions through roles.',
        },
        {
          title: 'Claims',
          description:
            'Statements about a user or caller that can be used in authorization decisions.',
        },
        {
          title: 'Policy',
          description:
            'A defined set of requirements that must be satisfied for access to be granted.',
        },
      ],
    },
    {
      title: 'Configuration and Secrets',
      content:
        '.NET applications support configuration from multiple sources such as environment variables, configuration files, and secret stores. Production secrets should never be hard-coded into source code.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Settings that control application behavior.',
        },
        {
          title: 'Environment variable',
          description:
            'Runtime-provided configuration value.',
        },
        {
          title: 'Secret store',
          description:
            'A protected system used to store sensitive credentials and configuration.',
        },
      ],
    },
    {
      title: 'Caching',
      content:
        '.NET applications can use in-memory or distributed caching to reduce repeated expensive operations. Redis is commonly used when cached data needs to be shared across multiple application instances.',
      highlights: [
        {
          title: 'In-memory cache',
          description:
            'Cached data stored within an application instance.',
        },
        {
          title: 'Distributed cache',
          description:
            'A cache shared across multiple application instances.',
        },
        {
          title: 'Redis',
          description:
            'An in-memory data platform commonly used for distributed caching.',
        },
      ],
    },
    {
      title: 'Background Processing',
      content:
        'Long-running operations such as report generation, document processing, notifications, and AI workloads should often execute outside the synchronous HTTP request path. .NET applications can integrate with queues, hosted services, and background workers.',
      highlights: [
        {
          title: 'Background worker',
          description:
            'A process that executes work independently from an HTTP request.',
        },
        {
          title: 'Queue',
          description:
            'A system that stores work until it can be processed.',
        },
        {
          title: 'Hosted service',
          description:
            'A background process managed as part of a .NET application.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture',
      content:
        '.NET applications can integrate with Kafka, RabbitMQ, Azure Service Bus, and other messaging platforms. Event-driven architecture helps decouple services and supports asynchronous processing.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record that something meaningful happened in a system.',
        },
        {
          title: 'Message broker',
          description:
            'Infrastructure that receives, stores, and delivers messages between services.',
        },
        {
          title: 'Consumer',
          description:
            'A component that receives and processes messages or events.',
        },
      ],
    },
    {
      title: 'Kafka Integration',
      content:
        '.NET services can use Kafka for high-throughput event streaming and asynchronous communication. Production designs should account for partitions, consumer groups, ordering, retries, duplicate processing, and failure handling.',
      highlights: [
        {
          title: 'Kafka',
          description:
            'A distributed event-streaming platform.',
        },
        {
          title: 'Partition',
          description:
            'A unit of ordered storage and parallelism within a Kafka topic.',
        },
        {
          title: 'Consumer group',
          description:
            'A set of consumers cooperating to process Kafka partitions.',
        },
      ],
    },
    {
      title: 'Microservices',
      content:
        '.NET is commonly used to build microservices. Each service can own a business capability, expose APIs, consume events, and have an independent deployment lifecycle. Microservices should be adopted when the benefits justify the additional distributed-system complexity.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'A separately deployable service responsible for a defined business capability.',
        },
        {
          title: 'Service boundary',
          description:
            'A boundary defining what a service owns and exposes.',
        },
        {
          title: 'Distributed system',
          description:
            'A system whose components execute across multiple processes or machines.',
        },
      ],
    },
    {
      title: 'Resilience',
      content:
        'Production .NET services must handle dependency failures, timeouts, retries, rate limits, circuit breaking, and partial outages. Resilience patterns reduce cascading failures and improve service reliability.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A maximum period for waiting on an operation.',
        },
        {
          title: 'Retry',
          description:
            'Repeating an operation when the failure is temporary and retrying is safe.',
        },
        {
          title: 'Circuit breaker',
          description:
            'Temporarily stopping calls to a failing dependency to reduce cascading failures.',
        },
      ],
    },
    {
      title: '.NET and AI Applications',
      content:
        '.NET can serve as an enterprise backend for AI applications. It can manage authentication, APIs, business workflows, model-provider integrations, usage tracking, audit records, data access, and orchestration around AI capabilities.',
      highlights: [
        {
          title: 'AI backend',
          description:
            'Backend infrastructure that coordinates AI product functionality.',
        },
        {
          title: 'Model provider',
          description:
            'An internal or external service providing an AI model.',
        },
        {
          title: 'Usage tracking',
          description:
            'Recording AI requests, latency, tokens, costs, and other consumption metrics.',
        },
      ],
    },
    {
      title: '.NET and RAG',
      content:
        '.NET can provide the application and API layer around RAG systems. It can manage users, documents, permissions, ingestion workflows, retrieval requests, metadata, and model-provider integrations while specialized systems handle vector search.',
      highlights: [
        {
          title: 'RAG',
          description:
            'Retrieval-Augmented Generation combines information retrieval with language-model generation.',
        },
        {
          title: 'Document ingestion',
          description:
            'The process of importing and preparing documents for retrieval.',
        },
        {
          title: 'Vector database',
          description:
            'A database optimized for storing and searching vector representations.',
        },
      ],
    },
    {
      title: '.NET and AI Agents',
      content:
        '.NET can provide APIs, identity, persistence, workflow, governance, and integration infrastructure around AI agent systems. Agent execution can be handled by dedicated orchestration services while .NET manages enterprise controls.',
      highlights: [
        {
          title: 'Agent',
          description:
            'An AI-driven system capable of reasoning over tasks and using controlled tools.',
        },
        {
          title: 'Tool',
          description:
            'A controlled capability an agent can invoke.',
        },
        {
          title: 'Governance',
          description:
            'Policies and controls used to manage how AI systems operate.',
        },
      ],
    },
    {
      title: 'Real-Time Applications',
      content:
        'ASP.NET Core supports real-time communication through technologies such as SignalR. This is useful for dashboards, notifications, collaboration systems, live operational views, and streaming status updates.',
      highlights: [
        {
          title: 'SignalR',
          description:
            'A framework for adding real-time communication capabilities to .NET applications.',
        },
        {
          title: 'Real-time',
          description:
            'Communication where updates can be delivered as events occur.',
        },
        {
          title: 'Connection',
          description:
            'A communication channel between a client and the server.',
        },
      ],
    },
    {
      title: 'API Gateway and Services',
      content:
        '.NET services can operate behind an API gateway or reverse proxy. The gateway can provide centralized routing, authentication integration, rate limiting, observability, and traffic-management capabilities while services focus on business functionality.',
      highlights: [
        {
          title: 'API Gateway',
          description:
            'A service that provides a controlled entry point into backend APIs.',
        },
        {
          title: 'Reverse proxy',
          description:
            'A server that receives traffic and forwards it to backend services.',
        },
        {
          title: 'Traffic management',
          description:
            'Controlling how requests are routed, limited, balanced, or protected.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production .NET systems should provide structured logs, metrics, distributed traces, health checks, request correlation, and error monitoring. Observability becomes particularly important in microservices and AI workloads.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements such as latency, throughput, CPU usage, and error rate.',
        },
        {
          title: 'Tracing',
          description:
            'Following a request across multiple services and operations.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism for determining whether a service is healthy enough to receive traffic.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to connect logs and events belonging to the same request or workflow.',
        },
      ],
    },
    {
      title: 'Testing .NET Applications',
      content:
        '.NET applications should use multiple levels of testing. Unit tests validate isolated logic, integration tests verify interactions with infrastructure, API tests validate contracts, and end-to-end tests validate complete business workflows.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small piece of logic in isolation.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interaction between components and dependencies.',
        },
        {
          title: 'Contract test',
          description:
            'Verifies that service interactions conform to agreed contracts.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete business workflow through the system.',
        },
      ],
    },
    {
      title: 'Deployment',
      content:
        'Modern .NET applications can be deployed as containers, virtual-machine workloads, Kubernetes services, serverless workloads, or managed cloud applications. Production deployments should include configuration management, health checks, observability, scaling, security, and rollback capabilities.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged runtime environment containing an application and its dependencies.',
        },
        {
          title: 'Kubernetes',
          description:
            'A platform for orchestrating containerized workloads.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a deployment to a previous known-good version.',
        },
      ],
    },
    {
      title: 'Performance and Scalability',
      content:
        '.NET services can scale horizontally behind load balancers. Performance engineering should consider application code, memory allocation, database queries, connection pools, external dependencies, caching, network latency, and asynchronous processing.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Running multiple application instances to distribute workload.',
        },
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable connections to a dependency such as a database.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work a system can process during a given period.',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      content:
        'Production .NET applications should use strong authentication and authorization, secure transport, input validation, secret management, dependency security, secure configuration, rate limiting where appropriate, audit logging, and least-privilege access.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required for a task.',
        },
        {
          title: 'Secret management',
          description:
            'Secure storage and controlled access to credentials.',
        },
        {
          title: 'Audit logging',
          description:
            'Recording important actions for accountability and investigation.',
        },
      ],
    },
    {
      title: '.NET Architecture for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important .NET concepts are API architecture, dependency injection, service boundaries, database access, security, event-driven systems, microservices, resilience, observability, cloud deployment, and AI integration. The goal is architectural decision-making rather than memorizing C# syntax.',
    },
    {
      title: 'Common .NET Mistakes',
      content:
        'Common mistakes include creating overly large services, putting business logic in controllers, inefficient database access, missing authorization, exposing secrets, ignoring downstream failures, overusing microservices, and scaling application instances without addressing database or external-service bottlenecks.',
      highlights: [
        {
          title: 'God service',
          description:
            'A service that accumulates too many unrelated responsibilities.',
        },
        {
          title: 'N+1 queries',
          description:
            'A database access pattern that creates unnecessary additional queries.',
        },
        {
          title: 'Microservice overuse',
          description:
            'Splitting systems into services without sufficient business or scaling justification.',
        },
      ],
    },
    {
      title: 'Explore .NET in EDDUU',
      content:
        'EDDUU connects .NET with C#, REST APIs, authentication, authorization, RBAC, databases, Redis, Kafka, RabbitMQ, microservices, real-time systems, cloud infrastructure, observability, AI, RAG, agents, and distributed systems.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'authentication',
    'authorization',
    'rbac',
    'redis',
    'kafka',
    'rabbitmq',
    'rag',
    'agents',
  ],
}

export default dotnetKnowledge
