import type { KnowledgeDefinition } from './knowledge'

export const githubKnowledge: KnowledgeDefinition = {
  technologyId: 'github',
  slug: 'github',
  title: 'GitHub',
  summary:
    'GitHub is a cloud platform built around Git that provides source-code hosting, collaboration, code review, project management, security, and software delivery automation.',
  difficulty: 'beginner',

  sections: [
    {
      title: 'What is GitHub?',
      content:
        'GitHub is a platform for hosting and collaborating on Git repositories. While Git is the version control system, GitHub provides the online collaboration layer around Git, including repositories, pull requests, code review, issues, permissions, automation, releases, and security capabilities.',
      highlights: [
        {
          title: 'Repository hosting',
          description:
            'Storing Git repositories on a shared platform accessible to authorized collaborators.',
        },
        {
          title: 'Collaboration',
          description:
            'Enabling teams to discuss, review, manage, and integrate software changes.',
        },
        {
          title: 'Software delivery',
          description:
            'Supporting automation, releases, security checks, and deployment workflows.',
        },
      ],
    },

    {
      title: 'Git vs GitHub',
      content:
        'Git and GitHub are related but different. Git is the distributed version control system installed and used to track repository history. GitHub is a hosted platform that provides Git repositories plus collaboration, governance, automation, and project-management capabilities.',
      highlights: [
        {
          title: 'Git',
          description:
            'The version control system used to track source-code history.',
        },
        {
          title: 'GitHub',
          description:
            'A platform providing hosted Git repositories and engineering collaboration capabilities.',
        },
      ],
    },

    {
      title: 'Repository',
      content:
        'A GitHub repository is the central workspace for a software project. It can contain application source code, configuration, documentation, tests, infrastructure definitions, workflow files, and other project assets.',
      highlights: [
        {
          title: 'Repository',
          description:
            'A project workspace containing source code and its version-control history.',
        },
        {
          title: 'README',
          description:
            'Documentation that explains the purpose, setup, usage, and important information about a repository.',
        },
      ],
    },

    {
      title: 'Branches',
      content:
        'GitHub uses Git branches to support parallel development. Teams can maintain a main branch while engineers work on feature, bug-fix, release, or experiment branches.',
      highlights: [
        {
          title: 'Main branch',
          description:
            'The primary integration or production-oriented branch.',
        },
        {
          title: 'Feature branch',
          description:
            'A branch used to develop a focused change independently.',
        },
        {
          title: 'Protected branch',
          description:
            'A branch with policies restricting direct or unsafe changes.',
        },
      ],
    },

    {
      title: 'Pull Requests',
      content:
        'A pull request is a proposal to merge changes from one branch into another. It provides a place for code review, discussion, automated checks, approvals, and controlled integration.',
      highlights: [
        {
          title: 'Pull request',
          description:
            'A collaborative proposal to integrate changes into another branch.',
        },
        {
          title: 'Code review',
          description:
            'Human inspection of proposed software changes before integration.',
        },
        {
          title: 'Approval',
          description:
            'An explicit review decision allowing a proposed change to proceed.',
        },
      ],
    },

    {
      title: 'Code Review',
      content:
        'Code review helps teams identify defects, security risks, maintainability issues, architectural concerns, and unintended behavior before changes reach shared or production branches.',
      highlights: [
        {
          title: 'Reviewer',
          description:
            'A person responsible for evaluating proposed changes.',
        },
        {
          title: 'Review comment',
          description:
            'Feedback attached to a specific part of a proposed change.',
        },
        {
          title: 'Change quality',
          description:
            'The degree to which a change meets functional, technical, security, and maintainability expectations.',
        },
      ],
    },

    {
      title: 'Branch Protection',
      content:
        'Branch protection rules can require pull requests, approvals, successful automated checks, and other controls before changes can be merged into important branches.',
      highlights: [
        {
          title: 'Required status check',
          description:
            'An automated validation that must pass before a protected branch can receive changes.',
        },
        {
          title: 'Required review',
          description:
            'A rule requiring one or more human approvals before merging.',
        },
        {
          title: 'Protected branch',
          description:
            'A branch governed by controls intended to prevent unsafe changes.',
        },
      ],
    },

    {
      title: 'GitHub Actions',
      content:
        'GitHub Actions provides workflow automation directly inside GitHub. Repository events such as pushes and pull requests can trigger testing, security validation, artifact creation, release workflows, and deployments.',
      highlights: [
        {
          title: 'Workflow',
          description:
            'A defined automation process executed by GitHub Actions.',
        },
        {
          title: 'CI/CD',
          description:
            'Automated validation and delivery of software changes.',
        },
        {
          title: 'Runner',
          description:
            'The execution environment where an Actions job runs.',
        },
      ],
    },

    {
      title: 'Issues',
      content:
        'GitHub Issues provide a lightweight way to track bugs, tasks, improvements, questions, and other work items associated with a repository.',
      highlights: [
        {
          title: 'Issue',
          description:
            'A tracked work item or discussion associated with a repository.',
        },
        {
          title: 'Labels',
          description:
            'Metadata used to categorize and filter issues and other work.',
        },
        {
          title: 'Milestone',
          description:
            'A grouping mechanism used to associate work with a target release or objective.',
        },
      ],
    },

    {
      title: 'Projects',
      content:
        'GitHub Projects provides planning and work-management capabilities around repository issues and pull requests. Teams can use boards, tables, and views to track delivery progress.',
      highlights: [
        {
          title: 'Project board',
          description:
            'A visual representation of work and its current state.',
        },
        {
          title: 'Work item',
          description:
            'A unit of planned or tracked work.',
        },
      ],
    },

    {
      title: 'Releases and Tags',
      content:
        'GitHub releases provide a user-facing way to publish specific versions of software. Releases commonly reference Git tags and can include release notes and downloadable artifacts.',
      highlights: [
        {
          title: 'Release',
          description:
            'A published version of software associated with a specific repository state.',
        },
        {
          title: 'Tag',
          description:
            'A named reference pointing to a specific Git object, commonly a release commit.',
        },
        {
          title: 'Release notes',
          description:
            'Information describing important changes in a software release.',
        },
      ],
    },

    {
      title: 'Packages',
      content:
        'GitHub Packages provides package-hosting capabilities for software artifacts such as container images and language-specific packages. It can integrate package publication with repository workflows.',
      highlights: [
        {
          title: 'Package registry',
          description:
            'A service used to store and distribute software packages or artifacts.',
        },
        {
          title: 'Container image',
          description:
            'A packaged application environment that can be stored in a container registry.',
        },
      ],
    },

    {
      title: 'GitHub Container Registry',
      content:
        'GitHub Container Registry can be used to publish and manage container images associated with GitHub projects. CI/CD workflows can build, scan, tag, and publish images before deployment.',
      highlights: [
        {
          title: 'Container registry',
          description:
            'A repository for storing and distributing container images.',
        },
        {
          title: 'Image tag',
          description:
            'A label used to identify a particular container image version.',
        },
      ],
    },

    {
      title: 'Secrets',
      content:
        'GitHub provides mechanisms for storing sensitive configuration used by workflows and applications. Secrets should be protected and should never be committed directly into repository files.',
      highlights: [
        {
          title: 'Secret',
          description:
            'Sensitive information such as passwords, tokens, or credentials.',
        },
        {
          title: 'Credential protection',
          description:
            'Controls that prevent sensitive authentication material from being exposed.',
        },
      ],
    },

    {
      title: 'Repository Variables',
      content:
        'Repository and environment variables can provide non-sensitive configuration values to automation. Sensitive values should use appropriate secret-management mechanisms.',
      highlights: [
        {
          title: 'Variable',
          description:
            'A named configuration value used by workflows or applications.',
        },
        {
          title: 'Environment configuration',
          description:
            'Values controlling behavior for a particular execution environment.',
        },
      ],
    },

    {
      title: 'Environments',
      content:
        'GitHub environments can represent deployment targets such as development, staging, and production. They can be associated with environment-specific secrets, protection rules, and approval requirements.',
      highlights: [
        {
          title: 'Development',
          description:
            'An environment used for active development and early validation.',
        },
        {
          title: 'Staging',
          description:
            'An environment used for production-like validation before release.',
        },
        {
          title: 'Production',
          description:
            'The environment serving real users or business workloads.',
        },
      ],
    },

    {
      title: 'Security',
      content:
        'GitHub provides security capabilities that can help teams identify vulnerabilities, protect dependencies, detect exposed secrets, and improve software supply-chain security.',
      highlights: [
        {
          title: 'Dependency security',
          description:
            'Identifying vulnerable or outdated third-party dependencies.',
        },
        {
          title: 'Secret detection',
          description:
            'Identifying potentially exposed credentials or sensitive tokens.',
        },
        {
          title: 'Supply-chain security',
          description:
            'Protecting software and its delivery process from compromised dependencies and tooling.',
        },
      ],
    },

    {
      title: 'Dependabot',
      content:
        'Dependabot can identify outdated dependencies and help teams keep software libraries current. Automated dependency updates should still pass appropriate testing and security validation.',
      highlights: [
        {
          title: 'Dependency update',
          description:
            'Changing a project dependency to a newer version.',
        },
        {
          title: 'Automated update',
          description:
            'A system-generated proposal to update a dependency.',
        },
      ],
    },

    {
      title: 'Code Scanning',
      content:
        'Code scanning can analyze source code for potential security vulnerabilities and coding problems. Findings can be integrated into pull-request and branch protection workflows.',
      highlights: [
        {
          title: 'Code scanning',
          description:
            'Automated analysis intended to identify potential security or code-quality issues.',
        },
        {
          title: 'Security finding',
          description:
            'A detected condition that may represent a security or quality problem.',
        },
      ],
    },

    {
      title: 'Permissions',
      content:
        'GitHub organizations and repositories can define permissions controlling who can read, write, review, administer, or manage project resources. Access should follow least-privilege principles.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving users and automation only the access required for their responsibilities.',
        },
        {
          title: 'Repository access',
          description:
            'The permissions an identity has over a repository.',
        },
      ],
    },

    {
      title: 'Organizations and Teams',
      content:
        'GitHub organizations allow companies to manage multiple repositories and users centrally. Teams can group members and apply repository access and collaboration patterns consistently.',
      highlights: [
        {
          title: 'Organization',
          description:
            'A GitHub-level container used to manage repositories, users, and teams.',
        },
        {
          title: 'Team',
          description:
            'A group of users managed together for collaboration and access control.',
        },
      ],
    },

    {
      title: 'Auditability',
      content:
        'Enterprise GitHub usage requires traceability around repository changes, reviews, deployments, permissions, and security events. Audit information helps organizations investigate incidents and demonstrate governance.',
      highlights: [
        {
          title: 'Audit trail',
          description:
            'A record of significant activities that helps establish what happened and when.',
        },
        {
          title: 'Traceability',
          description:
            'The ability to connect a production change back to source, review, and release history.',
        },
      ],
    },

    {
      title: 'GitHub for AI Applications',
      content:
        'GitHub is particularly useful for AI products because application code, prompts, agent configurations, evaluation logic, infrastructure definitions, APIs, and deployment workflows all need controlled collaboration and version history.',
      highlights: [
        {
          title: 'Prompt versioning',
          description:
            'Tracking changes to prompts so behavior changes can be reviewed and reproduced.',
        },
        {
          title: 'Agent configuration',
          description:
            'Version-controlled definitions for agent tools, workflows, and policies.',
        },
        {
          title: 'AI evaluation',
          description:
            'Automated or human validation used to determine whether an AI system meets quality and safety expectations.',
        },
      ],
    },

    {
      title: 'GitHub for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, GitHub knowledge means understanding how engineering teams collaborate, how changes are governed, how CI/CD is connected to source control, how security is enforced, and how software delivery can be measured.',
      highlights: [
        {
          title: 'Engineering governance',
          description:
            'Policies controlling how engineering work is reviewed, approved, integrated, and released.',
        },
        {
          title: 'Developer experience',
          description:
            'The efficiency and usability of the workflows engineers use to deliver software.',
        },
        {
          title: 'Delivery visibility',
          description:
            'The ability to understand work status, code changes, validation, and release progress.',
        },
      ],
    },

    {
      title: 'Common GitHub Mistakes',
      content:
        'Common mistakes include exposing secrets, allowing direct changes to important branches, granting excessive permissions, merging without automated checks, blindly accepting dependency updates, and allowing production deployment without appropriate governance.',
      highlights: [
        {
          title: 'Secret exposure',
          description:
            'Accidentally publishing credentials or sensitive information in repository content or history.',
        },
        {
          title: 'Weak branch protection',
          description:
            'Allowing important branches to receive changes without sufficient review and validation.',
        },
        {
          title: 'Excessive access',
          description:
            'Giving users or automation more permissions than their responsibilities require.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'git',
    'github-actions',
    'gitlab',
    'jenkins',
    'ci-cd',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default githubKnowledge
