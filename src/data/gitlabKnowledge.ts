import type { KnowledgeDefinition } from './knowledge'

export const gitlabKnowledge: KnowledgeDefinition = {
  technologyId: 'gitlab',
  slug: 'gitlab',
  title: 'GitLab',
  summary:
    'GitLab is a DevSecOps platform that provides Git-based source control, collaboration, CI/CD, security, package management, and software delivery capabilities.',
  difficulty: 'beginner',

  sections: [
    {
      title: 'What is GitLab?',
      content:
        'GitLab is a platform built around Git that helps teams plan, create, secure, test, release, and monitor software. It combines source-code management with integrated CI/CD and DevSecOps capabilities.',
      highlights: [
        {
          title: 'Git repository',
          description:
            'A repository containing source code and its version-control history.',
        },
        {
          title: 'DevSecOps',
          description:
            'An approach that integrates development, security, and operations throughout the software lifecycle.',
        },
        {
          title: 'CI/CD',
          description:
            'Automated software validation and delivery workflows.',
        },
      ],
    },

    {
      title: 'GitLab vs Git',
      content:
        'Git is the distributed version control system. GitLab is a platform that uses Git and adds collaboration, project management, CI/CD, security, package management, and delivery capabilities.',
      highlights: [
        {
          title: 'Git',
          description:
            'The underlying distributed version control technology.',
        },
        {
          title: 'GitLab',
          description:
            'A software development platform built around Git.',
        },
      ],
    },

    {
      title: 'GitLab Repository',
      content:
        'A GitLab project normally contains a Git repository along with project configuration, issues, merge requests, pipelines, documentation, and other software-delivery resources.',
      highlights: [
        {
          title: 'Project',
          description:
            'The GitLab workspace containing repository and delivery resources.',
        },
        {
          title: 'Repository',
          description:
            'The source-code and Git-history component of a project.',
        },
      ],
    },

    {
      title: 'Branches',
      content:
        'GitLab uses Git branches to support parallel development. Teams can maintain a protected default branch while developing features and fixes in separate branches.',
      highlights: [
        {
          title: 'Feature branch',
          description:
            'A branch used to develop a focused software change.',
        },
        {
          title: 'Protected branch',
          description:
            'A branch governed by controls that restrict unsafe changes.',
        },
      ],
    },

    {
      title: 'Merge Requests',
      content:
        'A merge request is GitLab’s mechanism for proposing changes from one branch into another. It supports review, discussion, automated checks, approvals, and controlled integration.',
      highlights: [
        {
          title: 'Merge request',
          description:
            'A proposal to integrate changes into another branch.',
        },
        {
          title: 'Code review',
          description:
            'Human evaluation of proposed software changes.',
        },
        {
          title: 'Approval',
          description:
            'An explicit review decision allowing a change to proceed.',
        },
      ],
    },

    {
      title: 'GitLab CI/CD',
      content:
        'GitLab CI/CD provides pipeline automation directly within GitLab. Repository changes can trigger automated jobs for testing, security scanning, packaging, artifact creation, and deployment.',
      highlights: [
        {
          title: 'Pipeline',
          description:
            'An automated sequence of jobs that validates or delivers software.',
        },
        {
          title: 'Job',
          description:
            'A unit of work executed as part of a pipeline.',
        },
        {
          title: 'Runner',
          description:
            'The execution environment that runs GitLab CI/CD jobs.',
        },
      ],
    },

    {
      title: 'GitLab CI Configuration',
      content:
        'GitLab CI/CD pipelines are commonly defined using a YAML configuration file. The configuration describes stages, jobs, scripts, dependencies, rules, artifacts, and deployment behavior.',
      highlights: [
        {
          title: 'Pipeline configuration',
          description:
            'The declarative definition of how CI/CD automation should execute.',
        },
        {
          title: 'Stage',
          description:
            'A logical phase of a CI/CD pipeline such as test, build, or deploy.',
        },
      ],
    },

    {
      title: 'Runners',
      content:
        'GitLab Runner is the execution agent responsible for running CI/CD jobs. Runners can be hosted or managed by the organization depending on the deployment model.',
      highlights: [
        {
          title: 'Runner',
          description:
            'An execution environment used to run CI/CD jobs.',
        },
        {
          title: 'Self-managed runner',
          description:
            'Runner infrastructure operated and controlled by an organization.',
        },
      ],
    },

    {
      title: 'Artifacts',
      content:
        'GitLab pipelines can generate artifacts such as compiled applications, test reports, packages, and deployment bundles. Artifacts can be passed between jobs and retained according to configured policies.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A generated output produced by a CI/CD job.',
        },
        {
          title: 'Artifact promotion',
          description:
            'Moving the same validated output through different delivery stages.',
        },
      ],
    },

    {
      title: 'Caching',
      content:
        'GitLab CI/CD supports caching to reduce repeated dependency downloads and other expensive pipeline operations. Cache keys and invalidation strategy should be designed carefully.',
      highlights: [
        {
          title: 'Cache',
          description:
            'Reusable data stored to reduce repeated computation or downloads.',
        },
        {
          title: 'Cache key',
          description:
            'An identifier used to determine whether cached data can be reused.',
        },
      ],
    },

    {
      title: 'Variables and Secrets',
      content:
        'GitLab CI/CD uses variables to provide configuration to jobs. Sensitive credentials should be stored using protected and appropriately scoped secret mechanisms rather than committed to repository files.',
      highlights: [
        {
          title: 'CI/CD variable',
          description:
            'A named value made available to pipeline jobs.',
        },
        {
          title: 'Secret',
          description:
            'Sensitive authentication or configuration information.',
        },
        {
          title: 'Protected variable',
          description:
            'A variable restricted according to configured branch or environment controls.',
        },
      ],
    },

    {
      title: 'Environments',
      content:
        'GitLab environments represent deployment targets such as development, staging, and production. They provide visibility into where versions are deployed and can support controlled deployment workflows.',
      highlights: [
        {
          title: 'Development',
          description:
            'An environment used for active development and early validation.',
        },
        {
          title: 'Staging',
          description:
            'A production-like environment used for final validation.',
        },
        {
          title: 'Production',
          description:
            'The environment serving real users or business workloads.',
        },
      ],
    },

    {
      title: 'Deployment',
      content:
        'GitLab CI/CD can automate deployments to infrastructure and cloud environments. A mature pipeline separates validation, artifact creation, authorization, deployment, and post-deployment verification.',
      highlights: [
        {
          title: 'Deployment job',
          description:
            'A pipeline job responsible for releasing software into an environment.',
        },
        {
          title: 'Deployment gate',
          description:
            'A condition that must be satisfied before deployment proceeds.',
        },
      ],
    },

    {
      title: 'Review Apps',
      content:
        'Review environments can provide temporary application deployments associated with proposed changes. They allow stakeholders and engineers to inspect a feature before it is merged or released broadly.',
      highlights: [
        {
          title: 'Review environment',
          description:
            'A temporary environment used to validate a proposed change.',
        },
        {
          title: 'Preview deployment',
          description:
            'A deployment created specifically for reviewing a pending change.',
        },
      ],
    },

    {
      title: 'Security and DevSecOps',
      content:
        'GitLab can integrate security activities into the software lifecycle, including source analysis, dependency security, container security, secret detection, and other security controls.',
      highlights: [
        {
          title: 'DevSecOps',
          description:
            'Embedding security activities throughout development and delivery.',
        },
        {
          title: 'Dependency scanning',
          description:
            'Checking dependencies for known vulnerabilities.',
        },
        {
          title: 'Container scanning',
          description:
            'Analyzing container images for security vulnerabilities.',
        },
      ],
    },

    {
      title: 'Container Registry',
      content:
        'GitLab provides container image storage and distribution capabilities. CI/CD pipelines can build, test, scan, tag, and publish container images before deployment.',
      highlights: [
        {
          title: 'Container registry',
          description:
            'A service for storing and distributing container images.',
        },
        {
          title: 'Image tag',
          description:
            'A label used to identify a particular image version.',
        },
      ],
    },

    {
      title: 'Package Registry',
      content:
        'GitLab can host software packages produced by development teams. Package registries help organizations manage internal libraries and publish versioned artifacts.',
      highlights: [
        {
          title: 'Package',
          description:
            'A distributable software component or library.',
        },
        {
          title: 'Package registry',
          description:
            'A service used to store and distribute software packages.',
        },
      ],
    },

    {
      title: 'Release Management',
      content:
        'GitLab can support release workflows by connecting commits, merge requests, tags, artifacts, environments, and deployment activities. This creates stronger traceability between source changes and production releases.',
      highlights: [
        {
          title: 'Release',
          description:
            'A controlled publication of a software version.',
        },
        {
          title: 'Traceability',
          description:
            'The ability to connect a production release back to source and review history.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'A GitLab deployment pipeline should have a clear rollback strategy. A rollback may involve redeploying a previous artifact, reverting configuration, or switching traffic to a known-good version.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a system to a previously known-good state.',
        },
        {
          title: 'Known-good version',
          description:
            'A previously validated version suitable for recovery.',
        },
      ],
    },

    {
      title: 'Merge Trains',
      content:
        'Merge trains help coordinate multiple proposed changes so that changes are validated in an order-aware manner before entering a target branch. This can reduce integration problems in busy repositories.',
      highlights: [
        {
          title: 'Merge train',
          description:
            'A controlled mechanism for validating multiple pending changes before integration.',
        },
        {
          title: 'Integration safety',
          description:
            'Reducing the chance that individually valid changes break the shared branch when combined.',
        },
      ],
    },

    {
      title: 'Infrastructure as Code',
      content:
        'GitLab pipelines can execute infrastructure automation using tools such as Terraform and other infrastructure-as-code systems. Infrastructure changes should be reviewed and validated like application changes.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure definitions through version-controlled configuration.',
        },
        {
          title: 'Infrastructure pipeline',
          description:
            'Automation that validates and applies infrastructure changes.',
        },
      ],
    },

    {
      title: 'GitLab for AI Applications',
      content:
        'GitLab can manage AI application source code, evaluation pipelines, model-serving services, RAG systems, agent configurations, infrastructure definitions, and deployment workflows. AI pipelines should validate both traditional software behavior and AI-specific quality and safety criteria.',
      highlights: [
        {
          title: 'AI evaluation gate',
          description:
            'A release condition requiring an AI system to meet defined quality or safety thresholds.',
        },
        {
          title: 'Prompt versioning',
          description:
            'Tracking prompt changes through the same controlled development process as application code.',
        },
        {
          title: 'Agent delivery',
          description:
            'Automated validation and deployment of AI-agent applications and their supporting services.',
        },
      ],
    },

    {
      title: 'GitLab for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, GitLab knowledge means understanding software delivery governance, pipeline architecture, security integration, deployment controls, developer experience, release traceability, and delivery metrics rather than memorizing YAML syntax.',
      highlights: [
        {
          title: 'Delivery governance',
          description:
            'Policies controlling how changes move from development to production.',
        },
        {
          title: 'Change traceability',
          description:
            'Connecting source changes, reviews, pipeline results, artifacts, and production deployments.',
        },
        {
          title: 'Developer experience',
          description:
            'Making engineering workflows efficient while preserving quality and security.',
        },
      ],
    },

    {
      title: 'Common GitLab Mistakes',
      content:
        'Common mistakes include exposing CI/CD credentials, granting excessive runner permissions, allowing unreviewed production changes, rebuilding different artifacts for each environment, ignoring pipeline failures, and failing to define rollback procedures.',
      highlights: [
        {
          title: 'Credential leakage',
          description:
            'Exposing sensitive values through repository files, logs, artifacts, or insecure variables.',
        },
        {
          title: 'Runner risk',
          description:
            'Allowing compromised jobs to gain excessive access to infrastructure or credentials.',
        },
        {
          title: 'No rollback',
          description:
            'Deploying without a practical recovery path when a release fails.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'git',
    'github',
    'github-actions',
    'jenkins',
    'ci-cd',
    'deployment',
    'release-management',
    'artifact-management',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default gitlabKnowledge
