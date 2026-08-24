import type {
  GuideDefinition,
} from './types'

type GuideActionsProps = {
  guides: GuideDefinition[]
  masterclassSlug: string
}

function GuideActions({
  guides,
  masterclassSlug,
}: GuideActionsProps) {
  if (guides.length === 0) {
    return null
  }

  const openGuide = (
    guide: GuideDefinition,
  ) => {
    window.location.hash =
      `#guide/${masterclassSlug}/${guide.type}`
  }

  return (
    <div className="edduu-guide-actions">

      {guides.map((guide) => (
        <button
          key={`${guide.type}-${guide.label}`}
          type="button"
          className="edduu-guide-action"
          onClick={() => openGuide(guide)}
        >
          {guide.label}
        </button>
      ))}

    </div>
  )
}

export default GuideActions
