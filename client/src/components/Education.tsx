import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCertificate, FaCode } from "react-icons/fa";

export default function Education() {
  const educationItems = [
    {
      id: "university",
      years: "2022 - 2026",
      title: "Xavier University Ateneo de Cagayan",
      subtitle: "Bachelor's Degree in Information Technology",
      description: "Specializing in Network Administration with coursework in advanced networking, system administration, and IT infrastructure management.",
      icon: <FaGraduationCap />,
      color: "primary"
    },
    {
      id: "certification",
      years: "2023",
      title: "Network+ Certification",
      subtitle: "CompTIA",
      description: "Comprehensive understanding of networking concepts, infrastructure, and troubleshooting methodologies.",
      icon: <FaCertificate />,
      color: "accent"
    },
    {
      id: "bootcamp",
      years: "2022",
      title: "Web Development Bootcamp",
      subtitle: "Online Course",
      description: "Intensive training in full-stack web development with focus on HTML, CSS, JavaScript, and responsive design principles.",
      icon: <FaCode />,
      color: "primary"
    }
  ];
  
  return (
    <AnimatedSection id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-primary">Education</span> & Training
        </h2>
        <div className="max-w-3xl mx-auto">
          {educationItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8 sm:pl-32 py-6 group"
            >
              <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary">
                <span className={`absolute left-0 sm:left-24 top-6 flex items-center justify-center w-8 h-8 bg-${item.color} text-white rounded-full`}>
                  {item.icon}
                </span>
                <div className={`w-full sm:w-24 text-sm mb-2 sm:mb-0 sm:text-right sm:mr-8 text-${item.color} font-semibold`}>
                  {item.years}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </div>
              </div>
              <div className="pl-0 sm:pl-32 mt-2">
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
