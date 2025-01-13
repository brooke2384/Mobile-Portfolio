import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title text-center"
        >
          Contact
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="glass-card p-3 w-full focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="glass-card p-3 w-full focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="glass-card p-3 w-full focus:outline-none focus:border-primary"
            />
            <textarea
              placeholder="Message"
              rows={6}
              className="glass-card p-3 w-full focus:outline-none focus:border-primary"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ 
                scale: 1.05,
                background: "linear-gradient(to right, #ea384c, #9b87f5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>{isSubmitting ? "Sending..." : "Send message"}</span>
            </motion.button>
          </form>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: "#9b87f5" }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1, color: "#9b87f5" }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;