import { motion } from "framer-motion";
import { Github, Link, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import EnhancedOptimizedImage from "./EnhancedOptimizedImage";

interface EnhancedProjectCardProps {
  title: string;
  summary: string;
  techStack: string[];
  problem: string;
  features: string[];
  impact?: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const EnhancedProjectCard = ({
  title,
  summary,
  techStack,
  problem,
  features,
  impact,
  image,
  liveUrl,
  githubUrl
}: EnhancedProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-card overflow-hidden rounded-xl flex flex-col h-full hover:shadow-xl transition-all duration-500"
      style={{ boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)" }}
    >
      <div className="relative overflow-hidden group">
        <EnhancedOptimizedImage 
          src={image} 
          alt={title} 
          className="w-full h-56 transition-transform duration-500 group-hover:scale-110"
          objectFit="cover"
          width={400}
          height={224}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={true}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4">
          <div className="flex gap-2">
            {liveUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="flex items-center gap-1"
                onClick={() => window.open(liveUrl, "_blank")}
              >
                <Link className="w-3 h-3" />
                <span>Live Demo</span>
              </Button>
            )}
            {githubUrl && (
              <Button
                size="sm"
                variant="secondary"
                className="flex items-center gap-1"
                onClick={() => window.open(githubUrl, "_blank")}
              >
                <Github className="w-3 h-3" />
                <span>GitHub</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-foreground/80 mb-4">{summary}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground/60 mb-1">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-secondary/50 backdrop-blur-sm rounded-full text-xs border border-white/5 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-foreground/60 mb-1">Problem Solved</h4>
          <p className="text-sm text-foreground/70">{problem}</p>
        </div>

        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-semibold text-foreground/60 mb-1">Key Features</h4>
          <ul className="text-sm text-foreground/70 space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {impact && impact.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-foreground/60 mb-1">Impact</h4>
            <ul className="text-sm text-foreground/70 space-y-1">
              {impact.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <motion.div 
          className="mt-auto pt-4"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button 
            variant="link" 
            className="p-0 text-primary flex items-center gap-1 group"
            onClick={() => liveUrl && window.open(liveUrl, "_blank")}
          >
            <span>View Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default EnhancedProjectCard;