import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc04Session08: SessionDefinition = {
  id: 'mc04-session-08',
  number: 8,
  stage: 'discover',
  title: 'How Real Systems Use Databases',
  objective:
    'Connect databases to applications, APIs, users and business workflows to understand how database-driven systems work in the real world.',

  experiences: [
    {
      id: 'mc04-s08-real-systems-lesson',
      type: 'lesson',
      title: 'From User Action to Stored Data',
      description:
        'Understand how a real application uses a database as part of a larger system.',

      lesson: {
        opening:
          'A database is rarely used by a person directly. In a real application, a user interacts with a screen, the application processes the request, a backend service performs the required operation and the database stores or retrieves the data. Understanding this flow connects database concepts to the systems people use every day.',

        sections: [
          {
            heading: 'The user starts the workflow',
            explanation:
              'A real system usually begins with a user action such as submitting a form, opening a page or clicking a button.',
            example:
              'A student clicks View My Courses in an education application.',
          },

          {
            heading: 'The frontend collects the request',
            explanation:
              'The frontend provides the interface through which the user performs an action and supplies information.',
            example:
              'The browser sends the selected student ID as part of the request.',
          },

          {
            heading: 'The application or API receives the request',
            explanation:
              'A backend service receives the request and determines what operation needs to happen.',
            example:
              'The API receives a request for the courses belonging to student 101.',
          },

          {
            heading: 'The backend applies application logic',
            explanation:
              'The backend can validate inputs, check permissions and determine which database operation is appropriate.',
            example:
              'The service verifies that the request is valid before querying enrollment information.',
          },

          {
            heading: 'The database performs the data operation',
            explanation:
              'The database stores, retrieves, updates or deletes the required information.',
            example:
              'A SQL query retrieves the courses associated with student 101.',
          },

          {
            heading: 'The database returns a result',
            explanation:
              'The database sends the requested records or operation result back to the application.',
            example:
              'The API receives a list containing Python, Mathematics and Physics.',
          },

          {
            heading: 'The application prepares the response',
            explanation:
              'The backend converts the database result into information the frontend can use.',
            example:
              'The API returns structured course information to the browser.',
          },

          {
            heading: 'The frontend presents the result',
            explanation:
              "The user finally sees the information through the application's interface.",
            example:
              "The browser displays the student's enrolled courses.",
          },

          {
            heading: 'Databases support many different workflows',
            explanation:
              'The same architectural pattern can support reading, creating, updating and deleting information.',
            example:
              'An e-commerce application can retrieve products, create orders, update inventory and store customer information.',
          },

          {
            heading: 'Transactions protect important operations',
            explanation:
              'Some workflows contain multiple database changes that should succeed together or fail together.',
            example:
              'Creating an order and reducing inventory may need coordinated database operations.',
          },

          {
            heading: 'Security matters around database access',
            explanation:
              'Applications should not blindly trust user input or expose unrestricted database access.',
            example:
              'A backend can validate input and use controlled database operations rather than allowing arbitrary SQL from a user.',
          },

          {
            heading: 'The database is one part of a larger system',
            explanation:
              'A production application usually contains several layers working together.',
            example:
              'Browser → API → application logic → database → response → browser.',
          },
        ],

        realWorldConnection:
          'Education platforms, banking systems, hospitals, e-commerce applications and SaaS products all use databases as part of larger application workflows.',

        keyIdea:
          'A real database-driven application connects users, frontend interfaces, backend services, business logic and databases into one workflow.',

        recap: [
          'Users initiate application workflows.',
          'Frontend interfaces collect and send requests.',
          'Backend services receive requests.',
          'Application logic validates and processes requests.',
          'Databases store and retrieve structured information.',
          'Database results return to the application.',
          'The frontend presents the final result to the user.',
          'Transactions can protect multi-step operations.',
          'Security and validation are important around database access.',
          'A database is one component of a larger system.',
        ],
      },
    },

    {
      id: 'mc04-s08-real-systems-animation',
      type: 'animation',
      title: 'Watch a Real Database Request Travel Through a System',
      description:
        'Follow one user action from the browser to the database and back.',

      animation: {
        opening:
          'Follow a student clicking View My Courses and watch the request travel through the application stack.',

        parts: [
          {
            id: 'user',
            label: 'USER',
            explanation:
              'The workflow begins with a human action.',
            example:
              'Student clicks View My Courses.',
          },

          {
            id: 'frontend',
            label: 'FRONTEND',
            explanation:
              'The browser interface captures the action and prepares a request.',
            example:
              'Browser requests courses for student 101.',
          },

          {
            id: 'api',
            label: 'API',
            explanation:
              'The backend endpoint receives the request.',
            example:
              'GET /students/101/courses',
          },

          {
            id: 'logic',
            label: 'APPLICATION LOGIC',
            explanation:
              'The application validates the request and decides what data operation is required.',
            example:
              'Validate student ID and permissions.',
          },

          {
            id: 'database',
            label: 'DATABASE',
            explanation:
              'The database executes the required data operation.',
            example:
              'Query enrollment and course records.',
          },

          {
            id: 'result',
            label: 'DATABASE RESULT',
            explanation:
              'The database returns matching information to the backend.',
            example:
              'Python, Mathematics, Physics.',
          },

          {
            id: 'response',
            label: 'API RESPONSE',
            explanation:
              'The backend prepares structured information for the frontend.',
            example:
              'JSON response containing course records.',
          },

          {
            id: 'screen',
            label: 'USER SCREEN',
            explanation:
              'The frontend presents the final information.',
            example:
              'Student sees enrolled courses.',
          },
        ],

        closing:
          'The user never needs to know how the database works internally. The application coordinates the interaction between the interface, backend logic and stored data to produce the requested result.',
      },
    },

    {
      id: 'mc04-s08-real-systems-simulation',
      type: 'simulation',
      title: 'Trace the Application Request',
      description:
        'Arrange the components of a database-driven application in the correct order.',

      simulation: {
        instruction:
          'Connect each component to its role in the request-response workflow.',

        items: [
          {
            id: 'user-action',
            label: 'Student clicks View My Courses',
            description:
              'The human starts the workflow.',
            correctTargetId: 'user-target',
          },

          {
            id: 'browser',
            label: 'Browser sends request',
            description:
              'The frontend communicates the user action.',
            correctTargetId: 'frontend-target',
          },

          {
            id: 'backend',
            label: 'API receives request',
            description:
              'The backend accepts the application request.',
            correctTargetId: 'api-target',
          },

          {
            id: 'logic',
            label: 'Validate student and permissions',
            description:
              'Application logic checks the request.',
            correctTargetId: 'logic-target',
          },

          {
            id: 'query',
            label: 'Run database query',
            description:
              'The database retrieves the required records.',
            correctTargetId: 'database-target',
          },

          {
            id: 'response',
            label: 'Return course information',
            description:
              'The result travels back through the application.',
            correctTargetId: 'response-target',
          },

          {
            id: 'display',
            label: 'Show courses on screen',
            description:
              'The user sees the final result.',
            correctTargetId: 'screen-target',
          },
        ],

        targets: [
          {
            id: 'user-target',
            label: 'USER',
            description:
              'Starts the workflow.',
          },

          {
            id: 'frontend-target',
            label: 'FRONTEND',
            description:
              'Captures and sends the request.',
          },

          {
            id: 'api-target',
            label: 'API',
            description:
              'Receives the application request.',
          },

          {
            id: 'logic-target',
            label: 'APPLICATION LOGIC',
            description:
              'Validates and processes the request.',
          },

          {
            id: 'database-target',
            label: 'DATABASE',
            description:
              'Stores and retrieves data.',
          },

          {
            id: 'response-target',
            label: 'RESPONSE',
            description:
              'Carries the result back to the application.',
          },

          {
            id: 'screen-target',
            label: 'USER SCREEN',
            description:
              'Presents the final result.',
          },
        ],

        successMessage:
          'Excellent. You traced the complete request-response path through a real database-driven application.',

        failureMessage:
          'Think about the direction of the workflow: user action, frontend request, backend processing, database operation and response back to the screen.',
      },
    },

    {
      id: 'mc04-s08-real-systems-question',
      type: 'question',
      title: 'Real systems check',
      description:
        'Check whether you can connect database concepts to an application architecture.',

      question: {
        id: 'mc04-s08-real-systems',
        type: 'single-choice',
        question:
          'In a typical database-driven web application, why does the backend usually sit between the frontend and the database?',

        options: [
          {
            id: 'logic',
            text: 'To validate requests, apply application logic and control database operations',
            correct: true,
          },

          {
            id: 'display',
            text: 'To increase the physical resolution of the users screen',
            correct: false,
          },

          {
            id: 'internet',
            text: 'To replace the users internet connection',
            correct: false,
          },

          {
            id: 'storage',
            text: 'To make the database unnecessary',
            correct: false,
          },
        ],

        explanation:
          'The backend provides a controlled application layer where requests can be validated, business rules applied and database operations safely coordinated.',

        hints: [
          'Think about validation and business logic.',
          'The database should not normally be exposed directly to arbitrary user actions.',
        ],
      },
    },
  ],
}