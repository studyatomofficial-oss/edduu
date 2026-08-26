import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session03: SessionDefinition = {
  id: 'mc09-session-03',
  number: 3,
  stage: 'discover',
  title: 'Kubernetes Foundations - Cluster, Pods, Deployments and Desired State',
  objective:
    'Understand the architecture and operating model of Kubernetes, including control planes, worker nodes, Pods, Deployments, scheduling, desired state, reconciliation and self-healing.',
  experiences: [
    {
      id: 'mc09-s03-kubernetes-lesson',
      type: 'lesson',
      title: 'How Kubernetes Keeps an Application Running',
      description:
        'Build the Kubernetes mental model from a single container workload to a managed application with desired state and self-healing.',
      lesson: {
        opening:
          'Imagine EDDUU needs three API instances running continuously. With individual containers, someone or some script must keep track of where they run, replace failed instances and maintain the required count. Kubernetes turns those operational requirements into a desired-state system.',
        sections: [
          {
            heading: '1. Kubernetes solves a coordination problem',
            explanation:
              'Running one container is relatively simple. Running many application instances across multiple machines introduces scheduling, replacement, service discovery, scaling and deployment coordination problems.',
            example:
              'If EDDUU needs several API instances across multiple servers, the platform must decide where workloads should run and what should happen when an instance or server fails.',
          },
          {
            heading: '2. A Kubernetes cluster is the operating environment',
            explanation:
              'A Kubernetes cluster is a collection of control-plane components and worker nodes that together manage containerized workloads.',
            example:
              'An EDDUU production Kubernetes cluster can contain control-plane components responsible for orchestration and worker nodes where application Pods actually run.',
          },
          {
            heading: '3. The control plane makes orchestration decisions',
            explanation:
              'The control plane stores and processes the desired state of the cluster and coordinates the actions required to move the actual cluster toward that state.',
            example:
              'When EDDUU declares that three API replicas should exist, the control plane participates in deciding and coordinating how that desired workload is maintained.',
          },
          {
            heading: '4. The API server is the main Kubernetes interface',
            explanation:
              'The Kubernetes API server exposes the cluster API through which clients and internal components interact with Kubernetes objects and state.',
            example:
              'A deployment tool can submit the desired EDDUU API Deployment through the Kubernetes API rather than manually starting individual containers on worker machines.',
          },
          {
            heading: '5. The scheduler selects suitable worker nodes',
            explanation:
              'The scheduler evaluates pending Pods and selects an appropriate worker node based on available resources, constraints, policies and other scheduling considerations.',
            example:
              'If an EDDUU API Pod requires available CPU and memory, the scheduler can select a worker node that satisfies the workload requirements.',
          },
          {
            heading: '6. Controllers continuously observe state',
            explanation:
              'Kubernetes controllers compare observed cluster state with desired state and initiate actions when the two differ. This continuous reconciliation is one of Kubernetes most important operating principles.',
            example:
              'If EDDUU requests three API replicas and only two healthy Pods remain, the appropriate controller works toward restoring the desired replica count.',
          },
          {
            heading: '7. Worker nodes run workloads',
            explanation:
              'Worker nodes provide the compute environment where Pods are scheduled and executed. They contain the node-level components required to run and manage workloads.',
            example:
              'An EDDUU production cluster may distribute API Pods across several worker nodes so the application is not dependent on a single machine.',
          },
          {
            heading: '8. A Pod is the basic Kubernetes workload unit',
            explanation:
              'Kubernetes schedules Pods rather than scheduling individual containers directly. A Pod represents one or more tightly coupled containers that share certain networking and storage context.',
            example:
              'A simple EDDUU API workload can run as one container inside a Pod, while a tightly coupled workload may require more than one container in the same Pod.',
          },
          {
            heading: '9. Pod is not the same thing as a permanent server',
            explanation:
              'Pods are replaceable workload instances. Production architecture should not depend on a specific Pod surviving forever or retaining a fixed identity.',
            example:
              'If an EDDUU API Pod fails, Kubernetes can create another Pod instead of requiring an engineer to repair the failed Pod manually.',
          },
          {
            heading: '10. Deployments express application intent',
            explanation:
              'A Deployment can describe the desired number of replicated Pods and the application version that should be running. Kubernetes then works to maintain that desired state.',
            example:
              'EDDUU can declare that its API should have three replicas running from a particular container image version.',
          },
          {
            heading: '11. Desired state versus actual state',
            explanation:
              'Desired state is what the platform should maintain. Actual state is what currently exists. Kubernetes repeatedly works to reduce the difference between the two.',
            example:
              'Desired state: three EDDUU API Pods. Actual state: two healthy Pods after one failure. Reconciliation drives the system back toward three.',
          },
          {
            heading: '12. Reconciliation is the core operating loop',
            explanation:
              'Kubernetes is not simply executing a one-time command. Controllers continuously observe state and take corrective actions when required.',
            example:
              'An EDDUU Deployment remains useful after the initial deployment because Kubernetes continues checking whether the required workload still exists.',
          },
          {
            heading: '13. Self-healing does not mean every failure disappears',
            explanation:
              'Kubernetes can automatically replace certain failed workload instances, but application correctness, persistent data, dependencies and infrastructure failures still require appropriate architecture.',
            example:
              'Kubernetes may recreate an EDDUU API Pod, but it cannot automatically fix a corrupted business database schema or incorrect application logic.',
          },
          {
            heading: '14. Replica count provides availability',
            explanation:
              'Running multiple replicas reduces dependence on a single workload instance. However, replicas are useful only when traffic routing, scheduling and application state are designed correctly.',
            example:
              'Three EDDUU API replicas can continue serving requests if one Pod fails, assuming traffic can reach the remaining healthy replicas.',
          },
          {
            heading: '15. Kubernetes separates application intent from machine placement',
            explanation:
              'Application definitions describe what should run without requiring the developer to manually choose a specific server for every Pod. Scheduling and infrastructure policies handle placement.',
            example:
              'The EDDUU team can describe an API Deployment without hard-coding that replica one must run on worker-node-01.',
          },
          {
            heading: '16. Kubernetes objects describe different responsibilities',
            explanation:
              'Kubernetes uses different object types for different operational responsibilities. Deployments manage replicated application workloads, while Services provide stable network access to changing Pods.',
            example:
              'EDDUU can use a Deployment to maintain API Pods and a Service to provide a stable endpoint that routes traffic to healthy matching Pods.',
          },
          {
            heading: '17. Kubernetes does not eliminate infrastructure decisions',
            explanation:
              'Kubernetes automates many workload-management tasks but teams still need to choose node capacity, networking, storage, security, observability and deployment policies.',
            example:
              'An EDDUU platform team still needs to decide how much compute capacity the cluster requires and how workloads should be isolated.',
          },
          {
            heading: '18. Kubernetes changes the operational unit',
            explanation:
              'With Kubernetes, teams think less about manually maintaining individual containers and more about defining workloads, policies and desired states that the platform should continuously maintain.',
            example:
              'Instead of asking which server should run an EDDUU API container, the team describes the required API workload and lets Kubernetes determine suitable placement.',
          },
        ],
        realWorldConnection:
          'Kubernetes becomes valuable when the number of containers, services and deployment events creates coordination work that is difficult to manage manually. Its core strength is the combination of declarative workload definitions, scheduling and continuous reconciliation.',
        keyIdea:
          'Kubernetes is a desired-state orchestration system. You declare what workloads should exist, and Kubernetes continuously works to make the running cluster match that declaration.',
        recap: [
          'A Kubernetes cluster contains control-plane components and worker nodes.',
          'The API server provides the primary Kubernetes API interface.',
          'The scheduler selects suitable nodes for pending Pods.',
          'Controllers continuously reconcile desired state with actual state.',
          'Pods are the basic units scheduled by Kubernetes.',
          'Deployments describe replicated application workload intent.',
          'Pods are replaceable and should not be treated as permanent servers.',
          'Replica counts can improve workload availability.',
          'Services provide stable network access to changing Pods.',
          'Kubernetes automates workload coordination but does not remove infrastructure and application architecture responsibilities.',
        ],
      },
    },
    {
      id: 'mc09-s03-kubernetes-animation',
      type: 'animation',
      title: 'Watch Kubernetes Reconcile the EDDUU API',
      description:
        'Visualize how a desired Deployment becomes running Pods and how Kubernetes responds when one Pod disappears.',
      animation: {
        visual: 'architecture',
        opening:
          'Kubernetes can be understood as a continuous control loop: declare the desired state, observe the actual state and reconcile the difference.',
        parts: [
          {
            id: 'cluster',
            label: 'KUBERNETES CLUSTER',
            explanation:
              'The cluster provides the overall environment in which Kubernetes manages workloads.',
            example:
              'EDDUU has a production cluster containing control-plane components and worker nodes.',
          },
          {
            id: 'api-server',
            label: 'API SERVER',
            explanation:
              'The Kubernetes API receives and exposes cluster objects and desired state.',
            example:
              'The EDDUU Deployment declaration is submitted through the Kubernetes API.',
          },
          {
            id: 'deployment',
            label: 'DESIRED STATE: 3 REPLICAS',
            explanation:
              'The Deployment declares how many API replicas should exist and which application version should run.',
            example:
              'EDDUU requests three API replicas using the approved container image.',
          },
          {
            id: 'scheduler',
            label: 'SCHEDULER',
            explanation:
              'The scheduler chooses suitable worker nodes for Pods that need placement.',
            example:
              'Pending EDDUU API Pods are assigned to worker nodes with appropriate available capacity.',
          },
          {
            id: 'pods',
            label: '3 API PODS',
            explanation:
              'The desired workload becomes running Pods on worker nodes.',
            example:
              'Three EDDUU API Pods are now available to receive traffic through the application Service.',
          },
          {
            id: 'failure',
            label: 'POD FAILURE',
            explanation:
              'One workload instance disappears or becomes unavailable.',
            example:
              'One EDDUU API Pod terminates unexpectedly.',
          },
          {
            id: 'reconcile',
            label: 'CONTROLLER RECONCILIATION',
            explanation:
              'Kubernetes observes that actual state no longer matches the requested replica count.',
            example:
              'Desired replicas remain three while only two healthy Pods are available.',
          },
          {
            id: 'replacement',
            label: 'REPLACEMENT POD',
            explanation:
              'Kubernetes works toward restoring the declared replica count.',
            example:
              'A replacement EDDUU API Pod is scheduled and started so the workload returns to three replicas.',
          },
        ],
        closing:
          'The key is the loop, not the individual command: desired state, observation, difference and reconciliation.',
      },
    },
    {
      id: 'mc09-s03-kubernetes-simulation',
      type: 'simulation',
      title: 'Operate the EDDUU Kubernetes Workload',
      description:
        'Match Kubernetes responsibilities with the component or object that should own them.',
      simulation: {
        instruction:
          'Match each operational requirement with the Kubernetes responsibility that handles it.',
        items: [
          {
            id: 'api-item',
            label:
              'A deployment tool needs to submit the desired EDDUU API configuration to Kubernetes.',
            description:
              'The cluster needs its main API interface.',
            correctTargetId: 'api-target',
          },
          {
            id: 'schedule-item',
            label:
              'A pending EDDUU API Pod needs a suitable worker node.',
            description:
              'A scheduling decision must be made.',
            correctTargetId: 'scheduler-target',
          },
          {
            id: 'replica-item',
            label:
              'EDDUU should continuously maintain three API replicas.',
            description:
              'The platform must compare desired and actual workload state.',
            correctTargetId: 'deployment-target',
          },
          {
            id: 'pod-item',
            label:
              'A workload needs the Kubernetes unit that contains its running application container.',
            description:
              'The application needs its basic schedulable workload unit.',
            correctTargetId: 'pod-target',
          },
          {
            id: 'failure-item',
            label:
              'One API Pod disappears and the system needs to work back toward the requested replica count.',
            description:
              'The system needs continuous reconciliation.',
            correctTargetId: 'controller-target',
          },
          {
            id: 'traffic-item',
            label:
              'Clients need a stable endpoint even though API Pods can be replaced.',
            description:
              'The network endpoint should not depend on a specific Pod identity.',
            correctTargetId: 'service-target',
          },
        ],
        targets: [
          {
            id: 'api-target',
            label: 'API SERVER',
            description:
              'Primary Kubernetes API interface.',
          },
          {
            id: 'scheduler-target',
            label: 'SCHEDULER',
            description:
              'Selects suitable worker-node placement for pending Pods.',
          },
          {
            id: 'deployment-target',
            label: 'DEPLOYMENT',
            description:
              'Expresses replicated application workload intent.',
          },
          {
            id: 'pod-target',
            label: 'POD',
            description:
              'Basic Kubernetes workload unit.',
          },
          {
            id: 'controller-target',
            label: 'CONTROLLER RECONCILIATION',
            description:
              'Works continuously to move actual state toward desired state.',
          },
          {
            id: 'service-target',
            label: 'SERVICE',
            description:
              'Provides stable network access to changing Pods.',
          },
        ],
        successMessage:
          'Correct. Kubernetes separates API access, scheduling, workload intent, workload execution, reconciliation and stable networking into distinct responsibilities.',
        failureMessage:
          'First ask whether the requirement concerns API access, placement, workload definition, execution unit, reconciliation or network access.',
      },
    },
    {
      id: 'mc09-s03-kubernetes-question',
      type: 'question',
      title: 'Kubernetes Foundations Check',
      description:
        'Check whether you understand the difference between desired state and the current cluster state.',
      question: {
        id: 'mc09-s03-kubernetes',
        type: 'single-choice',
        question:
          'EDDUU declares that its API Deployment should maintain three replicas. One Pod fails and only two healthy replicas remain. What is the core Kubernetes behavior?',
        options: [
          {
            id: 'reconcile',
            text:
              'Kubernetes observes the difference and works to create a replacement so the actual state returns toward the desired replica count.',
            correct: true,
          },
          {
            id: 'manual-only',
            text:
              'Kubernetes considers the Deployment complete because the original three Pods were already created once.',
            correct: false,
          },
          {
            id: 'server-fixed',
            text:
              'Kubernetes permanently binds each replica to its original worker node and cannot replace it elsewhere.',
            correct: false,
          },
          {
            id: 'pod-permanent',
            text:
              'The failed Pod must remain the permanent identity for the application to continue working.',
            correct: false,
          },
        ],
        explanation:
          'Kubernetes continuously reconciles desired state with actual state. A Deployment requesting three replicas should work toward restoring three available workload instances after a Pod failure.',
      },
    },
  ],
}