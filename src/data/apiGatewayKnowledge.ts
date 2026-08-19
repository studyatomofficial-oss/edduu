import type { KnowledgeDefinition } from './knowledge'

export const apiGatewayKnowledge: KnowledgeDefinition = {
  technologyId: 'api-gateway',
  slug: 'api-gateway',
  title: 'What is an API Gateway?',
  summary:
    'An API Gateway is a centralized entry point that receives client requests, applies policies, routes traffic to backend services, and provides capabilities such as authentication, rate limiting, observability, and request transformation.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is an API Gateway?',
      content:
        'An API Gateway is a server-side component that sits between API clients and backend services. Instead of requiring clients to communicate directly with many internal services, the gateway provides a controlled entry point for requests. It can route requests to the appropriate service and apply common policies such as authentication, authorization, rate limiting, logging, monitoring, and request transformation.',
    },
    {
      title: 'Why do we need an API Gateway?',
      content:
        'In a distributed application, many backend services may expose different APIs and security requirements. Without a gateway, every client may need to understand service locations, authentication mechanisms, routing rules, and failure behavior. An API Gateway centralizes many cross-cutting concerns and provides a stable external interface while allowing internal services to evolve independently.',
    },
    {
      title: 'How does an API Gateway work?',
      content:
        'A client sends a request to the gateway instead of directly calling an internal service. The gateway receives the request, identifies the target service, evaluates applicable policies, optionally transforms the request, forwards it to the backend, receives the response, and returns the appropriate response to the client. The gateway can also record metrics, logs, traces, and security events throughout this process.',
      highlights: [
        {
          title: 'Client request',
          description:
            'The client sends an API request to the gateway endpoint.',
        },
        {
          title: 'Policy evaluation',
          description:
            'The gateway evaluates authentication, authorization, rate limits, routing, and other applicable policies.',
        },
        {
          title: 'Routing',
          description:
            'The gateway determines which backend service should handle the request.',
        },
        {
          title: 'Backend request',
          description:
            'The gateway forwards the request to the selected service.',
        },
        {
          title: 'Response',
          description:
            'The gateway receives the backend response and returns an appropriate response to the client.',
        },
      ],
    },
    {
      title: 'API Gateway vs Load Balancer',
      content:
        'A load balancer primarily distributes traffic across multiple instances of a service or application. An API Gateway can perform traffic distribution, but its responsibilities are generally broader and more application-aware. It can understand API routes, apply authentication and authorization policies, transform requests, enforce quotas, and provide API-specific observability.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'Primarily distributes network or application traffic across available backend instances.',
        },
        {
          title: 'API Gateway',
          description:
            'Provides an API-aware control point for routing, security, traffic policies, transformation, and observability.',
        },
        {
          title: 'Routing',
          description:
            'Determines which backend service or instance should receive a request.',
        },
        {
          title: 'Traffic distribution',
          description:
            'Spreads requests across available backend capacity.',
        },
      ],
    },
    {
      title: 'API Gateway and Authentication',
      content:
        'An API Gateway can act as an authentication enforcement point. It can validate credentials such as JWTs or tokens before forwarding requests to backend services. However, authentication at the gateway does not automatically eliminate the need for authorization checks inside services, especially when services make resource-level decisions.',
      highlights: [
        {
          title: 'Token validation',
          description:
            'Checks whether a supplied authentication token is valid according to the configured identity system.',
        },
        {
          title: 'JWT validation',
          description:
            'Validates the structure, signature, expiration, issuer, audience, and other applicable claims of a JSON Web Token.',
        },
        {
          title: 'Authentication',
          description:
            'Establishes confidence about the identity associated with a request.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether an authenticated identity is allowed to perform a requested operation.',
        },
      ],
    },
    {
      title: 'API Gateway and Authorization',
      content:
        'Authorization determines what an authenticated caller is permitted to do. A gateway can enforce coarse-grained policies such as which clients may access a particular API or route. Fine-grained authorization may still need to happen within the backend service because the service understands the resource, business rules, and ownership context.',
      highlights: [
        {
          title: 'Route-level authorization',
          description:
            'Controls which identities or clients can invoke specific API routes.',
        },
        {
          title: 'Scope',
          description:
            'Represents a defined permission or capability associated with an access token or identity.',
        },
        {
          title: 'Resource authorization',
          description:
            'Determines whether a caller can access a specific resource or object.',
        },
        {
          title: 'Defense in depth',
          description:
            'Uses multiple complementary security controls instead of relying on a single enforcement point.',
        },
      ],
    },
    {
      title: 'API Routing',
      content:
        'Routing is one of the core responsibilities of an API Gateway. The gateway maps incoming requests to backend services based on information such as hostname, URL path, HTTP method, headers, version, or other routing rules.',
      highlights: [
        {
          title: 'Path-based routing',
          description:
            'Routes requests according to the requested URL path.',
        },
        {
          title: 'Host-based routing',
          description:
            'Routes requests according to the requested hostname or domain.',
        },
        {
          title: 'Method-based routing',
          description:
            'Uses the HTTP method such as GET, POST, PUT, PATCH, or DELETE as part of routing logic.',
        },
        {
          title: 'Version routing',
          description:
            'Routes different API versions to appropriate backend implementations.',
        },
      ],
    },
    {
      title: 'API Gateway and Rate Limiting',
      content:
        'Rate limiting controls how frequently a client can make requests. It protects backend services from excessive traffic, accidental request storms, abuse, and certain classes of denial-of-service activity. Limits may be applied per user, API key, IP address, tenant, endpoint, or other identity or resource dimensions.',
      highlights: [
        {
          title: 'Rate limit',
          description:
            'Defines how many requests a caller may make within a specified period or capacity policy.',
        },
        {
          title: 'Quota',
          description:
            'Defines an allowed amount of usage over a broader period or according to a contractual policy.',
        },
        {
          title: 'Burst',
          description:
            'A temporary increase in request volume above the normal sustained rate.',
        },
        {
          title: 'Throttling',
          description:
            'Restricts or slows requests when traffic exceeds defined limits.',
        },
      ],
    },
    {
      title: 'API Gateway and Request Transformation',
      content:
        'A gateway can transform requests and responses when clients and backend services use different formats or contracts. Examples include adding headers, rewriting paths, changing payload formats, filtering fields, or adapting API versions. Transformation should be used carefully because excessive business logic in the gateway can make the architecture difficult to maintain.',
      highlights: [
        {
          title: 'Header transformation',
          description:
            'Adds, removes, or changes HTTP headers before forwarding a request or returning a response.',
        },
        {
          title: 'Path rewriting',
          description:
            'Changes the request path used to reach a backend service.',
        },
        {
          title: 'Protocol translation',
          description:
            'Converts between supported communication protocols when required by the architecture.',
        },
        {
          title: 'Response transformation',
          description:
            'Changes backend response representation before returning it to a client.',
        },
      ],
    },
    {
      title: 'API Gateway and API Versioning',
      content:
        'API versioning allows clients and backend services to evolve without requiring all consumers to migrate simultaneously. A gateway can route different API versions to different backend implementations and can support controlled migration between versions.',
      highlights: [
        {
          title: 'Versioned API',
          description:
            'An API contract explicitly associated with a particular version.',
        },
        {
          title: 'Backward compatibility',
          description:
            'The ability of a newer system to continue supporting existing clients or contracts.',
        },
        {
          title: 'Migration',
          description:
            'The controlled movement of consumers from an older API version to a newer implementation.',
        },
        {
          title: 'Deprecation',
          description:
            'The process of formally announcing that an API version or feature will eventually be retired.',
        },
      ],
    },
    {
      title: 'API Gateway and Caching',
      content:
        'A gateway can cache responses for suitable APIs to reduce backend load and improve latency. Caching is most useful for data that can tolerate a defined level of staleness and where the cache invalidation strategy is well understood. Sensitive or highly dynamic responses require additional care.',
      highlights: [
        {
          title: 'Response cache',
          description:
            'Stores previously generated responses so that suitable future requests can be served without calling the backend again.',
        },
        {
          title: 'Cache key',
          description:
            'Defines which request characteristics determine whether a cached response can be reused.',
        },
        {
          title: 'TTL',
          description:
            'Time-to-live defines how long cached data remains valid before expiration.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removes or updates cached information when the underlying data changes.',
        },
      ],
    },
    {
      title: 'API Gateway and Observability',
      content:
        'Because the gateway sits on a major request path, it is an important source of operational and security telemetry. Metrics, logs, and traces can help teams understand request volume, latency, errors, upstream failures, rate-limit activity, and security events.',
      highlights: [
        {
          title: 'Latency',
          description:
            'Measures how long a request takes through the gateway and downstream services.',
        },
        {
          title: 'Error rate',
          description:
            'Measures the proportion of requests that fail.',
        },
        {
          title: 'Request metrics',
          description:
            'Provide visibility into traffic volume, status codes, routes, clients, and other operational dimensions.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Connects a request across multiple services to understand end-to-end behavior.',
        },
        {
          title: 'Correlation ID',
          description:
            'Provides an identifier used to connect gateway events with downstream service events.',
        },
      ],
    },
    {
      title: 'API Gateway and Reliability',
      content:
        'The gateway itself becomes a critical infrastructure component because many requests may pass through it. Production systems therefore need redundancy, health checks, timeouts, retries where appropriate, circuit-breaking behavior, capacity planning, graceful degradation, and strong monitoring.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'Limits how long the gateway waits for a downstream operation before failing the request.',
        },
        {
          title: 'Retry',
          description:
            'Attempts an operation again after a failure when retrying is safe and appropriate.',
        },
        {
          title: 'Circuit breaker',
          description:
            'Temporarily stops sending requests to an unhealthy dependency to prevent cascading failures.',
        },
        {
          title: 'Health check',
          description:
            'Determines whether a backend service or gateway instance is available and healthy enough to receive traffic.',
        },
        {
          title: 'Graceful degradation',
          description:
            'Maintains partial functionality when a dependency or subsystem is unavailable.',
        },
      ],
    },
    {
      title: 'API Gateway and Microservices',
      content:
        'In a microservices architecture, an API Gateway can provide a stable external API boundary while internal services remain independently deployable. It can also aggregate responses from multiple services for clients that would otherwise need to make many network calls. However, excessive aggregation or business logic can turn the gateway into a bottleneck or tightly coupled orchestration layer.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'An independently deployable service responsible for a defined business or technical capability.',
        },
        {
          title: 'API aggregation',
          description:
            'Combines information from multiple backend services into a response for a client.',
        },
        {
          title: 'Backend for Frontend',
          description:
            'A client-specific backend layer optimized for the needs of a particular frontend or user experience.',
        },
        {
          title: 'Service boundary',
          description:
            'Defines ownership and responsibility between independently managed services.',
        },
      ],
    },
    {
      title: 'API Gateway Security',
      content:
        'The gateway is a high-value security boundary because it receives external traffic and may have access to many backend routes. Security controls should include strong authentication, authorization, input validation, TLS, rate limiting, abuse protection, secure configuration, secret protection, logging, monitoring, and controlled administrative access.',
      highlights: [
        {
          title: 'TLS termination',
          description:
            'The gateway can terminate an incoming TLS connection and establish a controlled connection to downstream services.',
        },
        {
          title: 'Input validation',
          description:
            'Checks incoming request data against expected formats and constraints.',
        },
        {
          title: 'Abuse protection',
          description:
            'Controls malicious or excessive traffic through rate limits, quotas, filtering, and related policies.',
        },
        {
          title: 'Secret protection',
          description:
            'Prevents API keys, credentials, certificates, and other sensitive values from being exposed or mishandled.',
        },
      ],
    },
    {
      title: 'API Gateway vs Service Mesh',
      content:
        'An API Gateway primarily controls traffic entering or leaving an application platform and often focuses on north-south traffic. A Service Mesh primarily manages service-to-service communication inside a distributed system and often focuses on east-west traffic. They can coexist because they solve different but complementary problems.',
      highlights: [
        {
          title: 'North-south traffic',
          description:
            'Traffic entering or leaving an application or platform boundary.',
        },
        {
          title: 'East-west traffic',
          description:
            'Traffic flowing between internal services or workloads.',
        },
        {
          title: 'Gateway responsibility',
          description:
            'External API access, routing, authentication, rate limiting, and API policy enforcement.',
        },
        {
          title: 'Service mesh responsibility',
          description:
            'Internal service communication, traffic policies, service identity, mTLS, and distributed service observability.',
        },
      ],
    },
    {
      title: 'API Gateway in Cloud Architecture',
      content:
        'Cloud-native systems frequently use managed or self-hosted API Gateway capabilities to expose APIs securely and consistently. A gateway can integrate with identity providers, serverless functions, containers, Kubernetes services, databases through backend APIs, and other cloud services.',
      highlights: [
        {
          title: 'Managed gateway',
          description:
            'An API Gateway capability operated by a cloud or platform provider.',
        },
        {
          title: 'Ingress',
          description:
            'A controlled entry point through which external traffic reaches workloads or services.',
        },
        {
          title: 'Backend integration',
          description:
            'The mechanism through which the gateway communicates with an internal service or workload.',
        },
        {
          title: 'Cloud-native gateway',
          description:
            'A gateway designed to integrate with distributed cloud infrastructure and automated deployment models.',
        },
      ],
    },
    {
      title: 'API Gateway in AI Systems',
      content:
        'AI platforms commonly expose model APIs, agent APIs, retrieval services, tool APIs, and internal AI workflows. An API Gateway can enforce authentication, rate limits, tenant isolation, request validation, usage quotas, observability, and routing across different AI backends or model providers.',
      highlights: [
        {
          title: 'Model routing',
          description:
            'Routes requests to an appropriate AI model or provider based on policy, capability, cost, latency, or availability.',
        },
        {
          title: 'Token quota',
          description:
            'Controls AI usage based on token consumption or other model-specific usage measures.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Ensures API requests and usage policies remain correctly associated with the intended tenant.',
        },
        {
          title: 'AI request policy',
          description:
            'Defines which users, applications, models, tools, or operations a request is allowed to access.',
        },
      ],
    },
    {
      title: 'API Gateway in production',
      content:
        'A production API Gateway should be treated as a critical platform component. Teams need clear ownership, capacity planning, high availability, secure configuration, deployment controls, observability, incident procedures, API lifecycle management, and documented policies. The gateway should remain focused on cross-cutting concerns rather than accumulating large amounts of business logic.',
      highlights: [
        {
          title: 'High availability',
          description:
            'Maintains gateway functionality despite individual instance or infrastructure failures.',
        },
        {
          title: 'Capacity planning',
          description:
            'Ensures the gateway can handle expected traffic while maintaining acceptable latency and reliability.',
        },
        {
          title: 'Policy management',
          description:
            'Provides controlled processes for defining, reviewing, deploying, and changing gateway policies.',
        },
        {
          title: 'API lifecycle',
          description:
            'Manages API publication, versioning, deprecation, migration, and retirement.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly assigns responsibility for gateway reliability, security, performance, and incident response.',
        },
      ],
    },
    {
      title: 'Common API Gateway mistakes',
      content:
        'Common mistakes include putting too much business logic in the gateway, creating a single point of failure, trusting the gateway as the only authorization layer, retrying unsafe operations, exposing internal services unnecessarily, ignoring gateway latency, and failing to monitor gateway-specific failures.',
      highlights: [
        {
          title: 'Business logic overload',
          description:
            'Putting complex domain logic into the gateway instead of keeping it in the appropriate service.',
        },
        {
          title: 'Single point of failure',
          description:
            'Deploying the gateway without sufficient redundancy or failure handling.',
        },
        {
          title: 'Gateway-only authorization',
          description:
            'Assuming backend services never need to enforce their own resource-level authorization.',
        },
        {
          title: 'Unsafe retries',
          description:
            'Automatically retrying operations that are not idempotent or safe to repeat.',
        },
        {
          title: 'Poor observability',
          description:
            'Failing to monitor gateway latency, errors, upstream failures, traffic, and policy decisions.',
        },
      ],
    },
    {
      title: 'Explore API Gateway in EDDUU',
      content:
        'EDDUU connects API Gateway with REST APIs, GraphQL, gRPC, WebSockets, Webhooks, OAuth 2.0, OIDC, JWT, Service Mesh, Kafka, RabbitMQ, Pulsar, NATS, Event-Driven Architecture, Security, Observability, and Cloud architecture.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'graphql',
    'grpc',
    'websockets',
    'webhooks',
    'oauth2',
    'openid-connect',
    'jwt',
    'service-mesh',
    'kafka',
    'rabbitmq',
    'pulsar',
    'nats',
    'event-driven-architecture',
    'security',
    'observability',
  ],
}

export default apiGatewayKnowledge
