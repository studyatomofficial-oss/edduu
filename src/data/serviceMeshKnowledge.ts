import type { KnowledgeDefinition } from './knowledge'

export const serviceMeshKnowledge: KnowledgeDefinition = {
  technologyId: 'service-mesh',
  slug: 'service-mesh',
  title: 'What is a Service Mesh?',
  summary:
    'A Service Mesh is a dedicated infrastructure layer that manages service-to-service communication in distributed applications, providing capabilities such as traffic management, service identity, encryption, resilience, and observability without requiring every service to implement these capabilities independently.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is a Service Mesh?',
      content:
        'A Service Mesh is an infrastructure layer that manages communication between services in a distributed system. Instead of implementing networking, security, retries, traffic policies, and communication telemetry separately inside every application, a service mesh provides these capabilities through infrastructure components that sit alongside or around application workloads.',
    },
    {
      title: 'Why do we need a Service Mesh?',
      content:
        'As a system grows into many microservices, service-to-service communication becomes complex. Services need to discover one another, establish secure connections, handle failures, route traffic, collect telemetry, and enforce communication policies. Without a service mesh, these capabilities can become duplicated across many applications. A service mesh centralizes or standardizes these communication concerns at the infrastructure layer.',
    },
    {
      title: 'How does a Service Mesh work?',
      content:
        'A service mesh typically introduces a data plane that handles service traffic and a control plane that configures and manages the communication policies. In many architectures, a proxy runs alongside each workload. Application traffic is intercepted by the proxy, which can apply routing, security, retries, timeouts, telemetry, and other communication policies before forwarding traffic to another service.',
      highlights: [
        {
          title: 'Data plane',
          description:
            'The runtime layer that handles actual service-to-service traffic.',
        },
        {
          title: 'Control plane',
          description:
            'The management layer that distributes configuration and policies to the data plane.',
        },
        {
          title: 'Sidecar proxy',
          description:
            'A proxy deployed alongside an application workload to handle service communication.',
        },
        {
          title: 'Service-to-service traffic',
          description:
            'Communication between internal application services in a distributed system.',
        },
        {
          title: 'Policy',
          description:
            'A defined rule controlling how service communication should behave.',
        },
      ],
    },
    {
      title: 'Service Mesh Data Plane vs Control Plane',
      content:
        'The data plane performs the real-time work of processing service traffic, while the control plane manages configuration, policies, service discovery information, certificates, and other control information. Separating these responsibilities allows communication behavior to be managed consistently across many workloads.',
      highlights: [
        {
          title: 'Data plane',
          description:
            'Handles request forwarding, traffic policies, encryption, retries, timeouts, and telemetry.',
        },
        {
          title: 'Control plane',
          description:
            'Manages configuration and communicates desired policies to the data plane.',
        },
        {
          title: 'Configuration',
          description:
            'Defines how service communication should be routed, secured, and observed.',
        },
        {
          title: 'Desired state',
          description:
            'The intended communication and security configuration that the system should maintain.',
        },
      ],
    },
    {
      title: 'Service Mesh and Sidecar Proxies',
      content:
        'A common service mesh architecture deploys a proxy alongside each application instance. The application sends service traffic through the local proxy, and the proxy communicates with the destination proxy. This allows the infrastructure layer to apply communication policies without requiring the application to implement every networking capability itself.',
      highlights: [
        {
          title: 'Sidecar',
          description:
            'A supporting process or container deployed alongside an application workload.',
        },
        {
          title: 'Proxy',
          description:
            'A component that receives and forwards network requests according to configured policies.',
        },
        {
          title: 'Inbound traffic',
          description:
            'Traffic entering a service through its communication boundary.',
        },
        {
          title: 'Outbound traffic',
          description:
            'Traffic leaving a service toward another service or destination.',
        },
      ],
    },
    {
      title: 'Service Mesh and Service Discovery',
      content:
        'Distributed services need a reliable way to locate other services. A service mesh can integrate with service discovery systems and use that information to route requests to healthy service instances. This reduces the need for applications to maintain their own service-location logic.',
      highlights: [
        {
          title: 'Service discovery',
          description:
            'The process of finding available instances of a service.',
        },
        {
          title: 'Service registry',
          description:
            'A system that maintains information about available services and their instances.',
        },
        {
          title: 'Endpoint',
          description:
            'A network location at which a service can receive requests.',
        },
        {
          title: 'Health-aware routing',
          description:
            'Routes traffic using information about service availability or health.',
        },
      ],
    },
    {
      title: 'Service Mesh and Traffic Management',
      content:
        'A service mesh can control how requests flow between services. Traffic policies can support retries, timeouts, load balancing, traffic splitting, canary deployments, fault injection, and controlled routing. These capabilities are particularly useful in microservices environments where services are independently deployed.',
      highlights: [
        {
          title: 'Traffic splitting',
          description:
            'Divides requests between multiple service versions or destinations according to a defined policy.',
        },
        {
          title: 'Canary deployment',
          description:
            'Gradually sends a portion of production traffic to a new version before wider rollout.',
        },
        {
          title: 'Weighted routing',
          description:
            'Routes traffic according to configured percentages or weights.',
        },
        {
          title: 'Load balancing',
          description:
            'Distributes requests across available service instances.',
        },
      ],
    },
    {
      title: 'Service Mesh and Retries',
      content:
        'Retries can improve resilience when failures are temporary, but uncontrolled retries can make an outage worse by creating additional traffic against an already unhealthy dependency. Service mesh policies can standardize retry behavior, but teams must understand idempotency, retry budgets, backoff, and failure modes.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Attempts a failed request again according to a defined policy.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Increases the waiting interval between repeated retry attempts.',
        },
        {
          title: 'Idempotency',
          description:
            'A property where repeating an operation produces the same intended result as performing it once.',
        },
        {
          title: 'Retry storm',
          description:
            'A situation where many retries create additional load and worsen an existing failure.',
        },
      ],
    },
    {
      title: 'Service Mesh and Timeouts',
      content:
        'Timeouts prevent a service from waiting indefinitely for a dependency. Service mesh policies can apply consistent timeout behavior across service communication. Proper timeout design helps bound latency and prevents blocked requests from consuming resources indefinitely.',
      highlights: [
        {
          title: 'Request timeout',
          description:
            'The maximum amount of time allowed for a request or downstream operation.',
        },
        {
          title: 'Deadline',
          description:
            'A time boundary by which an operation should complete.',
        },
        {
          title: 'Timeout budget',
          description:
            'The amount of time allocated to an operation while preserving acceptable end-to-end latency.',
        },
        {
          title: 'Cascading failure',
          description:
            'A failure in one component that causes dependent components to become overloaded or fail as well.',
        },
      ],
    },
    {
      title: 'Service Mesh and Circuit Breaking',
      content:
        'Circuit breaking prevents requests from continuously reaching an unhealthy dependency. When failure conditions exceed configured thresholds, the circuit can temporarily stop sending traffic to the dependency and allow it time to recover. This can help limit cascading failures.',
      highlights: [
        {
          title: 'Circuit breaker',
          description:
            'A resilience mechanism that temporarily blocks traffic to an unhealthy dependency.',
        },
        {
          title: 'Open circuit',
          description:
            'The state where requests are prevented from reaching the unhealthy dependency.',
        },
        {
          title: 'Half-open state',
          description:
            'A recovery-testing state where a limited amount of traffic is allowed to determine whether the dependency has recovered.',
        },
        {
          title: 'Failure threshold',
          description:
            'A configured condition used to determine when circuit-breaking behavior should activate.',
        },
      ],
    },
    {
      title: 'Service Mesh and mTLS',
      content:
        'Mutual TLS, or mTLS, allows both sides of a service connection to authenticate each other while encrypting communication. A service mesh can automate certificate issuance, distribution, rotation, and enforcement of encrypted service-to-service communication.',
      highlights: [
        {
          title: 'mTLS',
          description:
            'Mutual Transport Layer Security authenticates both communicating parties and encrypts the connection.',
        },
        {
          title: 'Workload identity',
          description:
            'An identity representing a running service or workload.',
        },
        {
          title: 'Certificate',
          description:
            'A cryptographic credential used to establish identity and secure communication.',
        },
        {
          title: 'Certificate rotation',
          description:
            'The controlled replacement of certificates before or after they expire.',
        },
      ],
    },
    {
      title: 'Service Mesh and Zero Trust',
      content:
        'A service mesh can support Zero Trust principles for internal service communication by providing workload identities, encrypted communication, authorization policies, and traffic visibility. The mesh should not be treated as the entire Zero Trust architecture; identity, application, data, and broader security controls remain important.',
      highlights: [
        {
          title: 'Workload verification',
          description:
            'Establishes the identity of a service before allowing communication.',
        },
        {
          title: 'Service authorization',
          description:
            'Controls which services are allowed to communicate with particular destinations.',
        },
        {
          title: 'Encrypted service traffic',
          description:
            'Protects service-to-service communication against unauthorized observation or modification.',
        },
        {
          title: 'Least privilege',
          description:
            'Limits service communication to only the destinations and operations that are required.',
        },
      ],
    },
    {
      title: 'Service Mesh and Observability',
      content:
        'Service meshes can provide consistent telemetry across distributed services. Metrics, logs, and distributed traces help teams understand request latency, error rates, service dependencies, traffic patterns, and failures without requiring every application team to build all communication-level telemetry independently.',
      highlights: [
        {
          title: 'Service metrics',
          description:
            'Measurements such as request volume, latency, error rates, and resource-related communication behavior.',
        },
        {
          title: 'Distributed tracing',
          description:
            'Tracks a request as it travels across multiple services.',
        },
        {
          title: 'Service dependency graph',
          description:
            'Represents relationships between services based on communication patterns.',
        },
        {
          title: 'Golden signals',
          description:
            'Common operational signals such as latency, traffic, errors, and saturation used to understand service health.',
        },
      ],
    },
    {
      title: 'Service Mesh and Failure Injection',
      content:
        'A service mesh can support controlled fault injection for resilience testing. Teams can intentionally introduce delays, errors, or traffic conditions in a controlled environment to determine whether distributed systems handle failures as expected.',
      highlights: [
        {
          title: 'Fault injection',
          description:
            'Intentionally introduces controlled failures or delays to test system resilience.',
        },
        {
          title: 'Latency injection',
          description:
            'Adds controlled delay to requests to test timeout and resilience behavior.',
        },
        {
          title: 'Error injection',
          description:
            'Introduces controlled failures to evaluate service behavior and recovery.',
        },
        {
          title: 'Resilience testing',
          description:
            'Evaluates whether a system remains reliable under expected failure scenarios.',
        },
      ],
    },
    {
      title: 'Service Mesh and Kubernetes',
      content:
        'Service meshes are commonly associated with Kubernetes because Kubernetes provides a dynamic environment containing many independently deployed workloads. A mesh can integrate with Kubernetes networking, service discovery, workloads, and deployment mechanisms to apply communication policies consistently.',
      highlights: [
        {
          title: 'Kubernetes Service',
          description:
            'Provides a stable networking abstraction for reaching Kubernetes workloads.',
        },
        {
          title: 'Pod',
          description:
            'The basic deployable execution unit in Kubernetes that can contain one or more containers.',
        },
        {
          title: 'Namespace',
          description:
            'A Kubernetes isolation and organizational boundary for resources.',
        },
        {
          title: 'Ingress',
          description:
            'A mechanism for controlling external HTTP or HTTPS access to Kubernetes services.',
        },
      ],
    },
    {
      title: 'Service Mesh vs API Gateway',
      content:
        'An API Gateway primarily manages external or north-south API traffic entering or leaving a platform. A Service Mesh primarily manages internal or east-west traffic between services. They can work together: the gateway can provide the external API boundary while the service mesh manages communication among internal workloads.',
      highlights: [
        {
          title: 'North-south traffic',
          description:
            'Traffic entering or leaving the application platform.',
        },
        {
          title: 'East-west traffic',
          description:
            'Traffic between internal services and workloads.',
        },
        {
          title: 'API Gateway',
          description:
            'Provides external API routing, authentication, rate limiting, and API-level policy enforcement.',
        },
        {
          title: 'Service Mesh',
          description:
            'Provides internal service communication management, identity, encryption, resilience, and observability.',
        },
      ],
    },
    {
      title: 'Service Mesh and Event-Driven Systems',
      content:
        'A service mesh primarily manages synchronous or request-oriented service communication, while event-driven systems use brokers and asynchronous messaging. A mesh can still secure and observe communication between services and messaging infrastructure, but it does not replace event brokers such as Kafka, RabbitMQ, Pulsar, or NATS.',
      highlights: [
        {
          title: 'Synchronous communication',
          description:
            'A caller sends a request and generally waits for a response.',
        },
        {
          title: 'Asynchronous communication',
          description:
            'A producer sends a message or event without requiring an immediate response from the consumer.',
        },
        {
          title: 'Message broker',
          description:
            'Infrastructure that receives, stores, routes, and delivers messages between producers and consumers.',
        },
        {
          title: 'Event',
          description:
            'A record of something that happened in a system that may be consumed by other components.',
        },
      ],
    },
    {
      title: 'Service Mesh in AI Systems',
      content:
        'AI platforms increasingly contain multiple services for model routing, retrieval, embedding generation, inference, tool execution, evaluation, and agent workflows. A service mesh can provide consistent identity, encryption, routing, observability, and resilience across these internal AI services.',
      highlights: [
        {
          title: 'Model service',
          description:
            'A service responsible for serving or interacting with an AI model.',
        },
        {
          title: 'Inference service',
          description:
            'A service that executes model inference for application requests.',
        },
        {
          title: 'Tool service',
          description:
            'A backend service that provides a capability an AI workflow or agent can invoke.',
        },
        {
          title: 'AI service identity',
          description:
            'An identity used to authenticate and authorize communication between AI workloads.',
        },
      ],
    },
    {
      title: 'Service Mesh in production',
      content:
        'A production service mesh introduces an additional infrastructure layer and therefore requires careful capacity planning, configuration management, upgrades, observability, security controls, and operational ownership. Teams should adopt it when its benefits justify the additional operational complexity.',
      highlights: [
        {
          title: 'Mesh overhead',
          description:
            'Additional CPU, memory, network, and operational complexity introduced by mesh components.',
        },
        {
          title: 'Control plane availability',
          description:
            'The ability of the management layer to remain operational and distribute required configuration.',
        },
        {
          title: 'Proxy lifecycle',
          description:
            'Management of proxy deployment, upgrades, configuration, and compatibility with application workloads.',
        },
        {
          title: 'Operational maturity',
          description:
            'The organization’s ability to operate, monitor, troubleshoot, and evolve the service mesh reliably.',
        },
      ],
    },
    {
      title: 'When should you use a Service Mesh?',
      content:
        'A service mesh is most useful when an organization has enough distributed service communication complexity to justify a dedicated infrastructure layer. Teams should evaluate service count, security requirements, traffic-management needs, observability requirements, platform maturity, operational cost, and the complexity of alternative approaches before adopting one.',
      highlights: [
        {
          title: 'Use case fit',
          description:
            'The degree to which service-to-service communication problems justify adopting mesh capabilities.',
        },
        {
          title: 'Operational cost',
          description:
            'The engineering effort and infrastructure resources required to operate the mesh.',
        },
        {
          title: 'Security requirement',
          description:
            'The need for consistent workload identity, encrypted communication, or service-level authorization.',
        },
        {
          title: 'Traffic complexity',
          description:
            'The complexity of routing, retries, failover, canary releases, and other service communication requirements.',
        },
      ],
    },
    {
      title: 'Common Service Mesh mistakes',
      content:
        'Common mistakes include adopting a service mesh too early, treating it as a replacement for application security, enabling retries without understanding idempotency, creating overly complex routing policies, ignoring proxy overhead, and failing to build operational expertise before deploying the mesh broadly.',
      highlights: [
        {
          title: 'Premature adoption',
          description:
            'Introducing a service mesh before the organization has a clear need for its capabilities.',
        },
        {
          title: 'Retry misuse',
          description:
            'Applying automatic retries without considering idempotency, load, and failure behavior.',
        },
        {
          title: 'Policy complexity',
          description:
            'Creating communication rules that are difficult to understand, test, and maintain.',
        },
        {
          title: 'Ignoring overhead',
          description:
            'Failing to account for proxy resource usage, latency, and operational complexity.',
        },
        {
          title: 'No operational readiness',
          description:
            'Deploying a mesh without sufficient monitoring, troubleshooting practices, ownership, and training.',
        },
      ],
    },
    {
      title: 'Explore Service Mesh in EDDUU',
      content:
        'EDDUU connects Service Mesh with API Gateway, REST APIs, gRPC, Kubernetes, Security, Zero Trust, mTLS, Observability, Kafka, RabbitMQ, Pulsar, NATS, and Event-Driven Architecture.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'rest-apis',
    'grpc',
    'security',
    'zero-trust',
    'tls',
    'observability',
    'kafka',
    'rabbitmq',
    'pulsar',
    'nats',
    'event-driven-architecture',
  ],
}

export default serviceMeshKnowledge
