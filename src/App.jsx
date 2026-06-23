import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

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

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollProgress />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/case-conecta" element={<CaseConecta />} />
          <Route path="/case-mobinft" element={<CaseMobinft />} />
          <Route path="/case-bradesco" element={<CaseBradesco />} />
          <Route path="/case-bradesco-senha" element={<CaseBradescoSenha />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
