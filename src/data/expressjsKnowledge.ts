import type { KnowledgeDefinition } from './knowledge'

export const expressjsKnowledge: KnowledgeDefinition = {
  technologyId: 'expressjs',
  slug: 'expressjs',
  title: 'What is Express.js?',
  summary:
    'Express.js is a lightweight Node.js web framework used to build HTTP servers, REST APIs, middleware pipelines, integrations, and backend services.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Express.js?',
      content:
        'Express.js is a lightweight web framework for Node.js. It provides convenient abstractions for routing, middleware, HTTP request handling, and response handling, making it easier to build web applications and APIs.',
    },
    {
      title: 'Why do we use Express.js?',
      content:
        'Node.js provides low-level networking capabilities, while Express.js provides a simpler application structure around common HTTP server patterns. Teams use Express.js to build APIs, backend services, web applications, and integrations quickly.',
      highlights: [
        {
          title: 'Lightweight',
          description:
            'Provides a relatively small set of core abstractions without forcing a large application architecture.',
        },
        {
          title: 'Routing',
          description:
            'Makes it easy to map HTTP methods and URL patterns to application handlers.',
        },
        {
          title: 'Middleware',
          description:
            'Allows reusable request-processing logic to be composed into a pipeline.',
        },
        {
          title: 'Node.js ecosystem',
          description:
            'Can use the large ecosystem of Node.js and npm packages.',
        },
      ],
    },
    {
      title: 'Express.js and Node.js',
      content:
        'Node.js is the runtime. Express.js is a framework that runs on Node.js and provides higher-level abstractions for building HTTP applications. Express does not replace Node.js; it builds on top of it.',
      highlights: [
        {
          title: 'Node.js',
          description:
            'The JavaScript runtime that executes the backend application.',
        },
        {
          title: 'Express.js',
          description:
            'A web framework that simplifies HTTP application development on Node.js.',
        },
        {
          title: 'Framework',
          description:
            'A software structure that provides reusable capabilities and conventions for building applications.',
        },
      ],
    },
    {
      title: 'HTTP Request and Response',
      content:
        'An Express application receives HTTP requests and produces HTTP responses. A request typically contains a method, URL, headers, parameters, query data, and possibly a body. A response contains a status code, headers, and optional response data.',
      highlights: [
        {
          title: 'Request',
          description:
            'Information sent by a client to ask the server to perform an operation or return data.',
        },
        {
          title: 'Response',
          description:
            'Information returned by the server to the client.',
        },
        {
          title: 'Status code',
          description:
            'A numeric HTTP result indicating the outcome of a request.',
        },
      ],
    },
    {
      title: 'Routing',
      content:
        'Routing defines how an Express application responds to requests for particular HTTP methods and URL patterns. Routes typically connect incoming requests to controller or handler functions.',
      highlights: [
        {
          title: 'GET',
          description:
            'Commonly used to retrieve a resource.',
        },
        {
          title: 'POST',
          description:
            'Commonly used to create a resource or initiate an operation.',
        },
        {
          title: 'PUT',
          description:
            'Commonly used to replace or update a resource.',
        },
        {
          title: 'DELETE',
          description:
            'Commonly used to remove a resource.',
        },
      ],
    },
    {
      title: 'Route Parameters',
      content:
        'Route parameters allow an application to capture values from the URL path. They are useful for identifying resources such as users, orders, projects, or documents.',
      highlights: [
        {
          title: 'Path parameter',
          description:
            'A dynamic value embedded in the URL path.',
        },
        {
          title: 'Resource identifier',
          description:
            'A value used to identify a specific resource.',
        },
      ],
    },
    {
      title: 'Query Parameters',
      content:
        'Query parameters are values provided after the question mark in a URL. They are commonly used for filtering, searching, sorting, pagination, and optional request behavior.',
      highlights: [
        {
          title: 'Query parameter',
          description:
            'Optional request data supplied through the URL query string.',
        },
        {
          title: 'Filtering',
          description:
            'Restricting returned data according to specified criteria.',
        },
        {
          title: 'Pagination',
          description:
            'Splitting a large result set into smaller pages.',
        },
      ],
    },
    {
      title: 'Request Body',
      content:
        'The request body carries data sent by a client, commonly in POST, PUT, or PATCH requests. Express applications use middleware to parse formats such as JSON before application logic processes the data.',
      highlights: [
        {
          title: 'JSON body',
          description:
            'Structured JSON data sent in an HTTP request body.',
        },
        {
          title: 'Body parser',
          description:
            'Middleware that interprets incoming request body data.',
        },
        {
          title: 'Input validation',
          description:
            'Checking whether request data has the expected structure and values.',
        },
      ],
    },
    {
      title: 'Middleware',
      content:
        'Middleware is one of Express.js’s most important concepts. Middleware functions participate in request processing and can inspect or modify the request and response, terminate the request, or pass control to the next middleware.',
      highlights: [
        {
          title: 'Middleware',
          description:
            'Reusable request-processing logic that participates in the HTTP pipeline.',
        },
        {
          title: 'next()',
          description:
            'The mechanism commonly used to pass control to the next middleware or route handler.',
        },
        {
          title: 'Pipeline',
          description:
            'A sequence of processing stages through which a request travels.',
        },
      ],
    },
    {
      title: 'Middleware Types',
      content:
        'Express applications can use application-level middleware, router-level middleware, error-handling middleware, and middleware supplied by third-party packages.',
      highlights: [
        {
          title: 'Application middleware',
          description:
            'Middleware registered for the broader Express application.',
        },
        {
          title: 'Router middleware',
          description:
            'Middleware associated with a specific Express router.',
        },
        {
          title: 'Error middleware',
          description:
            'Middleware specifically designed to process errors.',
        },
      ],
    },
    {
      title: 'Error Handling',
      content:
        'Production Express applications should have centralized error-handling strategies. Errors from synchronous and asynchronous operations should be propagated consistently so the application can return appropriate responses and record useful diagnostic information.',
      highlights: [
        {
          title: 'Centralized error handling',
          description:
            'A consistent application-level strategy for processing errors.',
        },
        {
          title: 'Error response',
          description:
            'A controlled HTTP response returned when an operation fails.',
        },
        {
          title: 'Operational error',
          description:
            'A failure that can occur during normal operation, such as a dependency timeout or invalid request.',
        },
      ],
    },
    {
      title: 'REST API Design',
      content:
        'Express.js is commonly used to build REST APIs. A well-designed API should have clear resource boundaries, consistent HTTP methods, meaningful status codes, predictable response formats, validation, authentication, authorization, and versioning where required.',
      highlights: [
        {
          title: 'Resource',
          description:
            'A business object or entity exposed through an API.',
        },
        {
          title: 'HTTP method',
          description:
            'The operation semantics associated with an HTTP request.',
        },
        {
          title: 'API versioning',
          description:
            'A strategy for evolving an API while managing compatibility with existing clients.',
        },
      ],
    },
    {
      title: 'Controllers and Services',
      content:
        'Production Express applications often separate HTTP-specific handling from business logic. Controllers deal with requests and responses, while service layers implement reusable business operations.',
      highlights: [
        {
          title: 'Controller',
          description:
            'Handles the HTTP interaction and translates requests into application operations.',
        },
        {
          title: 'Service',
          description:
            'Contains reusable business logic independent of HTTP details.',
        },
        {
          title: 'Separation of concerns',
          description:
            'Keeping different responsibilities in clearly defined parts of the system.',
        },
      ],
    },
    {
      title: 'Express Routers',
      content:
        'Express Router allows applications to divide routes into logical modules. This helps large applications organize endpoints around domains such as users, payments, authentication, projects, or AI workflows.',
      highlights: [
        {
          title: 'Router',
          description:
            'A modular routing mechanism for grouping related endpoints.',
        },
        {
          title: 'Route module',
          description:
            'A module containing related HTTP endpoints.',
        },
        {
          title: 'Domain boundary',
          description:
            'A logical boundary around a related set of business capabilities.',
        },
      ],
    },
    {
      title: 'Authentication',
      content:
        'Express applications frequently implement authentication using sessions, tokens, OAuth-based flows, or identity-provider integrations. Authentication establishes who the caller is; authorization determines what that caller can do.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'The process of establishing the identity of a caller.',
        },
        {
          title: 'Authorization',
          description:
            'The process of determining whether an authenticated caller has permission to perform an action.',
        },
        {
          title: 'Session',
          description:
            'Server-side or client-associated state representing an authenticated interaction.',
        },
      ],
    },
    {
      title: 'Authorization and RBAC',
      content:
        'Backend authorization should be enforced by the Express service rather than relying only on frontend checks. Role-Based Access Control can map users to roles and roles to permissions.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Authorization based on roles assigned to users.',
        },
        {
          title: 'Permission',
          description:
            'A defined capability that a caller may or may not have.',
        },
        {
          title: 'Backend enforcement',
          description:
            'Applying access-control decisions on the trusted server side.',
        },
      ],
    },
    {
      title: 'Validation',
      content:
        'Express applications should validate data received from clients before using it in business logic, database queries, external API calls, or file operations. TypeScript types alone do not validate runtime input.',
      highlights: [
        {
          title: 'Runtime validation',
          description:
            'Checking external data while the application is running.',
        },
        {
          title: 'Schema',
          description:
            'A formal description of the expected structure and constraints of data.',
        },
        {
          title: 'Untrusted input',
          description:
            'Data that originates outside the trusted application boundary.',
        },
      ],
    },
    {
      title: 'Express and Databases',
      content:
        'Express commonly sits between clients and databases. A typical flow is request → validation → authorization → service logic → database access → response. Database access should be isolated from route handlers when the application grows.',
      highlights: [
        {
          title: 'Data access layer',
          description:
            'Code responsible for communicating with the persistence system.',
        },
        {
          title: 'Connection pool',
          description:
            'A managed set of reusable database connections.',
        },
        {
          title: 'Transaction',
          description:
            'A group of database operations that should satisfy defined consistency requirements.',
        },
      ],
    },
    {
      title: 'Express and External APIs',
      content:
        'Express services often integrate with external providers such as payment systems, email services, AI providers, telephony platforms, CRMs, and identity providers. Integration logic should have timeouts, retries where appropriate, error handling, and observability.',
      highlights: [
        {
          title: 'External API',
          description:
            'An API owned and operated by another service or provider.',
        },
        {
          title: 'Timeout',
          description:
            'A limit on how long the application waits for an external operation.',
        },
        {
          title: 'Retry',
          description:
            'Repeating a failed operation when the failure is considered temporary and retrying is safe.',
        },
      ],
    },
    {
      title: 'Express and Webhooks',
      content:
        'Express is commonly used to expose webhook endpoints. A webhook handler receives an event from another system, verifies authenticity, validates the payload, processes or queues the event, and returns an appropriate response.',
      highlights: [
        {
          title: 'Webhook',
          description:
            'An HTTP callback through which one system notifies another system about an event.',
        },
        {
          title: 'Signature verification',
          description:
            'Validating a cryptographic signature to confirm that a webhook came from a trusted provider.',
        },
        {
          title: 'Idempotency',
          description:
            'Designing an operation so that processing the same event multiple times does not create unintended duplicate effects.',
        },
      ],
    },
    {
      title: 'Express and WebSockets',
      content:
        'Express handles HTTP request routing, while WebSocket libraries can provide persistent bidirectional communication for real-time features. An application can use both patterns together.',
      highlights: [
        {
          title: 'HTTP',
          description:
            'A request-response protocol commonly used for APIs and web applications.',
        },
        {
          title: 'WebSocket',
          description:
            'A persistent bidirectional communication channel.',
        },
        {
          title: 'Real-time',
          description:
            'Communication where updates can be delivered as events occur.',
        },
      ],
    },
    {
      title: 'Express and AI Applications',
      content:
        'Express can act as the backend gateway for AI applications. It can authenticate users, receive prompts or files, call AI providers, execute controlled tools, stream results, persist conversations, and expose APIs to frontend clients.',
      highlights: [
        {
          title: 'AI gateway',
          description:
            'A backend service that manages communication between application clients and AI providers.',
        },
        {
          title: 'Prompt endpoint',
          description:
            'An API endpoint that receives user input for an AI workflow.',
        },
        {
          title: 'Tool execution',
          description:
            'Controlled execution of backend operations requested by an AI workflow.',
        },
        {
          title: 'Streaming response',
          description:
            'Incremental delivery of AI-generated output to the client.',
        },
      ],
    },
    {
      title: 'Express and AI Voice Agents',
      content:
        'In an AI voice platform, Express can receive telephony webhooks, manage call events, authenticate provider callbacks, store call metadata, trigger AI workflows, and expose APIs for dashboards and call history.',
      highlights: [
        {
          title: 'Telephony webhook',
          description:
            'An event notification sent by a telephony provider to the backend.',
        },
        {
          title: 'Call state',
          description:
            'Information describing the current stage of a phone interaction.',
        },
        {
          title: 'Call history API',
          description:
            'An API used by a dashboard or application to retrieve historical call information.',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      content:
        'Production Express services should validate inputs, authenticate and authorize requests, use secure transport, protect secrets, apply rate limiting where appropriate, configure secure headers, avoid leaking internal errors, and keep dependencies maintained.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Restricting request frequency to protect services from abuse or excessive load.',
        },
        {
          title: 'Secure headers',
          description:
            'HTTP headers configured to reduce common browser security risks.',
        },
        {
          title: 'Secret management',
          description:
            'Secure storage and controlled access to credentials and sensitive configuration.',
        },
        {
          title: 'Dependency scanning',
          description:
            'Checking third-party packages for known security vulnerabilities.',
        },
      ],
    },
    {
      title: 'Performance and Scalability',
      content:
        'Express services can scale horizontally by running multiple instances behind a load balancer. Performance work should focus on actual bottlenecks such as database latency, external API calls, inefficient computation, serialization, and excessive middleware work.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Running multiple service instances to distribute workload.',
        },
        {
          title: 'Load balancer',
          description:
            'Distributes incoming traffic across service instances.',
        },
        {
          title: 'Caching',
          description:
            'Storing reusable results to reduce repeated expensive operations.',
        },
        {
          title: 'Bottleneck',
          description:
            'A part of the system limiting overall throughput or increasing latency.',
        },
      ],
    },
    {
      title: 'Background Jobs',
      content:
        'Long-running or non-critical work should often be moved out of the synchronous HTTP request path. Express can enqueue work to a background processing system and return a response without making the user wait for the entire operation.',
      highlights: [
        {
          title: 'Background job',
          description:
            'Work executed separately from the original HTTP request.',
        },
        {
          title: 'Queue',
          description:
            'A system that stores work until a worker can process it.',
        },
        {
          title: 'Worker',
          description:
            'A process that consumes and executes queued work.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production Express services should expose useful logs, metrics, traces, health checks, and error monitoring. Request identifiers and structured logging can make distributed debugging much easier.',
      highlights: [
        {
          title: 'Structured logging',
          description:
            'Logging information in a consistent machine-readable structure.',
        },
        {
          title: 'Request ID',
          description:
            'An identifier used to correlate logs and operations associated with one request.',
        },
        {
          title: 'Latency',
          description:
            'The time required to complete an operation or request.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism used to determine whether a service is sufficiently healthy to operate.',
        },
      ],
    },
    {
      title: 'Testing Express APIs',
      content:
        'Express applications should be tested at multiple levels. Unit tests cover business logic, integration tests verify API and dependency interactions, and end-to-end tests validate important user workflows.',
      highlights: [
        {
          title: 'API test',
          description:
            'A test that sends requests to an API and verifies its behavior.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interaction between application components and dependencies.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete workflow across the running system.',
        },
      ],
    },
    {
      title: 'Deployment',
      content:
        'Express applications can be deployed on virtual machines, containers, Kubernetes, managed application platforms, or serverless-compatible environments. Production deployment should account for configuration, health checks, scaling, logging, and rollback.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged environment containing an application and its runtime dependencies.',
        },
        {
          title: 'Health check',
          description:
            'Used by infrastructure to determine whether an application instance can receive traffic.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a deployment to a previous known-good version.',
        },
      ],
    },
    {
      title: 'Common Express.js Mistakes',
      content:
        'Common mistakes include putting all business logic inside route handlers, missing input validation, inconsistent error responses, leaking internal errors, failing to verify webhooks, ignoring timeouts for external services, blocking the event loop, exposing secrets, and relying on frontend authorization.',
      highlights: [
        {
          title: 'Fat route handlers',
          description:
            'Route functions containing too much business and integration logic.',
        },
        {
          title: 'Missing validation',
          description:
            'Using external input without checking whether it satisfies expected constraints.',
        },
        {
          title: 'Unverified webhooks',
          description:
            'Processing external callbacks without confirming their authenticity.',
        },
        {
          title: 'Frontend-only authorization',
          description:
            'Relying on browser checks without enforcing permissions on the backend.',
        },
      ],
    },
    {
      title: 'Express.js for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important Express.js concepts are API architecture, middleware pipelines, service boundaries, authentication, authorization, validation, integration reliability, scalability, observability, security, and delivery trade-offs. The goal is understanding how the framework supports a production backend, not memorizing every API.',
    },
    {
      title: 'Explore Express.js in EDDUU',
      content:
        'EDDUU connects Express.js with Node.js, JavaScript, TypeScript, React, Next.js, REST APIs, GraphQL, WebSockets, Webhooks, authentication, authorization, security, Kafka, RabbitMQ, databases, observability, and AI applications.',
    },
  ],
  relatedTechnologyIds: [
    'nodejs',
    'javascript',
    'typescript',
    'react',
    'nextjs',
    'full-stack',
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
    'authentication',
    'authorization',
    'rbac',
    'kafka',
    'rabbitmq',
  ],
}

export default expressjsKnowledge
