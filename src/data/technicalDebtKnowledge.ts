import type { KnowledgeDefinition } from './knowledge'

export const technicalDebtKnowledge: KnowledgeDefinition = {
  technologyId: 'technical-debt',
  slug: 'technical-debt',
  title: 'Technical Debt',
  summary:
    'Technical debt is the future cost created when a team chooses a faster, simpler, or otherwise constrained implementation today that creates additional maintenance, risk, or change cost later.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Technical Debt?',
      content:
        'Technical debt describes the future cost created by technical choices that make the current solution harder, slower, riskier, or more expensive to change. Technical debt is not automatically bad engineering. Sometimes teams deliberately accept debt because speed, learning, deadlines, or uncertainty make it a reasonable trade-off.',
      highlights: [
        {
          title: 'Present benefit',
          description:
            'A short-term benefit such as faster delivery, lower initial cost, or faster learning.',
        },
        {
          title: 'Future cost',
          description:
            'Additional effort, risk, complexity, or reduced flexibility created by the decision.',
        },
        {
          title: 'Trade-off',
          description:
            'Technical debt should be evaluated as a deliberate trade-off rather than treated as a moral failure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine moving into a new house and leaving some boxes unpacked because you need to start work immediately. That saves time today, but finding things later becomes harder. If you keep adding boxes without organizing them, the cost grows. Technical debt works similarly: a shortcut can be useful, but unmanaged shortcuts accumulate future cost.',
      highlights: [
        {
          title: 'Shortcut',
          description:
            'A decision that reduces effort now.',
        },
        {
          title: 'Interest',
          description:
            'The repeated extra cost caused by the shortcut.',
        },
        {
          title: 'Repayment',
          description:
            'Engineering work that reduces the accumulated future cost.',
        },
      ],
    },

    {
      title: 'Why Technical Debt Happens',
      content:
        'Technical debt can arise from intentional business decisions, time pressure, incomplete information, evolving requirements, rapid experimentation, lack of engineering capacity, outdated dependencies, organizational constraints, or simply accumulated system complexity.',
      highlights: [
        {
          title: 'Time pressure',
          description:
            'A team chooses a faster implementation to meet an important deadline.',
        },
        {
          title: 'Uncertainty',
          description:
            'The team learns what works before investing heavily in a permanent architecture.',
        },
        {
          title: 'Evolution',
          description:
            'A system grows beyond assumptions made when it was originally designed.',
        },
        {
          title: 'Neglect',
          description:
            'Problems remain unresolved because they repeatedly lose prioritization decisions.',
        },
      ],
    },

    {
      title: 'Intentional vs Unintentional Debt',
      content:
        'Intentional technical debt is knowingly accepted as a trade-off. Unintentional debt appears when teams create future cost without fully recognizing it, often because of limited experience, incomplete requirements, poor communication, or evolving system complexity.',
      highlights: [
        {
          title: 'Intentional',
          description:
            'The team understands the trade-off and accepts the future cost.',
        },
        {
          title: 'Unintentional',
          description:
            'Future cost emerges without being consciously planned.',
        },
        {
          title: 'Leadership implication',
          description:
            'Intentional debt should still be tracked so the organization can make informed future decisions.',
        },
      ],
    },

    {
      title: 'Technical Debt is Not Just Bad Code',
      content:
        'Technical debt can exist in architecture, infrastructure, testing, documentation, security, data models, dependencies, deployment processes, observability, operational practices, and development workflows. It is broader than code quality alone.',
      highlights: [
        {
          title: 'Architecture debt',
          description:
            'Design choices make future change or scale harder.',
        },
        {
          title: 'Test debt',
          description:
            'Insufficient automated or manual validation increases regression risk.',
        },
        {
          title: 'Operational debt',
          description:
            'Weak monitoring, deployment, recovery, or operational processes increase production risk.',
        },
        {
          title: 'Documentation debt',
          description:
            'Missing knowledge increases onboarding and maintenance cost.',
        },
      ],
    },

    {
      title: 'Technical Debt vs Bug',
      content:
        'A bug means the system does not behave as intended. Technical debt means the current implementation may work but creates additional future cost, risk, or reduced flexibility. A technical debt item can eventually contribute to bugs, but the two concepts are not identical.',
      highlights: [
        {
          title: 'Bug',
          description:
            'Incorrect or unintended system behavior.',
        },
        {
          title: 'Technical debt',
          description:
            'Future cost or risk caused by a technical choice or condition.',
        },
        {
          title: 'Relationship',
          description:
            'Debt can increase the probability or cost of future defects.',
        },
      ],
    },

    {
      title: 'Technical Debt vs Feature Work',
      content:
        'Feature work primarily creates new customer or business capability. Technical debt work improves the technical condition of the existing product or reduces future engineering cost and risk. Both compete for capacity and therefore require prioritization.',
      highlights: [
        {
          title: 'Feature',
          description:
            'Creates or expands customer-facing or business capability.',
        },
        {
          title: 'Debt repayment',
          description:
            'Improves maintainability, reliability, security, scalability, or future delivery capability.',
        },
        {
          title: 'Trade-off',
          description:
            'Leaders need to balance immediate product value with sustainable engineering capacity.',
        },
      ],
    },

    {
      title: 'Technical Debt Interest',
      content:
        'Technical debt produces “interest” when the existing debt makes future work more expensive or risky. For example, an outdated dependency may require repeated workarounds, an unclear architecture may slow feature development, or weak tests may increase the effort required to make safe changes.',
      highlights: [
        {
          title: 'Repeated cost',
          description:
            'The same technical limitation creates extra effort across multiple changes.',
        },
        {
          title: 'Risk premium',
          description:
            'The debt increases the chance or impact of failures.',
        },
        {
          title: 'Reduced velocity',
          description:
            'Engineering teams spend more time navigating existing limitations.',
        },
      ],
    },

    {
      title: 'Technical Debt Principal',
      content:
        'The principal is the effort required to remove or significantly reduce the debt itself. A debt item can have a small principal but large ongoing interest, or a large principal with relatively low immediate impact. Good prioritization considers both.',
      highlights: [
        {
          title: 'Principal',
          description:
            'Estimated effort needed to address the underlying technical problem.',
        },
        {
          title: 'Interest',
          description:
            'Ongoing cost created by leaving the problem unresolved.',
        },
        {
          title: 'Decision',
          description:
            'Prioritize based on the combination of cost, risk, impact, and timing.',
        },
      ],
    },

    {
      title: 'Types of Technical Debt',
      content:
        'Common categories include code debt, architecture debt, test debt, infrastructure debt, dependency debt, security debt, data debt, observability debt, documentation debt, and process or developer-experience debt.',
      highlights: [
        {
          title: 'Code debt',
          description:
            'Complex, duplicated, unclear, or difficult-to-maintain implementation.',
        },
        {
          title: 'Architecture debt',
          description:
            'Architectural limitations that make scaling or changing the system harder.',
        },
        {
          title: 'Security debt',
          description:
            'Known security weaknesses or outdated controls that require remediation.',
        },
        {
          title: 'Infrastructure debt',
          description:
            'Operational infrastructure that is outdated, fragile, or difficult to manage.',
        },
      ],
    },

    {
      title: 'Architecture Debt',
      content:
        'Architecture debt occurs when structural decisions make the system increasingly difficult to evolve. Examples include excessive coupling, inappropriate service boundaries, unsuitable data ownership, scaling bottlenecks, or architecture that no longer matches the product’s growth.',
      highlights: [
        {
          title: 'Coupling',
          description:
            'Components depend on each other in ways that make change difficult.',
        },
        {
          title: 'Boundary problem',
          description:
            'Service or module boundaries no longer reflect useful ownership or change patterns.',
        },
        {
          title: 'Scaling limitation',
          description:
            'The architecture prevents the system from meeting future workload requirements efficiently.',
        },
      ],
    },

    {
      title: 'Testing Debt',
      content:
        'Testing debt occurs when insufficient or unreliable testing makes changes harder to validate. Missing unit tests, weak integration tests, inadequate end-to-end coverage, flaky tests, or difficult test environments can all increase delivery risk.',
      highlights: [
        {
          title: 'Coverage gap',
          description:
            'Important behavior is not adequately validated.',
        },
        {
          title: 'Flaky tests',
          description:
            'Unreliable tests reduce trust in the validation system.',
        },
        {
          title: 'Regression risk',
          description:
            'Weak testing increases the probability that changes break existing behavior.',
        },
      ],
    },

    {
      title: 'Dependency Debt',
      content:
        'Dependency debt arises when libraries, frameworks, runtime versions, infrastructure components, or third-party services become outdated or difficult to upgrade. Delaying upgrades can eventually create a large migration problem.',
      highlights: [
        {
          title: 'Outdated dependency',
          description:
            'A dependency is no longer on a healthy supported version.',
        },
        {
          title: 'Upgrade gap',
          description:
            'Multiple versions must be crossed at once, increasing migration complexity.',
        },
        {
          title: 'Security exposure',
          description:
            'Old dependencies may contain known vulnerabilities or lose support.',
        },
      ],
    },

    {
      title: 'Observability Debt',
      content:
        'Observability debt occurs when teams cannot easily understand what the production system is doing. Missing logs, metrics, traces, dashboards, correlation identifiers, or meaningful alerts increase incident diagnosis time and operational risk.',
      highlights: [
        {
          title: 'Visibility gap',
          description:
            'Important system behavior cannot be observed reliably.',
        },
        {
          title: 'Diagnosis cost',
          description:
            'Incidents take longer to understand and resolve.',
        },
        {
          title: 'Operational risk',
          description:
            'The team may discover failures later or with less context.',
        },
      ],
    },

    {
      title: 'Security Debt',
      content:
        'Security debt is accumulated security risk caused by outdated controls, weak configurations, unsupported dependencies, missing hardening, insufficient access controls, or unresolved vulnerabilities. Security debt can become urgent because its impact can be much larger than its apparent engineering cost.',
      highlights: [
        {
          title: 'Exposure',
          description:
            'The system has a weakness that could be exploited or violated.',
        },
        {
          title: 'Remediation',
          description:
            'Work required to reduce the vulnerability or risk.',
        },
        {
          title: 'Priority',
          description:
            'Security risk may require immediate action regardless of feature priority.',
        },
      ],
    },

    {
      title: 'How to Identify Technical Debt',
      content:
        'Debt can be identified through engineering retrospectives, recurring incidents, code review findings, architecture reviews, dependency audits, security scans, performance problems, developer feedback, customer-impacting defects, long delivery times, and repeated workarounds.',
      highlights: [
        {
          title: 'Recurring pain',
          description:
            'The same problem repeatedly slows teams or causes failures.',
        },
        {
          title: 'Engineering feedback',
          description:
            'Developers identify areas that are increasingly difficult to change.',
        },
        {
          title: 'Operational evidence',
          description:
            'Production incidents and performance problems reveal structural weaknesses.',
        },
      ],
    },

    {
      title: 'Technical Debt Inventory',
      content:
        'A technical debt inventory is a visible list of known debt items. Each item should ideally include the problem, impact, evidence, affected systems, estimated effort, risk, urgency, dependencies, and potential approach. Visibility prevents debt from becoming invisible background work.',
      highlights: [
        {
          title: 'Problem',
          description:
            'Describe the underlying technical issue.',
        },
        {
          title: 'Impact',
          description:
            'Explain the business, customer, engineering, security, or operational consequence.',
        },
        {
          title: 'Evidence',
          description:
            'Use incidents, delivery data, performance data, or engineering observations where possible.',
        },
      ],
    },

    {
      title: 'Prioritizing Technical Debt',
      content:
        'Technical debt should be prioritized based on business impact, customer impact, risk, security, reliability, engineering productivity, frequency of pain, future roadmap needs, cost of delay, and remediation effort. The loudest engineering complaint should not automatically become the highest priority.',
      highlights: [
        {
          title: 'Impact',
          description:
            'How much does the debt affect customers, business, or engineering?',
        },
        {
          title: 'Urgency',
          description:
            'How quickly does the risk or cost increase if the debt remains?',
        },
        {
          title: 'Effort',
          description:
            'How much work is required to reduce the debt?',
        },
        {
          title: 'Strategic relevance',
          description:
            'Does addressing the debt unlock or protect important roadmap work?',
        },
      ],
    },

    {
      title: 'Risk-Based Prioritization',
      content:
        'A useful approach is to prioritize debt that creates significant security, reliability, compliance, availability, scalability, or business continuity risk. Some debt can remain intentionally deferred if its current impact is low and the organization understands the trade-off.',
      highlights: [
        {
          title: 'High risk',
          description:
            'Debt threatens important business or system outcomes.',
        },
        {
          title: 'Medium risk',
          description:
            'Debt causes meaningful friction or future cost but is manageable.',
        },
        {
          title: 'Low risk',
          description:
            'Debt has limited current impact and can reasonably wait.',
        },
      ],
    },

    {
      title: 'Technical Debt and Product Roadmaps',
      content:
        'Technical debt should be connected to product planning rather than treated as an invisible engineering backlog. Some debt should be scheduled as explicit roadmap work, while other debt can be addressed opportunistically when related features touch the affected area.',
      highlights: [
        {
          title: 'Roadmap visibility',
          description:
            'Important technical investments become visible to product and leadership.',
        },
        {
          title: 'Opportunistic repayment',
          description:
            'Small debt items can sometimes be addressed while implementing related features.',
        },
        {
          title: 'Strategic investment',
          description:
            'Large debt items may require dedicated initiatives.',
        },
      ],
    },

    {
      title: 'Technical Debt and Capacity',
      content:
        'Teams need enough capacity to maintain the system while delivering new functionality. If all capacity is allocated to features, technical debt can accumulate until it begins reducing delivery speed or increasing operational risk.',
      highlights: [
        {
          title: 'Maintenance capacity',
          description:
            'Time required to keep the existing system healthy.',
        },
        {
          title: 'Feature capacity',
          description:
            'Time available for new product capability.',
        },
        {
          title: 'Balance',
          description:
            'Sustainable delivery requires balancing current value with future system health.',
        },
      ],
    },

    {
      title: 'Technical Debt and Engineering Velocity',
      content:
        'Technical debt can reduce engineering throughput indirectly by increasing the time required to understand, modify, test, deploy, and operate software. Velocity should therefore be interpreted alongside system health rather than treated as an isolated productivity metric.',
      highlights: [
        {
          title: 'Change cost',
          description:
            'Existing complexity increases the effort needed for new changes.',
        },
        {
          title: 'Cycle time',
          description:
            'Debt can increase the time from work start to production.',
        },
        {
          title: 'Rework',
          description:
            'Debt can increase repeated implementation and debugging work.',
        },
      ],
    },

    {
      title: 'Technical Debt and Reliability',
      content:
        'Reliability debt includes fragile dependencies, insufficient failure handling, weak recovery mechanisms, missing observability, and architecture that cannot tolerate expected failures. Reliability debt can turn small operational problems into major incidents.',
      highlights: [
        {
          title: 'Fragility',
          description:
            'The system has components or dependencies that fail without adequate isolation or recovery.',
        },
        {
          title: 'Recovery gap',
          description:
            'The system lacks effective recovery mechanisms.',
        },
        {
          title: 'Incident impact',
          description:
            'Reliability debt can increase both incident frequency and blast radius.',
        },
      ],
    },

    {
      title: 'Technical Debt and Scalability',
      content:
        'Scalability debt appears when architectural or implementation choices work at current scale but become expensive or unreliable as workload grows. Capacity bottlenecks, inefficient queries, synchronous coupling, and unsuitable storage patterns are common examples.',
      highlights: [
        {
          title: 'Current scale',
          description:
            'The system performs adequately under today’s workload.',
        },
        {
          title: 'Growth risk',
          description:
            'Future workload may expose structural limitations.',
        },
        {
          title: 'Capacity planning',
          description:
            'Expected growth should influence whether and when scalability debt is repaid.',
        },
      ],
    },

    {
      title: 'Technical Debt and Refactoring',
      content:
        'Refactoring changes the internal structure of software without intentionally changing its external behavior. Refactoring is one way to reduce code and design debt, but not every refactoring activity automatically has enough value to justify its cost.',
      highlights: [
        {
          title: 'Internal improvement',
          description:
            'Improve structure while preserving intended behavior.',
        },
        {
          title: 'Maintainability',
          description:
            'Make future changes easier and safer.',
        },
        {
          title: 'Trade-off',
          description:
            'Refactoring should be prioritized based on expected future value and risk reduction.',
        },
      ],
    },

    {
      title: 'Technical Debt and Architecture Evolution',
      content:
        'When a system outgrows its original architecture, leaders may need incremental architectural evolution rather than a complete rewrite. The goal is usually to reduce the most important constraints while continuing to deliver product value.',
      highlights: [
        {
          title: 'Incremental change',
          description:
            'Improve architecture in manageable steps.',
        },
        {
          title: 'Strangler approach',
          description:
            'Gradually replace or extract parts of an older system while keeping the product operational.',
        },
        {
          title: 'Risk control',
          description:
            'Avoid large rewrites when incremental migration can reduce risk.',
        },
      ],
    },

    {
      title: 'Technical Debt and Rewrites',
      content:
        'A complete rewrite is not automatically the best solution to technical debt. Rewrites can introduce new defects, consume significant capacity, preserve misunderstood requirements, and delay customer value. A rewrite should be justified by clear business and technical evidence.',
      highlights: [
        {
          title: 'Rewrite risk',
          description:
            'New systems can reproduce old problems or create new ones.',
        },
        {
          title: 'Opportunity cost',
          description:
            'A rewrite consumes capacity that could otherwise deliver product outcomes.',
        },
        {
          title: 'Evidence',
          description:
            'Use measurable constraints and business impact to justify a rewrite.',
        },
      ],
    },

    {
      title: 'Technical Debt and AI Systems',
      content:
        'AI systems can accumulate debt in prompts, evaluation datasets, model dependencies, retrieval pipelines, vector stores, inference integrations, safety controls, monitoring, cost management, and data pipelines. Because AI technology changes rapidly, architecture should preserve the ability to evaluate and replace components.',
      highlights: [
        {
          title: 'Model debt',
          description:
            'Dependence on outdated models, providers, or assumptions.',
        },
        {
          title: 'Evaluation debt',
          description:
            'Insufficient evaluation datasets or metrics make AI changes difficult to validate.',
        },
        {
          title: 'Prompt debt',
          description:
            'Complex or poorly governed prompts become difficult to maintain and test.',
        },
        {
          title: 'AI infrastructure debt',
          description:
            'Fragile pipelines, integrations, or observability make AI systems difficult to operate.',
        },
      ],
    },

    {
      title: 'RAG Technical Debt',
      content:
        'RAG systems can accumulate debt through poorly governed source data, weak chunking strategies, outdated embeddings, unclear retrieval evaluation, inconsistent metadata, missing access controls, brittle prompts, and insufficient monitoring. These issues can gradually reduce answer quality and increase maintenance cost.',
      highlights: [
        {
          title: 'Retrieval debt',
          description:
            'The retrieval system becomes difficult to improve or evaluate.',
        },
        {
          title: 'Data debt',
          description:
            'Source documents are inconsistent, stale, duplicated, or poorly governed.',
        },
        {
          title: 'Evaluation debt',
          description:
            'The team cannot reliably measure whether retrieval and generation quality are improving.',
        },
      ],
    },

    {
      title: 'AI Voice Technical Debt',
      content:
        'AI voice platforms can accumulate debt across telephony providers, speech recognition, speech generation, conversation orchestration, prompts, latency handling, call state, CRM integrations, observability, and vendor-specific APIs. Strong architecture should minimize unnecessary provider lock-in where practical.',
      highlights: [
        {
          title: 'Provider coupling',
          description:
            'The application becomes overly dependent on one external provider.',
        },
        {
          title: 'Conversation debt',
          description:
            'Conversation logic becomes difficult to modify, test, and observe.',
        },
        {
          title: 'Operational debt',
          description:
            'Latency, failures, and call quality cannot be diagnosed efficiently.',
        },
      ],
    },

    {
      title: 'Technical Debt and Developer Experience',
      content:
        'Developer Experience debt occurs when engineers face unnecessarily difficult local setup, slow builds, unclear documentation, unreliable CI, difficult testing, poor tooling, or inefficient deployment workflows. This debt can multiply across every engineer and every change.',
      highlights: [
        {
          title: 'Setup friction',
          description:
            'New or existing engineers spend excessive time getting productive.',
        },
        {
          title: 'Build friction',
          description:
            'Builds, tests, or deployments are unnecessarily slow or unreliable.',
        },
        {
          title: 'Productivity multiplier',
          description:
            'Small developer-experience improvements can benefit many engineers repeatedly.',
        },
      ],
    },

    {
      title: 'Technical Debt Metrics',
      content:
        'There is no single universal technical debt metric. Useful indicators include cycle time, change failure rate, defect rate, incident frequency, mean time to recovery, dependency age, test reliability, build duration, deployment friction, engineering effort spent on workarounds, and repeated operational issues.',
      highlights: [
        {
          title: 'Cycle time',
          description:
            'Tracks how long changes take to move through delivery.',
        },
        {
          title: 'Change failure rate',
          description:
            'Shows how often changes cause production problems.',
        },
        {
          title: 'Incident data',
          description:
            'Shows whether technical conditions contribute to operational failures.',
        },
        {
          title: 'Developer friction',
          description:
            'Measures recurring engineering pain that consumes capacity.',
        },
      ],
    },

    {
      title: 'Technical Debt Decision Framework',
      content:
        'A practical decision framework is: identify the debt, quantify its impact where possible, understand who is affected, estimate the cost of leaving it unresolved, estimate the cost of remediation, identify dependencies, and compare the work against competing priorities.',
      highlights: [
        {
          title: 'Impact',
          description:
            'Who or what is affected?',
        },
        {
          title: 'Cost of delay',
          description:
            'What happens if the debt remains for another quarter or year?',
        },
        {
          title: 'Remediation cost',
          description:
            'What investment is required to reduce the problem?',
        },
        {
          title: 'Strategic timing',
          description:
            'Is the affected area about to become important to the product roadmap?',
        },
      ],
    },

    {
      title: 'When Not to Repay Technical Debt',
      content:
        'Not every technical debt item deserves immediate repayment. If the system is stable, the area is unlikely to change, the debt has low impact, and remediation is expensive, continuing to carry it can be rational. The important point is to make the decision consciously rather than pretending the debt does not exist.',
      highlights: [
        {
          title: 'Low impact',
          description:
            'The debt creates little meaningful current or future cost.',
        },
        {
          title: 'Low change frequency',
          description:
            'The affected area is rarely modified.',
        },
        {
          title: 'High remediation cost',
          description:
            'The cost of fixing it is disproportionate to the expected benefit.',
        },
      ],
    },

    {
      title: 'Technical Debt in Executive Conversations',
      content:
        'Technical debt should be communicated in business language. Instead of saying “the code is messy,” explain the consequence: feature delivery is slowing, incidents are increasing, security exposure exists, infrastructure costs are rising, or a strategic capability cannot scale.',
      highlights: [
        {
          title: 'Business impact',
          description:
            'Explain how technical conditions affect customers, revenue, cost, risk, or delivery.',
        },
        {
          title: 'Evidence',
          description:
            'Use measurable examples whenever possible.',
        },
        {
          title: 'Investment case',
          description:
            'Explain what the organization gains by addressing the debt.',
        },
      ],
    },

    {
      title: 'Technical Debt for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, technical debt management is a prioritization and risk-management responsibility. The leader should not simply ask engineers to “clean up the code.” They should understand the business impact, connect debt to roadmap outcomes, make risk visible, protect sustainable engineering capacity, and help leadership make informed trade-offs.',
      highlights: [
        {
          title: 'Prioritization',
          description:
            'Compare debt against product and business priorities.',
        },
        {
          title: 'Risk translation',
          description:
            'Translate technical problems into business impact and risk.',
        },
        {
          title: 'Capacity',
          description:
            'Ensure the organization reserves enough capacity for system health.',
        },
        {
          title: 'Strategic alignment',
          description:
            'Address debt when it protects or enables important future outcomes.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is technical debt? Is technical debt always bad? How do you prioritize technical debt? How do you convince product or leadership to invest in technical debt? What is the difference between technical debt and bugs? How do you measure technical debt? When would you choose a rewrite versus incremental refactoring? How do you manage technical debt in an AI system?',
      highlights: [
        {
          title: 'Trade-offs',
          description:
            'Explain why debt can sometimes be a rational decision.',
        },
        {
          title: 'Prioritization',
          description:
            'Show how impact, risk, cost of delay, and remediation effort influence decisions.',
        },
        {
          title: 'Leadership',
          description:
            'Explain technical debt in business terms rather than engineering jargon alone.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat technical debt as a trade-off that creates future cost or risk rather than automatically treating it as bad engineering. First I make the debt visible and understand its impact on customers, business outcomes, reliability, security, engineering productivity, and future roadmap work. Then I compare the cost of leaving it unresolved with the effort required to address it and prioritize accordingly. I prefer incremental repayment when possible rather than automatically proposing a rewrite. I also make important debt visible in planning so engineering capacity is not completely consumed by new features. For AI systems, I pay additional attention to model and vendor dependencies, evaluation debt, data quality, retrieval pipelines, safety controls, and observability.”',
      highlights: [
        {
          title: 'Business language',
          description:
            'Translate technical debt into impact and risk.',
        },
        {
          title: 'Evidence',
          description:
            'Use incidents, cycle time, defects, cost, and roadmap constraints.',
        },
        {
          title: 'Incremental improvement',
          description:
            'Prefer controlled evolution where practical.',
        },
        {
          title: 'AI-specific debt',
          description:
            'Consider models, data, evaluation, vendors, safety, and observability.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'loop-engineering',
    'agile',
    'scrum',
    'product-management',
    'product-roadmap',
    'requirements-engineering',
    'user-stories',
    'acceptance-criteria',
    'code-review',
    'testing',
    'test-automation',
    'engineering-metrics',
    'developer-experience',
    'technical-program-management',
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
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
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
    'deployment',
    'deployment-strategy',
    'rollback-strategy',
    'blue-green-deployment',
    'canary-deployment',
    'feature-flags',
    'ci-cd',
    'github',
    'github-actions',
    'docker',
    'kubernetes',
    'terraform',
    'aws',
    'azure',
    'google-cloud',
    'rag',
  ],
}

export default technicalDebtKnowledge
