import type { KnowledgeDefinition } from './knowledge'

export const eventDrivenArchitectureKnowledge: KnowledgeDefinition = {
  technologyId: 'event-driven-architecture',
  slug: 'event-driven-architecture',
  title: 'What is Event-Driven Architecture?',
  summary:
    'Event-Driven Architecture (EDA) is a software architecture in which components communicate by producing and consuming events that represent meaningful changes or occurrences in a system.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Event-Driven Architecture?',
      content:
        'Event-Driven Architecture is an architectural style where software components communicate through events. An event represents something that happened, such as an order being created, a payment being completed, a document being uploaded, or a model inference finishing. Producers publish events and consumers react to them independently.',
    },
    {
      title: 'Why do we need Event-Driven Architecture?',
      content:
        'Traditional request-response systems can create direct dependencies between services. If Service A directly calls Services B, C, and D, changes or failures in one service can affect the others. Event-driven architecture introduces an asynchronous communication model where producers publish events and consumers react independently. This can improve decoupling, scalability, resilience, and extensibility.',
    },
    {
      title: 'How does Event-Driven Architecture work?',
      content:
        'A producer detects or creates a meaningful event and publishes it to a messaging infrastructure. The event is routed or stored, and one or more consumers receive it. Consumers execute their own business logic without the producer needing to know every downstream consumer.',
      highlights: [
        {
          title: 'Event producer',
          description:
            'A component that creates and publishes an event.',
        },
        {
          title: 'Event',
          description:
            'A record describing something that happened in a system.',
        },
        {
          title: 'Event consumer',
          description:
            'A component that receives an event and performs corresponding processing.',
        },
        {
          title: 'Event broker',
          description:
            'Infrastructure that transports, routes, stores, or delivers events between producers and consumers.',
        },
      ],
    },
    {
      title: 'Event vs Command',
      content:
        'An event describes something that has already happened, while a command represents a request for another component to perform an action. Events are generally expressed as facts, while commands are generally expressed as intentions.',
      highlights: [
        {
          title: 'Event',
          description:
            'A statement that something has happened, such as OrderCreated.',
        },
        {
          title: 'Command',
          description:
            'A request asking another component to perform an action, such as CreateOrder.',
        },
        {
          title: 'Fact',
          description:
            'Information describing an occurrence that has already taken place.',
        },
        {
          title: 'Intent',
          description:
            'A requested action that another component is expected to perform.',
        },
      ],
    },
    {
      title: 'Event Producers',
      content:
        'Event producers are responsible for detecting meaningful state changes and publishing events. A producer should generally publish events that have clear business or system meaning rather than exposing unnecessary internal implementation details.',
      highlights: [
        {
          title: 'Producer',
          description:
            'Creates and publishes an event.',
        },
        {
          title: 'Domain event',
          description:
            'An event representing an important business occurrence.',
        },
        {
          title: 'Event emission',
          description:
            'The act of publishing an event to the event infrastructure.',
        },
        {
          title: 'Event contract',
          description:
            'The agreed structure and meaning of an event shared between producers and consumers.',
        },
      ],
    },
    {
      title: 'Event Consumers',
      content:
        'Consumers subscribe to events and perform actions based on the information they receive. Multiple consumers can react to the same event independently, allowing new capabilities to be added without modifying the original producer.',
      highlights: [
        {
          title: 'Consumer',
          description:
            'Processes an event published by another component.',
        },
        {
          title: 'Subscription',
          description:
            'Defines which events a consumer wants to receive.',
        },
        {
          title: 'Consumer group',
          description:
            'A group of workers cooperating to process event streams.',
        },
        {
          title: 'Independent processing',
          description:
            'Allows different consumers to perform different actions from the same event.',
        },
      ],
    },
    {
      title: 'Synchronous vs Event-Driven Communication',
      content:
        'Synchronous communication usually requires the caller to wait for a response. Event-driven communication allows the producer to publish an event and continue while consumers process the event asynchronously. Neither model is universally better; architecture should use the model that fits the business workflow and consistency requirements.',
      highlights: [
        {
          title: 'Synchronous',
          description:
            'The caller sends a request and normally waits for a response.',
        },
        {
          title: 'Asynchronous',
          description:
            'The producer sends a message or event without requiring an immediate response.',
        },
        {
          title: 'Latency',
          description:
            'The time between initiating an operation and receiving or completing its result.',
        },
        {
          title: 'Decoupling',
          description:
            'Reducing direct runtime dependencies between components.',
        },
      ],
    },
    {
      title: 'Event Brokers',
      content:
        'Event brokers provide infrastructure for transporting and managing events. Different brokers provide different delivery, routing, persistence, ordering, replay, and scalability models. Examples include Apache Kafka, RabbitMQ, Apache Pulsar, and NATS.',
      highlights: [
        {
          title: 'Apache Kafka',
          description:
            'A distributed event streaming platform centered around durable partitioned logs and high-throughput event processing.',
        },
        {
          title: 'RabbitMQ',
          description:
            'A message broker centered around exchanges, queues, routing, and acknowledgements.',
        },
        {
          title: 'Apache Pulsar',
          description:
            'A distributed messaging and streaming platform with durable storage, subscriptions, and multi-tenant capabilities.',
        },
        {
          title: 'NATS',
          description:
            'A lightweight messaging platform supporting publish-subscribe, request-reply, queue groups, and durable messaging through JetStream.',
        },
      ],
    },
    {
      title: 'Event Routing',
      content:
        'Event routing determines which consumers receive particular events. Routing can be based on topics, subjects, event types, keys, attributes, or other rules depending on the underlying messaging technology.',
      highlights: [
        {
          title: 'Topic',
          description:
            'A named stream or category used to organize events.',
        },
        {
          title: 'Routing key',
          description:
            'A value used by messaging infrastructure to determine event destinations.',
        },
        {
          title: 'Subject',
          description:
            'A logical destination used by messaging systems such as NATS.',
        },
        {
          title: 'Event type',
          description:
            'Identifies the semantic category of an event.',
        },
      ],
    },
    {
      title: 'Event Ordering',
      content:
        'Ordering requirements must be explicitly defined in event-driven systems. Many messaging platforms guarantee ordering only within a particular partition, key, subject, or queue rather than globally. Architects must identify which business workflows actually require ordering.',
      highlights: [
        {
          title: 'Ordering',
          description:
            'The sequence in which events are processed.',
        },
        {
          title: 'Partition ordering',
          description:
            'Maintains event order within a particular partition.',
        },
        {
          title: 'Global ordering',
          description:
            'Ordering across an entire event stream, which is generally more expensive and less scalable.',
        },
        {
          title: 'Ordering key',
          description:
            'A key used to keep related events together for ordering purposes.',
        },
      ],
    },
    {
      title: 'Event Delivery Semantics',
      content:
        'Event-driven systems must define how reliably events should be delivered and processed. Common delivery models include at-most-once, at-least-once, and stronger exactly-once approaches under specific technical conditions. Business logic should also be designed to tolerate duplicate events when appropriate.',
      highlights: [
        {
          title: 'At-most-once',
          description:
            'An event may be processed zero or one time.',
        },
        {
          title: 'At-least-once',
          description:
            'An event is intended to be processed at least once, so duplicate processing can occur.',
        },
        {
          title: 'Exactly-once',
          description:
            'A stronger processing guarantee available only under specific architecture and infrastructure conditions.',
        },
        {
          title: 'Idempotency',
          description:
            'Designing processing so repeated handling of an event does not create unintended side effects.',
        },
      ],
    },
    {
      title: 'Event Replay',
      content:
        'Replay means processing previously stored events again. Replay can be valuable for recovering from failures, rebuilding projections, correcting downstream processing, testing new consumers, or introducing new capabilities based on historical events.',
      highlights: [
        {
          title: 'Replay',
          description:
            'Reprocessing previously retained events.',
        },
        {
          title: 'Event retention',
          description:
            'Determines how long historical events remain available.',
        },
        {
          title: 'Reprocessing',
          description:
            'Runs event-processing logic again against previously stored events.',
        },
        {
          title: 'Recovery',
          description:
            'Uses retained events to restore or reconstruct downstream state.',
        },
      ],
    },
    {
      title: 'Event Schema and Contracts',
      content:
        'Event-driven systems depend heavily on stable contracts. Producers and consumers may be owned by different teams and deployed independently, so event schemas should be explicitly defined and evolved with compatibility in mind.',
      highlights: [
        {
          title: 'Event schema',
          description:
            'Defines the structure and data types of an event.',
        },
        {
          title: 'Schema evolution',
          description:
            'Changes an event contract while maintaining required compatibility.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Allows existing consumers to continue processing newer event versions under defined compatibility rules.',
        },
        {
          title: 'Data contract',
          description:
            'An explicit agreement about event structure, meaning, and compatibility expectations.',
        },
      ],
    },
    {
      title: 'Event Versioning',
      content:
        'Events evolve as products and systems change. Versioning strategies can include backward-compatible field additions, explicit event versions, new event types, or controlled migration. Teams should avoid breaking consumers unexpectedly.',
      highlights: [
        {
          title: 'Event version',
          description:
            'Identifies a particular contract version for an event.',
        },
        {
          title: 'Compatible change',
          description:
            'A schema change that does not break supported existing consumers.',
        },
        {
          title: 'Breaking change',
          description:
            'A change that causes existing consumers or producers to fail or behave incorrectly.',
        },
        {
          title: 'Migration',
          description:
            'The controlled transition from one event contract or processing model to another.',
        },
      ],
    },
    {
      title: 'Eventual Consistency',
      content:
        'Event-driven architectures often use eventual consistency. This means different services may temporarily have different views of system state while events propagate. Eventually, assuming successful processing and recovery, the relevant services converge toward the intended state.',
      highlights: [
        {
          title: 'Eventual consistency',
          description:
            'A consistency model where distributed components may temporarily differ before converging.',
        },
        {
          title: 'Propagation delay',
          description:
            'The time required for an event and its resulting state changes to reach downstream components.',
        },
        {
          title: 'Convergence',
          description:
            'The process through which distributed state becomes consistent with the intended result.',
        },
        {
          title: 'Strong consistency',
          description:
            'A model that provides stronger guarantees about when distributed reads reflect completed writes.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and Microservices',
      content:
        'EDA works particularly well with microservices because services can publish domain events without directly invoking every downstream service. Consumers can independently subscribe to relevant events, allowing teams to evolve services with less direct coupling.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'An independently deployable service responsible for a focused business capability.',
        },
        {
          title: 'Domain event',
          description:
            'A business-significant event representing a state change.',
        },
        {
          title: 'Service decoupling',
          description:
            'Reduces direct dependencies between microservices.',
        },
        {
          title: 'Independent deployment',
          description:
            'Allows services to be released without requiring all consumers to deploy simultaneously.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and CQRS',
      content:
        'Command Query Responsibility Segregation (CQRS) separates write-oriented operations from read-oriented operations. Events can be used to propagate changes from the write side to read models, allowing read representations to be optimized independently for specific use cases.',
      highlights: [
        {
          title: 'CQRS',
          description:
            'An architectural pattern that separates command handling from query handling.',
        },
        {
          title: 'Command model',
          description:
            'The part of a system responsible for handling state-changing operations.',
        },
        {
          title: 'Read model',
          description:
            'A representation optimized for querying and retrieving information.',
        },
        {
          title: 'Projection',
          description:
            'A derived read model built from events or other source data.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and Event Sourcing',
      content:
        'Event sourcing stores state changes as a sequence of events rather than relying only on the latest state representation. The current state can be reconstructed by replaying the event history. Event sourcing is powerful but introduces additional design and operational complexity and should be adopted only when its benefits justify that complexity.',
      highlights: [
        {
          title: 'Event sourcing',
          description:
            'Stores business state changes as an ordered sequence of events.',
        },
        {
          title: 'Event store',
          description:
            'Persistent storage containing the event history.',
        },
        {
          title: 'State reconstruction',
          description:
            'Rebuilds current state by processing the relevant event history.',
        },
        {
          title: 'Event replay',
          description:
            'Processes historical events again to rebuild or derive state.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and APIs',
      content:
        'EDA does not replace APIs. Synchronous APIs such as REST and gRPC remain useful for operations that require immediate responses, while events are useful for asynchronous workflows and state-change notifications. Mature systems often combine APIs and events rather than choosing only one communication model.',
      highlights: [
        {
          title: 'REST API',
          description:
            'A synchronous HTTP-based interface commonly used for resource-oriented operations.',
        },
        {
          title: 'gRPC',
          description:
            'A high-performance RPC framework commonly used for service-to-service communication.',
        },
        {
          title: 'Event notification',
          description:
            'Communicates that something happened without requiring an immediate response.',
        },
        {
          title: 'Hybrid architecture',
          description:
            'Uses both synchronous APIs and asynchronous event communication according to workflow requirements.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and Reliability',
      content:
        'Reliable EDA requires careful handling of retries, duplicate events, dead-letter processing, idempotency, timeouts, ordering, consumer failures, and observability. The architecture should define what happens when an event cannot be processed successfully.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Attempts event processing again after a failure.',
        },
        {
          title: 'Dead-letter queue',
          description:
            'A destination for events that cannot be processed successfully through the normal workflow.',
        },
        {
          title: 'Poison event',
          description:
            'An event that repeatedly causes processing failures.',
        },
        {
          title: 'Failure isolation',
          description:
            'Prevents one failing event or consumer from disrupting the entire processing pipeline.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture and Observability',
      content:
        'Distributed event systems require strong observability because a single business operation may cross many asynchronous services. Teams should monitor event throughput, processing latency, consumer lag, failures, retries, dead-letter volume, and end-to-end correlation.',
      highlights: [
        {
          title: 'Event throughput',
          description:
            'The number or volume of events processed over time.',
        },
        {
          title: 'Processing latency',
          description:
            'The time between an event becoming available and its successful processing.',
        },
        {
          title: 'Consumer lag',
          description:
            'The amount of event backlog relative to the consumer’s processing position.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to connect related operations across distributed services.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture in AI Systems',
      content:
        'EDA is highly useful in AI platforms because AI workflows often contain asynchronous and expensive operations. Events can coordinate document ingestion, embedding generation, model inference, evaluation, agent actions, tool execution, notifications, and model lifecycle workflows.',
      highlights: [
        {
          title: 'AI event',
          description:
            'An event representing a meaningful action or state change in an AI platform.',
        },
        {
          title: 'Inference event',
          description:
            'Represents the start, completion, failure, or result of an AI inference operation.',
        },
        {
          title: 'Agent event',
          description:
            'Represents a meaningful state change or action in an agent workflow.',
        },
        {
          title: 'Evaluation event',
          description:
            'Represents an AI evaluation, test, or quality measurement operation.',
        },
      ],
    },
    {
      title: 'Event-Driven Architecture in production',
      content:
        'Production EDA requires clear event ownership, schema governance, delivery guarantees, retention policies, observability, failure handling, security, capacity planning, and operational ownership. Teams should avoid creating events simply because asynchronous communication is available; each event should have a clear purpose and lifecycle.',
      highlights: [
        {
          title: 'Event ownership',
          description:
            'Defines which team or service owns the meaning and contract of an event.',
        },
        {
          title: 'Schema governance',
          description:
            'Controls how event contracts are created, reviewed, versioned, and evolved.',
        },
        {
          title: 'Retention policy',
          description:
            'Defines how long events should remain available.',
        },
        {
          title: 'Operational ownership',
          description:
            'Defines responsibility for reliability, monitoring, incident response, and platform operations.',
        },
      ],
    },
    {
      title: 'Common Event-Driven Architecture mistakes',
      content:
        'Common mistakes include using events for every interaction, creating poorly defined event contracts, ignoring eventual consistency, assuming exactly-once processing is automatic, failing to make consumers idempotent, creating uncontrolled event dependencies, and lacking observability across asynchronous workflows.',
      highlights: [
        {
          title: 'Event everything',
          description:
            'Using asynchronous events where a simple synchronous API would be more appropriate.',
        },
        {
          title: 'Poor event contracts',
          description:
            'Publishing events without clear semantics, ownership, schema, or compatibility expectations.',
        },
        {
          title: 'Ignoring eventual consistency',
          description:
            'Designing business workflows as though all distributed state changes happen immediately.',
        },
        {
          title: 'Non-idempotent consumers',
          description:
            'Allowing duplicate event delivery to create unintended business effects.',
        },
        {
          title: 'Weak observability',
          description:
            'Failing to trace and monitor asynchronous workflows across multiple services.',
        },
      ],
    },
    {
      title: 'Explore Event-Driven Architecture in EDDUU',
      content:
        'EDDUU connects Event-Driven Architecture with Apache Kafka, RabbitMQ, Apache Pulsar, NATS, API Gateway, Service Mesh, REST APIs, gRPC, Webhooks, CQRS, Event Sourcing, Microservices, Observability, Security, and AI platforms.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'service-mesh',
    'kafka',
    'rabbitmq',
    'pulsar',
    'nats',
    'webhooks',
    'rest-apis',
    'grpc',
    'security',
    'observability',
  ],
}

export default eventDrivenArchitectureKnowledge
