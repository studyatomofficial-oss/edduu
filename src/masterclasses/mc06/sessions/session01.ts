import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session01: SessionDefinition = {
  id: 'mc06-s01',
  number: 1,
  stage: 'discover',
  title: 'Why Git Exists',
  objective:
    'Understand the software-development problems that version control solves and why Git became essential for tracking, recovering and collaborating on code.',
  experiences: [
    {
      id: 'mc06-s01-lesson',
      type: 'lesson',
      title: 'Why software teams need version control',
      description:
        'Understand the problem Git solves before learning Git commands.',
      lesson: {
        opening:
          'Imagine building an application for months while its files keep changing. Without a reliable history, it becomes difficult to know what changed, who changed it, why it changed, or how to safely return to an earlier working version.',
        sections: [
          {
            heading: 'Files change constantly',
            explanation:
              'Software is rarely created in one attempt. Developers continuously add features, fix bugs, refactor code and update configuration.',
            example:
              'A course application may change its enrollment logic several times during development.',
          },
          {
            heading: 'Manual copies do not scale',
            explanation:
              'Keeping files such as project-final, project-final-new or project-final-backup creates confusion and does not provide a reliable development history.',
            example:
              'A team may have several copies of the same application with no clear indication of which version is safe.',
          },
          {
            heading: 'History creates traceability',
            explanation:
              'Version control records meaningful changes so a team can understand how the project evolved.',
            example:
              'A commit can explain that enrollment validation was changed to prevent invalid course registrations.',
          },
          {
            heading: 'Earlier versions can be recovered',
            explanation:
              'A useful version-control system makes it possible to inspect earlier project states and recover from mistakes.',
            example:
              'A faulty change can be investigated by comparing it with a previously working version.',
          },
          {
            heading: 'Teams need shared history',
            explanation:
              'Multiple developers need a common source of truth so their work can be combined without relying on manually exchanged project folders.',
            example:
              'Two developers can work on different parts of the same application while preserving a shared project history.',
          },
          {
            heading: 'Git provides the foundation',
            explanation:
              'Git records project history through commits and provides the foundation for branching, collaboration, code review and software delivery workflows.',
            example:
              'A team can create a feature branch, make commits, review the changes and merge the work into the main branch.',
          },
        ],
      },
    },

    {
      id: 'mc06-s01-animation',
      type: 'animation',
      title: 'Watch software changes become version history',
      description:
        'Follow a software project from changing files to a traceable Git history.',
      animation: {
        visual: 'concept-flow',
        opening:
          'Software changes over time. Git gives those changes a structured history that developers can inspect and use collaboratively.',
        parts: [
          {
            id: 'developer',
            label: 'DEVELOPER',
            explanation:
              'A developer changes the application while implementing a feature or fixing a problem.',
            example:
              'Add validation to the student enrollment service.',
          },
          {
            id: 'changes',
            label: 'FILES & CHANGES',
            explanation:
              'The project contains files whose contents change during development.',
            example:
              'backend/enrollment.py is modified.',
          },
          {
            id: 'history',
            label: 'VERSION HISTORY',
            explanation:
              'Meaningful changes can be recorded so the project has a traceable sequence of versions.',
            example:
              'Commit: Add enrollment validation.',
          },
          {
            id: 'repository',
            label: 'GIT REPOSITORY',
            explanation:
              "The repository stores the project's Git history and allows developers to inspect previous changes.",
            example:
              "Repository contains the application's commit history.",
          },
          {
            id: 'collaboration',
            label: 'TEAM COLLABORATION',
            explanation:
              'A shared Git workflow allows multiple developers to coordinate their changes around the same project history.',
            example:
              'Developer A and Developer B contribute through branches and commits.',
          },
        ],
        closing:
          'Git transforms a constantly changing set of software files into a structured history that a team can inspect, recover and collaborate around.',
      },
    },

    {
      id: 'mc06-s01-simulation',
      type: 'simulation',
      title: 'Choose the right reason for version control',
      description:
        'Connect common software-development problems with the capability version control provides.',
      simulation: {
        instruction:
          'Match each development problem with the version-control capability that addresses it.',
        items: [
          {
            id: 'history-problem',
            label: 'We need to know what changed.',
            description:
              'The team wants to understand how the project evolved.',
            correctTargetId: 'history-target',
          },
          {
            id: 'recovery-problem',
            label: 'A recent change broke the application.',
            description:
              'The team needs to investigate an earlier working state.',
            correctTargetId: 'recovery-target',
          },
          {
            id: 'collaboration-problem',
            label: 'Several developers work on the same project.',
            description:
              'The team needs a shared source of truth for changes.',
            correctTargetId: 'collaboration-target',
          },
          {
            id: 'traceability-problem',
            label: 'We need to understand why a change was made.',
            description:
              'The team needs meaningful records of development changes.',
            correctTargetId: 'traceability-target',
          },
        ],
        targets: [
          {
            id: 'history-target',
            label: 'VERSION HISTORY',
            description:
              'Records the sequence of meaningful project changes.',
          },
          {
            id: 'recovery-target',
            label: 'RECOVER EARLIER STATE',
            description:
              'Helps the team inspect and return toward a previous project state.',
          },
          {
            id: 'collaboration-target',
            label: 'SHARED PROJECT HISTORY',
            description:
              'Provides a common history around which developers can collaborate.',
          },
          {
            id: 'traceability-target',
            label: 'TRACEABLE CHANGES',
            description:
              'Connects changes with meaningful development history.',
          },
        ],
        successMessage:
          'Correct. Version control addresses history, recovery, traceability and collaboration problems created by continuously changing software.',
      },
    },

    {
      id: 'mc06-s01-question',
      type: 'question',
      title: 'Why does Git matter?',
      description:
        'Check your understanding of the problem Git solves.',
      question: {
        id: 'mc06-s01-question',
        type: 'single-choice',
        question:
          'Why is version control more useful than keeping multiple manually renamed copies of a project?',
        options: [
          {
            id: 'history',
            text:
              'It creates a structured and traceable history of project changes.',
            correct: true,
          },
          {
            id: 'hardware',
            text:
              'It automatically upgrades the developer computer.',
            correct: false,
          },
          {
            id: 'display',
            text:
              'It improves the visual design of the application.',
            correct: false,
          },
          {
            id: 'internet',
            text:
              'It guarantees that every application has internet access.',
            correct: false,
          },
        ],
        explanation:
          'Version control is valuable because it provides structured project history, making changes easier to understand, compare, recover and collaborate around.',
      },
    },
  ],
}
