import type { InteractionType } from '../types/learning'
import ClickInteraction from './interactions/ClickInteraction'
import FlowInteraction from './interactions/FlowInteraction'

export type InteractionComponent =
  React.ComponentType<Record<string, unknown>>

export const interactionRegistry: Partial<
  Record<InteractionType, InteractionComponent>
> = {
  click: ClickInteraction,
  flow: FlowInteraction,
}