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
      initial={{ opacity: 0, x: -20 }}
      animate={isActive ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 20, scale: 0.9 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`flex items-center justify-start w-full h-full ${isActive ? 'block' : 'hidden'}`}
      data-parallax="0.05"
    >
      <div className="flex items-center gap-6 w-full">
        <motion.div 
          className="text-6xl flex-shrink-0" 
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
            repeatDelay: 5
          }}
        >
          {icon}
        </motion.div>
        
        <div className="flex flex-col items-start">
          <motion.h3 
            className="text-2xl font-semibold text-white mb-2"
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
          <p className="text-left text-gray-300">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
