import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { motion } from 'framer-motion';
import { useMotionTokens } from '../utils/motion';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseBradesco = () => {
  useScrollReveal();
  const { lang } = useLang();
  const tokens = useMotionTokens();

  return (
    <>
      <Metadata 
        title={lang === 'en' ? 'Bradesco Seguros — Critical management system | Daniel Carvalho' : 'Bradesco Seguros — Sistema crítico de gestão | Daniel Carvalho'} 
        description={lang === 'en' ? 'A case study on modernizing a critical legacy system through workflow redesign, automation, and reduced manual work.' : 'Case sobre a modernização de um sistema legado crítico, com redesign de fluxos, automações e redução de trabalho manual.'} 
        canonicalPath={lang === 'en' ? '/en/cases/bradesco-seguros-completo' : '/cases/bradesco-seguros-completo'} 
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
              <div className="fact-item">
                <Lang id="pt"><span className="fact-label lang-pt">Tempo de leitura</span></Lang>
                <Lang id="en"><span className="fact-label lang-en">Read time</span></Lang>
                <Lang id="pt"><span className="fact-value lang-pt">4 min</span></Lang>
                <Lang id="en"><span className="fact-value lang-en">4 min</span></Lang>
              </div>
            </div>

            <img src="/assets/banner-bradesco-negociacao.svg" alt="Banner Bradesco Seguros" className="case-hero-image" loading="lazy" />
          </header>

          <div className="container case-body">
            <div className="case-content">
              <Lang id="pt"><h2 className="lang-pt">O desafio</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The challenge</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Mudanças regulatórias exigiram a revisão de um sistema legado central para a operação. Sua estrutura rígida tornava os fluxos difíceis de acompanhar e mantinha parte do trabalho manual, o que aumentava o risco de erro.</p></Lang>
              <Lang id="en"><p className="lang-en">Regulatory changes required the team to review a legacy system central to the operation. Its rigid structure made workflows difficult to follow and left some steps manual, increasing the risk of errors.</p></Lang>

              <div className="evidencia-decisao">
                <Lang id="pt">
                  <h4>Restrição de Compliance</h4>
                  <p>Parte deste projeto está protegida por um acordo de confidencialidade. A versão pública mostra apenas o contexto, o processo e os resultados que posso divulgar. Posso compartilhar mais informações em uma conversa, dentro dos limites desse acordo.</p>
                </Lang>
                <Lang id="en">
                  <h4>Compliance Restriction</h4>
                  <p>Part of this project is protected by a confidentiality agreement. The public version only shows the context, process, and outcomes I can disclose. I can share more information in a conversation, within the limits of that agreement.</p>
                </Lang>
              </div>

              <Lang id="pt"><h2 className="lang-pt">A abordagem</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Approach</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Conversei com usuários finais sobre a rotina, as regras de negócio e os pontos em que o processo travava. Com esse material, mapeei a jornada e redesenhei os fluxos e protótipos. As principais decisões buscaram prevenir erros e mostrar o andamento de cada processo na própria interface.</p></Lang>
              <Lang id="en"><p className="lang-en">I spoke with end users about their routines, business rules, and the points where the process stalled. I used those findings to map the journey and redesign the workflows and prototypes. The main decisions focused on preventing errors and showing the status of each process in the interface.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">A solução</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Solution</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Os protótipos e wireframes foram sendo construídos de forma dinâmica juntamente ao discovery, ideação, testes de usabilidade e validação. Dessa forma foi possível agilizar o processo de aprendizagem e clarificar os fluxos dos usuários, possibilitando que os Devs tivessem melhor dimensão da complexidade do que seria desenvolvido e dando mais assertividade aos prazos.</p></Lang>
              <Lang id="en"><p className="lang-en">Prototypes and wireframes were built dynamically alongside discovery, ideation, usability testing, and validation. In this way, it was possible to streamline the learning process and clarify user flows, allowing Devs to have a better dimension of the complexity of what would be developed and giving more assertiveness to deadlines.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="/assets/case-bradesco-negociacao/img_fluxos_brds.png" alt="Fluxos prototipados do sistema Bradesco Seguros" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
                <figcaption style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                  <Lang id="pt"><span className="lang-pt">Parte dos fluxos prototipados</span></Lang>
                  <Lang id="en"><span className="lang-en">Part of the prototyped flows</span></Lang>
                </figcaption>
              </figure>

              <Lang id="pt"><p className="lang-pt">Os protótipos foram estruturados em fluxos que representavam as interações dos cliques, com post-its detalhando regras de negócio e especificações técnicas. No total, foram desenvolvidos mais de 20 fluxos para 5 funcionalidades diferentes do software.</p></Lang>
              <Lang id="en"><p className="lang-en">The prototypes were structured in flows that represented click interactions, with post-its detailing business rules and technical specifications. In total, more than 20 flows were developed for 5 different software functionalities.</p></Lang>
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

          <div className="case-resultados">
            <div className="container">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Lang id="pt"><h2 className="lang-pt">Resultados</h2></Lang>
                <Lang id="en"><h2 className="lang-en">Results</h2></Lang>
                <Lang id="pt"><p className="lang-pt">A solução incorpora automações em etapas antes manuais e mostra o status de cada processo na interface. Com processos mais enxutos, o projeto reduziu em aproximadamente 10 horas semanais o tempo de trabalho manual por funcionário.</p></Lang>
                <Lang id="en"><p className="lang-en">The solution adds automation to steps that were previously manual and shows the status of each process in the interface. With leaner processes, the project reduced manual work by approximately 10 hours per week per employee.</p></Lang>
              </div>
            </div>
          </div>
        </article>

        <motion.section className="case-next" variants={tokens.fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
          <div className="container">
            <Lang id="pt"><h3 className="lang-pt">Próximo projeto</h3></Lang>
            <Lang id="en"><h3 className="lang-en">Next project</h3></Lang>
            <div style={{ marginTop: "32px", display: "inline-block" }}>
              <Link to="/cases/conecta" className="project-card" style={{ display: "block", textAlign: "left", maxWidth: "400px" }}>
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
        </motion.section>
      </main>
    </>
  );
};

export default CaseBradesco;
