import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { 
  FaFileWord, FaFileAlt, FaFileExcel, FaTable, FaCalendarAlt, FaGoogleDrive 
} from "react-icons/fa";

export default function AdminSkills() {
  const adminSkills = [
    {
      id: "word",
      title: "Microsoft Word",
      description: "Proficient in creating, editing, and formatting professional documents with advanced features like mail merge, styles, and templates.",
      icon: <FaFileWord />,
      color: "#2B579A"
    },
    {
      id: "docs",
      title: "Google Docs",
      description: "Skilled in collaborative document editing, cloud-based file management, and real-time collaboration features.",
      icon: <FaFileAlt />,
      color: "#4285F4"
    },
    {
      id: "excel",
      title: "Microsoft Excel",
      description: "Experienced in data analysis, spreadsheet creation, formulas, pivot tables, and visualizing data with charts and graphs.",
      icon: <FaFileExcel />,
      color: "#217346"
    },
    {
      id: "sheets",
      title: "Google Sheets",
      description: "Capable of managing online spreadsheets, creating formulas, and utilizing collaborative features for team data management.",
      icon: <FaTable />,
      color: "#0F9D58"
    },
    {
      id: "calendar",
      title: "Google Calendar",
      description: "Proficient in scheduling, managing appointments, setting up reminders, and organizing events efficiently.",
      icon: <FaCalendarAlt />,
      color: "#4285F4"
    },
    {
      id: "drive",
      title: "Google Drive",
      description: "Skilled in cloud storage management, file organization, sharing settings, and collaborative workflows.",
      icon: <FaGoogleDrive />,
      color: "#FBBC04"
    }
  ];

  return (
    <AnimatedSection id="admin-skills" className="py-24 bg-[#0f172a]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
          <span className="text-primary">Administrative</span> Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {adminSkills.map((skill, index) => (
            <motion.div
              key={skill.id}
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
                    style={{ backgroundColor: skill.color }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-xl"
                    >
                      {skill.icon}
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{skill.title}</h3>
                  </div>
                </div>
                <p className="text-gray-300">{skill.description}</p>
                <div className="mt-4">
                  <motion.div 
                    className="w-full h-2 bg-gray-700 rounded-full overflow-hidden"
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <motion.div 
                      className="h-full rounded-full" 
                      style={{ backgroundColor: skill.color }}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "90%" }}
                      transition={{ 
                        duration: 1,
                        delay: 0.6 + index * 0.1,
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}