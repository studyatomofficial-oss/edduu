import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc08Session01: SessionDefinition = {
  id: 'mc08-session-01',
  number: 1,
  stage: 'discover',
  title: 'Cloud Foundations — What Cloud Computing Actually Solves',
  objective:
    'Understand what cloud computing is, why organizations adopt it, how cloud changes the way infrastructure is consumed, and which architectural problems cloud capabilities are designed to solve.',
  experiences: [
    {
      id: 'mc08-s01-cloud-foundations-lesson',
      type: 'lesson',
      title: 'From Traditional Infrastructure to Cloud',
      description:
        'Build a practical mental model of cloud computing before learning provider-specific services such as AWS, Azure or Google Cloud.',
      lesson: {
        opening:
          'Imagine EDDUU wants to launch a digital learning platform for thousands of students. The team needs application servers, databases, storage, networking, backups and monitoring. Traditionally, the organization might purchase physical servers, install them in a data centre and operate everything itself. Cloud computing changes how these capabilities are acquired, provisioned, scaled and operated. Before learning cloud products, we need to understand the problem cloud is solving.',
        sections: [
          {
            heading: '1. Start with the infrastructure problem',
            explanation:
              'Software needs infrastructure to run. Applications need compute capacity, data storage, networking, security controls and operational systems. The infrastructure problem is not simply buying servers; it is making the required capacity available reliably while controlling cost and operational complexity.',
            example:
              'EDUU needs application capacity for student logins, course browsing, assessments and AI-powered doubt support. The platform cannot function reliably if the underlying compute, storage or network capacity is unavailable.',
          },
          {
            heading: '2. Understand traditional on-premise infrastructure',
            explanation:
              'In a traditional model, an organization may purchase and operate physical infrastructure itself. This can provide control, but it also means the organization is responsible for procurement, data-centre capacity, hardware maintenance, networking equipment, power, cooling and infrastructure lifecycle management.',
            example:
              'If EDDUU purchases physical servers for an examination platform, the team must estimate future demand, purchase enough hardware and maintain that infrastructure even when actual student traffic is lower than expected.',
          },
          {
            heading: '3. Cloud changes infrastructure consumption',
            explanation:
              'Cloud computing allows organizations to consume infrastructure capabilities as services rather than owning every physical resource themselves. The organization can provision resources through provider interfaces and pay according to the resources and services it uses.',
            example:
              'Instead of purchasing a physical server for an EDDUU application, the team can provision a cloud compute instance and deploy the application onto it.',
          },
          {
            heading: '4. Cloud is more than virtual machines',
            explanation:
              'A common beginner mistake is to define cloud as simply renting virtual machines. Modern cloud platforms provide compute, storage, databases, networking, identity, monitoring, messaging, analytics and many other managed capabilities.',
            example:
              'An EDDUU architecture might use cloud compute for application services, object storage for course media, a managed relational database for transactional data and a managed monitoring service for operational visibility.',
          },
          {
            heading: '5. Compute is a cloud building block',
            explanation:
              'Compute provides the processing capacity required to execute application code. Cloud platforms can provide different compute models, including virtual machines, containers and serverless execution. The appropriate model depends on workload, operational requirements and architectural constraints.',
            example:
              'A student-facing API could run on cloud virtual machines or containers, while a lightweight background function could execute using a serverless model when the workload does not justify a continuously running server.',
          },
          {
            heading: '6. Storage is a separate capability',
            explanation:
              'Applications produce and consume different kinds of data. Cloud platforms commonly provide object, block and file storage because different workloads require different storage characteristics. Storage should therefore be selected according to access patterns and data requirements rather than treated as one generic capability.',
            example:
              'EDUU could store recorded lecture videos and downloadable documents in object storage while keeping transactional student and assessment data in a relational database.',
          },
          {
            heading: '7. Networking connects the system',
            explanation:
              'Cloud resources still need to communicate. Virtual networks, subnets, routing, firewalls, load balancers and DNS provide the connectivity and traffic-control mechanisms required to build a functioning system.',
            example:
              'A student request may travel from a public entry point through a load balancer to an application service, which then communicates with a private database network.',
          },
          {
            heading: '8. Managed services reduce operational responsibility',
            explanation:
              'A managed service allows the cloud provider to operate part of the underlying infrastructure while the customer focuses on configuration and usage. The amount of responsibility transferred depends on the service model.',
            example:
              'With a managed database, EDDUU may configure database settings, access controls and backups while the cloud provider manages much of the underlying database infrastructure and hardware.',
          },
          {
            heading: '9. Elasticity is different from simply having more servers',
            explanation:
              'Elasticity means infrastructure capacity can increase or decrease as demand changes. This matters when workloads are variable because maintaining maximum capacity permanently may be wasteful.',
            example:
              'An examination platform may need substantially more application capacity during a scheduled exam than during normal course browsing. Cloud infrastructure can be designed to respond to that difference in demand.',
          },
          {
            heading: '10. Cloud introduces new economic choices',
            explanation:
              'Cloud changes the economics of infrastructure. Instead of making only large upfront hardware purchases, organizations can consume resources as operational expenditure. However, cloud is not automatically cheaper. Poorly managed resources, unnecessary services and uncontrolled data transfer can create significant recurring costs.',
            example:
              'Keeping large compute instances running continuously when the application uses only a fraction of their capacity can create unnecessary cloud spending.',
          },
          {
            heading: '11. Cloud does not remove architecture responsibility',
            explanation:
              'The cloud provider supplies infrastructure capabilities, but the customer still has to design the application correctly. Poor data models, inefficient APIs, insecure permissions, excessive network traffic and badly designed dependencies remain architectural problems in the cloud.',
            example:
              'Moving an inefficient application from a physical server to a large cloud virtual machine may improve capacity temporarily but does not automatically solve inefficient database queries or poor application boundaries.',
          },
          {
            heading: '12. Understand the shared responsibility model',
            explanation:
              'Cloud security is shared between the provider and customer. The provider is responsible for security of the underlying cloud infrastructure according to the service model, while the customer remains responsible for areas such as identities, permissions, application configuration and data protection.',
            example:
              'A cloud provider may secure the physical data centre, while EDDUU must still protect administrator accounts, configure access policies and prevent unauthorized application access.',
          },
        ],
        realWorldConnection:
          'In real cloud transformation programs, teams often move from a discussion about servers to a discussion about capabilities, responsibilities, workload characteristics, operational ownership and business outcomes. Cloud architecture decisions are therefore closely connected to product requirements and operating models.',
        keyIdea:
          'Cloud computing is a way of consuming infrastructure and platform capabilities as services. It can reduce infrastructure procurement and operational burden and provide elasticity, but the customer still owns important architecture, security, data and operational decisions.',
        recap: [
          'Cloud provides infrastructure and platform capabilities as services.',
          'Cloud is broader than virtual machines and includes compute, storage, networking, databases, identity and operations.',
          'Different workloads require different compute and storage models.',
          'Elasticity allows capacity to respond to changing demand.',
          'Managed services transfer some operational responsibility to the provider.',
          'Cloud does not automatically make a poorly designed system good or inexpensive.',
          'Security responsibility is shared between the cloud provider and customer.',
        ],
      },
    },
    {
      id: 'mc08-s01-cloud-model-animation',
      type: 'animation',
      title: 'See the Shift from Data Centre to Cloud',
      description:
        'Visualize how an organization moves from owning physical infrastructure toward consuming cloud capabilities as services.',
      animation: {
        visual: 'cloud',
        opening:
          'Think of infrastructure like electricity. A company does not need to build a power plant just to operate its office. It consumes electricity as a service. Cloud applies a similar idea to many computing capabilities.',
        parts: [
          {
            id: 'physical',
            label: 'Physical Infrastructure',
            explanation:
              'The organization purchases and operates physical servers, storage and networking equipment.',
            example:
              'EDUU purchases servers and installs them in a data centre to run the learning platform.',
          },
          {
            id: 'virtualized',
            label: 'Virtualized Compute',
            explanation:
              'Physical resources can be divided into virtual resources that provide more flexible allocation.',
            example:
              'Multiple virtual machines can run on shared physical infrastructure.',
          },
          {
            id: 'cloud-services',
            label: 'Cloud Services',
            explanation:
              'The organization provisions computing capabilities through cloud provider services.',
            example:
              'EDUU provisions compute, database and storage resources through a cloud platform.',
          },
          {
            id: 'elasticity',
            label: 'Elastic Capacity',
            explanation:
              'Capacity can be adjusted according to workload requirements.',
            example:
              'Exam-period demand can receive additional application capacity while normal traffic uses less.',
          },
          {
            id: 'managed',
            label: 'Managed Capabilities',
            explanation:
              'The provider operates more of the underlying infrastructure for selected services.',
            example:
              'A managed database reduces the amount of underlying database infrastructure EDDUU must operate itself.',
          },
          {
            id: 'architecture',
            label: 'Cloud Architecture',
            explanation:
              'The organization combines cloud capabilities according to application requirements and responsibilities.',
            example:
              'Application services, database, object storage, networking, identity and monitoring form an integrated cloud architecture.',
          },
        ],
        closing:
          'Cloud does not eliminate infrastructure. It changes how infrastructure capabilities are consumed, provisioned, operated and scaled.',
      },
    },
    {
      id: 'mc08-s01-cloud-foundations-simulation',
      type: 'simulation',
      title: 'Match the Problem with the Cloud Capability',
      description:
        'Connect common infrastructure problems with the cloud capability that addresses the problem.',
      simulation: {
        instruction:
          'Match each infrastructure requirement with the cloud capability that best addresses it.',
        items: [
          {
            id: 'compute-problem',
            label: 'The application needs processing capacity to execute backend code.',
            description:
              'The platform needs resources that can run application processes.',
            correctTargetId: 'compute-target',
          },
          {
            id: 'media-problem',
            label: 'The platform needs to store large recorded lecture files.',
            description:
              'The workload contains large files that do not belong in transactional tables.',
            correctTargetId: 'object-storage-target',
          },
          {
            id: 'database-problem',
            label: 'The platform needs reliable transactional student data.',
            description:
              'The workload requires structured data and transactional behaviour.',
            correctTargetId: 'database-target',
          },
          {
            id: 'network-problem',
            label: 'Application components need controlled communication.',
            description:
              'The system needs connectivity, routing and traffic controls.',
            correctTargetId: 'network-target',
          },
          {
            id: 'identity-problem',
            label: 'Only authorized administrators should manage infrastructure.',
            description:
              'The platform needs identity and permission controls.',
            correctTargetId: 'identity-target',
          },
        ],
        targets: [
          {
            id: 'compute-target',
            label: 'COMPUTE',
            description:
              'Provides processing capacity for running application workloads.',
          },
          {
            id: 'object-storage-target',
            label: 'OBJECT STORAGE',
            description:
              'Stores large unstructured objects such as media and documents.',
          },
          {
            id: 'database-target',
            label: 'MANAGED DATABASE',
            description:
              'Provides structured data storage and database capabilities.',
          },
          {
            id: 'network-target',
            label: 'NETWORKING',
            description:
              'Provides connectivity, routing and traffic-control capabilities.',
          },
          {
            id: 'identity-target',
            label: 'IDENTITY & ACCESS',
            description:
              'Controls identities, authentication and permissions.',
          },
        ],
        successMessage:
          'Correct. Cloud architecture becomes easier to understand when infrastructure requirements are mapped to capabilities instead of memorizing provider product names.',
        failureMessage:
          'Think about the underlying requirement first: processing, storage, structured transactions, communication or access control.',
      },
    },
    {
      id: 'mc08-s01-cloud-foundations-question',
      type: 'question',
      title: 'Cloud Foundations Check',
      description:
        'Check whether you can distinguish the architectural value of cloud from simply renting a server.',
      question: {
        id: 'mc08-s01-cloud-foundations',
        type: 'single-choice',
        question:
          'An education platform experiences a large increase in student traffic during scheduled examinations. Which cloud capability is most directly relevant to handling changing capacity requirements?',
        options: [
          {
            id: 'elasticity',
            text:
              'Elasticity that allows compute capacity to increase and decrease with workload demand.',
            correct: true,
          },
          {
            id: 'ownership',
            text:
              'Purchasing a larger physical server and keeping it permanently at maximum capacity.',
            correct: false,
          },
          {
            id: 'static-storage',
            text:
              'Storing every application request permanently as an object file.',
            correct: false,
          },
          {
            id: 'manual-scaling',
            text:
              'Waiting for an administrator to purchase and install hardware whenever traffic increases.',
            correct: false,
          },
        ],
        explanation:
          'Elasticity is directly related to changing workload demand. A cloud architecture can be designed so compute capacity responds to traffic instead of requiring the organization to maintain maximum physical capacity permanently.',
      },
    },
  ],
}