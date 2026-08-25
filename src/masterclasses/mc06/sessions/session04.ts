import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session04: SessionDefinition = {
  id: 'mc06-s04',
  number: 4,
  stage: 'discover',
  title: 'Branches & Merging',
  objective:
    'Understand why Git branches enable parallel development and how branches are merged, including what happens when changes conflict.',
  experiences: [
    {
      id: 'mc06-s04-lesson',
      type: 'lesson',
      title: 'How branches enable parallel development',
      description:
        'Understand branches as separate lines of development that can later be combined.',
      lesson: {
        opening:
          'Teams often need to develop multiple changes at the same time. Git branches provide separate lines of development so work can progress without forcing every incomplete change directly into the main branch.',
        sections: [
          {
            heading: 'The main branch represents an important line of development',
            explanation:
              'The main branch commonly represents the primary shared line of development for a project.',
            example:
              'The main branch contains the current integrated application code.',
          },
          {
            heading: 'A feature branch isolates work',
            explanation:
              'A feature branch gives a developer an independent line of development for a specific change.',
            example:
              'Create feature/enrollment-validation for a new validation rule.',
          },
          {
            heading: 'Branches allow parallel work',
            explanation:
              'Different developers can work on separate branches at the same time without immediately combining unfinished changes.',
            example:
              'One developer works on enrollment while another works on authentication.',
          },
          {
            heading: 'Merging combines branch work',
            explanation:
              'A merge integrates changes from one branch into another branch.',
            example:
              'Merge feature/enrollment-validation into main after review.',
          },
          {
            heading: 'Conflicts can occur',
            explanation:
              'A merge conflict can happen when different branches make incompatible changes to the same part of a file.',
            example:
              'Two developers modify the same validation function differently.',
          },
          {
            heading: 'Conflict resolution requires a decision',
            explanation:
              'The developer must inspect the conflicting changes and decide what the combined implementation should be.',
            example:
              'Keep the correct validation rule while incorporating the useful part of the other branch.',
          },
          {
            heading: 'The result should be verified',
            explanation:
              'After resolving a conflict, the combined code should be tested before the work is considered complete.',
            example:
              'Run the relevant tests after resolving the enrollment conflict.',
          },
        ],
      },
    },

    {
      id: 'mc06-s04-animation',
      type: 'animation',
      title: 'Watch two branches become one integrated change',
      description:
        'Follow a feature branch from creation through parallel work and merge into the main branch.',
      animation: {
        visual: 'concept-flow',
        opening:
          'Branches let developers work independently and later combine their changes into the main line of development.',
        parts: [
          {
            id: 'main-branch',
            label: 'MAIN BRANCH',
            explanation:
              'The primary line of development provides the shared base from which feature work can begin.',
            example:
              'main contains the current integrated application.',
          },
          {
            id: 'feature-branch',
            label: 'FEATURE BRANCH',
            explanation:
              'A separate branch isolates development for a specific feature or change.',
            example:
              'feature/enrollment-validation',
          },
          {
            id: 'parallel-changes',
            label: 'PARALLEL CHANGES',
            explanation:
              'Developers can make changes independently on different branches.',
            example:
              'Enrollment work progresses while authentication work continues separately.',
          },
          {
            id: 'merge',
            label: 'MERGE',
            explanation:
              'A merge combines the feature branch changes into the target branch.',
            example:
              'Merge feature/enrollment-validation into main.',
          },
          {
            id: 'combined-history',
            label: 'COMBINED HISTORY',
            explanation:
              'After a successful merge, the integrated project contains the combined development history.',
            example:
              'main now includes the enrollment validation feature.',
          },
        ],
        closing:
          'Branching separates work while merging brings compatible work together. This is the foundation of parallel Git-based collaboration.',
      },
    },

    {
      id: 'mc06-s04-simulation',
      type: 'simulation',
      title: 'Choose the correct branching workflow',
      description:
        'Practice deciding where development work belongs and how it returns to the main branch.',
      simulation: {
        instruction:
          'Match each development situation with the appropriate Git workflow.',
        items: [
          {
            id: 'feature-task',
            label: 'Start a new enrollment feature.',
            description:
              'The feature should be developed separately from the main line.',
            correctTargetId: 'feature-target',
          },
          {
            id: 'parallel-task',
            label: 'Two developers work on different features.',
            description:
              'Their unfinished work should remain isolated.',
            correctTargetId: 'parallel-target',
          },
          {
            id: 'merge-task',
            label: 'The feature is ready to integrate.',
            description:
              'The completed branch needs to become part of the target branch.',
            correctTargetId: 'merge-target',
          },
          {
            id: 'conflict-task',
            label: 'Two branches changed the same lines incompatibly.',
            description:
              'Git cannot safely determine the intended combined result.',
            correctTargetId: 'conflict-target',
          },
        ],
        targets: [
          {
            id: 'feature-target',
            label: 'FEATURE BRANCH',
            description:
              'Isolate development for a specific feature.',
          },
          {
            id: 'parallel-target',
            label: 'PARALLEL BRANCHES',
            description:
              'Allow independent development to continue at the same time.',
          },
          {
            id: 'merge-target',
            label: 'MERGE',
            description:
              'Integrate compatible branch changes into the target branch.',
          },
          {
            id: 'conflict-target',
            label: 'CONFLICT RESOLUTION',
            description:
              'Inspect incompatible changes and decide the correct combined implementation.',
          },
        ],
        successMessage:
          'Correct. Branches isolate work, parallel branches enable collaboration, merging integrates changes, and conflict resolution handles incompatible edits.',
      },
    },

    {
      id: 'mc06-s04-question',
      type: 'question',
      title: 'Why use a feature branch?',
      description:
        'Check your understanding of branching.',
      question: {
        id: 'mc06-s04-question',
        type: 'single-choice',
        question:
          'Why would a developer create a feature branch instead of making unfinished feature changes directly on main?',
        options: [
          {
            id: 'isolation',
            text:
              'It isolates the feature work so it can be developed and reviewed before integration.',
            correct: true,
          },
          {
            id: 'speed',
            text:
              'It guarantees that the feature will never contain bugs.',
            correct: false,
          },
          {
            id: 'backup',
            text:
              'It replaces the need for commits.',
            correct: false,
          },
          {
            id: 'deployment',
            text:
              'It automatically deploys the feature to production.',
            correct: false,
          },
        ],
        explanation:
          'Feature branches isolate development so unfinished work can progress independently before being reviewed and merged into the main line.',
      },
    },
  ],
}
