import type { KnowledgeDefinition } from './knowledge'

export const engineeringMetricsKnowledge: KnowledgeDefinition = {
  technologyId: 'engineering-metrics',
  slug: 'engineering-metrics',
  title: 'Engineering Metrics',
  summary:
    'Engineering Metrics are measurable signals used to understand software delivery performance, engineering health, reliability, quality, developer experience, and business outcomes so leaders can make better decisions.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What are Engineering Metrics?',
      content:
        'Engineering Metrics are measurable signals that help engineering and technology leaders understand how teams and systems are performing. Good metrics are used to identify bottlenecks, manage risk, improve delivery, and support decisions. They should provide useful information rather than become targets that teams can manipulate.',
      highlights: [
        {
          title: 'Measurement',
          description:
            'Metrics turn important aspects of engineering work into observable signals.',
        },
        {
          title: 'Decision support',
          description:
            'Metrics should help leaders decide where attention or investment is needed.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Trends can reveal whether engineering practices are improving or deteriorating.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine running a restaurant. You might track waiting time, order accuracy, customer satisfaction, food waste, and daily sales. One number cannot tell you whether the restaurant is healthy. Engineering is similar: delivery speed, reliability, quality, developer experience, and business outcomes need to be considered together.',
      highlights: [
        {
          title: 'Speed',
          description:
            'How quickly are orders or software changes delivered?',
        },
        {
          title: 'Quality',
          description:
            'How often do customers receive incorrect results?',
        },
        {
          title: 'Customer outcome',
          description:
            'Are customers actually getting a better experience?',
        },
      ],
    },

    {
      title: 'Why Engineering Metrics Matter',
      content:
        'Engineering organizations are complex systems. Leaders cannot personally observe every code change, deployment, incident, architectural decision, or developer bottleneck. Metrics provide signals that help leaders understand system behavior and focus conversations on evidence.',
      highlights: [
        {
          title: 'Visibility',
          description:
            'Makes important engineering trends easier to see.',
        },
        {
          title: 'Prioritization',
          description:
            'Helps identify where improvement effort may have the greatest impact.',
        },
        {
          title: 'Leadership alignment',
          description:
            'Creates a common evidence base for engineering, product, and business discussions.',
        },
      ],
    },

    {
      title: 'Metric vs KPI',
      content:
        'A metric is a measurement. A Key Performance Indicator, or KPI, is a measurement selected because it is especially important for evaluating progress toward a meaningful objective. Not every engineering metric is a KPI.',
      highlights: [
        {
          title: 'Metric',
          description:
            'Any useful measurable signal.',
        },
        {
          title: 'KPI',
          description:
            'A strategically important measure tied to an objective.',
        },
        {
          title: 'Context',
          description:
            'A number becomes useful when its purpose and decision context are clear.',
        },
      ],
    },

    {
      title: 'Leading vs Lagging Indicators',
      content:
        'Leading indicators provide signals that may predict future outcomes, while lagging indicators describe outcomes that have already occurred. Strong engineering management uses both.',
      highlights: [
        {
          title: 'Leading',
          description:
            'Signals that can help anticipate future problems or outcomes.',
        },
        {
          title: 'Lagging',
          description:
            'Measures the result after an event or period.',
        },
        {
          title: 'Combination',
          description:
            'Using both provides a better understanding of cause and effect.',
        },
      ],
    },

    {
      title: 'DORA Metrics',
      content:
        'DORA metrics are widely used measures for software delivery performance. The commonly referenced four metrics are Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore Service. They help organizations understand both delivery speed and delivery stability.',
      highlights: [
        {
          title: 'Deployment Frequency',
          description:
            'How frequently an organization successfully deploys changes to production.',
        },
        {
          title: 'Lead Time for Changes',
          description:
            'How long it takes for a change to move from the relevant development stage to production.',
        },
        {
          title: 'Change Failure Rate',
          description:
            'The proportion of deployments or changes that result in a failure requiring remediation, rollback, fix, or similar intervention.',
        },
        {
          title: 'Time to Restore Service',
          description:
            'How quickly service is restored after a production failure.',
        },
      ],
    },

    {
      title: 'Deployment Frequency',
      content:
        'Deployment Frequency measures how often changes are successfully delivered to production. Higher frequency can indicate a team is capable of making small, incremental changes, but the metric should never be pursued at the expense of reliability or business value.',
      highlights: [
        {
          title: 'Delivery capability',
          description:
            'Shows how frequently a team can deliver changes.',
        },
        {
          title: 'Small batches',
          description:
            'Frequent delivery can encourage smaller changes that are easier to reason about.',
        },
        {
          title: 'Trade-off',
          description:
            'High frequency with poor reliability is not a success.',
        },
      ],
    },

    {
      title: 'Lead Time for Changes',
      content:
        'Lead Time for Changes measures how long it takes for a change to move through the delivery process and reach production. Long lead time can reveal bottlenecks in development, review, testing, approvals, environments, or deployment.',
      highlights: [
        {
          title: 'Flow',
          description:
            'Shows how efficiently changes move through the delivery system.',
        },
        {
          title: 'Bottlenecks',
          description:
            'Can reveal waiting time in reviews, testing, environments, or approvals.',
        },
        {
          title: 'Improvement',
          description:
            'Reducing unnecessary waiting can improve delivery without simply adding more engineers.',
        },
      ],
    },

    {
      title: 'Change Failure Rate',
      content:
        'Change Failure Rate measures how frequently production changes cause failures requiring remediation. It provides an important counterbalance to speed metrics because faster delivery is valuable only when changes remain sufficiently safe.',
      highlights: [
        {
          title: 'Quality signal',
          description:
            'Shows how often delivery creates production problems.',
        },
        {
          title: 'Risk balance',
          description:
            'Balances delivery speed with operational stability.',
        },
        {
          title: 'Improvement',
          description:
            'Can guide investment in testing, deployment safety, observability, and architecture.',
        },
      ],
    },

    {
      title: 'Time to Restore Service',
      content:
        'Time to Restore Service measures how quickly the organization restores service after a production failure. It reflects incident detection, diagnosis, communication, mitigation, and recovery capabilities.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Problems must be recognized quickly.',
        },
        {
          title: 'Diagnosis',
          description:
            'Teams need sufficient observability to understand what failed.',
        },
        {
          title: 'Recovery',
          description:
            'The organization needs reliable mechanisms to restore service.',
        },
      ],
    },

    {
      title: 'MTTR',
      content:
        'MTTR is commonly used as shorthand for Mean Time to Repair, Restore, or Resolve depending on the organization. Because the acronym can have multiple meanings, teams should explicitly define what event starts and ends the measurement.',
      highlights: [
        {
          title: 'Definition',
          description:
            'Always clarify what MTTR means in the organization.',
        },
        {
          title: 'Incident lifecycle',
          description:
            'The measurement may cover detection, diagnosis, remediation, or complete resolution depending on the definition.',
        },
        {
          title: 'Consistency',
          description:
            'A stable definition is necessary for meaningful trend analysis.',
        },
      ],
    },

    {
      title: 'MTTD',
      content:
        'Mean Time to Detect measures how long it takes to identify that a problem has occurred. Lower detection time generally indicates stronger monitoring, alerting, and observability, although alert volume and signal quality must also be considered.',
      highlights: [
        {
          title: 'Detection speed',
          description:
            'Measures how quickly problems become visible.',
        },
        {
          title: 'Observability',
          description:
            'Strong telemetry can reduce detection time.',
        },
        {
          title: 'Signal quality',
          description:
            'More alerts do not necessarily mean better detection.',
        },
      ],
    },

    {
      title: 'Reliability Metrics',
      content:
        'Reliability metrics help measure whether services remain available and behave correctly. Examples include availability, error rate, latency, incident frequency, failed requests, recovery time, and SLO attainment.',
      highlights: [
        {
          title: 'Availability',
          description:
            'Measures whether a service is accessible and operational according to its definition.',
        },
        {
          title: 'Error rate',
          description:
            'Measures the proportion or number of unsuccessful operations.',
        },
        {
          title: 'Latency',
          description:
            'Measures how long requests or operations take.',
        },
      ],
    },

    {
      title: 'SLI and SLO Metrics',
      content:
        'Service Level Indicators are measurements of service behavior, while Service Level Objectives define desired targets for those indicators. Examples include successful request percentage, latency thresholds, and availability. SLOs translate reliability expectations into measurable engineering objectives.',
      highlights: [
        {
          title: 'SLI',
          description:
            'The actual measured signal.',
        },
        {
          title: 'SLO',
          description:
            'The desired target for that signal.',
        },
        {
          title: 'Decision-making',
          description:
            'SLOs help teams balance reliability investment against feature delivery.',
        },
      ],
    },

    {
      title: 'Error Budget Metrics',
      content:
        'An error budget represents the amount of unreliability allowed by an SLO over a defined period. Tracking remaining error budget helps teams make informed decisions about whether to prioritize feature velocity, reliability work, or risk reduction.',
      highlights: [
        {
          title: 'Budget remaining',
          description:
            'Shows how much unreliability remains within the agreed objective.',
        },
        {
          title: 'Budget burn',
          description:
            'Shows how quickly the allowed failure budget is being consumed.',
        },
        {
          title: 'Delivery decision',
          description:
            'Low remaining budget can justify slowing risky releases and prioritizing reliability.',
        },
      ],
    },

    {
      title: 'Quality Metrics',
      content:
        'Quality metrics measure defects and the effectiveness of quality practices. Examples include escaped defects, defect density, test failure rate, flaky test rate, regression failure rate, and production incident trends.',
      highlights: [
        {
          title: 'Escaped defects',
          description:
            'Defects discovered after the intended testing stage.',
        },
        {
          title: 'Regression failures',
          description:
            'Failures indicating existing behavior may have been broken.',
        },
        {
          title: 'Flakiness',
          description:
            'Measures reliability of automated test signals.',
        },
      ],
    },

    {
      title: 'Defect Escape Rate',
      content:
        'Defect Escape Rate measures defects that were not detected in an earlier stage and were discovered later, potentially in production. It can highlight weaknesses in testing, requirements, environments, or release processes.',
      highlights: [
        {
          title: 'Quality gap',
          description:
            'Shows where defects are escaping existing validation.',
        },
        {
          title: 'Root cause',
          description:
            'The metric should lead to investigation rather than blame.',
        },
        {
          title: 'Improvement',
          description:
            'Teams can strengthen testing or process controls based on patterns.',
        },
      ],
    },

    {
      title: 'Engineering Productivity',
      content:
        'Engineering productivity is difficult to measure with a single number. Useful approaches focus on flow, outcomes, quality, developer experience, and system constraints rather than simplistic activity counts such as lines of code or number of commits.',
      highlights: [
        {
          title: 'Flow',
          description:
            'Measures how effectively work moves from idea to production.',
        },
        {
          title: 'Outcomes',
          description:
            'Measures whether engineering work creates meaningful product or business value.',
        },
        {
          title: 'System health',
          description:
            'Includes reliability, quality, and developer experience.',
        },
      ],
    },

    {
      title: 'Why Lines of Code Are a Poor Productivity Metric',
      content:
        'Lines of code measure output volume rather than value. More code can sometimes mean more complexity, duplication, or technical debt. A smaller change that removes complexity or prevents an incident can create more value than thousands of lines of new code.',
      highlights: [
        {
          title: 'Volume is not value',
          description:
            'More output does not automatically mean better engineering.',
        },
        {
          title: 'Complexity',
          description:
            'Additional code can increase maintenance cost.',
        },
        {
          title: 'Outcome focus',
          description:
            'Leaders should evaluate impact, quality, and flow.',
        },
      ],
    },

    {
      title: 'PR Metrics',
      content:
        'Pull Request metrics can include time to first review, review cycle time, PR size, number of review iterations, merge time, and abandoned PR rate. These metrics can reveal collaboration and delivery bottlenecks when interpreted carefully.',
      highlights: [
        {
          title: 'Review time',
          description:
            'Shows how long changes wait for feedback.',
        },
        {
          title: 'PR size',
          description:
            'Smaller changes can often be easier to review and safer to merge.',
        },
        {
          title: 'Cycle time',
          description:
            'Shows how long a change takes to move through review and merge.',
        },
      ],
    },

    {
      title: 'Code Review Metrics',
      content:
        'Useful code review signals include review turnaround time, review participation, change size, review iteration count, and defect patterns discovered during review. These metrics should improve collaboration rather than create pressure to approve changes quickly.',
      highlights: [
        {
          title: 'Feedback speed',
          description:
            'Measures how quickly engineers receive review feedback.',
        },
        {
          title: 'Review quality',
          description:
            'Look at meaningful defects and design concerns identified, not only approval speed.',
        },
        {
          title: 'Collaboration',
          description:
            'Healthy review participation can improve knowledge sharing.',
        },
      ],
    },

    {
      title: 'Deployment Metrics',
      content:
        'Deployment metrics can include deployment frequency, deployment duration, rollback rate, deployment failure rate, and time from approval to production. They help identify release-process bottlenecks and operational risk.',
      highlights: [
        {
          title: 'Frequency',
          description:
            'How often changes reach production.',
        },
        {
          title: 'Duration',
          description:
            'How long deployment execution takes.',
        },
        {
          title: 'Rollback',
          description:
            'How often deployments require reversal or mitigation.',
        },
      ],
    },

    {
      title: 'Incident Metrics',
      content:
        'Incident metrics can include incident frequency, severity distribution, MTTD, MTTR, customer impact duration, recurrence rate, and percentage of incidents with completed post-incident actions.',
      highlights: [
        {
          title: 'Frequency',
          description:
            'Shows how often significant failures occur.',
        },
        {
          title: 'Impact',
          description:
            'Measures affected customers, duration, or business consequences.',
        },
        {
          title: 'Recurrence',
          description:
            'Repeated incidents may indicate unresolved systemic causes.',
        },
      ],
    },

    {
      title: 'Incident Severity',
      content:
        'Severity classifications help organizations prioritize response and understand incident impact. Severity definitions should be explicit and based on customer, business, security, or operational impact rather than simply technical inconvenience.',
      highlights: [
        {
          title: 'Customer impact',
          description:
            'How many users are affected and how severely?',
        },
        {
          title: 'Business impact',
          description:
            'What revenue, operational, contractual, or reputational impact exists?',
        },
        {
          title: 'Consistency',
          description:
            'Clear definitions make incident trends more meaningful.',
        },
      ],
    },

    {
      title: 'Technical Debt Metrics',
      content:
        'Technical debt is difficult to measure directly, but teams can track indicators such as aging backlog items, recurring defects, build instability, code complexity, dependency risk, duplicated work, maintenance effort, and time spent on remediation.',
      highlights: [
        {
          title: 'Debt aging',
          description:
            'Shows how long known engineering problems remain unresolved.',
        },
        {
          title: 'Maintenance effort',
          description:
            'Measures engineering capacity consumed by recurring or avoidable work.',
        },
        {
          title: 'Risk',
          description:
            'Prioritize debt based on impact and probability rather than simply counting items.',
        },
      ],
    },

    {
      title: 'Developer Experience Metrics',
      content:
        'Developer Experience metrics help identify friction in the engineering environment. Examples include build time, CI duration, local setup time, environment provisioning time, test execution time, incident interruption load, and developer survey signals.',
      highlights: [
        {
          title: 'Build time',
          description:
            'Long builds slow feedback loops.',
        },
        {
          title: 'Environment setup',
          description:
            'Difficult onboarding or setup can reduce engineering efficiency.',
        },
        {
          title: 'Developer feedback',
          description:
            'Qualitative feedback can reveal friction that system metrics miss.',
        },
      ],
    },

    {
      title: 'Flow Metrics',
      content:
        'Flow metrics examine how work moves through the engineering system. Common signals include work item age, cycle time, throughput, work in progress, blocked time, and queue time.',
      highlights: [
        {
          title: 'Cycle time',
          description:
            'How long work takes from a defined start point to completion.',
        },
        {
          title: 'Throughput',
          description:
            'How many work items are completed over a period.',
        },
        {
          title: 'WIP',
          description:
            'How much work is currently in progress.',
        },
      ],
    },

    {
      title: 'Cycle Time',
      content:
        'Cycle Time measures the time required for work to move from a defined start state to a defined completion state. It can reveal bottlenecks and waiting time across engineering workflows.',
      highlights: [
        {
          title: 'Definition',
          description:
            'Teams must clearly define when the clock starts and stops.',
        },
        {
          title: 'Bottlenecks',
          description:
            'Long cycle times can indicate waiting, dependencies, review delays, or excessive work in progress.',
        },
        {
          title: 'Trend',
          description:
            'Trends are generally more useful than isolated values.',
        },
      ],
    },

    {
      title: 'Work in Progress',
      content:
        'Work in Progress, or WIP, represents work that has started but has not yet been completed. Excessive WIP can increase context switching, queueing, and cycle time.',
      highlights: [
        {
          title: 'Focus',
          description:
            'Lower unnecessary WIP can improve team focus.',
        },
        {
          title: 'Queueing',
          description:
            'Too much WIP can cause work to wait behind other work.',
        },
        {
          title: 'Flow',
          description:
            'Managing WIP supports smoother delivery.',
        },
      ],
    },

    {
      title: 'Capacity Metrics',
      content:
        'Capacity metrics describe available engineering capability and how it is allocated. They can include team capacity, planned versus unplanned work, operational load, support interruptions, and allocation across roadmap, maintenance, reliability, and technical debt.',
      highlights: [
        {
          title: 'Planned work',
          description:
            'Capacity allocated to roadmap or committed initiatives.',
        },
        {
          title: 'Unplanned work',
          description:
            'Incidents, urgent fixes, support, and unexpected work.',
        },
        {
          title: 'Investment balance',
          description:
            'Shows how engineering capacity is distributed across competing priorities.',
        },
      ],
    },

    {
      title: 'Engineering Cost Metrics',
      content:
        'Engineering cost metrics can include infrastructure cost, cloud spend, build and test compute cost, third-party API spend, cost per transaction, and engineering effort associated with a capability. Cost should be considered together with reliability and business value.',
      highlights: [
        {
          title: 'Unit economics',
          description:
            'Measures cost relative to meaningful business or technical output.',
        },
        {
          title: 'Cloud cost',
          description:
            'Tracks infrastructure and managed-service spending.',
        },
        {
          title: 'Optimization',
          description:
            'Helps identify waste and opportunities for efficient architecture.',
        },
      ],
    },

    {
      title: 'AI Engineering Metrics',
      content:
        'AI systems require additional metrics because model behavior is probabilistic and inference can be expensive. Useful metrics include model quality, groundedness, retrieval quality, hallucination rate where measurable, latency, token usage, cost per request, fallback rate, tool-call success rate, safety evaluation results, and user satisfaction.',
      highlights: [
        {
          title: 'Quality',
          description:
            'Measure task-specific model performance.',
        },
        {
          title: 'Cost',
          description:
            'Track inference and infrastructure cost per useful outcome.',
        },
        {
          title: 'Latency',
          description:
            'Measure end-to-end response time and important component latency.',
        },
        {
          title: 'Safety',
          description:
            'Track evaluation results for relevant safety and policy scenarios.',
        },
      ],
    },

    {
      title: 'AI Product Metrics vs Engineering Metrics',
      content:
        'AI product metrics describe whether users and the business receive value, while engineering metrics describe the health and performance of the systems and teams delivering that value. A successful AI product needs both perspectives.',
      highlights: [
        {
          title: 'Product',
          description:
            'Adoption, task success, user satisfaction, conversion, retention, or business impact.',
        },
        {
          title: 'Engineering',
          description:
            'Latency, reliability, cost, deployment performance, quality, and operational health.',
        },
        {
          title: 'Connection',
          description:
            'Engineering improvements should ultimately support product and business outcomes.',
        },
      ],
    },

    {
      title: 'Metrics for AI Voice Agents',
      content:
        'AI voice-agent systems can be measured using call completion rate, task success rate, transfer rate, abandonment rate, average response latency, speech recognition quality, tool-call success rate, cost per minute, cost per successful outcome, customer satisfaction, and escalation rate.',
      highlights: [
        {
          title: 'Task success',
          description:
            'Measures whether the agent actually completed the intended business task.',
        },
        {
          title: 'Latency',
          description:
            'Measures conversational responsiveness.',
        },
        {
          title: 'Cost',
          description:
            'Tracks telephony, speech, model, and infrastructure costs.',
        },
        {
          title: 'Outcome',
          description:
            'Measures business value rather than only conversation volume.',
        },
      ],
    },

    {
      title: 'RAG Metrics',
      content:
        'RAG systems can be measured through retrieval recall, retrieval precision, ranking quality, groundedness, citation correctness, answer relevance, abstention quality, latency, cost, and access-control correctness. Evaluation should separate retrieval quality from generation quality when possible.',
      highlights: [
        {
          title: 'Retrieval',
          description:
            'Measures whether useful source information is found.',
        },
        {
          title: 'Groundedness',
          description:
            'Measures whether generated answers are supported by retrieved evidence.',
        },
        {
          title: 'Operational',
          description:
            'Measures latency, cost, availability, and failure behavior.',
        },
      ],
    },

    {
      title: 'Metric Design',
      content:
        'A good metric has a clear definition, owner, data source, calculation method, time window, target or expected range when appropriate, and known limitations. Without consistent definitions, teams can argue about numbers instead of solving problems.',
      highlights: [
        {
          title: 'Definition',
          description:
            'Everyone should understand exactly what is being measured.',
        },
        {
          title: 'Owner',
          description:
            'Someone should be accountable for interpreting and acting on the metric.',
        },
        {
          title: 'Limitations',
          description:
            'Known blind spots and data-quality issues should be documented.',
        },
      ],
    },

    {
      title: 'Metric Hierarchy',
      content:
        'Metrics can be organized from business outcomes down to operational signals. For example, business impact can connect to product outcomes, product outcomes can connect to system behavior, and system behavior can connect to infrastructure signals. This prevents teams from optimizing low-level metrics without understanding why they matter.',
      highlights: [
        {
          title: 'Business outcome',
          description:
            'What value does the organization need?',
        },
        {
          title: 'Product outcome',
          description:
            'What user behavior or product result indicates progress?',
        },
        {
          title: 'Engineering signal',
          description:
            'What technical conditions enable that outcome?',
        },
      ],
    },

    {
      title: 'North Star Metrics',
      content:
        'A North Star Metric represents a central measure of product value or progress. Engineering organizations should be careful not to create a technical North Star that disconnects engineering activity from user and business outcomes.',
      highlights: [
        {
          title: 'Value',
          description:
            'The metric should represent meaningful customer or business value.',
        },
        {
          title: 'Alignment',
          description:
            'Teams should understand how their work contributes to the outcome.',
        },
        {
          title: 'Supporting metrics',
          description:
            'Operational and engineering metrics provide diagnostic context.',
        },
      ],
    },

    {
      title: 'Goodhart’s Law',
      content:
        'Goodhart’s Law is commonly summarized as: when a measure becomes a target, it can stop being a useful measure. Engineering leaders must design metrics carefully because teams naturally adapt behavior to incentives.',
      highlights: [
        {
          title: 'Gaming',
          description:
            'Teams may optimize the number rather than the underlying outcome.',
        },
        {
          title: 'Unintended behavior',
          description:
            'Poorly designed targets can create harmful incentives.',
        },
        {
          title: 'Balanced scorecard',
          description:
            'Use multiple complementary signals rather than one simplistic target.',
        },
      ],
    },

    {
      title: 'Vanity Metrics',
      content:
        'Vanity metrics look impressive but provide little decision value. Examples include raw commit counts, lines of code, number of tickets closed, or total test cases without context. A useful metric should connect to a meaningful outcome or decision.',
      highlights: [
        {
          title: 'Activity',
          description:
            'Measures what people did rather than what changed.',
        },
        {
          title: 'Context',
          description:
            'A number without context can be misleading.',
        },
        {
          title: 'Decision value',
          description:
            'Ask what decision the metric enables.',
        },
      ],
    },

    {
      title: 'Metrics and Team Performance',
      content:
        'Engineering metrics should generally be used to improve systems and team conditions rather than rank individual engineers. Individual productivity measurement creates incentives for gaming and can damage collaboration, knowledge sharing, and engineering quality.',
      highlights: [
        {
          title: 'Team-level',
          description:
            'Team and system metrics are usually more useful for engineering improvement.',
        },
        {
          title: 'Psychological safety',
          description:
            'People should be able to surface problems without fear that honest reporting will hurt them.',
        },
        {
          title: 'System thinking',
          description:
            'Many delivery problems are caused by process, architecture, dependencies, or organizational constraints.',
        },
      ],
    },

    {
      title: 'Metrics and Executive Reporting',
      content:
        'Executives generally need a concise view of business impact, delivery confidence, major risks, reliability, cost, and decisions requiring attention. Technical dashboards can provide detail for engineering teams, while executive reporting should translate those signals into business implications.',
      highlights: [
        {
          title: 'Outcome',
          description:
            'Explain what changed for customers or the business.',
        },
        {
          title: 'Risk',
          description:
            'Highlight significant technical or delivery risks.',
        },
        {
          title: 'Decision',
          description:
            'Clearly identify where leadership action is required.',
        },
      ],
    },

    {
      title: 'Metrics and TPM',
      content:
        'A Technical Program Manager can use metrics to track program health across milestones, dependencies, risks, delivery flow, quality, reliability, and business outcomes. The goal is not to create more reporting but to identify where intervention is needed.',
      highlights: [
        {
          title: 'Program health',
          description:
            'Use measurable signals to understand schedule, scope, risk, and quality.',
        },
        {
          title: 'Dependencies',
          description:
            'Track blocked work and cross-team constraints.',
        },
        {
          title: 'Escalation',
          description:
            'Use trends to identify issues before they become critical.',
        },
      ],
    },

    {
      title: 'Metrics and AI Product Management',
      content:
        'AI Product Managers need to connect model and system metrics with product outcomes. A technically impressive model is not necessarily a successful product if users do not adopt it, trust it, or achieve meaningful outcomes.',
      highlights: [
        {
          title: 'User value',
          description:
            'Measure whether the AI capability solves a real user problem.',
        },
        {
          title: 'Quality',
          description:
            'Measure whether outputs are sufficiently accurate and useful.',
        },
        {
          title: 'Economics',
          description:
            'Understand cost relative to business value.',
        },
      ],
    },

    {
      title: 'Metrics and Engineering Management',
      content:
        'Engineering Managers use metrics to understand system constraints, support teams, prioritize investments, communicate with leadership, and improve delivery. Metrics should complement direct conversations, observation, and qualitative information rather than replace them.',
      highlights: [
        {
          title: 'Diagnosis',
          description:
            'Use metrics to identify areas that need investigation.',
        },
        {
          title: 'Coaching',
          description:
            'Use evidence to improve team processes and remove obstacles.',
        },
        {
          title: 'Investment',
          description:
            'Support decisions about reliability, tooling, architecture, and capacity.',
        },
      ],
    },

    {
      title: 'Common Metrics Anti-Patterns',
      content:
        'Common mistakes include measuring individuals with simplistic productivity numbers, creating too many dashboards, optimizing a single metric, ignoring data quality, comparing teams without context, treating correlation as causation, and using metrics as punishment.',
      highlights: [
        {
          title: 'Single-metric optimization',
          description:
            'Improving one number can damage another important outcome.',
        },
        {
          title: 'Team comparison',
          description:
            'Different products and architectures make raw comparisons misleading.',
        },
        {
          title: 'Punitive use',
          description:
            'Metrics used as punishment encourage hiding problems and gaming.',
        },
        {
          title: 'Dashboard overload',
          description:
            'Too many signals make important information harder to see.',
        },
      ],
    },

    {
      title: 'Metrics Example: AI RAG Platform',
      content:
        'Imagine an enterprise RAG platform. A useful engineering scorecard might combine deployment frequency and lead time for delivery, change failure rate and restore time for reliability, retrieval quality and groundedness for AI quality, latency and cost per query for operations, and user task-success rate for product value. Together these metrics tell a much stronger story than any single number.',
      highlights: [
        {
          title: 'Delivery',
          description:
            'Deployment frequency and lead time.',
        },
        {
          title: 'Reliability',
          description:
            'Change failure rate, availability, and recovery time.',
        },
        {
          title: 'AI quality',
          description:
            'Retrieval relevance and groundedness.',
        },
        {
          title: 'Business value',
          description:
            'User task success and adoption.',
        },
      ],
    },

    {
      title: 'Metrics Example: AI Voice Agent',
      content:
        'For an AI voice-agent platform, leadership could track task completion rate, successful transfer or escalation rate, response latency, speech recognition quality, tool-call success rate, call abandonment, cost per minute, cost per completed business outcome, reliability, and customer satisfaction. This connects technical performance directly to business value.',
      highlights: [
        {
          title: 'Conversation quality',
          description:
            'Measure whether users can successfully complete intended interactions.',
        },
        {
          title: 'Operational quality',
          description:
            'Track latency, reliability, failures, and tool-call success.',
        },
        {
          title: 'Unit economics',
          description:
            'Understand cost per call and cost per successful outcome.',
        },
      ],
    },

    {
      title: 'Metric Review Cadence',
      content:
        'Different metrics require different review frequencies. Operational reliability signals may be reviewed continuously, delivery metrics weekly or per sprint, and strategic business outcomes monthly or quarterly. The review cadence should match how quickly the underlying system changes and how quickly leaders can act.',
      highlights: [
        {
          title: 'Operational',
          description:
            'Fast-moving signals require frequent monitoring.',
        },
        {
          title: 'Delivery',
          description:
            'Sprint or weekly review can reveal flow problems.',
        },
        {
          title: 'Strategic',
          description:
            'Business outcomes often need longer observation windows.',
        },
      ],
    },

    {
      title: 'Metric Ownership',
      content:
        'Every important metric should have a clear owner responsible for understanding the definition, data quality, trends, and appropriate action. Ownership does not mean the person is personally responsible for every outcome represented by the metric.',
      highlights: [
        {
          title: 'Definition owner',
          description:
            'Ensures the metric remains clearly defined.',
        },
        {
          title: 'Data owner',
          description:
            'Ensures the underlying data is reliable.',
        },
        {
          title: 'Action owner',
          description:
            'Ensures meaningful findings lead to decisions or improvements.',
        },
      ],
    },

    {
      title: 'Metric Quality',
      content:
        'A metric is only useful when the underlying data is trustworthy. Leaders should consider completeness, accuracy, consistency, freshness, sampling bias, changes in instrumentation, and changes in definitions when interpreting trends.',
      highlights: [
        {
          title: 'Accuracy',
          description:
            'Does the metric correctly represent what it claims to measure?',
        },
        {
          title: 'Consistency',
          description:
            'Has the definition remained stable over time?',
        },
        {
          title: 'Freshness',
          description:
            'Is the information recent enough for the decision?',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: Which engineering metrics do you track? Explain DORA metrics. How do you measure engineering productivity? Why are lines of code a poor metric? How do you measure developer experience? How would you build an engineering scorecard? How do you prevent metric gaming? Which metrics would you use for an AI product? How do engineering metrics connect to business outcomes? How do you use metrics in a TPM role?',
      highlights: [
        {
          title: 'DORA',
          description:
            'Know the four commonly referenced software delivery performance metrics.',
        },
        {
          title: 'Productivity',
          description:
            'Focus on flow and outcomes rather than activity counts.',
        },
        {
          title: 'Leadership',
          description:
            'Explain how metrics support decisions rather than surveillance.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I use engineering metrics primarily as decision signals, not as a way to rank individual engineers. I normally look at a balanced set covering delivery, reliability, quality, developer experience, and business outcomes. For delivery, DORA metrics such as deployment frequency, lead time, change failure rate, and restore time are useful. For reliability I look at availability, error rate, latency, SLO attainment, and incident trends. For quality I look at escaped defects, regression failures, and automation health. For developer experience I may track build time, CI duration, and environment setup friction. For AI systems I add quality, groundedness, latency, cost, safety, and task-success metrics. Most importantly, I ask what decision a metric enables and avoid using simplistic activity measures such as lines of code or commit counts as productivity proxies.”',
      highlights: [
        {
          title: 'Balanced scorecard',
          description:
            'Use multiple complementary dimensions.',
        },
        {
          title: 'Outcome focused',
          description:
            'Connect technical signals to customer and business outcomes.',
        },
        {
          title: 'Avoid gaming',
          description:
            'Do not turn simplistic metrics into individual performance targets.',
        },
        {
          title: 'AI-aware',
          description:
            'Include quality, safety, cost, latency, and task success for AI systems.',
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
    'aws',
    'azure',
    'google-cloud',
    'rag',
  ],
}

export default engineeringMetricsKnowledge
