import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const RevealOnScroll = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  threshold = 0.2,
  duration = 0.6,
  once = false
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: once
  });

  // Define animations based on direction
  const getVariants = () => {
    const baseTransition = { duration: duration, delay };
    
    switch(direction) {
      case 'up':
        return {
          visible: { opacity: 1, y: 0, transition: baseTransition },
          hidden: { opacity: 0, y: 75, transition: { duration: duration / 1.5 } }
        };
      case 'down':
        return {
          visible: { opacity: 1, y: 0, transition: baseTransition },
          hidden: { opacity: 0, y: -75, transition: { duration: duration / 1.5 } }
        };
      case 'left':
        return {
          visible: { opacity: 1, x: 0, transition: baseTransition },
          hidden: { opacity: 0, x: 75, transition: { duration: duration / 1.5 } }
        };
      case 'right':
        return {
          visible: { opacity: 1, x: 0, transition: baseTransition },
          hidden: { opacity: 0, x: -75, transition: { duration: duration / 1.5 } }
        };
      case 'fade':
        return {
          visible: { opacity: 1, transition: { duration: 0.8, delay } },
          hidden: { opacity: 0, transition: { duration: 0.4 } }
        };
      case 'scale':
        return {
          visible: { opacity: 1, scale: 1, transition: baseTransition },
          hidden: { opacity: 0, scale: 0.8, transition: { duration: duration / 1.5 } }
        };
      case 'rotate':
        return {
          visible: { opacity: 1, rotate: 0, scale: 1, transition: baseTransition },
          hidden: { opacity: 0, rotate: -10, scale: 0.9, transition: { duration: duration / 1.5 } }
        };
      case 'flip':
        return {
          visible: { opacity: 1, rotateX: 0, transition: baseTransition },
          hidden: { opacity: 0, rotateX: 90, transition: { duration: duration / 1.5 } }
        };
      default:
        return {
          visible: { opacity: 1, y: 0, transition: baseTransition },
          hidden: { opacity: 0, y: 75, transition: { duration: duration / 1.5 } }
        };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={getVariants()}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;