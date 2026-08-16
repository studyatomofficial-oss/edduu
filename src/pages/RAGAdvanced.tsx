function RAGAdvanced() {
  const sections = [
    {
      id: 'problem',
      step: '01',
      title: 'Start with the problem',
      paragraphs: [
        'RAG exists when an application needs an AI model to answer using knowledge that may be private, recent, changing, or outside the model’s original training data.',
        'The engineering goal is not simply to connect a vector database to an LLM. The goal is to build a reliable information pipeline that can find useful evidence and give that evidence to the model at answer time.',
      ],
    },
    {
      id: 'architecture',
      step: '02',
      title: 'Understand the architecture',
      paragraphs: [
        'A production RAG system can be understood as two connected paths: knowledge preparation and question answering.',
        'Knowledge preparation turns source material into searchable representations. Question answering uses the user query to retrieve relevant evidence and supplies that evidence to the language model.',
      ],
      flow: [
        'Documents',
        'Extraction',
        'Chunking',
        'Embeddings',
        'Vector Store',
        'Retrieval',
        'Context',
        'LLM',
        'Answer',
      ],
    },
    {
      id: 'documents',
      step: '03',
      title: 'Prepare the knowledge',
      paragraphs: [
        'Start with the sources your application is allowed to use: documents, web content, internal knowledge bases, databases, or other structured information.',
        'Before retrieval can work well, the source material must be extracted, cleaned, normalised, and divided into useful units.',
      ],
      items: [
        ['Source intake', 'Collect the information the application is expected to answer from.'],
        ['Extraction', 'Convert supported source formats into usable text or structured content.'],
        ['Cleaning', 'Remove noise while preserving information that affects meaning.'],
        ['Chunking', 'Divide content into retrieval-friendly pieces with enough context to remain useful.'],
      ],
    },
    {
      id: 'embeddings',
      step: '04',
      title: 'Create searchable representations',
      paragraphs: [
        'Embeddings represent the meaning of content numerically so that semantically related information can be compared.',
        'Each chunk can be represented and stored with metadata. The exact embedding model and storage technology can change without changing the underlying engineering pattern.',
      ],
      items: [
        ['Embedding model', 'Converts text into numerical representations suitable for semantic comparison.'],
        ['Metadata', 'Preserves useful information such as source, document, section, permissions, or timestamps.'],
        ['Vector store', 'Stores representations and supports similarity-oriented retrieval.'],
      ],
    },
    {
      id: 'retrieval',
      step: '05',
      title: 'Retrieve the right evidence',
      paragraphs: [
        'When the user asks a question, the system transforms the query into a form that can be compared against the stored knowledge.',
        'Retrieval quality is one of the most important parts of RAG. If the wrong evidence is retrieved, the language model can produce a poor answer even when the model itself is working correctly.',
      ],
      items: [
        ['Query understanding', 'Interpret what information the user is actually asking for.'],
        ['Candidate retrieval', 'Find potentially relevant chunks from the knowledge store.'],
        ['Top-K selection', 'Control how much evidence is passed forward.'],
        ['Reranking', 'Optionally improve ordering by applying a stronger relevance assessment.'],
      ],
    },
    {
      id: 'context',
      step: '06',
      title: 'Construct the context',
      paragraphs: [
        'Retrieved evidence must be assembled into useful context before generation.',
        'The application decides what evidence is included, how it is ordered, how duplicates are handled, and how much context the model should receive.',
      ],
    },
    {
      id: 'generation',
      step: '07',
      title: 'Generate the grounded answer',
      paragraphs: [
        'The language model receives the user question together with the selected evidence and instructions for how that evidence should be used.',
        'The model is still responsible for generation. RAG does not make the model automatically correct; it gives the model relevant external evidence to work with.',
      ],
    },
    {
      id: 'production',
      step: '08',
      title: 'Design for production',
      paragraphs: [
        'A prototype can demonstrate retrieval and generation. A production system must additionally deal with reliability, security, cost, latency, freshness, observability, and evaluation.',
      ],
      production: [
        'Retrieval quality',
        'Answer faithfulness',
        'Latency',
        'Caching',
        'Infrastructure cost',
        'Monitoring',
        'Failure handling',
        'Data freshness',
        'Access control',
        'Evaluation',
      ],
    },
    {
      id: 'tools',
      step: '09',
      title: 'Choose technologies after understanding the pattern',
      paragraphs: [
        'The architecture should remain stable even when the implementation technology changes.',
        'Depending on the requirement, teams may choose different embedding providers, vector databases, orchestration frameworks, model providers, storage systems, or deployment platforms.',
        'The important engineering skill is understanding the responsibility of each layer rather than memorising one vendor-specific implementation.',
      ],
    },
    {
      id: 'verify',
      step: '10',
      title: 'Verify the whole system',
      paragraphs: [
        'A RAG system should be evaluated as an end-to-end pipeline. Test whether the right evidence is retrieved, whether the answer is supported by that evidence, and whether the system behaves acceptably under real operating conditions.',
      ],
      items: [
        ['Retrieval evaluation', 'Does the system find the information that should answer the question?'],
        ['Generation evaluation', 'Does the answer faithfully use the available evidence?'],
        ['Operational evaluation', 'Are latency, cost, availability, and failure behaviour acceptable?'],
        ['Regression evaluation', 'Does a change in chunking, retrieval, models, or prompts improve rather than silently damage quality?'],
      ],
    },
  ]

  return (
    <section className="edduu-advanced-page">
      <div className="edduu-container">
        <header className="edduu-advanced-header">
          <p className="edduu-advanced-eyebrow">RAG ADVANCED</p>
          <h1 className="edduu-advanced-title">
            Build It in the Real World
          </h1>
          <p className="edduu-advanced-summary">
            A universal implementation guide for understanding how a real RAG
            system is designed, assembled, evaluated, and operated in production.
          </p>

          <nav className="edduu-advanced-nav" aria-label="RAG guide sections">
            {sections.map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.step} · {section.title}
              </a>
            ))}
          </nav>
        </header>

        <div className="edduu-advanced-layout">
          <main className="edduu-advanced-content">
            {sections.map((section, index) => (
              <article
                key={section.id}
                id={section.id}
                className={`edduu-advanced-section ${
                  index === sections.length - 1 ? 'edduu-advanced-final' : ''
                }`}
              >
                <p className="edduu-advanced-step">
                  {section.step} — IMPLEMENTATION
                </p>

                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.flow && (
                  <div className="edduu-advanced-flow">
                    {section.flow.map((item, flowIndex) => (
                      <span key={item}>
                        {item}
                        {flowIndex < section.flow.length - 1 ? ' →' : ''}
                      </span>
                    ))}
                  </div>
                )}

                {section.items && (
                  <div className="edduu-advanced-grid">
                    {section.items.map(([title, description]) => (
                      <div key={title}>
                        <strong>{title}</strong>
                        <p>{description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {section.production && (
                  <div className="edduu-advanced-production">
                    {section.production.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                )}

                {section.id === 'verify' && (
                  <strong>
                    The final question is simple: can the system reliably turn
                    the right knowledge into a useful, grounded answer?
                  </strong>
                )}
              </article>
            ))}
          </main>

          <aside className="edduu-advanced-sidebar">
            <strong>RAG navigation</strong>

            {sections.slice(0, 6).map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                {section.step} — {section.title}
              </a>
            ))}

            <div className="edduu-advanced-sidebar-divider" />

            <a className="edduu-advanced-lab-link" href="#lab/rag">
              Enter RAG Lab →
            </a>

            <a href="#knowledge/rag">
              Back to RAG Knowledge →
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default RAGAdvanced
