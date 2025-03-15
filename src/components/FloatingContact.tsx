import { MessageCircle, Calendar, Mail, Download, BriefcaseBusiness } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@/hooks/use-mobile";
import { useToast } from "@/hooks/use-toast";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHireMe, setShowHireMe] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { toast } = useToast();
  
  // Show Hire Me button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowHireMe(scrollPosition > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const copyEmail = () => {
    navigator.clipboard.writeText("dbellis.tech@gmail.com");
    toast({
      title: "Email Copied",
      description: "Email address copied to clipboard!",
      variant: "default",
    });
  };

  return (
    <>
      {/* Floating Contact Button */}
      <motion.div className="fixed bottom-8 left-8 z-50">
        {/* Floating Button */}
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(155, 135, 245, 0.5)" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 rounded-full bg-gradient-to-r from-accent to-primary shadow-lg backdrop-blur-sm border border-white/10"
          style={{ boxShadow: "0 8px 32px rgba(155, 135, 245, 0.3)" }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.button>

        {/* Contact Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute bottom-16 left-0 p-6 rounded-lg glassmorphism shadow-lg w-80"
            >
              <h4 className="text-lg font-semibold mb-3 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Let's Connect</h4>
              <p className="text-sm mb-4 text-foreground/80">Send me a message, I'm just a click away.</p>

              {/* Contact Options */}
              <div className="space-y-4">
                <a
                  href="#contact"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <span className="p-2 rounded-full bg-primary/10 text-primary">
                    <MessageCircle className="w-4 h-4" />
                  </span>
                  <span className="text-foreground font-medium">Send a Message</span>
                </a>
                
                <a
                  href="#contact"
                  onClick={() => {
                    setIsOpen(false);
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    // Find and click the schedule tab
                    const scheduleTab = document.querySelector('button:has(.w-4.h-4[data-lucide="calendar"])');
                    if (scheduleTab) {
                      (scheduleTab as HTMLButtonElement).click();
                    }
                  }}
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <span className="p-2 rounded-full bg-blue-500/10 text-blue-500">
                    <Calendar className="w-4 h-4" />
                  </span>
                  <span className="text-foreground font-medium">Schedule a Call</span>
                </a>
                
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-primary/30 transition-all duration-300 w-full text-left"
                >
                  <span className="p-2 rounded-full bg-green-500/10 text-green-500">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="text-foreground font-medium">Copy Email</span>
                </button>
                
                <a
                  href="/DB CV.pdf"
                  download="DB CV.pdf"
                  className="flex items-center gap-3 p-3 glass-card rounded-lg hover:border-primary/30 transition-all duration-300"
                >
                  <span className="p-2 rounded-full bg-accent/10 text-accent">
                    <Download className="w-4 h-4" />
                  </span>
                  <span className="text-foreground font-medium">Download Resume</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Floating Hire Me Button (Mobile) */}
      <AnimatePresence>
        {showHireMe && isMobile && (
          <motion.a
            href="#contact"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 z-50 py-3 px-5 rounded-full flex items-center gap-2 shadow-lg"
            style={{
              background: "linear-gradient(to right, #ea384c, #9b87f5)",
              boxShadow: "0 8px 32px rgba(155, 135, 245, 0.4)"
            }}
          >
            <BriefcaseBusiness className="w-5 h-5 text-white" />
            <span className="font-medium text-white">Hire Me</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingContact;
