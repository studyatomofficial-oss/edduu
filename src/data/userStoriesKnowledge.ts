import type { KnowledgeDefinition } from './knowledge'

export const userStoriesKnowledge: KnowledgeDefinition = {
  technologyId: 'user-stories',
  slug: 'user-stories',
  title: 'User Stories',
  summary:
    'User Stories are concise expressions of user needs that help product and engineering teams understand who needs something, what they want to accomplish, and why it matters.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is a User Story?',
      content:
        'A User Story is a lightweight way of describing a product need from the perspective of the person who will use or benefit from the capability. A common format is: As a [user], I want [capability], so that [value]. The story creates a shared starting point for conversation, refinement, implementation, and validation.',
      highlights: [
        {
          title: 'User',
          description:
            'Identifies who needs or benefits from the capability.',
        },
        {
          title: 'Need',
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
      title: 'Simple Analogy',
      content:
        'Imagine ordering food at a restaurant. Saying “I want something” is too vague. Saying “As a customer, I want a vegetarian meal so that I can eat according to my preference” gives the waiter a useful starting point. The kitchen can then ask the necessary questions about ingredients, quantity, and timing. A User Story works similarly: it captures the need while leaving room for conversation about the details.',
      highlights: [
        {
          title: 'Need',
          description:
            'What the person wants to accomplish.',
        },
        {
          title: 'Context',
          description:
            'Why the request matters.',
        },
        {
          title: 'Conversation',
          description:
            'The story is a starting point, not necessarily the entire specification.',
        },
      ],
    },

    {
      title: 'Why User Stories Matter',
      content:
        'User Stories help teams focus on user value rather than implementation tasks. They provide a common language for product, engineering, design, QA, and stakeholders and make it easier to discuss scope, acceptance criteria, edge cases, and trade-offs.',
      highlights: [
        {
          title: 'User focus',
          description:
            'Keeps attention on the person and problem being solved.',
        },
        {
          title: 'Shared language',
          description:
            'Creates a simple structure for cross-functional discussion.',
        },
        {
          title: 'Value orientation',
          description:
            'Connects requested capability to a reason or outcome.',
        },
      ],
    },

    {
      title: 'The Standard User Story Format',
      content:
        'A common structure is: As a [type of user], I want [some goal or capability], so that [some benefit or value]. For example: “As a customer, I want to reset my password so that I can regain access to my account without contacting support.”',
      highlights: [
        {
          title: 'As a',
          description:
            'Defines the user or actor.',
        },
        {
          title: 'I want',
          description:
            'Defines the desired capability or goal.',
        },
        {
          title: 'So that',
          description:
            'Defines the expected value or reason.',
        },
      ],
    },

    {
      title: 'User vs Stakeholder',
      content:
        'The person requesting a capability is not always the person using it. A stakeholder may request functionality because of business, compliance, operational, or financial needs, while the actual user may interact with the resulting system. Good stories make the relevant actor and value clear.',
      highlights: [
        {
          title: 'User',
          description:
            'Interacts directly with the product or receives its service.',
        },
        {
          title: 'Stakeholder',
          description:
            'Influences, depends on, or is affected by the product.',
        },
        {
          title: 'Business owner',
          description:
            'May be accountable for a business outcome without directly using the feature.',
        },
      ],
    },

    {
      title: 'Good User Story Characteristics',
      content:
        'A useful user story should be understandable, valuable, negotiable, appropriately sized, testable, and focused on a meaningful user outcome. A common mnemonic is INVEST: Independent, Negotiable, Valuable, Estimable, Small, and Testable.',
      highlights: [
        {
          title: 'Independent',
          description:
            'Can be planned and delivered with limited dependency where practical.',
        },
        {
          title: 'Negotiable',
          description:
            'Leaves room for conversation about implementation and details.',
        },
        {
          title: 'Valuable',
          description:
            'Provides a meaningful user or business benefit.',
        },
        {
          title: 'Small',
          description:
            'Is appropriately sized for the team’s delivery process.',
        },
        {
          title: 'Testable',
          description:
            'Can be validated against explicit expectations.',
        },
      ],
    },

    {
      title: 'INVEST',
      content:
        'INVEST is a useful checklist for evaluating user stories: Independent, Negotiable, Valuable, Estimable, Small, and Testable. It is a heuristic rather than a rigid rule. Some real-world work will have unavoidable dependencies or uncertainty.',
      highlights: [
        {
          title: 'Independent',
          description:
            'Minimize unnecessary dependency between stories.',
        },
        {
          title: 'Negotiable',
          description:
            'The story expresses intent rather than dictating every implementation detail.',
        },
        {
          title: 'Valuable',
          description:
            'The story represents meaningful value.',
        },
        {
          title: 'Estimable',
          description:
            'The team can understand it well enough to estimate or plan it.',
        },
        {
          title: 'Small',
          description:
            'The story is manageable within the delivery process.',
        },
        {
          title: 'Testable',
          description:
            'The expected behavior can be validated.',
        },
      ],
    },

    {
      title: 'User Story vs Requirement',
      content:
        'A user story is one way to express a requirement from a user perspective. Requirements Engineering is the broader discipline of discovering, analyzing, documenting, validating, prioritizing, and managing requirements. A user story does not replace all forms of requirements documentation.',
      highlights: [
        {
          title: 'User story',
          description:
            'A lightweight expression of user need and value.',
        },
        {
          title: 'Requirement',
          description:
            'A broader concept covering capabilities, behavior, qualities, constraints, and conditions.',
        },
        {
          title: 'Relationship',
          description:
            'User stories can be used as one artifact within requirements engineering.',
        },
      ],
    },

    {
      title: 'User Story vs Use Case',
      content:
        'A user story is intentionally concise and focuses on a user need and value. A use case usually provides a more structured description of interactions, including actors, preconditions, primary flows, alternative flows, and exceptions. The appropriate artifact depends on the complexity and risk of the product.',
      highlights: [
        {
          title: 'User story',
          description:
            'Short, user-centered expression of need.',
        },
        {
          title: 'Use case',
          description:
            'Detailed interaction model for achieving a goal.',
        },
        {
          title: 'Choice',
          description:
            'Use the level of detail appropriate to the problem and risk.',
        },
      ],
    },

    {
      title: 'User Story vs Feature',
      content:
        'A feature is a product capability or area of functionality. A user story is a way of describing a specific user need related to that capability. One feature may require multiple stories, especially when there are multiple user types, workflows, or scenarios.',
      highlights: [
        {
          title: 'Feature',
          description:
            'A broader product capability.',
        },
        {
          title: 'Story',
          description:
            'A specific user-centered need that contributes to the capability.',
        },
        {
          title: 'Decomposition',
          description:
            'Large capabilities can be broken into multiple stories.',
        },
      ],
    },

    {
      title: 'Epics',
      content:
        'An Epic is a larger body of work that may be too broad to complete as a single user story. Teams can decompose an Epic into smaller stories that each deliver meaningful increments of value.',
      highlights: [
        {
          title: 'Epic',
          description:
            'A large product objective or body of work.',
        },
        {
          title: 'Story',
          description:
            'A smaller user-centered increment contributing to the Epic.',
        },
        {
          title: 'Decomposition',
          description:
            'Break work down around meaningful user outcomes rather than technical layers alone.',
        },
      ],
    },

    {
      title: 'Example: Login Epic',
      content:
        'An Epic might be “Account Access.” Stories could include: As a customer, I want to log in with my email and password so that I can access my account. As a customer, I want to reset my password so that I can regain access if I forget it. As a customer, I want to sign out so that I can protect my account on a shared device.',
      highlights: [
        {
          title: 'Epic',
          description:
            'Account Access.',
        },
        {
          title: 'Story 1',
          description:
            'Authenticate and access the account.',
        },
        {
          title: 'Story 2',
          description:
            'Recover access through password reset.',
        },
        {
          title: 'Story 3',
          description:
            'End the authenticated session safely.',
        },
      ],
    },

    {
      title: 'Story Slicing',
      content:
        'Story slicing means breaking a large requirement into smaller vertical slices that each provide meaningful value. A good slice cuts through the relevant layers of the product rather than creating separate stories such as “build database,” “build API,” and “build UI” that provide no independently useful customer outcome.',
      highlights: [
        {
          title: 'Vertical slice',
          description:
            'A small increment that crosses the necessary product layers and delivers usable value.',
        },
        {
          title: 'Horizontal slice',
          description:
            'A technical layer completed independently, often without delivering end-user value by itself.',
        },
        {
          title: 'Value',
          description:
            'The preferred slice should create observable progress toward the user outcome.',
        },
      ],
    },

    {
      title: 'Example of Good Story Slicing',
      content:
        'Instead of creating separate stories for database, API, and frontend work, a payment capability might first be sliced as “As a customer, I want to complete a basic card payment so that I can purchase the product.” Later stories can add refunds, saved cards, multiple payment methods, and advanced failure handling.',
      highlights: [
        {
          title: 'Vertical increment',
          description:
            'The first story creates a complete but narrow user journey.',
        },
        {
          title: 'Progressive enhancement',
          description:
            'Additional stories expand the capability.',
        },
        {
          title: 'Learning',
          description:
            'Early delivery provides evidence before large investment.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria',
      content:
        'Acceptance criteria define the conditions that must be satisfied for the story to be considered complete from a product perspective. They make expected behavior explicit and help engineering and QA validate the story.',
      highlights: [
        {
          title: 'Behavior',
          description:
            'What should happen under defined conditions.',
        },
        {
          title: 'Validation',
          description:
            'How the team can determine whether the story is satisfied.',
        },
        {
          title: 'Shared understanding',
          description:
            'Creates agreement between product, engineering, QA, and stakeholders.',
        },
      ],
    },

    {
      title: 'Given-When-Then',
      content:
        'Given-When-Then is a common structure for expressing acceptance scenarios. Given describes the starting context, When describes the action or event, and Then describes the expected result. It is especially useful when teams want clear behavioral examples.',
      highlights: [
        {
          title: 'Given',
          description:
            'Defines the initial state or context.',
        },
        {
          title: 'When',
          description:
            'Defines the action or event.',
        },
        {
          title: 'Then',
          description:
            'Defines the expected outcome.',
        },
      ],
    },

    {
      title: 'Example Acceptance Criteria',
      content:
        'Story: “As a customer, I want to reset my password so that I can regain access to my account.” Example scenarios: Given a registered email address, when the customer requests a reset, then the system sends the reset instructions. Given an expired reset link, when the customer opens it, then the system explains that the link is no longer valid and provides a way to request a new one.',
      highlights: [
        {
          title: 'Happy path',
          description:
            'The expected successful workflow.',
        },
        {
          title: 'Exception',
          description:
            'Behavior when a relevant failure or invalid condition occurs.',
        },
        {
          title: 'Testability',
          description:
            'Each scenario describes observable behavior.',
        },
      ],
    },

    {
      title: 'Definition of Ready',
      content:
        'A Definition of Ready is a team agreement describing what should be true before work is considered ready to enter implementation. It may include clear scope, acceptance criteria, dependencies understood, designs available where needed, and important questions resolved. It is a team practice rather than a universal standard.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'The team understands the intended outcome and scope.',
        },
        {
          title: 'Dependencies',
          description:
            'Important dependencies are known or actively managed.',
        },
        {
          title: 'Acceptance criteria',
          description:
            'Expected behavior is sufficiently clear.',
        },
      ],
    },

    {
      title: 'Definition of Done',
      content:
        'The Definition of Done is a shared quality standard describing what must be true before work is considered complete. It may include implementation, testing, code review, security checks, documentation, deployment, monitoring, and other team-specific quality expectations.',
      highlights: [
        {
          title: 'Quality',
          description:
            'The work meets the team’s agreed quality standard.',
        },
        {
          title: 'Testing',
          description:
            'Required validation has been completed.',
        },
        {
          title: 'Operational readiness',
          description:
            'Relevant monitoring, documentation, and deployment requirements are satisfied where applicable.',
        },
      ],
    },

    {
      title: 'User Story Refinement',
      content:
        'Story refinement is the process of progressively clarifying upcoming stories. The team discusses the user need, value, scope, acceptance criteria, dependencies, technical considerations, edge cases, and expected effort. Refinement should improve shared understanding without turning every story into an oversized specification.',
      highlights: [
        {
          title: 'Clarification',
          description:
            'Resolve important ambiguity.',
        },
        {
          title: 'Decomposition',
          description:
            'Split work that is too large or complex.',
        },
        {
          title: 'Estimation',
          description:
            'Help the team understand relative complexity or effort.',
        },
      ],
    },

    {
      title: 'Story Estimation',
      content:
        'Teams may estimate stories using story points, ideal days, t-shirt sizes, or other approaches. Story points are generally intended to express relative complexity, effort, and uncertainty rather than exact hours.',
      highlights: [
        {
          title: 'Relative estimation',
          description:
            'Compare stories against each other rather than pretending to know exact future effort.',
        },
        {
          title: 'Complexity',
          description:
            'Consider technical and workflow complexity.',
        },
        {
          title: 'Uncertainty',
          description:
            'Include uncertainty where the team lacks information.',
        },
      ],
    },

    {
      title: 'Dependencies',
      content:
        'User stories may depend on other teams, services, vendors, data, architecture, security, or product decisions. Dependencies should be identified during refinement because they can affect sequencing, risk, and delivery confidence.',
      highlights: [
        {
          title: 'Internal dependency',
          description:
            'Another team or system within the organization is required.',
        },
        {
          title: 'External dependency',
          description:
            'A vendor, partner, customer, or external system is involved.',
        },
        {
          title: 'Sequencing',
          description:
            'The dependency may determine when the story can be completed.',
        },
      ],
    },

    {
      title: 'Non-Functional Requirements in User Stories',
      content:
        'Not every non-functional requirement belongs directly in the story sentence. Important requirements for security, performance, availability, accessibility, privacy, scalability, and observability should be captured through acceptance criteria, shared engineering standards, or supporting requirements where appropriate.',
      highlights: [
        {
          title: 'Performance',
          description:
            'Specify latency or throughput expectations when they matter.',
        },
        {
          title: 'Security',
          description:
            'Specify relevant authentication, authorization, or protection expectations.',
        },
        {
          title: 'Reliability',
          description:
            'Specify expected behavior during failures when important.',
        },
      ],
    },

    {
      title: 'User Stories for AI Products',
      content:
        'AI user stories should describe the user outcome while allowing room for model and system implementation decisions. They should be supported by measurable acceptance criteria for quality, safety, latency, cost, privacy, and fallback behavior where relevant.',
      highlights: [
        {
          title: 'Outcome',
          description:
            'Describe what the user is trying to accomplish with AI.',
        },
        {
          title: 'Quality',
          description:
            'Define acceptable AI behavior through measurable evaluation criteria.',
        },
        {
          title: 'Safety',
          description:
            'Define prohibited or unsafe behavior and expected safeguards.',
        },
        {
          title: 'Fallback',
          description:
            'Define what happens when the AI cannot reliably complete the task.',
        },
      ],
    },

    {
      title: 'AI RAG User Story Example',
      content:
        'Example: “As a support agent, I want to ask questions about approved company policies and receive grounded answers with supporting sources so that I can resolve customer issues faster.” Acceptance criteria can then define supported knowledge scope, source visibility, answer quality, access control, latency, and fallback behavior.',
      highlights: [
        {
          title: 'User',
          description:
            'Support agent.',
        },
        {
          title: 'Capability',
          description:
            'Ask questions against approved company knowledge.',
        },
        {
          title: 'Value',
          description:
            'Resolve customer issues faster.',
        },
        {
          title: 'AI-specific criteria',
          description:
            'Grounding, source attribution, authorization, quality, and fallback.',
        },
      ],
    },

    {
      title: 'AI Voice User Story Example',
      content:
        'Example: “As a sales team, I want an AI voice agent to qualify inbound leads so that human sales representatives can focus on high-intent prospects.” Acceptance criteria can define qualification questions, response behavior, latency, call completion, CRM updates, escalation rules, and measurable qualification accuracy.',
      highlights: [
        {
          title: 'Business outcome',
          description:
            'Improve sales-team focus and lead qualification efficiency.',
        },
        {
          title: 'Workflow',
          description:
            'Conduct a defined qualification conversation.',
        },
        {
          title: 'Integration',
          description:
            'Record or update lead information in the relevant system.',
        },
        {
          title: 'Escalation',
          description:
            'Transfer or hand off when defined conditions are met.',
        },
      ],
    },

    {
      title: 'Common User Story Anti-Patterns',
      content:
        'Common problems include writing stories from the system’s perspective, embedding implementation instructions, creating stories that are too large, omitting value, combining unrelated goals, using vague acceptance criteria, creating technical-layer stories with no user value, and treating the story as a substitute for all requirements analysis.',
      highlights: [
        {
          title: 'Implementation-first',
          description:
            'The story dictates technology rather than expressing the user need.',
        },
        {
          title: 'Too large',
          description:
            'The story cannot be reasonably understood, estimated, or delivered.',
        },
        {
          title: 'No value',
          description:
            'The story says what to build but not why it matters.',
        },
        {
          title: 'Untestable',
          description:
            'Acceptance expectations are too vague to validate.',
        },
      ],
    },

    {
      title: 'User Stories for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, user stories are a practical translation mechanism between business outcomes and engineering execution. A strong technical leader can challenge unclear stories, identify missing non-functional requirements, expose dependencies, and ensure stories are small enough to support predictable delivery without losing the larger product outcome.',
      highlights: [
        {
          title: 'Translation',
          description:
            'Convert business intent into a form engineering teams can discuss and implement.',
        },
        {
          title: 'Clarity',
          description:
            'Identify ambiguity before it creates rework.',
        },
        {
          title: 'Dependencies',
          description:
            'Surface technical and organizational dependencies early.',
        },
        {
          title: 'Outcome focus',
          description:
            'Ensure implementation remains connected to user and business value.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is a User Story? What makes a good User Story? Explain INVEST. What is the difference between an Epic and a User Story? How do you split a large story? What is the difference between acceptance criteria and Definition of Done? How do you handle technical requirements in User Stories? How do you write User Stories for AI products? How do you deal with dependencies between stories?',
      highlights: [
        {
          title: 'INVEST',
          description:
            'Explain the principles and how they improve story quality.',
        },
        {
          title: 'Slicing',
          description:
            'Show how you split large work into vertical, value-delivering increments.',
        },
        {
          title: 'Acceptance criteria',
          description:
            'Explain how expected behavior becomes testable.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I use User Stories as a lightweight way to express user needs and expected value. I normally structure them around who the user is, what they want to accomplish, and why it matters. During refinement, I work with the team to clarify acceptance criteria, edge cases, dependencies, non-functional requirements, and technical constraints. For larger initiatives, I break Epics into smaller vertical stories that each deliver meaningful value. I also make sure the story does not become an implementation specification. The goal is to create enough shared understanding for engineering and QA to make good decisions while keeping the focus on the user outcome. For AI products, I add measurable criteria for quality, safety, latency, cost, privacy, and fallback behavior where relevant.”',
      highlights: [
        {
          title: 'User value',
          description:
            'Start from the user outcome.',
        },
        {
          title: 'Refinement',
          description:
            'Use collaboration to clarify details and risks.',
        },
        {
          title: 'Vertical slicing',
          description:
            'Break large work into meaningful increments.',
        },
        {
          title: 'AI awareness',
          description:
            'Include AI-specific quality, safety, and operational expectations.',
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

export default userStoriesKnowledge
