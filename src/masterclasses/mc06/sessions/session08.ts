import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session08: SessionDefinition = {
  id: 'mc06-s08',
  number: 8,
  stage: 'defend',
  title: 'How a Real Engineering Team Delivers Software',
  objective:
    'Understand the complete collaboration and delivery system used by a real engineering team to move a business requirement safely into production and learn from the result.',
  experiences: [
    {
      id: 'mc06-s08-lesson',
      type: 'lesson',
      title: 'From business requirement to production feedback',
      description:
        'Connect product planning, engineering collaboration, Git, CI/CD, deployment and production feedback into one realistic team workflow.',
      lesson: {
        opening:
          'A real engineering team does not treat Git as an isolated developer tool. Git sits inside a larger delivery system where product decisions, engineering work, quality controls, deployment and production feedback are connected.',
        sections: [
          {
            heading: 'The workflow starts with a business or user need',
            explanation:
              'The team first identifies the outcome that needs to change rather than beginning with a Git command.',
            example:
              'Students are accidentally able to submit the same enrollment twice.',
          },
          {
            heading: 'Product and engineering clarify the work',
            explanation:
              'The team defines the expected behavior, scope, acceptance criteria, dependencies and risks before implementation begins.',
            example:
              'Acceptance criteria require duplicate enrollment attempts to be rejected safely.',
          },
          {
            heading: 'The developer creates an isolated branch',
            explanation:
              'The implementation is separated from the shared integration branch so it can evolve independently.',
            example:
              'feature/prevent-duplicate-enrollment',
          },
          {
            heading: 'Commits create an auditable implementation history',
            explanation:
              'The developer records meaningful changes so reviewers and teammates can understand how the implementation evolved.',
            example:
              'Commits separate validation logic, tests and documentation changes.',
          },
          {
            heading: 'The pull request becomes the collaboration boundary',
            explanation:
              'The pull request gives the team a shared place to inspect the proposed implementation, discuss concerns and decide whether it is ready.',
            example:
              'The PR contains the implementation, test evidence and explanation of the design.',
          },
          {
            heading: 'CI provides repeatable automated checks',
            explanation:
              'Continuous integration automatically validates the proposed change through repeatable checks.',
            example:
              'CI runs tests, type checks, linting and the production build.',
          },
          {
            heading: 'Reviewers evaluate correctness and risk',
            explanation:
              'Code review adds human judgment around design, maintainability, security, edge cases and operational risk.',
            example:
              'A reviewer asks whether concurrent enrollment requests can still create duplicates.',
          },
          {
            heading: 'Approved changes are merged',
            explanation:
              "Once required reviews and automated checks pass, the change is integrated according to the team's branch strategy.",
            example:
              'The approved PR is merged into main.',
          },
          {
            heading: 'The delivery pipeline builds and deploys',
            explanation:
              'The integrated source moves through build and deployment automation toward the intended environment.',
            example:
              'CI/CD builds the application and deploys the validated artifact.',
          },
          {
            heading: 'Production monitoring validates the release',
            explanation:
              'The team watches technical and business signals after deployment to determine whether the release behaves as expected.',
            example:
              'The team monitors enrollment errors, latency and successful enrollment rates.',
          },
          {
            heading: 'Feedback becomes the next engineering input',
            explanation:
              'Production results, incidents, user feedback and operational metrics can create new backlog work and begin another delivery cycle.',
            example:
              'A newly discovered edge case becomes the next engineering task.',
          },
          {
            heading: 'Recovery is part of engineering responsibility',
            explanation:
              'Teams need a response when production behavior becomes unacceptable, including rollback, mitigation, hotfixes or incident response.',
            example:
              'A severe regression triggers rollback while engineers investigate the root cause.',
          },
        ],
      },
    },

    {
      id: 'mc06-s08-animation',
      type: 'animation',
      title: 'Watch a real engineering team deliver one change',
      description:
        'Follow one business requirement through planning, engineering collaboration, Git, CI/CD, production and feedback.',
      animation: {
        visual: 'architecture',
        opening:
          'A production release is the result of coordinated work across product, engineering, quality, delivery and operations.',
        parts: [
          {
            id: 'requirement',
            label: 'BUSINESS REQUIREMENT',
            explanation:
              'A user or business problem creates the need for a software change.',
            example:
              'Prevent duplicate student enrollments.',
          },
          {
            id: 'planning',
            label: 'BACKLOG + ACCEPTANCE CRITERIA',
            explanation:
              'The team defines the expected outcome, scope and conditions for success.',
            example:
              'Duplicate enrollment must be rejected and covered by tests.',
          },
          {
            id: 'developer',
            label: 'DEVELOPER + FEATURE BRANCH',
            explanation:
              'The developer implements the change in an isolated Git branch.',
            example:
              'feature/prevent-duplicate-enrollment',
          },
          {
            id: 'commits',
            label: 'COMMITS',
            explanation:
              'Meaningful Git commits create a traceable implementation history.',
            example:
              'Validation logic and tests are recorded as commits.',
          },
          {
            id: 'pull-request',
            label: 'PULL REQUEST',
            explanation:
              'The branch becomes a shared review boundary for the engineering team.',
            example:
              'PR targets main with implementation and test evidence.',
          },
          {
            id: 'ci',
            label: 'CI CHECKS',
            explanation:
              'Automated checks validate the proposed change consistently.',
            example:
              'Tests, type checks and build complete successfully.',
          },
          {
            id: 'review',
            label: 'CODE REVIEW',
            explanation:
              'Engineers inspect correctness, design, maintainability and operational risk.',
            example:
              'Reviewer examines concurrency and edge cases.',
          },
          {
            id: 'merge',
            label: 'MERGE',
            explanation:
              'The approved change is integrated into the shared target branch.',
            example:
              'PR merges into main.',
          },
          {
            id: 'delivery',
            label: 'BUILD + DEPLOY',
            explanation:
              'The integrated code becomes a deployable artifact and is released.',
            example:
              'CI/CD deploys the validated application version.',
          },
          {
            id: 'production',
            label: 'PRODUCTION',
            explanation:
              'Users interact with the released software in the real environment.',
            example:
              'Students submit enrollments.',
          },
          {
            id: 'monitoring',
            label: 'MONITORING',
            explanation:
              'The team observes technical health and business behavior after release.',
            example:
              'Monitor errors, latency and successful enrollment rate.',
          },
          {
            id: 'feedback',
            label: 'FEEDBACK + NEXT WORK',
            explanation:
              'Production signals and user feedback create learning, follow-up work or recovery actions.',
            example:
              'A new edge case enters the backlog.',
          },
        ],
        closing:
          'The engineering team delivers through a continuous system rather than a single handoff. Every stage creates information that helps the next stage make a safer decision.',
      },
    },

    {
      id: 'mc06-s08-simulation',
      type: 'simulation',
      title: 'Operate the engineering delivery system',
      description:
        'Trace a realistic software change through the complete engineering team workflow.',
      simulation: {
        instruction:
          'Connect each activity to the stage where the engineering team performs it.',
        items: [
          {
            id: 'requirement-task',
            label: 'Identify the user or business problem.',
            description:
              'The team establishes why the change is needed.',
            correctTargetId: 'requirement-target',
          },
          {
            id: 'planning-task',
            label: 'Define scope and acceptance criteria.',
            description:
              'The team establishes expected behavior and success conditions.',
            correctTargetId: 'planning-target',
          },
          {
            id: 'development-task',
            label: 'Implement the change on a feature branch.',
            description:
              'Engineering develops the proposed solution.',
            correctTargetId: 'development-target',
          },
          {
            id: 'review-task',
            label: 'Open the pull request and review the implementation.',
            description:
              'The proposed change is inspected collaboratively.',
            correctTargetId: 'review-target',
          },
          {
            id: 'ci-task',
            label: 'Run automated tests and build checks.',
            description:
              'CI provides repeatable quality feedback.',
            correctTargetId: 'ci-target',
          },
          {
            id: 'integration-task',
            label: 'Merge the approved change.',
            description:
              'The validated implementation enters the shared branch.',
            correctTargetId: 'integration-target',
          },
          {
            id: 'deployment-task',
            label: 'Build and deploy the release.',
            description:
              'The validated software is delivered to the target environment.',
            correctTargetId: 'deployment-target',
          },
          {
            id: 'operations-task',
            label: 'Monitor production and respond to feedback.',
            description:
              'The team observes the release and acts on production signals.',
            correctTargetId: 'operations-target',
          },
        ],
        targets: [
          {
            id: 'requirement-target',
            label: 'BUSINESS NEED',
            description:
              'Understand the problem and desired outcome.',
          },
          {
            id: 'planning-target',
            label: 'PLANNING',
            description:
              'Define scope and acceptance criteria.',
          },
          {
            id: 'development-target',
            label: 'ENGINEERING',
            description:
              'Develop the change on an isolated branch.',
          },
          {
            id: 'review-target',
            label: 'COLLABORATION',
            description:
              'Use pull requests and code review.',
          },
          {
            id: 'ci-target',
            label: 'CONTINUOUS INTEGRATION',
            description:
              'Run automated checks.',
          },
          {
            id: 'integration-target',
            label: 'INTEGRATION',
            description:
              'Merge the approved change.',
          },
          {
            id: 'deployment-target',
            label: 'DELIVERY',
            description:
              'Build and deploy the release.',
          },
          {
            id: 'operations-target',
            label: 'PRODUCTION + FEEDBACK',
            description:
              'Monitor the system and feed learning back into the workflow.',
          },
        ],
        successMessage:
          'Excellent. You traced a real engineering change from business need through development, collaboration, CI, integration, delivery and production feedback.',
      },
    },

    {
      id: 'mc06-s08-question',
      type: 'question',
      title: 'Where does Git fit in the engineering system?',
      description:
        'Test whether you can connect Git to the larger delivery lifecycle.',
      question: {
        id: 'mc06-s08-question',
        type: 'single-choice',
        question:
          'Which statement best describes Git in a modern engineering delivery system?',
        options: [
          {
            id: 'system',
            text:
              'Git provides version control and collaboration foundations that connect development work to review and integration, while the wider delivery system includes testing, CI/CD, deployment and monitoring.',
            correct: true,
          },
          {
            id: 'everything',
            text:
              'Git alone performs product planning, code review, testing, deployment and production monitoring.',
            correct: false,
          },
          {
            id: 'storage',
            text:
              'Git is only a file-storage system and has no role in collaboration or change history.',
            correct: false,
          },
          {
            id: 'production',
            text:
              'Git automatically guarantees that every merged change is safe in production.',
            correct: false,
          },
        ],
        explanation:
          'Git is a foundational part of the software delivery system, but reliable delivery also requires planning, review, testing, automation, deployment and production feedback.',
      },
    },
  ],
}

