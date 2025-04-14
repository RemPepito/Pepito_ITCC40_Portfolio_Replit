import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCertificate, FaAward, FaUniversity } from "react-icons/fa";

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
    <AnimatedSection id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative text-foreground">
          <span className="text-primary">Education</span> & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-xl bg-card border border-border shadow-lg h-full"
            >
              <div className="flex flex-col items-center text-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-md mb-4 text-xl"
                >
                  {item.icon}
                </motion.div>
                <div>
                  <div className="text-sm text-primary font-semibold mb-1">
                    {item.years}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}