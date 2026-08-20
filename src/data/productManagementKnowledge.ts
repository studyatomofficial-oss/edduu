import type { KnowledgeDefinition } from './knowledge'

export const productManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'product-management',
  slug: 'product-management',
  title: 'Product Management',
  summary:
    'Product Management is the discipline of identifying valuable customer and business problems, defining product outcomes, prioritizing opportunities, aligning cross-functional teams, and continuously learning from product and market evidence.',
  difficulty: 'advanced',

  sections: [
    {
      title: 'What is Product Management?',
      content:
        'Product Management is the practice of deciding what product problems are worth solving, why they matter, for whom they matter, and how the organization should prioritize and measure the resulting work. A Product Manager connects customer needs, business strategy, technology, design, delivery, and measurable outcomes.',
      highlights: [
        {
          title: 'Product problem',
          description:
            'A customer, business, or market problem that may be worth solving.',
        },
        {
          title: 'Product outcome',
          description:
            'The measurable change the product aims to create.',
        },
        {
          title: 'Cross-functional leadership',
          description:
            'Aligning product, engineering, design, operations, sales, marketing, and other stakeholders around outcomes.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Imagine running a restaurant. The kitchen team knows how to cook, the marketing team knows how to attract customers, and finance knows the economics. Someone still needs to decide which customers the restaurant is serving, what menu problems to solve, which dishes matter most, how much investment each dish deserves, and whether customers actually value the result. Product Management plays a similar coordinating role for a software product.',
      highlights: [
        {
          title: 'Customer',
          description:
            'Understand who the product serves and what they need.',
        },
        {
          title: 'Menu',
          description:
            'Decide which product capabilities should exist.',
        },
        {
          title: 'Business',
          description:
            'Ensure the product creates sustainable business value.',
        },
      ],
    },

    {
      title: 'Product Management vs Project Management',
      content:
        'Product Management focuses primarily on product value, customer problems, strategy, outcomes, and prioritization. Project or program management focuses more heavily on coordinating execution, dependencies, timelines, risks, and delivery across a defined initiative. The responsibilities can overlap, but the decision lens is different.',
      highlights: [
        {
          title: 'Product Management',
          description:
            'What should we build, for whom, why, and how will we know it worked?',
        },
        {
          title: 'Program Management',
          description:
            'How do we coordinate complex work, dependencies, risks, and delivery?',
        },
        {
          title: 'Engineering',
          description:
            'How should we build and operate the solution safely and sustainably?',
        },
      ],
    },

    {
      title: 'Product Management vs Product Ownership',
      content:
        'Product Management is a broader discipline that can include strategy, discovery, market understanding, positioning, lifecycle management, and outcomes. Product Ownership is a specific accountability in Scrum focused on maximizing product value and managing the Product Backlog. In some organizations one person may perform both sets of responsibilities.',
      highlights: [
        {
          title: 'Product Management',
          description:
            'Broader product strategy and outcome responsibility.',
        },
        {
          title: 'Product Owner',
          description:
            'Scrum accountability for maximizing product value and effective Product Backlog management.',
        },
        {
          title: 'Organizational variation',
          description:
            'Titles and responsibility boundaries vary across companies.',
        },
      ],
    },

    {
      title: 'Customer Problem',
      content:
        'Strong product management begins with understanding the customer problem rather than immediately proposing a feature. A good problem statement describes who experiences the problem, what they are trying to accomplish, what prevents them from succeeding, and why the problem matters.',
      highlights: [
        {
          title: 'Who',
          description:
            'Identify the customer or user affected by the problem.',
        },
        {
          title: 'Problem',
          description:
            'Describe the difficulty or unmet need.',
        },
        {
          title: 'Impact',
          description:
            'Explain the consequence of the problem.',
        },
      ],
    },

    {
      title: 'Discovery',
      content:
        'Product discovery is the process of reducing uncertainty about customer needs, business opportunities, solution options, technical feasibility, and expected outcomes before committing significant resources. Discovery may use interviews, observation, prototypes, data analysis, competitive research, experiments, and technical spikes.',
      highlights: [
        {
          title: 'Customer research',
          description:
            'Learn directly from users and customers.',
        },
        {
          title: 'Prototype',
          description:
            'Test a proposed experience or concept before full implementation.',
        },
        {
          title: 'Technical spike',
          description:
            'Investigate a technical uncertainty before making a larger commitment.',
        },
      ],
    },

    {
      title: 'Product Vision',
      content:
        'Product vision describes the future state the organization wants the product to create. It provides long-term direction without requiring every future implementation detail to be predetermined.',
      highlights: [
        {
          title: 'Vision',
          description:
            'A clear picture of the desired future state.',
        },
        {
          title: 'Direction',
          description:
            'Helps teams make consistent decisions as circumstances change.',
        },
        {
          title: 'Inspiration',
          description:
            'Connects day-to-day product work to a meaningful larger outcome.',
        },
      ],
    },

    {
      title: 'Product Strategy',
      content:
        'Product strategy translates vision into a set of choices about customers, problems, positioning, capabilities, differentiation, business model, and investment priorities. Strategy is as much about deciding what not to do as deciding what to pursue.',
      highlights: [
        {
          title: 'Choice',
          description:
            'Strategy requires deliberate choices and trade-offs.',
        },
        {
          title: 'Focus',
          description:
            'Resources are directed toward the most important opportunities.',
        },
        {
          title: 'Differentiation',
          description:
            'Clarifies why customers should choose the product.',
        },
      ],
    },

    {
      title: 'Product Goals and Outcomes',
      content:
        'A product goal describes a meaningful outcome the team wants to achieve. Outcomes are different from outputs. A feature being released is an output; customers successfully completing a task more efficiently is an outcome.',
      highlights: [
        {
          title: 'Output',
          description:
            'What the team produces or releases.',
        },
        {
          title: 'Outcome',
          description:
            'The change in customer or business behavior resulting from the product.',
        },
        {
          title: 'Impact',
          description:
            'The broader business or customer effect created by the outcome.',
        },
      ],
    },

    {
      title: 'Product Metrics',
      content:
        'Product metrics should connect product activity to customer and business outcomes. Depending on the product, metrics may include activation, adoption, retention, conversion, task completion, engagement, revenue, customer satisfaction, support volume, or operational outcomes.',
      highlights: [
        {
          title: 'North Star metric',
          description:
            'A high-level metric intended to represent sustained customer value for the product.',
        },
        {
          title: 'Leading indicator',
          description:
            'A signal that may indicate future outcome performance.',
        },
        {
          title: 'Lagging indicator',
          description:
            'A result that becomes visible after an outcome has occurred.',
        },
      ],
    },

    {
      title: 'Prioritization',
      content:
        'Prioritization is the process of deciding what should receive attention and investment first. A good prioritization framework considers customer value, strategic alignment, revenue potential, risk reduction, urgency, effort, dependencies, technical feasibility, learning value, and opportunity cost.',
      highlights: [
        {
          title: 'Value',
          description:
            'Expected benefit to customers or the business.',
        },
        {
          title: 'Effort',
          description:
            'Expected investment required to deliver the opportunity.',
        },
        {
          title: 'Opportunity cost',
          description:
            'The value lost by choosing one opportunity instead of another.',
        },
      ],
    },

    {
      title: 'RICE Prioritization',
      content:
        'RICE is one prioritization framework using Reach, Impact, Confidence, and Effort. A common formulation is RICE score = Reach × Impact × Confidence ÷ Effort. It is a decision aid rather than a mathematical truth, and the quality of the inputs matters more than the precision of the resulting number.',
      highlights: [
        {
          title: 'Reach',
          description:
            'How many customers or users are expected to be affected.',
        },
        {
          title: 'Impact',
          description:
            'Expected magnitude of benefit.',
        },
        {
          title: 'Confidence',
          description:
            'How strong the evidence supporting the assumptions is.',
        },
        {
          title: 'Effort',
          description:
            'Expected work required to deliver the opportunity.',
        },
      ],
    },

    {
      title: 'Value vs Effort',
      content:
        'A simple value-versus-effort comparison can help teams identify high-value, low-effort opportunities and expose low-value, high-effort work. More complex decisions may require additional dimensions such as strategic importance, risk, dependencies, and learning value.',
      highlights: [
        {
          title: 'High value / low effort',
          description:
            'Often attractive opportunities to investigate or deliver quickly.',
        },
        {
          title: 'High value / high effort',
          description:
            'May require strategic planning and staged investment.',
        },
        {
          title: 'Low value / high effort',
          description:
            'Often candidates for deprioritization.',
        },
      ],
    },

    {
      title: 'Requirements',
      content:
        'Product requirements describe capabilities, behaviors, constraints, or outcomes that the product or system needs to satisfy. Good requirements are clear enough to create shared understanding while leaving appropriate implementation decisions to engineering.',
      highlights: [
        {
          title: 'Functional requirement',
          description:
            'Describes what the system should do.',
        },
        {
          title: 'Non-functional requirement',
          description:
            'Describes qualities such as performance, reliability, security, or scalability.',
        },
        {
          title: 'Constraint',
          description:
            'A condition that limits the solution space.',
        },
      ],
    },

    {
      title: 'User Stories',
      content:
        'User stories express a need from a user perspective. A common format is: As a [user], I want [capability], so that [value]. The story is a communication tool rather than a complete technical specification.',
      highlights: [
        {
          title: 'User',
          description:
            'Identifies who needs the capability.',
        },
        {
          title: 'Need',
          description:
            'Describes what the user wants to accomplish.',
        },
        {
          title: 'Value',
          description:
            'Explains why the capability matters.',
        },
      ],
    },

    {
      title: 'Acceptance Criteria',
      content:
        'Acceptance criteria define observable conditions that determine whether a requirement has been satisfied. They help product, engineering, QA, and stakeholders share the same understanding of expected behavior.',
      highlights: [
        {
          title: 'Observable',
          description:
            'The expected result can be checked.',
        },
        {
          title: 'Testable',
          description:
            'The criteria can be validated through appropriate testing or review.',
        },
        {
          title: 'Shared',
          description:
            'The criteria reduce ambiguity across functions.',
        },
      ],
    },

    {
      title: 'Product Roadmapping',
      content:
        'A product roadmap communicates the direction and sequence of important product outcomes or initiatives. A good roadmap provides strategic context without pretending that every future feature and date is certain.',
      highlights: [
        {
          title: 'Direction',
          description:
            'Shows where the product is heading.',
        },
        {
          title: 'Outcomes',
          description:
            'Focuses on customer or business results where practical.',
        },
        {
          title: 'Flexibility',
          description:
            'Allows priorities to change when evidence changes.',
        },
      ],
    },

    {
      title: 'Roadmap vs Project Plan',
      content:
        'A roadmap communicates product direction and priorities, while a project or delivery plan describes detailed execution activities, dependencies, milestones, and timelines for a particular initiative. Mixing the two can create false certainty about distant product commitments.',
      highlights: [
        {
          title: 'Roadmap',
          description:
            'Strategic directional view.',
        },
        {
          title: 'Delivery plan',
          description:
            'Detailed execution view.',
        },
        {
          title: 'Commitment level',
          description:
            'Near-term delivery commitments can be more specific than distant roadmap items.',
        },
      ],
    },

    {
      title: 'Stakeholder Management',
      content:
        'Product managers work with many stakeholders who may have different goals, incentives, and information. Effective stakeholder management means understanding their concerns, making decision criteria visible, communicating trade-offs, and maintaining alignment without allowing every stakeholder request to become a product priority.',
      highlights: [
        {
          title: 'Stakeholder',
          description:
            'A person or group affected by, influencing, or responsible for aspects of the product.',
        },
        {
          title: 'Alignment',
          description:
            'Shared understanding of goals, decisions, constraints, and trade-offs.',
        },
        {
          title: 'Trade-off',
          description:
            'A deliberate choice between competing benefits or constraints.',
        },
      ],
    },

    {
      title: 'Decision Making',
      content:
        'Product decisions should make assumptions, evidence, options, and trade-offs visible. A strong decision process identifies the decision owner, defines the problem, gathers relevant evidence, evaluates alternatives, makes a clear choice, records important rationale, and revisits the decision when new evidence materially changes the situation.',
      highlights: [
        {
          title: 'Decision owner',
          description:
            'The person accountable for making or coordinating the decision.',
        },
        {
          title: 'Evidence',
          description:
            'Information used to support the decision.',
        },
        {
          title: 'Decision record',
          description:
            'A concise record of the choice and important reasoning.',
        },
      ],
    },

    {
      title: 'Product Trade-offs',
      content:
        'Product management frequently balances scope, time, quality, cost, risk, customer value, and technical constraints. A mature product leader makes these trade-offs explicit instead of promising everything simultaneously.',
      highlights: [
        {
          title: 'Scope',
          description:
            'What capabilities are included.',
        },
        {
          title: 'Time',
          description:
            'When the capability needs to become available.',
        },
        {
          title: 'Quality',
          description:
            'The expected reliability, performance, usability, and maintainability.',
        },
        {
          title: 'Cost',
          description:
            'The investment required to build and operate the product.',
        },
      ],
    },

    {
      title: 'Product and Engineering Partnership',
      content:
        'Strong product organizations do not treat engineering as a feature factory. Product and engineering should jointly understand customer problems, technical constraints, risks, architecture, quality requirements, and possible solution approaches while retaining clear accountability for their respective decisions.',
      highlights: [
        {
          title: 'Product',
          description:
            'Focuses on customer problems, value, priorities, and outcomes.',
        },
        {
          title: 'Engineering',
          description:
            'Focuses on technical solution, quality, architecture, reliability, and implementation feasibility.',
        },
        {
          title: 'Partnership',
          description:
            'Both functions collaborate on trade-offs and learning.',
        },
      ],
    },

    {
      title: 'Technical Debt and Product Decisions',
      content:
        'Technical debt affects product decisions because accumulated engineering constraints can increase future delivery cost and risk. Product leaders should understand technical debt well enough to incorporate it into prioritization rather than treating it as an invisible engineering concern.',
      highlights: [
        {
          title: 'Technical debt',
          description:
            'Future cost created by technical compromises or accumulated complexity.',
        },
        {
          title: 'Engineering capacity',
          description:
            'Some capacity may need to be invested in reducing debt and risk.',
        },
        {
          title: 'Sustainable product',
          description:
            'Long-term product value depends on maintainable engineering foundations.',
        },
      ],
    },

    {
      title: 'Product Quality',
      content:
        'Quality is part of the product experience, not simply an engineering implementation detail. Reliability, performance, security, accessibility, usability, data accuracy, and operational stability can directly affect customer value and business outcomes.',
      highlights: [
        {
          title: 'Reliability',
          description:
            'The product behaves consistently and remains available as expected.',
        },
        {
          title: 'Performance',
          description:
            'The product responds within acceptable expectations.',
        },
        {
          title: 'Security',
          description:
            'The product protects users, data, and systems against relevant threats.',
        },
      ],
    },

    {
      title: 'Product Management for AI',
      content:
        'AI product management adds uncertainty around model behavior, data quality, evaluation, safety, cost, latency, provider dependencies, and user trust. AI product leaders should define measurable outcomes, establish evaluation criteria, understand technical constraints, and treat model behavior as something that requires continuous measurement rather than a one-time feature decision.',
      highlights: [
        {
          title: 'AI quality',
          description:
            'Includes dimensions such as correctness, relevance, safety, consistency, and usefulness.',
        },
        {
          title: 'AI economics',
          description:
            'Model, inference, storage, retrieval, and infrastructure costs affect product viability.',
        },
        {
          title: 'AI trust',
          description:
            'Users need understandable and reliable behavior from AI-powered features.',
        },
      ],
    },

    {
      title: 'AI Product Discovery',
      content:
        'AI discovery should validate whether AI is actually the right solution to the customer problem. Teams should compare AI against simpler alternatives, investigate data availability, evaluate expected quality, estimate operational cost, and identify risks such as hallucination, privacy, bias, or unpredictable behavior.',
      highlights: [
        {
          title: 'Problem first',
          description:
            'Do not assume AI is the solution before understanding the problem.',
        },
        {
          title: 'Feasibility',
          description:
            'Assess data, models, infrastructure, integrations, and operational requirements.',
        },
        {
          title: 'Risk',
          description:
            'Identify AI-specific quality, safety, privacy, and reliability risks early.',
        },
      ],
    },

    {
      title: 'Product Management for RAG',
      content:
        'For RAG products, product management should define the user problem and measurable answer quality rather than simply requesting “a chatbot.” The product team should understand retrieval quality, source coverage, citation expectations, latency, cost, access control, evaluation, and fallback behavior.',
      highlights: [
        {
          title: 'Use case',
          description:
            'Define the specific user task the RAG system should improve.',
        },
        {
          title: 'Groundedness',
          description:
            'Evaluate whether answers are supported by retrieved information.',
        },
        {
          title: 'Source experience',
          description:
            'Define how users should understand and inspect supporting information.',
        },
      ],
    },

    {
      title: 'Product Management for AI Voice',
      content:
        'AI voice product management requires balancing conversational quality, latency, call completion, business outcomes, cost per minute, telephony reliability, escalation behavior, and user trust. Product requirements should define measurable call outcomes and acceptable interaction behavior.',
      highlights: [
        {
          title: 'Call outcome',
          description:
            'The business result the voice interaction is intended to achieve.',
        },
        {
          title: 'Latency',
          description:
            'The time between user speech and agent response.',
        },
        {
          title: 'Escalation',
          description:
            'The conditions under which the AI should transfer or hand off to a human.',
        },
      ],
    },

    {
      title: 'Product Experimentation',
      content:
        'Experiments help product teams reduce uncertainty before making large investments. Experiments can include prototypes, pilots, feature flags, A/B tests, concierge workflows, pricing tests, usability studies, and technical proofs of concept.',
      highlights: [
        {
          title: 'Hypothesis',
          description:
            'A testable belief about a customer or business outcome.',
        },
        {
          title: 'Experiment',
          description:
            'A controlled method for gathering evidence.',
        },
        {
          title: 'Learning',
          description:
            'The evidence gained from the experiment that changes a future decision.',
        },
      ],
    },

    {
      title: 'Go-to-Market Considerations',
      content:
        'Product management often coordinates with marketing, sales, customer success, support, legal, finance, and operations when preparing a product for launch. A successful product launch requires more than engineering completion; customers need positioning, onboarding, support, documentation, pricing, and operational readiness.',
      highlights: [
        {
          title: 'Launch readiness',
          description:
            'The product and organization are prepared to support customers.',
        },
        {
          title: 'Positioning',
          description:
            'Clear explanation of the product’s value and differentiation.',
        },
        {
          title: 'Adoption',
          description:
            'Measures whether customers actually begin using the product successfully.',
        },
      ],
    },

    {
      title: 'Product Lifecycle',
      content:
        'Products typically move through stages such as discovery, introduction, growth, maturity, optimization, and eventually retirement or major transformation. The exact lifecycle differs by product, but the management priorities change as customer adoption, competition, economics, and technology evolve.',
      highlights: [
        {
          title: 'Introduction',
          description:
            'Focus on validating the problem, solution, positioning, and initial adoption.',
        },
        {
          title: 'Growth',
          description:
            'Focus on scaling adoption, reliability, economics, and product-market fit.',
        },
        {
          title: 'Maturity',
          description:
            'Focus on optimization, differentiation, retention, efficiency, and lifecycle decisions.',
        },
      ],
    },

    {
      title: 'Product Risk',
      content:
        'Product risk includes the possibility that customers do not want the product, the solution does not solve the problem effectively, the economics are unfavorable, technical constraints prevent delivery, legal or security requirements are unmet, or operational complexity makes the product unsustainable.',
      highlights: [
        {
          title: 'Value risk',
          description:
            'Customers may not value the proposed solution enough.',
        },
        {
          title: 'Feasibility risk',
          description:
            'The solution may be difficult or impossible to build within constraints.',
        },
        {
          title: 'Viability risk',
          description:
            'The product may not create sustainable business value.',
        },
        {
          title: 'Operational risk',
          description:
            'The product may be difficult or expensive to operate reliably.',
        },
      ],
    },

    {
      title: 'Product Management for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, TPM, AI Transformation Manager, or AI Delivery Manager, product management knowledge enables better trade-offs between business value and technical reality. The leader should be able to translate customer outcomes into technical requirements, understand architecture and operational implications, communicate risks to executives, and ensure engineering decisions remain connected to product strategy.',
      highlights: [
        {
          title: 'Business-to-technical translation',
          description:
            'Convert product goals into understandable technical outcomes and constraints.',
        },
        {
          title: 'Executive communication',
          description:
            'Explain trade-offs, risks, investment needs, and expected outcomes clearly.',
        },
        {
          title: 'Cross-functional alignment',
          description:
            'Create shared understanding across product, engineering, design, operations, and business stakeholders.',
        },
        {
          title: 'Outcome ownership',
          description:
            'Keep delivery connected to measurable customer and business results.',
        },
      ],
    },

    {
      title: 'What Interviewers Ask',
      content:
        'Common questions include: What does a Product Manager do? How do you prioritize features? How do you identify the right customer problem? What is the difference between output and outcome? How do you create a product roadmap? How do you handle conflicting stakeholder requests? How do you work with engineering? How do you measure product success? How would you manage an AI product differently from a traditional software product?',
      highlights: [
        {
          title: 'Prioritization',
          description:
            'Explain the decision framework and trade-offs rather than naming a framework alone.',
        },
        {
          title: 'Customer',
          description:
            'Show that product decisions begin with customer problems and evidence.',
        },
        {
          title: 'Engineering partnership',
          description:
            'Demonstrate respect for technical feasibility, quality, architecture, and operational reality.',
        },
      ],
    },

    {
      title: 'How to Answer in an Interview',
      content:
        'A strong answer is: “I see Product Management as the discipline of connecting customer problems, business outcomes, and engineering execution. I start by understanding the problem and defining the outcome we want to create. Then I work with customers and stakeholders to validate the need, partner with engineering to understand feasibility and risks, prioritize opportunities based on value and evidence, and translate the direction into clear requirements and measurable acceptance criteria. I also believe product management does not end at launch. We need to measure adoption, quality, customer outcomes, and business impact, then use that evidence to decide what to improve next. For AI products, I would additionally track evaluation quality, latency, cost, safety, and user trust.”',
      highlights: [
        {
          title: 'Problem first',
          description:
            'Start with the customer problem instead of jumping directly to features.',
        },
        {
          title: 'Evidence',
          description:
            'Use customer and product evidence to support prioritization.',
        },
        {
          title: 'Partnership',
          description:
            'Work closely with engineering while respecting technical constraints and quality.',
        },
        {
          title: 'Outcomes',
          description:
            'Measure whether the product actually creates the intended result.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'loop-engineering',
    'agile',
    'scrum',
    'product-roadmap',
    'requirements-engineering',
    'user-stories',
    'acceptance-criteria',
    'technical-debt',
    'code-review',
    'testing',
    'test-automation',
    'engineering-metrics',
    'developer-experience',
    'technical-program-management',
    'systems',
    'system-design',
    'distributed-systems',
    'microservices',
    'event-driven-systems',
    'scalability',
    'availability',
    'fault-tolerance',
    'high-availability',
    'production',
    'observability',
    'monitoring',
    'logging',
    'metrics',
    'distributed-tracing',
    'alerting',
    'incident-management',
    'sli-slo',
    'error-budgets',
    'root-cause-analysis',
    'disaster-recovery',
    'deployment',
    'deployment-strategy',
    'rollback-strategy',
    'blue-green-deployment',
    'canary-deployment',
    'feature-flags',
    'ci-cd',
    'github',
    'github-actions',
    'docker',
    'kubernetes',
    'terraform',
    'aws',
    'azure',
    'google-cloud',
    'rag',
  ],
}

export default productManagementKnowledge
