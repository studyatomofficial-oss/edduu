import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session03: SessionDefinition = {
  id: 'mc07-session-03',
  number: 3,
  stage: 'discover',
  title: 'Components, APIs & Service Responsibilities',
  objective:
    'Learn how to divide a system into meaningful components, assign ownership, and define APIs that allow those components to collaborate without creating unnecessary coupling.',

  experiences: [
    {
      id: 'mc07-s03-components-lesson',
      type: 'lesson',
      title: 'Turning Responsibilities into Components',
      description:
        'Understand how architects move from system requirements to components, responsibilities and interfaces.',

      lesson: {
        opening:
          'Once the system boundary is clear, the next question is: what should live inside it? A good architecture does not begin by drawing random boxes. It identifies responsibilities and groups related work into components that have clear ownership.',

        sections: [
          {
            heading: '1. A component should own a responsibility',
            explanation:
              'A component is useful when it has a clear responsibility that can be understood without reading the entire system. The goal is not to create as many boxes as possible, but to create meaningful ownership boundaries.',
            example:
              'In EDDUU, assessment processing can be one responsibility because creating tests, evaluating submissions and producing results belong to a related business capability.',
          },
          {
            heading: '2. Avoid components that know everything',
            explanation:
              'A component becomes difficult to maintain when it directly understands unrelated business rules and internal details of many other components. Excessive knowledge creates coupling and makes change risky.',
            example:
              'The course component should not contain detailed payment rules, assessment scoring logic and AI model-selection logic simply because all of them are used somewhere in the student journey.',
          },
          {
            heading: '3. Define ownership before interfaces',
            explanation:
              'Before deciding which API endpoint to create, decide which component owns the underlying responsibility and data. The interface should expose what another component needs rather than exposing every internal detail.',
            example:
              'The assessment component may own assessment results and expose an API that returns a student result instead of allowing another component to directly manipulate assessment tables.',
          },
          {
            heading: '4. APIs are contracts between components',
            explanation:
              'An API defines how one component can request something from another. It establishes an explicit contract covering inputs, outputs, errors and expected behaviour.',
            example:
              'The frontend might call GET /courses/123 to request course information without needing to know how the backend stores course records.',
          },
          {
            heading: '5. Good interfaces hide implementation details',
            explanation:
              'A caller should depend on the responsibility exposed by an interface rather than the internal implementation used to provide it. This allows the implementation to evolve without forcing every consumer to change.',
            example:
              'If the assessment service changes its internal database structure, clients should continue using the same result API contract when the business meaning has not changed.',
          },
          {
            heading: '6. Synchronous communication is not always the answer',
            explanation:
              'A request-response API is useful when the caller needs an immediate result. Some work is better represented as an asynchronous event or message when it can happen independently.',
            example:
              'Submitting an exam may need an immediate acknowledgement, while sending a completion notification can happen asynchronously after the submission is recorded.',
          },
          {
            heading: '7. Component boundaries should follow change and ownership',
            explanation:
              'A useful component boundary often appears where responsibilities, data ownership or change patterns differ. Components that always change together may belong together, while unrelated responsibilities should not be artificially coupled.',
            example:
              'Assessment scoring rules may evolve independently from course-content presentation, suggesting separate responsibility boundaries.',
          },
          {
            heading: '8. More services do not automatically mean better architecture',
            explanation:
              'Splitting a system into many services creates network communication, deployment, monitoring and operational complexity. Service boundaries should solve a real organizational or technical problem rather than simply follow a microservices trend.',
            example:
              'A small education platform may initially benefit from a modular application with clear internal boundaries rather than immediately creating dozens of independently deployed services.',
          },
          {
            heading: '9. APIs should represent business capabilities',
            explanation:
              'Strong API design often exposes meaningful business operations rather than leaking database structure. This makes the contract easier for consumers to understand and protects internal implementation choices.',
            example:
              'POST /assessments/123/submissions represents submitting an assessment rather than exposing a generic endpoint that lets clients directly manipulate database rows.',
          },
          {
            heading: '10. Architecture is about controlled dependency',
            explanation:
              'Components need to collaborate, but collaboration should be deliberate. The architecture should make important dependencies visible and avoid unnecessary connections between unrelated parts.',
            example:
              'The student workflow may depend on assessment results, but it should interact through a defined assessment interface rather than directly accessing assessment internals.',
          },
        ],

        realWorldConnection:
          'Architecture reviews often ask a simple question: who owns this responsibility? If the team cannot answer clearly, the boundary probably needs more thought before implementation begins.',

        keyIdea:
          'Good components have clear responsibilities, own what they need to own, and collaborate through explicit contracts rather than exposing internal details.',

        recap: [
          'Components should represent meaningful responsibilities.',
          'Ownership should be clear before API design begins.',
          'APIs act as contracts between components.',
          'Interfaces should hide unnecessary implementation details.',
          'Asynchronous communication is useful when immediate responses are not required.',
          'More services create more operational complexity.',
          'Architecture should control dependencies rather than eliminate collaboration.',
        ],
      },
    },

    {
      id: 'mc07-s03-components-animation',
      type: 'animation',
      title: 'From Responsibility to API',
      description:
        'Visualize how responsibilities become components and how components collaborate through explicit interfaces.',

      animation: {
        visual: 'architecture',
        opening:
          'Think of a restaurant kitchen. The chef, cashier and delivery counter have different responsibilities. They work together through clear handoffs instead of everyone doing every job.',

        parts: [
          {
            id: 'responsibility',
            label: 'Responsibility',
            explanation:
              'Start by identifying a meaningful piece of work the system must perform.',
            example:
              'Assessment evaluation and result generation.',
          },
          {
            id: 'component',
            label: 'Component',
            explanation:
              'Group related responsibility into an owned component.',
            example:
              'Assessment component owns submission and scoring workflows.',
          },
          {
            id: 'contract',
            label: 'API Contract',
            explanation:
              'Define what another component is allowed to request.',
            example:
              'An API can return a student assessment result.',
          },
          {
            id: 'consumer',
            label: 'Consumer',
            explanation:
              'Another component uses the contract without knowing internal implementation.',
            example:
              'Student-facing application requests the assessment result.',
          },
          {
            id: 'change',
            label: 'Independent Change',
            explanation:
              'Clear contracts allow internal implementation to evolve with less impact on consumers.',
            example:
              'The assessment database can change without changing the result API contract.',
          },
        ],

        closing:
          'The purpose of component architecture is not to create boxes. It is to create understandable ownership and controlled collaboration.',
      },
    },

    {
      id: 'mc07-s03-component-simulation',
      type: 'simulation',
      title: 'Assign the Right Component Owner',
      description:
        'Match system responsibilities with the component that should own them.',

      simulation: {
        instruction:
          'Match each responsibility with the component that should own it.',

        items: [
          {
            id: 'course',
            label: 'Create and organize course content.',
            description:
              'This responsibility concerns learning-content management.',
            correctTargetId: 'course-target',
          },
          {
            id: 'assessment',
            label: 'Evaluate an assessment submission.',
            description:
              'This responsibility concerns tests, scoring and results.',
            correctTargetId: 'assessment-target',
          },
          {
            id: 'identity',
            label: 'Authenticate a student.',
            description:
              'This responsibility concerns identity and access.',
            correctTargetId: 'identity-target',
          },
          {
            id: 'notification',
            label: 'Send a completion notification.',
            description:
              'This responsibility concerns delivery of user notifications.',
            correctTargetId: 'notification-target',
          },
        ],

        targets: [
          {
            id: 'course-target',
            label: 'COURSE COMPONENT',
            description:
              'Owns course and learning-content responsibilities.',
          },
          {
            id: 'assessment-target',
            label: 'ASSESSMENT COMPONENT',
            description:
              'Owns assessment submission, evaluation and result responsibilities.',
          },
          {
            id: 'identity-target',
            label: 'IDENTITY COMPONENT',
            description:
              'Owns authentication and identity responsibilities.',
          },
          {
            id: 'notification-target',
            label: 'NOTIFICATION COMPONENT',
            description:
              'Owns notification delivery responsibilities.',
          },
        ],

        successMessage:
          'Correct. Clear ownership makes architecture easier to reason about and reduces accidental coupling.',

        failureMessage:
          'Ask which component has the strongest business ownership of the responsibility before choosing a component.',
      },
    },

    {
      id: 'mc07-s03-components-question',
      type: 'question',
      title: 'Component Design Check',
      description:
        'Check whether you understand responsibility ownership and API boundaries.',

      question: {
        id: 'mc07-s03-components',
        type: 'single-choice',
        question:
          'Which approach creates the clearest component boundary in a learning platform?',
        options: [
          {
            id: 'ownership',
            text:
              'Let the assessment component own assessment rules and expose results through a defined interface.',
            correct: true,
          },
          {
            id: 'database',
            text:
              'Allow every component to directly modify every database table.',
            correct: false,
          },
          {
            id: 'everything',
            text:
              'Put course, payment, assessment and notification logic into one component.',
            correct: false,
          },
          {
            id: 'endpoints',
            text:
              'Create a separate service for every API endpoint regardless of responsibility.',
            correct: false,
          },
        ],
        explanation:
          'Clear ownership keeps related business responsibility together while the interface hides unnecessary internal details. Direct shared database access and arbitrary service splitting create coupling or operational complexity.',
      },
    },
  ],
}