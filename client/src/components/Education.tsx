
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
    }
  ];

  return (
    <AnimatedSection id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary mb-2">WHAT I HAVE STUDIED SO FAR</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Education.
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />

          {educationItems.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative flex items-center justify-center mb-8">
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-background border-4 border-primary rounded-full z-10" />
                
                {/* Content */}
                <div className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className={`w-[calc(50%-2rem)] p-6 bg-card rounded-xl border border-border shadow-lg`}
                  >
                    <div className="flex flex-col">
                      <span className="text-primary font-semibold mb-2">{item.years}</span>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
                      <p className="text-foreground text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
