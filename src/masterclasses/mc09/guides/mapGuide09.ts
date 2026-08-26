import type { GuideDefinition } from '../../../masterclass-engine/types'

export const mapGuide09: GuideDefinition = {
  type: 'map',
  label: 'MC09 Implementation Map',
  title: 'Containers, Kubernetes & Infrastructure',
  objective:
    'Follow a practical path from container fundamentals through Docker, Kubernetes, infrastructure as code and production operations. Each step identifies the tool, where to get it, what to do and how to verify progress.',
  steps: [
    {
      id: 'containers',
      step: 1,
      title: 'Container Foundations',
      action:
        'Understand the container model before installing orchestration tools.',
      details: [
        'Learn the difference between an image and a running container.',
        'Understand image layers and the container runtime.',
        'Understand why containers are useful for consistent application delivery.',
        'Compare containers with virtual machines.',
      ],
      url: 'https://docs.docker.com/get-started/docker-overview/',
      mapStepId: 'containers',
    },

    {
      id: 'docker-install',
      step: 2,
      title: 'Install Docker Desktop',
      action:
        'Install Docker Desktop so Docker commands and a local container runtime are available on Windows.',
      details: [
        'Open the official Docker Desktop page.',
        'Download Docker Desktop for Windows.',
        'Run the installer.',
        'Start Docker Desktop.',
        'Wait until Docker reports that it is running.',
        'Open PowerShell after Docker Desktop is ready.',
        'Run docker --version to verify the installation.',
      ],
      url: 'https://www.docker.com/products/docker-desktop/',
      command: 'docker --version',
      explanation:
        'A successful version response confirms that the Docker command-line interface is available.',
      mapStepId: 'docker',
    },

    {
      id: 'docker-build',
      step: 3,
      title: 'Build and Run Your First Container',
      action:
        'Move from application source to a runnable container image.',
      details: [
        'Create a Dockerfile in the application root.',
        'Create a .dockerignore file.',
        'Build the image.',
        'Run the image as a container.',
        'Inspect the running container.',
        'Read the container logs.',
      ],
      url: 'https://docs.docker.com/get-started/workshop/',
      command:
        'docker build -t edduu-api:1.0 . && docker run --name edduu-api -p 8000:8000 edduu-api:1.0',
      explanation:
        'The build command creates an image. The run command starts a container from that image and maps port 8000 on the host to port 8000 inside the container.',
      mapStepId: 'docker',
    },

    {
      id: 'docker-compose',
      step: 4,
      title: 'Run Multiple Containers with Compose',
      action:
        'Use Docker Compose when the application requires multiple local services such as an API, database and cache.',
      details: [
        'Create a compose.yaml file.',
        'Define the application service.',
        'Define the database service.',
        'Define the cache service when required.',
        'Define networks and volumes.',
        'Start the complete local environment.',
        'Verify each service is running.',
      ],
      url: 'https://docs.docker.com/compose/',
      command: 'docker compose up -d',
      explanation:
        'Docker Compose starts the services described by the Compose configuration as one local application environment.',
      mapStepId: 'docker',
    },

    {
      id: 'kubernetes-install',
      step: 5,
      title: 'Prepare a Local Kubernetes Environment',
      action:
        'Install kubectl and prepare a local Kubernetes cluster for hands-on deployment practice.',
      details: [
        'Open the official Kubernetes tools documentation.',
        'Install kubectl for Windows.',
        'Choose a local Kubernetes environment such as Docker Desktop Kubernetes or another supported local cluster.',
        'Start the local cluster.',
        'Open PowerShell.',
        'Run kubectl version --client to verify kubectl.',
        'Run kubectl get nodes to verify cluster connectivity.',
      ],
      url: 'https://kubernetes.io/docs/tasks/tools/',
      command: 'kubectl version --client',
      explanation:
        'The client version confirms kubectl is installed. kubectl get nodes is then used to verify that kubectl can communicate with the cluster.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'kubernetes-workload',
      step: 6,
      title: 'Deploy the Application to Kubernetes',
      action:
        'Create a Kubernetes Deployment and move the containerized application into a cluster.',
      details: [
        'Create deployment.yaml.',
        'Define the Deployment metadata.',
        'Set the container image.',
        'Set the container port.',
        'Start with two replicas.',
        'Apply the manifest.',
        'Inspect the Deployment.',
        'Inspect the Pods.',
      ],
      url: 'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',
      command:
        'kubectl apply -f deployment.yaml && kubectl get deployments && kubectl get pods',
      explanation:
        'The Deployment describes the desired application state. Kubernetes creates and maintains the requested Pods.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'kubernetes-service',
      step: 7,
      title: 'Expose the Workload with a Service',
      action:
        'Give the application a stable Kubernetes network identity.',
      details: [
        'Create service.yaml.',
        'Match the Service selector to the Pod labels.',
        'Define the Service port.',
        'Define the target port.',
        'Apply the Service.',
        'Inspect the Service.',
        'Verify its endpoints.',
      ],
      url: 'https://kubernetes.io/docs/concepts/services-networking/service/',
      command:
        'kubectl apply -f service.yaml && kubectl get service && kubectl get endpoints',
      explanation:
        'A Service provides a stable networking abstraction in front of a changing set of Pods.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'kubernetes-config',
      step: 8,
      title: 'Configure Workloads Safely',
      action:
        'Separate application configuration and sensitive values from the container image.',
      details: [
        'Create a ConfigMap for non-sensitive configuration.',
        'Create a Secret for sensitive configuration.',
        'Inject configuration into the Deployment.',
        'Do not commit real credentials to Git.',
        'Verify the application receives the expected configuration.',
      ],
      url: 'https://kubernetes.io/docs/concepts/configuration/',
      command:
        'kubectl get configmaps && kubectl get secrets',
      explanation:
        'Configuration should remain separate from the immutable application image so the same image can move between environments.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'kubernetes-health',
      step: 9,
      title: 'Add Health Checks',
      action:
        'Teach Kubernetes how to determine whether the application is ready and healthy.',
      details: [
        'Create a health endpoint in the application.',
        'Configure a readiness probe.',
        'Configure a liveness probe.',
        'Deploy the updated workload.',
        'Inspect Pod conditions.',
        'Confirm traffic is only sent to ready Pods.',
      ],
      url: 'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',
      command: 'kubectl describe pod <pod-name>',
      explanation:
        'Readiness controls whether a Pod should receive traffic. Liveness helps Kubernetes detect containers that need to be restarted.',
      mapStepId: 'kubernetes',
    },

    {
      id: 'kubernetes-ingress',
      step: 10,
      title: 'Create the External Traffic Path',
      action:
        'Understand how external HTTP traffic reaches a Kubernetes workload.',
      details: [
        'Choose an Ingress implementation supported by the local or cloud cluster.',
        'Define the hostname.',
        'Route traffic to the Kubernetes Service.',
        'Configure TLS when supported.',
        'Verify the complete request path.',
      ],
      url: 'https://kubernetes.io/docs/concepts/services-networking/ingress/',
      command: 'kubectl get ingress',
      explanation:
        'Ingress provides rules for routing external HTTP and HTTPS traffic toward Kubernetes Services.',
      mapStepId: 'networking',
    },

    {
      id: 'kubernetes-scaling',
      step: 11,
      title: 'Scale the Application',
      action:
        'Configure resource boundaries and automatic workload scaling.',
      details: [
        'Define CPU and memory requests.',
        'Define appropriate limits.',
        'Create a HorizontalPodAutoscaler.',
        'Choose a scaling signal.',
        'Define minimum replicas.',
        'Define maximum replicas.',
        'Observe scaling behavior.',
      ],
      url: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/',
      command: 'kubectl get hpa',
      explanation:
        'The Horizontal Pod Autoscaler adjusts workload replicas according to configured resource or application metrics.',
      mapStepId: 'scaling',
    },

    {
      id: 'terraform-install',
      step: 12,
      title: 'Install Terraform',
      action:
        'Install Terraform so infrastructure can be defined and reviewed as code.',
      details: [
        'Open the official HashiCorp installation documentation.',
        'Install Terraform for Windows.',
        'Open PowerShell.',
        'Run terraform -version.',
        'Confirm that the installed version is displayed.',
      ],
      url: 'https://developer.hashicorp.com/terraform/install',
      command: 'terraform -version',
      explanation:
        'A successful version response confirms that Terraform is available from PowerShell.',
      mapStepId: 'terraform',
    },

    {
      id: 'terraform-basics',
      step: 13,
      title: 'Create Infrastructure as Code',
      action:
        'Create a Terraform project that describes infrastructure declaratively.',
      details: [
        'Create a main.tf file.',
        'Configure the required provider.',
        'Define infrastructure resources.',
        'Create variables for environment-specific values.',
        'Create outputs for important resulting values.',
        'Initialize Terraform.',
        'Generate and review the execution plan.',
      ],
      url: 'https://developer.hashicorp.com/terraform/docs',
      command: 'terraform init && terraform fmt && terraform validate && terraform plan',
      explanation:
        'Terraform init prepares the working directory. Validate checks configuration syntax and consistency. Plan shows the proposed infrastructure changes before they are applied.',
      mapStepId: 'terraform',
    },

    {
      id: 'terraform-state',
      step: 14,
      title: 'Understand Terraform State',
      action:
        'Learn how Terraform tracks the infrastructure it manages.',
      details: [
        'Inspect the local state during development.',
        'Understand why state should be protected.',
        'Understand remote state for team environments.',
        'Avoid storing sensitive state carelessly.',
        'Understand infrastructure drift.',
      ],
      url: 'https://developer.hashicorp.com/terraform/language/state',
      command: 'terraform show',
      explanation:
        'Terraform state records the relationship between configuration and managed infrastructure.',
      mapStepId: 'terraform',
    },

    {
      id: 'terraform-registry',
      step: 15,
      title: 'Use the Terraform Registry',
      action:
        'Find verified providers and reusable modules instead of rebuilding every infrastructure component from scratch.',
      details: [
        'Open the Terraform Registry.',
        'Search for the provider required by your target environment.',
        'Review provider documentation.',
        'Review available modules.',
        'Check inputs and outputs before using a module.',
      ],
      url: 'https://registry.terraform.io/',
      mapStepId: 'terraform',
    },

    {
      id: 'production-observability',
      step: 16,
      title: 'Build Production Observability',
      action:
        'Connect application and infrastructure behavior to operational signals.',
      details: [
        'Collect application logs.',
        'Collect workload and infrastructure metrics.',
        'Add request and error measurements.',
        'Use traces when distributed request visibility is required.',
        'Create dashboards.',
        'Create actionable alerts.',
        'Define important SLO signals.',
      ],
      url: 'https://opentelemetry.io/docs/',
      mapStepId: 'production',
    },

    {
      id: 'production-security',
      step: 17,
      title: 'Review Production Security',
      action:
        'Reduce unnecessary access, credential exposure and network exposure.',
      details: [
        'Apply least privilege.',
        'Protect cloud and Kubernetes credentials.',
        'Review Secret handling.',
        'Review network boundaries.',
        'Review public endpoints.',
        'Remove unnecessary administrative access.',
      ],
      url: 'https://kubernetes.io/docs/concepts/security/',
      mapStepId: 'production',
    },

    {
      id: 'production-recovery',
      step: 18,
      title: 'Practice Backup and Recovery',
      action:
        'Create and test a recovery procedure for important production data.',
      details: [
        'Identify critical persistent data.',
        'Define backup frequency.',
        'Define retention.',
        'Document restoration steps.',
        'Test restoration.',
        'Define RPO.',
        'Define RTO.',
      ],
      mapStepId: 'production',
    },

    {
      id: 'edduu-capstone',
      step: 19,
      title: 'Assemble the EDDUU Production Platform',
      action:
        'Combine the complete MC09 toolchain into one production-oriented architecture.',
      details: [
        'Containerize the EDDUU application.',
        'Run the application locally with Docker Compose.',
        'Deploy workloads to Kubernetes.',
        'Expose traffic through controlled networking.',
        'Configure scaling and health checks.',
        'Provision infrastructure with Terraform.',
        'Add observability.',
        'Apply security controls.',
        'Test backup and recovery.',
        'Review cost and operational ownership.',
      ],
      mapStepId: 'capstone',
    },
  ],
}