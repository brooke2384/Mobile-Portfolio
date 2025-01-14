import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.set("from_name", `${formData.get("firstName")} ${formData.get("lastName")}`);

    try {
      await emailjs.sendForm(
        "service_0gu2gvy", // Your service ID
        "template_omqzjke", // Your template ID
        form,
        "QHBtuQynKgBVftjaV" // Replace with your EmailJS public key
      );

      setIsSuccess(true);
      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(null), 3000); // Reset success message after 3 seconds
    }
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
                name="firstName"
                placeholder="First Name"
                required
                className="glass-card p-3 w-full focus:outline-none focus:border-primary"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="glass-card p-3 w-full focus:outline-none focus:border-primary"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="glass-card p-3 w-full focus:outline-none focus:border-primary"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              required
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
          {isSuccess === true && (
            <p className="text-sm text-green-500 text-center mt-4">
              Message sent successfully!
            </p>
          )}
          {isSuccess === false && (
            <p className="text-sm text-red-500 text-center mt-4">
              Message failed to send. Please try again later!
            </p>
          )}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-6 mt-12"
          >
            <motion.a 
              href="https://github.com/brooke2384" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#9b87f5" }}
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/darlene-software-engineer/" 
              target="_blank" 
              rel="noopener noreferrer"
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
