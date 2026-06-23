import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';

const CaseBradesco = () => {
  useScrollReveal();
  const { lang } = useLang();

  return (
    <>


  <main className="case-study-main">
    <article className="case-study-article">
      <header className="case-header">
        <h1 className="case-title">
          <span className="lang-pt">Bradesco Seguros — Modernização de sistema crítico de gestão</span>
          <span className="lang-en">Bradesco Seguros — Modernization of a critical management system</span>
        </h1>
        <p className="case-subtitle">
          <span className="lang-pt">Da arquitetura rígida ao sistema funcional: redesenho de fluxos críticos que reduziu 20 horas semanais de trabalho manual por funcionário, em apenas 10 meses.</span>
          <span className="lang-en">From rigid architecture to functional system: redesign of critical flows that reduced manual work by 20 hours per week per employee, in just 10 months.</span>
        </p>
        
        <div className="case-author">
          <div className="author-avatar">
            <div style={{"width":"48px","height":"48px","borderRadius":"50%","backgroundColor":"var(--accent-orange)","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontWeight":"bold","fontSize":"1.2rem"}}>DJ</div>
          </div>
          <div className="author-info">
            <span className="author-name">Daniel Carvalho</span>
            <span className="case-date">Product Designer &bull; <span className="lang-pt">4 min de leitura</span><span className="lang-en">4 min read</span></span>
          </div>
        </div>
      </header>

      <div className="case-content">
        <h2 className="lang-pt">🤔 O problema</h2>
        <h2 className="lang-en">🤔 The problem</h2>
        
        <p className="lang-pt">O governo brasileiro anunciou que o CNPJ passaria a ser alfanumérico, e não mais apenas numérico. Essa mudança impactou diretamente o sistema vigente, construído em Cobol, uma tecnologia arcaica cuja adaptação exigiria um custo muito alto.</p>
        <p className="lang-en">The Brazilian government announced that the CNPJ (National Registry of Legal Entities) would become alphanumeric, rather than just numeric. This change directly impacted the current system, built in Cobol, an archaic technology whose adaptation would require a very high cost.</p>

        <p className="lang-pt">Paralelamente, já estava em desenvolvimento um novo sistema para a Gestão de Prestadores de Saúde (GPRS). Nesse sistema também foram identificadas inúmeras inconsistências, tanto na estrutura do banco de dados quanto no fluxo e na navegação do sistema antigo.</p>
        <p className="lang-en">At the same time, a new system for the Management of Healthcare Providers (GPRS) was already under development. In this system, numerous inconsistencies were also identified, both in the database structure and in the flow and navigation of the old system.</p>

        <h2 className="lang-pt">📈 O cenário atual</h2>
        <h2 className="lang-en">📈 The current scenario</h2>

        <p className="lang-pt">Entrei no projeto um mês após seu início, já com o time de desenvolvedores e QAs em atividade. Junto ao PO, conduzi o entendimento global de ambos os sistemas e priorizei as demandas mais urgentes do GPRS, para manter o time de desenvolvimento em ritmo de trabalho.</p>
        <p className="lang-en">I joined the project one month after it started, with the team of developers and QAs already active. Together with the PO, I conducted a global understanding of both systems and prioritized the most urgent demands of the GPRS to keep the development team working at a steady pace.</p>

        <p className="lang-pt">O cenário era o seguinte: um sistema arcaico em funcionamento, responsável por 46% do faturamento da empresa; um sistema em criação com diversas inconsistências, construído em uma plataforma no-code/low-code, o que tornava a arquitetura mais rígida; e um prazo desafiador de apenas 10 meses. Como equipe, seguimos a metodologia Scrum para acelerar o aprendizado e tornar as decisões mais eficientes.</p>
        <p className="lang-en">The scenario was as follows: an archaic running system, responsible for 46% of the company's revenue; a new system being created with several inconsistencies, built on a no-code/low-code platform, which made the architecture more rigid; and a challenging deadline of only 10 months. As a team, we followed the Scrum methodology to accelerate learning and make decisions more efficient.</p>

        <h2 className="lang-pt">🎯 Objetivo de negócio</h2>
        <h2 className="lang-en">🎯 Business objective</h2>

        <p className="lang-pt">O objetivo de negócio era direto: o sistema precisava estar pronto até o fim do prazo, sob risco de impactar a operação da empresa. Além disso, era necessário entregar uma interface moderna e de fácil usabilidade.</p>
        <p className="lang-en">The business objective was straightforward: the system needed to be ready by the deadline, under the risk of impacting the company's operation. Furthermore, it was necessary to deliver a modern and easy-to-use interface.</p>

        <p className="lang-pt">Meu objetivo foi construir interfaces funcionais e com boa usabilidade para o usuário final, mesmo com a rigidez da arquitetura e o prazo curto.</p>
        <p className="lang-en">My objective was to build functional interfaces with good usability for the end-user, despite the rigidity of the architecture and the short deadline.</p>

        <h2 className="lang-pt">🔎 Entendendo as necessidades dos usuários</h2>
        <h2 className="lang-en">🔎 Understanding user needs</h2>

        <p className="lang-pt">Conduzi diversas reuniões com os usuários finais, o que permitiu identificar 4 personas distintas. Para cada uma, foi criado um fluxograma adaptado à etapa da jornada em que o sistema se inseria.</p>
        <p className="lang-en">I conducted several meetings with the end-users, which allowed me to identify 4 distinct personas. For each one, a flowchart adapted to the stage of the journey in which the system was inserted was created.</p>

        <p className="lang-pt"><em>Obs: nenhum dos artefatos pode ser compartilhado devido a políticas de compliance.</em></p>
        <p className="lang-en"><em>Note: none of the artifacts can be shared due to compliance policies.</em></p>

        <p className="lang-pt">As principais dores identificadas foram:</p>
        <p className="lang-en">The main pain points identified were:</p>

        <ul style={{"marginBottom":"2rem"}}>
          <li><span className="lang-pt"><strong>Rigidez da arquitetura:</strong> os usuários eram forçados a recomeçar um fluxo inteiro caso precisassem voltar a uma etapa anterior.</span><span className="lang-en"><strong>Rigid architecture:</strong> users were forced to restart an entire flow if they needed to go back to a previous step.</span></li>
          <li><span className="lang-pt"><strong>Falta de visibilidade:</strong> os usuários não sabiam em que etapa estavam, para onde estavam indo, nem conseguiam revisar o que já haviam preenchido.</span><span className="lang-en"><strong>Lack of visibility:</strong> users did not know what step they were on, where they were going, nor could they review what they had already filled out.</span></li>
          <li><span className="lang-pt"><strong>Curva de aprendizado longa:</strong> a complexidade do sistema exigia treinamento formal para novos usuários.</span><span className="lang-en"><strong>Long learning curve:</strong> the complexity of the system required formal training for new users.</span></li>
          <li><span className="lang-pt"><strong>Ausência de prevenção de erros:</strong> não havia mecanismos de confirmação para ações críticas, como deletar um procedimento ou cancelar um caso.</span><span className="lang-en"><strong>Lack of error prevention:</strong> there were no confirmation mechanisms for critical actions, such as deleting a procedure or canceling a case.</span></li>
        </ul>

        <h2 className="lang-pt">💡 Ideação e priorização</h2>
        <h2 className="lang-en">💡 Ideation and prioritization</h2>

        <p className="lang-pt">Após 2 meses de projeto, decidimos mudar a estratégia: focar primeiro no fim da operação, contemplando o carregamento e a manutenção dos dados já cadastrados no sistema, e deixar a etapa de negociação para uma segunda fase.</p>
        <p className="lang-en">After 2 months of the project, we decided to change the strategy: focus first on the end of the operation, contemplating the loading and maintenance of the data already registered in the system, and leave the negotiation stage for a second phase.</p>

        <h2 className="lang-pt">✏️ UI Design e Prototipação</h2>
        <h2 className="lang-en">✏️ UI Design and Prototyping</h2>

        <p className="lang-pt">Os protótipos e wireframes foram sendo construídos de forma dinâmica juntamente ao discovery, ideação, testes de usabilidade e validação. Dessa forma foi possível agilizar o processo de aprendizagem e clarificar os fluxos dos usuários, possibilitando que os Devs tivessem melhor dimensão da complexidade do que seria desenvolvido e dando mais assertividade aos prazos.</p>
        <p className="lang-en">Prototypes and wireframes were built dynamically alongside discovery, ideation, usability testing, and validation. In this way, it was possible to streamline the learning process and clarify user flows, allowing Devs to have a better dimension of the complexity of what would be developed and giving more assertiveness to deadlines.</p>

        <figure className="case-figure">
          <img src="assets/case-bradesco-negociacao/img_fluxos_brds.png" alt="Fluxos prototipados do sistema Bradesco Seguros" loading="lazy" className="placeholder-img" />
          <figcaption><span className="lang-pt">Parte dos fluxos prototipados</span><span className="lang-en">Part of the prototyped flows</span></figcaption>
        </figure>

        <p className="lang-pt">Os protótipos foram estruturados em fluxos que representavam as interações dos cliques, com post-its detalhando regras de negócio e especificações técnicas. No total, foram desenvolvidos mais de 20 fluxos para 5 funcionalidades diferentes do software.</p>
        <p className="lang-en">The prototypes were structured in flows that represented click interactions, with post-its detailing business rules and technical specifications. In total, more than 20 flows were developed for 5 different software functionalities.</p>

        <h2 className="lang-pt">📊 Resultado</h2>
        <h2 className="lang-en">📊 Result</h2>

        <p className="lang-pt">Com processos mais enxutos e fluxos de trabalho automatizados, o projeto reduziu em aproximadamente 20 horas semanais o tempo de entrada manual de dados por funcionário.</p>
        <p className="lang-en">With leaner processes and automated workflows, the project reduced the time spent on manual data entry by approximately 20 hours per week per employee.</p>
      </div>
    </article>

    <section id="projetos" style={{"paddingTop":"4rem","borderBottom":"none"}}>
      <div className="container">
        <span className="section-label" style={{"marginBottom":"2rem","display":"block"}}>
          <span className="lang-pt">Confira também</span><span className="lang-en">See also</span>
        </span>
        <div className="projects-grid">
          {/*  Conecta  */}
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
                <img src="assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
              </div>
              <div className="project-body-summary">
                <h3 className="lang-pt">Redesign do app Conecta</h3>
                <h3 className="lang-en">Conecta app Redesign</h3>
                
                <p className="project-subtitle lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo.</p>
                <p className="project-subtitle lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking.</p>
              </div>
              <div className="project-actions">
                <Link to="/case-conecta" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <span className="lang-pt">Ver case completo</span><span className="lang-en">View full case</span>
                </Link>
              </div>
            </div>
          </article>

          {/*  Mobinft  */}
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
                <img src="assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
              </div>
              <div className="project-body-summary">
                <h3 className="lang-pt">Mobinft: Comprar NFT sem precisar entender NFT</h3>
                <h3 className="lang-en">Mobinft: Buying NFTs without needing to understand NFTs</h3>
                
                <p className="project-subtitle lang-pt">Web3 sem manual de instruções: onboarding que transformou complexidade em primeira compra.</p>
                <p className="project-subtitle lang-en">Web3 without a manual: onboarding that turned complexity into the first purchase.</p>
              </div>
              <div className="project-actions">
                <Link to="/case-mobinft" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
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

export default CaseBradesco;
