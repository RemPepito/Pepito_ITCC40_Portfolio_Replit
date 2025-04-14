import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import SkillItem from "./SkillItem";
import { 
  FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava, FaDatabase,
  FaNetworkWired, FaServer, FaShieldAlt
} from "react-icons/fa";

const technicalSkills = [
  {
    id: "html",
    icon: <FaHtml5 />,
    title: "HTML",
    description: "Advanced markup structure and semantics",
    color: "#E34F26"
  },
  {
    id: "css",
    icon: <FaCss3Alt />,
    title: "CSS",
    description: "Responsive design and animations",
    color: "#1572B6"
  },
  {
    id: "js",
    icon: <FaJsSquare />,
    title: "JavaScript",
    description: "Dynamic web applications and DOM manipulation",
    color: "#F7DF1E"
  },
  {
    id: "python",
    icon: <FaPython />,
    title: "Python",
    description: "Scripting and automation",
    color: "#3776AB"
  },
  {
    id: "java",
    icon: <FaJava />,
    title: "Java",
    description: "Object-oriented programming and enterprise applications",
    color: "#007396"
  },
  {
    id: "mysql",
    icon: <FaDatabase />,
    title: "MySQL",
    description: "Database design and management",
    color: "#4479A1"
  }
];

export default function Skills() {
  const [activeSkillIndex, setActiveSkillIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkillIndex((current) => (current + 1) % technicalSkills.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatedSection id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="w-full md:w-1/2 lg:w-3/5">
            <div className="monitor-frame">
              <div className="monitor-screen">
                <div className="w-full aspect-video flex items-center p-8">
                  {technicalSkills.map((skill, index) => (
                    <SkillItem
                      key={skill.id}
                      icon={skill.icon}
                      title={skill.title}
                      description={skill.description}
                      color={skill.color}
                      isActive={index === activeSkillIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 space-y-6">
            <div className="skill-text p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-2">Network Administration</h3>
              <p>Proficient in configuring and maintaining network infrastructure, troubleshooting connectivity issues, and implementing security protocols.</p>
            </div>
            
            <div className="skill-text p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-2">System Management</h3>
              <p>Experience with server configuration, user management, and system optimization for maximum performance and security.</p>
            </div>
            
            <div className="skill-text p-6 bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-primary mb-2">Cybersecurity</h3>
              <p>Knowledge of security best practices, vulnerability assessment, and implementing protective measures against common threats.</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
