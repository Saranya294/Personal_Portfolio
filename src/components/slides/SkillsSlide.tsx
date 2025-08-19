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
    <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mb-3 xxs:mb-4 xs:mb-6 sm:mb-8 md:mb-10">Skills</h2>
      </motion.div>

      <div className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="space-y-1 xxs:space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">{skill.name}</span>
              <span className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl text-gray-500">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-1.5 xxs:h-2 xs:h-2.5 sm:h-3 md:h-4 lg:h-5 overflow-hidden">
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
        className="mt-3 xxs:mt-4 xs:mt-6 sm:mt-8 md:mt-10 p-2 xxs:p-3 xs:p-4 sm:p-6 md:p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-md xxs:rounded-lg"
      >
        <p className="text-gray-600 text-center text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">
          Always learning and exploring new technologies to stay current with industry trends.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsSlide;