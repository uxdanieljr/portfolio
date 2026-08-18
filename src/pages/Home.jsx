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
      <Metadata 
        title={lang === 'en' ? 'Daniel Carvalho — Product Designer | Complex digital products' : 'Daniel Carvalho — Product Designer | Produtos digitais complexos'} 
        description={lang === 'en' ? 'Daniel Carvalho’s portfolio: a Product Designer with 4+ years of experience in complex digital products and enterprise systems.' : 'Portfólio de Daniel Carvalho, Product Designer com mais de 4 anos de experiência em produtos digitais complexos e sistemas corporativos.'} 
        canonicalPath={lang === 'en' ? '/en' : '/'} 
      />

      <main>
        {/*  [01] HERO  */}
        <section id="hero" className="reveal">
          <div className="container hero-content">
            <div className="hero-text">

              <h1 className="hero-tagline">
                <Lang id="pt">
                  <span className="lang-pt">Produtos </span>
                </Lang>
                <Lang id="en">
                  <span className="lang-en">Complex </span>
                </Lang>
                <Lang id="pt">
                  <span className="highlight-wine lang-pt">complexos.<br/></span>
                </Lang>
                <Lang id="en">
                  <span className="highlight-wine lang-en">products.<br/></span>
                </Lang>
                <Lang id="pt">
                  <span className="lang-pt">Experiências </span>
                </Lang>
                <Lang id="en">
                  <span className="lang-en">Clear </span>
                </Lang>
                <Lang id="pt">
                  <span className="highlight-wine lang-pt">claras.</span>
                </Lang>
                <Lang id="en">
                  <span className="highlight-wine lang-en">experiences.</span>
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
              <div className="hero-actions">
                <a href="#projetos" className="btn btn-primary" id="hero-cta-projects">
                  <Lang id="pt"><span className="lang-pt">Ver cases</span></Lang>
                  <Lang id="en"><span className="lang-en">View selected work</span></Lang>
                </a>
                <a href="/Daniel Carvalho - Product Designer 2026.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="hero-cta-cv">
                  <Lang id="pt"><span className="lang-pt">Ver currículo</span></Lang>
                  <Lang id="en"><span className="lang-en">View résumé</span></Lang>
                </a>
              </div>
            </div>

            <div className="hero-image-wrapper">
              <img src="/assets/foto_site_portfolio.png" alt="Daniel Carvalho" className="hero-image" loading="lazy" />
            </div>
          </div>
        </section>

        {/*  [02] PROJETOS  */}
        <section id="projetos" className="reveal">
          <div className="container">
            <div className="projetos-header">
              <Lang id="pt">
                <span className="eyebrow lang-pt">Cases Selecionados</span>
                <h2 className="lang-pt">Problemas reais, decisões de design e resultados.</h2>
                <p className="lang-pt">Uma seleção de projetos em sistemas corporativos, saúde digital e Web3.</p>
              </Lang>
              <Lang id="en">
                <span className="eyebrow lang-en">Selected Work</span>
                <h2 className="lang-en">Real problems, design decisions, and outcomes.</h2>
                <p className="lang-en">A selection of projects across enterprise software, digital health, and Web3.</p>
              </Lang>
            </div>

            <div className="projects-grid">
              {/*  Case 1 (Bradesco - Full width)  */}
              <Link to="/cases/bradesco-seguros" className="project-card" id="project-001">
                <div className="project-info">
                  <div className="project-meta">
                    <Lang id="pt"><span className="lang-pt">01 / Sistema corporativo · Desktop</span></Lang>
                    <Lang id="en"><span className="lang-en">01 / Enterprise system · Desktop</span></Lang>
                  </div>
                  <Lang id="pt">
                    <h3 className="lang-pt">Bradesco Seguros — Modernização de um sistema crítico de gestão</h3>
                    <p className="lang-pt">Redesenho de fluxos e automações em um sistema legado, reduzindo trabalho manual, prevenindo erros e ampliando a visibilidade dos processos.</p>
                  </Lang>
                  <Lang id="en">
                    <h3 className="lang-en">Bradesco Seguros — Modernizing a critical management system</h3>
                    <p className="lang-en">Redesigned workflows and automations in a legacy system to reduce manual work, prevent errors, and improve process visibility.</p>
                  </Lang>
                  <span className="text-link">
                    <Lang id="pt"><span className="lang-pt">Ler case completo &rarr;</span></Lang>
                    <Lang id="en"><span className="lang-en">Read full case &rarr;</span></Lang>
                  </span>
                </div>
                <div className="project-image-wrapper">
                  <img src="/assets/banner-bradesco-negociacao.svg" alt="Bradesco Seguros" className="project-card-image" loading="lazy" />
                </div>
              </Link>

              {/*  Case 2 (Conecta - Half width)  */}
              <Link to="/cases/conecta" className="project-card" id="project-002">
                <div className="project-image-wrapper">
                  <img src="/assets/Thumbnail-conecta.svg" alt="Conecta" className="project-card-image" loading="lazy" />
                </div>
                <div className="project-meta" style={{marginTop: '24px'}}>
                  <Lang id="pt"><span className="lang-pt">02 / Aplicativo mobile · Saúde digital</span></Lang>
                  <Lang id="en"><span className="lang-en">02 / Mobile app · Digital health</span></Lang>
                </div>
                <Lang id="pt">
                  <h3 className="lang-pt">Conecta — Redesign da jornada de acompanhamento nutricional</h3>
                  <p className="lang-pt">Proposta de redesign do primeiro acesso e da navegação para tornar as tarefas do paciente mais compreensíveis e facilitar o acompanhamento pelo nutricionista.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Conecta — Redesigning the nutrition tracking journey</h3>
                  <p className="lang-en">A redesign concept for onboarding and navigation, aimed at making patient tasks easier to understand and progress easier for nutritionists to track.</p>
                </Lang>
                <span className="text-link">
                  <Lang id="pt"><span className="lang-pt">Ler case completo &rarr;</span></Lang>
                  <Lang id="en"><span className="lang-en">Read full case &rarr;</span></Lang>
                </span>
              </Link>

              {/*  Case 3 (Mobinft - Half width)  */}
              <Link to="/cases/mobinft" className="project-card" id="project-003">
                <div className="project-image-wrapper">
                  <img src="/assets/banner-mobinft.png" alt="Mobinft" className="project-card-image" loading="lazy" />
                </div>
                <div className="project-meta" style={{marginTop: '24px'}}>
                  <Lang id="pt"><span className="lang-pt">03 / Aplicativo mobile · UX project</span></Lang>
                  <Lang id="en"><span className="lang-en">03 / Mobile app · UX project</span></Lang>
                </div>
                <Lang id="pt">
                  <h3 className="lang-pt">Mobinft — Simplificando a compra de chaves digitais em Web3</h3>
                  <p className="lang-pt">Pesquisa e prototipação de uma jornada de compra para pessoas sem experiência prévia com NFTs, refinada em duas rodadas de testes de usabilidade.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Mobinft — Simplifying the purchase of digital keys in Web3</h3>
                  <p className="lang-en">Research and prototyping for a purchasing journey designed for people with no prior NFT experience, refined through two rounds of usability testing.</p>
                </Lang>
                <span className="text-link">
                  <Lang id="pt"><span className="lang-pt">Ler case completo &rarr;</span></Lang>
                  <Lang id="en"><span className="lang-en">Read full case &rarr;</span></Lang>
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/*  [03] SOBRE  */}
        <section id="sobre" className="reveal sobre-section">
          <div className="container sobre-grid">
            <div className="sobre-title-block">
              <Lang id="pt">
                <span className="eyebrow lang-pt">Sobre</span>
                <h2 className="lang-pt">
                  Design de ponta a ponta, com atenção ao usuário, à operação e ao negócio.
                </h2>
              </Lang>
              <Lang id="en">
                <span className="eyebrow lang-en">About</span>
                <h2 className="lang-en">
                  End-to-end design grounded in user needs, operations, and business context.
                </h2>
              </Lang>
            </div>
            
            <div className="sobre-text-block">
              <Lang id="pt">
                <p className="lang-pt">
                  Atuo em produtos que exigem compreender regras de negócio, operações e necessidades reais de usuários antes de chegar à interface. Minha experiência inclui modernização de sistemas críticos, redesign de jornadas e estruturação de fluxos, protótipos e design systems.
                </p>
                <p className="lang-pt">
                  Trabalho em colaboração com usuários, Produto e Tecnologia para transformar cenários ambíguos em decisões claras e soluções viáveis. Uso IA como ferramenta de pesquisa, síntese e prototipação, sempre com revisão crítica.
                </p>
              </Lang>
              <Lang id="en">
                <p className="lang-en">
                  I work on products that require a clear understanding of business rules, operations, and real user needs before moving into interface design. My experience includes modernizing critical systems, redesigning journeys, and shaping workflows, prototypes, and design systems.
                </p>
                <p className="lang-en">
                  I collaborate with users, Product, and Engineering to turn ambiguous scenarios into clear decisions and feasible solutions. I use AI as a tool for research, synthesis, and prototyping, always with critical review.
                </p>
              </Lang>

              <div className="sobre-education-badges" style={{marginTop: '32px'}}>
                <Lang id="pt">
                  <p className="lang-pt" style={{fontWeight: 600, color: 'var(--color-text-primary)'}}>
                    MBA em Inovação Orientada a AI e UX<br/>
                    <span style={{fontWeight: 400, color: 'var(--color-text-secondary)', fontSize: '1rem'}}>FIAP</span>
                  </p>
                  <p className="lang-pt" style={{fontWeight: 600, color: 'var(--color-text-primary)'}}>
                    Certificação UX Unicórnio<br/>
                    <span style={{fontWeight: 400, color: 'var(--color-text-secondary)', fontSize: '1rem'}}>UX Unicórnio</span>
                  </p>
                </Lang>
                <Lang id="en">
                  <p className="lang-en" style={{fontWeight: 600, color: 'var(--color-text-primary)'}}>
                    MBA in AI and UX-driven Innovation<br/>
                    <span style={{fontWeight: 400, color: 'var(--color-text-secondary)', fontSize: '1rem'}}>FIAP</span>
                  </p>
                  <p className="lang-en" style={{fontWeight: 600, color: 'var(--color-text-primary)'}}>
                    UX Unicórnio Certification<br/>
                    <span style={{fontWeight: 400, color: 'var(--color-text-secondary)', fontSize: '1rem'}}>UX Unicórnio</span>
                  </p>
                </Lang>
              </div>
            </div>
          </div>
        </section>

        {/*  [04] COMPETÊNCIAS  */}
        <section id="servicos" className="reveal servicos-section">
          <div className="container">
            <Lang id="pt">
              <span className="eyebrow lang-pt">Como contribuo</span>
              <h2 className="lang-pt" style={{marginBottom: '64px'}}>Da compreensão do problema à evolução da solução.</h2>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">How I contribute</span>
              <h2 className="lang-en" style={{marginBottom: '64px'}}>From understanding the problem to evolving the solution.</h2>
            </Lang>

            <div className="servicos-grid">
              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">Pesquisa com usuários</h3>
                  <p className="lang-pt">Planejo e conduzo pesquisas para compreender comportamentos, necessidades e restrições. Organizo evidências para apoiar decisões de produto.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">User research</h3>
                  <p className="lang-en">I plan and conduct research to understand behaviors, needs, and constraints, then organize evidence to support product decisions.</p>
                </Lang>
              </div>

              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">Design de interação e UI</h3>
                  <p className="lang-pt">Transformo requisitos e descobertas em interfaces claras, consistentes e adequadas ao contexto de uso.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Interaction and UI design</h3>
                  <p className="lang-en">I translate requirements and findings into clear, consistent interfaces suited to the context of use.</p>
                </Lang>
              </div>

              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">Prototipação e validação</h3>
                  <p className="lang-pt">Crio protótipos para testar hipóteses, alinhar o time e identificar problemas antes do desenvolvimento.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Prototyping and validation</h3>
                  <p className="lang-en">I create prototypes to test hypotheses, align teams, and identify problems before development.</p>
                </Lang>
              </div>

              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">Design systems</h3>
                  <p className="lang-pt">Estruturo componentes, padrões e documentação para apoiar consistência, manutenção e escala.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Design systems</h3>
                  <p className="lang-en">I structure components, patterns, and documentation to support consistency, maintenance, and scale.</p>
                </Lang>
              </div>

              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">Estratégia e fluxos</h3>
                  <p className="lang-pt">Mapeio jornadas, regras de negócio e fluxos críticos para reduzir ambiguidades e orientar prioridades.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">Product strategy and workflows</h3>
                  <p className="lang-en">I map journeys, business rules, and critical workflows to reduce ambiguity and guide priorities.</p>
                </Lang>
              </div>

              <div className="service-item">
                <Lang id="pt">
                  <h3 className="lang-pt">IA aplicada ao processo</h3>
                  <p className="lang-pt">Uso IA para acelerar exploração, síntese e prototipação, preservando análise crítica, contexto e validação humana.</p>
                </Lang>
                <Lang id="en">
                  <h3 className="lang-en">AI-supported workflow</h3>
                  <p className="lang-en">I use AI to accelerate exploration, synthesis, and prototyping while preserving critical thinking, context, and human validation.</p>
                </Lang>
              </div>
            </div>
          </div>
        </section>

        {/*  [05] CONTATO  */}
        <section id="contato" className="reveal contato-section">
          <div className="container contato-wrapper">
            <Lang id="pt">
              <span className="eyebrow lang-pt">Contato</span>
              <h2 className="lang-pt">Quer conversar sobre meu trabalho?</h2>
              <p className="lang-pt">Se meu perfil fizer sentido para uma oportunidade ou para o seu time, entre em contato pelo LinkedIn ou por e-mail.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">Contact</span>
              <h2 className="lang-en">Interested in discussing my work?</h2>
              <p className="lang-en">If my experience could be a good fit for an opportunity or your team, feel free to reach out on LinkedIn or by email.</p>
            </Lang>

            <div className="contato-actions">
              <a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                LinkedIn
              </a>
              <a href="mailto:uxdanieljr@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <Lang id="pt"><span className="lang-pt">Enviar e-mail</span></Lang>
                <Lang id="en"><span className="lang-en">Send email</span></Lang>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
