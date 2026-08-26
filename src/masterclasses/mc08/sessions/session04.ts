import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session04: SessionDefinition = {
  id: 'mc08-session-04',
  number: 4,
  stage: 'discover',
  title: 'Cloud Networking & Traffic Architecture - Connecting the System Safely',
  objective:
    'Learn how cloud networking controls traffic between users, application services, databases and external systems while balancing reachability, security, reliability and latency.',
  experiences: [
    {
      id: 'mc08-s04-networking-lesson',
      type: 'lesson',
      title: 'Designing the Cloud Traffic Path',
      description:
        'Follow a real request through DNS, load balancing, network boundaries, application services and private data systems.',
      lesson: {
        opening:
          'A cloud application is not useful if its components cannot communicate safely. At the same time, making every component reachable from the internet creates unnecessary security exposure. EDDUU therefore needs a network architecture that controls who can reach what, how requests travel, where traffic is balanced and what happens when part of the network becomes unavailable.',
        sections: [
          {
            heading: '1. Start with the request path',
            explanation:
              'Networking becomes easier to reason about when we trace an actual request from source to destination. A student request may travel through DNS, an entry point, a load balancer, an application service and finally a database or external dependency.',
            example:
              'A student opens EDDUU and requests a course page. DNS resolves the domain, traffic reaches the public entry point, the load balancer selects a healthy application instance and the application retrieves required data.',
          },
          {
            heading: '2. A virtual network creates an architectural boundary',
            explanation:
              'Cloud providers offer virtual network constructs that isolate and organize resources. This creates a logical network boundary where routing, access controls and subnet design can be defined.',
            example:
              'EDUUU can place its production application resources inside a dedicated virtual network rather than mixing them with unrelated workloads.',
          },
          {
            heading: '3. Public and private resources should have different exposure',
            explanation:
              'Not every cloud resource needs direct internet access. Public-facing components may need controlled internet reachability, while databases and internal services should generally remain private unless there is a clear reason to expose them.',
            example:
              'The EDDUUU load balancer may accept internet traffic while the transactional database remains reachable only from approved application services.',
          },
          {
            heading: '4. Subnets organize network placement',
            explanation:
              'Subnets divide a virtual network into logical network segments. They can help separate internet-facing resources from private application and data resources and support clearer security boundaries.',
            example:
              'EDUUU can place load balancers in an internet-facing subnet and database resources in private subnets.',
          },
          {
            heading: '5. Routing determines where traffic goes',
            explanation:
              'Routing rules determine how network traffic moves between subnets, external networks and other destinations. Incorrect routes can make healthy services unreachable or accidentally expose resources.',
            example:
              'An application subnet needs an appropriate route to reach an external API, while the database subnet may need no direct route to the public internet.',
          },
          {
            heading: '6. DNS connects human-friendly names to services',
            explanation:
              'DNS translates domain names into addresses or service endpoints. It also provides an abstraction layer that allows infrastructure to change without requiring users to know the underlying resource addresses.',
            example:
              'Students use a stable EDDUUU domain while the underlying load balancer or application infrastructure can change without changing the public URL.',
          },
          {
            heading: '7. Load balancing separates users from individual instances',
            explanation:
              'A load balancer receives traffic and distributes it across healthy application instances. This allows multiple instances to serve the same workload and supports horizontal scaling and failure handling.',
            example:
              'During examination traffic, the EDDUUU load balancer can distribute student requests across multiple API instances.',
          },
          {
            heading: '8. Health checks influence traffic decisions',
            explanation:
              'A load balancer should not blindly send traffic to every registered instance. Health checks provide signals about whether an instance can serve requests.',
            example:
              'If one EDDUUU API instance stops responding correctly, the load balancer can remove it from active traffic while healthy instances continue serving students.',
          },
          {
            heading: '9. Security groups and network controls reduce exposure',
            explanation:
              'Network access controls define which sources can communicate with which destinations and on which ports or protocols. A secure network starts with minimum necessary connectivity rather than allowing broad access.',
            example:
              'The database should accept traffic only from the application layer on the required database port rather than allowing arbitrary internet traffic.',
          },
          {
            heading: '10. Network architecture should support service boundaries',
            explanation:
              'Different application components may have different communication requirements. Network boundaries should reflect architectural responsibilities without creating unnecessary complexity.',
            example:
              'The student API may communicate with the assessment service and database, while an internal administration service may have a narrower set of permitted connections.',
          },
          {
            heading: '11. External dependencies introduce another failure domain',
            explanation:
              'Applications frequently depend on payment providers, messaging services, AI APIs or other external systems. Network connectivity to those systems can fail independently from the application itself.',
            example:
              'If EDDUUU depends on an external AI service for doubt processing, the architecture must handle timeouts, retries and service unavailability without making the entire student platform unavailable.',
          },
          {
            heading: '12. Latency matters across network boundaries',
            explanation:
              'Every network hop adds latency. Geographic distance, cross-region communication and unnecessary service-to-service calls can increase response time. Architecture should therefore minimize unnecessary network round trips.',
            example:
              'If the application repeatedly calls several distant services before returning a course page, the accumulated network latency can become visible to students.',
          },
          {
            heading: '13. Availability zones support network resilience',
            explanation:
              'Cloud regions are commonly divided into isolated availability zones. Placing critical application components across multiple zones can reduce the impact of a single-zone failure.',
            example:
              'EDUUU can run application instances across multiple availability zones so a failure in one zone does not remove all application capacity.',
          },
          {
            heading: '14. Internet exposure should be intentional',
            explanation:
              'A public IP or public endpoint should exist only where required. Private connectivity reduces attack surface and makes access paths easier to reason about.',
            example:
              'The EDDUUU database does not need a public endpoint simply because the application itself is publicly accessible.',
          },
          {
            heading: '15. Network design is also an operational decision',
            explanation:
              'Network architecture affects troubleshooting, monitoring, security reviews, deployment and incident response. A highly complicated network can become difficult for teams to operate even when it appears technically sophisticated.',
            example:
              'If an engineer cannot determine which route, firewall rule or service boundary is blocking an application request, the network design becomes an operational liability.',
          },
        ],
        realWorldConnection:
          'Production cloud architectures often fail at the boundaries between components rather than inside a single application process. Senior technical leaders must be able to trace traffic, identify trust boundaries, understand failure domains and explain why a resource is public or private.',
        keyIdea:
          'Cloud networking is the controlled movement of traffic between trusted and untrusted boundaries. Good network architecture makes communication possible where required while minimizing exposure, unnecessary latency and operational complexity.',
        recap: [
          'Trace the request path before discussing networking products.',
          'Virtual networks create logical infrastructure boundaries.',
          'Public and private resources should have intentional exposure.',
          'Subnets organize network placement and security boundaries.',
          'Routing controls where traffic can travel.',
          'DNS provides stable names over changing infrastructure.',
          'Load balancers distribute traffic across healthy instances.',
          'Health checks support failure-aware traffic routing.',
          'Network access controls should follow least-privilege principles.',
          'External dependencies create independent failure domains.',
          'Latency and availability zones influence network architecture.',
        ],
      },
    },
    {
      id: 'mc08-s04-network-animation',
      type: 'animation',
      title: 'Follow One Student Request',
      description:
        'Trace a student request from the public internet into private cloud services.',
      animation: {
        visual: 'architecture',
        opening:
          'A cloud network is easiest to understand when we follow one real request.',
        parts: [
          {
            id: 'dns',
            label: 'DNS',
            explanation:
              'The domain name resolves to the public entry point of the application.',
            example:
              'The student opens the EDDUUU learning domain and DNS directs the request toward the application entry service.',
          },
          {
            id: 'load-balancer',
            label: 'LOAD BALANCER',
            explanation:
              'The load balancer receives traffic and selects a healthy application instance.',
            example:
              'The request is routed to one of several healthy EDDUUU API instances.',
          },
          {
            id: 'application',
            label: 'APPLICATION',
            explanation:
              'The application processes the request and calls required internal dependencies.',
            example:
              'The API retrieves course information and checks student access.',
          },
          {
            id: 'private-data',
            label: 'PRIVATE DATA LAYER',
            explanation:
              'The application communicates with protected data resources through controlled network access.',
            example:
              'The database accepts requests only from approved application resources.',
          },
          {
            id: 'external-service',
            label: 'EXTERNAL DEPENDENCY',
            explanation:
              'Some workloads require controlled calls to external systems.',
            example:
              'The AI doubt service may call an external AI provider and must handle timeout or failure conditions.',
          },
          {
            id: 'failure',
            label: 'FAILURE HANDLING',
            explanation:
              'Health checks and controlled routing prevent failed resources from receiving traffic.',
            example:
              'An unhealthy API instance is removed from active traffic while another healthy instance continues serving the student.',
          },
        ],
        closing:
          'The network is part of the application architecture. Security, latency, availability and failure handling depend on how traffic moves between components.',
      },
    },
    {
      id: 'mc08-s04-network-simulation',
      type: 'simulation',
      title: 'Design the Traffic Boundary',
      description:
        'Match each networking requirement with the architectural control that addresses it.',
      simulation: {
        instruction:
          'Match each traffic requirement with the network capability that best satisfies it.',
        items: [
          {
            id: 'public-entry',
            label: 'Students need a stable public entry point.',
            description:
              'The application must be reachable using a domain name.',
            correctTargetId: 'dns-target',
          },
          {
            id: 'traffic-distribution',
            label: 'Traffic must be distributed across healthy API instances.',
            description:
              'The application uses horizontal scaling.',
            correctTargetId: 'lb-target',
          },
          {
            id: 'private-database',
            label: 'The database should not accept arbitrary internet traffic.',
            description:
              'Only approved application resources should reach it.',
            correctTargetId: 'private-target',
          },
          {
            id: 'network-boundary',
            label: 'Production resources need an isolated logical network.',
            description:
              'The architecture needs a controlled network boundary.',
            correctTargetId: 'vpc-target',
          },
          {
            id: 'failed-api',
            label: 'An unhealthy API instance should stop receiving new traffic.',
            description:
              'Traffic routing needs application health information.',
            correctTargetId: 'health-target',
          },
        ],
        targets: [
          {
            id: 'dns-target',
            label: 'DNS',
            description:
              'Provides stable names and service resolution.',
          },
          {
            id: 'lb-target',
            label: 'LOAD BALANCER',
            description:
              'Distributes requests across healthy application instances.',
          },
          {
            id: 'private-target',
            label: 'PRIVATE NETWORK ACCESS',
            description:
              'Restricts access to internal resources.',
          },
          {
            id: 'vpc-target',
            label: 'VIRTUAL NETWORK',
            description:
              'Provides a logical network boundary for cloud resources.',
          },
          {
            id: 'health-target',
            label: 'HEALTH CHECK',
            description:
              'Identifies whether an application instance can receive traffic.',
          },
        ],
        successMessage:
          'Correct. A strong network architecture connects required components while intentionally controlling exposure and failure handling.',
        failureMessage:
          'Think about the requirement first: stable naming, traffic distribution, private access, network isolation or health-aware routing.',
      },
    },
    {
      id: 'mc08-s04-network-question',
      type: 'question',
      title: 'Cloud Networking Check',
      description:
        'Test whether you can reason about public and private boundaries in a production architecture.',
      question: {
        id: 'mc08-s04-network-architecture',
        type: 'single-choice',
        question:
          'EDUUU has a public load balancer and several private application instances. The team asks whether the production database should also receive a public IP so application servers can reach it. What is the best architectural response?',
        options: [
          {
            id: 'private-db',
            text:
              'Keep the database private and provide controlled network connectivity from the approved application layer.',
            correct: true,
          },
          {
            id: 'public-db',
            text:
              'Make the database public because anything reachable by the application should be reachable from the internet.',
            correct: false,
          },
          {
            id: 'no-network',
            text:
              'Remove the database because private resources cannot communicate with public applications.',
            correct: false,
          },
          {
            id: 'all-public',
            text:
              'Make every cloud resource public so troubleshooting becomes easier.',
            correct: false,
          },
        ],
        explanation:
          'A public application does not require every dependency to be public. Keeping the database private reduces exposure and allows the architecture to define exactly which application resources are permitted to communicate with it.',
      },
    },
  ],
}