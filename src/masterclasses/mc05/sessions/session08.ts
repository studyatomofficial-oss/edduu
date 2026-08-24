import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session08: SessionDefinition = {
  id: 'mc05-session-08',
  number: 8,
  stage: 'discover',
  title: 'How a Real Backend System Works',
  objective:
    'Understand how a real application request travels from the user interface through APIs, authentication, backend logic, databases and services before returning a result to the user.',

  experiences: [
    {
      id: 'mc05-s08-system-lesson',
      type: 'lesson',
      title: 'How does a real backend system work end to end?',
      description:
        'Connect the concepts from this masterclass into one complete application request flow.',

      lesson: {
        opening:
          'A real backend system is not a single program sitting behind a button. It is a set of coordinated components that receive requests, authenticate users, validate input, apply business rules, communicate with databases or external services and return structured responses.',

        sections: [
          {
            heading: 'The user starts the interaction',
            explanation:
              'Every application workflow begins with a user or another client requesting some capability.',
            example:
              'A student opens the course dashboard and asks the application to show enrolled courses.',
          },
          {
            heading: 'The frontend creates the request',
            explanation:
              'The frontend turns the user interaction into a request that can be sent to the backend API.',
            example:
              'The browser sends GET /api/v1/enrollments for the authenticated student.',
          },
          {
            heading: 'The API receives the request',
            explanation:
              'The API endpoint acts as the controlled entry point into backend functionality.',
            example:
              'The backend matches GET /api/v1/enrollments to the enrollment endpoint.',
          },
          {
            heading: 'Authentication establishes identity',
            explanation:
              'Protected requests may require the backend to establish which user or system is making the request.',
            example:
              'The backend verifies the access token attached to the request.',
          },
          {
            heading: 'Authorization checks permission',
            explanation:
              'After identity is established, the backend can determine whether that identity is allowed to perform the requested operation.',
            example:
              'The backend confirms that the student can access their own enrollment information.',
          },
          {
            heading: 'Validation protects the operation',
            explanation:
              'The backend validates parameters, request data and other client-controlled values before continuing.',
            example:
              'The backend checks that a requested student identifier is valid.',
          },
          {
            heading: 'Application logic applies business rules',
            explanation:
              'The service or application layer determines what the request means and which business rules should be applied.',
            example:
              'The enrollment service determines which courses belong to the authenticated student.',
          },
          {
            heading: 'The backend communicates with data stores',
            explanation:
              'The application retrieves or changes persistent information through its data-access layer.',
            example:
              'The backend queries enrollment and course records from the database.',
          },
          {
            heading: 'External services may participate',
            explanation:
              "Some workflows require communication with services outside the application's primary database.",
            example:
              'A notification service may send an email after an enrollment is created.',
          },
          {
            heading: 'The backend creates the response',
            explanation:
              'The backend converts the operation result into a structured API response.',
            example:
              "The API returns a JSON response containing the student's enrolled courses.",
          },
          {
            heading: 'The frontend consumes the response',
            explanation:
              'The frontend receives the API response and converts the returned data into a user-facing experience.',
            example:
              "The browser renders the enrolled courses on the student's dashboard.",
          },
          {
            heading: 'Errors can occur at every stage',
            explanation:
              'Real systems must handle failures such as invalid input, authentication failure, missing resources, business-rule violations, database errors and external-service failures.',
            example:
              'If the database is unavailable, the backend should return a controlled error rather than crashing the user interface.',
          },
          {
            heading: 'Security applies throughout the flow',
            explanation:
              'Authentication, authorization, validation and controlled access to data are system-wide concerns rather than isolated features.',
            example:
              'A backend should not allow a client to bypass authorization simply by changing an identifier in the URL.',
          },
          {
            heading: 'Observability helps operate the system',
            explanation:
              'Production backends need logs, metrics and tracing or other operational signals so teams can understand what happened when requests succeed or fail.',
            example:
              'An engineering team can trace a slow API request from the endpoint through the database operation.',
          },
          {
            heading: 'The complete flow is a chain of responsibilities',
            explanation:
              'Each layer has a responsibility, but the layers must cooperate to deliver the final user experience.',
            example:
              'User action → frontend → API → security checks → business logic → database → response → frontend.',
          },
        ],

        realWorldConnection:
          'Most modern web and mobile products depend on this type of layered backend architecture. Understanding the complete request lifecycle helps technical leaders reason about reliability, security, performance, cost and team ownership.',

        keyIdea:
          'A real backend system connects frontend clients, APIs, authentication, authorization, validation, business logic, data stores, external services and response handling into one controlled request lifecycle.',

        recap: [
          'The user initiates an interaction.',
          'The frontend creates an API request.',
          'The API receives and routes the request.',
          'Authentication establishes identity.',
          'Authorization determines permission.',
          'Validation checks client-controlled input.',
          'Application logic applies business rules.',
          'Data-access logic communicates with databases.',
          'External services may participate.',
          'The backend constructs a response.',
          'The frontend presents the result.',
          'Errors and security must be handled throughout the lifecycle.',
          'Observability helps teams operate the production system.',
        ],
      },
    },

    {
      id: 'mc05-s08-system-animation',
      type: 'animation',
      title: 'Watch one request travel through a real backend',
      description:
        'Follow a complete request from the user interface through the API, security, backend logic, database and response.',

      animation: {
        visual: 'architecture',

        opening:
          'Now connect everything together. One user action can travel through many backend responsibilities before the final result appears on the screen.',

        parts: [
          {
            id: 'user',
            label: 'USER',
            explanation:
              'The user starts an interaction that requires application data or an operation.',
            example:
              'Student opens the enrolled-courses dashboard.',
          },
          {
            id: 'frontend',
            label: 'FRONTEND',
            explanation:
              'The frontend converts the user action into an API request.',
            example:
              'Browser sends GET /api/v1/enrollments.',
          },
          {
            id: 'api',
            label: 'API',
            explanation:
              'The API receives the request and routes it to the appropriate backend capability.',
            example:
              'Enrollment endpoint receives the request.',
          },
          {
            id: 'security',
            label: 'AUTH + AUTHORIZATION',
            explanation:
              'The backend verifies identity and checks whether the requester has permission.',
            example:
              'Access token is verified and student access is checked.',
          },
          {
            id: 'validation',
            label: 'VALIDATION',
            explanation:
              'The backend checks request parameters and client-controlled input.',
            example:
              'Requested student identifier is validated.',
          },
          {
            id: 'logic',
            label: 'APPLICATION LOGIC',
            explanation:
              'Business rules determine what data or operation is required.',
            example:
              "Enrollment service determines the student's courses.",
          },
          {
            id: 'database',
            label: 'DATABASE',
            explanation:
              'The backend retrieves or changes persistent information.',
            example:
              'Enrollment and course records are queried.',
          },
          {
            id: 'services',
            label: 'EXTERNAL SERVICES',
            explanation:
              'Some workflows communicate with systems outside the primary database.',
            example:
              'Notification or payment service may participate in another workflow.',
          },
          {
            id: 'response',
            label: 'API RESPONSE',
            explanation:
              'The backend converts the operation result into a structured response.',
            example:
              '200 OK with JSON course data.',
          },
          {
            id: 'screen',
            label: 'USER SCREEN',
            explanation:
              'The frontend consumes the response and presents the result to the user.',
            example:
              "Dashboard displays the student's enrolled courses.",
          },
        ],

        closing:
          'The backend is a coordinated system. Each stage has a responsibility, and the complete chain determines the reliability, security and usefulness of the application.',
      },
    },

    {
      id: 'mc05-s08-system-simulation',
      type: 'simulation',
      title: 'Trace a real backend request',
      description:
        'Put the components of a real application request into the correct end-to-end order.',

      simulation: {
        instruction:
          'Connect each component to the correct stage of the request lifecycle.',

        items: [
          {
            id: 'user-action',
            label: 'Student opens enrolled courses',
            description:
              'The user initiates the application interaction.',
            correctTargetId: 'user-target',
          },
          {
            id: 'send-request',
            label: 'Browser sends GET /api/v1/enrollments',
            description:
              'The frontend sends the backend request.',
            correctTargetId: 'frontend-target',
          },
          {
            id: 'route-api',
            label: 'Enrollment endpoint receives the request',
            description:
              'The API identifies the backend operation.',
            correctTargetId: 'api-target',
          },
          {
            id: 'check-security',
            label: 'Verify token and permissions',
            description:
              'The backend establishes identity and checks access.',
            correctTargetId: 'security-target',
          },
          {
            id: 'apply-rules',
            label: 'Apply enrollment business rules',
            description:
              'Application logic determines what should happen.',
            correctTargetId: 'logic-target',
          },
          {
            id: 'query-data',
            label: 'Read enrollment and course records',
            description:
              'The backend communicates with persistent data.',
            correctTargetId: 'database-target',
          },
          {
            id: 'return-data',
            label: 'Return JSON API response',
            description:
              'The backend returns the operation result.',
            correctTargetId: 'response-target',
          },
          {
            id: 'render-result',
            label: 'Display enrolled courses',
            description:
              'The frontend presents the returned data to the user.',
            correctTargetId: 'screen-target',
          },
        ],

        targets: [
          {
            id: 'user-target',
            label: 'USER',
            description:
              'Starts the application interaction.',
          },
          {
            id: 'frontend-target',
            label: 'FRONTEND',
            description:
              'Creates and sends the API request.',
          },
          {
            id: 'api-target',
            label: 'API',
            description:
              'Receives and routes the request.',
          },
          {
            id: 'security-target',
            label: 'AUTHENTICATION / AUTHORIZATION',
            description:
              'Verifies identity and permission.',
          },
          {
            id: 'logic-target',
            label: 'APPLICATION LOGIC',
            description:
              'Applies business rules and coordinates work.',
          },
          {
            id: 'database-target',
            label: 'DATABASE',
            description:
              'Provides persistent application data.',
          },
          {
            id: 'response-target',
            label: 'API RESPONSE',
            description:
              'Returns the backend result to the client.',
          },
          {
            id: 'screen-target',
            label: 'USER SCREEN',
            description:
              'Presents the result to the user.',
          },
        ],

        successMessage:
          'Excellent. You traced the complete request from user action through frontend, API, security, application logic, database and response back to the screen.',

        failureMessage:
          'Follow the request from outside to inside and then back out: user → frontend → API → security → application logic → database → response → screen.',
      },
    },

    {
      id: 'mc05-s08-system-question',
      type: 'question',
      title: 'Real backend architecture check',
      description:
        'Test whether you can reason about the complete request lifecycle.',

      question: {
        id: 'mc05-s08-system',
        type: 'single-choice',
        question:
          'A student clicks “My Courses”. Which sequence best represents a typical protected backend request?',

        options: [
          {
            id: 'correct',
            text: 'Frontend request → API → authentication/authorization → application logic → database → API response → frontend',
            correct: true,
          },
          {
            id: 'database-first',
            text: 'Database → user screen → API → frontend → authentication',
            correct: false,
          },
          {
            id: 'frontend-only',
            text: 'Frontend → user screen → frontend, without a backend request',
            correct: false,
          },
          {
            id: 'security-last',
            text: 'API → database → response → authentication → frontend',
            correct: false,
          },
        ],

        explanation:
          'A protected application normally sends the frontend request to an API, performs security checks and backend processing, accesses required data and then returns a response to the frontend.',

        hints: [
          'Start where the user interacts with the application.',
          'Think about where authentication and authorization happen before protected data is returned.',
          'The database is normally accessed by backend logic rather than directly by the browser.',
        ],
      },
    },
  ],
}