import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    gradient: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "iOS", "Android"],
    gradient: "from-[#4834D4] to-[#686DE0]"
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Java", "SQL"],
    gradient: "from-[#6AB04C] to-[#BADC58]"
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Firebase"],
    gradient: "from-[#EB4D4B] to-[#FF7979]"
  }
];

const Skills = () => {
  return (
    <motion.section
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
      className="py-20"
    >
      <div className="container mx-auto px-6">
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{ scale: 1.05 }}
              className="glass-card p-6"
            >
              <HoverCard>
                <HoverCardTrigger>
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className={`w-5 h-5 bg-gradient-to-r ${skillGroup.gradient} rounded-full p-1`} />
                    <h3 className={`text-xl font-semibold bg-gradient-to-r ${skillGroup.gradient} text-transparent bg-clip-text`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1 bg-gradient-to-r ${skillGroup.gradient} bg-opacity-10 rounded-full text-sm`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;