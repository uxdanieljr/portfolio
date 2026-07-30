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
              <span className="lang-pt">Resumo: Bradesco Seguros — Modernização de sistema crítico de gestão</span>
              <span className="lang-en">Summary: Bradesco Seguros — Modernization of a critical management system</span>
            </h1>
            <p className="case-subtitle">
              <span className="lang-pt">Da arquitetura rígida ao sistema funcional: redesenho de fluxos críticos que reduziu 20 horas semanais de trabalho manual por funcionário, em apenas 10 meses.</span>
              <span className="lang-en">From rigid architecture to functional system: redesign of critical flows that reduced manual work by 20 hours per week per employee, in just 10 months.</span>
            </p>
          </header>

          <div className="case-content">
            <h2 className="lang-pt">🤔 O Desafio</h2>
            <h2 className="lang-en">🤔 The Challenge</h2>
            <p className="lang-pt">O projeto consistia na modernização urgente de um sistema legado crítico para a operação da empresa, impulsionada por novas regulamentações governamentais. O sistema antigo possuía uma arquitetura engessada e fluxos complexos.</p>
            <p className="lang-en">The project consisted of the urgent modernization of a legacy system critical to the company's operations, driven by new government regulations. The old system had a rigid architecture and complex flows.</p>

            <h2 className="lang-pt">💡 A Abordagem</h2>
            <h2 className="lang-en">💡 The Approach</h2>
            <p className="lang-pt">Através de reuniões de discovery com usuários finais, mapeei as jornadas e desenhei novos fluxogramas e protótipos focados em prevenir erros, dar visibilidade ao status dos processos e diminuir drasticamente a curva de aprendizado da ferramenta.</p>
            <p className="lang-en">Through discovery meetings with end-users, I mapped journeys and designed new flowcharts and prototypes focused on preventing errors, providing visibility to process statuses, and drastically reducing the tool's learning curve.</p>

            <h2 className="lang-pt">📊 O Resultado</h2>
            <h2 className="lang-en">📊 The Result</h2>
            <p className="lang-pt">Com processos mais enxutos e fluxos de trabalho automatizados, o projeto reduziu em aproximadamente 20 horas semanais o tempo de entrada manual de dados por funcionário.</p>
            <p className="lang-en">With leaner processes and automated workflows, the project reduced the time spent on manual data entry by approximately 20 hours per week per employee.</p>
            
            <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', opacity: 0.2 }} />

            <h2 className="lang-pt">🔒 Acesso Restrito</h2>
            <h2 className="lang-en">🔒 Restricted Access</h2>
            <p className="lang-pt">Os detalhes aprofundados de discovery, problemas específicos do negócio e as telas finais do projeto são confidenciais. <strong>Para ver o case completo, insira a senha abaixo:</strong> Se você for um recrutador e não possui a senha, sinta-se à vontade para me contatar.</p>
            <p className="lang-en">In-depth discovery details, specific business problems, and the final project screens are confidential. <strong>To view the full case, enter the password below:</strong> If you are a recruiter and do not have the password, feel free to contact me.</p>

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
