import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Send, Github, Linkedin, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Skills from "@/components/Skills";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const services = [
    {
      title: "App development",
      mainDescription: "Native Development\nCross-Platform Development\nHybrid App Development",
      description: "End-to-end mobile app development specializing in native and cross-platform solutions.",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Design & prototype",
      mainDescription: "UI/UX Design\nWireframing & prototyping",
      description: "Creating intuitive user interfaces and seamless user experiences through careful planning and prototyping.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Maintenance & Updates",
      mainDescription: "Bug fixes\nFeature enhancements\nCompatibility updates",
      description: "Ongoing support and maintenance to keep your applications running smoothly and up-to-date.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Testing & Quality Assurance",
      mainDescription: "Performance testing\nUsability testing\nSecurity testing",
      description: "Comprehensive testing to ensure your application meets the highest standards of quality and security.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "App store deployment",
      mainDescription: "App store optimization ASO\nPublishing",
      description: "Expert guidance through the app store submission and optimization process.",
      image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Specialized app development",
      mainDescription: "E-commerce apps\nSocial media apps\nGaming apps\nSaaS",
      description: "Custom development for specific industry needs and specialized applications.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Integration services",
      mainDescription: "Third-party services\nWearables",
      description: "Seamless integration with third-party services and wearable devices.",
      image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Back end development",
      mainDescription: "API Integration\nData base Technologies",
      description: "Robust backend solutions with modern database technologies and API integration.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ScrollProgress />
      <CustomCursor />
      <Navigation />


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Hero />

        {/* Services Section */}
        <motion.section
          id="services"
          className="py-20 bg-secondary/20"
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
              Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <motion.section
          id="projects"
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
              Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {projects.
                slice(0, 3).
                map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
            </motion.div>
            <div className="mt-12 text-center">
              <Button
                onClick={() => window.location.href = '/projects'}
                className="btn-primary inline-flex items-center gap-2"
              >
                View More Projects
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <Contact />
      </motion.div>

      <BackToTop />
      <FloatingContact />
    </motion.div>
  );
};

export default Index;