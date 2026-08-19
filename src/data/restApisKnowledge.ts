import type { KnowledgeDefinition } from './knowledge'

export const restApisKnowledge: KnowledgeDefinition = {
  technologyId: 'rest-apis',
  slug: 'rest-apis',
  title: 'What are REST APIs?',
  summary:
    'REST APIs are web interfaces that allow software systems to communicate over HTTP using resources, standard methods, representations, and predictable request and response patterns.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is a REST API?',
      content:
        'A REST API is an interface that allows one software system to communicate with another over a network using HTTP. REST, or Representational State Transfer, is an architectural style built around resources and standardized operations. A client sends an HTTP request to a server, and the server processes the request and returns a response.',
    },
    {
      title: 'Why do we need REST APIs?',
      content:
        'Modern applications are usually made of multiple software components that need to communicate with each other. A frontend may need data from a backend, a mobile application may need access to the same services, and one business system may need to communicate with another. REST APIs provide a predictable interface so these systems can exchange information without needing to know how the other system is implemented internally.',
    },
    {
      title: 'How does a REST API work?',
      content:
        'A client sends an HTTP request to an API endpoint. The request usually contains a method, URL, headers, and sometimes a request body. The server receives the request, authenticates and validates it when required, performs the appropriate business operation, and returns an HTTP response containing a status code, headers, and optionally a response body.',
    },
    {
      title: 'The REST API request-response cycle',
      content:
        'The basic REST API flow can be understood as a conversation between a client and a server. The client asks for something or requests an operation, the server processes the request, and the server returns the result.',
      highlights: [
        {
          title: 'Client',
          description:
            'The application that sends the request, such as a browser, mobile app, backend service, or command-line tool.',
        },
        {
          title: 'Endpoint',
          description:
            'A specific API URL representing a resource or operation that the client can interact with.',
        },
        {
          title: 'HTTP method',
          description:
            'Indicates the type of operation the client wants to perform, such as retrieving, creating, updating, or deleting data.',
        },
        {
          title: 'Request',
          description:
            'Contains the information sent from the client to the server, including headers, parameters, and optionally a body.',
        },
        {
          title: 'Response',
          description:
            'Contains the server result, including an HTTP status code, headers, and optionally returned data.',
        },
        {
          title: 'Status code',
          description:
            'A standardized HTTP code that communicates whether the request succeeded or how it failed.',
        },
      ],
    },
    {
      title: 'Important HTTP methods',
      content:
        'REST APIs commonly use standard HTTP methods to express the intended operation. The exact behavior depends on the API design, but these methods provide a common vocabulary for client-server communication.',
      highlights: [
        {
          title: 'GET',
          description:
            'Retrieves a resource or collection of resources without requesting a state-changing operation.',
        },
        {
          title: 'POST',
          description:
            'Usually creates a new resource or requests an operation that does not fit a simple replacement or update.',
        },
        {
          title: 'PUT',
          description:
            'Usually replaces the complete representation of an existing resource and is commonly designed to be idempotent.',
        },
        {
          title: 'PATCH',
          description:
            'Partially updates an existing resource.',
        },
        {
          title: 'DELETE',
          description:
            'Requests removal of a resource.',
        },
      ],
    },
    {
      title: 'REST resources and URLs',
      content:
        'REST APIs are commonly organized around resources rather than screens or database implementation details. For example, an education platform might expose resources such as students, courses, assignments, and submissions. A URL identifies the resource while the HTTP method communicates the intended operation.',
      highlights: [
        {
          title: 'Collection',
          description:
            'Represents a group of resources, such as /students or /courses.',
        },
        {
          title: 'Individual resource',
          description:
            'Represents a specific resource, such as /students/123.',
        },
        {
          title: 'Nested resource',
          description:
            'Represents a relationship between resources, such as /courses/42/assignments.',
        },
        {
          title: 'Query parameter',
          description:
            'Provides optional filtering, sorting, pagination, or search information within a request.',
        },
      ],
    },
    {
      title: 'Request body, headers, and parameters',
      content:
        'REST requests can carry information in several places. Path parameters commonly identify a specific resource. Query parameters can control filtering or pagination. Headers carry metadata such as content type or authorization information. A request body carries structured data when an operation needs additional input, commonly using JSON.',
      highlights: [
        {
          title: 'Path parameter',
          description:
            'Identifies a specific resource within the URL path.',
        },
        {
          title: 'Query parameter',
          description:
            'Adds optional request information such as filters, search terms, sorting, or pagination.',
        },
        {
          title: 'Header',
          description:
            'Carries metadata and control information associated with the HTTP request.',
        },
        {
          title: 'Request body',
          description:
            'Contains structured input data sent to the server for operations that require it.',
        },
      ],
    },
    {
      title: 'JSON and REST APIs',
      content:
        'JSON is one of the most common data formats used by REST APIs because it is compact, human-readable, and supported by most programming languages. A client and server should agree on the structure and meaning of the JSON data rather than relying on assumptions about internal database schemas.',
    },
    {
      title: 'HTTP status codes',
      content:
        'HTTP status codes allow an API to communicate the broad outcome of a request in a standardized way. A successful request should return an appropriate success status, while invalid input, authentication failures, missing resources, conflicts, rate limits, and server failures should use meaningful error statuses.',
      highlights: [
        {
          title: '200 OK',
          description:
            'Indicates that a request completed successfully.',
        },
        {
          title: '201 Created',
          description:
            'Indicates that a new resource was successfully created.',
        },
        {
          title: '204 No Content',
          description:
            'Indicates successful processing when no response body is required.',
        },
        {
          title: '400 Bad Request',
          description:
            'Indicates that the request is invalid or cannot be processed because of malformed input.',
        },
        {
          title: '401 Unauthorized',
          description:
            'Indicates that valid authentication credentials are required or were not accepted.',
        },
        {
          title: '403 Forbidden',
          description:
            'Indicates that the caller is authenticated or identified but is not permitted to perform the operation.',
        },
        {
          title: '404 Not Found',
          description:
            'Indicates that the requested resource could not be found.',
        },
        {
          title: '409 Conflict',
          description:
            'Indicates that the request conflicts with the current state of the resource.',
        },
        {
          title: '429 Too Many Requests',
          description:
            'Indicates that the client has exceeded an applicable rate limit.',
        },
        {
          title: '500 Internal Server Error',
          description:
            'Indicates an unexpected server-side failure.',
        },
      ],
    },
    {
      title: 'Authentication and authorization',
      content:
        'REST APIs often need to determine who is making a request and what that caller is allowed to do. Authentication verifies identity, while authorization determines permissions. APIs may use mechanisms such as API keys, OAuth 2.0, JWT-based access tokens, or session-based authentication depending on the architecture and security requirements.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of the caller.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether the authenticated caller can perform the requested operation.',
        },
        {
          title: 'Access token',
          description:
            'A credential that represents permission to access protected API resources.',
        },
        {
          title: 'Least privilege',
          description:
            'Limits access to only the resources and operations required for the intended task.',
        },
      ],
    },
    {
      title: 'REST API validation',
      content:
        'An API should never assume that client input is valid. Server-side validation should check required fields, data types, allowed values, resource relationships, business rules, and security constraints. Validation protects both system correctness and system security because clients can send malformed or intentionally malicious input.',
    },
    {
      title: 'REST API error handling',
      content:
        'A production API should return predictable errors that help clients understand what went wrong without exposing sensitive internal implementation details. A useful error response can contain a status, machine-readable error code, human-readable message, and relevant validation information.',
      highlights: [
        {
          title: 'Error code',
          description:
            'A stable machine-readable identifier that allows clients to handle a particular error condition.',
        },
        {
          title: 'Error message',
          description:
            'Human-readable information explaining the problem without exposing sensitive internal details.',
        },
        {
          title: 'Validation error',
          description:
            'Identifies specific input fields or values that do not satisfy the API contract.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier that helps connect a client request with server-side logs and traces during troubleshooting.',
        },
      ],
    },
    {
      title: 'REST API pagination, filtering, and sorting',
      content:
        'APIs that return large collections should avoid sending every record in a single response. Pagination limits the amount of data returned at once. Filtering allows clients to request only relevant records, while sorting controls their order. These mechanisms improve performance and make APIs more practical for large datasets.',
      highlights: [
        {
          title: 'Pagination',
          description:
            'Splits a large collection into smaller result sets.',
        },
        {
          title: 'Filtering',
          description:
            'Restricts results according to specified conditions.',
        },
        {
          title: 'Sorting',
          description:
            'Controls the order in which results are returned.',
        },
        {
          title: 'Cursor',
          description:
            'A value representing a position in a collection that can support efficient pagination for changing or large datasets.',
        },
      ],
    },
    {
      title: 'REST API idempotency',
      content:
        'Idempotency means that making the same request multiple times has the same intended effect as making it once. This property is important when networks fail and clients retry requests. GET, PUT, and DELETE are commonly designed to be idempotent, while POST operations often require an explicit idempotency mechanism when duplicate execution would be harmful.',
      highlights: [
        {
          title: 'Idempotent operation',
          description:
            'Repeated execution produces the same intended resource state as a single execution.',
        },
        {
          title: 'Retry',
          description:
            'Repeats a request after a recoverable failure or uncertain network result.',
        },
        {
          title: 'Idempotency key',
          description:
            'A client-provided identifier that allows a server to recognize repeated attempts of the same logical operation.',
        },
      ],
    },
    {
      title: 'REST API versioning',
      content:
        'APIs evolve as products change. Versioning helps teams introduce changes while protecting existing consumers. Common approaches include versioning in the URL, headers, or other API contract mechanisms. The most important requirement is having a clear compatibility and deprecation strategy rather than simply adding a version number.',
    },
    {
      title: 'REST APIs in real products',
      content:
        'REST APIs power many types of applications, including web applications, mobile applications, SaaS platforms, payment systems, education platforms, healthcare systems, marketplaces, and internal enterprise services. A frontend can call a REST API to retrieve data, while backend services can use APIs to communicate with other services.',
    },
    {
      title: 'REST APIs in production',
      content:
        'Production APIs require attention to performance, security, availability, scalability, observability, rate limiting, caching, authentication, authorization, validation, versioning, documentation, and failure handling. Teams should monitor latency and error rates and establish clear API contracts so changes do not unexpectedly break consumers.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Controls how many requests a client can make within a defined period.',
        },
        {
          title: 'Caching',
          description:
            'Stores reusable responses or data to reduce repeated processing and improve latency.',
        },
        {
          title: 'Observability',
          description:
            'Provides visibility into API traffic, latency, errors, dependencies, and system behavior.',
        },
        {
          title: 'API contract',
          description:
            'Defines the expected requests, responses, errors, and behavior that consumers can rely on.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Allows existing consumers to continue working when the API evolves.',
        },
      ],
    },
    {
      title: 'Common REST API mistakes',
      content:
        'Common mistakes include exposing database tables directly as APIs, using inconsistent URLs and status codes, returning unpredictable response structures, skipping validation, ignoring authorization, leaking internal errors, creating breaking changes without a migration plan, and failing to design for retries and partial failures.',
      highlights: [
        {
          title: 'Database-driven API design',
          description:
            'Exposes internal database structure directly instead of designing around stable business resources.',
        },
        {
          title: 'Inconsistent contracts',
          description:
            'Uses different naming, response, or error conventions across endpoints.',
        },
        {
          title: 'Missing authorization',
          description:
            'Authenticates callers but fails to verify whether they can access the requested resource.',
        },
        {
          title: 'Sensitive error leakage',
          description:
            'Returns internal implementation details, stack traces, or secrets to API consumers.',
        },
        {
          title: 'Unsafe retries',
          description:
            'Repeats state-changing operations without considering duplicate execution.',
        },
      ],
    },
    {
      title: 'Explore REST APIs in EDDUU',
      content:
        'EDDUU connects REST APIs with FastAPI, GraphQL, gRPC, WebSockets, Webhooks, OAuth 2.0, JWT, API Gateway, Microservices, Databases, Redis, Security, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'fastapi',
    'graphql',
    'grpc',
    'websockets',
    'webhooks',
    'oauth2',
    'jwt',
    'api-gateway',
    'microservices',
    'postgresql',
    'redis',
    'security',
    'observability',
  ],
}

export default restApisKnowledge
