import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session02: SessionDefinition = {
  id: 'mc07-session-02',
  number: 2,
  stage: 'discover',
  title: 'Requirements, Constraints & System Boundaries',
  objective:
    'Learn how architects translate business goals into functional requirements, non-functional requirements, constraints, actors and explicit system boundaries before choosing technologies or components.',

  experiences: [
    {
      id: 'mc07-s02-requirements-lesson',
      type: 'lesson',
      title: 'From Business Need to System Boundary',
      description:
        'Understand why good system design begins with understanding what the business needs, what the system must do, what quality it must provide and what constraints shape the solution.',

      lesson: {
        opening:
          'Imagine the EDDUU learning platform is preparing for a major expansion. Leadership says, “We need a platform where students can learn, take tests and get AI-powered doubt support.” An architect should not immediately choose databases, APIs or cloud services. The first job is to understand exactly what problem the system must solve and where the system begins and ends.',

        sections: [
          {
            heading: '1. Start with the business goal',
            explanation:
              'A business goal describes the outcome the organization wants. It is broader than a software feature. The goal gives architecture work its direction because technical decisions should support a measurable business outcome.',
            example:
              'For EDDUU, the business goal might be to provide one digital learning platform where students can access courses, practice assessments and receive timely doubt support.',
          },
          {
            heading: '2. Functional requirements describe behaviour',
            explanation:
              'A functional requirement explains something the system must do. These requirements become capabilities that users and other systems can interact with. They answer questions such as what a student can perform and what the platform must return.',
            example:
              'A student can sign in, browse enrolled courses, start a lesson, submit an assessment, view results and submit a doubt for AI assistance.',
          },
          {
            heading: '3. Non-functional requirements describe system qualities',
            explanation:
              'Non-functional requirements describe how well the system should operate rather than only what it should do. They influence architecture because performance, availability, security, scalability and reliability often require different technical approaches.',
            example:
              'The learning platform may need to support thousands of students taking an examination at the same time while keeping response times acceptable.',
          },
          {
            heading: '4. Constraints limit the solution space',
            explanation:
              'A constraint is a condition the architecture must respect even when another design might technically be possible. Constraints can come from budget, existing systems, regulations, organizational skills, delivery timelines or technology decisions that are already fixed.',
            example:
              'EDUUU may have an existing identity provider, a fixed delivery deadline and a limited engineering team. The architecture must work within those boundaries instead of assuming unlimited resources.',
          },
          {
            heading: '5. Identify the actors',
            explanation:
              'Actors are people, organizations or external systems that interact with the system. Identifying actors prevents architects from designing only for internal software components while forgetting the actual users and dependencies around the product.',
            example:
              'Students, teachers, administrators, payment providers, identity providers, notification services and AI model providers can all interact with the learning platform in different ways.',
          },
          {
            heading: '6. Define the system boundary',
            explanation:
              'The system boundary is the line that separates what our system owns from what is outside our system. This is one of the most important early architecture decisions because it determines responsibilities, interfaces and dependencies.',
            example:
              'EDUUU may own course management, student progress and assessment workflows, while an external payment provider owns payment processing and an external AI provider owns model inference.',
          },
          {
            heading: '7. Separate responsibility from dependency',
            explanation:
              'An external service can be essential without becoming part of our internal system. The architecture should make the ownership boundary explicit: our system decides when and why to call a dependency, while the dependency performs its own responsibility.',
            example:
              'EDUUU may send a request to an AI provider for doubt generation. EDDUU owns the student workflow and conversation context, while the external provider owns model inference.',
          },
          {
            heading: '8. Requirements influence architecture',
            explanation:
              'Architecture should emerge from requirements and constraints rather than from a list of fashionable technologies. A scalability requirement may influence deployment and data architecture; a security requirement may influence identity and authorization; a low-latency requirement may influence caching and communication patterns.',
            example:
              'If exam traffic creates a large concurrent load, the architecture may need independently scalable application services rather than one tightly coupled process handling every responsibility.',
          },
          {
            heading: '9. Boundaries create clearer ownership',
            explanation:
              'A useful boundary gives each part of the system a clear responsibility. Poor boundaries create components that know too much about each other, making changes difficult and increasing the chance that one failure spreads across unrelated functionality.',
            example:
              'Separating assessment responsibility from course-content responsibility allows the assessment workflow to evolve without requiring the course-content component to understand scoring rules.',
          },
          {
            heading: '10. Architecture starts before technology selection',
            explanation:
              'Choosing PostgreSQL, Redis, AWS, Kubernetes or a particular framework does not define a good architecture by itself. First determine the problem, requirements, constraints, boundaries and interactions. Technology should then be evaluated against those decisions.',
            example:
              'Instead of saying “we need microservices,” first ask which responsibilities genuinely need independent scaling, ownership, deployment or failure isolation.',
          },
        ],

        realWorldConnection:
          'In a real engineering program, requirements workshops, architecture reviews and stakeholder discussions often happen before implementation begins. The architect and technical leaders use these conversations to create a shared understanding of scope and constraints.',

        keyIdea:
          'Before designing components, understand the problem. Business goals become requirements; requirements and constraints shape boundaries; boundaries define responsibilities and interfaces; those decisions then guide architecture.',

        recap: [
          'Business goals describe the outcome the organization wants.',
          'Functional requirements describe what the system must do.',
          'Non-functional requirements describe qualities such as performance, security and scalability.',
          'Constraints limit the solution space.',
          'Actors identify who or what interacts with the system.',
          'A system boundary defines what the system owns versus what remains external.',
          'Architecture decisions should be traceable back to requirements and constraints.',
        ],
      },
    },

    {
      id: 'mc07-s02-boundary-animation',
      type: 'animation',
      title: 'See the System Boundary',
      description:
        'Visualize how a system boundary separates internal responsibilities from external actors and services.',

      animation: {
        visual: 'architecture',
        opening:
          'A system boundary is like the property line around a house. The people, rooms and responsibilities inside are owned by the house, while electricity, water, delivery services and neighbours remain outside but may interact with it.',

        parts: [
          {
            id: 'business',
            label: 'Business Goal',
            explanation:
              'The organization first identifies the outcome it wants the product to achieve.',
            example:
              'Help students learn, practice, assess themselves and receive doubt support.',
          },
          {
            id: 'requirements',
            label: 'Requirements',
            explanation:
              'The goal becomes specific capabilities and quality expectations.',
            example:
              'Course access, assessment, AI assistance, availability and scalability.',
          },
          {
            id: 'actors',
            label: 'Actors',
            explanation:
              'People and external systems that interact with the product are identified.',
            example:
              'Students, teachers, administrators, payment systems and AI providers.',
          },
          {
            id: 'boundary',
            label: 'System Boundary',
            explanation:
              'The architecture defines which responsibilities belong to the EDDUU platform.',
            example:
              'Course, assessment, progress and student workflows remain inside the platform.',
          },
          {
            id: 'interfaces',
            label: 'Interfaces',
            explanation:
              'External dependencies are connected through explicit interfaces rather than shared internal ownership.',
            example:
              'API calls to an identity provider, payment service or AI model provider.',
          },
          {
            id: 'architecture',
            label: 'Architecture',
            explanation:
              'The boundary and responsibilities provide the foundation for later component and data-flow decisions.',
            example:
              'Application components communicate through defined interfaces and own specific responsibilities.',
          },
        ],

        closing:
          'Good architecture makes ownership visible. Once the team agrees on what the system owns and what remains outside, component responsibilities and interfaces become much easier to reason about.',
      },
    },

    {
      id: 'mc07-s02-boundary-simulation',
      type: 'simulation',
      title: 'Place Requirements Inside the Right Boundary',
      description:
        'Classify statements according to the type of requirement or architecture boundary they represent.',

      simulation: {
        instruction:
          'Match each statement with the correct requirement or boundary category.',

        items: [
          {
            id: 'business-goal',
            label: 'Students should have one place to learn and practice.',
            description:
              'This describes the business outcome the product is intended to support.',
            correctTargetId: 'business-target',
          },
          {
            id: 'functional',
            label: 'A student can submit an assessment and receive a result.',
            description:
              'This describes behaviour the software must provide.',
            correctTargetId: 'functional-target',
          },
          {
            id: 'quality',
            label: 'The platform must support high concurrent exam traffic.',
            description:
              'This describes a quality or capacity expectation.',
            correctTargetId: 'non-functional-target',
          },
          {
            id: 'external',
            label: 'Payment processing is performed by an external provider.',
            description:
              'This identifies responsibility that exists outside the EDDUU system boundary.',
            correctTargetId: 'external-target',
          },
        ],

        targets: [
          {
            id: 'business-target',
            label: 'BUSINESS GOAL',
            description:
              'Describes the outcome the organization wants to achieve.',
          },
          {
            id: 'functional-target',
            label: 'FUNCTIONAL REQUIREMENT',
            description:
              'Describes behaviour or capability the system must provide.',
          },
          {
            id: 'non-functional-target',
            label: 'NON-FUNCTIONAL REQUIREMENT',
            description:
              'Describes system qualities or constraints such as scalability or performance.',
          },
          {
            id: 'external-target',
            label: 'OUTSIDE THE SYSTEM',
            description:
              'Represents responsibility owned by an external actor or service.',
          },
        ],

        successMessage:
          'Correct. Requirements and boundaries become useful when they lead to clear ownership and explicit architectural decisions.',

        failureMessage:
          'Separate the desired business outcome, system behaviour, system qualities and responsibilities owned outside the system.',
      },
    },

    {
      id: 'mc07-s02-requirements-question',
      type: 'question',
      title: 'Requirements Understanding Check',
      description:
        'Check whether you can distinguish requirements from architecture boundaries.',

      question: {
        id: 'mc07-s02-requirements',
        type: 'single-choice',
        question:
          'An architecture team is designing an online examination platform. Which statement should influence the architecture as a non-functional requirement?',
        options: [
          {
            id: 'scalability',
            text:
              'The platform must support 20,000 students submitting exams during a short peak period.',
            correct: true,
          },
          {
            id: 'login',
            text:
              'A student can log in using an account.',
            correct: false,
          },
          {
            id: 'course',
            text:
              'A student can open an enrolled course.',
            correct: false,
          },
          {
            id: 'result',
            text:
              'A student can view an assessment result.',
            correct: false,
          },
        ],
        explanation:
          'The 20,000-student peak describes a scalability and capacity expectation. It affects architectural decisions such as deployment, data access, caching and workload distribution. The other choices describe functional capabilities.',
      },
    },
  ],
}