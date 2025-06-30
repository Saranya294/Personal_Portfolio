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
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">About Me</h2>
        
        <div className="space-y-6">
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            I am a Frontend Developer with a passion for creating simple and attractive websites. 
            My goal is to make websites easy to use and enjoyable for everyone.
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed"
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
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 p-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
            transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
          >
            <feature.icon className="w-6 h-6 text-primary-500" />
            <span className="text-gray-700 font-medium">{feature.text}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AboutSlide;