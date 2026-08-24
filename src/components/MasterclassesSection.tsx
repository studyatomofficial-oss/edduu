import { useLayoutEffect, useRef } from 'react'
import { masterclassesByLevel } from '../data/masterclasses'

const levels = [
  {
    key: 'basic',
    number: '01',
    title: 'BASIC',
    subtitle: 'Build the foundation.',
  },
  {
    key: 'intermediate',
    number: '02',
    title: 'INTERMEDIATE',
    subtitle: 'Build and operate real systems.',
  },
  {
    key: 'advanced',
    number: '03',
    title: 'ADVANCED',
    subtitle: 'Design intelligent production systems.',
  },
] as const

function MasterclassesSection() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const viewportRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const viewport = viewportRef.current
    const track = trackRef.current

    if (!section || !viewport || !track) {
      return
    }

    let frame = 0

    const update = () => {
      cancelAnimationFrame(frame)

      frame = requestAnimationFrame(() => {
        const viewportWidth = viewport.clientWidth
        const trackWidth = track.scrollWidth

        /*
         * The horizontal distance is the exact amount required
         * to move the LAST CARD completely into the viewport.
         */
        const horizontalDistance = Math.max(
          0,
          trackWidth - viewportWidth + 100,
        )

        /*
         * Vertical scrolling is converted into horizontal movement.
         * The section remains active until the entire horizontal
         * journey is completed.
         */
        section.style.height =
          `${window.innerHeight + horizontalDistance}px`

        const sectionTop = section.getBoundingClientRect().top

        const availableScroll =
          section.offsetHeight - window.innerHeight

        const progress =
          availableScroll <= 0
            ? 0
            : Math.min(
                1,
                Math.max(
                  0,
                  -sectionTop / availableScroll,
                ),
              )

        const translateX =
          horizontalDistance * progress

        track.style.transform =
          `translate3d(${-translateX}px, 0, 0)`
      })
    }

    update()

    window.addEventListener('scroll', update, {
      passive: true,
    })

    window.addEventListener('resize', update)

    const resizeObserver = new ResizeObserver(update)

    resizeObserver.observe(viewport)
    resizeObserver.observe(track)

    return () => {
      cancelAnimationFrame(frame)

      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)

      resizeObserver.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="edduu-masterclasses"
      id="masterclasses"
    >
      <div className="edduu-masterclasses-sticky">
        <div className="edduu-container">
          <header className="edduu-masterclasses-heading">
            <p className="edduu-section-eyebrow">
              MASTERCLASSES
            </p>

            <h2 className="edduu-section-title">
              From absolute zero to production-grade engineering and AI.
            </h2>

            <p className="edduu-section-description">
              A structured journey through modern software, systems,
              infrastructure, engineering and artificial intelligence.
            </p>
          </header>

          <div
            ref={viewportRef}
            className="edduu-masterclasses-viewport"
          >
            <div
              ref={trackRef}
              className="edduu-masterclasses-track"
            >
              {levels.map((level) => (
                <article
                  className={`edduu-masterclass-card edduu-masterclass-${level.key}`}
                  key={level.key}
                >
                  <div className="edduu-masterclass-card-header">
                    <span>{level.number}</span>

                    <div>
                      <p>{level.title}</p>
                      <h3>{level.subtitle}</h3>
                    </div>
                  </div>

                  <div className="edduu-masterclass-list">
                    {masterclassesByLevel[level.key].map(
                      (masterclass) => (
                        <a
                          key={masterclass.number}
                          href={`#masterclass/${masterclass.slug}`}
                          className="edduu-masterclass-item"
                        >
                          <span>
                            {String(masterclass.number).padStart(
                              2,
                              '0',
                            )}
                          </span>

                          <strong>
                            {masterclass.title}
                          </strong>

                          <i aria-hidden="true">
                            ?
                          </i>
                        </a>
                      ),
                    )}
                  </div>

                  <footer className="edduu-masterclass-card-footer">
                    {masterclassesByLevel[level.key].length}{' '}
                    MASTERCLASSES
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MasterclassesSection





