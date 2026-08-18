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
      navigate('/cases/bradesco-seguros-completo');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <Metadata 
        title={lang === 'en' ? 'Bradesco Seguros — Critical management system | Daniel Carvalho' : 'Bradesco Seguros — Sistema crítico de gestão | Daniel Carvalho'} 
        description={lang === 'en' ? 'A case study on modernizing a critical legacy system through workflow redesign, automation, and reduced manual work.' : 'Case sobre a modernização de um sistema legado crítico, com redesign de fluxos, automações e redução de trabalho manual.'} 
        canonicalPath={lang === 'en' ? '/en/cases/bradesco-seguros' : '/cases/bradesco-seguros'} 
      />

      <main className="case-study-main">
        <article className="case-study-article">
          <header className="case-hero container">
            <Lang id="pt">
              <span className="eyebrow lang-pt">01 / Sistema corporativo · Desktop</span>
              <h1 className="lang-pt">Bradesco Seguros — Modernização de um sistema crítico de gestão</h1>
              <p className="case-summary lang-pt">Redesign de fluxos críticos e automações em um sistema legado essencial para a operação. A modernização reduziu aproximadamente 10 horas semanais de trabalho manual por funcionário, prevenindo erros e ampliando a visibilidade dos processos.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">01 / Enterprise system · Desktop</span>
              <h1 className="lang-en">Bradesco Seguros — Modernizing a critical management system</h1>
              <p className="case-summary lang-en">Redesign of critical workflows and automations in a legacy system essential to operations. The modernization reduced manual work by approximately 10 hours per week per employee, preventing errors and improving process visibility.</p>
            </Lang>

            <div className="case-facts">
              <div className="fact-item">
                <Lang id="pt"><span className="fact-label lang-pt">Papel</span></Lang>
                <Lang id="en"><span className="fact-label lang-en">Role</span></Lang>
                <span className="fact-value">Product Designer</span>
              </div>
              <div className="fact-item">
                <Lang id="pt"><span className="fact-label lang-pt">Período</span></Lang>
                <Lang id="en"><span className="fact-label lang-en">Timeline</span></Lang>
                <span className="fact-value">2025-2026</span>
              </div>
            </div>
          </header>

          <div className="container case-body">
            <div className="case-content">
              <Lang id="pt"><h2 className="lang-pt">O Desafio</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The Challenge</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Novas exigências regulatórias tornaram urgente a modernização de um sistema legado essencial para a operação. A arquitetura rígida e os fluxos complexos aumentavam o esforço manual, dificultavam o acompanhamento dos processos e elevavam o risco de erros.</p></Lang>
              <Lang id="en"><p className="lang-en">New regulatory requirements made it urgent to modernize a legacy system essential to operations. The rigid architecture and complex workflows increased manual effort, hindered process tracking, and elevated the risk of errors.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">A Abordagem</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The Approach</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Conduzi sessões de discovery com usuários finais para compreender rotinas, regras de negócio e pontos de fricção. A partir dessas evidências, mapeei jornadas e redesenhei fluxos e protótipos para prevenir erros, tornar o status dos processos mais visível e reduzir a curva de aprendizado.</p></Lang>
              <Lang id="en"><p className="lang-en">I conducted discovery sessions with end-users to understand routines, business rules, and friction points. Based on this evidence, I mapped journeys and redesigned workflows and prototypes to prevent errors, make process statuses more visible, and reduce the learning curve.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">O Resultado</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The Result</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Os novos fluxos e as automações reduziram em aproximadamente 10 horas semanais o tempo dedicado à entrada manual de dados por funcionário, tornando a operação mais clara para os usuários.</p></Lang>
              <Lang id="en"><p className="lang-en">The new workflows and automations reduced the time spent on manual data entry by approximately 10 hours per week per employee, making operations clearer for users.</p></Lang>
              
              <div className="acesso-protegido">
                <Lang id="pt">
                  <h2 className="lang-pt" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>🔒 Acesso Restrito</h2>
                  <p className="lang-pt">Este projeto contém informações confidenciais de negócio e telas protegidas por acordo de confidencialidade. A visão pública apresenta o contexto, a abordagem e os resultados que podem ser divulgados. Recrutadores podem solicitar acesso ao conteúdo completo pelo <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>.</p>
                </Lang>
                <Lang id="en">
                  <h2 className="lang-en" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>🔒 Restricted Access</h2>
                  <p className="lang-en">This project contains confidential business information and screens protected by a non-disclosure agreement. The public view presents the context, approach, and outcomes that can be shared. Recruiters can request full access via <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" className="text-link">LinkedIn</a>.</p>
                </Lang>

                <form className="acesso-form" onSubmit={handleSubmit}>
                  <input 
                    type="password" 
                    id="case-password" 
                    placeholder={lang === 'pt' ? 'Senha de acesso' : 'Access password'} 
                    required 
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                  />
                  <button type="submit" className="btn btn-primary">
                    <Lang id="pt"><span className="lang-pt">Acessar case</span></Lang>
                    <Lang id="en"><span className="lang-en">Access case</span></Lang>
                  </button>
                </form>
                {error && (
                  <div style={{ marginTop: "16px", color: "var(--color-wine)" }}>
                    <Lang id="pt"><span className="lang-pt">Senha incorreta. Por favor, tente novamente ou me mande uma mensagem para solicitar o acesso.</span></Lang>
                    <Lang id="en"><span className="lang-en">Incorrect password. Please try again or send me a message to request access.</span></Lang>
                  </div>
                )}
              </div>
            </div>
            <aside className="case-rail">
              <div style={{ padding: "24px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border-subtle)" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "16px", fontFamily: "var(--font-title)", color: "var(--color-text-primary)" }}>
                  <Lang id="pt"><span className="lang-pt">O Essencial</span></Lang>
                  <Lang id="en"><span className="lang-en">Key Takeaways</span></Lang>
                </h4>
                <ul style={{ paddingLeft: "20px", fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                  <Lang id="pt">
                    <li className="lang-pt" style={{ marginBottom: "8px" }}><strong>-10h de esforço:</strong> redução no trabalho manual por usuário na semana.</li>
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Gestão de prazos e restrições técnicas severas.</li>
                    <li className="lang-pt">Colaboração direta com usuários e engenharia.</li>
                  </Lang>
                  <Lang id="en">
                    <li className="lang-en" style={{ marginBottom: "8px" }}><strong>-10h effort:</strong> reduction in manual work per user per week.</li>
                    <li className="lang-en" style={{ marginBottom: "8px" }}>Managing deadlines and severe technical constraints.</li>
                    <li className="lang-en">Direct collaboration with users and engineering.</li>
                  </Lang>
                </ul>
              </div>
            </aside>
          </div>
        </article>

        <section className="case-next">
          <div className="container">
            <Lang id="pt"><h3 className="lang-pt">Confira também</h3></Lang>
            <Lang id="en"><h3 className="lang-en">See also</h3></Lang>
            <div style={{ marginTop: "32px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/cases/conecta" className="project-card" style={{ display: "block", textAlign: "left", width: "100%", maxWidth: "400px" }}>
                <div className="project-meta" style={{ marginBottom: "16px" }}>
                  <Lang id="pt"><span className="lang-pt">02 / Aplicativo mobile · Saúde digital</span></Lang>
                  <Lang id="en"><span className="lang-en">02 / Mobile app · Digital health</span></Lang>
                </div>
                <Lang id="pt"><h4 className="lang-pt" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Conecta — Redesign da jornada nutricional</h4></Lang>
                <Lang id="en"><h4 className="lang-en" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Conecta — Redesigning the nutrition tracking journey</h4></Lang>
                <span className="text-link">
                  <Lang id="pt"><span className="lang-pt">Ver projeto &rarr;</span></Lang>
                  <Lang id="en"><span className="lang-en">View project &rarr;</span></Lang>
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseBradescoSenha;
