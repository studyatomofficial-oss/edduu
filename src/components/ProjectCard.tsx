type ProjectCardProps = {
  number: string
  title: string
  description: string
  tags: string[]
  learningLine: string
  href: string
}

function ProjectCard({
  number,
  title,
  description,
  tags,
  learningLine,
  href,
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
          <span className="edduu-project-tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <p className="edduu-project-learning">{learningLine}</p>

      <a href={href} className="edduu-project-cta">
        Explore the System →
      </a>
    </article>
  )
}

export default ProjectCard