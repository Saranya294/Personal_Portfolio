import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Palette } from 'lucide-react';

const AboutSlide: React.FC = () => {
  const features = [
    { icon: Code, text: "Clean, efficient code" },
    { icon: Palette, text: "Beautiful designs" },
    { icon: Heart, text: "User-centered approach" }
  ];

  return (
    <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mb-2 xxs:mb-3 xs:mb-4 sm:mb-6 md:mb-8">About Me</h2>
        
        <div className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
          <motion.p 
            className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I am a Frontend Developer with a passion for creating simple and attractive websites. 
            My goal is to make websites easy to use and enjoyable for everyone.
          </motion.p>
          
          <motion.p 
            className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I believe in the power of good design and clean code to solve real-world problems 
            and create meaningful digital experiences.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xxs:gap-3 xs:gap-4 sm:gap-5 md:gap-6"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-2 xxs:space-x-3 p-2 xxs:p-3 xs:p-4 sm:p-5 md:p-6 bg-gradient-to-r from-primary-50 to-accent-50 rounded-md xxs:rounded-lg"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
          >
            <feature.icon className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-primary-500 flex-shrink-0" />
            <span className="text-gray-700 font-medium text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSlide;