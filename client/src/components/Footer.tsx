import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-dark text-white/70">
      <div className="container mx-auto px-6 text-center">
        <p>© {new Date().getFullYear()} Remwell B. Pepito. All rights reserved.</p>
        <p className="text-sm mt-2">
          Designed with <FaHeart className="inline-block text-accent mx-1" /> using modern web technologies
        </p>
      </div>
    </footer>
  );
}
