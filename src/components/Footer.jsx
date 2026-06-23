import React from 'react';
import { useLang } from '../context/LangContext';

const Footer = () => {
  const { lang } = useLang();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="footer-credits">
          {lang === 'pt' ? 'Design e Código por ' : 'Design and Code by '}
          <strong>Daniel Carvalho</strong> &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
