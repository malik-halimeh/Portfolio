import { motion } from "framer-motion";
import { technologies } from "@/data/technologies";
import { TechnologyCard } from "@/components/TechnologyCard";

export function Technologies() {
  const categories = Array.from(new Set(technologies.map(t => t.category)));

  return (
    <section id="technologies" className="py-24 bg-foreground/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Technologies</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={category}>
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-semibold text-foreground mb-6"
              >
                {category}
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {technologies
                  .filter(t => t.category === category)
                  .map((tech, index) => (
                    <TechnologyCard key={tech.name} tech={tech} index={index + catIndex * 5} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
