import type { KnowledgeDefinition } from './knowledge'

export const disasterRecoveryKnowledge: KnowledgeDefinition = {
  technologyId: 'disaster-recovery',
  slug: 'disaster-recovery',
  title: 'Disaster Recovery',
  summary:
    'Disaster Recovery is the planned capability to restore critical systems, data, and business operations after a major failure, outage, cyber event, infrastructure loss, or regional disaster.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Disaster Recovery?',
      content:
        'Disaster Recovery, commonly called DR, is the set of strategies, processes, architectures, and procedures used to restore systems and business operations after a major disruptive event. DR focuses on preparing for failure before it happens and ensuring that critical services can recover within acceptable business requirements.',
      highlights: [
        {
          title: 'Disaster Recovery',
          description:
            'The planned capability to restore technology and operations after a major disruption.',
        },
        {
          title: 'Disaster',
          description:
            'A disruptive event whose impact exceeds normal operational recovery procedures.',
        },
        {
          title: 'Recovery',
          description:
            'Returning critical systems and operations to an acceptable state.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a school where all student records are stored in one office. If that office catches fire, the school needs another copy of the records and a plan for continuing operations. A backup is the copied record. Disaster Recovery is the complete plan for restoring the school’s ability to operate using those records and alternate facilities.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A copy of important data.',
        },
        {
          title: 'Recovery plan',
          description:
            'Instructions for restoring systems and operations.',
        },
        {
          title: 'Alternate environment',
          description:
            'A secondary location or infrastructure that can support recovery.',
        },
      ],
    },

    {
      title: 'Why Disaster Recovery Matters',
      content:
        'Production systems depend on infrastructure, networks, databases, cloud providers, applications, people, and operational processes. A major failure can affect revenue, customers, compliance, reputation, and business continuity. DR reduces the time and uncertainty involved in recovering from such events.',
      highlights: [
        {
          title: 'Business continuity',
          description:
            'The ability of the organization to continue critical operations during disruption.',
        },
        {
          title: 'Resilience',
          description:
            'The ability to withstand disruption and recover from failure.',
        },
        {
          title: 'Risk reduction',
          description:
            'Reducing the potential business impact of major failures.',
        },
      ],
    },

    {
      title: 'Disaster vs Incident',
      content:
        'An incident can be a production problem that normal operational processes can handle. A disaster is generally a larger disruption requiring significant recovery capabilities, alternate infrastructure, major data restoration, or business continuity measures. The exact threshold should be defined by the organization.',
      highlights: [
        {
          title: 'Incident',
          description:
            'A production problem handled through normal incident-response capabilities.',
        },
        {
          title: 'Disaster',
          description:
            'A major disruption requiring exceptional recovery measures.',
        },
        {
          title: 'Escalation',
          description:
            'Moving from normal incident response to disaster-recovery procedures when impact requires it.',
        },
      ],
    },

    {
      title: 'Disaster Recovery vs High Availability',
      content:
        'High Availability aims to keep a service running despite component failures. Disaster Recovery focuses on restoring service after a major disruptive event. High Availability reduces downtime during common failures, while DR prepares for larger failures that may overwhelm the primary environment.',
      highlights: [
        {
          title: 'High Availability',
          description:
            'Designed to keep services operating despite failures.',
        },
        {
          title: 'Disaster Recovery',
          description:
            'Designed to restore services after major disruption.',
        },
        {
          title: 'Complementary',
          description:
            'Mature systems use both HA and DR because they address different failure scenarios.',
        },
      ],
    },

    {
      title: 'Disaster Recovery vs Backup',
      content:
        'A backup is a copy of data. Disaster Recovery is broader and includes infrastructure, application deployment, configuration, networking, access, people, procedures, testing, and communication. Having backups does not automatically mean an organization has effective DR.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A stored copy of data or system state.',
        },
        {
          title: 'Recovery',
          description:
            'The process of restoring systems and operations.',
        },
        {
          title: 'DR capability',
          description:
            'The complete combination of technology, processes, people, and procedures needed for recovery.',
        },
      ],
    },

    {
      title: 'RTO',
      content:
        'Recovery Time Objective, or RTO, defines the maximum acceptable amount of time required to restore a service after a disruptive event. It is a business requirement that influences architecture, infrastructure, automation, staffing, and recovery strategy.',
      highlights: [
        {
          title: 'RTO',
          description:
            'The target maximum recovery time after a disruption.',
        },
        {
          title: 'Recovery deadline',
          description:
            'The business-driven time within which service should be restored.',
        },
        {
          title: 'Architecture impact',
          description:
            'Stricter RTO requirements usually require more automation and stronger recovery infrastructure.',
        },
      ],
    },

    {
      title: 'RPO',
      content:
        'Recovery Point Objective, or RPO, defines how much data loss measured in time is acceptable after a disruptive event. An RPO of 15 minutes means the organization should design recovery capabilities so that losing more than approximately 15 minutes of data is outside the accepted target.',
      highlights: [
        {
          title: 'RPO',
          description:
            'The maximum acceptable amount of data loss measured as time.',
        },
        {
          title: 'Data loss tolerance',
          description:
            'How much recent data the business can afford to lose.',
        },
        {
          title: 'Replication impact',
          description:
            'Stricter RPO requirements generally require more frequent replication or synchronization.',
        },
      ],
    },

    {
      title: 'RTO vs RPO',
      content:
        'RTO answers “How quickly must we recover?” RPO answers “How much recent data can we afford to lose?” They are related but measure different business requirements.',
      highlights: [
        {
          title: 'RTO',
          description:
            'Recovery time requirement.',
        },
        {
          title: 'RPO',
          description:
            'Data-loss tolerance requirement.',
        },
        {
          title: 'Business requirement',
          description:
            'Both should be derived from the business importance of the system.',
        },
      ],
    },

    {
      title: 'Example of RTO and RPO',
      content:
        'Consider a payment platform with an RTO of 30 minutes and an RPO of 5 minutes. The organization expects the service to be restored within 30 minutes and wants to limit recoverable data loss to roughly five minutes. Meeting these requirements may require automated infrastructure recovery and frequent data replication.',
      highlights: [
        {
          title: '30-minute RTO',
          description:
            'Service recovery should occur within the defined 30-minute target.',
        },
        {
          title: '5-minute RPO',
          description:
            'Data recovery should limit loss to approximately five minutes.',
        },
        {
          title: 'Architecture',
          description:
            'Recovery requirements influence replication, automation, and infrastructure design.',
        },
      ],
    },

    {
      title: 'Business Impact Analysis',
      content:
        'Business Impact Analysis, or BIA, identifies which business processes are critical, what happens if they stop, how quickly they must recover, and what resources they require. BIA provides the business context needed to define DR priorities.',
      highlights: [
        {
          title: 'BIA',
          description:
            'Business Impact Analysis used to understand the consequences of disruption.',
        },
        {
          title: 'Critical process',
          description:
            'A business activity whose disruption creates significant impact.',
        },
        {
          title: 'Recovery priority',
          description:
            'The order in which systems and processes should be restored.',
        },
      ],
    },

    {
      title: 'Risk Assessment',
      content:
        'Risk assessment identifies possible disaster scenarios, their likelihood, their potential impact, and existing controls. DR planning should be based on realistic risks rather than assuming every possible failure needs the same level of protection.',
      highlights: [
        {
          title: 'Risk',
          description:
            'The possibility of an event causing harmful impact.',
        },
        {
          title: 'Threat',
          description:
            'A potential source of disruption.',
        },
        {
          title: 'Control',
          description:
            'A mechanism that reduces the likelihood or impact of a risk.',
        },
      ],
    },

    {
      title: 'Disaster Scenarios',
      content:
        'Common disaster scenarios include regional cloud outages, major database corruption, ransomware, accidental deletion, network failures, data-center loss, identity-provider failure, DNS failure, critical dependency outages, and large-scale configuration mistakes.',
      highlights: [
        {
          title: 'Regional outage',
          description:
            'A cloud or infrastructure failure affecting a geographic region.',
        },
        {
          title: 'Data corruption',
          description:
            'Stored data becomes incorrect, damaged, or unusable.',
        },
        {
          title: 'Cyber incident',
          description:
            'A security event that disrupts systems or compromises data.',
        },
      ],
    },

    {
      title: 'Backup Strategy',
      content:
        'A strong backup strategy considers what data must be backed up, how often backups occur, where copies are stored, how long they are retained, how they are protected, and how restoration is verified. Backups are useful only if they can actually be restored.',
      highlights: [
        {
          title: 'Backup frequency',
          description:
            'How often data is copied or protected.',
        },
        {
          title: 'Retention',
          description:
            'How long backup versions are kept.',
        },
        {
          title: 'Restore validation',
          description:
            'Testing that backups can actually be used for recovery.',
        },
      ],
    },

    {
      title: '3-2-1 Backup Principle',
      content:
        'The 3-2-1 backup principle is a commonly used resilience guideline: maintain multiple copies of data, use different storage media or failure domains, and keep at least one copy separated from the primary environment. Exact implementation should reflect the organization’s risk profile.',
      highlights: [
        {
          title: 'Multiple copies',
          description:
            'Maintain more than one recoverable copy of important data.',
        },
        {
          title: 'Different failure domains',
          description:
            'Avoid placing every copy where the same failure can destroy them all.',
        },
        {
          title: 'Offsite or isolated copy',
          description:
            'Maintain a copy protected from primary-environment failures.',
        },
      ],
    },

    {
      title: 'Full Backup',
      content:
        'A full backup captures the complete selected dataset at a point in time. Full backups can simplify restoration but may require more storage and time compared with incremental approaches.',
      highlights: [
        {
          title: 'Full backup',
          description:
            'A complete copy of the selected data set.',
        },
        {
          title: 'Restore simplicity',
          description:
            'Restoration can be straightforward because the full dataset exists in one backup set.',
        },
        {
          title: 'Storage cost',
          description:
            'Full backups generally require more storage than incremental-only approaches.',
        },
      ],
    },

    {
      title: 'Incremental Backup',
      content:
        'An incremental backup captures changes since a previous backup according to the selected backup scheme. Incremental strategies can reduce storage and backup time but may make restoration more dependent on multiple backup sets.',
      highlights: [
        {
          title: 'Incremental',
          description:
            'Stores changes since a previous backup point.',
        },
        {
          title: 'Storage efficiency',
          description:
            'Usually requires less storage than repeatedly creating complete backups.',
        },
        {
          title: 'Restore chain',
          description:
            'Restoration may require multiple related backup sets.',
        },
      ],
    },

    {
      title: 'Replication',
      content:
        'Replication maintains copies of data or systems in another location or environment. Replication can reduce recovery time and data loss, but synchronous and asynchronous approaches have different performance, consistency, and failure characteristics.',
      highlights: [
        {
          title: 'Replication',
          description:
            'Maintaining another copy of data or system state.',
        },
        {
          title: 'Synchronous replication',
          description:
            'Writes are coordinated across replicas before the operation is considered complete according to the system’s protocol.',
        },
        {
          title: 'Asynchronous replication',
          description:
            'Changes are copied after the primary operation, creating potential replication lag.',
        },
      ],
    },

    {
      title: 'Hot, Warm, and Cold Recovery Sites',
      content:
        'Recovery environments can differ in readiness. A hot site is highly prepared and can take traffic quickly. A warm site has significant infrastructure but requires additional setup. A cold site provides basic capacity and requires more extensive restoration work.',
      highlights: [
        {
          title: 'Hot site',
          description:
            'A highly prepared recovery environment designed for rapid activation.',
        },
        {
          title: 'Warm site',
          description:
            'A partially prepared environment requiring additional activation or configuration.',
        },
        {
          title: 'Cold site',
          description:
            'A minimally prepared environment requiring substantial restoration work.',
        },
      ],
    },

    {
      title: 'Multi-AZ Recovery',
      content:
        'Using multiple availability zones can protect against failures affecting a single zone. This is primarily a high-availability strategy but can also form part of a broader DR architecture when the disaster scope does not exceed the protected region or failure domain.',
      highlights: [
        {
          title: 'Availability Zone',
          description:
            'An isolated infrastructure location within a cloud region.',
        },
        {
          title: 'Zone failure',
          description:
            'A disruption affecting infrastructure in one availability zone.',
        },
        {
          title: 'Redundancy',
          description:
            'Maintaining service capacity across multiple failure domains.',
        },
      ],
    },

    {
      title: 'Multi-Region Recovery',
      content:
        'Multi-region architectures maintain infrastructure and potentially data across geographically separated regions. They can protect against regional failures but introduce additional complexity involving replication, consistency, networking, DNS, cost, security, and operational coordination.',
      highlights: [
        {
          title: 'Multi-region',
          description:
            'Operating or maintaining recovery capability across multiple geographic cloud regions.',
        },
        {
          title: 'Regional failover',
          description:
            'Moving service operation to another region after a regional disruption.',
        },
        {
          title: 'Replication lag',
          description:
            'The difference between the latest primary data and the replicated copy.',
        },
      ],
    },

    {
      title: 'Active-Active DR',
      content:
        'In an active-active architecture, multiple environments can serve production traffic simultaneously. This can provide rapid failover and efficient resource usage but increases complexity in data consistency, traffic management, deployment, and operational coordination.',
      highlights: [
        {
          title: 'Active-active',
          description:
            'Multiple production-capable environments serve traffic simultaneously.',
        },
        {
          title: 'Traffic routing',
          description:
            'Directing requests across active environments.',
        },
        {
          title: 'Consistency challenge',
          description:
            'Maintaining correct shared state across simultaneously active environments.',
        },
      ],
    },

    {
      title: 'Active-Passive DR',
      content:
        'In active-passive architectures, the primary environment handles normal traffic while a secondary environment is maintained for recovery. The secondary environment is activated when the primary environment becomes unavailable.',
      highlights: [
        {
          title: 'Active',
          description:
            'The environment serving normal production traffic.',
        },
        {
          title: 'Passive',
          description:
            'The recovery environment waiting to be activated.',
        },
        {
          title: 'Failover',
          description:
            'Switching production operation from the primary to the recovery environment.',
        },
      ],
    },

    {
      title: 'Pilot Light',
      content:
        'A pilot-light strategy keeps a minimal core of critical infrastructure running while additional resources are created or scaled during recovery. It can reduce cost compared with fully active recovery while still enabling faster recovery than a completely cold environment.',
      highlights: [
        {
          title: 'Pilot light',
          description:
            'A minimal continuously available recovery foundation.',
        },
        {
          title: 'Scale-up',
          description:
            'Adding required resources during disaster recovery activation.',
        },
        {
          title: 'Cost optimization',
          description:
            'Reducing the cost of maintaining a fully active duplicate environment.',
        },
      ],
    },

    {
      title: 'Backup and Restore Strategy',
      content:
        'Backup-and-restore recovery relies on stored backups and rebuilding infrastructure when disaster occurs. It can be economical but usually has a longer RTO than pre-provisioned recovery architectures.',
      highlights: [
        {
          title: 'Restore',
          description:
            'Recovering data and systems from stored backup material.',
        },
        {
          title: 'Rebuild',
          description:
            'Recreating infrastructure and application environments.',
        },
        {
          title: 'Longer RTO',
          description:
            'Recovery may take longer because infrastructure must be restored before service resumes.',
        },
      ],
    },

    {
      title: 'Infrastructure as Code for DR',
      content:
        'Infrastructure as Code tools such as Terraform can make disaster recovery more repeatable by defining infrastructure declaratively. Instead of manually rebuilding systems, teams can recreate environments from version-controlled definitions.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Defining infrastructure using version-controlled configuration.',
        },
        {
          title: 'Reproducibility',
          description:
            'Creating consistent environments from the same definitions.',
        },
        {
          title: 'Recovery automation',
          description:
            'Reducing manual work during disaster recovery.',
        },
      ],
    },

    {
      title: 'Containerized DR',
      content:
        'Containers can simplify recovery by packaging application dependencies into repeatable units. Container orchestration platforms can recreate workloads in another environment, but persistent data, networking, secrets, and external dependencies still require explicit DR planning.',
      highlights: [
        {
          title: 'Container',
          description:
            'A packaged application runtime environment.',
        },
        {
          title: 'Orchestration',
          description:
            'Automated management and scheduling of container workloads.',
        },
        {
          title: 'Persistent state',
          description:
            'Data that must survive container or infrastructure replacement.',
        },
      ],
    },

    {
      title: 'Kubernetes Disaster Recovery',
      content:
        'Kubernetes DR requires consideration of cluster configuration, workloads, persistent volumes, secrets, networking, container images, ingress, DNS, external dependencies, and application data. Recreating a cluster is not enough if the application state cannot be recovered.',
      highlights: [
        {
          title: 'Cluster recovery',
          description:
            'Restoring Kubernetes control-plane and workload capabilities.',
        },
        {
          title: 'Persistent volumes',
          description:
            'Storage containing application state that must be recovered appropriately.',
        },
        {
          title: 'Application recovery',
          description:
            'Restoring the complete application workflow, not only Kubernetes resources.',
        },
      ],
    },

    {
      title: 'Cloud Disaster Recovery',
      content:
        'Cloud platforms provide many DR building blocks including multi-zone deployments, multi-region infrastructure, managed backups, object storage, database replication, DNS routing, infrastructure automation, and identity controls. Cloud DR still requires architecture and testing because cloud services do not automatically create a complete recovery plan.',
      highlights: [
        {
          title: 'Cloud region',
          description:
            'A geographic deployment area containing multiple cloud infrastructure zones.',
        },
        {
          title: 'Managed backup',
          description:
            'Cloud-provider capabilities for creating and retaining recoverable copies.',
        },
        {
          title: 'DNS failover',
          description:
            'Redirecting traffic to an alternate endpoint during failure.',
        },
      ],
    },

    {
      title: 'AWS Disaster Recovery',
      content:
        'AWS DR architectures can combine services such as S3 for durable object storage, EC2 for compute recovery, RDS backups and replication for databases, Route 53 for traffic routing, and infrastructure automation for repeatable recovery. The appropriate design depends on RTO, RPO, workload characteristics, and budget.',
      highlights: [
        {
          title: 'S3',
          description:
            'Durable object storage that can be part of backup and recovery architectures.',
        },
        {
          title: 'EC2',
          description:
            'Compute capacity that can be recreated or activated during recovery.',
        },
        {
          title: 'Route 53',
          description:
            'DNS and routing capabilities that can support traffic failover.',
        },
      ],
    },

    {
      title: 'Azure Disaster Recovery',
      content:
        'Azure provides DR capabilities through services and architectures for virtual machines, databases, storage, networking, backups, and regional recovery. The architecture should be designed around business requirements rather than simply enabling individual recovery features.',
      highlights: [
        {
          title: 'Azure region',
          description:
            'A geographic cloud deployment location.',
        },
        {
          title: 'Replication',
          description:
            'Maintaining recoverable copies across appropriate failure domains.',
        },
        {
          title: 'Recovery orchestration',
          description:
            'Coordinating infrastructure and application recovery steps.',
        },
      ],
    },

    {
      title: 'GCP Disaster Recovery',
      content:
        'Google Cloud DR architectures can use regional redundancy, backups, replication, object storage, managed databases, load balancing, DNS, and infrastructure automation. As with other clouds, the design should be based on business-defined RTO and RPO requirements.',
      highlights: [
        {
          title: 'Regional redundancy',
          description:
            'Maintaining recovery capability across geographic failure domains.',
        },
        {
          title: 'Backup',
          description:
            'Recoverable copies of important data and configurations.',
        },
        {
          title: 'Automation',
          description:
            'Repeatable recovery procedures implemented through infrastructure and operational tooling.',
        },
      ],
    },

    {
      title: 'DNS and Disaster Recovery',
      content:
        'DNS can be used to redirect users toward healthy recovery environments. DNS-based failover must account for caching, TTLs, health checks, routing behavior, and the possibility that DNS itself may be part of the failure scenario.',
      highlights: [
        {
          title: 'DNS failover',
          description:
            'Redirecting traffic to an alternate destination.',
        },
        {
          title: 'TTL',
          description:
            'The period during which DNS information may be cached.',
        },
        {
          title: 'Health check',
          description:
            'A mechanism used to determine whether an endpoint should receive traffic.',
        },
      ],
    },

    {
      title: 'Database Disaster Recovery',
      content:
        'Database DR requires careful planning because data is often the hardest part of recovery. Strategies can include backups, point-in-time recovery, replication, snapshots, logical exports, cross-region copies, and tested restore procedures.',
      highlights: [
        {
          title: 'Point-in-time recovery',
          description:
            'Restoring a database to a selected recoverable point in time.',
        },
        {
          title: 'Database replication',
          description:
            'Maintaining a recoverable copy of database state.',
        },
        {
          title: 'Restore testing',
          description:
            'Regularly proving that database backups can actually be restored.',
        },
      ],
    },

    {
      title: 'Application Disaster Recovery',
      content:
        'Application recovery includes more than starting servers. Teams must recover configuration, secrets, databases, queues, storage, networking, external integrations, certificates, scheduled jobs, and dependent services in the correct order.',
      highlights: [
        {
          title: 'Dependency recovery',
          description:
            'Restoring required services and integrations.',
        },
        {
          title: 'Configuration recovery',
          description:
            'Restoring required runtime and infrastructure configuration.',
        },
        {
          title: 'Order of operations',
          description:
            'Recovering components in a sequence that allows the complete application to function.',
        },
      ],
    },

    {
      title: 'Recovery Runbooks',
      content:
        'A DR runbook documents the exact steps responders should follow during recovery. It should include prerequisites, owners, commands or automation, validation steps, communication requirements, escalation paths, and rollback procedures.',
      highlights: [
        {
          title: 'Runbook',
          description:
            'Documented instructions for performing recovery operations.',
        },
        {
          title: 'Validation',
          description:
            'Checks confirming that the recovered system is functioning correctly.',
        },
        {
          title: 'Escalation',
          description:
            'Defined paths for obtaining additional technical or leadership support.',
        },
      ],
    },

    {
      title: 'DR Testing',
      content:
        'A disaster-recovery plan that has never been tested is an assumption rather than a proven capability. Testing can include tabletop exercises, backup restoration tests, controlled failovers, regional simulations, and full recovery exercises.',
      highlights: [
        {
          title: 'Tabletop exercise',
          description:
            'A scenario-based discussion where participants walk through the recovery process.',
        },
        {
          title: 'Failover test',
          description:
            'A controlled test of switching service to a recovery environment.',
        },
        {
          title: 'Restore test',
          description:
            'A test proving that stored backups can actually restore usable data.',
        },
      ],
    },

    {
      title: 'DR Game Days',
      content:
        'A DR game day is a controlled exercise in which teams simulate or trigger a failure scenario to validate recovery capabilities. Game days help identify undocumented dependencies, operational gaps, and unrealistic assumptions.',
      highlights: [
        {
          title: 'Game day',
          description:
            'A planned resilience exercise simulating a significant failure.',
        },
        {
          title: 'Failure scenario',
          description:
            'The disruption being intentionally tested.',
        },
        {
          title: 'Learning',
          description:
            'Discoveries from the exercise that improve recovery capability.',
        },
      ],
    },

    {
      title: 'DR Monitoring',
      content:
        'Recovery systems require monitoring too. Teams should monitor replication lag, backup success, backup age, storage capacity, recovery environment health, synchronization status, and critical dependencies.',
      highlights: [
        {
          title: 'Replication lag',
          description:
            'The delay between primary state and replicated state.',
        },
        {
          title: 'Backup health',
          description:
            'Whether required backups are completing successfully and remain recoverable.',
        },
        {
          title: 'Recovery environment',
          description:
            'The health and readiness of infrastructure intended for disaster recovery.',
        },
      ],
    },

    {
      title: 'DR Security',
      content:
        'Backups and recovery environments must be protected against unauthorized access, accidental deletion, ransomware, credential compromise, and malicious modification. Recovery systems should not become an easy path for attackers.',
      highlights: [
        {
          title: 'Backup security',
          description:
            'Protecting stored recovery data against unauthorized access or destruction.',
        },
        {
          title: 'Immutable backup',
          description:
            'A backup designed to resist modification or deletion during its protected retention period.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the access required to perform recovery tasks.',
        },
      ],
    },

    {
      title: 'Ransomware Recovery',
      content:
        'Ransomware can compromise both primary systems and accessible backups. Effective recovery therefore requires isolated or immutable recovery copies, tested restoration procedures, identity protection, incident-response coordination, and careful validation before returning systems to production.',
      highlights: [
        {
          title: 'Ransomware',
          description:
            'Malicious software or activity that can encrypt, destroy, or otherwise disrupt access to data and systems.',
        },
        {
          title: 'Immutable recovery copy',
          description:
            'A protected copy designed to resist malicious modification.',
        },
        {
          title: 'Clean recovery',
          description:
            'Restoring systems from trusted data and infrastructure after validating that the recovery environment is safe.',
        },
      ],
    },

    {
      title: 'DR and Observability',
      content:
        'Observability is essential during recovery because responders need to know whether systems are healthy, whether replication is current, whether traffic is reaching the correct environment, and whether customer workflows have actually recovered.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Measure recovery health and system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Provide detailed evidence during recovery operations.',
        },
        {
          title: 'Tracing',
          description:
            'Help validate end-to-end request behavior after recovery.',
        },
      ],
    },

    {
      title: 'DR and Incident Management',
      content:
        'Incident Management coordinates the immediate response, while Disaster Recovery provides the planned capabilities used when the disruption requires restoration or failover. During a major event, both disciplines operate together.',
      highlights: [
        {
          title: 'Incident response',
          description:
            'Coordinates people, communication, mitigation, and operational decisions.',
        },
        {
          title: 'DR activation',
          description:
            'Invokes the recovery strategy when primary service cannot be restored through normal mitigation.',
        },
        {
          title: 'Recovery validation',
          description:
            'Confirms that the recovered environment actually meets required service behavior.',
        },
      ],
    },

    {
      title: 'DR and SLOs',
      content:
        'SLOs define expected reliability while RTO and RPO define important recovery requirements. Together they provide a more complete reliability framework: the SLO describes ongoing service expectations, while RTO and RPO describe recovery expectations after major disruption.',
      highlights: [
        {
          title: 'SLO',
          description:
            'Defines expected service reliability or performance.',
        },
        {
          title: 'RTO',
          description:
            'Defines the maximum acceptable recovery time.',
        },
        {
          title: 'RPO',
          description:
            'Defines the maximum acceptable data-loss interval.',
        },
      ],
    },

    {
      title: 'DR and Cost',
      content:
        'Stronger DR capabilities usually cost more because they require additional infrastructure, replication, storage, networking, automation, testing, and operational effort. The right design balances business criticality with recovery requirements and cost.',
      highlights: [
        {
          title: 'Recovery cost',
          description:
            'The cost of maintaining and operating recovery capabilities.',
        },
        {
          title: 'Criticality',
          description:
            'The business importance of the system being protected.',
        },
        {
          title: 'Risk-based design',
          description:
            'Selecting recovery capabilities according to business impact and realistic failure scenarios.',
        },
      ],
    },

    {
      title: 'DR for AI Systems',
      content:
        'AI systems can depend on model providers, vector databases, object storage, embedding services, data pipelines, APIs, GPUs, and external tools. DR must therefore consider both infrastructure recovery and preservation of AI-specific assets such as prompts, model configurations, embeddings, indexes, evaluation datasets, and knowledge sources.',
      highlights: [
        {
          title: 'Model dependency',
          description:
            'An external or internal model required by the AI system.',
        },
        {
          title: 'AI assets',
          description:
            'Prompts, configurations, embeddings, indexes, datasets, and other AI-specific resources.',
        },
        {
          title: 'Provider fallback',
          description:
            'An alternate AI provider or model used when the primary provider is unavailable.',
        },
      ],
    },

    {
      title: 'DR for RAG Systems',
      content:
        'RAG disaster recovery should protect source documents, ingestion pipelines, embedding configurations, vector indexes, metadata, permissions, model configurations, and application infrastructure. Recovery should verify that the restored knowledge is both available and sufficiently current.',
      highlights: [
        {
          title: 'Source documents',
          description:
            'The authoritative information used to build the knowledge base.',
        },
        {
          title: 'Vector index',
          description:
            'The searchable representation used for retrieval.',
        },
        {
          title: 'Re-indexing',
          description:
            'Rebuilding retrieval structures from trusted source data when necessary.',
        },
      ],
    },

    {
      title: 'DR for AI Voice Platforms',
      content:
        'An AI voice platform should consider telephony numbers and routing, agent configurations, prompts, call history, customer data, speech providers, model providers, text-to-speech providers, and fallback routing. Recovery should preserve the ability to receive and process calls within the required business timeframe.',
      highlights: [
        {
          title: 'Telephony recovery',
          description:
            'Restoring call routing and phone connectivity.',
        },
        {
          title: 'Agent configuration',
          description:
            'Recovering prompts, workflows, tools, and AI-agent settings.',
        },
        {
          title: 'Provider fallback',
          description:
            'Switching to alternate providers when a critical AI or voice dependency fails.',
        },
      ],
    },

    {
      title: 'DR and Business Continuity',
      content:
        'Disaster Recovery is primarily concerned with restoring technology and systems, while Business Continuity is broader and includes people, processes, facilities, suppliers, communication, and business operations. DR is one important component of the broader continuity strategy.',
      highlights: [
        {
          title: 'Business Continuity',
          description:
            'The broader capability to maintain critical business operations during disruption.',
        },
        {
          title: 'Technology recovery',
          description:
            'Restoring technology capabilities required by the business.',
        },
        {
          title: 'Operational continuity',
          description:
            'Keeping essential business processes functioning during disruption.',
        },
      ],
    },

    {
      title: 'DR Governance',
      content:
        'A mature DR program has clearly defined ownership, critical-system classifications, RTO and RPO requirements, recovery procedures, testing schedules, dependency maps, communication plans, and executive visibility.',
      highlights: [
        {
          title: 'Ownership',
          description:
            'Clearly defined accountability for recovery capabilities.',
        },
        {
          title: 'Recovery tier',
          description:
            'A classification indicating how urgently a system must be recovered.',
        },
        {
          title: 'Governance',
          description:
            'The policies and processes used to manage recovery readiness.',
        },
      ],
    },

    {
      title: 'Common DR Mistakes',
      content:
        'Common mistakes include assuming backups equal DR, never testing restores, ignoring RTO and RPO, relying on undocumented manual steps, failing to protect backups, forgetting dependencies, ignoring DNS and identity systems, and designing an expensive recovery architecture without validating the actual business requirement.',
      highlights: [
        {
          title: 'Untested backups',
          description:
            'Backups exist but restoration has never been proven.',
        },
        {
          title: 'Missing dependencies',
          description:
            'Recovery restores the application but not required supporting systems.',
        },
        {
          title: 'No business requirement',
          description:
            'Recovery architecture is designed without understanding criticality, RTO, or RPO.',
        },
        {
          title: 'Manual recovery',
          description:
            'Recovery depends heavily on undocumented human steps under pressure.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Disaster Recovery? What is the difference between RTO and RPO? What is the difference between HA and DR? How would you design DR for a database? What is active-active versus active-passive? How would you recover a cloud application after a regional outage? How do you test a DR plan? How would you design DR for an AI or RAG platform?',
      highlights: [
        {
          title: 'RTO/RPO',
          description:
            'Clearly explain recovery time versus acceptable data loss.',
        },
        {
          title: 'Architecture',
          description:
            'Explain recovery patterns and their trade-offs.',
        },
        {
          title: 'Testing',
          description:
            'Show that recovery must be regularly validated.',
        },
        {
          title: 'AI DR',
          description:
            'Include model providers, vector databases, knowledge assets, and AI-specific dependencies.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I start Disaster Recovery design from business impact rather than technology. First I identify critical workflows and define RTO and RPO for each. Then I map dependencies and choose the appropriate recovery pattern, such as backup and restore, pilot light, warm standby, or active-active. I make sure data, infrastructure, configuration, secrets, networking, and external dependencies can all be recovered. I automate recovery where practical and, most importantly, test the recovery process regularly. For an AI platform, I would also include model-provider dependencies, prompts, embeddings, vector indexes, knowledge sources, and fallback providers.”',
      highlights: [
        {
          title: 'Business first',
          description:
            'Start with business criticality and recovery requirements.',
        },
        {
          title: 'Dependency mapping',
          description:
            'Recover the complete system rather than only the application server.',
        },
        {
          title: 'Automation',
          description:
            'Reduce manual recovery steps.',
        },
        {
          title: 'Testing',
          description:
            'Prove the recovery capability through regular exercises.',
        },
      ],
    },

    {
      title: 'Disaster Recovery for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, DR is a cross-functional resilience program. The leader should align business owners and engineering teams on criticality, RTO, RPO, recovery priorities, ownership, dependencies, testing cadence, investment, and executive communication.',
      highlights: [
        {
          title: 'Program leadership',
          description:
            'Coordinate multiple teams around a shared recovery strategy.',
        },
        {
          title: 'Risk management',
          description:
            'Prioritize recovery investment based on business impact.',
        },
        {
          title: 'Executive communication',
          description:
            'Explain recovery readiness, gaps, cost, and residual risk in business terms.',
        },
        {
          title: 'Operational readiness',
          description:
            'Ensure recovery procedures are documented, automated where possible, and tested.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
    'observability',
    'monitoring',
    'logging',
    'metrics',
    'distributed-tracing',
    'prometheus',
    'grafana',
    'opentelemetry',
    'alerting',
    'incident-management',
    'sli-slo',
    'error-budgets',
    'root-cause-analysis',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'scalability',
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
    'ansible',
    'helm',
    'serverless',
    'ec2',
    's3',
    'lambda',
    'cloudflare',
    'nginx',
    'queues',
    'caching',
    'deployment',
    'deployment-strategy',
    'rollback-strategy',
    'blue-green-deployment',
    'canary-deployment',
    'feature-flags',
  ],
}

export default disasterRecoveryKnowledge
