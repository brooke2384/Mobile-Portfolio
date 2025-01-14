import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="hidden md:flex space-x-6">
          {["home", "services", "skills", "projects"].map((section) => (
            <motion.a
              key={section}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #ea384c, #9b87f5)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(section)}
              className="nav-link cursor-pointer capitalize"
            >
              {section}
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        <motion.button 
          whileHover={{ 
            scale: 1.05,
            background: "linear-gradient(to right, #ea384c, #9b87f5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('contact')}
          className="btn-primary flex items-center space-x-2"
        >
          <span>Hire me</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 border-t border-white/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {["home", "services", "skills", "projects"].map((section) => (
                <motion.a
                  key={section}
                  whileHover={{ 
                    scale: 1.05,
                    background: "linear-gradient(to right, #ea384c, #9b87f5)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(section)}
                  className="nav-link capitalize"
                >
                  {section}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;