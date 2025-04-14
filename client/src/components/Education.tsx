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
      id: "seniorhigh",
      years: "2020 - 2022",
      title: "Kong Hua School",
      subtitle: "Senior High School",
      description: "Completed senior high school education with focus on STEM (Science, Technology, Engineering, and Mathematics) track.",
      icon: <FaGraduationCap />,
      color: "primary"
    },
    {
      id: "juniorhigh",
      years: "2016 - 2020",
      title: "Kong Hua School",
      subtitle: "Junior High School",
      description: "Completed junior high school education with academic excellence and participation in technology-related activities and competitions.",
      icon: <FaGraduationCap />,
      color: "primary"
    },
    {
      id: "elementary",
      years: "2010 - 2016",
      title: "Kong Hua School",
      subtitle: "Elementary Education",
      description: "Built a strong foundation in basic education with early interest in computers and technology.",
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
    }
  ];
  
  return (
    <AnimatedSection id="education" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative fade-in-section text-white">
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
              className="relative pl-8 sm:pl-32 py-8 mb-8 group fade-in-section"
            >
              <motion.div 
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col sm:flex-row items-start mb-4 group-hover:text-primary"
              >
                <motion.span 
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-0 sm:left-24 top-8 flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-md"
                >
                  {item.icon}
                </motion.span>
                <div className="w-full sm:w-24 text-sm mb-2 sm:mb-0 sm:text-right sm:mr-8 text-primary font-semibold">
                  {item.years}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.subtitle}</p>
                </div>
              </motion.div>
              <div className="pl-0 sm:pl-32 mt-2">
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
