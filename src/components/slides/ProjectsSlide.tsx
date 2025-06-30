import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSlide: React.FC = () => {
  const projects = [
    {
      title: 'ChatBot',
      description: 'Chatbot with Gemini API Integration built using Python',
      technologies: ['Python', 'Gemini API', 'Streamlit'],
      link: 'https://doraemonbot-cgeaef2efztqyaj5n86zcg.streamlit.app/',
      github: '#'
    },
    {
      title: 'Real-Time News Portal',
      description: 'A Python-based web scraping project fetching live news updates',
      technologies: ['Python', 'Web Scraping', 'APIs'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-8">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            className="glass-effect rounded-xl p-6 hover-lift"
            whileHover={{ y: -5 }}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} />
                  <span>View Project</span>
                </motion.a>
                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={16} />
                  <span>Code</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSlide;