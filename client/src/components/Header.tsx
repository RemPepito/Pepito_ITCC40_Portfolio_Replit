import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import profileImage from "@assets/image_1744644139845.png";
import { useEffect, useState } from "react";

export default function Header() {
  const hellos = [
    "Hello, I'm", "Hola, soy", "Bonjour, je suis", "Ciao, sono", "Hallo, ich bin",
    "Olá, eu sou", "Привет, я", "你好，我是", "こんにちは、私は", "안녕하세요, 저는",
    "Merhaba, ben", "Γεια σας, είμαι", "नमस्ते, मैं हूं", "مرحبا انا", "שלום אני",
    "Sawubona, ngingu", "Kumusta, ako si", "Sawasdee, chan", "Xin chào, tôi là", "Salam, saya"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hellos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hellos.length]);

  const handleGetStarted = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gray-950"> {/* Added bg-gray-950 */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-3/5 mb-12 md:mb-0">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl text-primary mb-4"
              >
                {hellos[currentIndex]}
              </motion.p>
            </AnimatePresence>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
            >
              Remwell B. Pepito
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4 text-gray-300"
            >
              <p className="text-xl">Future graduate of <span className="text-primary font-semibold">Xavier University Ateneo de Cagayan</span>, Batch 2026</p>
              <p className="text-xl">Future <span className="text-primary font-semibold">Network Administrator</span></p>
              <p className="text-xl">Future <span className="text-primary font-semibold">Cum Laude Graduate</span></p>
              <p className="text-xl"><span className="text-primary font-semibold">CCNA Certified</span></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-8 flex gap-4"
            >
              <button 
                onClick={handleGetStarted}
                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
              <button className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Watch Intro
              </button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="w-full md:w-2/5 flex justify-center md:justify-end relative"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary relative z-10">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#skills"
          className="text-primary text-3xl block"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop"
          }}
        >
          <FaChevronDown />
        </motion.a>
      </motion.div>
    </header>
  );
}