import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2,
  Palette,
  FileCode,
  Database,
  Server,
  GitBranch,
  Globe,
  Box
} from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <Code2 className="w-6 h-6" /> },
        { name: "CSS", icon: <Palette className="w-6 h-6" /> },
        { name: "JavaScript", icon: <FileCode className="w-6 h-6" /> },
        { name: "React", icon: <Box className="w-6 h-6" /> }
      ],
      color: "bg-blue-500"
    },
    {
      category: "Backend",
      items: [
        { name: "PHP", icon: <Server className="w-6 h-6" /> },
        { name: "MySQL", icon: <Database className="w-6 h-6" /> },
        { name: "Node.js", icon: <FileCode className="w-6 h-6" /> }
      ],
      color: "bg-green-500"
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
        { name: "RESTful APIs", icon: <Globe className="w-6 h-6" /> }
      ],
      color: "bg-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-lg p-6 card-hover"
            >
              <div className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}>
                {category.items[0].icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;