import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide05: GuideDefinition = {
  type: 'map',
  label: 'Implementation Map',
  title: 'Build a Real Backend API System',
  objective:
    'Follow a practical implementation path from a backend project to a structured, authenticated and production-ready API.',

  steps: [
    {
      id: 'backend-project',
      step: 1,
      title: 'Create the backend project',
      action:
        'Create a dedicated backend application with a clear project structure.',
      details: [
        'Separate backend code from frontend code.',
        'Create folders for API routes, business logic, data access and configuration.',
        'Keep environment-specific configuration outside source code.',
      ],
    },

    {
      id: 'server',
      step: 2,
      title: 'Create the application server',
      action:
        'Start the backend server and expose a health-check endpoint.',
      details: [
        'The server receives incoming HTTP requests.',
        'A health endpoint provides a simple operational check.',
        'Keep startup and shutdown behavior predictable.',
      ],
    },

    {
      id: 'route',
      step: 3,
      title: 'Create the first API endpoint',
      action:
        'Create a GET endpoint that returns a simple structured response.',
      details: [
        'Define the HTTP method.',
        'Define the URL path.',
        'Return a predictable JSON response.',
      ],
    },

    {
      id: 'request-response',
      step: 4,
      title: 'Understand the request and response contract',
      action:
        'Define what the client sends and what the backend returns.',
      details: [
        'Identify path parameters, query parameters, headers and request body.',
        'Define successful response data.',
        'Define meaningful HTTP status codes.',
      ],
    },

    {
      id: 'resource',
      step: 5,
      title: 'Model a real resource',
      action:
        'Choose a resource such as courses and define its fields.',
      details: [
        'Give each resource a stable identifier.',
        'Define required and optional fields.',
        'Keep the representation consistent across endpoints.',
      ],
    },

    {
      id: 'crud',
      step: 6,
      title: 'Implement CRUD operations',
      action:
        'Implement GET, POST, PUT, PATCH and DELETE operations for the resource.',
      details: [
        'GET retrieves information.',
        'POST creates a resource.',
        'PUT replaces a resource representation.',
        'PATCH changes selected fields.',
        'DELETE removes or deactivates a resource.',
      ],
    },

    {
      id: 'validation',
      step: 7,
      title: 'Add request validation',
      action:
        'Validate client-controlled input before application logic runs.',
      details: [
        'Validate required fields.',
        'Validate data types and allowed values.',
        'Reject malformed requests with controlled errors.',
        'Never trust client input by default.',
      ],
    },

    {
      id: 'business-logic',
      step: 8,
      title: 'Separate application logic',
      action:
        'Move business rules out of route handlers into a service or application layer.',
      details: [
        'Routes should coordinate HTTP concerns.',
        'Services should implement business behavior.',
        'This separation improves testing and maintainability.',
      ],
    },

    {
      id: 'database',
      step: 9,
      title: 'Connect persistent data',
      action:
        'Connect the backend to a database through a controlled data-access layer.',
      details: [
        'Keep database operations separate from HTTP concerns.',
        'Use parameterized queries or a safe data-access mechanism.',
        'Handle missing records and database failures explicitly.',
      ],
    },

    {
      id: 'errors',
      step: 10,
      title: 'Design error handling',
      action:
        'Create consistent error responses for client, authentication, authorization, resource and server failures.',
      details: [
        'Use appropriate HTTP status codes.',
        'Return structured error information.',
        'Do not expose sensitive internal details.',
      ],
    },

    {
      id: 'pagination-filtering',
      step: 11,
      title: 'Add pagination and filtering',
      action:
        'Allow clients to retrieve manageable subsets of large collections.',
      details: [
        'Use limit and offset or cursor-based pagination.',
        'Validate pagination parameters.',
        'Support controlled filtering.',
        'Avoid unrestricted expensive queries.',
      ],
    },

    {
      id: 'authentication',
      step: 12,
      title: 'Protect the API',
      action:
        'Add authentication and authorization to protected endpoints.',
      details: [
        'Authenticate the caller.',
        'Determine the caller identity.',
        'Check whether the identity is allowed to perform the operation.',
        'Protect sensitive resources.',
      ],
    },

    {
      id: 'versioning',
      step: 13,
      title: 'Prepare the API for evolution',
      action:
        'Introduce an API versioning strategy and document the contract.',
      details: [
        'Use a predictable versioning convention such as /api/v1.',
        'Document endpoints, parameters, responses and errors.',
        'Avoid breaking existing consumers without a migration strategy.',
      ],
    },

    {
      id: 'testing-production',
      step: 14,
      title: 'Test and operate the API',
      action:
        'Test the API and add the operational practices required for production.',
      details: [
        'Test successful requests and failure cases.',
        'Test authentication and authorization boundaries.',
        'Test pagination and filtering behavior.',
        'Use logs, metrics and tracing where appropriate.',
        'Monitor latency, error rates and availability.',
      ],
    },
  ],

  finalResult:
    'A structured backend API with clear routes, request/response contracts, validation, business logic, database access, authentication, authorization, error handling, pagination, filtering, versioning, documentation and testing.',
}