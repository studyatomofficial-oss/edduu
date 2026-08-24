import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session01: SessionDefinition = {
  id: 'mc05-session-01',
  number: 1,
  stage: 'discover',
  title: 'What Is a Backend?',
  objective:
    'Understand what a backend does, why applications need one, and how the frontend, backend, database and external services work together.',

  experiences: [
    {
      id: 'mc05-s01-backend-lesson',
      type: 'lesson',
      title: 'What happens behind the screen?',
      description:
        'Understand the role of a backend and how it supports the application experience users see.',

      lesson: {
        opening:
          'When you open an application, you see a screen, buttons and information. But the visible interface is only one part of the system. The backend is the part that receives requests, applies rules, works with data and services, and sends results back to the application.',

        sections: [
          {
            heading: 'The frontend is what the user sees',
            explanation:
              'The frontend provides the interface through which a user interacts with an application.',
            example:
              'A student opens a course dashboard and sees courses, lessons, progress and buttons.',
          },
          {
            heading: 'The backend works behind the interface',
            explanation:
              'The backend receives requests from the frontend and performs the work required to produce a useful result.',
            example:
              'When a student opens a course page, the backend can retrieve the student enrollment and course information.',
          },
          {
            heading: 'The backend contains application logic',
            explanation:
              'Backend systems apply rules that determine what the application should do with a request.',
            example:
              'A backend can check whether a student is enrolled before allowing access to a course.',
          },
          {
            heading: 'The backend works with data',
            explanation:
              'Backend applications commonly read and change information stored in databases.',
            example:
              'A backend can retrieve a student profile from a database and return the required fields to the frontend.',
          },
          {
            heading: 'Backends can use other services',
            explanation:
              'A backend may communicate with external services such as payment systems, email providers, search systems or other APIs.',
            example:
              'An education platform may use a payment service to confirm whether a course purchase succeeded.',
          },
          {
            heading: 'The backend sends a result back',
            explanation:
              'After processing the request, the backend returns information that the frontend can use to update the user interface.',
            example:
              'The frontend receives course data and displays the student dashboard.',
          },
        ],

        realWorldConnection:
          'Most modern applications separate the user interface from backend services so that business rules, data access, security and integrations can be managed independently of the presentation layer.',

        keyIdea:
          'A backend is the part of an application that processes requests, applies business rules, works with data and services, and returns results that the frontend can present to users.',

        recap: [
          'The frontend is the user-facing part of an application.',
          'The backend processes requests behind the interface.',
          'Backend logic applies application and business rules.',
          'Backends commonly interact with databases and external services.',
          'The backend returns results that the frontend can present.',
        ],
      },
    },

    {
      id: 'mc05-s01-backend-animation',
      type: 'animation',
      title: 'Watch a request travel through a backend',
      description:
        'Follow a user action from the frontend into the backend and back to the user.',

      animation: {
        visual: 'architecture',

        opening:
          'A user action starts a journey through multiple parts of an application. The frontend creates the request, the backend processes it, data and services are consulted when necessary, and the result returns to the user interface.',

        parts: [
          {
            id: 'user',
            label: 'USER',
            explanation:
              'The user starts an action that requires information or a backend operation.',
            example:
              'A student opens the My Courses page.',
          },
          {
            id: 'frontend',
            label: 'FRONTEND',
            explanation:
              'The frontend captures the user action and sends a request to the backend.',
            example:
              'The browser requests the student course information.',
          },
          {
            id: 'backend',
            label: 'BACKEND',
            explanation:
              'The backend receives the request and decides what work needs to happen.',
            example:
              'The backend identifies the student and requests the required course data.',
          },
          {
            id: 'data-services',
            label: 'DATA & SERVICES',
            explanation:
              'The backend can communicate with databases and external services to complete the operation.',
            example:
              'The database returns the student enrollment and course records.',
          },
          {
            id: 'response',
            label: 'RESPONSE',
            explanation:
              'The backend sends the processed result back toward the frontend.',
            example:
              'The backend returns the student course information.',
          },
          {
            id: 'screen',
            label: 'USER SCREEN',
            explanation:
              'The frontend uses the response to update what the user sees.',
            example:
              'The student sees the list of enrolled courses.',
          },
        ],

        closing:
          'The backend is not simply a hidden server. It is a processing layer that connects the user-facing application with data, business rules and other services.',
      },
    },

    {
      id: 'mc05-s01-backend-simulation',
      type: 'simulation',
      title: 'Trace the backend journey',
      description:
        'Connect each part of an application request to the work it performs.',

      simulation: {
        instruction:
          'Connect each stage of the request journey to its correct role.',

        items: [
          {
            id: 'frontend-request',
            label: 'Send the course request',
            description:
              'The user-facing application sends the required request.',
            correctTargetId: 'frontend-target',
          },
          {
            id: 'backend-process',
            label: 'Apply application rules',
            description:
              'The backend decides what work should be performed.',
            correctTargetId: 'backend-target',
          },
          {
            id: 'data-read',
            label: 'Read enrollment data',
            description:
              'The backend obtains information required to answer the request.',
            correctTargetId: 'data-target',
          },
          {
            id: 'return-result',
            label: 'Return course information',
            description:
              'The processed result is returned to the application.',
            correctTargetId: 'response-target',
          },
        ],

        targets: [
          {
            id: 'frontend-target',
            label: 'Frontend',
            description:
              'The user-facing application that starts the request.',
          },
          {
            id: 'backend-target',
            label: 'Backend',
            description:
              'The processing layer that applies application rules.',
          },
          {
            id: 'data-target',
            label: 'Data / Services',
            description:
              'Information or external services used by the backend.',
          },
          {
            id: 'response-target',
            label: 'Response',
            description:
              'The result returned to the application.',
          },
        ],

        successMessage:
          'Excellent. You traced the request from the frontend through backend processing and data access to the final response.',

        failureMessage:
          'Think about the journey: who starts the request, who processes it, where the required data comes from, and what comes back?',
      },
    },

    {
      id: 'mc05-s01-backend-question',
      type: 'question',
      title: 'Backend understanding check',
      description:
        'Check whether you understand the role of the backend.',

      question: {
        id: 'mc05-s01-backend',
        type: 'single-choice',
        question:
          'What is one of the primary responsibilities of a backend application?',

        options: [
          {
            id: 'processing',
            text: 'Process requests, apply application rules and work with data or services',
            correct: true,
          },
          {
            id: 'screen',
            text: 'Only control the physical resolution of the user screen',
            correct: false,
          },
          {
            id: 'keyboard',
            text: 'Replace the computer keyboard',
            correct: false,
          },
          {
            id: 'internet',
            text: 'Automatically make every internet connection faster',
            correct: false,
          },
        ],

        explanation:
          'A backend processes requests, applies application logic and commonly interacts with databases and external services before returning a result.',

        hints: [
          'Think about what happens behind the user interface.',
          'A backend performs application work rather than controlling physical hardware.',
        ],
      },
    },
  ],
}