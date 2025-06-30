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
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        {/* Logo */}
        <motion.div 
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm sm:text-lg">S</span>
          </div>
          <span className="font-caveat text-xl sm:text-2xl font-bold gradient-text">Saranya</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-1">
          {menuItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => goToSlide(index)}
              className={`px-3 lg:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm lg:text-base ${
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
          className="md:hidden p-2 rounded-lg hover:bg-primary-50"
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.nav
        initial={false}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-sm border-t border-white/20"
      >
        <div className="px-4 sm:px-6 py-4 space-y-2">
          {menuItems.map((item, index) => (
            <motion.button
              key={item}
              onClick={() => {
                goToSlide(index);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
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