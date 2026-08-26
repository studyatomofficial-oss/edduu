import type { SessionDefinition } from '../../../masterclass-engine/types'

export const mc09Session06: SessionDefinition = {
  id: 'mc09-session-06',
  number: 6,
  stage: 'discover',
  title: 'Infrastructure as Code - Terraform, State and Reproducible Infrastructure',
  objective:
    'Understand Infrastructure as Code and learn how Terraform uses providers, resources, variables, state, plans and modules to create and manage reproducible cloud infrastructure.',
  experiences: [
    {
      id: 'mc09-s06-iac-lesson',
      type: 'lesson',
      title: 'Turn EDDUU Infrastructure Into Reproducible Code',
      description:
        'Move from manually creating cloud infrastructure to defining infrastructure as code that can be reviewed, planned, applied and reproduced consistently.',
      lesson: {
        opening:
          'Imagine an EDDUU platform with databases, networks, compute instances, storage and Kubernetes infrastructure. Creating each resource manually may work once, but repeating the same environment reliably becomes difficult. Infrastructure as Code turns those infrastructure decisions into a version-controlled, reviewable definition.',
        sections: [
          {
            heading: '1. Infrastructure is part of the product',
            explanation:
              'Applications depend on infrastructure such as networks, compute, storage, databases and access controls. Treating infrastructure as a separate manual activity creates operational risk.',
            example:
              'EDDUU may depend on a Kubernetes cluster, database, network boundaries and supporting cloud resources. Those resources should be reproducible rather than dependent on one engineers memory.',
          },
          {
            heading: '2. Infrastructure as Code describes desired infrastructure',
            explanation:
              'Infrastructure as Code represents infrastructure configuration in machine-readable definitions that can be reviewed, versioned and applied consistently.',
            example:
              'EDDUU can define its required network, compute and database resources in Terraform configuration instead of recreating them manually through a cloud console.',
          },
          {
            heading: '3. Terraform is a declarative Infrastructure as Code tool',
            explanation:
              'Terraform allows teams to describe the infrastructure they want and then determines the actions required to move the current infrastructure toward that desired configuration.',
            example:
              'An EDDUU Terraform configuration can describe a network and database without requiring engineers to manually execute every cloud-provider API call.',
          },
          {
            heading: '4. Providers connect Terraform to platforms',
            explanation:
              'Terraform providers allow Terraform to interact with external platforms and APIs. A provider exposes resources and data sources for the platform it supports.',
            example:
              'EDDUU can use a cloud provider integration to manage networking, compute and database resources through Terraform.',
          },
          {
            heading: '5. Resources represent infrastructure objects',
            explanation:
              'Terraform resources describe infrastructure objects that Terraform can create, update or destroy according to configuration and state.',
            example:
              'A Terraform configuration can represent an EDDUU network, subnet, database instance or compute resource as managed infrastructure.',
          },
          {
            heading: '6. Declarative code focuses on the desired result',
            explanation:
              'Terraform configuration describes what infrastructure should exist rather than requiring the engineer to manually specify every procedural API call needed to create it.',
            example:
              'The EDDUU team describes the required network and database properties while Terraform determines the provider operations required to reach that state.',
          },
          {
            heading: '7. Variables separate reusable configuration from infrastructure logic',
            explanation:
              'Variables allow the same infrastructure definition to accept different values for environments or deployment scenarios without duplicating the entire configuration.',
            example:
              'EDDUU can use different region, instance size or environment values for development and production while keeping the infrastructure structure reusable.',
          },
          {
            heading: '8. Outputs expose useful infrastructure information',
            explanation:
              'Outputs allow important values produced by infrastructure to be surfaced for other tools, workflows or operators.',
            example:
              'After provisioning an EDDUU environment, outputs could expose a database endpoint or selected infrastructure identifier for downstream configuration.',
          },
          {
            heading: '9. Terraform state connects configuration to reality',
            explanation:
              'Terraform state records information about infrastructure resources that Terraform manages. It allows Terraform to understand the relationship between configuration and existing infrastructure.',
            example:
              'If Terraform manages the EDDUU database, its state helps Terraform determine which real infrastructure object corresponds to the declared database resource.',
          },
          {
            heading: '10. State is operationally important',
            explanation:
              'Losing or corrupting Terraform state can make infrastructure management difficult because Terraform may no longer have the information it expects about managed resources.',
            example:
              'EDDUU should protect production Terraform state with appropriate access controls, backup and collaboration practices rather than keeping the only copy on one laptop.',
          },
          {
            heading: '11. Remote state supports team collaboration',
            explanation:
              'Teams commonly store Terraform state in a shared remote backend so multiple engineers and automation systems can work against the same authoritative state.',
            example:
              'The EDDUU infrastructure team can use a protected remote state backend so deployment automation and engineers do not maintain competing local state copies.',
          },
          {
            heading: '12. Plan previews infrastructure changes',
            explanation:
              'Terraform plan evaluates the configuration and current state to show the changes Terraform expects to make. This creates an important review point before infrastructure is modified.',
            example:
              'Before changing the EDDUU production database size, the team can review the Terraform plan to understand the proposed infrastructure change.',
          },
          {
            heading: '13. Apply executes approved changes',
            explanation:
              'Terraform apply performs the changes required to move infrastructure toward the declared configuration, subject to the provider and current state.',
            example:
              'After reviewing a planned EDDUU infrastructure change, an approved deployment process can apply the change.',
          },
          {
            heading: '14. Plan and apply are different operational stages',
            explanation:
              'A plan is a preview and analysis step. Apply is the execution step. Keeping these concepts separate supports safer infrastructure review and deployment workflows.',
            example:
              'A pull request for EDDUU infrastructure can include a generated plan for review before an authorized pipeline performs the apply operation.',
          },
          {
            heading: '15. Idempotent infrastructure reduces accidental duplication',
            explanation:
              'A declarative infrastructure workflow should be designed so repeatedly applying the same configuration does not continually create duplicate copies of the intended resources.',
            example:
              'Once the EDDUU network matches the Terraform configuration, running the same configuration again should normally result in little or no infrastructure change.',
          },
          {
            heading: '16. Drift means reality differs from code',
            explanation:
              'Infrastructure drift occurs when managed resources are changed outside the Infrastructure as Code workflow or otherwise diverge from the declared configuration.',
            example:
              'If an engineer manually changes an EDDUU production resource in a cloud console, Terraform may later detect that the real infrastructure differs from the declared configuration.',
          },
          {
            heading: '17. Drift should be managed deliberately',
            explanation:
              'Teams should establish whether manual changes are allowed, how emergency changes are reconciled and how infrastructure code remains the authoritative source of configuration.',
            example:
              'If an emergency EDDUU production change is made manually, the team should decide whether the change must be represented in Terraform so future plans do not unexpectedly reverse it.',
          },
          {
            heading: '18. Modules improve infrastructure reuse',
            explanation:
              'Terraform modules allow related infrastructure definitions to be packaged into reusable components. Modules can reduce duplication when teams repeatedly deploy similar patterns.',
            example:
              'EDDUU can create a reusable application-network module and use it across development, staging and production with different inputs.',
          },
          {
            heading: '19. Environment separation needs explicit design',
            explanation:
              'Development, staging and production environments often require different capacity, security and connectivity while sharing common architectural patterns.',
            example:
              'EDDUU production may use larger database capacity and stricter network controls while development uses smaller resources and isolated test infrastructure.',
          },
          {
            heading: '20. Infrastructure changes need software-engineering discipline',
            explanation:
              'Infrastructure code should be reviewed, version-controlled, tested where practical and deployed through controlled workflows just like important application code.',
            example:
              'A change to EDDUU production network rules should go through a pull request, plan review and approved deployment workflow rather than an undocumented console click.',
          },
          {
            heading: '21. Secrets require careful handling',
            explanation:
              'Sensitive values should not be casually committed into infrastructure repositories. Secret management should separate credentials from ordinary infrastructure definitions and limit access appropriately.',
            example:
              'EDDUU database credentials should be supplied through an appropriate secret-management workflow rather than committed as plain text Terraform variables.',
          },
          {
            heading: '22. Terraform manages infrastructure but does not replace application orchestration',
            explanation:
              'Infrastructure as Code and workload orchestration solve different layers of the platform problem. Terraform can provision infrastructure while Kubernetes manages workloads running on that infrastructure.',
            example:
              'Terraform can create the infrastructure required for an EDDUU Kubernetes cluster while Kubernetes manages the EDDUU API Pods deployed onto that cluster.',
          },
          {
            heading: '23. Infrastructure dependencies should be explicit',
            explanation:
              'Resources often depend on other resources. Terraform can represent those relationships so infrastructure is created and updated in a dependency-aware way.',
            example:
              'An EDDUU database network attachment may depend on the required network and subnet resources being available first.',
          },
          {
            heading: '24. Infrastructure review should focus on impact',
            explanation:
              'A plan should not be treated as a technical formality. Teams should ask whether the proposed change can cause downtime, data loss, security exposure, unexpected cost or irreversible replacement.',
            example:
              'Before applying an EDDUU database change, the team should identify whether Terraform plans an in-place update or replacement that could affect production data or availability.',
          },
        ],
        realWorldConnection:
          'Infrastructure as Code brings software-engineering discipline to infrastructure. The strongest benefit is not writing configuration files; it is creating a repeatable workflow where infrastructure changes can be reviewed, versioned, planned, approved and reproduced.',
        keyIdea:
          'Terraform turns infrastructure into a declarative, version-controlled workflow. Configuration describes desired infrastructure, state connects that configuration to real resources, plan previews changes and apply executes them.',
        recap: [
          'Infrastructure is a critical part of the application platform.',
          'Infrastructure as Code makes infrastructure definitions reproducible and reviewable.',
          'Terraform uses providers to communicate with external platforms.',
          'Resources represent infrastructure objects under management.',
          'Variables make infrastructure definitions reusable across environments.',
          'Outputs expose useful values produced by infrastructure.',
          'Terraform state connects declared resources with real infrastructure.',
          'Remote state supports team collaboration and controlled access.',
          'Plan previews changes before infrastructure is modified.',
          'Apply executes the planned infrastructure changes.',
          'Drift occurs when real infrastructure differs from declared configuration.',
          'Modules improve reuse across similar infrastructure patterns.',
          'Infrastructure changes should use version control, review and controlled deployment workflows.',
          'Terraform and Kubernetes operate at different layers: Terraform manages infrastructure while Kubernetes manages workloads.',
        ],
      },
    },
    {
      id: 'mc09-s06-iac-animation',
      type: 'animation',
      title: 'Watch Terraform Reconcile EDDUU Infrastructure',
      description:
        'Follow a Terraform change from configuration through planning and application to real cloud infrastructure.',
      animation: {
        visual: 'architecture',
        opening:
          'Infrastructure as Code creates a controlled path from an infrastructure definition to the real platform. The important checkpoints are configuration, state, plan, approval and apply.',
        parts: [
          {
            id: 'code',
            label: 'TERRAFORM CONFIGURATION',
            explanation:
              'The desired infrastructure is represented as version-controlled code.',
            example:
              'EDDUU defines the required network, database and compute resources.',
          },
          {
            id: 'provider',
            label: 'PROVIDER',
            explanation:
              'Terraform uses a provider to communicate with the target platform.',
            example:
              'The EDDUU configuration uses a cloud provider integration to manage infrastructure resources.',
          },
          {
            id: 'state',
            label: 'TERRAFORM STATE',
            explanation:
              'State connects Terraform resources with infrastructure already known to Terraform.',
            example:
              'The EDDUU state records the resources Terraform manages in the environment.',
          },
          {
            id: 'plan',
            label: 'TERRAFORM PLAN',
            explanation:
              'Terraform compares configuration and current state to calculate the proposed infrastructure changes.',
            example:
              'An EDDUU pull request can show that a database size change is planned before anyone applies it.',
          },
          {
            id: 'review',
            label: 'ENGINEERING REVIEW',
            explanation:
              'The proposed infrastructure impact is reviewed before execution.',
            example:
              'The EDDUU team checks for downtime, replacement, security and cost implications.',
          },
          {
            id: 'apply',
            label: 'TERRAFORM APPLY',
            explanation:
              'Approved changes are sent through the provider to modify infrastructure.',
            example:
              'The approved EDDUU infrastructure change is applied through the controlled deployment workflow.',
          },
          {
            id: 'cloud',
            label: 'CLOUD INFRASTRUCTURE',
            explanation:
              'The actual platform moves toward the declared configuration.',
            example:
              'The EDDUU network or compute resources now reflect the approved infrastructure definition.',
          },
          {
            id: 'drift',
            label: 'DRIFT DETECTION',
            explanation:
              'If infrastructure is changed outside the workflow, later planning can reveal differences between code and reality.',
            example:
              'A manual cloud-console change to EDDUU infrastructure can appear as drift in a later Terraform plan.',
          },
        ],
        closing:
          'The strength of Infrastructure as Code is the controlled loop from declared intent to reviewed infrastructure changes and back to an observable managed state.',
      },
    },
    {
      id: 'mc09-s06-iac-simulation',
      type: 'simulation',
      title: 'Review the EDDUU Infrastructure Change',
      description:
        'Match infrastructure problems with the Terraform concept that should be investigated first.',
      simulation: {
        instruction:
          'Match each infrastructure situation with the most relevant Infrastructure as Code concept.',
        items: [
          {
            id: 'provider-item',
            label:
              'Terraform needs the integration that allows it to communicate with the target cloud platform.',
            description:
              'The configuration needs a platform integration.',
            correctTargetId: 'provider-target',
          },
          {
            id: 'state-item',
            label:
              'Terraform needs to understand which real database resource corresponds to its managed resource definition.',
            description:
              'The relationship between configuration and existing infrastructure must be tracked.',
            correctTargetId: 'state-target',
          },
          {
            id: 'plan-item',
            label:
              'The team wants to see what infrastructure changes will happen before approving execution.',
            description:
              'A preview is required.',
            correctTargetId: 'plan-target',
          },
          {
            id: 'drift-item',
            label:
              'An engineer manually changes a cloud resource and later Terraform reports that reality differs from the declared configuration.',
            description:
              'Infrastructure was changed outside the IaC workflow.',
            correctTargetId: 'drift-target',
          },
          {
            id: 'module-item',
            label:
              'The same network architecture needs to be reused across several environments without copying the entire definition.',
            description:
              'The infrastructure pattern should be reusable.',
            correctTargetId: 'module-target',
          },
          {
            id: 'variable-item',
            label:
              'Development and production need different instance sizes while using the same infrastructure structure.',
            description:
              'Environment-specific values should be configurable.',
            correctTargetId: 'variable-target',
          },
          {
            id: 'review-item',
            label:
              'A production plan indicates that a database resource may be replaced rather than updated in place.',
            description:
              'The proposed change may have a major operational impact.',
            correctTargetId: 'review-target',
          },
        ],
        targets: [
          {
            id: 'provider-target',
            label: 'PROVIDER',
            description:
              'Connects Terraform to an external platform.',
          },
          {
            id: 'state-target',
            label: 'STATE',
            description:
              'Tracks Terraform-managed infrastructure relationships.',
          },
          {
            id: 'plan-target',
            label: 'PLAN',
            description:
              'Previews proposed infrastructure changes.',
          },
          {
            id: 'drift-target',
            label: 'DRIFT',
            description:
              'Represents divergence between code and real infrastructure.',
          },
          {
            id: 'module-target',
            label: 'MODULE',
            description:
              'Packages reusable infrastructure patterns.',
          },
          {
            id: 'variable-target',
            label: 'VARIABLE',
            description:
              'Supplies configurable values to reusable infrastructure definitions.',
          },
          {
            id: 'review-target',
            label: 'INFRASTRUCTURE REVIEW',
            description:
              'Evaluates operational impact before applying a high-risk change.',
          },
        ],
        successMessage:
          'Correct. Infrastructure as Code has distinct responsibilities for platform integration, state, planning, drift, reuse, configuration and change review.',
        failureMessage:
          'First determine whether the problem concerns platform integration, resource tracking, previewing changes, divergence, reuse, environment-specific values or production impact.',
      },
    },
    {
      id: 'mc09-s06-iac-question',
      type: 'question',
      title: 'Infrastructure as Code Check',
      description:
        'Check whether you understand why Terraform plan should be treated as an engineering review point.',
      question: {
        id: 'mc09-s06-iac',
        type: 'single-choice',
        question:
          'A Terraform plan for EDDUU production shows that changing a database configuration will destroy and recreate the database resource. What should the team do first?',
        options: [
          {
            id: 'review',
            text:
              'Stop and review the planned replacement for data-loss, downtime, recovery and migration implications before approving the apply.',
            correct: true,
          },
          {
            id: 'apply',
            text:
              'Immediately run apply because Terraform has already determined the safest action.',
            correct: false,
          },
          {
            id: 'ignore',
            text:
              'Ignore the replacement because Infrastructure as Code changes cannot affect production availability.',
            correct: false,
          },
          {
            id: 'delete-state',
            text:
              'Delete Terraform state so Terraform will stop showing the replacement.',
            correct: false,
          },
        ],
        explanation:
          'A planned resource replacement can be a high-impact infrastructure operation. The team should understand the operational consequences before applying the change.',
      },
    },
  ],
}