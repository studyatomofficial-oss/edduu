import type { KnowledgeDefinition } from './knowledge'

export const zeroTrustKnowledge: KnowledgeDefinition = {
  technologyId: 'zero-trust',
  slug: 'zero-trust',
  title: 'What is Zero Trust?',
  summary:
    'Zero Trust is a security approach based on continuously verifying identity, device, context, and access policy instead of automatically trusting users, devices, networks, or requests.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Zero Trust?',
      content:
        'Zero Trust is a security architecture and operating approach built around the principle that no user, device, application, service, or network location should automatically be trusted. Access should be explicitly evaluated using identity, permissions, device posture, context, policy, and other relevant signals.',
    },
    {
      title: 'Why do we need Zero Trust?',
      content:
        'Traditional security architectures often relied heavily on network boundaries. Once a user or system entered a trusted internal network, additional access decisions could sometimes be less strict. Modern applications are distributed across cloud environments, SaaS platforms, APIs, remote devices, third-party services, and multiple networks. Zero Trust reduces reliance on network location and makes access decisions closer to the actual resource being protected.',
    },
    {
      title: 'The Zero Trust principle',
      content:
        'The central idea of Zero Trust is not to automatically trust a request simply because it comes from an internal network, a known device, or a previously authenticated user. Every access request should be evaluated according to applicable identity, authorization, policy, resource, and contextual information.',
      highlights: [
        {
          title: 'Never assume trust',
          description:
            'Network location or previous access should not automatically grant ongoing trust.',
        },
        {
          title: 'Verify explicitly',
          description:
            'Evaluate relevant identity, device, resource, policy, and context before granting access.',
        },
        {
          title: 'Least privilege',
          description:
            'Provide only the minimum permissions required for the requested task.',
        },
        {
          title: 'Continuous evaluation',
          description:
            'Security decisions can be reevaluated as identity, device, context, or risk changes.',
        },
      ],
    },
    {
      title: 'Zero Trust vs traditional perimeter security',
      content:
        'A traditional perimeter model focuses heavily on protecting the boundary around a trusted network. Zero Trust assumes that threats can exist both outside and inside traditional boundaries and therefore emphasizes identity, resource-level authorization, segmentation, and continuous verification.',
      highlights: [
        {
          title: 'Perimeter model',
          description:
            'Places significant trust in a protected network boundary.',
        },
        {
          title: 'Zero Trust model',
          description:
            'Treats access as a policy decision that must be explicitly evaluated.',
        },
        {
          title: 'Internal network',
          description:
            'In Zero Trust, being inside a network does not automatically make a request trustworthy.',
        },
        {
          title: 'Resource-centric security',
          description:
            'Security controls are applied close to the application, service, data, or other protected resource.',
        },
      ],
    },
    {
      title: 'Core Zero Trust concepts',
      content:
        'A practical Zero Trust architecture combines identity, access control, device security, application security, data protection, network controls, monitoring, and policy enforcement.',
      highlights: [
        {
          title: 'Identity',
          description:
            'Represents users, services, applications, devices, or other entities requesting access.',
        },
        {
          title: 'Policy',
          description:
            'Defines the conditions under which access should be allowed, denied, or restricted.',
        },
        {
          title: 'Resource',
          description:
            'The application, API, database, service, data, or system being protected.',
        },
        {
          title: 'Context',
          description:
            'Additional signals such as device state, location, time, network, risk, and requested action.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Applies the access decision before the request reaches the protected resource.',
        },
      ],
    },
    {
      title: 'Identity is the new security boundary',
      content:
        'In Zero Trust architectures, identity becomes a major security control because users and workloads may access resources from many different networks and devices. Strong authentication, authorization, lifecycle management, MFA, SSO, and service identities become important foundations.',
      highlights: [
        {
          title: 'Human identity',
          description:
            'Represents a person accessing applications, systems, or data.',
        },
        {
          title: 'Workload identity',
          description:
            'Represents an application, service, process, or workload communicating with another resource.',
        },
        {
          title: 'MFA',
          description:
            'Provides additional verification factors to strengthen authentication.',
        },
        {
          title: 'Identity lifecycle',
          description:
            'Controls identity creation, access changes, suspension, and removal.',
        },
        {
          title: 'Strong authentication',
          description:
            'Uses appropriate authentication mechanisms to establish confidence in the requesting identity.',
        },
      ],
    },
    {
      title: 'Least Privilege',
      content:
        'Least privilege means an identity receives only the access necessary to perform an intended task. Zero Trust uses least privilege to reduce the impact of compromised accounts, applications, services, and devices.',
      highlights: [
        {
          title: 'Minimum access',
          description:
            'Grant only the permissions required for the current business or technical task.',
        },
        {
          title: 'Just-in-time access',
          description:
            'Provides privileged access only when required and for an appropriate duration.',
        },
        {
          title: 'Just-enough access',
          description:
            'Limits permissions to the smallest practical set of capabilities.',
        },
        {
          title: 'Privilege review',
          description:
            'Regularly evaluates whether existing permissions are still necessary.',
        },
      ],
    },
    {
      title: 'Continuous Verification',
      content:
        'Zero Trust does not mean asking a user to log in again for every individual request. Instead, it means that access decisions should not rely on permanent implicit trust. Systems can continuously or periodically evaluate relevant signals and revoke, restrict, or challenge access when risk changes.',
      highlights: [
        {
          title: 'Risk signal',
          description:
            'Information that may indicate increased or decreased security risk.',
        },
        {
          title: 'Session evaluation',
          description:
            'Reassesses whether an active session continues to satisfy access policy.',
        },
        {
          title: 'Reauthentication',
          description:
            'Requires the user or system to establish identity again when policy requires it.',
        },
        {
          title: 'Access revocation',
          description:
            'Removes access when identity, policy, device, or risk conditions no longer permit it.',
        },
      ],
    },
    {
      title: 'Device Security',
      content:
        'Zero Trust can include the security condition of the device making a request. A valid identity may still be denied or restricted if the device is unmanaged, compromised, outdated, encrypted incorrectly, or otherwise fails organizational policy.',
      highlights: [
        {
          title: 'Device posture',
          description:
            'Represents the security condition of a device based on defined signals and requirements.',
        },
        {
          title: 'Managed device',
          description:
            'A device controlled or governed through organizational management systems and policies.',
        },
        {
          title: 'Endpoint protection',
          description:
            'Controls designed to protect devices from malware, exploitation, unauthorized activity, and other threats.',
        },
        {
          title: 'Compliance state',
          description:
            'Indicates whether a device satisfies required security policies.',
        },
      ],
    },
    {
      title: 'Micro-Segmentation',
      content:
        'Micro-segmentation divides systems and workloads into smaller security zones and limits communication between them. This reduces unnecessary lateral movement and helps contain the impact of a compromised identity or workload.',
      highlights: [
        {
          title: 'Segmentation',
          description:
            'Separates systems or workloads into controlled communication boundaries.',
        },
        {
          title: 'Lateral movement',
          description:
            'Movement from one compromised system or resource to additional resources within an environment.',
        },
        {
          title: 'Service-to-service policy',
          description:
            'Defines which services may communicate with specific other services.',
        },
        {
          title: 'Blast radius',
          description:
            'The amount of a system or environment that could be affected after a compromise.',
        },
      ],
    },
    {
      title: 'Zero Trust and APIs',
      content:
        'Modern applications communicate heavily through APIs, making API authorization and service identity important parts of Zero Trust. Each service should authenticate callers, authorize requested operations, validate inputs, and apply appropriate policies rather than trusting requests based only on network location.',
      highlights: [
        {
          title: 'API identity',
          description:
            'Establishes which user, application, or service is making an API request.',
        },
        {
          title: 'API authorization',
          description:
            'Determines whether the caller is permitted to perform the requested operation.',
        },
        {
          title: 'Service identity',
          description:
            'Allows backend workloads to authenticate to other services.',
        },
        {
          title: 'Resource-level authorization',
          description:
            'Checks permission for the specific resource being accessed rather than relying only on broad role membership.',
        },
      ],
    },
    {
      title: 'Zero Trust and Cloud',
      content:
        'Cloud environments make Zero Trust especially relevant because applications, workloads, identities, and data may be distributed across regions, accounts, providers, and networks. Cloud security therefore increasingly relies on identity-based access, workload identity, policy enforcement, segmentation, encryption, monitoring, and automated controls.',
      highlights: [
        {
          title: 'Cloud identity',
          description:
            'Controls access by users and workloads to cloud resources.',
        },
        {
          title: 'Workload access',
          description:
            'Controls what applications and services can access in the cloud environment.',
        },
        {
          title: 'Policy as code',
          description:
            'Represents security or access policies in machine-readable form that can be validated and automated.',
        },
        {
          title: 'Cloud segmentation',
          description:
            'Limits communication and access between cloud workloads and environments.',
        },
      ],
    },
    {
      title: 'Zero Trust and Data Security',
      content:
        'Zero Trust protects data by making access decisions around the actual resource rather than assuming that anyone inside a network can access it. Data classification, encryption, authorization, monitoring, and data loss controls can be combined to reduce exposure.',
      highlights: [
        {
          title: 'Data classification',
          description:
            'Identifies how sensitive or important different types of information are.',
        },
        {
          title: 'Data access policy',
          description:
            'Defines which identities and contexts can access particular data.',
        },
        {
          title: 'Encryption',
          description:
            'Protects data against unauthorized disclosure during storage or transmission.',
        },
        {
          title: 'Data monitoring',
          description:
            'Observes sensitive data access and related activity for security and compliance purposes.',
        },
      ],
    },
    {
      title: 'Policy Engine and Policy Enforcement',
      content:
        'A Zero Trust architecture separates the decision about whether access should be allowed from the component that enforces that decision. A policy engine evaluates available signals and policy rules, while an enforcement component applies the resulting decision to the request.',
      highlights: [
        {
          title: 'Policy engine',
          description:
            'Evaluates identity, context, resource, and policy information to determine whether access should be permitted.',
        },
        {
          title: 'Policy administrator',
          description:
            'Coordinates the process of translating policy decisions into access actions.',
        },
        {
          title: 'Policy enforcement point',
          description:
            'Intercepts requests and applies the access decision before allowing interaction with the protected resource.',
        },
        {
          title: 'Access decision',
          description:
            'The result of evaluating whether a specific request satisfies applicable security policy.',
        },
      ],
    },
    {
      title: 'Zero Trust and Observability',
      content:
        'Strong Zero Trust architectures require visibility into authentication, authorization, device posture, service communication, policy decisions, and access activity. Logs, metrics, traces, and security events help teams understand why access was granted or denied and investigate suspicious behavior.',
      highlights: [
        {
          title: 'Access log',
          description:
            'Records important access attempts and decisions.',
        },
        {
          title: 'Security event',
          description:
            'An event that may indicate relevant security activity or a policy violation.',
        },
        {
          title: 'Policy decision log',
          description:
            'Provides information about why an access request was allowed, denied, or restricted.',
        },
        {
          title: 'Anomaly detection',
          description:
            'Identifies behavior that differs significantly from expected patterns.',
        },
      ],
    },
    {
      title: 'Zero Trust and AI Agents',
      content:
        'AI agents make Zero Trust especially important because an agent may have access to tools, APIs, databases, files, and business systems. Agent permissions should be explicit, limited, monitored, and aligned with the specific task. High-impact actions may require additional verification or human approval.',
      highlights: [
        {
          title: 'Agent identity',
          description:
            'Represents an AI agent or workload when it accesses another system.',
        },
        {
          title: 'Tool authorization',
          description:
            'Controls which tools and operations an AI agent is permitted to invoke.',
        },
        {
          title: 'Scoped permissions',
          description:
            'Limits agent capabilities to the resources and actions necessary for the current task.',
        },
        {
          title: 'Human approval',
          description:
            'Requires a person to approve sensitive or high-impact actions.',
        },
        {
          title: 'Agent auditability',
          description:
            'Maintains sufficient records to understand actions performed by an AI system.',
        },
      ],
    },
    {
      title: 'Zero Trust in production',
      content:
        'Implementing Zero Trust is an incremental architecture and operating-model change rather than a single product installation. Organizations typically begin by identifying critical assets and identities, improving authentication and authorization, reducing excessive privileges, segmenting sensitive workloads, improving visibility, and progressively enforcing stronger access policies.',
      highlights: [
        {
          title: 'Asset inventory',
          description:
            'Maintains visibility into applications, services, devices, identities, and data that require protection.',
        },
        {
          title: 'Identity inventory',
          description:
            'Maintains visibility into human and machine identities and their access.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Ensures defined security policies are actually applied to access requests.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Uses incidents, measurements, and changing business requirements to improve the security model.',
        },
        {
          title: 'Migration strategy',
          description:
            'Moves from implicit trust toward stronger identity- and policy-based controls in manageable stages.',
        },
      ],
    },
    {
      title: 'Common Zero Trust mistakes',
      content:
        'Common mistakes include treating Zero Trust as a single security product, focusing only on network segmentation, ignoring workload identities, implementing overly broad permissions, creating policies that cannot be operated reliably, and attempting a large migration without understanding existing dependencies.',
      highlights: [
        {
          title: 'Zero Trust as a product',
          description:
            'Assuming one vendor product automatically creates a complete Zero Trust architecture.',
        },
        {
          title: 'Network-only approach',
          description:
            'Focusing on network controls while ignoring identity, application, data, and policy controls.',
        },
        {
          title: 'Overly broad permissions',
          description:
            'Granting identities or services more access than their tasks require.',
        },
        {
          title: 'No observability',
          description:
            'Applying complex access policies without sufficient visibility into decisions and failures.',
        },
        {
          title: 'Big-bang migration',
          description:
            'Attempting to replace an entire security architecture at once without incremental validation.',
        },
      ],
    },
    {
      title: 'Explore Zero Trust in EDDUU',
      content:
        'EDDUU connects Zero Trust with Security, Identity, Authentication, Authorization, RBAC, ABAC, MFA, SSO, Encryption, TLS, API Security, Secrets Management, OWASP, Audit Logging, Cloud, and distributed systems.',
    },
  ],
  relatedTechnologyIds: [
    'security',
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
    'audit-logging',
  ],
}

export default zeroTrustKnowledge
