import type { KnowledgeDefinition } from './knowledge'

export const rbacKnowledge: KnowledgeDefinition = {
  technologyId: 'rbac',
  slug: 'rbac',
  title: 'What is Role-Based Access Control (RBAC)?',
  summary:
    'Role-Based Access Control is an authorization model that assigns permissions to roles and then assigns users or other identities to those roles.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is RBAC?',
      content:
        'Role-Based Access Control, commonly called RBAC, is an authorization model where permissions are grouped into roles and identities are assigned those roles. Instead of manually defining every permission for every user, an organization can create reusable roles such as Administrator, Manager, Teacher, Student, or Support Agent.',
    },
    {
      title: 'Why do we need RBAC?',
      content:
        'Large applications can have thousands of users and many different permissions. Managing every permission individually becomes difficult to understand and maintain. RBAC simplifies access management by connecting permissions to job responsibilities and then assigning users to the appropriate roles.',
    },
    {
      title: 'How does RBAC work?',
      content:
        'A typical RBAC system defines permissions first, groups those permissions into roles, and then assigns roles to users or other identities. When an authenticated identity attempts an operation, the authorization layer checks the identity’s assigned roles and determines whether one of those roles grants the required permission.',
    },
    {
      title: 'The RBAC model',
      content:
        'The core RBAC model can be understood as a relationship between users, roles, permissions, and resources.',
      highlights: [
        {
          title: 'User',
          description:
            'An identity that can be assigned one or more roles.',
        },
        {
          title: 'Role',
          description:
            'A named collection of permissions representing a responsibility or access profile.',
        },
        {
          title: 'Permission',
          description:
            'A capability allowing an identity to perform a defined operation on a resource.',
        },
        {
          title: 'Resource',
          description:
            'The object, service, feature, or system capability being protected.',
        },
        {
          title: 'Role assignment',
          description:
            'The relationship that associates an identity with a role.',
        },
        {
          title: 'Authorization decision',
          description:
            'The final allow or deny result produced from the applicable roles and permissions.',
        },
      ],
    },
    {
      title: 'Important RBAC concepts',
      content:
        'Several concepts make RBAC practical for real-world applications and organizations.',
      highlights: [
        {
          title: 'Permission',
          description:
            'Defines a specific operation that an identity may perform.',
        },
        {
          title: 'Role',
          description:
            'Groups related permissions into a reusable access profile.',
        },
        {
          title: 'Role assignment',
          description:
            'Connects users or other identities to their permitted roles.',
        },
        {
          title: 'Role hierarchy',
          description:
            'Allows one role to inherit permissions from another role when supported.',
        },
        {
          title: 'Separation of duties',
          description:
            'Prevents one identity from receiving combinations of permissions that create unacceptable conflicts of responsibility.',
        },
        {
          title: 'Least privilege',
          description:
            'Ensures identities receive only the permissions required for their responsibilities.',
        },
      ],
    },
    {
      title: 'Roles and permissions',
      content:
        'A role should represent a meaningful responsibility rather than simply becoming a collection of unrelated permissions. For example, an Administrator role might manage users and configuration, while a Teacher role might manage assigned courses and student evaluations. Permissions should remain specific enough to support clear authorization decisions.',
      highlights: [
        {
          title: 'Read',
          description:
            'Allows permitted information to be viewed or retrieved.',
        },
        {
          title: 'Create',
          description:
            'Allows a permitted resource or record to be created.',
        },
        {
          title: 'Update',
          description:
            'Allows an existing resource to be modified.',
        },
        {
          title: 'Delete',
          description:
            'Allows a resource to be removed when explicitly permitted.',
        },
        {
          title: 'Approve',
          description:
            'Allows an identity to perform an approval operation.',
        },
      ],
    },
    {
      title: 'RBAC role hierarchy',
      content:
        'Role hierarchies allow higher-level roles to inherit permissions from lower-level roles. For example, a Senior Manager role may inherit the permissions of a Manager role and add additional capabilities. Hierarchies can reduce duplicated permission assignments but should be designed carefully so that inherited access remains understandable.',
      highlights: [
        {
          title: 'Parent role',
          description:
            'A higher-level role that can inherit permissions from another role.',
        },
        {
          title: 'Child role',
          description:
            'A role whose permissions can be inherited by a higher-level role.',
        },
        {
          title: 'Permission inheritance',
          description:
            'Allows permissions assigned to one role to become available through another role.',
        },
        {
          title: 'Role explosion',
          description:
            'Occurs when too many narrowly defined roles make the RBAC model difficult to manage.',
        },
      ],
    },
    {
      title: 'RBAC vs ABAC',
      content:
        'RBAC makes authorization decisions primarily around roles and their permissions. Attribute-Based Access Control, or ABAC, evaluates attributes such as department, location, resource classification, device state, and time. RBAC is often easier to understand and operate, while ABAC can express more contextual policies.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Uses roles and permissions as the primary authorization model.',
        },
        {
          title: 'ABAC',
          description:
            'Uses attributes of the subject, resource, action, and environment.',
        },
        {
          title: 'Role',
          description:
            'Provides a reusable access profile based on responsibility.',
        },
        {
          title: 'Attribute',
          description:
            'Provides contextual information that can influence an authorization decision.',
        },
      ],
    },
    {
      title: 'RBAC vs resource-based authorization',
      content:
        'RBAC is useful when access naturally follows organizational responsibilities. Resource-based authorization is more appropriate when access depends heavily on the relationship between a user and a specific resource. Many production systems combine both approaches: a role provides baseline access while resource ownership or relationships provide additional restrictions.',
      highlights: [
        {
          title: 'Role permission',
          description:
            'Provides access based on the responsibilities associated with an assigned role.',
        },
        {
          title: 'Resource ownership',
          description:
            'Restricts access based on whether the requester owns or controls the target resource.',
        },
        {
          title: 'Relationship',
          description:
            'Represents how an identity is connected to a resource or another identity.',
        },
        {
          title: 'Combined authorization',
          description:
            'Uses roles together with resource-specific rules to produce a more precise access decision.',
        },
      ],
    },
    {
      title: 'RBAC in multi-tenant systems',
      content:
        'Multi-tenant applications need to ensure that role assignments do not accidentally cross organizational boundaries. A user may be an Administrator inside one tenant but have no administrative permissions in another tenant. Tenant context should therefore be included in role assignment and authorization decisions where appropriate.',
      highlights: [
        {
          title: 'Tenant role',
          description:
            'A role whose permissions apply within a specific tenant or organization.',
        },
        {
          title: 'Tenant context',
          description:
            'Identifies the organization within which a role and permission are being evaluated.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Prevents users from accessing resources belonging to unauthorized tenants.',
        },
        {
          title: 'Cross-tenant role',
          description:
            'A role that intentionally provides access across tenant boundaries and therefore requires explicit governance.',
        },
      ],
    },
    {
      title: 'RBAC in APIs',
      content:
        'API authorization can use RBAC to determine whether an authenticated caller can invoke specific operations. However, checking only the caller’s role may not be enough. APIs often need additional resource-level checks such as ownership, tenant membership, or record-specific permissions.',
      highlights: [
        {
          title: 'Endpoint permission',
          description:
            'Determines whether a role can invoke a particular API operation.',
        },
        {
          title: 'Resource permission',
          description:
            'Determines whether the caller can access the specific resource involved in the request.',
        },
        {
          title: 'Scope',
          description:
            'A token-level permission boundary that can complement role-based authorization.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Ensures the authorization rules are actually applied before the protected operation executes.',
        },
      ],
    },
    {
      title: 'RBAC in microservices',
      content:
        'In microservice architectures, RBAC information can be represented in tokens, identity services, authorization services, or application databases. A gateway may perform coarse-grained checks, but services should still enforce authorization for resources they own. This prevents a single missed gateway check from becoming a complete security boundary failure.',
      highlights: [
        {
          title: 'API gateway',
          description:
            'Can perform centralized authentication and coarse-grained role checks.',
        },
        {
          title: 'Service authorization',
          description:
            'Enforces permissions inside the service that owns the protected resource.',
        },
        {
          title: 'Identity service',
          description:
            'Maintains or provides trusted identity and role information.',
        },
        {
          title: 'Defense in depth',
          description:
            'Uses multiple appropriate authorization controls across system boundaries.',
        },
      ],
    },
    {
      title: 'RBAC administration',
      content:
        'Production RBAC requires more than defining roles in code. Organizations need controlled processes for creating roles, assigning users, removing access, reviewing permissions, and handling administrative changes. Role management should be auditable and should follow least-privilege principles.',
      highlights: [
        {
          title: 'Role creation',
          description:
            'Defines a new role and the permissions associated with its responsibility.',
        },
        {
          title: 'Role assignment',
          description:
            'Grants an identity membership in a role.',
        },
        {
          title: 'Role removal',
          description:
            'Removes an identity’s membership when access is no longer required.',
        },
        {
          title: 'Access review',
          description:
            'Periodically checks whether users still require their assigned roles.',
        },
        {
          title: 'Approval workflow',
          description:
            'Requires appropriate authorization before sensitive role changes are applied.',
        },
      ],
    },
    {
      title: 'Separation of duties',
      content:
        'Separation of duties prevents a single identity from controlling conflicting stages of a sensitive process. For example, the person who creates a financial transaction may be prevented from approving the same transaction. RBAC can support this principle by carefully controlling which roles can be combined.',
      highlights: [
        {
          title: 'Conflicting roles',
          description:
            'Roles that should not be assigned to the same identity because their combined permissions create excessive risk.',
        },
        {
          title: 'Approval role',
          description:
            'A role responsible for reviewing or approving sensitive operations.',
        },
        {
          title: 'Initiator role',
          description:
            'A role responsible for starting or creating an operation.',
        },
        {
          title: 'Dual control',
          description:
            'Requires more than one authorized person for selected sensitive operations.',
        },
      ],
    },
    {
      title: 'RBAC security',
      content:
        'RBAC security depends on correct role design, secure role assignment, least privilege, tenant isolation, administrative controls, and consistent enforcement. The client interface should never be treated as the security boundary because an attacker can bypass UI restrictions and call backend APIs directly.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Grants only the minimum permissions needed for the identity’s responsibilities.',
        },
        {
          title: 'Server-side enforcement',
          description:
            'Performs role and permission checks on trusted backend systems.',
        },
        {
          title: 'Deny by default',
          description:
            'Rejects access unless an explicit role or policy grants the required permission.',
        },
        {
          title: 'Administrative protection',
          description:
            'Applies stronger controls to users and operations capable of changing access policies.',
        },
        {
          title: 'Audit trail',
          description:
            'Records important role assignments, permission changes, and authorization decisions.',
        },
      ],
    },
    {
      title: 'RBAC in real products',
      content:
        'RBAC is widely used in SaaS platforms, education systems, healthcare applications, financial systems, enterprise software, cloud platforms, internal tools, APIs, and AI applications. Typical roles include Administrator, Manager, Operator, Teacher, Student, Analyst, Support Agent, and Viewer.',
    },
    {
      title: 'RBAC in production',
      content:
        'Production RBAC systems require role governance, permission ownership, secure administrative workflows, audit logging, access reviews, policy testing, monitoring, tenant isolation, and incident-response procedures. Teams should also monitor for role explosion and regularly remove permissions that are no longer required.',
      highlights: [
        {
          title: 'Role governance',
          description:
            'Defines who can create, modify, approve, and retire roles.',
        },
        {
          title: 'Permission ownership',
          description:
            'Identifies the team or business owner responsible for each important permission.',
        },
        {
          title: 'Policy testing',
          description:
            'Verifies expected allow and deny outcomes before authorization changes reach production.',
        },
        {
          title: 'Access review',
          description:
            'Regularly evaluates whether assigned roles remain appropriate.',
        },
        {
          title: 'Role cleanup',
          description:
            'Removes unused, duplicated, or obsolete roles and permissions.',
        },
      ],
    },
    {
      title: 'Common RBAC mistakes',
      content:
        'Common mistakes include creating too many roles, using overly broad roles, trusting client-provided role information, failing to check resource ownership, ignoring tenant boundaries, allowing unauthorized role assignment, and never reviewing whether permissions are still required.',
      highlights: [
        {
          title: 'Role explosion',
          description:
            'Creates an excessive number of roles that become difficult to understand and maintain.',
        },
        {
          title: 'Overpowered role',
          description:
            'Contains significantly more permissions than the role’s responsibilities require.',
        },
        {
          title: 'Client-controlled role',
          description:
            'Allows an untrusted client to determine its own effective role or permissions.',
        },
        {
          title: 'Missing tenant check',
          description:
            'Allows a valid role from one organization to be incorrectly applied to another organization’s resources.',
        },
        {
          title: 'No access review',
          description:
            'Leaves obsolete or excessive permissions assigned indefinitely.',
        },
      ],
    },
    {
      title: 'Explore RBAC in EDDUU',
      content:
        'EDDUU connects RBAC with Authorization, Authentication, OAuth 2.0, OpenID Connect, JWT, ABAC, Identity, Multi-Tenancy, API Security, API Gateway, and Policy Engines.',
    },
  ],
  relatedTechnologyIds: [
    'authorization',
    'authentication',
    'oauth2',
    'openid-connect',
    'jwt',
    'abac',
    'identity',
    'multi-tenancy',
    'api-security',
    'api-gateway',
    'policy-engines',
  ],
}

export default rbacKnowledge
