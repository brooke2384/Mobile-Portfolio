import { motion } from "framer-motion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
}

const ServiceCard = ({ title, image, description }: ServiceCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="service-card cursor-pointer"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">{title}</h3>
        </motion.div>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-foreground/70">{description}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default ServiceCard;