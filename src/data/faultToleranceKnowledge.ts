import type { KnowledgeDefinition } from './knowledge'

export const faultToleranceKnowledge: KnowledgeDefinition = {
  technologyId: 'fault-tolerance',
  slug: 'fault-tolerance',
  title: 'Fault Tolerance',
  summary:
    'Fault tolerance is the ability of a system to continue providing its required functionality when individual components fail.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Fault Tolerance?',
      content:
        'Fault tolerance means designing a system so that the failure of one component does not automatically cause the entire system to fail. Instead, the system detects the fault, isolates it, and continues operating through redundancy, fallback, recovery, or graceful degradation.',
      highlights: [
        {
          title: 'Fault tolerance',
          description:
            'The ability of a system to continue operating despite defined component failures.',
        },
        {
          title: 'Fault',
          description:
            'An abnormal condition or failure that can affect system behavior.',
        },
        {
          title: 'Failure',
          description:
            'A component or system no longer providing its required function.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a car with two independent braking systems. If one mechanism has a problem, the other can still help stop the car. The car has been designed so that one component failure does not immediately cause complete loss of the critical function. That is the basic idea of fault tolerance.',
      highlights: [
        {
          title: 'Primary mechanism',
          description:
            'The normal component performing a critical function.',
        },
        {
          title: 'Backup mechanism',
          description:
            'An alternate component capable of providing the function when the primary fails.',
        },
        {
          title: 'Critical function',
          description:
            'A capability that must remain available for the system to be considered operational.',
        },
      ],
    },

    {
      title: 'Fault Tolerance vs High Availability',
      content:
        'Fault tolerance and high availability are closely related but not identical. Fault tolerance focuses on continuing operation despite faults. High availability focuses on keeping the service accessible and minimizing downtime. A fault-tolerant design is often an important mechanism for achieving high availability.',
      highlights: [
        {
          title: 'Fault tolerance',
          description:
            'Focuses on surviving component faults without unacceptable service interruption.',
        },
        {
          title: 'High availability',
          description:
            'Focuses on keeping the service accessible with minimal downtime.',
        },
        {
          title: 'Relationship',
          description:
            'Fault tolerance is one strategy used to achieve availability objectives.',
        },
      ],
    },

    {
      title: 'Fault Tolerance vs Reliability',
      content:
        'Reliability describes the probability that a system performs correctly over time. Fault tolerance is a design capability that helps the system remain functional when faults occur. A reliable system may still experience faults, while a fault-tolerant system is designed to handle defined faults safely.',
      highlights: [
        {
          title: 'Reliability',
          description:
            'The ability to perform correctly over time with an acceptable failure rate.',
        },
        {
          title: 'Fault handling',
          description:
            'The mechanisms used to continue or recover operation when something fails.',
        },
        {
          title: 'Resilience',
          description:
            'The broader ability to withstand, recover from, and adapt to failures or disruption.',
        },
      ],
    },

    {
      title: 'Fault Domains',
      content:
        'A fault domain is a boundary within which failures may be correlated. Good fault-tolerant architecture distributes critical components across independent fault domains so one event does not affect every redundant component simultaneously.',
      highlights: [
        {
          title: 'Fault domain',
          description:
            'A set of components that can be affected by the same failure event.',
        },
        {
          title: 'Correlated failure',
          description:
            'A failure that affects multiple components because they share a dependency or failure domain.',
        },
        {
          title: 'Failure isolation',
          description:
            'Separating components so faults do not spread across the entire system.',
        },
      ],
    },

    {
      title: 'Single Point of Failure',
      content:
        'A single point of failure is a component whose failure can take down a critical part of the system. Fault-tolerant architecture identifies these points and removes, duplicates, or isolates them where the business requirement justifies the additional complexity.',
      highlights: [
        {
          title: 'SPOF',
          description:
            'Single Point of Failure: one component whose failure can cause unacceptable service disruption.',
        },
        {
          title: 'Redundancy',
          description:
            'Providing additional components or paths to tolerate failure.',
        },
        {
          title: 'Dependency analysis',
          description:
            'Identifying shared components that could defeat otherwise redundant architecture.',
        },
      ],
    },

    {
      title: 'Redundancy',
      content:
        'Redundancy is one of the main techniques used to tolerate faults. Multiple instances, network paths, database replicas, providers, or infrastructure locations can allow service to continue when one component fails.',
      highlights: [
        {
          title: 'Redundant instance',
          description:
            'An additional service instance capable of handling workload when another fails.',
        },
        {
          title: 'Redundant path',
          description:
            'An alternate communication or infrastructure path.',
        },
        {
          title: 'N+1 redundancy',
          description:
            'Providing at least one additional capacity unit beyond the minimum required operating capacity.',
        },
      ],
    },

    {
      title: 'Active-Active',
      content:
        'In an active-active design, multiple instances actively serve production traffic. When one fails, the remaining instances continue serving requests. This can provide both redundancy and useful capacity utilization.',
      highlights: [
        {
          title: 'Active-active',
          description:
            'Multiple redundant components actively serve workload at the same time.',
        },
        {
          title: 'Traffic redistribution',
          description:
            'Moving requests away from failed instances to healthy ones.',
        },
        {
          title: 'Capacity headroom',
          description:
            'Unused or available capacity that allows remaining instances to absorb failed-instance traffic.',
        },
      ],
    },

    {
      title: 'Active-Passive',
      content:
        'In an active-passive design, one component serves production traffic while another remains ready as a standby. When the active component fails, traffic or responsibility moves to the passive component.',
      highlights: [
        {
          title: 'Active',
          description:
            'The component currently serving production workload.',
        },
        {
          title: 'Passive',
          description:
            'A standby component prepared to take over.',
        },
        {
          title: 'Failover',
          description:
            'The transition from the failed active component to the standby component.',
        },
      ],
    },

    {
      title: 'Failover',
      content:
        'Failover is the mechanism used to move service responsibility from a failed component to a healthy alternative. Effective failover requires failure detection, a decision mechanism, an alternate resource, and a tested recovery path.',
      highlights: [
        {
          title: 'Failure detection',
          description:
            'Identifying that the current component is unhealthy.',
        },
        {
          title: 'Failover mechanism',
          description:
            'The mechanism that transfers workload to an alternate component.',
        },
        {
          title: 'Failover time',
          description:
            'The time between failure and successful service restoration through the alternate path.',
        },
      ],
    },

    {
      title: 'Failure Detection',
      content:
        'A system cannot react to a failure it cannot detect. Health checks, heartbeats, timeouts, error rates, dependency checks, and synthetic tests can provide signals that a component is unhealthy.',
      highlights: [
        {
          title: 'Heartbeat',
          description:
            'A periodic signal indicating that a component is alive or reachable.',
        },
        {
          title: 'Health check',
          description:
            'A test used to determine whether a component is healthy enough for service.',
        },
        {
          title: 'Failure detector',
          description:
            'A mechanism that determines whether a component should be considered unavailable or unhealthy.',
        },
      ],
    },

    {
      title: 'Failure Isolation',
      content:
        'Failure isolation prevents a local problem from spreading to unrelated components. Isolation can be implemented through separate services, processes, infrastructure, resource limits, network boundaries, or independent failure domains.',
      highlights: [
        {
          title: 'Failure isolation',
          description:
            'Containing a fault so it does not cascade through the system.',
        },
        {
          title: 'Blast radius',
          description:
            'The amount of system functionality affected by a failure.',
        },
        {
          title: 'Isolation boundary',
          description:
            'A technical boundary that limits the spread of failures.',
        },
      ],
    },

    {
      title: 'Blast Radius',
      content:
        'Blast radius describes how much of the system is affected when something fails. Good architecture aims to keep the blast radius small so a local fault does not become a platform-wide outage.',
      highlights: [
        {
          title: 'Blast radius',
          description:
            'The scope of impact created by a failure.',
        },
        {
          title: 'Failure containment',
          description:
            'Techniques that prevent faults from spreading beyond their necessary scope.',
        },
        {
          title: 'Cell architecture',
          description:
            'A design approach that divides a platform into relatively independent cells to limit correlated failures.',
        },
      ],
    },

    {
      title: 'Bulkhead Pattern',
      content:
        'The bulkhead pattern separates resources so failure or overload in one workload does not consume resources needed by another workload. The name comes from compartments in a ship that prevent one damaged section from flooding the entire vessel.',
      highlights: [
        {
          title: 'Bulkhead',
          description:
            'A resilience pattern that isolates resources between workloads.',
        },
        {
          title: 'Resource isolation',
          description:
            'Preventing one workload from consuming all shared capacity.',
        },
        {
          title: 'Blast-radius reduction',
          description:
            'Limiting the impact of a failure or overload.',
        },
      ],
    },

    {
      title: 'Timeouts',
      content:
        'Timeouts prevent a component from waiting indefinitely for a failed or slow dependency. Without appropriate timeouts, blocked requests can consume threads, connections, memory, and other resources until the caller also becomes unhealthy.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A maximum allowed duration for an operation.',
        },
        {
          title: 'Connection timeout',
          description:
            'The maximum time allowed to establish a connection.',
        },
        {
          title: 'Request timeout',
          description:
            'The maximum time allowed for a downstream request to complete.',
        },
      ],
    },

    {
      title: 'Circuit Breaker',
      content:
        'A circuit breaker protects a service from repeatedly calling an unhealthy dependency. After failures reach a threshold, the circuit opens and calls are rejected or redirected to fallback behavior. After a recovery period, limited requests can test the dependency.',
      highlights: [
        {
          title: 'Circuit breaker',
          description:
            'A resilience mechanism that stops calls to a failing dependency for a period.',
        },
        {
          title: 'Open state',
          description:
            'The state in which normal calls are blocked or short-circuited.',
        },
        {
          title: 'Half-open state',
          description:
            'A controlled test state used to determine whether the dependency has recovered.',
        },
      ],
    },

    {
      title: 'Retries',
      content:
        'Retries can recover from transient failures, but uncontrolled retries can amplify an outage. A fault-tolerant system uses bounded retries, exponential backoff, jitter, and circuit breakers where appropriate.',
      highlights: [
        {
          title: 'Retry',
          description:
            'Attempting a failed operation again.',
        },
        {
          title: 'Transient failure',
          description:
            'A temporary problem that may succeed when attempted later.',
        },
        {
          title: 'Retry storm',
          description:
            'A surge of repeated requests that further overloads a failing dependency.',
        },
      ],
    },

    {
      title: 'Exponential Backoff and Jitter',
      content:
        'Exponential backoff progressively increases the delay between retries. Jitter adds controlled randomness so many clients do not retry simultaneously and create synchronized traffic spikes.',
      highlights: [
        {
          title: 'Exponential backoff',
          description:
            'Increasing retry delays after consecutive failures.',
        },
        {
          title: 'Jitter',
          description:
            'Adding controlled randomness to retry timing.',
        },
        {
          title: 'Synchronized retry',
          description:
            'Many clients retrying at nearly the same time and creating another load spike.',
        },
      ],
    },

    {
      title: 'Graceful Degradation',
      content:
        'Graceful degradation means preserving essential functionality while temporarily reducing non-critical functionality. This is especially valuable when a dependency is optional rather than part of the critical path.',
      highlights: [
        {
          title: 'Graceful degradation',
          description:
            'Continuing core service with reduced functionality during partial failure.',
        },
        {
          title: 'Critical path',
          description:
            'The minimum functionality required to deliver the primary business outcome.',
        },
        {
          title: 'Fallback',
          description:
            'An alternate behavior used when the preferred operation cannot complete.',
        },
      ],
    },

    {
      title: 'Fallback',
      content:
        'Fallbacks provide an alternate response or implementation when a preferred dependency fails. A fallback should be deliberately designed because returning incorrect or misleading information can be worse than returning an explicit error.',
      highlights: [
        {
          title: 'Fallback',
          description:
            'An alternate behavior used when the primary path fails.',
        },
        {
          title: 'Safe fallback',
          description:
            'Fallback behavior that does not violate critical business or safety requirements.',
        },
        {
          title: 'Fallback correctness',
          description:
            'Ensuring the alternate behavior remains useful and valid.',
        },
      ],
    },

    {
      title: 'Load Shedding',
      content:
        'Load shedding intentionally rejects or deprioritizes work when a system is overloaded. Protecting the remaining capacity can be better than allowing every request to consume resources until the entire service collapses.',
      highlights: [
        {
          title: 'Load shedding',
          description:
            'Intentionally rejecting or reducing workload to protect system stability.',
        },
        {
          title: 'Overload',
          description:
            'A condition where incoming workload exceeds safe processing capacity.',
        },
        {
          title: 'Priority protection',
          description:
            'Preserving resources for higher-priority workloads during overload.',
        },
      ],
    },

    {
      title: 'Rate Limiting',
      content:
        'Rate limiting controls how much traffic a client, tenant, or workload can generate. It can protect services from abuse, traffic spikes, and resource exhaustion.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Restricting the number or rate of operations allowed within a defined period.',
        },
        {
          title: 'Quota',
          description:
            'A defined maximum amount of resource usage.',
        },
        {
          title: 'Resource protection',
          description:
            'Preventing one workload from consuming excessive shared capacity.',
        },
      ],
    },

    {
      title: 'Redundant Dependencies',
      content:
        'Fault tolerance can extend beyond application servers. Critical dependencies such as databases, message brokers, network paths, cloud regions, AI model providers, telephony providers, and DNS services may require redundancy or alternate paths.',
      highlights: [
        {
          title: 'Dependency redundancy',
          description:
            'Providing alternate implementations or instances of a critical dependency.',
        },
        {
          title: 'Provider failover',
          description:
            'Switching from an unavailable external provider to an alternate provider.',
        },
        {
          title: 'Shared dependency',
          description:
            'A common dependency that can still cause multiple redundant components to fail together.',
        },
      ],
    },

    {
      title: 'Database Fault Tolerance',
      content:
        'Database fault tolerance can use replication, automated failover, multi-zone deployment, backups, quorum mechanisms, and recovery procedures. The architecture must balance availability with consistency and durability requirements.',
      highlights: [
        {
          title: 'Database replication',
          description:
            'Maintaining additional copies of database state.',
        },
        {
          title: 'Automatic failover',
          description:
            'Automatically transferring database service to a healthy alternate.',
        },
        {
          title: 'Recovery procedure',
          description:
            'A tested process for restoring database functionality after failure.',
        },
      ],
    },

    {
      title: 'Message Queue Fault Tolerance',
      content:
        'Queues can improve fault tolerance by buffering work when consumers are temporarily unavailable. Durable messages, acknowledgements, retries, dead letter queues, and idempotent consumers help prevent work from being lost or repeatedly damaging downstream systems.',
      highlights: [
        {
          title: 'Durable message',
          description:
            'A message persisted according to the queue system’s durability guarantees.',
        },
        {
          title: 'Dead letter queue',
          description:
            'A separate queue for messages that repeatedly fail processing.',
        },
        {
          title: 'Idempotent consumer',
          description:
            'A consumer that can safely process duplicate deliveries.',
        },
      ],
    },

    {
      title: 'Kubernetes Fault Tolerance',
      content:
        'Kubernetes supports fault-tolerant application patterns through multiple replicas, scheduling, health probes, automatic replacement of failed pods, rolling updates, and service routing. These features require correct configuration and sufficient cluster capacity.',
      highlights: [
        {
          title: 'Replica',
          description:
            'Multiple instances of an application workload.',
        },
        {
          title: 'Self-healing',
          description:
            'Replacing failed workloads according to the desired state.',
        },
        {
          title: 'Readiness probe',
          description:
            'Determines whether a workload should receive traffic.',
        },
      ],
    },

    {
      title: 'Cloud Fault Domains',
      content:
        'Cloud platforms provide multiple fault domains such as availability zones and regions. Deploying redundant components across independent domains reduces the probability that one infrastructure event will remove all copies simultaneously.',
      highlights: [
        {
          title: 'Availability Zone',
          description:
            'An isolated infrastructure location within a cloud region.',
        },
        {
          title: 'Region',
          description:
            'A geographic cloud infrastructure area containing multiple services and often multiple zones.',
        },
        {
          title: 'Multi-zone deployment',
          description:
            'Distributing critical components across multiple availability zones.',
        },
      ],
    },

    {
      title: 'Fault Tolerance and Data Consistency',
      content:
        'Fault tolerance does not mean blindly continuing under every failure. A system may need to stop a particular operation rather than produce incorrect data. Architects must balance fault tolerance with consistency, correctness, durability, and business safety.',
      highlights: [
        {
          title: 'Correctness',
          description:
            'Maintaining valid business state even during failure.',
        },
        {
          title: 'Consistency trade-off',
          description:
            'Choosing whether to continue with potentially stale state or reject work until required consistency is restored.',
        },
        {
          title: 'Business invariant',
          description:
            'A rule that must remain true even when components fail.',
        },
      ],
    },

    {
      title: 'Fault Tolerance Testing',
      content:
        'Fault-tolerant architecture should be tested by deliberately introducing failures. Teams can stop instances, disconnect dependencies, delay responses, inject errors, or simulate provider failures to verify that recovery mechanisms actually work.',
      highlights: [
        {
          title: 'Failure injection',
          description:
            'Deliberately introducing controlled faults to test system behavior.',
        },
        {
          title: 'Chaos engineering',
          description:
            'A disciplined practice of experimenting with failures to validate resilience assumptions.',
        },
        {
          title: 'Recovery validation',
          description:
            'Verifying that the expected fallback and recovery mechanisms actually restore service.',
        },
      ],
    },

    {
      title: 'Chaos Engineering',
      content:
        'Chaos engineering tests resilience by intentionally introducing controlled failures in a safe environment or carefully bounded production experiment. The goal is to discover weaknesses before uncontrolled incidents do.',
      highlights: [
        {
          title: 'Chaos experiment',
          description:
            'A controlled experiment that introduces a defined failure condition.',
        },
        {
          title: 'Steady state',
          description:
            'The expected healthy behavior measured before and during an experiment.',
        },
        {
          title: 'Blast-radius control',
          description:
            'Limiting the scope of an experiment so it remains safe and useful.',
        },
      ],
    },

    {
      title: 'Fault Tolerance Metrics',
      content:
        'Important resilience metrics include availability, error rate, failure rate, recovery time, mean time to detect, mean time to recover, queue backlog, dependency error rate, and customer-impact duration.',
      highlights: [
        {
          title: 'MTTD',
          description:
            'Mean Time To Detect: average time required to detect a problem.',
        },
        {
          title: 'MTTR',
          description:
            'Mean Time To Recovery or Repair: average time required to restore service after failure.',
        },
        {
          title: 'Customer impact duration',
          description:
            'How long users experience meaningful degradation or outage.',
        },
      ],
    },

    {
      title: 'Fault Tolerance vs Disaster Recovery',
      content:
        'Fault tolerance is primarily about continuing operation through defined component failures. Disaster recovery focuses on restoring service after larger disruptive events. A complete resilience strategy often includes both.',
      highlights: [
        {
          title: 'Fault tolerance',
          description:
            'Continuing service despite defined component failures.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Restoring service after major disruptive events.',
        },
        {
          title: 'Recovery strategy',
          description:
            'The planned approach for returning to an acceptable operating state.',
        },
      ],
    },

    {
      title: 'Fault Tolerance in AI Systems',
      content:
        'AI applications often depend on multiple external and internal services. Fault tolerance can include model-provider failover, cached responses where safe, fallback models, alternate vector stores, queue-based asynchronous processing, circuit breakers, timeouts, and graceful degradation.',
      highlights: [
        {
          title: 'Model failover',
          description:
            'Switching to an alternate model or provider when the preferred model fails.',
        },
        {
          title: 'Vector-store redundancy',
          description:
            'Providing an alternate retrieval path when the primary vector service is unavailable.',
        },
        {
          title: 'AI fallback',
          description:
            'Using a lower-cost, simpler, or alternate AI capability when the primary path is unavailable.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'For an AI voice platform, the active call is the critical path. Telephony, speech-to-text, language-model, text-to-speech, and application services must be treated as potential failure points. The architecture can use provider failover, strict timeouts, circuit breakers, fallback responses, and post-call queues so non-critical work does not interrupt the conversation.',
      highlights: [
        {
          title: 'Critical call path',
          description:
            'The minimum chain of services required to keep an active customer call functioning.',
        },
        {
          title: 'Provider failover',
          description:
            'Switching to an alternate speech, model, or telephony provider when necessary.',
        },
        {
          title: 'Post-call queue',
          description:
            'Moving non-critical transcript, summary, analytics, or CRM work outside the active call path.',
        },
      ],
    },

    {
      title: 'Fault Tolerance Architecture Example',
      content:
        'A resilient web platform might run multiple application instances across availability zones behind a load balancer, use a replicated database, protect dependencies with timeouts and circuit breakers, process background work through durable queues, and maintain tested disaster recovery procedures.',
      highlights: [
        {
          title: 'Redundant application',
          description:
            'Multiple application instances across independent failure domains.',
        },
        {
          title: 'Protected dependency',
          description:
            'A downstream dependency accessed through appropriate timeouts, retries, and circuit breaking.',
        },
        {
          title: 'Durable queue',
          description:
            'A messaging layer that preserves asynchronous work according to defined durability guarantees.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is fault tolerance? Fault tolerance vs high availability? What is a single point of failure? How do you design a fault-tolerant system? What is a circuit breaker? What is a bulkhead? How do retries improve or hurt resilience? How do you handle database failure? How would you make an AI platform fault tolerant? How do you test resilience?',
      highlights: [
        {
          title: 'Fault-tolerant design',
          description:
            'Explain redundancy, isolation, detection, failover, and recovery.',
        },
        {
          title: 'Circuit breaker',
          description:
            'Explain how it protects systems from repeatedly calling failing dependencies.',
        },
        {
          title: 'Bulkhead',
          description:
            'Explain resource isolation and blast-radius reduction.',
        },
        {
          title: 'Failure testing',
          description:
            'Explain why resilience assumptions must be validated through controlled failure experiments.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would first identify the critical business functions and the failure scenarios we need to tolerate. Then I would remove single points of failure, distribute critical components across independent fault domains, and introduce appropriate detection, failover, timeouts, circuit breakers, retries, and graceful degradation. I would make asynchronous consumers idempotent and define recovery objectives. Finally, I would test the failure paths rather than assuming redundancy alone guarantees resilience.”',
      highlights: [
        {
          title: 'Failure scenarios first',
          description:
            'Design resilience around realistic failure modes rather than adding technology blindly.',
        },
        {
          title: 'Independent failure domains',
          description:
            'Ensure redundant components do not share the same failure boundary.',
        },
        {
          title: 'Test the design',
          description:
            'Validate recovery behavior through controlled failure testing.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include assuming redundancy automatically creates fault tolerance, putting all replicas in the same failure domain, using unlimited retries, creating fallbacks that return incorrect information, ignoring shared dependencies, and never testing failover.',
      highlights: [
        {
          title: 'Redundancy without isolation',
          description:
            'Multiple replicas can still fail together if they share the same infrastructure dependency.',
        },
        {
          title: 'Unlimited retries',
          description:
            'Repeated retries can turn a dependency failure into a larger outage.',
        },
        {
          title: 'Unsafe fallback',
          description:
            'A fallback that produces misleading or invalid business results.',
        },
        {
          title: 'Untested failover',
          description:
            'A recovery mechanism that exists in design documents but has never been validated.',
        },
      ],
    },

    {
      title: 'Fault Tolerance for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, fault tolerance is about converting business-critical failure scenarios into measurable engineering requirements. The leader should define acceptable failure behavior, prioritize critical paths, understand vendor dependencies, ensure recovery ownership, and make resilience testing part of delivery rather than an afterthought.',
      highlights: [
        {
          title: 'Business-critical path',
          description:
            'The functionality whose failure creates the greatest customer or business impact.',
        },
        {
          title: 'Resilience requirement',
          description:
            'A measurable expectation for how the system should behave under defined failures.',
        },
        {
          title: 'Vendor dependency risk',
          description:
            'The risk that an external provider failure affects the product.',
        },
        {
          title: 'Recovery ownership',
          description:
            'Clear responsibility for detecting, mitigating, and recovering from failures.',
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
    'consistency',
    'availability',
    'high-availability',
    'capacity-planning',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'cloudflare',
    'nginx',
    'redis',
    'postgresql',
    'kafka',
  ],
}

export default faultToleranceKnowledge
