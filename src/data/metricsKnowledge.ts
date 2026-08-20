import type { KnowledgeDefinition } from './knowledge'

export const metricsKnowledge: KnowledgeDefinition = {
  technologyId: 'metrics',
  slug: 'metrics',
  title: 'Metrics',
  summary:
    'Metrics are numerical measurements collected over time to describe system, application, infrastructure, and business behavior. They are fundamental to monitoring, alerting, capacity planning, and reliability engineering.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What are Metrics?',
      content:
        'A metric is a numerical measurement that tells us something about a system at a particular point in time or over a period. Examples include request count, error rate, CPU utilization, memory usage, latency, queue depth, active users, and revenue. Metrics allow teams to observe trends and compare actual behavior with expected behavior.',
      highlights: [
        {
          title: 'Metric',
          description:
            'A numerical measurement representing some aspect of system or business behavior.',
        },
        {
          title: 'Time series',
          description:
            'A sequence of metric values associated with timestamps.',
        },
        {
          title: 'Measurement',
          description:
            'A recorded numerical value representing an observed condition.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about the dashboard of a car. Speed, fuel level, engine temperature, and RPM are measurements. Looking at one number tells you the current state; watching those numbers over time tells you whether the car is behaving normally. Software metrics work in the same way.',
      highlights: [
        {
          title: 'Speedometer',
          description:
            'Represents a metric showing current system behavior.',
        },
        {
          title: 'Fuel gauge',
          description:
            'Represents a resource-utilization metric.',
        },
        {
          title: 'Trend',
          description:
            'Represents how a measurement changes over time.',
        },
      ],
    },

    {
      title: 'Why Metrics Matter',
      content:
        'Metrics provide a compact and efficient way to understand system behavior at scale. They are useful for dashboards, alerts, SLO calculations, capacity planning, anomaly detection, performance analysis, and business reporting.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Using metrics to continuously observe system health.',
        },
        {
          title: 'Alerting',
          description:
            'Triggering action when metric conditions become important.',
        },
        {
          title: 'Capacity planning',
          description:
            'Using historical measurements to forecast future resource requirements.',
        },
      ],
    },

    {
      title: 'Metrics vs Logs',
      content:
        'Metrics are numerical measurements optimized for aggregation and trends. Logs are detailed event records. Metrics can quickly show that error rate increased, while logs can provide detailed information about individual failed requests.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Compact numerical signals useful for trends, aggregation, and alerts.',
        },
        {
          title: 'Logs',
          description:
            'Detailed records of individual events.',
        },
        {
          title: 'Complementary signals',
          description:
            'Metrics and logs work together to detect and investigate production problems.',
        },
      ],
    },

    {
      title: 'Metrics vs Traces',
      content:
        'Metrics summarize system behavior across many operations, while traces follow individual requests or transactions. Metrics are excellent for spotting broad trends; traces are useful for understanding the path and timing of a specific distributed operation.',
      highlights: [
        {
          title: 'Metric',
          description:
            'Aggregated numerical information about system behavior.',
        },
        {
          title: 'Trace',
          description:
            'An end-to-end representation of an individual logical operation.',
        },
        {
          title: 'Span',
          description:
            'A unit of work inside a distributed trace.',
        },
      ],
    },

    {
      title: 'Types of Metrics',
      content:
        'Common metric types include counters, gauges, histograms, and summaries. The right type depends on whether you need to count events, represent current state, understand distributions, or estimate quantiles.',
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
            'A metric representation useful for understanding distributions such as latency.',
        },
        {
          title: 'Summary',
          description:
            'A metric type that can provide observations and quantile information depending on the monitoring system.',
        },
      ],
    },

    {
      title: 'Counter',
      content:
        'A counter represents a cumulative count of events. Examples include total HTTP requests, total errors, completed jobs, or processed messages. A counter normally increases over time and can be converted into a rate over a selected interval.',
      highlights: [
        {
          title: 'Request counter',
          description:
            'Counts the total number of requests processed.',
        },
        {
          title: 'Error counter',
          description:
            'Counts the total number of errors observed.',
        },
        {
          title: 'Rate',
          description:
            'The change in a counter over time, such as requests per second.',
        },
      ],
    },

    {
      title: 'Gauge',
      content:
        'A gauge represents a value that can move up or down. Examples include current CPU usage, active connections, memory utilization, queue depth, temperature, or number of active users.',
      highlights: [
        {
          title: 'Gauge',
          description:
            'A measurement representing a current state that can increase or decrease.',
        },
        {
          title: 'Queue depth',
          description:
            'The number of items currently waiting in a queue.',
        },
        {
          title: 'Active connections',
          description:
            'The current number of active connections to a service or resource.',
        },
      ],
    },

    {
      title: 'Histogram',
      content:
        'A histogram captures the distribution of observed values. It is especially useful for latency because it can show how requests are distributed across ranges and support percentile calculations in systems such as Prometheus.',
      highlights: [
        {
          title: 'Histogram',
          description:
            'A metric type used to represent the distribution of observed values.',
        },
        {
          title: 'Bucket',
          description:
            'A range used by a histogram to group observed values.',
        },
        {
          title: 'Latency distribution',
          description:
            'The spread of request durations across different time ranges.',
        },
      ],
    },

    {
      title: 'Percentiles',
      content:
        'Percentiles describe the distribution of observed values. P50 represents the median, P95 represents a value below which approximately 95 percent of observations fall, and P99 highlights the slow tail. Percentiles are often more useful than averages for understanding user experience.',
      highlights: [
        {
          title: 'P50',
          description:
            'The median value.',
        },
        {
          title: 'P95',
          description:
            'A percentile describing the upper portion of the observed distribution.',
        },
        {
          title: 'P99',
          description:
            'A percentile that highlights very slow or extreme observations.',
        },
      ],
    },

    {
      title: 'Metric Labels',
      content:
        'Labels add dimensions to metrics so the same metric can be analyzed by attributes such as service, endpoint, HTTP method, region, environment, or status code. Labels are powerful, but excessive unique values can create high cardinality and increase system cost.',
      highlights: [
        {
          title: 'Label',
          description:
            'A dimension attached to a metric for filtering and grouping.',
        },
        {
          title: 'Dimension',
          description:
            'An attribute used to break metric data into meaningful groups.',
        },
        {
          title: 'High cardinality',
          description:
            'A condition where a metric dimension has a very large number of unique values.',
        },
      ],
    },

    {
      title: 'Cardinality',
      content:
        'Cardinality is the number of unique combinations represented by metric labels. High-cardinality labels such as raw user IDs, request IDs, or unbounded URLs can create enormous numbers of time series and increase memory, storage, query, and operational costs.',
      highlights: [
        {
          title: 'Cardinality',
          description:
            'The number of unique values or time-series combinations represented by labels.',
        },
        {
          title: 'Low cardinality',
          description:
            'A relatively small and controlled number of unique label combinations.',
        },
        {
          title: 'Unbounded label',
          description:
            'A label whose values can grow without a predictable upper bound.',
        },
      ],
    },

    {
      title: 'Golden Signals',
      content:
        'The four golden signals provide a practical framework for selecting important production metrics: latency, traffic, errors, and saturation.',
      highlights: [
        {
          title: 'Latency',
          description:
            'How long operations take.',
        },
        {
          title: 'Traffic',
          description:
            'How much demand reaches the system.',
        },
        {
          title: 'Errors',
          description:
            'How many operations fail.',
        },
        {
          title: 'Saturation',
          description:
            'How close the system is to exhausting available capacity.',
        },
      ],
    },

    {
      title: 'RED Method',
      content:
        'The RED method focuses on Rate, Errors, and Duration and is particularly useful for request-driven services such as APIs and microservices.',
      highlights: [
        {
          title: 'Rate',
          description:
            'Requests processed over time.',
        },
        {
          title: 'Errors',
          description:
            'Failed requests or operations.',
        },
        {
          title: 'Duration',
          description:
            'Time taken to process requests.',
        },
      ],
    },

    {
      title: 'USE Method',
      content:
        'The USE method focuses on Utilization, Saturation, and Errors. It is commonly applied to infrastructure resources such as CPU, memory, disks, and network interfaces.',
      highlights: [
        {
          title: 'Utilization',
          description:
            'The percentage of a resource currently being consumed.',
        },
        {
          title: 'Saturation',
          description:
            'The amount of queued or delayed work caused by resource limits.',
        },
        {
          title: 'Errors',
          description:
            'Errors generated by a resource or subsystem.',
        },
      ],
    },

    {
      title: 'Business Metrics',
      content:
        'Not all important metrics are technical. Business metrics connect system behavior with business outcomes. Examples include successful payments, completed orders, registrations, qualified leads, successful calls, customer conversion, and revenue.',
      highlights: [
        {
          title: 'Business metric',
          description:
            'A numerical measurement representing a business outcome or activity.',
        },
        {
          title: 'Conversion rate',
          description:
            'The percentage of users or opportunities that complete a desired business action.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of useful work completed during a period.',
        },
      ],
    },

    {
      title: 'Application Metrics',
      content:
        'Application metrics describe how software behaves. Common examples include requests per second, error percentage, latency, successful jobs, failed jobs, cache hit rate, database query duration, and queue processing rate.',
      highlights: [
        {
          title: 'Application metric',
          description:
            'A measurement describing application behavior.',
        },
        {
          title: 'Success rate',
          description:
            'The percentage of operations that complete successfully.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work completed by the application over time.',
        },
      ],
    },

    {
      title: 'Infrastructure Metrics',
      content:
        'Infrastructure metrics describe the health and resource consumption of the underlying platform. Typical signals include CPU, memory, disk usage, disk I/O, network throughput, node capacity, container restarts, and resource pressure.',
      highlights: [
        {
          title: 'CPU utilization',
          description:
            'The percentage of CPU capacity currently being consumed.',
        },
        {
          title: 'Memory utilization',
          description:
            'The amount of memory currently being consumed.',
        },
        {
          title: 'Network throughput',
          description:
            'The amount of data transmitted or received over a period.',
        },
      ],
    },

    {
      title: 'Database Metrics',
      content:
        'Database metrics help teams understand query behavior, capacity, and health. Important signals include query latency, queries per second, active connections, connection pool utilization, locks, cache hit rate, CPU, storage, I/O, and replication lag.',
      highlights: [
        {
          title: 'Query latency',
          description:
            'The time required for database operations.',
        },
        {
          title: 'Connection pool utilization',
          description:
            'The percentage of available database connection capacity currently used.',
        },
        {
          title: 'Replication lag',
          description:
            'The delay between primary data changes and their availability on a replica.',
        },
      ],
    },

    {
      title: 'Queue Metrics',
      content:
        'Queue metrics reveal whether asynchronous workloads are keeping up with demand. Important measurements include queue depth, oldest message age, producer rate, consumer rate, processing duration, retry count, and dead-letter messages.',
      highlights: [
        {
          title: 'Queue depth',
          description:
            'The amount of work waiting to be processed.',
        },
        {
          title: 'Consumer rate',
          description:
            'The rate at which consumers process queued work.',
        },
        {
          title: 'Message age',
          description:
            'How long queued work has been waiting.',
        },
      ],
    },

    {
      title: 'Cache Metrics',
      content:
        'Cache metrics help determine whether caching is improving performance and reducing load on backing systems. Important signals include hit rate, miss rate, eviction rate, cache size, memory usage, and response latency.',
      highlights: [
        {
          title: 'Cache hit',
          description:
            'A request successfully served from the cache.',
        },
        {
          title: 'Cache miss',
          description:
            'A requested value was not available in the cache and required another source.',
        },
        {
          title: 'Hit rate',
          description:
            'The percentage of cache requests successfully served from cached data.',
        },
      ],
    },

    {
      title: 'Metrics and SLI',
      content:
        'Service Level Indicators are often calculated from production metrics. For example, request success rate can serve as an availability SLI and request latency can serve as a latency SLI.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator representing actual service behavior.',
        },
        {
          title: 'Availability SLI',
          description:
            'A measurement representing the proportion of successful service operations.',
        },
        {
          title: 'Latency SLI',
          description:
            'A measurement representing the proportion or distribution of requests meeting a latency objective.',
        },
      ],
    },

    {
      title: 'Metrics and SLO',
      content:
        'An SLO defines the target for an SLI. Metrics provide the underlying measurements required to determine whether the target is being met. This makes metrics central to reliability engineering and error-budget management.',
      highlights: [
        {
          title: 'SLO',
          description:
            'A target level for a service reliability indicator.',
        },
        {
          title: 'Error budget',
          description:
            'The amount of unreliability permitted while still meeting an SLO.',
        },
        {
          title: 'Compliance',
          description:
            'Whether observed service behavior remains within the defined SLO target.',
        },
      ],
    },

    {
      title: 'Metrics for Alerting',
      content:
        'Metrics are commonly used as alert inputs. Good alerts should focus on conditions that represent meaningful customer or system impact rather than every small fluctuation. Alert thresholds should account for normal variability and expected behavior.',
      highlights: [
        {
          title: 'Alert threshold',
          description:
            'A condition under which a metric triggers an operational alert.',
        },
        {
          title: 'Warning',
          description:
            'A lower-severity condition that may require investigation or preparation.',
        },
        {
          title: 'Critical',
          description:
            'A high-impact condition requiring urgent action.',
        },
      ],
    },

    {
      title: 'Rate vs Count',
      content:
        'A raw count tells you how many events occurred, while a rate tells you how quickly events are occurring. Rates are often more useful for real-time monitoring because a count without a time interval can be misleading.',
      highlights: [
        {
          title: 'Count',
          description:
            'The total number of observed events.',
        },
        {
          title: 'Rate',
          description:
            'The number of events occurring per unit of time.',
        },
        {
          title: 'Window',
          description:
            'The time interval over which a rate or aggregate is calculated.',
        },
      ],
    },

    {
      title: 'Average vs Percentile',
      content:
        'Averages summarize all observations into one value but can hide slow outliers. Percentiles show the behavior of different portions of the distribution and are often more useful for customer-facing latency.',
      highlights: [
        {
          title: 'Average',
          description:
            'The arithmetic mean of observed values.',
        },
        {
          title: 'Percentile',
          description:
            'A value describing a position within an observed distribution.',
        },
        {
          title: 'Tail latency',
          description:
            'The slow portion of request latency, often represented by P95, P99, or higher percentiles.',
        },
      ],
    },

    {
      title: 'Metrics Collection',
      content:
        'Metrics can be collected through application instrumentation, exporters, agents, infrastructure integrations, or managed cloud services. Collection architecture should consider reliability, scrape or push patterns, cardinality, retention, and cost.',
      highlights: [
        {
          title: 'Instrumentation',
          description:
            'Application code or libraries that generate metrics.',
        },
        {
          title: 'Exporter',
          description:
            'A component that exposes or converts metrics from a system into a format a monitoring platform can collect.',
        },
        {
          title: 'Collector',
          description:
            'A component that receives, processes, and forwards telemetry.',
        },
      ],
    },

    {
      title: 'Prometheus Metrics',
      content:
        'Prometheus stores metrics as labeled time series and provides PromQL for querying them. Applications can expose metrics endpoints, while exporters provide metrics for systems that do not expose Prometheus-native metrics.',
      highlights: [
        {
          title: 'Prometheus',
          description:
            'A popular open-source time-series monitoring system.',
        },
        {
          title: 'PromQL',
          description:
            'Prometheus Query Language used to select and analyze time series.',
        },
        {
          title: 'Exporter',
          description:
            'A component that exposes metrics from another system in a Prometheus-compatible form.',
        },
      ],
    },

    {
      title: 'Grafana Metrics Visualization',
      content:
        'Grafana can visualize metrics from Prometheus and other data sources. Dashboards should emphasize the signals needed to understand service health, trends, customer impact, and capacity.',
      highlights: [
        {
          title: 'Grafana dashboard',
          description:
            'A visual interface containing panels for selected metrics and other telemetry.',
        },
        {
          title: 'Panel',
          description:
            'A single visualization or metric view inside a dashboard.',
        },
        {
          title: 'Time range',
          description:
            'The period over which metric data is displayed and analyzed.',
        },
      ],
    },

    {
      title: 'Metrics and Capacity Planning',
      content:
        'Historical metrics help teams understand growth and forecast capacity requirements. Trends in traffic, CPU, memory, storage, database connections, queue depth, and other resources can reveal when scaling or architectural changes may be required.',
      highlights: [
        {
          title: 'Capacity trend',
          description:
            'The historical change in resource or workload requirements.',
        },
        {
          title: 'Forecast',
          description:
            'An estimate of future capacity needs based on observed patterns and assumptions.',
        },
        {
          title: 'Headroom',
          description:
            'Reserved unused capacity that helps absorb spikes and failures.',
        },
      ],
    },

    {
      title: 'Metrics and Incident Response',
      content:
        'During an incident, metrics help establish the start time, scope, severity, affected components, and recovery state. Responders can compare current values against historical baselines and deployment markers to form hypotheses quickly.',
      highlights: [
        {
          title: 'Baseline',
          description:
            'A representation of normal behavior used for comparison.',
        },
        {
          title: 'Incident signal',
          description:
            'A metric pattern indicating abnormal system behavior.',
        },
        {
          title: 'Recovery signal',
          description:
            'A metric pattern showing that the system is returning to acceptable behavior.',
        },
      ],
    },

    {
      title: 'Metric Naming',
      content:
        'Consistent metric names make dashboards, queries, and alerts easier to understand. Naming conventions should clearly communicate what is being measured and use predictable units and dimensions.',
      highlights: [
        {
          title: 'Naming convention',
          description:
            'A shared rule for how metrics are named.',
        },
        {
          title: 'Unit',
          description:
            'The measurement unit associated with a metric, such as seconds, bytes, or requests.',
        },
        {
          title: 'Semantic consistency',
          description:
            'Using the same meaning and naming rules across services and teams.',
        },
      ],
    },

    {
      title: 'Metric Units',
      content:
        'Metrics should have clear units. Examples include seconds for latency, bytes for storage, requests per second for traffic, percentages for utilization, and counts for discrete quantities. Incorrect units can lead to incorrect decisions and alerts.',
      highlights: [
        {
          title: 'Seconds',
          description:
            'A common unit for latency and duration.',
        },
        {
          title: 'Bytes',
          description:
            'A common unit for storage and data transfer.',
        },
        {
          title: 'Percentage',
          description:
            'A relative measurement commonly used for utilization or success rates.',
        },
      ],
    },

    {
      title: 'High-Cardinality Metrics',
      content:
        'Metrics should not normally use unbounded identifiers such as raw user IDs, request IDs, or arbitrary URLs as labels. High-cardinality metrics can create millions of time series and significantly increase monitoring-system cost and performance problems.',
      highlights: [
        {
          title: 'High-cardinality label',
          description:
            'A metric label with a very large number of unique values.',
        },
        {
          title: 'Unbounded identifier',
          description:
            'An identifier whose number of possible values can grow without a practical upper limit.',
        },
        {
          title: 'Cardinality control',
          description:
            'Designing metric labels so the number of unique time series remains manageable.',
        },
      ],
    },

    {
      title: 'Metrics in Distributed Systems',
      content:
        'Distributed systems require metrics from individual services as well as aggregate service-level views. Important dimensions can include service, endpoint, region, environment, status, and dependency, while avoiding excessive cardinality.',
      highlights: [
        {
          title: 'Service metric',
          description:
            'A metric describing the behavior of one service.',
        },
        {
          title: 'Aggregate metric',
          description:
            'A metric representing behavior across multiple instances or services.',
        },
        {
          title: 'Dependency metric',
          description:
            'A metric describing interactions with downstream services or resources.',
        },
      ],
    },

    {
      title: 'Metrics for Kubernetes',
      content:
        'Kubernetes metrics can cover cluster resources, node capacity, pod CPU and memory, container restarts, replica availability, scheduling, network traffic, and workload behavior. Application metrics should be combined with Kubernetes platform metrics.',
      highlights: [
        {
          title: 'Pod metric',
          description:
            'A measurement describing a Kubernetes pod or its containers.',
        },
        {
          title: 'Node metric',
          description:
            'A measurement describing the health or resource utilization of a Kubernetes node.',
        },
        {
          title: 'Replica metric',
          description:
            'A measurement comparing desired and currently available workload replicas.',
        },
      ],
    },

    {
      title: 'Metrics for AI Systems',
      content:
        'AI systems require traditional infrastructure and application metrics plus AI-specific measurements. Useful signals include model request rate, model latency, token usage, input and output sizes, provider error rate, rate-limit responses, cost, retrieval latency, fallback rate, and evaluation-quality signals.',
      highlights: [
        {
          title: 'Model request rate',
          description:
            'The number of AI model requests processed over time.',
        },
        {
          title: 'Model latency',
          description:
            'The time required to receive an AI model response.',
        },
        {
          title: 'Token usage',
          description:
            'The quantity of model input and output tokens consumed.',
        },
        {
          title: 'Cost per request',
          description:
            'The estimated financial cost associated with processing an AI request.',
        },
      ],
    },

    {
      title: 'Metrics for AI Voice',
      content:
        'For an AI voice platform, useful metrics include calls started, calls connected, concurrent calls, average and percentile call duration, speech-to-text latency, model latency, text-to-speech latency, dropped calls, provider errors, call completion rate, and cost per minute.',
      highlights: [
        {
          title: 'Concurrent calls',
          description:
            'The number of active calls being processed simultaneously.',
        },
        {
          title: 'Call completion rate',
          description:
            'The percentage of calls that reach the expected successful completion state.',
        },
        {
          title: 'Cost per minute',
          description:
            'Estimated infrastructure and provider cost associated with one minute of voice interaction.',
        },
      ],
    },

    {
      title: 'Metrics for RAG',
      content:
        'RAG metrics can measure ingestion throughput, document counts, embedding failures, vector-search latency, retrieval result counts, model latency, token usage, citation rates, answer-quality signals, and document freshness.',
      highlights: [
        {
          title: 'Retrieval latency',
          description:
            'The time required to retrieve relevant context.',
        },
        {
          title: 'Retrieval result count',
          description:
            'The number of candidate knowledge items returned by retrieval.',
        },
        {
          title: 'Document freshness',
          description:
            'A measurement indicating how current the indexed knowledge is.',
        },
      ],
    },

    {
      title: 'Metrics and Cost Optimization',
      content:
        'Metrics allow teams to understand where resources and money are being consumed. By tracking request volume, compute utilization, storage, database usage, AI token consumption, and provider costs, teams can identify inefficient workloads and optimize architecture.',
      highlights: [
        {
          title: 'Cost metric',
          description:
            'A numerical measurement representing financial consumption.',
        },
        {
          title: 'Unit economics',
          description:
            'Understanding cost relative to a business unit such as request, user, call, transaction, or minute.',
        },
        {
          title: 'Cost per transaction',
          description:
            'The average technical cost associated with processing one business transaction.',
        },
      ],
    },

    {
      title: 'Metric Quality',
      content:
        'A metric is useful only if it has a clear definition, correct units, consistent collection, reliable timestamps, appropriate labels, and meaningful interpretation. Poorly defined metrics can lead to incorrect dashboards and alerts.',
      highlights: [
        {
          title: 'Metric definition',
          description:
            'A precise description of what a metric measures.',
        },
        {
          title: 'Metric integrity',
          description:
            'Confidence that the metric accurately represents actual system behavior.',
        },
        {
          title: 'Metric ownership',
          description:
            'A clear team or person responsible for the metric and its meaning.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is a metric? What is the difference between counters and gauges? What are histograms? Why are percentiles better than averages for latency? What are the four golden signals? Explain RED and USE. What is metric cardinality? How would you design metrics for a production API? How would you monitor an AI system?',
      highlights: [
        {
          title: 'Metric types',
          description:
            'Explain counters, gauges, histograms, and their appropriate use cases.',
        },
        {
          title: 'Production metrics',
          description:
            'Explain traffic, errors, latency, saturation, business metrics, and dependencies.',
        },
        {
          title: 'Cardinality',
          description:
            'Explain why uncontrolled labels can damage monitoring-system performance and cost.',
        },
        {
          title: 'AI metrics',
          description:
            'Explain model latency, token usage, provider health, retrieval, quality, and cost.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I use metrics to create a quantitative view of system health. For a production API, I would start with request rate, error rate, latency percentiles, and saturation, then add dependency and business metrics. I would use counters for cumulative events, gauges for current state, and histograms for distributions such as latency. I would also control metric cardinality carefully because labels like raw user IDs can create huge numbers of time series. Finally, I would connect important metrics to SLIs, SLOs, alerts, dashboards, and capacity planning.”',
      highlights: [
        {
          title: 'Start with outcomes',
          description:
            'Choose metrics that explain whether the system and customer experience are healthy.',
        },
        {
          title: 'Choose the right type',
          description:
            'Use counters, gauges, and histograms according to what is being measured.',
        },
        {
          title: 'Control cardinality',
          description:
            'Keep metric dimensions bounded and operationally manageable.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include using raw user IDs as metric labels, relying only on averages, confusing counters and gauges, measuring infrastructure but ignoring business outcomes, creating thousands of unnecessary metrics, using inconsistent units, and alerting on every small fluctuation.',
      highlights: [
        {
          title: 'Unbounded labels',
          description:
            'Labels with unlimited or very large value sets can create excessive time-series cardinality.',
        },
        {
          title: 'Average-only thinking',
          description:
            'Averages can hide tail latency and poor experiences for a subset of users.',
        },
        {
          title: 'Infrastructure-only metrics',
          description:
            'Low CPU does not guarantee that the customer journey is working correctly.',
        },
        {
          title: 'No metric definition',
          description:
            'A number without a clear meaning, unit, and ownership can lead to incorrect decisions.',
        },
      ],
    },

    {
      title: 'Metrics for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, metrics are the language that connects engineering behavior with business outcomes. Leaders should define critical metrics, align teams on SLIs and SLOs, establish ownership, review reliability and capacity trends, monitor cost per business transaction, and use metrics to prioritize engineering work.',
      highlights: [
        {
          title: 'Metric governance',
          description:
            'Defining standards for metric names, units, labels, ownership, and retention.',
        },
        {
          title: 'Reliability management',
          description:
            'Using metrics to evaluate service health and SLO performance.',
        },
        {
          title: 'Business alignment',
          description:
            'Connecting technical measurements to customer and business outcomes.',
        },
        {
          title: 'Cost management',
          description:
            'Using metrics to understand and optimize infrastructure and AI operating costs.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
    'observability',
    'monitoring',
    'logging',
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
    'caching',
    'queues',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default metricsKnowledge
