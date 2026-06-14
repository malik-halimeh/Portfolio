import { motion } from "framer-motion";
import { User } from "lucide-react";
import myPhoto from "@/assets/ProfileImage.jpeg";

export function ProfileImage() {
  return (
    <motion.div
      className="relative w-48 h-48 md:w-64 md:h-64 rounded-full p-2 bg-gradient-to-tr from-primary/40 to-accent/40 backdrop-blur-md shadow-2xl overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0 bg-black/20 dark:bg-white/5 rounded-full" />
      <div className="w-full h-full rounded-full border border-white/20 overflow-hidden bg-background/80 flex items-center justify-center relative">
        {/* Replace src/assets/profile/headshot.jpg with your professional headshot to display it here */}
        <img src={myPhoto} alt="Profile" className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
}
