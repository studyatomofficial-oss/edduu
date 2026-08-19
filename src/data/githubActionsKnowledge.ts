import type { KnowledgeDefinition } from './knowledge'

export const githubActionsKnowledge: KnowledgeDefinition = {
  technologyId: 'github-actions',
  slug: 'github-actions',
  title: 'GitHub Actions',
  summary:
    'GitHub Actions is a GitHub-native automation platform used to build CI/CD workflows for testing, packaging, releasing, and deploying software.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is GitHub Actions?',
      content:
        'GitHub Actions is an automation platform integrated with GitHub repositories. Teams use it to automatically execute engineering tasks such as testing code, building applications, running security checks, creating artifacts, publishing packages, and deploying applications.',
      highlights: [
        {
          title: 'Automation',
          description:
            'Automatically executing repeatable engineering tasks without requiring manual execution every time.',
        },
        {
          title: 'Workflow',
          description:
            'A defined automation process describing when and how engineering tasks should run.',
        },
        {
          title: 'CI/CD',
          description:
            'Continuous Integration and Continuous Delivery or Deployment practices that automate software validation and delivery.',
        },
      ],
    },

    {
      title: 'Workflow',
      content:
        'A workflow is the top-level definition of a GitHub Actions automation process. Workflow files are written in YAML and are normally stored inside the .github/workflows directory.',
      highlights: [
        {
          title: 'YAML',
          description:
            'A human-readable configuration format used to define GitHub Actions workflows.',
        },
        {
          title: 'Workflow file',
          description:
            'A YAML file defining triggers, jobs, permissions, and execution behavior.',
        },
      ],
    },

    {
      title: 'Triggers',
      content:
        'A workflow needs an event that tells GitHub when it should execute. Common triggers include pushes, pull requests, releases, scheduled events, and manual execution.',
      highlights: [
        {
          title: 'Push',
          description:
            'Runs automation when commits are pushed to configured branches or paths.',
        },
        {
          title: 'Pull request',
          description:
            'Runs validation when code is proposed for merging.',
        },
        {
          title: 'Manual dispatch',
          description:
            'Allows an authorized user to start a workflow manually.',
        },
        {
          title: 'Schedule',
          description:
            'Runs automation according to a configured schedule.',
        },
      ],
    },

    {
      title: 'Jobs',
      content:
        'A workflow contains one or more jobs. Each job represents a unit of work executed on a runner. Jobs can execute independently or depend on other jobs.',
      highlights: [
        {
          title: 'Job',
          description:
            'A logical unit of automation containing one or more steps.',
        },
        {
          title: 'Dependency',
          description:
            'A relationship requiring one job to complete before another begins.',
        },
        {
          title: 'Parallel execution',
          description:
            'Independent jobs can run concurrently to reduce pipeline duration.',
        },
      ],
    },

    {
      title: 'Steps',
      content:
        'Steps are individual operations performed inside a job. A step can execute a shell command, invoke an action, build an application, run tests, or perform another automation task.',
      highlights: [
        {
          title: 'Step',
          description:
            'A single operation performed as part of a job.',
        },
        {
          title: 'Action',
          description:
            'A reusable automation component that performs a defined operation.',
        },
      ],
    },

    {
      title: 'Runners',
      content:
        'A runner is the execution environment where a GitHub Actions job actually runs. Runners provide the operating system and compute resources required by workflow steps.',
      highlights: [
        {
          title: 'Hosted runner',
          description:
            'A runner environment managed by GitHub.',
        },
        {
          title: 'Self-hosted runner',
          description:
            'Runner infrastructure managed by an organization.',
        },
      ],
    },

    {
      title: 'Continuous Integration',
      content:
        'GitHub Actions can implement Continuous Integration by automatically validating code changes. A CI pipeline can compile code, run unit tests, execute integration tests, perform static analysis, and run security checks.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'A test focused on a small isolated piece of application behavior.',
        },
        {
          title: 'Integration test',
          description:
            'A test validating interactions between multiple components or systems.',
        },
        {
          title: 'Static analysis',
          description:
            'Analyzing source code without executing the application.',
        },
      ],
    },

    {
      title: 'Continuous Delivery',
      content:
        'Continuous Delivery keeps validated software in a state where it can be released through a controlled and repeatable process. GitHub Actions can build artifacts, publish them, and prepare deployments.',
      highlights: [
        {
          title: 'Release candidate',
          description:
            'A build considered suitable for final release evaluation.',
        },
        {
          title: 'Promotion',
          description:
            'Moving a validated artifact from one environment or stage to another.',
        },
      ],
    },

    {
      title: 'Continuous Deployment',
      content:
        'Continuous Deployment automatically releases validated changes into production when defined conditions are satisfied. This requires strong testing, monitoring, rollback, and governance.',
      highlights: [
        {
          title: 'Continuous Deployment',
          description:
            'Automatically deploying validated changes to production.',
        },
        {
          title: 'Deployment gate',
          description:
            'A condition that must be satisfied before deployment proceeds.',
        },
      ],
    },

    {
      title: 'Secrets and Credentials',
      content:
        'CI/CD workflows often require credentials for cloud providers, databases, registries, and APIs. Sensitive information should never be hard-coded into workflow files or committed to source control.',
      highlights: [
        {
          title: 'Secret',
          description:
            'Sensitive information such as passwords, tokens, and credentials.',
        },
        {
          title: 'Credential',
          description:
            'Information used to authenticate an identity to a system.',
        },
        {
          title: 'Secret leakage',
          description:
            'Accidental exposure of sensitive information through source code, logs, or artifacts.',
        },
      ],
    },

    {
      title: 'Permissions and Least Privilege',
      content:
        'GitHub Actions workflows should use only the permissions required for their tasks. Restricting permissions reduces the impact of compromised workflows or third-party actions.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving a workflow only the access it actually needs.',
        },
        {
          title: 'Supply-chain security',
          description:
            'Protecting software delivery from compromised dependencies, actions, credentials, and build infrastructure.',
        },
      ],
    },

    {
      title: 'OIDC',
      content:
        'OpenID Connect can allow GitHub Actions workflows to obtain short-lived cloud credentials through trusted identity federation instead of storing long-lived cloud access keys.',
      highlights: [
        {
          title: 'OIDC',
          description:
            'An identity protocol that supports federated authentication between systems.',
        },
        {
          title: 'Federated identity',
          description:
            'Trust established between systems so an identity can authenticate without sharing a permanent credential.',
        },
        {
          title: 'Short-lived credential',
          description:
            'A temporary credential that expires automatically.',
        },
      ],
    },

    {
      title: 'Artifacts',
      content:
        'Build outputs such as compiled applications, test reports, packages, binaries, and deployment bundles can be stored and passed between workflow stages as artifacts.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A generated output of a build or automation process.',
        },
        {
          title: 'Artifact promotion',
          description:
            'Moving the same validated artifact across environments rather than rebuilding it differently for each environment.',
        },
      ],
    },

    {
      title: 'Caching',
      content:
        'Workflow caching can reduce pipeline duration by reusing dependencies or other expensive-to-create data. Cache design must balance speed, correctness, and invalidation behavior.',
      highlights: [
        {
          title: 'Cache',
          description:
            'Stored reusable data intended to reduce repeated computation or downloads.',
        },
        {
          title: 'Cache invalidation',
          description:
            'Determining when previously cached data is no longer valid.',
        },
      ],
    },

    {
      title: 'Matrix Builds',
      content:
        'Matrix strategies allow the same job to run against multiple combinations such as operating systems, programming-language versions, or dependency versions.',
      highlights: [
        {
          title: 'Matrix',
          description:
            'A set of parameter combinations used to generate multiple related workflow executions.',
        },
        {
          title: 'Compatibility testing',
          description:
            'Testing software across supported environments and versions.',
        },
      ],
    },

    {
      title: 'Deployment Environments',
      content:
        'GitHub environments can represent development, staging, and production stages. Environment-specific controls can help manage secrets, approvals, and deployment policies.',
      highlights: [
        {
          title: 'Development',
          description:
            'An environment used for active development and early validation.',
        },
        {
          title: 'Staging',
          description:
            'An environment designed to closely represent production for final validation.',
        },
        {
          title: 'Production',
          description:
            'The environment serving real users or business workloads.',
        },
      ],
    },

    {
      title: 'Approvals',
      content:
        'Production deployments may require explicit human approval before a workflow proceeds. Approval gates are useful when organizations require controlled release governance.',
      highlights: [
        {
          title: 'Approval gate',
          description:
            'A manual decision required before a sensitive deployment operation continues.',
        },
        {
          title: 'Release governance',
          description:
            'Policies and controls determining how software changes are approved and released.',
        },
      ],
    },

    {
      title: 'Security Scanning',
      content:
        'GitHub Actions can run static analysis, dependency checks, container scanning, and other security controls as part of CI/CD.',
      highlights: [
        {
          title: 'Dependency scanning',
          description:
            'Checking third-party libraries for known security vulnerabilities.',
        },
        {
          title: 'Container scanning',
          description:
            'Analyzing container images for known vulnerabilities and configuration risks.',
        },
      ],
    },

    {
      title: 'Docker Integration',
      content:
        'GitHub Actions can build, test, tag, scan, and publish Docker images. A strong delivery pattern is to build an immutable image once and deploy that same image across environments.',
      highlights: [
        {
          title: 'Container image',
          description:
            'A packaged application environment containing application code and runtime dependencies.',
        },
        {
          title: 'Container registry',
          description:
            'A repository used to store and distribute container images.',
        },
        {
          title: 'Immutable artifact',
          description:
            'A build output that remains unchanged after creation and is promoted across environments.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'A production pipeline should provide a defined rollback mechanism. Rollback may involve redeploying a previous artifact, reverting configuration, shifting traffic, or restoring a previous state.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a system to a previously known-good software or configuration state.',
        },
        {
          title: 'Known-good version',
          description:
            'A previously validated version that can be restored when a newer release fails.',
        },
      ],
    },

    {
      title: 'Blue-Green Deployment',
      content:
        'Blue-green deployment uses two production-capable environments. The new version is deployed to the alternate environment, validated, and then traffic is switched to it.',
      highlights: [
        {
          title: 'Blue',
          description:
            'One production-capable environment currently or previously serving traffic.',
        },
        {
          title: 'Green',
          description:
            'The alternate environment containing the new release.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing so users move from one deployment environment to another.',
        },
      ],
    },

    {
      title: 'Canary Deployment',
      content:
        'Canary deployment releases a new version to a small percentage of users or traffic before expanding the rollout. Monitoring determines whether the release should continue or be rolled back.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A limited production rollout used to validate a new version before broad release.',
        },
        {
          title: 'Progressive delivery',
          description:
            'Gradually increasing exposure to a new software version while monitoring behavior.',
        },
      ],
    },

    {
      title: 'Rolling Deployment',
      content:
        'Rolling deployment gradually replaces instances running the old release with the new version. This can reduce downtime but requires compatibility between versions during the transition.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing running instances progressively rather than changing every instance simultaneously.',
        },
        {
          title: 'Backward compatibility',
          description:
            'The ability of newer and older versions to work together during a transition.',
        },
      ],
    },

    {
      title: 'Feature Flags',
      content:
        'Feature flags allow capabilities to be enabled or disabled independently of application deployment. This separates code deployment from feature release and can reduce production risk.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A configuration mechanism controlling whether a software capability is active.',
        },
        {
          title: 'Gradual rollout',
          description:
            'Increasing feature exposure over time based on defined conditions.',
        },
      ],
    },

    {
      title: 'AI Application Delivery',
      content:
        'GitHub Actions can automate delivery of AI applications including APIs, RAG systems, model-serving services, evaluation pipelines, and AI-agent platforms. AI delivery pipelines should validate code, configuration, dependencies, security, evaluation results, and infrastructure changes.',
      highlights: [
        {
          title: 'AI evaluation gate',
          description:
            'A release condition requiring an AI system to meet defined quality or safety thresholds.',
        },
        {
          title: 'Model deployment',
          description:
            'Releasing a model or model-serving application into an operational environment.',
        },
        {
          title: 'Prompt regression',
          description:
            'A situation where a prompt change unexpectedly degrades AI application behavior.',
        },
      ],
    },

    {
      title: 'DORA Metrics',
      content:
        'Software delivery performance can be measured using metrics such as deployment frequency, lead time for changes, change failure rate, and time to restore service.',
      highlights: [
        {
          title: 'Deployment frequency',
          description:
            'How often an organization successfully deploys changes.',
        },
        {
          title: 'Lead time for changes',
          description:
            'The time from a code change to its successful deployment.',
        },
        {
          title: 'Change failure rate',
          description:
            'The proportion of deployments that result in production failure or remediation.',
        },
        {
          title: 'Time to restore service',
          description:
            'How quickly service is restored after a production failure.',
        },
      ],
    },

    {
      title: 'GitHub Actions for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, GitHub Actions knowledge is primarily about understanding delivery architecture, quality gates, security, release governance, deployment strategies, developer experience, cost, reliability, and measurable delivery outcomes.',
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include storing credentials directly in workflow files, granting excessive permissions, blindly trusting third-party actions, rebuilding artifacts for every environment, creating unnecessarily long pipelines, skipping meaningful tests, and deploying without a rollback mechanism.',
      highlights: [
        {
          title: 'Credential leakage',
          description:
            'Exposing credentials through source code, logs, artifacts, or insecure workflow configuration.',
        },
        {
          title: 'Excessive permissions',
          description:
            'Giving workflows more repository or cloud access than required.',
        },
        {
          title: 'No rollback',
          description:
            'Deploying software without a practical recovery path when the release fails.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'git',
    'github',
    'gitlab',
    'jenkins',
    'ci-cd',
    'deployment',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'release-management',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default githubActionsKnowledge
