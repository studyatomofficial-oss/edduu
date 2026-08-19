import type { KnowledgeDefinition } from './knowledge'

export const abacKnowledge: KnowledgeDefinition = {
  technologyId: 'abac',
  slug: 'abac',
  title: 'What is Attribute-Based Access Control (ABAC)?',
  summary:
    'Attribute-Based Access Control is an authorization model that makes access decisions using attributes of the user, resource, action, and surrounding environment.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is ABAC?',
      content:
        'Attribute-Based Access Control, commonly called ABAC, is an authorization model that evaluates attributes and policies to determine whether an action should be allowed. Instead of relying only on a user role, ABAC can consider information such as department, location, resource owner, data classification, device state, time, and requested operation.',
    },
    {
      title: 'Why do we need ABAC?',
      content:
        'Role-based authorization works well when access follows stable organizational responsibilities, but real-world access decisions can become more contextual. ABAC allows systems to express rules such as allowing a doctor to access records only for patients assigned to that doctor, or allowing an employee to access confidential documents only from an approved device.',
    },
    {
      title: 'How does ABAC work?',
      content:
        'A typical ABAC system collects attributes about the subject, resource, action, and environment. A policy engine evaluates those attributes against authorization policies and produces a decision such as permit or deny. The application or service then enforces that decision before performing the requested operation.',
    },
    {
      title: 'The ABAC authorization model',
      content:
        'ABAC can be understood through four major categories of information used by authorization policies.',
      highlights: [
        {
          title: 'Subject attributes',
          description:
            'Describe the requester, such as department, job function, clearance, or tenant.',
        },
        {
          title: 'Resource attributes',
          description:
            'Describe the target resource, such as owner, classification, sensitivity, or department.',
        },
        {
          title: 'Action attributes',
          description:
            'Describe what operation the requester wants to perform, such as read, update, delete, or approve.',
        },
        {
          title: 'Environment attributes',
          description:
            'Describe surrounding conditions such as time, location, network, device state, or risk level.',
        },
      ],
    },
    {
      title: 'Important ABAC concepts',
      content:
        'Several concepts work together to make ABAC flexible while keeping authorization decisions controlled and explainable.',
      highlights: [
        {
          title: 'Attribute',
          description:
            'A piece of information about the subject, resource, action, or environment used by a policy.',
        },
        {
          title: 'Policy',
          description:
            'A rule that defines conditions under which an action should be permitted or denied.',
        },
        {
          title: 'Policy engine',
          description:
            'Evaluates attributes and policies to produce an authorization decision.',
        },
        {
          title: 'Policy enforcement point',
          description:
            'The component that applies the authorization decision to the requested operation.',
        },
        {
          title: 'Policy decision point',
          description:
            'The component responsible for evaluating policies and returning an authorization decision.',
        },
        {
          title: 'Decision',
          description:
            'The resulting outcome, typically permit, deny, or another controlled policy result.',
        },
      ],
    },
    {
      title: 'ABAC vs RBAC',
      content:
        'RBAC primarily uses roles and permissions, while ABAC uses attributes and policies to make contextual decisions. RBAC is often simpler to understand and administer when access maps directly to job responsibilities. ABAC can express more detailed rules when access depends on resource properties, user attributes, environmental conditions, or combinations of these factors.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Groups permissions into roles and assigns identities to those roles.',
        },
        {
          title: 'ABAC',
          description:
            'Evaluates attributes and policies to determine whether access should be allowed.',
        },
        {
          title: 'Static access',
          description:
            'Access that primarily follows relatively stable role assignments.',
        },
        {
          title: 'Contextual access',
          description:
            'Access that changes according to identity, resource, action, or environmental conditions.',
        },
      ],
    },
    {
      title: 'ABAC policy example',
      content:
        'An ABAC policy can express a rule such as: allow a user to read a document when the user belongs to the same department as the document, the document classification is within the user’s clearance level, and the request originates from an approved environment. The important idea is that the decision comes from multiple attributes rather than a single role.',
      highlights: [
        {
          title: 'Department',
          description:
            'Compares organizational membership between the requester and the protected resource.',
        },
        {
          title: 'Clearance',
          description:
            'Represents the level of information the requester is permitted to access.',
        },
        {
          title: 'Classification',
          description:
            'Represents the sensitivity or security category assigned to a resource.',
        },
        {
          title: 'Approved environment',
          description:
            'Represents trusted conditions under which the request may be allowed.',
        },
      ],
    },
    {
      title: 'Subject attributes',
      content:
        'Subject attributes describe the identity making the request. They can come from a trusted identity provider, directory, identity database, token claims, or another controlled source. Because authorization decisions depend on these attributes, applications should not blindly trust values supplied directly by an untrusted client.',
      highlights: [
        {
          title: 'Identity',
          description:
            'Identifies the authenticated subject making the request.',
        },
        {
          title: 'Department',
          description:
            'Identifies the organizational group associated with the subject.',
        },
        {
          title: 'Role',
          description:
            'Provides a role value that can be used as one attribute within a broader policy.',
        },
        {
          title: 'Clearance',
          description:
            'Represents the level of information or capability the subject is permitted to access.',
        },
        {
          title: 'Tenant',
          description:
            'Identifies the organization or customer boundary associated with the subject.',
        },
      ],
    },
    {
      title: 'Resource attributes',
      content:
        'Resource attributes describe the object being accessed. These attributes allow authorization policies to distinguish between resources even when the requesting user has the same identity and role. This is particularly useful for document classification, ownership, tenant isolation, and data sensitivity.',
      highlights: [
        {
          title: 'Owner',
          description:
            'Identifies the user or organization that owns or controls a resource.',
        },
        {
          title: 'Classification',
          description:
            'Describes the sensitivity or security classification of the resource.',
        },
        {
          title: 'Tenant',
          description:
            'Identifies the organization to which the resource belongs.',
        },
        {
          title: 'Department',
          description:
            'Identifies the organizational group responsible for or associated with the resource.',
        },
        {
          title: 'Sensitivity',
          description:
            'Represents how carefully the resource should be protected.',
        },
      ],
    },
    {
      title: 'Environment attributes',
      content:
        'Environment attributes allow authorization to respond to the context in which a request occurs. Examples include the current time, network location, device trust, geographic region, and security risk level. These attributes can support conditional access policies without creating a separate role for every possible situation.',
      highlights: [
        {
          title: 'Time',
          description:
            'Allows policies to restrict access to defined periods or schedules.',
        },
        {
          title: 'Location',
          description:
            'Represents geographic or network location information used by an access policy.',
        },
        {
          title: 'Device state',
          description:
            'Describes whether the requesting device meets required security conditions.',
        },
        {
          title: 'Network',
          description:
            'Identifies the network context from which the request originates.',
        },
        {
          title: 'Risk level',
          description:
            'Represents an assessed level of risk that can influence an authorization decision.',
        },
      ],
    },
    {
      title: 'Policy Decision Point and Policy Enforcement Point',
      content:
        'ABAC architectures often separate policy evaluation from policy enforcement. The Policy Decision Point evaluates the available attributes and policies, while the Policy Enforcement Point applies the resulting decision. This separation can make authorization logic more centralized, reusable, and auditable.',
      highlights: [
        {
          title: 'Policy Decision Point',
          description:
            'Evaluates policies and attributes to determine the authorization outcome.',
        },
        {
          title: 'Policy Enforcement Point',
          description:
            'Intercepts or controls the request and enforces the authorization decision.',
        },
        {
          title: 'Policy Information Point',
          description:
            'Provides trusted attribute information needed by the policy evaluation process.',
        },
        {
          title: 'Policy Administration Point',
          description:
            'Provides mechanisms for creating, managing, and maintaining authorization policies.',
        },
      ],
    },
    {
      title: 'ABAC in APIs',
      content:
        'ABAC can provide fine-grained authorization for APIs by evaluating request-specific attributes. An API can consider the authenticated identity, HTTP operation, target resource, tenant, resource classification, and environmental context before allowing the request.',
      highlights: [
        {
          title: 'Request context',
          description:
            'Provides information about the current API request that can influence policy evaluation.',
        },
        {
          title: 'Resource policy',
          description:
            'Defines which attributes must be satisfied before a particular resource can be accessed.',
        },
        {
          title: 'Fine-grained access',
          description:
            'Allows authorization decisions to operate at a more detailed level than broad role checks.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Ensures that the authorization result is applied before protected API logic executes.',
        },
      ],
    },
    {
      title: 'ABAC in multi-tenant systems',
      content:
        'ABAC is useful for multi-tenant systems because tenant identity can become an explicit authorization attribute. A policy can require the requester tenant and resource tenant to match before allowing access. Additional attributes can then refine access within the tenant boundary.',
      highlights: [
        {
          title: 'Tenant attribute',
          description:
            'Identifies the organization associated with the requester or resource.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Prevents access across organizational boundaries unless an explicit policy permits it.',
        },
        {
          title: 'Cross-tenant policy',
          description:
            'Defines controlled circumstances under which access between tenants may be allowed.',
        },
        {
          title: 'Tenant-aware decision',
          description:
            'Includes tenant context as part of the authorization evaluation.',
        },
      ],
    },
    {
      title: 'ABAC in microservices',
      content:
        'In microservice architectures, ABAC can centralize complex authorization policies while allowing individual services to enforce decisions close to protected resources. A gateway may provide initial controls, but resource-owning services should not blindly trust a gateway decision when additional business context is required.',
      highlights: [
        {
          title: 'API gateway',
          description:
            'Can provide initial authentication and coarse-grained policy enforcement.',
        },
        {
          title: 'Policy service',
          description:
            'Provides centralized authorization decisions for multiple applications or services.',
        },
        {
          title: 'Resource service',
          description:
            'Enforces resource-specific authorization rules close to the data or operation being protected.',
        },
        {
          title: 'Distributed policy',
          description:
            'Applies authorization rules across multiple independently deployed services.',
        },
      ],
    },
    {
      title: 'ABAC and AI systems',
      content:
        'ABAC can be particularly useful for AI systems and AI agents because access to tools, data, models, and actions may depend on context. For example, an agent may be allowed to read customer records but prevented from exporting them, or allowed to call a low-risk tool while requiring human approval for a high-impact operation.',
      highlights: [
        {
          title: 'Tool authorization',
          description:
            'Determines whether an AI agent is allowed to invoke a particular tool.',
        },
        {
          title: 'Data access',
          description:
            'Controls which information an AI application or agent can retrieve.',
        },
        {
          title: 'Risk-based policy',
          description:
            'Changes access decisions according to the risk or sensitivity of an operation.',
        },
        {
          title: 'Human approval',
          description:
            'Requires a person to approve selected actions before execution.',
        },
      ],
    },
    {
      title: 'ABAC security',
      content:
        'ABAC improves authorization precision but also introduces policy complexity. Security depends on trusted attributes, secure policy management, correct policy evaluation, clear deny behavior, auditability, and protection against policy bypass. Attribute sources should be trustworthy because incorrect attributes can produce incorrect access decisions.',
      highlights: [
        {
          title: 'Trusted attributes',
          description:
            'Ensures policy inputs come from controlled and reliable sources.',
        },
        {
          title: 'Deny by default',
          description:
            'Rejects requests unless an explicit policy permits the operation.',
        },
        {
          title: 'Policy integrity',
          description:
            'Protects authorization policies from unauthorized modification.',
        },
        {
          title: 'Policy audit',
          description:
            'Provides visibility into policy changes and authorization decisions.',
        },
        {
          title: 'Bypass prevention',
          description:
            'Ensures protected resources cannot be reached through paths that avoid policy enforcement.',
        },
      ],
    },
    {
      title: 'ABAC in real products',
      content:
        'ABAC is useful in enterprise applications, healthcare systems, financial platforms, cloud infrastructure, government systems, SaaS platforms, data platforms, and AI applications. It is especially valuable when access depends on combinations of identity, resource classification, organizational boundaries, and environmental context.',
    },
    {
      title: 'ABAC in production',
      content:
        'Production ABAC requires policy governance, trusted attribute sources, versioned policies, testing, monitoring, audit logging, failure handling, and clear ownership of authorization decisions. Teams should be able to explain which attributes and policies caused an access decision and should test both expected allow and deny scenarios.',
      highlights: [
        {
          title: 'Policy governance',
          description:
            'Defines who can create, approve, modify, and retire authorization policies.',
        },
        {
          title: 'Policy versioning',
          description:
            'Maintains controlled versions of policies so changes can be reviewed and traced.',
        },
        {
          title: 'Policy testing',
          description:
            'Tests authorization decisions against representative allow and deny scenarios.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important policy changes and authorization decisions.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual authorization patterns and unexpected policy outcomes.',
        },
      ],
    },
    {
      title: 'Common ABAC mistakes',
      content:
        'Common mistakes include trusting client-provided attributes, creating overly complex policies, failing to define deny behavior, allowing inconsistent attribute sources, skipping policy testing, placing authorization logic in only the frontend, and making policies impossible for operators to understand or audit.',
      highlights: [
        {
          title: 'Untrusted attributes',
          description:
            'Uses attribute values supplied by an untrusted caller without independent verification.',
        },
        {
          title: 'Policy complexity',
          description:
            'Creates rules so complicated that their behavior becomes difficult to understand and maintain.',
        },
        {
          title: 'Missing deny behavior',
          description:
            'Fails to define what happens when required attributes or policy conditions are unavailable.',
        },
        {
          title: 'No policy testing',
          description:
            'Deploys authorization changes without verifying expected access outcomes.',
        },
        {
          title: 'Frontend-only enforcement',
          description:
            'Relies on the user interface instead of enforcing authorization on trusted backend systems.',
        },
      ],
    },
    {
      title: 'Explore ABAC in EDDUU',
      content:
        'EDDUU connects ABAC with RBAC, Authorization, Authentication, Policy Engines, Identity, Multi-Tenancy, API Security, API Gateway, Microservices, Zero Trust, and AI Agents.',
    },
  ],
  relatedTechnologyIds: [
    'rbac',
    'authorization',
    'authentication',
    'policy-engines',
    'identity',
    'multi-tenancy',
    'api-security',
    'api-gateway',
    'microservices',
    'zero-trust',
    'agents',
  ],
}

export default abacKnowledge
