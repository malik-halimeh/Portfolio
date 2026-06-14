export interface Skill {
  name: string;
  level: string;
  percentage: number;
}

export const skills: Skill[] = [
  { name: "AI Engineering", level: "Expert", percentage: 95 },
  { name: "Enterprise Automation", level: "Advanced", percentage: 88 },
  { name: "Backend Development", level: "Intermediate", percentage: 75 },
  { name: "Problem Solving", level: "Expert", percentage: 98 },
  { name: "System Design", level: "Advanced", percentage: 85 },
  { name: "Business-Oriented Thinking", level: "Advanced", percentage: 90 }
];
