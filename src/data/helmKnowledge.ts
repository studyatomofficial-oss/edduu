import type { KnowledgeDefinition } from './knowledge'

export const helmKnowledge: KnowledgeDefinition = {
  technologyId: 'helm',
  slug: 'helm',
  title: 'Helm',
  summary:
    'Helm is a package manager and application deployment tool for Kubernetes that uses charts to define, configure, version, and distribute Kubernetes applications.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Helm?',
      content:
        'Helm is a tool for packaging and deploying applications to Kubernetes. It uses a packaging format called a Chart, allowing teams to define Kubernetes resources as reusable templates and supply environment-specific configuration values.',
      highlights: [
        {
          title: 'Helm',
          description:
            'A package manager and application deployment tool for Kubernetes.',
        },
        {
          title: 'Chart',
          description:
            'A package containing Kubernetes resource templates, metadata, and configuration.',
        },
        {
          title: 'Release',
          description:
            'A deployed instance of a Helm chart inside a Kubernetes cluster.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Helm like an application installation kit. Instead of manually preparing every Kubernetes YAML file for an application, you keep a reusable package containing the templates and configuration. For each environment, you provide different values and Helm installs the application consistently.',
      highlights: [
        {
          title: 'Installation kit',
          description:
            'Comparable to a Helm chart.',
        },
        {
          title: 'Configuration sheet',
          description:
            'Comparable to Helm values.',
        },
        {
          title: 'Installed application',
          description:
            'Comparable to a Helm release.',
        },
      ],
    },

    {
      title: 'Why Helm Matters',
      content:
        'Kubernetes applications can require many resource definitions including Deployments, Services, ConfigMaps, Secrets, Ingress objects, and other resources. Managing large numbers of raw YAML files across environments can become repetitive and difficult to maintain. Helm provides templating, packaging, versioning, and release management capabilities.',
      highlights: [
        {
          title: 'Templating',
          description:
            'Generating Kubernetes manifests from reusable templates and values.',
        },
        {
          title: 'Packaging',
          description:
            'Bundling Kubernetes application definitions into distributable charts.',
        },
        {
          title: 'Release management',
          description:
            'Managing installed versions of applications in Kubernetes.',
        },
      ],
    },

    {
      title: 'Helm Chart',
      content:
        'A Helm chart is the basic packaging unit in Helm. A chart contains metadata, templates, default configuration values, and optional dependencies that together describe how an application should be deployed to Kubernetes.',
      highlights: [
        {
          title: 'Chart',
          description:
            'A reusable package of Kubernetes application definitions.',
        },
        {
          title: 'Chart metadata',
          description:
            'Information describing the chart, including its name and version.',
        },
        {
          title: 'Chart version',
          description:
            'The version of the chart package itself.',
        },
      ],
    },

    {
      title: 'Helm Chart Structure',
      content:
        'A typical Helm chart contains Chart.yaml, values.yaml, a templates directory, and optional helper templates, tests, documentation, and dependency definitions.',
      highlights: [
        {
          title: 'Chart.yaml',
          description:
            'The chart metadata file.',
        },
        {
          title: 'values.yaml',
          description:
            'The default configuration values supplied to chart templates.',
        },
        {
          title: 'templates/',
          description:
            'Directory containing Kubernetes resource templates.',
        },
        {
          title: '_helpers.tpl',
          description:
            'A commonly used file for reusable Helm template helpers.',
        },
      ],
    },

    {
      title: 'Helm Values',
      content:
        'Values provide configuration inputs to Helm templates. Teams can use different values for development, staging, and production while keeping the underlying chart structure reusable.',
      highlights: [
        {
          title: 'Values',
          description:
            'Configuration inputs used by Helm templates.',
        },
        {
          title: 'values.yaml',
          description:
            'The default values file packaged with a chart.',
        },
        {
          title: 'Override',
          description:
            'A value supplied at deployment time to replace a chart default.',
        },
      ],
    },

    {
      title: 'Helm Templates',
      content:
        'Helm templates generate Kubernetes manifests dynamically. Templates can reference values, use conditional logic, iterate over collections, and call reusable helper functions.',
      highlights: [
        {
          title: 'Template',
          description:
            'A reusable definition that generates Kubernetes manifest content.',
        },
        {
          title: 'Template expression',
          description:
            'A Helm expression used to insert or transform dynamic configuration.',
        },
        {
          title: 'Conditional rendering',
          description:
            'Generating a Kubernetes resource only when a specified condition is satisfied.',
        },
      ],
    },

    {
      title: 'Helm and YAML',
      content:
        'Kubernetes resources are commonly represented as YAML manifests. Helm does not replace Kubernetes YAML; instead, Helm templates YAML manifests and supplies environment-specific values before sending the resulting resources to Kubernetes.',
      highlights: [
        {
          title: 'YAML',
          description:
            'A human-readable data serialization format commonly used for Kubernetes configuration.',
        },
        {
          title: 'Manifest',
          description:
            'A declarative definition of a Kubernetes resource.',
        },
        {
          title: 'Rendered manifest',
          description:
            'The final Kubernetes YAML generated from a Helm template and its values.',
        },
      ],
    },

    {
      title: 'Helm Install',
      content:
        'Installing a Helm chart creates a Helm release in a Kubernetes cluster. Helm renders the templates using the selected values and applies the resulting Kubernetes resources.',
      highlights: [
        {
          title: 'Install',
          description:
            'The operation that deploys a Helm chart as a release.',
        },
        {
          title: 'Release',
          description:
            'A specific deployed instance of a chart.',
        },
        {
          title: 'Namespace',
          description:
            'A logical Kubernetes boundary used to organize and isolate resources.',
        },
      ],
    },

    {
      title: 'Helm Upgrade',
      content:
        'Helm upgrade changes an existing release to a new chart version or configuration. This enables repeatable application updates without manually editing every Kubernetes resource.',
      highlights: [
        {
          title: 'Upgrade',
          description:
            'Changing an existing Helm release to a new configuration or chart version.',
        },
        {
          title: 'Revision',
          description:
            'A historical version of a Helm release.',
        },
        {
          title: 'Configuration change',
          description:
            'A change to values or templates that modifies the deployed application.',
        },
      ],
    },

    {
      title: 'Helm Rollback',
      content:
        'Helm maintains release history, allowing teams to roll a release back to a previous revision when a deployment introduces a problem.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning a Helm release to an earlier revision.',
        },
        {
          title: 'Release history',
          description:
            'Previously deployed revisions of a Helm release.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring a known-good application state after a failed or problematic deployment.',
        },
      ],
    },

    {
      title: 'Helm Repositories',
      content:
        'Helm charts can be distributed through chart repositories or OCI-compatible registries. Organizations can maintain internal repositories for approved application packages and dependencies.',
      highlights: [
        {
          title: 'Chart repository',
          description:
            'A location from which Helm charts can be stored and distributed.',
        },
        {
          title: 'OCI registry',
          description:
            'A registry supporting the Open Container Initiative distribution model and capable of storing Helm charts.',
        },
        {
          title: 'Internal repository',
          description:
            'An organization-controlled repository for approved packages and charts.',
        },
      ],
    },

    {
      title: 'Helm Dependencies',
      content:
        'A chart can declare dependencies on other charts. Dependencies allow complex applications to be assembled from reusable components, although teams should carefully manage versions and operational ownership.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'Another chart required by an application chart.',
        },
        {
          title: 'Dependency version',
          description:
            'The version constraint used to control which dependency is consumed.',
        },
        {
          title: 'Subchart',
          description:
            'A chart included as a dependency of another chart.',
        },
      ],
    },

    {
      title: 'Helm Namespaces',
      content:
        'Helm releases are associated with Kubernetes namespaces. Namespaces help separate workloads and can support environment, team, or application boundaries within a cluster.',
      highlights: [
        {
          title: 'Namespace',
          description:
            'A logical Kubernetes resource boundary.',
        },
        {
          title: 'Environment isolation',
          description:
            'Separating resources between development, staging, and production contexts.',
        },
      ],
    },

    {
      title: 'Helm and Kubernetes Deployments',
      content:
        'Helm commonly manages Kubernetes Deployments, Services, ConfigMaps, Secrets, Ingress resources, Jobs, StatefulSets, and other Kubernetes objects. Helm provides the packaging and templating layer while Kubernetes remains responsible for orchestration and desired-state management.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'A Kubernetes resource used to manage replicated application workloads.',
        },
        {
          title: 'Service',
          description:
            'A Kubernetes abstraction that provides stable network access to workloads.',
        },
        {
          title: 'Ingress',
          description:
            'A Kubernetes resource used to define HTTP or HTTPS routing into cluster services.',
        },
      ],
    },

    {
      title: 'Helm and ConfigMaps',
      content:
        'Helm can template Kubernetes ConfigMaps so application configuration can vary by environment without changing the application package itself.',
      highlights: [
        {
          title: 'ConfigMap',
          description:
            'A Kubernetes resource for storing non-sensitive configuration data.',
        },
        {
          title: 'Environment configuration',
          description:
            'Configuration that differs between deployment environments.',
        },
      ],
    },

    {
      title: 'Helm and Secrets',
      content:
        'Helm can generate or reference Kubernetes Secrets, but teams must understand that templating a secret does not automatically provide enterprise-grade secrets management. Production environments often integrate Kubernetes with dedicated secret-management systems.',
      highlights: [
        {
          title: 'Secret',
          description:
            'A Kubernetes resource intended for sensitive configuration data.',
        },
        {
          title: 'Secret management',
          description:
            'Processes and systems used to securely create, store, distribute, and rotate sensitive information.',
        },
        {
          title: 'External secret store',
          description:
            'A dedicated system outside the application package used to manage sensitive credentials.',
        },
      ],
    },

    {
      title: 'Helm Linting',
      content:
        'Helm provides validation capabilities that help identify chart structure and template problems before deployment. Linting should be combined with rendering, Kubernetes validation, security checks, and deployment testing in mature pipelines.',
      highlights: [
        {
          title: 'Lint',
          description:
            'Checking a Helm chart for common structural and configuration problems.',
        },
        {
          title: 'Validation',
          description:
            'Checking whether generated Kubernetes configuration meets expected requirements.',
        },
        {
          title: 'Pre-deployment check',
          description:
            'A validation step performed before changes reach a target environment.',
        },
      ],
    },

    {
      title: 'Helm Template Rendering',
      content:
        'Rendering a chart allows engineers to inspect the Kubernetes manifests Helm would generate before they are deployed. This is especially useful for debugging values, conditionals, labels, selectors, and resource configuration.',
      highlights: [
        {
          title: 'Rendering',
          description:
            'Generating the final Kubernetes manifests from Helm templates and values.',
        },
        {
          title: 'Rendered output',
          description:
            'The Kubernetes YAML produced by Helm before or during deployment.',
        },
        {
          title: 'Debugging',
          description:
            'Inspecting generated configuration to identify deployment problems before they reach production.',
        },
      ],
    },

    {
      title: 'Helm and CI/CD',
      content:
        'Helm is commonly integrated into CI/CD pipelines. A pipeline may package and lint a chart, render and validate manifests, run security checks, publish the chart, deploy it to a development environment, run tests, and then promote the same version toward production.',
      highlights: [
        {
          title: 'Chart packaging',
          description:
            'Creating a distributable Helm chart package.',
        },
        {
          title: 'Promotion',
          description:
            'Moving a validated application version through controlled environments.',
        },
        {
          title: 'Deployment gate',
          description:
            'A checkpoint that must be satisfied before an application is deployed further.',
        },
      ],
    },

    {
      title: 'Helm and GitOps',
      content:
        'Helm is frequently used with GitOps platforms such as Argo CD and Flux. In a GitOps model, the desired application configuration is stored in version control and an automated controller reconciles the Kubernetes cluster toward that declared state.',
      highlights: [
        {
          title: 'GitOps',
          description:
            'An operational model where Git stores the desired system state and automation reconciles infrastructure or applications toward that state.',
        },
        {
          title: 'Reconciliation',
          description:
            'Continuously comparing actual state with desired state and applying changes when they differ.',
        },
        {
          title: 'Declarative deployment',
          description:
            'Describing the desired application state rather than manually executing every deployment operation.',
        },
      ],
    },

    {
      title: 'Helm and Argo CD',
      content:
        'Argo CD can use Helm charts as an application packaging and templating source while Argo CD handles GitOps reconciliation and deployment synchronization into Kubernetes clusters.',
      highlights: [
        {
          title: 'Argo CD',
          description:
            'A GitOps continuous delivery platform for Kubernetes.',
        },
        {
          title: 'Synchronization',
          description:
            'Applying the desired configuration from the declared source to the Kubernetes cluster.',
        },
      ],
    },

    {
      title: 'Helm and Kubernetes Operators',
      content:
        'Helm and Kubernetes Operators solve different but sometimes complementary problems. Helm primarily packages and templates Kubernetes resources, while Operators encode application-specific operational knowledge through Kubernetes controllers.',
      highlights: [
        {
          title: 'Operator',
          description:
            'A Kubernetes controller that automates application-specific operational behavior.',
        },
        {
          title: 'Controller',
          description:
            'A Kubernetes component that continuously works to move actual state toward desired state.',
        },
        {
          title: 'Operational knowledge',
          description:
            'Application-specific logic required to safely operate a complex system.',
        },
      ],
    },

    {
      title: 'Helm Versioning',
      content:
        'Helm charts have their own versions and can reference application versions separately. Clear versioning helps teams understand what deployment package and application release are being promoted.',
      highlights: [
        {
          title: 'Chart version',
          description:
            'Version of the Helm package.',
        },
        {
          title: 'Application version',
          description:
            'Version of the application being deployed by the chart.',
        },
        {
          title: 'Version promotion',
          description:
            'Moving a specific validated version through environments.',
        },
      ],
    },

    {
      title: 'Helm Security',
      content:
        'Helm security includes controlling chart sources, reviewing templates, scanning dependencies, protecting credentials, restricting Kubernetes permissions, validating generated manifests, and controlling who can deploy charts into production.',
      highlights: [
        {
          title: 'Chart trust',
          description:
            'Confidence that a chart and its dependencies come from approved and trustworthy sources.',
        },
        {
          title: 'RBAC',
          description:
            'Kubernetes Role-Based Access Control used to limit what identities can do.',
        },
        {
          title: 'Dependency security',
          description:
            'Assessing third-party charts and packages for vulnerabilities and unwanted behavior.',
        },
      ],
    },

    {
      title: 'Helm Reliability',
      content:
        'Reliable Helm deployments require tested charts, controlled values, versioned packages, health checks, safe rollout strategies, observability, and a defined rollback process.',
      highlights: [
        {
          title: 'Health check',
          description:
            'A mechanism for determining whether an application is functioning correctly.',
        },
        {
          title: 'Rollback',
          description:
            'Returning an application deployment to a previously known-good version.',
        },
        {
          title: 'Safe rollout',
          description:
            'Introducing a new application version in a controlled manner that limits production risk.',
        },
      ],
    },

    {
      title: 'Helm for AI Applications',
      content:
        'Helm is useful for packaging AI application components running on Kubernetes, including inference services, APIs, worker processes, model-serving components, monitoring agents, and supporting infrastructure.',
      highlights: [
        {
          title: 'Inference service',
          description:
            'A service responsible for executing an AI model and returning predictions or generated responses.',
        },
        {
          title: 'Model server',
          description:
            'Software that exposes an AI model for inference.',
        },
        {
          title: 'AI workload',
          description:
            'A compute workload performing an artificial intelligence task such as inference, training, or data processing.',
        },
      ],
    },

    {
      title: 'Helm AI Platform Example',
      content:
        'A Kubernetes-based AI platform might use Helm to package an API service, model-serving deployment, worker service, autoscaling configuration, ingress, monitoring configuration, and environment-specific values. The same chart can be promoted across development, staging, and production with controlled configuration differences.',
      highlights: [
        {
          title: 'Model serving',
          description:
            'Making trained AI models available for inference.',
        },
        {
          title: 'Autoscaling',
          description:
            'Automatically adjusting workload capacity according to demand.',
        },
        {
          title: 'Environment promotion',
          description:
            'Moving a validated deployment package across controlled environments.',
        },
      ],
    },

    {
      title: 'Helm and Deployment Strategies',
      content:
        'Helm can participate in deployment strategies such as rolling deployments, blue-green deployments, and canary releases when combined with appropriate Kubernetes resources, controllers, ingress or service-routing mechanisms, and delivery tooling.',
      highlights: [
        {
          title: 'Rolling deployment',
          description:
            'Replacing application instances gradually rather than all at once.',
        },
        {
          title: 'Blue-green deployment',
          description:
            'Maintaining separate old and new application environments and switching traffic between them.',
        },
        {
          title: 'Canary deployment',
          description:
            'Sending a controlled portion of traffic to a new application version before wider rollout.',
        },
      ],
    },

    {
      title: 'Helm for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Helm should be viewed as a Kubernetes application packaging and delivery capability. Leadership concerns include deployment consistency, release governance, environment management, security, rollback speed, developer experience, ownership, and operational risk.',
      highlights: [
        {
          title: 'Release governance',
          description:
            'Controls around how application versions are packaged, reviewed, promoted, and deployed.',
        },
        {
          title: 'Developer experience',
          description:
            'How easily engineering teams can build, configure, deploy, and operate applications.',
        },
        {
          title: 'Operational risk',
          description:
            'The potential production impact caused by deployment or configuration failures.',
        },
        {
          title: 'Deployment standardization',
          description:
            'Using common deployment patterns across applications and environments.',
        },
      ],
    },

    {
      title: 'When Not to Use Helm',
      content:
        'Helm is not required for every Kubernetes workload. Very small applications may be easier to manage with straightforward Kubernetes manifests, while complex application-specific operational behavior may require Operators or other platform tooling. The choice should reflect application complexity and team needs.',
      highlights: [
        {
          title: 'Simple workload',
          description:
            'An application whose Kubernetes configuration is small and changes infrequently.',
        },
        {
          title: 'Operator',
          description:
            'A Kubernetes automation mechanism for application-specific operational behavior.',
        },
        {
          title: 'Tool fit',
          description:
            'Selecting deployment tooling based on actual complexity and operational requirements.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include creating overly complex templates, hiding too much configuration behind values, storing secrets insecurely, failing to version charts and dependencies, deploying untested charts, ignoring generated manifests, and allowing production values to drift without governance.',
      highlights: [
        {
          title: 'Template complexity',
          description:
            'Making Helm templates so complicated that they become difficult to understand and maintain.',
        },
        {
          title: 'Untested chart',
          description:
            'Deploying a chart without validating its generated Kubernetes resources.',
        },
        {
          title: 'Secret exposure',
          description:
            'Allowing sensitive credentials to be embedded or exposed through deployment configuration.',
        },
        {
          title: 'Configuration drift',
          description:
            'Allowing deployed configuration to diverge from the intended and version-controlled configuration.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'docker',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'ansible',
    'serverless',
    'ci-cd',
    'github-actions',
    'git',
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

export default helmKnowledge
