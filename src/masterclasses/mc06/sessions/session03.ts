import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session03: SessionDefinition = {
  id: 'mc06-s03',
  number: 3,
  stage: 'discover',
  title: 'Commits & History',
  objective:
    'Understand commits as recorded project snapshots and learn how Git history, diffs and earlier versions help developers understand and investigate changes.',
  experiences: [
    {
      id: 'mc06-s03-lesson',
      type: 'lesson',
      title: 'Understanding Git history',
      description:
        'Learn how commits turn software changes into a traceable project history.',
      lesson: {
        opening:
          'A Git repository becomes useful when changes are recorded as meaningful commits. Each commit represents a point in the project history that can be inspected and compared with other points.',
        sections: [
          {
            heading: 'A commit records a project state',
            explanation:
              'A commit records a selected set of changes as a durable point in the repository history.',
            example:
              'Commit: Add enrollment validation.',
          },
          {
            heading: 'Commit messages explain intent',
            explanation:
              'A useful commit message communicates what meaningful change was recorded.',
            example:
              'Add validation for duplicate enrollments.',
          },
          {
            heading: 'git log shows history',
            explanation:
              'git log lets developers inspect the sequence of commits that created the current project history.',
            example:
              'git log shows the latest enrollment and authentication changes.',
          },
          {
            heading: 'git show inspects a commit',
            explanation:
              'git show can be used to inspect the details associated with a particular commit.',
            example:
              'Inspect the commit that introduced enrollment validation.',
          },
          {
            heading: 'git diff compares changes',
            explanation:
              'A diff helps developers understand what changed between project states or working changes.',
            example:
              'Compare the current implementation with the previous version of enrollment logic.',
          },
          {
            heading: 'History supports investigation',
            explanation:
              'When a defect appears, developers can use history and diffs to investigate when and how a behavior changed.',
            example:
              'A regression can be traced by comparing recent commits.',
          },
          {
            heading: 'Earlier versions provide context',
            explanation:
              'Previous commits allow developers to inspect earlier project states instead of relying on memory or manually saved copies.',
            example:
              'Review the implementation from before a recent refactor.',
          },
        ],
      },
    },

    {
      id: 'mc06-s03-animation',
      type: 'animation',
      title: 'Watch commits become project history',
      description:
        'Follow a software change from the working state into Git history and inspect how earlier states can be compared.',
      animation: {
        visual: 'concept-flow',
        opening:
          'A developer changes the project, records that change in a commit, and can later inspect the resulting history and compare different project states.',
        parts: [
          {
            id: 'working-state',
            label: 'WORKING STATE',
            explanation:
              'The developer currently has a project with a new or modified implementation.',
            example:
              'Enrollment validation has been added to the service.',
          },
          {
            id: 'commit',
            label: 'COMMIT',
            explanation:
              'The selected change is recorded as a meaningful point in project history.',
            example:
              'Add enrollment validation.',
          },
          {
            id: 'history',
            label: 'COMMIT HISTORY',
            explanation:
              'The repository now contains a chronological sequence of recorded project changes.',
            example:
              'git log shows the enrollment-validation commit.',
          },
          {
            id: 'diff',
            label: 'DIFF',
            explanation:
              'A diff reveals the specific changes between project states.',
            example:
              'git diff shows which lines were added or removed.',
          },
          {
            id: 'earlier-version',
            label: 'EARLIER VERSION',
            explanation:
              'An earlier commit can be inspected to understand how the project looked before a later change.',
            example:
              'Review the implementation before enrollment validation was added.',
          },
        ],
        closing:
          'Commits create history, history provides traceability, and diffs help developers understand the difference between project states.',
      },
    },

    {
      id: 'mc06-s03-simulation',
      type: 'simulation',
      title: 'Investigate a change through Git history',
      description:
        'Choose the Git capability that helps with each history investigation task.',
      simulation: {
        instruction:
          'Match each investigation task with the Git capability that best supports it.',
        items: [
          {
            id: 'history-task',
            label: 'See the sequence of commits.',
            description:
              "The developer wants to understand the project's recorded history.",
            correctTargetId: 'log-target',
          },
          {
            id: 'commit-task',
            label: 'Inspect one specific commit.',
            description:
              'The developer wants details about a recorded change.',
            correctTargetId: 'show-target',
          },
          {
            id: 'diff-task',
            label: 'See exactly what changed.',
            description:
              'The developer wants to compare project states.',
            correctTargetId: 'diff-target',
          },
          {
            id: 'earlier-task',
            label: 'Understand the project before a change.',
            description:
              'The developer wants to inspect an earlier recorded state.',
            correctTargetId: 'earlier-target',
          },
        ],
        targets: [
          {
            id: 'log-target',
            label: 'git log',
            description:
              'Inspect the sequence of commits in project history.',
          },
          {
            id: 'show-target',
            label: 'git show',
            description:
              'Inspect details associated with a particular commit.',
          },
          {
            id: 'diff-target',
            label: 'git diff',
            description:
              'Compare changes between project states or working changes.',
          },
          {
            id: 'earlier-target',
            label: 'EARLIER COMMIT',
            description:
              'Inspect a previous recorded project state for context.',
          },
        ],
        successMessage:
          'Correct. Git history, commit inspection, diffs and earlier commits give developers the evidence needed to understand how a project changed.',
      },
    },

    {
      id: 'mc06-s03-question',
      type: 'question',
      title: 'Why are commits useful?',
      description:
        'Check your understanding of Git history.',
      question: {
        id: 'mc06-s03-question',
        type: 'single-choice',
        question:
          'A production bug appeared after several code changes. Why is a meaningful Git history valuable during the investigation?',
        options: [
          {
            id: 'history',
            text:
              'It provides recorded project states and changes that developers can inspect and compare.',
            correct: true,
          },
          {
            id: 'automatic',
            text:
              'It automatically fixes every production bug.',
            correct: false,
          },
          {
            id: 'hardware',
            text:
              'It replaces the need for application monitoring.',
            correct: false,
          },
          {
            id: 'design',
            text:
              'It automatically redesigns the user interface.',
            correct: false,
          },
        ],
        explanation:
          'Meaningful commits create a traceable history that helps developers investigate when and how a behavior changed.',
      },
    },
  ],
}
