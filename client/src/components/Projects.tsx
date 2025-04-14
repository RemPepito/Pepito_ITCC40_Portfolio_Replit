import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaCode, FaDesktop, FaShoppingCart, FaTicketAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      id: "violation-system",
      title: "OSA and SSIO Entry Violation System",
      description: "A digital system for tracking and managing entry violations for the Office of Student Affairs and Student Services Information Office.",
      icon: <FaDesktop />,
      color: "#3B82F6"
    },
    {
      id: "library-system",
      title: "XU Library Confab Reservation System",
      description: "An online platform for booking and managing conference room reservations at the Xavier University Library.",
      icon: <FaCode />,
      color: "#10B981"
    },
    {
      id: "ecommerce",
      title: "BeePack Ecommerce",
      description: "A fully-functional e-commerce platform for selling packaging products with inventory management and order processing capabilities.",
      icon: <FaShoppingCart />,
      color: "#F59E0B"
    },
    {
      id: "ticketing",
      title: "Concert Ticketing System",
      description: "A secure concert ticket booking system with seat selection, payment processing, and QR code ticket generation.",
      icon: <FaTicketAlt />,
      color: "#EC4899"
    }
  ];

  return (
    <AnimatedSection id="projects" className="py-24 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="text-primary">Project</span> Portfolio
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto card-container">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
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
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white mr-4" 
                    style={{ backgroundColor: project.color }}
                  >
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                      className="text-xl"
                    >
                      {project.icon}
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
                <p className="text-gray-300">{project.description}</p>
                <div className="mt-4 flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-primary text-sm font-medium"
                  >
                    View Details
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