import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Projects = () => {
  const navigate = useNavigate();
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
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics and management platform for social media",
      image: "https://images.pexels.com/photos/35177/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://social-dashboard.com",
      githubUrl: "https://github.com/username/social-dashboard"
    },
    {
      title: "Task Management App",
      description: "Collaborative task and project management tool",
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://task-app.com",
      githubUrl: "https://github.com/username/task-app"
    },
    {
      title: "Weather Forecast App",
      description: "Real-time weather updates and forecasts",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      liveUrl: "https://weather-app.com",
      githubUrl: "https://github.com/username/weather-app"
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
          <Button 
            variant="ghost" 
            className="mr-4"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="mr-2" />
            Back
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