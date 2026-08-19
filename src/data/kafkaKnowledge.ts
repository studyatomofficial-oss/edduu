import type { KnowledgeDefinition } from './knowledge'

export const kafkaKnowledge: KnowledgeDefinition = {
  technologyId: 'kafka',
  slug: 'kafka',
  title: 'What is Apache Kafka?',
  summary:
    'Apache Kafka is a distributed event streaming platform used to publish, store, process, and consume high-volume streams of events across distributed systems.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Apache Kafka?',
      content:
        'Apache Kafka is a distributed event streaming platform designed to handle large volumes of real-time events. Applications can publish events to Kafka, Kafka stores those events durably, and other applications can consume them independently. Kafka is commonly used for event-driven architectures, data pipelines, integration between services, real-time analytics, and streaming applications.',
    },
    {
      title: 'Why do we need Kafka?',
      content:
        'In distributed systems, applications often need to exchange large numbers of events without requiring the producer and consumer to communicate directly. Kafka provides durable event storage and asynchronous communication. Producers can publish events without waiting for every consumer, while multiple independent consumers can process the same event stream for different purposes.',
    },
    {
      title: 'How does Kafka work?',
      content:
        'A producer publishes records to a Kafka topic. Kafka stores those records in partitions distributed across brokers. Consumers read records from partitions and track their position using offsets. Kafka can retain records for a configured period even after a consumer has processed them, allowing consumers to replay or reprocess historical events.',
      highlights: [
        {
          title: 'Producer',
          description:
            'An application or service that publishes records to Kafka.',
        },
        {
          title: 'Topic',
          description:
            'A named stream or category of records published to Kafka.',
        },
        {
          title: 'Partition',
          description:
            'An ordered, append-only sequence of records within a Kafka topic.',
        },
        {
          title: 'Broker',
          description:
            'A Kafka server responsible for storing and serving partitions.',
        },
        {
          title: 'Consumer',
          description:
            'An application that reads records from Kafka topics.',
        },
      ],
    },
    {
      title: 'Kafka Topics',
      content:
        'A Kafka topic represents a logical stream of events. Producers publish records to topics and consumers subscribe to topics to receive records. Topics can contain multiple partitions so that processing can be distributed across brokers and consumers.',
      highlights: [
        {
          title: 'Topic',
          description:
            'A logical category or stream to which producers publish records.',
        },
        {
          title: 'Topic configuration',
          description:
            'Defines settings such as partition count, replication, retention, and other topic behavior.',
        },
        {
          title: 'Record',
          description:
            'A message or event stored in a Kafka topic.',
        },
        {
          title: 'Topic retention',
          description:
            'Defines how long Kafka keeps records available for consumers to read.',
        },
      ],
    },
    {
      title: 'Kafka Partitions',
      content:
        'Partitions are fundamental to Kafka scalability. Each topic can have multiple partitions. Records within a partition maintain an ordered sequence, while different partitions can be processed in parallel. A record is normally assigned to a partition based on a partitioning strategy, often using a key.',
      highlights: [
        {
          title: 'Partition',
          description:
            'An ordered log of records within a Kafka topic.',
        },
        {
          title: 'Partition key',
          description:
            'A value used to determine which partition should receive a record.',
        },
        {
          title: 'Ordering',
          description:
            'Kafka guarantees record ordering within a partition rather than globally across an entire topic.',
        },
        {
          title: 'Parallelism',
          description:
            'Multiple partitions allow consumers to process records concurrently.',
        },
      ],
    },
    {
      title: 'Kafka Offsets',
      content:
        'Each record within a Kafka partition has an offset that identifies its position in the partition. Consumers use offsets to track which records they have processed. This allows consumers to resume from a known position and can also support replaying historical records.',
      highlights: [
        {
          title: 'Offset',
          description:
            'A sequential position identifying a record within a Kafka partition.',
        },
        {
          title: 'Consumer position',
          description:
            'The location from which a consumer is currently reading records.',
        },
        {
          title: 'Replay',
          description:
            'Reading previously stored events again from an earlier offset.',
        },
        {
          title: 'Commit',
          description:
            'Records the consumer’s progress so processing can resume from an appropriate position.',
        },
      ],
    },
    {
      title: 'Kafka Consumer Groups',
      content:
        'A consumer group allows multiple consumer instances to cooperate when processing a topic. Within a consumer group, a partition is normally assigned to one consumer at a time. Different consumer groups can independently consume the same topic for different business purposes.',
      highlights: [
        {
          title: 'Consumer group',
          description:
            'A group of consumers that cooperate to process partitions of a topic.',
        },
        {
          title: 'Partition assignment',
          description:
            'Determines which consumer in a group processes each partition.',
        },
        {
          title: 'Scaling consumers',
          description:
            'Adding consumers can increase processing parallelism up to the number of available partitions.',
        },
        {
          title: 'Independent consumption',
          description:
            'Different consumer groups can process the same topic independently.',
        },
      ],
    },
    {
      title: 'Kafka Brokers and Clusters',
      content:
        'Kafka normally runs as a cluster containing multiple brokers. Topics and partitions are distributed across the cluster. Replication allows partition data to exist on multiple brokers, improving availability and resilience when individual brokers fail.',
      highlights: [
        {
          title: 'Kafka broker',
          description:
            'A server participating in the Kafka cluster and storing or serving partition data.',
        },
        {
          title: 'Kafka cluster',
          description:
            'A collection of Kafka brokers operating together as a distributed streaming platform.',
        },
        {
          title: 'Replication',
          description:
            'Maintains copies of partition data across multiple brokers.',
        },
        {
          title: 'Replica',
          description:
            'A copy of a partition stored on a Kafka broker.',
        },
      ],
    },
    {
      title: 'Kafka Replication and Fault Tolerance',
      content:
        'Kafka uses partition replication to protect data from individual broker failures. A replicated partition has a leader responsible for serving writes and reads under the applicable configuration, while follower replicas maintain copies of the data. If a broker fails, Kafka can move leadership to an eligible replica.',
      highlights: [
        {
          title: 'Leader',
          description:
            'The replica responsible for handling partition operations according to Kafka’s configured behavior.',
        },
        {
          title: 'Follower',
          description:
            'A replica that maintains a copy of partition data.',
        },
        {
          title: 'Replication factor',
          description:
            'The number of replicas maintained for a partition.',
        },
        {
          title: 'Failover',
          description:
            'The process of continuing service through another suitable replica after a failure.',
        },
      ],
    },
    {
      title: 'Kafka Producer Architecture',
      content:
        'Kafka producers serialize records and send them to brokers. Producers can choose a partition directly or provide a key that participates in partition selection. Producer configuration can control batching, compression, acknowledgements, retries, and delivery behavior.',
      highlights: [
        {
          title: 'Serialization',
          description:
            'Converts application data into a format that can be transmitted and stored as Kafka records.',
        },
        {
          title: 'Batching',
          description:
            'Groups multiple records into a batch to improve throughput and reduce communication overhead.',
        },
        {
          title: 'Compression',
          description:
            'Reduces the size of records transferred and stored by using a supported compression algorithm.',
        },
        {
          title: 'Acknowledgement',
          description:
            'Defines how the producer confirms that a record has been accepted according to the configured durability behavior.',
        },
      ],
    },
    {
      title: 'Kafka Consumer Architecture',
      content:
        'Consumers poll Kafka for records and process them according to application logic. Consumer groups distribute partition processing across instances. Consumer configuration controls polling, batching, offset management, session behavior, and processing characteristics.',
      highlights: [
        {
          title: 'Poll',
          description:
            'The mechanism through which a consumer retrieves available records.',
        },
        {
          title: 'Consumer lag',
          description:
            'The difference between the latest available records and the position currently processed by a consumer.',
        },
        {
          title: 'Offset commit',
          description:
            'Records the consumer’s processing position.',
        },
        {
          title: 'Rebalance',
          description:
            'Redistributes partition assignments among consumers in a consumer group.',
        },
      ],
    },
    {
      title: 'Kafka Delivery Semantics',
      content:
        'Kafka applications can be designed around different message delivery guarantees. The appropriate choice depends on business requirements, processing logic, and the consequences of duplicates or lost events.',
      highlights: [
        {
          title: 'At-most-once',
          description:
            'A record is processed zero or one time, accepting the possibility of loss in some failure scenarios.',
        },
        {
          title: 'At-least-once',
          description:
            'A record is intended to be processed at least once, which means duplicates can occur.',
        },
        {
          title: 'Exactly-once semantics',
          description:
            'Uses Kafka-supported mechanisms and application design to provide stronger guarantees for particular processing workflows.',
        },
        {
          title: 'Idempotency',
          description:
            'Designing processing so repeated handling of the same event does not create unintended duplicate effects.',
        },
      ],
    },
    {
      title: 'Kafka Retention',
      content:
        'Kafka treats stored records as an event log rather than deleting them immediately after a consumer reads them. Retention policies determine how long records remain available. This makes replay and independent consumption possible.',
      highlights: [
        {
          title: 'Retention period',
          description:
            'The amount of time records are retained according to topic configuration.',
        },
        {
          title: 'Retention size',
          description:
            'A storage-based condition that can influence when older records are removed.',
        },
        {
          title: 'Event replay',
          description:
            'Reprocessing previously retained events from an earlier point in the stream.',
        },
        {
          title: 'Log compaction',
          description:
            'A topic retention mechanism that preserves the latest value for keys according to Kafka’s compaction model.',
        },
      ],
    },
    {
      title: 'Kafka and Event-Driven Architecture',
      content:
        'Kafka is widely used as infrastructure for event-driven architectures. Services publish events describing business or system activity, and independent consumers react to those events. This can reduce direct coupling between producers and consumers and allow multiple downstream capabilities to respond to the same event stream.',
      highlights: [
        {
          title: 'Event producer',
          description:
            'A service that publishes an event when something meaningful happens.',
        },
        {
          title: 'Event consumer',
          description:
            'A service that reacts to events published by another component.',
        },
        {
          title: 'Event stream',
          description:
            'A continuously evolving sequence of events.',
        },
        {
          title: 'Loose coupling',
          description:
            'Reduces direct dependency between producers and consumers by communicating through events.',
        },
      ],
    },
    {
      title: 'Kafka vs traditional message queues',
      content:
        'Kafka and traditional message brokers can both support asynchronous communication, but their architectural models differ. Kafka emphasizes durable distributed event logs, partitions, replay, and high-throughput streaming. Traditional brokers often emphasize message delivery, routing patterns, acknowledgements, and queue-based workloads. The correct choice depends on workload requirements.',
      highlights: [
        {
          title: 'Event log',
          description:
            'A durable ordered sequence of records that consumers can read according to their positions.',
        },
        {
          title: 'Message queue',
          description:
            'A messaging pattern where messages are typically delivered to consumers according to queue semantics.',
        },
        {
          title: 'Replay',
          description:
            'The ability to process previously retained events again.',
        },
        {
          title: 'Work queue',
          description:
            'A pattern where multiple workers cooperate to process units of work.',
        },
      ],
    },
    {
      title: 'Kafka and Stream Processing',
      content:
        'Kafka can act as the foundation for stream-processing architectures. Stream-processing applications consume events, transform or aggregate them, and produce new streams or results. This supports real-time analytics, monitoring, fraud detection, recommendations, operational automation, and other event-driven use cases.',
      highlights: [
        {
          title: 'Stream processing',
          description:
            'Processing continuously arriving events as they are produced.',
        },
        {
          title: 'Transformation',
          description:
            'Changes an event stream into another representation or format.',
        },
        {
          title: 'Aggregation',
          description:
            'Combines multiple events to calculate a result such as a count, sum, average, or state.',
        },
        {
          title: 'Window',
          description:
            'Defines a time or event boundary over which streaming data can be analyzed.',
        },
      ],
    },
    {
      title: 'Kafka and Schema Management',
      content:
        'Event-driven systems need stable data contracts between producers and consumers. Kafka environments commonly use schemas and schema management practices to define event structure, validate messages, and support controlled evolution of event formats.',
      highlights: [
        {
          title: 'Event schema',
          description:
            'Defines the expected structure and meaning of an event.',
        },
        {
          title: 'Schema evolution',
          description:
            'Changes an event schema while maintaining appropriate compatibility for existing producers and consumers.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Allows existing consumers to continue working with newer event versions under defined compatibility rules.',
        },
        {
          title: 'Data contract',
          description:
            'An explicit agreement between producers and consumers about event structure and semantics.',
        },
      ],
    },
    {
      title: 'Kafka and Transactions',
      content:
        'Kafka supports transactional mechanisms that can help applications coordinate certain writes and provide stronger processing guarantees. Transactions are useful in workflows where consistency across multiple Kafka operations matters, but they add complexity and should be used only when the business requirement justifies them.',
      highlights: [
        {
          title: 'Kafka transaction',
          description:
            'A mechanism for grouping supported Kafka operations into a transactional unit.',
        },
        {
          title: 'Atomicity',
          description:
            'Ensures a defined group of operations is treated as a single logical unit.',
        },
        {
          title: 'Transactional producer',
          description:
            'A producer configured to participate in Kafka transactions.',
        },
        {
          title: 'Exactly-once processing',
          description:
            'A processing design that uses transactional and idempotent mechanisms to reduce duplicate effects under supported conditions.',
        },
      ],
    },
    {
      title: 'Kafka Security',
      content:
        'Production Kafka deployments require security controls for clients, brokers, topics, and administrative operations. Authentication establishes client identity, authorization controls access to resources, encryption protects communication, and auditing provides visibility into important operations.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a Kafka client or component.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which clients can perform actions on Kafka resources.',
        },
        {
          title: 'TLS',
          description:
            'Protects Kafka communication through encryption and authentication of supported endpoints.',
        },
        {
          title: 'ACL',
          description:
            'Defines permissions for identities or principals on Kafka resources and operations.',
        },
      ],
    },
    {
      title: 'Kafka Performance and Scaling',
      content:
        'Kafka is designed for high throughput and horizontal scaling. Performance depends on partitioning, broker capacity, network bandwidth, storage characteristics, producer and consumer configuration, record size, replication, and processing behavior.',
      highlights: [
        {
          title: 'Throughput',
          description:
            'The amount of data or number of records processed within a period.',
        },
        {
          title: 'Partition scaling',
          description:
            'Uses additional partitions to increase potential parallel processing.',
        },
        {
          title: 'Consumer parallelism',
          description:
            'Allows multiple consumer instances to process different partitions concurrently.',
        },
        {
          title: 'Backpressure',
          description:
            'A condition where downstream processing cannot keep up with incoming data and the system must control or absorb the resulting pressure.',
        },
      ],
    },
    {
      title: 'Kafka Consumer Lag',
      content:
        'Consumer lag measures how far a consumer or consumer group is behind the latest available records. Increasing lag can indicate insufficient processing capacity, slow downstream dependencies, consumer failures, partition imbalance, or other bottlenecks.',
      highlights: [
        {
          title: 'Consumer lag',
          description:
            'The amount of unprocessed or not-yet-consumed data relative to the latest available position.',
        },
        {
          title: 'Lag monitoring',
          description:
            'Tracks consumer progress to identify processing delays and capacity problems.',
        },
        {
          title: 'Processing bottleneck',
          description:
            'A component or operation that limits the rate at which events can be processed.',
        },
        {
          title: 'Scaling consumer group',
          description:
            'Adds consumer instances when additional partition-level parallelism is available.',
        },
      ],
    },
    {
      title: 'Kafka in AI Systems',
      content:
        'Kafka can support AI platforms by transporting events related to inference requests, model outputs, user activity, document processing, feature pipelines, evaluation events, agent actions, and operational telemetry. Event streams can decouple AI workloads and support scalable asynchronous processing.',
      highlights: [
        {
          title: 'Inference event',
          description:
            'An event representing an AI inference request, completion, or result.',
        },
        {
          title: 'Feature pipeline',
          description:
            'A data-processing workflow that prepares information used by machine learning systems.',
        },
        {
          title: 'AI workflow event',
          description:
            'An event representing a meaningful step in an AI or agent workflow.',
        },
        {
          title: 'Asynchronous inference',
          description:
            'An inference workflow where the request and processing are separated through an asynchronous mechanism.',
        },
      ],
    },
    {
      title: 'Kafka in production',
      content:
        'A production Kafka platform requires capacity planning, replication strategy, partition design, retention management, monitoring, security, backup or recovery planning, schema governance, consumer lag monitoring, upgrade procedures, and clear ownership. Kafka should be operated as a critical distributed platform rather than treated as a simple messaging server.',
      highlights: [
        {
          title: 'Partition strategy',
          description:
            'Defines how topics are partitioned to balance ordering, throughput, scalability, and operational requirements.',
        },
        {
          title: 'Replication strategy',
          description:
            'Defines how partition data is copied across brokers for resilience.',
        },
        {
          title: 'Capacity planning',
          description:
            'Estimates storage, network, compute, partition, and throughput requirements.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Defines how Kafka data and workloads can be restored after major infrastructure failures.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly assigns responsibility for Kafka reliability, security, upgrades, monitoring, and incident response.',
        },
      ],
    },
    {
      title: 'Common Kafka mistakes',
      content:
        'Common mistakes include creating too many partitions without a capacity plan, assuming global ordering exists, ignoring consumer lag, using retries without considering duplicates, treating Kafka as a traditional work queue, designing unstable event schemas, and failing to plan retention and storage growth.',
      highlights: [
        {
          title: 'Assuming global ordering',
          description:
            'Assuming records across all partitions are globally ordered when Kafka ordering is maintained within partitions.',
        },
        {
          title: 'Too many partitions',
          description:
            'Creating unnecessary partition counts that increase operational and resource overhead.',
        },
        {
          title: 'Ignoring lag',
          description:
            'Failing to monitor whether consumers are keeping up with event production.',
        },
        {
          title: 'Duplicate processing',
          description:
            'Failing to design consumers for duplicate delivery or retries where applicable.',
        },
        {
          title: 'Poor event contracts',
          description:
            'Changing event structures without considering producer and consumer compatibility.',
        },
      ],
    },
    {
      title: 'Explore Kafka in EDDUU',
      content:
        'EDDUU connects Apache Kafka with API Gateway, Service Mesh, RabbitMQ, Pulsar, NATS, Event-Driven Architecture, Webhooks, REST APIs, gRPC, Observability, Security, Distributed Systems, and AI platforms.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'service-mesh',
    'rabbitmq',
    'pulsar',
    'nats',
    'event-driven-architecture',
    'webhooks',
    'rest-apis',
    'grpc',
    'security',
    'observability',
  ],
}

export default kafkaKnowledge
