import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { 
  FaGraduationCap, FaSchool, FaCertificate, FaAward, FaUniversity
} from "react-icons/fa";

export default function Education() {
  const educationItems = [
    {
      id: "kong-hua-school",
      icon: <FaSchool />,
      title: "Kong Hua School",
      subtitle: "Grade School to Senior High School",
      years: "2008 - 2022",
      description: "Completed primary and secondary education with academic excellence and participation in various extracurricular activities.",
      color: "primary"
    },
    {
      id: "xavier-university",
      icon: <FaUniversity />,
      title: "Xavier University",
      subtitle: "Ateneo de Cagayan",
      years: "2022 - 2026",
      description: "Pursuing a degree in Computer Science with focus on networking and system administration.",
      color: "primary"
    },
    {
      id: "cum-laude",
      icon: <FaGraduationCap />,
      title: "Future Cum Laude",
      subtitle: "Academic Excellence",
      years: "2026",
      description: "On track to graduate with honors, maintaining a high academic performance throughout university education.",
      color: "primary"
    },
    {
      id: "ccna",
      icon: <FaCertificate />,
      title: "CCNA Certification",
      subtitle: "Cisco Certified Network Associate",
      years: "2023",
      description: "Industry-recognized certification validating networking skills and knowledge for configuring, operating, and troubleshooting networks.",
      color: "primary"
    },
    {
      id: "network-admin",
      icon: <FaAward />,
      title: "Network Administrator",
      subtitle: "Professional Career",
      years: "Future",
      description: "Aspiring to become a skilled network administrator capable of designing, implementing, and managing complex network infrastructures.",
      color: "accent"
    }
  ];
  
  return (
    <AnimatedSection id="education" className="py-24 bg-gray-950">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative fade-in-section text-white">
          <span className="text-primary">Education</span> & Certifications
        </h2>
        <div className="max-w-6xl mx-auto relative" data-parallax="0.1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {educationItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative p-6 rounded-xl bg-gray-800 border border-gray-700 shadow-lg group fade-in-section hover:border-primary/40 transition-all duration-300"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full shadow-md"
                  >
                    {item.icon}
                  </motion.div>
                  <div className="flex-grow">
                    <div className="text-sm text-primary font-semibold mb-1">
                      {item.years}
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.subtitle}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}