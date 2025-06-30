import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const HomeSlide: React.FC = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="space-y-3 sm:space-y-4"
      >
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring", stiffness: 100 }}
        >
          Hi, <br />
          I'm <span className="font-caveat gradient-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Saranya</span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center xl:justify-start space-x-2"
        >
          <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 animate-pulse" />
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-medium">
            Frontend Developer
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="space-y-4 sm:space-y-6"
      >
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto xl:mx-0">
          Passionate about creating beautiful, functional, and user-friendly web experiences 
          that make a difference in people's lives.
        </p>
        
        <motion.button
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 sm:px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
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