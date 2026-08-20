import type { KnowledgeDefinition } from './knowledge'

export const dockerKnowledge: KnowledgeDefinition = {
  technologyId: 'docker',
  slug: 'docker',
  title: 'Docker',
  summary:
    'Docker is a container platform used to package applications with their runtime dependencies into portable, reproducible units that can run consistently across development, testing, and production environments.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Docker?',
      content:
        'Docker provides a standardized way to package and run applications inside containers. A container includes the application and the dependencies it needs, while sharing the host operating system kernel rather than requiring a complete guest operating system.',
      highlights: [
        {
          title: 'Container',
          description:
            'An isolated process environment containing an application and its required dependencies.',
        },
        {
          title: 'Image',
          description:
            'A read-only packaged template used to create containers.',
        },
        {
          title: 'Docker Engine',
          description:
            'The runtime responsible for building, running, and managing Docker containers.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of Docker like packing a complete kitchen into a standardized box. The box contains the ingredients, utensils, and instructions required to prepare a particular meal. You can move that box to another kitchen and expect the meal to be prepared in a similar way.',
      highlights: [
        {
          title: 'Box',
          description:
            'Comparable to a Docker image.',
        },
        {
          title: 'Running kitchen',
          description:
            'Comparable to a Docker container.',
        },
        {
          title: 'Recipe',
          description:
            'Comparable to the Dockerfile describing how the image is built.',
        },
      ],
    },

    {
      title: 'Why Docker Matters',
      content:
        'Docker reduces environment inconsistencies by packaging applications and dependencies together. This supports reproducible development environments, automated testing, CI/CD pipelines, microservices, and cloud deployments.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'Reducing differences between development, testing, and production environments.',
        },
        {
          title: 'Portability',
          description:
            'Running the same containerized application across compatible environments.',
        },
        {
          title: 'Reproducibility',
          description:
            'Creating environments from versioned definitions instead of manually configuring machines.',
        },
      ],
    },

    {
      title: 'Docker Image',
      content:
        'A Docker image is an immutable template from which containers are created. Images are commonly built from a Dockerfile and can be stored in container registries.',
      highlights: [
        {
          title: 'Image',
          description:
            'A packaged template containing application code, dependencies, and filesystem layers.',
        },
        {
          title: 'Layer',
          description:
            'A filesystem change stored as part of an image.',
        },
        {
          title: 'Registry',
          description:
            'A repository used to store and distribute container images.',
        },
      ],
    },

    {
      title: 'Docker Container',
      content:
        'A container is a running instance of an image. Containers can be started, stopped, restarted, inspected, connected to networks, and given persistent storage through volumes.',
      highlights: [
        {
          title: 'Container lifecycle',
          description:
            'The sequence through which a container is created, started, stopped, restarted, and removed.',
        },
        {
          title: 'Isolation',
          description:
            'Separating processes and resources so applications operate within controlled environments.',
        },
      ],
    },

    {
      title: 'Dockerfile',
      content:
        'A Dockerfile is a text file containing instructions used to build a Docker image. Common instructions include FROM, WORKDIR, COPY, RUN, ENV, EXPOSE, and CMD.',
      highlights: [
        {
          title: 'FROM',
          description:
            'Defines the base image used for the build.',
        },
        {
          title: 'RUN',
          description:
            'Executes commands while building the image.',
        },
        {
          title: 'COPY',
          description:
            'Copies files from the build context into the image.',
        },
        {
          title: 'CMD',
          description:
            'Defines the default command executed when the container starts.',
        },
      ],
    },

    {
      title: 'Docker Build',
      content:
        'Docker builds an image from a Dockerfile and build context. The resulting image can then be tagged and pushed to a container registry for deployment.',
      highlights: [
        {
          title: 'Build context',
          description:
            'The files and directories made available to the Docker build process.',
        },
        {
          title: 'Tag',
          description:
            'A human-readable reference used to identify an image version.',
        },
        {
          title: 'Image build',
          description:
            'The process of converting a Dockerfile and build context into an image.',
        },
      ],
    },

    {
      title: 'Docker Registry',
      content:
        'A container registry stores and distributes Docker images. Organizations can use public registries or private registries to control access to production artifacts.',
      highlights: [
        {
          title: 'Container registry',
          description:
            'A repository for storing and distributing container images.',
        },
        {
          title: 'Private registry',
          description:
            'A registry restricted to authorized users or systems.',
        },
        {
          title: 'Image pull',
          description:
            'Downloading a container image from a registry.',
        },
        {
          title: 'Image push',
          description:
            'Uploading a container image to a registry.',
        },
      ],
    },

    {
      title: 'Docker Volumes',
      content:
        'Containers are designed to be replaceable, so application data that must survive container replacement should be stored outside the writable container layer. Docker volumes provide persistent storage managed by Docker.',
      highlights: [
        {
          title: 'Volume',
          description:
            'Persistent storage managed separately from the container lifecycle.',
        },
        {
          title: 'Persistence',
          description:
            'Keeping data available after a container is removed or recreated.',
        },
      ],
    },

    {
      title: 'Docker Networking',
      content:
        'Docker networking allows containers to communicate with each other and with external systems. Common network modes include bridge, host, and overlay networking.',
      highlights: [
        {
          title: 'Bridge network',
          description:
            'A common Docker network used to connect containers on the same host.',
        },
        {
          title: 'Port mapping',
          description:
            'Mapping a host port to a container port so external clients can reach an application.',
        },
        {
          title: 'Container DNS',
          description:
            'Name-based service discovery between containers on compatible Docker networks.',
        },
      ],
    },

    {
      title: 'Docker Compose',
      content:
        'Docker Compose defines and manages multi-container applications using a declarative configuration file. It is useful for local development, integration environments, and repeatable multi-service setups.',
      highlights: [
        {
          title: 'Compose',
          description:
            'A tool for defining and running multi-container applications.',
        },
        {
          title: 'Service',
          description:
            'A containerized application component defined within a Compose configuration.',
        },
        {
          title: 'Compose network',
          description:
            'The network through which Compose-managed services can communicate.',
        },
      ],
    },

    {
      title: 'Docker and Microservices',
      content:
        'Docker is frequently used to package microservices independently. Each service can have its own runtime dependencies and deployment lifecycle while communicating through APIs or messaging systems.',
      highlights: [
        {
          title: 'Microservice',
          description:
            'A relatively independent service responsible for a focused business capability.',
        },
        {
          title: 'Service boundary',
          description:
            'The defined interface and ownership boundary between services.',
        },
      ],
    },

    {
      title: 'Docker Security',
      content:
        'Container security includes using trusted base images, minimizing image contents, avoiding unnecessary privileges, scanning dependencies, protecting secrets, controlling network access, and keeping the container runtime updated.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Running containers with only the permissions they require.',
        },
        {
          title: 'Image scanning',
          description:
            'Checking container images for known vulnerabilities and security issues.',
        },
        {
          title: 'Secrets',
          description:
            'Sensitive values such as API keys, passwords, and credentials that should not be baked into images.',
        },
      ],
    },

    {
      title: 'Multi-Stage Builds',
      content:
        'Multi-stage Docker builds use multiple build stages so development tools and compilers do not need to be included in the final runtime image. This can reduce image size and attack surface.',
      highlights: [
        {
          title: 'Build stage',
          description:
            'A stage containing tools required to compile or package an application.',
        },
        {
          title: 'Runtime stage',
          description:
            'The final stage containing only what is required to run the application.',
        },
        {
          title: 'Smaller image',
          description:
            'An image containing fewer unnecessary files and dependencies.',
        },
      ],
    },

    {
      title: 'Docker and CI/CD',
      content:
        'CI/CD systems commonly build, test, scan, tag, store, and deploy Docker images. The image becomes a versioned deployment artifact that can move through development, staging, and production environments.',
      highlights: [
        {
          title: 'Build artifact',
          description:
            'A versioned output produced by a software delivery process.',
        },
        {
          title: 'Immutable artifact',
          description:
            'An artifact intended to remain unchanged after creation.',
        },
        {
          title: 'Image promotion',
          description:
            'Moving a validated image through environments without rebuilding different versions for each environment.',
        },
      ],
    },

    {
      title: 'Docker and Kubernetes',
      content:
        'Docker provides container packaging and runtime capabilities, while Kubernetes provides orchestration for containerized workloads at larger scale. Kubernetes can manage scheduling, scaling, networking, health checks, and rollout behavior.',
      highlights: [
        {
          title: 'Container runtime',
          description:
            'Software responsible for running containers.',
        },
        {
          title: 'Orchestration',
          description:
            'Automated management of containers across infrastructure.',
        },
        {
          title: 'Kubernetes',
          description:
            'A container orchestration platform used to manage distributed workloads.',
        },
      ],
    },

    {
      title: 'Docker in Cloud Architecture',
      content:
        'Cloud platforms can run Docker containers using virtual machines, managed container services, Kubernetes platforms, or serverless container products. The choice depends on workload characteristics and operational requirements.',
      highlights: [
        {
          title: 'Managed containers',
          description:
            'Container execution where the cloud provider manages significant infrastructure operations.',
        },
        {
          title: 'Container platform',
          description:
            'A service providing deployment, networking, scaling, and operational capabilities for containers.',
        },
      ],
    },

    {
      title: 'Docker for AI Applications',
      content:
        'Docker is useful for AI applications because model-serving services, RAG APIs, agent backends, vector database integrations, evaluation services, and supporting components can be packaged into reproducible environments.',
      highlights: [
        {
          title: 'Model service',
          description:
            'A service exposing an AI model for inference.',
        },
        {
          title: 'RAG service',
          description:
            'A service implementing retrieval-augmented generation workflows.',
        },
        {
          title: 'AI runtime',
          description:
            'The software environment required to execute an AI workload.',
        },
      ],
    },

    {
      title: 'Docker and AI Reproducibility',
      content:
        'AI workloads often depend on specific Python versions, system libraries, model-serving packages, GPU libraries, and application dependencies. Container images can capture these dependencies so environments are more reproducible.',
      highlights: [
        {
          title: 'Dependency isolation',
          description:
            'Separating application dependencies from other workloads running on the same infrastructure.',
        },
        {
          title: 'Reproducible environment',
          description:
            'An environment that can be recreated consistently from a versioned definition.',
        },
      ],
    },

    {
      title: 'Docker Resource Management',
      content:
        'Containers share host resources, so production systems should define appropriate CPU and memory limits where supported. Resource controls help prevent one workload from consuming disproportionate infrastructure capacity.',
      highlights: [
        {
          title: 'CPU limit',
          description:
            'A control limiting CPU resources available to a container.',
        },
        {
          title: 'Memory limit',
          description:
            'A control limiting memory resources available to a container.',
        },
        {
          title: 'Resource isolation',
          description:
            'Preventing one workload from negatively affecting other workloads through uncontrolled resource consumption.',
        },
      ],
    },

    {
      title: 'Docker Observability',
      content:
        'Containerized applications require application and infrastructure observability. Teams should monitor container health, CPU, memory, network behavior, logs, application metrics, and service-level indicators.',
      highlights: [
        {
          title: 'Container health',
          description:
            'Evidence that a containerized application is operating correctly.',
        },
        {
          title: 'Application metrics',
          description:
            'Measurements such as request rate, latency, and error rate.',
        },
        {
          title: 'Container logs',
          description:
            'Runtime output generated by containerized applications.',
        },
      ],
    },

    {
      title: 'Docker for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Docker is primarily a delivery and operational capability. The leader should understand how containerization affects portability, security, deployment speed, infrastructure cost, CI/CD, observability, team ownership, and production reliability.',
      highlights: [
        {
          title: 'Delivery velocity',
          description:
            'How quickly teams can reliably move software from development to production.',
        },
        {
          title: 'Operational complexity',
          description:
            'The additional systems, processes, and skills required to operate containerized workloads.',
        },
        {
          title: 'Production readiness',
          description:
            'The evidence that a containerized workload is safe and supportable in production.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include using oversized images, embedding secrets in images, running containers with unnecessary privileges, ignoring image vulnerabilities, treating containers as virtual machines, storing important data only inside containers, and failing to define resource limits.',
      highlights: [
        {
          title: 'Oversized image',
          description:
            'A container image containing unnecessary tools, files, or dependencies.',
        },
        {
          title: 'Secret in image',
          description:
            'Embedding credentials or sensitive configuration directly into a container image.',
        },
        {
          title: 'Container as VM',
          description:
            'Treating containers as full virtual machines rather than lightweight isolated application processes.',
        },
        {
          title: 'Missing resource controls',
          description:
            'Allowing a container to consume excessive host resources.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'kubernetes',
    'aws',
    'azure',
    'google-cloud',
    'terraform',
    'helm',
    'serverless',
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
  ],
}

export default dockerKnowledge
