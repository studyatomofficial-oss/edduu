import type { KnowledgeDefinition } from './knowledge'

export const releaseManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'release-management',
  slug: 'release-management',
  title: 'Release Management',
  summary:
    'Release Management is the structured process of planning, coordinating, validating, approving, deploying, communicating, and monitoring software releases.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Release Management?',
      content:
        'Release Management is the process of taking a software change from a completed and validated state to a controlled production release. It coordinates engineering, product, QA, security, operations, support, and business stakeholders so that releases happen safely and predictably.',
      highlights: [
        {
          title: 'Release',
          description:
            'A controlled publication of a specific software version or capability.',
        },
        {
          title: 'Release process',
          description:
            'The sequence of planning, validation, approval, deployment, and monitoring activities around a release.',
        },
        {
          title: 'Release governance',
          description:
            'Policies and controls that determine how software changes are approved and delivered.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of a release like opening a new branch of a bank. Building the branch is development, checking the building and systems is testing, getting approvals is release governance, opening the doors is deployment and release, and monitoring the branch after opening confirms everything is working.',
      highlights: [
        {
          title: 'Preparation',
          description:
            'Making sure the release is technically and operationally ready.',
        },
        {
          title: 'Approval',
          description:
            'Confirming that the release is authorized to proceed.',
        },
        {
          title: 'Go-live',
          description:
            'Making the release available to its intended users.',
        },
      ],
    },

    {
      title: 'Release vs Deployment',
      content:
        'Deployment places software into an environment. Release is the broader process of making a capability available to users. A deployment can happen without an immediate release when feature flags, staged rollouts, or other controls keep the functionality inactive.',
      highlights: [
        {
          title: 'Deployment',
          description:
            'Putting software into a target environment.',
        },
        {
          title: 'Release',
          description:
            'Making a capability available to users or customers.',
        },
        {
          title: 'Feature flag',
          description:
            'A mechanism that controls whether deployed functionality is enabled.',
        },
      ],
    },

    {
      title: 'Release Lifecycle',
      content:
        'A typical release lifecycle includes planning, scope definition, development, integration, testing, security validation, release readiness assessment, approval, deployment, verification, monitoring, and post-release review.',
      highlights: [
        {
          title: 'Planning',
          description:
            'Defining what will be released and why.',
        },
        {
          title: 'Validation',
          description:
            'Confirming that the release meets technical and business expectations.',
        },
        {
          title: 'Go-live',
          description:
            'Executing the approved release into the target environment.',
        },
        {
          title: 'Post-release review',
          description:
            'Evaluating release outcomes and identifying improvements.',
        },
      ],
    },

    {
      title: 'Release Scope',
      content:
        'Release scope defines exactly what is included in a release and what is intentionally excluded. Clear scope prevents unexpected changes from entering a production release.',
      highlights: [
        {
          title: 'In scope',
          description:
            'Changes explicitly included in the release.',
        },
        {
          title: 'Out of scope',
          description:
            'Changes intentionally excluded from the release.',
        },
        {
          title: 'Scope control',
          description:
            'Managing changes to the agreed release contents.',
        },
      ],
    },

    {
      title: 'Release Candidate',
      content:
        'A release candidate is a version considered sufficiently complete and stable to undergo final validation before production release.',
      highlights: [
        {
          title: 'Release candidate',
          description:
            'A specific software version being evaluated for production release.',
        },
        {
          title: 'Candidate validation',
          description:
            'Final technical and operational checks performed before approval.',
        },
      ],
    },

    {
      title: 'Release Readiness',
      content:
        'Release readiness means the organization has enough evidence that the software, infrastructure, security controls, monitoring, support processes, documentation, and rollback mechanisms are ready for production.',
      highlights: [
        {
          title: 'Technical readiness',
          description:
            'The software and infrastructure satisfy required technical conditions.',
        },
        {
          title: 'Operational readiness',
          description:
            'Monitoring, support, incident response, and recovery processes are prepared.',
        },
        {
          title: 'Business readiness',
          description:
            'Stakeholders, communications, training, and business processes are prepared.',
        },
      ],
    },

    {
      title: 'Release Checklist',
      content:
        'A release checklist captures important conditions that must be verified before go-live. The checklist should be tailored to the risk and complexity of the release rather than becoming a purely administrative exercise.',
      highlights: [
        {
          title: 'Checklist',
          description:
            'A structured set of release readiness conditions.',
        },
        {
          title: 'Exit criteria',
          description:
            'Conditions that must be satisfied before a release can proceed.',
        },
      ],
    },

    {
      title: 'Testing Before Release',
      content:
        'Release validation can include unit tests, integration tests, end-to-end tests, performance testing, security testing, regression testing, user acceptance testing, and production-like staging validation.',
      highlights: [
        {
          title: 'Regression testing',
          description:
            'Checking that existing functionality still works after changes.',
        },
        {
          title: 'User acceptance testing',
          description:
            'Validation that the software satisfies intended user and business requirements.',
        },
        {
          title: 'Performance testing',
          description:
            'Evaluating system behavior under expected or extreme workload conditions.',
        },
      ],
    },

    {
      title: 'Security Validation',
      content:
        'Security should be part of release readiness. Depending on the system, this may include dependency checks, vulnerability scanning, secret detection, access-control validation, infrastructure security checks, and security review of significant changes.',
      highlights: [
        {
          title: 'Security gate',
          description:
            'A security condition that must be satisfied before release.',
        },
        {
          title: 'Vulnerability',
          description:
            'A weakness that could potentially be exploited to cause harm.',
        },
      ],
    },

    {
      title: 'Release Approval',
      content:
        'Some organizations require explicit approval before production release. Approval should be based on evidence such as test results, risk assessment, business readiness, operational readiness, and rollback preparedness.',
      highlights: [
        {
          title: 'Approval gate',
          description:
            'An authorization required before a release proceeds.',
        },
        {
          title: 'Risk assessment',
          description:
            'Evaluating the probability and potential impact of release failure.',
        },
        {
          title: 'Go/no-go decision',
          description:
            'The final decision to proceed with or stop a release.',
        },
      ],
    },

    {
      title: 'Release Risk',
      content:
        'Release risk depends on factors such as change size, system criticality, user impact, architecture complexity, dependency changes, database migrations, security exposure, and the maturity of rollback and monitoring mechanisms.',
      highlights: [
        {
          title: 'Change risk',
          description:
            'The potential impact created by the proposed software change.',
        },
        {
          title: 'Blast radius',
          description:
            'The amount of users, systems, or business functionality potentially affected by a failure.',
        },
        {
          title: 'Risk mitigation',
          description:
            'Actions taken to reduce the likelihood or impact of release problems.',
        },
      ],
    },

    {
      title: 'Release Strategies',
      content:
        'Release Management works with deployment strategies such as rolling, blue-green, and canary releases. The selected strategy should match the system architecture, risk profile, availability requirements, and rollback needs.',
      highlights: [
        {
          title: 'Rolling release',
          description:
            'Gradually replacing instances running the old version.',
        },
        {
          title: 'Blue-green release',
          description:
            'Switching traffic between two production-capable environments.',
        },
        {
          title: 'Canary release',
          description:
            'Gradually exposing the new version to a controlled portion of users or traffic.',
        },
      ],
    },

    {
      title: 'Feature Flags',
      content:
        'Feature flags allow software to be deployed without immediately enabling every capability. This separates deployment from release and can reduce release risk by allowing controlled activation and rapid feature disablement.',
      highlights: [
        {
          title: 'Feature flag',
          description:
            'A configuration control that determines whether a capability is active.',
        },
        {
          title: 'Progressive release',
          description:
            'Gradually making functionality available to increasingly larger user groups.',
        },
        {
          title: 'Kill switch',
          description:
            'A control used to quickly disable problematic functionality.',
        },
      ],
    },

    {
      title: 'Release Communication',
      content:
        'A release may affect customers, support teams, operations, sales, training, compliance, and other stakeholders. Release communication should clearly explain what is changing, when it is changing, expected impact, and what support teams should know.',
      highlights: [
        {
          title: 'Release notes',
          description:
            'A summary of important changes included in a release.',
        },
        {
          title: 'Stakeholder communication',
          description:
            'Sharing relevant release information with affected teams and users.',
        },
        {
          title: 'Customer impact',
          description:
            'The expected effect of a release on customers or end users.',
        },
      ],
    },

    {
      title: 'Release Notes',
      content:
        'Release notes communicate important changes in a version. Good release notes are concise, accurate, and useful to the intended audience. They may include new capabilities, fixes, breaking changes, known issues, migration information, and important operational details.',
      highlights: [
        {
          title: 'New feature',
          description:
            'A new capability introduced in the release.',
        },
        {
          title: 'Breaking change',
          description:
            'A change that can require consumers or dependent systems to modify their behavior.',
        },
        {
          title: 'Known issue',
          description:
            'A recognized problem that remains unresolved or requires special handling.',
        },
      ],
    },

    {
      title: 'Deployment Verification',
      content:
        'After deployment, release management requires evidence that the release is healthy. Teams can use smoke tests, health checks, error rates, latency, logs, traces, user feedback, and business metrics.',
      highlights: [
        {
          title: 'Post-release validation',
          description:
            'Checking system behavior after the release becomes active.',
        },
        {
          title: 'Release health',
          description:
            'The operational condition of the released version.',
        },
      ],
    },

    {
      title: 'Rollback and Recovery',
      content:
        'Every important release should have a defined recovery strategy. Depending on the architecture, recovery may involve redeploying a previous artifact, switching traffic to a previous environment, disabling a feature flag, or restoring compatible configuration.',
      highlights: [
        {
          title: 'Rollback',
          description:
            'Returning the system to a previously known-good version or state.',
        },
        {
          title: 'Recovery plan',
          description:
            'A predefined approach for restoring acceptable service after release failure.',
        },
        {
          title: 'Rollback trigger',
          description:
            'A defined condition that requires the team to stop or reverse a release.',
        },
      ],
    },

    {
      title: 'Post-Release Monitoring',
      content:
        'Monitoring continues after release because some problems appear only under real production traffic. Teams should monitor technical health, business metrics, customer feedback, and operational alerts.',
      highlights: [
        {
          title: 'Error rate',
          description:
            'The percentage of requests or operations that fail.',
        },
        {
          title: 'Latency',
          description:
            'The time required for the system to respond.',
        },
        {
          title: 'Customer feedback',
          description:
            'Information from users indicating whether the release is behaving as expected.',
        },
      ],
    },

    {
      title: 'Release Metrics',
      content:
        'Release performance can be measured using deployment frequency, lead time for changes, change failure rate, time to restore service, release predictability, rollback frequency, and defect escape rate.',
      highlights: [
        {
          title: 'Deployment frequency',
          description:
            'How often production deployments occur successfully.',
        },
        {
          title: 'Lead time',
          description:
            'The time required for a change to move from development into production.',
        },
        {
          title: 'Change failure rate',
          description:
            'The proportion of releases that result in failure, rollback, or remediation.',
        },
        {
          title: 'Time to restore',
          description:
            'How quickly acceptable service is restored after a release-related failure.',
        },
      ],
    },

    {
      title: 'Release Management for AI',
      content:
        'AI releases require additional readiness checks because a software release can change model behavior, prompts, retrieval logic, agent workflows, safety behavior, latency, and cost. AI release management should therefore include evaluation and regression criteria alongside traditional software validation.',
      highlights: [
        {
          title: 'Model release',
          description:
            'Introducing a new model version or model configuration into an application.',
        },
        {
          title: 'Prompt release',
          description:
            'Introducing a controlled change to prompts used by an AI system.',
        },
        {
          title: 'AI evaluation gate',
          description:
            'A release condition requiring the AI system to meet defined quality or safety thresholds.',
        },
        {
          title: 'AI regression',
          description:
            'A measurable degradation in AI behavior after a software, model, prompt, or configuration change.',
        },
      ],
    },

    {
      title: 'AI Release Metrics',
      content:
        'AI release decisions can include quality scores, groundedness, hallucination rate, retrieval quality, safety violations, latency, token usage, inference cost, user feedback, and task-completion rate.',
      highlights: [
        {
          title: 'Hallucination rate',
          description:
            'The observed frequency of unsupported or incorrect AI-generated information.',
        },
        {
          title: 'Groundedness',
          description:
            'The degree to which an AI response is supported by the available source information.',
        },
        {
          title: 'Task completion',
          description:
            'The percentage of intended user tasks successfully completed by the AI system.',
        },
        {
          title: 'Inference cost',
          description:
            'The cost associated with processing AI requests.',
        },
      ],
    },

    {
      title: 'Release Management for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Release Management is primarily about coordinating people, technology, risk, dependencies, business readiness, and decision-making. The leader should create clear release criteria, assign owners, surface risks early, and make go/no-go decisions based on evidence.',
      highlights: [
        {
          title: 'Release owner',
          description:
            'The person accountable for coordinating the release process and readiness.',
        },
        {
          title: 'Dependency management',
          description:
            'Identifying and coordinating systems, teams, vendors, and activities required for the release.',
        },
        {
          title: 'Go/no-go decision',
          description:
            'The decision to proceed with or stop a release based on defined evidence.',
        },
        {
          title: 'Release governance',
          description:
            'The framework used to control release risk and accountability.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common release-management mistakes include unclear ownership, scope changes late in the cycle, weak readiness criteria, missing rollback plans, poor stakeholder communication, treating approvals as paperwork, ignoring dependencies, and declaring success immediately after deployment without monitoring.',
      highlights: [
        {
          title: 'Unclear ownership',
          description:
            'No clearly accountable person for release readiness and coordination.',
        },
        {
          title: 'Late scope change',
          description:
            'Introducing significant changes close to release without adequate validation.',
        },
        {
          title: 'Missing rollback',
          description:
            'Proceeding without a practical recovery strategy.',
        },
        {
          title: 'Weak post-release monitoring',
          description:
            'Failing to verify the real production impact after release.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'deployment',
    'ci-cd',
    'blue-green-deployment',
    'canary-deployment',
    'rolling-deployment',
    'artifact-management',
    'feature-flags',
    'rollback-strategy',
    'deployment-strategy',
    'github-actions',
    'gitlab',
    'jenkins',
  ],
}

export default releaseManagementKnowledge
