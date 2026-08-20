import type { KnowledgeDefinition } from './knowledge'

export const distributedSystemsKnowledge: KnowledgeDefinition = {
  technologyId: 'distributed-systems',
  slug: 'distributed-systems',
  title: 'Distributed Systems',
  summary:
    'Distributed Systems are software systems whose components run across multiple processes, machines, or locations and coordinate through networks to provide a shared capability.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is a Distributed System?',
      content:
        'A distributed system is a collection of independent computing components that communicate over a network and together provide functionality that appears to users as one system. The components may run on different machines, containers, availability zones, regions, or cloud providers.',
      highlights: [
        {
          title: 'Distributed system',
          description:
            'A system whose components operate across multiple computing resources and communicate over a network.',
        },
        {
          title: 'Node',
          description:
            'An individual machine, process, container, or logical participant in a distributed system.',
        },
        {
          title: 'Network',
          description:
            'The communication layer through which distributed components exchange information.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a company with offices in Mumbai, London, and New York. Each office has its own employees and local resources, but all offices work together as one organization. They communicate through networks, and sometimes a network connection can be slow or unavailable. A distributed software system has the same fundamental challenge: independent parts must coordinate despite communication and component failures.',
      highlights: [
        {
          title: 'Office',
          description:
            'Comparable to an independent node or service.',
        },
        {
          title: 'Employee',
          description:
            'Comparable to a process performing work.',
        },
        {
          title: 'Company network',
          description:
            'Comparable to the communication network connecting distributed components.',
        },
        {
          title: 'Company policy',
          description:
            'Comparable to system-wide rules and consistency requirements.',
        },
      ],
    },

    {
      title: 'Why Distributed Systems Exist',
      content:
        'Systems become distributed for many reasons: increasing workload, geographic distribution, fault isolation, independent scaling, organizational boundaries, availability requirements, specialized workloads, and the need to process very large amounts of data.',
      highlights: [
        {
          title: 'Scale',
          description:
            'Distributing workload across multiple resources to support increasing demand.',
        },
        {
          title: 'Geographic distribution',
          description:
            'Placing infrastructure closer to users in different locations.',
        },
        {
          title: 'Fault isolation',
          description:
            'Reducing the impact of a failure by separating workloads across components or locations.',
        },
        {
          title: 'Independent scaling',
          description:
            'Scaling individual components according to their own workload.',
        },
      ],
    },

    {
      title: 'The Fundamental Challenge',
      content:
        'The central difficulty in distributed systems is that components communicate over networks and can fail independently. A component may be healthy while its dependency is unavailable, a response may be delayed, a message may be duplicated, or different nodes may temporarily disagree about system state.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'Some components fail while other components continue operating.',
        },
        {
          title: 'Network delay',
          description:
            'A message takes longer than expected to travel between components.',
        },
        {
          title: 'Network partition',
          description:
            'A communication failure prevents groups of components from communicating with each other.',
        },
        {
          title: 'Independent failure',
          description:
            'One component can fail without all other components failing at the same time.',
        },
      ],
    },

    {
      title: 'Distributed vs Single-Process System',
      content:
        'In a single-process application, function calls may happen within one memory space and process. In a distributed system, communication between components usually crosses a network boundary, making latency, serialization, timeouts, retries, and partial failures important architectural concerns.',
      highlights: [
        {
          title: 'Local call',
          description:
            'Communication between operations within the same process or closely coupled runtime.',
        },
        {
          title: 'Remote call',
          description:
            'Communication that crosses a network or process boundary.',
        },
        {
          title: 'Serialization',
          description:
            'Converting data into a format suitable for transmission or storage.',
        },
      ],
    },

    {
      title: 'Distributed System Components',
      content:
        'A distributed architecture can contain API gateways, application services, databases, caches, message brokers, workers, object storage, authentication services, monitoring systems, and external providers. Each component introduces communication and failure considerations.',
      highlights: [
        {
          title: 'Service',
          description:
            'A deployable software component providing a defined capability.',
        },
        {
          title: 'Message broker',
          description:
            'Infrastructure that receives, stores, and delivers messages between producers and consumers.',
        },
        {
          title: 'Worker',
          description:
            'A process that performs background or asynchronous work.',
        },
        {
          title: 'External provider',
          description:
            'A service operated outside the organization or application boundary.',
        },
      ],
    },

    {
      title: 'Communication Models',
      content:
        'Distributed components commonly communicate using synchronous request-response calls, asynchronous messages, events, streams, or remote procedure calls. The appropriate model depends on latency requirements, coupling, reliability, ordering, and workflow semantics.',
      highlights: [
        {
          title: 'Request-response',
          description:
            'A client sends a request and waits for a corresponding response.',
        },
        {
          title: 'Message',
          description:
            'A unit of information sent from one component to another for processing.',
        },
        {
          title: 'Event',
          description:
            'A record describing something that happened in a system.',
        },
        {
          title: 'Stream',
          description:
            'A sequence of continuously produced data or events.',
        },
      ],
    },

    {
      title: 'Synchronous Communication',
      content:
        'Synchronous communication is appropriate when the caller needs the result before it can continue. It is simple to understand but creates direct latency and availability dependencies between the caller and the dependency.',
      highlights: [
        {
          title: 'Synchronous call',
          description:
            'A call where the initiating component waits for the dependency to respond.',
        },
        {
          title: 'Latency dependency',
          description:
            'The caller cannot complete until the dependency responds.',
        },
        {
          title: 'Availability dependency',
          description:
            'The caller may fail if a required dependency is unavailable.',
        },
      ],
    },

    {
      title: 'Asynchronous Communication',
      content:
        'Asynchronous communication allows a component to submit work without waiting for downstream processing to finish. Queues and events are commonly used to implement asynchronous workflows.',
      highlights: [
        {
          title: 'Asynchronous',
          description:
            'Communication where the initiating component does not need to wait for downstream completion.',
        },
        {
          title: 'Queue',
          description:
            'A mechanism that stores work until a consumer processes it.',
        },
        {
          title: 'Decoupling',
          description:
            'Reducing direct runtime dependency between components.',
        },
      ],
    },

    {
      title: 'Network is Not Reliable',
      content:
        'Distributed systems must treat networks as potentially slow, unavailable, duplicated, reordered, or interrupted. A successful architecture assumes communication problems will occur and defines explicit timeout, retry, fallback, and failure behavior.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A limit on how long a system waits for a response.',
        },
        {
          title: 'Packet loss',
          description:
            'Network data that fails to reach its destination.',
        },
        {
          title: 'Network partition',
          description:
            'A condition where nodes cannot communicate across part of the network.',
        },
      ],
    },

    {
      title: 'Latency',
      content:
        'Latency becomes more important as a request crosses more distributed components. A request that calls five downstream services can accumulate network and processing delays from each dependency.',
      highlights: [
        {
          title: 'End-to-end latency',
          description:
            'The total time from the beginning of a user operation to its completion.',
        },
        {
          title: 'Network latency',
          description:
            'Delay introduced by communication across a network.',
        },
        {
          title: 'Dependency latency',
          description:
            'Time consumed waiting for a downstream service or resource.',
        },
      ],
    },

    {
      title: 'Tail Latency',
      content:
        'Average latency can hide slow requests. Tail latency focuses on high-percentile response times such as p95, p99, or p99.9. In distributed systems, a small number of slow dependencies can significantly affect the user experience.',
      highlights: [
        {
          title: 'Tail latency',
          description:
            'Latency observed near the slow end of a response-time distribution.',
        },
        {
          title: 'p95',
          description:
            'The latency value below which approximately 95 percent of observed requests complete.',
        },
        {
          title: 'p99',
          description:
            'The latency value below which approximately 99 percent of observed requests complete.',
        },
      ],
    },

    {
      title: 'Timeouts',
      content:
        'Every remote dependency should have an appropriate timeout. Without timeouts, a stalled dependency can consume threads, connections, memory, and other resources until the calling service becomes unhealthy.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A maximum allowed waiting period for an operation.',
        },
        {
          title: 'Resource exhaustion',
          description:
            'A condition where a service consumes too many available resources.',
        },
        {
          title: 'Deadline',
          description:
            'A time boundary by which an operation should complete.',
        },
      ],
    },

    {
      title: 'Retries',
      content:
        'Retries can recover from temporary failures, but uncontrolled retries can make an incident worse by increasing traffic toward an already unhealthy dependency. Retries should use bounded attempts, backoff, jitter, and idempotent operations where appropriate.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Repeating a failed operation.',
        },
        {
          title: 'Backoff',
          description:
            'Waiting between retry attempts.',
        },
        {
          title: 'Jitter',
          description:
            'Adding controlled randomness to retry delays to prevent synchronized retry spikes.',
        },
        {
          title: 'Retry storm',
          description:
            'A large increase in repeated requests caused by many clients retrying simultaneously.',
        },
      ],
    },

    {
      title: 'Idempotency',
      content:
        'An operation is idempotent when repeating it produces the same intended final effect as performing it once. Idempotency is especially important when network failures make it unclear whether a remote operation succeeded before the response was lost.',
      highlights: [
        {
          title: 'Idempotency',
          description:
            'A property where repeated execution does not create unintended additional effects.',
        },
        {
          title: 'Idempotency key',
          description:
            'A unique identifier used to recognize repeated attempts of the same logical operation.',
        },
        {
          title: 'Duplicate request',
          description:
            'Multiple attempts representing the same logical operation.',
        },
      ],
    },

    {
      title: 'Failure Detection',
      content:
        'Distributed systems cannot always immediately know whether another component has failed or is simply slow. Health checks, heartbeats, timeouts, and monitoring provide signals, but failure detection is inherently subject to uncertainty in asynchronous networks.',
      highlights: [
        {
          title: 'Heartbeat',
          description:
            'A periodic signal indicating that a component is still responding.',
        },
        {
          title: 'Health check',
          description:
            'A test used to determine whether a service appears healthy.',
        },
        {
          title: 'Failure detector',
          description:
            'A mechanism that provides information about suspected component failures.',
        },
      ],
    },

    {
      title: 'Replication',
      content:
        'Replication keeps multiple copies of data or services so the system can continue operating when one copy fails and can distribute read workload. Replication introduces consistency and coordination considerations.',
      highlights: [
        {
          title: 'Replication',
          description:
            'Maintaining multiple copies of data or service capacity.',
        },
        {
          title: 'Replica',
          description:
            'One copy of replicated data or one redundant service instance.',
        },
        {
          title: 'Primary',
          description:
            'A designated replica that commonly accepts authoritative writes in certain replication architectures.',
        },
      ],
    },

    {
      title: 'Leader and Follower',
      content:
        'Some distributed systems designate one node as a leader for coordination or writes while other nodes follow or replicate its state. Leadership can simplify certain operations but introduces leader-election and failover concerns.',
      highlights: [
        {
          title: 'Leader',
          description:
            'A node responsible for coordinating a defined role or accepting certain operations.',
        },
        {
          title: 'Follower',
          description:
            'A node that follows or replicates state from a leader.',
        },
        {
          title: 'Leader election',
          description:
            'The process of selecting a new leader when the current leader becomes unavailable.',
        },
      ],
    },

    {
      title: 'Consistency',
      content:
        'Consistency describes how different components or replicas observe changes to shared state. Distributed systems often trade some consistency guarantees for availability, latency, scalability, or geographic distribution.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'The rules governing how data changes become visible across system participants.',
        },
        {
          title: 'Strong consistency',
          description:
            'A guarantee that reads observe the latest committed state according to the system model.',
        },
        {
          title: 'Eventual consistency',
          description:
            'A model where replicas may temporarily differ but converge if updates stop.',
        },
      ],
    },

    {
      title: 'CAP Theorem',
      content:
        'The CAP theorem describes a fundamental trade-off in distributed data systems during a network partition: a system cannot simultaneously guarantee both strong consistency and availability across the partition. Partition tolerance is unavoidable when components communicate over an unreliable network.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'All relevant reads observe a consistent view according to the selected consistency model.',
        },
        {
          title: 'Availability',
          description:
            'Requests continue receiving responses from the system.',
        },
        {
          title: 'Partition tolerance',
          description:
            'The system continues operating despite communication failures between parts of the system.',
        },
      ],
    },

    {
      title: 'CAP in Practical Architecture',
      content:
        'CAP should not be treated as a simplistic rule that every system must permanently choose two letters. The important engineering question is how the system behaves when a partition occurs and what business guarantees are required during that condition.',
      highlights: [
        {
          title: 'Partition scenario',
          description:
            'A condition where distributed components cannot reliably communicate.',
        },
        {
          title: 'Business guarantee',
          description:
            'The specific behavior the business requires during failure or degraded operation.',
        },
        {
          title: 'Trade-off',
          description:
            'Choosing which guarantees matter most under a defined failure condition.',
        },
      ],
    },

    {
      title: 'Consensus',
      content:
        'Consensus is the process by which distributed participants agree on a value or decision despite failures and communication uncertainty. Consensus algorithms are used in coordination systems where multiple nodes must agree on important state.',
      highlights: [
        {
          title: 'Consensus',
          description:
            'A process for reaching agreement among distributed participants.',
        },
        {
          title: 'Quorum',
          description:
            'A sufficient subset of participants whose agreement is required for an operation.',
        },
        {
          title: 'Coordination',
          description:
            'Mechanisms that allow distributed components to make consistent shared decisions.',
        },
      ],
    },

    {
      title: 'Quorum',
      content:
        'A quorum is the minimum number of participating replicas or nodes required to make a decision or consider an operation successful. Quorum designs can balance consistency, availability, and fault tolerance.',
      highlights: [
        {
          title: 'Read quorum',
          description:
            'The number of replicas involved in satisfying a read operation.',
        },
        {
          title: 'Write quorum',
          description:
            'The number of replicas required to acknowledge a write.',
        },
        {
          title: 'Majority',
          description:
            'More than half of the participating nodes.',
        },
      ],
    },

    {
      title: 'Distributed Transactions',
      content:
        'When one business operation spans multiple services or databases, maintaining transactional behavior becomes more difficult. Distributed transaction patterns such as sagas can coordinate long-running workflows without requiring one global database transaction.',
      highlights: [
        {
          title: 'Distributed transaction',
          description:
            'A business operation involving multiple independent transactional resources.',
        },
        {
          title: 'Saga',
          description:
            'A sequence of local transactions coordinated to complete a larger business workflow.',
        },
        {
          title: 'Compensating action',
          description:
            'An operation used to logically reverse or offset an earlier completed action when a workflow cannot continue.',
        },
      ],
    },

    {
      title: 'Two-Phase Commit',
      content:
        'Two-phase commit is a distributed transaction protocol in which a coordinator first asks participants whether they can commit and then instructs them to commit or abort. It can provide strong transactional coordination but may introduce blocking and availability concerns.',
      highlights: [
        {
          title: 'Coordinator',
          description:
            'The component coordinating a distributed transaction.',
        },
        {
          title: 'Prepare phase',
          description:
            'The phase where participants indicate whether they can commit.',
        },
        {
          title: 'Commit phase',
          description:
            'The phase where participants finalize the transaction according to the coordinator decision.',
        },
      ],
    },

    {
      title: 'Sagas',
      content:
        'A saga breaks a distributed business workflow into local transactions. If a later step fails, compensating actions can be executed for earlier steps. Sagas are useful when a single atomic transaction across all services is impractical.',
      highlights: [
        {
          title: 'Local transaction',
          description:
            'A transaction executed within one service or data store.',
        },
        {
          title: 'Compensation',
          description:
            'A business operation that counteracts the effect of a previous operation.',
        },
        {
          title: 'Workflow',
          description:
            'A sequence of related business operations.',
        },
      ],
    },

    {
      title: 'Message Delivery Semantics',
      content:
        'Distributed messaging systems commonly discuss at-most-once, at-least-once, and effectively-once processing models. The chosen model affects duplicate handling, data correctness, throughput, and system complexity.',
      highlights: [
        {
          title: 'At-most-once',
          description:
            'A message is delivered zero or one time, accepting possible loss.',
        },
        {
          title: 'At-least-once',
          description:
            'A message is delivered one or more times, requiring consumers to handle duplicates.',
        },
        {
          title: 'Exactly-once',
          description:
            'A stronger processing guarantee where the intended effect occurs once under defined system semantics.',
        },
      ],
    },

    {
      title: 'Ordering',
      content:
        'Distributed systems cannot assume that messages or events always arrive in the same order they were created. If ordering matters, the architecture must define the scope of ordering and the mechanism used to preserve it.',
      highlights: [
        {
          title: 'Message ordering',
          description:
            'The sequence in which messages are delivered or processed.',
        },
        {
          title: 'Partition',
          description:
            'A logical subset of a messaging stream that can have its own ordering characteristics.',
        },
        {
          title: 'Sequence number',
          description:
            'A value used to identify the position of an event or message in an ordered sequence.',
        },
      ],
    },

    {
      title: 'Duplicate Processing',
      content:
        'Duplicate messages are normal in many distributed systems. Consumers should be designed to safely process repeated delivery when the messaging system provides at-least-once delivery.',
      highlights: [
        {
          title: 'Deduplication',
          description:
            'Identifying repeated messages or operations so they do not create unintended effects.',
        },
        {
          title: 'Idempotent consumer',
          description:
            'A consumer designed so processing the same logical message multiple times does not create unintended additional effects.',
        },
        {
          title: 'Processed-event record',
          description:
            'Stored information used to identify messages that have already been processed.',
        },
      ],
    },

    {
      title: 'Backpressure',
      content:
        'Backpressure occurs when downstream processing capacity is lower than incoming workload. Systems can handle this by slowing producers, buffering work, applying rate limits, dropping low-priority work, or scaling consumers.',
      highlights: [
        {
          title: 'Backpressure',
          description:
            'Controlling incoming workload when downstream capacity is constrained.',
        },
        {
          title: 'Buffer',
          description:
            'Temporary storage used to absorb workload differences between producers and consumers.',
        },
        {
          title: 'Consumer scaling',
          description:
            'Increasing processing capacity by adding additional consumers.',
        },
      ],
    },

    {
      title: 'Load Balancing',
      content:
        'Load balancing distributes requests across multiple instances. In distributed systems, load balancing can improve utilization and availability, but the architecture must account for session state, connection behavior, health, and uneven workloads.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes traffic across multiple service instances.',
        },
        {
          title: 'Health check',
          description:
            'A test used to identify instances capable of serving traffic.',
        },
        {
          title: 'Traffic distribution',
          description:
            'The strategy used to decide which instance receives a request.',
        },
      ],
    },

    {
      title: 'Service Discovery',
      content:
        'In dynamic environments, service instances can change frequently. Service discovery allows components to locate available service instances without hard-coding individual machine addresses.',
      highlights: [
        {
          title: 'Service discovery',
          description:
            'A mechanism for locating available service instances.',
        },
        {
          title: 'Service registry',
          description:
            'A system containing information about available service instances.',
        },
        {
          title: 'Dynamic infrastructure',
          description:
            'Infrastructure where instances can be created, removed, or replaced frequently.',
        },
      ],
    },

    {
      title: 'Distributed Locking',
      content:
        'A distributed lock coordinates access to a shared resource across multiple processes or machines. Locks must account for expiration, failure, ownership, and recovery because the lock holder itself can fail.',
      highlights: [
        {
          title: 'Distributed lock',
          description:
            'A coordination mechanism for controlling access to a shared resource across distributed processes.',
        },
        {
          title: 'Lock owner',
          description:
            'The process or service currently holding the lock.',
        },
        {
          title: 'Lease',
          description:
            'A time-limited permission to hold or use a resource.',
        },
      ],
    },

    {
      title: 'Leader Election',
      content:
        'Leader election allows distributed nodes to choose one participant to coordinate a defined responsibility. Systems need clear rules for detecting leader failure and safely selecting a replacement.',
      highlights: [
        {
          title: 'Leader election',
          description:
            'Selecting one node to perform a coordinating role.',
        },
        {
          title: 'Election timeout',
          description:
            'A period after which a node may begin attempting to become leader.',
        },
        {
          title: 'Split brain',
          description:
            'A dangerous condition where multiple nodes believe they are the authoritative leader at the same time.',
        },
      ],
    },

    {
      title: 'Split Brain',
      content:
        'Split brain occurs when a distributed system incorrectly has multiple components acting as authoritative leaders or owners simultaneously. It can cause conflicting writes, data corruption, or inconsistent decisions.',
      highlights: [
        {
          title: 'Split brain',
          description:
            'A condition where multiple nodes independently believe they have authority over the same responsibility.',
        },
        {
          title: 'Fencing',
          description:
            'Preventing an old or invalid leader from continuing to perform protected operations.',
        },
        {
          title: 'Authority',
          description:
            'The system-recognized right to perform a specific coordinating or state-changing responsibility.',
        },
      ],
    },

    {
      title: 'Clock Problems',
      content:
        'Distributed machines may have clocks that differ slightly. Clock skew can cause problems when systems use timestamps for ordering, expiration, authentication, or conflict resolution.',
      highlights: [
        {
          title: 'Clock skew',
          description:
            'A difference between the clocks of distributed machines.',
        },
        {
          title: 'Timestamp',
          description:
            'A value representing a point or interval of time.',
        },
        {
          title: 'Logical clock',
          description:
            'A mechanism for reasoning about event ordering without relying entirely on physical time.',
        },
      ],
    },

    {
      title: 'Event Ordering and Causality',
      content:
        'In distributed systems, physical timestamps alone may not establish the true order of events. Causality describes whether one event could have influenced another. Systems may use sequence numbers or logical-clock mechanisms when ordering matters.',
      highlights: [
        {
          title: 'Causality',
          description:
            'A relationship where one event can be considered to have influenced another.',
        },
        {
          title: 'Logical ordering',
          description:
            'Ordering events according to system relationships rather than only physical timestamps.',
        },
        {
          title: 'Concurrent events',
          description:
            'Events that do not have a known causal relationship.',
        },
      ],
    },

    {
      title: 'Partition Tolerance',
      content:
        'A distributed system must assume that communication between nodes can fail. Partition tolerance means the system has a defined behavior when components become unable to communicate reliably.',
      highlights: [
        {
          title: 'Partition tolerance',
          description:
            'The ability to continue according to defined guarantees when network communication between components fails.',
        },
        {
          title: 'Partition',
          description:
            'A communication break separating parts of a distributed system.',
        },
        {
          title: 'Degraded behavior',
          description:
            'Reduced or altered functionality provided during a failure condition.',
        },
      ],
    },

    {
      title: 'Graceful Degradation',
      content:
        'A resilient distributed system does not always need to provide every feature during every failure. It can continue providing core functionality while temporarily disabling non-critical capabilities.',
      highlights: [
        {
          title: 'Graceful degradation',
          description:
            'Continuing useful operation with reduced functionality during failures or overload.',
        },
        {
          title: 'Critical path',
          description:
            'The set of operations required to deliver the most important user or business outcome.',
        },
        {
          title: 'Non-critical feature',
          description:
            'A capability that can temporarily be unavailable without preventing the core business workflow.',
        },
      ],
    },

    {
      title: 'Circuit Breaker',
      content:
        'Circuit breakers prevent repeated calls to unhealthy dependencies. A closed circuit permits calls, an open circuit rejects calls quickly, and a half-open state can allow controlled test requests to determine whether recovery has occurred.',
      highlights: [
        {
          title: 'Closed',
          description:
            'Normal state where requests are allowed to reach the dependency.',
        },
        {
          title: 'Open',
          description:
            'State where calls are blocked or failed quickly because the dependency is unhealthy.',
        },
        {
          title: 'Half-open',
          description:
            'Recovery-testing state where limited requests are allowed.',
        },
      ],
    },

    {
      title: 'Bulkheads',
      content:
        'Bulkhead isolation limits how much one workload can consume shared resources. For example, separate connection pools can prevent one slow dependency from consuming all connections and affecting unrelated operations.',
      highlights: [
        {
          title: 'Bulkhead',
          description:
            'A resilience pattern that isolates resources so one failure or workload cannot consume everything.',
        },
        {
          title: 'Resource pool',
          description:
            'A controlled collection of reusable resources such as connections or worker slots.',
        },
        {
          title: 'Isolation',
          description:
            'Separating resources to reduce failure propagation.',
        },
      ],
    },

    {
      title: 'Retry and Timeout Interaction',
      content:
        'Timeouts and retries must be designed together. If a request has a strict overall deadline, each retry consumes part of that budget. Unlimited retries can increase latency and create cascading failures.',
      highlights: [
        {
          title: 'Deadline budget',
          description:
            'The total time available for an operation and all of its dependent work.',
        },
        {
          title: 'Cascading failure',
          description:
            'A failure that spreads because overloaded or unhealthy dependencies cause other components to become unhealthy.',
        },
        {
          title: 'Bounded retry',
          description:
            'A retry policy with a defined maximum number or duration of attempts.',
        },
      ],
    },

    {
      title: 'Cascading Failures',
      content:
        'A cascading failure occurs when one unhealthy component causes dependent components to slow down or fail, which then creates additional load or resource exhaustion elsewhere. Timeouts, circuit breakers, bulkheads, queues, and load shedding can help limit the spread.',
      highlights: [
        {
          title: 'Cascading failure',
          description:
            'A chain reaction where one failure causes failures in dependent components.',
        },
        {
          title: 'Load shedding',
          description:
            'Intentionally rejecting or reducing lower-priority work to protect critical functionality.',
        },
        {
          title: 'Failure propagation',
          description:
            'The spread of failure effects across system boundaries.',
        },
      ],
    },

    {
      title: 'Load Shedding',
      content:
        'When a system is overloaded, accepting every request can cause total failure. Load shedding intentionally rejects or delays lower-priority work so critical workloads remain available.',
      highlights: [
        {
          title: 'Load shedding',
          description:
            'Reducing incoming workload to protect the system under overload.',
        },
        {
          title: 'Priority',
          description:
            'A classification determining which workloads should receive resources first.',
        },
        {
          title: 'Admission control',
          description:
            'A mechanism that decides whether new work should be accepted based on current capacity.',
        },
      ],
    },

    {
      title: 'Distributed Caching',
      content:
        'Distributed caches provide shared low-latency access to frequently used data across multiple application instances. Cache invalidation and consistency become more difficult when many services depend on the same cached state.',
      highlights: [
        {
          title: 'Distributed cache',
          description:
            'A cache accessible by multiple application instances or services.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Removing or refreshing cached data after the underlying source changes.',
        },
        {
          title: 'Cache consistency',
          description:
            'The degree to which cached values accurately represent the intended source state.',
        },
      ],
    },

    {
      title: 'Distributed Databases',
      content:
        'Distributed databases spread data or database workload across multiple nodes. They can provide scalability and availability but require careful decisions around replication, partitioning, consistency, transactions, and failure recovery.',
      highlights: [
        {
          title: 'Distributed database',
          description:
            'A database system whose data or processing is distributed across multiple nodes.',
        },
        {
          title: 'Partitioning',
          description:
            'Splitting data across nodes according to a defined partitioning strategy.',
        },
        {
          title: 'Replication',
          description:
            'Maintaining multiple copies of data.',
        },
      ],
    },

    {
      title: 'Sharding',
      content:
        'Sharding partitions data across multiple database nodes so each node stores only a portion of the total dataset. The shard key determines where data is placed and is critical to performance and scalability.',
      highlights: [
        {
          title: 'Shard',
          description:
            'One partition of a distributed dataset.',
        },
        {
          title: 'Shard key',
          description:
            'The value used to determine which shard stores a record.',
        },
        {
          title: 'Hot shard',
          description:
            'A shard receiving disproportionately high traffic or data volume.',
        },
      ],
    },

    {
      title: 'Consistent Hashing',
      content:
        'Consistent hashing distributes keys across nodes while minimizing how many keys need to move when nodes are added or removed. It is commonly used in distributed caches and partitioning systems.',
      highlights: [
        {
          title: 'Consistent hashing',
          description:
            'A hashing approach designed to minimize key redistribution when nodes change.',
        },
        {
          title: 'Hash ring',
          description:
            'A conceptual structure used to map keys and nodes onto a circular hash space.',
        },
        {
          title: 'Rebalancing',
          description:
            'Redistributing data or workload when the set of nodes changes.',
        },
      ],
    },

    {
      title: 'Distributed Queues',
      content:
        'Queues decouple producers from consumers and allow work to be processed asynchronously. Distributed queues must address durability, ordering, retries, duplicate delivery, visibility timeouts, dead-letter handling, and consumer scaling.',
      highlights: [
        {
          title: 'Producer',
          description:
            'Component that publishes work to a queue.',
        },
        {
          title: 'Consumer',
          description:
            'Component that processes queued work.',
        },
        {
          title: 'Dead-letter queue',
          description:
            'A queue used to isolate messages that repeatedly fail processing.',
        },
      ],
    },

    {
      title: 'Dead-Letter Queues',
      content:
        'A dead-letter queue stores messages that cannot be successfully processed after defined attempts. It prevents one problematic message from continuously blocking normal processing and gives operators a way to investigate failures.',
      highlights: [
        {
          title: 'Dead-letter queue',
          description:
            'A destination for messages that repeatedly fail processing.',
        },
        {
          title: 'Poison message',
          description:
            'A message that repeatedly causes processing failures.',
        },
        {
          title: 'Replay',
          description:
            'Reprocessing a previously failed message after the underlying issue is addressed.',
        },
      ],
    },

    {
      title: 'Distributed Scheduling',
      content:
        'When scheduled work runs across multiple instances, the system must prevent unintended duplicate execution or make duplicate execution safe. Distributed locks, leader coordination, and idempotent jobs are common approaches.',
      highlights: [
        {
          title: 'Distributed scheduler',
          description:
            'A scheduling system operating across multiple workers or nodes.',
        },
        {
          title: 'Duplicate execution',
          description:
            'The same scheduled job being executed by multiple workers unintentionally.',
        },
        {
          title: 'Idempotent job',
          description:
            'A job that can safely run more than once without unintended effects.',
        },
      ],
    },

    {
      title: 'Distributed Rate Limiting',
      content:
        'When multiple application instances share one rate limit, local counters on individual instances may be inaccurate. A shared store, centralized gateway, or distributed coordination mechanism may be required depending on the accuracy guarantee.',
      highlights: [
        {
          title: 'Global rate limit',
          description:
            'A rate limit applied across multiple application instances.',
        },
        {
          title: 'Local counter',
          description:
            'A rate counter maintained independently by one instance.',
        },
        {
          title: 'Shared state',
          description:
            'State accessible by multiple instances for coordination.',
        },
      ],
    },

    {
      title: 'Observability in Distributed Systems',
      content:
        'Observability becomes essential as requests cross many services. Correlation IDs, distributed traces, structured logs, dependency metrics, and service-level indicators help teams reconstruct what happened during failures.',
      highlights: [
        {
          title: 'Correlation ID',
          description:
            'An identifier used to associate related operations across services.',
        },
        {
          title: 'Distributed trace',
          description:
            'A representation of a request as it travels across multiple components.',
        },
        {
          title: 'Service-level indicator',
          description:
            'A measurable signal describing service behavior such as availability or latency.',
        },
      ],
    },

    {
      title: 'Distributed Tracing',
      content:
        'Distributed tracing follows a logical request across multiple services and records timing and dependency relationships. It is particularly useful when a user request touches many independent components.',
      highlights: [
        {
          title: 'Trace',
          description:
            'A complete representation of one logical request across services.',
        },
        {
          title: 'Span',
          description:
            'A timed unit of work within a distributed trace.',
        },
        {
          title: 'Trace context',
          description:
            'Metadata propagated between services so related operations can be associated.',
        },
      ],
    },

    {
      title: 'Distributed System Testing',
      content:
        'Testing distributed systems requires more than unit and integration tests. Teams should test timeouts, retries, duplicate messages, dependency failures, network partitions, overloaded components, delayed responses, and recovery behavior.',
      highlights: [
        {
          title: 'Failure injection',
          description:
            'Intentionally introducing failures to verify system resilience.',
        },
        {
          title: 'Chaos testing',
          description:
            'Testing system behavior by deliberately disrupting infrastructure or dependencies.',
        },
        {
          title: 'Recovery test',
          description:
            'Verifying that the system returns to correct operation after failure.',
        },
      ],
    },

    {
      title: 'Distributed System Security',
      content:
        'Every network boundary should be treated as a security boundary. Distributed systems require authentication between services, authorization, encryption in transit, secrets management, network controls, audit logging, and least-privilege access.',
      highlights: [
        {
          title: 'Service authentication',
          description:
            'Verifying the identity of one service when it communicates with another.',
        },
        {
          title: 'Mutual TLS',
          description:
            'TLS configuration where both communicating parties authenticate each other using certificates.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving each identity only the permissions required for its responsibilities.',
        },
      ],
    },

    {
      title: 'Distributed Systems and Microservices',
      content:
        'Microservices are one architectural approach for building distributed systems, but distributed systems are broader than microservices. A distributed system can also be a monolith with distributed databases, asynchronous workers, external services, or multi-region infrastructure.',
      highlights: [
        {
          title: 'Microservices',
          description:
            'An architecture composed of independently deployable services around business capabilities.',
        },
        {
          title: 'Distributed architecture',
          description:
            'An architecture where important system capabilities or state are distributed across computing resources.',
        },
        {
          title: 'Monolith with distributed dependencies',
          description:
            'A single deployable application that still communicates with distributed databases, queues, or external services.',
        },
      ],
    },

    {
      title: 'Distributed Systems and Cloud',
      content:
        'Cloud platforms make distributed architectures easier to deploy by providing managed networking, compute, databases, queues, storage, load balancing, and multi-zone or multi-region capabilities. They do not remove the underlying distributed-systems problems.',
      highlights: [
        {
          title: 'Availability zone',
          description:
            'An isolated infrastructure location within a cloud region designed to reduce correlated failures.',
        },
        {
          title: 'Region',
          description:
            'A geographic cloud infrastructure area containing multiple facilities or availability zones.',
        },
        {
          title: 'Managed service',
          description:
            'A cloud service where the provider operates much of the underlying infrastructure.',
        },
      ],
    },

    {
      title: 'Multi-Region Systems',
      content:
        'Multi-region architecture places application capacity or data across geographically separated regions. It can reduce geographic latency and improve disaster resilience but introduces replication, consistency, routing, data sovereignty, and operational complexity.',
      highlights: [
        {
          title: 'Multi-region',
          description:
            'Architecture operating across multiple geographic infrastructure regions.',
        },
        {
          title: 'Geo-routing',
          description:
            'Routing users toward infrastructure based on geographic or network considerations.',
        },
        {
          title: 'Cross-region replication',
          description:
            'Replicating data between geographically separated infrastructure locations.',
        },
      ],
    },

    {
      title: 'Distributed Systems and AI',
      content:
        'Modern AI platforms are naturally distributed. An AI request may travel through an edge layer, API gateway, authentication service, retrieval system, vector database, model provider, moderation layer, logging pipeline, and asynchronous evaluation or analytics systems.',
      highlights: [
        {
          title: 'AI pipeline',
          description:
            'A sequence of distributed components involved in producing an AI result.',
        },
        {
          title: 'Model provider',
          description:
            'An internal or external service exposing AI inference capabilities.',
        },
        {
          title: 'Retrieval service',
          description:
            'A component that retrieves relevant context for an AI request.',
        },
        {
          title: 'Evaluation pipeline',
          description:
            'An asynchronous workflow used to assess AI quality and system behavior.',
        },
      ],
    },

    {
      title: 'Distributed AI Voice Agent Example',
      content:
        'A voice-agent platform may distribute work across telephony, speech-to-text, orchestration, LLM inference, text-to-speech, CRM integration, and analytics services. A production design must account for latency budgets, provider failures, retries, duplicate events, session state, call recovery, and observability across the entire chain.',
      highlights: [
        {
          title: 'Latency budget',
          description:
            'The maximum acceptable total delay allocated across components of a user interaction.',
        },
        {
          title: 'Provider fallback',
          description:
            'Switching to an alternative external provider when the preferred provider is unavailable.',
        },
        {
          title: 'Session state',
          description:
            'Information representing the current state of an ongoing conversation or workflow.',
        },
        {
          title: 'Call recovery',
          description:
            'Mechanisms for continuing or safely terminating a voice interaction when a component fails.',
        },
      ],
    },

    {
      title: 'Distributed System Design Process',
      content:
        'A practical design process is: clarify requirements, identify boundaries, estimate workload, map communication paths, identify state ownership, choose consistency guarantees, design failure behavior, define scaling strategy, add observability and security, and validate the architecture against realistic failure scenarios.',
      highlights: [
        {
          title: 'Boundary',
          description:
            'The defined scope and responsibility of a component or system.',
        },
        {
          title: 'Failure scenario',
          description:
            'A specific condition used to evaluate how the architecture behaves when something goes wrong.',
        },
        {
          title: 'Scaling strategy',
          description:
            'The approach used to increase system capacity as workload grows.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Interviewers commonly ask why distributed systems are difficult, how to handle partial failures, when to use synchronous versus asynchronous communication, how consistency works, what CAP means, how retries can create cascading failures, how to design idempotent APIs, how to handle duplicate messages, and how to design systems for high availability.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'A common interview topic because distributed components can fail independently.',
        },
        {
          title: 'CAP theorem',
          description:
            'A common topic for discussing consistency, availability, and network partitions.',
        },
        {
          title: 'Idempotency',
          description:
            'A common topic for safely handling retries and duplicate requests.',
        },
        {
          title: 'Failure handling',
          description:
            'A major architectural discussion covering timeouts, retries, circuit breakers, and graceful degradation.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer starts with the business requirement and then explains the distributed-system trade-off. For example: “I would first identify which operations require strong consistency and which can tolerate eventual consistency. Then I would separate synchronous critical-path operations from asynchronous work, add bounded timeouts and retries, make write operations idempotent, and define fallback behavior for dependency failures.”',
      highlights: [
        {
          title: 'Requirement first',
          description:
            'Begin with the business behavior and reliability requirement.',
        },
        {
          title: 'Trade-off',
          description:
            'Explain why one distributed-system approach is appropriate for the stated requirement.',
        },
        {
          title: 'Failure behavior',
          description:
            'Explicitly describe what happens when dependencies fail or become slow.',
        },
      ],
    },

    {
      title: 'Common Interview Mistakes',
      content:
        'Common mistakes include treating distributed systems as simply “multiple servers,” memorizing CAP without understanding partitions, using retries without timeouts or backoff, assuming exactly-once delivery is automatic, ignoring duplicate messages, ignoring clock and ordering problems, and designing only the happy path.',
      highlights: [
        {
          title: 'CAP memorization',
          description:
            'Knowing the acronym without understanding how network partitions affect system behavior.',
        },
        {
          title: 'Unlimited retries',
          description:
            'Retrying indefinitely and potentially amplifying an outage.',
        },
        {
          title: 'Happy-path design',
          description:
            'Explaining normal operation without addressing failures and recovery.',
        },
        {
          title: 'Duplicate blindness',
          description:
            'Assuming a distributed message will always be delivered exactly once.',
        },
      ],
    },

    {
      title: 'Distributed Systems for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, distributed-systems knowledge is primarily about recognizing architectural risk and coordinating the right engineering decisions. The leader should understand service dependencies, latency budgets, failure domains, consistency requirements, operational ownership, scaling constraints, and vendor dependencies without needing to implement every distributed algorithm.',
      highlights: [
        {
          title: 'Risk identification',
          description:
            'Recognizing where distributed dependencies can create reliability or delivery risks.',
        },
        {
          title: 'Architecture trade-offs',
          description:
            'Balancing consistency, availability, latency, cost, complexity, and scalability.',
        },
        {
          title: 'Operational ownership',
          description:
            'Ensuring every critical distributed component has clear monitoring, incident response, and ownership.',
        },
        {
          title: 'Business alignment',
          description:
            'Making distributed architecture decisions according to actual business requirements rather than technology trends.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'systems',
    'system-design',
    'microservices',
    'monolith',
    'event-driven-systems',
    'scalability',
    'load-balancing',
    'caching',
    'queues',
    'consistency',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'serverless',
    'cloudflare',
    'nginx',
    'github-actions',
    'ci-cd',
    'deployment-strategy',
  ],
}

export default distributedSystemsKnowledge
