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
    <div className="space-y-3 xxs:space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-2xl xxs:text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold gradient-text mb-2 xxs:mb-3 xs:mb-4 sm:mb-6 md:mb-8">Get In Touch</h2>
        <p className="text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
          I'm always open to discussing new opportunities and interesting projects. 
          Let's connect and create something amazing together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-2 xxs:gap-3 xs:gap-4 sm:gap-6 md:gap-8">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="glass-effect rounded-lg xxs:rounded-xl p-2 xxs:p-3 xs:p-4 sm:p-6 md:p-8 hover-lift text-center group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="space-y-2 xxs:space-y-3 xs:space-y-4 sm:space-y-5">
              <div className="w-8 h-8 xxs:w-10 xxs:h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-0.5 xxs:mb-1 text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">{info.label}</h3>
                <p className="text-gray-600 text-xs xxs:text-sm xs:text-base sm:text-lg break-words">{info.value}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-center"
      >
        <motion.button
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 xxs:px-4 xs:px-6 sm:px-8 md:px-10 py-2 xxs:py-2.5 xs:py-3 sm:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-1 xxs:space-x-2 mx-auto text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl"
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
        className="text-center text-gray-500 text-xs xxs:text-sm xs:text-base pt-3 xxs:pt-4 xs:pt-6 sm:pt-8 border-t border-gray-200"
      >
        © 2024 Saranya. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default ContactSlide;