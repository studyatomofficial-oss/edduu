import type { KnowledgeDefinition } from './knowledge'

export const encryptionKnowledge: KnowledgeDefinition = {
  technologyId: 'encryption',
  slug: 'encryption',
  title: 'What is Encryption?',
  summary:
    'Encryption is the process of transforming readable information into protected data so that only authorized parties with the required cryptographic capability can recover the original information.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Encryption?',
      content:
        'Encryption is a security technique that transforms readable information, called plaintext, into an unreadable representation, called ciphertext, using a cryptographic algorithm and a key. Authorized parties can use the appropriate key to decrypt the ciphertext and recover the original information.',
    },
    {
      title: 'Why do we need Encryption?',
      content:
        'Data can be exposed while it is stored, transmitted, backed up, or processed across systems. Encryption reduces the impact of unauthorized access by making protected information difficult to understand without the required cryptographic key. It is commonly used to protect passwords and secrets indirectly through secure protocols, databases, files, backups, network communication, and sensitive business data.',
    },
    {
      title: 'How does Encryption work?',
      content:
        'A system starts with plaintext and applies an encryption algorithm together with a cryptographic key to produce ciphertext. The ciphertext can then be stored or transmitted. A legitimate recipient uses the corresponding decryption capability to recover the plaintext. The security of the system depends heavily on the strength of the cryptographic algorithm, key management, implementation, and protection of the keys.',
    },
    {
      title: 'The encryption model',
      content:
        'The basic encryption model can be understood through plaintext, an encryption algorithm, a key, ciphertext, and decryption.',
      highlights: [
        {
          title: 'Plaintext',
          description:
            'The original readable information that needs protection.',
        },
        {
          title: 'Encryption algorithm',
          description:
            'The mathematical procedure that transforms plaintext into ciphertext using a key.',
        },
        {
          title: 'Encryption key',
          description:
            'Cryptographic information used by the encryption process to protect the plaintext.',
        },
        {
          title: 'Ciphertext',
          description:
            'The transformed data produced by encryption and intended to be unreadable without the required cryptographic capability.',
        },
        {
          title: 'Decryption',
          description:
            'The process of recovering plaintext from ciphertext using the appropriate key.',
        },
        {
          title: 'Cryptographic system',
          description:
            'The complete combination of algorithms, keys, protocols, implementation, and key-management processes used to protect information.',
        },
      ],
    },
    {
      title: 'Important Encryption concepts',
      content:
        'Several cryptographic concepts are essential for understanding how encryption protects information and how production systems should manage keys.',
      highlights: [
        {
          title: 'Symmetric encryption',
          description:
            'Uses the same secret key, or a closely related secret-key mechanism, for encryption and decryption.',
        },
        {
          title: 'Asymmetric encryption',
          description:
            'Uses a mathematically related public key and private key for cryptographic operations.',
        },
        {
          title: 'Key',
          description:
            'A cryptographic value that controls an encryption or decryption operation.',
        },
        {
          title: 'Cipher',
          description:
            'An algorithm used to perform a cryptographic transformation.',
        },
        {
          title: 'Nonce',
          description:
            'A value intended to be used once in a particular cryptographic context to help provide secure operation.',
        },
        {
          title: 'Initialization Vector',
          description:
            'An additional value used by certain encryption modes to ensure secure and appropriate ciphertext generation.',
        },
      ],
    },
    {
      title: 'Symmetric encryption',
      content:
        'Symmetric encryption uses a shared secret key for encryption and decryption. It is generally efficient and is therefore commonly used for protecting large amounts of data. The major operational challenge is securely distributing, storing, rotating, and revoking the secret key.',
      highlights: [
        {
          title: 'Shared secret',
          description:
            'A secret cryptographic value known only to authorized parties that need to perform the operation.',
        },
        {
          title: 'AES',
          description:
            'A widely used symmetric encryption standard designed for efficient data protection.',
        },
        {
          title: 'Encryption mode',
          description:
            'Defines how a block cipher is applied to data and how additional values are incorporated.',
        },
        {
          title: 'Key rotation',
          description:
            'The controlled replacement of cryptographic keys according to security and operational requirements.',
        },
      ],
    },
    {
      title: 'Asymmetric encryption',
      content:
        'Asymmetric cryptography uses a key pair consisting of a public key and a private key. The public key can generally be distributed, while the private key must remain protected. Asymmetric techniques are useful for key exchange, digital signatures, identity systems, and establishing trust relationships, although they are generally more computationally expensive than symmetric encryption for bulk data protection.',
      highlights: [
        {
          title: 'Public key',
          description:
            'A key that can generally be distributed and used for selected cryptographic operations.',
        },
        {
          title: 'Private key',
          description:
            'A secret key that must be strongly protected by its owner.',
        },
        {
          title: 'RSA',
          description:
            'A widely known public-key cryptographic algorithm used for selected encryption and signature applications.',
        },
        {
          title: 'Elliptic Curve Cryptography',
          description:
            'A family of public-key cryptographic techniques based on elliptic-curve mathematics.',
        },
      ],
    },
    {
      title: 'Encryption vs hashing',
      content:
        'Encryption and hashing solve different problems. Encryption is designed so authorized parties can recover the original information through decryption. Hashing is designed to produce a one-way representation that is not intended to be reversed. Passwords should normally be protected using dedicated password-hashing algorithms rather than reversible encryption.',
      highlights: [
        {
          title: 'Encryption',
          description:
            'Protects information while preserving the ability to recover the original data with the appropriate key.',
        },
        {
          title: 'Hashing',
          description:
            'Produces a one-way representation commonly used for integrity checks and password protection.',
        },
        {
          title: 'Password hashing',
          description:
            'Uses specialized algorithms designed to make password guessing more expensive for attackers.',
        },
        {
          title: 'Reversibility',
          description:
            'Encryption is intentionally reversible with the required key, while secure hashing is not designed for reversal.',
        },
      ],
    },
    {
      title: 'Encryption vs encoding',
      content:
        'Encryption should not be confused with encoding. Encoding transforms data into another representation so that systems can store or transmit it consistently. Encoding does not provide confidentiality because the transformation is normally reversible without a secret key.',
      highlights: [
        {
          title: 'Encoding',
          description:
            'Changes data representation for compatibility, storage, or transmission and is not intended to provide secrecy.',
        },
        {
          title: 'Encryption',
          description:
            'Transforms information specifically to protect confidentiality using cryptographic controls.',
        },
        {
          title: 'Base64',
          description:
            'A common encoding scheme that represents binary data using a text-safe character set.',
        },
        {
          title: 'Confidentiality',
          description:
            'The security property that prevents unauthorized parties from understanding protected information.',
        },
      ],
    },
    {
      title: 'Encryption at rest',
      content:
        'Encryption at rest protects information stored on systems such as databases, disks, object storage, backups, and files. It helps reduce exposure when storage media or stored data is accessed without authorization. Encryption at rest must still be combined with strong access controls because an authorized application may be able to decrypt the data.',
      highlights: [
        {
          title: 'Database encryption',
          description:
            'Protects stored database information using encryption mechanisms supported by the database or surrounding infrastructure.',
        },
        {
          title: 'Disk encryption',
          description:
            'Protects data stored on physical or virtual storage volumes.',
        },
        {
          title: 'Object storage encryption',
          description:
            'Protects files and objects stored in systems such as cloud object-storage platforms.',
        },
        {
          title: 'Backup encryption',
          description:
            'Protects backup copies so that stolen or improperly accessed backups do not expose plaintext data.',
        },
      ],
    },
    {
      title: 'Encryption in transit',
      content:
        'Encryption in transit protects information while it moves between systems over a network. TLS is the most common foundation for secure web communication. Proper certificate validation, protocol configuration, key management, and secure endpoint configuration are essential for trustworthy encrypted communication.',
      highlights: [
        {
          title: 'TLS',
          description:
            'A cryptographic protocol used to protect communication between networked systems.',
        },
        {
          title: 'HTTPS',
          description:
            'HTTP communication protected using TLS.',
        },
        {
          title: 'Certificate',
          description:
            'A cryptographic identity document used to establish trust in a public-key system.',
        },
        {
          title: 'Secure channel',
          description:
            'A communication path protected against unauthorized observation or modification according to the protocol’s security guarantees.',
        },
      ],
    },
    {
      title: 'Authenticated Encryption',
      content:
        'Authenticated Encryption protects confidentiality while also providing integrity and authenticity for encrypted data. This is important because encryption alone should not be assumed to detect unauthorized modification. Authenticated encryption modes allow systems to verify that protected ciphertext has not been altered in an unacceptable way.',
      highlights: [
        {
          title: 'Confidentiality',
          description:
            'Protects the contents of information from unauthorized disclosure.',
        },
        {
          title: 'Integrity',
          description:
            'Provides assurance that protected information has not been improperly modified.',
        },
        {
          title: 'Authentication tag',
          description:
            'A cryptographic value used to verify the integrity and authenticity of protected data.',
        },
        {
          title: 'AES-GCM',
          description:
            'A widely used authenticated-encryption construction combining encryption with integrity protection.',
        },
      ],
    },
    {
      title: 'Key management',
      content:
        'Encryption is only as strong as the protection of its keys. Production systems need processes for generating, storing, distributing, rotating, revoking, backing up, and destroying cryptographic keys. Keys should not be hard-coded into application source code or casually stored in configuration files.',
      highlights: [
        {
          title: 'Key generation',
          description:
            'Creates cryptographic keys using appropriate secure random generation mechanisms.',
        },
        {
          title: 'Key storage',
          description:
            'Protects cryptographic keys from unauthorized access or disclosure.',
        },
        {
          title: 'Key rotation',
          description:
            'Replaces keys according to defined security, lifecycle, or compliance requirements.',
        },
        {
          title: 'Key revocation',
          description:
            'Marks a key as no longer trusted or permitted for specific cryptographic operations.',
        },
        {
          title: 'Key destruction',
          description:
            'Securely removes keys when they are no longer required and retention requirements permit destruction.',
        },
      ],
    },
    {
      title: 'Key Management Services',
      content:
        'Cloud and enterprise environments commonly use centralized key-management systems to control cryptographic keys. These services can provide controlled key generation, storage, rotation, access policies, auditing, and integration with databases, object storage, applications, and other infrastructure.',
      highlights: [
        {
          title: 'KMS',
          description:
            'A Key Management Service used to centrally manage cryptographic keys and related policies.',
        },
        {
          title: 'HSM',
          description:
            'A Hardware Security Module designed to protect cryptographic keys and perform sensitive cryptographic operations.',
        },
        {
          title: 'Key policy',
          description:
            'Defines which identities and systems can use or manage a cryptographic key.',
        },
        {
          title: 'Audit trail',
          description:
            'Records important key-management and cryptographic operations for security investigation and governance.',
        },
      ],
    },
    {
      title: 'Envelope encryption',
      content:
        'Envelope encryption uses one key to encrypt data and another key to protect the data-encryption key. This approach allows applications to encrypt large amounts of data efficiently while using a centralized key-management system to protect and manage the higher-level key.',
      highlights: [
        {
          title: 'Data encryption key',
          description:
            'A key used directly to encrypt application data.',
        },
        {
          title: 'Key encryption key',
          description:
            'A higher-level key used to protect data-encryption keys.',
        },
        {
          title: 'Wrapped key',
          description:
            'An encrypted representation of a data-encryption key protected by another cryptographic key.',
        },
        {
          title: 'Envelope',
          description:
            'The combination of encrypted data and the protected data-encryption key needed for controlled decryption.',
        },
      ],
    },
    {
      title: 'Encryption in databases',
      content:
        'Databases can use encryption at the storage, column, field, or application level depending on the security requirement. The right design depends on what must be protected, who should be able to decrypt it, how queries need to operate, and how keys should be managed.',
      highlights: [
        {
          title: 'Transparent encryption',
          description:
            'Protects stored database files while allowing authorized database operations to work normally.',
        },
        {
          title: 'Column encryption',
          description:
            'Protects selected database columns containing particularly sensitive information.',
        },
        {
          title: 'Application-level encryption',
          description:
            'Encrypts sensitive data inside the application before storing it in the database.',
        },
        {
          title: 'Search limitation',
          description:
            'Encryption can make operations such as searching, sorting, and indexing more difficult depending on the encryption design.',
        },
      ],
    },
    {
      title: 'Encryption in APIs and applications',
      content:
        'Applications should protect sensitive information during transport, storage, and appropriate processing stages. APIs commonly use TLS for network communication and may use application-level encryption for particularly sensitive fields. Authorization remains necessary because encryption does not automatically determine which authenticated users should be allowed to access decrypted data.',
      highlights: [
        {
          title: 'TLS',
          description:
            'Protects data while it travels between clients, APIs, and services.',
        },
        {
          title: 'Field encryption',
          description:
            'Encrypts particularly sensitive application fields before or during storage.',
        },
        {
          title: 'Authorization',
          description:
            'Determines whether an authenticated identity should be allowed to access protected information.',
        },
        {
          title: 'Decryption boundary',
          description:
            'Defines where protected information is converted back into readable form and which trusted component is allowed to perform that operation.',
        },
      ],
    },
    {
      title: 'Encryption in multi-tenant systems',
      content:
        'Multi-tenant systems may use shared or tenant-specific encryption keys depending on isolation, compliance, and operational requirements. The design must ensure that one tenant cannot obtain another tenant’s decryption capability simply because the underlying infrastructure is shared.',
      highlights: [
        {
          title: 'Tenant key',
          description:
            'A cryptographic key associated with a specific tenant or organizational boundary.',
        },
        {
          title: 'Key isolation',
          description:
            'Separates cryptographic capabilities so that unauthorized tenants cannot decrypt each other’s protected data.',
        },
        {
          title: 'Shared key',
          description:
            'A key used across multiple tenants and therefore requiring especially careful authorization and isolation controls.',
        },
        {
          title: 'Tenant-aware policy',
          description:
            'Uses tenant context when deciding which identities and services can use particular cryptographic keys.',
        },
      ],
    },
    {
      title: 'Encryption security',
      content:
        'Strong encryption can still fail when keys, algorithms, protocols, or implementations are poorly managed. Security teams should use modern, well-reviewed cryptographic algorithms, protect keys carefully, avoid custom cryptography, rotate keys appropriately, and monitor cryptographic operations.',
      highlights: [
        {
          title: 'Strong algorithm',
          description:
            'Uses a modern cryptographic construction appropriate for the required security objective.',
        },
        {
          title: 'Secure key management',
          description:
            'Protects keys throughout their complete lifecycle.',
        },
        {
          title: 'No custom cryptography',
          description:
            'Avoids inventing cryptographic algorithms or protocols instead of using established designs.',
        },
        {
          title: 'Cryptographic agility',
          description:
            'Allows systems to replace algorithms or keys when security requirements change.',
        },
        {
          title: 'Key access control',
          description:
            'Restricts which identities and services can use sensitive cryptographic keys.',
        },
      ],
    },
    {
      title: 'Encryption in real products',
      content:
        'Encryption is used in banking, healthcare, SaaS platforms, cloud infrastructure, messaging systems, databases, mobile applications, file storage, backup systems, APIs, enterprise software, and AI platforms. It protects sensitive information both when it is stored and when it moves between trusted systems.',
    },
    {
      title: 'Encryption in production',
      content:
        'Production encryption requires algorithm selection, key-management architecture, rotation policies, access controls, certificate management, backup strategy, audit logging, monitoring, disaster recovery planning, and tested key-recovery procedures. Teams must also understand which data is encrypted, where decryption occurs, and which identities can access plaintext.',
      highlights: [
        {
          title: 'Encryption inventory',
          description:
            'Identifies which data, systems, and communication paths require cryptographic protection.',
        },
        {
          title: 'Key lifecycle',
          description:
            'Manages key creation, activation, rotation, suspension, expiration, and destruction.',
        },
        {
          title: 'Certificate lifecycle',
          description:
            'Manages certificates and their associated keys throughout their operational lifetime.',
        },
        {
          title: 'Access auditing',
          description:
            'Records important attempts to use cryptographic keys or access protected information.',
        },
        {
          title: 'Recovery planning',
          description:
            'Ensures encrypted data can be recovered safely when infrastructure or key-management systems fail.',
        },
      ],
    },
    {
      title: 'Common Encryption mistakes',
      content:
        'Common mistakes include hard-coding keys in source code, using outdated cryptographic algorithms, inventing custom encryption schemes, treating encoding as encryption, encrypting passwords reversibly instead of hashing them, failing to rotate keys, and giving too many identities access to decryption capabilities.',
      highlights: [
        {
          title: 'Hard-coded keys',
          description:
            'Stores cryptographic secrets directly inside source code or application binaries.',
        },
        {
          title: 'Outdated cryptography',
          description:
            'Uses algorithms, protocols, or configurations that no longer provide an appropriate security level.',
        },
        {
          title: 'Custom encryption',
          description:
            'Uses a self-designed cryptographic construction instead of established and reviewed cryptographic standards.',
        },
        {
          title: 'Encoding mistaken for encryption',
          description:
            'Assumes that a representation such as Base64 provides confidentiality.',
        },
        {
          title: 'Excessive key access',
          description:
            'Allows more identities or services to decrypt sensitive information than necessary.',
        },
      ],
    },
    {
      title: 'Explore Encryption in EDDUU',
      content:
        'EDDUU connects Encryption with TLS, Security, Authentication, Authorization, Secrets, Identity, API Security, Zero Trust, Databases, Cloud, and Key Management.',
    },
  ],
  relatedTechnologyIds: [
    'tls',
    'security',
    'authentication',
    'authorization',
    'secrets',
    'identity',
    'api-security',
    'zero-trust',
    'postgresql',
    'cloud',
  ],
}

export default encryptionKnowledge
