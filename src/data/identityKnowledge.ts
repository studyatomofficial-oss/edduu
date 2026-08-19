import type { KnowledgeDefinition } from './knowledge'

export const identityKnowledge: KnowledgeDefinition = {
  technologyId: 'identity',
  slug: 'identity',
  title: 'What is Identity?',
  summary:
    'Identity represents who or what is interacting with a system. Identity systems establish, manage, verify, and govern the digital identities of users, services, devices, applications, and organizations.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Identity?',
      content:
        'In technology, identity represents who or what an entity is within a digital system. An identity can belong to a person, application, service, device, workload, organization, or other entity. Identity management provides the foundation for determining who is requesting access and how that identity should be represented across systems.',
    },
    {
      title: 'Why do we need Identity?',
      content:
        'Modern applications communicate with many users, services, devices, APIs, and external systems. Without reliable identity, a system cannot consistently determine which entity is making a request, which permissions should apply, or how activity should be traced back to its source. Identity therefore becomes a foundation for authentication, authorization, auditing, security, and governance.',
    },
    {
      title: 'How does Identity work?',
      content:
        'An identity system typically creates or establishes an identity, associates attributes and credentials with it, verifies the identity when required, and provides identity information to applications and security systems. Authentication answers whether a presented identity can be verified, while authorization determines what that verified identity is allowed to do.',
    },
    {
      title: 'The Identity lifecycle',
      content:
        'Digital identities need to be managed throughout their complete lifecycle. This includes creating an identity, assigning appropriate attributes and access, maintaining it while the identity is active, and removing or disabling it when it is no longer required.',
      highlights: [
        {
          title: 'Identity creation',
          description:
            'Establishes a new digital identity for a user, service, device, or other entity.',
        },
        {
          title: 'Identity attributes',
          description:
            'Stores information associated with an identity such as name, department, role, tenant, or service type.',
        },
        {
          title: 'Identity verification',
          description:
            'Confirms that a presented identity corresponds to the expected entity.',
        },
        {
          title: 'Access assignment',
          description:
            'Associates appropriate permissions, roles, or policies with an identity.',
        },
        {
          title: 'Identity update',
          description:
            'Changes identity attributes or access when responsibilities or circumstances change.',
        },
        {
          title: 'Deprovisioning',
          description:
            'Disables or removes an identity when it is no longer permitted to access systems.',
        },
      ],
    },
    {
      title: 'Important Identity concepts',
      content:
        'Several concepts work together to create a reliable identity system.',
      highlights: [
        {
          title: 'Digital identity',
          description:
            'A representation of an entity used by digital systems to recognize and manage that entity.',
        },
        {
          title: 'Principal',
          description:
            'An entity that can be identified and associated with permissions or security decisions.',
        },
        {
          title: 'Credential',
          description:
            'Information or cryptographic material used to prove or support an identity claim.',
        },
        {
          title: 'Attribute',
          description:
            'Information associated with an identity and potentially used in access decisions.',
        },
        {
          title: 'Identity provider',
          description:
            'A system that creates, manages, or provides trusted identity information to other applications.',
        },
        {
          title: 'Identity directory',
          description:
            'A centralized system that stores and manages identities and related information.',
        },
      ],
    },
    {
      title: 'Identity vs Authentication',
      content:
        'Identity and authentication are related but different concepts. Identity answers the question of who or what an entity is. Authentication is the process of verifying a claimed identity. For example, an application may identify a user by an account identifier and then authenticate that user using a password, security key, certificate, or another authentication mechanism.',
      highlights: [
        {
          title: 'Identity',
          description:
            'Represents who or what an entity is within a digital system.',
        },
        {
          title: 'Authentication',
          description:
            'Verifies a claimed identity using an accepted authentication mechanism.',
        },
        {
          title: 'Identity claim',
          description:
            'A statement from an entity indicating which identity it is attempting to use.',
        },
        {
          title: 'Authenticator',
          description:
            'A mechanism or factor used to verify an identity claim.',
        },
      ],
    },
    {
      title: 'Identity vs Authorization',
      content:
        'Identity establishes who or what is making a request, while authorization determines what that identity is allowed to do. A system may successfully identify and authenticate a user but still deny access because the user does not have permission for the requested resource or operation.',
      highlights: [
        {
          title: 'Identity',
          description:
            'Represents the entity making a request.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which actions or resources an identity is permitted to access.',
        },
        {
          title: 'Permission',
          description:
            'A defined capability granted to an identity or role.',
        },
        {
          title: 'Policy',
          description:
            'A rule or collection of rules used to make access decisions.',
        },
      ],
    },
    {
      title: 'Human Identity',
      content:
        'Human identities represent people who interact with applications and enterprise systems. These identities often contain attributes such as name, email address, department, job role, organization, and account status. Enterprise identity systems must manage employee onboarding, role changes, transfers, and offboarding.',
      highlights: [
        {
          title: 'User identity',
          description:
            'A digital representation of an individual person.',
        },
        {
          title: 'Employee identity',
          description:
            'An identity associated with a person working within an organization.',
        },
        {
          title: 'User attributes',
          description:
            'Information such as department, location, role, or organization associated with a user identity.',
        },
        {
          title: 'Offboarding',
          description:
            'The process of disabling or removing access when a person leaves an organization or no longer needs access.',
        },
      ],
    },
    {
      title: 'Machine Identity',
      content:
        'Machine identities represent non-human entities such as applications, services, workloads, containers, devices, and automated processes. Machine identity is increasingly important in distributed systems because services communicate with other services without a person being directly involved.',
      highlights: [
        {
          title: 'Service identity',
          description:
            'An identity representing a backend service or application.',
        },
        {
          title: 'Workload identity',
          description:
            'An identity associated with a running application workload or execution environment.',
        },
        {
          title: 'Device identity',
          description:
            'An identity associated with a physical or virtual device.',
        },
        {
          title: 'Machine credential',
          description:
            'A credential used by a non-human system to establish or prove its identity.',
        },
      ],
    },
    {
      title: 'Identity Providers',
      content:
        'An Identity Provider, commonly called an IdP, manages or supplies identity information to applications and services. An IdP can authenticate users, issue identity assertions or tokens, maintain identity attributes, and integrate with enterprise directories and applications.',
      highlights: [
        {
          title: 'Identity Provider',
          description:
            'A trusted system that manages identities and provides identity information to relying applications.',
        },
        {
          title: 'Relying party',
          description:
            'An application or service that relies on an identity provider for identity information or authentication.',
        },
        {
          title: 'Identity assertion',
          description:
            'A trusted statement about an identity provided by an identity system.',
        },
        {
          title: 'Identity token',
          description:
            'A token containing identity-related claims issued according to an identity protocol.',
        },
      ],
    },
    {
      title: 'Identity directories',
      content:
        'Identity directories provide centralized storage and management of identities and their attributes. Enterprise systems may use directories to maintain employee accounts, groups, organizational relationships, and other identity information that applications can consume.',
      highlights: [
        {
          title: 'Directory',
          description:
            'A centralized repository for identities, groups, attributes, and related information.',
        },
        {
          title: 'User account',
          description:
            'A representation of a person or service within an identity system.',
        },
        {
          title: 'Group',
          description:
            'A collection of identities managed together for organizational or access-control purposes.',
        },
        {
          title: 'Directory synchronization',
          description:
            'The process of keeping identity information consistent across multiple identity systems.',
        },
      ],
    },
    {
      title: 'Identity federation',
      content:
        'Identity federation allows one organization or identity system to provide trusted identity information to another system. This enables users to access applications without requiring every application to maintain an independent user identity database.',
      highlights: [
        {
          title: 'Federation',
          description:
            'A trust relationship that allows identities from one system or organization to be recognized by another.',
        },
        {
          title: 'Trust relationship',
          description:
            'An established relationship defining which identity information or assertions can be trusted.',
        },
        {
          title: 'Identity assertion',
          description:
            'Information provided by a trusted identity system about an authenticated identity.',
        },
        {
          title: 'Relying application',
          description:
            'An application that accepts identity information from a trusted external identity provider.',
        },
      ],
    },
    {
      title: 'Identity and SSO',
      content:
        'Single Sign-On allows users to authenticate through a centralized identity system and then access multiple trusted applications without separately authenticating to every application. Identity provides the underlying representation and trust model, while SSO provides a convenient authentication experience across participating applications.',
      highlights: [
        {
          title: 'Single Sign-On',
          description:
            'Allows one authentication experience to provide access to multiple trusted applications.',
        },
        {
          title: 'Central identity',
          description:
            'Provides a common identity source for multiple applications and services.',
        },
        {
          title: 'Trust relationship',
          description:
            'Allows applications to rely on identity information provided by a trusted identity system.',
        },
        {
          title: 'Session',
          description:
            'Represents an authenticated interaction between an identity and an application.',
        },
      ],
    },
    {
      title: 'Identity and Zero Trust',
      content:
        'Zero Trust architectures treat identity as a major security control. Instead of assuming that a request is trustworthy because it originates from an internal network, systems evaluate the identity, device, workload, resource, context, and policy before allowing access.',
      highlights: [
        {
          title: 'Identity-centric security',
          description:
            'Uses verified identity as a major input to security decisions.',
        },
        {
          title: 'Continuous verification',
          description:
            'Continuously evaluates trust and access conditions rather than assuming permanent trust.',
        },
        {
          title: 'Context',
          description:
            'Additional information such as device state, location, resource, time, or risk that can influence an access decision.',
        },
        {
          title: 'Least privilege',
          description:
            'Limits identities to only the access required for their responsibilities.',
        },
      ],
    },
    {
      title: 'Identity in multi-tenant systems',
      content:
        'Multi-tenant applications must associate identities with the correct organization or tenant and prevent one tenant from accessing another tenant’s identities or resources. Tenant context should therefore become an explicit part of identity and authorization decisions.',
      highlights: [
        {
          title: 'Tenant identity',
          description:
            'Represents a user, service, or entity within a particular organizational tenant.',
        },
        {
          title: 'Tenant context',
          description:
            'Information identifying which tenant an identity and request belong to.',
        },
        {
          title: 'Tenant isolation',
          description:
            'Prevents identities and resources belonging to one tenant from improperly crossing into another tenant.',
        },
        {
          title: 'Cross-tenant access',
          description:
            'An access path between tenants that must be explicitly authorized and controlled.',
        },
      ],
    },
    {
      title: 'Identity Governance',
      content:
        'Identity Governance focuses on ensuring that identities have appropriate access throughout their lifecycle. Organizations use governance processes to review access, enforce policies, manage joiner-mover-leaver workflows, separate responsibilities, and provide evidence for security and compliance requirements.',
      highlights: [
        {
          title: 'Joiner-Mover-Leaver',
          description:
            'A lifecycle process for creating, updating, and removing identity access as people change organizational status.',
        },
        {
          title: 'Access review',
          description:
            'A periodic review to determine whether identities still require their assigned access.',
        },
        {
          title: 'Separation of duties',
          description:
            'Prevents one identity from holding combinations of permissions that create unacceptable security risk.',
        },
        {
          title: 'Identity governance',
          description:
            'Policies and processes that ensure identity and access remain appropriate throughout their lifecycle.',
        },
      ],
    },
    {
      title: 'Identity in APIs and microservices',
      content:
        'Distributed systems require reliable service and user identity across many APIs and services. Identity information can be represented through tokens, certificates, workload identities, or other trusted mechanisms. Each service should validate the identity information it receives according to the security architecture rather than blindly trusting arbitrary client-provided identity claims.',
      highlights: [
        {
          title: 'Service identity',
          description:
            'Identifies one backend service when it communicates with another service.',
        },
        {
          title: 'Identity token',
          description:
            'Carries trusted identity claims between systems according to an established protocol.',
        },
        {
          title: 'Workload authentication',
          description:
            'Allows services and workloads to prove their identities to other systems.',
        },
        {
          title: 'Identity validation',
          description:
            'Checks that identity information comes from an appropriate trusted source and satisfies security requirements.',
        },
      ],
    },
    {
      title: 'Identity in production',
      content:
        'Production identity architecture requires lifecycle management, strong authentication, authorization, identity federation, directory integration, machine identities, auditing, access reviews, least privilege, tenant isolation, and incident-response processes. Teams should clearly define which system is the source of truth for each identity and how identity changes propagate across connected applications.',
      highlights: [
        {
          title: 'Source of truth',
          description:
            'The authoritative system responsible for maintaining a particular identity or identity attribute.',
        },
        {
          title: 'Identity synchronization',
          description:
            'Keeps identity information aligned across multiple connected systems.',
        },
        {
          title: 'Access review',
          description:
            'Periodically verifies that identities retain only the access they still require.',
        },
        {
          title: 'Identity monitoring',
          description:
            'Detects unusual identity activity, authentication behavior, or access patterns.',
        },
        {
          title: 'Identity incident response',
          description:
            'Defines how compromised identities, credentials, and access paths are contained and recovered.',
        },
      ],
    },
    {
      title: 'Common Identity mistakes',
      content:
        'Common mistakes include treating authentication and identity as the same concept, allowing shared accounts, failing to remove inactive identities, giving machine identities excessive privileges, trusting identity claims without validation, and failing to maintain a reliable identity source of truth.',
      highlights: [
        {
          title: 'Shared accounts',
          description:
            'Uses one identity across multiple people, making accountability and access control more difficult.',
        },
        {
          title: 'Orphaned identity',
          description:
            'An identity that remains active even though the associated person, service, or purpose is no longer valid.',
        },
        {
          title: 'Excessive privileges',
          description:
            'Gives an identity more access than required for its responsibilities.',
        },
        {
          title: 'Unvalidated identity claims',
          description:
            'Trusts identity information without confirming its origin and integrity.',
        },
        {
          title: 'No identity source of truth',
          description:
            'Maintains conflicting identity information across systems without a clear authoritative source.',
        },
      ],
    },
    {
      title: 'Explore Identity in EDDUU',
      content:
        'EDDUU connects Identity with Authentication, Authorization, RBAC, ABAC, MFA, SSO, OAuth 2.0, OIDC, JWT, TLS, Zero Trust, API Security, and Audit Logging.',
    },
  ],
  relatedTechnologyIds: [
    'authentication',
    'authorization',
    'rbac',
    'abac',
    'multi-factor-authentication',
    'single-sign-on',
    'oauth2',
    'openid-connect',
    'jwt',
    'tls',
    'zero-trust',
    'api-security',
    'audit-logging',
  ],
}

export default identityKnowledge
