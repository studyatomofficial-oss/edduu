import type { KnowledgeDefinition } from './knowledge'

export const loggingKnowledge: KnowledgeDefinition = {
  technologyId: 'logging',
  slug: 'logging',
  title: 'Logging',
  summary:
    'Logging is the practice of recording structured information about application, infrastructure, security, and business events so teams can understand system behavior, troubleshoot failures, investigate incidents, and maintain operational visibility.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Logging?',
      content:
        'Logging means recording events that happen inside a software system. A log can describe a request, an error, an authentication event, a database operation, a background job, a deployment, or another important system activity. Logs provide detailed evidence that can be used during debugging and production operations.',
      highlights: [
        {
          title: 'Log',
          description:
            'A recorded representation of an event or activity in a system.',
        },
        {
          title: 'Log event',
          description:
            'A specific occurrence recorded by an application or infrastructure component.',
        },
        {
          title: 'Log message',
          description:
            'Human-readable or structured information describing an event.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about CCTV footage in a building. The camera records what happened so that someone can investigate an event later. Logs work similarly for software: they provide a historical record of important system activity. A good log should tell an engineer what happened, where it happened, when it happened, and enough context to investigate it.',
      highlights: [
        {
          title: 'CCTV camera',
          description:
            'Represents the software component generating logs.',
        },
        {
          title: 'Recorded footage',
          description:
            'Represents stored log events.',
        },
        {
          title: 'Investigation',
          description:
            'Represents using logs to understand an incident or system behavior.',
        },
      ],
    },

    {
      title: 'Why Logging Matters',
      content:
        'Production systems are too complex to understand only by looking at source code. Logs provide evidence about what actually happened at runtime. They help engineers troubleshoot failures, investigate incidents, understand user journeys, validate deployments, detect security events, and support operational decisions.',
      highlights: [
        {
          title: 'Troubleshooting',
          description:
            'Using recorded events to identify what went wrong.',
        },
        {
          title: 'Incident investigation',
          description:
            'Using logs to reconstruct events during a production incident.',
        },
        {
          title: 'Auditability',
          description:
            'Maintaining evidence of important actions and events.',
        },
      ],
    },

    {
      title: 'Logging vs Monitoring',
      content:
        'Monitoring focuses on measuring predefined signals and detecting abnormal conditions. Logging records detailed events. Monitoring may tell you that error rate increased, while logs can help explain which requests failed and what the application reported at the time.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Detects conditions using measurements and predefined rules.',
        },
        {
          title: 'Logging',
          description:
            'Records detailed events that provide investigation context.',
        },
        {
          title: 'Relationship',
          description:
            'Monitoring detects symptoms while logs often provide detailed evidence for diagnosis.',
        },
      ],
    },

    {
      title: 'Logging vs Observability',
      content:
        'Logging is one of the major sources of observability telemetry. Observability combines logs with metrics, traces, and other signals to provide a broader understanding of system behavior. Logs are valuable, but logs alone do not provide complete observability.',
      highlights: [
        {
          title: 'Telemetry',
          description:
            'Operational information produced by a running system.',
        },
        {
          title: 'Observability',
          description:
            'The ability to understand system behavior from its telemetry.',
        },
        {
          title: 'Three pillars',
          description:
            'Logs, metrics, and traces are commonly used together as observability signals.',
        },
      ],
    },

    {
      title: 'Log Levels',
      content:
        'Log levels classify events by importance and severity. Common levels include DEBUG, INFO, WARN, ERROR, and sometimes FATAL. Teams should define consistent meanings so that logs can be filtered and interpreted reliably.',
      highlights: [
        {
          title: 'DEBUG',
          description:
            'Detailed information primarily useful during development or troubleshooting.',
        },
        {
          title: 'INFO',
          description:
            'Normal operational information about important system activity.',
        },
        {
          title: 'WARN',
          description:
            'A potentially problematic condition that does not necessarily indicate immediate failure.',
        },
        {
          title: 'ERROR',
          description:
            'A failure or abnormal condition that requires investigation or handling.',
        },
      ],
    },

    {
      title: 'Structured Logging',
      content:
        'Structured logging records events using consistent fields rather than relying only on free-form text. JSON is a common format because machines can parse it easily. Structured logs make searching, filtering, aggregation, correlation, and automation much easier.',
      highlights: [
        {
          title: 'Structured log',
          description:
            'A log event represented using consistent machine-readable fields.',
        },
        {
          title: 'JSON log',
          description:
            'A structured log represented using JSON fields and values.',
        },
        {
          title: 'Searchability',
          description:
            'The ability to filter and query logs using their structured fields.',
        },
      ],
    },

    {
      title: 'Unstructured vs Structured Logs',
      content:
        'An unstructured log might contain a sentence such as “Payment failed for user 123.” A structured log can represent the same event using fields such as event type, user identifier, payment provider, status, timestamp, and correlation ID. Structured data is easier to query consistently at scale.',
      highlights: [
        {
          title: 'Unstructured',
          description:
            'Free-form text that may be difficult to query consistently.',
        },
        {
          title: 'Structured',
          description:
            'Consistent fields designed for machine processing and analysis.',
        },
        {
          title: 'Schema',
          description:
            'The expected structure and meaning of fields in a log event.',
        },
      ],
    },

    {
      title: 'Essential Log Fields',
      content:
        'Production logs should normally include enough context to understand the event. Useful fields can include timestamp, severity, service name, environment, event name, request ID, trace ID, operation, status, and relevant non-sensitive identifiers.',
      highlights: [
        {
          title: 'Timestamp',
          description:
            'The time at which the event occurred or was recorded.',
        },
        {
          title: 'Service name',
          description:
            'The application or component that generated the event.',
        },
        {
          title: 'Trace ID',
          description:
            'An identifier that connects the log with a distributed request trace.',
        },
        {
          title: 'Request ID',
          description:
            'An identifier used to correlate events belonging to a particular request.',
        },
      ],
    },

    {
      title: 'Correlation IDs',
      content:
        'A correlation ID allows related events to be connected across multiple components. In a distributed system, the same logical customer operation may produce logs in an API service, payment service, database layer, and notification service. A shared correlation identifier makes investigation much easier.',
      highlights: [
        {
          title: 'Correlation ID',
          description:
            'An identifier shared across related operations for investigation and tracing.',
        },
        {
          title: 'Request correlation',
          description:
            'Connecting logs generated by the same request or business operation.',
        },
        {
          title: 'Trace correlation',
          description:
            'Connecting logs with distributed tracing information.',
        },
      ],
    },

    {
      title: 'Timestamps',
      content:
        'Accurate timestamps are essential for reconstructing production incidents. Distributed systems should use consistent time handling and sufficient precision so events from different services can be ordered and correlated.',
      highlights: [
        {
          title: 'Timestamp',
          description:
            'The recorded time associated with a log event.',
        },
        {
          title: 'Time synchronization',
          description:
            'Keeping system clocks sufficiently aligned across infrastructure.',
        },
        {
          title: 'Event ordering',
          description:
            'Determining the sequence in which related events occurred.',
        },
      ],
    },

    {
      title: 'Application Logging',
      content:
        'Application logs should capture important business and technical events without creating excessive noise. Examples include request lifecycle events, authentication outcomes, external API calls, job processing, validation failures, state transitions, and unexpected exceptions.',
      highlights: [
        {
          title: 'Application event',
          description:
            'An event generated by application logic.',
        },
        {
          title: 'Business event',
          description:
            'An event representing meaningful business activity.',
        },
        {
          title: 'Exception',
          description:
            'An abnormal execution condition that may indicate a failure.',
        },
      ],
    },

    {
      title: 'Infrastructure Logging',
      content:
        'Infrastructure components such as operating systems, containers, Kubernetes, load balancers, databases, and cloud services also generate logs. These logs can reveal resource failures, network problems, deployment issues, scheduling failures, and infrastructure events.',
      highlights: [
        {
          title: 'Infrastructure log',
          description:
            'A log generated by infrastructure or platform components.',
        },
        {
          title: 'Container log',
          description:
            'Runtime output produced by a containerized application or process.',
        },
        {
          title: 'Platform event',
          description:
            'An event generated by an infrastructure platform such as Kubernetes or a cloud provider.',
        },
      ],
    },

    {
      title: 'Access and Security Logs',
      content:
        'Security-sensitive events should be logged appropriately. Examples include authentication attempts, authorization failures, privilege changes, credential changes, configuration changes, suspicious activity, and administrative actions. Security logs should be protected from unauthorized modification or deletion.',
      highlights: [
        {
          title: 'Authentication event',
          description:
            'An event related to establishing or rejecting user or service identity.',
        },
        {
          title: 'Authorization event',
          description:
            'An event showing whether access to a protected resource was allowed or denied.',
        },
        {
          title: 'Administrative action',
          description:
            'A privileged operation performed on a system or resource.',
        },
      ],
    },

    {
      title: 'Audit Logging',
      content:
        'Audit logging records important actions that need accountability or investigation. Audit records should provide sufficient information to determine who performed an action, what happened, when it happened, and what resource or operation was affected.',
      highlights: [
        {
          title: 'Audit log',
          description:
            'A record of an action maintained for accountability, security, or compliance purposes.',
        },
        {
          title: 'Actor',
          description:
            'The user, service, or system responsible for an action.',
        },
        {
          title: 'Resource',
          description:
            'The object or system component affected by an action.',
        },
      ],
    },

    {
      title: 'Sensitive Data in Logs',
      content:
        'Logs can accidentally become a security risk if applications record passwords, API keys, access tokens, private keys, payment information, personal data, or other confidential information. Logging should be designed to minimize sensitive data and apply masking or redaction where appropriate.',
      highlights: [
        {
          title: 'Secret',
          description:
            'Sensitive credential material such as passwords, tokens, or private keys.',
        },
        {
          title: 'Redaction',
          description:
            'Removing or masking sensitive information before it is stored in logs.',
        },
        {
          title: 'Data minimization',
          description:
            'Recording only the information necessary for operational or security purposes.',
        },
      ],
    },

    {
      title: 'Log Retention',
      content:
        'Log retention defines how long logs are stored. Retention should balance troubleshooting needs, security requirements, compliance obligations, storage cost, and privacy considerations. Not every log needs to be retained for the same period.',
      highlights: [
        {
          title: 'Retention',
          description:
            'The period for which logs are preserved.',
        },
        {
          title: 'Hot storage',
          description:
            'Storage optimized for fast access to recent logs.',
        },
        {
          title: 'Cold storage',
          description:
            'Lower-cost storage used for older data that is accessed less frequently.',
        },
      ],
    },

    {
      title: 'Log Aggregation',
      content:
        'In distributed systems, logs are generated by many machines and services. Centralized log aggregation collects them into a common platform so engineers can search across services instead of connecting to individual servers.',
      highlights: [
        {
          title: 'Log aggregation',
          description:
            'Collecting logs from multiple sources into a centralized system.',
        },
        {
          title: 'Centralized logging',
          description:
            'A logging architecture where operational logs can be searched from a common platform.',
        },
        {
          title: 'Log collector',
          description:
            'A component responsible for receiving, processing, or forwarding logs.',
        },
      ],
    },

    {
      title: 'Log Pipeline',
      content:
        'A production log pipeline commonly includes log generation, collection, parsing, enrichment, filtering, transport, storage, indexing, and querying. Each stage can affect reliability, latency, cost, and data quality.',
      highlights: [
        {
          title: 'Collection',
          description:
            'Receiving logs from applications and infrastructure.',
        },
        {
          title: 'Parsing',
          description:
            'Extracting structured fields from log data.',
        },
        {
          title: 'Enrichment',
          description:
            'Adding useful context such as environment, service, region, or deployment version.',
        },
        {
          title: 'Indexing',
          description:
            'Organizing log data so searches and queries can be performed efficiently.',
        },
      ],
    },

    {
      title: 'Log Search',
      content:
        'Searchable logs should allow engineers to filter by time, service, severity, environment, request ID, trace ID, error type, user-safe identifiers, and other useful fields. Good field consistency is more valuable than simply storing large amounts of text.',
      highlights: [
        {
          title: 'Filter',
          description:
            'A condition used to narrow log results.',
        },
        {
          title: 'Query',
          description:
            'A structured request for finding relevant log events.',
        },
        {
          title: 'Search context',
          description:
            'The information used to narrow investigation to the relevant service, request, or time window.',
        },
      ],
    },

    {
      title: 'Logging and Distributed Systems',
      content:
        'Distributed systems require consistent logging conventions because one user operation can generate events across many services. Standard service names, event names, timestamps, request IDs, and trace IDs help teams reconstruct the complete flow.',
      highlights: [
        {
          title: 'Distributed logging',
          description:
            'Logging across multiple services participating in a distributed operation.',
        },
        {
          title: 'Trace context',
          description:
            'Metadata that connects events across a distributed request.',
        },
        {
          title: 'Service identity',
          description:
            'A consistent identifier representing the service that produced a log.',
        },
      ],
    },

    {
      title: 'Logging and Errors',
      content:
        'Error logs should contain enough context to understand the failure without exposing sensitive information. A useful error log can include error type, operation, service, dependency, request or trace ID, safe parameters, and deployment version.',
      highlights: [
        {
          title: 'Error context',
          description:
            'Additional information that helps explain why an error occurred.',
        },
        {
          title: 'Stack trace',
          description:
            'Information showing the sequence of code execution associated with an exception.',
        },
        {
          title: 'Error classification',
          description:
            'Categorizing errors by type, source, severity, or expected response.',
        },
      ],
    },

    {
      title: 'Logging and Deployments',
      content:
        'Deployment events should be visible in logs and observability systems. Recording deployment version, environment, timestamp, service, and change identifier allows teams to correlate production problems with recent releases.',
      highlights: [
        {
          title: 'Deployment marker',
          description:
            'A telemetry event indicating that a new software version was released.',
        },
        {
          title: 'Version',
          description:
            'The application or deployment version associated with a log event.',
        },
        {
          title: 'Change correlation',
          description:
            'Connecting production behavior with a particular release or configuration change.',
        },
      ],
    },

    {
      title: 'Logging and Alerting',
      content:
        'Logs can support alerts when specific patterns or conditions occur, but log-based alerts should be designed carefully. High-volume error messages may create noisy alerts, while important business or security events may require immediate notification.',
      highlights: [
        {
          title: 'Log-based alert',
          description:
            'An alert triggered by a pattern or condition detected in logs.',
        },
        {
          title: 'Noise',
          description:
            'High-volume or low-value events that reduce the usefulness of operational signals.',
        },
        {
          title: 'Actionable signal',
          description:
            'A signal that indicates a condition requiring investigation or intervention.',
        },
      ],
    },

    {
      title: 'Logging and Incidents',
      content:
        'During an incident, logs help establish what happened, which components were involved, what requests failed, what changed recently, and whether mitigation worked. Logs should be searchable quickly and correlated with metrics and traces.',
      highlights: [
        {
          title: 'Incident timeline',
          description:
            'A chronological reconstruction of important events during an incident.',
        },
        {
          title: 'Forensic evidence',
          description:
            'Recorded information that helps investigate what occurred.',
        },
        {
          title: 'Recovery evidence',
          description:
            'Logs showing whether the system returned to expected behavior after mitigation.',
        },
      ],
    },

    {
      title: 'Logging and Root Cause Analysis',
      content:
        'Root Cause Analysis uses logs together with metrics, traces, deployment history, infrastructure events, and other evidence. Logs rarely prove a root cause by themselves; they are one source of evidence in the investigation.',
      highlights: [
        {
          title: 'Root Cause Analysis',
          description:
            'A structured investigation into why a production problem occurred.',
        },
        {
          title: 'Evidence',
          description:
            'Information used to support or reject a hypothesis about an incident.',
        },
        {
          title: 'Timeline reconstruction',
          description:
            'Using timestamps and correlated events to understand the sequence of actions.',
        },
      ],
    },

    {
      title: 'Logging in Kubernetes',
      content:
        'Kubernetes applications commonly produce container logs while the platform itself produces events and infrastructure telemetry. Centralized collection is important because pods can be restarted, rescheduled, or removed, making local-only logs unreliable for long-term investigation.',
      highlights: [
        {
          title: 'Container log',
          description:
            'Runtime output produced by a container.',
        },
        {
          title: 'Kubernetes event',
          description:
            'A platform-generated record describing a significant cluster or workload event.',
        },
        {
          title: 'Centralized collection',
          description:
            'Forwarding logs away from individual ephemeral workloads into durable storage.',
        },
      ],
    },

    {
      title: 'Logging in Cloud Environments',
      content:
        'Cloud platforms generate logs for applications, infrastructure, identity, networking, storage, and managed services. A production strategy should combine application logs with relevant cloud provider logs so teams can investigate issues across the full stack.',
      highlights: [
        {
          title: 'Cloud audit log',
          description:
            'A record of actions performed against cloud resources.',
        },
        {
          title: 'Application log',
          description:
            'A record generated by application code running in the cloud.',
        },
        {
          title: 'Infrastructure log',
          description:
            'A record generated by infrastructure or managed cloud services.',
        },
      ],
    },

    {
      title: 'Logging Costs',
      content:
        'Logs can become one of the most expensive observability signals because applications can generate large volumes of text. Cost control techniques include appropriate log levels, filtering, sampling, aggregation, retention policies, compression, and tiered storage.',
      highlights: [
        {
          title: 'Log volume',
          description:
            'The amount of log data generated over a period of time.',
        },
        {
          title: 'Log sampling',
          description:
            'Keeping a selected subset of repetitive or high-volume logs.',
        },
        {
          title: 'Retention optimization',
          description:
            'Adjusting storage duration according to operational value and requirements.',
        },
      ],
    },

    {
      title: 'Logging in AI Systems',
      content:
        'AI systems need careful logging because requests may contain prompts, retrieved documents, user information, model responses, provider metadata, and other potentially sensitive information. AI logging should capture operationally useful metadata while applying privacy, security, and data-minimization controls.',
      highlights: [
        {
          title: 'Model request',
          description:
            'A request sent to an AI model or provider.',
        },
        {
          title: 'Model response',
          description:
            'The output returned by the AI model.',
        },
        {
          title: 'Prompt logging',
          description:
            'Recording prompt-related information for debugging or evaluation, subject to security and privacy controls.',
        },
      ],
    },

    {
      title: 'AI Voice Logging',
      content:
        'For an AI voice platform, logs can record call IDs, provider events, session states, speech recognition errors, model errors, text-to-speech failures, webhook events, call outcomes, and safe operational metadata. Raw conversation content should only be retained and accessed according to explicit privacy and business requirements.',
      highlights: [
        {
          title: 'Call ID',
          description:
            'A unique identifier used to correlate events belonging to a voice interaction.',
        },
        {
          title: 'Provider event',
          description:
            'An event generated by telephony, speech, or AI providers.',
        },
        {
          title: 'Call outcome',
          description:
            'The final operational or business result associated with the call.',
        },
      ],
    },

    {
      title: 'RAG Logging',
      content:
        'RAG systems can log ingestion events, document identifiers, embedding operations, retrieval results metadata, model requests, failures, latency, and evaluation signals. Retrieved content and prompts should be handled carefully because they may contain confidential information.',
      highlights: [
        {
          title: 'Document ID',
          description:
            'An identifier for the knowledge item involved in a RAG operation.',
        },
        {
          title: 'Retrieval event',
          description:
            'A recorded event describing a retrieval operation.',
        },
        {
          title: 'Embedding event',
          description:
            'A recorded event associated with generating or storing embeddings.',
        },
      ],
    },

    {
      title: 'OpenTelemetry and Logging',
      content:
        'OpenTelemetry provides standardized concepts and instrumentation for telemetry, including logs, traces, and metrics. It can help applications generate consistent telemetry and export it to appropriate observability backends.',
      highlights: [
        {
          title: 'OpenTelemetry',
          description:
            'An open-source observability framework and ecosystem.',
        },
        {
          title: 'Instrumentation',
          description:
            'The mechanism used to generate telemetry from application operations.',
        },
        {
          title: 'Log exporter',
          description:
            'A component that sends log telemetry to an observability backend.',
        },
      ],
    },

    {
      title: 'Good Logging Practices',
      content:
        'Good production logging is structured, consistent, searchable, contextual, secure, and intentional. Teams should define naming conventions, log levels, required fields, retention policies, sensitive-data rules, and ownership for important logging pipelines.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Using common field names, formats, and severity meanings across services.',
        },
        {
          title: 'Context',
          description:
            'Including enough metadata to understand an event without exposing sensitive information.',
        },
        {
          title: 'Intentional logging',
          description:
            'Logging events because they provide operational, security, or business value rather than logging everything indiscriminately.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is logging? Structured vs unstructured logging? What should you log in production? What log levels do you use? How do you design centralized logging? What is a correlation ID? How do you protect sensitive data in logs? How do logs support incident response? How would you design logging for an AI application?',
      highlights: [
        {
          title: 'Production logging',
          description:
            'Explain structure, context, security, retention, aggregation, and searchability.',
        },
        {
          title: 'Distributed logging',
          description:
            'Explain correlation IDs, trace IDs, service identity, and centralized collection.',
        },
        {
          title: 'AI logging',
          description:
            'Explain operational metadata, privacy, model events, retrieval events, and cost considerations.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat logs as operational evidence, not as a dump of everything the application does. In production I prefer structured logs with consistent fields such as timestamp, service, environment, severity, event name, request ID, and trace ID. I centralize logs so distributed requests can be investigated across services. I also define retention and access policies and explicitly prevent secrets and sensitive data from being logged. During incidents, I correlate logs with metrics and traces rather than relying on logs alone.”',
      highlights: [
        {
          title: 'Structured first',
          description:
            'Use machine-readable fields instead of relying primarily on free-form text.',
        },
        {
          title: 'Correlated evidence',
          description:
            'Connect logs with requests, traces, deployments, and other operational signals.',
        },
        {
          title: 'Security by design',
          description:
            'Prevent sensitive information from entering logs and control access to stored telemetry.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include logging everything, using inconsistent field names, storing secrets or personal data, relying only on text messages, having no correlation IDs, keeping unlimited retention, using DEBUG logs everywhere in production, and assuming logs alone provide complete observability.',
      highlights: [
        {
          title: 'Log everything',
          description:
            'Excessive logging increases noise, storage cost, and security exposure.',
        },
        {
          title: 'Sensitive data leakage',
          description:
            'Secrets and confidential information can become exposed through logs.',
        },
        {
          title: 'No correlation',
          description:
            'Without request or trace identifiers, distributed incident investigation becomes much harder.',
        },
        {
          title: 'Logs alone',
          description:
            'Logs should be combined with metrics and traces for complete operational visibility.',
        },
      ],
    },

    {
      title: 'Logging for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, logging is an operational governance decision as much as a technical one. Leaders should ensure teams agree on logging standards, sensitive-data rules, retention, ownership, incident requirements, cost controls, and audit expectations.',
      highlights: [
        {
          title: 'Logging standards',
          description:
            'Shared rules for log structure, severity, fields, and naming across teams.',
        },
        {
          title: 'Security governance',
          description:
            'Policies preventing sensitive information from being unnecessarily recorded or exposed.',
        },
        {
          title: 'Cost governance',
          description:
            'Managing log volume, retention, storage, and query costs.',
        },
        {
          title: 'Operational governance',
          description:
            'Ensuring logs support incident response, reliability, and business operations.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
    'observability',
    'monitoring',
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

export default loggingKnowledge
