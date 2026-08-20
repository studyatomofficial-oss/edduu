import type { KnowledgeDefinition } from './knowledge'

export const testAutomationKnowledge: KnowledgeDefinition = {
  technologyId: 'test-automation',
  slug: 'test-automation',
  title: 'Test Automation',
  summary:
    'Test Automation uses software tools and repeatable execution to validate application behavior efficiently, consistently, and continuously across the software delivery lifecycle.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Test Automation?',
      content:
        'Test Automation is the practice of using software to automatically execute tests, compare actual behavior with expected behavior, and report the results. It is especially valuable for repeatable regression checks, API validation, business rules, integration scenarios, and critical workflows.',
      highlights: [
        {
          title: 'Repeatability',
          description:
            'The same validation can be executed consistently many times.',
        },
        {
          title: 'Speed',
          description:
            'Automated tests can provide feedback much faster than repetitive manual execution.',
        },
        {
          title: 'Continuous validation',
          description:
            'Tests can run automatically during development, pull requests, CI/CD, and deployment.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a factory that manufactures thousands of bottles. Instead of having a person manually inspect every bottle for the same simple defects, the factory can use automated machines to perform repeatable checks. People still handle unusual cases and judgment-heavy decisions. Test Automation works the same way: machines handle repeatable validation while engineers focus on higher-value reasoning.',
      highlights: [
        {
          title: 'Machine checks',
          description:
            'Automated tests repeatedly validate known conditions.',
        },
        {
          title: 'Human judgment',
          description:
            'People investigate unexpected behavior and exploratory scenarios.',
        },
        {
          title: 'Scale',
          description:
            'Automation becomes increasingly valuable as the product and regression surface grow.',
        },
      ],
    },

    {
      title: 'Why Test Automation Matters',
      content:
        'As software grows, manually repeating the same tests becomes slow, expensive, and inconsistent. Automation creates a reusable safety net that allows teams to make changes more frequently while maintaining confidence in important existing behavior.',
      highlights: [
        {
          title: 'Regression protection',
          description:
            'Protects existing functionality from accidental breakage.',
        },
        {
          title: 'Fast feedback',
          description:
            'Problems can be detected close to the time a change is introduced.',
        },
        {
          title: 'Delivery velocity',
          description:
            'Reliable automation supports frequent and repeatable releases.',
        },
      ],
    },

    {
      title: 'What Should Be Automated?',
      content:
        'Good automation candidates are tests that are repeatable, important, stable enough to maintain, expensive to perform manually, and likely to run frequently. Examples include API tests, business rules, critical regression scenarios, data validation, and integration checks.',
      highlights: [
        {
          title: 'High repetition',
          description:
            'Automate scenarios that need to be executed frequently.',
        },
        {
          title: 'High business value',
          description:
            'Prioritize functionality where failure would materially affect users or the business.',
        },
        {
          title: 'Stable behavior',
          description:
            'Automation provides better value when expected behavior is sufficiently stable.',
        },
      ],
    },

    {
      title: 'What Should Not Be Automated First?',
      content:
        'Not every test should immediately become automated. Highly exploratory work, rapidly changing interfaces, one-time investigations, and tests whose maintenance cost exceeds their value may be better handled manually or through a hybrid approach.',
      highlights: [
        {
          title: 'Exploratory testing',
          description:
            'Human curiosity and investigation can discover unexpected problems.',
        },
        {
          title: 'Rapidly changing UI',
          description:
            'Automating unstable interfaces can create excessive maintenance.',
        },
        {
          title: 'Low-frequency tests',
          description:
            'A one-time scenario may not justify automation investment.',
        },
      ],
    },

    {
      title: 'Test Automation Pyramid',
      content:
        'The Testing Pyramid is commonly applied to automation by maintaining many fast unit tests, fewer integration tests, and a smaller number of end-to-end tests. The goal is to achieve useful confidence without making the automated suite unnecessarily slow or fragile.',
      highlights: [
        {
          title: 'Unit automation',
          description:
            'Fast and focused validation of local behavior.',
        },
        {
          title: 'Integration automation',
          description:
            'Validation of interactions between components.',
        },
        {
          title: 'End-to-end automation',
          description:
            'Validation of critical complete user journeys.',
        },
      ],
    },

    {
      title: 'Unit Test Automation',
      content:
        'Automated unit tests validate individual functions, methods, or components. They are usually fast and numerous, making them suitable for frequent execution during development and CI.',
      highlights: [
        {
          title: 'Fast',
          description:
            'Usually execute quickly.',
        },
        {
          title: 'Focused',
          description:
            'Target a small amount of behavior.',
        },
        {
          title: 'Developer feedback',
          description:
            'Useful for detecting defects immediately after implementation changes.',
        },
      ],
    },

    {
      title: 'Integration Test Automation',
      content:
        'Automated integration tests validate communication between components such as application services, databases, queues, APIs, and external dependencies. They catch issues that isolated unit tests cannot detect.',
      highlights: [
        {
          title: 'Component interaction',
          description:
            'Validates behavior across system boundaries.',
        },
        {
          title: 'Realistic dependencies',
          description:
            'Can use realistic or containerized infrastructure where appropriate.',
        },
        {
          title: 'Boundary confidence',
          description:
            'Protects contracts and integration behavior.',
        },
      ],
    },

    {
      title: 'End-to-End Test Automation',
      content:
        'End-to-End automation validates complete business or user workflows. It provides strong confidence but usually requires more infrastructure, execution time, and maintenance than lower-level tests.',
      highlights: [
        {
          title: 'User journey',
          description:
            'Validates behavior from an external perspective.',
        },
        {
          title: 'High confidence',
          description:
            'Can expose problems across multiple application layers.',
        },
        {
          title: 'Higher maintenance',
          description:
            'Requires careful management to avoid fragile tests.',
        },
      ],
    },

    {
      title: 'API Test Automation',
      content:
        'API automation validates endpoints directly without requiring a browser. It can test requests, responses, authentication, authorization, validation, error handling, pagination, idempotency, rate limits, and contract behavior.',
      highlights: [
        {
          title: 'Fast',
          description:
            'API tests are often significantly faster than browser-based end-to-end tests.',
        },
        {
          title: 'Stable',
          description:
            'API contracts can be more stable than UI selectors.',
        },
        {
          title: 'Business logic',
          description:
            'Important backend behavior can be validated directly.',
        },
      ],
    },

    {
      title: 'UI Test Automation',
      content:
        'UI Test Automation simulates user interactions with the application interface. It is useful for critical workflows but can be fragile when implementation details such as selectors, layouts, or asynchronous behavior change frequently.',
      highlights: [
        {
          title: 'User behavior',
          description:
            'Validates complete interaction flows.',
        },
        {
          title: 'Browser execution',
          description:
            'Can run against supported browser environments.',
        },
        {
          title: 'Fragility risk',
          description:
            'Requires careful selector and synchronization strategies.',
        },
      ],
    },

    {
      title: 'Browser Automation',
      content:
        'Browser automation tools control browsers programmatically to execute UI tests. Common capabilities include navigation, clicking, typing, assertions, screenshots, network interception, and parallel execution.',
      highlights: [
        {
          title: 'Interaction',
          description:
            'Automates realistic browser interactions.',
        },
        {
          title: 'Assertions',
          description:
            'Verifies visible and behavioral outcomes.',
        },
        {
          title: 'Debugging',
          description:
            'Screenshots, traces, and videos can help diagnose failures.',
        },
      ],
    },

    {
      title: 'Test Framework',
      content:
        'A Test Framework provides structure and utilities for defining, executing, organizing, and reporting tests. A good framework makes tests readable, repeatable, diagnosable, and maintainable.',
      highlights: [
        {
          title: 'Organization',
          description:
            'Groups tests logically.',
        },
        {
          title: 'Execution',
          description:
            'Controls how tests run locally and in CI.',
        },
        {
          title: 'Reporting',
          description:
            'Provides useful results and diagnostics.',
        },
      ],
    },

    {
      title: 'Assertions',
      content:
        'An assertion expresses what a test expects to be true. Strong assertions verify meaningful outcomes rather than implementation details. A useful automated test should fail when the behavior that matters is incorrect.',
      highlights: [
        {
          title: 'Expected behavior',
          description:
            'Assertions define what success means.',
        },
        {
          title: 'Meaningful result',
          description:
            'Verify behavior users or systems depend on.',
        },
        {
          title: 'Failure signal',
          description:
            'A good assertion makes failures understandable.',
        },
      ],
    },

    {
      title: 'Test Fixtures',
      content:
        'Fixtures provide reusable setup and data needed by tests. They can create users, databases, authentication states, files, or other prerequisites and then clean them up when the test completes.',
      highlights: [
        {
          title: 'Reusable setup',
          description:
            'Avoids duplicating common preparation logic.',
        },
        {
          title: 'Consistency',
          description:
            'Creates predictable test conditions.',
        },
        {
          title: 'Cleanup',
          description:
            'Helps prevent state from leaking between tests.',
        },
      ],
    },

    {
      title: 'Test Data Management',
      content:
        'Automated tests require predictable and meaningful test data. Data can be generated dynamically, seeded from controlled datasets, created through APIs, or loaded from fixtures. The approach should prevent tests from becoming dependent on unstable shared state.',
      highlights: [
        {
          title: 'Isolation',
          description:
            'Tests should avoid interfering with one another.',
        },
        {
          title: 'Realism',
          description:
            'Data should represent important production scenarios.',
        },
        {
          title: 'Privacy',
          description:
            'Sensitive production data should not be exposed unnecessarily.',
        },
      ],
    },

    {
      title: 'Mocks and Stubs in Automation',
      content:
        'Mocks and stubs allow automated tests to control dependencies. They are useful for isolating behavior, simulating failures, and making tests faster, but excessive mocking can create tests that pass while real integrations are broken.',
      highlights: [
        {
          title: 'Isolation',
          description:
            'Replace expensive or unavailable dependencies.',
        },
        {
          title: 'Failure simulation',
          description:
            'Create controlled dependency failures.',
        },
        {
          title: 'Risk',
          description:
            'Too much mocking can reduce confidence in real integration behavior.',
        },
      ],
    },

    {
      title: 'Contract Test Automation',
      content:
        'Contract tests automatically verify that service providers and consumers continue to agree on an API or message contract. They are valuable in independently deployed microservices and event-driven architectures.',
      highlights: [
        {
          title: 'Provider',
          description:
            'Validates that the service continues to provide the expected contract.',
        },
        {
          title: 'Consumer',
          description:
            'Validates that the service’s expectations remain compatible.',
        },
        {
          title: 'Early detection',
          description:
            'Can identify breaking changes before deployment reaches production.',
        },
      ],
    },

    {
      title: 'Regression Automation',
      content:
        'Regression automation protects existing functionality whenever the codebase changes. A mature regression suite focuses on important business behavior rather than trying to automate every possible interaction.',
      highlights: [
        {
          title: 'Reusable protection',
          description:
            'The same tests can run across many releases.',
        },
        {
          title: 'Change confidence',
          description:
            'Helps teams refactor and extend software safely.',
        },
        {
          title: 'Prioritization',
          description:
            'Critical regression scenarios should receive the strongest protection.',
        },
      ],
    },

    {
      title: 'Smoke Test Automation',
      content:
        'Automated smoke tests quickly validate whether a new build or deployment is fundamentally healthy. They commonly check application startup, authentication, critical APIs, database connectivity, and one or two essential user journeys.',
      highlights: [
        {
          title: 'Fast gate',
          description:
            'Quickly identifies obviously broken builds.',
        },
        {
          title: 'Critical paths',
          description:
            'Focuses on the functionality required for basic operation.',
        },
        {
          title: 'Deployment validation',
          description:
            'Can run immediately after deployment.',
        },
      ],
    },

    {
      title: 'Test Parallelization',
      content:
        'Test Parallelization runs independent tests simultaneously to reduce total execution time. It becomes especially useful as the automated suite grows.',
      highlights: [
        {
          title: 'Speed',
          description:
            'Reduces wall-clock execution time.',
        },
        {
          title: 'Scalability',
          description:
            'Allows large suites to run across multiple workers.',
        },
        {
          title: 'Isolation requirement',
          description:
            'Tests must be sufficiently independent to run safely in parallel.',
        },
      ],
    },

    {
      title: 'Test Determinism',
      content:
        'A deterministic test produces the same result when the relevant inputs and environment remain equivalent. Determinism is critical because unreliable tests create noise and reduce trust in the automation system.',
      highlights: [
        {
          title: 'Repeatability',
          description:
            'Repeated runs should produce consistent outcomes.',
        },
        {
          title: 'Controlled dependencies',
          description:
            'Time, randomness, network conditions, and external services may need to be controlled.',
        },
        {
          title: 'Trust',
          description:
            'Reliable signals are essential for CI/CD quality gates.',
        },
      ],
    },

    {
      title: 'Flaky Tests',
      content:
        'A flaky test passes and fails unpredictably without a meaningful application change. Common causes include race conditions, timing assumptions, shared state, unstable dependencies, network conditions, and poor cleanup. Flaky tests should be treated as engineering problems rather than ignored.',
      highlights: [
        {
          title: 'Timing',
          description:
            'Fixed waits and asynchronous assumptions can create instability.',
        },
        {
          title: 'Shared state',
          description:
            'Tests can interfere with each other.',
        },
        {
          title: 'External dependency',
          description:
            'Unstable services can create false failures.',
        },
      ],
    },

    {
      title: 'Retrying Tests',
      content:
        'Retries can help distinguish transient infrastructure failures from persistent product failures, but indiscriminate retries are dangerous because they can hide genuine defects. Retries should be limited, observable, and investigated when they occur.',
      highlights: [
        {
          title: 'Transient failure',
          description:
            'A retry can sometimes recover from temporary infrastructure conditions.',
        },
        {
          title: 'False confidence',
          description:
            'Repeated retries can hide unstable or broken tests.',
        },
        {
          title: 'Visibility',
          description:
            'Retry counts should be tracked and reviewed.',
        },
      ],
    },

    {
      title: 'Test Environment Strategy',
      content:
        'Automated tests can run locally, in ephemeral environments, shared test environments, staging, or production-like environments. The environment should match the purpose of the test and minimize unwanted dependencies.',
      highlights: [
        {
          title: 'Local',
          description:
            'Fast developer feedback.',
        },
        {
          title: 'Ephemeral',
          description:
            'Creates isolated environments for changes or pull requests.',
        },
        {
          title: 'Staging',
          description:
            'Provides broader production-like validation before release.',
        },
      ],
    },

    {
      title: 'Ephemeral Test Environments',
      content:
        'Ephemeral environments are temporary environments created for a specific branch, pull request, test run, or deployment. They reduce interference between changes and can improve confidence in integration testing.',
      highlights: [
        {
          title: 'Isolation',
          description:
            'Each change can receive an independent environment.',
        },
        {
          title: 'Reproducibility',
          description:
            'Environment creation can be standardized through infrastructure automation.',
        },
        {
          title: 'Cleanup',
          description:
            'Temporary environments should be removed when no longer needed to control cost.',
        },
      ],
    },

    {
      title: 'CI Test Automation',
      content:
        'Continuous Integration systems automatically execute tests when code changes are submitted. A common pipeline starts with fast checks and progressively executes more expensive validation.',
      highlights: [
        {
          title: 'Pull request',
          description:
            'Tests provide feedback before code is merged.',
        },
        {
          title: 'Quality gate',
          description:
            'Required checks can prevent unsafe changes from progressing.',
        },
        {
          title: 'Fast feedback',
          description:
            'Early failures should be surfaced quickly.',
        },
      ],
    },

    {
      title: 'Test Automation in CD',
      content:
        'Continuous Delivery pipelines can use automated tests as release gates and post-deployment validation. Smoke tests, API checks, synthetic monitoring, and critical workflow tests can confirm that a deployed system is functioning correctly.',
      highlights: [
        {
          title: 'Pre-deployment',
          description:
            'Validate before release.',
        },
        {
          title: 'Post-deployment',
          description:
            'Validate the actual deployed environment.',
        },
        {
          title: 'Rollback',
          description:
            'Automated validation can trigger or support rollback decisions when critical failures occur.',
        },
      ],
    },

    {
      title: 'Shift Left Automation',
      content:
        'Shift Left automation moves automated validation earlier in the lifecycle. Developers can execute unit tests and static checks locally, while CI executes broader tests before merge.',
      highlights: [
        {
          title: 'Earlier detection',
          description:
            'Problems are identified closer to the source change.',
        },
        {
          title: 'Lower remediation cost',
          description:
            'Earlier feedback usually makes defects easier to understand and fix.',
        },
        {
          title: 'Developer ownership',
          description:
            'Engineers receive direct feedback during development.',
        },
      ],
    },

    {
      title: 'Shift Right Automation',
      content:
        'Shift Right automation validates behavior after deployment through synthetic tests, health checks, canary validation, production probes, and controlled experiments. It complements pre-production testing rather than replacing it.',
      highlights: [
        {
          title: 'Production evidence',
          description:
            'Validates real infrastructure and dependencies.',
        },
        {
          title: 'Controlled exposure',
          description:
            'Can be combined with canary deployments and feature flags.',
        },
        {
          title: 'Continuous confidence',
          description:
            'Critical workflows can be validated repeatedly after release.',
        },
      ],
    },

    {
      title: 'Test Automation and Observability',
      content:
        'Automated tests should produce useful diagnostics when they fail. Screenshots, videos, logs, traces, request details, environment information, and test artifacts can dramatically reduce investigation time.',
      highlights: [
        {
          title: 'Diagnostics',
          description:
            'Capture enough evidence to understand the failure.',
        },
        {
          title: 'Correlation',
          description:
            'Use identifiers to connect test actions with application logs and traces.',
        },
        {
          title: 'Debug speed',
          description:
            'Good diagnostics reduce mean time to repair broken tests or product defects.',
        },
      ],
    },

    {
      title: 'Test Automation and APIs',
      content:
        'API automation is often one of the highest-value areas because it validates backend behavior without depending on browser rendering. Tests can cover authentication, authorization, business rules, validation, error handling, and integration contracts.',
      highlights: [
        {
          title: 'Fast execution',
          description:
            'API tests usually run faster than browser workflows.',
        },
        {
          title: 'Broad coverage',
          description:
            'Many business scenarios can be tested at the service boundary.',
        },
        {
          title: 'Stable contract',
          description:
            'API behavior can remain stable even when UI implementation changes.',
        },
      ],
    },

    {
      title: 'Test Automation and Databases',
      content:
        'Database-related automation can validate migrations, constraints, transactions, queries, data integrity, and application behavior against realistic data. Tests should avoid unnecessary coupling to implementation details while still protecting critical persistence behavior.',
      highlights: [
        {
          title: 'Migration testing',
          description:
            'Verify schema changes before and during deployment.',
        },
        {
          title: 'Integrity',
          description:
            'Validate constraints and important data invariants.',
        },
        {
          title: 'Performance',
          description:
            'Important queries should be evaluated under realistic conditions.',
        },
      ],
    },

    {
      title: 'Test Automation for Distributed Systems',
      content:
        'Distributed systems require automated scenarios for partial failures, retries, timeouts, duplicate messages, concurrency, service outages, consistency behavior, and recovery. These tests help verify that the architecture behaves correctly when dependencies fail.',
      highlights: [
        {
          title: 'Failure injection',
          description:
            'Simulate controlled service or network failures.',
        },
        {
          title: 'Idempotency',
          description:
            'Verify repeated operations behave safely where required.',
        },
        {
          title: 'Recovery',
          description:
            'Validate how the system returns to healthy operation.',
        },
      ],
    },

    {
      title: 'Test Automation for Event-Driven Systems',
      content:
        'Automated event-driven tests should validate message schemas, producer behavior, consumer behavior, delivery semantics, retries, dead-letter handling, duplicate events, ordering assumptions, and eventual consistency.',
      highlights: [
        {
          title: 'Schema validation',
          description:
            'Messages should conform to agreed contracts.',
        },
        {
          title: 'Consumer resilience',
          description:
            'Consumers should handle relevant delivery and dependency failures.',
        },
        {
          title: 'Duplicate handling',
          description:
            'Verify idempotent behavior where duplicate delivery is possible.',
        },
      ],
    },

    {
      title: 'Test Automation for AI Systems',
      content:
        'AI systems require a different automation strategy because outputs may be probabilistic. Automated evaluation can compare outputs against reference datasets, structured criteria, safety checks, groundedness expectations, latency thresholds, cost thresholds, and regression benchmarks.',
      highlights: [
        {
          title: 'Evaluation datasets',
          description:
            'Maintain representative examples that reflect important use cases.',
        },
        {
          title: 'Quality checks',
          description:
            'Evaluate task-specific correctness, relevance, and groundedness.',
        },
        {
          title: 'Safety checks',
          description:
            'Automate detection of unacceptable behavior where measurable.',
        },
        {
          title: 'Operational checks',
          description:
            'Track latency, cost, availability, and failure behavior.',
        },
      ],
    },

    {
      title: 'AI Regression Testing',
      content:
        'AI Regression Testing evaluates whether a new prompt, model, retrieval strategy, tool, or application change causes important behavior to degrade. Regression suites should contain representative examples and measurable evaluation criteria.',
      highlights: [
        {
          title: 'Prompt changes',
          description:
            'Evaluate whether prompt modifications improve one behavior while damaging another.',
        },
        {
          title: 'Model changes',
          description:
            'Compare important quality and operational metrics before and after model changes.',
        },
        {
          title: 'RAG changes',
          description:
            'Evaluate retrieval and grounded answer behavior after retrieval pipeline modifications.',
        },
      ],
    },

    {
      title: 'RAG Test Automation',
      content:
        'RAG automation should evaluate retrieval relevance, ranking, metadata filtering, authorization, context construction, answer groundedness, citation behavior, abstention, latency, and cost. A strong suite separates retrieval failures from generation failures where possible.',
      highlights: [
        {
          title: 'Retrieval tests',
          description:
            'Check whether relevant source information is retrieved.',
        },
        {
          title: 'Groundedness tests',
          description:
            'Check whether responses are supported by retrieved evidence.',
        },
        {
          title: 'Security tests',
          description:
            'Verify that retrieval respects tenant and user authorization boundaries.',
        },
        {
          title: 'Abstention tests',
          description:
            'Verify that the system does not confidently invent information when evidence is insufficient.',
        },
      ],
    },

    {
      title: 'AI Voice Agent Test Automation',
      content:
        'Voice agent automation can combine scripted conversations, audio inputs, API-level validation, tool-call verification, transcript analysis, latency measurement, and business-outcome assertions. Important scenarios include interruptions, silence, ambiguous speech, escalation, failed tools, incorrect user information, and call termination.',
      highlights: [
        {
          title: 'Conversation flows',
          description:
            'Automate representative dialogue scenarios.',
        },
        {
          title: 'Tool calls',
          description:
            'Verify that actions such as booking, CRM updates, or lead qualification occur correctly.',
        },
        {
          title: 'Latency',
          description:
            'Measure response timing because long pauses affect conversational quality.',
        },
        {
          title: 'Fallback',
          description:
            'Validate escalation and recovery when the agent cannot complete a task.',
        },
      ],
    },

    {
      title: 'Test Automation Architecture',
      content:
        'A mature automation architecture separates test logic, test data, environment configuration, reusable utilities, reporting, and execution infrastructure. The goal is to make tests easy to write, easy to understand, easy to debug, and inexpensive enough to maintain.',
      highlights: [
        {
          title: 'Reusable components',
          description:
            'Shared utilities reduce duplication without hiding important behavior.',
        },
        {
          title: 'Configuration',
          description:
            'Environment-specific settings should be externalized and controlled.',
        },
        {
          title: 'Reporting',
          description:
            'Results should provide actionable information for engineers and leaders.',
        },
      ],
    },

    {
      title: 'Maintainability',
      content:
        'Automation is software and must itself be engineered. Poorly designed tests become technical debt. Maintainable automation uses clear abstractions, stable selectors, controlled dependencies, useful naming, isolated data, predictable cleanup, and appropriate test granularity.',
      highlights: [
        {
          title: 'Readable',
          description:
            'A test should communicate what behavior it validates.',
        },
        {
          title: 'Stable',
          description:
            'Avoid unnecessary dependence on implementation details.',
        },
        {
          title: 'Low duplication',
          description:
            'Reusable helpers should remove repetition without making tests difficult to understand.',
        },
      ],
    },

    {
      title: 'Automation Technical Debt',
      content:
        'Automation can accumulate debt through duplicated code, obsolete tests, fragile selectors, excessive mocking, stale data, flaky scenarios, slow execution, and unclear ownership. Automation should be maintained like production software.',
      highlights: [
        {
          title: 'Flaky suite',
          description:
            'Unreliable tests reduce confidence.',
        },
        {
          title: 'Slow suite',
          description:
            'Long execution times reduce developer feedback quality.',
        },
        {
          title: 'Obsolete tests',
          description:
            'Tests for removed or changed behavior create noise and maintenance cost.',
        },
      ],
    },

    {
      title: 'Test Ownership',
      content:
        'Teams should define ownership for automated tests. Developers, QA engineers, SDETs, platform teams, and other specialists may contribute depending on the organization. Ownership should be close enough to the product that broken tests receive timely attention.',
      highlights: [
        {
          title: 'Shared responsibility',
          description:
            'Quality should not depend entirely on one specialized team.',
        },
        {
          title: 'Fast repair',
          description:
            'Broken tests should have a clear owner.',
        },
        {
          title: 'Product knowledge',
          description:
            'People maintaining tests should understand the behavior being validated.',
        },
      ],
    },

    {
      title: 'Automation Metrics',
      content:
        'Useful metrics include automated test execution time, pass rate, flaky test rate, failure diagnosis time, regression coverage, escaped defects, change failure rate, and the proportion of critical workflows protected by automation. Metrics should measure outcomes rather than reward test quantity.',
      highlights: [
        {
          title: 'Flaky rate',
          description:
            'Measures the reliability of the automation signal.',
        },
        {
          title: 'Execution time',
          description:
            'Shows how quickly engineers receive feedback.',
        },
        {
          title: 'Escaped defects',
          description:
            'Shows whether important problems are still reaching later environments or production.',
        },
      ],
    },

    {
      title: 'Automation ROI',
      content:
        'Automation should be evaluated as an engineering investment. ROI depends on execution frequency, manual effort avoided, defect risk reduced, maintenance cost, and the value of faster feedback. A highly automated suite is not automatically a valuable suite.',
      highlights: [
        {
          title: 'Frequency',
          description:
            'Frequently repeated tests generally have higher automation value.',
        },
        {
          title: 'Risk',
          description:
            'High-risk functionality can justify automation even when execution frequency is moderate.',
        },
        {
          title: 'Maintenance',
          description:
            'Ongoing maintenance cost must be included in the investment decision.',
        },
      ],
    },

    {
      title: 'Automation and Developer Experience',
      content:
        'Good test automation improves Developer Experience by making feedback fast, failures understandable, and local reproduction straightforward. Slow or unreliable automation creates friction and encourages engineers to bypass quality checks.',
      highlights: [
        {
          title: 'Fast feedback',
          description:
            'Developers should know quickly when a change introduces a problem.',
        },
        {
          title: 'Useful diagnostics',
          description:
            'Failures should explain what happened and provide evidence.',
        },
        {
          title: 'Local reproduction',
          description:
            'Important CI failures should be reproducible locally where practical.',
        },
      ],
    },

    {
      title: 'Automation Governance',
      content:
        'At scale, teams benefit from standards for test naming, ownership, environments, data management, reporting, retries, flaky-test handling, quality gates, and security. Governance should create consistency without making every team follow unnecessary process.',
      highlights: [
        {
          title: 'Standards',
          description:
            'Define useful engineering conventions.',
        },
        {
          title: 'Risk-based policy',
          description:
            'Apply stronger controls to high-risk systems and workflows.',
        },
        {
          title: 'Team autonomy',
          description:
            'Allow teams to choose appropriate implementation details within shared quality expectations.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Test Automation? What should and should not be automated? Explain the testing pyramid. How do you design an automation framework? How do you handle flaky tests? How do you reduce test execution time? How do you integrate automation into CI/CD? How would you automate API testing? How would you test a distributed system? How would you automate testing for an AI or RAG system? How do you measure automation ROI?',
      highlights: [
        {
          title: 'Strategy',
          description:
            'Explain how you prioritize automation based on risk, repetition, stability, and value.',
        },
        {
          title: 'Architecture',
          description:
            'Explain how you make automation maintainable and scalable.',
        },
        {
          title: 'Leadership',
          description:
            'Explain how you create a quality system rather than simply adding more tests.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat test automation as an engineering investment rather than a goal by itself. I prioritize scenarios that are high-risk, repeatable, stable, and expensive to validate manually. I normally build a balanced suite with many fast unit tests, meaningful integration and API tests, and a smaller set of critical end-to-end tests. I integrate the suite into CI/CD so developers get fast feedback before changes reach production. I also pay close attention to flaky tests, execution time, diagnostics, test-data isolation, and ownership because unreliable automation can become a bottleneck. For AI systems, I add evaluation datasets and automated checks for quality, groundedness, safety, latency, cost, and regression behavior. As a leader, I measure outcomes such as escaped defects, feedback time, flaky rate, and change failure rather than simply counting automated tests.”',
      highlights: [
        {
          title: 'Risk-based',
          description:
            'Automate where the value and risk justify the investment.',
        },
        {
          title: 'Balanced testing',
          description:
            'Use multiple test levels rather than relying entirely on end-to-end automation.',
        },
        {
          title: 'CI/CD',
          description:
            'Make quality validation part of the delivery flow.',
        },
        {
          title: 'Leadership',
          description:
            'Optimize for engineering outcomes, not automation quantity.',
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
    'engineering-metrics',
    'developer-experience',
    'technical-program-management',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'event-driven-systems',
    'scalability',
    'queues',
    'consistency',
    'fault-tolerance',
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

export default testAutomationKnowledge
