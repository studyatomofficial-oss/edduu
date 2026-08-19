import type { KnowledgeDefinition } from './knowledge'

export const pythonKnowledge: KnowledgeDefinition = {
  technologyId: 'python',
  slug: 'python',
  title: 'What is Python?',
  summary:
    'Python is a high-level, general-purpose programming language widely used for web applications, automation, data engineering, machine learning, AI, scripting, APIs, and software development.',
  difficulty: 'beginner',
  sections: [
    {
      title: 'What is Python?',
      content:
        'Python is a high-level, general-purpose programming language designed to make software development readable and productive. It is widely used across web development, automation, data processing, machine learning, artificial intelligence, scripting, testing, and backend services.',
    },
    {
      title: 'Why is Python so popular?',
      content:
        'Python became popular because its syntax is relatively easy to read, its ecosystem is large, and it supports many different types of software development. Developers can use the same language for automation, APIs, data analysis, AI systems, testing, and backend services.',
      highlights: [
        {
          title: 'Readable syntax',
          description:
            'Python uses relatively concise syntax that is designed to be easy for humans to read and write.',
        },
        {
          title: 'Large ecosystem',
          description:
            'Python has a large collection of libraries and frameworks for many software domains.',
        },
        {
          title: 'General purpose',
          description:
            'Python can be used for many different categories of software rather than being limited to one domain.',
        },
        {
          title: 'AI and data ecosystem',
          description:
            'Python is widely used with machine learning, deep learning, data processing, and generative AI tooling.',
        },
      ],
    },
    {
      title: 'Python vs Python Runtime',
      content:
        'Python refers to the programming language, while the Python runtime is the software that interprets or executes Python code. When a Python program runs, the runtime reads the program and executes its instructions.',
      highlights: [
        {
          title: 'Programming language',
          description:
            'The rules and syntax developers use to express program logic.',
        },
        {
          title: 'Runtime',
          description:
            'The software environment responsible for executing the program.',
        },
        {
          title: 'Interpreter',
          description:
            'A program that executes source code according to the language runtime model.',
        },
      ],
    },
    {
      title: 'Python Program Structure',
      content:
        'A Python program is made from statements and expressions. Statements perform actions, while expressions produce values. Python programs can be organized into functions, classes, modules, and packages to make larger systems manageable.',
      highlights: [
        {
          title: 'Statement',
          description:
            'An instruction that performs an operation in a program.',
        },
        {
          title: 'Expression',
          description:
            'Code that evaluates to a value.',
        },
        {
          title: 'Function',
          description:
            'A reusable block of logic that can accept inputs and produce a result.',
        },
        {
          title: 'Module',
          description:
            'A Python file containing reusable code.',
        },
        {
          title: 'Package',
          description:
            'A structured collection of Python modules.',
        },
      ],
    },
    {
      title: 'Variables and Data Types',
      content:
        'Python variables are names that refer to values. Python uses dynamic typing, meaning the type associated with a variable can change during program execution. Common built-in data types include integers, floating-point numbers, strings, booleans, lists, tuples, sets, and dictionaries.',
      highlights: [
        {
          title: 'Integer',
          description:
            'Represents whole numbers.',
        },
        {
          title: 'Float',
          description:
            'Represents floating-point numbers.',
        },
        {
          title: 'String',
          description:
            'Represents text.',
        },
        {
          title: 'Boolean',
          description:
            'Represents true or false values.',
        },
        {
          title: 'List',
          description:
            'An ordered mutable collection of values.',
        },
        {
          title: 'Dictionary',
          description:
            'A collection of key-value mappings.',
        },
      ],
    },
    {
      title: 'Control Flow',
      content:
        'Control flow determines which parts of a program execute and how many times they execute. Python provides conditional statements such as if, elif, and else, along with loops such as for and while.',
      highlights: [
        {
          title: 'if',
          description:
            'Executes code when a condition is true.',
        },
        {
          title: 'elif',
          description:
            'Checks another condition when previous conditions were false.',
        },
        {
          title: 'else',
          description:
            'Provides an alternative execution path.',
        },
        {
          title: 'for loop',
          description:
            'Iterates over items in an iterable.',
        },
        {
          title: 'while loop',
          description:
            'Repeats code while a condition remains true.',
        },
      ],
    },
    {
      title: 'Functions',
      content:
        'Functions allow developers to package reusable logic into named units. Functions can accept parameters and return values. Good function design helps reduce duplication and makes code easier to test and maintain.',
      highlights: [
        {
          title: 'Parameter',
          description:
            'An input defined by a function.',
        },
        {
          title: 'Argument',
          description:
            'A value supplied when calling a function.',
        },
        {
          title: 'Return value',
          description:
            'The result returned by a function.',
        },
        {
          title: 'Default argument',
          description:
            'A parameter value used when the caller does not provide one.',
        },
      ],
    },
    {
      title: 'Object-Oriented Programming in Python',
      content:
        'Python supports object-oriented programming using classes and objects. Classes define structure and behavior, while objects are instances of classes. Python also supports inheritance, composition, polymorphism, and encapsulation patterns.',
      highlights: [
        {
          title: 'Class',
          description:
            'A blueprint defining data and behavior for objects.',
        },
        {
          title: 'Object',
          description:
            'An instance created from a class.',
        },
        {
          title: 'Inheritance',
          description:
            'Allows one class to derive behavior or structure from another class.',
        },
        {
          title: 'Composition',
          description:
            'Builds objects by combining other objects rather than relying only on inheritance.',
        },
      ],
    },
    {
      title: 'Modules and Imports',
      content:
        'Python applications are commonly split into modules so that functionality can be reused and organized. The import mechanism allows code from another module or package to be used by the current program.',
      highlights: [
        {
          title: 'import',
          description:
            'Loads a module or package for use in the current program.',
        },
        {
          title: 'Standard library',
          description:
            'The collection of modules distributed with Python.',
        },
        {
          title: 'Third-party package',
          description:
            'A package created outside the Python standard library and installed separately.',
        },
      ],
    },
    {
      title: 'Python Package Management',
      content:
        'Python projects commonly use package managers and dependency files to install and manage external libraries. pip is widely used for installing Python packages, while project dependency files such as requirements.txt or modern project configuration files define required packages.',
      highlights: [
        {
          title: 'pip',
          description:
            'A commonly used Python package installer.',
        },
        {
          title: 'Dependency',
          description:
            'An external library or package required by an application.',
        },
        {
          title: 'requirements.txt',
          description:
            'A commonly used file listing Python package dependencies and versions.',
        },
        {
          title: 'Virtual environment',
          description:
            'An isolated Python environment used to keep project dependencies separate.',
        },
      ],
    },
    {
      title: 'Virtual Environments',
      content:
        'A virtual environment provides an isolated Python installation context for a project. This prevents dependencies from different projects from interfering with one another and makes development environments easier to reproduce.',
      highlights: [
        {
          title: 'venv',
          description:
            'Python’s built-in mechanism for creating virtual environments.',
        },
        {
          title: 'Isolation',
          description:
            'Keeps one project’s installed packages separate from another project.',
        },
        {
          title: 'Activation',
          description:
            'Makes the virtual environment’s Python and package commands the active project tools in a shell session.',
        },
      ],
    },
    {
      title: 'Exception Handling',
      content:
        'Python uses exceptions to represent runtime problems and unexpected conditions. try, except, else, and finally blocks allow programs to handle errors deliberately rather than terminating without useful control.',
      highlights: [
        {
          title: 'Exception',
          description:
            'An object representing an error or exceptional condition during execution.',
        },
        {
          title: 'try',
          description:
            'Contains code that may raise an exception.',
        },
        {
          title: 'except',
          description:
            'Handles a matching exception.',
        },
        {
          title: 'finally',
          description:
            'Runs cleanup logic regardless of whether an exception occurred.',
        },
      ],
    },
    {
      title: 'File Handling',
      content:
        'Python provides APIs for reading and writing files. File operations should generally use context managers so resources are closed correctly even when errors occur.',
      highlights: [
        {
          title: 'open',
          description:
            'Opens a file and returns a file object.',
        },
        {
          title: 'read',
          description:
            'Reads content from a file.',
        },
        {
          title: 'write',
          description:
            'Writes content to a file.',
        },
        {
          title: 'with statement',
          description:
            'Provides structured resource management for operations such as file handling.',
        },
      ],
    },
    {
      title: 'Python Type Hints',
      content:
        'Python supports optional type annotations that describe expected types. Type hints improve readability, documentation, editor support, static analysis, and maintainability, especially in larger codebases.',
      highlights: [
        {
          title: 'Type hint',
          description:
            'An annotation describing the expected type of a value or function parameter.',
        },
        {
          title: 'Static analysis',
          description:
            'Analyzing source code without executing it to identify potential issues.',
        },
        {
          title: 'Generic type',
          description:
            'A type abstraction that can represent collections or structures parameterized by another type.',
        },
      ],
    },
    {
      title: 'Python Data Structures',
      content:
        'Python provides several built-in collection types. Choosing the right structure affects readability, memory usage, and algorithmic performance.',
      highlights: [
        {
          title: 'List',
          description:
            'Ordered mutable collection.',
        },
        {
          title: 'Tuple',
          description:
            'Ordered immutable collection.',
        },
        {
          title: 'Set',
          description:
            'Collection designed for unique elements and efficient membership operations.',
        },
        {
          title: 'Dictionary',
          description:
            'Key-value mapping optimized for lookup by key.',
        },
      ],
    },
    {
      title: 'List Comprehensions',
      content:
        'List comprehensions provide a concise syntax for constructing lists from iterables. They are useful for simple transformations and filtering, although normal loops can be clearer for complex logic.',
      highlights: [
        {
          title: 'Iterable',
          description:
            'An object that can provide values one at a time during iteration.',
        },
        {
          title: 'Transformation',
          description:
            'Converting input values into another representation.',
        },
        {
          title: 'Filtering',
          description:
            'Selecting only values that satisfy a condition.',
        },
      ],
    },
    {
      title: 'Decorators',
      content:
        'Decorators are a Python mechanism for wrapping functions or classes to extend or modify their behavior without changing their core implementation directly. They are widely used in web frameworks, authentication, logging, caching, and instrumentation.',
      highlights: [
        {
          title: 'Decorator',
          description:
            'A callable that wraps another callable to modify or extend its behavior.',
        },
        {
          title: 'Wrapper',
          description:
            'A function or object that adds behavior around another function or object.',
        },
        {
          title: 'Middleware-style behavior',
          description:
            'Logic that runs around another operation, such as before and after a request handler.',
        },
      ],
    },
    {
      title: 'Generators and Iterators',
      content:
        'Generators allow Python programs to produce values lazily instead of creating all values in memory at once. This can be useful when processing large datasets or streams.',
      highlights: [
        {
          title: 'Iterator',
          description:
            'An object that produces values sequentially.',
        },
        {
          title: 'Generator',
          description:
            'A Python construct that produces values lazily, commonly using yield.',
        },
        {
          title: 'Lazy evaluation',
          description:
            'Deferring computation until a value is actually needed.',
        },
      ],
    },
    {
      title: 'Concurrency and Parallelism',
      content:
        'Python supports multiple approaches to handling concurrent work, including threading, multiprocessing, and asynchronous programming. The appropriate model depends on whether the workload is I/O-bound, CPU-bound, or requires asynchronous coordination.',
      highlights: [
        {
          title: 'Concurrency',
          description:
            'Managing multiple tasks that can make progress during overlapping periods.',
        },
        {
          title: 'Parallelism',
          description:
            'Executing multiple operations at the same time using available computing resources.',
        },
        {
          title: 'Threading',
          description:
            'Uses multiple threads within a process and is commonly useful for I/O-bound workloads.',
        },
        {
          title: 'Multiprocessing',
          description:
            'Uses multiple processes and can be useful for CPU-intensive workloads.',
        },
        {
          title: 'Async programming',
          description:
            'Uses asynchronous execution to efficiently coordinate operations that spend time waiting on I/O.',
        },
      ],
    },
    {
      title: 'Python and APIs',
      content:
        'Python is widely used for backend APIs. Frameworks such as FastAPI, Flask, and Django provide different abstractions for building HTTP applications and services. Python API applications commonly use JSON, HTTP methods, authentication, validation, database access, and observability.',
      highlights: [
        {
          title: 'FastAPI',
          description:
            'A modern Python framework for building APIs with strong typing and automatic API documentation capabilities.',
        },
        {
          title: 'Flask',
          description:
            'A lightweight Python web framework that provides a flexible foundation for web applications and APIs.',
        },
        {
          title: 'Django',
          description:
            'A batteries-included Python web framework with many built-in application capabilities.',
        },
        {
          title: 'JSON',
          description:
            'A common text-based data format used for exchanging structured information between applications.',
        },
      ],
    },
    {
      title: 'Python and Databases',
      content:
        'Python applications commonly interact with databases through database drivers, object-relational mappers, query builders, or direct SQL. Database access should be designed with transactions, connection management, validation, security, and performance in mind.',
      highlights: [
        {
          title: 'Database driver',
          description:
            'Software that allows an application to communicate with a database system.',
        },
        {
          title: 'ORM',
          description:
            'Object-Relational Mapping maps application objects and operations to relational database structures.',
        },
        {
          title: 'Transaction',
          description:
            'A unit of database work that should satisfy defined consistency and atomicity guarantees.',
        },
        {
          title: 'Connection pool',
          description:
            'A reusable set of database connections that reduces the cost of repeatedly opening connections.',
        },
      ],
    },
    {
      title: 'Python in AI and Machine Learning',
      content:
        'Python is a major language for AI and machine learning because of its ecosystem. Libraries and frameworks such as NumPy, pandas, scikit-learn, PyTorch, TensorFlow, Transformers, and many model APIs can be integrated into Python applications.',
      highlights: [
        {
          title: 'NumPy',
          description:
            'A library for numerical computing and multidimensional arrays.',
        },
        {
          title: 'pandas',
          description:
            'A library widely used for data manipulation and analysis.',
        },
        {
          title: 'PyTorch',
          description:
            'A machine learning framework widely used for deep learning.',
        },
        {
          title: 'Transformers',
          description:
            'A model architecture family and ecosystem widely used for modern language and multimodal AI.',
        },
      ],
    },
    {
      title: 'Python in Generative AI',
      content:
        'Python is frequently used to build generative AI applications because model APIs, RAG pipelines, agent frameworks, vector databases, evaluation tools, and orchestration frameworks commonly provide Python SDKs or integrations.',
      highlights: [
        {
          title: 'RAG application',
          description:
            'An application that retrieves relevant information and supplies it to a generative model.',
        },
        {
          title: 'Agent',
          description:
            'A software system that can reason over tasks and use tools or actions to accomplish goals.',
        },
        {
          title: 'SDK',
          description:
            'A software development kit that provides libraries and tools for integrating with a platform or service.',
        },
      ],
    },
    {
      title: 'Python Application Architecture',
      content:
        'A production Python application should separate concerns so that HTTP handling, business logic, data access, external integrations, configuration, and background processing can evolve independently. The exact project structure depends on application size and framework.',
      highlights: [
        {
          title: 'Presentation layer',
          description:
            'Handles interfaces such as HTTP routes or application entry points.',
        },
        {
          title: 'Business layer',
          description:
            'Contains application-specific business rules and workflows.',
        },
        {
          title: 'Data access layer',
          description:
            'Handles interaction with databases and persistence systems.',
        },
        {
          title: 'Integration layer',
          description:
            'Handles communication with external APIs, services, and platforms.',
        },
      ],
    },
    {
      title: 'Python Security',
      content:
        'Python applications must protect authentication credentials, API keys, database credentials, user data, and other sensitive information. Secure applications validate inputs, enforce authorization, protect secrets, use secure transport, manage dependencies, and avoid exposing sensitive errors.',
      highlights: [
        {
          title: 'Secret',
          description:
            'Sensitive information such as an API key, password, or private credential.',
        },
        {
          title: 'Input validation',
          description:
            'Checks incoming data against expected rules before processing it.',
        },
        {
          title: 'Dependency security',
          description:
            'Managing third-party packages and vulnerabilities associated with application dependencies.',
        },
        {
          title: 'Secure transport',
          description:
            'Protecting network communication using mechanisms such as TLS.',
        },
      ],
    },
    {
      title: 'Python Testing',
      content:
        'Python applications can be tested at multiple levels. Unit tests validate individual functions, integration tests validate interactions with external components, and end-to-end tests validate complete workflows. Testing frameworks such as pytest are widely used.',
      highlights: [
        {
          title: 'pytest',
          description:
            'A widely used Python testing framework.',
        },
        {
          title: 'Unit testing',
          description:
            'Testing focused pieces of application logic in isolation.',
        },
        {
          title: 'Mock',
          description:
            'A test object used to simulate the behavior of a dependency.',
        },
        {
          title: 'Test coverage',
          description:
            'A measurement describing how much of the code or behavior is exercised by tests.',
        },
      ],
    },
    {
      title: 'Python Logging and Observability',
      content:
        'Production Python services should produce useful logs and metrics while avoiding sensitive information. Structured logging and correlation identifiers help teams investigate distributed requests and failures.',
      highlights: [
        {
          title: 'Logging',
          description:
            'Recording useful information about application execution and events.',
        },
        {
          title: 'Structured logging',
          description:
            'Representing logs using predictable fields that can be searched and analyzed.',
        },
        {
          title: 'Metric',
          description:
            'A numerical measurement of application or infrastructure behavior.',
        },
        {
          title: 'Trace',
          description:
            'A representation of a request or workflow as it moves through distributed components.',
        },
      ],
    },
    {
      title: 'Python Performance',
      content:
        'Python performance should be optimized based on measured bottlenecks rather than assumptions. Common techniques include choosing efficient algorithms and data structures, reducing unnecessary I/O, caching expensive operations, batching work, using asynchronous processing where appropriate, and moving CPU-intensive work to suitable execution models.',
      highlights: [
        {
          title: 'Profiling',
          description:
            'Measuring where a program spends time or resources.',
        },
        {
          title: 'Algorithmic complexity',
          description:
            'Describes how computational cost grows as input size increases.',
        },
        {
          title: 'Caching',
          description:
            'Reuses previously computed or retrieved results to reduce repeated work.',
        },
        {
          title: 'Batching',
          description:
            'Processes multiple items together to reduce per-operation overhead.',
        },
      ],
    },
    {
      title: 'Python Deployment',
      content:
        'Python applications can be deployed using virtual machines, containers, serverless platforms, platform-as-a-service environments, or managed application platforms. Production deployments should include dependency management, configuration management, health checks, logging, monitoring, and rollback strategies.',
      highlights: [
        {
          title: 'Container deployment',
          description:
            'Packages the Python application and its runtime dependencies into a container image.',
        },
        {
          title: 'Health check',
          description:
            'An endpoint or mechanism used to determine whether a service is operating correctly.',
        },
        {
          title: 'Configuration',
          description:
            'Runtime settings such as database URLs, feature flags, and service endpoints.',
        },
        {
          title: 'Rollback',
          description:
            'Returning a deployment to a previous known-good version.',
        },
      ],
    },
    {
      title: 'Python and Modern AI Engineering',
      content:
        'For AI engineering and AI product leadership, Python is especially important because many AI services, model frameworks, evaluation tools, orchestration libraries, and backend APIs are built around Python. A technical leader does not need to memorize every Python feature but should understand how Python fits into production AI architecture, engineering trade-offs, reliability, security, and team delivery.',
    },
    {
      title: 'Common Python Mistakes',
      content:
        'Common mistakes include using global mutable state unnecessarily, ignoring virtual environments, hardcoding secrets, writing functions that are too large, catching overly broad exceptions, skipping validation, creating unnecessary dependencies, ignoring resource cleanup, and optimizing without measuring actual bottlenecks.',
      highlights: [
        {
          title: 'Hardcoded secrets',
          description:
            'Embedding credentials or sensitive configuration directly in source code.',
        },
        {
          title: 'Broad exception handling',
          description:
            'Catching overly general exceptions and hiding the real cause of failures.',
        },
        {
          title: 'Global mutable state',
          description:
            'Shared mutable state that can make systems difficult to reason about and test.',
        },
        {
          title: 'No dependency isolation',
          description:
            'Installing project dependencies globally and creating conflicts between projects.',
        },
      ],
    },
    {
      title: 'Explore Python in EDDUU',
      content:
        'EDDUU connects Python with FastAPI, Django, Flask, APIs, databases, AI, machine learning, RAG, agents, automation, testing, cloud deployment, security, and application engineering.',
    },
  ],
  relatedTechnologyIds: [
    'full-stack',
    'fastapi',
    'django',
    'flask',
  ],
}

export default pythonKnowledge
