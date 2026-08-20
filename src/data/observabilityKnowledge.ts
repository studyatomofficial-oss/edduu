import type { KnowledgeDefinition } from './knowledge'

export const observabilityKnowledge: KnowledgeDefinition = {
  technologyId: 'observability',
  slug: 'observability',
  title: 'Observability',
  summary:
    'Observability is the ability to understand the internal state and behavior of a system by examining the telemetry it produces, especially logs, metrics, and traces.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Observability?',
      content:
        'Observability is the ability to understand what is happening inside a running system from the information that system produces externally. In modern software, the primary sources of observability are logs, metrics, traces, and events. Observability helps teams move from simply detecting that something is wrong to understanding why it is wrong.',
      highlights: [
        {
          title: 'Observability',
          description:
            'The ability to understand internal system behavior from externally available telemetry.',
        },
        {
          title: 'Telemetry',
          description:
            'Operational data produced by a system, such as logs, metrics, traces, and events.',
        },
        {
          title: 'Diagnosis',
          description:
            'Determining the cause and impact of unexpected system behavior.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a car dashboard. The speedometer tells you how fast you are going, the fuel gauge tells you how much fuel remains, warning lights tell you that something may be wrong, and a mechanic can inspect detailed diagnostic information to understand the cause. Observability is like having all of these signals available for a software system.',
      highlights: [
        {
          title: 'Dashboard',
          description:
            'Represents the observability interface where system health is viewed.',
        },
        {
          title: 'Warning light',
          description:
            'Represents an alert or important health signal.',
        },
        {
          title: 'Diagnostic information',
          description:
            'Represents detailed logs, traces, and telemetry used for investigation.',
        },
      ],
    },

    {
      title: 'Observability vs Monitoring',
      content:
        'Monitoring primarily answers known questions such as whether CPU is high, whether errors increased, or whether a service is unavailable. Observability is broader: it helps engineers investigate unknown failure modes by connecting multiple telemetry signals and exploring system behavior.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Watching predefined signals and conditions to detect known problems.',
        },
        {
          title: 'Observability',
          description:
            'Using telemetry to investigate both known and previously unknown system behavior.',
        },
        {
          title: 'Unknown failure',
          description:
            'A problem whose exact cause was not anticipated when monitoring rules were created.',
        },
      ],
    },

    {
      title: 'Three Pillars of Observability',
      content:
        'The traditional observability model consists of logs, metrics, and traces. Each provides a different view of system behavior. Logs provide detailed events, metrics provide numerical trends, and traces show the path of individual operations across services.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Detailed records of application or infrastructure events.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements collected over time.',
        },
        {
          title: 'Traces',
          description:
            'End-to-end representations of requests across distributed components.',
        },
      ],
    },

    {
      title: 'Logs',
      content:
        'Logs record discrete events such as requests, errors, authentication events, deployment events, and background jobs. Structured logs make it easier for machines and humans to search, filter, aggregate, and correlate events.',
      highlights: [
        {
          title: 'Log event',
          description:
            'A recorded occurrence inside an application or infrastructure component.',
        },
        {
          title: 'Structured log',
          description:
            'A log represented using consistent machine-readable fields.',
        },
        {
          title: 'Log context',
          description:
            'Additional information such as request ID, user ID, service name, or deployment version that helps investigation.',
        },
      ],
    },

    {
      title: 'Metrics',
      content:
        'Metrics represent numerical measurements over time. Common observability metrics include request rate, error rate, latency, CPU usage, memory usage, queue depth, database connections, and business throughput.',
      highlights: [
        {
          title: 'Metric',
          description:
            'A numerical measurement representing some aspect of system behavior.',
        },
        {
          title: 'Counter',
          description:
            'A metric that generally increases as events occur.',
        },
        {
          title: 'Gauge',
          description:
            'A metric representing a value that can increase or decrease.',
        },
      ],
    },

    {
      title: 'Traces',
      content:
        'A distributed trace follows a single logical operation across services. Traces are especially useful in microservice architectures where one user request may call APIs, databases, caches, queues, and external providers.',
      highlights: [
        {
          title: 'Trace',
          description:
            'The complete representation of an operation across participating services.',
        },
        {
          title: 'Span',
          description:
            'A single unit of work within a trace.',
        },
        {
          title: 'Parent-child relationship',
          description:
            'The relationship showing how one operation caused or called another operation.',
        },
      ],
    },

    {
      title: 'Events',
      content:
        'Events can provide additional operational context about important state changes such as deployments, configuration changes, scaling events, failovers, feature-flag changes, or security actions. Correlating events with metrics and traces can significantly speed up diagnosis.',
      highlights: [
        {
          title: 'Operational event',
          description:
            'A meaningful state change in the system or infrastructure.',
        },
        {
          title: 'Deployment event',
          description:
            'A record showing that a new software version was released.',
        },
        {
          title: 'Configuration change',
          description:
            'A recorded modification to runtime configuration or infrastructure.',
        },
      ],
    },

    {
      title: 'Correlation',
      content:
        'Observability becomes much more powerful when logs, metrics, and traces can be connected. Correlation IDs, trace IDs, timestamps, service names, deployment versions, and other shared metadata allow teams to move from a high-level symptom to the specific request and component responsible.',
      highlights: [
        {
          title: 'Correlation ID',
          description:
            'An identifier used to connect related operations across system components.',
        },
        {
          title: 'Trace ID',
          description:
            'An identifier shared by spans belonging to the same distributed operation.',
        },
        {
          title: 'Correlation',
          description:
            'Connecting telemetry from different sources to understand the same system behavior.',
        },
      ],
    },

    {
      title: 'Cardinality',
      content:
        'Cardinality describes the number of unique values associated with a telemetry dimension. High-cardinality data can be extremely useful for debugging but can also increase storage, processing, and query costs, especially in metrics systems.',
      highlights: [
        {
          title: 'Cardinality',
          description:
            'The number of unique values represented by a telemetry dimension.',
        },
        {
          title: 'High cardinality',
          description:
            'A dimension containing a very large number of unique values.',
        },
        {
          title: 'Telemetry cost',
          description:
            'The storage and processing expense associated with collecting and querying observability data.',
        },
      ],
    },

    {
      title: 'Golden Signals',
      content:
        'A commonly used set of high-value production signals is latency, traffic, errors, and saturation. These signals provide a practical starting point for understanding service health from the customer and infrastructure perspectives.',
      highlights: [
        {
          title: 'Latency',
          description:
            'How long operations take.',
        },
        {
          title: 'Traffic',
          description:
            'How much demand is reaching the service.',
        },
        {
          title: 'Errors',
          description:
            'How frequently requests or operations fail.',
        },
        {
          title: 'Saturation',
          description:
            'How close the system is to exhausting a resource or capacity limit.',
        },
      ],
    },

    {
      title: 'RED Method',
      content:
        'The RED method focuses on Request Rate, Errors, and Duration. It is particularly useful for monitoring request-driven services and APIs from the perspective of service behavior.',
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
            'The time required to process requests.',
        },
      ],
    },

    {
      title: 'USE Method',
      content:
        'The USE method focuses on Utilization, Saturation, and Errors. It is commonly applied to infrastructure resources such as CPU, memory, storage, and network.',
      highlights: [
        {
          title: 'Utilization',
          description:
            'The percentage of a resource currently being consumed.',
        },
        {
          title: 'Saturation',
          description:
            'The amount of queued or delayed work indicating that a resource is approaching its limit.',
        },
        {
          title: 'Errors',
          description:
            'Resource-level failures or error conditions.',
        },
      ],
    },

    {
      title: 'Telemetry Pipeline',
      content:
        'A telemetry pipeline collects signals from applications and infrastructure, processes or enriches them, transports them to observability backends, stores them, and makes them available for dashboards, queries, alerts, and investigations.',
      highlights: [
        {
          title: 'Collection',
          description:
            'Capturing telemetry from applications, infrastructure, and services.',
        },
        {
          title: 'Processing',
          description:
            'Transforming, filtering, enriching, sampling, or aggregating telemetry.',
        },
        {
          title: 'Backend',
          description:
            'The system that stores and provides access to telemetry.',
        },
      ],
    },

    {
      title: 'Sampling',
      content:
        'Sampling reduces the amount of telemetry retained or processed. It can control cost and storage requirements, but excessive sampling can remove information needed to investigate rare or important failures.',
      highlights: [
        {
          title: 'Sampling',
          description:
            'Selecting a subset of telemetry instead of retaining every event or trace.',
        },
        {
          title: 'Head sampling',
          description:
            'Making a sampling decision near the beginning of trace processing.',
        },
        {
          title: 'Tail sampling',
          description:
            'Making a sampling decision after observing more information about the complete trace.',
        },
      ],
    },

    {
      title: 'Observability for Microservices',
      content:
        'Microservice systems create additional observability requirements because a single user request may cross many independently deployed services. Teams need consistent telemetry formats, trace propagation, service identity, dependency visibility, and centralized analysis.',
      highlights: [
        {
          title: 'Service map',
          description:
            'A visual representation of services and their communication relationships.',
        },
        {
          title: 'Dependency',
          description:
            'A downstream service or resource required to complete an operation.',
        },
        {
          title: 'Distributed request',
          description:
            'A logical user operation that crosses multiple services or infrastructure components.',
        },
      ],
    },

    {
      title: 'Observability for APIs',
      content:
        'API observability should include request volume, status-code distribution, latency, authentication failures, dependency latency, payload characteristics where appropriate, and business outcomes. Monitoring only HTTP availability is insufficient.',
      highlights: [
        {
          title: 'Request rate',
          description:
            'The number of API requests received over time.',
        },
        {
          title: 'Error rate',
          description:
            'The percentage or number of requests that fail.',
        },
        {
          title: 'Endpoint latency',
          description:
            'The time required for a specific API endpoint to respond.',
        },
      ],
    },

    {
      title: 'Observability for Databases',
      content:
        'Database observability should cover query latency, query rate, connections, locks, CPU, memory, storage, I/O, replication lag, cache behavior, errors, and slow queries. Database telemetry should be correlated with application traces where possible.',
      highlights: [
        {
          title: 'Query latency',
          description:
            'The time required to execute database queries.',
        },
        {
          title: 'Connection utilization',
          description:
            'How much of the database connection capacity is currently consumed.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between changes made by a primary data source and their availability on a replica.',
        },
      ],
    },

    {
      title: 'Observability for Kubernetes',
      content:
        'Kubernetes observability spans cluster health, nodes, pods, containers, workloads, deployments, resource utilization, scheduling, restarts, events, network behavior, and application telemetry. Application-level observability should complement platform-level signals.',
      highlights: [
        {
          title: 'Pod restart',
          description:
            'A restart of a Kubernetes container or pod workload.',
        },
        {
          title: 'Node health',
          description:
            'The operational condition of a Kubernetes worker node.',
        },
        {
          title: 'Cluster telemetry',
          description:
            'Operational signals describing the Kubernetes cluster and its workloads.',
        },
      ],
    },

    {
      title: 'Observability and Alerting',
      content:
        'Observability provides the information needed to understand the system; alerting turns selected signals into actionable notifications. Not every metric should generate an alert. Alerts should correspond to conditions where human or automated intervention is justified.',
      highlights: [
        {
          title: 'Alert threshold',
          description:
            'A defined condition that causes an alert to trigger.',
        },
        {
          title: 'Alert routing',
          description:
            'Sending an alert to the appropriate team or responder.',
        },
        {
          title: 'Actionability',
          description:
            'Whether an alert provides a clear reason and need for intervention.',
        },
      ],
    },

    {
      title: 'Observability and SLI / SLO',
      content:
        'Observability provides the measurements needed to calculate Service Level Indicators. Those indicators can then be compared with Service Level Objectives to determine whether the service is meeting its reliability targets.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator of actual service behavior.',
        },
        {
          title: 'SLO',
          description:
            'A target for an SLI over a defined period.',
        },
        {
          title: 'SLO measurement',
          description:
            'Using production telemetry to determine whether reliability objectives are being met.',
        },
      ],
    },

    {
      title: 'Observability and Incidents',
      content:
        'During an incident, observability helps responders establish what changed, determine customer impact, identify affected components, isolate the failure, validate mitigation, and confirm recovery. A well-designed telemetry system reduces time spent searching for evidence.',
      highlights: [
        {
          title: 'Incident investigation',
          description:
            'Using telemetry to understand an active production problem.',
        },
        {
          title: 'Blast radius',
          description:
            'The scope of functionality, users, or services affected by a failure.',
        },
        {
          title: 'Recovery validation',
          description:
            'Using telemetry to confirm that mitigation has restored acceptable service behavior.',
        },
      ],
    },

    {
      title: 'Mean Time to Detect',
      content:
        'Mean Time to Detect, or MTTD, measures how quickly teams identify a production problem after it begins. Better telemetry and useful alerts can reduce MTTD.',
      highlights: [
        {
          title: 'MTTD',
          description:
            'Mean Time to Detect: average time required to detect an incident.',
        },
        {
          title: 'Detection signal',
          description:
            'A telemetry condition that indicates something may be wrong.',
        },
        {
          title: 'Detection delay',
          description:
            'The time between incident start and incident recognition.',
        },
      ],
    },

    {
      title: 'Mean Time to Recovery',
      content:
        'Mean Time to Recovery, or MTTR, measures how quickly service is restored after a problem. Observability can reduce MTTR by helping responders identify the affected component and validate recovery more quickly.',
      highlights: [
        {
          title: 'MTTR',
          description:
            'Mean Time to Recovery: average time required to restore acceptable service after an incident.',
        },
        {
          title: 'Mitigation',
          description:
            'An action that reduces customer impact while investigation continues.',
        },
        {
          title: 'Recovery verification',
          description:
            'Confirming through telemetry that the system has returned to acceptable behavior.',
        },
      ],
    },

    {
      title: 'Observability Data Quality',
      content:
        'Telemetry is only useful when it is accurate, consistent, timely, and appropriately contextualized. Missing timestamps, inconsistent service names, incorrect trace propagation, excessive noise, or missing business context can make observability difficult to use.',
      highlights: [
        {
          title: 'Telemetry quality',
          description:
            'The accuracy, completeness, consistency, and usefulness of collected telemetry.',
        },
        {
          title: 'Context',
          description:
            'Metadata that makes telemetry meaningful for investigation.',
        },
        {
          title: 'Data integrity',
          description:
            'Confidence that telemetry correctly represents actual system behavior.',
        },
      ],
    },

    {
      title: 'Observability Costs',
      content:
        'Observability can become expensive because logs, metrics, and traces generate significant storage, ingestion, processing, and query workloads. Teams should define retention, sampling, aggregation, cardinality controls, and data tiers according to operational value.',
      highlights: [
        {
          title: 'Ingestion cost',
          description:
            'The cost associated with receiving and processing telemetry.',
        },
        {
          title: 'Retention',
          description:
            'How long telemetry data is stored.',
        },
        {
          title: 'Cost optimization',
          description:
            'Reducing observability expense while preserving the information needed for reliability and investigation.',
        },
      ],
    },

    {
      title: 'Observability and Security',
      content:
        'Observability systems can contain sensitive information. Logs and traces may accidentally capture tokens, passwords, personal information, request bodies, or other confidential data. Telemetry pipelines therefore need access controls, appropriate filtering, retention policies, and secure storage.',
      highlights: [
        {
          title: 'Sensitive telemetry',
          description:
            'Operational data containing information that should not be broadly exposed.',
        },
        {
          title: 'Redaction',
          description:
            'Removing or masking sensitive information before telemetry is stored or displayed.',
        },
        {
          title: 'Telemetry access control',
          description:
            'Restricting who can view or modify observability data.',
        },
      ],
    },

    {
      title: 'OpenTelemetry',
      content:
        'OpenTelemetry is an open-source observability framework and ecosystem for generating, collecting, and exporting telemetry such as traces, metrics, and logs. It provides common instrumentation and telemetry concepts that can reduce vendor-specific coupling.',
      highlights: [
        {
          title: 'OpenTelemetry',
          description:
            'An open-source framework and ecosystem for collecting and exporting observability telemetry.',
        },
        {
          title: 'Instrumentation',
          description:
            'Adding telemetry generation to an application or service.',
        },
        {
          title: 'Exporter',
          description:
            'A component that sends telemetry to an observability backend.',
        },
      ],
    },

    {
      title: 'Prometheus',
      content:
        'Prometheus is a monitoring and metrics platform widely used in cloud-native environments. It collects time-series metrics and supports querying and alerting workflows.',
      highlights: [
        {
          title: 'Prometheus',
          description:
            'A monitoring and time-series metrics system commonly used for cloud-native applications.',
        },
        {
          title: 'Time series',
          description:
            'A sequence of measurements associated with timestamps and labels.',
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
        'Grafana is a visualization and observability platform used to create dashboards, explore telemetry, and support monitoring workflows across multiple data sources.',
      highlights: [
        {
          title: 'Grafana',
          description:
            'A platform for visualizing and exploring operational data.',
        },
        {
          title: 'Dashboard',
          description:
            'A collection of visualizations showing selected system signals.',
        },
        {
          title: 'Data source',
          description:
            'A backend from which Grafana retrieves metrics, logs, traces, or other data.',
        },
      ],
    },

    {
      title: 'Observability Architecture',
      content:
        'A typical architecture includes application instrumentation, telemetry collection, optional processing and enrichment, storage backends, dashboards, alerting, and incident-management integrations. OpenTelemetry can provide a common collection layer while specialized backends handle specific signal types.',
      highlights: [
        {
          title: 'Instrumentation layer',
          description:
            'The application and infrastructure components that generate telemetry.',
        },
        {
          title: 'Collection layer',
          description:
            'The infrastructure that receives and processes telemetry.',
        },
        {
          title: 'Visualization layer',
          description:
            'Dashboards and exploration tools used by engineers and operators.',
        },
      ],
    },

    {
      title: 'AI Observability',
      content:
        'AI applications require traditional system observability plus AI-specific telemetry. Teams may need to track model latency, token usage, model/provider errors, prompt and response characteristics where safe, retrieval latency, retrieval quality, hallucination or evaluation signals, cost, and fallback behavior.',
      highlights: [
        {
          title: 'Model telemetry',
          description:
            'Operational measurements describing model requests and responses.',
        },
        {
          title: 'Token usage',
          description:
            'The amount of model input and output processing consumed.',
        },
        {
          title: 'AI quality telemetry',
          description:
            'Signals used to understand output correctness, relevance, safety, or task success.',
        },
      ],
    },

    {
      title: 'AI Voice Observability',
      content:
        'For an AI voice platform, observability should connect the telephony call, speech-to-text, language model, text-to-speech, application services, and post-call systems. A trace or correlation identifier should allow an operator to investigate an individual call across the complete pipeline.',
      highlights: [
        {
          title: 'Call trace',
          description:
            'Telemetry representing the end-to-end processing of a voice interaction.',
        },
        {
          title: 'Provider latency',
          description:
            'Time spent waiting for external telephony, speech, or model providers.',
        },
        {
          title: 'Call outcome',
          description:
            'The final operational or business result of a voice interaction.',
        },
      ],
    },

    {
      title: 'RAG Observability',
      content:
        'RAG observability should cover document ingestion, embedding generation, vector search, retrieval latency, retrieved context, reranking where applicable, model generation, citations, answer quality, and failures. This helps distinguish infrastructure problems from retrieval or generation-quality problems.',
      highlights: [
        {
          title: 'Retrieval trace',
          description:
            'A trace showing the retrieval steps involved in generating an answer.',
        },
        {
          title: 'Context visibility',
          description:
            'The ability to inspect which knowledge was selected for generation, subject to privacy and security controls.',
        },
        {
          title: 'Generation telemetry',
          description:
            'Signals describing model generation behavior such as latency, token usage, and errors.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is observability? Monitoring vs observability? What are the three pillars? How would you observe a microservices system? What is distributed tracing? What are RED and USE? What is OpenTelemetry? How do Prometheus and Grafana fit together? How would you design observability for an AI system?',
      highlights: [
        {
          title: 'Observability definition',
          description:
            'Explain the difference between detecting known conditions and investigating system behavior.',
        },
        {
          title: 'Three pillars',
          description:
            'Explain logs, metrics, and traces and when each is useful.',
        },
        {
          title: 'Distributed systems',
          description:
            'Explain correlation IDs, trace context, service maps, and dependency visibility.',
        },
        {
          title: 'AI observability',
          description:
            'Explain model, retrieval, provider, latency, quality, and cost telemetry.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I think of observability as the ability to understand what is happening inside a production system from its telemetry. I would start with customer-facing SLIs, then collect logs, metrics, and distributed traces with consistent correlation metadata. I would build dashboards for important service and business signals and create alerts only for actionable conditions. During incidents, I would use traces to locate latency or dependency failures, logs for detailed events, and metrics for trends and impact. For AI systems I would additionally track model latency, token usage, provider health, retrieval quality, and AI-specific quality signals.”',
      highlights: [
        {
          title: 'Start with customer impact',
          description:
            'Choose telemetry around the outcomes users and the business actually care about.',
        },
        {
          title: 'Correlate signals',
          description:
            'Connect logs, metrics, and traces so responders can move from symptom to cause.',
        },
        {
          title: 'AI-aware observability',
          description:
            'Include both infrastructure health and AI behavior and quality.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating observability as simply adding more logs, creating dashboards without actionable signals, monitoring infrastructure but not customer experience, ignoring trace propagation, allowing unlimited telemetry cardinality, exposing sensitive information in logs, and measuring AI systems only by HTTP success rates.',
      highlights: [
        {
          title: 'More logs equals observability',
          description:
            'Large volumes of unstructured logs do not automatically create useful system visibility.',
        },
        {
          title: 'Dashboard overload',
          description:
            'Too many low-value visualizations make important signals harder to identify.',
        },
        {
          title: 'No correlation',
          description:
            'Unconnected telemetry makes distributed-system investigation slower.',
        },
        {
          title: 'HTTP success equals AI success',
          description:
            'A successful API response does not prove that an AI system produced a correct or useful result.',
        },
      ],
    },

    {
      title: 'Observability for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, observability is not just a tooling decision. The leader must define what reliability and customer success mean, align teams on SLIs and SLOs, ensure service ownership, prioritize telemetry investments, manage observability cost, and use operational data to drive engineering and product decisions.',
      highlights: [
        {
          title: 'Reliability governance',
          description:
            'Establishing measurable expectations for production health and service reliability.',
        },
        {
          title: 'Operational visibility',
          description:
            'Ensuring teams have the information required to detect, diagnose, and recover from problems.',
        },
        {
          title: 'Cost governance',
          description:
            'Balancing telemetry coverage with storage, ingestion, and query costs.',
        },
        {
          title: 'Executive reporting',
          description:
            'Converting technical telemetry into business-level reliability and customer-impact information.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
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
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'cloudflare',
  ],
}

export default observabilityKnowledge
