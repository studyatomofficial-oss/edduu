import type { KnowledgeDefinition } from './knowledge'

export const typescriptKnowledge: KnowledgeDefinition = {
  technologyId: 'typescript',
  slug: 'typescript',
  title: 'What is TypeScript?',
  summary:
    'TypeScript is a typed superset of JavaScript that adds static type checking, interfaces, generics, and other developer tooling capabilities while compiling to JavaScript.',
  difficulty: 'intermediate',
  sections: [
    {
      title: 'What is TypeScript?',
      content:
        'TypeScript is a programming language built on top of JavaScript. It adds an optional static type system and additional developer features while remaining compatible with the JavaScript ecosystem. TypeScript code is transformed into JavaScript that can run in browsers, Node.js, and other JavaScript runtimes.',
    },
    {
      title: 'Why do we use TypeScript?',
      content:
        'JavaScript is dynamically typed, which provides flexibility but can allow certain mistakes to appear only during runtime. TypeScript lets developers describe expected data types and relationships so many problems can be detected earlier during development.',
      highlights: [
        {
          title: 'Static type checking',
          description:
            'Checks many type-related problems before the program runs.',
        },
        {
          title: 'Better tooling',
          description:
            'Type information improves autocomplete, navigation, refactoring, and editor feedback.',
        },
        {
          title: 'Scalability',
          description:
            'Explicit types can make large codebases easier for teams to understand and maintain.',
        },
        {
          title: 'JavaScript compatibility',
          description:
            'TypeScript builds on JavaScript and can use the JavaScript ecosystem.',
        },
      ],
    },
    {
      title: 'TypeScript vs JavaScript',
      content:
        'TypeScript is not a completely separate runtime from JavaScript. TypeScript adds development-time capabilities such as type annotations, then the source is compiled or transformed into JavaScript. The resulting JavaScript is what executes in the target runtime.',
      highlights: [
        {
          title: 'JavaScript',
          description:
            'The runtime language executed by browsers and JavaScript runtimes.',
        },
        {
          title: 'TypeScript',
          description:
            'A typed language that builds on JavaScript and is transformed into JavaScript for execution.',
        },
        {
          title: 'Compile time',
          description:
            'The stage where TypeScript source is checked and transformed before execution.',
        },
        {
          title: 'Runtime',
          description:
            'The environment where the resulting JavaScript actually executes.',
        },
      ],
    },
    {
      title: 'Type Annotations',
      content:
        'Type annotations allow developers to explicitly describe the expected type of a variable, parameter, property, or return value. They improve documentation and allow TypeScript to detect incompatible usage.',
      highlights: [
        {
          title: 'Variable type',
          description:
            'Describes the expected type of a variable.',
        },
        {
          title: 'Parameter type',
          description:
            'Describes the expected type of a function parameter.',
        },
        {
          title: 'Return type',
          description:
            'Describes the type a function is expected to return.',
        },
      ],
    },
    {
      title: 'Primitive Types',
      content:
        'TypeScript supports JavaScript primitive types such as string, number, boolean, bigint, symbol, null, and undefined. These types can be combined to describe application data precisely.',
      highlights: [
        {
          title: 'string',
          description:
            'Represents text values.',
        },
        {
          title: 'number',
          description:
            'Represents numeric values.',
        },
        {
          title: 'boolean',
          description:
            'Represents true or false values.',
        },
        {
          title: 'null',
          description:
            'Represents an intentional absence of a value.',
        },
        {
          title: 'undefined',
          description:
            'Represents an uninitialized or missing value in many JavaScript situations.',
        },
      ],
    },
    {
      title: 'Arrays and Tuples',
      content:
        'TypeScript can describe arrays containing values of a specific type. Tuples allow developers to define a fixed structure where each position can have a specific type.',
      highlights: [
        {
          title: 'Array',
          description:
            'A collection containing values of a defined element type.',
        },
        {
          title: 'Tuple',
          description:
            'An ordered collection with a defined type for each position.',
        },
        {
          title: 'Readonly array',
          description:
            'An array type that prevents direct mutation through the typed interface.',
        },
      ],
    },
    {
      title: 'Objects and Type Aliases',
      content:
        'Type aliases allow developers to give names to custom type definitions. They are commonly used to describe object structures, unions, intersections, and other reusable type expressions.',
      highlights: [
        {
          title: 'Type alias',
          description:
            'A named type definition created using the type keyword.',
        },
        {
          title: 'Object type',
          description:
            'A type describing the expected properties of an object.',
        },
        {
          title: 'Optional property',
          description:
            'A property that may be absent from an object.',
        },
        {
          title: 'Readonly property',
          description:
            'A property that TypeScript prevents from being reassigned through the typed reference.',
        },
      ],
    },
    {
      title: 'Interfaces',
      content:
        'Interfaces describe the expected shape of objects and are widely used for public contracts between components, services, and application layers. They are especially useful when defining models and API-related structures.',
      highlights: [
        {
          title: 'Interface',
          description:
            'A named contract describing the structure of an object.',
        },
        {
          title: 'Interface extension',
          description:
            'Allows one interface to build upon another interface.',
        },
        {
          title: 'Structural typing',
          description:
            'Type compatibility is primarily based on the structure of values rather than their declared names.',
        },
      ],
    },
    {
      title: 'Union Types',
      content:
        'A union type allows a value to be one of several possible types. This is useful when APIs or application states legitimately support multiple representations.',
      highlights: [
        {
          title: 'Union',
          description:
            'A type representing one of several possible types.',
        },
        {
          title: 'Literal type',
          description:
            'A type representing a specific literal value such as a particular string or number.',
        },
        {
          title: 'Discriminated union',
          description:
            'A union whose members can be distinguished using a common discriminating property.',
        },
      ],
    },
    {
      title: 'Intersection Types',
      content:
        'Intersection types combine multiple type definitions into one type. The resulting value must satisfy the requirements of all constituent types.',
      highlights: [
        {
          title: 'Intersection',
          description:
            'Combines multiple types into a type that must satisfy all of them.',
        },
        {
          title: 'Composition',
          description:
            'Combining reusable type definitions to represent a richer structure.',
        },
      ],
    },
    {
      title: 'Type Inference',
      content:
        'TypeScript can often infer types without requiring developers to write explicit annotations everywhere. Good TypeScript code balances explicit types for important contracts with inference for straightforward local values.',
      highlights: [
        {
          title: 'Inference',
          description:
            'TypeScript determines a value’s type from its usage and available information.',
        },
        {
          title: 'Explicit annotation',
          description:
            'A developer directly specifies the expected type.',
        },
      ],
    },
    {
      title: 'Any, Unknown, and Never',
      content:
        'TypeScript provides special types for different situations. any disables much of the type checking, unknown represents a value whose type must be established before safe use, and never represents values that cannot occur or functions that do not successfully complete.',
      highlights: [
        {
          title: 'any',
          description:
            'Allows a value to bypass much of TypeScript’s type checking and should be used carefully.',
        },
        {
          title: 'unknown',
          description:
            'Represents an unknown value that must be narrowed before many operations are allowed.',
        },
        {
          title: 'never',
          description:
            'Represents impossible values or operations that never successfully complete.',
        },
      ],
    },
    {
      title: 'Generics',
      content:
        'Generics allow reusable functions, classes, interfaces, and types to work with different data types while preserving type relationships. They are one of the most important TypeScript features for building reusable libraries and application infrastructure.',
      highlights: [
        {
          title: 'Generic',
          description:
            'A reusable type or function parameterized by one or more types.',
        },
        {
          title: 'Type parameter',
          description:
            'A placeholder representing a type that will be supplied later.',
        },
        {
          title: 'Reusable abstraction',
          description:
            'A design that can work across multiple data types without losing useful type information.',
        },
      ],
    },
    {
      title: 'Enums and Literal Types',
      content:
        'TypeScript supports literal types and enums for representing constrained sets of values. In many modern codebases, string literal unions are preferred when a lightweight type-level representation is sufficient.',
      highlights: [
        {
          title: 'Literal union',
          description:
            'A union containing a specific set of allowed literal values.',
        },
        {
          title: 'Enum',
          description:
            'A TypeScript construct for defining a named set of related constants.',
        },
      ],
    },
    {
      title: 'Narrowing',
      content:
        'Type narrowing allows TypeScript to determine a more specific type based on runtime checks. Common techniques include typeof checks, equality checks, in checks, instanceof, discriminated unions, and user-defined type guards.',
      highlights: [
        {
          title: 'Narrowing',
          description:
            'Reducing a broad type to a more specific type based on available evidence.',
        },
        {
          title: 'Type guard',
          description:
            'A runtime check that provides TypeScript with information for narrowing a type.',
        },
        {
          title: 'Discriminant',
          description:
            'A property used to distinguish between members of a union.',
        },
      ],
    },
    {
      title: 'Type Assertions',
      content:
        'Type assertions tell TypeScript how the developer wants a value to be treated. Assertions do not perform runtime validation, so they should not be used as a substitute for validating untrusted external data.',
      highlights: [
        {
          title: 'Type assertion',
          description:
            'A compile-time instruction describing how a value should be treated by TypeScript.',
        },
        {
          title: 'Runtime validation',
          description:
            'Actual checks performed while the program runs to confirm that external data has the expected structure.',
        },
      ],
    },
    {
      title: 'Functions in TypeScript',
      content:
        'TypeScript allows developers to describe function parameter types, return types, optional parameters, default parameters, rest parameters, overloaded signatures, and generic relationships.',
      highlights: [
        {
          title: 'Function signature',
          description:
            'The typed contract describing a function’s parameters and return value.',
        },
        {
          title: 'Optional parameter',
          description:
            'A parameter that may be omitted when calling a function.',
        },
        {
          title: 'Rest parameter',
          description:
            'Collects multiple arguments into an array-like parameter.',
        },
        {
          title: 'Function overload',
          description:
            'Provides multiple callable signatures for a function while maintaining a shared implementation.',
        },
      ],
    },
    {
      title: 'Classes in TypeScript',
      content:
        'TypeScript extends JavaScript classes with access modifiers, parameter properties, abstract classes, interfaces, and other type-system features. These capabilities can make object-oriented application code more explicit.',
      highlights: [
        {
          title: 'public',
          description:
            'A member accessible from outside the class.',
        },
        {
          title: 'private',
          description:
            'A member intended to be accessible only within its class according to TypeScript’s type system.',
        },
        {
          title: 'protected',
          description:
            'A member accessible within the class and derived classes according to TypeScript’s type system.',
        },
        {
          title: 'abstract class',
          description:
            'A class intended to provide a base abstraction rather than be instantiated directly.',
        },
      ],
    },
    {
      title: 'Modules and Imports',
      content:
        'TypeScript uses JavaScript’s module system with import and export statements. Modules allow large applications to separate functionality and expose explicit public interfaces between files.',
      highlights: [
        {
          title: 'export',
          description:
            'Makes a declaration available to other modules.',
        },
        {
          title: 'import',
          description:
            'Loads declarations from another module.',
        },
        {
          title: 'Module boundary',
          description:
            'An explicit boundary defining which functionality a module exposes to other parts of the application.',
        },
      ],
    },
    {
      title: 'tsconfig.json',
      content:
        'The tsconfig.json file defines TypeScript compiler configuration for a project. It can control strictness, module behavior, target JavaScript version, path configuration, included files, and other compiler behavior.',
      highlights: [
        {
          title: 'Compiler option',
          description:
            'A setting controlling TypeScript compilation or type-checking behavior.',
        },
        {
          title: 'target',
          description:
            'Controls the JavaScript language level generated by the compiler.',
        },
        {
          title: 'module',
          description:
            'Controls the module system used for generated JavaScript and module resolution behavior.',
        },
        {
          title: 'strict',
          description:
            'Enables a family of stronger type-checking options.',
        },
      ],
    },
    {
      title: 'Strict Mode',
      content:
        'TypeScript strictness options improve type safety by detecting more potential errors during development. Strict mode is commonly recommended for production applications because it reduces ambiguity and catches mistakes earlier.',
      highlights: [
        {
          title: 'Strict null checks',
          description:
            'Requires null and undefined to be considered explicitly when appropriate.',
        },
        {
          title: 'No implicit any',
          description:
            'Helps prevent values from silently receiving the any type.',
        },
        {
          title: 'Type safety',
          description:
            'The ability to detect incompatible or unsafe type usage before runtime.',
        },
      ],
    },
    {
      title: 'TypeScript and React',
      content:
        'TypeScript is widely used with React to define component props, state, event types, API models, hooks, and shared application contracts. This is particularly useful in large frontend codebases where many developers work on the same application.',
      highlights: [
        {
          title: 'Props type',
          description:
            'Defines the expected inputs for a React component.',
        },
        {
          title: 'Event type',
          description:
            'Describes the structure of browser or React events handled by a component.',
        },
        {
          title: 'API model',
          description:
            'A type describing the structure of data exchanged with backend services.',
        },
      ],
    },
    {
      title: 'TypeScript and Node.js',
      content:
        'TypeScript is commonly used for Node.js backend applications. It can provide typed request models, service interfaces, database models, configuration types, and integration contracts while compiling into JavaScript for execution by Node.js.',
      highlights: [
        {
          title: 'Backend types',
          description:
            'Type definitions describing server-side data and service contracts.',
        },
        {
          title: 'Service contract',
          description:
            'A typed interface describing how application components interact.',
        },
        {
          title: 'Runtime JavaScript',
          description:
            'The JavaScript output that ultimately executes in the Node.js runtime.',
        },
      ],
    },
    {
      title: 'TypeScript and APIs',
      content:
        'TypeScript is useful for representing API request and response contracts. However, compile-time types alone cannot guarantee that external data is valid at runtime. Production applications should validate untrusted API responses when correctness or security requires it.',
      highlights: [
        {
          title: 'Compile-time contract',
          description:
            'A type definition checked by TypeScript during development.',
        },
        {
          title: 'Runtime contract',
          description:
            'Actual validation of data received while the application is running.',
        },
        {
          title: 'Schema validation',
          description:
            'Validating external data against a defined structure and set of constraints.',
        },
      ],
    },
    {
      title: 'TypeScript and API Clients',
      content:
        'Typed API clients can reduce repetitive mistakes by defining the expected request and response structures. In larger systems, teams may generate TypeScript types or clients from API specifications such as OpenAPI.',
      highlights: [
        {
          title: 'Typed client',
          description:
            'An API client whose requests and responses have explicit type information.',
        },
        {
          title: 'OpenAPI generation',
          description:
            'Generating client types or code from an OpenAPI API specification.',
        },
        {
          title: 'Contract consistency',
          description:
            'Keeping frontend and backend expectations aligned around shared API structures.',
        },
      ],
    },
    {
      title: 'TypeScript and AI Applications',
      content:
        'TypeScript is increasingly important for AI product development because many AI interfaces, web applications, Node.js services, SDKs, and AI application frameworks use the JavaScript and TypeScript ecosystem. It is particularly useful for defining structured AI responses, tool inputs, API contracts, and frontend state.',
      highlights: [
        {
          title: 'Structured output',
          description:
            'AI-generated information represented according to a defined data structure.',
        },
        {
          title: 'Tool schema',
          description:
            'A structured definition describing the inputs an AI system can provide to a tool.',
        },
        {
          title: 'AI application contract',
          description:
            'Typed interfaces between AI workflows, backend services, and frontend applications.',
        },
      ],
    },
    {
      title: 'TypeScript Build Process',
      content:
        'A typical TypeScript project contains .ts or .tsx source files. The TypeScript compiler or a build tool checks the source and transforms it into JavaScript. Bundlers may then combine and optimize the generated or source modules for deployment.',
      highlights: [
        {
          title: '.ts',
          description:
            'A common file extension for TypeScript source files.',
        },
        {
          title: '.tsx',
          description:
            'A TypeScript file extension commonly used when JSX syntax is included.',
        },
        {
          title: 'Type checking',
          description:
            'Analyzing code against the TypeScript type system.',
        },
        {
          title: 'Transpilation',
          description:
            'Transforming TypeScript source into JavaScript source that can execute in the target runtime.',
        },
      ],
    },
    {
      title: 'TypeScript Testing',
      content:
        'TypeScript applications can use the same broad testing strategies as JavaScript applications, including unit, integration, component, and end-to-end testing. Type checking complements testing but does not replace runtime tests.',
      highlights: [
        {
          title: 'Type checking',
          description:
            'Detects many structural and type-related problems before execution.',
        },
        {
          title: 'Runtime test',
          description:
            'Executes application behavior and verifies actual runtime outcomes.',
        },
        {
          title: 'Test coverage',
          description:
            'A measurement of how much application behavior is exercised by tests.',
        },
      ],
    },
    {
      title: 'TypeScript Performance',
      content:
        'TypeScript itself is primarily a development-time tool, so type annotations generally do not create runtime overhead after compilation. Application performance depends on the resulting JavaScript, runtime behavior, network usage, rendering, and architecture.',
      highlights: [
        {
          title: 'Development-time',
          description:
            'Work performed during coding, checking, and building rather than during application execution.',
        },
        {
          title: 'Runtime overhead',
          description:
            'Additional computation or resource usage while the application executes.',
        },
        {
          title: 'Generated JavaScript',
          description:
            'The JavaScript output that executes in the target runtime.',
        },
      ],
    },
    {
      title: 'TypeScript Security',
      content:
        'TypeScript can improve developer confidence and reduce certain classes of programming errors, but types do not automatically make an application secure. Security still requires runtime validation, authentication, authorization, secure dependency management, safe input handling, and proper secret management.',
      highlights: [
        {
          title: 'Type safety is not security',
          description:
            'Compile-time type checking cannot replace runtime security controls.',
        },
        {
          title: 'Runtime validation',
          description:
            'Validates data that enters the system from untrusted sources.',
        },
        {
          title: 'Dependency security',
          description:
            'Managing vulnerabilities and supply-chain risks in third-party packages.',
        },
      ],
    },
    {
      title: 'Common TypeScript Mistakes',
      content:
        'Common mistakes include using any everywhere, relying on type assertions instead of validating external data, creating overly complicated types, disabling strictness to hide errors, duplicating API contracts manually, and assuming compile-time types guarantee runtime correctness.',
      highlights: [
        {
          title: 'any everywhere',
          description:
            'Removes much of the benefit of TypeScript’s type system.',
        },
        {
          title: 'Unsafe assertion',
          description:
            'Telling the compiler a value has a type without actually validating that value.',
        },
        {
          title: 'Over-engineered types',
          description:
            'Creating type definitions so complex that they reduce maintainability rather than improving it.',
        },
        {
          title: 'Disabled strictness',
          description:
            'Reducing type-checking safeguards simply to suppress development errors.',
        },
      ],
    },
    {
      title: 'TypeScript in Production Engineering',
      content:
        'For production teams, TypeScript is valuable not because every developer must write highly complex type definitions, but because shared type contracts can improve collaboration, refactoring safety, API consistency, and maintainability across large applications.',
    },
    {
      title: 'TypeScript for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, the important concepts are type safety, API contracts, build pipelines, frontend-backend interfaces, developer productivity, maintainability, and team-scale engineering practices. You do not need to become a TypeScript language specialist to make strong architectural and delivery decisions.',
    },
    {
      title: 'Explore TypeScript in EDDUU',
      content:
        'EDDUU connects TypeScript with JavaScript, React, Node.js, Express.js, Next.js, Full Stack Engineering, REST APIs, GraphQL, WebSockets, Webhooks, testing, security, AI applications, and production engineering.',
    },
  ],
  relatedTechnologyIds: [
    'javascript',
    'react',
    'nodejs',
    'expressjs',
    'nextjs',
    'full-stack',
    'rest-apis',
    'graphql',
    'websockets',
    'webhooks',
  ],
}

export default typescriptKnowledge
