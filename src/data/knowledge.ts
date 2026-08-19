import type { Difficulty } from '../types/learning'
import { gitKnowledge } from './gitKnowledge'
import { githubKnowledge } from './githubKnowledge'
import { gitlabKnowledge } from './gitlabKnowledge'
import { jenkinsKnowledge } from './jenkinsKnowledge'
import { ciCdKnowledge } from './ciCdKnowledge'
import { deploymentKnowledge } from './deploymentKnowledge'
import { blueGreenDeploymentKnowledge } from './blueGreenDeploymentKnowledge'
import { canaryDeploymentKnowledge } from './canaryDeploymentKnowledge'
import { rollingDeploymentKnowledge } from './rollingDeploymentKnowledge'
import { releaseManagementKnowledge } from './releaseManagementKnowledge'
import { artifactManagementKnowledge } from './artifactManagementKnowledge'
import { featureFlagsKnowledge } from './featureFlagsKnowledge'
import { rollbackStrategyKnowledge } from './rollbackStrategyKnowledge'
import { deploymentStrategyKnowledge } from './deploymentStrategyKnowledge'
import { githubActionsKnowledge } from './githubActionsKnowledge'
import { ragKnowledge } from './ragKnowledge'
import { redisKnowledge } from './redisKnowledge'
import { dataKnowledge } from './dataKnowledge'
import { postgresqlKnowledge } from './postgresqlKnowledge'
import { mysqlKnowledge } from './mysqlKnowledge'
import { mongodbKnowledge } from './mongodbKnowledge'
import { sqliteKnowledge } from './sqliteKnowledge'
import { mariadbKnowledge } from './mariadbKnowledge'
import { oracleDatabaseKnowledge } from './oracleDatabaseKnowledge'
import { sqlServerKnowledge } from './sqlServerKnowledge'
import { elasticsearchKnowledge } from './elasticsearchKnowledge'
import { cassandraKnowledge } from './cassandraKnowledge'
import { dynamodbKnowledge } from './dynamodbKnowledge'
import { neo4jKnowledge } from './neo4jKnowledge'
import { clickhouseKnowledge } from './clickhouseKnowledge'
import { snowflakeKnowledge } from './snowflakeKnowledge'
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
import { fullStackKnowledge } from './fullStackKnowledge'
import { pythonKnowledge } from './pythonKnowledge'
import { fastapiKnowledge } from './fastapiKnowledge'
import { javascriptKnowledge } from './javascriptKnowledge'
import { typescriptKnowledge } from './typescriptKnowledge'
import { reactKnowledge } from './reactKnowledge'
import { nodejsKnowledge } from './nodejsKnowledge'
import { expressjsKnowledge } from './expressjsKnowledge'
import { nextjsKnowledge } from './nextjsKnowledge'
import { djangoKnowledge } from './djangoKnowledge'
import { flaskKnowledge } from './flaskKnowledge'
import { springBootKnowledge } from './springBootKnowledge'
import { dotnetKnowledge } from './dotnetKnowledge'
import { goKnowledge } from './goKnowledge'
import { rustKnowledge } from './rustKnowledge'
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
  dataKnowledge,
  postgresqlKnowledge,
  mysqlKnowledge,
  mongodbKnowledge,
  sqliteKnowledge,
  mariadbKnowledge,
  oracleDatabaseKnowledge,
  sqlServerKnowledge,
  elasticsearchKnowledge,
  cassandraKnowledge,
  dynamodbKnowledge,
  neo4jKnowledge,
  clickhouseKnowledge,
  snowflakeKnowledge,
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
  fullStackKnowledge,
  pythonKnowledge,
  fastapiKnowledge,
  javascriptKnowledge,
  typescriptKnowledge,
  reactKnowledge,
  nodejsKnowledge,
  expressjsKnowledge,
  nextjsKnowledge,
  djangoKnowledge,
  flaskKnowledge,
  springBootKnowledge,
  dotnetKnowledge,
  goKnowledge,
  rustKnowledge,
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
  githubActionsKnowledge,
  gitKnowledge,
  githubKnowledge,
  gitlabKnowledge,
  jenkinsKnowledge,
  ciCdKnowledge,
  deploymentKnowledge,
  blueGreenDeploymentKnowledge,
  canaryDeploymentKnowledge,
  rollingDeploymentKnowledge,
  releaseManagementKnowledge,
  artifactManagementKnowledge,
  featureFlagsKnowledge,
  rollbackStrategyKnowledge,
  deploymentStrategyKnowledge,
]

export const knowledgeBySlug = new Map(
  knowledgeEntries.map((entry) => [entry.slug, entry]),
)

export function getKnowledgeBySlug(slug: string) {
  return knowledgeBySlug.get(slug)
}

export default knowledgeEntries



































































































