import type React from 'react'
import type { InteractionType } from '../types/learning'
import ClickInteraction from './interactions/ClickInteraction'
import FlowInteraction from './interactions/FlowInteraction'
import PipelineBuilder from './interactions/PipelineBuilder'
import DiagnosticInteraction from './interactions/DiagnosticInteraction'

export type InteractionComponent =
  React.ComponentType<Record<string, unknown>>

export const interactionRegistry: Partial<
  Record<InteractionType, InteractionComponent>
> = {
  click: ClickInteraction,
  flow: FlowInteraction,
  pipeline: PipelineBuilder,
  diagnostic: DiagnosticInteraction,
}