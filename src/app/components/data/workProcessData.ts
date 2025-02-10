export interface ArchitectureStep {
  number: number;
  title: string;
  description: string;
}

interface Card {
  title: string;
  description: string;
  steps: ArchitectureStep[];
  image: string;
}

const architectureSteps: ArchitectureStep[] = [
  {
    number: 1,
    title: 'Market Research and Analysis',
    description: 'Identify target audience needs and preferences through comprehensive research.',
  },
  {
    number: 2,
    title: 'Design Development',
    description: 'Create detailed architectural plans and conceptual designs.',
  },
  {
    number: 3,
    title: 'Technical Documentation',
    description: 'Prepare construction documents and specifications.',
  },
  {
    number: 4,
    title: 'Project Execution',
    description: 'Oversee construction and ensure quality implementation.',
  },
];

const visualizationSteps: ArchitectureStep[] = [
  {
    number: 1,
    title: 'Concept Development',
    description: 'Create detailed 3D models based on architectural plans.',
  },
  {
    number: 2,
    title: 'Material and Lighting',
    description: 'Set up materials, textures, and lighting for realism.',
  },
  {
    number: 3,
    title: 'Rendering Process',
    description: 'Generate high-quality renders with atmospheric effects.',
  },
  {
    number: 4,
    title: 'Post-Production',
    description: 'Apply final touches and visual enhancements.',
  },
];

const interiorDesignSteps: ArchitectureStep[] = [
  {
    number: 1,
    title: 'Space Planning',
    description: 'Analyze space requirements and create efficient layouts.',
  },
  {
    number: 2,
    title: 'Design Concept',
    description: 'Develop unique design concepts matching client preferences.',
  },
  {
    number: 3,
    title: 'Material Selection',
    description: 'Choose materials and fixtures aligned with design concept.',
  },
  {
    number: 4,
    title: 'Implementation',
    description: 'Oversee installation and ensure quality execution.',
  },
];

export const cards: Card[] = [
  {
    title: "Our architecture",
    description: "From meticulous research to execution, we deliver comprehensive architectural solutions that transform spaces and enhance lives.",
    steps: architectureSteps,
    image: "https://res.cloudinary.com/dd8b38vlu/image/upload/v1738978958/Enscape_2024-07-02-21-23-52_qicspu.png"
  },
  {
    title: "Our visualization",
    description: "Transform architectural concepts into photorealistic visualizations through advanced 3D rendering and artistic expertise.",
    steps: visualizationSteps,
    image: "https://res.cloudinary.com/dd8b38vlu/image/upload/v1738978959/Enscape_2024-07-02-21-17-40_i9nbn6.png"
  },
  {
    title: "Our interior design",
    description: "Create stunning interior spaces that balance aesthetics and functionality, tailored to each client's unique style.",
    steps: interiorDesignSteps,
    image: "https://res.cloudinary.com/dd8b38vlu/image/upload/v1738978956/Image_9_hvufhp.png"
  }
];