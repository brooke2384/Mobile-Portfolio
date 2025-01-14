import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div className="fixed bottom-8 left-8 z-50">
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-primary hover:bg-gradient-to-r from-accent to-primary shadow-lg"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.button>

      {/* Contact Card */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="absolute bottom-16 left-0 p-4 rounded-lg bg-card shadow-lg w-64"
        >
        <p className="text-sm mb-4">Send me a message, I'm just a click away.</p>

          {/* WhatsApp Link */}
          <a
            href="https://wa.me/254113232734?text=Hi,%20I'd%20love%20to%20chat!"
            className="text-primary hover:text-accent underline"
          >
           WhatsApp Chat
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FloatingContact;
