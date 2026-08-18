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
              <p className="case-summary lang-pt">Pesquisa e prototipação de uma jornada de compra para pessoas sem experiência prévia com NFTs, refinada em duas rodadas de testes de usabilidade.</p>
            </Lang>
            <Lang id="en">
              <span className="eyebrow lang-en">03 / Mobile app · UX project</span>
              <h1 className="lang-en">Mobinft — Simplifying the purchase of digital keys in Web3</h1>
              <p className="case-summary lang-en">Research and prototyping for a purchasing journey designed for people with no prior NFT experience, refined through two rounds of usability testing.</p>
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
              <Lang id="pt"><p className="lang-pt">A Mobinft propunha o uso de uma chave digital baseada em NFT para dar acesso a viagens em veículos autônomos a partir de aeroportos. Para pessoas sem experiência com Web3, adquirir essa chave exigia compreender conceitos e etapas técnicas que criavam uma barreira de entrada.</p></Lang>
              <Lang id="en"><p className="lang-en">Mobinft proposed using an NFT-based digital key to provide access to autonomous vehicle rides from airports. For people with no Web3 experience, acquiring this key required understanding technical concepts and steps that created a barrier to entry.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Objetivo do projeto</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Project objective</h2></Lang>
              <Lang id="pt"><p className="lang-pt">Reduzir a barreira de compreensão e tornar a jornada de aquisição da chave digital mais clara para novos usuários. (Aumentar a base de clientes em 20% era um objetivo de negócio relacionado à iniciativa).</p></Lang>
              <Lang id="en"><p className="lang-en">Reduce the barrier to understanding and make the digital key acquisition journey clearer for new users. (Increasing the customer base by 20% was a business objective related to the initiative).</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Pesquisa e decisão</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Research and decision</h2></Lang>
              <Lang id="pt"><p className="lang-pt">A pesquisa indicou dificuldade para compreender conceitos, etapas e termos do processo de compra. Com base nessas evidências, priorizamos um onboarding contextual e orientações distribuídas ao longo do fluxo, em vez de depender de um tutorial isolado.</p></Lang>
              <Lang id="en"><p className="lang-en">Research indicated difficulty understanding concepts, steps, and terms of the purchasing process. Based on this evidence, we prioritized contextual onboarding and guidance distributed throughout the flow, rather than relying on a standalone tutorial.</p></Lang>

              <Lang id="pt"><h2 className="lang-pt">Prototipação e testes</h2></Lang>
              <Lang id="en"><h2 className="lang-en">Prototyping and testing</h2></Lang>
              <Lang id="pt"><p className="lang-pt">A primeira versão do wireframe foi testada com seis participantes sem experiência prévia com NFTs. Os problemas identificados no tutorial orientaram mudanças na ordem e na forma de apresentar os conceitos. Uma segunda rodada, com cinco participantes, avaliou a versão de alta fidelidade.</p></Lang>
              <Lang id="en"><p className="lang-en">The first wireframe version was tested with six participants with no prior NFT experience. The problems identified in the tutorial guided changes in the order and way concepts were presented. A second round, with five participants, evaluated the high-fidelity version.</p></Lang>

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
