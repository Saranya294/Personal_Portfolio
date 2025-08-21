import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSlide: React.FC = () => {
  const projects = [
    {
      title: 'Sales Analytics Dashboard',
      description: 'Interactive dashboard analyzing sales performance and customer behavior patterns',
      technologies: ['Python', 'Power BI', 'SQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning project for customer segmentation using clustering algorithms',
      technologies: ['Python', 'Pandas', 'Scikit-learn'],
      link: '#',
      github: '#'
    }
  ];

  return (
    <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-800 mb-3 xxs:mb-4 xs:mb-6 sm:mb-8 md:mb-10">Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 xxs:gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            className="glass-effect rounded-lg xxs:rounded-xl p-2 xxs:p-3 xs:p-4 sm:p-6 md:p-8 hover-lift"
            whileHover={{ y: -5 }}
          >
            <div className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-5">
              <h3 className="text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">{project.title}</h3>
              
              <p className="text-gray-600 leading-relaxed text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 xxs:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-1.5 xxs:px-2 xs:px-3 py-0.5 xxs:py-1 bg-blue-100 text-blue-800 rounded-full text-xs xxs:text-sm xs:text-base font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col xs:flex-row space-y-2 xs:space-y-0 xs:space-x-2 sm:space-x-4 pt-1 xxs:pt-2 xs:pt-3 sm:pt-4">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 xxs:space-x-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 xxs:px-3 xs:px-4 py-1.5 xxs:py-2 rounded-md xxs:rounded-lg font-medium hover:shadow-lg transition-all duration-300 text-xs xxs:text-sm xs:text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="w-3 h-3 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5" />
                  <span>View Project</span>
                </motion.a>
                
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-1 xxs:space-x-2 border border-gray-300 text-gray-800 px-2 xxs:px-3 xs:px-4 py-1.5 xxs:py-2 rounded-md xxs:rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 text-xs xxs:text-sm xs:text-base sm:text-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-3 h-3 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5" />
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