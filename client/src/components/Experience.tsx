import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaNetworkWired, FaShieldAlt, FaServer } from "react-icons/fa";

export default function Experience() {
  const projectItems = [
    {
      id: "network",
      icon: <FaNetworkWired />,
      title: "Campus Network Design",
      description: "Designed and implemented a small-scale campus network model as part of university coursework, featuring VLANs, subnetting, and security protocols.",
      tags: ["Cisco Packet Tracer", "Networking"],
      color: "primary"
    },
    {
      id: "security",
      icon: <FaShieldAlt />,
      title: "Security Audit Simulation",
      description: "Conducted a comprehensive security audit for a simulated corporate environment, identifying vulnerabilities and recommending mitigation strategies.",
      tags: ["Cybersecurity", "Risk Assessment"],
      color: "accent"
    },
    {
      id: "server",
      icon: <FaServer />,
      title: "Server Virtualization Project",
      description: "Created a virtualized server environment using VMware, implementing load balancing, redundancy, and automated deployment strategies.",
      tags: ["VMware", "Linux"],
      color: "primary"
    }
  ];

  return (
    <AnimatedSection id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Projects & <span className="text-primary">Experience</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-${project.color}/10 flex items-center justify-center text-${project.color} mr-3`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`inline-block px-2 py-1 bg-${project.color}/10 text-${project.color} rounded ${tagIndex > 0 ? 'ml-2' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
