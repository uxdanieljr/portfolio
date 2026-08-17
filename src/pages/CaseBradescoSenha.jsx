import Metadata from '../components/Metadata';
import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import Lang from '../components/Lang';

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
      <Metadata title={lang === 'en' ? 'Bradesco Seguros — Critical management system | Daniel Carvalho' : 'Bradesco Seguros — Sistema crítico de gestão | Daniel Carvalho'} description={lang === 'en' ? 'A case study on modernizing a critical legacy system through workflow redesign, automation, and reduced manual work.' : 'Case sobre a modernização de um sistema legado crítico, com redesign de fluxos, automações e redução de trabalho manual.'} canonicalPath={lang === 'en' ? '/en/cases/bradesco-seguros' : '/cases/bradesco-seguros'} />

      <main className="case-study-main">
        <article className="case-study-article">
          <header className="case-header">
            <h1 className="case-title" style={{ marginBottom: '1rem' }}>
              <Lang id="pt">
<span className="lang-pt">Bradesco Seguros — Modernização de um sistema crítico de gestão</span>
</Lang>
              <Lang id="en">
<span className="lang-en">Bradesco Seguros — Modernizing a critical management system</span>
</Lang>
            </h1>
            <p className="case-subtitle">
              <Lang id="pt">
<span className="lang-pt">Redesign de fluxos críticos e automações em um sistema legado essencial para a operação. A modernização reduziu aproximadamente 10 horas semanais de trabalho manual por funcionário, prevenindo erros e ampliando a visibilidade dos processos.</span>
</Lang>
              <Lang id="en">
<span className="lang-en">Redesign of critical workflows and automations in a legacy system essential to operations. The modernization reduced manual work by approximately 10 hours per week per employee, preventing errors and improving process visibility.</span>
</Lang>
            </p>
          </header>

          <div className="case-content">
            <Lang id="pt">
<h2 className="lang-pt">🤔 O Desafio</h2>
</Lang>
            <Lang id="en">
<h2 className="lang-en">🤔 The Challenge</h2>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Novas exigências regulatórias tornaram urgente a modernização de um sistema legado essencial para a operação. A arquitetura rígida e os fluxos complexos aumentavam o esforço manual, dificultavam o acompanhamento dos processos e elevavam o risco de erros.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">New regulatory requirements made it urgent to modernize a legacy system essential to operations. The rigid architecture and complex workflows increased manual effort, hindered process tracking, and elevated the risk of errors.</p>
</Lang>

            <Lang id="pt">
<h2 className="lang-pt">💡 A Abordagem</h2>
</Lang>
            <Lang id="en">
<h2 className="lang-en">💡 The Approach</h2>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Conduzi sessões de discovery com usuários finais para compreender rotinas, regras de negócio e pontos de fricção. A partir dessas evidências, mapeei jornadas e redesenhei fluxos e protótipos para prevenir erros, tornar o status dos processos mais visível e reduzir a curva de aprendizado.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I conducted discovery sessions with end-users to understand routines, business rules, and friction points. Based on this evidence, I mapped journeys and redesigned workflows and prototypes to prevent errors, make process statuses more visible, and reduce the learning curve.</p>
</Lang>

            <Lang id="pt">
<h2 className="lang-pt">📊 O Resultado</h2>
</Lang>
            <Lang id="en">
<h2 className="lang-en">📊 The Result</h2>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Os novos fluxos e as automações reduziram em aproximadamente 10 horas semanais o tempo dedicado à entrada manual de dados por funcionário, tornando a operação mais clara para os usuários.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">The new workflows and automations reduced the time spent on manual data entry by approximately 10 hours per week per employee, making operations clearer for users.</p>
</Lang>
            
            <hr style={{ margin: '3rem 0', borderColor: 'var(--border-color)', opacity: 0.2 }} />

            <Lang id="pt">
<h2 className="lang-pt">🔒 Acesso Restrito</h2>
</Lang>
            <Lang id="en">
<h2 className="lang-en">🔒 Restricted Access</h2>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Este projeto contém informações confidenciais de negócio e telas protegidas por acordo de confidencialidade. A visão pública apresenta o contexto, a abordagem e os resultados que podem ser divulgados. Recrutadores podem solicitar acesso ao conteúdo completo pelo <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a>.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">This project contains confidential business information and screens protected by a non-disclosure agreement. The public view presents the context, approach, and outcomes that can be shared. Recruiters can request full access via <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a>.</p>
</Lang>

            <form className="password-form" id="password-form" onSubmit={handleSubmit}>
              <label htmlFor="case-password">
                <Lang id="pt">
<span className="lang-pt">Senha de acesso:</span>
</Lang>
                <Lang id="en">
<span className="lang-en">Access password:</span>
</Lang>
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
                <Lang id="pt">
<span className="lang-pt">Acessar case</span>
</Lang>
                <Lang id="en">
<span className="lang-en">Access case</span>
</Lang>
              </button>
              
              {error && (
                <>
                  <Lang id="pt">
<span className="error-msg lang-pt" style={{ display: 'block' }}>Senha incorreta. Por favor, tente novamente ou me mande uma mensagem para solicitar o acesso.</span>
</Lang>
                  <Lang id="en">
<span className="error-msg lang-en" style={{ display: 'block' }}>Incorrect password. Please try again or send me a message to request access.</span>
</Lang>
                </>
              )}
            </form>
          </div>
        </article>

        <section id="projetos" style={{ paddingTop: '4rem', borderBottom: 'none' }}>
          <div className="container">
            <div className="case-content" style={{ marginBottom: '3rem' }}>
                <Lang id="pt">
<h2 className="lang-pt">Não tem a senha? Tudo bem!</h2>
</Lang>
                <Lang id="en">
<h2 className="lang-en">Don't have the password? That's fine!</h2>
</Lang>
                
                <Lang id="pt">
<p className="lang-pt">Enquanto você não recebe a liberação, que tal conferir meus outros projetos que já estão disponíveis de forma aberta?</p>
</Lang>
                <Lang id="en">
<p className="lang-en">While you wait for access, how about checking out my other projects that are already openly available?</p>
</Lang>
            </div>
            
            <div className="projects-grid">
              {/* Conecta */}
              <article className="project-card" id="project-002">
                <div className="project-main-info">
                  <header className="project-header">
                    <div className="project-header-left">
                      <span className="project-meta-number">(02)</span>
                      <Lang id="pt">
<span className="project-meta-tag lang-pt">Aplicativo mobile · Saúde digital</span>
</Lang>
                      <Lang id="en">
<span className="project-meta-tag lang-en">Mobile app · Digital health</span>
</Lang>
                    </div>
                    <span className="project-meta-year">2024-2025</span>
                  </header>
                  <div className="project-image-wrapper">
                    <img src="/assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
                  </div>
                  <div className="project-body-summary">
                    <Lang id="pt">
<h3 className="lang-pt">Conecta — Redesign da jornada de acompanhamento nutricional</h3>
</Lang>
                    <Lang id="en">
<h3 className="lang-en">Conecta — Redesigning the nutrition tracking journey</h3>
</Lang>
                    
                    <Lang id="pt">
<p className="project-subtitle lang-pt">Proposta de redesign do primeiro acesso e da navegação para tornar as tarefas do paciente mais compreensíveis e facilitar o acompanhamento pelo nutricionista.</p>
</Lang>
                    <Lang id="en">
<p className="project-subtitle lang-en">A redesign concept for onboarding and navigation, aimed at making patient tasks easier to understand and progress easier for nutritionists to track.</p>
</Lang>
                  </div>
                  <div className="project-actions">
                    <Link to="/case-conecta" className="btn btn-expand-project" style={{ textDecoration: 'none', textAlign: 'center' }}>
                      <Lang id="pt">
<span className="lang-pt">Ver case</span>
</Lang><Lang id="en">
<span className="lang-en">View case</span>
</Lang>
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
                      <Lang id="pt">
<span className="project-meta-tag lang-pt">Aplicativo mobile · Projeto de UX</span>
</Lang>
                      <Lang id="en">
<span className="project-meta-tag lang-en">Mobile app · UX project</span>
</Lang>
                    </div>
                    <span className="project-meta-year">2023</span>
                  </header>
                  <div className="project-image-wrapper">
                    <img src="/assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
                  </div>
                  <div className="project-body-summary">
                    <Lang id="pt">
<h3 className="lang-pt">Mobinft — Simplificando a compra de chaves digitais em Web3</h3>
</Lang>
                    <Lang id="en">
<h3 className="lang-en">Mobinft — Simplifying the purchase of digital keys in Web3</h3>
</Lang>
                    
                    <Lang id="pt">
<p className="project-subtitle lang-pt">Pesquisa e prototipação de uma jornada de compra para pessoas sem experiência prévia com NFTs, refinada em duas rodadas de testes de usabilidade.</p>
</Lang>
                    <Lang id="en">
<p className="project-subtitle lang-en">Research and prototyping for a purchasing journey designed for people with no prior NFT experience, refined through two rounds of usability testing.</p>
</Lang>
                  </div>
                  <div className="project-actions">
                    <Link to="/case-mobinft" className="btn btn-expand-project" style={{ textDecoration: 'none', textAlign: 'center' }}>
                      <Lang id="pt">
<span className="lang-pt">Ver case</span>
</Lang><Lang id="en">
<span className="lang-en">View case</span>
</Lang>
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
