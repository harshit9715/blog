import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className = "",
  textClassName = "",
  animationDuration = 500,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'baseline',
      }}
    >
      {/* Hidden spacer to maintain layout width */}
      <span
        style={{
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          display: 'inline-block',
        }}
        aria-hidden="true"
      >
        {words[currentIndex]}
      </span>
      
      {/* Animated text positioned absolutely */}
      <span
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          display: 'inline-block',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            className={textClassName}
            initial={{ opacity: 0, y: '0.4em' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-0.4em' }}
            transition={{
              duration: animationDuration / 1000,
              ease: [0.4, 0, 0.2, 1],
            }}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
