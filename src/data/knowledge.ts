import type { Difficulty } from '../types/learning'
import { ragKnowledge } from './ragKnowledge'
import { redisKnowledge } from './redisKnowledge'
import { aiKnowledge } from './aiKnowledge'
import { genaiKnowledge } from './genaiKnowledge'
import { llmsKnowledge } from './llmsKnowledge'
import { agentsKnowledge } from './agentsKnowledge'
import { machineLearningKnowledge } from './machineLearningKnowledge'
import { deepLearningKnowledge } from './deepLearningKnowledge'
import { neuralNetworksKnowledge } from './neuralNetworksKnowledge'
import { transformersKnowledge } from './transformersKnowledge'
import { computerVisionKnowledge } from './computerVisionKnowledge'
import { multimodalAiKnowledge } from './multimodalAiKnowledge'
import { embeddingsKnowledge } from './embeddingsKnowledge'
import { promptEngineeringKnowledge } from './promptEngineeringKnowledge'
import { fineTuningKnowledge } from './fineTuningKnowledge'
import { aiEvaluationKnowledge } from './aiEvaluationKnowledge'
import { aiGuardrailsKnowledge } from './aiGuardrailsKnowledge'
import { pytorchKnowledge } from './pytorchKnowledge'
import { huggingFaceKnowledge } from './huggingFaceKnowledge'
import { langgraphKnowledge } from './langgraphKnowledge'
import { mcpKnowledge } from './mcpKnowledge'
import { restApisKnowledge } from './restApisKnowledge'
import { graphqlKnowledge } from './graphqlKnowledge'
import { grpcKnowledge } from './grpcKnowledge'
import { websocketsKnowledge } from './websocketsKnowledge'
import { webhooksKnowledge } from './webhooksKnowledge'
import { oauth2Knowledge } from './oauth2Knowledge'
import { openidConnectKnowledge } from './openidConnectKnowledge'
import { jwtKnowledge } from './jwtKnowledge'
import { apiGatewayKnowledge } from './apiGatewayKnowledge'
import { serviceMeshKnowledge } from './serviceMeshKnowledge'
import { kafkaKnowledge } from './kafkaKnowledge'
import { rabbitmqKnowledge } from './rabbitmqKnowledge'
import { pulsarKnowledge } from './pulsarKnowledge'
import { natsKnowledge } from './natsKnowledge'
import { eventDrivenArchitectureKnowledge } from './eventDrivenArchitectureKnowledge'
import { authenticationKnowledge } from './authenticationKnowledge'
import { identityKnowledge } from './identityKnowledge'
import { securityKnowledge } from './securityKnowledge'
import { owaspKnowledge } from './owaspKnowledge'
import { zeroTrustKnowledge } from './zeroTrustKnowledge'
import { auditLoggingKnowledge } from './auditLoggingKnowledge'
import { apiSecurityKnowledge } from './apiSecurityKnowledge'
import { authorizationKnowledge } from './authorizationKnowledge'
import { rbacKnowledge } from './rbacKnowledge'
import { abacKnowledge } from './abacKnowledge'
import { mfaKnowledge } from './mfaKnowledge'
import { singleSignOnKnowledge } from './singleSignOnKnowledge'
import { encryptionKnowledge } from './encryptionKnowledge'
import { tlsKnowledge } from './tlsKnowledge'
import { secretsManagementKnowledge } from './secretsManagementKnowledge'

export type KnowledgeHighlight = {
  title: string
  description: string
}

export type KnowledgeSection = {
  title: string
  content: string
  highlights?: KnowledgeHighlight[]
}

export type KnowledgeDefinition = {
  technologyId: string
  slug: string
  title: string
  summary: string
  difficulty: Difficulty
  sections: KnowledgeSection[]
  relatedTechnologyIds?: string[]
}

export const knowledgeEntries: KnowledgeDefinition[] = [
  ragKnowledge,
  redisKnowledge,
  aiKnowledge,
  genaiKnowledge,
  llmsKnowledge,
  agentsKnowledge,
  machineLearningKnowledge,
  deepLearningKnowledge,
  neuralNetworksKnowledge,
  transformersKnowledge,
  computerVisionKnowledge,
  multimodalAiKnowledge,
  embeddingsKnowledge,
  promptEngineeringKnowledge,
  fineTuningKnowledge,
  aiEvaluationKnowledge,
  aiGuardrailsKnowledge,
  pytorchKnowledge,
  huggingFaceKnowledge,
  langgraphKnowledge,
  mcpKnowledge,
  restApisKnowledge,
  graphqlKnowledge,
  grpcKnowledge,
  websocketsKnowledge,
  webhooksKnowledge,
  oauth2Knowledge,
  openidConnectKnowledge,
  jwtKnowledge,
  apiGatewayKnowledge,
  serviceMeshKnowledge,
  kafkaKnowledge,
  rabbitmqKnowledge,
  pulsarKnowledge,
  natsKnowledge,
  eventDrivenArchitectureKnowledge,
  securityKnowledge,
  owaspKnowledge,
  zeroTrustKnowledge,
  auditLoggingKnowledge,
  identityKnowledge,
  apiSecurityKnowledge,
  authenticationKnowledge,
  authorizationKnowledge,
  rbacKnowledge,
  abacKnowledge,
  mfaKnowledge,
  singleSignOnKnowledge,
  encryptionKnowledge,
  tlsKnowledge,
  secretsManagementKnowledge,
]

export const knowledgeBySlug = new Map(
  knowledgeEntries.map((entry) => [entry.slug, entry]),
)

export function getKnowledgeBySlug(slug: string) {
  return knowledgeBySlug.get(slug)
}

export default knowledgeEntries
























































