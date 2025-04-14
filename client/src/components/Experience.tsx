import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaUserTie, FaNetworkWired } from "react-icons/fa";

export default function Experience() {
  const experiences = [
    {
      id: "intern-1",
      title: "Network Administrator Intern",
      company: "XU Information Technology Resource Center",
      period: "Summer 2023",
      description: "Assisted in maintaining and optimizing the university's network infrastructure. Configured network devices, monitored network traffic, and responded to technical issues.",
      icon: <FaNetworkWired />,
      color: "#3B82F6"
    },
    {
      id: "freelance-1",
      title: "Web Developer",
      company: "Freelance",
      period: "2022 - Present",
      description: "Designed and developed responsive websites for various clients using modern technologies like React, Next.js and Tailwind CSS. Focused on creating intuitive user interfaces and optimized performance.",
      icon: <FaLaptopCode />,
      color: "#EC4899"
    },
    {
      id: "project-lead",
      title: "Student Project Lead",
      company: "Xavier University",
      period: "2023",
      description: "Led a team of four students in developing an integrated library management system for the university. Coordinated tasks, managed timelines, and ensured quality deliverables.",
      icon: <FaUserTie />,
      color: "#10B981"
    },
    {
      id: "volunteer",
      title: "IT Volunteer",
      company: "Community Tech Support Program",
      period: "2022",
      description: "Provided technical support and training to local community members. Assisted with computer setup, software installation, and basic troubleshooting.",
      icon: <FaBriefcase />,
      color: "#F59E0B"
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="text-primary">Work</span> Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-xl transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" 
                    style={{ backgroundColor: exp.color }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl"
                    >
                      {exp.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary text-sm">{exp.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary text-sm font-medium flex items-center gap-1"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}