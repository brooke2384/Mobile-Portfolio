import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: "MindSync – AI Mental Health Companion",
      description: "AI-driven mental health tracking with voice-to-text, NLP insights, and mood visualization.",
      image: "https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Seamless Mobile Commerce",
      description: "Mobile-first e-commerce with secure payments and real-time order tracking.",
      image: "https://images.pexels.com/photos/1343749/pexels-photo-1343749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "EcoTrade – Sustainable Tech Marketplace",
      description: "Marketplace for refurbished tech, e-waste recycling, and sustainable gadgets.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "QuickAssist – Emergency Response Platform",
      description: "Instant emergency alerts with cloud-based real-time assistance.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "EduSync – AI-Powered Learning Hub",
      description: "Personalized learning recommendations with AI-driven progress tracking.",
      image: "https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HealthMate – Digital Health Tracker",
      description: "Monitor vitals, track health goals, and sync medical records in one app.",
      image: "https://images.pexels.com/photos/7089026/pexels-photo-7089026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "TravelEase – Smart Trip Planner",
      description: "AI-powered travel assistant with smart itinerary planning and budget tracking.",
      image: "https://images.pexels.com/photos/8084655/pexels-photo-8084655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "HomeFit – Virtual Fitness App",
      description: "Workout sessions with real-time tracking, AI coaching, and health insights.",
      image: "https://images.pexels.com/photos/7031706/pexels-photo-7031706.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "WorkSphere – Micro-Work Platform",
      description: "Freelance gigs, skill verification, and job success scores for global users.",
      image: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "SmartWallet – Fintech Budgeting App",
      description: "AI-based spending insights, savings goals, and investment tracking.",
      image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="container mx-auto">
        <div className="flex items-center mb-8">
          <Button variant="ghost" className="mr-4" onClick={() => navigate(-1)}>
            <ArrowLeft className="mr-2" /> Back
          </Button>
          <h1 className="text-4xl font-bold">All Projects</h1>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
