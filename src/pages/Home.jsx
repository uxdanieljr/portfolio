import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const Home = () => {

  useScrollReveal();
  const { lang } = useLang();

  return (
    <>


  <main>
    {/*  [01] HERO  */}
    <section id="hero" className="reveal">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-tagline">
            <Lang id="pt">
<span className="lang-pt">Produtos</span>
</Lang><Lang id="en">
<span className="lang-en">Complex</span>
</Lang>
            <Lang id="pt">
<span className="highlight-orange lang-pt">complexos.</span>
</Lang><Lang id="en">
<span className="highlight-orange lang-en">products.</span>
</Lang>
            <Lang id="pt">
<span className="lang-pt">Experiências</span>
</Lang><Lang id="en">
<span className="lang-en">Clear</span>
</Lang>
            <Lang id="pt">
<span className="highlight-blue lang-pt">claras.</span>
</Lang><Lang id="en">
<span className="highlight-blue lang-en">experiences.</span>
</Lang>
          </h1>
          <Lang id="pt">
<p className="hero-subtitle lang-pt">
            Sou Daniel Carvalho, Product Designer com mais de 4 anos de experiência em sistemas corporativos, aplicativos e SaaS. Conecto pesquisa, estratégia e design de interação para tornar fluxos críticos mais claros, eficientes e viáveis de implementar.
          </p>
</Lang>
          <Lang id="en">
<p className="hero-subtitle lang-en">
            I’m Daniel Carvalho, a Product Designer with 4+ years of experience across enterprise systems, mobile apps, and SaaS. I connect research, product strategy, and interaction design to clarify critical workflows and create solutions that are efficient and feasible to build.
          </p>
</Lang>
          <div className="btn-group">
            <a href="#projetos" className="btn btn-primary" id="hero-cta-projects">
              <Lang id="pt">
<span className="lang-pt">Ver cases</span>
</Lang><Lang id="en">
<span className="lang-en">View selected work</span>
</Lang>
            </a>
            <a href="/Daniel Carvalho - Product Designer 2026.pdf" target="_blank" rel="noopener noreferrer" className="btn" id="hero-cta-cv">
              <Lang id="pt">
<span className="lang-pt">Ver currículo</span>
</Lang><Lang id="en">
<span className="lang-en">View résumé</span>
</Lang>
            </a>
          </div>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          <div className="brutalist-badge">
            <div className="brutalist-badge-icon">⚡</div>
            <h4>PRODUCT DESIGNER</h4>
            <p>PRODUTOS DIGITAIS COMPLEXOS</p>
          </div>
        </div>
      </div>
    </section>

    {/*  [03] PROJETOS  */}
    <section id="projetos" className="reveal">
      <div className="container">
        <Lang id="pt">
<span className="section-label lang-pt">CASES SELECIONADOS</span>
</Lang>
        <Lang id="en">
<span className="section-label lang-en">SELECTED WORK</span>
</Lang>
        
        
        <div className="section-header" style={{marginBottom: "2rem"}}>
          <Lang id="pt">
            <h2 className="lang-pt" style={{fontSize: "2rem", marginBottom: "0.5rem"}}>Problemas reais, decisões de design e resultados.</h2>
            <p className="lang-pt" style={{fontSize: "1.125rem", color: "var(--text-color-secondary)"}}>Uma seleção de projetos em sistemas corporativos, saúde digital e Web3.</p>
          </Lang>
          <Lang id="en">
            <h2 className="lang-en" style={{fontSize: "2rem", marginBottom: "0.5rem"}}>Real problems, design decisions, and outcomes.</h2>
            <p className="lang-en" style={{fontSize: "1.125rem", color: "var(--text-color-secondary)"}}>A selection of projects across enterprise software, digital health, and Web3.</p>
          </Lang>
        </div>
        <div className="projects-grid">
          {/*  Case 1  */}
          <article className="project-card" id="project-001">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(01)</span>
                  <Lang id="pt">
<span className="project-meta-tag lang-pt">Sistema corporativo · Desktop</span>
</Lang>
                  <Lang id="en">
<span className="project-meta-tag lang-en">Enterprise system · Desktop</span>
</Lang>
                </div>
                <span className="project-meta-year">2025-2026</span>
              </header>
              
              <div className="project-image-wrapper">
                <img src="assets/banner-bradesco-negociacao.svg" alt="Banner do projeto Bradesco Negociação" className="project-image" loading="lazy" />
              </div>
              
              <div className="project-body-summary">
                <Lang id="pt">
<h3 className="lang-pt">Bradesco Seguros — Modernização de um sistema crítico de gestão</h3>
</Lang>
                <Lang id="en">
<h3 className="lang-en">Bradesco Seguros — Modernizing a critical management system</h3>
</Lang>

                <Lang id="pt">
<p className="project-subtitle lang-pt">Redesenho de fluxos e automações em um sistema legado, reduzindo trabalho manual, prevenindo erros e ampliando a visibilidade dos processos.</p>
</Lang>
                <Lang id="en">
<p className="project-subtitle lang-en">Redesigned workflows and automations in a legacy system to reduce manual work, prevent errors, and improve process visibility.</p>
</Lang>
              </div>
              
              <div className="project-actions">
                <Link to="/cases/bradesco-seguros" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case</span>
</Lang><Lang id="en">
<span className="lang-en">View case</span>
</Lang>
                </Link>
              </div>
            </div>
          </article>

          {/*  Case 2  */}
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
                <img src="assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
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
                <Link to="/cases/conecta" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case</span>
</Lang><Lang id="en">
<span className="lang-en">View case</span>
</Lang>
                </Link>
              </div>
            </div>
          </article>

          {/*  Case 3  */}
          <article className="project-card" id="project-003">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(03)</span>
                  <Lang id="pt">
<span className="project-meta-tag lang-pt">Aplicativo mobile · Saúde digital</span>
</Lang>
                  <Lang id="en">
<span className="project-meta-tag lang-en">Mobile app · UX project</span>
</Lang>
                </div>
                <span className="project-meta-year">2023</span>
              </header>
              
              <div className="project-image-wrapper">
                <img src="assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
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
                <Link to="/cases/mobinft" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
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

    {/*  [02] SOBRE  */}
    <section id="sobre" className="reveal">
      <div className="container">
        <Lang id="pt">
<span className="section-label lang-pt">Sobre</span>
</Lang>
        <Lang id="en">
<span className="section-label lang-en">About</span>
</Lang>
        
        <div className="sobre-grid">
          <div className="sobre-title-block">
            <Lang id="pt">
<h2 className="sobre-title lang-pt">
              Design de ponta a ponta, com atenção ao usuário, à operação e ao negócio.
            </h2>
</Lang>
            <Lang id="en">
<h2 className="sobre-title lang-en">
              End-to-end design grounded in user needs, operations, and business context.
            </h2>
</Lang>
            
          </div>
          
          <div className="sobre-text-block">
            <Lang id="pt">
<p className="lang-pt">
              Atuo em produtos que exigem compreender regras de negócio, operações e necessidades reais de usuários antes de chegar à interface. Minha experiência inclui modernização de sistemas críticos, redesign de jornadas e estruturação de fluxos, protótipos e design systems.
            </p>
</Lang>
            <Lang id="en">
<p className="lang-en">
              I work on products that require a clear understanding of business rules, operations, and real user needs before moving into interface design. My experience includes modernizing critical systems, redesigning journeys, and shaping workflows, prototypes, and design systems.
            </p>
</Lang>

            <Lang id="pt">
<p className="lang-pt">
              Trabalho em colaboração com usuários, Produto e Tecnologia para transformar cenários ambíguos em decisões claras e soluções viáveis. Uso IA como ferramenta de pesquisa, síntese e prototipação, sempre com revisão crítica.
            </p>
</Lang>
            <Lang id="en">
<p className="lang-en">
              I collaborate with users, Product, and Engineering to turn ambiguous scenarios into clear decisions and feasible solutions. I use AI as a tool for research, synthesis, and prototyping, always with critical review.
            </p>
</Lang>

            
            
            <div className="sobre-education-badges">
              <div className="edu-badge" id="edu-mba">
                <span className="edu-badge-icon" aria-hidden="true"></span>
                <Lang id="pt">
<span className="lang-pt">MBA em Inovação Orientada a AI e UX</span>
</Lang>
                <Lang id="en">
<span className="lang-en">MBA in AI and UX-driven Innovation</span>
</Lang>
              </div>
              <div className="edu-badge" id="edu-unicorneo">
                <span className="edu-badge-icon" aria-hidden="true" style={{"backgroundColor":"var(--accent-pink)"}}></span>
                <Lang id="pt">
<span className="lang-pt">Certificação UX Unicórnio</span>
</Lang>
                <Lang id="en">
<span className="lang-en">UX Unicórnio Certification</span>
</Lang>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/*  [04] SERVIÇOS  */}
    <section id="servicos" className="reveal">
      <div className="container">
        <Lang id="pt">
<span className="section-label lang-pt">COMO CONTRIBUO</span>
</Lang>
        <Lang id="en">
<span className="section-label lang-en">HOW I CONTRIBUTE</span>
</Lang>
        
        <div className="servicos-header">
          <Lang id="pt">
<h2 className="lang-pt">Da compreensão do problema à evolução da solução.</h2>
</Lang>
          <Lang id="en">
<h2 className="lang-en">From understanding the problem to evolving the solution.</h2>
</Lang>
        </div>

        <div className="servicos-grid">
          {/*  Card 1  */}
          <article className="card service-card" id="srv-ux-research">
            <div className="service-icon" aria-hidden="true">🔬</div>
            <div className="service-num">(001)</div>
            <h3>Pesquisa com usuários</h3>
            <Lang id="pt">
<p className="lang-pt">Planejo e conduzo pesquisas para compreender comportamentos, necessidades e restrições. Organizo evidências para apoiar decisões de produto.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I plan and conduct research to understand behaviors, needs, and constraints, then organize evidence to support product decisions.</p>
</Lang>
          </article>

          {/*  Card 2  */}
          <article className="card service-card" id="srv-ui-design">
            <div className="service-icon" aria-hidden="true">🎨</div>
            <div className="service-num">(002)</div>
            <Lang id="pt"><h3>Design de interação e UI</h3></Lang><Lang id="en"><h3>Interaction and UI design</h3></Lang>
            <Lang id="pt">
<p className="lang-pt">Transformo requisitos e descobertas em interfaces claras, consistentes e adequadas ao contexto de uso.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I translate requirements and findings into clear, consistent interfaces suited to the context of use.</p>
</Lang>
          </article>

          {/*  Card 3  */}
          <article className="card service-card" id="srv-prototype">
            <div className="service-icon" aria-hidden="true">⚙️</div>
            <div className="service-num">(003)</div>
            <Lang id="pt">
<h3 className="lang-pt">Prototipação e validação</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">Prototyping and validation</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Crio protótipos para testar hipóteses, alinhar o time e identificar problemas antes do desenvolvimento.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I create prototypes to test hypotheses, align teams, and identify problems before development.</p>
</Lang>
          </article>

          {/*  Card 4  */}
          <article className="card service-card" id="srv-design-system">
            <div className="service-icon" aria-hidden="true">🧩</div>
            <div className="service-num">(004)</div>
            <Lang id="pt"><h3>Design systems</h3></Lang><Lang id="en"><h3>Design systems</h3></Lang>
            <Lang id="pt">
<p className="lang-pt">Estruturo componentes, padrões e documentação para apoiar consistência, manutenção e escala.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I structure components, patterns, and documentation to support consistency, maintenance, and scale.</p>
</Lang>
          </article>

          {/*  Card 5  */}
          <article className="card service-card" id="srv-product-strategy">
            <div className="service-icon" aria-hidden="true">📈</div>
            <div className="service-num">(005)</div>
            <Lang id="pt">
<h3 className="lang-pt">Estratégia e fluxos</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">Product strategy and workflows</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Mapeio jornadas, regras de negócio e fluxos críticos para reduzir ambiguidades e orientar prioridades.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I map journeys, business rules, and critical workflows to reduce ambiguity and guide priorities.</p>
</Lang>
          </article>

          {/*  Card 6  */}
          <article className="card service-card" id="srv-automation">
            <div className="service-icon" aria-hidden="true">🤖</div>
            <div className="service-num">(006)</div>
            <Lang id="pt">
<h3 className="lang-pt">IA aplicada ao processo</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">AI-supported workflow</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Uso IA para acelerar exploração, síntese e prototipação, preservando análise crítica, contexto e validação humana.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I use AI to accelerate exploration, synthesis, and prototyping while preserving critical thinking, context, and human validation.</p>
</Lang>
          </article>
        </div>
      </div>
    </section>

    {/*  [05] CONTATO  */}
    <section id="contato" className="reveal" style={{"borderBottom":"none"}}>
      <div className="container contato-wrapper">
        <div className="contato-text">
          <Lang id="pt">
<span className="section-label lang-pt">Contato</span>
</Lang>
          <Lang id="en">
<span className="section-label lang-en">Contact</span>
</Lang>
          
          <Lang id="pt">
<h2 className="lang-pt">Quer conversar sobre meu trabalho?</h2>
</Lang>
          <Lang id="en">
<h2 className="lang-en">Interested in discussing my work?</h2>
</Lang>

          <Lang id="pt">
<p className="lang-pt">Se meu perfil fizer sentido para uma oportunidade ou para o seu time, entre em contato pelo LinkedIn ou por e-mail.</p>
</Lang>
          <Lang id="en">
<p className="lang-en">If my experience could be a good fit for an opportunity or your team, feel free to reach out on LinkedIn or by email.</p>
</Lang>
        </div>

        <div className="contato-cards">
          {/*  WhatsApp Card  */}
          <a href="mailto:uxdanieljr@gmail.com" target="_blank" rel="noopener noreferrer" className="contato-link-card email-card" id="contact-email">
            <div className="card">
              <div className="card-content-flex">
                <div className="card-title-sub">
                  <Lang id="pt">
<h3 className="lang-pt">Enviar e-mail</h3>
</Lang>
                  <Lang id="en">
<h3 className="lang-en">Send an email</h3>
</Lang>
                  <Lang id="pt">
<p className="lang-pt">uxdanieljr@gmail.com</p>
</Lang>
                  <Lang id="en">
<p className="lang-en">uxdanieljr@gmail.com</p>
</Lang>
                </div>
                <div className="card-arrow-icon" aria-hidden="true">→</div>
              </div>
            </div>
          </a>

          {/*  LinkedIn Card  */}
          <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" className="contato-link-card linkedin-card" id="contact-linkedin">
            <div className="card">
              <div className="card-content-flex">
                <div className="card-title-sub">
                  <h3>LinkedIn</h3>
                  <Lang id="pt">
<p className="lang-pt">Ver perfil no LinkedIn</p>
</Lang>
                  <Lang id="en">
<p className="lang-en">View LinkedIn profile</p>
</Lang>
                </div>
                <div className="card-arrow-icon" aria-hidden="true">→</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </main>

  {/*  [06] FOOTER  */}
  
    </>
  );
};

export default Home;
