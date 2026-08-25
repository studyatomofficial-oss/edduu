import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session01: SessionDefinition = {
  id: 'mc07-session-01',
  number: 1,
  stage: 'discover',
  title: 'From Business Requirement to System Architecture',
  objective:
    'Learn how a real business requirement is transformed into functional requirements, non-functional requirements, system boundaries, components and an initial architecture.',

  experiences: [
    {
      id: 'mc07-s01-architecture-lesson',
      type: 'lesson',
      title: 'Architecture starts with a problem',
      description:
        'Understand why software architecture should begin with business requirements rather than technology choices.',

      lesson: {
        opening:
          'Imagine EDDUU wants to build an education platform for students. Before choosing databases, APIs or cloud services, the team first needs to understand what the product must actually do.',

        sections: [
          {
            heading: 'Start with the business requirement',
            explanation:
              'A business requirement describes the outcome the organization wants. For example, EDDUU may want students to browse courses, watch lessons, attempt tests, track progress and ask questions through an AI tutor.',
            example:
              'Students can discover courses, watch lessons, attempt tests, submit AI doubts and have their progress stored.',
          },

          {
            heading: 'Turn the requirement into system capabilities',
            explanation:
              'The architecture team breaks the business requirement into capabilities that the software must provide. These capabilities become useful boundaries for thinking about the system.',
            example:
              'Capabilities include identity, course catalogue, content delivery, assessment, progress tracking, AI doubt solving and notifications.',
          },

          {
            heading: 'Functional requirements describe behaviour',
            explanation:
              'Functional requirements describe what the system should do. They can usually be expressed as actions, workflows or outcomes.',
            example:
              'A student can log in, open a course, submit a test, receive a score and submit an AI doubt.',
          },

          {
            heading: 'Non-functional requirements describe system qualities',
            explanation:
              'Non-functional requirements describe constraints and qualities such as performance, availability, security, scalability and reliability. Two systems can provide the same feature but have very different non-functional requirements.',
            example:
              'The platform should remain performant, scalable, secure, durable and resilient when individual components fail.',
          },

          {
            heading: 'Architecture creates boundaries',
            explanation:
              'Once requirements are understood, architects divide the system into responsibilities. A component should have a meaningful responsibility and a clear interface with other components.',
            example:
              'Course, assessment, AI, data and client capabilities can have clear responsibilities and communicate through defined interfaces.',
          },

          {
            heading: 'Architecture is a set of decisions',
            explanation:
              'There is rarely one universally correct architecture. Architecture is a set of decisions made under business, technical, organizational and operational constraints.',
            example:
              'Architecture decisions consider traffic, consistency, asynchronous processing, independent scaling, availability and operational complexity.',
          }
        ],

        realWorldConnection:
          'In a real engineering organization, architecture discussions often begin with product requirements and constraints before engineers decide which technologies or deployment patterns to use.',

        keyIdea:
          'Good architecture starts by understanding the problem, defining responsibilities and making explicit trade-offs. Technology selection comes after the system needs are understood.',

        recap: [
          'Start with the business outcome.',
          'Separate functional requirements from non-functional requirements.',
          'Turn capabilities into meaningful system boundaries.',
          'Give components clear responsibilities.',
          'Treat architecture as a set of trade-off decisions.'
        ],
      },
    },

    {
      id: 'mc07-s01-architecture-animation',
      type: 'animation',
      title: 'From requirement to architecture',
      description:
        'Visualize how a business requirement gradually becomes a system architecture.',

      animation: {
        visual: 'architecture',
        opening:
          'Watch a simple business requirement become a structured software system.',

        parts: [
          {
            id: 'business',
            label: 'Business requirement',
            explanation:
              'The organization defines the outcome it needs from the product.',
            example:
              'Students should be able to learn, test themselves and get AI-powered help.'
          },
          {
            id: 'functional',
            label: 'Functional requirements',
            explanation:
              'The team identifies the behaviours the software must provide.',
            example:
              'Login, course browsing, video access, tests, progress and AI doubts.'
          },
          {
            id: 'non-functional',
            label: 'Non-functional requirements',
            explanation:
              'The team defines qualities and constraints that affect architecture.',
            example:
              'Performance, security, availability and scalability.'
          },
          {
            id: 'boundaries',
            label: 'System boundaries',
            explanation:
              'Related responsibilities are grouped into meaningful system components.',
            example:
              'Course, assessment, identity, progress and AI capabilities.'
          },
          {
            id: 'interfaces',
            label: 'Interfaces',
            explanation:
              'Components need predictable ways to communicate with each other.',
            example:
              'APIs and asynchronous messages can connect system capabilities.'
          },
          {
            id: 'architecture',
            label: 'Architecture',
            explanation:
              'The resulting structure shows how users, application components and data services interact.',
            example:
              'Client → API layer → application components → data and external services.'
          }
        ],

        closing:
          'Architecture is the result of understanding requirements, defining responsibilities and choosing how system parts should interact.'
      },
    },

    {
      id: 'mc07-s01-architecture-simulation',
      type: 'simulation',
      title: 'Place the requirement in the right layer',
      description:
        'Practice distinguishing business requirements, functional requirements, non-functional requirements and architecture decisions.',

      simulation: {
        instruction:
          'Match each system-design statement with the requirement or architecture concept it represents.',
        items: [
          {
            id: 'student-login',
            label: 'Student can log in to the platform',
            description:
              'This describes behaviour the system must provide.',
            correctTargetId: 'functional'
          },
          {
            id: 'response-time',
            label: 'Course API should respond within an agreed latency target',
            description:
              'This describes a performance constraint.',
            correctTargetId: 'non-functional'
          },
          {
            id: 'business-outcome',
            label: 'Students should be able to access digital learning content',
            description:
              'This describes the product outcome.',
            correctTargetId: 'business'
          },
          {
            id: 'api-boundary',
            label: 'Course functionality is exposed through a backend API',
            description:
              'This describes an architectural decision about system interaction.',
            correctTargetId: 'architecture'
          }
        ],
        targets: [
          {
            id: 'business',
            label: 'BUSINESS REQUIREMENT',
            description:
              'Describes the outcome the organization wants from the product.',
          },
          {
            id: 'functional',
            label: 'FUNCTIONAL REQUIREMENT',
            description:
              'Describes behaviour the software must provide.',
          },
          {
            id: 'non-functional',
            label: 'NON-FUNCTIONAL REQUIREMENT',
            description:
              'Describes qualities or constraints such as performance, security or scalability.',
          },
          {
            id: 'architecture',
            label: 'ARCHITECTURE DECISION',
            description:
              'Describes how system responsibilities and interfaces are structured.',
          },
        ],
        successMessage:
          'Correct. Good architecture connects business needs, system behaviour, system qualities and structural decisions.',
        failureMessage:
          'Separate what the business wants, what the software must do, the qualities it must achieve and how the system is structured.',
      },
    },

    {
      id: 'mc07-s01-architecture-question',
      type: 'question',
      title: 'Architecture thinking check',
      description:
        'Check whether you can distinguish requirements from architecture decisions.',

      question: {
        id: 'mc07-s01-architecture',
        type: 'single-choice',
        question:
          'A product team says, "Our platform must support a large number of students without becoming unusably slow." What kind of requirement is this primarily?',
        options: [
          {
            id: 'non-functional',
            text: 'A non-functional requirement because it describes a scalability and performance expectation',
            correct: true,
          },
          {
            id: 'database-command',
            text: 'A database command because every scalability requirement is implemented directly by SQL',
            correct: false,
          },
          {
            id: 'ui-component',
            text: 'A user-interface component because performance only concerns the browser',
            correct: false,
          },
          {
            id: 'deployment-script',
            text: 'A deployment script because requirements and architecture decisions are the same thing',
            correct: false,
          }
        ],
        explanation:
          'Scalability and performance describe qualities the system must achieve. They are therefore non-functional requirements that influence later architecture decisions.',
      },
    },
  ],
}
