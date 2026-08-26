import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session02: SessionDefinition = {
  id: 'mc09-session-02',
  number: 2,
  stage: 'discover',
  title: 'Docker & Containerization - Building and Operating Application Containers',
  objective:
    'Understand how Docker turns application source code into images and running containers, and learn how Dockerfiles, build context, layers, ports, networks, volumes and Compose work together in a multi-container application.',
  experiences: [
    {
      id: 'mc09-s02-docker-lesson',
      type: 'lesson',
      title: 'From Dockerfile to a Multi-Container Application',
      description:
        'Follow a realistic EDDUU backend from Dockerfile to image and then into a multi-container development environment.',
      lesson: {
        opening:
          'A container is useful only when the team can build it consistently, configure it correctly and connect it to the other services the application depends on. Docker provides a practical workflow for doing exactly that.',
        sections: [
          {
            heading: '1. Dockerfile is the build recipe',
            explanation:
              'A Dockerfile describes how a container image should be constructed. It normally defines a base image, dependency installation, application files and the command used when the container starts.',
            example:
              'An EDDUU FastAPI Dockerfile can begin from a Python base image, install the requirements file, copy the backend source and define the command that starts the API server.',
          },
          {
            heading: '2. The build context matters',
            explanation:
              'When Docker builds an image, it receives a build context containing the files available to the build instructions. Sending unnecessary files increases build overhead and can expose files that should never be part of the image.',
            example:
              'EDDUU should exclude local virtual environments, Git metadata, test artifacts and local secrets from the Docker build context.',
          },
          {
            heading: '3. .dockerignore controls the context',
            explanation:
              'A .dockerignore file prevents unnecessary files from being sent into the build context. It improves build efficiency and reduces accidental inclusion of development-only material.',
            example:
              'The EDDUU backend can ignore .venv, __pycache__, .git and local environment files before Docker receives the build context.',
          },
          {
            heading: '4. Docker images are layered',
            explanation:
              'Docker images are assembled from layers. If earlier layers remain unchanged, the builder can often reuse them. Dockerfile instruction ordering therefore affects rebuild performance.',
            example:
              'Installing stable Python dependencies before copying frequently changing EDDUU source code allows dependency layers to be reused during normal source-code changes.',
          },
          {
            heading: '5. Separate stable work from frequently changing work',
            explanation:
              'A useful Dockerfile strategy is to place expensive, relatively stable operations before frequently changing application files. This maximizes cache reuse without sacrificing correctness.',
            example:
              'Copying requirements.txt and installing dependencies before copying the rest of the EDDUU backend allows a source-only change to avoid reinstalling unchanged dependencies.',
          },
          {
            heading: '6. An image is not a running service',
            explanation:
              'docker build creates an image. Running a container requires a separate execution step. This distinction is important when diagnosing deployment problems.',
            example:
              'An EDDUU image can exist successfully in a registry even though no container is currently running from that image.',
          },
          {
            heading: '7. Container ports are not automatically public',
            explanation:
              'An application listening on a port inside a container does not automatically make that port reachable from the host or internet. Port publishing creates a host-to-container access path.',
            example:
              'If the EDDUU API listens on port 8000 inside its container, the deployment can publish an appropriate host or load-balancer path to reach that service.',
          },
          {
            heading: '8. Internal service communication is different from published ports',
            explanation:
              'Containers on the same Docker network can communicate using their network identities without exposing every service port to the outside world.',
            example:
              'The EDDUU API can reach PostgreSQL through the database service name on an internal Docker network while PostgreSQL remains inaccessible directly from the public internet.',
          },
          {
            heading: '9. Container networks create service boundaries',
            explanation:
              'Docker networks provide controlled communication paths between containers. A multi-service application can therefore separate internal communication from externally exposed entry points.',
            example:
              'EDDUU can place the API, PostgreSQL and Redis services on an application network while exposing only the intended API entry point.',
          },
          {
            heading: '10. Service names are useful in multi-container systems',
            explanation:
              'In a Compose-managed network, services can normally communicate using their service names rather than hard-coded container IP addresses. This avoids coupling the application to changing IP assignments.',
            example:
              'The EDDUU API can use postgres as the database hostname and redis as the cache hostname in a Compose environment.',
          },
          {
            heading: '11. Container writable storage is not durable by default',
            explanation:
              'Files written only to a container writable layer should not be assumed to survive container replacement. Persistent workloads need an explicit storage mechanism.',
            example:
              'EDDUU database files should be stored using a PostgreSQL volume or managed database rather than relying on the temporary filesystem of the PostgreSQL container.',
          },
          {
            heading: '12. Volumes separate persistent data from container lifecycle',
            explanation:
              'A volume can provide storage whose lifecycle is managed separately from an individual container. This allows a replacement container to reconnect to persistent data.',
            example:
              'If an EDDUU PostgreSQL container is recreated after an update, its database volume can remain available to the replacement container.',
          },
          {
            heading: '13. Environment variables separate configuration from images',
            explanation:
              'Environment-specific settings should normally be supplied when the container runs instead of embedding environment-specific values inside the image.',
            example:
              'The same EDDUU API image can receive different database URLs, feature flags and service endpoints in development and staging environments.',
          },
          {
            heading: '14. Docker Compose describes local multi-service environments',
            explanation:
              'Docker Compose provides a declarative way to define multiple related services, their networks, volumes, configuration and startup relationships.',
            example:
              'An EDDUU development Compose configuration can describe an API service, PostgreSQL service and Redis service together so the whole environment can be started consistently.',
          },
          {
            heading: '15. Compose does not replace production orchestration',
            explanation:
              'Docker Compose is particularly useful for local development and controlled environments. Large production systems may require orchestration platforms that provide scheduling, health management, scaling and rolling deployment capabilities.',
            example:
              'EDDUU can use Compose to reproduce a developer environment while Kubernetes can later manage the production workload across multiple nodes.',
          },
          {
            heading: '16. Multi-container architecture requires explicit ownership',
            explanation:
              'Each service should have a clear responsibility. The API handles application requests, PostgreSQL owns relational data and Redis can provide caching or short-lived coordination.',
            example:
              'EDDUU should not make the API container responsible for owning PostgreSQL database files or Redis persistence.',
          },
          {
            heading: '17. Diagnose connectivity failures systematically',
            explanation:
              'When one container cannot reach another, check whether both services are running, whether they share the expected network, whether the hostname is correct, whether the target service is listening and whether the application is using an internal service address rather than an incorrect host address.',
            example:
              'If the EDDUU API cannot reach PostgreSQL, checking the database service name, network membership and database listening configuration is more useful than randomly changing ports.',
          },
          {
            heading: '18. Diagnose disappearing data systematically',
            explanation:
              'If data disappears after a container is recreated, determine whether the application wrote data into the container filesystem instead of a persistent volume or external data service.',
            example:
              'If a development PostgreSQL container loses records after recreation, the first architectural question is whether the PostgreSQL data directory was backed by a persistent volume.',
          },
        ],
        realWorldConnection:
          'Production teams use Docker to standardize application packaging, create reproducible development environments and establish clear service boundaries. The value comes from the combination of build reproducibility, image versioning, networking, storage and configuration rather than from the Docker command itself.',
        keyIdea:
          'Docker separates image construction from runtime execution and gives teams explicit mechanisms for networking, storage and configuration. Multi-container systems become reliable when each service has a clear responsibility and lifecycle.',
        recap: [
          'A Dockerfile defines how an image is built.',
          'The build context determines which files are available during the build.',
          '.dockerignore prevents unnecessary or sensitive local files from entering the context.',
          'Docker image layers make Dockerfile ordering important for build performance.',
          'Published ports provide external access while internal networks support service-to-service communication.',
          'Service names are more stable than hard-coded container IP addresses.',
          'Volumes allow important data to survive container replacement.',
          'Environment variables keep environment-specific configuration outside the image.',
          'Docker Compose is useful for defining related services together, especially during development.',
          'Connectivity and persistence failures should be diagnosed from architecture and configuration rather than by random command changes.',
        ],
      },
    },
    {
      id: 'mc09-s02-docker-animation',
      type: 'animation',
      title: 'Build the EDDUU Container Stack',
      description:
        'Follow the Docker build and runtime path from source files to a connected multi-container application.',
      animation: {
        visual: 'architecture',
        opening:
          'A Dockerized application is not one box. It is a chain from build inputs to an image and then to connected runtime services.',
        parts: [
          {
            id: 'dockerfile',
            label: 'DOCKERFILE',
            explanation:
              'The Dockerfile describes how the application image should be assembled.',
            example:
              'EDDUU defines its FastAPI runtime, dependencies and application startup command.',
          },
          {
            id: 'context',
            label: 'BUILD CONTEXT',
            explanation:
              'Only the required files should enter the build process.',
            example:
              '.dockerignore keeps local virtual environments and secret files outside the build context.',
          },
          {
            id: 'layers',
            label: 'IMAGE LAYERS',
            explanation:
              'Stable layers can be reused when unchanged.',
            example:
              'EDDUU dependency installation can remain cached while application source changes.',
          },
          {
            id: 'image',
            label: 'API IMAGE',
            explanation:
              'The completed image is a versioned deployment artifact.',
            example:
              'A tested EDDUU API image can be tagged and published to a registry.',
          },
          {
            id: 'api',
            label: 'API CONTAINER',
            explanation:
              'The image becomes a running FastAPI container.',
            example:
              'The API container listens on its internal application port.',
          },
          {
            id: 'network',
            label: 'DOCKER NETWORK',
            explanation:
              'The API communicates with related services through an internal network.',
            example:
              'The API resolves postgres and redis using service names in the Compose network.',
          },
          {
            id: 'database',
            label: 'POSTGRES + VOLUME',
            explanation:
              'Database storage is separated from the disposable database container.',
            example:
              'The PostgreSQL data volume survives replacement of the database container.',
          },
          {
            id: 'redis',
            label: 'REDIS SERVICE',
            explanation:
              'A separate cache service provides its own runtime boundary.',
            example:
              'The EDDUU API can use Redis for short-lived cached results without embedding Redis inside the API container.',
          },
        ],
        closing:
          'The important Docker design is the relationship between build context, image layers, containers, networks, volumes and runtime configuration.',
      },
    },
    {
      id: 'mc09-s02-docker-simulation',
      type: 'simulation',
      title: 'Troubleshoot the EDDUU Docker Environment',
      description:
        'Diagnose realistic containerization failures by matching each symptom with the architectural control that should be checked.',
      simulation: {
        instruction:
          'Match each production or development symptom with the most appropriate Docker concept to investigate first.',
        items: [
          {
            id: 'slow-build',
            label:
              'Every small source-code change causes all Python dependencies to be installed again.',
            description:
              'The image builds correctly but rebuilds are unnecessarily slow.',
            correctTargetId: 'layer-target',
          },
          {
            id: 'large-context',
            label:
              'The Docker build sends a huge local directory containing .venv and Git files.',
            description:
              'The build receives files that do not belong in the image construction context.',
            correctTargetId: 'ignore-target',
          },
          {
            id: 'api-database',
            label:
              'The API container cannot resolve the PostgreSQL service using its expected hostname.',
            description:
              'The application is trying to communicate with another container.',
            correctTargetId: 'network-target',
          },
          {
            id: 'external-access',
            label:
              'The API works inside the container but cannot be reached through the expected host entry point.',
            description:
              'The service is listening internally but the external access path is missing or incorrect.',
            correctTargetId: 'port-target',
          },
          {
            id: 'lost-data',
            label:
              'PostgreSQL records disappear after the database container is recreated.',
            description:
              'Important data was tied to the disposable container lifecycle.',
            correctTargetId: 'volume-target',
          },
          {
            id: 'environment-values',
            label:
              'The same image needs different database endpoints in development and staging.',
            description:
              'Environment-specific values should not require rebuilding the image.',
            correctTargetId: 'config-target',
          },
        ],
        targets: [
          {
            id: 'layer-target',
            label: 'IMAGE LAYERS',
            description:
              'Review Dockerfile ordering and cache reuse.',
          },
          {
            id: 'ignore-target',
            label: '.DOCKERIGNORE',
            description:
              'Exclude unnecessary files from the build context.',
          },
          {
            id: 'network-target',
            label: 'CONTAINER NETWORK',
            description:
              'Check service discovery and network membership.',
          },
          {
            id: 'port-target',
            label: 'PORT PUBLISHING',
            description:
              'Check the external access path to the internal service port.',
          },
          {
            id: 'volume-target',
            label: 'PERSISTENT VOLUME',
            description:
              'Keep durable data independent of the container lifecycle.',
          },
          {
            id: 'config-target',
            label: 'RUNTIME CONFIGURATION',
            description:
              'Supply environment-specific values when the container runs.',
          },
        ],
        successMessage:
          'Correct. Each failure points to a different responsibility: build efficiency, build context, networking, external access, persistence or runtime configuration.',
        failureMessage:
          'First identify whether the problem concerns building the image, connecting services, exposing a service, preserving data or supplying environment-specific configuration.',
      },
    },
    {
      id: 'mc09-s02-docker-question',
      type: 'question',
      title: 'Docker Architecture Check',
      description:
        'Check whether you understand why Docker separates image construction from runtime concerns.',
      question: {
        id: 'mc09-s02-docker',
        type: 'single-choice',
        question:
          'EDDUU wants one API image to run in development and staging while using different PostgreSQL endpoints in each environment. What is the strongest design?',
        options: [
          {
            id: 'runtime-config',
            text:
              'Build one reusable image and supply the environment-specific database configuration at runtime.',
            correct: true,
          },
          {
            id: 'rebuild-every-env',
            text:
              'Build a completely different application image for every environment just to change the database endpoint.',
            correct: false,
          },
          {
            id: 'hardcode-production',
            text:
              'Hard-code the production database endpoint into the image and use it everywhere.',
            correct: false,
          },
          {
            id: 'container-filesystem',
            text:
              'Store the environment configuration only inside the writable container filesystem.',
            correct: false,
          },
        ],
        explanation:
          'The image should remain reusable while environment-specific configuration is supplied at runtime. This separates application packaging from deployment configuration.',
      },
    },
  ],
}