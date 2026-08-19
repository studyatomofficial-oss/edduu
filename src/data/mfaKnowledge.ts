import type { KnowledgeDefinition } from './knowledge'

export const mfaKnowledge: KnowledgeDefinition = {
  technologyId: 'multi-factor-authentication',
  slug: 'multi-factor-authentication',
  title: 'What is Multi-Factor Authentication (MFA)?',
  summary:
    'Multi-Factor Authentication strengthens identity verification by requiring two or more independent authentication factors before access is granted.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is Multi-Factor Authentication?',
      content:
        'Multi-Factor Authentication, commonly called MFA, is an authentication approach that requires a user to provide two or more independent types of evidence before access is granted. The goal is to make account compromise harder because stealing one authentication factor is not enough to complete the login.',
    },
    {
      title: 'Why do we need MFA?',
      content:
        'Passwords can be stolen through phishing, credential leaks, malware, reuse, or brute-force attacks. MFA adds another layer of protection so that a compromised password alone does not automatically provide access to an account. This is especially important for administrator accounts, financial systems, enterprise applications, and sensitive data.',
    },
    {
      title: 'How does MFA work?',
      content:
        'During authentication, the system first verifies one factor and then requests one or more additional factors. The authentication succeeds only when the required factors are successfully verified. Depending on the implementation, the second factor may be a code, security key, authenticator application, biometric method, or another approved authentication mechanism.',
    },
    {
      title: 'The three authentication factor categories',
      content:
        'Authentication factors are generally grouped into categories based on the type of evidence they provide. Strong MFA combines independent factors rather than simply asking for two pieces of information from the same category.',
      highlights: [
        {
          title: 'Something you know',
          description:
            'Knowledge-based evidence such as a password, PIN, or passphrase.',
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
          title: 'Independent factors',
          description:
            'Factors from different categories that provide separate evidence of identity.',
        },
      ],
    },
    {
      title: 'Important MFA concepts',
      content:
        'Understanding the different MFA mechanisms helps teams choose authentication methods according to security requirements, user experience, and operational constraints.',
      highlights: [
        {
          title: 'MFA',
          description:
            'Requires two or more independent authentication factors.',
        },
        {
          title: 'Second factor',
          description:
            'An additional authentication factor required after the initial credential.',
        },
        {
          title: 'Authenticator',
          description:
            'A device, application, or mechanism that produces or verifies authentication evidence.',
        },
        {
          title: 'Challenge',
          description:
            'A verification request that the user must successfully complete during authentication.',
        },
        {
          title: 'Verification',
          description:
            'The process of checking whether the supplied authentication evidence is valid.',
        },
        {
          title: 'Recovery',
          description:
            'A controlled process for regaining account access when an authentication factor is unavailable.',
        },
      ],
    },
    {
      title: 'One-Time Passwords',
      content:
        'One-Time Passwords, commonly called OTPs, are temporary codes that can be used as an authentication factor. The code is normally valid for a limited period or a single authentication event. OTP-based mechanisms are convenient, but their security depends heavily on how the code is delivered and protected.',
      highlights: [
        {
          title: 'OTP',
          description:
            'A temporary authentication code intended for limited use.',
        },
        {
          title: 'TOTP',
          description:
            'A time-based one-time password generated from a shared secret and the current time.',
        },
        {
          title: 'HOTP',
          description:
            'A counter-based one-time password generated using a shared secret and an incrementing counter.',
        },
        {
          title: 'Authenticator app',
          description:
            'An application that can generate time-based authentication codes.',
        },
      ],
    },
    {
      title: 'SMS and email authentication',
      content:
        'SMS and email codes can provide an additional verification step, but they have important security limitations. Phone numbers and email accounts can themselves be compromised, redirected, or socially engineered. For higher-risk environments, stronger phishing-resistant mechanisms are generally preferable.',
      highlights: [
        {
          title: 'SMS OTP',
          description:
            'Sends a temporary verification code to a registered mobile number.',
        },
        {
          title: 'Email OTP',
          description:
            'Sends a temporary verification code to a registered email address.',
        },
        {
          title: 'SIM swapping',
          description:
            'An attack where control of a victim’s phone number is fraudulently transferred to another SIM or device.',
        },
        {
          title: 'Phishing risk',
          description:
            'Users can still be tricked into revealing temporary codes to an attacker.',
        },
      ],
    },
    {
      title: 'Authenticator applications',
      content:
        'Authenticator applications can generate time-based one-time passwords locally on a trusted device. During setup, the application and authentication service establish a shared secret. The authenticator can then generate temporary codes that the service verifies during sign-in.',
      highlights: [
        {
          title: 'Shared secret',
          description:
            'A secret value established between the authentication service and authenticator.',
        },
        {
          title: 'TOTP code',
          description:
            'A temporary code calculated from the shared secret and current time.',
        },
        {
          title: 'Enrollment',
          description:
            'The process of registering an authenticator with a user account.',
        },
        {
          title: 'Re-enrollment',
          description:
            'A controlled process for registering a replacement authenticator after device loss or change.',
        },
      ],
    },
    {
      title: 'Security keys',
      content:
        'Security keys are hardware authentication devices designed to provide strong cryptographic proof of possession. Modern security-key standards can provide phishing-resistant authentication because the credential is bound to the legitimate website or service rather than simply sending a reusable code.',
      highlights: [
        {
          title: 'Security key',
          description:
            'A hardware authenticator that uses cryptographic credentials to prove possession.',
        },
        {
          title: 'Public key',
          description:
            'A cryptographic value registered with the authentication service and used to verify signatures.',
        },
        {
          title: 'Private key',
          description:
            'A secret cryptographic value kept by the authenticator and used to produce authentication signatures.',
        },
        {
          title: 'Phishing resistance',
          description:
            'Makes it significantly harder for an attacker to reuse authentication evidence on a fraudulent website.',
        },
      ],
    },
    {
      title: 'MFA and passkeys',
      content:
        'Passkeys provide a modern passwordless authentication mechanism based on public-key cryptography. They can be protected by a device-level unlock mechanism such as a PIN or biometric verification. Passkeys can provide strong phishing-resistant authentication without requiring users to manually enter reusable passwords.',
      highlights: [
        {
          title: 'Passkey',
          description:
            'A public-key-based credential used for passwordless authentication.',
        },
        {
          title: 'Credential',
          description:
            'The cryptographic identity information used by the authenticator and service.',
        },
        {
          title: 'Device unlock',
          description:
            'A local verification step that allows the user to activate the authenticator.',
        },
        {
          title: 'Phishing resistance',
          description:
            'Protects authentication by binding the credential to the legitimate relying service.',
        },
      ],
    },
    {
      title: 'MFA vs two-factor authentication',
      content:
        'Two-Factor Authentication, or 2FA, is a specific form of MFA that requires exactly two independent authentication factors. MFA is the broader concept and can require two or more factors. Therefore, every 2FA implementation is MFA, but MFA does not necessarily mean exactly two factors.',
      highlights: [
        {
          title: 'MFA',
          description:
            'The broader authentication approach requiring multiple independent factors.',
        },
        {
          title: '2FA',
          description:
            'A form of MFA that specifically requires two independent factors.',
        },
        {
          title: 'Factor',
          description:
            'A category of authentication evidence used to verify identity.',
        },
        {
          title: 'Independence',
          description:
            'Means the factors provide separate evidence rather than simply duplicating the same credential type.',
        },
      ],
    },
    {
      title: 'Adaptive MFA',
      content:
        'Adaptive MFA changes authentication requirements according to risk and context. A low-risk login from a trusted environment may require fewer verification steps, while an unusual login involving a new device, unfamiliar location, or elevated risk may require stronger authentication.',
      highlights: [
        {
          title: 'Risk score',
          description:
            'Represents an assessment of how risky a particular authentication attempt appears.',
        },
        {
          title: 'Trusted device',
          description:
            'A device that satisfies defined security and trust requirements.',
        },
        {
          title: 'Location signal',
          description:
            'Context about where an authentication attempt originates.',
        },
        {
          title: 'Step-up authentication',
          description:
            'Requests stronger authentication when the risk or sensitivity of an operation increases.',
        },
      ],
    },
    {
      title: 'MFA recovery',
      content:
        'Recovery is one of the most important parts of an MFA system because users can lose devices, security keys, or access to their authentication methods. Recovery mechanisms must be strong enough that an attacker cannot bypass MFA simply by exploiting an easier account-recovery process.',
      highlights: [
        {
          title: 'Recovery code',
          description:
            'A pre-generated backup credential that can help a legitimate user recover access.',
        },
        {
          title: 'Backup factor',
          description:
            'An additional registered authentication method used when the primary factor is unavailable.',
        },
        {
          title: 'Identity verification',
          description:
            'A controlled process for establishing that a recovery request comes from the legitimate account owner.',
        },
        {
          title: 'Recovery policy',
          description:
            'Defines the evidence and controls required before MFA can be reset or replaced.',
        },
      ],
    },
    {
      title: 'MFA in enterprise systems',
      content:
        'Enterprise applications often apply MFA more strongly to privileged accounts, remote access, sensitive applications, and high-impact operations. Organizations may integrate MFA with a centralized identity provider so that multiple applications can use consistent authentication policies.',
      highlights: [
        {
          title: 'Identity provider',
          description:
            'Centralizes authentication and can enforce MFA policies across multiple applications.',
        },
        {
          title: 'Privileged account',
          description:
            'An account with elevated administrative or operational permissions.',
        },
        {
          title: 'Conditional access',
          description:
            'Applies authentication requirements based on identity, device, application, location, or risk.',
        },
        {
          title: 'Single Sign-On',
          description:
            'Allows users to authenticate through a central identity system and access multiple trusted applications.',
        },
      ],
    },
    {
      title: 'MFA in APIs and applications',
      content:
        'MFA normally occurs during authentication rather than on every API request. After successful MFA, the identity system can issue a session or access credential. Applications and APIs then validate that credential and enforce authorization according to the permissions granted to the authenticated identity.',
      highlights: [
        {
          title: 'Authentication session',
          description:
            'Represents an authenticated interaction established after successful identity verification.',
        },
        {
          title: 'Access token',
          description:
            'A credential used by an authenticated client to access protected resources.',
        },
        {
          title: 'Authentication assurance',
          description:
            'Represents the strength or confidence associated with the authentication process.',
        },
        {
          title: 'Authorization',
          description:
            'Determines what the authenticated identity is allowed to access or perform.',
        },
      ],
    },
    {
      title: 'MFA security',
      content:
        'MFA improves security but does not eliminate every authentication threat. Attackers can still target recovery flows, steal sessions, trick users into approving fraudulent requests, or compromise weak authentication factors. MFA should therefore be combined with secure session management, phishing-resistant methods, monitoring, rate limiting, and strong account-recovery controls.',
      highlights: [
        {
          title: 'MFA fatigue',
          description:
            'An attack that repeatedly sends authentication prompts hoping the user eventually approves one.',
        },
        {
          title: 'Push bombing',
          description:
            'Repeated authentication approval requests designed to overwhelm or confuse the user.',
        },
        {
          title: 'Session theft',
          description:
            'Compromise of an already authenticated session so an attacker can bypass the original login step.',
        },
        {
          title: 'Phishing-resistant MFA',
          description:
            'Uses authentication mechanisms designed to prevent captured authentication evidence from being reused on fraudulent sites.',
        },
        {
          title: 'Rate limiting',
          description:
            'Restricts repeated authentication attempts and verification requests to reduce abuse.',
        },
      ],
    },
    {
      title: 'MFA in real products',
      content:
        'MFA is widely used in banking, SaaS platforms, enterprise applications, cloud platforms, developer tools, education systems, healthcare systems, financial applications, and administrative consoles. It is especially important wherever account compromise could expose sensitive information or enable high-impact actions.',
    },
    {
      title: 'MFA in production',
      content:
        'Production MFA requires secure enrollment, factor lifecycle management, recovery controls, monitoring, audit logging, rate limiting, policy configuration, device management, incident response, and clear handling of lost or compromised authenticators. Organizations should measure adoption and protect privileged accounts with stronger authentication requirements.',
      highlights: [
        {
          title: 'Enrollment',
          description:
            'Registers and verifies an authentication factor for a user account.',
        },
        {
          title: 'Factor lifecycle',
          description:
            'Manages registration, replacement, suspension, and removal of authentication factors.',
        },
        {
          title: 'Audit logging',
          description:
            'Records important authentication and MFA events for investigation and compliance.',
        },
        {
          title: 'Monitoring',
          description:
            'Detects unusual authentication behavior, repeated failures, and suspicious MFA activity.',
        },
        {
          title: 'Incident response',
          description:
            'Defines how compromised accounts, devices, and authentication factors are contained and recovered.',
        },
      ],
    },
    {
      title: 'Common MFA mistakes',
      content:
        'Common mistakes include treating SMS as the strongest available factor, creating weak recovery processes, allowing unlimited authentication prompts, failing to protect privileged accounts, trusting device enrollment without verification, and assuming that MFA makes session theft or authorization problems impossible.',
      highlights: [
        {
          title: 'Weak recovery',
          description:
            'Allows attackers to bypass strong MFA through an easier account-recovery process.',
        },
        {
          title: 'Unlimited prompts',
          description:
            'Allows attackers to repeatedly send authentication requests without meaningful controls.',
        },
        {
          title: 'Privileged accounts without MFA',
          description:
            'Leaves highly powerful accounts exposed to password compromise.',
        },
        {
          title: 'Poor enrollment',
          description:
            'Allows an attacker to register their own authentication factor on a compromised or insufficiently verified account.',
        },
        {
          title: 'MFA as complete security',
          description:
            'Assumes MFA alone protects against every authentication, session, authorization, and application-security threat.',
        },
      ],
    },
    {
      title: 'Explore MFA in EDDUU',
      content:
        'EDDUU connects Multi-Factor Authentication with Authentication, Identity, SSO, OAuth 2.0, OpenID Connect, JWT, Authorization, RBAC, Zero Trust, TLS, and API Security.',
    },
  ],
  relatedTechnologyIds: [
    'authentication',
    'identity',
    'single-sign-on',
    'oauth2',
    'openid-connect',
    'jwt',
    'authorization',
    'rbac',
    'zero-trust',
    'tls',
    'api-security',
  ],
}

export default mfaKnowledge

