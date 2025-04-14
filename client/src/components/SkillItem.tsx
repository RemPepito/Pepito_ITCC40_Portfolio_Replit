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
      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center ${isActive ? 'block' : 'hidden'}`}
    >
      <div className="text-5xl mb-4" style={{ color }}>{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-center text-sm mt-2">{description}</p>
    </motion.div>
  );
}
