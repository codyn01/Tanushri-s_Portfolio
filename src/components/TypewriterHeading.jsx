import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const useInView = (ref, options = {}) => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { 
        threshold: 0.1, 
        rootMargin: options.rootMargin || '0px',
        ...options 
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return inView;
};

const TypewriterHeading = ({ text, className, delay = 100 }) => {
  const [typedText, setTypedText] = useState('');
  const timerRef = useRef(null);
  const ref = useRef(null);
  const inView = useInView(ref, { rootMargin: '-100px 0px -100px 0px' });

  useEffect(() => {
    // Clear previous timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    if (inView) {
      // Reset text and start typing on entry
      setTypedText('');
      let index = 0;
      timerRef.current = setInterval(() => {
        if (index < text.length) {
          setTypedText(prev => prev + text.charAt(index));
          index++;
        } else {
          if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
          }
        }
      }, delay);
    } else {
      // Optionally reset text on exit
      // setTypedText('');
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [inView, text, delay]);

  return (
    <motion.h1
      ref={ref}
      className="font-bold" // Basic for h1
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <span className={className}>{typedText}</span>
      <span className="blinking-cursor">|</span>
    </motion.h1>
  );
};

export default TypewriterHeading;