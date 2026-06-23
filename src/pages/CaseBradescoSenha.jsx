import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLang } from '../context/LangContext';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

const CaseBradescoSenha = () => {
  useScrollReveal();
  const { lang } = useLang();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'BradescoUX25') {
      navigate('/case-bradesco');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <section className="hero-case" style={{ paddingTop: '6rem' }}>
        <div className="container">
          <div className="hero-case-text" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
            <h1 className="lang-pt">Acesso Restrito</h1>
            <h1 className="lang-en">Restricted Access</h1>
            <p className="subtitle lang-pt">Bradesco Seguros — Modernização de sistema crítico de gestão</p>
            <p className="subtitle lang-en">Bradesco Seguros — Modernization of a critical management system</p>
          </div>
        </div>
      </section>

      <article className="case-content-section" style={{ minHeight: '40vh' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <p className="lang-pt"><strong>Para acessar o conteúdo completo, é necessário inserir a senha de acesso.</strong> Se você for um recrutador e ainda não possui a senha, sinta-se à vontade para me contatar que enviarei o acesso imediatamente.</p>
          <p className="lang-en"><strong>To access the full content, you must enter the access password.</strong> If you are a recruiter and do not yet have the password, feel free to contact me and I will send you the access immediately.</p>

          <form className="password-form" id="password-form" onSubmit={handleSubmit}>
            <label htmlFor="case-password">
              <span className="lang-pt">Senha de acesso:</span>
              <span className="lang-en">Access password:</span>
            </label>
            <input 
              type="password" 
              id="case-password" 
              className="password-input" 
              placeholder="***" 
              required 
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
            />
            <button type="submit" className="btn">
              <span className="lang-pt">Acessar case</span>
              <span className="lang-en">Access case</span>
            </button>
            
            {error && (
              <>
                <span className="error-msg lang-pt" style={{ display: 'block' }}>Senha incorreta. Por favor, tente novamente ou me mande uma mensagem para solicitar o acesso.</span>
                <span className="error-msg lang-en" style={{ display: 'block' }}>Incorrect password. Please try again or send me a message to request access.</span>
              </>
            )}
          </form>
        </div>
      </article>

      <section id="projetos" style={{ paddingTop: '4rem', borderBottom: 'none' }}>
        <div className="container">
          <div className="case-content" style={{ marginBottom: '3rem' }}>
            <h2 className="lang-pt" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Voltar para</h2>
            <h2 className="lang-en" style={{ fontSize: '1.8rem', marginBottom: '1.5rem', textAlign: 'center' }}>Back to</h2>
          </div>
          
          <div className="projects-grid">
            <Link to="/case-conecta" className="project-card">
              <div className="project-img-wrapper">
                <img src="/assets/Thumbnail-conecta.svg" alt="App Conecta Thumbnail" loading="lazy" />
              </div>
              <div className="project-info">
                <h3>Conecta</h3>
                <p className="lang-pt">Redesenhando a jornada do paciente: da confusão no primeiro acesso a um acompanhamento nutricional intuitivo</p>
                <p className="lang-en">Redesigning the patient journey: from confusion at first access to intuitive nutritional tracking</p>
                <span className="btn outline">Ver Case &rarr;</span>
              </div>
            </Link>
            
            <Link to="/case-mobinft" className="project-card">
              <div className="project-img-wrapper">
                <img src="/assets/banner-mobinft.png" alt="Mobinft App Thumbnail" loading="lazy" />
              </div>
              <div className="project-info">
                <h3>Mobinft</h3>
                <p className="lang-pt">Aumentar a receita em 20% projetando do zero uma carteira digital segura e fácil de usar para ativos na blockchain</p>
                <p className="lang-en">Increase revenue by 20% by designing a secure and easy-to-use digital wallet for blockchain assets from scratch</p>
                <span className="btn outline">Ver Case &rarr;</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseBradescoSenha;
