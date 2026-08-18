import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseConecta = () => {
  useScrollReveal();
  const { lang } = useLang();

  return (
    <>
      <Metadata 
        title={lang === 'en' ? 'Conecta — Nutrition tracking redesign | Daniel Carvalho' : 'Conecta — Redesign da jornada nutricional | Daniel Carvalho'} 
        description={lang === 'en' ? 'A redesign concept for onboarding and navigation in a nutrition tracking app.' : 'Proposta de redesign do onboarding e da navegação de um aplicativo de acompanhamento nutricional.'} 
        canonicalPath={lang === 'en' ? '/en/cases/conecta' : '/cases/conecta'} 
      />

      <main className="case-study-main">
        <article className="case-study-article">
          
          <header className="case-hero container">
            <Lang id="pt">
              <span className="eyebrow lang-pt">02 / Aplicativo mobile · Saúde digital</span>
              <h1 className="lang-pt">Conecta — Redesign da jornada de acompanhamento nutricional</h1>
              <p className="case-summary lang-pt">Uma proposta de redesign para tornar o primeiro acesso mais claro, ajudar pacientes a compreender suas tarefas e facilitar o acompanhamento do progresso por nutricionistas.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">02 / Mobile app · Digital health</span>
              <h1 className="lang-en">Conecta — Redesigning the nutrition tracking journey</h1>
              <p className="case-summary lang-en">A redesign concept to make onboarding clearer, help patients understand their tasks, and make it easier for nutritionists to track progress.</p>
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
                <span className="fact-value">2024-2025</span>
              </div>
              <div className="fact-item">
                <Lang id="pt"><span className="fact-label lang-pt">Tempo de leitura</span></Lang>
                <Lang id="en"><span className="fact-label lang-en">Read time</span></Lang>
                <Lang id="pt"><span className="fact-value lang-pt">3 min</span></Lang>
                <Lang id="en"><span className="fact-value lang-en">3 min</span></Lang>
              </div>
            </div>

            <img src="/assets/Thumbnail-conecta.svg" alt="Conecta App" className="case-hero-image" loading="lazy" />
          </header>

          <div className="container case-body">
            <div className="case-content">
              <Lang id="pt"><h2 className="lang-pt">Contexto</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Context</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Aplicativos de acompanhamento nutricional ampliam o contato entre consultas, mas dependem de orientação clara para que pacientes compreendam tarefas, registros e próximos passos. No Conecta, o primeiro acesso não explicava adequadamente essas possibilidades.</p></Lang>
              <Lang id="en"><p className="lang-en">Nutrition tracking apps extend contact between consultations but rely on clear guidance so patients understand tasks, logs, and next steps. In Conecta, the initial access did not adequately explain these possibilities.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">O problema</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The problem</h2></Lang>
              <Lang id="pt"><p className="lang-pt">A análise inicial indicou uma falha de comunicação no onboarding e na arquitetura de informação. Sem compreender o que fazer no aplicativo, pacientes poderiam deixar de executar tarefas propostas pelo nutricionista e abandonar o acompanhamento digital.</p></Lang>
              <Lang id="en"><p className="lang-en">The initial analysis indicated a communication gap in onboarding and information architecture. Without understanding what to do in the app, patients could fail to execute tasks proposed by the nutritionist and abandon digital tracking.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="/assets/case-conecta/img-timeline-conecta.png" alt="Timeline do fluxo atual do Conecta" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
                <figcaption style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                  <Lang id="pt"><span className="lang-pt">Timeline do Projeto</span></Lang>
                  <Lang id="en"><span className="lang-en">Project Timeline</span></Lang>
                </figcaption>
              </figure>
              
              <Lang id="pt"><h2 className="lang-pt">Abordagem e Design</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Approach and Design</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Analisei referências de produtos de saúde e nutrição, reorganizei a arquitetura de informação e construí wireframes para revisar o fluxo de navegação. Depois, desenvolvi a interface de alta fidelidade e os padrões visuais necessários para manter consistência entre as telas.</p></Lang>
              <Lang id="en"><p className="lang-en">I analyzed references from health and nutrition products, reorganized the information architecture, and built wireframes to review the navigation flow. Then, I developed the high-fidelity interface and visual patterns needed to maintain consistency across screens.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="/assets/case-conecta/img-conecta-prints-atual.png" alt="Telas de alta fidelidade do aplicativo Conecta" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
                <figcaption style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                  <Lang id="pt"><span className="lang-pt">Telas de alta fidelidade desenvolvidas</span></Lang>
                  <Lang id="en"><span className="lang-en">High-fidelity screens developed</span></Lang>
                </figcaption>
              </figure>
            </div>

            <aside className="case-rail">
              <div style={{ padding: "24px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border-subtle)" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "16px", fontFamily: "var(--font-title)", color: "var(--color-text-primary)" }}>
                  <Lang id="pt"><span className="lang-pt">O Essencial</span></Lang>
                  <Lang id="en"><span className="lang-en">Key Takeaways</span></Lang>
                </h4>
                <ul style={{ paddingLeft: "20px", fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                  <Lang id="pt">
                    <li className="lang-pt" style={{ marginBottom: "8px" }}><strong>+50% de tempo de uso:</strong> aumento na retenção do usuário.</li>
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Redesign voltado à redução do abandono.</li>
                    <li className="lang-pt">Criação de novos padrões visuais consistentes.</li>
                  </Lang>
                  <Lang id="en">
                    <li className="lang-en" style={{ marginBottom: "8px" }}><strong>+50% usage time:</strong> increased user retention.</li>
                    <li className="lang-en" style={{ marginBottom: "8px" }}>Redesign focused on reducing drop-off.</li>
                    <li className="lang-en">Creation of new consistent visual patterns.</li>
                  </Lang>
                </ul>
              </div>
            </aside>
          </div>

          <div className="case-resultados">
            <div className="container">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Lang id="pt"><h2 className="lang-pt">Resultados e impacto</h2></Lang>
                <Lang id="en"><h2 className="lang-en">Results and impact</h2></Lang>
                <Lang id="pt">
                  <p className="lang-pt" style={{ fontSize: "1.125rem" }}>A proposta resultou em uma jornada de primeiro acesso mais orientada e em uma organização mais clara das tarefas e do progresso.</p>
                  <p className="lang-pt" style={{ fontSize: "1.125rem", marginTop: "16px" }}>Após medição interna, os usuários começaram a passar em média <strong>50% a mais de tempo usando o app</strong>. Isso possibilitou que os nutricionistas acompanhassem o progresso dos pacientes de forma mais eficiente, resultando em uma maior adesão ao tratamento e melhores resultados clínicos.</p>
                </Lang>
                <Lang id="en">
                  <p className="lang-en" style={{ fontSize: "1.125rem" }}>The proposal resulted in a more guided first-access journey and a clearer organization of tasks and progress.</p>
                  <p className="lang-en" style={{ fontSize: "1.125rem", marginTop: "16px" }}>After internal measurement, users began spending an average of <strong>50% more time using the app</strong>. This allowed nutritionists to track patients' progress more efficiently, resulting in greater treatment adherence and better clinical outcomes.</p>
                </Lang>
              </div>
            </div>
          </div>
        </article>

        <section className="case-next">
          <div className="container">
            <Lang id="pt"><h3 className="lang-pt">Confira também</h3></Lang>
            <Lang id="en"><h3 className="lang-en">See also</h3></Lang>
            <div style={{ marginTop: "32px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/cases/bradesco-seguros-completo" className="project-card" style={{ display: "block", textAlign: "left", width: "100%", maxWidth: "400px" }}>
                <div className="project-meta" style={{ marginBottom: "16px" }}>
                  <Lang id="pt"><span className="lang-pt">01 / Sistema corporativo · Desktop</span></Lang>
                  <Lang id="en"><span className="lang-en">01 / Enterprise system · Desktop</span></Lang>
                </div>
                <Lang id="pt"><h4 className="lang-pt" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Bradesco Seguros — Modernização de sistema crítico</h4></Lang>
                <Lang id="en"><h4 className="lang-en" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Bradesco Seguros — Modernizing a critical system</h4></Lang>
                <span className="text-link">
                  <Lang id="pt"><span className="lang-pt">Ver projeto &rarr;</span></Lang>
                  <Lang id="en"><span className="lang-en">View project &rarr;</span></Lang>
                </span>
              </Link>
              <Link to="/cases/mobinft" className="project-card" style={{ display: "block", textAlign: "left", width: "100%", maxWidth: "400px" }}>
                <div className="project-meta" style={{ marginBottom: "16px" }}>
                  <Lang id="pt"><span className="lang-pt">03 / Aplicativo mobile · UX project</span></Lang>
                  <Lang id="en"><span className="lang-en">03 / Mobile app · UX project</span></Lang>
                </div>
                <Lang id="pt"><h4 className="lang-pt" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Mobinft — Compra de chaves Web3</h4></Lang>
                <Lang id="en"><h4 className="lang-en" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Mobinft — Buying Web3 keys</h4></Lang>
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

export default CaseConecta;
