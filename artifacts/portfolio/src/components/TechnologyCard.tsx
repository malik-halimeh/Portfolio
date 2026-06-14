import { motion } from "framer-motion";
import { Technology } from "@/data/technologies";

export function TechnologyCard({ tech, index }: { tech: Technology; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="glass-card flex items-center justify-center p-4 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all cursor-default"
    >
      <span className="text-sm font-medium text-foreground text-center">
        {tech.name}
      </span>
    </motion.div>
  );
}
