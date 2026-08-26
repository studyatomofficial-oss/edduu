import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session05: SessionDefinition = {
  id: 'mc09-session-05',
  number: 5,
  stage: 'discover',
  title: 'Kubernetes Scaling & Reliability - Resources, HPA and Resilient Workloads',
  objective:
    'Understand how Kubernetes manages workload resources, horizontal scaling, replica capacity, rolling changes and disruption so EDDUU services can handle changing traffic reliably.',
  experiences: [
    {
      id: 'mc09-s05-scaling-lesson',
      type: 'lesson',
      title: 'How EDDUU Scales Without Guesswork',
      description:
        'Learn how Kubernetes combines resource planning, replicas, autoscaling and controlled disruption to keep workloads reliable as demand changes.',
      lesson: {
        opening:
          'Scaling is not simply creating more containers. A reliable platform must understand how much CPU and memory a workload needs, when additional replicas are required, whether the cluster has enough capacity and how changes should happen without unnecessarily interrupting users.',
        sections: [
          {
            heading: '1. Scaling starts with workload demand',
            explanation:
              'A workload needs enough compute capacity to process its traffic. Scaling decisions should therefore begin with understanding demand and application resource behavior rather than choosing an arbitrary replica count.',
            example:
              'If EDDUU receives a large increase in student requests during an exam period, the API may require additional replicas to maintain its latency target.',
          },
          {
            heading: '2. CPU and memory requests communicate expected resource needs',
            explanation:
              'Resource requests tell Kubernetes approximately how much CPU and memory a workload needs for scheduling purposes. They help the scheduler make capacity-aware placement decisions.',
            example:
              'An EDDUU API Pod can request a defined amount of CPU and memory so Kubernetes avoids placing too many workloads onto a node without sufficient capacity.',
          },
          {
            heading: '3. Resource limits define boundaries',
            explanation:
              'Resource limits establish an upper boundary for how much of a resource a container may consume according to the configured Kubernetes resource model. Limits should be chosen carefully because overly restrictive values can harm application performance.',
            example:
              'If the EDDUU API receives a temporary workload spike, an unnecessarily low CPU limit can prevent the application from using available compute effectively.',
          },
          {
            heading: '4. Requests and limits serve different purposes',
            explanation:
              'Requests primarily influence scheduling and guaranteed resource expectations, while limits constrain runtime consumption. Confusing these concepts can lead to poor capacity planning.',
            example:
              'EDDUU may request enough memory for normal operation while setting a carefully tested upper memory boundary for the container.',
          },
          {
            heading: '5. Replica scaling improves capacity and availability',
            explanation:
              'Running multiple replicas allows requests to be distributed across several workload instances and reduces dependence on one Pod.',
            example:
              'Increasing the EDDUU API from three to six replicas can provide additional processing capacity when traffic rises, assuming the cluster has enough resources.',
          },
          {
            heading: '6. Manual scaling is useful but limited',
            explanation:
              'Operators can change a Deployment replica count manually, but manually predicting traffic for every workload pattern becomes difficult at scale.',
            example:
              'An engineer could temporarily increase EDDUU API replicas before a known examination event, but a continuously changing traffic pattern may benefit from autoscaling.',
          },
          {
            heading: '7. Horizontal Pod Autoscaling changes replica count',
            explanation:
              'The Horizontal Pod Autoscaler can adjust the number of workload replicas based on configured metrics and policies.',
            example:
              'EDDUU can configure an HPA so the API scales from a minimum replica count toward a larger maximum when the selected workload metrics indicate increased demand.',
          },
          {
            heading: '8. Autoscaling requires meaningful signals',
            explanation:
              'An autoscaler can only make useful decisions when the chosen metric reflects actual workload pressure. CPU is common, but application or external metrics can sometimes provide a better signal.',
            example:
              'For EDDUU, request rate or queue depth may sometimes describe demand more directly than CPU utilization alone.',
          },
          {
            heading: '9. Autoscaling is not unlimited capacity',
            explanation:
              'Increasing replicas requires available cluster resources. If the cluster has no suitable capacity, additional Pods may remain pending until capacity becomes available.',
            example:
              'EDDUU may request ten API replicas during a traffic spike, but if worker nodes lack sufficient CPU and memory, some replicas cannot be scheduled.',
          },
          {
            heading: '10. Cluster capacity is part of application scaling',
            explanation:
              'Application-level scaling and infrastructure-level capacity must work together. More Pods do not help if the underlying nodes cannot host them.',
            example:
              'If EDDUU API replicas are continuously pending because the cluster is full, the platform may need additional node capacity or a better workload placement strategy.',
          },
          {
            heading: '11. Scaling up and scaling out are different',
            explanation:
              'Scaling out increases the number of workload instances. Scaling up increases the resources available to an individual workload instance. Both can be useful depending on application architecture.',
            example:
              'EDDUU can scale out the stateless API by adding replicas, while a memory-heavy processing service may require larger individual Pods.',
          },
          {
            heading: '12. Stateless services scale more easily',
            explanation:
              'A stateless service can generally process requests without depending on local Pod-specific state. This makes replacing and multiplying replicas much simpler.',
            example:
              'If EDDUU stores sessions and persistent application data in appropriate external services, API Pods can be replaced or multiplied without losing core application state.',
          },
          {
            heading: '13. Stateful workloads require additional design',
            explanation:
              'Applications that depend on persistent local state require storage, identity and recovery considerations that are different from stateless APIs.',
            example:
              'EDDUU PostgreSQL should not be treated like a disposable stateless API Pod because its persistent data has a different lifecycle.',
          },
          {
            heading: '14. Rolling updates reduce deployment disruption',
            explanation:
              'A Deployment can gradually replace old workload instances with new ones instead of stopping the entire application at once.',
            example:
              'EDDUU can roll a new API image version through the replicas while keeping enough healthy capacity available during the transition.',
          },
          {
            heading: '15. Readiness and rolling updates work together',
            explanation:
              'A new Pod should not receive production traffic until it is ready. Readiness therefore becomes an important protection during controlled application replacement.',
            example:
              'If a new EDDUU API version starts slowly, readiness prevents it from receiving traffic before its application initialization is complete.',
          },
          {
            heading: '16. Deployment changes should have rollback paths',
            explanation:
              'A production rollout can introduce application bugs even when the infrastructure is healthy. Teams need a controlled way to return to a previously known-good application version.',
            example:
              'If a new EDDUU API release causes elevated error rates, the deployment process should support returning to the previous stable version.',
          },
          {
            heading: '17. Pod disruption is different from application failure',
            explanation:
              'Pods can be intentionally disrupted by maintenance, node operations or other planned infrastructure events. Reliability design should account for both planned and unplanned disruption.',
            example:
              'During worker-node maintenance, EDDUU should have enough replicas and scheduling flexibility to continue serving users.',
          },
          {
            heading: '18. Pod disruption budgets protect availability during planned disruption',
            explanation:
              'A Pod disruption budget can express how much voluntary disruption a workload should tolerate at a time. It does not prevent every failure and does not replace replica planning.',
            example:
              'EDDUU can use a disruption policy to reduce the risk of taking too many API replicas offline simultaneously during planned maintenance.',
          },
          {
            heading: '19. Spread replicas across failure boundaries',
            explanation:
              'Multiple replicas provide limited protection if all replicas are placed on the same failure domain. Workloads can use scheduling constraints to improve distribution across nodes or zones.',
            example:
              'EDDUU can distribute API replicas across multiple worker nodes or availability zones so one infrastructure failure does not remove every replica.',
          },
          {
            heading: '20. Scaling needs observability and targets',
            explanation:
              'Autoscaling and reliability policies should be evaluated against meaningful service-level outcomes such as latency, error rate, throughput and availability rather than replica count alone.',
            example:
              'EDDUU should verify that scaling policies actually protect API latency and error-rate objectives instead of assuming that more Pods automatically mean better performance.',
          },
        ],
        realWorldConnection:
          'Production scaling is a coordinated system problem. Kubernetes can adjust replicas and schedule workloads, but reliable scaling depends on accurate resource requests, meaningful metrics, sufficient infrastructure capacity, application architecture and controlled deployment policies.',
        keyIdea:
          'Reliable scaling means matching workload demand with application replicas and infrastructure capacity while protecting users during failure, maintenance and deployment changes.',
        recap: [
          'Resource requests help Kubernetes make scheduling decisions.',
          'Resource limits establish runtime resource boundaries.',
          'Replica count affects both capacity and availability.',
          'HPA can automatically adjust replica count using configured metrics.',
          'Autoscaling cannot create capacity when the cluster has no resources available.',
          'Scaling out adds workload instances while scaling up gives an instance more resources.',
          'Stateless services are generally easier to scale and replace.',
          'Rolling updates gradually replace old workload versions.',
          'Readiness checks help prevent unready replicas from receiving traffic.',
          'Rollback capability is important when a new application version causes problems.',
          'Disruption policies can protect availability during planned maintenance.',
          'Replica placement across failure domains can improve resilience.',
        ],
      },
    },
    {
      id: 'mc09-s05-scaling-animation',
      type: 'animation',
      title: 'Watch EDDUU Scale During a Traffic Spike',
      description:
        'Visualize demand increasing, the autoscaler responding, new Pods being scheduled and traffic returning to a healthy state.',
      animation: {
        visual: 'architecture',
        opening:
          'Scaling is a feedback loop: demand increases, workload pressure changes, the scaling policy reacts and Kubernetes works to create the required replicas.',
        parts: [
          {
            id: 'normal',
            label: 'NORMAL LOAD',
            explanation:
              'The EDDUU API starts with a healthy baseline number of replicas.',
            example:
              'Three API Pods are serving normal student traffic.',
          },
          {
            id: 'traffic-spike',
            label: 'TRAFFIC SPIKE',
            explanation:
              'Incoming request volume increases and workload pressure rises.',
            example:
              'Large numbers of students begin using EDDUU at the same time.',
          },
          {
            id: 'metric',
            label: 'SCALING SIGNAL',
            explanation:
              'The configured metric indicates that the workload requires additional capacity.',
            example:
              'API CPU utilization or another selected workload metric crosses the scaling policy threshold.',
          },
          {
            id: 'hpa',
            label: 'HORIZONTAL POD AUTOSCALER',
            explanation:
              'The autoscaler changes the desired replica count according to its configured policy.',
            example:
              'The EDDUU API target increases from three replicas toward six.',
          },
          {
            id: 'scheduler',
            label: 'SCHEDULER',
            explanation:
              'New Pods need suitable worker-node capacity.',
            example:
              'The scheduler places additional EDDUU API Pods onto nodes with sufficient available resources.',
          },
          {
            id: 'replicas',
            label: 'MORE API REPLICAS',
            explanation:
              'Additional healthy Pods increase available application capacity.',
            example:
              'Six healthy API replicas can now share the increased request load.',
          },
          {
            id: 'service',
            label: 'SERVICE DISTRIBUTES TRAFFIC',
            explanation:
              'The Service continues providing a stable endpoint while available Pods change.',
            example:
              'Traffic is distributed across the healthy EDDUU API endpoint set.',
          },
          {
            id: 'recovery',
            label: 'HEALTHY TARGET STATE',
            explanation:
              'The workload reaches a state where capacity is sufficient for the observed demand.',
            example:
              'EDDUU API latency returns toward its target while the workload remains within configured resource boundaries.',
          },
        ],
        closing:
          'Autoscaling is not magic. It is a controlled feedback loop that depends on useful metrics, available infrastructure capacity and correctly configured workloads.',
      },
    },
    {
      id: 'mc09-s05-scaling-simulation',
      type: 'simulation',
      title: 'Choose the Right Kubernetes Scaling Response',
      description:
        'Diagnose scaling and reliability situations and identify the control that should be considered first.',
      simulation: {
        instruction:
          'Match each EDDUU situation with the most relevant Kubernetes scaling or reliability control.',
        items: [
          {
            id: 'request-item',
            label:
              'The scheduler needs to know the expected CPU and memory requirements before placing new API Pods.',
            description:
              'Placement needs explicit resource expectations.',
            correctTargetId: 'request-target',
          },
          {
            id: 'autoscale-item',
            label:
              'API demand changes throughout the day and the replica count should respond automatically.',
            description:
              'The workload needs horizontal replica adjustment.',
            correctTargetId: 'hpa-target',
          },
          {
            id: 'capacity-item',
            label:
              'HPA requests more replicas but new Pods remain pending because the worker nodes are full.',
            description:
              'Application scaling has reached an infrastructure capacity constraint.',
            correctTargetId: 'capacity-target',
          },
          {
            id: 'rollout-item',
            label:
              'A new API version should gradually replace the previous version rather than stopping every replica simultaneously.',
            description:
              'The application needs controlled version replacement.',
            correctTargetId: 'rollout-target',
          },
          {
            id: 'rollback-item',
            label:
              'The new API release causes errors and the team needs to return to the previous stable version.',
            description:
              'The deployment requires a recovery path.',
            correctTargetId: 'rollback-target',
          },
          {
            id: 'disruption-item',
            label:
              'Worker-node maintenance should not voluntarily remove too many API replicas at once.',
            description:
              'Planned disruption needs an availability guard.',
            correctTargetId: 'disruption-target',
          },
          {
            id: 'spread-item',
            label:
              'EDDUU wants API replicas distributed across failure domains instead of placing them all together.',
            description:
              'Workload placement should improve resilience.',
            correctTargetId: 'spread-target',
          },
        ],
        targets: [
          {
            id: 'request-target',
            label: 'RESOURCE REQUESTS',
            description:
              'Communicate expected resource needs for scheduling.',
          },
          {
            id: 'hpa-target',
            label: 'HORIZONTAL POD AUTOSCALER',
            description:
              'Adjusts replica count according to configured scaling signals.',
          },
          {
            id: 'capacity-target',
            label: 'CLUSTER CAPACITY',
            description:
              'Additional workload replicas require available node resources.',
          },
          {
            id: 'rollout-target',
            label: 'ROLLING UPDATE',
            description:
              'Gradually replaces workload versions.',
          },
          {
            id: 'rollback-target',
            label: 'ROLLBACK',
            description:
              'Returns the workload toward a previously stable version.',
          },
          {
            id: 'disruption-target',
            label: 'POD DISRUPTION BUDGET',
            description:
              'Limits voluntary disruption according to configured availability policy.',
          },
          {
            id: 'spread-target',
            label: 'WORKLOAD SPREAD',
            description:
              'Distributes replicas across appropriate failure boundaries.',
          },
        ],
        successMessage:
          'Correct. Scaling and reliability require different controls for resource planning, autoscaling, capacity, rollout, recovery, disruption and placement.',
        failureMessage:
          'First classify whether the problem concerns scheduling resources, replica count, infrastructure capacity, version rollout, recovery, planned disruption or failure-domain placement.',
      },
    },
    {
      id: 'mc09-s05-scaling-question',
      type: 'question',
      title: 'Kubernetes Scaling Check',
      description:
        'Check whether you understand the relationship between autoscaling and underlying cluster capacity.',
      question: {
        id: 'mc09-s05-scaling',
        type: 'single-choice',
        question:
          'EDDUU HPA increases the desired API replica count from three to eight, but several new Pods remain Pending because all worker nodes lack enough CPU and memory. What is the best interpretation?',
        options: [
          {
            id: 'capacity',
            text:
              'The autoscaler requested additional workload capacity, but the cluster does not currently have enough schedulable infrastructure resources to place all requested Pods.',
            correct: true,
          },
          {
            id: 'hpa-broken',
            text:
              'HPA has automatically solved the problem because desired replica count and running replica count are always identical.',
            correct: false,
          },
          {
            id: 'service',
            text:
              'The Service should create additional worker nodes because Services are responsible for infrastructure capacity.',
            correct: false,
          },
          {
            id: 'readiness',
            text:
              'Readiness probes should create more worker nodes whenever a Pod remains Pending.',
            correct: false,
          },
        ],
        explanation:
          'Application-level horizontal scaling still depends on underlying cluster capacity. HPA can change the desired replica count, but Kubernetes still needs suitable worker-node resources to schedule the new Pods.',
      },
    },
  ],
}