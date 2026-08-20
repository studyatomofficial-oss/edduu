import type { KnowledgeDefinition } from './knowledge'

export const distributedTracingKnowledge: KnowledgeDefinition = {
  technologyId: 'distributed-tracing',
  slug: 'distributed-tracing',
  title: 'Distributed Tracing',
  summary:
    'Distributed tracing records the path of a request as it travels through multiple services and components, allowing teams to understand latency, dependencies, failures, and bottlenecks across distributed systems.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Distributed Tracing?',
      content:
        'Distributed tracing is a way of following one logical request across multiple services, databases, queues, and external dependencies. Instead of looking at each service independently, tracing shows how the complete operation moved through the system and how much time each component consumed.',
      highlights: [
        {
          title: 'Trace',
          description:
            'A complete representation of one logical operation across a distributed system.',
        },
        {
          title: 'Span',
          description:
            'A single unit of work within a trace.',
        },
        {
          title: 'Trace context',
          description:
            'Metadata used to connect related spans across service boundaries.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine ordering food through a delivery app. Your request goes from the mobile app to the API, then to the restaurant service, payment service, delivery service, and notification service. A trace is like a tracking number that lets you follow the entire journey. Each stop in the journey is like a span.',
      highlights: [
        {
          title: 'Delivery journey',
          description:
            'Represents the complete distributed request.',
        },
        {
          title: 'Tracking number',
          description:
            'Represents the trace identifier connecting the entire journey.',
        },
        {
          title: 'Individual stops',
          description:
            'Represent spans performed by individual services or components.',
        },
      ],
    },

    {
      title: 'Why Tracing Matters',
      content:
        'In a distributed system, a slow or failed user request may involve many components. Metrics can tell us that latency increased and logs can show individual events, but tracing connects those events into one request path. This makes it easier to identify where time was spent and where failures originated.',
      highlights: [
        {
          title: 'Request visibility',
          description:
            'Shows the complete path of a request across services.',
        },
        {
          title: 'Latency analysis',
          description:
            'Shows which component contributed most to request duration.',
        },
        {
          title: 'Dependency analysis',
          description:
            'Shows how services depend on databases, APIs, queues, and other systems.',
        },
      ],
    },

    {
      title: 'Tracing vs Logging',
      content:
        'Logs record individual events, while traces connect work performed across a request journey. A trace can contain references to logs, allowing an engineer to move from a high-level request path into detailed event information.',
      highlights: [
        {
          title: 'Logging',
          description:
            'Records detailed events.',
        },
        {
          title: 'Tracing',
          description:
            'Connects operations into a distributed request journey.',
        },
        {
          title: 'Correlation',
          description:
            'Trace IDs and span IDs can connect logs with traces.',
        },
      ],
    },

    {
      title: 'Tracing vs Metrics',
      content:
        'Metrics provide aggregated numerical information such as average or percentile latency across many requests. Traces show the detailed path of individual requests. Metrics are excellent for detecting broad problems, while traces help investigate specific examples.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Summarize behavior across many operations.',
        },
        {
          title: 'Traces',
          description:
            'Follow individual distributed operations.',
        },
        {
          title: 'Investigation',
          description:
            'Tracing helps identify which specific dependency or service contributed to a problematic request.',
        },
      ],
    },

    {
      title: 'Trace',
      content:
        'A trace represents one logical operation. It contains multiple spans that describe the work performed as the operation moves through the system.',
      highlights: [
        {
          title: 'Trace ID',
          description:
            'A unique identifier associated with the complete trace.',
        },
        {
          title: 'Trace duration',
          description:
            'The overall time represented by the trace.',
        },
        {
          title: 'Trace tree',
          description:
            'The hierarchical relationship between spans in a trace.',
        },
      ],
    },

    {
      title: 'Span',
      content:
        'A span represents a unit of work within a trace. A span may represent an HTTP request, database query, cache operation, queue processing step, external API call, or internal function depending on the instrumentation strategy.',
      highlights: [
        {
          title: 'Span',
          description:
            'A timed unit of work belonging to a trace.',
        },
        {
          title: 'Span ID',
          description:
            'An identifier that uniquely identifies a span.',
        },
        {
          title: 'Parent span',
          description:
            'The span that initiated or logically contains another span.',
        },
      ],
    },

    {
      title: 'Parent and Child Spans',
      content:
        'Spans form relationships. A parent span can represent an API request while child spans represent database calls, downstream service calls, and other operations performed as part of that request. These relationships create the trace hierarchy.',
      highlights: [
        {
          title: 'Parent',
          description:
            'The span representing the higher-level operation.',
        },
        {
          title: 'Child',
          description:
            'A span representing work performed within or because of the parent operation.',
        },
        {
          title: 'Span hierarchy',
          description:
            'The structured relationship connecting parent and child spans.',
        },
      ],
    },

    {
      title: 'Trace Context',
      content:
        'Trace context carries identifiers and propagation information between components. When Service A calls Service B, the trace context allows Service B to create a span that belongs to the same trace rather than starting an unrelated trace.',
      highlights: [
        {
          title: 'Trace context',
          description:
            'Metadata propagated between components to maintain trace continuity.',
        },
        {
          title: 'Propagation',
          description:
            'Passing trace information across service or process boundaries.',
        },
        {
          title: 'Continuity',
          description:
            'Maintaining one connected trace across multiple components.',
        },
      ],
    },

    {
      title: 'Trace ID and Span ID',
      content:
        'The trace ID identifies the complete request journey, while the span ID identifies one operation inside that journey. Together with parent information, these identifiers allow tracing systems to reconstruct the relationship between operations.',
      highlights: [
        {
          title: 'Trace ID',
          description:
            'Identifies the complete distributed operation.',
        },
        {
          title: 'Span ID',
          description:
            'Identifies one unit of work within the trace.',
        },
        {
          title: 'Parent Span ID',
          description:
            'Identifies the logical parent of a span.',
        },
      ],
    },

    {
      title: 'Trace Propagation',
      content:
        'Propagation is the mechanism used to carry trace context from one service to another. HTTP headers, messaging metadata, and other transport mechanisms can carry the context. Standard propagation reduces the chance of broken traces across service boundaries.',
      highlights: [
        {
          title: 'Propagation',
          description:
            'Passing trace context from one component to another.',
        },
        {
          title: 'HTTP propagation',
          description:
            'Carrying trace context through HTTP request metadata.',
        },
        {
          title: 'Message propagation',
          description:
            'Carrying trace context through asynchronous messages or events.',
        },
      ],
    },

    {
      title: 'OpenTelemetry',
      content:
        'OpenTelemetry is an open-source observability framework that provides standardized instrumentation and telemetry concepts for traces, metrics, and logs. It helps applications generate and export telemetry without tightly coupling application code to one observability vendor.',
      highlights: [
        {
          title: 'OpenTelemetry',
          description:
            'An open-source framework and ecosystem for generating and exporting telemetry.',
        },
        {
          title: 'Instrumentation',
          description:
            'The process of generating telemetry from application operations.',
        },
        {
          title: 'Exporter',
          description:
            'A component that sends telemetry to an observability backend.',
        },
      ],
    },

    {
      title: 'Automatic vs Manual Instrumentation',
      content:
        'Automatic instrumentation can generate telemetry for common frameworks and libraries with limited application changes. Manual instrumentation allows teams to create spans around business-specific operations that automatic instrumentation may not understand.',
      highlights: [
        {
          title: 'Automatic instrumentation',
          description:
            'Telemetry generated by instrumentation libraries for supported frameworks and components.',
        },
        {
          title: 'Manual instrumentation',
          description:
            'Telemetry explicitly created by developers around important application operations.',
        },
        {
          title: 'Business span',
          description:
            'A span representing a meaningful business operation rather than only a technical framework call.',
        },
      ],
    },

    {
      title: 'Trace Sampling',
      content:
        'Tracing every request can generate significant telemetry volume and cost. Sampling selects a subset of traces for collection or retention. Sampling strategy should preserve enough data for troubleshooting while controlling cost and storage requirements.',
      highlights: [
        {
          title: 'Sampling',
          description:
            'Selecting which traces or spans are retained.',
        },
        {
          title: 'Head sampling',
          description:
            'Making a sampling decision early in the request lifecycle.',
        },
        {
          title: 'Tail sampling',
          description:
            'Making sampling decisions after observing more information about the completed trace.',
        },
      ],
    },

    {
      title: 'Head Sampling vs Tail Sampling',
      content:
        'Head sampling is efficient because the decision is made early, but it may discard an interesting trace before knowing whether it contains an error or unusual latency. Tail sampling can retain important traces based on final characteristics such as errors or high latency, but it requires more infrastructure and buffering.',
      highlights: [
        {
          title: 'Head sampling',
          description:
            'Fast and relatively simple, but decisions are made before full trace information is known.',
        },
        {
          title: 'Tail sampling',
          description:
            'Can prioritize interesting traces after observing their complete behavior.',
        },
        {
          title: 'Trade-off',
          description:
            'Tail sampling provides richer selection logic at greater infrastructure complexity.',
        },
      ],
    },

    {
      title: 'Trace Waterfall',
      content:
        'A trace waterfall visualizes spans along a timeline. It helps engineers see which operations ran sequentially, which ran in parallel, where time was spent, and where delays occurred.',
      highlights: [
        {
          title: 'Waterfall',
          description:
            'A timeline visualization of spans within a trace.',
        },
        {
          title: 'Sequential work',
          description:
            'Operations that occur one after another and contribute directly to elapsed time.',
        },
        {
          title: 'Parallel work',
          description:
            'Operations that execute concurrently and may overlap in time.',
        },
      ],
    },

    {
      title: 'Latency Breakdown',
      content:
        'Tracing allows teams to break total request latency into component operations. For example, an API request might spend time in authentication, database queries, a payment provider, an AI model, and response serialization.',
      highlights: [
        {
          title: 'Latency breakdown',
          description:
            'A decomposition of total request duration into individual operations.',
        },
        {
          title: 'Critical path',
          description:
            'The sequence of dependent operations that determines the overall elapsed time.',
        },
        {
          title: 'Bottleneck',
          description:
            'A component that significantly limits performance or contributes disproportionate latency.',
        },
      ],
    },

    {
      title: 'Distributed Tracing and Microservices',
      content:
        'Microservices make tracing especially valuable because one user request may cross many independently deployed services. A trace can reveal the exact sequence of service calls and identify whether latency or failure originates in the API, downstream service, database, cache, or external provider.',
      highlights: [
        {
          title: 'Service boundary',
          description:
            'A boundary between independently operating services.',
        },
        {
          title: 'Downstream call',
          description:
            'A request from one service to another dependency.',
        },
        {
          title: 'Dependency graph',
          description:
            'A representation of how services and dependencies interact.',
        },
      ],
    },

    {
      title: 'Distributed Tracing and Databases',
      content:
        'Database operations can be represented as child spans inside application traces. This allows teams to identify slow queries, excessive database calls, connection delays, and database-related latency within a larger request.',
      highlights: [
        {
          title: 'Database span',
          description:
            'A span representing a database operation.',
        },
        {
          title: 'Query duration',
          description:
            'The time spent executing or waiting on a database operation.',
        },
        {
          title: 'Database bottleneck',
          description:
            'A database operation or resource condition contributing significantly to request latency.',
        },
      ],
    },

    {
      title: 'Distributed Tracing and Caching',
      content:
        'Cache operations can be traced to determine whether requests are hitting the cache, missing the cache, waiting for a backing store, or experiencing cache-related latency. This helps validate whether a caching strategy is actually improving performance.',
      highlights: [
        {
          title: 'Cache span',
          description:
            'A span representing a cache operation.',
        },
        {
          title: 'Cache hit',
          description:
            'A request successfully served from cached data.',
        },
        {
          title: 'Cache miss',
          description:
            'A request requiring another data source because cached data was unavailable.',
        },
      ],
    },

    {
      title: 'Distributed Tracing and Queues',
      content:
        'Asynchronous systems require special attention because producer and consumer operations are separated in time. Trace context can be propagated through message metadata so that processing work can still be connected to the originating operation.',
      highlights: [
        {
          title: 'Message span',
          description:
            'A span representing message production or consumption.',
        },
        {
          title: 'Async propagation',
          description:
            'Passing trace context through asynchronous messaging systems.',
        },
        {
          title: 'Queue delay',
          description:
            'The time a message waits before being processed.',
        },
      ],
    },

    {
      title: 'Tracing External APIs',
      content:
        'External API calls should be represented in traces when possible. This helps teams measure provider latency, identify provider failures, distinguish application latency from dependency latency, and understand the impact of external services.',
      highlights: [
        {
          title: 'External dependency',
          description:
            'A service outside the application boundary that the system depends on.',
        },
        {
          title: 'Provider latency',
          description:
            'Time spent waiting for an external provider.',
        },
        {
          title: 'Dependency failure',
          description:
            'A failure originating from an external service required by the application.',
        },
      ],
    },

    {
      title: 'Tracing and Error Diagnosis',
      content:
        'A trace can show exactly where an error occurred and which upstream operations were affected. Error information can be attached to relevant spans, allowing engineers to move from a failing request to the specific operation that produced the failure.',
      highlights: [
        {
          title: 'Error span',
          description:
            'A span containing information about a failed operation.',
        },
        {
          title: 'Exception',
          description:
            'An abnormal execution condition associated with an operation.',
        },
        {
          title: 'Failure propagation',
          description:
            'The way a downstream failure affects upstream operations.',
        },
      ],
    },

    {
      title: 'Tracing and Logs Correlation',
      content:
        'The strongest investigations often combine traces and logs. A trace identifies the problematic request and span, while correlated logs provide detailed event information generated during that operation.',
      highlights: [
        {
          title: 'Trace-log correlation',
          description:
            'Connecting logs to traces using shared identifiers.',
        },
        {
          title: 'Trace ID in logs',
          description:
            'A field that allows logs to be searched from a specific trace.',
        },
        {
          title: 'Span ID in logs',
          description:
            'A field that narrows logs to a particular operation within a trace.',
        },
      ],
    },

    {
      title: 'Tracing and Metrics Correlation',
      content:
        'Metrics identify broad patterns while traces provide individual examples. A team might detect a P99 latency increase through metrics and then inspect representative slow traces to identify which dependency caused the increase.',
      highlights: [
        {
          title: 'Metric-to-trace workflow',
          description:
            'Using metrics to identify a problem and traces to investigate individual affected requests.',
        },
        {
          title: 'Exemplar',
          description:
            'A reference connecting an aggregated metric observation to a representative trace or event.',
        },
        {
          title: 'Investigation path',
          description:
            'Moving from broad system health signals to detailed request-level evidence.',
        },
      ],
    },

    {
      title: 'Tracing in Kubernetes',
      content:
        'Kubernetes environments contain many dynamic workloads and service-to-service interactions. Tracing helps understand requests across pods, services, ingress layers, databases, and external dependencies while metrics and logs provide additional infrastructure context.',
      highlights: [
        {
          title: 'Pod span',
          description:
            'A trace operation associated with work performed by a Kubernetes workload.',
        },
        {
          title: 'Service-to-service trace',
          description:
            'A trace spanning multiple Kubernetes services.',
        },
        {
          title: 'Ingress trace',
          description:
            'A trace beginning at the external entry point into the cluster.',
        },
      ],
    },

    {
      title: 'Tracing AI Applications',
      content:
        'AI applications benefit from tracing because a single user request may involve retrieval, vector search, prompt construction, model calls, tool calls, external APIs, and response generation. Tracing can expose latency and failures across this complete workflow.',
      highlights: [
        {
          title: 'AI request trace',
          description:
            'A trace representing the complete lifecycle of an AI application request.',
        },
        {
          title: 'Model span',
          description:
            'A span representing an AI model invocation.',
        },
        {
          title: 'Tool span',
          description:
            'A span representing an agent or application tool invocation.',
        },
      ],
    },

    {
      title: 'Tracing RAG Systems',
      content:
        'For a RAG system, a trace can connect query processing, embedding generation, vector retrieval, reranking, prompt construction, model invocation, and response generation. This makes it possible to identify whether poor latency originates in retrieval or generation.',
      highlights: [
        {
          title: 'Retrieval span',
          description:
            'A span representing vector or knowledge retrieval.',
        },
        {
          title: 'Embedding span',
          description:
            'A span representing embedding generation or processing.',
        },
        {
          title: 'Generation span',
          description:
            'A span representing the model generation step.',
        },
      ],
    },

    {
      title: 'Tracing AI Voice Systems',
      content:
        'For an AI voice platform, tracing can connect call setup, speech recognition, model reasoning, tool execution, text-to-speech, telephony provider events, and post-call processing. This helps teams identify where conversational latency or call failures originate.',
      highlights: [
        {
          title: 'Call trace',
          description:
            'A trace representing the lifecycle of a voice interaction.',
        },
        {
          title: 'STT span',
          description:
            'A span representing speech-to-text processing.',
        },
        {
          title: 'TTS span',
          description:
            'A span representing text-to-speech processing.',
        },
        {
          title: 'Model span',
          description:
            'A span representing the AI reasoning or generation operation.',
        },
      ],
    },

    {
      title: 'Trace Attributes',
      content:
        'Spans can contain attributes that describe the operation, such as service name, HTTP method, route, status, database system, provider, model, environment, and deployment version. Attributes should be useful for investigation without exposing sensitive information or creating unnecessary high-cardinality data.',
      highlights: [
        {
          title: 'Span attribute',
          description:
            'Metadata attached to a span describing its operation or context.',
        },
        {
          title: 'Semantic conventions',
          description:
            'Standardized naming conventions for telemetry attributes.',
        },
        {
          title: 'Sensitive attribute',
          description:
            'Telemetry metadata that could expose confidential or personal information.',
        },
      ],
    },

    {
      title: 'Trace Status',
      content:
        'A span can indicate whether an operation completed successfully, failed, or has another relevant status. Consistent status handling helps tracing systems identify problematic operations and supports filtering and analysis.',
      highlights: [
        {
          title: 'Success',
          description:
            'The operation completed successfully according to its expected behavior.',
        },
        {
          title: 'Error',
          description:
            'The operation encountered a failure.',
        },
        {
          title: 'Status',
          description:
            'A standardized indication of the outcome of an operation.',
        },
      ],
    },

    {
      title: 'Tracing Security and Privacy',
      content:
        'Trace data can accidentally contain sensitive information such as prompts, user identifiers, authorization data, request parameters, or retrieved documents. Teams should apply data minimization, access controls, redaction, and retention policies to tracing systems.',
      highlights: [
        {
          title: 'Data minimization',
          description:
            'Collecting only the telemetry information required for operational purposes.',
        },
        {
          title: 'Redaction',
          description:
            'Removing or masking sensitive information from telemetry.',
        },
        {
          title: 'Trace access',
          description:
            'Controlling who can view or query trace information.',
        },
      ],
    },

    {
      title: 'Tracing Cost',
      content:
        'Tracing can generate substantial telemetry volume, especially in high-throughput distributed systems. Cost management techniques include sampling, retention policies, selective instrumentation, aggregation, and prioritizing traces associated with errors or unusual latency.',
      highlights: [
        {
          title: 'Trace volume',
          description:
            'The amount of trace and span telemetry generated.',
        },
        {
          title: 'Selective sampling',
          description:
            'Retaining traces according to useful criteria rather than keeping every trace.',
        },
        {
          title: 'Retention',
          description:
            'The period for which trace data is stored.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is distributed tracing? What is a span? What is the difference between a trace and a span? How does trace context propagate across microservices? How do you correlate logs and traces? What is OpenTelemetry? What is sampling? Head sampling vs tail sampling? How would you trace an AI or RAG application?',
      highlights: [
        {
          title: 'Trace fundamentals',
          description:
            'Explain traces, spans, IDs, parent-child relationships, and propagation.',
        },
        {
          title: 'Distributed systems',
          description:
            'Explain how tracing follows requests across services and dependencies.',
        },
        {
          title: 'AI tracing',
          description:
            'Explain model, retrieval, tool, STT, and TTS spans for AI applications.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I use distributed tracing to follow a logical request across service boundaries. A trace represents the complete request and spans represent individual operations such as HTTP calls, database queries, queue processing, or model invocations. I propagate trace context across services so all those spans remain connected. I would correlate traces with logs and metrics, use sampling to control cost, and pay particular attention to dependency latency and critical-path operations. For AI systems I would trace retrieval, model calls, tools, and external providers because end-to-end latency is usually distributed across several components.”',
      highlights: [
        {
          title: 'Request-centric',
          description:
            'Start with the complete user operation and follow its path.',
        },
        {
          title: 'Cross-service correlation',
          description:
            'Maintain trace context across service and dependency boundaries.',
        },
        {
          title: 'Cost-aware',
          description:
            'Use appropriate sampling and retention rather than tracing everything indefinitely.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include confusing traces with logs, failing to propagate context, tracing every low-value operation, storing sensitive data in spans, ignoring asynchronous boundaries, using excessive attributes, and assuming tracing replaces metrics or logging.',
      highlights: [
        {
          title: 'No propagation',
          description:
            'Without context propagation, one distributed request becomes disconnected traces.',
        },
        {
          title: 'Trace everything',
          description:
            'Uncontrolled trace volume increases cost and operational complexity.',
        },
        {
          title: 'Sensitive telemetry',
          description:
            'Prompts, tokens, credentials, or private data should not be captured unnecessarily.',
        },
        {
          title: 'Tracing alone',
          description:
            'Tracing should complement metrics and logs rather than replace them.',
        },
      ],
    },

    {
      title: 'Tracing for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, tracing is an operational capability that improves cross-team debugging and accountability. Leaders should establish tracing standards, service ownership, correlation requirements, privacy rules, sampling policies, and incident workflows. The goal is not maximum telemetry; the goal is fast understanding of production behavior.',
      highlights: [
        {
          title: 'Tracing standards',
          description:
            'Shared rules for instrumentation, naming, propagation, and required context.',
        },
        {
          title: 'Cross-team visibility',
          description:
            'A common request path that allows teams to understand dependencies and ownership.',
        },
        {
          title: 'Operational efficiency',
          description:
            'Reducing time spent identifying the source of latency and failures.',
        },
        {
          title: 'Governance',
          description:
            'Managing security, privacy, retention, sampling, and cost.',
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
    'event-driven-systems',
    'queues',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default distributedTracingKnowledge
