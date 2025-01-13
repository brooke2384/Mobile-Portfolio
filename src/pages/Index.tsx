import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Send, Github, Linkedin } from "lucide-react";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    { 
      title: "Mobile App Development",
      description: "End-to-end mobile app development for iOS and Android using Flutter and React Native. We focus on creating intuitive, high-performance applications that users love.",
      image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      title: "UI/UX Design",
      description: "Creating beautiful, user-centered designs that enhance user experience and drive engagement. We combine aesthetics with functionality to deliver outstanding results.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      title: "Web Development",
      description: "Full-stack web development using modern technologies like React, Next.js, and Node.js. We build scalable, responsive websites that perform great on all devices.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    },
    { 
      title: "Consulting",
      description: "Expert technical consulting to help you make informed decisions about your technology stack, architecture, and development processes.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
    }
  ];

  const projects = [
    {
      title: "Restaurant App",
      description: "A modern restaurant management application",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://restaurant-app.com",
      githubUrl: "https://github.com/username/restaurant-app"
    },
    {
      title: "E-commerce App",
      description: "Full-featured e-commerce platform",
      image: "https://images.pexels.com/photos/934064/pexels-photo-934064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://ecommerce-app.com",
      githubUrl: "https://github.com/username/ecommerce-app"
    },
    {
      title: "Doctor Appointment App",
      description: "Healthcare appointment scheduling system",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://doctor-app.com",
      githubUrl: "https://github.com/username/doctor-app"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center space-x-2"
          >
            <span>Hire me</span>
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="pt-32 pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 60 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
          }
        }}
      >
        <div className="container mx-auto px-6">
          <motion.div className="text-center">
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
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2 mx-auto"
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <Skills />

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-secondary/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section-title text-center"
          >
            Services
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section-title text-center"
          >
            Projects
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="section-title text-center"
          >
            Contact
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? "Sending..." : "Send message"}</span>
              </motion.button>
            </form>
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="flex justify-center space-x-6 mt-12"
            >
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Index;
