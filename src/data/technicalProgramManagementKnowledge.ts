import type { KnowledgeDefinition } from './knowledge'

export const technicalProgramManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'technical-program-management',
  slug: 'technical-program-management',
  title: 'Technical Program Management',
  summary:
    'Technical Program Management (TPM) is the discipline of leading complex, cross-functional technical programs by connecting business outcomes, product goals, engineering execution, architecture, dependencies, risks, delivery plans, and stakeholder alignment.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Technical Program Management?',
      content:
        'Technical Program Management is the practice of leading complex technical initiatives that require coordination across multiple teams, systems, products, and stakeholders. A TPM creates clarity around goals, scope, dependencies, risks, milestones, decisions, and execution while enabling engineering teams to make the technical decisions.',
      highlights: [
        {
          title: 'Cross-functional leadership',
          description:
            'Coordinates engineering, product, design, security, operations, data, vendors, and business stakeholders.',
        },
        {
          title: 'Execution',
          description:
            'Turns strategic objectives into an executable program plan.',
        },
        {
          title: 'Technical context',
          description:
            'Understands architecture, systems, dependencies, risks, and technical trade-offs well enough to lead effectively.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine building a large airport. Architects design the airport, engineers build systems, construction teams execute specialized work, security teams manage compliance, and operations teams prepare for launch. The TPM is like the person coordinating the entire construction program: making sure the right teams are aligned, dependencies are visible, risks are addressed, decisions happen on time, and the airport can actually open as planned.',
      highlights: [
        {
          title: 'Teams',
          description:
            'Different specialists own different parts of the system.',
        },
        {
          title: 'Dependencies',
          description:
            'One team may not be able to finish until another team delivers something.',
        },
        {
          title: 'Program outcome',
          description:
            'The goal is not simply completing tasks; it is successfully delivering the overall outcome.',
        },
      ],
    },

    {
      title: 'TPM vs Project Manager',
      content:
        'A Project Manager often focuses heavily on execution, schedule, scope, resources, and delivery coordination. A Technical Program Manager operates in technically complex environments and adds stronger technical understanding, cross-team dependency management, architecture awareness, engineering risk management, and technical decision facilitation.',
      highlights: [
        {
          title: 'Project management',
          description:
            'Often centered on delivery of a defined project.',
        },
        {
          title: 'Technical program management',
          description:
            'Often spans multiple technical workstreams and interconnected projects.',
        },
        {
          title: 'Technical depth',
          description:
            'TPMs need enough technical understanding to challenge assumptions and facilitate engineering decisions.',
        },
      ],
    },

    {
      title: 'TPM vs Product Manager',
      content:
        'Product Managers primarily own product problems, customer needs, product strategy, prioritization, and product outcomes. TPMs primarily focus on complex technical execution, cross-team coordination, dependencies, risks, and delivery. In strong organizations, PM and TPM responsibilities overlap through close partnership but remain distinct.',
      highlights: [
        {
          title: 'Product Manager',
          description:
            'Owns what should be built and why from the product perspective.',
        },
        {
          title: 'TPM',
          description:
            'Leads how complex technical work is coordinated and delivered.',
        },
        {
          title: 'Partnership',
          description:
            'PM and TPM jointly connect customer value with technical execution.',
        },
      ],
    },

    {
      title: 'TPM vs Engineering Manager',
      content:
        'Engineering Managers primarily lead people, engineering teams, technical execution, hiring, coaching, and team health. TPMs primarily lead programs that may cross multiple engineering organizations without directly managing the engineers involved.',
      highlights: [
        {
          title: 'Engineering Manager',
          description:
            'Usually owns people leadership and engineering team health.',
        },
        {
          title: 'TPM',
          description:
            'Usually owns program-level coordination and execution.',
        },
        {
          title: 'Collaboration',
          description:
            'TPMs and Engineering Managers work closely to deliver complex initiatives.',
        },
      ],
    },

    {
      title: 'Program vs Project',
      content:
        'A project is usually a bounded initiative with a defined deliverable, timeline, and scope. A program coordinates multiple related projects, workstreams, or capabilities to achieve a broader outcome. A technical program may contain several engineering projects that must work together.',
      highlights: [
        {
          title: 'Project',
          description:
            'A focused piece of work with a specific outcome.',
        },
        {
          title: 'Program',
          description:
            'A coordinated set of related initiatives pursuing a broader outcome.',
        },
        {
          title: 'Portfolio',
          description:
            'A broader collection of programs and investments aligned to organizational strategy.',
        },
      ],
    },

    {
      title: 'Program Lifecycle',
      content:
        'A typical technical program lifecycle includes problem definition, alignment, discovery, planning, execution, monitoring, launch, stabilization, and retrospective. The exact process varies by organization, but the TPM continuously maintains clarity across these stages.',
      highlights: [
        {
          title: 'Discover',
          description:
            'Understand the problem, desired outcome, constraints, and stakeholders.',
        },
        {
          title: 'Plan',
          description:
            'Create workstreams, milestones, dependencies, risks, and decision mechanisms.',
        },
        {
          title: 'Execute',
          description:
            'Coordinate delivery and resolve cross-team blockers.',
        },
        {
          title: 'Launch',
          description:
            'Coordinate readiness, deployment, adoption, and stabilization.',
        },
      ],
    },

    {
      title: 'Program Charter',
      content:
        'A program charter establishes the purpose and operating boundaries of a program. It typically describes the problem, objective, business outcome, scope, non-goals, stakeholders, success measures, major milestones, assumptions, and governance model.',
      highlights: [
        {
          title: 'Why',
          description:
            'Explains why the program exists.',
        },
        {
          title: 'What',
          description:
            'Defines the intended outcome and scope.',
        },
        {
          title: 'How',
          description:
            'Defines major execution principles, ownership, and governance.',
        },
      ],
    },

    {
      title: 'Goals and Outcomes',
      content:
        'Strong TPMs distinguish activities from outcomes. “Migrate three services” is an activity. “Reduce infrastructure failure risk and improve recovery time” is an outcome. Programs should connect technical work to measurable business, product, customer, or operational results.',
      highlights: [
        {
          title: 'Activity',
          description:
            'Something the team does.',
        },
        {
          title: 'Deliverable',
          description:
            'Something the team produces.',
        },
        {
          title: 'Outcome',
          description:
            'A meaningful change created by the program.',
        },
      ],
    },

    {
      title: 'Scope Management',
      content:
        'Scope management means maintaining clarity about what the program will and will not deliver. TPMs protect teams from uncontrolled scope expansion while ensuring that changes with strong business value are evaluated rather than automatically rejected.',
      highlights: [
        {
          title: 'In scope',
          description:
            'Work required to achieve the committed outcome.',
        },
        {
          title: 'Out of scope',
          description:
            'Work intentionally excluded from the current program.',
        },
        {
          title: 'Change control',
          description:
            'New requests should be evaluated for impact on time, cost, risk, dependencies, and outcomes.',
        },
      ],
    },

    {
      title: 'Requirements Management',
      content:
        'TPMs help ensure that requirements are clear enough for engineering teams to plan and execute. They connect business requirements with technical constraints and identify ambiguity, missing dependencies, conflicting expectations, and assumptions early.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'Requirements should be understandable and testable.',
        },
        {
          title: 'Dependencies',
          description:
            'Requirements may depend on other systems, teams, or capabilities.',
        },
        {
          title: 'Constraints',
          description:
            'Security, compliance, architecture, performance, and operational constraints must be visible.',
        },
      ],
    },

    {
      title: 'Workstreams',
      content:
        'A large technical program is often divided into workstreams. Each workstream represents a coherent area of work with an owner, scope, milestones, dependencies, and expected outcomes.',
      highlights: [
        {
          title: 'Ownership',
          description:
            'Each workstream should have a clearly accountable owner.',
        },
        {
          title: 'Independence',
          description:
            'Workstreams should be separated where that improves clarity without hiding important dependencies.',
        },
        {
          title: 'Integration',
          description:
            'The TPM ensures workstreams converge toward the overall program outcome.',
        },
      ],
    },

    {
      title: 'Milestones',
      content:
        'Milestones are meaningful checkpoints that demonstrate progress toward a program outcome. Good milestones represent completed capabilities, validated decisions, readiness states, or measurable outcomes rather than simply calendar dates.',
      highlights: [
        {
          title: 'Evidence',
          description:
            'A milestone should have clear evidence of completion.',
        },
        {
          title: 'Decision point',
          description:
            'Some milestones exist to enable important go/no-go decisions.',
        },
        {
          title: 'Outcome',
          description:
            'Milestones should contribute meaningfully to the final program objective.',
        },
      ],
    },

    {
      title: 'Dependencies',
      content:
        'A dependency exists when one team, workstream, system, or decision relies on another. Dependency management is one of the most important TPM responsibilities because unresolved dependencies can create hidden schedule risk.',
      highlights: [
        {
          title: 'Upstream',
          description:
            'Something another team must provide before your work can continue.',
        },
        {
          title: 'Downstream',
          description:
            'Another team may depend on your deliverable.',
        },
        {
          title: 'External',
          description:
            'A vendor, regulator, customer, or external system may create a dependency.',
        },
      ],
    },

    {
      title: 'Dependency Mapping',
      content:
        'Dependency mapping makes relationships between teams and deliverables visible. A useful dependency record includes the dependency, owner, required-by date, current status, risk, and mitigation or fallback plan.',
      highlights: [
        {
          title: 'Owner',
          description:
            'Every important dependency should have an accountable owner.',
        },
        {
          title: 'Date',
          description:
            'The program should know when the dependency is required.',
        },
        {
          title: 'Mitigation',
          description:
            'High-risk dependencies should have alternatives or contingency plans where possible.',
        },
      ],
    },

    {
      title: 'Critical Path',
      content:
        'The critical path is the sequence of dependent activities that determines the earliest possible completion of the program. A delay in a critical-path activity can directly delay the overall program unless the dependency is removed or the plan changes.',
      highlights: [
        {
          title: 'Constraint',
          description:
            'Critical-path work constrains the overall schedule.',
        },
        {
          title: 'Focus',
          description:
            'TPMs should pay special attention to critical-path risks.',
        },
        {
          title: 'Optimization',
          description:
            'Removing unnecessary dependencies can shorten the critical path.',
        },
      ],
    },

    {
      title: 'Risk Management',
      content:
        'Risk management is the continuous process of identifying uncertain events, assessing their probability and impact, defining mitigation strategies, assigning owners, and monitoring changes. TPMs manage risk proactively rather than waiting for risks to become incidents.',
      highlights: [
        {
          title: 'Identify',
          description:
            'Find risks before they affect delivery.',
        },
        {
          title: 'Assess',
          description:
            'Evaluate likelihood and potential impact.',
        },
        {
          title: 'Mitigate',
          description:
            'Reduce probability or impact through planned actions.',
        },
        {
          title: 'Monitor',
          description:
            'Track risk indicators and trigger conditions.',
        },
      ],
    },

    {
      title: 'Risk vs Issue',
      content:
        'A risk is a potential future problem. An issue is a problem that has already occurred. A TPM should maintain separate visibility because risks require prevention or mitigation while issues require resolution and recovery.',
      highlights: [
        {
          title: 'Risk',
          description:
            'Something that might happen.',
        },
        {
          title: 'Issue',
          description:
            'Something that has already happened.',
        },
        {
          title: 'Response',
          description:
            'Risks are mitigated; issues are actively resolved.',
        },
      ],
    },

    {
      title: 'RAID Log',
      content:
        'A RAID log is a common program-management mechanism for tracking Risks, Assumptions, Issues, and Dependencies. It creates a shared view of important execution conditions that could affect program success.',
      highlights: [
        {
          title: 'Risks',
          description:
            'Potential future problems.',
        },
        {
          title: 'Assumptions',
          description:
            'Conditions believed to be true for planning purposes.',
        },
        {
          title: 'Issues',
          description:
            'Current problems requiring action.',
        },
        {
          title: 'Dependencies',
          description:
            'External or cross-team requirements for progress.',
        },
      ],
    },

    {
      title: 'Assumptions',
      content:
        'Assumptions are conditions treated as true during planning even though they may not yet be fully verified. Important assumptions should be made explicit because invalid assumptions can become major program risks.',
      highlights: [
        {
          title: 'Visibility',
          description:
            'Document important assumptions instead of leaving them implicit.',
        },
        {
          title: 'Validation',
          description:
            'Validate high-risk assumptions early.',
        },
        {
          title: 'Risk conversion',
          description:
            'An assumption that may not hold can become an explicit risk.',
        },
      ],
    },

    {
      title: 'Decision Management',
      content:
        'Complex programs generate many technical and business decisions. TPMs help ensure decisions are made by the right people, at the right time, using the right information, and are documented clearly enough to prevent repeated debate.',
      highlights: [
        {
          title: 'Decision owner',
          description:
            'Identify who has authority to make the decision.',
        },
        {
          title: 'Context',
          description:
            'Capture the problem, options, constraints, and trade-offs.',
        },
        {
          title: 'Record',
          description:
            'Document the decision and rationale.',
        },
      ],
    },

    {
      title: 'Decision Log',
      content:
        'A decision log records important decisions, their date, owner, context, options considered, final choice, rationale, and consequences. It is especially useful in long-running programs where team membership and assumptions change over time.',
      highlights: [
        {
          title: 'History',
          description:
            'Provides context about why a decision was made.',
        },
        {
          title: 'Alignment',
          description:
            'Reduces repeated debates about already-settled questions.',
        },
        {
          title: 'Accountability',
          description:
            'Makes decision ownership clear.',
        },
      ],
    },

    {
      title: 'Technical Trade-offs',
      content:
        'TPMs frequently facilitate trade-off discussions involving scope, timeline, reliability, cost, architecture, security, performance, and maintainability. The TPM does not necessarily make the technical decision but ensures the trade-off is explicit and the right technical owners are involved.',
      highlights: [
        {
          title: 'Speed vs quality',
          description:
            'Faster delivery may create additional technical or operational risk.',
        },
        {
          title: 'Cost vs capability',
          description:
            'More scalable or powerful architecture can increase cost.',
        },
        {
          title: 'Scope vs timeline',
          description:
            'Reducing scope can sometimes protect a critical launch date.',
        },
      ],
    },

    {
      title: 'Program Planning',
      content:
        'Program planning converts goals into an executable structure. It typically includes scope, workstreams, milestones, dependencies, owners, assumptions, risks, resource needs, decision points, and launch criteria.',
      highlights: [
        {
          title: 'Work breakdown',
          description:
            'Break complex outcomes into manageable workstreams.',
        },
        {
          title: 'Sequencing',
          description:
            'Determine what must happen before other work can begin.',
        },
        {
          title: 'Ownership',
          description:
            'Assign clear accountability for important deliverables.',
        },
      ],
    },

    {
      title: 'Estimation',
      content:
        'TPMs work with engineering teams to understand estimates and uncertainty. Good estimation is not about forcing teams to provide false precision. It is about understanding ranges, assumptions, dependencies, confidence levels, and what information would improve the estimate.',
      highlights: [
        {
          title: 'Range',
          description:
            'Ranges often communicate uncertainty better than a single date.',
        },
        {
          title: 'Confidence',
          description:
            'Plans should indicate confidence where uncertainty is significant.',
        },
        {
          title: 'Assumptions',
          description:
            'Estimates are meaningful only when important assumptions are visible.',
        },
      ],
    },

    {
      title: 'Roadmaps',
      content:
        'Technical roadmaps communicate planned capabilities and major milestones over time. A TPM helps translate engineering dependencies and sequencing into a roadmap that stakeholders can understand without hiding technical uncertainty.',
      highlights: [
        {
          title: 'Outcome',
          description:
            'Roadmaps should communicate meaningful capabilities rather than only internal tasks.',
        },
        {
          title: 'Dependencies',
          description:
            'Technical sequencing should influence roadmap commitments.',
        },
        {
          title: 'Uncertainty',
          description:
            'Roadmaps should avoid pretending that uncertain future work is guaranteed.',
        },
      ],
    },

    {
      title: 'Execution Management',
      content:
        'During execution, the TPM continuously checks progress against the program outcome, identifies blockers, manages dependencies, facilitates decisions, updates stakeholders, and adjusts the plan when new information appears.',
      highlights: [
        {
          title: 'Progress',
          description:
            'Track meaningful progress toward milestones and outcomes.',
        },
        {
          title: 'Blockers',
          description:
            'Remove obstacles before they become critical schedule problems.',
        },
        {
          title: 'Adaptation',
          description:
            'Update the plan when assumptions or conditions change.',
        },
      ],
    },

    {
      title: 'Program Health',
      content:
        'Program health is a concise assessment of whether a program is on track to achieve its intended outcome. A useful health view considers schedule, scope, dependencies, risks, quality, reliability, resources, and stakeholder confidence.',
      highlights: [
        {
          title: 'Schedule',
          description:
            'Is the program progressing toward important milestones?',
        },
        {
          title: 'Risk',
          description:
            'Are important risks controlled?',
        },
        {
          title: 'Outcome',
          description:
            'Is the program still likely to achieve the intended business or technical result?',
        },
      ],
    },

    {
      title: 'RAG Status',
      content:
        'RAG status commonly means Red, Amber, and Green. It is a simple communication mechanism for program health. Green indicates healthy progress, Amber indicates meaningful risk or attention required, and Red indicates a serious problem requiring intervention. Organizations should define the criteria explicitly.',
      highlights: [
        {
          title: 'Green',
          description:
            'Program is within agreed expectations.',
        },
        {
          title: 'Amber',
          description:
            'There is meaningful risk that needs attention or mitigation.',
        },
        {
          title: 'Red',
          description:
            'The program is materially off track or requires executive intervention.',
        },
      ],
    },

    {
      title: 'Escalation',
      content:
        'Escalation means bringing an issue or decision to a higher level when the current team lacks the authority, resources, or ability to resolve it. Good escalation is early, evidence-based, and accompanied by clear options or a specific decision request.',
      highlights: [
        {
          title: 'Early',
          description:
            'Escalate before a problem becomes irreversible.',
        },
        {
          title: 'Evidence',
          description:
            'Explain the facts, impact, and constraints.',
        },
        {
          title: 'Decision request',
          description:
            'Clearly state what leadership action is needed.',
        },
      ],
    },

    {
      title: 'Stakeholder Management',
      content:
        'TPMs work with stakeholders who have different goals, levels of technical knowledge, and decision authority. Effective stakeholder management means understanding what each stakeholder needs, communicating at the right level, and maintaining alignment without overwhelming people with unnecessary detail.',
      highlights: [
        {
          title: 'Executives',
          description:
            'Usually need outcomes, risks, decisions, and business impact.',
        },
        {
          title: 'Engineering',
          description:
            'Needs technical context, dependencies, constraints, and clear priorities.',
        },
        {
          title: 'Product',
          description:
            'Needs alignment between technical execution and customer or business outcomes.',
        },
      ],
    },

    {
      title: 'Executive Communication',
      content:
        'Executive communication should be concise, outcome-oriented, and decision-focused. Instead of reporting every task, a TPM should explain what changed, why it matters, current health, major risks, and what decision or support is needed.',
      highlights: [
        {
          title: 'Headline',
          description:
            'Lead with the most important information.',
        },
        {
          title: 'Impact',
          description:
            'Explain business, customer, or operational implications.',
        },
        {
          title: 'Action',
          description:
            'Clearly state what leadership needs to know or decide.',
        },
      ],
    },

    {
      title: 'Technical Communication',
      content:
        'TPMs need to communicate with engineers without pretending to be the technical owner. They should understand architecture and terminology well enough to ask useful questions, identify dependencies, challenge unclear assumptions, and translate technical issues for non-technical stakeholders.',
      highlights: [
        {
          title: 'Technical fluency',
          description:
            'Understand the system sufficiently to participate meaningfully.',
        },
        {
          title: 'Translation',
          description:
            'Convert technical complexity into understandable business and delivery implications.',
        },
        {
          title: 'Respect ownership',
          description:
            'Engineering leaders and technical owners retain appropriate technical decision authority.',
        },
      ],
    },

    {
      title: 'Cross-functional Alignment',
      content:
        'Complex programs fail when teams optimize locally while the overall outcome suffers. TPMs create alignment around shared goals, interfaces, dependencies, decision rights, and timelines so teams understand how their work contributes to the larger program.',
      highlights: [
        {
          title: 'Shared objective',
          description:
            'Teams need a common understanding of success.',
        },
        {
          title: 'Interfaces',
          description:
            'Clear contracts between teams reduce ambiguity.',
        },
        {
          title: 'Dependencies',
          description:
            'Cross-team constraints should be visible and actively managed.',
        },
      ],
    },

    {
      title: 'Program Governance',
      content:
        'Governance defines how decisions, risks, status, changes, and escalations are managed. Good governance provides enough structure to create accountability without creating unnecessary bureaucracy.',
      highlights: [
        {
          title: 'Decision rights',
          description:
            'Clarify who can make which decisions.',
        },
        {
          title: 'Cadence',
          description:
            'Establish appropriate review mechanisms.',
        },
        {
          title: 'Transparency',
          description:
            'Make important program health information visible.',
        },
      ],
    },

    {
      title: 'Meeting Design',
      content:
        'TPMs should treat meetings as tools for decisions, alignment, and problem solving rather than status reporting. Every recurring meeting should have a clear purpose, appropriate participants, expected inputs, and an actionable output.',
      highlights: [
        {
          title: 'Purpose',
          description:
            'Know why the meeting exists.',
        },
        {
          title: 'Participants',
          description:
            'Invite people who can contribute or make decisions.',
        },
        {
          title: 'Outcome',
          description:
            'Leave with decisions, actions, or alignment.',
        },
      ],
    },

    {
      title: 'Async Program Management',
      content:
        'Strong TPM organizations use asynchronous communication for information sharing and reserve meetings for decisions, complex discussions, and relationship-building. Written updates, decision records, project pages, and dashboards improve transparency and reduce meeting overload.',
      highlights: [
        {
          title: 'Written context',
          description:
            'Important information should be accessible without requiring a meeting.',
        },
        {
          title: 'Decision records',
          description:
            'Document important decisions for future reference.',
        },
        {
          title: 'Reduced meetings',
          description:
            'Use meetings when real-time interaction adds value.',
        },
      ],
    },

    {
      title: 'Launch Readiness',
      content:
        'Launch readiness is the structured assessment of whether a system, product, or capability is ready for production. TPMs coordinate technical, operational, security, support, documentation, training, monitoring, rollback, and business readiness.',
      highlights: [
        {
          title: 'Technical readiness',
          description:
            'System functionality, performance, testing, and deployment are ready.',
        },
        {
          title: 'Operational readiness',
          description:
            'Monitoring, alerting, support, runbooks, and incident response are prepared.',
        },
        {
          title: 'Business readiness',
          description:
            'Stakeholders, customers, documentation, and processes are prepared.',
        },
      ],
    },

    {
      title: 'Go / No-Go Decision',
      content:
        'A Go/No-Go decision determines whether a launch should proceed based on defined readiness criteria. A TPM coordinates evidence and stakeholder input but should avoid turning the meeting into an emotional debate about whether the team “feels ready.”',
      highlights: [
        {
          title: 'Criteria',
          description:
            'Define objective readiness conditions before the decision.',
        },
        {
          title: 'Risk',
          description:
            'Make remaining risks explicit.',
        },
        {
          title: 'Decision owner',
          description:
            'The appropriate accountable leader makes the final decision.',
        },
      ],
    },

    {
      title: 'Post-launch Stabilization',
      content:
        'Launch is not the end of a technical program. Teams often need a stabilization period to monitor reliability, resolve defects, address customer feedback, optimize performance, and confirm that expected outcomes are being achieved.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Watch production behavior closely after launch.',
        },
        {
          title: 'Issues',
          description:
            'Resolve important defects and operational problems.',
        },
        {
          title: 'Outcome validation',
          description:
            'Confirm that the launch actually delivered the intended result.',
        },
      ],
    },

    {
      title: 'Program Metrics',
      content:
        'Useful TPM metrics can include milestone health, dependency aging, risk exposure, schedule variance, blocked work, decision latency, defect trends, change failure rate, delivery flow, stakeholder confidence, and business outcome measures.',
      highlights: [
        {
          title: 'Execution',
          description:
            'Measure progress, milestones, blockers, and dependencies.',
        },
        {
          title: 'Technical health',
          description:
            'Measure quality, reliability, and operational readiness.',
        },
        {
          title: 'Outcome',
          description:
            'Measure whether the program achieved its intended value.',
        },
      ],
    },

    {
      title: 'Decision Latency',
      content:
        'Decision latency is the time required to make an important decision after it becomes necessary. Excessive decision latency can block multiple teams and create significant program risk.',
      highlights: [
        {
          title: 'Visibility',
          description:
            'Track important decisions that are blocking execution.',
        },
        {
          title: 'Ownership',
          description:
            'Ensure decision authority is clear.',
        },
        {
          title: 'Escalation',
          description:
            'Escalate decisions when the current level cannot resolve them.',
        },
      ],
    },

    {
      title: 'Dependency Aging',
      content:
        'Dependency aging measures how long important dependencies remain unresolved or incomplete. Old dependencies can become hidden schedule risks and should be actively reviewed.',
      highlights: [
        {
          title: 'Age',
          description:
            'How long has the dependency remained open?',
        },
        {
          title: 'Impact',
          description:
            'What work is blocked or exposed to risk?',
        },
        {
          title: 'Action',
          description:
            'What is the next concrete step to resolve or mitigate it?',
        },
      ],
    },

    {
      title: 'Program Risk Burndown',
      content:
        'Risk burndown describes the reduction of meaningful program risk over time. A healthy program should progressively eliminate or reduce major uncertainties rather than simply move dates forward while risks remain unresolved.',
      highlights: [
        {
          title: 'Exposure',
          description:
            'Understand the current level of important risk.',
        },
        {
          title: 'Mitigation',
          description:
            'Track actions that reduce risk.',
        },
        {
          title: 'Trend',
          description:
            'Watch whether risk is decreasing, stable, or increasing.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Agile',
      content:
        'TPM and Agile practices complement each other. Agile helps teams deliver incrementally and adapt to feedback, while TPM helps coordinate dependencies, risks, architecture, milestones, and execution across teams that cannot be managed effectively within a single sprint backlog.',
      highlights: [
        {
          title: 'Team execution',
          description:
            'Agile supports iterative engineering delivery.',
        },
        {
          title: 'Cross-team coordination',
          description:
            'TPM handles broader dependencies and program-level risks.',
        },
        {
          title: 'Adaptation',
          description:
            'Both emphasize learning and adjustment rather than rigid plans.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Scrum',
      content:
        'Scrum provides a framework for organizing team-level product development. TPMs may work across multiple Scrum teams and coordinate dependencies, shared milestones, architecture decisions, release readiness, and organizational constraints that extend beyond one team backlog.',
      highlights: [
        {
          title: 'Scrum team',
          description:
            'Focuses on delivering increments within its product context.',
        },
        {
          title: 'TPM',
          description:
            'Coordinates broader technical and cross-team concerns.',
        },
        {
          title: 'Integration',
          description:
            'The TPM should not replace team-level Scrum responsibilities.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Product Management',
      content:
        'PM and TPM partnership is essential for complex technical products. The PM focuses on customer and business value, product strategy, prioritization, and product outcomes. The TPM focuses on technical execution, dependencies, risks, and cross-functional delivery.',
      highlights: [
        {
          title: 'Why',
          description:
            'Product management defines why a capability matters.',
        },
        {
          title: 'How execution works',
          description:
            'TPM coordinates how complex technical work can be delivered.',
        },
        {
          title: 'Shared outcome',
          description:
            'Both remain accountable to the broader product and business result.',
        },
      ],
    },

    {
      title: 'Technical Program Management and System Design',
      content:
        'A TPM does not need to be the architect, but should understand system design concepts such as service boundaries, APIs, databases, queues, caching, scalability, reliability, observability, security, and failure modes. This technical fluency allows the TPM to identify program implications of architecture decisions.',
      highlights: [
        {
          title: 'Architecture awareness',
          description:
            'Understand major components and their interactions.',
        },
        {
          title: 'Risk awareness',
          description:
            'Identify architecture choices that create delivery or operational risk.',
        },
        {
          title: 'Facilitation',
          description:
            'Ensure the right technical experts participate in decisions.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Reliability',
      content:
        'Reliability must be treated as a program concern when technical initiatives affect production systems. TPMs coordinate SLOs, launch readiness, observability, incident preparedness, disaster recovery, rollback strategies, and post-launch stabilization.',
      highlights: [
        {
          title: 'SLO',
          description:
            'Define reliability expectations for important services.',
        },
        {
          title: 'Readiness',
          description:
            'Ensure monitoring and recovery mechanisms are prepared.',
        },
        {
          title: 'Risk',
          description:
            'Include operational failure modes in program planning.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Security',
      content:
        'Security requirements can become major program dependencies if they are discovered late. TPMs help bring security teams into planning early, track security requirements, manage remediation, and ensure launch criteria include appropriate security controls.',
      highlights: [
        {
          title: 'Early involvement',
          description:
            'Include security stakeholders before implementation is complete.',
        },
        {
          title: 'Requirements',
          description:
            'Make security requirements explicit and testable.',
        },
        {
          title: 'Risk',
          description:
            'Track unresolved security risks as program risks.',
        },
      ],
    },

    {
      title: 'Technical Program Management and Vendors',
      content:
        'Technical programs often depend on external vendors, cloud providers, APIs, consultants, or implementation partners. TPMs manage vendor dependencies, contracts, technical requirements, integration timelines, escalation paths, and contingency planning.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'Vendor delivery can affect the critical path.',
        },
        {
          title: 'SLA',
          description:
            'Service commitments should be understood and monitored.',
        },
        {
          title: 'Fallback',
          description:
            'Important vendor dependencies should have contingency strategies where practical.',
        },
      ],
    },

    {
      title: 'Technical Program Management for AI Programs',
      content:
        'AI programs introduce additional complexity because they combine data, models, infrastructure, product behavior, evaluation, safety, cost, and uncertain performance. TPMs coordinate data pipelines, model selection, evaluation, retrieval, infrastructure, security, deployment, monitoring, and business readiness.',
      highlights: [
        {
          title: 'AI lifecycle',
          description:
            'Coordinate data, experimentation, evaluation, deployment, and monitoring.',
        },
        {
          title: 'Uncertainty',
          description:
            'AI performance may change with data, prompts, models, and system configuration.',
        },
        {
          title: 'Governance',
          description:
            'Track safety, privacy, access control, cost, and compliance requirements.',
        },
      ],
    },

    {
      title: 'AI RAG Program Example',
      content:
        'Consider a program to modernize a keyword-based student doubt-solving system into a multimodal RAG platform. The TPM would align product requirements, define workstreams for ingestion, OCR or multimodal processing, embeddings, retrieval, generation, evaluation, frontend integration, observability, and deployment; manage dependencies; track risks; coordinate architecture decisions; and report progress to leadership.',
      highlights: [
        {
          title: 'Workstreams',
          description:
            'Data ingestion, multimodal processing, retrieval, generation, evaluation, application integration, and operations.',
        },
        {
          title: 'Dependencies',
          description:
            'Model access, datasets, infrastructure, APIs, frontend integration, and evaluation readiness.',
        },
        {
          title: 'Outcome',
          description:
            'Improve student question resolution while controlling latency, cost, and hallucination risk.',
        },
      ],
    },

    {
      title: 'AI Voice Agent Program Example',
      content:
        'For an AI voice-agent platform, the TPM may coordinate telephony, speech-to-text, language models, text-to-speech, conversation orchestration, CRM integration, analytics, security, deployment, and customer onboarding. The TPM manages cross-provider dependencies and ensures that latency, reliability, cost, and business outcomes are considered together.',
      highlights: [
        {
          title: 'Architecture',
          description:
            'Multiple AI and infrastructure components must work together.',
        },
        {
          title: 'Vendor dependencies',
          description:
            'Telephony, STT, LLM, and TTS providers can all affect delivery.',
        },
        {
          title: 'Outcome',
          description:
            'The platform must complete useful business tasks, not simply generate conversations.',
        },
      ],
    },

    {
      title: 'Handling Executive Pressure',
      content:
        'When executives ask for an aggressive deadline, a strong TPM does not simply say yes or no. The TPM clarifies the desired outcome, identifies the critical path, quantifies major risks, presents options and trade-offs, and recommends a path. The conversation should move from “Can we do it?” to “What combination of scope, resources, risk, and timeline gives us the best achievable outcome?”',
      highlights: [
        {
          title: 'Clarify',
          description:
            'Understand the real business reason behind the deadline.',
        },
        {
          title: 'Options',
          description:
            'Present feasible combinations of scope, timeline, resources, and risk.',
        },
        {
          title: 'Recommendation',
          description:
            'Make a clear evidence-based recommendation.',
        },
      ],
    },

    {
      title: 'Handling Cross-team Conflict',
      content:
        'TPMs should avoid becoming the judge of personality conflicts. Instead, bring the discussion back to shared outcomes, facts, constraints, dependencies, decision rights, and trade-offs. If teams disagree on implementation, identify who owns the technical decision and ensure the decision is made with sufficient information.',
      highlights: [
        {
          title: 'Facts',
          description:
            'Separate evidence from assumptions and opinions.',
        },
        {
          title: 'Outcome',
          description:
            'Reconnect teams to the shared program objective.',
        },
        {
          title: 'Decision rights',
          description:
            'Make sure the appropriate owner makes the final technical decision.',
        },
      ],
    },

    {
      title: 'Handling a Slipping Program',
      content:
        'When a program slips, the TPM should first establish why: scope growth, underestimated complexity, dependency failure, resource constraints, technical discovery, quality issues, or external changes. Then quantify the impact, identify options, and reset expectations transparently rather than hiding the problem.',
      highlights: [
        {
          title: 'Diagnose',
          description:
            'Understand the actual cause of the slip.',
        },
        {
          title: 'Replan',
          description:
            'Adjust scope, sequence, resources, or timeline based on evidence.',
        },
        {
          title: 'Communicate',
          description:
            'Make the new forecast and trade-offs visible early.',
        },
      ],
    },

    {
      title: 'Handling Ambiguous Requirements',
      content:
        'When requirements are unclear, TPMs should not immediately convert ambiguity into a detailed engineering plan. First clarify the desired outcome, user problem, constraints, success measures, non-goals, assumptions, and decision authority. Then work with product and engineering to determine an appropriate solution.',
      highlights: [
        {
          title: 'Outcome first',
          description:
            'Clarify what problem needs to be solved.',
        },
        {
          title: 'Constraints',
          description:
            'Understand technical, business, regulatory, and timeline constraints.',
        },
        {
          title: 'Discovery',
          description:
            'Use prototypes or technical investigation when uncertainty is high.',
        },
      ],
    },

    {
      title: 'Program Retrospective',
      content:
        'A retrospective examines what happened during the program and identifies improvements for future execution. Strong retrospectives focus on systems and processes rather than blame.',
      highlights: [
        {
          title: 'What worked',
          description:
            'Identify practices worth repeating.',
        },
        {
          title: 'What failed',
          description:
            'Identify systemic causes of problems.',
        },
        {
          title: 'Actions',
          description:
            'Convert lessons into specific improvements with owners.',
        },
      ],
    },

    {
      title: 'Continuous Improvement',
      content:
        'TPM is not only about delivering the current program. Strong TPMs improve the organization’s ability to deliver future programs by identifying recurring dependency patterns, decision bottlenecks, unclear ownership, weak tooling, poor estimation practices, and communication problems.',
      highlights: [
        {
          title: 'Patterns',
          description:
            'Look for recurring problems across programs.',
        },
        {
          title: 'System improvement',
          description:
            'Fix root causes rather than repeatedly treating symptoms.',
        },
        {
          title: 'Organizational leverage',
          description:
            'One process improvement can benefit many future programs.',
        },
      ],
    },

    {
      title: 'TPM Operating System',
      content:
        'A practical TPM operating system can include a program charter, roadmap, workstream tracker, milestone plan, RAID log, dependency map, decision log, risk dashboard, status report, launch checklist, and retrospective. The exact tools vary, but the underlying purpose is always clarity and execution.',
      highlights: [
        {
          title: 'Plan',
          description:
            'Charter, scope, milestones, workstreams, and dependencies.',
        },
        {
          title: 'Execute',
          description:
            'RAID, decisions, blockers, status, and stakeholder alignment.',
        },
        {
          title: 'Launch',
          description:
            'Readiness, go/no-go, deployment, and stabilization.',
        },
        {
          title: 'Improve',
          description:
            'Retrospectives and systemic improvements.',
        },
      ],
    },

    {
      title: 'TPM Leadership Principles',
      content:
        'Effective TPM leadership is based on clarity, ownership, transparency, technical curiosity, structured problem solving, calm escalation, and outcome orientation. TPMs create leverage by making complex systems easier for teams and leaders to navigate.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'Make goals, ownership, dependencies, and decisions visible.',
        },
        {
          title: 'Transparency',
          description:
            'Surface risks early rather than hiding uncomfortable information.',
        },
        {
          title: 'Influence',
          description:
            'Lead through alignment and evidence rather than relying only on authority.',
        },
        {
          title: 'Outcome',
          description:
            'Measure success by the result delivered, not by the number of meetings or documents created.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common TPM interview questions include: Tell me about a complex technical program you led. How do you manage cross-team dependencies? How do you handle conflicting priorities? What do you do when a program is slipping? How do you manage technical risks? How do you communicate with executives? Tell me about a difficult trade-off. How do you handle ambiguity? How do you influence without authority? How do you measure program success? How do you handle an engineering team that disagrees with the product team? How would you lead an AI transformation program?',
      highlights: [
        {
          title: 'Program leadership',
          description:
            'Show how you structured and drove complex execution.',
        },
        {
          title: 'Influence',
          description:
            'Explain how you aligned teams without relying on formal authority.',
        },
        {
          title: 'Technical judgment',
          description:
            'Demonstrate technical fluency without claiming ownership of every architecture decision.',
        },
        {
          title: 'Executive communication',
          description:
            'Explain how you communicate risk, options, and decisions clearly.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I see TPM as the role that creates clarity and execution across complex technical programs. I start by understanding the business outcome, defining scope and non-goals, identifying workstreams and owners, and mapping dependencies and risks. During execution, I maintain a clear program health view, drive decisions, remove cross-team blockers, and communicate changes early. I do not try to replace the Engineering Manager or architect. Instead, I make sure the right technical owners are involved, the trade-offs are understood, and the decision gets made. When a program is at risk, I diagnose the root cause, quantify the impact, present options, and recommend a path rather than simply reporting that we are late. For executives, I communicate outcomes, risks, and decisions; for engineers, I provide technical context and remove organizational friction. Ultimately, I measure TPM success by whether the program delivered the intended business or technical outcome in a sustainable way.”',
      highlights: [
        {
          title: 'Outcome first',
          description:
            'Start with the business or technical outcome.',
        },
        {
          title: 'Structured execution',
          description:
            'Use workstreams, milestones, dependencies, risks, and decisions.',
        },
        {
          title: 'Influence without authority',
          description:
            'Create alignment across teams without directly managing everyone.',
        },
        {
          title: 'Technical fluency',
          description:
            'Understand architecture and engineering risks without replacing technical owners.',
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
    'technical-debt',
    'code-review',
    'testing',
    'test-automation',
    'engineering-metrics',
    'developer-experience',
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
    'docker',
    'kubernetes',
    'terraform',
    'aws',
    'azure',
    'google-cloud',
    'rag',
  ],
}

export default technicalProgramManagementKnowledge
