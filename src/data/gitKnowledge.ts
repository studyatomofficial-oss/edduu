import type { KnowledgeDefinition } from './knowledge'

export const gitKnowledge: KnowledgeDefinition = {
  technologyId: 'git',
  slug: 'git',
  title: 'Git',
  summary:
    'Git is a distributed version control system used to track source-code changes, collaborate safely, manage branches, and maintain software history.',
  difficulty: 'beginner',

  sections: [
    {
      title: 'What is Git?',
      content:
        'Git is a distributed version control system. It records changes to files over time so developers can understand what changed, who changed it, and when the change happened. Git also enables multiple people to work on the same software project without constantly overwriting each other.',
      highlights: [
        {
          title: 'Version control',
          description:
            'A system for tracking and managing changes to files over time.',
        },
        {
          title: 'Distributed',
          description:
            'Each Git repository contains its own history rather than depending on one central working copy.',
        },
        {
          title: 'Repository',
          description:
            'A project directory containing source files and Git history.',
        },
      ],
    },

    {
      title: 'Why Git?',
      content:
        'Git gives engineering teams a safety net around source-code changes. Developers can experiment, review changes, create isolated branches, merge completed work, and recover earlier versions when something goes wrong.',
      highlights: [
        {
          title: 'History',
          description:
            'A record of previous project states and changes.',
        },
        {
          title: 'Collaboration',
          description:
            'Multiple engineers can work on the same project using branches and merges.',
        },
        {
          title: 'Recovery',
          description:
            'Earlier versions can be inspected or restored when necessary.',
        },
      ],
    },

    {
      title: 'Working Directory',
      content:
        'The working directory is the set of project files currently visible on your computer. When you edit a file, Git detects that the file differs from the last committed version.',
      highlights: [
        {
          title: 'Working tree',
          description:
            'The current editable state of files in a Git repository.',
        },
        {
          title: 'Modified file',
          description:
            'A tracked file whose contents have changed since the last relevant commit.',
        },
      ],
    },

    {
      title: 'Git Repository',
      content:
        'A Git repository contains project files together with the information Git needs to track their history. A repository can exist locally on a developer machine and can also be synchronized with a remote repository.',
      highlights: [
        {
          title: 'Local repository',
          description:
            'The Git repository stored on a developer machine.',
        },
        {
          title: 'Remote repository',
          description:
            'A repository hosted elsewhere for collaboration, backup, and shared delivery workflows.',
        },
      ],
    },

    {
      title: 'Staging Area',
      content:
        'The staging area is an intermediate selection between the working directory and a commit. Developers use it to choose exactly which changes should become part of the next commit.',
      highlights: [
        {
          title: 'Staging',
          description:
            'Selecting changes that should be included in the next commit.',
        },
        {
          title: 'Selective commit',
          description:
            'Committing only the changes intentionally selected for a specific change set.',
        },
      ],
    },

    {
      title: 'Commit',
      content:
        'A commit records a logical set of changes in Git history. A good commit represents one understandable unit of work and normally has a meaningful message.',
      highlights: [
        {
          title: 'Commit',
          description:
            'A recorded snapshot of selected project changes.',
        },
        {
          title: 'Commit message',
          description:
            'A short explanation describing the purpose of the change.',
        },
        {
          title: 'Atomic change',
          description:
            'A focused change that can be understood, reviewed, and potentially reverted independently.',
        },
      ],
    },

    {
      title: 'Branch',
      content:
        'A branch provides an independent line of development. Engineers commonly create branches for features, bug fixes, experiments, or releases without immediately changing the main production-oriented branch.',
      highlights: [
        {
          title: 'Branch',
          description:
            'A movable reference representing a line of development.',
        },
        {
          title: 'Feature branch',
          description:
            'A branch used to develop a specific feature independently.',
        },
        {
          title: 'Main branch',
          description:
            'The primary branch used by a repository for integrated or production-oriented code.',
        },
      ],
    },

    {
      title: 'Merge',
      content:
        'Merging combines changes from one branch into another. Teams typically merge completed and reviewed work into an integration or main branch.',
      highlights: [
        {
          title: 'Merge',
          description:
            'Combining the histories and changes of branches.',
        },
        {
          title: 'Merge conflict',
          description:
            'A situation where Git cannot automatically determine how competing changes should be combined.',
        },
      ],
    },

    {
      title: 'Pull Request',
      content:
        'A pull request is a collaboration mechanism provided by platforms such as GitHub and GitLab. It allows engineers to propose changes for review, discussion, automated validation, and eventual merge.',
      highlights: [
        {
          title: 'Code review',
          description:
            'Human evaluation of proposed software changes before integration.',
        },
        {
          title: 'Status check',
          description:
            'An automated validation result associated with a proposed change.',
        },
      ],
    },

    {
      title: 'Clone',
      content:
        'Cloning creates a local copy of a remote Git repository including its files and history. It is commonly the first step when a developer wants to work with an existing remote project.',
      highlights: [
        {
          title: 'Clone',
          description:
            'Creating a local repository from a remote repository.',
        },
        {
          title: 'Remote origin',
          description:
            'The remote repository reference commonly named origin.',
        },
      ],
    },

    {
      title: 'Fetch',
      content:
        'Fetching downloads information about changes from a remote repository without automatically modifying the current working branch.',
      highlights: [
        {
          title: 'Fetch',
          description:
            'Retrieving remote commits and references into the local repository.',
        },
        {
          title: 'Remote tracking branch',
          description:
            'A local reference representing the known state of a remote branch.',
        },
      ],
    },

    {
      title: 'Pull',
      content:
        'Pull is commonly used to retrieve remote changes and integrate them into the current local branch. The exact integration behavior depends on repository configuration and Git options.',
      highlights: [
        {
          title: 'Pull',
          description:
            'A convenient operation for retrieving remote changes and integrating them locally.',
        },
        {
          title: 'Synchronization',
          description:
            'Keeping local and remote repository states aligned.',
        },
      ],
    },

    {
      title: 'Push',
      content:
        'Push sends local commits to a remote repository. It allows other collaborators and CI/CD systems to receive the new repository state.',
      highlights: [
        {
          title: 'Push',
          description:
            'Sending local commits to a remote repository.',
        },
        {
          title: 'Remote branch',
          description:
            'A branch reference stored in the remote repository.',
        },
      ],
    },

    {
      title: 'HEAD',
      content:
        'HEAD is Git terminology for the currently checked-out position in the repository. It normally points to the current branch or directly to a commit during detached HEAD operation.',
      highlights: [
        {
          title: 'HEAD',
          description:
            'The current position Git considers checked out.',
        },
        {
          title: 'Detached HEAD',
          description:
            'A state where HEAD points directly to a commit rather than a branch.',
        },
      ],
    },

    {
      title: 'Git Diff',
      content:
        'Git diff shows differences between versions or states of files. It is one of the most useful tools for reviewing what changed before committing.',
      highlights: [
        {
          title: 'Diff',
          description:
            'A representation of differences between two states.',
        },
        {
          title: 'Review',
          description:
            'Inspecting changes before they become part of project history.',
        },
      ],
    },

    {
      title: 'Git Status',
      content:
        'Git status provides a summary of the current repository state, including modified files, staged files, untracked files, and branch synchronization information.',
      highlights: [
        {
          title: 'Status',
          description:
            'A snapshot of what Git currently knows about the working tree and staging area.',
        },
        {
          title: 'Untracked file',
          description:
            'A file Git has not yet been asked to track.',
        },
      ],
    },

    {
      title: 'Git Log',
      content:
        'Git log displays commit history. Engineers use it to understand how a repository reached its current state and to investigate previous changes.',
      highlights: [
        {
          title: 'Commit history',
          description:
            'The sequence of recorded changes in a repository.',
        },
        {
          title: 'Audit trail',
          description:
            'Historical information that helps teams understand repository changes.',
        },
      ],
    },

    {
      title: 'Revert',
      content:
        'Git revert creates a new commit that reverses the effect of an earlier commit. This approach preserves the existing history and is generally safer for shared branches.',
      highlights: [
        {
          title: 'Revert',
          description:
            'Creating a new commit that undoes a previous change.',
        },
        {
          title: 'Safe rollback',
          description:
            'Undoing a shared change while preserving repository history.',
        },
      ],
    },

    {
      title: 'Reset',
      content:
        'Git reset moves references or changes the staging and working state depending on the selected mode. Because some reset modes can discard work or rewrite local history, teams should use them carefully.',
      highlights: [
        {
          title: 'Reset',
          description:
            'An operation that can move branch history and alter staging or working state.',
        },
        {
          title: 'History rewriting',
          description:
            'Changing the visible commit ancestry rather than simply adding a new corrective commit.',
        },
      ],
    },

    {
      title: 'Cherry-Pick',
      content:
        'Git cherry-pick applies the changes introduced by a specific commit onto another branch. It is useful when a particular fix is needed without merging an entire branch.',
      highlights: [
        {
          title: 'Cherry-pick',
          description:
            'Applying one selected commit to the current branch.',
        },
        {
          title: 'Selective promotion',
          description:
            'Moving a specific change between branches without merging all branch history.',
        },
      ],
    },

    {
      title: 'Tags and Releases',
      content:
        'Git tags provide stable names for specific repository states. Tags are commonly used to identify releases such as v1.0.0 or v2.3.1.',
      highlights: [
        {
          title: 'Tag',
          description:
            'A named reference attached to a specific Git object, commonly a release commit.',
        },
        {
          title: 'Release version',
          description:
            'A stable identifier representing a software release.',
        },
      ],
    },

    {
      title: 'Git and GitHub',
      content:
        'Git and GitHub are different things. Git is the version control system. GitHub is a hosted platform that provides Git repositories together with collaboration, pull requests, issue tracking, permissions, and automation capabilities.',
      highlights: [
        {
          title: 'Git',
          description:
            'The distributed version control system.',
        },
        {
          title: 'GitHub',
          description:
            'A platform providing hosted Git repositories and software collaboration capabilities.',
        },
      ],
    },

    {
      title: 'Git in CI/CD',
      content:
        'Git is the foundation of many CI/CD pipelines. A commit or pull request can trigger automated testing, security validation, artifact creation, and deployment workflows.',
      highlights: [
        {
          title: 'Pipeline trigger',
          description:
            'A repository event that starts an automated delivery process.',
        },
        {
          title: 'Source of truth',
          description:
            'The controlled repository state from which software is built and released.',
        },
      ],
    },

    {
      title: 'Git for AI Applications',
      content:
        'Git is important for AI systems because application code, prompts, evaluation logic, agent configurations, infrastructure definitions, and integration code all need controlled change management. Model artifacts may require additional specialized versioning and registries.',
      highlights: [
        {
          title: 'Prompt versioning',
          description:
            'Tracking changes to prompts so behavior changes can be reviewed and reproduced.',
        },
        {
          title: 'Evaluation versioning',
          description:
            'Tracking evaluation logic and datasets used to measure AI system quality.',
        },
        {
          title: 'Agent configuration',
          description:
            'Version-controlled definitions for agent tools, workflows, policies, and behavior.',
        },
      ],
    },

    {
      title: 'Git for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Git knowledge is primarily about understanding branching strategy, code review, release governance, change traceability, CI/CD integration, developer workflow, and risk management rather than memorizing every Git command.',
      highlights: [
        {
          title: 'Change governance',
          description:
            'Controlling how software changes are proposed, reviewed, approved, and released.',
        },
        {
          title: 'Traceability',
          description:
            'Connecting a production change back to its source commit, review, and release.',
        },
        {
          title: 'Developer experience',
          description:
            'Making engineering workflows efficient while maintaining appropriate quality controls.',
        },
      ],
    },

    {
      title: 'Common Git Mistakes',
      content:
        'Common mistakes include committing secrets, committing generated files unnecessarily, using unclear commit messages, working directly on protected branches, force-pushing shared history, ignoring merge conflicts, and failing to review changes before committing.',
      highlights: [
        {
          title: 'Secret commit',
          description:
            'Accidentally placing passwords, tokens, or other sensitive information into Git history.',
        },
        {
          title: 'Force push risk',
          description:
            'Overwriting shared branch history and potentially removing collaborators’ commits.',
        },
        {
          title: 'Poor commit hygiene',
          description:
            'Creating large, unclear, or unrelated commits that are difficult to review and revert.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'github-actions',
    'github',
    'gitlab',
    'jenkins',
    'ci-cd',
    'deployment',
    'release-management',
    'artifact-management',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default gitKnowledge
