import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useMotionTokens } from '../utils/motion';

const ScrollProgress = () => {
  const { pathname } = useLocation();
  const { prefersReducedMotion } = useMotionTokens();

  // Verifica se não é a página inicial (se é uma página de case)
  // Rotas Home: "/" ou "/en" ou "/en/"
  const isHomePage = pathname === '/' || pathname === '/en' || pathname === '/en/';
  
  const { scrollYProgress } = useScroll();
  
  // Suaviza o progresso
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (isHomePage || prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      id="scroll-progress"
      aria-hidden="true"
      style={{
        scaleX,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        backgroundColor: 'var(--color-wine)',
        transformOrigin: '0%',
        zIndex: 9999
      }}
    />
  );
};

export default ScrollProgress;
