import { motion } from "framer-motion";
import { Skill } from "@/data/skills";

export function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-5"
    >
      <div className="flex justify-between items-end mb-2">
        <h4 className="font-semibold text-foreground">{skill.name}</h4>
        <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
          {skill.level}
        </span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          className="h-full bg-primary"
        />
      </div>
    </motion.div>
  );
}
