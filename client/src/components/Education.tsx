import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaNetworkWired } from "react-icons/fa";

export default function Education() {
  const educationItems = [
    {
      id: "university",
      years: "2022 - 2026",
      title: "Xavier University Ateneo de Cagayan",
      subtitle: "Bachelor's Degree in Information Technology",
      description: "Future cum laude graduate specializing in Network Administration with coursework in advanced networking, system administration, and IT infrastructure management.",
      icon: <FaGraduationCap />,
      color: "primary"
    },
    {
      id: "certification",
      years: "2024",
      title: "CCNA Certification",
      subtitle: "Cisco Certified Network Associate",
      description: "Comprehensive understanding of networking concepts, routing and switching infrastructure, and enterprise network solutions.",
      icon: <FaCertificate />,
      color: "accent"
    },
    {
      id: "additional",
      years: "2023",
      title: "Network Administration Training",
      subtitle: "Advanced Specialization",
      description: "Intensive training in enterprise network management, security protocols, and infrastructure design for modern organizations.",
      icon: <FaNetworkWired />,
      color: "primary"
    }
  ];
  
  return (
    <AnimatedSection id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative fade-in-section">
          <span className="text-primary">Education</span> & Certifications
        </h2>
        <div className="max-w-3xl mx-auto relative" data-parallax="0.1">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 sm:pl-32 py-6 group fade-in-section"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary"
              >
                <motion.span 
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute left-0 sm:left-24 top-6 flex items-center justify-center w-10 h-10 bg-${item.color} text-white rounded-full shadow-md`}
                >
                  {item.icon}
                </motion.span>
                <div className={`w-full sm:w-24 text-sm mb-2 sm:mb-0 sm:text-right sm:mr-8 text-${item.color} font-semibold`}>
                  {item.years}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </motion.div>
              <div className="pl-0 sm:pl-32 mt-2">
                <p className="text-gray-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
