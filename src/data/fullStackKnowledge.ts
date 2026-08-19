import type { KnowledgeDefinition } from './knowledge'

export const fullStackKnowledge: KnowledgeDefinition = {
  technologyId: 'full-stack',
  slug: 'full-stack',
  title: 'What is Full Stack Engineering?',
  summary:
    'Full Stack Engineering covers the design, development, integration, testing, deployment, and operation of applications across the client, server, database, API, infrastructure, and product layers.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Full Stack Engineering?',
      content:
        'Full Stack Engineering means working across the major layers required to build and operate a complete software product. A full-stack application can include a user interface, frontend application logic, backend services, APIs, databases, authentication, integrations, deployment infrastructure, monitoring, and security.',
    },
    {
      title: 'Why do we need Full Stack Engineering?',
      content:
        'A modern product is rarely only a frontend or only a backend. Users interact with interfaces, while backend services process business logic, APIs connect systems, databases store information, and infrastructure runs everything reliably. Understanding the full stack helps engineers and technical leaders understand how a feature travels from a user action all the way through backend processing and data storage.',
    },
    {
      title: 'The Full Stack Layers',
      content:
        'A typical full-stack product can be viewed as a series of connected layers. The frontend handles user interaction, the backend handles business logic, APIs enable communication, databases persist information, infrastructure runs the services, and security and observability protect and operate the system.',
      highlights: [
        {
          title: 'Frontend',
          description:
            'The user-facing application that handles presentation and interaction.',
        },
        {
          title: 'Backend',
          description:
            'The server-side layer responsible for business logic, processing, integrations, and application services.',
        },
        {
          title: 'API',
          description:
            'A defined interface through which applications and services communicate.',
        },
        {
          title: 'Database',
          description:
            'Persistent storage used to maintain application and business data.',
        },
        {
          title: 'Infrastructure',
          description:
            'The compute, networking, storage, and deployment environment that runs the application.',
        },
      ],
    },
    {
      title: 'Frontend Engineering',
      content:
        'Frontend engineering focuses on the browser or client application that users interact with. It includes UI components, state management, routing, forms, API integration, accessibility, responsive design, performance, and error handling.',
      highlights: [
        {
          title: 'UI component',
          description:
            'A reusable piece of the user interface.',
        },
        {
          title: 'State',
          description:
            'Information representing the current condition of the application or interface.',
        },
        {
          title: 'Client-side routing',
          description:
            'Controls navigation between views in a frontend application.',
        },
        {
          title: 'Responsive design',
          description:
            'Designing interfaces that work across different screen sizes and devices.',
        },
      ],
    },
    {
      title: 'Backend Engineering',
      content:
        'Backend engineering handles server-side processing and business logic. Backend services may validate requests, apply business rules, communicate with databases, call external services, authenticate users, and publish events.',
      highlights: [
        {
          title: 'Business logic',
          description:
            'Rules that determine how the application behaves according to business requirements.',
        },
        {
          title: 'Service',
          description:
            'A backend component responsible for a defined capability.',
        },
        {
          title: 'Validation',
          description:
            'Checks whether incoming data satisfies required rules.',
        },
        {
          title: 'Background job',
          description:
            'Work processed asynchronously outside the immediate user request.',
        },
      ],
    },
    {
      title: 'APIs in Full Stack Applications',
      content:
        'APIs connect frontend applications with backend services and allow different systems to communicate. REST, GraphQL, gRPC, and event-driven interfaces are common integration approaches. A well-designed API defines clear contracts, authentication, authorization, error handling, and versioning expectations.',
      highlights: [
        {
          title: 'REST',
          description:
            'An HTTP-based architectural style commonly used for resource-oriented APIs.',
        },
        {
          title: 'GraphQL',
          description:
            'An API query language and runtime that allows clients to request specific data.',
        },
        {
          title: 'gRPC',
          description:
            'A high-performance RPC framework commonly used for service-to-service communication.',
        },
        {
          title: 'API contract',
          description:
            'The agreed structure, behavior, inputs, outputs, and error expectations of an API.',
        },
      ],
    },
    {
      title: 'Databases in Full Stack Applications',
      content:
        'Databases provide persistent storage for application data. Full-stack systems may use relational databases, document databases, caches, search systems, and specialized data stores depending on workload requirements.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'Stores structured data using tables, relationships, and query languages such as SQL.',
        },
        {
          title: 'NoSQL database',
          description:
            'A category of databases designed around models such as documents, key-value data, graphs, or wide columns.',
        },
        {
          title: 'Cache',
          description:
            'Fast temporary storage used to reduce latency and database load.',
        },
        {
          title: 'Data persistence',
          description:
            'The ability to retain application data beyond the lifetime of a process or request.',
        },
      ],
    },
    {
      title: 'Authentication and Authorization',
      content:
        'Full-stack applications need to determine who a user is and what that user is allowed to do. Authentication verifies identity, while authorization determines permissions. Production applications often use sessions, tokens, OAuth 2.0, OIDC, RBAC, MFA, and other security mechanisms.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a user or system.',
        },
        {
          title: 'Authorization',
          description:
            'Determines what an authenticated identity is permitted to access or perform.',
        },
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control assigns permissions through roles.',
        },
        {
          title: 'MFA',
          description:
            'Multi-Factor Authentication requires multiple independent verification factors.',
        },
      ],
    },
    {
      title: 'Frontend to Backend Request Flow',
      content:
        'A typical full-stack request starts when a user interacts with the frontend. The frontend sends an HTTP request to an API. The backend authenticates and validates the request, applies business logic, accesses required data or services, and returns a response. The frontend then updates the user interface.',
      highlights: [
        {
          title: 'User action',
          description:
            'An interaction such as clicking a button or submitting a form.',
        },
        {
          title: 'HTTP request',
          description:
            'A network request sent from the client to a server.',
        },
        {
          title: 'Backend processing',
          description:
            'Server-side validation, business logic, data access, and integration work.',
        },
        {
          title: 'HTTP response',
          description:
            'The result returned by the backend to the client.',
        },
      ],
    },
    {
      title: 'Full Stack Error Handling',
      content:
        'Errors can occur at every layer of a full-stack application. The frontend should present useful user-facing messages, APIs should return consistent error responses, backend services should log failures, and infrastructure should provide monitoring and alerting. Sensitive implementation details should not be exposed to users.',
      highlights: [
        {
          title: 'Client error',
          description:
            'An error caused by invalid input, unavailable resources, or frontend behavior.',
        },
        {
          title: 'Server error',
          description:
            'A failure while processing a request on the backend.',
        },
        {
          title: 'Structured error',
          description:
            'An error response with predictable fields and semantics.',
        },
        {
          title: 'Error observability',
          description:
            'The ability to detect, investigate, and correlate failures across system layers.',
        },
      ],
    },
    {
      title: 'Full Stack Performance',
      content:
        'Application performance depends on the entire request path. Frontend rendering, network latency, API processing, database queries, external integrations, caching, and infrastructure can all contribute to user-perceived latency.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required for an operation or request to complete.',
        },
        {
          title: 'Caching',
          description:
            'Stores frequently used data closer to the consumer to reduce processing and network cost.',
        },
        {
          title: 'Database optimization',
          description:
            'Improves query and storage performance through appropriate schema, indexing, queries, and capacity planning.',
        },
        {
          title: 'Performance budget',
          description:
            'A defined target for acceptable performance characteristics such as page load or API latency.',
        },
      ],
    },
    {
      title: 'Full Stack Scalability',
      content:
        'A full-stack system should be designed so that individual layers can scale according to demand. Frontends may use CDNs, backend services can scale horizontally, databases can use replication or partitioning where appropriate, and asynchronous workers can process background workloads.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adds more instances of a service to handle increased load.',
        },
        {
          title: 'Vertical scaling',
          description:
            'Adds more CPU, memory, or other resources to an existing instance.',
        },
        {
          title: 'Load balancer',
          description:
            'Distributes incoming traffic across multiple service instances.',
        },
        {
          title: 'CDN',
          description:
            'Distributes static or cacheable content closer to users.',
        },
      ],
    },
    {
      title: 'Full Stack and Cloud',
      content:
        'Modern full-stack applications commonly run on cloud infrastructure. Frontend assets may be served through a CDN or static hosting platform, backend services may run on containers or virtual machines, and managed databases and cloud services provide persistence and integrations.',
      highlights: [
        {
          title: 'Compute',
          description:
            'Infrastructure resources used to execute application workloads.',
        },
        {
          title: 'Object storage',
          description:
            'Cloud storage for files and unstructured objects.',
        },
        {
          title: 'Managed database',
          description:
            'A database service where infrastructure operations are handled by a cloud provider.',
        },
        {
          title: 'Deployment',
          description:
            'The process of releasing application code into an environment where it can run.',
        },
      ],
    },
    {
      title: 'Full Stack and DevOps',
      content:
        'Full-stack development increasingly overlaps with DevOps practices. Engineers may work with Git, CI/CD, containers, infrastructure configuration, environment variables, deployment pipelines, logs, monitoring, and automated testing.',
      highlights: [
        {
          title: 'Git',
          description:
            'A version control system used to track source-code changes.',
        },
        {
          title: 'CI/CD',
          description:
            'Automated processes for building, testing, and delivering software.',
        },
        {
          title: 'Container',
          description:
            'A packaged application environment containing the application and its required runtime dependencies.',
        },
        {
          title: 'Environment',
          description:
            'A deployment context such as development, staging, or production.',
        },
      ],
    },
    {
      title: 'Testing Full Stack Applications',
      content:
        'Testing should cover individual components as well as interactions across the stack. Unit tests validate focused logic, integration tests validate interactions between components, API tests validate service contracts, and end-to-end tests validate complete user workflows.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small isolated piece of application logic.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interactions between multiple components or services.',
        },
        {
          title: 'API test',
          description:
            'Validates API behavior, contracts, responses, and error conditions.',
        },
        {
          title: 'End-to-end test',
          description:
            'Validates a complete workflow from the user interface through backend processing.',
        },
      ],
    },
    {
      title: 'Full Stack Observability',
      content:
        'Observability allows teams to understand what is happening inside a production system. Logs, metrics, traces, error tracking, and correlation identifiers help engineers investigate issues across frontend, APIs, services, databases, and infrastructure.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Recorded application or infrastructure events used for diagnosis and auditing.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements such as request rate, latency, CPU usage, and error rate.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Tracks a request as it travels through multiple services.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to connect related operations across system components.',
        },
      ],
    },
    {
      title: 'Full Stack and AI Applications',
      content:
        'AI products are also full-stack systems. An AI application can include a frontend chat or workflow interface, backend APIs, authentication, model providers, vector databases, RAG pipelines, agent orchestration, asynchronous workers, observability, and cloud infrastructure.',
      highlights: [
        {
          title: 'AI frontend',
          description:
            'The user-facing interface through which users interact with AI capabilities.',
        },
        {
          title: 'AI backend',
          description:
            'Services that coordinate models, prompts, tools, data, security, and business logic.',
        },
        {
          title: 'RAG pipeline',
          description:
            'A workflow that retrieves relevant information and supplies it to a model to improve grounded generation.',
        },
        {
          title: 'Agent backend',
          description:
            'Services responsible for orchestrating AI agents, tools, state, and external actions.',
        },
      ],
    },
    {
      title: 'Full Stack Architecture Example',
      content:
        'A production application might use React for the frontend, FastAPI or Node.js for backend APIs, PostgreSQL for transactional data, Redis for caching, object storage for files, an event broker for asynchronous workflows, cloud infrastructure for deployment, and monitoring for observability. The exact stack should be selected according to product requirements rather than technology preference alone.',
    },
    {
      title: 'Common Full Stack Mistakes',
      content:
        'Common mistakes include tightly coupling frontend and backend implementation details, putting business logic directly into UI components, exposing database details through APIs, storing secrets in source code, ignoring validation, failing to handle errors consistently, skipping automated tests, and scaling individual components without understanding the real bottleneck.',
      highlights: [
        {
          title: 'Tight coupling',
          description:
            'Creates unnecessary dependencies between application layers.',
        },
        {
          title: 'Secrets in source code',
          description:
            'Exposes credentials or sensitive configuration through application code.',
        },
        {
          title: 'Missing validation',
          description:
            'Allows invalid or unsafe data to reach business logic or persistence layers.',
        },
        {
          title: 'No observability',
          description:
            'Makes production failures difficult to detect and investigate.',
        },
        {
          title: 'Premature scaling',
          description:
            'Adds infrastructure complexity before identifying the actual performance bottleneck.',
        },
      ],
    },
    {
      title: 'Explore Full Stack Engineering in EDDUU',
      content:
        'EDDUU connects Full Stack Engineering with Python, FastAPI, JavaScript, TypeScript, React, Node.js, Express.js, Next.js, Django, Flask, Spring Boot, .NET, Go, Rust, APIs, Databases, Cloud, Security, DevOps, Observability, and AI Engineering.',
    },
  ],
  relatedTechnologyIds: [
    'python',
    'fastapi',
    'javascript',
    'typescript',
    'react',
    'nodejs',
    'expressjs',
    'nextjs',
    'django',
    'flask',
    'spring-boot',
    'dotnet',
    'go',
    'rust',
  ],
}

export default fullStackKnowledge
