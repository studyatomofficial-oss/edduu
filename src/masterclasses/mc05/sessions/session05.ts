import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc05Session05: SessionDefinition = {
  id: 'mc05-session-05',
  number: 5,
  stage: 'discover',
  title: 'Backend Application Logic',
  objective:
    'Understand how backend logic validates requests, applies business rules, coordinates services and data access, handles errors and prepares responses.',

  experiences: [
    {
      id: 'mc05-s05-logic-lesson',
      type: 'lesson',
      title: 'What actually happens inside the backend?',
      description:
        'Understand the processing steps between receiving an API request and returning a response.',

      lesson: {
        opening:
          'An API endpoint is only the entry point. After a request arrives, backend application logic must decide what the request means, whether it is valid, which business rules apply, what data or services are required, and what response should be returned.',

        sections: [
          {
            heading: 'The backend receives the request',
            explanation:
              'The backend first receives information from the client through an API request.',
            example:
              'A course platform receives a request to enroll a student in a course.',
          },
          {
            heading: 'Validation checks the input',
            explanation:
              'Validation checks whether the request contains acceptable data before the application performs the operation.',
            example:
              'The backend checks that a student ID and course ID are present and correctly formatted.',
          },
          {
            heading: 'Business rules determine what is allowed',
            explanation:
              'Business logic represents the rules that determine how an application should behave for a particular situation.',
            example:
              'A student cannot enroll in a course if the course is already full.',
          },
          {
            heading: 'Services coordinate application work',
            explanation:
              'Backend service logic can coordinate multiple operations without putting every responsibility directly inside the API endpoint.',
            example:
              'An enrollment service can check availability, create the enrollment and trigger a notification.',
          },
          {
            heading: 'Data access communicates with storage',
            explanation:
              'The backend uses a data-access layer or repository logic to read or change persistent information.',
            example:
              'The application reads the course record and creates an enrollment record in the database.',
          },
          {
            heading: 'External services may be involved',
            explanation:
              "Some operations require communication with systems outside the application's own database.",
            example:
              'The backend may call an email service after a successful enrollment.',
          },
          {
            heading: 'Errors must be handled deliberately',
            explanation:
              'Backend systems need predictable behavior when validation fails, data is missing, a business rule blocks an operation or an external service fails.',
            example:
              'If a course does not exist, the API can return a 404 response instead of pretending the enrollment succeeded.',
          },
          {
            heading: 'The backend constructs the response',
            explanation:
              'After the operation completes, the backend prepares a response that communicates the result to the client.',
            example:
              'The API returns confirmation that the student was enrolled successfully.',
          },
        ],

        realWorldConnection:
          'Well-structured backend systems separate responsibilities such as routing, validation, business logic, data access and external integrations so that complex applications remain easier to test, maintain and evolve.',

        keyIdea:
          'Backend application logic turns an incoming request into a controlled business operation by validating input, applying rules, coordinating data and services, handling errors and producing a response.',

        recap: [
          'The backend receives an API request.',
          'Validation checks the input.',
          'Business rules determine what should be allowed.',
          'Service logic coordinates application work.',
          'Data-access logic communicates with persistent storage.',
          'External services may participate in the operation.',
          'Errors must be handled deliberately.',
          'The backend prepares the final response.',
        ],
      },
    },

    {
      id: 'mc05-s05-logic-animation',
      type: 'animation',
      title: 'Watch a request move through backend logic',
      description:
        'Follow a request through validation, business rules, data access and response construction.',

      animation: {
        visual: 'architecture',

        opening:
          'The API endpoint is only the beginning. Backend application logic transforms the incoming request into a controlled operation and then produces a response.',

        parts: [
          {
            id: 'request',
            label: 'REQUEST',
            explanation:
              'The backend receives the request sent by the client.',
            example:
              'POST /enrollments with student and course information.',
          },
          {
            id: 'validation',
            label: 'VALIDATION',
            explanation:
              'The application checks whether the request contains valid and acceptable input.',
            example:
              'Student ID and course ID are present and valid.',
          },
          {
            id: 'business-rules',
            label: 'BUSINESS RULES',
            explanation:
              'Application rules determine whether the requested operation is allowed.',
            example:
              'Check whether the course still has available seats.',
          },
          {
            id: 'service',
            label: 'SERVICE LOGIC',
            explanation:
              'Service logic coordinates the steps required to complete the business operation.',
            example:
              'Enrollment service creates the enrollment and coordinates related work.',
          },
          {
            id: 'data-services',
            label: 'DATABASE / SERVICES',
            explanation:
              'The backend reads or changes persistent data and may communicate with external services.',
            example:
              'Create the enrollment record and send a notification.',
          },
          {
            id: 'result',
            label: 'RESULT',
            explanation:
              'The backend determines whether the requested operation succeeded or failed.',
            example:
              'Enrollment created successfully.',
          },
          {
            id: 'response',
            label: 'RESPONSE',
            explanation:
              'The backend returns a structured result to the client.',
            example:
              '201 Created with enrollment information.',
          },
        ],

        closing:
          'Separating validation, business rules, service coordination and data access makes backend behavior easier to understand, test and maintain.',
      },
    },

    {
      id: 'mc05-s05-logic-simulation',
      type: 'simulation',
      title: 'Trace backend application logic',
      description:
        'Place each backend responsibility in the correct order.',

      simulation: {
        instruction:
          'Connect each action to the correct stage of backend processing.',

        items: [
          {
            id: 'check-input',
            label: 'Check student and course IDs',
            description:
              'Verify that incoming values are valid.',
            correctTargetId: 'validation-target',
          },
          {
            id: 'check-rule',
            label: 'Check course capacity',
            description:
              'Apply a business rule before creating the enrollment.',
            correctTargetId: 'rules-target',
          },
          {
            id: 'save',
            label: 'Create the enrollment record',
            description:
              'Persist the successful operation.',
            correctTargetId: 'data-target',
          },
          {
            id: 'return',
            label: 'Return enrollment confirmation',
            description:
              'Send the result back to the client.',
            correctTargetId: 'response-target',
          },
        ],

        targets: [
          {
            id: 'validation-target',
            label: 'Validation',
            description:
              'Checks whether incoming data is acceptable.',
          },
          {
            id: 'rules-target',
            label: 'Business Rules',
            description:
              'Determines whether the requested operation is allowed.',
          },
          {
            id: 'data-target',
            label: 'Data Access',
            description:
              'Reads or changes persistent application data.',
          },
          {
            id: 'response-target',
            label: 'Response',
            description:
              'Returns the operation result to the client.',
          },
        ],

        successMessage:
          'Excellent. You traced the request through validation, business rules, data access and the final response.',

        failureMessage:
          'Think in order: first validate the input, then apply rules, then perform the allowed data operation, and finally return the result.',
      },
    },

    {
      id: 'mc05-s05-logic-question',
      type: 'question',
      title: 'Backend logic understanding check',
      description:
        'Check whether you understand the purpose of backend application logic.',

      question: {
        id: 'mc05-s05-logic',
        type: 'single-choice',
        question:
          'Why should backend application logic validate a request before performing a database operation?',

        options: [
          {
            id: 'protect-operation',
            text: 'To ensure the input is acceptable before the application performs the requested operation',
            correct: true,
          },
          {
            id: 'screen',
            text: 'To increase the physical resolution of the client screen',
            correct: false,
          },
          {
            id: 'speed',
            text: 'To guarantee that every database query is always instantaneous',
            correct: false,
          },
          {
            id: 'replace-api',
            text: 'To eliminate the need for an API',
            correct: false,
          },
        ],

        explanation:
          'Validation helps prevent invalid or unacceptable input from reaching business operations and data-access logic.',

        hints: [
          'Think about what could happen if invalid input reaches the database operation.',
          'Validation protects the operation by checking the request first.',
        ],
      },
    },
  ],
}