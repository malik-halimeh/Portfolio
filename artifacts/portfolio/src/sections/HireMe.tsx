import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function HireMe() {
  const reasons = [
    { title: "Practical AI Implementation", desc: "Moving beyond proof-of-concepts to build resilient systems that handle edge cases." },
    { title: "Enterprise Automation Mindset", desc: "Always looking for ways to streamline operations and reduce repetitive overhead." },
    { title: "End-to-End Ownership", desc: "From gathering requirements to deployment and maintenance. I take full responsibility." },
    { title: "Business-Focused", desc: "Technology is a tool. The goal is always to deliver measurable value and ROI." },
    { title: "Rapid Learning", desc: "Adapting quickly to the constantly evolving AI landscape to leverage the best tools." }
  ];

  return (
    <section id="hire" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 transform -skew-y-3 origin-top-left -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Hire Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 glass-card rounded-xl"
            >
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">{reason.title}</h4>
                <p className="text-muted-foreground">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
