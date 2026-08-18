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
      <header className="case-header">
        <h1 className="case-title">
          <Lang id="pt">
<span className="lang-pt">Conecta — Redesign da jornada de acompanhamento nutricional</span>
</Lang>
          <Lang id="en">
<span className="lang-en">Conecta — Redesigning the nutrition tracking journey</span>
</Lang>
        </h1>
        <p className="case-subtitle">
          <Lang id="pt">
<span className="lang-pt">Uma proposta de redesign para tornar o primeiro acesso mais claro, ajudar pacientes a compreender suas tarefas e facilitar o acompanhamento do progresso por nutricionistas.</span>
</Lang>
          <Lang id="en">
<span className="lang-en">A redesign concept to make onboarding clearer, help patients understand their tasks, and make it easier for nutritionists to track progress.</span>
</Lang>
        </p>
        
        <div className="case-author">
          <div className="author-avatar">
            <div style={{"width":"48px","height":"48px","borderRadius":"50%","backgroundColor":"var(--accent-blue)","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontWeight":"bold","fontSize":"1.2rem"}}>DJ</div>
          </div>
          <div className="author-info">
            <span className="author-name">Daniel Carvalho</span>
            <span className="case-date">Product Designer &bull; <Lang id="pt">
<span className="lang-pt">3 min de leitura</span>
</Lang><Lang id="en">
<span className="lang-en">3 min read</span>
</Lang></span>
          </div>
        </div>
      </header>

      <div className="case-content">
        <Lang id="pt">
<h2 className="lang-pt">Contexto</h2>
</Lang>
        <Lang id="en">
<h2 className="lang-en">Context</h2>
</Lang>
        
        <Lang id="pt">
<p className="lang-pt">Aplicativos de acompanhamento nutricional ampliam o contato entre consultas, mas dependem de orientação clara para que pacientes compreendam tarefas, registros e próximos passos. No Conecta, o primeiro acesso não explicava adequadamente essas possibilidades.</p>
</Lang>
        <Lang id="en">
<p className="lang-en">Nutrition tracking apps extend contact between consultations but rely on clear guidance so patients understand tasks, logs, and next steps. In Conecta, the initial access did not adequately explain these possibilities.</p>
</Lang>

        <Lang id="pt">
<h2 className="lang-pt">🤔 O problema</h2>
</Lang>
        <Lang id="en">
<h2 className="lang-en">🤔 The problem</h2>
</Lang>
        
        <Lang id="pt">
<p className="lang-pt">A análise inicial indicou uma falha de comunicação no onboarding e na arquitetura de informação. Sem compreender o que fazer no aplicativo, pacientes poderiam deixar de executar tarefas propostas pelo nutricionista e abandonar o acompanhamento digital.</p>
</Lang>
        <Lang id="en">
<p className="lang-en">The initial analysis indicated a communication gap in onboarding and information architecture. Without understanding what to do in the app, patients could fail to execute tasks proposed by the nutritionist and abandon digital tracking.</p>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-conecta/img-timeline-conecta.png" alt="Timeline do fluxo atual do Conecta" loading="lazy" className="placeholder-img" />
          <figcaption><Lang id="pt">
<span className="lang-pt">Timeline do Projeto</span>
</Lang><Lang id="en">
<span className="lang-en">Project Timeline</span>
</Lang></figcaption>
        </figure>
		
        <Lang id="pt">
<h2 className="lang-pt">Abordagem</h2>
            </Lang>
            <Lang id="en">
              <h2 className="lang-en">Approach</h2>
            </Lang>
            <Lang id="pt">
              <p className="lang-pt">Analisei referências de produtos de saúde e nutrição, reorganizei a arquitetura de informação e construí wireframes para revisar o fluxo de navegação. Depois, desenvolvi a interface de alta fidelidade e os padrões visuais necessários para manter consistência entre as telas.</p>
            </Lang>
            <Lang id="en">
              <p className="lang-en">I analyzed references from health and nutrition products, reorganized the information architecture, and built wireframes to review the navigation flow. Then, I developed the high-fidelity interface and visual patterns needed to maintain consistency across screens.</p>
            </Lang>

            <Lang id="pt">
              <h2 className="lang-pt">Resultado seguro</h2>
            </Lang>
            <Lang id="en">
              <h2 className="lang-en">Result</h2>
            </Lang>
            <Lang id="pt">
              <p className="lang-pt">A proposta resultou em uma jornada de primeiro acesso mais orientada e em uma organização mais clara das tarefas e do progresso. Até que existam evidências verificáveis de uso em produção, o case não deve afirmar aumento de adesão ao tratamento nem melhores resultados clínicos.</p>
            </Lang>
            <Lang id="en">
              <p className="lang-en">The proposal resulted in a more guided first-access journey and a clearer organization of tasks and progress. Until there is verifiable evidence of production use, this case refrains from claiming increased treatment adherence or improved clinical outcomes.</p>
            </Lang>
          </div>
        </article>

        <section id="projetos" className="reveal" style={{"paddingTop":"4rem","borderBottom":"none"}}>
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

          <article className="project-card" id="project-003">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(03)</span>
                  <Lang id="pt">
<span className="project-meta-tag lang-pt">Aplicativo mobile · Projeto de UX</span>
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
                <Link to="/case-mobinft" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
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

export default CaseConecta;
