import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session07: SessionDefinition = {
  id: 'mc06-s07',
  number: 7,
  stage: 'production',
  title: 'Software Delivery Workflow',
  objective:
    'Understand how engineering teams move a software change from planned work through development, review, testing, integration, deployment and production monitoring.',
  experiences: [
    {
      id: 'mc06-s07-lesson',
      type: 'lesson',
      title: 'Git is one part of the software delivery lifecycle',
      description:
        'Connect Git workflows to the larger process used to safely move software changes into production.',
      lesson: {
        opening:
          'Git records and coordinates source-code changes, but software delivery involves more than Git commands. Engineering teams connect planning, development, review, testing, integration, deployment and monitoring into a repeatable delivery workflow.',
        sections: [
          {
            heading: 'Delivery begins with a planned change',
            explanation:
              'A team normally starts with a business requirement, defect, technical improvement or product task that needs to be delivered.',
            example:
              'The team needs to prevent duplicate student enrollments.',
          },
          {
            heading: 'Development happens in an isolated branch',
            explanation:
              'The developer creates a feature or fix branch so the change can be developed without directly modifying the important integration branch.',
            example:
              'feature/prevent-duplicate-enrollment',
          },
          {
            heading: 'Commits create traceable checkpoints',
            explanation:
              'Developers record coherent units of work as commits so the evolution of the implementation can be inspected and reviewed.',
            example:
              'Add enrollment validation and commit the change.',
          },
          {
            heading: 'A pull request starts formal review',
            explanation:
              'The completed branch is published and proposed for integration through a pull request.',
            example:
              'Open a pull request from the feature branch into main.',
          },
          {
            heading: 'Automated checks provide fast feedback',
            explanation:
              'Continuous integration can automatically run tests, type checks, linting and builds when a change is proposed.',
            example:
              'The CI pipeline runs npm test and npm run build.',
          },
          {
            heading: 'Code review evaluates the change',
            explanation:
              'Reviewers inspect the implementation, tests, design choices and potential risks before the change is approved.',
            example:
              'A reviewer checks whether duplicate enrollment cases are covered by tests.',
          },
          {
            heading: 'Merge integrates the approved change',
            explanation:
              'After required reviews and quality gates pass, the change can be integrated into the target branch.',
            example:
              'The approved pull request is merged into main.',
          },
          {
            heading: 'Build creates a deployable artifact',
            explanation:
              'A build process transforms source code into the artifacts required by the runtime or deployment environment.',
            example:
              'The frontend build produces the production assets.',
          },
          {
            heading: 'Deployment moves the change toward users',
            explanation:
              'Deployment makes the built software available in the intended environment such as staging or production.',
            example:
              'The validated build is deployed to the production environment.',
          },
          {
            heading: 'Monitoring closes the delivery loop',
            explanation:
              'After deployment, teams observe application health, errors, performance and business signals to detect problems and learn from production behavior.',
            example:
              'The team watches API error rates after releasing the enrollment change.',
          },
          {
            heading: 'Rollback is part of safe delivery',
            explanation:
              'If a production change causes unacceptable problems, teams need a controlled way to restore a known-good version or mitigate the issue.',
            example:
              'The team rolls back the release when error rates increase unexpectedly.',
          },
        ],
      },
    },

    {
      id: 'mc06-s07-animation',
      type: 'animation',
      title: 'Watch a software change travel to production',
      description:
        'Follow one engineering change from planning through development, review, testing, deployment and monitoring.',
      animation: {
        visual: 'concept-flow',
        opening:
          'A production change passes through multiple controlled stages before and after it reaches users.',
        parts: [
          {
            id: 'plan',
            label: 'PLAN',
            explanation:
              'The team identifies and prioritizes the change that needs to be delivered.',
            example:
              'Prevent duplicate student enrollments.',
          },
          {
            id: 'develop',
            label: 'DEVELOP',
            explanation:
              'A developer implements the change on an isolated branch.',
            example:
              'feature/prevent-duplicate-enrollment',
          },
          {
            id: 'commit',
            label: 'COMMIT',
            explanation:
              'The developer records the implementation as traceable Git commits.',
            example:
              'Add validation and commit the change.',
          },
          {
            id: 'review',
            label: 'PULL REQUEST + REVIEW',
            explanation:
              'The change is proposed for integration and inspected by reviewers.',
            example:
              'Reviewer checks implementation and tests.',
          },
          {
            id: 'test',
            label: 'AUTOMATED TESTS',
            explanation:
              'Automated quality checks validate the proposed change before integration.',
            example:
              'Unit tests, integration tests and build checks pass.',
          },
          {
            id: 'merge',
            label: 'MERGE',
            explanation:
              'The reviewed and validated change is integrated into the target branch.',
            example:
              'Pull request merges into main.',
          },
          {
            id: 'build',
            label: 'BUILD',
            explanation:
              'Source code is transformed into a deployable artifact.',
            example:
              'Production assets are generated.',
          },
          {
            id: 'deploy',
            label: 'DEPLOY',
            explanation:
              'The validated artifact is released into the target environment.',
            example:
              'Production receives the new version.',
          },
          {
            id: 'monitor',
            label: 'MONITOR',
            explanation:
              'The team observes production behavior after release.',
            example:
              'Watch errors, latency and service health.',
          },
          {
            id: 'feedback',
            label: 'FEEDBACK / RECOVERY',
            explanation:
              'Production signals can lead to follow-up work, mitigation or rollback.',
            example:
              'Rollback the release if the new version causes severe errors.',
          },
        ],
        closing:
          'Software delivery continues after deployment. Monitoring and production feedback determine whether the release is healthy and what the team should do next.',
      },
    },

    {
      id: 'mc06-s07-simulation',
      type: 'simulation',
      title: 'Build the delivery sequence',
      description:
        'Arrange the major stages of a software delivery workflow in the correct order.',
      simulation: {
        instruction:
          'Connect each delivery activity to its correct stage in the engineering workflow.',
        items: [
          {
            id: 'plan-task',
            label: 'Define the change to deliver.',
            description:
              'A requirement, defect or improvement becomes planned work.',
            correctTargetId: 'plan-target',
          },
          {
            id: 'develop-task',
            label: 'Implement the change on a feature branch.',
            description:
              'The developer writes and updates the code.',
            correctTargetId: 'develop-target',
          },
          {
            id: 'commit-task',
            label: 'Record the implementation in Git.',
            description:
              'Create traceable commits.',
            correctTargetId: 'commit-target',
          },
          {
            id: 'review-task',
            label: 'Open and review the pull request.',
            description:
              'The proposed change is inspected before integration.',
            correctTargetId: 'review-target',
          },
          {
            id: 'test-task',
            label: 'Run automated quality checks.',
            description:
              'Tests and build checks validate the change.',
            correctTargetId: 'test-target',
          },
          {
            id: 'merge-task',
            label: 'Integrate the approved change.',
            description:
              'The change enters the target branch.',
            correctTargetId: 'merge-target',
          },
          {
            id: 'deploy-task',
            label: 'Release the validated build.',
            description:
              'The software is made available in the target environment.',
            correctTargetId: 'deploy-target',
          },
          {
            id: 'monitor-task',
            label: 'Observe production after release.',
            description:
              'The team watches health, errors and performance.',
            correctTargetId: 'monitor-target',
          },
        ],
        targets: [
          {
            id: 'plan-target',
            label: 'PLAN',
            description:
              'Identify and prioritize the change.',
          },
          {
            id: 'develop-target',
            label: 'DEVELOP',
            description:
              'Implement the change in an isolated branch.',
          },
          {
            id: 'commit-target',
            label: 'COMMIT',
            description:
              'Record traceable Git checkpoints.',
          },
          {
            id: 'review-target',
            label: 'REVIEW',
            description:
              'Inspect the proposed change.',
          },
          {
            id: 'test-target',
            label: 'TEST',
            description:
              'Run automated quality checks.',
          },
          {
            id: 'merge-target',
            label: 'MERGE',
            description:
              'Integrate the approved change.',
          },
          {
            id: 'deploy-target',
            label: 'DEPLOY',
            description:
              'Release the validated artifact.',
          },
          {
            id: 'monitor-target',
            label: 'MONITOR',
            description:
              'Observe production behavior.',
          },
        ],
        successMessage:
          'Correct. Software delivery connects planning, development, Git, review, testing, integration, deployment and production feedback.',
      },
    },

    {
      id: 'mc06-s07-question',
      type: 'question',
      title: 'What happens after deployment?',
      description:
        'Check your understanding of the complete delivery lifecycle.',
      question: {
        id: 'mc06-s07-question',
        type: 'single-choice',
        question:
          'Why should a software team continue monitoring after a release has been deployed?',
        options: [
          {
            id: 'monitor',
            text:
              'Production monitoring reveals errors, performance problems and other signals that determine whether the release is healthy.',
            correct: true,
          },
          {
            id: 'stop',
            text:
              'Deployment means the engineering workflow is permanently finished.',
            correct: false,
          },
          {
            id: 'git',
            text:
              'Monitoring automatically creates Git commits for every user action.',
            correct: false,
          },
          {
            id: 'review',
            text:
              'Monitoring replaces all code review and automated testing.',
            correct: false,
          },
        ],
        explanation:
          'Deployment is not the end of delivery. Monitoring provides production feedback that can trigger investigation, follow-up work or recovery actions.',
      },
    },
  ],
}

