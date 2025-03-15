import { motion } from "framer-motion";
import { Code, Zap, Layers, Smartphone } from "lucide-react";

const AboutMe = () => {
  const strengths = [
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "Flutter & Firebase Expertise",
      description: "Specialized in building high-performance, beautiful mobile applications using Flutter and Firebase for seamless backend integration."
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Backend API Integration",
      description: "Expert in connecting mobile apps to RESTful APIs, GraphQL, and third-party services for robust functionality and data management."
    },
    {
      icon: <Layers className="w-6 h-6 text-primary" />,
      title: "Scalable Architecture",
      description: "Designing mobile applications with clean architecture principles that scale efficiently as user bases grow."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Performance Optimization",
      description: "Specialized in optimizing app performance, reducing load times, and creating smooth user experiences even with complex functionality."
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-950"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Mobile Developer Specializing in Flutter & Cross-Platform Excellence</h3>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                I'm a passionate mobile developer with expertise in creating high-performance, user-friendly applications 
                that solve real-world problems. My approach combines technical excellence with creative problem-solving 
                to deliver mobile experiences that users love.
              </p>
              <p>
                With a strong foundation in Flutter and native development, I specialize in building scalable applications 
                that perform flawlessly across platforms. My experience spans from concept to deployment, ensuring every 
                project meets the highest standards of quality and user experience.
              </p>
              <p>
                I thrive on challenges and continuously expand my skills to stay at the forefront of mobile development. 
                Whether it's implementing complex state management solutions or optimizing performance for resource-intensive 
                applications, I'm committed to finding the most efficient and elegant solutions.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 h-fit"
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Professional Snapshot</h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>5+ years in mobile app development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Specialized in Flutter & Firebase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Expert in cross-platform development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Strong UI/UX design sensibilities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Advanced state management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Performance optimization specialist</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 rounded-full bg-secondary/50">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{strength.title}</h3>
              <p className="text-foreground/70">{strength.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;