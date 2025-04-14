import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { 
  FaFacebookF, FaLinkedinIn, FaInstagram,
  FaEnvelope 
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would submit to an API
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/remwellpepito", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://instagram.com/remwellpepito", label: "Instagram" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/remwellpepito", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:contact@remwellpepito.com", label: "Email" },
  ];

  return (
    <AnimatedSection id="contact" className="py-24 bg-[#091022] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Get In <span className="text-accent">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p className="text-center text-lg mb-8">
            I'm always open to new opportunities and collaborations. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-2xl hover:bg-white/20"
                aria-label={link.label}
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {link.icon}
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
          
          <div className="w-full max-w-md mb-12">
            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Connect with Me</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <FaFacebookF className="mr-3 text-accent" />
                  <span>facebook.com/remwellpepito</span>
                </li>
                <li className="flex items-center">
                  <FaInstagram className="mr-3 text-accent" />
                  <span>instagram.com/remwellpepito</span>
                </li>
                <li className="flex items-center">
                  <FaLinkedinIn className="mr-3 text-accent" />
                  <span>Remwell Pepito</span>
                </li>
              </ul>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full max-w-md"
          >
            <div className="bg-white/5 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 focus:ring-accent text-white"
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 focus:ring-accent text-white"
                    required
                  />
                </div>
                <div className="mb-6">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 focus:ring-accent text-white"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/80 text-white"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
}
