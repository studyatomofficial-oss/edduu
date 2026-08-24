import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session07: SessionDefinition = {
  id: 'mc05-session-07',
  number: 7,
  stage: 'discover',
  title: 'Building & Using APIs',
  objective:
    'Understand how practical APIs are designed, implemented, validated, documented and tested, including HTTP methods, pagination, filtering, idempotency and versioning.',

  experiences: [
    {
      id: 'mc05-s07-api-lesson',
      type: 'lesson',
      title: 'How do you build a production-ready API?',
      description:
        'Move from understanding API concepts to designing and operating practical API endpoints.',

      lesson: {
        opening:
          'A production API is more than a URL that returns data. A well-designed API defines resources, chooses appropriate HTTP methods, validates requests, handles errors consistently, supports practical query patterns, documents its contract and can be tested reliably.',

        sections: [
          {
            heading: 'Start with the resource',
            explanation:
              'API design usually begins by identifying the business resource that clients need to work with.',
            example:
              'A learning platform may expose students, courses and enrollments as API resources.',
          },
          {
            heading: 'Use HTTP methods intentionally',
            explanation:
              'Different HTTP methods communicate the intended operation on a resource.',
            example:
              'GET retrieves data, POST creates a resource or triggers a creation-oriented operation, PUT replaces a resource, PATCH partially updates a resource and DELETE removes a resource.',
          },
          {
            heading: 'GET retrieves information',
            explanation:
              'GET is commonly used when a client wants to read a resource or collection.',
            example:
              'GET /api/v1/courses returns a collection of courses.',
          },
          {
            heading: 'POST creates new data',
            explanation:
              'POST is commonly used when the client submits information that should result in a new resource or server-side creation operation.',
            example:
              'POST /api/v1/courses creates a new course.',
          },
          {
            heading: 'PUT replaces a resource',
            explanation:
              'PUT represents replacing the current representation of a resource with the supplied representation.',
            example:
              'PUT /api/v1/courses/42 replaces the course representation for course 42.',
          },
          {
            heading: 'PATCH changes part of a resource',
            explanation:
              'PATCH is useful when a client wants to change selected fields without replacing the entire resource.',
            example:
              'PATCH /api/v1/courses/42 changes only the course title.',
          },
          {
            heading: 'DELETE removes a resource',
            explanation:
              'DELETE communicates that the client wants the targeted resource removed or deleted according to the server rules.',
            example:
              'DELETE /api/v1/courses/42 requests deletion of course 42.',
          },
          {
            heading: 'Validate incoming requests',
            explanation:
              'The backend should validate parameters, request bodies and other client-controlled input before performing business operations.',
            example:
              'A course creation request must contain a valid title and other required fields.',
          },
          {
            heading: 'Return useful errors',
            explanation:
              'Clients need predictable error responses so they can understand and handle failures.',
            example:
              'An invalid course identifier can produce a 400 or 404 response depending on what failed.',
          },
          {
            heading: 'Pagination controls large collections',
            explanation:
              'Pagination prevents an API from returning an unnecessarily large collection in one response.',
            example:
              'GET /api/v1/courses?page=2&limit=20 requests a specific page of courses.',
          },
          {
            heading: 'Filtering narrows results',
            explanation:
              'Query parameters can allow clients to request only records matching particular conditions.',
            example:
              'GET /api/v1/courses?status=active returns only active courses.',
          },
          {
            heading: 'Idempotency protects repeated operations',
            explanation:
              'An idempotent operation can safely be repeated without creating unintended additional effects, which is especially important when clients retry requests.',
            example:
              'A client retrying an idempotent update should not accidentally create multiple copies of the same resource.',
          },
          {
            heading: 'API versioning protects clients',
            explanation:
              'Versioning provides a controlled way to evolve an API contract while existing clients continue using a supported version.',
            example:
              'The platform can expose /api/v1/courses while developing a compatible or intentionally changed /api/v2/courses contract.',
          },
          {
            heading: 'Documentation defines the API contract',
            explanation:
              'Good API documentation explains endpoints, methods, parameters, request bodies, authentication requirements and response formats.',
            example:
              'An API reference can show exactly how a frontend developer should call POST /api/v1/courses.',
          },
          {
            heading: 'Testing verifies API behavior',
            explanation:
              'API tests verify successful operations, validation failures, authentication behavior, error handling and edge cases.',
            example:
              'A test can confirm that creating a course with an empty title returns the expected validation error.',
          },
        ],

        realWorldConnection:
          'Production APIs become shared contracts between frontend applications, mobile applications, partner systems and backend services. Small design decisions can therefore affect many consumers.',

        keyIdea:
          'A strong API combines clear resource design, correct HTTP semantics, validation, predictable errors, scalable query patterns, safe retries, controlled versioning, documentation and testing.',

        recap: [
          'Design around resources and business capabilities.',
          'Use GET, POST, PUT, PATCH and DELETE intentionally.',
          'Validate client-controlled input.',
          'Return predictable errors.',
          'Use pagination for large collections.',
          'Use filtering to narrow collection results.',
          'Understand idempotency when operations may be retried.',
          'Version APIs when contracts need controlled evolution.',
          'Document the API contract.',
          'Test both successful and failing behavior.',
        ],
      },
    },

    {
      id: 'mc05-s07-api-animation',
      type: 'animation',
      title: 'Watch an API request become a backend operation',
      description:
        'Follow a real API call from client request through endpoint selection, validation, backend processing and response.',

      animation: {
        visual: 'api',

        opening:
          'A practical API connects a client request to a controlled backend operation. The endpoint, HTTP method, validation and response contract all work together.',

        parts: [
          {
            id: 'client-request',
            label: 'CLIENT REQUEST',
            explanation:
              'The client sends a request describing the resource and operation it wants.',
            example:
              'GET /api/v1/courses?page=2&limit=20&status=active',
          },
          {
            id: 'endpoint-method',
            label: 'ENDPOINT + METHOD',
            explanation:
              'The backend matches the request to an endpoint and interprets the HTTP method.',
            example:
              'GET + /api/v1/courses',
          },
          {
            id: 'validation',
            label: 'REQUEST VALIDATION',
            explanation:
              'The backend validates parameters, authentication information and other client-controlled input.',
            example:
              'page and limit must be valid values.',
          },
          {
            id: 'business-operation',
            label: 'BACKEND OPERATION',
            explanation:
              'Application logic applies business rules and performs the requested operation.',
            example:
              'Find active courses and prepare the requested page.',
          },
          {
            id: 'data-query',
            label: 'DATA QUERY',
            explanation:
              'The backend retrieves or changes the required data through its data-access layer.',
            example:
              'Query the course records using filtering and pagination.',
          },
          {
            id: 'response-contract',
            label: 'API RESPONSE',
            explanation:
              'The backend returns a structured response using an appropriate status and response format.',
            example:
              '200 OK with the requested course collection and pagination metadata.',
          },
          {
            id: 'client-result',
            label: 'CLIENT RESULT',
            explanation:
              'The client consumes the API response and updates its user-facing experience.',
            example:
              'The course list displays the second page of active courses.',
          },
        ],

        closing:
          'A production API is a contract: clients send predictable requests, the backend validates and processes them, and the API returns predictable results.',
      },
    },

    {
      id: 'mc05-s07-api-simulation',
      type: 'simulation',
      title: 'Choose the correct API operation',
      description:
        'Match common backend requirements with the HTTP method or API design technique that best fits the operation.',

      simulation: {
        instruction:
          'Connect each business requirement to the appropriate API operation or design concept.',

        items: [
          {
            id: 'retrieve',
            label: 'Retrieve a list of courses',
            description:
              'Read an existing collection without changing it.',
            correctTargetId: 'get-target',
          },
          {
            id: 'create',
            label: 'Create a new course',
            description:
              'Submit information that creates a new resource.',
            correctTargetId: 'post-target',
          },
          {
            id: 'replace',
            label: 'Replace the complete course representation',
            description:
              'Replace the current representation of an existing resource.',
            correctTargetId: 'put-target',
          },
          {
            id: 'partial',
            label: 'Change only the course title',
            description:
              'Update selected fields without replacing the entire resource.',
            correctTargetId: 'patch-target',
          },
          {
            id: 'remove',
            label: 'Delete a course',
            description:
              'Request removal of an existing resource.',
            correctTargetId: 'delete-target',
          },
          {
            id: 'large-list',
            label: 'Return 20 records at a time',
            description:
              'Prevent a large collection from being returned in one response.',
            correctTargetId: 'pagination-target',
          },
          {
            id: 'narrow-list',
            label: 'Return only active courses',
            description:
              'Restrict a collection using a query condition.',
            correctTargetId: 'filtering-target',
          },
          {
            id: 'safe-retry',
            label: 'Prevent duplicate effects when a client retries',
            description:
              'Design an operation so repeated requests do not create unintended duplicate effects.',
            correctTargetId: 'idempotency-target',
          },
        ],

        targets: [
          {
            id: 'get-target',
            label: 'GET',
            description:
              'Retrieve a resource or collection.',
          },
          {
            id: 'post-target',
            label: 'POST',
            description:
              'Create a resource or perform a creation-oriented operation.',
          },
          {
            id: 'put-target',
            label: 'PUT',
            description:
              'Replace a resource representation.',
          },
          {
            id: 'patch-target',
            label: 'PATCH',
            description:
              'Partially update a resource.',
          },
          {
            id: 'delete-target',
            label: 'DELETE',
            description:
              'Remove a resource according to server rules.',
          },
          {
            id: 'pagination-target',
            label: 'Pagination',
            description:
              'Split large collections into manageable pages.',
          },
          {
            id: 'filtering-target',
            label: 'Filtering',
            description:
              'Narrow collection results using query criteria.',
          },
          {
            id: 'idempotency-target',
            label: 'Idempotency',
            description:
              'Make safe repetition possible without unintended duplicate effects.',
          },
        ],

        successMessage:
          'Excellent. You matched HTTP methods and API design techniques to their intended backend operations.',

        failureMessage:
          'Start with the business intent: read, create, replace, partially update, delete, paginate, filter or safely retry.',
      },
    },

    {
      id: 'mc05-s07-api-question',
      type: 'question',
      title: 'Production API understanding check',
      description:
        'Test your understanding of practical API design.',

      question: {
        id: 'mc05-s07-api',
        type: 'single-choice',
        question:
          'A mobile client requests 20 courses at a time instead of downloading thousands of courses in one response. Which API design technique is being used?',

        options: [
          {
            id: 'pagination',
            text: 'Pagination',
            correct: true,
          },
          {
            id: 'authentication',
            text: 'Authentication',
            correct: false,
          },
          {
            id: 'versioning',
            text: 'API versioning',
            correct: false,
          },
          {
            id: 'authorization',
            text: 'Authorization',
            correct: false,
          },
        ],

        explanation:
          'Pagination divides a large collection into smaller result sets so clients can retrieve manageable amounts of data.',

        hints: [
          'The client does not want the entire collection at once.',
          'Think about dividing a large result set into pages.',
        ],
      },
    },
  ],
}