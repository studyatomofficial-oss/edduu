import type { KnowledgeDefinition } from './knowledge'

export const highAvailabilityKnowledge: KnowledgeDefinition = {
  technologyId: 'high-availability',
  slug: 'high-availability',
  title: 'High Availability',
  summary:
    'High Availability is the architectural practice of keeping a system accessible and operational for users despite expected component failures, maintenance, and infrastructure disruptions.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is High Availability?',
      content:
        'High Availability, commonly called HA, means designing a system to minimize downtime and continue serving users when individual components fail. The architecture uses redundancy, health checks, automated recovery, failure isolation, and carefully defined operational objectives.',
      highlights: [
        {
          title: 'High Availability',
          description:
            'An architectural approach for minimizing service interruption and maintaining access during defined failures.',
        },
        {
          title: 'Downtime',
          description:
            'The period during which a service cannot provide its required functionality.',
        },
        {
          title: 'Availability target',
          description:
            'The measurable level of service availability the system is expected to maintain.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school with two entrances. If one entrance is blocked, students can still enter through the second entrance. The school is still accessible even though one path has failed. High Availability applies the same idea to software systems by providing alternate healthy paths.',
      highlights: [
        {
          title: 'School',
          description:
            'Represents the complete application or platform.',
        },
        {
          title: 'Two entrances',
          description:
            'Represent redundant infrastructure or service paths.',
        },
        {
          title: 'Blocked entrance',
          description:
            'Represents a failed component.',
        },
      ],
    },

    {
      title: 'Why High Availability Matters',
      content:
        'Downtime can directly affect customers, revenue, operations, reputation, and contractual commitments. High Availability is especially important for systems where users expect continuous access, such as payments, communication, healthcare, commerce, SaaS platforms, and critical internal systems.',
      highlights: [
        {
          title: 'Customer impact',
          description:
            'Users may be unable to complete important workflows during an outage.',
        },
        {
          title: 'Revenue impact',
          description:
            'Unavailable systems can stop transactions, sales, or business operations.',
        },
        {
          title: 'Trust',
          description:
            'Repeated outages can reduce customer confidence in the product.',
        },
      ],
    },

    {
      title: 'Availability vs High Availability',
      content:
        'Availability is the measurable state or property of being operational and accessible. High Availability is the architectural discipline of designing the system to maintain that availability despite defined failures.',
      highlights: [
        {
          title: 'Availability',
          description:
            'A measurable property describing whether the service is accessible.',
        },
        {
          title: 'High Availability',
          description:
            'The architecture and operational practices used to minimize service interruption.',
        },
        {
          title: 'Measurement',
          description:
            'Availability is commonly measured through SLIs and evaluated against SLOs.',
        },
      ],
    },

    {
      title: 'High Availability vs Fault Tolerance',
      content:
        'Fault tolerance focuses on continuing operation when components fail. High Availability focuses on minimizing downtime and keeping the service accessible. Fault-tolerant mechanisms such as redundancy and failover are commonly used to achieve high availability.',
      highlights: [
        {
          title: 'Fault tolerance',
          description:
            'Ability to continue operating despite defined component faults.',
        },
        {
          title: 'High Availability',
          description:
            'Ability to minimize service interruption and maintain accessibility.',
        },
        {
          title: 'Relationship',
          description:
            'Fault tolerance is one of the mechanisms used to achieve HA.',
        },
      ],
    },

    {
      title: 'Single Point of Failure',
      content:
        'A Single Point of Failure, or SPOF, is a component whose failure can cause unacceptable service interruption. Identifying and eliminating SPOFs is one of the first steps in HA architecture.',
      highlights: [
        {
          title: 'SPOF',
          description:
            'A component whose failure can make the service unavailable.',
        },
        {
          title: 'Dependency mapping',
          description:
            'Mapping service dependencies to identify shared failure points.',
        },
        {
          title: 'Redundancy',
          description:
            'Providing alternate components or paths to remove critical single points of failure.',
        },
      ],
    },

    {
      title: 'Redundancy',
      content:
        'Redundancy means maintaining additional resources that can serve when another resource fails. Redundancy can exist at the server, application, database, network, availability-zone, region, or provider level.',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Additional resources that provide alternate capacity or functionality during failure.',
        },
        {
          title: 'Application redundancy',
          description:
            'Running multiple application instances.',
        },
        {
          title: 'Infrastructure redundancy',
          description:
            'Using multiple independent infrastructure components or locations.',
        },
      ],
    },

    {
      title: 'Active-Active',
      content:
        'In an active-active architecture, multiple instances actively serve production traffic. If one instance fails, traffic can continue through the remaining healthy instances.',
      highlights: [
        {
          title: 'Active-active',
          description:
            'Multiple instances actively serve traffic at the same time.',
        },
        {
          title: 'Load distribution',
          description:
            'Requests are distributed across healthy instances.',
        },
        {
          title: 'Capacity headroom',
          description:
            'Remaining capacity must be sufficient to absorb traffic after a failure.',
        },
      ],
    },

    {
      title: 'Active-Passive',
      content:
        'In active-passive architecture, the active component serves production traffic while a standby component is prepared to take over. Failover transfers responsibility to the standby when the active component fails.',
      highlights: [
        {
          title: 'Active',
          description:
            'The component currently handling production workload.',
        },
        {
          title: 'Passive',
          description:
            'A standby component waiting to take over.',
        },
        {
          title: 'Failover',
          description:
            'The process of transferring workload to the standby component.',
        },
      ],
    },

    {
      title: 'Load Balancing',
      content:
        'A load balancer distributes requests across multiple application instances. In HA architecture, it can also perform health-based routing and remove unhealthy instances from service.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes incoming traffic across backend instances.',
        },
        {
          title: 'Health-based routing',
          description:
            'Sending requests only to instances considered healthy.',
        },
        {
          title: 'Connection draining',
          description:
            'Allowing existing requests to finish before removing an instance.',
        },
      ],
    },

    {
      title: 'Health Checks',
      content:
        'Health checks allow infrastructure and traffic-routing systems to determine whether an instance should receive production traffic. Good HA systems distinguish between a process being alive and an application actually being ready to serve users.',
      highlights: [
        {
          title: 'Liveness',
          description:
            'Whether a process or container is alive.',
        },
        {
          title: 'Readiness',
          description:
            'Whether a service is ready to receive production traffic.',
        },
        {
          title: 'Health endpoint',
          description:
            'An endpoint or mechanism used to report service health.',
        },
      ],
    },

    {
      title: 'Automatic Failover',
      content:
        'Automatic failover detects a failure and moves traffic or workload to a healthy alternative without requiring manual intervention. Automation can reduce recovery time but must be carefully designed to avoid false failovers and unstable behavior.',
      highlights: [
        {
          title: 'Automatic failover',
          description:
            'Automatically transferring workload after detecting failure.',
        },
        {
          title: 'Detection time',
          description:
            'Time required to recognize that a component has failed.',
        },
        {
          title: 'Recovery time',
          description:
            'Time required to restore acceptable service after failure detection.',
        },
      ],
    },

    {
      title: 'Availability Zones',
      content:
        'Cloud availability zones are designed as separate infrastructure locations within a region. Deploying critical components across multiple zones reduces the risk that a single zone failure will take down the entire application.',
      highlights: [
        {
          title: 'Availability Zone',
          description:
            'An isolated infrastructure location within a cloud region.',
        },
        {
          title: 'Multi-AZ',
          description:
            'Deploying redundant components across multiple availability zones.',
        },
        {
          title: 'Zone failure',
          description:
            'An infrastructure failure affecting one availability zone.',
        },
      ],
    },

    {
      title: 'Multi-Region HA',
      content:
        'Multi-region HA distributes infrastructure across geographically separated cloud regions. It can protect against regional failures but introduces additional complexity around data replication, DNS or traffic routing, consistency, latency, cost, and operational management.',
      highlights: [
        {
          title: 'Multi-region',
          description:
            'Operating service infrastructure in multiple geographic regions.',
        },
        {
          title: 'Regional failover',
          description:
            'Moving users or workload to another healthy region.',
        },
        {
          title: 'Geo-routing',
          description:
            'Routing users to appropriate healthy geographic locations.',
        },
      ],
    },

    {
      title: 'Database High Availability',
      content:
        'Database HA commonly uses replication, standby systems, automatic failover, multi-zone deployment, backups, and tested recovery procedures. The design must preserve required consistency and durability guarantees while meeting availability objectives.',
      highlights: [
        {
          title: 'Database replication',
          description:
            'Maintaining additional copies of database state.',
        },
        {
          title: 'Database failover',
          description:
            'Transferring database service to a healthy alternate node.',
        },
        {
          title: 'Standby',
          description:
            'A prepared database system that can take over after primary failure.',
        },
      ],
    },

    {
      title: 'Stateless Application Design',
      content:
        'Stateless application instances are easier to scale and replace because important session state is stored outside the individual instance. This allows traffic to move between healthy instances without losing application state.',
      highlights: [
        {
          title: 'Stateless',
          description:
            'An application instance does not depend on local memory for durable user session state.',
        },
        {
          title: 'Externalized state',
          description:
            'Storing shared state in databases, caches, or other dedicated systems.',
        },
        {
          title: 'Replaceability',
          description:
            'The ability to replace an application instance without losing important user state.',
        },
      ],
    },

    {
      title: 'Session Management',
      content:
        'Session handling affects HA. If session data is stored only on one application instance, traffic failover can break user sessions. Shared session stores, signed tokens, or carefully designed stateless authentication can reduce this dependency.',
      highlights: [
        {
          title: 'Session affinity',
          description:
            'Routing a user repeatedly to the same application instance.',
        },
        {
          title: 'Shared session store',
          description:
            'A centralized or distributed system storing session information outside individual instances.',
        },
        {
          title: 'Stateless authentication',
          description:
            'Authentication designs where required session information can be validated without relying on one specific application instance.',
        },
      ],
    },

    {
      title: 'Auto Scaling',
      content:
        'Auto scaling adjusts application or infrastructure capacity based on workload or health signals. It can support HA by ensuring sufficient capacity during traffic spikes or after instance failures.',
      highlights: [
        {
          title: 'Auto scaling',
          description:
            'Automatically adjusting resource capacity according to defined signals.',
        },
        {
          title: 'Scale out',
          description:
            'Adding more instances to increase capacity.',
        },
        {
          title: 'Capacity headroom',
          description:
            'Available spare capacity that helps the system absorb failures or traffic spikes.',
        },
      ],
    },

    {
      title: 'Graceful Degradation',
      content:
        'A highly available system does not always need to preserve every feature during a dependency failure. It can keep the critical user journey available while temporarily disabling non-essential functionality.',
      highlights: [
        {
          title: 'Graceful degradation',
          description:
            'Continuing essential functionality with reduced capabilities during partial failure.',
        },
        {
          title: 'Critical path',
          description:
            'The minimum workflow required to deliver the primary business outcome.',
        },
        {
          title: 'Optional feature',
          description:
            'A feature that can temporarily be disabled without stopping the core business workflow.',
        },
      ],
    },

    {
      title: 'Timeouts and HA',
      content:
        'Timeouts prevent slow dependencies from consuming resources indefinitely. They are important for HA because an unresponsive dependency can otherwise cause request queues, connection exhaustion, and cascading failures.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A maximum duration allowed for an operation.',
        },
        {
          title: 'Connection exhaustion',
          description:
            'A condition where available connections are consumed by slow or stuck operations.',
        },
        {
          title: 'Cascading failure',
          description:
            'A failure that spreads from one component to dependent components.',
        },
      ],
    },

    {
      title: 'Circuit Breakers',
      content:
        'Circuit breakers protect a healthy service from repeatedly calling an unhealthy dependency. When failures cross a threshold, the circuit opens and requests are blocked or routed to fallback behavior until limited recovery checks succeed.',
      highlights: [
        {
          title: 'Circuit breaker',
          description:
            'A mechanism that stops repeated calls to a failing dependency.',
        },
        {
          title: 'Open',
          description:
            'State where normal dependency calls are blocked.',
        },
        {
          title: 'Half-open',
          description:
            'State where controlled test requests determine whether the dependency has recovered.',
        },
      ],
    },

    {
      title: 'Retries and Backoff',
      content:
        'Retries can help recover from transient failures, but excessive retries can overload an already unhealthy service. HA systems use bounded retries, exponential backoff, and jitter where appropriate.',
      highlights: [
        {
          title: 'Transient failure',
          description:
            'A temporary failure that may disappear without permanent remediation.',
        },
        {
          title: 'Exponential backoff',
          description:
            'Increasing the delay between repeated attempts.',
        },
        {
          title: 'Jitter',
          description:
            'Adding randomness to retry timing to reduce synchronized retry spikes.',
        },
      ],
    },

    {
      title: 'Bulkhead Pattern',
      content:
        'Bulkheads isolate resources between workloads so that failure or overload in one area does not consume all capacity. This reduces the blast radius of failures.',
      highlights: [
        {
          title: 'Bulkhead',
          description:
            'A resource-isolation pattern used to prevent failures from spreading across workloads.',
        },
        {
          title: 'Resource pool',
          description:
            'A bounded set of resources allocated to a workload or dependency.',
        },
        {
          title: 'Blast radius',
          description:
            'The amount of functionality affected by a failure.',
        },
      ],
    },

    {
      title: 'Queues and HA',
      content:
        'Message queues can improve availability by separating producers from consumers. If a consumer temporarily fails, messages can remain available for later processing instead of forcing the producer to wait for immediate completion.',
      highlights: [
        {
          title: 'Message queue',
          description:
            'A system that stores messages between producers and consumers.',
        },
        {
          title: 'Consumer failure',
          description:
            'A condition where a downstream processor cannot currently handle messages.',
        },
        {
          title: 'Asynchronous processing',
          description:
            'Processing work separately from the request that originally created it.',
        },
      ],
    },

    {
      title: 'Disaster Recovery vs High Availability',
      content:
        'High Availability aims to keep the service running through defined component failures. Disaster Recovery focuses on restoring service after larger disruptive events. A mature architecture normally defines both HA and DR requirements.',
      highlights: [
        {
          title: 'High Availability',
          description:
            'Minimizing service interruption during expected component-level failures.',
        },
        {
          title: 'Disaster Recovery',
          description:
            'Restoring service after major disruptive events.',
        },
        {
          title: 'Recovery strategy',
          description:
            'The planned technical and operational process for restoring service.',
        },
      ],
    },

    {
      title: 'RTO and RPO',
      content:
        'Recovery Time Objective defines how quickly service should be restored after a disruption. Recovery Point Objective defines how much recent data loss is acceptable. Both influence HA and disaster-recovery architecture.',
      highlights: [
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: target time to restore service.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: acceptable amount of recent data loss.',
        },
        {
          title: 'Recovery architecture',
          description:
            'Infrastructure and processes designed to meet RTO and RPO requirements.',
        },
      ],
    },

    {
      title: 'SLA, SLO and SLI',
      content:
        'SLI is the measured service behavior. SLO is the target for that measurement. SLA is a formal service commitment. HA architecture should be designed against measurable SLOs rather than vague expectations of “no downtime.”',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measured indicator of actual service behavior.',
        },
        {
          title: 'SLO',
          description:
            'A target for service reliability or performance.',
        },
        {
          title: 'SLA',
          description:
            'A formal service commitment between provider and customer.',
        },
      ],
    },

    {
      title: 'Error Budget',
      content:
        'An error budget represents the amount of unreliability permitted by an SLO. It helps teams balance feature delivery with reliability work. When the budget is heavily consumed, teams may prioritize stability and reduce risky releases.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The allowed amount of unreliability under an SLO.',
        },
        {
          title: 'Reliability balance',
          description:
            'Balancing product velocity with operational reliability.',
        },
        {
          title: 'Release risk',
          description:
            'The reliability impact that should be considered before deploying changes.',
        },
      ],
    },

    {
      title: 'Monitoring and Observability',
      content:
        'HA cannot be managed without visibility. Teams should monitor successful requests, error rates, latency, dependency health, saturation, capacity, failovers, replication lag, and customer-facing availability.',
      highlights: [
        {
          title: 'Observability',
          description:
            'The ability to understand system behavior through telemetry such as logs, metrics, and traces.',
        },
        {
          title: 'Saturation',
          description:
            'How close a resource is to its usable capacity.',
        },
        {
          title: 'Dependency health',
          description:
            'The operational condition of services required by the application.',
        },
      ],
    },

    {
      title: 'Synthetic Monitoring',
      content:
        'Synthetic monitoring uses automated requests to simulate important user journeys. It can detect availability problems before enough real users report them.',
      highlights: [
        {
          title: 'Synthetic check',
          description:
            'An automated test that simulates a real user operation.',
        },
        {
          title: 'User journey',
          description:
            'A sequence of actions representing an important customer workflow.',
        },
        {
          title: 'Early detection',
          description:
            'Detecting service problems before they become widespread customer incidents.',
        },
      ],
    },

    {
      title: 'Deployment and High Availability',
      content:
        'Deployment strategy affects HA. Rolling deployments, blue-green deployments, canary releases, health checks, automated rollback, and feature flags can reduce the risk that a new release makes the entire service unavailable.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing application instances gradually rather than all at once.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining two environments and switching traffic between them.',
        },
        {
          title: 'Canary release',
          description:
            'Releasing a change to a small portion of traffic before broader rollout.',
        },
      ],
    },

    {
      title: 'High Availability in Kubernetes',
      content:
        'Kubernetes supports HA through multiple replicas, scheduling across nodes, readiness probes, liveness probes, services, rolling updates, pod disruption controls, and automatic replacement of failed workloads. The cluster itself must also be designed for availability.',
      highlights: [
        {
          title: 'Multiple replicas',
          description:
            'Running more than one instance of a workload.',
        },
        {
          title: 'Pod disruption budget',
          description:
            'A Kubernetes mechanism that limits voluntary disruption to maintain desired availability.',
        },
        {
          title: 'Cluster availability',
          description:
            'Ensuring the Kubernetes control plane and worker infrastructure can tolerate relevant failures.',
        },
      ],
    },

    {
      title: 'High Availability in AWS',
      content:
        'AWS architectures can use multiple Availability Zones, Elastic Load Balancing, Auto Scaling, Multi-AZ databases, Route 53 routing, health checks, backups, and regional recovery strategies. The exact combination depends on the service SLO and business requirements.',
      highlights: [
        {
          title: 'Elastic Load Balancing',
          description:
            'AWS load-balancing capability used to distribute traffic across healthy targets.',
        },
        {
          title: 'Auto Scaling',
          description:
            'AWS capability for automatically adjusting compute capacity.',
        },
        {
          title: 'Multi-AZ',
          description:
            'Deploying resources across multiple availability zones for resilience.',
        },
      ],
    },

    {
      title: 'High Availability in Azure',
      content:
        'Azure provides availability zones, load balancing, scale sets, managed database redundancy, traffic routing, monitoring, and recovery services that can be combined to build highly available applications.',
      highlights: [
        {
          title: 'Availability Zones',
          description:
            'Separate physical locations within an Azure region.',
        },
        {
          title: 'Scale set',
          description:
            'A mechanism for operating and scaling multiple virtual machine instances.',
        },
        {
          title: 'Traffic routing',
          description:
            'Directing users to healthy application endpoints.',
        },
      ],
    },

    {
      title: 'High Availability in AI Systems',
      content:
        'AI systems often depend on model providers, embedding services, vector databases, speech services, telephony providers, and external APIs. HA design should identify which dependencies are critical and provide fallback, timeout, failover, caching, or asynchronous alternatives where business requirements allow.',
      highlights: [
        {
          title: 'Model provider redundancy',
          description:
            'Using alternate model providers or models when the primary service fails.',
        },
        {
          title: 'Fallback model',
          description:
            'An alternate AI model used when the preferred model is unavailable.',
        },
        {
          title: 'Dependency isolation',
          description:
            'Preventing failure of one AI dependency from taking down unrelated functionality.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'For an AI voice platform, the active conversation is the critical user journey. Telephony, speech-to-text, language model, text-to-speech, and application services should have clearly defined failure behavior. Provider failover and graceful degradation should be applied where technically and commercially practical, while post-call analytics and CRM updates can be moved to asynchronous processing.',
      highlights: [
        {
          title: 'Active conversation',
          description:
            'The highest-priority real-time workflow in an AI voice platform.',
        },
        {
          title: 'Provider failover',
          description:
            'Switching to an alternate provider when a critical external dependency fails.',
        },
        {
          title: 'Asynchronous post-processing',
          description:
            'Moving non-critical transcript, analytics, summary, or CRM work outside the real-time call path.',
        },
      ],
    },

    {
      title: 'High Availability Architecture Example',
      content:
        'A production SaaS platform could run multiple stateless application instances behind a load balancer, distribute them across availability zones, use a highly available database configuration, protect dependencies with timeouts and circuit breakers, process background work through durable queues, and monitor customer-facing SLOs.',
      highlights: [
        {
          title: 'Stateless application',
          description:
            'Application instances that can be replaced or scaled without losing durable user state.',
        },
        {
          title: 'Multi-zone architecture',
          description:
            'Distributing critical infrastructure across independent availability zones.',
        },
        {
          title: 'Durable queue',
          description:
            'Persisting asynchronous work so temporary consumer failures do not necessarily lose the work.',
        },
      ],
    },

    {
      title: 'HA Cost Trade-off',
      content:
        'High Availability is not free. More replicas, multiple zones, redundant databases, secondary providers, monitoring, testing, and operational automation increase cost and complexity. The target should be based on business impact and risk rather than automatically aiming for the highest possible availability.',
      highlights: [
        {
          title: 'Infrastructure cost',
          description:
            'Additional redundant infrastructure increases operational spending.',
        },
        {
          title: 'Complexity',
          description:
            'More failure paths require more testing, monitoring, and operational discipline.',
        },
        {
          title: 'Business justification',
          description:
            'Availability investment should be proportional to the cost and impact of downtime.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is High Availability? How would you design a highly available system? Active-active vs active-passive? How do you remove SPOFs? How do load balancers contribute to HA? Why deploy across multiple availability zones? What is multi-region HA? How do SLI, SLO and SLA relate to HA? What are RTO and RPO? How would you make an AI platform highly available?',
      highlights: [
        {
          title: 'HA architecture',
          description:
            'Explain redundancy, failure domains, health checks, failover, and monitoring.',
        },
        {
          title: 'Active-active vs active-passive',
          description:
            'Explain the operational and capacity differences between the two models.',
        },
        {
          title: 'Cloud HA',
          description:
            'Explain zones, regions, load balancing, scaling, and managed-service redundancy.',
        },
        {
          title: 'AI HA',
          description:
            'Explain model/provider redundancy, fallback, and protection of the real-time critical path.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would first define the business-critical user journey and its SLO. Then I would identify single points of failure and distribute critical components across independent failure domains. I would use health checks, load balancing, automated failover, sufficient capacity headroom, and resilient data storage. For dependencies, I would add appropriate timeouts, circuit breakers, retries, and graceful degradation. Finally, I would test failover and measure the result against the SLO rather than assuming the architecture is highly available.”',
      highlights: [
        {
          title: 'Start with SLO',
          description:
            'Define the measurable availability requirement before choosing architecture.',
        },
        {
          title: 'Remove SPOFs',
          description:
            'Identify and eliminate critical shared failure points.',
        },
        {
          title: 'Test recovery',
          description:
            'Validate that failover and recovery actually work under realistic conditions.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include thinking two servers automatically create HA, putting all replicas in the same failure domain, ignoring databases and external dependencies, confusing HA with disaster recovery, setting unrealistic availability targets, and failing to test the recovery path.',
      highlights: [
        {
          title: 'Two servers equals HA',
          description:
            'Redundancy is insufficient if both servers depend on the same failing component.',
        },
        {
          title: 'Database ignored',
          description:
            'Application redundancy cannot compensate for a single unavailable database.',
        },
        {
          title: 'HA equals DR',
          description:
            'High Availability and Disaster Recovery address different failure scopes.',
        },
        {
          title: 'Untested failover',
          description:
            'A failover design is not reliable until it has been validated.',
        },
      ],
    },

    {
      title: 'High Availability for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, HA is primarily a business-risk and delivery decision. The leader should translate customer expectations into measurable SLOs, identify critical dependencies, prioritize reliability work, align teams on incident ownership, evaluate vendor risks, and ensure recovery mechanisms are regularly tested.',
      highlights: [
        {
          title: 'Business-critical workflow',
          description:
            'Identify which user journeys must remain available.',
        },
        {
          title: 'Reliability roadmap',
          description:
            'Prioritize engineering investments that reduce meaningful availability risk.',
        },
        {
          title: 'Vendor resilience',
          description:
            'Evaluate how external providers can affect the availability of the product.',
        },
        {
          title: 'Executive communication',
          description:
            'Communicate availability risk using SLO performance, customer impact, and recovery expectations.',
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
    'fault-tolerance',
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
  ],
}

export default highAvailabilityKnowledge
