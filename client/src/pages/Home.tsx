import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Home() {
  // Set page title
  useEffect(() => {
    document.title = "Remwell B. Pepito - Resume";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <Skills />
      <Education />
      <Experience />
      <Contact />
      <Footer />
    </motion.div>
  );
}
