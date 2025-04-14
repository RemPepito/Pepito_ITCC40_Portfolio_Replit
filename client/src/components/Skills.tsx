import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import SkillItem from "./SkillItem";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaDatabase,
  FaNetworkWired, FaServer, FaShieldAlt
} from "react-icons/fa";

const technicalSkills = [
  {
    id: "html",
    icon: <FaHtml5 />,
    title: "HTML",
    description: "Advanced markup structure and semantics",
    color: "#E34F26"
  },
  {
    id: "css",
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "Responsive design and animations",
    color: "#1572B6"
  },
  {
    id: "js",
    icon: <FaJsSquare />,
    title: "JavaScript",
    description: "Dynamic web applications and DOM manipulation",
    color: "#F7DF1E"
  },
  {
    id: "python",
    icon: <FaPython />,
    title: "Python",
    description: "Scripting and automation",
    color: "#3776AB"
  },
  {
    id: "java",
    icon: <FaJava />,
    title: "Java",
    description: "Object-oriented programming and enterprise applications",
    color: "#007396"
  },
  {
    id: "mysql",
    icon: <FaDatabase />,
    title: "MySQL",
    description: "Database design and management",
    color: "#4479A1"
  }
];

export default function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1); // Always slide from right to left
      setActiveSkillIndex((current) => (current + 1) % technicalSkills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSkill = technicalSkills[activeSkillIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  };

  return (
    <AnimatedSection id="skills" className="py-24 bg-[#1a2038]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Skills
        </h2>
        <div className="flex flex-col items-center justify-center gap-12 mb-16">
          <div className="w-full md:w-4/5 lg:w-4/5 mx-auto">
            <div className="monitor-frame">
              <div className="monitor-screen">
                <div className="w-full aspect-video flex items-center justify-center p-4 md:p-6 overflow-hidden">
                  <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                      key={activeSkillIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      className="flex flex-col items-center justify-center w-full h-full text-center"
                    >
                      <motion.div 
                        className="text-8xl md:text-9xl mb-6" 
                        style={{ color: currentSkill.color }}
                        animate={{ rotateY: [0, 360], scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 1.5,
                          ease: "easeInOut",
                          delay: 0.2,
                        }}
                      >
                        {currentSkill.icon}
                      </motion.div>
                      
                      <div className="flex flex-col items-center">
                        <motion.h3 
                          className="text-3xl md:text-4xl font-bold text-white mb-4"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            delay: 0.4
                          }}
                        >
                          {currentSkill.title}
                        </motion.h3>
                        <p className="text-center text-gray-300 text-xl md:text-2xl max-w-2xl">{currentSkill.description}</p>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto card-container">
          <motion.div 
            className="skill-text p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(79, 70, 229, 0.4)"
            }}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Network Administration</h3>
            <p className="text-gray-300">Proficient in configuring and maintaining network infrastructure, troubleshooting connectivity issues, and implementing security protocols.</p>
          </motion.div>
          
          <motion.div 
            className="skill-text p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(79, 70, 229, 0.4)"
            }}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">System Management</h3>
            <p className="text-gray-300">Experience with server configuration, user management, and system optimization for maximum performance and security.</p>
          </motion.div>
          
          <motion.div 
            className="skill-text p-6 bg-gray-800 rounded-lg shadow-md border border-gray-700 transition-all duration-300"
            whileHover={{ 
              scale: 1.02, 
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)",
              borderColor: "rgba(79, 70, 229, 0.4)"
            }}
          >
            <h3 className="text-xl font-semibold text-primary mb-2">Cybersecurity</h3>
            <p className="text-gray-300">Knowledge of security best practices, vulnerability assessment, and implementing protective measures against common threats.</p>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
