import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useLang } from './context/LangContext';

// Pages
import Home from './pages/Home';
import CaseConecta from './pages/CaseConecta';
import CaseMobinft from './pages/CaseMobinft';
import CaseBradesco from './pages/CaseBradesco';
import CaseBradescoSenha from './pages/CaseBradescoSenha';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function LanguageSync() {
  const { pathname } = useLocation();
  const { lang, toggleLang } = useLang();
  
  useEffect(() => {
    const isEn = pathname.startsWith('/en');
    if (isEn && lang !== 'en') {
      toggleLang('en');
    } else if (!isEn && lang !== 'pt') {
      toggleLang('pt');
    }
  }, [pathname, lang, toggleLang]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <LanguageSync />
      <ScrollProgress />
      <Header />
      <Routes>
        {/* Redirects antigos */}
        <Route path="/case-conecta" element={<Navigate to="/cases/conecta" replace />} />
        <Route path="/case-mobinft" element={<Navigate to="/cases/mobinft" replace />} />
        <Route path="/case-bradesco-senha" element={<Navigate to="/cases/bradesco-seguros" replace />} />
        <Route path="/case-bradesco" element={<Navigate to="/cases/bradesco-seguros-completo" replace />} />

        {/* Rotas PT */}
        <Route path="/" element={<Home />} />
        <Route path="/cases/conecta" element={<CaseConecta />} />
        <Route path="/cases/mobinft" element={<CaseMobinft />} />
        <Route path="/cases/bradesco-seguros" element={<CaseBradescoSenha />} />
        <Route path="/cases/bradesco-seguros-completo" element={<CaseBradesco />} />

        {/* Rotas EN */}
        <Route path="/en" element={<Home />} />
        <Route path="/en/cases/conecta" element={<CaseConecta />} />
        <Route path="/en/cases/mobinft" element={<CaseMobinft />} />
        <Route path="/en/cases/bradesco-seguros" element={<CaseBradescoSenha />} />
        <Route path="/en/cases/bradesco-seguros-completo" element={<CaseBradesco />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

