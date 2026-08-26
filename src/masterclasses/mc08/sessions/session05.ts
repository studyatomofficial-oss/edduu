import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session05: SessionDefinition = {
  id: 'mc08-session-05',
  number: 5,
  stage: 'discover',
  title: 'Cloud Security & IAM - Controlling Identity, Access and Trust',
  objective:
    'Learn how to design cloud security around identity, authorization, least privilege, secrets, encryption, network boundaries, auditability and incident response.',
  experiences: [
    {
      id: 'mc08-s05-security-lesson',
      type: 'lesson',
      title: 'Security Starts with Identity and Trust',
      description:
        'Design security controls around real access paths instead of treating security as a separate checklist.',
      lesson: {
        opening:
          'EDUUU has students, teachers, administrators, backend services, databases and external integrations. Every one of these actors may need access to something, but none should automatically have access to everything. Cloud security begins by answering a simple question: who or what is allowed to perform which action on which resource, under which conditions?',
        sections: [
          {
            heading: '1. Security begins with assets and threats',
            explanation:
              'Before selecting security products, identify what must be protected and what could go wrong. Assets include student data, assessment results, credentials, source code, infrastructure and business records. Threats include unauthorized access, credential theft, accidental deletion, malicious modification and service abuse.',
            example:
              'EDUUU should treat student assessment results and administrator credentials as high-value assets because unauthorized access or modification could directly affect students and the business.',
          },
          {
            heading: '2. Authentication answers who are you',
            explanation:
              'Authentication establishes the identity of a person, service or system. It may use passwords, tokens, certificates, federated identity or other mechanisms. Authentication alone does not determine what the authenticated identity is allowed to do.',
            example:
              'An EDDUUU administrator signs in using an approved identity provider and successfully proves their identity. That does not automatically mean the administrator should have database administrator permissions.',
          },
          {
            heading: '3. Authorization answers what are you allowed to do',
            explanation:
              'Authorization determines which actions an authenticated identity can perform on specific resources. A secure architecture separates identity verification from permission decisions.',
            example:
              'An authenticated support employee may view a student support record but should not automatically be allowed to delete examination results.',
          },
          {
            heading: '4. Least privilege limits blast radius',
            explanation:
              'Least privilege means granting only the permissions required to perform a legitimate task. If a credential is compromised, limited permissions reduce the potential damage.',
            example:
              'An EDDUUU reporting service that only reads assessment summaries should not receive permission to delete student records.',
          },
          {
            heading: '5. Humans and services need different identities',
            explanation:
              'Cloud systems contain both human users and machine identities. Application services should not normally depend on an engineerâ€™s personal credentials because that creates operational and security risks.',
            example:
              'The EDDUUU assessment service should use its own service identity when accessing approved resources instead of storing a developerâ€™s cloud administrator password inside the application.',
          },
          {
            heading: '6. Roles make permissions reusable',
            explanation:
              'Roles allow permissions to be associated with responsibilities rather than individual people. This simplifies access management when teams change and reduces the need to manually maintain permissions for every user.',
            example:
              'EDUUU can define an application-deployment role with specific deployment permissions and assign it to approved deployment identities.',
          },
          {
            heading: '7. Policies express access decisions',
            explanation:
              'Access policies describe which identities can perform which actions on which resources. Strong policies are specific about resources and actions rather than granting broad administrative access.',
            example:
              'A course-media service may receive permission to read specific object-storage locations without receiving permission to access the production database.',
          },
          {
            heading: '8. Secrets should not live in source code',
            explanation:
              'API keys, database passwords, private tokens and similar credentials should not be hard-coded into application source code or committed to repositories. Secret-management systems provide controlled storage, access and rotation mechanisms.',
            example:
              'The EDDUUU application should retrieve a database credential through an approved secret mechanism instead of keeping the password inside a Git repository.',
          },
          {
            heading: '9. Credential rotation reduces long-lived exposure',
            explanation:
              'Long-lived credentials increase risk because a leaked credential can remain useful for a long time. Rotation reduces the useful lifetime of compromised credentials and should be combined with monitoring and access controls.',
            example:
              'An integration credential used by an EDDUUU service can be rotated periodically and immediately replaced when compromise is suspected.',
          },
          {
            heading: '10. Encryption protects data confidentiality',
            explanation:
              'Encryption can protect data at rest and in transit. At-rest encryption protects stored information, while transport encryption protects information moving between systems.',
            example:
              'EDUUU should protect database storage and use encrypted network connections when application services communicate with external or internal endpoints.',
          },
          {
            heading: '11. Network security and IAM work together',
            explanation:
              'Identity permissions alone do not provide the complete security boundary. Network controls can restrict where traffic can originate and which systems can communicate, while IAM controls what an identity is permitted to do.',
            example:
              'The EDDUUU database can require both a valid service identity and network connectivity from an approved application layer.',
          },
          {
            heading: '12. Public access should be deliberate',
            explanation:
              'A resource should not be publicly reachable simply because making it public is convenient. Public exposure increases the number of possible attack paths and should be justified by a business requirement.',
            example:
              'The EDDUUU student web application may need public access, but the assessment database should remain private.',
          },
          {
            heading: '13. Audit logs create accountability',
            explanation:
              'Security controls become difficult to investigate if the organization cannot determine who accessed or changed a resource. Audit records provide evidence for investigation, compliance and operational troubleshooting.',
            example:
              'If an assessment record changes unexpectedly, EDDUUU should be able to investigate which identity performed the operation and when it occurred.',
          },
          {
            heading: '14. Detection is different from prevention',
            explanation:
              'Preventive controls try to stop unauthorized actions. Detective controls identify suspicious or unexpected behaviour after or while it occurs. Mature security architectures need both.',
            example:
              'An access policy can prevent unauthorized database deletion while monitoring can detect unusual access attempts against administrative resources.',
          },
          {
            heading: '15. Incident response needs predefined actions',
            explanation:
              'When a credential or service is compromised, teams should know how to contain the problem. Response may include disabling credentials, rotating secrets, restricting network access, reviewing logs and restoring trusted configurations.',
            example:
              'If an EDDUUU integration token is exposed, the team should revoke or rotate it, investigate usage and verify that no unauthorized data access occurred.',
          },
        ],
        realWorldConnection:
          'Cloud security programs become effective when identity, permissions, network boundaries, secrets, encryption and auditability are designed as one system. Technical leaders must be able to explain not only how access is granted but also how compromise is contained and investigated.',
        keyIdea:
          'Cloud security is fundamentally about controlling trust. Authenticate identities, authorize only required actions, keep resources private by default, protect secrets and data, and maintain enough evidence to detect and investigate misuse.',
        recap: [
          'Authentication establishes identity.',
          'Authorization determines permitted actions.',
          'Least privilege limits unnecessary access and blast radius.',
          'Human and machine identities should be managed separately.',
          'Roles and policies make permissions explicit and reusable.',
          'Secrets should be stored and rotated securely.',
          'Encryption protects data at rest and in transit.',
          'IAM and network controls provide complementary boundaries.',
          'Auditability is essential for investigation.',
          'Prevention, detection and incident response work together.',
        ],
      },
    },
    {
      id: 'mc08-s05-security-animation',
      type: 'animation',
      title: 'Follow an Authorized Request',
      description:
        'Visualize how identity, policy and network controls work together before a service reaches sensitive data.',
      animation: {
        visual: 'security',
        opening:
          'A secure request must pass multiple intentional boundaries instead of receiving unrestricted access.',
        parts: [
          {
            id: 'identity',
            label: 'IDENTITY',
            explanation:
              'A human or service proves its identity.',
            example:
              'The EDDUUU assessment service uses its assigned service identity.',
          },
          {
            id: 'policy',
            label: 'AUTHORIZATION POLICY',
            explanation:
              'The identity is evaluated against the permissions required for the requested action.',
            example:
              'The assessment service is allowed to update assessment records but not administrative infrastructure.',
          },
          {
            id: 'network',
            label: 'NETWORK BOUNDARY',
            explanation:
              'Network controls determine whether the requesting system can reach the target resource.',
            example:
              'Only approved application services can reach the private database network.',
          },
          {
            id: 'data',
            label: 'PROTECTED DATA',
            explanation:
              'The request reaches the resource only after required access controls succeed.',
            example:
              'The service updates an assessment result using its approved database permissions.',
          },
          {
            id: 'audit',
            label: 'AUDIT',
            explanation:
              'The operation can be recorded for accountability and investigation.',
            example:
              'The system records the identity, action and relevant resource information.',
          },
        ],
        closing:
          'Security is stronger when multiple independent controls work together and no single leaked credential automatically provides unrestricted access.',
      },
    },
    {
      id: 'mc08-s05-security-simulation',
      type: 'simulation',
      title: 'Choose the Security Control',
      description:
        'Match security problems with the control that best addresses the risk.',
      simulation: {
        instruction:
          'Match each security requirement with the control that best addresses it.',
        items: [
          {
            id: 'identity-check',
            label: 'Verify who is requesting access.',
            description:
              'The system needs to establish identity before access decisions.',
            correctTargetId: 'authentication-target',
          },
          {
            id: 'permission-check',
            label: 'Allow a service to update results but not delete users.',
            description:
              'The identity needs limited permissions.',
            correctTargetId: 'authorization-target',
          },
          {
            id: 'secret-storage',
            label: 'Store a database credential outside application source code.',
            description:
              'Sensitive credentials need controlled storage.',
            correctTargetId: 'secret-target',
          },
          {
            id: 'private-data',
            label: 'Prevent arbitrary internet traffic from reaching the database.',
            description:
              'The data resource needs a restricted network boundary.',
            correctTargetId: 'network-target',
          },
          {
            id: 'investigation',
            label: 'Determine which identity changed a sensitive record.',
            description:
              'The organization needs evidence of access activity.',
            correctTargetId: 'audit-target',
          },
        ],
        targets: [
          {
            id: 'authentication-target',
            label: 'AUTHENTICATION',
            description:
              'Establishes the identity of a requester.',
          },
          {
            id: 'authorization-target',
            label: 'AUTHORIZATION',
            description:
              'Controls which actions an identity can perform.',
          },
          {
            id: 'secret-target',
            label: 'SECRET MANAGEMENT',
            description:
              'Protects credentials and sensitive tokens.',
          },
          {
            id: 'network-target',
            label: 'NETWORK BOUNDARY',
            description:
              'Restricts which systems can reach protected resources.',
          },
          {
            id: 'audit-target',
            label: 'AUDIT LOGGING',
            description:
              'Provides evidence of access and changes.',
          },
        ],
        successMessage:
          'Correct. Strong cloud security uses multiple controls that address identity, permissions, network reachability, secrets and accountability.',
        failureMessage:
          'Separate the problem into identity, permissions, secret protection, network exposure or investigation evidence.',
      },
    },
    {
      id: 'mc08-s05-security-question',
      type: 'question',
      title: 'Security Architecture Check',
      description:
        'Test whether you can apply least privilege to a real service-to-service access problem.',
      question: {
        id: 'mc08-s05-security-architecture',
        type: 'single-choice',
        question:
          'The EDDUUU reporting service only needs to read assessment summaries. Which permission model is the safest starting point?',
        options: [
          {
            id: 'read-only',
            text:
              'Give the reporting service a dedicated identity with only the required read permissions on the required data.',
            correct: true,
          },
          {
            id: 'admin',
            text:
              'Give the reporting service full administrator access so future requirements are easier.',
            correct: false,
          },
          {
            id: 'developer',
            text:
              'Store a developer personal credential inside the reporting service.',
            correct: false,
          },
          {
            id: 'public',
            text:
              'Make the assessment database publicly accessible so the service can connect easily.',
            correct: false,
          },
        ],
        explanation:
          'Least privilege means granting only the permissions needed for the current responsibility. A dedicated service identity with scoped read access reduces the blast radius of a compromised reporting service.',
      },
    },
  ],
}