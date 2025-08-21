import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import SlideContainer from './components/SlideContainer';
import { slides } from './data/slides';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const moveSlide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') moveSlide(-1);
      if (e.key === 'ArrowRight') moveSlide(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <Header 
        currentSlide={currentSlide} 
        goToSlide={goToSlide}
        totalSlides={slides.length}
      />
      
      <main className="relative">
        <SlideContainer
          currentSlide={currentSlide}
          direction={direction}
          moveSlide={moveSlide}
          slides={slides}
        />
      </main>
    </div>
  );
}

export default App;