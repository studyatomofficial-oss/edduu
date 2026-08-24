import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session02: SessionDefinition = {
  id: 'mc05-session-02',
  number: 2,
  stage: 'discover',
  title: 'How APIs Work',
  objective:
    'Understand APIs as communication contracts that allow one software system to request capabilities or data from another system.',

  experiences: [
    {
      id: 'mc05-s02-api-lesson',
      type: 'lesson',
      title: 'How do software systems talk to each other?',
      description:
        'Understand the role of APIs as a communication layer between software components and services.',

      lesson: {
        opening:
          'Software systems often need information or capabilities that live somewhere else. An API provides a defined way for one software component to request something from another component without needing to know how the internal implementation works.',

        sections: [
          {
            heading: 'An API is a communication contract',
            explanation:
              'An API defines how one system can request data or an operation from another system.',
            example:
              'A learning application can request a student profile from a backend API.',
          },
          {
            heading: 'The client sends a request',
            explanation:
              'The client is the system making the API request.',
            example:
              'A browser sends a request asking for the courses enrolled by a student.',
          },
          {
            heading: 'The API exposes a capability',
            explanation:
              'An API provides a controlled interface through which a client can request specific information or operations.',
            example:
              'A course API may expose an operation for retrieving a student course list.',
          },
          {
            heading: 'The backend performs the work',
            explanation:
              'The API request is processed by backend logic that may validate the request, apply rules and access data or services.',
            example:
              'The backend checks the student identity and retrieves the relevant enrollment records.',
          },
          {
            heading: 'The server returns a response',
            explanation:
              'After processing the request, the server sends a response containing the result or information about what happened.',
            example:
              'The API returns structured course information to the browser.',
          },
          {
            heading: 'APIs hide internal implementation',
            explanation:
              'A client normally needs to know how to use the API, not how the backend internally stores data or implements its business rules.',
            example:
              'A frontend can request course data without directly accessing the database.',
          },
        ],

        realWorldConnection:
          'APIs allow web applications, mobile applications, internal services and external platforms to communicate through stable interfaces while keeping internal implementation details behind the service boundary.',

        keyIdea:
          'An API defines how software systems communicate. A client sends a request, backend logic processes it, and the service returns a response according to the API contract.',

        recap: [
          'An API is a communication interface between software systems.',
          'A client sends an API request.',
          'Backend logic processes the request.',
          'The service can access data or other services.',
          'The API returns a response to the client.',
          'The client does not need to know the backend internal implementation.',
        ],
      },
    },

    {
      id: 'mc05-s02-api-animation',
      type: 'animation',
      title: 'Watch an API request and response',
      description:
        'Follow a request from a client to an API and back again.',

      animation: {
        visual: 'api',

        opening:
          'An API creates a controlled communication path between a client and a backend service. The client asks for something, the API receives the request, backend logic processes it, and a response travels back to the client.',

        parts: [
          {
            id: 'client',
            label: 'CLIENT',
            explanation:
              'The client starts the communication by requesting data or an operation.',
            example:
              'A browser requests a student course list.',
          },
          {
            id: 'api-request',
            label: 'API REQUEST',
            explanation:
              'The client sends a structured request to an API operation.',
            example:
              'GET /students/101/courses',
          },
          {
            id: 'api-endpoint',
            label: 'API ENDPOINT',
            explanation:
              'The endpoint defines the API operation that receives the request.',
            example:
              '/students/{studentId}/courses',
          },
          {
            id: 'backend',
            label: 'BACKEND PROCESSING',
            explanation:
              'Backend logic validates the request, applies rules and obtains the required information.',
            example:
              'The backend checks the student and retrieves enrollment data.',
          },
          {
            id: 'api-response',
            label: 'API RESPONSE',
            explanation:
              'The service returns the result in a defined response format.',
            example:
              'A JSON response containing the student courses.',
          },
          {
            id: 'client-result',
            label: 'CLIENT RESULT',
            explanation:
              'The client uses the response to perform the next action or update its interface.',
            example:
              'The browser displays the enrolled courses.',
          },
        ],

        closing:
          'The API boundary allows clients to communicate with backend capabilities through a defined contract without directly depending on the backend internal implementation.',
      },
    },

    {
      id: 'mc05-s02-api-simulation',
      type: 'simulation',
      title: 'Trace an API call',
      description:
        'Connect each API stage to the correct part of the request-response journey.',

      simulation: {
        instruction:
          'Connect each action to the stage responsible for it.',

        items: [
          {
            id: 'client-request',
            label: 'Request the course list',
            description:
              'The client asks the service for information.',
            correctTargetId: 'client-target',
          },
          {
            id: 'endpoint',
            label: 'Receive the request at the course endpoint',
            description:
              'The API endpoint receives the request.',
            correctTargetId: 'endpoint-target',
          },
          {
            id: 'process',
            label: 'Validate and process the request',
            description:
              'Backend logic performs the required work.',
            correctTargetId: 'backend-target',
          },
          {
            id: 'response',
            label: 'Return course data',
            description:
              'The API sends the result back to the client.',
            correctTargetId: 'response-target',
          },
        ],

        targets: [
          {
            id: 'client-target',
            label: 'Client',
            description:
              'The software system making the API request.',
          },
          {
            id: 'endpoint-target',
            label: 'API Endpoint',
            description:
              'The defined API operation receiving the request.',
          },
          {
            id: 'backend-target',
            label: 'Backend Processing',
            description:
              'The logic that validates and processes the request.',
          },
          {
            id: 'response-target',
            label: 'API Response',
            description:
              'The result returned to the client.',
          },
        ],

        successMessage:
          'Excellent. You traced the API from client request through endpoint and backend processing to the response.',

        failureMessage:
          'Follow the communication path: who asks, which API operation receives the request, who performs the work, and what comes back?',
      },
    },

    {
      id: 'mc05-s02-api-question',
      type: 'question',
      title: 'API understanding check',
      description:
        'Check whether you understand the purpose of an API.',

      question: {
        id: 'mc05-s02-api',
        type: 'single-choice',
        question:
          'Why is an API useful between a client and a backend service?',

        options: [
          {
            id: 'contract',
            text: 'It provides a defined way for the client to request data or operations from the service',
            correct: true,
          },
          {
            id: 'database-access',
            text: 'It requires every client to directly access the database',
            correct: false,
          },
          {
            id: 'hardware',
            text: 'It controls the physical hardware of the client computer',
            correct: false,
          },
          {
            id: 'screen',
            text: 'It automatically improves the client display resolution',
            correct: false,
          },
        ],

        explanation:
          'An API provides a controlled communication interface so clients can request capabilities or data without directly depending on the service internal implementation.',

        hints: [
          'Think about communication between software systems.',
          'The client should use a defined interface rather than directly accessing internal implementation.',
        ],
      },
    },
  ],
}