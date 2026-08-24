import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session03: SessionDefinition = {
  id: 'mc05-session-03',
  number: 3,
  stage: 'discover',
  title: 'HTTP, Requests & Responses',
  objective:
    'Understand how HTTP carries requests and responses between clients and servers, including methods, URLs, headers, bodies and status codes.',

  experiences: [
    {
      id: 'mc05-s03-http-lesson',
      type: 'lesson',
      title: 'How does an HTTP conversation work?',
      description:
        'Understand the structure of HTTP requests and responses and the information they carry.',

      lesson: {
        opening:
          'When a browser or application communicates with a backend over the web, it commonly uses HTTP. HTTP provides a standard way for a client to send a request and for a server to return a response.',

        sections: [
          {
            heading: 'A request starts the conversation',
            explanation:
              'The client sends an HTTP request when it needs information or wants the server to perform an operation.',
            example:
              'A browser requests a student profile from a backend service.',
          },
          {
            heading: 'The method describes the intended operation',
            explanation:
              'HTTP methods communicate what the client wants to do with a resource.',
            example:
              'GET commonly retrieves information, while POST commonly creates a new resource or submits data.',
          },
          {
            heading: 'The URL identifies the destination',
            explanation:
              'The request URL identifies the server and resource or operation being requested.',
            example:
              'GET /students/101 identifies a request for student 101.',
          },
          {
            heading: 'Headers carry additional information',
            explanation:
              'HTTP headers provide metadata about the request or response.',
            example:
              'A request can include an Authorization header or identify the content type being sent.',
          },
          {
            heading: 'A body can carry data',
            explanation:
              'Some requests contain a body that carries structured information to the server.',
            example:
              'A POST request can contain JSON describing a new student record.',
          },
          {
            heading: 'The response reports the result',
            explanation:
              'The server returns an HTTP response containing a status code and, when appropriate, headers and response data.',
            example:
              'A successful request can return status 200 with student information in the response body.',
          },
          {
            heading: 'Status codes communicate outcomes',
            explanation:
              'HTTP status codes allow the client to understand whether a request succeeded or encountered a problem.',
            example:
              '200 indicates success, 404 indicates that a requested resource was not found, and 401 indicates that authentication is required or invalid.',
          },
        ],

        realWorldConnection:
          'HTTP is the foundation of communication for many web APIs and backend services. Understanding requests and responses makes it easier to reason about debugging, API integration and system behavior.',

        keyIdea:
          'An HTTP request tells a server what the client wants, while an HTTP response tells the client what happened. Methods, URLs, headers, bodies and status codes provide the structure for that communication.',

        recap: [
          'The client sends an HTTP request.',
          'The method describes the intended operation.',
          'The URL identifies the destination.',
          'Headers carry metadata.',
          'A request body can carry data.',
          'The server returns an HTTP response.',
          'Status codes communicate the result.',
        ],
      },
    },

    {
      id: 'mc05-s03-http-animation',
      type: 'animation',
      title: 'Watch an HTTP request become a response',
      description:
        'Follow the major parts of an HTTP request and response through a client-server exchange.',

      animation: {
        visual: 'api',

        opening:
          'An HTTP exchange has a clear structure. The client creates a request, the server processes it, and the server returns a response containing information about the result.',

        parts: [
          {
            id: 'client',
            label: 'CLIENT',
            explanation:
              'The client begins communication by sending an HTTP request.',
            example:
              'A browser requests student 101.',
          },
          {
            id: 'request',
            label: 'HTTP REQUEST',
            explanation:
              'The request carries the method, URL and other information needed by the server.',
            example:
              'GET /students/101',
          },
          {
            id: 'request-details',
            label: 'METHOD • URL • HEADERS • BODY',
            explanation:
              'Different request components communicate the operation, destination, metadata and optional data.',
            example:
              'GET + URL + Authorization header.',
          },
          {
            id: 'server',
            label: 'SERVER',
            explanation:
              'The server receives and processes the HTTP request.',
            example:
              'Backend logic validates the request and retrieves student data.',
          },
          {
            id: 'response',
            label: 'HTTP RESPONSE',
            explanation:
              'The server sends a response containing the outcome of the operation.',
            example:
              '200 OK with a JSON response body.',
          },
          {
            id: 'response-details',
            label: 'STATUS • HEADERS • BODY',
            explanation:
              'The response communicates the outcome, metadata and optional returned data.',
            example:
              '200 + Content-Type: application/json + student data.',
          },
          {
            id: 'client-result',
            label: 'CLIENT RESULT',
            explanation:
              'The client interprets the response and updates its behavior or interface.',
            example:
              'The browser displays the student profile.',
          },
        ],

        closing:
          'HTTP provides the standard structure that allows clients and servers to communicate through predictable requests and responses.',
      },
    },

    {
      id: 'mc05-s03-http-simulation',
      type: 'simulation',
      title: 'Build an HTTP request',
      description:
        'Match each request component with the role it performs in an HTTP exchange.',

      simulation: {
        instruction:
          'Connect each HTTP component to its correct responsibility.',

        items: [
          {
            id: 'method',
            label: 'GET',
            description:
              'Indicates that the client wants to retrieve information.',
            correctTargetId: 'method-target',
          },
          {
            id: 'url',
            label: '/students/101',
            description:
              'Identifies the requested resource.',
            correctTargetId: 'url-target',
          },
          {
            id: 'header',
            label: 'Authorization',
            description:
              'Carries metadata related to the request.',
            correctTargetId: 'header-target',
          },
          {
            id: 'status',
            label: '200 OK',
            description:
              'Communicates that the operation succeeded.',
            correctTargetId: 'status-target',
          },
        ],

        targets: [
          {
            id: 'method-target',
            label: 'HTTP Method',
            description:
              'Describes the intended operation.',
          },
          {
            id: 'url-target',
            label: 'URL',
            description:
              'Identifies the destination resource.',
          },
          {
            id: 'header-target',
            label: 'Header',
            description:
              'Carries request or response metadata.',
          },
          {
            id: 'status-target',
            label: 'Status Code',
            description:
              'Communicates the outcome of the operation.',
          },
        ],

        successMessage:
          'Excellent. You correctly identified the major components of an HTTP exchange.',

        failureMessage:
          'Think about what each piece tells the server: what operation, which resource, what metadata, and what happened afterward?',
      },
    },

    {
      id: 'mc05-s03-http-question',
      type: 'question',
      title: 'HTTP understanding check',
      description:
        'Check whether you understand the request-response model.',

      question: {
        id: 'mc05-s03-http',
        type: 'single-choice',
        question:
          'What does an HTTP status code primarily communicate?',

        options: [
          {
            id: 'outcome',
            text: 'The outcome of the HTTP request',
            correct: true,
          },
          {
            id: 'screen',
            text: 'The physical size of the client screen',
            correct: false,
          },
          {
            id: 'database',
            text: 'The number of tables in the server database',
            correct: false,
          },
          {
            id: 'keyboard',
            text: 'The keyboard layout used by the client',
            correct: false,
          },
        ],

        explanation:
          'HTTP status codes communicate the result of a request, such as success, a missing resource or an authentication problem.',

        hints: [
          'Think about what the server needs to tell the client after processing a request.',
          'A status code describes the outcome of the HTTP operation.',
        ],
      },
    },
  ],
}