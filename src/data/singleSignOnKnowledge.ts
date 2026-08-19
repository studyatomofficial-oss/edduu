import type { KnowledgeDefinition } from './knowledge'

export const singleSignOnKnowledge: KnowledgeDefinition = {
  technologyId: 'single-sign-on',
  slug: 'single-sign-on',
  title: 'What is Single Sign-On (SSO)?',
  summary:
    'Single Sign-On allows users to authenticate through a trusted identity system once and then access multiple connected applications without separately signing in to each application.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Single Sign-On?',
      content:
        'Single Sign-On, commonly called SSO, is an authentication architecture that allows a user to authenticate through a trusted identity system and then access multiple connected applications without entering credentials separately for every application. The identity provider performs authentication while connected applications rely on the established identity relationship.',
    },
    {
      title: 'Why do we need SSO?',
      content:
        'Without SSO, users may need separate credentials and login sessions for every application they use. This increases password fatigue, support effort, and the number of credentials that can be compromised. SSO centralizes authentication and can provide users with a simpler and more consistent login experience.',
    },
    {
      title: 'How does SSO work?',
      content:
        'A user attempts to access an application that trusts an identity provider. If the user is not already authenticated, the application redirects the user to the identity provider. After successful authentication, the identity provider establishes an authenticated session and provides the application with trusted information about the user. The application then creates its own session or access context.',
    },
    {
      title: 'The SSO authentication flow',
      content:
        'A typical SSO flow involves the user, an application, an identity provider, and a trusted exchange of authentication information.',
      highlights: [
        {
          title: 'User',
          description:
            'The person attempting to access one or more connected applications.',
        },
        {
          title: 'Application',
          description:
            'The service the user wants to access and that trusts an identity provider.',
        },
        {
          title: 'Identity Provider',
          description:
            'The trusted system responsible for authenticating the user and providing identity information.',
        },
        {
          title: 'Authentication',
          description:
            'The process through which the identity provider verifies the user’s identity.',
        },
        {
          title: 'Trust relationship',
          description:
            'The configured relationship that allows an application to rely on the identity provider.',
        },
        {
          title: 'Application session',
          description:
            'The application-specific authenticated session established after successful SSO.',
        },
      ],
    },
    {
      title: 'Important SSO concepts',
      content:
        'Several concepts are essential for understanding how SSO systems connect users, identity providers, and applications.',
      highlights: [
        {
          title: 'Identity Provider',
          description:
            'The system that authenticates users and provides trusted identity information.',
        },
        {
          title: 'Service Provider',
          description:
            'An application that relies on an identity provider for authentication.',
        },
        {
          title: 'Relying Party',
          description:
            'An application that relies on an identity provider within protocols such as OpenID Connect.',
        },
        {
          title: 'Authentication session',
          description:
            'A session maintained by the identity provider after the user successfully authenticates.',
        },
        {
          title: 'Application session',
          description:
            'A session maintained by the application after accepting trusted authentication information.',
        },
        {
          title: 'Federation',
          description:
            'A trust relationship that allows identities managed by one organization or system to access another system.',
        },
      ],
    },
    {
      title: 'SSO and Identity Providers',
      content:
        'An Identity Provider, or IdP, acts as the central authentication authority in an SSO architecture. Applications establish trust with the IdP and redirect authentication requests to it. The IdP can centralize password policies, MFA, account lifecycle management, and authentication monitoring.',
      highlights: [
        {
          title: 'Identity Provider',
          description:
            'Central authority responsible for authenticating and identifying users.',
        },
        {
          title: 'User directory',
          description:
            'A system containing identities and related account information.',
        },
        {
          title: 'Authentication policy',
          description:
            'Defines the requirements users must satisfy before authentication succeeds.',
        },
        {
          title: 'MFA policy',
          description:
            'Defines when additional authentication factors are required.',
        },
      ],
    },
    {
      title: 'SSO with OAuth 2.0',
      content:
        'OAuth 2.0 is primarily an authorization framework rather than an authentication protocol. It allows applications to obtain delegated access to protected resources. SSO architectures may use OAuth 2.0 as part of an identity solution, but OAuth 2.0 alone should not be treated as a complete user authentication protocol.',
      highlights: [
        {
          title: 'OAuth 2.0',
          description:
            'A framework for delegated authorization and access to protected resources.',
        },
        {
          title: 'Access token',
          description:
            'A credential representing authorized access to protected resources.',
        },
        {
          title: 'Authorization',
          description:
            'Determines what an authenticated or authorized client can access or perform.',
        },
        {
          title: 'Authentication',
          description:
            'Determines who the user or client is and is conceptually different from authorization.',
        },
      ],
    },
    {
      title: 'SSO with OpenID Connect',
      content:
        'OpenID Connect, commonly called OIDC, adds an identity layer on top of OAuth 2.0. It allows applications to authenticate users and receive standardized identity information. OIDC is commonly used for modern web, mobile, and API-connected applications that need federated login.',
      highlights: [
        {
          title: 'OpenID Connect',
          description:
            'An identity protocol built on top of OAuth 2.0 for user authentication.',
        },
        {
          title: 'ID token',
          description:
            'A signed token containing identity claims about the authenticated user.',
        },
        {
          title: 'Claims',
          description:
            'Identity information such as subject identifier, name, or email provided according to the protocol.',
        },
        {
          title: 'Relying Party',
          description:
            'The application that relies on the OpenID Provider for user authentication.',
        },
      ],
    },
    {
      title: 'SSO with SAML',
      content:
        'SAML is a federation protocol commonly used for enterprise SSO. It allows an identity provider to communicate authentication assertions to a service provider. SAML remains widely used in enterprise environments where organizations need centralized identity management across many business applications.',
      highlights: [
        {
          title: 'SAML',
          description:
            'An XML-based federation protocol widely used for enterprise authentication and SSO.',
        },
        {
          title: 'Assertion',
          description:
            'A signed statement from an identity provider about an authenticated user or authentication event.',
        },
        {
          title: 'Service Provider',
          description:
            'The enterprise application that consumes the identity provider’s SAML assertion.',
        },
        {
          title: 'Identity Provider',
          description:
            'The system that authenticates the user and produces the SAML assertion.',
        },
      ],
    },
    {
      title: 'SSO and session management',
      content:
        'SSO does not mean that every application shares the exact same session. The identity provider maintains its authentication session, while each application may establish its own application session after successful authentication. Proper session expiration, logout, token handling, and revocation are therefore still required.',
      highlights: [
        {
          title: 'IdP session',
          description:
            'The authenticated session maintained by the identity provider.',
        },
        {
          title: 'Application session',
          description:
            'The authenticated session maintained by an individual application.',
        },
        {
          title: 'Session expiration',
          description:
            'Defines when an authenticated session becomes invalid and requires reauthentication.',
        },
        {
          title: 'Session revocation',
          description:
            'Invalidates an active authentication or access context when necessary.',
        },
      ],
    },
    {
      title: 'Single Logout',
      content:
        'Single Logout, or SLO, attempts to terminate authentication across connected applications when the user signs out. Implementations vary by protocol and architecture, and complete logout across distributed applications can be more complex than initial login because multiple application sessions may already exist.',
      highlights: [
        {
          title: 'Single Logout',
          description:
            'A mechanism for coordinating logout across connected applications.',
        },
        {
          title: 'Local logout',
          description:
            'Ends the user’s session in one application without necessarily ending sessions elsewhere.',
        },
        {
          title: 'Global logout',
          description:
            'Attempts to terminate authentication across multiple connected services.',
        },
        {
          title: 'Session propagation',
          description:
            'Coordinates session state changes between identity providers and connected applications.',
        },
      ],
    },
    {
      title: 'SSO in enterprise systems',
      content:
        'Enterprise organizations commonly use SSO to connect employees with internal applications, SaaS platforms, cloud services, developer tools, and business systems. Centralized identity management can simplify onboarding, offboarding, MFA enforcement, password policies, and access governance.',
      highlights: [
        {
          title: 'Employee identity',
          description:
            'The centrally managed identity representing an employee or workforce member.',
        },
        {
          title: 'Provisioning',
          description:
            'Creates and configures application accounts and access for users.',
        },
        {
          title: 'Deprovisioning',
          description:
            'Removes or disables access when a user leaves an organization or changes responsibilities.',
        },
        {
          title: 'Access governance',
          description:
            'Controls and reviews which users can access which applications and resources.',
        },
      ],
    },
    {
      title: 'SSO and user lifecycle',
      content:
        'SSO becomes more valuable when combined with centralized identity lifecycle management. Organizations can connect employee onboarding, role changes, application access, and offboarding to a central identity system. This reduces the chance that former employees retain access to business applications.',
      highlights: [
        {
          title: 'Onboarding',
          description:
            'Provides new users with the identities and application access required for their responsibilities.',
        },
        {
          title: 'Role change',
          description:
            'Updates application access when a user’s responsibilities change.',
        },
        {
          title: 'Offboarding',
          description:
            'Removes or disables access when a user should no longer access organizational systems.',
        },
        {
          title: 'Lifecycle automation',
          description:
            'Automates identity and access changes across connected applications.',
        },
      ],
    },
    {
      title: 'SSO security',
      content:
        'Because an SSO identity can provide access to many applications, protecting the identity provider becomes especially important. Strong authentication, MFA, secure sessions, phishing-resistant authentication, careful token validation, monitoring, and controlled application registration are essential.',
      highlights: [
        {
          title: 'Identity provider protection',
          description:
            'Applies strong security controls to the central authentication authority.',
        },
        {
          title: 'MFA',
          description:
            'Adds additional authentication factors to reduce the impact of password compromise.',
        },
        {
          title: 'Token validation',
          description:
            'Verifies that identity and access tokens are authentic, valid, and intended for the application.',
        },
        {
          title: 'Application trust',
          description:
            'Controls which applications are permitted to rely on the identity provider.',
        },
        {
          title: 'Audit logging',
          description:
            'Records authentication, application access, configuration, and security events.',
        },
      ],
    },
    {
      title: 'SSO in real products',
      content:
        'SSO is widely used in enterprise SaaS, education platforms, healthcare systems, financial applications, developer platforms, cloud environments, collaboration tools, and internal business applications. It is especially useful when users need access to many trusted applications through one organizational identity.',
    },
    {
      title: 'SSO in production',
      content:
        'Production SSO requires secure identity-provider configuration, application registration controls, certificate or key lifecycle management, token validation, session management, MFA, monitoring, audit logging, account lifecycle integration, incident response, and tested recovery procedures.',
      highlights: [
        {
          title: 'Application registration',
          description:
            'Controls which applications are trusted by the identity provider and how they are configured.',
        },
        {
          title: 'Key lifecycle',
          description:
            'Manages signing keys, certificates, rotation, expiration, and secure replacement.',
        },
        {
          title: 'Token validation',
          description:
            'Ensures received identity or access tokens satisfy issuer, audience, signature, expiration, and other required checks.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual authentication activity and suspicious access patterns.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how compromised identities, applications, sessions, and credentials are contained and recovered.',
        },
      ],
    },
    {
      title: 'Common SSO mistakes',
      content:
        'Common mistakes include confusing authentication with authorization, accepting tokens without proper validation, failing to protect the identity provider, allowing uncontrolled application registration, ignoring session management, and assuming that logging out of one application automatically logs the user out everywhere.',
      highlights: [
        {
          title: 'Authentication vs authorization confusion',
          description:
            'Treats proof of identity as if it automatically grants permission to perform every action.',
        },
        {
          title: 'Weak token validation',
          description:
            'Accepts identity or access tokens without validating the required security properties.',
        },
        {
          title: 'Uncontrolled application registration',
          description:
            'Allows applications to establish trust without appropriate organizational review.',
        },
        {
          title: 'Weak identity provider security',
          description:
            'Fails to protect the central authentication system with appropriate controls.',
        },
        {
          title: 'Logout assumption',
          description:
            'Assumes that ending one application session automatically ends every related session.',
        },
      ],
    },
    {
      title: 'Explore SSO in EDDUU',
      content:
        'EDDUU connects Single Sign-On with Identity, Authentication, MFA, OAuth 2.0, OpenID Connect, JWT, Authorization, RBAC, ABAC, Zero Trust, TLS, and API Security.',
    },
  ],
  relatedTechnologyIds: [
    'identity',
    'authentication',
    'multi-factor-authentication',
    'oauth2',
    'openid-connect',
    'jwt',
    'authorization',
    'rbac',
    'abac',
    'zero-trust',
    'tls',
    'api-security',
  ],
}

export default singleSignOnKnowledge
