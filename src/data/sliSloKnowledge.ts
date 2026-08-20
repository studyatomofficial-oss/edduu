import type { KnowledgeDefinition } from './knowledge'

export const sliSloKnowledge: KnowledgeDefinition = {
  technologyId: 'sli-slo',
  slug: 'sli-slo',
  title: 'SLIs & SLOs',
  summary:
    'Service Level Indicators and Service Level Objectives provide a measurable, customer-focused framework for defining and managing the reliability and performance of production services.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What are SLIs and SLOs?',
      content:
        'An SLI, or Service Level Indicator, is a measurable signal describing an aspect of service behavior. An SLO, or Service Level Objective, is the target value or range that the organization wants that SLI to meet. Together they provide a practical way to define reliability in measurable terms.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator of an actual aspect of service performance or reliability.',
        },
        {
          title: 'SLO',
          description:
            'A target defining the desired level of service performance or reliability.',
        },
        {
          title: 'Reliability target',
          description:
            'A measurable expectation for how reliably a service should behave.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about a food delivery service. Suppose customers care whether their food arrives on time. The percentage of orders delivered within 30 minutes is the SLI. If the company decides that at least 95% of orders should arrive within 30 minutes, 95% becomes the SLO.',
      highlights: [
        {
          title: 'Measurement',
          description:
            'The actual percentage of orders arriving within the expected time.',
        },
        {
          title: 'Target',
          description:
            'The percentage the organization wants to achieve.',
        },
        {
          title: 'Gap',
          description:
            'The difference between actual service behavior and the target.',
        },
      ],
    },

    {
      title: 'Why SLIs and SLOs Matter',
      content:
        'Without explicit reliability objectives, teams can disagree about whether a service is healthy. SLIs and SLOs turn vague statements such as “the system should be reliable” into measurable expectations that engineering and product teams can use for prioritization and decision-making.',
      highlights: [
        {
          title: 'Objectivity',
          description:
            'Reliability decisions are based on measurable service behavior.',
        },
        {
          title: 'Customer focus',
          description:
            'The measurements can be connected directly to user experience.',
        },
        {
          title: 'Engineering priorities',
          description:
            'Reliability targets help teams decide where engineering effort is needed.',
        },
      ],
    },

    {
      title: 'SLI vs SLO',
      content:
        'The SLI answers “How are we performing?” while the SLO answers “What level of performance do we want?” For example, if 99.2% of valid requests succeed, 99.2% is the observed SLI. If the target is 99.9%, 99.9% is the SLO.',
      highlights: [
        {
          title: 'Observed value',
          description:
            'The actual measured service behavior.',
        },
        {
          title: 'Target value',
          description:
            'The desired reliability or performance level.',
        },
        {
          title: 'Comparison',
          description:
            'Evaluating the observed SLI against the SLO.',
        },
      ],
    },

    {
      title: 'SLA vs SLO vs SLI',
      content:
        'SLI is the measurement, SLO is the internal reliability target, and SLA is generally a formal agreement with customers or users that may include contractual consequences. These concepts should not be treated as interchangeable.',
      highlights: [
        {
          title: 'SLI',
          description:
            'What is measured.',
        },
        {
          title: 'SLO',
          description:
            'What reliability level the service aims to achieve.',
        },
        {
          title: 'SLA',
          description:
            'A formal service commitment or agreement that may include remedies or consequences.',
        },
      ],
    },

    {
      title: 'Availability SLI',
      content:
        'Availability measures how often a service successfully handles valid requests or remains usable according to a defined measurement method. The exact numerator and denominator must be defined carefully so that the metric reflects customer experience.',
      highlights: [
        {
          title: 'Successful requests',
          description:
            'Requests considered successful according to the service definition.',
        },
        {
          title: 'Valid requests',
          description:
            'Requests included in the availability measurement.',
        },
        {
          title: 'Availability SLO',
          description:
            'The target percentage of successful service behavior.',
        },
      ],
    },

    {
      title: 'Latency SLI',
      content:
        'Latency measures how quickly a service responds. Teams commonly define latency objectives using percentiles rather than averages because averages can hide slow requests experienced by a meaningful portion of users.',
      highlights: [
        {
          title: 'Latency',
          description:
            'The time required for a service operation to complete.',
        },
        {
          title: 'Percentile',
          description:
            'A statistical point describing how a portion of observations perform.',
        },
        {
          title: 'Tail latency',
          description:
            'Latency experienced by the slower portion of requests.',
        },
      ],
    },

    {
      title: 'Error Rate SLI',
      content:
        'Error rate measures the proportion of requests or operations that fail according to a defined error classification. The definition of what counts as an error should reflect actual service reliability rather than blindly treating every non-success response as equally harmful.',
      highlights: [
        {
          title: 'Error rate',
          description:
            'The proportion of measured operations that fail.',
        },
        {
          title: 'Error classification',
          description:
            'Rules determining which outcomes count as service failures.',
        },
        {
          title: 'Success rate',
          description:
            'The proportion of measured operations that meet the success definition.',
        },
      ],
    },

    {
      title: 'Throughput SLI',
      content:
        'Throughput can be an important indicator when the service must process a certain amount of work within a time period. Examples include messages processed per second, jobs completed per minute, or transactions processed per hour.',
      highlights: [
        {
          title: 'Throughput',
          description:
            'The amount of work processed over a period of time.',
        },
        {
          title: 'Processing rate',
          description:
            'The speed at which work is completed.',
        },
        {
          title: 'Capacity relationship',
          description:
            'Throughput objectives can reveal whether a service has enough capacity for expected demand.',
        },
      ],
    },

    {
      title: 'Freshness SLI',
      content:
        'Freshness measures how current data or knowledge is relative to its source. This is especially important for data pipelines, search systems, RAG platforms, analytics systems, and operational dashboards.',
      highlights: [
        {
          title: 'Freshness',
          description:
            'How recently data has been updated relative to the required expectation.',
        },
        {
          title: 'Staleness',
          description:
            'The amount of time data has remained older than the desired freshness level.',
        },
        {
          title: 'Freshness SLO',
          description:
            'A target defining acceptable data freshness.',
        },
      ],
    },

    {
      title: 'Correctness SLI',
      content:
        'Some systems need to measure whether outputs are correct rather than only whether the system is available. Correctness indicators can be especially important for AI systems, financial workflows, data processing, and business-critical automation.',
      highlights: [
        {
          title: 'Correctness',
          description:
            'The degree to which system outputs satisfy defined correctness criteria.',
        },
        {
          title: 'Quality SLI',
          description:
            'A measurable indicator representing an aspect of output quality.',
        },
        {
          title: 'Functional reliability',
          description:
            'The ability of a system to perform the intended function correctly.',
        },
      ],
    },

    {
      title: 'Choosing a Good SLI',
      content:
        'A good SLI should measure something meaningful to users or business outcomes. It should be measurable consistently, have a clear definition, and avoid unnecessary complexity. Teams should prefer signals that represent actual service behavior rather than convenient but weak infrastructure proxies.',
      highlights: [
        {
          title: 'User relevance',
          description:
            'The SLI should reflect something users actually care about.',
        },
        {
          title: 'Measurability',
          description:
            'The measurement should be consistently collectible.',
        },
        {
          title: 'Clear definition',
          description:
            'The team should know exactly what is included and excluded.',
        },
      ],
    },

    {
      title: 'Good SLO Design',
      content:
        'A useful SLO should be specific, measurable, realistic, customer-oriented, and connected to business importance. An SLO should be challenging enough to protect reliability without forcing excessive engineering effort for reliability users do not actually need.',
      highlights: [
        {
          title: 'Specific',
          description:
            'The objective has a precise definition.',
        },
        {
          title: 'Measurable',
          description:
            'The target can be evaluated from collected data.',
        },
        {
          title: 'Business aligned',
          description:
            'The objective reflects meaningful customer or business expectations.',
        },
      ],
    },

    {
      title: 'Reliability Is Not Always 100%',
      content:
        'A common misconception is that every service should target 100% availability or perfect performance. Absolute perfection can be extremely expensive and may not provide meaningful additional customer value. SLOs allow teams to make an explicit reliability trade-off.',
      highlights: [
        {
          title: 'Reliability trade-off',
          description:
            'Balancing reliability investment against cost, speed, and customer value.',
        },
        {
          title: '99.9%',
          description:
            'A high reliability target that still permits a small amount of unreliability.',
        },
        {
          title: 'Business value',
          description:
            'The reliability level should reflect what customers and the business actually need.',
        },
      ],
    },

    {
      title: 'SLO Windows',
      content:
        'SLOs are evaluated over a defined time period such as 7 days, 28 days, or a calendar month. The selected window affects how quickly reliability changes influence decisions and error-budget calculations.',
      highlights: [
        {
          title: 'SLO window',
          description:
            'The time period over which service performance is evaluated against the objective.',
        },
        {
          title: 'Rolling window',
          description:
            'A continuously moving time period.',
        },
        {
          title: 'Calendar window',
          description:
            'A fixed calendar period such as a month.',
        },
      ],
    },

    {
      title: 'SLO Calculation',
      content:
        'For a request-based availability SLO, teams often calculate the ratio of successful eligible events to total eligible events. For example, if 999,000 out of 1,000,000 valid requests succeed, the measured availability is 99.9%.',
      highlights: [
        {
          title: 'Good events',
          description:
            'Events that satisfy the defined success criteria.',
        },
        {
          title: 'Total eligible events',
          description:
            'All events included in the SLI calculation.',
        },
        {
          title: 'SLI value',
          description:
            'Good events divided by total eligible events, according to the defined measurement.',
        },
      ],
    },

    {
      title: 'Error Budget',
      content:
        'An error budget is the amount of unreliability permitted by an SLO. If the SLO is 99.9%, the allowed unreliability is 0.1% during the defined SLO window. The error budget turns the reliability target into a quantity that teams can use for operational decision-making.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The permitted amount of unreliability before the SLO is fully consumed.',
        },
        {
          title: 'Budget consumption',
          description:
            'The amount of permitted unreliability already used.',
        },
        {
          title: 'Budget remaining',
          description:
            'The reliability allowance still available during the SLO window.',
        },
      ],
    },

    {
      title: 'SLO and Error Budget Relationship',
      content:
        'The SLO defines the desired reliability level, while the error budget defines how much unreliability is acceptable. Together they create a practical decision framework: if the service is comfortably within the budget, teams can usually move faster; if the budget is being consumed rapidly, reliability work becomes more urgent.',
      highlights: [
        {
          title: 'SLO',
          description:
            'The reliability target.',
        },
        {
          title: 'Error budget',
          description:
            'The permitted unreliability associated with that target.',
        },
        {
          title: 'Engineering trade-off',
          description:
            'Using reliability performance to inform release and investment decisions.',
        },
      ],
    },

    {
      title: 'Burn Rate',
      content:
        'Burn rate measures how quickly an error budget is being consumed compared with the rate that would be sustainable for the SLO. A burn rate significantly above 1 indicates the service is consuming reliability budget faster than planned.',
      highlights: [
        {
          title: 'Burn rate',
          description:
            'The speed of error-budget consumption relative to the allowed rate.',
        },
        {
          title: 'Fast burn',
          description:
            'Rapid budget consumption that can indicate a serious reliability problem.',
        },
        {
          title: 'Slow burn',
          description:
            'A lower rate of budget consumption that may still become important if it persists.',
        },
      ],
    },

    {
      title: 'SLO-Based Alerting',
      content:
        'SLO-based alerts focus on meaningful reliability degradation rather than arbitrary infrastructure thresholds. Teams can alert on severe error-budget burn or conditions likely to consume a significant portion of the budget.',
      highlights: [
        {
          title: 'Reliability alert',
          description:
            'An alert triggered because service behavior threatens the reliability objective.',
        },
        {
          title: 'Burn-rate alert',
          description:
            'An alert based on how quickly the error budget is being consumed.',
        },
        {
          title: 'Customer impact',
          description:
            'The effect on users that the SLO is intended to represent.',
        },
      ],
    },

    {
      title: 'Multi-Window Alerting',
      content:
        'Using both short and long observation windows can distinguish severe immediate problems from slower reliability degradation. A short window can detect a major outage quickly while a longer window confirms that the issue is materially affecting the SLO.',
      highlights: [
        {
          title: 'Short window',
          description:
            'A recent period used to detect severe immediate degradation.',
        },
        {
          title: 'Long window',
          description:
            'A broader period used to confirm sustained reliability impact.',
        },
        {
          title: 'False positive reduction',
          description:
            'Combining windows can reduce alerts caused by brief anomalies.',
        },
      ],
    },

    {
      title: 'SLOs and Incident Management',
      content:
        'SLOs help incident responders understand the significance of an event. An infrastructure problem with no meaningful customer impact may be less urgent than a smaller technical problem that causes a major SLO violation.',
      highlights: [
        {
          title: 'Impact-based prioritization',
          description:
            'Prioritizing incidents based on actual service impact.',
        },
        {
          title: 'SLO violation',
          description:
            'A measurable failure to meet the service objective.',
        },
        {
          title: 'Reliability context',
          description:
            'Using SLO performance to understand incident severity.',
        },
      ],
    },

    {
      title: 'SLOs and Capacity Planning',
      content:
        'SLOs can influence capacity planning because traffic growth, resource saturation, and dependency limits can eventually threaten latency or availability objectives. Capacity planning should therefore consider both expected demand and reliability targets.',
      highlights: [
        {
          title: 'Demand',
          description:
            'Expected workload placed on the system.',
        },
        {
          title: 'Capacity',
          description:
            'The amount of workload the system can handle within acceptable performance limits.',
        },
        {
          title: 'Reliability margin',
          description:
            'Additional capacity maintained to reduce the risk of reliability degradation during demand spikes.',
        },
      ],
    },

    {
      title: 'SLOs and Change Management',
      content:
        'Reliability objectives provide a useful signal for deciding how aggressively teams should release changes. If reliability is already degrading and the error budget is nearly exhausted, teams may prioritize reliability work and reduce risky changes.',
      highlights: [
        {
          title: 'Change risk',
          description:
            'The potential reliability impact introduced by a production change.',
        },
        {
          title: 'Release policy',
          description:
            'Rules governing how and when changes are released.',
        },
        {
          title: 'Budget-aware delivery',
          description:
            'Adjusting delivery decisions according to current reliability performance.',
        },
      ],
    },

    {
      title: 'SLOs and Product Management',
      content:
        'SLOs are not purely engineering metrics. Product teams should participate in defining what reliability customers actually need. Different product capabilities may legitimately have different reliability requirements based on business value and user expectations.',
      highlights: [
        {
          title: 'Product requirement',
          description:
            'A customer or business expectation that may influence the reliability target.',
        },
        {
          title: 'Critical workflow',
          description:
            'A user journey where reliability has especially high business impact.',
        },
        {
          title: 'Trade-off',
          description:
            'Balancing reliability against cost, development speed, and product value.',
        },
      ],
    },

    {
      title: 'SLOs for APIs',
      content:
        'An API may define SLOs for successful request rate, latency, availability, and throughput. Different endpoints may require different targets depending on business criticality.',
      highlights: [
        {
          title: 'API availability',
          description:
            'The proportion of eligible API operations that successfully complete.',
        },
        {
          title: 'API latency',
          description:
            'The time required for API requests to complete.',
        },
        {
          title: 'Endpoint criticality',
          description:
            'The business importance of a particular API endpoint.',
        },
      ],
    },

    {
      title: 'SLOs for Microservices',
      content:
        'In a microservices architecture, each service can have its own SLOs while the overall product may have user-facing objectives. Teams must avoid optimizing individual service SLOs while the end-to-end user journey remains unreliable.',
      highlights: [
        {
          title: 'Service SLO',
          description:
            'A reliability objective for one service.',
        },
        {
          title: 'End-to-end SLO',
          description:
            'A reliability objective representing the complete user workflow.',
        },
        {
          title: 'Dependency',
          description:
            'A service or system required by another service.',
        },
      ],
    },

    {
      title: 'SLOs for Distributed Systems',
      content:
        'Distributed systems introduce dependencies, network failures, retries, queues, and partial failures. SLO design should therefore consider the complete user-facing operation rather than measuring isolated infrastructure components alone.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'Some components fail while other components continue operating.',
        },
        {
          title: 'Dependency reliability',
          description:
            'The reliability characteristics of systems required by the service.',
        },
        {
          title: 'End-to-end reliability',
          description:
            'The reliability experienced across the complete operation.',
        },
      ],
    },

    {
      title: 'SLOs for RAG Systems',
      content:
        'A RAG system can define SLOs for retrieval latency, answer-generation latency, system availability, ingestion freshness, retrieval success, and potentially measurable quality signals. Technical availability alone may not represent whether the RAG system is useful.',
      highlights: [
        {
          title: 'Retrieval latency',
          description:
            'The time required to retrieve relevant context.',
        },
        {
          title: 'Knowledge freshness',
          description:
            'How current indexed knowledge is relative to the defined requirement.',
        },
        {
          title: 'Answer quality',
          description:
            'A measurable representation of response usefulness or correctness when an appropriate evaluation method exists.',
        },
      ],
    },

    {
      title: 'SLOs for AI Systems',
      content:
        'AI systems require broader reliability definitions because a request can technically succeed while the result is poor. Depending on the product, SLOs may cover availability, latency, provider reliability, cost, freshness, safety, and measurable output quality.',
      highlights: [
        {
          title: 'Technical reliability',
          description:
            'Whether the system is available and responsive.',
        },
        {
          title: 'Functional reliability',
          description:
            'Whether the system performs the intended task correctly.',
        },
        {
          title: 'AI quality',
          description:
            'Measurable output behavior relevant to the specific AI product.',
        },
      ],
    },

    {
      title: 'SLOs for AI Voice Platforms',
      content:
        'An AI voice platform can define SLOs for call connection success, speech recognition availability, response latency, text-to-speech success, call completion, provider availability, and cost-related operational constraints.',
      highlights: [
        {
          title: 'Call connection SLO',
          description:
            'The target percentage of calls that successfully establish a usable connection.',
        },
        {
          title: 'Voice latency SLO',
          description:
            'A target for acceptable response delay during a voice interaction.',
        },
        {
          title: 'Provider availability',
          description:
            'The reliability target for critical external voice or AI providers.',
        },
      ],
    },

    {
      title: 'SLO Ownership',
      content:
        'SLO ownership should be explicit. Engineering teams typically own implementation and measurement, while product and business stakeholders should participate in deciding what level of reliability is valuable. Platform and SRE teams may provide standards and tooling.',
      highlights: [
        {
          title: 'Engineering ownership',
          description:
            'Responsible for building and operating the service to meet the objective.',
        },
        {
          title: 'Product ownership',
          description:
            'Responsible for representing customer and business expectations.',
        },
        {
          title: 'Platform governance',
          description:
            'Providing common standards, tooling, and reliability practices.',
        },
      ],
    },

    {
      title: 'SLO Review',
      content:
        'SLOs should be reviewed periodically. If a target is consistently missed, the team should investigate whether reliability must improve or whether the objective was unrealistic. If a target is consistently exceeded with large margin, the team may be able to revisit the objective and investment level.',
      highlights: [
        {
          title: 'Review cycle',
          description:
            'A recurring process for evaluating whether SLOs remain appropriate.',
        },
        {
          title: 'Target adjustment',
          description:
            'Changing an objective when business or technical requirements change.',
        },
        {
          title: 'Reliability investment',
          description:
            'Engineering effort dedicated to improving service reliability.',
        },
      ],
    },

    {
      title: 'Common SLO Mistakes',
      content:
        'Common mistakes include choosing metrics that users do not care about, setting 100% objectives without justification, measuring only infrastructure health, defining ambiguous SLIs, having no owner, ignoring dependencies, creating SLOs without reliable measurement, and treating SLOs as a reporting exercise rather than an engineering decision framework.',
      highlights: [
        {
          title: 'Wrong SLI',
          description:
            'The measurement does not meaningfully represent user experience.',
        },
        {
          title: 'Infrastructure-only view',
          description:
            'The team measures CPU or memory while ignoring customer-facing behavior.',
        },
        {
          title: 'No ownership',
          description:
            'Nobody is accountable for achieving or reviewing the objective.',
        },
        {
          title: 'No action',
          description:
            'SLO data is collected but never influences engineering decisions.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is an SLI? What is an SLO? What is the difference between SLI, SLO, and SLA? How would you define an availability SLI? Why use percentiles for latency? What is an error budget? What is burn rate? How do SLOs influence deployment decisions? How would you define SLOs for an AI or RAG platform?',
      highlights: [
        {
          title: 'Definitions',
          description:
            'Clearly distinguish SLI, SLO, SLA, and error budget.',
        },
        {
          title: 'Design',
          description:
            'Explain how to select meaningful customer-oriented indicators.',
        },
        {
          title: 'Leadership',
          description:
            'Explain how SLOs influence product, engineering, and operational decisions.',
        },
        {
          title: 'AI reliability',
          description:
            'Explain why availability alone is insufficient for many AI products.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I think of an SLI as the measurement, an SLO as the target, and an SLA as the formal external commitment when one exists. I start by identifying what the customer actually cares about, then choose measurable indicators such as availability, latency, correctness, or freshness. I define the SLO over a clear time window and calculate the corresponding error budget. I then use burn rate and SLO performance to drive alerting and engineering decisions. For an AI system, I would go beyond uptime and include meaningful signals such as model latency, provider availability, retrieval freshness, and measurable output quality where appropriate.”',
      highlights: [
        {
          title: 'Customer first',
          description:
            'Start from user experience rather than convenient infrastructure metrics.',
        },
        {
          title: 'Measurable',
          description:
            'Every objective should have a clear measurement method.',
        },
        {
          title: 'Decision framework',
          description:
            'Use SLOs and error budgets to influence engineering and product choices.',
        },
      ],
    },

    {
      title: 'SLOs for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, SLOs provide a shared language between product, engineering, operations, and leadership. A technical leader should help define meaningful objectives, align teams on ownership, establish measurement standards, connect SLOs to incident management and delivery decisions, and ensure reliability investments reflect business priorities.',
      highlights: [
        {
          title: 'Cross-functional alignment',
          description:
            'Create a shared understanding of what reliable service means.',
        },
        {
          title: 'Program governance',
          description:
            'Track reliability objectives and improvement initiatives across teams.',
        },
        {
          title: 'Product decisions',
          description:
            'Use reliability targets to balance customer value, cost, and delivery speed.',
        },
        {
          title: 'Executive communication',
          description:
            'Translate technical reliability into measurable business outcomes.',
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
    'error-budgets',
    'root-cause-analysis',
    'disaster-recovery',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'scalability',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'queues',
    'kubernetes',
    'docker',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default sliSloKnowledge
