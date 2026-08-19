import type { KnowledgeDefinition } from './knowledge'

export const apiSecurityKnowledge: KnowledgeDefinition = {
  technologyId: 'api-security',
  slug: 'api-security',
  title: 'What is API Security?',
  summary:
    'API Security is the practice of protecting application programming interfaces from unauthorized access, misuse, data exposure, abuse, and attacks throughout the API lifecycle.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is API Security?',
      content:
        'API Security protects APIs and the data and business capabilities exposed through them. It covers authentication, authorization, input validation, transport security, rate limiting, secrets management, monitoring, threat detection, and secure API design. The goal is not simply to hide an endpoint, but to ensure that every API request is properly authenticated, authorized, validated, controlled, and monitored.',
    },
    {
      title: 'Why do we need API Security?',
      content:
        'APIs are often the main communication layer between web applications, mobile applications, microservices, partners, and third-party systems. Because APIs expose business functionality and data, a compromised API can lead to data theft, account takeover, unauthorized actions, financial loss, or service disruption. API security provides controls around these interfaces throughout their lifecycle.',
    },
    {
      title: 'How does API Security work?',
      content:
        'A secure API request normally passes through several controls. The system identifies and authenticates the caller, evaluates authorization, validates the request, applies rate and policy controls, executes the business operation, and records appropriate security telemetry. Depending on the architecture, gateways, identity providers, application services, databases, and security platforms may participate in these decisions.',
    },
    {
      title: 'The API Security request flow',
      content:
        'A useful way to understand API security is to follow a request from the client to the protected resource.',
      highlights: [
        {
          title: 'Request',
          description:
            'A client sends an API request containing the target resource, operation, parameters, and required credentials or tokens.',
        },
        {
          title: 'Authentication',
          description:
            'The system verifies the identity or credential associated with the request.',
        },
        {
          title: 'Authorization',
          description:
            'The system determines whether the authenticated identity is allowed to perform the requested operation.',
        },
        {
          title: 'Validation',
          description:
            'The API checks that request data matches expected schemas, types, constraints, and business rules.',
        },
        {
          title: 'Execution',
          description:
            'The application performs the requested business operation within defined security boundaries.',
        },
        {
          title: 'Monitoring',
          description:
            'Security and operational telemetry records relevant activity for detection, investigation, and reliability.',
        },
      ],
    },
    {
      title: 'Important API Security concepts',
      content:
        'API security combines identity, authorization, transport protection, validation, abuse prevention, and observability.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies who or what is making the API request.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which resources and operations the authenticated caller is allowed to use.',
        },
        {
          title: 'Input validation',
          description:
            'Checks incoming data against expected schemas, formats, ranges, and business constraints.',
        },
        {
          title: 'Rate limiting',
          description:
            'Restricts request volume to reduce abuse, overload, and resource exhaustion.',
        },
        {
          title: 'API gateway',
          description:
            'A centralized entry point that can apply routing, authentication, policy, rate limiting, and observability controls.',
        },
        {
          title: 'API inventory',
          description:
            'A maintained record of APIs, endpoints, versions, owners, consumers, and security characteristics.',
        },
      ],
    },
    {
      title: 'API Authentication',
      content:
        'API authentication establishes the identity of a caller. Common mechanisms include OAuth 2.0 access tokens, API keys, signed tokens such as JWTs, client certificates, and workload identities. The appropriate mechanism depends on the client type, trust model, security requirements, and architecture.',
      highlights: [
        {
          title: 'API key',
          description:
            'A credential used to identify or authorize an API client.',
        },
        {
          title: 'OAuth 2.0',
          description:
            'An authorization framework commonly used to obtain scoped access tokens for protected APIs.',
        },
        {
          title: 'JWT',
          description:
            'A compact token format that can carry signed claims about an identity or authorization context.',
        },
        {
          title: 'mTLS',
          description:
            'Uses client and server certificates to establish stronger machine-to-machine identity.',
        },
        {
          title: 'Workload identity',
          description:
            'Represents an application or service when it communicates with another protected system.',
        },
      ],
    },
    {
      title: 'API Authorization',
      content:
        'Authentication alone does not make an API secure. Authorization determines whether an authenticated identity can access a specific resource or perform a specific operation. APIs should enforce authorization at the resource and action level rather than assuming that a valid token means unlimited access.',
      highlights: [
        {
          title: 'Resource authorization',
          description:
            'Determines whether a caller can access a particular resource or object.',
        },
        {
          title: 'Action authorization',
          description:
            'Determines whether a caller can perform a specific operation such as read, update, delete, or approve.',
        },
        {
          title: 'RBAC',
          description:
            'Uses roles to associate groups of permissions with identities.',
        },
        {
          title: 'ABAC',
          description:
            'Uses identity, resource, action, and contextual attributes to make access decisions.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the API access required for the caller to perform its intended task.',
        },
      ],
    },
    {
      title: 'Object-level authorization',
      content:
        'Object-level authorization is especially important for APIs that expose resources identified by IDs. A caller may be authenticated and allowed to use an endpoint but still must not be able to access another user’s object simply by changing an identifier in the request.',
      highlights: [
        {
          title: 'Object ID',
          description:
            'An identifier used by an API to locate a specific resource.',
        },
        {
          title: 'Object ownership',
          description:
            'The relationship between a resource and the identity or tenant allowed to access it.',
        },
        {
          title: 'IDOR',
          description:
            'A vulnerability where changing a resource identifier allows unauthorized access to another object.',
        },
        {
          title: 'Object-level authorization',
          description:
            'Checks permission for the specific resource rather than only validating endpoint-level access.',
        },
      ],
    },
    {
      title: 'API Input Validation',
      content:
        'APIs should validate all untrusted input before using it. Validation includes data types, required fields, length limits, allowed values, formats, ranges, and business constraints. Input validation reduces unexpected behavior and helps prevent injection and other classes of attacks.',
      highlights: [
        {
          title: 'Schema validation',
          description:
            'Checks whether incoming data matches the API-defined structure and data types.',
        },
        {
          title: 'Boundary validation',
          description:
            'Enforces limits such as maximum length, numeric range, and permitted values.',
        },
        {
          title: 'Business validation',
          description:
            'Ensures input makes sense according to the application’s business rules.',
        },
        {
          title: 'Untrusted input',
          description:
            'Any data supplied by a client or external system that should not automatically be trusted.',
        },
      ],
    },
    {
      title: 'API Rate Limiting',
      content:
        'Rate limiting controls how frequently a client can call an API. It helps protect availability, reduce automated abuse, control expensive operations, and prevent individual clients from consuming disproportionate resources.',
      highlights: [
        {
          title: 'Rate limit',
          description:
            'A defined maximum request volume allowed during a particular period or policy window.',
        },
        {
          title: 'Quota',
          description:
            'A broader usage allowance applied over a defined period or resource boundary.',
        },
        {
          title: 'Burst',
          description:
            'A short period where request traffic temporarily exceeds the normal sustained rate.',
        },
        {
          title: 'Throttling',
          description:
            'Slows or rejects requests when traffic exceeds defined limits.',
        },
      ],
    },
    {
      title: 'API Gateway Security',
      content:
        'An API gateway can provide a centralized enforcement point for routing and security policies. It can perform TLS termination, authentication checks, rate limiting, request filtering, logging, routing, and integration with identity systems. However, critical authorization and business security rules should not automatically be delegated entirely to the gateway.',
      highlights: [
        {
          title: 'Gateway',
          description:
            'A centralized network component that receives API traffic and applies defined policies before forwarding requests.',
        },
        {
          title: 'Policy enforcement',
          description:
            'Applies security and operational rules to incoming API requests.',
        },
        {
          title: 'TLS termination',
          description:
            'The point where encrypted TLS traffic is decrypted by an infrastructure component.',
        },
        {
          title: 'Routing',
          description:
            'Determines which backend service should receive an API request.',
        },
      ],
    },
    {
      title: 'API Transport Security',
      content:
        'APIs should use TLS to protect data while it travels between clients, gateways, and backend services. TLS provides confidentiality, integrity, and server authentication. Highly sensitive service-to-service architectures may additionally use mutual TLS for stronger machine identity.',
      highlights: [
        {
          title: 'HTTPS',
          description:
            'HTTP communication protected using TLS.',
        },
        {
          title: 'TLS',
          description:
            'Provides cryptographic protection for network communication.',
        },
        {
          title: 'mTLS',
          description:
            'Authenticates both sides of a TLS connection using certificates.',
        },
        {
          title: 'Certificate validation',
          description:
            'Verifies that the communicating service has a trusted and appropriate certificate identity.',
        },
      ],
    },
    {
      title: 'API Secrets',
      content:
        'API credentials such as API keys, client secrets, private keys, and signing keys must be protected throughout their lifecycle. They should not be hard-coded in source code, exposed through logs, or committed to source-control repositories. Dedicated secret-management systems and short-lived credentials reduce exposure risk.',
      highlights: [
        {
          title: 'API credential',
          description:
            'A secret value used by an API client to authenticate or authorize access.',
        },
        {
          title: 'Secret management',
          description:
            'Securely stores, controls, rotates, audits, and revokes sensitive credentials.',
        },
        {
          title: 'Credential rotation',
          description:
            'Replaces credentials according to defined security and lifecycle requirements.',
        },
        {
          title: 'Credential revocation',
          description:
            'Invalidates credentials that are compromised, expired, or no longer required.',
        },
      ],
    },
    {
      title: 'API Versioning and Security',
      content:
        'API versions need security governance because older versions may contain outdated authentication, authorization, validation, or business logic. Organizations should inventory active versions, define support lifecycles, monitor deprecated endpoints, and remove insecure versions when appropriate.',
      highlights: [
        {
          title: 'API version',
          description:
            'A defined iteration of an API contract and its behavior.',
        },
        {
          title: 'Deprecated endpoint',
          description:
            'An endpoint that should no longer be used but may remain temporarily available.',
        },
        {
          title: 'Version lifecycle',
          description:
            'Defines how an API version is introduced, supported, deprecated, and retired.',
        },
        {
          title: 'Legacy API',
          description:
            'An older API implementation that may contain compatibility or security challenges.',
        },
      ],
    },
    {
      title: 'API Security and OWASP',
      content:
        'OWASP provides widely used security guidance for web applications and APIs. API security teams commonly use OWASP API Security Top 10 risks as a reference for identifying common weaknesses involving authorization, authentication, resource consumption, inventory, configuration, and data exposure.',
      highlights: [
        {
          title: 'OWASP API Security Top 10',
          description:
            'A security-awareness framework highlighting important classes of API vulnerabilities and risks.',
        },
        {
          title: 'Broken authorization',
          description:
            'Occurs when an API fails to correctly enforce who can access or modify a resource or perform an action.',
        },
        {
          title: 'Broken authentication',
          description:
            'Occurs when API authentication mechanisms can be bypassed, abused, or incorrectly implemented.',
        },
        {
          title: 'API inventory',
          description:
            'Maintains visibility into active endpoints, versions, environments, and ownership.',
        },
      ],
    },
    {
      title: 'API Security Monitoring',
      content:
        'Secure APIs require observability that helps teams detect suspicious activity, abuse, failures, and authorization problems. Monitoring should capture useful security context without exposing sensitive credentials or personal data.',
      highlights: [
        {
          title: 'Security event',
          description:
            'An API activity record relevant to security detection or investigation.',
        },
        {
          title: 'Audit trail',
          description:
            'A record of important actions and security-relevant events.',
        },
        {
          title: 'Anomaly detection',
          description:
            'Identifies API behavior that differs significantly from expected patterns.',
        },
        {
          title: 'Alerting',
          description:
            'Notifies security or operations teams when defined suspicious conditions occur.',
        },
      ],
    },
    {
      title: 'API Security in microservices',
      content:
        'Microservice architectures expose many internal and external APIs. Security must therefore be applied consistently across service boundaries. Services should authenticate and authorize callers, validate requests, protect sensitive communication, and avoid blindly trusting headers or identity information supplied by upstream components.',
      highlights: [
        {
          title: 'Service-to-service authentication',
          description:
            'Allows one backend service to prove its identity to another service.',
        },
        {
          title: 'Service authorization',
          description:
            'Determines which operations one service is allowed to perform on another service.',
        },
        {
          title: 'Internal API',
          description:
            'An API intended primarily for communication between internal services or components.',
        },
        {
          title: 'Trust boundary',
          description:
            'A boundary where security assumptions change and additional validation or controls are required.',
        },
      ],
    },
    {
      title: 'API Security in multi-tenant systems',
      content:
        'Multi-tenant APIs must ensure that users and services can access only resources belonging to their permitted tenant or organizational scope. Tenant context should be derived from trusted identity information and enforced consistently at the API and data layers.',
      highlights: [
        {
          title: 'Tenant isolation',
          description:
            'Prevents one tenant from accessing another tenant’s resources or data.',
        },
        {
          title: 'Tenant context',
          description:
            'Trusted information identifying which organization or tenant a request belongs to.',
        },
        {
          title: 'Cross-tenant authorization',
          description:
            'Explicitly controls exceptional cases where an identity is allowed to operate across tenant boundaries.',
        },
        {
          title: 'Tenant-aware policy',
          description:
            'Uses tenant information when evaluating API authorization decisions.',
        },
      ],
    },
    {
      title: 'API Security in production',
      content:
        'Production API security requires an inventory of APIs, strong identity controls, resource-level authorization, TLS, input validation, rate limiting, secret management, monitoring, vulnerability management, secure versioning, incident response, and regular security testing. Security should be part of API design rather than added only after deployment.',
      highlights: [
        {
          title: 'API inventory',
          description:
            'Maintains visibility into endpoints, versions, owners, environments, and consumers.',
        },
        {
          title: 'Security testing',
          description:
            'Tests APIs for authentication, authorization, validation, configuration, and vulnerability weaknesses.',
        },
        {
          title: 'Threat modeling',
          description:
            'Identifies likely threats and security controls before or during API design.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how compromised credentials, vulnerable endpoints, and API attacks are contained and recovered.',
        },
        {
          title: 'Secure lifecycle',
          description:
            'Integrates security into API design, development, testing, deployment, operation, and retirement.',
        },
      ],
    },
    {
      title: 'Common API Security mistakes',
      content:
        'Common mistakes include relying only on authentication, failing to enforce object-level authorization, trusting client-supplied tenant identifiers, exposing excessive data, disabling TLS validation, storing API credentials in source code, having no rate limits, leaving old API versions active, and failing to maintain an API inventory.',
      highlights: [
        {
          title: 'Authentication-only security',
          description:
            'Assumes that a valid authenticated identity should automatically have broad API access.',
        },
        {
          title: 'Broken object authorization',
          description:
            'Allows callers to access resources they do not own or have permission to use.',
        },
        {
          title: 'Client-controlled tenant ID',
          description:
            'Trusts a tenant identifier supplied by the client without deriving and validating tenant context from trusted identity information.',
        },
        {
          title: 'Excessive data exposure',
          description:
            'Returns more information than the client actually needs.',
        },
        {
          title: 'No API inventory',
          description:
            'Leaves undocumented, forgotten, or legacy endpoints outside normal security governance.',
        },
      ],
    },
    {
      title: 'Explore API Security in EDDUU',
      content:
        'EDDUU connects API Security with Authentication, Authorization, OAuth 2.0, OIDC, JWT, TLS, Secrets Management, OWASP, Zero Trust, REST APIs, GraphQL, WebSockets, Webhooks, and Audit Logging.',
    },
  ],
  relatedTechnologyIds: [
    'authentication',
    'authorization',
    'oauth2',
    'openid-connect',
    'jwt',
    'tls',
    'secrets-management',
    'owasp',
    'zero-trust',
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
    'audit-logging',
  ],
}

export default apiSecurityKnowledge
