import type { KnowledgeDefinition } from './knowledge'

export const securityKnowledge: KnowledgeDefinition = {
  technologyId: 'security',
  slug: 'security',
  title: 'What is Cybersecurity?',
  summary:
    'Cybersecurity is the practice of protecting applications, systems, networks, identities, data, and infrastructure from unauthorized access, misuse, disruption, modification, and destruction.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Security?',
      content:
        'Security in technology is the discipline of protecting systems, data, applications, identities, networks, and infrastructure against threats. Security is not a single tool or product. It is a combination of architecture, processes, policies, technologies, people, and operational practices designed to reduce risk.',
    },
    {
      title: 'Why do we need Security?',
      content:
        'Modern systems continuously exchange data across applications, APIs, cloud platforms, devices, networks, and third-party services. Every connection and capability can introduce risk. Security helps prevent unauthorized access, data loss, fraud, service disruption, account compromise, and other forms of damage while allowing legitimate users and systems to perform their work.',
    },
    {
      title: 'The CIA Triad',
      content:
        'A fundamental security model is the CIA triad: Confidentiality, Integrity, and Availability. These three objectives help teams reason about what they are protecting and what could go wrong.',
      highlights: [
        {
          title: 'Confidentiality',
          description:
            'Ensures information is accessible only to authorized identities and systems.',
        },
        {
          title: 'Integrity',
          description:
            'Ensures information and system behavior are not improperly changed or manipulated.',
        },
        {
          title: 'Availability',
          description:
            'Ensures authorized users can access systems and information when required.',
        },
        {
          title: 'Security objective',
          description:
            'A defined protection goal that helps determine which controls and architecture decisions are required.',
        },
      ],
    },
    {
      title: 'Important Security concepts',
      content:
        'Security engineering combines multiple concepts that help teams identify threats, control access, protect information, and recover from incidents.',
      highlights: [
        {
          title: 'Asset',
          description:
            'A system, resource, application, identity, or piece of information that has value and requires protection.',
        },
        {
          title: 'Threat',
          description:
            'A potential source or circumstance that could cause harm to a protected asset.',
        },
        {
          title: 'Vulnerability',
          description:
            'A weakness that could be exploited to violate a security objective.',
        },
        {
          title: 'Risk',
          description:
            'The potential impact associated with a threat exploiting a vulnerability.',
        },
        {
          title: 'Security control',
          description:
            'A technical, administrative, or operational measure used to reduce security risk.',
        },
        {
          title: 'Attack surface',
          description:
            'The collection of exposed interfaces, services, identities, components, and entry points that could potentially be attacked.',
        },
      ],
    },
    {
      title: 'Threats vs Vulnerabilities vs Risks',
      content:
        'These terms are often confused. A threat represents something that could cause harm. A vulnerability is a weakness that could be exploited. Risk combines the possibility and consequences of harmful events in a particular environment. Security teams use these concepts to prioritize protection efforts.',
      highlights: [
        {
          title: 'Threat',
          description:
            'Something capable of causing harm to a system or organization.',
        },
        {
          title: 'Vulnerability',
          description:
            'A weakness that can potentially be exploited.',
        },
        {
          title: 'Exploit',
          description:
            'A technique, action, or mechanism that takes advantage of a vulnerability.',
        },
        {
          title: 'Impact',
          description:
            'The consequence if a security event successfully affects the organization or system.',
        },
        {
          title: 'Likelihood',
          description:
            'An estimate of how likely a particular security event is to occur.',
        },
      ],
    },
    {
      title: 'Defense in Depth',
      content:
        'Defense in depth means using multiple independent security controls so that failure of one control does not automatically result in compromise. A production application might combine identity controls, network segmentation, encryption, application validation, monitoring, endpoint protection, backups, and incident response.',
      highlights: [
        {
          title: 'Layered security',
          description:
            'Uses multiple protection layers across different parts of a system.',
        },
        {
          title: 'Preventive control',
          description:
            'Attempts to prevent an unwanted security event from occurring.',
        },
        {
          title: 'Detective control',
          description:
            'Identifies suspicious activity or security events.',
        },
        {
          title: 'Corrective control',
          description:
            'Reduces damage or restores secure operation after an incident.',
        },
      ],
    },
    {
      title: 'Identity and Access Security',
      content:
        'Identity is one of the most important security boundaries in modern systems. Authentication verifies who or what is requesting access, while authorization determines what that identity is allowed to do. Strong identity security also includes MFA, SSO, RBAC, ABAC, least privilege, identity lifecycle management, and access reviews.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies a claimed identity.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which actions and resources an identity is permitted to access.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the minimum access required to perform an intended task.',
        },
        {
          title: 'MFA',
          description:
            'Requires multiple independent authentication factors to strengthen identity verification.',
        },
        {
          title: 'Identity lifecycle',
          description:
            'Manages identity creation, changes, access, suspension, and removal throughout its lifetime.',
        },
      ],
    },
    {
      title: 'Data Security',
      content:
        'Data security protects information throughout its lifecycle, including creation, processing, transmission, storage, sharing, archival, and deletion. Controls depend on the sensitivity and business importance of the data.',
      highlights: [
        {
          title: 'Data classification',
          description:
            'Categorizes information according to sensitivity, business value, or regulatory requirements.',
        },
        {
          title: 'Encryption',
          description:
            'Uses cryptographic techniques to protect information from unauthorized disclosure.',
        },
        {
          title: 'Data masking',
          description:
            'Transforms sensitive information so that it can be used without exposing the original value.',
        },
        {
          title: 'Data loss prevention',
          description:
            'Controls and detects inappropriate movement or exposure of sensitive information.',
        },
        {
          title: 'Data retention',
          description:
            'Defines how long information should be retained before secure disposal.',
        },
      ],
    },
    {
      title: 'Application Security',
      content:
        'Application security integrates security into software design, development, testing, deployment, and operation. Applications should validate untrusted input, enforce authorization, protect secrets, use secure dependencies, handle errors safely, and avoid exposing sensitive information.',
      highlights: [
        {
          title: 'Secure coding',
          description:
            'Uses development practices designed to prevent common security weaknesses.',
        },
        {
          title: 'Input validation',
          description:
            'Checks untrusted data before it is processed or used by an application.',
        },
        {
          title: 'Dependency security',
          description:
            'Identifies and manages vulnerabilities in third-party libraries and components.',
        },
        {
          title: 'Security testing',
          description:
            'Tests applications for security weaknesses before and after deployment.',
        },
        {
          title: 'Secure error handling',
          description:
            'Prevents errors from exposing sensitive information or creating unsafe behavior.',
        },
      ],
    },
    {
      title: 'Network Security',
      content:
        'Network security protects communication paths, network infrastructure, and services from unauthorized access and malicious traffic. Modern architectures increasingly combine traditional network controls with identity-based controls and application-level security.',
      highlights: [
        {
          title: 'Firewall',
          description:
            'Controls network traffic according to defined security rules.',
        },
        {
          title: 'Network segmentation',
          description:
            'Separates systems or workloads to limit unnecessary communication and reduce attack impact.',
        },
        {
          title: 'TLS',
          description:
            'Protects network communication through encryption, integrity protection, and authentication.',
        },
        {
          title: 'Zero Trust',
          description:
            'Avoids implicit trust and evaluates access using identity, context, policy, and other security signals.',
        },
        {
          title: 'Network monitoring',
          description:
            'Observes network activity to detect failures, attacks, and abnormal behavior.',
        },
      ],
    },
    {
      title: 'API and Service Security',
      content:
        'APIs and service-to-service communication create important security boundaries in modern architectures. Secure APIs require authentication, authorization, input validation, rate limiting, secure transport, secret management, inventory, monitoring, and lifecycle governance.',
      highlights: [
        {
          title: 'API authentication',
          description:
            'Verifies the identity of an API client or service.',
        },
        {
          title: 'API authorization',
          description:
            'Controls which API resources and operations a caller can access.',
        },
        {
          title: 'Rate limiting',
          description:
            'Controls request volume to reduce abuse and resource exhaustion.',
        },
        {
          title: 'Service identity',
          description:
            'Represents a backend service when communicating with another service.',
        },
        {
          title: 'API inventory',
          description:
            'Maintains visibility into APIs, endpoints, versions, owners, and consumers.',
        },
      ],
    },
    {
      title: 'Cloud Security',
      content:
        'Cloud security protects workloads, identities, data, infrastructure, and services running on cloud platforms. Cloud environments introduce shared-responsibility considerations, dynamic infrastructure, distributed identities, APIs, and highly automated deployment processes.',
      highlights: [
        {
          title: 'Shared responsibility',
          description:
            'Defines which security responsibilities belong to the cloud provider and which belong to the customer.',
        },
        {
          title: 'Cloud identity',
          description:
            'Controls which users, services, and workloads can access cloud resources.',
        },
        {
          title: 'Security group',
          description:
            'A network access-control mechanism used by many cloud environments to restrict traffic.',
        },
        {
          title: 'Cloud audit log',
          description:
            'Records security-relevant actions performed against cloud resources and services.',
        },
        {
          title: 'Cloud misconfiguration',
          description:
            'An insecure cloud setting that can expose systems, data, or capabilities.',
        },
      ],
    },
    {
      title: 'Security Monitoring',
      content:
        'Security monitoring provides visibility into authentication activity, network behavior, application events, configuration changes, data access, and other signals. Effective monitoring helps detect suspicious activity and supports investigation and response.',
      highlights: [
        {
          title: 'Security event',
          description:
            'An event that may provide useful information about security-related activity.',
        },
        {
          title: 'SIEM',
          description:
            'A platform that collects, correlates, and analyzes security-related events from multiple sources.',
        },
        {
          title: 'Detection',
          description:
            'Identifies activity that may indicate an attack, policy violation, or abnormal behavior.',
        },
        {
          title: 'Alert',
          description:
            'A notification generated when a defined security condition requires attention.',
        },
        {
          title: 'Audit log',
          description:
            'A record of important actions that supports accountability, investigation, and compliance.',
        },
      ],
    },
    {
      title: 'Incident Response',
      content:
        'Incident response is the structured process used when a security event becomes a confirmed or suspected incident. The goal is to contain the impact, understand what happened, remove the threat, recover safely, and improve defenses.',
      highlights: [
        {
          title: 'Detection',
          description:
            'Identifies a suspected security incident.',
        },
        {
          title: 'Containment',
          description:
            'Limits the spread or impact of an active security incident.',
        },
        {
          title: 'Eradication',
          description:
            'Removes the underlying malicious activity or compromised components.',
        },
        {
          title: 'Recovery',
          description:
            'Restores systems to a trusted operational state.',
        },
        {
          title: 'Lessons learned',
          description:
            'Uses incident findings to improve architecture, controls, processes, and preparedness.',
        },
      ],
    },
    {
      title: 'Security Risk Management',
      content:
        'Security decisions should be based on risk rather than attempting to eliminate every possible threat. Teams evaluate assets, threats, vulnerabilities, likelihood, impact, existing controls, and residual risk to determine where security investment is most valuable.',
      highlights: [
        {
          title: 'Risk assessment',
          description:
            'Evaluates threats, vulnerabilities, likelihood, impact, and existing controls.',
        },
        {
          title: 'Risk treatment',
          description:
            'Determines how an identified risk should be addressed.',
        },
        {
          title: 'Risk acceptance',
          description:
            'Explicitly accepts a known level of risk when appropriate.',
        },
        {
          title: 'Risk mitigation',
          description:
            'Reduces the likelihood or impact of a risk through security controls.',
        },
        {
          title: 'Residual risk',
          description:
            'The remaining risk after security controls have been applied.',
        },
      ],
    },
    {
      title: 'Security by Design',
      content:
        'Security by design means considering security requirements during architecture and product design rather than treating security as a final testing step. Teams identify trust boundaries, sensitive data, identities, threats, abuse cases, and required controls before implementation.',
      highlights: [
        {
          title: 'Threat modeling',
          description:
            'Systematically identifies threats and security controls during system design.',
        },
        {
          title: 'Trust boundary',
          description:
            'A point where trust assumptions change and additional security controls may be required.',
        },
        {
          title: 'Abuse case',
          description:
            'Describes how a legitimate capability could be misused or attacked.',
        },
        {
          title: 'Secure architecture',
          description:
            'An architecture designed with security requirements and threat scenarios considered from the beginning.',
        },
      ],
    },
    {
      title: 'Security in the SDLC',
      content:
        'Security should be integrated across the software development lifecycle. Requirements should define security expectations, architecture should model threats, development should follow secure coding practices, testing should identify vulnerabilities, deployment should enforce secure configuration, and operations should continuously monitor and improve the system.',
      highlights: [
        {
          title: 'Security requirements',
          description:
            'Defines security behaviors and constraints that the product must satisfy.',
        },
        {
          title: 'Secure development',
          description:
            'Applies security practices during implementation and code review.',
        },
        {
          title: 'Security testing',
          description:
            'Evaluates software and infrastructure for security weaknesses.',
        },
        {
          title: 'DevSecOps',
          description:
            'Integrates security practices into development and delivery workflows.',
        },
      ],
    },
    {
      title: 'Security in AI systems',
      content:
        'AI systems introduce additional security considerations including prompt injection, sensitive-data exposure, unsafe tool use, model supply-chain risks, excessive agent permissions, insecure retrieval sources, and abuse of AI-generated capabilities. AI security therefore combines traditional application security with controls specific to models and AI workflows.',
      highlights: [
        {
          title: 'Prompt injection',
          description:
            'Attempts to manipulate an AI system through crafted instructions or untrusted content.',
        },
        {
          title: 'AI data leakage',
          description:
            'Exposure of sensitive information through model inputs, outputs, retrieval, logs, or integrations.',
        },
        {
          title: 'Tool authorization',
          description:
            'Controls which actions an AI system is allowed to perform through connected tools.',
        },
        {
          title: 'AI supply chain',
          description:
            'The models, datasets, libraries, tools, and external components used to build an AI system.',
        },
        {
          title: 'Human approval',
          description:
            'Requires a person to review or authorize sensitive AI-driven actions.',
        },
      ],
    },
    {
      title: 'Security in production',
      content:
        'Production security requires continuous visibility and improvement. Organizations need clear ownership, strong identity controls, secure architecture, vulnerability management, patching, monitoring, incident response, backups, recovery plans, security testing, access reviews, and periodic risk assessment.',
      highlights: [
        {
          title: 'Vulnerability management',
          description:
            'Identifies, prioritizes, remediates, and tracks security weaknesses.',
        },
        {
          title: 'Patch management',
          description:
            'Keeps operating systems, libraries, applications, and infrastructure updated against known weaknesses.',
        },
        {
          title: 'Backup',
          description:
            'Maintains recoverable copies of important data and system state.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Restores critical services after major failures or security incidents.',
        },
        {
          title: 'Security posture',
          description:
            'Represents the overall security condition of systems, controls, risks, and exposure.',
        },
      ],
    },
    {
      title: 'Common Security mistakes',
      content:
        'Common mistakes include treating security as only an infrastructure problem, using excessive privileges, ignoring identity lifecycle management, storing secrets insecurely, failing to patch known vulnerabilities, trusting internal networks automatically, exposing sensitive data in logs, and designing security controls without considering operational reality.',
      highlights: [
        {
          title: 'Security as an afterthought',
          description:
            'Adds security controls only after architecture and implementation decisions have already been made.',
        },
        {
          title: 'Excessive privilege',
          description:
            'Provides users, services, or applications more access than necessary.',
        },
        {
          title: 'Unpatched vulnerability',
          description:
            'Leaves a known security weakness exposed after an appropriate fix is available.',
        },
        {
          title: 'Implicit trust',
          description:
            'Assumes that an internal network, device, or request is trustworthy without sufficient verification.',
        },
        {
          title: 'Poor incident readiness',
          description:
            'Lacks tested procedures, ownership, tooling, or decision paths for responding to security incidents.',
        },
      ],
    },
    {
      title: 'Explore Security in EDDUU',
      content:
        'EDDUU connects Security with Identity, Authentication, Authorization, RBAC, ABAC, MFA, SSO, Encryption, TLS, Secrets Management, API Security, OWASP, Zero Trust, and Audit Logging.',
    },
  ],
  relatedTechnologyIds: [
    'identity',
    'authentication',
    'authorization',
    'rbac',
    'abac',
    'multi-factor-authentication',
    'single-sign-on',
    'encryption',
    'tls',
    'secrets-management',
    'api-security',
    'owasp',
    'zero-trust',
    'audit-logging',
  ],
}

export default securityKnowledge
