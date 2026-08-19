import type { KnowledgeDefinition } from './knowledge'

export const goKnowledge: KnowledgeDefinition = {
  technologyId: 'go',
  slug: 'go',
  title: 'What is Go?',
  summary:
    'Go, also called Golang, is a compiled programming language designed for simplicity, fast development, efficient execution, concurrency, networking, and scalable backend services.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Go?',
      content:
        'Go is an open-source programming language originally designed at Google. It focuses on simplicity, fast compilation, readable code, built-in concurrency, strong networking support, and reliable deployment of backend and infrastructure software.',
    },
    {
      title: 'Why do we use Go?',
      content:
        'Go is particularly popular for cloud infrastructure, backend services, networking systems, developer tools, and distributed systems. Its simple syntax and efficient runtime make it attractive for teams building high-throughput services without the complexity of larger language ecosystems.',
      highlights: [
        {
          title: 'Simple',
          description:
            'Go intentionally keeps the language relatively small and straightforward.',
        },
        {
          title: 'Fast compilation',
          description:
            'Go is designed to compile applications quickly.',
        },
        {
          title: 'Concurrency',
          description:
            'Go provides language-level primitives that make concurrent programming easier.',
        },
        {
          title: 'Scalable services',
          description:
            'Go is widely used for networked and distributed backend services.',
        },
      ],
    },
    {
      title: 'Compiled Language',
      content:
        'Go source code is compiled into machine-executable code for the target platform. This allows applications to be distributed as relatively self-contained binaries rather than requiring a large language runtime installation.',
      highlights: [
        {
          title: 'Compiler',
          description:
            'A program that translates source code into executable machine-oriented code.',
        },
        {
          title: 'Binary',
          description:
            'The compiled executable produced for a target platform.',
        },
        {
          title: 'Cross-compilation',
          description:
            'Building an executable for a different operating system or CPU architecture.',
        },
      ],
    },
    {
      title: 'Go Syntax and Simplicity',
      content:
        'Go intentionally uses a relatively small language syntax. The design favors readability, explicit behavior, straightforward control flow, and maintainable code over a large number of language features.',
      highlights: [
        {
          title: 'Explicit code',
          description:
            'Go generally favors clear and direct code over implicit complexity.',
        },
        {
          title: 'Formatting',
          description:
            'The Go ecosystem uses standard formatting conventions to keep code consistent.',
        },
        {
          title: 'Maintainability',
          description:
            'Simple language design can make large codebases easier for teams to understand.',
        },
      ],
    },
    {
      title: 'Packages',
      content:
        'Go organizes reusable code into packages. Packages provide boundaries for functionality and allow applications to compose standard-library and application-specific capabilities.',
      highlights: [
        {
          title: 'Package',
          description:
            'A unit of organized and reusable Go code.',
        },
        {
          title: 'Standard library',
          description:
            'The built-in collection of packages provided with Go.',
        },
        {
          title: 'Module',
          description:
            'A versioned collection of Go packages managed through Go modules.',
        },
      ],
    },
    {
      title: 'Go Modules',
      content:
        'Go Modules provide dependency and version management for Go applications. A module defines the project boundary and records dependencies required by the application.',
      highlights: [
        {
          title: 'go.mod',
          description:
            'The file that defines a Go module and its dependency requirements.',
        },
        {
          title: 'Dependency',
          description:
            'External code required by an application.',
        },
        {
          title: 'Versioning',
          description:
            'Managing which versions of external dependencies the application uses.',
        },
      ],
    },
    {
      title: 'Pointers',
      content:
        'Go supports pointers, which allow code to work with the memory address of a value. Go intentionally limits pointer-related complexity compared with lower-level languages while still allowing efficient data manipulation.',
      highlights: [
        {
          title: 'Pointer',
          description:
            'A value that refers to the memory location of another value.',
        },
        {
          title: 'Address',
          description:
            'The location in memory where a value is stored.',
        },
      ],
    },
    {
      title: 'Structs',
      content:
        'Structs allow developers to group related fields into a custom data structure. They are commonly used to represent domain models, API requests, configuration, and application state.',
      highlights: [
        {
          title: 'Struct',
          description:
            'A composite data type containing related fields.',
        },
        {
          title: 'Field',
          description:
            'A named piece of data contained within a struct.',
        },
        {
          title: 'Domain model',
          description:
            'A representation of an important business concept in software.',
        },
      ],
    },
    {
      title: 'Interfaces',
      content:
        'Go interfaces describe behavior rather than concrete implementation. A type satisfies an interface by implementing the required methods. This supports loose coupling and testable architecture.',
      highlights: [
        {
          title: 'Interface',
          description:
            'A contract describing behavior that a type can provide.',
        },
        {
          title: 'Loose coupling',
          description:
            'Designing components so they depend on abstractions rather than specific implementations.',
        },
        {
          title: 'Mock',
          description:
            'A test implementation used to simulate a dependency.',
        },
      ],
    },
    {
      title: 'Error Handling',
      content:
        'Go commonly handles errors explicitly by returning error values from functions. This makes error paths visible in application code and encourages developers to decide how each failure should be handled.',
      highlights: [
        {
          title: 'Error value',
          description:
            'A returned value indicating that an operation failed or encountered an exceptional condition.',
        },
        {
          title: 'Error propagation',
          description:
            'Passing an error to a higher layer when the current layer cannot appropriately handle it.',
        },
        {
          title: 'Failure handling',
          description:
            'The logic used to recover from, report, or safely terminate after an error.',
        },
      ],
    },
    {
      title: 'Goroutines',
      content:
        'A goroutine is a lightweight concurrent execution unit managed by the Go runtime. Goroutines make it practical to run many independent operations concurrently, especially in network services.',
      highlights: [
        {
          title: 'Goroutine',
          description:
            'A lightweight unit of concurrent execution managed by the Go runtime.',
        },
        {
          title: 'Concurrency',
          description:
            'Structuring a system so multiple tasks can make progress during overlapping periods.',
        },
        {
          title: 'Parallelism',
          description:
            'Executing multiple tasks at the same time using multiple processing resources.',
        },
      ],
    },
    {
      title: 'Channels',
      content:
        'Channels provide a mechanism for goroutines to communicate and synchronize. They can transfer values between concurrent operations and help coordinate asynchronous workflows.',
      highlights: [
        {
          title: 'Channel',
          description:
            'A typed communication mechanism used by goroutines to exchange values.',
        },
        {
          title: 'Synchronization',
          description:
            'Coordinating concurrent operations so they interact safely.',
        },
        {
          title: 'Buffered channel',
          description:
            'A channel capable of holding a defined number of values before senders must wait.',
        },
      ],
    },
    {
      title: 'Concurrency Patterns',
      content:
        'Go supports common concurrency patterns such as worker pools, fan-out, fan-in, pipelines, and cancellation. These patterns are useful for scalable services but still require careful handling of resource limits and failures.',
      highlights: [
        {
          title: 'Worker pool',
          description:
            'A fixed or controlled group of workers processing tasks concurrently.',
        },
        {
          title: 'Fan-out',
          description:
            'Distributing work across multiple concurrent workers.',
        },
        {
          title: 'Fan-in',
          description:
            'Combining results from multiple concurrent operations.',
        },
      ],
    },
    {
      title: 'Context and Cancellation',
      content:
        'Go services commonly use context propagation to carry deadlines, cancellation signals, and request-scoped values through call chains. This is especially important when HTTP requests trigger database calls or downstream services.',
      highlights: [
        {
          title: 'Context',
          description:
            'A mechanism for carrying cancellation, deadlines, and request-scoped information.',
        },
        {
          title: 'Deadline',
          description:
            'A time limit after which an operation should stop.',
        },
        {
          title: 'Cancellation',
          description:
            'A signal that ongoing work should stop because it is no longer needed.',
        },
      ],
    },
    {
      title: 'HTTP Services',
      content:
        'Go has strong standard-library support for HTTP servers and clients. This makes it possible to build production APIs without requiring a large web framework.',
      highlights: [
        {
          title: 'HTTP server',
          description:
            'A program that receives and responds to HTTP requests.',
        },
        {
          title: 'HTTP client',
          description:
            'A program component that sends HTTP requests to another service.',
        },
        {
          title: 'Handler',
          description:
            'Code responsible for processing an HTTP request.',
        },
      ],
    },
    {
      title: 'REST APIs',
      content:
        'Go is widely used for REST APIs and backend services. A typical architecture separates HTTP handlers, business services, data repositories, and infrastructure dependencies.',
      highlights: [
        {
          title: 'Handler',
          description:
            'Receives HTTP requests and produces responses.',
        },
        {
          title: 'Service layer',
          description:
            'Contains business logic and coordinates domain operations.',
        },
        {
          title: 'Repository',
          description:
            'Handles persistence or data-access responsibilities.',
        },
      ],
    },
    {
      title: 'JSON APIs',
      content:
        'Go provides standard-library support for encoding and decoding JSON. Struct tags can define how Go fields map to JSON properties used by API clients.',
      highlights: [
        {
          title: 'JSON',
          description:
            'A common structured data representation used for API communication.',
        },
        {
          title: 'Serialization',
          description:
            'Converting application data into a transferable representation.',
        },
        {
          title: 'Deserialization',
          description:
            'Converting an external representation into application data structures.',
        },
      ],
    },
    {
      title: 'Database Access',
      content:
        'Go applications can communicate with relational databases through standard interfaces and database drivers. Production systems should consider transactions, connection pools, query performance, indexes, migrations, and failure handling.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'Software that allows an application to communicate with a specific database technology.',
        },
        {
          title: 'Connection pool',
          description:
            'A managed collection of reusable database connections.',
        },
        {
          title: 'Transaction',
          description:
            'A group of database operations treated as one logical unit.',
        },
      ],
    },
    {
      title: 'Redis and Caching',
      content:
        'Go services can use Redis for caching, distributed locks, rate limiting, queues, and other low-latency workloads. Distributed caches should be designed carefully around expiration, invalidation, consistency, and failure behavior.',
      highlights: [
        {
          title: 'Redis',
          description:
            'An in-memory data platform commonly used for caching and other low-latency workloads.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Determining when cached data must be refreshed or removed.',
        },
        {
          title: 'TTL',
          description:
            'Time To Live, defining how long cached data should remain available.',
        },
      ],
    },
    {
      title: 'Messaging and Event-Driven Systems',
      content:
        'Go is commonly used to build consumers, producers, workers, and stream-processing services around Kafka, RabbitMQ, NATS, and other messaging systems.',
      highlights: [
        {
          title: 'Producer',
          description:
            'A component that publishes messages or events.',
        },
        {
          title: 'Consumer',
          description:
            'A component that receives and processes messages or events.',
        },
        {
          title: 'Message broker',
          description:
            'Infrastructure that receives, stores, and delivers messages between services.',
        },
      ],
    },
    {
      title: 'Kafka Services',
      content:
        'Go is well suited to Kafka-based services because it can efficiently process large numbers of events concurrently. Production designs must consider partitioning, consumer groups, ordering, retries, duplicate processing, backpressure, and graceful shutdown.',
      highlights: [
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
        {
          title: 'Backpressure',
          description:
            'A mechanism for preventing producers from overwhelming downstream consumers.',
        },
      ],
    },
    {
      title: 'Microservices',
      content:
        'Go is frequently used for microservices because small compiled binaries, efficient concurrency, strong networking support, and straightforward deployment work well in distributed environments.',
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
      title: 'gRPC',
      content:
        'Go has strong support for gRPC, a high-performance RPC framework commonly used for service-to-service communication. gRPC uses Protocol Buffers to define service contracts and messages.',
      highlights: [
        {
          title: 'gRPC',
          description:
            'A framework for efficient remote procedure calls between services.',
        },
        {
          title: 'Protocol Buffers',
          description:
            'A compact schema-based format used to define structured messages and service contracts.',
        },
        {
          title: 'Service contract',
          description:
            'A formal definition of operations and data exchanged between services.',
        },
      ],
    },
    {
      title: 'Resilience',
      content:
        'Production Go services must handle timeouts, retries, circuit breaking, rate limits, dependency failures, and partial outages. Because Go services often participate in distributed systems, failure handling should be designed explicitly.',
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
      title: 'Graceful Shutdown',
      content:
        'A production service should stop accepting new work, finish or safely cancel in-flight work, close resources, and exit cleanly when it receives a shutdown signal. This prevents dropped requests and corrupted workflows during deployments.',
      highlights: [
        {
          title: 'Graceful shutdown',
          description:
            'A controlled service termination process that safely handles active work.',
        },
        {
          title: 'In-flight request',
          description:
            'A request currently being processed by a service.',
        },
        {
          title: 'Drain',
          description:
            'Allowing existing work to finish before terminating a service instance.',
        },
      ],
    },
    {
      title: 'Go and Cloud Infrastructure',
      content:
        'Go is heavily used in cloud-native infrastructure, networking, orchestration, developer tooling, and platform services. Its small binaries and efficient execution model work well in containerized environments.',
      highlights: [
        {
          title: 'Cloud-native',
          description:
            'Designing applications around containers, automation, distributed services, and elastic infrastructure.',
        },
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
      ],
    },
    {
      title: 'Go and AI Applications',
      content:
        'Go can serve as a high-performance service layer around AI systems. It can manage APIs, concurrency, authentication, model-provider calls, streaming responses, queues, usage tracking, and integration with AI infrastructure.',
      highlights: [
        {
          title: 'AI backend',
          description:
            'Backend infrastructure coordinating AI product functionality.',
        },
        {
          title: 'Model provider',
          description:
            'An internal or external service that provides an AI model.',
        },
        {
          title: 'Streaming',
          description:
            'Sending partial results progressively instead of waiting for the complete response.',
        },
      ],
    },
    {
      title: 'Go and RAG',
      content:
        'Go can provide APIs and high-throughput orchestration around RAG systems. It can manage document workflows, retrieval requests, permissions, metadata, model-provider integrations, and concurrent request processing.',
      highlights: [
        {
          title: 'RAG',
          description:
            'Retrieval-Augmented Generation combines retrieval with language-model generation.',
        },
        {
          title: 'Retrieval',
          description:
            'Finding relevant information from an external knowledge source.',
        },
        {
          title: 'Vector search',
          description:
            'Searching vector representations for semantically relevant information.',
        },
      ],
    },
    {
      title: 'Go and AI Agents',
      content:
        'Go can be used as a reliable service layer around AI agents, particularly when many concurrent tool calls, API requests, streaming connections, or event-driven workflows must be handled efficiently.',
      highlights: [
        {
          title: 'Agent',
          description:
            'An AI-driven system capable of reasoning over tasks and using controlled tools.',
        },
        {
          title: 'Tool call',
          description:
            'An invocation of an external capability by an AI system.',
        },
        {
          title: 'Orchestration',
          description:
            'Coordinating multiple steps, services, tools, and model calls into a workflow.',
        },
      ],
    },
    {
      title: 'Observability',
      content:
        'Production Go services should expose structured logs, metrics, traces, health checks, request correlation, and runtime information. Observability helps teams identify latency, failures, resource pressure, and distributed-system problems.',
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
      ],
    },
    {
      title: 'Testing Go Services',
      content:
        'Go includes strong standard-library support for testing. Production services should combine unit tests, integration tests, API tests, contract tests, load tests, and end-to-end tests where appropriate.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small piece of logic in isolation.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interactions between components and dependencies.',
        },
        {
          title: 'Load test',
          description:
            'Tests system behavior under expected or high traffic levels.',
        },
      ],
    },
    {
      title: 'Performance and Scalability',
      content:
        'Go services can scale horizontally behind load balancers. Performance work should consider goroutine usage, memory allocation, network latency, database access, downstream dependencies, queues, and CPU utilization.',
      highlights: [
        {
          title: 'Horizontal scaling',
          description:
            'Running multiple service instances to distribute workload.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work processed during a given period.',
        },
        {
          title: 'Latency',
          description:
            'The time required to complete an operation or request.',
        },
      ],
    },
    {
      title: 'Security Best Practices',
      content:
        'Production Go services should implement strong authentication and authorization, TLS, input validation, secure secret management, dependency scanning, rate limiting, audit logging, and least-privilege access.',
      highlights: [
        {
          title: 'TLS',
          description:
            'A protocol family used to protect data in transit.',
        },
        {
          title: 'Secret management',
          description:
            'Secure storage and controlled access to sensitive credentials.',
        },
        {
          title: 'Least privilege',
          description:
            'Granting only the permissions required for a task.',
        },
      ],
    },
    {
      title: 'Go for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important Go concepts are service architecture, concurrency, API design, distributed systems, messaging, resilience, observability, deployment, performance, and AI integration. The goal is architectural understanding rather than memorizing Go syntax.',
    },
    {
      title: 'Common Go Mistakes',
      content:
        'Common mistakes include uncontrolled goroutine creation, leaked goroutines, missing timeouts, incorrect error handling, unsafe concurrent access, unbounded queues, excessive service fragmentation, and scaling compute without addressing database or downstream bottlenecks.',
      highlights: [
        {
          title: 'Goroutine leak',
          description:
            'A goroutine that remains active unnecessarily and consumes resources.',
        },
        {
          title: 'Race condition',
          description:
            'A bug caused by concurrent operations accessing shared state without safe synchronization.',
        },
        {
          title: 'Unbounded concurrency',
          description:
            'Allowing concurrent work to grow without a controlled limit.',
        },
      ],
    },
    {
      title: 'Explore Go in EDDUU',
      content:
        'EDDUU connects Go with REST APIs, gRPC, WebSockets, Kafka, RabbitMQ, NATS, Redis, microservices, cloud infrastructure, Kubernetes, distributed systems, AI, RAG, agents, and observability.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'grpc',
    'websockets',
    'kafka',
    'rabbitmq',
    'nats',
    'redis',
    'rag',
    'agents',
  ],
}

export default goKnowledge
