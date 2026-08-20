import type { KnowledgeDefinition } from './knowledge'

export const acceptanceCriteriaKnowledge: KnowledgeDefinition = {
  technologyId: 'acceptance-criteria',
  slug: 'acceptance-criteria',
  title: 'Acceptance Criteria',
  summary:
    'Acceptance Criteria define the observable conditions that a product capability, user story, or requirement must satisfy before it can be accepted.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Acceptance Criteria?',
      content:
        'Acceptance Criteria are specific, observable conditions that define when a requirement or user story is considered acceptable. They create a shared agreement between product, engineering, QA, and stakeholders about the expected behavior.',
      highlights: [
        {
          title: 'Expected behavior',
          description:
            'Defines what the system should do under specific conditions.',
        },
        {
          title: 'Validation',
          description:
            'Provides a basis for checking whether the requirement has been satisfied.',
        },
        {
          title: 'Agreement',
          description:
            'Creates shared understanding between the people requesting, building, testing, and approving the work.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine ordering a pizza. “Make me a good pizza” is vague. Acceptance criteria would be things like: the pizza should have the selected toppings, the requested size, the correct quantity, and should be delivered to the specified address. These conditions allow both the customer and restaurant to agree on what “correct” means.',
      highlights: [
        {
          title: 'Requirement',
          description:
            'Make the requested pizza.',
        },
        {
          title: 'Acceptance criteria',
          description:
            'Define size, toppings, quantity, and delivery expectations.',
        },
        {
          title: 'Acceptance',
          description:
            'The order is accepted when the agreed conditions are satisfied.',
        },
      ],
    },

    {
      title: 'Why Acceptance Criteria Matter',
      content:
        'Without clear acceptance criteria, different people can interpret the same requirement differently. This creates rework, disputes, inconsistent testing, and surprises during review. Good criteria make expectations visible before implementation is completed.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'Reduces ambiguity about expected behavior.',
        },
        {
          title: 'Testability',
          description:
            'Gives QA and engineering concrete conditions to validate.',
        },
        {
          title: 'Reduced rework',
          description:
            'Surfaces misunderstandings earlier.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria vs User Story',
      content:
        'A User Story describes who needs something, what they want, and why it matters. Acceptance Criteria describe the conditions that must be satisfied for that story to be accepted. The story communicates intent; the criteria make the expected behavior concrete.',
      highlights: [
        {
          title: 'User Story',
          description:
            'Communicates user need and value.',
        },
        {
          title: 'Acceptance Criteria',
          description:
            'Defines the observable conditions for acceptance.',
        },
        {
          title: 'Relationship',
          description:
            'Acceptance criteria provide detailed validation expectations for the story.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria vs Definition of Done',
      content:
        'Acceptance Criteria are specific to a particular story or requirement. The Definition of Done is a broader team-level quality standard applied across work items. A story may satisfy its acceptance criteria but still not be Done if required code review, testing, documentation, security, deployment, or operational checks are incomplete.',
      highlights: [
        {
          title: 'Acceptance Criteria',
          description:
            'Specific to the behavior and scope of a particular work item.',
        },
        {
          title: 'Definition of Done',
          description:
            'A shared quality standard applied across relevant work.',
        },
        {
          title: 'Together',
          description:
            'Both help determine whether work is genuinely complete.',
        },
      ],
    },

    {
      title: 'Good Acceptance Criteria Characteristics',
      content:
        'Good acceptance criteria should be clear, specific, observable, testable, relevant, and appropriately scoped. They should describe expected outcomes without unnecessarily prescribing internal implementation details.',
      highlights: [
        {
          title: 'Clear',
          description:
            'Different team members should reach the same interpretation.',
        },
        {
          title: 'Observable',
          description:
            'The expected behavior can be seen or measured.',
        },
        {
          title: 'Testable',
          description:
            'A reviewer or test can determine whether the condition is satisfied.',
        },
        {
          title: 'Scoped',
          description:
            'The criteria remain connected to the intended story or requirement.',
        },
      ],
    },

    {
      title: 'Functional Acceptance Criteria',
      content:
        'Functional acceptance criteria describe what the system should do. They can cover successful workflows, validation rules, permissions, calculations, notifications, integrations, and state changes.',
      highlights: [
        {
          title: 'Workflow',
          description:
            'Defines expected steps and outcomes in a user journey.',
        },
        {
          title: 'Validation',
          description:
            'Defines how invalid input should be handled.',
        },
        {
          title: 'Business rule',
          description:
            'Defines important rules governing behavior.',
        },
      ],
    },

    {
      title: 'Non-Functional Acceptance Criteria',
      content:
        'Important non-functional expectations can also become acceptance criteria. These may cover performance, availability, security, accessibility, reliability, scalability, privacy, observability, or compliance when those qualities are relevant to the work.',
      highlights: [
        {
          title: 'Performance',
          description:
            'Example: response time remains within the agreed target under the defined workload.',
        },
        {
          title: 'Security',
          description:
            'Example: users cannot access resources outside their authorization.',
        },
        {
          title: 'Availability',
          description:
            'Example: the capability behaves according to the agreed availability expectation.',
        },
      ],
    },

    {
      title: 'Given-When-Then',
      content:
        'Given-When-Then is a common way to express behavioral acceptance criteria. Given describes the starting context, When describes the action or event, and Then describes the expected result.',
      highlights: [
        {
          title: 'Given',
          description:
            'Defines the initial state or context.',
        },
        {
          title: 'When',
          description:
            'Defines the user action, system action, or event.',
        },
        {
          title: 'Then',
          description:
            'Defines the expected observable result.',
        },
      ],
    },

    {
      title: 'Simple Given-When-Then Example',
      content:
        'Given a registered user is on the login page, when the user enters valid credentials and submits the form, then the system authenticates the user and displays the authenticated application.',
      highlights: [
        {
          title: 'Given',
          description:
            'Registered user is on the login page.',
        },
        {
          title: 'When',
          description:
            'User submits valid credentials.',
        },
        {
          title: 'Then',
          description:
            'User is authenticated and sees the application.',
        },
      ],
    },

    {
      title: 'Happy Path',
      content:
        'The happy path describes the expected successful scenario. It is usually the first scenario to define, but it should not be the only one. Important failure, validation, permission, and boundary conditions should also be considered.',
      highlights: [
        {
          title: 'Success',
          description:
            'Describes normal successful behavior.',
        },
        {
          title: 'Baseline',
          description:
            'Provides the primary scenario against which additional cases can be compared.',
        },
        {
          title: 'Not enough alone',
          description:
            'Real systems also need criteria for important exceptions and failures.',
        },
      ],
    },

    {
      title: 'Negative Scenarios',
      content:
        'Negative acceptance criteria define what should happen when invalid input, unauthorized actions, missing information, failed dependencies, or other error conditions occur. These scenarios are important because production systems rarely operate only on the happy path.',
      highlights: [
        {
          title: 'Invalid input',
          description:
            'Defines expected behavior when user input is not valid.',
        },
        {
          title: 'Unauthorized access',
          description:
            'Defines what happens when a user lacks permission.',
        },
        {
          title: 'Dependency failure',
          description:
            'Defines behavior when an external or internal dependency fails.',
        },
      ],
    },

    {
      title: 'Boundary Conditions',
      content:
        'Boundary conditions cover values at or near system limits. Examples include minimum and maximum amounts, maximum file size, character limits, rate limits, pagination boundaries, time windows, and resource quotas.',
      highlights: [
        {
          title: 'Minimum',
          description:
            'Verify behavior at the lower allowed boundary.',
        },
        {
          title: 'Maximum',
          description:
            'Verify behavior at the upper allowed boundary.',
        },
        {
          title: 'Outside boundary',
          description:
            'Define behavior when limits are exceeded.',
        },
      ],
    },

    {
      title: 'Example: Password Reset',
      content:
        'User Story: “As a customer, I want to reset my password so that I can regain access to my account.” Acceptance criteria may include: a registered email receives reset instructions; an expired token cannot be used; a successful reset invalidates the previous password; invalid requests do not reveal whether an account exists; and the user receives an appropriate confirmation after successful completion.',
      highlights: [
        {
          title: 'Happy path',
          description:
            'Registered user successfully resets the password.',
        },
        {
          title: 'Security',
          description:
            'The workflow does not unnecessarily expose account information.',
        },
        {
          title: 'Expiration',
          description:
            'Expired reset tokens are rejected.',
        },
        {
          title: 'Completion',
          description:
            'Successful reset produces the expected account state.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and Business Rules',
      content:
        'Business rules should be reflected in acceptance criteria when they affect observable product behavior. This ensures that rules are not left only in stakeholder conversations or hidden assumptions.',
      highlights: [
        {
          title: 'Rule',
          description:
            'Defines a business condition or decision.',
        },
        {
          title: 'Behavior',
          description:
            'Acceptance criteria explain how the product applies the rule.',
        },
        {
          title: 'Validation',
          description:
            'Tests can verify that the rule is correctly implemented.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and API Requirements',
      content:
        'For API work, acceptance criteria can define request validation, response structure, authentication, authorization, status codes, error behavior, idempotency, rate limits, and compatibility expectations. They should describe the externally observable contract rather than prescribing unnecessary internal implementation.',
      highlights: [
        {
          title: 'Request',
          description:
            'Defines valid and invalid inputs.',
        },
        {
          title: 'Response',
          description:
            'Defines expected output and error behavior.',
        },
        {
          title: 'Authorization',
          description:
            'Defines which actors may perform the operation.',
        },
        {
          title: 'Compatibility',
          description:
            'Defines expectations when the API evolves.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and UI',
      content:
        'UI acceptance criteria should describe important user-visible behavior rather than overly prescribing pixel-level implementation unless visual specifications are genuinely part of the requirement. They may cover navigation, validation, states, permissions, responsive behavior, accessibility, and feedback.',
      highlights: [
        {
          title: 'State',
          description:
            'Defines loading, success, empty, and error states where relevant.',
        },
        {
          title: 'Interaction',
          description:
            'Defines what happens when the user performs an action.',
        },
        {
          title: 'Accessibility',
          description:
            'Defines important accessibility expectations when required.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and Testing',
      content:
        'Acceptance criteria provide a bridge between product intent and testing. QA engineers and developers can use them to design test cases, while product stakeholders can use them to determine whether the delivered capability satisfies the intended behavior.',
      highlights: [
        {
          title: 'Test case',
          description:
            'A concrete validation of a defined condition.',
        },
        {
          title: 'Expected result',
          description:
            'The observable behavior the test should verify.',
        },
        {
          title: 'Traceability',
          description:
            'Tests can be connected back to requirements and acceptance criteria.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and Automation',
      content:
        'Stable acceptance criteria can often become automated tests. Automation is especially valuable for repeatable behaviors such as API contracts, validation rules, critical workflows, regression scenarios, and important business rules.',
      highlights: [
        {
          title: 'Repeatability',
          description:
            'Automated tests can execute consistently across releases.',
        },
        {
          title: 'Regression protection',
          description:
            'Tests can detect when previously accepted behavior breaks.',
        },
        {
          title: 'Fast feedback',
          description:
            'Automation can provide feedback earlier than manual verification alone.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and Definition of Ready',
      content:
        'Acceptance criteria are often refined before a story becomes ready for implementation. The team should understand the intended behavior sufficiently to estimate, design, build, and test the work. The exact Definition of Ready is team-specific.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'Important expectations are understood before implementation.',
        },
        {
          title: 'Questions',
          description:
            'Critical ambiguity is resolved or explicitly accepted as uncertainty.',
        },
        {
          title: 'Dependencies',
          description:
            'Important dependencies are visible.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria and Definition of Done',
      content:
        'Acceptance Criteria answer “Did we build the requested behavior correctly?” The Definition of Done answers “Has this work met the team’s complete quality and delivery standard?” Both perspectives are needed for reliable delivery.',
      highlights: [
        {
          title: 'Correct behavior',
          description:
            'Acceptance criteria validate the story-specific outcome.',
        },
        {
          title: 'Complete quality',
          description:
            'Definition of Done covers broader engineering and delivery standards.',
        },
        {
          title: 'Production readiness',
          description:
            'Done may include testing, review, security, deployment, documentation, and operational readiness.',
        },
      ],
    },

    {
      title: 'AI Acceptance Criteria',
      content:
        'AI systems require acceptance criteria that reflect probabilistic behavior. Instead of only asking whether a feature exists, criteria should define measurable expectations for accuracy, relevance, groundedness, safety, latency, cost, privacy, and fallback behavior where applicable.',
      highlights: [
        {
          title: 'Quality threshold',
          description:
            'Define an agreed method and threshold for evaluating AI output quality.',
        },
        {
          title: 'Safety',
          description:
            'Define prohibited behaviors and expected safeguards.',
        },
        {
          title: 'Latency',
          description:
            'Define acceptable response-time expectations.',
        },
        {
          title: 'Fallback',
          description:
            'Define what happens when the AI cannot confidently complete the task.',
        },
      ],
    },

    {
      title: 'RAG Acceptance Criteria',
      content:
        'For a RAG system, acceptance criteria may cover knowledge scope, retrieval relevance, grounded responses, source attribution, access control, data freshness, latency, and behavior when relevant information cannot be found.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Relevant source information should be retrieved for supported questions.',
        },
        {
          title: 'Grounding',
          description:
            'Responses should be supported by retrieved information according to the product requirement.',
        },
        {
          title: 'Access control',
          description:
            'Retrieved content must respect user authorization.',
        },
        {
          title: 'Unknown answer',
          description:
            'The system should have defined behavior when sufficient information is unavailable.',
        },
      ],
    },

    {
      title: 'AI Voice Acceptance Criteria',
      content:
        'For an AI voice agent, acceptance criteria can cover speech recognition behavior, response latency, conversation flow, business rules, CRM updates, escalation, call termination, recording policies, and measurable call outcomes.',
      highlights: [
        {
          title: 'Conversation',
          description:
            'The agent follows the defined conversation workflow.',
        },
        {
          title: 'Latency',
          description:
            'Response timing remains within the agreed target.',
        },
        {
          title: 'Integration',
          description:
            'Relevant business information is correctly recorded or updated.',
        },
        {
          title: 'Escalation',
          description:
            'The agent transfers or escalates when defined conditions are met.',
        },
      ],
    },

    {
      title: 'Writing Better Acceptance Criteria',
      content:
        'Start with the user outcome, identify the normal workflow, then identify important validation, permissions, errors, boundaries, integrations, and quality requirements. Write criteria in observable language and avoid unnecessary implementation details.',
      highlights: [
        {
          title: 'Start with outcome',
          description:
            'Understand what successful behavior means for the user.',
        },
        {
          title: 'Cover important exceptions',
          description:
            'Include meaningful failure and boundary scenarios.',
        },
        {
          title: 'Make it measurable',
          description:
            'Use objective conditions when quality matters.',
        },
        {
          title: 'Avoid implementation lock-in',
          description:
            'Describe required behavior without prescribing internal design unnecessarily.',
        },
      ],
    },

    {
      title: 'Common Acceptance Criteria Anti-Patterns',
      content:
        'Common problems include vague criteria, criteria that describe implementation instead of behavior, missing negative scenarios, combining too many unrelated conditions, creating criteria that cannot be tested, using hidden assumptions, and writing criteria so detailed that they unnecessarily constrain engineering solutions.',
      highlights: [
        {
          title: 'Vague',
          description:
            '“The page should load quickly.”',
        },
        {
          title: 'Implementation-specific',
          description:
            'Defines internal technology instead of externally required behavior without a valid reason.',
        },
        {
          title: 'Incomplete',
          description:
            'Only the happy path is defined while important failures are ignored.',
        },
        {
          title: 'Untestable',
          description:
            'No objective way exists to determine whether the criterion is satisfied.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, acceptance criteria are a powerful alignment mechanism. They help translate business expectations into verifiable outcomes, expose hidden requirements, reduce ambiguity, and give engineering and QA a common definition of expected behavior.',
      highlights: [
        {
          title: 'Alignment',
          description:
            'Creates shared expectations across product and engineering.',
        },
        {
          title: 'Risk reduction',
          description:
            'Surfaces edge cases and quality expectations before delivery.',
        },
        {
          title: 'Verification',
          description:
            'Creates objective evidence for whether the requested outcome was achieved.',
        },
        {
          title: 'Leadership',
          description:
            'Helps technical leaders communicate requirements without micromanaging implementation.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What are Acceptance Criteria? Why are they important? What is the difference between Acceptance Criteria and Definition of Done? How do you write good acceptance criteria? Explain Given-When-Then. How do you handle edge cases? How do you define acceptance criteria for an API? How would you write acceptance criteria for an AI or RAG system? How do acceptance criteria help QA and engineering?',
      highlights: [
        {
          title: 'Definition',
          description:
            'Explain acceptance criteria as observable conditions for accepting a work item.',
        },
        {
          title: 'Testability',
          description:
            'Show how criteria become validation scenarios.',
        },
        {
          title: 'AI',
          description:
            'Explain how probabilistic AI requires measurable quality, safety, and operational expectations.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I use Acceptance Criteria to create a shared, testable definition of the behavior a story or requirement must satisfy. I start with the intended user outcome, then define the happy path, important validation and error scenarios, permissions, edge cases, and relevant non-functional expectations. I prefer observable and measurable language, often using Given-When-Then when it improves clarity. I keep acceptance criteria focused on behavior rather than unnecessarily prescribing implementation. I also distinguish them from the Definition of Done: acceptance criteria are story-specific, while the Definition of Done is the broader team quality standard. For AI systems, I additionally define measurable expectations for quality, safety, latency, cost, privacy, and fallback behavior.”',
      highlights: [
        {
          title: 'Outcome',
          description:
            'Begin with the intended user or business result.',
        },
        {
          title: 'Behavior',
          description:
            'Define observable success and important exceptions.',
        },
        {
          title: 'Testability',
          description:
            'Ensure the criteria can be objectively verified.',
        },
        {
          title: 'AI awareness',
          description:
            'Add AI-specific quality and operational expectations when relevant.',
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

export default acceptanceCriteriaKnowledge
