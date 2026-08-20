import type { KnowledgeDefinition } from './knowledge'

export const alertingKnowledge: KnowledgeDefinition = {
  technologyId: 'alerting',
  slug: 'alerting',
  title: 'Alerting',
  summary:
    'Alerting is the operational practice of detecting meaningful system conditions and notifying the appropriate people or systems so that action can be taken before or during an incident.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Alerting?',
      content:
        'Alerting is the process of automatically detecting conditions that require attention and generating notifications or operational actions. A good alert connects a measurable condition to a clear response, owner, severity, and escalation path.',
      highlights: [
        {
          title: 'Alert',
          description:
            'A notification indicating that a defined operational condition requires attention.',
        },
        {
          title: 'Alert rule',
          description:
            'The logic that determines when an alert should become active.',
        },
        {
          title: 'Action',
          description:
            'The response expected after an alert is triggered.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of an alert like the warning light on a car. The dashboard can show hundreds of measurements, but a warning light appears when something important needs attention. A good production alert works the same way: it should tell the team that something meaningful is wrong and that action may be required.',
      highlights: [
        {
          title: 'Dashboard',
          description:
            'Represents the large amount of available monitoring information.',
        },
        {
          title: 'Warning light',
          description:
            'Represents an actionable alert.',
        },
        {
          title: 'Driver response',
          description:
            'Represents the operational action taken after the alert.',
        },
      ],
    },

    {
      title: 'Why Alerting Matters',
      content:
        'Production systems operate continuously, often across multiple regions, services, and infrastructure layers. Engineers cannot manually watch every metric. Alerting automates detection of important conditions and reduces the time between failure and human response.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Identifying abnormal or harmful conditions automatically.',
        },
        {
          title: 'Response time',
          description:
            'Reducing the delay between an incident beginning and someone responding.',
        },
        {
          title: 'Operational scale',
          description:
            'Allowing teams to manage complex systems without manually watching every metric.',
        },
      ],
    },

    {
      title: 'Monitoring vs Alerting',
      content:
        'Monitoring provides visibility into system behavior, while alerting identifies conditions that require attention. A metric can be monitored without generating an alert. This distinction is important because not every unusual value requires immediate human action.',
      highlights: [
        {
          title: 'Monitoring',
          description:
            'Observing and understanding system behavior.',
        },
        {
          title: 'Alerting',
          description:
            'Calling attention to conditions that require action.',
        },
        {
          title: 'Actionability',
          description:
            'The degree to which an alert leads to a meaningful operational response.',
        },
      ],
    },

    {
      title: 'What Makes a Good Alert?',
      content:
        'A good alert is actionable, meaningful, understandable, appropriately urgent, and routed to the correct owner. It should contain enough context for the responder to understand what happened, where it happened, and what impact may exist.',
      highlights: [
        {
          title: 'Actionable',
          description:
            'The recipient knows what kind of response is expected.',
        },
        {
          title: 'Meaningful',
          description:
            'The alert represents a condition that matters operationally.',
        },
        {
          title: 'Contextual',
          description:
            'The notification provides useful information about the affected service and condition.',
        },
      ],
    },

    {
      title: 'Actionable vs Informational Alerts',
      content:
        'Not every event needs to wake up an engineer. Informational events can be recorded in dashboards or logs, while actionable alerts should be reserved for conditions where intervention is required.',
      highlights: [
        {
          title: 'Informational',
          description:
            'Useful information that does not require immediate intervention.',
        },
        {
          title: 'Actionable',
          description:
            'A condition that requires an operational response.',
        },
        {
          title: 'Noise',
          description:
            'Notifications that do not provide enough value to justify attention.',
        },
      ],
    },

    {
      title: 'Alert Severity',
      content:
        'Severity levels communicate urgency and expected response. Organizations often use categories such as critical, high, warning, and informational, although the exact naming should be standardized within the organization.',
      highlights: [
        {
          title: 'Critical',
          description:
            'A condition requiring immediate attention because of significant impact or risk.',
        },
        {
          title: 'Warning',
          description:
            'A condition that may require attention but does not necessarily require immediate emergency response.',
        },
        {
          title: 'Informational',
          description:
            'An event intended primarily for awareness or investigation.',
        },
      ],
    },

    {
      title: 'Alert Ownership',
      content:
        'Every important alert should have a clear owner. Ownership may be assigned by service, team, platform, or business function. An alert without an owner can remain unresolved even when the monitoring system detects the problem correctly.',
      highlights: [
        {
          title: 'Owner',
          description:
            'The person or team responsible for responding to an alert.',
        },
        {
          title: 'Service ownership',
          description:
            'Assigning responsibility according to the service producing the alert.',
        },
        {
          title: 'Escalation',
          description:
            'Moving an unresolved issue to a higher level of support or authority.',
        },
      ],
    },

    {
      title: 'Alert Thresholds',
      content:
        'A threshold defines a boundary at which a condition becomes concerning. Thresholds can be static, such as CPU above a defined percentage, or derived from reliability objectives and historical behavior.',
      highlights: [
        {
          title: 'Threshold',
          description:
            'A value or condition beyond which an alert may become active.',
        },
        {
          title: 'Static threshold',
          description:
            'A predefined fixed boundary.',
        },
        {
          title: 'Dynamic threshold',
          description:
            'A boundary that adapts to expected behavior or historical patterns.',
        },
      ],
    },

    {
      title: 'Duration and For Conditions',
      content:
        'Alerting systems often allow a condition to remain true for a specified duration before an alert fires. This helps prevent temporary spikes from generating unnecessary notifications.',
      highlights: [
        {
          title: 'For duration',
          description:
            'The amount of time a condition must remain true before triggering an alert.',
        },
        {
          title: 'Transient spike',
          description:
            'A short-lived abnormal condition that may not justify intervention.',
        },
        {
          title: 'Stability',
          description:
            'Using duration requirements to distinguish persistent problems from temporary fluctuations.',
        },
      ],
    },

    {
      title: 'Alert Flapping',
      content:
        'Alert flapping occurs when an alert repeatedly changes between firing and resolved states. Flapping can create notification noise and make incidents harder to manage. Appropriate thresholds, duration conditions, grouping, and hysteresis can reduce this problem.',
      highlights: [
        {
          title: 'Flapping',
          description:
            'Repeated transitions between alert and resolved states.',
        },
        {
          title: 'Hysteresis',
          description:
            'Using different conditions for triggering and resolving to reduce rapid state changes.',
        },
        {
          title: 'Noise reduction',
          description:
            'Techniques that reduce unnecessary repeated notifications.',
        },
      ],
    },

    {
      title: 'Alert Routing',
      content:
        'Alert routing determines where an alert should go. Routing can depend on service, severity, environment, region, or ownership. The goal is to ensure the right team receives the right alert through the right channel.',
      highlights: [
        {
          title: 'Routing',
          description:
            'Directing an alert to an appropriate destination.',
        },
        {
          title: 'Service-based routing',
          description:
            'Routing according to the affected service or team.',
        },
        {
          title: 'Severity-based routing',
          description:
            'Using urgency to determine notification channels and escalation.',
        },
      ],
    },

    {
      title: 'Notification Channels',
      content:
        'Alerts can be delivered through incident-management systems, email, chat, paging systems, SMS, webhooks, or other integrations. Critical alerts should use channels that reliably reach the responsible responders.',
      highlights: [
        {
          title: 'Paging',
          description:
            'A high-urgency notification mechanism designed to reach an on-call responder.',
        },
        {
          title: 'Chat notification',
          description:
            'An alert delivered to a team collaboration channel.',
        },
        {
          title: 'Webhook',
          description:
            'An HTTP-based mechanism for sending alert information to another system.',
        },
      ],
    },

    {
      title: 'Alert Grouping',
      content:
        'A single underlying incident can generate many related alerts. Grouping combines related alerts so responders see a coherent operational event instead of receiving dozens of separate notifications.',
      highlights: [
        {
          title: 'Grouping',
          description:
            'Combining related alerts into a single notification or incident context.',
        },
        {
          title: 'Duplicate alert',
          description:
            'Multiple alerts representing the same underlying problem.',
        },
        {
          title: 'Incident context',
          description:
            'Information that helps responders understand the broader event.',
        },
      ],
    },

    {
      title: 'Alert Deduplication',
      content:
        'Deduplication prevents repeated notifications for the same condition. This is particularly important when multiple monitoring systems or redundant monitoring instances detect the same underlying incident.',
      highlights: [
        {
          title: 'Deduplication',
          description:
            'Preventing repeated notifications for the same event.',
        },
        {
          title: 'Alert fingerprint',
          description:
            'A mechanism used to identify alerts that represent the same condition.',
        },
        {
          title: 'Noise reduction',
          description:
            'Reducing duplicate notifications so responders can focus on the actual incident.',
        },
      ],
    },

    {
      title: 'Alert Inhibition',
      content:
        'Inhibition suppresses lower-level alerts when a higher-level alert already explains the underlying problem. For example, if an entire database cluster is unavailable, dozens of application-level connection alerts may not need to notify every team separately.',
      highlights: [
        {
          title: 'Inhibition',
          description:
            'Suppressing alerts that are secondary to a more important active alert.',
        },
        {
          title: 'Root alert',
          description:
            'The higher-level alert representing the primary failure.',
        },
        {
          title: 'Secondary alert',
          description:
            'An alert caused by or explained by the primary failure.',
        },
      ],
    },

    {
      title: 'Alert Dependencies',
      content:
        'Distributed systems often have dependencies between services. Alert design should account for these relationships so teams can distinguish a root failure from downstream symptoms.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A service or component required by another system.',
        },
        {
          title: 'Root failure',
          description:
            'The underlying failure causing multiple downstream symptoms.',
        },
        {
          title: 'Cascade',
          description:
            'A sequence where one failure creates additional failures across dependent systems.',
        },
      ],
    },

    {
      title: 'Metrics-Based Alerting',
      content:
        'Metrics are commonly used for alerting because they provide numerical signals that can be evaluated continuously. Examples include error rate, latency, request rate, CPU utilization, memory pressure, queue depth, and availability.',
      highlights: [
        {
          title: 'Error-rate alert',
          description:
            'An alert based on the rate or proportion of failed operations.',
        },
        {
          title: 'Latency alert',
          description:
            'An alert based on response-time behavior.',
        },
        {
          title: 'Saturation alert',
          description:
            'An alert based on resource or capacity pressure.',
        },
      ],
    },

    {
      title: 'Prometheus Alerting',
      content:
        'Prometheus can evaluate alerting rules written using PromQL. When an alert condition becomes active, Prometheus can send alert information to Alertmanager, which can then group, route, silence, and notify the appropriate destinations.',
      highlights: [
        {
          title: 'PromQL',
          description:
            'Prometheus Query Language used to express alert conditions.',
        },
        {
          title: 'Alerting rule',
          description:
            'A Prometheus rule that evaluates whether an alert condition is active.',
        },
        {
          title: 'Alertmanager',
          description:
            'A component commonly used to manage and route Prometheus alerts.',
        },
      ],
    },

    {
      title: 'Grafana Alerting',
      content:
        'Grafana also provides alerting capabilities. Grafana alert rules can evaluate queries from supported data sources and route notifications according to configured policies.',
      highlights: [
        {
          title: 'Grafana alert rule',
          description:
            'A rule evaluated by Grafana alerting.',
        },
        {
          title: 'Data source',
          description:
            'The system providing data used by an alert query.',
        },
        {
          title: 'Notification policy',
          description:
            'Rules controlling where and how notifications are delivered.',
        },
      ],
    },

    {
      title: 'SLI-Based Alerting',
      content:
        'The strongest production alerts often focus on service-level indicators rather than infrastructure metrics alone. For example, an availability or latency SLI can reveal customer impact more directly than CPU utilization.',
      highlights: [
        {
          title: 'SLI',
          description:
            'A measurable indicator of service behavior.',
        },
        {
          title: 'Customer impact',
          description:
            'The effect of a technical condition on users or business outcomes.',
        },
        {
          title: 'Service-level alert',
          description:
            'An alert based on whether important service behavior is outside an acceptable range.',
        },
      ],
    },

    {
      title: 'SLO-Based Alerting',
      content:
        'SLO-based alerting evaluates whether a service is approaching or violating a defined reliability objective. This aligns alerts with the level of reliability the organization has promised to maintain.',
      highlights: [
        {
          title: 'SLO',
          description:
            'A target level of service reliability or performance.',
        },
        {
          title: 'SLO violation',
          description:
            'A condition where measured service performance falls outside the defined objective.',
        },
        {
          title: 'Reliability objective',
          description:
            'The operational target used to guide alerting and engineering decisions.',
        },
      ],
    },

    {
      title: 'Error Budget Alerting',
      content:
        'Error budgets represent the amount of unreliability permitted while still meeting an SLO. Alerting can focus on rapid error-budget consumption so teams can respond before the service exhausts its reliability allowance.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The permitted amount of unreliability within an SLO period.',
        },
        {
          title: 'Burn rate',
          description:
            'The speed at which an error budget is being consumed.',
        },
        {
          title: 'Fast burn',
          description:
            'Rapid consumption indicating a potentially severe reliability problem.',
        },
      ],
    },

    {
      title: 'Burn-Rate Alerting',
      content:
        'Burn-rate alerting looks at how quickly an error budget is being consumed rather than relying only on a fixed metric threshold. This allows alerts to reflect the severity and duration of reliability degradation.',
      highlights: [
        {
          title: 'Burn rate',
          description:
            'The rate at which an error budget is consumed relative to the allowed rate.',
        },
        {
          title: 'Short window',
          description:
            'A recent time period used to detect severe immediate degradation.',
        },
        {
          title: 'Long window',
          description:
            'A longer period used to confirm that degradation is meaningful and persistent.',
        },
      ],
    },

    {
      title: 'Alert Fatigue',
      content:
        'Alert fatigue occurs when responders receive too many notifications or alerts that do not require action. Over time, people may start ignoring alerts, which can increase the risk of missing real incidents.',
      highlights: [
        {
          title: 'Alert fatigue',
          description:
            'Reduced responsiveness caused by excessive or low-value alerts.',
        },
        {
          title: 'Noise',
          description:
            'Alerts that do not require useful action.',
        },
        {
          title: 'Signal-to-noise ratio',
          description:
            'The proportion of useful operational information relative to unnecessary notifications.',
        },
      ],
    },

    {
      title: 'Alert Quality',
      content:
        'Teams should periodically review alert quality. Useful questions include: Did this alert require action? Was the owner correct? Did the alert provide enough context? Did it fire too early, too late, or too often? Alert quality should improve over time based on incident experience.',
      highlights: [
        {
          title: 'Alert review',
          description:
            'Evaluating whether alerts are providing operational value.',
        },
        {
          title: 'Actionability rate',
          description:
            'The proportion of alerts that actually require meaningful response.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Updating alert rules based on real production experience.',
        },
      ],
    },

    {
      title: 'Alert Runbooks',
      content:
        'A critical alert should ideally link to a runbook describing what the responder should check and what actions are safe. Runbooks reduce cognitive load during stressful incidents and make operational knowledge easier to share.',
      highlights: [
        {
          title: 'Runbook',
          description:
            'A documented set of operational steps for responding to a known condition.',
        },
        {
          title: 'Diagnostic steps',
          description:
            'Checks used to determine the cause or scope of a problem.',
        },
        {
          title: 'Mitigation',
          description:
            'An action that reduces impact or restores service.',
        },
      ],
    },

    {
      title: 'Alert Context',
      content:
        'An alert should provide enough context to begin investigation. Useful fields include service, environment, region, severity, current value, threshold, duration, owner, dashboard link, runbook link, and potentially related incident information.',
      highlights: [
        {
          title: 'Service',
          description:
            'The affected application or component.',
        },
        {
          title: 'Environment',
          description:
            'The deployment environment such as production or staging.',
        },
        {
          title: 'Runbook link',
          description:
            'A direct reference to documented response instructions.',
        },
      ],
    },

    {
      title: 'Alert Lifecycle',
      content:
        'An alert typically moves through states such as inactive, pending, firing, acknowledged, resolved, or closed depending on the alerting and incident-management platform. Understanding this lifecycle helps teams build predictable operational workflows.',
      highlights: [
        {
          title: 'Pending',
          description:
            'A condition has been detected but may need to remain true before becoming active.',
        },
        {
          title: 'Firing',
          description:
            'The alert condition is currently active.',
        },
        {
          title: 'Resolved',
          description:
            'The triggering condition is no longer active.',
        },
      ],
    },

    {
      title: 'Alert Acknowledgement',
      content:
        'Acknowledgement indicates that a responder has seen the alert and taken responsibility for handling it. Acknowledgement should not be confused with resolution; the underlying problem may still be active.',
      highlights: [
        {
          title: 'Acknowledged',
          description:
            'A responder has accepted awareness or responsibility for the alert.',
        },
        {
          title: 'Resolved',
          description:
            'The underlying triggering condition has been cleared.',
        },
        {
          title: 'Ownership transfer',
          description:
            'Passing responsibility to another responder or team when required.',
        },
      ],
    },

    {
      title: 'Alert Escalation',
      content:
        'If the initial responder does not acknowledge or resolve a critical alert within the required time, the alert may escalate to another person or team. Escalation policies should be clear before incidents occur.',
      highlights: [
        {
          title: 'Escalation policy',
          description:
            'Rules defining when and where unresolved alerts are escalated.',
        },
        {
          title: 'On-call',
          description:
            'The person or team currently responsible for operational response.',
        },
        {
          title: 'Escalation window',
          description:
            'The allowed time before responsibility moves to another level.',
        },
      ],
    },

    {
      title: 'Production Alert Examples',
      content:
        'Examples of useful production alerts include sustained high error rate, severe latency degradation, service availability below an SLO, database connection exhaustion, queue backlog threatening processing objectives, certificate expiration risk, or a critical dependency becoming unavailable.',
      highlights: [
        {
          title: 'High error rate',
          description:
            'A sustained increase in failed operations.',
        },
        {
          title: 'Availability degradation',
          description:
            'A service is failing to meet its reliability objective.',
        },
        {
          title: 'Dependency failure',
          description:
            'A critical upstream or downstream dependency is unavailable or severely degraded.',
        },
      ],
    },

    {
      title: 'Bad Alert Examples',
      content:
        'Poor alerts include notifying on every CPU spike, alerting on a single transient request failure, creating alerts with no owner, firing alerts that have no documented response, or notifying a large group whenever any minor metric changes.',
      highlights: [
        {
          title: 'Transient CPU spike',
          description:
            'A short CPU increase that may have no customer impact.',
        },
        {
          title: 'Single failed request',
          description:
            'One failure may not indicate a systemic problem.',
        },
        {
          title: 'No owner',
          description:
            'An alert that no team is responsible for handling.',
        },
      ],
    },

    {
      title: 'Alerting for AI Systems',
      content:
        'AI systems introduce additional alerting signals such as model provider failures, latency degradation, token usage anomalies, rate-limit responses, retrieval failures, tool-call failures, queue growth, unexpected cost increases, and safety or policy events.',
      highlights: [
        {
          title: 'Model provider failure',
          description:
            'An AI provider is returning errors or becoming unavailable.',
        },
        {
          title: 'Token anomaly',
          description:
            'Unexpected changes in model token consumption.',
        },
        {
          title: 'AI cost anomaly',
          description:
            'Unexpected growth in model or AI infrastructure spending.',
        },
      ],
    },

    {
      title: 'Alerting for AI Voice Platforms',
      content:
        'An AI voice platform may alert on call connection failures, high dropped-call rates, speech-to-text failures, model latency, text-to-speech failures, telephony provider errors, queue saturation, and severe increases in cost per call or cost per minute.',
      highlights: [
        {
          title: 'Dropped calls',
          description:
            'Calls terminating unexpectedly at a rate above the acceptable level.',
        },
        {
          title: 'Voice latency',
          description:
            'Excessive delay between user speech and system response.',
        },
        {
          title: 'Provider outage',
          description:
            'A telephony, speech, or AI provider becomes unavailable or severely degraded.',
        },
      ],
    },

    {
      title: 'Alerting for RAG Systems',
      content:
        'A RAG system may require alerts for retrieval failures, embedding failures, vector database latency, ingestion backlog, stale knowledge, model provider failures, unusually high token usage, and severe answer-generation latency.',
      highlights: [
        {
          title: 'Retrieval failure',
          description:
            'The retrieval component cannot provide the required context.',
        },
        {
          title: 'Ingestion backlog',
          description:
            'Knowledge processing falls behind expected throughput.',
        },
        {
          title: 'Knowledge staleness',
          description:
            'Indexed information becomes older than the acceptable freshness objective.',
        },
      ],
    },

    {
      title: 'Alerting Security',
      content:
        'Alert notifications can contain sensitive infrastructure or business information. Alert payloads should avoid secrets and unnecessary personal information, and access to alert channels should be controlled appropriately.',
      highlights: [
        {
          title: 'Sensitive payload',
          description:
            'Alert information that could expose confidential data.',
        },
        {
          title: 'Access control',
          description:
            'Restricting who can view or manage alerts.',
        },
        {
          title: 'Secret protection',
          description:
            'Never exposing credentials, tokens, or other secrets through alerts.',
        },
      ],
    },

    {
      title: 'Alerting and Incident Management',
      content:
        'Alerting detects conditions, while incident management coordinates response to significant operational events. Alerts should create or contribute to incidents when their severity and impact justify formal coordination.',
      highlights: [
        {
          title: 'Alert',
          description:
            'Detection of a condition requiring attention.',
        },
        {
          title: 'Incident',
          description:
            'A significant operational event requiring coordinated response.',
        },
        {
          title: 'Incident response',
          description:
            'The organized process of mitigating and resolving the incident.',
        },
      ],
    },

    {
      title: 'Alerting and RCA',
      content:
        'Alerts should help teams detect and respond to incidents, while Root Cause Analysis focuses on understanding why the incident occurred. Alert data, timelines, dashboards, logs, and traces can provide evidence for RCA.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Recognizing that something is wrong.',
        },
        {
          title: 'Investigation',
          description:
            'Determining what is happening and what is affected.',
        },
        {
          title: 'Root Cause Analysis',
          description:
            'Understanding the underlying causes and contributing factors.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What makes a good production alert? How do you reduce alert fatigue? What is the difference between monitoring and alerting? How do you design severity levels? How would you route alerts? What are grouping and inhibition? How do SLOs and error budgets influence alerting? How would you design alerting for an AI system?',
      highlights: [
        {
          title: 'Alert quality',
          description:
            'Explain actionability, ownership, context, and noise reduction.',
        },
        {
          title: 'SLO alerting',
          description:
            'Explain why customer-facing reliability indicators are often better alert signals.',
        },
        {
          title: 'Incident response',
          description:
            'Explain how alerts connect detection with operational response.',
        },
        {
          title: 'AI alerting',
          description:
            'Explain AI-specific reliability, latency, provider, and cost signals.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I do not treat every abnormal metric as an alert. I start with customer impact and SLOs, then define actionable conditions with clear owners, severity, duration, and runbooks. I use grouping, deduplication, and inhibition to reduce noise and make sure related symptoms do not overwhelm responders. For critical alerts, I define an escalation path and measure alert quality over time. In AI systems, I would additionally monitor provider failures, model latency, token and cost anomalies, retrieval failures, and queue saturation.”',
      highlights: [
        {
          title: 'Customer-first',
          description:
            'Prioritize conditions that affect users and business outcomes.',
        },
        {
          title: 'Actionable',
          description:
            'Every important alert should have an expected response.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Review alert performance after incidents and remove low-value alerts.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include alerting on every metric, creating thresholds without understanding normal behavior, having no alert owner, sending critical alerts through unreliable channels, ignoring alert fatigue, confusing acknowledgement with resolution, and failing to link alerts to runbooks or dashboards.',
      highlights: [
        {
          title: 'Everything alerts',
          description:
            'Too many alerts reduce the value of the entire alerting system.',
        },
        {
          title: 'No ownership',
          description:
            'An alert without a responsible team is unlikely to produce a timely response.',
        },
        {
          title: 'No context',
          description:
            'Responders waste time discovering what the alert means before investigating it.',
        },
        {
          title: 'No review',
          description:
            'Poor alerts remain noisy when teams do not improve them based on operational experience.',
        },
      ],
    },

    {
      title: 'Alerting for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, alerting is primarily an operational design problem rather than a tool configuration problem. Leadership should establish severity standards, ownership, escalation policies, SLO-driven alerting, on-call expectations, alert-quality reviews, incident communication, and governance for sensitive alert data.',
      highlights: [
        {
          title: 'Operational governance',
          description:
            'Define organization-wide standards for alert quality, ownership, and severity.',
        },
        {
          title: 'SLO alignment',
          description:
            'Connect alerting to customer-facing reliability objectives.',
        },
        {
          title: 'Team health',
          description:
            'Reduce alert fatigue and unnecessary on-call burden.',
        },
        {
          title: 'Business continuity',
          description:
            'Ensure critical operational problems are detected and escalated quickly.',
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
    'incident-management',
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
    'capacity-planning',
    'kubernetes',
    'docker',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default alertingKnowledge
