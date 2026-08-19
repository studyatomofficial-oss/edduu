import type { KnowledgeDefinition } from './knowledge'

export const djangoKnowledge: KnowledgeDefinition = {
  technologyId: 'django',
  slug: 'django',
  title: 'What is Django?',
  summary:
    'Django is a batteries-included Python web framework for building secure, maintainable, database-backed web applications and backend services.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Django?',
      content:
        'Django is a high-level Python web framework designed to help teams build robust web applications quickly. It provides built-in capabilities for routing, database access, authentication, administration, forms, security, and application structure.',
    },
    {
      title: 'Why do we use Django?',
      content:
        'Django is useful when a team wants a mature framework with many common web-application capabilities already provided. Instead of building every infrastructure piece from scratch, developers can focus more directly on business functionality.',
      highlights: [
        {
          title: 'Batteries-included',
          description:
            'Provides many common web-development capabilities out of the box.',
        },
        {
          title: 'Python-based',
          description:
            'Uses Python as its primary programming language.',
        },
        {
          title: 'ORM',
          description:
            'Provides an object-relational mapper for working with relational databases through Python models.',
        },
        {
          title: 'Security',
          description:
            'Includes built-in protections and security-oriented defaults for common web risks.',
        },
      ],
    },
    {
      title: 'Django Architecture',
      content:
        'Django follows a structured architecture that separates responsibilities across models, views, templates, URL configuration, forms, middleware, and other application components. Django is often described using the Model-Template-View pattern.',
      highlights: [
        {
          title: 'Model',
          description:
            'Represents application data and its relationship with the database.',
        },
        {
          title: 'View',
          description:
            'Contains request-handling and application logic that determines what response should be returned.',
        },
        {
          title: 'Template',
          description:
            'Defines presentation-oriented HTML and dynamic UI output.',
        },
      ],
    },
    {
      title: 'Django Project vs App',
      content:
        'A Django project represents the overall application configuration, while a Django app is a reusable component that implements a particular domain or feature. A large project can contain multiple apps.',
      highlights: [
        {
          title: 'Project',
          description:
            'The overall Django application configuration and deployment structure.',
        },
        {
          title: 'App',
          description:
            'A modular component responsible for a particular business capability.',
        },
        {
          title: 'Modularity',
          description:
            'Organizing functionality into separate components with clear responsibilities.',
        },
      ],
    },
    {
      title: 'URL Routing',
      content:
        'Django maps incoming HTTP requests to application views through URL configuration. Routes can include static paths, dynamic parameters, namespaces, and nested URL configurations.',
      highlights: [
        {
          title: 'URL pattern',
          description:
            'A rule defining which requests should be handled by a particular view.',
        },
        {
          title: 'Path parameter',
          description:
            'A dynamic value captured from the URL.',
        },
        {
          title: 'URL configuration',
          description:
            'The collection of routing rules used by the application.',
        },
      ],
    },
    {
      title: 'Django Views',
      content:
        'A Django view receives a request and returns a response. Views can be implemented as functions or classes, depending on the application design and desired reuse.',
      highlights: [
        {
          title: 'Request',
          description:
            'Information sent by the client to the Django application.',
        },
        {
          title: 'Response',
          description:
            'Information returned by Django to the client.',
        },
        {
          title: 'Class-based view',
          description:
            'A reusable view implementation based on Python classes.',
        },
      ],
    },
    {
      title: 'Django ORM',
      content:
        'The Django Object-Relational Mapper allows developers to work with database records through Python models and query APIs rather than writing every SQL statement manually.',
      highlights: [
        {
          title: 'ORM',
          description:
            'A layer that maps application objects to relational database structures.',
        },
        {
          title: 'Model',
          description:
            'A Python representation of data that can be persisted in a relational database.',
        },
        {
          title: 'QuerySet',
          description:
            'A Django representation of a database query and its result set.',
        },
      ],
    },
    {
      title: 'Models',
      content:
        'Django models define the structure of application data. Fields represent attributes and relationships can represent associations between entities.',
      highlights: [
        {
          title: 'Field',
          description:
            'A model attribute representing a database column or related data.',
        },
        {
          title: 'Foreign key',
          description:
            'A relationship connecting one database entity to another.',
        },
        {
          title: 'Model relationship',
          description:
            'A defined association between application data entities.',
        },
      ],
    },
    {
      title: 'Migrations',
      content:
        'Django migrations provide a controlled way to evolve database schemas as models change. Migration files describe schema changes that can be applied consistently across environments.',
      highlights: [
        {
          title: 'Migration',
          description:
            'A recorded database schema change generated from model changes.',
        },
        {
          title: 'Schema',
          description:
            'The structure of tables, fields, relationships, and constraints in a database.',
        },
        {
          title: 'Migration history',
          description:
            'The ordered set of schema changes applied to an environment.',
        },
      ],
    },
    {
      title: 'Django Admin',
      content:
        'One of Django’s most distinctive built-in capabilities is the administrative interface. Developers can register models and provide authorized staff users with an interface for managing application data.',
      highlights: [
        {
          title: 'Admin site',
          description:
            'A built-in management interface for authorized users.',
        },
        {
          title: 'Staff user',
          description:
            'A user with permissions to access administrative functionality.',
        },
        {
          title: 'Model registration',
          description:
            'Making a model available through the Django administration interface.',
        },
      ],
    },
    {
      title: 'Authentication',
      content:
        'Django provides built-in authentication capabilities including users, passwords, sessions, groups, and permissions. Applications can extend or integrate these capabilities with external identity providers.',
      highlights: [
        {
          title: 'User',
          description:
            'An identity represented within the Django authentication system.',
        },
        {
          title: 'Session',
          description:
            'Server-managed state associated with an authenticated interaction.',
        },
        {
          title: 'Permission',
          description:
            'A defined capability that can be granted to users or groups.',
        },
      ],
    },
    {
      title: 'Authorization',
      content:
        'Django supports authorization through permissions, groups, and application-specific checks. Sensitive operations should always be enforced on the server side.',
      highlights: [
        {
          title: 'Group',
          description:
            'A collection of users that can share permissions.',
        },
        {
          title: 'Permission check',
          description:
            'A server-side decision determining whether a user can perform an action.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving users and services only the permissions required for their responsibilities.',
        },
      ],
    },
    {
      title: 'Django Middleware',
      content:
        'Middleware provides hooks into Django’s request and response processing pipeline. It can be used for authentication-related processing, security controls, logging, request context, and other cross-cutting concerns.',
      highlights: [
        {
          title: 'Middleware',
          description:
            'Reusable logic that participates in request and response processing.',
        },
        {
          title: 'Request pipeline',
          description:
            'The sequence of processing stages through which a request passes.',
        },
        {
          title: 'Cross-cutting concern',
          description:
            'A responsibility that affects many parts of an application, such as logging or authentication.',
        },
      ],
    },
    {
      title: 'Forms and Validation',
      content:
        'Django provides form abstractions that can handle input parsing, validation, and presentation. Validation is important because external input should always be treated as untrusted.',
      highlights: [
        {
          title: 'Form',
          description:
            'A Django abstraction for processing and validating user input.',
        },
        {
          title: 'Validation',
          description:
            'Checking whether incoming data satisfies expected rules.',
        },
        {
          title: 'Untrusted input',
          description:
            'Data originating outside the trusted application boundary.',
        },
      ],
    },
    {
      title: 'Django REST APIs',
      content:
        'Django can be used to build APIs, commonly with Django REST Framework. API services can expose resources, authentication, serialization, validation, permissions, pagination, filtering, and other backend capabilities.',
      highlights: [
        {
          title: 'Django REST Framework',
          description:
            'A widely used toolkit for building APIs with Django.',
        },
        {
          title: 'Serializer',
          description:
            'A component that converts between application data and API representations while supporting validation.',
        },
        {
          title: 'API endpoint',
          description:
            'A network-accessible operation exposed by a backend service.',
        },
      ],
    },
    {
      title: 'Serialization',
      content:
        'API systems need to convert application objects into representations that clients can consume, such as JSON. Serialization defines how data is represented across the API boundary.',
      highlights: [
        {
          title: 'Serialization',
          description:
            'Converting application data into a transport representation.',
        },
        {
          title: 'Deserialization',
          description:
            'Converting incoming transport data into application-level structures.',
        },
        {
          title: 'JSON',
          description:
            'A commonly used structured data representation for APIs.',
        },
      ],
    },
    {
      title: 'Django and PostgreSQL',
      content:
        'Django works with relational databases through its ORM. PostgreSQL is a common production choice because of its capabilities, reliability, and strong support for complex relational workloads.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'A database organized around tables, relationships, and structured schemas.',
        },
        {
          title: 'PostgreSQL',
          description:
            'An open-source relational database commonly used with Django.',
        },
        {
          title: 'Database connection',
          description:
            'The communication channel through which the application interacts with the database.',
        },
      ],
    },
    {
      title: 'Transactions',
      content:
        'Django supports database transactions so multiple related database operations can be treated as one logical unit. Transactions are important when partial updates would create inconsistent business state.',
      highlights: [
        {
          title: 'Transaction',
          description:
            'A group of database operations treated as a logical unit.',
        },
        {
          title: 'Atomicity',
          description:
            'The property that a transaction’s operations succeed together or are rolled back together.',
        },
        {
          title: 'Consistency',
          description:
            'Maintaining valid application and database rules after a transaction completes.',
        },
      ],
    },
    {
      title: 'Caching',
      content:
        'Django supports multiple caching strategies. Caching can reduce repeated database queries or expensive computation, but cache invalidation and freshness requirements must be designed carefully.',
      highlights: [
        {
          title: 'Cache',
          description:
            'Stored data that can be reused to avoid repeated expensive work.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Determining when stored cached information must be refreshed or removed.',
        },
        {
          title: 'Redis',
          description:
            'An in-memory data platform commonly used for caching, queues, and related workloads.',
        },
      ],
    },
    {
      title: 'Asynchronous Tasks',
      content:
        'Long-running tasks such as email delivery, report generation, file processing, AI jobs, and external integrations should often execute outside the synchronous HTTP request path. Django applications commonly integrate with task queues for this purpose.',
      highlights: [
        {
          title: 'Background task',
          description:
            'Work executed separately from the original web request.',
        },
        {
          title: 'Task queue',
          description:
            'A system that stores work until a worker can process it.',
        },
        {
          title: 'Worker',
          description:
            'A process responsible for executing queued tasks.',
        },
      ],
    },
    {
      title: 'Django and AI Applications',
      content:
        'Django can serve as the application and API layer for AI products. It can manage users, organizations, permissions, databases, files, AI requests, usage tracking, billing data, audit records, and integrations with model providers.',
      highlights: [
        {
          title: 'AI backend',
          description:
            'Backend infrastructure responsible for coordinating AI product functionality.',
        },
        {
          title: 'Usage tracking',
          description:
            'Recording model requests, tokens, latency, costs, or other AI consumption metrics.',
        },
        {
          title: 'Tenant',
          description:
            'A customer or organizational boundary within a multi-tenant application.',
        },
      ],
    },
    {
      title: 'Django and RAG',
      content:
        'Django can provide the application layer around a RAG system. It can manage documents, users, permissions, ingestion jobs, retrieval requests, metadata, and audit records while specialized components handle embeddings and vector search.',
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
          title: 'Vector search',
          description:
            'Searching vector representations to identify semantically relevant information.',
        },
      ],
    },
    {
      title: 'Django and AI Agents',
      content:
        'Django can provide authentication, persistence, APIs, approval workflows, audit trails, and administrative interfaces around AI agent systems. Agent execution itself can be delegated to specialized workers or orchestration services.',
      highlights: [
        {
          title: 'Agent',
          description:
            'An AI-driven system that can reason over tasks and use controlled tools.',
        },
        {
          title: 'Approval workflow',
          description:
            'A process in which important actions require human review before execution.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of important actions and changes for accountability and investigation.',
        },
      ],
    },
    {
      title: 'Security',
      content:
        'Django has strong security-oriented capabilities, but secure application design still requires careful configuration and engineering practices. Important areas include CSRF protection, XSS prevention, SQL injection protection through safe database APIs, secure sessions, authentication, authorization, secret management, and dependency updates.',
      highlights: [
        {
          title: 'CSRF',
          description:
            'A class of attack where a victim’s authenticated browser is tricked into sending an unintended request.',
        },
        {
          title: 'XSS',
          description:
            'A vulnerability where untrusted content can execute unintended scripts in a user’s browser.',
        },
        {
          title: 'SQL injection',
          description:
            'An attack involving unsafe construction of database queries from untrusted input.',
        },
        {
          title: 'Secret management',
          description:
            'Secure handling of credentials and sensitive configuration.',
        },
      ],
    },
    {
      title: 'Django Deployment',
      content:
        'Django applications are commonly deployed behind a reverse proxy or load balancer with application workers and a production database. Static assets, media, background workers, caching, logging, monitoring, and secrets must also be considered.',
      highlights: [
        {
          title: 'Application server',
          description:
            'The runtime layer that executes Django application code.',
        },
        {
          title: 'Reverse proxy',
          description:
            'A server that receives client traffic and forwards requests to backend services.',
        },
        {
          title: 'Load balancer',
          description:
            'A component that distributes traffic across available application instances.',
        },
      ],
    },
    {
      title: 'Scalability',
      content:
        'Django applications can scale horizontally by running multiple application instances behind a load balancer. Database performance, caching, background processing, connection management, and external dependencies often become important scaling considerations.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Adding more application instances to distribute workload.',
        },
        {
          title: 'Database bottleneck',
          description:
            'A database limitation that restricts application throughput or increases latency.',
        },
        {
          title: 'Connection pooling',
          description:
            'Reusing managed database connections instead of repeatedly creating new connections.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production Django services should provide structured logs, metrics, traces, health checks, error monitoring, and request correlation. Observability helps teams understand performance and diagnose incidents.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Records of important application events.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements such as latency, throughput, resource usage, and error rate.',
        },
        {
          title: 'Tracing',
          description:
            'Following a request across services and operations.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism for determining whether a service is sufficiently healthy.',
        },
      ],
    },
    {
      title: 'Testing Django',
      content:
        'Django provides testing capabilities for application logic, models, views, forms, and HTTP behavior. Production systems should combine unit, integration, API, and end-to-end testing according to risk.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small piece of logic in isolation.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interactions between components or dependencies.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete business workflow through the application.',
        },
      ],
    },
    {
      title: 'Django Architecture for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important Django concepts are framework architecture, API design, ORM and database behavior, authentication, authorization, security, background jobs, caching, scalability, observability, deployment, and integration with AI services. The goal is understanding architectural trade-offs rather than memorizing framework syntax.',
    },
    {
      title: 'Common Django Mistakes',
      content:
        'Common mistakes include putting too much business logic into views, inefficient database queries, missing authorization checks, exposing secrets, performing long-running work synchronously, ignoring database indexing, disabling security protections without understanding the consequences, and scaling application servers without addressing database bottlenecks.',
      highlights: [
        {
          title: 'N+1 query problem',
          description:
            'A pattern where one query causes many additional database queries, often creating unnecessary latency.',
        },
        {
          title: 'Synchronous long-running work',
          description:
            'Performing expensive work during an HTTP request instead of moving it to background processing.',
        },
        {
          title: 'Missing authorization',
          description:
            'Allowing authenticated users to access resources without verifying their specific permissions.',
        },
      ],
    },
    {
      title: 'Explore Django in EDDUU',
      content:
        'EDDUU connects Django with Python, REST APIs, databases, PostgreSQL, Redis, authentication, authorization, RBAC, caching, background jobs, AI, RAG, agents, cloud infrastructure, observability, and application architecture.',
    },
  ],
  relatedTechnologyIds: [
    'python',
    'flask',
    'fastapi',
    'rest-apis',
    'authentication',
    'authorization',
    'rbac',
    'redis',
    'rag',
    'agents',
  ],
}

export default djangoKnowledge
