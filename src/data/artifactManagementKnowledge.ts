import type { KnowledgeDefinition } from './knowledge'

export const artifactManagementKnowledge: KnowledgeDefinition = {
  technologyId: 'artifact-management',
  slug: 'artifact-management',
  title: 'Artifact Management',
  summary:
    'Artifact Management is the practice of storing, versioning, securing, promoting, and distributing software build outputs so the same validated artifact can move reliably through delivery environments.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is an Artifact?',
      content:
        'A software artifact is a generated output produced by a build or packaging process. Examples include application binaries, JAR files, Python packages, JavaScript bundles, container images, mobile application packages, deployment manifests, and infrastructure packages.',
      highlights: [
        {
          title: 'Artifact',
          description:
            'A generated and deployable output produced by the software delivery process.',
        },
        {
          title: 'Build output',
          description:
            'The result produced after source code is compiled, bundled, packaged, or otherwise transformed.',
        },
        {
          title: 'Deployable package',
          description:
            'An artifact prepared for installation or deployment into an environment.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of an artifact like a sealed product box leaving a factory. The factory builds and checks the product once, puts it into a labeled box, and sends that exact box to different stores. You do not manufacture a slightly different product at every store. The same idea applies to software delivery.',
      highlights: [
        {
          title: 'Factory',
          description:
            'The CI build pipeline that creates the software artifact.',
        },
        {
          title: 'Sealed box',
          description:
            'A versioned artifact that should remain unchanged after validation.',
        },
        {
          title: 'Stores',
          description:
            'Different deployment environments such as staging and production.',
        },
      ],
    },

    {
      title: 'Why Artifact Management Matters',
      content:
        'Artifact Management improves consistency, traceability, reproducibility, security, and deployment reliability. Teams can identify exactly what was built, tested, approved, and deployed.',
      highlights: [
        {
          title: 'Consistency',
          description:
            'The same validated software output can be deployed across environments.',
        },
        {
          title: 'Traceability',
          description:
            'The ability to connect a production deployment back to its source and build.',
        },
        {
          title: 'Reproducibility',
          description:
            'The ability to recreate or identify the software output associated with a specific build.',
        },
      ],
    },

    {
      title: 'Build Once, Deploy Many',
      content:
        'A mature CI/CD process generally follows the principle of building an artifact once, validating it, and promoting that same artifact through environments. Rebuilding separately for staging and production can create differences that were never tested.',
      highlights: [
        {
          title: 'Build once',
          description:
            'Create one versioned artifact from the validated source revision.',
        },
        {
          title: 'Deploy many',
          description:
            'Promote the same artifact across multiple environments.',
        },
        {
          title: 'Artifact immutability',
          description:
            'Preventing an approved artifact from being modified after validation.',
        },
      ],
    },

    {
      title: 'Artifact Repository',
      content:
        'An artifact repository stores and distributes generated software outputs. Repositories can manage packages, container images, binaries, libraries, and other release artifacts.',
      highlights: [
        {
          title: 'Artifact repository',
          description:
            'A system used to store and distribute versioned software artifacts.',
        },
        {
          title: 'Package registry',
          description:
            'A registry used to publish and retrieve software packages.',
        },
        {
          title: 'Container registry',
          description:
            'A registry used to store and distribute container images.',
        },
      ],
    },

    {
      title: 'Artifact Versioning',
      content:
        'Artifacts need unique and understandable version identifiers. Versioning allows teams to determine which exact artifact was tested, approved, deployed, or rolled back.',
      highlights: [
        {
          title: 'Version',
          description:
            'An identifier representing a particular artifact revision.',
        },
        {
          title: 'Semantic versioning',
          description:
            'A versioning convention commonly represented as major, minor, and patch numbers.',
        },
        {
          title: 'Build number',
          description:
            'An identifier assigned to a particular CI build.',
        },
      ],
    },

    {
      title: 'Artifact Metadata',
      content:
        'Useful artifact metadata can include source commit, build number, version, build timestamp, dependencies, compiler or runtime version, security scan results, test results, and provenance information.',
      highlights: [
        {
          title: 'Metadata',
          description:
            'Information describing how and from what an artifact was produced.',
        },
        {
          title: 'Source commit',
          description:
            'The exact source-control revision used to create the artifact.',
        },
        {
          title: 'Build provenance',
          description:
            'Information establishing where, how, and from which inputs an artifact was created.',
        },
      ],
    },

    {
      title: 'Artifact Promotion',
      content:
        'Artifact promotion means moving a validated artifact from one environment or repository stage to another without rebuilding it. For example, an artifact can move from development validation to staging and then production.',
      highlights: [
        {
          title: 'Promotion',
          description:
            'Moving an existing validated artifact to the next delivery stage.',
        },
        {
          title: 'Environment promotion',
          description:
            'Advancing the same artifact through development, staging, and production.',
        },
      ],
    },

    {
      title: 'Immutable Artifacts',
      content:
        'An immutable artifact is not modified after it has been created and validated. If a change is required, a new artifact version should be created. This makes deployments and rollbacks easier to reason about.',
      highlights: [
        {
          title: 'Immutable',
          description:
            'Not changing an artifact after it has been created.',
        },
        {
          title: 'New version',
          description:
            'Creating a new artifact when the software changes.',
        },
      ],
    },

    {
      title: 'Container Images',
      content:
        'Container images are common software artifacts. A CI pipeline can build an image, run tests and security scans, publish the image to a registry, and deploy the exact image version to production.',
      highlights: [
        {
          title: 'Container image',
          description:
            'A packaged filesystem and runtime definition used to create containers.',
        },
        {
          title: 'Image digest',
          description:
            'A content-based identifier that can uniquely identify an image version.',
        },
        {
          title: 'Image tag',
          description:
            'A human-readable label associated with a container image.',
        },
      ],
    },

    {
      title: 'Package Artifacts',
      content:
        'Different programming ecosystems produce different package artifacts. Examples include npm packages, Python wheels, Java JAR files, .NET packages, and compiled binaries.',
      highlights: [
        {
          title: 'Package',
          description:
            'A distributable software component.',
        },
        {
          title: 'Library artifact',
          description:
            'A packaged software component intended to be reused by another application.',
        },
      ],
    },

    {
      title: 'Artifact Retention',
      content:
        'Artifact repositories need retention policies defining how long artifacts are stored. Keeping everything forever increases storage cost, while deleting artifacts too aggressively can make rollback and historical investigation difficult.',
      highlights: [
        {
          title: 'Retention policy',
          description:
            'Rules defining how long artifacts should remain available.',
        },
        {
          title: 'Storage cost',
          description:
            'The infrastructure cost associated with storing artifacts.',
        },
        {
          title: 'Rollback availability',
          description:
            'The ability to retrieve a previous artifact when recovery is required.',
        },
      ],
    },

    {
      title: 'Artifact Cleanup',
      content:
        'Artifact cleanup removes obsolete outputs according to defined policies. Cleanup should consider release history, rollback requirements, compliance, and dependency relationships before deleting artifacts.',
      highlights: [
        {
          title: 'Cleanup',
          description:
            'Removing artifacts that are no longer required according to policy.',
        },
        {
          title: 'Obsolete artifact',
          description:
            'An artifact that is no longer needed for supported releases, recovery, or compliance.',
        },
      ],
    },

    {
      title: 'Artifact Security',
      content:
        'Artifacts can contain vulnerabilities or malicious code, so artifact management should include access control, vulnerability scanning, malware detection where appropriate, provenance verification, and controlled publication.',
      highlights: [
        {
          title: 'Artifact scanning',
          description:
            'Analyzing artifacts for known vulnerabilities or security problems.',
        },
        {
          title: 'Access control',
          description:
            'Restricting who or what can publish, modify, download, or delete artifacts.',
        },
        {
          title: 'Provenance',
          description:
            'Evidence describing where an artifact came from and how it was produced.',
        },
      ],
    },

    {
      title: 'Software Supply Chain',
      content:
        'Artifact Management is an important part of software supply-chain security because attackers may attempt to compromise dependencies, build systems, registries, or released artifacts. Strong provenance and controlled promotion reduce these risks.',
      highlights: [
        {
          title: 'Software supply chain',
          description:
            'The chain of source code, dependencies, build tools, artifacts, and delivery systems used to produce software.',
        },
        {
          title: 'Artifact integrity',
          description:
            'Confidence that an artifact has not been unexpectedly modified.',
        },
        {
          title: 'Provenance verification',
          description:
            'Validating the origin and build history of an artifact.',
        },
      ],
    },

    {
      title: 'Artifact Signing',
      content:
        'Artifact signing provides a mechanism for verifying that an artifact came from a trusted source and was not altered after signing. Signing can strengthen the software supply chain and release process.',
      highlights: [
        {
          title: 'Digital signature',
          description:
            'Cryptographic evidence used to verify the origin and integrity of an artifact.',
        },
        {
          title: 'Verification',
          description:
            'Checking whether an artifact signature is valid and trusted.',
        },
      ],
    },

    {
      title: 'SBOM',
      content:
        'A Software Bill of Materials, or SBOM, describes the components and dependencies contained in software. SBOM information can support vulnerability management, compliance, and supply-chain visibility.',
      highlights: [
        {
          title: 'SBOM',
          description:
            'A structured inventory of software components and dependencies.',
        },
        {
          title: 'Dependency visibility',
          description:
            'Knowing which third-party components are present in a software artifact.',
        },
      ],
    },

    {
      title: 'Artifacts in CI/CD',
      content:
        'In a CI/CD pipeline, artifacts connect build and deployment. A typical flow is source commit, build, test, security scan, artifact creation, artifact publication, approval, promotion, deployment, and monitoring.',
      highlights: [
        {
          title: 'Build',
          description:
            'Creates the software artifact.',
        },
        {
          title: 'Validation',
          description:
            'Checks the artifact before it is approved for promotion.',
        },
        {
          title: 'Promotion',
          description:
            'Moves the validated artifact toward production.',
        },
        {
          title: 'Deployment',
          description:
            'Installs or activates the artifact in a target environment.',
        },
      ],
    },

    {
      title: 'Artifact Rollback',
      content:
        'Rollback becomes much simpler when previous production artifacts remain available and identifiable. The deployment system can select a known-good artifact and redeploy it instead of rebuilding old source code.',
      highlights: [
        {
          title: 'Known-good artifact',
          description:
            'A previously validated artifact suitable for recovery.',
        },
        {
          title: 'Rollback deployment',
          description:
            'Deploying a previous artifact to restore service.',
        },
      ],
    },

    {
      title: 'Artifact Management for AI',
      content:
        'AI systems can produce and depend on many artifact types, including application packages, container images, model files, evaluation datasets, prompt configurations, agent definitions, and infrastructure configurations. These should be versioned and traceable so an AI release can be reproduced or rolled back.',
      highlights: [
        {
          title: 'Model artifact',
          description:
            'A packaged model or model-related output used by an AI system.',
        },
        {
          title: 'Evaluation dataset',
          description:
            'A controlled dataset used to evaluate AI behavior.',
        },
        {
          title: 'Prompt artifact',
          description:
            'A versioned prompt or prompt configuration used by an AI application.',
        },
        {
          title: 'Agent artifact',
          description:
            'A versioned configuration or package representing an AI agent and its workflow.',
        },
      ],
    },

    {
      title: 'Artifact Management for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, Artifact Management is about traceability, release confidence, supply-chain security, cost control, and recovery. The key question is simple: can we identify exactly what we tested, approved, deployed, and can redeploy if production fails?',
      highlights: [
        {
          title: 'Release traceability',
          description:
            'Connecting a production release to its exact source, build, artifact, and validation results.',
        },
        {
          title: 'Recovery readiness',
          description:
            'Ensuring previous known-good artifacts remain available for rollback.',
        },
        {
          title: 'Supply-chain governance',
          description:
            'Controlling the integrity, provenance, access, and security of software artifacts.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common mistakes include rebuilding artifacts separately for every environment, overwriting artifact versions, using mutable tags as the only identity, deleting previous production artifacts too quickly, allowing unrestricted publishing, ignoring artifact vulnerabilities, and failing to record source and build provenance.',
      highlights: [
        {
          title: 'Artifact mutation',
          description:
            'Changing an artifact after it has been validated or assigning the same identity to different contents.',
        },
        {
          title: 'Missing provenance',
          description:
            'Being unable to determine which source and build produced an artifact.',
        },
        {
          title: 'Premature deletion',
          description:
            'Deleting artifacts before they are no longer required for rollback or investigation.',
        },
        {
          title: 'Weak access control',
          description:
            'Allowing unnecessary users or systems to publish or modify artifacts.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'release-management',
    'ci-cd',
    'deployment',
    'github-actions',
    'gitlab',
    'jenkins',
    'rollback-strategy',
    'deployment-strategy',
  ],
}

export default artifactManagementKnowledge
