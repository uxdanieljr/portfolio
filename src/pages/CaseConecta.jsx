import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { motion } from 'framer-motion';
import { useMotionTokens } from '../utils/motion';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseConecta = () => {
  useScrollReveal();
  const { lang } = useLang();
  const tokens = useMotionTokens();

  return (
    <>
      <Metadata title={lang === 'en' ? 'Conecta: nutrition care redesign | Daniel Carvalho' : 'Conecta: redesign da jornada de acompanhamento nutricional | Daniel Carvalho'} description={lang === 'en' ? 'A redesign concept for onboarding and navigation in a nutrition care app.' : 'Proposta de redesign do onboarding e da navegação de um aplicativo de acompanhamento nutricional.'} canonicalPath={lang === 'en' ? '/en/cases/conecta' : '/cases/conecta'} />

      <main className="case-study-main">
        <article className="case-study-article">
          
          <header className="case-hero container">
            <Lang id="pt">
              <span className="eyebrow lang-pt">02 / Aplicativo mobile · Saúde digital</span>
              <h1 className="lang-pt">Conecta — Redesign da jornada de acompanhamento nutricional</h1>
              <p className="case-summary lang-pt">Revisei o onboarding e a navegação de um aplicativo de acompanhamento nutricional. A proposta procura explicar melhor as tarefas do paciente e organizar as informações de progresso usadas pelo nutricionista.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">02 / Mobile app · Digital health</span>
              <h1 className="lang-en">Conecta — Redesigning the nutrition tracking journey</h1>
              <p className="case-summary lang-en">I reviewed the onboarding and navigation of a nutrition care app. The concept aims to explain patient tasks more clearly and organize the progress information used by nutritionists.</p>
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
              <Lang id="pt"><p className="lang-pt">Entre as consultas, o aplicativo reúne tarefas, registros e informações sobre o progresso. No Conecta, o primeiro acesso não explicava bem o que o paciente poderia fazer nem por onde começar.</p></Lang>
              <Lang id="en"><p className="lang-en">Between appointments, the app brings together tasks, records, and progress information. Conecta’s onboarding did not clearly explain what patients could do or where they should begin.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">O problema</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The problem</h2></Lang>
              <Lang id="pt"><p className="lang-pt">A análise do onboarding e da arquitetura da informação mostrou que os pacientes podiam começar a usar o aplicativo sem entender suas tarefas nem o próximo passo.</p></Lang>
              <Lang id="en"><p className="lang-en">The onboarding and information architecture review showed that patients could start using the app without understanding their tasks or the next step.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="/assets/case-conecta/img-timeline-conecta.png" alt="Timeline do fluxo atual do Conecta" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
                <figcaption style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                  <Lang id="pt"><span className="lang-pt">Timeline do Projeto</span></Lang>
                  <Lang id="en"><span className="lang-en">Project Timeline</span></Lang>
                </figcaption>
              </figure>
              
              <Lang id="pt"><h2 className="lang-pt">A abordagem</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Approach</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Analisei padrões recurntes em outros produtos de saúde e nutrição. Depois, reorganizei a arquitetura da informação e usei wireframes para revisar a navegação. Na interface de alta fidelidade, apliquei o novo fluxo e defini padrões visuais para manter consistência entre as telas.</p></Lang>
              <Lang id="en"><p className="lang-en">I reviewed recurring patterns in other health and nutrition products. I then reorganized the information architecture and used wireframes to review the navigation. In the high-fidelity interface, I applied the new flow and defined visual patterns to keep the screens consistent.</p></Lang>

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
                  <p className="lang-pt" style={{ fontSize: "1.125rem" }}>A proposta explica o primeiro acesso passo a passo e reorganiza as tarefas e informações de progresso. Após medição interna, os usuários passaram em média <strong>50% a mais de tempo usando o app</strong>. Isso possibilitou que os nutricionistas acompanhassem o progresso de forma mais eficiente, o que resultou em maior adesão ao tratamento e melhores resultados para os pacientes.</p>
                </Lang>
                <Lang id="en">
                  <p className="lang-en" style={{ fontSize: "1.125rem" }}>The concept explains the first steps and reorganizes tasks and progress information. After internal measurement, users spent an average of <strong>50% more time using the app</strong>. This enabled nutritionists to track patient progress more efficiently, resulting in higher treatment adherence and better outcomes for patients.</p>
                </Lang>
              </div>
            </div>
          </div>
        </article>

        <motion.section className="case-next" variants={tokens.fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
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
        </motion.section>
      </main>
    </>
  );
};

export default CaseConecta;
