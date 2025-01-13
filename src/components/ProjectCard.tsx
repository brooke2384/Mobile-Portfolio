import { motion } from "framer-motion";
import { Github, Link } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="project-card group relative overflow-hidden"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-foreground/70">{description}</p>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4 transition-opacity opacity-0 group-hover:opacity-100"
      >
        {liveUrl && (
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            onClick={() => window.open(liveUrl, "_blank")}
          >
            <Link className="w-4 h-4" />
            View Live
          </Button>
        )}
        {githubUrl && (
          <Button
            variant="secondary"
            className="flex items-center gap-2"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;