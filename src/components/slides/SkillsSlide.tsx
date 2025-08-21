import React from 'react';
import { motion } from 'framer-motion';

const SkillsSlide: React.FC = () => {
  const skills = [
    { name: 'Python', level: 90, color: 'from-blue-500 to-blue-700' },
    { name: 'SQL', level: 85, color: 'from-blue-600 to-blue-800' },
    { name: 'Excel/Power BI', level: 80, color: 'from-blue-400 to-blue-600' },
    { name: 'Statistics', level: 75, color: 'from-blue-700 to-blue-900' },
  ];

  return (
    <div className="space-y-6 xxs:space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 mb-6 xxs:mb-8 xs:mb-10 sm:mb-12 md:mb-16">Skills</h2>
      </motion.div>

      <div className="space-y-4 xxs:space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="space-y-2 xxs:space-y-3 xs:space-y-4"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black">{skill.name}</span>
              <span className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl text-blue-600 font-semibold">{skill.level}%</span>
            </div>
            
            <div className="w-full bg-gray-300 h-2 xxs:h-3 xs:h-4 sm:h-5 md:h-6 lg:h-7 overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${skill.color}`}
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
        className="mt-6 xxs:mt-8 xs:mt-10 sm:mt-12 md:mt-16 p-4 xxs:p-6 xs:p-8 sm:p-10 md:p-12 border-t-2 border-blue-600 bg-white"
      >
        <p className="text-gray-700 text-center text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl font-medium">
          Always learning and exploring new analytical tools to stay current with data science trends.
        </p>
      </motion.div>
    </div>
  );
};

export default SkillsSlide;