import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { useLang } from '../context/LangContext';

const Footer = () => {
  const { lang } = useLang();
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

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-left">
          <p className="footer-credits" style={{ margin: 0, color: 'var(--color-text-secondary)', fontSize: '0.9375rem' }}>
            Daniel Carvalho &copy; {new Date().getFullYear()}
          </p>
        </div>
        <div className="footer-right">
          <nav className="footer-nav" aria-label={lang === 'pt' ? 'Navegação do Rodapé' : 'Footer Navigation'}>
            {isHome ? (
              <>
                <Link to="/#projetos">{lang === 'pt' ? 'Projetos' : 'Projects'}</Link>
                <Link to="/#sobre">{lang === 'pt' ? 'Sobre' : 'About'}</Link>
                <Link to="/#contato">{lang === 'pt' ? 'Contato' : 'Contact'}</Link>
              </>
            ) : (
              <Link to="/">{lang === 'pt' ? 'Início' : 'Home'}</Link>
            )}
            <button className="lang-toggle-btn" aria-label="Alternar idioma" onClick={handleLangToggle} style={{ padding: 0 }}>
              {lang === 'pt' ? 'PT' : 'EN'}
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
