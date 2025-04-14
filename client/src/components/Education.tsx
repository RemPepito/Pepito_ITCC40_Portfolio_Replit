
import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaCertificate, FaAward, FaUniversity } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoplayPlugin from "embla-carousel-autoplay";

export default function Education() {
  const [isHovered, setIsHovered] = useState(false);
  const [api, setApi] = useState<any>();
  
  const autoplay = AutoplayPlugin({
    delay: 4000,
    stopOnInteraction: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }, 
    [autoplay]
  );

  useEffect(() => {
    if (emblaApi) {
      setApi(emblaApi);
    }
  }, [emblaApi]);

  useEffect(() => {
    if (!api) return;
    
    const autoplayPlugin = api.plugins()?.autoplay;
    if (!autoplayPlugin) return;

    if (isHovered) {
      autoplayPlugin.stop();
    } else {
      autoplayPlugin.reset();
      autoplayPlugin.play();
    }
  }, [api, isHovered]);

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
        <div className="max-w-6xl mx-auto relative">
          <Carousel
            ref={emblaRef}
            className="w-full"
          >
            <CarouselContent>
              {educationItems.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="relative p-6 rounded-xl bg-card border border-border shadow-lg group transition-all duration-300 h-full"
                  >
                    <div className="flex flex-col items-center text-center mb-4">
                      <motion.div 
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-full shadow-md mb-4 text-xl"
                      >
                        {item.icon}
                      </motion.div>
                      <div className="w-full">
                        <div className="text-sm text-primary font-semibold mb-1">
                          {item.years}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>
                        <p className="text-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </AnimatedSection>
  );
}
