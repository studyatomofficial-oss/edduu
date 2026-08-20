import type { KnowledgeDefinition } from './knowledge'

export const codeReviewKnowledge: KnowledgeDefinition = {
  technologyId: 'code-review',
  slug: 'code-review',
  title: 'Code Review',
  summary:
    'Code Review is a structured engineering practice used to evaluate changes before they are merged, improving correctness, maintainability, security, reliability, knowledge sharing, and team consistency.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Code Review?',
      content:
        'Code Review is the process of having one or more engineers examine a proposed code change before it becomes part of the shared codebase. The goal is not simply to find mistakes. A good review verifies that the change solves the intended problem, fits the system design, remains maintainable, and meets the team’s engineering standards.',
      highlights: [
        {
          title: 'Quality gate',
          description:
            'Provides an additional validation step before code becomes shared production code.',
        },
        {
          title: 'Knowledge sharing',
          description:
            'Helps engineers understand systems, patterns, and decisions made by other team members.',
        },
        {
          title: 'Risk reduction',
          description:
            'Can identify correctness, security, reliability, and maintainability risks before release.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a restaurant chef preparing an important dish. Before serving it to a customer, another experienced chef tastes it and checks whether the ingredients, preparation, presentation, and food-safety expectations are correct. Code Review works similarly: another engineer examines the change before it reaches users.',
      highlights: [
        {
          title: 'Author',
          description:
            'The engineer who created the change.',
        },
        {
          title: 'Reviewer',
          description:
            'The engineer who independently examines the change.',
        },
        {
          title: 'Shared quality',
          description:
            'The objective is a better product, not winning an argument between engineers.',
        },
      ],
    },

    {
      title: 'Why Code Review Matters',
      content:
        'Code Review creates a deliberate checkpoint between implementation and integration. It can catch defects, improve design decisions, maintain consistency, spread knowledge, identify security concerns, and make future maintenance easier.',
      highlights: [
        {
          title: 'Correctness',
          description:
            'Checks whether the change behaves as intended.',
        },
        {
          title: 'Maintainability',
          description:
            'Checks whether future engineers can understand and safely modify the code.',
        },
        {
          title: 'Consistency',
          description:
            'Helps maintain agreed architectural and coding patterns.',
        },
        {
          title: 'Knowledge',
          description:
            'Prevents critical system knowledge from remaining with only one engineer.',
        },
      ],
    },

    {
      title: 'Code Review is Not Just Bug Hunting',
      content:
        'A review should look beyond obvious defects. Reviewers should consider whether the solution addresses the actual requirement, whether the design fits the architecture, whether important edge cases are handled, whether security and operational concerns are addressed, and whether the change introduces unnecessary complexity.',
      highlights: [
        {
          title: 'Requirement fit',
          description:
            'Does the implementation actually solve the requested problem?',
        },
        {
          title: 'Design',
          description:
            'Does the solution fit the surrounding system?',
        },
        {
          title: 'Operational impact',
          description:
            'Could the change affect performance, reliability, monitoring, or deployment?',
        },
      ],
    },

    {
      title: 'What Should Be Reviewed?',
      content:
        'The scope of review should match the risk and size of the change. Reviewers commonly examine correctness, architecture, business logic, error handling, security, performance, tests, observability, maintainability, API contracts, data handling, and deployment implications.',
      highlights: [
        {
          title: 'Business logic',
          description:
            'Verify that the implemented behavior matches the intended product behavior.',
        },
        {
          title: 'Security',
          description:
            'Look for authorization, authentication, injection, secrets, data exposure, and other relevant risks.',
        },
        {
          title: 'Testing',
          description:
            'Check whether important behavior and failure scenarios are adequately validated.',
        },
        {
          title: 'Operations',
          description:
            'Consider logs, metrics, alerts, rollback, and production behavior.',
        },
      ],
    },

    {
      title: 'Code Review vs Automated Checks',
      content:
        'Automated checks and human review complement each other. Linters, formatters, type checking, static analysis, tests, security scanners, and CI pipelines can detect repeatable problems efficiently. Humans are better suited to reasoning about intent, architecture, trade-offs, user impact, and unusual risks.',
      highlights: [
        {
          title: 'Automation',
          description:
            'Handles repeatable and mechanically detectable checks.',
        },
        {
          title: 'Human review',
          description:
            'Handles context, judgment, design, and trade-offs.',
        },
        {
          title: 'Combined approach',
          description:
            'Automation should remove low-value review work so humans can focus on higher-value reasoning.',
        },
      ],
    },

    {
      title: 'Pull Request',
      content:
        'A Pull Request, or PR, is a common mechanism for proposing a set of changes for review before merging them into a shared branch. A good PR explains what changed, why it changed, how it was validated, and any relevant risks or deployment considerations.',
      highlights: [
        {
          title: 'Description',
          description:
            'Explains the problem, solution, and important context.',
        },
        {
          title: 'Diff',
          description:
            'Shows the actual code changes under review.',
        },
        {
          title: 'Checks',
          description:
            'Shows automated validation such as tests, linting, and builds.',
        },
      ],
    },

    {
      title: 'Small Pull Requests',
      content:
        'Smaller PRs are generally easier and faster to review because reviewers can understand the change with less cognitive load. Large PRs increase the chance that important details are missed and can create review bottlenecks.',
      highlights: [
        {
          title: 'Lower cognitive load',
          description:
            'Reviewers can focus on a smaller set of decisions.',
        },
        {
          title: 'Faster feedback',
          description:
            'Issues are identified earlier.',
        },
        {
          title: 'Better discussion',
          description:
            'Review comments can stay focused on meaningful decisions.',
        },
      ],
    },

    {
      title: 'What Makes a Good Pull Request?',
      content:
        'A good PR has a clear purpose, limited scope, useful context, appropriate tests, understandable commits or changes, and evidence that the author validated the implementation. The reviewer should not need to reconstruct the entire business problem from the diff alone.',
      highlights: [
        {
          title: 'Clear purpose',
          description:
            'The reviewer immediately understands why the change exists.',
        },
        {
          title: 'Focused scope',
          description:
            'Unrelated changes are avoided.',
        },
        {
          title: 'Validation evidence',
          description:
            'Tests, builds, screenshots, benchmarks, or other relevant evidence are included.',
        },
      ],
    },

    {
      title: 'Review Priorities',
      content:
        'Reviewers should prioritize correctness and risk before cosmetic preferences. A useful order is: security and data safety, correctness and business behavior, architectural risk, reliability and performance, tests, maintainability, and finally style preferences that automation cannot already enforce.',
      highlights: [
        {
          title: 'High priority',
          description:
            'Security, data corruption, correctness, and severe reliability risks.',
        },
        {
          title: 'Medium priority',
          description:
            'Maintainability, performance, testing gaps, and architectural concerns.',
        },
        {
          title: 'Low priority',
          description:
            'Personal style preferences that do not materially affect the system.',
        },
      ],
    },

    {
      title: 'Code Review and Architecture',
      content:
        'Reviewers should consider whether a change fits existing architecture and whether it introduces unnecessary coupling, duplication, inappropriate dependencies, or unclear ownership. Larger architectural decisions may require a separate design discussion rather than being debated entirely inside a code review.',
      highlights: [
        {
          title: 'Fit',
          description:
            'Does the change align with existing architectural boundaries?',
        },
        {
          title: 'Coupling',
          description:
            'Does the change create unnecessary dependency between components?',
        },
        {
          title: 'Scope',
          description:
            'Should a larger architectural issue be discussed outside the PR?',
        },
      ],
    },

    {
      title: 'Code Review and Security',
      content:
        'Security should be considered according to the system’s risk profile. Reviewers may examine authorization, authentication, secrets, input validation, injection risks, sensitive data exposure, dependency vulnerabilities, insecure defaults, logging of sensitive information, and access-control boundaries.',
      highlights: [
        {
          title: 'Authorization',
          description:
            'Verify that users can access only what they are permitted to access.',
        },
        {
          title: 'Sensitive data',
          description:
            'Check that confidential information is handled and logged appropriately.',
        },
        {
          title: 'Input handling',
          description:
            'Look for unsafe assumptions about external or user-controlled input.',
        },
      ],
    },

    {
      title: 'Code Review and Testing',
      content:
        'A reviewer should ask whether the change has enough validation for its risk. This does not mean every line needs a new test. The goal is to ensure important behavior, edge cases, regressions, and failure scenarios are adequately covered.',
      highlights: [
        {
          title: 'Coverage',
          description:
            'Important behavior should have appropriate validation.',
        },
        {
          title: 'Regression',
          description:
            'Existing behavior should remain protected where relevant.',
        },
        {
          title: 'Failure paths',
          description:
            'Important errors and edge cases should not be ignored.',
        },
      ],
    },

    {
      title: 'Code Review and Performance',
      content:
        'Performance review should focus on meaningful risks rather than premature optimization. Reviewers can look for expensive database queries, unnecessary network calls, inefficient loops, excessive memory usage, unbounded operations, synchronization bottlenecks, and other issues that matter at the expected scale.',
      highlights: [
        {
          title: 'Expected workload',
          description:
            'Evaluate performance against realistic usage and scale.',
        },
        {
          title: 'Bottleneck',
          description:
            'Focus on changes likely to create meaningful performance problems.',
        },
        {
          title: 'Measurement',
          description:
            'Use profiling, benchmarks, or production evidence when performance is important.',
        },
      ],
    },

    {
      title: 'Code Review and Observability',
      content:
        'Production-facing changes should have appropriate operational visibility. Depending on the system, this may include structured logs, metrics, traces, dashboards, alerts, correlation identifiers, and meaningful error reporting.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Provide useful diagnostic context without exposing sensitive data.',
        },
        {
          title: 'Metrics',
          description:
            'Measure important system or business behavior.',
        },
        {
          title: 'Tracing',
          description:
            'Help diagnose behavior across distributed services.',
        },
      ],
    },

    {
      title: 'Code Review and Error Handling',
      content:
        'Reviewers should check whether failures are handled intentionally. This includes appropriate error propagation, useful user-facing behavior, retry boundaries, timeout handling, cleanup, partial failure behavior, and avoiding silent failures.',
      highlights: [
        {
          title: 'Explicit failure',
          description:
            'Important failures should not disappear silently.',
        },
        {
          title: 'Recovery',
          description:
            'Where appropriate, the system should recover or degrade gracefully.',
        },
        {
          title: 'Context',
          description:
            'Errors should contain enough information to support diagnosis without leaking sensitive information.',
        },
      ],
    },

    {
      title: 'Code Review and API Contracts',
      content:
        'Changes to APIs require special attention because other systems may depend on the existing contract. Reviewers should consider request validation, response compatibility, status codes, authentication, authorization, versioning, idempotency, error behavior, and backward compatibility.',
      highlights: [
        {
          title: 'Contract',
          description:
            'Verify that the externally visible API behavior remains correct.',
        },
        {
          title: 'Compatibility',
          description:
            'Consider the effect on existing consumers.',
        },
        {
          title: 'Migration',
          description:
            'Plan coordinated changes when the contract cannot remain backward compatible.',
        },
      ],
    },

    {
      title: 'Code Review and Database Changes',
      content:
        'Database changes should be reviewed for correctness, data integrity, performance, migration safety, backward compatibility, indexing, locking, rollback strategy, and production scale. A migration that works locally may still be dangerous on a large production dataset.',
      highlights: [
        {
          title: 'Data integrity',
          description:
            'Protect the correctness of stored information.',
        },
        {
          title: 'Migration safety',
          description:
            'Consider how the change behaves during deployment and rollback.',
        },
        {
          title: 'Scale',
          description:
            'Evaluate query and migration cost against production data volume.',
        },
      ],
    },

    {
      title: 'Code Review and Technical Debt',
      content:
        'Code Review can identify new technical debt, but reviewers should avoid turning every PR into a complete refactoring exercise. If an existing problem is outside the scope of the change, record it separately unless leaving it untouched creates unacceptable risk.',
      highlights: [
        {
          title: 'Scope control',
          description:
            'Keep the PR focused on the intended outcome.',
        },
        {
          title: 'Debt visibility',
          description:
            'Capture important unrelated debt so it is not forgotten.',
        },
        {
          title: 'Risk threshold',
          description:
            'Address adjacent problems immediately when ignoring them would create unacceptable risk.',
        },
      ],
    },

    {
      title: 'Review Comments',
      content:
        'Useful review comments are specific, respectful, and actionable. They explain the concern and, when appropriate, why it matters. Reviewers should distinguish blocking issues from suggestions and avoid making comments that are primarily about personal preference.',
      highlights: [
        {
          title: 'Specific',
          description:
            'Point to the exact concern.',
        },
        {
          title: 'Actionable',
          description:
            'Give the author enough context to understand what needs attention.',
        },
        {
          title: 'Respectful',
          description:
            'Critique the code or decision rather than the person.',
        },
        {
          title: 'Priority-aware',
          description:
            'Clearly distinguish blockers from optional suggestions.',
        },
      ],
    },

    {
      title: 'Good vs Bad Review Comment',
      content:
        'Weak: “This is bad.” Better: “Could we validate the authorization check before loading the record? As written, a user who knows the record identifier may be able to access another customer’s data.” The second comment identifies the concern, explains the risk, and points toward the required behavior.',
      highlights: [
        {
          title: 'Weak comment',
          description:
            'Personal judgment without technical context.',
        },
        {
          title: 'Strong comment',
          description:
            'Specific concern plus impact and suggested direction.',
        },
      ],
    },

    {
      title: 'Blocking vs Non-Blocking Comments',
      content:
        'Not every issue should block a merge. A security vulnerability, data corruption risk, broken requirement, or serious production reliability issue may be blocking. A naming preference or optional refactoring suggestion generally should not block delivery.',
      highlights: [
        {
          title: 'Blocking',
          description:
            'The change should not merge until the concern is addressed or explicitly resolved.',
        },
        {
          title: 'Non-blocking',
          description:
            'Useful improvement that does not justify stopping delivery.',
        },
        {
          title: 'Judgment',
          description:
            'The severity should be based on impact rather than reviewer preference.',
        },
      ],
    },

    {
      title: 'Review Ownership',
      content:
        'Teams should define who reviews important changes based on code ownership, system knowledge, risk, and organizational structure. Critical systems may require multiple reviewers or specialized review for security, architecture, data, or compliance.',
      highlights: [
        {
          title: 'Ownership',
          description:
            'Relevant domain owners should understand important changes to their area.',
        },
        {
          title: 'Risk',
          description:
            'Higher-risk changes may require additional expertise.',
        },
        {
          title: 'Knowledge distribution',
          description:
            'Review participation should avoid creating a single point of knowledge dependency.',
        },
      ],
    },

    {
      title: 'Code Review and Team Culture',
      content:
        'Healthy review culture encourages questions, learning, and respectful disagreement. Reviewers should be willing to explain reasoning, and authors should be able to challenge feedback constructively. The objective is collective ownership of the codebase.',
      highlights: [
        {
          title: 'Psychological safety',
          description:
            'Engineers should be able to discuss technical concerns without personal attacks.',
        },
        {
          title: 'Learning',
          description:
            'Reviews can teach patterns and system context.',
        },
        {
          title: 'Collective ownership',
          description:
            'The team shares responsibility for software quality.',
        },
      ],
    },

    {
      title: 'Code Review Bottlenecks',
      content:
        'Code review can become a delivery bottleneck when PRs are too large, reviewer ownership is unclear, reviewers are overloaded, standards are inconsistent, or teams require unnecessary approval layers. Effective teams use automation, clear ownership, small changes, and appropriate review depth to maintain flow.',
      highlights: [
        {
          title: 'Large PRs',
          description:
            'Increase review effort and delay feedback.',
        },
        {
          title: 'Reviewer overload',
          description:
            'Creates queues and slows delivery.',
        },
        {
          title: 'Excessive approvals',
          description:
            'Can create process overhead without proportional risk reduction.',
        },
      ],
    },

    {
      title: 'Review Depth Should Match Risk',
      content:
        'Not every change deserves the same review process. A documentation typo, low-risk UI text change, payment authorization change, database migration, and security-sensitive infrastructure modification have very different risk profiles. Review depth should scale with potential impact.',
      highlights: [
        {
          title: 'Low risk',
          description:
            'Lightweight review and automated validation may be sufficient.',
        },
        {
          title: 'High risk',
          description:
            'More expertise, testing, design review, or approval may be appropriate.',
        },
        {
          title: 'Risk-based governance',
          description:
            'Process should protect important outcomes without unnecessarily slowing low-risk work.',
        },
      ],
    },

    {
      title: 'Code Review in CI/CD',
      content:
        'Modern delivery pipelines commonly combine pull-request review with automated CI. The PR may trigger compilation, unit tests, integration tests, linting, type checking, security scans, and other quality checks before merge.',
      highlights: [
        {
          title: 'Pre-merge validation',
          description:
            'Problems can be detected before code enters the shared branch.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Required checks can be enforced consistently.',
        },
        {
          title: 'Fast feedback',
          description:
            'Developers receive validation close to the time they make the change.',
        },
      ],
    },

    {
      title: 'AI-Assisted Code Review',
      content:
        'AI tools can help review code by identifying potential defects, explaining unfamiliar code, suggesting tests, detecting patterns, and summarizing changes. However, AI review should complement rather than replace human engineering judgment, especially for security, architecture, business logic, and high-risk changes.',
      highlights: [
        {
          title: 'Automation',
          description:
            'AI can increase review coverage and speed.',
        },
        {
          title: 'Human judgment',
          description:
            'People remain responsible for context, architecture, risk, and final decisions.',
        },
        {
          title: 'False positives',
          description:
            'AI suggestions may be incorrect or irrelevant and must be evaluated.',
        },
      ],
    },

    {
      title: 'Code Review for AI Systems',
      content:
        'AI code reviews should consider more than conventional software correctness. Reviewers may need to inspect prompts, model configuration, evaluation logic, retrieval behavior, data handling, safety controls, fallback logic, cost implications, latency, provider dependencies, and observability.',
      highlights: [
        {
          title: 'Evaluation',
          description:
            'Check whether AI behavior is measured appropriately.',
        },
        {
          title: 'Safety',
          description:
            'Check safeguards and failure behavior.',
        },
        {
          title: 'Cost',
          description:
            'Consider token usage, model selection, inference frequency, and infrastructure implications.',
        },
        {
          title: 'Vendor dependency',
          description:
            'Understand coupling to external AI providers.',
        },
      ],
    },

    {
      title: 'RAG Code Review',
      content:
        'For RAG systems, reviewers should consider document ingestion, chunking, metadata, embedding generation, retrieval filters, authorization, prompt construction, source attribution, evaluation, caching, latency, and fallback behavior. A technically correct retrieval implementation can still be unsafe if authorization boundaries are missing.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Check relevance and filtering behavior.',
        },
        {
          title: 'Authorization',
          description:
            'Ensure retrieved information respects access boundaries.',
        },
        {
          title: 'Grounding',
          description:
            'Check how retrieved context is incorporated into responses.',
        },
        {
          title: 'Evaluation',
          description:
            'Ensure changes can be measured against representative datasets.',
        },
      ],
    },

    {
      title: 'Code Review for Distributed Systems',
      content:
        'Distributed-system changes require attention to retries, timeouts, idempotency, consistency, concurrency, partial failures, message ordering, duplicate delivery, backpressure, observability, and failure recovery. A change that works in a local single-process environment may behave differently under distributed conditions.',
      highlights: [
        {
          title: 'Partial failure',
          description:
            'One component may fail while others continue operating.',
        },
        {
          title: 'Idempotency',
          description:
            'Repeated operations should not unintentionally create repeated effects where idempotency is required.',
        },
        {
          title: 'Timeouts',
          description:
            'Remote calls should not wait indefinitely.',
        },
        {
          title: 'Observability',
          description:
            'Distributed behavior needs sufficient logs, metrics, and traces for diagnosis.',
        },
      ],
    },

    {
      title: 'Metrics for Code Review',
      content:
        'Code review effectiveness should not be measured only by the number of comments or lines reviewed. Useful engineering metrics include review turnaround time, review wait time, change lead time, change failure rate, escaped defects, rework, and developer experience. Metrics should be used to improve the system rather than punish individuals.',
      highlights: [
        {
          title: 'Review turnaround',
          description:
            'Measures how quickly reviews receive useful feedback.',
        },
        {
          title: 'Lead time',
          description:
            'Shows how review practices affect overall delivery flow.',
        },
        {
          title: 'Quality outcome',
          description:
            'Look at defects and production outcomes rather than comment volume alone.',
        },
      ],
    },

    {
      title: 'What Managers Should Avoid',
      content:
        'Engineering leaders should avoid using code review as a mechanism for micromanagement, requiring every decision to pass through one person, measuring engineers by comment counts, blocking changes over subjective preferences, or creating excessive approval layers.',
      highlights: [
        {
          title: 'Micromanagement',
          description:
            'Do not turn review into control over every implementation detail.',
        },
        {
          title: 'Single reviewer dependency',
          description:
            'Avoid creating a bottleneck around one senior engineer.',
        },
        {
          title: 'Comment metrics',
          description:
            'Comment volume is not a reliable measure of review quality.',
        },
      ],
    },

    {
      title: 'Code Review for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, Code Review is less about personally reviewing every line and more about creating a healthy engineering quality system. The leader should establish appropriate review standards, automate mechanical checks, define ownership, scale review depth according to risk, remove bottlenecks, and ensure the culture remains collaborative.',
      highlights: [
        {
          title: 'Engineering system',
          description:
            'Design a repeatable review process rather than depending on individual heroics.',
        },
        {
          title: 'Risk management',
          description:
            'Increase review depth where the potential impact is high.',
        },
        {
          title: 'Developer experience',
          description:
            'Keep feedback fast enough to preserve engineering flow.',
        },
        {
          title: 'Team growth',
          description:
            'Use review as a mechanism for knowledge sharing and mentorship.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Code Review? What do you look for during a review? How do you review a large PR? How do you handle disagreement with a developer? How do you prevent code review from becoming a bottleneck? What should be automated versus manually reviewed? How do you review security-sensitive changes? How would you review AI or RAG code? How do you measure code review effectiveness?',
      highlights: [
        {
          title: 'Review approach',
          description:
            'Explain how you prioritize correctness, risk, maintainability, and tests.',
        },
        {
          title: 'Conflict',
          description:
            'Show that disagreements are resolved through evidence and shared goals.',
        },
        {
          title: 'Leadership',
          description:
            'Explain how you build a scalable review process rather than personally becoming the bottleneck.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I treat code review as both a quality control mechanism and a knowledge-sharing practice. I first look at whether the change solves the intended problem, then I focus on correctness, security, architecture, failure handling, tests, performance, observability, and maintainability based on the risk of the change. I prefer automation for formatting, linting, type checks, tests, and repeatable static analysis so reviewers can focus on judgment and design. I also encourage small PRs and clear ownership because review quality drops when changes become too large or reviews become bottlenecks. As a leader, I would not measure review quality by comment count. I would look at review turnaround, delivery flow, escaped defects, change failure rate, and developer experience. For AI systems, I additionally review evaluation, safety, model and vendor dependencies, data handling, cost, latency, and fallback behavior.”',
      highlights: [
        {
          title: 'Risk-based review',
          description:
            'Match review depth to potential impact.',
        },
        {
          title: 'Automation',
          description:
            'Automate mechanical checks.',
        },
        {
          title: 'Leadership',
          description:
            'Build a scalable process without creating unnecessary bottlenecks.',
        },
        {
          title: 'AI awareness',
          description:
            'Include evaluation, safety, cost, latency, and data considerations.',
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

export default codeReviewKnowledge
