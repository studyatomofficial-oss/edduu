import type { KnowledgeDefinition } from './knowledge'

export const auditLoggingKnowledge: KnowledgeDefinition = {
  technologyId: 'audit-logging',
  slug: 'audit-logging',
  title: 'What is Audit Logging?',
  summary:
    'Audit Logging is the practice of recording security-relevant and business-critical activities so organizations can establish accountability, investigate incidents, detect suspicious behavior, and support compliance.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Audit Logging?',
      content:
        'Audit logging is the systematic recording of important actions performed by users, applications, services, administrators, and other system actors. An audit log helps answer questions such as who performed an action, what happened, when it happened, which resource was involved, and whether the action succeeded or failed.',
    },
    {
      title: 'Why do we need Audit Logs?',
      content:
        'Without reliable audit records, it can be difficult to investigate security incidents, understand unauthorized activity, prove accountability, troubleshoot sensitive operations, or demonstrate compliance. Audit logging creates an evidence trail that helps security, engineering, operations, and compliance teams understand important events.',
    },
    {
      title: 'Audit Log vs Application Log',
      content:
        'Application logs are primarily designed to help engineers understand application behavior, failures, and operational events. Audit logs focus on activities that require accountability, security investigation, or business traceability. The two can overlap, but they serve different purposes and should be designed intentionally.',
      highlights: [
        {
          title: 'Application log',
          description:
            'Records application behavior, diagnostics, errors, performance information, and operational events.',
        },
        {
          title: 'Audit log',
          description:
            'Records security-relevant or business-critical actions that require accountability and traceability.',
        },
        {
          title: 'Security event',
          description:
            'An event that may indicate a security-relevant activity, policy violation, or suspicious behavior.',
        },
        {
          title: 'Audit trail',
          description:
            'A sequence of records that provides evidence of important actions and system activity.',
        },
      ],
    },
    {
      title: 'What should an Audit Log contain?',
      content:
        'A useful audit record should contain enough context to understand an action without unnecessarily exposing sensitive information. The exact fields depend on the system and event, but commonly include the actor, action, resource, timestamp, outcome, source context, and correlation information.',
      highlights: [
        {
          title: 'Actor',
          description:
            'The user, service, application, or system identity associated with the action.',
        },
        {
          title: 'Action',
          description:
            'The operation that was performed, requested, allowed, denied, created, changed, or deleted.',
        },
        {
          title: 'Resource',
          description:
            'The object, record, account, service, endpoint, or other target affected by the action.',
        },
        {
          title: 'Timestamp',
          description:
            'The time associated with the event, preferably using a consistent time standard.',
        },
        {
          title: 'Outcome',
          description:
            'Indicates whether the requested operation succeeded, failed, or was denied.',
        },
        {
          title: 'Correlation ID',
          description:
            'An identifier that helps connect related events across services and requests.',
        },
      ],
    },
    {
      title: 'Authentication and Authorization Audit Logs',
      content:
        'Identity-related events are particularly important to audit. Systems commonly record successful and failed authentication attempts, MFA events, password or credential changes, authorization failures, privilege changes, and sensitive account operations.',
      highlights: [
        {
          title: 'Login event',
          description:
            'Records an authentication attempt and its result.',
        },
        {
          title: 'Authentication failure',
          description:
            'Records a failed attempt to establish identity.',
        },
        {
          title: 'Authorization denial',
          description:
            'Records an attempt to perform an action that policy did not permit.',
        },
        {
          title: 'Privilege change',
          description:
            'Records changes to roles, permissions, administrative privileges, or access policies.',
        },
        {
          title: 'MFA event',
          description:
            'Records relevant multi-factor authentication activity.',
        },
      ],
    },
    {
      title: 'Audit Logs for Data Access',
      content:
        'Sensitive data access often requires strong auditability. Systems may record who accessed sensitive information, what operation was performed, which resource was involved, and the outcome. Logging should be designed carefully so that the audit record itself does not expose unnecessary sensitive data.',
      highlights: [
        {
          title: 'Read access',
          description:
            'Records access to a protected resource when such access requires accountability.',
        },
        {
          title: 'Create',
          description:
            'Records creation of an important resource or record.',
        },
        {
          title: 'Update',
          description:
            'Records a meaningful modification to a protected resource.',
        },
        {
          title: 'Delete',
          description:
            'Records deletion of an important resource or record.',
        },
        {
          title: 'Sensitive data',
          description:
            'Information requiring additional protection because of privacy, security, business, or regulatory considerations.',
        },
      ],
    },
    {
      title: 'Audit Logs and Immutability',
      content:
        'Audit records can become useless if attackers or unauthorized administrators can silently modify or delete them. Important audit logs should therefore be protected against unauthorized alteration and deletion. Depending on the environment, this can involve append-oriented storage, restricted access, separate logging infrastructure, retention controls, integrity verification, and centralized collection.',
      highlights: [
        {
          title: 'Immutable log',
          description:
            'A log designed so that records cannot be changed or removed through ordinary operational access.',
        },
        {
          title: 'Append-only',
          description:
            'A storage model where new records can be added while existing records are not modified.',
        },
        {
          title: 'Log integrity',
          description:
            'The ability to establish that audit records have not been improperly altered.',
        },
        {
          title: 'Separate storage',
          description:
            'Stores audit records in an environment with security boundaries independent from the systems generating them.',
        },
      ],
    },
    {
      title: 'Centralized Audit Logging',
      content:
        'Distributed applications can generate audit events across many services, databases, gateways, identity providers, and cloud platforms. Centralized collection makes searching, correlation, retention, access control, and investigation easier.',
      highlights: [
        {
          title: 'Log collector',
          description:
            'Collects audit events from multiple applications or infrastructure components.',
        },
        {
          title: 'Centralized logging',
          description:
            'Stores relevant logs in a common platform or controlled logging architecture.',
        },
        {
          title: 'Log correlation',
          description:
            'Connects events from different systems to understand a larger activity or transaction.',
        },
        {
          title: 'Search',
          description:
            'Allows authorized teams to find relevant events during operations, investigations, or audits.',
        },
      ],
    },
    {
      title: 'Audit Logs and Security Monitoring',
      content:
        'Audit logs provide important signals for security monitoring. Security systems can analyze authentication failures, unusual access patterns, privilege changes, administrative activity, suspicious API behavior, and other events to identify potential attacks or policy violations.',
      highlights: [
        {
          title: 'Detection rule',
          description:
            'A defined condition used to identify potentially suspicious activity.',
        },
        {
          title: 'Anomaly detection',
          description:
            'Identifies activity that differs significantly from expected behavior.',
        },
        {
          title: 'Alert',
          description:
            'A notification generated when monitoring identifies a condition requiring attention.',
        },
        {
          title: 'Investigation',
          description:
            'The process of analyzing evidence to understand an incident or suspicious event.',
        },
      ],
    },
    {
      title: 'Audit Logs and SIEM',
      content:
        'A SIEM platform can collect and correlate audit and security events from many sources. This allows security teams to search across systems, create detection rules, generate alerts, investigate incidents, and maintain security visibility.',
      highlights: [
        {
          title: 'SIEM',
          description:
            'Security Information and Event Management systems collect, correlate, analyze, and present security-relevant events.',
        },
        {
          title: 'Event correlation',
          description:
            'Connects multiple events to identify a larger pattern or potential incident.',
        },
        {
          title: 'Detection',
          description:
            'Identifies behavior that may indicate an attack, compromise, or policy violation.',
        },
        {
          title: 'Security investigation',
          description:
            'Uses collected evidence to understand what happened and determine the appropriate response.',
        },
      ],
    },
    {
      title: 'Audit Logs in APIs',
      content:
        'APIs should generate audit records for security-sensitive and business-critical operations. Depending on the use case, events can include authentication attempts, authorization decisions, administrative operations, data changes, privileged actions, configuration changes, and important workflow events.',
      highlights: [
        {
          title: 'API request',
          description:
            'A request sent to an API endpoint.',
        },
        {
          title: 'API actor',
          description:
            'The identity associated with an API operation.',
        },
        {
          title: 'Sensitive operation',
          description:
            'An API action that requires stronger accountability because of its security or business impact.',
        },
        {
          title: 'API audit trail',
          description:
            'A record of important API activities that can support investigation and accountability.',
        },
      ],
    },
    {
      title: 'Audit Logs in Cloud Systems',
      content:
        'Cloud platforms typically provide audit capabilities for administrative and resource-level activity. These records can help organizations understand changes to infrastructure, identity permissions, networking, storage, and other cloud resources.',
      highlights: [
        {
          title: 'Cloud audit event',
          description:
            'A record of an action performed against a cloud resource or service.',
        },
        {
          title: 'Administrative activity',
          description:
            'Actions that modify cloud configuration, permissions, infrastructure, or other important resources.',
        },
        {
          title: 'Resource activity',
          description:
            'Operations involving cloud resources such as storage, compute, databases, or networking.',
        },
        {
          title: 'Cloud trail',
          description:
            'A chronological record of relevant cloud activity used for visibility and investigation.',
        },
      ],
    },
    {
      title: 'Audit Logs and Privacy',
      content:
        'Audit logging must balance accountability with privacy and data minimization. Logs should not unnecessarily contain passwords, authentication secrets, full access tokens, private keys, or sensitive personal information. Organizations should define what is logged, who can access it, how long it is retained, and how sensitive fields are protected.',
      highlights: [
        {
          title: 'Data minimization',
          description:
            'Collects only the information required for the intended security, operational, or compliance purpose.',
        },
        {
          title: 'Sensitive field',
          description:
            'A piece of information that requires additional protection within logs.',
        },
        {
          title: 'Redaction',
          description:
            'Removes or obscures sensitive information before it is stored or displayed.',
        },
        {
          title: 'Access control',
          description:
            'Restricts who can view, search, export, or manage audit records.',
        },
      ],
    },
    {
      title: 'Audit Log Retention',
      content:
        'Audit logs should be retained long enough to support operational, security, legal, and compliance requirements. Retention should be defined intentionally rather than allowing logs to grow indefinitely. Different event types may require different retention periods.',
      highlights: [
        {
          title: 'Retention period',
          description:
            'The defined length of time audit records are maintained.',
        },
        {
          title: 'Log archival',
          description:
            'Moves older logs to longer-term storage while preserving their ability to be retrieved when required.',
        },
        {
          title: 'Secure deletion',
          description:
            'Removes audit records according to defined lifecycle and policy requirements.',
        },
        {
          title: 'Retention policy',
          description:
            'Defines what logs are retained, for how long, where they are stored, and how they are disposed of.',
        },
      ],
    },
    {
      title: 'Audit Logs and Compliance',
      content:
        'Many organizations need evidence that important security and administrative activities are controlled and traceable. Audit logs can support compliance programs by providing evidence of access, configuration changes, privileged actions, and other relevant events. The exact requirements depend on the organization, industry, jurisdiction, and applicable standards.',
      highlights: [
        {
          title: 'Compliance evidence',
          description:
            'Records that help demonstrate implementation or operation of required controls.',
        },
        {
          title: 'Accountability',
          description:
            'The ability to associate important actions with responsible identities or systems.',
        },
        {
          title: 'Auditability',
          description:
            'The ability to reconstruct and review relevant system activity.',
        },
        {
          title: 'Control evidence',
          description:
            'Evidence that a defined security or operational control is functioning as intended.',
        },
      ],
    },
    {
      title: 'Audit Logs in AI Systems',
      content:
        'AI systems and AI agents require auditability because models can generate outputs, invoke tools, retrieve information, and trigger actions. Audit records should capture appropriate information about the requesting identity, model or agent workflow, tools invoked, important decisions or policy outcomes, and resulting actions without unnecessarily storing sensitive prompts or data.',
      highlights: [
        {
          title: 'Agent action',
          description:
            'An action performed by an AI agent through a tool or connected system.',
        },
        {
          title: 'Tool invocation',
          description:
            'A request from an AI workflow to execute an external capability.',
        },
        {
          title: 'Model interaction',
          description:
            'An interaction between an application and an AI model that may require traceability.',
        },
        {
          title: 'AI auditability',
          description:
            'The ability to understand and reconstruct important AI-driven activity.',
        },
        {
          title: 'Human approval',
          description:
            'A recorded human authorization for a sensitive AI-driven operation.',
        },
      ],
    },
    {
      title: 'Audit Logs in Multi-Tenant Systems',
      content:
        'Multi-tenant systems should ensure that audit records preserve tenant context and that users can access only the audit information they are authorized to view. Administrative or platform-level operators may require broader visibility, but that access should itself be controlled and audited.',
      highlights: [
        {
          title: 'Tenant context',
          description:
            'Identifies which tenant or organization an audited activity belongs to.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Prevents one tenant from viewing another tenant’s protected audit information.',
        },
        {
          title: 'Administrative access',
          description:
            'Privileged access to audit information that requires strong authorization and accountability.',
        },
        {
          title: 'Cross-tenant audit',
          description:
            'A controlled capability allowing authorized platform operators to investigate activity across tenant boundaries.',
        },
      ],
    },
    {
      title: 'Audit Logging Architecture',
      content:
        'A production audit logging architecture commonly includes event generation, structured event formatting, secure transport, centralized collection, durable storage, indexing, access control, monitoring, retention, and investigation capabilities.',
      highlights: [
        {
          title: 'Event producer',
          description:
            'The application, service, gateway, identity system, or infrastructure component that generates an audit event.',
        },
        {
          title: 'Event pipeline',
          description:
            'The mechanism that transports and processes audit events.',
        },
        {
          title: 'Log storage',
          description:
            'The durable system where audit records are retained.',
        },
        {
          title: 'Log index',
          description:
            'A structure that makes stored audit events searchable and efficiently retrievable.',
        },
        {
          title: 'Audit dashboard',
          description:
            'A controlled interface for reviewing important audit activity and security signals.',
        },
      ],
    },
    {
      title: 'Audit Logs in production',
      content:
        'A production audit logging strategy should define which events matter, what fields are required, who owns the logs, how logs are protected, how long they are retained, how they are monitored, and how investigators access them. Logging should be reliable enough to support incident response without becoming an uncontrolled source of sensitive data or excessive cost.',
      highlights: [
        {
          title: 'Event coverage',
          description:
            'Defines which important actions and security events must be recorded.',
        },
        {
          title: 'Log reliability',
          description:
            'Ensures important audit events are delivered and retained with appropriate guarantees.',
        },
        {
          title: 'Log security',
          description:
            'Protects audit records against unauthorized access, modification, and deletion.',
        },
        {
          title: 'Log cost management',
          description:
            'Controls storage, processing, and indexing costs while preserving required audit coverage.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clearly assigns responsibility for audit logging, retention, monitoring, and investigation.',
        },
      ],
    },
    {
      title: 'Common Audit Logging mistakes',
      content:
        'Common mistakes include logging too little, logging everything without purpose, storing secrets in logs, allowing application administrators to freely modify audit records, failing to synchronize timestamps, retaining logs without a defined policy, and generating audit events that cannot be correlated across services.',
      highlights: [
        {
          title: 'Secrets in logs',
          description:
            'Accidentally recording passwords, tokens, private keys, or other credentials in audit or application logs.',
        },
        {
          title: 'Insufficient context',
          description:
            'Recording events without enough information to identify the actor, action, resource, outcome, or time.',
        },
        {
          title: 'No retention policy',
          description:
            'Keeping logs without a defined lifecycle, cost model, or security requirement.',
        },
        {
          title: 'Mutable audit trail',
          description:
            'Allowing unauthorized modification or deletion of records that should provide evidence.',
        },
        {
          title: 'Poor correlation',
          description:
            'Failing to provide identifiers that connect related events across distributed services.',
        },
      ],
    },
    {
      title: 'Explore Audit Logging in EDDUU',
      content:
        'EDDUU connects Audit Logging with Security, Identity, Authentication, Authorization, API Security, OWASP, Zero Trust, Cloud, Observability, Incident Response, and AI Agents.',
    },
  ],
  relatedTechnologyIds: [
    'security',
    'identity',
    'authentication',
    'authorization',
    'api-security',
    'owasp',
    'zero-trust',
    'agents',
    'observability',
  ],
}

export default auditLoggingKnowledge
