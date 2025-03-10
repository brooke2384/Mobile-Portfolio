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
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
            style={{
              background: "linear-gradient(to right, #ea384c, #9b87f5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: "0px 4px 20px rgba(155, 135, 245, 0.5)",
            }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.8 }}
          >
            I Build Experiences, Not Just Apps.
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-5xl font-bold text-primary mb-6 tracking-wide"
            variants={{
              hidden: { opacity: 0, scale: 1.2 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            Flutter | AI | Scalable Systems
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            I don’t just develop apps—I engineer seamless digital experiences.  
            Every tap, swipe, and interaction feels natural, smooth, and powerful.  
            Let’s build something users love. 🚀
          </motion.p>

          <div className="flex justify-center gap-6">
            <motion.a
              href="/DB CV.pdf"
              download="DB CV.pdf"
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(to right, #ea384c, #9b87f5)",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl text-white font-semibold tracking-wide flex items-center space-x-2"
              style={{
                background: "linear-gradient(to right, #ea384c, #9b87f5)",
                boxShadow: "0px 5px 15px rgba(155, 135, 245, 0.3)",
              }}
            >
              <Download className="w-5 h-5" />
              <span>Get My Resume</span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl text-primary border border-primary font-semibold tracking-wide"
            >
              Explore My Craft
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
