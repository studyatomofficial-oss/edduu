import type { KnowledgeDefinition } from './knowledge'

export const monitoringKnowledge: KnowledgeDefinition = {
  technologyId: 'monitoring',
  slug: 'monitoring',
  title: 'Monitoring',
  summary:
    'Monitoring is the practice of continuously collecting and evaluating predefined signals from applications, infrastructure, and business workflows so teams can detect known problems, understand system health, and respond to operational conditions.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Monitoring?',
      content:
        'Monitoring means continuously watching selected signals from a running system and checking them against expected conditions. It helps teams answer questions such as: Is the service available? Are errors increasing? Is latency getting worse? Is CPU exhausted? Is the queue growing? Monitoring is primarily designed around known questions and known failure conditions.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'The continuous collection and evaluation of predefined system signals.',
        },
        {
          title: 'Signal',
          description:
            'A measurable value that provides information about system behavior.',
        },
        {
          title: 'Threshold',
          description:
            'A defined condition at which a signal becomes important enough to trigger action or investigation.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a doctor checking a patient. Temperature, blood pressure, heart rate, and oxygen level are monitored continuously or at regular intervals. If one value crosses a dangerous range, the doctor investigates. Software monitoring works similarly: we measure important system signals and react when they indicate a problem.',
      highlights: [
        {
          title: 'Patient',
          description:
            'Represents the production system.',
        },
        {
          title: 'Vital signs',
          description:
            'Represent system metrics and health signals.',
        },
        {
          title: 'Doctor',
          description:
            'Represents engineers or automated systems responding to abnormal conditions.',
        },
      ],
    },

    {
      title: 'Monitoring vs Observability',
      content:
        'Monitoring and observability are related but not identical. Monitoring focuses on predefined signals and known questions. Observability provides a broader ability to investigate system behavior and answer questions that were not necessarily anticipated in advance.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Detects known conditions using predefined signals.',
        },
        {
          title: 'Observability',
          description:
            'Helps investigate system behavior using interconnected telemetry.',
        },
        {
          title: 'Relationship',
          description:
            'Monitoring is an important part of an overall observability strategy.',
        },
      ],
    },

    {
      title: 'Why Monitoring Matters',
      content:
        'Production systems can fail gradually or suddenly. Monitoring provides early warning about degraded performance, resource exhaustion, dependency failures, capacity problems, and customer-impacting issues. Without monitoring, teams may discover incidents only after users report them.',
      highlights: [
        {
          title: 'Early detection',
          description:
            'Recognizing a problem before it becomes a major customer-impacting incident.',
        },
        {
          title: 'Health visibility',
          description:
            'Understanding whether the system is operating within expected conditions.',
        },
        {
          title: 'Operational response',
          description:
            'Using monitoring signals to guide investigation and corrective action.',
        },
      ],
    },

    {
      title: 'What Should We Monitor?',
      content:
        'A good monitoring strategy covers infrastructure, application behavior, dependencies, customer experience, business workflows, and reliability objectives. The exact signals depend on the system and the outcomes that matter.',
      highlights: [
        {
          title: 'Infrastructure',
          description:
            'CPU, memory, storage, network, nodes, containers, and other infrastructure signals.',
        },
        {
          title: 'Application',
          description:
            'Request rate, error rate, latency, throughput, and application-specific behavior.',
        },
        {
          title: 'Business',
          description:
            'Signals such as successful payments, completed calls, orders, signups, or other business outcomes.',
        },
      ],
    },

    {
      title: 'Infrastructure Monitoring',
      content:
        'Infrastructure monitoring tracks the health and utilization of resources that applications depend on. Typical signals include CPU utilization, memory usage, disk usage, disk I/O, network traffic, node health, container restarts, and resource saturation.',
      highlights: [
        {
          title: 'CPU utilization',
          description:
            'The percentage of available CPU currently being consumed.',
        },
        {
          title: 'Memory utilization',
          description:
            'The amount of available memory currently being consumed.',
        },
        {
          title: 'Disk utilization',
          description:
            'The percentage of storage capacity currently being used.',
        },
      ],
    },

    {
      title: 'Application Monitoring',
      content:
        'Application monitoring focuses on whether software services are functioning correctly. Common signals include request rate, success rate, error rate, latency, throughput, dependency failures, queue processing, and application-specific business operations.',
      highlights: [
        {
          title: 'Request rate',
          description:
            'The number of requests handled over a period of time.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion or number of requests that fail.',
        },
        {
          title: 'Latency',
          description:
            'The time required for an operation to complete.',
        },
      ],
    },

    {
      title: 'Availability Monitoring',
      content:
        'Availability monitoring checks whether a service is reachable and functioning as expected. A simple availability check may verify that an endpoint responds, while a stronger check validates an actual critical user workflow.',
      highlights: [
        {
          title: 'Availability check',
          description:
            'A test that determines whether a service is accessible and functioning.',
        },
        {
          title: 'Health check',
          description:
            'A check used to determine whether a service or component is healthy enough for its intended role.',
        },
        {
          title: 'Synthetic monitoring',
          description:
            'Automated tests that simulate important user interactions.',
        },
      ],
    },

    {
      title: 'Latency Monitoring',
      content:
        'Latency monitoring tracks how long operations take. Average latency is useful, but percentiles such as P50, P95, and P99 are often more informative because a small number of very slow requests can be hidden by an average.',
      highlights: [
        {
          title: 'P50',
          description:
            'The median latency; approximately half of requests are faster and half are slower.',
        },
        {
          title: 'P95',
          description:
            'A latency percentile showing the experience of approximately the slowest 5 percent of requests beyond that value.',
        },
        {
          title: 'P99',
          description:
            'A latency percentile that highlights very slow requests and tail behavior.',
        },
      ],
    },

    {
      title: 'Error Monitoring',
      content:
        'Error monitoring tracks failures in application requests, background jobs, dependencies, and business workflows. Engineers should distinguish between expected user errors, transient infrastructure failures, dependency failures, and unexpected application defects.',
      highlights: [
        {
          title: 'Application error',
          description:
            'A failure caused by application logic or execution.',
        },
        {
          title: 'Dependency error',
          description:
            'A failure originating from a service or resource required by the application.',
        },
        {
          title: 'Error rate',
          description:
            'The proportion or number of operations that fail over a defined period.',
        },
      ],
    },

    {
      title: 'Traffic Monitoring',
      content:
        'Traffic monitoring measures the amount and pattern of workload reaching a service. A sudden increase can indicate a legitimate business event, successful marketing campaign, unexpected popularity, abuse, or an attack. A sudden decrease can also indicate routing or availability problems.',
      highlights: [
        {
          title: 'Traffic',
          description:
            'The workload reaching a service.',
        },
        {
          title: 'Traffic spike',
          description:
            'A sudden increase in workload compared with the expected baseline.',
        },
        {
          title: 'Traffic anomaly',
          description:
            'A significant deviation from normal workload patterns.',
        },
      ],
    },

    {
      title: 'Saturation Monitoring',
      content:
        'Saturation monitoring identifies resources approaching their capacity limits. Examples include CPU saturation, memory pressure, database connection exhaustion, queue backlog, network saturation, and storage exhaustion.',
      highlights: [
        {
          title: 'Saturation',
          description:
            'The degree to which a resource is approaching or exceeding its usable capacity.',
        },
        {
          title: 'Resource exhaustion',
          description:
            'A condition where a resource no longer has sufficient capacity to support workload.',
        },
        {
          title: 'Headroom',
          description:
            'Unused capacity intentionally maintained to absorb spikes or failures.',
        },
      ],
    },

    {
      title: 'The Four Golden Signals',
      content:
        'A widely used monitoring approach focuses on latency, traffic, errors, and saturation. Together they provide a practical high-level view of service health.',
      highlights: [
        {
          title: 'Latency',
          description:
            'How long requests or operations take.',
        },
        {
          title: 'Traffic',
          description:
            'How much demand is reaching the service.',
        },
        {
          title: 'Errors',
          description:
            'How many requests or operations are failing.',
        },
        {
          title: 'Saturation',
          description:
            'How close resources are to their capacity limits.',
        },
      ],
    },

    {
      title: 'RED Method',
      content:
        'The RED method is especially useful for monitoring request-driven services. It focuses on Rate, Errors, and Duration.',
      highlights: [
        {
          title: 'Rate',
          description:
            'The number of requests processed over time.',
        },
        {
          title: 'Errors',
          description:
            'The number or percentage of failed requests.',
        },
        {
          title: 'Duration',
          description:
            'The amount of time required to process requests.',
        },
      ],
    },

    {
      title: 'USE Method',
      content:
        'The USE method focuses on infrastructure resource health through Utilization, Saturation, and Errors.',
      highlights: [
        {
          title: 'Utilization',
          description:
            'How much of a resource is currently being consumed.',
        },
        {
          title: 'Saturation',
          description:
            'How much work is waiting because a resource is approaching its limit.',
        },
        {
          title: 'Errors',
          description:
            'Errors produced by the resource or subsystem.',
        },
      ],
    },

    {
      title: 'Metrics Types',
      content:
        'Monitoring systems commonly use counters, gauges, histograms, and sometimes summaries. Choosing the appropriate metric type helps represent the behavior being measured correctly.',
      highlights: [
        {
          title: 'Counter',
          description:
            'A value that generally increases as events occur.',
        },
        {
          title: 'Gauge',
          description:
            'A value that can increase or decrease over time.',
        },
        {
          title: 'Histogram',
          description:
            'A metric type useful for representing distributions such as request latency.',
        },
      ],
    },

    {
      title: 'Monitoring Intervals',
      content:
        'Monitoring systems collect data at defined intervals or when events occur. The appropriate interval depends on the problem being monitored. Fast-changing customer-facing signals may require more frequent collection than slow-changing capacity trends.',
      highlights: [
        {
          title: 'Collection interval',
          description:
            'The frequency at which a monitoring system collects a signal.',
        },
        {
          title: 'Resolution',
          description:
            'The level of detail available in monitoring data over time.',
        },
        {
          title: 'Trade-off',
          description:
            'Higher monitoring frequency can improve detection but may increase storage and processing cost.',
        },
      ],
    },

    {
      title: 'Dashboards',
      content:
        'Dashboards provide a visual summary of important system signals. A useful production dashboard should help responders quickly understand traffic, errors, latency, saturation, dependencies, and customer impact rather than presenting every available metric.',
      highlights: [
        {
          title: 'Dashboard',
          description:
            'A visual collection of selected monitoring signals.',
        },
        {
          title: 'Service dashboard',
          description:
            'A dashboard focused on the health of a particular service.',
        },
        {
          title: 'Executive dashboard',
          description:
            'A higher-level view focused on reliability, business impact, and trends.',
        },
      ],
    },

    {
      title: 'Alerts',
      content:
        'Monitoring becomes operationally useful when important conditions generate actionable alerts. Alerts should have clear thresholds or rules, ownership, severity, context, and expected response.',
      highlights: [
        {
          title: 'Alert',
          description:
            'A notification that a monitored condition requires attention.',
        },
        {
          title: 'Severity',
          description:
            'A classification of how urgent or impactful the condition is.',
        },
        {
          title: 'Alert owner',
          description:
            'The team or person responsible for responding to the alert.',
        },
      ],
    },

    {
      title: 'Threshold-Based Monitoring',
      content:
        'Threshold-based monitoring triggers when a signal crosses a predefined boundary, such as error rate above a defined percentage or disk usage above a defined level. Thresholds should be based on expected system behavior and business impact.',
      highlights: [
        {
          title: 'Threshold',
          description:
            'A predefined boundary that determines whether a condition is considered abnormal.',
        },
        {
          title: 'Static threshold',
          description:
            'A fixed threshold that does not automatically change with historical behavior.',
        },
        {
          title: 'Threshold tuning',
          description:
            'Adjusting monitoring boundaries to improve signal quality and reduce noise.',
        },
      ],
    },

    {
      title: 'Anomaly Monitoring',
      content:
        'Anomaly monitoring attempts to identify behavior that differs significantly from an expected baseline. It can be useful when traffic or system behavior changes dynamically and fixed thresholds would produce too many false positives.',
      highlights: [
        {
          title: 'Anomaly',
          description:
            'A significant deviation from expected behavior.',
        },
        {
          title: 'Baseline',
          description:
            'A representation of normal system behavior used for comparison.',
        },
        {
          title: 'Dynamic threshold',
          description:
            'A monitoring boundary that changes according to historical or contextual behavior.',
        },
      ],
    },

    {
      title: 'Synthetic Monitoring',
      content:
        'Synthetic monitoring uses automated requests to simulate important user actions. It can detect availability and workflow problems even when real traffic is low.',
      highlights: [
        {
          title: 'Synthetic transaction',
          description:
            'An automated sequence that simulates a real user workflow.',
        },
        {
          title: 'External probe',
          description:
            'A monitoring check performed from outside the service infrastructure.',
        },
        {
          title: 'User journey monitoring',
          description:
            'Monitoring a complete business workflow rather than only checking an endpoint.',
        },
      ],
    },

    {
      title: 'Dependency Monitoring',
      content:
        'Applications often depend on databases, caches, queues, cloud services, payment systems, AI providers, telephony systems, and external APIs. Monitoring dependencies helps distinguish an application problem from a downstream failure.',
      highlights: [
        {
          title: 'Dependency health',
          description:
            'The operational condition of a service or resource required by the application.',
        },
        {
          title: 'Dependency latency',
          description:
            'The time required for a downstream dependency to respond.',
        },
        {
          title: 'Dependency error rate',
          description:
            'The frequency with which a downstream dependency returns failures.',
        },
      ],
    },

    {
      title: 'Database Monitoring',
      content:
        'Database monitoring should cover connections, query latency, slow queries, CPU, memory, storage, I/O, locks, replication lag, transaction rate, and error rate. Application performance problems often originate from database capacity or query behavior.',
      highlights: [
        {
          title: 'Slow query',
          description:
            'A query whose execution time exceeds an acceptable threshold.',
        },
        {
          title: 'Connection utilization',
          description:
            'The amount of database connection capacity currently consumed.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between a primary data source and a replica receiving changes.',
        },
      ],
    },

    {
      title: 'Queue Monitoring',
      content:
        'Queue monitoring tracks queue depth, message age, producer rate, consumer rate, processing failures, retries, and dead-letter messages. A growing queue often indicates that consumers cannot keep up with incoming workload.',
      highlights: [
        {
          title: 'Queue depth',
          description:
            'The amount of work currently waiting in the queue.',
        },
        {
          title: 'Message age',
          description:
            'How long the oldest or selected queued message has been waiting.',
        },
        {
          title: 'Consumer throughput',
          description:
            'The rate at which consumers process queued messages.',
        },
      ],
    },

    {
      title: 'Kubernetes Monitoring',
      content:
        'Kubernetes monitoring covers nodes, pods, containers, deployments, replica counts, resource utilization, restarts, scheduling problems, events, network behavior, and application health. Platform metrics should be combined with application-level monitoring.',
      highlights: [
        {
          title: 'Pod restart',
          description:
            'A restart of a Kubernetes workload container or pod.',
        },
        {
          title: 'Replica availability',
          description:
            'The number of healthy running replicas compared with the desired number.',
        },
        {
          title: 'Node capacity',
          description:
            'Available CPU and memory capacity on Kubernetes worker nodes.',
        },
      ],
    },

    {
      title: 'Prometheus',
      content:
        'Prometheus is a widely used monitoring and time-series metrics platform. It collects metrics and stores them as time series that can be queried and used for alerting.',
      highlights: [
        {
          title: 'Prometheus',
          description:
            'An open-source monitoring and time-series database platform.',
        },
        {
          title: 'Time series',
          description:
            'A sequence of timestamped measurements.',
        },
        {
          title: 'PromQL',
          description:
            'The query language used to select and analyze Prometheus metrics.',
        },
      ],
    },

    {
      title: 'Grafana',
      content:
        'Grafana is commonly used to visualize monitoring data through dashboards and exploration interfaces. It can connect to Prometheus and many other data sources.',
      highlights: [
        {
          title: 'Grafana',
          description:
            'A platform for visualizing and exploring monitoring and observability data.',
        },
        {
          title: 'Dashboard panel',
          description:
            'A visualization representing one or more monitoring signals.',
        },
        {
          title: 'Data source',
          description:
            'A backend from which Grafana retrieves monitoring information.',
        },
      ],
    },

    {
      title: 'Monitoring and SLI / SLO',
      content:
        'Monitoring provides the raw measurements needed to calculate SLIs and evaluate SLOs. Instead of monitoring arbitrary infrastructure values alone, teams should connect monitoring to customer-facing reliability objectives.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator of service behavior.',
        },
        {
          title: 'SLO',
          description:
            'A target value for an SLI.',
        },
        {
          title: 'SLO monitoring',
          description:
            'Tracking production signals to determine whether reliability objectives are being met.',
        },
      ],
    },

    {
      title: 'Monitoring and Incident Response',
      content:
        'During incidents, monitoring helps establish when the problem started, how widespread it is, which components are affected, and whether mitigation is working. Monitoring should support fast decision-making rather than overwhelm responders with irrelevant data.',
      highlights: [
        {
          title: 'Incident detection',
          description:
            'Recognizing that an abnormal production condition has occurred.',
        },
        {
          title: 'Impact assessment',
          description:
            'Determining the scope and severity of customer or business impact.',
        },
        {
          title: 'Recovery validation',
          description:
            'Using monitoring signals to confirm that the system has returned to acceptable behavior.',
        },
      ],
    },

    {
      title: 'MTTD and Monitoring',
      content:
        'Mean Time to Detect measures how quickly a team identifies an incident after it begins. Good monitoring, useful thresholds, synthetic checks, and actionable alerts can reduce MTTD.',
      highlights: [
        {
          title: 'MTTD',
          description:
            'Mean Time to Detect: average time required to detect a production problem.',
        },
        {
          title: 'Detection latency',
          description:
            'The time between a problem starting and the monitoring system or team recognizing it.',
        },
        {
          title: 'Detection coverage',
          description:
            'The extent to which important failure conditions can be detected automatically.',
        },
      ],
    },

    {
      title: 'Alert Fatigue',
      content:
        'Alert fatigue occurs when responders receive too many alerts, especially alerts that are noisy, duplicated, or non-actionable. Over time, this can cause important alerts to be ignored. Monitoring systems should prioritize signal quality over the number of alerts.',
      highlights: [
        {
          title: 'Alert fatigue',
          description:
            'Reduced responder effectiveness caused by excessive or low-value alerts.',
        },
        {
          title: 'False positive',
          description:
            'An alert that indicates a problem when meaningful customer or system impact does not actually exist.',
        },
        {
          title: 'Actionable alert',
          description:
            'An alert that requires a clear response from a human or automated system.',
        },
      ],
    },

    {
      title: 'Monitoring Cost',
      content:
        'Monitoring creates costs for metric collection, storage, queries, dashboards, alert evaluation, and telemetry infrastructure. High-cardinality metrics and unnecessarily high collection frequency can significantly increase cost.',
      highlights: [
        {
          title: 'Cardinality',
          description:
            'The number of unique values represented by metric labels or dimensions.',
        },
        {
          title: 'Retention',
          description:
            'The period for which monitoring data is stored.',
        },
        {
          title: 'Monitoring cost optimization',
          description:
            'Reducing monitoring expense while preserving signals necessary for reliability and operations.',
        },
      ],
    },

    {
      title: 'Monitoring Security',
      content:
        'Monitoring data can contain sensitive information. Logs and telemetry should avoid exposing passwords, tokens, secrets, or unnecessary personal information. Access to monitoring systems should be controlled and auditable.',
      highlights: [
        {
          title: 'Sensitive data',
          description:
            'Information that should not be exposed through monitoring systems.',
        },
        {
          title: 'Redaction',
          description:
            'Removing or masking sensitive values before storing or displaying monitoring data.',
        },
        {
          title: 'Monitoring access',
          description:
            'Permissions controlling who can view, query, or modify monitoring information.',
        },
      ],
    },

    {
      title: 'Monitoring AI Systems',
      content:
        'AI production monitoring should extend beyond infrastructure health. Important signals can include model latency, request rate, token usage, provider errors, rate-limit responses, fallback frequency, retrieval latency, output quality indicators, and cost per request.',
      highlights: [
        {
          title: 'Model latency',
          description:
            'The time required for an AI model request to produce its response.',
        },
        {
          title: 'Token usage',
          description:
            'The amount of model input and output processing consumed.',
        },
        {
          title: 'Provider health',
          description:
            'The availability, latency, and error behavior of an external AI provider.',
        },
      ],
    },

    {
      title: 'Monitoring AI Voice Platforms',
      content:
        'For an AI voice platform, monitoring should include call connection success, concurrent calls, call duration, speech-to-text latency, model latency, text-to-speech latency, dropped calls, provider errors, webhook failures, post-call processing failures, and cost per call or minute.',
      highlights: [
        {
          title: 'Concurrent calls',
          description:
            'The number of active calls being handled at the same time.',
        },
        {
          title: 'Dropped calls',
          description:
            'Calls that terminate unexpectedly or fail to remain connected as required.',
        },
        {
          title: 'End-to-end voice latency',
          description:
            'The time between caller speech and the system producing an acceptable spoken response.',
        },
      ],
    },

    {
      title: 'Monitoring RAG Systems',
      content:
        'RAG monitoring should cover ingestion failures, embedding throughput, vector-store health, retrieval latency, result counts, retrieval quality signals, model latency, token usage, answer quality, and document freshness.',
      highlights: [
        {
          title: 'Retrieval latency',
          description:
            'The time required to retrieve relevant context.',
        },
        {
          title: 'Document freshness',
          description:
            'How current the indexed knowledge is compared with the authoritative source.',
        },
        {
          title: 'Retrieval quality',
          description:
            'A measure of whether the retrieval system is selecting useful context.',
        },
      ],
    },

    {
      title: 'Monitoring Architecture',
      content:
        'A typical monitoring architecture includes instrumentation, metric collection, storage, query capabilities, dashboards, alert evaluation, notification routing, and incident-management integration. The architecture should support both real-time detection and historical analysis.',
      highlights: [
        {
          title: 'Instrumentation',
          description:
            'The application or infrastructure code that produces monitoring signals.',
        },
        {
          title: 'Metrics backend',
          description:
            'The system that stores and serves time-series monitoring data.',
        },
        {
          title: 'Alert manager',
          description:
            'A component that evaluates alerts and routes notifications to responders.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is monitoring? Monitoring vs observability? What would you monitor for a production API? What are the four golden signals? Explain RED and USE. How would you design monitoring for Kubernetes? How do Prometheus and Grafana work together? How do you reduce alert fatigue? What would you monitor in an AI system?',
      highlights: [
        {
          title: 'Production monitoring',
          description:
            'Explain availability, latency, errors, traffic, saturation, dependencies, and business signals.',
        },
        {
          title: 'Monitoring architecture',
          description:
            'Explain collection, storage, dashboards, alerting, and incident integration.',
        },
        {
          title: 'AI monitoring',
          description:
            'Explain model, provider, retrieval, latency, quality, and cost signals.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I would start with the customer journey and define the signals that tell us whether that journey is healthy. For an API, I would monitor request rate, error rate, latency, and saturation, then add dependency and business metrics. I would create dashboards for investigation and actionable alerts for conditions that require intervention. I would also monitor capacity and failure scenarios. For AI systems I would add model latency, token usage, provider health, retrieval quality, and cost because a technically available AI service can still produce a poor customer outcome.”',
      highlights: [
        {
          title: 'Customer-first',
          description:
            'Design monitoring around customer and business outcomes rather than infrastructure alone.',
        },
        {
          title: 'Actionable alerts',
          description:
            'Alert only when the condition requires a response.',
        },
        {
          title: 'AI-specific signals',
          description:
            'Monitor technical health and AI behavior together.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include monitoring only CPU and memory, using averages instead of latency percentiles, creating alerts for every metric, ignoring business outcomes, failing to monitor dependencies, exposing secrets in telemetry, and assuming auto scaling eliminates the need for monitoring.',
      highlights: [
        {
          title: 'Infrastructure-only monitoring',
          description:
            'Healthy CPU and memory do not guarantee a healthy customer experience.',
        },
        {
          title: 'Average-only latency',
          description:
            'Average latency can hide severe problems affecting a smaller percentage of users.',
        },
        {
          title: 'Alert everything',
          description:
            'Too many alerts create noise and reduce response quality.',
        },
        {
          title: 'No dependency monitoring',
          description:
            'Application health cannot be understood without visibility into critical downstream systems.',
        },
      ],
    },

    {
      title: 'Monitoring for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, monitoring is a cross-functional reliability capability. The leader should ensure teams agree on critical user journeys, SLIs, SLOs, ownership, alert severity, incident escalation, dashboard standards, and operational reporting. Monitoring should produce decision-quality information rather than simply more telemetry.',
      highlights: [
        {
          title: 'Reliability governance',
          description:
            'Define what system health means and how it will be measured.',
        },
        {
          title: 'Operational ownership',
          description:
            'Ensure every important alert and production service has a clear owner.',
        },
        {
          title: 'Decision-quality telemetry',
          description:
            'Prioritize signals that help teams make operational and product decisions.',
        },
        {
          title: 'Executive communication',
          description:
            'Translate technical monitoring signals into customer impact, reliability, and business risk.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
    'observability',
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
    'systems',
    'system-design',
    'distributed-systems',
    'scalability',
    'capacity-planning',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default monitoringKnowledge
