import React from 'react';
import { motion } from 'framer-motion';

const SkillsSlide: React.FC = () => {
  const skills = [
    { name: 'HTML', level: 90, color: 'from-orange-400 to-orange-600' },
    { name: 'CSS', level: 85, color: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 75, color: 'from-green-400 to-green-600' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-6 sm:mb-8">Skills</h2>
      </motion.div>

      <div className="space-y-4 sm:space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-base sm:text-lg font-semibold text-gray-700">{skill.name}</span>
              <span className="text-sm text-gray-500">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ 
                  delay: 0.6 + index * 0.1, 
                  duration: 1,
                  ease: "easeOut"
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg"
      >
        <p className="text-gray-600 text-center text-sm sm:text-base">
          Always learning and exploring new technologies to stay current with industry trends.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsSlide;