import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideData } from '../types/slide';

interface SlideContainerProps {
  currentSlide: number;
  direction: number;
  moveSlide: (direction: number) => void;
  slides: SlideData[];
}

const SlideContainer: React.FC<SlideContainerProps> = ({
  currentSlide,
  direction,
  moveSlide,
  slides
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef(null);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const handleDragEnd = (e: any, { offset, velocity }: PanInfo) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      moveSlide(1);
    } else if (swipe > swipeConfidenceThreshold) {
      moveSlide(-1);
    }
    setIsDragging(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden pt-16 sm:pt-20" ref={constraintsRef}>
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
            scale: { duration: 0.4 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
          style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
          <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 gap-4 sm:gap-6 lg:gap-8 xl:gap-16 py-4 sm:py-6 lg:py-8">
            {/* Image Section */}
            <motion.div 
              className="flex-1 flex justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl order-1 xl:order-none"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-auto max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 object-contain animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="flex-1 w-full max-w-full xl:max-w-2xl order-2 xl:order-none"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 text-center xl:text-left h-full overflow-y-auto max-h-[60vh] xl:max-h-none">
                {currentSlideData.component}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Navigation Arrow */}
      <motion.button
        onClick={() => moveSlide(-1)}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)', x: -5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
      </motion.button>

      {/* Right Navigation Arrow */}
      <motion.button
        onClick={() => moveSlide(1)}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 transform -translate-y-1/2 p-3 sm:p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 z-10"
        whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)', x: 5 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" />
      </motion.button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => moveSlide(index - currentSlide)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-primary-500 scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideContainer;