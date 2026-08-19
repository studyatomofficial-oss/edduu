import type { KnowledgeDefinition } from './knowledge'

export const jwtKnowledge: KnowledgeDefinition = {
  technologyId: 'jwt',
  slug: 'jwt',
  title: 'What is JSON Web Token (JWT)?',
  summary:
    'JSON Web Token, or JWT, is a compact token format used to securely represent claims between systems, commonly for authentication, authorization, and API access.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is JWT?',
      content:
        'JSON Web Token, commonly called JWT, is a compact format for representing claims between two parties. A JWT can be digitally signed so that a receiving system can verify that the token was issued by a trusted source and that its contents were not modified.',
    },
    {
      title: 'Why do we need JWT?',
      content:
        'Distributed applications often need a way to communicate authenticated identity or authorization information between services. JWT provides a standardized, compact representation that can travel with an HTTP request and can be validated without necessarily storing the complete session state on the receiving service.',
    },
    {
      title: 'How does JWT work?',
      content:
        'A JWT normally contains a header, a payload, and a signature. The header describes metadata such as the signing algorithm, the payload contains claims, and the signature provides integrity and authenticity when a trusted verification process is used. The receiving system validates the token before trusting its claims.',
    },
    {
      title: 'JWT structure',
      content:
        'A JWT is represented as three Base64URL-encoded parts separated by periods. These parts are the header, payload, and signature.',
      highlights: [
        {
          title: 'Header',
          description:
            'Contains token metadata such as the token type and signing algorithm.',
        },
        {
          title: 'Payload',
          description:
            'Contains claims describing the subject, issuer, expiration, permissions, or other relevant information.',
        },
        {
          title: 'Signature',
          description:
            'Provides integrity and authenticity protection when the token is correctly signed and validated.',
        },
        {
          title: 'Base64URL',
          description:
            'An encoding used to represent the JWT components in a URL-safe textual format.',
        },
      ],
    },
    {
      title: 'Important JWT concepts',
      content:
        'Several claims and security concepts are especially important when working with JWTs.',
      highlights: [
        {
          title: 'Issuer',
          description:
            'Identifies the system or authority that issued the token.',
        },
        {
          title: 'Subject',
          description:
            'Identifies the principal that the token represents.',
        },
        {
          title: 'Audience',
          description:
            'Identifies the intended recipient or recipients of the token.',
        },
        {
          title: 'Expiration',
          description:
            'Defines when the token should no longer be accepted.',
        },
        {
          title: 'Issued at',
          description:
            'Records when the token was created or issued.',
        },
        {
          title: 'Not before',
          description:
            'Defines the time before which the token should not be accepted.',
        },
      ],
    },
    {
      title: 'JWT claims',
      content:
        'Claims are statements contained in the JWT payload. Some claims are standardized while applications can also define private claims for their own requirements. Claims should contain only information that is appropriate to expose to the token consumer.',
      highlights: [
        {
          title: 'Registered claims',
          description:
            'Standardized claim names with commonly understood meanings.',
        },
        {
          title: 'Public claims',
          description:
            'Claims intended to be used across applications or systems according to agreed conventions.',
        },
        {
          title: 'Private claims',
          description:
            'Application-specific claims agreed upon by the systems using the token.',
        },
        {
          title: 'Permissions',
          description:
            'Application-specific authorization information that can be represented as claims when appropriate.',
        },
      ],
    },
    {
      title: 'JWT signing',
      content:
        'Signing protects the integrity of a JWT. The issuer creates a signature using a signing key, and the receiving system verifies that signature using the appropriate trusted key. A valid signature does not automatically mean that every claim is acceptable; the receiver must also validate issuer, audience, expiration, and other relevant conditions.',
      highlights: [
        {
          title: 'Symmetric signing',
          description:
            'Uses the same shared secret for signing and verification.',
        },
        {
          title: 'Asymmetric signing',
          description:
            'Uses a private key for signing and a corresponding public key for verification.',
        },
        {
          title: 'Signing key',
          description:
            'The cryptographic key used to create or verify the JWT signature.',
        },
        {
          title: 'Key rotation',
          description:
            'Periodically replaces signing keys while maintaining controlled verification of valid tokens.',
        },
      ],
    },
    {
      title: 'JWT encryption vs signing',
      content:
        'A signed JWT provides integrity and authenticity but does not make its payload secret. The payload can normally be decoded by anyone who possesses the token. If sensitive information needs confidentiality, encryption mechanisms such as JSON Web Encryption may be required instead of relying only on a signed JWT.',
      highlights: [
        {
          title: 'Signing',
          description:
            'Helps prove that the token was created by a trusted signer and was not modified.',
        },
        {
          title: 'Encryption',
          description:
            'Protects token contents from unauthorized readers.',
        },
        {
          title: 'JWS',
          description:
            'A standardized format for digitally signed content commonly used by JWTs.',
        },
        {
          title: 'JWE',
          description:
            'A standardized format for encrypted content when token confidentiality is required.',
        },
      ],
    },
    {
      title: 'JWT authentication',
      content:
        'JWTs are commonly used to represent authenticated sessions or credentials for APIs. After successful authentication, a server can issue a token containing appropriate claims. The client then presents the token with later requests, and the receiving service validates it before allowing access.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Establishes the identity of a user or system before a token is issued.',
        },
        {
          title: 'Bearer token',
          description:
            'A token that grants access to whoever successfully presents it according to the receiving system’s rules.',
        },
        {
          title: 'Authorization header',
          description:
            'An HTTP header commonly used to send an access token with an API request.',
        },
        {
          title: 'Token validation',
          description:
            'Checks the token’s cryptographic validity and required claims before access is granted.',
        },
      ],
    },
    {
      title: 'JWT validation',
      content:
        'A secure application should never simply decode a JWT and trust its payload. Validation should confirm the expected signing algorithm, signature, issuer, audience, expiration, and other protocol or application requirements. The trusted key source must also be controlled.',
      highlights: [
        {
          title: 'Signature validation',
          description:
            'Confirms that the token has a valid signature from a trusted issuer.',
        },
        {
          title: 'Issuer validation',
          description:
            'Confirms that the token was issued by the expected authority.',
        },
        {
          title: 'Audience validation',
          description:
            'Confirms that the token is intended for the current service or application.',
        },
        {
          title: 'Expiration validation',
          description:
            'Rejects tokens that have passed their allowed lifetime.',
        },
        {
          title: 'Algorithm validation',
          description:
            'Ensures that only explicitly permitted signing algorithms are accepted.',
        },
      ],
    },
    {
      title: 'JWT vs sessions',
      content:
        'Traditional server-side sessions commonly store session state on the server and give the client a session identifier. JWT-based designs can place some session-related information inside the token itself. JWTs can simplify certain distributed architectures, but they also make revocation and immediate session invalidation more complicated when tokens remain valid until expiration.',
      highlights: [
        {
          title: 'Server-side session',
          description:
            'Stores session state on the server while the client generally holds a session identifier.',
        },
        {
          title: 'Stateless token',
          description:
            'Allows a service to validate information from the token without retrieving the complete session from centralized session storage.',
        },
        {
          title: 'Revocation',
          description:
            'Invalidates credentials before their normal expiration when the architecture supports it.',
        },
        {
          title: 'Token lifetime',
          description:
            'Controls how long a JWT can normally remain valid.',
        },
      ],
    },
    {
      title: 'JWT and refresh tokens',
      content:
        'Applications can use short-lived access tokens together with refresh tokens to balance security and usability. A short access-token lifetime limits the impact of token exposure, while a refresh mechanism allows the client to obtain a new access token without repeatedly asking the user to authenticate.',
      highlights: [
        {
          title: 'Access token',
          description:
            'Used to access protected resources for a limited period.',
        },
        {
          title: 'Refresh token',
          description:
            'Used by supported authorization systems to obtain a new access token.',
        },
        {
          title: 'Token rotation',
          description:
            'Replaces refresh credentials during use to reduce the impact of theft and detect reuse.',
        },
        {
          title: 'Short lifetime',
          description:
            'Limits how long an exposed access token can normally be used.',
        },
      ],
    },
    {
      title: 'JWT security',
      content:
        'JWT security depends on correct key management, validation, token lifetime, storage, transport, and claim design. Tokens should not contain unnecessary sensitive information, should be protected in transit and at rest, and should be rejected when required security claims are invalid.',
      highlights: [
        {
          title: 'Key management',
          description:
            'Controls creation, storage, rotation, distribution, and retirement of signing keys.',
        },
        {
          title: 'Secure transport',
          description:
            'Protects tokens from network interception by using encrypted communication such as HTTPS.',
        },
        {
          title: 'Secure storage',
          description:
            'Reduces the risk of unauthorized access to tokens on clients and servers.',
        },
        {
          title: 'Least privilege',
          description:
            'Limits the permissions represented by a token to what the application actually requires.',
        },
        {
          title: 'Short expiration',
          description:
            'Reduces the useful lifetime of a compromised access token.',
        },
      ],
    },
    {
      title: 'JWT in microservices',
      content:
        'JWTs can be useful in distributed architectures where multiple services need to validate authentication or authorization information. A shared trust model allows services to verify tokens issued by a central identity system. However, every service must still enforce its own authorization rules and validate the token correctly.',
      highlights: [
        {
          title: 'Identity provider',
          description:
            'Issues tokens after authenticating a user or client.',
        },
        {
          title: 'API gateway',
          description:
            'Can perform initial token validation and route authenticated requests to backend services.',
        },
        {
          title: 'Resource service',
          description:
            'Validates and authorizes requests for the resources it owns.',
        },
        {
          title: 'Distributed trust',
          description:
            'Allows multiple services to recognize tokens issued by a trusted authority.',
        },
      ],
    },
    {
      title: 'JWT in real products',
      content:
        'JWTs are commonly used in API authentication, single-page applications, mobile applications, service-to-service communication, identity platforms, and distributed systems. They are particularly useful when standardized signed claims need to move between independently deployed components.',
    },
    {
      title: 'JWT in production',
      content:
        'Production JWT systems require secure key management, token validation, expiration policies, issuer and audience controls, monitoring, revocation strategy, rotation procedures, secure storage, and clear ownership of authorization decisions. Teams should also have a plan for compromised credentials and signing-key rotation.',
      highlights: [
        {
          title: 'Key rotation',
          description:
            'Changes signing keys while maintaining controlled verification of tokens issued under previous trusted keys.',
        },
        {
          title: 'Revocation strategy',
          description:
            'Defines how compromised or invalid credentials are prevented from continuing to grant access.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important token and authentication events for investigation and operational visibility.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual token failures, suspicious activity, and authentication problems.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how the team responds when tokens, secrets, or signing keys are compromised.',
        },
      ],
    },
    {
      title: 'Common JWT mistakes',
      content:
        'Common mistakes include trusting decoded payloads without signature validation, accepting arbitrary algorithms, using tokens with excessively long lifetimes, placing sensitive information in readable payloads, failing to validate issuer or audience, storing tokens insecurely, and treating JWTs as automatically equivalent to authorization.',
      highlights: [
        {
          title: 'Decode without validation',
          description:
            'Reads claims without verifying that the token is authentic and has not been modified.',
        },
        {
          title: 'Weak algorithm controls',
          description:
            'Accepts signing algorithms without explicitly restricting them to trusted choices.',
        },
        {
          title: 'Long-lived access tokens',
          description:
            'Creates a larger exposure window when a token is compromised.',
        },
        {
          title: 'Sensitive payload',
          description:
            'Places confidential information inside a payload that is not encrypted.',
        },
        {
          title: 'Missing audience check',
          description:
            'Accepts a valid token that was actually intended for a different service or application.',
        },
      ],
    },
    {
      title: 'Explore JWT in EDDUU',
      content:
        'EDDUU connects JWT with OAuth 2.0, OpenID Connect, Authentication, Authorization, API Security, RBAC, TLS, Secrets Management, API Gateway, REST APIs, and Microservices.',
    },
  ],
  relatedTechnologyIds: [
    'oauth2',
    'openid-connect',
    'authentication',
    'authorization',
    'api-security',
    'rbac',
    'tls',
    'secrets-management',
    'api-gateway',
    'rest-apis',
    'microservices',
  ],
}

export default jwtKnowledge
