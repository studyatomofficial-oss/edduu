import type { KnowledgeDefinition } from './knowledge'

export const tlsKnowledge: KnowledgeDefinition = {
  technologyId: 'tls',
  slug: 'tls',
  title: 'What is TLS?',
  summary:
    'Transport Layer Security (TLS) is a cryptographic protocol that protects communication between systems by providing confidentiality, integrity, and authentication over an untrusted network.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is TLS?',
      content:
        'Transport Layer Security, commonly called TLS, is a cryptographic protocol used to protect communication between networked systems. TLS helps prevent unauthorized parties from reading or modifying data while it travels between a client and server. It can also authenticate the server and, when configured, authenticate the client.',
    },
    {
      title: 'Why do we need TLS?',
      content:
        'Network traffic can pass through many systems that are not fully trusted. Without encryption and integrity protection, attackers may be able to observe sensitive information or modify messages in transit. TLS creates a protected communication channel so applications can exchange information more securely.',
    },
    {
      title: 'How does TLS work?',
      content:
        'TLS begins with a handshake in which the communicating systems negotiate cryptographic parameters and establish shared secrets. The server normally presents a certificate that allows the client to verify its identity. After the handshake completes, application data is transmitted through the encrypted and integrity-protected TLS connection.',
    },
    {
      title: 'The TLS connection model',
      content:
        'A TLS connection can be understood as a sequence of negotiation, authentication, key establishment, and protected data transfer.',
      highlights: [
        {
          title: 'Client',
          description:
            'The system initiating the TLS connection, such as a browser or API client.',
        },
        {
          title: 'Server',
          description:
            'The system accepting the connection and normally presenting its identity certificate.',
        },
        {
          title: 'Handshake',
          description:
            'The protocol exchange used to negotiate parameters, authenticate identities, and establish shared cryptographic secrets.',
        },
        {
          title: 'Certificate',
          description:
            'A signed digital document used to associate a public key with an identity.',
        },
        {
          title: 'Session keys',
          description:
            'Cryptographic keys established for protecting application data during the connection.',
        },
        {
          title: 'Encrypted channel',
          description:
            'The protected communication path used after the TLS handshake has established the required cryptographic state.',
        },
      ],
    },
    {
      title: 'Important TLS concepts',
      content:
        'Understanding certificates, keys, cipher suites, protocol versions, and the certificate authority system is essential for working with TLS.',
      highlights: [
        {
          title: 'Certificate',
          description:
            'Binds an identity to a public key and is signed by a trusted certificate authority or another trusted issuer.',
        },
        {
          title: 'Public key',
          description:
            'A cryptographic key that can be distributed and is associated with the certificate identity.',
        },
        {
          title: 'Private key',
          description:
            'A secret cryptographic key that must remain protected by the certificate owner.',
        },
        {
          title: 'Certificate Authority',
          description:
            'A trusted entity that issues or signs certificates used to establish identity trust.',
        },
        {
          title: 'Cipher suite',
          description:
            'A defined combination of cryptographic algorithms and mechanisms used by a TLS connection.',
        },
        {
          title: 'Protocol version',
          description:
            'Defines the TLS protocol behavior and cryptographic capabilities available during communication.',
        },
      ],
    },
    {
      title: 'TLS handshake',
      content:
        'The TLS handshake establishes the cryptographic context used by the connection. The client and server negotiate supported protocol parameters, authenticate the server through its certificate, perform key establishment, and derive secrets used to protect subsequent application traffic.',
      highlights: [
        {
          title: 'ClientHello',
          description:
            'The client begins negotiation by sending supported TLS capabilities and connection parameters.',
        },
        {
          title: 'ServerHello',
          description:
            'The server selects compatible parameters and continues the handshake.',
        },
        {
          title: 'Certificate',
          description:
            'The server provides a certificate that the client can validate against its trust configuration.',
        },
        {
          title: 'Key establishment',
          description:
            'The participants establish shared cryptographic secrets without sending the final session key directly over the network.',
        },
        {
          title: 'Finished',
          description:
            'The handshake concludes after both sides verify the negotiated cryptographic state.',
        },
      ],
    },
    {
      title: 'TLS certificates',
      content:
        'TLS certificates are central to server authentication. A certificate contains identity information and a public key and is signed by a certificate authority or another trusted issuer. Clients validate the certificate chain, hostname, validity period, and other required properties before trusting the connection.',
      highlights: [
        {
          title: 'Domain name',
          description:
            'The hostname or identity for which the certificate is valid.',
        },
        {
          title: 'Certificate chain',
          description:
            'The sequence of certificates connecting the server certificate to a trusted root.',
        },
        {
          title: 'Root CA',
          description:
            'A trusted certificate authority certificate included in the client or operating system trust store.',
        },
        {
          title: 'Intermediate CA',
          description:
            'A certificate authority that issues end-entity certificates while chaining back to a trusted root.',
        },
        {
          title: 'Certificate expiration',
          description:
            'The point after which a certificate is no longer valid and must normally be replaced.',
        },
      ],
    },
    {
      title: 'Certificate validation',
      content:
        'A TLS client should not simply accept any certificate. It validates the certificate chain, checks that the certificate is currently valid, verifies that the requested hostname matches the certificate identity, and confirms that the issuing chain is trusted according to the client configuration.',
      highlights: [
        {
          title: 'Hostname validation',
          description:
            'Checks that the certificate identifies the server hostname the client intended to reach.',
        },
        {
          title: 'Chain validation',
          description:
            'Verifies that the certificate connects to a trusted certificate authority.',
        },
        {
          title: 'Validity period',
          description:
            'Checks that the certificate is currently within its allowed validity period.',
        },
        {
          title: 'Trust store',
          description:
            'Contains trusted certificate authority information used by clients to validate certificate chains.',
        },
      ],
    },
    {
      title: 'TLS versions',
      content:
        'TLS has evolved through multiple protocol versions. Modern systems should use currently supported versions and avoid obsolete protocols and configurations. TLS 1.3 provides a simplified handshake and modern cryptographic design compared with older protocol generations.',
      highlights: [
        {
          title: 'TLS 1.3',
          description:
            'A modern TLS protocol version designed with a streamlined handshake and contemporary cryptographic mechanisms.',
        },
        {
          title: 'TLS 1.2',
          description:
            'A widely deployed earlier TLS version that remains supported by many systems when securely configured.',
        },
        {
          title: 'Deprecated versions',
          description:
            'Older protocol versions that should generally not be enabled in modern production systems.',
        },
        {
          title: 'Protocol negotiation',
          description:
            'Allows the client and server to determine a mutually supported TLS version.',
        },
      ],
    },
    {
      title: 'TLS and HTTPS',
      content:
        'HTTPS is HTTP carried over a TLS-protected connection. TLS provides the cryptographic security layer while HTTP defines the application-level request and response protocol. When a browser connects to an HTTPS website, TLS helps protect the HTTP communication from network-level observation and modification.',
      highlights: [
        {
          title: 'HTTP',
          description:
            'The application protocol used for web requests and responses.',
        },
        {
          title: 'HTTPS',
          description:
            'HTTP communication protected using TLS.',
        },
        {
          title: 'Port 443',
          description:
            'The conventional network port associated with HTTPS traffic.',
        },
        {
          title: 'Secure transport',
          description:
            'Provides protected network communication underneath the application protocol.',
        },
      ],
    },
    {
      title: 'TLS and APIs',
      content:
        'Modern APIs should normally use TLS to protect communication between clients, gateways, services, and external integrations. TLS prevents sensitive API credentials, request data, and responses from being exposed in transit. Internal service-to-service communication can also use TLS, especially in zero-trust or highly sensitive environments.',
      highlights: [
        {
          title: 'API endpoint',
          description:
            'A network-accessible API destination that should use protected transport for sensitive communication.',
        },
        {
          title: 'API client',
          description:
            'A system that establishes a TLS connection to an API service.',
        },
        {
          title: 'Service-to-service TLS',
          description:
            'Uses TLS to protect communication between backend services.',
        },
        {
          title: 'Certificate validation',
          description:
            'Ensures an API client communicates with the intended trusted service.',
        },
      ],
    },
    {
      title: 'Mutual TLS',
      content:
        'Mutual TLS, commonly called mTLS, extends TLS authentication so that both the server and client present certificates. This provides stronger machine-to-machine identity and is frequently used for service-to-service communication, internal APIs, zero-trust architectures, and sensitive enterprise systems.',
      highlights: [
        {
          title: 'mTLS',
          description:
            'A TLS configuration in which both client and server authenticate using certificates.',
        },
        {
          title: 'Client certificate',
          description:
            'A certificate presented by the client to prove its machine or application identity.',
        },
        {
          title: 'Server certificate',
          description:
            'A certificate presented by the server to prove its identity to the client.',
        },
        {
          title: 'Machine identity',
          description:
            'A cryptographically verifiable identity associated with a service, workload, or device.',
        },
      ],
    },
    {
      title: 'TLS and encryption',
      content:
        'TLS uses cryptography to protect data in transit, but TLS is more than simple encryption. A secure TLS connection also provides integrity protection and server authentication. The combination prevents attackers from easily reading or modifying traffic and helps clients verify that they are communicating with the intended server.',
      highlights: [
        {
          title: 'Confidentiality',
          description:
            'Prevents unauthorized parties from reading protected network traffic.',
        },
        {
          title: 'Integrity',
          description:
            'Helps detect unauthorized modification of protected communication.',
        },
        {
          title: 'Authentication',
          description:
            'Allows the client to verify the identity of the server through certificates and trust relationships.',
        },
        {
          title: 'Key establishment',
          description:
            'Creates shared cryptographic secrets used to protect application traffic.',
        },
      ],
    },
    {
      title: 'TLS and encryption keys',
      content:
        'TLS uses asymmetric cryptography and certificates for authentication and key establishment, then normally uses efficient symmetric cryptography to protect application data. This combination provides the security benefits of public-key cryptography without requiring expensive asymmetric operations for every piece of application data.',
      highlights: [
        {
          title: 'Asymmetric cryptography',
          description:
            'Supports identity verification and secure key-establishment mechanisms.',
        },
        {
          title: 'Symmetric cryptography',
          description:
            'Efficiently protects the bulk application data exchanged after the handshake.',
        },
        {
          title: 'Ephemeral keys',
          description:
            'Temporary key material used to establish session-specific cryptographic secrets.',
        },
        {
          title: 'Forward secrecy',
          description:
            'Helps prevent compromise of a long-term private key from revealing previously captured session traffic when suitable ephemeral key exchange is used.',
        },
      ],
    },
    {
      title: 'TLS in enterprise systems',
      content:
        'Enterprise environments use TLS for employee applications, APIs, databases, service-to-service communication, cloud infrastructure, remote access, and integrations with external partners. Large environments need centralized certificate lifecycle management because expired or incorrectly configured certificates can cause widespread outages.',
      highlights: [
        {
          title: 'Certificate management',
          description:
            'Controls certificate issuance, deployment, renewal, rotation, and revocation.',
        },
        {
          title: 'Certificate authority',
          description:
            'Provides trusted certificate issuance for organizational systems and services.',
        },
        {
          title: 'Internal PKI',
          description:
            'A private public-key infrastructure used to issue and manage certificates within an organization.',
        },
        {
          title: 'Certificate inventory',
          description:
            'Tracks certificates, their owners, expiration dates, and deployment locations.',
        },
      ],
    },
    {
      title: 'TLS in cloud infrastructure',
      content:
        'Cloud platforms commonly terminate TLS at load balancers, gateways, ingress controllers, CDNs, or application servers. Teams must decide where TLS terminates and whether traffic between internal components should be encrypted again. Sensitive architectures may use end-to-end or service-to-service TLS rather than relying only on edge encryption.',
      highlights: [
        {
          title: 'TLS termination',
          description:
            'The point where an infrastructure component decrypts incoming TLS traffic.',
        },
        {
          title: 'Load balancer',
          description:
            'A component that can accept TLS connections and distribute requests to backend services.',
        },
        {
          title: 'Ingress',
          description:
            'A component that manages external access into application services, often including TLS configuration.',
        },
        {
          title: 'End-to-end TLS',
          description:
            'Maintains TLS protection across multiple network segments rather than stopping protection at the first infrastructure boundary.',
        },
      ],
    },
    {
      title: 'TLS security',
      content:
        'TLS security depends on more than enabling HTTPS. Production systems must use secure protocol versions and cipher configurations, validate certificates correctly, protect private keys, monitor certificate expiration, disable insecure legacy settings, and test configuration changes before deployment.',
      highlights: [
        {
          title: 'Private key protection',
          description:
            'Prevents unauthorized access to the private key associated with a TLS certificate.',
        },
        {
          title: 'Secure configuration',
          description:
            'Uses supported protocol versions, appropriate cryptographic algorithms, and safe server settings.',
        },
        {
          title: 'Certificate monitoring',
          description:
            'Tracks certificate validity and warns teams before certificates expire.',
        },
        {
          title: 'Certificate rotation',
          description:
            'Replaces certificates and associated key material according to lifecycle requirements.',
        },
        {
          title: 'Configuration testing',
          description:
            'Verifies that TLS changes do not introduce security weaknesses or service outages.',
        },
      ],
    },
    {
      title: 'TLS in real products',
      content:
        'TLS is used by websites, mobile applications, APIs, cloud services, banking systems, SaaS platforms, developer tools, messaging systems, enterprise applications, databases, and internal service networks. Any application that communicates sensitive information across a network can benefit from correctly configured TLS.',
    },
    {
      title: 'TLS in production',
      content:
        'Production TLS requires certificate lifecycle management, private-key protection, protocol configuration, monitoring, renewal automation, trust-store management, incident response, and testing. Teams should know where TLS terminates, which services communicate over encrypted channels, who owns certificates, and what happens when a certificate or private key is compromised.',
      highlights: [
        {
          title: 'Renewal automation',
          description:
            'Automatically renews certificates before expiration to reduce avoidable outages.',
        },
        {
          title: 'Certificate ownership',
          description:
            'Defines which team or system is responsible for each certificate and its lifecycle.',
        },
        {
          title: 'Expiration monitoring',
          description:
            'Detects certificates approaching expiration before they cause production failures.',
        },
        {
          title: 'Private-key rotation',
          description:
            'Replaces private keys according to security and operational requirements.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how compromised certificates or private keys are revoked and replaced.',
        },
      ],
    },
    {
      title: 'Common TLS mistakes',
      content:
        'Common mistakes include disabling certificate validation, using expired certificates, allowing obsolete TLS versions, failing to protect private keys, forgetting internal service communication, hard-coding certificate assumptions, and having no monitoring or automated renewal process.',
      highlights: [
        {
          title: 'Disabled certificate validation',
          description:
            'Allows clients to accept untrusted or incorrect server identities.',
        },
        {
          title: 'Expired certificates',
          description:
            'Cause clients to reject connections when the certificate is no longer valid.',
        },
        {
          title: 'Obsolete protocols',
          description:
            'Expose systems to outdated cryptographic mechanisms and known weaknesses.',
        },
        {
          title: 'Unprotected private keys',
          description:
            'Allows attackers who obtain the key to impersonate the associated service.',
        },
        {
          title: 'No renewal monitoring',
          description:
            'Allows certificate expiration to become an unexpected production outage.',
        },
      ],
    },
    {
      title: 'Explore TLS in EDDUU',
      content:
        'EDDUU connects TLS with Encryption, Security, Authentication, Identity, Zero Trust, API Security, HTTPS, certificates, cloud infrastructure, and service-to-service communication.',
    },
  ],
  relatedTechnologyIds: [
    'encryption',
    'security',
    'authentication',
    'identity',
    'zero-trust',
    'api-security',
    'cloud',
    'websockets',
    'rest-apis',
  ],
}

export default tlsKnowledge
