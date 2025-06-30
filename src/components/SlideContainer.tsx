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
    <div className="relative w-full h-screen overflow-hidden" ref={constraintsRef}>
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
          <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center px-6 lg:px-12 gap-8 lg:gap-16">
            {/* Image Section */}
            <motion.div 
              className="flex-1 flex justify-center items-center max-w-md lg:max-w-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <motion.img
                src={currentSlideData.image}
                alt={currentSlideData.title}
                className="w-full h-auto max-h-96 object-contain animate-float"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              className="flex-1 max-w-2xl"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="glass-effect rounded-2xl p-8 lg:p-12 text-center lg:text-left">
                {currentSlideData.component}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        <motion.button
          onClick={() => moveSlide(-1)}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-6 h-6 text-primary-600" />
        </motion.button>
        
        <motion.button
          onClick={() => moveSlide(1)}
          className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300"
          whileHover={{ scale: 1.1, backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-6 h-6 text-primary-600" />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => moveSlide(index - currentSlide)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
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