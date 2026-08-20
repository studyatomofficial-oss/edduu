import type { KnowledgeDefinition } from './knowledge'

export const kubernetesKnowledge: KnowledgeDefinition = {
  technologyId: 'kubernetes',
  slug: 'kubernetes',
  title: 'Kubernetes',
  summary:
    'Kubernetes is a container orchestration platform that automates deployment, scaling, networking, health management, and lifecycle operations for containerized applications.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Kubernetes?',
      content:
        'Kubernetes is a platform for running and managing containerized applications across a cluster of machines. It automates tasks such as scheduling workloads, maintaining desired application capacity, service discovery, scaling, health checks, and controlled deployments.',
      highlights: [
        {
          title: 'Container orchestration',
          description:
            'Automated management of containerized workloads across infrastructure.',
        },
        {
          title: 'Cluster',
          description:
            'A collection of machines managed together to run workloads.',
        },
        {
          title: 'Desired state',
          description:
            'The state that Kubernetes continuously attempts to maintain.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine a large hotel with hundreds of rooms. You have many guests, rooms, housekeeping staff, and maintenance requirements. Instead of one person manually managing everything, a hotel management system decides where guests should go, detects problems, replaces unavailable rooms, and keeps the hotel operating according to its rules. Kubernetes plays a similar orchestration role for containers.',
      highlights: [
        {
          title: 'Hotel',
          description:
            'Comparable to the Kubernetes cluster.',
        },
        {
          title: 'Room',
          description:
            'Comparable to a workload location where an application runs.',
        },
        {
          title: 'Management system',
          description:
            'Comparable to the Kubernetes control plane.',
        },
      ],
    },

    {
      title: 'Why Kubernetes Matters',
      content:
        'Running a few containers manually is manageable, but operating hundreds or thousands of containers introduces scheduling, scaling, networking, availability, and deployment challenges. Kubernetes provides standardized mechanisms for automating these operations.',
      highlights: [
        {
          title: 'Scheduling',
          description:
            'Deciding where workloads should run within the cluster.',
        },
        {
          title: 'Scaling',
          description:
            'Increasing or decreasing workload capacity according to demand.',
        },
        {
          title: 'Self-healing',
          description:
            'Automatically replacing or restarting unhealthy workloads according to defined configuration.',
        },
      ],
    },

    {
      title: 'Kubernetes Cluster',
      content:
        'A Kubernetes cluster consists of a control plane and worker nodes. The control plane manages the desired state and cluster decisions, while worker nodes run application workloads.',
      highlights: [
        {
          title: 'Control plane',
          description:
            'The Kubernetes components responsible for cluster management and orchestration decisions.',
        },
        {
          title: 'Worker node',
          description:
            'A machine that runs application workloads managed by Kubernetes.',
        },
        {
          title: 'Cluster',
          description:
            'The complete Kubernetes environment containing management and workload infrastructure.',
        },
      ],
    },

    {
      title: 'Control Plane',
      content:
        'The control plane maintains cluster state and coordinates Kubernetes operations. Important components include the API server, scheduler, controller manager, and cluster state storage.',
      highlights: [
        {
          title: 'API server',
          description:
            'The primary interface through which Kubernetes clients and components communicate with the cluster.',
        },
        {
          title: 'Scheduler',
          description:
            'Selects suitable nodes for newly scheduled workloads.',
        },
        {
          title: 'Controller',
          description:
            'Continuously works to make actual cluster state match desired state.',
        },
        {
          title: 'etcd',
          description:
            'A distributed key-value store used by Kubernetes to persist cluster state.',
        },
      ],
    },

    {
      title: 'Pod',
      content:
        'A Pod is the smallest deployable unit in Kubernetes. A Pod can contain one or more closely related containers that share networking and certain storage resources.',
      highlights: [
        {
          title: 'Pod',
          description:
            'The basic execution unit managed by Kubernetes.',
        },
        {
          title: 'Container',
          description:
            'The application process running inside a Pod.',
        },
        {
          title: 'Shared network',
          description:
            'Containers in the same Pod share the Pod network namespace.',
        },
      ],
    },

    {
      title: 'Deployment',
      content:
        'A Kubernetes Deployment manages a set of replicated Pods and supports controlled updates. It is commonly used for stateless application workloads.',
      highlights: [
        {
          title: 'Replica',
          description:
            'An instance of a workload managed as part of the desired capacity.',
        },
        {
          title: 'Rolling update',
          description:
            'Gradually replacing old Pods with new Pods.',
        },
        {
          title: 'ReplicaSet',
          description:
            'A Kubernetes resource used to maintain a specified number of matching Pods.',
        },
      ],
    },

    {
      title: 'Service',
      content:
        'Pods can be created and replaced dynamically, so their individual network identities should not normally be treated as permanent. A Kubernetes Service provides a stable network endpoint for reaching a group of Pods.',
      highlights: [
        {
          title: 'Service',
          description:
            'A stable network abstraction used to expose a set of Pods.',
        },
        {
          title: 'Service discovery',
          description:
            'The process of locating services within the cluster.',
        },
        {
          title: 'Load balancing',
          description:
            'Distributing requests across healthy backend Pods.',
        },
      ],
    },

    {
      title: 'Ingress',
      content:
        'Ingress provides rules for routing external HTTP or HTTPS traffic to services inside a Kubernetes cluster. Modern Kubernetes environments may also use Gateway API for advanced traffic management.',
      highlights: [
        {
          title: 'Ingress',
          description:
            'A Kubernetes API abstraction for routing external HTTP and HTTPS traffic.',
        },
        {
          title: 'Routing rule',
          description:
            'A rule determining where incoming requests should be sent.',
        },
        {
          title: 'TLS',
          description:
            'Encryption commonly used to protect HTTPS traffic.',
        },
      ],
    },

    {
      title: 'ConfigMap',
      content:
        'ConfigMaps store non-sensitive configuration data separately from application container images. This allows configuration to change without rebuilding the application image.',
      highlights: [
        {
          title: 'ConfigMap',
          description:
            'A Kubernetes resource for storing non-sensitive configuration data.',
        },
        {
          title: 'Configuration separation',
          description:
            'Keeping environment-specific settings outside the application image.',
        },
      ],
    },

    {
      title: 'Secret',
      content:
        'Kubernetes Secrets provide a mechanism for storing sensitive configuration such as credentials, tokens, and certificates. Secret management still requires appropriate access control and encryption practices.',
      highlights: [
        {
          title: 'Secret',
          description:
            'A Kubernetes resource intended for sensitive configuration data.',
        },
        {
          title: 'Credential',
          description:
            'A sensitive value used to authenticate or authorize access.',
        },
        {
          title: 'Access control',
          description:
            'Rules controlling which identities can access sensitive information.',
        },
      ],
    },

    {
      title: 'Namespace',
      content:
        'Namespaces provide logical separation within a Kubernetes cluster. They can be used to organize workloads, apply policies, and manage resources across teams or environments.',
      highlights: [
        {
          title: 'Namespace',
          description:
            'A logical scope for organizing Kubernetes resources.',
        },
        {
          title: 'Resource isolation',
          description:
            'Separating workloads and applying controls within defined scopes.',
        },
      ],
    },

    {
      title: 'Labels and Selectors',
      content:
        'Labels attach metadata to Kubernetes resources. Selectors use labels to identify matching resources, enabling services, controllers, and other Kubernetes objects to work with groups of workloads.',
      highlights: [
        {
          title: 'Label',
          description:
            'A key-value metadata pair attached to a Kubernetes resource.',
        },
        {
          title: 'Selector',
          description:
            'A query used to identify resources matching specific labels.',
        },
      ],
    },

    {
      title: 'Health Checks',
      content:
        'Kubernetes supports health checks that help determine whether a container is alive, ready to receive traffic, or should be started differently. These checks are critical for reliable production workloads.',
      highlights: [
        {
          title: 'Liveness probe',
          description:
            'Checks whether a container is functioning and may need to be restarted.',
        },
        {
          title: 'Readiness probe',
          description:
            'Determines whether a workload is ready to receive traffic.',
        },
        {
          title: 'Startup probe',
          description:
            'Provides additional protection for applications that require significant startup time.',
        },
      ],
    },

    {
      title: 'Resource Requests and Limits',
      content:
        'Kubernetes can use CPU and memory requests to influence scheduling and limits to constrain resource consumption. Proper resource configuration helps improve cluster stability and capacity planning.',
      highlights: [
        {
          title: 'Request',
          description:
            'The resource amount Kubernetes uses when making scheduling decisions.',
        },
        {
          title: 'Limit',
          description:
            'A maximum resource amount enforced for a container according to the configured resource type.',
        },
        {
          title: 'Capacity planning',
          description:
            'Planning infrastructure resources to support expected workloads.',
        },
      ],
    },

    {
      title: 'Horizontal Pod Autoscaler',
      content:
        'The Horizontal Pod Autoscaler can adjust the number of workload replicas based on observed metrics such as CPU utilization or custom metrics.',
      highlights: [
        {
          title: 'HPA',
          description:
            'Horizontal Pod Autoscaler, which adjusts workload replica count.',
        },
        {
          title: 'Autoscaling metric',
          description:
            'A measured signal used to determine whether capacity should increase or decrease.',
        },
      ],
    },

    {
      title: 'Stateful Applications',
      content:
        'Kubernetes can run stateful workloads, but they require careful storage, identity, backup, failover, and recovery design. StatefulSet provides stable identities and storage association for suitable workloads.',
      highlights: [
        {
          title: 'StatefulSet',
          description:
            'A Kubernetes workload controller designed for applications requiring stable identities or persistent storage relationships.',
        },
        {
          title: 'PersistentVolume',
          description:
            'A representation of persistent storage available to workloads.',
        },
        {
          title: 'PersistentVolumeClaim',
          description:
            'A request by a workload for persistent storage.',
        },
      ],
    },

    {
      title: 'Kubernetes Networking',
      content:
        'Kubernetes networking enables Pods to communicate with each other, services to provide stable endpoints, and external traffic to enter the cluster through appropriate routing mechanisms.',
      highlights: [
        {
          title: 'Pod networking',
          description:
            'The network model through which Pods communicate within the cluster.',
        },
        {
          title: 'Service networking',
          description:
            'Stable service-level communication between workloads.',
        },
        {
          title: 'NetworkPolicy',
          description:
            'Rules controlling permitted network communication between workloads.',
        },
      ],
    },

    {
      title: 'Kubernetes Security',
      content:
        'Kubernetes security includes identity, authorization, network controls, workload isolation, image security, secret management, admission controls, and secure cluster configuration.',
      highlights: [
        {
          title: 'RBAC',
          description:
            'Role-Based Access Control for controlling permissions within Kubernetes.',
        },
        {
          title: 'Service account',
          description:
            'An identity used by workloads to interact with Kubernetes or other services.',
        },
        {
          title: 'Admission control',
          description:
            'Controls that can validate or modify requests before Kubernetes accepts them.',
        },
      ],
    },

    {
      title: 'Rolling Deployment',
      content:
        'Kubernetes Deployments commonly support rolling updates, allowing new Pods to be introduced while old Pods are gradually removed. This can reduce downtime when application compatibility and health checks are properly designed.',
      highlights: [
        {
          title: 'Rolling update',
          description:
            'Gradual replacement of an old application version with a new version.',
        },
        {
          title: 'Max unavailable',
          description:
            'A rollout setting controlling how many replicas can be unavailable during an update.',
        },
        {
          title: 'Max surge',
          description:
            'A rollout setting controlling how many additional replicas can temporarily exist during an update.',
        },
      ],
    },

    {
      title: 'Rollback',
      content:
        'Kubernetes Deployments maintain revision history that can support rollback to an earlier deployment revision when a rollout introduces problems.',
      highlights: [
        {
          title: 'Revision',
          description:
            'A recorded version of a Deployment configuration.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a workload to a previous known-good deployment revision.',
        },
      ],
    },

    {
      title: 'Helm',
      content:
        'Helm is a package manager and templating system commonly used to define, package, configure, and deploy Kubernetes applications.',
      highlights: [
        {
          title: 'Chart',
          description:
            'A packaged collection of Kubernetes resources and configuration.',
        },
        {
          title: 'Values',
          description:
            'Configuration values used to customize a Helm deployment.',
        },
        {
          title: 'Release',
          description:
            'An installed instance of a Helm chart.',
        },
      ],
    },

    {
      title: 'Kubernetes and Cloud',
      content:
        'Cloud providers offer managed Kubernetes services that reduce the operational burden of running the control plane while integrating Kubernetes with cloud networking, identity, storage, load balancing, and observability services.',
      highlights: [
        {
          title: 'Managed Kubernetes',
          description:
            'Kubernetes where significant cluster management responsibilities are handled by a cloud provider.',
        },
        {
          title: 'Cloud integration',
          description:
            'Connecting Kubernetes workloads to cloud-native networking, storage, identity, and infrastructure services.',
        },
      ],
    },

    {
      title: 'Kubernetes Observability',
      content:
        'Production Kubernetes platforms require observability across infrastructure, cluster components, workloads, services, and applications. Metrics, logs, traces, events, and alerts provide visibility into system behavior.',
      highlights: [
        {
          title: 'Cluster metrics',
          description:
            'Measurements describing Kubernetes and infrastructure health.',
        },
        {
          title: 'Application logs',
          description:
            'Runtime events generated by applications running inside Pods.',
        },
        {
          title: 'Events',
          description:
            'Cluster-level records describing important resource and scheduling activities.',
        },
      ],
    },

    {
      title: 'Kubernetes and CI/CD',
      content:
        'Kubernetes can serve as the runtime target for automated delivery pipelines. CI systems can build and scan container images while CD systems deploy validated artifacts and monitor rollout health.',
      highlights: [
        {
          title: 'CI',
          description:
            'Continuous Integration practices for building and validating software changes.',
        },
        {
          title: 'CD',
          description:
            'Continuous Delivery or Deployment practices for releasing validated changes.',
        },
        {
          title: 'Deployment artifact',
          description:
            'A versioned application package such as a container image.',
        },
      ],
    },

    {
      title: 'Kubernetes for AI Applications',
      content:
        'Kubernetes can host AI APIs, model-serving systems, RAG services, agent backends, evaluation workers, data-processing workloads, and supporting services. GPU scheduling and workload isolation can become important for model-serving workloads.',
      highlights: [
        {
          title: 'Model serving',
          description:
            'Running an AI model as an accessible inference service.',
        },
        {
          title: 'GPU scheduling',
          description:
            'Allocating GPU resources to workloads that require accelerated computation.',
        },
        {
          title: 'AI worker',
          description:
            'A workload that performs asynchronous AI processing or evaluation tasks.',
        },
      ],
    },

    {
      title: 'Kubernetes AI Scaling',
      content:
        'AI workloads can have unusual scaling characteristics because inference may depend on GPU availability, model memory, request batching, latency requirements, and queue depth. Scaling should therefore use workload-specific signals rather than relying only on CPU utilization.',
      highlights: [
        {
          title: 'Queue depth',
          description:
            'The amount of work waiting to be processed.',
        },
        {
          title: 'Inference latency',
          description:
            'The time required to produce an AI inference result.',
        },
        {
          title: 'GPU utilization',
          description:
            'The percentage of available GPU capacity being used.',
        },
      ],
    },

    {
      title: 'Kubernetes Reliability',
      content:
        'Reliable Kubernetes systems use multiple replicas, appropriate health probes, resource controls, disruption policies, resilient storage, observability, and tested recovery procedures.',
      highlights: [
        {
          title: 'Replica',
          description:
            'An additional instance of a workload used to provide capacity or resilience.',
        },
        {
          title: 'Pod disruption',
          description:
            'A planned or unplanned event that removes a Pod from service.',
        },
        {
          title: 'Recovery',
          description:
            'The process of restoring acceptable service after failure.',
        },
      ],
    },

    {
      title: 'Kubernetes Cost Management',
      content:
        'Kubernetes can improve infrastructure utilization, but poorly configured workloads can waste significant resources. Teams should monitor requests, limits, idle capacity, autoscaling behavior, node utilization, and workload efficiency.',
      highlights: [
        {
          title: 'Bin packing',
          description:
            'Efficiently placing workloads onto available nodes to improve resource utilization.',
        },
        {
          title: 'Idle capacity',
          description:
            'Allocated infrastructure capacity that is not being effectively used.',
        },
        {
          title: 'Rightsizing',
          description:
            'Adjusting resource allocation to better match actual workload requirements.',
        },
      ],
    },

    {
      title: 'Kubernetes for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Kubernetes is primarily an orchestration and operating-model decision. The leader should understand platform complexity, team skills, reliability requirements, cloud costs, security, deployment velocity, workload characteristics, and whether Kubernetes is actually justified for the product.',
      highlights: [
        {
          title: 'Platform complexity',
          description:
            'The operational complexity introduced by running and maintaining a Kubernetes platform.',
        },
        {
          title: 'Team maturity',
          description:
            'The skills and operational experience available to manage the platform safely.',
        },
        {
          title: 'Architecture fit',
          description:
            'How well Kubernetes matches the application workload and business requirements.',
        },
        {
          title: 'Operational ownership',
          description:
            'Clear accountability for platform reliability, security, upgrades, and support.',
        },
      ],
    },

    {
      title: 'When Not to Use Kubernetes',
      content:
        'Kubernetes is powerful but introduces significant operational complexity. A small application with simple infrastructure requirements may be better served by managed containers, serverless services, or simpler virtual-machine-based deployment.',
      highlights: [
        {
          title: 'Over-engineering',
          description:
            'Using a complex platform when a simpler solution satisfies the requirements.',
        },
        {
          title: 'Managed alternative',
          description:
            'A service where the provider handles more operational responsibilities.',
        },
        {
          title: 'Operational burden',
          description:
            'The ongoing effort required to maintain, secure, upgrade, and operate the platform.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include treating Kubernetes as automatically required for every application, ignoring resource requests and limits, exposing services unnecessarily, storing secrets insecurely, deploying without health probes, using weak RBAC policies, and operating clusters without sufficient observability or ownership.',
      highlights: [
        {
          title: 'Kubernetes by default',
          description:
            'Choosing Kubernetes without evaluating whether its complexity is justified.',
        },
        {
          title: 'Missing probes',
          description:
            'Running production workloads without meaningful health checks.',
        },
        {
          title: 'Weak RBAC',
          description:
            'Granting excessive permissions to users or workloads.',
        },
        {
          title: 'Poor resource planning',
          description:
            'Failing to define or monitor resource requirements.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'docker',
    'cloud',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'ansible',
    'helm',
    'serverless',
    'deployment',
    'deployment-strategy',
    'ci-cd',
    'github-actions',
  ],
}

export default kubernetesKnowledge
