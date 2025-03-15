import { motion, useScroll, useTransform } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  return (
    <motion.section
      id="home"
      className="pt-32 pb-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-500/10 rounded-full filter blur-2xl"></div>
      </div>
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
            Building High-Performance Mobile Apps | Flutter Developer
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
              href="#contact"
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
              <span>Let's Build Something Great – Contact Me</span>
            </motion.a>

            <motion.a
              href="/DB CV.pdf"
              download="DB CV.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-xl text-primary border border-primary font-semibold tracking-wide flex items-center space-x-2"
            >
              <Download className="w-5 h-5" />
              <span>Get My Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;