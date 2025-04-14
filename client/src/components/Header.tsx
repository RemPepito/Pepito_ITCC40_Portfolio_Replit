import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-30"></div>
      </div>
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Remwell B. Pepito
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="h-1 w-20 bg-accent mx-auto md:mx-0 mb-6"
            ></motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl">Future graduate of <span className="font-semibold">Xavier University Ateneo de Cagayan</span>, Batch 2026</p>
              <p className="text-lg md:text-xl">Future <span className="font-semibold">Network Administrator</span></p>
              <p className="text-lg md:text-xl">Future <span className="font-semibold">Cum Laude Graduate</span></p>
              <p className="text-lg md:text-xl"><span className="font-semibold">CCNA Certified</span></p>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full md:w-1/3 flex justify-center md:justify-end"
          >
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="https://placehold.co/400x400/e2e8f0/1e293b?text=RP" 
                alt="Professional headshot of Remwell B. Pepito" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
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
      </div>
    </header>
  );
}
