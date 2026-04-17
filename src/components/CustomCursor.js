import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse position values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the cursor
  const springConfig = { damping: 25, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, .project-card, .cert-card, .nav-link');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Small Dot */}
      <motion.div
        className="custom-cursor-dot"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      />
      {/* Outer Ring */}
      <motion.div
        className="custom-cursor-ring"
        style={{
          left: cursorX,
          top: cursorY,
        }}
        animate={{
          scale: isHovering ? 2.5 : 1,
          borderColor: isHovering ? 'var(--primary)' : 'rgba(129, 140, 248, 0.5)',
          backgroundColor: isHovering ? 'rgba(129, 140, 248, 0.1)' : 'transparent',
        }}
      />
    </>
  );
};

export default CustomCursor;
