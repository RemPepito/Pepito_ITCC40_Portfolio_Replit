import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SkillItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  isActive: boolean;
}

export default function SkillItem({ icon, title, description, color, isActive }: SkillItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isActive ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex flex-col items-center ${isActive ? 'block' : 'hidden'}`}
      data-parallax="0.05"
    >
      <motion.div 
        className="text-5xl mb-4" 
        style={{ color }}
        animate={isActive ? { 
          rotateY: [0, 360],
          scale: [1, 1.1, 1]
        } : {}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          repeat: isActive ? Infinity : 0,
          repeatType: "loop",
          repeatDelay: 3
        }}
      >
        {icon}
      </motion.div>
      <motion.h3 
        className="text-xl font-semibold"
        animate={isActive ? { 
          scale: [1, 1.05, 1] 
        } : {}}
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        {title}
      </motion.h3>
      <p className="text-center text-sm mt-2">{description}</p>
    </motion.div>
  );
}
