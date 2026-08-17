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
<span className="lang-pt">Design que</span>
</Lang><Lang id="en">
<span className="lang-en">Design that</span>
</Lang>
            <Lang id="pt">
<span className="highlight-orange lang-pt">resolve.</span>
</Lang><Lang id="en">
<span className="highlight-orange lang-en">solves.</span>
</Lang>
            <Lang id="pt">
<span className="lang-pt">IA que</span>
</Lang><Lang id="en">
<span className="lang-en">AI that</span>
</Lang>
            <Lang id="pt">
<span className="highlight-blue lang-pt">acelera.</span>
</Lang><Lang id="en">
<span className="highlight-blue lang-en">improves.</span>
</Lang>
          </h1>
          <Lang id="pt">
<p className="hero-subtitle lang-pt">
            Sou Daniel Carvalho, Product Designer especialista em apps e SaaS. Entrego experiências que funcionam, do problema à tela sem enrolação.
          </p>
</Lang>
          <Lang id="en">
<p className="hero-subtitle lang-en">
            I'm Daniel Carvalho, a Product Designer specializing in Apps and SaaS. I deliver experiences that work, from the problem to the screen without the fluff.
          </p>
</Lang>
          <div className="btn-group">
            <a href="#projetos" className="btn btn-primary" id="hero-cta-projects">
              <Lang id="pt">
<span className="lang-pt">Ver cases</span>
</Lang><Lang id="en">
<span className="lang-en">See cases</span>
</Lang>
            </a>
            <a href="/Daniel Carvalho - Product Designer 2026.pdf" target="_blank" rel="noopener noreferrer" className="btn" id="hero-cta-cv">
              <Lang id="pt">
<span className="lang-pt">Ver currículo</span>
</Lang><Lang id="en">
<span className="lang-en">View resume</span>
</Lang>
            </a>
          </div>
        </div>

        <div className="hero-illustration" aria-hidden="true">
          <div className="brutalist-badge">
            <div className="brutalist-badge-icon">⚡</div>
            <h4>PRODUCT</h4>
            <p>DESIGNER APPS & SAAS</p>
          </div>
        </div>
      </div>
    </section>

    {/*  [03] PROJETOS  */}
    <section id="projetos" className="reveal">
      <div className="container">
        <Lang id="pt">
<span className="section-label lang-pt">Projetos</span>
</Lang>
        <Lang id="en">
<span className="section-label lang-en">Projects</span>
</Lang>
        
        <div className="projects-grid">
          {/*  Case 1  */}
          <article className="project-card" id="project-001">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(01)</span>
                  <Lang id="pt">
<span className="project-meta-tag lang-pt">SaaS Desktop</span>
</Lang>
                  <Lang id="en">
<span className="project-meta-tag lang-en">SaaS Desktop</span>
</Lang>
                </div>
                <span className="project-meta-year">2025-2026</span>
              </header>
              
              <div className="project-image-wrapper">
                <img src="assets/banner-bradesco-negociacao.svg" alt="Banner do projeto Bradesco Negociação" className="project-image" loading="lazy" />
              </div>
              
              <div className="project-body-summary">
                <Lang id="pt">
<h3 className="lang-pt">Bradesco Seguros - Modernização de sistema crítico de gestão</h3>
</Lang>
                <Lang id="en">
<h3 className="lang-en">Bradesco Seguros - Modernization of a critical management system</h3>
</Lang>

                <Lang id="pt">
<p className="project-subtitle lang-pt">De sistema travado a fluxo que funciona: 10h a menos de trabalho manual por semana.</p>
</Lang>
                <Lang id="en">
<p className="project-subtitle lang-en">From a stuck system to a flow that works: 10 fewer hours of manual work per week.</p>
</Lang>
              </div>
              
              <div className="project-actions">
                <Link to="/cases/bradesco-seguros" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang><Lang id="en">
<span className="lang-en">See full case</span>
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
<span className="project-meta-tag lang-pt">App Mobile</span>
</Lang>
                  <Lang id="en">
<span className="project-meta-tag lang-en">Mobile App</span>
</Lang>
                </div>
                <span className="project-meta-year">2024-2025</span>
              </header>
              
              <div className="project-image-wrapper">
                <img src="assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
              </div>
              
              <div className="project-body-summary">
                <Lang id="pt">
<h3 className="lang-pt">Redesign do app Conecta</h3>
</Lang>
                <Lang id="en">
<h3 className="lang-en">Conecta app Redesign</h3>
</Lang>

                <Lang id="pt">
<p className="project-subtitle lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo.</p>
</Lang>
                <Lang id="en">
<p className="project-subtitle lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking.</p>
</Lang>
              </div>
              
              <div className="project-actions">
                <Link to="/cases/conecta" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang><Lang id="en">
<span className="lang-en">See full case</span>
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
<span className="project-meta-tag lang-pt">App Mobile</span>
</Lang>
                  <Lang id="en">
<span className="project-meta-tag lang-en">Mobile App</span>
</Lang>
                </div>
                <span className="project-meta-year">2023</span>
              </header>
              
              <div className="project-image-wrapper">
                <img src="assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
              </div>
              
              <div className="project-body-summary">
                <Lang id="pt">
<h3 className="lang-pt">Mobinft: Comprar NFT sem precisar entender NFT</h3>
</Lang>
                <Lang id="en">
<h3 className="lang-en">Mobinft: Buying NFTs without needing to understand NFTs</h3>
</Lang>

                <Lang id="pt">
<p className="project-subtitle lang-pt">Web3 sem manual de instruções: onboarding que transformou complexidade em primeira compra.</p>
</Lang>
                <Lang id="en">
<p className="project-subtitle lang-en">Web3 without a manual: onboarding that turned complexity into the first purchase.</p>
</Lang>
              </div>
              
              <div className="project-actions">
                <Link to="/cases/mobinft" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang><Lang id="en">
<span className="lang-en">See full case</span>
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
              Produto bom não é só bonito. É claro, rápido e funciona de verdade.
            </h2>
</Lang>
            <Lang id="en">
<h2 className="sobre-title lang-en">
              A good product isn't just pretty. It's clear, fast, and actually works.
            </h2>
</Lang>
            <Lang id="pt">
<div className="sobre-highlight-box lang-pt">
              Foco em valor prático & UX orientada a IA
            </div>
</Lang>
            <Lang id="en">
<div className="sobre-highlight-box lang-en">
              Focus on practical value & AI-driven UX
            </div>
</Lang>
          </div>
          
          <div className="sobre-text-block">
            <Lang id="pt">
<p className="lang-pt">
              Tenho mais de 4 anos de experiência criando e evoluindo produtos digitais para empresas, startups e agências.
            </p>
</Lang>
            <Lang id="en">
<p className="lang-en">
              I have 4+ years of experience creating and evolving digital products for companies, startups, and agencies.
            </p>
</Lang>

            <Lang id="pt">
<p className="lang-pt">
              Sou multi-especialista: entendo o produto de ponta a ponta, da pesquisa com usuário até o Design System. Isso me permite tomar decisões mais consistentes e entregar com mais autonomia.
            </p>
</Lang>
            <Lang id="en">
<p className="lang-en">
              I am a multi-specialist: I understand the product from end to end, from user research to the Design System. This allows me to make more consistent decisions and deliver with more autonomy.
            </p>
</Lang>

            <Lang id="pt">
<p className="lang-pt">
              Pra mim, IA não é curiosidade, é ferramenta de trabalho. Ela me ajuda a pesquisar mais rápido, sintetizar dados com mais precisão e prototipar com menos atrito.
            </p>
</Lang>
            <Lang id="en">
<p className="lang-en">
              For me, IA is not curiosity, is a work tool. It helps me research faster, synthesize data more accurately, and prototype with less friction.
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
<span className="section-label lang-pt"> O que eu faço</span>
</Lang>
        <Lang id="en">
<span className="section-label lang-en"> What I do</span>
</Lang>
        
        <div className="servicos-header">
          <Lang id="pt">
<h2 className="lang-pt">Não sou especialista em uma coisa só. Sou especialista no produto inteiro.</h2>
</Lang>
          <Lang id="en">
<h2 className="lang-en">I'm not a specialist in just one thing. I'm a specialist in the entire product.</h2>
</Lang>
        </div>

        <div className="servicos-grid">
          {/*  Card 1  */}
          <article className="card service-card" id="srv-ux-research">
            <div className="service-icon" aria-hidden="true">🔬</div>
            <div className="service-num">(001)</div>
            <h3>UX Research</h3>
            <Lang id="pt">
<p className="lang-pt">Pesquiso, ouço usuários e transformo dados em decisões. Com IA na síntese, o processo é mais rápido e a leitura, mais precisa.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I research, listen to users, and turn data into decisions. With AI in synthesis, the process is faster and the reading is more accurate.</p>
</Lang>
          </article>

          {/*  Card 2  */}
          <article className="card service-card" id="srv-ui-design">
            <div className="service-icon" aria-hidden="true">🎨</div>
            <div className="service-num">(002)</div>
            <h3>UI Design</h3>
            <Lang id="pt">
<p className="lang-pt">Interfaces claras, com hierarquia visual bem definida e consistência em cada tela.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">Clear interfaces, with well-defined visual hierarchy and consistency on every screen.</p>
</Lang>
          </article>

          {/*  Card 3  */}
          <article className="card service-card" id="srv-prototype">
            <div className="service-icon" aria-hidden="true">⚙️</div>
            <div className="service-num">(003)</div>
            <Lang id="pt">
<h3 className="lang-pt">Prototipagem</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">Prototyping</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Do rascunho ao protótipo navegável. Valido ideias antes de virar código, economizando tempo e retrabalho.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">From draft to navigable prototype. I validate ideas before they become code, saving time and rework.</p>
</Lang>
          </article>

          {/*  Card 4  */}
          <article className="card service-card" id="srv-design-system">
            <div className="service-icon" aria-hidden="true">🧩</div>
            <div className="service-num">(004)</div>
            <h3>Design System</h3>
            <Lang id="pt">
<p className="lang-pt">Estruturo componentes e padrões para o produto escalar sem perder consistência.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I structure components and patterns so the product scales without losing consistency.</p>
</Lang>
          </article>

          {/*  Card 5  */}
          <article className="card service-card" id="srv-product-strategy">
            <div className="service-icon" aria-hidden="true">📈</div>
            <div className="service-num">(005)</div>
            <Lang id="pt">
<h3 className="lang-pt">Estratégia de Produto</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">Product Strategy</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Identifico gaps, organizo prioridades e ajudo times a tomarem decisões com mais clareza.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I identify gaps, organize priorities, and help teams make decisions with more clarity.</p>
</Lang>
          </article>

          {/*  Card 6  */}
          <article className="card service-card" id="srv-automation">
            <div className="service-icon" aria-hidden="true">🤖</div>
            <div className="service-num">(006)</div>
            <Lang id="pt">
<h3 className="lang-pt">Automação de Processos</h3>
</Lang>
            <Lang id="en">
<h3 className="lang-en">Process Automation</h3>
</Lang>
            <Lang id="pt">
<p className="lang-pt">Reduzo trabalho manual. Já economizei ~10h semanais por funcionário só com processos mais enxutos e automações bem aplicadas.</p>
</Lang>
            <Lang id="en">
<p className="lang-en">I reduce manual work. I've already saved ~10h a week per employee just with leaner processes and well-applied automations.</p>
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
<h2 className="lang-pt">Tem um produto pra evoluir? Vamos conversar.</h2>
</Lang>
          <Lang id="en">
<h2 className="lang-en">Have a product to evolve? Let's talk.</h2>
</Lang>

          <Lang id="pt">
<p className="lang-pt">Não precisa ter tudo estruturado. Pode me mandar uma mensagem contando o desafio, a gente descobre o próximo passo juntos.</p>
</Lang>
          <Lang id="en">
<p className="lang-en">You don't need to have everything structured. You can send me a message telling me the challenge, and we'll figure out the next step together.</p>
</Lang>
        </div>

        <div className="contato-cards">
          {/*  WhatsApp Card  */}
          <a href="https://wa.me/5512988298554" target="_blank" rel="noopener noreferrer" className="contato-link-card whatsapp-card" id="contact-whatsapp">
            <div className="card">
              <div className="card-content-flex">
                <div className="card-title-sub">
                  <Lang id="pt">
<h3 className="lang-pt">Falar no WhatsApp</h3>
</Lang>
                  <Lang id="en">
<h3 className="lang-en">Talk on WhatsApp</h3>
</Lang>
                  <Lang id="pt">
<p className="lang-pt">Bora bater um papo</p>
</Lang>
                  <Lang id="en">
<p className="lang-en">Let's have a chat</p>
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
<p className="lang-pt">Bora se conectar</p>
</Lang>
                  <Lang id="en">
<p className="lang-en">Let's connect</p>
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
