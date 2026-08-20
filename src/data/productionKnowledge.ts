import type { KnowledgeDefinition } from './knowledge'

export const productionKnowledge: KnowledgeDefinition = {
  technologyId: 'production',
  slug: 'production',
  title: 'Production',
  summary:
    'Production is the live environment where a software system serves real users, real workloads, and real business operations. Production engineering focuses on reliability, safety, observability, security, performance, and controlled change.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Production?',
      content:
        'Production is the live environment in which the application is used by real customers or business users. Unlike development environments, production has real traffic, real data, real business consequences, and strict expectations around reliability and security.',
      highlights: [
        {
          title: 'Production environment',
          description:
            'The live environment that serves real users and business workloads.',
        },
        {
          title: 'Real workload',
          description:
            'Actual customer traffic, transactions, jobs, and system activity.',
        },
        {
          title: 'Production risk',
          description:
            'The potential customer, financial, operational, or reputational impact of a production problem.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of a restaurant. The kitchen where chefs experiment with a new recipe is like development. A private tasting area is like staging. The dining area where real customers place orders and pay is production. A mistake in the test kitchen is inconvenient; a mistake during dinner service directly affects customers.',
      highlights: [
        {
          title: 'Development',
          description:
            'A safe environment for building and experimenting.',
        },
        {
          title: 'Staging',
          description:
            'An environment used to validate changes before production.',
        },
        {
          title: 'Production',
          description:
            'The live environment serving real customers.',
        },
      ],
    },

    {
      title: 'Production vs Development',
      content:
        'Development environments prioritize experimentation and fast iteration. Production prioritizes customer safety, reliability, security, performance, data integrity, and predictable operations. A change that is acceptable in development may require additional controls before reaching production.',
      highlights: [
        {
          title: 'Development',
          description:
            'Optimized for engineering speed and experimentation.',
        },
        {
          title: 'Production',
          description:
            'Optimized for reliable and safe customer-facing operation.',
        },
        {
          title: 'Production controls',
          description:
            'Processes and technical safeguards that reduce risk when changing live systems.',
        },
      ],
    },

    {
      title: 'Production vs Staging',
      content:
        'Staging is intended to resemble production closely enough to validate releases before they reach customers. Production remains the authoritative live environment. A staging environment can reduce risk, but it can never perfectly reproduce every production condition.',
      highlights: [
        {
          title: 'Staging',
          description:
            'A pre-production environment used to validate releases.',
        },
        {
          title: 'Production parity',
          description:
            'The degree to which staging resembles production in configuration, dependencies, and behavior.',
        },
        {
          title: 'Environment drift',
          description:
            'Differences between environments that can cause a change to behave differently after deployment.',
        },
      ],
    },

    {
      title: 'Production Readiness',
      content:
        'Production readiness means the team has evaluated whether a feature or service is safe to operate for real users. Readiness should consider functionality, performance, security, observability, failure handling, deployment, rollback, support ownership, and business impact.',
      highlights: [
        {
          title: 'Production readiness',
          description:
            'Evidence that a system is prepared for safe live operation.',
        },
        {
          title: 'Readiness checklist',
          description:
            'A structured set of technical and operational checks completed before release.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clear responsibility for monitoring, incidents, recovery, and ongoing maintenance.',
        },
      ],
    },

    {
      title: 'Production Architecture',
      content:
        'A production architecture defines how application services, databases, caches, queues, networks, identity systems, external providers, monitoring, and infrastructure work together under real workloads. It should explicitly account for expected failures and operational requirements.',
      highlights: [
        {
          title: 'Production architecture',
          description:
            'The technical design used to operate the live system.',
        },
        {
          title: 'Dependency',
          description:
            'A service, system, provider, or component required by the application.',
        },
        {
          title: 'Failure scenario',
          description:
            'A defined condition in which a component becomes unavailable, slow, incorrect, or degraded.',
        },
      ],
    },

    {
      title: 'Production Configuration',
      content:
        'Production configuration controls how the live application connects to databases, APIs, queues, storage, authentication systems, and other dependencies. Configuration should be managed safely and should not require hard-coding secrets into source code.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Values that control application behavior without changing application source code.',
        },
        {
          title: 'Environment variable',
          description:
            'A common mechanism for providing runtime configuration to an application.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive configuration such as passwords, API keys, tokens, or private credentials.',
        },
      ],
    },

    {
      title: 'Production Data',
      content:
        'Production systems contain real business and customer data. Data protection therefore becomes a core operational responsibility. Access should be controlled, backups should be available where required, and engineers should avoid unsafe use of production data in development environments.',
      highlights: [
        {
          title: 'Production data',
          description:
            'Real data generated or stored by live business operations.',
        },
        {
          title: 'Data protection',
          description:
            'Controls that prevent unauthorized access, loss, corruption, or inappropriate use of data.',
        },
        {
          title: 'Data access control',
          description:
            'Restrictions determining who or what can access production data.',
        },
      ],
    },

    {
      title: 'Production Access',
      content:
        'Production access should follow the principle of least privilege. Engineers and services should receive only the permissions necessary for their responsibilities. Sensitive operations should be authenticated, authorized, and auditable.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving users and services only the permissions they actually require.',
        },
        {
          title: 'Privileged access',
          description:
            'Access that allows sensitive or high-impact production operations.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of important production actions for investigation and accountability.',
        },
      ],
    },

    {
      title: 'Production Deployments',
      content:
        'Production deployments introduce changes into the live environment. Safe deployment processes typically include automated testing, validation, controlled rollout, health monitoring, rollback capability, and clear ownership.',
      highlights: [
        {
          title: 'Production deployment',
          description:
            'The process of releasing a software change into the live environment.',
        },
        {
          title: 'Controlled rollout',
          description:
            'Gradually introducing a change to limit risk and observe behavior.',
        },
        {
          title: 'Rollback',
          description:
            'Returning the system to a previously known-good version or state.',
        },
      ],
    },

    {
      title: 'Deployment Strategies',
      content:
        'Different production deployment strategies provide different levels of risk control. Rolling deployments replace instances gradually, blue-green deployments maintain two environments and switch traffic, and canary deployments expose a new version to a small percentage of traffic before wider release.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing production instances gradually.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining two production-capable environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Releasing a change to a limited portion of traffic before expanding the rollout.',
        },
      ],
    },

    {
      title: 'Feature Flags',
      content:
        'Feature flags allow teams to control whether functionality is enabled without necessarily deploying new code. They can support gradual releases, experiments, emergency disabling of problematic features, and targeted rollouts.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A runtime control that determines whether a feature is enabled.',
        },
        {
          title: 'Targeted rollout',
          description:
            'Enabling functionality for selected users, tenants, regions, or traffic percentages.',
        },
        {
          title: 'Kill switch',
          description:
            'A mechanism for rapidly disabling a problematic feature.',
        },
      ],
    },

    {
      title: 'Production Monitoring',
      content:
        'Production monitoring provides visibility into whether the live system is healthy. Teams monitor availability, latency, error rates, resource utilization, traffic, dependency health, queue depth, and business-critical signals.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Collecting and evaluating signals that indicate system health.',
        },
        {
          title: 'Health signal',
          description:
            'A measurable indicator that helps determine whether the system is operating correctly.',
        },
        {
          title: 'Customer-facing metric',
          description:
            'A measurement directly related to user experience or business functionality.',
        },
      ],
    },

    {
      title: 'Production Logging',
      content:
        'Production logs provide records of important application and infrastructure events. Logs should be structured, searchable, appropriately retained, and designed to avoid exposing sensitive information.',
      highlights: [
        {
          title: 'Structured logging',
          description:
            'Logging events in a consistent machine-readable format.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier used to connect related operations across services and logs.',
        },
        {
          title: 'Log retention',
          description:
            'The period for which logs are preserved according to operational, security, and compliance requirements.',
        },
      ],
    },

    {
      title: 'Production Metrics',
      content:
        'Metrics provide numerical measurements of system behavior over time. Common production metrics include request rate, error rate, latency, CPU, memory, storage, queue depth, database connections, and business throughput.',
      highlights: [
        {
          title: 'Metric',
          description:
            'A numerical measurement representing some aspect of system behavior.',
        },
        {
          title: 'Rate',
          description:
            'A measurement describing how frequently an event occurs.',
        },
        {
          title: 'Utilization',
          description:
            'The percentage of a resource currently being consumed.',
        },
      ],
    },

    {
      title: 'Production Tracing',
      content:
        'Distributed tracing follows a request across multiple services. It helps teams understand where latency occurs and which downstream dependency contributed to an error or slow request.',
      highlights: [
        {
          title: 'Trace',
          description:
            'A representation of an end-to-end operation across services.',
        },
        {
          title: 'Span',
          description:
            'A unit of work within a distributed trace.',
        },
        {
          title: 'Trace context',
          description:
            'Metadata propagated across services so related operations can be connected.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'Observability is the ability to understand the internal state and behavior of a system from its externally available outputs, primarily logs, metrics, and traces. Production observability helps teams diagnose problems rather than simply detect that something is wrong.',
      highlights: [
        {
          title: 'Observability',
          description:
            'The ability to understand system behavior from collected telemetry.',
        },
        {
          title: 'Telemetry',
          description:
            'Operational data such as logs, metrics, traces, and events.',
        },
        {
          title: 'Diagnosis',
          description:
            'Determining why a system is behaving incorrectly or unexpectedly.',
        },
      ],
    },

    {
      title: 'Alerting',
      content:
        'Production alerting turns important health signals into actionable notifications. Good alerts indicate conditions that require human or automated action. Excessive low-value alerts create alert fatigue and make serious incidents easier to miss.',
      highlights: [
        {
          title: 'Alert',
          description:
            'A notification generated when a defined condition requires attention.',
        },
        {
          title: 'Actionable alert',
          description:
            'An alert that provides enough information and urgency to justify action.',
        },
        {
          title: 'Alert fatigue',
          description:
            'A condition where excessive alerts reduce the ability of responders to recognize important signals.',
        },
      ],
    },

    {
      title: 'Production Incidents',
      content:
        'A production incident is an event that negatively affects service availability, performance, correctness, security, or customers. Incident management coordinates detection, response, mitigation, communication, recovery, and learning.',
      highlights: [
        {
          title: 'Incident',
          description:
            'A production event that causes or threatens meaningful customer or business impact.',
        },
        {
          title: 'Incident response',
          description:
            'The coordinated process of detecting, mitigating, communicating, and recovering from an incident.',
        },
        {
          title: 'Incident commander',
          description:
            'The person coordinating the response and keeping teams focused on restoring service.',
        },
      ],
    },

    {
      title: 'Incident Severity',
      content:
        'Severity classifies incidents according to their impact and urgency. Clear severity definitions help organizations determine who should respond, how quickly escalation should occur, and how much communication is required.',
      highlights: [
        {
          title: 'Severity',
          description:
            'A classification representing the impact and urgency of an incident.',
        },
        {
          title: 'Customer impact',
          description:
            'The degree to which customers or business operations are affected.',
        },
        {
          title: 'Escalation',
          description:
            'Increasing the level or number of responders involved in an incident.',
        },
      ],
    },

    {
      title: 'Incident Lifecycle',
      content:
        'A typical incident lifecycle includes detection, triage, assignment, investigation, mitigation, recovery, validation, communication, and post-incident review. The objective during an active incident is first to restore safe service, then to investigate deeper causes.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Recognizing that an incident has occurred.',
        },
        {
          title: 'Mitigation',
          description:
            'Reducing customer impact while the underlying problem may still exist.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring the service to an acceptable operating state.',
        },
      ],
    },

    {
      title: 'SLI and SLO in Production',
      content:
        'Production systems should be measured against clearly defined Service Level Indicators and Service Level Objectives. An SLI measures actual behavior, while an SLO defines the target level of reliability or performance.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator of actual service behavior.',
        },
        {
          title: 'SLO',
          description:
            'A target value or range for an SLI.',
        },
        {
          title: 'Reliability target',
          description:
            'The expected level of service performance or availability.',
        },
      ],
    },

    {
      title: 'Error Budgets',
      content:
        'An error budget represents the amount of unreliability allowed by an SLO over a defined period. It provides a practical way to balance delivery speed with reliability work.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The amount of unreliability permitted while still meeting an SLO.',
        },
        {
          title: 'Budget consumption',
          description:
            'The rate at which reliability failures use the allowed error budget.',
        },
        {
          title: 'Reliability decision',
          description:
            'A decision to prioritize stability or feature delivery based on remaining reliability budget.',
        },
      ],
    },

    {
      title: 'RCA',
      content:
        'Root Cause Analysis is the structured investigation performed after an incident or important failure to understand contributing causes and identify improvements. RCA should focus on system conditions and actionable improvements rather than simply assigning blame to an individual.',
      highlights: [
        {
          title: 'Root Cause Analysis',
          description:
            'A structured investigation into why an incident occurred and how recurrence can be reduced.',
        },
        {
          title: 'Contributing factor',
          description:
            'A condition that helped create or amplify an incident.',
        },
        {
          title: 'Corrective action',
          description:
            'A concrete change intended to reduce the likelihood or impact of recurrence.',
        },
      ],
    },

    {
      title: 'Post-Incident Review',
      content:
        'A post-incident review examines what happened, customer impact, timeline, detection quality, response effectiveness, contributing factors, and follow-up actions. A healthy review is focused on learning and system improvement rather than blame.',
      highlights: [
        {
          title: 'Incident timeline',
          description:
            'A chronological record of important events during the incident.',
        },
        {
          title: 'Lessons learned',
          description:
            'Insights that can improve architecture, monitoring, process, or response.',
        },
        {
          title: 'Action item',
          description:
            'A specific follow-up task with ownership and an expected outcome.',
        },
      ],
    },

    {
      title: 'Production Change Management',
      content:
        'Changes are a major source of production risk. Controlled change management includes peer review, automated testing, staged deployment, monitoring, rollback plans, change ownership, and clear communication for high-risk changes.',
      highlights: [
        {
          title: 'Change management',
          description:
            'The process used to control and assess production changes.',
        },
        {
          title: 'Change risk',
          description:
            'The likelihood and potential impact of a production change causing problems.',
        },
        {
          title: 'Rollback plan',
          description:
            'A predefined method for returning to a safe previous state.',
        },
      ],
    },

    {
      title: 'Production Backups',
      content:
        'Production backups protect against data loss, corruption, accidental deletion, and some operational failures. Backup strategy should define frequency, retention, encryption, access controls, recovery objectives, and regular restoration testing.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A preserved copy of data or system state that can support recovery.',
        },
        {
          title: 'Backup retention',
          description:
            'The period for which backup copies are preserved.',
        },
        {
          title: 'Restore test',
          description:
            'A controlled test confirming that backups can actually be used for recovery.',
        },
      ],
    },

    {
      title: 'Production Disaster Recovery',
      content:
        'Disaster Recovery provides a plan for restoring service after major disruptive events. It can include backups, replication, secondary infrastructure, alternate regions, recovery procedures, and defined RTO and RPO objectives.',
      highlights: [
        {
          title: 'Disaster Recovery',
          description:
            'The planned approach for restoring systems after major disruptions.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective: target time for restoring service.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective: acceptable amount of recent data loss.',
        },
      ],
    },

    {
      title: 'Production Capacity',
      content:
        'Production reliability depends on having enough capacity. CPU, memory, storage, database connections, network bandwidth, queue consumers, API limits, and external provider quotas can all become production constraints.',
      highlights: [
        {
          title: 'Capacity',
          description:
            'The amount of workload the system can safely handle.',
        },
        {
          title: 'Headroom',
          description:
            'Unused capacity maintained for spikes, failures, and growth.',
        },
        {
          title: 'Saturation',
          description:
            'A condition where a resource approaches or exceeds its usable capacity.',
        },
      ],
    },

    {
      title: 'Production Security',
      content:
        'Production systems require stronger security controls because they contain real users, real data, and real business operations. Least privilege, secret management, encryption, secure network access, vulnerability management, auditing, and incident response are important parts of production operations.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Granting only the access necessary for a task.',
        },
        {
          title: 'Secret management',
          description:
            'Securely storing, accessing, rotating, and auditing sensitive credentials.',
        },
        {
          title: 'Audit logging',
          description:
            'Recording security-relevant actions for investigation and accountability.',
        },
      ],
    },

    {
      title: 'Production Ownership',
      content:
        'Every production service should have clear ownership. Ownership includes knowing who receives alerts, who can deploy or rollback, who investigates incidents, who communicates customer impact, and who drives long-term reliability improvements.',
      highlights: [
        {
          title: 'Service owner',
          description:
            'The team or individual accountable for the health and operation of a production service.',
        },
        {
          title: 'On-call',
          description:
            'The designated operational responsibility for responding to production alerts and incidents.',
        },
        {
          title: 'Operational responsibility',
          description:
            'Accountability for keeping a service safe, observable, and supportable in production.',
        },
      ],
    },

    {
      title: 'Production Readiness Checklist',
      content:
        'Before releasing a major system to production, teams should verify functional testing, security, performance, observability, alerts, dashboards, backups, rollback, capacity, dependency behavior, access control, documentation, ownership, and incident procedures.',
      highlights: [
        {
          title: 'Functional readiness',
          description:
            'The system performs the intended business functions correctly.',
        },
        {
          title: 'Operational readiness',
          description:
            'The team can monitor, support, recover, and safely change the system.',
        },
        {
          title: 'Recovery readiness',
          description:
            'The team has tested the procedures needed to restore service or data.',
        },
      ],
    },

    {
      title: 'Production in AI Systems',
      content:
        'AI systems introduce additional production concerns such as model latency, token usage, provider rate limits, prompt changes, model version changes, hallucination risk, retrieval quality, evaluation drift, cost, and fallback behavior. Production AI requires both traditional software observability and AI-specific operational signals.',
      highlights: [
        {
          title: 'Model latency',
          description:
            'Time required for an AI model request to produce the required result.',
        },
        {
          title: 'Token usage',
          description:
            'The amount of model input and output processing consumed by requests.',
        },
        {
          title: 'AI quality signal',
          description:
            'A measurable indicator of output quality, correctness, relevance, or task success.',
        },
      ],
    },

    {
      title: 'AI Voice Production Example',
      content:
        'For an AI voice platform, production monitoring should cover concurrent calls, call connection success, speech recognition latency, model latency, text-to-speech latency, call duration, provider errors, dropped calls, cost per minute, and post-call processing failures. The active call path should have clear fallbacks and strict operational limits.',
      highlights: [
        {
          title: 'Call connection success',
          description:
            'The percentage of intended calls that successfully establish the required connection.',
        },
        {
          title: 'End-to-end latency',
          description:
            'The time between a caller finishing speech and receiving an acceptable system response.',
        },
        {
          title: 'Dropped call',
          description:
            'A call that terminates unexpectedly or fails to remain connected as required.',
        },
      ],
    },

    {
      title: 'Production RAG Example',
      content:
        'For a RAG system, production visibility should include retrieval latency, retrieval success, document freshness, vector-store health, embedding failures, context size, model latency, answer quality, citation behavior, and fallback rates. Monitoring only API uptime is insufficient to understand whether the AI system is actually delivering useful answers.',
      highlights: [
        {
          title: 'Retrieval latency',
          description:
            'Time required to retrieve relevant information from the knowledge system.',
        },
        {
          title: 'Retrieval quality',
          description:
            'How effectively the retrieval layer provides useful context for the task.',
        },
        {
          title: 'Answer quality',
          description:
            'A measure of whether the generated answer satisfies the intended task and quality requirements.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What does production-ready mean? How do you prepare an application for production? What would you monitor in production? How do you handle production incidents? What is the difference between monitoring and observability? How do you design a production readiness checklist? How do you safely deploy to production? How would you operate an AI system in production?',
      highlights: [
        {
          title: 'Production readiness',
          description:
            'Explain reliability, security, observability, deployment, rollback, capacity, and ownership.',
        },
        {
          title: 'Incident response',
          description:
            'Explain detection, triage, mitigation, recovery, communication, and post-incident learning.',
        },
        {
          title: 'AI production',
          description:
            'Explain model quality, latency, provider reliability, cost, retrieval, and AI-specific telemetry.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat production as a complete operating environment, not just the place where code runs. Before release I want functional, security, performance, observability, capacity, rollback, backup, and ownership checks in place. Once live, I want clear SLIs and SLOs, dashboards, actionable alerts, logs and traces, and an incident process. For AI systems I would add model quality, token usage, provider health, retrieval quality, latency, and cost signals. The goal is not simply to deploy successfully, but to operate the system safely after deployment.”',
      highlights: [
        {
          title: 'Operate, not just deploy',
          description:
            'Production readiness includes the ability to support and recover the system after release.',
        },
        {
          title: 'Measure customer impact',
          description:
            'Prioritize signals that reflect actual user and business outcomes.',
        },
        {
          title: 'AI-specific operations',
          description:
            'Add AI quality, provider, retrieval, latency, and cost signals to traditional production telemetry.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating production as only an infrastructure environment, deploying without rollback, monitoring only CPU and memory, ignoring external dependencies, exposing sensitive data in logs, having alerts with no owner, skipping restore tests, and assuming an AI system is healthy because its API returns HTTP 200 responses.',
      highlights: [
        {
          title: 'Infrastructure-only thinking',
          description:
            'Production health also includes user experience, correctness, security, and business functionality.',
        },
        {
          title: 'No rollback',
          description:
            'A failed release becomes harder to recover from without a tested rollback path.',
        },
        {
          title: 'Noisy alerts',
          description:
            'Excessive non-actionable alerts reduce operational effectiveness.',
        },
        {
          title: 'HTTP 200 equals healthy',
          description:
            'A successful HTTP response does not guarantee correct AI output or business behavior.',
        },
      ],
    },

    {
      title: 'Production for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, production ownership means coordinating engineering, product, security, infrastructure, support, and business stakeholders around safe operation. The leader should make reliability measurable, establish ownership, manage operational risk, prioritize corrective actions, and communicate customer impact clearly.',
      highlights: [
        {
          title: 'Operational governance',
          description:
            'The processes and ownership structures used to keep production systems safe and reliable.',
        },
        {
          title: 'Risk management',
          description:
            'Identifying, prioritizing, and reducing risks that can affect live services.',
        },
        {
          title: 'Cross-functional coordination',
          description:
            'Aligning engineering, product, security, infrastructure, and business teams during production operations.',
        },
        {
          title: 'Executive communication',
          description:
            'Communicating production health, customer impact, risk, and recovery status in business terms.',
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
    'disaster-recovery',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'cloudflare',
    'nginx',
  ],
}

export default productionKnowledge
