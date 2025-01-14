import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="fixed bottom-8 left-8 z-50">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-primary hover:bg-gradient-to-r from-accent to-primary shadow-lg"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>
      
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 left-0 p-4 rounded-lg bg-card shadow-lg w-64"
        >
          <h3 className="text-lg font-semibold mb-2">Contact Me</h3>
          <p className="text-sm mb-4">Feel free to reach out!</p>
          <a href="mailto:contact@example.com" className="text-primary hover:text-accent">
            contact@example.com
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingContact;