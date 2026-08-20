import type { KnowledgeDefinition } from './knowledge'

export const requirementsEngineeringKnowledge: KnowledgeDefinition = {
  technologyId: 'requirements-engineering',
  slug: 'requirements-engineering',
  title: 'Requirements Engineering',
  summary:
    'Requirements Engineering is the disciplined process of discovering, analyzing, documenting, validating, prioritizing, tracing, and managing what a product or system must accomplish and the constraints under which it must operate.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Requirements Engineering?',
      content:
        'Requirements Engineering is the process of understanding what a system needs to do, why it needs to do it, who needs it, what constraints apply, and how the requirements will be validated. It connects business needs with product behavior and technical implementation.',
      highlights: [
        {
          title: 'Requirement',
          description:
            'A capability, behavior, constraint, or condition that a product or system needs to satisfy.',
        },
        {
          title: 'Discovery',
          description:
            'The process of uncovering actual stakeholder and user needs.',
        },
        {
          title: 'Validation',
          description:
            'Checking whether requirements are correct, complete enough, understandable, feasible, and testable.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine asking a carpenter to build a kitchen. Saying “build me a good kitchen” is not enough. You need to understand who will use it, how many people will use it, what appliances are required, how much space is available, what budget exists, and what safety constraints apply. Requirements Engineering is the process of discovering and organizing those details before and during construction.',
      highlights: [
        {
          title: 'Need',
          description:
            'Understand what the customer actually wants to accomplish.',
        },
        {
          title: 'Constraint',
          description:
            'Understand limits such as budget, space, safety, regulation, or technology.',
        },
        {
          title: 'Validation',
          description:
            'Confirm that everyone has the same understanding before significant work is committed.',
        },
      ],
    },

    {
      title: 'Why Requirements Engineering Matters',
      content:
        'Poor requirements create ambiguity, rework, missed expectations, defects, delivery delays, stakeholder conflict, and unnecessary cost. Strong requirements engineering reduces uncertainty by creating shared understanding between customers, product teams, engineering, QA, operations, security, and leadership.',
      highlights: [
        {
          title: 'Ambiguity reduction',
          description:
            'Makes important expectations clearer.',
        },
        {
          title: 'Rework reduction',
          description:
            'Finds misunderstandings earlier when they are cheaper to correct.',
        },
        {
          title: 'Alignment',
          description:
            'Creates a common understanding across functions.',
        },
      ],
    },

    {
      title: 'Business Requirements',
      content:
        'Business requirements describe the high-level business problem, objective, or outcome the organization needs to achieve. They explain why the initiative exists rather than prescribing detailed technical implementation.',
      highlights: [
        {
          title: 'Business objective',
          description:
            'The business result the initiative is intended to create.',
        },
        {
          title: 'Business problem',
          description:
            'The organizational or market problem that requires attention.',
        },
        {
          title: 'Outcome',
          description:
            'The measurable change expected from solving the problem.',
        },
      ],
    },

    {
      title: 'Stakeholder Requirements',
      content:
        'Stakeholder requirements represent the needs, expectations, concerns, and constraints of groups or individuals affected by the system. Different stakeholders may have conflicting requirements, so the requirements process must expose and resolve important trade-offs.',
      highlights: [
        {
          title: 'Stakeholder',
          description:
            'A person or group affected by, influencing, or responsible for the product or system.',
        },
        {
          title: 'Expectation',
          description:
            'A desired behavior, result, or quality attribute.',
        },
        {
          title: 'Conflict',
          description:
            'Two or more requirements cannot all be satisfied in their current form.',
        },
      ],
    },

    {
      title: 'Functional Requirements',
      content:
        'Functional requirements describe what the system should do. They may define user actions, business rules, calculations, workflows, integrations, notifications, permissions, or system responses.',
      highlights: [
        {
          title: 'Behavior',
          description:
            'Defines how the system should behave in response to inputs or events.',
        },
        {
          title: 'Workflow',
          description:
            'Describes a sequence of business or user actions.',
        },
        {
          title: 'Business rule',
          description:
            'Defines a rule or condition that controls system behavior.',
        },
      ],
    },

    {
      title: 'Non-Functional Requirements',
      content:
        'Non-functional requirements describe qualities and constraints rather than specific business functions. Examples include performance, availability, scalability, security, reliability, accessibility, maintainability, observability, and compliance.',
      highlights: [
        {
          title: 'Performance',
          description:
            'Defines expected response time, throughput, or resource behavior.',
        },
        {
          title: 'Availability',
          description:
            'Defines how consistently the system should remain accessible.',
        },
        {
          title: 'Security',
          description:
            'Defines requirements for protecting systems, identities, and data.',
        },
        {
          title: 'Scalability',
          description:
            'Defines how the system should behave as workload grows.',
        },
      ],
    },

    {
      title: 'Constraints',
      content:
        'Constraints limit the solution space. They can come from regulations, existing architecture, contracts, budgets, technology choices, data residency, organizational standards, security policies, or external dependencies.',
      highlights: [
        {
          title: 'Technical constraint',
          description:
            'A limitation created by technology or existing architecture.',
        },
        {
          title: 'Business constraint',
          description:
            'A limitation created by budget, strategy, policy, or organizational decisions.',
        },
        {
          title: 'Regulatory constraint',
          description:
            'A requirement imposed by applicable laws, standards, or regulations.',
        },
      ],
    },

    {
      title: 'Requirements Elicitation',
      content:
        'Elicitation is the process of discovering requirements from stakeholders and other sources. Techniques include interviews, workshops, observation, surveys, document analysis, process mapping, prototypes, brainstorming, data analysis, and technical investigation.',
      highlights: [
        {
          title: 'Interview',
          description:
            'Ask stakeholders structured questions to understand needs and constraints.',
        },
        {
          title: 'Workshop',
          description:
            'Bring relevant stakeholders together to build shared understanding.',
        },
        {
          title: 'Observation',
          description:
            'Observe users performing real work to discover needs they may not explicitly describe.',
        },
        {
          title: 'Prototype',
          description:
            'Use an early representation of a solution to uncover feedback and ambiguity.',
        },
      ],
    },

    {
      title: 'Asking Better Requirement Questions',
      content:
        'Good requirement discovery goes beyond asking “What feature do you want?” Strong questions explore the user, problem, trigger, current process, desired outcome, exceptions, frequency, scale, dependencies, constraints, risks, and how success will be measured.',
      highlights: [
        {
          title: 'Who?',
          description:
            'Who performs the activity or receives the result?',
        },
        {
          title: 'Why?',
          description:
            'What problem or outcome makes this requirement important?',
        },
        {
          title: 'When?',
          description:
            'Under what conditions or events does the requirement apply?',
        },
        {
          title: 'What if?',
          description:
            'What should happen for exceptions, failures, or unusual cases?',
        },
      ],
    },

    {
      title: 'Requirements Analysis',
      content:
        'Requirements analysis organizes and examines discovered requirements for completeness, consistency, feasibility, priority, dependencies, risk, and testability. Analysis converts raw stakeholder statements into a more usable model for product and engineering decisions.',
      highlights: [
        {
          title: 'Completeness',
          description:
            'Check whether important scenarios and constraints are missing.',
        },
        {
          title: 'Consistency',
          description:
            'Identify requirements that contradict each other.',
        },
        {
          title: 'Feasibility',
          description:
            'Determine whether the requirement can realistically be achieved within constraints.',
        },
        {
          title: 'Testability',
          description:
            'Determine whether satisfaction can be objectively validated.',
        },
      ],
    },

    {
      title: 'Requirements Prioritization',
      content:
        'Not every requirement has equal importance. Prioritization considers customer value, business impact, urgency, regulatory necessity, risk reduction, dependencies, implementation effort, and opportunity cost.',
      highlights: [
        {
          title: 'Must-have',
          description:
            'Required for the intended product outcome or critical constraint.',
        },
        {
          title: 'Should-have',
          description:
            'Important but potentially deferrable without destroying the core outcome.',
        },
        {
          title: 'Could-have',
          description:
            'Useful but lower-priority capability.',
        },
        {
          title: 'Won’t-have now',
          description:
            'Explicitly excluded from the current scope to protect focus.',
        },
      ],
    },

    {
      title: 'MoSCoW Prioritization',
      content:
        'MoSCoW is a commonly used prioritization technique: Must have, Should have, Could have, and Won’t have for now. Its value comes from forcing explicit scope decisions rather than allowing everything to become a hidden priority.',
      highlights: [
        {
          title: 'Must',
          description:
            'Essential for the current release or objective.',
        },
        {
          title: 'Should',
          description:
            'Important but not absolutely essential.',
        },
        {
          title: 'Could',
          description:
            'Desirable if capacity allows.',
        },
        {
          title: 'Won’t',
          description:
            'Explicitly excluded from the current scope.',
        },
      ],
    },

    {
      title: 'Requirements Documentation',
      content:
        'Requirements can be documented through user stories, acceptance criteria, use cases, process flows, business rules, API contracts, prototypes, decision records, architecture documents, and formal specifications. The right level of documentation depends on risk, complexity, regulation, and organizational needs.',
      highlights: [
        {
          title: 'User story',
          description:
            'A concise expression of a user need.',
        },
        {
          title: 'Use case',
          description:
            'A structured description of how an actor interacts with a system to achieve a goal.',
        },
        {
          title: 'Specification',
          description:
            'A more detailed description of required behavior or constraints.',
        },
      ],
    },

    {
      title: 'User Stories',
      content:
        'A common user story structure is: As a [user], I want [capability], so that [value]. The story is intentionally concise. Important details should be clarified through conversation, acceptance criteria, examples, and supporting documentation.',
      highlights: [
        {
          title: 'User',
          description:
            'Identifies who needs the capability.',
        },
        {
          title: 'Capability',
          description:
            'Describes what the user wants to accomplish.',
        },
        {
          title: 'Value',
          description:
            'Explains why the capability matters.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria',
      content:
        'Acceptance criteria define the observable conditions that must be satisfied for a requirement or user story to be accepted. They create a shared agreement between product, engineering, QA, and stakeholders.',
      highlights: [
        {
          title: 'Observable',
          description:
            'The expected behavior can be observed.',
        },
        {
          title: 'Testable',
          description:
            'The criteria can be validated.',
        },
        {
          title: 'Unambiguous',
          description:
            'The wording should minimize multiple interpretations.',
        },
      ],
    },

    {
      title: 'Good Requirement Characteristics',
      content:
        'A useful requirement should generally be clear, concise, necessary, feasible, consistent, testable, traceable, and appropriately detailed. The exact quality criteria may vary by organization and domain.',
      highlights: [
        {
          title: 'Clear',
          description:
            'Stakeholders should understand the intended meaning.',
        },
        {
          title: 'Testable',
          description:
            'There should be a practical way to verify satisfaction.',
        },
        {
          title: 'Traceable',
          description:
            'The requirement can be connected to its source, implementation, and validation.',
        },
        {
          title: 'Feasible',
          description:
            'The requirement can realistically be satisfied within known constraints.',
        },
      ],
    },

    {
      title: 'Ambiguous Requirements',
      content:
        'Words such as “fast,” “easy,” “secure,” “user-friendly,” and “real-time” can be ambiguous unless they are defined in measurable or observable terms. Requirements should convert vague expectations into explicit acceptance conditions where practical.',
      highlights: [
        {
          title: 'Vague',
          description:
            '“The system should be fast.”',
        },
        {
          title: 'Better',
          description:
            '“The API should respond within the agreed latency target for the defined workload.”',
        },
        {
          title: 'Principle',
          description:
            'Replace subjective wording with measurable behavior when measurement is important.',
        },
      ],
    },

    {
      title: 'Use Cases',
      content:
        'A use case describes how an actor interacts with a system to achieve a particular goal. It can include the primary flow, alternative flows, exceptions, preconditions, and postconditions.',
      highlights: [
        {
          title: 'Actor',
          description:
            'A user, system, or external entity interacting with the system.',
        },
        {
          title: 'Primary flow',
          description:
            'The normal sequence of interactions.',
        },
        {
          title: 'Exception flow',
          description:
            'What happens when something goes wrong or an unusual condition occurs.',
        },
      ],
    },

    {
      title: 'Edge Cases',
      content:
        'Edge cases are unusual, boundary, or failure scenarios that can expose gaps in requirements. Examples include duplicate requests, missing data, expired sessions, unusually large inputs, service failures, partial network failures, or concurrent updates.',
      highlights: [
        {
          title: 'Boundary',
          description:
            'Behavior near the limits of an allowed range.',
        },
        {
          title: 'Failure',
          description:
            'Behavior when a dependency or operation fails.',
        },
        {
          title: 'Concurrency',
          description:
            'Behavior when multiple operations happen at the same time.',
        },
      ],
    },

    {
      title: 'Non-Functional Requirements in System Design',
      content:
        'Technical leaders should make non-functional requirements explicit because they influence architecture. Requirements for throughput, latency, availability, data consistency, security, scalability, recovery, and observability can change the architecture required to deliver the product.',
      highlights: [
        {
          title: 'Latency',
          description:
            'How quickly the system should respond.',
        },
        {
          title: 'Throughput',
          description:
            'How much work the system should process over time.',
        },
        {
          title: 'Availability',
          description:
            'How consistently the system should remain usable.',
        },
        {
          title: 'Recovery',
          description:
            'How quickly the system should recover from failure.',
        },
      ],
    },

    {
      title: 'Requirements and Architecture',
      content:
        'Architecture should be driven partly by requirements. For example, high availability may require redundancy, high throughput may require horizontal scaling, strict isolation may require tenant-aware architecture, and low latency may influence caching and service placement.',
      highlights: [
        {
          title: 'Requirement drives design',
          description:
            'Important quality requirements can materially influence architectural choices.',
        },
        {
          title: 'Trade-off',
          description:
            'Architectural decisions balance requirements that may conflict.',
        },
        {
          title: 'Capacity',
          description:
            'Expected workload should be considered early enough to avoid unsuitable designs.',
        },
      ],
    },

    {
      title: 'Requirements and APIs',
      content:
        'API requirements define how systems or services interact. They can specify inputs, outputs, authentication, authorization, error behavior, idempotency, rate limits, latency expectations, versioning, and compatibility requirements.',
      highlights: [
        {
          title: 'Contract',
          description:
            'Defines the expected interface between systems.',
        },
        {
          title: 'Error behavior',
          description:
            'Defines how failures should be represented and handled.',
        },
        {
          title: 'Compatibility',
          description:
            'Defines expectations when APIs evolve.',
        },
      ],
    },

    {
      title: 'Requirements and Data',
      content:
        'Data requirements describe what information must be captured, stored, transformed, protected, retained, accessed, and deleted. They can include data quality, ownership, privacy, retention, consistency, and reporting requirements.',
      highlights: [
        {
          title: 'Data ownership',
          description:
            'Clarifies which system or organization is responsible for particular data.',
        },
        {
          title: 'Retention',
          description:
            'Defines how long data should be retained.',
        },
        {
          title: 'Data quality',
          description:
            'Defines expectations around accuracy, completeness, and consistency.',
        },
      ],
    },

    {
      title: 'Requirements and Security',
      content:
        'Security requirements should be identified during requirements engineering rather than added only after implementation. They can include authentication, authorization, encryption, auditability, privacy, secret management, threat controls, and compliance obligations.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'How the system verifies identity.',
        },
        {
          title: 'Authorization',
          description:
            'What an authenticated identity is allowed to do.',
        },
        {
          title: 'Auditability',
          description:
            'Ability to understand important security-relevant actions.',
        },
      ],
    },

    {
      title: 'Requirements and Observability',
      content:
        'Operational requirements should specify what must be observable in production. Teams may need requirements for logs, metrics, traces, health checks, alerts, dashboards, audit events, and business monitoring.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Defines what operational behavior should be continuously observed.',
        },
        {
          title: 'Alerting',
          description:
            'Defines which conditions require human attention.',
        },
        {
          title: 'Business observability',
          description:
            'Tracks product and business outcomes in addition to infrastructure health.',
        },
      ],
    },

    {
      title: 'Requirements Traceability',
      content:
        'Traceability connects requirements to their origin, design decisions, implementation, tests, releases, and outcomes. Traceability becomes especially valuable in regulated, safety-critical, complex, or highly integrated environments.',
      highlights: [
        {
          title: 'Source',
          description:
            'Where the requirement originated.',
        },
        {
          title: 'Implementation',
          description:
            'Which system component or change addresses the requirement.',
        },
        {
          title: 'Verification',
          description:
            'Which test, review, or evidence demonstrates satisfaction.',
        },
      ],
    },

    {
      title: 'Change Management',
      content:
        'Requirements change because customers learn, markets move, regulations evolve, technology changes, and assumptions are disproven. Change should be evaluated for value, impact, dependencies, cost, risk, and timing rather than accepted or rejected automatically.',
      highlights: [
        {
          title: 'Change request',
          description:
            'A proposed modification to an existing requirement or scope.',
        },
        {
          title: 'Impact analysis',
          description:
            'Assessment of how the change affects product, architecture, schedule, cost, quality, and dependencies.',
        },
        {
          title: 'Decision',
          description:
            'A deliberate choice about whether and when to implement the change.',
        },
      ],
    },

    {
      title: 'Requirements Baseline',
      content:
        'A baseline is an agreed version of requirements used as a reference point for a defined stage or release. Baselines are useful where change control and traceability matter, but Agile environments often use lighter-weight evolving backlogs instead of freezing every requirement for long periods.',
      highlights: [
        {
          title: 'Baseline',
          description:
            'An agreed reference version of requirements.',
        },
        {
          title: 'Change control',
          description:
            'A mechanism for evaluating modifications to the agreed scope.',
        },
        {
          title: 'Agile adaptation',
          description:
            'Agile teams may maintain evolving requirements rather than treating all requirements as permanently fixed.',
        },
      ],
    },

    {
      title: 'Requirements in Agile',
      content:
        'Agile does not eliminate requirements engineering. It changes the timing and granularity of requirements. Teams often keep high-level requirements and progressively refine near-term work into user stories, acceptance criteria, examples, and technical decisions as uncertainty decreases.',
      highlights: [
        {
          title: 'Progressive refinement',
          description:
            'Add detail as work approaches implementation.',
        },
        {
          title: 'Just enough detail',
          description:
            'Document enough to create shared understanding without creating unnecessary bureaucracy.',
        },
        {
          title: 'Feedback',
          description:
            'Use working software and stakeholder feedback to refine future requirements.',
        },
      ],
    },

    {
      title: 'Requirements for AI Products',
      content:
        'AI systems require requirements beyond traditional feature behavior. Product teams should define expectations for accuracy, relevance, hallucination tolerance, safety, explainability where needed, latency, cost, data usage, privacy, evaluation, fallback behavior, and human escalation.',
      highlights: [
        {
          title: 'AI quality',
          description:
            'Define measurable expectations for model and system behavior.',
        },
        {
          title: 'Safety',
          description:
            'Define prohibited or unsafe behaviors and appropriate safeguards.',
        },
        {
          title: 'Evaluation',
          description:
            'Define how AI behavior will be tested before and after release.',
        },
        {
          title: 'Human fallback',
          description:
            'Define when the system should defer to a human or another workflow.',
        },
      ],
    },

    {
      title: 'Requirements for RAG Systems',
      content:
        'RAG requirements should define the supported knowledge domain, data freshness, retrieval quality, source attribution, access control, response behavior, latency, cost, and evaluation approach. “Build a RAG chatbot” is not a sufficient product requirement by itself.',
      highlights: [
        {
          title: 'Knowledge scope',
          description:
            'Define which information the system is expected to answer from.',
        },
        {
          title: 'Grounded response',
          description:
            'Define expectations that responses should be supported by relevant retrieved information.',
        },
        {
          title: 'Freshness',
          description:
            'Define how quickly changes in source data should become available.',
        },
        {
          title: 'Access control',
          description:
            'Ensure users only receive information they are authorized to access.',
        },
      ],
    },

    {
      title: 'Requirements for AI Voice',
      content:
        'AI voice requirements should cover call initiation, speech recognition, response latency, conversational behavior, business workflow execution, escalation, call termination, recording policies, privacy, cost, reliability, and measurable call outcomes.',
      highlights: [
        {
          title: 'Latency',
          description:
            'Define acceptable delay between customer speech and agent response.',
        },
        {
          title: 'Call outcome',
          description:
            'Define the business result expected from the conversation.',
        },
        {
          title: 'Escalation',
          description:
            'Define when the AI must hand the interaction to a human.',
        },
        {
          title: 'Privacy',
          description:
            'Define requirements for call data, recordings, transcripts, and personal information.',
        },
      ],
    },

    {
      title: 'Requirements Review',
      content:
        'A requirements review brings relevant stakeholders together to inspect whether requirements are understood, feasible, complete enough, prioritized, and testable. The goal is not simply approval; it is to discover ambiguity and risk before implementation becomes expensive.',
      highlights: [
        {
          title: 'Review',
          description:
            'Inspect requirements with the people who will use, build, test, operate, or approve the system.',
        },
        {
          title: 'Risk discovery',
          description:
            'Find missing scenarios, conflicts, and feasibility problems early.',
        },
        {
          title: 'Agreement',
          description:
            'Create shared understanding of the intended scope and behavior.',
        },
      ],
    },

    {
      title: 'Common Requirements Anti-Patterns',
      content:
        'Common problems include vague requirements, solution-first thinking, giant documents nobody reads, missing non-functional requirements, ignoring edge cases, accepting conflicting stakeholder requests without trade-offs, changing scope without impact analysis, and writing requirements that cannot be tested.',
      highlights: [
        {
          title: 'Solution-first',
          description:
            'Jumping directly to a specific feature or technology before understanding the problem.',
        },
        {
          title: 'Vagueness',
          description:
            'Using subjective terms without defining observable expectations.',
        },
        {
          title: 'Missing NFRs',
          description:
            'Ignoring performance, security, reliability, scalability, or operational needs.',
        },
        {
          title: 'Untestable',
          description:
            'Writing requirements that cannot be objectively verified.',
        },
      ],
    },

    {
      title: 'Requirements for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, Requirements Engineering is a core translation skill. The leader should be able to turn business outcomes into clear technical requirements, identify hidden non-functional requirements, expose dependencies and risks, challenge ambiguous requests, and create enough clarity for engineering teams to make good architecture and delivery decisions.',
      highlights: [
        {
          title: 'Business-to-technical translation',
          description:
            'Convert business goals into understandable system behaviors and constraints.',
        },
        {
          title: 'Risk discovery',
          description:
            'Identify technical, operational, security, and delivery risks hidden inside requirements.',
        },
        {
          title: 'Cross-functional alignment',
          description:
            'Create shared understanding across product, engineering, QA, security, operations, and leadership.',
        },
        {
          title: 'Decision quality',
          description:
            'Improve decisions by making assumptions, constraints, and trade-offs explicit.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Requirements Engineering? What is the difference between functional and non-functional requirements? How do you gather requirements from stakeholders? How do you handle conflicting requirements? How do you deal with changing requirements? What makes a good requirement? How do you identify hidden requirements? How do you translate business requirements into technical requirements? How do you define requirements for an AI system?',
      highlights: [
        {
          title: 'Functional vs non-functional',
          description:
            'Clearly distinguish system behavior from system qualities and constraints.',
        },
        {
          title: 'Ambiguity',
          description:
            'Explain how you turn vague expectations into observable and testable requirements.',
        },
        {
          title: 'Change',
          description:
            'Explain impact analysis and prioritization instead of treating every change as automatically accepted.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat Requirements Engineering as a continuous process of discovering, clarifying, prioritizing, validating, and managing requirements. I start with the business or customer problem rather than jumping directly to a solution. Then I identify functional requirements, non-functional requirements, constraints, dependencies, edge cases, and success criteria. I work with product, engineering, QA, security, and operations to make the requirements testable and feasible. When requirements change, I evaluate the impact on value, architecture, cost, timeline, quality, and dependencies before deciding how to incorporate the change. For AI systems, I also explicitly define evaluation quality, safety, latency, cost, data, privacy, and human fallback requirements.”',
      highlights: [
        {
          title: 'Problem first',
          description:
            'Start from the customer or business problem.',
        },
        {
          title: 'Complete view',
          description:
            'Cover functional, non-functional, constraints, edge cases, and operational requirements.',
        },
        {
          title: 'Validation',
          description:
            'Make requirements measurable and testable.',
        },
        {
          title: 'Change management',
          description:
            'Evaluate impact before changing committed scope.',
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

export default requirementsEngineeringKnowledge
