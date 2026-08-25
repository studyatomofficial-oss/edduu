import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session06: SessionDefinition = {
  id: 'mc06-s06',
  number: 6,
  stage: 'discover',
  title: 'Pull Requests & Code Review',
  objective:
    'Understand how pull requests create a structured review and integration process before changes enter an important shared branch.',
  experiences: [
    {
      id: 'mc06-s06-lesson',
      type: 'lesson',
      title: 'Why teams use pull requests',
      description:
        'Understand how pull requests turn branch integration into a visible review and quality process.',
      lesson: {
        opening:
          'A feature branch may contain working code, but teams often need another person to inspect the change before it reaches an important shared branch. A pull request creates a structured place for that review and integration decision. Review comments provide a visible feedback trail that can be discussed and resolved.',
        sections: [
          {
            heading: 'The feature branch contains the proposed change',
            explanation:
              'Development usually happens on a separate branch so the work can evolve without directly changing the protected integration branch.',
            example:
              'feature/enrollment-validation contains the new enrollment rules.',
          },
          {
            heading: 'The branch is pushed to the remote',
            explanation:
              'The branch needs to be available remotely so collaborators and reviewers can inspect the proposed change.',
            example:
              'git push origin feature/enrollment-validation',
          },
          {
            heading: 'A pull request describes the proposed integration',
            explanation:
              'A pull request communicates what is changing and asks the team to review the proposed branch before integration.',
            example:
              'PR: Add enrollment validation to prevent duplicate registrations.',
          },
          {
            heading: 'Code review examines the change',
            explanation:
              'Reviewers inspect the code, design decisions, tests and potential risks before approving integration. Review comments make specific concerns visible to the developer.',
            example:
              'A reviewer checks whether duplicate enrollment cases are handled correctly.',
          },
          {
            heading: 'Review comments create a feedback loop',
            explanation:
              'Reviewers can ask questions or request changes when the implementation needs clarification or improvement.',
            example:
              'Reviewer leaves a review comment requesting a test covering an invalid enrollment case.',
          },
          {
            heading: 'Requested changes return to the branch',
            explanation:
              'The developer updates the feature branch and pushes new commits so the pull request reflects the revised implementation.',
            example:
              'Add the requested test and push another commit to the same feature branch.',
          },
          {
            heading: 'Approval is a review decision',
            explanation:
              "An approval indicates that the reviewer is satisfied with the proposed change according to the team's review expectations.",
            example:
              'The reviewer approves the enrollment validation pull request.',
          },
          {
            heading: 'Merge integrates the reviewed work',
            explanation:
              'After required checks and approvals are satisfied, the pull request can be merged into the target branch.',
            example:
              'Merge the approved feature into main.',
          },
          {
            heading: 'Quality gates protect important branches',
            explanation:
              'Teams can require reviews, automated tests, branch protection rules and other checks before changes are allowed to merge into important branches.',
            example:
              'main uses branch protection and requires one reviewer approval and passing automated tests.',
          },
        ],
      },
    },

    {
      id: 'mc06-s06-animation',
      type: 'animation',
      title: 'Watch a feature move through code review',
      description:
        'Follow a feature branch from publication through review, approval and integration.',
      animation: {
        visual: 'concept-flow',
        opening:
          'A pull request creates a controlled path between feature development and integration into an important shared branch.',
        parts: [
          {
            id: 'feature-branch',
            label: 'FEATURE BRANCH',
            explanation:
              'The developer completes the proposed change on an isolated branch.',
            example:
              'feature/enrollment-validation',
          },
          {
            id: 'push',
            label: 'PUSH',
            explanation:
              'The feature branch is published to the remote repository so others can inspect it.',
            example:
              'git push origin feature/enrollment-validation',
          },
          {
            id: 'pull-request',
            label: 'PULL REQUEST',
            explanation:
              'The developer opens a structured proposal to integrate the feature branch into the target branch.',
            example:
              'PR targets main and explains the enrollment change.',
          },
          {
            id: 'code-review',
            label: 'CODE REVIEW',
            explanation:
              'Reviewers inspect implementation quality, correctness, tests and potential risks.',
            example:
              'Reviewer checks validation logic and test coverage.',
          },
          {
            id: 'approval',
            label: 'APPROVAL',
            explanation:
              'Required reviewers approve the proposed change after the review concerns have been addressed.',
            example:
              'Reviewer approves the pull request.',
          },
          {
            id: 'merge',
            label: 'MERGE',
            explanation:
              'The reviewed change is integrated into the target branch after required quality gates pass.',
            example:
              'Merge the pull request into main.',
          },
        ],
        closing:
          'The pull-request workflow creates a visible path from isolated feature work to reviewed and approved integration.',
      },
    },

    {
      id: 'mc06-s06-simulation',
      type: 'simulation',
      title: 'Run a pull request review workflow',
      description:
        'Practice the sequence a feature should follow before entering an important shared branch.',
      simulation: {
        instruction:
          'Arrange each action in the correct pull-request workflow.',
        items: [
          {
            id: 'branch-task',
            label: 'Complete the feature on a feature branch.',
            description:
              'The change is developed separately from the protected integration branch.',
            correctTargetId: 'branch-target',
          },
          {
            id: 'push-task',
            label: 'Push the feature branch to the remote.',
            description:
              'Make the branch available to reviewers.',
            correctTargetId: 'push-target',
          },
          {
            id: 'pr-task',
            label: 'Open a pull request.',
            description:
              'Create the formal proposal to integrate the change.',
            correctTargetId: 'pr-target',
          },
          {
            id: 'review-task',
            label: 'Review the implementation and tests.',
            description:
              'A reviewer evaluates correctness, quality and risk.',
            correctTargetId: 'review-target',
          },
          {
            id: 'changes-task',
            label: 'Address requested changes.',
            description:
              'The developer updates the branch based on review feedback.',
            correctTargetId: 'changes-target',
          },
          {
            id: 'approval-task',
            label: 'Receive required approval and pass checks.',
            description:
              'The quality gates required by the team are satisfied.',
            correctTargetId: 'approval-target',
          },
          {
            id: 'merge-task',
            label: 'Merge into the target branch.',
            description:
              'The reviewed change becomes part of the shared branch.',
            correctTargetId: 'merge-target',
          },
        ],
        targets: [
          {
            id: 'branch-target',
            label: 'FEATURE DEVELOPMENT',
            description:
              'Build the proposed change in an isolated branch.',
          },
          {
            id: 'push-target',
            label: 'PUBLISH BRANCH',
            description:
              'Push the branch to the remote repository.',
          },
          {
            id: 'pr-target',
            label: 'PULL REQUEST',
            description:
              'Create the formal integration proposal.',
          },
          {
            id: 'review-target',
            label: 'CODE REVIEW',
            description:
              'Inspect the implementation, tests and risks.',
          },
          {
            id: 'changes-target',
            label: 'ADDRESS FEEDBACK',
            description:
              'Update the branch to resolve review concerns.',
          },
          {
            id: 'approval-target',
            label: 'APPROVAL + QUALITY GATES',
            description:
              'Required review approval and automated checks are satisfied.',
          },
          {
            id: 'merge-target',
            label: 'MERGE',
            description:
              'Integrate the reviewed feature into the target branch.',
          },
        ],
        successMessage:
          'Correct. A strong pull-request workflow makes changes visible, reviewable, testable and controlled before integration.',
      },
    },

    {
      id: 'mc06-s06-question',
      type: 'question',
      title: 'Why is code review valuable?',
      description:
        'Check your understanding of pull requests and review.',
      question: {
        id: 'mc06-s06-question',
        type: 'single-choice',
        question:
          'Why do engineering teams commonly require code review before merging changes into an important shared branch?',
        options: [
          {
            id: 'quality',
            text:
              'It provides another opportunity to evaluate correctness, maintainability, tests and risks before integration.',
            correct: true,
          },
          {
            id: 'automatic',
            text:
              'It guarantees that the code can never contain a defect.',
            correct: false,
          },
          {
            id: 'speed',
            text:
              'It eliminates the need for developers to write tests.',
            correct: false,
          },
          {
            id: 'deployment',
            text:
              'It automatically deploys every pull request to production.',
            correct: false,
          },
        ],
        explanation:
          'Code review creates a quality and collaboration checkpoint before changes are integrated into an important shared branch.',
      },
    },
  ],
}

