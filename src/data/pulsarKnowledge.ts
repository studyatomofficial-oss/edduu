import type { KnowledgeDefinition } from './knowledge'

export const pulsarKnowledge: KnowledgeDefinition = {
  technologyId: 'pulsar',
  slug: 'pulsar',
  title: 'What is Apache Pulsar?',
  summary:
    'Apache Pulsar is a distributed messaging and event-streaming platform designed for multi-tenant, geo-replicated, high-throughput workloads with durable messaging and flexible subscription models.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Apache Pulsar?',
      content:
        'Apache Pulsar is a distributed messaging and event-streaming platform used to move and store messages and events between producers and consumers. It is designed for large-scale distributed systems and provides features such as durable messaging, multiple subscription models, multi-tenancy, geo-replication, and separation of serving and storage responsibilities.',
    },
    {
      title: 'Why do we need Apache Pulsar?',
      content:
        'Modern distributed applications often need to process large numbers of events across multiple applications, regions, and tenants. Pulsar provides a messaging platform that can support asynchronous communication, event streaming, durable retention, independent consumers, and geographic replication while separating the serving layer from the long-term storage layer.',
    },
    {
      title: 'How does Apache Pulsar work?',
      content:
        'A producer publishes messages to a Pulsar topic. Pulsar brokers handle client connections and message serving, while persistent message storage is handled by Apache BookKeeper. Consumers subscribe to topics and receive messages according to their subscription type. This architecture separates message serving from storage and allows the platform to scale these concerns independently.',
      highlights: [
        {
          title: 'Producer',
          description:
            'An application or service that publishes messages to Pulsar.',
        },
        {
          title: 'Broker',
          description:
            'A Pulsar server that handles client connections, routing, dispatch, and message serving.',
        },
        {
          title: 'Topic',
          description:
            'A named stream to which producers publish and consumers subscribe.',
        },
        {
          title: 'Consumer',
          description:
            'An application that receives and processes messages from a Pulsar subscription.',
        },
        {
          title: 'BookKeeper',
          description:
            'The distributed storage system used by Pulsar for persistent message data.',
        },
      ],
    },
    {
      title: 'Pulsar Topics',
      content:
        'A Pulsar topic is a named stream of messages. Topics can be persistent or non-persistent. Persistent topics store messages durably using the Pulsar storage architecture, while non-persistent topics prioritize lower-latency delivery without durable storage.',
      highlights: [
        {
          title: 'Topic',
          description:
            'A logical stream to which messages are published.',
        },
        {
          title: 'Persistent topic',
          description:
            'A topic whose messages are stored durably.',
        },
        {
          title: 'Non-persistent topic',
          description:
            'A topic designed for message delivery without durable persistence.',
        },
        {
          title: 'Partitioned topic',
          description:
            'A topic divided into multiple partitions to increase parallelism and throughput.',
        },
      ],
    },
    {
      title: 'Pulsar Producers',
      content:
        'Pulsar producers publish messages to topics. Producers can use batching, compression, asynchronous sending, routing modes, and other configuration options to balance throughput, latency, and reliability.',
      highlights: [
        {
          title: 'Producer',
          description:
            'Publishes messages to a Pulsar topic.',
        },
        {
          title: 'Batching',
          description:
            'Groups multiple messages into batches to improve throughput and reduce communication overhead.',
        },
        {
          title: 'Compression',
          description:
            'Reduces the amount of data transferred and stored.',
        },
        {
          title: 'Message routing',
          description:
            'Determines how messages are distributed across partitions or destinations.',
        },
      ],
    },
    {
      title: 'Pulsar Consumers',
      content:
        'Consumers receive messages through subscriptions. Pulsar provides multiple subscription modes that support different consumption patterns, including competing consumers, fan-out, and key-based processing.',
      highlights: [
        {
          title: 'Consumer',
          description:
            'Reads and processes messages from a Pulsar subscription.',
        },
        {
          title: 'Subscription',
          description:
            'A named consumption state that determines how messages are delivered to consumers.',
        },
        {
          title: 'Acknowledgement',
          description:
            'Confirms that a consumer has successfully processed a message.',
        },
        {
          title: 'Negative acknowledgement',
          description:
            'Signals that a message should be considered unsuccessful and may require redelivery.',
        },
      ],
    },
    {
      title: 'Pulsar Subscription Types',
      content:
        'Pulsar provides several subscription types for different messaging patterns. Exclusive subscriptions typically allow one consumer, shared subscriptions distribute messages among consumers, failover subscriptions provide active and standby consumers, and key-shared subscriptions preserve key-based processing relationships while distributing work.',
      highlights: [
        {
          title: 'Exclusive',
          description:
            'A single consumer receives messages for a subscription.',
        },
        {
          title: 'Shared',
          description:
            'Messages are distributed among multiple consumers.',
        },
        {
          title: 'Failover',
          description:
            'One consumer is active while others can take over when the active consumer fails.',
        },
        {
          title: 'Key_Shared',
          description:
            'Messages with the same key can be delivered consistently to the same consumer while allowing parallel processing across keys.',
        },
      ],
    },
    {
      title: 'Pulsar Architecture',
      content:
        'Pulsar separates message-serving responsibilities from persistent storage. Brokers handle client-facing operations, while BookKeeper provides durable storage through storage nodes commonly called bookies. This separation allows serving and storage capacity to scale independently.',
      highlights: [
        {
          title: 'Broker layer',
          description:
            'Handles client connections, topic ownership, message dispatch, and routing.',
        },
        {
          title: 'BookKeeper',
          description:
            'Provides distributed persistent storage for Pulsar messages.',
        },
        {
          title: 'Bookie',
          description:
            'A BookKeeper storage server responsible for storing replicated ledger data.',
        },
        {
          title: 'Storage separation',
          description:
            'Separates message-serving capacity from persistent storage capacity.',
        },
      ],
    },
    {
      title: 'Pulsar and BookKeeper',
      content:
        'Apache BookKeeper is a core storage component in Pulsar. It provides replicated append-only storage structures called ledgers. Pulsar uses BookKeeper to persist message data and maintain durable storage across multiple storage nodes.',
      highlights: [
        {
          title: 'Ledger',
          description:
            'An append-oriented storage structure maintained by BookKeeper.',
        },
        {
          title: 'Bookie',
          description:
            'A BookKeeper server that stores ledger entries.',
        },
        {
          title: 'Replication',
          description:
            'Maintains copies of data across storage nodes for resilience.',
        },
        {
          title: 'Durable storage',
          description:
            'Storage designed to preserve data across appropriate component failures.',
        },
      ],
    },
    {
      title: 'Pulsar Partitioning',
      content:
        'Partitioned topics divide a logical topic into multiple partitions. This allows producers and consumers to use parallel processing and increase throughput. Partitioning decisions should consider ordering, key distribution, consumer capacity, and workload characteristics.',
      highlights: [
        {
          title: 'Partition',
          description:
            'A subdivision of a topic used to increase processing parallelism.',
        },
        {
          title: 'Partition key',
          description:
            'A key used to influence which partition receives a message.',
        },
        {
          title: 'Parallelism',
          description:
            'Allows multiple consumers or processing workers to operate concurrently.',
        },
        {
          title: 'Ordering',
          description:
            'Defines the level at which message sequence is preserved according to the chosen routing and subscription model.',
        },
      ],
    },
    {
      title: 'Pulsar Message Retention',
      content:
        'Pulsar can retain messages beyond normal subscription acknowledgement behavior according to configured retention and backlog policies. This supports replay and recovery scenarios and allows consumers to process historical messages under appropriate configurations.',
      highlights: [
        {
          title: 'Retention',
          description:
            'Keeps messages available according to configured retention policies.',
        },
        {
          title: 'Backlog',
          description:
            'Messages that remain available for a subscription because they have not been acknowledged or are otherwise retained.',
        },
        {
          title: 'Replay',
          description:
            'Processes previously stored messages again.',
        },
        {
          title: 'Expiry',
          description:
            'Removes or makes messages unavailable according to configured lifecycle policies.',
        },
      ],
    },
    {
      title: 'Pulsar and Multi-Tenancy',
      content:
        'Multi-tenancy is a major Pulsar capability. Organizations can logically separate workloads using tenants and namespaces while applying different policies for quotas, authentication, authorization, retention, and other operational requirements.',
      highlights: [
        {
          title: 'Tenant',
          description:
            'A logical organizational boundary used to isolate messaging resources and policies.',
        },
        {
          title: 'Namespace',
          description:
            'A logical grouping of topics within a tenant where policies can be applied.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Prevents one organization or workload from accessing another tenant’s protected messaging resources.',
        },
        {
          title: 'Resource quota',
          description:
            'Limits resource consumption by a tenant or namespace.',
        },
      ],
    },
    {
      title: 'Pulsar and Geo-Replication',
      content:
        'Pulsar supports replication of messaging data between clusters in different geographic locations. Geo-replication can support disaster recovery, regional processing, and global applications, but it requires careful planning around latency, consistency, failure recovery, and operational ownership.',
      highlights: [
        {
          title: 'Cluster',
          description:
            'A Pulsar deployment operating within a particular infrastructure or geographic environment.',
        },
        {
          title: 'Geo-replication',
          description:
            'Replicates messaging data between Pulsar clusters across geographic locations.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Provides mechanisms for recovering messaging workloads after major regional or infrastructure failures.',
        },
        {
          title: 'Cross-region latency',
          description:
            'The network delay introduced when communicating between geographically separated locations.',
        },
      ],
    },
    {
      title: 'Pulsar and Event-Driven Architecture',
      content:
        'Pulsar can act as infrastructure for event-driven systems. Services publish events describing business or system activity, while independent consumers subscribe to those events and react asynchronously. Pulsar’s topic, subscription, retention, and replication capabilities support a variety of event-driven patterns.',
      highlights: [
        {
          title: 'Event producer',
          description:
            'Publishes an event when something meaningful happens.',
        },
        {
          title: 'Event consumer',
          description:
            'Processes an event and performs a corresponding action.',
        },
        {
          title: 'Event stream',
          description:
            'A continuously evolving sequence of events.',
        },
        {
          title: 'Loose coupling',
          description:
            'Allows producers and consumers to evolve independently through event contracts.',
        },
      ],
    },
    {
      title: 'Pulsar vs Apache Kafka',
      content:
        'Pulsar and Kafka are both distributed event-streaming platforms, but their architectures and operational models differ. Kafka is built around brokers storing partition logs, while Pulsar separates serving and storage through brokers and BookKeeper. Pulsar also provides native multi-tenancy, multiple subscription models, and geo-replication capabilities that can be important for particular large-scale architectures.',
      highlights: [
        {
          title: 'Kafka',
          description:
            'A distributed event streaming platform centered around topics, partitions, brokers, consumer groups, offsets, and durable logs.',
        },
        {
          title: 'Pulsar',
          description:
            'A distributed messaging and streaming platform using brokers for serving and BookKeeper for persistent storage.',
        },
        {
          title: 'Storage separation',
          description:
            'Allows message-serving and persistent-storage capacity to scale independently.',
        },
        {
          title: 'Multi-tenancy',
          description:
            'Provides first-class logical isolation and policy controls for organizations and workloads.',
        },
      ],
    },
    {
      title: 'Pulsar vs RabbitMQ',
      content:
        'RabbitMQ is a message broker centered on exchanges, queues, routing, and acknowledgements. Pulsar is designed as a distributed messaging and event-streaming platform with durable topic storage, subscriptions, partitioning, and geo-replication. RabbitMQ is often a strong choice for task-oriented messaging and flexible routing, while Pulsar is designed for larger distributed streaming and messaging workloads.',
      highlights: [
        {
          title: 'RabbitMQ',
          description:
            'Message broker emphasizing exchanges, queues, routing, acknowledgements, and work distribution.',
        },
        {
          title: 'Pulsar',
          description:
            'Distributed messaging and streaming platform emphasizing durable topics, subscriptions, partitioning, and scalable storage.',
        },
        {
          title: 'Task queue',
          description:
            'A messaging pattern optimized around distributing units of work to consumers.',
        },
        {
          title: 'Streaming platform',
          description:
            'Infrastructure designed to handle continuous streams of durable events at scale.',
        },
      ],
    },
    {
      title: 'Pulsar and Security',
      content:
        'Production Pulsar deployments require authentication, authorization, encrypted communication, tenant isolation, credential management, and secure administrative access. Security policies should be applied consistently across tenants, namespaces, topics, producers, consumers, and operational interfaces.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of a Pulsar client or administrator.',
        },
        {
          title: 'Authorization',
          description:
            'Controls which identities can perform operations on messaging resources.',
        },
        {
          title: 'TLS',
          description:
            'Protects messaging communication through encryption and endpoint authentication.',
        },
        {
          title: 'Namespace policy',
          description:
            'Controls messaging behavior and access at a logical namespace boundary.',
        },
      ],
    },
    {
      title: 'Pulsar Performance and Scaling',
      content:
        'Pulsar can scale through additional brokers, storage nodes, partitions, and consumers. Because serving and storage are separated, organizations can scale these dimensions according to workload requirements. Performance depends on message size, throughput, partitioning, replication, storage, network capacity, and consumer behavior.',
      highlights: [
        {
          title: 'Broker scaling',
          description:
            'Adds serving capacity for client connections and message traffic.',
        },
        {
          title: 'Bookie scaling',
          description:
            'Adds storage capacity through additional BookKeeper nodes.',
        },
        {
          title: 'Partition scaling',
          description:
            'Increases parallel processing capacity for partitioned topics.',
        },
        {
          title: 'Consumer scaling',
          description:
            'Adds consumers to increase processing capacity where the subscription model supports parallelism.',
        },
      ],
    },
    {
      title: 'Pulsar and Schema Management',
      content:
        'Stable event contracts are important when many producers and consumers communicate through shared topics. Pulsar supports schema mechanisms that can help define message structure and manage compatibility as applications evolve.',
      highlights: [
        {
          title: 'Schema',
          description:
            'Defines the expected structure and data types of messages.',
        },
        {
          title: 'Schema compatibility',
          description:
            'Defines whether producers and consumers can continue operating as schemas evolve.',
        },
        {
          title: 'Event contract',
          description:
            'A shared agreement about the structure and meaning of published events.',
        },
        {
          title: 'Schema evolution',
          description:
            'Changes a message contract while maintaining required compatibility.',
        },
      ],
    },
    {
      title: 'Pulsar in AI Systems',
      content:
        'Pulsar can support AI platforms that need large-scale asynchronous event processing. Potential workloads include document pipelines, model inference events, feature processing, agent workflows, evaluation pipelines, telemetry, and multi-tenant AI workloads.',
      highlights: [
        {
          title: 'AI event stream',
          description:
            'A stream of events generated by AI applications, models, agents, or supporting services.',
        },
        {
          title: 'Inference pipeline',
          description:
            'A workflow that receives and processes AI inference tasks asynchronously.',
        },
        {
          title: 'Agent workflow',
          description:
            'A sequence of AI-driven steps that can generate and consume asynchronous events.',
        },
        {
          title: 'Multi-tenant AI',
          description:
            'An AI platform serving multiple organizations with isolated resources and policies.',
        },
      ],
    },
    {
      title: 'Pulsar in production',
      content:
        'A production Pulsar platform requires careful planning for broker capacity, BookKeeper storage, partitioning, replication, retention, tenant isolation, geo-replication, security, monitoring, disaster recovery, upgrades, and operational ownership. The storage and serving layers must both be monitored because failures or bottlenecks in either can affect the platform.',
      highlights: [
        {
          title: 'Storage capacity',
          description:
            'Plans the durable storage required for message retention and replication.',
        },
        {
          title: 'Broker capacity',
          description:
            'Plans serving capacity for client connections and message traffic.',
        },
        {
          title: 'Geo-recovery',
          description:
            'Defines how workloads recover after regional or cluster-level failures.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly assigns responsibility for reliability, security, monitoring, upgrades, and incident response.',
        },
      ],
    },
    {
      title: 'Common Pulsar mistakes',
      content:
        'Common mistakes include adopting Pulsar without understanding its operational architecture, under-sizing BookKeeper storage, ignoring partition and retention growth, failing to design tenant boundaries, assuming geo-replication automatically solves disaster recovery, and treating the platform as a simple queue without understanding its streaming capabilities.',
      highlights: [
        {
          title: 'Storage under-sizing',
          description:
            'Failing to plan sufficient BookKeeper capacity for retention and replication requirements.',
        },
        {
          title: 'Poor partition design',
          description:
            'Choosing partitioning without considering throughput, ordering, and consumer parallelism.',
        },
        {
          title: 'Weak tenant isolation',
          description:
            'Failing to define appropriate access and resource policies between tenants.',
        },
        {
          title: 'Incomplete disaster recovery',
          description:
            'Assuming replication alone guarantees recovery without testing operational recovery procedures.',
        },
        {
          title: 'Operational complexity',
          description:
            'Underestimating the expertise required to operate brokers, storage, replication, and policies reliably.',
        },
      ],
    },
    {
      title: 'Explore Apache Pulsar in EDDUU',
      content:
        'EDDUU connects Apache Pulsar with Apache Kafka, RabbitMQ, NATS, Event-Driven Architecture, API Gateway, Service Mesh, Webhooks, REST APIs, Security, Observability, Distributed Systems, and AI platforms.',
    },
  ],
  relatedTechnologyIds: [
    'api-gateway',
    'service-mesh',
    'kafka',
    'rabbitmq',
    'nats',
    'event-driven-architecture',
    'webhooks',
    'rest-apis',
    'security',
    'observability',
  ],
}

export default pulsarKnowledge
