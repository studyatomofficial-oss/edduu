import type { KnowledgeDefinition } from './knowledge'

export const secretsManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'secrets-management',
  slug: 'secrets-management',
  title: 'What is Secrets Management?',
  summary:
    'Secrets Management is the practice of securely storing, accessing, rotating, auditing, and revoking sensitive credentials such as passwords, API keys, tokens, certificates, and private keys.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Secrets Management?',
      content:
        'Secrets Management is the systematic practice of protecting sensitive values used by applications, services, users, and infrastructure. These values can include database passwords, API keys, access tokens, certificates, private keys, signing keys, and encryption keys. A secrets-management system controls how these values are created, stored, accessed, rotated, monitored, and revoked.',
    },
    {
      title: 'Why do we need Secrets Management?',
      content:
        'Applications need credentials to communicate with databases, APIs, cloud services, third-party platforms, and internal systems. Storing these credentials directly in source code, repositories, configuration files, container images, or shared documents can expose them to unauthorized users. Secrets Management provides centralized controls that reduce accidental exposure and improve credential lifecycle management.',
    },
    {
      title: 'How does Secrets Management work?',
      content:
        'A production application normally retrieves sensitive values from a controlled secret store instead of embedding them directly in application code. The workload authenticates using an approved identity, requests only the secrets it is authorized to use, and receives them according to an access policy. The application then uses the secret without unnecessarily exposing it through logs, source code, or user interfaces.',
    },
    {
      title: 'The Secret lifecycle',
      content:
        'Secrets should be treated as security assets with a complete lifecycle rather than permanent strings placed into configuration.',
      highlights: [
        {
          title: 'Creation',
          description:
            'Generates or establishes a secret using an appropriate secure mechanism.',
        },
        {
          title: 'Storage',
          description:
            'Protects secret material inside an approved secret-management system.',
        },
        {
          title: 'Access',
          description:
            'Allows only authorized identities or workloads to retrieve or use a secret.',
        },
        {
          title: 'Rotation',
          description:
            'Replaces an existing secret with new secret material according to policy.',
        },
        {
          title: 'Revocation',
          description:
            'Invalidates a secret when it is compromised or no longer required.',
        },
        {
          title: 'Destruction',
          description:
            'Securely removes secret material when it is no longer needed.',
        },
      ],
    },
    {
      title: 'Important Secrets Management concepts',
      content:
        'Different credentials provide different capabilities and therefore require appropriate protection and lifecycle controls.',
      highlights: [
        {
          title: 'API key',
          description:
            'A credential used by an application or client to access an API or service.',
        },
        {
          title: 'Password',
          description:
            'A credential used to authenticate a user or service to a protected system.',
        },
        {
          title: 'Access token',
          description:
            'A credential representing permission to access protected resources.',
        },
        {
          title: 'Refresh token',
          description:
            'A credential that can be exchanged for new access tokens according to an authorization system.',
        },
        {
          title: 'Private key',
          description:
            'Secret cryptographic material that must remain protected from unauthorized access.',
        },
        {
          title: 'Signing key',
          description:
            'Secret cryptographic material used to create signatures or signed credentials.',
        },
      ],
    },
    {
      title: 'Secrets vs configuration',
      content:
        'Configuration describes how an application should operate, while secrets contain sensitive values that should not normally be exposed broadly. A database hostname may be ordinary configuration, while the database password is a secret. Separating the two makes access control, deployment, auditing, and rotation easier.',
      highlights: [
        {
          title: 'Configuration',
          description:
            'Non-sensitive settings such as service URLs, feature flags, or environment names.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive information whose disclosure could enable unauthorized access or cryptographic operations.',
        },
        {
          title: 'Environment variable',
          description:
            'A runtime configuration mechanism that can contain secrets but does not automatically make them secure.',
        },
        {
          title: 'Secret store',
          description:
            'A system specifically designed to securely store and control access to sensitive values.',
        },
      ],
    },
    {
      title: 'Secrets in source code',
      content:
        'Secrets should not be hard-coded into application source code. Repositories can be copied, forked, backed up, indexed, and accessed by many people and systems. A secret committed to version control may remain available in repository history even after the visible line is removed.',
      highlights: [
        {
          title: 'Hard-coded secret',
          description:
            'A sensitive credential directly embedded inside application source code.',
        },
        {
          title: 'Git history',
          description:
            'Historical repository data that may preserve a secret after it has been removed from the current code.',
        },
        {
          title: 'Secret scanning',
          description:
            'Automated detection of patterns that may represent credentials or other sensitive values.',
        },
        {
          title: 'Credential leak',
          description:
            'Exposure of authentication or authorization material to an unauthorized party.',
        },
      ],
    },
    {
      title: 'Secret Management Systems',
      content:
        'Dedicated secret-management systems provide controlled storage and access to sensitive values. They commonly support encryption, access policies, audit logs, versioning, rotation, expiration, and integration with applications and infrastructure.',
      highlights: [
        {
          title: 'Secret vault',
          description:
            'A centralized system designed to securely store and control access to secrets.',
        },
        {
          title: 'Access policy',
          description:
            'Defines which identities or workloads can retrieve or use specific secrets.',
        },
        {
          title: 'Secret version',
          description:
            'A distinct version of a secret that supports controlled updates and rotation.',
        },
        {
          title: 'Audit log',
          description:
            'Records important secret access and management operations.',
        },
      ],
    },
    {
      title: 'Secret encryption',
      content:
        'Secret-management systems normally encrypt stored secret material so unauthorized access to underlying storage does not immediately reveal plaintext credentials. Encryption at rest is only one security layer; identity, authorization, key management, auditing, and application security are also required.',
      highlights: [
        {
          title: 'Encryption at rest',
          description:
            'Protects stored secret material from direct disclosure through underlying storage.',
        },
        {
          title: 'Encryption key',
          description:
            'Cryptographic material used to protect stored secret data.',
        },
        {
          title: 'Key Management Service',
          description:
            'A service used to manage cryptographic keys and related access policies.',
        },
        {
          title: 'Access control',
          description:
            'Restricts which identities and workloads can retrieve or manage secrets.',
        },
      ],
    },
    {
      title: 'Secret rotation',
      content:
        'Secret rotation replaces existing credentials with new ones according to a defined lifecycle. Rotation reduces the useful lifetime of compromised credentials and supports security and compliance requirements. Production rotation must be designed so applications can transition without unexpected outages.',
      highlights: [
        {
          title: 'Rotation',
          description:
            'Replaces an active secret with new secret material.',
        },
        {
          title: 'Dual credential period',
          description:
            'A controlled transition period where old and new credentials can temporarily coexist.',
        },
        {
          title: 'Automatic rotation',
          description:
            'Uses automation to generate and replace secrets without manual intervention.',
        },
        {
          title: 'Rotation schedule',
          description:
            'Defines when credentials should be replaced according to security or operational requirements.',
        },
      ],
    },
    {
      title: 'Secret revocation',
      content:
        'Revocation invalidates a credential when it is suspected to be compromised, no longer required, or no longer trusted. Effective revocation should be fast enough to reduce the potential impact of credential exposure.',
      highlights: [
        {
          title: 'Revocation',
          description:
            'Invalidates a secret so it can no longer be used for its previous purpose.',
        },
        {
          title: 'Compromise',
          description:
            'A situation where an unauthorized party may have obtained or controlled secret material.',
        },
        {
          title: 'Credential replacement',
          description:
            'Creates a new valid credential after the previous credential is revoked or retired.',
        },
        {
          title: 'Emergency rotation',
          description:
            'Rapidly replaces credentials after suspected or confirmed compromise.',
        },
      ],
    },
    {
      title: 'Secrets and application identity',
      content:
        'Applications should ideally authenticate to secret-management systems using workload identities instead of storing another long-lived master credential. This allows secret access to be tied to a specific application, service, or execution environment.',
      highlights: [
        {
          title: 'Workload identity',
          description:
            'An identity representing an application, service, workload, or machine.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the minimum secret access required by a workload.',
        },
        {
          title: 'Short-lived credential',
          description:
            'A credential designed to expire quickly and reduce the useful lifetime of stolen credentials.',
        },
        {
          title: 'Secret access policy',
          description:
            'Defines which workload identities can access specific secrets.',
        },
      ],
    },
    {
      title: 'Secrets in CI/CD',
      content:
        'CI/CD systems often need credentials for cloud platforms, package registries, deployment targets, databases, and external services. These credentials should use protected CI/CD secret mechanisms or workload identity instead of being placed directly inside pipeline definitions.',
      highlights: [
        {
          title: 'CI/CD secret',
          description:
            'A sensitive credential required by an automated build, test, or deployment workflow.',
        },
        {
          title: 'Protected variable',
          description:
            'A CI/CD value restricted from ordinary logs, users, or execution contexts.',
        },
        {
          title: 'Deployment credential',
          description:
            'A credential allowing an automated system to deploy or modify infrastructure or applications.',
        },
        {
          title: 'Ephemeral credential',
          description:
            'A temporary credential created for a limited automation task or execution period.',
        },
      ],
    },
    {
      title: 'Secrets in containers',
      content:
        'Secrets should not be baked into container images because images can be copied, cached, pushed to registries, or inspected by many systems. Production containers should receive secrets through controlled runtime mechanisms.',
      highlights: [
        {
          title: 'Container image',
          description:
            'A packaged application filesystem that should not contain permanent credentials.',
        },
        {
          title: 'Runtime secret',
          description:
            'Sensitive configuration supplied to a container when it runs.',
        },
        {
          title: 'Image scanning',
          description:
            'Checks container images for accidentally embedded credentials.',
        },
        {
          title: 'Secret injection',
          description:
            'Provides secret material to a workload at runtime without embedding it into the image.',
        },
      ],
    },
    {
      title: 'Secrets and logging',
      content:
        'Secrets should not appear in application logs, error messages, traces, URLs, analytics events, screenshots, or monitoring payloads. Logging systems often have broad access and long retention periods, making accidental credential exposure especially dangerous.',
      highlights: [
        {
          title: 'Log redaction',
          description:
            'Removes or masks sensitive values before they are written to logs.',
        },
        {
          title: 'Sensitive field',
          description:
            'A data field that should not be exposed through operational telemetry.',
        },
        {
          title: 'Credential masking',
          description:
            'Replaces secret values with safe placeholders when displaying operational information.',
        },
        {
          title: 'Secret-safe telemetry',
          description:
            'Monitoring data designed to provide operational value without exposing credentials.',
        },
      ],
    },
    {
      title: 'Secrets in APIs',
      content:
        'APIs commonly use API keys, access tokens, client credentials, certificates, or signing keys. These credentials should be transmitted only over secure channels, stored securely, scoped to the minimum required permissions, monitored, and rotated when necessary.',
      highlights: [
        {
          title: 'API key',
          description:
            'A credential used to identify or authorize an API client.',
        },
        {
          title: 'Bearer token',
          description:
            'A credential where possession generally provides the ability to use its associated authorization.',
        },
        {
          title: 'Client credential',
          description:
            'A credential representing an application or service when authenticating to another system.',
        },
        {
          title: 'Credential scope',
          description:
            'Limits what a credential can access or perform.',
        },
      ],
    },
    {
      title: 'Secrets and databases',
      content:
        'Database credentials are common application secrets. Production systems should avoid sharing one unrestricted database password across every service. Services should receive appropriately scoped credentials and use controlled rotation and access policies.',
      highlights: [
        {
          title: 'Database credential',
          description:
            'A username, password, certificate, or other credential used to access a database.',
        },
        {
          title: 'Scoped credential',
          description:
            'A credential limited to the permissions required by a specific application or workload.',
        },
        {
          title: 'Read-only credential',
          description:
            'A database credential restricted to read operations when write access is unnecessary.',
        },
        {
          title: 'Credential rotation',
          description:
            'Replaces database credentials according to security and lifecycle requirements.',
        },
      ],
    },
    {
      title: 'Secrets Management in production',
      content:
        'Production Secrets Management requires centralized policies, strong identity controls, encryption, access logging, rotation, revocation, monitoring, recovery planning, separation of duties, and tested incident-response procedures. Teams should know where each secret is stored, who can access it, why access is required, and how it can be replaced.',
      highlights: [
        {
          title: 'Secret inventory',
          description:
            'Maintains awareness of which secrets exist, where they are used, and who owns them.',
        },
        {
          title: 'Ownership',
          description:
            'Defines the team or service responsible for a secret and its lifecycle.',
        },
        {
          title: 'Access review',
          description:
            'Periodically checks whether identities still require access to particular secrets.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important secret access and lifecycle events.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how exposed credentials are contained, revoked, replaced, and investigated.',
        },
      ],
    },
    {
      title: 'Common Secrets Management mistakes',
      content:
        'Common mistakes include committing credentials to Git, storing secrets in plain-text configuration files, putting secrets into container images, logging credentials, sharing one highly privileged credential across many systems, never rotating long-lived credentials, and creating weak recovery processes.',
      highlights: [
        {
          title: 'Secrets in Git',
          description:
            'Places credentials into source-control history where they may remain accessible even after removal.',
        },
        {
          title: 'Plain-text secrets',
          description:
            'Stores sensitive values without appropriate protection or access controls.',
        },
        {
          title: 'Secrets in images',
          description:
            'Embeds credentials into container images that may be copied or distributed widely.',
        },
        {
          title: 'Secrets in logs',
          description:
            'Accidentally exposes credentials through operational telemetry or error messages.',
        },
        {
          title: 'Shared superuser credential',
          description:
            'Uses one highly privileged credential across multiple applications or teams, increasing blast radius.',
        },
      ],
    },
    {
      title: 'Explore Secrets Management in EDDUU',
      content:
        'EDDUU connects Secrets Management with Encryption, TLS, Authentication, Authorization, Identity, Zero Trust, API Security, Cloud, Docker, Kubernetes, and CI/CD.',
    },
  ],
  relatedTechnologyIds: [
    'encryption',
    'tls',
    'authentication',
    'authorization',
    'identity',
    'zero-trust',
    'api-security',
    'cloud',
    'docker',
    'kubernetes',
    'github-actions',
  ],
}

export default secretsManagementKnowledge
