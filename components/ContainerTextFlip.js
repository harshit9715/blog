import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className = "",
  textClassName = "",
  animationDuration = 600,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState('auto');
  const containerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Measure all words and use the maximum width + padding
      const tempSpan = document.createElement('span');
      tempSpan.style.visibility = 'hidden';
      tempSpan.style.position = 'absolute';
      tempSpan.style.whiteSpace = 'nowrap';
      tempSpan.className = textClassName;
      
      document.body.appendChild(tempSpan);
      
      let maxWidth = 0;
      words.forEach(word => {
        tempSpan.textContent = word;
        const wordWidth = tempSpan.offsetWidth;
        if (wordWidth > maxWidth) {
          maxWidth = wordWidth;
        }
      });
      
      document.body.removeChild(tempSpan);
      // Add 48px padding to prevent overlap with adjacent text
      setWidth(`${maxWidth + 48}px`);
    }
  }, [words, textClassName]);

  return (
    <span
      ref={containerRef}
      className={className}
      style={{
        display: 'inline-block',
        position: 'relative',
        verticalAlign: 'baseline',
        width: width,
        minWidth: width,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, position: 'absolute', left: 0, right: 0 }}
          animate={{ opacity: 1, y: 0, position: 'relative' }}
          exit={{ opacity: 0, y: -20, position: 'absolute', left: 0, right: 0 }}
          transition={{
            duration: animationDuration / 1000,
            ease: [0.4, 0, 0.2, 1],
          }}
          className={textClassName}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
          }}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
