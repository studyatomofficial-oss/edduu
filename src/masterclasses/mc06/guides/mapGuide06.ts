import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide06: GuideDefinition = {
  type: 'map',
  label: 'Implementation Map',
  title: 'Build a Real Git Collaboration and Delivery Workflow',
  objective:
    'Follow a practical implementation path from local Git fundamentals through branching, remote collaboration, pull requests, code review and software delivery.',

  steps: [
    {
      id: 'repository',
      step: 1,
      title: 'Create the Git repository',
      action:
        'Initialize a Git repository and establish the project as a version-controlled workspace.',
      details: [
        'Create or enter the project directory.',
        'Initialize Git with git init when starting a new repository.',
        'Confirm the repository state with git status.',
      ],
    },

    {
      id: 'working-state',
      step: 2,
      title: 'Understand the working state',
      action:
        'Inspect files and understand how changes move from the working directory toward a commit.',
      details: [
        'Use git status to see modified and untracked files.',
        'Distinguish the working directory from the staging area.',
        'Identify which changes are ready to record.',
      ],
    },

    {
      id: 'staging',
      step: 3,
      title: 'Stage intentional changes',
      action:
        'Select the changes that should become part of the next commit.',
      details: [
        'Use git add for the intended files or changes.',
        'Review the staged state before committing.',
        'Avoid accidentally committing unrelated work.',
      ],
    },

    {
      id: 'commit',
      step: 4,
      title: 'Create meaningful commits',
      action:
        'Record a coherent unit of work as a Git commit.',
      details: [
        'Use git commit with a meaningful message.',
        'Keep commits focused enough to understand and review.',
        'Treat commits as traceable checkpoints in project history.',
      ],
    },

    {
      id: 'history',
      step: 5,
      title: 'Inspect change history',
      action:
        'Use Git history to understand what changed, when it changed and how the project evolved.',
      details: [
        'Use git log to inspect commit history.',
        'Use git show to inspect a specific commit.',
        'Use git diff to compare changes between states.',
      ],
    },

    {
      id: 'branching',
      step: 6,
      title: 'Create feature branches',
      action:
        'Develop new work in an isolated branch instead of changing the shared branch directly.',
      details: [
        'Create a branch for a specific feature or fix.',
        'Switch between branches safely.',
        'Keep unrelated work isolated from the shared integration branch.',
      ],
    },

    {
      id: 'merge',
      step: 7,
      title: 'Merge parallel work',
      action:
        'Integrate a completed branch into the target branch and handle conflicts when changes overlap.',
      details: [
        'Merge the feature branch into the target branch.',
        'Understand why merge conflicts occur.',
        'Resolve conflicts intentionally and verify the result before completing the merge.',
      ],
    },

    {
      id: 'remote',
      step: 8,
      title: 'Connect to a remote repository',
      action:
        'Connect the local repository to a shared remote repository used by the team.',
      details: [
        'Use git remote to inspect configured remote repositories.',
        'Understand the difference between local and remote repository state.',
        'Use a shared remote as the collaboration boundary for the team.',
      ],
    },

    {
      id: 'push',
      step: 9,
      title: 'Publish local changes',
      action:
        'Push local commits to the shared remote repository.',
      details: [
        'Use git push to publish commits.',
        'Push feature branches when preparing collaborative work.',
        'Confirm that the remote contains the expected changes.',
      ],
    },

    {
      id: 'sync',
      step: 10,
      title: 'Synchronize with the team',
      action:
        'Fetch and pull changes from the remote repository so local work stays synchronized with shared team state.',
      details: [
        'Use git fetch to retrieve remote information without automatically changing the working branch.',
        'Use git pull when the local branch should incorporate remote changes.',
        'Resolve synchronization conflicts carefully when they occur.',
      ],
    },

    {
      id: 'pull-request',
      step: 11,
      title: 'Open a pull request',
      action:
        'Propose a feature branch for integration through a structured pull request.',
      details: [
        'Explain what the change does and why it is needed.',
        'Include relevant implementation and test evidence.',
        'Target the appropriate shared branch.',
      ],
    },

    {
      id: 'review',
      step: 12,
      title: 'Run code review and quality gates',
      action:
        'Use human review and automated checks to evaluate the proposed change before integration.',
      details: [
        'Review implementation, design decisions, tests and risks.',
        'Use review comments to make specific concerns visible.',
        'Require appropriate approvals and automated quality checks.',
        'Use branch protection rules for important shared branches.',
      ],
    },

    {
      id: 'delivery',
      step: 13,
      title: 'Integrate and deliver the change',
      action:
        'Merge the approved change and move it through build and deployment workflows.',
      details: [
        'Merge only after required reviews and checks pass.',
        'Build a deployable artifact from the integrated source.',
        'Deploy the validated artifact into the intended environment.',
      ],
    },

    {
      id: 'monitoring',
      step: 14,
      title: 'Monitor production and learn',
      action:
        'Observe the released software and feed production feedback into the next engineering cycle.',
      details: [
        'Monitor errors, performance and service health.',
        'Use production signals and user feedback to identify follow-up work.',
        'Use rollback or mitigation when a release causes unacceptable problems.',
      ],
    },
  ],

  finalResult:
    'You can now trace a software change from a local Git repository through commits, branches, remote collaboration, pull requests, code review, quality gates, integration, delivery and production feedback.',
}