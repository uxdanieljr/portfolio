import { useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Easing neobrutalista / editorial (cubic-bezier(0.16, 1, 0.3, 1))
export const EASING = [0.16, 1, 0.3, 1];

// Durações padrão
export const DURATION = {
  fast: 0.16,
  normal: 0.22,
  enter: 0.32,
};

// Stagger default
export const STAGGER = 0.05;

/**
 * Hook para obter os tokens baseados no viewport e preferência do usuário.
 */
export function useMotionTokens() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 768px)');
    setIsMobile(mql.matches);
    
    const handler = (e) => setIsMobile(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Em modo acessibilidade, animações vão direto para o final (sem deslocamento)
  const yOffsetNormal = prefersReducedMotion ? 0 : (isMobile ? 8 : 12);
  const yOffsetMax = prefersReducedMotion ? 0 : (isMobile ? 12 : 16);
  
  // Variantes reutilizáveis
  const fadeIn = {
    hidden: { opacity: 0, y: yOffsetNormal },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: DURATION.enter, ease: EASING } 
    }
  };

  const fadeInMax = {
    hidden: { opacity: 0, y: yOffsetMax },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: DURATION.enter, ease: EASING } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : STAGGER,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: yOffsetMax },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: DURATION.enter, ease: EASING } 
    }
  };

  return {
    isMobile,
    prefersReducedMotion,
    fadeIn,
    fadeInMax,
    staggerContainer,
    staggerItem,
  };
}
