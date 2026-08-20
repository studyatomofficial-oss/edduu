import type { KnowledgeDefinition } from './knowledge'

export const eventDrivenSystemsKnowledge: KnowledgeDefinition = {
  technologyId: 'event-driven-systems',
  slug: 'event-driven-systems',
  title: 'Event-Driven Systems',
  summary:
    'Event-driven architecture allows system components to communicate by producing and consuming events, reducing direct coupling and enabling asynchronous, scalable workflows.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Event-Driven Architecture?',
      content:
        'An event-driven system is an architecture in which components communicate by producing and consuming events. An event represents something that happened, such as an order being created, a payment being completed, or a user registering. Other components can react to that event without the producer needing to directly call every consumer.',
      highlights: [
        {
          title: 'Event',
          description:
            'A record describing something that has happened in the system.',
        },
        {
          title: 'Producer',
          description:
            'A component that creates and publishes an event.',
        },
        {
          title: 'Consumer',
          description:
            'A component that receives and processes an event.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school announcement system. The principal announces, “The exam schedule has been published.” The principal does not individually call every teacher, student, and parent. Everyone who cares about that announcement listens and takes the appropriate action. The announcement is the event, the principal is the producer, and the listeners are consumers.',
      highlights: [
        {
          title: 'Announcement',
          description:
            'Comparable to an event.',
        },
        {
          title: 'Principal',
          description:
            'Comparable to the event producer.',
        },
        {
          title: 'Listeners',
          description:
            'Comparable to event consumers.',
        },
        {
          title: 'Independent reaction',
          description:
            'Each consumer can perform its own action after receiving the event.',
        },
      ],
    },

    {
      title: 'Why Use Event-Driven Systems?',
      content:
        'Event-driven architecture can reduce direct coupling, support asynchronous processing, improve scalability, enable independent consumers, and make it easier to add new reactions to existing business events.',
      highlights: [
        {
          title: 'Decoupling',
          description:
            'Reducing direct dependency between the producer and consumers.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Allowing work to happen without blocking the original operation.',
        },
        {
          title: 'Independent consumers',
          description:
            'Allowing multiple consumers to react to the same event independently.',
        },
        {
          title: 'Scalability',
          description:
            'Allowing event processing capacity to increase independently from event producers.',
        },
      ],
    },

    {
      title: 'Event vs Command',
      content:
        'An event describes something that already happened. A command represents a request for something to happen. “OrderCreated” is an event, while “CreateOrder” is a command. The distinction helps define ownership and intent in distributed workflows.',
      highlights: [
        {
          title: 'Event',
          description:
            'Describes a completed or observed fact.',
        },
        {
          title: 'Command',
          description:
            'Requests a component to perform an action.',
        },
        {
          title: 'Intent',
          description:
            'A command expresses what someone wants done, while an event records what happened.',
        },
      ],
    },

    {
      title: 'Event Producer',
      content:
        'The producer is responsible for publishing an event when a meaningful state change or business occurrence happens. The producer should not need to know every consumer that may react to the event.',
      highlights: [
        {
          title: 'Producer',
          description:
            'The component that publishes an event.',
        },
        {
          title: 'Business event',
          description:
            'An event representing a meaningful business occurrence.',
        },
        {
          title: 'Publisher',
          description:
            'Another common term for an event producer.',
        },
      ],
    },

    {
      title: 'Event Consumer',
      content:
        'A consumer subscribes to or receives events and performs its own processing. Consumers should generally be independently deployable and should safely handle retries and duplicate delivery.',
      highlights: [
        {
          title: 'Consumer',
          description:
            'A component that receives and processes events.',
        },
        {
          title: 'Subscription',
          description:
            'A mechanism by which a consumer expresses interest in particular events.',
        },
        {
          title: 'Consumer logic',
          description:
            'The business or technical processing performed after receiving an event.',
        },
      ],
    },

    {
      title: 'Event Broker',
      content:
        'An event broker or messaging platform receives events from producers and delivers them to consumers. The broker can provide buffering, routing, persistence, delivery semantics, and scaling capabilities depending on the technology.',
      highlights: [
        {
          title: 'Event broker',
          description:
            'Infrastructure that transports and manages events between producers and consumers.',
        },
        {
          title: 'Topic',
          description:
            'A named stream or category through which related events are published.',
        },
        {
          title: 'Subscription',
          description:
            'A consumer relationship with an event stream or topic.',
        },
      ],
    },

    {
      title: 'Publish-Subscribe',
      content:
        'In publish-subscribe architecture, producers publish events without directly targeting individual consumers. Multiple consumers can subscribe to the same event stream and independently react to the event.',
      highlights: [
        {
          title: 'Publish',
          description:
            'Sending an event to an event stream or topic.',
        },
        {
          title: 'Subscribe',
          description:
            'Registering interest in events from a stream or topic.',
        },
        {
          title: 'Fan-out',
          description:
            'Delivering the same logical event to multiple consumers.',
        },
      ],
    },

    {
      title: 'Queue vs Event Stream',
      content:
        'A queue commonly distributes work among consumers so each message is processed by one consumer from a competing group. An event stream can allow multiple independent consumer groups to process the same event according to their own progress.',
      highlights: [
        {
          title: 'Queue',
          description:
            'A mechanism commonly used to distribute work among competing consumers.',
        },
        {
          title: 'Event stream',
          description:
            'A persistent sequence of events that can be independently consumed.',
        },
        {
          title: 'Consumer group',
          description:
            'A set of consumers cooperating to process a stream workload.',
        },
      ],
    },

    {
      title: 'Synchronous vs Event-Driven',
      content:
        'In synchronous architecture, Service A directly calls Service B and waits for a response. In event-driven architecture, Service A can publish an event and continue while interested consumers process the event asynchronously.',
      highlights: [
        {
          title: 'Synchronous',
          description:
            'The caller waits for a direct response from another component.',
        },
        {
          title: 'Asynchronous',
          description:
            'The initiating operation can continue without waiting for downstream processing to finish.',
        },
        {
          title: 'Decoupled communication',
          description:
            'The producer does not need direct runtime knowledge of every consumer.',
        },
      ],
    },

    {
      title: 'Benefits of Asynchronous Processing',
      content:
        'Asynchronous event processing can reduce user-facing latency, absorb traffic spikes, isolate slow workloads, and allow background processing to scale independently.',
      highlights: [
        {
          title: 'Latency reduction',
          description:
            'Moving non-critical work outside the synchronous request path.',
        },
        {
          title: 'Buffering',
          description:
            'Temporarily storing work so producers and consumers can operate at different rates.',
        },
        {
          title: 'Independent scaling',
          description:
            'Scaling consumers according to event-processing workload.',
        },
      ],
    },

    {
      title: 'Event Schema',
      content:
        'An event schema defines the structure and meaning of event data. Because producers and consumers may be deployed independently, event schemas should evolve carefully and maintain compatibility where required.',
      highlights: [
        {
          title: 'Event schema',
          description:
            'The structure and semantics of an event.',
        },
        {
          title: 'Schema evolution',
          description:
            'Changing an event structure while maintaining required compatibility.',
        },
        {
          title: 'Contract',
          description:
            'The agreed structure and behavior between event producers and consumers.',
        },
      ],
    },

    {
      title: 'Event Versioning',
      content:
        'Event schemas change as products evolve. Versioning strategies can include explicit schema versions, additive changes, compatibility rules, or separate event types when semantics change significantly.',
      highlights: [
        {
          title: 'Version',
          description:
            'An identifier representing a particular event schema or contract.',
        },
        {
          title: 'Additive change',
          description:
            'Adding optional information without invalidating existing consumers.',
        },
        {
          title: 'Breaking change',
          description:
            'A change that causes existing consumers to fail or interpret the event incorrectly.',
        },
      ],
    },

    {
      title: 'Event Immutability',
      content:
        'Events are generally treated as historical facts. Once an event has been published, its meaning should not be changed retroactively. If a correction is needed, another event can describe the new fact.',
      highlights: [
        {
          title: 'Immutable event',
          description:
            'An event whose historical meaning is not modified after publication.',
        },
        {
          title: 'Correction event',
          description:
            'A new event describing a correction or subsequent state change.',
        },
        {
          title: 'Event history',
          description:
            'A sequence of recorded events representing changes over time.',
        },
      ],
    },

    {
      title: 'Event Ordering',
      content:
        'Distributed event systems cannot always guarantee global ordering. If order matters, the architecture must define the scope of ordering, such as per entity, partition, or stream.',
      highlights: [
        {
          title: 'Ordering',
          description:
            'The sequence in which events are observed or processed.',
        },
        {
          title: 'Per-entity ordering',
          description:
            'Maintaining event order for a particular business entity.',
        },
        {
          title: 'Partition',
          description:
            'A logical subset of a stream that can provide ordering within that subset.',
        },
      ],
    },

    {
      title: 'Event Delivery Semantics',
      content:
        'Event-driven systems commonly use at-most-once, at-least-once, or stronger processing guarantees. At-least-once delivery is common and requires consumers to safely handle duplicates.',
      highlights: [
        {
          title: 'At-most-once',
          description:
            'An event is delivered zero or one time, accepting possible loss.',
        },
        {
          title: 'At-least-once',
          description:
            'An event may be delivered multiple times, requiring duplicate handling.',
        },
        {
          title: 'Exactly-once',
          description:
            'A stronger processing guarantee defined within specific system semantics.',
        },
      ],
    },

    {
      title: 'Idempotent Consumers',
      content:
        'Because duplicate delivery can happen, event consumers should often be idempotent. Processing the same logical event more than once should not create unintended duplicate business effects.',
      highlights: [
        {
          title: 'Idempotent consumer',
          description:
            'A consumer designed to safely process repeated delivery of the same logical event.',
        },
        {
          title: 'Deduplication',
          description:
            'Detecting and preventing repeated processing of the same logical event.',
        },
        {
          title: 'Event ID',
          description:
            'A unique identifier that can help identify duplicate deliveries.',
        },
      ],
    },

    {
      title: 'Retries',
      content:
        'Consumers may temporarily fail while processing an event. Retry policies can recover from transient failures, but retries should be bounded and should not create uncontrolled processing loops.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Repeating event processing after a failure.',
        },
        {
          title: 'Backoff',
          description:
            'Waiting between retry attempts.',
        },
        {
          title: 'Retry limit',
          description:
            'A maximum number or duration of retry attempts.',
        },
      ],
    },

    {
      title: 'Dead-Letter Queue',
      content:
        'A dead-letter queue stores events that repeatedly fail processing. It prevents a problematic event from continuously blocking normal processing and provides a location for investigation and controlled replay.',
      highlights: [
        {
          title: 'Dead-letter queue',
          description:
            'A destination for messages or events that repeatedly fail processing.',
        },
        {
          title: 'Poison event',
          description:
            'An event that repeatedly causes consumer processing to fail.',
        },
        {
          title: 'Replay',
          description:
            'Reprocessing a previously failed event after the underlying issue is resolved.',
        },
      ],
    },

    {
      title: 'Consumer Lag',
      content:
        'Consumer lag measures how far a consumer is behind the latest available events. Growing lag can indicate insufficient processing capacity, slow downstream dependencies, or failures in the consumer.',
      highlights: [
        {
          title: 'Consumer lag',
          description:
            'The amount of unprocessed event workload between a consumer and the latest available events.',
        },
        {
          title: 'Processing capacity',
          description:
            'The amount of event workload a consumer group can process within a period.',
        },
        {
          title: 'Backlog',
          description:
            'Accumulated work waiting to be processed.',
        },
      ],
    },

    {
      title: 'Backpressure',
      content:
        'When consumers cannot keep up with producers, the system needs a strategy for absorbing or controlling the workload. Queues, rate limits, consumer scaling, batching, and load shedding are common approaches.',
      highlights: [
        {
          title: 'Backpressure',
          description:
            'Controlling incoming work when downstream processing capacity is constrained.',
        },
        {
          title: 'Consumer scaling',
          description:
            'Adding processing instances to increase event throughput.',
        },
        {
          title: 'Load shedding',
          description:
            'Dropping or rejecting lower-priority work to protect critical processing.',
        },
      ],
    },

    {
      title: 'Event Replay',
      content:
        'If events are durably retained, consumers can sometimes replay historical events to rebuild state, recover from bugs, or create a new derived view. Replay requires careful consideration of idempotency and event compatibility.',
      highlights: [
        {
          title: 'Replay',
          description:
            'Reprocessing previously stored events.',
        },
        {
          title: 'Derived state',
          description:
            'State calculated from a sequence of events.',
        },
        {
          title: 'Reprocessing',
          description:
            'Running event-processing logic again against historical events.',
        },
      ],
    },

    {
      title: 'Event Sourcing',
      content:
        'Event sourcing stores changes to business state as a sequence of events rather than storing only the latest state. Current state can be reconstructed by replaying those events.',
      highlights: [
        {
          title: 'Event sourcing',
          description:
            'A persistence approach where state changes are stored as an ordered sequence of events.',
        },
        {
          title: 'Event store',
          description:
            'A durable storage system for event history.',
        },
        {
          title: 'State reconstruction',
          description:
            'Building current state by applying historical events in sequence.',
        },
      ],
    },

    {
      title: 'Event Sourcing Trade-offs',
      content:
        'Event sourcing can provide an excellent audit history and replay capability, but it increases complexity around event schemas, storage, debugging, privacy, corrections, and state reconstruction. It should be adopted for a clear business reason.',
      highlights: [
        {
          title: 'Audit history',
          description:
            'A historical record of state-changing events.',
        },
        {
          title: 'Schema evolution',
          description:
            'The challenge of maintaining historical events as event structures change.',
        },
        {
          title: 'Operational complexity',
          description:
            'Additional infrastructure and engineering effort required by event-based persistence.',
        },
      ],
    },

    {
      title: 'CQRS',
      content:
        'CQRS, or Command Query Responsibility Segregation, separates write operations from read models. In event-driven systems, commands can update state while events update one or more optimized read models.',
      highlights: [
        {
          title: 'Command',
          description:
            'A request to change system state.',
        },
        {
          title: 'Query',
          description:
            'A request to retrieve information without changing state.',
        },
        {
          title: 'Read model',
          description:
            'A data representation optimized for a particular query workload.',
        },
      ],
    },

    {
      title: 'CQRS Trade-offs',
      content:
        'CQRS can improve read scalability and allow specialized read models, but it introduces additional data flows and can create eventual consistency between write and read models.',
      highlights: [
        {
          title: 'Read optimization',
          description:
            'Designing data structures specifically for read workloads.',
        },
        {
          title: 'Eventual consistency',
          description:
            'A temporary difference between the authoritative write state and derived read models.',
        },
        {
          title: 'Additional complexity',
          description:
            'Extra components and synchronization logic required by separate read and write paths.',
        },
      ],
    },

    {
      title: 'Transactional Outbox',
      content:
        'The transactional outbox pattern solves a common problem: a service updates its database and needs to publish an event reliably. The service writes the business change and an outbox record in the same local transaction, then a separate publisher sends the event.',
      highlights: [
        {
          title: 'Outbox',
          description:
            'A database table or store containing events waiting to be published.',
        },
        {
          title: 'Atomic transaction',
          description:
            'The business update and outbox record are committed together.',
        },
        {
          title: 'Outbox publisher',
          description:
            'A process that reads pending outbox records and publishes them to the event system.',
        },
      ],
    },

    {
      title: 'Why Transactional Outbox Matters',
      content:
        'Without an outbox, a service can successfully commit a database change but fail before publishing the corresponding event, or publish an event and then fail to commit the database change. The outbox pattern makes the local state change and event intent durable together.',
      highlights: [
        {
          title: 'Dual-write problem',
          description:
            'The reliability problem caused by updating two independent systems as part of one logical operation.',
        },
        {
          title: 'Durability',
          description:
            'Ensuring the intent to publish an event survives process or infrastructure failure.',
        },
        {
          title: 'Reliable publication',
          description:
            'Publishing an event from durable state after the transaction commits.',
        },
      ],
    },

    {
      title: 'Event-Driven Saga',
      content:
        'A saga can be implemented through events. Each service completes a local transaction and publishes an event that triggers the next step. Failures can generate compensating events.',
      highlights: [
        {
          title: 'Saga',
          description:
            'A distributed business workflow composed of local transactions.',
        },
        {
          title: 'Compensating event',
          description:
            'An event representing an action that offsets an earlier business operation.',
        },
        {
          title: 'Workflow',
          description:
            'A sequence of related business operations.',
        },
      ],
    },

    {
      title: 'Choreography',
      content:
        'In event-driven choreography, there is no central workflow controller. Each service listens for relevant events and publishes new events after completing its responsibility.',
      highlights: [
        {
          title: 'Choreography',
          description:
            'Distributed workflow coordination through events without a central orchestrator.',
        },
        {
          title: 'Event reaction',
          description:
            'A service performs work after receiving a relevant event.',
        },
        {
          title: 'Decentralized coordination',
          description:
            'Workflow behavior is distributed across participating services.',
        },
      ],
    },

    {
      title: 'Orchestration',
      content:
        'In orchestration, a central workflow component coordinates the steps of a business process and tells services what action to perform. It can make complex workflows easier to understand but introduces a central coordination component.',
      highlights: [
        {
          title: 'Orchestrator',
          description:
            'A component responsible for coordinating a distributed workflow.',
        },
        {
          title: 'Workflow step',
          description:
            'One operation within a larger business process.',
        },
        {
          title: 'Central coordination',
          description:
            'A single workflow component controls the sequence of operations.',
        },
      ],
    },

    {
      title: 'Event-Driven Microservices',
      content:
        'Event-driven communication is commonly used with microservices because it reduces direct runtime coupling. Services can publish business events and allow other services to react independently.',
      highlights: [
        {
          title: 'Loose coupling',
          description:
            'Reducing direct dependency between services.',
        },
        {
          title: 'Independent consumer',
          description:
            'A service that can process events without requiring the producer to directly invoke it.',
        },
        {
          title: 'Business event',
          description:
            'An event representing a meaningful change or occurrence in the business domain.',
        },
      ],
    },

    {
      title: 'Event-Driven Systems and Databases',
      content:
        'Events can be generated from application transactions, database change streams, or dedicated event stores. The chosen approach should preserve correctness and clear ownership of business state.',
      highlights: [
        {
          title: 'Change data capture',
          description:
            'Capturing database changes and publishing them as events or records for downstream processing.',
        },
        {
          title: 'Source of truth',
          description:
            'The authoritative system or data source for a particular piece of business state.',
        },
        {
          title: 'Derived data',
          description:
            'Data calculated from another authoritative source or event stream.',
        },
      ],
    },

    {
      title: 'Event-Driven APIs',
      content:
        'Traditional REST APIs are often request-response oriented. Event-driven APIs instead expose business occurrences through subscriptions, webhooks, streams, or messaging interfaces.',
      highlights: [
        {
          title: 'Webhook',
          description:
            'An HTTP callback sent when a specified event occurs.',
        },
        {
          title: 'Subscription',
          description:
            'A consumer registration for receiving specific events.',
        },
        {
          title: 'Event interface',
          description:
            'A contract defining which events are published and how consumers receive them.',
        },
      ],
    },

    {
      title: 'Event-Driven Security',
      content:
        'Event systems require authentication, authorization, encryption, topic-level access control, schema validation, and careful handling of sensitive event payloads. Events can persist for long periods, so sensitive data requires additional consideration.',
      highlights: [
        {
          title: 'Topic authorization',
          description:
            'Controlling which identities can publish or consume specific event streams.',
        },
        {
          title: 'Encryption',
          description:
            'Protecting event data while it is transmitted or stored.',
        },
        {
          title: 'Sensitive payload',
          description:
            'Event data containing information that requires restricted access or special handling.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'Event-driven systems need visibility into publishing, consumption, lag, retries, failures, dead-letter queues, throughput, and end-to-end business workflows.',
      highlights: [
        {
          title: 'Event throughput',
          description:
            'The number of events processed over a period.',
        },
        {
          title: 'Consumer lag',
          description:
            'The amount of event backlog waiting for a consumer.',
        },
        {
          title: 'Trace context',
          description:
            'Metadata that connects related operations across asynchronous boundaries.',
        },
      ],
    },

    {
      title: 'Testing Event-Driven Systems',
      content:
        'Testing should verify event schemas, producer behavior, consumer behavior, duplicate handling, ordering, retries, dead-letter processing, replay, and end-to-end business workflows.',
      highlights: [
        {
          title: 'Contract test',
          description:
            'A test verifying compatibility between event producers and consumers.',
        },
        {
          title: 'Failure test',
          description:
            'A test verifying behavior when event processing fails.',
        },
        {
          title: 'Replay test',
          description:
            'A test verifying that historical events can be safely reprocessed.',
        },
      ],
    },

    {
      title: 'Common Failure Modes',
      content:
        'Common failures include duplicate events, lost events, consumer crashes, growing consumer lag, poison messages, schema incompatibility, incorrect ordering assumptions, unavailable brokers, and consumers that cannot keep up with producers.',
      highlights: [
        {
          title: 'Duplicate event',
          description:
            'The same logical event is delivered more than once.',
        },
        {
          title: 'Poison message',
          description:
            'An event that repeatedly causes processing failures.',
        },
        {
          title: 'Consumer lag',
          description:
            'A growing backlog between available and processed events.',
        },
      ],
    },

    {
      title: 'When Not to Use Event-Driven Architecture',
      content:
        'Event-driven architecture is not automatically better. A simple synchronous API can be easier to understand when the caller needs an immediate response and the workflow has limited scale or coupling requirements. Events should be introduced when asynchronous decoupling or independent processing provides meaningful value.',
      highlights: [
        {
          title: 'Simple request-response',
          description:
            'A workflow where the caller needs an immediate result.',
        },
        {
          title: 'Operational complexity',
          description:
            'Additional infrastructure and monitoring introduced by event processing.',
        },
        {
          title: 'Unnecessary asynchrony',
          description:
            'Using events where a simple direct call would provide clearer and more reliable behavior.',
        },
      ],
    },

    {
      title: 'AI Platform Example',
      content:
        'An AI platform can publish events such as UserCreated, DocumentUploaded, EmbeddingCompleted, InferenceCompleted, CallCompleted, or BillingUsageRecorded. Independent consumers can then update analytics, notifications, search indexes, billing, and evaluation systems without blocking the primary user workflow.',
      highlights: [
        {
          title: 'DocumentUploaded',
          description:
            'An event indicating that a document has entered the platform.',
        },
        {
          title: 'EmbeddingCompleted',
          description:
            'An event indicating that vector embedding generation has completed.',
        },
        {
          title: 'InferenceCompleted',
          description:
            'An event indicating that an AI inference operation has completed.',
        },
        {
          title: 'BillingUsageRecorded',
          description:
            'An event indicating that billable usage has been recorded.',
        },
      ],
    },

    {
      title: 'AI Voice Agent Example',
      content:
        'In an AI voice platform, a call service can publish CallStarted and CallCompleted events. Separate consumers can handle CRM updates, billing, analytics, call summaries, quality evaluation, and notifications. These operations should generally remain outside the latency-sensitive voice interaction path.',
      highlights: [
        {
          title: 'CallStarted',
          description:
            'An event indicating that a voice interaction has begun.',
        },
        {
          title: 'CallCompleted',
          description:
            'An event indicating that a voice interaction has ended.',
        },
        {
          title: 'Asynchronous analytics',
          description:
            'Processing call analytics after the live interaction without blocking the call.',
        },
      ],
    },

    {
      title: 'Event-Driven Architecture Design Process',
      content:
        'Start by identifying meaningful business events. Define event ownership and schemas. Decide which consumers need synchronous results and which can operate asynchronously. Select delivery semantics, ordering requirements, retention, retry behavior, idempotency strategy, observability, security, and recovery mechanisms.',
      highlights: [
        {
          title: 'Business event identification',
          description:
            'Finding meaningful state changes or business occurrences worth publishing.',
        },
        {
          title: 'Delivery semantics',
          description:
            'Defining how reliably and how many times events may be delivered.',
        },
        {
          title: 'Recovery strategy',
          description:
            'Defining how the system handles failures, retries, replay, and dead-letter events.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is event-driven architecture? Event vs command? Queue vs event stream? Why use asynchronous communication? How do you handle duplicate events? What is the transactional outbox pattern? What is event sourcing? What is CQRS? How do you guarantee ordering? What happens when a consumer fails? How do you handle schema evolution?',
      highlights: [
        {
          title: 'Event vs command',
          description:
            'A fundamental distinction between recording a fact and requesting an action.',
        },
        {
          title: 'Transactional outbox',
          description:
            'A common interview pattern for reliably publishing events after database changes.',
        },
        {
          title: 'Idempotency',
          description:
            'A key reliability concept for duplicate event delivery.',
        },
        {
          title: 'Eventual consistency',
          description:
            'A key trade-off introduced by asynchronous distributed workflows.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would use event-driven communication when the business workflow benefits from asynchronous processing, loose coupling, or independent consumers. I would define clear event ownership and contracts, use durable delivery where required, make consumers idempotent, define retry and dead-letter behavior, and explicitly identify where eventual consistency is acceptable.”',
      highlights: [
        {
          title: 'Business requirement first',
          description:
            'Choose events because they solve a real business or system problem.',
        },
        {
          title: 'Failure behavior',
          description:
            'Explain retries, duplicates, dead-letter handling, and recovery.',
        },
        {
          title: 'Consistency trade-off',
          description:
            'Explicitly state where eventual consistency is acceptable.',
        },
      ],
    },

    {
      title: 'Common Interview Mistakes',
      content:
        'Common mistakes include saying events are always asynchronous without understanding the broader architecture, confusing events with commands, assuming exactly-once delivery is automatic, ignoring duplicate messages, ignoring schema evolution, assuming global ordering, and introducing event-driven architecture where a simple API would be better.',
      highlights: [
        {
          title: 'Exactly-once assumption',
          description:
            'Assuming event processing will automatically happen exactly once.',
        },
        {
          title: 'Ordering assumption',
          description:
            'Assuming events always arrive globally in creation order.',
        },
        {
          title: 'Overengineering',
          description:
            'Introducing messaging infrastructure without a meaningful requirement.',
        },
      ],
    },

    {
      title: 'Event-Driven Systems for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, event-driven architecture is primarily about understanding workflow decoupling, delivery guarantees, ownership, operational risk, business process design, and asynchronous trade-offs. The leader should be able to decide where events create value and where synchronous communication is safer and simpler.',
      highlights: [
        {
          title: 'Workflow decoupling',
          description:
            'Separating business processes so they can evolve and scale independently.',
        },
        {
          title: 'Operational ownership',
          description:
            'Ensuring event producers, consumers, and infrastructure have clear owners.',
        },
        {
          title: 'Business impact',
          description:
            'Understanding how delayed, duplicated, or missing events affect business workflows.',
        },
        {
          title: 'Architecture judgment',
          description:
            'Choosing event-driven communication selectively rather than using it everywhere.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'monolith',
    'scalability',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'caching',
    'load-balancing',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'github-actions',
    'ci-cd',
    'deployment',
    'deployment-strategy',
    'feature-flags',
    'rollback-strategy',
  ],
}

export default eventDrivenSystemsKnowledge
