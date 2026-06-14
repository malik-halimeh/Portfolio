import { motion } from "framer-motion";
import { ProfileImage } from "@/components/ProfileImage";
import { Mail, FileText, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -70, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] bg-accent/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1 text-center md:text-left">
            <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wide">
              AI Engineer
            </motion.h2>
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
              Malik Halimeh
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed mx-auto md:mx-0">
              Building practical, enterprise-grade AI systems. Specializing in Agentic AI, RAG, and workflow automation to turn capabilities into measurable business outcomes.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-10">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-4 glass-card text-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-border"
              >
                Contact Me
                <Mail size={18} />
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center md:justify-start gap-6">
              <a href="https://github.com/malik-halimeh" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-foreground hover:text-primary transition-colors hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/malik-halimeh" target="_blank" rel="noopener noreferrer" className="p-3 glass-card rounded-full text-foreground hover:text-primary transition-colors hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex-1 flex justify-center md:justify-end">
            <ProfileImage />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
