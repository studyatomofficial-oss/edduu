import type { KnowledgeDefinition } from './knowledge'

export const grafanaKnowledge: KnowledgeDefinition = {
  technologyId: 'grafana',
  slug: 'grafana',
  title: 'Grafana',
  summary:
    'Grafana is an observability and visualization platform used to build dashboards, explore telemetry, visualize metrics, logs, and traces, and create operational views for engineering teams.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Grafana?',
      content:
        'Grafana is a visualization and observability platform. It connects to data sources such as Prometheus, Loki, Elasticsearch, cloud monitoring systems, and databases, then presents that information through dashboards, panels, queries, variables, and alerts.',
      highlights: [
        {
          title: 'Grafana',
          description:
            'A platform for visualizing and exploring observability and operational data.',
        },
        {
          title: 'Dashboard',
          description:
            'A collection of visual panels designed to provide an operational view of a system.',
        },
        {
          title: 'Panel',
          description:
            'An individual visualization or data view inside a dashboard.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Grafana as the dashboard of a control room. Prometheus may collect the numbers, logs may contain detailed events, and tracing may show request journeys. Grafana puts these signals together on screens so an engineer or manager can quickly understand what is happening.',
      highlights: [
        {
          title: 'Control room',
          description:
            'Represents the Grafana environment.',
        },
        {
          title: 'Screen',
          description:
            'Represents a dashboard panel.',
        },
        {
          title: 'Sensors',
          description:
            'Represent the underlying monitoring and observability data sources.',
        },
      ],
    },

    {
      title: 'Why Grafana Matters',
      content:
        'Production systems generate large amounts of operational data. Grafana turns that data into understandable visual views that help teams detect trends, investigate incidents, compare environments, monitor SLOs, and make capacity and reliability decisions.',
      highlights: [
        {
          title: 'Visibility',
          description:
            'Makes system behavior easier to understand.',
        },
        {
          title: 'Investigation',
          description:
            'Helps engineers explore telemetry during incidents.',
        },
        {
          title: 'Decision support',
          description:
            'Provides data that engineering and leadership teams can use for operational decisions.',
        },
      ],
    },

    {
      title: 'Grafana vs Prometheus',
      content:
        'Prometheus and Grafana are complementary rather than identical. Prometheus is primarily a metrics collection, storage, and query system. Grafana is primarily a visualization and observability interface that can query Prometheus and many other data sources.',
      highlights: [
        {
          title: 'Prometheus',
          description:
            'Collects, stores, and queries time-series metrics.',
        },
        {
          title: 'Grafana',
          description:
            'Visualizes and explores data from Prometheus and other sources.',
        },
        {
          title: 'Integration',
          description:
            'Grafana can use Prometheus as a data source and query it using PromQL.',
        },
      ],
    },

    {
      title: 'Grafana Data Sources',
      content:
        'Grafana can connect to many types of data sources. Common observability examples include Prometheus for metrics, Loki for logs, and tracing systems for distributed traces. It can also connect to databases and cloud monitoring platforms.',
      highlights: [
        {
          title: 'Data source',
          description:
            'A backend system from which Grafana retrieves data.',
        },
        {
          title: 'Prometheus',
          description:
            'A common metrics data source for Grafana.',
        },
        {
          title: 'Loki',
          description:
            'A log aggregation system commonly used with Grafana.',
        },
      ],
    },

    {
      title: 'Dashboards',
      content:
        'A Grafana dashboard organizes related operational information into a single view. A good dashboard focuses on a specific purpose such as service health, infrastructure capacity, an application, an AI workload, or an incident.',
      highlights: [
        {
          title: 'Dashboard',
          description:
            'A structured collection of panels for monitoring a system or objective.',
        },
        {
          title: 'Operational dashboard',
          description:
            'A dashboard designed to help teams understand current system health and take action.',
        },
        {
          title: 'Executive dashboard',
          description:
            'A higher-level dashboard focused on outcomes, reliability, business impact, and trends.',
        },
      ],
    },

    {
      title: 'Panels',
      content:
        'Panels are the building blocks of Grafana dashboards. Different panels can display time-series graphs, statistics, tables, gauges, heatmaps, logs, traces, and other information depending on the data source and visualization needs.',
      highlights: [
        {
          title: 'Time-series panel',
          description:
            'Visualizes measurements across time.',
        },
        {
          title: 'Stat panel',
          description:
            'Displays a key numerical value or summary.',
        },
        {
          title: 'Table panel',
          description:
            'Displays structured rows and columns of data.',
        },
      ],
    },

    {
      title: 'Time-Series Visualization',
      content:
        'Time-series panels are useful for understanding trends such as request rate, error rate, CPU utilization, latency, traffic, queue depth, and memory usage. Time-based visualization makes spikes, gradual growth, and recurring patterns easier to identify.',
      highlights: [
        {
          title: 'Time series',
          description:
            'A sequence of values observed over time.',
        },
        {
          title: 'Trend',
          description:
            'The general direction of a metric over a period.',
        },
        {
          title: 'Spike',
          description:
            'A sudden increase or decrease relative to normal behavior.',
        },
      ],
    },

    {
      title: 'Grafana Queries',
      content:
        'A Grafana panel uses a query to retrieve data from its configured data source. For Prometheus, the query language is PromQL. Other data sources use their own query mechanisms.',
      highlights: [
        {
          title: 'Query',
          description:
            'An expression used to retrieve or calculate data from a data source.',
        },
        {
          title: 'PromQL',
          description:
            'The query language used by Prometheus.',
        },
        {
          title: 'Panel query',
          description:
            'The query responsible for providing data to a dashboard panel.',
        },
      ],
    },

    {
      title: 'Variables',
      content:
        'Grafana variables allow dashboards to become reusable and interactive. Instead of creating separate dashboards for every environment, region, service, or cluster, a variable can allow the viewer to select the desired value.',
      highlights: [
        {
          title: 'Variable',
          description:
            'A selectable value used to dynamically change dashboard queries or views.',
        },
        {
          title: 'Environment selector',
          description:
            'A variable allowing users to switch between environments such as development, staging, and production.',
        },
        {
          title: 'Dashboard reuse',
          description:
            'Using variables to avoid duplicating dashboards for similar systems.',
        },
      ],
    },

    {
      title: 'Dashboard Time Range',
      content:
        'Grafana dashboards can be viewed over different time ranges such as the last 15 minutes, hour, day, or a custom period. Selecting an appropriate time range is important because different operational questions require different historical perspectives.',
      highlights: [
        {
          title: 'Time range',
          description:
            'The period of data displayed by a dashboard or panel.',
        },
        {
          title: 'Relative range',
          description:
            'A range such as the last 30 minutes or last 24 hours.',
        },
        {
          title: 'Custom range',
          description:
            'A user-selected start and end time.',
        },
      ],
    },

    {
      title: 'Grafana Annotations',
      content:
        'Annotations add event information to dashboards. Deployment events, incidents, configuration changes, or major releases can be shown alongside metric changes, helping teams correlate system behavior with operational events.',
      highlights: [
        {
          title: 'Annotation',
          description:
            'An event marker displayed on a dashboard timeline.',
        },
        {
          title: 'Deployment marker',
          description:
            'An annotation showing when a deployment occurred.',
        },
        {
          title: 'Correlation',
          description:
            'Comparing operational changes with known events to support investigation.',
        },
      ],
    },

    {
      title: 'Grafana Alerts',
      content:
        'Grafana provides alerting capabilities that evaluate configured queries and conditions. Alerts can be routed to notification destinations and used to surface operational conditions that require attention.',
      highlights: [
        {
          title: 'Grafana alert',
          description:
            'An alert generated from a configured data query and condition.',
        },
        {
          title: 'Alert rule',
          description:
            'The configuration defining when an alert should become active.',
        },
        {
          title: 'Notification',
          description:
            'The message or event sent when an alert condition is triggered.',
        },
      ],
    },

    {
      title: 'Alerting Philosophy',
      content:
        'Dashboards are useful for investigation and awareness, while alerts should focus on conditions requiring action. A mature Grafana setup avoids alerting on every minor fluctuation and instead prioritizes customer impact, reliability objectives, and actionable operational conditions.',
      highlights: [
        {
          title: 'Actionable alert',
          description:
            'An alert that requires a clear response.',
        },
        {
          title: 'Noise',
          description:
            'Unnecessary notifications that do not require meaningful action.',
        },
        {
          title: 'Customer impact',
          description:
            'The effect of a technical problem on users or business operations.',
        },
      ],
    },

    {
      title: 'Grafana and Prometheus',
      content:
        'A common architecture uses Prometheus to scrape and store metrics while Grafana queries Prometheus for dashboards. PromQL expressions inside Grafana panels can calculate request rates, error percentages, latency percentiles, resource utilization, and SLO indicators.',
      highlights: [
        {
          title: 'Metrics backend',
          description:
            'Prometheus provides the metric data.',
        },
        {
          title: 'Visualization layer',
          description:
            'Grafana presents the metric data visually.',
        },
        {
          title: 'PromQL',
          description:
            'Queries used to retrieve and calculate Prometheus metrics.',
        },
      ],
    },

    {
      title: 'Grafana and Logs',
      content:
        'Grafana can visualize and explore logs when connected to a compatible log backend. This allows teams to move from high-level metrics into detailed event records during incident investigation.',
      highlights: [
        {
          title: 'Log exploration',
          description:
            'Searching and analyzing application or infrastructure logs.',
        },
        {
          title: 'Log backend',
          description:
            'The system responsible for storing and serving logs.',
        },
        {
          title: 'Metric-to-log workflow',
          description:
            'Using a metric problem as the starting point for detailed log investigation.',
        },
      ],
    },

    {
      title: 'Grafana and Tracing',
      content:
        'Grafana can provide interfaces for exploring distributed traces through compatible tracing data sources. Teams can move from metrics or logs into representative traces to understand individual request paths.',
      highlights: [
        {
          title: 'Trace exploration',
          description:
            'Viewing and analyzing distributed traces.',
        },
        {
          title: 'Metric-to-trace workflow',
          description:
            'Using metrics to identify a problem and traces to investigate individual requests.',
        },
        {
          title: 'Correlation',
          description:
            'Connecting related metrics, logs, and traces for faster investigation.',
        },
      ],
    },

    {
      title: 'Three Pillars of Observability',
      content:
        'Grafana can act as a common interface across metrics, logs, and traces. Metrics provide aggregated health signals, logs provide detailed events, and traces provide request-level dependency paths.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements describing system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Detailed records of system events.',
        },
        {
          title: 'Traces',
          description:
            'Request journeys across distributed components.',
        },
      ],
    },

    {
      title: 'Grafana for Kubernetes',
      content:
        'Grafana is commonly used to visualize Kubernetes metrics. Dashboards can show cluster health, node resources, pod utilization, workload replicas, container restarts, network behavior, and application-level metrics.',
      highlights: [
        {
          title: 'Cluster dashboard',
          description:
            'A dashboard showing overall Kubernetes environment health.',
        },
        {
          title: 'Node dashboard',
          description:
            'A view of node resources and health.',
        },
        {
          title: 'Workload dashboard',
          description:
            'A view of deployments, pods, replicas, and workload behavior.',
        },
      ],
    },

    {
      title: 'Grafana for Cloud Infrastructure',
      content:
        'Grafana can visualize cloud metrics from AWS, Azure, Google Cloud, and other infrastructure platforms. Teams can combine cloud-provider metrics with application metrics to understand end-to-end system health.',
      highlights: [
        {
          title: 'Cloud metric',
          description:
            'A measurement provided by a cloud infrastructure or managed service.',
        },
        {
          title: 'Infrastructure dashboard',
          description:
            'A dashboard showing resource and service health.',
        },
        {
          title: 'Cross-layer visibility',
          description:
            'Combining application, infrastructure, and business signals in one operational view.',
        },
      ],
    },

    {
      title: 'Grafana for SLI and SLO',
      content:
        'Grafana dashboards can visualize SLI measurements and SLO performance. Teams can display availability, latency compliance, error-budget consumption, and reliability trends so engineering and leadership can understand whether services are meeting their objectives.',
      highlights: [
        {
          title: 'SLI dashboard',
          description:
            'A visualization of measured service reliability indicators.',
        },
        {
          title: 'SLO dashboard',
          description:
            'A visualization showing performance against reliability targets.',
        },
        {
          title: 'Error budget',
          description:
            'The amount of unreliability allowed while still meeting an SLO.',
        },
      ],
    },

    {
      title: 'Grafana for Incident Response',
      content:
        'During an incident, dashboards provide a shared operational picture. Teams can examine traffic, errors, latency, saturation, dependencies, deployment annotations, and infrastructure signals to determine scope and likely causes.',
      highlights: [
        {
          title: 'Incident dashboard',
          description:
            'A dashboard designed to support real-time incident investigation.',
        },
        {
          title: 'Scope',
          description:
            'The set of services, users, regions, or workflows affected by an incident.',
        },
        {
          title: 'Timeline',
          description:
            'A sequence of operational changes and symptoms used during investigation.',
        },
      ],
    },

    {
      title: 'Golden Signals Dashboard',
      content:
        'A strong service dashboard often starts with the four golden signals: latency, traffic, errors, and saturation. These provide a compact view of whether demand is increasing, requests are becoming slower, failures are increasing, or resources are approaching capacity.',
      highlights: [
        {
          title: 'Latency',
          description:
            'How long operations take.',
        },
        {
          title: 'Traffic',
          description:
            'How much demand reaches the service.',
        },
        {
          title: 'Errors',
          description:
            'How many or what percentage of operations fail.',
        },
        {
          title: 'Saturation',
          description:
            'How close the system is to resource or capacity limits.',
        },
      ],
    },

    {
      title: 'RED Dashboard',
      content:
        'For request-driven services, a RED dashboard focuses on Rate, Errors, and Duration. This is a practical way to create a service-level operational view without overwhelming users with unnecessary metrics.',
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
            'Request processing time.',
        },
      ],
    },

    {
      title: 'USE Dashboard',
      content:
        'For infrastructure resources, a USE dashboard focuses on Utilization, Saturation, and Errors. It is useful for CPU, memory, storage, networking, and other resource-oriented monitoring.',
      highlights: [
        {
          title: 'Utilization',
          description:
            'The percentage of resource capacity being consumed.',
        },
        {
          title: 'Saturation',
          description:
            'The amount of work waiting because of resource constraints.',
        },
        {
          title: 'Errors',
          description:
            'Errors associated with the resource.',
        },
      ],
    },

    {
      title: 'Grafana Dashboard Design',
      content:
        'A good dashboard answers a specific operational question. The most important information should appear first, units should be obvious, panels should avoid unnecessary decoration, and dashboards should provide enough context to distinguish normal behavior from abnormal behavior.',
      highlights: [
        {
          title: 'Purpose',
          description:
            'Every dashboard should have a clear operational objective.',
        },
        {
          title: 'Hierarchy',
          description:
            'Important health signals should appear before detailed diagnostics.',
        },
        {
          title: 'Context',
          description:
            'Users should be able to understand what a value means and whether it is healthy.',
        },
      ],
    },

    {
      title: 'Dashboard Anti-Patterns',
      content:
        'Poor dashboards contain hundreds of panels, unclear labels, inconsistent units, decorative visualizations, excessive colors, and no indication of expected behavior. A dashboard should reduce cognitive load rather than increase it.',
      highlights: [
        {
          title: 'Dashboard overload',
          description:
            'Too much information presented without prioritization.',
        },
        {
          title: 'Unclear units',
          description:
            'Values whose measurement units are difficult to understand.',
        },
        {
          title: 'No thresholds',
          description:
            'No visual or contextual indication of healthy versus unhealthy behavior.',
        },
      ],
    },

    {
      title: 'Grafana Variables and Multi-Environment Systems',
      content:
        'Variables are especially useful when the same application runs across development, staging, and production or across multiple regions and clusters. A single dashboard can dynamically switch between these environments.',
      highlights: [
        {
          title: 'Environment',
          description:
            'A deployment context such as development, staging, or production.',
        },
        {
          title: 'Region',
          description:
            'A geographic or infrastructure location.',
        },
        {
          title: 'Cluster',
          description:
            'A group of infrastructure resources or workloads managed as one environment.',
        },
      ],
    },

    {
      title: 'Grafana for AI Systems',
      content:
        'AI applications benefit from dashboards that combine technical, AI-specific, and business metrics. Useful views include model latency, token consumption, provider errors, request volume, retrieval latency, tool-call failures, cost per request, and user success metrics.',
      highlights: [
        {
          title: 'Model latency',
          description:
            'Time required for AI model responses.',
        },
        {
          title: 'Token usage',
          description:
            'Input and output token consumption.',
        },
        {
          title: 'AI cost',
          description:
            'Estimated cost associated with model and infrastructure usage.',
        },
      ],
    },

    {
      title: 'Grafana for AI Voice Platforms',
      content:
        'For an AI voice platform, a useful dashboard can show active calls, calls per minute, connection rate, dropped calls, speech-to-text latency, model latency, text-to-speech latency, provider errors, call completion rate, and cost per minute.',
      highlights: [
        {
          title: 'Active calls',
          description:
            'The number of voice sessions currently in progress.',
        },
        {
          title: 'Call completion rate',
          description:
            'The percentage of calls reaching successful completion.',
        },
        {
          title: 'Cost per minute',
          description:
            'Estimated cost associated with each minute of voice interaction.',
        },
      ],
    },

    {
      title: 'Grafana for RAG Systems',
      content:
        'RAG dashboards can show document ingestion, embedding failures, retrieval latency, search result counts, reranking latency, model latency, token usage, answer-quality indicators, and document freshness.',
      highlights: [
        {
          title: 'Retrieval latency',
          description:
            'Time required to retrieve relevant context.',
        },
        {
          title: 'Ingestion throughput',
          description:
            'The amount of knowledge processed over time.',
        },
        {
          title: 'Document freshness',
          description:
            'How current the indexed knowledge is.',
        },
      ],
    },

    {
      title: 'Grafana and Capacity Planning',
      content:
        'Historical dashboards help teams understand growth and forecast capacity. Trends in traffic, CPU, memory, storage, database connections, queue depth, and AI usage can support decisions about scaling and architecture.',
      highlights: [
        {
          title: 'Capacity trend',
          description:
            'The historical change in resource requirements.',
        },
        {
          title: 'Forecast',
          description:
            'An estimate of future capacity needs based on observed trends.',
        },
        {
          title: 'Headroom',
          description:
            'Reserved capacity available for growth and unexpected demand.',
        },
      ],
    },

    {
      title: 'Grafana Security',
      content:
        'Grafana dashboards can reveal sensitive infrastructure and business information. Production deployments should use authentication, authorization, appropriate folder and dashboard permissions, secure data-source credentials, and careful control over exposed information.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifying who is accessing Grafana.',
        },
        {
          title: 'Authorization',
          description:
            'Controlling what an authenticated user can access or modify.',
        },
        {
          title: 'Credential protection',
          description:
            'Keeping data-source credentials and secrets secure.',
        },
      ],
    },

    {
      title: 'Grafana High Availability',
      content:
        'For critical observability platforms, Grafana itself may need resilient deployment. High availability considerations include multiple Grafana instances, shared configuration or external state where required, reliable data sources, load balancing, backups, and controlled upgrades.',
      highlights: [
        {
          title: 'Grafana HA',
          description:
            'Deploying Grafana so the visualization layer remains available despite individual instance failures.',
        },
        {
          title: 'Load balancing',
          description:
            'Distributing dashboard traffic across Grafana instances.',
        },
        {
          title: 'Resilience',
          description:
            'Ensuring observability remains available during infrastructure failures.',
        },
      ],
    },

    {
      title: 'Grafana Performance',
      content:
        'Dashboard performance depends on query complexity, time range, data volume, panel count, refresh frequency, and data-source performance. Dashboards should avoid unnecessarily expensive queries and excessive automatic refresh rates.',
      highlights: [
        {
          title: 'Query performance',
          description:
            'How efficiently dashboard queries execute.',
        },
        {
          title: 'Refresh interval',
          description:
            'How frequently a dashboard or panel requests new data.',
        },
        {
          title: 'Panel count',
          description:
            'The number of visualizations loaded by a dashboard.',
        },
      ],
    },

    {
      title: 'Grafana Cost Management',
      content:
        'Grafana itself may not be the largest observability cost; expensive data queries, high telemetry volume, retention, and backend infrastructure can dominate. Good dashboard design reduces unnecessary queries and helps teams focus on high-value signals.',
      highlights: [
        {
          title: 'Query efficiency',
          description:
            'Avoiding unnecessarily expensive dashboard queries.',
        },
        {
          title: 'Telemetry volume',
          description:
            'The amount of data stored and queried by observability systems.',
        },
        {
          title: 'Operational cost',
          description:
            'The total infrastructure and service cost required to maintain observability.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Grafana? How is Grafana different from Prometheus? What is a dashboard? What is a panel? How does Grafana connect to data sources? How would you design a production dashboard? What makes a dashboard useful during incidents? How would you monitor an AI application with Grafana?',
      highlights: [
        {
          title: 'Grafana architecture',
          description:
            'Explain dashboards, panels, queries, variables, and data sources.',
        },
        {
          title: 'Prometheus integration',
          description:
            'Explain how Grafana queries Prometheus using PromQL.',
        },
        {
          title: 'Operational dashboards',
          description:
            'Explain how dashboards support incidents, SLOs, capacity, and reliability.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “Grafana is the visualization and observability layer I would use to turn metrics, logs, and traces into operational dashboards. For example, Prometheus can provide metrics and Grafana can visualize request rate, error rate, latency percentiles, and saturation. I would design dashboards around specific operational questions rather than creating one huge dashboard. During incidents, I would prioritize customer-impact signals, dependencies, deployment annotations, and SLO indicators. For AI systems, I would additionally visualize model latency, token usage, provider errors, retrieval latency, and cost.”',
      highlights: [
        {
          title: 'Purpose-driven',
          description:
            'Design dashboards around specific questions and decisions.',
        },
        {
          title: 'Layered visibility',
          description:
            'Combine metrics, logs, traces, and business signals.',
        },
        {
          title: 'Leadership perspective',
          description:
            'Use dashboards to support reliability, prioritization, capacity, and business decisions.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating Grafana as the monitoring backend itself, building dashboards with too many panels, showing metrics without context, ignoring data-source performance, exposing sensitive information, using dashboards as a substitute for actionable alerts, and failing to distinguish executive views from engineering diagnostic views.',
      highlights: [
        {
          title: 'Grafana equals Prometheus',
          description:
            'Grafana is primarily a visualization and observability interface, while Prometheus is a metrics collection and time-series system.',
        },
        {
          title: 'Dashboard overload',
          description:
            'Too many panels make it harder to identify important signals.',
        },
        {
          title: 'No operational purpose',
          description:
            'A dashboard without a clear question or audience becomes difficult to maintain and use.',
        },
        {
          title: 'Sensitive data exposure',
          description:
            'Dashboards should not unnecessarily expose secrets, personal data, or confidential business information.',
        },
      ],
    },

    {
      title: 'Grafana for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, Grafana is valuable as a shared decision-making interface. Leaders should ensure teams agree on critical dashboards, metric definitions, SLO views, incident dashboards, ownership, access controls, and review cadence. The objective is not to have more charts; it is to make system health and business impact understandable quickly.',
      highlights: [
        {
          title: 'Dashboard governance',
          description:
            'Establishing standards for ownership, purpose, naming, access, and maintenance.',
        },
        {
          title: 'Operational alignment',
          description:
            'Creating shared views that allow engineering and leadership teams to discuss the same evidence.',
        },
        {
          title: 'Reliability management',
          description:
            'Using dashboards to understand SLOs, incidents, trends, and capacity.',
        },
        {
          title: 'Business alignment',
          description:
            'Connecting technical system behavior with customer and business outcomes.',
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
    'docker',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default grafanaKnowledge
