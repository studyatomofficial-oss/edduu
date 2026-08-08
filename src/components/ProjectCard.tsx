type ProjectCardProps = {
  number: string
  title: string
  description: string
  tags: string[]
  learningLine: string
}

function ProjectCard({
  number,
  title,
  description,
  tags,
  learningLine,
}: ProjectCardProps) {
  return (
    <article className="edduu-project-card">
      <div className="edduu-project-number">{number}</div>

      <h3 className="edduu-project-title">{title}</h3>

      <p className="edduu-project-description">
        {description}
      </p>

      <div className="edduu-project-tags">
        {tags.map((tag) => (
          <span
            className="edduu-project-tag"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="edduu-project-learning">
        {learningLine}
      </p>

      <button
        type="button"
        className="edduu-project-cta"
      >
        Explore the System →
      </button>
    </article>
  )
}

export default ProjectCard