import type { KnowledgeDefinition } from './knowledge'

export const developerExperienceKnowledge: KnowledgeDefinition = {
  technologyId: 'developer-experience',
  slug: 'developer-experience',
  title: 'Developer Experience',
  summary:
    'Developer Experience (DevEx) is the overall experience engineers have while building, testing, deploying, operating, and maintaining software. Strong DevEx reduces friction, improves feedback loops, and enables teams to deliver quality software more effectively.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Developer Experience?',
      content:
        'Developer Experience, commonly called DevEx, describes how easy or difficult it is for engineers to do their work effectively. It includes local development, documentation, tooling, CI/CD, environments, testing, debugging, deployment, collaboration, and the internal platforms that support engineering teams.',
      highlights: [
        {
          title: 'Developer productivity',
          description:
            'Helps engineers spend more time solving meaningful problems and less time fighting unnecessary friction.',
        },
        {
          title: 'Feedback loops',
          description:
            'Fast and trustworthy feedback helps engineers make better decisions quickly.',
        },
        {
          title: 'Engineering environment',
          description:
            'Tools, processes, platforms, documentation, and culture all contribute to DevEx.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a professional kitchen. Great chefs can still struggle if ingredients are difficult to find, equipment is unreliable, recipes are unclear, and every order requires manual paperwork. A well-designed kitchen removes unnecessary friction so chefs can focus on cooking. DevEx does the same for software engineers.',
      highlights: [
        {
          title: 'Tools',
          description:
            'Reliable development tools are like reliable kitchen equipment.',
        },
        {
          title: 'Processes',
          description:
            'Simple workflows are like a well-organized kitchen layout.',
        },
        {
          title: 'Developer focus',
          description:
            'Less operational friction means more time for meaningful engineering work.',
        },
      ],
    },

    {
      title: 'Why DevEx Matters',
      content:
        'Engineering teams operate inside a system of tools, dependencies, environments, approvals, documentation, and organizational processes. Small amounts of friction repeated thousands of times can become a major productivity and morale problem. Improving DevEx can therefore create significant leverage across an engineering organization.',
      highlights: [
        {
          title: 'Time savings',
          description:
            'Removing repeated friction can recover substantial engineering capacity.',
        },
        {
          title: 'Quality',
          description:
            'Better tooling and feedback can make correct engineering practices easier to follow.',
        },
        {
          title: 'Retention',
          description:
            'A frustrating engineering environment can contribute to dissatisfaction and burnout.',
        },
      ],
    },

    {
      title: 'DevEx vs Developer Productivity',
      content:
        'DevEx and developer productivity are related but not identical. DevEx focuses on the experience and conditions surrounding engineering work. Productivity focuses more broadly on the value and outcomes produced by that work. Improving DevEx should ultimately support better outcomes rather than simply making developers appear busier.',
      highlights: [
        {
          title: 'DevEx',
          description:
            'Measures and improves the conditions in which engineers work.',
        },
        {
          title: 'Productivity',
          description:
            'Looks at how effectively engineering effort creates useful outcomes.',
        },
        {
          title: 'Connection',
          description:
            'Better developer experience can improve flow, quality, and delivery outcomes.',
        },
      ],
    },

    {
      title: 'Three Core DevEx Dimensions',
      content:
        'A useful way to think about DevEx is through three broad dimensions: feedback, cognitive load, and flow. Feedback is how quickly engineers learn whether something worked. Cognitive load is how much unnecessary complexity they must hold in their heads. Flow is how easily work moves from idea to production.',
      highlights: [
        {
          title: 'Feedback',
          description:
            'How quickly and reliably does the system tell developers what happened?',
        },
        {
          title: 'Cognitive load',
          description:
            'How much unnecessary complexity must developers understand to perform a task?',
        },
        {
          title: 'Flow',
          description:
            'How easily can engineers move work through development and delivery?',
        },
      ],
    },

    {
      title: 'Feedback Loops',
      content:
        'A feedback loop is the time between an engineering action and receiving useful information about its result. Examples include test execution, CI builds, code review, deployment validation, and production observability. Short, trustworthy feedback loops allow engineers to correct mistakes quickly.',
      highlights: [
        {
          title: 'Local feedback',
          description:
            'Tests and tooling should provide useful results during development.',
        },
        {
          title: 'CI feedback',
          description:
            'Automated pipelines should quickly identify problems before merge or release.',
        },
        {
          title: 'Production feedback',
          description:
            'Observability shows whether changes behave correctly after deployment.',
        },
      ],
    },

    {
      title: 'Cognitive Load',
      content:
        'Cognitive load is the amount of mental effort required to understand and perform a task. Developers experience unnecessary cognitive load when systems are poorly documented, tools are inconsistent, architecture is unclear, or important information is scattered across many places.',
      highlights: [
        {
          title: 'Complexity',
          description:
            'Unnecessary architectural or process complexity increases mental effort.',
        },
        {
          title: 'Documentation',
          description:
            'Good documentation reduces the need to rediscover information.',
        },
        {
          title: 'Consistency',
          description:
            'Consistent tools and patterns make systems easier to understand.',
        },
      ],
    },

    {
      title: 'Developer Flow',
      content:
        'Developer flow describes the ability to move continuously through engineering work without unnecessary interruptions or waiting. Common flow blockers include slow CI, unclear requirements, environment failures, dependency delays, long reviews, manual approvals, and unstable tooling.',
      highlights: [
        {
          title: 'Waiting',
          description:
            'Time spent waiting for builds, reviews, environments, or dependencies reduces flow.',
        },
        {
          title: 'Interruptions',
          description:
            'Frequent context switching makes focused engineering harder.',
        },
        {
          title: 'Flow efficiency',
          description:
            'Reducing unnecessary queues and handoffs improves delivery.',
        },
      ],
    },

    {
      title: 'Local Development Environment',
      content:
        'A good local development environment allows engineers to clone a project, install dependencies, configure required services, run the application, execute tests, and begin making changes with minimal friction. Reproducible setup is especially important as teams grow.',
      highlights: [
        {
          title: 'Setup time',
          description:
            'New developers should be able to become productive without excessive manual configuration.',
        },
        {
          title: 'Consistency',
          description:
            'Developers should experience predictable environments.',
        },
        {
          title: 'Documentation',
          description:
            'Setup instructions should be current, tested, and easy to follow.',
        },
      ],
    },

    {
      title: 'Developer Onboarding',
      content:
        'Developer onboarding is the process of helping a new engineer become productive. Strong onboarding covers access, local setup, architecture, workflows, documentation, development standards, deployment, debugging, and team context.',
      highlights: [
        {
          title: 'Time to first contribution',
          description:
            'How quickly can a new engineer make a meaningful change?',
        },
        {
          title: 'Access',
          description:
            'Required systems, repositories, environments, and credentials should be provisioned efficiently.',
        },
        {
          title: 'Knowledge',
          description:
            'New engineers need enough context to understand how the system works and how the team operates.',
        },
      ],
    },

    {
      title: 'Documentation as DevEx',
      content:
        'Documentation is part of the developer interface to a system. Good documentation helps engineers understand architecture, APIs, setup, troubleshooting, deployment, operational procedures, and common decisions without repeatedly asking another engineer.',
      highlights: [
        {
          title: 'Discoverability',
          description:
            'Engineers should know where to find important information.',
        },
        {
          title: 'Accuracy',
          description:
            'Outdated documentation creates more friction than missing documentation.',
        },
        {
          title: 'Actionability',
          description:
            'Instructions should help developers complete real tasks.',
        },
      ],
    },

    {
      title: 'Internal Developer Platform',
      content:
        'An Internal Developer Platform provides reusable capabilities that allow engineers to build, deploy, operate, and manage services without repeatedly solving infrastructure problems from scratch. It can provide templates, deployment workflows, environments, observability, secrets integration, and standardized infrastructure.',
      highlights: [
        {
          title: 'Self-service',
          description:
            'Developers can perform common tasks without waiting for another team.',
        },
        {
          title: 'Golden paths',
          description:
            'Recommended workflows make common engineering tasks easier and safer.',
        },
        {
          title: 'Platform leverage',
          description:
            'One platform improvement can benefit many engineering teams.',
        },
      ],
    },

    {
      title: 'Golden Paths',
      content:
        'A Golden Path is a recommended, supported way to accomplish a common engineering task. It provides defaults and automation without necessarily preventing teams from using alternative approaches when justified.',
      highlights: [
        {
          title: 'Recommended',
          description:
            'Provides a proven default path for common scenarios.',
        },
        {
          title: 'Self-service',
          description:
            'Allows developers to move without unnecessary platform-team intervention.',
        },
        {
          title: 'Guardrails',
          description:
            'Makes secure and reliable practices easier to follow.',
        },
      ],
    },

    {
      title: 'Developer Portals',
      content:
        'A developer portal provides a central interface for discovering services, documentation, ownership, APIs, environments, operational information, and engineering workflows. The goal is to reduce information fragmentation.',
      highlights: [
        {
          title: 'Discoverability',
          description:
            'Engineers can find services and resources more easily.',
        },
        {
          title: 'Ownership',
          description:
            'Teams and services can have clear ownership information.',
        },
        {
          title: 'Operational context',
          description:
            'Links to dashboards, logs, documentation, and deployment information can be centralized.',
        },
      ],
    },

    {
      title: 'CI/CD and DevEx',
      content:
        'CI/CD is a major part of DevEx because engineers interact with delivery pipelines frequently. Fast builds, reliable tests, clear failures, good caching, parallel execution, and self-service deployment workflows reduce delivery friction.',
      highlights: [
        {
          title: 'Build speed',
          description:
            'Faster builds shorten feedback loops.',
        },
        {
          title: 'Reliability',
          description:
            'Unstable pipelines create false failures and reduce trust.',
        },
        {
          title: 'Self-service',
          description:
            'Developers should be able to perform standard delivery actions safely.',
        },
      ],
    },

    {
      title: 'CI Pipeline Performance',
      content:
        'CI pipeline performance directly affects developer feedback. Teams can improve it through dependency caching, parallel execution, incremental builds, test selection, efficient infrastructure, and removing unnecessary stages while preserving appropriate quality gates.',
      highlights: [
        {
          title: 'Duration',
          description:
            'Track how long common CI workflows take.',
        },
        {
          title: 'Queue time',
          description:
            'Separate waiting for a runner from actual execution time.',
        },
        {
          title: 'Optimization',
          description:
            'Focus on the stages that consume the most time and provide the least value.',
        },
      ],
    },

    {
      title: 'Test Performance and DevEx',
      content:
        'Slow or flaky tests are one of the most common DevEx problems. Engineers may avoid running them locally or begin ignoring CI failures. Test suites should therefore be designed for fast feedback, useful diagnostics, isolation, and reliable execution.',
      highlights: [
        {
          title: 'Execution time',
          description:
            'Fast feedback improves the development loop.',
        },
        {
          title: 'Flakiness',
          description:
            'Unreliable tests reduce trust.',
        },
        {
          title: 'Diagnostics',
          description:
            'Clear failure evidence reduces investigation time.',
        },
      ],
    },

    {
      title: 'Developer Tooling',
      content:
        'Developer tooling includes command-line tools, IDE integrations, code generators, linters, formatters, debugging tools, deployment tools, API clients, and internal utilities. Good tooling removes repetitive work while maintaining transparency and control.',
      highlights: [
        {
          title: 'Automation',
          description:
            'Automate repetitive engineering tasks.',
        },
        {
          title: 'Consistency',
          description:
            'Standard tools can reduce differences between developers.',
        },
        {
          title: 'Discoverability',
          description:
            'Tools should be easy to learn and find.',
        },
      ],
    },

    {
      title: 'CLI and Developer Experience',
      content:
        'A well-designed command-line interface can simplify common workflows such as creating services, running tests, checking deployments, viewing logs, managing environments, and generating project scaffolding. Commands should be predictable and provide useful errors.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Command structure and naming should be predictable.',
        },
        {
          title: 'Error messages',
          description:
            'Failures should explain what went wrong and what to do next.',
        },
        {
          title: 'Self-service',
          description:
            'Common workflows can be performed without manual platform intervention.',
        },
      ],
    },

    {
      title: 'Infrastructure as Code and DevEx',
      content:
        'Infrastructure as Code improves DevEx by making infrastructure configuration repeatable, reviewable, and reproducible. Engineers can create or modify environments using version-controlled definitions rather than relying on undocumented manual steps.',
      highlights: [
        {
          title: 'Reproducibility',
          description:
            'Environments can be recreated consistently.',
        },
        {
          title: 'Version control',
          description:
            'Infrastructure changes can be reviewed and audited.',
        },
        {
          title: 'Automation',
          description:
            'Common infrastructure workflows can become self-service.',
        },
      ],
    },

    {
      title: 'Containers and DevEx',
      content:
        'Containers can reduce environment differences by packaging applications with their runtime dependencies. They can make local development, testing, and deployment more consistent when used appropriately.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Reduce differences between development and deployment environments.',
        },
        {
          title: 'Isolation',
          description:
            'Services can run with controlled dependencies.',
        },
        {
          title: 'Reproducibility',
          description:
            'Container definitions can be version controlled and shared.',
        },
      ],
    },

    {
      title: 'Environment Management',
      content:
        'Developers often need multiple environments such as local, development, test, staging, and production. DevEx improves when environments are predictable, easy to provision, clearly differentiated, and appropriately isolated.',
      highlights: [
        {
          title: 'Provisioning',
          description:
            'Environment creation should be automated where practical.',
        },
        {
          title: 'Configuration',
          description:
            'Environment-specific configuration should be explicit and controlled.',
        },
        {
          title: 'Parity',
          description:
            'Important production characteristics should be represented in relevant lower environments.',
        },
      ],
    },

    {
      title: 'Secrets Management',
      content:
        'Developers need access to credentials and secrets without exposing them in source code or documentation. Good DevEx provides secure mechanisms for local development, CI/CD, and runtime environments while minimizing manual secret handling.',
      highlights: [
        {
          title: 'Security',
          description:
            'Secrets should not be committed to source control.',
        },
        {
          title: 'Developer usability',
          description:
            'Secure access should also be convenient enough that developers do not create unsafe workarounds.',
        },
        {
          title: 'Rotation',
          description:
            'Credential lifecycle should be manageable without unnecessary developer disruption.',
        },
      ],
    },

    {
      title: 'Observability and DevEx',
      content:
        'Developers need visibility into the behavior of the systems they build. Easy access to logs, metrics, traces, dashboards, and deployment information makes debugging and incident investigation significantly easier.',
      highlights: [
        {
          title: 'Debugging',
          description:
            'Observability reduces the time needed to understand failures.',
        },
        {
          title: 'Ownership',
          description:
            'Teams can investigate their own services more effectively.',
        },
        {
          title: 'Feedback',
          description:
            'Production behavior becomes part of the engineering feedback loop.',
        },
      ],
    },

    {
      title: 'Local Observability',
      content:
        'Local observability means developers can inspect relevant application behavior during development. Useful capabilities include structured logs, request IDs, debug modes, local metrics, trace visibility, and predictable error reporting.',
      highlights: [
        {
          title: 'Fast diagnosis',
          description:
            'Developers can investigate problems before committing changes.',
        },
        {
          title: 'Consistency',
          description:
            'Similar diagnostic concepts should exist across environments.',
        },
        {
          title: 'Context',
          description:
            'Useful logs and traces should provide enough information to explain behavior.',
        },
      ],
    },

    {
      title: 'Error Messages',
      content:
        'Good developer-facing error messages explain what happened, where it happened, and what action may resolve the problem. Poor error messages increase cognitive load and force engineers to search through unrelated systems.',
      highlights: [
        {
          title: 'Clarity',
          description:
            'Describe the failure in understandable language.',
        },
        {
          title: 'Context',
          description:
            'Include relevant identifiers, operation details, or links where appropriate.',
        },
        {
          title: 'Actionability',
          description:
            'Help the developer understand what to try next.',
        },
      ],
    },

    {
      title: 'Documentation Discoverability',
      content:
        'A large documentation library is not automatically good DevEx. Engineers need to find the right information quickly. Search, clear ownership, consistent structure, links between related documents, and current examples improve discoverability.',
      highlights: [
        {
          title: 'Search',
          description:
            'Information should be easy to locate.',
        },
        {
          title: 'Structure',
          description:
            'Consistent documentation organization reduces cognitive effort.',
        },
        {
          title: 'Ownership',
          description:
            'Someone should be responsible for important documentation remaining useful.',
        },
      ],
    },

    {
      title: 'Architecture and Cognitive Load',
      content:
        'Architecture directly affects DevEx. Excessive service boundaries, inconsistent patterns, unclear ownership, and duplicated infrastructure can make everyday engineering work harder. Architectural simplicity is therefore also a developer-experience concern.',
      highlights: [
        {
          title: 'Complexity',
          description:
            'Every additional component creates more concepts and interactions developers may need to understand.',
        },
        {
          title: 'Consistency',
          description:
            'Standard patterns reduce mental overhead.',
        },
        {
          title: 'Boundaries',
          description:
            'Service boundaries should provide meaningful value rather than unnecessary fragmentation.',
        },
      ],
    },

    {
      title: 'API Design and DevEx',
      content:
        'APIs are interfaces that developers use. Consistent naming, predictable behavior, useful errors, documentation, authentication patterns, versioning, and examples all influence the developer experience of consuming an API.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Similar operations should behave similarly.',
        },
        {
          title: 'Documentation',
          description:
            'Developers need clear examples and expected behavior.',
        },
        {
          title: 'Error handling',
          description:
            'Predictable errors make integrations easier to debug.',
        },
      ],
    },

    {
      title: 'Code Review and DevEx',
      content:
        'Code review can improve quality and knowledge sharing, but slow or unnecessarily complicated review processes create delivery friction. DevEx improves when review expectations are clear, changes are reasonably sized, feedback is actionable, and turnaround time is predictable.',
      highlights: [
        {
          title: 'Turnaround',
          description:
            'Long review queues increase cycle time.',
        },
        {
          title: 'Quality',
          description:
            'Reviews should focus on meaningful correctness, maintainability, security, and design concerns.',
        },
        {
          title: 'Learning',
          description:
            'Good reviews transfer knowledge across the team.',
        },
      ],
    },

    {
      title: 'Developer Self-Service',
      content:
        'Self-service allows developers to perform common tasks without opening tickets or waiting for another team. Examples include creating environments, provisioning databases, deploying services, viewing logs, requesting approved resources, and creating standard projects.',
      highlights: [
        {
          title: 'Speed',
          description:
            'Reduces waiting and handoffs.',
        },
        {
          title: 'Autonomy',
          description:
            'Developers can move independently within defined guardrails.',
        },
        {
          title: 'Consistency',
          description:
            'Standard workflows reduce configuration mistakes.',
        },
      ],
    },

    {
      title: 'Platform Engineering',
      content:
        'Platform Engineering treats internal developer infrastructure as a product. Platform teams build capabilities that make it easier for application teams to deliver software while hiding unnecessary infrastructure complexity without removing useful control.',
      highlights: [
        {
          title: 'Internal product',
          description:
            'The platform should be designed around developer needs.',
        },
        {
          title: 'Golden paths',
          description:
            'Provide supported ways to accomplish common tasks.',
        },
        {
          title: 'Platform adoption',
          description:
            'A technically excellent platform is unsuccessful if developers do not find it useful.',
        },
      ],
    },

    {
      title: 'Platform as a Product',
      content:
        'Internal platforms should be managed like products: understand users, identify pain points, define outcomes, prioritize capabilities, measure adoption, collect feedback, and continuously improve. The developers using the platform are its customers.',
      highlights: [
        {
          title: 'User research',
          description:
            'Understand real developer problems before building platform features.',
        },
        {
          title: 'Adoption',
          description:
            'Measure whether developers actually use the platform.',
        },
        {
          title: 'Outcome',
          description:
            'Focus on reduced friction and improved delivery rather than feature count.',
        },
      ],
    },

    {
      title: 'DevEx Metrics',
      content:
        'Useful DevEx metrics include build duration, CI queue time, test execution time, environment provisioning time, deployment time, local setup time, code-review turnaround, documentation search success, platform adoption, developer satisfaction, and developer-reported friction.',
      highlights: [
        {
          title: 'Speed',
          description:
            'Measure important engineering feedback and waiting times.',
        },
        {
          title: 'Reliability',
          description:
            'Measure flaky pipelines, failed builds, and unstable tools.',
        },
        {
          title: 'Experience',
          description:
            'Combine system measurements with developer feedback.',
        },
      ],
    },

    {
      title: 'Developer Satisfaction',
      content:
        'Developer satisfaction provides qualitative insight into the engineering environment. Surveys and interviews can reveal pain points that system metrics cannot capture, but satisfaction should be combined with behavioral and operational evidence rather than treated as the only source of truth.',
      highlights: [
        {
          title: 'Survey',
          description:
            'Ask developers directly about friction and satisfaction.',
        },
        {
          title: 'Qualitative feedback',
          description:
            'Open-ended feedback can reveal unexpected problems.',
        },
        {
          title: 'Triangulation',
          description:
            'Compare perception with measurable system behavior.',
        },
      ],
    },

    {
      title: 'DevEx Scorecards',
      content:
        'A DevEx scorecard can combine engineering-system signals and developer feedback. A balanced scorecard might include CI duration, flaky-test rate, deployment friction, environment setup time, documentation health, platform adoption, and developer satisfaction.',
      highlights: [
        {
          title: 'Balanced view',
          description:
            'Combine quantitative and qualitative signals.',
        },
        {
          title: 'Trend',
          description:
            'Look for improvement or deterioration over time.',
        },
        {
          title: 'Action',
          description:
            'Each metric should lead to a meaningful improvement opportunity.',
        },
      ],
    },

    {
      title: 'DevEx and Engineering Metrics',
      content:
        'Engineering Metrics and DevEx overlap but answer different questions. Engineering metrics often evaluate delivery, reliability, and outcomes. DevEx focuses specifically on the conditions and friction experienced by engineers while producing those outcomes.',
      highlights: [
        {
          title: 'Engineering metrics',
          description:
            'Measure system and delivery performance.',
        },
        {
          title: 'DevEx metrics',
          description:
            'Measure developer friction and experience.',
        },
        {
          title: 'Connection',
          description:
            'DevEx improvements should contribute to healthier engineering outcomes.',
        },
      ],
    },

    {
      title: 'DevEx and Technical Debt',
      content:
        'Technical debt can directly damage DevEx by making systems harder to understand, change, test, and operate. Leaders should therefore treat important technical debt as a developer-experience problem when it repeatedly slows engineering work or increases failure risk.',
      highlights: [
        {
          title: 'Complexity',
          description:
            'Poorly maintained systems increase cognitive load.',
        },
        {
          title: 'Change cost',
          description:
            'Technical debt can make simple changes unexpectedly expensive.',
        },
        {
          title: 'Investment',
          description:
            'Debt reduction can improve both engineering health and delivery speed.',
        },
      ],
    },

    {
      title: 'DevEx and Testing',
      content:
        'Testing directly affects developer experience. Fast, deterministic, well-diagnosed automated tests create confidence. Slow, flaky, or difficult-to-debug tests create friction and can encourage engineers to avoid quality checks.',
      highlights: [
        {
          title: 'Fast tests',
          description:
            'Short feedback loops improve flow.',
        },
        {
          title: 'Reliable tests',
          description:
            'Stable signals increase trust.',
        },
        {
          title: 'Diagnostics',
          description:
            'Useful failure information reduces investigation time.',
        },
      ],
    },

    {
      title: 'DevEx and Observability',
      content:
        'When developers can easily access logs, metrics, traces, dashboards, deployment information, and service ownership, they can diagnose problems faster. Observability should therefore be designed as part of the developer experience rather than only as an operations concern.',
      highlights: [
        {
          title: 'Debugging',
          description:
            'Reduce time needed to understand failures.',
        },
        {
          title: 'Self-service',
          description:
            'Developers should be able to investigate common problems without unnecessary escalation.',
        },
        {
          title: 'Ownership',
          description:
            'Clear service ownership makes operational responsibility easier to understand.',
        },
      ],
    },

    {
      title: 'DevEx and Security',
      content:
        'Security controls should ideally be designed so secure behavior is also the easiest behavior. If security workflows are excessively difficult, developers may create unsafe workarounds. Good DevEx therefore combines security guardrails with usable self-service mechanisms.',
      highlights: [
        {
          title: 'Secure defaults',
          description:
            'Make safe behavior the default path.',
        },
        {
          title: 'Guardrails',
          description:
            'Prevent common mistakes without creating unnecessary friction.',
        },
        {
          title: 'Self-service',
          description:
            'Provide approved ways to perform legitimate engineering tasks.',
        },
      ],
    },

    {
      title: 'DevEx and AI',
      content:
        'AI can improve DevEx through code assistance, documentation search, incident summarization, test generation, code review support, onboarding assistance, and internal knowledge retrieval. However, AI tooling should be evaluated for accuracy, security, privacy, cost, and developer trust.',
      highlights: [
        {
          title: 'AI assistance',
          description:
            'Can reduce repetitive engineering work.',
        },
        {
          title: 'Knowledge access',
          description:
            'AI can help developers find information across large internal knowledge bases.',
        },
        {
          title: 'Trust',
          description:
            'Incorrect AI output can create more work, so verification remains important.',
        },
      ],
    },

    {
      title: 'AI Developer Assistant',
      content:
        'An internal AI developer assistant can provide code explanations, repository search, architecture guidance, documentation retrieval, troubleshooting assistance, and test suggestions. A useful implementation should be grounded in current organizational information and respect access-control boundaries.',
      highlights: [
        {
          title: 'Context',
          description:
            'Useful answers require relevant repository, documentation, and system context.',
        },
        {
          title: 'Groundedness',
          description:
            'Answers should be supported by trusted internal sources where possible.',
        },
        {
          title: 'Authorization',
          description:
            'Developers should only receive information they are permitted to access.',
        },
      ],
    },

    {
      title: 'DevEx for AI Engineering Teams',
      content:
        'AI engineering teams have additional DevEx concerns such as model access, prompt versioning, evaluation datasets, experiment tracking, vector databases, GPU or inference environments, observability, cost monitoring, and safe deployment workflows.',
      highlights: [
        {
          title: 'Experimentation',
          description:
            'Teams need efficient ways to compare prompts, models, retrieval strategies, and configurations.',
        },
        {
          title: 'Evaluation',
          description:
            'Automated evaluation should be easy to run as AI behavior changes.',
        },
        {
          title: 'Cost visibility',
          description:
            'Developers need visibility into model and infrastructure cost during development.',
        },
      ],
    },

    {
      title: 'DevEx for Remote Engineering Teams',
      content:
        'Remote teams depend heavily on digital workflows. Documentation, asynchronous communication, self-service tooling, reliable CI/CD, clear ownership, and accessible observability become especially important because developers cannot easily rely on physical proximity for information.',
      highlights: [
        {
          title: 'Async-first',
          description:
            'Important information should be discoverable without requiring a meeting.',
        },
        {
          title: 'Documentation',
          description:
            'Written context becomes a critical part of team infrastructure.',
        },
        {
          title: 'Self-service',
          description:
            'Remote engineers benefit strongly from systems that reduce dependency on individuals.',
        },
      ],
    },

    {
      title: 'DevEx and Organizational Design',
      content:
        'Team boundaries affect developer experience. Excessive dependencies between teams, unclear ownership, centralized approval bottlenecks, and fragmented platforms can slow engineering flow. Good organizational design makes common work easier while keeping ownership clear.',
      highlights: [
        {
          title: 'Dependencies',
          description:
            'Too many cross-team dependencies can create queues and waiting.',
        },
        {
          title: 'Ownership',
          description:
            'Clear ownership reduces ambiguity and escalation overhead.',
        },
        {
          title: 'Team topology',
          description:
            'Team structures should support effective software delivery and system ownership.',
        },
      ],
    },

    {
      title: 'DevEx and Change Management',
      content:
        'Engineering changes often require coordination across teams and systems. Good DevEx makes change processes predictable through automated checks, clear ownership, standard workflows, feature flags, safe deployment strategies, and reliable rollback mechanisms.',
      highlights: [
        {
          title: 'Predictability',
          description:
            'Engineers should understand how changes move through the system.',
        },
        {
          title: 'Safety',
          description:
            'Guardrails reduce the risk of deployment mistakes.',
        },
        {
          title: 'Recovery',
          description:
            'Rollback and recovery mechanisms should be accessible and tested.',
        },
      ],
    },

    {
      title: 'Measuring DevEx Improvement',
      content:
        'DevEx improvements should be evaluated through a combination of before-and-after measurements, developer feedback, workflow observations, and business or engineering outcomes. For example, reducing CI time from 20 minutes to 5 minutes is useful, but the organization should also check whether developers actually experience faster feedback and whether delivery flow improves.',
      highlights: [
        {
          title: 'Baseline',
          description:
            'Measure the current state before making major changes.',
        },
        {
          title: 'Outcome',
          description:
            'Check whether the intervention improved the intended problem.',
        },
        {
          title: 'Adoption',
          description:
            'Verify that developers actually use the new capability.',
        },
      ],
    },

    {
      title: 'Common DevEx Anti-Patterns',
      content:
        'Common mistakes include building internal tools without developer research, creating platforms that developers are forced to use, measuring developers through simplistic activity metrics, adding excessive process, ignoring documentation, tolerating flaky CI, and optimizing platform features instead of developer outcomes.',
      highlights: [
        {
          title: 'Tool-first thinking',
          description:
            'Building technology before understanding the developer problem.',
        },
        {
          title: 'Forced adoption',
          description:
            'Mandating platforms without making them genuinely useful.',
        },
        {
          title: 'Activity metrics',
          description:
            'Using commits, lines of code, or ticket counts as simplistic productivity measures.',
        },
        {
          title: 'Platform feature count',
          description:
            'Measuring internal platform output rather than developer outcomes.',
        },
      ],
    },

    {
      title: 'DevEx Example: AI Platform',
      content:
        'Imagine an organization with several AI teams. Developers currently wait for infrastructure teams to provision environments, manually configure model credentials, search multiple documentation systems, and spend 30 minutes running CI. A platform team can improve DevEx by providing standardized project templates, self-service environments, secure model access, centralized evaluation tooling, searchable documentation, observability dashboards, and faster CI.',
      highlights: [
        {
          title: 'Before',
          description:
            'High waiting time, fragmented knowledge, and inconsistent tooling.',
        },
        {
          title: 'Intervention',
          description:
            'Build reusable platform capabilities and golden paths.',
        },
        {
          title: 'Outcome',
          description:
            'Reduce friction and increase engineering flow without sacrificing security or reliability.',
        },
      ],
    },

    {
      title: 'DevEx Example: RAG Product',
      content:
        'For a RAG product, engineers may need to ingest documents, create embeddings, manage indexes, run evaluation datasets, inspect retrieval results, compare prompts, and monitor production behavior. A strong developer platform can automate these workflows and provide reusable tools so each team does not rebuild the same infrastructure.',
      highlights: [
        {
          title: 'Reusable ingestion',
          description:
            'Standardize document processing workflows.',
        },
        {
          title: 'Evaluation',
          description:
            'Provide repeatable RAG evaluation pipelines.',
        },
        {
          title: 'Observability',
          description:
            'Make retrieval, generation, latency, and cost signals accessible.',
        },
      ],
    },

    {
      title: 'DevEx Example: Voice AI',
      content:
        'For an AI voice platform, developers may need to configure telephony, speech recognition, language models, text-to-speech, call flows, tool integrations, testing, and production monitoring. A good internal platform can provide templates, simulation environments, automated tests, observability, cost tracking, and safe deployment workflows.',
      highlights: [
        {
          title: 'Templates',
          description:
            'Create standardized voice-agent project structures.',
        },
        {
          title: 'Testing',
          description:
            'Provide automated conversation and tool-call validation.',
        },
        {
          title: 'Operations',
          description:
            'Expose latency, failures, call outcomes, and cost through shared observability.',
        },
      ],
    },

    {
      title: 'DevEx and Leadership',
      content:
        'For an Engineering Manager, AI Engineering Manager, Technical Product Manager, TPM, or AI Delivery Manager, DevEx is an organizational leverage problem. The leader should identify systemic friction, prioritize improvements by impact, align platform and application teams, measure outcomes, and ensure that improvements remain sustainable.',
      highlights: [
        {
          title: 'System thinking',
          description:
            'Look for repeated organizational or technical friction rather than isolated complaints.',
        },
        {
          title: 'Prioritization',
          description:
            'Invest where friction affects many engineers or important delivery outcomes.',
        },
        {
          title: 'Adoption',
          description:
            'A solution only creates value when teams actually use it successfully.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is Developer Experience? How would you improve DevEx for an engineering organization? How do you measure developer productivity? What metrics would you track for DevEx? How would you reduce CI time? How would you design an internal developer platform? What are golden paths? How do you balance developer autonomy with governance? How would you improve onboarding? How can AI improve developer experience?',
      highlights: [
        {
          title: 'Definition',
          description:
            'Explain DevEx as the conditions and experience surrounding engineering work.',
        },
        {
          title: 'Measurement',
          description:
            'Use a combination of system metrics and developer feedback.',
        },
        {
          title: 'Leadership',
          description:
            'Frame DevEx as a platform, process, and organizational improvement problem.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I think of Developer Experience as reducing unnecessary friction across the engineering lifecycle. I usually look at three areas: feedback, cognitive load, and flow. Feedback means how quickly developers get reliable signals from tests, CI, deployments, and production. Cognitive load means how much unnecessary complexity they need to understand. Flow means how easily work moves from development to production. I would baseline things like CI duration, queue time, environment setup time, review turnaround, flaky-test rate, deployment friction, and developer satisfaction. Then I would prioritize the highest-impact bottlenecks and use platform engineering, automation, documentation, self-service, and golden paths to remove them. For leadership, I would measure outcomes such as reduced cycle time, faster onboarding, fewer interruptions, better reliability, and improved developer satisfaction rather than simply counting developer activity.”',
      highlights: [
        {
          title: 'Three dimensions',
          description:
            'Feedback, cognitive load, and flow provide a useful framework.',
        },
        {
          title: 'Measure friction',
          description:
            'Use measurable workflow signals alongside developer feedback.',
        },
        {
          title: 'Platform thinking',
          description:
            'Build reusable capabilities rather than repeatedly solving the same problem.',
        },
        {
          title: 'Outcome focused',
          description:
            'Measure whether engineering work actually becomes easier and more effective.',
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

export default developerExperienceKnowledge
