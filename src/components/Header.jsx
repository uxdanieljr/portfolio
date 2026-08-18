import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLang } from '../context/LangContext';

const Header = () => {
  const { lang } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleLangToggle = () => {
    const isEn = location.pathname.startsWith('/en');
    if (isEn) {
      navigate(location.pathname.replace(/^\/en/, '') || '/', { replace: true });
    } else {
      navigate('/en' + (location.pathname === '/' ? '' : location.pathname), { replace: true });
    }
  };

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) return;

    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => spyObserver.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => spyObserver.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHome]);

  const closeMenu = () => setIsMenuOpen(false);

  // Esc keys closes menu
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/#hero" className="logo-link" id="nav-logo" onClick={closeMenu}>
          {isHome ? 'danielcarvalho.design' : (lang === 'pt' ? '← Voltar' : '← Back')}
        </Link>

        {isHome && (
          <nav aria-label={lang === 'pt' ? 'Navegação Principal' : 'Main Navigation'}>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
              <li>
                <Link to="/#projetos" className={`nav-link ${activeSection === 'projetos' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Projetos' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Sobre' : 'About'}
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className={`nav-link ${activeSection === 'servicos' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Serviços' : 'Services'}
                </Link>
              </li>
              <li>
                <a href="/Daniel Carvalho - Product Designer 2026.pdf" target="_blank" rel="noopener noreferrer" className="nav-link" onClick={closeMenu}>
                  {lang === 'pt' ? 'Currículo' : 'Résumé'}
                </a>
              </li>
              <li>
                <Link to="/#contato" className={`nav-link ${activeSection === 'contato' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Contato' : 'Contact'}
                </Link>
              </li>
              <li className="lang-separator" aria-hidden="true"></li>
              <li>
                <button className="lang-toggle-btn" aria-label="Alternar idioma" onClick={handleLangToggle}>
                  {lang === 'pt' ? 'PT' : 'EN'}
                </button>
              </li>
            </ul>
          </nav>
        )}

        <div className="nav-actions">
          {isHome && (
            <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menu de navegação" aria-expanded={isMenuOpen} aria-controls="nav-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {lang === 'pt' ? 'Menu' : 'Menu'}
            </button>
          )}
          {!isHome && (
             <button className="lang-toggle-btn" aria-label="Alternar idioma" onClick={handleLangToggle}>
              {lang === 'pt' ? 'PT' : 'EN'}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
