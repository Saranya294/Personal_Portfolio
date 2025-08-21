import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSlide: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saranyasubiramani29@gmail.com',
      href: 'mailto:saranyasubiramani29@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6381020242',
      href: 'tel:+916381020242'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for Remote Work',
      href: '#'
    }
  ];

  return (
    <div className="space-y-6 xxs:space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16 lg:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-600 mb-4 xxs:mb-6 xs:mb-8 sm:mb-10 md:mb-12">Get In Touch</h2>
        <p className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          I'm always open to discussing new data analysis opportunities and challenging projects. 
          Let's connect and unlock insights from your data together!
        </p>
      </motion.div>

      <div className="space-y-6 xxs:space-y-8 xs:space-y-10 sm:space-y-12 md:space-y-16">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="flex items-center space-x-4 xxs:space-x-6 xs:space-x-8 p-4 xxs:p-6 xs:p-8 sm:p-10 md:p-12 border-l-4 border-blue-600 bg-white group"
            whileHover={{ x: 10, scale: 1.02 }}
          >
            <div className="w-8 h-8 xxs:w-10 xxs:h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300 flex-shrink-0">
              <info.icon className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="font-bold text-black mb-1 xxs:mb-2 text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">{info.label}</h3>
              <p className="text-gray-700 text-xs xxs:text-sm xs:text-base sm:text-lg break-words">{info.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center pt-4 xxs:pt-6 xs:pt-8 sm:pt-10 md:pt-12"
      >
        <motion.button
          className="bg-blue-600 text-white px-4 xxs:px-6 xs:px-8 sm:px-10 md:px-12 py-3 xxs:py-4 xs:py-5 sm:py-6 font-bold hover:bg-blue-700 transition-all duration-300 flex items-center space-x-2 xxs:space-x-3 mx-auto text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send className="w-3 h-3 xxs:w-4 xxs:h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          <span>Send Message</span>
        </motion.button>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center text-gray-600 text-xs xxs:text-sm xs:text-base pt-6 xxs:pt-8 xs:pt-10 sm:pt-12 border-t-2 border-gray-300"
      >
        © 2024 Saranya. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default ContactSlide;