import type { KnowledgeDefinition } from './knowledge'

export const testingKnowledge: KnowledgeDefinition = {
  technologyId: 'testing',
  slug: 'testing',
  title: 'Software Testing',
  summary:
    'Software Testing is the systematic practice of validating that software behaves as expected, satisfies requirements, handles failures safely, and maintains acceptable quality as it evolves.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Software Testing?',
      content:
        'Software Testing is the process of evaluating software to discover defects, verify expected behavior, validate requirements, and build confidence that a system works correctly under expected and important unexpected conditions. Testing is not only about finding bugs after development; it is part of building reliable software throughout the delivery lifecycle.',
      highlights: [
        {
          title: 'Verification',
          description:
            'Checks whether the system behaves according to defined requirements and expectations.',
        },
        {
          title: 'Validation',
          description:
            'Checks whether the product solves the intended user or business problem.',
        },
        {
          title: 'Risk reduction',
          description:
            'Reduces uncertainty before software reaches users and production.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine manufacturing a car. You would not wait until the customer drives it away to discover whether the brakes work. You would inspect individual parts, test systems together, test the complete vehicle, and perform safety checks. Software Testing works similarly: different levels of testing provide confidence at different stages.',
      highlights: [
        {
          title: 'Part testing',
          description:
            'Similar to checking individual components.',
        },
        {
          title: 'System testing',
          description:
            'Similar to checking the complete vehicle.',
        },
        {
          title: 'Safety validation',
          description:
            'Similar to verifying that the product behaves safely under important conditions.',
        },
      ],
    },

    {
      title: 'Why Testing Matters',
      content:
        'Software defects can cause customer frustration, financial loss, security incidents, operational failures, compliance problems, and damage to trust. Effective testing reduces these risks while providing feedback that helps teams build and change software with greater confidence.',
      highlights: [
        {
          title: 'Customer quality',
          description:
            'Protects users from incorrect or unreliable behavior.',
        },
        {
          title: 'Business protection',
          description:
            'Reduces financial and operational impact from defects.',
        },
        {
          title: 'Engineering confidence',
          description:
            'Makes future changes safer to implement.',
        },
      ],
    },

    {
      title: 'Testing vs Debugging',
      content:
        'Testing is about evaluating software to reveal whether behavior meets expectations and to expose defects. Debugging is the investigation and correction of the underlying cause of a discovered problem. Testing can reveal a failure; debugging determines why it happened and how to fix it.',
      highlights: [
        {
          title: 'Testing',
          description:
            'Finds evidence that behavior is incorrect or unexpected.',
        },
        {
          title: 'Debugging',
          description:
            'Finds and fixes the cause of the failure.',
        },
        {
          title: 'Relationship',
          description:
            'Testing and debugging work together but are different activities.',
        },
      ],
    },

    {
      title: 'Verification vs Validation',
      content:
        'Verification asks whether we built the product correctly according to specified requirements. Validation asks whether we built the right product for the user or business need. Strong engineering organizations consider both.',
      highlights: [
        {
          title: 'Verification',
          description:
            'Are we building the solution correctly?',
        },
        {
          title: 'Validation',
          description:
            'Are we solving the right problem?',
        },
        {
          title: 'Leadership relevance',
          description:
            'Technical leaders must ensure delivery quality and product usefulness are both considered.',
        },
      ],
    },

    {
      title: 'Functional Testing',
      content:
        'Functional Testing verifies what the system does. It focuses on business behavior, workflows, calculations, validation rules, integrations, permissions, and expected outputs.',
      highlights: [
        {
          title: 'Behavior',
          description:
            'Checks whether functionality behaves as specified.',
        },
        {
          title: 'Workflow',
          description:
            'Validates important user journeys.',
        },
        {
          title: 'Business rules',
          description:
            'Checks calculations, decisions, and constraints.',
        },
      ],
    },

    {
      title: 'Non-Functional Testing',
      content:
        'Non-functional testing evaluates qualities such as performance, scalability, reliability, security, usability, accessibility, compatibility, and resilience. A feature can be functionally correct while still being unsuitable for production because of poor performance or reliability.',
      highlights: [
        {
          title: 'Performance',
          description:
            'Measures response time, throughput, and resource behavior.',
        },
        {
          title: 'Security',
          description:
            'Evaluates protection against relevant threats and misuse.',
        },
        {
          title: 'Reliability',
          description:
            'Evaluates behavior across failures and extended operation.',
        },
      ],
    },

    {
      title: 'Unit Testing',
      content:
        'Unit Testing verifies small pieces of software in isolation, such as functions, methods, or components. Unit tests are usually fast and provide precise feedback about local behavior.',
      highlights: [
        {
          title: 'Small scope',
          description:
            'Tests a focused unit of behavior.',
        },
        {
          title: 'Fast feedback',
          description:
            'Can run frequently during development.',
        },
        {
          title: 'Isolation',
          description:
            'Dependencies are often mocked or replaced to focus on the unit itself.',
        },
      ],
    },

    {
      title: 'Integration Testing',
      content:
        'Integration Testing verifies that multiple components work correctly together. Examples include an application communicating with a database, an API calling another service, or a message producer interacting with a queue.',
      highlights: [
        {
          title: 'Interaction',
          description:
            'Tests communication between components.',
        },
        {
          title: 'Real dependencies',
          description:
            'May use real databases, queues, services, or realistic test environments.',
        },
        {
          title: 'Boundary confidence',
          description:
            'Catches problems that isolated unit tests may miss.',
        },
      ],
    },

    {
      title: 'End-to-End Testing',
      content:
        'End-to-End Testing validates a complete user or business workflow across the relevant system components. It provides strong confidence in real journeys but is usually slower and more fragile than lower-level tests.',
      highlights: [
        {
          title: 'Complete journey',
          description:
            'Validates the system from an external user or business perspective.',
        },
        {
          title: 'High confidence',
          description:
            'Can expose failures across multiple layers.',
        },
        {
          title: 'Higher cost',
          description:
            'Usually requires more setup, execution time, and maintenance.',
        },
      ],
    },

    {
      title: 'The Testing Pyramid',
      content:
        'The Testing Pyramid is a common model that encourages many fast unit tests, fewer integration tests, and a smaller number of expensive end-to-end tests. The exact balance depends on the product, architecture, and risk profile.',
      highlights: [
        {
          title: 'Unit',
          description:
            'Many fast tests for focused behavior.',
        },
        {
          title: 'Integration',
          description:
            'A smaller layer validating important interactions.',
        },
        {
          title: 'End-to-end',
          description:
            'A smaller set of critical user journeys.',
        },
      ],
    },

    {
      title: 'Testing Trophy Perspective',
      content:
        'The Testing Trophy is another model that emphasizes integration testing as a valuable middle layer between unit and end-to-end testing. It highlights that the best testing strategy depends on how the application behaves and where confidence is most valuable.',
      highlights: [
        {
          title: 'Integration emphasis',
          description:
            'Tests interactions that closely represent real application behavior.',
        },
        {
          title: 'Balanced strategy',
          description:
            'Different levels provide different types of confidence.',
        },
        {
          title: 'Context matters',
          description:
            'No single testing model is universally correct.',
        },
      ],
    },

    {
      title: 'Black-Box Testing',
      content:
        'Black-box testing evaluates behavior without requiring knowledge of the internal implementation. The tester focuses on inputs, outputs, workflows, and externally observable behavior.',
      highlights: [
        {
          title: 'External behavior',
          description:
            'Focuses on what the system does from the outside.',
        },
        {
          title: 'Implementation independent',
          description:
            'Tests can remain valid even when internal code changes.',
        },
        {
          title: 'User perspective',
          description:
            'Useful for validating externally visible behavior.',
        },
      ],
    },

    {
      title: 'White-Box Testing',
      content:
        'White-box testing uses knowledge of internal implementation to design tests. It can help target branches, conditions, paths, error handling, and internal logic that may be difficult to exercise through external behavior alone.',
      highlights: [
        {
          title: 'Internal knowledge',
          description:
            'Test design considers implementation details.',
        },
        {
          title: 'Branch coverage',
          description:
            'Can target important conditional paths.',
        },
        {
          title: 'Complementary',
          description:
            'Works alongside external behavioral testing.',
        },
      ],
    },

    {
      title: 'Regression Testing',
      content:
        'Regression Testing checks that existing functionality continues to work after changes. Regression suites become especially valuable as products grow because every new change can potentially affect existing behavior.',
      highlights: [
        {
          title: 'Existing behavior',
          description:
            'Protects functionality that previously worked.',
        },
        {
          title: 'Change protection',
          description:
            'Reduces the chance that new changes break old behavior.',
        },
        {
          title: 'Automation value',
          description:
            'Stable regression scenarios are strong candidates for automation.',
        },
      ],
    },

    {
      title: 'Smoke Testing',
      content:
        'Smoke Testing is a lightweight set of checks used to determine whether a build or deployment is stable enough for deeper testing. It usually focuses on critical functionality rather than comprehensive coverage.',
      highlights: [
        {
          title: 'Fast gate',
          description:
            'Quickly identifies obviously broken builds or deployments.',
        },
        {
          title: 'Critical paths',
          description:
            'Checks the most important functionality.',
        },
        {
          title: 'Early signal',
          description:
            'Prevents teams from spending time testing a fundamentally broken build.',
        },
      ],
    },

    {
      title: 'Sanity Testing',
      content:
        'Sanity Testing is a focused validation performed after a specific change or fix to confirm that the affected functionality behaves reasonably. The term is used somewhat differently across organizations, so teams should define the practice clearly.',
      highlights: [
        {
          title: 'Focused',
          description:
            'Targets the changed or affected area.',
        },
        {
          title: 'Quick confidence',
          description:
            'Provides an early signal before broader testing.',
        },
      ],
    },

    {
      title: 'Exploratory Testing',
      content:
        'Exploratory Testing combines learning, test design, and execution rather than following only predefined scripts. Testers actively investigate the product to discover unexpected behavior, edge cases, and usability problems.',
      highlights: [
        {
          title: 'Learning',
          description:
            'Testing and understanding the system happen together.',
        },
        {
          title: 'Discovery',
          description:
            'Useful for finding unexpected behavior.',
        },
        {
          title: 'Human judgment',
          description:
            'Benefits from tester experience and curiosity.',
        },
      ],
    },

    {
      title: 'Positive and Negative Testing',
      content:
        'Positive testing validates expected valid inputs and workflows. Negative testing validates invalid inputs, unauthorized actions, failures, boundary conditions, and unexpected situations. Both are necessary for robust systems.',
      highlights: [
        {
          title: 'Positive',
          description:
            'Checks valid scenarios.',
        },
        {
          title: 'Negative',
          description:
            'Checks invalid and failure scenarios.',
        },
        {
          title: 'Coverage',
          description:
            'Together they provide broader behavioral confidence.',
        },
      ],
    },

    {
      title: 'Boundary Value Testing',
      content:
        'Boundary Value Analysis focuses on values near system limits because defects frequently occur at boundaries. Examples include minimum and maximum values, character limits, pagination limits, file sizes, dates, and rate limits.',
      highlights: [
        {
          title: 'Minimum',
          description:
            'Test the lowest valid value and values just outside it.',
        },
        {
          title: 'Maximum',
          description:
            'Test the highest valid value and values just outside it.',
        },
        {
          title: 'Why',
          description:
            'Boundary conditions often expose incorrect assumptions.',
        },
      ],
    },

    {
      title: 'Equivalence Partitioning',
      content:
        'Equivalence Partitioning divides input values into groups expected to behave similarly. Instead of testing every possible value, representative values from each meaningful group can provide efficient coverage.',
      highlights: [
        {
          title: 'Valid partition',
          description:
            'A group of inputs expected to be accepted.',
        },
        {
          title: 'Invalid partition',
          description:
            'A group expected to be rejected or handled differently.',
        },
        {
          title: 'Efficiency',
          description:
            'Reduces unnecessary duplicate test cases.',
        },
      ],
    },

    {
      title: 'Test Case',
      content:
        'A Test Case describes a specific scenario used to verify behavior. It commonly includes preconditions, inputs, actions, expected results, and sometimes cleanup or test data requirements.',
      highlights: [
        {
          title: 'Precondition',
          description:
            'The state required before the test begins.',
        },
        {
          title: 'Action',
          description:
            'What the tester or system does.',
        },
        {
          title: 'Expected result',
          description:
            'What should happen if the system behaves correctly.',
        },
      ],
    },

    {
      title: 'Test Suite',
      content:
        'A Test Suite is a collection of related tests organized around a feature, system, release, risk area, or testing objective. Suites make it easier to run and manage groups of tests.',
      highlights: [
        {
          title: 'Grouping',
          description:
            'Organizes related test cases.',
        },
        {
          title: 'Execution',
          description:
            'Allows targeted or broad test runs.',
        },
        {
          title: 'Management',
          description:
            'Supports regression and release processes.',
        },
      ],
    },

    {
      title: 'Test Data',
      content:
        'Good testing depends on representative and controlled test data. Test data should cover normal cases, edge cases, invalid values, realistic volumes, permissions, and privacy constraints without exposing real sensitive information unnecessarily.',
      highlights: [
        {
          title: 'Representative',
          description:
            'Reflects realistic usage patterns.',
        },
        {
          title: 'Edge cases',
          description:
            'Includes unusual but important scenarios.',
        },
        {
          title: 'Privacy',
          description:
            'Avoids unnecessary exposure of real sensitive production data.',
        },
      ],
    },

    {
      title: 'Mocks, Stubs, and Fakes',
      content:
        'Mocks, stubs, and fakes are test doubles used to isolate components or control dependencies. A stub usually provides predetermined responses, a mock can verify interactions, and a fake provides a lightweight working implementation. Terminology varies across teams.',
      highlights: [
        {
          title: 'Stub',
          description:
            'Provides controlled responses to calls.',
        },
        {
          title: 'Mock',
          description:
            'Can verify expected interactions with a dependency.',
        },
        {
          title: 'Fake',
          description:
            'Provides a simplified functional implementation.',
        },
      ],
    },

    {
      title: 'Test Environment',
      content:
        'A test environment provides the infrastructure and configuration needed to execute tests. Differences between test and production environments can create false confidence, so important production characteristics should be represented where practical.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Environment variables, services, and settings affect behavior.',
        },
        {
          title: 'Dependencies',
          description:
            'External systems should be represented appropriately.',
        },
        {
          title: 'Parity',
          description:
            'Higher-risk production characteristics should be reproduced where practical.',
        },
      ],
    },

    {
      title: 'Performance Testing',
      content:
        'Performance Testing evaluates how a system behaves under defined workloads. It can include response time, throughput, concurrency, resource utilization, and scalability characteristics.',
      highlights: [
        {
          title: 'Load testing',
          description:
            'Evaluates behavior under expected workload.',
        },
        {
          title: 'Stress testing',
          description:
            'Pushes the system beyond expected load to understand failure behavior and limits.',
        },
        {
          title: 'Capacity',
          description:
            'Helps understand how much workload the system can support.',
        },
      ],
    },

    {
      title: 'Load vs Stress vs Soak Testing',
      content:
        'Load testing evaluates expected workload, stress testing explores behavior beyond normal capacity, and soak testing evaluates behavior over an extended period. The exact definitions may vary slightly between organizations.',
      highlights: [
        {
          title: 'Load',
          description:
            'Expected workload.',
        },
        {
          title: 'Stress',
          description:
            'Beyond-normal workload and failure limits.',
        },
        {
          title: 'Soak',
          description:
            'Long-duration workload to reveal issues such as leaks or degradation.',
        },
      ],
    },

    {
      title: 'Security Testing',
      content:
        'Security Testing evaluates whether the application protects data and operations against relevant threats. Depending on risk, this may include authentication, authorization, input validation, dependency scanning, secret detection, vulnerability testing, penetration testing, and abuse-case validation.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verify identity-related controls.',
        },
        {
          title: 'Authorization',
          description:
            'Verify access boundaries.',
        },
        {
          title: 'Abuse cases',
          description:
            'Consider how functionality behaves when intentionally misused.',
        },
      ],
    },

    {
      title: 'Accessibility Testing',
      content:
        'Accessibility Testing evaluates whether people with different abilities can effectively use the product. It can include keyboard navigation, screen-reader behavior, semantic structure, contrast, focus management, labels, and other accessibility requirements.',
      highlights: [
        {
          title: 'Keyboard',
          description:
            'Important functionality should be accessible without relying only on a mouse.',
        },
        {
          title: 'Semantics',
          description:
            'UI structure should communicate meaning to assistive technologies.',
        },
        {
          title: 'Inclusive design',
          description:
            'Accessibility should be considered throughout product development.',
        },
      ],
    },

    {
      title: 'Compatibility Testing',
      content:
        'Compatibility Testing checks behavior across supported browsers, devices, operating systems, runtime versions, APIs, databases, or other environments. The required matrix should reflect actual supported users and business needs.',
      highlights: [
        {
          title: 'Browser',
          description:
            'Validate supported browser environments where relevant.',
        },
        {
          title: 'Device',
          description:
            'Validate supported device types and screen conditions.',
        },
        {
          title: 'Runtime',
          description:
            'Validate supported versions and infrastructure combinations.',
        },
      ],
    },

    {
      title: 'Contract Testing',
      content:
        'Contract Testing validates that services or components continue to meet an agreed interface contract. It is particularly useful in distributed systems where independently deployed services depend on each other’s APIs or message formats.',
      highlights: [
        {
          title: 'Provider',
          description:
            'The service that provides the interface.',
        },
        {
          title: 'Consumer',
          description:
            'The service that depends on the interface.',
        },
        {
          title: 'Contract',
          description:
            'Defines expected request, response, or message behavior.',
        },
      ],
    },

    {
      title: 'Mutation Testing',
      content:
        'Mutation Testing intentionally introduces small changes into code to evaluate whether the test suite detects them. It can reveal tests that execute code but do not meaningfully verify behavior.',
      highlights: [
        {
          title: 'Mutation',
          description:
            'A controlled change is introduced into the implementation.',
        },
        {
          title: 'Test strength',
          description:
            'Checks whether tests fail when behavior is meaningfully altered.',
        },
        {
          title: 'Signal',
          description:
            'Provides insight beyond simple code coverage percentages.',
        },
      ],
    },

    {
      title: 'Code Coverage',
      content:
        'Code Coverage measures which portions of code are executed by tests. It can include statement, branch, function, or line coverage. High coverage does not automatically mean high quality because tests can execute code without asserting meaningful behavior.',
      highlights: [
        {
          title: 'Coverage',
          description:
            'Measures which code paths are exercised.',
        },
        {
          title: 'Assertion quality',
          description:
            'Tests must verify meaningful outcomes, not merely execute code.',
        },
        {
          title: 'Risk',
          description:
            'Coverage should support risk-based testing rather than becoming the only quality metric.',
        },
      ],
    },

    {
      title: 'Shift Left',
      content:
        'Shift Left means moving quality and risk detection earlier in the software lifecycle. Developers can run tests locally, CI can validate changes before merge, and security or architecture concerns can be considered before production.',
      highlights: [
        {
          title: 'Earlier feedback',
          description:
            'Problems are found closer to the time they are introduced.',
        },
        {
          title: 'Lower cost',
          description:
            'Earlier defects are generally cheaper to diagnose and correct.',
        },
        {
          title: 'Shared quality',
          description:
            'Quality becomes a team responsibility rather than only a QA responsibility.',
        },
      ],
    },

    {
      title: 'Shift Right',
      content:
        'Shift Right means learning from software in realistic or production environments after deployment. Techniques can include monitoring, observability, feature flags, canary releases, synthetic testing, and controlled experiments.',
      highlights: [
        {
          title: 'Production learning',
          description:
            'Real-world behavior provides evidence that pre-production tests cannot fully reproduce.',
        },
        {
          title: 'Controlled exposure',
          description:
            'Feature flags and canary releases can reduce risk while learning.',
        },
        {
          title: 'Observability',
          description:
            'Production signals help detect and diagnose unexpected behavior.',
        },
      ],
    },

    {
      title: 'Testing in CI/CD',
      content:
        'CI/CD pipelines can automatically run tests at different stages. Fast unit and static checks can run on every change, integration tests can run before merge or deployment, and broader end-to-end or environment-specific tests can run at appropriate release stages.',
      highlights: [
        {
          title: 'Fast feedback',
          description:
            'Cheap checks should provide rapid signals.',
        },
        {
          title: 'Quality gates',
          description:
            'Important validation can prevent unsafe changes from progressing.',
        },
        {
          title: 'Release confidence',
          description:
            'Automated validation supports repeatable delivery.',
        },
      ],
    },

    {
      title: 'Test Automation',
      content:
        'Test Automation uses software to execute tests and compare actual results with expected outcomes. Automation is especially valuable for repeatable regression scenarios, APIs, business rules, data validation, and critical workflows.',
      highlights: [
        {
          title: 'Repeatability',
          description:
            'The same validation can be executed consistently.',
        },
        {
          title: 'Speed',
          description:
            'Large regression suites can run much faster than manual execution.',
        },
        {
          title: 'Regression',
          description:
            'Automated tests protect existing behavior as the product evolves.',
        },
      ],
    },

    {
      title: 'When Not to Automate',
      content:
        'Not every test should be automated. Highly exploratory work, rapidly changing interfaces, one-time investigations, or tests with very high maintenance cost may be better handled manually or with a hybrid approach. The decision should consider risk, repetition, stability, and maintenance cost.',
      highlights: [
        {
          title: 'Low repetition',
          description:
            'A one-time test may not justify automation cost.',
        },
        {
          title: 'High volatility',
          description:
            'Rapidly changing behavior can make automation expensive to maintain.',
        },
        {
          title: 'Exploration',
          description:
            'Human investigation can discover unexpected issues that scripted automation may miss.',
        },
      ],
    },

    {
      title: 'Flaky Tests',
      content:
        'A flaky test sometimes passes and sometimes fails without a relevant product change. Flaky tests reduce trust in the test suite and can cause teams to ignore real failures. They should be investigated rather than routinely retried and forgotten.',
      highlights: [
        {
          title: 'Unreliable signal',
          description:
            'The test does not consistently reflect actual product behavior.',
        },
        {
          title: 'False failures',
          description:
            'Unrelated infrastructure or timing issues may cause failures.',
        },
        {
          title: 'Trust',
          description:
            'Persistent flakiness weakens confidence in automated quality gates.',
        },
      ],
    },

    {
      title: 'Test Isolation',
      content:
        'Test isolation means reducing unwanted interaction between tests so that one test does not change the result of another. Isolation improves repeatability and makes failures easier to diagnose.',
      highlights: [
        {
          title: 'Independent state',
          description:
            'Tests should control or reset relevant state.',
        },
        {
          title: 'Determinism',
          description:
            'The same conditions should produce consistent results.',
        },
        {
          title: 'Debuggability',
          description:
            'Failures should be attributable to a specific behavior.',
        },
      ],
    },

    {
      title: 'Testing Distributed Systems',
      content:
        'Distributed systems require testing for partial failures, retries, timeouts, duplicate messages, ordering, concurrency, network failures, dependency outages, consistency problems, and recovery behavior. A system that works when every dependency is healthy may still fail under realistic distributed conditions.',
      highlights: [
        {
          title: 'Failure injection',
          description:
            'Controlled failures can validate resilience behavior.',
        },
        {
          title: 'Concurrency',
          description:
            'Concurrent operations can expose race conditions and consistency problems.',
        },
        {
          title: 'Recovery',
          description:
            'Tests should verify how the system returns to healthy operation.',
        },
      ],
    },

    {
      title: 'Testing Event-Driven Systems',
      content:
        'Event-driven systems should be tested for message schemas, delivery guarantees, duplicates, ordering where relevant, retries, dead-letter handling, idempotency, consumer failures, and eventual consistency.',
      highlights: [
        {
          title: 'Schema',
          description:
            'Messages should conform to the expected contract.',
        },
        {
          title: 'Duplicate delivery',
          description:
            'Consumers should handle duplicates safely where the delivery model permits them.',
        },
        {
          title: 'Failure recovery',
          description:
            'Retries and dead-letter behavior should be validated.',
        },
      ],
    },

    {
      title: 'Testing APIs',
      content:
        'API testing validates request handling, response structure, status codes, authentication, authorization, validation, error behavior, idempotency, pagination, rate limits, and backward compatibility. API tests are often fast and provide strong value for service-based architectures.',
      highlights: [
        {
          title: 'Contract',
          description:
            'Verify expected interface behavior.',
        },
        {
          title: 'Security',
          description:
            'Verify access controls and input handling.',
        },
        {
          title: 'Error behavior',
          description:
            'Verify predictable responses to invalid and failure conditions.',
        },
      ],
    },

    {
      title: 'Testing Databases',
      content:
        'Database testing can validate queries, constraints, transactions, migrations, data integrity, indexing behavior, concurrency, and rollback scenarios. Tests should reflect the risks created by the actual data model and workload.',
      highlights: [
        {
          title: 'Integrity',
          description:
            'Verify that invalid states are prevented.',
        },
        {
          title: 'Migration',
          description:
            'Validate schema changes and deployment behavior.',
        },
        {
          title: 'Concurrency',
          description:
            'Check behavior when multiple operations interact with shared data.',
        },
      ],
    },

    {
      title: 'Testing AI Systems',
      content:
        'AI Testing differs from conventional deterministic software testing because model outputs can vary. AI systems require evaluation of quality, relevance, groundedness, safety, robustness, latency, cost, and behavior across representative datasets and scenarios.',
      highlights: [
        {
          title: 'Quality evaluation',
          description:
            'Measure whether outputs meet agreed task-specific quality expectations.',
        },
        {
          title: 'Safety',
          description:
            'Test harmful, prohibited, adversarial, or unsafe scenarios.',
        },
        {
          title: 'Robustness',
          description:
            'Evaluate behavior across varied inputs and edge cases.',
        },
        {
          title: 'Operational quality',
          description:
            'Include latency, cost, availability, and fallback behavior.',
        },
      ],
    },

    {
      title: 'Testing RAG Systems',
      content:
        'RAG testing should separate retrieval quality from generation quality where possible. Teams can evaluate whether the correct information is retrieved, whether the generated response is supported by that information, whether access control is respected, and how the system behaves when relevant information is unavailable.',
      highlights: [
        {
          title: 'Retrieval evaluation',
          description:
            'Measure whether relevant documents or passages are retrieved.',
        },
        {
          title: 'Groundedness',
          description:
            'Check whether generated answers are supported by retrieved context.',
        },
        {
          title: 'Access control',
          description:
            'Verify that users cannot retrieve information they are not authorized to access.',
        },
        {
          title: 'Abstention',
          description:
            'Validate behavior when the system lacks sufficient evidence.',
        },
      ],
    },

    {
      title: 'Testing AI Voice Agents',
      content:
        'AI voice agents require testing across speech recognition, dialogue behavior, response latency, interruption handling, business rules, tool calls, escalation, call termination, CRM updates, and failure recovery. Tests should include realistic accents, noise, ambiguous speech, interruptions, and unexpected user behavior where relevant.',
      highlights: [
        {
          title: 'Conversation',
          description:
            'Validate the intended dialogue flow.',
        },
        {
          title: 'Latency',
          description:
            'Measure response timing because long pauses affect user experience.',
        },
        {
          title: 'Tool execution',
          description:
            'Verify that actions such as CRM updates occur correctly.',
        },
        {
          title: 'Fallback',
          description:
            'Validate escalation or safe handling when the agent cannot proceed.',
        },
      ],
    },

    {
      title: 'Test Oracles',
      content:
        'A Test Oracle is the mechanism or source used to determine whether an actual result is correct. In conventional software, this may be an expected output or business rule. In AI systems, the oracle can be a human evaluation process, reference dataset, rubric, model-based evaluator, or combination of methods.',
      highlights: [
        {
          title: 'Expected result',
          description:
            'Defines what correctness means for deterministic behavior.',
        },
        {
          title: 'Reference data',
          description:
            'Provides known examples or expected outcomes.',
        },
        {
          title: 'Human evaluation',
          description:
            'Useful when quality cannot be fully reduced to deterministic assertions.',
        },
      ],
    },

    {
      title: 'Testing and Acceptance Criteria',
      content:
        'Acceptance Criteria define what must be true for a product capability to be accepted. Testing provides evidence that those criteria are satisfied. This creates a direct connection between product intent and engineering validation.',
      highlights: [
        {
          title: 'Requirement',
          description:
            'Defines intended behavior.',
        },
        {
          title: 'Acceptance criteria',
          description:
            'Makes the expected conditions observable.',
        },
        {
          title: 'Testing',
          description:
            'Produces evidence that the conditions are satisfied.',
        },
      ],
    },

    {
      title: 'Testing and Production',
      content:
        'Testing cannot prove that a system will never fail in production. Production environments contain unpredictable traffic, data, dependencies, user behavior, and operational conditions. Strong organizations combine pre-production testing with observability, controlled releases, monitoring, incident response, and continuous learning.',
      highlights: [
        {
          title: 'Pre-production',
          description:
            'Find known and foreseeable problems before release.',
        },
        {
          title: 'Production signals',
          description:
            'Detect unexpected behavior in real environments.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Use production evidence to improve future tests and engineering practices.',
        },
      ],
    },

    {
      title: 'Risk-Based Testing',
      content:
        'Risk-Based Testing prioritizes testing effort according to the probability and impact of failure. High-risk functionality such as payments, authentication, sensitive data, critical workflows, and safety-related AI behavior should generally receive deeper validation than low-risk cosmetic changes.',
      highlights: [
        {
          title: 'Probability',
          description:
            'How likely is the failure to occur?',
        },
        {
          title: 'Impact',
          description:
            'How serious would the failure be?',
        },
        {
          title: 'Testing investment',
          description:
            'Allocate effort where it reduces meaningful risk.',
        },
      ],
    },

    {
      title: 'Test Strategy',
      content:
        'A Test Strategy defines how an organization or project approaches quality validation. It can describe test levels, environments, automation, responsibilities, risk areas, data, tooling, release gates, and production validation. The strategy should align with product risk and delivery goals.',
      highlights: [
        {
          title: 'Scope',
          description:
            'What needs to be tested?',
        },
        {
          title: 'Approach',
          description:
            'Which testing methods provide appropriate confidence?',
        },
        {
          title: 'Ownership',
          description:
            'Who is responsible for different quality activities?',
        },
        {
          title: 'Release',
          description:
            'What evidence is required before deployment?',
        },
      ],
    },

    {
      title: 'Testing Metrics',
      content:
        'Useful testing metrics can include defect escape rate, test execution time, flaky test rate, automation coverage, regression failure rate, mean time to detect defects, change failure rate, and production incident trends. Metrics should guide improvement rather than become targets that encourage gaming.',
      highlights: [
        {
          title: 'Escaped defects',
          description:
            'Measures defects discovered after the relevant testing stage.',
        },
        {
          title: 'Flakiness',
          description:
            'Measures reliability of automated test signals.',
        },
        {
          title: 'Change failure',
          description:
            'Shows how often releases or changes create production problems.',
        },
      ],
    },

    {
      title: 'Common Testing Anti-Patterns',
      content:
        'Common problems include testing only the happy path, relying entirely on manual testing, chasing code coverage percentages, creating too many fragile end-to-end tests, ignoring flaky tests, testing too late, using unrealistic test data, and assuming a successful test suite means production risk is zero.',
      highlights: [
        {
          title: 'Happy-path only',
          description:
            'Important failures and edge cases remain untested.',
        },
        {
          title: 'Coverage obsession',
          description:
            'High coverage can exist without meaningful assertions.',
        },
        {
          title: 'Flaky tests',
          description:
            'Unreliable tests weaken the quality feedback loop.',
        },
        {
          title: 'Late testing',
          description:
            'Problems become more expensive to discover and fix.',
        },
      ],
    },

    {
      title: 'Testing for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, testing is a quality and risk-management system rather than simply a QA activity. A strong leader ensures appropriate test strategy, automation, environments, quality gates, ownership, production validation, and measurable outcomes while keeping delivery speed sustainable.',
      highlights: [
        {
          title: 'Quality ownership',
          description:
            'Quality is shared across product, engineering, QA, and operations.',
        },
        {
          title: 'Risk management',
          description:
            'Testing depth should reflect business and technical risk.',
        },
        {
          title: 'Automation',
          description:
            'Automate repeatable validation to improve speed and consistency.',
        },
        {
          title: 'Continuous learning',
          description:
            'Production incidents should improve future test coverage and strategy.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is software testing? Explain unit, integration, and end-to-end testing. What is the testing pyramid? What is regression testing? What is the difference between verification and validation? What is test automation? How do you deal with flaky tests? How do you define a test strategy? How do you test distributed systems? How would you test an AI or RAG system? How do you measure testing effectiveness?',
      highlights: [
        {
          title: 'Test levels',
          description:
            'Explain what each testing level validates and its trade-offs.',
        },
        {
          title: 'Risk',
          description:
            'Show how testing effort should reflect business impact.',
        },
        {
          title: 'AI',
          description:
            'Explain why probabilistic systems require evaluation beyond deterministic assertions.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I view testing as a risk-management and feedback system rather than simply a final QA step. I normally use a combination of unit, integration, and end-to-end testing, with the balance depending on the architecture and risk. I automate repeatable regression checks and use CI to provide fast feedback, while keeping exploratory and higher-risk scenarios where human judgment adds value. I also pay attention to non-functional areas such as security, performance, reliability, and accessibility. For distributed systems I test partial failures, retries, timeouts, and consistency behavior. For AI systems, I add evaluation for quality, groundedness, safety, robustness, latency, cost, and fallback behavior because traditional deterministic testing alone is not sufficient.”',
      highlights: [
        {
          title: 'Risk-based',
          description:
            'Match testing depth to impact and probability of failure.',
        },
        {
          title: 'Automation',
          description:
            'Automate repeatable checks and preserve fast feedback.',
        },
        {
          title: 'Production awareness',
          description:
            'Combine testing with observability and controlled delivery.',
        },
        {
          title: 'AI evaluation',
          description:
            'Use representative datasets and measurable quality and safety criteria.',
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

export default testingKnowledge
