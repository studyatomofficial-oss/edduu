import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc07Session08: SessionDefinition = {
  id: 'mc07-session-08',
  number: 8,
  stage: 'challenge',
  title: 'Capstone: Design an End-to-End Learning Platform',
  objective:
    'Apply the complete architecture mental model to design a production-ready education platform by connecting requirements, boundaries, services, data, security, scalability, reliability and operational concerns.',

  experiences: [
    {
      id: 'mc07-s08-capstone-lesson',
      type: 'lesson',
      title: 'From Requirements to Architecture',
      description:
        'Bring the previous sessions together and understand how an architect moves from business requirements to an explicit system design.',

      lesson: {
        opening:
          'A good architecture is not a collection of fashionable technologies. It is a structured response to a real problem. The architect starts with what the system must achieve, identifies constraints, defines boundaries and then selects technical mechanisms that satisfy those requirements.',

        sections: [
          {
            heading: '1. Start with the business problem',
            explanation:
              'Architecture should begin with the outcome the organization needs. Technical choices become meaningful only when connected to that outcome.',
            example:
              'The education platform must allow students to learn, complete assessments, track progress and receive AI-powered academic help.',
          },
          {
            heading: '2. Identify the actors',
            explanation:
              'Actors are the people or external systems interacting with the platform. Different actors often have different capabilities and security requirements.',
            example:
              'Students, teachers, administrators, payment providers and AI services can all be actors in the platform ecosystem.',
          },
          {
            heading: '3. Define system boundaries',
            explanation:
              'A boundary clarifies what belongs inside the system and which responsibilities remain with external services. Clear boundaries prevent the architecture from becoming an undefined collection of components.',
            example:
              'The learning platform may own student progress while an external payment provider owns payment processing.',
          },
          {
            heading: '4. Identify major capabilities',
            explanation:
              'Instead of starting with databases or servers, identify the business capabilities the system must provide.',
            example:
              'Identity, course delivery, assessment, progress tracking, notifications and AI assistance are major platform capabilities.',
          },
          {
            heading: '5. Assign responsibilities',
            explanation:
              'Each component should have a clear responsibility. Components that have unrelated responsibilities become difficult to reason about and change.',
            example:
              'An assessment component can own assessment rules and results while a notification component handles delivery of messages.',
          },
          {
            heading: '6. Design communication paths',
            explanation:
              'Components need defined ways to communicate. Synchronous APIs are useful when the caller needs an immediate response. Asynchronous messaging is useful when work can happen later.',
            example:
              'A student request for course details may use a synchronous API while sending a completion notification can happen through an asynchronous queue.',
          },
          {
            heading: '7. Decide where data belongs',
            explanation:
              'Data ownership, consistency requirements, access patterns and transaction boundaries influence storage choices. The database should support the domain rather than dictate it.',
            example:
              'Assessment results require reliable transactional updates, while frequently viewed course metadata may benefit from caching.',
          },
          {
            heading: '8. Design for failure',
            explanation:
              'Every dependency can fail. The architecture should identify which failures can be isolated, retried, degraded or allowed to block a critical transaction.',
            example:
              'AI assistance can fail without preventing students from submitting an assessment.',
          },
          {
            heading: '9. Design for growth',
            explanation:
              'Expected traffic, concurrency and data growth influence capacity and scaling decisions. Architects should identify likely bottlenecks instead of assuming every component needs the same scaling strategy.',
            example:
              'Stateless APIs can scale horizontally while a heavily accessed database may require a different capacity strategy.',
          },
          {
            heading: '10. Apply security boundaries',
            explanation:
              'Authentication, authorization, least privilege and data protection must be applied where trust boundaries exist.',
            example:
              'A student can access their own progress while administrative operations require stronger permissions.',
          },
          {
            heading: '11. Make production observable',
            explanation:
              'A system that cannot be observed is difficult to operate. Metrics, logs, traces, health checks and actionable alerts should support the team\'s operational responsibilities.',
            example:
              'The team should be able to identify whether increased assessment latency comes from the API, database or an external dependency.',
          },
          {
            heading: '12. Explain the trade-offs',
            explanation:
              'There is rarely one perfect architecture. A strong design explains why choices were made, what they cost, what risks they introduce and when they should be reconsidered.',
            example:
              'A modular application may be chosen initially because it provides simpler operations, with a future service split triggered by clear scaling or team-ownership requirements.',
          },
        ],

        realWorldConnection:
          'This is the same reasoning used in architecture reviews, technical product discussions and system-design interviews: start with requirements, make boundaries explicit, identify responsibilities, design data and communication flows, then address security, scale, reliability and operations.',

        keyIdea:
          'Architecture is a chain of decisions. Requirements lead to capabilities, capabilities lead to boundaries, boundaries lead to responsibilities and communication, and those choices must collectively satisfy security, scale, reliability and operational needs.',

        recap: [
          'Start from business outcomes and requirements.',
          'Identify actors and system boundaries.',
          'Define major capabilities and responsibilities.',
          'Choose communication patterns based on interaction needs.',
          'Design data ownership and consistency deliberately.',
          'Plan for failure and dependency degradation.',
          'Plan for expected growth and bottlenecks.',
          'Apply security controls at trust boundaries.',
          'Make the production system observable.',
          'Document architecture trade-offs and future decision triggers.',
        ],
      },
    },

    {
      id: 'mc07-s08-capstone-animation',
      type: 'animation',
      title: 'Build the Architecture from the Outside In',
      description:
        'Visualize how requirements become system boundaries, components, data flows and production controls.',

      animation: {
        visual: 'architecture',
        opening:
          'Start outside the technology. First understand who needs the system and what they need it to accomplish. Then progressively turn those needs into an architecture.',

        parts: [
          {
            id: 'requirements',
            label: 'REQUIREMENTS',
            explanation:
              'Define what users and the business need the system to accomplish.',
            example:
              'Students need learning, assessments, progress tracking and AI assistance.',
          },
          {
            id: 'boundary',
            label: 'BOUNDARIES',
            explanation:
              'Decide what responsibilities belong inside the platform and what remains external.',
            example:
              'Payments can remain with an external payment provider.',
          },
          {
            id: 'components',
            label: 'COMPONENTS',
            explanation:
              'Group related responsibilities into understandable system components.',
            example:
              'Identity, course, assessment, progress and AI capabilities form distinct responsibilities.',
          },
          {
            id: 'data',
            label: 'DATA',
            explanation:
              'Determine which components own important data and how that data moves through the system.',
            example:
              'Assessment results require controlled transactional updates.',
          },
          {
            id: 'production',
            label: 'PRODUCTION',
            explanation:
              'Add security, scaling, observability and failure-handling mechanisms needed to operate the system.',
            example:
              'Authentication, horizontal scaling, metrics and graceful degradation support production operation.',
          },
        ],

        closing:
          'The final architecture should tell one coherent story from business requirement to production behaviour. Every major technology choice should have a reason connected to that story.',
      },
    },

    {
      id: 'mc07-s08-capstone-simulation',
      type: 'simulation',
      title: 'Assemble the Architecture Story',
      description:
        'Put the major architecture decisions in the order an architect should reason through them.',

      simulation: {
        instruction:
          'Match each architecture decision with the correct stage of the design process.',

        items: [
          {
            id: 'requirements',
            label: 'Students need learning, assessments and AI assistance.',
            description:
              'Start by understanding the required business outcomes.',
            correctTargetId: 'requirements-target',
          },
          {
            id: 'boundary',
            label: 'Payment processing belongs to an external provider.',
            description:
              'Define ownership and system boundaries.',
            correctTargetId: 'boundary-target',
          },
          {
            id: 'responsibility',
            label: 'Assessment logic owns assessment results.',
            description:
              'Assign responsibilities to system components.',
            correctTargetId: 'responsibility-target',
          },
          {
            id: 'production',
            label: 'Add authentication, monitoring and scaling controls.',
            description:
              'Make the design suitable for production operation.',
            correctTargetId: 'production-target',
          },
        ],

        targets: [
          {
            id: 'requirements-target',
            label: 'REQUIREMENTS',
            description:
              'Understand the business outcome and user needs.',
          },
          {
            id: 'boundary-target',
            label: 'BOUNDARIES',
            description:
              'Define what the system owns and what remains external.',
          },
          {
            id: 'responsibility-target',
            label: 'RESPONSIBILITIES',
            description:
              'Assign clear responsibilities to components.',
          },
          {
            id: 'production-target',
            label: 'PRODUCTION CONCERNS',
            description:
              'Add security, scalability, reliability and observability requirements.',
          },
        ],

        successMessage:
          'Correct. A strong architecture tells a logical story from requirements through boundaries and responsibilities to production behaviour.',

        failureMessage:
          'Think from outside to inside: first understand the requirement, then boundaries, then responsibilities and finally production concerns.',
      },
    },

    {
      id: 'mc07-s08-capstone-question',
      type: 'question',
      title: 'Architecture Capstone Check',
      description:
        'Test whether you can recognize the core principle behind system architecture.',

      question: {
        id: 'mc07-s08-capstone',
        type: 'single-choice',
        question:
          'Which statement best describes a strong software architecture decision?',
        options: [
          {
            id: 'reasoned',
            text:
              'It connects business requirements and technical constraints to explicit responsibilities, trade-offs and operational behaviour.',
            correct: true,
          },
          {
            id: 'technology',
            text:
              'It chooses the newest technologies available regardless of the actual requirements.',
            correct: false,
          },
          {
            id: 'complexity',
            text:
              'It maximizes the number of services because more services always mean better architecture.',
            correct: false,
          },
          {
            id: 'diagram',
            text:
              'It focuses only on producing a diagram and does not need to consider runtime behaviour.',
            correct: false,
          },
        ],

        explanation:
          'Strong architecture connects requirements, boundaries, responsibilities, data, communication, security, scale, reliability and operations. Technology choices are mechanisms that support those decisions, not the starting point.',
      },
    },
  ],
}