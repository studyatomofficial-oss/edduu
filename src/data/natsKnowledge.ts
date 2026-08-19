import type { KnowledgeDefinition } from './knowledge'

export const natsKnowledge: KnowledgeDefinition = {
  technologyId: 'nats',
  slug: 'nats',
  title: 'What is NATS?',
  summary:
    'NATS is a lightweight, high-performance messaging system designed for distributed applications, microservices, event-driven architectures, and cloud-native systems.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is NATS?',
      content:
        'NATS is a lightweight messaging system that allows distributed applications and services to communicate through messages. It is designed for simplicity, low latency, high throughput, and cloud-native distributed systems. NATS supports patterns such as publish-subscribe, request-reply, queue groups, and durable messaging through JetStream.',
    },
    {
      title: 'Why do we need NATS?',
      content:
        'As distributed systems grow, services need a reliable way to communicate without creating direct dependencies between every component. NATS provides a lightweight communication layer that can connect services, distribute events, support asynchronous processing, and enable request-reply interactions.',
    },
    {
      title: 'How does NATS work?',
      content:
        'A publisher sends a message to a subject. NATS routes that message to subscribers interested in the subject. Subscribers can process the message independently. For request-reply communication, a requester sends a request and a responder sends a response through NATS.',
      highlights: [
        {
          title: 'Publisher',
          description:
            'An application or service that publishes a message to a NATS subject.',
        },
        {
          title: 'Subject',
          description:
            'A named destination used to organize and route NATS messages.',
        },
        {
          title: 'Subscriber',
          description:
            'An application or service that receives messages for a subject.',
        },
        {
          title: 'Broker',
          description:
            'The NATS server responsible for routing messages between clients.',
        },
      ],
    },
    {
      title: 'NATS Subjects',
      content:
        'Subjects are the fundamental addressing mechanism in NATS. Applications publish messages to subjects and subscribers listen to subjects. Subjects can use hierarchical naming and wildcard subscriptions to create flexible routing patterns.',
      highlights: [
        {
          title: 'Subject',
          description:
            'A logical message destination in NATS.',
        },
        {
          title: 'Wildcard',
          description:
            'A subscription pattern that can match multiple subjects.',
        },
        {
          title: 'Hierarchical subject',
          description:
            'A subject organized into multiple tokens to represent logical structure.',
        },
        {
          title: 'Subject namespace',
          description:
            'A logical naming convention used to organize messaging domains.',
        },
      ],
    },
    {
      title: 'NATS Publish-Subscribe',
      content:
        'Publish-subscribe allows one publisher to send an event while multiple subscribers independently receive it. This pattern is useful for notifications, domain events, telemetry, and other event-driven workflows.',
      highlights: [
        {
          title: 'Publish',
          description:
            'Sends a message to a NATS subject.',
        },
        {
          title: 'Subscribe',
          description:
            'Registers interest in messages published to a subject.',
        },
        {
          title: 'Broadcast',
          description:
            'Allows multiple independent subscribers to receive the same event.',
        },
        {
          title: 'Event notification',
          description:
            'Communicates that something meaningful has happened in a system.',
        },
      ],
    },
    {
      title: 'NATS Queue Groups',
      content:
        'Queue groups allow multiple subscribers to cooperate as workers. For a message published to a subject, NATS delivers the message to one member of the queue group rather than broadcasting it to every member. This provides a simple way to distribute work across service instances.',
      highlights: [
        {
          title: 'Queue group',
          description:
            'A group of subscribers that share work from a subject.',
        },
        {
          title: 'Worker',
          description:
            'A service instance that processes messages from a queue group.',
        },
        {
          title: 'Load distribution',
          description:
            'Distributes messages among available workers.',
        },
        {
          title: 'Horizontal scaling',
          description:
            'Adds service instances to increase processing capacity.',
        },
      ],
    },
    {
      title: 'NATS Request-Reply',
      content:
        'NATS supports request-reply communication where one service sends a request and another service responds. This provides a lightweight alternative for service-to-service communication while keeping the services decoupled through the messaging layer.',
      highlights: [
        {
          title: 'Requester',
          description:
            'Sends a request and waits for a response.',
        },
        {
          title: 'Responder',
          description:
            'Receives the request and sends a response.',
        },
        {
          title: 'Request timeout',
          description:
            'Defines how long the requester waits for a response.',
        },
        {
          title: 'Service discovery',
          description:
            'Allows services to locate communication endpoints through messaging subjects and service conventions.',
        },
      ],
    },
    {
      title: 'NATS Core vs JetStream',
      content:
        'Core NATS provides lightweight real-time messaging with low latency. JetStream adds persistence, message retention, acknowledgements, replay, consumers, and stronger delivery capabilities. Teams should choose the appropriate model based on whether messages need durable storage and replay.',
      highlights: [
        {
          title: 'Core NATS',
          description:
            'Lightweight real-time messaging focused on speed and simplicity.',
        },
        {
          title: 'JetStream',
          description:
            'NATS persistence and streaming capabilities for durable messages and consumers.',
        },
        {
          title: 'Durable messaging',
          description:
            'Preserves messages beyond the immediate delivery lifecycle.',
        },
        {
          title: 'Replay',
          description:
            'Allows previously stored messages to be consumed again.',
        },
      ],
    },
    {
      title: 'NATS JetStream',
      content:
        'JetStream provides persistence and streaming capabilities within the NATS ecosystem. It can store messages, manage consumers, track acknowledgement state, and support replay and delivery policies.',
      highlights: [
        {
          title: 'Stream',
          description:
            'A persistent collection of messages configured in JetStream.',
        },
        {
          title: 'Consumer',
          description:
            'A JetStream component that defines how stored messages are delivered.',
        },
        {
          title: 'Acknowledgement',
          description:
            'Confirms successful processing of a message.',
        },
        {
          title: 'Message retention',
          description:
            'Controls how stored messages are retained according to configured policy.',
        },
      ],
    },
    {
      title: 'NATS Consumers',
      content:
        'JetStream consumers track delivery and acknowledgement state for persisted messages. Consumer configuration determines how messages are delivered, acknowledged, redelivered, and replayed.',
      highlights: [
        {
          title: 'Consumer state',
          description:
            'Information representing a consumer’s delivery and acknowledgement progress.',
        },
        {
          title: 'Acknowledgement',
          description:
            'Signals that message processing completed successfully.',
        },
        {
          title: 'Redelivery',
          description:
            'Delivers a message again when processing was not successfully acknowledged.',
        },
        {
          title: 'Replay',
          description:
            'Consumes messages from a previous point in the stored stream.',
        },
      ],
    },
    {
      title: 'NATS Persistence and Delivery',
      content:
        'Durable NATS workflows require deliberate decisions about message persistence, acknowledgement, retention, replay, and failure handling. JetStream provides these capabilities while allowing applications to choose delivery behavior appropriate to the workload.',
      highlights: [
        {
          title: 'Persistence',
          description:
            'Stores messages so they remain available beyond immediate delivery.',
        },
        {
          title: 'At-least-once delivery',
          description:
            'A delivery model where messages may be delivered more than once but are intended not to be lost under supported conditions.',
        },
        {
          title: 'Duplicate processing',
          description:
            'Occurs when a message is delivered more than once and the application processes it repeatedly.',
        },
        {
          title: 'Idempotency',
          description:
            'Designs processing so repeated handling does not create unintended side effects.',
        },
      ],
    },
    {
      title: 'NATS and Microservices',
      content:
        'NATS is well suited to microservice environments because services can communicate through subjects rather than direct network dependencies. Queue groups can distribute work among service instances, while request-reply can support synchronous-style interactions through the messaging layer.',
      highlights: [
        {
          title: 'Service decoupling',
          description:
            'Reduces direct dependencies between services.',
        },
        {
          title: 'Service instance',
          description:
            'One running instance of a microservice.',
        },
        {
          title: 'Messaging contract',
          description:
            'Defines the expected subject, message structure, and communication behavior between services.',
        },
        {
          title: 'Distributed service',
          description:
            'A service running as part of a larger distributed application.',
        },
      ],
    },
    {
      title: 'NATS and Event-Driven Architecture',
      content:
        'NATS can act as a communication backbone for event-driven architectures. Services publish domain events and other services subscribe to the events they need. This allows independent consumers to react to changes without tightly coupling producers to every downstream service.',
      highlights: [
        {
          title: 'Domain event',
          description:
            'An event representing a meaningful business occurrence.',
        },
        {
          title: 'Event producer',
          description:
            'A service that publishes a domain or system event.',
        },
        {
          title: 'Event consumer',
          description:
            'A service that reacts to an event.',
        },
        {
          title: 'Loose coupling',
          description:
            'Allows services to communicate without direct point-to-point dependencies.',
        },
      ],
    },
    {
      title: 'NATS vs Apache Kafka',
      content:
        'NATS and Kafka can both support event-driven systems, but they emphasize different architectural goals. NATS focuses strongly on lightweight, low-latency messaging and simple service communication, while Kafka emphasizes durable partitioned event logs, high-throughput streaming, replay, and large-scale event processing. JetStream extends NATS with persistence and streaming capabilities.',
      highlights: [
        {
          title: 'NATS',
          description:
            'Lightweight messaging platform optimized for simple, fast distributed communication.',
        },
        {
          title: 'Kafka',
          description:
            'Distributed event streaming platform optimized for durable logs, high throughput, replay, and stream processing.',
        },
        {
          title: 'JetStream',
          description:
            'Adds durable persistence and streaming capabilities to NATS.',
        },
        {
          title: 'Event log',
          description:
            'A durable ordered record of events that consumers can process according to their position.',
        },
      ],
    },
    {
      title: 'NATS vs RabbitMQ',
      content:
        'RabbitMQ is a message broker centered around exchanges, queues, routing, and acknowledgements. NATS emphasizes lightweight subjects, publish-subscribe, queue groups, request-reply, and low-latency service communication. JetStream adds durable messaging to NATS when persistence is required.',
      highlights: [
        {
          title: 'RabbitMQ',
          description:
            'Routing-oriented message broker with exchanges and queues.',
        },
        {
          title: 'NATS',
          description:
            'Lightweight messaging system centered around subjects and simple communication patterns.',
        },
        {
          title: 'Queue group',
          description:
            'NATS mechanism for distributing messages among cooperating subscribers.',
        },
        {
          title: 'Exchange',
          description:
            'RabbitMQ routing component that determines which queues receive messages.',
        },
      ],
    },
    {
      title: 'NATS vs Apache Pulsar',
      content:
        'Pulsar is a distributed messaging and event-streaming platform with a broker and BookKeeper-based storage architecture, multi-tenancy, and geo-replication. NATS is generally lighter and simpler for low-latency service communication, while JetStream provides durable streaming capabilities when required.',
      highlights: [
        {
          title: 'Pulsar',
          description:
            'Distributed messaging and streaming platform designed for large-scale durable workloads.',
        },
        {
          title: 'NATS',
          description:
            'Lightweight messaging platform designed for simple, fast distributed communication.',
        },
        {
          title: 'JetStream persistence',
          description:
            'Provides durable messaging and stream capabilities in NATS.',
        },
        {
          title: 'Geo-replication',
          description:
            'Replicates messaging data across geographic locations.',
        },
      ],
    },
    {
      title: 'NATS Security',
      content:
        'Production NATS deployments require authentication, authorization, encrypted connections, account isolation, credential management, and controlled administrative access. NATS accounts and permissions can be used to isolate messaging domains and control which clients can publish or subscribe to particular subjects.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a NATS client.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which subjects a client can publish to or subscribe to.',
        },
        {
          title: 'TLS',
          description:
            'Encrypts NATS network communication and can provide endpoint authentication.',
        },
        {
          title: 'Account isolation',
          description:
            'Separates messaging domains and permissions within a NATS deployment.',
        },
      ],
    },
    {
      title: 'NATS Performance and Scaling',
      content:
        'NATS is designed for low latency and high message throughput. Scaling can involve additional service instances, NATS server clustering, subject design, queue groups, and appropriate JetStream storage configuration. Performance should be evaluated using actual message sizes, rates, network conditions, and workload patterns.',
      highlights: [
        {
          title: 'Low latency',
          description:
            'Minimizes the time required to deliver messages between communicating components.',
        },
        {
          title: 'NATS cluster',
          description:
            'A group of NATS servers working together to provide distributed messaging.',
        },
        {
          title: 'Queue group scaling',
          description:
            'Adds workers to distribute messages across service instances.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of messaging work processed over time.',
        },
      ],
    },
    {
      title: 'NATS in Kubernetes and Cloud-Native Systems',
      content:
        'NATS is commonly used in cloud-native architectures because it is lightweight and can provide a communication backbone between dynamically deployed services. Kubernetes workloads can use NATS for asynchronous events, service communication, task distribution, and messaging between independently deployed components.',
      highlights: [
        {
          title: 'Cloud-native',
          description:
            'An architecture designed around dynamic, distributed, automated infrastructure and services.',
        },
        {
          title: 'Kubernetes workload',
          description:
            'An application or service running under Kubernetes management.',
        },
        {
          title: 'Service communication',
          description:
            'Messaging between independent application services.',
        },
        {
          title: 'Dynamic scaling',
          description:
            'Increasing or decreasing service instances according to workload requirements.',
        },
      ],
    },
    {
      title: 'NATS in AI Systems',
      content:
        'NATS can provide a lightweight messaging layer for AI systems where low-latency communication between model services, agent services, tool services, evaluation workers, and asynchronous processing components is important. JetStream can support durable AI workflows that require persistence and replay.',
      highlights: [
        {
          title: 'AI service messaging',
          description:
            'Communication between independently deployed AI-related services.',
        },
        {
          title: 'Agent event',
          description:
            'An event representing an action or state change in an AI agent workflow.',
        },
        {
          title: 'Inference request',
          description:
            'A request sent to an AI inference service.',
        },
        {
          title: 'AI worker',
          description:
            'A service instance responsible for processing an AI task asynchronously.',
        },
      ],
    },
    {
      title: 'NATS in production',
      content:
        'Production NATS environments require clear subject naming, authentication and authorization, TLS, cluster planning, monitoring, capacity management, persistence strategy where needed, disaster recovery planning, and operational ownership. JetStream deployments require additional attention to storage capacity, retention, replication, and consumer behavior.',
      highlights: [
        {
          title: 'Subject governance',
          description:
            'Defines consistent naming and ownership rules for messaging subjects.',
        },
        {
          title: 'Cluster planning',
          description:
            'Designs server topology for availability, capacity, and operational requirements.',
        },
        {
          title: 'Persistence planning',
          description:
            'Determines which messages require durable storage and how long they should remain available.',
        },
        {
          title: 'Operational ownership',
          description:
            'Defines responsibility for reliability, security, monitoring, upgrades, and incident response.',
        },
      ],
    },
    {
      title: 'Common NATS mistakes',
      content:
        'Common mistakes include treating Core NATS as a durable database, using JetStream without planning storage growth, creating uncontrolled subject hierarchies, failing to define message contracts, ignoring duplicate processing, and selecting NATS without evaluating whether its messaging model matches the workload.',
      highlights: [
        {
          title: 'Core NATS as database',
          description:
            'Incorrectly treating transient messaging as permanent business data storage.',
        },
        {
          title: 'Uncontrolled subjects',
          description:
            'Creating inconsistent or overly complex subject naming that becomes difficult to govern.',
        },
        {
          title: 'Ignoring duplicates',
          description:
            'Failing to make consumers resilient to repeated message delivery where applicable.',
        },
        {
          title: 'Poor workload fit',
          description:
            'Choosing a messaging platform without evaluating delivery, retention, replay, throughput, and operational requirements.',
        },
      ],
    },
    {
      title: 'Explore NATS in EDDUU',
      content:
        'EDDUU connects NATS with Apache Kafka, RabbitMQ, Apache Pulsar, Event-Driven Architecture, API Gateway, Service Mesh, WebSockets, Webhooks, REST APIs, Security, Observability, and AI platforms.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'service-mesh',
    'kafka',
    'rabbitmq',
    'pulsar',
    'event-driven-architecture',
    'webhooks',
    'rest-apis',
    'grpc',
    'security',
    'observability',
  ],
}

export default natsKnowledge
