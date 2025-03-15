import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutMe from "@/components/AboutMe";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import { ArrowRight } from "lucide-react";

// Lazy load non-critical components
const Skills = lazy(() => import("@/components/Skills"));
const ServiceCard = lazy(() => import("@/components/ServiceCard"));
const Contact = lazy(() => import("@/components/Contact"));
const BackToTop = lazy(() => import("@/components/BackToTop"));
const FloatingContact = lazy(() => import("@/components/FloatingContact"));
const EnhancedProjectCard = lazy(() => import("@/components/EnhancedProjectCard"));

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
    summary: "An AI-powered mental health tracking app that helps users monitor and improve their emotional wellbeing.",
    techStack: ["Flutter", "Firebase", "OpenAI API", "Google Auth"],
    problem: "Traditional mental health tracking is tedious and lacks personalized insights, leading to poor user engagement and limited self-awareness.",
    features: [
      "AI-powered journal with NLP insights for emotion analysis",
      "Secure authentication with Google and biometric options",
      "Voice-to-text for frictionless mental health tracking",
      "Interactive data visualization for mood trends and patterns"
    ],
    impact: [
      "Improved user engagement by 40% compared to traditional journaling apps",
      "85% of users reported better emotional awareness after 2 weeks"
    ],
    image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "Seamless Mobile Commerce",
    summary: "A high-performance e-commerce mobile application with seamless payment integration and optimized user experience.",
    techStack: ["Flutter", "Firebase", "AWS", "Stripe/MPesa"],
    problem: "Many mobile commerce apps suffer from poor performance, complex checkout flows, and limited payment options in emerging markets.",
    features: [
      "Optimized checkout flow reducing abandonment by 35%",
      "Multi-payment gateway integration including mobile money options",
      "Offline mode with local data synchronization",
      "Real-time inventory and order tracking"
    ],
    impact: [
      "Increased conversion rates by 28% compared to previous app version",
      "Expanded market reach by 45% through mobile money integration"
    ],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
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

        {/* About Me Section */}
        <AboutMe />

        {/* Services Section */}
        <motion.section id="services" className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <h2 className="section-title text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Suspense fallback={<div className="py-10 text-center">Loading services...</div>}>
                {services.map((service, index) => (
                  <ServiceCard key={index} {...service} />
                ))}
              </Suspense>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <Suspense fallback={<div className="py-20 bg-gray-950"><div className="container mx-auto px-6 text-center">Loading skills section...</div></div>}>
          <Skills />
        </Suspense>

        {/* Projects Section */}
        <motion.section id="projects" className="py-20 bg-gray-950">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text text-center">Featured Projects</h2>
            <p className="text-xl text-center text-foreground/80 max-w-3xl mx-auto mb-12">
              Explore my case studies showcasing high-performance mobile applications built with Flutter and Firebase.
            </p>
            <Suspense fallback={<div className="py-10 text-center">Loading projects...</div>}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <EnhancedProjectCard key={index} {...project} />
                ))}
              </div>
            </Suspense>
          </div>
          <div className="mt-12 text-center">
              <Button onClick={() => window.location.href = '/projects'} className="btn-primary inline-flex items-center gap-2">
                View More Projects <ArrowRight className="w-4 h-4" />
              </Button>
          </div>
        </motion.section>

        <Suspense fallback={<div className="py-20 bg-gray-950"><div className="container mx-auto px-6 text-center">Loading contact section...</div></div>}>
          <Contact />
        </Suspense>
      </motion.div>

      <Suspense fallback={<div></div>}>
        <BackToTop />
      </Suspense>
      <Suspense fallback={<div></div>}>
        <FloatingContact />
      </Suspense>
    </motion.div>
  );
};

export default Index;
