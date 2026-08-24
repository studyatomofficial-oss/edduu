import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session04: SessionDefinition = {
  id: 'mc05-session-04',
  number: 4,
  stage: 'discover',
  title: 'REST APIs & Endpoints',
  objective:
    'Understand resources, endpoints, HTTP methods and CRUD operations as the building blocks of common REST-style APIs.',

  experiences: [
    {
      id: 'mc05-s04-rest-lesson',
      type: 'lesson',
      title: 'How are REST APIs organized?',
      description:
        'Understand how APIs represent resources and expose operations through endpoints and HTTP methods.',

      lesson: {
        opening:
          'A backend can expose many different capabilities. REST-style API design gives those capabilities a consistent structure by thinking in terms of resources and using HTTP methods to describe common operations.',

        sections: [
          {
            heading: 'An API can expose resources',
            explanation:
              'A resource represents a meaningful entity or collection that the API manages.',
            example:
              'A learning platform can expose students, courses and enrollments as resources.',
          },
          {
            heading: 'An endpoint provides a destination',
            explanation:
              'An endpoint is a defined API path through which a client can interact with a resource.',
            example:
              '/students can represent the student collection.',
          },
          {
            heading: 'HTTP methods describe operations',
            explanation:
              'HTTP methods can communicate what operation the client wants to perform on a resource.',
            example:
              'GET /students retrieves students while POST /students can create a student.',
          },
          {
            heading: 'CRUD describes common data operations',
            explanation:
              'CRUD stands for Create, Read, Update and Delete, which represent common operations on data.',
            example:
              'POST creates, GET reads, PUT or PATCH updates, and DELETE removes a resource.',
          },
          {
            heading: 'Resource paths can identify individual records',
            explanation:
              'A path can include an identifier when the client needs to address one particular resource.',
            example:
              '/students/101 identifies student 101.',
          },
          {
            heading: 'Good API design creates consistency',
            explanation:
              'Consistent resource names, methods and response behavior make APIs easier for clients and teams to understand and maintain.',
            example:
              'A consistent course API can use /courses and /courses/{courseId} rather than unrelated action names for every operation.',
          },
          {
            heading: 'REST is a design style, not a programming language',
            explanation:
              'REST provides architectural principles for designing networked resources and interactions.',
            example:
              'A backend can implement REST-style endpoints using many different programming languages and frameworks.',
          },
        ],

        realWorldConnection:
          'REST-style APIs are widely used for web and mobile applications because resource-oriented endpoints and standard HTTP methods provide a familiar communication model across teams and systems.',

        keyIdea:
          'REST-style API design organizes capabilities around resources and uses HTTP methods to express operations such as creating, reading, updating and deleting those resources.',

        recap: [
          'Resources represent meaningful entities or collections.',
          'Endpoints provide paths for interacting with resources.',
          'HTTP methods describe intended operations.',
          'CRUD means Create, Read, Update and Delete.',
          'Resource identifiers address individual records.',
          'Consistent API design improves usability and maintainability.',
        ],
      },
    },

    {
      id: 'mc05-s04-rest-animation',
      type: 'animation',
      title: 'Watch a REST resource become an API operation',
      description:
        'Follow how a resource, endpoint and HTTP method combine into a REST-style API request.',

      animation: {
        visual: 'api',

        opening:
          'REST-style APIs organize backend capabilities around resources. The endpoint identifies the resource, while the HTTP method communicates what the client wants to do.',

        parts: [
          {
            id: 'resource',
            label: 'RESOURCE',
            explanation:
              'Start with a meaningful entity or collection managed by the application.',
            example:
              'Students.',
          },
          {
            id: 'collection-endpoint',
            label: 'COLLECTION ENDPOINT',
            explanation:
              'Expose a predictable path for interacting with the resource collection.',
            example:
              '/students',
          },
          {
            id: 'method',
            label: 'HTTP METHOD',
            explanation:
              'Use the HTTP method to communicate the intended operation.',
            example:
              'GET, POST, PUT, PATCH or DELETE.',
          },
          {
            id: 'operation',
            label: 'BACKEND OPERATION',
            explanation:
              'Backend logic performs the requested operation on the resource.',
            example:
              'Create a student or retrieve student records.',
          },
          {
            id: 'individual-resource',
            label: 'RESOURCE IDENTIFIER',
            explanation:
              'An identifier can target one specific resource when required.',
            example:
              '/students/101',
          },
          {
            id: 'response',
            label: 'API RESPONSE',
            explanation:
              'The backend returns the result of the requested operation.',
            example:
              '201 Created or 200 OK with JSON data.',
          },
        ],

        closing:
          'A REST-style API becomes easier to understand when resources, endpoints and HTTP methods follow predictable conventions.',
      },
    },

    {
      id: 'mc05-s04-rest-simulation',
      type: 'simulation',
      title: 'Choose the correct REST operation',
      description:
        'Match common API requirements to the appropriate HTTP method and endpoint pattern.',

      simulation: {
        instruction:
          'Connect each requirement to the REST operation that best represents it.',

        items: [
          {
            id: 'read-student',
            label: 'Get student 101',
            description:
              'Retrieve one existing student resource.',
            correctTargetId: 'get-target',
          },
          {
            id: 'create-student',
            label: 'Create a new student',
            description:
              'Create a new resource in the student collection.',
            correctTargetId: 'post-target',
          },
          {
            id: 'update-student',
            label: 'Change student 101',
            description:
              'Modify an existing student resource.',
            correctTargetId: 'patch-target',
          },
          {
            id: 'delete-student',
            label: 'Remove student 101',
            description:
              'Delete an existing student resource.',
            correctTargetId: 'delete-target',
          },
        ],

        targets: [
          {
            id: 'get-target',
            label: 'GET /students/101',
            description:
              'Read one student resource.',
          },
          {
            id: 'post-target',
            label: 'POST /students',
            description:
              'Create a new student resource.',
          },
          {
            id: 'patch-target',
            label: 'PATCH /students/101',
            description:
              'Update an existing student resource.',
          },
          {
            id: 'delete-target',
            label: 'DELETE /students/101',
            description:
              'Delete an existing student resource.',
          },
        ],

        successMessage:
          'Excellent. You matched CRUD-style requirements to consistent REST endpoint and method patterns.',

        failureMessage:
          'Ask what the client wants to do: read, create, update or delete. Then select the matching method and resource path.',
      },
    },

    {
      id: 'mc05-s04-rest-question',
      type: 'question',
      title: 'REST understanding check',
      description:
        'Check whether you understand resource-oriented API design.',

      question: {
        id: 'mc05-s04-rest',
        type: 'single-choice',
        question:
          'Which request is most appropriate for retrieving student 101 from a REST-style API?',

        options: [
          {
            id: 'get',
            text: 'GET /students/101',
            correct: true,
          },
          {
            id: 'post',
            text: 'POST /students/101',
            correct: false,
          },
          {
            id: 'delete',
            text: 'DELETE /students/101',
            correct: false,
          },
          {
            id: 'create',
            text: 'POST /students/101/delete',
            correct: false,
          },
        ],

        explanation:
          'GET is commonly used to retrieve a resource, and /students/101 identifies the specific student resource.',

        hints: [
          'The requirement is to read, not create or delete.',
          'Use the student collection followed by the student identifier.',
        ],
      },
    },
  ],
}