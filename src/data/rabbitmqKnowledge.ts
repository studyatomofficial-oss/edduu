import type { KnowledgeDefinition } from './knowledge'

export const rabbitmqKnowledge: KnowledgeDefinition = {
  technologyId: 'rabbitmq',
  slug: 'rabbitmq',
  title: 'What is RabbitMQ?',
  summary:
    'RabbitMQ is a message broker that enables applications and services to communicate asynchronously by receiving, routing, storing, and delivering messages through queues and exchanges.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is RabbitMQ?',
      content:
        'RabbitMQ is a message broker used to exchange messages between applications and services. A producer sends a message to RabbitMQ, RabbitMQ routes the message according to configured rules, and one or more consumers receive and process it. This allows services to communicate asynchronously without requiring the producer and consumer to be available at exactly the same time.',
    },
    {
      title: 'Why do we need RabbitMQ?',
      content:
        'Direct service-to-service communication creates tight dependencies between applications. If the receiving service is slow or temporarily unavailable, the sending service may also be affected. RabbitMQ introduces a messaging layer that can buffer work, decouple producers from consumers, distribute processing, and provide reliable delivery patterns.',
    },
    {
      title: 'How does RabbitMQ work?',
      content:
        'A producer publishes a message to an exchange. The exchange evaluates its routing rules and sends the message to one or more queues. Consumers subscribe to queues and process the messages. After successful processing, the consumer can acknowledge the message so RabbitMQ knows it has been handled.',
      highlights: [
        {
          title: 'Producer',
          description:
            'An application or service that publishes messages to RabbitMQ.',
        },
        {
          title: 'Exchange',
          description:
            'A RabbitMQ component that receives messages and routes them to queues according to bindings and routing rules.',
        },
        {
          title: 'Queue',
          description:
            'A buffer that stores messages until consumers process them.',
        },
        {
          title: 'Consumer',
          description:
            'An application or service that receives and processes messages from a queue.',
        },
        {
          title: 'Acknowledgement',
          description:
            'A confirmation from a consumer indicating that a message has been successfully processed according to the consumer workflow.',
        },
      ],
    },
    {
      title: 'RabbitMQ Exchanges',
      content:
        'Exchanges are central to RabbitMQ routing. Producers normally publish messages to an exchange rather than directly to a queue. The exchange uses its configured type, bindings, and routing information to determine which queues should receive the message.',
      highlights: [
        {
          title: 'Direct exchange',
          description:
            'Routes messages using an exact routing-key match.',
        },
        {
          title: 'Topic exchange',
          description:
            'Routes messages using pattern-based routing keys.',
        },
        {
          title: 'Fanout exchange',
          description:
            'Broadcasts messages to queues bound to the exchange.',
        },
        {
          title: 'Headers exchange',
          description:
            'Routes messages based on message header attributes rather than routing keys.',
        },
      ],
    },
    {
      title: 'RabbitMQ Queues',
      content:
        'Queues provide temporary or durable storage for messages waiting to be consumed. Queue configuration determines properties such as durability, exclusivity, expiration, and other operational behavior. Consumers retrieve messages from queues and acknowledge them after processing.',
      highlights: [
        {
          title: 'Queue',
          description:
            'A message buffer from which consumers receive messages.',
        },
        {
          title: 'Durable queue',
          description:
            'A queue configured to survive broker restart under appropriate persistence conditions.',
        },
        {
          title: 'Temporary queue',
          description:
            'A queue intended for short-lived communication and typically associated with a limited lifecycle.',
        },
        {
          title: 'Queue depth',
          description:
            'The number of messages waiting to be processed by consumers.',
        },
      ],
    },
    {
      title: 'RabbitMQ Routing Keys and Bindings',
      content:
        'RabbitMQ uses bindings to connect exchanges to queues. Routing keys provide information used by exchange types to determine where messages should go. This allows applications to build flexible routing patterns without requiring producers to know the exact consumer queue.',
      highlights: [
        {
          title: 'Routing key',
          description:
            'A value used by supported exchange types to determine message routing.',
        },
        {
          title: 'Binding',
          description:
            'A relationship connecting an exchange to a queue with routing conditions.',
        },
        {
          title: 'Routing rule',
          description:
            'A condition that determines whether a message should be delivered to a particular queue.',
        },
        {
          title: 'Pattern routing',
          description:
            'Uses routing-key patterns to deliver messages to matching destinations.',
        },
      ],
    },
    {
      title: 'RabbitMQ Acknowledgements',
      content:
        'Acknowledgements allow consumers to tell RabbitMQ whether a message has been successfully handled. If a consumer fails before acknowledging a message, RabbitMQ can make the message available for another delivery according to the configured behavior.',
      highlights: [
        {
          title: 'ACK',
          description:
            'Acknowledges successful processing of a message.',
        },
        {
          title: 'NACK',
          description:
            'Indicates that a message was not successfully processed.',
        },
        {
          title: 'Reject',
          description:
            'Rejects a specific message according to the consumer’s handling policy.',
        },
        {
          title: 'Redelivery',
          description:
            'Makes a message available for another processing attempt when configured to do so.',
        },
      ],
    },
    {
      title: 'RabbitMQ Message Durability',
      content:
        'Reliable messaging requires considering both queue durability and message persistence. A durable queue can survive broker restart, while persistent messages are stored in a way intended to survive appropriate broker failures. These settings must be designed together with the required delivery guarantees.',
      highlights: [
        {
          title: 'Durable queue',
          description:
            'A queue configured to persist its definition across broker restarts.',
        },
        {
          title: 'Persistent message',
          description:
            'A message configured for durable storage behavior.',
        },
        {
          title: 'Delivery guarantee',
          description:
            'The expected level of confidence that a message will reach processing according to the system design.',
        },
        {
          title: 'Durability trade-off',
          description:
            'The balance between stronger persistence and the additional storage and performance cost it may introduce.',
        },
      ],
    },
    {
      title: 'RabbitMQ Prefetch and Fair Dispatch',
      content:
        'Consumers may process messages at different speeds. RabbitMQ prefetch settings can limit how many unacknowledged messages are delivered to a consumer at once. This can help prevent a fast producer from overwhelming a slower consumer and can improve work distribution among consumers.',
      highlights: [
        {
          title: 'Prefetch',
          description:
            'Controls the number of messages that can be delivered to a consumer without acknowledgement.',
        },
        {
          title: 'Fair dispatch',
          description:
            'Aims to distribute work more appropriately among consumers based on their ability to process messages.',
        },
        {
          title: 'Unacknowledged messages',
          description:
            'Messages delivered to consumers that have not yet received a successful acknowledgement.',
        },
        {
          title: 'Consumer capacity',
          description:
            'The amount of work a consumer can process reliably within a given period.',
        },
      ],
    },
    {
      title: 'RabbitMQ Work Queues',
      content:
        'A work-queue pattern distributes tasks among multiple workers. A producer publishes tasks and multiple consumers process them. Each task is generally handled by one worker, making this pattern useful for background jobs, asynchronous processing, document generation, notifications, and other workloads.',
      highlights: [
        {
          title: 'Work queue',
          description:
            'A queue used to distribute units of work among multiple consumers.',
        },
        {
          title: 'Worker',
          description:
            'A consumer responsible for processing a task from a queue.',
        },
        {
          title: 'Task distribution',
          description:
            'The process of distributing queued work across available consumers.',
        },
        {
          title: 'Background processing',
          description:
            'Executing work asynchronously outside the main request-response path.',
        },
      ],
    },
    {
      title: 'RabbitMQ Publish/Subscribe',
      content:
        'RabbitMQ can implement publish/subscribe patterns where a producer publishes a message and multiple consumers receive their own copy. Fanout exchanges are commonly used for broadcasting events to multiple queues.',
      highlights: [
        {
          title: 'Publish',
          description:
            'Sends a message to an exchange.',
        },
        {
          title: 'Subscribe',
          description:
            'Connects a consumer to a queue so it can receive relevant messages.',
        },
        {
          title: 'Broadcast',
          description:
            'Delivers a message to multiple destinations.',
        },
        {
          title: 'Independent consumers',
          description:
            'Multiple consumers can process the same published event for different purposes.',
        },
      ],
    },
    {
      title: 'RabbitMQ Dead Letter Exchanges',
      content:
        'A dead-letter mechanism allows messages that cannot be successfully processed to be redirected to another exchange or queue. This prevents repeatedly failing messages from blocking normal processing and provides a place where failed messages can be inspected or handled separately.',
      highlights: [
        {
          title: 'Dead letter exchange',
          description:
            'An exchange used to route messages that meet configured dead-letter conditions.',
        },
        {
          title: 'Dead letter queue',
          description:
            'A queue used to hold messages that could not be processed normally.',
        },
        {
          title: 'Poison message',
          description:
            'A message that repeatedly causes processing failures.',
        },
        {
          title: 'Failure isolation',
          description:
            'Separates repeatedly failing messages from the normal processing path.',
        },
      ],
    },
    {
      title: 'RabbitMQ Retry Patterns',
      content:
        'Retry mechanisms allow failed work to be attempted again. A good retry strategy should distinguish temporary failures from permanent failures and should prevent endless rapid retries. Delayed retry, backoff, and dead-letter patterns are commonly used to build controlled recovery workflows.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Attempts processing again after a failure.',
        },
        {
          title: 'Backoff',
          description:
            'Introduces increasing or controlled delays between retry attempts.',
        },
        {
          title: 'Retry queue',
          description:
            'A queue used to temporarily hold messages before another processing attempt.',
        },
        {
          title: 'Permanent failure',
          description:
            'A failure that is unlikely to succeed through repeated attempts without changing the underlying condition.',
        },
      ],
    },
    {
      title: 'RabbitMQ and Event-Driven Architecture',
      content:
        'RabbitMQ can support event-driven architectures by allowing services to publish events and other services to consume them asynchronously. The broker provides routing and delivery mechanisms while allowing producers and consumers to remain relatively decoupled.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record describing something that happened in a system.',
        },
        {
          title: 'Event producer',
          description:
            'A service that publishes an event when a meaningful state change occurs.',
        },
        {
          title: 'Event consumer',
          description:
            'A service that reacts to an event and performs corresponding work.',
        },
        {
          title: 'Loose coupling',
          description:
            'Reduces direct dependency between communicating services.',
        },
      ],
    },
    {
      title: 'RabbitMQ vs Apache Kafka',
      content:
        'RabbitMQ and Kafka can both support asynchronous architectures, but they are optimized around different messaging models. RabbitMQ is a message broker centered around exchanges, queues, routing, acknowledgements, and flexible delivery patterns. Kafka is a distributed event streaming platform centered around durable partitioned logs, consumer offsets, replay, and high-throughput streaming. The correct choice depends on the workload.',
      highlights: [
        {
          title: 'RabbitMQ',
          description:
            'Strong fit for routing-oriented messaging, work queues, task distribution, and flexible delivery patterns.',
        },
        {
          title: 'Kafka',
          description:
            'Strong fit for high-throughput event streaming, durable event logs, replay, and stream-processing architectures.',
        },
        {
          title: 'Queue-oriented processing',
          description:
            'A messaging model where consumers receive and process work from queues.',
        },
        {
          title: 'Event-stream processing',
          description:
            'Processes durable streams of events that can be consumed and replayed according to consumer position.',
        },
      ],
    },
    {
      title: 'RabbitMQ and Microservices',
      content:
        'RabbitMQ is frequently used to decouple microservices. Instead of directly calling another service for every asynchronous operation, a service can publish a message and allow a consumer to process it independently. This can improve resilience and reduce synchronous dependencies.',
      highlights: [
        {
          title: 'Service decoupling',
          description:
            'Reduces direct runtime dependency between services.',
        },
        {
          title: 'Asynchronous workflow',
          description:
            'Allows work to continue independently of the original request.',
        },
        {
          title: 'Task queue',
          description:
            'Stores work until an available consumer processes it.',
        },
        {
          title: 'Service integration',
          description:
            'Connects independently deployed services through defined messaging contracts.',
        },
      ],
    },
    {
      title: 'RabbitMQ and APIs',
      content:
        'RabbitMQ commonly complements REST, GraphQL, gRPC, and other synchronous APIs. An API can accept a request and publish a message to RabbitMQ for asynchronous processing, allowing the client-facing request to remain responsive while background work proceeds.',
      highlights: [
        {
          title: 'Synchronous API',
          description:
            'A request-response interface where the caller generally waits for a response.',
        },
        {
          title: 'Asynchronous API workflow',
          description:
            'Accepts work and processes it separately from the initial client request.',
        },
        {
          title: 'Job submission',
          description:
            'Creates a unit of background work that can be processed by consumers.',
        },
        {
          title: 'Completion event',
          description:
            'An event indicating that previously submitted work has completed or reached an important state.',
        },
      ],
    },
    {
      title: 'RabbitMQ Security',
      content:
        'Production RabbitMQ environments require authentication, authorization, encrypted communication where appropriate, controlled administrative access, credential management, and monitoring. Virtual hosts and permissions can help isolate messaging resources and limit access.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a RabbitMQ client or administrator.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which users or applications can access messaging resources.',
        },
        {
          title: 'Virtual host',
          description:
            'A logical RabbitMQ namespace used to isolate exchanges, queues, bindings, and permissions.',
        },
        {
          title: 'TLS',
          description:
            'Protects RabbitMQ communication through encrypted network connections.',
        },
      ],
    },
    {
      title: 'RabbitMQ Reliability',
      content:
        'Reliable RabbitMQ systems require appropriate acknowledgements, durable queues, persistent messages where needed, dead-letter handling, retry strategies, monitoring, capacity planning, and failure recovery. Reliability requirements should be defined according to business impact rather than assuming every message requires identical guarantees.',
      highlights: [
        {
          title: 'Acknowledgement strategy',
          description:
            'Defines when a consumer confirms successful processing.',
        },
        {
          title: 'Failure recovery',
          description:
            'Defines how the system responds when consumers, brokers, or dependencies fail.',
        },
        {
          title: 'Queue durability',
          description:
            'Helps preserve queue definitions across appropriate broker restarts.',
        },
        {
          title: 'Monitoring',
          description:
            'Tracks queue depth, consumer health, message rates, failures, and broker behavior.',
        },
      ],
    },
    {
      title: 'RabbitMQ Scaling',
      content:
        'RabbitMQ can scale through additional consumers, appropriate queue and exchange design, clustering, and workload distribution. Scaling decisions should consider queue behavior, message rates, consumer capacity, ordering requirements, and the operational characteristics of the deployment.',
      highlights: [
        {
          title: 'Consumer scaling',
          description:
            'Adds workers to increase processing capacity for suitable workloads.',
        },
        {
          title: 'Cluster',
          description:
            'A group of RabbitMQ nodes operating together.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of messaging work processed over time.',
        },
        {
          title: 'Bottleneck',
          description:
            'A component or constraint that limits overall messaging performance.',
        },
      ],
    },
    {
      title: 'RabbitMQ in AI Systems',
      content:
        'RabbitMQ can support AI applications by distributing asynchronous jobs such as document processing, embedding generation, inference requests, notification workflows, evaluation tasks, and agent tool execution. It can help prevent expensive AI workloads from blocking user-facing API requests.',
      highlights: [
        {
          title: 'AI job queue',
          description:
            'A queue containing asynchronous AI processing tasks.',
        },
        {
          title: 'Document processing',
          description:
            'Background processing of documents for extraction, chunking, indexing, or other AI workflows.',
        },
        {
          title: 'Inference worker',
          description:
            'A worker responsible for executing AI inference tasks.',
        },
        {
          title: 'Agent task',
          description:
            'A unit of asynchronous work generated by an AI agent or agent workflow.',
        },
      ],
    },
    {
      title: 'RabbitMQ in production',
      content:
        'A production RabbitMQ platform requires clear ownership, queue design standards, monitoring, capacity planning, security controls, retry and dead-letter policies, backup or recovery procedures, upgrade planning, and operational runbooks. Teams should also define how message contracts evolve and how failures are investigated.',
      highlights: [
        {
          title: 'Queue design',
          description:
            'Defines queue purpose, lifecycle, routing, retention behavior, and consumer ownership.',
        },
        {
          title: 'Operational runbook',
          description:
            'Documents standard procedures for monitoring, troubleshooting, recovery, and incident response.',
        },
        {
          title: 'Message contract',
          description:
            'Defines the expected structure and meaning of messages exchanged between systems.',
        },
        {
          title: 'Capacity planning',
          description:
            'Estimates broker, storage, network, and consumer capacity required for expected workloads.',
        },
      ],
    },
    {
      title: 'Common RabbitMQ mistakes',
      content:
        'Common mistakes include using RabbitMQ as a permanent database, creating unbounded queues, retrying failed messages indefinitely, ignoring acknowledgements, placing too much business logic into routing rules, failing to monitor queue depth, and using the same messaging pattern for workloads with very different requirements.',
      highlights: [
        {
          title: 'Unbounded queues',
          description:
            'Allowing messages to accumulate without controlling producer rate, consumer capacity, or retention behavior.',
        },
        {
          title: 'Infinite retries',
          description:
            'Repeatedly retrying permanently failing messages without a dead-letter or failure-handling strategy.',
        },
        {
          title: 'Ignored acknowledgements',
          description:
            'Failing to design acknowledgement behavior around actual processing success.',
        },
        {
          title: 'Broker as database',
          description:
            'Treating messaging infrastructure as the primary long-term source of business data.',
        },
        {
          title: 'Poor observability',
          description:
            'Failing to monitor queue depth, message rates, consumer health, and broker performance.',
        },
      ],
    },
    {
      title: 'Explore RabbitMQ in EDDUU',
      content:
        'EDDUU connects RabbitMQ with API Gateway, Service Mesh, Apache Kafka, Apache Pulsar, NATS, Event-Driven Architecture, REST APIs, gRPC, Webhooks, Security, Observability, and AI systems.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'service-mesh',
    'kafka',
    'pulsar',
    'nats',
    'event-driven-architecture',
    'rest-apis',
    'grpc',
    'webhooks',
    'security',
    'observability',
  ],
}

export default rabbitmqKnowledge
