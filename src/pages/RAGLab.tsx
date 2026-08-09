import LearningLabShell from '../engine/LearningLabShell'
import { ragExperience } from '../experiences/rag/rag'

function RAGLab() {
  return (
    <LearningLabShell
      experience={ragExperience}
    />
  )
}

export default RAGLab