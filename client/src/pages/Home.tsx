import Header from "@/components/Header";
import Skills from "@/components/Skills";
import AdminSkills from "@/components/AdminSkills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  // Set page title
  useEffect(() => {
    document.title = "Remwell B. Pepito - Resume";
  }, []);
  
  // Apple-style parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Apply parallax effect to specific elements with the data-parallax attribute
      document.querySelectorAll('[data-parallax]').forEach((element) => {
        const el = element as HTMLElement;
        const speed = parseFloat(el.dataset.parallax || "0.1");
        const yPos = -(scrollY * speed);
        el.style.transform = `translateY(${yPos}px)`;
      });
      
      // Add fade-in effect for sections
      document.querySelectorAll('.fade-in-section').forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('is-visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Call once to initialize
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      ref={parallaxRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen overflow-hidden bg-[#121729] text-gray-100 bg-animated"
    >
      <div className="absolute inset-0 z-0 pointer-events-none" data-parallax="0.2">
        <div className="h-full w-full bg-gradient-to-br from-primary/10 to-accent/10 opacity-50"></div>
      </div>
      
      <Header />
      <Skills />
      <Projects />
      <AdminSkills />
      <Education />
      <Contact />
      <Footer />
    </motion.div>
  );
}
