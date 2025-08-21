import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Database, BarChart3 } from 'lucide-react';

const AboutSlide: React.FC = () => {
  const features = [
    { icon: Database, text: "Data Processing" },
    { icon: BarChart3, text: "Statistical Analysis" },
    { icon: TrendingUp, text: "Business Intelligence" }
  ];

  return (
    <div className="space-y-6 xxs:space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-800 mb-2 xxs:mb-3 xs:mb-4 sm:mb-6 md:mb-8">About Me</h2>
        
        <div className="space-y-4 xxs:space-y-6 xs:space-y-8 sm:space-y-10 md:space-y-12">
          <motion.p 
            className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I am a Data Analyst with a passion for uncovering insights from complex datasets. 
            My goal is to transform raw data into clear, actionable business intelligence.
          </motion.p>
          
          <motion.p 
            className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I believe in the power of data-driven decision making to solve complex business problems 
            and drive organizational growth through analytical insights.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 xxs:gap-6 xs:gap-8 sm:gap-10 md:gap-12"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 xxs:space-x-4 xs:space-x-5 sm:space-x-6 md:space-x-8 p-4 xxs:p-6 xs:p-8 sm:p-10 md:p-12 border-l-4 border-blue-600 bg-white"
            whileHover={{ scale: 1.02, x: 10 }}
            transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
          >
            <feature.icon className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 flex-shrink-0" />
            <span className="text-black font-semibold text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSlide;