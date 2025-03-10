import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Skills from "@/components/Skills";
import ServiceCard from "@/components/ServiceCard";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import CustomCursor from "@/components/CustomCursor";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "App development",
    mainDescription: "Native Development\nCross-Platform Development\nHybrid App Development",
    description: "End-to-end mobile app development specializing in native and cross-platform solutions.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg"
  },
  {
    title: "Design & prototype",
    mainDescription: "UI/UX Design\nWireframing & prototyping",
    description: "Creating intuitive user interfaces and seamless user experiences through careful planning and prototyping.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg"
  },
  {
    title: "Maintenance & Updates",
    mainDescription: "Bug fixes\nFeature enhancements\nCompatibility updates",
    description: "Ongoing support and maintenance to keep your applications running smoothly and up-to-date.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
  },
  {
    title: "Testing & Quality Assurance",
    mainDescription: "Performance testing\nUsability testing\nSecurity testing",
    description: "Comprehensive testing to ensure your application meets the highest standards of quality and security.",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
  },
  {
    title: "App store deployment",
    mainDescription: "App store optimization ASO\nPublishing",
    description: "Expert guidance through the app store submission and optimization process.",
    image: "https://images.pexels.com/photos/193004/pexels-photo-193004.jpeg"
  },
  {
    title: "Specialized app development",
    mainDescription: "E-commerce apps\nSocial media apps\nGaming apps\nSaaS",
    description: "Custom development for specific industry needs and specialized applications.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
  },
  {
    title: "Integration services",
    mainDescription: "Third-party services\nWearables",
    description: "Seamless integration with third-party services and wearable devices.",
    image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
  },
  {
    title: "Back end development",
    mainDescription: "API Integration\nDatabase Technologies",
    description: "Robust backend solutions with modern database technologies and API integration.",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg"
  }
];

const projects = [
  {
    title: "MindSync – AI Mental Health Companion",
    techStack: ["Flutter", "Firebase", "OpenAI API", "Google Auth"],
    features: [
      "🧠 AI-powered journal with NLP insights",
      "🔥 Secure authentication (Google, Biometrics)",
      "🎤 Voice-to-text for easy mental health tracking",
      "📊 Data visualization for user mood trends"
    ],
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Seamless Mobile Commerce",
    techStack: ["Flutter", "Firebase", "AWS", "Stripe/MPesa"],
    features: [
      "🛒 Full e-commerce experience (Cart, Payments, Checkout)",
      "📱 Mobile-first UI with seamless performance",
      "🔥 Scalable backend with Firebase & AWS"
    ],
    image: "https://images.pexels.com/photos/1343749/pexels-photo-1343749.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "EcoTrade – Sustainable Tech Marketplace",
    techStack: ["Flutter", "Firebase", "Tailwind", "Payment Integration"],
    features: [
      "🌍 Eco-friendly product listings",
      "📦 Real-time order tracking",
      "🔥 Optimized UI/UX for a smooth shopping experience"
    ],
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "QuickAssist – Emergency Response Platform",
    techStack: ["Flutter", "Firebase", "Real-time Notifications"],
    features: [
      "🚨 Instant emergency alerts & tracking",
      "📍 Location-based assistance",
      "🔥 Firebase cloud notifications for real-time updates"
    ],
    image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const Index = () => {
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
        <motion.section id="services" className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <motion.section id="projects" className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-black rounded-lg shadow-lg p-6 cursor-pointer"
                  whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 255, 255, 0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
                  <h3 className="text-xl font-semibold text-gray-300">{project.title}</h3>
                  <div className="mt-2">
                    <h4 className="text-sm font-semibold text-gray-500">Tech Stack:</h4>
                    <p className="text-sm text-gray-300">{project.techStack.join(" | ")}</p>
                  </div>
                  <ul className="mt-3 text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}> {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex space-x-4">
                    <Button onClick={() => window.open(project.liveUrl, "_blank")}>Live</Button>
                    <Button onClick={() => window.open(project.githubUrl, "_blank")} variant="outline">GitHub</Button>
                  </div>
                
                </motion.div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
              <Button onClick={() => window.location.href = '/projects'} className="btn-primary inline-flex items-center gap-2">
                View More Projects <ArrowRight className="w-4 h-4" />
              </Button>
          </div>
        </motion.section>

        <Contact />
      </motion.div>

      <BackToTop />
      <FloatingContact />
    </motion.div>
  );
};

export default Index;
