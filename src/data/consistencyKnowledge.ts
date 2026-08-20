import type { KnowledgeDefinition } from './knowledge'

export const consistencyKnowledge: KnowledgeDefinition = {
  technologyId: 'consistency',
  slug: 'consistency',
  title: 'Data Consistency',
  summary:
    'Data consistency describes how reliably different reads, replicas, services, and users observe compatible versions of application data across a distributed system.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Consistency?',
      content:
        'Consistency is about whether different parts of a system see data in an expected and defined state. In a distributed system, the same data may exist on multiple machines, replicas, caches, or services, so architects must define when and how changes become visible.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'The degree to which different readers or system components observe data according to defined rules.',
        },
        {
          title: 'Replica',
          description:
            'A copy of data maintained on another system or node.',
        },
        {
          title: 'Source of truth',
          description:
            'The authoritative system responsible for the canonical version of data.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school where the same student record is written in three registers. If a student changes their phone number, but only one register is updated, different teachers may see different phone numbers. Consistency is about making sure the registers follow an agreed rule for when everyone sees the updated information.',
      highlights: [
        {
          title: 'School registers',
          description:
            'Comparable to replicated databases or services.',
        },
        {
          title: 'Updated phone number',
          description:
            'Comparable to a data change.',
        },
        {
          title: 'Teachers',
          description:
            'Comparable to different readers or services.',
        },
      ],
    },

    {
      title: 'Why Consistency Matters',
      content:
        'Incorrectly handled consistency can produce duplicate actions, stale decisions, incorrect balances, lost updates, confusing user experiences, and business failures. The correct consistency model depends on the business operation.',
      highlights: [
        {
          title: 'Correctness',
          description:
            'Ensuring data behaves according to business rules.',
        },
        {
          title: 'Stale data',
          description:
            'Data that does not yet reflect the latest committed change.',
        },
        {
          title: 'Business invariant',
          description:
            'A rule that must remain true for the system to be correct.',
        },
      ],
    },

    {
      title: 'Strong Consistency',
      content:
        'Strong consistency means that after a successful write becomes visible according to the system’s guarantee, subsequent reads observe the latest applicable value rather than an older replica version.',
      highlights: [
        {
          title: 'Strong consistency',
          description:
            'A consistency guarantee where reads observe the latest committed state according to the system model.',
        },
        {
          title: 'Fresh read',
          description:
            'A read that reflects the latest state required by the consistency guarantee.',
        },
        {
          title: 'Trade-off',
          description:
            'Stronger consistency can require additional coordination, latency, or reduced availability depending on the architecture.',
        },
      ],
    },

    {
      title: 'Eventual Consistency',
      content:
        'Eventual consistency allows replicas to temporarily contain different values but expects them to converge if no further updates occur. It can improve availability and scalability when immediate consistency is not required.',
      highlights: [
        {
          title: 'Eventual consistency',
          description:
            'A model where replicas may temporarily differ but eventually converge.',
        },
        {
          title: 'Convergence',
          description:
            'The process by which replicated state becomes consistent over time.',
        },
        {
          title: 'Staleness window',
          description:
            'The period during which a reader may observe an older value.',
        },
      ],
    },

    {
      title: 'Strong vs Eventual Consistency',
      content:
        'The choice should be driven by business requirements. A bank balance or inventory reservation may need stronger guarantees, while social-media counters, recommendations, analytics dashboards, or some search indexes may tolerate temporary staleness.',
      highlights: [
        {
          title: 'Strong consistency use case',
          description:
            'Operations where observing stale state can cause a significant business error.',
        },
        {
          title: 'Eventual consistency use case',
          description:
            'Operations where temporary staleness is acceptable.',
        },
        {
          title: 'Business trade-off',
          description:
            'Balancing correctness, latency, availability, scalability, and complexity.',
        },
      ],
    },

    {
      title: 'Read-After-Write Consistency',
      content:
        'Read-after-write consistency ensures that after a client successfully writes a value, a subsequent read by that client observes that write or a newer state according to the system guarantee.',
      highlights: [
        {
          title: 'Read-after-write',
          description:
            'A consistency property where a client can observe its successful writes on subsequent reads.',
        },
        {
          title: 'Client session',
          description:
            'The sequence of operations associated with a particular user or application interaction.',
        },
        {
          title: 'User expectation',
          description:
            'The requirement that an update appears to have taken effect when the user immediately reads the changed data.',
        },
      ],
    },

    {
      title: 'Monotonic Reads',
      content:
        'Monotonic reads mean that once a client has observed a particular version of data, subsequent reads should not return an older version. This prevents users from apparently moving backward in time.',
      highlights: [
        {
          title: 'Monotonic read',
          description:
            'A guarantee that later reads do not return older state than what the same client has already observed.',
        },
        {
          title: 'Version',
          description:
            'A representation of the ordering or age of a particular data state.',
        },
        {
          title: 'Read regression',
          description:
            'A later read returning older information than a previous read.',
        },
      ],
    },

    {
      title: 'Monotonic Writes',
      content:
        'Monotonic writes require writes from the same client or logical workflow to be applied in an order that does not violate their causal sequence. This helps prevent later operations from being applied before earlier dependent operations.',
      highlights: [
        {
          title: 'Monotonic write',
          description:
            'A guarantee that related writes preserve their required ordering.',
        },
        {
          title: 'Write ordering',
          description:
            'The sequence in which updates are applied.',
        },
        {
          title: 'Dependency',
          description:
            'A relationship where one operation logically depends on another.',
        },
      ],
    },

    {
      title: 'Causal Consistency',
      content:
        'Causal consistency preserves the ordering of causally related operations. If one operation logically depends on another, readers should not observe the dependent operation without being able to observe its cause.',
      highlights: [
        {
          title: 'Causal consistency',
          description:
            'A consistency model that preserves the ordering of causally related operations.',
        },
        {
          title: 'Causal relationship',
          description:
            'A relationship where one operation is influenced by or depends on another.',
        },
        {
          title: 'Causal order',
          description:
            'The logical ordering required by dependencies between operations.',
        },
      ],
    },

    {
      title: 'Linearizability',
      content:
        'Linearizability is a strong consistency property where each operation appears to take effect at a single point between its invocation and response, while respecting real-time ordering between non-overlapping operations.',
      highlights: [
        {
          title: 'Linearizability',
          description:
            'A strong consistency model that makes operations appear atomic and consistent with real-time ordering.',
        },
        {
          title: 'Atomic operation',
          description:
            'An operation that appears to happen as one indivisible action.',
        },
        {
          title: 'Real-time ordering',
          description:
            'The ordering relationship between operations based on when they occur.',
        },
      ],
    },

    {
      title: 'Serializability',
      content:
        'Serializability is a database transaction property. A set of concurrent transactions is considered serializable if the resulting effect is equivalent to some valid serial execution of those transactions.',
      highlights: [
        {
          title: 'Serializability',
          description:
            'A transaction isolation property where concurrent execution is equivalent to some valid serial ordering.',
        },
        {
          title: 'Transaction',
          description:
            'A logical unit of database work that follows defined correctness rules.',
        },
        {
          title: 'Concurrent transaction',
          description:
            'A transaction executing at the same time as another transaction.',
        },
      ],
    },

    {
      title: 'Consistency in ACID',
      content:
        'In ACID transactions, consistency means a successful transaction moves the database from one valid state to another valid state while preserving defined constraints and business rules.',
      highlights: [
        {
          title: 'ACID',
          description:
            'A set of database transaction properties: atomicity, consistency, isolation, and durability.',
        },
        {
          title: 'Constraint',
          description:
            'A database rule that restricts invalid states.',
        },
        {
          title: 'Valid state',
          description:
            'A database state satisfying defined constraints and invariants.',
        },
      ],
    },

    {
      title: 'Replication',
      content:
        'Replication creates copies of data across multiple nodes. Replication can improve availability and read scalability, but it introduces the need to define how changes propagate and what readers are allowed to observe.',
      highlights: [
        {
          title: 'Replication',
          description:
            'Maintaining copies of data across multiple nodes.',
        },
        {
          title: 'Primary',
          description:
            'A node responsible for accepting a defined class of writes in a primary-replica architecture.',
        },
        {
          title: 'Replica',
          description:
            'A copy of data maintained for read scaling, resilience, or geographic distribution.',
        },
      ],
    },

    {
      title: 'Replication Lag',
      content:
        'Replication lag is the delay between a change being accepted by the primary and becoming visible on a replica. During this period, a read from the replica may return older data.',
      highlights: [
        {
          title: 'Replication lag',
          description:
            'The delay before a replicated change becomes visible on another node.',
        },
        {
          title: 'Stale read',
          description:
            'A read that returns an older value than the latest committed source state.',
        },
        {
          title: 'Lag monitoring',
          description:
            'Tracking replication delay to protect freshness requirements.',
        },
      ],
    },

    {
      title: 'Read Replicas',
      content:
        'Read replicas allow read traffic to be distributed across additional database nodes. Applications must account for replication lag when deciding whether a particular read can safely use a replica.',
      highlights: [
        {
          title: 'Read replica',
          description:
            'A database replica primarily used to serve read workloads.',
        },
        {
          title: 'Read routing',
          description:
            'Deciding which database node should serve a read request.',
        },
        {
          title: 'Freshness requirement',
          description:
            'The required recency of the data returned to the reader.',
        },
      ],
    },

    {
      title: 'Write Conflicts',
      content:
        'When multiple clients update the same logical data concurrently, their changes can conflict. Systems can resolve conflicts through transactions, locking, optimistic concurrency, version checks, conflict-resolution rules, or application-specific logic.',
      highlights: [
        {
          title: 'Write conflict',
          description:
            'A situation where concurrent updates affect the same logical data.',
        },
        {
          title: 'Optimistic concurrency',
          description:
            'Detecting conflicting updates using versions or conditions rather than locking everything in advance.',
        },
        {
          title: 'Conflict resolution',
          description:
            'Rules determining which state should survive competing updates.',
        },
      ],
    },

    {
      title: 'Optimistic Concurrency Control',
      content:
        'Optimistic concurrency assumes conflicts are relatively uncommon. A client reads a version, performs its work, and writes only if the version has not changed since it was read.',
      highlights: [
        {
          title: 'Version number',
          description:
            'A value used to detect whether data changed after it was read.',
        },
        {
          title: 'Compare-and-set',
          description:
            'Updating data only when an expected previous value or version still matches.',
        },
        {
          title: 'Conflict detection',
          description:
            'Detecting that another operation changed the data before the current update.',
        },
      ],
    },

    {
      title: 'Pessimistic Locking',
      content:
        'Pessimistic locking assumes conflicts may occur and protects data by preventing incompatible concurrent operations while a transaction holds a lock.',
      highlights: [
        {
          title: 'Lock',
          description:
            'A mechanism that restricts concurrent operations on protected data.',
        },
        {
          title: 'Pessimistic concurrency',
          description:
            'A strategy that assumes conflicts are possible and prevents them through locking.',
        },
        {
          title: 'Contention',
          description:
            'Competition between concurrent operations for the same resource.',
        },
      ],
    },

    {
      title: 'Lost Updates',
      content:
        'A lost update occurs when one concurrent update unintentionally overwrites another update. Version checks, transactions, locking, and conditional writes can prevent this problem.',
      highlights: [
        {
          title: 'Lost update',
          description:
            'A valid update is unintentionally overwritten by another concurrent update.',
        },
        {
          title: 'Conditional write',
          description:
            'A write that succeeds only when a required condition is still true.',
        },
        {
          title: 'Version check',
          description:
            'Verifying that data has not changed since it was read.',
        },
      ],
    },

    {
      title: 'Read-Modify-Write Race',
      content:
        'A read-modify-write race occurs when multiple processes read the same old value, independently calculate new values, and then overwrite each other’s changes. Atomic operations or transactions can prevent incorrect results.',
      highlights: [
        {
          title: 'Race condition',
          description:
            'Incorrect behavior caused by the timing or ordering of concurrent operations.',
        },
        {
          title: 'Atomic update',
          description:
            'An update performed as one indivisible operation from the perspective of competing operations.',
        },
        {
          title: 'Transaction',
          description:
            'A controlled unit of database work used to maintain correctness across related operations.',
        },
      ],
    },

    {
      title: 'Transactions',
      content:
        'Transactions group related database operations into a logical unit. Depending on the database and isolation level, transactions can prevent partial updates and control how concurrent operations interact.',
      highlights: [
        {
          title: 'Transaction',
          description:
            'A logical unit of database operations with defined correctness and durability behavior.',
        },
        {
          title: 'Commit',
          description:
            'Making a transaction’s changes durable and visible according to the database rules.',
        },
        {
          title: 'Rollback',
          description:
            'Undoing a transaction’s changes when it cannot successfully complete.',
        },
      ],
    },

    {
      title: 'Isolation Levels',
      content:
        'Database isolation levels define how much one transaction can observe the intermediate effects of another concurrent transaction. Common levels include read uncommitted, read committed, repeatable read, and serializable.',
      highlights: [
        {
          title: 'Read uncommitted',
          description:
            'Allows the greatest visibility of uncommitted concurrent changes.',
        },
        {
          title: 'Read committed',
          description:
            'Prevents reading data that another transaction has not committed.',
        },
        {
          title: 'Repeatable read',
          description:
            'Provides stronger repeatability guarantees for data read during a transaction.',
        },
        {
          title: 'Serializable',
          description:
            'Provides the strongest standard transaction isolation by enforcing behavior equivalent to a serial execution.',
        },
      ],
    },

    {
      title: 'Consistency vs Availability',
      content:
        'In distributed systems, stronger consistency can require coordination between nodes. During certain network failures, architects may need to choose which guarantees to prioritize. The right decision depends on business requirements and the system’s consistency model.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'How system participants observe shared data state.',
        },
        {
          title: 'Availability',
          description:
            'The ability to continue serving requests according to defined availability guarantees.',
        },
        {
          title: 'Network partition',
          description:
            'A failure that prevents distributed components from reliably communicating with one another.',
        },
      ],
    },

    {
      title: 'CAP Theorem',
      content:
        'CAP describes a trade-off in distributed systems under a network partition: a system cannot simultaneously guarantee both strong consistency and availability for all requests while the partition persists. Partition tolerance is treated as necessary for distributed systems that must continue operating despite network failures.',
      highlights: [
        {
          title: 'CAP',
          description:
            'A theorem describing the trade-off between consistency and availability during network partitions.',
        },
        {
          title: 'Partition tolerance',
          description:
            'The ability to continue operating despite communication failures between distributed components.',
        },
        {
          title: 'Trade-off',
          description:
            'Choosing which guarantees the system prioritizes during a partition.',
        },
      ],
    },

    {
      title: 'Consistency and Caching',
      content:
        'Caching creates another copy of application data, so cache design must consider freshness and invalidation. A cache can intentionally provide eventual consistency when the business can tolerate a bounded amount of staleness.',
      highlights: [
        {
          title: 'Cache consistency',
          description:
            'How closely cached data matches the authoritative source.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or updating cached data when the underlying source changes.',
        },
        {
          title: 'Stale cache',
          description:
            'Cached data that no longer represents the latest authoritative state.',
        },
      ],
    },

    {
      title: 'Consistency and Message Queues',
      content:
        'Asynchronous queues can introduce delayed processing, duplicate delivery, retries, and out-of-order execution. Consumers should use idempotency, ordering keys, version checks, or transactional patterns where business correctness requires them.',
      highlights: [
        {
          title: 'Duplicate message',
          description:
            'The same logical message being delivered or processed more than once.',
        },
        {
          title: 'Idempotency',
          description:
            'Designing processing so repeated execution does not create an incorrect additional effect.',
        },
        {
          title: 'Ordering key',
          description:
            'A value used to preserve ordering for related messages.',
        },
      ],
    },

    {
      title: 'Consistency and Microservices',
      content:
        'Microservices often own separate data stores, so maintaining one global transaction across services can be difficult. Patterns such as sagas, transactional outbox, idempotent consumers, and event-driven workflows can coordinate business state without requiring a distributed transaction for every operation.',
      highlights: [
        {
          title: 'Saga',
          description:
            'A distributed workflow composed of local transactions and compensating actions.',
        },
        {
          title: 'Transactional outbox',
          description:
            'A pattern that stores an event alongside a local database transaction before publishing it asynchronously.',
        },
        {
          title: 'Compensating action',
          description:
            'A business operation used to undo or counteract a previously completed step when a later step fails.',
        },
      ],
    },

    {
      title: 'Transactional Outbox',
      content:
        'The transactional outbox pattern stores a business change and the event describing that change in the same local database transaction. A separate publisher then sends the stored event to the messaging system. This reduces the risk of updating the database successfully while failing to publish the corresponding event.',
      highlights: [
        {
          title: 'Outbox',
          description:
            'A durable table or storage area containing events waiting to be published.',
        },
        {
          title: 'Atomic local transaction',
          description:
            'The business update and outbox record are committed together.',
        },
        {
          title: 'Publisher',
          description:
            'A process that reads pending outbox records and publishes them to a message system.',
        },
      ],
    },

    {
      title: 'Saga Pattern',
      content:
        'A saga coordinates a multi-step business workflow across independent services. Each service performs a local transaction. If a later step fails, compensating actions can reverse or counteract earlier business effects.',
      highlights: [
        {
          title: 'Saga',
          description:
            'A sequence of local transactions coordinated across services.',
        },
        {
          title: 'Local transaction',
          description:
            'A transaction executed within one service or data store.',
        },
        {
          title: 'Compensation',
          description:
            'A business action that counteracts a previous successful step.',
        },
      ],
    },

    {
      title: 'Eventual Consistency in Practice',
      content:
        'Consider an e-commerce order. The order database may update immediately while inventory, analytics, notifications, and search indexes update asynchronously. The system can remain useful as long as the business defines which temporary inconsistencies are acceptable and how conflicts or failures are recovered.',
      highlights: [
        {
          title: 'Order service',
          description:
            'The service responsible for authoritative order state.',
        },
        {
          title: 'Inventory update',
          description:
            'A downstream state change that may be processed asynchronously.',
        },
        {
          title: 'Search index',
          description:
            'A derived representation that may temporarily lag behind the source database.',
        },
      ],
    },

    {
      title: 'Consistency in AI and RAG Systems',
      content:
        'AI systems can contain multiple copies and derived representations of knowledge: source documents, processed chunks, embeddings, vector indexes, caches, and generated answers. When source documents change, the system must define how quickly derived representations become updated.',
      highlights: [
        {
          title: 'Source document',
          description:
            'The authoritative content from which a RAG system derives representations.',
        },
        {
          title: 'Embedding',
          description:
            'A vector representation generated from text or other content.',
        },
        {
          title: 'Vector index',
          description:
            'A search structure containing vector representations used for retrieval.',
        },
        {
          title: 'Index freshness',
          description:
            'How quickly changes in source content become visible in retrieval results.',
        },
      ],
    },

    {
      title: 'RAG Index Consistency',
      content:
        'A production RAG pipeline should define what happens when a document is updated or deleted. The system may need to regenerate embeddings, update vector records, invalidate caches, and ensure obsolete chunks are not retrieved after the source has changed.',
      highlights: [
        {
          title: 'Re-indexing',
          description:
            'Updating search or vector indexes after source content changes.',
        },
        {
          title: 'Stale embedding',
          description:
            'An embedding representing content that is no longer current.',
        },
        {
          title: 'Deletion propagation',
          description:
            'Ensuring deleted source content is also removed from derived representations.',
        },
      ],
    },

    {
      title: 'Consistency in AI Voice Platforms',
      content:
        'An AI voice platform may have call state, customer records, agent configuration, transcripts, summaries, and CRM data stored in different systems. The architecture should clearly define which system is authoritative and how asynchronous updates are reconciled.',
      highlights: [
        {
          title: 'Call state',
          description:
            'The current state of an active voice interaction.',
        },
        {
          title: 'CRM record',
          description:
            'Customer information maintained in a customer relationship management system.',
        },
        {
          title: 'System of record',
          description:
            'The authoritative system responsible for a particular category of data.',
        },
      ],
    },

    {
      title: 'Conflict Resolution',
      content:
        'When multiple sources independently update the same logical data, the system needs explicit conflict-resolution rules. Possible approaches include last-write-wins, version vectors, domain-specific merging, manual review, or rejecting conflicting updates.',
      highlights: [
        {
          title: 'Conflict resolution',
          description:
            'Rules used to determine the resulting state when concurrent changes conflict.',
        },
        {
          title: 'Last-write-wins',
          description:
            'A policy that selects the value associated with the latest recognized write according to the system’s ordering mechanism.',
        },
        {
          title: 'Domain-specific merge',
          description:
            'Combining concurrent updates according to business rules rather than simply selecting one value.',
        },
      ],
    },

    {
      title: 'Versioning',
      content:
        'Version numbers, timestamps, sequence numbers, or logical clocks can help systems determine the relative age of data and detect conflicting or outdated updates.',
      highlights: [
        {
          title: 'Version',
          description:
            'A value representing a particular state or revision of data.',
        },
        {
          title: 'Sequence number',
          description:
            'An ordered number used to track the position of an update or event.',
        },
        {
          title: 'Stale write',
          description:
            'An update based on older data that should not overwrite a newer state.',
        },
      ],
    },

    {
      title: 'Read Repair',
      content:
        'In some distributed databases, a read can detect that replicas disagree and trigger a repair so replicas converge toward the expected value.',
      highlights: [
        {
          title: 'Read repair',
          description:
            'Using reads to detect and correct inconsistent replica state.',
        },
        {
          title: 'Replica divergence',
          description:
            'A condition where replicas contain different versions of the same data.',
        },
        {
          title: 'Convergence',
          description:
            'The process of bringing replicas toward a consistent state.',
        },
      ],
    },

    {
      title: 'Quorum Reads and Writes',
      content:
        'Some replicated systems use quorum-based reads and writes. A quorum defines how many replicas must participate in an operation before it is considered successful. The exact guarantees depend on replication factor, read quorum, write quorum, failure model, and implementation.',
      highlights: [
        {
          title: 'Quorum',
          description:
            'A required number of replicas participating in an operation.',
        },
        {
          title: 'Read quorum',
          description:
            'The number of replicas consulted for a read operation.',
        },
        {
          title: 'Write quorum',
          description:
            'The number of replicas required to acknowledge a write.',
        },
      ],
    },

    {
      title: 'Consistency and Availability Trade-offs',
      content:
        'A distributed architecture should make consistency trade-offs explicit. Stronger guarantees may increase coordination and latency, while weaker guarantees can improve availability and scalability but require the product to tolerate temporary differences.',
      highlights: [
        {
          title: 'Coordination cost',
          description:
            'The communication and synchronization required to maintain stronger guarantees.',
        },
        {
          title: 'Latency trade-off',
          description:
            'Additional coordination can increase response time.',
        },
        {
          title: 'Availability trade-off',
          description:
            'Systems may choose to reject or delay operations rather than return potentially stale or conflicting results.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is strong vs eventual consistency? What is CAP theorem? What is replication lag? How do you prevent lost updates? What is optimistic concurrency? What is serializability? How would you maintain consistency across microservices? What is a saga? What is transactional outbox? How do you handle consistency in a RAG system?',
      highlights: [
        {
          title: 'Strong vs eventual',
          description:
            'Explain the business trade-off between immediate freshness and distributed-system flexibility.',
        },
        {
          title: 'CAP',
          description:
            'Explain the consistency and availability trade-off during network partitions.',
        },
        {
          title: 'Microservices consistency',
          description:
            'Explain local transactions, events, sagas, outbox, and idempotency.',
        },
        {
          title: 'AI consistency',
          description:
            'Explain freshness across source data, embeddings, indexes, caches, and generated outputs.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would first identify the business invariant and determine how fresh the data must be. I would then choose the weakest consistency model that still satisfies the business requirement because stronger consistency can add coordination, latency, and availability costs. For distributed workflows, I would use transactions within service boundaries and patterns such as idempotency, transactional outbox, and sagas across services. I would also define how stale data, conflicts, retries, and recovery are handled.”',
      highlights: [
        {
          title: 'Business invariant first',
          description:
            'Start with what must never become incorrect.',
        },
        {
          title: 'Required freshness',
          description:
            'Define how quickly changes must become visible.',
        },
        {
          title: 'Practical architecture',
          description:
            'Choose consistency mechanisms based on actual requirements instead of defaulting to maximum consistency.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating consistency as simply “all databases have the same data,” confusing database consistency with transaction isolation, saying eventual consistency means data is always wrong, applying strong consistency everywhere, and ignoring business invariants when choosing a consistency model.',
      highlights: [
        {
          title: 'Consistency equals identical copies',
          description:
            'Consistency is broader than simply requiring every copy to change simultaneously.',
        },
        {
          title: 'ACID confusion',
          description:
            'Database transaction consistency and distributed-system consistency are related but distinct concepts.',
        },
        {
          title: 'Eventual equals incorrect',
          description:
            'Eventual consistency means temporary divergence is permitted under defined convergence expectations.',
        },
        {
          title: 'One model everywhere',
          description:
            'Different parts of a system can legitimately require different consistency guarantees.',
        },
      ],
    },

    {
      title: 'Consistency for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, consistency is fundamentally a business-risk decision. The leader should ask what data must be immediately correct, what can tolerate delay, which team owns the source of truth, how failures are reconciled, and what customer-visible behavior occurs during temporary inconsistency.',
      highlights: [
        {
          title: 'Business risk',
          description:
            'Understanding the consequences of stale or conflicting data.',
        },
        {
          title: 'Source of truth',
          description:
            'Clearly defining which system owns authoritative state.',
        },
        {
          title: 'Recovery strategy',
          description:
            'Defining how inconsistencies are detected and corrected.',
        },
        {
          title: 'Customer impact',
          description:
            'Understanding how temporary inconsistency affects user experience and business operations.',
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
    'event-driven-systems',
    'scalability',
    'load-balancing',
    'caching',
    'queues',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'postgresql',
    'mongodb',
    'redis',
    'kafka',
    'aws',
    'azure',
    'google-cloud',
    'docker',
    'kubernetes',
  ],
}

export default consistencyKnowledge
