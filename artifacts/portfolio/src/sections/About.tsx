import { motion } from "framer-motion";
import { Terminal, BrainCircuit, Cog } from "lucide-react";

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mb-8 rounded-full"></div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I am an AI Engineer based in Lebanon with a strong foundation in software development. 
            I bring a build-first mindset to solving real business problems — from designing intelligent 
            knowledge assistants to automating complex operational workflows.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Terminal size={100} />
            </div>
            <Terminal className="text-primary w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-4">Software Foundation</h3>
            <p className="text-muted-foreground">
              Deep roots in computer science and full-stack development ensure that the AI systems I build are scalable, maintainable, and production-ready.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <BrainCircuit size={100} />
            </div>
            <BrainCircuit className="text-primary w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-4">AI Engineering</h3>
            <p className="text-muted-foreground">
              Specialized in Agentic AI and Retrieval-Augmented Generation (RAG). I don't just prompt — I build robust pipelines that connect LLMs to proprietary data safely.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-card p-8 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Cog size={100} />
            </div>
            <Cog className="text-primary w-12 h-12 mb-6" />
            <h3 className="text-xl font-bold text-foreground mb-4">Enterprise Automation</h3>
            <p className="text-muted-foreground">
              Focused on ROI. I integrate AI decision-making into existing business processes to reduce manual overhead and unlock new capabilities.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
