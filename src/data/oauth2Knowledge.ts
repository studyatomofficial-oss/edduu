import type { KnowledgeDefinition } from './knowledge'

export const oauth2Knowledge: KnowledgeDefinition = {
  technologyId: 'oauth2',
  slug: 'oauth2',
  title: 'What is OAuth 2.0?',
  summary:
    'OAuth 2.0 is an authorization framework that allows an application to obtain limited access to resources on behalf of a user or another system without requiring the application to handle the resource owner’s password.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is OAuth 2.0?',
      content:
        'OAuth 2.0 is an authorization framework used to delegate limited access to protected resources. Instead of giving an application a user password, the resource owner can authorize the application to obtain an access token with defined permissions. The application then uses that token when accessing protected APIs.',
    },
    {
      title: 'Why do we need OAuth 2.0?',
      content:
        'Applications often need to access resources that belong to another user or system. Sharing passwords directly creates unnecessary security risk and makes access difficult to control or revoke. OAuth 2.0 separates authorization from password handling and allows access to be limited through scopes, tokens, and expiration.',
    },
    {
      title: 'How does OAuth 2.0 work?',
      content:
        'An OAuth flow generally involves an application requesting authorization, an authorization server authenticating the resource owner and obtaining consent when required, and the authorization server issuing a token. The client then presents the access token to a resource server when requesting protected resources.',
    },
    {
      title: 'The OAuth 2.0 architecture',
      content:
        'OAuth 2.0 defines several roles that work together to delegate access to protected resources.',
      highlights: [
        {
          title: 'Resource owner',
          description:
            'The person or entity that owns or controls the protected resource.',
        },
        {
          title: 'Client',
          description:
            'The application requesting access to a protected resource.',
        },
        {
          title: 'Authorization server',
          description:
            'The server responsible for authenticating the resource owner and issuing authorization credentials such as access tokens.',
        },
        {
          title: 'Resource server',
          description:
            'The server hosting protected resources and validating access tokens presented by clients.',
        },
        {
          title: 'Access token',
          description:
            'A credential that represents authorized access to protected resources for a defined scope and lifetime.',
        },
        {
          title: 'Scope',
          description:
            'Defines the permissions that a client is requesting or has been granted.',
        },
      ],
    },
    {
      title: 'Important OAuth 2.0 concepts',
      content:
        'Understanding tokens, scopes, clients, authorization grants, and protected resources is essential for designing OAuth-based systems.',
      highlights: [
        {
          title: 'Authorization',
          description:
            'Determines what a client is allowed to access or perform.',
        },
        {
          title: 'Authentication',
          description:
            'Determines who a user or client is. OAuth primarily addresses authorization rather than replacing authentication protocols.',
        },
        {
          title: 'Access token',
          description:
            'Credential presented to a protected resource to obtain authorized access.',
        },
        {
          title: 'Refresh token',
          description:
            'Credential that can be used to obtain a new access token when supported by the authorization flow.',
        },
        {
          title: 'Scope',
          description:
            'Represents a constrained set of permissions granted to a client.',
        },
        {
          title: 'Redirect URI',
          description:
            'The registered destination to which an authorization server sends an authorization response in applicable flows.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 authorization code flow',
      content:
        'The authorization code flow is widely used for applications where a client needs delegated access on behalf of a user. The client sends the user to the authorization server, the user authenticates and grants access, and the authorization server returns an authorization code. The client then exchanges that code for tokens through a protected token endpoint.',
      highlights: [
        {
          title: 'Authorization request',
          description:
            'The client asks the authorization server to begin an authorization process with requested scopes and a registered redirect URI.',
        },
        {
          title: 'User authentication',
          description:
            'The authorization server authenticates the resource owner when necessary.',
        },
        {
          title: 'Consent',
          description:
            'The resource owner may approve the permissions requested by the client.',
        },
        {
          title: 'Authorization code',
          description:
            'A short-lived credential returned to the client before the token exchange.',
        },
        {
          title: 'Token exchange',
          description:
            'The client exchanges the authorization code for tokens at the authorization server.',
        },
      ],
    },
    {
      title: 'PKCE',
      content:
        'Proof Key for Code Exchange, commonly called PKCE, strengthens authorization code flows by binding the authorization request to the later token exchange. The client creates a secret verifier and sends a derived challenge during authorization. During the token exchange, the client proves possession of the original verifier.',
      highlights: [
        {
          title: 'Code verifier',
          description:
            'A high-entropy value generated by the client and kept until the token exchange.',
        },
        {
          title: 'Code challenge',
          description:
            'A derived value sent during the authorization request to bind the request to the later exchange.',
        },
        {
          title: 'PKCE verification',
          description:
            'The authorization server checks the verifier supplied during token exchange against the earlier challenge.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 client types',
      content:
        'OAuth clients differ based on whether they can securely keep credentials. Server-side applications can generally protect a client secret, while browser-based and native applications cannot safely assume that a secret embedded in distributed application code remains confidential.',
      highlights: [
        {
          title: 'Confidential client',
          description:
            'A client capable of securely protecting credentials such as a client secret.',
        },
        {
          title: 'Public client',
          description:
            'A client that cannot reliably keep credentials confidential, such as many browser-based or native applications.',
        },
        {
          title: 'Client ID',
          description:
            'An identifier that represents the registered OAuth client.',
        },
        {
          title: 'Client secret',
          description:
            'A credential used by confidential clients when the authorization server requires client authentication.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 grant types',
      content:
        'OAuth 2.0 defines authorization mechanisms for different client and resource-access scenarios. Modern implementations should select flows according to the application architecture and security requirements rather than using an older flow simply because it is familiar.',
      highlights: [
        {
          title: 'Authorization Code',
          description:
            'A delegated authorization flow commonly used for user-facing applications.',
        },
        {
          title: 'Client Credentials',
          description:
            'Allows a confidential client to obtain a token for its own access rather than acting on behalf of a user.',
        },
        {
          title: 'Refresh Token',
          description:
            'Allows a client to obtain a new access token when the authorization server supports refresh tokens.',
        },
        {
          title: 'Implicit flow',
          description:
            'An older browser-oriented flow that is generally avoided in modern OAuth deployments in favor of authorization code with PKCE.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 scopes',
      content:
        'Scopes allow an authorization server and resource server to limit what a token can be used for. Instead of granting an application unrestricted access, a client can request only the permissions required for its task. Well-designed scopes should be understandable, narrowly defined, and enforced by the resource server.',
      highlights: [
        {
          title: 'Read scope',
          description:
            'Allows a client to access permitted read operations.',
        },
        {
          title: 'Write scope',
          description:
            'Allows a client to perform permitted state-changing operations.',
        },
        {
          title: 'Least privilege',
          description:
            'Grants only the permissions required to complete the intended task.',
        },
        {
          title: 'Scope enforcement',
          description:
            'Ensures the resource server actually checks whether the token has permission for the requested operation.',
        },
      ],
    },
    {
      title: 'Access tokens and refresh tokens',
      content:
        'Access tokens are presented to resource servers and are normally designed to have limited lifetimes. Refresh tokens, when issued, can be used to obtain new access tokens without requiring the resource owner to repeat the full authorization interaction. Refresh tokens require strong protection because they can provide a path to continued access.',
      highlights: [
        {
          title: 'Short-lived access token',
          description:
            'Limits the useful lifetime of a token if it is exposed.',
        },
        {
          title: 'Refresh token',
          description:
            'Provides a mechanism for obtaining a new access token without repeating the full authorization flow.',
        },
        {
          title: 'Token rotation',
          description:
            'Replaces refresh tokens during use to reduce the impact of token theft and detect reuse.',
        },
        {
          title: 'Revocation',
          description:
            'Allows previously issued credentials to be invalidated when supported by the authorization system.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 vs authentication',
      content:
        'OAuth 2.0 primarily answers the question of what an application is allowed to access, not who the user is. Authentication protocols such as OpenID Connect build on OAuth 2.0 to provide standardized identity information. This distinction is important because an access token should not automatically be treated as an identity assertion.',
      highlights: [
        {
          title: 'Authorization',
          description:
            'Determines which resources or actions a client can access.',
        },
        {
          title: 'Authentication',
          description:
            'Establishes the identity of a user or system.',
        },
        {
          title: 'OpenID Connect',
          description:
            'An identity layer built on OAuth 2.0 that provides standardized authentication and identity claims.',
        },
        {
          title: 'ID token',
          description:
            'A token used by OpenID Connect to communicate authenticated identity information to the client.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 security',
      content:
        'OAuth deployments require careful protection of redirect URIs, authorization requests, tokens, client credentials, and browser interactions. Applications should use secure transport, exact redirect URI validation, PKCE where appropriate, least-privilege scopes, safe token storage, and strong state protection.',
      highlights: [
        {
          title: 'State',
          description:
            'A value used to bind an authorization response to the client session and help protect against request-forgery attacks.',
        },
        {
          title: 'PKCE',
          description:
            'Protects authorization code exchanges by proving that the client completing the exchange initiated the authorization request.',
        },
        {
          title: 'Exact redirect URI',
          description:
            'Prevents authorization responses from being redirected to an unintended destination.',
        },
        {
          title: 'Secure token storage',
          description:
            'Protects access and refresh credentials from unauthorized application or browser access.',
        },
        {
          title: 'TLS',
          description:
            'Protects OAuth communication and credentials while they travel across networks.',
        },
      ],
    },
    {
      title: 'OAuth 2.0 in real products',
      content:
        'OAuth 2.0 is commonly used when applications need delegated access to APIs, SaaS integrations, enterprise platforms, cloud services, productivity tools, and identity systems. For example, a business application may ask a user to authorize access to a third-party service and then use the resulting token to perform only the operations permitted by the granted scopes.',
    },
    {
      title: 'OAuth 2.0 in production',
      content:
        'Production OAuth systems require client registration, secure redirect URI management, token lifecycle management, scope governance, PKCE, authentication integration, authorization enforcement, logging, monitoring, revocation strategy, and careful secret management. Teams should also define what happens when tokens expire, are revoked, or are suspected to have been compromised.',
      highlights: [
        {
          title: 'Client registration',
          description:
            'Defines and controls which applications are allowed to participate in the authorization system.',
        },
        {
          title: 'Token lifecycle',
          description:
            'Manages token issuance, expiration, renewal, rotation, and revocation.',
        },
        {
          title: 'Secret management',
          description:
            'Protects confidential client credentials and signing or encryption secrets.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important authorization and token events for investigation and compliance.',
        },
        {
          title: 'Monitoring',
          description:
            'Tracks authorization failures, token errors, suspicious activity, and system health.',
        },
      ],
    },
    {
      title: 'Common OAuth 2.0 mistakes',
      content:
        'Common mistakes include treating OAuth as authentication without understanding OpenID Connect, storing tokens insecurely, using overly broad scopes, accepting arbitrary redirect URIs, skipping PKCE for applicable clients, exposing client secrets in public applications, and failing to handle token expiration or revocation correctly.',
      highlights: [
        {
          title: 'OAuth as authentication',
          description:
            'Confuses delegated authorization with establishing a standardized user identity.',
        },
        {
          title: 'Broad scopes',
          description:
            'Grants more permissions than the application actually requires.',
        },
        {
          title: 'Weak redirect validation',
          description:
            'Allows authorization responses to be sent to unintended destinations.',
        },
        {
          title: 'Missing PKCE',
          description:
            'Leaves applicable authorization code flows without an important protection against code interception.',
        },
        {
          title: 'Insecure token storage',
          description:
            'Stores credentials where unauthorized application code or users may be able to access them.',
        },
      ],
    },
    {
      title: 'Explore OAuth 2.0 in EDDUU',
      content:
        'EDDUU connects OAuth 2.0 with OpenID Connect, JWT, Authentication, Authorization, RBAC, API Security, TLS, Secrets Management, API Gateway, REST APIs, and Microservices.',
    },
  ],
  relatedTechnologyIds: [
    'openid-connect',
    'jwt',
    'authentication',
    'authorization',
    'rbac',
    'api-security',
    'tls',
    'secrets-management',
    'api-gateway',
    'rest-apis',
    'microservices',
  ],
}

export default oauth2Knowledge
