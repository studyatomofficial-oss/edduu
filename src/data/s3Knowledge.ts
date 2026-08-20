import type { KnowledgeDefinition } from './knowledge'

export const s3Knowledge: KnowledgeDefinition = {
  technologyId: 'aws-s3',
  slug: 'aws-s3',
  title: 'Amazon S3',
  summary:
    'Amazon Simple Storage Service (S3) is an AWS object-storage service used to store and retrieve files, datasets, backups, application artifacts, logs, media, and other objects at large scale.',
  difficulty: 'intermediate',

  sections: [
    {
      title: 'What is Amazon S3?',
      content:
        'Amazon S3 is an object storage service provided by AWS. It stores data as objects inside buckets and is designed for high durability, scalability, security, and broad integration with AWS services and applications.',
      highlights: [
        {
          title: 'S3',
          description:
            'AWS object-storage service for storing and retrieving data.',
        },
        {
          title: 'Object',
          description:
            'A unit of data stored in S3 together with associated metadata and a key.',
        },
        {
          title: 'Bucket',
          description:
            'A logical container used to store S3 objects.',
        },
      ],
    },

    {
      title: 'Simple Analogy',
      content:
        'Think of S3 like a massive digital warehouse. Instead of storing files on your personal computer, you place them into labeled storage areas. Each file has a unique name, and applications can retrieve it whenever required.',
      highlights: [
        {
          title: 'Warehouse',
          description:
            'Comparable to Amazon S3 itself.',
        },
        {
          title: 'Storage area',
          description:
            'Comparable to an S3 bucket.',
        },
        {
          title: 'Stored package',
          description:
            'Comparable to an S3 object.',
        },
      ],
    },

    {
      title: 'Why S3 Matters',
      content:
        'Applications frequently need durable storage for files, backups, datasets, images, videos, logs, application artifacts, and machine-learning assets. S3 provides scalable object storage without requiring teams to operate traditional storage servers.',
      highlights: [
        {
          title: 'Durability',
          description:
            'The ability of stored data to remain protected against infrastructure failures.',
        },
        {
          title: 'Scalability',
          description:
            'The ability to store and access very large amounts of data.',
        },
        {
          title: 'Managed storage',
          description:
            'Storage infrastructure operated by AWS rather than directly by the application team.',
        },
      ],
    },

    {
      title: 'S3 Object',
      content:
        'An S3 object consists of the stored data, a key identifying the object, metadata, and other optional attributes. Objects can represent documents, images, videos, datasets, model files, backups, or application artifacts.',
      highlights: [
        {
          title: 'Object key',
          description:
            'The name or identifier used to locate an object inside a bucket.',
        },
        {
          title: 'Object data',
          description:
            'The actual content stored by S3.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing an object or how it should be handled.',
        },
      ],
    },

    {
      title: 'S3 Bucket',
      content:
        'A bucket is the top-level logical container for S3 objects. Bucket configuration can include access controls, encryption, versioning, lifecycle policies, logging, replication, and other storage-management settings.',
      highlights: [
        {
          title: 'Bucket',
          description:
            'A logical container for S3 objects.',
        },
        {
          title: 'Bucket policy',
          description:
            'A resource-based policy controlling access to bucket resources.',
        },
        {
          title: 'Bucket configuration',
          description:
            'Settings that determine security, lifecycle, versioning, and other bucket behavior.',
        },
      ],
    },

    {
      title: 'S3 Object Key',
      content:
        'S3 uses object keys to identify objects. Keys often appear like file paths, but S3 object storage does not require a traditional hierarchical filesystem structure. Prefixes can be used to organize and retrieve groups of objects.',
      highlights: [
        {
          title: 'Key',
          description:
            'The identifier used to locate an S3 object.',
        },
        {
          title: 'Prefix',
          description:
            'A shared beginning of object keys commonly used to organize objects logically.',
        },
        {
          title: 'Logical organization',
          description:
            'Structuring object names to make storage easier to manage and query.',
        },
      ],
    },

    {
      title: 'S3 Storage Classes',
      content:
        'S3 provides multiple storage classes optimized for different access patterns and cost requirements. Frequently accessed data can use standard storage, while less frequently accessed or archival data can use lower-cost classes with different retrieval characteristics.',
      highlights: [
        {
          title: 'Standard',
          description:
            'General-purpose storage for frequently accessed data.',
        },
        {
          title: 'Infrequent access',
          description:
            'Storage classes designed for data accessed less frequently while still requiring relatively quick retrieval.',
        },
        {
          title: 'Archive',
          description:
            'Lower-cost storage options designed for long-term data retention with different retrieval characteristics.',
        },
      ],
    },

    {
      title: 'S3 Lifecycle',
      content:
        'S3 Lifecycle rules automate transitions between storage classes or expiration of objects. Lifecycle policies can reduce cost and simplify retention management for large datasets and application-generated files.',
      highlights: [
        {
          title: 'Lifecycle rule',
          description:
            'A rule that automatically changes or expires objects according to conditions.',
        },
        {
          title: 'Transition',
          description:
            'Moving an object from one storage class to another.',
        },
        {
          title: 'Expiration',
          description:
            'Automatically deleting objects after a defined retention period.',
        },
      ],
    },

    {
      title: 'S3 Versioning',
      content:
        'S3 Versioning keeps multiple versions of an object when it is overwritten or deleted. This can help recover from accidental changes or deletions and is often useful for important application data.',
      highlights: [
        {
          title: 'Versioning',
          description:
            'Maintaining multiple versions of an S3 object.',
        },
        {
          title: 'Object version',
          description:
            'A specific historical version of an object.',
        },
        {
          title: 'Recovery',
          description:
            'Restoring an earlier object version after an accidental change or deletion.',
        },
      ],
    },

    {
      title: 'S3 Encryption',
      content:
        'S3 supports encryption for stored objects. Organizations should define encryption requirements based on data sensitivity, compliance obligations, and access architecture.',
      highlights: [
        {
          title: 'Encryption at rest',
          description:
            'Protecting stored data so its contents are not directly readable without appropriate decryption access.',
        },
        {
          title: 'AWS-managed keys',
          description:
            'Encryption keys managed by AWS for supported encryption configurations.',
        },
        {
          title: 'Customer-managed keys',
          description:
            'Encryption keys managed by the customer through AWS key-management capabilities.',
        },
      ],
    },

    {
      title: 'S3 Access Control',
      content:
        'S3 access can be controlled through IAM policies, bucket policies, access points, and other AWS security mechanisms. Public access should be explicitly controlled because accidentally exposed storage can create serious security and compliance risks.',
      highlights: [
        {
          title: 'IAM policy',
          description:
            'An identity-based policy defining permissions for an AWS identity.',
        },
        {
          title: 'Bucket policy',
          description:
            'A resource-based policy attached to an S3 bucket.',
        },
        {
          title: 'Least privilege',
          description:
            'Providing only the permissions required for a workload or user.',
        },
      ],
    },

    {
      title: 'S3 Block Public Access',
      content:
        'S3 Block Public Access provides controls designed to prevent accidental public exposure of buckets and objects. It is an important security safeguard for organizations that do not intentionally serve data publicly.',
      highlights: [
        {
          title: 'Block Public Access',
          description:
            'S3 controls designed to prevent unintended public access.',
        },
        {
          title: 'Public exposure',
          description:
            'Making stored data accessible to unauthorized internet users.',
        },
        {
          title: 'Security baseline',
          description:
            'A standard configuration used to establish a minimum security posture.',
        },
      ],
    },

    {
      title: 'S3 Presigned URL',
      content:
        'A presigned URL provides temporary access to a specific S3 object without requiring the recipient to have direct AWS credentials. It is commonly used for secure file uploads and downloads from applications.',
      highlights: [
        {
          title: 'Presigned URL',
          description:
            'A temporary URL granting controlled access to an S3 object.',
        },
        {
          title: 'Temporary access',
          description:
            'Permission that automatically becomes invalid after a configured period.',
        },
        {
          title: 'Direct upload',
          description:
            'Allowing a client application to upload directly to S3 without routing the entire file through an application server.',
        },
      ],
    },

    {
      title: 'S3 Static Website Hosting',
      content:
        'S3 can host static website assets such as HTML, CSS, JavaScript, images, and other files. For production websites, teams may combine S3 with CloudFront and appropriate domain and security configuration.',
      highlights: [
        {
          title: 'Static website',
          description:
            'A website whose content is served as static files rather than generated dynamically by an application server.',
        },
        {
          title: 'CloudFront',
          description:
            'AWS content-delivery service commonly used to distribute S3-hosted content globally.',
        },
        {
          title: 'CDN',
          description:
            'A distributed network that serves content closer to users to improve delivery performance.',
        },
      ],
    },

    {
      title: 'S3 and CloudFront',
      content:
        'S3 can act as an origin for Amazon CloudFront. CloudFront caches and distributes content globally while S3 provides durable object storage. This architecture is common for static websites, downloads, media, and application assets.',
      highlights: [
        {
          title: 'Origin',
          description:
            'The source from which a content-delivery system retrieves content.',
        },
        {
          title: 'Edge location',
          description:
            'A geographically distributed location used to serve content closer to users.',
        },
        {
          title: 'Caching',
          description:
            'Temporarily storing frequently requested content closer to consumers.',
        },
      ],
    },

    {
      title: 'S3 Event Notifications',
      content:
        'S3 can generate events when objects are created, deleted, or otherwise changed. These events can trigger downstream processing through supported AWS services and event mechanisms.',
      highlights: [
        {
          title: 'S3 event',
          description:
            'An event generated in response to an object-related operation.',
        },
        {
          title: 'Event-driven processing',
          description:
            'Starting application processing in response to a system event.',
        },
        {
          title: 'Trigger',
          description:
            'An event or condition that starts another operation.',
        },
      ],
    },

    {
      title: 'S3 and Lambda',
      content:
        'S3 events can trigger AWS Lambda functions. This creates useful event-driven workflows such as processing an uploaded document, generating thumbnails, validating files, extracting metadata, or starting an asynchronous AI pipeline.',
      highlights: [
        {
          title: 'Lambda',
          description:
            'AWS serverless compute service for running application functions.',
        },
        {
          title: 'Document processing',
          description:
            'Processing uploaded documents through automated application logic.',
        },
        {
          title: 'Event-driven architecture',
          description:
            'Architecture in which system components react to events rather than relying exclusively on direct synchronous calls.',
        },
      ],
    },

    {
      title: 'S3 and Databases',
      content:
        'S3 is optimized for object storage rather than transactional relational database workloads. Applications often store large files in S3 and keep metadata, relationships, permissions, or searchable information in a database.',
      highlights: [
        {
          title: 'Object storage',
          description:
            'Storage optimized for large independent objects such as files and datasets.',
        },
        {
          title: 'Metadata',
          description:
            'Information describing an object and its application context.',
        },
        {
          title: 'Transactional database',
          description:
            'A database designed for structured operations requiring transactional consistency.',
        },
      ],
    },

    {
      title: 'S3 Multipart Upload',
      content:
        'Multipart upload allows large objects to be uploaded in separate parts and assembled into a single object. This can improve reliability and performance for large uploads and allows failed parts to be retried independently.',
      highlights: [
        {
          title: 'Multipart upload',
          description:
            'Uploading a large object as multiple independent parts.',
        },
        {
          title: 'Part',
          description:
            'One portion of a multipart object upload.',
        },
        {
          title: 'Retry',
          description:
            'Re-uploading a failed part without restarting the entire upload.',
        },
      ],
    },

    {
      title: 'S3 Data Transfer',
      content:
        'S3 workloads can generate network and data-transfer costs depending on how data moves between services, regions, and external users. Architecture should consider where processing occurs and how frequently large objects are transferred.',
      highlights: [
        {
          title: 'Data transfer',
          description:
            'Movement of data between systems, regions, or networks.',
        },
        {
          title: 'Cross-region transfer',
          description:
            'Moving data between different AWS Regions.',
        },
        {
          title: 'Transfer cost',
          description:
            'Charges associated with certain patterns of data movement.',
        },
      ],
    },

    {
      title: 'S3 Replication',
      content:
        'S3 replication can automatically copy objects between buckets according to configured rules. Replication can support disaster recovery, geographic distribution, compliance, and workload-specific data-copy requirements.',
      highlights: [
        {
          title: 'Replication',
          description:
            'Automatically copying objects from one S3 location to another.',
        },
        {
          title: 'Cross-Region Replication',
          description:
            'Replicating objects between buckets in different AWS Regions.',
        },
        {
          title: 'Disaster recovery',
          description:
            'Preparing systems and data so services can be restored after major failures.',
        },
      ],
    },

    {
      title: 'S3 Backup and Recovery',
      content:
        'S3 data protection can use versioning, replication, lifecycle policies, backups, and controlled deletion mechanisms depending on recovery requirements. Important data should have clearly defined recovery objectives and ownership.',
      highlights: [
        {
          title: 'Backup',
          description:
            'A recoverable copy of important data.',
        },
        {
          title: 'RPO',
          description:
            'Recovery Point Objective describing the acceptable amount of data loss.',
        },
        {
          title: 'RTO',
          description:
            'Recovery Time Objective describing the target time for restoration.',
        },
      ],
    },

    {
      title: 'S3 Logging and Monitoring',
      content:
        'S3 operations and access patterns can be monitored using AWS logging and observability capabilities. Monitoring can help detect unusual access, failed operations, data movement, and security-related events.',
      highlights: [
        {
          title: 'Access logging',
          description:
            'Recording information about access activity.',
        },
        {
          title: 'Audit',
          description:
            'Reviewing system activity to establish what happened and who or what performed an action.',
        },
        {
          title: 'Anomaly detection',
          description:
            'Identifying behavior that differs significantly from expected patterns.',
        },
      ],
    },

    {
      title: 'S3 Data Lake',
      content:
        'S3 is frequently used as a foundation for data lakes because it can store large volumes of structured, semi-structured, and unstructured data. Analytics services can process data directly from S3 or through data-catalog and query layers.',
      highlights: [
        {
          title: 'Data lake',
          description:
            'A centralized storage architecture capable of holding large volumes of raw and processed data.',
        },
        {
          title: 'Raw data',
          description:
            'Data stored close to its original form before extensive transformation.',
        },
        {
          title: 'Processed data',
          description:
            'Data transformed into a format optimized for analysis or downstream applications.',
        },
      ],
    },

    {
      title: 'S3 for AI and Machine Learning',
      content:
        'S3 is widely used in AI and machine-learning systems for datasets, training artifacts, model files, evaluation results, embeddings, documents, images, audio, and generated outputs.',
      highlights: [
        {
          title: 'Training dataset',
          description:
            'Data used to train a machine-learning model.',
        },
        {
          title: 'Model artifact',
          description:
            'A saved model or related file used for deployment, evaluation, or reuse.',
        },
        {
          title: 'AI asset',
          description:
            'A data or model artifact required by an AI application or pipeline.',
        },
      ],
    },

    {
      title: 'S3 AI Pipeline Example',
      content:
        'An AI document-processing system could upload documents to S3, trigger a processing workflow, extract text and metadata, generate embeddings, store derived artifacts, and keep application metadata in a database. S3 acts as durable storage for the large files and intermediate artifacts.',
      highlights: [
        {
          title: 'Document ingestion',
          description:
            'The process of receiving documents into an AI processing system.',
        },
        {
          title: 'Embedding',
          description:
            'A numerical representation of content used by many AI retrieval systems.',
        },
        {
          title: 'Intermediate artifact',
          description:
            'A temporary or derived file produced during a processing pipeline.',
        },
      ],
    },

    {
      title: 'S3 Security',
      content:
        'S3 security should use least-privilege IAM, Block Public Access, encryption, appropriate bucket policies, controlled credentials, monitoring, logging, and careful handling of sensitive data. Public access should be intentional and explicitly governed.',
      highlights: [
        {
          title: 'Least privilege',
          description:
            'Granting only the minimum permissions required.',
        },
        {
          title: 'Encryption',
          description:
            'Protecting stored data from unauthorized reading.',
        },
        {
          title: 'Security monitoring',
          description:
            'Detecting suspicious or unexpected storage access and configuration changes.',
        },
      ],
    },

    {
      title: 'S3 Cost Optimization',
      content:
        'S3 cost optimization involves selecting appropriate storage classes, using lifecycle transitions, deleting unnecessary data, compressing suitable datasets, controlling replication, and understanding request and transfer costs.',
      highlights: [
        {
          title: 'Storage class optimization',
          description:
            'Choosing a storage class appropriate for access frequency and retention requirements.',
        },
        {
          title: 'Lifecycle optimization',
          description:
            'Automatically transitioning or deleting data according to defined policies.',
        },
        {
          title: 'Data retention',
          description:
            'How long data is retained before deletion or archival.',
        },
      ],
    },

    {
      title: 'S3 Reliability',
      content:
        'S3 is designed for highly durable object storage, but application reliability still requires correct access controls, versioning or backups where appropriate, recovery procedures, monitoring, and careful handling of destructive operations.',
      highlights: [
        {
          title: 'Durability',
          description:
            'The likelihood that stored data remains intact over time.',
        },
        {
          title: 'Recovery procedure',
          description:
            'A documented process for restoring data or application functionality.',
        },
        {
          title: 'Operational readiness',
          description:
            'The ability of a team to respond effectively to failures or data-loss scenarios.',
        },
      ],
    },

    {
      title: 'S3 and Terraform',
      content:
        'Terraform can manage S3 buckets and supporting configuration such as versioning, lifecycle policies, encryption, access controls, and related infrastructure. Infrastructure as Code makes storage configuration reviewable and repeatable.',
      highlights: [
        {
          title: 'Infrastructure as Code',
          description:
            'Managing infrastructure configuration through version-controlled definitions.',
        },
        {
          title: 'Bucket configuration',
          description:
            'The security, lifecycle, versioning, and operational settings associated with an S3 bucket.',
        },
        {
          title: 'Repeatability',
          description:
            'The ability to recreate infrastructure configuration consistently.',
        },
      ],
    },

    {
      title: 'S3 and Serverless',
      content:
        'S3 works naturally with serverless architectures because object events can trigger Lambda functions and other managed services. This enables scalable workflows without continuously running application servers.',
      highlights: [
        {
          title: 'Serverless',
          description:
            'A cloud execution model where the provider manages much of the underlying infrastructure.',
        },
        {
          title: 'Object event',
          description:
            'An event generated by an operation involving an S3 object.',
        },
        {
          title: 'Asynchronous workflow',
          description:
            'A workflow where processing continues independently from the initiating request.',
        },
      ],
    },

    {
      title: 'S3 for Technical Leaders',
      content:
        'For an AI Engineering Manager, Technical Product Manager, or Senior TPM, S3 should be viewed as a durable data platform component rather than simply file storage. Leadership decisions should consider data classification, security, retention, cost, access patterns, lifecycle, disaster recovery, compliance, ownership, and downstream processing.',
      highlights: [
        {
          title: 'Data governance',
          description:
            'Policies and controls governing how organizational data is stored, accessed, retained, and protected.',
        },
        {
          title: 'Data lifecycle',
          description:
            'The progression of data from creation and active use through archival and deletion.',
        },
        {
          title: 'Access pattern',
          description:
            'How frequently, from where, and by which systems data is accessed.',
        },
        {
          title: 'Total cost of ownership',
          description:
            'The complete cost of storage, transfer, operations, security, and maintenance.',
        },
      ],
    },

    {
      title: 'When Not to Use S3',
      content:
        'S3 is not a replacement for every storage system. Transaction-heavy relational workloads, low-latency key-value access patterns, graph workloads, and specialized database operations may require databases or other storage systems designed for those requirements.',
      highlights: [
        {
          title: 'Relational database',
          description:
            'A database optimized for structured relational data and transactional operations.',
        },
        {
          title: 'Key-value database',
          description:
            'A database optimized for retrieving values using keys.',
        },
        {
          title: 'Workload fit',
          description:
            'Selecting storage based on access patterns, consistency, latency, and data requirements.',
        },
      ],
    },

    {
      title: 'Common Mistakes',
      content:
        'Common S3 mistakes include accidentally exposing buckets publicly, granting excessive permissions, storing secrets without appropriate controls, ignoring lifecycle policies, retaining unnecessary data indefinitely, overlooking transfer costs, and failing to define recovery and retention requirements.',
      highlights: [
        {
          title: 'Public bucket exposure',
          description:
            'Accidentally making stored data accessible to unauthorized users.',
        },
        {
          title: 'Over-permissioned access',
          description:
            'Granting identities broader storage permissions than required.',
        },
        {
          title: 'No lifecycle policy',
          description:
            'Allowing obsolete data to accumulate without automated retention or archival rules.',
        },
        {
          title: 'Undefined retention',
          description:
            'Failing to establish how long important data should be retained.',
        },
      ],
    },
  ],

  relatedTechnologyIds: [
    'cloud',
    'aws',
    'aws-ec2',
    'aws-lambda',
    'serverless',
    'terraform',
    'ansible',
    'docker',
    'kubernetes',
    'helm',
    'ci-cd',
    'github-actions',
    'deployment',
    'deployment-strategy',
    'release-management',
    'artifact-management',
    'rollback-strategy',
  ],
}

export default s3Knowledge
