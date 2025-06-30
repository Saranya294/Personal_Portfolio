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
    <div className="space-y-6 sm:space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text mb-4 sm:mb-6">Get In Touch</h2>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          I'm always open to discussing new opportunities and interesting projects. 
          Let's connect and create something amazing together!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {contactInfo.map((info, index) => (
          <motion.a
            key={info.label}
            href={info.href}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="glass-effect rounded-xl p-4 sm:p-6 hover-lift text-center group"
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-1 text-sm sm:text-base">{info.label}</h3>
                <p className="text-gray-600 text-xs sm:text-sm break-words">{info.value}</p>
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
          className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto text-sm sm:text-base"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <Send size={18} />
          <span>Send Message</span>
        </motion.button>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center text-gray-500 text-xs sm:text-sm pt-6 sm:pt-8 border-t border-gray-200"
      >
        © 2024 Saranya. All rights reserved.
      </motion.footer>
    </div>
  );
};

export default ContactSlide;