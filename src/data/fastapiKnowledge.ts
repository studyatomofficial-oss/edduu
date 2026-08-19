import type { KnowledgeDefinition } from './knowledge'

export const fastapiKnowledge: KnowledgeDefinition = {
  technologyId: 'fastapi',
  slug: 'fastapi',
  title: 'What is FastAPI?',
  summary:
    'FastAPI is a modern Python web framework for building APIs using Python type hints, automatic request validation, asynchronous programming support, and automatic OpenAPI documentation.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is FastAPI?',
      content:
        'FastAPI is a Python web framework designed primarily for building APIs and backend services. It uses standard Python type hints to define request and response structures, validate incoming data, and generate API documentation.',
    },
    {
      title: 'Why do we use FastAPI?',
      content:
        'FastAPI provides a productive way to build modern APIs while taking advantage of Python’s ecosystem. Its type-hint-driven design helps developers define contracts clearly, validate data automatically, and generate interactive API documentation.',
      highlights: [
        {
          title: 'Python ecosystem',
          description:
            'Allows API applications to use Python libraries for databases, AI, machine learning, automation, and integrations.',
        },
        {
          title: 'Type hints',
          description:
            'Python annotations are used to describe expected request and response data.',
        },
        {
          title: 'Validation',
          description:
            'Incoming request data can be validated against declared schemas.',
        },
        {
          title: 'OpenAPI',
          description:
            'FastAPI can generate an OpenAPI specification describing the API contract.',
        },
      ],
    },
    {
      title: 'FastAPI and ASGI',
      content:
        'FastAPI is built around the ASGI ecosystem. ASGI stands for Asynchronous Server Gateway Interface and provides an interface between asynchronous Python web applications and servers. This allows FastAPI applications to support asynchronous request handling.',
      highlights: [
        {
          title: 'ASGI',
          description:
            'A Python standard for communication between asynchronous web applications and servers.',
        },
        {
          title: 'Async',
          description:
            'A programming model that allows applications to efficiently manage operations that spend time waiting, especially I/O.',
        },
        {
          title: 'Server',
          description:
            'The process that receives network requests and passes them to the application.',
        },
      ],
    },
    {
      title: 'FastAPI Application',
      content:
        'A FastAPI application is created by instantiating the FastAPI class. Routes are then registered using decorators such as @app.get(), @app.post(), @app.put(), and @app.delete().',
      highlights: [
        {
          title: 'FastAPI instance',
          description:
            'The application object that holds routes, configuration, middleware, and API behavior.',
        },
        {
          title: 'Route',
          description:
            'A mapping between an HTTP method and URL path and the Python function that handles the request.',
        },
        {
          title: 'Path operation',
          description:
            'FastAPI terminology for a route defined for a particular HTTP method and path.',
        },
      ],
    },
    {
      title: 'HTTP Methods in FastAPI',
      content:
        'FastAPI supports standard HTTP methods used by REST-style APIs. GET is commonly used to retrieve data, POST to create or trigger operations, PUT to replace resources, PATCH to partially update resources, and DELETE to remove resources.',
      highlights: [
        {
          title: 'GET',
          description:
            'Commonly used to retrieve data.',
        },
        {
          title: 'POST',
          description:
            'Commonly used to create a resource or initiate an operation.',
        },
        {
          title: 'PUT',
          description:
            'Commonly used to replace or fully update a resource.',
        },
        {
          title: 'PATCH',
          description:
            'Commonly used to partially update a resource.',
        },
        {
          title: 'DELETE',
          description:
            'Commonly used to remove a resource.',
        },
      ],
    },
    {
      title: 'Path Parameters',
      content:
        'Path parameters are values embedded in the URL path. FastAPI can map these values directly to function parameters and validate their declared types.',
      highlights: [
        {
          title: 'Path parameter',
          description:
            'A dynamic value included in a URL path, such as /users/{user_id}.',
        },
        {
          title: 'Type conversion',
          description:
            'FastAPI can convert compatible input values according to the declared Python type.',
        },
        {
          title: 'Validation',
          description:
            'FastAPI validates path parameters against their declared constraints and types.',
        },
      ],
    },
    {
      title: 'Query Parameters',
      content:
        'Query parameters are values supplied after the question mark in a URL. FastAPI can declare and validate these parameters through function signatures and Python type annotations.',
      highlights: [
        {
          title: 'Query parameter',
          description:
            'A parameter supplied in the query string of a URL.',
        },
        {
          title: 'Optional parameter',
          description:
            'A parameter that does not have to be provided.',
        },
        {
          title: 'Default value',
          description:
            'A value used when the client does not provide the parameter.',
        },
      ],
    },
    {
      title: 'Request Bodies',
      content:
        'Request bodies carry structured data sent by clients, commonly as JSON. FastAPI uses typed models to describe and validate the expected structure of request bodies.',
      highlights: [
        {
          title: 'Request body',
          description:
            'Structured data sent by the client as part of an HTTP request.',
        },
        {
          title: 'JSON body',
          description:
            'A common representation used to send structured application data.',
        },
        {
          title: 'Schema',
          description:
            'A definition describing the expected structure and constraints of data.',
        },
      ],
    },
    {
      title: 'Pydantic Models',
      content:
        'FastAPI commonly uses Pydantic models for data validation and serialization. A model defines fields and their expected types and can enforce constraints on incoming data.',
      highlights: [
        {
          title: 'Pydantic',
          description:
            'A Python library widely used for data validation and serialization using Python type annotations.',
        },
        {
          title: 'Model',
          description:
            'A typed structure describing expected application data.',
        },
        {
          title: 'Serialization',
          description:
            'Converting application data into a representation suitable for transport or storage.',
        },
        {
          title: 'Deserialization',
          description:
            'Converting incoming data into application-level structures.',
        },
      ],
    },
    {
      title: 'Response Models',
      content:
        'Response models define the structure of data an API should return. They can help validate output and make the API contract explicit.',
      highlights: [
        {
          title: 'Response model',
          description:
            'A typed schema describing the expected API response structure.',
        },
        {
          title: 'Output validation',
          description:
            'Checks that returned data conforms to the declared response structure.',
        },
        {
          title: 'API contract',
          description:
            'The defined behavior and data structure expected by API consumers.',
        },
      ],
    },
    {
      title: 'Dependency Injection',
      content:
        'FastAPI provides a dependency injection system that allows common logic to be declared separately and supplied automatically to route handlers. This is useful for authentication, database sessions, configuration, and reusable application services.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'Reusable logic or resources required by a route or service.',
        },
        {
          title: 'Dependency injection',
          description:
            'A mechanism for providing required dependencies to application components without manually constructing them everywhere.',
        },
        {
          title: 'Reusable dependency',
          description:
            'Shared logic that can be applied consistently across multiple routes.',
        },
      ],
    },
    {
      title: 'Authentication in FastAPI',
      content:
        'FastAPI can implement authentication using mechanisms such as API keys, bearer tokens, OAuth 2.0 flows, and external identity providers. Authentication verifies identity, while authorization determines what the authenticated identity can access.',
      highlights: [
        {
          title: 'Bearer token',
          description:
            'A token presented by a client to prove authorization to access protected resources.',
        },
        {
          title: 'OAuth 2.0',
          description:
            'An authorization framework used to delegate access to protected resources.',
        },
        {
          title: 'JWT',
          description:
            'A compact token format commonly used to carry signed claims between parties.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether an authenticated identity is permitted to perform an action.',
        },
      ],
    },
    {
      title: 'Middleware',
      content:
        'Middleware allows logic to run around HTTP request processing. It can be used for concerns such as request logging, correlation IDs, security headers, timing, CORS, and other cross-cutting behavior.',
      highlights: [
        {
          title: 'Middleware',
          description:
            'Logic that executes around request processing before and/or after a route handler.',
        },
        {
          title: 'CORS',
          description:
            'Browser security rules controlling cross-origin requests.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to trace a request across distributed components.',
        },
        {
          title: 'Security headers',
          description:
            'HTTP response headers that help reduce common browser-based security risks.',
        },
      ],
    },
    {
      title: 'CORS in FastAPI',
      content:
        'Cross-Origin Resource Sharing allows a browser application hosted on one origin to communicate with an API hosted on another origin when the server explicitly permits the request. FastAPI applications commonly configure CORS middleware for frontend applications hosted on different domains or ports.',
      highlights: [
        {
          title: 'Origin',
          description:
            'The combination of scheme, host, and port that identifies a web origin.',
        },
        {
          title: 'Allowed origin',
          description:
            'An origin that the API explicitly permits for cross-origin browser requests.',
        },
        {
          title: 'Preflight',
          description:
            'A browser request used to determine whether a cross-origin operation is permitted.',
        },
      ],
    },
    {
      title: 'Error Handling',
      content:
        'FastAPI applications can return structured HTTP errors using HTTPException and custom exception handlers. Production APIs should expose useful client-facing errors without leaking sensitive implementation details.',
      highlights: [
        {
          title: 'HTTPException',
          description:
            'A FastAPI mechanism for returning an HTTP error response with a status code and detail.',
        },
        {
          title: 'Status code',
          description:
            'A standardized HTTP number describing the result of a request.',
        },
        {
          title: 'Exception handler',
          description:
            'Logic that converts specific exceptions into controlled application responses.',
        },
      ],
    },
    {
      title: 'Status Codes',
      content:
        'HTTP status codes communicate the outcome of API requests. Common codes include 200 for successful requests, 201 for successful resource creation, 204 for successful responses without a response body, 400 for invalid requests, 401 for missing or invalid authentication, 403 for forbidden access, 404 for missing resources, 409 for conflicts, and 500 for unexpected server failures.',
      highlights: [
        {
          title: '2xx',
          description:
            'Generally indicates successful processing.',
        },
        {
          title: '4xx',
          description:
            'Generally indicates a client-side request or authorization problem.',
        },
        {
          title: '5xx',
          description:
            'Generally indicates a server-side failure.',
        },
      ],
    },
    {
      title: 'Async and Await',
      content:
        'FastAPI supports asynchronous route handlers using async and await. Asynchronous programming can improve efficiency for I/O-bound workloads by allowing the server to work on other tasks while waiting for network, database, or other asynchronous operations.',
      highlights: [
        {
          title: 'async',
          description:
            'Declares a coroutine function that can participate in asynchronous execution.',
        },
        {
          title: 'await',
          description:
            'Suspends an asynchronous operation while waiting for another awaitable operation to complete.',
        },
        {
          title: 'I/O-bound',
          description:
            'A workload where significant time is spent waiting for external operations such as network or storage access.',
        },
        {
          title: 'CPU-bound',
          description:
            'A workload where significant time is spent performing computation.',
        },
      ],
    },
    {
      title: 'Background Tasks',
      content:
        'Some operations do not need to block the immediate API response. FastAPI provides mechanisms for lightweight background work, while larger workloads are commonly delegated to dedicated task queues or worker systems.',
      highlights: [
        {
          title: 'Background task',
          description:
            'Work performed outside the immediate request-response path.',
        },
        {
          title: 'Worker',
          description:
            'A process or service that executes queued background work.',
        },
        {
          title: 'Task queue',
          description:
            'Infrastructure used to place work into a queue for asynchronous processing.',
        },
      ],
    },
    {
      title: 'OpenAPI Documentation',
      content:
        'FastAPI automatically generates an OpenAPI specification from route definitions, request models, response models, and metadata. This specification can power interactive API documentation and help teams understand and consume the API contract.',
      highlights: [
        {
          title: 'OpenAPI',
          description:
            'A standard specification for describing HTTP APIs.',
        },
        {
          title: 'Swagger UI',
          description:
            'An interactive interface commonly used to explore and test APIs described by OpenAPI.',
        },
        {
          title: 'ReDoc',
          description:
            'A documentation interface that can render OpenAPI specifications.',
        },
      ],
    },
    {
      title: 'FastAPI Project Structure',
      content:
        'A production FastAPI project should separate routing, schemas, business services, data access, configuration, authentication, and integrations according to the project’s complexity. Small projects can remain simple, while larger systems benefit from clear architectural boundaries.',
      highlights: [
        {
          title: 'Router',
          description:
            'A group of related API routes that can be organized as a reusable component.',
        },
        {
          title: 'Schema',
          description:
            'A typed representation of request or response data.',
        },
        {
          title: 'Service layer',
          description:
            'A layer containing application or business logic separate from HTTP routing.',
        },
        {
          title: 'Repository',
          description:
            'A component that abstracts persistence or data-access operations.',
        },
      ],
    },
    {
      title: 'FastAPI and Databases',
      content:
        'FastAPI does not force a particular database technology. Applications can integrate relational databases such as PostgreSQL or MySQL, document databases, Redis, and other persistence systems through Python drivers, ORMs, or specialized libraries.',
      highlights: [
        {
          title: 'PostgreSQL',
          description:
            'A powerful open-source relational database commonly used by production backend applications.',
        },
        {
          title: 'ORM',
          description:
            'A programming abstraction that maps application objects and operations to relational database structures.',
        },
        {
          title: 'Connection pool',
          description:
            'A reusable set of database connections used to reduce connection setup overhead.',
        },
      ],
    },
    {
      title: 'FastAPI and External APIs',
      content:
        'Backend services often need to communicate with external systems such as payment providers, AI model APIs, CRM platforms, email systems, or cloud services. FastAPI can coordinate these integrations while applying authentication, validation, retries, timeouts, and error handling.',
      highlights: [
        {
          title: 'External API',
          description:
            'An API exposed by another application, company, or platform.',
        },
        {
          title: 'Timeout',
          description:
            'A limit on how long an operation is allowed to wait before failing.',
        },
        {
          title: 'Retry',
          description:
            'An additional attempt to perform an operation after a failure.',
        },
        {
          title: 'Circuit breaker',
          description:
            'A resilience pattern that temporarily stops calls to a failing dependency to prevent cascading failures.',
        },
      ],
    },
    {
      title: 'FastAPI and AI Applications',
      content:
        'FastAPI is commonly used as the backend layer for AI applications. A FastAPI service can expose endpoints for chat, document ingestion, RAG retrieval, model inference, agent execution, evaluations, and AI workflow orchestration.',
      highlights: [
        {
          title: 'Inference API',
          description:
            'An API endpoint that invokes an AI model and returns an inference result.',
        },
        {
          title: 'RAG API',
          description:
            'An API that coordinates retrieval and generation for a retrieval-augmented application.',
        },
        {
          title: 'Agent API',
          description:
            'An API that exposes agent workflows or actions to client applications.',
        },
        {
          title: 'Model gateway',
          description:
            'A backend abstraction that routes requests to one or more model providers.',
        },
      ],
    },
    {
      title: 'FastAPI Performance',
      content:
        'FastAPI performance depends on application design, server configuration, database behavior, external dependencies, serialization, and workload characteristics. Async execution can help I/O-heavy applications, but asynchronous code does not automatically make CPU-heavy computation faster.',
      highlights: [
        {
          title: 'Throughput',
          description:
            'The amount of work or number of requests processed during a period.',
        },
        {
          title: 'Latency',
          description:
            'The time required to complete an individual operation.',
        },
        {
          title: 'Serialization cost',
          description:
            'The processing time and resource usage required to convert application data into a transport format.',
        },
        {
          title: 'Bottleneck',
          description:
            'The component or operation limiting overall system performance.',
        },
      ],
    },
    {
      title: 'FastAPI Reliability',
      content:
        'Production FastAPI services should use timeouts, retries where appropriate, idempotency for retryable operations, health checks, structured logging, metrics, tracing, graceful shutdown, and appropriate resource limits.',
      highlights: [
        {
          title: 'Health endpoint',
          description:
            'An endpoint used to report service health or readiness.',
        },
        {
          title: 'Readiness',
          description:
            'Indicates whether a service is ready to receive production traffic.',
        },
        {
          title: 'Graceful shutdown',
          description:
            'Allows a service to finish or safely terminate active work before stopping.',
        },
        {
          title: 'Idempotency',
          description:
            'Ensures repeating an operation does not create unintended additional side effects.',
        },
      ],
    },
    {
      title: 'FastAPI Security',
      content:
        'Production FastAPI applications should validate inputs, enforce authorization, protect secrets, use TLS, configure CORS carefully, apply rate limiting where appropriate, sanitize error responses, and keep dependencies updated.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Restricts how frequently a client can make requests.',
        },
        {
          title: 'Secret management',
          description:
            'Protects API keys, passwords, tokens, and other sensitive configuration.',
        },
        {
          title: 'Input validation',
          description:
            'Ensures incoming data conforms to expected rules before processing.',
        },
        {
          title: 'TLS',
          description:
            'Protects data transmitted between clients and services over a network.',
        },
      ],
    },
    {
      title: 'FastAPI Testing',
      content:
        'FastAPI applications can be tested using unit tests, integration tests, and API-level tests. Test suites should validate successful paths, validation failures, authentication behavior, authorization rules, dependency failures, and important business workflows.',
      highlights: [
        {
          title: 'API test client',
          description:
            'A test utility used to send requests to an application and inspect responses.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interactions between multiple application components or external dependencies.',
        },
        {
          title: 'Contract test',
          description:
            'Verifies that an API behaves according to an agreed contract.',
        },
      ],
    },
    {
      title: 'FastAPI Deployment',
      content:
        'FastAPI applications are commonly deployed behind a production ASGI server and reverse proxy or load balancer. They can run in containers, virtual machines, Kubernetes, serverless environments, or managed application platforms depending on operational requirements.',
      highlights: [
        {
          title: 'ASGI server',
          description:
            'A server capable of running ASGI-compatible Python applications.',
        },
        {
          title: 'Reverse proxy',
          description:
            'A server that receives requests and forwards them to backend application services.',
        },
        {
          title: 'Container',
          description:
            'A packaged execution environment containing the application and required dependencies.',
        },
        {
          title: 'Load balancer',
          description:
            'Distributes traffic across multiple service instances.',
        },
      ],
    },
    {
      title: 'Common FastAPI Mistakes',
      content:
        'Common mistakes include putting all business logic inside route handlers, using async without understanding I/O behavior, blocking the event loop with CPU-heavy work, exposing database internals through APIs, missing authentication and authorization, returning inconsistent errors, ignoring timeouts, and storing secrets in source code.',
      highlights: [
        {
          title: 'Fat route handlers',
          description:
            'Route functions containing too much business and integration logic.',
        },
        {
          title: 'Blocking event loop',
          description:
            'Running blocking operations in asynchronous execution paths and reducing concurrency.',
        },
        {
          title: 'Missing timeouts',
          description:
            'Allowing external calls to wait indefinitely and consume resources.',
        },
        {
          title: 'Insecure APIs',
          description:
            'APIs that lack proper authentication, authorization, validation, or secure configuration.',
        },
      ],
    },
    {
      title: 'FastAPI in Production AI Architecture',
      content:
        'In a production AI platform, FastAPI can act as the API layer between a frontend or client application and AI services. It can authenticate users, validate requests, enforce authorization, invoke RAG or agent workflows, call model providers, persist results, publish events, and expose operational endpoints.',
    },
    {
      title: 'Explore FastAPI in EDDUU',
      content:
        'EDDUU connects FastAPI with Python, REST APIs, OAuth 2.0, OIDC, JWT, authentication, authorization, databases, Redis, AI, RAG, agents, event-driven architecture, security, observability, Docker, and cloud deployment.',
    },
  ],
  relatedTechnologyIds: [
    'python',
    'rest-apis',
    'oauth2',
    'openid-connect',
    'jwt',
    'authentication',
    'authorization',
    'redis',
  ],
}

export default fastapiKnowledge
