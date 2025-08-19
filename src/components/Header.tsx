import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentSlide: number;
  goToSlide: (index: number) => void;
  totalSlides: number;
}

const Header: React.FC<HeaderProps> = ({ currentSlide, goToSlide, totalSlides }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="flex justify-between items-center px-2 xxs:px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-2 xxs:py-3 xs:py-4 sm:py-5">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-6 h-6 xxs:w-7 xxs:h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs xxs:text-sm xs:text-base sm:text-lg md:text-xl">S</span>
          </div>
          <span className="font-caveat text-lg xxs:text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">Saranya</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-1 xl:space-x-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => goToSlide(index)}
              className={`px-2 lg:px-3 xl:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-xs lg:text-sm xl:text-base 2xl:text-lg ${
                currentSlide === index
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="lg:hidden p-1 xxs:p-2 rounded-lg hover:bg-primary-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6" /> : <Menu className="w-4 h-4 xxs:w-5 xxs:h-5 xs:w-6 xs:h-6" />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-white/20"
      >
        <div className="px-2 xxs:px-3 xs:px-4 sm:px-6 py-2 xxs:py-3 xs:py-4 space-y-1 xxs:space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => {
                goToSlide(index);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-2 xxs:px-3 xs:px-4 py-2 xxs:py-3 rounded-lg font-medium transition-all duration-300 text-sm xxs:text-base xs:text-lg ${
                currentSlide === index
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 hover:bg-primary-50'
              }`}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.nav>
    </motion.header>
  );
};

export default Header;