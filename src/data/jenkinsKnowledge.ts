import type { KnowledgeDefinition } from './knowledge'

export const jenkinsKnowledge: KnowledgeDefinition = {
  technologyId: 'jenkins',
  slug: 'jenkins',
  title: 'Jenkins',
  summary:
    'Jenkins is an open-source automation server used to implement CI/CD pipelines, automate builds and tests, and coordinate software delivery workflows.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Jenkins?',
      content:
        'Jenkins is an automation server that executes repeatable software engineering tasks. It is widely used for continuous integration and continuous delivery, including building applications, running tests, performing security checks, creating artifacts, and deploying software.',
      highlights: [
        {
          title: 'Automation server',
          description:
            'A system that executes predefined engineering tasks automatically.',
        },
        {
          title: 'Continuous Integration',
          description:
            'Automatically validating code changes through builds and tests.',
        },
        {
          title: 'Continuous Delivery',
          description:
            'Automating the process of preparing validated software for release.',
        },
      ],
    },

    {
      title: 'Why Jenkins?',
      content:
        'Jenkins is useful when organizations need flexible automation across different technologies, repositories, infrastructure environments, and deployment systems. Its large plugin ecosystem allows teams to integrate many external tools.',
      highlights: [
        {
          title: 'Extensibility',
          description:
            'The ability to extend Jenkins using plugins and integrations.',
        },
        {
          title: 'Pipeline automation',
          description:
            'Defining repeatable software delivery processes as automated workflows.',
        },
      ],
    },

    {
      title: 'Jenkins Controller',
      content:
        'The Jenkins controller is responsible for coordinating automation, managing jobs and pipelines, storing configuration, and assigning work to execution agents.',
      highlights: [
        {
          title: 'Controller',
          description:
            'The central Jenkins component that coordinates automation.',
        },
        {
          title: 'Job management',
          description:
            'Managing configured automation tasks and pipeline definitions.',
        },
      ],
    },

    {
      title: 'Jenkins Agents',
      content:
        'Jenkins agents execute the actual build, test, packaging, and deployment tasks assigned by the controller. Agents can run on different machines, operating systems, containers, or cloud infrastructure.',
      highlights: [
        {
          title: 'Agent',
          description:
            'An execution environment that performs Jenkins work.',
        },
        {
          title: 'Distributed execution',
          description:
            'Running workloads across multiple execution environments.',
        },
      ],
    },

    {
      title: 'Jobs',
      content:
        'A Jenkins job defines an automated task or workflow. Jobs can execute scripts, build applications, run tests, publish artifacts, or trigger deployments.',
      highlights: [
        {
          title: 'Job',
          description:
            'A configured unit of automation in Jenkins.',
        },
        {
          title: 'Build',
          description:
            'An execution of a software build or automation process.',
        },
      ],
    },

    {
      title: 'Jenkins Pipeline',
      content:
        'A Jenkins Pipeline defines a sequence of automated delivery activities. Pipelines can include source checkout, compilation, testing, security validation, packaging, artifact publication, deployment, and post-deployment verification.',
      highlights: [
        {
          title: 'Pipeline',
          description:
            'A structured automation workflow representing software delivery stages.',
        },
        {
          title: 'Stage',
          description:
            'A logical phase within a pipeline.',
        },
        {
          title: 'Step',
          description:
            'An individual operation executed within a pipeline stage.',
        },
      ],
    },

    {
      title: 'Jenkinsfile',
      content:
        'A Jenkinsfile is a text-based definition of a Jenkins Pipeline that can be stored with application source code. Keeping pipeline configuration in source control improves reviewability and traceability.',
      highlights: [
        {
          title: 'Jenkinsfile',
          description:
            'A source-controlled definition of a Jenkins Pipeline.',
        },
        {
          title: 'Pipeline as Code',
          description:
            'Managing automation configuration through version-controlled code.',
        },
      ],
    },

    {
      title: 'Declarative Pipeline',
      content:
        'Declarative Pipeline provides a structured syntax for defining Jenkins workflows. It makes pipeline configuration easier to standardize and understand across engineering teams.',
      highlights: [
        {
          title: 'Declarative syntax',
          description:
            'A structured approach to defining pipeline behavior.',
        },
        {
          title: 'Standardization',
          description:
            'Using consistent pipeline structures across projects.',
        },
      ],
    },

    {
      title: 'Scripted Pipeline',
      content:
        'Scripted Pipeline provides a more programmatic approach to defining Jenkins automation. It offers greater flexibility but can become harder to govern when pipelines become overly complex.',
      highlights: [
        {
          title: 'Scripted pipeline',
          description:
            'A programmatic style for defining Jenkins pipeline behavior.',
        },
        {
          title: 'Flexibility',
          description:
            'The ability to implement complex conditional automation logic.',
        },
      ],
    },

    {
      title: 'Triggers',
      content:
        'Jenkins pipelines can start from repository events, schedules, upstream jobs, manual execution, or other automation triggers.',
      highlights: [
        {
          title: 'Webhook trigger',
          description:
            'A repository event that starts Jenkins automation.',
        },
        {
          title: 'Scheduled trigger',
          description:
            'Starting automation according to a defined schedule.',
        },
        {
          title: 'Manual trigger',
          description:
            'Starting a pipeline explicitly by an authorized user.',
        },
      ],
    },

    {
      title: 'Continuous Integration',
      content:
        'Jenkins can implement Continuous Integration by automatically checking every relevant code change. Typical activities include checkout, compilation, unit tests, integration tests, static analysis, and security checks.',
      highlights: [
        {
          title: 'Build validation',
          description:
            'Confirming that the application can be successfully built.',
        },
        {
          title: 'Automated testing',
          description:
            'Running tests automatically as part of the delivery workflow.',
        },
      ],
    },

    {
      title: 'Continuous Delivery',
      content:
        'Jenkins can automate the creation of release-ready artifacts and promote them through controlled environments. This helps reduce manual release effort and improve repeatability.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A generated output such as a package, binary, or container image.',
        },
        {
          title: 'Promotion',
          description:
            'Moving a validated artifact from one delivery stage to another.',
        },
      ],
    },

    {
      title: 'Continuous Deployment',
      content:
        'Jenkins can automatically deploy validated changes into production when configured release conditions are satisfied. Production automation should include security controls, monitoring, and rollback capabilities.',
      highlights: [
        {
          title: 'Continuous Deployment',
          description:
            'Automatically releasing validated software into production.',
        },
        {
          title: 'Deployment gate',
          description:
            'A condition that must be satisfied before deployment proceeds.',
        },
      ],
    },

    {
      title: 'Artifacts',
      content:
        'Jenkins can create and archive build artifacts such as application packages, test reports, binaries, and deployment bundles. Mature pipelines promote the same validated artifact rather than rebuilding different versions for each environment.',
      highlights: [
        {
          title: 'Build artifact',
          description:
            'A generated output from a software build.',
        },
        {
          title: 'Artifact promotion',
          description:
            'Moving the same validated artifact through multiple environments.',
        },
      ],
    },

    {
      title: 'Credentials',
      content:
        'Jenkins often needs credentials to access source repositories, cloud providers, databases, registries, and deployment systems. Credentials should be managed through Jenkins credential mechanisms or external secret-management systems rather than hard-coded in pipelines.',
      highlights: [
        {
          title: 'Credential',
          description:
            'Information used to authenticate to another system.',
        },
        {
          title: 'Secret management',
          description:
            'Secure storage and controlled use of sensitive authentication information.',
        },
      ],
    },

    {
      title: 'Credentials Binding',
      content:
        'Credentials can be injected into pipeline execution only when required. This reduces the need to expose sensitive values directly in source-controlled pipeline definitions.',
      highlights: [
        {
          title: 'Credentials binding',
          description:
            'Making a stored credential available to a pipeline step in a controlled way.',
        },
        {
          title: 'Secret masking',
          description:
            'Reducing the chance that sensitive values appear directly in build logs.',
        },
      ],
    },

    {
      title: 'Plugins',
      content:
        'Jenkins uses plugins to integrate with source-control systems, cloud platforms, containers, testing tools, notification systems, artifact repositories, and many other technologies.',
      highlights: [
        {
          title: 'Plugin',
          description:
            'An extension that adds functionality or integration to Jenkins.',
        },
        {
          title: 'Plugin ecosystem',
          description:
            'The collection of integrations available for extending Jenkins capabilities.',
        },
      ],
    },

    {
      title: 'Docker Integration',
      content:
        'Jenkins can build, test, scan, and publish Docker images. Containers can also be used as isolated execution environments for pipeline stages.',
      highlights: [
        {
          title: 'Containerized agent',
          description:
            'A Jenkins execution environment provided through a container.',
        },
        {
          title: 'Container image',
          description:
            'A packaged application environment that can be built and deployed through Jenkins.',
        },
      ],
    },

    {
      title: 'Kubernetes Integration',
      content:
        'Jenkins can integrate with Kubernetes to dynamically create execution environments for pipeline workloads. This can help teams scale build capacity according to demand.',
      highlights: [
        {
          title: 'Kubernetes agent',
          description:
            'A Jenkins execution environment provisioned through Kubernetes.',
        },
        {
          title: 'Dynamic scaling',
          description:
            'Creating execution capacity as pipeline demand changes.',
        },
      ],
    },

    {
      title: 'Deployment Environments',
      content:
        'Jenkins pipelines can deploy applications into development, staging, and production environments. Environment promotion should use consistent artifacts and explicit release controls.',
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
      title: 'Approval Gates',
      content:
        'Production deployment can require human approval before the pipeline proceeds. Approval gates are useful when organizations require additional release governance.',
      highlights: [
        {
          title: 'Approval gate',
          description:
            'A manual authorization step before a sensitive pipeline action.',
        },
        {
          title: 'Release governance',
          description:
            'Policies controlling how software changes are approved and released.',
        },
      ],
    },

    {
      title: 'Blue-Green Deployment',
      content:
        'Jenkins can automate blue-green deployments by releasing the new version into an alternate production-capable environment, validating it, and switching traffic when the release is ready.',
      highlights: [
        {
          title: 'Blue',
          description:
            'One production-capable deployment environment.',
        },
        {
          title: 'Green',
          description:
            'The alternate environment containing the new release.',
        },
        {
          title: 'Traffic switch',
          description:
            'Changing routing so users move to the new deployment.',
        },
      ],
    },

    {
      title: 'Canary Deployment',
      content:
        'Jenkins can coordinate canary deployments where a new version is exposed to a small percentage of traffic before the rollout expands.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A limited production rollout used to validate a new version.',
        },
        {
          title: 'Progressive delivery',
          description:
            'Gradually increasing exposure to a new version while monitoring results.',
        },
      ],
    },

    {
      title: 'Rolling Deployment',
      content:
        'Jenkins can automate rolling deployments in which application instances are gradually replaced with instances running the new version.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing application instances progressively rather than all at once.',
        },
        {
          title: 'Backward compatibility',
          description:
            'Ensuring old and new versions can operate together during deployment.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'A production Jenkins pipeline should provide a reliable rollback mechanism. Recovery may involve redeploying a previous artifact, reverting configuration, or shifting traffic back to a known-good deployment.',
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
      title: 'Pipeline Security',
      content:
        'Jenkins pipelines can execute powerful commands and therefore must be secured carefully. Teams should control permissions, protect credentials, restrict agent access, review pipeline code, and keep plugins updated.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Giving users, jobs, and agents only the access they require.',
        },
        {
          title: 'Plugin security',
          description:
            'Managing plugin versions and vulnerabilities to reduce platform risk.',
        },
        {
          title: 'Pipeline security',
          description:
            'Protecting the automation system from malicious or accidental execution.',
        },
      ],
    },

    {
      title: 'Jenkins at Enterprise Scale',
      content:
        'At enterprise scale, Jenkins requires governance around controller architecture, agent capacity, plugin management, credentials, pipeline standards, access control, disaster recovery, observability, and maintenance.',
      highlights: [
        {
          title: 'Pipeline standardization',
          description:
            'Using reusable patterns and common controls across teams.',
        },
        {
          title: 'Agent capacity',
          description:
            'Ensuring sufficient execution resources for expected pipeline demand.',
        },
        {
          title: 'Platform governance',
          description:
            'Managing the Jenkins platform as shared engineering infrastructure.',
        },
      ],
    },

    {
      title: 'Jenkins for AI Applications',
      content:
        'Jenkins can automate delivery of AI applications including APIs, RAG systems, model-serving services, AI agents, evaluation pipelines, and supporting infrastructure. AI pipelines should include application tests as well as AI-specific evaluation and safety gates.',
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
          title: 'Model deployment',
          description:
            'Releasing a model-serving application or model-related service into an operational environment.',
        },
      ],
    },

    {
      title: 'Jenkins for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Jenkins knowledge is mainly about pipeline architecture, delivery governance, automation reliability, security, release strategy, infrastructure capacity, developer experience, and measurable delivery outcomes rather than memorizing Jenkins syntax.',
      highlights: [
        {
          title: 'Delivery governance',
          description:
            'Policies controlling how software moves from development to production.',
        },
        {
          title: 'Automation reliability',
          description:
            'Ensuring pipelines are predictable, maintainable, and recoverable.',
        },
        {
          title: 'Developer experience',
          description:
            'Making engineering delivery workflows efficient and understandable.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include storing secrets directly in Jenkinsfiles, giving agents excessive permissions, installing unnecessary plugins, allowing uncontrolled pipeline scripts, creating extremely complex pipelines, ignoring failed builds, and deploying without rollback capabilities.',
      highlights: [
        {
          title: 'Secret leakage',
          description:
            'Exposing credentials through source code, logs, or pipeline configuration.',
        },
        {
          title: 'Excessive permissions',
          description:
            'Allowing jobs or agents more access than necessary.',
        },
        {
          title: 'Plugin sprawl',
          description:
            'Accumulating unnecessary plugins that increase maintenance and security risk.',
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
    'gitlab',
    'github-actions',
    'ci-cd',
    'deployment',
    'release-management',
    'artifact-management',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default jenkinsKnowledge
