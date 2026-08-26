import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session01: SessionDefinition = {
  id: 'mc09-session-01',
  number: 1,
  stage: 'discover',
  title: 'Container Foundations - From Application to Running Container',
  objective:
    'Understand why containers exist, how images become running containers, how container runtimes and registries fit together, and how isolation, configuration, networking and persistent data affect production container design.',
  experiences: [
    {
      id: 'mc09-s01-container-foundations-lesson',
      type: 'lesson',
      title: 'From Application Dependencies to a Reproducible Container',
      description:
        'Build a practical mental model of containers before learning Docker commands. Follow one EDDUU application from source code to a running production workload.',
      lesson: {
        opening:
          'Imagine the EDDUU backend works perfectly on one developer laptop but fails after deployment because the server has a different Python version, missing libraries and different operating-system packages. A container addresses this class of problem by packaging an application with the environment it needs to run in a repeatable way.',
        sections: [
          {
            heading: '1. Start with the environment consistency problem',
            explanation:
              'An application is not only its source code. It also depends on a runtime, libraries, operating-system capabilities, configuration and external services. When development, testing and production environments differ, the same code can behave differently.',
            example:
              'An EDDUU FastAPI service may require a particular Python version and specific package versions. If the developer laptop and production server use different versions, the application can behave differently even when the source code is identical.',
          },
          {
            heading: '2. Understand what a container packages',
            explanation:
              'A container provides a standardized way to package an application together with the runtime components and dependencies required to execute it. The goal is reproducibility rather than simply creating a smaller virtual machine.',
            example:
              'EDDUU can package its FastAPI service with its Python runtime and required libraries so the same application image can be tested and later run in another compatible container environment.',
          },
          {
            heading: '3. Separate an image from a container',
            explanation:
              'A container image is a packaged artifact used to create containers. A container is a running or stopped instance created from an image. One image can be used to create multiple containers.',
            example:
              'EDDUU may build one backend image version and run multiple container instances from that same image when additional API capacity is required.',
          },
          {
            heading: '4. Understand image layers',
            explanation:
              'Container images are commonly built from layers. Each build instruction can contribute to the resulting image, and reusable unchanged layers can improve build efficiency. Layer design therefore affects both build speed and image size.',
            example:
              'If EDDUU installs Python dependencies in a stable layer before copying frequently changing application code, dependency layers can often be reused when only source files change.',
          },
          {
            heading: '5. Follow the container lifecycle',
            explanation:
              'A container has a lifecycle. It can be created from an image, started, run, stopped and removed. Treating the container as a replaceable runtime instance is an important production mindset.',
            example:
              'If an EDDUU backend container becomes unhealthy, the platform can stop and replace that container using the same known application image rather than manually repairing the running instance.',
          },
          {
            heading: '6. Understand the container runtime',
            explanation:
              'The image is an artifact; something must actually execute the container. A container runtime provides the mechanisms required to create and manage the isolated process environment.',
            example:
              'When an EDDUU image is pulled onto a server, the container runtime uses that image to create and start the backend container.',
          },
          {
            heading: '7. Understand isolation',
            explanation:
              'Containers provide process, filesystem and network isolation mechanisms so workloads can operate with defined boundaries. Containers still share the underlying host kernel in typical Linux container environments, so they are not equivalent to separate physical machines.',
            example:
              'An EDDUU API container and background-worker container can run as separate processes with separate filesystems and network identities while sharing the underlying host infrastructure.',
          },
          {
            heading: '8. Images should be treated as immutable deployment artifacts',
            explanation:
              'A production image should represent a known application version. Instead of manually changing a running container and hoping the change persists, teams normally build a new image and deploy a new version.',
            example:
              'If EDDUU changes its API dependency version, the team can build a new versioned image, test it and deploy that image rather than manually installing the dependency inside an existing production container.',
          },
          {
            heading: '9. Registries connect builds with deployment',
            explanation:
              'A container registry stores and distributes container images. A common lifecycle is build an image, assign a meaningful tag or immutable identifier, push it to a registry and pull it from the deployment environment.',
            example:
              'An EDDUU CI pipeline can build the backend image, publish it to a private container registry and allow the deployment platform to pull that exact image version.',
          },
          {
            heading: '10. Configuration should not be baked into the image',
            explanation:
              'The application artifact should remain reusable across environments. Environment-specific configuration such as database endpoints, feature flags and credentials should be supplied at runtime through appropriate configuration and secret mechanisms.',
            example:
              'The same EDDUU backend image can run in development, staging and production while receiving different database connection settings at runtime.',
          },
          {
            heading: '11. Containers and persistent data are different concerns',
            explanation:
              'A container filesystem should not automatically be treated as durable application storage. When a container is replaced, data stored only inside its writable layer may disappear. Persistent data should therefore use an appropriate external storage mechanism.',
            example:
              'EDDUU should not rely on a backend container filesystem to permanently store student records. PostgreSQL or another durable data system should own that data.',
          },
          {
            heading: '12. Container networking enables service communication',
            explanation:
              'Real applications contain multiple services. Containers need controlled ways to communicate with one another, and production designs must distinguish internal service communication from traffic exposed to users.',
            example:
              'An EDDUU backend container may communicate with a Redis container and PostgreSQL service over an internal network while only the intended API entry point is exposed to external traffic.',
          },
          {
            heading: '13. Resource limits protect the host',
            explanation:
              'A container can consume CPU and memory, but production platforms can apply resource constraints so one workload does not consume all available host capacity. Resource requests and limits become important as workloads scale.',
            example:
              'If an EDDUU background worker suddenly processes many jobs, memory and CPU controls can prevent that workload from consuming all resources needed by the API service.',
          },
          {
            heading: '14. Containers are not automatically the right answer for every workload',
            explanation:
              'Containers provide useful packaging and deployment characteristics, but the correct architecture still depends on workload requirements, security boundaries, operational maturity and platform capabilities.',
            example:
              'A simple internal application may run adequately on one managed compute service, while a large EDDUU platform with multiple independently deployed services may benefit much more from container orchestration.',
          },
          {
            heading: '15. Container versus virtual machine',
            explanation:
              'Virtual machines virtualize hardware and normally include a guest operating system. Containers generally isolate application processes while sharing the host kernel. Containers can therefore be lighter and faster to start, while virtual machines can provide stronger isolation boundaries and operating-system independence.',
            example:
              'An EDDUU platform might use virtual machines as the underlying infrastructure while running multiple application containers on those machines.',
          },
          {
            heading: '16. Build the production mental model',
            explanation:
              'A production container architecture separates source code, image creation, image distribution, runtime execution, configuration, networking and persistent data. This separation makes deployments reproducible and operational responsibilities clearer.',
            example:
              'The EDDUU path can be represented as source code -> Dockerfile -> image -> registry -> container runtime -> running service, with configuration, networking and durable data supplied around the running workload.',
          },
        ],
        realWorldConnection:
          'In production engineering teams, containers are valuable because they create a repeatable deployment artifact and establish clearer boundaries between application packaging and infrastructure. The difficult engineering decisions begin when teams have to manage configuration, networking, storage, resources, security and many container instances at scale.',
        keyIdea:
          'A container is a replaceable runtime instance created from a versioned image. Reliable container architecture separates application packaging from runtime configuration, networking, persistent data and infrastructure operations.',
        recap: [
          'Containers address environment consistency and deployment reproducibility problems.',
          'An image is a packaged artifact; a container is an instance created from that image.',
          'Images are built from layers and should represent known application versions.',
          'Registries distribute images between build and deployment environments.',
          'Runtime configuration should normally be supplied outside the image.',
          'Persistent application data should live in durable storage systems rather than an ephemeral container filesystem.',
          'Container networking and resource controls become important when multiple workloads share infrastructure.',
          'Containers and virtual machines provide different isolation and operational models.',
        ],
      },
    },
    {
      id: 'mc09-s01-container-foundations-animation',
      type: 'animation',
      title: 'Follow EDDUU from Source Code to Container',
      description:
        'Visualize the complete path from application source code to a versioned image, registry and running container.',
      animation: {
        visual: 'architecture',
        opening:
          'Think of a container image like a standardized shipping package. The package contains what the application needs, while the container is the running instance created from that package.',
        parts: [
          {
            id: 'source',
            label: 'SOURCE CODE',
            explanation:
              'The application begins as source code together with its dependency requirements.',
            example:
              'EDDUU starts with the FastAPI backend source code and its Python dependency definitions.',
          },
          {
            id: 'dockerfile',
            label: 'BUILD DEFINITION',
            explanation:
              'A Dockerfile describes how the application image should be assembled.',
            example:
              'The EDDUU backend Dockerfile selects a base image, installs dependencies and copies the application into the image.',
          },
          {
            id: 'image',
            label: 'CONTAINER IMAGE',
            explanation:
              'The build produces a versioned image that can be distributed and reused.',
            example:
              'EDDUU creates an image such as edduu-api:release-2026-08-27.',
          },
          {
            id: 'registry',
            label: 'CONTAINER REGISTRY',
            explanation:
              'The registry stores and distributes the image to environments that need to run it.',
            example:
              'A deployment pipeline pushes the EDDUU API image to a private registry after automated tests pass.',
          },
          {
            id: 'runtime',
            label: 'CONTAINER RUNTIME',
            explanation:
              'The runtime pulls the image and creates the isolated process environment required to execute it.',
            example:
              'The deployment host pulls the approved EDDUU image and starts a container from it.',
          },
          {
            id: 'running',
            label: 'RUNNING CONTAINER',
            explanation:
              'The container is now a live workload with runtime configuration, networking and resource boundaries.',
            example:
              'The EDDUU API container receives its database configuration and communicates with other required services.',
          },
          {
            id: 'replacement',
            label: 'REPLACE, DO NOT REPAIR',
            explanation:
              'When a container becomes unhealthy, production systems can replace the instance using the known image.',
            example:
              'An unhealthy EDDUU API container can be removed and recreated from the same approved image version.',
          },
        ],
        closing:
          'The important mental model is not simply Docker. It is the separation between application source, immutable image, image distribution, runtime execution and production configuration.',
      },
    },
    {
      id: 'mc09-s01-container-foundations-simulation',
      type: 'simulation',
      title: 'Design the Container Boundary',
      description:
        'Match each EDDUU requirement with the correct container architecture concept.',
      simulation: {
        instruction:
          'Match each requirement with the concept that should own that responsibility.',
        items: [
          {
            id: 'source-item',
            label: 'The team needs a reproducible definition of how the backend image is assembled.',
            description:
              'The build process should be repeatable and reviewable.',
            correctTargetId: 'dockerfile-target',
          },
          {
            id: 'artifact-item',
            label: 'The team needs a reusable package containing the backend runtime and dependencies.',
            description:
              'The package should be versioned and deployable.',
            correctTargetId: 'image-target',
          },
          {
            id: 'distribution-item',
            label: 'The deployment environment needs to download the approved backend image.',
            description:
              'The artifact must be stored and distributed.',
            correctTargetId: 'registry-target',
          },
          {
            id: 'runtime-item',
            label: 'The server needs to execute an image as an isolated workload.',
            description:
              'Something must create and manage the running container.',
            correctTargetId: 'runtime-target',
          },
          {
            id: 'data-item',
            label: 'Student records must survive replacement of an API container.',
            description:
              'The data cannot depend on the container writable layer.',
            correctTargetId: 'persistent-data-target',
          },
          {
            id: 'config-item',
            label: 'Production database endpoints and credentials must differ from development values.',
            description:
              'The same image should work in multiple environments.',
            correctTargetId: 'runtime-config-target',
          },
        ],
        targets: [
          {
            id: 'dockerfile-target',
            label: 'DOCKERFILE',
            description:
              'Defines repeatable image construction steps.',
          },
          {
            id: 'image-target',
            label: 'IMAGE',
            description:
              'Versioned application artifact used to create containers.',
          },
          {
            id: 'registry-target',
            label: 'REGISTRY',
            description:
              'Stores and distributes container images.',
          },
          {
            id: 'runtime-target',
            label: 'CONTAINER RUNTIME',
            description:
              'Creates and executes containers from images.',
          },
          {
            id: 'persistent-data-target',
            label: 'DURABLE DATA STORE',
            description:
              'Keeps important data independent of container lifecycle.',
          },
          {
            id: 'runtime-config-target',
            label: 'RUNTIME CONFIGURATION',
            description:
              'Supplies environment-specific settings outside the image.',
          },
        ],
        successMessage:
          'Correct. A reliable container design separates image construction, artifact distribution, runtime execution, configuration and durable data.',
        failureMessage:
          'Ask which responsibility is being described: build, package, distribute, execute, configure or persist.',
      },
    },
    {
      id: 'mc09-s01-container-foundations-question',
      type: 'question',
      title: 'Container Foundations Check',
      description:
        'Check whether you can distinguish an image from the running container created from it.',
      question: {
        id: 'mc09-s01-container-foundations',
        type: 'single-choice',
        question:
          'EDDUU has one approved backend image and needs to run three identical API instances. Which statement is correct?',
        options: [
          {
            id: 'instances',
            text:
              'The same image can be used to create multiple running container instances.',
            correct: true,
          },
          {
            id: 'image-per-instance',
            text:
              'A completely different image must be built for every running container instance.',
            correct: false,
          },
          {
            id: 'container-as-source',
            text:
              'The running container should become the permanent source of truth for the application code.',
            correct: false,
          },
          {
            id: 'data-in-image',
            text:
              'All production student data should be permanently stored inside the image.',
            correct: false,
          },
        ],
        explanation:
          'An image is a reusable application artifact. Multiple container instances can be created from the same image, while runtime configuration and durable data are handled separately.',
      },
    },
  ],
}