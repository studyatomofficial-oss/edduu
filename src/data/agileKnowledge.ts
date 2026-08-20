import type { KnowledgeDefinition } from './knowledge'

export const agileKnowledge: KnowledgeDefinition = {
  technologyId: 'agile',
  slug: 'agile',
  title: 'Agile',
  summary:
    'Agile is an iterative and adaptive approach to product and software delivery that emphasizes customer value, frequent feedback, collaboration, transparency, and the ability to respond to changing requirements.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Agile?',
      content:
        'Agile is a way of organizing product and engineering work around short feedback cycles, incremental delivery, collaboration, and adaptation. Instead of assuming that every requirement can be perfectly known and planned upfront, Agile teams deliver useful increments, learn from feedback, and adjust priorities as new information becomes available.',
      highlights: [
        {
          title: 'Agile',
          description:
            'An adaptive approach to delivering products through iterative development and continuous feedback.',
        },
        {
          title: 'Iteration',
          description:
            'A repeated delivery cycle used to learn and improve.',
        },
        {
          title: 'Adaptation',
          description:
            'Changing plans or implementation when evidence or circumstances change.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine building a house for a family that is still deciding exactly how it wants to use the rooms. Instead of building the entire house and discovering at the end that the design is wrong, you would regularly review progress with the family, confirm priorities, and adjust the next part of the work. Agile applies this feedback-oriented thinking to product development.',
      highlights: [
        {
          title: 'Small delivery',
          description:
            'Complete useful pieces instead of waiting for everything to be finished.',
        },
        {
          title: 'Feedback',
          description:
            'Regularly ask stakeholders whether the solution is meeting the intended need.',
        },
        {
          title: 'Adaptation',
          description:
            'Change future work based on what is learned.',
        },
      ],
    },

    {
      title: 'Why Agile Exists',
      content:
        'Software development often involves uncertainty. Customer needs can change, technical assumptions can be wrong, market conditions can shift, and users may respond differently than expected. Agile helps teams reduce the cost of being wrong by creating frequent opportunities to inspect results and change direction.',
      highlights: [
        {
          title: 'Uncertainty',
          description:
            'The future behavior of customers, technology, and markets cannot always be predicted accurately.',
        },
        {
          title: 'Feedback',
          description:
            'Real users and stakeholders provide information that planning alone cannot provide.',
        },
        {
          title: 'Adaptation',
          description:
            'The team changes future work based on new evidence.',
        },
      ],
    },

    {
      title: 'Agile Values',
      content:
        'The Agile Manifesto describes four value preferences: individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. These are preferences rather than statements that the right-hand concepts have no value.',
      highlights: [
        {
          title: 'Individuals and interactions',
          description:
            'Effective collaboration and communication are highly valued.',
        },
        {
          title: 'Working software',
          description:
            'Useful working product increments provide concrete evidence of progress.',
        },
        {
          title: 'Customer collaboration',
          description:
            'Frequent collaboration helps ensure the product solves the right problem.',
        },
        {
          title: 'Responding to change',
          description:
            'Plans can evolve when new information changes priorities.',
        },
      ],
    },

    {
      title: 'Agile Principles',
      content:
        'The Agile principles emphasize early and continuous delivery of valuable software, welcoming changing requirements, frequent delivery, collaboration between business and developers, motivated teams, direct communication, working software as a primary progress indicator, sustainable pace, technical excellence, simplicity, self-organizing teams, and regular reflection and adaptation.',
      highlights: [
        {
          title: 'Early delivery',
          description:
            'Deliver valuable functionality early rather than waiting for the end of a long project.',
        },
        {
          title: 'Customer collaboration',
          description:
            'Work closely with customers and stakeholders throughout delivery.',
        },
        {
          title: 'Technical excellence',
          description:
            'Maintain strong engineering quality so the team can continue adapting effectively.',
        },
        {
          title: 'Retrospection',
          description:
            'Regularly reflect on how the team works and identify improvements.',
        },
      ],
    },

    {
      title: 'Agile is Not a Single Method',
      content:
        'Agile is an umbrella of values and principles rather than one specific project-management framework. Scrum, Kanban, Extreme Programming, and other approaches can be used to implement Agile ideas in different ways.',
      highlights: [
        {
          title: 'Agile',
          description:
            'A broader philosophy and set of values and principles.',
        },
        {
          title: 'Scrum',
          description:
            'A specific framework for managing complex product development.',
        },
        {
          title: 'Kanban',
          description:
            'A flow-oriented method focused on visualizing and improving work movement.',
        },
      ],
    },

    {
      title: 'Iterative vs Incremental',
      content:
        'Iterative development means repeatedly refining the solution based on learning. Incremental development means adding usable pieces of functionality over time. Agile delivery commonly uses both: teams add functionality incrementally and improve their understanding and implementation iteratively.',
      highlights: [
        {
          title: 'Iterative',
          description:
            'Repeatedly improve the solution through learning and feedback.',
        },
        {
          title: 'Incremental',
          description:
            'Add useful pieces of functionality over time.',
        },
        {
          title: 'Combined',
          description:
            'Agile teams often use both approaches together.',
        },
      ],
    },

    {
      title: 'Agile Planning',
      content:
        'Agile does not mean no planning. It means planning at multiple levels and accepting that future details may change. Teams can maintain a product vision and roadmap while progressively refining near-term requirements as more information becomes available.',
      highlights: [
        {
          title: 'Vision',
          description:
            'The broader product outcome the organization wants to achieve.',
        },
        {
          title: 'Roadmap',
          description:
            'A directional view of important product outcomes and priorities.',
        },
        {
          title: 'Iteration planning',
          description:
            'Detailed planning for the next delivery cycle.',
        },
      ],
    },

    {
      title: 'Backlog',
      content:
        'A product backlog is an ordered collection of potential work. It may contain features, user stories, defects, technical improvements, research, and other work needed to move the product forward. The backlog should represent current priorities rather than becoming a permanent list of everything anyone has ever requested.',
      highlights: [
        {
          title: 'Backlog',
          description:
            'An ordered set of potential product and engineering work.',
        },
        {
          title: 'Prioritization',
          description:
            'Ordering work according to value, urgency, risk, dependencies, and other decision criteria.',
        },
        {
          title: 'Refinement',
          description:
            'Improving understanding and readiness of upcoming work.',
        },
      ],
    },

    {
      title: 'Prioritization in Agile',
      content:
        'Agile teams continuously prioritize rather than assuming the original priority order will remain correct. Prioritization can consider customer value, business impact, strategic alignment, risk reduction, dependencies, effort, technical constraints, and learning value.',
      highlights: [
        {
          title: 'Value',
          description:
            'The benefit created for users or the business.',
        },
        {
          title: 'Risk',
          description:
            'The potential downside of delaying or implementing the work.',
        },
        {
          title: 'Effort',
          description:
            'The expected engineering and delivery investment.',
        },
      ],
    },

    {
      title: 'Customer Collaboration',
      content:
        'Agile encourages continuous customer and stakeholder collaboration because requirements are often hypotheses about what users need. Regular feedback helps teams validate whether the delivered solution creates the intended value.',
      highlights: [
        {
          title: 'Customer feedback',
          description:
            'Information from actual users about problems, behavior, and satisfaction.',
        },
        {
          title: 'Validation',
          description:
            'Checking whether the product solves the intended problem.',
        },
        {
          title: 'Learning',
          description:
            'Using customer evidence to improve future decisions.',
        },
      ],
    },

    {
      title: 'Definition of Done',
      content:
        'A Definition of Done is a shared understanding of the quality and completion conditions required for work to be considered complete. It may include code completion, review, testing, security checks, documentation, deployment readiness, and other organization-specific requirements.',
      highlights: [
        {
          title: 'Definition of Done',
          description:
            'A shared quality standard for considering work complete.',
        },
        {
          title: 'Quality gate',
          description:
            'A condition that must be satisfied before work can move forward.',
        },
        {
          title: 'Shared understanding',
          description:
            'The team agrees on what “done” means.',
        },
      ],
    },

    {
      title: 'Agile Estimation',
      content:
        'Agile teams may estimate work to support planning and forecasting. Techniques include story points, ideal days, t-shirt sizing, and throughput-based forecasting. Estimates should support decision-making rather than become false promises of exact future delivery dates.',
      highlights: [
        {
          title: 'Story points',
          description:
            'A relative measure of effort, complexity, and uncertainty.',
        },
        {
          title: 'Relative estimation',
          description:
            'Comparing work items rather than pretending to know exact future effort.',
        },
        {
          title: 'Forecast',
          description:
            'A probability-based expectation about future delivery.',
        },
      ],
    },

    {
      title: 'Velocity',
      content:
        'Velocity is commonly used in Scrum to describe the amount of estimated work completed by a team during an iteration. It can support forecasting when used carefully, but it should not become a target for individual performance measurement because that can encourage unhealthy behavior and estimation manipulation.',
      highlights: [
        {
          title: 'Velocity',
          description:
            'A historical measure of completed estimated work within an iteration.',
        },
        {
          title: 'Forecasting',
          description:
            'Historical velocity can help estimate likely future capacity when conditions are reasonably comparable.',
        },
        {
          title: 'Anti-pattern',
          description:
            'Treating velocity as a productivity score can distort team behavior.',
        },
      ],
    },

    {
      title: 'Agile Metrics',
      content:
        'Useful Agile metrics include cycle time, lead time, throughput, escaped defects, deployment frequency, customer outcomes, predictability, and team health. Metrics should help teams identify system improvements rather than create pressure to optimize a single number.',
      highlights: [
        {
          title: 'Cycle time',
          description:
            'Time from starting work to completing it.',
        },
        {
          title: 'Lead time',
          description:
            'Time from request or commitment to delivery, depending on the organization’s definition.',
        },
        {
          title: 'Throughput',
          description:
            'The amount of work completed over a period.',
        },
      ],
    },

    {
      title: 'Agile and Technical Debt',
      content:
        'Agile delivery does not mean ignoring technical debt. Technical debt should be made visible and considered during prioritization because accumulated debt can reduce engineering speed, increase defects, and make future changes more expensive.',
      highlights: [
        {
          title: 'Technical debt',
          description:
            'Future cost created by technical compromises or accumulated complexity.',
        },
        {
          title: 'Engineering capacity',
          description:
            'Some delivery capacity may need to be allocated to debt reduction.',
        },
        {
          title: 'Sustainable delivery',
          description:
            'Maintaining technical quality so the team can continue delivering effectively.',
        },
      ],
    },

    {
      title: 'Agile and Quality',
      content:
        'Quality is not supposed to be a final phase after feature development. Agile engineering practices integrate testing, code review, automation, security, observability, and operational readiness into the delivery process.',
      highlights: [
        {
          title: 'Built-in quality',
          description:
            'Quality practices are integrated throughout delivery.',
        },
        {
          title: 'Automation',
          description:
            'Automated checks provide fast and repeatable feedback.',
        },
        {
          title: 'Production readiness',
          description:
            'A feature should meet operational requirements before being considered complete.',
        },
      ],
    },

    {
      title: 'Agile and Continuous Delivery',
      content:
        'Agile works well with Continuous Integration and Continuous Delivery because frequent increments require reliable automated validation and deployment capabilities. Automation shortens the feedback loop between implementation and real-world usage.',
      highlights: [
        {
          title: 'Continuous Integration',
          description:
            'Frequently integrating and validating changes.',
        },
        {
          title: 'Continuous Delivery',
          description:
            'Keeping software in a deployable state.',
        },
        {
          title: 'Fast feedback',
          description:
            'Reducing the time between change and evidence.',
        },
      ],
    },

    {
      title: 'Agile and DevOps',
      content:
        'Agile focuses heavily on adaptive product development and collaboration, while DevOps extends collaboration and automation across development and operations. Together they can create a shorter loop from idea to production and production feedback back to planning.',
      highlights: [
        {
          title: 'Agile',
          description:
            'Adaptive product development and delivery.',
        },
        {
          title: 'DevOps',
          description:
            'Collaboration and automation across development and operations.',
        },
        {
          title: 'Feedback loop',
          description:
            'Connecting development decisions with production outcomes.',
        },
      ],
    },

    {
      title: 'Agile and Product Management',
      content:
        'Product Management determines which problems and outcomes deserve attention, while engineering determines how those outcomes can be delivered safely and sustainably. Agile creates frequent collaboration between product and engineering so decisions can adapt to evidence.',
      highlights: [
        {
          title: 'Product outcome',
          description:
            'The customer or business result the product aims to achieve.',
        },
        {
          title: 'Engineering feasibility',
          description:
            'Understanding technical options, constraints, risks, and effort.',
        },
        {
          title: 'Trade-off',
          description:
            'Balancing value, time, scope, quality, risk, and cost.',
        },
      ],
    },

    {
      title: 'Agile and Requirements',
      content:
        'Agile does not eliminate requirements. It changes how requirements are handled. Teams often maintain a high-level understanding of future needs while progressively refining near-term requirements into smaller, testable pieces.',
      highlights: [
        {
          title: 'Requirement',
          description:
            'A statement of a need, capability, constraint, or expected behavior.',
        },
        {
          title: 'Progressive refinement',
          description:
            'Adding detail as the work approaches implementation.',
        },
        {
          title: 'Testable requirement',
          description:
            'A requirement that can be validated against observable behavior.',
        },
      ],
    },

    {
      title: 'Agile and User Stories',
      content:
        'User stories are one common way of expressing requirements from a user perspective. They help teams focus on who needs something, what they need, and why it provides value. A story should not replace deeper conversation where technical or business complexity requires additional detail.',
      highlights: [
        {
          title: 'User story',
          description:
            'A concise representation of a user need or desired capability.',
        },
        {
          title: 'User value',
          description:
            'The reason the capability matters to the user or business.',
        },
        {
          title: 'Conversation',
          description:
            'The discussion around the story is often as important as the written statement.',
        },
      ],
    },

    {
      title: 'Agile and Acceptance Criteria',
      content:
        'Acceptance criteria define the conditions that must be satisfied for a requirement or story to be accepted. They provide a shared understanding between product, engineering, QA, and stakeholders about expected behavior.',
      highlights: [
        {
          title: 'Acceptance criteria',
          description:
            'Specific conditions used to determine whether a requirement has been satisfied.',
        },
        {
          title: 'Shared understanding',
          description:
            'Reducing ambiguity between business and engineering stakeholders.',
        },
        {
          title: 'Validation',
          description:
            'Providing a basis for testing the expected behavior.',
        },
      ],
    },

    {
      title: 'Agile and Architecture',
      content:
        'Agile does not mean architecture should emerge without thought. Teams should make enough architectural decisions to manage current and foreseeable risks while avoiding unnecessary speculative complexity. Architecture should evolve as the product and its constraints become better understood.',
      highlights: [
        {
          title: 'Evolutionary architecture',
          description:
            'Architecture that can change as requirements and system understanding evolve.',
        },
        {
          title: 'Technical risk',
          description:
            'The possibility that an architectural decision creates future failure or constraint.',
        },
        {
          title: 'Intentional design',
          description:
            'Making deliberate architectural decisions where they matter rather than avoiding design altogether.',
        },
      ],
    },

    {
      title: 'Agile and Distributed Systems',
      content:
        'Distributed systems introduce additional complexity around service boundaries, consistency, failure handling, observability, and deployment. Agile teams should expose these technical risks early rather than treating them as implementation details that can always be solved later.',
      highlights: [
        {
          title: 'Distributed-system risk',
          description:
            'Risk created by network communication, independent services, asynchronous behavior, and partial failure.',
        },
        {
          title: 'Dependency',
          description:
            'A service or component required by another part of the system.',
        },
        {
          title: 'Early validation',
          description:
            'Testing critical architectural assumptions before large investments are made.',
        },
      ],
    },

    {
      title: 'Agile for AI Products',
      content:
        'AI products benefit from Agile because model behavior, data quality, user expectations, and provider capabilities can evolve quickly. AI teams should combine iterative product delivery with evaluation-driven engineering, controlled experiments, monitoring, and human feedback.',
      highlights: [
        {
          title: 'AI evaluation',
          description:
            'Measuring model and system behavior against defined quality expectations.',
        },
        {
          title: 'Experimentation',
          description:
            'Testing prompts, models, retrieval strategies, workflows, or user experiences in controlled ways.',
        },
        {
          title: 'Human feedback',
          description:
            'Using expert or user evaluation to improve AI behavior.',
        },
      ],
    },

    {
      title: 'Agile for RAG Systems',
      content:
        'RAG development benefits from incremental delivery because retrieval quality, chunking, embeddings, ranking, prompts, and generation quality often require experimentation. Teams can progressively improve retrieval and answer quality while monitoring latency, cost, and factual reliability.',
      highlights: [
        {
          title: 'Retrieval quality',
          description:
            'How effectively relevant knowledge is retrieved.',
        },
        {
          title: 'Answer quality',
          description:
            'How accurately and usefully the system responds using retrieved context.',
        },
        {
          title: 'Evaluation set',
          description:
            'A representative set of queries and expected outcomes used to measure system quality.',
        },
      ],
    },

    {
      title: 'Agile for AI Voice Platforms',
      content:
        'AI voice products can be developed incrementally by first validating call connectivity, then speech recognition, agent reasoning, tools, speech generation, call outcomes, analytics, and operational controls. Each increment should have measurable acceptance criteria and production feedback.',
      highlights: [
        {
          title: 'Incremental voice capability',
          description:
            'Adding one meaningful part of the voice experience at a time.',
        },
        {
          title: 'Call outcome',
          description:
            'A measurable result such as successful qualification, appointment booking, escalation, or completion.',
        },
        {
          title: 'Production feedback',
          description:
            'Evidence from real calls used to improve the system.',
        },
      ],
    },

    {
      title: 'Common Agile Misconceptions',
      content:
        'Agile is often misunderstood as “no planning,” “no documentation,” “change everything at any time,” or “move fast and ignore quality.” In practice, effective Agile teams plan, document important decisions, manage technical quality, and use controlled adaptation rather than uncontrolled change.',
      highlights: [
        {
          title: 'No planning',
          description:
            'Incorrect. Agile uses planning at appropriate levels of detail.',
        },
        {
          title: 'No documentation',
          description:
            'Incorrect. Agile values working software but does not reject useful documentation.',
        },
        {
          title: 'No discipline',
          description:
            'Incorrect. Agile requires strong engineering and collaboration discipline.',
        },
        {
          title: 'Unlimited change',
          description:
            'Incorrect. Change still requires prioritization and trade-off decisions.',
        },
      ],
    },

    {
      title: 'Common Agile Anti-Patterns',
      content:
        'Agile can fail when teams mechanically perform ceremonies without learning, optimize velocity instead of outcomes, constantly change priorities, carry oversized stories, ignore technical debt, skip quality practices, or treat Agile terminology as more important than customer value.',
      highlights: [
        {
          title: 'Ceremony-driven Agile',
          description:
            'Performing meetings and rituals without producing meaningful feedback or improvement.',
        },
        {
          title: 'Velocity gaming',
          description:
            'Changing estimates or behavior to make velocity appear better.',
        },
        {
          title: 'Priority thrashing',
          description:
            'Constantly changing direction without a clear decision framework.',
        },
        {
          title: 'Quality erosion',
          description:
            'Trading away engineering quality repeatedly in the name of speed.',
        },
      ],
    },

    {
      title: 'Agile for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, Agile is less about running ceremonies and more about creating a system where teams can deliver value, learn quickly, manage risk, and adapt responsibly. A technical leader should connect product priorities, engineering capacity, architecture, quality, dependencies, and measurable outcomes.',
      highlights: [
        {
          title: 'Outcome leadership',
          description:
            'Focus teams on customer and business outcomes rather than activity alone.',
        },
        {
          title: 'Risk management',
          description:
            'Make technical, delivery, dependency, and operational risks visible early.',
        },
        {
          title: 'Cross-functional alignment',
          description:
            'Keep product, engineering, QA, design, operations, and stakeholders aligned.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Use delivery evidence to improve the system of work.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Agile? What are the Agile Manifesto values? Is Agile the same as Scrum? How do you handle changing requirements? How do you prioritize an Agile backlog? How do you measure Agile success? What are common Agile anti-patterns? How do you balance speed and technical quality? How would you apply Agile to an AI product?',
      highlights: [
        {
          title: 'Agile vs Scrum',
          description:
            'Explain that Agile is broader while Scrum is a specific framework.',
        },
        {
          title: 'Change management',
          description:
            'Explain how changing requirements are evaluated and reprioritized.',
        },
        {
          title: 'Outcome measurement',
          description:
            'Show that successful Agile delivery is about value and learning, not simply velocity.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I see Agile as a way of managing uncertainty through short feedback cycles and incremental delivery. I do not interpret Agile as having no planning or documentation. We still establish a product direction, understand requirements, manage architecture and technical risks, and define quality standards. The difference is that we progressively refine the details and regularly validate our assumptions with customers and production evidence. As a technical leader, I focus on outcomes, predictable delivery, engineering quality, dependency management, and continuous improvement rather than simply tracking ceremonies or velocity.”',
      highlights: [
        {
          title: 'Adaptive planning',
          description:
            'Plan enough to provide direction while allowing evidence to change future decisions.',
        },
        {
          title: 'Quality',
          description:
            'Treat engineering quality as part of delivery rather than an optional final step.',
        },
        {
          title: 'Outcomes',
          description:
            'Measure whether the work creates meaningful customer or business value.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'loop-engineering',
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

export default agileKnowledge
