import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGoogle, FaUsers, FaNewspaper } from "react-icons/fa";

export default function Organizations() {
  const organizations = [
    {
      id: "google-dev",
      title: "Google Developers Club",
      role: "Member",
      description: "Participated in workshops, hackathons, and events focused on Google technologies and developer tools.",
      icon: <FaGoogle />,
      color: "#4285F4"
    },
    {
      id: "cssc",
      title: "Computer Studies Student Council",
      role: "Member",
      description: "Contributed to organizing events, workshops, and activities for the Computer Studies department.",
      icon: <FaUsers />,
      color: "#10B981"
    },
    {
      id: "wizard-dispatch",
      title: "Wizard Dispatch",
      role: "Contributor",
      description: "Contributed to the development and content creation of this social news platform, focusing on technology and digital culture.",
      icon: <FaNewspaper />,
      color: "#8B5CF6"
    }
  ];

  return (
    <AnimatedSection id="organizations" className="py-24 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="text-primary">Organizations</span> & Involvements
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col md:flex-row gap-6 items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
                className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl"
                style={{ backgroundColor: org.color }}
              >
                {org.icon}
              </motion.div>
              
              <motion.div 
                className="flex-1 bg-gray-700 p-6 rounded-lg shadow-lg border border-gray-600"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-bold text-white mb-1">{org.title}</h3>
                <p className="text-primary font-medium mb-3">{org.role}</p>
                <p className="text-gray-300">{org.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}