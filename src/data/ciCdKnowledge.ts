import type { KnowledgeDefinition } from './knowledge'

export const ciCdKnowledge: KnowledgeDefinition = {
  technologyId: 'ci-cd',
  slug: 'ci-cd',
  title: 'CI/CD',
  summary:
    'CI/CD is a software delivery practice that automates code integration, validation, packaging, release, and deployment so teams can deliver changes safely and repeatedly.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is CI/CD?',
      content:
        'CI/CD stands for Continuous Integration and Continuous Delivery or Continuous Deployment. The goal is to make software delivery repeatable, automated, observable, and safe. Instead of manually moving code from development to production, teams create a pipeline that validates and delivers changes through defined stages.',
      highlights: [
        {
          title: 'Continuous Integration',
          description:
            'Frequently integrating code changes and automatically validating them.',
        },
        {
          title: 'Continuous Delivery',
          description:
            'Keeping validated software ready for controlled release.',
        },
        {
          title: 'Continuous Deployment',
          description:
            'Automatically releasing validated changes into production.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of CI/CD like an automated quality-controlled factory. Developers submit a new product design, automated stations inspect it, build the product, test it, package it, and prepare it for delivery. Additional approval or automated rules determine whether it should reach customers.',
      highlights: [
        {
          title: 'Factory',
          description:
            'The CI/CD pipeline represents the software delivery factory.',
        },
        {
          title: 'Quality checks',
          description:
            'Automated tests and security checks validate the software.',
        },
        {
          title: 'Delivery',
          description:
            'Validated artifacts are released to the required environment.',
        },
      ],
    },

    {
      title: 'Continuous Integration',
      content:
        'Continuous Integration encourages developers to integrate changes frequently into a shared repository. Each relevant change triggers automated validation so defects are discovered earlier rather than accumulating until the end of a project.',
      highlights: [
        {
          title: 'Frequent integration',
          description:
            'Integrating small changes regularly instead of combining large changes infrequently.',
        },
        {
          title: 'Fast feedback',
          description:
            'Quickly informing developers whether a change passes required validation.',
        },
        {
          title: 'Build validation',
          description:
            'Confirming that the application can be built successfully.',
        },
      ],
    },

    {
      title: 'Continuous Delivery',
      content:
        'Continuous Delivery means the software is automatically built, tested, packaged, and kept in a release-ready state. Production release may still require a deliberate approval or business decision.',
      highlights: [
        {
          title: 'Release-ready',
          description:
            'A validated software version that can be released when authorized.',
        },
        {
          title: 'Controlled release',
          description:
            'A release that occurs after defined approval or business conditions are satisfied.',
        },
      ],
    },

    {
      title: 'Continuous Deployment',
      content:
        'Continuous Deployment goes one step further by automatically deploying validated changes into production when the pipeline conditions are satisfied. It requires strong automated testing, monitoring, security, and rollback capabilities.',
      highlights: [
        {
          title: 'Automatic production deployment',
          description:
            'Validated changes are released to production without a manual release decision.',
        },
        {
          title: 'Deployment confidence',
          description:
            'Confidence created through automated validation and operational controls.',
        },
      ],
    },

    {
      title: 'CI/CD Pipeline',
      content:
        'A CI/CD pipeline is a sequence of automated activities through which a software change travels. A typical pipeline includes source checkout, dependency installation, build, testing, security validation, artifact creation, deployment, and post-deployment verification.',
      highlights: [
        {
          title: 'Pipeline',
          description:
            'The automated workflow that moves software changes through delivery stages.',
        },
        {
          title: 'Stage',
          description:
            'A logical phase such as test, build, security, or deployment.',
        },
        {
          title: 'Job',
          description:
            'A unit of work executed inside a pipeline stage.',
        },
      ],
    },

    {
      title: 'Pipeline Trigger',
      content:
        'A pipeline needs an event that starts execution. Common triggers include code pushes, pull requests, merges, tags, releases, schedules, manual execution, and external events.',
      highlights: [
        {
          title: 'Push trigger',
          description:
            'Starts automation when code is pushed to a repository.',
        },
        {
          title: 'Pull request trigger',
          description:
            'Starts validation when a proposed code change is opened or updated.',
        },
        {
          title: 'Manual trigger',
          description:
            'Allows an authorized person to start a pipeline explicitly.',
        },
      ],
    },

    {
      title: 'Build',
      content:
        'The build stage converts source code into a runnable or distributable form. Depending on the technology, this may involve compilation, bundling, dependency resolution, packaging, or container-image creation.',
      highlights: [
        {
          title: 'Build',
          description:
            'Transforming source code into a deployable or testable output.',
        },
        {
          title: 'Build artifact',
          description:
            'The generated output produced by the build process.',
        },
      ],
    },

    {
      title: 'Automated Testing',
      content:
        'Automated tests provide confidence that changes behave as expected. A mature CI pipeline can run unit tests, integration tests, API tests, end-to-end tests, performance checks, and other relevant validations.',
      highlights: [
        {
          title: 'Unit test',
          description:
            'Tests a small isolated part of application behavior.',
        },
        {
          title: 'Integration test',
          description:
            'Validates interactions between multiple components or systems.',
        },
        {
          title: 'End-to-end test',
          description:
            'Validates an important user or business flow across the complete system.',
        },
      ],
    },

    {
      title: 'Quality Gates',
      content:
        'A quality gate is a condition that must be satisfied before a pipeline can proceed. Gates can include successful tests, code-quality thresholds, security results, AI evaluation scores, approvals, or operational checks.',
      highlights: [
        {
          title: 'Quality gate',
          description:
            'A defined condition that controls whether delivery can continue.',
        },
        {
          title: 'Blocking check',
          description:
            'A validation whose failure prevents the next delivery stage.',
        },
      ],
    },

    {
      title: 'Security in CI/CD',
      content:
        'Security should be integrated into the delivery pipeline rather than performed only at the end of development. Pipelines can check dependencies, source code, secrets, container images, infrastructure configuration, and other attack surfaces.',
      highlights: [
        {
          title: 'Dependency scanning',
          description:
            'Checking third-party libraries for known vulnerabilities.',
        },
        {
          title: 'Secret scanning',
          description:
            'Detecting potentially exposed credentials or sensitive tokens.',
        },
        {
          title: 'Container scanning',
          description:
            'Analyzing container images for security vulnerabilities.',
        },
      ],
    },

    {
      title: 'Artifact Management',
      content:
        'A strong CI/CD system creates a versioned artifact once and promotes that same artifact through environments. This avoids rebuilding different software versions for development, staging, and production.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A versioned output produced by the build process.',
        },
        {
          title: 'Artifact promotion',
          description:
            'Moving the same validated artifact across environments.',
        },
        {
          title: 'Immutable artifact',
          description:
            'An artifact that is not modified after creation.',
        },
      ],
    },

    {
      title: 'Environments',
      content:
        'Software commonly moves through environments such as development, staging, and production. Each environment has a different purpose and risk level.',
      highlights: [
        {
          title: 'Development',
          description:
            'Environment used for active development and early validation.',
        },
        {
          title: 'Staging',
          description:
            'Production-like environment used for final validation.',
        },
        {
          title: 'Production',
          description:
            'Environment serving real users or business workloads.',
        },
      ],
    },

    {
      title: 'Deployment Strategies',
      content:
        'CI/CD pipelines can implement different deployment strategies depending on availability, risk, infrastructure, and business requirements.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Gradually replacing old application instances with new ones.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining two production-capable environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Releasing a new version to a small percentage of traffic before expanding the rollout.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'Every production pipeline should have a defined rollback strategy. If a release causes unacceptable problems, the organization should be able to return to a known-good version quickly.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a system to a previously known-good software or configuration state.',
        },
        {
          title: 'Recovery time',
          description:
            'The time required to restore acceptable service after a failure.',
        },
      ],
    },

    {
      title: 'Feature Flags',
      content:
        'Feature flags separate software deployment from feature release. Code can be deployed while the feature remains disabled until the product or engineering team decides to activate it.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A configuration mechanism controlling whether a capability is enabled.',
        },
        {
          title: 'Gradual rollout',
          description:
            'Increasing feature exposure progressively while observing system behavior.',
        },
      ],
    },

    {
      title: 'Approvals and Governance',
      content:
        'Not every organization should automatically deploy everything to production. CI/CD can include approval gates, segregation of duties, change-management policies, security checks, and environment-specific controls.',
      highlights: [
        {
          title: 'Approval gate',
          description:
            'A human or policy-based authorization required before a sensitive action.',
        },
        {
          title: 'Segregation of duties',
          description:
            'Separating responsibilities so one person or system does not control an entire sensitive process.',
        },
        {
          title: 'Change governance',
          description:
            'Policies controlling how software changes are reviewed, approved, and released.',
        },
      ],
    },

    {
      title: 'Secrets Management',
      content:
        'CI/CD pipelines frequently require credentials for cloud platforms, databases, package registries, and external APIs. Secrets should be stored in secure secret-management systems and exposed only to the jobs that require them.',
      highlights: [
        {
          title: 'Secret',
          description:
            'Sensitive information such as a password, token, or private key.',
        },
        {
          title: 'Least privilege',
          description:
            'Giving automation only the access it actually needs.',
        },
      ],
    },

    {
      title: 'Observability',
      content:
        'A delivery pipeline should itself be observable. Teams need to understand pipeline duration, failure rates, deployment status, release health, and the relationship between deployments and production incidents.',
      highlights: [
        {
          title: 'Pipeline visibility',
          description:
            'The ability to understand the current and historical state of delivery workflows.',
        },
        {
          title: 'Deployment health',
          description:
            'The operational condition of a release after deployment.',
        },
      ],
    },

    {
      title: 'CI/CD for AI Applications',
      content:
        'AI applications require traditional software validation plus AI-specific checks. A mature AI CI/CD pipeline may validate prompts, retrieval quality, evaluation datasets, model configuration, safety policies, latency, cost, and regression results before deployment.',
      highlights: [
        {
          title: 'AI evaluation gate',
          description:
            'A release condition requiring an AI system to meet defined quality or safety thresholds.',
        },
        {
          title: 'Prompt regression',
          description:
            'A degradation in AI behavior caused by a prompt or configuration change.',
        },
        {
          title: 'RAG evaluation',
          description:
            'Testing retrieval and generated responses against defined quality expectations.',
        },
        {
          title: 'Cost gate',
          description:
            'A release condition ensuring expected AI inference cost remains within an acceptable threshold.',
        },
      ],
    },

    {
      title: 'CI/CD Metrics',
      content:
        'Engineering leaders use delivery metrics to understand whether the software delivery system is becoming faster and safer. Useful metrics include deployment frequency, lead time for changes, change failure rate, and time to restore service.',
      highlights: [
        {
          title: 'Deployment frequency',
          description:
            'How often successful production deployments occur.',
        },
        {
          title: 'Lead time for changes',
          description:
            'The time required for a change to move from development into production.',
        },
        {
          title: 'Change failure rate',
          description:
            'The proportion of deployments that result in failure, rollback, or remediation.',
        },
        {
          title: 'Time to restore service',
          description:
            'How quickly acceptable service is restored after a production failure.',
        },
      ],
    },

    {
      title: 'CI/CD for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, CI/CD is less about memorizing pipeline syntax and more about understanding delivery architecture, risk controls, quality gates, release strategy, developer experience, security, reliability, and measurable business outcomes.',
      highlights: [
        {
          title: 'Delivery architecture',
          description:
            'The structure connecting source control, validation, artifacts, environments, deployment, and monitoring.',
        },
        {
          title: 'Release risk',
          description:
            'The probability and impact of a software release causing unacceptable problems.',
        },
        {
          title: 'Delivery maturity',
          description:
            'How consistently and safely an organization can move software changes into production.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common CI/CD mistakes include making pipelines excessively slow, skipping meaningful tests, storing secrets insecurely, rebuilding artifacts for every environment, deploying without rollback, creating too many manual steps, ignoring flaky tests, and measuring pipeline speed without considering release quality.',
      highlights: [
        {
          title: 'Flaky test',
          description:
            'A test that inconsistently passes or fails without a meaningful application change.',
        },
        {
          title: 'Pipeline bottleneck',
          description:
            'A stage that significantly limits overall delivery throughput.',
        },
        {
          title: 'Unsafe automation',
          description:
            'Automation that can make high-impact changes without adequate validation or authorization.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'github-actions',
    'git',
    'github',
    'gitlab',
    'jenkins',
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

export default ciCdKnowledge
