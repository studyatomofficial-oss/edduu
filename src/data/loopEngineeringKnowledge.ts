import type { KnowledgeDefinition } from './knowledge'

export const loopEngineeringKnowledge: KnowledgeDefinition = {
  technologyId: 'loop-engineering',
  slug: 'loop-engineering',
  title: 'Loop Engineering',
  summary:
    'Loop Engineering is a continuous product-engineering approach where teams repeatedly move from understanding a problem to building, measuring, learning, and improving the product or system.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Loop Engineering?',
      content:
        'Loop Engineering describes an iterative way of building software and products. Instead of treating development as a one-time sequence of requirements, implementation, and release, the team continuously moves through a loop of understanding the problem, designing a solution, building it, validating it, measuring outcomes, learning from evidence, and improving the next iteration.',
      highlights: [
        {
          title: 'Engineering loop',
          description:
            'A repeated cycle of problem understanding, implementation, validation, measurement, learning, and improvement.',
        },
        {
          title: 'Iteration',
          description:
            'A controlled cycle used to improve a product or system based on new information.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Using evidence from each cycle to make the next cycle better.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine learning to ride a bicycle. You do not create a perfect riding plan once and then execute it forever. You try, observe what happens, adjust your balance, try again, and gradually improve. Software teams work similarly: build something useful, observe real results, learn, and improve the next version.',
      highlights: [
        {
          title: 'Try',
          description:
            'Build and release a useful version.',
        },
        {
          title: 'Observe',
          description:
            'Measure what happened in reality.',
        },
        {
          title: 'Adjust',
          description:
            'Use the evidence to improve the next iteration.',
        },
      ],
    },

    {
      title: 'Why Loop Engineering Matters',
      content:
        'Software systems operate in environments that continuously change. Customer needs evolve, traffic changes, dependencies change, models improve, and new production evidence appears. A continuous engineering loop helps teams respond to this uncertainty instead of assuming that the original plan will remain correct forever.',
      highlights: [
        {
          title: 'Uncertainty',
          description:
            'Requirements and technical conditions are not always fully known at the beginning.',
        },
        {
          title: 'Feedback',
          description:
            'Real usage provides information that planning alone cannot provide.',
        },
        {
          title: 'Adaptation',
          description:
            'Teams adjust priorities and implementation based on evidence.',
        },
      ],
    },

    {
      title: 'The Core Engineering Loop',
      content:
        'A practical engineering loop can be represented as Understand, Prioritize, Design, Build, Test, Release, Observe, Learn, and Repeat. Different organizations may name the stages differently, but the important idea is continuous feedback between engineering work and real-world outcomes.',
      highlights: [
        {
          title: 'Understand',
          description:
            'Understand the customer, business, technical, and operational problem.',
        },
        {
          title: 'Build',
          description:
            'Implement a solution that addresses the highest-value part of the problem.',
        },
        {
          title: 'Observe',
          description:
            'Measure product, engineering, and production outcomes.',
        },
        {
          title: 'Learn',
          description:
            'Use evidence to decide what should happen next.',
        },
      ],
    },

    {
      title: 'Problem Understanding',
      content:
        'The loop should begin with a problem rather than immediately jumping to implementation. Teams should understand who is affected, what is happening today, why it matters, what constraints exist, and how success will be measured.',
      highlights: [
        {
          title: 'Problem',
          description:
            'The user or business outcome that needs improvement.',
        },
        {
          title: 'Context',
          description:
            'The environment, constraints, dependencies, and existing behavior surrounding the problem.',
        },
        {
          title: 'Outcome',
          description:
            'The measurable improvement the team wants to create.',
        },
      ],
    },

    {
      title: 'Hypothesis-Driven Engineering',
      content:
        'Teams can treat major product decisions as hypotheses. A hypothesis states what the team believes will happen if a change is introduced. The implementation and measurement then provide evidence that can support, reject, or refine that belief.',
      highlights: [
        {
          title: 'Hypothesis',
          description:
            'A testable belief about what will happen after a change.',
        },
        {
          title: 'Experiment',
          description:
            'A controlled change used to gather evidence.',
        },
        {
          title: 'Evidence',
          description:
            'Observed results used to validate or challenge the hypothesis.',
        },
      ],
    },

    {
      title: 'Build-Measure-Learn',
      content:
        'Build-Measure-Learn is a simple representation of an iterative product loop. Build the smallest useful solution, measure its actual outcome, learn from the evidence, and use that learning to decide the next iteration.',
      highlights: [
        {
          title: 'Build',
          description:
            'Create a useful implementation rather than attempting to solve every possible requirement immediately.',
        },
        {
          title: 'Measure',
          description:
            'Collect meaningful evidence about behavior and outcomes.',
        },
        {
          title: 'Learn',
          description:
            'Use evidence to improve product and engineering decisions.',
        },
      ],
    },

    {
      title: 'Small Batches',
      content:
        'Loop Engineering works best when teams can deliver changes in relatively small batches. Smaller changes reduce the amount of uncertainty introduced at one time and make failures easier to diagnose, rollback, and learn from.',
      highlights: [
        {
          title: 'Small batch',
          description:
            'A limited amount of change delivered together.',
        },
        {
          title: 'Lower risk',
          description:
            'Smaller changes generally make the impact of mistakes easier to contain.',
        },
        {
          title: 'Faster feedback',
          description:
            'Teams receive evidence sooner about whether the change works.',
        },
      ],
    },

    {
      title: 'Incremental Delivery',
      content:
        'Incremental delivery means gradually adding useful capabilities instead of waiting for a large final release. It creates more opportunities for feedback and allows teams to adjust direction before too much work is committed.',
      highlights: [
        {
          title: 'Increment',
          description:
            'A meaningful addition to the product or system.',
        },
        {
          title: 'Feedback opportunity',
          description:
            'A point where users, product teams, and engineers can evaluate the result.',
        },
        {
          title: 'Reduced commitment risk',
          description:
            'Less work is invested before evidence is available.',
        },
      ],
    },

    {
      title: 'Feedback Loops',
      content:
        'A feedback loop connects an action to an observable result and then uses that result to influence the next action. Strong engineering organizations intentionally create feedback loops at multiple levels: code, testing, deployment, production, customer behavior, and business outcomes.',
      highlights: [
        {
          title: 'Code feedback',
          description:
            'Compiler errors, static analysis, and local development feedback.',
        },
        {
          title: 'Production feedback',
          description:
            'Metrics, logs, traces, incidents, and user behavior after release.',
        },
        {
          title: 'Product feedback',
          description:
            'Customer feedback and product outcome measurements.',
        },
      ],
    },

    {
      title: 'Fast Feedback vs Slow Feedback',
      content:
        'Not every feedback loop operates at the same speed. Unit tests can provide feedback within seconds, CI may take minutes, production metrics may take hours, and business outcomes may require weeks or months. Good engineering leadership creates fast feedback for risks that can be tested cheaply and slower loops for outcomes that naturally require more time.',
      highlights: [
        {
          title: 'Fast loop',
          description:
            'Feedback available quickly, such as automated tests.',
        },
        {
          title: 'Slow loop',
          description:
            'Feedback that requires real usage or longer observation.',
        },
        {
          title: 'Feedback economics',
          description:
            'Prefer discovering inexpensive failures earlier whenever practical.',
        },
      ],
    },

    {
      title: 'Shift Left',
      content:
        'Shift-left thinking moves validation and risk detection earlier in the engineering lifecycle. Instead of discovering every problem after deployment, teams use design reviews, automated tests, security checks, static analysis, and CI to catch issues before production.',
      highlights: [
        {
          title: 'Shift left',
          description:
            'Move quality and risk detection earlier in the delivery process.',
        },
        {
          title: 'Early detection',
          description:
            'Identify defects before they become expensive production problems.',
        },
        {
          title: 'Automation',
          description:
            'Use repeatable automated controls wherever appropriate.',
        },
      ],
    },

    {
      title: 'Continuous Integration',
      content:
        'Continuous Integration creates a feedback loop where code changes are frequently integrated and automatically validated. This reduces long-lived divergence and helps teams discover compatibility and quality problems earlier.',
      highlights: [
        {
          title: 'Integration',
          description:
            'Combining changes into the shared codebase frequently.',
        },
        {
          title: 'Automated validation',
          description:
            'Running repeatable checks whenever changes are integrated.',
        },
        {
          title: 'Fast feedback',
          description:
            'Giving developers early information when a change breaks expected behavior.',
        },
      ],
    },

    {
      title: 'Continuous Delivery',
      content:
        'Continuous Delivery extends the feedback loop toward production by keeping software in a releasable state. It reduces the distance between a completed engineering change and a production deployment.',
      highlights: [
        {
          title: 'Releasable state',
          description:
            'The software can be deployed safely when the business chooses.',
        },
        {
          title: 'Deployment automation',
          description:
            'Automated processes reduce manual release effort.',
        },
        {
          title: 'Release frequency',
          description:
            'Smaller and more frequent releases can improve feedback speed.',
        },
      ],
    },

    {
      title: 'Observability in the Loop',
      content:
        'Observability closes the production feedback loop. After a change reaches production, teams need metrics, logs, traces, alerts, and user signals to determine whether the system is behaving as expected.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Numerical measurements of system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Detailed records of application and infrastructure events.',
        },
        {
          title: 'Traces',
          description:
            'Request-level information showing behavior across distributed components.',
        },
      ],
    },

    {
      title: 'Product Feedback in Engineering',
      content:
        'Engineering decisions should not be disconnected from product outcomes. Usage data, customer feedback, support requests, conversion rates, task completion, retention, and other product signals can influence what engineering work should happen next.',
      highlights: [
        {
          title: 'Usage signal',
          description:
            'Evidence showing how customers actually use a capability.',
        },
        {
          title: 'Customer feedback',
          description:
            'Direct information about customer needs and problems.',
        },
        {
          title: 'Outcome metric',
          description:
            'A measurement connected to the desired product or business result.',
        },
      ],
    },

    {
      title: 'Engineering Feedback in Product Decisions',
      content:
        'Product teams also need engineering feedback. Technical constraints, architecture limitations, reliability risks, performance characteristics, dependencies, and technical debt can change product sequencing and scope.',
      highlights: [
        {
          title: 'Technical constraint',
          description:
            'A technical condition that limits available product options.',
        },
        {
          title: 'Engineering risk',
          description:
            'A technical uncertainty that could affect delivery, quality, cost, or reliability.',
        },
        {
          title: 'Trade-off',
          description:
            'A deliberate decision to optimize one dimension while accepting another limitation.',
        },
      ],
    },

    {
      title: 'Experimentation',
      content:
        'Experimentation allows teams to learn without fully committing to an uncertain product decision. Examples include prototypes, controlled rollouts, feature flags, A/B tests, pilot programs, and limited customer releases.',
      highlights: [
        {
          title: 'Prototype',
          description:
            'A limited implementation used to test an idea.',
        },
        {
          title: 'Feature flag',
          description:
            'A mechanism for controlling whether functionality is enabled for selected users or environments.',
        },
        {
          title: 'Experiment',
          description:
            'A controlled test designed to generate evidence for a decision.',
        },
      ],
    },

    {
      title: 'Feature Flags',
      content:
        'Feature flags separate code deployment from feature exposure. This can allow teams to deploy code safely, enable functionality gradually, test with selected users, and disable problematic behavior without immediately rolling back the entire deployment.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A runtime control that determines whether functionality is enabled.',
        },
        {
          title: 'Progressive rollout',
          description:
            'Increasing exposure gradually while observing results.',
        },
        {
          title: 'Kill switch',
          description:
            'A control that can rapidly disable problematic functionality.',
        },
      ],
    },

    {
      title: 'Canary Releases',
      content:
        'Canary releases expose a new version to a small percentage of traffic before broader rollout. The engineering loop uses production evidence from the canary population to determine whether to continue, pause, or rollback the release.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A limited production exposure used to validate a new version.',
        },
        {
          title: 'Blast radius',
          description:
            'The scope of users affected if the new version fails.',
        },
        {
          title: 'Promotion',
          description:
            'Increasing rollout after the new version meets defined health criteria.',
        },
      ],
    },

    {
      title: 'Rollback as a Feedback Mechanism',
      content:
        'Rollback is not merely a deployment operation. It is part of a safe engineering loop because it gives teams a controlled way to respond when production evidence shows that a release is unsafe or unsuccessful.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning to a previous known-good version.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring acceptable service behavior after a problematic change.',
        },
        {
          title: 'Learning',
          description:
            'Using the failure to improve the next release or engineering control.',
        },
      ],
    },

    {
      title: 'Technical Debt in the Loop',
      content:
        'Technical debt should be treated as feedback rather than hidden work. When engineering teams repeatedly encounter slow development, fragile code, recurring defects, difficult deployments, or architectural limitations, those signals can indicate accumulated technical debt that needs deliberate attention.',
      highlights: [
        {
          title: 'Technical debt',
          description:
            'The future cost created by choosing or accumulating a less sustainable technical approach.',
        },
        {
          title: 'Engineering friction',
          description:
            'Repeated difficulty that slows or complicates development.',
        },
        {
          title: 'Debt repayment',
          description:
            'Engineering work intended to reduce future cost, risk, or complexity.',
        },
      ],
    },

    {
      title: 'Code Review Feedback Loop',
      content:
        'Code review creates a peer feedback loop before changes become part of the shared production system. Good review focuses on correctness, maintainability, security, reliability, clarity, and alignment with established engineering practices.',
      highlights: [
        {
          title: 'Peer review',
          description:
            'A second engineer evaluates a proposed code change.',
        },
        {
          title: 'Quality feedback',
          description:
            'Review comments identify risks, defects, or improvement opportunities.',
        },
        {
          title: 'Knowledge sharing',
          description:
            'Review can spread engineering knowledge across the team.',
        },
      ],
    },

    {
      title: 'Testing Feedback Loop',
      content:
        'Testing provides increasingly realistic feedback as changes move through the engineering lifecycle. Unit tests can catch local logic errors, integration tests validate component interaction, end-to-end tests validate workflows, and production monitoring validates real operational behavior.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small piece of application behavior in isolation.',
        },
        {
          title: 'Integration test',
          description:
            'Tests interactions between components or services.',
        },
        {
          title: 'End-to-end test',
          description:
            'Tests a complete user or system workflow.',
        },
      ],
    },

    {
      title: 'Metrics-Driven Engineering',
      content:
        'Engineering metrics provide feedback about delivery, quality, reliability, and developer experience. Metrics should be used to identify system-level improvement opportunities rather than simply ranking individual engineers.',
      highlights: [
        {
          title: 'Delivery metric',
          description:
            'Measures aspects of how effectively changes move toward users.',
        },
        {
          title: 'Quality metric',
          description:
            'Measures defects, failures, or other quality signals.',
        },
        {
          title: 'Reliability metric',
          description:
            'Measures service stability and operational performance.',
        },
      ],
    },

    {
      title: 'Developer Experience',
      content:
        'Developer Experience, or DevEx, is the quality of the environment in which engineers design, build, test, deploy, and operate software. Poor DevEx creates friction that slows the engineering loop; better DevEx shortens feedback cycles and makes safe delivery easier.',
      highlights: [
        {
          title: 'DevEx',
          description:
            'The overall engineering experience across tools, workflows, platforms, and processes.',
        },
        {
          title: 'Developer friction',
          description:
            'Unnecessary effort or waiting that makes engineering work harder.',
        },
        {
          title: 'Golden path',
          description:
            'A recommended, supported way for engineers to perform common development and delivery tasks.',
        },
      ],
    },

    {
      title: 'Platform Engineering and the Loop',
      content:
        'Platform engineering can improve the engineering loop by providing reusable infrastructure, deployment workflows, observability, security controls, templates, and developer tooling. The goal is to reduce repetitive work while preserving appropriate engineering autonomy.',
      highlights: [
        {
          title: 'Internal platform',
          description:
            'Shared capabilities provided to engineering teams.',
        },
        {
          title: 'Self-service',
          description:
            'Allowing engineers to perform common tasks without waiting for manual intervention from another team.',
        },
        {
          title: 'Standardization',
          description:
            'Providing consistent patterns for common engineering activities.',
        },
      ],
    },

    {
      title: 'AI Engineering Loops',
      content:
        'AI systems require particularly strong feedback loops because model behavior is probabilistic and can change with prompts, models, data, retrieval, tools, and providers. AI engineering loops should include evaluation datasets, quality measurements, latency and cost monitoring, safety checks, human feedback, and controlled releases.',
      highlights: [
        {
          title: 'AI evaluation',
          description:
            'Systematic measurement of AI behavior against defined expectations.',
        },
        {
          title: 'Model feedback',
          description:
            'Evidence about model quality, latency, cost, and failure behavior.',
        },
        {
          title: 'Continuous evaluation',
          description:
            'Repeatedly measuring AI behavior as models, prompts, data, and system components change.',
        },
      ],
    },

    {
      title: 'RAG Engineering Loop',
      content:
        'A RAG system requires feedback across ingestion, chunking, embeddings, retrieval, ranking, prompt construction, generation, and evaluation. A change that improves retrieval can still reduce final answer quality, so teams need end-to-end measurements rather than optimizing one component in isolation.',
      highlights: [
        {
          title: 'Retrieval evaluation',
          description:
            'Measures whether relevant knowledge is retrieved.',
        },
        {
          title: 'Generation evaluation',
          description:
            'Measures whether the generated answer meets quality requirements.',
        },
        {
          title: 'End-to-end evaluation',
          description:
            'Measures the complete user-facing RAG outcome.',
        },
      ],
    },

    {
      title: 'AI Voice Engineering Loop',
      content:
        'An AI voice platform has a continuous loop across telephony, speech recognition, model reasoning, tool execution, speech generation, latency, call completion, and customer outcomes. Teams can use call transcripts, latency measurements, call outcomes, escalation rates, and human feedback to improve the system.',
      highlights: [
        {
          title: 'Call outcome',
          description:
            'The measurable result of an AI voice interaction.',
        },
        {
          title: 'Latency',
          description:
            'The time required for the system to respond.',
        },
        {
          title: 'Conversation quality',
          description:
            'The quality and usefulness of the interaction from the user perspective.',
        },
      ],
    },

    {
      title: 'Loop Engineering for Technical Leaders',
      content:
        'For technical leaders, Loop Engineering is primarily about creating an organization where teams can learn quickly and safely. The leader should establish clear outcomes, reduce unnecessary handoffs, create fast feedback mechanisms, remove delivery friction, make risks visible, and ensure that learning from production becomes part of planning and prioritization.',
      highlights: [
        {
          title: 'Feedback architecture',
          description:
            'The deliberate design of technical and organizational mechanisms that provide useful feedback.',
        },
        {
          title: 'Decision quality',
          description:
            'Improving decisions by connecting them to evidence and measurable outcomes.',
        },
        {
          title: 'Organizational learning',
          description:
            'Turning engineering and product experience into better future decisions.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What do you mean by an engineering feedback loop? How do you shorten the software delivery feedback cycle? How do you balance speed and quality? How do you use production data to influence engineering priorities? How do you build feedback loops for AI systems? How do you reduce developer friction? How do you use metrics without creating unhealthy incentives?',
      highlights: [
        {
          title: 'Feedback',
          description:
            'Explain how teams learn from engineering and production evidence.',
        },
        {
          title: 'Leadership',
          description:
            'Show how you improve the system in which engineers work.',
        },
        {
          title: 'AI',
          description:
            'Explain why AI requires continuous evaluation and monitoring.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I think of engineering as a continuous feedback loop rather than a one-time delivery process. We start by understanding the problem and defining the outcome, then design and build a small increment, validate it through automated testing, release it safely, and observe both technical and product signals. We use that evidence to decide what to improve next. As a technical leader, my role is to make that loop fast and safe by reducing unnecessary handoffs, improving developer experience, automating quality gates, and making production feedback visible to product and engineering teams. For AI systems, I would add continuous evaluation for quality, latency, cost, safety, and model behavior.”',
      highlights: [
        {
          title: 'Continuous',
          description:
            'Engineering does not end at deployment; production creates the next source of learning.',
        },
        {
          title: 'Safe',
          description:
            'Feedback mechanisms should allow teams to learn without exposing customers to unnecessary risk.',
        },
        {
          title: 'Measurable',
          description:
            'Decisions should be connected to observable outcomes.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
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

export default loopEngineeringKnowledge
