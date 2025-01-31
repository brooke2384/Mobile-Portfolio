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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hi! I'm Darlene
          </motion.h1>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-3xl md:text-5xl font-bold text-primary mb-8"
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            Mobile & Cross-Platform Developer
          </motion.h2>
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            With over 5 years of experience, I specialize in building high-performance, scalable,
            and user-friendly mobile applications for Android and iOS using Flutter and native tools.
            I have a proven track record of enhancing app efficiency, user engagement, and reliability.
          </motion.p>
          <motion.a
            href="/DB CV.pdf"
            download="DB CV.pdf"
            whileHover={{
              scale: 1.05,
              background: "linear-gradient(to right, #ea384c, #9b87f5)",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2 mx-auto"
            style={{ maxWidth: '180px', overflow: 'hidden' }}
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
