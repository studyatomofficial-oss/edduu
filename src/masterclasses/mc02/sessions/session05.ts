import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc02Session05: SessionDefinition = {
  id: 'mc02-session-05',
  number: 5,
  stage: 'guided',
  title: 'How Does the Frontend Talk to the Backend?',
  objective:
    'Understand client-server communication, APIs, HTTP requests and responses, JSON and the basic responsibility boundary between frontend and backend.',
  experiences: [
    {
      id: 'mc02-s05-api-lesson',
      type: 'lesson',
      title: 'How does an application get data?',
      description:
        'The frontend can display information, but real applications often need data and operations from a backend system.',
      lesson: {
        opening:
          'A frontend cannot contain every piece of information an application will ever need. At some point it needs to communicate with another system.',
        sections: [
          {
            heading: 'The frontend acts as a client',
            explanation:
              'The frontend running in the browser can act as a client that requests data or operations from a server.',
            example:
              'A dashboard can ask the backend for the current user profile.',
          },
          {
            heading: 'An API provides a communication boundary',
            explanation:
              'An API defines how one software system can request information or operations from another system.',
            example:
              'A frontend can call a user-profile API to retrieve profile data.',
          },
          {
            heading: 'HTTP carries requests and responses',
            explanation:
              'HTTP provides a standard request-response communication model used extensively by web applications.',
            example:
              'The frontend sends an HTTP request and the server returns an HTTP response.',
          },
          {
            heading: 'JSON is a common data format',
            explanation:
              'JSON provides a structured text representation commonly used to exchange data between web clients and servers.',
            example:
              'A profile response can contain a JSON object with a user name and identifier.',
          },
          {
            heading: 'The backend owns server-side responsibilities',
            explanation:
              'The backend can validate requests, apply business logic, communicate with databases and return results.',
            example:
              'A backend can check whether a requested student exists before returning profile information.',
          },
          {
            heading: 'The database should not be exposed directly to the browser',
            explanation:
              'A backend normally provides the controlled boundary between a browser and persistent application data.',
            example:
              'The browser calls an API rather than connecting directly to the production database.',
          },
        ],
        realWorldConnection:
          'Almost every modern application uses some form of client-server communication. AI applications also rely on APIs to connect user interfaces with models, tools, databases and other services.',
        keyIdea:
          'A frontend communicates with backend systems through APIs, commonly using HTTP requests and responses with structured data such as JSON.',
        recap: [
          'The frontend can act as a client.',
          'An API defines a communication boundary.',
          'HTTP commonly carries web requests and responses.',
          'JSON is a common data exchange format.',
          'The backend handles server-side logic.',
          'The browser normally reaches persistent data through backend services.',
        ],
      },
    },
    {
      id: 'mc02-s05-api-animation',
      type: 'animation',
      title: 'Watch an API request travel',
      description:
        'Follow a request from the browser to the backend and back again.',
      animation: {
        opening:
          'The user needs information that does not live inside the browser. Follow the request across the application boundary.',
        parts: [
          {
            id: 'browser',
            label: 'BROWSER',
            explanation:
              'The frontend running in the browser starts the interaction.',
            example:
              'The user opens a profile screen.',
          },
          {
            id: 'request',
            label: 'HTTP REQUEST',
            explanation:
              'The frontend sends a request to the backend API.',
            example:
              'The request asks for profile data.',
          },
          {
            id: 'server',
            label: 'SERVER',
            explanation:
              'The backend receives the request and performs server-side work.',
            example:
              'The backend validates the request and retrieves the required data.',
          },
          {
            id: 'response',
            label: 'HTTP RESPONSE',
            explanation:
              'The backend sends the result back to the client.',
            example:
              'The response can contain structured JSON data.',
          },
          {
            id: 'browser-result',
            label: 'FRONTEND',
            explanation:
              'The frontend processes the response and updates the interface.',
            example:
              'The profile information appears on the screen.',
          },
        ],
        closing:
          'The browser and backend are separate responsibilities connected through an API boundary.',
      },
    },
    {
      id: 'mc02-s05-api-sequencing',
      type: 'sequencing',
      title: 'Follow an API request',
      description:
        'Arrange the complete client-server request flow.',
      sequencing: {
        instruction:
          'Use the arrows to arrange the steps in the order they happen.',
        items: [
          {
            id: 'frontend',
            label: 'Frontend creates a request',
            description: 'The browser-side application needs data.',
            correctPosition: 0,
          },
          {
            id: 'api',
            label: 'Request reaches the API',
            description: 'The backend receives the request.',
            correctPosition: 1,
          },
          {
            id: 'backend',
            label: 'Backend performs server-side work',
            description: 'The backend validates and processes the request.',
            correctPosition: 2,
          },
          {
            id: 'response',
            label: 'Backend returns a response',
            description: 'The result travels back to the client.',
            correctPosition: 3,
          },
        ],
      },
    },
    {
      id: 'mc02-s05-api-question',
      type: 'question',
      title: 'API boundary check',
      description:
        'Check your understanding of frontend and backend responsibilities.',
      question: {
        id: 'mc02-s05-api',
        type: 'single-choice',
        question:
          'In a typical web application, which component should normally provide the controlled path between the browser and the production database?',
        options: [
          {
            id: 'backend',
            text: 'Backend service',
            correct: true,
          },
          {
            id: 'browser',
            text: 'Browser directly',
            correct: false,
          },
          {
            id: 'css',
            text: 'CSS',
            correct: false,
          },
          {
            id: 'cdn',
            text: 'CSS file',
            correct: false,
          },
        ],
        explanation:
          'The backend normally provides the controlled application boundary, applying business logic and accessing persistent data on behalf of the frontend.',
        hints: [
          'Think about where business logic and database access normally live.',
          'The browser should not normally connect directly to the production database.',
        ],
      },
    },
  ],
}