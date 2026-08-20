import type { KnowledgeDefinition } from './knowledge'

export const rootCauseAnalysisKnowledge: KnowledgeDefinition = {
  technologyId: 'root-cause-analysis',
  slug: 'root-cause-analysis',
  title: 'Root Cause Analysis',
  summary:
    'Root Cause Analysis is a structured approach for understanding why a production problem occurred, why existing controls did not prevent or detect it, and what changes can reduce the probability or impact of recurrence.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Root Cause Analysis?',
      content:
        'Root Cause Analysis, commonly called RCA, is a structured investigation used to understand the underlying causes of a failure rather than stopping at the visible symptom. In production engineering, RCA helps teams identify technical, process, architectural, operational, and organizational factors that contributed to an incident.',
      highlights: [
        {
          title: 'RCA',
          description:
            'A structured investigation into the causes and contributing factors behind a problem.',
        },
        {
          title: 'Root cause',
          description:
            'An underlying causal factor that explains why the failure occurred.',
        },
        {
          title: 'Contributing factor',
          description:
            'A condition that increased the likelihood or impact of the failure.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a water pipe bursting in a building. The visible problem is water on the floor. Cleaning the water solves the immediate symptom, but RCA asks why the pipe burst. Was it excessive pressure, corrosion, poor installation, lack of maintenance, or a faulty component? The goal is to understand the deeper causes so the same problem is less likely to happen again.',
      highlights: [
        {
          title: 'Symptom',
          description:
            'The visible result of the failure.',
        },
        {
          title: 'Cause',
          description:
            'Something that directly contributed to the failure.',
        },
        {
          title: 'Prevention',
          description:
            'A change that reduces the chance of recurrence.',
        },
      ],
    },

    {
      title: 'Why RCA Matters',
      content:
        'Fixing only the immediate symptom can allow the same incident to happen again. RCA helps organizations learn from failures, improve reliability, strengthen operational controls, and prioritize engineering investments based on evidence.',
      highlights: [
        {
          title: 'Recurrence reduction',
          description:
            'Reducing the probability that a similar incident happens again.',
        },
        {
          title: 'Learning',
          description:
            'Turning production failures into organizational knowledge.',
        },
        {
          title: 'Reliability improvement',
          description:
            'Improving systems and processes based on actual failure patterns.',
        },
      ],
    },

    {
      title: 'Symptom vs Root Cause',
      content:
        'A symptom describes what users or operators observed. A root cause explains why that condition became possible. For example, “API requests returned 500 errors” is a symptom. “A connection-pool configuration change exhausted database connections under production load” is a causal explanation.',
      highlights: [
        {
          title: 'Symptom',
          description:
            'What was observed during the incident.',
        },
        {
          title: 'Immediate cause',
          description:
            'The direct mechanism that produced the failure.',
        },
        {
          title: 'Underlying cause',
          description:
            'A deeper condition that allowed the immediate failure to occur.',
        },
      ],
    },

    {
      title: 'Root Cause vs Contributing Factors',
      content:
        'Complex incidents often have multiple contributing factors. It is important not to force every incident into a single cause when several conditions interacted to produce the failure.',
      highlights: [
        {
          title: 'Root cause',
          description:
            'A fundamental causal condition identified by the investigation.',
        },
        {
          title: 'Contributing factor',
          description:
            'A condition that increased the likelihood, severity, or duration of the incident.',
        },
        {
          title: 'Interaction',
          description:
            'Multiple factors can combine to produce a failure.',
        },
      ],
    },

    {
      title: 'RCA During vs After an Incident',
      content:
        'During an active incident, the priority is usually mitigation and service recovery. RCA is generally performed after stabilization, when responders have enough evidence and time to investigate the deeper causes without distracting from recovery.',
      highlights: [
        {
          title: 'Incident response',
          description:
            'Focuses on reducing impact and restoring service.',
        },
        {
          title: 'RCA',
          description:
            'Focuses on understanding why the incident occurred.',
        },
        {
          title: 'Sequence',
          description:
            'Stabilize first when necessary, then investigate deeply.',
        },
      ],
    },

    {
      title: 'RCA Investigation Process',
      content:
        'A practical RCA process usually includes defining the problem, establishing the timeline, collecting evidence, identifying causal relationships, testing hypotheses, determining root and contributing causes, identifying control gaps, and creating corrective actions.',
      highlights: [
        {
          title: 'Problem definition',
          description:
            'Clearly state what failed and what impact occurred.',
        },
        {
          title: 'Evidence',
          description:
            'Use logs, metrics, traces, deployment records, configuration history, and other reliable information.',
        },
        {
          title: 'Corrective actions',
          description:
            'Create concrete improvements based on the findings.',
        },
      ],
    },

    {
      title: 'Problem Statement',
      content:
        'A good RCA starts with a precise problem statement. It should describe the affected service, observed behavior, time period, scope, and customer or business impact without prematurely claiming a cause.',
      highlights: [
        {
          title: 'What',
          description:
            'What behavior failed?',
        },
        {
          title: 'When',
          description:
            'When did the impact occur?',
        },
        {
          title: 'Who',
          description:
            'Which users, systems, or business workflows were affected?',
        },
        {
          title: 'Impact',
          description:
            'What measurable effect did the failure create?',
        },
      ],
    },

    {
      title: 'Incident Timeline',
      content:
        'The incident timeline is one of the most useful RCA artifacts. It connects changes, symptoms, alerts, decisions, mitigation actions, and recovery events in chronological order.',
      highlights: [
        {
          title: 'Change timeline',
          description:
            'Records deployments, configuration changes, infrastructure changes, and dependency changes.',
        },
        {
          title: 'Symptom timeline',
          description:
            'Records when failures and abnormal behavior appeared.',
        },
        {
          title: 'Recovery timeline',
          description:
            'Records mitigation and recovery events.',
        },
      ],
    },

    {
      title: 'Evidence Collection',
      content:
        'RCA should be evidence-driven. Useful evidence includes application logs, infrastructure metrics, distributed traces, dashboards, deployment history, configuration changes, database events, cloud-provider information, alerts, customer reports, and incident notes.',
      highlights: [
        {
          title: 'Logs',
          description:
            'Detailed records of application or infrastructure events.',
        },
        {
          title: 'Metrics',
          description:
            'Numerical measurements showing system behavior and trends.',
        },
        {
          title: 'Traces',
          description:
            'Request-level information showing how operations move across distributed components.',
        },
      ],
    },

    {
      title: 'Hypothesis-Driven Investigation',
      content:
        'Investigators should form explicit hypotheses and test them against evidence. This prevents teams from jumping onto the first plausible explanation and building an RCA around assumptions.',
      highlights: [
        {
          title: 'Hypothesis',
          description:
            'A proposed explanation for the observed failure.',
        },
        {
          title: 'Evidence',
          description:
            'Information that supports or contradicts the hypothesis.',
        },
        {
          title: 'Validation',
          description:
            'Testing whether the hypothesis explains the observed behavior.',
        },
      ],
    },

    {
      title: 'Five Whys',
      content:
        'The Five Whys technique repeatedly asks why a failure occurred to move from an immediate symptom toward deeper causes. It is a thinking tool rather than a requirement to stop exactly after five questions.',
      highlights: [
        {
          title: 'Why chain',
          description:
            'A sequence of causal questions used to explore deeper conditions.',
        },
        {
          title: 'Immediate cause',
          description:
            'The first technical explanation of the failure.',
        },
        {
          title: 'Systemic cause',
          description:
            'A broader weakness in architecture, process, testing, monitoring, or operations.',
        },
      ],
    },

    {
      title: 'Fishbone Analysis',
      content:
        'Fishbone, or Ishikawa, analysis organizes possible causes into categories such as people, process, technology, environment, and measurement. It can help teams explore multiple causal dimensions instead of focusing only on code.',
      highlights: [
        {
          title: 'People',
          description:
            'Human roles, decisions, training, or communication factors.',
        },
        {
          title: 'Process',
          description:
            'Workflow, review, testing, deployment, or operational process factors.',
        },
        {
          title: 'Technology',
          description:
            'Architecture, software, infrastructure, dependencies, or configuration factors.',
        },
      ],
    },

    {
      title: 'Fault Tree Thinking',
      content:
        'Fault-tree analysis works backward from a failure and explores the combinations of conditions that could produce it. This is especially useful for complex systems where several failures must occur together.',
      highlights: [
        {
          title: 'Top event',
          description:
            'The failure being investigated.',
        },
        {
          title: 'AND condition',
          description:
            'Multiple conditions must occur together for the failure path to happen.',
        },
        {
          title: 'OR condition',
          description:
            'Any one of several conditions can create the failure path.',
        },
      ],
    },

    {
      title: 'Change Correlation',
      content:
        'Recent changes are important evidence during RCA. Teams should examine deployments, feature flags, configuration changes, database migrations, infrastructure changes, dependency upgrades, and provider changes around the time the incident began.',
      highlights: [
        {
          title: 'Deployment correlation',
          description:
            'Evaluating whether an incident began after a software release.',
        },
        {
          title: 'Configuration change',
          description:
            'A modification to runtime or infrastructure settings.',
        },
        {
          title: 'Dependency change',
          description:
            'A change in an external or internal component required by the system.',
        },
      ],
    },

    {
      title: 'Control Failure',
      content:
        'A strong RCA asks not only why the system failed, but also why existing controls did not prevent, detect, contain, or recover from the failure. Controls include tests, validation, monitoring, alerts, rate limits, access controls, deployment safeguards, and runbooks.',
      highlights: [
        {
          title: 'Prevention control',
          description:
            'A mechanism intended to stop a failure before production impact.',
        },
        {
          title: 'Detection control',
          description:
            'A mechanism intended to identify a failure quickly.',
        },
        {
          title: 'Recovery control',
          description:
            'A mechanism intended to restore service after failure.',
        },
      ],
    },

    {
      title: 'Detection Gap',
      content:
        'A detection gap exists when an incident occurs but the organization does not detect it quickly enough. RCA should investigate whether appropriate signals, thresholds, dashboards, alerts, ownership, and escalation paths existed.',
      highlights: [
        {
          title: 'Detection gap',
          description:
            'A weakness that delays recognition of a production problem.',
        },
        {
          title: 'MTTD',
          description:
            'Mean Time To Detect, measuring the time between incident start and detection.',
        },
        {
          title: 'Observability',
          description:
            'The ability to understand system behavior using available telemetry.',
        },
      ],
    },

    {
      title: 'Containment Gap',
      content:
        'A containment gap occurs when the organization detects a problem but cannot limit its blast radius effectively. RCA should examine whether mechanisms such as feature flags, traffic controls, isolation, rate limiting, circuit breakers, or failover were available and effective.',
      highlights: [
        {
          title: 'Containment',
          description:
            'Limiting the scope or severity of an ongoing failure.',
        },
        {
          title: 'Blast radius',
          description:
            'The scope of systems, users, or workflows affected.',
        },
        {
          title: 'Isolation',
          description:
            'Separating unhealthy components so failure does not spread further.',
        },
      ],
    },

    {
      title: 'Recovery Gap',
      content:
        'A recovery gap exists when service restoration takes longer than necessary because rollback, failover, backup, disaster-recovery, runbook, or operational capabilities are insufficient.',
      highlights: [
        {
          title: 'Recovery gap',
          description:
            'A weakness that increases the time required to restore service.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a system to a previous known-good version.',
        },
        {
          title: 'Failover',
          description:
            'Moving service operation to an alternate healthy system.',
        },
      ],
    },

    {
      title: 'Corrective Actions',
      content:
        'Corrective actions directly address weaknesses identified by the RCA. They may include fixing defective code, changing configuration, improving tests, correcting data, repairing infrastructure, or changing an operational process.',
      highlights: [
        {
          title: 'Corrective action',
          description:
            'An action that addresses an identified problem.',
        },
        {
          title: 'Owner',
          description:
            'The person or team accountable for completing the action.',
        },
        {
          title: 'Due date',
          description:
            'The expected completion date for the improvement.',
        },
      ],
    },

    {
      title: 'Preventive Actions',
      content:
        'Preventive actions reduce the probability that similar incidents will occur. Examples include stronger validation, automated testing, safer deployments, better monitoring, architectural improvements, dependency isolation, and capacity planning.',
      highlights: [
        {
          title: 'Prevention',
          description:
            'Reducing the likelihood of recurrence.',
        },
        {
          title: 'Automation',
          description:
            'Replacing error-prone manual steps with repeatable automated controls.',
        },
        {
          title: 'Guardrail',
          description:
            'A mechanism that prevents unsafe behavior or limits its impact.',
        },
      ],
    },

    {
      title: 'Prioritizing RCA Actions',
      content:
        'Not every action should have the same priority. Leaders should consider customer impact, recurrence probability, blast radius, implementation effort, regulatory requirements, and whether the action addresses a systemic weakness.',
      highlights: [
        {
          title: 'Impact',
          description:
            'The potential customer or business benefit of fixing the weakness.',
        },
        {
          title: 'Recurrence probability',
          description:
            'The likelihood that the problem may happen again.',
        },
        {
          title: 'Effort',
          description:
            'The engineering or operational work required to implement the improvement.',
        },
      ],
    },

    {
      title: 'Blameless RCA',
      content:
        'A blameless RCA focuses on system conditions, decisions, processes, and contributing factors rather than assigning personal blame. This encourages honest reporting and makes it easier to discover weaknesses that otherwise remain hidden.',
      highlights: [
        {
          title: 'Blameless',
          description:
            'Focused on learning and improving the system rather than punishing individuals.',
        },
        {
          title: 'Psychological safety',
          description:
            'An environment where people can report mistakes and failures honestly.',
        },
        {
          title: 'System thinking',
          description:
            'Looking at the broader conditions that made the failure possible.',
        },
      ],
    },

    {
      title: 'RCA Documentation',
      content:
        'A useful RCA document normally contains incident summary, customer impact, timeline, detection method, mitigation, root cause, contributing factors, control gaps, what worked, what did not work, and corrective actions with owners and priorities.',
      highlights: [
        {
          title: 'Incident summary',
          description:
            'A concise explanation of what happened and its impact.',
        },
        {
          title: 'Root cause',
          description:
            'The causal explanation supported by evidence.',
        },
        {
          title: 'Action plan',
          description:
            'Concrete improvements with ownership and tracking.',
        },
      ],
    },

    {
      title: 'RCA and Incident Management',
      content:
        'Incident Management coordinates the live response, while RCA explains why the incident occurred and how the organization can reduce recurrence. These disciplines are closely connected but have different primary objectives.',
      highlights: [
        {
          title: 'Incident Management',
          description:
            'Coordinates detection, response, mitigation, communication, and recovery.',
        },
        {
          title: 'RCA',
          description:
            'Investigates causes and identifies improvements after stabilization.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Uses RCA findings to strengthen the overall production system.',
        },
      ],
    },

    {
      title: 'RCA and Observability',
      content:
        'Good observability dramatically improves RCA because responders can reconstruct system behavior using metrics, logs, traces, and events. Poor observability often turns RCA into speculation.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Show trends and changes in system behavior.',
        },
        {
          title: 'Logs',
          description:
            'Provide detailed records of events.',
        },
        {
          title: 'Traces',
          description:
            'Show request flow across distributed services.',
        },
      ],
    },

    {
      title: 'RCA and Distributed Systems',
      content:
        'Distributed systems make RCA harder because failures can propagate through dependencies, networks, queues, caches, databases, and external services. Teams should reconstruct the complete request path and distinguish primary failures from secondary symptoms.',
      highlights: [
        {
          title: 'Dependency chain',
          description:
            'The sequence of services and components involved in a workflow.',
        },
        {
          title: 'Failure propagation',
          description:
            'A failure in one component creates failures or degradation elsewhere.',
        },
        {
          title: 'Secondary symptom',
          description:
            'A visible failure caused by an upstream problem rather than the original failure.',
        },
      ],
    },

    {
      title: 'RCA and Microservices',
      content:
        'In microservices architectures, a single customer-facing failure may involve multiple services. RCA should identify the initiating failure, propagation path, dependency behavior, and controls that failed to contain the impact.',
      highlights: [
        {
          title: 'Service dependency',
          description:
            'A service required by another service.',
        },
        {
          title: 'Propagation path',
          description:
            'The sequence through which an initial failure spreads.',
        },
        {
          title: 'Boundary failure',
          description:
            'A problem occurring at the interaction between services.',
        },
      ],
    },

    {
      title: 'RCA and Cloud Infrastructure',
      content:
        'Cloud incidents can involve compute failures, networking, storage, IAM, DNS, managed services, regional outages, quotas, configuration errors, or provider incidents. RCA should separate customer application causes from infrastructure-provider causes while considering how the architecture responded to the dependency failure.',
      highlights: [
        {
          title: 'Cloud dependency',
          description:
            'A cloud-managed service required by the application.',
        },
        {
          title: 'Quota',
          description:
            'A provider-defined resource or usage limit.',
        },
        {
          title: 'Regional failure',
          description:
            'A failure affecting infrastructure or services within a geographic region.',
        },
      ],
    },

    {
      title: 'RCA for RAG Systems',
      content:
        'RCA for RAG systems may investigate ingestion failures, stale documents, incorrect chunking, embedding problems, vector-store failures, retrieval degradation, permission issues, prompt changes, model-provider failures, or evaluation gaps.',
      highlights: [
        {
          title: 'Retrieval failure',
          description:
            'The system fails to retrieve useful context for a query.',
        },
        {
          title: 'Freshness failure',
          description:
            'Indexed knowledge is older than the required freshness objective.',
        },
        {
          title: 'Evaluation gap',
          description:
            'Insufficient testing or evaluation allowed a quality regression to reach production.',
        },
      ],
    },

    {
      title: 'RCA for AI Systems',
      content:
        'AI systems introduce additional RCA dimensions such as model changes, provider behavior, prompt changes, retrieval quality, tool failures, data quality, model latency, token usage, safety controls, and evaluation gaps. Technical availability alone may not explain an AI incident.',
      highlights: [
        {
          title: 'Model change',
          description:
            'A change in the model or model configuration that may affect system behavior.',
        },
        {
          title: 'Prompt change',
          description:
            'A modification to instructions provided to the model.',
        },
        {
          title: 'Evaluation gap',
          description:
            'A weakness in testing or monitoring that allowed undesirable model behavior to reach production.',
        },
      ],
    },

    {
      title: 'RCA for AI Voice Platforms',
      content:
        'For an AI voice platform, RCA can investigate telephony connection failures, speech-to-text errors, model latency, text-to-speech failures, provider rate limits, routing problems, dropped calls, unexpected cost increases, or incorrect call outcomes.',
      highlights: [
        {
          title: 'Telephony failure',
          description:
            'A failure in call connection or telephony infrastructure.',
        },
        {
          title: 'Speech pipeline failure',
          description:
            'A problem in speech recognition, reasoning, or speech generation.',
        },
        {
          title: 'Latency regression',
          description:
            'A meaningful increase in response time affecting the voice experience.',
        },
      ],
    },

    {
      title: 'RCA Metrics',
      content:
        'Useful RCA and reliability measurements include incident frequency, recurrence rate, MTTD, MTTR, customer-impact duration, action-item completion rate, time to complete RCA, percentage of incidents with identified causes, and repeated failure categories.',
      highlights: [
        {
          title: 'Recurrence rate',
          description:
            'How often similar incidents happen again.',
        },
        {
          title: 'MTTR',
          description:
            'Mean Time To Recovery or Resolution according to the organization’s defined metric.',
        },
        {
          title: 'Action completion',
          description:
            'The percentage of post-incident improvements completed as planned.',
        },
      ],
    },

    {
      title: 'Common RCA Mistakes',
      content:
        'Common mistakes include stopping at the first obvious cause, blaming an individual, relying on assumptions instead of evidence, ignoring contributing factors, producing vague action items, assigning no owner, failing to follow up, and confusing mitigation with root-cause resolution.',
      highlights: [
        {
          title: 'First-cause bias',
          description:
            'Stopping investigation at the first plausible explanation.',
        },
        {
          title: 'Blame',
          description:
            'Focusing on individual mistakes instead of system conditions.',
        },
        {
          title: 'Vague action',
          description:
            'Writing actions such as “be more careful” without measurable implementation.',
        },
        {
          title: 'No follow-through',
          description:
            'Failing to complete identified improvements.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: Walk me through how you perform RCA after a production incident. How do you distinguish root cause from contributing factors? What is the Five Whys technique? How do you keep RCA blameless? How do you prioritize corrective actions? How would you perform RCA for a distributed AI system? How do you prevent the same incident from recurring?',
      highlights: [
        {
          title: 'Investigation',
          description:
            'Explain how you move from symptoms to evidence-backed causes.',
        },
        {
          title: 'Leadership',
          description:
            'Demonstrate structured thinking and cross-functional coordination.',
        },
        {
          title: 'Prevention',
          description:
            'Show how findings become concrete reliability improvements.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “Once the system is stable, I start RCA with a precise problem statement and customer-impact assessment. I reconstruct the timeline using logs, metrics, traces, deployment history, and configuration changes. I form hypotheses and validate them against evidence rather than assuming the first visible failure is the root cause. I separate the direct cause from contributing factors and also ask which prevention, detection, containment, or recovery controls failed. Finally, I create specific corrective and preventive actions with owners and priorities, and I track those actions to completion. I keep the process blameless because the goal is to improve the system, not find someone to blame.”',
      highlights: [
        {
          title: 'Evidence first',
          description:
            'Use observable facts before forming conclusions.',
        },
        {
          title: 'Systemic thinking',
          description:
            'Look beyond the immediate technical failure.',
        },
        {
          title: 'Action ownership',
          description:
            'Ensure RCA results in concrete improvements.',
        },
      ],
    },

    {
      title: 'RCA for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, RCA is a leadership mechanism for converting operational failures into organizational improvement. The leader should ensure the investigation is structured, evidence-based, blameless, cross-functional, and connected to measurable actions and reliability priorities.',
      highlights: [
        {
          title: 'Cross-functional leadership',
          description:
            'Bring engineering, product, infrastructure, security, support, and business stakeholders together when necessary.',
        },
        {
          title: 'Program governance',
          description:
            'Track corrective actions, owners, deadlines, and recurring incident patterns.',
        },
        {
          title: 'Risk management',
          description:
            'Use RCA findings to identify and reduce systemic operational risks.',
        },
        {
          title: 'Executive communication',
          description:
            'Translate technical causes and improvements into business impact and risk reduction.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
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
    'disaster-recovery',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'event-driven-systems',
    'queues',
    'caching',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'deployment',
    'deployment-strategy',
    'rollback-strategy',
    'blue-green-deployment',
    'canary-deployment',
    'feature-flags',
    'kubernetes',
    'docker',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default rootCauseAnalysisKnowledge
