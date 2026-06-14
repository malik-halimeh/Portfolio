import { motion } from "framer-motion";
import { skills } from "@/data/skills";
import { SkillCard } from "@/components/SkillCard";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Skills</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground">
            A balanced mix of deep technical expertise and strategic business thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
