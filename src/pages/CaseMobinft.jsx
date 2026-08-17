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
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Mobinft - Descomplicando a Web3: Simplificando o processo de compra de NFT's</span>
</Lang>
</Lang>
</Lang>
</Lang>
          <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Mobinft - Uncomplicating Web3: Simplifying the NFT purchasing process</span>
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
<span className="lang-pt">Aprimorando a jornada de compra de NFTs com UX Design: técnicas e estratégias.</span>
</Lang>
</Lang>
</Lang>
</Lang>
          <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Improving the NFT purchasing journey with UX Design: techniques and strategies.</span>
</Lang>
</Lang>
</Lang>
</Lang>
        </p>
        
        <div className="case-author">
          <div className="author-avatar">
            <div style={{"width":"48px","height":"48px","borderRadius":"50%","backgroundColor":"var(--accent-pink)","display":"flex","alignItems":"center","justifyContent":"center","color":"white","fontWeight":"bold","fontSize":"1.2rem"}}>DJ</div>
          </div>
          <div className="author-info">
            <span className="author-name">Daniel Carvalho</span>
            <span className="case-date">Product Designer &bull; <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">4 min de leitura</span>
</Lang>
</Lang>
</Lang>
</Lang><Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">4 min read</span>
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
<p className="lang-pt">O Mobinft proporciona viagens em carros autônomos ilimitadas a partir de aeroportos para usuários que possuam uma chave digital (NFT).</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Mobinft provides unlimited autonomous car rides from airports for users who own a digital key (NFT).</p>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">No entanto, adquirir essa chave pode ser um desafio para novos usuários devido ao conhecimento técnico requerido. Com o objetivo de tornar o processo mais acessível a todos, a empresa está trabalhando para simplificá-lo.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">However, acquiring this key can be a challenge for new users due to the required technical knowledge. Aiming to make the process more accessible to everyone, the company is working to simplify it.</p>
</Lang>
</Lang>
</Lang>
</Lang>

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
<p className="lang-pt">Os usuários podem enfrentar desafios para se adaptar à tecnologia de NFT (non-fungible token), pois podem achar ela complexa. De acordo com estatísticas, apenas 2,8% dos americanos possuem um NFT atualmente e 3,9% planejam possuir algum dia. Além disso, o estudo "Non-Fungible Token (NFT): Overview, Evaluation, Opportunities and Challenges (2021)" destaca problemas de usabilidade como a confirmação lenta para transações no sistema e taxas elevadas. No entanto, é importante notar que o mercado de NFTs está em constante crescimento e apresenta muitas oportunidades. Em 2021, foram realizadas mais de 27 milhões de vendas de NFT e o volume de dólares negociados foi de $17 bilhões, o que representa um aumento de mais de 21.000% em relação ao ano anterior.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Users might face challenges adapting to NFT (non-fungible token) technology, as they can find it complex. According to statistics, only 2.8% of Americans currently own an NFT and 3.9% plan to own one someday. In addition, the study "Non-Fungible Token (NFT): Overview, Evaluation, Opportunities and Challenges (2021)" highlights usability issues such as slow transaction confirmation in the system and high fees. However, it's important to note that the NFT market is constantly growing and presents many opportunities. In 2021, over 27 million NFT sales were made and the volume of traded dollars reached $17 billion, representing an increase of over 21,000% compared to the previous year.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-crescimento-compra-nft.png" alt="Gráfico de crescimento da compra de NFT" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">As vendas mensais de NFTs (non-fungible token) cresceram muito no último ano, de acordo com dados da fonte Nonfungible.</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Monthly sales of NFTs (non-fungible tokens) grew significantly over the last year, according to data from Nonfungible.</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">🎯 Objetivo de negócio</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">🎯 Business objective</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Com base em nosso entendimento aprofundado do mercado e do problema em questão, estabelecemos uma meta clara a ser alcançada por meio da solução proposta:</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Based on our in-depth understanding of the market and the problem at hand, we established a clear goal to be achieved through the proposed solution:</p>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt"><em>"Nosso objetivo é aumentar em 20% da base de clientes em 3 meses, simplificando o processo de transação e gestão de NFT's, além de investir em estratégias de marketing para proporcionar uma oportunidade única de investimento e entretenimento para nossos clientes."</em></p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en"><em>"Our goal is to increase our customer base by 20% in 3 months, by simplifying the transaction and management process of NFTs, along with investing in marketing strategies to provide a unique investment and entertainment opportunity for our clients."</em></p>
</Lang>
</Lang>
</Lang>
</Lang>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">🔎 Resultados da Pesquisa de UX - Entendendo as Necessidades dos Usuários</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">🔎 UX Research Results - Understanding User Needs</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Com base em nossa pesquisa, realizada por meio de entrevistas, supomos que a falta de tutoriais e guias claros possa representar um grande obstáculo para a compra de NFTs.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Based on our research, conducted through interviews, we assume that the lack of clear tutorials and guides may represent a major obstacle for purchasing NFTs.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-comentarios.png" alt="Comentários dos entrevistados" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Comentários dos Entrevistados</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Interviewee Comments</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Em relação à pesquisa quantitativa, aproximadamente 80% dos usuários indicaram que sentiram falta dos seguintes elementos:</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Regarding the quantitative research, approximately 80% of users indicated that they missed the following elements:</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-resultado-pesquisa-nft.png" alt="Gráficos de pesquisa sobre UX de NFTs" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Principais insights identificados por meio da pesquisa quantitativa</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Main insights identified through quantitative research</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h2 className="lang-pt">💡 Ideação e Priorização</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h2 className="lang-en">💡 Ideation and Prioritization</h2>
</Lang>
</Lang>
</Lang>
</Lang>
        
        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Com base nos resultados da pesquisa, optamos por concentrar nossos esforços no desenvolvimento de um tutorial e guia de fluxo do usuário, visando aprimorar a experiência de compra de NFTs.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">Based on the research results, we decided to focus our efforts on developing a tutorial and user flow guide, aiming to improve the NFT purchasing experience.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-ideacao-nft.png" alt="Wireframes e fluxos da ideação" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Ideação: Fluxos sugeridos</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Ideation: Suggested flows</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
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
<p className="lang-pt">Após concluir a primeira versão do wireframe, realizamos um teste de usabilidade com 6 participantes sem experiência prévia com NFTs. Durante esse processo, identificamos problemas no tutorial inicial do aplicativo.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">After completing the first version of the wireframe, we conducted a usability test with 6 participants with no previous experience with NFTs. During this process, we identified issues in the app's initial tutorial.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-resultado-teste-usabilidade.png" alt="Resultados do teste de usabilidade" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Resultados obtidos no teste de usabilidade da primeira versão do wireframe</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Results obtained from the usability test of the first wireframe version</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Após os testes de usabilidade dos wireframes de baixa fidelidade, criamos um Design System com o objetivo de melhorar a experiência do usuário por meio de uma interface moderna, acolhedora e confiável.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">After usability testing of the low-fidelity wireframes, we created a Design System aiming to improve the user experience through a modern, welcoming, and reliable interface.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure" style={{"display":"flex","flexDirection":"column","gap":"1rem"}}>
          <img src="assets/case-mobinft/img-tipografia-mobinft.png" alt="Tipografia escolhida para o app Mobinft" loading="lazy" className="placeholder-img" />
          <img src="assets/case-mobinft/img-cores-mobinft.png" alt="Paleta de cores para o app Mobinft" loading="lazy" className="placeholder-img" />
          <figcaption style={{"marginTop":"0"}}>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Design System: Tipografia e Cores</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Design System: Typography and Colors</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Após realizar os ajustes finais no tutorial, mudando a abordagem de ensino dos conceitos e a ordem deles, construímos um protótipo de alta fidelidade do aplicativo.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">After making final adjustments to the tutorial, changing the teaching approach to concepts and their order, we built a high-fidelity prototype of the app.</p>
</Lang>
</Lang>
</Lang>
</Lang>

        <figure className="case-figure">
          <img src="assets/case-mobinft/img-hifi-mobinft.png" alt="Telas finais do aplicativo em alta fidelidade" loading="lazy" className="placeholder-img" />
          <figcaption>
            <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<span className="lang-pt">Telas finais em Alta Fidelidade</span>
</Lang>
</Lang>
</Lang>
</Lang>
            <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<span className="lang-en">Final High-Fidelity Screens</span>
</Lang>
</Lang>
</Lang>
</Lang>
          </figcaption>
        </figure>

        <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="lang-pt">Após realizar um teste final com 5 usuários, conseguimos solucionar o problema do tutorial. No entanto, notamos que durante a compra de chaves, os usuários clicaram mais em "marketplace" do que em "chave". Isso destaca a necessidade de aprimorar as opções de compra em futuras versões.</p>
</Lang>
</Lang>
</Lang>
</Lang>
        <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="lang-en">After conducting a final test with 5 users, we managed to solve the tutorial issue. However, we noticed that during key purchases, users clicked more on "marketplace" than on "key". This highlights the need to improve purchasing options in future versions.</p>
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

          <article className="project-card" id="project-002">
            <div className="project-main-info">
              <header className="project-header">
                <div className="project-header-left">
                  <span className="project-meta-number">(02)</span>
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
                <span className="project-meta-year">2024-2025</span>
              </header>
              <div className="project-image-wrapper">
                <img src="assets/Thumbnail-conecta.svg" alt="Banner do projeto Conecta" className="project-image" loading="lazy" />
              </div>
              <div className="project-body-summary">
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<h3 className="lang-pt">Redesign do app Conecta</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<h3 className="lang-en">Conecta app Redesign</h3>
</Lang>
</Lang>
</Lang>
</Lang>
                
                <Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<Lang id="pt">
<p className="project-subtitle lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo.</p>
</Lang>
</Lang>
</Lang>
</Lang>
                <Lang id="en">
<Lang id="en">
<Lang id="en">
<Lang id="en">
<p className="project-subtitle lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking.</p>
</Lang>
</Lang>
</Lang>
</Lang>
              </div>
              <div className="project-actions">
                <Link to="/case-conecta" className="btn btn-expand-project" style={{"textDecoration":"none","textAlign":"center"}}>
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

export default CaseMobinft;
