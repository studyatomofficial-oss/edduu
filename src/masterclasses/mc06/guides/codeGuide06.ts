import type { GuideDefinition } from '../../../masterclass-engine/types'

export const codeGuide06: GuideDefinition = {
  type: 'code',
  label: 'Code Guide',
  title: 'Practice Git Collaboration and Software Delivery',
  objective:
    'Practice the Git commands and engineering workflow required to create commits, manage branches, collaborate through remote repositories, review changes and move approved software toward delivery.',

  steps: [
    {
      id: 'init',
      step: 1,
      title: 'Create the Git repository',
      action:
        'Initialize a Git repository for a project and inspect its initial state.',
      command: 'git init',
      details: [
        'Run the command from the project directory.',
        'Git creates the repository metadata needed to track project history.',
        'Use git status immediately to inspect the repository.',
      ],
      explanation:
        'git init turns a project directory into a Git repository that can track changes and create version history.',
    },

    {
      id: 'status',
      step: 2,
      title: 'Inspect the working state',
      action:
        'Check which files are modified, untracked or staged.',
      command: 'git status',
      details: [
        'Identify untracked files.',
        'Identify modified files.',
        'Identify changes already staged for the next commit.',
      ],
      explanation:
        'git status gives the developer a current view of how the working directory and staging area differ from repository history.',
    },

    {
      id: 'stage',
      step: 3,
      title: 'Stage changes',
      action:
        'Select the intended changes for the next commit.',
      command: 'git add src/',
      details: [
        'Stage only the files that belong to the intended change.',
        'Run git status again to verify the staged state.',
        'Avoid committing unrelated work.',
      ],
      explanation:
        'The staging area is where developers decide exactly which changes will be included in the next commit.',
    },

    {
      id: 'commit',
      step: 4,
      title: 'Create a commit',
      action:
        'Record a coherent unit of work in Git history.',
      command: 'git commit -m "feat: add enrollment validation"',
      details: [
        'Use a message that explains the purpose of the change.',
        'Keep commits focused and understandable.',
        'Treat commits as traceable checkpoints.',
      ],
      explanation:
        'A commit records a snapshot of staged changes together with metadata describing the change.',
    },

    {
      id: 'history',
      step: 5,
      title: 'Inspect commit history',
      action:
        'Review previous commits and understand the project timeline.',
      command: 'git log --oneline',
      details: [
        'Use the compact history view to identify commits quickly.',
        'Use git show when deeper inspection is required.',
        'Use history during debugging and change investigation.',
      ],
      explanation:
        'Git history provides a traceable record of how the project changed over time.',
    },

    {
      id: 'diff',
      step: 6,
      title: 'Compare changes',
      action:
        'Inspect differences between working states or commits.',
      command: 'git diff',
      details: [
        'Inspect unstaged changes.',
        'Use git diff --staged for staged changes.',
        'Use commit comparisons when investigating historical differences.',
      ],
      explanation:
        'Diffs show exactly what changed rather than only showing that a file changed.',
    },

    {
      id: 'branch',
      step: 7,
      title: 'Create a feature branch',
      action:
        'Create an isolated branch for a new feature or fix.',
      command:
        'git switch -c feature/prevent-duplicate-enrollment',
      details: [
        'Create and switch to the feature branch.',
        'Keep feature work isolated from the shared integration branch.',
        'Use meaningful branch names that communicate intent.',
      ],
      explanation:
        'A feature branch allows parallel development without directly changing the main integration branch.',
    },

    {
      id: 'branch-list',
      step: 8,
      title: 'Inspect and switch branches',
      action:
        'View available branches and move between them safely.',
      command: 'git branch',
      details: [
        'The current branch is marked in the branch list.',
        'Use git switch to move to another branch.',
        'Confirm the active branch before making important changes.',
      ],
      explanation:
        'Knowing the active branch is critical because new commits are created on that branch.',
    },

    {
      id: 'merge',
      step: 9,
      title: 'Merge a feature branch',
      action:
        'Integrate completed feature work into the target branch.',
      command:
        'git switch main; git merge feature/prevent-duplicate-enrollment',
      details: [
        'Switch to the intended target branch first.',
        'Run the merge operation.',
        'If Git reports a conflict, inspect the conflicting files.',
        'Resolve the conflict and verify the resulting code before completing the merge.',
      ],
      explanation:
        'Merging combines branch histories so completed work can become part of the target branch.',
    },

    {
      id: 'remote',
      step: 10,
      title: 'Inspect remote repositories',
      action:
        'Check which shared repositories are configured for the local project.',
      command: 'git remote -v',
      details: [
        'Inspect fetch and push URLs.',
        'Understand which remote represents the shared team repository.',
        'Use clear remote naming conventions such as origin.',
      ],
      explanation:
        'A remote repository provides a shared location where team members can publish and retrieve Git history.',
    },

    {
      id: 'push',
      step: 11,
      title: 'Push a feature branch',
      action:
        'Publish local commits to the shared remote repository.',
      command:
        'git push -u origin feature/prevent-duplicate-enrollment',
      details: [
        'Publish the local feature branch.',
        'The -u option establishes the upstream relationship.',
        'The remote branch can now be used for collaboration and pull requests.',
      ],
      explanation:
        'git push transfers local commits to a remote repository so other team members and collaboration systems can access them.',
    },

    {
      id: 'fetch',
      step: 12,
      title: 'Fetch remote changes',
      action:
        'Retrieve remote repository information without immediately changing the current working branch.',
      command: 'git fetch origin',
      details: [
        'Fetch updates from the remote.',
        'Inspect remote branch state before deciding how to integrate it.',
        'Fetching is useful when you want information without automatically merging it.',
      ],
      explanation:
        'git fetch updates local knowledge of the remote repository while leaving the current working branch unchanged.',
    },

    {
      id: 'pull',
      step: 13,
      title: 'Pull synchronized changes',
      action:
        'Bring remote changes into the current local branch when appropriate.',
      command: 'git pull origin main',
      details: [
        'Pull normally combines fetching remote changes with integrating them into the current branch.',
        'Check the current branch before pulling.',
        'Resolve conflicts if local and remote changes overlap.',
      ],
      explanation:
        'git pull is commonly used when a developer needs the current remote state incorporated into local work.',
    },

    {
      id: 'pull-request',
      step: 14,
      title: 'Create a pull request',
      action:
        'Open a structured proposal to integrate the feature branch into the target branch.',
      details: [
        'Describe the problem and proposed solution.',
        'Include test evidence and relevant implementation context.',
        'Select the appropriate reviewers.',
        'Use the pull request as the collaboration boundary for the change.',
      ],
      explanation:
        'A pull request provides a shared place for review, discussion, automated checks and the final integration decision.',
    },

    {
      id: 'review',
      step: 15,
      title: 'Respond to code review',
      action:
        'Address reviewer comments and update the feature branch when changes are requested.',
      details: [
        'Read each review comment carefully.',
        'Make the requested code or test changes.',
        'Commit the updates to the feature branch.',
        'Push the updated branch so the pull request reflects the latest implementation.',
      ],
      explanation:
        'Code review creates a feedback loop where reviewers identify concerns and developers respond with visible implementation changes.',
    },

    {
      id: 'quality-gates',
      step: 16,
      title: 'Pass automated quality gates',
      action:
        'Use continuous integration checks to validate the proposed change.',
      command: 'npm test && npm run build',
      details: [
        'Automated tests provide repeatable behavioral checks.',
        'Type checks and builds can catch integration problems.',
        'Required checks should pass before important branches accept the change.',
      ],
      explanation:
        'Automated quality gates reduce the chance that known problems enter an important shared branch.',
    },

    {
      id: 'branch-protection',
      step: 17,
      title: 'Protect important branches',
      action:
        'Require defined quality controls before changes can merge into important branches.',
      details: [
        'Require pull requests instead of direct pushes.',
        'Require reviewer approval where appropriate.',
        'Require automated checks to pass.',
        'Restrict who can bypass the protection rules.',
      ],
      explanation:
        'Branch protection turns team quality expectations into enforceable repository controls.',
    },

    {
      id: 'merge-review',
      step: 18,
      title: 'Merge the approved pull request',
      action:
        'Integrate the reviewed and validated feature into the target branch.',
      details: [
        'Confirm required approvals are present.',
        'Confirm required quality gates have passed.',
        'Merge according to the team repository policy.',
      ],
      explanation:
        'Merge is the point where an approved change becomes part of the shared target branch.',
    },

    {
      id: 'delivery',
      step: 19,
      title: 'Build and deliver the software',
      action:
        'Move the integrated source through build and deployment automation.',
      details: [
        'Build the application from the integrated source.',
        'Create a deployable artifact.',
        'Deploy the validated artifact into the intended environment.',
      ],
      explanation:
        'Git provides the source history and collaboration foundation, while the delivery pipeline turns integrated source into software that can reach users.',
    },

    {
      id: 'monitor',
      step: 20,
      title: 'Monitor production and respond',
      action:
        'Observe the released software and respond to production feedback.',
      details: [
        'Monitor errors and service health.',
        'Watch performance and important business signals.',
        'Create follow-up work from production findings.',
        'Use rollback or mitigation when a release causes unacceptable impact.',
      ],
      explanation:
        'Software delivery continues after deployment because production behavior provides feedback about whether the release is actually healthy.',
    },
  ],

  finalResult:
    'You can now use Git for local version control and understand how commits, branches, remotes, pull requests, code review, CI, branch protection and delivery fit together in a real engineering workflow.',
}