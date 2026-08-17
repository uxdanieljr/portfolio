import Metadata from '../components/Metadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseMobinft = () => {

  useScrollReveal();
  const { lang } = useLang();

  return (
    <>


  <main className="case-study-main">
    <article className="case-study-article">
      <header className="case-header">
        <h1 className="case-title">
          <Lang id="pt">
<span className="lang-pt">Mobinft — Simplificando a compra de chaves digitais em Web3</span>
</Lang>
          <Lang id="en">
<span className="lang-en">Mobinft — Simplifying the purchase of digital keys in Web3</span>
</Lang>
        </h1>
        <p className="case-subtitle">
          <Lang id="pt">
<span className="lang-pt">Pesquisa e prototipação de uma jornada de compra para pessoas sem experiência prévia com NFTs, refinada em duas rodadas de testes de usabilidade.</span>
</Lang>
          <Lang id="en">
<span className="lang-en">Research and prototyping for a purchasing journey designed for people with no prior NFT experience, refined through two rounds of usability testing.</span>
</Lang>
        </p>
        
        <div className="case-author">
          <div className="author-avatar">
            <div style={{"width":"48px","height":"48px","borderRadius":"50%","backgroundColor":"var(--accent-pink)","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontWeight":"bold","fontSize":"1.2rem"}}>DJ</div>
          </div>
          <div className="author-info">
            <span className="author-name">Daniel Carvalho</span>
            <span className="case-date">Product Designer &bull; <Lang id="pt">
<span className="lang-pt">4 min de leitura</span>
</Lang><Lang id="en">
<span className="lang-en">4 min read</span>
</Lang></span>
          </div>
        </div>
      </header>

      <div className="case-content">
        <Lang id="pt">
<h2 className="lang-pt">Contexto e problema</h2>
</Lang>
        <Lang id="en">
<h2 className="lang-en">Context and problem</h2>
</Lang>
        
        <Lang id="pt">
<p className="lang-pt">A Mobinft propunha o uso de uma chave digital baseada em NFT para dar acesso a viagens em veículos autônomos a partir de aeroportos. Para pessoas sem experiência com Web3, adquirir essa chave exigia compreender conceitos e etapas técnicas que criavam uma barreira de entrada.</p>
</Lang>
<Lang id="en">
<p className="lang-en">Mobinft proposed using an NFT-based digital key to provide access to autonomous vehicle rides from airports. For people with no Web3 experience, acquiring this key required understanding technical concepts and steps that created a barrier to entry.</p>
</Lang>
        <Lang id="en">

</Lang>

        <Lang id="pt">
<h2 className="lang-pt">Objetivo do projeto</h2>
</Lang>
<Lang id="en">
<h2 className="lang-en">Project objective</h2>
</Lang>
<Lang id="pt">
<p className="lang-pt">Reduzir a barreira de compreensão e tornar a jornada de aquisição da chave digital mais clara para novos usuários. (Aumentar a base de clientes em 20% era um objetivo de negócio relacionado à iniciativa).</p>
</Lang>
<Lang id="en">
<p className="lang-en">Reduce the barrier to understanding and make the digital key acquisition journey clearer for new users. (Increasing the customer base by 20% was a business objective related to the initiative).</p>
</Lang>

<Lang id="pt">
<h2 className="lang-pt">Pesquisa e decisão</h2>
</Lang>
<Lang id="en">
<h2 className="lang-en">Research and decision</h2>
</Lang>
<Lang id="pt">
<p className="lang-pt">A pesquisa indicou dificuldade para compreender conceitos, etapas e termos do processo de compra. Com base nessas evidências, priorizamos um onboarding contextual e orientações distribuídas ao longo do fluxo, em vez de depender de um tutorial isolado.</p>
</Lang>
<Lang id="en">
<p className="lang-en">Research indicated difficulty understanding concepts, steps, and terms of the purchasing process. Based on this evidence, we prioritized contextual onboarding and guidance distributed throughout the flow, rather than relying on a standalone tutorial.</p>
</Lang>

<Lang id="pt">
<h2 className="lang-pt">Prototipação e testes</h2>
</Lang>
<Lang id="en">
<h2 className="lang-en">Prototyping and testing</h2>
</Lang>
<Lang id="pt">
<p className="lang-pt">A primeira versão do wireframe foi testada com seis participantes sem experiência prévia com NFTs. Os problemas identificados no tutorial orientaram mudanças na ordem e na forma de apresentar os conceitos. Uma segunda rodada, com cinco participantes, avaliou a versão de alta fidelidade.</p>
</Lang>
<Lang id="en">
<p className="lang-en">The first wireframe version was tested with six participants with no prior NFT experience. The problems identified in the tutorial guided changes in the order and way concepts were presented. A second round, with five participants, evaluated the high-fidelity version.</p>
</Lang>

<Lang id="pt">
<h2 className="lang-pt">Resultado e aprendizado</h2>
</Lang>
<Lang id="en">
<h2 className="lang-en">Result and learnings</h2>
</Lang>
<Lang id="pt">
<p className="lang-pt">A segunda rodada indicou melhora na compreensão do tutorial, mas revelou uma nova ambiguidade: durante a compra, participantes escolheram “marketplace” com mais frequência do que “chave”. O achado mostrou que a terminologia e as opções de compra ainda precisavam ser refinadas.</p>
</Lang>
<Lang id="en">
<p className="lang-en">The second round showed improvement in tutorial comprehension but revealed a new ambiguity: during the purchase, participants chose "marketplace" more frequently than "key." This finding showed that terminology and purchasing options still needed refinement.</p>
</Lang>

</div></article><section id="projetos" className="reveal" style={{"paddingTop":"4rem","borderBottom":"none"}}>
      <div className="container">
        <span className="section-label" style={{"marginBottom":"2rem","display":"block"}}>
          <Lang id="pt">
<span className="lang-pt">Confira também</span>
</Lang><Lang id="en">
<span className="lang-en">See also</span>
</Lang>
        </span>
        <div className="projects-grid">

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
                <img src="/assets/banner-bradesco-negociacao.svg" alt="Banner do projeto Bradesco Negociação" className="project-image" loading="lazy" />
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
                <Link to="/case-bradesco-senha" className="btn btn-expand-project" style={{textDecoration:'none', textAlign:'center'}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang><Lang id="en">
<span className="lang-en">View full case</span>
</Lang>
                </Link>
              </div>
            </div>
          </article>

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
                <Link to="/case-conecta" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang><Lang id="en">
<span className="lang-en">View full case</span>
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

export default CaseMobinft;
