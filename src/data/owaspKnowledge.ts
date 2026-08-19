import type { KnowledgeDefinition } from './knowledge'

export const owaspKnowledge: KnowledgeDefinition = {
  technologyId: 'owasp',
  slug: 'owasp',
  title: 'What is OWASP?',
  summary:
    'OWASP is a global open community that provides practical knowledge, standards, tools, and guidance for improving the security of software and web applications.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is OWASP?',
      content:
        'OWASP stands for the Open Worldwide Application Security Project. It is a global community focused on improving software security. OWASP provides freely available guidance, standards, educational material, tools, and projects that help developers, security teams, architects, and organizations build and operate more secure applications.',
    },
    {
      title: 'Why do we need OWASP?',
      content:
        'Application security involves many different technologies, architectures, vulnerabilities, and development practices. Teams need a common way to understand recurring security risks and establish practical controls. OWASP provides widely used resources that help organizations identify common weaknesses, improve secure development practices, and communicate application security risks.',
    },
    {
      title: 'OWASP as a security community',
      content:
        'OWASP is not a security product or a single security tool. It is an open community and ecosystem of projects, documentation, standards, and educational resources. Organizations can use these resources to improve application security across design, development, testing, deployment, and operations.',
      highlights: [
        {
          title: 'Community',
          description:
            'A global network of security professionals, developers, researchers, educators, and technology practitioners.',
        },
        {
          title: 'Projects',
          description:
            'Open projects that provide practical security guidance, tools, standards, and educational resources.',
        },
        {
          title: 'Standards',
          description:
            'Structured security guidance that can help organizations define and evaluate secure practices.',
        },
        {
          title: 'Education',
          description:
            'Training and learning resources designed to improve software security knowledge.',
        },
      ],
    },
    {
      title: 'OWASP Top 10',
      content:
        'The OWASP Top 10 is one of the best-known OWASP awareness resources. It highlights important categories of web application security risks and helps teams understand common classes of vulnerabilities. It is useful for security awareness and prioritization, but it should not be treated as a complete list of every possible application security problem.',
      highlights: [
        {
          title: 'Broken Access Control',
          description:
            'Failures that allow users or systems to perform actions or access resources beyond their intended permissions.',
        },
        {
          title: 'Cryptographic Failures',
          description:
            'Weaknesses involving protection of sensitive information through cryptography.',
        },
        {
          title: 'Injection',
          description:
            'Occurs when untrusted input is interpreted as commands or instructions by another system component.',
        },
        {
          title: 'Security Misconfiguration',
          description:
            'Insecure configuration of applications, infrastructure, services, or security controls.',
        },
        {
          title: 'Vulnerable Components',
          description:
            'Security risk introduced by outdated, vulnerable, or improperly managed third-party components.',
        },
      ],
    },
    {
      title: 'OWASP API Security Top 10',
      content:
        'APIs have security characteristics that differ from traditional browser-oriented applications. The OWASP API Security Top 10 provides awareness around important API-specific risks such as broken object-level authorization, broken authentication, unrestricted resource consumption, security misconfiguration, improper inventory management, and unsafe consumption of APIs.',
      highlights: [
        {
          title: 'Broken Object Level Authorization',
          description:
            'Occurs when an API does not correctly verify whether a caller can access a specific object or resource.',
        },
        {
          title: 'Broken Authentication',
          description:
            'Weaknesses that allow authentication mechanisms or credentials to be bypassed or abused.',
        },
        {
          title: 'Unrestricted Resource Consumption',
          description:
            'Allows clients to consume excessive computational, storage, network, or other resources.',
        },
        {
          title: 'Security Misconfiguration',
          description:
            'Insecure settings or configurations expose APIs to unnecessary risk.',
        },
        {
          title: 'Improper Inventory Management',
          description:
            'Lack of visibility into APIs, versions, endpoints, environments, or ownership.',
        },
      ],
    },
    {
      title: 'OWASP Secure Coding',
      content:
        'Secure coding means designing and implementing software so that common security weaknesses are avoided or reduced. OWASP resources can help developers understand secure input handling, authentication, authorization, error handling, cryptography, session management, data protection, and other secure development practices.',
      highlights: [
        {
          title: 'Input validation',
          description:
            'Validates untrusted input before it is processed by the application.',
        },
        {
          title: 'Output encoding',
          description:
            'Ensures data is safely represented when inserted into a particular output context.',
        },
        {
          title: 'Secure authentication',
          description:
            'Uses appropriate mechanisms to verify identities and protect authentication credentials.',
        },
        {
          title: 'Secure authorization',
          description:
            'Enforces permissions consistently for resources and operations.',
        },
        {
          title: 'Secure error handling',
          description:
            'Prevents errors from exposing sensitive implementation details or security information.',
        },
      ],
    },
    {
      title: 'OWASP ASVS',
      content:
        'The OWASP Application Security Verification Standard, commonly called ASVS, provides a structured basis for verifying application security controls. It can help teams define security requirements and assess whether an application implements appropriate protections.',
      highlights: [
        {
          title: 'Security verification',
          description:
            'A structured process for evaluating whether required security controls have been implemented.',
        },
        {
          title: 'Security requirements',
          description:
            'Explicit security expectations that can be incorporated into application development.',
        },
        {
          title: 'Verification level',
          description:
            'A way to align the depth of security verification with the application and risk profile.',
        },
        {
          title: 'Application security testing',
          description:
            'Testing that evaluates whether application security requirements and controls work as intended.',
        },
      ],
    },
    {
      title: 'OWASP SAMM',
      content:
        'The OWASP Software Assurance Maturity Model, or SAMM, helps organizations assess and improve their software security practices. It looks beyond individual vulnerabilities and considers how security is integrated into governance, design, implementation, verification, and operations.',
      highlights: [
        {
          title: 'Security maturity',
          description:
            'The level at which an organization has established repeatable and effective software security practices.',
        },
        {
          title: 'Governance',
          description:
            'Security practices related to strategy, policies, metrics, and organizational direction.',
        },
        {
          title: 'Design',
          description:
            'Security activities performed during architecture and product design.',
        },
        {
          title: 'Verification',
          description:
            'Activities that evaluate whether software meets security expectations.',
        },
        {
          title: 'Operations',
          description:
            'Security practices applied while software is deployed and operating in production.',
        },
      ],
    },
    {
      title: 'OWASP Dependency-Check and component security',
      content:
        'Modern applications depend heavily on third-party libraries and open-source components. OWASP projects can help teams identify known vulnerabilities in dependencies and incorporate component security into development and delivery workflows.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A software component that an application relies on to provide functionality.',
        },
        {
          title: 'Known vulnerability',
          description:
            'A publicly identified security weakness associated with a particular component or version.',
        },
        {
          title: 'Software Composition Analysis',
          description:
            'The practice of identifying and evaluating third-party software components and their security risks.',
        },
        {
          title: 'Dependency update',
          description:
            'Replacing a vulnerable or outdated component with a safer supported version.',
        },
      ],
    },
    {
      title: 'OWASP and Authentication',
      content:
        'Authentication is a major application security boundary. Secure authentication requires appropriate credential handling, secure session management, protection against credential attacks, strong identity verification, and appropriate use of additional factors such as MFA.',
      highlights: [
        {
          title: 'Credential protection',
          description:
            'Protects passwords, tokens, API credentials, and other authentication secrets.',
        },
        {
          title: 'Session management',
          description:
            'Controls how authenticated sessions are created, maintained, expired, and invalidated.',
        },
        {
          title: 'Credential stuffing',
          description:
            'An attack that attempts to use credentials obtained from previous breaches against other services.',
        },
        {
          title: 'MFA',
          description:
            'Adds independent authentication factors to strengthen identity verification.',
        },
      ],
    },
    {
      title: 'OWASP and Access Control',
      content:
        'Access control determines what authenticated users and systems are allowed to do. OWASP guidance emphasizes enforcing authorization on the server side and verifying access at the appropriate resource and operation boundaries.',
      highlights: [
        {
          title: 'Server-side enforcement',
          description:
            'Authorization decisions are enforced by trusted backend components rather than relying on the client.',
        },
        {
          title: 'Least privilege',
          description:
            'Provides only the permissions required for an identity or service to perform its intended task.',
        },
        {
          title: 'Object-level authorization',
          description:
            'Checks permission for the specific object being accessed.',
        },
        {
          title: 'Function-level authorization',
          description:
            'Controls whether an identity can invoke a particular operation or function.',
        },
      ],
    },
    {
      title: 'OWASP and Security Testing',
      content:
        'Security testing helps teams discover weaknesses before attackers exploit them. Testing can include automated scanning, dependency analysis, static analysis, dynamic testing, penetration testing, configuration review, and targeted verification of security requirements.',
      highlights: [
        {
          title: 'SAST',
          description:
            'Static Application Security Testing analyzes source code or compiled code for potential security weaknesses.',
        },
        {
          title: 'DAST',
          description:
            'Dynamic Application Security Testing evaluates a running application for security weaknesses.',
        },
        {
          title: 'Dependency scanning',
          description:
            'Identifies known vulnerabilities in third-party components.',
        },
        {
          title: 'Penetration testing',
          description:
            'Authorized security testing that attempts to discover and demonstrate exploitable weaknesses.',
        },
        {
          title: 'Security regression testing',
          description:
            'Verifies that previously fixed security weaknesses do not return after future changes.',
        },
      ],
    },
    {
      title: 'OWASP in the Software Development Lifecycle',
      content:
        'OWASP guidance can be integrated throughout the software development lifecycle. Teams can define security requirements during planning, threat-model architecture, apply secure coding practices during implementation, automate security checks in CI/CD, perform targeted testing before release, and continuously monitor production systems.',
      highlights: [
        {
          title: 'Security requirements',
          description:
            'Defines security expectations before implementation begins.',
        },
        {
          title: 'Threat modeling',
          description:
            'Identifies threats and required controls during architecture and design.',
        },
        {
          title: 'Secure code review',
          description:
            'Reviews implementation for security weaknesses and unsafe patterns.',
        },
        {
          title: 'Security automation',
          description:
            'Integrates repeatable security checks into engineering and delivery pipelines.',
        },
        {
          title: 'Continuous improvement',
          description:
            'Uses findings, incidents, and metrics to improve security practices over time.',
        },
      ],
    },
    {
      title: 'OWASP in production',
      content:
        'Production security requires more than checking a vulnerability list. Organizations need application inventories, ownership, secure configuration, vulnerability management, monitoring, incident response, access reviews, dependency management, security testing, and a defined process for prioritizing and remediating security findings.',
      highlights: [
        {
          title: 'Vulnerability management',
          description:
            'Tracks, prioritizes, remediates, and verifies security weaknesses.',
        },
        {
          title: 'Security ownership',
          description:
            'Clearly assigns responsibility for application security and remediation.',
        },
        {
          title: 'Security monitoring',
          description:
            'Detects suspicious activity and supports investigation of security events.',
        },
        {
          title: 'Remediation',
          description:
            'Fixes or otherwise addresses an identified security weakness according to its risk.',
        },
        {
          title: 'Risk-based prioritization',
          description:
            'Prioritizes security work according to likelihood, impact, exposure, and business context.',
        },
      ],
    },
    {
      title: 'Common OWASP misconceptions',
      content:
        'OWASP resources are valuable references, but they are not a substitute for complete security engineering. The OWASP Top 10 is an awareness resource rather than a complete security architecture. A team should not assume that checking every listed category automatically makes an application secure.',
      highlights: [
        {
          title: 'Top 10 is not everything',
          description:
            'The OWASP Top 10 does not represent every possible application security threat.',
        },
        {
          title: 'Checklist mentality',
          description:
            'Treating security as a fixed checklist can miss application-specific threats and business risks.',
        },
        {
          title: 'Security requires context',
          description:
            'Security controls should be selected according to architecture, data, users, threats, and business requirements.',
        },
        {
          title: 'Security is continuous',
          description:
            'Application security must evolve as software, dependencies, threats, and infrastructure change.',
        },
      ],
    },
    {
      title: 'Explore OWASP in EDDUU',
      content:
        'EDDUU connects OWASP with Security, Authentication, Authorization, API Security, Encryption, TLS, Secrets Management, Zero Trust, Audit Logging, secure development, vulnerability management, and security testing.',
    },
  ],
  relatedTechnologyIds: [
    'security',
    'authentication',
    'authorization',
    'api-security',
    'encryption',
    'tls',
    'secrets-management',
    'zero-trust',
    'audit-logging',
  ],
}

export default owaspKnowledge
