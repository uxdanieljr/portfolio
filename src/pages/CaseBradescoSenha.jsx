import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const CaseBradescoSenha = () => {
  useScrollReveal();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'BradescoUX25') {
      navigate('/case-bradesco');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <main className="case-study-main">
        <article className="case-study-article">
          <header className="case-header">
            <h1 className="case-title" style={{ marginBottom: '1rem' }}>
              <span className="lang-pt">Acesso Restrito: Bradesco Seguros</span>
              <span className="lang-en">Restricted Access: Bradesco Seguros</span>
            </h1>
            <p className="case-subtitle">
              <span className="lang-pt">Este case contém informações sensíveis e é protegido por regras de compliance e confidencialidade da empresa.</span>
              <span className="lang-en">This case contains sensitive information and is protected by the company's compliance and confidentiality rules.</span>
            </p>
          </header>

          <div className="case-content">
            <p className="lang-pt">Por se tratar de um projeto fechado e envolver dados internos, <strong>os detalhes desta solução não podem ser divulgados publicamente</strong>.</p>
            <p className="lang-en">Because this is a closed project involving internal data, <strong>the details of this solution cannot be disclosed publicly</strong>.</p>
            
            <p className="lang-pt"><strong>Para acessar o conteúdo completo, é necessário inserir a senha de acesso.</strong> Se você for um recrutador e ainda não possui a senha, sinta-se à vontade para me contatar que enviarei o acesso imediatamente.</p>
            <p className="lang-en"><strong>To access the full content, you must enter the access password.</strong> If you are a recruiter and do not yet have the password, feel free to contact me and I will send you the access immediately.</p>

            <form className="password-form" id="password-form" onSubmit={handleSubmit}>
              <label htmlFor="case-password">
                <span className="lang-pt">Senha de acesso:</span>
                <span className="lang-en">Access password:</span>
              </label>
              <input 
                type="password" 
                id="case-password" 
                className="password-input" 
                placeholder="***" 
                required 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
              />
              <button type="submit" className="btn">
                <span className="lang-pt">Acessar case</span>
                <span className="lang-en">Access case</span>
              </button>
              
              {error && (
                <>
                  <span className="error-msg lang-pt" style={{ display: 'block' }}>Senha incorreta. Por favor, tente novamente ou me mande uma mensagem para solicitar o acesso.</span>
                  <span className="error-msg lang-en" style={{ display: 'block' }}>Incorrect password. Please try again or send me a message to request access.</span>
                </>
              )}
            </form>
          </div>
        </article>

        <section id="projetos" style={{ paddingTop: '4rem', borderBottom: 'none' }}>
          <div className="container">
            <div className="case-content" style={{ marginBottom: '3rem' }}>
                <h2 className="lang-pt">Não tem a senha? Tudo bem!</h2>
                <h2 className="lang-en">Don't have the password? That's fine!</h2>
                
                <p className="lang-pt">Enquanto você não recebe a liberação, que tal conferir meus outros projetos que já estão disponíveis de forma aberta?</p>
                <p className="lang-en">While you wait for access, how about checking out my other projects that are already openly available?</p>
            </div>
            
            <div className="projects-grid">
              {/* Conecta */}
              <article className="project-card" id="project-002">
                <div className="project-main-info">
                  <header className="project-header">
                    <div className="project-header-left">
                      <span className="project-meta-number">(02)</span>
                      <span className="project-meta-tag lang-pt">App Mobile</span>
                      <span className="project-meta-tag lang-en">Mobile App</span>
                    </div>
                    <span className="project-meta-year">2024-2025</span>
                  </header>
                  <div className="project-image-wrapper">
                    <img src="/assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
                  </div>
                  <div className="project-body-summary">
                    <h3 className="lang-pt">Redesign do app Conecta</h3>
                    <h3 className="lang-en">Conecta app Redesign</h3>
                    
                    <p className="project-subtitle lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo.</p>
                    <p className="project-subtitle lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking.</p>
                  </div>
                  <div className="project-actions">
                    <Link to="/case-conecta" className="btn btn-expand-project" style={{ textDecoration: 'none', textAlign: 'center' }}>
                      <span className="lang-pt">Ver case completo</span><span className="lang-en">View full case</span>
                    </Link>
                  </div>
                </div>
              </article>

              {/* Mobinft */}
              <article className="project-card" id="project-003">
                <div className="project-main-info">
                  <header className="project-header">
                    <div className="project-header-left">
                      <span className="project-meta-number">(03)</span>
                      <span className="project-meta-tag lang-pt">App Mobile</span>
                      <span className="project-meta-tag lang-en">Mobile App</span>
                    </div>
                    <span className="project-meta-year">2023</span>
                  </header>
                  <div className="project-image-wrapper">
                    <img src="/assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
                  </div>
                  <div className="project-body-summary">
                    <h3 className="lang-pt">Mobinft: Comprar NFT sem precisar entender NFT</h3>
                    <h3 className="lang-en">Mobinft: Buying NFTs without needing to understand NFTs</h3>
                    
                    <p className="project-subtitle lang-pt">Web3 sem manual de instruções: onboarding que transformou complexidade em primeira compra.</p>
                    <p className="project-subtitle lang-en">Web3 without a manual: onboarding that turned complexity into the first purchase.</p>
                  </div>
                  <div className="project-actions">
                    <Link to="/case-mobinft" className="btn btn-expand-project" style={{ textDecoration: 'none', textAlign: 'center' }}>
                      <span className="lang-pt">Ver case completo</span><span className="lang-en">View full case</span>
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseBradescoSenha;
