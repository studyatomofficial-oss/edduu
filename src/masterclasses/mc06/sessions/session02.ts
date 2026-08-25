import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session02: SessionDefinition = {
  id: 'mc06-s02',
  number: 2,
  stage: 'discover',
  title: 'Git Fundamentals',
  objective:
    'Understand the core Git mental model: working directory, staging area, commit and repository, and how basic Git commands move changes through that model.',
  experiences: [
    {
      id: 'mc06-s02-lesson',
      type: 'lesson',
      title: 'The Git working model',
      description:
        'Understand what happens between changing a file and recording that change in Git.',
      lesson: {
        opening:
          'Git becomes much easier to understand when you stop thinking of commands as isolated commands and instead see them as movements between a few important areas: your working files, the staging area, commits and the repository.',
        sections: [
          {
            heading: 'Working directory',
            explanation:
              'The working directory contains the project files you are currently editing.',
            example:
              'You modify src/enrollment.ts to add a validation rule.',
          },
          {
            heading: 'Staging area',
            explanation:
              'The staging area lets you select which changes should become part of the next commit.',
            example:
              'git add src/enrollment.ts stages the enrollment change.',
          },
          {
            heading: 'Commit',
            explanation:
              "A commit records a selected set of changes as a named point in the project's history.",
            example:
              'git commit -m "Add enrollment validation"',
          },
          {
            heading: 'Repository',
            explanation:
              "The Git repository contains the project's recorded history and commit information.",
            example:
              'The repository now contains the enrollment-validation commit.',
          },
          {
            heading: 'git status',
            explanation:
              'git status helps you understand the current relationship between your working files, staging area and repository.',
            example:
              'git status shows a modified file before it is staged.',
          },
          {
            heading: 'git add',
            explanation:
              'git add selects changes from the working directory for the next commit.',
            example:
              'git add src/enrollment.ts',
          },
          {
            heading: 'git commit',
            explanation:
              'git commit records the staged changes as a new point in project history.',
            example:
              'git commit -m "Add enrollment validation"',
          },
        ],
      },
    },

    {
      id: 'mc06-s02-animation',
      type: 'animation',
      title: 'Watch a file change become a Git commit',
      description:
        'Follow a change from the working directory into the repository.',
      animation: {
        visual: 'concept-flow',
        opening:
          'Git separates editing files from recording changes. The staging area gives the developer control over what enters the next commit.',
        parts: [
          {
            id: 'working-directory',
            label: 'WORKING DIRECTORY',
            explanation:
              'This is where the developer edits the project files.',
            example:
              'src/enrollment.ts is modified.',
          },
          {
            id: 'staging-area',
            label: 'STAGING AREA',
            explanation:
              'The developer selects the changes that should be included in the next commit.',
            example:
              'git add src/enrollment.ts',
          },
          {
            id: 'commit',
            label: 'COMMIT',
            explanation:
              'The staged changes are recorded as a named point in project history.',
            example:
              'git commit -m "Add enrollment validation"',
          },
          {
            id: 'repository',
            label: 'GIT REPOSITORY',
            explanation:
              "The repository now contains the new commit as part of the project's history.",
            example:
              'Repository history includes the enrollment-validation change.',
          },
        ],
        closing:
          'The working directory is where you edit, the staging area is where you select, and the commit is where Git records the selected change in repository history.',
      },
    },

    {
      id: 'mc06-s02-simulation',
      type: 'simulation',
      title: 'Move a change through Git',
      description:
        'Practice the basic Git workflow from editing a file to recording a commit.',
      simulation: {
        instruction:
          'Place each Git action at the stage where it belongs.',
        items: [
          {
            id: 'edit',
            label: 'Modify src/enrollment.ts',
            description:
              'The developer changes a project file.',
            correctTargetId: 'working-target',
          },
          {
            id: 'status',
            label: 'Run git status',
            description:
              'Inspect the current state of the working tree.',
            correctTargetId: 'inspect-target',
          },
          {
            id: 'add',
            label: 'Run git add src/enrollment.ts',
            description:
              "Select the file's changes for the next commit.",
            correctTargetId: 'stage-target',
          },
          {
            id: 'commit',
            label: 'Run git commit -m "Add validation"',
            description:
              'Record the staged changes in project history.',
            correctTargetId: 'commit-target',
          },
        ],
        targets: [
          {
            id: 'working-target',
            label: 'CHANGE THE FILE',
            description:
              'The working directory contains the edited file.',
          },
          {
            id: 'inspect-target',
            label: 'INSPECT STATE',
            description:
              'git status helps you understand what Git currently sees.',
          },
          {
            id: 'stage-target',
            label: 'STAGE THE CHANGE',
            description:
              'git add selects changes for the next commit.',
          },
          {
            id: 'commit-target',
            label: 'RECORD HISTORY',
            description:
              'git commit records the staged change.',
          },
        ],
        successMessage:
          'Correct. The fundamental Git flow is change -> inspect -> stage -> commit.',
      },
    },

    {
      id: 'mc06-s02-question',
      type: 'question',
      title: 'What does the staging area do?',
      description:
        'Check your understanding of the Git working model.',
      question: {
        id: 'mc06-s02-question',
        type: 'single-choice',
        question:
          'Why does Git have a staging area between the working directory and the commit?',
        options: [
          {
            id: 'selection',
            text:
              'It lets the developer select which changes should be included in the next commit.',
            correct: true,
          },
          {
            id: 'backup',
            text:
              'It automatically creates a complete backup of the computer.',
            correct: false,
          },
          {
            id: 'deployment',
            text:
              'It deploys the application directly to production.',
            correct: false,
          },
          {
            id: 'database',
            text:
              "It stores the application's production database.",
            correct: false,
          },
        ],
        explanation:
          'The staging area gives developers control over which current changes are included in the next commit.',
      },
    },
  ],
}
