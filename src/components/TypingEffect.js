import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypingEffect = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index];
      
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, index, texts, typingSpeed]);

  return (
    <span className="typing-text">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="cursor"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypingEffect;
