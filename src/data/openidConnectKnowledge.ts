import type { KnowledgeDefinition } from './knowledge'

export const openidConnectKnowledge: KnowledgeDefinition = {
  technologyId: 'openid-connect',
  slug: 'openid-connect',
  title: 'What is OpenID Connect (OIDC)?',
  summary:
    'OpenID Connect is an identity layer built on top of OAuth 2.0 that allows applications to authenticate users and receive standardized identity information.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is OpenID Connect?',
      content:
        'OpenID Connect, commonly called OIDC, is an authentication protocol built on top of OAuth 2.0. OAuth 2.0 primarily provides authorization, while OpenID Connect adds standardized authentication and identity information. It allows an application to verify who a user is and obtain information about that authenticated identity.',
    },
    {
      title: 'Why do we need OpenID Connect?',
      content:
        'Modern applications often need users to sign in without implementing their own password system. An identity provider can authenticate the user and provide standardized identity information to the application. OpenID Connect makes this interaction interoperable by defining standard concepts such as the ID token, user information endpoint, scopes, and claims.',
    },
    {
      title: 'How does OpenID Connect work?',
      content:
        'An application redirects the user to an OpenID Provider for authentication. After the user successfully authenticates, the authorization server returns an authorization response. In the authorization code flow, the application exchanges the authorization code for tokens. The resulting ID token contains identity claims that allow the application to understand the authenticated user.',
    },
    {
      title: 'The OpenID Connect architecture',
      content:
        'OpenID Connect introduces identity concepts on top of the OAuth 2.0 architecture.',
      highlights: [
        {
          title: 'End user',
          description:
            'The person whose identity is being authenticated.',
        },
        {
          title: 'Relying Party',
          description:
            'The application that relies on OpenID Connect to authenticate the user.',
        },
        {
          title: 'OpenID Provider',
          description:
            'The identity service that authenticates the user and issues identity and authorization tokens.',
        },
        {
          title: 'ID token',
          description:
            'A signed token containing standardized claims about the authenticated user and authentication event.',
        },
        {
          title: 'UserInfo endpoint',
          description:
            'An endpoint that can provide additional claims about the authenticated user using an access token.',
        },
        {
          title: 'Claims',
          description:
            'Pieces of information about an authenticated user or authentication event.',
        },
      ],
    },
    {
      title: 'Important OpenID Connect concepts',
      content:
        'Several concepts are essential for understanding how OIDC-based authentication works.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Establishes the identity of the user.',
        },
        {
          title: 'Authorization',
          description:
            'Determines what a client is allowed to access or perform.',
        },
        {
          title: 'ID token',
          description:
            'Provides signed identity information to the relying party.',
        },
        {
          title: 'Access token',
          description:
            'Allows the client to access protected resources according to the granted authorization.',
        },
        {
          title: 'Claim',
          description:
            'A statement about the user or authentication context.',
        },
        {
          title: 'Issuer',
          description:
            'Identifies the OpenID Provider that issued the token.',
        },
      ],
    },
    {
      title: 'ID tokens',
      content:
        'The ID token is one of the defining features of OpenID Connect. It is normally a JSON Web Token containing claims about the authenticated user and authentication event. The relying party should validate the token before trusting its contents, including checking its issuer, audience, signature, expiration, and other protocol requirements.',
      highlights: [
        {
          title: 'Subject',
          description:
            'A stable identifier representing the authenticated user within the issuer context.',
        },
        {
          title: 'Issuer',
          description:
            'Identifies the OpenID Provider that issued the ID token.',
        },
        {
          title: 'Audience',
          description:
            'Identifies the intended relying party or client for the token.',
        },
        {
          title: 'Expiration',
          description:
            'Defines when the ID token should no longer be accepted.',
        },
        {
          title: 'Issued at',
          description:
            'Records when the token was issued.',
        },
        {
          title: 'Nonce',
          description:
            'A value used to bind the authentication response to the initiating client session and help prevent replay attacks.',
        },
      ],
    },
    {
      title: 'OpenID Connect authorization code flow',
      content:
        'The authorization code flow is commonly used for secure OIDC authentication. The application sends the user to the OpenID Provider, the user authenticates, and the provider returns an authorization code to the registered redirect URI. The client then exchanges the code for tokens. When PKCE is used, the exchange also proves that the client that initiated the request is the client completing it.',
      highlights: [
        {
          title: 'Authentication request',
          description:
            'The relying party starts an OIDC authorization request with the required parameters and scopes.',
        },
        {
          title: 'User authentication',
          description:
            'The OpenID Provider authenticates the user.',
        },
        {
          title: 'Authorization code',
          description:
            'A short-lived code returned before the token exchange.',
        },
        {
          title: 'Token endpoint',
          description:
            'The endpoint where the authorization code is exchanged for tokens.',
        },
        {
          title: 'ID token validation',
          description:
            'The relying party validates the received identity token before trusting its claims.',
        },
      ],
    },
    {
      title: 'OIDC scopes',
      content:
        'OpenID Connect defines scopes that allow a client to request identity-related information. The openid scope is fundamental to an OIDC authentication request. Additional scopes such as profile, email, and address can be used to request corresponding categories of user claims when supported by the provider.',
      highlights: [
        {
          title: 'openid',
          description:
            'Signals that the request is an OpenID Connect authentication request.',
        },
        {
          title: 'profile',
          description:
            'Requests access to standard profile-related claims when supported.',
        },
        {
          title: 'email',
          description:
            'Requests email-related claims when supported by the provider.',
        },
        {
          title: 'address',
          description:
            'Requests address-related claims when supported by the provider.',
        },
      ],
    },
    {
      title: 'OIDC claims',
      content:
        'Claims are statements about an authenticated user or the authentication event. Some claims are standardized by OpenID Connect, while providers may also expose additional claims. Applications should rely on stable identifiers and clearly understand which claims are guaranteed by the identity provider.',
      highlights: [
        {
          title: 'sub',
          description:
            'The subject identifier for the authenticated user.',
        },
        {
          title: 'name',
          description:
            'The user’s display or full name when provided.',
        },
        {
          title: 'email',
          description:
            'The user’s email address when provided and permitted.',
        },
        {
          title: 'email_verified',
          description:
            'Indicates whether the provider has verified the email claim.',
        },
        {
          title: 'preferred_username',
          description:
            'A preferred username or display identifier when supported.',
        },
      ],
    },
    {
      title: 'OIDC discovery',
      content:
        'OpenID Connect providers can publish metadata describing their endpoints and capabilities through a discovery document. Applications can use this metadata to locate authorization, token, user information, and key endpoints rather than hard-coding every endpoint independently.',
      highlights: [
        {
          title: 'Discovery document',
          description:
            'A standardized metadata document describing an OpenID Provider’s configuration.',
        },
        {
          title: 'Authorization endpoint',
          description:
            'The endpoint where users are sent to authenticate and authorize the client.',
        },
        {
          title: 'Token endpoint',
          description:
            'The endpoint used to exchange authorization credentials for tokens.',
        },
        {
          title: 'JWKS endpoint',
          description:
            'Provides public keys that can be used to verify signed tokens.',
        },
        {
          title: 'UserInfo endpoint',
          description:
            'Provides additional authenticated user claims when supported.',
        },
      ],
    },
    {
      title: 'OIDC token validation',
      content:
        'An application must validate identity tokens before trusting them. Validation normally includes checking the token signature, issuer, audience, expiration, and relevant protocol-specific values such as nonce. The application should use the provider’s trusted signing keys and should not simply decode a JWT and assume that the claims are authentic.',
      highlights: [
        {
          title: 'Signature validation',
          description:
            'Confirms that the token was signed by a trusted issuer using an expected signing key.',
        },
        {
          title: 'Issuer validation',
          description:
            'Confirms that the token came from the expected OpenID Provider.',
        },
        {
          title: 'Audience validation',
          description:
            'Confirms that the token was intended for the current application.',
        },
        {
          title: 'Expiration validation',
          description:
            'Ensures that an expired identity token is not accepted.',
        },
        {
          title: 'Nonce validation',
          description:
            'Helps confirm that the authentication response corresponds to the client session that initiated it.',
        },
      ],
    },
    {
      title: 'OIDC and JWT',
      content:
        'OpenID Connect commonly represents the ID token as a JSON Web Token. JWT provides the token format, while OpenID Connect defines what the identity token means and how it should be used. Therefore, knowing how to decode a JWT is not enough; an application must validate its security and protocol claims before trusting it.',
      highlights: [
        {
          title: 'JWT',
          description:
            'A token format commonly used to represent signed claims.',
        },
        {
          title: 'JWS',
          description:
            'A signing format commonly used to provide integrity and authenticity for JWTs.',
        },
        {
          title: 'JWKS',
          description:
            'A collection of public keys published by an issuer for token signature verification.',
        },
        {
          title: 'Claims',
          description:
            'Structured statements contained within the token payload.',
        },
      ],
    },
    {
      title: 'OIDC vs OAuth 2.0',
      content:
        'OAuth 2.0 is primarily an authorization framework, while OpenID Connect adds an authentication and identity layer. OAuth can allow a client to obtain permission to access an API, but it does not by itself define a standardized identity token describing who authenticated. OIDC adds those identity semantics.',
      highlights: [
        {
          title: 'OAuth 2.0',
          description:
            'Primarily defines delegated authorization and access to protected resources.',
        },
        {
          title: 'OpenID Connect',
          description:
            'Adds standardized authentication and identity information on top of OAuth 2.0.',
        },
        {
          title: 'Access token',
          description:
            'Used to access protected resources according to authorization.',
        },
        {
          title: 'ID token',
          description:
            'Used by the relying party to understand the authenticated identity and authentication event.',
        },
      ],
    },
    {
      title: 'OIDC and single sign-on',
      content:
        'OIDC can support single sign-on experiences when multiple applications trust the same identity provider. A user may authenticate with the identity provider once and then access multiple relying-party applications according to their permissions and session state. The applications still need to validate tokens and enforce their own authorization rules.',
    },
    {
      title: 'OIDC security',
      content:
        'OIDC authentication requires careful protection of redirect URIs, authorization requests, tokens, client sessions, and signing keys. Applications should use secure transport, authorization code with PKCE where appropriate, exact redirect URI validation, nonce validation, secure token handling, and trusted issuer configuration.',
      highlights: [
        {
          title: 'PKCE',
          description:
            'Protects authorization code exchanges by binding the exchange to the client that initiated the authorization request.',
        },
        {
          title: 'Nonce',
          description:
            'Helps prevent replay and response-mix-up attacks by binding an authentication response to a client session.',
        },
        {
          title: 'Redirect URI validation',
          description:
            'Ensures authentication responses are sent only to approved application destinations.',
        },
        {
          title: 'Trusted issuer',
          description:
            'Restricts accepted identity tokens to an explicitly trusted OpenID Provider.',
        },
        {
          title: 'Secure cookies',
          description:
            'Can protect application sessions when browser-based applications use secure server-managed sessions.',
        },
      ],
    },
    {
      title: 'OIDC in real products',
      content:
        'OpenID Connect is commonly used for enterprise login, SaaS applications, customer identity systems, mobile applications, internal platforms, developer portals, and applications that need federated authentication. Organizations can centralize authentication with an identity provider while individual applications continue to control application-specific authorization.',
    },
    {
      title: 'OIDC in production',
      content:
        'Production OIDC systems require reliable identity-provider configuration, client registration, secure redirect URI management, token validation, signing-key rotation, session management, authorization integration, monitoring, audit logging, and failure handling. Teams should also plan for identity-provider outages, expired credentials, revoked sessions, and changes to provider configuration.',
      highlights: [
        {
          title: 'Key rotation',
          description:
            'Changes signing keys periodically while allowing applications to continue validating legitimate tokens.',
        },
        {
          title: 'Session management',
          description:
            'Controls how authenticated application sessions are created, refreshed, expired, and terminated.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important authentication and authorization events for investigation and compliance.',
        },
        {
          title: 'Provider availability',
          description:
            'Plans for authentication failures or temporary unavailability of the identity provider.',
        },
        {
          title: 'Configuration management',
          description:
            'Controls issuer, client, redirect URI, scope, and endpoint configuration safely across environments.',
        },
      ],
    },
    {
      title: 'Common OpenID Connect mistakes',
      content:
        'Common mistakes include treating an ID token as an API access token, accepting tokens without validating the issuer or audience, skipping nonce validation, allowing arbitrary redirect URIs, trusting decoded JWT claims without signature validation, storing credentials insecurely, and confusing authentication with authorization.',
      highlights: [
        {
          title: 'ID token as access token',
          description:
            'Uses an identity token to access an API when the API expects an access token.',
        },
        {
          title: 'No issuer validation',
          description:
            'Accepts identity tokens without confirming that they were issued by the trusted provider.',
        },
        {
          title: 'No audience validation',
          description:
            'Accepts a token that was issued for a different application.',
        },
        {
          title: 'Decoded but not validated',
          description:
            'Reads JWT claims without verifying the token signature and required protocol claims.',
        },
        {
          title: 'Authentication without authorization',
          description:
            'Successfully identifies a user but fails to determine what that user is allowed to do.',
        },
      ],
    },
    {
      title: 'Explore OpenID Connect in EDDUU',
      content:
        'EDDUU connects OpenID Connect with OAuth 2.0, JWT, Authentication, Authorization, Single Sign-On, RBAC, Identity, TLS, Secrets Management, API Security, and API Gateway.',
    },
  ],
  relatedTechnologyIds: [
    'oauth2',
    'jwt',
    'authentication',
    'authorization',
    'single-sign-on',
    'rbac',
    'identity',
    'tls',
    'secrets-management',
    'api-security',
    'api-gateway',
  ],
}

export default openidConnectKnowledge
