export interface Project {
  title: string;
  description: string;
  technologies: string[];
  achievements: string;
  architectureHighlight: string;
  githubUrl: string;
  liveDemoUrl: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Knowledge Assistant (RAG System)",
    description: "An enterprise-grade knowledge retrieval system built on Retrieval-Augmented Generation. Connects large language models to proprietary business knowledge bases using vector similarity search.",
    technologies: ["OpenAI API", "ChromaDB", "Python", "FastAPI", "Embeddings"],
    achievements: "Sub-second retrieval across 100k+ documents, 90%+ answer accuracy on internal knowledge base.",
    architectureHighlight: "Vector embedding pipeline, semantic chunking, context-aware prompt engineering.",
    githubUrl: "",
    liveDemoUrl: ""
  },
  {
    title: "Agentic Business Assistant",
    description: "An autonomous AI agent capable of multi-step reasoning and tool use to handle complex business workflows without human intervention.",
    technologies: ["OpenAI Function Calling", "Python", "REST APIs", "n8n"],
    achievements: "Reduced manual processing time by 70%, handles 15+ business workflow types.",
    architectureHighlight: "Tool-use pipeline, memory management, decision tree routing.",
    githubUrl: "",
    liveDemoUrl: ""
  },
  {
    title: "AI Workflow Automation System",
    description: "End-to-end automation platform integrating AI decision-making with enterprise business processes.",
    technologies: ["n8n", "OpenAI API", "FastAPI", "REST APIs", "Python"],
    achievements: "Automated 3 full business departments, 85% reduction in repetitive tasks.",
    architectureHighlight: "Event-driven pipeline, AI-powered decision nodes, multi-system integration.",
    githubUrl: "",
    liveDemoUrl: ""
  },
  {
    title: "Restaurant Management Web Application",
    description: "Full-stack restaurant management system with inventory, order management, and reporting.",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    achievements: "Live deployment serving real restaurant operations, real-time inventory tracking.",
    architectureHighlight: "MVC architecture, relational database design, real-time updates.",
    githubUrl: "",
    liveDemoUrl: ""
  }
];
