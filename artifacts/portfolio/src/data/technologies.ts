export interface Technology {
  name: string;
  category: "AI Engineering" | "Automation & Integration" | "Software Engineering" | "Cloud & Enterprise";
}

export const technologies: Technology[] = [
  { name: "OpenAI API", category: "AI Engineering" },
  { name: "Claude API", category: "AI Engineering" },
  { name: "Prompt Engineering", category: "AI Engineering" },
  { name: "RAG", category: "AI Engineering" },
  { name: "Vector Databases", category: "AI Engineering" },
  { name: "ChromaDB", category: "AI Engineering" },
  { name: "Embeddings", category: "AI Engineering" },
  { name: "AI Agents", category: "AI Engineering" },
  { name: "Function Calling", category: "AI Engineering" },
  
  { name: "n8n", category: "Automation & Integration" },
  { name: "REST APIs", category: "Automation & Integration" },
  { name: "FastAPI", category: "Automation & Integration" },
  { name: "Enterprise Automation", category: "Automation & Integration" },
  
  { name: "Python", category: "Software Engineering" },
  { name: "JavaScript", category: "Software Engineering" },
  { name: "PHP", category: "Software Engineering" },
  { name: "MySQL", category: "Software Engineering" },
  { name: "HTML", category: "Software Engineering" },
  { name: "CSS", category: "Software Engineering" },
  
  { name: "Azure Fundamentals", category: "Cloud & Enterprise" },
  { name: "AWS Fundamentals", category: "Cloud & Enterprise" },
  { name: "Microsoft Copilot Studio", category: "Cloud & Enterprise" },
  { name: "AI Governance", category: "Cloud & Enterprise" }
];
