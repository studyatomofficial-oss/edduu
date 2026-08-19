import type { KnowledgeDefinition } from './knowledge'

export const computerVisionKnowledge: KnowledgeDefinition = {
  technologyId: 'computer-vision',
  slug: 'computer-vision',
  title: 'What is Computer Vision?',
  summary:
    'Computer Vision is the field of AI that enables systems to extract information, recognize patterns, and make decisions from images, video, and other visual data.',
  difficulty: 'advanced',
  sections: [
    {
      title: 'What is Computer Vision?',
      content:
        'Computer Vision is a branch of artificial intelligence that enables computers to process and understand visual information such as images and video. A vision system can detect objects, recognize patterns, classify images, estimate properties, track movement, extract text, or generate useful information from visual data.',
    },
    {
      title: 'Why do we need Computer Vision?',
      content:
        'Images and video contain large amounts of information that would be difficult for humans to inspect continuously or at large scale. Computer Vision allows software systems to automatically analyze visual information and turn it into structured information that can support decisions and workflows.',
    },
    {
      title: 'How does Computer Vision work?',
      content:
        'A Computer Vision system receives visual input and processes it using algorithms or trained models. The system may first transform the image into a representation that a model can process, extract useful features, and then produce an output such as a classification, detected object, location, segmentation mask, or extracted text. Modern systems commonly use deep neural networks and increasingly Transformer-based architectures.',
    },
    {
      title: 'The Computer Vision pipeline',
      content:
        'A typical vision pipeline includes collecting images or video, preparing and labeling data, preprocessing inputs, training or selecting a model, evaluating predictions, deploying the model, and monitoring its behavior in production. The exact pipeline depends on whether the system performs classification, detection, segmentation, recognition, or another visual task.',
      highlights: [
        {
          title: 'Image',
          description:
            'A visual input represented as pixels that can be processed by a computer vision system.',
        },
        {
          title: 'Preprocessing',
          description:
            'Transforms visual inputs into a suitable form for model processing.',
        },
        {
          title: 'Feature representation',
          description:
            'A learned or engineered representation containing useful information about the visual input.',
        },
        {
          title: 'Prediction',
          description:
            'The output produced by the model for the supplied visual input.',
        },
        {
          title: 'Detection',
          description:
            'Identifies objects or regions of interest and their locations within an image.',
        },
        {
          title: 'Segmentation',
          description:
            'Assigns information to individual pixels or regions to describe visual boundaries or areas.',
        },
      ],
    },
    {
      title: 'Important Computer Vision concepts',
      content:
        'Different vision tasks require different types of outputs. Understanding these tasks helps determine which model architecture and evaluation approach are appropriate.',
      highlights: [
        {
          title: 'Image classification',
          description:
            'Assigns one or more categories to an entire image.',
        },
        {
          title: 'Object detection',
          description:
            'Identifies objects and estimates where they appear in an image.',
        },
        {
          title: 'Image segmentation',
          description:
            'Separates an image into meaningful pixel-level or region-level areas.',
        },
        {
          title: 'OCR',
          description:
            'Extracts machine-readable text from images or scanned documents.',
        },
        {
          title: 'Image recognition',
          description:
            'Identifies known visual patterns, objects, or entities from image data.',
        },
        {
          title: 'Object tracking',
          description:
            'Follows detected objects across multiple video frames.',
        },
      ],
    },
    {
      title: 'Traditional Computer Vision vs Deep Learning',
      content:
        'Traditional Computer Vision systems often rely on manually designed operations such as edge detection, feature extraction, and image transformations. Deep Learning systems can learn useful visual representations directly from training data. This has made neural network approaches highly effective for many complex vision tasks, although traditional techniques can still be useful in specific controlled environments.',
    },
    {
      title: 'Computer Vision and Neural Networks',
      content:
        'Neural Networks provide the computational foundation for many modern Computer Vision systems. Convolutional Neural Networks have been widely used for extracting spatial patterns from images, while Vision Transformers and other attention-based architectures have become increasingly important for large-scale visual understanding.',
    },
    {
      title: 'Computer Vision and multimodal AI',
      content:
        'Modern AI systems can combine visual information with text, audio, and other modalities. A multimodal model may analyze an image together with a natural language instruction and produce a textual answer, structured information, or another form of output. This allows visual understanding to become part of broader AI workflows rather than remaining an isolated image-processing task.',
    },
    {
      title: 'Computer Vision in real products',
      content:
        'Computer Vision is used in document processing, quality inspection, medical imaging, security systems, retail analytics, autonomous systems, manufacturing, agriculture, visual search, identity verification, and content moderation. The production value comes from connecting visual predictions to a useful business or operational workflow.',
    },
    {
      title: 'Computer Vision in production',
      content:
        'Production vision systems must consider image quality, lighting and environmental variation, model accuracy, false positives, false negatives, latency, infrastructure cost, privacy, security, monitoring, model drift, data drift, and failure handling. A model that performs well on a controlled dataset may behave differently when deployed against real-world visual inputs.',
    },
    {
      title: 'Evaluating Computer Vision systems',
      content:
        'Evaluation depends on the task. Classification systems may use metrics such as accuracy, precision, recall, and F1 score. Detection and segmentation systems require metrics that consider both prediction quality and spatial overlap. Production evaluation should also consider latency, cost, reliability, and the business impact of incorrect predictions.',
      highlights: [
        {
          title: 'Precision',
          description:
            'Measures how many predicted positive results are actually correct.',
        },
        {
          title: 'Recall',
          description:
            'Measures how many relevant positive cases the system successfully identifies.',
        },
        {
          title: 'Intersection over Union',
          description:
            'Measures the overlap between predicted and expected regions or bounding areas.',
        },
        {
          title: 'False positive',
          description:
            'Occurs when the system identifies something that is not actually present.',
        },
        {
          title: 'False negative',
          description:
            'Occurs when the system fails to identify something that is actually present.',
        },
      ],
    },
    {
      title: 'Explore Computer Vision in EDDUU',
      content:
        'EDDUU connects Computer Vision with Deep Learning, Neural Networks, Transformers, Multimodal AI, PyTorch, AI Evaluation, and Generative AI.',
    },
  ],
  relatedTechnologyIds: [
    'ai',
    'machine-learning',
    'deep-learning',
    'neural-networks',
    'transformers',
    'multimodal-ai',
    'pytorch',
    'ai-evaluation',
    'genai',
  ],
}

export default computerVisionKnowledge
