import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-[#050a16] text-white/70">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-primary transition-colors">Home</a>
          <a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a>
          <a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="text-gray-400 hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="border-t border-gray-800 pt-6 mt-4">
          <p>© {new Date().getFullYear()} Remwell B. Pepito. All rights reserved.</p>
          <p className="text-sm mt-2">
            Future Network Administrator | CCNA Certified | Designed with <FaHeart className="inline-block text-accent mx-1" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
