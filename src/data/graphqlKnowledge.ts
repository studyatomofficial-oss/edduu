import type { KnowledgeDefinition } from './knowledge'

export const graphqlKnowledge: KnowledgeDefinition = {
  technologyId: 'graphql',
  slug: 'graphql',
  title: 'What is GraphQL?',
  summary:
    'GraphQL is an API query language and runtime that allows clients to request the specific data they need through a strongly typed schema.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is GraphQL?',
      content:
        'GraphQL is a query language for APIs and a runtime for executing those queries against a defined schema. Instead of forcing a client to consume a fixed response shape, GraphQL allows the client to describe the data it needs. The server validates that request against the schema and resolves the requested fields.',
    },
    {
      title: 'Why do we need GraphQL?',
      content:
        'Traditional APIs can sometimes return more data than a client needs or require multiple requests to assemble information from related resources. GraphQL addresses these problems by allowing clients to request a specific shape of data in a single query. This can be particularly useful for applications with complex data relationships or clients with different data requirements.',
    },
    {
      title: 'How does GraphQL work?',
      content:
        'A GraphQL server exposes a schema that describes available types, fields, queries, mutations, and other capabilities. A client sends a GraphQL operation describing the fields it wants. The server validates the operation against the schema, resolves the requested fields, and returns a response whose structure generally mirrors the query.',
    },
    {
      title: 'The GraphQL architecture',
      content:
        'GraphQL separates the API contract from the underlying data sources. A GraphQL server can resolve fields from databases, REST APIs, microservices, files, or other systems. The client interacts with the GraphQL schema rather than needing to know how each piece of data is stored internally.',
      highlights: [
        {
          title: 'Schema',
          description:
            'Defines the types, fields, relationships, and operations available through the GraphQL API.',
        },
        {
          title: 'Query',
          description:
            'Requests data from the GraphQL server.',
        },
        {
          title: 'Mutation',
          description:
            'Requests a state-changing operation such as creating, updating, or deleting data.',
        },
        {
          title: 'Resolver',
          description:
            'Application logic responsible for obtaining the value of a requested field.',
        },
        {
          title: 'Type',
          description:
            'Defines the structure and relationships of data exposed by the GraphQL schema.',
        },
        {
          title: 'Client',
          description:
            'The application that sends GraphQL operations and consumes the returned data.',
        },
      ],
    },
    {
      title: 'Important GraphQL concepts',
      content:
        'Several concepts form the foundation of GraphQL API design.',
      highlights: [
        {
          title: 'Schema',
          description:
            'The contract that describes what data and operations an API exposes.',
        },
        {
          title: 'Field',
          description:
            'A specific piece of data that can be requested from a GraphQL type.',
        },
        {
          title: 'Resolver',
          description:
            'The logic used by the server to obtain the value for a field.',
        },
        {
          title: 'Query',
          description:
            'A read operation that specifies the exact fields the client wants.',
        },
        {
          title: 'Mutation',
          description:
            'A write operation used to change application state.',
        },
        {
          title: 'Subscription',
          description:
            'A mechanism for receiving updates when relevant data changes.',
        },
      ],
    },
    {
      title: 'GraphQL queries',
      content:
        'A GraphQL query describes the shape of the response the client wants. If a client requests a user with a name and email, it can ask for those fields without requesting every field available on the user type. Nested selections can also retrieve related information according to the schema.',
      highlights: [
        {
          title: 'Selection set',
          description:
            'The fields that the client asks the server to return.',
        },
        {
          title: 'Nested selection',
          description:
            'Allows related fields and objects to be requested within the same operation.',
        },
        {
          title: 'Variable',
          description:
            'A reusable input value supplied separately from the query definition.',
        },
        {
          title: 'Argument',
          description:
            'A value supplied to a field to influence what data or operation is requested.',
        },
      ],
    },
    {
      title: 'GraphQL mutations',
      content:
        'Mutations are used when an application needs to change data or trigger a state-changing operation. A mutation can accept structured input and return selected fields describing the result. The schema determines which mutations are available and what input and output types they use.',
    },
    {
      title: 'GraphQL types and schema design',
      content:
        'A strong GraphQL schema is central to a reliable API. Types should represent meaningful business concepts rather than simply exposing database tables. Relationships between types allow clients to navigate connected information while the schema provides a consistent contract between API producers and consumers.',
      highlights: [
        {
          title: 'Object type',
          description:
            'Represents a structured entity with defined fields.',
        },
        {
          title: 'Scalar',
          description:
            'Represents a primitive value such as a string, integer, Boolean, or custom scalar.',
        },
        {
          title: 'Enum',
          description:
            'Defines a fixed set of allowed values.',
        },
        {
          title: 'Input type',
          description:
            'Defines structured data that can be supplied to a query or mutation.',
        },
        {
          title: 'Interface',
          description:
            'Defines common fields that multiple object types can implement.',
        },
        {
          title: 'Union',
          description:
            'Represents a result that may be one of several possible object types.',
        },
      ],
    },
    {
      title: 'GraphQL vs REST APIs',
      content:
        'REST and GraphQL are both useful API approaches but optimize for different interaction models. REST commonly organizes an API around resources and HTTP methods, while GraphQL exposes a schema through which clients request specific fields. GraphQL can reduce over-fetching and multiple data-fetching requests, while REST can be simpler to cache, operate, and understand for straightforward resource-oriented systems.',
      highlights: [
        {
          title: 'REST',
          description:
            'Typically exposes resource-oriented endpoints using HTTP methods and predefined response structures.',
        },
        {
          title: 'GraphQL',
          description:
            'Allows clients to request a specific data shape through a schema.',
        },
        {
          title: 'Over-fetching',
          description:
            'Occurs when an API returns more data than the client actually needs.',
        },
        {
          title: 'Under-fetching',
          description:
            'Occurs when a client needs multiple API requests to collect all required information.',
        },
      ],
    },
    {
      title: 'GraphQL and databases',
      content:
        'GraphQL does not require a specific database. Resolvers can obtain data from relational databases, NoSQL databases, REST services, microservices, caches, or other sources. The GraphQL layer acts as an API contract while the underlying data-access layer remains an implementation detail.',
    },
    {
      title: 'GraphQL and performance',
      content:
        'GraphQL gives clients flexibility, but that flexibility can create performance challenges. A deeply nested query may trigger many resolver operations or database requests. Production systems therefore need query complexity controls, depth limits, batching, caching, efficient data loading, and careful resolver design.',
      highlights: [
        {
          title: 'N+1 problem',
          description:
            'Occurs when resolving a collection causes a separate data request for each individual item.',
        },
        {
          title: 'DataLoader',
          description:
            'A common batching and caching pattern used to reduce repeated data-access operations during request execution.',
        },
        {
          title: 'Query depth',
          description:
            'Measures how deeply nested a client query is and can be limited to prevent expensive operations.',
        },
        {
          title: 'Query complexity',
          description:
            'Estimates the computational cost of a query so expensive requests can be rejected or controlled.',
        },
      ],
    },
    {
      title: 'GraphQL caching',
      content:
        'Caching GraphQL responses can require more thought than caching conventional REST resources because many different queries can request different shapes of data from the same endpoint. Systems may use application-level caching, resolver caching, persisted queries, client caching, or carefully designed response caching depending on the architecture.',
    },
    {
      title: 'GraphQL security',
      content:
        'GraphQL security requires controlling not only who can access the API but also what queries they are allowed to execute. Authentication identifies the caller, authorization controls access to resources and fields, and query limits help protect the system from expensive or abusive requests.',
      highlights: [
        {
          title: 'Authentication',
          description:
            'Verifies the identity of the API caller.',
        },
        {
          title: 'Authorization',
          description:
            'Determines which resources, fields, and operations the caller may access.',
        },
        {
          title: 'Depth limiting',
          description:
            'Restricts excessively nested queries that could consume significant resources.',
        },
        {
          title: 'Complexity limiting',
          description:
            'Controls queries that are computationally expensive even when they are not deeply nested.',
        },
        {
          title: 'Rate limiting',
          description:
            'Restricts how frequently clients can send requests.',
        },
      ],
    },
    {
      title: 'GraphQL in real products',
      content:
        'GraphQL can be useful for mobile applications, web applications, SaaS platforms, content platforms, marketplaces, social products, dashboards, and systems where clients need flexible access to connected data. It is especially useful when different clients require different views of the same underlying domain.',
    },
    {
      title: 'GraphQL in production',
      content:
        'Production GraphQL systems require schema governance, authentication, authorization, query limits, resolver performance, observability, error handling, caching, versioning strategy, and protection against expensive requests. Teams should monitor which fields and operations are actually used so that schema evolution can remain safe.',
      highlights: [
        {
          title: 'Schema governance',
          description:
            'Controls how the API schema evolves and ensures changes remain understandable and compatible.',
        },
        {
          title: 'Field usage monitoring',
          description:
            'Shows which fields and operations consumers actually use before changes or deprecations are introduced.',
        },
        {
          title: 'Persisted queries',
          description:
            'Allows approved query definitions to be stored and referenced rather than accepting arbitrary query text.',
        },
        {
          title: 'Observability',
          description:
            'Tracks query behavior, resolver latency, errors, and downstream dependencies.',
        },
        {
          title: 'Deprecation',
          description:
            'Marks older schema fields or operations for eventual removal while giving consumers time to migrate.',
        },
      ],
    },
    {
      title: 'Common GraphQL mistakes',
      content:
        'Common mistakes include exposing database structure directly, allowing unrestricted query depth, ignoring the N+1 problem, putting authorization only at the endpoint level, creating an overly complicated schema, and changing fields without understanding which consumers depend on them.',
      highlights: [
        {
          title: 'Unrestricted queries',
          description:
            'Allows clients to execute requests whose resource consumption has not been controlled.',
        },
        {
          title: 'N+1 queries',
          description:
            'Creates many unnecessary downstream data requests during field resolution.',
        },
        {
          title: 'Weak field authorization',
          description:
            'Protects the API endpoint but fails to control access to sensitive fields or nested resources.',
        },
        {
          title: 'Database-shaped schema',
          description:
            'Exposes internal storage structures instead of modeling stable business concepts.',
        },
        {
          title: 'Unsafe schema changes',
          description:
            'Removes or changes fields without checking actual consumer usage.',
        },
      ],
    },
    {
      title: 'Explore GraphQL in EDDUU',
      content:
        'EDDUU connects GraphQL with REST APIs, gRPC, WebSockets, Webhooks, Authentication, Authorization, Databases, Redis, API Gateway, Microservices, Security, and Observability.',
    },
  ],
  relatedTechnologyIds: [
    'rest-apis',
    'grpc',
    'websockets',
    'webhooks',
    'oauth2',
    'jwt',
    'api-gateway',
    'microservices',
    'postgresql',
    'redis',
    'authentication',
    'authorization',
    'security',
    'observability',
  ],
}

export default graphqlKnowledge
