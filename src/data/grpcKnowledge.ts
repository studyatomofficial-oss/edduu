import type { KnowledgeDefinition } from './knowledge'

export const grpcKnowledge: KnowledgeDefinition = {
  technologyId: 'grpc',
  slug: 'grpc',
  title: 'What is gRPC?',
  summary:
    'gRPC is a high-performance remote procedure call framework that allows distributed applications to communicate through strongly typed service contracts, commonly using Protocol Buffers and HTTP/2.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is gRPC?',
      content:
        'gRPC is a framework for remote procedure calls, where one application can invoke an operation on another application as if it were calling a local function. It uses strongly defined service contracts and commonly uses Protocol Buffers for message serialization and HTTP/2 for network communication.',
    },
    {
      title: 'Why do we need gRPC?',
      content:
        'Distributed systems often contain many services that need to communicate efficiently and reliably. REST APIs are excellent for many client-server scenarios, but internal service-to-service communication may benefit from compact binary serialization, generated client code, streaming, and strongly typed contracts. gRPC provides these capabilities as part of its communication model.',
    },
    {
      title: 'How does gRPC work?',
      content:
        'A developer defines a service and its methods in a Protocol Buffer schema. Code generation tools create client and server interfaces for supported programming languages. A client calls a generated method, the gRPC framework serializes the request, sends it over the network, the server executes the corresponding method, and the response is serialized and returned to the client.',
    },
    {
      title: 'The gRPC architecture',
      content:
        'The gRPC architecture is centered around a service contract shared between clients and servers. The contract describes available methods and the structure of request and response messages.',
      highlights: [
        {
          title: 'Service',
          description:
            'Defines a set of remotely callable operations exposed by a server.',
        },
        {
          title: 'RPC method',
          description:
            'Represents an operation that a client can invoke on a remote service.',
        },
        {
          title: 'Protocol Buffers',
          description:
            'A language-neutral schema and serialization format commonly used to define gRPC services and messages.',
        },
        {
          title: 'Client stub',
          description:
            'Generated client-side code that provides a convenient interface for calling remote methods.',
        },
        {
          title: 'Server implementation',
          description:
            'Application code that implements the operations defined by the gRPC service contract.',
        },
        {
          title: 'HTTP/2',
          description:
            'The transport protocol commonly used by gRPC to support efficient communication and streaming.',
        },
      ],
    },
    {
      title: 'Important gRPC concepts',
      content:
        'Several concepts are important when designing and operating gRPC services.',
      highlights: [
        {
          title: 'Contract',
          description:
            'Defines the methods, request messages, and response messages that clients and servers agree to use.',
        },
        {
          title: 'Serialization',
          description:
            'Converts structured application data into a network representation and back again.',
        },
        {
          title: 'Code generation',
          description:
            'Creates client and server interfaces from the service definition.',
        },
        {
          title: 'Unary RPC',
          description:
            'A request-response interaction where one request produces one response.',
        },
        {
          title: 'Streaming RPC',
          description:
            'Allows a client, server, or both sides to exchange multiple messages during one RPC.',
        },
        {
          title: 'Metadata',
          description:
            'Carries additional information such as authentication credentials or request context.',
        },
      ],
    },
    {
      title: 'gRPC communication patterns',
      content:
        'gRPC supports several communication patterns. The simplest is unary RPC, where one request produces one response. Streaming patterns allow multiple messages to flow between the client and server and are useful for long-running or continuously changing data.',
      highlights: [
        {
          title: 'Unary RPC',
          description:
            'One client request is followed by one server response.',
        },
        {
          title: 'Server streaming',
          description:
            'One client request can produce a stream of responses from the server.',
        },
        {
          title: 'Client streaming',
          description:
            'The client sends multiple messages and the server eventually returns a response.',
        },
        {
          title: 'Bidirectional streaming',
          description:
            'Both client and server can exchange multiple messages independently during the same RPC.',
        },
      ],
    },
    {
      title: 'Protocol Buffers',
      content:
        'Protocol Buffers, commonly called Protobuf, are used to define structured messages and service contracts. The schema provides a strongly typed representation that can be compiled into code for different programming languages. Binary serialization is compact and efficient, which is one reason Protobuf is commonly used for internal service communication.',
      highlights: [
        {
          title: 'Message',
          description:
            'Defines the structure of data exchanged between gRPC clients and servers.',
        },
        {
          title: 'Field',
          description:
            'Represents an individual piece of data within a Protobuf message.',
        },
        {
          title: 'Field number',
          description:
            'A numeric identifier used by Protobuf to encode fields efficiently and maintain compatibility.',
        },
        {
          title: 'Schema',
          description:
            'Defines the structure and contract shared between communicating services.',
        },
      ],
    },
    {
      title: 'gRPC vs REST APIs',
      content:
        'gRPC and REST are both useful communication approaches. REST commonly uses HTTP resources, URLs, and human-readable representations such as JSON. gRPC focuses on strongly typed service contracts, generated interfaces, efficient binary serialization, and streaming. REST is often convenient for public APIs and browser-facing applications, while gRPC is frequently useful for internal service-to-service communication.',
      highlights: [
        {
          title: 'REST',
          description:
            'Resource-oriented API style commonly using HTTP methods and JSON representations.',
        },
        {
          title: 'gRPC',
          description:
            'Service-oriented RPC framework commonly using Protobuf and HTTP/2.',
        },
        {
          title: 'JSON',
          description:
            'Human-readable data format frequently used by REST APIs.',
        },
        {
          title: 'Binary serialization',
          description:
            'Encodes data into a compact representation that can reduce payload size and processing overhead.',
        },
        {
          title: 'Generated client',
          description:
            'Provides typed client interfaces automatically generated from the service contract.',
        },
      ],
    },
    {
      title: 'gRPC and microservices',
      content:
        'gRPC is commonly used for communication between microservices because services can share strongly typed contracts and generated clients. A service can expose a defined set of operations without requiring another service to understand its internal implementation. This can make internal communication efficient, although teams must still manage service discovery, authentication, compatibility, retries, timeouts, and observability.',
    },
    {
      title: 'gRPC error handling',
      content:
        'gRPC provides standardized status codes for communicating the outcome of an RPC. Applications should distinguish expected business failures from infrastructure failures and return enough information for clients to handle errors without exposing sensitive internal details.',
      highlights: [
        {
          title: 'OK',
          description:
            'Indicates that the RPC completed successfully.',
        },
        {
          title: 'INVALID_ARGUMENT',
          description:
            'Indicates that the client supplied invalid input.',
        },
        {
          title: 'UNAUTHENTICATED',
          description:
            'Indicates that valid authentication credentials were not supplied or accepted.',
        },
        {
          title: 'PERMISSION_DENIED',
          description:
            'Indicates that the caller does not have permission to perform the requested operation.',
        },
        {
          title: 'NOT_FOUND',
          description:
            'Indicates that a requested resource could not be found.',
        },
        {
          title: 'DEADLINE_EXCEEDED',
          description:
            'Indicates that the operation did not complete within its configured deadline.',
        },
        {
          title: 'UNAVAILABLE',
          description:
            'Indicates that the service is temporarily unavailable and the operation may be retryable.',
        },
        {
          title: 'INTERNAL',
          description:
            'Indicates an unexpected internal server failure.',
        },
      ],
    },
    {
      title: 'gRPC deadlines and timeouts',
      content:
        'Distributed calls should not be allowed to wait indefinitely. A client can define a deadline for an RPC, allowing the system to stop waiting when the operation takes too long. Deadlines are especially important in service chains because one slow dependency can otherwise consume resources across many upstream services.',
      highlights: [
        {
          title: 'Deadline',
          description:
            'Defines the point in time by which an RPC should complete.',
        },
        {
          title: 'Timeout',
          description:
            'Defines how long an operation is allowed to run or wait.',
        },
        {
          title: 'Cancellation',
          description:
            'Stops work when the caller no longer needs the result.',
        },
      ],
    },
    {
      title: 'gRPC retries',
      content:
        'Retries can improve resilience when failures are temporary, but retrying every operation automatically can make a distributed system worse. Teams should identify which failures are retryable, apply bounded retry attempts, use backoff, and consider whether the operation is safe to repeat.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Repeats a failed RPC when the failure is considered potentially temporary.',
        },
        {
          title: 'Backoff',
          description:
            'Adds increasing delays between retry attempts to reduce pressure on a failing service.',
        },
        {
          title: 'Idempotency',
          description:
            'Ensures repeated execution does not unintentionally create duplicate side effects.',
        },
        {
          title: 'Retry budget',
          description:
            'Limits retry activity so resilience mechanisms do not overwhelm an already unhealthy system.',
        },
      ],
    },
    {
      title: 'gRPC authentication and security',
      content:
        'Internal service communication still requires security controls. gRPC deployments can use TLS for encrypted transport and authentication mechanisms to establish service or user identity. Authorization should determine which callers are allowed to invoke particular operations.',
      highlights: [
        {
          title: 'TLS',
          description:
            'Encrypts network communication and helps protect data in transit.',
        },
        {
          title: 'Authentication',
          description:
            'Verifies the identity of the service or user making the RPC.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether the authenticated caller is allowed to invoke an operation.',
        },
        {
          title: 'mTLS',
          description:
            'Uses certificates to authenticate both sides of a service connection.',
        },
      ],
    },
    {
      title: 'gRPC in real products',
      content:
        'gRPC can power internal microservices, payment services, recommendation systems, data platforms, AI inference services, distributed processing systems, and other backend workloads. It is particularly useful when many services communicate frequently and benefit from strongly typed contracts and efficient communication.',
    },
    {
      title: 'gRPC in production',
      content:
        'Production gRPC systems require attention to service discovery, load balancing, deadlines, retries, authentication, authorization, compatibility, observability, capacity, connection management, and failure recovery. Teams should monitor both application-level behavior and transport-level health because failures can propagate across service dependencies.',
      highlights: [
        {
          title: 'Service discovery',
          description:
            'Allows clients to locate healthy instances of a service.',
        },
        {
          title: 'Load balancing',
          description:
            'Distributes RPC traffic across available service instances.',
        },
        {
          title: 'Connection management',
          description:
            'Controls how client connections and HTTP/2 channels are established and reused.',
        },
        {
          title: 'Observability',
          description:
            'Tracks RPC latency, errors, traffic, dependencies, and service behavior.',
        },
        {
          title: 'Contract compatibility',
          description:
            'Ensures service changes do not unexpectedly break existing clients.',
        },
      ],
    },
    {
      title: 'Common gRPC mistakes',
      content:
        'Common mistakes include using gRPC everywhere without considering client requirements, ignoring deadlines, retrying non-idempotent operations, exposing internal errors, making incompatible schema changes, failing to monitor downstream dependencies, and assuming that internal services do not require authentication or authorization.',
      highlights: [
        {
          title: 'No deadlines',
          description:
            'Allows calls to wait indefinitely and potentially exhaust service resources.',
        },
        {
          title: 'Unsafe retries',
          description:
            'Repeats operations that can create duplicate or unintended side effects.',
        },
        {
          title: 'Breaking contracts',
          description:
            'Changes service definitions in ways that older clients cannot safely handle.',
        },
        {
          title: 'Missing authorization',
          description:
            'Assumes network location alone is sufficient protection for internal operations.',
        },
        {
          title: 'Poor dependency visibility',
          description:
            'Fails to identify which downstream service is responsible for latency or failures.',
        },
      ],
    },
    {
      title: 'Explore gRPC in EDDUU',
      content:
        'EDDUU connects gRPC with REST APIs, GraphQL, WebSockets, Webhooks, Microservices, Service Mesh, Kubernetes, Authentication, Authorization, TLS, Load Balancing, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
    'microservices',
    'service-mesh',
    'kubernetes',
    'authentication',
    'authorization',
    'tls',
    'load-balancing',
    'observability',
  ],
}

export default grpcKnowledge
