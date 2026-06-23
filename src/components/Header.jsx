import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useTheme } from '../context/ThemeContext';
import { useLang } from '../context/LangContext';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

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

  return (
    <header className="site-header">
      <div className="container nav-wrapper">
        <Link to="/#hero" className="logo-link" id="nav-logo" onClick={closeMenu}>
          {isHome ? 'danielcarvalho.design' : (lang === 'pt' ? '\u2190 Voltar' : '\u2190 Back')}
        </Link>

        {isHome && (
          <nav aria-label={lang === 'pt' ? 'Navegação Principal' : 'Main Navigation'}>
            <ul className={`nav-menu ${isMenuOpen ? 'open' : ''}`} id="nav-menu">
              <li>
                <Link to="/#sobre" className={`nav-link ${activeSection === 'sobre' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Sobre' : 'About'}
                </Link>
              </li>
              <li>
                <Link to="/#projetos" className={`nav-link ${activeSection === 'projetos' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Projetos' : 'Projects'}
                </Link>
              </li>
              <li>
                <Link to="/#servicos" className={`nav-link ${activeSection === 'servicos' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Serviços' : 'Services'}
                </Link>
              </li>
              <li>
                <Link to="/#contato" className={`nav-link ${activeSection === 'contato' ? 'active' : ''}`} onClick={closeMenu}>
                  {lang === 'pt' ? 'Contato' : 'Contact'}
                </Link>
              </li>
              <li className="mobile-only-toggles" style={{ display: 'none', justifyContent: 'center', gap: '1rem', marginTop: '1rem' }}>
                <button className="lang-toggle-btn" aria-label="Alternar idioma" onClick={toggleLang}>
                  {lang === 'pt' ? 'PT' : 'EN'}
                </button>
                <button className="theme-toggle-btn" aria-label="Alternar modo escuro e claro" onClick={toggleTheme}>
                  <svg className="sun-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: theme === 'dark' ? 'block' : 'none' }}>
                    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
                  </svg>
                  <svg className="moon-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: theme === 'light' ? 'block' : 'none' }}>
                    <path d="M12.3 22c5.36 0 9.7-4.34 9.7-9.7 0-2.5-.94-4.79-2.5-6.52-.39-.43-1.02-.36-1.32.14a7.99 7.99 0 01-12.65 9.06c-.37-.36-.97-.24-1.18.25A9.66 9.66 0 0012.3 22z"/>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        )}

        <div className="nav-actions">
          <button className="lang-toggle-btn" aria-label="Alternar idioma" onClick={toggleLang}>
            {lang === 'pt' ? 'PT' : 'EN'}
          </button>
          
          <button className="theme-toggle-btn" aria-label="Alternar modo escuro e claro" onClick={toggleTheme}>
            <svg className="sun-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: theme === 'dark' ? 'block' : 'none' }}>
              <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41zm-12.37 12.37c-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.38.39-1.02 0-1.41z"/>
            </svg>
            <svg className="moon-icon" viewBox="0 0 24 24" aria-hidden="true" style={{ display: theme === 'light' ? 'block' : 'none' }}>
              <path d="M12.3 22c5.36 0 9.7-4.34 9.7-9.7 0-2.5-.94-4.79-2.5-6.52-.39-.43-1.02-.36-1.32.14a7.99 7.99 0 01-12.65 9.06c-.37-.36-.97-.24-1.18.25A9.66 9.66 0 0012.3 22z"/>
            </svg>
          </button>

          {isHome && (
            <button className="mobile-menu-btn" id="mobile-menu-btn" aria-label="Abrir menu de navegação" aria-expanded={isMenuOpen} aria-controls="nav-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
