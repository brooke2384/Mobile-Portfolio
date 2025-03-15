import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import EnhancedOptimizedImage from "./EnhancedOptimizedImage";

interface ServiceCardProps {
  title: string;
  mainDescription: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, mainDescription, description, image }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative h-[300px] sm:h-[350px] rounded-xl overflow-hidden cursor-pointer group"
    >
      <div className="absolute inset-0 bg-gray-950">
        <EnhancedOptimizedImage
          src={image}
          alt={title}
          className="w-full h-full"
          objectFit="cover"
          width={400}
          height={300}
          quality={85}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-black/60 transition-opacity group-hover:bg-black/70" />
      </div>
      <div className="relative h-full p-6 flex flex-col justify-end text-white">
        <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
        
        {/* Main content always visible */}
        <p className="text-sm text-white/80 whitespace-pre-line line-clamp-2 sm:line-clamp-3">
          {mainDescription}
        </p>
        
        {/* Detailed description only visible on hover */}
        <div className="absolute inset-0 p-6 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center">
            <h4 className="text-lg sm:text-xl font-semibold mb-3">{title}</h4>
            <p className="text-sm sm:text-base text-white/70 max-w-md">
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;