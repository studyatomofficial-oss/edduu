import type { KnowledgeDefinition } from './knowledge'

export const incidentManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'incident-management',
  slug: 'incident-management',
  title: 'Incident Management',
  summary:
    'Incident Management is the structured process of detecting, assessing, coordinating, mitigating, resolving, communicating, and learning from production incidents.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Incident Management?',
      content:
        'Incident Management is the organized process used to respond to significant production problems. It brings together detection, triage, ownership, communication, mitigation, resolution, recovery, and post-incident learning so that teams can restore normal service as quickly and safely as possible.',
      highlights: [
        {
          title: 'Incident',
          description:
            'A production event that causes or threatens meaningful impact to users, systems, or business operations.',
        },
        {
          title: 'Incident Management',
          description:
            'The structured process for coordinating response to an incident.',
        },
        {
          title: 'Mitigation',
          description:
            'An action that reduces customer or system impact while the underlying cause may still exist.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a hospital emergency room. The goal is not to immediately understand every medical detail. First, the team identifies how serious the situation is, assigns responsibility, stabilizes the patient, communicates with the right people, and then investigates the deeper cause. Incident Management works in a similar way for production systems.',
      highlights: [
        {
          title: 'Triage',
          description:
            'Determining how serious the situation is and what needs attention first.',
        },
        {
          title: 'Stabilization',
          description:
            'Reducing immediate harm and restoring safe operation.',
        },
        {
          title: 'Specialists',
          description:
            'Different technical teams brought in according to the incident.',
        },
      ],
    },

    {
      title: 'Why Incident Management Matters',
      content:
        'Modern production systems are complex and failures are inevitable. A mature incident-management process reduces recovery time, improves coordination, protects customers, creates clear accountability, and turns operational failures into learning opportunities.',
      highlights: [
        {
          title: 'MTTR',
          description:
            'Mean Time To Recovery or Resolution, depending on the organization’s terminology.',
        },
        {
          title: 'Coordination',
          description:
            'Ensuring multiple responders work from a common understanding of the incident.',
        },
        {
          title: 'Learning',
          description:
            'Using incidents to improve systems, processes, and engineering practices.',
        },
      ],
    },

    {
      title: 'Incident vs Alert',
      content:
        'An alert is a detection signal, while an incident is a significant operational event requiring coordinated response. One incident may produce many alerts, and not every alert needs to become an incident.',
      highlights: [
        {
          title: 'Alert',
          description:
            'A notification that a defined condition has occurred.',
        },
        {
          title: 'Incident',
          description:
            'A significant event requiring coordinated operational response.',
        },
        {
          title: 'Alert aggregation',
          description:
            'Combining related alerts so they can be understood as one operational event.',
        },
      ],
    },

    {
      title: 'Incident Lifecycle',
      content:
        'A typical incident lifecycle includes detection, acknowledgement, triage, declaration, response, mitigation, recovery, resolution, communication, and post-incident review. Different organizations may use slightly different names or combine some stages.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Recognizing that something abnormal or harmful is occurring.',
        },
        {
          title: 'Response',
          description:
            'Coordinating people and technical actions during the incident.',
        },
        {
          title: 'Resolution',
          description:
            'Returning the affected service to normal operation.',
        },
      ],
    },

    {
      title: 'Detection',
      content:
        'Incidents can be detected through automated alerts, monitoring dashboards, logs, traces, customer reports, support teams, business teams, or engineers noticing abnormal behavior.',
      highlights: [
        {
          title: 'Automated detection',
          description:
            'Monitoring systems identify a problem automatically.',
        },
        {
          title: 'Customer detection',
          description:
            'Users report a problem before internal systems detect it.',
        },
        {
          title: 'Internal detection',
          description:
            'Employees or engineers identify abnormal system behavior.',
        },
      ],
    },

    {
      title: 'Incident Declaration',
      content:
        'Incident declaration formally establishes that a significant operational event is occurring and activates the response process. Clear declaration criteria prevent teams from spending too long debating whether an incident exists.',
      highlights: [
        {
          title: 'Declaration',
          description:
            'The formal recognition that coordinated incident response is required.',
        },
        {
          title: 'Severity',
          description:
            'A classification representing the impact and urgency of the incident.',
        },
        {
          title: 'Activation',
          description:
            'Starting the defined response process and bringing in required responders.',
        },
      ],
    },

    {
      title: 'Incident Severity',
      content:
        'Severity levels help teams determine response urgency, communication requirements, escalation, and leadership involvement. Exact levels vary by organization, but they should be clearly defined before incidents happen.',
      highlights: [
        {
          title: 'Critical',
          description:
            'Severe customer, safety, financial, or business impact requiring immediate response.',
        },
        {
          title: 'High',
          description:
            'Significant impact requiring rapid coordinated response.',
        },
        {
          title: 'Medium',
          description:
            'Meaningful but more contained impact that can follow a less urgent response path.',
        },
      ],
    },

    {
      title: 'Impact Assessment',
      content:
        'Responders should quickly determine what is affected, who is affected, how much traffic or functionality is impacted, when the problem started, and whether the impact is increasing.',
      highlights: [
        {
          title: 'Blast radius',
          description:
            'The scope of systems, users, regions, or workflows affected by the incident.',
        },
        {
          title: 'Customer impact',
          description:
            'The effect experienced by users.',
        },
        {
          title: 'Business impact',
          description:
            'The effect on revenue, operations, compliance, reputation, or other business outcomes.',
        },
      ],
    },

    {
      title: 'Incident Commander',
      content:
        'The Incident Commander is responsible for coordinating the response rather than personally solving every technical problem. The role keeps the team aligned, establishes priorities, manages escalation, and ensures decisions are made efficiently.',
      highlights: [
        {
          title: 'Incident Commander',
          description:
            'The person responsible for coordinating the overall incident response.',
        },
        {
          title: 'Coordination',
          description:
            'Managing people, priorities, communication, and decisions during the incident.',
        },
        {
          title: 'Delegation',
          description:
            'Assigning technical investigation and operational tasks to appropriate responders.',
        },
      ],
    },

    {
      title: 'Technical Lead',
      content:
        'The Technical Lead coordinates technical investigation and mitigation. They work with engineers to form hypotheses, test them, evaluate risks, and choose technical actions.',
      highlights: [
        {
          title: 'Technical Lead',
          description:
            'The responder coordinating technical diagnosis and mitigation.',
        },
        {
          title: 'Hypothesis',
          description:
            'A possible explanation for the observed symptoms.',
        },
        {
          title: 'Technical mitigation',
          description:
            'A technical action intended to reduce or remove impact.',
        },
      ],
    },

    {
      title: 'Communications Lead',
      content:
        'The Communications Lead ensures stakeholders receive timely and accurate updates. This role prevents engineers from becoming overloaded with repeated communication tasks during an incident.',
      highlights: [
        {
          title: 'Communication lead',
          description:
            'The person coordinating internal and external incident communication.',
        },
        {
          title: 'Status update',
          description:
            'A concise statement describing current impact, actions, and next update expectations.',
        },
        {
          title: 'Stakeholder',
          description:
            'A person or group affected by or responsible for decisions related to the incident.',
        },
      ],
    },

    {
      title: 'Scribe',
      content:
        'A Scribe records important incident events, decisions, commands, hypotheses, and timestamps. A reliable timeline is extremely useful during the incident and during later Root Cause Analysis.',
      highlights: [
        {
          title: 'Scribe',
          description:
            'The person responsible for maintaining the incident timeline and key notes.',
        },
        {
          title: 'Timeline',
          description:
            'A chronological record of symptoms, actions, decisions, and changes.',
        },
        {
          title: 'Decision log',
          description:
            'A record of important operational decisions and their reasoning.',
        },
      ],
    },

    {
      title: 'Triage',
      content:
        'Triage is the process of quickly understanding the incident, determining severity and scope, identifying likely affected components, and deciding what should happen next. Triage is not the same as finding the final root cause.',
      highlights: [
        {
          title: 'Triage',
          description:
            'Rapid assessment of incident severity, scope, and immediate priorities.',
        },
        {
          title: 'Scope',
          description:
            'The services, users, regions, and workflows affected.',
        },
        {
          title: 'Priority',
          description:
            'The order in which actions should be taken based on impact and urgency.',
        },
      ],
    },

    {
      title: 'Mitigation vs Root Cause',
      content:
        'During an incident, restoring service is usually more important than immediately proving the exact root cause. A mitigation can reduce impact quickly while deeper investigation continues separately.',
      highlights: [
        {
          title: 'Mitigation',
          description:
            'An action that reduces immediate impact.',
        },
        {
          title: 'Root cause',
          description:
            'The underlying reason the incident occurred.',
        },
        {
          title: 'Recovery',
          description:
            'Returning the service to an acceptable operating state.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'Rollback is a common mitigation strategy when a recent deployment is suspected of causing an incident. The previous known-good version is restored to reduce impact while investigation continues.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a deployment to a previous known-good version.',
        },
        {
          title: 'Known-good version',
          description:
            'A version with established acceptable production behavior.',
        },
        {
          title: 'Deployment correlation',
          description:
            'Evaluating whether the incident began or worsened after a release.',
        },
      ],
    },

    {
      title: 'Feature Flag Mitigation',
      content:
        'Feature flags can allow teams to disable a problematic feature without redeploying the entire application. This can be especially useful when a failure is isolated to a recently introduced capability.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A control that determines whether a feature is enabled.',
        },
        {
          title: 'Kill switch',
          description:
            'A mechanism for rapidly disabling a problematic feature.',
        },
        {
          title: 'Targeted mitigation',
          description:
            'Reducing impact while preserving unaffected functionality.',
        },
      ],
    },

    {
      title: 'Traffic Shifting',
      content:
        'Traffic can sometimes be shifted away from an unhealthy deployment, region, or dependency. Techniques include load-balancer changes, routing changes, blue-green deployment strategies, and controlled traffic reduction.',
      highlights: [
        {
          title: 'Traffic shifting',
          description:
            'Changing where requests are sent to reduce impact.',
        },
        {
          title: 'Failover',
          description:
            'Moving traffic to an alternate healthy system.',
        },
        {
          title: 'Regional isolation',
          description:
            'Restricting impact to a problematic region while preserving service elsewhere.',
        },
      ],
    },

    {
      title: 'Incident Communication',
      content:
        'Communication should be timely, factual, concise, and consistent. Stakeholders should understand what is affected, what the team is doing, whether there is a workaround, and when the next update will arrive.',
      highlights: [
        {
          title: 'Impact statement',
          description:
            'A concise description of what users are experiencing.',
        },
        {
          title: 'Action statement',
          description:
            'A summary of what the response team is doing.',
        },
        {
          title: 'Next update',
          description:
            'A stated expectation for when more information will be provided.',
        },
      ],
    },

    {
      title: 'Internal vs External Communication',
      content:
        'Internal engineering communication can contain detailed technical information, while customer-facing communication should focus on impact, status, mitigation, and expected next steps. Sensitive internal details should not be unnecessarily exposed externally.',
      highlights: [
        {
          title: 'Internal update',
          description:
            'Detailed information intended for responders and internal stakeholders.',
        },
        {
          title: 'External update',
          description:
            'Customer-oriented information about service impact and recovery.',
        },
        {
          title: 'Information boundary',
          description:
            'Separating operational detail from information appropriate for customers.',
        },
      ],
    },

    {
      title: 'Incident Timeline',
      content:
        'A timeline captures when the incident started, when it was detected, when responders were engaged, what changes were made, when mitigation occurred, and when service recovered. Accurate timestamps make later analysis much easier.',
      highlights: [
        {
          title: 'Start time',
          description:
            'When customer or system impact began.',
        },
        {
          title: 'Detection time',
          description:
            'When the organization became aware of the problem.',
        },
        {
          title: 'Recovery time',
          description:
            'When service returned to the expected operating state.',
        },
      ],
    },

    {
      title: 'MTTD',
      content:
        'Mean Time To Detect measures how long it takes an organization to detect incidents after they begin. Lower MTTD generally indicates stronger monitoring and detection capabilities, although measurement definitions should be consistent.',
      highlights: [
        {
          title: 'MTTD',
          description:
            'Mean Time To Detect.',
        },
        {
          title: 'Detection gap',
          description:
            'The time between incident start and detection.',
        },
        {
          title: 'Observability improvement',
          description:
            'Improving telemetry and alerting can reduce detection time.',
        },
      ],
    },

    {
      title: 'MTTR',
      content:
        'Mean Time To Recovery or Resolution measures how long it takes to restore service after an incident. Organizations should clearly define whether their metric measures recovery, resolution, or another operational milestone.',
      highlights: [
        {
          title: 'MTTR',
          description:
            'A family of metrics measuring time required to restore or resolve service.',
        },
        {
          title: 'Recovery',
          description:
            'Returning service to an acceptable operating condition.',
        },
        {
          title: 'Resolution',
          description:
            'Completing the work required to close the incident according to organizational criteria.',
        },
      ],
    },

    {
      title: 'Incident Escalation',
      content:
        'Escalation brings additional expertise or authority into an incident when the current responders cannot resolve it quickly enough. Escalation paths should be defined before incidents occur.',
      highlights: [
        {
          title: 'Escalation',
          description:
            'Increasing the level or scope of response when needed.',
        },
        {
          title: 'Subject matter expert',
          description:
            'A specialist brought in for a particular technical or business area.',
        },
        {
          title: 'Leadership escalation',
          description:
            'Bringing organizational leadership into incidents with major business impact.',
        },
      ],
    },

    {
      title: 'Incident Swarming',
      content:
        'Swarming brings multiple relevant responders together quickly rather than passing the problem sequentially from team to team. This can reduce delays in complex distributed systems.',
      highlights: [
        {
          title: 'Swarming',
          description:
            'Bringing relevant specialists together to solve an incident collaboratively.',
        },
        {
          title: 'Parallel investigation',
          description:
            'Investigating multiple plausible failure areas simultaneously.',
        },
        {
          title: 'Reduced handoffs',
          description:
            'Avoiding slow sequential escalation between teams.',
        },
      ],
    },

    {
      title: 'Incident Runbooks',
      content:
        'Runbooks document known response procedures for common alerts and incidents. A good runbook tells responders what to check, what commands or dashboards to use, what actions are safe, and when to escalate.',
      highlights: [
        {
          title: 'Runbook',
          description:
            'Documented operational instructions for responding to a known condition.',
        },
        {
          title: 'Diagnostic checklist',
          description:
            'A structured sequence of checks used during investigation.',
        },
        {
          title: 'Safe action',
          description:
            'An operational step with known and acceptable risk.',
        },
      ],
    },

    {
      title: 'Incident Command System',
      content:
        'A structured incident-command model separates coordination from technical execution. The Incident Commander manages priorities and communication, while technical and communications roles focus on their respective responsibilities.',
      highlights: [
        {
          title: 'Command',
          description:
            'Overall coordination and decision management.',
        },
        {
          title: 'Operations',
          description:
            'Technical work required to mitigate and recover the system.',
        },
        {
          title: 'Communications',
          description:
            'Stakeholder and customer communication management.',
        },
      ],
    },

    {
      title: 'Incident Management Tools',
      content:
        'Organizations commonly combine alerting platforms, incident-management systems, chat tools, dashboards, ticketing systems, documentation platforms, and status pages. The toolchain matters less than having a predictable operational process.',
      highlights: [
        {
          title: 'Incident platform',
          description:
            'A system for coordinating alerts, responders, escalation, and incident records.',
        },
        {
          title: 'Chat',
          description:
            'A collaboration channel for real-time incident coordination.',
        },
        {
          title: 'Status page',
          description:
            'A customer-facing or internal page communicating service status.',
        },
      ],
    },

    {
      title: 'Incident Management and Observability',
      content:
        'Observability provides the evidence needed during an incident. Metrics reveal trends and health, logs provide detailed events, and traces show request paths across distributed services.',
      highlights: [
        {
          title: 'Metrics',
          description:
            'Aggregated numerical signals used to detect and scope problems.',
        },
        {
          title: 'Logs',
          description:
            'Detailed records useful for understanding specific events.',
        },
        {
          title: 'Traces',
          description:
            'Request-level evidence showing how operations moved through services.',
        },
      ],
    },

    {
      title: 'Incident Management and Alerting',
      content:
        'Alerting detects conditions, while Incident Management coordinates the response. High-quality alerting reduces the time needed to recognize an incident and provides responders with useful context.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Identifying a potentially harmful condition.',
        },
        {
          title: 'Coordination',
          description:
            'Organizing people and technical work around the incident.',
        },
        {
          title: 'Context',
          description:
            'Providing dashboards, runbooks, owners, and relevant evidence.',
        },
      ],
    },

    {
      title: 'Incident Management and SLOs',
      content:
        'Service Level Objectives provide a customer-oriented way to evaluate reliability. Incidents should be assessed not only by infrastructure symptoms but also by whether important service-level objectives are being violated.',
      highlights: [
        {
          title: 'SLO',
          description:
            'A target level of service reliability or performance.',
        },
        {
          title: 'SLO violation',
          description:
            'Service behavior falls outside the defined reliability objective.',
        },
        {
          title: 'Error budget',
          description:
            'The permitted amount of unreliability within the SLO period.',
        },
      ],
    },

    {
      title: 'Post-Incident Review',
      content:
        'After recovery, teams should review what happened, how the incident was detected, what decisions were made, what worked, what failed, and what improvements should be implemented. The goal is organizational learning rather than blame.',
      highlights: [
        {
          title: 'Post-incident review',
          description:
            'A structured review of the incident and response.',
        },
        {
          title: 'Action item',
          description:
            'A concrete improvement identified during the review.',
        },
        {
          title: 'Learning',
          description:
            'New understanding that can improve future reliability and response.',
        },
      ],
    },

    {
      title: 'Blameless Postmortem',
      content:
        'A blameless postmortem focuses on system conditions, decisions, processes, and contributing factors rather than blaming individuals. The purpose is to create an environment where people can report failures honestly and improve the system.',
      highlights: [
        {
          title: 'Blameless',
          description:
            'Focused on learning and system improvement rather than individual punishment.',
        },
        {
          title: 'Contributing factor',
          description:
            'A condition that helped make the incident possible or worse.',
        },
        {
          title: 'System improvement',
          description:
            'Changing technology, process, or organizational practices to reduce recurrence.',
        },
      ],
    },

    {
      title: 'Root Cause Analysis',
      content:
        'Root Cause Analysis investigates why an incident occurred and why existing controls did not prevent or detect it earlier. A strong RCA distinguishes direct causes, contributing factors, systemic weaknesses, and detection gaps.',
      highlights: [
        {
          title: 'Root cause',
          description:
            'An underlying causal factor responsible for the incident.',
        },
        {
          title: 'Contributing factor',
          description:
            'A condition that increased the likelihood or impact of the incident.',
        },
        {
          title: 'Detection gap',
          description:
            'A weakness that allowed the incident to remain undetected or detected too late.',
        },
      ],
    },

    {
      title: 'Five Whys',
      content:
        'The Five Whys technique repeatedly asks why a problem occurred to move beyond the immediate symptom toward deeper contributing causes. It should be used thoughtfully rather than forcing every incident into a single linear cause.',
      highlights: [
        {
          title: 'Why',
          description:
            'A question used to explore causal relationships.',
        },
        {
          title: 'Immediate cause',
          description:
            'The direct reason a failure occurred.',
        },
        {
          title: 'Systemic cause',
          description:
            'A broader process, architecture, or organizational weakness contributing to the failure.',
        },
      ],
    },

    {
      title: 'Corrective and Preventive Actions',
      content:
        'Post-incident actions should address both immediate weaknesses and longer-term prevention. Actions may include code fixes, tests, monitoring improvements, automation, architecture changes, runbook updates, training, or process changes.',
      highlights: [
        {
          title: 'Corrective action',
          description:
            'An action that fixes an identified problem.',
        },
        {
          title: 'Preventive action',
          description:
            'An action intended to reduce the likelihood of recurrence.',
        },
        {
          title: 'Owner and deadline',
          description:
            'Clear accountability for completing improvement work.',
        },
      ],
    },

    {
      title: 'Incident Metrics',
      content:
        'Useful incident metrics include MTTD, MTTR, incident frequency, severity distribution, customer impact duration, alert-to-incident conversion, recurrence rate, and completion of post-incident actions. Metrics should drive improvement rather than encourage teams to hide incidents.',
      highlights: [
        {
          title: 'Incident frequency',
          description:
            'How often significant incidents occur.',
        },
        {
          title: 'Recurrence rate',
          description:
            'How often similar incidents happen again.',
        },
        {
          title: 'Action completion',
          description:
            'Whether post-incident improvements are actually implemented.',
        },
      ],
    },

    {
      title: 'Incident Management for AI Systems',
      content:
        'AI systems introduce additional incident patterns such as model-provider outages, unexpected model behavior, retrieval failures, tool failures, latency spikes, cost explosions, degraded answer quality, data-pipeline failures, and dependency outages.',
      highlights: [
        {
          title: 'Provider outage',
          description:
            'An external AI provider becomes unavailable or severely degraded.',
        },
        {
          title: 'AI quality degradation',
          description:
            'The system remains technically available but produces materially worse results.',
        },
        {
          title: 'Cost incident',
          description:
            'AI usage or infrastructure costs increase unexpectedly to a harmful level.',
        },
      ],
    },

    {
      title: 'AI Voice Incident Management',
      content:
        'For an AI voice platform, incidents may involve telephony outages, speech recognition failures, model latency, text-to-speech failures, dropped calls, provider rate limits, incorrect routing, or severe increases in call cost. Response should prioritize customer communication quality and service continuity.',
      highlights: [
        {
          title: 'Voice incident',
          description:
            'A production event that materially affects voice interactions.',
        },
        {
          title: 'Provider dependency',
          description:
            'An external telephony, speech, or AI service required by the platform.',
        },
        {
          title: 'Call continuity',
          description:
            'The ability to maintain or recover voice service during failures.',
        },
      ],
    },

    {
      title: 'RAG Incident Management',
      content:
        'RAG incidents may involve stale knowledge, broken ingestion pipelines, embedding failures, vector database outages, retrieval degradation, incorrect document permissions, or model-provider failures. Response should consider both technical availability and knowledge quality.',
      highlights: [
        {
          title: 'Knowledge incident',
          description:
            'A production problem affecting the correctness, freshness, or availability of knowledge used by the AI system.',
        },
        {
          title: 'Retrieval degradation',
          description:
            'The retrieval system fails to provide useful context at the expected quality or latency.',
        },
        {
          title: 'Data freshness',
          description:
            'The degree to which indexed knowledge reflects the current source information.',
        },
      ],
    },

    {
      title: 'Incident Management and Change Management',
      content:
        'Many incidents are associated with recent changes. Deployment records, configuration changes, infrastructure updates, feature flags, and dependency changes should be visible during incident investigation. Safe change processes reduce incident probability.',
      highlights: [
        {
          title: 'Change',
          description:
            'A modification to software, infrastructure, configuration, or process.',
        },
        {
          title: 'Change correlation',
          description:
            'Determining whether a recent change is related to an incident.',
        },
        {
          title: 'Change safety',
          description:
            'Practices that reduce the risk introduced by production changes.',
        },
      ],
    },

    {
      title: 'Incident Prevention',
      content:
        'Incident Management is not only about responding after failure. Incident trends can reveal opportunities for better testing, deployment strategies, capacity planning, observability, dependency management, architecture, and automation.',
      highlights: [
        {
          title: 'Prevention',
          description:
            'Reducing the probability or impact of future incidents.',
        },
        {
          title: 'Reliability engineering',
          description:
            'Engineering practices focused on dependable production behavior.',
        },
        {
          title: 'Trend analysis',
          description:
            'Using historical incident information to identify recurring weaknesses.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: Walk me through how you would handle a P1 incident. What is the role of an Incident Commander? How do you prioritize during an outage? How do you communicate with executives and customers? What is the difference between mitigation and root-cause resolution? How do you run a blameless postmortem? How do you reduce recurring incidents? How would you handle an AI-provider outage?',
      highlights: [
        {
          title: 'P1 response',
          description:
            'Explain detection, declaration, roles, mitigation, communication, and recovery.',
        },
        {
          title: 'Leadership',
          description:
            'Demonstrate calm coordination and prioritization under pressure.',
        },
        {
          title: 'Postmortem',
          description:
            'Explain learning, ownership, corrective actions, and prevention.',
        },
        {
          title: 'AI outage',
          description:
            'Discuss provider dependency, fallback strategy, customer impact, and graceful degradation.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “My first priority during a major incident is to understand customer impact and stabilize the system, not to prove the root cause immediately. I would establish an Incident Commander, technical lead, communications owner, and scribe, then confirm severity and blast radius. I would use dashboards, logs, traces, and recent deployment information to form hypotheses. If a safe rollback, failover, feature-flag change, or traffic shift can reduce impact, I would prioritize that. At the same time, I would keep stakeholders updated with clear facts and next-update expectations. After recovery, I would run a blameless postmortem and track corrective actions to completion.”',
      highlights: [
        {
          title: 'Stabilize first',
          description:
            'Reduce customer impact before spending excessive time proving the final root cause.',
        },
        {
          title: 'Coordinate',
          description:
            'Separate incident coordination from detailed technical investigation.',
        },
        {
          title: 'Communicate',
          description:
            'Keep stakeholders informed with concise factual updates.',
        },
        {
          title: 'Learn',
          description:
            'Convert incidents into concrete reliability improvements.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include trying to personally solve every technical problem, delaying incident declaration, confusing mitigation with root-cause resolution, communicating too little or too much, changing many things simultaneously without tracking them, blaming individuals, and failing to complete post-incident actions.',
      highlights: [
        {
          title: 'Hero debugging',
          description:
            'One person attempting to solve every aspect of a complex incident.',
        },
        {
          title: 'Late declaration',
          description:
            'Waiting too long to activate coordinated incident response.',
        },
        {
          title: 'Uncontrolled changes',
          description:
            'Making many simultaneous changes without understanding their effects.',
        },
        {
          title: 'Action-item debt',
          description:
            'Postmortem improvements are identified but never completed.',
        },
      ],
    },

    {
      title: 'Incident Management for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, Incident Management is a leadership capability. The leader should create clear severity definitions, ownership models, escalation paths, communication standards, runbooks, postmortem practices, reliability metrics, and mechanisms to ensure corrective actions are actually delivered.',
      highlights: [
        {
          title: 'Operational leadership',
          description:
            'Coordinate people and decisions during high-pressure situations.',
        },
        {
          title: 'Cross-functional coordination',
          description:
            'Align engineering, product, support, infrastructure, security, and leadership teams.',
        },
        {
          title: 'Reliability improvement',
          description:
            'Use incident trends to prioritize engineering investments.',
        },
        {
          title: 'Accountability',
          description:
            'Ensure post-incident actions have owners, priorities, and deadlines.',
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
    'sli-slo',
    'error-budgets',
    'root-cause-analysis',
    'disaster-recovery',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'event-driven-systems',
    'queues',
    'scalability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default incidentManagementKnowledge
