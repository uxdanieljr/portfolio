import React, { createContext, useState, useEffect, useContext } from 'react';

const LangContext = createContext();

export const useLang = () => useContext(LangContext);

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('portfolio-lang');
    if (savedLang) {
      setLang(savedLang);
    } else {
      const userLang = navigator.language || navigator.userLanguage;
      if (userLang && userLang.toLowerCase().includes('en')) {
        setLang('en');
      }
    }
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-lang', lang);
    localStorage.setItem('portfolio-lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'pt' ? 'en' : 'pt'));
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
};
