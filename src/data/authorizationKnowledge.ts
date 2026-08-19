import type { KnowledgeDefinition } from './knowledge'

export const authorizationKnowledge: KnowledgeDefinition = {
  technologyId: 'authorization',
  slug: 'authorization',
  title: 'What is Authorization?',
  summary:
    'Authorization is the process of determining what an authenticated user, application, or service is allowed to access or perform within a system.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Authorization?',
      content:
        'Authorization is the process of deciding what an authenticated identity is allowed to do. After a system knows who is making a request, authorization evaluates permissions, roles, policies, resource ownership, and other rules to determine whether the requested operation should be allowed or denied.',
    },
    {
      title: 'Why do we need Authorization?',
      content:
        'Authentication alone does not determine what a user can access. A user may successfully sign in but still need to be prevented from viewing another customer’s records, changing system settings, or performing administrative actions. Authorization provides the rules that protect resources and operations after identity has been established.',
    },
    {
      title: 'How does Authorization work?',
      content:
        'A typical authorization decision receives information about the requester, the requested action, and the target resource. The system evaluates this information against configured policies and returns an allow or deny decision. The application or service must enforce that decision before performing the requested operation.',
    },
    {
      title: 'The Authorization decision',
      content:
        'Authorization can be understood as a decision involving the subject, action, resource, and applicable policy.',
      highlights: [
        {
          title: 'Subject',
          description:
            'The authenticated user, application, service, or other identity making the request.',
        },
        {
          title: 'Action',
          description:
            'The operation the subject is attempting to perform.',
        },
        {
          title: 'Resource',
          description:
            'The object, record, API, feature, or system capability being accessed.',
        },
        {
          title: 'Policy',
          description:
            'The rules that determine whether the requested action should be permitted.',
        },
        {
          title: 'Decision',
          description:
            'The resulting authorization outcome, normally allow or deny.',
        },
        {
          title: 'Enforcement',
          description:
            'The point in the application or service where the authorization decision is actually applied.',
        },
      ],
    },
    {
      title: 'Important Authorization concepts',
      content:
        'Several concepts are essential for designing authorization systems that remain understandable and secure as applications grow.',
      highlights: [
        {
          title: 'Permission',
          description:
            'Represents an allowed operation or capability such as read, write, delete, or approve.',
        },
        {
          title: 'Role',
          description:
            'Groups related permissions into a reusable access profile.',
        },
        {
          title: 'Policy',
          description:
            'Defines rules that determine whether an action is permitted under specific conditions.',
        },
        {
          title: 'Resource',
          description:
            'Represents the object or capability that the requester wants to access.',
        },
        {
          title: 'Ownership',
          description:
            'Allows access decisions to depend on whether the requester owns or controls a resource.',
        },
        {
          title: 'Least privilege',
          description:
            'Grants only the minimum access required to perform the intended task.',
        },
      ],
    },
    {
      title: 'Authorization vs Authentication',
      content:
        'Authentication and authorization solve different problems. Authentication answers who the requester is, while authorization answers what that requester is allowed to do. A system should normally authenticate an identity before making identity-based authorization decisions, but the two concerns should remain conceptually separate.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of the requester.',
        },
        {
          title: 'Authorization',
          description:
            'Determines what the verified identity is allowed to access or perform.',
        },
        {
          title: 'Identity',
          description:
            'Represents the subject that has been authenticated.',
        },
        {
          title: 'Permission',
          description:
            'Represents a capability that can be granted to an identity or role.',
        },
      ],
    },
    {
      title: 'Role-Based Access Control',
      content:
        'Role-Based Access Control, commonly called RBAC, assigns permissions to roles and then assigns users or other identities to those roles. This reduces the need to define every permission separately for every user and can make access management easier to operate.',
      highlights: [
        {
          title: 'Role',
          description:
            'A named collection of permissions representing a responsibility or access profile.',
        },
        {
          title: 'Permission',
          description:
            'An operation that a role can perform on a resource.',
        },
        {
          title: 'Role assignment',
          description:
            'Associates an identity with one or more roles.',
        },
        {
          title: 'Role hierarchy',
          description:
            'Allows higher-level roles to inherit permissions from lower-level roles when supported.',
        },
      ],
    },
    {
      title: 'Attribute-Based Access Control',
      content:
        'Attribute-Based Access Control, or ABAC, makes authorization decisions using attributes associated with the subject, resource, action, and environment. This can express more contextual rules than simple role-based systems, such as allowing employees to access records only when they belong to the same department and are operating during approved conditions.',
      highlights: [
        {
          title: 'Subject attributes',
          description:
            'Properties of the requester such as department, location, or clearance level.',
        },
        {
          title: 'Resource attributes',
          description:
            'Properties of the target resource such as owner, classification, or department.',
        },
        {
          title: 'Environment attributes',
          description:
            'Context such as time, network location, device state, or risk level.',
        },
        {
          title: 'Policy rule',
          description:
            'Combines relevant attributes to determine whether an action should be permitted.',
        },
      ],
    },
    {
      title: 'Resource-Based Authorization',
      content:
        'Resource-based authorization makes access decisions using the relationship between the requester and the resource. This is useful when access depends on ownership or relationships, such as allowing a user to edit only documents they own or allowing a manager to access records belonging to their team.',
      highlights: [
        {
          title: 'Owner',
          description:
            'The identity that owns or controls a resource.',
        },
        {
          title: 'Relationship',
          description:
            'Defines how an identity is connected to a resource or another identity.',
        },
        {
          title: 'Tenant',
          description:
            'Represents an organizational boundary whose resources may need to remain isolated from other tenants.',
        },
        {
          title: 'Resource policy',
          description:
            'Defines which identities or relationships can access a specific resource.',
        },
      ],
    },
    {
      title: 'Authorization in APIs',
      content:
        'API authorization ensures that an authenticated caller can perform the specific operation requested. An API should not assume that possessing a valid authentication token means every endpoint or resource is accessible. Authorization checks should be performed at the appropriate resource and operation boundaries.',
      highlights: [
        {
          title: 'Endpoint permission',
          description:
            'Determines whether a caller can invoke a particular API operation.',
        },
        {
          title: 'Resource permission',
          description:
            'Determines whether the caller can access the specific resource identified by the request.',
        },
        {
          title: 'Scope',
          description:
            'A token-level permission boundary commonly used with OAuth-based APIs.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Ensures authorization rules are checked before protected operations execute.',
        },
      ],
    },
    {
      title: 'Authorization in microservices',
      content:
        'In microservice architectures, authorization can be enforced at an API gateway, individual services, or both. A gateway may provide coarse-grained controls, while the service that owns a resource should generally enforce resource-specific permissions because it has the most accurate understanding of the business rules.',
      highlights: [
        {
          title: 'API gateway',
          description:
            'Can perform centralized authentication and coarse-grained access checks before routing requests.',
        },
        {
          title: 'Service-level authorization',
          description:
            'Enforces permissions inside the service that owns the relevant business resource.',
        },
        {
          title: 'Defense in depth',
          description:
            'Uses multiple appropriate security controls so that one missed boundary does not automatically expose protected resources.',
        },
        {
          title: 'Service identity',
          description:
            'Represents the authenticated service making a service-to-service request.',
        },
      ],
    },
    {
      title: 'Authorization and multi-tenancy',
      content:
        'Multi-tenant applications must ensure that users can access only resources belonging to their authorized tenant or organization. Authorization therefore needs to consider tenant context as well as user identity and permissions. A valid user from one tenant should not automatically be able to access resources belonging to another tenant.',
      highlights: [
        {
          title: 'Tenant isolation',
          description:
            'Prevents users and services from accessing resources outside their authorized organizational boundary.',
        },
        {
          title: 'Tenant context',
          description:
            'Identifies the organization or tenant under which the authorization decision is being made.',
        },
        {
          title: 'Cross-tenant access',
          description:
            'A controlled exception that should exist only when explicitly permitted by business and security policy.',
        },
        {
          title: 'Tenant-aware policy',
          description:
            'Includes tenant boundaries when evaluating access decisions.',
        },
      ],
    },
    {
      title: 'Authorization and permissions',
      content:
        'Permissions should be designed around meaningful business capabilities rather than arbitrary implementation details. A permission such as invoice.read or student.record.update is generally easier to reason about than a large collection of low-level technical flags. Well-designed permissions also make auditing and access reviews easier.',
      highlights: [
        {
          title: 'Read',
          description:
            'Allows permitted information to be viewed or retrieved.',
        },
        {
          title: 'Create',
          description:
            'Allows a new resource or record to be created.',
        },
        {
          title: 'Update',
          description:
            'Allows an existing resource or record to be modified.',
        },
        {
          title: 'Delete',
          description:
            'Allows a resource or record to be removed when explicitly permitted.',
        },
        {
          title: 'Approve',
          description:
            'Allows an identity to perform an approval action when business policy permits it.',
        },
      ],
    },
    {
      title: 'Authorization security',
      content:
        'Authorization failures can expose sensitive information or allow unauthorized actions. Systems should enforce least privilege, validate resource ownership, protect administrative operations, avoid trusting client-provided permissions, and ensure that authorization checks cannot be bypassed through alternative endpoints or request paths.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Provides only the access necessary for the intended task.',
        },
        {
          title: 'Server-side enforcement',
          description:
            'Performs authorization checks on trusted backend systems rather than relying on the client interface.',
        },
        {
          title: 'Deny by default',
          description:
            'Rejects access unless an explicit policy grants the requested capability.',
        },
        {
          title: 'Privilege escalation',
          description:
            'Occurs when an identity gains permissions beyond those intentionally granted.',
        },
        {
          title: 'Access review',
          description:
            'Periodically evaluates whether users and services still require their assigned permissions.',
        },
      ],
    },
    {
      title: 'Authorization in real products',
      content:
        'Authorization is fundamental to SaaS applications, banking systems, education platforms, healthcare systems, enterprise applications, cloud infrastructure, APIs, internal tools, and AI products. Examples include deciding which employees can approve payments, which students can access their own records, which administrators can manage users, and which AI agents can call specific tools.',
    },
    {
      title: 'Authorization in production',
      content:
        'Production authorization requires centralized policy management where appropriate, clear ownership of permissions, audit logging, access reviews, least-privilege design, tenant isolation, administrative controls, policy testing, monitoring, and incident-response procedures. Teams should be able to explain why a request was allowed or denied when investigating security events.',
      highlights: [
        {
          title: 'Policy management',
          description:
            'Defines, versions, reviews, and distributes authorization rules.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important access decisions and administrative permission changes.',
        },
        {
          title: 'Policy testing',
          description:
            'Verifies that authorization rules produce expected allow and deny decisions before deployment.',
        },
        {
          title: 'Access review',
          description:
            'Checks whether assigned roles and permissions remain appropriate over time.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual access patterns and repeated authorization failures.',
        },
      ],
    },
    {
      title: 'Common Authorization mistakes',
      content:
        'Common mistakes include relying on the frontend to enforce permissions, checking only whether a user is authenticated, failing to validate resource ownership, granting excessive privileges, trusting client-provided roles, forgetting tenant boundaries, and placing authorization logic inconsistently across services.',
      highlights: [
        {
          title: 'Frontend-only authorization',
          description:
            'Hides UI controls but does not prevent a caller from directly invoking protected backend operations.',
        },
        {
          title: 'Authenticated means authorized',
          description:
            'Assumes that a valid identity automatically has access to every protected resource.',
        },
        {
          title: 'Missing ownership check',
          description:
            'Allows a user to access resources simply because the resource identifier is known.',
        },
        {
          title: 'Excessive privilege',
          description:
            'Grants more permissions than are required for the user or service to perform its responsibilities.',
        },
        {
          title: 'Client-controlled role',
          description:
            'Trusts role or permission information supplied directly by an untrusted client.',
        },
      ],
    },
    {
      title: 'Explore Authorization in EDDUU',
      content:
        'EDDUU connects Authorization with Authentication, RBAC, OAuth 2.0, OpenID Connect, JWT, API Security, Identity, Multi-Tenancy, API Gateway, Microservices, and Policy Engines.',
    },
  ],
  relatedTechnologyIds: [
    'authentication',
    'rbac',
    'oauth2',
    'openid-connect',
    'jwt',
    'api-security',
    'identity',
    'multi-tenancy',
    'api-gateway',
    'microservices',
    'policy-engines',
  ],
}

export default authorizationKnowledge
