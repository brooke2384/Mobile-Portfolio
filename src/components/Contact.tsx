import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Github, Linkedin, Download, Calendar, Copy, ExternalLink } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
// Lazy load Calendly widget
const InlineWidget = lazy(() => import("react-calendly").then(module => ({ default: module.InlineWidget })));
import { useMediaQuery } from "@/hooks/use-mobile";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [activeTab, setActiveTab] = useState<'message' | 'schedule' | 'connect'>('message');
  const { toast } = useToast();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    formData.set("from_name", `${formData.get("firstName")} ${formData.get("lastName")}`);

    try {
      await emailjs.sendForm(
        "service_0gu2gvy", // service ID
        "template_omqzjke", //  template ID
        form,
        "QHBtuQynKgBVftjaV" // EmailJS public key
      );

      setIsSuccess(true);
      form.reset();
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setIsSuccess(false);
      toast({
        title: "Message Failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(null), 3000); // Reset success message after 3 seconds
    }
  };
  
  const copyEmail = () => {
    navigator.clipboard.writeText("dbellis.tech@gmail.com");
    toast({
      title: "Email Copied",
      description: "Email address copied to clipboard!",
      variant: "default",
    });
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-gray-950"
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-center text-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Let's Build Something Great Together – I'm Ready to Elevate Your Mobile Experience
        </motion.p>
        
        {/* Contact Tabs */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto glassmorphism p-1 rounded-full mb-8 flex justify-center"
        >
          <div className="flex w-full max-w-md justify-between p-1 rounded-full">
            <motion.button
              onClick={() => setActiveTab('message')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'message' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-foreground/70 hover:text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Send className="w-4 h-4" />
                Message
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('schedule')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'schedule' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-foreground/70 hover:text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab('connect')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === 'connect' ? 'bg-gradient-to-r from-accent to-primary text-white shadow-lg' : 'text-foreground/70 hover:text-foreground'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Connect
              </span>
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {activeTab === 'message' && (
              <motion.div
                key="message-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <form onSubmit={handleSubmit} className="space-y-6 glassmorphism p-8 rounded-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your first name"
                        required
                        className="glass-card p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Your last name"
                        required
                        className="glass-card p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      required
                      className="glass-card p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={6}
                      required
                      className="glass-card p-3 w-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ 
                      scale: 1.03,
                      boxShadow: "0 10px 25px rgba(155, 135, 245, 0.5)"
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300"
                    style={{
                      background: "linear-gradient(to right, #ea384c, #9b87f5)",
                      boxShadow: "0 8px 20px rgba(155, 135, 245, 0.3)"
                    }}
                  >
                    <Send className="w-5 h-5" />
                    <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  </motion.button>
                </form>
              </motion.div>
            )}
            
            {activeTab === 'schedule' && (
              <motion.div
                key="schedule-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Schedule a Meeting</h3>
                <p className="text-foreground/70 mb-6">Book a time slot that works for you, and let's discuss your project in detail.</p>
                
                <div className="h-[600px] w-full">
                  <InlineWidget 
                    url="https://calendly.com/dbellis-tech/30min" 
                    styles={{ height: '100%', width: '100%' }}
                    prefill={{
                      email: "",
                      firstName: "",
                      lastName: "",
                      name: ""
                    }}
                    pageSettings={{
                      backgroundColor: 'transparent',
                      hideEventTypeDetails: false,
                      hideLandingPageDetails: false,
                      primaryColor: '#9b87f5',
                      textColor: '#ffffff'
                    }}
                  />
                </div>
              </motion.div>
            )}
            
            {activeTab === 'connect' && (
              <motion.div
                key="connect-options"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glassmorphism p-8 rounded-xl space-y-8"
              >
                <div>
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Connect With Me</h3>
                  <p className="text-foreground/70 mb-6">Reach out through any of these channels, and I'll get back to you promptly.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-3 p-4 glass-card rounded-lg hover:border-primary/30 transition-all duration-300">
                    <span className="p-2 rounded-full bg-blue-500/10 text-blue-500">
                      <Copy className="w-5 h-5" />
                    </span>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-foreground">Email</h4>
                      <p className="text-foreground/70">dbellis.tech@gmail.com</p>
                    </div>
                    <motion.button
                      onClick={copyEmail}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-1.5 rounded-md bg-white/5 text-sm font-medium text-primary hover:bg-white/10 transition-colors"
                    >
                      Copy
                    </motion.button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.a 
                      href="https://github.com/brooke2384" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, borderColor: 'rgba(155, 135, 245, 0.5)' }}
                      className="flex items-center gap-3 p-4 glass-card rounded-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <span className="p-2 rounded-full bg-gray-800/20 text-gray-200">
                        <Github className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-foreground">GitHub</h4>
                        <p className="text-foreground/70 text-sm">@brooke2384</p>
                      </div>
                    </motion.a>
                    
                    <motion.a 
                      href="https://www.linkedin.com/in/darlene-software-engineer/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03, borderColor: 'rgba(155, 135, 245, 0.5)' }}
                      className="flex items-center gap-3 p-4 glass-card rounded-lg hover:border-primary/30 transition-all duration-300"
                    >
                      <span className="p-2 rounded-full bg-blue-600/20 text-blue-500">
                        <Linkedin className="w-5 h-5" />
                      </span>
                      <div>
                        <h4 className="text-sm font-medium text-foreground">LinkedIn</h4>
                        <p className="text-foreground/70 text-sm">Connect with me</p>
                      </div>
                    </motion.a>
                  </div>
                </div>
                
                <motion.a
                  href="/DB CV.pdf"
                  download="DB CV.pdf"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px rgba(155, 135, 245, 0.5)"
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-white font-medium transition-all duration-300"
                  style={{
                    background: "linear-gradient(to right, #ea384c, #9b87f5)",
                    boxShadow: "0 8px 20px rgba(155, 135, 245, 0.3)"
                  }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download My Resume</span>
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
