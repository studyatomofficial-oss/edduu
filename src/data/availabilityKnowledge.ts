import type { KnowledgeDefinition } from './knowledge'

export const availabilityKnowledge: KnowledgeDefinition = {
  technologyId: 'availability',
  slug: 'availability',
  title: 'Availability',
  summary:
    'Availability describes how reliably a system remains accessible and able to serve requests according to its defined service objectives.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Availability?',
      content:
        'Availability measures whether a system is operational and able to serve users when they need it. A highly available system is designed to minimize downtime and continue operating when individual components fail.',
      highlights: [
        {
          title: 'Availability',
          description:
            'The degree to which a system remains accessible and operational when required.',
        },
        {
          title: 'Downtime',
          description:
            'A period during which a service is unavailable or unable to provide its required functionality.',
        },
        {
          title: 'Uptime',
          description:
            'The amount or percentage of time a service remains operational.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a restaurant with three cash counters. If one counter breaks, customers can still use the other two. The restaurant remains available even though one component failed. A highly available software system works in a similar way by avoiding a single failed component taking down the entire service.',
      highlights: [
        {
          title: 'Restaurant',
          description:
            'Comparable to the overall application.',
        },
        {
          title: 'Cash counters',
          description:
            'Comparable to redundant application instances.',
        },
        {
          title: 'Failed counter',
          description:
            'Comparable to an individual infrastructure or service failure.',
        },
      ],
    },

    {
      title: 'Why Availability Matters',
      content:
        'Availability directly affects customer experience, revenue, operational continuity, and trust. The required availability target should be based on business impact rather than simply choosing the highest possible number.',
      highlights: [
        {
          title: 'Customer impact',
          description:
            'Users may be unable to complete important actions when a service is unavailable.',
        },
        {
          title: 'Revenue impact',
          description:
            'Downtime can prevent transactions, leads, or other revenue-generating operations.',
        },
        {
          title: 'Business continuity',
          description:
            'Critical services may need to remain operational despite component failures.',
        },
      ],
    },

    {
      title: 'Availability Percentage',
      content:
        'Availability is commonly expressed as a percentage of time during which a service is operational. A simplified calculation is available time divided by total measured time, multiplied by 100.',
      highlights: [
        {
          title: 'Availability formula',
          description:
            'Availability = available time / total time × 100.',
        },
        {
          title: 'Measurement window',
          description:
            'The period over which availability is evaluated.',
        },
        {
          title: 'Service objective',
          description:
            'The target availability level defined for a service.',
        },
      ],
    },

    {
      title: 'The Availability Numbers',
      content:
        'Availability targets are often expressed using “nines.” Higher targets dramatically reduce the amount of acceptable downtime. The exact downtime depends on the measurement period and whether maintenance is included in the service definition.',
      highlights: [
        {
          title: '99%',
          description:
            'Allows substantially more downtime than higher availability targets.',
        },
        {
          title: '99.9%',
          description:
            'Commonly called three nines and represents a much tighter downtime budget.',
        },
        {
          title: '99.99%',
          description:
            'Four nines and a significantly smaller downtime budget.',
        },
        {
          title: '99.999%',
          description:
            'Five nines and an extremely small downtime budget.',
        },
      ],
    },

    {
      title: 'Availability vs Reliability',
      content:
        'Availability and reliability are related but different. Availability asks whether the service is operational when needed. Reliability focuses more on the probability that the system performs correctly without failure over a period of time.',
      highlights: [
        {
          title: 'Availability',
          description:
            'Whether the service is operational and accessible when required.',
        },
        {
          title: 'Reliability',
          description:
            'The ability of a system to perform correctly and avoid failures over time.',
        },
        {
          title: 'Relationship',
          description:
            'A system can recover quickly from failures and therefore remain highly available even if failures occasionally occur.',
        },
      ],
    },

    {
      title: 'Availability vs Durability',
      content:
        'Availability concerns access to a service or data. Durability concerns whether stored data survives failures and remains preserved. A database can have highly durable data but temporarily be unavailable for reads or writes.',
      highlights: [
        {
          title: 'Availability',
          description:
            'Ability to access or use the service.',
        },
        {
          title: 'Durability',
          description:
            'Ability to preserve data despite relevant failures.',
        },
        {
          title: 'Example',
          description:
            'A backup may preserve data durably even while the primary application is temporarily unavailable.',
        },
      ],
    },

    {
      title: 'Single Point of Failure',
      content:
        'A single point of failure is a component whose failure can make the entire service unavailable. High-availability architectures identify and remove or mitigate these dependencies.',
      highlights: [
        {
          title: 'Single point of failure',
          description:
            'A component whose failure can cause the overall service to fail.',
        },
        {
          title: 'SPOF',
          description:
            'Common abbreviation for single point of failure.',
        },
        {
          title: 'Redundancy',
          description:
            'Providing alternative components so one failure does not stop the service.',
        },
      ],
    },

    {
      title: 'Redundancy',
      content:
        'Redundancy means maintaining additional resources that can continue serving when another resource fails. Redundancy can exist at the application, server, database, network, region, or provider level.',
      highlights: [
        {
          title: 'Redundancy',
          description:
            'Providing additional components or paths to tolerate failures.',
        },
        {
          title: 'Active-active',
          description:
            'Multiple instances actively serve traffic at the same time.',
        },
        {
          title: 'Active-passive',
          description:
            'A primary instance serves traffic while a standby instance is ready to take over.',
        },
      ],
    },

    {
      title: 'Active-Active Architecture',
      content:
        'In active-active architecture, multiple instances actively serve production traffic. If one instance fails, traffic can be routed to the remaining healthy instances.',
      highlights: [
        {
          title: 'Active-active',
          description:
            'Multiple redundant components actively serve traffic.',
        },
        {
          title: 'Load distribution',
          description:
            'Traffic is distributed across healthy instances.',
        },
        {
          title: 'Failure tolerance',
          description:
            'The service can continue operating when an individual active instance fails.',
        },
      ],
    },

    {
      title: 'Active-Passive Architecture',
      content:
        'In active-passive architecture, one component serves production traffic while another remains available as a standby. Failover transfers responsibility to the standby when the active component fails.',
      highlights: [
        {
          title: 'Active',
          description:
            'The component currently serving production traffic.',
        },
        {
          title: 'Passive',
          description:
            'A standby component prepared to take over.',
        },
        {
          title: 'Failover',
          description:
            'The process of transferring service responsibility to a standby component.',
        },
      ],
    },

    {
      title: 'Failover',
      content:
        'Failover is the process of switching traffic or workload from a failed component to a healthy alternative. Good failover design considers detection time, decision logic, recovery time, data consistency, and the possibility of false failure detection.',
      highlights: [
        {
          title: 'Failover',
          description:
            'Switching service responsibility from a failed component to a healthy one.',
        },
        {
          title: 'Failure detection',
          description:
            'Identifying that a component is no longer able to serve correctly.',
        },
        {
          title: 'Failover time',
          description:
            'The time required to detect failure and restore service through an alternative path.',
        },
      ],
    },

    {
      title: 'Failback',
      content:
        'Failback is the process of returning traffic or workload to the original or preferred component after it has recovered. It should be controlled carefully because an unstable recovered component can cause another outage.',
      highlights: [
        {
          title: 'Failback',
          description:
            'Returning service responsibility to the original or preferred component after recovery.',
        },
        {
          title: 'Stability check',
          description:
            'Verifying that a recovered component is healthy before returning production traffic.',
        },
        {
          title: 'Controlled restoration',
          description:
            'Gradually or deliberately moving workload back to the preferred system.',
        },
      ],
    },

    {
      title: 'Health Checks',
      content:
        'Health checks determine whether an application or infrastructure component is healthy enough to receive traffic. A useful health check should test meaningful service readiness rather than only whether a process is running.',
      highlights: [
        {
          title: 'Health check',
          description:
            'A mechanism used to determine whether a service or instance is healthy.',
        },
        {
          title: 'Liveness',
          description:
            'Indicates whether a process is alive and functioning at a basic level.',
        },
        {
          title: 'Readiness',
          description:
            'Indicates whether an instance is ready to receive production traffic.',
        },
      ],
    },

    {
      title: 'Load Balancer and Availability',
      content:
        'Load balancers can improve availability by distributing traffic across multiple healthy application instances and removing unhealthy instances from service.',
      highlights: [
        {
          title: 'Load balancer',
          description:
            'A component that distributes requests across backend instances.',
        },
        {
          title: 'Health-based routing',
          description:
            'Sending traffic only to instances that pass required health checks.',
        },
        {
          title: 'Connection draining',
          description:
            'Allowing existing requests to complete before removing an instance from service.',
        },
      ],
    },

    {
      title: 'Availability Zones',
      content:
        'Cloud providers commonly divide regions into multiple isolated availability zones. Deploying critical components across multiple zones reduces the risk that a single-zone failure will make the entire service unavailable.',
      highlights: [
        {
          title: 'Availability Zone',
          description:
            'An isolated infrastructure location within a cloud region designed to reduce correlated failures.',
        },
        {
          title: 'Multi-AZ',
          description:
            'Deploying application or data components across multiple availability zones.',
        },
        {
          title: 'Zone failure',
          description:
            'An outage affecting infrastructure within one availability zone.',
        },
      ],
    },

    {
      title: 'Multi-Region Availability',
      content:
        'Multi-region architectures distribute service infrastructure across geographically separate regions. They can protect against large regional failures but introduce additional complexity around data replication, traffic routing, latency, cost, and consistency.',
      highlights: [
        {
          title: 'Multi-region',
          description:
            'Operating service infrastructure across multiple geographic cloud regions.',
        },
        {
          title: 'Regional failure',
          description:
            'A failure affecting a geographic cloud region or its major dependencies.',
        },
        {
          title: 'Geo-routing',
          description:
            'Routing users to appropriate healthy geographic locations.',
        },
      ],
    },

    {
      title: 'Graceful Degradation',
      content:
        'Graceful degradation means reducing functionality rather than completely failing when a dependency becomes unavailable. Non-critical features can be disabled while essential functionality continues operating.',
      highlights: [
        {
          title: 'Graceful degradation',
          description:
            'Continuing core service with reduced functionality during partial failures.',
        },
        {
          title: 'Critical path',
          description:
            'The functionality required for the primary user or business workflow.',
        },
        {
          title: 'Optional dependency',
          description:
            'A dependency whose failure does not need to stop the core service.',
        },
      ],
    },

    {
      title: 'Fail-Safe vs Fail-Fast',
      content:
        'Fail-safe behavior attempts to preserve safety or acceptable operation when a component fails. Fail-fast behavior stops or rejects work quickly rather than continuing with potentially invalid state. The correct choice depends on the business domain.',
      highlights: [
        {
          title: 'Fail-safe',
          description:
            'Failing in a way that preserves a defined safe or acceptable state.',
        },
        {
          title: 'Fail-fast',
          description:
            'Stopping quickly when a required condition is not satisfied.',
        },
        {
          title: 'Business context',
          description:
            'The appropriate failure behavior depends on what is more dangerous: continuing or stopping.',
        },
      ],
    },

    {
      title: 'Timeouts',
      content:
        'Timeouts prevent a service from waiting indefinitely for a dependency. Without timeouts, a slow downstream service can consume threads, connections, memory, and other resources until the application itself becomes unavailable.',
      highlights: [
        {
          title: 'Timeout',
          description:
            'A maximum duration allowed for an operation before it is treated as unsuccessful or incomplete.',
        },
        {
          title: 'Connection timeout',
          description:
            'The maximum time allowed to establish a connection.',
        },
        {
          title: 'Request timeout',
          description:
            'The maximum time allowed for a request to complete.',
        },
      ],
    },

    {
      title: 'Circuit Breaker',
      content:
        'A circuit breaker prevents repeated calls to a failing dependency. After failures cross a threshold, the circuit opens and requests are rejected or handled through a fallback until the dependency appears healthy again.',
      highlights: [
        {
          title: 'Circuit breaker',
          description:
            'A resilience mechanism that temporarily stops calls to an unhealthy dependency.',
        },
        {
          title: 'Open state',
          description:
            'The state where calls to the dependency are blocked or short-circuited.',
        },
        {
          title: 'Half-open state',
          description:
            'A test state where limited requests are allowed to determine whether the dependency has recovered.',
        },
      ],
    },

    {
      title: 'Retries and Availability',
      content:
        'Retries can improve availability for transient failures but can also make an outage worse if every client repeatedly retries an overloaded dependency. Retry limits, exponential backoff, jitter, and circuit breakers should be considered together.',
      highlights: [
        {
          title: 'Transient failure',
          description:
            'A temporary failure that may succeed when attempted again later.',
        },
        {
          title: 'Retry storm',
          description:
            'A large increase in repeated requests that further overloads a failing system.',
        },
        {
          title: 'Backoff',
          description:
            'Increasing the delay between retry attempts.',
        },
      ],
    },

    {
      title: 'Redundancy vs Availability',
      content:
        'Adding redundant components does not automatically create high availability. The architecture must also eliminate shared failure points, configure correct health checks, automate failover, maintain data consistency, and test recovery behavior.',
      highlights: [
        {
          title: 'Redundant component',
          description:
            'An additional component intended to provide service when another component fails.',
        },
        {
          title: 'Shared dependency',
          description:
            'A common dependency that can still cause all redundant components to fail together.',
        },
        {
          title: 'Recovery automation',
          description:
            'Automated mechanisms that detect failures and restore service.',
        },
      ],
    },

    {
      title: 'Availability and Databases',
      content:
        'Database availability can be improved through replication, automated failover, multi-zone deployment, backups, connection management, and carefully designed recovery procedures. The design must also account for data consistency and recovery point requirements.',
      highlights: [
        {
          title: 'Database replica',
          description:
            'A copy of database state used for resilience, read scaling, or failover.',
        },
        {
          title: 'Database failover',
          description:
            'Switching database responsibility to a healthy replica or alternate system.',
        },
        {
          title: 'Recovery point',
          description:
            'The amount of recent data that may need to be restored after a failure.',
        },
      ],
    },

    {
      title: 'Availability and Kubernetes',
      content:
        'Kubernetes can improve application availability through multiple replicas, health probes, service discovery, scheduling, rolling updates, and automatic replacement of failed pods. These mechanisms still depend on correct application configuration and sufficient underlying infrastructure.',
      highlights: [
        {
          title: 'Replica',
          description:
            'Multiple application instances running to provide capacity and failure tolerance.',
        },
        {
          title: 'Readiness probe',
          description:
            'A Kubernetes health mechanism that determines whether a pod should receive traffic.',
        },
        {
          title: 'Self-healing',
          description:
            'Replacing failed or unhealthy workloads according to Kubernetes configuration.',
        },
      ],
    },

    {
      title: 'Availability and Cloud',
      content:
        'Cloud platforms provide primitives for availability such as load balancers, managed databases, auto scaling, multiple availability zones, health checks, monitoring, and disaster recovery services. The application architecture still determines how effectively these capabilities are used.',
      highlights: [
        {
          title: 'Auto scaling',
          description:
            'Automatically adjusting infrastructure capacity based on workload or health signals.',
        },
        {
          title: 'Managed service',
          description:
            'A cloud service where the provider operates part of the underlying infrastructure.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Processes and infrastructure designed to restore service after major failures.',
        },
      ],
    },

    {
      title: 'Availability and Disaster Recovery',
      content:
        'Disaster recovery focuses on restoring service after major failures. High availability aims to keep service running through smaller or expected component failures. They overlap but solve different failure scopes.',
      highlights: [
        {
          title: 'Disaster recovery',
          description:
            'The ability to restore service after a major disruptive event.',
        },
        {
          title: 'High availability',
          description:
            'The ability to continue serving users despite defined component failures.',
        },
        {
          title: 'Recovery strategy',
          description:
            'The planned technical and operational process for restoring service.',
        },
      ],
    },

    {
      title: 'RTO',
      content:
        'Recovery Time Objective defines how quickly a service should be restored after a disruptive failure. Lower RTO targets generally require faster detection, automated recovery, redundancy, or more expensive infrastructure.',
      highlights: [
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: the target maximum time to restore service after a disruption.',
        },
        {
          title: 'Recovery time',
          description:
            'The elapsed time required to restore the required service capability.',
        },
        {
          title: 'Cost trade-off',
          description:
            'Aggressive recovery targets can require additional infrastructure and automation.',
        },
      ],
    },

    {
      title: 'RPO',
      content:
        'Recovery Point Objective defines how much recent data loss a business can tolerate after a failure. A lower RPO generally requires more frequent replication, backups, or durable event capture.',
      highlights: [
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: the target maximum amount of recent data loss that can be tolerated.',
        },
        {
          title: 'Data loss window',
          description:
            'The period of recent changes that might not be recoverable after a failure.',
        },
        {
          title: 'Replication frequency',
          description:
            'How often data changes are copied or persisted to recovery infrastructure.',
        },
      ],
    },

    {
      title: 'SLA',
      content:
        'A Service Level Agreement is a formal commitment concerning service performance or availability. It is typically defined between a provider and customer and may include availability targets, exclusions, measurement rules, and service credits.',
      highlights: [
        {
          title: 'SLA',
          description:
            'A formal service commitment defining agreed service objectives and responsibilities.',
        },
        {
          title: 'Availability target',
          description:
            'The agreed level of service availability.',
        },
        {
          title: 'Measurement',
          description:
            'The defined method used to calculate whether the service met the agreement.',
        },
      ],
    },

    {
      title: 'SLO',
      content:
        'A Service Level Objective is an internal or external target for a service metric such as availability, latency, or error rate. SLOs guide engineering decisions and help teams balance reliability against development velocity.',
      highlights: [
        {
          title: 'SLO',
          description:
            'A defined target for a service reliability or performance metric.',
        },
        {
          title: 'Reliability target',
          description:
            'The desired operational level the team aims to maintain.',
        },
        {
          title: 'Service behavior',
          description:
            'The measurable user-facing behavior represented by the objective.',
        },
      ],
    },

    {
      title: 'SLI',
      content:
        'A Service Level Indicator is the measured value used to evaluate service behavior. For availability, an SLI might measure successful requests divided by total eligible requests.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measured indicator representing actual service behavior.',
        },
        {
          title: 'Successful requests',
          description:
            'Requests meeting the defined success criteria.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion of requests that fail according to the defined measurement.',
        },
      ],
    },

    {
      title: 'Error Budget',
      content:
        'An error budget represents the amount of unreliability permitted by an SLO. If the service has consumed too much of its error budget, teams may slow risky releases and prioritize reliability work.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The amount of failure or unavailability permitted by an SLO over a defined period.',
        },
        {
          title: 'Reliability balance',
          description:
            'Balancing product delivery speed against service reliability.',
        },
        {
          title: 'Release decision',
          description:
            'Using reliability performance to inform whether risky changes should proceed.',
        },
      ],
    },

    {
      title: 'Availability Monitoring',
      content:
        'Availability monitoring should measure real user-facing behavior rather than only infrastructure health. Useful signals include successful request rate, error rate, latency, dependency failures, health-check results, and regional availability.',
      highlights: [
        {
          title: 'Synthetic monitoring',
          description:
            'Automated requests that simulate user workflows to detect availability problems.',
        },
        {
          title: 'Real-user monitoring',
          description:
            'Observing actual user interactions and outcomes.',
        },
        {
          title: 'Dependency monitoring',
          description:
            'Tracking whether downstream services are affecting application availability.',
        },
      ],
    },

    {
      title: 'Availability Incident Response',
      content:
        'When availability drops, incident response should prioritize restoring service, communicating impact, identifying the failure domain, and preventing recurrence. During an active incident, restoration is usually more important than immediately finding the perfect root cause.',
      highlights: [
        {
          title: 'Incident response',
          description:
            'The coordinated process of detecting, managing, and recovering from service disruption.',
        },
        {
          title: 'Mitigation',
          description:
            'An immediate action that reduces customer impact or restores service.',
        },
        {
          title: 'Root cause',
          description:
            'The underlying condition responsible for the incident.',
        },
      ],
    },

    {
      title: 'Availability in AI Systems',
      content:
        'AI systems introduce dependencies such as model providers, vector databases, embedding services, speech services, and external APIs. High availability requires identifying critical dependencies and providing appropriate fallback, timeout, retry, and degradation strategies.',
      highlights: [
        {
          title: 'Model provider dependency',
          description:
            'An external or internal AI service required to produce model output.',
        },
        {
          title: 'Fallback model',
          description:
            'An alternate model or provider used when the preferred model is unavailable.',
        },
        {
          title: 'Graceful degradation',
          description:
            'Continuing core functionality with reduced AI capability during dependency failure.',
        },
      ],
    },

    {
      title: 'AI Voice Platform Example',
      content:
        'An AI voice platform should not depend on one provider for every part of the call path. If an external speech, model, or telephony provider fails, the platform can use provider failover, timeouts, circuit breakers, and controlled degradation where the business workflow allows it.',
      highlights: [
        {
          title: 'Provider failover',
          description:
            'Switching from a failed external provider to a healthy alternative.',
        },
        {
          title: 'Call continuity',
          description:
            'Maintaining the active customer interaction despite a dependency failure where technically possible.',
        },
        {
          title: 'Critical path',
          description:
            'The minimum set of services required to keep the active call functioning.',
        },
      ],
    },

    {
      title: 'Availability Architecture Example',
      content:
        'A typical highly available web platform can use multiple application instances behind a load balancer, deploy across multiple availability zones, use a replicated database, maintain backups, monitor health, and automate recovery. The exact design depends on the required SLO, RTO, RPO, traffic pattern, and budget.',
      highlights: [
        {
          title: 'Multiple instances',
          description:
            'Provides redundancy at the application layer.',
        },
        {
          title: 'Multi-zone deployment',
          description:
            'Reduces exposure to a single infrastructure-zone failure.',
        },
        {
          title: 'Automated recovery',
          description:
            'Reduces the time required to restore service after component failure.',
        },
      ],
    },

    {
      title: 'Availability Trade-offs',
      content:
        'Higher availability usually requires redundancy, automation, monitoring, testing, and additional infrastructure. It also increases operational complexity. The goal is not “maximum availability at any cost,” but an availability level appropriate for business value and risk.',
      highlights: [
        {
          title: 'Infrastructure cost',
          description:
            'Additional redundant capacity increases spending.',
        },
        {
          title: 'Operational complexity',
          description:
            'More failure paths and components require more engineering and testing.',
        },
        {
          title: 'Business value',
          description:
            'Availability targets should reflect the financial and customer impact of downtime.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is availability? How do you calculate it? What is high availability? What is a single point of failure? Active-active vs active-passive? How would you design a highly available service? What are SLI, SLO, and SLA? What are RTO and RPO? How do retries and circuit breakers affect availability? How would you make an AI system highly available?',
      highlights: [
        {
          title: 'High availability',
          description:
            'Explain redundancy, health checks, failover, and removal of single points of failure.',
        },
        {
          title: 'SLA/SLO/SLI',
          description:
            'Explain the difference between commitment, target, and measurement.',
        },
        {
          title: 'RTO/RPO',
          description:
            'Explain recovery-time and recovery-point requirements.',
        },
        {
          title: 'AI resilience',
          description:
            'Explain provider failover, fallback, timeouts, and graceful degradation.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would start by defining the availability target and the business impact of downtime. Then I would identify single points of failure and introduce redundancy at the appropriate layers. I would deploy critical components across failure domains, use health checks and automated failover, and define clear SLOs, RTO, and RPO. I would also test failure scenarios instead of assuming the architecture is resilient. For external AI dependencies, I would evaluate provider failover and graceful degradation based on the critical user journey.”',
      highlights: [
        {
          title: 'Business-first',
          description:
            'Define the required reliability level before selecting infrastructure.',
        },
        {
          title: 'Failure domains',
          description:
            'Design redundancy across independent failure boundaries.',
        },
        {
          title: 'Test recovery',
          description:
            'Validate failover and recovery through controlled failure testing.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating uptime and availability as exactly the same concept, adding replicas without removing shared dependencies, ignoring database availability, setting unrealistic five-nines targets without business justification, confusing SLA with SLO, and assuming retries always improve availability.',
      highlights: [
        {
          title: 'Replica without resilience',
          description:
            'Adding instances while leaving a shared load balancer, database, network, or provider as a single failure point.',
        },
        {
          title: 'Unrealistic target',
          description:
            'Choosing an aggressive availability target without considering cost and business value.',
        },
        {
          title: 'Retry abuse',
          description:
            'Using unlimited or immediate retries that can worsen an outage.',
        },
        {
          title: 'No failure testing',
          description:
            'Assuming failover will work without validating it under realistic failure conditions.',
        },
      ],
    },

    {
      title: 'Availability for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, availability is a business and delivery decision. The leader should translate customer expectations into measurable SLOs, align teams around failure ownership, prioritize reliability work, evaluate vendor dependencies, and ensure recovery procedures are tested rather than existing only in documentation.',
      highlights: [
        {
          title: 'Reliability roadmap',
          description:
            'Prioritizing engineering work that reduces meaningful customer-facing failure risk.',
        },
        {
          title: 'Vendor risk',
          description:
            'Understanding how external providers can affect service availability.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly defining which teams own availability, incidents, dependencies, and recovery.',
        },
        {
          title: 'Executive communication',
          description:
            'Communicating availability risk using business impact, SLO performance, and recovery expectations.',
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
    'fault-tolerance',
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
  ],
}

export default availabilityKnowledge
