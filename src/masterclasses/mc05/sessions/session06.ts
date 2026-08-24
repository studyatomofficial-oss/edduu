import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session06: SessionDefinition = {
  id: 'mc05-session-06',
  number: 6,
  stage: 'discover',
  title: 'Authentication & Authorization',
  objective:
    'Understand how backend systems establish identity, authenticate users, control access and protect protected resources.',

  experiences: [
    {
      id: 'mc05-s06-security-lesson',
      type: 'lesson',
      title: 'Who are you, and what are you allowed to do?',
      description:
        'Understand the difference between authentication and authorization and how backend systems use them to protect resources.',

      lesson: {
        opening:
          'A backend should not assume that every request is allowed. Before providing protected information or performing sensitive operations, the system needs to establish who the requester is and whether that requester has permission to perform the requested action.',

        sections: [
          {
            heading: 'Authentication identifies the requester',
            explanation:
              'Authentication answers the question: who are you?',
            example:
              'A user signs in with credentials and the system verifies the account identity.',
          },
          {
            heading: 'Authorization determines permission',
            explanation:
              'Authorization answers the question: what are you allowed to do?',
            example:
              "A student may view their own courses but may not delete another student's account.",
          },
          {
            heading: 'Credentials must be protected',
            explanation:
              'Authentication systems should handle credentials securely rather than exposing sensitive authentication information.',
            example:
              'A backend should verify credentials using secure authentication mechanisms instead of storing plain-text passwords.',
          },
          {
            heading: 'Sessions and tokens carry authentication state',
            explanation:
              'After successful authentication, applications commonly use a session or token to represent the authenticated state in later requests.',
            example:
              'A client sends an access token with subsequent API requests.',
          },
          {
            heading: 'Authorization is checked on protected operations',
            explanation:
              'A valid identity does not automatically mean the user can perform every operation.',
            example:
              'A normal student account can read course information but an administrator may be required to create or delete courses.',
          },
          {
            heading: 'Roles and permissions can express access rules',
            explanation:
              'Backend systems can represent authorization through roles, permissions or more detailed access policies.',
            example:
              'Student, instructor and administrator roles can have different API permissions.',
          },
          {
            heading: 'Security belongs across the request flow',
            explanation:
              'Authentication and authorization checks should happen before protected business operations are performed.',
            example:
              'The backend verifies the access token and required permission before allowing a course-management operation.',
          },
          {
            heading: 'Authentication and authorization are different',
            explanation:
              'Authentication establishes identity while authorization determines allowed actions.',
            example:
              'Logging in proves who you are; permission checks determine which resources you can access.',
          },
        ],

        realWorldConnection:
          'Authentication and authorization are foundational backend concerns for applications handling private data, financial operations, administrative functions and other protected resources.',

        keyIdea:
          'Authentication answers “Who are you?” Authorization answers “What are you allowed to do?” A secure backend uses both concepts to protect resources and operations.',

        recap: [
          'Authentication establishes identity.',
          'Authorization determines permission.',
          'Credentials must be handled securely.',
          'Sessions or tokens can carry authenticated state.',
          'Protected operations require authorization checks.',
          'Roles and permissions can express access rules.',
          'Authentication and authorization are different security concepts.',
        ],
      },
    },

    {
      id: 'mc05-s06-security-animation',
      type: 'animation',
      title: 'Watch identity become controlled access',
      description:
        'Follow a protected request from login through authentication, authorization and resource access.',

      animation: {
        visual: 'security',

        opening:
          'A protected backend request passes through identity and permission checks before the application allows access to a protected resource.',

        parts: [
          {
            id: 'user',
            label: 'USER',
            explanation:
              'The user begins by attempting to access a protected application capability.',
            example:
              'A student opens the course dashboard.',
          },
          {
            id: 'login',
            label: 'LOGIN',
            explanation:
              'The user provides credentials through the authentication process.',
            example:
              'The student submits account credentials.',
          },
          {
            id: 'authentication',
            label: 'AUTHENTICATION',
            explanation:
              'The backend verifies the identity represented by the credentials.',
            example:
              'The backend verifies the account identity.',
          },
          {
            id: 'token-session',
            label: 'TOKEN / SESSION',
            explanation:
              'Successful authentication can establish state used for subsequent requests.',
            example:
              'The client receives an access token.',
          },
          {
            id: 'authorization',
            label: 'AUTHORIZATION',
            explanation:
              'The backend checks whether the authenticated identity has permission for the requested operation.',
            example:
              'The backend checks whether the student can access the requested course.',
          },
          {
            id: 'resource',
            label: 'PROTECTED RESOURCE',
            explanation:
              'Only an authorized request should reach the protected operation or resource.',
            example:
              'The student receives the course information they are permitted to access.',
          },
        ],

        closing:
          'Authentication establishes identity. Authorization controls permission. Both checks are important when backend systems protect resources and operations.',
      },
    },

    {
      id: 'mc05-s06-security-simulation',
      type: 'simulation',
      title: 'Separate authentication from authorization',
      description:
        'Match security actions to the correct identity or permission concept.',

      simulation: {
        instruction:
          'Connect each action to the correct security responsibility.',

        items: [
          {
            id: 'verify-identity',
            label: 'Verify the user credentials',
            description:
              'Determine whether the requester is the claimed identity.',
            correctTargetId: 'authentication-target',
          },
          {
            id: 'issue-state',
            label: 'Provide an access token',
            description:
              'Represent authenticated state for subsequent requests.',
            correctTargetId: 'session-target',
          },
          {
            id: 'check-permission',
            label: 'Check whether the user can delete a course',
            description:
              'Determine whether the authenticated identity has the required permission.',
            correctTargetId: 'authorization-target',
          },
          {
            id: 'allow',
            label: 'Permit the protected operation',
            description:
              'Allow access after required security checks succeed.',
            correctTargetId: 'resource-target',
          },
        ],

        targets: [
          {
            id: 'authentication-target',
            label: 'Authentication',
            description:
              'Establishes who the requester is.',
          },
          {
            id: 'session-target',
            label: 'Token / Session',
            description:
              'Carries authenticated state between requests.',
          },
          {
            id: 'authorization-target',
            label: 'Authorization',
            description:
              'Determines what the authenticated requester is allowed to do.',
          },
          {
            id: 'resource-target',
            label: 'Protected Resource',
            description:
              'The operation or data being protected.',
          },
        ],

        successMessage:
          'Excellent. You correctly separated identity verification from permission checks.',

        failureMessage:
          'Remember: authentication asks who you are, while authorization asks what you are allowed to do.',
      },
    },

    {
      id: 'mc05-s06-security-question',
      type: 'question',
      title: 'Security understanding check',
      description:
        'Check whether you understand authentication versus authorization.',

      question: {
        id: 'mc05-s06-security',
        type: 'single-choice',
        question:
          'A user has successfully logged in, but the backend checks whether that user is allowed to delete a course. What concept is being applied?',

        options: [
          {
            id: 'authorization',
            text: 'Authorization',
            correct: true,
          },
          {
            id: 'authentication',
            text: 'Authentication',
            correct: false,
          },
          {
            id: 'compression',
            text: 'Data compression',
            correct: false,
          },
          {
            id: 'rendering',
            text: 'Frontend rendering',
            correct: false,
          },
        ],

        explanation:
          'The user identity has already been established. Checking whether that identity has permission to perform an operation is authorization.',

        hints: [
          'The user is already logged in.',
          'The question is now about permission to perform an action.',
        ],
      },
    },
  ],
}