import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-primary/10 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            Remwell B. Pepito
          </a>
          
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`${isScrolled ? "text-gray-800" : "text-primary-foreground"} hover:text-primary transition-colors duration-300 font-medium`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="md:hidden">
            <button
              className={`text-${isScrolled ? "gray-800" : "white"} focus:outline-none`}
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <div id="mobile-menu" className="md:hidden hidden py-4 absolute left-0 right-0 top-full bg-white shadow-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-6 text-gray-800 hover:text-primary transition-colors duration-300"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu?.classList.add("hidden");
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}