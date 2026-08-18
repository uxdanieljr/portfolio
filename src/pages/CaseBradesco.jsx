import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseBradesco = () => {
  useScrollReveal();
  const { lang } = useLang();

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

            <img src="assets/banner-bradesco-negociacao.svg" alt="Banner Bradesco Seguros" className="case-hero-image" loading="lazy" />
          </header>

          <div className="container case-body">
            <div className="case-content">
              <Lang id="pt"><h2 className="lang-pt">O problema</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The problem</h2></Lang>
              <Lang id="pt"><p className="lang-pt">O governo brasileiro anunciou que o CNPJ passaria a ser alfanumérico, e não mais apenas numérico. Essa mudança impactou diretamente o sistema vigente, construído em Cobol, uma tecnologia arcaica cuja adaptação exigiria um custo muito alto.</p></Lang>
              <Lang id="en"><p className="lang-en">The Brazilian government announced that the CNPJ (National Registry of Legal Entities) would become alphanumeric, rather than just numeric. This change directly impacted the current system, built in Cobol, an archaic technology whose adaptation would require a very high cost.</p></Lang>
              <Lang id="pt"><p className="lang-pt">Paralelamente, já estava em desenvolvimento um novo sistema para a Gestão de Prestadores de Saúde (GPRS). Nesse sistema também foram identificadas inúmeras inconsistências, tanto na estrutura do banco de dados quanto no fluxo e na navegação do sistema antigo.</p></Lang>
              <Lang id="en"><p className="lang-en">At the same time, a new system for the Management of Healthcare Providers (GPRS) was already under development. In this system, numerous inconsistencies were also identified, both in the database structure and in the flow and navigation of the old system.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">O cenário atual</h2></Lang>
              <Lang id="en"><h2 className="lang-en">The current scenario</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Entrei no projeto um mês após seu início, já com o time de desenvolvedores e QAs em atividade. Junto ao PO, conduzi o entendimento global de ambos os sistemas e priorizei as demandas mais urgentes do GPRS, para manter o time de desenvolvimento em ritmo de trabalho.</p></Lang>
              <Lang id="en"><p className="lang-en">I joined the project one month after it started, with the team of developers and QAs already active. Together with the PO, I conducted a global understanding of both systems and prioritized the most urgent demands of the GPRS to keep the development team working at a steady pace.</p></Lang>
              <Lang id="pt"><p className="lang-pt">O cenário era o seguinte: um sistema arcaico em funcionamento, responsável por 46% do faturamento da empresa; um sistema em criação com diversas inconsistências, construído em uma plataforma no-code/low-code, o que tornava a arquitetura mais rígida; e um prazo desafiador de apenas 10 meses. Como equipe, seguimos a metodologia Scrum para acelerar o aprendizado e tornar as decisões mais eficientes.</p></Lang>
              <Lang id="en"><p className="lang-en">The scenario was as follows: an archaic running system, responsible for 46% of the company's revenue; a new system being created with several inconsistencies, built on a no-code/low-code platform, which made the architecture more rigid; and a challenging deadline of only 10 months. As a team, we followed the Scrum methodology to accelerate learning and make decisions more efficient.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Objetivo de negócio</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Business objective</h2></Lang>
              <Lang id="pt"><p className="lang-pt">O objetivo de negócio era direto: o sistema precisava estar pronto até o fim do prazo, sob risco de impactar a operação da empresa. Além disso, era necessário entregar uma interface moderna e de fácil usabilidade.</p></Lang>
              <Lang id="en"><p className="lang-en">The business objective was straightforward: the system needed to be ready by the deadline, under the risk of impacting the company's operation. Furthermore, it was necessary to deliver a modern and easy-to-use interface.</p></Lang>
              <Lang id="pt"><p className="lang-pt">Meu objetivo foi construir interfaces funcionais e com boa usabilidade para o usuário final, mesmo com a rigidez da arquitetura e o prazo curto.</p></Lang>
              <Lang id="en"><p className="lang-en">My objective was to build functional interfaces with good usability for the end-user, despite the rigidity of the architecture and the short deadline.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Entendendo as necessidades dos usuários</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Understanding user needs</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Conduzi diversas reuniões com os usuários finais, o que permitiu identificar 4 personas distintas. Para cada uma, foi criado um fluxograma adaptado à etapa da jornada em que o sistema se inseria.</p></Lang>
              <Lang id="en"><p className="lang-en">I conducted several meetings with the end-users, which allowed me to identify 4 distinct personas. For each one, a flowchart adapted to the stage of the journey in which the system was inserted was created.</p></Lang>
              
              <div className="evidencia-decisao">
                <Lang id="pt">
                  <h4>Restrição de Compliance</h4>
                  <p>Nenhum dos artefatos originais pode ser compartilhado abertamente devido a políticas de segurança da informação da companhia.</p>
                </Lang>
                <Lang id="en">
                  <h4>Compliance Restriction</h4>
                  <p>None of the original artifacts can be openly shared due to the company's information security policies.</p>
                </Lang>
              </div>

              <Lang id="pt"><p className="lang-pt">As principais dores identificadas foram:</p></Lang>
              <Lang id="en"><p className="lang-en">The main pain points identified were:</p></Lang>
              <ul style={{ marginBottom: "32px", paddingLeft: "20px" }}>
                <li><Lang id="pt"><span className="lang-pt"><strong>Rigidez da arquitetura:</strong> os usuários eram forçados a recomeçar um fluxo inteiro caso precisassem voltar a uma etapa anterior.</span></Lang><Lang id="en"><span className="lang-en"><strong>Rigid architecture:</strong> users were forced to restart an entire flow if they needed to go back to a previous step.</span></Lang></li>
                <li><Lang id="pt"><span className="lang-pt"><strong>Falta de visibilidade:</strong> os usuários não sabiam em que etapa estavam, para onde estavam indo, nem conseguiam revisar o que já haviam preenchido.</span></Lang><Lang id="en"><span className="lang-en"><strong>Lack of visibility:</strong> users did not know what step they were on, where they were going, nor could they review what they had already filled out.</span></Lang></li>
                <li><Lang id="pt"><span className="lang-pt"><strong>Curva de aprendizado longa:</strong> a complexidade do sistema exigia treinamento formal para novos usuários.</span></Lang><Lang id="en"><span className="lang-en"><strong>Long learning curve:</strong> the complexity of the system required formal training for new users.</span></Lang></li>
                <li><Lang id="pt"><span className="lang-pt"><strong>Ausência de prevenção de erros:</strong> não havia mecanismos de confirmação para ações críticas, como deletar um procedimento ou cancelar um caso.</span></Lang><Lang id="en"><span className="lang-en"><strong>Lack of error prevention:</strong> there were no confirmation mechanisms for critical actions, such as deleting a procedure or canceling a case.</span></Lang></li>
              </ul>

              <Lang id="pt"><h2 className="lang-pt">Ideação e priorização</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Ideation and prioritization</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Após 2 meses de projeto, decidimos mudar a estratégia: focar primeiro no fim da operação, contemplando o carregamento e a manutenção dos dados já cadastrados no sistema, e deixar a etapa de negociação para uma segunda fase.</p></Lang>
              <Lang id="en"><p className="lang-en">After 2 months of the project, we decided to change the strategy: focus first on the end of the operation, contemplating the loading and maintenance of the data already registered in the system, and leave the negotiation stage for a second phase.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">UI Design e Prototipação</h2></Lang>
              <Lang id="en"><h2 className="lang-en">UI Design and Prototyping</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Os protótipos e wireframes foram sendo construídos de forma dinâmica juntamente ao discovery, ideação, testes de usabilidade e validação. Dessa forma foi possível agilizar o processo de aprendizagem e clarificar os fluxos dos usuários, possibilitando que os Devs tivessem melhor dimensão da complexidade do que seria desenvolvido e dando mais assertividade aos prazos.</p></Lang>
              <Lang id="en"><p className="lang-en">Prototypes and wireframes were built dynamically alongside discovery, ideation, usability testing, and validation. In this way, it was possible to streamline the learning process and clarify user flows, allowing Devs to have a better dimension of the complexity of what would be developed and giving more assertiveness to deadlines.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="assets/case-bradesco-negociacao/img_fluxos_brds.png" alt="Fluxos prototipados do sistema Bradesco Seguros" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
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
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Tradução de regras complexas em fluxos claros.</li>
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Gestão de prazos e restrições técnicas severas.</li>
                    <li className="lang-pt">Colaboração direta com usuários e engenharia.</li>
                  </Lang>
                  <Lang id="en">
                    <li className="lang-en" style={{ marginBottom: "8px" }}>Translating complex rules into clear flows.</li>
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
                <ul>
                  <li>
                    <Lang id="pt"><span className="lang-pt"><strong>Menos trabalho manual:</strong> os novos fluxos e automações reduziram em aproximadamente 10 horas semanais o tempo dedicado à entrada manual de dados por funcionário.</span></Lang>
                    <Lang id="en"><span className="lang-en"><strong>Less manual work:</strong> the new workflows and automations reduced the time spent on manual data entry by approximately 10 hours per week per employee.</span></Lang>
                  </li>
                  <li>
                    <Lang id="pt"><span className="lang-pt"><strong>Operação mais clara:</strong> melhoria da visibilidade do processo e prevenção de erros nas ações críticas do sistema.</span></Lang>
                    <Lang id="en"><span className="lang-en"><strong>Clearer operations:</strong> improved process visibility and prevented errors on critical system actions.</span></Lang>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        <section className="case-next">
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
        </section>
      </main>
    </>
  );
};

export default CaseBradesco;
