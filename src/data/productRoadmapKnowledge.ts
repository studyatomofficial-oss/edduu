import type { KnowledgeDefinition } from './knowledge'

export const productRoadmapKnowledge: KnowledgeDefinition = {
  technologyId: 'product-roadmap',
  slug: 'product-roadmap',
  title: 'Product Roadmapping',
  summary:
    'Product roadmapping is the practice of communicating product direction, priorities, outcomes, sequencing, and investment themes so teams and stakeholders understand where the product is heading and why.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Product Roadmapping?',
      content:
        'A product roadmap is a communication and alignment tool that explains where a product is heading, which outcomes or initiatives are important, why they matter, and how priorities are expected to evolve. A roadmap should create direction without pretending that every future detail is known with certainty.',
      highlights: [
        {
          title: 'Direction',
          description:
            'Shows the intended direction of the product.',
        },
        {
          title: 'Priorities',
          description:
            'Communicates which opportunities deserve attention.',
        },
        {
          title: 'Alignment',
          description:
            'Creates shared understanding across product, engineering, leadership, and other stakeholders.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think about planning a road trip. The destination is the product vision. The major cities you expect to pass through are the roadmap themes or outcomes. The exact roads you take may change because of traffic, weather, or new information. A good roadmap works the same way: it provides direction without pretending the entire journey is fixed.',
      highlights: [
        {
          title: 'Destination',
          description:
            'Represents the long-term product vision or desired outcome.',
        },
        {
          title: 'Route',
          description:
            'Represents strategic initiatives and priorities.',
        },
        {
          title: 'Adaptation',
          description:
            'Allows the route to change when evidence or circumstances change.',
        },
      ],
    },

    {
      title: 'Roadmap vs Backlog',
      content:
        'A roadmap communicates strategic direction and important product outcomes, while a backlog contains the detailed set of potential work. The roadmap should not simply become a visual copy of hundreds of backlog items.',
      highlights: [
        {
          title: 'Roadmap',
          description:
            'Communicates direction, outcomes, themes, and strategic priorities.',
        },
        {
          title: 'Backlog',
          description:
            'Contains detailed potential work items.',
        },
        {
          title: 'Relationship',
          description:
            'Roadmap priorities influence backlog ordering, but the two artifacts serve different purposes.',
        },
      ],
    },

    {
      title: 'Roadmap vs Project Plan',
      content:
        'A roadmap provides a strategic product view, while a project plan focuses on detailed execution for a particular initiative. Project plans may contain tasks, dependencies, milestones, owners, and dates. A roadmap normally stays at a higher level.',
      highlights: [
        {
          title: 'Roadmap',
          description:
            'Where the product is going and why.',
        },
        {
          title: 'Project plan',
          description:
            'How a specific initiative will be executed.',
        },
        {
          title: 'Level of detail',
          description:
            'Roadmaps generally contain less implementation detail than delivery plans.',
        },
      ],
    },

    {
      title: 'Roadmap and Product Vision',
      content:
        'The product vision describes the future state the organization wants to create. The roadmap translates that vision into a directional sequence of outcomes and strategic initiatives. The roadmap should remain connected to the vision so that individual initiatives do not become disconnected feature requests.',
      highlights: [
        {
          title: 'Vision',
          description:
            'Describes the desired future state.',
        },
        {
          title: 'Strategy',
          description:
            'Defines the major choices for moving toward that future state.',
        },
        {
          title: 'Roadmap',
          description:
            'Communicates the important initiatives and outcomes expected along the way.',
        },
      ],
    },

    {
      title: 'Outcome-Based Roadmaps',
      content:
        'An outcome-based roadmap emphasizes the change the product intends to create rather than only listing features. For example, “reduce customer onboarding time” is an outcome, while “build onboarding wizard” is an output or solution.',
      highlights: [
        {
          title: 'Outcome',
          description:
            'The measurable change the product wants to create.',
        },
        {
          title: 'Output',
          description:
            'The feature, capability, or deliverable produced by the team.',
        },
        {
          title: 'Why outcomes matter',
          description:
            'They allow teams to change the solution while preserving the desired business result.',
        },
      ],
    },

    {
      title: 'Theme-Based Roadmaps',
      content:
        'A theme-based roadmap groups work around strategic problems or opportunities rather than individual features. Themes can include customer growth, reliability, enterprise readiness, cost optimization, AI quality, or developer productivity.',
      highlights: [
        {
          title: 'Theme',
          description:
            'A meaningful strategic area of improvement or opportunity.',
        },
        {
          title: 'Flexibility',
          description:
            'Teams can choose the best implementation as they learn more.',
        },
        {
          title: 'Strategic connection',
          description:
            'Themes make it easier to connect roadmap work to business priorities.',
        },
      ],
    },

    {
      title: 'Time Horizons',
      content:
        'A useful roadmap often separates near-term commitments from longer-term direction. Near-term work can be described with greater confidence, while distant work should generally be expressed more broadly because uncertainty increases with time.',
      highlights: [
        {
          title: 'Now',
          description:
            'Work currently being executed or strongly committed.',
        },
        {
          title: 'Next',
          description:
            'High-priority work expected after the current focus.',
        },
        {
          title: 'Later',
          description:
            'Strategic opportunities that are less certain and require further validation.',
        },
      ],
    },

    {
      title: 'Confidence Levels',
      content:
        'Roadmaps can communicate different levels of confidence. A near-term initiative may have strong evidence and committed resources, while a distant idea may only represent a strategic hypothesis. Making confidence visible reduces accidental promises.',
      highlights: [
        {
          title: 'Committed',
          description:
            'High confidence that the organization intends to deliver the initiative within the stated planning horizon.',
        },
        {
          title: 'Planned',
          description:
            'A meaningful priority but with some remaining uncertainty.',
        },
        {
          title: 'Exploring',
          description:
            'An opportunity that still requires discovery or validation.',
        },
      ],
    },

    {
      title: 'Roadmap Prioritization',
      content:
        'Roadmap priorities should be based on strategic alignment, customer value, business impact, urgency, risk reduction, technical feasibility, dependencies, investment, and expected learning. A roadmap should represent deliberate choices rather than a collection of every stakeholder request.',
      highlights: [
        {
          title: 'Strategic alignment',
          description:
            'How strongly the initiative supports organizational goals.',
        },
        {
          title: 'Customer value',
          description:
            'The expected improvement for target customers.',
        },
        {
          title: 'Risk',
          description:
            'The amount of important uncertainty or exposure the initiative reduces or introduces.',
        },
        {
          title: 'Investment',
          description:
            'The resources required to pursue the initiative.',
        },
      ],
    },

    {
      title: 'Opportunity Cost',
      content:
        'Every roadmap decision has an opportunity cost. Choosing one initiative means delaying or not pursuing another. Strong roadmap discussions therefore compare alternatives rather than asking whether an individual feature is “good.”',
      highlights: [
        {
          title: 'Choice',
          description:
            'A roadmap is fundamentally a set of choices.',
        },
        {
          title: 'Trade-off',
          description:
            'Benefits and costs are compared across competing opportunities.',
        },
        {
          title: 'Focus',
          description:
            'Limiting work-in-progress increases the ability to complete important outcomes.',
        },
      ],
    },

    {
      title: 'Roadmap Dependencies',
      content:
        'Some roadmap initiatives depend on other teams, platforms, vendors, architecture changes, data availability, compliance work, or external events. Dependencies should be made visible early because they can materially change sequencing and delivery confidence.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A condition or deliverable required from another system, team, vendor, or initiative.',
        },
        {
          title: 'Sequencing',
          description:
            'Determining the order in which initiatives can realistically progress.',
        },
        {
          title: 'Risk visibility',
          description:
            'Making dependency risks visible before they become schedule surprises.',
        },
      ],
    },

    {
      title: 'Roadmap Risks',
      content:
        'Roadmap risk can come from unclear customer demand, technical uncertainty, organizational dependencies, vendor constraints, regulatory requirements, capacity limitations, or changing market conditions. Risks should influence confidence and sequencing rather than being hidden behind fixed dates.',
      highlights: [
        {
          title: 'Value risk',
          description:
            'Uncertainty about whether customers will value the initiative.',
        },
        {
          title: 'Feasibility risk',
          description:
            'Uncertainty about whether the initiative can be built effectively.',
        },
        {
          title: 'Dependency risk',
          description:
            'Uncertainty caused by external teams, systems, or vendors.',
        },
      ],
    },

    {
      title: 'Capacity Planning',
      content:
        'A roadmap must be grounded in realistic organizational capacity. Capacity includes engineering, product, design, QA, operations, data, security, and other resources required to deliver and operate the product. A roadmap that ignores capacity becomes a wish list.',
      highlights: [
        {
          title: 'Team capacity',
          description:
            'The amount of useful work teams can sustainably perform.',
        },
        {
          title: 'Operational capacity',
          description:
            'The resources required to run and support the resulting product.',
        },
        {
          title: 'Trade-off',
          description:
            'When demand exceeds capacity, priorities must be reduced, sequenced, or resourced differently.',
        },
      ],
    },

    {
      title: 'Roadmap and Technical Debt',
      content:
        'Technical debt should appear in roadmap discussions when it materially affects product speed, reliability, security, cost, scalability, or future options. Technical investments are easier to prioritize when their impact on customer or business outcomes is clearly explained.',
      highlights: [
        {
          title: 'Technical investment',
          description:
            'Engineering work intended to improve the future capability or sustainability of the product.',
        },
        {
          title: 'Business impact',
          description:
            'The reason the technical work matters to customers or the organization.',
        },
        {
          title: 'Risk reduction',
          description:
            'Technical work can be prioritized when it materially reduces important future risk.',
        },
      ],
    },

    {
      title: 'Roadmap and Architecture',
      content:
        'Architecture decisions can influence roadmap sequencing because new capabilities may require platform changes, service boundaries, data models, security controls, observability, or scalability improvements. Product and engineering should therefore develop roadmaps together rather than treating architecture as an invisible implementation detail.',
      highlights: [
        {
          title: 'Architectural dependency',
          description:
            'A product initiative depends on a technical foundation or architecture change.',
        },
        {
          title: 'Enabler',
          description:
            'Technical work that enables future product capabilities.',
        },
        {
          title: 'Architecture runway',
          description:
            'Technical capacity and foundations needed to support upcoming product evolution.',
        },
      ],
    },

    {
      title: 'Roadmap Communication',
      content:
        'Different audiences need different levels of roadmap detail. Executives may need strategic outcomes and investment themes. Customers may need expected capabilities and timing ranges. Engineering needs enough context to understand priorities, dependencies, and constraints. A single roadmap view does not always serve every audience equally well.',
      highlights: [
        {
          title: 'Executive view',
          description:
            'Focuses on strategy, outcomes, investment, and major risks.',
        },
        {
          title: 'Customer view',
          description:
            'Focuses on customer-facing value and realistic expectations.',
        },
        {
          title: 'Engineering view',
          description:
            'Includes technical dependencies, sequencing, constraints, and readiness information.',
        },
      ],
    },

    {
      title: 'Roadmap and Stakeholder Management',
      content:
        'Stakeholders may request specific features because of customer feedback, sales opportunities, executive priorities, operational issues, or personal preferences. The product leader should evaluate these requests against shared product strategy and decision criteria instead of automatically adding them to the roadmap.',
      highlights: [
        {
          title: 'Request',
          description:
            'A stakeholder suggestion or demand for product work.',
        },
        {
          title: 'Evaluation',
          description:
            'Assess the request against value, strategy, evidence, effort, risk, and opportunity cost.',
        },
        {
          title: 'Decision',
          description:
            'Explicitly decide whether and when the work should be pursued.',
        },
      ],
    },

    {
      title: 'Roadmap Reviews',
      content:
        'A roadmap should be reviewed periodically because assumptions, customer needs, technology, competition, business strategy, and delivery evidence can change. Reviewing the roadmap does not mean changing it constantly; it means maintaining alignment with reality.',
      highlights: [
        {
          title: 'Review',
          description:
            'Inspect whether roadmap assumptions and priorities remain valid.',
        },
        {
          title: 'Evidence',
          description:
            'Use customer, business, engineering, and operational data to inform changes.',
        },
        {
          title: 'Adaptation',
          description:
            'Change priorities when the evidence justifies it.',
        },
      ],
    },

    {
      title: 'Roadmap Metrics',
      content:
        'Roadmap effectiveness should be assessed through outcomes rather than simply measuring how many roadmap items were delivered. Useful measures may include customer adoption, business impact, outcome achievement, predictability, time-to-value, strategic progress, and learning generated from experiments.',
      highlights: [
        {
          title: 'Outcome achievement',
          description:
            'Whether intended customer or business outcomes were achieved.',
        },
        {
          title: 'Time-to-value',
          description:
            'How quickly useful value reaches customers.',
        },
        {
          title: 'Predictability',
          description:
            'How consistently the organization can forecast near-term commitments.',
        },
      ],
    },

    {
      title: 'AI Product Roadmapping',
      content:
        'AI roadmaps require additional attention to model capability, data readiness, evaluation, safety, inference cost, latency, provider dependencies, and rapidly changing technology. AI roadmap items should therefore include discovery and evaluation work, not only customer-facing features.',
      highlights: [
        {
          title: 'Model capability',
          description:
            'Whether available models can achieve the required product quality.',
        },
        {
          title: 'Data readiness',
          description:
            'Whether the required data exists, is accessible, and is suitable for the product.',
        },
        {
          title: 'Evaluation',
          description:
            'A defined way to measure whether the AI system performs acceptably.',
        },
        {
          title: 'AI economics',
          description:
            'The cost of inference, storage, retrieval, and supporting infrastructure.',
        },
      ],
    },

    {
      title: 'AI Roadmap Uncertainty',
      content:
        'AI technology changes quickly, so long-range AI roadmaps should avoid excessive implementation specificity. A better approach is to define the customer outcome and strategic capability while allowing the underlying model, vendor, architecture, or implementation to evolve.',
      highlights: [
        {
          title: 'Capability over implementation',
          description:
            'Define what capability is needed rather than locking in a technology too early.',
        },
        {
          title: 'Technology volatility',
          description:
            'Model capabilities, pricing, providers, and tooling can change rapidly.',
        },
        {
          title: 'Revalidation',
          description:
            'Reassess technical assumptions as the roadmap approaches execution.',
        },
      ],
    },

    {
      title: 'RAG Roadmapping',
      content:
        'A RAG roadmap should progress from the user problem to data readiness, ingestion, retrieval, generation, evaluation, security, observability, and scale. Product priorities should be based on end-to-end user outcomes rather than assuming that improving one technical component automatically improves the product.',
      highlights: [
        {
          title: 'Data foundation',
          description:
            'Ensure relevant and governed knowledge is available.',
        },
        {
          title: 'Retrieval quality',
          description:
            'Measure whether relevant context is retrieved for user questions.',
        },
        {
          title: 'Answer quality',
          description:
            'Measure whether responses are useful, accurate, and appropriately grounded.',
        },
        {
          title: 'Production readiness',
          description:
            'Address security, latency, cost, monitoring, and operational reliability before broad scale.',
        },
      ],
    },

    {
      title: 'AI Voice Roadmapping',
      content:
        'An AI voice roadmap can progress from telephony connectivity to speech recognition, conversational reasoning, tools and integrations, speech generation, analytics, reliability, human handoff, and business optimization. Each stage should have measurable customer and operational outcomes.',
      highlights: [
        {
          title: 'Voice foundation',
          description:
            'Establish reliable calling and audio flow.',
        },
        {
          title: 'Conversation quality',
          description:
            'Improve recognition, reasoning, response timing, and natural interaction.',
        },
        {
          title: 'Business workflow',
          description:
            'Connect the agent to CRM, scheduling, qualification, or support workflows.',
        },
        {
          title: 'Optimization',
          description:
            'Improve conversion, reliability, cost, and customer experience using production evidence.',
        },
      ],
    },

    {
      title: 'Roadmap Anti-Patterns',
      content:
        'Common roadmap problems include turning the roadmap into a feature wishlist, committing exact dates too far into the future, adding every stakeholder request, ignoring technical debt, hiding dependencies, measuring success only by delivery volume, and failing to update the roadmap when evidence changes.',
      highlights: [
        {
          title: 'Feature wishlist',
          description:
            'A roadmap becomes a collection of requested features without strategic reasoning.',
        },
        {
          title: 'False precision',
          description:
            'Distant work is presented with unjustified exact dates and scope.',
        },
        {
          title: 'Stakeholder-driven roadmap',
          description:
            'The roadmap changes based on the loudest stakeholder rather than shared decision criteria.',
        },
        {
          title: 'Static roadmap',
          description:
            'The roadmap is never updated even when important assumptions change.',
        },
      ],
    },

    {
      title: 'Roadmap for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, roadmap thinking means connecting business outcomes to engineering reality. A strong technical leader understands dependencies, capacity, architecture, technical debt, reliability, security, vendor constraints, and operational readiness while communicating these factors in business language.',
      highlights: [
        {
          title: 'Technical-business translation',
          description:
            'Explain technical investment in terms of customer value, business impact, risk, and future capability.',
        },
        {
          title: 'Dependency leadership',
          description:
            'Coordinate cross-team and external dependencies that affect roadmap outcomes.',
        },
        {
          title: 'Risk communication',
          description:
            'Make uncertainty and confidence visible rather than hiding them behind dates.',
        },
        {
          title: 'Outcome focus',
          description:
            'Measure roadmap success through results rather than the number of features shipped.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is a product roadmap? How do you prioritize roadmap items? What is the difference between a roadmap and a backlog? How do you handle stakeholder requests? How do you communicate uncertainty? How do you build a roadmap with engineering? How do you manage dependencies? How do you decide what belongs in the roadmap? How do you measure roadmap success? How would you build a roadmap for an AI product?',
      highlights: [
        {
          title: 'Prioritization',
          description:
            'Explain the decision framework and trade-offs rather than simply listing features.',
        },
        {
          title: 'Uncertainty',
          description:
            'Show how confidence changes across planning horizons.',
        },
        {
          title: 'Engineering partnership',
          description:
            'Explain how architecture, dependencies, technical debt, and capacity influence sequencing.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat a roadmap as a strategic communication and alignment tool rather than a promise of every future feature and date. I start from the product vision and desired outcomes, then identify the highest-value opportunities based on customer evidence, business strategy, risk, dependencies, technical feasibility, and investment. I separate near-term commitments from longer-term directional themes because confidence decreases as we look further ahead. I also build the roadmap with engineering so architecture, technical debt, capacity, and operational dependencies are visible. Finally, I review the roadmap against customer and business evidence and adapt it when assumptions materially change. For AI products, I would additionally account for model capability, data readiness, evaluation, safety, latency, cost, and provider volatility.”',
      highlights: [
        {
          title: 'Strategy',
          description:
            'Connect roadmap priorities to product vision and business goals.',
        },
        {
          title: 'Evidence',
          description:
            'Use customer, business, technical, and operational evidence.',
        },
        {
          title: 'Confidence',
          description:
            'Communicate near-term commitments differently from long-term possibilities.',
        },
        {
          title: 'Adaptation',
          description:
            'Update priorities when meaningful new evidence appears.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'loop-engineering',
    'agile',
    'scrum',
    'product-management',
    'requirements-engineering',
    'user-stories',
    'acceptance-criteria',
    'technical-debt',
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
    'event-driven-systems',
    'scalability',
    'availability',
    'fault-tolerance',
    'high-availability',
    'production',
    'observability',
    'monitoring',
    'logging',
    'metrics',
    'distributed-tracing',
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

export default productRoadmapKnowledge
