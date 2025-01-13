import { motion } from "framer-motion";
import { Download } from "lucide-react";

const Hero = () => {
  return (
    <motion.section 
      id="home" 
      className="pt-32 pb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hi! I'm Darlene
          </motion.h1>
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl md:text-5xl font-bold text-primary mb-8"
          >
            MOBILE DEVELOPER
          </motion.h2>
          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
          >
            Welcome to my portfolio website. I am a highly skilled mobile developer specializing in
            Flutter & dart. Designing, developing and deploying high-performance, user-friendly cross-
            platform mobile applications for both iOS and Android.
          </motion.p>
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              background: "linear-gradient(to right, #ea384c, #9b87f5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            <span>Download CV</span>
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;