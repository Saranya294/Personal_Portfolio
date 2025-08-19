import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HomeSlide: React.FC = () => {
  return (
    <div className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-6 md:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-6"
      >
        <motion.h1 
          className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          Hi, <br />
          I'm <span className="font-caveat gradient-text text-3xl xxs:text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]">Saranya</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center lg:justify-start space-x-1 xxs:space-x-2"
        >
          <Sparkles className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent-500 animate-pulse" />
          <p className="text-sm xxs:text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-medium">
            Frontend Developer
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8"
      >
        <p className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xs xxs:max-w-sm xs:max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto lg:mx-0">
          Passionate about creating beautiful, functional, and user-friendly web experiences 
          that make a difference in people's lives.
        </p>
        
        <motion.button
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 xxs:px-4 xs:px-6 sm:px-8 md:px-10 py-2 xxs:py-2.5 xs:py-3 sm:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Connect
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HomeSlide;