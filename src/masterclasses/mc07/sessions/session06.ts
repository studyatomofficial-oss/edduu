import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session06: SessionDefinition = {
  id: 'mc07-session-06',
  number: 6,
  stage: 'practice',
  title: 'Security & Architecture Trade-offs',
  objective:
    'Learn how security requirements and competing engineering priorities influence architecture decisions, including identity, authorization, trust boundaries, least privilege, data protection, complexity, cost and reliability.',

  experiences: [
    {
      id: 'mc07-s06-security-lesson',
      type: 'lesson',
      title: 'Security and Trade-offs Are Architecture Decisions',
      description:
        'Understand how security controls and competing system qualities shape architecture instead of treating security as a final checklist.',

      lesson: {
        opening:
          'Imagine an office building. Knowing who a person is does not automatically mean they can enter every room. Architecture works the same way: systems need identity, permissions, boundaries and controlled access, while every security decision also introduces cost or complexity that must be evaluated.',

        sections: [
          {
            heading: '1. Authentication establishes identity',
            explanation:
              'Authentication verifies who a user or service represents. It establishes identity but does not by itself determine what that identity is allowed to do.',
            example:
              'A student signs in through the platform identity system and the system verifies the student account.',
          },
          {
            heading: '2. Authorization controls access',
            explanation:
              'Authorization determines which resources or actions an authenticated identity is allowed to use. It should be based on explicit permissions and business rules.',
            example:
              'A student may view their own assessment result but should not be allowed to modify another studentâ€™s result.',
          },
          {
            heading: '3. Least privilege limits unnecessary access',
            explanation:
              'Least privilege means giving users and services only the permissions required for their responsibilities. Smaller permission sets reduce the potential impact of mistakes or compromise.',
            example:
              'A reporting service that only reads analytics should not receive permission to delete production assessment records.',
          },
          {
            heading: '4. Trust boundaries need explicit controls',
            explanation:
              'A trust boundary exists where data or requests cross from one security context into another. Authentication, authorization, validation and appropriate protection become important at these boundaries.',
            example:
              'An external client calling a public API crosses a trust boundary and its input cannot simply be treated as trusted internal data.',
          },
          {
            heading: '5. Protect sensitive information',
            explanation:
              'Sensitive information should be protected during transmission and storage according to its risk. Systems should also avoid collecting or exposing information that is not required.',
            example:
              'Student personal information should not appear unnecessarily in application logs merely because it was present in an incoming request.',
          },
          {
            heading: '6. Keep secrets outside source code',
            explanation:
              'Passwords, API keys and service credentials should not be hard-coded into application source files or committed to repositories. They should be managed through suitable secure configuration or secret-management mechanisms.',
            example:
              'A production API credential should be provided through secure runtime configuration rather than written directly into a TypeScript file.',
          },
          {
            heading: '7. Validate external input',
            explanation:
              'External input should be checked before internal components trust it. Validation helps prevent malformed data from creating unexpected behaviour and reduces some classes of security risk.',
            example:
              'An assessment submission endpoint should validate the student identity, assessment identifier and expected answer format before processing the request.',
          },
          {
            heading: '8. Security controls have usability costs',
            explanation:
              'Security controls can add additional steps, latency, operational work or user friction. Strong architecture chooses controls according to the sensitivity and threat rather than applying maximum friction everywhere.',
            example:
              'Changing sensitive account information may require stronger verification than simply browsing a public course description.',
          },
          {
            heading: '9. Architecture is a trade-off exercise',
            explanation:
              'Optimizing one quality can negatively affect another. A design that improves scalability may increase cost; stronger consistency may increase latency; additional services may improve isolation while increasing operational complexity.',
            example:
              'Splitting a system into many independently deployed services may improve team ownership but also create more networking, deployment and observability work.',
          },
          {
            heading: '10. Monolith versus distributed services',
            explanation:
              'A modular monolith can be simpler to operate while a distributed architecture can provide stronger independent scaling or deployment boundaries. Neither is automatically better.',
            example:
              'A small education product may prefer a well-structured modular application until independent scaling or team ownership creates a clear reason to split services.',
          },
          {
            heading: '11. Cost is an architecture constraint',
            explanation:
              'Architecture must fit the organization\'s financial and operational capacity. A technically impressive design can still be a poor decision if its infrastructure and maintenance costs are not justified by the business value.',
            example:
              'Running many always-on services may be unnecessary for a platform whose traffic is small and predictable.',
          },
          {
            heading: '12. Make trade-offs explicit',
            explanation:
              'Strong architecture decisions explain what is being optimized, what is being sacrificed, what risks are accepted and under what future condition the decision should be revisited.',
            example:
              'A team may choose a relational database for transactional consistency today and document the traffic threshold or workload change that would trigger a future scaling redesign.',
          },
        ],

        realWorldConnection:
          'Architecture reviews often involve product, engineering, security, operations and business stakeholders. A good technical leader can explain why a decision is appropriate now, what trade-off it introduces and what signal would justify changing it later.',

        keyIdea:
          'Good architecture does not eliminate trade-offs. It makes security boundaries, permissions, risks, cost, complexity and system qualities explicit so the organization can make an informed decision.',

        recap: [
          'Authentication establishes identity.',
          'Authorization controls what an identity can access.',
          'Least privilege reduces unnecessary permissions.',
          'Trust boundaries require explicit security controls.',
          'Sensitive information needs appropriate protection.',
          'Secrets should remain outside source code.',
          'External input should be validated.',
          'Security controls can introduce usability and operational costs.',
          'Architecture choices should make trade-offs and future triggers explicit.',
        ],
      },
    },

    {
      id: 'mc07-s06-security-animation',
      type: 'animation',
      title: 'From Identity to Authorized Action',
      description:
        'Visualize how identity, permissions and trust boundaries protect an application.',

      animation: {
        visual: 'security',
        opening:
          'Entering a building requires more than showing an identity card. Different rooms have different access rules. Software systems use the same basic idea.',

        parts: [
          {
            id: 'identity',
            label: 'IDENTITY',
            explanation:
              'The system establishes who the user or service represents.',
            example:
              'A student authenticates through the platform identity mechanism.',
          },
          {
            id: 'permission',
            label: 'PERMISSION',
            explanation:
              'The system evaluates what the authenticated identity is allowed to access or change.',
            example:
              'The student can access their own courses and results.',
          },
          {
            id: 'boundary',
            label: 'TRUST BOUNDARY',
            explanation:
              'A request crossing into a protected security context is evaluated against explicit controls.',
            example:
              'An API validates an external request before allowing access to student data.',
          },
          {
            id: 'least',
            label: 'LEAST PRIVILEGE',
            explanation:
              'The identity receives only the permissions required for its responsibility.',
            example:
              'A notification worker cannot modify assessment scores.',
          },
          {
            id: 'audit',
            label: 'TRACEABILITY',
            explanation:
              'Important security-sensitive actions can be recorded so teams can investigate what happened.',
            example:
              'Changes to sensitive account settings can generate an auditable event.',
          },
        ],

        closing:
          'Security architecture is about controlling identity, access and boundaries while limiting the impact of mistakes or compromise.',
      },
    },

    {
      id: 'mc07-s06-security-simulation',
      type: 'simulation',
      title: 'Match the Security Control',
      description:
        'Connect common security situations with the architecture control that addresses them.',

      simulation: {
        instruction:
          'Match each security situation with the most appropriate architecture control.',

        items: [
          {
            id: 'identity',
            label: 'The platform must verify who a user is.',
            description:
              'The system needs to establish identity before protected access.',
            correctTargetId: 'authentication-target',
          },
          {
            id: 'access',
            label: 'A student must only view their own result.',
            description:
              'The identity is known, but access to a resource must be controlled.',
            correctTargetId: 'authorization-target',
          },
          {
            id: 'permissions',
            label: 'A service only needs to read analytics data.',
            description:
              'The service should not receive unrelated write or administrative permissions.',
            correctTargetId: 'least-target',
          },
          {
            id: 'secret',
            label: 'A production API key must not be committed to Git.',
            description:
              'The credential needs secure runtime management.',
            correctTargetId: 'secret-target',
          },
        ],

        targets: [
          {
            id: 'authentication-target',
            label: 'AUTHENTICATION',
            description:
              'Verify the identity of a user or service.',
          },
          {
            id: 'authorization-target',
            label: 'AUTHORIZATION',
            description:
              'Control which resources and actions an identity can access.',
          },
          {
            id: 'least-target',
            label: 'LEAST PRIVILEGE',
            description:
              'Grant only the permissions required for the responsibility.',
          },
          {
            id: 'secret-target',
            label: 'SECRET MANAGEMENT',
            description:
              'Keep credentials outside source code and provide them securely at runtime.',
          },
        ],

        successMessage:
          'Correct. Each control addresses a different security concern. Strong architecture connects the control directly to the risk or boundary.',

        failureMessage:
          'First determine whether the problem concerns identity, access, excessive permissions or credential management.',
      },
    },

    {
      id: 'mc07-s06-security-question',
      type: 'question',
      title: 'Security Trade-off Check',
      description:
        'Check whether you can distinguish authentication, authorization and least privilege.',

      question: {
        id: 'mc07-s06-security',
        type: 'single-choice',
        question:
          'A reporting service only needs to read analytics data. Which decision best follows the principle of least privilege?',
        options: [
          {
            id: 'readonly',
            text:
              'Give the reporting service only the read permissions required for analytics data.',
            correct: true,
          },
          {
            id: 'admin',
            text:
              'Give the reporting service administrator access to the complete production system.',
            correct: false,
          },
          {
            id: 'shared',
            text:
              'Use one unrestricted shared credential for every service.',
            correct: false,
          },
          {
            id: 'future',
            text:
              'Give the service write access to unrelated records in case it needs them later.',
            correct: false,
          },
        ],

        explanation:
          'Least privilege means granting only the permissions required for the current responsibility. Unnecessary permissions increase the potential impact of compromise or accidental misuse.',
      },
    },
  ],
}