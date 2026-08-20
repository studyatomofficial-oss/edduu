import type { KnowledgeDefinition } from './knowledge'

export const scrumKnowledge: KnowledgeDefinition = {
  technologyId: 'scrum',
  slug: 'scrum',
  title: 'Scrum',
  summary:
    'Scrum is a lightweight framework for managing complex product development through defined accountabilities, events, artifacts, short iterations, transparency, inspection, and adaptation.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Scrum?',
      content:
        'Scrum is a framework for developing and sustaining complex products. It organizes work into short, fixed-length iterations called Sprints and creates regular opportunities to inspect progress, gather feedback, identify problems, and adapt the plan.',
      highlights: [
        {
          title: 'Scrum',
          description:
            'A lightweight framework for complex product development.',
        },
        {
          title: 'Sprint',
          description:
            'A fixed-length period during which the Scrum Team creates a usable Increment.',
        },
        {
          title: 'Empiricism',
          description:
            'Making decisions based on observation and experience rather than assumptions alone.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a restaurant preparing a new menu. Instead of designing every dish for the entire year before serving anything, the team prepares a small set of dishes, serves them, observes customer reactions, reviews what worked, and adjusts the next set. Scrum creates a similar inspect-and-adapt cycle for product development.',
      highlights: [
        {
          title: 'Prepare',
          description:
            'Select a focused set of work for the next Sprint.',
        },
        {
          title: 'Serve',
          description:
            'Create and deliver a usable product Increment.',
        },
        {
          title: 'Inspect',
          description:
            'Review results and adapt future work.',
        },
      ],
    },

    {
      title: 'Scrum and Agile',
      content:
        'Agile is a broader set of values and principles, while Scrum is a specific framework that provides accountabilities, events, artifacts, and rules for applying an empirical approach to product development.',
      highlights: [
        {
          title: 'Agile',
          description:
            'A broader philosophy emphasizing adaptation, collaboration, feedback, and value.',
        },
        {
          title: 'Scrum',
          description:
            'A concrete framework with defined structures for working in short cycles.',
        },
        {
          title: 'Relationship',
          description:
            'Scrum is one way an organization can implement Agile ideas.',
        },
      ],
    },

    {
      title: 'Scrum Theory',
      content:
        'Scrum is founded on empiricism and lean thinking. Empiricism means knowledge comes from experience and decisions are made based on what is observed. The three pillars of empiricism are transparency, inspection, and adaptation.',
      highlights: [
        {
          title: 'Transparency',
          description:
            'Important aspects of the process and work are visible and understandable.',
        },
        {
          title: 'Inspection',
          description:
            'Progress and results are examined frequently enough to detect problems.',
        },
        {
          title: 'Adaptation',
          description:
            'The process or plan is adjusted when inspection reveals a problem or new information.',
        },
      ],
    },

    {
      title: 'Scrum Values',
      content:
        'The five Scrum Values are Commitment, Focus, Openness, Respect, and Courage. These values guide how the Scrum Team works and how members interact with each other and stakeholders.',
      highlights: [
        {
          title: 'Commitment',
          description:
            'The team commits to achieving the Sprint Goal and supporting the product objective.',
        },
        {
          title: 'Focus',
          description:
            'Concentrating effort on the most important work for the current Sprint.',
        },
        {
          title: 'Openness',
          description:
            'Being transparent about work, progress, problems, and learning.',
        },
        {
          title: 'Respect',
          description:
            'Treating team members as capable professionals.',
        },
        {
          title: 'Courage',
          description:
            'Having the courage to address difficult problems and make necessary decisions.',
        },
      ],
    },

    {
      title: 'The Scrum Team',
      content:
        'A Scrum Team is a small, cross-functional, self-managing team consisting of one Product Owner, one Scrum Master, and Developers. The team works toward a common Product Goal and creates a usable Increment each Sprint.',
      highlights: [
        {
          title: 'Product Owner',
          description:
            'Maximizes product value and is accountable for effective Product Backlog management.',
        },
        {
          title: 'Scrum Master',
          description:
            'Helps establish Scrum, improve team effectiveness, and remove impediments to progress.',
        },
        {
          title: 'Developers',
          description:
            'Create the usable Increment and are accountable for creating a plan for the Sprint, quality, and adapting their plan toward the Sprint Goal.',
        },
      ],
    },

    {
      title: 'Product Owner',
      content:
        'The Product Owner is accountable for maximizing the value of the product resulting from the Scrum Team work. This includes developing and communicating the Product Goal, creating and communicating Product Backlog Items, ordering Product Backlog Items, and ensuring the Product Backlog is transparent, visible, and understood.',
      highlights: [
        {
          title: 'Product Goal',
          description:
            'The long-term objective for the Scrum Team.',
        },
        {
          title: 'Backlog ordering',
          description:
            'Ordering work to maximize value and support the Product Goal.',
        },
        {
          title: 'Value',
          description:
            'The Product Owner is accountable for maximizing the value of the product.',
        },
      ],
    },

    {
      title: 'Scrum Master',
      content:
        'The Scrum Master is accountable for establishing Scrum as defined in the Scrum Guide and for the Scrum Team’s effectiveness. The Scrum Master helps the team understand Scrum theory and practice, facilitates stakeholder collaboration where useful, and helps remove impediments.',
      highlights: [
        {
          title: 'Facilitation',
          description:
            'Helps Scrum events remain useful and productive.',
        },
        {
          title: 'Coaching',
          description:
            'Helps the team and organization understand effective Scrum practices.',
        },
        {
          title: 'Impediment removal',
          description:
            'Helps address obstacles that limit the team’s ability to create value.',
        },
      ],
    },

    {
      title: 'Developers',
      content:
        'Developers are the people on the Scrum Team committed to creating a usable Increment each Sprint. They create the Sprint plan, maintain quality according to the Definition of Done, adapt their plan toward the Sprint Goal, and hold each other accountable as professionals.',
      highlights: [
        {
          title: 'Sprint plan',
          description:
            'Developers determine how selected Product Backlog Items will be turned into an Increment.',
        },
        {
          title: 'Quality',
          description:
            'Developers maintain quality according to the Definition of Done.',
        },
        {
          title: 'Self-management',
          description:
            'Developers decide among themselves who does what, when, and how.',
        },
      ],
    },

    {
      title: 'Product Goal',
      content:
        'The Product Goal describes a future state of the product that serves as a target for the Scrum Team to plan against. The team should fulfill or abandon one Product Goal before taking on the next.',
      highlights: [
        {
          title: 'Product Goal',
          description:
            'The long-term objective that gives direction to the Scrum Team.',
        },
        {
          title: 'Direction',
          description:
            'Provides context for Product Backlog ordering and Sprint planning.',
        },
        {
          title: 'Outcome orientation',
          description:
            'Keeps the team focused on what the product is trying to achieve.',
        },
      ],
    },

    {
      title: 'Product Backlog',
      content:
        'The Product Backlog is an emergent, ordered list of what is needed to improve the product. It is the single source of work undertaken by the Scrum Team. Product Backlog Items may include features, improvements, defects, research, or other work required to achieve the Product Goal.',
      highlights: [
        {
          title: 'Emergent',
          description:
            'The backlog evolves as the team learns more about the product and its environment.',
        },
        {
          title: 'Ordered',
          description:
            'Items are arranged according to their relative importance and value.',
        },
        {
          title: 'Single source',
          description:
            'Work undertaken by the Scrum Team comes from the Product Backlog.',
        },
      ],
    },

    {
      title: 'Product Backlog Refinement',
      content:
        'Product Backlog refinement is an ongoing activity in which Product Backlog Items are broken down and further defined. It helps ensure upcoming work is understood enough to be selected during Sprint Planning. Refinement is not a formal Scrum event.',
      highlights: [
        {
          title: 'Refinement',
          description:
            'Adding detail, ordering, and size estimates where useful.',
        },
        {
          title: 'Progressive detail',
          description:
            'Near-term work usually receives more detail than distant work.',
        },
        {
          title: 'Readiness',
          description:
            'Better-understood items make Sprint Planning more effective.',
        },
      ],
    },

    {
      title: 'Sprint',
      content:
        'A Sprint is a fixed-length event of one month or less during which a usable, valuable Product Increment is created. A new Sprint starts immediately after the previous Sprint concludes.',
      highlights: [
        {
          title: 'Fixed length',
          description:
            'Each Sprint has a consistent duration of one month or less.',
        },
        {
          title: 'Increment',
          description:
            'The Scrum Team creates a usable and valuable product Increment during the Sprint.',
        },
        {
          title: 'Sprint Goal',
          description:
            'Provides the single objective that gives the Sprint purpose.',
        },
      ],
    },

    {
      title: 'Sprint Goal',
      content:
        'The Sprint Goal is the single objective for the Sprint. It creates flexibility in the exact work selected while maintaining a common purpose for the team.',
      highlights: [
        {
          title: 'Single objective',
          description:
            'The Sprint should have one coherent purpose.',
        },
        {
          title: 'Focus',
          description:
            'The goal helps Developers make trade-offs during the Sprint.',
        },
        {
          title: 'Flexibility',
          description:
            'The exact scope can be negotiated as learning occurs, provided the Sprint Goal is not endangered.',
        },
      ],
    },

    {
      title: 'Sprint Planning',
      content:
        'Sprint Planning initiates the Sprint by collaboratively deciding why the Sprint is valuable, what can be done, and how the selected work will be accomplished. The resulting Sprint Backlog contains the Sprint Goal, selected Product Backlog Items, and a plan for delivering the Increment.',
      highlights: [
        {
          title: 'Why',
          description:
            'The team establishes the Sprint Goal and explains why the Sprint is valuable.',
        },
        {
          title: 'What',
          description:
            'Developers select Product Backlog Items that they believe can be completed during the Sprint.',
        },
        {
          title: 'How',
          description:
            'Developers plan the work necessary to create the Increment.',
        },
      ],
    },

    {
      title: 'Daily Scrum',
      content:
        'The Daily Scrum is a 15-minute event for Developers to inspect progress toward the Sprint Goal and adapt the Sprint Backlog as necessary. It is not simply a status meeting for a manager.',
      highlights: [
        {
          title: '15 minutes',
          description:
            'A short daily event for Developers.',
        },
        {
          title: 'Inspect',
          description:
            'Developers inspect progress toward the Sprint Goal.',
        },
        {
          title: 'Adapt',
          description:
            'Developers adjust their plan for the next day as needed.',
        },
      ],
    },

    {
      title: 'Sprint Review',
      content:
        'The Sprint Review is held at the end of the Sprint to inspect the outcome of the Sprint and determine future adaptations. The Scrum Team presents relevant results to stakeholders and collaborates on what to do next based on changes in the product environment.',
      highlights: [
        {
          title: 'Inspect outcome',
          description:
            'Review what was accomplished during the Sprint.',
        },
        {
          title: 'Stakeholders',
          description:
            'Relevant stakeholders collaborate on what should happen next.',
        },
        {
          title: 'Adapt Product Backlog',
          description:
            'The backlog may change based on feedback and new information.',
        },
      ],
    },

    {
      title: 'Sprint Retrospective',
      content:
        'The Sprint Retrospective is an opportunity for the Scrum Team to inspect how the last Sprint went with respect to individuals, interactions, processes, tools, and the Definition of Done. The team identifies the most helpful changes and addresses important improvements as soon as possible.',
      highlights: [
        {
          title: 'Inspect the process',
          description:
            'Examine how the team worked, not only what it delivered.',
        },
        {
          title: 'Improvement',
          description:
            'Identify changes that can increase quality and effectiveness.',
        },
        {
          title: 'Action',
          description:
            'Important improvements should be acted upon rather than simply recorded.',
        },
      ],
    },

    {
      title: 'Scrum Events',
      content:
        'The five formal Scrum events are the Sprint, Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective. These events create regular opportunities for transparency, inspection, and adaptation.',
      highlights: [
        {
          title: 'Sprint',
          description:
            'The container event for all other Scrum events and work.',
        },
        {
          title: 'Planning',
          description:
            'Determines the Sprint Goal, selected work, and initial plan.',
        },
        {
          title: 'Review',
          description:
            'Inspects the product outcome and adapts future direction.',
        },
        {
          title: 'Retrospective',
          description:
            'Inspects and improves the way the team works.',
        },
      ],
    },

    {
      title: 'Sprint Backlog',
      content:
        'The Sprint Backlog is composed of the Sprint Goal, the set of Product Backlog Items selected for the Sprint, and an actionable plan for delivering the Increment. It is a plan by and for the Developers.',
      highlights: [
        {
          title: 'Sprint Goal',
          description:
            'The objective the Sprint is trying to achieve.',
        },
        {
          title: 'Selected items',
          description:
            'The Product Backlog Items chosen for the Sprint.',
        },
        {
          title: 'Plan',
          description:
            'The Developers’ evolving plan for accomplishing the work.',
        },
      ],
    },

    {
      title: 'Increment',
      content:
        'An Increment is a concrete stepping stone toward the Product Goal. Each Increment must be usable and meet the Definition of Done. Multiple Increments can be created within a single Sprint, and an Increment can be delivered before the Sprint Review.',
      highlights: [
        {
          title: 'Usable',
          description:
            'The Increment must be in a usable state.',
        },
        {
          title: 'Definition of Done',
          description:
            'The Increment must meet the agreed Definition of Done.',
        },
        {
          title: 'Multiple increments',
          description:
            'A Sprint can produce more than one Increment.',
        },
      ],
    },

    {
      title: 'Definition of Done',
      content:
        'The Definition of Done is a formal description of the state of the Increment when it meets the quality measures required for the product. If an item does not meet the Definition of Done, it is not part of the Increment and should not be presented as complete.',
      highlights: [
        {
          title: 'Quality standard',
          description:
            'Defines the minimum quality state required for completion.',
        },
        {
          title: 'Shared understanding',
          description:
            'Creates common expectations across the Scrum Team.',
        },
        {
          title: 'Transparency',
          description:
            'Makes the meaning of “done” visible and consistent.',
        },
      ],
    },

    {
      title: 'Empiricism in Scrum',
      content:
        'Scrum is effective when teams use empirical evidence rather than relying entirely on predictions. The team delivers increments, inspects results, receives stakeholder feedback, observes operational behavior, and adapts future work.',
      highlights: [
        {
          title: 'Evidence',
          description:
            'Decisions are informed by what has actually happened.',
        },
        {
          title: 'Inspection',
          description:
            'Progress and results are reviewed regularly.',
        },
        {
          title: 'Adaptation',
          description:
            'Plans and processes change when evidence indicates they should.',
        },
      ],
    },

    {
      title: 'Scrum and Estimation',
      content:
        'Scrum does not prescribe a specific estimation technique. Teams may use story points, t-shirt sizes, ideal days, or other approaches. Estimation is useful for planning and forecasting, but it should not be confused with a guarantee of future delivery.',
      highlights: [
        {
          title: 'Estimation',
          description:
            'A prediction of relative effort, complexity, or uncertainty.',
        },
        {
          title: 'Forecast',
          description:
            'A projection based on available evidence and historical performance.',
        },
        {
          title: 'No prescribed technique',
          description:
            'Scrum does not require story points or any specific estimation method.',
        },
      ],
    },

    {
      title: 'Velocity',
      content:
        'Velocity is a commonly used Scrum planning metric representing the amount of estimated work completed in previous Sprints. It can support forecasting when used carefully, but it is not a measure of individual productivity and is not prescribed by Scrum.',
      highlights: [
        {
          title: 'Historical measure',
          description:
            'Velocity describes what happened in previous Sprints.',
        },
        {
          title: 'Forecasting aid',
          description:
            'Historical velocity can help estimate future capacity when conditions are similar.',
        },
        {
          title: 'Not a performance score',
          description:
            'Using velocity to rank individuals or teams can create harmful incentives.',
        },
      ],
    },

    {
      title: 'Scrum Metrics',
      content:
        'Useful Scrum-related measures can include Sprint Goal success, cycle time, throughput, escaped defects, product outcomes, customer feedback, deployment frequency, and reliability. Teams should avoid using one metric as a simplistic measure of performance.',
      highlights: [
        {
          title: 'Outcome',
          description:
            'Measures whether the Sprint or product work created the intended result.',
        },
        {
          title: 'Flow',
          description:
            'Measures how work moves through the delivery system.',
        },
        {
          title: 'Quality',
          description:
            'Measures defects, failures, and other quality signals.',
        },
      ],
    },

    {
      title: 'Scrum and Technical Debt',
      content:
        'Technical debt should remain visible because unresolved debt can reduce the team’s future ability to deliver value. Developers and Product Owners should consider technical quality, risk, and long-term product sustainability when deciding what work to prioritize.',
      highlights: [
        {
          title: 'Technical debt',
          description:
            'Future cost or constraint created by technical compromises or accumulated complexity.',
        },
        {
          title: 'Sustainable pace',
          description:
            'Maintaining a system where the team can continue delivering effectively.',
        },
        {
          title: 'Quality',
          description:
            'Technical quality is part of sustainable product development.',
        },
      ],
    },

    {
      title: 'Scrum and Engineering Quality',
      content:
        'Scrum does not define engineering practices such as unit testing, code review, CI/CD, or observability. However, strong Scrum implementations commonly integrate these practices into the Definition of Done and the team’s engineering workflow.',
      highlights: [
        {
          title: 'Engineering practices',
          description:
            'Teams choose appropriate technical practices to create high-quality Increments.',
        },
        {
          title: 'Automation',
          description:
            'Automated testing and delivery can strengthen feedback loops.',
        },
        {
          title: 'Definition of Done',
          description:
            'Can include technical quality and operational readiness requirements.',
        },
      ],
    },

    {
      title: 'Scrum and Product Management',
      content:
        'Scrum creates a structured collaboration model between product direction and engineering execution. The Product Owner focuses on maximizing product value, while Developers determine how selected work can be turned into a usable Increment. The Scrum Master supports the effectiveness of the overall Scrum system.',
      highlights: [
        {
          title: 'Product value',
          description:
            'The Product Owner is accountable for maximizing product value.',
        },
        {
          title: 'Engineering execution',
          description:
            'Developers determine how to create the Increment.',
        },
        {
          title: 'Team effectiveness',
          description:
            'The Scrum Master helps the team and organization improve their use of Scrum.',
        },
      ],
    },

    {
      title: 'Scrum and Technical Program Management',
      content:
        'A TPM may work across multiple Scrum Teams, programs, dependencies, architecture initiatives, vendors, and organizational constraints. The TPM should not turn Scrum into a command-and-control reporting system. Instead, the TPM can help teams expose dependencies, risks, milestones, cross-team interfaces, and program-level outcomes while preserving team autonomy.',
      highlights: [
        {
          title: 'Dependency management',
          description:
            'Identify and coordinate dependencies between teams and external systems.',
        },
        {
          title: 'Program visibility',
          description:
            'Create transparent views of milestones, risks, and cross-team outcomes.',
        },
        {
          title: 'Team autonomy',
          description:
            'Support teams without taking away their responsibility for execution decisions.',
        },
      ],
    },

    {
      title: 'Scrum at Scale',
      content:
        'When multiple teams work on the same product or program, coordination becomes more complex. Leaders may need additional mechanisms for dependency management, architecture alignment, release coordination, shared quality standards, and product-level prioritization. Simply adding more meetings does not automatically solve scaling problems.',
      highlights: [
        {
          title: 'Cross-team dependency',
          description:
            'Work or decisions in one team depend on another team.',
        },
        {
          title: 'Shared product',
          description:
            'Multiple teams contribute to a common product outcome.',
        },
        {
          title: 'Coordination',
          description:
            'Additional coordination should be designed around real dependencies and outcomes.',
        },
      ],
    },

    {
      title: 'Scrum and Distributed Systems',
      content:
        'For distributed systems, Scrum teams should make architectural and operational risks visible early. Service boundaries, data consistency, failure handling, observability, capacity, and deployment dependencies can become significant sources of uncertainty and should not be hidden until implementation is nearly complete.',
      highlights: [
        {
          title: 'Architecture risk',
          description:
            'Uncertainty around technical design decisions that can affect delivery or system behavior.',
        },
        {
          title: 'Operational readiness',
          description:
            'Ensuring the Increment can be operated safely in its target environment.',
        },
        {
          title: 'Dependencies',
          description:
            'Managing interfaces and sequencing between distributed components.',
        },
      ],
    },

    {
      title: 'Scrum for AI Products',
      content:
        'AI products benefit from Scrum when the team treats model behavior, data, evaluation, latency, cost, safety, and user experience as evolving concerns. Sprints can contain experiments and engineering work, but the team should define measurable goals and avoid treating AI uncertainty as an excuse for uncontrolled delivery.',
      highlights: [
        {
          title: 'AI evaluation',
          description:
            'Measure model and system behavior against defined expectations.',
        },
        {
          title: 'Experiment',
          description:
            'Use controlled technical or product experiments to reduce uncertainty.',
        },
        {
          title: 'Production feedback',
          description:
            'Use real-world evidence to inform future backlog priorities.',
        },
      ],
    },

    {
      title: 'Scrum for RAG Systems',
      content:
        'A RAG product can be developed incrementally through focused Sprints: ingestion, chunking, retrieval, ranking, prompt construction, answer generation, evaluation, observability, and cost optimization. Each increment should be assessed against end-to-end user outcomes rather than optimizing an isolated component without evidence.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Improve the system’s ability to find relevant knowledge.',
        },
        {
          title: 'Generation',
          description:
            'Improve the quality and usefulness of generated responses.',
        },
        {
          title: 'Evaluation',
          description:
            'Measure end-to-end behavior against representative queries.',
        },
      ],
    },

    {
      title: 'Scrum for AI Voice Platforms',
      content:
        'An AI voice platform can be developed incrementally by establishing telephony connectivity, speech recognition, reasoning, tool use, speech generation, call analytics, reliability, and business outcomes as progressively stronger capabilities. Scrum events provide regular opportunities to inspect call quality and adapt priorities.',
      highlights: [
        {
          title: 'Incremental capability',
          description:
            'Add one valuable and testable capability at a time.',
        },
        {
          title: 'Call quality',
          description:
            'Measure conversational quality, latency, completion, and escalation behavior.',
        },
        {
          title: 'Business outcome',
          description:
            'Connect engineering work to measurable results such as lead qualification or appointment completion.',
        },
      ],
    },

    {
      title: 'Common Scrum Misconceptions',
      content:
        'Scrum is often misunderstood as a set of mandatory meetings, a way for managers to assign tasks, a requirement to use story points, or a process that guarantees predictable delivery. Scrum is instead a framework built around empiricism, self-management, product value, and continuous inspection and adaptation.',
      highlights: [
        {
          title: 'Not task assignment',
          description:
            'Developers decide how to accomplish the Sprint work rather than receiving individual task assignments from a manager.',
        },
        {
          title: 'Not just meetings',
          description:
            'Scrum events exist to support transparency, inspection, and adaptation.',
        },
        {
          title: 'Not guaranteed scope',
          description:
            'Scrum helps manage complexity; it does not guarantee that every forecast will be exactly correct.',
        },
      ],
    },

    {
      title: 'Common Scrum Anti-Patterns',
      content:
        'Common anti-patterns include turning the Daily Scrum into a manager status report, using velocity as a performance target, creating oversized Sprints, constantly interrupting Sprint Goals, skipping retrospectives, treating the Product Backlog as an unprioritized request list, and declaring work complete without meeting the Definition of Done.',
      highlights: [
        {
          title: 'Status-report Daily Scrum',
          description:
            'The event becomes a manager reporting mechanism instead of a Developer planning and inspection event.',
        },
        {
          title: 'Velocity target',
          description:
            'Teams manipulate estimates or behavior to increase a metric.',
        },
        {
          title: 'Sprint interruption',
          description:
            'Frequent uncontrolled changes undermine the Sprint Goal and focus.',
        },
        {
          title: 'Fake completion',
          description:
            'Work is called done even though it does not meet the Definition of Done.',
        },
      ],
    },

    {
      title: 'Scrum for Technical Leaders',
      content:
        'For a technical leader, Scrum should be used as a mechanism for transparency and learning rather than as a reporting bureaucracy. The leader should help create clear product goals, expose dependencies and risks, protect sustainable engineering quality, improve cross-team collaboration, and connect Sprint-level execution with program and business outcomes.',
      highlights: [
        {
          title: 'Outcome leadership',
          description:
            'Connect team work to measurable product and business objectives.',
        },
        {
          title: 'Risk visibility',
          description:
            'Make technical, operational, dependency, and delivery risks visible early.',
        },
        {
          title: 'System improvement',
          description:
            'Improve the environment around teams instead of simply demanding more output.',
        },
        {
          title: 'Autonomy',
          description:
            'Support self-managing teams while providing clear organizational direction.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Scrum? What is the difference between Agile and Scrum? What are the Scrum roles or accountabilities? What happens during Sprint Planning? What is the purpose of the Daily Scrum? What is the difference between Sprint Review and Sprint Retrospective? What is a Product Backlog? What is a Sprint Goal? What is the Definition of Done? How do you handle changing requirements during a Sprint? How do you use Scrum across multiple teams?',
      highlights: [
        {
          title: 'Framework understanding',
          description:
            'Explain Scrum using its accountabilities, events, artifacts, and empirical foundation.',
        },
        {
          title: 'Leadership',
          description:
            'Show that you understand how to support teams without turning Scrum into command-and-control.',
        },
        {
          title: 'Adaptation',
          description:
            'Explain how feedback changes future work and priorities.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I see Scrum as a lightweight framework for managing complex product development through transparency, inspection, and adaptation. The Product Owner focuses on maximizing product value, Developers own how the work is executed and create the Increment, and the Scrum Master helps the team and organization use Scrum effectively. The Sprint creates a short feedback cycle, while Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective provide different inspection and adaptation points. As a technical leader or TPM, I would use Scrum to improve visibility, manage dependencies and risks, and connect team execution to product outcomes without turning the framework into a command-and-control reporting process.”',
      highlights: [
        {
          title: 'Empiricism',
          description:
            'Use transparency, inspection, and adaptation as the core explanation.',
        },
        {
          title: 'Accountabilities',
          description:
            'Explain the responsibilities of Product Owner, Scrum Master, and Developers clearly.',
        },
        {
          title: 'Leadership',
          description:
            'Focus on outcomes, risks, dependencies, and team effectiveness.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'loop-engineering',
    'agile',
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

export default scrumKnowledge
