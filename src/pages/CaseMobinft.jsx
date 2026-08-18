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
      <Metadata 
        title={lang === 'en' ? 'Mobinft — NFT purchasing journey | Daniel Carvalho' : 'Mobinft — Jornada de compra de NFTs | Daniel Carvalho'} 
        description={lang === 'en' ? 'Research, prototyping, and usability testing to simplify the purchase of an NFT-based digital key.' : 'Pesquisa, prototipação e testes de usabilidade para simplificar a compra de uma chave digital baseada em NFT.'} 
        canonicalPath={lang === 'en' ? '/en/cases/mobinft' : '/cases/mobinft'} 
      />

      <main className="case-study-main">
        <article className="case-study-article">
          
          <header className="case-hero container">
            <Lang id="pt">
              <span className="eyebrow lang-pt">03 / Aplicativo mobile · UX project</span>
              <h1 className="lang-pt">Mobinft — Simplificando a compra de chaves digitais em Web3</h1>
              <p className="case-summary lang-pt">Pesquisei e prototipei uma jornada de compra para pessoas sem experiência prévia com NFTs. Duas rodadas de testes de usabilidade orientaram as mudanças no fluxo.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">03 / Mobile app · UX project</span>
              <h1 className="lang-en">Mobinft — Simplifying the purchase of digital keys in Web3</h1>
              <p className="case-summary lang-en">I researched and prototyped a purchasing journey for people with no prior NFT experience. Two rounds of usability testing informed the changes to the flow.</p>
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
                <span className="fact-value">2023</span>
              </div>
              <div className="fact-item">
                <Lang id="pt"><span className="fact-label lang-pt">Tempo de leitura</span></Lang>
                <Lang id="en"><span className="fact-label lang-en">Read time</span></Lang>
                <Lang id="pt"><span className="fact-value lang-pt">4 min</span></Lang>
                <Lang id="en"><span className="fact-value lang-en">4 min</span></Lang>
              </div>
            </div>

            <img src="/assets/banner-mobinft.png" alt="Mobinft App" className="case-hero-image" loading="lazy" />
          </header>

          <div className="container case-body">
            <div className="case-content">
              <Lang id="pt"><h2 className="lang-pt">Contexto e problema</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Context and problem</h2></Lang>
              <Lang id="pt"><p className="lang-pt">A Mobinft usava uma chave digital baseada em NFT para dar acesso a viagens em veículos autônomos a partir de aeroportos. Para comprá-la, uma pessoa sem experiência com Web3 precisava lidar com conceitos desconhecidos e etapas técnicas que tornavam a compra mais difícil.</p></Lang>
              <Lang id="en"><p className="lang-en">Mobinft used an NFT-based digital key to provide access to autonomous vehicle rides from airports. People with no Web3 experience had to understand unfamiliar concepts and complete technical steps before buying the key.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Objetivo do projeto</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Project objective</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Ajudar novos usuários a entender as etapas da compra e adquirir a chave digital com menos dúvidas. Como objetivo de negócio definido pela empresa, a meta era aumentar a base de clientes em 20%.</p></Lang>
              <Lang id="en"><p className="lang-en">Help new users understand each step and complete the purchase with clear guidance. As a business objective, the goal was to grow the customer base by 20%.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Pesquisa e decisão</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Research and decision</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Na pesquisa, as pessoas tiveram dificuldade para entender os conceitos e termos usados na compra. Por isso, o primeiro wireframe incluía um onboarding que apresentava esses conceitos antes da compra.</p></Lang>
              <Lang id="en"><p className="lang-en">During research, people struggled to understand the concepts and terms used in the purchase. The first wireframe therefore included onboarding that introduced those concepts before the purchase.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Prototipação e testes</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Prototyping and testing</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Testei o primeiro wireframe com seis participantes sem experiência prévia com NFTs. As dúvidas sobre o tutorial do onboarding orientaram mudanças na ordem e na apresentação dos conceitos. Parte das orientações também passou a aparecer durante a compra. Depois, uma segunda rodada com cinco participantes avaliou a interface de alta fidelidade.</p></Lang>
              <Lang id="en"><p className="lang-en">I tested the first wireframe with six participants who had no previous NFT experience. Their questions about the onboarding tutorial informed changes to the order and presentation of the concepts. Some guidance also moved into the purchase flow. A second round with five participants then evaluated the high-fidelity interface.</p></Lang>

              <figure style={{ margin: "32px 0" }}>
                <img src="/assets/case-mobinft/img-hifi-mobinft.png" alt="Telas de alta fidelidade do aplicativo Mobinft" loading="lazy" style={{ width: "100%", border: "1px solid var(--color-border-subtle)" }} />
                <figcaption style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)", marginTop: "8px" }}>
                  <Lang id="pt"><span className="lang-pt">Interface final refinada com os achados da pesquisa</span></Lang>
                  <Lang id="en"><span className="lang-en">Final interface refined with research findings</span></Lang>
                </figcaption>
              </figure>
            </div>

            <aside className="case-rail">
              <div style={{ padding: "24px", backgroundColor: "var(--color-surface)", border: "1px solid var(--color-border-subtle)" }}>
                <h4 style={{ fontSize: "1.125rem", marginBottom: "16px", fontFamily: "var(--font-title)", color: "var(--color-text-primary)" }}>
                  <Lang id="pt"><span className="lang-pt">O Essencial</span></Lang>
                  <Lang id="en"><span className="lang-en">Key Takeaways</span></Lang>
                </h4>
                <ul style={{ paddingLeft: "20px", fontSize: "0.9375rem", color: "var(--color-text-secondary)" }}>
                  <Lang id="pt">
                    <li className="lang-pt" style={{ marginBottom: "8px" }}><strong>+20% base de clientes:</strong> alcance da meta comercial.</li>
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Onboarding contextual no lugar de tutorial isolado.</li>
                    <li className="lang-pt" style={{ marginBottom: "8px" }}>Testes de usabilidade com usuários leigos em Web3.</li>
                    <li className="lang-pt">Identificação de barreiras semânticas na interface.</li>
                  </Lang>
                  <Lang id="en">
                    <li className="lang-en" style={{ marginBottom: "8px" }}><strong>+20% customer base:</strong> achieving the business goal.</li>
                    <li className="lang-en" style={{ marginBottom: "8px" }}>Contextual onboarding instead of a standalone tutorial.</li>
                    <li className="lang-en" style={{ marginBottom: "8px" }}>Usability testing with non-Web3 users.</li>
                    <li className="lang-en">Identification of semantic barriers in the interface.</li>
                  </Lang>
                </ul>
              </div>
            </aside>
          </div>

          <div className="case-resultados">
            <div className="container">
              <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <Lang id="pt"><h2 className="lang-pt">Resultado e aprendizado</h2></Lang>
                <Lang id="en"><h2 className="lang-en">Result and learnings</h2></Lang>
                <Lang id="pt"><p className="lang-pt" style={{ fontSize: "1.125rem" }}>A segunda rodada indicou melhora na compreensão do tutorial, mas revelou uma nova ambiguidade: durante a compra, participantes escolheram “marketplace” com mais frequência do que “chave”. O achado mostrou que a terminologia e as opções de compra ainda precisavam ser refinadas, porém o objetivo principal de expansão da base foi atingido com sucesso.</p></Lang>
                <Lang id="en"><p className="lang-en" style={{ fontSize: "1.125rem" }}>The second round showed improvement in tutorial comprehension but revealed a new ambiguity: during the purchase, participants chose "marketplace" more frequently than "key." This finding showed that terminology and purchasing options still needed refinement, yet the main objective of expanding the user base was successfully achieved.</p></Lang>
              </div>
            </div>
          </div>
        </article>

        <section className="case-next">
          <div className="container">
            <Lang id="pt"><h3 className="lang-pt">Confira também</h3></Lang>
            <Lang id="en"><h3 className="lang-en">See also</h3></Lang>
            <div style={{ marginTop: "32px", display: "flex", gap: "24px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/cases/bradesco-seguros-completo" className="project-card" style={{ display: "block", textAlign: "left", width: "100%", maxWidth: "400px" }}>
                <div className="project-meta" style={{ marginBottom: "16px" }}>
                  <Lang id="pt"><span className="lang-pt">01 / Sistema corporativo · Desktop</span></Lang>
                  <Lang id="en"><span className="lang-en">01 / Enterprise system · Desktop</span></Lang>
                </div>
                <Lang id="pt"><h4 className="lang-pt" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Bradesco Seguros — Modernização de sistema crítico</h4></Lang>
                <Lang id="en"><h4 className="lang-en" style={{ fontSize: "1.25rem", marginBottom: "8px" }}>Bradesco Seguros — Modernizing a critical system</h4></Lang>
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

export default CaseMobinft;
