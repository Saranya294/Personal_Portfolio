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
    <div className="space-y-6 xxs:space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 mb-6 xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-16">Projects</h2>
      </motion.div>

      <div className="space-y-8 xxs:space-y-10 xs:space-y-12 sm:space-y-16 md:space-y-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
            className="border-l-4 border-blue-600 bg-white p-4 xxs:p-6 xs:p-8 sm:p-10 md:p-12"
            whileHover={{ x: 10, scale: 1.02 }}
          >
            <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
              <h3 className="text-base xxs:text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold text-black">{project.title}</h3>
              
              <p className="text-gray-700 leading-relaxed text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 xxs:gap-3 xs:gap-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 xxs:px-3 xs:px-4 py-1 xxs:py-1.5 bg-blue-600 text-white text-xs xxs:text-sm xs:text-base font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-col xs:flex-row space-y-3 xs:space-y-0 xs:space-x-4 sm:space-x-6 pt-2 xxs:pt-3 xs:pt-4 sm:pt-6">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 xxs:space-x-3 bg-blue-600 text-white px-3 xxs:px-4 xs:px-6 py-2 xxs:py-3 font-semibold hover:bg-blue-700 transition-all duration-300 text-xs xxs:text-sm xs:text-base sm:text-lg"
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
                  className="flex items-center justify-center space-x-2 xxs:space-x-3 border-2 border-black text-black px-3 xxs:px-4 xs:px-6 py-2 xxs:py-3 font-semibold hover:bg-black hover:text-white transition-all duration-300 text-xs xxs:text-sm xs:text-base sm:text-lg"
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