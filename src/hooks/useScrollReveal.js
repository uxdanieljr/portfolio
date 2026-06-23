import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const revealOptions = {
      root: null,
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, revealOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      // Remover active se já houver para resetar a animação (opcional)
      // section.classList.remove('active'); 
      revealObserver.observe(section);
    });

    return () => {
      sections.forEach(section => revealObserver.unobserve(section));
    };
  }, [pathname]); // Re-executa quando muda de rota
};
