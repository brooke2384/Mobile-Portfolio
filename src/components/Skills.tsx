import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const skills = [
  {
    category: "Mobile",
    items: ["Flutter", "React Native", "iOS", "Android", "Kotlin", "Dart", "Swift", "Firebase"],
    gradient: "from-[#4834D4] to-[#686DE0]"
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "CSS-in-JS", "PWA"],
    gradient: "from-[#FF6B6B] to-[#FFE66D]"
  },
  {
    category: "Backend",
    items: ["Node.js", "SQL", "GraphQL", "RESTful APIs"],
    gradient: "from-[#6AB04C] to-[#BADC58]"
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Firebase", "Jenkins", "GitHub Actions"],
    gradient: "from-[#EB4D4B] to-[#FF7979]"
  }
];

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
      }}
      className="py-20 bg-gray-950"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block"
          >
            Skills & Expertise
          </motion.h2>
          <motion.div 
            variants={{
              hidden: { opacity: 0, width: 0 },
              visible: { opacity: 1, width: "100px", transition: { delay: 0.3, duration: 0.8 } }
            }}
            className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4 rounded-full"
          />
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.2 } }
            }}
            className="text-lg text-foreground/80 max-w-2xl mx-auto mt-6"
          >
            Specialized technical expertise across mobile and web development ecosystems
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="glass-card p-6 backdrop-blur-md border border-white/10 hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
              style={{
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01)"
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag className={`w-5 h-5 bg-gradient-to-r ${skillGroup.gradient} rounded-full p-1`} />
                <h3 className={`text-xl font-semibold bg-gradient-to-r ${skillGroup.gradient} text-transparent bg-clip-text`}>
                  {skillGroup.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                      borderColor: "rgba(255, 255, 255, 0.2)"
                    }}
                    className={`px-3 py-1.5 bg-gradient-to-r ${skillGroup.gradient} bg-opacity-10 rounded-full text-sm backdrop-blur-sm border border-white/5 shadow-sm transition-all duration-300 flex items-center justify-center`}
                  >
                    {skill}
                  </motion.span>
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
