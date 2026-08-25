import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc06Session05: SessionDefinition = {
  id: 'mc06-s05',
  number: 5,
  stage: 'discover',
  title: 'Collaboration with Remote Repositories',
  objective:
    'Understand how local Git repositories collaborate with remote repositories through push, fetch and pull workflows, and how teams keep their shared project state synchronized.',
  experiences: [
    {
      id: 'mc06-s05-lesson',
      type: 'lesson',
      title: 'How local and remote repositories work together',
      description:
        'Understand the relationship between your local Git repository and the shared remote repository used by a team.',
      lesson: {
        opening:
          'Git becomes a collaboration system when local repositories communicate with a shared remote repository. Developers can record work locally and then exchange that work with the remote repository through explicit synchronization operations.',
        sections: [
          {
            heading: 'The local repository is your working copy of history',
            explanation:
              'A developer normally works with a local repository containing the project files and Git history available on that machine.',
            example:
              'Your laptop contains the local edduu repository and its commits.',
          },
          {
            heading: 'A remote repository provides a shared location',
            explanation:
              'A remote repository gives a team a shared Git location from which developers can exchange commits.',
            example:
              'The team uses the GitHub repository as the shared remote.',
          },
          {
            heading: 'git remote identifies remote connections',
            explanation:
              'git remote helps developers inspect the remote repository connections configured for the local repository.',
            example:
              'git remote -v shows the configured origin URLs.',
          },
          {
            heading: 'git push sends local commits',
            explanation:
              'git push transfers local commits to a remote repository so other collaborators can access the published work.',
            example:
              'git push origin feature/enrollment-validation',
          },
          {
            heading: 'git fetch downloads remote information',
            explanation:
              'git fetch retrieves information about changes from a remote without automatically integrating those changes into the current working branch.',
            example:
              'git fetch origin updates the local view of remote branches.',
          },
          {
            heading: 'git pull combines fetch with integration',
            explanation:
              'git pull retrieves remote changes and then integrates them into the current branch according to the configured workflow.',
            example:
              'git pull origin main updates the local main branch.',
          },
          {
            heading: 'Local and remote states can differ',
            explanation:
              'A developer may have commits locally that are not yet on the remote, or the remote may contain commits that the local branch has not incorporated.',
            example:
              'Another developer pushed a change while your local branch still contains an older state.',
          },
          {
            heading: 'Synchronization is part of collaboration',
            explanation:
              'Teams need a deliberate workflow for publishing local work and incorporating relevant remote changes.',
            example:
              "A developer fetches the latest remote state before integrating another developer's work.",
          },
        ],
      },
    },

    {
      id: 'mc06-s05-animation',
      type: 'animation',
      title: 'Watch local and remote repositories synchronize',
      description:
        'Follow how a developer publishes local commits and receives shared team changes.',
      animation: {
        visual: 'concept-flow',
        opening:
          'Collaboration happens when local Git repositories exchange commits with a shared remote repository.',
        parts: [
          {
            id: 'local-repository',
            label: 'LOCAL REPOSITORY',
            explanation:
              'The developer has project files and Git commits on the local machine.',
            example:
              'Local feature branch contains two new commits.',
          },
          {
            id: 'remote-repository',
            label: 'REMOTE REPOSITORY',
            explanation:
              'The shared remote repository provides a common location for published project history.',
            example:
              "origin contains the team's shared branches.",
          },
          {
            id: 'push',
            label: 'PUSH',
            explanation:
              'The developer publishes local commits to the remote repository.',
            example:
              'git push origin feature/enrollment-validation',
          },
          {
            id: 'fetch-pull',
            label: 'FETCH / PULL',
            explanation:
              'The developer retrieves information or changes from the remote repository to keep local work aligned with shared history.',
            example:
              'git fetch origin or git pull origin main',
          },
          {
            id: 'shared-state',
            label: 'SHARED TEAM STATE',
            explanation:
              'The team now has a common remote history that collaborators can retrieve and build upon.',
            example:
              'Other developers can access the published feature branch.',
          },
        ],
        closing:
          'Push publishes local work. Fetch retrieves remote information. Pull retrieves and integrates remote changes. Together these operations connect local development with shared team history.',
      },
    },

    {
      id: 'mc06-s05-simulation',
      type: 'simulation',
      title: 'Choose the correct remote workflow',
      description:
        'Match common collaboration situations with the Git operation that addresses them.',
      simulation: {
        instruction:
          'Connect each collaboration task to the appropriate remote Git operation.',
        items: [
          {
            id: 'remote-task',
            label: 'Inspect the configured remote repository.',
            description:
              'The developer wants to see where the local repository connects.',
            correctTargetId: 'remote-target',
          },
          {
            id: 'push-task',
            label: 'Publish local commits to the shared repository.',
            description:
              'The developer wants collaborators to receive the new commits.',
            correctTargetId: 'push-target',
          },
          {
            id: 'fetch-task',
            label: 'Retrieve remote information without integrating it automatically.',
            description:
              'The developer wants to inspect what changed remotely.',
            correctTargetId: 'fetch-target',
          },
          {
            id: 'pull-task',
            label: 'Retrieve and integrate remote changes into the current workflow.',
            description:
              'The developer wants the local branch updated using remote changes.',
            correctTargetId: 'pull-target',
          },
        ],
        targets: [
          {
            id: 'remote-target',
            label: 'git remote',
            description:
              'Inspect configured remote repository connections.',
          },
          {
            id: 'push-target',
            label: 'git push',
            description:
              'Publish local commits to the remote repository.',
          },
          {
            id: 'fetch-target',
            label: 'git fetch',
            description:
              'Retrieve remote information without automatically integrating it into the current branch.',
          },
          {
            id: 'pull-target',
            label: 'git pull',
            description:
              'Retrieve remote changes and integrate them according to the configured workflow.',
          },
        ],
        successMessage:
          'Correct. Remote collaboration depends on understanding what is local, what is remote, and when to publish or retrieve changes.',
      },
    },

    {
      id: 'mc06-s05-question',
      type: 'question',
      title: 'What does git push do?',
      description:
        'Check your understanding of local-to-remote collaboration.',
      question: {
        id: 'mc06-s05-question',
        type: 'single-choice',
        question:
          'A developer has two commits locally that teammates need to access from the shared repository. What operation publishes those commits?',
        options: [
          {
            id: 'push',
            text:
              'git push sends the local commits to the remote repository.',
            correct: true,
          },
          {
            id: 'fetch',
            text:
              'git fetch deletes the local commits and replaces them with remote commits.',
            correct: false,
          },
          {
            id: 'status',
            text:
              'git status publishes local commits to the remote repository.',
            correct: false,
          },
          {
            id: 'log',
            text:
              'git log automatically uploads the project history.',
            correct: false,
          },
        ],
        explanation:
          'git push publishes local commits to the configured remote repository so collaborators can access them.',
      },
    },
  ],
}
