import type { KnowledgeDefinition } from './knowledge'

export const errorBudgetsKnowledge: KnowledgeDefinition = {
  technologyId: 'error-budgets',
  slug: 'error-budgets',
  title: 'Error Budgets',
  summary:
    'Error budgets translate an SLO into a measurable amount of permitted unreliability and provide a practical framework for balancing reliability, engineering velocity, risk, and product delivery.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is an Error Budget?',
      content:
        'An error budget is the amount of unreliability a service is allowed to experience while still meeting its SLO during a defined measurement window. If an SLO allows a small percentage of failures, that allowed failure becomes the service error budget.',
      highlights: [
        {
          title: 'Error budget',
          description:
            'The permitted amount of unreliability associated with an SLO.',
        },
        {
          title: 'SLO',
          description:
            'The target level of service reliability or performance.',
        },
        {
          title: 'Budget window',
          description:
            'The period over which the error budget is calculated.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine you have a monthly travel budget of ₹10,000. You can spend that money throughout the month, but once it is gone you need to be more careful. An error budget works similarly. If your SLO gives the service a small amount of permitted unreliability, that allowance is the budget. When the budget is being consumed quickly, the team needs to prioritize reliability.',
      highlights: [
        {
          title: 'Monthly budget',
          description:
            'Represents the reliability allowance during the SLO period.',
        },
        {
          title: 'Spending',
          description:
            'Represents reliability failures consuming the allowed budget.',
        },
        {
          title: 'Budget exhausted',
          description:
            'Indicates that the service has consumed its permitted unreliability.',
        },
      ],
    },

    {
      title: 'Why Error Budgets Matter',
      content:
        'Error budgets create a common language between product and engineering. Instead of arguing abstractly about whether a system is reliable enough, teams can use measurable reliability performance to decide when to move quickly and when to invest in stability.',
      highlights: [
        {
          title: 'Reliability',
          description:
            'Protecting the expected level of service quality.',
        },
        {
          title: 'Velocity',
          description:
            'Maintaining the ability to deliver product changes quickly.',
        },
        {
          title: 'Trade-off',
          description:
            'Balancing delivery speed against reliability risk.',
        },
      ],
    },

    {
      title: 'SLO to Error Budget',
      content:
        'The error budget is derived from the SLO. For a simple availability objective of 99.9%, the permitted unreliability is 0.1%. That 0.1% represents the error budget for the defined measurement window.',
      highlights: [
        {
          title: '99.9% SLO',
          description:
            'The service is expected to meet the defined success criteria 99.9% of the time.',
        },
        {
          title: '0.1% budget',
          description:
            'The permitted amount of unreliability associated with that SLO.',
        },
        {
          title: 'Measurement window',
          description:
            'The period over which the SLO and budget are evaluated.',
        },
      ],
    },

    {
      title: 'Error Budget Example',
      content:
        'Suppose an API receives 1,000,000 eligible requests during an SLO period and has a 99.9% availability target. The service can have approximately 1,000 unsuccessful eligible requests and still remain within the 0.1% unreliability allowance, assuming the SLO uses a request-based availability definition.',
      highlights: [
        {
          title: 'Total requests',
          description:
            '1,000,000 eligible requests in the example measurement window.',
        },
        {
          title: 'SLO',
          description:
            '99.9% successful requests.',
        },
        {
          title: 'Allowed failures',
          description:
            'Approximately 1,000 eligible failures under the simple request-based example.',
        },
      ],
    },

    {
      title: 'Time-Based Error Budget',
      content:
        'For a time-based availability SLO, the budget can be expressed as permitted downtime during the measurement window. The exact amount depends on the length of the window and the SLO percentage.',
      highlights: [
        {
          title: 'Downtime budget',
          description:
            'The amount of unavailable time permitted by the SLO.',
        },
        {
          title: 'Availability target',
          description:
            'The percentage of time the service is expected to remain available.',
        },
        {
          title: 'Window length',
          description:
            'The total time period used for calculating permitted downtime.',
        },
      ],
    },

    {
      title: 'Error Budget Remaining',
      content:
        'Teams should track both how much error budget has been consumed and how much remains. Remaining budget provides context for deciding whether additional risky changes are appropriate.',
      highlights: [
        {
          title: 'Budget consumed',
          description:
            'The amount of allowed unreliability already used.',
        },
        {
          title: 'Budget remaining',
          description:
            'The amount of permitted unreliability still available.',
        },
        {
          title: 'Reliability posture',
          description:
            'The current level of caution required based on budget consumption.',
        },
      ],
    },

    {
      title: 'Error Budget Burn Rate',
      content:
        'Burn rate describes how quickly an error budget is being consumed compared with the sustainable rate. A burn rate of 1 means the budget is being consumed at the rate expected to use the entire budget by the end of the SLO window. A significantly higher burn rate means the budget is being consumed too quickly.',
      highlights: [
        {
          title: 'Burn rate',
          description:
            'The rate of error-budget consumption relative to the allowed rate.',
        },
        {
          title: 'Burn rate = 1',
          description:
            'Budget is being consumed at approximately the sustainable rate.',
        },
        {
          title: 'High burn rate',
          description:
            'Budget is being consumed significantly faster than intended.',
        },
      ],
    },

    {
      title: 'Fast Burn vs Slow Burn',
      content:
        'A fast burn indicates severe reliability degradation that may exhaust the budget quickly. A slow burn can indicate a smaller but persistent reliability problem. Both can matter, but they may require different response urgency.',
      highlights: [
        {
          title: 'Fast burn',
          description:
            'Rapid consumption of reliability budget caused by severe degradation.',
        },
        {
          title: 'Slow burn',
          description:
            'Gradual consumption that may indicate persistent lower-level reliability problems.',
        },
        {
          title: 'Response urgency',
          description:
            'The urgency of action should reflect the speed and impact of budget consumption.',
        },
      ],
    },

    {
      title: 'Error Budget Policies',
      content:
        'An error budget policy defines what the organization should do at different levels of budget consumption. For example, teams may continue normal feature delivery while the budget is healthy, increase reliability work when consumption becomes concerning, and restrict risky releases when the budget is exhausted.',
      highlights: [
        {
          title: 'Policy',
          description:
            'Predefined decision rules connected to reliability performance.',
        },
        {
          title: 'Healthy budget',
          description:
            'The service has sufficient reliability allowance remaining.',
        },
        {
          title: 'Exhausted budget',
          description:
            'The service has consumed the permitted unreliability for the defined period.',
        },
      ],
    },

    {
      title: 'Budget-Aware Releases',
      content:
        'Error budgets can influence release decisions. When reliability is healthy, teams may accept reasonable delivery risk. When the budget is nearly exhausted, teams can prioritize reliability fixes, safer deployment strategies, testing, or stabilization work.',
      highlights: [
        {
          title: 'Release risk',
          description:
            'The potential reliability impact introduced by a production change.',
        },
        {
          title: 'Budget-aware release',
          description:
            'A release decision informed by current error-budget health.',
        },
        {
          title: 'Stabilization',
          description:
            'Engineering work focused on restoring reliability before additional risk is introduced.',
        },
      ],
    },

    {
      title: 'Error Budget and Feature Velocity',
      content:
        'Error budgets create a structured trade-off between shipping features and maintaining reliability. The goal is not to stop product development whenever an error occurs. Instead, the budget provides evidence for deciding how much reliability risk the team can responsibly accept.',
      highlights: [
        {
          title: 'Feature velocity',
          description:
            'The speed at which product capabilities are delivered.',
        },
        {
          title: 'Reliability risk',
          description:
            'The possibility that changes will negatively affect service reliability.',
        },
        {
          title: 'Balanced delivery',
          description:
            'Using measurable reliability information to guide delivery decisions.',
        },
      ],
    },

    {
      title: 'Error Budget and Product Management',
      content:
        'Product managers and engineering leaders can use error budgets to make explicit trade-offs. If the service is highly reliable, the team may have room to move faster. If reliability is poor, the organization can prioritize reliability work instead of treating stability as an unlimited engineering obligation.',
      highlights: [
        {
          title: 'Product priority',
          description:
            'The relative importance assigned to product functionality or reliability work.',
        },
        {
          title: 'Engineering investment',
          description:
            'Resources dedicated to improving reliability.',
        },
        {
          title: 'Trade-off decision',
          description:
            'A deliberate choice between competing product and reliability goals.',
        },
      ],
    },

    {
      title: 'Error Budget and Incident Management',
      content:
        'Incidents consume error budgets when they cause SLO-measured unreliability. Incident response should therefore consider how much budget has already been consumed and whether the incident represents a one-time event or part of a broader reliability trend.',
      highlights: [
        {
          title: 'Incident impact',
          description:
            'The amount of SLO-measured unreliability caused by an incident.',
        },
        {
          title: 'Budget consumption',
          description:
            'The reliability allowance consumed by failures.',
        },
        {
          title: 'Reliability trend',
          description:
            'The pattern of budget consumption across time.',
        },
      ],
    },

    {
      title: 'Error Budget and Alerting',
      content:
        'Alerting can use error-budget burn rate to identify reliability problems. Rather than alerting on every infrastructure metric, teams can focus critical alerts on conditions likely to consume a meaningful portion of the service reliability budget.',
      highlights: [
        {
          title: 'Burn-rate alert',
          description:
            'An alert triggered by rapid or concerning error-budget consumption.',
        },
        {
          title: 'SLO alert',
          description:
            'An alert connected directly to service-level reliability performance.',
        },
        {
          title: 'Actionability',
          description:
            'The alert should indicate a condition that requires meaningful response.',
        },
      ],
    },

    {
      title: 'Error Budget and SRE',
      content:
        'Error budgets are closely associated with Site Reliability Engineering because they provide a quantitative mechanism for balancing reliability and development velocity. They allow reliability to become an explicit engineering and product concern rather than an undefined aspiration.',
      highlights: [
        {
          title: 'SRE',
          description:
            'Site Reliability Engineering, a discipline focused on reliable and scalable production systems.',
        },
        {
          title: 'Reliability target',
          description:
            'The SLO defining expected service behavior.',
        },
        {
          title: 'Decision framework',
          description:
            'Using measurable reliability performance to guide engineering choices.',
        },
      ],
    },

    {
      title: 'Error Budget and Deployment Strategy',
      content:
        'When reliability is under pressure, safer deployment strategies can reduce additional risk. Examples include canary deployments, blue-green deployments, gradual rollouts, feature flags, automated rollback, and stronger pre-production validation.',
      highlights: [
        {
          title: 'Canary',
          description:
            'A deployment strategy that exposes a new version to a limited portion of traffic first.',
        },
        {
          title: 'Blue-green',
          description:
            'A deployment strategy maintaining separate environments so traffic can be switched between versions.',
        },
        {
          title: 'Automated rollback',
          description:
            'Automatically returning to a previous version when defined reliability conditions deteriorate.',
        },
      ],
    },

    {
      title: 'Error Budget and Change Freeze',
      content:
        'Some organizations may temporarily restrict risky changes when the error budget is exhausted. This should be treated as a reliability policy rather than a punishment mechanism. The goal is to restore reliability before introducing additional production risk.',
      highlights: [
        {
          title: 'Change freeze',
          description:
            'A temporary restriction on certain production changes.',
        },
        {
          title: 'Reliability work',
          description:
            'Engineering effort focused on restoring or improving service reliability.',
        },
        {
          title: 'Risk control',
          description:
            'Reducing the probability of further reliability degradation.',
        },
      ],
    },

    {
      title: 'Error Budget and Dependencies',
      content:
        'A service can consume its error budget because of failures in dependencies it does not directly control. Teams should understand dependency reliability, establish appropriate contracts, and consider graceful degradation or fallback mechanisms where practical.',
      highlights: [
        {
          title: 'Dependency',
          description:
            'A service or component required by another service.',
        },
        {
          title: 'Dependency failure',
          description:
            'A problem in a required external or internal component.',
        },
        {
          title: 'Graceful degradation',
          description:
            'Continuing to provide reduced but useful functionality when a dependency fails.',
        },
      ],
    },

    {
      title: 'Error Budget and Third-Party Providers',
      content:
        'AI platforms, payment systems, cloud services, telephony providers, and other external dependencies can affect a service’s reliability. Teams should understand how provider failures affect their SLOs and design fallbacks where the business impact justifies the investment.',
      highlights: [
        {
          title: 'Third-party dependency',
          description:
            'An external service required by the product.',
        },
        {
          title: 'Provider outage',
          description:
            'A third-party service becomes unavailable or severely degraded.',
        },
        {
          title: 'Fallback',
          description:
            'An alternate mechanism used when the primary dependency is unavailable.',
        },
      ],
    },

    {
      title: 'Error Budgets for APIs',
      content:
        'An API can define an availability SLO and use the resulting error budget to guide release decisions. For example, if successful requests must remain above a target percentage, failed eligible requests consume the available budget.',
      highlights: [
        {
          title: 'API availability',
          description:
            'The proportion of eligible API operations that succeed.',
        },
        {
          title: 'Failed request',
          description:
            'A request classified as unsuccessful under the SLI definition.',
        },
        {
          title: 'Release decision',
          description:
            'A production change decision influenced by current reliability performance.',
        },
      ],
    },

    {
      title: 'Error Budgets for AI Systems',
      content:
        'AI systems can apply error-budget thinking to technical reliability and, where measurable, functional reliability. Potential indicators include provider availability, latency, retrieval success, data freshness, and quality measures appropriate to the product.',
      highlights: [
        {
          title: 'AI reliability',
          description:
            'The ability of an AI product to remain available, responsive, and functionally useful.',
        },
        {
          title: 'Quality budget',
          description:
            'A conceptual application of budget thinking to measurable quality degradation when appropriate.',
        },
        {
          title: 'Provider dependency',
          description:
            'An external AI model or service whose reliability affects the product.',
        },
      ],
    },

    {
      title: 'Error Budgets for RAG',
      content:
        'A RAG system can consider budgets for technical failures, retrieval latency, ingestion freshness, and other measurable service objectives. A technically available RAG system may still violate a freshness or quality objective, so the budget model should reflect the actual product requirements.',
      highlights: [
        {
          title: 'Freshness budget',
          description:
            'A conceptual allowance for acceptable data staleness relative to a freshness objective.',
        },
        {
          title: 'Retrieval reliability',
          description:
            'The ability of the retrieval component to provide useful context within defined objectives.',
        },
        {
          title: 'Technical vs functional reliability',
          description:
            'Distinguishing system availability from whether the AI workflow produces useful results.',
        },
      ],
    },

    {
      title: 'Error Budgets for AI Voice',
      content:
        'An AI voice platform can use error-budget concepts for call connection failures, dropped calls, excessive response latency, provider outages, and other measurable service objectives. These budgets can help prioritize reliability improvements without requiring perfection.',
      highlights: [
        {
          title: 'Call reliability',
          description:
            'The ability to successfully establish and maintain voice interactions.',
        },
        {
          title: 'Voice latency',
          description:
            'The response delay experienced during a voice interaction.',
        },
        {
          title: 'Provider reliability',
          description:
            'The reliability of external telephony, speech, or AI providers.',
        },
      ],
    },

    {
      title: 'Error Budget Review',
      content:
        'Teams should periodically review how much budget was consumed, what caused the consumption, whether incidents repeated, which changes contributed, and what reliability investments are needed. The review should produce concrete decisions rather than becoming a passive reporting exercise.',
      highlights: [
        {
          title: 'Budget review',
          description:
            'A structured evaluation of error-budget consumption and causes.',
        },
        {
          title: 'Trend',
          description:
            'The pattern of budget consumption over time.',
        },
        {
          title: 'Action item',
          description:
            'A concrete improvement assigned to an owner.',
        },
      ],
    },

    {
      title: 'Common Error Budget Mistakes',
      content:
        'Common mistakes include treating the budget as a quota that must always be spent, stopping all development after a tiny reliability event, defining an SLO that does not reflect customers, ignoring measurement quality, failing to connect budget consumption to decisions, and using error budgets without clear ownership.',
      highlights: [
        {
          title: 'Budget must be spent',
          description:
            'An error budget is an allowance, not a target for how much failure should occur.',
        },
        {
          title: 'Blind freeze',
          description:
            'Stopping every change without considering severity, risk, and business context.',
        },
        {
          title: 'Poor SLO',
          description:
            'An error budget is only meaningful if the underlying SLO measures something important.',
        },
        {
          title: 'No action',
          description:
            'Tracking budget consumption without changing engineering decisions.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What is an error budget? How is it derived from an SLO? What is burn rate? How do error budgets balance reliability and feature velocity? What happens when an error budget is exhausted? How would you use error budgets for an API? How would you apply the concept to an AI platform?',
      highlights: [
        {
          title: 'Definition',
          description:
            'Clearly explain the relationship between SLO and permitted unreliability.',
        },
        {
          title: 'Decision-making',
          description:
            'Explain how budget health influences release and reliability decisions.',
        },
        {
          title: 'Burn rate',
          description:
            'Explain how quickly the budget is being consumed.',
        },
        {
          title: 'Leadership',
          description:
            'Explain the trade-off between product velocity and reliability.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “An error budget is the amount of unreliability we are willing to tolerate while still meeting our SLO. For example, a 99.9% availability SLO gives us a 0.1% error budget over the measurement window. I use the budget as a decision mechanism rather than treating reliability as an unlimited requirement. When the budget is healthy, the team can continue delivering features with reasonable risk. When the budget is being consumed rapidly or is exhausted, I would prioritize reliability work, investigate the causes, and use safer release strategies until the service stabilizes. For AI systems, I would also apply the concept to meaningful latency, provider availability, freshness, and quality objectives where those can be measured reliably.”',
      highlights: [
        {
          title: 'Quantitative',
          description:
            'Use measurable reliability rather than vague statements.',
        },
        {
          title: 'Balanced',
          description:
            'Balance delivery speed with reliability rather than maximizing only one.',
        },
        {
          title: 'Action-oriented',
          description:
            'Connect budget status to concrete engineering decisions.',
        },
      ],
    },

    {
      title: 'Error Budgets for Technical Leaders',
      content:
        'For an AI Engineering Manager, AI Product Manager, Technical Program Manager, or AI Delivery Manager, error budgets provide a shared decision framework across engineering and product. Leaders should ensure SLOs are meaningful, measurement is trustworthy, budget policies are agreed in advance, reliability work is prioritized when necessary, and teams are not punished for legitimate incidents.',
      highlights: [
        {
          title: 'Governance',
          description:
            'Define organization-wide principles for SLOs and error-budget policies.',
        },
        {
          title: 'Cross-functional alignment',
          description:
            'Connect product priorities with engineering reliability objectives.',
        },
        {
          title: 'Risk management',
          description:
            'Use measurable reliability performance to manage production risk.',
        },
        {
          title: 'Delivery leadership',
          description:
            'Balance roadmap commitments with the actual reliability state of the platform.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'production',
    'observability',
    'monitoring',
    'logging',
    'metrics',
    'distributed-tracing',
    'prometheus',
    'grafana',
    'opentelemetry',
    'alerting',
    'incident-management',
    'sli-slo',
    'root-cause-analysis',
    'disaster-recovery',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'scalability',
    'availability',
    'fault-tolerance',
    'high-availability',
    'capacity-planning',
    'deployment',
    'deployment-strategy',
    'rollback-strategy',
    'blue-green-deployment',
    'canary-deployment',
    'feature-flags',
    'kubernetes',
    'docker',
    'aws',
    'azure',
    'google-cloud',
  ],
}

export default errorBudgetsKnowledge
