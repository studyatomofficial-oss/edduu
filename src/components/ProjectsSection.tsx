import ProjectCard from './ProjectCard'

const projects = [
  {
    number: '01',
    title: 'AI Knowledge Assistant',
    description:
      'An AI system that retrieves relevant knowledge before generating an answer, making the response more grounded and context-aware.',
    tags: ['RAG', 'Embeddings', 'Vector DB', 'LLM', 'Evaluation'],
    learningLine:
      'Learn how retrieval changes what an AI system knows before it answers.',
  },
  {
    number: '02',
    title: 'E-Commerce Platform',
    description:
      'A production-oriented commerce system exploring search, scale, transactions and the engineering challenges behind reliable online purchases.',
    tags: [
      'React',
      'API',
      'PostgreSQL',
      'Redis',
      'Payments',
      'System Design',
    ],
    learningLine:
      'See what happens when a simple shopping experience becomes a distributed system.',
  },
  {
    number: '03',
    title: 'AI Agent',
    description:
      'An agentic system that turns a goal into a plan, uses tools, observes results and determines what to do next.',
    tags: ['LLM', 'Tools', 'Planning', 'Agent State', 'Evaluation'],
    learningLine:
      'Experience the difference between an AI that answers and an AI that acts.',
  },
]

function ProjectsSection() {
  return (
    <section className="edduu-section edduu-projects">
      <div className="edduu-container">
        <div className="edduu-projects-header">
          <p className="edduu-section-eyebrow">What I Build</p>

          <h2 className="edduu-section-title">
            Real systems. Practical AI. Production thinking.
          </h2>

          <p className="edduu-section-description">
            Explore systems that connect technology, architecture and
            real-world engineering decisions—not isolated tutorials or
            disconnected demos.
          </p>
        </div>

        <div className="edduu-projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.number}
              number={project.number}
              title={project.title}
              description={project.description}
              tags={project.tags}
              learningLine={project.learningLine}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection