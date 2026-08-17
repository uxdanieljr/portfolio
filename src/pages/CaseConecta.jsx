import { useMetadata } from '../hooks/useMetadata';
import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import Lang from '../components/Lang';

const CaseConecta = () => {
  useMetadata({
    title: lang === 'en' ? 'Conecta App - Daniel Carvalho' : 'App Conecta - Daniel Carvalho',
    description: lang === 'en' ? 'Conecta app redesign' : 'Redesign do app Conecta',
    canonicalPath: lang === 'en' ? '/en/cases/conecta' : '/cases/conecta'
  });

  useScrollReveal();
  const { lang } = useLang();

  return (
    <>


  <main className="case-study-main">
    <article className="case-study-article">
      <header className="case-header">
        <h1 className="case-title">
          <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Transformando a Experiência Nutricional: Redesign do app Conecta</span>
</Lang>
</Lang>
</Lang>
</Lang>
          <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Transforming the Nutritional Experience: Conecta App Redesign</span>
</Lang>
</Lang>
</Lang>
</Lang>
        </h1>
        <p className="case-subtitle">
          <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo</span>
</Lang>
</Lang>
</Lang>
</Lang>
          <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking</span>
</Lang>
</Lang>
</Lang>
</Lang>
        </p>
        
        <div className="case-author">
          <div className="author-avatar">
            <div style={{"width":"48px","height":"48px","borderRadius":"50%","backgroundColor":"var(--accent-blue)","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontWeight":"bold","fontSize":"1.2rem"}}>DJ</div>
          </div>
          <div className="author-info">
            <span className="author-name">Daniel Carvalho</span>
            <span className="case-date">Product Designer &bull; <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">3 min de leitura</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">3 min read</span>
</Lang>
</Lang>
</Lang>
</Lang></span>
          </div>
        </div>
      </header>

      <div className="case-content">
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">📈 O cenário atual</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">📈 The current scenario</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">O mercado de nutrição tem passado por uma transformação, com a crescente demanda por acompanhamentos mais próximos e personalizados. Nutricionistas buscam ferramentas que vão além das consultas presenciais, permitindo um monitoramento contínuo e individualizado dos pacientes. No entanto, muitos profissionais ainda encontram dificuldades em oferecer esse nível de atenção, seja pela falta de tempo ou de recursos adequados. Essa lacuna entre a necessidade de personalização e as ferramentas disponíveis cria um cenário desafiador, mas também uma grande oportunidade para soluções inovadoras.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">The nutrition market has been going through a transformation, with an increasing demand for closer and more personalized monitoring. Nutritionists are looking for tools that go beyond face-to-face consultations, allowing for continuous and individualized patient tracking. However, many professionals still find it difficult to offer this level of attention, whether due to lack of time or adequate resources. This gap between the need for personalization and the available tools creates a challenging scenario, but also a great opportunity for innovative solutions.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">🤔 O problema</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">🤔 The problem</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Para iniciar o projeto de redesign, utilizei a Desk Research e percebi que existia uma falha de comunicação dentro do aplicativo. O usuário não era instruído da forma correta ao entrar pela primeira vez no app, o que ocasionava na falta de uso de diversas tarefas que o nutricionista propunha ao paciente na sua jornada de dieta, resultando em um desanimo e futuramente na desistência de usar o app.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">To start the redesign project, I used Desk Research and realized there was a communication gap within the application. The user was not properly instructed when entering the app for the first time, which caused a lack of engagement with the various tasks the nutritionist proposed to the patient in their diet journey, resulting in discouragement and ultimately the abandonment of the app.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-conecta/img-timeline-conecta.png" alt="Timeline do fluxo atual do Conecta" loading="lazy" className="placeholder-img" />
          <figcaption><Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Timeline do Projeto</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Project Timeline</span>
</Lang>
</Lang>
</Lang>
</Lang></figcaption>
        </figure>
		
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">✏️ UI Design e Prototipação</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">✏️ UI Design and Prototyping</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">A solução proposta foi melhorar a arquitetura de informação e a interface do app, para que o usuário tivesse uma experiência mais intuitiva e agradável, e que o nutricionista conseguisse acompanhar o progresso do paciente de forma mais eficiente.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">The proposed solution was to improve the app's information architecture and interface so that the user would have a more intuitive and pleasant experience, and the nutritionist could track the patient's progress more efficiently.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-conecta/img-conecta-prints-v1.png" alt="Prints do Conecta versão 1" loading="lazy" className="placeholder-img" />
          <figcaption><Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Versão antes do Redesign</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Version before Redesign</span>
</Lang>
</Lang>
</Lang>
</Lang></figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Para criar um novo fluxo, comecei pesquisando outras plataformas de nutrição e saúde para entender como elas funcionavam e quais eram os pontos fortes e fracos de cada uma. Com essas informações, criei um wireframe de baixa fidelidade para testar a nova arquitetura de informação e o fluxo de navegação.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">To create a new flow, I started by researching other nutrition and health platforms to understand how they worked and what their strengths and weaknesses were. With this information, I created a low-fidelity wireframe to test the new information architecture and navigation flow.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Com o wireframe aprovado, passei para a criação do design de alta fidelidade. Para isso, utilizei o Figma e criei uma paleta de cores mais suave e amigável, com tons de verde e azul para transmitir saúde e bem-estar. Além disso, criei um Design System para padronizar os elementos visuais e facilitar a criação de novas telas no futuro.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">With the wireframe approved, I moved on to creating the high-fidelity design. For this, I used Figma and created a softer and friendlier color palette, with shades of green and blue to convey health and well-being. In addition, I created a Design System to standardize the visual elements and facilitate the creation of new screens in the future.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-conecta/img-conecta-prints-atual.png" alt="Prints do Conecta versão final" loading="lazy" className="placeholder-img" />
          <figcaption><Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Solução final</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Final solution</span>
</Lang>
</Lang>
</Lang>
</Lang></figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">🎉 O resultado</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">🎉 The result</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">O redesign do app Conecta foi um sucesso. Os usuários relataram que o app ficou mais fácil de usar e que a nova interface era muito mais agradável. Além disso, os nutricionistas conseguiram acompanhar o progresso dos pacientes de forma mais eficiente, o que resultou em uma maior adesão ao tratamento e melhores resultados para os pacientes.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">The Conecta app redesign was a success. Users reported that the app became easier to use and that the new interface was much more pleasant. Furthermore, nutritionists were able to track their patients' progress more efficiently, which resulted in greater treatment adherence and better outcomes for the patients.</p>
</Lang>
</Lang>
</Lang>
</Lang>
      </div>
    </article>

    <section id="projetos" className="reveal" style={{"paddingTop":"4rem","borderBottom":"none"}}>
      <div className="container">
        <span className="section-label" style={{"marginBottom":"2rem","display":"block"}}>
          <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Confira também</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">See also</span>
</Lang>
</Lang>
</Lang>
</Lang>
        </span>
        <div className="projects-grid">

          <article className="project-card" id="project-001">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(01)</span>
                  <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="project-meta-tag lang-pt">SaaS Desktop</span>
</Lang>
</Lang>
</Lang>
</Lang>
                  <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="project-meta-tag lang-en">SaaS Desktop</span>
</Lang>
</Lang>
</Lang>
</Lang>
                </div>
                <span className="project-meta-year">2025-2026</span>
              </header>
              <div className="project-image-wrapper">
                <img src="/assets/banner-bradesco-negociacao.svg" alt="Banner do projeto Bradesco Negociação" className="project-image" loading="lazy" />
              </div>
              <div className="project-body-summary">
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h3 className="lang-pt">Bradesco Seguros - Modernização de sistema crítico de gestão</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h3 className="lang-en">Bradesco Seguros - Modernization of a critical management system</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="project-subtitle lang-pt">De sistema travado a fluxo que funciona: 10h a menos de trabalho manual por semana.</p>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="project-subtitle lang-en">From a stuck system to a flow that works: 10 fewer hours of manual work per week.</p>
</Lang>
</Lang>
</Lang>
</Lang>
              </div>
              <div className="project-actions">
                <Link to="/case-bradesco-senha" className="btn btn-expand-project" style={{textDecoration:'none', textAlign:'center'}}>
                  <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">View full case</span>
</Lang>
</Lang>
</Lang>
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
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="project-meta-tag lang-pt">App Mobile</span>
</Lang>
</Lang>
</Lang>
</Lang>
                  <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="project-meta-tag lang-en">Mobile App</span>
</Lang>
</Lang>
</Lang>
</Lang>
                </div>
                <span className="project-meta-year">2023</span>
              </header>
              <div className="project-image-wrapper">
                <img src="assets/banner-mobinft.png" alt="Banner do projeto Mobinft" className="project-image" loading="lazy" />
              </div>
              <div className="project-body-summary">
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h3 className="lang-pt">Mobinft: Comprar NFT sem precisar entender NFT</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h3 className="lang-en">Mobinft: Buying NFTs without needing to understand NFTs</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="project-subtitle lang-pt">Web3 sem manual de instruções: onboarding que transformou complexidade em primeira compra.</p>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="project-subtitle lang-en">Web3 without a manual: onboarding that turned complexity into the first purchase.</p>
</Lang>
</Lang>
</Lang>
</Lang>
              </div>
              <div className="project-actions">
                <Link to="/case-mobinft" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
                  <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Ver case completo</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">View full case</span>
</Lang>
</Lang>
</Lang>
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
