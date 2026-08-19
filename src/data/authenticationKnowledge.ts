import type { KnowledgeDefinition } from './knowledge'

export const authenticationKnowledge: KnowledgeDefinition = {
  technologyId: 'authentication',
  slug: 'authentication',
  title: 'What is Authentication?',
  summary:
    'Authentication is the process of verifying the identity of a user, device, application, or service before allowing it to interact with a system.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Authentication?',
      content:
        'Authentication is the process of answering a simple question: who are you? A system authenticates a user, device, application, or service by verifying evidence associated with that identity. Common examples include passwords, one-time codes, security keys, certificates, and biometric factors.',
    },
    {
      title: 'Why do we need Authentication?',
      content:
        'Applications need to distinguish legitimate users and services from unauthorized actors. Authentication establishes an identity before the system makes decisions about access. Without reliable authentication, a system cannot safely determine which account, session, or service is making a request.',
    },
    {
      title: 'How does Authentication work?',
      content:
        'A typical authentication process begins when a user or system presents credentials or another form of authentication evidence. The authentication system validates that evidence against a trusted identity source. If verification succeeds, the system establishes an authenticated session or issues a credential that can be used for subsequent requests.',
    },
    {
      title: 'The Authentication lifecycle',
      content:
        'Authentication can be understood as a sequence of identity-related steps from account creation through verification and session termination.',
      highlights: [
        {
          title: 'Identity',
          description:
            'Represents the user, device, application, or service that needs to be recognized.',
        },
        {
          title: 'Credential',
          description:
            'Evidence presented to prove control of an identity.',
        },
        {
          title: 'Verification',
          description:
            'Checks whether the presented authentication evidence is valid.',
        },
        {
          title: 'Session',
          description:
            'Represents the authenticated interaction after successful verification.',
        },
        {
          title: 'Token',
          description:
            'A credential that can represent authenticated or authorized access to subsequent resources.',
        },
        {
          title: 'Logout',
          description:
            'Ends or invalidates an application session according to the system’s session-management design.',
        },
      ],
    },
    {
      title: 'Authentication factors',
      content:
        'Authentication factors are categories of evidence that can be used to verify identity. Strong authentication can combine multiple independent factors so that compromising one factor does not automatically compromise the account.',
      highlights: [
        {
          title: 'Something you know',
          description:
            'Knowledge-based evidence such as a password or PIN.',
        },
        {
          title: 'Something you have',
          description:
            'A possession-based factor such as a security key, authenticator device, or trusted hardware.',
        },
        {
          title: 'Something you are',
          description:
            'A biometric characteristic such as a fingerprint or facial characteristic.',
        },
        {
          title: 'Multi-factor authentication',
          description:
            'Uses two or more independent authentication factors to strengthen identity verification.',
        },
      ],
    },
    {
      title: 'Passwords',
      content:
        'Passwords are one of the most common authentication mechanisms, but they must be handled carefully. Applications should never store user passwords as plain text. Instead, passwords should be processed using a strong password hashing function with an appropriate salt and secure configuration.',
      highlights: [
        {
          title: 'Password hashing',
          description:
            'Transforms a password into a value that can be securely stored and compared without storing the original password.',
        },
        {
          title: 'Salt',
          description:
            'A unique random value combined with a password before hashing to reduce the usefulness of precomputed attacks.',
        },
        {
          title: 'Password policy',
          description:
            'Defines requirements and security controls around password creation and management.',
        },
        {
          title: 'Credential stuffing',
          description:
            'An attack that attempts previously leaked username and password combinations against other services.',
        },
      ],
    },
    {
      title: 'Multi-factor authentication',
      content:
        'Multi-factor authentication, commonly called MFA, strengthens authentication by requiring multiple independent categories of evidence. For example, a user may provide a password and then approve a sign-in using a security key or authenticator application.',
      highlights: [
        {
          title: 'MFA',
          description:
            'Requires more than one independent authentication factor.',
        },
        {
          title: 'OTP',
          description:
            'A one-time password or code that is valid for a limited use or period.',
        },
        {
          title: 'TOTP',
          description:
            'A time-based one-time password generated from a shared secret and the current time.',
        },
        {
          title: 'Security key',
          description:
            'A hardware-backed authentication device designed to provide strong phishing-resistant authentication.',
        },
      ],
    },
    {
      title: 'Passwordless authentication',
      content:
        'Passwordless authentication allows users to authenticate without entering a traditional password. Modern approaches can use cryptographic credentials stored on a device, security keys, or other strong authenticators. The goal is to reduce password-related risks while improving the sign-in experience.',
      highlights: [
        {
          title: 'Passkey',
          description:
            'A modern public-key-based credential that can provide passwordless authentication across supported devices and services.',
        },
        {
          title: 'Public key',
          description:
            'A cryptographic key that can be shared with the authentication service and used to verify signatures.',
        },
        {
          title: 'Private key',
          description:
            'A secret cryptographic key kept by the authenticator and used to prove possession of the credential.',
        },
        {
          title: 'Phishing resistance',
          description:
            'Protection against attackers attempting to trick users into revealing reusable authentication credentials.',
        },
      ],
    },
    {
      title: 'Authentication vs Authorization',
      content:
        'Authentication and authorization answer different questions. Authentication determines who the requester is, while authorization determines what that authenticated identity is allowed to do. A user may successfully authenticate but still be denied access to a particular resource because the user does not have the required permission.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Answers: who are you?',
        },
        {
          title: 'Authorization',
          description:
            'Answers: what are you allowed to do?',
        },
        {
          title: 'Identity',
          description:
            'Represents the authenticated subject within the system.',
        },
        {
          title: 'Permission',
          description:
            'Defines an action or resource that an authenticated identity may access.',
        },
      ],
    },
    {
      title: 'Sessions',
      content:
        'After authentication succeeds, an application usually needs a way to remember that subsequent requests belong to the authenticated user. A session can be maintained using server-side session state, secure cookies, access tokens, or other mechanisms depending on the architecture.',
      highlights: [
        {
          title: 'Session ID',
          description:
            'A value that identifies an authenticated server-side session.',
        },
        {
          title: 'Secure cookie',
          description:
            'A browser cookie configured with security attributes to reduce unauthorized access and transmission risks.',
        },
        {
          title: 'Session expiration',
          description:
            'Defines how long an authenticated session remains valid without requiring renewed authentication.',
        },
        {
          title: 'Session invalidation',
          description:
            'Ends a session so that previously issued session credentials can no longer be used.',
        },
      ],
    },
    {
      title: 'Authentication tokens',
      content:
        'Token-based authentication allows a client to present a credential with API requests instead of maintaining a traditional server-side session for every request. Common token technologies include JWT-based credentials and OAuth 2.0 access tokens. Tokens must be validated and protected according to the security model of the application.',
      highlights: [
        {
          title: 'Access token',
          description:
            'A credential used to access protected resources according to granted permissions.',
        },
        {
          title: 'JWT',
          description:
            'A compact token format commonly used to represent signed claims.',
        },
        {
          title: 'Refresh token',
          description:
            'A credential that can be used by supported authorization systems to obtain a new access token.',
        },
        {
          title: 'Bearer credential',
          description:
            'A credential that grants access to whoever successfully presents it under the receiving system’s rules.',
        },
      ],
    },
    {
      title: 'Authentication protocols',
      content:
        'Different protocols and mechanisms solve different identity problems. OAuth 2.0 primarily addresses delegated authorization, while OpenID Connect adds standardized authentication and identity information. SAML is another widely used protocol for federated enterprise authentication.',
      highlights: [
        {
          title: 'OAuth 2.0',
          description:
            'An authorization framework used to delegate access to protected resources.',
        },
        {
          title: 'OpenID Connect',
          description:
            'An identity layer built on OAuth 2.0 that provides standardized authentication information.',
        },
        {
          title: 'SAML',
          description:
            'An XML-based federation protocol widely used for enterprise single sign-on.',
        },
        {
          title: 'Federation',
          description:
            'Allows one trusted identity system to authenticate users for another application or organization.',
        },
      ],
    },
    {
      title: 'Authentication security',
      content:
        'Authentication systems are security-critical because a successful compromise can give an attacker access to an account. Systems should protect credentials, use encrypted communication, limit authentication attempts, support strong authentication factors, detect suspicious activity, and provide secure account recovery.',
      highlights: [
        {
          title: 'Rate limiting',
          description:
            'Restricts repeated authentication attempts to reduce automated abuse.',
        },
        {
          title: 'Brute-force protection',
          description:
            'Uses controls such as rate limits, progressive delays, or additional verification to reduce password-guessing attacks.',
        },
        {
          title: 'Credential protection',
          description:
            'Protects passwords, tokens, keys, and other authentication secrets from unauthorized access.',
        },
        {
          title: 'TLS',
          description:
            'Protects authentication credentials and communication while they travel across networks.',
        },
        {
          title: 'Account recovery',
          description:
            'Provides a secure process for regaining access when legitimate users lose their authentication method.',
        },
      ],
    },
    {
      title: 'Authentication in distributed systems',
      content:
        'In distributed architectures, authentication is often centralized through an identity provider while individual services validate credentials and enforce authorization. This allows multiple applications and services to share a consistent identity model without each service implementing a separate password system.',
      highlights: [
        {
          title: 'Identity provider',
          description:
            'Centralizes authentication and can issue credentials for trusted applications and services.',
        },
        {
          title: 'API gateway',
          description:
            'Can perform initial credential validation before routing requests to backend services.',
        },
        {
          title: 'Service-to-service authentication',
          description:
            'Allows backend services to verify the identity of other services before communicating.',
        },
        {
          title: 'Federated identity',
          description:
            'Allows applications to trust authentication performed by an external identity provider.',
        },
      ],
    },
    {
      title: 'Authentication in real products',
      content:
        'Authentication is required in almost every product that needs to distinguish users or systems. Common examples include SaaS applications, banking platforms, education systems, healthcare applications, enterprise portals, mobile applications, developer platforms, APIs, and AI applications.',
    },
    {
      title: 'Authentication in production',
      content:
        'Production authentication requires secure credential storage, strong identity verification, session management, account recovery, monitoring, audit logging, rate limiting, fraud detection, token lifecycle management, secret rotation, and incident-response procedures. Teams should also define how authentication behaves during identity-provider outages and security incidents.',
      highlights: [
        {
          title: 'Audit logging',
          description:
            'Records important authentication events such as sign-ins, failures, credential changes, and account recovery.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual authentication patterns, failures, and suspicious activity.',
        },
        {
          title: 'Secret rotation',
          description:
            'Periodically replaces sensitive authentication credentials and cryptographic secrets.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how compromised credentials, sessions, or identity systems are contained and recovered.',
        },
        {
          title: 'Recovery',
          description:
            'Provides a secure process for restoring legitimate access after credential loss or compromise.',
        },
      ],
    },
    {
      title: 'Common Authentication mistakes',
      content:
        'Common mistakes include storing passwords in plain text, using weak password hashing, sending credentials over insecure connections, implementing authentication without authorization, keeping sessions valid indefinitely, storing tokens insecurely, allowing unrestricted login attempts, and building insecure account-recovery flows.',
      highlights: [
        {
          title: 'Plain-text passwords',
          description:
            'Stores passwords directly instead of using a secure password-hashing mechanism.',
        },
        {
          title: 'Weak password hashing',
          description:
            'Uses unsuitable or outdated hashing methods that make credential attacks easier.',
        },
        {
          title: 'No rate limiting',
          description:
            'Allows attackers to make unlimited authentication attempts.',
        },
        {
          title: 'Insecure recovery',
          description:
            'Provides account-recovery mechanisms that are easier to abuse than the normal authentication process.',
        },
        {
          title: 'Authentication without authorization',
          description:
            'Confirms identity but fails to enforce what that identity is permitted to access.',
        },
      ],
    },
    {
      title: 'Explore Authentication in EDDUU',
      content:
        'EDDUU connects Authentication with Authorization, OAuth 2.0, OpenID Connect, JWT, RBAC, SSO, Identity, API Security, TLS, Secrets Management, API Gateway, and Microservices.',
    },
  ],
  relatedTechnologyIds: [
    'authorization',
    'oauth2',
    'openid-connect',
    'jwt',
    'rbac',
    'single-sign-on',
    'identity',
    'api-security',
    'tls',
    'secrets-management',
    'api-gateway',
    'microservices',
  ],
}

export default authenticationKnowledge
